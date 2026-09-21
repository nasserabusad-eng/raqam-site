/* رقم (raqam.ai) — site interactivity: search, newsletter, login, nav, toasts.
   Self-contained: injects its own CSS so it works on every page regardless of
   which stylesheet is loaded (homepage uses inline styles, articles use styles.css). */
(function () {
  "use strict";

  /* ---------- real pages index (for search) ---------- */
  var PAGES = [
    { t: "ألعاب الأرقام", d: "تحدّيات ذهنية يومية بالعربية: لغز الرقم، معادلة اليوم، 2048، سودوكو، سباق الحساب", u: "/games.html", c: "ألعاب" },
    { t: "لغز الرقم اليومي", d: "خمّن الرقم السري المكوّن من 4 أرقام في 6 محاولات", u: "/game-daily-number.html", c: "ألعاب" },
    { t: "معادلة اليوم", d: "نسخة عربية من Nerdle — خمّن المعادلة الحسابية اليومية", u: "/game-equation.html", c: "ألعاب" },
    { t: "لعبة 2048", d: "ادمج الأرقام المتشابهة حتى تصل إلى 2048", u: "/game-2048.html", c: "ألعاب" },
    { t: "سودوكو", d: "املأ الشبكة بالأرقام من 1 إلى 9 — ثلاثة مستويات صعوبة", u: "/game-sudoku.html", c: "ألعاب" },
    { t: "سباق الحساب", d: "كم مسألة تحلّها في 60 ثانية؟ تحدَّ رقمك القياسي", u: "/game-math-sprint.html", c: "ألعاب" },
    { t: "رقمك المحظوظ", d: "اكتشف رقم مسار حياتك وأرقامك المحظوظة للتسلية", u: "/tool-lucky-number.html", c: "ألعاب" },
    { t: "مولّد الرسوم البيانية", d: "حوّل أرقامك إلى رسم بياني أنيق قابل للتنزيل", u: "/tool-chart.html", c: "أدوات" },
    { t: "السعودية تعلن 2026 عام الذكاء الاصطناعي", d: "خطة وطنية باستثمارات تتجاوز 9 مليارات دولار", u: "/year-of-ai-2026.html", c: "اقتصاد" },
    { t: "هيومين تسرّع بناء مراكز بيانات الذكاء الاصطناعي", d: "211 موقعاً وصندوق محتمل بـ2.5 مليار دولار", u: "/humain-data-centers.html", c: "تقنية" },
    { t: "الذكاء الاصطناعي والوظائف في السعودية", d: "أي المهارات تصعد في 2026 وكيف تستعدّ لها", u: "/ai-jobs-gulf.html", c: "اقتصاد" },
    { t: "الرئيسية", d: "أحدث أخبار الذكاء الاصطناعي والتقنية والاقتصاد", u: "/", c: "عام" },
    { t: "أفضل أدوات الذكاء الاصطناعي المجانية 2026", d: "دليل شامل بالعربية لأدوات الذكاء الاصطناعي المجانية", u: "/ai-tools-guide.html", c: "الذكاء الاصطناعي" },
    { t: "السعودية تعلن 2026 عام الذكاء الاصطناعي", d: "استثمارات هيومين المليارية في الذكاء الاصطناعي", u: "/saudi-ai-2026.html", c: "الذكاء الاصطناعي" },
    { t: "الذكاء الاصطناعي في القطاع المصرفي", d: "ماكنزي: مئات المليارات سنوياً للبنوك", u: "/ai-banking.html", c: "أبحاث" },
    { t: "حوكمة الذكاء الاصطناعي في السعودية", d: "مبادئ سدايا لأخلاقيات الذكاء الاصطناعي", u: "/ai-governance.html", c: "تنظيم" },
    { t: "مراكز بيانات الذكاء الاصطناعي في السعودية", d: "هيومين ورقائق متقدمة وبنية تحتية عملاقة", u: "/saudi-data-centers.html", c: "تقنية" },
    { t: "التقنية المالية تقود استثمار الشركات الناشئة", d: "1.7 مليار دولار في النصف الأول من 2026", u: "/gulf-fintech-2026.html", c: "أسواق ومال" },
    { t: "ما الذي يحرك أسعار النفط؟", d: "أوبك والطاقة الفائضة وسعر التعادل", u: "/oil-prices-gulf.html", c: "اقتصاد" },
    { t: "لماذا يواصل الذهب تسجيل مستويات قياسية؟", d: "مشتريات البنوك المركزية والملاذ الآمن", u: "/gold-2026.html", c: "أسواق ومال" },
    { t: "حاسبة مكافأة نهاية الخدمة", d: "احسب مكافأتك حسب نظام العمل السعودي", u: "/end-of-service.html", c: "أدوات" },
    { t: "حاسبة التمويل الشخصي", d: "احسب القسط الشهري وإجمالي الفائدة", u: "/loan-calculator.html", c: "أدوات" },
    { t: "حاسبة ضريبة القيمة المضافة", d: "أضف أو استخرج ضريبة القيمة المضافة 15%", u: "/vat-calculator.html", c: "أدوات" },
    { t: "حاسبة الزكاة", d: "احسب زكاة مالك بنسبة 2.5% ومقارنتها بالنصاب", u: "/zakat-calculator.html", c: "أدوات" },
    { t: "دليل مكافأة نهاية الخدمة", d: "شرح كامل لحقوقك في نهاية الخدمة", u: "/guide-end-of-service.html", c: "أدلة" },
    { t: "دليل التمويل الشخصي", d: "الفرق بين الفائدة الثابتة والمتناقصة", u: "/guide-personal-finance.html", c: "أدلة" }
  ];

  /* ---------- nav category → homepage section anchor ---------- */
  var NAV_MAP = {
    "الرئيسية": "top",
    "الذكاء الاصطناعي": "ai",
    "تقنية": "tech",
    "اقتصاد": "economy",
    "أسواق ومال": "economy",
    "العالم": "ai",
    "رأي": "ai",
    "أدوات": "tools",
    "أدوات وحاسبات": "tools"
  };

  /* ---------- inject CSS ---------- */
  var css = ''
    + '.rq-ov{position:fixed;inset:0;z-index:9999;display:none;align-items:flex-start;justify-content:center;background:rgba(8,11,17,.72);backdrop-filter:blur(4px);padding:80px 18px 18px}'
    + '.rq-ov.open{display:flex}'
    + '.rq-box{width:100%;max-width:560px;background:#161c27;color:#eaeef5;border:1px solid #2a3446;border-radius:16px;box-shadow:0 24px 60px rgba(0,0,0,.5);overflow:hidden;font-family:"Tajawal",system-ui,Tahoma,sans-serif}'
    + '.rq-box .rq-hd{display:flex;align-items:center;gap:10px;padding:16px 18px;border-bottom:1px solid #2a3446}'
    + '.rq-box .rq-hd h3{margin:0;font-family:"Tajawal",sans-serif;font-weight:800;font-size:18px;color:#fff;flex:1}'
    + '.rq-x{background:none;border:none;color:#95a1b4;font-size:24px;cursor:pointer;line-height:1;padding:2px 6px;border-radius:6px}'
    + '.rq-x:hover{color:#fff;background:#212b3c}'
    + '.rq-box input[type=text],.rq-box input[type=email]{width:100%;background:#0f141d;border:1px solid #333f54;border-radius:10px;color:#eaeef5;font-size:16px;font-family:inherit;padding:13px 14px;outline:none}'
    + '.rq-box input:focus{border-color:#e0b978}'
    + '.rq-bd{padding:18px}'
    + '.rq-bd p.sub{color:#95a1b4;font-size:14px;margin:0 0 14px}'
    + '.rq-btn{display:inline-block;width:100%;background:#e0b978;color:#141821;font-weight:800;font-size:15px;font-family:inherit;border:none;border-radius:10px;padding:13px;margin-top:12px;cursor:pointer}'
    + '.rq-btn:hover{background:#f2d199}'
    + '.rq-res{margin-top:14px;max-height:50vh;overflow:auto}'
    + '.rq-res a{display:block;padding:12px 14px;border:1px solid #2a3446;border-radius:10px;margin-bottom:8px;color:#eaeef5;text-decoration:none}'
    + '.rq-res a:hover{border-color:#e0b978;background:#1b2331}'
    + '.rq-res a .k{font-family:"Space Grotesk","Tajawal",sans-serif;font-size:10px;letter-spacing:.14em;text-transform:uppercase;color:#e0b978;display:block;margin-bottom:3px}'
    + '.rq-res a .tt{font-weight:700;font-size:15px}'
    + '.rq-res a .dd{color:#95a1b4;font-size:13px;margin-top:2px}'
    + '.rq-res .none{color:#6f7c91;font-size:14px;text-align:center;padding:20px}'
    + '.rq-ok{text-align:center;padding:8px 0}'
    + '.rq-ok .ic{width:56px;height:56px;border-radius:50%;background:rgba(224,185,120,.14);color:#e0b978;display:flex;align-items:center;justify-content:center;margin:0 auto 14px;font-size:28px}'
    + '.rq-ok h4{margin:0 0 6px;font-family:"Tajawal",sans-serif;font-weight:800;font-size:18px;color:#fff}'
    + '.rq-ok p{color:#95a1b4;font-size:14px;margin:0}'
    + '.rq-toast{position:fixed;bottom:24px;left:50%;transform:translateX(-50%) translateY(20px);background:#1b2331;color:#eaeef5;border:1px solid #333f54;border-radius:12px;padding:12px 20px;font-family:"Tajawal",system-ui,sans-serif;font-size:14px;font-weight:600;box-shadow:0 12px 30px rgba(0,0,0,.4);opacity:0;pointer-events:none;transition:opacity .25s,transform .25s;z-index:10000}'
    + '.rq-toast.show{opacity:1;transform:translateX(-50%) translateY(0)}'
    + '.rq-toast .g{color:#e0b978}'
    + '.s,.search{cursor:pointer}'
    + '@media(max-width:640px){.rq-ov{padding-top:60px}}';
  var st = document.createElement("style");
  st.textContent = css;
  document.head.appendChild(st);

  /* ---------- helpers ---------- */
  function el(tag, attrs, html) {
    var e = document.createElement(tag);
    if (attrs) for (var k in attrs) e.setAttribute(k, attrs[k]);
    if (html != null) e.innerHTML = html;
    return e;
  }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }

  var toastEl = null, toastTimer = null;
  function toast(msg) {
    if (!toastEl) { toastEl = el("div", { class: "rq-toast" }); document.body.appendChild(toastEl); }
    toastEl.innerHTML = msg;
    void toastEl.offsetWidth;
    toastEl.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toastEl.classList.remove("show"); }, 2600);
  }

  /* ---------- overlay factory ---------- */
  function makeOverlay(build) {
    var ov = el("div", { class: "rq-ov" });
    var box = el("div", { class: "rq-box" });
    ov.appendChild(box);
    document.body.appendChild(ov);
    ov.addEventListener("click", function (e) { if (e.target === ov) close(); });
    function close() { ov.classList.remove("open"); }
    function open() { ov.classList.add("open"); build(box, close); var i = box.querySelector("input"); if (i) setTimeout(function () { i.focus(); }, 30); }
    return { open: open, close: close, box: box };
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") { var o = document.querySelector(".rq-ov.open"); if (o) o.classList.remove("open"); }
  });

  /* ---------- SEARCH ---------- */
  var searchOv = makeOverlay(function (box) {
    box.innerHTML = '';
    var hd = el("div", { class: "rq-hd" }, '<h3>ابحث في رقم</h3>');
    var x = el("button", { class: "rq-x", "aria-label": "إغلاق" }, "&times;");
    x.onclick = function () { searchOv.close(); };
    hd.appendChild(x);
    var bd = el("div", { class: "rq-bd" });
    var inp = el("input", { type: "text", placeholder: "اكتب كلمة للبحث… مثل: حاسبة، ذكاء اصطناعي" });
    var res = el("div", { class: "rq-res" });
    bd.appendChild(inp); bd.appendChild(res);
    box.appendChild(hd); box.appendChild(bd);

    function render(q) {
      q = (q || "").trim();
      var list = q ? PAGES.filter(function (p) { return (p.t + " " + p.d + " " + p.c).indexOf(q) !== -1; }) : PAGES;
      if (!list.length) { res.innerHTML = '<div class="none">لا توجد نتائج مطابقة — جرّب كلمة أخرى.</div>'; return; }
      res.innerHTML = list.map(function (p) {
        return '<a href="' + p.u + '"><span class="k">' + esc(p.c) + '</span><span class="tt">' + esc(p.t) + '</span><span class="dd">' + esc(p.d) + '</span></a>';
      }).join("");
    }
    inp.addEventListener("input", function () { render(inp.value); });
    render("");
  });

  /* ---------- NEWSLETTER ---------- */
  var subOv = makeOverlay(function (box) {
    box.innerHTML = '';
    var hd = el("div", { class: "rq-hd" }, '<h3>اشترك في نشرة رقم</h3>');
    var x = el("button", { class: "rq-x", "aria-label": "إغلاق" }, "&times;");
    x.onclick = function () { subOv.close(); };
    hd.appendChild(x);
    var bd = el("div", { class: "rq-bd" });
    bd.innerHTML = '<p class="sub">أهم أخبار الذكاء الاصطناعي والاقتصاد والتقنية — مرة واحدة أسبوعياً، بالعربية، مجاناً.</p>';
    var inp = el("input", { type: "email", placeholder: "بريدك الإلكتروني" });
    var btn = el("button", { class: "rq-btn" }, "اشترك الآن");
    bd.appendChild(inp); bd.appendChild(btn);
    box.appendChild(hd); box.appendChild(bd);
    function submit() {
      var v = (inp.value || "").trim();
      if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v)) { inp.style.borderColor = "#e0b978"; inp.focus(); toast("رجاءً أدخل بريداً صحيحاً"); return; }
      bd.innerHTML = '<div class="rq-ok"><div class="ic">&#10003;</div><h4>تم تسجيلك بنجاح</h4><p>شكراً لاشتراكك — ستصلك نشرة رقم قريباً على ' + esc(v) + '</p></div>';
    }
    btn.onclick = submit;
    inp.addEventListener("keydown", function (e) { if (e.key === "Enter") submit(); });
  });

  /* ---------- LOGIN ---------- */
  var loginOv = makeOverlay(function (box) {
    box.innerHTML = '';
    var hd = el("div", { class: "rq-hd" }, '<h3>تسجيل الدخول</h3>');
    var x = el("button", { class: "rq-x", "aria-label": "إغلاق" }, "&times;");
    x.onclick = function () { loginOv.close(); };
    hd.appendChild(x);
    var bd = el("div", { class: "rq-bd" });
    bd.innerHTML = '<div class="rq-ok"><div class="ic">&#128274;</div><h4>حسابات القرّاء قريباً</h4><p>نعمل على إتاحة تسجيل الدخول لحفظ مقالاتك المفضّلة وتخصيص النشرة. في هذه الأثناء يمكنك الاشتراك في النشرة البريدية.</p></div>';
    var btn = el("button", { class: "rq-btn" }, "اشترك في النشرة بدلاً من ذلك");
    btn.onclick = function () { loginOv.close(); subOv.open(); };
    bd.appendChild(btn);
    box.appendChild(hd); box.appendChild(bd);
  });

  /* ---------- smooth scroll to a section id (or nav to home + hash) ---------- */
  function goSection(id) {
    if (id === "top") { window.scrollTo({ top: 0, behavior: "smooth" }); return true; }
    var target = document.getElementById(id);
    if (target) { target.scrollIntoView({ behavior: "smooth", block: "start" }); return true; }
    // not on this page -> go home with hash
    window.location.href = "/#" + id;
    return true;
  }

  /* ---------- wire everything after DOM ready ---------- */
  function wire() {
    // search triggers
    Array.prototype.forEach.call(document.querySelectorAll(".s, .search"), function (n) {
      n.setAttribute("role", "button"); n.setAttribute("tabindex", "0"); n.setAttribute("aria-label", "بحث");
      n.addEventListener("click", function (e) { e.preventDefault(); searchOv.open(); });
      n.addEventListener("keydown", function (e) { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); searchOv.open(); } });
    });
    // subscribe
    Array.prototype.forEach.call(document.querySelectorAll(".btn-g, .btn-sub"), function (n) {
      n.addEventListener("click", function (e) { e.preventDefault(); subOv.open(); });
    });
    // login
    Array.prototype.forEach.call(document.querySelectorAll(".btn-o, .btn-in"), function (n) {
      n.addEventListener("click", function (e) { e.preventDefault(); loginOv.open(); });
    });
    // nav links (category scrolling) + placeholder feedback
    Array.prototype.forEach.call(document.querySelectorAll(".nav a, .nav-links a"), function (a) {
      var label = (a.textContent || "").trim();
      var href = a.getAttribute("href") || "";
      if (NAV_MAP.hasOwnProperty(label)) {
        // let real file links (e.g. أدوات -> end-of-service.html) work, but map category names to sections
        var id = NAV_MAP[label];
        if (href === "#" || href === "" || href.charAt(0) === "#") {
          a.addEventListener("click", function (e) { e.preventDefault(); goSection(id); });
        }
      } else if (href === "#" || href === "") {
        a.addEventListener("click", function (e) { e.preventDefault(); toast("هذا القسم <span class=\"g\">قريباً</span>"); });
      }
    });
    // "عرض الكل" / ".more" and other placeholder links -> coming soon toast
    Array.prototype.forEach.call(document.querySelectorAll('a[href="#"]'), function (a) {
      if (a.dataset.rqWired) return;
      // skip ones already handled as nav
      a.addEventListener("click", function (e) { e.preventDefault(); toast("المزيد من المقالات <span class=\"g\">قريباً</span>"); });
      a.dataset.rqWired = "1";
    });
    // honor incoming #hash on load (from another page)
    if (window.location.hash) {
      var id = window.location.hash.slice(1);
      var t = document.getElementById(id);
      if (t) setTimeout(function () { t.scrollIntoView({ behavior: "smooth", block: "start" }); }, 120);
    }
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", wire);
  else wire();
})();
