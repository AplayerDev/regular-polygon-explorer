# Regular Polygon Explorer

**Regular Polygon Explorer** یک ابزار تعاملی و حرفه‌ای برای مشاهده، بررسی و مقایسهٔ چندضلعی‌های منتظم است که با **HTML5، CSS3 و Vanilla JavaScript** ساخته شده است.

این پروژه بدون فریم‌ورک و بدون وابستگی خارجی طراحی شده و می‌تواند مستقیماً در مرورگر اجرا شود یا از طریق **GitHub Pages** منتشر شود.

---

## 🇮🇷 فارسی

### معرفی

**Regular Polygon Explorer** یک کاوشگر تعاملی برای نمایش و بررسی چندضلعی‌های منتظم است.

کاربر می‌تواند تعداد اضلاع را تغییر دهد، شکل را بچرخاند و بزرگ‌نمایی کند، ویژگی‌های ظاهری آن را تغییر دهد و اطلاعات ریاضی مربوط به چندضلعی را مشاهده کند.

این پروژه همچنین امکان مشاهدهٔ نزدیک شدن چندضلعی‌های منتظم به دایره را با افزایش تعداد اضلاع فراهم می‌کند.

---

### ✨ امکانات

* رسم چندضلعی‌های منتظم با **HTML Canvas**
* پشتیبانی از **۳ تا ۱,۰۰۰,۰۰۰ ضلع**
* Slider برای انتخاب تعداد اضلاع
* تعدادهای خاص:

  * 50
  * 100
  * 500
  * 1,000
  * 5,000
  * 10,000
  * 100,000
  * 1,000,000
* Presetهای آماده از Triangle تا Circle-like
* انیمیشن Morph هنگام تغییر شکل
* چرخش با Slider
* چرخش با Drag روی Canvas
* Zoom با:

  * دکمه‌ها
  * Mouse Wheel
  * Keyboard
* نمایش رأس‌های چندضلعی
* نمایش دایرهٔ محیطی
* حالت مقایسه با دایره
* انتخاب رنگ داخل چندضلعی
* انتخاب رنگ خط
* تنظیم ضخامت خط
* خروجی گرفتن به:

  * PNG
  * SVG
* حالت Fullscreen
* Reset کامل تنظیمات
* ذخیرهٔ تنظیمات با `localStorage`
* Keyboard Shortcuts
* طراحی Responsive
* پشتیبانی از RTL و LTR
* پشتیبانی از زبان فارسی و انگلیسی
* تغییر زبان از داخل خود برنامه
* پشتیبانی از فونت فارسی
* Accessibility
* بهینه‌سازی Rendering برای تعداد اضلاع بسیار زیاد
* بدون Backend
* بدون Framework
* بدون کتابخانهٔ خارجی

---

### 🌐 پشتیبانی از زبان

برنامه دارای سیستم دو زبانه است و کاربر می‌تواند زبان رابط کاربری را از داخل برنامه تغییر دهد:

* 🇮🇷 فارسی
* 🇬🇧 English

با تغییر زبان:

* متن دکمه‌ها تغییر می‌کند.
* عنوان‌ها و توضیحات تغییر می‌کنند.
* اطلاعات ریاضی ترجمه می‌شوند.
* نام چندضلعی‌ها ترجمه می‌شوند.
* جهت رابط کاربری بین `RTL` و `LTR` تغییر می‌کند.
* متن‌های مربوط به Keyboard Shortcuts تغییر می‌کنند.
* رابط کاربری بدون Reload شدن صفحه تغییر می‌کند.

زبان انتخاب‌شده نیز در `localStorage` ذخیره می‌شود.

---

### 🔤 فونت فارسی

برای نمایش صحیح متن فارسی، پروژه از فونت فارسی استفاده می‌کند.

فونت در داخل پروژه قرار می‌گیرد و به سرویس خارجی وابسته نیست.

ساختار پیشنهادی:

```text
regular-polygon-explorer/
├── index.html
├── style.css
├── script.js
├── fonts/
│   ├── Vazirmatn-Regular.woff2
│   ├── Vazirmatn-Medium.woff2
│   ├── Vazirmatn-SemiBold.woff2
│   └── Vazirmatn-Bold.woff2
├── README.md
└── LICENSE
```

در حالت انگلیسی نیز رابط کاربری از فونت مناسب لاتین استفاده می‌کند.

---

## 🎨 رابط کاربری

رابط کاربری پروژه با تمرکز بر سادگی و تجربهٔ کاربری طراحی شده است.

ساختار کلی شامل:

