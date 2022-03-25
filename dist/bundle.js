/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./img/HomeBanner.png */ "./src/img/HomeBanner.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./img/logo.png */ "./src/img/logo.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./img/profilePic.png */ "./src/img/profilePic.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://use.typekit.net/idd0mgr.css);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@media screen and (min-width: 736px) {\n    .navDropDownMenu {\n      display:none;\n    }\n    \n  }\n@media screen and (max-width: 735px) {\n    .nav-item,.account {\n      display:none;\n    }\n    nav{\n        flex-direction: column;\n        justify-content: center;\n    }\n    .logo{\n        display:none;\n    }\n    #container{\n        grid-template: 1fr/ 1fr 3fr;\n    }\n    .gradientBlack{\n        display: none;\n    }\n    .home{\n        align-self: center;\n    }\n    .homeMain{\n        font-size: 4vw !important;\n    }\n    .homeMainBtns{\n        display: none;\n    }\n    .homeLogo{\n        display: block;\n    }\n  }\n  @media screen and (max-width: 885px) {\n    \n\n  }\n:root{\n    --secondary-color: #201e21;\n    --primary-color: #d7b79a;\n}\n*{\n    box-sizing:border-box;\n    font-family: amboy-black, sans-serif;\n    font-weight: 400;\n    font-style: normal;\n}\nhtml,body{\n    margin: 0px;\n    padding: 0px;\n}\n#container{\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    width: 100vw;\n    height: 100vh;\n    display: grid;\n    grid-template: 1fr 5fr/1fr;\n    background-repeat:space;\n    background-size: cover;\n}\n.logo{\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    position: relative;\n    \n    top: 20px;\n    background-repeat: no-repeat;\n    background-size: contain;\n    width: 100px;\n    height: 150px;\n}\n.homeLogo{\n    display:none;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    position: relative;\n    top: 0px;\n    background-repeat: no-repeat;\n    background-size: contain;\n    width: 200px;\n    height: 250px;\n}\nnav{\n    display: flex;\n    align-content: center;\n    justify-content: space-around;\n}\nnav>div{\n    color: white;\n    display: inline-block;\n   \n}\n.account{\n    color: var(--secondary-color);\n    background-color: white;\n    width: 150px;\n    text-align: center;\n    padding: 15px;\n    align-self: center;\n    font-size: 20px;\n    position: relative;\n    transition: all 0.5s ease;\n}\n.account:hover{\n    background-color: var(--secondary-color);\n    color: white;\n}\n.nav-item{\n    color: var(--primary-color);\n    align-self: center;\n    font-size: 20px;\n    position:relative;\n    transition: all 1s ease;\n}\n\n.navDropDownMenu{\n    position:relative;\n    color: white;\n}\n.ndd{\n    color: var(--primary-color);\n    padding: 10px;\n    font-size: 36px !important;\n    transition: all 1s ease;\n}\n.ndd:hover{\n    color:white;\n}\n.ndd:hover::after{\n    width: 50px;\n    background-color: white;\n}\n.ndd::after{\n    position: absolute;\n    display: block;\n    content: '';\n    width: 30px;\n    height: 10px;\n    background-color:var(--primary-color);  \n    transition: all 1s ease;\n}\n.nav-item:hover{\n    color: white;\n}\n.nav-item::after{\n    position: absolute;\n    display: block;\n    content: '';\n    width: 30px;\n    height: 10px;\n    background-color:var(--primary-color);  \n    transition: all 1s ease;\n}\n.nav-item:hover::after{\n    width: 50px;\n    background-color: white;\n}\n.gradientBlack{\n    position: absolute;\n    background: rgb(0,0,0);\n    background: linear-gradient(180deg, rgba(0,0,0,1) 37%, rgba(247,247,247,0) 100%);\n    width: 100%;\n    height: 30vh;\n}\n.home{\n    align-self: center;\n    display: flex;\n    flex-direction: column;\n    justify-items: center;\n    align-items: center;\n\n}\n.homeMain{\n    color: var(--secondary-color);\n    background-color: white;\n    width: 50%;\n    text-align: center;\n    font-size: 4vw;\n    padding: 20px;\n}\n.homeMainBtns{\n    color: var(--primary-color);\n \n}\n.homeMainBtns p{\n    display: inline-block;\n    background-color: var(--secondary-color);\n    margin: 10px;\n    padding: 20px;\n    font-size: 20px;\n    width: auto;\n}\n.homeMainBtns p:hover{\n    background-color: var(--secondary-color);\n    color: white;\n}\n\n.menu{\n    display: flex;\n    flex-direction: column;\n    align-content: space-between;\n}\n.menuPizza>div, .menuBase>p,.menuToppings>p{\n    display: none;\n}\n.makePizza{\n    display: flex;\n    justify-content: space-evenly;\n}\n.menuMain{\n    color: white;\n    background-color: var(--primary-color);\n    width: 70%;\n    padding: 10px;\n    font-size: 3vw;\n    text-align: center;\n    margin: auto;\n}\n.makePizza > div{\n    color: white;\n    background-color: var(--secondary-color);\n    width: 20vw;\n    height: 15vh;\n}\n.makePizza > div > h3{\n    font-size: 2.5vw;\n    margin: 10px;\n}\n.makePizza > div p{\n    margin: 10px;\n}\n.makePizza > div p:hover{\n    text-shadow:\n     3px  3px 0 var(--primary-color),\n    -1px -1px 0 var(--primary-color),  \n     1px -1px 0 var(--primary-color),\n    -1px  1px 0 var(--primary-color),\n     1px  1px 0 var(--primary-color);\n}\n\n.menuPrice{\n    height:min-content !important;\n    align-self: center;\n    font-size: 4vw;\n    padding: 20px;\n    text-align: center;\n}\n.form{\n    display: grid;\n    width: 75vw;\n    margin:auto;\n    padding: 10px;\n    background-color: var(--primary-color);\n    grid-template: 1fr 3fr/1fr 1fr;\n    grid-template-areas: \n    'name       email'\n    'message    message'\n    ;\n}\n#nameInput{\n    grid-area: name;\n}\n#emailInput{\n    grid-area: email;\n}\n#messageInput{\n    width: 100%;\n    -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */\n    -moz-box-sizing: border-box;    /* Firefox, other Gecko */\n    box-sizing: border-box;   \n    grid-area: message;\n}\n.callUs,.locText{\n    color: var(--primary-color);\n    background-color: var(--secondary-color);\n    width: 75vw;\n    margin: auto;\n    padding: 20px;\n    font-size: 30px;\n    text-align: center;\n    margin-top: 20px;\n}\n.location{\n    padding: 10px;\n    width: 50vw;\n    background-color: var(--primary-color);\n    margin: auto;\n}\n\n.OurStory{\n    padding: 20px;\n    display: grid;\n    grid-template: 1fr 1fr 1fr / 1fr 1fr;\n    grid-template-areas: \n    's01    s02'\n    's01    s03'\n    's01    s04'\n    ;\n}\n.s01,.s02,.s03,.s04{\n    font-size: max(12px,1.5vw);\n    line-height: 4.5vh;\n    padding: 10px;\n    width: 30vw;\n    margin-bottom: 10px;\n\n}\n.s02,.s03,.s04{\n    color: white;\n}\n.s01{\n    background-color: var(--primary-color);\n    grid-area: s01;\n    justify-self:center;\n    align-self: center;\n}\n.s02{\n    background-color: var(--secondary-color);\n    grid-area: s02;\n    justify-self: start;\n}\n.s03{\n    background-color: var(--secondary-color);\n    grid-area: s03;\n    justify-self: right;\n}\n.s04{\n    background-color: var(--secondary-color);\n    grid-area: s04;\n}\n.accountPage{\n   display: grid; \n   grid-template: 1fr/1fr 3fr;\n   grid-template-areas: \n   'profilePic  accountDetails'\n   ;\n}\n.profilePic{\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n    width: 15vw;\n    height: 15vw;\n    justify-self: right;\n    background-repeat: no-repeat;\n    background-size: contain;\n    grid-area: profilePic;\n}\n.accountDetails{\n    color: var(--primary-color);\n    grid-area: accountDetails;\n    padding: 20px;\n    background-color: white;\n    font-size: 2vw;\n    width: 50%;\n    height: 90%;\n    justify-self: center;\n}\n.accountDetails span{\n    color: var(--secondary-color)\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AACA;IACI;MACE,YAAY;IACd;;EAEF;AACF;IACI;MACE,YAAY;IACd;IACA;QACI,sBAAsB;QACtB,uBAAuB;IAC3B;IACA;QACI,YAAY;IAChB;IACA;QACI,2BAA2B;IAC/B;IACA;QACI,aAAa;IACjB;IACA;QACI,kBAAkB;IACtB;IACA;QACI,yBAAyB;IAC7B;IACA;QACI,aAAa;IACjB;IACA;QACI,cAAc;IAClB;EACF;EACA;;;EAGA;AACF;IACI,0BAA0B;IAC1B,wBAAwB;AAC5B;AACA;IACI,qBAAqB;IACrB,oCAAoC;IACpC,gBAAgB;IAChB,kBAAkB;AACtB;AACA;IACI,WAAW;IACX,YAAY;AAChB;AACA;IACI,yDAA2C;IAC3C,YAAY;IACZ,aAAa;IACb,aAAa;IACb,0BAA0B;IAC1B,uBAAuB;IACvB,sBAAsB;AAC1B;AACA;IACI,yDAAqC;IACrC,kBAAkB;;IAElB,SAAS;IACT,4BAA4B;IAC5B,wBAAwB;IACxB,YAAY;IACZ,aAAa;AACjB;AACA;IACI,YAAY;IACZ,yDAAqC;IACrC,kBAAkB;IAClB,QAAQ;IACR,4BAA4B;IAC5B,wBAAwB;IACxB,YAAY;IACZ,aAAa;AACjB;AACA;IACI,aAAa;IACb,qBAAqB;IACrB,6BAA6B;AACjC;AACA;IACI,YAAY;IACZ,qBAAqB;;AAEzB;AACA;IACI,6BAA6B;IAC7B,uBAAuB;IACvB,YAAY;IACZ,kBAAkB;IAClB,aAAa;IACb,kBAAkB;IAClB,eAAe;IACf,kBAAkB;IAClB,yBAAyB;AAC7B;AACA;IACI,wCAAwC;IACxC,YAAY;AAChB;AACA;IACI,2BAA2B;IAC3B,kBAAkB;IAClB,eAAe;IACf,iBAAiB;IACjB,uBAAuB;AAC3B;;AAEA;IACI,iBAAiB;IACjB,YAAY;AAChB;AACA;IACI,2BAA2B;IAC3B,aAAa;IACb,0BAA0B;IAC1B,uBAAuB;AAC3B;AACA;IACI,WAAW;AACf;AACA;IACI,WAAW;IACX,uBAAuB;AAC3B;AACA;IACI,kBAAkB;IAClB,cAAc;IACd,WAAW;IACX,WAAW;IACX,YAAY;IACZ,qCAAqC;IACrC,uBAAuB;AAC3B;AACA;IACI,YAAY;AAChB;AACA;IACI,kBAAkB;IAClB,cAAc;IACd,WAAW;IACX,WAAW;IACX,YAAY;IACZ,qCAAqC;IACrC,uBAAuB;AAC3B;AACA;IACI,WAAW;IACX,uBAAuB;AAC3B;AACA;IACI,kBAAkB;IAClB,sBAAsB;IACtB,gFAAgF;IAChF,WAAW;IACX,YAAY;AAChB;AACA;IACI,kBAAkB;IAClB,aAAa;IACb,sBAAsB;IACtB,qBAAqB;IACrB,mBAAmB;;AAEvB;AACA;IACI,6BAA6B;IAC7B,uBAAuB;IACvB,UAAU;IACV,kBAAkB;IAClB,cAAc;IACd,aAAa;AACjB;AACA;IACI,2BAA2B;;AAE/B;AACA;IACI,qBAAqB;IACrB,wCAAwC;IACxC,YAAY;IACZ,aAAa;IACb,eAAe;IACf,WAAW;AACf;AACA;IACI,wCAAwC;IACxC,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,4BAA4B;AAChC;AACA;IACI,aAAa;AACjB;AACA;IACI,aAAa;IACb,6BAA6B;AACjC;AACA;IACI,YAAY;IACZ,sCAAsC;IACtC,UAAU;IACV,aAAa;IACb,cAAc;IACd,kBAAkB;IAClB,YAAY;AAChB;AACA;IACI,YAAY;IACZ,wCAAwC;IACxC,WAAW;IACX,YAAY;AAChB;AACA;IACI,gBAAgB;IAChB,YAAY;AAChB;AACA;IACI,YAAY;AAChB;AACA;IACI;;;;;oCAKgC;AACpC;;AAEA;IACI,6BAA6B;IAC7B,kBAAkB;IAClB,cAAc;IACd,aAAa;IACb,kBAAkB;AACtB;AACA;IACI,aAAa;IACb,WAAW;IACX,WAAW;IACX,aAAa;IACb,sCAAsC;IACtC,8BAA8B;IAC9B;;;IAGA;AACJ;AACA;IACI,eAAe;AACnB;AACA;IACI,gBAAgB;AACpB;AACA;IACI,WAAW;IACX,8BAA8B,EAAE,gCAAgC;IAChE,2BAA2B,KAAK,yBAAyB;IACzD,sBAAsB;IACtB,kBAAkB;AACtB;AACA;IACI,2BAA2B;IAC3B,wCAAwC;IACxC,WAAW;IACX,YAAY;IACZ,aAAa;IACb,eAAe;IACf,kBAAkB;IAClB,gBAAgB;AACpB;AACA;IACI,aAAa;IACb,WAAW;IACX,sCAAsC;IACtC,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,aAAa;IACb,oCAAoC;IACpC;;;;IAIA;AACJ;AACA;IACI,0BAA0B;IAC1B,kBAAkB;IAClB,aAAa;IACb,WAAW;IACX,mBAAmB;;AAEvB;AACA;IACI,YAAY;AAChB;AACA;IACI,sCAAsC;IACtC,cAAc;IACd,mBAAmB;IACnB,kBAAkB;AACtB;AACA;IACI,wCAAwC;IACxC,cAAc;IACd,mBAAmB;AACvB;AACA;IACI,wCAAwC;IACxC,cAAc;IACd,mBAAmB;AACvB;AACA;IACI,wCAAwC;IACxC,cAAc;AAClB;AACA;GACG,aAAa;GACb,0BAA0B;GAC1B;;GAEA;AACH;AACA;IACI,yDAA2C;IAC3C,WAAW;IACX,YAAY;IACZ,mBAAmB;IACnB,4BAA4B;IAC5B,wBAAwB;IACxB,qBAAqB;AACzB;AACA;IACI,2BAA2B;IAC3B,yBAAyB;IACzB,aAAa;IACb,uBAAuB;IACvB,cAAc;IACd,UAAU;IACV,WAAW;IACX,oBAAoB;AACxB;AACA;IACI;AACJ","sourcesContent":["@import url(\"https://use.typekit.net/idd0mgr.css\");\n@media screen and (min-width: 736px) {\n    .navDropDownMenu {\n      display:none;\n    }\n    \n  }\n@media screen and (max-width: 735px) {\n    .nav-item,.account {\n      display:none;\n    }\n    nav{\n        flex-direction: column;\n        justify-content: center;\n    }\n    .logo{\n        display:none;\n    }\n    #container{\n        grid-template: 1fr/ 1fr 3fr;\n    }\n    .gradientBlack{\n        display: none;\n    }\n    .home{\n        align-self: center;\n    }\n    .homeMain{\n        font-size: 4vw !important;\n    }\n    .homeMainBtns{\n        display: none;\n    }\n    .homeLogo{\n        display: block;\n    }\n  }\n  @media screen and (max-width: 885px) {\n    \n\n  }\n:root{\n    --secondary-color: #201e21;\n    --primary-color: #d7b79a;\n}\n*{\n    box-sizing:border-box;\n    font-family: amboy-black, sans-serif;\n    font-weight: 400;\n    font-style: normal;\n}\nhtml,body{\n    margin: 0px;\n    padding: 0px;\n}\n#container{\n    background-image: url(./img/HomeBanner.png);\n    width: 100vw;\n    height: 100vh;\n    display: grid;\n    grid-template: 1fr 5fr/1fr;\n    background-repeat:space;\n    background-size: cover;\n}\n.logo{\n    background-image: url(./img/logo.png);\n    position: relative;\n    \n    top: 20px;\n    background-repeat: no-repeat;\n    background-size: contain;\n    width: 100px;\n    height: 150px;\n}\n.homeLogo{\n    display:none;\n    background-image: url(./img/logo.png);\n    position: relative;\n    top: 0px;\n    background-repeat: no-repeat;\n    background-size: contain;\n    width: 200px;\n    height: 250px;\n}\nnav{\n    display: flex;\n    align-content: center;\n    justify-content: space-around;\n}\nnav>div{\n    color: white;\n    display: inline-block;\n   \n}\n.account{\n    color: var(--secondary-color);\n    background-color: white;\n    width: 150px;\n    text-align: center;\n    padding: 15px;\n    align-self: center;\n    font-size: 20px;\n    position: relative;\n    transition: all 0.5s ease;\n}\n.account:hover{\n    background-color: var(--secondary-color);\n    color: white;\n}\n.nav-item{\n    color: var(--primary-color);\n    align-self: center;\n    font-size: 20px;\n    position:relative;\n    transition: all 1s ease;\n}\n\n.navDropDownMenu{\n    position:relative;\n    color: white;\n}\n.ndd{\n    color: var(--primary-color);\n    padding: 10px;\n    font-size: 36px !important;\n    transition: all 1s ease;\n}\n.ndd:hover{\n    color:white;\n}\n.ndd:hover::after{\n    width: 50px;\n    background-color: white;\n}\n.ndd::after{\n    position: absolute;\n    display: block;\n    content: '';\n    width: 30px;\n    height: 10px;\n    background-color:var(--primary-color);  \n    transition: all 1s ease;\n}\n.nav-item:hover{\n    color: white;\n}\n.nav-item::after{\n    position: absolute;\n    display: block;\n    content: '';\n    width: 30px;\n    height: 10px;\n    background-color:var(--primary-color);  \n    transition: all 1s ease;\n}\n.nav-item:hover::after{\n    width: 50px;\n    background-color: white;\n}\n.gradientBlack{\n    position: absolute;\n    background: rgb(0,0,0);\n    background: linear-gradient(180deg, rgba(0,0,0,1) 37%, rgba(247,247,247,0) 100%);\n    width: 100%;\n    height: 30vh;\n}\n.home{\n    align-self: center;\n    display: flex;\n    flex-direction: column;\n    justify-items: center;\n    align-items: center;\n\n}\n.homeMain{\n    color: var(--secondary-color);\n    background-color: white;\n    width: 50%;\n    text-align: center;\n    font-size: 4vw;\n    padding: 20px;\n}\n.homeMainBtns{\n    color: var(--primary-color);\n \n}\n.homeMainBtns p{\n    display: inline-block;\n    background-color: var(--secondary-color);\n    margin: 10px;\n    padding: 20px;\n    font-size: 20px;\n    width: auto;\n}\n.homeMainBtns p:hover{\n    background-color: var(--secondary-color);\n    color: white;\n}\n\n.menu{\n    display: flex;\n    flex-direction: column;\n    align-content: space-between;\n}\n.menuPizza>div, .menuBase>p,.menuToppings>p{\n    display: none;\n}\n.makePizza{\n    display: flex;\n    justify-content: space-evenly;\n}\n.menuMain{\n    color: white;\n    background-color: var(--primary-color);\n    width: 70%;\n    padding: 10px;\n    font-size: 3vw;\n    text-align: center;\n    margin: auto;\n}\n.makePizza > div{\n    color: white;\n    background-color: var(--secondary-color);\n    width: 20vw;\n    height: 15vh;\n}\n.makePizza > div > h3{\n    font-size: 2.5vw;\n    margin: 10px;\n}\n.makePizza > div p{\n    margin: 10px;\n}\n.makePizza > div p:hover{\n    text-shadow:\n     3px  3px 0 var(--primary-color),\n    -1px -1px 0 var(--primary-color),  \n     1px -1px 0 var(--primary-color),\n    -1px  1px 0 var(--primary-color),\n     1px  1px 0 var(--primary-color);\n}\n\n.menuPrice{\n    height:min-content !important;\n    align-self: center;\n    font-size: 4vw;\n    padding: 20px;\n    text-align: center;\n}\n.form{\n    display: grid;\n    width: 75vw;\n    margin:auto;\n    padding: 10px;\n    background-color: var(--primary-color);\n    grid-template: 1fr 3fr/1fr 1fr;\n    grid-template-areas: \n    'name       email'\n    'message    message'\n    ;\n}\n#nameInput{\n    grid-area: name;\n}\n#emailInput{\n    grid-area: email;\n}\n#messageInput{\n    width: 100%;\n    -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */\n    -moz-box-sizing: border-box;    /* Firefox, other Gecko */\n    box-sizing: border-box;   \n    grid-area: message;\n}\n.callUs,.locText{\n    color: var(--primary-color);\n    background-color: var(--secondary-color);\n    width: 75vw;\n    margin: auto;\n    padding: 20px;\n    font-size: 30px;\n    text-align: center;\n    margin-top: 20px;\n}\n.location{\n    padding: 10px;\n    width: 50vw;\n    background-color: var(--primary-color);\n    margin: auto;\n}\n\n.OurStory{\n    padding: 20px;\n    display: grid;\n    grid-template: 1fr 1fr 1fr / 1fr 1fr;\n    grid-template-areas: \n    's01    s02'\n    's01    s03'\n    's01    s04'\n    ;\n}\n.s01,.s02,.s03,.s04{\n    font-size: max(12px,1.5vw);\n    line-height: 4.5vh;\n    padding: 10px;\n    width: 30vw;\n    margin-bottom: 10px;\n\n}\n.s02,.s03,.s04{\n    color: white;\n}\n.s01{\n    background-color: var(--primary-color);\n    grid-area: s01;\n    justify-self:center;\n    align-self: center;\n}\n.s02{\n    background-color: var(--secondary-color);\n    grid-area: s02;\n    justify-self: start;\n}\n.s03{\n    background-color: var(--secondary-color);\n    grid-area: s03;\n    justify-self: right;\n}\n.s04{\n    background-color: var(--secondary-color);\n    grid-area: s04;\n}\n.accountPage{\n   display: grid; \n   grid-template: 1fr/1fr 3fr;\n   grid-template-areas: \n   'profilePic  accountDetails'\n   ;\n}\n.profilePic{\n    background-image: url(./img/profilePic.png);\n    width: 15vw;\n    height: 15vw;\n    justify-self: right;\n    background-repeat: no-repeat;\n    background-size: contain;\n    grid-area: profilePic;\n}\n.accountDetails{\n    color: var(--primary-color);\n    grid-area: accountDetails;\n    padding: 20px;\n    background-color: white;\n    font-size: 2vw;\n    width: 50%;\n    height: 90%;\n    justify-self: center;\n}\n.accountDetails span{\n    color: var(--secondary-color)\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeHome": () => (/* binding */ makeHome)
/* harmony export */ });
function makeHome(){
    let container = document.getElementById('container')
    const newEleme = Object.assign(
        document.createElement('main'),{
            innerHTML:'<div class="homeLogo"></div><div class="homeMain">MAGIC IN EVERY SLICE!</div><div class="homeMainBtns"><p>Menu</p><p>Contact Us</p><p>Locations</p><p>Our Story</p></div>'
        }
    )
    newEleme.classList.add('home')
    container.appendChild(newEleme)
}

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeMenu": () => (/* binding */ makeMenu)
/* harmony export */ });
function makeMenu(){
    let container = document.getElementById('container')
    const newEleme = Object.assign(
        document.createElement('main'),{
            innerHTML:'<div class="menuMain">We don\'t like complicating things, make your pizza the way you like it best!</div>' +
            '<div class="makePizza">' +
                '<div class="menuPizza">'+
                   ' <h3>Choose your Pizza</h3>'+
                    '<div class="menuPizza-sizes">'+
                        '<h4>Size</h4>'+
                        '<p>10"</p>'+
                        '<p>12"</p>'+
                        '<p>14"</p>'+
                       ' <p>20"</p>'+
                    '</div>'+
                    '<div class="menuPizza-type">'+
                        '<h4>Type</h4>'+
                        '<p>Thin</p>'+
                        '<p>Pan</p>'+
                    '</div>'+
                    '<div class="menuPizza-crust">'+
                        '<h4>Crust</h4>'+
                        '<p>Stuffed Crust</p>'+
                        '<p>Normal</p>'+
                    '</div>'+
                '</div>'+
                '<div class="menuBase">'+
                    '<h3>Choose your Base</h3>'+
                    '<p>Tomato Sauce</p>'+
                    '<p>BBQ Sauce</p>'+
                    '<p>Garlic Sauce</p>'+
                    '<p>Nutella</p>'+
                '</div>'+
                '<div class="menuToppings">'+
                    '<h3>Choose your Toppings</h3>'+
                    '<p>Ham</p>'+
                   ' <p>Pineapple</p>'+
                    '<p>Salami</p>'+
                    '<p>Jalapeno</p>'+
                    '<p>Onion</p>'+
                    '<p>Chilli</p>'+
                    '<p>Mushroom</p>'+
                    '<p>Beef</p>'+
                    '<p>Sausage</p>'+
                '</div>'+
                '<div class="menuPrice">£15.99</div> ' +  
            '</div>'
        }
    )
    newEleme.classList.add('menu')
    container.appendChild(newEleme)
}

