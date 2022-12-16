exports.id = 412;
exports.ids = [412];
exports.modules = {

/***/ 63201:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout)
});

// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/value/use-scroll.mjs
var use_scroll = __webpack_require__(40162);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/value/use-spring.mjs + 2 modules
var use_spring = __webpack_require__(74291);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/render/dom/motion.mjs + 150 modules
var motion = __webpack_require__(58346);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(48421);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
;// CONCATENATED MODULE: ./_components/MobileMenu.tsx
"use client";





function MobileMenu({
  updateStatus
}) {
  const {
    0: mobMenuActive,
    1: setMobMenuActive
  } = (0,react_.useState)(false);
  const {
    0: isTop,
    1: setIsTop
  } = (0,react_.useState)(true);
  if (false) {}
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
      className: !mobMenuActive ? "menu-btn" : "menu-btn active",
      onClick: () => {
        setMobMenuActive(!mobMenuActive);
        updateStatus();
      }
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: mobMenuActive ? "navmob active" : "navmob",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
        className: "navmob_ul",
        children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            href: "#about",
            className: "anim-link white",
            onClick: () => {
              setMobMenuActive(!mobMenuActive);
              updateStatus();
            },
            children: "\u041E \u043F\u0440\u043E\u0435\u043A\u0442\u0435"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            href: "#features",
            className: "anim-link white",
            onClick: () => {
              setMobMenuActive(!mobMenuActive);
              updateStatus();
            },
            children: "\u043E\u0441\u043E\u0431\u0435\u043D\u043D\u043E\u0441\u0442\u0438"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            href: "#location",
            className: "anim-link white",
            onClick: () => {
              setMobMenuActive(!mobMenuActive);
              updateStatus();
            },
            children: "\u0440\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            href: "#prices",
            className: "anim-link white",
            onClick: () => {
              setMobMenuActive(!mobMenuActive);
              updateStatus();
            },
            children: "\u043F\u043B\u0430\u043D\u0438\u0440\u043E\u0432\u043A\u0438 \u0438 \u0446\u0435\u043D\u044B"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            href: "#gallery",
            className: "anim-link white",
            onClick: () => {
              setMobMenuActive(!mobMenuActive);
              updateStatus();
            },
            children: "\u0433\u0430\u043B\u0435\u0440\u0435\u044F"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            href: "#contacts",
            className: "anim-link white",
            onClick: () => {
              setMobMenuActive(!mobMenuActive);
              updateStatus();
            },
            children: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B"
          })
        })]
      })
    })]
  });
}
;// CONCATENATED MODULE: ./public/images/logo.svg
/* harmony default export */ const logo = ({"src":"/_next/static/media/logo.a4545538.svg","height":56,"width":110});
;// CONCATENATED MODULE: ./_components/FixedLink.tsx

