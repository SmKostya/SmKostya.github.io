function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<router-outlet></router-outlet>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<footer><span>+38 050-866-05-76</span><span> </span><span>smyrnov.kostya@gmail.com</span></footer>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/header-home/header-home.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header-home/header-home.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHeaderHomeHeaderHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<header><img class=\"{{ imageClass }}\" src=\"../assets/img/bg2.jpg\"/>\n  <div class=\"popMessage\">\n    <div class=\"firstMessage {{ popClass }}\">\n      <div class=\"bg\"></div>\n      <p>Hello, I’m Kostya Smyrnov.</p>\n    </div>\n    <div class=\"secondMessage {{ popClass2 }}\">\n      <div class=\"bg\"></div>\n      <p>I’m a beginner Front-end and JS Developer.</p>\n    </div>\n  </div>\n  <div class=\"startButton\" (click)=\"viewMyWorks()\">\n    <div class=\"{{ buttonClass }}\">View my works</div>\n  </div><div class=\"social\">\n  <div class=\"share {{ shareClass }}\"><a><i class=\"fa fa-share fa-2x\" aria-hidden=\"true\"></i></a></div><ul (mouseover) = \"hideShare()\" (mouseleave) = \"showShare()\">\n<li class=\"github\"><a href=\"https://github.com/SmKostya/\" target=\"_blank\"><i class=\"fab fa-github-alt fa-2x\"></i></a></li>\n<li class=\"linkedin\"><a href=\"https://www.linkedin.com/in/kostya-smyrnov-768100181/\" target=\"_blank\"><i class=\"fab fa-linkedin-in fa-2x\" aria-hidden=\"true\"></i></a></li>\n<li class=\"facebook\"><a href=\"https://www.facebook.com/profile.php?id=100007897631572&ref=bookmarks\" target=\"_blank\"><i class=\"fab fa-facebook-f fa-2x\" aria-hidden=\"true\"></i></a></li>\n<li class=\"telegram\"><a href=\"https://t.me/smkostya\" target=\"_blank\"><i class=\"fab fa-telegram-plane fa-2x\" aria-hidden=\"true\"></i></a></li>\n</ul>\n</div>\n</header>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<app-header-home></app-header-home>\n<div class=\"main\">\n  <div class=\"goTop {{ showGoTopClass }}\" (window:scroll)=\"onScroll()\" (click)=\"goTop()\"><a><i class=\"fa fa-arrow-up fa-2x\" aria-hidden=\"true\"></i></a></div>\n  <h2>My Works</h2>\n  <div class=\"works\">\n    <div>\n      <div class=\"project\">\n        <div class=\"screenshots\">\n          <div class=\"carousel slide\" id=\"carouselContent\" data-ride=\"carousel\">\n            <div class=\"carousel-inner\" role=\"listbox\">\n              <div class=\"carousel-item active text-center p-4\"><img class=\"d-block w-100\" src=\"../assets/img/works/Anton/antonViewGallery.jpg\" alt=\"\" srcset=\"\"/>\n                <h3>Просмотр отдельных альбомов</h3>\n              </div>\n              <div class=\"carousel-item text-center p-4\"><img class=\"d-block w-100\" src=\"../assets/img/works/Anton/AntonContactForm.jpg\" alt=\"\" srcset=\"\"/>\n                <h3>Контактная форма</h3>\n              </div>\n              <div class=\"carousel-item text-center p-4\"><img class=\"d-block w-100\" src=\"../assets/img/works/Anton/AntonHome1.jpg\" alt=\"\" srcset=\"\"/>\n                <h3>Домашняя страница</h3>\n              </div>\n              <div class=\"carousel-item text-center p-4\"><img class=\"d-block w-100\" src=\"../assets/img/works/Anton/AntonPortfolio.jpg\" alt=\"\" srcset=\"\"/>\n                <h3>Портфолио</h3>\n              </div>\n              <div class=\"carousel-item text-center p-4\"><img class=\"d-block w-100\" src=\"../assets/img/works/Anton/AntonHome2.jpg\" alt=\"\" srcset=\"\"/>\n                <h3>Домашняя страница</h3>\n              </div>\n            </div><a class=\"carousel-control-prev\" href=\"#carouselContent\" role=\"button\" data-slide=\"prev\"><span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span><span class=\"sr-only\">Previous</span></a><a class=\"carousel-control-next\" href=\"#carouselContent\" role=\"button\" data-slide=\"next\"><span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span><span class=\"sr-only\">Next</span></a>\n          </div>\n        </div>\n        <div class=\"technologiesList\">\n          <div class=\"aboutProject\"><span>О проекте</span>\n            <p>Основная задача которую решает сайт это демонстрация работ фотографа в удобном для пользователей фоормате, то есть фильтрация по стилям и удобный просмотр отдельных фотографий. Так же из-за большого количества фото в большом разрешении пришлось решать проблему со скоростью загрузки, на странице портфолио была добавлена отложенная загрузка и у всех изображений на сайте было понижено разрешение, что решило проблему. Так же на сайт была добавлена форма через которую пользователь может заказать фотосессию, заявки приходят фотографу на телеграм.</p>\n          </div>\n          <ul>Технологии которые я использовал: \n            <li>HTML5+CSS3, JS+Jquery</li>\n            <li>SCSS + Pug</li>\n            <li>Webpack, Figma</li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"button\"><a class=\"Open_site\" href=\"https://anton-ph.com\">\n          <div>Open site</div></a><a class=\"github_button\" href=\"https://github.com/SmKostya/Photographer-portfolio\"> \n          <div><i class=\"fab fa-github fa-1x\" aria-hidden=\"true\"></i> GitHub   </div></a></div>\n      <div class=\"project\">\n        <div class=\"screenshots\">\n          <div class=\"carousel slide\" id=\"carouselContent2\" data-ride=\"carousel\">\n            <div class=\"carousel-inner\" role=\"listbox\">\n              <div class=\"carousel-item active text-center p-4\"><img class=\"d-block w-100\" src=\"../assets/img/works/Counters/CountersMenu.jpg\" alt=\"\" srcset=\"\"/>\n                <h3>Меню работника</h3>\n              </div>\n              <div class=\"carousel-item text-center p-4\"><img class=\"d-block w-100\" src=\"../assets/img/works/Counters/CountersMenuAdmin.jpg\" alt=\"\" srcset=\"\"/>\n                <h3>Меню администратора (В списке пользователей видно 3 вида прав)</h3>\n              </div>\n              <div class=\"carousel-item text-center p-4\"><img class=\"d-block w-100\" src=\"../assets/img/works/Counters/Counters.jpg\" alt=\"\" srcset=\"\"/>\n                <h3>Поиск по базе</h3>\n              </div>\n            </div><a class=\"carousel-control-prev\" href=\"#carouselContent2\" role=\"button\" data-slide=\"prev\"><span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span><span class=\"sr-only\">Previous</span></a><a class=\"carousel-control-next\" href=\"#carouselContent2\" role=\"button\" data-slide=\"next\"><span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span><span class=\"sr-only\">Next</span></a>\n          </div>\n        </div>\n        <div class=\"technologiesList\">\n          <div class=\"aboutProject\"><span>О проекте</span>\n            <p>Во время прохождения практики от университета был свидетелем такой ситуации, что работнику контролюрующему подключение счетчиков чтобы найти нужный для работы счетчик по указанному адресу или владельца какого то счетчика, иногда оставалось только звонить и просить кого то в офисе вбить в поиск в Excel таблице на компьютере и передать необходимые данные. В качестве решения этой проблемы я создал телеграм бота который ищет по одному из известных параметров подходящие счетчики и выдает всю необходимую про них информацию. Также для безопасности были созданы 3 уровня доступа: Админ (с правом очищать базу и выдавать права), Работник (Просмотр базы) и Гость (Без возможности просмотра базы до выдачи прав). Обновление базы осуществяется с помощью кнопки очистки в меню админа и отправки боту нового Excel файла который он загрузит в базу MySQL.</p>\n          </div>\n          <ul>Технологии которые я использовал: \n            <li>NodeJS, MySQL</li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"button button_git\"><a class=\"github_button\" href=\"https://github.com/SmKostya/CountersTelegramBot\"> \n          <div><i class=\"fab fa-github fa-1x\" aria-hidden=\"true\"></i> GitHub  </div></a></div>\n      <div class=\"project\">\n        <div class=\"screenshots\">\n          <div class=\"carousel slide\" id=\"carouselContent3\" data-ride=\"carousel\">\n            <div class=\"carousel-inner\" role=\"listbox\">\n              <div class=\"carousel-item active text-center p-4\"><img class=\"d-block w-100\" src=\"../assets/img/works/Bits/AddBit.jpg\" alt=\"\" srcset=\"\"/>\n                <h3>Добавление нового бита</h3>\n              </div>\n              <div class=\"carousel-item text-center p-4\"><img class=\"d-block w-100\" src=\"../assets/img/works/Bits/AdminMenu.jpg\" alt=\"\" srcset=\"\"/>\n                <h3>Меню администратора</h3>\n              </div>\n              <div class=\"carousel-item text-center p-4\"><img class=\"d-block w-100\" src=\"../assets/img/works/Bits/Menu.jpg\" alt=\"\" srcset=\"\"/>\n                <h3>Меню пользователя</h3>\n              </div>\n              <div class=\"carousel-item text-center p-4\"><img class=\"d-block w-100\" src=\"../assets/img/works/Bits/EditTags.jpg\" alt=\"\" srcset=\"\"/>\n                <h3>Изменение тега или описания бита</h3>\n              </div>\n            </div><a class=\"carousel-control-prev\" href=\"#carouselContent3\" role=\"button\" data-slide=\"prev\"><span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span><span class=\"sr-only\">Previous</span></a><a class=\"carousel-control-next\" href=\"#carouselContent3\" role=\"button\" data-slide=\"next\"><span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span><span class=\"sr-only\">Next</span></a>\n          </div>\n        </div>\n        <div class=\"technologiesList\">\n          <div class=\"aboutProject\"><span>О проекте</span>\n            <p>Телеграм бот который позволяет послушать демо версии битов и с помощью LiqPay купить или арендовать (бит остается в продаже) любой из них. Все купленные или арендованные биты пользователь может посмотреть с помощью двух соответствующих пунктов меню. Также у пользователя есть возможность написать вопрос или предложение автору битов. Автор же в свою очередь имеет возможность в случае спама внести пользователя в черный список. </p>\n          </div>\n          <ul>Технологии которые я использовал: \n            <li>NodeJS, MySQL</li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"button button_git\"><a class=\"github_button\" href=\"https://github.com/SmKostya/musicSellerBot\"> \n          <div><i class=\"fab fa-github fa-1x\" aria-hidden=\"true\"></i> GitHub  </div></a></div>\n    </div>\n  </div>\n  <h2>In Development</h2>\n  <div class=\"works\">\n    <div>\n      <div class=\"project\">\n        <div class=\"screenshots\">\n          <div class=\"carousel slide\" id=\"carouselContent4\" data-ride=\"carousel\">\n            <div class=\"carousel-inner\" role=\"listbox\">\n              <div class=\"carousel-item active text-center p-4\"><img class=\"d-block w-100\" src=\"../assets/img/works/Amet/AmetShop.jpg\" alt=\"\" srcset=\"\"/>\n                <h3>Магазин битов</h3>\n              </div>\n              <div class=\"carousel-item text-center p-4\"><img class=\"d-block w-100\" src=\"../assets/img/works/Amet/AmetShop2.jpg\" alt=\"\" srcset=\"\"/>\n                <h3>Покупка бита</h3>\n              </div>\n              <div class=\"carousel-item text-center p-4\"><img class=\"d-block w-100\" src=\"../assets/img/works/Amet/AmetPortfolio.jpg\" alt=\"\" srcset=\"\"/>\n                <h3>Портфолио</h3>\n              </div>\n              <div class=\"carousel-item text-center p-4\"><img class=\"d-block w-100\" src=\"../assets/img/works/Amet/AmetPortfolio2.jpg\" alt=\"\" srcset=\"\"/>\n                <h3>Портфолио</h3>\n              </div>\n              <div class=\"carousel-item text-center p-4\"><img class=\"d-block w-100\" src=\"../assets/img/works/Amet/AmetContactForm.jpg\" alt=\"\" srcset=\"\"/>\n                <h3>Контакная форма</h3>\n              </div>\n            </div><a class=\"carousel-control-prev\" href=\"#carouselContent4\" role=\"button\" data-slide=\"prev\"><span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span><span class=\"sr-only\">Previous</span></a><a class=\"carousel-control-next\" href=\"#carouselContent4\" role=\"button\" data-slide=\"next\"><span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span><span class=\"sr-only\">Next</span></a>\n          </div>\n        </div>\n        <div class=\"technologiesList\">\n          <div class=\"aboutProject\"><span>О проекте</span>\n            <p>Сайт должен будет выполнять сразу несколько задач - показать пользователю новые треки и новости музыкальной группы а также предоставить возможность покупки битов и семплов.</p>\n          </div>\n          <ul>Технологии которые я использовал: \n            <li>Angular</li>\n            <li>HTML5+CSS3</li>\n            <li>JS+Jquery</li>\n            <li>SCSS + Pug</li>\n            <li>Figma</li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"button button_git\"><a class=\"github_button\" href=\"https://github.com/SmKostya/Angular-musician-portfolio-site.git\"> \n          <div><i class=\"fab fa-github fa-1x\" aria-hidden=\"true\"></i> GitHub  </div></a></div>\n    </div>\n  </div>\n  <h2>About Me</h2>\n  <div class=\"aboutUs\">\n    <div class=\"textBlock\">\n      <p>\n        Я начинающий Front-end и JavaScript разработчик. Программирование изучаю полтора года, учился по курсам, урокам и документациям в интренете. На данный момент освоил HTML5, CSS3, JS, препоцессоры Pug, Scss и сборщик webpack. На данный момент практикую и изучаю фреймворк Angular.\n        Также я учусь на 4 курсе ХНТУ по специальности Нетрадиционные источники энергии и электроенергетика. \n        \n      </p>\n    </div>\n  </div>\n  <div class=\"contactForm\">\n    <h2>Contact Me</h2>\n    <div class=\"social\"><a href=\"https://github.com/SmKostya\" target=\"_blank\"><i class=\"fab fa-github fa-2x\" aria-hidden=\"true\"></i></a>\n<a href=\"https://www.linkedin.com/in/kostya-smyrnov-768100181/\" target=\"_blank\"><i class=\"fab fa-linkedin fa-2x\" aria-hidden=\"true\"></i></a>\n<a href=\"https://www.facebook.com/profile.php?id=100007897631572&ref=bookmarks\" target=\"_blank\"><i class=\"fab fa-facebook fa-2x\" aria-hidden=\"true\"></i></a>\n<a href=\"https://t.me/smkostya\" target=\"_blank\"><i class=\"fab fa-telegram fa-2x\" aria-hidden=\"true\"></i></a>\n    </div>\n    <form class=\"contact_form\" action=\"../SendMessageTelegram.php\" method=\"post\" onsubmit=\"return checkLastSend();\">\n      <div>\n        <div class=\"message\">\n          <div class=\"name\">\n            <label for=\"firstname__field\">Name</label>\n            <input id=\"firstname__field\" type=\"text\" name=\"name\" required=\"required\"/>\n          </div>\n          <div class=\"contact\">\n            <label for=\"contact\">Your phone, mail or other contact information</label>\n            <input id=\"contact\" type=\"tel\" name=\"contact\"/>\n          </div>\n          <div class=\"messageField\">\n            <label for=\"textarea\">Message: </label>\n            <textarea id=\"textarea\" height=\"100%\" name=\"text\"></textarea>\n          </div>\n        </div>\n      </div>\n      <input class=\"sendForm button\" type=\"submit\" value=\"Send Message\"/>\n    </form>\n    <div class=\"SendFormMessage success\" style=\"display: none;\">Form Submitted Successfully!</div>\n    <div class=\"SendFormMessage error\" style=\"display: none;\">An error occurred while submitting the form.</div>\n  </div>\n  <app-footer></app-footer>\n</div>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");

    var routes = [{
      path: '',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "* {\n  padding: 0;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxBZG1pblxcRGVza3RvcFxcbXlQb3J0Zm9saW8vc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtFQUNBLFNBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIip7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcbiIsIioge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.x = "Hi!";
      this.title = 'musicPortfolio'; // element.nativeElement.style.backgroundSize = 'auto';
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AppComponent.prototype, "ngStyle", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('load', ['$event.target'])], AppComponent.prototype, "x", void 0);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _header_home_header_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./header-home/header-home.component */
    "./src/app/header-home/header-home.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _interceptors_HttpErrorInterceptor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./interceptors/HttpErrorInterceptor */
    "./src/app/interceptors/HttpErrorInterceptor.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"], _header_home_header_home_component__WEBPACK_IMPORTED_MODULE_7__["HeaderHomeComponent"]],
      imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]],
      providers: [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"],
        useClass: _interceptors_HttpErrorInterceptor__WEBPACK_IMPORTED_MODULE_9__["HttpErrorInterceptor"],
        multi: true
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/footer/footer.component.scss":
  /*!**********************************************!*\
    !*** ./src/app/footer/footer.component.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppFooterFooterComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@import url(\"https://fonts.googleapis.com/css?family=Share&display=swap\");\nfooter {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  height: 40px;\n  background: #111110;\n  padding: 0 10%;\n}\nfooter span {\n  line-height: 33px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  text-align: center;\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  outline: 0;\n  letter-spacing: 0.2px;\n  color: #fff;\n  text-decoration: none;\n}\nfooter a {\n  text-decoration: none;\n}\nfooter a, footer a:active {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL0M6XFxVc2Vyc1xcQWRtaW5cXERlc2t0b3BcXG15UG9ydGZvbGlvL3NyY1xcYXBwXFxmb290ZXJcXGZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSx5RUFBQTtBQUNSO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLG1CQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUNDSjtBREFJO0VBQ0ksaUJBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0FDRVI7QURBSTtFQUNJLHFCQUFBO0FDRVI7QUREUTtFQUNJLFlBQUE7QUNHWiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVNoYXJlJmRpc3BsYXk9c3dhcCcpO1xyXG5mb290ZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGJhY2tncm91bmQ6ICMxMTExMTA7XHJcbiAgICBwYWRkaW5nOiAwIDEwJTtcclxuICAgIHNwYW57XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMzcHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XHJcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIG91dGxpbmU6IDA7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC4ycHg7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgfVxyXG4gICAgYXtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgJiwgJjphY3RpdmV7XHJcbiAgICAgICAgICAgIGNvbG9yOndoaXRlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVNoYXJlJmRpc3BsYXk9c3dhcFwiKTtcbmZvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgaGVpZ2h0OiA0MHB4O1xuICBiYWNrZ3JvdW5kOiAjMTExMTEwO1xuICBwYWRkaW5nOiAwIDEwJTtcbn1cbmZvb3RlciBzcGFuIHtcbiAgbGluZS1oZWlnaHQ6IDMzcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgb3V0bGluZTogMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuZm9vdGVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5mb290ZXIgYSwgZm9vdGVyIGE6YWN0aXZlIHtcbiAgY29sb3I6IHdoaXRlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/footer/footer.component.ts":
  /*!********************************************!*\
    !*** ./src/app/footer/footer.component.ts ***!
    \********************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FooterComponent =
    /*#__PURE__*/
    function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./footer.component.scss */
      "./src/app/footer/footer.component.scss")).default]
    })], FooterComponent);
    /***/
  },

  /***/
  "./src/app/header-home/header-home.component.scss":
  /*!********************************************************!*\
    !*** ./src/app/header-home/header-home.component.scss ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHeaderHomeHeaderHomeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@import url(\"https://fonts.googleapis.com/css?family=Stardos+Stencil&display=swap\");\n@import url(\"https://fonts.googleapis.com/css?family=Amatic+SC&display=swap\");\n@import url(\"https://fonts.googleapis.com/css?family=Poppins&display=swap\");\n@import url(\"https://fonts.googleapis.com/css?family=Arimo&display=swap\");\nheader {\n  height: auto;\n  max-height: 80vh;\n  width: 100%;\n  overflow: hidden;\n  position: relative;\n  display: -webkit-box;\n  display: flex;\n}\nheader nav {\n  z-index: 2;\n  position: absolute;\n  width: 100%;\n  top: 5%;\n  display: -webkit-box;\n  display: flex;\n  margin-bottom: 30px;\n}\nheader nav .menu {\n  margin: auto;\n  width: 45%;\n}\nheader nav .menu ul {\n  width: 100%;\n  justify-content: space-around;\n  display: -webkit-box;\n  display: flex;\n}\nheader nav .menu ul li {\n  text-align: center;\n  margin: auto;\n  color: #fff;\n  display: inline-block;\n}\nheader nav .menu ul li a {\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 27px;\n  letter-spacing: 2px;\n  color: #ffffff;\n  text-decoration: none;\n}\nheader img {\n  opacity: 0;\n  -webkit-transition: 1s;\n  transition: 1s;\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n  -webkit-transform: scale(1.2);\n          transform: scale(1.2);\n  overflow: hidden;\n  width: 100%;\n}\nheader img.appearanceImage {\n  opacity: 1;\n  -webkit-transition: 1s;\n  transition: 1s;\n}\nheader img.scaledImage {\n  outline: none;\n  margin: -1px;\n  opacity: 1;\n  -webkit-transition: 24s;\n  transition: 24s;\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n  -webkit-transform: scale(1);\n          transform: scale(1);\n}\nheader .popMessage {\n  z-index: 3;\n  position: absolute;\n  top: 20%;\n  margin: auto;\n  left: calc(50% - 220px);\n  font-family: \"Poppins\", cursive;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 50px;\n  line-height: 55px;\n  color: #ffffff;\n}\nheader .popMessage .firstMessage,\nheader .popMessage .secondMessage {\n  display: -webkit-box;\n  display: flex;\n  opacity: 0;\n  z-index: 3;\n  width: 1200px;\n  height: 80px;\n  left: calc(50% - 1000px);\n  top: 30%;\n  position: relative;\n  text-align: center;\n  margin: 10px 0;\n  overflow: hidden;\n  padding: 16px 0;\n  background-repeat: no-repeat;\n}\nheader .popMessage .firstMessage .bg,\nheader .popMessage .secondMessage .bg {\n  z-index: 4;\n  width: 100%;\n  height: 0%;\n  position: absolute;\n  text-align: center;\n  overflow: hidden;\n  background: url('white.jpg');\n  background-position: 0% 0%, 0% 0%;\n  background-repeat: no-repeat;\n}\nheader .popMessage .firstMessage p,\nheader .popMessage .secondMessage p {\n  font-size: 40px;\n  color: #e4e4e4;\n  width: 1200px;\n  height: 50px;\n  text-align: center;\n  z-index: 1;\n  position: absolute;\n  font-weight: bold;\n}\nheader .popMessage .secondMessage p {\n  font-size: 45px;\n  color: #4963c3;\n  margin: auto;\n}\n@-webkit-keyframes popBlock {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes popBlock {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@-webkit-keyframes popBG {\n  0% {\n    opacity: 1;\n    height: 0%;\n  }\n  50% {\n    height: 100%;\n    opacity: 1;\n    background-position: 0% 0%;\n  }\n  100% {\n    height: 100%;\n    background-position: 100% -80%;\n  }\n}\n@keyframes popBG {\n  0% {\n    opacity: 1;\n    height: 0%;\n  }\n  50% {\n    height: 100%;\n    opacity: 1;\n    background-position: 0% 0%;\n  }\n  100% {\n    height: 100%;\n    background-position: 100% -80%;\n  }\n}\n@-webkit-keyframes popText {\n  0% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 0;\n  }\n  51% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes popText {\n  0% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 0;\n  }\n  51% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 1;\n  }\n}\nheader .popMessage .StartPopMessageFirst {\n  -webkit-animation: popBlock 2s 1 ease-in-out forwards;\n          animation: popBlock 2s 1 ease-in-out forwards;\n}\nheader .popMessage .StartPopMessageFirst .bg {\n  -webkit-animation: popBG 2s 1 forwards;\n          animation: popBG 2s 1 forwards;\n}\nheader .popMessage .StartPopMessageFirst p {\n  -webkit-animation: popText 2s 1 ease-in-out forwards;\n          animation: popText 2s 1 ease-in-out forwards;\n}\nheader .popMessage .StartPopMessageSecond {\n  -webkit-animation: popBlock 2s 1 ease-in-out forwards;\n          animation: popBlock 2s 1 ease-in-out forwards;\n}\nheader .popMessage .StartPopMessageSecond .bg {\n  -webkit-animation: popBG 2s 1 forwards;\n          animation: popBG 2s 1 forwards;\n}\nheader .popMessage .StartPopMessageSecond p {\n  -webkit-animation: popText 2s 1 ease-in-out forwards;\n          animation: popText 2s 1 ease-in-out forwards;\n}\nheader .startButton {\n  cursor: pointer;\n  position: absolute;\n  bottom: 10%;\n  left: calc(50% - 160.5px);\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n}\nheader .startButton a {\n  text-decoration: none;\n}\nheader .startButton:hover {\n  box-shadow: 0 0 4px 1px white;\n}\nheader .startButton div {\n  opacity: 0;\n  background: none;\n  border: 0;\n  box-sizing: border-box;\n  padding: 1em 2em;\n  box-shadow: inset 0 0 0 2px rgba(0, 0, 0, 0);\n  color: white;\n  font-size: 30px;\n  font-weight: 700;\n  position: relative;\n  vertical-align: middle;\n  -webkit-transition: color 0.25s;\n  transition: color 0.25s;\n}\nheader .startButton div::before, header .startButton div::after {\n  box-sizing: inherit;\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\nheader .startButton div::before, header .startButton div::after {\n  border: 2px solid transparent;\n  width: 0;\n  height: 0;\n}\nheader .startButton div::before {\n  top: 0;\n  left: 0;\n}\nheader .startButton div::after {\n  bottom: 0;\n  right: 0;\n}\nheader .startButton div.active {\n  opacity: 1 !important;\n  -webkit-transition: 1s;\n  transition: 1s;\n  background-color: rgba(0, 0, 0, 0.089);\n  -webkit-backdrop-filter: blur(3px);\n          backdrop-filter: blur(3px);\n  color: #ffffff;\n}\nheader .startButton div.active::before, header .startButton div.active::after {\n  width: 100%;\n  height: 100%;\n}\nheader .startButton div.active::before {\n  border-top-color: #ffffff;\n  border-right-color: #ffffff;\n  -webkit-transition: width 0.25s ease-out, height 0.25s ease-out 0.25s;\n  transition: width 0.25s ease-out, height 0.25s ease-out 0.25s;\n}\nheader .startButton div.active::after {\n  border-bottom-color: #ffffff;\n  border-left-color: #ffffff;\n  -webkit-transition: border-color 0s ease-out 0.5s, width 0.25s ease-out 0.5s, height 0.25s ease-out 0.75s;\n  transition: border-color 0s ease-out 0.5s, width 0.25s ease-out 0.5s, height 0.25s ease-out 0.75s;\n}\n.social {\n  height: 100vh;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-transition: 1s;\n  transition: 1s;\n  border-radius: 4px;\n  text-align: center;\n  position: fixed;\n  width: 80px;\n  right: 0;\n  padding-left: 100px;\n  z-index: 100;\n}\n.social:hover {\n  -webkit-transform: translateX(0px);\n          transform: translateX(0px);\n  padding-left: 0px;\n}\n.social .share {\n  display: -webkit-box;\n  display: flex;\n  cursor: pointer;\n  -webkit-transform: translateX(-50px);\n          transform: translateX(-50px);\n  position: fixed;\n  display: flex;\n  margin: auto;\n  width: 50px;\n  height: 100vh;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n}\n.social .share img {\n  opacity: 1;\n  border-radius: 50%;\n}\n.social .share a, .social .share img {\n  margin: auto;\n  -webkit-transform: translateX(-10px);\n          transform: translateX(-10px);\n  -webkit-filter: grayscale(100%) invert(1);\n  -moz-filter: grayscale(100%) invert(1);\n  -ms-filter: grayscale(100%) invert(1);\n  -o-filter: grayscale(100%) invert(1);\n  filter: grayscale(100%) invert(1);\n}\n.social .share.hide, .social .share:hover {\n  opacity: 0;\n}\n.social ul {\n  margin: auto;\n  list-style: none;\n  height: 250px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n.social ul li {\n  width: 55px;\n  height: 55px;\n  line-height: 50px;\n  margin: 5px 0 5px 12px;\n  text-align: center;\n  cursor: pointer;\n  border-radius: 50%;\n  border: 3px solid #D8E2DC;\n  float: left;\n  -webkit-transition: all 0.5s ease;\n  transition: all 0.5s ease;\n}\n.social ul li .fab {\n  color: #D8E2DC;\n  margin-top: 10px;\n  -webkit-transition: all 0.5s ease;\n  transition: all 0.5s ease;\n}\n.social ul li:hover.facebook {\n  border: 5px solid #3b5998;\n  box-shadow: 0 0 15px #3b5998;\n  -webkit-transition: all 0.5s ease;\n  transition: all 0.5s ease;\n}\n.social ul li:hover .fa-facebook-f {\n  color: #3b5998;\n  text-shadow: 0 0 15px #3b5998;\n  -webkit-transition: all 0.5s ease;\n  transition: all 0.5s ease;\n}\n.social ul li:hover.linkedin {\n  border: 5px solid #c316dc;\n  box-shadow: 0 0 15px #c316dc;\n  -webkit-transition: all 0.5s ease;\n  transition: all 0.5s ease;\n}\n.social ul li:hover .fa-linkedin-in {\n  color: #c316dc;\n  text-shadow: 0 0 15px #c316dc;\n  -webkit-transition: all 0.5s ease;\n  transition: all 0.5s ease;\n}\n.social ul li:hover.github {\n  border: 5px solid #c5221f;\n  box-shadow: 0 0 15px #c5221f;\n  -webkit-transition: all 0.5s ease;\n  transition: all 0.5s ease;\n}\n.social ul li:hover .fa-github-alt {\n  color: #c5221f;\n  text-shadow: 0 0 15px #c5221f;\n  -webkit-transition: all 0.5s ease;\n  transition: all 0.5s ease;\n}\n.social ul li:hover.telegram {\n  -webkit-filter: invert(1);\n          filter: invert(1);\n  border: 5px solid #00aced;\n  box-shadow: 0 0 15px #00aced;\n  -webkit-transition: all 0.5s ease;\n  transition: all 0.5s ease;\n}\n.social ul li:hover .fa-telegram, .social ul li:hover .fa-telegram-plane {\n  color: #00aced;\n  text-shadow: 0 0 15px #00aced;\n  -webkit-transition: all 0.5s ease;\n  transition: all 0.5s ease;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyLWhvbWUvQzpcXFVzZXJzXFxBZG1pblxcRGVza3RvcFxcbXlQb3J0Zm9saW8vc3JjXFxhcHBcXGhlYWRlci1ob21lXFxoZWFkZXItaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaGVhZGVyLWhvbWUvaGVhZGVyLWhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsbUZBQUE7QUFDQSw2RUFBQTtBQUNBLDJFQUFBO0FBQ0EseUVBQUE7QUFJUjtFQUVFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0FDSEY7QURLRTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxPQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsbUJBQUE7QUNISjtBRElJO0VBQ0UsWUFBQTtFQUNBLFVBQUE7QUNGTjtBREdNO0VBQ0UsV0FBQTtFQUNBLDZCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0FDRFI7QURHUTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBQ0RWO0FERVU7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFHQSxjQXZDQTtFQXdDQSxxQkFBQTtBQ0ZaO0FEU0U7RUFDRSxVQUFBO0VBQ0Esc0JBQUE7RUFBQSxjQUFBO0VBQ0Esc0NBQUE7VUFBQSw4QkFBQTtFQUNBLDZCQUFBO1VBQUEscUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUNQSjtBRFNFO0VBQ0UsVUFBQTtFQUNBLHNCQUFBO0VBQUEsY0FBQTtBQ1BKO0FEU0U7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtFQUFBLGVBQUE7RUFDQSxzQ0FBQTtVQUFBLDhCQUFBO0VBQ0EsMkJBQUE7VUFBQSxtQkFBQTtBQ1BKO0FEU0U7RUFD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LGlDQUFBO0VBQUEseUJBQUE7QUNyQ1I7QUQyQ1E7RUFDRSx5QkFBQTtFQUNBLDRCQUFBO0VBQ0EsaUNBQUE7RUFBQSx5QkFBQTtBQ3pDVjtBRDJDUTtFQUNFLGNBUFM7RUFRVCw2QkFBQTtFQUNBLGlDQUFBO0VBQUEseUJBQUE7QUN6Q1Y7QUQ4Q1E7RUFDRSx5QkFBQTtFQUNBLDRCQUFBO0VBQ0EsaUNBQUE7RUFBQSx5QkFBQTtBQzVDVjtBRDhDUTtFQUNFLGNBUFM7RUFRVCw2QkFBQTtFQUNBLGlDQUFBO0VBQUEseUJBQUE7QUM1Q1Y7QURnRFE7RUFDRSx5QkFBQTtFQUNBLDRCQUFBO0VBQ0EsaUNBQUE7RUFBQSx5QkFBQTtBQzlDVjtBRGdEUTtFQUNFLGNBUE87RUFRUCw2QkFBQTtFQUNBLGlDQUFBO0VBQUEseUJBQUE7QUM5Q1Y7QURrRFE7RUFDRSx5QkFBQTtVQUFBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSw0QkFBQTtFQUNBLGlDQUFBO0VBQUEseUJBQUE7QUNoRFY7QURrRFE7RUFDRSxjQVJTO0VBU1QsNkJBQUE7RUFDQSxpQ0FBQTtFQUFBLHlCQUFBO0FDaERWIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyLWhvbWUvaGVhZGVyLWhvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1TdGFyZG9zK1N0ZW5jaWwmZGlzcGxheT1zd2FwXCIpO1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUFtYXRpYytTQyZkaXNwbGF5PXN3YXAnKTtcclxuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UG9wcGlucyZkaXNwbGF5PXN3YXBcIik7XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9QXJpbW8mZGlzcGxheT1zd2FwJyk7XHJcblxyXG4kbWFpbkNvbG9yOiAjZmZmZmZmO1xyXG5cclxuaGVhZGVyIHtcclxuICAvLyBoZWlnaHQ6IDgwdmg7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIG1heC1oZWlnaHQ6IDgwdmg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgbmF2IHtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRvcDogNSU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgIC5tZW51IHtcclxuICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICB3aWR0aDogNDUlO1xyXG4gICAgICB1bCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgICAgICAgbGkge1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xyXG4gICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjdweDtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgICAgICAgICAgLy8gY29sb3I6ICNkNWQ4MTY7XHJcbiAgICAgICAgICAgIC8vIGNvbG9yOiAjZWJlZjBjO1xyXG4gICAgICAgICAgICBjb2xvcjogJG1haW5Db2xvcjtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaW1nIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB0cmFuc2l0aW9uOiAxcztcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbSByaWdodDtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgaW1nLmFwcGVhcmFuY2VJbWFnZSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdHJhbnNpdGlvbjogMXM7XHJcbiAgfVxyXG4gIGltZy5zY2FsZWRJbWFnZSB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgbWFyZ2luOiAtMXB4O1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHRyYW5zaXRpb246IDI0cztcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbSByaWdodDtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgfVxyXG4gIC5wb3BNZXNzYWdlIHtcclxuICAgIHotaW5kZXg6IDM7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDIwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGxlZnQ6IGNhbGMoNTAlIC0gMjIwcHgpO1xyXG4gICAgZm9udC1mYW1pbHk6ICAnUG9wcGlucycsIGN1cnNpdmU7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiA1MHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDU1cHg7XHJcbiAgICAvLyBjb2xvcjogI2Q1ZDgxNjtcclxuICAgIC8vIGNvbG9yOiAjZWJlZjBjO1xyXG4gICAgY29sb3I6ICRtYWluQ29sb3I7XHJcbiAgICAuZmlyc3RNZXNzYWdlLFxyXG4gICAgLnNlY29uZE1lc3NhZ2Uge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICB6LWluZGV4OiAzO1xyXG4gICAgICB3aWR0aDogMTIwMHB4O1xyXG4gICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICAgIGxlZnQ6IGNhbGMoNTAlIC0gMTAwMHB4KTtcclxuICAgICAgdG9wOiAzMCU7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBtYXJnaW46IDEwcHggMDtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgcGFkZGluZzogMTZweCAwO1xyXG4gICAgICAvLyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMzIwJSk7XHJcbiAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgIC5iZyB7XHJcbiAgICAgICAgei1pbmRleDogNDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDAlO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1nL3doaXRlLmpwZ1wiKTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSAwJSwgMCUgMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgfVxyXG4gICAgICBwIHtcclxuICAgICAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICAgICAgY29sb3I6ICNlNGU0ZTQ7XHJcbiAgICAgICAgd2lkdGg6IDEyMDBweDtcclxuICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuc2Vjb25kTWVzc2FnZSB7XHJcbiAgICAgIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNDVweDtcclxuICAgICAgICBjb2xvcjogIzQ5NjNjMztcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIEBrZXlmcmFtZXMgcG9wQmxvY2sge1xyXG4gICAgICAwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAvLyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMzIwJSk7XHJcbiAgICAgIH1cclxuICAgICAgMTAwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAvLyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMzIwJSk7XHJcbiAgICAgIH1cclxuICAgICAgLy8gNTElIHtcclxuICAgICAgLy8gICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIC8vICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xyXG4gICAgICAvLyB9XHJcbiAgICAgIC8vIDEwMCUge1xyXG4gICAgICAvLyAgICAgb3BhY2l0eTogMTtcclxuICAgICAgLy8gICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XHJcbiAgICAgIC8vIH1cclxuICAgIH1cclxuICAgIEBrZXlmcmFtZXMgcG9wQkcge1xyXG4gICAgICAwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICBoZWlnaHQ6IDAlO1xyXG4gICAgICB9XHJcbiAgICAgIDUwJSB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgMCU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIDEwMCUge1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIC04MCU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIEBrZXlmcmFtZXMgcG9wVGV4dCB7XHJcbiAgICAgIDAlIHtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICB9XHJcbiAgICAgIDUwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgfVxyXG4gICAgICA1MSUge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIH1cclxuICAgICAgMTAwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLlN0YXJ0UG9wTWVzc2FnZUZpcnN0IHtcclxuICAgICAgYW5pbWF0aW9uOiBwb3BCbG9jayAycyAxIGVhc2UtaW4tb3V0IGZvcndhcmRzO1xyXG4gICAgICAuYmcge1xyXG4gICAgICAgIGFuaW1hdGlvbjogcG9wQkcgMnMgMSBmb3J3YXJkcztcclxuICAgICAgfVxyXG4gICAgICBwIHtcclxuICAgICAgICBhbmltYXRpb246IHBvcFRleHQgMnMgMSBlYXNlLWluLW91dCBmb3J3YXJkcztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLlN0YXJ0UG9wTWVzc2FnZVNlY29uZCB7XHJcbiAgICAgIGFuaW1hdGlvbjogcG9wQmxvY2sgMnMgMSBlYXNlLWluLW91dCBmb3J3YXJkcztcclxuICAgICAgLmJnIHtcclxuICAgICAgICBhbmltYXRpb246IHBvcEJHIDJzIDEgZm9yd2FyZHM7XHJcbiAgICAgIH1cclxuICAgICAgcCB7XHJcbiAgICAgICAgYW5pbWF0aW9uOiBwb3BUZXh0IDJzIDEgZWFzZS1pbi1vdXQgZm9yd2FyZHM7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgJGFjdGl2ZUJ1dHRvbjogI2ZmZmZmZjtcclxuICAuc3RhcnRCdXR0b24ge1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgYm90dG9tOiAxMCU7XHJcbiAgICAgIGxlZnQ6IGNhbGMoNTAlIC0gMTYwLjVweCk7XHJcbiAgICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgICAgIGF7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICB9XHJcbiAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDRweCAxcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcclxuICAgICAgfVxyXG4gICAgZGl2IHtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICBwYWRkaW5nOiAxZW0gMmVtO1xyXG4gICAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAycHggcmdiYSgwLCAwLCAwLCAwKTtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuXHJcbiAgICAgICY6OmJlZm9yZSxcclxuICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgIGJveC1zaXppbmc6IGluaGVyaXQ7XHJcbiAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjI1cztcclxuXHJcbiAgICAgICY6OmJlZm9yZSxcclxuICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgICAgIHdpZHRoOiAwO1xyXG4gICAgICAgIGhlaWdodDogMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgfVxyXG4gICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xyXG4gICAgICAgIHRyYW5zaXRpb246IDFzO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wODkpO1xyXG4gICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzcHgpO1xyXG4gICAgICAgIGNvbG9yOiAkYWN0aXZlQnV0dG9uO1xyXG5cclxuICAgICAgICAmOjpiZWZvcmUsXHJcbiAgICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgYm9yZGVyLXRvcC1jb2xvcjogJGFjdGl2ZUJ1dHRvbjtcclxuICAgICAgICAgIGJvcmRlci1yaWdodC1jb2xvcjogJGFjdGl2ZUJ1dHRvbjtcclxuICAgICAgICAgIHRyYW5zaXRpb246IHdpZHRoIDAuMjVzIGVhc2Utb3V0LCBoZWlnaHQgMC4yNXMgZWFzZS1vdXQgMC4yNXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmOjphZnRlciB7XHJcbiAgICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiAkYWN0aXZlQnV0dG9uO1xyXG4gICAgICAgICAgYm9yZGVyLWxlZnQtY29sb3I6ICRhY3RpdmVCdXR0b247XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMHMgZWFzZS1vdXQgMC41cywgd2lkdGggMC4yNXMgZWFzZS1vdXQgMC41cywgaGVpZ2h0IDAuMjVzIGVhc2Utb3V0IDAuNzVzO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnNvY2lhbHtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICB0cmFuc2l0aW9uOiAxcztcclxuICAvLyBwYWRkaW5nOiAxNnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMyOSk7XHJcbiAgLy8gYmFja2Ryb3AtZmlsdGVyOiBibHVyKDhweCk7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHdpZHRoOiA4MHB4O1xyXG4gIC8vIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMTVweCk7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgLy8gdG9wOiBjYWxjKDUwJSAtIDIwNnB4KTtcclxuICBwYWRkaW5nLWxlZnQ6IDEwMHB4O1xyXG4gIHotaW5kZXg6IDEwMDtcclxuICAmOmhvdmVye1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICB9XHJcbiAgLnNoYXJle1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGltZ3tcclxuICAgICAgXHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIH1cclxuICAgIGEsaW1ne1xyXG4gICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTBweCk7XHJcbiAgICAgIC13ZWJraXQtZmlsdGVyOiBncmF5c2NhbGUoMTAwJSkgaW52ZXJ0KDEpO1xyXG4gICAgICAtbW96LWZpbHRlcjogZ3JheXNjYWxlKDEwMCUpIGludmVydCgxKTtcclxuICAgICAgLW1zLWZpbHRlcjogZ3JheXNjYWxlKDEwMCUpIGludmVydCgxKTtcclxuICAgICAgLW8tZmlsdGVyOiBncmF5c2NhbGUoMTAwJSkgaW52ZXJ0KDEpO1xyXG4gICAgICBmaWx0ZXI6IGdyYXlzY2FsZSgxMDAlKSBpbnZlcnQoMSk7XHJcbiAgICB9XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwcHgpO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgICAmLmhpZGUsICY6aG92ZXJ7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHVsIHtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBoZWlnaHQ6IDI1MHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBsaSB7XHJcbiAgICAgIHdpZHRoOiA1NXB4O1xyXG4gICAgICBoZWlnaHQ6IDU1cHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xyXG4gICAgICBtYXJnaW46IDVweCAwIDVweCAxMnB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICBib3JkZXI6IDNweCBzb2xpZCAjRDhFMkRDO1xyXG4gICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcclxuICAgICAgLmZhYiB7XHJcbiAgICAgICAgY29sb3I6ICNEOEUyREM7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xyXG4gICAgICB9XHJcbiAgICAgICY6aG92ZXJ7XHJcblxyXG5cclxuICAgICAgICAkZmFjZWJvb2s6ICMzYjU5OTg7XHJcbiAgICAgICAgJi5mYWNlYm9va3tcclxuICAgICAgICAgIGJvcmRlcjogNXB4IHNvbGlkICRmYWNlYm9vaztcclxuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAxNXB4ICRmYWNlYm9vaztcclxuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mYS1mYWNlYm9vay1me1xyXG4gICAgICAgICAgY29sb3I6ICRmYWNlYm9vaztcclxuICAgICAgICAgIHRleHQtc2hhZG93OiAwIDAgMTVweCAkZmFjZWJvb2s7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuXHJcbiAgICAgICAgJGxpbmtlZGluOiAjYzMxNmRjO1xyXG4gICAgICAgICYubGlua2VkaW4ge1xyXG4gICAgICAgICAgYm9yZGVyOiA1cHggc29saWQgJGxpbmtlZGluO1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogMCAwIDE1cHggJGxpbmtlZGluO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmZhLWxpbmtlZGluLWluIHtcclxuICAgICAgICAgIGNvbG9yOiAkbGlua2VkaW47XHJcbiAgICAgICAgICB0ZXh0LXNoYWRvdzogMCAwIDE1cHggJGxpbmtlZGluO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICRnaXRodWI6ICNjNTIyMWY7XHJcbiAgICAgICAgJi5naXRodWIge1xyXG4gICAgICAgICAgYm9yZGVyOiA1cHggc29saWQgJGdpdGh1YjtcclxuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAxNXB4ICRnaXRodWI7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZmEtZ2l0aHViLWFsdCB7XHJcbiAgICAgICAgICBjb2xvcjogJGdpdGh1YjtcclxuICAgICAgICAgIHRleHQtc2hhZG93OiAwIDAgMTVweCAkZ2l0aHViO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICR0ZWxlZ3JhbTogIzAwYWNlZDtcclxuICAgICAgICAmLnRlbGVncmFtIHtcclxuICAgICAgICAgIGZpbHRlcjogaW52ZXJ0KDEpO1xyXG4gICAgICAgICAgYm9yZGVyOiA1cHggc29saWQgJHRlbGVncmFtO1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogMCAwIDE1cHggJHRlbGVncmFtO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmZhLXRlbGVncmFtLCAuZmEtdGVsZWdyYW0tcGxhbmUge1xyXG4gICAgICAgICAgY29sb3I6ICR0ZWxlZ3JhbTtcclxuICAgICAgICAgIHRleHQtc2hhZG93OiAwIDAgMTVweCAkdGVsZWdyYW07XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgfVxyXG59XHJcblxyXG5cclxuIiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9U3RhcmRvcytTdGVuY2lsJmRpc3BsYXk9c3dhcFwiKTtcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUFtYXRpYytTQyZkaXNwbGF5PXN3YXBcIik7XG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Qb3BwaW5zJmRpc3BsYXk9c3dhcFwiKTtcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUFyaW1vJmRpc3BsYXk9c3dhcFwiKTtcbmhlYWRlciB7XG4gIGhlaWdodDogYXV0bztcbiAgbWF4LWhlaWdodDogODB2aDtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbn1cbmhlYWRlciBuYXYge1xuICB6LWluZGV4OiAyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICB0b3A6IDUlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuaGVhZGVyIG5hdiAubWVudSB7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IDQ1JTtcbn1cbmhlYWRlciBuYXYgLm1lbnUgdWwge1xuICB3aWR0aDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5oZWFkZXIgbmF2IC5tZW51IHVsIGxpIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IGF1dG87XG4gIGNvbG9yOiAjZmZmO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5oZWFkZXIgbmF2IC5tZW51IHVsIGxpIGEge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAyN3B4O1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuaGVhZGVyIGltZyB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IDFzO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b20gcmlnaHQ7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDEwMCU7XG59XG5oZWFkZXIgaW1nLmFwcGVhcmFuY2VJbWFnZSB7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zaXRpb246IDFzO1xufVxuaGVhZGVyIGltZy5zY2FsZWRJbWFnZSB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIG1hcmdpbjogLTFweDtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNpdGlvbjogMjRzO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b20gcmlnaHQ7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG59XG5oZWFkZXIgLnBvcE1lc3NhZ2Uge1xuICB6LWluZGV4OiAzO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjAlO1xuICBtYXJnaW46IGF1dG87XG4gIGxlZnQ6IGNhbGMoNTAlIC0gMjIwcHgpO1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIGN1cnNpdmU7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiA1MHB4O1xuICBsaW5lLWhlaWdodDogNTVweDtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5oZWFkZXIgLnBvcE1lc3NhZ2UgLmZpcnN0TWVzc2FnZSxcbmhlYWRlciAucG9wTWVzc2FnZSAuc2Vjb25kTWVzc2FnZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG9wYWNpdHk6IDA7XG4gIHotaW5kZXg6IDM7XG4gIHdpZHRoOiAxMjAwcHg7XG4gIGhlaWdodDogODBweDtcbiAgbGVmdDogY2FsYyg1MCUgLSAxMDAwcHgpO1xuICB0b3A6IDMwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMTBweCAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwYWRkaW5nOiAxNnB4IDA7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG5oZWFkZXIgLnBvcE1lc3NhZ2UgLmZpcnN0TWVzc2FnZSAuYmcsXG5oZWFkZXIgLnBvcE1lc3NhZ2UgLnNlY29uZE1lc3NhZ2UgLmJnIHtcbiAgei1pbmRleDogNDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1nL3doaXRlLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgMCUsIDAlIDAlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuaGVhZGVyIC5wb3BNZXNzYWdlIC5maXJzdE1lc3NhZ2UgcCxcbmhlYWRlciAucG9wTWVzc2FnZSAuc2Vjb25kTWVzc2FnZSBwIHtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBjb2xvcjogI2U0ZTRlNDtcbiAgd2lkdGg6IDEyMDBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHotaW5kZXg6IDE7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5oZWFkZXIgLnBvcE1lc3NhZ2UgLnNlY29uZE1lc3NhZ2UgcCB7XG4gIGZvbnQtc2l6ZTogNDVweDtcbiAgY29sb3I6ICM0OTYzYzM7XG4gIG1hcmdpbjogYXV0bztcbn1cbkBrZXlmcmFtZXMgcG9wQmxvY2sge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHBvcEJHIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgaGVpZ2h0OiAwJTtcbiAgfVxuICA1MCUge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDAlO1xuICB9XG4gIDEwMCUge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIC04MCU7XG4gIH1cbn1cbkBrZXlmcmFtZXMgcG9wVGV4dCB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDUwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICA1MSUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuaGVhZGVyIC5wb3BNZXNzYWdlIC5TdGFydFBvcE1lc3NhZ2VGaXJzdCB7XG4gIGFuaW1hdGlvbjogcG9wQmxvY2sgMnMgMSBlYXNlLWluLW91dCBmb3J3YXJkcztcbn1cbmhlYWRlciAucG9wTWVzc2FnZSAuU3RhcnRQb3BNZXNzYWdlRmlyc3QgLmJnIHtcbiAgYW5pbWF0aW9uOiBwb3BCRyAycyAxIGZvcndhcmRzO1xufVxuaGVhZGVyIC5wb3BNZXNzYWdlIC5TdGFydFBvcE1lc3NhZ2VGaXJzdCBwIHtcbiAgYW5pbWF0aW9uOiBwb3BUZXh0IDJzIDEgZWFzZS1pbi1vdXQgZm9yd2FyZHM7XG59XG5oZWFkZXIgLnBvcE1lc3NhZ2UgLlN0YXJ0UG9wTWVzc2FnZVNlY29uZCB7XG4gIGFuaW1hdGlvbjogcG9wQmxvY2sgMnMgMSBlYXNlLWluLW91dCBmb3J3YXJkcztcbn1cbmhlYWRlciAucG9wTWVzc2FnZSAuU3RhcnRQb3BNZXNzYWdlU2Vjb25kIC5iZyB7XG4gIGFuaW1hdGlvbjogcG9wQkcgMnMgMSBmb3J3YXJkcztcbn1cbmhlYWRlciAucG9wTWVzc2FnZSAuU3RhcnRQb3BNZXNzYWdlU2Vjb25kIHAge1xuICBhbmltYXRpb246IHBvcFRleHQgMnMgMSBlYXNlLWluLW91dCBmb3J3YXJkcztcbn1cbmhlYWRlciAuc3RhcnRCdXR0b24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxMCU7XG4gIGxlZnQ6IGNhbGMoNTAlIC0gMTYwLjVweCk7XG4gIHRyYW5zaXRpb246IDAuM3M7XG59XG5oZWFkZXIgLnN0YXJ0QnV0dG9uIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5oZWFkZXIgLnN0YXJ0QnV0dG9uOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMCAwIDRweCAxcHggd2hpdGU7XG59XG5oZWFkZXIgLnN0YXJ0QnV0dG9uIGRpdiB7XG4gIG9wYWNpdHk6IDA7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcGFkZGluZzogMWVtIDJlbTtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMnB4IHJnYmEoMCwgMCwgMCwgMCk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMjVzO1xufVxuaGVhZGVyIC5zdGFydEJ1dHRvbiBkaXY6OmJlZm9yZSwgaGVhZGVyIC5zdGFydEJ1dHRvbiBkaXY6OmFmdGVyIHtcbiAgYm94LXNpemluZzogaW5oZXJpdDtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuaGVhZGVyIC5zdGFydEJ1dHRvbiBkaXY6OmJlZm9yZSwgaGVhZGVyIC5zdGFydEJ1dHRvbiBkaXY6OmFmdGVyIHtcbiAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG59XG5oZWFkZXIgLnN0YXJ0QnV0dG9uIGRpdjo6YmVmb3JlIHtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xufVxuaGVhZGVyIC5zdGFydEJ1dHRvbiBkaXY6OmFmdGVyIHtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbn1cbmhlYWRlciAuc3RhcnRCdXR0b24gZGl2LmFjdGl2ZSB7XG4gIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcbiAgdHJhbnNpdGlvbjogMXM7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wODkpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5oZWFkZXIgLnN0YXJ0QnV0dG9uIGRpdi5hY3RpdmU6OmJlZm9yZSwgaGVhZGVyIC5zdGFydEJ1dHRvbiBkaXYuYWN0aXZlOjphZnRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5oZWFkZXIgLnN0YXJ0QnV0dG9uIGRpdi5hY3RpdmU6OmJlZm9yZSB7XG4gIGJvcmRlci10b3AtY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1yaWdodC1jb2xvcjogI2ZmZmZmZjtcbiAgdHJhbnNpdGlvbjogd2lkdGggMC4yNXMgZWFzZS1vdXQsIGhlaWdodCAwLjI1cyBlYXNlLW91dCAwLjI1cztcbn1cbmhlYWRlciAuc3RhcnRCdXR0b24gZGl2LmFjdGl2ZTo6YWZ0ZXIge1xuICBib3JkZXItYm90dG9tLWNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXItbGVmdC1jb2xvcjogI2ZmZmZmZjtcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDBzIGVhc2Utb3V0IDAuNXMsIHdpZHRoIDAuMjVzIGVhc2Utb3V0IDAuNXMsIGhlaWdodCAwLjI1cyBlYXNlLW91dCAwLjc1cztcbn1cblxuLnNvY2lhbCB7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHRyYW5zaXRpb246IDFzO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogODBweDtcbiAgcmlnaHQ6IDA7XG4gIHBhZGRpbmctbGVmdDogMTAwcHg7XG4gIHotaW5kZXg6IDEwMDtcbn1cbi5zb2NpYWw6aG92ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG59XG4uc29jaWFsIC5zaGFyZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MHB4KTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDEwMHZoO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xufVxuLnNvY2lhbCAuc2hhcmUgaW1nIHtcbiAgb3BhY2l0eTogMTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLnNvY2lhbCAuc2hhcmUgYSwgLnNvY2lhbCAuc2hhcmUgaW1nIHtcbiAgbWFyZ2luOiBhdXRvO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwcHgpO1xuICAtd2Via2l0LWZpbHRlcjogZ3JheXNjYWxlKDEwMCUpIGludmVydCgxKTtcbiAgLW1vei1maWx0ZXI6IGdyYXlzY2FsZSgxMDAlKSBpbnZlcnQoMSk7XG4gIC1tcy1maWx0ZXI6IGdyYXlzY2FsZSgxMDAlKSBpbnZlcnQoMSk7XG4gIC1vLWZpbHRlcjogZ3JheXNjYWxlKDEwMCUpIGludmVydCgxKTtcbiAgZmlsdGVyOiBncmF5c2NhbGUoMTAwJSkgaW52ZXJ0KDEpO1xufVxuLnNvY2lhbCAuc2hhcmUuaGlkZSwgLnNvY2lhbCAuc2hhcmU6aG92ZXIge1xuICBvcGFjaXR5OiAwO1xufVxuLnNvY2lhbCB1bCB7XG4gIG1hcmdpbjogYXV0bztcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgaGVpZ2h0OiAyNTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5zb2NpYWwgdWwgbGkge1xuICB3aWR0aDogNTVweDtcbiAgaGVpZ2h0OiA1NXB4O1xuICBsaW5lLWhlaWdodDogNTBweDtcbiAgbWFyZ2luOiA1cHggMCA1cHggMTJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAzcHggc29saWQgI0Q4RTJEQztcbiAgZmxvYXQ6IGxlZnQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XG59XG4uc29jaWFsIHVsIGxpIC5mYWIge1xuICBjb2xvcjogI0Q4RTJEQztcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcbn1cbi5zb2NpYWwgdWwgbGk6aG92ZXIuZmFjZWJvb2sge1xuICBib3JkZXI6IDVweCBzb2xpZCAjM2I1OTk4O1xuICBib3gtc2hhZG93OiAwIDAgMTVweCAjM2I1OTk4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xufVxuLnNvY2lhbCB1bCBsaTpob3ZlciAuZmEtZmFjZWJvb2stZiB7XG4gIGNvbG9yOiAjM2I1OTk4O1xuICB0ZXh0LXNoYWRvdzogMCAwIDE1cHggIzNiNTk5ODtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcbn1cbi5zb2NpYWwgdWwgbGk6aG92ZXIubGlua2VkaW4ge1xuICBib3JkZXI6IDVweCBzb2xpZCAjYzMxNmRjO1xuICBib3gtc2hhZG93OiAwIDAgMTVweCAjYzMxNmRjO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xufVxuLnNvY2lhbCB1bCBsaTpob3ZlciAuZmEtbGlua2VkaW4taW4ge1xuICBjb2xvcjogI2MzMTZkYztcbiAgdGV4dC1zaGFkb3c6IDAgMCAxNXB4ICNjMzE2ZGM7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XG59XG4uc29jaWFsIHVsIGxpOmhvdmVyLmdpdGh1YiB7XG4gIGJvcmRlcjogNXB4IHNvbGlkICNjNTIyMWY7XG4gIGJveC1zaGFkb3c6IDAgMCAxNXB4ICNjNTIyMWY7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XG59XG4uc29jaWFsIHVsIGxpOmhvdmVyIC5mYS1naXRodWItYWx0IHtcbiAgY29sb3I6ICNjNTIyMWY7XG4gIHRleHQtc2hhZG93OiAwIDAgMTVweCAjYzUyMjFmO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xufVxuLnNvY2lhbCB1bCBsaTpob3Zlci50ZWxlZ3JhbSB7XG4gIGZpbHRlcjogaW52ZXJ0KDEpO1xuICBib3JkZXI6IDVweCBzb2xpZCAjMDBhY2VkO1xuICBib3gtc2hhZG93OiAwIDAgMTVweCAjMDBhY2VkO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xufVxuLnNvY2lhbCB1bCBsaTpob3ZlciAuZmEtdGVsZWdyYW0sIC5zb2NpYWwgdWwgbGk6aG92ZXIgLmZhLXRlbGVncmFtLXBsYW5lIHtcbiAgY29sb3I6ICMwMGFjZWQ7XG4gIHRleHQtc2hhZG93OiAwIDAgMTVweCAjMDBhY2VkO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/header-home/header-home.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/header-home/header-home.component.ts ***!
    \******************************************************/

  /*! exports provided: HeaderHomeComponent */

  /***/
  function srcAppHeaderHomeHeaderHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderHomeComponent", function () {
      return HeaderHomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HeaderHomeComponent =
    /*#__PURE__*/
    function () {
      function HeaderHomeComponent() {
        _classCallCheck(this, HeaderHomeComponent);

        this.imageClass = " ";
        this.popClass = " ";
        this.popClass2 = " ";
        this.buttonClass = " ";
        this.shareClass = " ";
      }

      _createClass(HeaderHomeComponent, [{
        key: "hideShare",
        value: function hideShare() {
          this.shareClass = "hide";
        }
      }, {
        key: "showShare",
        value: function showShare() {
          this.shareClass = "show";
        }
      }, {
        key: "viewMyWorks",
        value: function viewMyWorks() {
          window.scrollTo({
            top: this.heightWindow,
            behavior: 'smooth'
          });
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this = this;

          this.heightWindow = window.innerHeight * 0.8;
          setTimeout(function () {
            _this.imageClass = "appearanceImage";
          }, 0);
          setTimeout(function () {
            _this.imageClass = "scaledImage";
          }, 500);
          setTimeout(function () {
            _this.popClass = "StartPopMessageFirst";
            setTimeout(function () {
              _this.popClass2 = "StartPopMessageSecond";
              setTimeout(function () {
                _this.buttonClass = "active";
              }, 1000);
            }, 1000);
          }, 1000);
        }
      }]);

      return HeaderHomeComponent;
    }();

    HeaderHomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header-home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/header-home/header-home.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header-home.component.scss */
      "./src/app/header-home/header-home.component.scss")).default]
    })], HeaderHomeComponent);
    /***/
  },

  /***/
  "./src/app/home/home.component.scss":
  /*!******************************************!*\
    !*** ./src/app/home/home.component.scss ***!
    \******************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@import url(\"https://fonts.googleapis.com/css?family=Share&display=swap\");\n@import url(\"https://fonts.googleapis.com/css?family=Poppins&display=swap\");\n@import url(\"https://fonts.googleapis.com/css?family=Arimo&display=swap\");\n.main {\n  padding-top: 30px;\n  background-color: #080808;\n  height: 400%;\n  width: 100%;\n  font-family: \"Poppins\", \"Arimo\";\n  margin-top: -1px;\n}\n.main h2 {\n  background-color: #22232763;\n  font-family: \"Share\";\n  letter-spacing: 1.5px;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  text-align: center;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 30px;\n  line-height: 30px;\n  color: #8d8d8c;\n}\n.main .works {\n  padding: 2% 0;\n  overflow: hidden;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n@-webkit-keyframes popCaruselNews {\n  0% {\n    margin: 0 15%;\n    height: 0;\n  }\n  40% {\n    height: 100%;\n    margin: 0 15%;\n  }\n  100% {\n    margin: 0 15%;\n  }\n}\n@keyframes popCaruselNews {\n  0% {\n    margin: 0 15%;\n    height: 0;\n  }\n  40% {\n    height: 100%;\n    margin: 0 15%;\n  }\n  100% {\n    margin: 0 15%;\n  }\n}\n.main .works .name {\n  font-style: normal;\n  font-weight: 300;\n  font-size: 24px;\n  line-height: 28px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  text-align: center;\n  margin: 0 auto 32px auto;\n  color: #ffffff;\n}\n.main .works .project {\n  margin-top: 20px;\n  padding-top: 60px;\n  margin-bottom: 20px;\n  padding-bottom: 20px;\n  box-shadow: 0 -2px 1px 0.5px #525252;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n}\n.main .works .project:first-child {\n  padding-top: 0px;\n  margin-top: 0px;\n  box-shadow: 0 0 0 0;\n}\n.main .works .project .screenshots {\n  padding: 0 0 0 1%;\n  overflow: hidden;\n  top: 0;\n  left: 0;\n  width: 50%;\n}\n.main .works .project .screenshots .carousel-item.active,\n.main .works .project .screenshots .carousel-item-next,\n.main .works .project .screenshots .carousel-item-prev {\n  display: block;\n}\n.main .works .project .screenshots .carousel-control-prev-icon,\n.main .works .project .screenshots .carousel-control-next-icon {\n  -webkit-filter: invert(0.6);\n          filter: invert(0.6);\n}\n.main .works .project .screenshots .carousel-inner .carousel-item {\n  padding: 0 !important;\n  font-family: \"Poppins\", sans-serif !important;\n}\n.main .works .project .screenshots .carousel-inner .carousel-item img {\n  height: 456px;\n}\n.main .works .project .screenshots .carousel-inner .carousel-item p {\n  margin-top: 10px !important;\n  width: 80%;\n  font-size: 20px;\n  color: white;\n}\n.main .works .project .screenshots .carousel-inner .carousel-item h3 {\n  left: 0;\n  right: 0;\n  display: block;\n  padding: 8px 16px;\n  text-transform: capitalize;\n  font-family: monospace;\n  font-size: 24px;\n  color: #c5c5c5;\n  font-weight: 600;\n  letter-spacing: 1px;\n  background-color: rgba(54, 54, 54, 0.582);\n}\n.main .works .project .technologiesList {\n  margin-bottom: 32px;\n  margin: 0 1%;\n  width: 50%;\n  font-style: normal;\n  font-weight: 300;\n  background: #262626;\n  color: #cecece;\n}\n.main .works .project .technologiesList .aboutProject {\n  font-size: 22px;\n  line-height: 33px;\n  text-align: center;\n  margin: 0;\n  padding: 10px;\n}\n.main .works .project .technologiesList .aboutProject p {\n  text-align: justify;\n  font-size: 20px;\n}\n.main .works .project .technologiesList ul {\n  font-size: 22px;\n  line-height: 33px;\n  text-align: center;\n  margin: 0;\n  counter-reset: li;\n  list-style: none;\n  padding: 10px;\n}\n.main .works .project .technologiesList ul li {\n  margin-top: 12px;\n  font-size: 20px;\n  line-height: 28px;\n  text-align: left;\n  position: relative;\n  margin: 0 0 10px 2em;\n  padding: 4px 8px;\n  border-top: 2px solid #393b37;\n  -webkit-transition: 0.3s linear;\n  transition: 0.3s linear;\n}\n.main .works .project .technologiesList ul li:last-child {\n  margin-bottom: 0;\n}\n.main .works .project .technologiesList ul li:before {\n  content: counter(li);\n  counter-increment: li;\n  position: absolute;\n  top: -2px;\n  left: -2em;\n  width: 2em;\n  box-sizing: border-box;\n  margin-right: 8px;\n  padding: 4px;\n  border-top: 2px solid #787a77;\n  border-left: 2px solid transparent;\n  border-right: 2px solid transparent;\n  border-bottom: 2px solid transparent;\n  background: #5c5e5b;\n  color: #cecece;\n  font-weight: bold;\n  text-align: center;\n  -webkit-transition: 0.3s linear;\n  transition: 0.3s linear;\n}\n.main .works .button {\n  width: 280px;\n  height: 40px;\n  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 12px;\n  margin: 24px auto 0 auto;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  color: #3c3e51;\n}\n.main .works .button.button_git {\n  width: 200px;\n}\n.main .works .button.button_git .github_button {\n  border-top-left-radius: 12px;\n  border-bottom-left-radius: 12px;\n  width: 200px;\n  border: 0;\n}\n.main .works .button .Open_site,\n.main .works .button .github_button {\n  width: 50%;\n  margin: auto;\n  text-align: center;\n  height: 100%;\n  display: -webkit-box;\n  display: flex;\n  text-decoration: none;\n}\n.main .works .button .Open_site:active, .main .works .button .Open_site:visited,\n.main .works .button .github_button:active,\n.main .works .button .github_button:visited {\n  color: #3c3e51;\n}\n.main .works .button .Open_site > div,\n.main .works .button .github_button > div {\n  margin: auto;\n}\n.main .works .button .Open_site {\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n  border-top-left-radius: 12px;\n  border-bottom-left-radius: 12px;\n}\n.main .works .button .Open_site:hover {\n  background: #11163a;\n  color: #e7e1e1;\n}\n.main .works .button .github_button {\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n  border-top-right-radius: 12px;\n  border-bottom-right-radius: 12px;\n}\n.main .works .button .github_button:hover {\n  color: #e7e1e1;\n  background: #12141f;\n}\n.main .works .button .github_button {\n  border-left: solid #3c3e51 1px;\n}\n.main .button {\n  margin: 2% auto 4% auto;\n  width: 280px;\n  height: 50px;\n  border-radius: 8px;\n  display: -webkit-box;\n  display: flex;\n  background: linear-gradient(74.31deg, #181c3b 4.17%, #171715 120.48%);\n}\n.main .button a {\n  color: #fff !important;\n  -webkit-box-pack: center;\n          justify-content: center;\n  width: 100%;\n  height: 100%;\n  margin: auto;\n  font-family: \"Share\", cursive;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 22px;\n  line-height: 45px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  text-align: center;\n  letter-spacing: 0.085em;\n  color: #96aaaa;\n  text-decoration: none;\n}\n.main .aboutUs {\n  margin-top: 20px;\n  padding-bottom: 10px;\n}\n.main .aboutUs .button {\n  margin-bottom: 20px;\n}\n.main .aboutUs .textBlock {\n  font-family: \"Arimo\";\n  box-shadow: 0px 0px 2px 1px #797979;\n  margin: auto;\n  max-height: -webkit-max-content;\n  max-height: -moz-max-content;\n  max-height: max-content;\n  width: 90%;\n  background: -webkit-gradient(linear, left top, left bottom, from(#171715), color-stop(#37363521), color-stop(#37363528), to(#171715)), -webkit-gradient(linear, left top, right top, from(#171715), color-stop(#373635), color-stop(#373635), to(#171715));\n  background: linear-gradient(180deg, #171715, #37363521, #37363528, #171715), linear-gradient(90deg, #171715, #373635, #373635, #171715);\n  background-size: cover;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 25px;\n  line-height: 65px;\n  text-align: center;\n  color: #b3b3b3;\n}\n.main .aboutUs .textBlock p {\n  padding: 32px;\n  text-align: justify;\n}\n.main .contactForm .social {\n  width: 162px;\n  margin: auto;\n  margin-top: 20px;\n}\n.main .contactForm .social a {\n  -webkit-filter: grayscale(100%);\n          filter: grayscale(100%);\n  text-align: center;\n  margin: 4px;\n  padding: 1px;\n  width: 200px;\n  box-sizing: border-box;\n  -webkit-backdrop-filter: blur(4px);\n          backdrop-filter: blur(4px);\n  border-radius: 7px;\n}\n.main .contactForm .contact_form {\n  color: #ebebeb;\n  width: 60%;\n  margin: auto;\n  margin-top: 20px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n.main .contactForm .contact_form .infoFields label,\n.main .contactForm .contact_form .messageField label {\n  color: #363636;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 16px;\n}\n.main .contactForm .contact_form > div {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  box-shadow: 0px 0px 4px 0px grey;\n  padding: 30px 20px;\n}\n.main .contactForm .contact_form > div .message {\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  position: relative;\n}\n.main .contactForm .contact_form > div .message input {\n  color: #ebebeb;\n  padding: 2px 4px;\n  background-color: #262626;\n  box-shadow: 0px 0px 2px 1px #888888;\n  border: none;\n  outline: none;\n}\n.main .contactForm .contact_form > div .message label {\n  color: white;\n  margin: 10px 0 3px 0;\n}\n.main .contactForm .contact_form > div .message .name,\n.main .contactForm .contact_form > div .message .contact {\n  outline: none;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n.main .contactForm .contact_form > div .message .social {\n  display: -webkit-box;\n  display: flex;\n  min-height: calc(25%);\n}\n.main .contactForm .contact_form > div .message .social .icons {\n  margin: auto;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n}\n.main .contactForm .contact_form > div .message .social .icons .icon {\n  -webkit-filter: invert(0);\n          filter: invert(0);\n  width: calc(42px * 1);\n  height: calc(42px * 1);\n  background: url(\"/img/social-icons.png\") no-repeat;\n  background-size: calc(500px * 1), calc(500px * 1);\n}\n.main .contactForm .contact_form > div .message .social .icons .facebook {\n  background-position: calc(-25px * 1) calc(-25px * 1);\n}\n.main .contactForm .contact_form > div .message .social .icons .telegram {\n  background-position: calc(-160px * 1) calc(-115px * 1);\n}\n.main .contactForm .contact_form > div .message .social .icons .instagram {\n  background-position: calc(-160px * 1) calc(-25px * 1);\n}\n.main .contactForm .contact_form > div .message .messageField {\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  position: relative;\n  margin: auto;\n  margin-bottom: 0;\n  margin-right: 0;\n}\n.main .contactForm .contact_form > div .message .messageField textarea {\n  color: #ebebeb;\n  padding: 8px;\n  width: 100%;\n  height: 290px;\n  box-shadow: 0px 0px 2px 1px #888888;\n  border: none;\n  background: #262626;\n}\n.main .contactForm .contact_form > div .message .messageField textarea:focus {\n  outline: none;\n}\n.main .contactForm .contact_form .sendForm.button {\n  text-align: center;\n  cursor: pointer;\n  padding: 8px 32px;\n  padding-left: 59px;\n  margin: auto;\n  margin-top: 32px;\n  margin-bottom: 3%;\n  background: #131313;\n  border: 1px solid #5c5c5c;\n  border-radius: 1px;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 22px;\n  line-height: 28px;\n  color: #ffeaea;\n}\n.main .contactForm .contact_form .required:after {\n  content: \"*\";\n}\n.main .contactForm .success,\n.main .contactForm .error {\n  text-align: center;\n  margin-bottom: 15px;\n  font-weight: 500;\n  font-size: 18px;\n}\n.main .contactForm .success {\n  color: #23b384;\n}\n.main .contactForm .error {\n  color: #b32323;\n}\n.main .contactForm .showMessage {\n  display: block !important;\n}\n@-webkit-keyframes goTop {\n  50% {\n    -webkit-transform: scale(1.017);\n            transform: scale(1.017);\n  }\n}\n@keyframes goTop {\n  50% {\n    -webkit-transform: scale(1.017);\n            transform: scale(1.017);\n  }\n}\n.main .goTop {\n  z-index: 100;\n  cursor: pointer;\n  display: -webkit-box;\n  display: flex;\n  overflow: hidden;\n  width: 40px;\n  height: 40px;\n  margin: 8px;\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  -webkit-filter: grayscale(100%) invert(1) contrast(100);\n  -moz-filter: grayscale(100%) invert(1) contrast(100);\n  -ms-filter: grayscale(100%) invert(1) contrast(100);\n  -o-filter: grayscale(100%) invert(1) contrast(100);\n  filter: grayscale(90%) invert(1) contrast(100);\n}\n.main .goTop a {\n  margin: auto;\n}\n.main .goTop.hideWidget {\n  opacity: 0;\n}\n.main .goTop.showWidget, .main .goTop.hideWidget {\n  border-radius: 50%;\n  box-shadow: 0 0 15px rgba(255, 255, 255, 0);\n  padding: 4px;\n  -webkit-transition: 1s;\n  transition: 1s;\n}\n.main .goTop.showWidget {\n  -webkit-animation: goTop 2s 1 ease-in-out;\n          animation: goTop 2s 1 ease-in-out;\n  opacity: 1;\n}\n.main .goTop.showWidget:hover {\n  box-shadow: 0 0 15px white;\n}\n@media screen and (max-width: 900px) {\n  .project {\n    -webkit-box-orient: vertical !important;\n    -webkit-box-direction: normal !important;\n            flex-direction: column !important;\n  }\n  .project .screenshots, .project .technologiesList {\n    width: 100% !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXEFkbWluXFxEZXNrdG9wXFxteVBvcnRmb2xpby9zcmNcXGFwcFxcaG9tZVxcaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLHlFQUFBO0FBQ0EsMkVBQUE7QUFDQSx5RUFBQTtBQUVSO0VBQ0UsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsK0JBQUE7RUFFQSxnQkFBQTtBQ0RGO0FER0U7RUFDRSwyQkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ0RKO0FER0U7RUFDRSxhQUFBO0VBR0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7QUNISjtBREtJO0VBQ0U7SUFFRSxhQUFBO0lBQ0EsU0FBQTtFQ0pOO0VETUk7SUFDRSxZQUFBO0lBQ0EsYUFBQTtFQ0pOO0VETUk7SUFDRSxhQUFBO0VDSk47QUFDRjtBRFJJO0VBQ0U7SUFFRSxhQUFBO0lBQ0EsU0FBQTtFQ0pOO0VETUk7SUFDRSxZQUFBO0lBQ0EsYUFBQTtFQ0pOO0VETUk7SUFDRSxhQUFBO0VDSk47QUFDRjtBRFFJO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0EsY0FBQTtBQ05OO0FEUUk7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLG9DQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsOEJBQUE7RUFBQSw2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QUFBO0FDbEROO0FEcURFO0VBSUU7SUFDRSwrQkFBQTtZQUFBLHVCQUFBO0VDdERKO0FBQ0Y7QURnREU7RUFJRTtJQUNFLCtCQUFBO1lBQUEsdUJBQUE7RUN0REo7QUFDRjtBRDRERTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSx1REFBQTtFQUNBLG9EQUFBO0VBQ0EsbURBQUE7RUFDQSxrREFBQTtFQUNBLDhDQUFBO0FDMURKO0FEMkRJO0VBQ0UsWUFBQTtBQ3pETjtBRDJESTtFQUNFLFVBQUE7QUN6RE47QUQyREk7RUFHRSxrQkFBQTtFQUNBLDJDQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQUEsY0FBQTtBQzNETjtBRDZESTtFQUNFLHlDQUFBO1VBQUEsaUNBQUE7RUFDQSxVQUFBO0FDM0ROO0FENERNO0VBQ0UsMEJBQUE7QUMxRFI7QURrRUU7RUFDRTtJQUNFLHVDQUFBO0lBQUEsd0NBQUE7WUFBQSxpQ0FBQTtFQy9ESjtFRGdFSTtJQUNFLHNCQUFBO0VDOUROO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1TaGFyZSZkaXNwbGF5PXN3YXBcIik7XHJcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVBvcHBpbnMmZGlzcGxheT1zd2FwXCIpO1xyXG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1BcmltbyZkaXNwbGF5PXN3YXBcIik7XHJcblxyXG4ubWFpbiB7XHJcbiAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA4MDgwODtcclxuICBoZWlnaHQ6IDQwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBcIkFyaW1vXCI7XHJcbiAgLy8gYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzE3MTcxNSAsICMzNzM2MzUyMSAzJSwgIzM3MzYzNTI4IDk3JSwgIzE3MTcxNSksIGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzE3MTcxNSwgIzM3MzYzNSwgIzM3MzYzNSwgIzE3MTcxNSk7XHJcbiAgbWFyZ2luLXRvcDogLTFweDtcclxuICAvLyBiYWNrZ3JvdW5kOiAjMjMyNjJmO1xyXG4gIGgyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMjIzMjc2MztcclxuICAgIGZvbnQtZmFtaWx5OiBcIlNoYXJlXCI7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMS41cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgY29sb3I6ICM4ZDhkOGM7XHJcbiAgfVxyXG4gIC53b3JrcyB7XHJcbiAgICBwYWRkaW5nOiAyJSAwO1xyXG4gICAgLy8gYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMTcxNzE1YTksICMzNzM2MzU0YSAyMCUsIzM3MzYzNTRhIDgwJSwjMTcxNzE1YTkpO1xyXG4gICAgLy8gaGVpZ2h0OiAzMHZoO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgIEBrZXlmcmFtZXMgcG9wQ2FydXNlbE5ld3Mge1xyXG4gICAgICAwJSB7XHJcbiAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogcmdiKDU0LCA0NiwgNDMpO1xyXG4gICAgICAgIG1hcmdpbjogMCAxNSU7XHJcbiAgICAgICAgaGVpZ2h0OiAwO1xyXG4gICAgICB9XHJcbiAgICAgIDQwJSB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbjogMCAxNSU7XHJcbiAgICAgIH1cclxuICAgICAgMTAwJSB7XHJcbiAgICAgICAgbWFyZ2luOiAwIDE1JTtcclxuICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTQsIDQ2LCA0Myk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAubmFtZSB7XHJcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMjhweDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBtYXJnaW46IDAgYXV0byAzMnB4IGF1dG87XHJcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgfVxyXG4gICAgLnByb2plY3Qge1xyXG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICBwYWRkaW5nLXRvcDogNjBweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgLTJweCAxcHggMC41cHggIzUyNTI1MjtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcblxyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDA7XHJcbiAgICAgIH1cclxuICAgICAgLnNjcmVlbnNob3RzIHtcclxuICAgICAgICBwYWRkaW5nOiAwIDAgMCAxJTtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgLy8gbWluLXdpZHRoOiA4MDBweDtcclxuICAgICAgICAvLyBtaW4taGVpZ2h0OiA0MDBweDtcclxuXHJcbiAgICAgICAgLmNhcm91c2VsLWl0ZW0uYWN0aXZlLFxyXG4gICAgICAgIC5jYXJvdXNlbC1pdGVtLW5leHQsXHJcbiAgICAgICAgLmNhcm91c2VsLWl0ZW0tcHJldiB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhcm91c2VsLWNvbnRyb2wtcHJldi1pY29uLFxyXG4gICAgICAgIC5jYXJvdXNlbC1jb250cm9sLW5leHQtaWNvbiB7XHJcbiAgICAgICAgICAgIGZpbHRlcjogaW52ZXJ0KDAuNik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jYXJvdXNlbC1pbm5lciB7XHJcbiAgICAgICAgICAuY2Fyb3VzZWwtaXRlbSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgLy8gb2JqZWN0LWZpdDogY29udGFpbjtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDQ1NnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaDMge1xyXG4gICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogOHB4IDE2cHg7XHJcbiAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcclxuICAgICAgICAgICAgICAvLyBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjYzVjNWM1O1xyXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDU0LCA1NCwgNTQsIDAuNTgyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAudGVjaG5vbG9naWVzTGlzdCB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzJweDtcclxuICAgICAgICBtYXJnaW46IDAgMSU7XHJcbiAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMjYyNjI2O1xyXG4gICAgICAgIGNvbG9yOiByZ2IoMjA2LCAyMDYsIDIwNik7XHJcbiAgICAgICAgLmFib3V0UHJvamVjdCB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMzNweDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB1bCB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMzNweDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIGNvdW50ZXItcmVzZXQ6IGxpO1xyXG4gICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcblxyXG4gICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCAwIDEwcHggMmVtO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA0cHggOHB4O1xyXG4gICAgICAgICAgICBib3JkZXItdG9wOiAycHggc29saWQgIzM5M2IzNztcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4zcyBsaW5lYXI7XHJcblxyXG4gICAgICAgICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICAgICAgICBjb250ZW50OiBjb3VudGVyKGxpKTtcclxuICAgICAgICAgICAgICBjb3VudGVyLWluY3JlbWVudDogbGk7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgIHRvcDogLTJweDtcclxuICAgICAgICAgICAgICBsZWZ0OiAtMmVtO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAyZW07XHJcbiAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiA0cHg7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICM3ODdhNzc7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzVjNWU1YjtcclxuICAgICAgICAgICAgICBjb2xvcjogcmdiKDIwNiwgMjA2LCAyMDYpO1xyXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjNzIGxpbmVhcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmJ1dHRvbiB7XHJcbiAgICAgIHdpZHRoOiAyODBweDtcclxuICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAvLyBiYWNrZ3JvdW5kOiAjZDZkNWRiO1xyXG4gICAgICBib3gtc2hhZG93OiBpbnNldCAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgICBtYXJnaW46IDI0cHggYXV0byAwIGF1dG87XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgIGNvbG9yOiAjM2MzZTUxO1xyXG4gICAgICAmLmJ1dHRvbl9naXQge1xyXG4gICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICAuZ2l0aHViX2J1dHRvbiB7XHJcbiAgICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMnB4O1xyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTJweDtcclxuICAgICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLk9wZW5fc2l0ZSxcclxuICAgICAgLmdpdGh1Yl9idXR0b24ge1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgJjphY3RpdmUsXHJcbiAgICAgICAgJjp2aXNpdGVkIHtcclxuICAgICAgICAgIGNvbG9yOiAjM2MzZTUxO1xyXG4gICAgICAgIH1cclxuICAgICAgICA+IGRpdiB7XHJcbiAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5PcGVuX3NpdGUge1xyXG4gICAgICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTJweDtcclxuICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMnB4O1xyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYigxNywgMjIsIDU4KTtcclxuICAgICAgICAgIGNvbG9yOiByZ2IoMjMxLCAyMjUsIDIyNSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5naXRodWJfYnV0dG9uIHtcclxuICAgICAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMnB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMnB4O1xyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgY29sb3I6IHJnYigyMzEsIDIyNSwgMjI1KTtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYigxOCwgMjAsIDMxKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5naXRodWJfYnV0dG9uIHtcclxuICAgICAgICBib3JkZXItbGVmdDogc29saWQgIzNjM2U1MSAxcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5idXR0b24ge1xyXG4gICAgbWFyZ2luOiAyJSBhdXRvIDQlIGF1dG87XHJcbiAgICB3aWR0aDogMjgwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLy8gYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDc0LjMxZGVnLCAjM2EzYTNhIDQuMTclLCAjMTcxNzE1IDEyMC40OCUpO1xyXG4gICAgLy8gYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDc0LjMxZGVnLCAjNjM2MzYzIDQuMTclLCAjMTcxNzE1IDEyMC40OCUpO1xyXG4gICAgLy8gYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDc0LjMxZGVnLCAjZmY1NTAwIDQuMTclLCAjMTcxNzE1IDEyMC40OCUpO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDc0LjMxZGVnLCByZ2IoMjQsIDI4LCA1OSkgNC4xNyUsICMxNzE3MTUgMTIwLjQ4JSk7XHJcblxyXG4gICAgYSB7XHJcbiAgICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAvLyB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBcIlNoYXJlXCIsIGN1cnNpdmU7XHJcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogNDVweDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogMC4wODVlbTtcclxuICAgICAgY29sb3I6ICM5NmFhYWE7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIH1cclxuICB9XHJcbiAgLmFib3V0VXMge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgLmJ1dHRvbiB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICB9XHJcbiAgICAudGV4dEJsb2NrIHtcclxuICAgICAgZm9udC1mYW1pbHk6IFwiQXJpbW9cIjtcclxuICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAycHggMXB4IHJnYigxMjEsIDEyMSwgMTIxKTtcclxuICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAvLyBtaW4taGVpZ2h0OiA2MDBweDtcclxuICAgICAgbWF4LWhlaWdodDogbWF4LWNvbnRlbnQ7XHJcbiAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICMxNzE3MTUsICMzNzM2MzUyMSwgIzM3MzYzNTI4LCAjMTcxNzE1KSxcclxuICAgICAgICBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMxNzE3MTUsICMzNzM2MzUsICMzNzM2MzUsICMxNzE3MTUpO1xyXG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDY1cHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgY29sb3I6ICNiM2IzYjM7XHJcblxyXG4gICAgICBwIHtcclxuICAgICAgICBwYWRkaW5nOiAzMnB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLmNvbnRhY3RGb3JtIHtcclxuICAgIC5zb2NpYWwge1xyXG4gICAgICB3aWR0aDogMTYycHg7XHJcbiAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgYSB7XHJcbiAgICAgICAgZmlsdGVyOiBncmF5c2NhbGUoMTAwJSk7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbjogNHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDFweDtcclxuICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5jb250YWN0X2Zvcm0ge1xyXG4gICAgICBjb2xvcjogI2ViZWJlYjtcclxuICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAuaW5mb0ZpZWxkcyBsYWJlbCxcclxuICAgICAgLm1lc3NhZ2VGaWVsZCBsYWJlbCB7XHJcbiAgICAgICAgY29sb3I6ICMzNjM2MzY7XHJcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICA+IGRpdiB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggNHB4IDBweCBncmV5O1xyXG4gICAgICAgIHBhZGRpbmc6IDMwcHggMjBweDtcclxuXHJcbiAgICAgICAgLm1lc3NhZ2Uge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgY29sb3I6ICNlYmViZWI7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDJweCA0cHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyNjI2MjY7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMnB4IDFweCAjODg4ODg4O1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDAgM3B4IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubmFtZSxcclxuICAgICAgICAgIC5jb250YWN0IHtcclxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5uYW1lIHtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuY29udGFjdCB7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuc29jaWFsIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IGNhbGMoMjUlKTtcclxuICAgICAgICAgICAgLmljb25zIHtcclxuICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgd2lkdGg6IG1heC1jb250ZW50O1xyXG5cclxuICAgICAgICAgICAgICAkSWNvblNpemVNdWx0aXBsaWVyOiAxO1xyXG5cclxuICAgICAgICAgICAgICAuaWNvbiB7XHJcbiAgICAgICAgICAgICAgICBmaWx0ZXI6IGludmVydCgwKTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDQycHggKiAjeyRJY29uU2l6ZU11bHRpcGxpZXJ9KTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogY2FsYyg0MnB4ICogI3skSWNvblNpemVNdWx0aXBsaWVyfSk7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoXCIvaW1nL3NvY2lhbC1pY29ucy5wbmdcIikgbm8tcmVwZWF0O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjYWxjKDUwMHB4ICogI3skSWNvblNpemVNdWx0aXBsaWVyfSksIGNhbGMoNTAwcHggKiAjeyRJY29uU2l6ZU11bHRpcGxpZXJ9KTtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIC5mYWNlYm9vayB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjYWxjKC0yNXB4ICogI3skSWNvblNpemVNdWx0aXBsaWVyfSkgY2FsYygtMjVweCAqICN7JEljb25TaXplTXVsdGlwbGllcn0pO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgLnRlbGVncmFtIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNhbGMoLTE2MHB4ICogI3skSWNvblNpemVNdWx0aXBsaWVyfSkgY2FsYygtMTE1cHggKiAjeyRJY29uU2l6ZU11bHRpcGxpZXJ9KTtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIC5pbnN0YWdyYW0ge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2FsYygtMTYwcHggKiAjeyRJY29uU2l6ZU11bHRpcGxpZXJ9KSBjYWxjKC0yNXB4ICogI3skSWNvblNpemVNdWx0aXBsaWVyfSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLm1lc3NhZ2VGaWVsZCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG5cclxuICAgICAgICAgICAgdGV4dGFyZWEge1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjZWJlYmViO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDhweDtcclxuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDI5MHB4O1xyXG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMnB4IDFweCAjODg4ODg4O1xyXG4gICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMjYyNjI2O1xyXG4gICAgICAgICAgICAgICY6Zm9jdXMge1xyXG4gICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zZW5kRm9ybS5idXR0b24ge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgcGFkZGluZzogOHB4IDMycHg7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA1OXB4O1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICBtYXJnaW4tdG9wOiAzMnB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMlO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMxMzEzMTM7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzVjNWM1YztcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxcHg7XHJcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG4gICAgICAgIGNvbG9yOiAjZmZlYWVhO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAucmVxdWlyZWQge1xyXG4gICAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgICAgY29udGVudDogXCIqXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnN1Y2Nlc3MsXHJcbiAgICAuZXJyb3Ige1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIH1cclxuICAgIC5zdWNjZXNzIHtcclxuICAgICAgY29sb3I6ICMyM2IzODQ7XHJcbiAgICB9XHJcbiAgICAuZXJyb3Ige1xyXG4gICAgICBjb2xvcjogI2IzMjMyMztcclxuICAgIH1cclxuICAgIC5zaG93TWVzc2FnZSB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBrZXlmcmFtZXMgZ29Ub3Age1xyXG4gICAgMCUge1xyXG4gICAgICAvLyAgIGJveC1zaGFkb3c6IDAgMCAxNXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XHJcbiAgICB9XHJcbiAgICA1MCUge1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDE3KTtcclxuICAgICAgLy8gICBib3gtc2hhZG93OiAwIDAgMTVweCByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgLy8gICBib3gtc2hhZG93OiAwIDAgMTVweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xyXG4gICAgfVxyXG4gIH1cclxuICAuZ29Ub3Age1xyXG4gICAgei1pbmRleDogMTAwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIG1hcmdpbjogOHB4O1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIC13ZWJraXQtZmlsdGVyOiBncmF5c2NhbGUoMTAwJSkgaW52ZXJ0KDEpIGNvbnRyYXN0KDEwMCk7XHJcbiAgICAtbW96LWZpbHRlcjogZ3JheXNjYWxlKDEwMCUpIGludmVydCgxKSBjb250cmFzdCgxMDApO1xyXG4gICAgLW1zLWZpbHRlcjogZ3JheXNjYWxlKDEwMCUpIGludmVydCgxKSBjb250cmFzdCgxMDApO1xyXG4gICAgLW8tZmlsdGVyOiBncmF5c2NhbGUoMTAwJSkgaW52ZXJ0KDEpIGNvbnRyYXN0KDEwMCk7XHJcbiAgICBmaWx0ZXI6IGdyYXlzY2FsZSg5MCUpIGludmVydCgxKSBjb250cmFzdCgxMDApO1xyXG4gICAgYSB7XHJcbiAgICAgIG1hcmdpbjogYXV0bztcclxuICAgIH1cclxuICAgICYuaGlkZVdpZGdldCB7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcbiAgICAmLnNob3dXaWRnZXQsXHJcbiAgICAmLmhpZGVXaWRnZXQge1xyXG4gICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAxNXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XHJcbiAgICAgIHBhZGRpbmc6IDRweDtcclxuICAgICAgdHJhbnNpdGlvbjogMXM7XHJcbiAgICB9XHJcbiAgICAmLnNob3dXaWRnZXQge1xyXG4gICAgICBhbmltYXRpb246IGdvVG9wIDJzIDEgZWFzZS1pbi1vdXQ7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAxNXB4IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5AbWVkaWEgc2NyZWVue1xyXG5cclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KXtcclxuICAgIC5wcm9qZWN0e1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uICFpbXBvcnRhbnQ7XHJcbiAgICAgIC5zY3JlZW5zaG90cywgLnRlY2hub2xvZ2llc0xpc3R7XHJcbiAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICB9XHJcbn0iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1TaGFyZSZkaXNwbGF5PXN3YXBcIik7XG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Qb3BwaW5zJmRpc3BsYXk9c3dhcFwiKTtcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUFyaW1vJmRpc3BsYXk9c3dhcFwiKTtcbi5tYWluIHtcbiAgcGFkZGluZy10b3A6IDMwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwODA4MDg7XG4gIGhlaWdodDogNDAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgXCJBcmltb1wiO1xuICBtYXJnaW4tdG9wOiAtMXB4O1xufVxuLm1haW4gaDIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyMzI3NjM7XG4gIGZvbnQtZmFtaWx5OiBcIlNoYXJlXCI7XG4gIGxldHRlci1zcGFjaW5nOiAxLjVweDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgY29sb3I6ICM4ZDhkOGM7XG59XG4ubWFpbiAud29ya3Mge1xuICBwYWRkaW5nOiAyJSAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuQGtleWZyYW1lcyBwb3BDYXJ1c2VsTmV3cyB7XG4gIDAlIHtcbiAgICBtYXJnaW46IDAgMTUlO1xuICAgIGhlaWdodDogMDtcbiAgfVxuICA0MCUge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtYXJnaW46IDAgMTUlO1xuICB9XG4gIDEwMCUge1xuICAgIG1hcmdpbjogMCAxNSU7XG4gIH1cbn1cbi5tYWluIC53b3JrcyAubmFtZSB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBsaW5lLWhlaWdodDogMjhweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDAgYXV0byAzMnB4IGF1dG87XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuLm1haW4gLndvcmtzIC5wcm9qZWN0IHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgcGFkZGluZy10b3A6IDYwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICBib3gtc2hhZG93OiAwIC0ycHggMXB4IDAuNXB4ICM1MjUyNTI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG4ubWFpbiAud29ya3MgLnByb2plY3Q6Zmlyc3QtY2hpbGQge1xuICBwYWRkaW5nLXRvcDogMHB4O1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDA7XG59XG4ubWFpbiAud29ya3MgLnByb2plY3QgLnNjcmVlbnNob3RzIHtcbiAgcGFkZGluZzogMCAwIDAgMSU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDUwJTtcbn1cbi5tYWluIC53b3JrcyAucHJvamVjdCAuc2NyZWVuc2hvdHMgLmNhcm91c2VsLWl0ZW0uYWN0aXZlLFxuLm1haW4gLndvcmtzIC5wcm9qZWN0IC5zY3JlZW5zaG90cyAuY2Fyb3VzZWwtaXRlbS1uZXh0LFxuLm1haW4gLndvcmtzIC5wcm9qZWN0IC5zY3JlZW5zaG90cyAuY2Fyb3VzZWwtaXRlbS1wcmV2IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4ubWFpbiAud29ya3MgLnByb2plY3QgLnNjcmVlbnNob3RzIC5jYXJvdXNlbC1jb250cm9sLXByZXYtaWNvbixcbi5tYWluIC53b3JrcyAucHJvamVjdCAuc2NyZWVuc2hvdHMgLmNhcm91c2VsLWNvbnRyb2wtbmV4dC1pY29uIHtcbiAgZmlsdGVyOiBpbnZlcnQoMC42KTtcbn1cbi5tYWluIC53b3JrcyAucHJvamVjdCAuc2NyZWVuc2hvdHMgLmNhcm91c2VsLWlubmVyIC5jYXJvdXNlbC1pdGVtIHtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcbn1cbi5tYWluIC53b3JrcyAucHJvamVjdCAuc2NyZWVuc2hvdHMgLmNhcm91c2VsLWlubmVyIC5jYXJvdXNlbC1pdGVtIGltZyB7XG4gIGhlaWdodDogNDU2cHg7XG59XG4ubWFpbiAud29ya3MgLnByb2plY3QgLnNjcmVlbnNob3RzIC5jYXJvdXNlbC1pbm5lciAuY2Fyb3VzZWwtaXRlbSBwIHtcbiAgbWFyZ2luLXRvcDogMTBweCAhaW1wb3J0YW50O1xuICB3aWR0aDogODAlO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5tYWluIC53b3JrcyAucHJvamVjdCAuc2NyZWVuc2hvdHMgLmNhcm91c2VsLWlubmVyIC5jYXJvdXNlbC1pdGVtIGgzIHtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiA4cHggMTZweDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6ICNjNWM1YzU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTQsIDU0LCA1NCwgMC41ODIpO1xufVxuLm1haW4gLndvcmtzIC5wcm9qZWN0IC50ZWNobm9sb2dpZXNMaXN0IHtcbiAgbWFyZ2luLWJvdHRvbTogMzJweDtcbiAgbWFyZ2luOiAwIDElO1xuICB3aWR0aDogNTAlO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGJhY2tncm91bmQ6ICMyNjI2MjY7XG4gIGNvbG9yOiAjY2VjZWNlO1xufVxuLm1haW4gLndvcmtzIC5wcm9qZWN0IC50ZWNobm9sb2dpZXNMaXN0IC5hYm91dFByb2plY3Qge1xuICBmb250LXNpemU6IDIycHg7XG4gIGxpbmUtaGVpZ2h0OiAzM3B4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMTBweDtcbn1cbi5tYWluIC53b3JrcyAucHJvamVjdCAudGVjaG5vbG9naWVzTGlzdCAuYWJvdXRQcm9qZWN0IHAge1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICBmb250LXNpemU6IDIwcHg7XG59XG4ubWFpbiAud29ya3MgLnByb2plY3QgLnRlY2hub2xvZ2llc0xpc3QgdWwge1xuICBmb250LXNpemU6IDIycHg7XG4gIGxpbmUtaGVpZ2h0OiAzM3B4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMDtcbiAgY291bnRlci1yZXNldDogbGk7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4ubWFpbiAud29ya3MgLnByb2plY3QgLnRlY2hub2xvZ2llc0xpc3QgdWwgbGkge1xuICBtYXJnaW4tdG9wOiAxMnB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMCAwIDEwcHggMmVtO1xuICBwYWRkaW5nOiA0cHggOHB4O1xuICBib3JkZXItdG9wOiAycHggc29saWQgIzM5M2IzNztcbiAgdHJhbnNpdGlvbjogMC4zcyBsaW5lYXI7XG59XG4ubWFpbiAud29ya3MgLnByb2plY3QgLnRlY2hub2xvZ2llc0xpc3QgdWwgbGk6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG4ubWFpbiAud29ya3MgLnByb2plY3QgLnRlY2hub2xvZ2llc0xpc3QgdWwgbGk6YmVmb3JlIHtcbiAgY29udGVudDogY291bnRlcihsaSk7XG4gIGNvdW50ZXItaW5jcmVtZW50OiBsaTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0ycHg7XG4gIGxlZnQ6IC0yZW07XG4gIHdpZHRoOiAyZW07XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xuICBwYWRkaW5nOiA0cHg7XG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCAjNzg3YTc3O1xuICBib3JkZXItbGVmdDogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kOiAjNWM1ZTViO1xuICBjb2xvcjogI2NlY2VjZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogMC4zcyBsaW5lYXI7XG59XG4ubWFpbiAud29ya3MgLmJ1dHRvbiB7XG4gIHdpZHRoOiAyODBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3gtc2hhZG93OiBpbnNldCAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBtYXJnaW46IDI0cHggYXV0byAwIGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGNvbG9yOiAjM2MzZTUxO1xufVxuLm1haW4gLndvcmtzIC5idXR0b24uYnV0dG9uX2dpdCB7XG4gIHdpZHRoOiAyMDBweDtcbn1cbi5tYWluIC53b3JrcyAuYnV0dG9uLmJ1dHRvbl9naXQgLmdpdGh1Yl9idXR0b24ge1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMnB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMnB4O1xuICB3aWR0aDogMjAwcHg7XG4gIGJvcmRlcjogMDtcbn1cbi5tYWluIC53b3JrcyAuYnV0dG9uIC5PcGVuX3NpdGUsXG4ubWFpbiAud29ya3MgLmJ1dHRvbiAuZ2l0aHViX2J1dHRvbiB7XG4gIHdpZHRoOiA1MCU7XG4gIG1hcmdpbjogYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5tYWluIC53b3JrcyAuYnV0dG9uIC5PcGVuX3NpdGU6YWN0aXZlLCAubWFpbiAud29ya3MgLmJ1dHRvbiAuT3Blbl9zaXRlOnZpc2l0ZWQsXG4ubWFpbiAud29ya3MgLmJ1dHRvbiAuZ2l0aHViX2J1dHRvbjphY3RpdmUsXG4ubWFpbiAud29ya3MgLmJ1dHRvbiAuZ2l0aHViX2J1dHRvbjp2aXNpdGVkIHtcbiAgY29sb3I6ICMzYzNlNTE7XG59XG4ubWFpbiAud29ya3MgLmJ1dHRvbiAuT3Blbl9zaXRlID4gZGl2LFxuLm1haW4gLndvcmtzIC5idXR0b24gLmdpdGh1Yl9idXR0b24gPiBkaXYge1xuICBtYXJnaW46IGF1dG87XG59XG4ubWFpbiAud29ya3MgLmJ1dHRvbiAuT3Blbl9zaXRlIHtcbiAgdHJhbnNpdGlvbjogMC4zcztcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTJweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTJweDtcbn1cbi5tYWluIC53b3JrcyAuYnV0dG9uIC5PcGVuX3NpdGU6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjMTExNjNhO1xuICBjb2xvcjogI2U3ZTFlMTtcbn1cbi5tYWluIC53b3JrcyAuYnV0dG9uIC5naXRodWJfYnV0dG9uIHtcbiAgdHJhbnNpdGlvbjogMC4zcztcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEycHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMnB4O1xufVxuLm1haW4gLndvcmtzIC5idXR0b24gLmdpdGh1Yl9idXR0b246aG92ZXIge1xuICBjb2xvcjogI2U3ZTFlMTtcbiAgYmFja2dyb3VuZDogIzEyMTQxZjtcbn1cbi5tYWluIC53b3JrcyAuYnV0dG9uIC5naXRodWJfYnV0dG9uIHtcbiAgYm9yZGVyLWxlZnQ6IHNvbGlkICMzYzNlNTEgMXB4O1xufVxuLm1haW4gLmJ1dHRvbiB7XG4gIG1hcmdpbjogMiUgYXV0byA0JSBhdXRvO1xuICB3aWR0aDogMjgwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNzQuMzFkZWcsICMxODFjM2IgNC4xNyUsICMxNzE3MTUgMTIwLjQ4JSk7XG59XG4ubWFpbiAuYnV0dG9uIGEge1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICBmb250LWZhbWlseTogXCJTaGFyZVwiLCBjdXJzaXZlO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgbGluZS1oZWlnaHQ6IDQ1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDg1ZW07XG4gIGNvbG9yOiAjOTZhYWFhO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4ubWFpbiAuYWJvdXRVcyB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuLm1haW4gLmFib3V0VXMgLmJ1dHRvbiB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4ubWFpbiAuYWJvdXRVcyAudGV4dEJsb2NrIHtcbiAgZm9udC1mYW1pbHk6IFwiQXJpbW9cIjtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAycHggMXB4ICM3OTc5Nzk7XG4gIG1hcmdpbjogYXV0bztcbiAgbWF4LWhlaWdodDogbWF4LWNvbnRlbnQ7XG4gIHdpZHRoOiA5MCU7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICMxNzE3MTUsICMzNzM2MzUyMSwgIzM3MzYzNTI4LCAjMTcxNzE1KSwgbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMTcxNzE1LCAjMzczNjM1LCAjMzczNjM1LCAjMTcxNzE1KTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDI1cHg7XG4gIGxpbmUtaGVpZ2h0OiA2NXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjYjNiM2IzO1xufVxuLm1haW4gLmFib3V0VXMgLnRleHRCbG9jayBwIHtcbiAgcGFkZGluZzogMzJweDtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cbi5tYWluIC5jb250YWN0Rm9ybSAuc29jaWFsIHtcbiAgd2lkdGg6IDE2MnB4O1xuICBtYXJnaW46IGF1dG87XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG4ubWFpbiAuY29udGFjdEZvcm0gLnNvY2lhbCBhIHtcbiAgZmlsdGVyOiBncmF5c2NhbGUoMTAwJSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiA0cHg7XG4gIHBhZGRpbmc6IDFweDtcbiAgd2lkdGg6IDIwMHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xufVxuLm1haW4gLmNvbnRhY3RGb3JtIC5jb250YWN0X2Zvcm0ge1xuICBjb2xvcjogI2ViZWJlYjtcbiAgd2lkdGg6IDYwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLm1haW4gLmNvbnRhY3RGb3JtIC5jb250YWN0X2Zvcm0gLmluZm9GaWVsZHMgbGFiZWwsXG4ubWFpbiAuY29udGFjdEZvcm0gLmNvbnRhY3RfZm9ybSAubWVzc2FnZUZpZWxkIGxhYmVsIHtcbiAgY29sb3I6ICMzNjM2MzY7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuLm1haW4gLmNvbnRhY3RGb3JtIC5jb250YWN0X2Zvcm0gPiBkaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBib3gtc2hhZG93OiAwcHggMHB4IDRweCAwcHggZ3JleTtcbiAgcGFkZGluZzogMzBweCAyMHB4O1xufVxuLm1haW4gLmNvbnRhY3RGb3JtIC5jb250YWN0X2Zvcm0gPiBkaXYgLm1lc3NhZ2Uge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLm1haW4gLmNvbnRhY3RGb3JtIC5jb250YWN0X2Zvcm0gPiBkaXYgLm1lc3NhZ2UgaW5wdXQge1xuICBjb2xvcjogI2ViZWJlYjtcbiAgcGFkZGluZzogMnB4IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI2MjYyNjtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAycHggMXB4ICM4ODg4ODg7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi5tYWluIC5jb250YWN0Rm9ybSAuY29udGFjdF9mb3JtID4gZGl2IC5tZXNzYWdlIGxhYmVsIHtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW46IDEwcHggMCAzcHggMDtcbn1cbi5tYWluIC5jb250YWN0Rm9ybSAuY29udGFjdF9mb3JtID4gZGl2IC5tZXNzYWdlIC5uYW1lLFxuLm1haW4gLmNvbnRhY3RGb3JtIC5jb250YWN0X2Zvcm0gPiBkaXYgLm1lc3NhZ2UgLmNvbnRhY3Qge1xuICBvdXRsaW5lOiBub25lO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLm1haW4gLmNvbnRhY3RGb3JtIC5jb250YWN0X2Zvcm0gPiBkaXYgLm1lc3NhZ2UgLnNvY2lhbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1pbi1oZWlnaHQ6IGNhbGMoMjUlKTtcbn1cbi5tYWluIC5jb250YWN0Rm9ybSAuY29udGFjdF9mb3JtID4gZGl2IC5tZXNzYWdlIC5zb2NpYWwgLmljb25zIHtcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogbWF4LWNvbnRlbnQ7XG59XG4ubWFpbiAuY29udGFjdEZvcm0gLmNvbnRhY3RfZm9ybSA+IGRpdiAubWVzc2FnZSAuc29jaWFsIC5pY29ucyAuaWNvbiB7XG4gIGZpbHRlcjogaW52ZXJ0KDApO1xuICB3aWR0aDogY2FsYyg0MnB4ICogMSk7XG4gIGhlaWdodDogY2FsYyg0MnB4ICogMSk7XG4gIGJhY2tncm91bmQ6IHVybChcIi9pbWcvc29jaWFsLWljb25zLnBuZ1wiKSBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY2FsYyg1MDBweCAqIDEpLCBjYWxjKDUwMHB4ICogMSk7XG59XG4ubWFpbiAuY29udGFjdEZvcm0gLmNvbnRhY3RfZm9ybSA+IGRpdiAubWVzc2FnZSAuc29jaWFsIC5pY29ucyAuZmFjZWJvb2sge1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjYWxjKC0yNXB4ICogMSkgY2FsYygtMjVweCAqIDEpO1xufVxuLm1haW4gLmNvbnRhY3RGb3JtIC5jb250YWN0X2Zvcm0gPiBkaXYgLm1lc3NhZ2UgLnNvY2lhbCAuaWNvbnMgLnRlbGVncmFtIHtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2FsYygtMTYwcHggKiAxKSBjYWxjKC0xMTVweCAqIDEpO1xufVxuLm1haW4gLmNvbnRhY3RGb3JtIC5jb250YWN0X2Zvcm0gPiBkaXYgLm1lc3NhZ2UgLnNvY2lhbCAuaWNvbnMgLmluc3RhZ3JhbSB7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNhbGMoLTE2MHB4ICogMSkgY2FsYygtMjVweCAqIDEpO1xufVxuLm1haW4gLmNvbnRhY3RGb3JtIC5jb250YWN0X2Zvcm0gPiBkaXYgLm1lc3NhZ2UgLm1lc3NhZ2VGaWVsZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xufVxuLm1haW4gLmNvbnRhY3RGb3JtIC5jb250YWN0X2Zvcm0gPiBkaXYgLm1lc3NhZ2UgLm1lc3NhZ2VGaWVsZCB0ZXh0YXJlYSB7XG4gIGNvbG9yOiAjZWJlYmViO1xuICBwYWRkaW5nOiA4cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDI5MHB4O1xuICBib3gtc2hhZG93OiAwcHggMHB4IDJweCAxcHggIzg4ODg4ODtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiAjMjYyNjI2O1xufVxuLm1haW4gLmNvbnRhY3RGb3JtIC5jb250YWN0X2Zvcm0gPiBkaXYgLm1lc3NhZ2UgLm1lc3NhZ2VGaWVsZCB0ZXh0YXJlYTpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4ubWFpbiAuY29udGFjdEZvcm0gLmNvbnRhY3RfZm9ybSAuc2VuZEZvcm0uYnV0dG9uIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDhweCAzMnB4O1xuICBwYWRkaW5nLWxlZnQ6IDU5cHg7XG4gIG1hcmdpbjogYXV0bztcbiAgbWFyZ2luLXRvcDogMzJweDtcbiAgbWFyZ2luLWJvdHRvbTogMyU7XG4gIGJhY2tncm91bmQ6ICMxMzEzMTM7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM1YzVjNWM7XG4gIGJvcmRlci1yYWRpdXM6IDFweDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDIycHg7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICBjb2xvcjogI2ZmZWFlYTtcbn1cbi5tYWluIC5jb250YWN0Rm9ybSAuY29udGFjdF9mb3JtIC5yZXF1aXJlZDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiKlwiO1xufVxuLm1haW4gLmNvbnRhY3RGb3JtIC5zdWNjZXNzLFxuLm1haW4gLmNvbnRhY3RGb3JtIC5lcnJvciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuLm1haW4gLmNvbnRhY3RGb3JtIC5zdWNjZXNzIHtcbiAgY29sb3I6ICMyM2IzODQ7XG59XG4ubWFpbiAuY29udGFjdEZvcm0gLmVycm9yIHtcbiAgY29sb3I6ICNiMzIzMjM7XG59XG4ubWFpbiAuY29udGFjdEZvcm0gLnNob3dNZXNzYWdlIHtcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbn1cbkBrZXlmcmFtZXMgZ29Ub3Age1xuICA1MCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMTcpO1xuICB9XG59XG4ubWFpbiAuZ29Ub3Age1xuICB6LWluZGV4OiAxMDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgbWFyZ2luOiA4cHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICAtd2Via2l0LWZpbHRlcjogZ3JheXNjYWxlKDEwMCUpIGludmVydCgxKSBjb250cmFzdCgxMDApO1xuICAtbW96LWZpbHRlcjogZ3JheXNjYWxlKDEwMCUpIGludmVydCgxKSBjb250cmFzdCgxMDApO1xuICAtbXMtZmlsdGVyOiBncmF5c2NhbGUoMTAwJSkgaW52ZXJ0KDEpIGNvbnRyYXN0KDEwMCk7XG4gIC1vLWZpbHRlcjogZ3JheXNjYWxlKDEwMCUpIGludmVydCgxKSBjb250cmFzdCgxMDApO1xuICBmaWx0ZXI6IGdyYXlzY2FsZSg5MCUpIGludmVydCgxKSBjb250cmFzdCgxMDApO1xufVxuLm1haW4gLmdvVG9wIGEge1xuICBtYXJnaW46IGF1dG87XG59XG4ubWFpbiAuZ29Ub3AuaGlkZVdpZGdldCB7XG4gIG9wYWNpdHk6IDA7XG59XG4ubWFpbiAuZ29Ub3Auc2hvd1dpZGdldCwgLm1haW4gLmdvVG9wLmhpZGVXaWRnZXQge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJveC1zaGFkb3c6IDAgMCAxNXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XG4gIHBhZGRpbmc6IDRweDtcbiAgdHJhbnNpdGlvbjogMXM7XG59XG4ubWFpbiAuZ29Ub3Auc2hvd1dpZGdldCB7XG4gIGFuaW1hdGlvbjogZ29Ub3AgMnMgMSBlYXNlLWluLW91dDtcbiAgb3BhY2l0eTogMTtcbn1cbi5tYWluIC5nb1RvcC5zaG93V2lkZ2V0OmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMCAwIDE1cHggd2hpdGU7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XG4gIC5wcm9qZWN0IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnByb2plY3QgLnNjcmVlbnNob3RzLCAucHJvamVjdCAudGVjaG5vbG9naWVzTGlzdCB7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);

        this.showGoTopClass = "hideWidget";
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onScroll",
        value: function onScroll() {
          if (window.scrollY < 1000) {
            this.showGoTopClass = "hideWidget";
          } else if (window.scrollY != undefined) {
            this.showGoTopClass = "showWidget";
          }
        }
      }, {
        key: "goTop",
        value: function goTop() {
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.scss */
      "./src/app/home/home.component.scss")).default]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/interceptors/HttpErrorInterceptor.ts":
  /*!******************************************************!*\
    !*** ./src/app/interceptors/HttpErrorInterceptor.ts ***!
    \******************************************************/

  /*! exports provided: HttpErrorInterceptor */

  /***/
  function srcAppInterceptorsHttpErrorInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpErrorInterceptor", function () {
      return HttpErrorInterceptor;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/internal/operators */
    "./node_modules/rxjs/internal/operators/index.js");
    /* harmony import */


    var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__);

    var HttpErrorInterceptor =
    /*#__PURE__*/
    function () {
      function HttpErrorInterceptor() {
        _classCallCheck(this, HttpErrorInterceptor);
      }

      _createClass(HttpErrorInterceptor, [{
        key: "intercept",
        value: function intercept(request, next) {
          return next.handle(request).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (data) {
            return console.log(data);
          }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            if (error.error instanceof ErrorEvent) {
              // A client-side or network error occurred. Handle it accordingly.
              console.error('An error occurred:', error.error.message);
            } else {
              // The backend returned an unsuccessful response code.
              // The response body may contain clues as to what went wrong,
              console.error("Backend returned code ".concat(error.status, ", ") + "body was: ".concat(error.error));
            } // return an observable with a user-facing error message


            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Something bad happened; please try again later.');
          }));
        }
      }]);

      return HttpErrorInterceptor;
    }();

    HttpErrorInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], HttpErrorInterceptor);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\Admin\Desktop\myPortfolio\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map