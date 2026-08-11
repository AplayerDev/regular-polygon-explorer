# Regular Polygon Explorer

> An interactive and professional mathematical visualization tool for exploring regular polygons.

**🇬🇧 English | 🇮🇷 [فارسی](README.fa.md)**

---
<p align="center">

[🚀 Live Demo](https://AplayerDev.github.io/regular-polygon-explorer/)
&nbsp;&nbsp;•&nbsp;&nbsp;
[📖 Documentation](README.md)

</p>
---
## Overview

**Regular Polygon Explorer** is an interactive web application for visualizing, exploring, and comparing regular polygons.

Users can change the number of sides, rotate and zoom the polygon, customize its appearance, display mathematical information, compare it with a circle, and export the result as PNG or SVG.

The project is built entirely with **HTML5, CSS3, and Vanilla JavaScript** and requires no external framework, backend, or JavaScript library.

---

## ✨ Features

* Accurate regular polygon rendering with HTML Canvas
* Support for **3 to 1,000,000 sides**
* Interactive side-count slider
* Special side counts:

  * 50
  * 100
  * 500
  * 1,000
  * 5,000
  * 10,000
  * 100,000
  * 1,000,000
* Common polygon presets
* Triangle, Square, Pentagon, Hexagon, Octagon, Decagon, 25-Gon
* Circle-like mode
* Smooth morph animation when changing polygons
* Rotation slider
* Drag-to-rotate interaction
* Zoom controls
* Mouse wheel zoom
* Keyboard shortcuts
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
* Persistent settings with `localStorage`
* Persian / English interface
* RTL / LTR layout support
* Local Persian font support
* Responsive design
* Accessibility support
* Optimized rendering for very large polygons
* No backend
* No external JavaScript dependencies

---

## 🌐 Language Support

The application supports two interface languages:

* 🇬🇧 English
* 🇮🇷 Persian

The language can be changed directly from inside the application.

When switching languages, the interface updates:

* Navigation and interface labels
* Buttons
* Descriptions
* Mathematical information
* Polygon names
* Keyboard shortcut descriptions
* Text direction

English uses **LTR** layout, while Persian uses **RTL** layout.

The selected language is stored locally using `localStorage`.

---

## 🔤 Persian Font

The application includes local Persian font files so that Persian text does not depend on external font services.

Recommended structure:

```text
fonts/
├── Vazirmatn-Regular.woff2
├── Vazirmatn-Medium.woff2
├── Vazirmatn-SemiBold.woff2
└── Vazirmatn-Bold.woff2
```

This allows the Persian interface to work even when external font providers are unavailable.

---

## 📐 Mathematical Background

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

As the number of sides increases, the central angle becomes smaller and the polygon boundary gets closer to the circumference of a circle.

In the limit:

```text
n → ∞
```

a regular polygon approaches a circle.

---

## ⚡ Performance

The application is optimized to handle very large polygon counts.

For example, the user can select:

```text
1,000,000 sides
```

The actual value of `n` is preserved for mathematical calculations and displayed information.

However, rendering one million individual Canvas segments is unnecessary for visual purposes. Therefore, when the polygon becomes very large, the renderer limits the number of visible segments to a practical resolution.

This approach:

* Reduces CPU usage
* Reduces Canvas operations
* Keeps animations smoother
* Reduces memory usage
* Preserves the visual appearance of very large polygons

The optimization does not change the mathematical value of the selected polygon.

---

## 🎮 Controls

### Side Count

The main slider allows the user to select a polygon from:

```text
3 — 25 sides
```

For larger values, use the **Special Side Counts** buttons.

### Rotation

The polygon can be rotated using:

* Rotation slider
* Dragging directly on the Canvas

### Zoom

Zoom is available through:

* `+` button
* `−` button
* Mouse wheel
* Keyboard shortcuts

### Appearance

The following properties can be customized:

* Fill color
* Stroke color
* Stroke width

### Visualization

Optional visualization features include:

* Vertices
* Circumcircle
* Circle comparison

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

Keyboard shortcuts are automatically disabled while the user is typing inside an input, textarea, or select element.

---

## 💾 Persistent Settings

User preferences are stored using the browser's `localStorage`.

Depending on the application version, saved preferences may include:

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

This allows the application to restore the user's previous configuration after a page reload.

---

## 📤 Export

### PNG

The current visualization can be exported as a PNG image.

Example:

```text
regular-polygon-4.png
```

### SVG

The polygon can also be exported as an SVG file.

Example:

```text
regular-polygon-4.svg
```

SVG output is useful for further editing in vector graphics software.

---

## 📱 Responsive Design

The interface is designed to work across:

* Desktop
* Laptop
* Tablet
* Mobile

The layout automatically adapts to smaller screen sizes, and the control panel changes to a mobile-friendly layout.

The Canvas also resizes automatically when the available space changes.

---

## ♿ Accessibility

Accessibility was considered throughout the interface.

The application includes:

* Semantic HTML
* ARIA labels
* Keyboard navigation
* Visible focus states
* Dynamic output elements
* Accessible buttons and controls
* RTL / LTR support
* Responsive controls

---

## 🛠️ Technologies

The project uses:

* **HTML5**
* **CSS3**
* **Vanilla JavaScript**
* **Canvas API**
* **Web Storage API**
* **Fullscreen API**
* **Pointer Events API**

### No external framework is required.

The project does not use:

* React
* Vue
* Angular
* jQuery
* Bootstrap
* Tailwind CSS
* Three.js
* Backend services
* External JavaScript libraries

---

## 📁 Project Structure

```text
regular-polygon-explorer/
│
├── index.html
├── style.css
├── script.js
├── README.md
├── README.fa.md
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

No package installation or build process is required.

Simply open:

```text
index.html
```

in a modern web browser.

The project can also be served through any static web server.

---

## 🌍 GitHub Pages

The project is fully compatible with GitHub Pages.

To publish it:

1. Create a GitHub repository.
2. Upload the project files.
3. Open **Settings**.
4. Open **Pages**.
5. Under **Build and deployment**, select:

```text
Deploy from a branch
```

6. Select the `main` branch.
7. Select:

```text
/ (root)
```

8. Click **Save**.

GitHub Pages will then deploy the project as a static website.

---

## 🧪 Browser Compatibility

The project is designed for modern browsers, including:

* Google Chrome
* Microsoft Edge
* Mozilla Firefox
* Safari
* Opera

Using an up-to-date browser is recommended for the best experience.

---

## 📄 License

This project is released under the **MIT License**.

Copyright (c) 2026 **AmirMohammad Abdolvand**

See the [`LICENSE`](LICENSE) file for the complete license text.

---

## 👨‍💻 Author

**AmirMohammad Abdolvand**

Regular Polygon Explorer is designed as an interactive educational and mathematical visualization project.

---

## ⭐ Support

If you find this project useful, consider giving the repository a ⭐ on GitHub.

---

**🇬🇧 English | 🇮🇷 [فارسی](README.fa.md)**