function FixedLink() {
  return /*#__PURE__*/jsx_runtime_.jsx("a", {
    href: "tel:+77018885050",
    className: "fixed-link",
    children: /*#__PURE__*/jsx_runtime_.jsx("svg", {
      width: "18",
      height: "18",
      viewBox: "0 0 18 18",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: /*#__PURE__*/jsx_runtime_.jsx("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M8.18112 6.01256C8.62642 5.41252 8.7861 4.78013 8.28247 4.22192C7.15229 2.64065 6.39221 1.6628 5.91545 1.19188C5.00908 0.296621 3.51807 0.417719 2.73308 1.19112C2.31145 1.60652 2.16872 1.74917 1.7358 2.18885C-0.675615 4.60131 0.79499 9.70118 4.70439 13.614C8.61291 17.526 13.7128 18.9972 16.1293 16.5797C16.5288 16.1946 16.867 15.8562 17.1338 15.5743C17.903 14.7613 18.0198 13.3362 17.1287 12.4104C16.6718 11.9357 15.7393 11.2124 14.0913 10.0337C13.5866 9.58243 12.9881 9.68024 12.4395 10.0402C12.1755 10.2133 11.9835 10.3884 11.6208 10.7514L10.9622 11.4103C10.8755 11.4971 9.69765 10.9073 8.5543 9.76291C7.41033 8.61793 6.82088 7.44015 6.90722 7.35383L7.56625 6.69451C7.68131 6.57934 7.73632 6.52359 7.80687 6.44945C7.95385 6.29499 8.07554 6.15482 8.18112 6.01256ZM12.1773 12.6255L12.8361 11.9665C13.0356 11.7668 13.165 11.6439 13.2702 11.5592C14.7139 12.5958 15.55 13.2477 15.8915 13.6025C16.0965 13.8155 16.0646 14.2042 15.8864 14.3926C15.6397 14.6532 15.3193 14.9739 14.926 15.3531C13.3634 16.9162 9.24664 15.7286 5.91977 12.3988C2.59186 9.06795 1.40469 4.95099 2.95547 3.39951C3.38664 2.96164 3.52325 2.82512 3.93885 2.41565C4.09468 2.26212 4.51915 2.22764 4.70871 2.41488C5.07577 2.77744 5.75665 3.64917 6.75827 5.04426C6.70642 5.10863 6.64165 5.18137 6.56284 5.2642C6.505 5.32498 6.4568 5.37383 6.35145 5.47928L5.69307 6.13796C4.57303 7.25779 5.52689 9.16369 7.33951 10.9779C9.15088 12.7909 11.0577 13.7457 12.1773 12.6255ZM10.5862 0.625684C14.302 1.07604 17.2484 4.0221 17.6988 7.73755L16.0009 8.0205C15.6731 5.02776 13.2962 2.65116 10.3032 2.32337L10.5862 0.625684V0.625684ZM10.0202 4.02217C12.2905 4.22522 14.0987 6.03322 14.3018 8.30334L12.5985 8.5872C12.5262 7.03952 11.2842 5.79758 9.73631 5.72531L10.0202 4.02217V4.02217Z",
        fill: "white"
      })
    })
  });
}
;// CONCATENATED MODULE: ./_components/header.tsx
"use client";