/***/ }),

/***/ "./src/img/HomeBanner.png":
/*!********************************!*\
  !*** ./src/img/HomeBanner.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b3e108175345c9fa205a.png";

/***/ }),

/***/ "./src/img/logo.png":
/*!**************************!*\
  !*** ./src/img/logo.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "35886cbef0500a353ab1.png";

/***/ }),

/***/ "./src/img/profilePic.png":
/*!********************************!*\
  !*** ./src/img/profilePic.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "404bbc72c25e8f858993.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/menu.js");



let container = document.getElementById('container');
    const newEleme = Object.assign(
        document.createElement('nav'),{
            innerHTML:'<div class="gradientBlack"></div><div class="logo"></div> <div class="navDropDown"></div><div class="navDropDownMenu"><div class="ndd ndd-menu">Menu</div><div class="ndd ndd-contactUs">Contact Us</div><div class="ndd ndd-locations">Locations</div><div class="ndd ndd-ourStory">Our Story</div><div class="ndd ndd-account">Account</div></div><div class="Menu nav-item">Menu</div><div class="contactUs nav-item">Contact Us</div><div class="locations nav-item">Locations</div><div class="ourStory nav-item">Our Story</div><div class="account">Account</div>'
        }
    )
    container.appendChild(newEleme)
;(0,_home__WEBPACK_IMPORTED_MODULE_1__.makeHome)();
let menu = document.getElementsByClassName('Menu')[0]
let logo = document.getElementsByClassName('logo')[0]
logo.addEventListener('click',e=>{
    clearContainer(container)
})
menu.addEventListener('click',e=>{
    clearContainer(container);
    (0,_menu__WEBPACK_IMPORTED_MODULE_2__.makeMenu)()
})

function clearContainer(){
    let main = document.getElementsByTagName('main')[0];
    main.innerHTML = ''
}



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE1BQU0sS0FBSyxZQUFZLGNBQWMsV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGNBQWMsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxLQUFLLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFNBQVMsT0FBTyxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFV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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbkRBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7Ozs7Ozs7Ozs7OztBQ3JCb0I7QUFDYTtBQUNGO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsSUFBSSwrQ0FBUTtBQUNaLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9pbWcvSG9tZUJhbm5lci5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ltZy9sb2dvLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vaW1nL3Byb2ZpbGVQaWMucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly91c2UudHlwZWtpdC5uZXQvaWRkMG1nci5jc3MpO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MzZweCkge1xcbiAgICAubmF2RHJvcERvd25NZW51IHtcXG4gICAgICBkaXNwbGF5Om5vbmU7XFxuICAgIH1cXG4gICAgXFxuICB9XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzM1cHgpIHtcXG4gICAgLm5hdi1pdGVtLC5hY2NvdW50IHtcXG4gICAgICBkaXNwbGF5Om5vbmU7XFxuICAgIH1cXG4gICAgbmF2e1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB9XFxuICAgIC5sb2dve1xcbiAgICAgICAgZGlzcGxheTpub25lO1xcbiAgICB9XFxuICAgICNjb250YWluZXJ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlOiAxZnIvIDFmciAzZnI7XFxuICAgIH1cXG4gICAgLmdyYWRpZW50QmxhY2t7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuICAgIC5ob21le1xcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICB9XFxuICAgIC5ob21lTWFpbntcXG4gICAgICAgIGZvbnQtc2l6ZTogNHZ3ICFpbXBvcnRhbnQ7XFxuICAgIH1cXG4gICAgLmhvbWVNYWluQnRuc3tcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG4gICAgLmhvbWVMb2dve1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgIH1cXG4gIH1cXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg4NXB4KSB7XFxuICAgIFxcblxcbiAgfVxcbjpyb290e1xcbiAgICAtLXNlY29uZGFyeS1jb2xvcjogIzIwMWUyMTtcXG4gICAgLS1wcmltYXJ5LWNvbG9yOiAjZDdiNzlhO1xcbn1cXG4qe1xcbiAgICBib3gtc2l6aW5nOmJvcmRlci1ib3g7XFxuICAgIGZvbnQtZmFtaWx5OiBhbWJveS1ibGFjaywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5odG1sLGJvZHl7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBwYWRkaW5nOiAwcHg7XFxufVxcbiNjb250YWluZXJ7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogMWZyIDVmci8xZnI7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OnNwYWNlO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG4ubG9nb3tcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBcXG4gICAgdG9wOiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgaGVpZ2h0OiAxNTBweDtcXG59XFxuLmhvbWVMb2dve1xcbiAgICBkaXNwbGF5Om5vbmU7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAwcHg7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBoZWlnaHQ6IDI1MHB4O1xcbn1cXG5uYXZ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcbm5hdj5kaXZ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgIFxcbn1cXG4uYWNjb3VudHtcXG4gICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICB3aWR0aDogMTUwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMTVweDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcXG59XFxuLmFjY291bnQ6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuLm5hdi1pdGVte1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDFzIGVhc2U7XFxufVxcblxcbi5uYXZEcm9wRG93bk1lbnV7XFxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcbi5uZGR7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZm9udC1zaXplOiAzNnB4ICFpbXBvcnRhbnQ7XFxuICAgIHRyYW5zaXRpb246IGFsbCAxcyBlYXNlO1xcbn1cXG4ubmRkOmhvdmVye1xcbiAgICBjb2xvcjp3aGl0ZTtcXG59XFxuLm5kZDpob3Zlcjo6YWZ0ZXJ7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuLm5kZDo6YWZ0ZXJ7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgaGVpZ2h0OiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLXByaW1hcnktY29sb3IpOyAgXFxuICAgIHRyYW5zaXRpb246IGFsbCAxcyBlYXNlO1xcbn1cXG4ubmF2LWl0ZW06aG92ZXJ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuLm5hdi1pdGVtOjphZnRlcntcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgY29udGVudDogJyc7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBoZWlnaHQ6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6dmFyKC0tcHJpbWFyeS1jb2xvcik7ICBcXG4gICAgdHJhbnNpdGlvbjogYWxsIDFzIGVhc2U7XFxufVxcbi5uYXYtaXRlbTpob3Zlcjo6YWZ0ZXJ7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuLmdyYWRpZW50QmxhY2t7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYmFja2dyb3VuZDogcmdiKDAsMCwwKTtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiYSgwLDAsMCwxKSAzNyUsIHJnYmEoMjQ3LDI0NywyNDcsMCkgMTAwJSk7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDMwdmg7XFxufVxcbi5ob21le1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG59XFxuLmhvbWVNYWlue1xcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiA0dnc7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxufVxcbi5ob21lTWFpbkJ0bnN7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG4gXFxufVxcbi5ob21lTWFpbkJ0bnMgcHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgd2lkdGg6IGF1dG87XFxufVxcbi5ob21lTWFpbkJ0bnMgcDpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ubWVudXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24tY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuLm1lbnVQaXp6YT5kaXYsIC5tZW51QmFzZT5wLC5tZW51VG9wcGluZ3M+cHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuLm1ha2VQaXp6YXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxufVxcbi5tZW51TWFpbntcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG4gICAgd2lkdGg6IDcwJTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZm9udC1zaXplOiAzdnc7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbn1cXG4ubWFrZVBpenphID4gZGl2e1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuICAgIHdpZHRoOiAyMHZ3O1xcbiAgICBoZWlnaHQ6IDE1dmg7XFxufVxcbi5tYWtlUGl6emEgPiBkaXYgPiBoM3tcXG4gICAgZm9udC1zaXplOiAyLjV2dztcXG4gICAgbWFyZ2luOiAxMHB4O1xcbn1cXG4ubWFrZVBpenphID4gZGl2IHB7XFxuICAgIG1hcmdpbjogMTBweDtcXG59XFxuLm1ha2VQaXp6YSA+IGRpdiBwOmhvdmVye1xcbiAgICB0ZXh0LXNoYWRvdzpcXG4gICAgIDNweCAgM3B4IDAgdmFyKC0tcHJpbWFyeS1jb2xvciksXFxuICAgIC0xcHggLTFweCAwIHZhcigtLXByaW1hcnktY29sb3IpLCAgXFxuICAgICAxcHggLTFweCAwIHZhcigtLXByaW1hcnktY29sb3IpLFxcbiAgICAtMXB4ICAxcHggMCB2YXIoLS1wcmltYXJ5LWNvbG9yKSxcXG4gICAgIDFweCAgMXB4IDAgdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxufVxcblxcbi5tZW51UHJpY2V7XFxuICAgIGhlaWdodDptaW4tY29udGVudCAhaW1wb3J0YW50O1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogNHZ3O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5mb3Jte1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICB3aWR0aDogNzV2dztcXG4gICAgbWFyZ2luOmF1dG87XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbiAgICBncmlkLXRlbXBsYXRlOiAxZnIgM2ZyLzFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcbiAgICAnbmFtZSAgICAgICBlbWFpbCdcXG4gICAgJ21lc3NhZ2UgICAgbWVzc2FnZSdcXG4gICAgO1xcbn1cXG4jbmFtZUlucHV0e1xcbiAgICBncmlkLWFyZWE6IG5hbWU7XFxufVxcbiNlbWFpbElucHV0e1xcbiAgICBncmlkLWFyZWE6IGVtYWlsO1xcbn1cXG4jbWVzc2FnZUlucHV0e1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiBTYWZhcmkvQ2hyb21lLCBvdGhlciBXZWJLaXQgKi9cXG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94OyAgICAvKiBGaXJlZm94LCBvdGhlciBHZWNrbyAqL1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAgIFxcbiAgICBncmlkLWFyZWE6IG1lc3NhZ2U7XFxufVxcbi5jYWxsVXMsLmxvY1RleHR7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG4gICAgd2lkdGg6IDc1dnc7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxufVxcbi5sb2NhdGlvbntcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgd2lkdGg6IDUwdnc7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbiAgICBtYXJnaW46IGF1dG87XFxufVxcblxcbi5PdXJTdG9yeXtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogMWZyIDFmciAxZnIgLyAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXG4gICAgJ3MwMSAgICBzMDInXFxuICAgICdzMDEgICAgczAzJ1xcbiAgICAnczAxICAgIHMwNCdcXG4gICAgO1xcbn1cXG4uczAxLC5zMDIsLnMwMywuczA0e1xcbiAgICBmb250LXNpemU6IG1heCgxMnB4LDEuNXZ3KTtcXG4gICAgbGluZS1oZWlnaHQ6IDQuNXZoO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICB3aWR0aDogMzB2dztcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG5cXG59XFxuLnMwMiwuczAzLC5zMDR7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuLnMwMXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuICAgIGdyaWQtYXJlYTogczAxO1xcbiAgICBqdXN0aWZ5LXNlbGY6Y2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcbi5zMDJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuICAgIGdyaWQtYXJlYTogczAyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcbn1cXG4uczAze1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgICBncmlkLWFyZWE6IHMwMztcXG4gICAganVzdGlmeS1zZWxmOiByaWdodDtcXG59XFxuLnMwNHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG4gICAgZ3JpZC1hcmVhOiBzMDQ7XFxufVxcbi5hY2NvdW50UGFnZXtcXG4gICBkaXNwbGF5OiBncmlkOyBcXG4gICBncmlkLXRlbXBsYXRlOiAxZnIvMWZyIDNmcjtcXG4gICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXG4gICAncHJvZmlsZVBpYyAgYWNjb3VudERldGFpbHMnXFxuICAgO1xcbn1cXG4ucHJvZmlsZVBpY3tcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXG4gICAgd2lkdGg6IDE1dnc7XFxuICAgIGhlaWdodDogMTV2dztcXG4gICAganVzdGlmeS1zZWxmOiByaWdodDtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgICBncmlkLWFyZWE6IHByb2ZpbGVQaWM7XFxufVxcbi5hY2NvdW50RGV0YWlsc3tcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbiAgICBncmlkLWFyZWE6IGFjY291bnREZXRhaWxzO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAydnc7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGhlaWdodDogOTAlO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuLmFjY291bnREZXRhaWxzIHNwYW57XFxuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQ0E7SUFDSTtNQUNFLFlBQVk7SUFDZDs7RUFFRjtBQUNGO0lBQ0k7TUFDRSxZQUFZO0lBQ2Q7SUFDQTtRQUNJLHNCQUFzQjtRQUN0Qix1QkFBdUI7SUFDM0I7SUFDQTtRQUNJLFlBQVk7SUFDaEI7SUFDQTtRQUNJLDJCQUEyQjtJQUMvQjtJQUNBO1FBQ0ksYUFBYTtJQUNqQjtJQUNBO1FBQ0ksa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSx5QkFBeUI7SUFDN0I7SUFDQTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLGNBQWM7SUFDbEI7RUFDRjtFQUNBOzs7RUFHQTtBQUNGO0lBQ0ksMEJBQTBCO0lBQzFCLHdCQUF3QjtBQUM1QjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLG9DQUFvQztJQUNwQyxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjtBQUNBO0lBQ0kseURBQTJDO0lBQzNDLFlBQVk7SUFDWixhQUFhO0lBQ2IsYUFBYTtJQUNi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a2l0Lm5ldC9pZGQwbWdyLmNzc1xcXCIpO1xcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDczNnB4KSB7XFxuICAgIC5uYXZEcm9wRG93bk1lbnUge1xcbiAgICAgIGRpc3BsYXk6bm9uZTtcXG4gICAgfVxcbiAgICBcXG4gIH1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MzVweCkge1xcbiAgICAubmF2LWl0ZW0sLmFjY291bnQge1xcbiAgICAgIGRpc3BsYXk6bm9uZTtcXG4gICAgfVxcbiAgICBuYXZ7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIH1cXG4gICAgLmxvZ297XFxuICAgICAgICBkaXNwbGF5Om5vbmU7XFxuICAgIH1cXG4gICAgI2NvbnRhaW5lcntcXG4gICAgICAgIGdyaWQtdGVtcGxhdGU6IDFmci8gMWZyIDNmcjtcXG4gICAgfVxcbiAgICAuZ3JhZGllbnRCbGFja3tcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG4gICAgLmhvbWV7XFxuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIH1cXG4gICAgLmhvbWVNYWlue1xcbiAgICAgICAgZm9udC1zaXplOiA0dncgIWltcG9ydGFudDtcXG4gICAgfVxcbiAgICAuaG9tZU1haW5CdG5ze1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcbiAgICAuaG9tZUxvZ297XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgfVxcbiAgfVxcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODg1cHgpIHtcXG4gICAgXFxuXFxuICB9XFxuOnJvb3R7XFxuICAgIC0tc2Vjb25kYXJ5LWNvbG9yOiAjMjAxZTIxO1xcbiAgICAtLXByaW1hcnktY29sb3I6ICNkN2I3OWE7XFxufVxcbip7XFxuICAgIGJveC1zaXppbmc6Ym9yZGVyLWJveDtcXG4gICAgZm9udC1mYW1pbHk6IGFtYm95LWJsYWNrLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcbmh0bWwsYm9keXtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIHBhZGRpbmc6IDBweDtcXG59XFxuI2NvbnRhaW5lcntcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vaW1nL0hvbWVCYW5uZXIucG5nKTtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlOiAxZnIgNWZyLzFmcjtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6c3BhY2U7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcbi5sb2dve1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9pbWcvbG9nby5wbmcpO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIFxcbiAgICB0b3A6IDIwcHg7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBoZWlnaHQ6IDE1MHB4O1xcbn1cXG4uaG9tZUxvZ297XFxuICAgIGRpc3BsYXk6bm9uZTtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vaW1nL2xvZ28ucG5nKTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IDBweDtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIGhlaWdodDogMjUwcHg7XFxufVxcbm5hdntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxubmF2PmRpdntcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgXFxufVxcbi5hY2NvdW50e1xcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xcbn1cXG4uYWNjb3VudDpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG4ubmF2LWl0ZW17XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMXMgZWFzZTtcXG59XFxuXFxuLm5hdkRyb3BEb3duTWVudXtcXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuLm5kZHtcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBmb250LXNpemU6IDM2cHggIWltcG9ydGFudDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDFzIGVhc2U7XFxufVxcbi5uZGQ6aG92ZXJ7XFxuICAgIGNvbG9yOndoaXRlO1xcbn1cXG4ubmRkOmhvdmVyOjphZnRlcntcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG4ubmRkOjphZnRlcntcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgY29udGVudDogJyc7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBoZWlnaHQ6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6dmFyKC0tcHJpbWFyeS1jb2xvcik7ICBcXG4gICAgdHJhbnNpdGlvbjogYWxsIDFzIGVhc2U7XFxufVxcbi5uYXYtaXRlbTpob3ZlcntcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG4ubmF2LWl0ZW06OmFmdGVye1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGhlaWdodDogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjp2YXIoLS1wcmltYXJ5LWNvbG9yKTsgIFxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMXMgZWFzZTtcXG59XFxuLm5hdi1pdGVtOmhvdmVyOjphZnRlcntcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG4uZ3JhZGllbnRCbGFja3tcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMCwwLDApO1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDAsMCwwLDEpIDM3JSwgcmdiYSgyNDcsMjQ3LDI0NywwKSAxMDAlKTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMzB2aDtcXG59XFxuLmhvbWV7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbn1cXG4uaG9tZU1haW57XFxuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDR2dztcXG4gICAgcGFkZGluZzogMjBweDtcXG59XFxuLmhvbWVNYWluQnRuc3tcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbiBcXG59XFxuLmhvbWVNYWluQnRucyBwe1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICB3aWR0aDogYXV0bztcXG59XFxuLmhvbWVNYWluQnRucyBwOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5tZW51e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4ubWVudVBpenphPmRpdiwgLm1lbnVCYXNlPnAsLm1lbnVUb3BwaW5ncz5we1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG4ubWFrZVBpenphe1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG59XFxuLm1lbnVNYWlue1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbiAgICB3aWR0aDogNzAlO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBmb250LXNpemU6IDN2dztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW46IGF1dG87XFxufVxcbi5tYWtlUGl6emEgPiBkaXZ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG4gICAgd2lkdGg6IDIwdnc7XFxuICAgIGhlaWdodDogMTV2aDtcXG59XFxuLm1ha2VQaXp6YSA+IGRpdiA+IGgze1xcbiAgICBmb250LXNpemU6IDIuNXZ3O1xcbiAgICBtYXJnaW46IDEwcHg7XFxufVxcbi5tYWtlUGl6emEgPiBkaXYgcHtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbn1cXG4ubWFrZVBpenphID4gZGl2IHA6aG92ZXJ7XFxuICAgIHRleHQtc2hhZG93OlxcbiAgICAgM3B4ICAzcHggMCB2YXIoLS1wcmltYXJ5LWNvbG9yKSxcXG4gICAgLTFweCAtMXB4IDAgdmFyKC0tcHJpbWFyeS1jb2xvciksICBcXG4gICAgIDFweCAtMXB4IDAgdmFyKC0tcHJpbWFyeS1jb2xvciksXFxuICAgIC0xcHggIDFweCAwIHZhcigtLXByaW1hcnktY29sb3IpLFxcbiAgICAgMXB4ICAxcHggMCB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG59XFxuXFxuLm1lbnVQcmljZXtcXG4gICAgaGVpZ2h0Om1pbi1jb250ZW50ICFpbXBvcnRhbnQ7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiA0dnc7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmZvcm17XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHdpZHRoOiA3NXZ3O1xcbiAgICBtYXJnaW46YXV0bztcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuICAgIGdyaWQtdGVtcGxhdGU6IDFmciAzZnIvMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxuICAgICduYW1lICAgICAgIGVtYWlsJ1xcbiAgICAnbWVzc2FnZSAgICBtZXNzYWdlJ1xcbiAgICA7XFxufVxcbiNuYW1lSW5wdXR7XFxuICAgIGdyaWQtYXJlYTogbmFtZTtcXG59XFxuI2VtYWlsSW5wdXR7XFxuICAgIGdyaWQtYXJlYTogZW1haWw7XFxufVxcbiNtZXNzYWdlSW5wdXR7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIFNhZmFyaS9DaHJvbWUsIG90aGVyIFdlYktpdCAqL1xcbiAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7ICAgIC8qIEZpcmVmb3gsIG90aGVyIEdlY2tvICovXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7ICAgXFxuICAgIGdyaWQtYXJlYTogbWVzc2FnZTtcXG59XFxuLmNhbGxVcywubG9jVGV4dHtcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgICB3aWR0aDogNzV2dztcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG59XFxuLmxvY2F0aW9ue1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICB3aWR0aDogNTB2dztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuICAgIG1hcmdpbjogYXV0bztcXG59XFxuXFxuLk91clN0b3J5e1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlOiAxZnIgMWZyIDFmciAvIDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcbiAgICAnczAxICAgIHMwMidcXG4gICAgJ3MwMSAgICBzMDMnXFxuICAgICdzMDEgICAgczA0J1xcbiAgICA7XFxufVxcbi5zMDEsLnMwMiwuczAzLC5zMDR7XFxuICAgIGZvbnQtc2l6ZTogbWF4KDEycHgsMS41dncpO1xcbiAgICBsaW5lLWhlaWdodDogNC41dmg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIHdpZHRoOiAzMHZ3O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcblxcbn1cXG4uczAyLC5zMDMsLnMwNHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG4uczAxe1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG4gICAgZ3JpZC1hcmVhOiBzMDE7XFxuICAgIGp1c3RpZnktc2VsZjpjZW50ZXI7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuLnMwMntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG4gICAgZ3JpZC1hcmVhOiBzMDI7XFxuICAgIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxufVxcbi5zMDN7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuICAgIGdyaWQtYXJlYTogczAzO1xcbiAgICBqdXN0aWZ5LXNlbGY6IHJpZ2h0O1xcbn1cXG4uczA0e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgICBncmlkLWFyZWE6IHMwNDtcXG59XFxuLmFjY291bnRQYWdle1xcbiAgIGRpc3BsYXk6IGdyaWQ7IFxcbiAgIGdyaWQtdGVtcGxhdGU6IDFmci8xZnIgM2ZyO1xcbiAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcbiAgICdwcm9maWxlUGljICBhY2NvdW50RGV0YWlscydcXG4gICA7XFxufVxcbi5wcm9maWxlUGlje1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9pbWcvcHJvZmlsZVBpYy5wbmcpO1xcbiAgICB3aWR0aDogMTV2dztcXG4gICAgaGVpZ2h0OiAxNXZ3O1xcbiAgICBqdXN0aWZ5LXNlbGY6IHJpZ2h0O1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICAgIGdyaWQtYXJlYTogcHJvZmlsZVBpYztcXG59XFxuLmFjY291bnREZXRhaWxze1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuICAgIGdyaWQtYXJlYTogYWNjb3VudERldGFpbHM7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDJ2dztcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgaGVpZ2h0OiA5MCU7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG4uYWNjb3VudERldGFpbHMgc3BhbntcXG4gICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcilcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBmdW5jdGlvbiBtYWtlSG9tZSgpe1xuICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFpbmVyJylcbiAgICBjb25zdCBuZXdFbGVtZSA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKSx7XG4gICAgICAgICAgICBpbm5lckhUTUw6JzxkaXYgY2xhc3M9XCJob21lTG9nb1wiPjwvZGl2PjxkaXYgY2xhc3M9XCJob21lTWFpblwiPk1BR0lDIElOIEVWRVJZIFNMSUNFITwvZGl2PjxkaXYgY2xhc3M9XCJob21lTWFpbkJ0bnNcIj48cD5NZW51PC9wPjxwPkNvbnRhY3QgVXM8L3A+PHA+TG9jYXRpb25zPC9wPjxwPk91ciBTdG9yeTwvcD48L2Rpdj4nXG4gICAgICAgIH1cbiAgICApXG4gICAgbmV3RWxlbWUuY2xhc3NMaXN0LmFkZCgnaG9tZScpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG5ld0VsZW1lKVxufSIsImV4cG9ydCBmdW5jdGlvbiBtYWtlTWVudSgpe1xuICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFpbmVyJylcbiAgICBjb25zdCBuZXdFbGVtZSA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKSx7XG4gICAgICAgICAgICBpbm5lckhUTUw6JzxkaXYgY2xhc3M9XCJtZW51TWFpblwiPldlIGRvblxcJ3QgbGlrZSBjb21wbGljYXRpbmcgdGhpbmdzLCBtYWtlIHlvdXIgcGl6emEgdGhlIHdheSB5b3UgbGlrZSBpdCBiZXN0ITwvZGl2PicgK1xuICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJtYWtlUGl6emFcIj4nICtcbiAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cIm1lbnVQaXp6YVwiPicrXG4gICAgICAgICAgICAgICAgICAgJyA8aDM+Q2hvb3NlIHlvdXIgUGl6emE8L2gzPicrXG4gICAgICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwibWVudVBpenphLXNpemVzXCI+JytcbiAgICAgICAgICAgICAgICAgICAgICAgICc8aDQ+U2l6ZTwvaDQ+JytcbiAgICAgICAgICAgICAgICAgICAgICAgICc8cD4xMFwiPC9wPicrXG4gICAgICAgICAgICAgICAgICAgICAgICAnPHA+MTJcIjwvcD4nK1xuICAgICAgICAgICAgICAgICAgICAgICAgJzxwPjE0XCI8L3A+JytcbiAgICAgICAgICAgICAgICAgICAgICAgJyA8cD4yMFwiPC9wPicrXG4gICAgICAgICAgICAgICAgICAgICc8L2Rpdj4nK1xuICAgICAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cIm1lbnVQaXp6YS10eXBlXCI+JytcbiAgICAgICAgICAgICAgICAgICAgICAgICc8aDQ+VHlwZTwvaDQ+JytcbiAgICAgICAgICAgICAgICAgICAgICAgICc8cD5UaGluPC9wPicrXG4gICAgICAgICAgICAgICAgICAgICAgICAnPHA+UGFuPC9wPicrXG4gICAgICAgICAgICAgICAgICAgICc8L2Rpdj4nK1xuICAgICAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cIm1lbnVQaXp6YS1jcnVzdFwiPicrXG4gICAgICAgICAgICAgICAgICAgICAgICAnPGg0PkNydXN0PC9oND4nK1xuICAgICAgICAgICAgICAgICAgICAgICAgJzxwPlN0dWZmZWQgQ3J1c3Q8L3A+JytcbiAgICAgICAgICAgICAgICAgICAgICAgICc8cD5Ob3JtYWw8L3A+JytcbiAgICAgICAgICAgICAgICAgICAgJzwvZGl2PicrXG4gICAgICAgICAgICAgICAgJzwvZGl2PicrXG4gICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJtZW51QmFzZVwiPicrXG4gICAgICAgICAgICAgICAgICAgICc8aDM+Q2hvb3NlIHlvdXIgQmFzZTwvaDM+JytcbiAgICAgICAgICAgICAgICAgICAgJzxwPlRvbWF0byBTYXVjZTwvcD4nK1xuICAgICAgICAgICAgICAgICAgICAnPHA+QkJRIFNhdWNlPC9wPicrXG4gICAgICAgICAgICAgICAgICAgICc8cD5HYXJsaWMgU2F1Y2U8L3A+JytcbiAgICAgICAgICAgICAgICAgICAgJzxwPk51dGVsbGE8L3A+JytcbiAgICAgICAgICAgICAgICAnPC9kaXY+JytcbiAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cIm1lbnVUb3BwaW5nc1wiPicrXG4gICAgICAgICAgICAgICAgICAgICc8aDM+Q2hvb3NlIHlvdXIgVG9wcGluZ3M8L2gzPicrXG4gICAgICAgICAgICAgICAgICAgICc8cD5IYW08L3A+JytcbiAgICAgICAgICAgICAgICAgICAnIDxwPlBpbmVhcHBsZTwvcD4nK1xuICAgICAgICAgICAgICAgICAgICAnPHA+U2FsYW1pPC9wPicrXG4gICAgICAgICAgICAgICAgICAgICc8cD5KYWxhcGVubzwvcD4nK1xuICAgICAgICAgICAgICAgICAgICAnPHA+T25pb248L3A+JytcbiAgICAgICAgICAgICAgICAgICAgJzxwPkNoaWxsaTwvcD4nK1xuICAgICAgICAgICAgICAgICAgICAnPHA+TXVzaHJvb208L3A+JytcbiAgICAgICAgICAgICAgICAgICAgJzxwPkJlZWY8L3A+JytcbiAgICAgICAgICAgICAgICAgICAgJzxwPlNhdXNhZ2U8L3A+JytcbiAgICAgICAgICAgICAgICAnPC9kaXY+JytcbiAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cIm1lbnVQcmljZVwiPsKjMTUuOTk8L2Rpdj4gJyArICBcbiAgICAgICAgICAgICc8L2Rpdj4nXG4gICAgICAgIH1cbiAgICApXG4gICAgbmV3RWxlbWUuY2xhc3NMaXN0LmFkZCgnbWVudScpXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG5ld0VsZW1lKVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiaW1wb3J0ICcuL3N0eWxlLmNzcydcbmltcG9ydCB7IG1ha2VIb21lIH0gZnJvbSAnLi9ob21lJ1xuaW1wb3J0IHttYWtlTWVudX0gZnJvbSAnLi9tZW51J1xubGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWluZXInKTtcbiAgICBjb25zdCBuZXdFbGVtZSA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpLHtcbiAgICAgICAgICAgIGlubmVySFRNTDonPGRpdiBjbGFzcz1cImdyYWRpZW50QmxhY2tcIj48L2Rpdj48ZGl2IGNsYXNzPVwibG9nb1wiPjwvZGl2PiA8ZGl2IGNsYXNzPVwibmF2RHJvcERvd25cIj48L2Rpdj48ZGl2IGNsYXNzPVwibmF2RHJvcERvd25NZW51XCI+PGRpdiBjbGFzcz1cIm5kZCBuZGQtbWVudVwiPk1lbnU8L2Rpdj48ZGl2IGNsYXNzPVwibmRkIG5kZC1jb250YWN0VXNcIj5Db250YWN0IFVzPC9kaXY+PGRpdiBjbGFzcz1cIm5kZCBuZGQtbG9jYXRpb25zXCI+TG9jYXRpb25zPC9kaXY+PGRpdiBjbGFzcz1cIm5kZCBuZGQtb3VyU3RvcnlcIj5PdXIgU3Rvcnk8L2Rpdj48ZGl2IGNsYXNzPVwibmRkIG5kZC1hY2NvdW50XCI+QWNjb3VudDwvZGl2PjwvZGl2PjxkaXYgY2xhc3M9XCJNZW51IG5hdi1pdGVtXCI+TWVudTwvZGl2PjxkaXYgY2xhc3M9XCJjb250YWN0VXMgbmF2LWl0ZW1cIj5Db250YWN0IFVzPC9kaXY+PGRpdiBjbGFzcz1cImxvY2F0aW9ucyBuYXYtaXRlbVwiPkxvY2F0aW9uczwvZGl2PjxkaXYgY2xhc3M9XCJvdXJTdG9yeSBuYXYtaXRlbVwiPk91ciBTdG9yeTwvZGl2PjxkaXYgY2xhc3M9XCJhY2NvdW50XCI+QWNjb3VudDwvZGl2PidcbiAgICAgICAgfVxuICAgIClcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobmV3RWxlbWUpXG5tYWtlSG9tZSgpO1xubGV0IG1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdNZW51JylbMF1cbmxldCBsb2dvID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbG9nbycpWzBdXG5sb2dvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxlPT57XG4gICAgY2xlYXJDb250YWluZXIoY29udGFpbmVyKVxufSlcbm1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGU9PntcbiAgICBjbGVhckNvbnRhaW5lcihjb250YWluZXIpO1xuICAgIG1ha2VNZW51KClcbn0pXG5cbmZ1bmN0aW9uIGNsZWFyQ29udGFpbmVyKCl7XG4gICAgbGV0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnbWFpbicpWzBdO1xuICAgIG1haW4uaW5uZXJIVE1MID0gJydcbn1cblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=