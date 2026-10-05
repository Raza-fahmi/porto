const { test, expect } = require('@playwright/test');

test.describe('Swag Labs (SauceDemo) E2E Automation Flow', () => {

  test('E2E Flow: Login -> Add to Cart -> View Cart -> Redirect to Checkout', async ({ page }) => {
    // 1. Login ke homepage
    await page.goto('https://www.saucedemo.com/');
    await expect(page).toHaveTitle(/Swag Labs/);

    // Fill credentials menggunakan selector data-test
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();

    // Verifikasi berhasil login (redirect ke page inventory & title 'Products' muncul)
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await expect(page.locator('.title')).toHaveText('Products');

    // 2. Klik "Add to cart" pada barang (Sauce Labs Backpack)
    const backpackItem = page.locator('.inventory_item').filter({ hasText: 'Sauce Labs Backpack' });
    await expect(backpackItem).toBeVisible();

    const addToCartBtn = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
    await addToCartBtn.click();

    // Verifikasi badge keranjang terupdate menjadi 1 dan button berubah jadi "Remove"
    const cartBadge = page.locator('[data-test="shopping-cart-badge"]');
    await expect(cartBadge).toHaveText('1');
    await expect(page.locator('[data-test="remove-sauce-labs-backpack"]')).toBeVisible();

    // 3. Klik icon "Cart" untuk redirect ke page Cart
    const cartIcon = page.locator('[data-test="shopping-cart-link"]');
    await cartIcon.click();

    // Verifikasi URL cart dan barang berada di dalam keranjang
    await expect(page).toHaveURL('https://www.saucedemo.com/cart.html');
    await expect(page.locator('.title')).toHaveText('Your Cart');
    await expect(page.locator('.inventory_item_name')).toHaveText('Sauce Labs Backpack');

    // 4. Klik button "Checkout"
    const checkoutBtn = page.locator('[data-test="checkout"]');
    await checkoutBtn.click();

    // Verifikasi redirect ke page checkout step one
    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-one.html');
    await expect(page.locator('.title')).toHaveText('Checkout: Your Information');
  });

});