1. Header
2. Canvas
3. کنترل تعداد اضلاع
4. تعدادهای خاص
5. Presetها
6. کنترل Rotation
7. تنظیمات Appearance
8. تنظیمات نمایش
9. Export
10. اطلاعات ریاضی
11. توضیحات آموزشی
12. Keyboard Shortcuts

است.

---

## 📐 Mathematical Background

برای یک چندضلعی منتظم با `n` ضلع، زاویهٔ مرکزی از رابطهٔ زیر محاسبه می‌شود:

```text
360° / n
```

زاویهٔ داخلی:

```text
((n − 2) × 180°) / n
```

نسبت مساحت چندضلعی به دایرهٔ محیطی:

```text
n × sin(2π/n) / (2π)
```

با افزایش تعداد اضلاع، زاویهٔ مرکزی هر ضلع کاهش پیدا می‌کند و مرز چندضلعی به محیط دایره نزدیک‌تر می‌شود.

به همین دلیل:

```text
n → ∞
```

چندضلعی منتظم از نظر بصری به یک دایره نزدیک می‌شود.

---

## ⚡ Performance

پروژه برای کار با چندضلعی‌های بزرگ بهینه شده است.

برای مثال، کاربر می‌تواند:

```text
1,000,000 sides
```

را انتخاب کند.

در این حالت مقدار واقعی `n` همچنان در محاسبات ریاضی و اطلاعات برنامه حفظ می‌شود، اما Canvas مجبور نیست یک میلیون segment مستقل را در هر فریم رسم کند.

در عوض، تعداد segmentهای قابل مشاهده بر اساس اندازهٔ Canvas و Zoom محدود می‌شود.

این روش باعث می‌شود:

* مصرف CPU کاهش پیدا کند.
* تعداد عملیات Canvas کاهش پیدا کند.
* Animation روان‌تر باقی بماند.
* حافظهٔ کمتری مصرف شود.
* ظاهر چندضلعی در مقیاس نمایش تقریباً بدون تغییر باقی بماند.

---

## 🖱️ Controls

### تغییر تعداد اضلاع

از Slider اصلی می‌توان تعداد اضلاع بین:

```text
3 — 25
```

را انتخاب کرد.

برای تعدادهای بزرگ‌تر می‌توان از Special Values استفاده کرد.

---

### Rotation

چرخش شکل از طریق Slider یا Drag روی Canvas امکان‌پذیر است.

---

### Zoom

Zoom از سه روش انجام می‌شود:

* دکمه‌های `+` و `−`
* Mouse Wheel
* Keyboard

---

### Drag

با گرفتن Canvas و حرکت دادن Mouse یا Pointer می‌توان چندضلعی را چرخاند.

این قابلیت برای دستگاه‌های لمسی نیز طراحی شده است.

---

## ⌨️ Keyboard Shortcuts

| کلید          | عملکرد             |
| ------------- | ------------------ |
| `Arrow Up`    | افزایش تعداد اضلاع |
| `Arrow Right` | افزایش تعداد اضلاع |
| `Arrow Down`  | کاهش تعداد اضلاع   |
| `Arrow Left`  | کاهش تعداد اضلاع   |
| `R`           | Reset              |
| `F`           | Fullscreen         |
| `+`           | Zoom In            |
| `-`           | Zoom Out           |

میانبرها زمانی که کاربر در حال تایپ داخل `input`، `textarea` یا `select` باشد، غیرفعال هستند.

---

## 💾 حفظ تنظیمات

تنظیمات کاربر با استفاده از:

```javascript
localStorage
```

ذخیره می‌شوند.

مواردی مانند:

* تعداد اضلاع
* Rotation
* Zoom
* رنگ داخل
* رنگ خط
* ضخامت خط
* نمایش رأس‌ها
* نمایش دایره
* حالت مقایسه
* زبان انتخاب‌شده

می‌توانند پس از Reload صفحه حفظ شوند.

---

## 📤 Export

### PNG

کاربر می‌تواند شکل فعلی را به صورت تصویر PNG ذخیره کند.

نام فایل به شکل زیر خواهد بود:

```text
regular-polygon-4.png
```

---

### SVG

امکان Export شکل به صورت SVG نیز وجود دارد.

SVG برای استفاده در نرم‌افزارهای گرافیکی و ویرایش بیشتر مناسب است.

نام فایل:

```text
regular-polygon-4.svg
```

---

## 📱 Responsive Design

رابط کاربری برای اندازه‌های مختلف صفحه طراحی شده است:

* Desktop
* Laptop
* Tablet
* Mobile

در صفحات کوچک، بخش کنترل‌ها به صورت عمودی نمایش داده می‌شود و Canvas نیز متناسب با اندازهٔ صفحه تغییر می‌کند.