function Header() {
  const {
    0: isTop,
    1: setIsTop
  } = (0,react_.useState)(true);
  if (false) {}

  function useScrollDirection() {
    const {
      0: scrollDirection,
      1: setScrollDirection
    } = (0,react_.useState)("up");
    (0,react_.useEffect)(() => {
      let lastScrollY = 0;
      if (false) {}

      const updateScrollDirection = () => {
        let scrollY = 0;
        if (false) {}
        const direction = scrollY > lastScrollY ? "down" : "up";

        if (direction !== scrollDirection && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)) {
          setScrollDirection(direction);
        }

        lastScrollY = scrollY > 0 ? scrollY : 0;
      };

      if (false) {} // add event listener

      return () => {
        if (false) {} // clean up
      };
    }, [scrollDirection]);
    return scrollDirection;
  }

  const scrollDirection = useScrollDirection();
  const {
    scrollYProgress
  } = (0,use_scroll/* useScroll */.v)();
  const scaleX = (0,use_spring/* useSpring */.q)(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  const {
    0: parentStatus,
    1: setParentStatus
  } = (0,react_.useState)(false);

  const updateStatus = () => {
    setParentStatus(!parentStatus);
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("header", {
      className: `${isTop ? "" : "scrolled"} 
          ${scrollDirection === "down" ? "hide" : "show"}
          ${parentStatus ? "shown" : ""}`,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "header_wrap",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "container",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "wrapper header_wrapper",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("select", {
              name: "Language",
              className: "header_select",
              children: [/*#__PURE__*/jsx_runtime_.jsx("option", {
                value: "\u0420\u0423\u0421",
                children: "\u0420\u0423\u0421"
              }), /*#__PURE__*/jsx_runtime_.jsx("option", {
                value: "ENG",
                children: "ENG"
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx((image_default()), {
              src: logo,
              width: 170,
              alt: "Ferdinand",
              className: "header_logo"
            }), /*#__PURE__*/jsx_runtime_.jsx(MobileMenu, {
              updateStatus: updateStatus
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(motion/* motion.div */.E.div, {
          className: `progress-bar ${scrollDirection === "down" ? "hide-bar" : "show-bar"}`,
          style: {
            scaleX
          }
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(FixedLink, {})]
  });
}
;// CONCATENATED MODULE: ./public/images/footer_logo.svg
/* harmony default export */ const footer_logo = ({"src":"/_next/static/media/footer_logo.01eddfc2.svg","height":76,"width":150});
;// CONCATENATED MODULE: ./public/images/icons/abc.svg
/* harmony default export */ const abc = ({"src":"/_next/static/media/abc.9beb419e.svg","height":12,"width":82});
;// CONCATENATED MODULE: ./_components/footer.tsx





function Footer() {
  return /*#__PURE__*/jsx_runtime_.jsx("footer", {
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "container",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "footer_wrapper wrapper ver",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "footer_top",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "footer_logo",
            children: /*#__PURE__*/jsx_runtime_.jsx((image_default()), {
              src: footer_logo,
              alt: ""
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "footer_mid",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "footer_contacts",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "footer_contacts-item",
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "icon-btn",
                children: /*#__PURE__*/jsx_runtime_.jsx("svg", {
                  width: "16",
                  height: "13",
                  viewBox: "0 0 16 13",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: /*#__PURE__*/jsx_runtime_.jsx("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M1.43754 0H14.3754C15.1694 0 15.813 0.64361 15.813 1.43754V11.5003C15.813 12.2943 15.1694 12.9379 14.3754 12.9379H1.43754C0.64361 12.9379 0 12.2943 0 11.5003V1.43754C0 0.64361 0.64361 0 1.43754 0ZM1.43753 4.75692V11.5004H14.3754V4.75721L7.90644 7.9917L1.43753 4.75692ZM1.43753 3.14967L7.90647 6.38446L14.3754 3.14999V1.43761H1.43753V3.14967Z",
                    fill: "#C2B395"
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                children: "\u043F\u043E \u0432\u0441\u0435\u043C \u0432\u043E\u043F\u0440\u043E\u0441\u0430\u043C \u043F\u0438\u0448\u0438\u0442\u0435 \u043D\u0430:"
              }), /*#__PURE__*/jsx_runtime_.jsx("a", {
                href: "mailto:sale@ferdinand.kz",
                className: "anim-link white",
                children: "sale@ferdinand.kz"
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "footer_contacts-item",
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "icon-btn",
                children: /*#__PURE__*/jsx_runtime_.jsx("svg", {
                  width: "16",
                  height: "16",
                  viewBox: "0 0 16 16",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: /*#__PURE__*/jsx_runtime_.jsx("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M6.68778 4.78401C7.0788 4.25707 7.21902 3.70171 6.77678 3.21151C5.78438 1.82286 5.11695 0.964119 4.69832 0.550571C3.90243 -0.235635 2.59318 -0.129288 1.90389 0.5499C1.53366 0.914698 1.40832 1.03997 1.02818 1.42609C-1.08927 3.54468 0.202058 8.0233 3.63489 11.4595C7.06694 14.8949 11.5451 16.187 13.667 14.0639C14.0178 13.7257 14.3148 13.4286 14.5491 13.181C15.2246 12.467 15.3271 11.2155 14.5446 10.4025C14.1434 9.98563 13.3246 9.35043 11.8775 8.31533C11.4343 7.91902 10.9088 8.00492 10.427 8.32099C10.1953 8.47303 10.0266 8.62683 9.70816 8.9456L9.12986 9.52421C9.0537 9.60042 8.01945 9.08247 7.01548 8.07752C6.01096 7.07201 5.49337 6.03771 5.56918 5.9619L6.14787 5.38289C6.24891 5.28176 6.29721 5.23279 6.35916 5.16768C6.48822 5.03204 6.59508 4.90895 6.68778 4.78401ZM10.1964 10.591L10.7748 10.0123C10.9501 9.83682 11.0636 9.72895 11.156 9.65457C12.4237 10.5649 13.1579 11.1373 13.4577 11.4489C13.6378 11.636 13.6098 11.9773 13.4533 12.1427C13.2367 12.3717 12.9553 12.6532 12.61 12.9863C11.2379 14.359 7.62295 13.316 4.70164 10.3919C1.77941 7.46676 0.736961 3.85131 2.09869 2.48883C2.4773 2.1043 2.59726 1.9844 2.9622 1.62481C3.09903 1.48998 3.47176 1.45971 3.63821 1.62414C3.96052 1.94253 4.5584 2.70807 5.43792 3.93322C5.39239 3.98975 5.33552 4.05363 5.26631 4.12636C5.21552 4.17975 5.1732 4.22264 5.08069 4.31525L4.50257 4.89369C3.51907 5.87711 4.35665 7.55084 5.9483 9.14405C7.53886 10.7362 9.21322 11.5747 10.1964 10.591ZM8.79939 0.0529348C12.0622 0.448431 14.6494 3.03561 15.0449 6.29846L13.554 6.54695C13.2662 3.91877 11.1791 1.83168 8.55091 1.54382L8.79939 0.0529348ZM8.30176 3.03602C10.2953 3.21433 11.8831 4.8021 12.0614 6.79568L10.5657 7.04496C10.5023 5.68581 9.41163 4.59516 8.05248 4.53169L8.30176 3.03602Z",
                    fill: "#C2B395"
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                children: "\u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u044F:"
              }), /*#__PURE__*/jsx_runtime_.jsx("a", {
                href: "tel:+77018885050",
                className: "anim-link white",
                children: "+7 701 888 50 50"
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "footer_contacts-item",
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "icon-btn",
                children: /*#__PURE__*/jsx_runtime_.jsx("svg", {
                  width: "14",
                  height: "17",
                  viewBox: "0 0 14 17",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: /*#__PURE__*/jsx_runtime_.jsx("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M6.83942 16.9675L7.33925 16.5311C11.5424 12.8609 13.6788 9.65631 13.6788 6.83941C13.6788 2.85026 10.5653 0 6.83942 0C3.11349 0 0 2.85026 0 6.83941C0 9.65631 2.13641 12.8609 6.33958 16.5311L6.83942 16.9675ZM6.83921 14.9426C3.27254 11.7282 1.51967 9.00431 1.51967 6.83908C1.51967 3.72076 3.92419 1.51953 6.83921 1.51953C9.75424 1.51953 12.1588 3.72076 12.1588 6.83908C12.1588 9.00431 10.4059 11.7282 6.83921 14.9426ZM6.8397 3.04025C8.93821 3.04025 10.6394 4.74142 10.6394 6.83992C10.6394 8.93843 8.93821 10.6396 6.8397 10.6396C4.7412 10.6396 3.04003 8.93843 3.04003 6.83992C3.04003 4.74142 4.7412 3.04025 6.8397 3.04025ZM4.55969 6.83953C4.55969 5.58042 5.5804 4.55972 6.8395 4.55972C8.0986 4.55972 9.1193 5.58042 9.1193 6.83953C9.1193 8.09863 8.0986 9.11933 6.8395 9.11933C5.5804 9.11933 4.55969 8.09863 4.55969 6.83953Z",
                    fill: "#C2B395"
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                children: "\u0430\u0434\u0440\u0435\u0441:"
              }), /*#__PURE__*/jsx_runtime_.jsx("a", {
                href: "https://go.2gis.com/t57kd",
                className: "anim-link white",
                children: "\u0433. \u0410\u0441\u0442\u0430\u043D\u0430, \u0411\u043E\u043A\u0435\u0439\u0445\u0430\u043D, 29\u0411, \u043D.\u043F.9"
              })]
            })]
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "footer_bot",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "footer_media",
            children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
              href: "instagram.com",
              className: "icon-btn",
              children: /*#__PURE__*/jsx_runtime_.jsx("svg", {
                width: "17",
                height: "18",
                viewBox: "0 0 17 18",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: /*#__PURE__*/jsx_runtime_.jsx("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M12.1123 0.961914H5.48558C2.79241 0.961914 0.601364 3.15296 0.601364 5.84613V12.4729C0.601364 15.1661 2.79241 17.3571 5.48558 17.3571H12.1123C14.8055 17.3571 16.9966 15.1661 16.9966 12.4729V5.84613C16.9965 3.15296 14.8055 0.961914 12.1123 0.961914ZM15.3471 12.4732C15.3471 14.2597 13.8988 15.708 12.1123 15.708H5.4855C3.69895 15.708 2.25064 14.2597 2.25064 12.4732V5.84641C2.25064 4.05983 3.69895 2.61155 5.4855 2.61155H12.1123C13.8988 2.61155 15.3471 4.05983 15.3471 5.84641V12.4732ZM4.55815 9.16027C4.55815 6.82215 6.46038 4.91992 8.79853 4.91992C11.1367 4.91992 13.0389 6.82212 13.0389 9.16027C13.0389 11.4984 11.1367 13.4007 8.79853 13.4007C6.46038 13.4007 4.55815 11.4984 4.55815 9.16027ZM8.79871 11.7502C7.36771 11.7502 6.20768 10.5902 6.20768 9.15918C6.20768 7.72818 7.36774 6.56815 8.79871 6.56815C10.2297 6.56815 11.3897 7.72818 11.3897 9.15918C11.3897 10.5901 10.2297 11.7502 8.79871 11.7502ZM14.0637 4.9487C14.0637 5.50987 13.6088 5.96478 13.0476 5.96478C12.4864 5.96478 12.0315 5.50987 12.0315 4.9487C12.0315 4.38754 12.4864 3.93262 13.0476 3.93262C13.6088 3.93262 14.0637 4.38754 14.0637 4.9487Z",
                  fill: "#C2B395"
                })
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("a", {
              href: "https://wa.me/77777777777",
              className: "icon-btn",
              children: /*#__PURE__*/jsx_runtime_.jsx("svg", {
                width: "20",
                height: "20",
                viewBox: "0 0 20 20",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: /*#__PURE__*/jsx_runtime_.jsx("path", {
                  d: "M19.5 10.0268C19.5 15.1384 15.3244 19.2821 10.1727 19.2821C8.53721 19.2821 7.00074 18.8641 5.66399 18.1305L0.5 19.7715L2.18361 14.8057C1.33431 13.4111 0.845167 11.7754 0.845167 10.0268C0.845167 4.91517 5.02116 0.771484 10.1727 0.771484C15.3249 0.771484 19.5 4.91517 19.5 10.0268ZM10.1727 2.24546C5.84829 2.24546 2.33076 5.73618 2.33076 10.0268C2.33076 11.7294 2.88577 13.3062 3.82458 14.5889L2.84481 17.4788L5.85842 16.521C7.09659 17.334 8.57986 17.8082 10.1729 17.8082C14.4967 17.8082 18.0148 14.3179 18.0148 10.0272C18.0148 5.73661 14.4969 2.24546 10.1727 2.24546ZM14.8828 12.1584C14.8252 12.064 14.6729 12.007 14.4445 11.8937C14.2157 11.7803 13.0913 11.2312 12.8823 11.1558C12.6727 11.0803 12.5198 11.0423 12.3676 11.2692C12.2154 11.4964 11.7771 12.007 11.6435 12.1584C11.5101 12.3102 11.3769 12.3292 11.148 12.2156C10.9196 12.1022 10.183 11.8624 9.30967 11.0898C8.6301 10.4885 8.17114 9.74624 8.03772 9.51887C7.90451 9.29193 8.02379 9.16927 8.138 9.05633C8.24102 8.95457 8.36684 8.79138 8.48106 8.65902C8.59569 8.52644 8.63369 8.43207 8.70948 8.2805C8.78611 8.12913 8.7479 7.99676 8.69048 7.88297C8.63348 7.76961 8.17579 6.65325 7.98537 6.19894C7.79494 5.74505 7.60473 5.82063 7.4711 5.82063C7.33789 5.82063 7.18526 5.80163 7.03283 5.80163C6.88041 5.80163 6.63257 5.85842 6.42293 6.08536C6.21351 6.31252 5.62303 6.86141 5.62303 7.97755C5.62303 9.09391 6.44193 10.1725 6.55657 10.3236C6.67078 10.4748 8.13779 12.8401 10.4621 13.7485C12.7867 14.6565 12.7867 14.3535 13.2059 14.3155C13.6248 14.2777 14.5583 13.7669 14.7496 13.2374C14.9396 12.7071 14.9396 12.253 14.8828 12.1584Z",
                  fill: "#C2B395"
                })
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("a", {
              href: "youtube.com",
              className: "icon-btn",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
                width: "19",
                height: "16",
                viewBox: "0 0 19 16",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
                  d: "M16.8017 1.20304C16.2525 1.01998 12.8658 0.836914 9.47906 0.836914C6.09236 0.836914 2.70565 1.01998 2.15646 1.20304C0.691936 1.66071 0.325806 4.86435 0.325806 8.15952C0.325806 11.4547 0.691936 14.6583 2.15646 15.116C2.70565 15.2991 6.09236 15.4821 9.47906 15.4821C12.8658 15.4821 16.2525 15.2991 16.8017 15.116C18.2662 14.6583 18.6323 11.4547 18.6323 8.15952C18.6323 4.86435 18.2662 1.66071 16.8017 1.20304Z",
                  fill: "#C2B395"
                }), /*#__PURE__*/jsx_runtime_.jsx("path", {
                  d: "M7.64841 4.04102V12.2789L13.1404 8.15998L7.64841 4.04102Z",
                  fill: "#202020"
                })]
              })
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx("a", {
            href: "abc-design.kz",
            className: "footer_abc",
            children: /*#__PURE__*/jsx_runtime_.jsx((image_default()), {
              src: abc,
              alt: "ABC DESIGN"
            })
          })]
        })]
      })
    })
  });
}
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(59483);
;// CONCATENATED MODULE: ./app/layout.tsx
"use client";






function RootLayout({
  children
}) {
  const pathname = (0,navigation.usePathname)();
  console.log(pathname);
  if (pathname != "/success") return /*#__PURE__*/(0,jsx_runtime_.jsxs)("html", {
    children: [/*#__PURE__*/jsx_runtime_.jsx("head", {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("body", {
      children: [/*#__PURE__*/jsx_runtime_.jsx(Header, {}), children, /*#__PURE__*/jsx_runtime_.jsx(Footer, {})]
    })]
  });else {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)("html", {
      children: [/*#__PURE__*/jsx_runtime_.jsx("head", {}), /*#__PURE__*/jsx_runtime_.jsx("body", {
        children: children
      })]
    });
  }
}

/***/ }),

/***/ 3949:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Loading)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
"use client";




function Loading() {
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setTimeout(() => setLoading(false), 350000);
  });
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: loading ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
      className: "loading",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("video", {
        width: "700",
        autoPlay: true,
        muted: true,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("source", {
          src: "/images/ferdinand.mp4"
        })
      })
    }) : null
  });
}

/***/ }),

/***/ 19636:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 63201))

/***/ }),

/***/ 52739:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 3949))

/***/ }),

/***/ 7902:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 24748, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 68185, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 76194, 23))

/***/ }),

/***/ 34914:
/***/ (() => {



/***/ }),

/***/ 58996:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Head)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13763);



function Head() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                children: "Ferdinand Elite Housing"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                content: "width=device-width, initial-scale=1",
                name: "viewport"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                rel: "icon",
                href: "/favicon.ico"
            })
        ]
    });
}


/***/ }),

/***/ 65906:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* __next_internal_client_entry_do_not_use__ */ const { createProxy  } = __webpack_require__(86354);
module.exports = createProxy("C:\\Users\\HP\\Desktop\\ferdinand\\frontend\\app\\layout.tsx");


/***/ }),

/***/ 46886:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* __next_internal_client_entry_do_not_use__ */ const { createProxy  } = __webpack_require__(86354);
module.exports = createProxy("C:\\Users\\HP\\Desktop\\ferdinand\\frontend\\app\\loading.tsx");


/***/ }),

/***/ 12777:
/***/ (() => {



/***/ })

};
;