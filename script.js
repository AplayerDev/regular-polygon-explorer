(() => {
  "use strict";

  /* =========================================
     Helpers
  ========================================= */

  const $ = (id) => document.getElementById(id);

  const canvas = $("polygonCanvas");
  const ctx = canvas.getContext("2d", {
    alpha: true
  });

  const wrap = $("canvasWrap");


  /* =========================================
     Default State
  ========================================= */

  const defaults = {
    sides: 4,
    rotation: 0,
    zoom: 1,

    fill: "#6366f1",
    stroke: "#a5b4fc",

    lineWidth: 2,

    showVertices: false,
    showCircumcircle: false,
    compareCircle: false,

    language: "fa"
  };


  let state = {
    ...defaults
  };


  /* =========================================
     Runtime
  ========================================= */

  let morph = null;
  let raf = 0;

  let dpr = Math.min(
    window.devicePixelRatio || 1,
    2
  );

  let dragging = false;

  let lastX = 0;
  let lastY = 0;


  /* =========================================
     Shape Names
  ========================================= */

  const namesFa = {
    3: "مثلث",
    4: "مربع",
    5: "پنج‌ضلعی",
    6: "شش‌ضلعی",
    7: "هفت‌ضلعی",
    8: "هشت‌ضلعی",
    9: "نه‌ضلعی",
    10: "ده‌ضلعی",
    11: "یازده‌ضلعی",
    12: "دوازده‌ضلعی",
    13: "سیزده‌ضلعی",
    14: "چهارده‌ضلعی",
    15: "پانزده‌ضلعی",
    16: "شانزده‌ضلعی",
    17: "هفده‌ضلعی",
    18: "هجده‌ضلعی",
    19: "نوزده‌ضلعی",
    20: "بیست‌ضلعی",
    21: "بیست‌ویک‌ضلعی",
    22: "بیست‌ودو‌ضلعی",
    23: "بیست‌وسه‌ضلعی",
    24: "بیست‌وچهارضلعی",
    25: "بیست‌وپنج‌ضلعی"
  };


  const namesEn = {
    3: "Triangle",
    4: "Square",
    5: "Pentagon",
    6: "Hexagon",
    7: "Heptagon",
    8: "Octagon",
    9: "Nonagon",
    10: "Decagon",
    11: "Hendecagon",
    12: "Dodecagon",
    13: "Tridecagon",
    14: "Tetradecagon",
    15: "Pentadecagon",
    16: "Hexadecagon",
    17: "Heptadecagon",
    18: "Octadecagon",
    19: "Nonadecagon",
    20: "Icosagon",
    21: "21-Gon",
    22: "22-Gon",
    23: "23-Gon",
    24: "24-Gon",
    25: "25-Gon"
  };


  /* =========================================
     Translations
  ========================================= */

  const translations = {

    fa: {

      subtitle:
        "چندضلعی‌های منتظم را با تغییر تعداد اضلاع کشف کنید",

      canvasHint:
        "Drag برای چرخش • Wheel برای Zoom",

      current:
        "تعداد فعلی",

      sides:
        "تعداد اضلاع",

      specialNumbers:
        "تعدادهای خاص",

      custom:
        "مقدار سفارشی",

      presets:
        "Presetها",

      rotation:
        "چرخش",

      appearance:
        "ظاهر",

      fillColor:
        "رنگ داخل",

      strokeColor:
        "رنگ خط",

      lineWidth:
        "ضخامت خط",

      vertices:
        "نمایش رأس‌ها",

      circumcircle:
        "نمایش دایره محیطی",

      compareCircle:
        "مقایسه با دایره",

      export:
        "خروجی",

      downloadPNG:
        "Download PNG",

      downloadSVG:
        "Download SVG",

      reset:
        "Reset",

      shapeInfo:
        "اطلاعات شکل",

      numberOfSides:
        "تعداد اضلاع",

      numberOfVertices:
        "تعداد رأس‌ها",

      interiorAngle:
        "زاویه داخلی",

      centralAngle:
        "زاویه مرکزی",

      areaRatio:
        "نسبت مساحت به دایره",

      whyCircle:
        "چرا چندضلعی با افزایش تعداد اضلاع شبیه دایره می‌شود؟",

      educationText:
        "با افزایش تعداد اضلاع، زاویه مرکزی هر ضلع کوچک‌تر می‌شود و مرز چندضلعی بخش‌های بیشتری از محیط دایره را دنبال می‌کند؛ در نتیجه شکل از نظر بصری به دایره نزدیک‌تر می‌شود.",

      noDependencies:
        "بدون وابستگی خارجی",

      ready:
        "آماده",

      optimized:
        "رندر بهینه",

      fullscreen:
        "تمام صفحه",

      zoomIn:
        "بزرگ‌نمایی",

      zoomOut:
        "کوچک‌نمایی"
    },


    en: {

      subtitle:
        "Explore regular polygons by changing the number of sides",

      canvasHint:
        "Drag to rotate • Wheel to zoom",

      current:
        "Current",

      sides:
        "Number of sides",

      specialNumbers:
        "Special numbers",

      custom:
        "Custom value",

      presets:
        "Presets",

      rotation:
        "Rotation",

      appearance:
        "Appearance",

      fillColor:
        "Fill color",

      strokeColor:
        "Stroke color",

      lineWidth:
        "Line width",

      vertices:
        "Show vertices",

      circumcircle:
        "Show circumcircle",

      compareCircle:
        "Compare with circle",

      export:
        "Export",

      downloadPNG:
        "Download PNG",

      downloadSVG:
        "Download SVG",

      reset:
        "Reset",

      shapeInfo:
        "Shape information",

      numberOfSides:
        "Number of sides",

      numberOfVertices:
        "Number of vertices",

      interiorAngle:
        "Interior angle",

      centralAngle:
        "Central angle",

      areaRatio:
        "Area / circle ratio",

      whyCircle:
        "Why does a polygon become more like a circle as the number of sides increases?",

      educationText:
        "As the number of sides increases, the central angle of each side becomes smaller and the polygon boundary follows more sections of the circle's circumference. As a result, the shape visually approaches a circle.",

      noDependencies:
        "No external dependencies",

      ready:
        "Ready",

      optimized:
        "Optimized rendering",

      fullscreen:
        "Fullscreen",

      zoomIn:
        "Zoom in",

      zoomOut:
        "Zoom out"
    }

  };


  /* =========================================
     Number Formatting
  ========================================= */

  function fmt(number) {

    return new Intl.NumberFormat(
      state.language === "fa"
        ? "en-US"
        : "en-US",
      {
        maximumFractionDigits: 6
      }
    ).format(number);

  }


  function deg(value) {

    const safe =
      Math.abs(value) < 1e-12
        ? 0
        : value;

    return `${fmt(safe)}°`;

  }


  /* =========================================
     Local Storage
  ========================================= */

  function load() {

    try {

      const saved = JSON.parse(
        localStorage.getItem(
          "rpe-settings"
        ) || "null"
      );

      if (saved) {

        state = {
          ...defaults,
          ...saved
        };

      }

    } catch (error) {

      state = {
        ...defaults
      };

    }

  }


  function save() {

    try {

      localStorage.setItem(
        "rpe-settings",
        JSON.stringify(state)
      );

    } catch (error) {

      // localStorage may be disabled.
    }

  }


  /* =========================================
     Language
  ========================================= */

  function applyLanguage() {

    const lang = state.language;

    document.documentElement.lang = lang;

    document.documentElement.dir =
      lang === "fa"
        ? "rtl"
        : "ltr";


    document
      .querySelectorAll("[data-i18n]")
      .forEach((element) => {

        const key =
          element.dataset.i18n;

        if (
          translations[lang] &&
          translations[lang][key]
        ) {

          element.textContent =
            translations[lang][key];

        }

      });


    $("languageBtn").textContent =
      lang === "fa"
        ? "EN"
        : "FA";


    $("languageBtn").setAttribute(
      "aria-label",
      lang === "fa"
        ? "Switch to English"
        : "تغییر به فارسی"
    );


    $("fullscreenBtn").setAttribute(
      "aria-label",
      translations[lang].fullscreen
    );


    $("zoomInBtn").setAttribute(
      "aria-label",
      translations[lang].zoomIn
    );


    $("zoomOutBtn").setAttribute(
      "aria-label",
      translations[lang].zoomOut
    );


    updateControls();
    updateInfo();

  }


  function toggleLanguage() {

    state.language =
      state.language === "fa"
        ? "en"
        : "fa";

    save();

    applyLanguage();

  }


  /* =========================================
     Controls
  ========================================= */

  function updateControls() {

    $("sidesSlider").value =
      Math.min(
        25,
        Math.max(
          3,
          state.sides
        )
      );


    $("rotationSlider").value =
      state.rotation;


    $("fillColor").value =
      state.fill;


    $("strokeColor").value =
      state.stroke;


    $("lineWidth").value =
      state.lineWidth;


    $("showVertices").checked =
      state.showVertices;


    $("showCircumcircle").checked =
      state.showCircumcircle;


    $("compareCircle").checked =
      state.compareCircle;


    $("zoomValue").textContent =
      `${Math.round(state.zoom * 100)}%`;


    $("rotationValue").textContent =
      `${Math.round(state.rotation)}°`;


    $("lineWidthValue").textContent =
      `${state.lineWidth}px`;


    $("sidesValue").textContent =
      `${fmt(state.sides)} ${
        state.language === "fa"
          ? "ضلع"
          : state.sides === 1
            ? "side"
            : "sides"
      }`;


    const names =
      state.language === "fa"
        ? namesFa
        : namesEn;


    $("shapeName").textContent =
      state.sides <= 25
        ? names[state.sides]
        : state.language === "fa"
          ? "چندضلعی منتظم"
          : "Regular polygon";


    $("customBadge")
      .classList.toggle(
        "hidden",
        state.sides <= 25
      );

  }


  /* =========================================
     Mathematical Information
  ========================================= */

  function updateInfo() {

    const n = state.sides;

    const central =
      360 / n;

    const interior =
      ((n - 2) * 180) / n;

    const ratio =
      (
        n *
        Math.sin(
          (2 * Math.PI) / n
        ) /
        (2 * Math.PI)
      ) * 100;


    $("infoSides").textContent =
      fmt(n);


    $("infoVertices").textContent =
      fmt(n);


    $("infoCentral").textContent =
      deg(central);


    $("infoInterior").textContent =
      deg(interior);


    $("infoAreaRatio").textContent =
      `${fmt(ratio)}%`;

  }


  /* =========================================
     Canvas Resize
  ========================================= */

  function resize() {

    const rect =
      wrap.getBoundingClientRect();

    dpr = Math.min(
      window.devicePixelRatio || 1,
      2
    );


    canvas.width =
      Math.max(
        1,
        Math.floor(
          rect.width * dpr
        )
      );


    canvas.height =
      Math.max(
        1,
        Math.floor(
          rect.height * dpr
        )
      );


    canvas.style.width =
      `${rect.width}px`;


    canvas.style.height =
      `${rect.height}px`;


    ctx.setTransform(
      dpr,
      0,
      0,
      dpr,
      0,
      0
    );


    requestDraw();

  }


  /* =========================================
     Rendering Optimization
  ========================================= */

  function effectiveSegments(n) {

    if (n <= 2000) {

      return n;

    }


    return Math.min(
      4096,
      Math.max(
        720,
        Math.ceil(
          2 *
          Math.PI *
          Math.max(
            1,
            state.zoom
          ) *
          80
        )
      )
    );

  }


  /* =========================================
     Polygon Points
  ========================================= */

  function polygonPoints(
    n,
    rotation,
    radius,
    segments = effectiveSegments(n)
  ) {

    const points = [];

    const step =
      (Math.PI * 2) /
      segments;


    const rot =
      (rotation * Math.PI / 180) -
      Math.PI / 2;


    for (
      let i = 0;
      i < segments;
      i++
    ) {

      const angle =
        rot + i * step;


      points.push([
        Math.cos(angle) * radius,
        Math.sin(angle) * radius
      ]);

    }


    return points;

  }


  /* =========================================
     Canvas Path
  ========================================= */

  function drawPath(points) {

    if (!points.length) {

      return;

    }


    ctx.beginPath();

    ctx.moveTo(
      points[0][0],
      points[0][1]
    );


    for (
      let i = 1;
      i < points.length;
      i++
    ) {

      ctx.lineTo(
        points[i][0],
        points[i][1]
      );

    }


    ctx.closePath();

  }


  /* =========================================
     Request Draw
  ========================================= */

  function requestDraw() {

    if (raf) {

      return;

    }


    raf =
      requestAnimationFrame(() => {

        raf = 0;

        draw();

      });

  }


  /* =========================================
     Draw
  ========================================= */

  function draw() {

    const width =
      canvas.clientWidth;

    const height =
      canvas.clientHeight;


    if (
      width <= 0 ||
      height <= 0
    ) {

      return;

    }


    ctx.clearRect(
      0,
      0,
      width,
      height
    );


    const cx =
      width / 2;

    const cy =
      height / 2;


    const radius =
      Math.min(
        width,
        height
      ) *
      0.34 *
      state.zoom;


    ctx.save();

    ctx.translate(
      cx,
      cy
    );


    /* Circumcircle */

    if (
      state.showCircumcircle ||
      state.compareCircle
    ) {

      ctx.save();

      ctx.beginPath();

      ctx.arc(
        0,
        0,
        radius,
        0,
        Math.PI * 2
      );


      ctx.strokeStyle =
        state.compareCircle
          ? "rgba(226,232,240,.58)"
          : "rgba(148,163,184,.25)";


      ctx.lineWidth =
        state.compareCircle
          ? 1.5
          : 1;


      ctx.setLineDash(
        state.compareCircle
          ? [6, 6]
          : []
      );


      ctx.stroke();

      ctx.restore();

    }


    /* Polygon */

    let points;

    const segments =
      effectiveSegments(
        state.sides
      );


    if (
      morph &&
      performance.now() <
        morph.until
    ) {

      const progress =
        1 -
        (
          morph.until -
          performance.now()
        ) /
        morph.duration;


      const t =
        Math.max(
          0,
          Math.min(
            1,
            progress
          )
        );


      const eased =
        t < 0.5
          ? 4 * t * t * t
          : 1 -
            Math.pow(
              -2 * t + 2,
              3
            ) / 2;


      const from =
        morph.from;

      const to =
        morph.to;


      points =
        from.map(
          (point, index) => {

            return [
              point[0] +
                (
                  to[index][0] -
                  point[0]
                ) * eased,

              point[1] +
                (
                  to[index][1] -
                  point[1]
                ) * eased
            ];

          }
        );


      requestDraw();

    } else {

      morph = null;

      points =
        polygonPoints(
          state.sides,
          state.rotation,
          radius,
          segments
        );

    }


    /* Glow */

    ctx.shadowBlur = 28;

    ctx.shadowColor =
      state.stroke;


    drawPath(points);


    ctx.fillStyle =
      state.fill;


    ctx.globalAlpha =
      0.72;


    ctx.fill();


    ctx.globalAlpha =
      1;


    ctx.shadowBlur =
      0;


    /* Stroke */

    ctx.strokeStyle =
      state.stroke;


    ctx.lineWidth =
      state.lineWidth;


    ctx.lineJoin =
      "round";


    drawPath(points);

    ctx.stroke();


    /* Comparison Circle */

    if (state.compareCircle) {

      ctx.beginPath();

      ctx.arc(
        0,
        0,
        radius,
        0,
        Math.PI * 2
      );


      ctx.strokeStyle =
        "rgba(255,255,255,.22)";


      ctx.lineWidth = 1;

      ctx.setLineDash(
        [3, 7]
      );


      ctx.stroke();

      ctx.setLineDash([]);

    }


    /* Vertices */

    if (state.showVertices) {

      const maxDots = 600;

      const stride =
        Math.max(
          1,
          Math.ceil(
            points.length /
            maxDots
          )
        );


      ctx.fillStyle =
        "#ffffff";


      for (
        let i = 0;
        i < points.length;
        i += stride
      ) {

        ctx.beginPath();

        ctx.arc(
          points[i][0],
          points[i][1],
          Math.max(
            1.7,
            Math.min(
              3.4,
              3 / state.zoom
            )
          ),
          0,
          Math.PI * 2
        );

        ctx.fill();

      }

    }


    ctx.restore();

  }


  /* =========================================
     Morph Animation
  ========================================= */

  function startMorph(
    oldSides,
    oldRotation
  ) {

    const width =
      canvas.clientWidth;

    const height =
      canvas.clientHeight;


    const radius =
      Math.min(
        width,
        height
      ) *
      0.34 *
      state.zoom;


    const segments =
      Math.max(
        effectiveSegments(
          oldSides
        ),
        effectiveSegments(
          state.sides
        )
      );


    const from =
      polygonPoints(
        oldSides,
        oldRotation,
        radius,
        segments
      );


    const to =
      polygonPoints(
        state.sides,
        state.rotation,
        radius,
        segments
      );


    morph = {

      from,
      to,

      duration: 260,

      until:
        performance.now() +
        260

    };


    requestDraw();

  }


  /* =========================================
     Set Sides
  ========================================= */

  function setSides(
    value,
    animate = true
  ) {

    const number =
      Math.max(
        3,
        Math.min(
          1000000,
          Math.round(
            Number(value)
          )
        )
      );


    const oldSides =
      state.sides;

    const oldRotation =
      state.rotation;


    state.sides =
      number;


    updateControls();

    updateInfo();

    save();


    $("renderStatus").textContent =
      number > 100000
        ? translations[
            state.language
          ].optimized
        : translations[
            state.language
          ].ready;


    if (
      animate &&
      oldSides !== number
    ) {

      startMorph(
        oldSides,
        oldRotation
      );

    } else {

      requestDraw();

    }

  }


  /* =========================================
     Zoom
  ========================================= */

  function zoomBy(factor) {

    state.zoom =
      Math.max(
        0.45,
        Math.min(
          2.4,
          state.zoom * factor
        )
      );


    updateControls();

    save();

    requestDraw();

  }


  /* =========================================
     Reset
  ========================================= */

  function reset() {

    state = {
      ...defaults,
      language: state.language
    };


    updateControls();

    updateInfo();

    save();

    morph = null;

    requestDraw();

  }


  /* =========================================
     PNG Export
  ========================================= */

  function exportPNG() {

    const link =
      document.createElement("a");


    link.download =
      `regular-polygon-${state.sides}.png`;


    link.href =
      canvas.toDataURL(
        "image/png"
      );


    link.click();

  }


  /* =========================================
     SVG Export
  ========================================= */

  function exportSVG() {

    const width =
      canvas.clientWidth;

    const height =
      canvas.clientHeight;


    const cx =
      width / 2;

    const cy =
      height / 2;


    const radius =
      Math.min(
        width,
        height
      ) *
      0.34 *
      state.zoom;


    const segments =
      effectiveSegments(
        state.sides
      );


    const points =
      polygonPoints(
        state.sides,
        state.rotation,
        radius,
        segments
      );


    const pointString =
      points
        .map(
          (point) =>
            `${(
              point[0] + cx
            ).toFixed(2)},${(
              point[1] + cy
            ).toFixed(2)}`
        )
        .join(" ");


    const circle =
      (
        state.showCircumcircle ||
        state.compareCircle
      )
        ? `
          <circle
            cx="${cx}"
            cy="${cy}"
            r="${radius}"
            fill="none"
            stroke="${
              state.compareCircle
                ? "#94a3b8"
                : "#475569"
            }"
            stroke-width="1"
            ${
              state.compareCircle
                ? 'stroke-dasharray="6 6"'
                : ""
            }
          />
        `
        : "";


    const svg = `
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="${width}"
  height="${height}"
  viewBox="0 0 ${width} ${height}"
>
  <rect
    width="100%"
    height="100%"
    fill="#070b16"
  />

  ${circle}

  <polygon
    points="${pointString}"
    fill="${state.fill}"
    fill-opacity="0.72"
    stroke="${state.stroke}"
    stroke-width="${state.lineWidth}"
    stroke-linejoin="round"
  />
</svg>
`;


    const blob =
      new Blob(
        [svg],
        {
          type: "image/svg+xml"
        }
      );


    const url =
      URL.createObjectURL(
        blob
      );


    const link =
      document.createElement("a");


    link.download =
      `regular-polygon-${state.sides}.svg`;


    link.href =
      url;


    link.click();


    setTimeout(
      () => {
        URL.revokeObjectURL(
          url
        );
      },
      1000
    );

  }


  /* =========================================
     Event Listeners
  ========================================= */

  $("languageBtn")
    .addEventListener(
      "click",
      toggleLanguage
    );


  $("sidesSlider")
    .addEventListener(
      "input",
      (event) => {

        setSides(
          event.target.value
        );

      }
    );


  $("rotationSlider")
    .addEventListener(
      "input",
      (event) => {

        state.rotation =
          Number(
            event.target.value
          );


        updateControls();

        save();

        requestDraw();

      }
    );


  $("lineWidth")
    .addEventListener(
      "input",
      (event) => {

        state.lineWidth =
          Number(
            event.target.value
          );


        updateControls();

        save();

        requestDraw();

      }
    );


  $("fillColor")
    .addEventListener(
      "input",
      (event) => {

        state.fill =
          event.target.value;

        save();

        requestDraw();

      }
    );


  $("strokeColor")
    .addEventListener(
      "input",
      (event) => {

        state.stroke =
          event.target.value;

        save();

        requestDraw();

      }
    );


  [
    "showVertices",
    "showCircumcircle",
    "compareCircle"
  ].forEach(
    (id) => {

      $(id).addEventListener(
        "change",
        (event) => {

          state[id] =
            event.target.checked;

          save();

          requestDraw();

        }
      );

    }
  );


  document
    .querySelectorAll(
      "[data-sides]"
    )
    .forEach(
      (button) => {

        button.addEventListener(
          "click",
          () => {

            setSides(
              button.dataset.sides
            );

          }
        );

      }
    );


  document
    .querySelectorAll(
      "[data-preset]"
    )
    .forEach(
      (button) => {

        button.addEventListener(
          "click",
          () => {

            setSides(
              button.dataset.preset
            );

          }
        );

      }
    );


  $("zoomInBtn")
    .addEventListener(
      "click",
      () => {
        zoomBy(1.15);
      }
    );


  $("zoomOutBtn")
    .addEventListener(
      "click",
      () => {
        zoomBy(1 / 1.15);
      }
    );


  $("pngBtn")
    .addEventListener(
      "click",
      exportPNG
    );


  $("svgBtn")
    .addEventListener(
      "click",
      exportSVG
    );


  $("resetBtn")
    .addEventListener(
      "click",
      reset
    );


  $("resetTopBtn")
    .addEventListener(
      "click",
      reset
    );


  /* =========================================
     Fullscreen
  ========================================= */

  $("fullscreenBtn")
    .addEventListener(
      "click",
      async () => {

        try {

          if (
            !document.fullscreenElement
          ) {

            await document
              .documentElement
              .requestFullscreen();

          } else {

            await document
              .exitFullscreen();

          }

        } catch (error) {

          // Fullscreen may be unavailable.
        }

      }
    );


  document.addEventListener(
    "fullscreenchange",
    () => {

      $("fullscreenBtn")
        .textContent =
        document.fullscreenElement
          ? "⤢"
          : "⛶";


      resize();

    }
  );


  /* =========================================
     Canvas Drag
  ========================================= */

  canvas.addEventListener(
    "pointerdown",
    (event) => {

      dragging = true;

      lastX =
        event.clientX;

      lastY =
        event.clientY;


      canvas.classList.add(
        "dragging"
      );


      canvas.setPointerCapture(
        event.pointerId
      );

    }
  );


  canvas.addEventListener(
    "pointermove",
    (event) => {

      if (!dragging) {
        return;
      }


      const dx =
        event.clientX -
        lastX;


      const dy =
        event.clientY -
        lastY;


      lastX =
        event.clientX;

      lastY =
        event.clientY;


      state.rotation =
        (
          state.rotation +
          dx * 0.45 +
          360
        ) % 360;


      $("rotationSlider").value =
        Math.round(
          state.rotation
        );


      updateControls();

      save();

      requestDraw();

    }
  );


  function stopDragging() {

    dragging = false;

    canvas.classList.remove(
      "dragging"
    );

  }


  canvas.addEventListener(
    "pointerup",
    stopDragging
  );


  canvas.addEventListener(
    "pointercancel",
    stopDragging
  );


  canvas.addEventListener(
    "pointerleave",
    () => {

      if (dragging) {
        // Keep pointer capture active.
      }

    }
  );


  /* =========================================
     Wheel Zoom
  ========================================= */

  canvas.addEventListener(
    "wheel",
    (event) => {

      event.preventDefault();


      zoomBy(
        event.deltaY < 0
          ? 1.08
          : 1 / 1.08
      );

    },
    {
      passive: false
    }
  );


  /* =========================================
     Keyboard Shortcuts
  ========================================= */

  window.addEventListener(
    "keydown",
    (event) => {

      const tag =
        (
          event.target.tagName ||
          ""
        ).toLowerCase();


      if (
        [
          "input",
          "textarea",
          "select"
        ].includes(tag) ||
        event.target.isContentEditable
      ) {

        return;

      }


      if (
        [
          "ArrowUp",
          "ArrowRight"
        ].includes(
          event.key
        )
      ) {

        event.preventDefault();

        setSides(
          Math.min(
            1000000,
            state.sides + 1
          )
        );

      }


      else if (
        [
          "ArrowDown",
          "ArrowLeft"
        ].includes(
          event.key
        )
      ) {

        event.preventDefault();

        setSides(
          Math.max(
            3,
            state.sides - 1
          )
        );

      }


      else if (
        event.key.toLowerCase() === "r"
      ) {

        event.preventDefault();

        reset();

      }


      else if (
        event.key.toLowerCase() === "f"
      ) {

        event.preventDefault();

        $("fullscreenBtn").click();

      }


      else if (
        event.key === "+"
      ) {

        event.preventDefault();

        zoomBy(1.15);

      }


      else if (
        event.key === "-"
      ) {

        event.preventDefault();

        zoomBy(1 / 1.15);

      }

    }
  );


  /* =========================================
     Initialization
  ========================================= */

  load();

  applyLanguage();

  updateControls();

  updateInfo();


  if (
    "ResizeObserver" in window
  ) {

    new ResizeObserver(
      resize
    ).observe(wrap);

  } else {

    window.addEventListener(
      "resize",
      resize
    );

  }


  window.addEventListener(
    "resize",
    resize
  );


  resize();

})();