---

## ♿ Accessibility

پروژه با توجه به اصول Accessibility طراحی شده است.

از جمله:

* استفاده از `aria-label`
* Keyboard Navigation
* `focus-visible`
* استفاده از عناصر Semantic HTML
* نمایش وضعیت Rendering
* استفاده از `output` برای مقادیر Dynamic
* پشتیبانی از RTL و LTR

---

## 🛠️ تکنولوژی‌ها

این پروژه فقط با تکنولوژی‌های زیر ساخته شده است:

* HTML5
* CSS3
* Vanilla JavaScript
* Canvas API
* Web Storage API
* Fullscreen API
* Pointer Events API

### بدون:

* React
* Vue
* Angular
* jQuery
* Bootstrap
* Tailwind
* Three.js
* کتابخانه‌های خارجی
* Backend

---

## 📁 ساختار پروژه

```text
regular-polygon-explorer/
│
├── index.html
├── style.css
├── script.js
├── README.md
├── LICENSE
│
└── fonts/
    ├── Vazirmatn-Regular.woff2
    ├── Vazirmatn-Medium.woff2
    ├── Vazirmatn-SemiBold.woff2
    └── Vazirmatn-Bold.woff2
```

---

## 🚀 اجرای پروژه

نیازی به نصب هیچ Package یا Dependency وجود ندارد.

کافی است فایل زیر را در مرورگر باز کنید:

```text
index.html
```

پروژه باید مستقیماً اجرا شود.

---

## 🌍 GitHub Pages

برای انتشار پروژه در GitHub Pages:

1. Repository را در GitHub ایجاد کنید.
2. فایل‌های پروژه را Upload کنید.
3. وارد بخش **Settings** شوید.
4. بخش **Pages** را باز کنید.
5. در قسمت **Build and deployment** گزینهٔ:

   ```text
   Deploy from a branch
   ```

   را انتخاب کنید.
6. Branch اصلی مانند `main` را انتخاب کنید.
7. Folder را روی:

   ```text
   / (root)
   ```

   قرار دهید.
8. Save را بزنید.

پس از Deploy شدن، پروژه از طریق GitHub Pages قابل مشاهده خواهد بود.

---

## 🧪 Browser Compatibility

پروژه برای مرورگرهای مدرن طراحی شده است.

مرورگرهای پیشنهادی:

* Google Chrome
* Microsoft Edge
* Mozilla Firefox
* Safari
* Opera

برای عملکرد صحیح، استفاده از نسخهٔ به‌روز مرورگر توصیه می‌شود.

---

## 📄 License

این پروژه تحت **MIT License** منتشر شده است.

Copyright (c) 2026 **AmirMohammad Abdolvand**

اطلاعات کامل مجوز در فایل زیر قرار دارد:

```text
LICENSE
```

---

# 🇬🇧 English

## Overview

**Regular Polygon Explorer** is a professional interactive web application for exploring, visualizing, and comparing regular polygons.

Users can change the number of sides, rotate and zoom the polygon, customize its appearance, inspect mathematical information, compare it with a circle, and export the result.

The project is built entirely with **HTML5, CSS3, and Vanilla JavaScript**, with no external frameworks or dependencies.

---

## ✨ Features

* Accurate regular polygon rendering using Canvas
* Support for **3 to 1,000,000 sides**
* Side-count slider
* Special values:

  * 50
  * 100
  * 500
  * 1,000
  * 5,000
  * 10,000
  * 100,000
  * 1,000,000
* Polygon presets
* Triangle, Square, Pentagon, Hexagon, Octagon, Decagon and more
* Circle-like mode
* Smooth morph animation
* Rotation slider
* Drag-to-rotate
* Zoom controls
* Mouse wheel zoom
* Keyboard zoom
* Vertex visualization
* Circumcircle visualization
* Circle comparison mode
* Fill color picker
* Stroke color picker
* Line-width control
* PNG export
* SVG export
* Fullscreen mode
* Complete reset
* `localStorage` settings persistence
* Keyboard shortcuts
* Responsive layout
* RTL / LTR support
* Persian / English language switching
* Local Persian font support
* Accessibility support
* Optimized rendering for very large polygons
* No backend
* No external libraries

---

## 🌐 Language Support

The application supports two interface languages:

* 🇮🇷 Persian
* 🇬🇧 English

The language can be changed directly inside the application.

When switching languages, the application updates:

* Interface labels
* Buttons
* Descriptions
* Mathematical information
* Polygon names
* Keyboard shortcut descriptions
* Text direction

Persian uses **RTL** layout, while English uses **LTR** layout.

The selected language is also stored using `localStorage`.

