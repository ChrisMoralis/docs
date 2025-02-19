/*@cc_on;document.querySelectorAll||(document.querySelectorAll=function(e){var i,t=document.createElement('style'),c=[];for(document.documentElement.firstChild.appendChild(t),document._qsa=[],t.styleSheet.cssText=e+'{x-qsa:expression(document._qsa && document._qsa.push(this))}',window.scrollBy(0,0),t.parentNode.removeChild(t);document._qsa.length;)(i=document._qsa.shift()).style.removeAttribute('x-qsa'),c.push(i);return document._qsa=null,c}),document.querySelector||(document.querySelector=function(e){var t=document.querySelectorAll(e);return t.length?t[0]:null});@*/ !(function () {
  var t = function (e) {
      return e.replace(/^\s+|\s+$/g, "");
    },
    i = function (e) {
      return new RegExp("(^|\\s+)" + e + "(\\s+|$)");
    },
    c = function (e, t, i) {
      for (var c = 0; c < e.length; c++) t.call(i, e[c]);
    };
  function e(e) {
    this.element = e;
  }
  (e.prototype = {
    add: function () {
      c(
        arguments,
        function (e) {
          this.contains(e) ||
            (this.element.className = t(this.element.className + " " + e));
        },
        this
      );
    },
    remove: function () {
      c(
        arguments,
        function (e) {
          this.element.className = t(this.element.className.replace(i(e), " "));
        },
        this
      );
    },
    toggle: function (e) {
      return this.contains(e) ? (this.remove(e), !1) : (this.add(e), !0);
    },
    contains: function (e) {
      return i(e).test(this.element.className);
    },
    item: function (e) {
      return this.element.className.split(/\s+/)[e] || null;
    },
    replace: function (e, t) {
      this.remove(e), this.add(t);
    },
  }),
    "classList" in Element.prototype ||
      Object.defineProperty(Element.prototype, "classList", {
        get: function () {
          return new e(this);
        },
      }),
    window.DOMTokenList &&
      !DOMTokenList.prototype.replace &&
      (DOMTokenList.prototype.replace = e.prototype.replace);
})();
Array.prototype.indexOf ||
  (Array.prototype.indexOf = function (e, t) {
    "use strict";
    var i;
    if (null == this) throw new TypeError('"this" is null or not defined');
    var n = Object(this),
      o = n.length >>> 0;
    if (0 === o) return -1;
    var c = 0 | t;
    if (c >= o) return -1;
    for (i = Math.max(c >= 0 ? c : o - Math.abs(c), 0); i < o; i++)
      if (i in n && n[i] === e) return i;
    return -1;
  });
