# SauceDemo (Swag Labs) Playwright E2E Automation Testing

Project ini merupakan repositori *End-to-End (E2E) Automation Testing* berbasis JavaScript menggunakan **Playwright** untuk menguji alur pembelian e-commerce pada situs [Swag Labs (SauceDemo)](https://www.saucedemo.com/). Project ini disusun sebagai bagian dari **Technical Test QA Engineer - HashMicro**.

---

## 📌 Deskripsi Skenario Pengujian

Skenario pengujian E2E yang diotomatisasi dalam berkas `tests/swag-labs.spec.js` mencakup alur berikut:
1. **Login**: Melakukan autentikasi di halaman login ([https://www.saucedemo.com/](https://www.saucedemo.com/)) menggunakan kredensial:
   - **Username**: `standard_user`
   - **Password**: `secret_sauce`
   - Memastikan pengguna berhasil diarahkan ke halaman inventory (`/inventory.html`).
2. **Add to Cart**: Menambahkan produk **"Sauce Labs Backpack"** ke dalam keranjang belanja dan memverifikasi indikator badge keranjang.
3. **Cart Page**: Mengklik icon keranjang belanja untuk masuk ke halaman Cart ([https://www.saucedemo.com/cart.html](https://www.saucedemo.com/cart.html)) serta memastikan produk item berada di keranjang.
4. **Checkout**: Mengklik tombol **"Checkout"** dan memastikan sistem mengarahkan pengguna ke halaman formulir checkout ([https://www.saucedemo.com/checkout-step-one.html](https://www.saucedemo.com/checkout-step-one.html)).

---

## 💻 Prasyarat (Prerequisites)

Sebelum menjalankan pengujian ini, pastikan sistem Anda telah memenuhi prasyarat berikut:
- **Node.js**: Versi **v18.x** atau lebih baru (direkomendasikan versi LTS).
- **npm**: Versi **v9.x** atau lebih baru (bawaan dari Node.js).

Cek versi Node.js & npm di terminal:
```bash
node -v
npm -v
```

---

## 🚀 Cara Install Dependencies

1. Clone repositori ini ke komputer Anda:
   ```bash
   git clone <URL_REPOSITORY_GITHUB_ANDA>
   cd saucedemo-playwright-automation
   ```

2. Install seluruh node modules/dependencies project:
   ```bash
   npm install
   ```

3. Install browser binary yang dibutuhkan oleh Playwright (Chromium):
   ```bash
   npx playwright install chromium
   ```

---

## 🧪 Cara Menjalankan Testing

Anda dapat menjalankan pengujian menggunakan berbagai mode perintah yang telah disediakan di `package.json`:

| Perintah | Deskripsi |
| :--- | :--- |
| `npm test` | Menjalankan test dalam mode **Headless** (tanpa muka browser). |
| `npm run test:headed` | Menjalankan test dalam mode **Headed** (terlihat layar browser saat diuji). |
| `npm run test:ui` | Menjalankan Playwright dengan **Interactive UI Mode** (sangat berguna untuk debugging). |
| `npm run test:debug` | Menjalankan test dengan mode **Debug Inspector**. |

Atau secara langsung menggunakan perintah Playwright CLI:
```bash
# Running test default (headless)
npx playwright test

# Running test dengan browser terlihat (headed)
npx playwright test --headed

# Running test spesifik pada file swag-labs.spec.js
npx playwright test tests/swag-labs.spec.js --headed
```

---

## 📊 Cara Melihat HTML Report

Setelah proses pengujian selesai, Playwright secara otomatis akan membuat laporan berbasis HTML di dalam folder `playwright-report/`.

Untuk melihat laporan interaktif hasil eksekusi pengujian di browser:
```bash
npm run test:report
```
*atau:*
```bash
npx playwright show-report
```

---

## 🤖 Continuous Integration (GitHub Actions)

Repositori ini telah dilengkapi dengan workflow CI/CD berbasis **GitHub Actions** (`.github/workflows/playwright.yml`). 
- **Trigger**: Otomatis berjalan setiap kali ada `push` atau `pull_request` ke branch `main` atau `master`.
- **Artifact**: Laporan hasil pengujian (HTML report) akan otomatis diunggah sebagai *artifact* GitHub Actions dan dapat diunduh setelah pipeline selesai.

---

## 📁 Struktur Folder Project

```text
saucedemo-playwright-automation/
├── .github/
│   └── workflows/
│       └── playwright.yml      # Konfigurasi GitHub Actions CI/CD Pipeline
├── tests/
│   └── swag-labs.spec.js       # File skenario E2E Playwright Automation Test
├── .gitignore                  # File/folder yang diabaikan oleh Git
├── package.json                # Project manifest, script runner & dependencies
├── playwright.config.js        # Konfigurasi utama Playwright Test Runner
└── README.md                   # Dokumentasi teknis project (Bahasa Indonesia)
```