---

## 🔤 Persian Font

The project supports a local Persian font so that the application does not need an external font service.

Recommended font structure:

```text
fonts/
├── Vazirmatn-Regular.woff2
├── Vazirmatn-Medium.woff2
├── Vazirmatn-SemiBold.woff2
└── Vazirmatn-Bold.woff2
```

This allows Persian text to render correctly even when external websites or font services are unavailable.

---

## 📐 Mathematical Formulas

For a regular polygon with `n` sides:

### Central Angle

```text
360° / n
```

### Interior Angle

```text
((n − 2) × 180°) / n
```

### Polygon Area / Circumcircle Area

```text
n × sin(2π/n) / (2π)
```

As `n` increases, the polygon becomes increasingly similar to a circle.

---

## ⚡ Performance Optimization

The application supports polygon counts as large as:

```text
1,000,000
```

The actual number of sides is preserved for mathematical calculations and displayed information.

However, rendering millions of individual Canvas segments is unnecessary.

For very large values, the application limits the number of rendered segments to a visually sufficient resolution.

This approach significantly reduces rendering cost while preserving the visual appearance of the polygon.

---

## 🎮 Controls

### Side Count

Use the main slider to select between:

```text
3 — 25
```

For larger values, use the special side-count buttons.

### Rotation

Rotate the polygon using:

* Rotation slider
* Canvas dragging

### Zoom

Zoom using:

* `+` / `−` buttons
* Mouse wheel
* Keyboard shortcuts

---

## ⌨️ Keyboard Shortcuts

| Shortcut      | Action              |
| ------------- | ------------------- |
| `Arrow Up`    | Increase side count |
| `Arrow Right` | Increase side count |
| `Arrow Down`  | Decrease side count |
| `Arrow Left`  | Decrease side count |
| `R`           | Reset               |
| `F`           | Fullscreen          |
| `+`           | Zoom In             |
| `-`           | Zoom Out            |

Keyboard shortcuts are disabled while typing inside form controls.

---

## 💾 Persistent Settings

User preferences are stored using the browser's `localStorage`.

The application can preserve settings such as:

* Side count
* Rotation
* Zoom
* Fill color
* Stroke color
* Line width
* Vertex visibility
* Circumcircle visibility
* Circle comparison
* Selected language

---

## 📤 Export

### PNG Export

Export the current polygon as a PNG image.

Example:

```text
regular-polygon-4.png
```

### SVG Export

Export the current polygon as an SVG file.

Example:

```text
regular-polygon-4.svg
```

---

## 📱 Responsive Design

The interface is optimized for:

* Desktop
* Laptop
* Tablet
* Mobile

The control panel automatically adapts to smaller screens.

---

## ♿ Accessibility

The application includes several accessibility improvements:

* Semantic HTML
* ARIA labels
* Keyboard navigation
* Visible focus states
* Dynamic `output` elements
* Responsive controls
* RTL / LTR support

---

## 🛠️ Technologies

Built with:

* HTML5
* CSS3
* Vanilla JavaScript
* Canvas API
* Web Storage API
* Fullscreen API
* Pointer Events API

No external framework or library is required.

---

## 📁 Project Structure

```text
regular-polygon-explorer/
│
├── index.html
├── style.css
├── script.js
├── README.md
├── LICENSE
│
└── fonts/
    ├── Vazirmatn-Regular.woff2
    ├── Vazirmatn-Medium.woff2
    ├── Vazirmatn-SemiBold.woff2
    └── Vazirmatn-Bold.woff2
```

---

## 🚀 Running Locally

No installation is required.

Simply open:

```text
index.html
```

in a modern web browser.

---

## 🌍 GitHub Pages

To publish the project with GitHub Pages:

1. Create a GitHub repository.
2. Upload the project files.
3. Open **Settings**.
4. Open **Pages**.
5. Select:

```text
Deploy from a branch
```

6. Select the `main` branch.
7. Select:

```text
/ (root)
```

8. Save the configuration.

GitHub will then build and publish the project using GitHub Pages.

---

## 🧪 Browser Compatibility

The project is designed for modern browsers, including:

* Google Chrome
* Microsoft Edge
* Mozilla Firefox
* Safari
* Opera

Using an up-to-date browser is recommended.

---

## 📄 License

This project is released under the **MIT License**.

Copyright (c) 2026 **AmirMohammad Abdolvand**

See the `LICENSE` file for the complete license text.

---

## 👨‍💻 Author

**AmirMohammad Abdolvand**

Created as an interactive educational and mathematical visualization project.

---

## ⭐ Support

If you find this project useful, consider giving the repository a ⭐ on GitHub.