if (!(!!CookieScript && !!CookieScript.instance)) {
  var CookieScript = function () {
    this.version = "20211221";
    this.onAcceptAll = function () {};
    this.onAccept = function () {};
    this.onReject = function () {};
    this.onClose = function () {};
    this.currentState = function () {
      var e = { action: r("action") };
      var t = r("key");
      if (t) {
        e.key = t;
      }
      e.categories = j();
      return e;
    };
    this.expireDays = function () {
      return ge;
    };
    this.hash = function () {
      return G;
    };
    this.show = function () {
      N();
    };
    this.hide = function () {
      k();
      b();
    };
    this.categories = function () {
      return c;
    };
    this.getCookieValueForQueryArg = function () {
      var e = t.get(l);
      if (e) {
        return l + "=" + encodeURIComponent(e);
      }
      return "";
    };
    this.dispatchEventNames = [];
    this.currentLang = null;
    this.iabCMP = null;
    this.getCMPId = function () {
      return Number(ve);
    };
    this.getIABSdkUrl = function () {
      return xe;
    };
    this.getIABText = function () {
      return ye;
    };
    this.getIABTextTranslations = function () {
      return qe;
    };
    this.showIABSpecificTab = function (e) {
      return !1;
    };
    this.setCMPCookie = function (e) {
      o("CMP", e);
    };
    this.getCMPCookie = function () {
      return r("CMP");
    };
    this.forceDispatchCSLoadEvent = function () {
      a("CookieScriptLoaded");
    };
    this.applyTranslation = function (e) {
      I(e);
    };
    this.applyCurrentCookiesState = function () {
      T();
    };
    this.applyTranslationByCode = function (e, t) {
      if (t === undefined) {
        t = {
          rebuildIab: !!document.querySelector(
            'div[data-cs-maintab-content="setting_advertising"]'
          ),
        };
      }
      Ae(e, t);
    };
    this.acceptAllAction = function () {
      ae(!0);
      var t = "acceptall",
        e = B(c);
      k();
      o("action", "accept");
      p();
      P(c);
      L(c);
      o("categories", JSON.stringify(e));
      f(!0);
      m(!0);
      C("accept", e.join(","));
      h(t, "");
      q(!0);
      b();
      rt();
      R();
      z();
      U("selectAll");
    };
    this.acceptAction = function (e) {
      var t;
      if (typeof e === "undefined") {
        t = ct();
        P(t);
      } else {
        if (Y) {
          e.push("strict");
        }
        t = u(e);
        de(t);
      }
      var i = B(t);
      if (t.length === c.length) {
        p();
        f(!0);
        m(!0);
      } else {
        p(t);
        f(!0, t);
        m(!0, t);
      }
      L(t);
      y(t);
      if (i.length > 0) {
        o("action", "accept");
        o("categories", JSON.stringify(i));
        C("accept", i.join(","));
        h("accept", i.join(","));
      } else {
        o("action", "reject");
        o("categories", []);
        C("reject", "");
        h("reject", "");
      }
      U("setOnlyChecked");
      k();
      q(t.length === c.length);
      b();
      st(t);
      R();
      z();
    };
    this.rejectAllAction = function () {
      ae(!1);
      P([]);
      h("reject", "");
      o("action", "reject");
      o("categories", JSON.stringify([]));
      C("reject", "");
      y();
      k();
      q(!1);
      b();
      at();
      R();
      z();
      f(!1);
      m(!1);
      U("rejectAll");
    };
    this.demoLoadView = function () {
      d("Warning is real site script");
    };
    var i = this,
      xt =
        "\n    <style data-type=\"cookiescriptstyles\">\n      #cookiescript_injected {\r\n    background-color: #ffffff;\r\n    z-index: 999997;\r\n    opacity: 1;\r\n    font-size: 14px;\r\n    font-weight: normal;\r\n    font-family: 'Open Sans', Arial, 'Trebuchet MS', 'Segoe UI', 'Helvetica', sans-serif;\r\n    box-shadow: 1px 2px 8px 0 rgba(0, 0, 0, 0.35);\r\n    color: #041836;\r\n    box-sizing: border-box;\r\n}\r\n.cookiescript_checkbox_label {\r\n    cursor: pointer;\r\n    display: flex;\r\n    align-items: center;\r\n    padding:0 4px;\r\n    line-height: 1.5;\r\n    margin:0;\r\n\ttext-align: left;\r\n}\r\n#cookiescript_close {\r\n    position: absolute;\r\n    top: 10px;\r\n    right: 10px;\r\n    font-size: 29px;\r\n    line-height: 13px;\r\n    cursor: pointer;\r\n    color: #041836;\r\n    height: 15px;\r\n    width: 15px;\r\n    margin: 0;\r\n    padding: 0;\r\n    overflow: hidden;\r\n    letter-spacing: 0;\r\n    font-family: 'Trebuchet MS', 'Arial', sans-serif;\r\n    font-weight: 100;\r\n    opacity: 0.85;\r\n    z-index: 999999;\r\n}\r\n\r\n#cookiescript_buttons {\r\n    display: flex;\r\n    flex-direction: row;\r\n    font-weight: 700;\r\n}\r\n#cookiescript_manage_wrap {\r\n    text-transform: uppercase;\r\n    text-align: center;\r\n    font-size: 11px;\r\n    letter-spacing: 0.1px;\r\n    font-weight: 500;\r\n}\r\n#cookiescript_manage {\r\n    display: inline;\r\n    cursor: pointer;\r\n    color: #041836;\r\n    opacity:0.85;\r\n}\r\n#cookiescript_manage #cookiescript_manageicon .cookiescript_gear {\r\n    fill: #041836;\r\n}\r\n#cookiescript_manage:hover #cookiescript_manageicon .cookiescript_gear {\r\n    fill: #21bf96;;\r\n}\r\n\r\nsvg#cookiescript_manageicon {\r\n    width: 15px;\r\n    height: 15px;\r\n    display: inline;\r\n    margin: 0 5px 0 0;\r\n    padding: 0;\r\n    position: relative;\r\n    top: 3px;\r\n    vertical-align: baseline;\r\n}\r\n#cookiescript_header {\r\n    background-color: transparent;\r\n    z-index: 999998;\r\n    color: #041836;\r\n    font-size: 17px;\r\n    line-height: 1.3;\r\n    font-weight: 600;\r\n    letter-spacing: 0.4px;\r\n    opacity:1;\r\n}\r\n.cookiescript_checkbox {\r\n    display: flex;\r\n    flex-direction: row;\r\n}\r\ninput.cookiescript_checkbox_input {\r\n}\r\nspan.cookiescript_checkbox_text {\r\n    display: inline-block;\r\n    font-size: 11px;\r\n    margin: 0;\r\n    text-transform: uppercase;\r\n    font-weight: 500;\r\n    color: #041836;\r\n}\r\n\r\n#cookiescript_save {\r\n    border: 0;\r\n    transition: all 0.25s ease 0s;\r\n    background-color: #21bf96;\r\n    color: #ffffff;\r\n    text-transform: uppercase;\r\n    font-size: 11px;\r\n    text-align: center;\r\n    line-height: 3.2;\r\n    letter-spacing: 0.4px;\r\n}\r\n/*IE 9 fixes*/\r\n@media screen and (min-width:0\\0) and (min-resolution: .001dpcm) {\r\n    .cookiescript_checkbox_label {\r\n        position: relative;\r\n        top:-10px;\r\n    }\r\n    #cookiescript_accept, #cookiescript_reject, #cookiescript_save{\r\n    \tdisplay: inline-block;\r\n    }\r\n    #cookiescript_buttons{\r\n    \ttext-align:center;\r\n    }\r\n}\r\n#cookiescript_save{\r\n    display: none;\r\n}\r\n#cookiescript_reject {\r\n    border: 1px solid #041836;\r\n    text-align: center;\r\n    line-height: 3;\r\n    font-size: 11px;\r\n    text-transform: uppercase;\r\n    letter-spacing: 0.4px;\r\n    color: #041836;\r\n    background: #2d2d2d;\r\n}\r\n#cookiescript_accept {\r\n\ttransition: all 0.25s ease 0s;\r\n\ttext-transform: uppercase;\r\n\tfont-size: 11px;\r\n\ttext-align: center;\r\n\tletter-spacing: 0.4px;\r\n\tborder: 0;\r\n\tbackground-color: #21bf96;\r\n\tcolor: #ffffff;\r\n\tline-height: 3.2;\r\n}\r\n\r\n#cookiescript_accept, #cookiescript_reject, #cookiescript_save {\r\n    font-weight: 500;\r\n    cursor: pointer;\r\n    white-space: nowrap;\r\n    transition-duration: 100ms;\r\n    transition-timing-function: ease-in-out;\r\n    min-width: 103px;\r\n}\r\n.cookiescript_bigger {\r\n    transform: scale(1.1);\r\n}\r\n#cookiescript_link {\r\n    text-decoration: none;\r\n    color: #041836;\r\n    font-size: 9px;\r\n    text-align: center;\r\n    font-weight: 400;\r\n    text-transform: uppercase;\r\n    opacity: 0.8;\r\n\tdisplay:inline !important;\r\n}\r\n\r\n#cookiescript_readmore,\r\n#cookiescript_reportlink,\r\n#cookiescript_cookiescriptlink {\r\n    border: 0;\r\n    padding: 0;\r\n    cursor: pointer;\r\n    margin: 0;\r\n    transition: all 100ms ease 0s;\r\n    background-color: transparent;\r\n    color: #2e7daf;\r\n    display: inline;\r\n    font-size: 11px;\r\n}\r\n\r\n#cookiescript_description {\r\n    color: #041836;\r\n    font-size: 12px;\r\n    letter-spacing: 0.3px;\r\n    line-height: 1.7;\r\n    font-weight: 400;\r\n    opacity: 0.85;\r\n}\r\n#cookiescript_checkboxs {\r\n}\r\n#cookiescript_close:hover,\r\n#cookiescript_manage:hover,\r\n#cookiescript_link:hover\r\n{\r\n    opacity: 1;\r\n}\r\n\r\n#cookiescript_reject:hover {\r\n    background-color: #3e3e3e;\r\n}\r\n\r\n#cookiescript_accept:hover{\r\n\tbackground-color: #33c49f;\r\n}\r\n#cookiescript_save:hover {\r\n    background-color: #33c49f;\r\n}\r\n\r\n#cookiescript_readmore:hover,\r\n#cookiescript_reportlink:hover,\r\n#cookiescript_cookiescriptlink:hover\r\n{\r\n    color: #21bf96;\r\n}\r\n\r\n@media print{\r\n    #cookiescript_injected{\r\n        display:none;\r\n    }\r\n}\r\n\r\n.cookiescript_fullreport,\r\n.cookiescript_fullreport tbody,\r\n.cookiescript_fullreport thead,\r\n.cookiescript_fullreport tr,\r\n.cookiescript_fullreport th,\r\n.cookiescript_fullreport td {\r\n  margin: 0;\r\n  padding: 0;\r\n  border: 0;\r\n  font-size: 100%;\r\n  font: inherit;\r\n  vertical-align: baseline;\r\n}\r\ntable.cookiescript_fullreport {\r\n  border-collapse: collapse;\r\n  border-spacing: 0;\r\n}\r\n\r\n#cookiescript_maintabs {\r\n\tdisplay: flex;\r\n\tjustify-content: space-around;\r\n\tbackground: rgba(193, 193, 193, 0.8);\r\n\talign-items: stretch;\r\n\toverflow: hidden;\r\n\tmin-height: 36px;\r\n}\r\n\r\n#cookiescript_categories,\r\n#cookiescript_iab_type {\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\tpadding: 7px 0;\r\n\tborder-bottom: 1px solid #F1F1F1;\r\n\tflex-wrap: wrap;\r\n}\r\n\r\n#cookiescript_cookietablewrap {\r\n\tmax-width: 1140px;\r\n\toverflow: hidden;\r\n    min-height: 216px;\r\n\t-webkit-background-clip: padding-box;\r\n\tbackground-clip: padding-box;\r\n\tmax-height: 350px;\r\n\tbox-sizing: border-box;\r\n\twidth: 100%;\r\n\tposition: relative;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n}\r\n\r\n#cookiescript_cookietablewrap.cookiescript_hidden {\r\n\topacity: 0.0;\r\n\theight: 0;\r\n\tmin-height: 0;\r\n\tmax-height: 0;\r\n\tmargin: 0;\r\n}\r\n\r\n#cookiescript_reportwrap,\r\n#cookiescript_iabwrap {\r\n\theight: 137px;\r\n\toverflow: auto;\r\n}\r\n\r\n#cookiescript_reportwrap > div,\r\n#cookiescript_iabwrap > div {\r\n\ttransition: opacity 200ms 0ms, height 0ms 200ms;\r\n}\r\n\r\n.cookiescript_category_description {\r\n\tpadding: 7px 10px;\r\n\tfont-size: 11px;\r\n\ttext-align: left;\r\n\tfont-weight: normal;\r\n\tline-height: 1.5;\r\n\tcolor: #6f6f6f;\r\n\tmargin: 0;\r\n}\r\n\r\n.cookiescript_fullreport th {\r\n\tbackground: #F5F5F5;\r\n\tcolor: #4b4b4b;\r\n}\r\n\r\n#cookiescript_categories > div,\r\n#cookiescript_iab_type > div {\r\n\tcursor: pointer;\r\n\tpadding: 0 9px;\r\n\tfont-size: 11px;\r\n\tfont-weight: 600;\r\n\tbackground: #f5f5f5;\r\n\tcolor: #4b4b4b;\r\n\tline-height: 2;\r\n\tmargin: 3px 5px;\r\n\twhite-space: nowrap;\r\n}\r\n\r\n#cookiescript_maintabs > div {\r\n\tcursor: pointer;\r\n\twidth: 50%;\r\n\ttransition: all 300ms ease 0s;\r\n\ttext-transform: uppercase;\r\n\tfont-size: 12px;\r\n\ttext-align: center;\r\n\tline-height: 1.5;\r\n\tfont-weight: 500;\r\n\tcolor: #FEFEFE;\r\n\tpadding: 9px 0;\r\n\tposition: relative;\r\n}\r\n\r\n#cookiescript_maintabs .cookiescript_active {\r\n\tbackground: #fefefe;\r\n\tcolor: #21bf96;\r\n}\r\n\r\n#cookiescript_declarationwrap {\r\n\tbackground: #FEFEFE;\r\n\ttransition: opacity 200ms 0ms, height 0ms 200ms;\r\n}\r\n\r\n#cookiescript_categories .cookiescript_active,\r\n#cookiescript_iab_type .cookiescript_active {\r\n\tbackground: #21bf96;\r\n\tcolor: #FEFEFE;\r\n}\r\n\r\n#cookiescript_reportwrap::-webkit-scrollbar-track,\r\n#cookiescript_iabwrap::-webkit-scrollbar-track,\r\n#cookiescript_aboutwrap::-webkit-scrollbar-track {\r\n\tbackground-color: #DADADA;\r\n}\r\n\r\n#cookiescript_reportwrap::-webkit-scrollbar,\r\n#cookiescript_iabwrap::-webkit-scrollbar,\r\n#cookiescript_aboutwrap::-webkit-scrollbar {\r\n\twidth: 6px;\r\n\theight: 6px;\r\n}\r\n\r\n#cookiescript_reportwrap::-webkit-scrollbar-thumb,\r\n#cookiescript_iabwrap::-webkit-scrollbar-thumb,\r\n#cookiescript_aboutwrap::-webkit-scrollbar-thumb {\r\n\tbackground-color: #21bf96;\r\n}\r\n\r\n.cookiescript_fullreport {\r\n\tborder-collapse: collapse;\r\n\twidth: 100%;\r\n\t}\r\n\r\n.cookiescript_fullreport td:nth-child(1) {\r\n\tfont-weight: 600;\r\n}\r\n\r\n.cookiescript_fullreport td:nth-child(3), .cookiescript_fullreport th:nth-child(3) {\r\n\ttext-align: center;\r\n}\r\n\r\n.cookiescript_fullreport td, .cookiescript_fullreport th {\r\n\twhite-space: normal;\r\n\tpadding: 0 8px;\r\n\tfont-size: 11px;\r\n\tfont-weight: 600;\r\n\ttext-align: left;\r\n\tline-height: 1.5;\r\n\tmargin: 0;\r\n}\r\n\r\n.cookiescript_fullreport td {\r\n\tpadding: 7px 8px;\r\n\tline-height: 1.3;\r\n\tvertical-align: top;\r\n\tfont-weight: 400;\r\n\tborder-bottom: 1px solid #F1F1F1;\r\n\tborder-top: 0;\r\n\tborder-left: 0;\r\n\tborder-right: 0;\r\n\tcolor: #6f6f6f;\r\n\tbackground: transparent;\r\n}\r\n.cookiescript_fullreport th {\r\n\tpadding: 7px 8px;\r\n\tvertical-align: middle;\r\n}\r\n.cookiescript_vendor_name a {\r\n\ttext-decoration: underline;\r\n\tfont-weight: bold;\r\n\tcolor: #6f6f6f;\r\n\tline-height: normal;\r\n\tborder: 0;\r\n\tpadding: 0;\r\n\tmargin: 0;\r\n\tbackground: transparent;\r\n\tfont-size: 11px;\r\n}\r\n.cookiescript_vendor_name a:hover {\r\n\tcolor: #000;\r\n}\r\n\r\n.cookiescript_fullreport td:last-child, .cookiescript_fullreport th:last-child {\r\n\tpadding-right: 18px;\r\n}\r\n\r\n.cookiescript_fullreport td:nth-child(1), .cookiescript_fullreport th:nth-child(1) {\r\n\tpadding-left: 18px;\r\n\tword-break: normal;\r\n}\r\n\r\n#cookiescript_aboutwrap {\r\n\tpadding: 7px 18px;\r\n\tfont-size: 12px;\r\n\ttext-align: left;\r\n\tfont-weight: normal;\r\n\tline-height: 1.5;\r\n\tbackground-color: #fefefe;\r\n\tbox-sizing: border-box;\r\n\tcolor: #6f6f6f;\r\n\ttransition: opacity 200ms 0ms;\r\n\toverflow: auto;\r\n\tflex-grow: 0;\r\n\theight: 180px;\r\n}\r\n\r\n#cookiescript_aboutwrap.cookiescript_hidden {\r\n\topacity: 0;\r\n\theight: 0;\r\n\toverflow: hidden;\r\n\tpadding: 0;\r\n}\r\n\r\n#cookiescript_declarationwrap.cookiescript_hidden {\r\n\topacity: 0;\r\n\theight: 0;\r\n\toverflow: hidden;\r\n}\r\n\r\n#cookiescript_setting_advertising_wrap {\r\n    padding: 7px 18px;\r\n    font-size: 12px;\r\n    text-align: left;\r\n    font-weight: normal;\r\n    line-height: 1.5;\r\n    background-color: #fefefe;\r\n    box-sizing: border-box;\r\n    color: #6f6f6f;\r\n    transition: opacity 200ms 0ms;\r\n    overflow: auto;\r\n    flex-grow: 0;\r\n    height: 180px;\r\n}\r\n\r\n#cookiescript_setting_advertising_wrap.cookiescript_hidden {\r\n    opacity: 0;\r\n    height: 0;\r\n    overflow: hidden;\r\n}\r\n\r\n#cookiescript_tabscontent {\r\n\tbackground: #FEFEFE;\r\n\toverflow: hidden;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n}\r\n\r\n#cookiescript_reportwrap .cookiescript_hidden,\r\n#cookiescript_iabwrap .cookiescript_hidden {\r\n\topacity: 0;\r\n\theight: 0;\r\n\ttransition: opacity 200ms 0ms, height 0ms 200ms;\r\n\toverflow: hidden;\r\n}\r\n#cookiescript_reportdate{\r\n\tfont-size: 11px;\r\n\ttext-align: right;\r\n\topacity: 0.9;\r\n\tpadding: 0 10px;\r\n\tmargin: 0;\r\n}\r\n\r\n#cookiescript_injected.hascookiereport #cookiescript_copyright{\r\n\tdisplay: none;\r\n}\r\n\r\n\r\n@media only screen and (max-width: 414px) {\r\n\t.cookiescript_fullreport thead {\r\n\t\tdisplay: none;\r\n\t}\r\n\r\n\t.cookiescript_fullreport td {\r\n\t\tdisplay: flex;\r\n\t}\r\n\r\n\t.cookiescript_fullreport td::before {\r\n\t\tcontent: attr(label);\r\n\t\tfont-weight: bold;\r\n\t\twidth: 120px;\r\n\t\tmin-width: 120px;\r\n\t}\r\n\r\n\t.cookiescript_category_description,\r\n\t.cookiescript_fullreport td,\r\n\t.cookiescript_fullreport td:nth-child(1),\r\n\t.cookiescript_fullreport td:nth-child(3) {\r\n\t\tpadding: 7px 10px;\r\n\t\ttext-align: left;\r\n\t}\r\n\r\n\t.cookiescript_fullreport td:last-child {\r\n\t\tborder-bottom: none;\r\n\t}\r\n\r\n\t.cookiescript_fullreport tr:nth-child(even) {\r\n\t\tbackground: #f5f5f5;\r\n\t}\r\n\r\n.cookiescript_fullreport tr:nth-child(even) td {\r\n    border-bottom: 1px solid #FFF;\r\n\t}\r\n}\r\n\r\n\r\n@media screen and (min-width:0\\0) and (min-resolution: .001dpcm) {\r\n\t#cookiescript_maintabs > div{\r\n\t\tdisplay:block;\r\n\t\tfloat:left;\r\n\t}\r\n\t#cookiescript_categories > div,\r\n\t#cookiescript_iab_type > div{\r\n\t\tdisplay:inline-block;\r\n\t}\r\n\r\n}\r\n\r\n\r\n#cookiescript_categories > div,\r\n#cookiescript_iab_type > div {\r\n\tborder-radius: 20px;\r\n}\r\n#cookiescript_reportwrap::-webkit-scrollbar-track,\r\n#cookiescript_iabwrap::-webkit-scrollbar-track,\r\n#cookiescript_aboutwrap::-webkit-scrollbar-track {\r\n\tborder-radius: 6px;\r\n}\r\n#cookiescript_reportwrap::-webkit-scrollbar-thumb,\r\n#cookiescript_iabwrap::-webkit-scrollbar-thumb,\r\n#cookiescript_aboutwrap::-webkit-scrollbar-thumb {\r\n\tborder-radius: 5px;\r\n}\r\n#cookiescript_maintabs {\r\n\tborder-top-left-radius: 10px;\r\n\tborder-top-right-radius: 10px;\r\n}\r\n#cookiescript_tabscontent {\r\n\t\r\n\tborder-bottom-right-radius: 10px;\r\n\tborder-bottom-left-radius: 10px;\r\n}\r\n\r\n\r\n\r\n.cookiescript_rtl {\r\n    direction:rtl;\r\n}\r\n\r\n\r\n/*Start Checkboxes*/\r\n#cookiescript_injected_fsd .mdc-checkbox,\r\n#cookiescript_injected .mdc-checkbox {\r\n    box-sizing: content-box !important;\r\n}\r\n#cookiescript_injected_fsd .mdc-checkbox__native-control,\r\n#cookiescript_injected .mdc-checkbox__native-control {\r\n    display: block;\r\n    z-index: 1;\r\n}\r\n#cookiescript_injected_fsd .mdc-checkbox .mdc-checkbox__native-control:focus~.mdc-checkbox__background::before, \r\n#cookiescript_injected .mdc-checkbox .mdc-checkbox__native-control:focus~.mdc-checkbox__background::before, \r\n#cookiescript_injected_fsd .mdc-checkbox .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background::before,\r\n#cookiescript_injected .mdc-checkbox .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background::before {\r\n    background-color: #FFFFFF;\r\n}\r\n\r\n#cookiescript_injected .mdc-checkbox,#cookiescript_injected_fsd .mdc-checkbox{display:inline-block;position:relative;flex:0 0 18px;box-sizing:content-box;width:18px;height:18px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom;padding:11px}#cookiescript_injected .mdc-checkbox .mdc-checkbox__native-control:checked~.mdc-checkbox__background::before,#cookiescript_injected .mdc-checkbox .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background::before,#cookiescript_injected_fsd .mdc-checkbox .mdc-checkbox__native-control:checked~.mdc-checkbox__background::before,#cookiescript_injected_fsd .mdc-checkbox .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background::before{background-color:#041836}@supports not (-ms-ime-align:auto){#cookiescript_injected .mdc-checkbox .mdc-checkbox__native-control:checked~.mdc-checkbox__background::before,#cookiescript_injected .mdc-checkbox .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background::before,#cookiescript_injected_fsd .mdc-checkbox .mdc-checkbox__native-control:checked~.mdc-checkbox__background::before,#cookiescript_injected_fsd .mdc-checkbox .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background::before{background-color:var(--mdc-theme-secondary, #041836)}}#cookiescript_injected .mdc-checkbox .mdc-checkbox__background,#cookiescript_injected_fsd .mdc-checkbox .mdc-checkbox__background{top:11px;left:11px}#cookiescript_injected .mdc-checkbox .mdc-checkbox__background::before,#cookiescript_injected_fsd .mdc-checkbox .mdc-checkbox__background::before{top:-13px;left:-13px;width:40px;height:40px}#cookiescript_injected .mdc-checkbox .mdc-checkbox__native-control,#cookiescript_injected_fsd .mdc-checkbox .mdc-checkbox__native-control{top:0;right:0;left:0;width:40px;height:40px}#cookiescript_injected .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate)~.mdc-checkbox__background,#cookiescript_injected_fsd .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate)~.mdc-checkbox__background{border-color:#041836;background-color:transparent}#cookiescript_injected .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,#cookiescript_injected .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background,#cookiescript_injected_fsd .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,#cookiescript_injected_fsd .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background{border-color:#041836;background-color:#041836}#cookiescript_injected .mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate)~.mdc-checkbox__background,#cookiescript_injected_fsd .mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate)~.mdc-checkbox__background{border-color:rgba(4,24,54,0.26);background-color:transparent}#cookiescript_injected .mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,#cookiescript_injected .mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,#cookiescript_injected_fsd .mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,#cookiescript_injected_fsd .mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background{border-color:transparent;background-color:rgba(4,24,54,0.26)}#cookiescript_injected .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__checkmark,#cookiescript_injected_fsd .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#ffffff}#cookiescript_injected .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark,#cookiescript_injected_fsd .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#ffffff}#cookiescript_injected .mdc-checkbox__background,#cookiescript_injected_fsd .mdc-checkbox__background{display:inline-flex;position:absolute;align-items:center;justify-content:center;box-sizing:border-box;width:18px;height:18px;border:2px solid #041836;border-radius:2px;background-color:transparent;pointer-events:none;will-change:background-color,border-color;transition:background-color 90ms 0s cubic-bezier(.4,0,.6,1),border-color 90ms 0s cubic-bezier(.4,0,.6,1)}#cookiescript_injected .mdc-checkbox__background .mdc-checkbox__background::before,#cookiescript_injected_fsd .mdc-checkbox__background .mdc-checkbox__background::before{background-color:#000}@supports not (-ms-ime-align:auto){#cookiescript_injected .mdc-checkbox__checkmark,#cookiescript_injected_fsd .mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;opacity:0;transition:opacity 180ms 0s cubic-bezier(.4,0,.6,1)}#cookiescript_injected .mdc-checkbox__checkmark-path,#cookiescript_injected_fsd .mdc-checkbox__checkmark-path{transition:stroke-dashoffset 180ms 0s cubic-bezier(.4,0,.6,1);stroke:currentColor;stroke-width:3.12px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}#cookiescript_injected .mdc-checkbox__native-control:checked~.mdc-checkbox__background,#cookiescript_injected .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background,#cookiescript_injected_fsd .mdc-checkbox__native-control:checked~.mdc-checkbox__background,#cookiescript_injected_fsd .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{transition:border-color 90ms 0s cubic-bezier(0,0,.2,1),background-color 90ms 0s cubic-bezier(0,0,.2,1)}#cookiescript_injected .mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark-path,#cookiescript_injected .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark-path,#cookiescript_injected_fsd .mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark-path,#cookiescript_injected_fsd .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark-path{stroke-dashoffset:0}#cookiescript_injected .mdc-checkbox__background::before,#cookiescript_injected_fsd .mdc-checkbox__background::before{position:absolute;-webkit-transform:scale(0,0);transform:scale(0,0);border-radius:50%;opacity:0;pointer-events:none;content:\"\";will-change:opacity,transform;transition:opacity 90ms 0s cubic-bezier(.4,0,.6,1),-webkit-transform 90ms 0s cubic-bezier(.4,0,.6,1);transition:opacity 90ms 0s cubic-bezier(.4,0,.6,1),transform 90ms 0s cubic-bezier(.4,0,.6,1);transition:opacity 90ms 0s cubic-bezier(.4,0,.6,1),transform 90ms 0s cubic-bezier(.4,0,.6,1),-webkit-transform 90ms 0s cubic-bezier(.4,0,.6,1)}#cookiescript_injected .mdc-checkbox__native-control:focus~.mdc-checkbox__background::before,#cookiescript_injected_fsd .mdc-checkbox__native-control:focus~.mdc-checkbox__background::before{-webkit-transform:scale(1);transform:scale(1);opacity:.12;transition:opacity 80ms 0s cubic-bezier(0,0,.2,1),-webkit-transform 80ms 0s cubic-bezier(0,0,.2,1);transition:opacity 80ms 0s cubic-bezier(0,0,.2,1),transform 80ms 0s cubic-bezier(0,0,.2,1);transition:opacity 80ms 0s cubic-bezier(0,0,.2,1),transform 80ms 0s cubic-bezier(0,0,.2,1),-webkit-transform 80ms 0s cubic-bezier(0,0,.2,1)}#cookiescript_injected .mdc-checkbox__native-control,#cookiescript_injected_fsd .mdc-checkbox__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit}#cookiescript_injected .mdc-checkbox__native-control:disabled,#cookiescript_injected_fsd .mdc-checkbox__native-control:disabled{cursor:default;pointer-events:none}#cookiescript_injected .mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark,#cookiescript_injected_fsd .mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark{transition:opacity 180ms 0s cubic-bezier(0,0,.2,1),-webkit-transform 180ms 0s cubic-bezier(0,0,.2,1);transition:opacity 180ms 0s cubic-bezier(0,0,.2,1),transform 180ms 0s cubic-bezier(0,0,.2,1);transition:opacity 180ms 0s cubic-bezier(0,0,.2,1),transform 180ms 0s cubic-bezier(0,0,.2,1),-webkit-transform 180ms 0s cubic-bezier(0,0,.2,1);opacity:1}#cookiescript_injected .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark,#cookiescript_injected_fsd .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark{-webkit-transform:rotate(45deg);transform:rotate(45deg);opacity:0;transition:opacity 90ms 0s cubic-bezier(.4,0,.6,1),-webkit-transform 90ms 0s cubic-bezier(.4,0,.6,1);transition:opacity 90ms 0s cubic-bezier(.4,0,.6,1),transform 90ms 0s cubic-bezier(.4,0,.6,1);transition:opacity 90ms 0s cubic-bezier(.4,0,.6,1),transform 90ms 0s cubic-bezier(.4,0,.6,1),-webkit-transform 90ms 0s cubic-bezier(.4,0,.6,1)}#cookiescript_injected .mdc-checkbox,#cookiescript_injected_fsd .mdc-checkbox{-webkit-tap-highlight-color:transparent}}\r\n/*End Checkboxes*/\r\n\r\n\r\n/*Start Toggle*/\r\n\r\n#cookiescript_injected .mdc-elevation-overlay,#cookiescript_injected_fsd .mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:0;transition:opacity 280ms cubic-bezier(.4,0,.2,1);background-color:#fff}#cookiescript_injected .mdc-switch,#cookiescript_injected_fsd .mdc-switch{align-items:center;background:0 0;border:none;cursor:pointer;display:inline-flex;flex-shrink:0;margin:0;outline:0;overflow:visible;padding:0;position:relative}#cookiescript_injected .mdc-switch:disabled,#cookiescript_injected_fsd .mdc-switch:disabled{cursor:default;pointer-events:none}#cookiescript_injected .mdc-switch input[type=checkbox],#cookiescript_injected_fsd .mdc-switch input[type=checkbox]{display:none;visibility:hidden}#cookiescript_injected .mdc-switch__track,#cookiescript_injected_fsd .mdc-switch__track{overflow:hidden;position:relative;width:100%}#cookiescript_injected .mdc-switch__track::after,#cookiescript_injected .mdc-switch__track::before,#cookiescript_injected_fsd .mdc-switch__track::after,#cookiescript_injected_fsd .mdc-switch__track::before{border:1px solid transparent;border-radius:inherit;box-sizing:border-box;content:\"\";height:100%;left:0;position:absolute;width:100%}#cookiescript_injected .mdc-switch__track::before,#cookiescript_injected_fsd .mdc-switch__track::before{transition:-webkit-transform 75ms 0s cubic-bezier(0,0,.2,1);transition:transform 75ms 0s cubic-bezier(0,0,.2,1);-webkit-transform:translateX(0);transform:translateX(0)}#cookiescript_injected .mdc-switch__track::after,#cookiescript_injected_fsd .mdc-switch__track::after{transition:-webkit-transform 75ms 0s cubic-bezier(.4,0,.6,1);transition:transform 75ms 0s cubic-bezier(.4,0,.6,1);-webkit-transform:translateX(-100%);transform:translateX(-100%)}#cookiescript_injected .mdc-switch__track[dir=rtl]::after,#cookiescript_injected [dir=rtl] .mdc-switch__track::after,#cookiescript_injected_fsd .mdc-switch__track[dir=rtl]::after,#cookiescript_injected_fsd [dir=rtl] .mdc-switch__track::after{-webkit-transform:translateX(100%);transform:translateX(100%)}#cookiescript_injected .mdc-switch--selected .mdc-switch__track::before,#cookiescript_injected_fsd .mdc-switch--selected .mdc-switch__track::before{transition:-webkit-transform 75ms 0s cubic-bezier(.4,0,.6,1);transition:transform 75ms 0s cubic-bezier(.4,0,.6,1);-webkit-transform:translateX(100%);transform:translateX(100%)}#cookiescript_injected .mdc-switch--selected .mdc-switch__track[dir=rtl]::before,#cookiescript_injected [dir=rtl] .mdc-switch--selected .mdc-switch__track::before,#cookiescript_injected_fsd .mdc-switch--selected .mdc-switch__track[dir=rtl]::before,#cookiescript_injected_fsd [dir=rtl] .mdc-switch--selected .mdc-switch__track::before{-webkit-transform:translateX(-100%);transform:translateX(-100%)}#cookiescript_injected .mdc-switch--selected .mdc-switch__track::after,#cookiescript_injected_fsd .mdc-switch--selected .mdc-switch__track::after{transition:-webkit-transform 75ms 0s cubic-bezier(0,0,.2,1);transition:transform 75ms 0s cubic-bezier(0,0,.2,1);-webkit-transform:translateX(0);transform:translateX(0)}#cookiescript_injected .mdc-switch__handle-track,#cookiescript_injected_fsd .mdc-switch__handle-track{height:100%;pointer-events:none;position:absolute;top:0;transition:-webkit-transform 75ms 0s cubic-bezier(.4,0,.2,1);transition:transform 75ms 0s cubic-bezier(.4,0,.2,1);left:0;right:auto;-webkit-transform:translateX(0);transform:translateX(0)}#cookiescript_injected .mdc-switch__handle-track[dir=rtl],#cookiescript_injected [dir=rtl] .mdc-switch__handle-track,#cookiescript_injected_fsd .mdc-switch__handle-track[dir=rtl],#cookiescript_injected_fsd [dir=rtl] .mdc-switch__handle-track{left:auto;right:0}#cookiescript_injected .mdc-switch--selected .mdc-switch__handle-track,#cookiescript_injected_fsd .mdc-switch--selected .mdc-switch__handle-track{-webkit-transform:translateX(100%);transform:translateX(100%)}#cookiescript_injected .mdc-switch--selected .mdc-switch__handle-track[dir=rtl],#cookiescript_injected [dir=rtl] .mdc-switch--selected .mdc-switch__handle-track,#cookiescript_injected_fsd .mdc-switch--selected .mdc-switch__handle-track[dir=rtl],#cookiescript_injected_fsd [dir=rtl] .mdc-switch--selected .mdc-switch__handle-track{-webkit-transform:translateX(-100%);transform:translateX(-100%)}#cookiescript_injected .mdc-switch__handle,#cookiescript_injected_fsd .mdc-switch__handle{display:flex;pointer-events:auto;position:absolute;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);left:0;right:auto}#cookiescript_injected .mdc-switch__handle[dir=rtl],#cookiescript_injected [dir=rtl] .mdc-switch__handle,#cookiescript_injected_fsd .mdc-switch__handle[dir=rtl],#cookiescript_injected_fsd [dir=rtl] .mdc-switch__handle{left:auto;right:0}#cookiescript_injected .mdc-switch__handle::after,#cookiescript_injected .mdc-switch__handle::before,#cookiescript_injected_fsd .mdc-switch__handle::after,#cookiescript_injected_fsd .mdc-switch__handle::before{border:1px solid transparent;border-radius:inherit;box-sizing:border-box;content:\"\";width:100%;height:100%;left:0;position:absolute;top:0;transition:background-color 75ms 0s cubic-bezier(.4,0,.2,1),border-color 75ms 0s cubic-bezier(.4,0,.2,1);z-index:-1}#cookiescript_injected .mdc-switch__shadow,#cookiescript_injected_fsd .mdc-switch__shadow{border-radius:inherit;bottom:0;left:0;position:absolute;right:0;top:0}#cookiescript_injected .mdc-elevation-overlay,#cookiescript_injected_fsd .mdc-elevation-overlay{bottom:0;left:0;right:0;top:0}#cookiescript_injected .mdc-switch__ripple,#cookiescript_injected_fsd .mdc-switch__ripple{left:50%;position:absolute;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);z-index:-1}#cookiescript_injected .mdc-switch:disabled .mdc-switch__ripple,#cookiescript_injected_fsd .mdc-switch:disabled .mdc-switch__ripple{display:none}#cookiescript_injected .mdc-switch__icons,#cookiescript_injected_fsd .mdc-switch__icons{height:100%;position:relative;width:100%;z-index:1}#cookiescript_injected .mdc-switch__icon,#cookiescript_injected_fsd .mdc-switch__icon{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0;opacity:0;transition:opacity 30ms 0s cubic-bezier(.4,0,1,1)}#cookiescript_injected .mdc-switch--selected .mdc-switch__icon--on,#cookiescript_injected .mdc-switch--unselected .mdc-switch__icon--off,#cookiescript_injected_fsd .mdc-switch--selected .mdc-switch__icon--on,#cookiescript_injected_fsd .mdc-switch--unselected .mdc-switch__icon--off{opacity:1;transition:opacity 45ms 30ms cubic-bezier(0,0,.2,1)}#cookiescript_injected .mdc-switch,#cookiescript_injected_fsd .mdc-switch{will-change:transform,opacity}@-webkit-keyframes mdc-ripple-fg-radius-in{from{-webkit-animation-timing-function:cubic-bezier(.4,0,.2,1);animation-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transform:translate(0) scale(1);transform:translate(0) scale(1)}to{-webkit-transform:translate(0) scale(1);transform:translate(0) scale(1)}}@keyframes mdc-ripple-fg-radius-in{from{-webkit-animation-timing-function:cubic-bezier(.4,0,.2,1);animation-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transform:translate(0) scale(1);transform:translate(0) scale(1)}to{-webkit-transform:translate(0) scale(1);transform:translate(0) scale(1)}}@-webkit-keyframes mdc-ripple-fg-opacity-in{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:.1}}@keyframes mdc-ripple-fg-opacity-in{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:.1}}@-webkit-keyframes mdc-ripple-fg-opacity-out{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:.1}to{opacity:0}}@keyframes mdc-ripple-fg-opacity-out{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:.1}to{opacity:0}}#cookiescript_injected .mdc-switch .mdc-switch__ripple::after,#cookiescript_injected .mdc-switch .mdc-switch__ripple::before,#cookiescript_injected_fsd .mdc-switch .mdc-switch__ripple::after,#cookiescript_injected_fsd .mdc-switch .mdc-switch__ripple::before{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}#cookiescript_injected .mdc-switch .mdc-switch__ripple::before,#cookiescript_injected_fsd .mdc-switch .mdc-switch__ripple::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1}#cookiescript_injected .mdc-switch .mdc-switch__ripple::after,#cookiescript_injected_fsd .mdc-switch .mdc-switch__ripple::after{z-index:0}#cookiescript_injected .mdc-switch.mdc-ripple-upgraded .mdc-switch__ripple::before,#cookiescript_injected_fsd .mdc-switch.mdc-ripple-upgraded .mdc-switch__ripple::before{-webkit-transform:scale(1);transform:scale(1)}#cookiescript_injected .mdc-switch.mdc-ripple-upgraded .mdc-switch__ripple::after,#cookiescript_injected_fsd .mdc-switch.mdc-ripple-upgraded .mdc-switch__ripple::after{top:0;left:0;-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:center center;transform-origin:center center}#cookiescript_injected .mdc-switch.mdc-ripple-upgraded--unbounded .mdc-switch__ripple::after,#cookiescript_injected_fsd .mdc-switch.mdc-ripple-upgraded--unbounded .mdc-switch__ripple::after{top:0;left:0}#cookiescript_injected .mdc-switch.mdc-ripple-upgraded--foreground-activation .mdc-switch__ripple::after,#cookiescript_injected_fsd .mdc-switch.mdc-ripple-upgraded--foreground-activation .mdc-switch__ripple::after{-webkit-animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards;animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}#cookiescript_injected .mdc-switch.mdc-ripple-upgraded--foreground-deactivation .mdc-switch__ripple::after,#cookiescript_injected_fsd .mdc-switch.mdc-ripple-upgraded--foreground-deactivation .mdc-switch__ripple::after{-webkit-animation:mdc-ripple-fg-opacity-out 150ms;animation:mdc-ripple-fg-opacity-out 150ms;-webkit-transform:translate(0) scale(1);transform:translate(0) scale(1)}#cookiescript_injected .mdc-switch .mdc-switch__ripple::after,#cookiescript_injected .mdc-switch .mdc-switch__ripple::before,#cookiescript_injected_fsd .mdc-switch .mdc-switch__ripple::after,#cookiescript_injected_fsd .mdc-switch .mdc-switch__ripple::before{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}#cookiescript_injected .mdc-switch.mdc-ripple-upgraded .mdc-switch__ripple::after,#cookiescript_injected .mdc-switch.mdc-ripple-upgraded .mdc-switch__ripple::before,#cookiescript_injected_fsd .mdc-switch.mdc-ripple-upgraded .mdc-switch__ripple::after,#cookiescript_injected_fsd .mdc-switch.mdc-ripple-upgraded .mdc-switch__ripple::before{top:0;left:0;width:0;height:0}#cookiescript_injected .mdc-switch.mdc-ripple-upgraded .mdc-switch__ripple::after,#cookiescript_injected_fsd .mdc-switch.mdc-ripple-upgraded .mdc-switch__ripple::after{width:0;height:0}#cookiescript_injected .mdc-switch,#cookiescript_injected_fsd .mdc-switch{width:36px}#cookiescript_injected .mdc-switch.mdc-switch--selected:enabled .mdc-switch__handle::after{background:}#cookiescript_injected .mdc-switch.mdc-switch--selected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after{background:}#cookiescript_injected .mdc-switch.mdc-switch--selected:enabled:focus:not(:active) .mdc-switch__handle::after{background:}#cookiescript_injected .mdc-switch.mdc-switch--selected:enabled:active .mdc-switch__handle::after{background:}#cookiescript_injected .mdc-switch.mdc-switch--selected:disabled .mdc-switch__handle::after,#cookiescript_injected_fsd .mdc-switch.mdc-switch--selected:disabled .mdc-switch__handle::after{background:#424242}#cookiescript_injected .mdc-switch.mdc-switch--unselected:enabled .mdc-switch__handle::after,#cookiescript_injected_fsd .mdc-switch.mdc-switch--unselected:enabled .mdc-switch__handle::after{background:#616161}#cookiescript_injected .mdc-switch.mdc-switch--unselected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after,#cookiescript_injected_fsd .mdc-switch.mdc-switch--unselected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after{background:#212121}#cookiescript_injected .mdc-switch.mdc-switch--unselected:enabled:focus:not(:active) .mdc-switch__handle::after,#cookiescript_injected_fsd .mdc-switch.mdc-switch--unselected:enabled:focus:not(:active) .mdc-switch__handle::after{background:#212121}#cookiescript_injected .mdc-switch.mdc-switch--unselected:enabled:active .mdc-switch__handle::after,#cookiescript_injected_fsd .mdc-switch.mdc-switch--unselected:enabled:active .mdc-switch__handle::after{background:#212121}#cookiescript_injected .mdc-switch.mdc-switch--unselected:disabled .mdc-switch__handle::after,#cookiescript_injected_fsd .mdc-switch.mdc-switch--unselected:disabled .mdc-switch__handle::after{background:#424242}#cookiescript_injected .mdc-switch .mdc-switch__handle::before,#cookiescript_injected_fsd .mdc-switch .mdc-switch__handle::before{background:#fff}#cookiescript_injected .mdc-switch:enabled .mdc-switch__shadow,#cookiescript_injected_fsd .mdc-switch:enabled .mdc-switch__shadow{box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12);--mdc-elevation-box-shadow-for-gss:0px 2px 1px -1px rgba(0, 0, 0, 0.2),0px 1px 1px 0px rgba(0, 0, 0, 0.14),0px 1px 3px 0px rgba(0, 0, 0, 0.12)}#cookiescript_injected .mdc-switch:disabled .mdc-switch__shadow,#cookiescript_injected_fsd .mdc-switch:disabled .mdc-switch__shadow{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12);--mdc-elevation-box-shadow-for-gss:0px 0px 0px 0px rgba(0, 0, 0, 0.2),0px 0px 0px 0px rgba(0, 0, 0, 0.14),0px 0px 0px 0px rgba(0, 0, 0, 0.12)}#cookiescript_injected .mdc-switch .mdc-switch__handle,#cookiescript_injected_fsd .mdc-switch .mdc-switch__handle{height:20px}#cookiescript_injected .mdc-switch:disabled .mdc-switch__handle::after,#cookiescript_injected_fsd .mdc-switch:disabled .mdc-switch__handle::after{opacity:.38}#cookiescript_injected .mdc-switch .mdc-switch__handle,#cookiescript_injected_fsd .mdc-switch .mdc-switch__handle{border-radius:10px}#cookiescript_injected .mdc-switch .mdc-switch__handle,#cookiescript_injected_fsd .mdc-switch .mdc-switch__handle{width:20px}#cookiescript_injected .mdc-switch .mdc-switch__handle-track,#cookiescript_injected_fsd .mdc-switch .mdc-switch__handle-track{width:calc(100% - 20px)}#cookiescript_injected .mdc-switch.mdc-switch--selected:enabled .mdc-switch__icon,#cookiescript_injected_fsd .mdc-switch.mdc-switch--selected:enabled .mdc-switch__icon{fill:#fff}#cookiescript_injected .mdc-switch.mdc-switch--selected:disabled .mdc-switch__icon,#cookiescript_injected_fsd .mdc-switch.mdc-switch--selected:disabled .mdc-switch__icon{fill:#fff}#cookiescript_injected .mdc-switch.mdc-switch--unselected:enabled .mdc-switch__icon,#cookiescript_injected_fsd .mdc-switch.mdc-switch--unselected:enabled .mdc-switch__icon{fill:#fff}#cookiescript_injected .mdc-switch.mdc-switch--unselected:disabled .mdc-switch__icon,#cookiescript_injected_fsd .mdc-switch.mdc-switch--unselected:disabled .mdc-switch__icon{fill:#fff}#cookiescript_injected .mdc-switch.mdc-switch--selected:disabled .mdc-switch__icons,#cookiescript_injected_fsd .mdc-switch.mdc-switch--selected:disabled .mdc-switch__icons{opacity:.38}#cookiescript_injected .mdc-switch.mdc-switch--unselected:disabled .mdc-switch__icons,#cookiescript_injected_fsd .mdc-switch.mdc-switch--unselected:disabled .mdc-switch__icons{opacity:.38}#cookiescript_injected .mdc-switch.mdc-switch--selected .mdc-switch__icon,#cookiescript_injected_fsd .mdc-switch.mdc-switch--selected .mdc-switch__icon{width:18px;height:18px}#cookiescript_injected .mdc-switch.mdc-switch--unselected .mdc-switch__icon,#cookiescript_injected_fsd .mdc-switch.mdc-switch--unselected .mdc-switch__icon{width:18px;height:18px}#cookiescript_injected .mdc-switch.mdc-switch--selected:enabled:hover:not(:focus) .mdc-switch__ripple::after,#cookiescript_injected .mdc-switch.mdc-switch--selected:enabled:hover:not(:focus) .mdc-switch__ripple::before{background-color:}#cookiescript_injected .mdc-switch.mdc-switch--selected:enabled:focus .mdc-switch__ripple::after,#cookiescript_injected .mdc-switch.mdc-switch--selected:enabled:focus .mdc-switch__ripple::before{background-color:}#cookiescript_injected .mdc-switch.mdc-switch--selected:enabled:active .mdc-switch__ripple::after,#cookiescript_injected .mdc-switch.mdc-switch--selected:enabled:active .mdc-switch__ripple::before{background-color:}#cookiescript_injected .mdc-switch.mdc-switch--unselected:enabled:hover:not(:focus) .mdc-switch__ripple::after,#cookiescript_injected .mdc-switch.mdc-switch--unselected:enabled:hover:not(:focus) .mdc-switch__ripple::before,#cookiescript_injected_fsd .mdc-switch.mdc-switch--unselected:enabled:hover:not(:focus) .mdc-switch__ripple::after,#cookiescript_injected_fsd .mdc-switch.mdc-switch--unselected:enabled:hover:not(:focus) .mdc-switch__ripple::before{background-color:#424242}#cookiescript_injected .mdc-switch.mdc-switch--unselected:enabled:focus .mdc-switch__ripple::after,#cookiescript_injected .mdc-switch.mdc-switch--unselected:enabled:focus .mdc-switch__ripple::before,#cookiescript_injected_fsd .mdc-switch.mdc-switch--unselected:enabled:focus .mdc-switch__ripple::after,#cookiescript_injected_fsd .mdc-switch.mdc-switch--unselected:enabled:focus .mdc-switch__ripple::before{background-color:#424242}#cookiescript_injected .mdc-switch.mdc-switch--unselected:enabled:active .mdc-switch__ripple::after,#cookiescript_injected .mdc-switch.mdc-switch--unselected:enabled:active .mdc-switch__ripple::before,#cookiescript_injected_fsd .mdc-switch.mdc-switch--unselected:enabled:active .mdc-switch__ripple::after,#cookiescript_injected_fsd .mdc-switch.mdc-switch--unselected:enabled:active .mdc-switch__ripple::before{background-color:#424242}#cookiescript_injected .mdc-switch.mdc-switch--selected:enabled:hover:not(:focus).mdc-ripple-surface--hover .mdc-switch__ripple::before,#cookiescript_injected .mdc-switch.mdc-switch--selected:enabled:hover:not(:focus):hover .mdc-switch__ripple::before,#cookiescript_injected_fsd .mdc-switch.mdc-switch--selected:enabled:hover:not(:focus).mdc-ripple-surface--hover .mdc-switch__ripple::before,#cookiescript_injected_fsd .mdc-switch.mdc-switch--selected:enabled:hover:not(:focus):hover .mdc-switch__ripple::before{opacity:.04}#cookiescript_injected .mdc-switch.mdc-switch--selected:enabled:focus.mdc-ripple-upgraded--background-focused .mdc-switch__ripple::before,#cookiescript_injected .mdc-switch.mdc-switch--selected:enabled:focus:not(.mdc-ripple-upgraded):focus .mdc-switch__ripple::before,#cookiescript_injected_fsd .mdc-switch.mdc-switch--selected:enabled:focus.mdc-ripple-upgraded--background-focused .mdc-switch__ripple::before,#cookiescript_injected_fsd .mdc-switch.mdc-switch--selected:enabled:focus:not(.mdc-ripple-upgraded):focus .mdc-switch__ripple::before{transition-duration:75ms;opacity:.12}#cookiescript_injected .mdc-switch.mdc-switch--selected:enabled:active:not(.mdc-ripple-upgraded) .mdc-switch__ripple::after,#cookiescript_injected_fsd .mdc-switch.mdc-switch--selected:enabled:active:not(.mdc-ripple-upgraded) .mdc-switch__ripple::after{transition:opacity 150ms linear}#cookiescript_injected .mdc-switch.mdc-switch--selected:enabled:active:not(.mdc-ripple-upgraded):active .mdc-switch__ripple::after,#cookiescript_injected_fsd .mdc-switch.mdc-switch--selected:enabled:active:not(.mdc-ripple-upgraded):active .mdc-switch__ripple::after{transition-duration:75ms;opacity:.1}#cookiescript_injected .mdc-switch.mdc-switch--unselected:enabled:hover:not(:focus).mdc-ripple-surface--hover .mdc-switch__ripple::before,#cookiescript_injected .mdc-switch.mdc-switch--unselected:enabled:hover:not(:focus):hover .mdc-switch__ripple::before,#cookiescript_injected_fsd .mdc-switch.mdc-switch--unselected:enabled:hover:not(:focus).mdc-ripple-surface--hover .mdc-switch__ripple::before,#cookiescript_injected_fsd .mdc-switch.mdc-switch--unselected:enabled:hover:not(:focus):hover .mdc-switch__ripple::before{opacity:.04}#cookiescript_injected .mdc-switch.mdc-switch--unselected:enabled:focus.mdc-ripple-upgraded--background-focused .mdc-switch__ripple::before,#cookiescript_injected .mdc-switch.mdc-switch--unselected:enabled:focus:not(.mdc-ripple-upgraded):focus .mdc-switch__ripple::before,#cookiescript_injected_fsd .mdc-switch.mdc-switch--unselected:enabled:focus.mdc-ripple-upgraded--background-focused .mdc-switch__ripple::before,#cookiescript_injected_fsd .mdc-switch.mdc-switch--unselected:enabled:focus:not(.mdc-ripple-upgraded):focus .mdc-switch__ripple::before{transition-duration:75ms;opacity:.12}#cookiescript_injected .mdc-switch.mdc-switch--unselected:enabled:active:not(.mdc-ripple-upgraded) .mdc-switch__ripple::after,#cookiescript_injected_fsd .mdc-switch.mdc-switch--unselected:enabled:active:not(.mdc-ripple-upgraded) .mdc-switch__ripple::after{transition:opacity 150ms linear}#cookiescript_injected .mdc-switch.mdc-switch--unselected:enabled:active:not(.mdc-ripple-upgraded):active .mdc-switch__ripple::after,#cookiescript_injected_fsd .mdc-switch.mdc-switch--unselected:enabled:active:not(.mdc-ripple-upgraded):active .mdc-switch__ripple::after{transition-duration:75ms;opacity:.1}#cookiescript_injected .mdc-switch .mdc-switch__ripple,#cookiescript_injected_fsd .mdc-switch .mdc-switch__ripple{height:48px;width:48px}#cookiescript_injected .mdc-switch .mdc-switch__track,#cookiescript_injected_fsd .mdc-switch .mdc-switch__track{height:14px}#cookiescript_injected .mdc-switch:disabled .mdc-switch__track,#cookiescript_injected_fsd .mdc-switch:disabled .mdc-switch__track{opacity:.12}#cookiescript_injected .mdc-switch:enabled .mdc-switch__track::after{background:;opacity:0.3}#cookiescript_injected .mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::after{background:;opacity:0.3}#cookiescript_injected .mdc-switch:enabled:focus:not(:active) .mdc-switch__track::after{background:;opacity:0.3}#cookiescript_injected .mdc-switch:enabled:active .mdc-switch__track::after{background:;opacity:0.3}#cookiescript_injected .mdc-switch:disabled .mdc-switch__track::after,#cookiescript_injected_fsd .mdc-switch:disabled .mdc-switch__track::after{background:#424242}#cookiescript_injected .mdc-switch:enabled .mdc-switch__track::before,#cookiescript_injected_fsd .mdc-switch:enabled .mdc-switch__track::before{background:#e0e0e0}#cookiescript_injected .mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::before,#cookiescript_injected_fsd .mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::before{background:#e0e0e0}#cookiescript_injected .mdc-switch:enabled:focus:not(:active) .mdc-switch__track::before,#cookiescript_injected_fsd .mdc-switch:enabled:focus:not(:active) .mdc-switch__track::before{background:#e0e0e0}#cookiescript_injected .mdc-switch:enabled:active .mdc-switch__track::before,#cookiescript_injected_fsd .mdc-switch:enabled:active .mdc-switch__track::before{background:#e0e0e0}#cookiescript_injected .mdc-switch:disabled .mdc-switch__track::before,#cookiescript_injected_fsd .mdc-switch:disabled .mdc-switch__track::before{background:#424242}#cookiescript_injected .mdc-switch .mdc-switch__track,#cookiescript_injected_fsd .mdc-switch .mdc-switch__track{border-radius:7px}@media screen and (forced-colors:active),(-ms-high-contrast:active){#cookiescript_injected .mdc-switch:disabled .mdc-switch__handle::after,#cookiescript_injected_fsd .mdc-switch:disabled .mdc-switch__handle::after{opacity:1}#cookiescript_injected .mdc-switch.mdc-switch--selected:disabled .mdc-switch__icons,#cookiescript_injected_fsd .mdc-switch.mdc-switch--selected:disabled .mdc-switch__icons{opacity:1}#cookiescript_injected .mdc-switch.mdc-switch--unselected:disabled .mdc-switch__icons,#cookiescript_injected_fsd .mdc-switch.mdc-switch--unselected:disabled .mdc-switch__icons{opacity:1}#cookiescript_injected .mdc-switch:disabled .mdc-switch__track,#cookiescript_injected_fsd .mdc-switch:disabled .mdc-switch__track{opacity:1}}\r\n/*End Toggle*/\r\n\r\n#cookiescript_injected {\r\nbottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    position: fixed;\r\n    padding: 15px 50px 15px 50px;\r\n    width: 100%;\r\n    text-align: left;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-around;\r\n    margin: 0;\r\n    max-height: 85%;\r\n    overflow-y: auto;\r\n    align-items: center;\r\n}\r\n#cookiescript_toppart,#cookiescript_bottompart {\r\n\twidth: 100%;\r\n}\r\n#cookiescript_toppart{\r\n\tdisplay: flex;\r\n\tflex-direction: row;\r\n\tjustify-content: space-between;\r\n    margin: 0;\r\n}\r\n#cookiescript_rightpart {\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n\tmin-width: 25%;\r\n}\r\n#cookiescript_copyright {\r\n    text-align: left;\r\n    line-height: 1;\r\n    margin:4px 0 0 0;\r\n}\r\n\r\n#cookiescript_buttons {\r\n    flex-wrap: nowrap;\r\n    justify-content: center;\r\n    margin: 0;\r\n    font-weight: 700;\r\n    width:100%;\r\n\tflex-direction: column;\r\n}\r\n\r\n#cookiescript_manage_wrap {\r\n    margin: 3px 0 10px 0;\r\n\ttext-align: left;\r\n}\r\n#cookiescript_header {\r\n    margin: 0 0 10px 0;\r\n    text-align: left;\r\n    padding: 14px 0 0 0;\r\n}\r\n#cookiescript_checkboxs {\r\n    margin: 0 0 0 -11px;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n}\r\n.cookiescript_checkbox_label{\r\n    padding: 0;\r\n    margin: 0 10px 0 -2px;\r\n}\r\n.cookiescript_checkbox {\r\n    margin: 0;\r\n}\r\n#cookiescript_accept, #cookiescript_reject, #cookiescript_save {\r\n    margin: 5px 7px;\r\n    flex-shrink: 1;\r\n    padding: 0 17px;\r\n}\r\n#cookiescript_description{\r\n    text-align: left;\r\n    font-size: 12px;\r\n    margin: 0;\r\n}\r\n#cookiescript_readmore{\r\n\tfont-size: 12px;\r\n}\r\n#cookiescript_leftpart {\r\n    display: flex;\r\n    flex-direction: column;\r\n    flex-wrap: nowrap;\r\n    justify-content: center;\r\n    max-width: 65%;\r\n}\r\n\r\n#cookiescript_injected.hascookiereport #cookiescript_rightpart{\r\n\talign-items:baseline;\r\n}\r\n#cookiescript_leftpart{\r\n\t-ms-flex: 0 1 741px;\r\n}\r\n#cookiescript_rightpart, {\r\n\t-ms-flex: 0 1 285px;\r\n}\r\n#cookiescript_buttons{\r\n\t-ms-flex: 0 1 100%;\r\n}\r\n#cookiescript_cookietablewrap {\r\n    transition: height 300ms 0ms, min-height 300ms 0ms, max-height 300ms 0ms, opacity 200ms 300ms;\r\n}\r\n#cookiescript_cookietablewrap.cookiescript_hidden {\r\n    transition: height 300ms 0ms, min-height 300ms 0ms, max-height 300ms 0ms, opacity 200ms 0ms;\r\n}\r\n@media only screen and (max-width: 1024px){\r\n    #cookiescript_buttons {\r\n        flex-wrap: wrap;\r\n    }\r\n    #cookiescript_accept, #cookiescript_reject, #cookiescript_save{\r\n        max-width: 100%;\r\n    }\r\n}\r\n@media only screen and (max-width: 700px) {\r\n\t#cookiescript_injected{\r\n\t\tpadding: 15px 20px;\r\n\t}\r\n\t#cookiescript_toppart{\r\n\t\tflex-direction: column;\r\n\t}\r\n\t#cookiescript_leftpart,#cookiescript_rightpart{\r\n\t\twidth:100%;\r\n\t\tmax-width:100%;\r\n\t\tmargin: 0;\r\n\t\t-ms-flex:none;\r\n\t}\r\n\t#cookiescript_buttons {\r\n        flex-wrap: wrap;\r\n        width:100%;\r\n\t\tflex-direction: row;\r\n    }\r\n    #cookiescript_accept, #cookiescript_reject, #cookiescript_save{\r\n\t\tflex-grow: 1;\r\n    }\r\n    .hascookiereport #cookiescript_toppart{\r\n    \tmargin-bottom:10px;\r\n    }\r\n    \r\n}\r\n@media only screen and (max-width: 414px) {\r\n    #cookiescript_injected{\r\n        flex-direction: column;\r\n        width: 100%;\r\n        padding: 15px;\r\n    }\r\n    #cookiescript_rightpart{\r\n        flex-direction: column;\r\n    }\r\n\r\n    #cookiescript_buttons{\r\n        flex-wrap: wrap;\r\n    }\r\n}\r\n\r\n#cookiescript_accept, #cookiescript_reject, #cookiescript_save {\r\n\tborder-radius: 20px;\r\n}\r\n/*IE 9 fixes*/\r\n@media screen and (min-width:0\\0) and (min-resolution: .001dpcm) {\r\n\t.cookiescript_checkbox{\r\n\t\tdisplay: inline-block;\r\n\t}\r\n\t#cookiescript_buttons{\r\n\t\tmargin-top:5%;\r\n\t}\r\n\t#cookiescript_leftpart{\r\n\t\tfloat:left;\r\n\t\twidth:60%;\r\n\t}\r\n\t#cookiescript_rightpart{\r\n\t\tfloat:right;\r\n\t\twidth:38%;\r\n\t\tmargin: 0;\r\n\t}\r\n\t#cookiescript_injected{\r\n\t\tpadding: 15px 20px;\r\n\t}\r\n\t#cookiescript_accept, #cookiescript_reject, #cookiescript_save {\r\n\t\twhite-space: normal;\r\n\t}\r\n\t#cookiescript_injected {\r\n\t\tmax-height: 100%;\r\n\t}\r\n}\r\n\r\n#cookiescript_injected {\r\n    bottom: 10px;\r\n    max-width: 600px;\r\n    margin: 0 auto;\r\n    border-radius: 20px;\r\n    padding: 12px 15px;\r\n    z-index: 9999999;\r\n    box-shadow: 0px 4px 10px rgba(4, 24, 54, 0.1);\r\n}\r\n#cookiescript_leftpart {\r\n    max-width: 80%;\r\n}\r\n#cookiescript_rightpart {\r\n    min-width: 20%;\r\n}\r\n#cookiescript_manage_wrap {\r\n    margin: 0;\r\n    font-size: 10px;\r\n    line-height: 10px;\r\n}\r\nsvg#cookiescript_manageicon {\r\n    width: 12px;\r\n    height: 12px;\r\n    top: 2px;\r\n}\r\n#cookiescript_reportdate {\r\ndisplay: none;\r\n}\r\n#cookiescript_description {\r\n    font-size: 12px;\r\n    line-height: 12px;\r\n}\r\n#cookiescript_accept:hover, #cookiescript_save:hover {\r\n    background-color: #1DAC87;\r\n}\r\n#cookiescript_accept, #cookiescript_reject, #cookiescript_save {\r\n    padding: 0 7px;\r\n}\r\n@media only screen and (max-width: 700px) {\r\n#cookiescript_injected {\r\n    bottom: 0px;\r\n    max-width: 100%;\r\n    border-radius: 0px;\r\n    box-shadow: none;\r\n    padding: 12px 15px 6px;\r\n}\r\n#cookiescript_leftpart {\r\n    max-width: 100%;\r\n}\r\n#cookiescript_description {\r\n    text-align: center;\r\n    line-height: 18px;\r\n}\r\n#cookiescript_manage_wrap {\r\n   text-align: center;\r\n   margin: 8px 0;\r\n}\r\n}\n    </style>\n  ",
      yt =
        '<div id="cookiescript_injected" tabindex="0" role="alert" aria-live="assertive" data-nosnippet class="">\n  <div id="cookiescript_toppart">\n  <div id="cookiescript_leftpart">\n      <div id="cookiescript_description">\n    <span data-cs-desc-box="true" data-cs-i18n-text="{&quot;en&quot;:&quot;This website uses cookies to improve user experience. By using our website you consent to all cookies in accordance with our Cookie Policy.&quot;}" data-cs-i18n-read="This website uses cookies to improve user experience. By using our website you consent to all cookies in accordance with our Cookie Policy.">\n      This website uses cookies to improve user experience. By using our website you consent to all cookies in accordance with our Cookie Policy.    </span>\n\n    \n      \n      <a\n        id="cookiescript_readmore"\n        data-cs-i18n-text="{&quot;en&quot;:&quot;Read more&quot;}"\n        data-cs-i18n-url="{&quot;en&quot;:&quot;https:\\/\\/moralis.io\\/privacy-policy\\/&quot;}"\n        href="https://moralis.io/privacy-policy/"\n        target="_blank"\n      >\n        Read more      </a>\n\n      </div>\n\n  <div id="cookiescript_manage_wrap" tabindex="0" role="button">\n    <div id="cookiescript_manage">\n      <svg id="cookiescript_manageicon" viewBox="0 0 9.62 9.57">\n        <g id="Layer_2">\n          <g id="Layer_1-2">\n            <path class="cookiescript_gear" d="M9.46,6.06l-1.1-.78c0-.16.06-.31.06-.47a1.27,1.27,0,0,0-.06-.47L9.57,3.4l-1.15-2L7,1.93a2.74,2.74,0,0,0-.83-.47L6,0H3.61L3.35,1.46a7.14,7.14,0,0,0-.79.47L1.15,1.36,0,3.4l1.15.94c0,.16,0,.31,0,.47a1.51,1.51,0,0,0,0,.47l-1,.78A.75.75,0,0,0,0,6.17l1.15,2,1.41-.58a2.49,2.49,0,0,0,.84.47l.21,1.47H6a.53.53,0,0,1,0-.21L6.22,8.1a4,4,0,0,0,.84-.47l1.41.58,1.15-2A.75.75,0,0,0,9.46,6.06Zm-4.65.19A1.47,1.47,0,1,1,6.28,4.78,1.47,1.47,0,0,1,4.81,6.25Z"></path>\n          </g>\n        </g>\n      </svg>\n      <span data-cs-show-title="cookie-script" data-cs-i18n-text="{&quot;en&quot;:&quot;Customize&quot;}">\n        Customize      </span>\n      <span style="display: none" data-cs-hide-title="cookie-script" data-cs-i18n-text="{&quot;en&quot;:&quot;Hide details&quot;}">\n        Hide details      </span>\n    </div>\n  </div>\n  </div>\n  <div id="cookiescript_rightpart">\n      <div id="cookiescript_buttons">\n          <div id="cookiescript_save" tabindex="0" role="button" data-cs-i18n-text="{&quot;en&quot;:&quot;Save &amp; Close&quot;}">\n        Save & Close      </div>\n              <div id="cookiescript_accept" tabindex="0" role="button" data-cs-i18n-text="{&quot;en&quot;:&quot;Accept all&quot;}">\n        Accept all      </div>\n          </div>\n  </div>\n</div>\n<div id="cookiescript_bottompart">\n\t\t<div class="cookiescript_hidden" id="cookiescript_cookietablewrap">\n\t\t  <div id="cookiescript_checkboxs">\n          \n            <div class="cookiescript_checkbox">\n        <div class="mdc-checkbox">\n          <input\n            id="cookiescript_category_strict"\n            data-cookiescript="checkbox-input"\n            type="checkbox"\n            class="mdc-checkbox__native-control cookiescript_checkbox_input"\n            value="strict"\n            disabled checked          />\n          <div class="mdc-checkbox__background">\n            <svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">\n              <path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>\n            </svg>\n          </div>\n        </div>\n        <label class="cookiescript_checkbox_label" for="cookiescript_category_strict">\n          <span\n            class="cookiescript_checkbox_text"\n            data-cs-i18n-text="{&quot;en&quot;:&quot;Strictly necessary&quot;}"\n          >\n            Strictly necessary          </span>\n        </label>\n      </div>\n\n          \n            <div class="cookiescript_checkbox">\n        <div class="mdc-checkbox">\n          <input\n            id="cookiescript_category_performance"\n            data-cookiescript="checkbox-input"\n            type="checkbox"\n            class="mdc-checkbox__native-control cookiescript_checkbox_input"\n            value="performance"\n                      />\n          <div class="mdc-checkbox__background">\n            <svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">\n              <path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>\n            </svg>\n          </div>\n        </div>\n        <label class="cookiescript_checkbox_label" for="cookiescript_category_performance">\n          <span\n            class="cookiescript_checkbox_text"\n            data-cs-i18n-text="{&quot;en&quot;:&quot;Performance&quot;}"\n          >\n            Performance          </span>\n        </label>\n      </div>\n\n          \n            <div class="cookiescript_checkbox">\n        <div class="mdc-checkbox">\n          <input\n            id="cookiescript_category_targeting"\n            data-cookiescript="checkbox-input"\n            type="checkbox"\n            class="mdc-checkbox__native-control cookiescript_checkbox_input"\n            value="targeting"\n                      />\n          <div class="mdc-checkbox__background">\n            <svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">\n              <path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>\n            </svg>\n          </div>\n        </div>\n        <label class="cookiescript_checkbox_label" for="cookiescript_category_targeting">\n          <span\n            class="cookiescript_checkbox_text"\n            data-cs-i18n-text="{&quot;en&quot;:&quot;Targeting&quot;}"\n          >\n            Targeting          </span>\n        </label>\n      </div>\n\n          \n            <div class="cookiescript_checkbox">\n        <div class="mdc-checkbox">\n          <input\n            id="cookiescript_category_functionality"\n            data-cookiescript="checkbox-input"\n            type="checkbox"\n            class="mdc-checkbox__native-control cookiescript_checkbox_input"\n            value="functionality"\n                      />\n          <div class="mdc-checkbox__background">\n            <svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">\n              <path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>\n            </svg>\n          </div>\n        </div>\n        <label class="cookiescript_checkbox_label" for="cookiescript_category_functionality">\n          <span\n            class="cookiescript_checkbox_text"\n            data-cs-i18n-text="{&quot;en&quot;:&quot;Functionality&quot;}"\n          >\n            Functionality          </span>\n        </label>\n      </div>\n\n          \n            <div class="cookiescript_checkbox">\n        <div class="mdc-checkbox">\n          <input\n            id="cookiescript_category_unclassified"\n            data-cookiescript="checkbox-input"\n            type="checkbox"\n            class="mdc-checkbox__native-control cookiescript_checkbox_input"\n            value="unclassified"\n                      />\n          <div class="mdc-checkbox__background">\n            <svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">\n              <path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>\n            </svg>\n          </div>\n        </div>\n        <label class="cookiescript_checkbox_label" for="cookiescript_category_unclassified">\n          <span\n            class="cookiescript_checkbox_text"\n            data-cs-i18n-text="{&quot;en&quot;:&quot;Unclassified&quot;}"\n          >\n            Unclassified          </span>\n        </label>\n      </div>\n\n      </div>\n\n    <div id="cookiescript_maintabs" data-cs-maintabs="cookiescript">\n      <div id="cookiescript_declaration" class="cookiescript_active" data-cs-maintab="declaration" data-cs-i18n-text="{&quot;en&quot;:&quot;Cookie declaration&quot;}">\n        Cookie declaration      </div>\n      <div id="cookiescript_aboutcookies" data-cs-maintab="aboutcookies" data-cs-i18n-text="{&quot;en&quot;:&quot;About cookies&quot;}">\n        About cookies      </div>\n          </div>\n    <div id="cookiescript_tabscontent">\n      <div id="cookiescript_declarationwrap" data-cs-maintab-content="declaration">\n        <div id="cookiescript_categories" data-cs-tabs="cookiescript">\n                      <div\n              class="cookiescript_category_strict  cookiescript_active"\n              data-cs-tab="strict"\n              data-cs-i18n-text="{&quot;en&quot;:&quot;Strictly necessary&quot;}"\n            >\n              Strictly necessary            </div>\n                      <div\n              class="cookiescript_category_performance  "\n              data-cs-tab="performance"\n              data-cs-i18n-text="{&quot;en&quot;:&quot;Performance&quot;}"\n            >\n              Performance            </div>\n                      <div\n              class="cookiescript_category_targeting  "\n              data-cs-tab="targeting"\n              data-cs-i18n-text="{&quot;en&quot;:&quot;Targeting&quot;}"\n            >\n              Targeting            </div>\n                      <div\n              class="cookiescript_category_functionality  "\n              data-cs-tab="functionality"\n              data-cs-i18n-text="{&quot;en&quot;:&quot;Functionality&quot;}"\n            >\n              Functionality            </div>\n                      <div\n              class="cookiescript_category_unclassified  "\n              data-cs-tab="unclassified"\n              data-cs-i18n-text="{&quot;en&quot;:&quot;Unclassified&quot;}"\n            >\n              Unclassified            </div>\n                  </div>\n        <div id="cookiescript_reportwrap" tabindex="0">\n                                  <div\n              class="cookiescript_report_strict "\n              data-cs-tab-content="strict"\n            >\n              <div class="cookiescript_category_description" data-cs-i18n-text="{&quot;en&quot;:&quot;Strictly necessary cookies allow core website functionality such as user login and account management. The website cannot be used properly without strictly necessary cookies.&quot;}">\n                Strictly necessary cookies allow core website functionality such as user login and account management. The website cannot be used properly without strictly necessary cookies.              </div>\n              <div class="cookiescript_tablewrap">\n                <table class="cookiescript_fullreport" data-cs-table-report="cookiescript">\n                    <caption style="display: none;">Cookie report</caption>\n                  <thead>\n                  <tr>\n                    <th scope = "col" data-cs-i18n-text="{&quot;en&quot;:&quot;Name&quot;}">\n                      Name                    </th>\n                    <th scope = "col" data-cs-i18n-text="{&quot;en&quot;:&quot;Provider \\/ Domain&quot;}">\n                      Provider / Domain                    </th>\n                    <th scope = "col" data-cs-i18n-text="{&quot;en&quot;:&quot;Expiration&quot;}">\n                      Expiration                    </th>\n                    <th scope = "col" data-cs-i18n-text="{&quot;en&quot;:&quot;Description&quot;}">\n                      Description                    </th>\n                  </tr>\n                  </thead>\n                  <tbody>\n                                      <tr>\n                      <td>__cf_bm</td>\n                      <td>\n                                                  <div class="cookiescript_vendor_name">\n                            <a target=\'_blank\' rel=\'nofollow\' href=\'https://www.cloudflare.com/privacypolicy\'>Cloudflare Inc.</a>                          </div>\n                                                .discord.com                      </td>\n                      <td data-cs-i18n-text="{&quot;en&quot;:&quot;29 minutes&quot;}">\n                        29 minutes                      </td>\n                      <td data-cs-i18n-text="{&quot;en&quot;:&quot;This cookie is used to distinguish between humans and bots. This is beneficial for the website, in order to make valid reports on the use of their website.&quot;}">\n                        This cookie is used to distinguish between humans and bots. This is beneficial for the website, in order to make valid reports on the use of their website.                      </td>\n                    </tr>\n                                      <tr>\n                      <td>__cfruid</td>\n                      <td>\n                                                  <div class="cookiescript_vendor_name">\n                            <a target=\'_blank\' rel=\'nofollow\' href=\'https://www.cloudflare.com/privacypolicy\'>Cloudflare Inc.</a>                          </div>\n                                                .codepen.io                      </td>\n                      <td data-cs-i18n-text="{&quot;en&quot;:&quot;Session&quot;}">\n                        Session                      </td>\n                      <td data-cs-i18n-text="{&quot;en&quot;:&quot;Cookie associated with sites using CloudFlare, used to identify trusted web traffic.&quot;}">\n                        Cookie associated with sites using CloudFlare, used to identify trusted web traffic.                      </td>\n                    </tr>\n                                      <tr>\n                      <td>CookieScriptConsent</td>\n                      <td>\n                                                  <div class="cookiescript_vendor_name">\n                            <a target=\'_blank\' rel=\'nofollow\' href=\'https://cookie-script.com/privacy-policy.html\'>CookieScript</a>                          </div>\n                                                .moralis.io                      </td>\n                      <td data-cs-i18n-text="{&quot;en&quot;:&quot;11 months 19 days&quot;}">\n                        11 months 19 days                      </td>\n                      <td data-cs-i18n-text="{&quot;en&quot;:&quot;This cookie is used by Cookie-Script.com service to remember visitor cookie consent preferences. It is necessary for Cookie-Script.com cookie banner to work properly.&quot;}">\n                        This cookie is used by Cookie-Script.com service to remember visitor cookie consent preferences. It is necessary for Cookie-Script.com cookie banner to work properly.                      </td>\n                    </tr>\n                                      <tr>\n                      <td>__cfruid</td>\n                      <td>\n                                                  <div class="cookiescript_vendor_name">\n                            <a target=\'_blank\' rel=\'nofollow\' href=\'https://www.cloudflare.com/privacypolicy\'>Cloudflare Inc.</a>                          </div>\n                                                .moralis.zendesk.com                      </td>\n                      <td data-cs-i18n-text="{&quot;en&quot;:&quot;Session&quot;}">\n                        Session                      </td>\n                      <td data-cs-i18n-text="{&quot;en&quot;:&quot;Cookie associated with sites using CloudFlare, used to identify trusted web traffic.&quot;}">\n                        Cookie associated with sites using CloudFlare, used to identify trusted web traffic.                      </td>\n                    </tr>\n                                      <tr>\n                      <td>_hjAbsoluteSessionInProgress</td>\n                      <td>\n                                                  <div class="cookiescript_vendor_name">\n                            <a target=\'_blank\' rel=\'nofollow\' href=\'https://www.hotjar.com/legal/policies/privacy\'>Hotjar Ltd</a>                          </div>\n                                                .moralis.io                      </td>\n                      <td data-cs-i18n-text="{&quot;en&quot;:&quot;30 minutes&quot;}">\n                        30 minutes                      </td>\n                      <td data-cs-i18n-text="{&quot;en&quot;:&quot;The cookie is set so Hotjar can track the beginning of the user\'s journey for a total session count. It does not contain any identifiable information.&quot;}">\n                        The cookie is set so Hotjar can track the beginning of the user\'s journey for a total session count. It does not contain any identifiable information.                      </td>\n                    </tr>\n                                      <tr>\n                      <td>_hjIncludedInSessionSample</td>\n                      <td>\n                                                  <div class="cookiescript_vendor_name">\n                            <a target=\'_blank\' rel=\'nofollow\' href=\'https://www.hotjar.com/legal/policies/privacy\'>Hotjar Ltd</a>                          </div>\n                                                moralis.io                      </td>\n                      <td data-cs-i18n-text="{&quot;en&quot;:&quot;2 minutes&quot;}">\n                        2 minutes                      </td>\n                      <td data-cs-i18n-text="{&quot;en&quot;:&quot;This cookie is set to let Hotjar know whether that visitor is included in the data sampling defined by your site\'s daily session limit&quot;}">\n                        This cookie is set to let Hotjar know whether that visitor is included in the data sampling defined by your site\'s daily session limit                      </td>\n                    </tr>\n                                      <tr>\n                      <td>__cf_bm</td>\n                      <td>\n                                                  <div class="cookiescript_vendor_name">\n                            <a target=\'_blank\' rel=\'nofollow\' href=\'https://www.cloudflare.com/privacypolicy\'>Cloudflare Inc.</a>                          </div>\n                                                .codepen.io                      </td>\n                      <td data-cs-i18n-text="{&quot;en&quot;:&quot;30 minutes&quot;}">\n                        30 minutes                      </td>\n                      <td data-cs-i18n-text="{&quot;en&quot;:&quot;This cookie is used to distinguish between humans and bots. This is beneficial for the website, in order to make valid reports on the use of their website.&quot;}">\n                        This cookie is used to distinguish between humans and bots. This is beneficial for the website, in order to make valid reports on the use of their website.                      </td>\n                    </tr>\n                                      <tr>\n                      <td>__cfruid</td>\n                      <td>\n                                                  <div class="cookiescript_vendor_name">\n                            <a target=\'_blank\' rel=\'nofollow\' href=\'https://www.cloudflare.com/privacypolicy\'>Cloudflare Inc.</a>                          </div>\n                                                .discord.com                      </td>\n                      <td data-cs-i18n-text="{&quot;en&quot;:&quot;Session&quot;}">\n                        Session                      </td>\n                      <td data-cs-i18n-text="{&quot;en&quot;:&quot;Cookie associated with sites using CloudFlare, used to identify trusted web traffic.&quot;}">\n                        Cookie associated with sites using CloudFlare, used to identify trusted web traffic.                      </td>\n                    </tr>\n                                      <tr>\n                      <td>__cf_bm</td>\n                      <td>\n                                                  <div class="cookiescript_vendor_name">\n                            <a target=\'_blank\' rel=\'nofollow\' href=\'https://www.cloudflare.com/privacypolicy\'>Cloudflare Inc.</a>                          </div>\n                                                .typeform.com                      </td>\n                      <td data-cs-i18n-text="{&quot;en&quot;:&quot;30 minutes&quot;}">\n                        30 minutes                      </td>\n                      <td data-cs-i18n-text="{&quot;en&quot;:&quot;This cookie is used to distinguish between humans and bots. This is beneficial for the website, in order to make valid reports on the use of their website.&quot;}">\n                        This cookie is used to distinguish between humans and bots. This is beneficial for the website, in order to make valid reports on the use of their website.                      </td>\n                    </tr>\n                                      <tr>\n                      <td>_hjFirstSeen</td>\n                      <td>\n                                                  <div class="cookiescript_vendor_name">\n                            <a target=\'_blank\' rel=\'nofollow\' href=\'https://www.hotjar.com/legal/policies/privacy\'>Hotjar Ltd</a>                          </div>\n                                                .moralis.io                      </td>\n                      <td data-cs-i18n-text="{&quot;en&quot;:&quot;30 minutes&quot;}">\n                        30 minutes                      </td>\n                      <td data-cs-i18n-text="{&quot;en&quot;:&quot;The cookie is set so Hotjar can track the beginning of the user\'s journey for a total session count. It does not contain any identifiable information.&quot;}">\n                        The cookie is set so Hotjar can track the beginning of the user\'s journey for a total session count. It does not contain any identifiable information.                      </td>\n                    </tr>\n                                      <tr>\n                      <td>_hjIncludedInPageviewSample</td>\n                      <td>\n                                                  <div class="cookiescript_vendor_name">\n                            <a target=\'_blank\' rel=\'nofollow\' href=\'https://www.hotjar.com/legal/policies/privacy\'>Hotjar Ltd</a>                          </div>\n                                                moralis.io                      </td>\n                      <td data-cs-i18n-text="{&quot;en&quot;:&quot;2 minutes&quot;}">\n                        2 minutes                      </td>\n                      <td data-cs-i18n-text="{&quot;en&quot;:&quot;This cookie is set to let Hotjar know whether that visitor is included in the data sampling defined by your site\'s pageview limit.&quot;}">\n                        This cookie is set to let Hotjar know whether that visitor is included in the data sampling defined by your site\'s pageview limit.                      </td>\n                    </tr>\n                                    </tbody>\n                </table>\n              </div>\n            </div>\n                                  <div\n              class="cookiescript_report_performance cookiescript_hidden"\n              data-cs-tab-content="performance"\n            >\n              <div class="cookiescript_category_description" data-cs-i18n-text="{&quot;en&quot;:&quot;Performance cookies are used to see how visitors use the website, eg. analytics cookies. Those cookies cannot be used to directly identify a certain visitor.&quot;}">\n                Performance cookies are used to see how visitors use the website, eg. analytics cookies. Those cookies cannot be used to directly identify a certain visitor.              </div>\n              <div class="cookiescript_tablewrap">\n                <table class="cookiescript_fullreport" data-cs-table-report="cookiescript">\n                    <caption style="display: none;">Cookie report</caption>\n                  <thead>\n                  <tr>\n                    <th scope = "col" data-cs-i18n-text="{&quot;en&quot;:&quot;Name&quot;}">\n                      Name                    </th>\n                    <th scope = "col" data-cs-i18n-text="{&quot;en&quot;:&quot;Provider \\/ Domain&quot;}">\n                      Provider / Domain                    </th>\n                    <th scope = "col" data-cs-i18n-text="{&quot;en&quot;:&quot;Expiration&quot;}">\n                      Expiration                    </th>\n                    <th scope = "col" data-cs-i18n-text="{&quot;en&quot;:&quot;Description&quot;}">\n                      Description                    </th>\n                  </tr>\n                  </thead>\n                  <tbody>\n                                      <tr>\n                      <td>_ga</td>\n                      <td>\n                                                  <div class="cookiescript_vendor_name">\n                            <a target=\'_blank\' rel=\'nofollow\' href=\'https://policies.google.com/privacy\'>Google LLC</a>                          </div>\n                                                .moralis.io                      </td>\n                      <td data-cs-i18n-text="{&quot;en&quot;:&quot;1 year 12 months&quot;}">\n                        1 year 12 months                      </td>\n                      <td data-cs-i18n-text="{&quot;en&quot;:&quot;This cookie name is associated with Google Universal Analytics - which is a significant update to Google\'s more commonly used analytics service. This cookie is used to distinguish unique users by assigning a randomly generated number as a client identifier. It is included in each page request in a site and used to calculate visitor, session and campaign data for the sites analytics reports. &quot;}">\n                        This cookie name is associated with Google Universal Analytics - which is a significant update to Google\'s more commonly used analytics service. This cookie is used to distinguish unique users by assigning a randomly generated number as a client identifier. It is included in each page request in a site and used to calculate visitor, session and campaign data for the sites analytics reports.                       </td>\n                    </tr>\n                                    </tbody>\n                </table>\n              </div>\n            </div>\n                                  <div\n              class="cookiescript_report_targeting cookiescript_hidden"\n              data-cs-tab-content="targeting"\n            >\n              <div class="cookiescript_category_description" data-cs-i18n-text="{&quot;en&quot;:&quot;Targeting cookies are used to identify visitors between different websites, eg. content partners, banner networks. Those cookies may be used by companies to build a profile of visitor interests or show relevant ads on other websites.&quot;}">\n                Targeting cookies are used to identify visitors between different websites, eg. content partners, banner networks. Those cookies may be used by companies to build a profile of visitor interests or show relevant ads on other websites.              </div>\n              <div class="cookiescript_tablewrap">\n                <table class="cookiescript_fullreport" data-cs-table-report="cookiescript">\n                    <caption style="display: none;">Cookie report</caption>\n                  <thead>\n                  <tr>\n                    <th scope = "col" data-cs-i18n-text="{&quot;en&quot;:&quot;Name&quot;}">\n                      Name                    </th>\n                    <th scope = "col" data-cs-i18n-text="{&quot;en&quot;:&quot;Provider \\/ Domain&quot;}">\n                      Provider / Domain                    </th>\n                    <th scope = "col" data-cs-i18n-text="{&quot;en&quot;:&quot;Expiration&quot;}">\n                      Expiration                    </th>\n                    <th scope = "col" data-cs-i18n-text="{&quot;en&quot;:&quot;Description&quot;}">\n                      Description                    </th>\n                  </tr>\n                  </thead>\n                  <tbody>\n                                      <tr>\n                      <td>mp_[abcdef0123456789]{32}_mixpanel</td>\n                      <td>\n                                                .moralis                      </td>\n                      <td data-cs-i18n-text="{&quot;en&quot;:&quot;1 year&quot;}">\n                        1 year                      </td>\n                      <td data-cs-i18n-text="{&quot;en&quot;:&quot;This cookie is used by Mixpanel to track user behavior on our website in order so we can improve our services accordingly. &quot;}">\n                        This cookie is used by Mixpanel to track user behavior on our website in order so we can improve our services accordingly.                       </td>\n                    </tr>\n                                      <tr>\n                      <td>_ga_[ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz]{10}</td>\n                      <td>\n                                                .moralis.io                      </td>\n                      <td data-cs-i18n-text="{&quot;en&quot;:&quot;2 years&quot;}">\n                        2 years                      </td>\n                      <td data-cs-i18n-text="{&quot;en&quot;:&quot;This cookie name is associated with Google Universal Analytics. This cookie is used to distinguish unique users by assigning a randomly generated number as a client identifier. It is included in each page request in a site and used to calculate visitor, session and campaign data for the sites analytics reports. &quot;}">\n                        This cookie name is associated with Google Universal Analytics. This cookie is used to distinguish unique users by assigning a randomly generated number as a client identifier. It is included in each page request in a site and used to calculate visitor, session and campaign data for the sites analytics reports.                       </td>\n                    </tr>\n                                      <tr>\n                      <td>ajs_group_id</td>\n                      <td>\n                                                  <div class="cookiescript_vendor_name">\n                            <a target=\'_blank\' rel=\'nofollow\' href=\'https://segment.com/legal/privacy/\'>Segment.io Inc.</a>                          </div>\n                                                .moralis.io                      </td>\n                      <td data-cs-i18n-text="{&quot;en&quot;:&quot;6 months&quot;}">\n                        6 months                      </td>\n                      <td data-cs-i18n-text="{&quot;en&quot;:&quot;Group id if you are logged in. This is used to group visits by different website users.&quot;}">\n                        Group id if you are logged in. This is used to group visits by different website users.                      </td>\n                    </tr>\n                                      <tr>\n                      <td>ajs_user_id</td>\n                      <td>\n                                                  <div class="cookiescript_vendor_name">\n                            <a target=\'_blank\' rel=\'nofollow\' href=\'https://segment.com/legal/privacy/\'>Segment.io Inc.</a>                          </div>\n                                                .moralis.io                      </td>\n                      <td data-cs-i18n-text="{&quot;en&quot;:&quot;6 months&quot;}">\n                        6 months                      </td>\n                      <td data-cs-i18n-text="{&quot;en&quot;:&quot;Your user id if you are signed in as a user. This is used for usage analytics.&quot;}">\n                        Your user id if you are signed in as a user. This is used for usage analytics.                      </td>\n                    </tr>\n                                      <tr>\n                      <td>YSC</td>\n                      <td>\n                                                  <div class="cookiescript_vendor_name">\n                            <a target=\'_blank\' rel=\'nofollow\' href=\'https://policies.google.com/privacy\'>Google LLC</a>                          </div>\n                                                .youtube.com                      </td>\n                      <td data-cs-i18n-text="{&quot;en&quot;:&quot;Session&quot;}">\n                        Session                      </td>\n                      <td data-cs-i18n-text="{&quot;en&quot;:&quot;This cookie is set by YouTube to track views of embedded videos.&quot;}">\n                        This cookie is set by YouTube to track views of embedded videos.                      </td>\n                    </tr>\n                                      <tr>\n                      <td>_gcl_au</td>\n                      <td>\n                                                  <div class="cookiescript_vendor_name">\n                            <a target=\'_blank\' rel=\'nofollow\' href=\'https://policies.google.com/privacy\'>Google LLC</a>                          </div>\n                                                .moralis.io                      </td>\n                      <td data-cs-i18n-text="{&quot;en&quot;:&quot;2 months 29 days&quot;}">\n                        2 months 29 days                      </td>\n                      <td data-cs-i18n-text="{&quot;en&quot;:&quot;Used by Google AdSense for experimenting with advertisement efficiency across websites using their services&quot;}">\n                        Used by Google AdSense for experimenting with advertisement efficiency across websites using their services                      </td>\n                    </tr>\n                                      <tr>\n                      <td>ajs_anonymous_id</td>\n                      <td>\n                                                  <div class="cookiescript_vendor_name">\n                            <a target=\'_blank\' rel=\'nofollow\' href=\'https://segment.com/legal/privacy/\'>Segment.io Inc.</a>                          </div>\n                                                .moralis.io                      </td>\n                      <td data-cs-i18n-text="{&quot;en&quot;:&quot;12 months 4 days&quot;}">\n                        12 months 4 days                      </td>\n                      <td data-cs-i18n-text="{&quot;en&quot;:&quot;Random generated id for anonymous visitors. Used to count different users.&quot;}">\n                        Random generated id for anonymous visitors. Used to count different users.                      </td>\n                    </tr>\n                                      <tr>\n                      <td>_fbp</td>\n                      <td>\n                                                  <div class="cookiescript_vendor_name">\n                            <a target=\'_blank\' rel=\'nofollow\' href=\'https://www.facebook.com/policy.php\'>Meta Platform Inc.</a>                          </div>\n                                                .moralis.io                      </td>\n                      <td data-cs-i18n-text="{&quot;en&quot;:&quot;2 months 29 days&quot;}">\n                        2 months 29 days                      </td>\n                      <td data-cs-i18n-text="{&quot;en&quot;:&quot;Used by Meta to deliver a series of advertisement products such as real time bidding from third party advertisers&quot;}">\n                        Used by Meta to deliver a series of advertisement products such as real time bidding from third party advertisers                      </td>\n                    </tr>\n                                      <tr>\n                      <td>IDE</td>\n                      <td>\n                                                  <div class="cookiescript_vendor_name">\n                            <a target=\'_blank\' rel=\'nofollow\' href=\'https://policies.google.com/privacy\'>Google LLC</a>                          </div>\n                                                .doubleclick.net                      </td>\n                      <td data-cs-i18n-text="{&quot;en&quot;:&quot;1 year&quot;}">\n                        1 year                      </td>\n                      <td data-cs-i18n-text="{&quot;en&quot;:&quot;This cookie is set by Doubleclick and carries out information about how the end user uses the website and any advertising that the end user may have seen before visiting the said website.&quot;}">\n                        This cookie is set by Doubleclick and carries out information about how the end user uses the website and any advertising that the end user may have seen before visiting the said website.                      </td>\n                    </tr>\n                                      <tr>\n                      <td>VISITOR_INFO1_LIVE</td>\n                      <td>\n                                                  <div class="cookiescript_vendor_name">\n                            <a target=\'_blank\' rel=\'nofollow\' href=\'https://policies.google.com/privacy\'>Google LLC</a>                          </div>\n                                                .youtube.com                      </td>\n                      <td data-cs-i18n-text="{&quot;en&quot;:&quot;5 months 29 days&quot;}">\n                        5 months 29 days                      </td>\n                      <td data-cs-i18n-text="{&quot;en&quot;:&quot;This cookie is set by Youtube to keep track of user preferences for Youtube videos embedded in sites;it can also determine whether the website visitor is using the new or old version of the Youtube interface.&quot;}">\n                        This cookie is set by Youtube to keep track of user preferences for Youtube videos embedded in sites;it can also determine whether the website visitor is using the new or old version of the Youtube interface.                      </td>\n                    </tr>\n                                      <tr>\n                      <td>test_cookie</td>\n                      <td>\n                                                  <div class="cookiescript_vendor_name">\n                            <a target=\'_blank\' rel=\'nofollow\' href=\'https://policies.google.com/privacy\'>Google LLC</a>                          </div>\n                                                .doubleclick.net                      </td>\n                      <td data-cs-i18n-text="{&quot;en&quot;:&quot;15 minutes&quot;}">\n                        15 minutes                      </td>\n                      <td data-cs-i18n-text="{&quot;en&quot;:&quot;This cookie is set by DoubleClick (which is owned by Google) to determine if the website visitor\'s browser supports cookies.&quot;}">\n                        This cookie is set by DoubleClick (which is owned by Google) to determine if the website visitor\'s browser supports cookies.                      </td>\n                    </tr>\n                                    </tbody>\n                </table>\n              </div>\n            </div>\n                                  <div\n              class="cookiescript_report_functionality cookiescript_hidden"\n              data-cs-tab-content="functionality"\n            >\n              <div class="cookiescript_category_description" data-cs-i18n-text="{&quot;en&quot;:&quot;Functionality cookies are used to remember visitor information on the website, eg. language, timezone, enhanced content.&quot;}">\n                Functionality cookies are used to remember visitor information on the website, eg. language, timezone, enhanced content.              </div>\n              <div class="cookiescript_tablewrap">\n                <table class="cookiescript_fullreport" data-cs-table-report="cookiescript">\n                    <caption style="display: none;">Cookie report</caption>\n                  <thead>\n                  <tr>\n                    <th scope = "col" data-cs-i18n-text="{&quot;en&quot;:&quot;Name&quot;}">\n                      Name                    </th>\n                    <th scope = "col" data-cs-i18n-text="{&quot;en&quot;:&quot;Provider \\/ Domain&quot;}">\n                      Provider / Domain                    </th>\n                    <th scope = "col" data-cs-i18n-text="{&quot;en&quot;:&quot;Expiration&quot;}">\n                      Expiration                    </th>\n                    <th scope = "col" data-cs-i18n-text="{&quot;en&quot;:&quot;Description&quot;}">\n                      Description                    </th>\n                  </tr>\n                  </thead>\n                  <tbody>\n                                      <tr>\n                      <td>cp_session</td>\n                      <td>\n                                                codepen.io                      </td>\n                      <td data-cs-i18n-text="{&quot;en&quot;:&quot;1 month&quot;}">\n                        1 month                      </td>\n                      <td data-cs-i18n-text="{&quot;en&quot;:&quot;This cookie is used for Help systems found in the website.&quot;}">\n                        This cookie is used for Help systems found in the website.                      </td>\n                    </tr>\n                                    </tbody>\n                </table>\n              </div>\n            </div>\n                                  <div\n              class="cookiescript_report_unclassified cookiescript_hidden"\n              data-cs-tab-content="unclassified"\n            >\n              <div class="cookiescript_category_description" data-cs-i18n-text="{&quot;en&quot;:&quot;Unclassified cookies are cookies that do not belong to any other category or are in the process of categorization.&quot;}">\n                Unclassified cookies are cookies that do not belong to any other category or are in the process of categorization.              </div>\n              <div class="cookiescript_tablewrap">\n                <table class="cookiescript_fullreport" data-cs-table-report="cookiescript">\n                    <caption style="display: none;">Cookie report</caption>\n                  <thead>\n                  <tr>\n                    <th scope = "col" data-cs-i18n-text="{&quot;en&quot;:&quot;Name&quot;}">\n                      Name                    </th>\n                    <th scope = "col" data-cs-i18n-text="{&quot;en&quot;:&quot;Provider \\/ Domain&quot;}">\n                      Provider / Domain                    </th>\n                    <th scope = "col" data-cs-i18n-text="{&quot;en&quot;:&quot;Expiration&quot;}">\n                      Expiration                    </th>\n                    <th scope = "col" data-cs-i18n-text="{&quot;en&quot;:&quot;Description&quot;}">\n                      Description                    </th>\n                  </tr>\n                  </thead>\n                  <tbody>\n                                      <tr>\n                      <td>_hjSession_3012344</td>\n                      <td>\n                                                .moralis.io                      </td>\n                      <td data-cs-i18n-text="{&quot;en&quot;:&quot;30 minutes&quot;}">\n                        30 minutes                      </td>\n                      <td data-cs-i18n-text="{&quot;en&quot;:null}">\n                                              </td>\n                    </tr>\n                                      <tr>\n                      <td>__dcfduid</td>\n                      <td>\n                                                discord.com                      </td>\n                      <td data-cs-i18n-text="{&quot;en&quot;:&quot;4 years 12 months&quot;}">\n                        4 years 12 months                      </td>\n                      <td data-cs-i18n-text="{&quot;en&quot;:null}">\n                                              </td>\n                    </tr>\n                                      <tr>\n                      <td>_hjSessionUser_3012344</td>\n                      <td>\n                                                .moralis.io                      </td>\n                      <td data-cs-i18n-text="{&quot;en&quot;:&quot;1 year&quot;}">\n                        1 year                      </td>\n                      <td data-cs-i18n-text="{&quot;en&quot;:null}">\n                                              </td>\n                    </tr>\n                                      <tr>\n                      <td>__sdcfduid</td>\n                      <td>\n                                                discord.com                      </td>\n                      <td data-cs-i18n-text="{&quot;en&quot;:&quot;4 years 12 months&quot;}">\n                        4 years 12 months                      </td>\n                      <td data-cs-i18n-text="{&quot;en&quot;:null}">\n                                              </td>\n                    </tr>\n                                      <tr>\n                      <td>AWSALBTGCORS</td>\n                      <td>\n                                                form.typeform.com                      </td>\n                      <td data-cs-i18n-text="{&quot;en&quot;:&quot;7 days&quot;}">\n                        7 days                      </td>\n                      <td data-cs-i18n-text="{&quot;en&quot;:null}">\n                                              </td>\n                    </tr>\n                                    </tbody>\n                </table>\n              </div>\n            </div>\n                  </div>\n      </div>\n      <div id="cookiescript_aboutwrap" class="cookiescript_hidden" data-cs-maintab-content="aboutcookies">\n        <span data-cs-i18n-text="{&quot;en&quot;:&quot;Cookies are small text files that are placed on your computer by websites that you visit. Websites use cookies to help users navigate efficiently and perform certain functions. Cookies that are required for the website to operate properly are allowed to be set without your permission. All other cookies need to be approved before they can be set in the browser. \\r&lt;br&gt;\\r&lt;br&gt;You can change your consent to cookie usage at any time on our Privacy Policy page.&quot;}">\n          Cookies are small text files that are placed on your computer by websites that you visit. Websites use cookies to help users navigate efficiently and perform certain functions. Cookies that are required for the website to operate properly are allowed to be set without your permission. All other cookies need to be approved before they can be set in the browser. \r\n\r\nYou can change your consent to cookie usage at any time on our Privacy Policy page.        </span>\n        <div style="display: none;" data-cs-consent-key-box="cookie-script">\n          <span data-cs-i18n-text="{&quot;en&quot;:&quot;Cookies consent ID&quot;}">\n            Cookies consent ID          </span>:\n          <span data-cs-consent-key="cookie-script"></span>\n        </div>\n      </div>\n          </div>\n\t<div id="cookiescript_reportdate" role="contentinfo">Cookie <a id="cookiescript_reportlink" href="https://cookie-script.com/cookie-report?identifier=e116dc1c82767be6a404cd830fba8118" target="_blank">report</a> created by <a href="https://cookie-script.com" id="cookiescript_cookiescriptlink" title="CookieScript Consent Management Platform" target="_blank">CookieScript</a></div>\n\t</div>\n\t\t\n</div>\n</div>\n',
      we = "",
      Pt = "",
      l = "CookieScriptConsent",
      ge = 350,
      qt = window.location.href,
      G = "56721ba44cd3f4b0527240dceef70f8b",
      Mt = !1,
      jt = {
        targeting: [
          "mp_[abcdef0123456789]{32}_mixpanel",
          "_ga_[ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz]{10}",
          "ajs_group_id",
          "ajs_user_id",
          "YSC",
          "_gcl_au",
          "ajs_anonymous_id",
          "_fbp",
          "IDE",
          "VISITOR_INFO1_LIVE",
          "test_cookie",
        ],
        strict: [
          "__cf_bm",
          "__cfruid",
          "CookieScriptConsent",
          "__cfruid",
          "_hjAbsoluteSessionInProgress",
          "_hjIncludedInSessionSample",
          "__cf_bm",
          "__cfruid",
          "__cf_bm",
          "_hjFirstSeen",
          "_hjIncludedInPageviewSample",
        ],
        functionality: ["cp_session"],
        unclassified: [
          "_hjSession_3012344",
          "__dcfduid",
          "_hjSessionUser_3012344",
          "__sdcfduid",
          "AWSALBTGCORS",
        ],
        performance: ["_ga"],
      };
    var Bt = {
      targeting: [
        {
          name: "_ga_[ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz]{10}",
          domain: ".moralis.io",
          path: "/",
          expire: "63072000",
          same_site: null,
          session: "1",
          secure: "0",
          value: null,
        },
        {
          name: "ajs_group_id",
          domain: ".moralis.io",
          path: "/",
          expire: "15552000",
          same_site: null,
          session: "1",
          secure: "0",
          value: null,
        },
        {
          name: "ajs_user_id",
          domain: ".moralis.io",
          path: "/",
          expire: "15552000",
          same_site: null,
          session: "1",
          secure: "0",
          value: null,
        },
        {
          name: "_gcl_au",
          domain: ".moralis.io",
          path: "/",
          expire: "7775900",
          same_site: null,
          session: "0",
          secure: "0",
          value: "1.1.2040625025.1665664522",
        },
        {
          name: "ajs_anonymous_id",
          domain: ".moralis.io",
          path: "/",
          expire: "31535971",
          same_site: "Lax",
          session: "0",
          secure: "0",
          value: "8b4b9908-5103-44d5-9ddd-5174abeccc2a",
        },
        {
          name: "_fbp",
          domain: ".moralis.io",
          path: "/",
          expire: "7775971",
          same_site: null,
          session: "0",
          secure: "0",
          value: "fb.1.1665664521889.1205716502",
        },
      ],
      unclassified: [
        {
          name: "_hjSession_3012344",
          domain: ".moralis.io",
          path: "/",
          expire: "1799",
          same_site: "Lax",
          session: "0",
          secure: "1",
          value:
            "eyJpZCI6Ijg2YjE1ZWY3LWI3YTMtNDY1ZC05YTM4LTExMDQ0OWIzMTBjNSIsImNyZWF0ZWQiOjE2NjU2NjQ2NzM5MzgsImluU2FtcGxlIjpmYWxzZX0=",
        },
        {
          name: "_hjSessionUser_3012344",
          domain: ".moralis.io",
          path: "/",
          expire: "31535999",
          same_site: "Lax",
          session: "0",
          secure: "1",
          value:
            "eyJpZCI6IjdlM2E5YjA4LTBiM2UtNTE5NS1iOTZhLTc2ZTA4Y2JhYzQ3ZSIsImNyZWF0ZWQiOjE2NjU2NjQ2NzM1NjEsImV4aXN0aW5nIjpmYWxzZX0=",
        },
      ],
      strict: [
        {
          name: "_hjAbsoluteSessionInProgress",
          domain: ".moralis.io",
          path: "/",
          expire: "1799",
          same_site: "Lax",
          session: "0",
          secure: "1",
          value: "0",
        },
        {
          name: "_hjIncludedInSessionSample",
          domain: "moralis.io",
          path: "/",
          expire: "119",
          same_site: "Lax",
          session: "0",
          secure: "1",
          value: "0",
        },
        {
          name: "_hjFirstSeen",
          domain: ".moralis.io",
          path: "/",
          expire: "1799",
          same_site: "Lax",
          session: "0",
          secure: "1",
          value: "1",
        },
        {
          name: "_hjIncludedInPageviewSample",
          domain: "moralis.io",
          path: "/",
          expire: "113",
          same_site: "Lax",
          session: "0",
          secure: "1",
          value: "1",
        },
      ],
      performance: [
        {
          name: "_ga",
          domain: ".moralis.io",
          path: "/",
          expire: "63071970",
          same_site: null,
          session: "0",
          secure: "0",
          value: "GA1.1.1664970634.1665664522",
        },
      ],
    };
    var Ft = [
        "mp_[abcdef0123456789]{32}_mixpanel",
        "_ga_[ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz]{10}",
        "ajs_group_id",
        "ajs_user_id",
        "__cf_bm",
        "__cfruid",
        "cp_session",
        "CookieScriptConsent",
        "_hjSession_3012344",
        "YSC",
        "__cfruid",
        "_hjAbsoluteSessionInProgress",
        "__dcfduid",
        "_gcl_au",
        "_ga",
        "ajs_anonymous_id",
        "_hjSessionUser_3012344",
        "_hjIncludedInSessionSample",
        "__cf_bm",
        "__sdcfduid",
        "_fbp",
        "__cfruid",
        "__cf_bm",
        "IDE",
        "_hjFirstSeen",
        "_hjIncludedInPageviewSample",
        "AWSALBTGCORS",
        "VISITOR_INFO1_LIVE",
        "test_cookie",
      ],
      c = [
        "targeting",
        "strict",
        "functionality",
        "unclassified",
        "performance",
      ],
      Y = 1,
      wt = "moralis.io",
      H = "moralis.io",
      gt = [],
      vt = {};
    var X = !1,
      W = !1,
      ve = "0",
      xe = "",
      ye = null,
      qe = null,
      Z = !1,
      St = [],
      At = !1,
      v = !1,
      n = "en",
      Ct = !1,
      x = Number(0),
      je = function () {
        return !1;
      },
      E = function (e) {
        if (!X) {
          if (e) {
            m(!0, e);
          } else {
            m(!0);
          }
          if (window.gtag) {
            X = !0;
          }
        }
        if (!W) {
          if (e) {
            f(!0, e);
          } else {
            f(!0);
            if (window.fbq) {
              W = !0;
            }
          }
        }
      },
      J = function () {
        T();
        var e = x === 0 || x > 500 ? 500 : x;
        setTimeout(function () {
          T();
        }, e);
      },
      T = function () {
        var i = function (e) {
            var t = typeof e === "undefined" ? c : e;
            if (t.length === c.length) {
              p();
              E();
            } else {
              p(t);
              E(t);
            }
            for (var i = 0; i < t.length; i++) {
              s(t[i]);
            }
            y(t);
          },
          e = function () {
            y();
            p(["strict"]);
          };
        je();
        if (se()) {
          V();
          return !0;
        }
        if (F()) {
          if (re()) {
            var t = j();
            i(t);
            return !0;
          } else {
            e();
            s("strict");
            return !0;
          }
        } else {
          e();
          return !0;
        }
      },
      z = function () {
        return !1;
      },
      Se = function (e) {
        return !1;
      },
      Ae = function (e, t) {
        if (t === undefined) {
          t = {};
        }
        var r = e;
        if (e === "def_cookie_lang") {
          r = n;
        }
        var m = t["nodeScope"]
            ? t["nodeScope"].querySelectorAll("[data-cs-i18n-text]")
            : document.querySelectorAll("[data-cs-i18n-text]"),
          f = t["nodeScope"]
            ? t["nodeScope"].querySelectorAll("[data-cs-i18n-url]")
            : document.querySelectorAll("[data-cs-i18n-url]"),
          u,
          h;
        if (typeof m !== "undefined") {
          u = Array.prototype.slice.call(m);
          for (var p = 0; p < u.length; p++) {
            var a = u[p];
            try {
              var c = JSON.parse(a.getAttribute("data-cs-i18n-text"));
              if (c && c[r] && c[r].length > 0) {
                a.innerHTML = c[r];
                if (a.getAttribute("data-cs-i18n-read")) {
                  a.setAttribute("data-cs-i18n-read", c[r]);
                }
              } else if (c && c[n] && c[n].length > 0) {
                a.innerHTML = c[n];
                if (a.getAttribute("data-cs-i18n-read")) {
                  a.setAttribute("data-cs-i18n-read", c[n]);
                }
              }
            } catch (o) {}
          }
        }
        if (typeof f !== "undefined") {
          h = Array.prototype.slice.call(f);
          for (var l = 0; l < h.length; l++) {
            var d = h[l];
            try {
              var s = JSON.parse(d.getAttribute("data-cs-i18n-url"));
              if (s && s[r] && s[r].length > 0) {
                d.setAttribute("href", s[r]);
              } else if (s && s[n] && s[n].length > 0) {
                d.setAttribute("href", s[n]);
              }
            } catch (o) {}
          }
        }
        if (t["rebuildIab"] && t["rebuildIab"] === !0) {
          D();
        }
        Se(e);
        i.currentLang = r;
      },
      I = function (e) {
        i.currentLang = "en";
        return !1;
      },
      Ce = function () {
        var e = document.querySelectorAll(
          'table[data-cs-table-report="cookiescript"]'
        );
        Array.prototype.slice.call(e).forEach(function (e) {
          var c = e.querySelectorAll("thead th"),
            t = [];
          Array.prototype.slice.call(c).forEach(function (e) {
            t.push(e.innerText);
          });
          var i = e.querySelectorAll("tbody tr");
          Array.prototype.slice.call(i).forEach(function (e) {
            Array.prototype.slice.call(e.children).forEach(function (e, i) {
              e.setAttribute("label", t[i]);
            });
          });
        });
      },
      p = function (e) {
        var t =
          e && e.length > 0
            ? '[data-cookiescript="accepted"][data-cookiecategory]'
            : '[data-cookiescript="accepted"]';
        Te(t, e);
        ze(t, e);
        Ie(t, e);
        Le(t, e);
        Ne(t, e);
        De(t, e);
        Ee(e);
      },
      y = function (e) {
        var s = t.get();
        for (var i in s) {
          if (i === l || Ve(i) || Qe(i, e) || Ke(i)) {
            continue;
          }
          gt.push(i);
          vt[i] = s[i];
          t.remove(i);
          if (t.get(i) !== "undefined") {
            var r = window.location.hostname.split(".");
            while (r.length > 0 && t.get(i) !== "undefined") {
              var o = r.join("."),
                n = location.pathname.split("/"),
                c = "/";
              t.remove(i, { path: c, domain: "" });
              t.remove(i, { path: c, domain: o });
              t.remove(i, { path: c, domain: "." + o });
              while (n.length > 0 && t.get(i) !== "undefined") {
                c = n.join("/");
                t.remove(i, { path: c, domain: "" });
                t.remove(i, { path: c, domain: o });
                t.remove(i, { path: c, domain: "." + o });
                n.pop();
              }
              r.shift();
            }
          }
        }
      },
      L = function (e) {
        return !1;
      },
      V = function (e) {
        if (e === undefined) {
          e = { console: !0 };
        }
        var i = [
          "strict",
          "performance",
          "targeting",
          "functionality",
          "unclassified",
        ];
        o("action", "accept");
        var n = B(c);
        o("categories", JSON.stringify(n));
        p();
        L();
        E();
        for (var t = 0; t < i.length; t++) {
          s(i[t]);
        }
        s("all");
        if (e.console) {
          d("_forceAllow - TRUE");
        }
      },
      Ee = function (e) {
        var o = document.querySelectorAll("[data-cookienotice]");
        for (var i = 0; i < o.length; i++) {
          var c = o[i];
          if (e && e.length > 0) {
            var t = c.getAttribute("data-cookienotice");
            if (t) {
              e.forEach(function (e) {
                t = t.replace(e, "").trim();
              });
              if (t.length > 0) {
                continue;
              }
            }
          }
          c.style.display = "none";
        }
      },
      Te = function (e, t) {
        var n = document.querySelectorAll("img" + e);
        if (n) {
          for (var o = 0; o < n.length; o++) {
            var c = n[o];
            if (t && t.length > 0) {
              var i = c.getAttribute("data-cookiecategory");
              if (i) {
                t.forEach(function (e) {
                  i = i.replace(e, "").trim();
                });
                if (i.length > 0) {
                  continue;
                }
              }
            }
            c.setAttribute("src", c.getAttribute("data-src"));
            c.removeAttribute("data-cookiescript");
          }
        }
      },
      ze = function (e, t) {
        var s = !1,
          r = document.querySelectorAll('script[type="text/plain"]' + e);
        if (r) {
          for (var n = 0; n < r.length; n++) {
            var c = r[n];
            if (t && t.length > 0) {
              var o = c.getAttribute("data-cookiecategory");
              if (o) {
                t.forEach(function (e) {
                  o = o.replace(e, "").trim();
                });
                if (o.length > 0) {
                  continue;
                }
              }
            }
            if (c.getAttribute("data-reload") === "true") {
              s = !0;
            }
            var i = document.createElement("script");
            i.innerHTML = c.innerHTML;
            var a = Array.prototype.slice.call(c.attributes);
            a.forEach(function (e) {
              i.setAttribute(e.name, e.value);
            });
            i.setAttribute("type", "text/javascript");
            i.removeAttribute("data-cookiescript");
            lt(c, i);
          }
        }
        if (s) {
          nt();
        }
      },
      Ie = function (e, t) {
        var n = document.querySelectorAll("iframe" + e);
        if (n) {
          for (var o = 0; o < n.length; o++) {
            var c = n[o];
            if (t && t.length > 0) {
              var i = c.getAttribute("data-cookiecategory");
              if (i) {
                t.forEach(function (e) {
                  i = i.replace(e, "").trim();
                });
                if (i.length > 0) {
                  continue;
                }
              }
            }
            c.setAttribute("src", c.getAttribute("data-src"));
            c.removeAttribute("data-cookiescript");
          }
        }
      },
      Le = function (e, t) {
        var n = document.querySelectorAll("embed" + e);
        if (n) {
          for (var o = 0; o < n.length; o++) {
            var i = n[o];
            if (t && t.length > 0) {
              var c = i.getAttribute("data-cookiecategory");
              if (c) {
                t.forEach(function (e) {
                  c = c.replace(e, "").trim();
                });
                if (c.length > 0) {
                  continue;
                }
              }
            }
            i.setAttribute("src", i.getAttribute("data-src"));
            i.removeAttribute("data-cookiescript");
            var r = i.outerHTML;
            fe(i, r);
          }
        }
      },
      Ne = function (e, t) {
        var n = document.querySelectorAll("object" + e);
        if (n) {
          for (var o = 0; o < n.length; o++) {
            var i = n[o];
            if (t && t.length > 0) {
              var c = i.getAttribute("data-cookiecategory");
              if (c) {
                t.forEach(function (e) {
                  c = c.replace(e, "").trim();
                });
                if (c.length > 0) {
                  continue;
                }
              }
            }
            i.setAttribute("data", i.getAttribute("data-data"));
            i.removeAttribute("data-cookiescript");
            var r = i.outerHTML;
            fe(i, r);
          }
        }
      },
      De = function (e, t) {
        var n = document.querySelectorAll("link" + e);
        if (n) {
          for (var o = 0; o < n.length; o++) {
            var c = n[o];
            if (t && t.length > 0) {
              var i = c.getAttribute("data-cookiecategory");
              if (i) {
                t.forEach(function (e) {
                  i = i.replace(e, "").trim();
                });
                if (i.length > 0) {
                  continue;
                }
              }
            }
            c.setAttribute("href", c.getAttribute("data-href"));
            c.removeAttribute("data-cookiescript");
          }
        }
      },
      Q = function () {
        document.addEventListener(
          "focusin",
          function (e) {
            var t = document.getElementById("cookiescript_injected");
            if (t) {
              e.preventDefault();
              e.stopPropagation();
              t.focus();
            }
          },
          { once: !0 }
        );
      },
      Et = function (e) {
        return !1;
      },
      K = function () {
        return !1;
      },
      ee = function () {
        return !1;
      },
      Fe = function () {
        if (re()) {
          var e = j();
          de(e);
        }
      },
      N = function () {
        Be();
        var e = document.getElementById("cookiescript_injected");
        if (e) {
          setTimeout(function () {
            g(e, 200, Q);
          }, 200);
          K();
        } else {
          setTimeout(function () {
            ne();
          }, 150);
        }
      },
      k = function (e) {
        var i = document.getElementById("cookiescript_injected"),
          t = document.getElementById("cookiescript_injected_fsd");
        if (i) {
          S(i, e || 200);
          te();
        }
        if (t) {
          S(t, 200, function () {
            t.parentNode.removeChild(t);
          });
        }
        ee();
      },
      b = function () {
        return !1;
      },
      Be = function (e) {
        return !1;
      },
      Pe = function () {
        var e = document.getElementById("cookiescript_cookietablewrap");
        if (e && e.classList.contains("cookiescript_hidden")) {
          e.classList.remove("cookiescript_hidden");
        }
        var t = document.getElementById("cookiescript_injected");
        if (t) {
          t.classList.add("hascookiereport");
        }
        ie(!0);
      },
      te = function () {
        var e = document.getElementById("cookiescript_cookietablewrap");
        if (e && !e.classList.contains("cookiescript_hidden")) {
          e.classList.add("cookiescript_hidden");
        }
        var t = document.getElementById("cookiescript_injected");
        if (t) {
          t.classList.remove("hascookiereport");
        }
        ie(!1);
      },
      ie = function (e) {
        var t = document.querySelector(
            '#cookiescript_manage_wrap span[data-cs-show-title="cookie-script"]'
          ),
          i = document.querySelector(
            '#cookiescript_manage_wrap span[data-cs-hide-title="cookie-script"]'
          );
        if (t && i) {
          if (e) {
            S(t, 1);
            g(i, 1);
          } else {
            S(i, 1);
            g(t, 1);
          }
        }
      },
      ce = function (e, t, i) {
        var l = e.target || e.srcElement,
          a = l.getAttribute(t);
        if (a && a.length > 0) {
          var s = document.querySelectorAll("div[" + i + "]");
          if (s) {
            for (var r = 0; r < s.length; r++) {
              var c = s[r],
                o = c.getAttribute(i),
                d = o && o === a,
                n = document.querySelector("div[" + t + '="' + o + '"]');
              if (n) {
                n.classList.remove("cookiescript_active");
                d && n.classList.add("cookiescript_active");
              }
              c.classList.add("cookiescript_hidden");
              d && c.classList.remove("cookiescript_hidden");
            }
          }
        }
      },
      oe = function () {
        var t = document.querySelector(
            '[data-cs-consent-key-box="cookie-script"]'
          ),
          i = document.querySelector('[data-cs-consent-key="cookie-script"]');
        if (t && i) {
          var e = r("key");
          if (e && typeof e === "string" && e.length > 0) {
            i.innerText = e;
            t.style.display = "";
          }
        }
      },
      Tt = function () {
        return !1;
      },
      Me = function () {
        var t = it(),
          i = function (e) {
            e.classList.remove("mdc-switch--unselected");
            e.classList.add("mdc-switch--selected");
          },
          c = function (e) {
            e.classList.remove("mdc-switch--selected");
            e.classList.add("mdc-switch--unselected");
          };
        e(
          t,
          "click",
          function (e) {
            var t = e.currentTarget,
              o,
              r = t.getAttribute("data-cs-switch");
            if (t.classList.contains("mdc-switch--selected")) {
              c(t);
              o = !1;
            } else {
              i(t);
              o = !0;
            }
            var n = document.querySelector(
              'input[data-cookiescript="checkbox-input"][value="' + r + '"]'
            );
            if (r === "strict") {
              n.checked = !0;
            } else {
              n.checked = o;
            }
          },
          !0
        );
        var o = w();
        e(
          o,
          "change",
          function (e) {
            var o = e.currentTarget;
            t.forEach(function (e) {
              if (o.value === e.getAttribute("data-cs-switch")) {
                if (o.checked) {
                  i(e);
                } else {
                  c(e);
                }
              }
            });
          },
          !0
        );
      },
      Oe = function () {
        var t = document.getElementById("cookiescript_save"),
          c = document.getElementById("cookiescript_accept"),
          o = document.getElementById("cookiescript_reject"),
          n = document.getElementById("cookiescript_close");
        e(t, "click", function () {
          i.acceptAction();
        });
        e(t, "keydown", function (e) {
          if (e.key === " " || e.key === "Enter" || e.key === "Spacebar") {
            e.preventDefault();
            t.click();
          }
        });
        e(c, "click", function () {
          i.acceptAllAction();
        });
        e(c, "keydown", function (e) {
          if (e.key === " " || e.key === "Enter" || e.key === "Spacebar") {
            e.preventDefault();
            c.click();
          }
        });
        e(o, "click", function () {
          i.rejectAllAction();
        });
        e(o, "keydown", function (e) {
          if (e.key === " " || e.key === "Enter" || e.key === "Spacebar") {
            e.preventDefault();
            o.click();
          }
        });
        e(
          document.getElementById("cookiescript_readmore"),
          "click",
          function () {
            h("readmore", "");
          }
        );
        e(n, "click", function () {
          k();
          b();
          h("close", "");
          dt();
        });
        e(n, "keydown", function (e) {
          if (e.key === " " || e.key === "Enter" || e.key === "Spacebar") {
            e.preventDefault();
            n.click();
          }
        });
        e(
          document.querySelectorAll(
            'div[data-cs-maintabs="cookiescript"] > div'
          ),
          "click",
          function (e) {
            ce(e, "data-cs-maintab", "data-cs-maintab-content");
          },
          !0
        );
        oe();
        window.addEventListener("CookieScriptConsentKeyUpdate", oe);
      },
      Ue = function () {
        var o = w(),
          t = function () {
            var e = document.getElementById("cookiescript_accept"),
              t = document.getElementById("cookiescript_save");
            if (!e.classList.contains("cookiescript_hidden")) {
              e.classList.add("cookiescript_hidden");
              e.classList.add("cookiescript_bigger");
              t.classList.add("cookiescript_bigger");
              setTimeout(function () {
                e.style.display = "none";
                t.style.display = "inline-block";
                t.classList.remove("cookiescript_bigger");
              }, 100);
            }
          };
        for (var c = 0; c < o.length; c++) {
          var n = o[c];
          e(n, "click", t);
        }
        window.addEventListener("CookieScriptCMPClickCheckbox", t);
        var i = document.getElementById("cookiescript_manage_wrap");
        e(i, "click", function () {
          var e = document.getElementById("cookiescript_cookietablewrap");
          if (e) {
            if (e.classList.contains("cookiescript_hidden")) {
              Pe();
              if (typeof t !== "undefined" && typeof t === "function") {
                t();
              }
              if (!v) {
                D();
                v = !0;
              }
            } else {
              te();
            }
          }
        });
        e(i, "keydown", function (e) {
          if (e.key === " " || e.key === "Enter" || e.key === "Spacebar") {
            e.preventDefault();
            i.click();
          }
        });
        e(
          document.querySelectorAll('div[data-cs-tabs="cookiescript"] > div'),
          "click",
          function (e) {
            ce(e, "data-cs-tab", "data-cs-tab-content");
          },
          !0
        );
        K();
      },
      zt = function () {
        Me();
        e(
          document.querySelectorAll("[data-cs-cookies-info-control]"),
          "click",
          function (e) {
            var t = e.currentTarget,
              c = t.getAttribute("data-cs-cookies-info-control"),
              i = document.querySelector('[data-cs-cookies-info="' + c + '"]');
            if (t.classList.contains("active")) {
              i.classList.add("cookiescript_hidden");
              t.querySelector("[data-cs-cookies-open-text]").classList.remove(
                "cookiescript_hidden"
              );
              t.querySelector("[data-cs-cookies-close-text]").classList.add(
                "cookiescript_hidden"
              );
              t.classList.remove("active");
            } else {
              i.classList.remove("cookiescript_hidden");
              t.querySelector("[data-cs-cookies-open-text]").classList.add(
                "cookiescript_hidden"
              );
              t.querySelector("[data-cs-cookies-close-text]").classList.remove(
                "cookiescript_hidden"
              );
              t.classList.add("active");
            }
          },
          !0
        );
        if (!v) {
          D();
          v = !0;
        }
      },
      It = function () {
        return !1;
      },
      ne = function () {
        O(document.body, yt);
        I();
        Ce();
        var e = document.getElementById("cookiescript_injected");
        g(e, 200, Q);
        Oe();
        Ue();
        Fe();
      },
      Re = function () {
        if (we.length > 0) {
          O(document.body, we);
          var t = document.getElementById("cookiescript_badge");
          setTimeout(function () {
            I(t);
            g(t, 200);
          }, 200);
          e(t, "click", function () {
            N();
          });
          e(t, "keydown", function (e) {
            if (e.key === " " || e.key === "Enter" || e.key === "Spacebar") {
              e.preventDefault();
              t.click();
            }
          });
        }
      },
      D = function () {
        return !1;
      },
      Ye = function () {
        var e = document.querySelector('style[data-type="cookiescriptstyles"]'),
          t = document.getElementById("cookiescript_injected"),
          i = document.getElementById("cookiescript_badge");
        if (t) {
          t.parentNode.removeChild(t);
        }
        if (i) {
          i.parentNode.removeChild(i);
        }
        if (e) {
          e.parentNode.removeChild(e);
        }
        ee();
      },
      He = function () {
        var s = document.querySelectorAll(
            'iframe[data-cookiescript="accepted"]'
          ),
          c = Array.prototype.slice.call(s);
        if (c.length > 0) {
          for (var i = 0; i < c.length; i++) {
            var e = c[i];
            if (!e.getAttribute("src")) {
              var o = e.getAttribute("alt") || "",
                n = e.getAttribute("data-alt-img"),
                r = o;
              if (n) {
                r = '<img alt="' + o + '" src="' + n + '" />';
              }
              var t = e.contentWindow
                ? e.contentWindow
                : e.contentDocument.document
                ? e.contentDocument.document
                : e.contentDocument;
              t.document.open();
              t.document.write(r);
              t.document.close();
            }
          }
        }
      },
      q = function (e) {
        var t = document.getElementById("csconsentcheckbox");
        if (t) {
          t.checked = e;
        }
      },
      Ge = function () {
        var c = document.getElementById("csconsentcheckbox");
        e(c, "change", function (e) {
          var t = e.target || e.srcElement;
          if (t.checked) {
            i.acceptAllAction();
          } else {
            i.rejectAllAction();
          }
        });
        var t = document.getElementById("csconsentlink");
        e(t, "click", function () {
          N();
        });
      },
      Xe = function () {
        return !1;
      },
      Lt = function () {
        return !1;
      },
      We = function () {
        return !1;
      },
      Ze = function () {
        return !1;
      },
      Je = function () {
        return !1;
      },
      Ve = function (e) {
        var c = [];
        for (var i = 0; i < c.length; i++) {
          var t = c[i];
          if (t.regexp) {
            var o = ut(t.name);
            if (e.match(o)) {
              return !0;
            }
          } else {
            if (e === t.name) {
              return !0;
            }
          }
        }
        return !1;
      },
      Qe = function (e, t) {
        var i = ["strict"];
        if (typeof t !== "undefined") {
          i = t.slice();
          i.push("strict");
          i = u(i);
        }
        for (var o = 0; o < i.length; o++) {
          var c = jt[i[o]];
          if (c) {
            if (A(c, e) || et({ cNames: c, cookieName: e })) {
              return !0;
            }
          }
        }
        return !1;
      },
      Ke = function (e) {
        return !1;
      },
      et = function (e) {
        var n = e.cNames,
          r = e.cookieName,
          s = !!e.onlyCheckPattern,
          i = [
            { pattern: "^[a-f0-9]{32}$", name: "[abcdef0123456789]{32}" },
            {
              pattern: "^PrestaShop-[a-f0-9]{32}$",
              name: "PrestaShop-[abcdef0123456789]{32}",
            },
            {
              pattern: "^LF_session_[a-f0-9]{32}$",
              name: "LF_session_[abcdef0123456789]{32}",
            },
            {
              pattern: "^cid_[a-f0-9]{32}$",
              name: "cid_[abcdef0123456789]{32}",
            },
            {
              pattern: "^wp_woocommerce_session_[a-f0-9]{32}$",
              name: "wp_woocommerce_session_[abcdef0123456789]{32}",
            },
            {
              pattern: "^visa_1_[a-f0-9]{32}$",
              name: "visa_1_[abcdef0123456789]{32}",
            },
            {
              pattern: "^yith_wcwl_session_[a-f0-9]{32}$",
              name: "yith_wcwl_session_[abcdef0123456789]{32}",
            },
            {
              pattern: "^mp_[a-f0-9]{32}_mixpanel$",
              name: "mp_[abcdef0123456789]{32}_mixpanel",
            },
            { pattern: "^ps[a-f0-9]{24}$", name: "ps[abcdef0123456789]{24}" },
            {
              pattern:
                "^_ga_[ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz]{10}$",
              name: "_ga_[ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz]{10}",
            },
          ];
        for (var t = 0; t < i.length; t++) {
          var c = i[t]["pattern"],
            o = new RegExp(c, "i");
          if (o.test(r)) {
            if (s) {
              return !0;
            } else {
              if (A(n, i[t]["name"])) {
                return !0;
              }
            }
          }
        }
        return !1;
      },
      re = function () {
        var e = r("action");
        return Boolean(e && e === "accept");
      },
      tt = function () {
        var e = r("action"),
          t = j();
        return Boolean(e && e === "accept" && t.length === c.length);
      },
      F = function () {
        var e = r("action");
        return Boolean(e && (e === "accept" || e === "reject"));
      },
      se = function () {
        return t.get("CookieScriptScanner");
      },
      it = function () {
        var e = document.querySelectorAll("[data-cs-switch]");
        if (typeof e !== "undefined") {
          return Array.prototype.slice.call(e);
        }
        return [];
      },
      w = function () {
        var e = document.querySelectorAll(
          'input[data-cookiescript="checkbox-input"]'
        );
        if (typeof e !== "undefined") {
          return Array.prototype.slice.call(e);
        }
        return [];
      },
      B = function (e) {
        var i = [];
        for (var t = 0; t < e.length; t++) {
          if (e[t] !== "strict") {
            i.push(e[t]);
          }
        }
        return i;
      },
      ae = function (e) {
        var c = w();
        for (var i = 0; i < c.length; i++) {
          var t = c[i];
          if (t.value === "strict") {
            t.checked = !0;
          } else {
            t.checked = e;
          }
          M("change", t);
        }
      },
      de = function (e) {
        var c = w();
        for (var i = 0; i < c.length; i++) {
          var t = c[i];
          if (t.value === "strict" || A(e, t.value)) {
            t.checked = !0;
          } else {
            t.checked = !1;
          }
          M("change", t);
        }
      },
      P = function (e) {
        if (
          typeof CookieScriptReport !== "undefined" &&
          CookieScriptReport.instance
        ) {
          CookieScriptReport.instance.setStateCheckboxes(e);
        }
      },
      ct = function () {
        var i = [],
          c = w();
        for (var t = 0; t < c.length; t++) {
          var e = c[t];
          if (e.checked || e.value === "strict") {
            i.push(e.value);
          }
        }
        return u(i);
      },
      j = function () {
        var c = r("categories"),
          t = [];
        if (Y) {
          t = ["strict"];
        }
        if (c) {
          try {
            var i = JSON.parse(c);
            if (Y) {
              i.push("strict");
            }
            return u(i);
          } catch (e) {
            return t;
          }
        }
        return t;
      },
      ot = function () {
        var e = document.querySelector('span[data-cs-desc-box="true"]');
        if (e) {
          return e.getAttribute("data-cs-i18n-read");
        }
        return "";
      },
      le = function (e) {
        try {
          var i = new XMLHttpRequest();
          i.open("GET", e.url);
          i.onload = function () {
            if (i.status === 200) {
              try {
                var c = JSON.parse(i.responseText);
                e.done(c);
              } catch (t) {
                e.done(i.responseText);
              }
            } else {
              d(
                "ERROR: Request failed.  Returned status for " +
                  url +
                  " of " +
                  i.status
              );
            }
          };
          i.send();
        } catch (t) {
          d("ERROR: Yor browser not support request");
        }
      },
      o = function (e, t) {
        var c = ue();
        c[e] = t;
        try {
          var o = he(JSON.stringify(c));
          pe(o);
        } catch (i) {
          d("Error: Write " + l + "value =>" + i);
        }
      },
      pe = function (e) {
        var c = { expires: Number(ge), domain: me };
        var o = document.querySelector("script[data-cs-samesite]");
        if (o) {
          var i = o.getAttribute("data-cs-samesite");
          if (i) {
            c.sameSite = i;
            if (i === "none") {
              c.secure = !0;
            }
          }
        }
        t.set(l, e, c);
      },
      r = function (e) {
        var t = ue();
        return t[e];
      },
      ue = function () {
        var i = t.get(l, { domain: me });
        try {
          return JSON.parse(i);
        } catch (e) {
          return {};
        }
      },
      he = function (e) {
        return e;
      },
      nt = function () {
        M("DOMContentLoaded", window.document);
      },
      rt = function () {
        i.onAcceptAll();
        a("CookieScriptAcceptAll");
        if (typeof c !== "undefined" && c.length > 0) {
          for (var e = 0; e < c.length; e++) {
            s(c[e]);
          }
        } else {
          s("all");
        }
      },
      st = function (e) {
        var c = { categories: u(e) };
        i.onAccept(c);
        a("CookieScriptAccept", c);
        for (var t = 0; t < e.length; t++) {
          s(e[t]);
        }
      },
      at = function () {
        i.onReject();
        a("CookieScriptReject");
        s("strict");
      },
      dt = function () {
        i.onClose();
        a("CookieScriptClose");
      },
      s = function (e) {
        var t = "CookieScriptCategory-" + e;
        if (A(i.dispatchEventNames, t)) return;
        i.dispatchEventNames.push(t);
        i.dispatchEventNames = u(i.dispatchEventNames);
        a(t);
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({ event: t });
      },
      me = (function () {
        if (H && H.length > 0) {
          return H;
        }
        return window.location.host.replace(/^www\./, "");
      })(),
      a = function (e, t) {
        try {
          var c;
          if (typeof Event === "function") {
            c = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: t });
          } else {
            c = document.createEvent("CustomEvent");
            c.initCustomEvent(e, !0, !0, t);
          }
          window.document.dispatchEvent(c);
        } catch (i) {
          d("Warning: You browser not support dispatch event");
        }
      },
      M = function (e, t) {
        try {
          var c;
          if (typeof Event === "function") {
            c = new Event(e, { bubbles: !0, cancelable: !0 });
          } else {
            c = document.createEvent("Event");
            c.initEvent(e, !0, !0);
          }
          t.dispatchEvent(c);
        } catch (i) {
          d("Warning: You browser not support dispatch event");
        }
      },
      g = function (e, t, i) {
        var n = ke(e, "opacity"),
          r = n ? n : 1;
        e.style.opacity = 0;
        e.style.display = "";
        var o = +new Date(),
          c = function () {
            e.style.opacity = +e.style.opacity + (new Date() - o) / t;
            o = +new Date();
            if (+e.style.opacity < r) {
              (window.requestAnimationFrame && requestAnimationFrame(c)) ||
                setTimeout(c, 16);
            } else {
              e.style.opacity = "";
              if (i !== undefined) {
                i();
              }
            }
          };
        c();
      },
      S = function (e, t, i) {
        var n = ke(e, "opacity");
        e.style.opacity = n ? n : 1;
        var o = +new Date(),
          c = function () {
            e.style.opacity = +e.style.opacity - (new Date() - o) / t;
            o = +new Date();
            if (+e.style.opacity > 0) {
              (window.requestAnimationFrame && requestAnimationFrame(c)) ||
                setTimeout(c, 16);
            } else {
              e.style.display = "none";
              e.style.opacity = "";
              if (i !== undefined) {
                i();
              }
            }
          };
        c();
      },
      A = function (e, t) {
        var i = !1,
          c = e.indexOf(t);
        if (c >= 0) {
          i = !0;
        }
        return i;
      },
      lt = function (e, t) {
        e.insertAdjacentElement("afterend", t);
        e.parentNode.removeChild(e);
      },
      fe = function (e, t) {
        e.insertAdjacentHTML("afterend", t);
        e.parentNode.removeChild(e);
      },
      O = function (e, t) {
        e.insertAdjacentHTML("beforeend", t);
      },
      u = function (e) {
        var i = [];
        for (var t = 0; t < e.length; t++) {
          if (i.indexOf(e[t]) === -1 && e[t] !== "") {
            i.push(e[t]);
          }
        }
        return i;
      },
      d = function (e) {
        console &&
          ("function" == typeof console.warn
            ? console.warn(e)
            : console.log && console.log(e));
      },
      pt = function (e) {
        throw e;
      },
      e = function (e, t, i, o) {
        var n = function (e, t, i) {
          if (!e) return;
          try {
            if (e.attachEvent) {
              e["e" + t + i] = i;
              e[t + i] = function () {
                e["e" + t + i](window.event);
              };
              e.attachEvent("on" + t, e[t + i]);
            } else {
              e.addEventListener(t, i, !1);
            }
          } catch (c) {}
        };
        if (o && e && e.length > 0) {
          for (var c = 0; c < e.length; c++) {
            n(e[c], t, i);
          }
        } else {
          n(e, t, i);
        }
      },
      Nt = function (e, t, i, o) {
        var n = function (e, t, i) {
          if (!e) return;
          if (e.detachEvent) {
            e.detachEvent("on" + t, e[t + i]);
            e[t + i] = null;
          } else {
            e.removeEventListener(t, i, !1);
          }
        };
        if (o && e && e.length > 0) {
          for (var c = 0; c < e.length; c++) {
            n(e[c], t, i);
          }
        } else {
          n(e, t, i);
        }
      },
      ke = function (e, t) {
        if (typeof getComputedStyle !== "undefined") {
          return getComputedStyle(e, null).getPropertyValue(t);
        } else {
          return e.currentStyle[t];
        }
      },
      t = (function () {
        /*! js-cookie v3.0.0-rc.0 | MIT */
        function e(e) {
          for (var t = 1; t < arguments.length; t++) {
            var c = arguments[t];
            for (var i in c) {
              e[i] = c[i];
            }
          }
          return e;
        }
        var t = {
          read: function (e) {
            return e.replace(/%3B/g, ";");
          },
          write: function (e) {
            return e.replace(/;/g, "%3B");
          },
        };
        function i(c, o) {
          function n(i, n, r) {
            if (typeof document === "undefined") {
              return;
            }
            r = e({}, o, r);
            if (typeof r.expires === "number") {
              var d = new Date();
              d.setTime(d.getTime() + r.expires * 864e5);
              r.expires = d;
            }
            if (r.expires) {
              r.expires = r.expires.toUTCString();
            }
            i = t.write(i).replace(/=/g, "%3D");
            n = c.write(String(n), i);
            var a = "";
            for (var s in r) {
              if (!r[s]) {
                continue;
              }
              a += "; " + s;
              if (r[s] === !0) {
                continue;
              }
              a += "=" + r[s].split(";")[0];
            }
            return (document.cookie = i + "=" + n + a);
          }
          function r(e) {
            if (typeof document === "undefined" || (arguments.length && !e)) {
              return;
            }
            var s = document.cookie ? document.cookie.split("; ") : [],
              n = {};
            for (var o = 0; o < s.length; o++) {
              var r = s[o].split("="),
                a = r.slice(1).join("="),
                i = t.read(r[0]).replace(/%3D/g, "=");
              n[i] = c.read(a, i);
              if (e === i) {
                break;
              }
            }
            return e ? n[e] : n;
          }
          return Object.create(
            {
              set: n,
              get: r,
              remove: function (t, i) {
                n(t, "", e({}, i, { expires: -1 }));
              },
              withAttributes: function (t) {
                return i(this.converter, e({}, this.attributes, t));
              },
              withConverter: function (t) {
                return i(e({}, this.converter, t), this.attributes);
              },
            },
            {
              attributes: { value: Object.freeze(o) },
              converter: { value: Object.freeze(c) },
            }
          );
        }
        var c = window.location.protocol === "https:";
        return i(t, { path: "/", secure: c });
      })(),
      ut = function (e) {
        if (typeof e !== "string") {
          return e;
        }
        var t = e.match(/(\/?)(.+)\1([a-z]*)/i);
        if (t[3] && !/^(?!.*?(.).*?\1)[gmixXsuUAJ]+$/.test(t[3])) {
          return RegExp(e);
        }
        return new RegExp(t[2], t[3]);
      },
      Dt = function () {
        var c = "cookie-script.com/s/56721ba44cd3f4b0527240dceef70f8b.js",
          i = document.getElementsByTagName("script");
        for (var e = 0; e < i.length; e++) {
          var t = i[e].getAttribute("src");
          if (t && t.indexOf(c) >= 0) {
            return !0;
          }
        }
        pt("not allowed use of Cookie-Script");
      },
      ht = function (e, t) {
        e = e.replace(/[\[\]]/g, "\\$&");
        var c = new RegExp("[?&]" + e + "(=([^&#]*)|&|#|$)"),
          i = c.exec(t);
        if (!i) return null;
        if (!i[2]) return "";
        return decodeURIComponent(i[2].replace(/\+/g, " "));
      },
      mt = function () {
        var t = ht(l, window.location.href);
        if (t) {
          try {
            t = he(t);
            pe(t);
          } catch (e) {
            d(
              "Error: Write(_loadCookieValueFromUrlArgs) " + l + "value =>" + e
            );
          }
        }
      },
      h = function (e, t) {
        le({
          url:
            "https://consent.cookie-script.com/analytics?action=" +
            e +
            "&time=" +
            new Date().getTime() +
            "&script=" +
            G +
            "&category=" +
            t,
          done: function () {},
        });
      },
      C = function (e, t) {
        Z = !0;
        var i = ot(),
          c =
            "yes" === navigator.doNotTrack ||
            "1" === navigator.msDoNotTrack ||
            "1" === navigator.doNotTrack ||
            !1 === navigator.cookieEnabled;
        le({
          url:
            "https://consent.cookie-script.com/collect?action=" +
            e +
            "&time=" +
            new Date().getTime() +
            "&page=" +
            encodeURIComponent(qt) +
            "&dnt=" +
            c +
            "&script=" +
            G +
            "&consenttext=" +
            encodeURIComponent(i) +
            "&category=" +
            t,
          done: function (e) {
            if (e !== null && e.key) {
              o("key", e.key);
              a("CookieScriptConsentKeyUpdate");
              Z = !1;
            }
          },
        });
      },
      m = function (e, t) {
        return !1;
      },
      f = function (e, t) {
        return !1;
      },
      ft = function (e) {},
      U = function (e) {
        return !1;
      },
      kt = function () {
        return !1;
      },
      R = function () {
        return !1;
      },
      be = function () {
        bt();
      },
      bt = function () {
        var t = document.querySelector(
          'script[data-cs-restrict-domain="true"]'
        );
        if (t) {
          var e = window.location.host.replace(/^www\./, "");
          if (e !== wt) {
            V({ console: !1 });
            return;
          }
        }
        if (!se()) {
          J();
        }
        setTimeout(function () {
          mt();
          Ye();
          O(document.body, xt);
          if (tt()) {
            q(!0);
          }
          if (F()) {
            Re();
          } else {
            if (!Je()) {
              ne();
              We();
              Ze();
            }
          }
          He();
          Ge();
          Xe();
          a("CookieScriptLoaded");
          ft(F());
        }, x);
      };
    (function () {
      if (CookieScript.instance) return;
      kt();
      J();
      if (document.readyState === "complete") {
        be();
      } else {
        window.addEventListener("load", be);
      }
    })();
  };
  CookieScript.init = function () {
    if (CookieScript.instance) {
      return CookieScript.instance;
    }
    CookieScript.instance = new CookieScript();
    return CookieScript.instance;
  };
  CookieScript.init();
}
