function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/home-page/home-page.component */
    "./src/app/components/home-page/home-page.component.ts");
    /* harmony import */


    var _components_chat_page_global_chat_global_chat_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/chat-page/global-chat/global-chat.component */
    "./src/app/components/chat-page/global-chat/global-chat.component.ts");
    /* harmony import */


    var _components_user_page_user_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/user-page/user-page.component */
    "./src/app/components/user-page/user-page.component.ts");

    var routes = [{
      path: "",
      component: _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_2__["HomePageComponent"]
    }, {
      path: "api/chat/view/:id",
      component: _components_chat_page_global_chat_global_chat_component__WEBPACK_IMPORTED_MODULE_3__["GlobalChatComponent"]
    }, {
      path: "api/user",
      component: _components_user_page_user_page_component__WEBPACK_IMPORTED_MODULE_4__["UserPageComponent"]
    }, {
      path: "**",
      redirectTo: "",
      component: _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_2__["HomePageComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_chats__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./services/chats */
    "./src/app/services/chats.ts");
    /* harmony import */


    var _services_users__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./services/users */
    "./src/app/services/users.ts");
    /* harmony import */


    var _services_chat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./services/chat */
    "./src/app/services/chat.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(chatsService, usersService, chatService) {
        _classCallCheck(this, AppComponent);

        this.chatsService = chatsService;
        this.usersService = usersService;
        this.chatService = chatService;
        this.title = 'messenger-app';
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.chatService.initServerSocket();
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_chats__WEBPACK_IMPORTED_MODULE_1__["ChatsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_users__WEBPACK_IMPORTED_MODULE_2__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_chat__WEBPACK_IMPORTED_MODULE_3__["ChatService"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_services_chats__WEBPACK_IMPORTED_MODULE_1__["ChatsService"], _services_users__WEBPACK_IMPORTED_MODULE_2__["UsersService"]])],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUJBQXFCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBQbGFjZWhvbGRlciB0ZXh0ICovXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ["./app.component.css"],
          providers: [_services_chats__WEBPACK_IMPORTED_MODULE_1__["ChatsService"], _services_users__WEBPACK_IMPORTED_MODULE_2__["UsersService"]]
        }]
      }], function () {
        return [{
          type: _services_chats__WEBPACK_IMPORTED_MODULE_1__["ChatsService"]
        }, {
          type: _services_users__WEBPACK_IMPORTED_MODULE_2__["UsersService"]
        }, {
          type: _services_chat__WEBPACK_IMPORTED_MODULE_3__["ChatService"]
        }];
      }, null);
    })();
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


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/autocomplete */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
    /* harmony import */


    var _services_authentication__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./services/authentication */
    "./src/app/services/authentication.ts");
    /* harmony import */


    var _services_user__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./services/user */
    "./src/app/services/user.ts");
    /* harmony import */


    var _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./components/home-page/home-page.component */
    "./src/app/components/home-page/home-page.component.ts");
    /* harmony import */


    var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./components/navbar/navbar.component */
    "./src/app/components/navbar/navbar.component.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_chat_page_global_chat_global_chat_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./components/chat-page/global-chat/global-chat.component */
    "./src/app/components/chat-page/global-chat/global-chat.component.ts");
    /* harmony import */


    var _services_token_interceptor__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./services/token.interceptor */
    "./src/app/services/token.interceptor.ts");
    /* harmony import */


    var _components_chat_page_message_view_message_view_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./components/chat-page/message-view/message-view.component */
    "./src/app/components/chat-page/message-view/message-view.component.ts");
    /* harmony import */


    var _components_chat_page_message_view_message_create_message_create_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./components/chat-page/message-view/message-create/message-create.component */
    "./src/app/components/chat-page/message-view/message-create/message-create.component.ts");
    /* harmony import */


    var _components_chat_page_message_view_messages_message_received_message_received_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./components/chat-page/message-view/messages/message-received/message-received.component */
    "./src/app/components/chat-page/message-view/messages/message-received/message-received.component.ts");
    /* harmony import */


    var _components_chat_page_message_view_messages_message_sent_message_sent_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./components/chat-page/message-view/messages/message-sent/message-sent.component */
    "./src/app/components/chat-page/message-view/messages/message-sent/message-sent.component.ts");
    /* harmony import */


    var _components_home_page_chat_display_chat_display_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./components/home-page/chat-display/chat-display.component */
    "./src/app/components/home-page/chat-display/chat-display.component.ts");
    /* harmony import */


    var _components_user_page_user_page_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./components/user-page/user-page.component */
    "./src/app/components/user-page/user-page.component.ts");
    /* harmony import */


    var _components_user_icon_user_icon_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./components/user-icon/user-icon.component */
    "./src/app/components/user-icon/user-icon.component.ts");
    /* harmony import */


    var _components_chat_page_message_view_chat_title_chat_title_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./components/chat-page/message-view/chat-title/chat-title.component */
    "./src/app/components/chat-page/message-view/chat-title/chat-title.component.ts");
    /* harmony import */


    var _components_chat_page_message_view_chat_title_chat_subscribe_chat_subscribe_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./components/chat-page/message-view/chat-title/chat-subscribe/chat-subscribe.component */
    "./src/app/components/chat-page/message-view/chat-title/chat-subscribe/chat-subscribe.component.ts");
    /* harmony import */


    var _components_chat_page_subscribers_view_subscribers_view_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./components/chat-page/subscribers-view/subscribers-view.component */
    "./src/app/components/chat-page/subscribers-view/subscribers-view.component.ts");
    /* harmony import */


    var _components_chat_page_message_view_messages_messages_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ./components/chat-page/message-view/messages/messages.component */
    "./src/app/components/chat-page/message-view/messages/messages.component.ts");
    /* harmony import */


    var _components_user_page_user_friends_view_user_friends_view_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! ./components/user-page/user-friends-view/user-friends-view.component */
    "./src/app/components/user-page/user-friends-view/user-friends-view.component.ts");
    /* harmony import */


    var _components_user_page_user_view_user_view_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! ./components/user-page/user-view/user-view.component */
    "./src/app/components/user-page/user-view/user-view.component.ts");
    /* harmony import */


    var _components_user_page_user_chats_view_user_chats_view_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! ./components/user-page/user-chats-view/user-chats-view.component */
    "./src/app/components/user-page/user-chats-view/user-chats-view.component.ts");
    /* harmony import */


    var _components_image_fab_image_fab_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! ./components/image-fab/image-fab.component */
    "./src/app/components/image-fab/image-fab.component.ts");
    /* harmony import */


    var _components_user_page_user_view_user_view_chat_create_dialog_chat_tags_chat_tags_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! ./components/user-page/user-view/user-view-chat-create-dialog/chat-tags/chat-tags.component */
    "./src/app/components/user-page/user-view/user-view-chat-create-dialog/chat-tags/chat-tags.component.ts");
    /* harmony import */


    var _components_user_page_user_view_user_view_chat_create_dialog_chat_tags_tag_tag_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! ./components/user-page/user-view/user-view-chat-create-dialog/chat-tags/tag/tag.component */
    "./src/app/components/user-page/user-view/user-view-chat-create-dialog/chat-tags/tag/tag.component.ts");
    /* harmony import */


    var _components_header_header_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! ./components/header/header.component */
    "./src/app/components/header/header.component.ts");
    /* harmony import */


    var _components_chat_page_subscribers_view_subscriber_subscriber_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
    /*! ./components/chat-page/subscribers-view/subscriber/subscriber.component */
    "./src/app/components/chat-page/subscribers-view/subscriber/subscriber.component.ts");
    /* harmony import */


    var _components_chat_selection_chat_selection__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
    /*! ./components/chat-selection/chat-selection */
    "./src/app/components/chat-selection/chat-selection.ts");
    /* harmony import */


    var _components_chat_selection_chat_option_chat_option__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
    /*! ./components/chat-selection/chat-option/chat-option */
    "./src/app/components/chat-selection/chat-option/chat-option.ts");
    /* harmony import */


    var _components_chat_page_message_view_chat_title_chat_subscribe_chat_subscribe_admin_dialog_chat_subscribe_admin_dialog_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
    /*! ./components/chat-page/message-view/chat-title/chat-subscribe/chat-subscribe-admin-dialog/chat-subscribe-admin-dialog.component */
    "./src/app/components/chat-page/message-view/chat-title/chat-subscribe/chat-subscribe-admin-dialog/chat-subscribe-admin-dialog.component.ts");
    /* harmony import */


    var _components_chat_icon_chat_icon_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
    /*! ./components/chat-icon/chat-icon.component */
    "./src/app/components/chat-icon/chat-icon.component.ts");
    /* harmony import */


    var _components_user_page_user_view_user_view_icon_dialog_user_view_icon_dialog_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
    /*! ./components/user-page/user-view/user-view-icon-dialog/user-view-icon-dialog.component */
    "./src/app/components/user-page/user-view/user-view-icon-dialog/user-view-icon-dialog.component.ts");
    /* harmony import */


    var _components_user_page_user_friends_view_friend_request_friend_request_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(
    /*! ./components/user-page/user-friends-view/friend-request/friend-request.component */
    "./src/app/components/user-page/user-friends-view/friend-request/friend-request.component.ts");
    /* harmony import */


    var _components_chat_page_global_chat_related_chats_related_chats_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(
    /*! ./components/chat-page/global-chat/related-chats/related-chats.component */
    "./src/app/components/chat-page/global-chat/related-chats/related-chats.component.ts");
    /* harmony import */


    var _components_home_page_chat_search_chat_search_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(
    /*! ./components/home-page/chat-search/chat-search.component */
    "./src/app/components/home-page/chat-search/chat-search.component.ts");
    /* harmony import */


    var _components_home_page_chat_lists_chat_lists_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(
    /*! ./components/home-page/chat-lists/chat-lists.component */
    "./src/app/components/home-page/chat-lists/chat-lists.component.ts");
    /* harmony import */


    var _components_user_page_user_view_user_view_chat_create_dialog_user_view_chat_create_dialog_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(
    /*! ./components/user-page/user-view/user-view-chat-create-dialog/user-view-chat-create-dialog.component */
    "./src/app/components/user-page/user-view/user-view-chat-create-dialog/user-view-chat-create-dialog.component.ts"); // Modules
    // import { KeycloakAngularModule } from "keycloak-angular";
    //Services
    // import { KeycloakService } from "keycloak-angular"
    //Components


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_21__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
        useClass: _services_token_interceptor__WEBPACK_IMPORTED_MODULE_23__["TokenInterceptor"],
        multi: true
      }, _services_authentication__WEBPACK_IMPORTED_MODULE_17__["AuthenticationService"], _services_user__WEBPACK_IMPORTED_MODULE_18__["UserService"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialogModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__["MatExpansionModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_16__["MatAutocompleteModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_21__["AppComponent"], _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_19__["HomePageComponent"], _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_20__["NavbarComponent"], _components_chat_page_message_view_message_view_component__WEBPACK_IMPORTED_MODULE_24__["MessageViewComponent"], _components_chat_page_message_view_message_create_message_create_component__WEBPACK_IMPORTED_MODULE_25__["MessageCreateComponent"], _components_chat_page_message_view_messages_message_received_message_received_component__WEBPACK_IMPORTED_MODULE_26__["MessageReceivedComponent"], _components_chat_page_message_view_messages_message_sent_message_sent_component__WEBPACK_IMPORTED_MODULE_27__["MessageSentComponent"], _components_chat_page_global_chat_global_chat_component__WEBPACK_IMPORTED_MODULE_22__["GlobalChatComponent"], _components_home_page_chat_display_chat_display_component__WEBPACK_IMPORTED_MODULE_28__["ChatDisplayComponent"], _components_user_page_user_page_component__WEBPACK_IMPORTED_MODULE_29__["UserPageComponent"], _components_user_icon_user_icon_component__WEBPACK_IMPORTED_MODULE_30__["UserIconComponent"], _components_chat_page_message_view_chat_title_chat_title_component__WEBPACK_IMPORTED_MODULE_31__["ChatTitleComponent"], _components_chat_page_message_view_chat_title_chat_subscribe_chat_subscribe_component__WEBPACK_IMPORTED_MODULE_32__["ChatSubscribeComponent"], _components_chat_page_subscribers_view_subscribers_view_component__WEBPACK_IMPORTED_MODULE_33__["SubscribersViewComponent"], _components_chat_page_message_view_messages_messages_component__WEBPACK_IMPORTED_MODULE_34__["MessagesComponent"], _components_user_page_user_friends_view_user_friends_view_component__WEBPACK_IMPORTED_MODULE_35__["UserFriendsViewComponent"], _components_user_page_user_view_user_view_component__WEBPACK_IMPORTED_MODULE_36__["UserViewComponent"], _components_user_page_user_chats_view_user_chats_view_component__WEBPACK_IMPORTED_MODULE_37__["UserChatsViewComponent"], _components_image_fab_image_fab_component__WEBPACK_IMPORTED_MODULE_38__["ImageFabComponent"], _components_user_page_user_view_user_view_chat_create_dialog_chat_tags_chat_tags_component__WEBPACK_IMPORTED_MODULE_39__["ChatTagsComponent"], _components_user_page_user_view_user_view_chat_create_dialog_chat_tags_tag_tag_component__WEBPACK_IMPORTED_MODULE_40__["TagComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_41__["HeaderComponent"], _components_chat_page_subscribers_view_subscriber_subscriber_component__WEBPACK_IMPORTED_MODULE_42__["SubscriberComponent"], _components_chat_selection_chat_selection__WEBPACK_IMPORTED_MODULE_43__["ChatSelectionComponent"], _components_chat_selection_chat_option_chat_option__WEBPACK_IMPORTED_MODULE_44__["ChatOptionComponent"], _components_chat_page_message_view_chat_title_chat_subscribe_chat_subscribe_admin_dialog_chat_subscribe_admin_dialog_component__WEBPACK_IMPORTED_MODULE_45__["ChatSubscribeAdminDialogComponent"], _components_chat_icon_chat_icon_component__WEBPACK_IMPORTED_MODULE_46__["ChatIconComponent"], _components_user_page_user_friends_view_friend_request_friend_request_component__WEBPACK_IMPORTED_MODULE_48__["FriendRequestComponent"], _components_chat_page_global_chat_related_chats_related_chats_component__WEBPACK_IMPORTED_MODULE_49__["RelatedChatsComponent"], _components_home_page_chat_search_chat_search_component__WEBPACK_IMPORTED_MODULE_50__["ChatSearchComponent"], _components_home_page_chat_lists_chat_lists_component__WEBPACK_IMPORTED_MODULE_51__["ChatListsComponent"], _components_user_page_user_view_user_view_icon_dialog_user_view_icon_dialog_component__WEBPACK_IMPORTED_MODULE_47__["UserViewIconDialogComponent"], _components_user_page_user_view_user_view_chat_create_dialog_user_view_chat_create_dialog_component__WEBPACK_IMPORTED_MODULE_52__["UserViewChatCreateDialogComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialogModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__["MatExpansionModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_16__["MatAutocompleteModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_21__["AppComponent"], _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_19__["HomePageComponent"], _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_20__["NavbarComponent"], _components_chat_page_message_view_message_view_component__WEBPACK_IMPORTED_MODULE_24__["MessageViewComponent"], _components_chat_page_message_view_message_create_message_create_component__WEBPACK_IMPORTED_MODULE_25__["MessageCreateComponent"], _components_chat_page_message_view_messages_message_received_message_received_component__WEBPACK_IMPORTED_MODULE_26__["MessageReceivedComponent"], _components_chat_page_message_view_messages_message_sent_message_sent_component__WEBPACK_IMPORTED_MODULE_27__["MessageSentComponent"], _components_chat_page_global_chat_global_chat_component__WEBPACK_IMPORTED_MODULE_22__["GlobalChatComponent"], _components_home_page_chat_display_chat_display_component__WEBPACK_IMPORTED_MODULE_28__["ChatDisplayComponent"], _components_user_page_user_page_component__WEBPACK_IMPORTED_MODULE_29__["UserPageComponent"], _components_user_icon_user_icon_component__WEBPACK_IMPORTED_MODULE_30__["UserIconComponent"], _components_chat_page_message_view_chat_title_chat_title_component__WEBPACK_IMPORTED_MODULE_31__["ChatTitleComponent"], _components_chat_page_message_view_chat_title_chat_subscribe_chat_subscribe_component__WEBPACK_IMPORTED_MODULE_32__["ChatSubscribeComponent"], _components_chat_page_subscribers_view_subscribers_view_component__WEBPACK_IMPORTED_MODULE_33__["SubscribersViewComponent"], _components_chat_page_message_view_messages_messages_component__WEBPACK_IMPORTED_MODULE_34__["MessagesComponent"], _components_user_page_user_friends_view_user_friends_view_component__WEBPACK_IMPORTED_MODULE_35__["UserFriendsViewComponent"], _components_user_page_user_view_user_view_component__WEBPACK_IMPORTED_MODULE_36__["UserViewComponent"], _components_user_page_user_chats_view_user_chats_view_component__WEBPACK_IMPORTED_MODULE_37__["UserChatsViewComponent"], _components_image_fab_image_fab_component__WEBPACK_IMPORTED_MODULE_38__["ImageFabComponent"], _components_user_page_user_view_user_view_chat_create_dialog_chat_tags_chat_tags_component__WEBPACK_IMPORTED_MODULE_39__["ChatTagsComponent"], _components_user_page_user_view_user_view_chat_create_dialog_chat_tags_tag_tag_component__WEBPACK_IMPORTED_MODULE_40__["TagComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_41__["HeaderComponent"], _components_chat_page_subscribers_view_subscriber_subscriber_component__WEBPACK_IMPORTED_MODULE_42__["SubscriberComponent"], _components_chat_selection_chat_selection__WEBPACK_IMPORTED_MODULE_43__["ChatSelectionComponent"], _components_chat_selection_chat_option_chat_option__WEBPACK_IMPORTED_MODULE_44__["ChatOptionComponent"], _components_chat_page_message_view_chat_title_chat_subscribe_chat_subscribe_admin_dialog_chat_subscribe_admin_dialog_component__WEBPACK_IMPORTED_MODULE_45__["ChatSubscribeAdminDialogComponent"], _components_chat_icon_chat_icon_component__WEBPACK_IMPORTED_MODULE_46__["ChatIconComponent"], _components_user_page_user_friends_view_friend_request_friend_request_component__WEBPACK_IMPORTED_MODULE_48__["FriendRequestComponent"], _components_chat_page_global_chat_related_chats_related_chats_component__WEBPACK_IMPORTED_MODULE_49__["RelatedChatsComponent"], _components_home_page_chat_search_chat_search_component__WEBPACK_IMPORTED_MODULE_50__["ChatSearchComponent"], _components_home_page_chat_lists_chat_lists_component__WEBPACK_IMPORTED_MODULE_51__["ChatListsComponent"], _components_user_page_user_view_user_view_icon_dialog_user_view_icon_dialog_component__WEBPACK_IMPORTED_MODULE_47__["UserViewIconDialogComponent"], _components_user_page_user_view_user_view_chat_create_dialog_user_view_chat_create_dialog_component__WEBPACK_IMPORTED_MODULE_52__["UserViewChatCreateDialogComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialogModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__["MatExpansionModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_16__["MatAutocompleteModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]],
          providers: [{
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
            useClass: _services_token_interceptor__WEBPACK_IMPORTED_MODULE_23__["TokenInterceptor"],
            multi: true
          }, _services_authentication__WEBPACK_IMPORTED_MODULE_17__["AuthenticationService"], _services_user__WEBPACK_IMPORTED_MODULE_18__["UserService"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_21__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/chat-icon/chat-icon.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/chat-icon/chat-icon.component.ts ***!
    \*************************************************************/

  /*! exports provided: ChatIconComponent */

  /***/
  function srcAppComponentsChatIconChatIconComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatIconComponent", function () {
      return ChatIconComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ChatIconComponent = function ChatIconComponent() {
      _classCallCheck(this, ChatIconComponent);
    };

    ChatIconComponent.ɵfac = function ChatIconComponent_Factory(t) {
      return new (t || ChatIconComponent)();
    };

    ChatIconComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ChatIconComponent,
      selectors: [["app-chat-icon"]],
      decls: 1,
      vars: 0,
      consts: [[1, "icon-button"]],
      template: function ChatIconComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        }
      },
      styles: [".icon-button[_ngcontent-%COMP%] {\n        background-image: url('chat-image.png');\n        background-size: cover;                   \n        background-repeat: no-repeat;\n        background-position: center center; \n        width: 88%;\n        height: 88%;\n        border-radius: 50%;\n        margin: 6%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jaGF0LWljb24vY2hhdC1pY29uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7UUFDUSx1Q0FBOEQ7UUFDOUQsc0JBQXNCO1FBQ3RCLDRCQUE0QjtRQUM1QixrQ0FBa0M7UUFDbEMsVUFBVTtRQUNWLFdBQVc7UUFDWCxrQkFBa0I7UUFDbEIsVUFBVTtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2hhdC1pY29uL2NoYXQtaWNvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmljb24tYnV0dG9uIHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9jaGF0LWltYWdlLnBuZ1wiKTtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgICAgICAgICAgICAgICAgICAgXG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7IFxuICAgICAgICB3aWR0aDogODglO1xuICAgICAgICBoZWlnaHQ6IDg4JTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBtYXJnaW46IDYlO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatIconComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-chat-icon",
          templateUrl: "chat-icon.component.html",
          styleUrls: ["chat-icon.component.css"]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/chat-page/global-chat/global-chat.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/components/chat-page/global-chat/global-chat.component.ts ***!
    \***************************************************************************/

  /*! exports provided: GlobalChatComponent */

  /***/
  function srcAppComponentsChatPageGlobalChatGlobalChatComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GlobalChatComponent", function () {
      return GlobalChatComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_chat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/chat */
    "./src/app/services/chat.ts");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_services_users__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/users */
    "./src/app/services/users.ts");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../navbar/navbar.component */
    "./src/app/components/navbar/navbar.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/flex-layout/extended */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");
    /* harmony import */


    var _related_chats_related_chats_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./related-chats/related-chats.component */
    "./src/app/components/chat-page/global-chat/related-chats/related-chats.component.ts");
    /* harmony import */


    var _message_view_message_view_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../message-view/message-view.component */
    "./src/app/components/chat-page/message-view/message-view.component.ts");
    /* harmony import */


    var _subscribers_view_subscribers_view_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../subscribers-view/subscribers-view.component */
    "./src/app/components/chat-page/subscribers-view/subscribers-view.component.ts");

    function GlobalChatComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-related-chats");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-message-view");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-subscribers-view");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function GlobalChatComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GlobalChatComponent_div_2_Template_div_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.toggleLeft();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " \u25C0\uFE0E ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-related-chats");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GlobalChatComponent_div_2_Template_div_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.toggleMiddle();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " \u25C8\uFE0E ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-message-view");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GlobalChatComponent_div_2_Template_div_click_11_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.toggleRight();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " \u25B6\uFE0E ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-subscribers-view");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@expansionTitle", !ctx_r1.leftExpanded ? "visible" : "invisible");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@expansionPanel", ctx_r1.leftExpanded ? "open" : "closed");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@expansionTitle", ctx_r1.leftExpanded || ctx_r1.rightExpanded ? "visible" : "invisible");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@expansionPanel", !ctx_r1.rightExpanded && !ctx_r1.leftExpanded ? "open" : "closed");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@expansionTitle", !ctx_r1.rightExpanded ? "visible" : "invisible");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@expansionPanel", ctx_r1.rightExpanded ? "open" : "closed");
      }
    }

    var GlobalChatComponent = /*#__PURE__*/function () {
      function GlobalChatComponent(chatService, route, usersService, router, media) {
        _classCallCheck(this, GlobalChatComponent);

        this.chatService = chatService;
        this.route = route;
        this.usersService = usersService;
        this.router = router;
        this.media = media;
        this.leftExpanded = false;
        this.rightExpanded = false; //Reloads when params change 

        this.router.routeReuseStrategy.shouldReuseRoute = function () {
          return false;
        };
      }

      _createClass(GlobalChatComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          //Set chatId from router link id
          this.route.params.subscribe(function (params) {
            _this.chatId = params["id"];

            _this.chatService.initChatService(_this.chatId);

            _this.chatService.getChat();

            _this.chatSub = _this.chatService.getChatUpdated().subscribe(function (chat) {
              var userIds = [];

              for (var i = 0; i < chat.subs.length; i++) {
                var userId = chat.subs[i];

                if (!_this.usersService.containsUserSub(userId) && userIds.indexOf(userId) === -1) {
                  userIds.push(userId);
                }
              }

              for (var i = 0; i < chat.messages.length; i++) {
                var _userId = chat.messages[i].senderId;

                if (!_this.usersService.containsUserSub(_userId) && userIds.indexOf(_userId) === -1) {
                  userIds.push(_userId);
                }
              }

              _this.usersService.getUsers(userIds);
            });
          });
        } //Toggles the left expansion panel

      }, {
        key: "toggleLeft",
        value: function toggleLeft() {
          this.leftExpanded = !this.leftExpanded;

          if (this.leftExpanded) {
            this.rightExpanded = false;
          }
        } //Toggles the right expansion panel

      }, {
        key: "toggleRight",
        value: function toggleRight() {
          this.rightExpanded = !this.rightExpanded;

          if (this.rightExpanded) {
            this.leftExpanded = false;
          }
        } //Toggles the middle expansion panel

      }, {
        key: "toggleMiddle",
        value: function toggleMiddle() {
          this.rightExpanded = false;
          this.leftExpanded = false;
        }
      }]);

      return GlobalChatComponent;
    }();

    GlobalChatComponent.ɵfac = function GlobalChatComponent_Factory(t) {
      return new (t || GlobalChatComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_chat__WEBPACK_IMPORTED_MODULE_1__["ChatService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_users__WEBPACK_IMPORTED_MODULE_4__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["MediaObserver"]));
    };

    GlobalChatComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GlobalChatComponent,
      selectors: [["app-global-chat"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([src_app_services_chat__WEBPACK_IMPORTED_MODULE_1__["ChatService"]])],
      decls: 3,
      vars: 2,
      consts: [["fxShow", "true", "fxHide.lt-md", "true", "class", "container", 4, "ngIf"], ["fxShow", "true", "fxHide.gt-sm", "true", "class", "container-small", 4, "ngIf"], ["fxShow", "true", "fxHide.lt-md", "true", 1, "container"], [1, "left"], [1, "middle"], [1, "right"], ["fxShow", "true", "fxHide.gt-sm", "true", 1, "container-small"], [1, "header-container", "float-left", 3, "click"], [1, "header-text", "no-select", "transform-color"], [1, "left-small", "float-left"], [1, "header-text", "transform-color", "no-select"], [1, "middle-small", "float-left"], [1, "header-container", "float-right", 3, "click"], [1, "right-small", "float-right"]],
      template: function GlobalChatComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-navbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GlobalChatComponent_div_1_Template, 7, 0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GlobalChatComponent_div_2_Template, 16, 6, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.media.isActive("gt-sm"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.media.isActive("lt-md"));
        }
      },
      directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_8__["DefaultShowHideDirective"], _related_chats_related_chats_component__WEBPACK_IMPORTED_MODULE_9__["RelatedChatsComponent"], _message_view_message_view_component__WEBPACK_IMPORTED_MODULE_10__["MessageViewComponent"], _subscribers_view_subscribers_view_component__WEBPACK_IMPORTED_MODULE_11__["SubscribersViewComponent"]],
      styles: [".container[_ngcontent-%COMP%] {\n        width: 100%;\n        height: 100%;\n}\n.left[_ngcontent-%COMP%] {\n        height: 100%;\n        width: 25%;\n        float: left;\n        background-color: rgb(50, 64, 71);\n}\n.right[_ngcontent-%COMP%] {\n        height: 100%;\n        width: 20%;\n        float: left;\n}\n.middle[_ngcontent-%COMP%] {\n        float: left;\n        height: 100%; \n        margin-left: 1px;\n        margin-right: 1px;\n        \n        background: linear-gradient(to right, rgb(38, 49, 54) 0px, rgb(38, 49, 54) 50px, rgb(50, 64, 71) 50px, rgb(50, 64, 71) 100%);\n        width: calc(55% - 2px);\n}\n\n.header-container[_ngcontent-%COMP%] {\n        display: flex;\n        height: 100%;\n        \n        background-color: rgb(233, 233, 233);\n        justify-content: center;\n        align-items: center;\n}\n.header-text[_ngcontent-%COMP%] {\n        font-weight: bolder;\n        font-family: 'poppins-semibold';\n        text-align: center;\n        font-size: 17px;\n        width: 100%;\n        color: rgb(54, 136, 252) !important;\n}\n.header-container[_ngcontent-%COMP%]:hover { cursor: pointer; }\n.header-container[_ngcontent-%COMP%]:hover   .header-text[_ngcontent-%COMP%] { color: black; }\n.float-left[_ngcontent-%COMP%] { float: left; }\n.float-right[_ngcontent-%COMP%] { float: right; }\n.middle-small[_ngcontent-%COMP%] {\n        background: linear-gradient(to right, rgb(38, 49, 54) 0px, rgb(38, 49, 54) 50px, rgb(50, 64, 71) 50px, rgb(50, 64, 71) 100%);\n        height: 100%;\n}\n.right-small[_ngcontent-%COMP%] { height: 100%; }\n.left-small[_ngcontent-%COMP%] { height: 100%; }\n.container-small[_ngcontent-%COMP%] {\n        width: 100%;\n        height: 100%;\n        display: flex;  \n}\n\n.no-select[_ngcontent-%COMP%] {\n        -webkit-touch-callout: none;\n        -webkit-user-select: none; \n        -moz-user-select: none; \n        user-select: none;\n}\n.transform-color[_ngcontent-%COMP%] {\n        transition: color 0.1s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jaGF0LXBhZ2UvZ2xvYmFsLWNoYXQvZ2xvYmFsLWNoYXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxtQkFBbUI7QUFDbkI7UUFDUSxXQUFXO1FBQ1gsWUFBWTtBQUNwQjtBQUVBO1FBQ1EsWUFBWTtRQUNaLFVBQVU7UUFDVixXQUFXO1FBQ1gsaUNBQWlDO0FBQ3pDO0FBRUE7UUFDUSxZQUFZO1FBQ1osVUFBVTtRQUNWLFdBQVc7QUFDbkI7QUFFQTtRQUNRLFdBQVc7UUFDWCxZQUFZO1FBQ1osZ0JBQWdCO1FBQ2hCLGlCQUFpQjtRQUNqQix1Q0FBdUM7UUFDdkMsNEhBQTRIO1FBQzVILHNCQUFzQjtBQUM5QjtBQUVBLG1CQUFtQjtBQUNuQjtRQUNRLGFBQWE7UUFDYixZQUFZO1FBQ1osdUNBQXVDO1FBQ3ZDLG9DQUFvQztRQUNwQyx1QkFBdUI7UUFDdkIsbUJBQW1CO0FBQzNCO0FBRUE7UUFDUSxtQkFBbUI7UUFDbkIsK0JBQStCO1FBQy9CLGtCQUFrQjtRQUNsQixlQUFlO1FBQ2YsV0FBVztRQUNYLG1DQUFtQztBQUMzQztBQUVBLDBCQUEwQixlQUFlLEVBQUU7QUFFM0MsdUNBQXVDLFlBQVksRUFBRTtBQUVyRCxjQUFjLFdBQVcsRUFBRTtBQUUzQixlQUFlLFlBQVksRUFBRTtBQUU3QjtRQUNRLDRIQUE0SDtRQUM1SCxZQUFZO0FBQ3BCO0FBRUEsZUFBZSxZQUFZLEVBQUU7QUFFN0IsY0FBYyxZQUFZLEVBQUU7QUFFNUI7UUFDUSxXQUFXO1FBQ1gsWUFBWTtRQUNaLGFBQWE7QUFDckI7QUFFQSx1Q0FBdUM7QUFDdkM7UUFDUSwyQkFBMkI7UUFDM0IseUJBQXlCO1FBRXpCLHNCQUFzQjtRQUV0QixpQkFBaUI7QUFDekI7QUFFQTtRQUlRLHNCQUFzQjtBQUM5QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2hhdC1wYWdlL2dsb2JhbC1jaGF0L2dsb2JhbC1jaGF0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBMYXJnZSBEaXNwbGF5cyAqL1xuLmNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5sZWZ0IHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB3aWR0aDogMjUlO1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDUwLCA2NCwgNzEpO1xufVxuXG4ucmlnaHQge1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHdpZHRoOiAyMCU7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xufVxuXG4ubWlkZGxlIHtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgIGhlaWdodDogMTAwJTsgXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxcHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMXB4O1xuICAgICAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTAsIDY0LCA3MSk7ICovXG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiKDM4LCA0OSwgNTQpIDBweCwgcmdiKDM4LCA0OSwgNTQpIDUwcHgsIHJnYig1MCwgNjQsIDcxKSA1MHB4LCByZ2IoNTAsIDY0LCA3MSkgMTAwJSk7XG4gICAgICAgIHdpZHRoOiBjYWxjKDU1JSAtIDJweCk7XG59XG5cbi8qIFNtYWxsIERpc3BsYXlzICovXG4uaGVhZGVyLWNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDU2LCA2MywgNjUpOyAqL1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMzLCAyMzMsIDIzMyk7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uaGVhZGVyLXRleHQge1xuICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgICAgICBmb250LWZhbWlseTogJ3BvcHBpbnMtc2VtaWJvbGQnO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGNvbG9yOiByZ2IoNTQsIDEzNiwgMjUyKSAhaW1wb3J0YW50O1xufVxuXG4uaGVhZGVyLWNvbnRhaW5lcjpob3ZlciB7IGN1cnNvcjogcG9pbnRlcjsgfVxuXG4uaGVhZGVyLWNvbnRhaW5lcjpob3ZlciAuaGVhZGVyLXRleHQgeyBjb2xvcjogYmxhY2s7IH1cblxuLmZsb2F0LWxlZnQgeyBmbG9hdDogbGVmdDsgfVxuXG4uZmxvYXQtcmlnaHQgeyBmbG9hdDogcmlnaHQ7IH1cblxuLm1pZGRsZS1zbWFsbCB7XG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiKDM4LCA0OSwgNTQpIDBweCwgcmdiKDM4LCA0OSwgNTQpIDUwcHgsIHJnYig1MCwgNjQsIDcxKSA1MHB4LCByZ2IoNTAsIDY0LCA3MSkgMTAwJSk7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbn1cblxuLnJpZ2h0LXNtYWxsIHsgaGVpZ2h0OiAxMDAlOyB9XG5cbi5sZWZ0LXNtYWxsIHsgaGVpZ2h0OiAxMDAlOyB9XG5cbi5jb250YWluZXItc21hbGwge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4OyAgXG59XG5cbi8qIFByZXZlbnRzIHVzZXJzIGZyb20gc2VsZWN0aW5nIHRleHQgKi9cbi5uby1zZWxlY3Qge1xuICAgICAgICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XG4gICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7IFxuICAgICAgICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7IFxuICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lOyBcbiAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lOyBcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi50cmFuc2Zvcm0tY29sb3Ige1xuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGNvbG9yIDAuMXM7XG4gICAgICAgIC1tb3otdHJhbnNpdGlvbjogY29sb3IgMC4xcztcbiAgICAgICAgLW8tdHJhbnNpdGlvbjogY29sb3IgMC4xcztcbiAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4xcztcbn0iXX0= */"],
      data: {
        animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])("expansionPanel", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])("open", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
          visibility: "visible",
          width: "calc(100% - 64px)"
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])("closed", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
          width: "0%",
          visibility: "hidden"
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])("open => closed", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])("0.2s")]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])("closed => open", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])("0.2s")])]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])("expansionTitle", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])("visible", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
          width: "30px",
          lineHeight: "30px",
          marginRight: "1px",
          marginLeft: "1px",
          visibility: "visible"
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])("invisible", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
          width: "0px",
          visibility: "hidden"
        }))])]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GlobalChatComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-global-chat",
          templateUrl: "global-chat.component.html",
          styleUrls: ["global-chat.component.css"],
          animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])("expansionPanel", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])("open", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
            visibility: "visible",
            width: "calc(100% - 64px)"
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])("closed", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
            width: "0%",
            visibility: "hidden"
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])("open => closed", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])("0.2s")]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])("closed => open", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])("0.2s")])]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])("expansionTitle", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])("visible", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
            width: "30px",
            lineHeight: "30px",
            marginRight: "1px",
            marginLeft: "1px",
            visibility: "visible"
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])("invisible", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
            width: "0px",
            visibility: "hidden"
          }))])],
          providers: [src_app_services_chat__WEBPACK_IMPORTED_MODULE_1__["ChatService"]]
        }]
      }], function () {
        return [{
          type: src_app_services_chat__WEBPACK_IMPORTED_MODULE_1__["ChatService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: src_app_services_users__WEBPACK_IMPORTED_MODULE_4__["UsersService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["MediaObserver"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/chat-page/global-chat/related-chats/related-chats.component.ts":
  /*!*******************************************************************************************!*\
    !*** ./src/app/components/chat-page/global-chat/related-chats/related-chats.component.ts ***!
    \*******************************************************************************************/

  /*! exports provided: RelatedChatsComponent */

  /***/
  function srcAppComponentsChatPageGlobalChatRelatedChatsRelatedChatsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RelatedChatsComponent", function () {
      return RelatedChatsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_chats__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../../services/chats */
    "./src/app/services/chats.ts");
    /* harmony import */


    var _services_chat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../services/chat */
    "./src/app/services/chat.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../header/header.component */
    "./src/app/components/header/header.component.ts");
    /* harmony import */


    var _chat_selection_chat_selection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../chat-selection/chat-selection */
    "./src/app/components/chat-selection/chat-selection.ts");

    var RelatedChatsComponent = /*#__PURE__*/function () {
      function RelatedChatsComponent(chatsService, chatService) {
        _classCallCheck(this, RelatedChatsComponent);

        this.chatsService = chatsService;
        this.chatService = chatService;
        this.chatIds = [];
        this.queried = false;
      }

      _createClass(RelatedChatsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.chatSub = this.chatService.getChatUpdated().subscribe(function (chat) {
            if (_this2.queried) return;
            _this2.queried = true;

            _this2.chatsService.getRelatedChatIds(chat.tags, chat.category, chat._id).then(function (chatIds) {
              _this2.chatIds = chatIds;

              _this2.chatsService.getChats(chatIds);
            });
          });
          this.chatService.getChat();
        } //Avoid memory leaks

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.chatSub.unsubscribe();
        }
      }]);

      return RelatedChatsComponent;
    }();

    RelatedChatsComponent.ɵfac = function RelatedChatsComponent_Factory(t) {
      return new (t || RelatedChatsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_chats__WEBPACK_IMPORTED_MODULE_1__["ChatsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_chat__WEBPACK_IMPORTED_MODULE_2__["ChatService"]));
    };

    RelatedChatsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RelatedChatsComponent,
      selectors: [["app-related-chats"]],
      decls: 4,
      vars: 4,
      consts: [[1, "container"], [3, "headerText", "imageUrl"], [1, "chat-selection-container"], [3, "chatIds", "color"]],
      template: function RelatedChatsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-chat-selection", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("headerText", "Related Chats")("imageUrl", "../../../assets/images/Related2.png");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("chatIds", ctx.chatIds)("color", "rgb(173, 243, 250)");
        }
      },
      directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _chat_selection_chat_selection__WEBPACK_IMPORTED_MODULE_4__["ChatSelectionComponent"]],
      styles: [".container[_ngcontent-%COMP%] {\n        width: 100%;\n        height: 100%;\n}\n\n.chat-selection-container[_ngcontent-%COMP%] {\n        width: 100%;\n        height: calc(100% - 35px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jaGF0LXBhZ2UvZ2xvYmFsLWNoYXQvcmVsYXRlZC1jaGF0cy9yZWxhdGVkLWNoYXRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7UUFDUSxXQUFXO1FBQ1gsWUFBWTtBQUNwQjs7QUFFQTtRQUNRLFdBQVc7UUFDWCx5QkFBeUI7QUFDakMiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NoYXQtcGFnZS9nbG9iYWwtY2hhdC9yZWxhdGVkLWNoYXRzL3JlbGF0ZWQtY2hhdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY2hhdC1zZWxlY3Rpb24tY29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gMzVweCk7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RelatedChatsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-related-chats",
          templateUrl: "related-chats.component.html",
          styleUrls: ["related-chats.component.css"]
        }]
      }], function () {
        return [{
          type: _services_chats__WEBPACK_IMPORTED_MODULE_1__["ChatsService"]
        }, {
          type: _services_chat__WEBPACK_IMPORTED_MODULE_2__["ChatService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/chat-page/message-view/chat-title/chat-subscribe/chat-subscribe-admin-dialog/chat-subscribe-admin-dialog.component.ts":
  /*!**************************************************************************************************************************************************!*\
    !*** ./src/app/components/chat-page/message-view/chat-title/chat-subscribe/chat-subscribe-admin-dialog/chat-subscribe-admin-dialog.component.ts ***!
    \**************************************************************************************************************************************************/

  /*! exports provided: ChatSubscribeAdminDialogComponent */

  /***/
  function srcAppComponentsChatPageMessageViewChatTitleChatSubscribeChatSubscribeAdminDialogChatSubscribeAdminDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatSubscribeAdminDialogComponent", function () {
      return ChatSubscribeAdminDialogComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var src_app_services_chat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/chat */
    "./src/app/services/chat.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    function ChatSubscribeAdminDialogComponent_button_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatSubscribeAdminDialogComponent_button_6_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1.uploadImage();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Upload");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var ChatSubscribeAdminDialogComponent = /*#__PURE__*/function () {
      function ChatSubscribeAdminDialogComponent(dialogRef, chatService, data) {
        _classCallCheck(this, ChatSubscribeAdminDialogComponent);

        this.dialogRef = dialogRef;
        this.chatService = chatService;
        this.data = data;
      }

      _createClass(ChatSubscribeAdminDialogComponent, [{
        key: "onExit",
        value: function onExit() {
          this.dialogRef.close();
        } //Sets the selected image to the image selected by the user

      }, {
        key: "onImageSelected",
        value: function onImageSelected(event) {
          var _this3 = this;

          this.selectedImage = event.target.files[0];
          var reader = new FileReader();
          reader.readAsDataURL(this.selectedImage);

          reader.onload = function () {
            var originalDataUrl = reader.result; //Scaled the image down to a 400 X 400 square

            _this3.scaleImage(originalDataUrl, 400, 400, _this3.selectedImage.type, 0.7, function (dataUrl) {
              _this3.selectedImageUrl = dataUrl;
            });
          };
        } //https://codepen.io/shrinivas93/pen/xdLLPN

      }, {
        key: "scaleImage",
        value: function scaleImage(dataUrl, newWidth, newHeight, imageType, imageArguments, callback) {
          imageType = imageType || "image/jpeg";
          imageArguments = imageArguments || 0.7;
          var image = new Image();

          image.onload = function () {
            var canvas = document.createElement("canvas");
            canvas.width = newWidth;
            canvas.height = newHeight;
            var ctx = canvas.getContext("2d");
            ctx.drawImage(image, 0, 0, newWidth, newHeight);
            var newDataUrl = canvas.toDataURL(imageType, imageArguments);
            callback(newDataUrl);
          };

          image.src = dataUrl;
        } //Uploads image

      }, {
        key: "uploadImage",
        value: function uploadImage() {
          if (this.selectedImageUrl === undefined || this.selectedImageUrl === null) return;
          this.chatService.setChatId(this.data.chatId);
          this.chatService.setChatImage(this.selectedImageUrl);
          this.dialogRef.close();
        }
      }]);

      return ChatSubscribeAdminDialogComponent;
    }();

    ChatSubscribeAdminDialogComponent.ɵfac = function ChatSubscribeAdminDialogComponent_Factory(t) {
      return new (t || ChatSubscribeAdminDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_chat__WEBPACK_IMPORTED_MODULE_2__["ChatService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]));
    };

    ChatSubscribeAdminDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ChatSubscribeAdminDialogComponent,
      selectors: [["app-chat-subscribe-admin-dialog"]],
      decls: 9,
      vars: 1,
      consts: [[1, "container"], [1, "dialog-header"], [1, "file-input-container"], ["type", "file", "accept", "image/*", 3, "change"], ["mat-dialog-actions", ""], ["mat-button", "", "class", "upload-button", 3, "click", 4, "ngIf"], ["mat-button", "", 1, "dialog-button", 3, "click"], ["mat-button", "", 1, "upload-button", 3, "click"]],
      template: function ChatSubscribeAdminDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Upload chat image");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ChatSubscribeAdminDialogComponent_Template_input_change_4_listener($event) {
            return ctx.onImageSelected($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ChatSubscribeAdminDialogComponent_button_6_Template, 2, 0, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatSubscribeAdminDialogComponent_Template_button_click_7_listener() {
            return ctx.onExit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Exit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedImage !== null && ctx.selectedImage !== undefined);
        }
      },
      directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"]],
      styles: [".container[_ngcontent-%COMP%] {\n        background-image: linear-gradient(rgb(32, 32, 32), rgb(2, 78, 114));\n        width: 100%;\n        height: 100%;\n}\n\n.dialog-header[_ngcontent-%COMP%] {\n        box-sizing: border-box;\n        margin-top: 10px;\n        margin-left: 10px;\n        width: calc(100% - 20px);\n        padding: 5px;\n        padding-left: 10px;\n        padding-right: 10px;\n        padding-top: 20px;\n        padding-bottom: 20px;\n        background-color: rgb(48, 60, 65);\n        border-radius: 5px;\n        font-size: 22px;\n        font-weight: bold;\n        text-align: center;\n}\n\n.file-input-container[_ngcontent-%COMP%] {\n        box-sizing: border-box;\n        background-color: rgb(48, 60, 65);\n        padding: 10px;\n        margin-top: 10px;\n        width: calc(100% - 20px);\n        margin-left: 10px;\n        border-radius: 5px;\n        display: flex;\n        align-content: center;\n}\n\n.dialog-button[_ngcontent-%COMP%] {\n        font-size: 16px;\n        width: 100%;\n}\n\n.upload-button[_ngcontent-%COMP%] {\n        font-size: 18px;\n        width: 100%;\n        color: #7abffc; \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jaGF0LXBhZ2UvbWVzc2FnZS12aWV3L2NoYXQtdGl0bGUvY2hhdC1zdWJzY3JpYmUvY2hhdC1zdWJzY3JpYmUtYWRtaW4tZGlhbG9nL2NoYXQtc3Vic2NyaWJlLWFkbWluLWRpYWxvZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO1FBQ1EsbUVBQW1FO1FBQ25FLFdBQVc7UUFDWCxZQUFZO0FBQ3BCOztBQUVBO1FBQ1Esc0JBQXNCO1FBQ3RCLGdCQUFnQjtRQUNoQixpQkFBaUI7UUFDakIsd0JBQXdCO1FBQ3hCLFlBQVk7UUFDWixrQkFBa0I7UUFDbEIsbUJBQW1CO1FBQ25CLGlCQUFpQjtRQUNqQixvQkFBb0I7UUFDcEIsaUNBQWlDO1FBQ2pDLGtCQUFrQjtRQUNsQixlQUFlO1FBQ2YsaUJBQWlCO1FBQ2pCLGtCQUFrQjtBQUMxQjs7QUFFQTtRQUNRLHNCQUFzQjtRQUN0QixpQ0FBaUM7UUFDakMsYUFBYTtRQUNiLGdCQUFnQjtRQUNoQix3QkFBd0I7UUFDeEIsaUJBQWlCO1FBQ2pCLGtCQUFrQjtRQUNsQixhQUFhO1FBQ2IscUJBQXFCO0FBQzdCOztBQUVBO1FBQ1EsZUFBZTtRQUNmLFdBQVc7QUFDbkI7O0FBR0E7UUFDUSxlQUFlO1FBQ2YsV0FBVztRQUNYLGNBQWM7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NoYXQtcGFnZS9tZXNzYWdlLXZpZXcvY2hhdC10aXRsZS9jaGF0LXN1YnNjcmliZS9jaGF0LXN1YnNjcmliZS1hZG1pbi1kaWFsb2cvY2hhdC1zdWJzY3JpYmUtYWRtaW4tZGlhbG9nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYigzMiwgMzIsIDMyKSwgcmdiKDIsIDc4LCAxMTQpKTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbn1cblxuLmRpYWxvZy1oZWFkZXIge1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xuICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDgsIDYwLCA2NSk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZmlsZS1pbnB1dC1jb250YWluZXIge1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDgsIDYwLCA2NSk7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyMHB4KTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xufVxuXG4uZGlhbG9nLWJ1dHRvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG59XG5cblxuLnVwbG9hZC1idXR0b24ge1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBjb2xvcjogIzdhYmZmYzsgXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatSubscribeAdminDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-chat-subscribe-admin-dialog',
          templateUrl: 'chat-subscribe-admin-dialog.component.html',
          styleUrls: ["chat-subscribe-admin-dialog.component.css"]
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
        }, {
          type: src_app_services_chat__WEBPACK_IMPORTED_MODULE_2__["ChatService"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/chat-page/message-view/chat-title/chat-subscribe/chat-subscribe.component.ts":
  /*!*********************************************************************************************************!*\
    !*** ./src/app/components/chat-page/message-view/chat-title/chat-subscribe/chat-subscribe.component.ts ***!
    \*********************************************************************************************************/

  /*! exports provided: ChatSubscribeComponent */

  /***/
  function srcAppComponentsChatPageMessageViewChatTitleChatSubscribeChatSubscribeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatSubscribeComponent", function () {
      return ChatSubscribeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _chat_subscribe_chat_subscribe_admin_dialog_chat_subscribe_admin_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../chat-subscribe/chat-subscribe-admin-dialog/chat-subscribe-admin-dialog.component */
    "./src/app/components/chat-page/message-view/chat-title/chat-subscribe/chat-subscribe-admin-dialog/chat-subscribe-admin-dialog.component.ts");
    /* harmony import */


    var _services_chat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../../services/chat */
    "./src/app/services/chat.ts");
    /* harmony import */


    var _services_authentication__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../../services/authentication */
    "./src/app/services/authentication.ts");
    /* harmony import */


    var _services_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../../services/user */
    "./src/app/services/user.ts");
    /* harmony import */


    var src_app_services_users__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/users */
    "./src/app/services/users.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ChatSubscribeComponent_div_0_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatSubscribeComponent_div_0_div_1_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r4.openDialog();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Edit ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ChatSubscribeComponent_div_0_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatSubscribeComponent_div_0_div_2_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r6.subscribe();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Join ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ChatSubscribeComponent_div_0_div_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatSubscribeComponent_div_0_div_3_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r8.unsubscribe();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Joined ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ChatSubscribeComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChatSubscribeComponent_div_0_div_1_Template, 3, 0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ChatSubscribeComponent_div_0_div_2_Template, 3, 0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ChatSubscribeComponent_div_0_div_3_Template, 3, 0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isAdmin());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.isSubscribed());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isSubscribed() && !ctx_r0.isAdmin());
      }
    }

    var ChatSubscribeComponent = /*#__PURE__*/function () {
      function ChatSubscribeComponent(chatService, authService, userService, usersService, dialog) {
        _classCallCheck(this, ChatSubscribeComponent);

        this.chatService = chatService;
        this.authService = authService;
        this.userService = userService;
        this.usersService = usersService;
        this.dialog = dialog;
        this.subscribing = false;
      } //Initializes user object and user subscription


      _createClass(ChatSubscribeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.userSub = this.userService.getUserUpdated().subscribe(function (user) {
            _this4.user = user;
          });
          this.userService.getUser();
        }
      }, {
        key: "isAdmin",
        value: function isAdmin() {
          if (this.user === undefined || this.user === null) return false;
          return this.chatService.isAdmin(this.user._id);
        } //Subscribes user to chat if the user is logged in and has not yet subscribed

      }, {
        key: "subscribe",
        value: function subscribe() {
          var _this5 = this;

          if (this.subscribing) return;
          this.subscribing = true;
          this.chatService.subscribeToChat().then(function () {
            if (_this5.usersService.getUserSub(_this5.user._id) === null || _this5.usersService.getUserSub(_this5.user._id) === undefined) {
              _this5.usersService.getUser(_this5.user._id).then(function (userSub) {
                _this5.usersService.users.push(userSub);

                _this5.usersService.updateUsers();
              });
            }

            _this5.userService.getUser(true);

            _this5.subscribing = false;
          })["catch"](function (reject) {
            return console.log(reject);
          });
        } //Unsubscribes user from chat if the user is logged in and is already subscribed

      }, {
        key: "unsubscribe",
        value: function unsubscribe() {
          var _this6 = this;

          this.chatService.unsubscribeFromChat().then(function () {
            return _this6.userService.getUser(true);
          })["catch"](function (reject) {
            return console.log(reject);
          });
        } //Checks if user has logged in 

      }, {
        key: "isAuthenticated",
        value: function isAuthenticated() {
          return this.authService.isAuthenticated();
        } //Checks if user is subscribed to the chat

      }, {
        key: "isSubscribed",
        value: function isSubscribed() {
          if (this.chatService.chatId === undefined || this.chatService.chatId === null || this.user === null || this.user === undefined) return false;
          var chat = this.chatService.getChatSub();

          for (var i = 0; i < this.user.chatIds.length; i++) {
            if (this.user.chatIds[i] === chat._id) {
              return true;
            }
          }

          return false;
        }
      }, {
        key: "openDialog",
        value: function openDialog() {
          var _this7 = this;

          var dialogRef = this.dialog.open(_chat_subscribe_chat_subscribe_admin_dialog_chat_subscribe_admin_dialog_component__WEBPACK_IMPORTED_MODULE_1__["ChatSubscribeAdminDialogComponent"], {
            width: '350px',
            height: "350px",
            data: {
              chatId: this.chatService.chatId
            }
          });
          dialogRef.afterClosed().subscribe(function () {
            _this7.chatService.getChat(true);
          });
        } //Avoid memory leaks

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.userSub.unsubscribe();
        }
      }]);

      return ChatSubscribeComponent;
    }();

    ChatSubscribeComponent.ɵfac = function ChatSubscribeComponent_Factory(t) {
      return new (t || ChatSubscribeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_chat__WEBPACK_IMPORTED_MODULE_2__["ChatService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_authentication__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user__WEBPACK_IMPORTED_MODULE_4__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_users__WEBPACK_IMPORTED_MODULE_5__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]));
    };

    ChatSubscribeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ChatSubscribeComponent,
      selectors: [["app-chat-subscribe"]],
      decls: 1,
      vars: 1,
      consts: [["class", "container transform-height", 4, "ngIf"], [1, "container", "transform-height"], ["class", "admin-container transform-background-color", 3, "click", 4, "ngIf"], ["class", "subscribe-button-container transform-background-color", 3, "click", 4, "ngIf"], ["class", "subscribed-button-container transform-background-color", 3, "click", 4, "ngIf"], [1, "admin-container", "transform-background-color", 3, "click"], [1, "admin-text", "transform-color"], [1, "subscribe-button-container", "transform-background-color", 3, "click"], [1, "subscribe-button", "transform-color"], [1, "subscribed-button-container", "transform-background-color", 3, "click"], [1, "subscribed-button", "transform-color"]],
      template: function ChatSubscribeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ChatSubscribeComponent_div_0_Template, 4, 3, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAuthenticated());
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]],
      styles: [".container[_ngcontent-%COMP%] {\n        width: 60px;\n        height: 35px;\n}\n\n.container[_ngcontent-%COMP%]:hover {\n        height: 40px;\n}\n\n\n\n.subscribe-button-container[_ngcontent-%COMP%] {\n        width: 100%;\n        \n        height: 40px;\n        border: solid hotpink;\n        border-width: 2px;\n        border-radius: 5px;\n        text-align: center;\n        color: white;\n        background-color: transparent\n}\n\n.subscribe-button[_ngcontent-%COMP%] {\n        line-height: 40px;\n        height: 40px;\n}\n\n.subscribe-button-container[_ngcontent-%COMP%]:hover   .subscribe-button[_ngcontent-%COMP%] {\n        background-color: hotpink;\n        color: black;\n        cursor: pointer;\n}\n\n\n\n.subscribed-button-container[_ngcontent-%COMP%] {\n        width: 100%;\n        \n        height: 40px;\n        border: solid hotpink;\n        border-width: 2px;\n        border-radius: 5px;\n        text-align: center;\n        color: white;\n        background-color: transparent\n}\n\n.subscribed-button[_ngcontent-%COMP%] {\n        line-height: 40px;\n        height: 40px;\n}\n\n.subscribed-button-container[_ngcontent-%COMP%]:hover   .subscribed-button[_ngcontent-%COMP%] {\n        background-color: hotpink;\n        color: black;\n        cursor: pointer;\n}\n\n\n\n.admin-container[_ngcontent-%COMP%] {\n        width: 100%;\n        height: 40px;\n        border: solid hotpink;\n        border-width: 2px;\n        border-radius: 5px;\n        text-align: center;\n        color: white;\n        background-color: transparent\n}\n\n.admin-text[_ngcontent-%COMP%] {\n        line-height: 40px;\n        height: 40px;\n}\n\n.admin-container[_ngcontent-%COMP%]:hover   .admin-text[_ngcontent-%COMP%] {\n        background-color: hotpink;\n        color: black;\n        cursor: pointer;\n}\n\n\n\n.transform-height[_ngcontent-%COMP%] {\n        transition: height 0.2s;\n}\n\n.transform-color[_ngcontent-%COMP%] {\n        transition: color 0.2s;\n}\n\n.transform-background-color[_ngcontent-%COMP%] {\n        transition: background-color 0.2s;\n}\n\n  .mat-dialog-container {\n        padding: 0px !important;\n        background-color: rgb(32, 32, 32) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jaGF0LXBhZ2UvbWVzc2FnZS12aWV3L2NoYXQtdGl0bGUvY2hhdC1zdWJzY3JpYmUvY2hhdC1zdWJzY3JpYmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtRQUNRLFdBQVc7UUFDWCxZQUFZO0FBQ3BCOztBQUVBO1FBQ1EsWUFBWTtBQUNwQjs7QUFFQSxjQUFjOztBQUNkO1FBQ1EsV0FBVztRQUNYLGtCQUFrQjtRQUNsQixZQUFZO1FBQ1oscUJBQXFCO1FBQ3JCLGlCQUFpQjtRQUNqQixrQkFBa0I7UUFDbEIsa0JBQWtCO1FBQ2xCLFlBQVk7UUFDWjtBQUNSOztBQUVBO1FBQ1EsaUJBQWlCO1FBQ2pCLFlBQVk7QUFDcEI7O0FBRUE7UUFDUSx5QkFBeUI7UUFDekIsWUFBWTtRQUNaLGVBQWU7QUFDdkI7O0FBRUEsZUFBZTs7QUFDZjtRQUNRLFdBQVc7UUFDWCxrQkFBa0I7UUFDbEIsWUFBWTtRQUNaLHFCQUFxQjtRQUNyQixpQkFBaUI7UUFDakIsa0JBQWtCO1FBQ2xCLGtCQUFrQjtRQUNsQixZQUFZO1FBQ1o7QUFDUjs7QUFFQTtRQUNRLGlCQUFpQjtRQUNqQixZQUFZO0FBQ3BCOztBQUVBO1FBQ1EseUJBQXlCO1FBQ3pCLFlBQVk7UUFDWixlQUFlO0FBQ3ZCOztBQUVBLGNBQWM7O0FBQ2Q7UUFDUSxXQUFXO1FBQ1gsWUFBWTtRQUNaLHFCQUFxQjtRQUNyQixpQkFBaUI7UUFDakIsa0JBQWtCO1FBQ2xCLGtCQUFrQjtRQUNsQixZQUFZO1FBQ1o7QUFDUjs7QUFFQTtRQUNRLGlCQUFpQjtRQUNqQixZQUFZO0FBQ3BCOztBQUVBO1FBQ1EseUJBQXlCO1FBQ3pCLFlBQVk7UUFDWixlQUFlO0FBQ3ZCOztBQUVBLGVBQWU7O0FBQ2Y7UUFJUSx1QkFBdUI7QUFDL0I7O0FBR0E7UUFJUSxzQkFBc0I7QUFDOUI7O0FBRUE7UUFJUSxpQ0FBaUM7QUFDekM7O0FBRUE7UUFDUSx1QkFBdUI7UUFDdkIsNENBQTRDO0FBQ3BEIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jaGF0LXBhZ2UvbWVzc2FnZS12aWV3L2NoYXQtdGl0bGUvY2hhdC1zdWJzY3JpYmUvY2hhdC1zdWJzY3JpYmUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICAgICAgICB3aWR0aDogNjBweDtcbiAgICAgICAgaGVpZ2h0OiAzNXB4O1xufVxuXG4uY29udGFpbmVyOmhvdmVyIHtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xufVxuXG4vKiBTdWJzY3JpYmUgKi9cbi5zdWJzY3JpYmUtYnV0dG9uLWNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAvKiBoZWlnaHQ6IDEwMCU7ICovXG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgYm9yZGVyOiBzb2xpZCBob3RwaW5rO1xuICAgICAgICBib3JkZXItd2lkdGg6IDJweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnRcbn1cblxuLnN1YnNjcmliZS1idXR0b24ge1xuICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xufVxuXG4uc3Vic2NyaWJlLWJ1dHRvbi1jb250YWluZXI6aG92ZXIgLnN1YnNjcmliZS1idXR0b24ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBob3RwaW5rO1xuICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLyogU3Vic2NyaWJlZCAqL1xuLnN1YnNjcmliZWQtYnV0dG9uLWNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAvKiBoZWlnaHQ6IDEwMCU7ICovXG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgYm9yZGVyOiBzb2xpZCBob3RwaW5rO1xuICAgICAgICBib3JkZXItd2lkdGg6IDJweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnRcbn1cblxuLnN1YnNjcmliZWQtYnV0dG9uIHtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgICAgIGhlaWdodDogNDBweDtcbn1cblxuLnN1YnNjcmliZWQtYnV0dG9uLWNvbnRhaW5lcjpob3ZlciAuc3Vic2NyaWJlZC1idXR0b24ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBob3RwaW5rO1xuICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLyogU3Vic2NyaWJlICovXG4uYWRtaW4tY29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgYm9yZGVyOiBzb2xpZCBob3RwaW5rO1xuICAgICAgICBib3JkZXItd2lkdGg6IDJweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnRcbn1cblxuLmFkbWluLXRleHQge1xuICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xufVxuXG4uYWRtaW4tY29udGFpbmVyOmhvdmVyIC5hZG1pbi10ZXh0IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogaG90cGluaztcbiAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi8qIFRyYW5zZm9ybXMgKi9cbi50cmFuc2Zvcm0taGVpZ2h0IHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBoZWlnaHQgMC4ycztcbiAgICAgICAgLW1vei10cmFuc2l0aW9uOiBoZWlnaHQgMC4ycztcbiAgICAgICAgLW8tdHJhbnNpdGlvbjogaGVpZ2h0IDAuMnM7XG4gICAgICAgIHRyYW5zaXRpb246IGhlaWdodCAwLjJzO1xufVxuXG5cbi50cmFuc2Zvcm0tY29sb3Ige1xuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGNvbG9yIDAuMnM7XG4gICAgICAgIC1tb3otdHJhbnNpdGlvbjogY29sb3IgMC4ycztcbiAgICAgICAgLW8tdHJhbnNpdGlvbjogY29sb3IgMC4ycztcbiAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4ycztcbn1cblxuLnRyYW5zZm9ybS1iYWNrZ3JvdW5kLWNvbG9yIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnM7XG4gICAgICAgIC1tb3otdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzO1xuICAgICAgICAtby10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnM7XG4gICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycztcbn1cblxuOjpuZy1kZWVwIC5tYXQtZGlhbG9nLWNvbnRhaW5lciB7XG4gICAgICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzIsIDMyLCAzMikgIWltcG9ydGFudDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatSubscribeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-chat-subscribe",
          templateUrl: "chat-subscribe.component.html",
          styleUrls: ["chat-subscribe.component.css"]
        }]
      }], function () {
        return [{
          type: _services_chat__WEBPACK_IMPORTED_MODULE_2__["ChatService"]
        }, {
          type: _services_authentication__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
        }, {
          type: _services_user__WEBPACK_IMPORTED_MODULE_4__["UserService"]
        }, {
          type: src_app_services_users__WEBPACK_IMPORTED_MODULE_5__["UsersService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/chat-page/message-view/chat-title/chat-title.component.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/components/chat-page/message-view/chat-title/chat-title.component.ts ***!
    \**************************************************************************************/

  /*! exports provided: ChatTitleComponent */

  /***/
  function srcAppComponentsChatPageMessageViewChatTitleChatTitleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatTitleComponent", function () {
      return ChatTitleComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_chat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../../services/chat */
    "./src/app/services/chat.ts");
    /* harmony import */


    var _services_chats__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../services/chats */
    "./src/app/services/chats.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _image_fab_image_fab_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../image-fab/image-fab.component */
    "./src/app/components/image-fab/image-fab.component.ts");
    /* harmony import */


    var _chat_icon_chat_icon_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../chat-icon/chat-icon.component */
    "./src/app/components/chat-icon/chat-icon.component.ts");
    /* harmony import */


    var _chat_subscribe_chat_subscribe_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./chat-subscribe/chat-subscribe.component */
    "./src/app/components/chat-page/message-view/chat-title/chat-subscribe/chat-subscribe.component.ts");

    function ChatTitleComponent_app_image_fab_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-image-fab", 8);
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imageUrl", ctx_r0.chat.image)("showStatus", false);
      }
    }

    function ChatTitleComponent_app_chat_icon_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-chat-icon");
      }
    }

    function ChatTitleComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.chat.title, " ");
      }
    }

    function ChatTitleComponent_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Loading... ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ChatTitleComponent_div_7_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var tag_r7 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", tag_r7, " ");
      }
    }

    function ChatTitleComponent_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChatTitleComponent_div_7_div_1_Template, 2, 1, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.chat.tags);
      }
    }

    function ChatTitleComponent_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-chat-subscribe");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var ChatTitleComponent = /*#__PURE__*/function () {
      function ChatTitleComponent(chatService, chatsService) {
        _classCallCheck(this, ChatTitleComponent);

        this.chatService = chatService;
        this.chatsService = chatsService;
        this.onChatPage = false;
      }

      _createClass(ChatTitleComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this8 = this;

          this.chatSub = this.chatService.getChatUpdated().subscribe(function (chat) {
            _this8.chat = chat;
          });
          this.chatService.getChat();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.chatSub.unsubscribe();
        }
      }]);

      return ChatTitleComponent;
    }();

    ChatTitleComponent.ɵfac = function ChatTitleComponent_Factory(t) {
      return new (t || ChatTitleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_chat__WEBPACK_IMPORTED_MODULE_1__["ChatService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_chats__WEBPACK_IMPORTED_MODULE_2__["ChatsService"]));
    };

    ChatTitleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ChatTitleComponent,
      selectors: [["app-chat-title"]],
      inputs: {
        onChatPage: "onChatPage"
      },
      decls: 10,
      vars: 8,
      consts: [[1, "container"], [1, "icon-container"], [3, "imageUrl", "showStatus", 4, "ngIf"], [4, "ngIf"], ["class", "title", 4, "ngIf"], ["class", "tags-container", 4, "ngIf"], [1, "flex-expand"], ["class", "chat-subscribe-container", 4, "ngIf"], [3, "imageUrl", "showStatus"], [1, "title"], [1, "tags-container"], ["class", "tag-container", 4, "ngFor", "ngForOf"], [1, "tag-container"], [1, "chat-subscribe-container"]],
      template: function ChatTitleComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ChatTitleComponent_app_image_fab_2_Template, 1, 2, "app-image-fab", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ChatTitleComponent_app_chat_icon_3_Template, 1, 0, "app-chat-icon", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ChatTitleComponent_div_5_Template, 2, 1, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ChatTitleComponent_div_6_Template, 2, 0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ChatTitleComponent_div_7_Template, 2, 1, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ChatTitleComponent_div_9_Template, 2, 0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.chat !== undefined && ctx.chat !== null && ctx.chat.image !== "$$$Default$$$");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.chat === undefined || ctx.chat === null || ctx.chat.image === "$$$Default$$$");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("title-container " + (ctx.onChatPage ? "title-width-small" : "title-width-large"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.chat !== undefined && ctx.chat !== null);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.chat === undefined || ctx.chat === null);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.chat !== undefined && ctx.chat !== null);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.onChatPage);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _image_fab_image_fab_component__WEBPACK_IMPORTED_MODULE_4__["ImageFabComponent"], _chat_icon_chat_icon_component__WEBPACK_IMPORTED_MODULE_5__["ChatIconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _chat_subscribe_chat_subscribe_component__WEBPACK_IMPORTED_MODULE_6__["ChatSubscribeComponent"]],
      styles: [".container[_ngcontent-%COMP%] {\n        display: flex;\n        \n        background-color: rgb(32, 32, 32);\n        width: 100%;\n        border-radius: 5px;\n        padding-top: 5px;\n        padding-bottom: 5px;\n        overflow: hidden;\n}\n\n.icon-container[_ngcontent-%COMP%] {\n        float: left;\n        width: 45px;\n        height: 45px;\n        min-width: 45px;\n        min-height: 45px;\n}\n\n.title-container[_ngcontent-%COMP%] {\n        height: 45px;\n        float: left;\n        padding-right: 10px;\n        margin-bottom: 3px;\n}\n\n.title-width-small[_ngcontent-%COMP%] { width: calc(100% - 120px); }\n\n.title-width-large[_ngcontent-%COMP%] { width: calc(100% - 50px); }\n\n.title[_ngcontent-%COMP%] {\n        font-family: 'poppins-semibold';\n        height: 25px;\n        line-height: 25px;\n        font-size: 15px;\n        color: white;\n}\n\n.chat-subscribe-container[_ngcontent-%COMP%] {\n        margin-right: 5px;\n}\n\n.flex-expand[_ngcontent-%COMP%] { flex: 1 1 auto; }\n\n\n\n.tags-container[_ngcontent-%COMP%] {\n        width: 100%;\n        \n        overflow-y: hidden;\n        height: 25px;\n        display: flex;\n        flex-shrink: 0;\n}\n\n\n\n.tags-container[_ngcontent-%COMP%]::-webkit-scrollbar { height: 0px; }\n\n.tag-container[_ngcontent-%COMP%] {\n        line-height: 22px;\n        height: 22px;\n        font-size: 16px;\n        background-color: rgb(38, 49, 54);\n        border-radius: 3px;\n        color: #7abffc;\n        padding-left: 3px;\n        padding-right: 3px;\n        margin-right: 3px;\n}\n\n.transform-color[_ngcontent-%COMP%] {\n        transition: color 0.2s;  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jaGF0LXBhZ2UvbWVzc2FnZS12aWV3L2NoYXQtdGl0bGUvY2hhdC10aXRsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO1FBQ1EsYUFBYTtRQUNiLCtCQUErQjtRQUMvQixpQ0FBaUM7UUFDakMsV0FBVztRQUNYLGtCQUFrQjtRQUNsQixnQkFBZ0I7UUFDaEIsbUJBQW1CO1FBQ25CLGdCQUFnQjtBQUN4Qjs7QUFFQTtRQUNRLFdBQVc7UUFDWCxXQUFXO1FBQ1gsWUFBWTtRQUNaLGVBQWU7UUFDZixnQkFBZ0I7QUFDeEI7O0FBRUE7UUFDUSxZQUFZO1FBQ1osV0FBVztRQUNYLG1CQUFtQjtRQUNuQixrQkFBa0I7QUFDMUI7O0FBRUEscUJBQXFCLHlCQUF5QixFQUFFOztBQUVoRCxxQkFBcUIsd0JBQXdCLEVBQUU7O0FBRS9DO1FBQ1EsK0JBQStCO1FBQy9CLFlBQVk7UUFDWixpQkFBaUI7UUFDakIsZUFBZTtRQUNmLFlBQVk7QUFDcEI7O0FBRUE7UUFDUSxpQkFBaUI7QUFDekI7O0FBQ0EsZUFBZSxjQUFjLEVBQUU7O0FBRS9CLG1CQUFtQjs7QUFDbkI7UUFDUSxXQUFXO1FBQ1gsd0JBQXdCO1FBQ3hCLGtCQUFrQjtRQUNsQixZQUFZO1FBQ1osYUFBYTtRQUNiLGNBQWM7QUFDdEI7O0FBRUEsMENBQTBDOztBQUMxQyxxQ0FBcUMsV0FBVyxFQUFFOztBQUVsRDtRQUNRLGlCQUFpQjtRQUNqQixZQUFZO1FBQ1osZUFBZTtRQUNmLGlDQUFpQztRQUNqQyxrQkFBa0I7UUFDbEIsY0FBYztRQUNkLGlCQUFpQjtRQUNqQixrQkFBa0I7UUFDbEIsaUJBQWlCO0FBQ3pCOztBQUVBO1FBSVEsc0JBQXNCO0FBQzlCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jaGF0LXBhZ2UvbWVzc2FnZS12aWV3L2NoYXQtdGl0bGUvY2hhdC10aXRsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICM2ZGI2ZWU7ICovXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzMiwgMzIsIDMyKTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgcGFkZGluZy10b3A6IDVweDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmljb24tY29udGFpbmVyIHtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgIHdpZHRoOiA0NXB4O1xuICAgICAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgICAgIG1pbi13aWR0aDogNDVweDtcbiAgICAgICAgbWluLWhlaWdodDogNDVweDtcbn0gICAgICAgXG5cbi50aXRsZS1jb250YWluZXIge1xuICAgICAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzcHg7XG59XG5cbi50aXRsZS13aWR0aC1zbWFsbCB7IHdpZHRoOiBjYWxjKDEwMCUgLSAxMjBweCk7IH1cblxuLnRpdGxlLXdpZHRoLWxhcmdlIHsgd2lkdGg6IGNhbGMoMTAwJSAtIDUwcHgpOyB9XG5cbi50aXRsZSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAncG9wcGlucy1zZW1pYm9sZCc7XG4gICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xufVxuXG4uY2hhdC1zdWJzY3JpYmUtY29udGFpbmVyIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG4uZmxleC1leHBhbmQgeyBmbGV4OiAxIDEgYXV0bzsgfVxuXG4vKiBUYWdzIGNvbnRhaW5lciAqL1xuLnRhZ3MtY29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIC8qIG92ZXJmbG93LXg6IHNjcm9sbDsgKi9cbiAgICAgICAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICAgICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtc2hyaW5rOiAwO1xufVxuXG4vKiBNYWtlcyBob3Jpem9udGFsIHNjcm9sbCBiYXIgaW52aXNpYmxlICovXG4udGFncy1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHsgaGVpZ2h0OiAwcHg7IH1cblxuLnRhZy1jb250YWluZXIge1xuICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICAgICAgaGVpZ2h0OiAyMnB4O1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzOCwgNDksIDU0KTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICBjb2xvcjogIzdhYmZmYztcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAzcHg7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDNweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAzcHg7XG59XG5cbi50cmFuc2Zvcm0tY29sb3Ige1xuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGNvbG9yIDAuMnM7XG4gICAgICAgIC1tb3otdHJhbnNpdGlvbjogY29sb3IgMC4ycztcbiAgICAgICAgLW8tdHJhbnNpdGlvbjogY29sb3IgMC4ycztcbiAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4yczsgIFxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatTitleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-chat-title",
          templateUrl: "chat-title.component.html",
          styleUrls: ["chat-title.component.css"]
        }]
      }], function () {
        return [{
          type: _services_chat__WEBPACK_IMPORTED_MODULE_1__["ChatService"]
        }, {
          type: _services_chats__WEBPACK_IMPORTED_MODULE_2__["ChatsService"]
        }];
      }, {
        onChatPage: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/chat-page/message-view/message-create/message-create.component.ts":
  /*!**********************************************************************************************!*\
    !*** ./src/app/components/chat-page/message-view/message-create/message-create.component.ts ***!
    \**********************************************************************************************/

  /*! exports provided: MessageCreateComponent */

  /***/
  function srcAppComponentsChatPageMessageViewMessageCreateMessageCreateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MessageCreateComponent", function () {
      return MessageCreateComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../../services/user */
    "./src/app/services/user.ts");
    /* harmony import */


    var _services_chat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../services/chat */
    "./src/app/services/chat.ts");
    /* harmony import */


    var _services_authentication__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../services/authentication */
    "./src/app/services/authentication.ts");
    /* harmony import */


    var src_app_services_users__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/users */
    "./src/app/services/users.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function MessageCreateComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 4, 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function MessageCreateComponent_div_0_Template_form_submit_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.postMessage(_r2);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 7, 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Send ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MessageCreateComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "login");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "or");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "register");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "to send messages");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/api/authentication/login");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/api/authentication/register");
      }
    }

    var MessageCreateComponent = /*#__PURE__*/function () {
      function MessageCreateComponent(userService, chatService, authService, usersService) {
        _classCallCheck(this, MessageCreateComponent);

        this.userService = userService;
        this.chatService = chatService;
        this.authService = authService;
        this.usersService = usersService;
      } //Initializes link to UserService user


      _createClass(MessageCreateComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this9 = this;

          this.userSub = this.userService.getUserUpdated().subscribe(function (user) {
            _this9.user = user;
          });
          this.userService.getUser();
        } //Requests message post to database

      }, {
        key: "postMessage",
        value: function postMessage(messageForm) {
          var _this10 = this;

          var message = messageForm.value.message.trim();

          if (message == "" || message == null || message == undefined) {
            return;
          }

          var timestamp = new Date().getTime();
          this.chatService.postMessage(message, this.user._id, timestamp);

          if (this.usersService.getUserSub(this.user._id) === null || this.usersService.getUserSub(this.user._id) === undefined) {
            this.usersService.getUser(this.user._id).then(function (userSub) {
              _this10.usersService.users.push(userSub);

              _this10.usersService.updateUsers();
            });
          }

          messageForm.resetForm();
        } //Check if user is authenticated

      }, {
        key: "isAuthenticated",
        value: function isAuthenticated() {
          return this.authService.isAuthenticated();
        } //Avoid memory leaks

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.userSub.unsubscribe();
        }
      }]);

      return MessageCreateComponent;
    }();

    MessageCreateComponent.ɵfac = function MessageCreateComponent_Factory(t) {
      return new (t || MessageCreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_chat__WEBPACK_IMPORTED_MODULE_2__["ChatService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_authentication__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_users__WEBPACK_IMPORTED_MODULE_4__["UsersService"]));
    };

    MessageCreateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MessageCreateComponent,
      selectors: [["app-message-create"]],
      decls: 2,
      vars: 2,
      consts: [["class", "container-one", 4, "ngIf"], ["class", "placeholder", 4, "ngIf"], [1, "container-one"], [1, "container-two"], [1, "message-form", 3, "submit"], ["messageForm", "ngForm"], [1, "message-field-container"], ["matInput", "", "type", "text", "name", "message", "ngModel", "", "placeholder", "message", "autocomplete", "off", 1, "message-field"], ["message", "ngModel"], [1, "form-submit-container"], ["mat-raised-button", "", "type", "submit", 1, "form-submit"], [1, "placeholder"], [1, "placeholder-text", "login", 3, "routerLink"], [1, "placeholder-text"], [1, "placeholder-text", "register", 3, "routerLink"]],
      template: function MessageCreateComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MessageCreateComponent_div_0_Template, 10, 0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MessageCreateComponent_div_1_Template, 9, 2, "div", 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAuthenticated());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isAuthenticated());
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLink"]],
      styles: [".container-one[_ngcontent-%COMP%] {\n        \n        width: 100%;\n        background: linear-gradient(to right, rgb(38, 49, 54) 0px, rgb(38, 49, 54) 50px, rgb(50, 64, 71) 50px, rgb(50, 64, 71) 100%);\n        height: 60px;\n        max-height: 60px;\n}\n\n.container-two[_ngcontent-%COMP%] {\n        margin-left: 58px;\n        width: calc(100% - 55px);\n        height: 100%;\n}\n\n.message-form[_ngcontent-%COMP%] {\n        width: 100%;\n        height: 100%;\n        display: flex;\n        gap: 5px;\n}\n\n.form-input-container[_ngcontent-%COMP%] {\n        width: 100%;\n        height: 100%;\n}\n\n.message-field-container[_ngcontent-%COMP%] {\n        width: calc(100% - 80px);\n        height: 48px;\n}\n\n.message-field[_ngcontent-%COMP%] {\n        height: 48px;\n        background-color: rgb(245, 245, 245);\n        width: 100%;\n        font-size: 15px;\n        color: black;\n        \n        margin: none;\n        padding: 10px;\n        box-sizing: border-box;\n        line-height: 28px;\n        caret-color: black;\n        border: none;\n        font-family: 'poppins-medium';\n}\n\n.message-field[_ngcontent-%COMP%]:focus {\n        outline: 0;\n}\n\n.message-field[_ngcontent-%COMP%]::-moz-placeholder {\n        color: rgb(50, 64, 71);\n        font-family: 'poppins-medium';\n}\n\n.message-field[_ngcontent-%COMP%]::placeholder {\n        color: rgb(50, 64, 71);\n        font-family: 'poppins-medium';\n}\n\n.form-submit-container[_ngcontent-%COMP%] {\n        height: 48px;\n        width: 50px;\n        transform: translateY(-1px);\n        border-radius: 0px;\n        \n}\n\n.form-submit[_ngcontent-%COMP%] {\n        padding: 0px;\n        height: 100%;\n        width: 100%;\n        font-size: 20px;\n        font-family: 'momcake';\n        text-align: center;\n        color: black;\n        border-radius: 0px;\n        background-color: rgb(245, 245, 245);\n}\n\n.placeholder[_ngcontent-%COMP%] {\n        width: 100%;\n        box-sizing: border-box;\n        border-left: 50px solid rgb(38, 49, 54);\n        background-color: rgb(50, 64, 71);\n        display: flex;\n        justify-content: center; \n        height: 110px;\n        font-family: 'momcake';\n        font-size: 20px;\n}\n\n.placeholder-text[_ngcontent-%COMP%] {\n        color: rgb(180, 180, 180);\n        font-family: 'momcake';\n        font-size: 20px;\n}\n\n.login[_ngcontent-%COMP%] { margin-right: 9px; }\n\n.register[_ngcontent-%COMP%] {\n        margin-left: 9px;\n        margin-right: 7px;\n}\n\n.register[_ngcontent-%COMP%]:hover {\n        color: rgb(0, 183, 255);\n        cursor: pointer;\n}\n\n.login[_ngcontent-%COMP%]:hover {\n        color: rgb(0, 183, 255);\n        cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jaGF0LXBhZ2UvbWVzc2FnZS12aWV3L21lc3NhZ2UtY3JlYXRlL21lc3NhZ2UtY3JlYXRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7UUFDUSwwQ0FBMEM7UUFDMUMsV0FBVztRQUNYLDRIQUE0SDtRQUM1SCxZQUFZO1FBQ1osZ0JBQWdCO0FBQ3hCOztBQUVBO1FBQ1EsaUJBQWlCO1FBQ2pCLHdCQUF3QjtRQUN4QixZQUFZO0FBQ3BCOztBQUVBO1FBQ1EsV0FBVztRQUNYLFlBQVk7UUFDWixhQUFhO1FBQ2IsUUFBUTtBQUNoQjs7QUFFQTtRQUNRLFdBQVc7UUFDWCxZQUFZO0FBQ3BCOztBQUVBO1FBQ1Esd0JBQXdCO1FBQ3hCLFlBQVk7QUFDcEI7O0FBRUE7UUFDUSxZQUFZO1FBQ1osb0NBQW9DO1FBQ3BDLFdBQVc7UUFDWCxlQUFlO1FBQ2YsWUFBWTtRQUNaLHdCQUF3QjtRQUN4QixZQUFZO1FBQ1osYUFBYTtRQUNiLHNCQUFzQjtRQUN0QixpQkFBaUI7UUFDakIsa0JBQWtCO1FBQ2xCLFlBQVk7UUFDWiw2QkFBNkI7QUFDckM7O0FBRUE7UUFDUSxVQUFVO0FBQ2xCOztBQUVBO1FBQ1Esc0JBQXNCO1FBQ3RCLDZCQUE2QjtBQUNyQzs7QUFIQTtRQUNRLHNCQUFzQjtRQUN0Qiw2QkFBNkI7QUFDckM7O0FBQ0E7UUFDUSxZQUFZO1FBQ1osV0FBVztRQUNYLDJCQUEyQjtRQUMzQixrQkFBa0I7O0FBRTFCOztBQUVBO1FBQ1EsWUFBWTtRQUNaLFlBQVk7UUFDWixXQUFXO1FBQ1gsZUFBZTtRQUNmLHNCQUFzQjtRQUN0QixrQkFBa0I7UUFDbEIsWUFBWTtRQUNaLGtCQUFrQjtRQUNsQixvQ0FBb0M7QUFDNUM7O0FBRUE7UUFDUSxXQUFXO1FBQ1gsc0JBQXNCO1FBQ3RCLHVDQUF1QztRQUN2QyxpQ0FBaUM7UUFDakMsYUFBYTtRQUNiLHVCQUF1QjtRQUN2QixhQUFhO1FBQ2Isc0JBQXNCO1FBQ3RCLGVBQWU7QUFDdkI7O0FBRUE7UUFDUSx5QkFBeUI7UUFDekIsc0JBQXNCO1FBQ3RCLGVBQWU7QUFDdkI7O0FBRUEsU0FBUyxpQkFBaUIsRUFBRTs7QUFFNUI7UUFDUSxnQkFBZ0I7UUFDaEIsaUJBQWlCO0FBQ3pCOztBQUVBO1FBQ1EsdUJBQXVCO1FBQ3ZCLGVBQWU7QUFDdkI7O0FBRUE7UUFDUSx1QkFBdUI7UUFDdkIsZUFBZTtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2hhdC1wYWdlL21lc3NhZ2Utdmlldy9tZXNzYWdlLWNyZWF0ZS9tZXNzYWdlLWNyZWF0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1vbmUge1xuICAgICAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM2LCAyMzYsIDIzNik7ICovXG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYigzOCwgNDksIDU0KSAwcHgsIHJnYigzOCwgNDksIDU0KSA1MHB4LCByZ2IoNTAsIDY0LCA3MSkgNTBweCwgcmdiKDUwLCA2NCwgNzEpIDEwMCUpO1xuICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgIG1heC1oZWlnaHQ6IDYwcHg7XG59XG5cbi5jb250YWluZXItdHdvIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDU4cHg7XG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA1NXB4KTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ubWVzc2FnZS1mb3JtIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZ2FwOiA1cHg7XG59XG5cbi5mb3JtLWlucHV0LWNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5tZXNzYWdlLWZpZWxkLWNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA4MHB4KTtcbiAgICAgICAgaGVpZ2h0OiA0OHB4O1xufVxuXG4ubWVzc2FnZS1maWVsZCB7XG4gICAgICAgIGhlaWdodDogNDhweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NSwgMjQ1LCAyNDUpO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgIC8qIGJvcmRlci1yYWRpdXM6IDVweDsgKi9cbiAgICAgICAgbWFyZ2luOiBub25lO1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgICAgICAgY2FyZXQtY29sb3I6IGJsYWNrO1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAncG9wcGlucy1tZWRpdW0nO1xufVxuXG4ubWVzc2FnZS1maWVsZDpmb2N1cyB7XG4gICAgICAgIG91dGxpbmU6IDA7XG59XG5cbi5tZXNzYWdlLWZpZWxkOjpwbGFjZWhvbGRlciB7XG4gICAgICAgIGNvbG9yOiByZ2IoNTAsIDY0LCA3MSk7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAncG9wcGlucy1tZWRpdW0nO1xufVxuLmZvcm0tc3VibWl0LWNvbnRhaW5lciB7XG4gICAgICAgIGhlaWdodDogNDhweDtcbiAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xuICAgICAgICBcbn1cblxuLmZvcm0tc3VibWl0IHtcbiAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnbW9tY2FrZSc7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDUsIDI0NSwgMjQ1KTtcbn0gXG5cbi5wbGFjZWhvbGRlciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBib3JkZXItbGVmdDogNTBweCBzb2xpZCByZ2IoMzgsIDQ5LCA1NCk7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1MCwgNjQsIDcxKTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IFxuICAgICAgICBoZWlnaHQ6IDExMHB4O1xuICAgICAgICBmb250LWZhbWlseTogJ21vbWNha2UnO1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5wbGFjZWhvbGRlci10ZXh0IHtcbiAgICAgICAgY29sb3I6IHJnYigxODAsIDE4MCwgMTgwKTtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdtb21jYWtlJztcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4ubG9naW4geyBtYXJnaW4tcmlnaHQ6IDlweDsgfVxuXG4ucmVnaXN0ZXIge1xuICAgICAgICBtYXJnaW4tbGVmdDogOXB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDdweDtcbn1cblxuLnJlZ2lzdGVyOmhvdmVyIHtcbiAgICAgICAgY29sb3I6IHJnYigwLCAxODMsIDI1NSk7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmxvZ2luOmhvdmVyIHtcbiAgICAgICAgY29sb3I6IHJnYigwLCAxODMsIDI1NSk7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MessageCreateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-message-create",
          templateUrl: "message-create.component.html",
          styleUrls: ["message-create.component.css"]
        }]
      }], function () {
        return [{
          type: _services_user__WEBPACK_IMPORTED_MODULE_1__["UserService"]
        }, {
          type: _services_chat__WEBPACK_IMPORTED_MODULE_2__["ChatService"]
        }, {
          type: _services_authentication__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
        }, {
          type: src_app_services_users__WEBPACK_IMPORTED_MODULE_4__["UsersService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/chat-page/message-view/message-view.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/components/chat-page/message-view/message-view.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: MessageViewComponent */

  /***/
  function srcAppComponentsChatPageMessageViewMessageViewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MessageViewComponent", function () {
      return MessageViewComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../services/user */
    "./src/app/services/user.ts");
    /* harmony import */


    var _services_chat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../services/chat */
    "./src/app/services/chat.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _messages_messages_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./messages/messages.component */
    "./src/app/components/chat-page/message-view/messages/messages.component.ts");
    /* harmony import */


    var _message_create_message_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./message-create/message-create.component */
    "./src/app/components/chat-page/message-view/message-create/message-create.component.ts");
    /* harmony import */


    var _chat_title_chat_title_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./chat-title/chat-title.component */
    "./src/app/components/chat-page/message-view/chat-title/chat-title.component.ts");

    function MessageViewComponent_app_chat_title_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-chat-title", 2);
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("onChatPage", true);
      }
    }

    var MessageViewComponent = /*#__PURE__*/function () {
      function MessageViewComponent(userService, chatService) {
        _classCallCheck(this, MessageViewComponent);

        this.userService = userService;
        this.chatService = chatService;
      } //Keeping the user object updated


      _createClass(MessageViewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this11 = this;

          //Creates link to UserService user
          this.userSub = this.userService.getUserUpdated().subscribe(function (user) {
            _this11.user = user;
          });
          this.userService.getUser(); //Creates link to ChatService chat

          this.chatSub = this.chatService.getChatUpdated().subscribe(function (chat) {
            return _this11.chat = chat;
          });
          this.chatService.getChat();
        } //Avoid memory leak

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.userSub.unsubscribe();
          this.chatSub.unsubscribe();
        }
      }]);

      return MessageViewComponent;
    }();

    MessageViewComponent.ɵfac = function MessageViewComponent_Factory(t) {
      return new (t || MessageViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_chat__WEBPACK_IMPORTED_MODULE_2__["ChatService"]));
    };

    MessageViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MessageViewComponent,
      selectors: [["app-message-view"]],
      decls: 4,
      vars: 1,
      consts: [[1, "view-background"], [3, "onChatPage", 4, "ngIf"], [3, "onChatPage"]],
      template: function MessageViewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MessageViewComponent_app_chat_title_1_Template, 1, 1, "app-chat-title", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-messages");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-message-create");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.chat != undefined && ctx.chat != null);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _messages_messages_component__WEBPACK_IMPORTED_MODULE_4__["MessagesComponent"], _message_create_message_create_component__WEBPACK_IMPORTED_MODULE_5__["MessageCreateComponent"], _chat_title_chat_title_component__WEBPACK_IMPORTED_MODULE_6__["ChatTitleComponent"]],
      styles: [".view-background[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  overflow: hidden;\n  \n  background-color: rgb(50, 64, 71);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jaGF0LXBhZ2UvbWVzc2FnZS12aWV3L21lc3NhZ2Utdmlldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsNkNBQTZDO0VBQzdDLGlDQUFpQztBQUNuQyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2hhdC1wYWdlL21lc3NhZ2Utdmlldy9tZXNzYWdlLXZpZXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi52aWV3LWJhY2tncm91bmQge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICAvKiBib3JkZXItbGVmdDogNjVweCBzb2xpZCByZ2IoMzgsIDQ5LCA1NCk7ICovXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig1MCwgNjQsIDcxKTtcbn1cblxuXG5cblxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MessageViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-message-view",
          templateUrl: "message-view.component.html",
          styleUrls: ["message-view.component.css"]
        }]
      }], function () {
        return [{
          type: _services_user__WEBPACK_IMPORTED_MODULE_1__["UserService"]
        }, {
          type: _services_chat__WEBPACK_IMPORTED_MODULE_2__["ChatService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/chat-page/message-view/messages/message-received/message-received.component.ts":
  /*!***********************************************************************************************************!*\
    !*** ./src/app/components/chat-page/message-view/messages/message-received/message-received.component.ts ***!
    \***********************************************************************************************************/

  /*! exports provided: MessageReceivedComponent */

  /***/
  function srcAppComponentsChatPageMessageViewMessagesMessageReceivedMessageReceivedComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MessageReceivedComponent", function () {
      return MessageReceivedComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_users__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../../../services/users */
    "./src/app/services/users.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _image_fab_image_fab_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../image-fab/image-fab.component */
    "./src/app/components/image-fab/image-fab.component.ts");
    /* harmony import */


    var _user_icon_user_icon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../user-icon/user-icon.component */
    "./src/app/components/user-icon/user-icon.component.ts");

    function MessageReceivedComponent_app_image_fab_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-image-fab", 11);
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imageUrl", ctx_r0.userSub.image)("showStatus", false);
      }
    }

    function MessageReceivedComponent_app_user_icon_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-user-icon", 12);
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showStatus", false);
      }
    }

    var _c0 = ["*"];

    var MessageReceivedComponent = /*#__PURE__*/function () {
      function MessageReceivedComponent(usersService) {
        _classCallCheck(this, MessageReceivedComponent);

        this.usersService = usersService;
        this.userSub = {
          _id: "----",
          username: "loading...",
          image: "$$$Default$$$",
          online: false
        };
      }

      _createClass(MessageReceivedComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getUser();
        }
      }, {
        key: "getUser",
        value: function getUser() {
          if (this.usersService.getUserSub(this.senderId)) {
            this.userSub = this.usersService.getUserSub(this.senderId);
          }
        }
      }, {
        key: "getTime",
        value: function getTime(timestampMil) {
          var timestamp = new Date(); //Converts the timestamp from milliseconds to the clients local time

          timestamp.setTime(timestampMil); //Raw Time 

          var rawTime = timestamp.toLocaleTimeString();
          var time = this.parseRawTime(rawTime);
          var rawDate = timestamp.toDateString();
          var date = this.parseRawDate(rawDate);
          return time + " " + date;
        } //Format HH:MM:SS (AM/PM) -> HH:MM (AM/PM)

      }, {
        key: "parseRawTime",
        value: function parseRawTime(rawTime) {
          var splitTime = rawTime.split(":");
          var time = splitTime[0] + ":" + splitTime[1] + splitTime[2].split(" ")[1].toLowerCase();
          return time;
        } //Format WEEKDAY MON DAY YEAR -> MON DAY

      }, {
        key: "parseRawDate",
        value: function parseRawDate(rawDate) {
          if (rawDate === new Date().toDateString()) return "Today";
          var dateSplit = rawDate.split(" ");
          var date = dateSplit[1] + " " + dateSplit[2];

          if (dateSplit[2].length === 2) {
            if (dateSplit[2][1] === '1') date += "st";else if (dateSplit[2][1] === '2') date += "nd";else if (dateSplit[2][1] === '3') date += "rd";else date += "th";
          } else {
            if (dateSplit[2] === "1") date += "st";else if (dateSplit[2] === "2") date += "nd";else if (dateSplit[2] === "3") date += "rd";else date += "th";
          }

          return date;
        }
      }]);

      return MessageReceivedComponent;
    }();

    MessageReceivedComponent.ɵfac = function MessageReceivedComponent_Factory(t) {
      return new (t || MessageReceivedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_users__WEBPACK_IMPORTED_MODULE_1__["UsersService"]));
    };

    MessageReceivedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MessageReceivedComponent,
      selectors: [["app-message-received"]],
      inputs: {
        senderId: "senderId",
        timestamp: "timestamp"
      },
      ngContentSelectors: _c0,
      decls: 14,
      vars: 4,
      consts: [[1, "container"], [1, "user-icon-container"], [1, "user-icon"], [3, "imageUrl", "showStatus", 4, "ngIf"], [3, "showStatus", 4, "ngIf"], [1, "message-container"], [1, "message-header-container"], [1, "username"], [1, "timestamp"], [1, "message-body-container"], [1, "message-text"], [3, "imageUrl", "showStatus"], [3, "showStatus"]],
      template: function MessageReceivedComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MessageReceivedComponent_app_image_fab_3_Template, 1, 2, "app-image-fab", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MessageReceivedComponent_app_user_icon_4_Template, 1, 1, "app-user-icon", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userSub.image != "$$$Default$$$");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userSub.image === "$$$Default$$$");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.userSub.username);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getTime(ctx.timestamp));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _image_fab_image_fab_component__WEBPACK_IMPORTED_MODULE_3__["ImageFabComponent"], _user_icon_user_icon_component__WEBPACK_IMPORTED_MODULE_4__["UserIconComponent"]],
      styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  \n  \n  \n  background-color: rgb(50, 64, 71);\n  width: 100%;\n}\n.message-container[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  order: 1;\n  width: calc(100% - 60px);\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 10px;\n}\n.message-header-container[_ngcontent-%COMP%] {\n  order: 0;\n  \n  margin-left: 5px;\n}\n.message-body-container[_ngcontent-%COMP%] {\n  order: 1;\n  margin-top: 5px;\n  margin-left: 5px;\n}\n.user-icon-container[_ngcontent-%COMP%] {\n  order: 0;\n  min-width: 50px;\n  max-width: 50px;\n  padding-top: 5px;\n  background-color: rgb(38, 49, 54); \n}\n.user-icon[_ngcontent-%COMP%] {\n  width: 45px;\n  height: 45px;\n  margin: auto;\n}\n.username[_ngcontent-%COMP%] {\n  float: left;\n  font-family: 'poppins-semibold';\n  color: hotpink;\n  font-size: 18px;\n}\n.message-text[_ngcontent-%COMP%] {\n  white-space: pre-line;\n  overflow-wrap: break-word;\n  font-size: 15px;\n  color: white;\n}\n.timestamp[_ngcontent-%COMP%] {\n  float: right;\n  color: rgb(163, 163, 163);\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jaGF0LXBhZ2UvbWVzc2FnZS12aWV3L21lc3NhZ2VzL21lc3NhZ2UtcmVjZWl2ZWQvbWVzc2FnZS1yZWNlaXZlZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLCtCQUErQjtFQUMvQiwrQkFBK0I7RUFDL0IsK0JBQStCO0VBQy9CLGlDQUFpQztFQUNqQyxXQUFXO0FBQ2I7QUFDQTtFQUNFLGVBQWU7RUFDZixRQUFRO0VBQ1Isd0JBQXdCO0VBQ3hCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxRQUFRO0VBQ1IsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsUUFBUTtFQUNSLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLFFBQVE7RUFDUixlQUFlO0VBQ2YsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixpQ0FBaUM7QUFDbkM7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osWUFBWTtBQUNkO0FBRUE7RUFDRSxXQUFXO0VBQ1gsK0JBQStCO0VBQy9CLGNBQWM7RUFDZCxlQUFlO0FBQ2pCO0FBR0E7RUFDRSxxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixZQUFZO0FBQ2Q7QUFFQTtFQUNFLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2hhdC1wYWdlL21lc3NhZ2Utdmlldy9tZXNzYWdlcy9tZXNzYWdlLXJlY2VpdmVkL21lc3NhZ2UtcmVjZWl2ZWQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjNjE2MTYxOyAqL1xuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjNTM2ODc4OyAqL1xuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjMzc0NzRGOyAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTAsIDY0LCA3MSk7XG4gIHdpZHRoOiAxMDAlO1xufVxuLm1lc3NhZ2UtY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBvcmRlcjogMTtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDYwcHgpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4ubWVzc2FnZS1oZWFkZXItY29udGFpbmVyIHtcbiAgb3JkZXI6IDA7XG4gIC8qIGRpc3BsYXk6IGZsZXg7ICovXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbi5tZXNzYWdlLWJvZHktY29udGFpbmVyIHtcbiAgb3JkZXI6IDE7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuLnVzZXItaWNvbi1jb250YWluZXIge1xuICBvcmRlcjogMDtcbiAgbWluLXdpZHRoOiA1MHB4O1xuICBtYXgtd2lkdGg6IDUwcHg7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigzOCwgNDksIDU0KTsgXG59XG5cbi51c2VyLWljb24ge1xuICB3aWR0aDogNDVweDtcbiAgaGVpZ2h0OiA0NXB4O1xuICBtYXJnaW46IGF1dG87XG59XG5cbi51c2VybmFtZSB7XG4gIGZsb2F0OiBsZWZ0O1xuICBmb250LWZhbWlseTogJ3BvcHBpbnMtc2VtaWJvbGQnO1xuICBjb2xvcjogaG90cGluaztcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG5cbi5tZXNzYWdlLXRleHQge1xuICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4udGltZXN0YW1wIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBjb2xvcjogcmdiKDE2MywgMTYzLCAxNjMpO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cblxuXG5cblxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MessageReceivedComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-message-received",
          templateUrl: "message-received.component.html",
          styleUrls: ["message-received.component.css"]
        }]
      }], function () {
        return [{
          type: _services_users__WEBPACK_IMPORTED_MODULE_1__["UsersService"]
        }];
      }, {
        senderId: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        timestamp: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/chat-page/message-view/messages/message-sent/message-sent.component.ts":
  /*!***************************************************************************************************!*\
    !*** ./src/app/components/chat-page/message-view/messages/message-sent/message-sent.component.ts ***!
    \***************************************************************************************************/

  /*! exports provided: MessageSentComponent */

  /***/
  function srcAppComponentsChatPageMessageViewMessagesMessageSentMessageSentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MessageSentComponent", function () {
      return MessageSentComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _user_icon_user_icon_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../../user-icon/user-icon.component */
    "./src/app/components/user-icon/user-icon.component.ts");

    var _c0 = ["*"];

    var MessageSentComponent = function MessageSentComponent() {
      _classCallCheck(this, MessageSentComponent);
    };

    MessageSentComponent.ɵfac = function MessageSentComponent_Factory(t) {
      return new (t || MessageSentComponent)();
    };

    MessageSentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MessageSentComponent,
      selectors: [["app-message-sent"]],
      inputs: {
        senderUsername: "senderUsername"
      },
      ngContentSelectors: _c0,
      decls: 11,
      vars: 1,
      consts: [[1, "container"], [1, "message-container"], [1, "message-header-container"], [1, "username"], [1, "message-body-container"], [1, "message-text"], [1, "user-icon-container"], [1, "user-icon"]],
      template: function MessageSentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-user-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.senderUsername);
        }
      },
      directives: [_user_icon_user_icon_component__WEBPACK_IMPORTED_MODULE_1__["UserIconComponent"]],
      styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  \n  \n  background-color: #37474F;\n  \n  width: 100%;\n  flex-direction: row-reverse;\n}\n.message-container[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  order: 1;\n  width: calc(100% - 75px);\n  display: flex;\n  flex-direction: column;\n}\n.message-header-container[_ngcontent-%COMP%] {\n  order: 0;\n  display: flex;\n  flex-direction: row-reverse;\n}\n.message-body-container[_ngcontent-%COMP%] {\n  order: 1;\n  margin-top: -10px;\n  margin-right: 5px;\n}\n.user-icon-container[_ngcontent-%COMP%] {\n  order: 0;\n  min-width: 65px;\n  max-width: 65px;\n  padding-top: 5px;\n  \n  background-color: rgb(38, 49, 54); \n}\n.user-icon[_ngcontent-%COMP%] {\n  width: 65px;\n  height: 65px;\n  margin-top: 5px;\n  margin: center;\n}\n.username[_ngcontent-%COMP%] {\n  order: 0;\n  margin-right: 5px;\n  font-family: Arial, sans-serif;\n  font-weight: 400;\n  color: hotpink;\n  font-size: 18px;\n}\n.message-text[_ngcontent-%COMP%] {\n  text-align: right;\n  white-space: pre-line;\n  overflow-wrap: break-word;\n  font-size: 15px;\n  color: white;\n  font-family: Arial, sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jaGF0LXBhZ2UvbWVzc2FnZS12aWV3L21lc3NhZ2VzL21lc3NhZ2Utc2VudC9tZXNzYWdlLXNlbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYiwrQkFBK0I7RUFDL0IsK0JBQStCO0VBQy9CLHlCQUF5QjtFQUN6Qix1Q0FBdUM7RUFDdkMsV0FBVztFQUNYLDJCQUEyQjtBQUM3QjtBQUNBO0VBQ0UsZUFBZTtFQUNmLFFBQVE7RUFDUix3QkFBd0I7RUFDeEIsYUFBYTtFQUNiLHNCQUFzQjtBQUN4QjtBQUVBO0VBQ0UsUUFBUTtFQUNSLGFBQWE7RUFDYiwyQkFBMkI7QUFDN0I7QUFDQTtFQUNFLFFBQVE7RUFDUixpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxRQUFRO0VBQ1IsZUFBZTtFQUNmLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsdUNBQXVDO0VBQ3ZDLGlDQUFpQztBQUNuQztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0VBQ2YsY0FBYztBQUNoQjtBQUNBO0VBQ0UsUUFBUTtFQUNSLGlCQUFpQjtFQUNqQiw4QkFBOEI7RUFDOUIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxlQUFlO0FBQ2pCO0FBRUE7RUFDRSxpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsWUFBWTtFQUNaLDhCQUE4QjtBQUNoQyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2hhdC1wYWdlL21lc3NhZ2Utdmlldy9tZXNzYWdlcy9tZXNzYWdlLXNlbnQvbWVzc2FnZS1zZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogIzYxNjE2MTsgKi9cbiAgLyogYmFja2dyb3VuZC1jb2xvcjogIzUzNjg3ODsgKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogIzM3NDc0RjtcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDUwLCA2NCwgNzEpOyAqL1xuICB3aWR0aDogMTAwJTtcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xufVxuLm1lc3NhZ2UtY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBvcmRlcjogMTtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDc1cHgpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4ubWVzc2FnZS1oZWFkZXItY29udGFpbmVyIHtcbiAgb3JkZXI6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbn1cbi5tZXNzYWdlLWJvZHktY29udGFpbmVyIHtcbiAgb3JkZXI6IDE7XG4gIG1hcmdpbi10b3A6IC0xMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLnVzZXItaWNvbi1jb250YWluZXIge1xuICBvcmRlcjogMDtcbiAgbWluLXdpZHRoOiA2NXB4O1xuICBtYXgtd2lkdGg6IDY1cHg7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYig1MCwgNjQsIDcxKTsgKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM4LCA0OSwgNTQpOyBcbn1cblxuLnVzZXItaWNvbiB7XG4gIHdpZHRoOiA2NXB4O1xuICBoZWlnaHQ6IDY1cHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgbWFyZ2luOiBjZW50ZXI7XG59XG4udXNlcm5hbWUge1xuICBvcmRlcjogMDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6IGhvdHBpbms7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLm1lc3NhZ2UtdGV4dCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7XG59XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MessageSentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-message-sent",
          templateUrl: "message-sent.component.html",
          styleUrls: ["message-sent.component.css"]
        }]
      }], null, {
        senderUsername: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/chat-page/message-view/messages/messages.component.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/components/chat-page/message-view/messages/messages.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: MessagesComponent */

  /***/
  function srcAppComponentsChatPageMessageViewMessagesMessagesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MessagesComponent", function () {
      return MessagesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../../services/user */
    "./src/app/services/user.ts");
    /* harmony import */


    var _services_chat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../services/chat */
    "./src/app/services/chat.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _message_received_message_received_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./message-received/message-received.component */
    "./src/app/components/chat-page/message-view/messages/message-received/message-received.component.ts");

    var _c0 = ["messages"];

    function MessagesComponent_div_0_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-message-received", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var message_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("senderId", message_r3.senderId)("timestamp", message_r3.timestamp);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", message_r3.text, " ");
      }
    }

    function MessagesComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1, 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MessagesComponent_div_0_div_2_Template, 4, 3, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.compressMessages(ctx_r0.chat.messages));
      }
    }

    var MessagesComponent = /*#__PURE__*/function () {
      function MessagesComponent(userService, chatService) {
        _classCallCheck(this, MessagesComponent);

        this.userService = userService;
        this.chatService = chatService;
      } //Keeping the user object updated


      _createClass(MessagesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this12 = this;

          //Scrolls to most recent messages
          this.scrollToBottom(); //Creates link to UserService user

          this.userSub = this.userService.getUserUpdated().subscribe(function (user) {
            _this12.user = user;
          });
          this.userService.getUser(); //Creates link to ChatService chat

          this.chatSub = this.chatService.getChatUpdated().subscribe(function (chat) {
            _this12.chat = chat;

            _this12.scrollToBottom();
          });
          this.chatService.getChat();
        }
      }, {
        key: "ngAfterViewChecked",
        value: function ngAfterViewChecked() {
          this.scrollToBottom();
        } //Compresses messages

      }, {
        key: "compressMessages",
        value: function compressMessages(messages) {
          if (messages === undefined || messages === null || messages.length == 0) return [];
          var compressedMessages = [Object.assign({}, messages[0])];

          for (var i = 1; i < messages.length; i++) {
            var len = compressedMessages.length;

            if (messages[i].senderId == compressedMessages[len - 1].senderId) {
              compressedMessages[len - 1].text = compressedMessages[len - 1].text.concat("\n", messages[i].text);
              compressedMessages[len - 1].timestamp = messages[i].timestamp;
            } else {
              compressedMessages.push(Object.assign({}, messages[i]));
            }
          }

          return compressedMessages;
        } //Checks if logged in user sent the message

      }, {
        key: "sent",
        value: function sent(message) {
          //Checks if user exists
          if (this.user == undefined || this.user == null) return false;
          return message.senderId == this.user._id;
        } //Checks if logged in user received the message

      }, {
        key: "received",
        value: function received(message) {
          return !this.sent(message);
        } //Scroll to most recent messages

      }, {
        key: "scrollToBottom",
        value: function scrollToBottom() {
          try {
            var currentPos = this.messageContainer.nativeElement.scrollHeight;
            this.messageContainer.nativeElement.scrollTop = currentPos;
          } catch (err) {}
        } //Avoid memory leak

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.userSub.unsubscribe();
          this.chatSub.unsubscribe();
        }
      }]);

      return MessagesComponent;
    }();

    MessagesComponent.ɵfac = function MessagesComponent_Factory(t) {
      return new (t || MessagesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_chat__WEBPACK_IMPORTED_MODULE_2__["ChatService"]));
    };

    MessagesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MessagesComponent,
      selectors: [["app-messages"]],
      viewQuery: function MessagesComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.messageContainer = _t.first);
        }
      },
      decls: 1,
      vars: 1,
      consts: [["class", "messages", 4, "ngIf"], [1, "messages"], ["messages", ""], [4, "ngFor", "ngForOf"], [3, "senderId", "timestamp"], [1, "spacer", "invisible"]],
      template: function MessagesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MessagesComponent_div_0_Template, 3, 1, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.chat != undefined && ctx.chat != null);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _message_received_message_received_component__WEBPACK_IMPORTED_MODULE_4__["MessageReceivedComponent"]],
      styles: [".messages[_ngcontent-%COMP%] {\n        width: 100%;\n        overflow: scroll;\n        height: calc(100% - 173px);\n        max-height: calc(100% - 173px);\n        background: linear-gradient(to right, rgb(38, 49, 54) 0px, rgb(38, 49, 54) 50px, rgb(50, 64, 71) 50px, rgb(50, 64, 71) 100%);\n}\n\nhr[_ngcontent-%COMP%] {\n        height: 1px;\n        font-size: 0px;\n        overflow: hidden;\n}\n\n.spacer[_ngcontent-%COMP%] {\n        height: 1px;\n        width: 100%;\n}\n\n.invisible[_ngcontent-%COMP%] {\n        background-color: rgb(38, 49, 54);\n        \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jaGF0LXBhZ2UvbWVzc2FnZS12aWV3L21lc3NhZ2VzL21lc3NhZ2VzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7UUFDUSxXQUFXO1FBQ1gsZ0JBQWdCO1FBQ2hCLDBCQUEwQjtRQUMxQiw4QkFBOEI7UUFDOUIsNEhBQTRIO0FBQ3BJOztBQUVBO1FBQ1EsV0FBVztRQUNYLGNBQWM7UUFDZCxnQkFBZ0I7QUFDeEI7O0FBQ0E7UUFDUSxXQUFXO1FBQ1gsV0FBVztBQUNuQjs7QUFDQTtRQUNRLGlDQUFpQztRQUNqQyw2Q0FBNkM7QUFDckQiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NoYXQtcGFnZS9tZXNzYWdlLXZpZXcvbWVzc2FnZXMvbWVzc2FnZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZXNzYWdlcyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDE3M3B4KTtcbiAgICAgICAgbWF4LWhlaWdodDogY2FsYygxMDAlIC0gMTczcHgpO1xuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYigzOCwgNDksIDU0KSAwcHgsIHJnYigzOCwgNDksIDU0KSA1MHB4LCByZ2IoNTAsIDY0LCA3MSkgNTBweCwgcmdiKDUwLCA2NCwgNzEpIDEwMCUpO1xufVxuXG5ociB7XG4gICAgICAgIGhlaWdodDogMXB4O1xuICAgICAgICBmb250LXNpemU6IDBweDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5zcGFjZXIge1xuICAgICAgICBoZWlnaHQ6IDFweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG59XG4uaW52aXNpYmxlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM4LCA0OSwgNTQpO1xuICAgICAgICAvKiBib3JkZXItbGVmdDogNjVweCBzb2xpZCByZ2IoNTAsIDY0LCA3MSk7ICovXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MessagesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-messages",
          templateUrl: "messages.component.html",
          styleUrls: ["messages.component.css"]
        }]
      }], function () {
        return [{
          type: _services_user__WEBPACK_IMPORTED_MODULE_1__["UserService"]
        }, {
          type: _services_chat__WEBPACK_IMPORTED_MODULE_2__["ChatService"]
        }];
      }, {
        messageContainer: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ["messages"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/chat-page/subscribers-view/subscriber/subscriber.component.ts":
  /*!******************************************************************************************!*\
    !*** ./src/app/components/chat-page/subscribers-view/subscriber/subscriber.component.ts ***!
    \******************************************************************************************/

  /*! exports provided: SubscriberComponent */

  /***/
  function srcAppComponentsChatPageSubscribersViewSubscriberSubscriberComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SubscriberComponent", function () {
      return SubscriberComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _image_fab_image_fab_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../image-fab/image-fab.component */
    "./src/app/components/image-fab/image-fab.component.ts");
    /* harmony import */


    var _user_icon_user_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../user-icon/user-icon.component */
    "./src/app/components/user-icon/user-icon.component.ts");

    function SubscriberComponent_div_0_app_image_fab_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-image-fab", 7);
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imageUrl", ctx_r1.image)("showStatus", true)("online", ctx_r1.online);
      }
    }

    function SubscriberComponent_div_0_app_user_icon_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-user-icon", 8);
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showStatus", true)("online", ctx_r2.online);
      }
    }

    function SubscriberComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SubscriberComponent_div_0_app_image_fab_2_Template, 1, 3, "app-image-fab", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SubscriberComponent_div_0_app_user_icon_3_Template, 1, 2, "app-user-icon", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.image != "$$$Default$$$");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.image === "$$$Default$$$");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.username, " ");
      }
    }

    var SubscriberComponent = function SubscriberComponent() {
      _classCallCheck(this, SubscriberComponent);

      this.username = "loading...";
      this.online = false;
      this.image = "$$$Default$$$";
      this.adminId = "--admin--";
      this.subId = "--user--";
    };

    SubscriberComponent.ɵfac = function SubscriberComponent_Factory(t) {
      return new (t || SubscriberComponent)();
    };

    SubscriberComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SubscriberComponent,
      selectors: [["app-subscriber"]],
      inputs: {
        username: "username",
        online: "online",
        image: "image",
        adminId: "adminId",
        subId: "subId"
      },
      decls: 1,
      vars: 1,
      consts: [["class", "subscriber-container", 4, "ngIf"], [1, "subscriber-container"], [1, "subscriber-icon-container"], [3, "imageUrl", "showStatus", "online", 4, "ngIf"], [3, "showStatus", "online", 4, "ngIf"], [1, "subscriber-username-container"], [1, "subscriber-username"], [3, "imageUrl", "showStatus", "online"], [3, "showStatus", "online"]],
      template: function SubscriberComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SubscriberComponent_div_0_Template, 7, 3, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.subId !== ctx.adminId);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _image_fab_image_fab_component__WEBPACK_IMPORTED_MODULE_2__["ImageFabComponent"], _user_icon_user_icon_component__WEBPACK_IMPORTED_MODULE_3__["UserIconComponent"]],
      styles: [".subscriber-container[_ngcontent-%COMP%] {\n        width: 100%;\n        display: flex;\n        height: 50px;\n        \n        background-color: rgb(38, 49, 54);\n}\n\n.subscriber-icon-container[_ngcontent-%COMP%] {\n        order: 0;\n        height: 100%;\n        width: 50px;\n}\n\n.subscriber-username-container[_ngcontent-%COMP%] {\n        order: 1;\n        width: calc(100% - 50px);\n        height: 50px;\n        display: flex;\n        align-items: center;\n}\n\n.subscriber-username[_ngcontent-%COMP%] {\n        text-align: center;\n        width: 100%;\n        font-size: 17px;\n        color: #84c1ff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jaGF0LXBhZ2Uvc3Vic2NyaWJlcnMtdmlldy9zdWJzY3JpYmVyL3N1YnNjcmliZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtRQUNRLFdBQVc7UUFDWCxhQUFhO1FBQ2IsWUFBWTtRQUNaLHdCQUF3QjtRQUN4QixpQ0FBaUM7QUFDekM7O0FBRUE7UUFDUSxRQUFRO1FBQ1IsWUFBWTtRQUNaLFdBQVc7QUFDbkI7O0FBRUE7UUFDUSxRQUFRO1FBQ1Isd0JBQXdCO1FBQ3hCLFlBQVk7UUFDWixhQUFhO1FBQ2IsbUJBQW1CO0FBQzNCOztBQUNBO1FBQ1Esa0JBQWtCO1FBQ2xCLFdBQVc7UUFDWCxlQUFlO1FBQ2YsY0FBYztBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2hhdC1wYWdlL3N1YnNjcmliZXJzLXZpZXcvc3Vic2NyaWJlci9zdWJzY3JpYmVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3Vic2NyaWJlci1jb250YWluZXIge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAvKiBib3JkZXItcmFkaXVzOiA1cHg7ICovXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzOCwgNDksIDU0KTtcbn1cblxuLnN1YnNjcmliZXItaWNvbi1jb250YWluZXIge1xuICAgICAgICBvcmRlcjogMDtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB3aWR0aDogNTBweDtcbn1cblxuLnN1YnNjcmliZXItdXNlcm5hbWUtY29udGFpbmVyIHtcbiAgICAgICAgb3JkZXI6IDE7XG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA1MHB4KTtcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnN1YnNjcmliZXItdXNlcm5hbWUge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgIGNvbG9yOiAjODRjMWZmO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SubscriberComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-subscriber",
          templateUrl: "subscriber.component.html",
          styleUrls: ["subscriber.component.css"]
        }]
      }], null, {
        username: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        online: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        image: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        adminId: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        subId: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/chat-page/subscribers-view/subscribers-view.component.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/components/chat-page/subscribers-view/subscribers-view.component.ts ***!
    \*************************************************************************************/

  /*! exports provided: SubscribersViewComponent */

  /***/
  function srcAppComponentsChatPageSubscribersViewSubscribersViewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SubscribersViewComponent", function () {
      return SubscribersViewComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_chat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../services/chat */
    "./src/app/services/chat.ts");
    /* harmony import */


    var src_app_services_users__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/users */
    "./src/app/services/users.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../header/header.component */
    "./src/app/components/header/header.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _subscriber_subscriber_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./subscriber/subscriber.component */
    "./src/app/components/chat-page/subscribers-view/subscriber/subscriber.component.ts");

    function SubscribersViewComponent_app_subscriber_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-subscriber", 4);
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("username", ctx_r0.getUserSub(ctx_r0.chat.adminId).username)("image", ctx_r0.getUserSub(ctx_r0.chat.adminId).image)("online", ctx_r0.getUserSub(ctx_r0.chat.adminId).online)("subId", "------");
      }
    }

    function SubscribersViewComponent_app_header_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header", 0);
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("headerText", "Subscribers")("imageUrl", "../../../assets/images/SubTwo.png");
      }
    }

    function SubscribersViewComponent_div_3_app_subscriber_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-subscriber", 7);
      }

      if (rf & 2) {
        var subId_r4 = ctx.$implicit;

        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("adminId", ctx_r3.chat.adminId)("username", ctx_r3.getUserSub(subId_r4).username)("image", ctx_r3.getUserSub(subId_r4).image)("online", ctx_r3.getUserSub(subId_r4).online)("subId", subId_r4);
      }
    }

    function SubscribersViewComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SubscribersViewComponent_div_3_app_subscriber_1_Template, 1, 5, "app-subscriber", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.chat.subs);
      }
    }

    var SubscribersViewComponent = /*#__PURE__*/function () {
      function SubscribersViewComponent(chatService, usersService) {
        _classCallCheck(this, SubscribersViewComponent);

        this.chatService = chatService;
        this.usersService = usersService;
      } //Initialize chat object


      _createClass(SubscribersViewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this13 = this;

          this.chatSub = this.chatService.getChatUpdated().subscribe(function (chat) {
            _this13.chat = chat; // console.log("List of subs updated \n Sub count: " + this.chat.subs.length)
          });
          this.chatService.getChat();
        }
      }, {
        key: "getUserSub",
        value: function getUserSub(subId) {
          if (this.usersService.getUserSub(subId)) {
            return this.usersService.getUserSub(subId);
          }

          return {
            _id: "-----",
            username: "loading...",
            image: "$$$Default$$$",
            online: false
          };
        } //Avoid memory leaks

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.chatSub.unsubscribe();
        }
      }]);

      return SubscribersViewComponent;
    }();

    SubscribersViewComponent.ɵfac = function SubscribersViewComponent_Factory(t) {
      return new (t || SubscribersViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_chat__WEBPACK_IMPORTED_MODULE_1__["ChatService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_users__WEBPACK_IMPORTED_MODULE_2__["UsersService"]));
    };

    SubscribersViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SubscribersViewComponent,
      selectors: [["app-subscribers-view"]],
      decls: 4,
      vars: 5,
      consts: [[3, "headerText", "imageUrl"], [3, "username", "image", "online", "subId", 4, "ngIf"], [3, "headerText", "imageUrl", 4, "ngIf"], ["class", "subscribers-view-container", 4, "ngIf"], [3, "username", "image", "online", "subId"], [1, "subscribers-view-container"], [3, "adminId", "username", "image", "online", "subId", 4, "ngFor", "ngForOf"], [3, "adminId", "username", "image", "online", "subId"]],
      template: function SubscribersViewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SubscribersViewComponent_app_subscriber_1_Template, 1, 4, "app-subscriber", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SubscribersViewComponent_app_header_2_Template, 1, 2, "app-header", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SubscribersViewComponent_div_3_Template, 2, 1, "div", 3);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("headerText", "Admin")("imageUrl", "../../../assets/images/Admin2.png");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.chat !== undefined && ctx.chat !== null);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.chat !== undefined && ctx.chat !== null && ctx.chat.subs.length > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.chat);
        }
      },
      directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _subscriber_subscriber_component__WEBPACK_IMPORTED_MODULE_5__["SubscriberComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]],
      styles: [".header-container[_ngcontent-%COMP%] {\n        display: flex;\n        width: 100%;\n        height: 30px;\n        border-radius: 5px;\n        \n        background-color: rgb(32, 32, 32);\n}\n.header-icon-container[_ngcontent-%COMP%] {\n        order: 1;\n        height: 100%;\n        width: 40px;\n}\n.header-text-container[_ngcontent-%COMP%] {\n        order: 0;\n        height: 100%;\n        width: calc(100% - 55px);\n        display: flex;\n        align-items: center;\n}\n.header-text[_ngcontent-%COMP%] {\n        text-align: center;\n        font-size: 17px;\n        width: 100%;\n}\n.subscribers-header-text[_ngcontent-%COMP%] {\n        color: white;\n}\n\n\n.subscribers-view-container[_ngcontent-%COMP%] {\n        width: 100%;\n        height: calc(100% - 120px);\n        background-color: rgb(50, 64, 71);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jaGF0LXBhZ2Uvc3Vic2NyaWJlcnMtdmlldy9zdWJzY3JpYmVycy12aWV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWTtBQUNaO1FBQ1EsYUFBYTtRQUNiLFdBQVc7UUFDWCxZQUFZO1FBQ1osa0JBQWtCO1FBQ2xCLCtCQUErQjtRQUMvQixpQ0FBaUM7QUFDekM7QUFFQTtRQUNRLFFBQVE7UUFDUixZQUFZO1FBQ1osV0FBVztBQUNuQjtBQUVBO1FBQ1EsUUFBUTtRQUNSLFlBQVk7UUFDWix3QkFBd0I7UUFDeEIsYUFBYTtRQUNiLG1CQUFtQjtBQUMzQjtBQUVBO1FBQ1Esa0JBQWtCO1FBQ2xCLGVBQWU7UUFDZixXQUFXO0FBQ25CO0FBRUE7UUFDUSxZQUFZO0FBQ3BCO0FBRUEsNkRBQTZEO0FBRTdELHdCQUF3QjtBQUN4QjtRQUNRLFdBQVc7UUFDWCwwQkFBMEI7UUFDMUIsaUNBQWlDO0FBQ3pDO0FBQ0EsNkRBQTZEIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jaGF0LXBhZ2Uvc3Vic2NyaWJlcnMtdmlldy9zdWJzY3JpYmVycy12aWV3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBIZWFkZXJzICovXG4uaGVhZGVyLWNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgLyogYmFja2dyb3VuZC1jb2xvcjogI2NiZGFkYjsgKi9cbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDMyLCAzMiwgMzIpO1xufVxuXG4uaGVhZGVyLWljb24tY29udGFpbmVyIHtcbiAgICAgICAgb3JkZXI6IDE7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgd2lkdGg6IDQwcHg7XG59IFxuXG4uaGVhZGVyLXRleHQtY29udGFpbmVyIHtcbiAgICAgICAgb3JkZXI6IDA7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDU1cHgpO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uaGVhZGVyLXRleHQge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG59XG5cbi5zdWJzY3JpYmVycy1oZWFkZXItdGV4dCB7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuLyogU3Vic2NyaWJlcnMgZGlzcGxheSAqL1xuLnN1YnNjcmliZXJzLXZpZXctY29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gMTIwcHgpO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTAsIDY0LCA3MSk7XG59XG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqLyJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SubscribersViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-subscribers-view",
          templateUrl: "subscribers-view.component.html",
          styleUrls: ["subscribers-view.component.css"]
        }]
      }], function () {
        return [{
          type: _services_chat__WEBPACK_IMPORTED_MODULE_1__["ChatService"]
        }, {
          type: src_app_services_users__WEBPACK_IMPORTED_MODULE_2__["UsersService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/chat-selection/chat-option/chat-option.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/components/chat-selection/chat-option/chat-option.ts ***!
    \**********************************************************************/

  /*! exports provided: ChatOptionComponent */

  /***/
  function srcAppComponentsChatSelectionChatOptionChatOptionTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatOptionComponent", function () {
      return ChatOptionComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var src_app_services_chats__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/chats */
    "./src/app/services/chats.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _image_fab_image_fab_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../image-fab/image-fab.component */
    "./src/app/components/image-fab/image-fab.component.ts");
    /* harmony import */


    var _chat_icon_chat_icon_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../chat-icon/chat-icon.component */
    "./src/app/components/chat-icon/chat-icon.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = ["chatTitle"];

    function ChatOptionComponent_app_image_fab_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-image-fab", 9);
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imageUrl", ctx_r0.getChatSub().image)("showStatus", false);
      }
    }

    function ChatOptionComponent_app_chat_icon_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-chat-icon");
      }
    }

    function ChatOptionComponent_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10, 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"]("color:" + ctx_r2.color + ";");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.getChatSub().title, " ");
      }
    }

    function ChatOptionComponent_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.getChatSub().title, " ");
      }
    }

    function ChatOptionComponent_div_8_div_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var tag_r7 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", tag_r7, " ");
      }
    }

    var _c1 = function _c1(a1) {
      return ["/api/chat/view", a1];
    };

    function ChatOptionComponent_div_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Chat ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ChatOptionComponent_div_8_div_8_Template, 2, 1, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", "Sub Count: " + ctx_r4.getChatSub().subCount, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c1, ctx_r4.chatId));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.getChatSub().tags);
      }
    }

    var ChatOptionComponent = /*#__PURE__*/function () {
      function ChatOptionComponent(chatsService) {
        _classCallCheck(this, ChatOptionComponent);

        this.chatsService = chatsService;
        this.expanded = false;
      } //Get chat sub


      _createClass(ChatOptionComponent, [{
        key: "getChatSub",
        value: function getChatSub() {
          if (this.chatsService.getChatSub(this.chatId)) {
            return this.chatsService.getChatSub(this.chatId);
          }

          return {
            _id: "-----",
            title: "loading...",
            image: "$$$Default$$$",
            tags: [],
            subCount: 0
          };
        } //Sets the selected chat id for the chat display

      }, {
        key: "setAsSelectedChat",
        value: function setAsSelectedChat() {
          this.chatsService.setSelectedChatId(this.chatId);
        } //Change expand

      }, {
        key: "toggle",
        value: function toggle() {
          this.expanded = !this.expanded;

          if (this.expanded) {
            this.setAsSelectedChat();
          }
        }
      }]);

      return ChatOptionComponent;
    }();

    ChatOptionComponent.ɵfac = function ChatOptionComponent_Factory(t) {
      return new (t || ChatOptionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_chats__WEBPACK_IMPORTED_MODULE_2__["ChatsService"]));
    };

    ChatOptionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ChatOptionComponent,
      selectors: [["app-chat-option"]],
      viewQuery: function ChatOptionComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.chatTitle = _t.first);
        }
      },
      inputs: {
        chatId: "chatId",
        color: "color"
      },
      decls: 9,
      vars: 6,
      consts: [[1, "container", "transform-background-color", 3, "click"], [1, "top-container"], [1, "icon-container"], [3, "imageUrl", "showStatus", 4, "ngIf"], [4, "ngIf"], [1, "title-container"], ["class", "title no-select transform-font-size transform-color", 3, "style", 4, "ngIf"], ["class", "title-expanded no-select", 4, "ngIf"], ["class", "bottom-container", 4, "ngIf"], [3, "imageUrl", "showStatus"], [1, "title", "no-select", "transform-font-size", "transform-color"], ["chatTitle", ""], [1, "title-expanded", "no-select"], [1, "bottom-container"], [1, "bottom-bottom-container"], [1, "sub-count-container", "no-select"], [1, "flex-expand"], [1, "go-button", "transform-opacity", "no-select", 3, "routerLink"], [1, "tags-container"], ["class", "tag-container no-select transform-color", 4, "ngFor", "ngForOf"], [1, "tag-container", "no-select", "transform-color"]],
      template: function ChatOptionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatOptionComponent_Template_div_click_0_listener() {
            return ctx.toggle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ChatOptionComponent_app_image_fab_3_Template, 1, 2, "app-image-fab", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ChatOptionComponent_app_chat_icon_4_Template, 1, 0, "app-chat-icon", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ChatOptionComponent_div_6_Template, 3, 3, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ChatOptionComponent_div_7_Template, 2, 1, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ChatOptionComponent_div_8_Template, 9, 5, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@expansionBox", ctx.expanded ? "open" : "closed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.getChatSub().image != "$$$Default$$$");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.getChatSub().image === "$$$Default$$$");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.expanded);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.expanded);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.expanded);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _image_fab_image_fab_component__WEBPACK_IMPORTED_MODULE_4__["ImageFabComponent"], _chat_icon_chat_icon_component__WEBPACK_IMPORTED_MODULE_5__["ChatIconComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
      styles: [".container[_ngcontent-%COMP%] {\n        background-color: rgb(38, 49, 54);\n        padding-bottom: 5px;\n}\n\n.container[_ngcontent-%COMP%]:hover { background-color: rgb(30, 40, 50); }\n\n.container[_ngcontent-%COMP%]:hover   .top-container[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] { color: #7abffc !important; }\n\n\n\n.top-container[_ngcontent-%COMP%] {\n        width: 100%;\n        display: flex;\n        height: 40px;\n}\n\n.icon-container[_ngcontent-%COMP%] {\n        order: 0;\n        \n        width: 40px;\n        height: 40px;\n}\n\n.title-container[_ngcontent-%COMP%] {\n        order: 1;\n        width: calc(100% - 50px);\n        height: 40px;\n        display: flex;\n        align-items: center;\n}\n\n.title[_ngcontent-%COMP%] {\n        text-align: center;\n        width: 100%;\n        font-size: 17px;\n}\n\n.title-expanded[_ngcontent-%COMP%] {\n        text-align: center;\n        width: 100%;\n        color: #7abffc;\n}\n\n\n\n.bottom-container[_ngcontent-%COMP%] { height: 50px; }\n\n.tags-container[_ngcontent-%COMP%] {\n        width: calc(100% - 10px);\n        overflow-x: scroll;\n        overflow-y: hidden;\n        height: 25px;\n        display: flex;\n        flex-shrink: 0;\n        margin-right: 5px;\n        margin-left: 5px;\n}\n\n\n\n.tags-container[_ngcontent-%COMP%]::-webkit-scrollbar { height: 0px; }\n\n.tag-container[_ngcontent-%COMP%] {\n        line-height: 25px;\n        height: 25px;\n        background-color: rgb(38, 49, 54);\n        border-radius: 3px;\n        padding-left: 3px;\n        padding-right: 3px;\n        margin-right: 3px;\n        \n        color: #7abffc;\n}\n\n.tag-container[_ngcontent-%COMP%]:hover {\n        color: #7abffc;\n}\n\n.bottom-bottom-container[_ngcontent-%COMP%] {\n        display: flex;\n        flex-direction: ltr;\n        width: calc(100% - 6px);\n        margin-right: 3px;\n        margin-left: 3px;\n        height: 25px;\n}\n\n.sub-count-container[_ngcontent-%COMP%] {\n        float: left;\n        line-height: 25px;\n        height: 25px;\n        color: rgb(163, 163, 163);\n        font-size: 20px;\n        font-family: 'momcake';\n}\n\n.flex-expand[_ngcontent-%COMP%] { flex: 1 1 auto; }\n\n.go-button[_ngcontent-%COMP%] {\n        float: right;\n        height: 20px;\n        text-align: center;\n        line-height: 20px;\n        width: 70px;\n        border-radius: 5px;\n        font-size: 20px;\n        font-family: 'momcake';\n        color: rgb(105, 255, 185);\n}\n\n.go-button[_ngcontent-%COMP%]:hover {\n        opacity: 0.6;\n        cursor: pointer;\n}\n\n.transform-color[_ngcontent-%COMP%] {\n        transition: color 0.2s;\n}\n\n.transform-background-color[_ngcontent-%COMP%] {\n        transition: background-color 0.2s;  \n}\n\n.transform-opacity[_ngcontent-%COMP%] {\n        transition: opacity 0.2s;  \n}\n\n.transform-font-size[_ngcontent-%COMP%] {\n        transition: font-size 0.2s;  \n}\n\n.transform-border[_ngcontent-%COMP%] {\n        transition: border 0.2s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jaGF0LXNlbGVjdGlvbi9jaGF0LW9wdGlvbi9jaGF0LW9wdGlvbi5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7UUFDUSxpQ0FBaUM7UUFDakMsbUJBQW1CO0FBQzNCOztBQUVBLG1CQUFtQixpQ0FBaUMsRUFBRTs7QUFFdEQsMERBQTBELHlCQUF5QixFQUFFOztBQUVyRixvQ0FBb0M7O0FBQ3BDO1FBQ1EsV0FBVztRQUNYLGFBQWE7UUFDYixZQUFZO0FBQ3BCOztBQUVBO1FBQ1EsUUFBUTtRQUNSLGtCQUFrQjtRQUNsQixXQUFXO1FBQ1gsWUFBWTtBQUNwQjs7QUFFQTtRQUNRLFFBQVE7UUFDUix3QkFBd0I7UUFDeEIsWUFBWTtRQUNaLGFBQWE7UUFDYixtQkFBbUI7QUFDM0I7O0FBQ0E7UUFDUSxrQkFBa0I7UUFDbEIsV0FBVztRQUNYLGVBQWU7QUFDdkI7O0FBQ0E7UUFDUSxrQkFBa0I7UUFDbEIsV0FBVztRQUNYLGNBQWM7QUFDdEI7O0FBRUEscUJBQXFCOztBQUNyQixvQkFBb0IsWUFBWSxFQUFFOztBQUVsQztRQUNRLHdCQUF3QjtRQUN4QixrQkFBa0I7UUFDbEIsa0JBQWtCO1FBQ2xCLFlBQVk7UUFDWixhQUFhO1FBQ2IsY0FBYztRQUNkLGlCQUFpQjtRQUNqQixnQkFBZ0I7QUFDeEI7O0FBRUEsMENBQTBDOztBQUMxQyxxQ0FBcUMsV0FBVyxFQUFFOztBQUVsRDtRQUNRLGlCQUFpQjtRQUNqQixZQUFZO1FBQ1osaUNBQWlDO1FBQ2pDLGtCQUFrQjtRQUNsQixpQkFBaUI7UUFDakIsa0JBQWtCO1FBQ2xCLGlCQUFpQjtRQUNqQixrQkFBa0I7UUFDbEIsY0FBYztBQUN0Qjs7QUFFQTtRQUNRLGNBQWM7QUFDdEI7O0FBRUE7UUFDUSxhQUFhO1FBQ2IsbUJBQW1CO1FBQ25CLHVCQUF1QjtRQUN2QixpQkFBaUI7UUFDakIsZ0JBQWdCO1FBQ2hCLFlBQVk7QUFDcEI7O0FBRUE7UUFDUSxXQUFXO1FBQ1gsaUJBQWlCO1FBQ2pCLFlBQVk7UUFDWix5QkFBeUI7UUFDekIsZUFBZTtRQUNmLHNCQUFzQjtBQUM5Qjs7QUFFQSxlQUFlLGNBQWMsRUFBRTs7QUFFL0I7UUFDUSxZQUFZO1FBQ1osWUFBWTtRQUNaLGtCQUFrQjtRQUNsQixpQkFBaUI7UUFDakIsV0FBVztRQUNYLGtCQUFrQjtRQUNsQixlQUFlO1FBQ2Ysc0JBQXNCO1FBQ3RCLHlCQUF5QjtBQUNqQzs7QUFFQTtRQUNRLFlBQVk7UUFDWixlQUFlO0FBQ3ZCOztBQUVBO1FBSVEsc0JBQXNCO0FBQzlCOztBQUVBO1FBSVEsaUNBQWlDO0FBQ3pDOztBQUVBO1FBSVEsd0JBQXdCO0FBQ2hDOztBQUVBO1FBSVEsMEJBQTBCO0FBQ2xDOztBQUVBO1FBSVEsdUJBQXVCO0FBQy9CIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jaGF0LXNlbGVjdGlvbi9jaGF0LW9wdGlvbi9jaGF0LW9wdGlvbi5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM4LCA0OSwgNTQpO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xufVxuXG4uY29udGFpbmVyOmhvdmVyIHsgYmFja2dyb3VuZC1jb2xvcjogcmdiKDMwLCA0MCwgNTApOyB9XG5cbi5jb250YWluZXI6aG92ZXIgLnRvcC1jb250YWluZXIgLnRpdGxlLWNvbnRhaW5lciAudGl0bGUgeyBjb2xvcjogIzdhYmZmYyAhaW1wb3J0YW50OyB9XG5cbi8qIFRvcCBjb250YWluZXIgIChJY29uIGFuZCB0aXRsZSkgKi9cbi50b3AtY29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGhlaWdodDogNDBweDtcbn1cblxuLmljb24tY29udGFpbmVyIHtcbiAgICAgICAgb3JkZXI6IDA7XG4gICAgICAgIC8qIGhlaWdodDogMTAwJTsgKi9cbiAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgIGhlaWdodDogNDBweDtcbn1cblxuLnRpdGxlLWNvbnRhaW5lciB7XG4gICAgICAgIG9yZGVyOiAxO1xuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gNTBweCk7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi50aXRsZSB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbn1cbi50aXRsZS1leHBhbmRlZCB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGNvbG9yOiAjN2FiZmZjO1xufVxuXG4vKiBCb3R0b20gY29udGFpbmVyICovXG4uYm90dG9tLWNvbnRhaW5lciB7IGhlaWdodDogNTBweDsgfVxuXG4udGFncy1jb250YWluZXIge1xuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMTBweCk7XG4gICAgICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgICAgICAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICAgICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuLyogTWFrZXMgaG9yaXpvbnRhbCBzY3JvbGwgYmFyIGludmlzaWJsZSAqL1xuLnRhZ3MtY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhciB7IGhlaWdodDogMHB4OyB9XG5cbi50YWctY29udGFpbmVyIHtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM4LCA0OSwgNTQpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgIHBhZGRpbmctbGVmdDogM3B4O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAzcHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogM3B4O1xuICAgICAgICAvKiBjb2xvcjogd2hpdGU7ICovXG4gICAgICAgIGNvbG9yOiAjN2FiZmZjO1xufVxuXG4udGFnLWNvbnRhaW5lcjpob3ZlciB7XG4gICAgICAgIGNvbG9yOiAjN2FiZmZjO1xufVxuXG4uYm90dG9tLWJvdHRvbS1jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogbHRyO1xuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gNnB4KTtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAzcHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzcHg7XG4gICAgICAgIGhlaWdodDogMjVweDtcbn1cblxuLnN1Yi1jb3VudC1jb250YWluZXIge1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgY29sb3I6IHJnYigxNjMsIDE2MywgMTYzKTtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBmb250LWZhbWlseTogJ21vbWNha2UnO1xufVxuXG4uZmxleC1leHBhbmQgeyBmbGV4OiAxIDEgYXV0bzsgfVxuXG4uZ28tYnV0dG9uIHtcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgIHdpZHRoOiA3MHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdtb21jYWtlJztcbiAgICAgICAgY29sb3I6IHJnYigxMDUsIDI1NSwgMTg1KTtcbn1cblxuLmdvLWJ1dHRvbjpob3ZlciB7XG4gICAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udHJhbnNmb3JtLWNvbG9yIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBjb2xvciAwLjJzO1xuICAgICAgICAtbW96LXRyYW5zaXRpb246IGNvbG9yIDAuMnM7XG4gICAgICAgIC1vLXRyYW5zaXRpb246IGNvbG9yIDAuMnM7XG4gICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMnM7XG59XG5cbi50cmFuc2Zvcm0tYmFja2dyb3VuZC1jb2xvciB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzO1xuICAgICAgICAtbW96LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycztcbiAgICAgICAgLW8tdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzO1xuICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnM7ICBcbn1cblxuLnRyYW5zZm9ybS1vcGFjaXR5IHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnM7XG4gICAgICAgIC1tb3otdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzO1xuICAgICAgICAtby10cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnM7XG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4yczsgIFxufVxuXG4udHJhbnNmb3JtLWZvbnQtc2l6ZSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogZm9udC1zaXplIDAuMnM7XG4gICAgICAgIC1tb3otdHJhbnNpdGlvbjogZm9udC1zaXplIDAuMnM7XG4gICAgICAgIC1vLXRyYW5zaXRpb246IGZvbnQtc2l6ZSAwLjJzO1xuICAgICAgICB0cmFuc2l0aW9uOiBmb250LXNpemUgMC4yczsgIFxufVxuXG4udHJhbnNmb3JtLWJvcmRlciB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYm9yZGVyIDAuMnM7XG4gICAgICAgIC1tb3otdHJhbnNpdGlvbjogYm9yZGVyIDAuMnM7XG4gICAgICAgIC1vLXRyYW5zaXRpb246IGJvcmRlciAwLjJzO1xuICAgICAgICB0cmFuc2l0aW9uOiBib3JkZXIgMC4ycztcbn0iXX0= */"],
      data: {
        animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('expansionBox', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          backgroundColor: "rgb(30, 40, 50)",
          height: "90px",
          borderRadius: "5px",
          width: "100%",
          marginBottom: "5px",
          marginTop: "5px"
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('closed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          // backgroundColor: "rgb(38, 49, 54)",
          height: "40px",
          borderRadius: "0px",
          width: "100%"
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('open => closed', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.1s')]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('closed => open', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.2s')])])]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatOptionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-chat-option",
          animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('expansionBox', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            backgroundColor: "rgb(30, 40, 50)",
            height: "90px",
            borderRadius: "5px",
            width: "100%",
            marginBottom: "5px",
            marginTop: "5px"
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('closed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            // backgroundColor: "rgb(38, 49, 54)",
            height: "40px",
            borderRadius: "0px",
            width: "100%"
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('open => closed', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.1s')]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('closed => open', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.2s')])])],
          templateUrl: "chat-option.html",
          styleUrls: ["chat-option.css"]
        }]
      }], function () {
        return [{
          type: src_app_services_chats__WEBPACK_IMPORTED_MODULE_2__["ChatsService"]
        }];
      }, {
        chatId: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        color: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ["color"]
        }],
        chatTitle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ["chatTitle"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/chat-selection/chat-selection.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/chat-selection/chat-selection.ts ***!
    \*************************************************************/

  /*! exports provided: ChatSelectionComponent */

  /***/
  function srcAppComponentsChatSelectionChatSelectionTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatSelectionComponent", function () {
      return ChatSelectionComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _chat_option_chat_option__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./chat-option/chat-option */
    "./src/app/components/chat-selection/chat-option/chat-option.ts");

    function ChatSelectionComponent_app_chat_option_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-chat-option", 2);
      }

      if (rf & 2) {
        var chatId_r1 = ctx.$implicit;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("chatId", chatId_r1)("color", ctx_r0.color);
      }
    }

    var ChatSelectionComponent = function ChatSelectionComponent() {
      _classCallCheck(this, ChatSelectionComponent);

      this.color = "white";
    };

    ChatSelectionComponent.ɵfac = function ChatSelectionComponent_Factory(t) {
      return new (t || ChatSelectionComponent)();
    };

    ChatSelectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ChatSelectionComponent,
      selectors: [["app-chat-selection"]],
      inputs: {
        chatIds: "chatIds",
        color: "color"
      },
      decls: 2,
      vars: 1,
      consts: [[1, "container"], [3, "chatId", "color", 4, "ngFor", "ngForOf"], [3, "chatId", "color"]],
      template: function ChatSelectionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChatSelectionComponent_app_chat_option_1_Template, 1, 2, "app-chat-option", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.chatIds);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _chat_option_chat_option__WEBPACK_IMPORTED_MODULE_2__["ChatOptionComponent"]],
      styles: [".container[_ngcontent-%COMP%] {\n        width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jaGF0LXNlbGVjdGlvbi9jaGF0LXNlbGVjdGlvbi5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7UUFDUSxXQUFXO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jaGF0LXNlbGVjdGlvbi9jaGF0LXNlbGVjdGlvbi5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatSelectionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-chat-selection",
          templateUrl: "chat-selection.html",
          styleUrls: ["chat-selection.css"]
        }]
      }], null, {
        chatIds: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        color: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ["color"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/header/header.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/header/header.component.ts ***!
    \*******************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppComponentsHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _image_fab_image_fab_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../image-fab/image-fab.component */
    "./src/app/components/image-fab/image-fab.component.ts");

    var _c0 = ["headerTextElement"];

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent() {
        _classCallCheck(this, HeaderComponent);

        this.color = "white";
      }

      _createClass(HeaderComponent, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.headerTextElement.nativeElement.style.color = this.color;
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)();
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      viewQuery: function HeaderComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.headerTextElement = _t.first);
        }
      },
      inputs: {
        imageUrl: "imageUrl",
        headerText: "headerText",
        color: "color"
      },
      decls: 7,
      vars: 2,
      consts: [[1, "container"], [1, "icon-container"], [3, "imageUrl"], [1, "text-container"], [1, "header-text"], ["headerTextElement", ""]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-image-fab", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imageUrl", ctx.imageUrl);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.headerText, " ");
        }
      },
      directives: [_image_fab_image_fab_component__WEBPACK_IMPORTED_MODULE_1__["ImageFabComponent"]],
      styles: [".container[_ngcontent-%COMP%] {\n        display: flex;\n        width: 100%;\n        height: 35px;\n        border-radius: 5px;\n        margin-bottom: 3px;\n        \n        \n        background-color: rgb(245, 245, 245);\n}\n\n.icon-container[_ngcontent-%COMP%] {\n        order: 1;\n        height: 35px;\n        width: 35px;\n}\n\n.text-container[_ngcontent-%COMP%] {\n        order: 0;\n        height: 100%;\n        width: calc(100% - 55px);\n        display: flex;\n        align-items: center;\n}\n\n.header-text[_ngcontent-%COMP%] {\n        font-family: 'poppins-semibold';\n        text-align: center;\n        font-size: 17px;\n        width: 100%;\n        color: rgb(1, 88, 211) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7UUFDUSxhQUFhO1FBQ2IsV0FBVztRQUNYLFlBQVk7UUFDWixrQkFBa0I7UUFDbEIsa0JBQWtCO1FBQ2xCLCtCQUErQjtRQUMvQix1Q0FBdUM7UUFDdkMsb0NBQW9DO0FBQzVDOztBQUVBO1FBQ1EsUUFBUTtRQUNSLFlBQVk7UUFDWixXQUFXO0FBQ25COztBQUVBO1FBQ1EsUUFBUTtRQUNSLFlBQVk7UUFDWix3QkFBd0I7UUFDeEIsYUFBYTtRQUNiLG1CQUFtQjtBQUMzQjs7QUFFQTtRQUNRLCtCQUErQjtRQUMvQixrQkFBa0I7UUFDbEIsZUFBZTtRQUNmLFdBQVc7UUFDWCxpQ0FBaUM7QUFDekMiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDNweDtcbiAgICAgICAgLyogYmFja2dyb3VuZC1jb2xvcjogI2NiZGFkYjsgKi9cbiAgICAgICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDMyLCAzMiwgMzIpOyAqL1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ1LCAyNDUsIDI0NSk7XG59XG5cbi5pY29uLWNvbnRhaW5lciB7XG4gICAgICAgIG9yZGVyOiAxO1xuICAgICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgICAgIHdpZHRoOiAzNXB4O1xufSBcblxuLnRleHQtY29udGFpbmVyIHtcbiAgICAgICAgb3JkZXI6IDA7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDU1cHgpO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uaGVhZGVyLXRleHQge1xuICAgICAgICBmb250LWZhbWlseTogJ3BvcHBpbnMtc2VtaWJvbGQnO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGNvbG9yOiByZ2IoMSwgODgsIDIxMSkgIWltcG9ydGFudDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-header",
          templateUrl: "header.component.html",
          styleUrls: ["header.component.css"]
        }]
      }], null, {
        imageUrl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ["imageUrl"]
        }],
        headerText: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ["headerText"]
        }],
        headerTextElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ["headerTextElement"]
        }],
        color: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ["color"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/home-page/chat-display/chat-display.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/components/home-page/chat-display/chat-display.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: ChatDisplayComponent */

  /***/
  function srcAppComponentsHomePageChatDisplayChatDisplayComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatDisplayComponent", function () {
      return ChatDisplayComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_chats__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../services/chats */
    "./src/app/services/chats.ts");
    /* harmony import */


    var src_app_services_chat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/chat */
    "./src/app/services/chat.ts");
    /* harmony import */


    var src_app_services_users__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/users */
    "./src/app/services/users.ts");
    /* harmony import */


    var _chat_page_message_view_chat_title_chat_title_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../chat-page/message-view/chat-title/chat-title.component */
    "./src/app/components/chat-page/message-view/chat-title/chat-title.component.ts");
    /* harmony import */


    var _chat_page_message_view_messages_messages_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../chat-page/message-view/messages/messages.component */
    "./src/app/components/chat-page/message-view/messages/messages.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0(a1) {
      return ["/api/chat/view", a1];
    };

    function ChatDisplayComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "CHAT ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx_r0.chatsService.selectedChatId));
      }
    }

    var ChatDisplayComponent = /*#__PURE__*/function () {
      function ChatDisplayComponent(chatsService, chatService, usersService) {
        _classCallCheck(this, ChatDisplayComponent);

        this.chatsService = chatsService;
        this.chatService = chatService;
        this.usersService = usersService;
      }

      _createClass(ChatDisplayComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this14 = this;

          this.selectedChatIdSub = this.chatsService.getSelectedChatIdUpdated().subscribe(function (chatId) {
            if (_this14.selectedChat !== undefined && _this14.selectedChat._id === chatId) return;

            _this14.chatService.setChatId(chatId);

            _this14.selectedChatSub = _this14.chatService.getChatUpdated().subscribe(function (chat) {
              if (_this14.selectedChat === undefined || _this14.selectedChat === null || _this14.selectedChat._id !== _this14.chatsService.selectedChatId) {
                _this14.selectedChat = chat;
                var userIds = [];

                for (var i = 0; i < _this14.selectedChat.subs.length; i++) {
                  var userId = _this14.selectedChat.subs[i];

                  if (!_this14.usersService.containsUserSub(userId) && userIds.indexOf(userId) === -1) {
                    userIds.push(userId);
                  }
                }

                for (var i = 0; i < _this14.selectedChat.messages.length; i++) {
                  var _userId2 = _this14.selectedChat.messages[i].senderId;

                  if (!_this14.usersService.containsUserSub(_userId2) && userIds.indexOf(_userId2) === -1) {
                    userIds.push(_userId2);
                  }
                }

                _this14.usersService.getUsers(userIds);
              }
            });

            _this14.chatService.getChat(true);
          });
        } //Avoid memory leaks

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.selectedChatIdSub !== undefined && this.selectedChatIdSub === null) {
            this.selectedChatIdSub.unsubscribe();
          }

          if (this.selectedChatSub !== undefined && this.selectedChatSub !== null) {
            this.selectedChatSub.unsubscribe();
          }
        }
      }]);

      return ChatDisplayComponent;
    }();

    ChatDisplayComponent.ɵfac = function ChatDisplayComponent_Factory(t) {
      return new (t || ChatDisplayComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_chats__WEBPACK_IMPORTED_MODULE_1__["ChatsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_chat__WEBPACK_IMPORTED_MODULE_2__["ChatService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_users__WEBPACK_IMPORTED_MODULE_3__["UsersService"]));
    };

    ChatDisplayComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ChatDisplayComponent,
      selectors: [["app-chat-display"]],
      decls: 4,
      vars: 1,
      consts: [[1, "container", "transform-opacity"], ["class", "chat-button transform-opacity transform-border transform-top no-select", 3, "routerLink", 4, "ngIf"], [1, "chat-button", "transform-opacity", "transform-border", "transform-top", "no-select", 3, "routerLink"]],
      template: function ChatDisplayComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-chat-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-messages");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ChatDisplayComponent_div_3_Template, 2, 3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.chatsService.selectedChatId !== null && ctx.chatsService.selectedChatId);
        }
      },
      directives: [_chat_page_message_view_chat_title_chat_title_component__WEBPACK_IMPORTED_MODULE_4__["ChatTitleComponent"], _chat_page_message_view_messages_messages_component__WEBPACK_IMPORTED_MODULE_5__["MessagesComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLink"]],
      styles: [".container[_ngcontent-%COMP%] {\n        position: relative;\n        width: 100%;\n        height: 100%;\n}\n\n.chat-button[_ngcontent-%COMP%] {\n        position: absolute;\n        bottom: 50px;\n        right: 50%;\n        width: 100%;\n        box-sizing: border-box;\n        padding: 5px;\n        text-align: center;\n        font-size: 25px;\n        background-color: rgb(32, 32, 32);\n        border-left: solid white;\n        border-right: solid white;\n        color: rgb(173, 243, 250);\n        transform: translate(50%, -50%);\n        border-radius: 3px;\n        font-family: 'momcake';\n}\n\n.chat-button[_ngcontent-%COMP%]:hover {\n        opacity: 0.7;\n        cursor: pointer; \n}\n\n.transform-opacity[_ngcontent-%COMP%] {\n        transition: opacity 0.4s;  \n}\n\n.transform-border[_ngcontent-%COMP%] {\n        transition: border 0.2s;\n}\n\n.transform-top[_ngcontent-%COMP%] {\n        transition: top 0.4s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lLXBhZ2UvY2hhdC1kaXNwbGF5L2NoYXQtZGlzcGxheS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO1FBQ1Esa0JBQWtCO1FBQ2xCLFdBQVc7UUFDWCxZQUFZO0FBQ3BCOztBQUVBO1FBQ1Esa0JBQWtCO1FBQ2xCLFlBQVk7UUFDWixVQUFVO1FBQ1YsV0FBVztRQUNYLHNCQUFzQjtRQUN0QixZQUFZO1FBQ1osa0JBQWtCO1FBQ2xCLGVBQWU7UUFDZixpQ0FBaUM7UUFDakMsd0JBQXdCO1FBQ3hCLHlCQUF5QjtRQUN6Qix5QkFBeUI7UUFDekIsK0JBQStCO1FBQy9CLGtCQUFrQjtRQUNsQixzQkFBc0I7QUFDOUI7O0FBRUE7UUFDUSxZQUFZO1FBQ1osZUFBZTtBQUN2Qjs7QUFFQTtRQUlRLHdCQUF3QjtBQUNoQzs7QUFFQTtRQUlRLHVCQUF1QjtBQUMvQjs7QUFFQTtRQUlRLG9CQUFvQjtBQUM1QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS1wYWdlL2NoYXQtZGlzcGxheS9jaGF0LWRpc3BsYXkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jaGF0LWJ1dHRvbiB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYm90dG9tOiA1MHB4O1xuICAgICAgICByaWdodDogNTAlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDMyLCAzMiwgMzIpO1xuICAgICAgICBib3JkZXItbGVmdDogc29saWQgd2hpdGU7XG4gICAgICAgIGJvcmRlci1yaWdodDogc29saWQgd2hpdGU7XG4gICAgICAgIGNvbG9yOiByZ2IoMTczLCAyNDMsIDI1MCk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwgLTUwJSk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdtb21jYWtlJztcbn1cblxuLmNoYXQtYnV0dG9uOmhvdmVyIHtcbiAgICAgICAgb3BhY2l0eTogMC43O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7IFxufVxuXG4udHJhbnNmb3JtLW9wYWNpdHkge1xuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgMC40cztcbiAgICAgICAgLW1vei10cmFuc2l0aW9uOiBvcGFjaXR5IDAuNHM7XG4gICAgICAgIC1vLXRyYW5zaXRpb246IG9wYWNpdHkgMC40cztcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjRzOyAgXG59XG5cbi50cmFuc2Zvcm0tYm9yZGVyIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBib3JkZXIgMC4ycztcbiAgICAgICAgLW1vei10cmFuc2l0aW9uOiBib3JkZXIgMC4ycztcbiAgICAgICAgLW8tdHJhbnNpdGlvbjogYm9yZGVyIDAuMnM7XG4gICAgICAgIHRyYW5zaXRpb246IGJvcmRlciAwLjJzO1xufVxuXG4udHJhbnNmb3JtLXRvcCB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogdG9wIDAuNHM7XG4gICAgICAgIC1tb3otdHJhbnNpdGlvbjogdG9wIDAuNHM7XG4gICAgICAgIC1vLXRyYW5zaXRpb246IHRvcCAwLjRzO1xuICAgICAgICB0cmFuc2l0aW9uOiB0b3AgMC40cztcbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatDisplayComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-chat-display",
          templateUrl: "chat-display.component.html",
          styleUrls: ["chat-display.component.css"]
        }]
      }], function () {
        return [{
          type: _services_chats__WEBPACK_IMPORTED_MODULE_1__["ChatsService"]
        }, {
          type: src_app_services_chat__WEBPACK_IMPORTED_MODULE_2__["ChatService"]
        }, {
          type: src_app_services_users__WEBPACK_IMPORTED_MODULE_3__["UsersService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/home-page/chat-lists/chat-lists.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/components/home-page/chat-lists/chat-lists.component.ts ***!
    \*************************************************************************/

  /*! exports provided: ChatListsComponent */

  /***/
  function srcAppComponentsHomePageChatListsChatListsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatListsComponent", function () {
      return ChatListsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_chats__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/chats */
    "./src/app/services/chats.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../header/header.component */
    "./src/app/components/header/header.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _chat_selection_chat_selection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../chat-selection/chat-selection */
    "./src/app/components/chat-selection/chat-selection.ts");

    function ChatListsComponent_app_chat_selection_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-chat-selection", 3);
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("chatIds", ctx_r0.popChatIds)("color", "rgb(173, 243, 250)");
      }
    }

    function ChatListsComponent_app_chat_selection_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-chat-selection", 3);
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("chatIds", ctx_r1.recChatIds)("color", "rgb(173, 243, 250)");
      }
    }

    function ChatListsComponent_app_chat_selection_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-chat-selection", 3);
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("chatIds", ctx_r2.recomChatIds)("color", "rgb(173, 243, 250)");
      }
    }

    var ChatListsComponent = /*#__PURE__*/function () {
      function ChatListsComponent(chatsService) {
        _classCallCheck(this, ChatListsComponent);

        this.chatsService = chatsService;
      }

      _createClass(ChatListsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this15 = this;

          this.popChatIdsSub = this.chatsService.getPopularChatIdsUpdated().subscribe(function (popChatIds) {
            _this15.popChatIds = popChatIds;

            _this15.chatsService.getChats(_this15.popChatIds);

            _this15.popChatIdsSub.unsubscribe();
          });
          this.recomChatIdsSub = this.chatsService.getRecommendedChatIdsUpdated().subscribe(function (recomChatIds) {
            _this15.recomChatIds = recomChatIds;

            _this15.chatsService.getChats(_this15.recomChatIds);

            _this15.recomChatIdsSub.unsubscribe();
          });
          this.recChatIdsSub = this.chatsService.getRecentChatIdsUpdated().subscribe(function (recChatIds) {
            _this15.recChatIds = recChatIds;

            _this15.chatsService.getChats(_this15.recChatIds);

            _this15.recChatIdsSub.unsubscribe();
          });
          this.chatsService.getPopularChatIds();
          this.chatsService.getRecentChatIds();
          this.chatsService.getRecommendedChatIds();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.popChatIdsSub.unsubscribe();
          this.recChatIdsSub.unsubscribe();
          this.recomChatIdsSub.unsubscribe();
        }
      }]);

      return ChatListsComponent;
    }();

    ChatListsComponent.ɵfac = function ChatListsComponent_Factory(t) {
      return new (t || ChatListsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_chats__WEBPACK_IMPORTED_MODULE_1__["ChatsService"]));
    };

    ChatListsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ChatListsComponent,
      selectors: [["app-chat-lists"]],
      decls: 7,
      vars: 9,
      consts: [[1, "container"], [3, "headerText", "imageUrl"], [3, "chatIds", "color", 4, "ngIf"], [3, "chatIds", "color"]],
      template: function ChatListsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ChatListsComponent_app_chat_selection_2_Template, 1, 2, "app-chat-selection", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-header", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ChatListsComponent_app_chat_selection_4_Template, 1, 2, "app-chat-selection", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-header", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ChatListsComponent_app_chat_selection_6_Template, 1, 2, "app-chat-selection", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("headerText", "Popular Chats")("imageUrl", "../../../assets/images/PopularTwo.png");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.popChatIds !== undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("headerText", "New Chats")("imageUrl", "../../../assets/images/NewChatOne.png");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.recChatIds !== undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("headerText", "Recommended Chats")("imageUrl", "../../../assets/images/RecomOne.png");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.recomChatIds !== undefined);
        }
      },
      directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _chat_selection_chat_selection__WEBPACK_IMPORTED_MODULE_4__["ChatSelectionComponent"]],
      styles: [".container[_ngcontent-%COMP%] {\n        width: 100%;\n        height: calc(100% - 65px);\n        overflow-y: scroll;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lLXBhZ2UvY2hhdC1saXN0cy9jaGF0LWxpc3RzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7UUFDUSxXQUFXO1FBQ1gseUJBQXlCO1FBQ3pCLGtCQUFrQjtBQUMxQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS1wYWdlL2NoYXQtbGlzdHMvY2hhdC1saXN0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDY1cHgpO1xuICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatListsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-chat-lists",
          templateUrl: "chat-lists.component.html",
          styleUrls: ["chat-lists.component.css"]
        }]
      }], function () {
        return [{
          type: src_app_services_chats__WEBPACK_IMPORTED_MODULE_1__["ChatsService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/home-page/chat-search/chat-search.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/components/home-page/chat-search/chat-search.component.ts ***!
    \***************************************************************************/

  /*! exports provided: ChatSearchComponent */

  /***/
  function srcAppComponentsHomePageChatSearchChatSearchComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatSearchComponent", function () {
      return ChatSearchComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _services_chats__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../services/chats */
    "./src/app/services/chats.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../header/header.component */
    "./src/app/components/header/header.component.ts");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/autocomplete */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _chat_selection_chat_selection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../chat-selection/chat-selection */
    "./src/app/components/chat-selection/chat-selection.ts");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");

    var _c0 = ["tagInput"];

    function ChatSearchComponent_mat_option_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var title_r7 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", title_r7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", title_r7, " ");
      }
    }

    function ChatSearchComponent_div_12_Template(rf, ctx) {
      if (rf & 1) {
        var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatSearchComponent_div_12_Template_div_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

          var tag_r8 = ctx.$implicit;

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r9.removeTag(tag_r8);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " x ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var tag_r8 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", tag_r8, " ");
      }
    }

    function ChatSearchComponent_mat_option_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var tag_r11 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", tag_r11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", tag_r11, " ");
      }
    }

    function ChatSearchComponent_div_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "loading...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var ChatSearchComponent = /*#__PURE__*/function () {
      function ChatSearchComponent(chatsService) {
        _classCallCheck(this, ChatSearchComponent);

        this.chatsService = chatsService;
        this.formControlTags = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.formControlTitles = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.categories = ["Any", "Science and Tech", "Entertainment", "Esports", "Sports", "Other"];
        this.titleValue = "";
        this.tagValue = "";
        this.queriedTags = false;
        this.queriedTitles = false;
        this.titleOptions = [];
        this.tagOptions = [];
        this.tags = [];
        this.searching = false;
        this.searchResults = []; //Chat ids
      }

      _createClass(ChatSearchComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this16 = this;

          this.filteredTagOptions = this.formControlTags.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (value) {
            return _this16.tagFilter(value);
          }));
          this.filteredTitleOptions = this.formControlTitles.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (value) {
            return _this16.titleFilter(value);
          }));
          this.titleOptionsSub = this.chatsService.getChatTitlesUpdated().subscribe(function (titleOptions) {
            _this16.titleOptions = titleOptions;

            _this16.titleOptionsSub.unsubscribe();
          });
          this.tagOptionsSub = this.chatsService.getTagsUpdated().subscribe(function (tagOptions) {
            _this16.tagOptions = tagOptions;

            _this16.tagOptionsSub.unsubscribe();
          });
          this.chatsService.getAllTags();
          this.chatsService.getAllChatTitles();
        } //Adds a new tag to the list of tags

      }, {
        key: "addTag",
        value: function addTag() {
          var newTag = this.fixTag(this.tagValue.trim().toLowerCase()).split(/\s+/g).join('‑');
          this.tagValue = "";

          if (this.tagInput !== undefined && this.tagInput !== null) {
            this.tagInput.nativeElement.value = "";
          }

          if (newTag === null || newTag === undefined || newTag === "" || newTag === "new tag") return;

          if (this.tags.indexOf(newTag) === -1 && this.tags.length <= 6) {
            this.tags.push(newTag);
          }
        } //Removes a given tag

      }, {
        key: "removeTag",
        value: function removeTag(tag) {
          var index = this.tags.indexOf(tag);

          if (index !== -1) {
            this.tags.splice(index, 1);
          }
        } //Replace underscores and hyphens with no breakable hyphen

      }, {
        key: "fixTag",
        value: function fixTag(tag) {
          for (var i = 0; i < tag.length; i++) {
            if (tag[i] === '_' || tag[i] === '-') {
              tag = this.replaceAt(tag, i, '‑');
            }
          }

          return tag;
        } //Search chats based on query params

      }, {
        key: "searchChats",
        value: function searchChats(category) {
          var _this17 = this;

          if (this.searching) return;
          this.searching = true;

          if (category === undefined || category === null || category === "") {
            category = "Any";
          }

          this.chatsService.searchChats(category, this.titleValue, this.tags).then(function (results) {
            _this17.searchResults = results;

            _this17.chatsService.getChats(_this17.searchResults);

            _this17.searching = false;
          })["catch"](function (reject) {
            console.log(reject);
            _this17.searching = false;
          });
          return;
        } //Replace character at index

      }, {
        key: "replaceAt",
        value: function replaceAt(current, index, replacement) {
          return current.substr(0, index) + replacement + current.substr(index + replacement.length);
        } //https://stackblitz.com/angular/mjxnrkeoknp?file=src%2Fapp%2Fautocomplete-auto-active-first-option-example.ts

      }, {
        key: "tagFilter",
        value: function tagFilter(value) {
          this.tagValue = value;
          var filterValue = value.toLowerCase();
          return this.tagOptions.filter(function (option) {
            return option.toLowerCase().indexOf(filterValue) === 0;
          });
        }
      }, {
        key: "titleFilter",
        value: function titleFilter(value) {
          this.titleValue = value;
          var filterValue = value.toLowerCase();
          return this.titleOptions.filter(function (option) {
            return option.toLowerCase().indexOf(filterValue) === 0;
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.tagOptionsSub.unsubscribe();
          this.titleOptionsSub.unsubscribe();
        }
      }]);

      return ChatSearchComponent;
    }();

    ChatSearchComponent.ɵfac = function ChatSearchComponent_Factory(t) {
      return new (t || ChatSearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_chats__WEBPACK_IMPORTED_MODULE_3__["ChatsService"]));
    };

    ChatSearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ChatSearchComponent,
      selectors: [["app-chat-search"]],
      viewQuery: function ChatSearchComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tagInput = _t.first);
        }
      },
      decls: 28,
      vars: 16,
      consts: [[1, "container"], [3, "headerText", "imageUrl"], [1, "chat-search-container-main"], [1, "chat-search-container"], [1, "chat-title-container"], ["type", "text", "matInput", "", "name", "title", "placeholder", "Title", "maxlength", "40", 1, "chat-title", 3, "matAutocomplete", "formControl"], ["autoActiveFirstOption", ""], ["autoTitles", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], [1, "chat-tags-container"], [1, "tags-container"], ["class", "tag-container", 4, "ngFor", "ngForOf"], [1, "add-tag-button", "no-select", 3, "click"], [3, "submit"], [1, "add-tag-input-container"], ["type", "text", "matInput", "", "name", "tag", "placeholder", "Tag", "maxlength", "25", 1, "add-tag-input", 3, "matAutocomplete", "formControl"], ["tagInput", ""], ["autoTags", "matAutocomplete"], [1, "search-button", 3, "click"], [1, "results-container"], ["class", "searching-label", 4, "ngIf"], [3, "chatIds", "color"], [3, "value"], [1, "tag-container"], [1, "tag-text-container", "no-select"], [1, "tag-button-container", "no-select", 3, "click"], [1, "searching-label"]],
      template: function ChatSearchComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-autocomplete", 6, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ChatSearchComponent_mat_option_8_Template, 2, 2, "mat-option", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ChatSearchComponent_div_12_Template, 5, 1, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatSearchComponent_Template_button_click_13_listener() {
            return ctx.addTag();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "+");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "form", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function ChatSearchComponent_Template_form_submit_15_listener() {
            return ctx.addTag();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 15, 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-autocomplete", 6, 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ChatSearchComponent_mat_option_21_Template, 2, 2, "mat-option", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatSearchComponent_Template_div_click_23_listener() {
            return ctx.searchChats(undefined);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " search ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, ChatSearchComponent_div_26_Template, 2, 0, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "app-chat-selection", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);

          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("headerText", "Search Chats")("imageUrl", "../../../assets/images/Search2.png");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r0)("formControl", ctx.formControlTitles);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 12, ctx.filteredTitleOptions));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tags);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r4)("formControl", ctx.formControlTags);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 14, ctx.filteredTagOptions));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.searching);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("chatIds", ctx.searchResults)("color", "rgb(173, 243, 250)");
        }
      },
      directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _chat_selection_chat_selection__WEBPACK_IMPORTED_MODULE_8__["ChatSelectionComponent"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatOption"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]],
      styles: [".container[_ngcontent-%COMP%] {\n        width: 100%;\n        height: 100%;\n}\n\n.chat-search-container-main[_ngcontent-%COMP%] {\n        height: calc(100% - 105px);\n        display: flex;\n        overflow-y: scroll;\n        flex-direction: column;\n}\n\n.chat-search-container[_ngcontent-%COMP%] {\n        box-sizing: border-box;\n        padding: 5px;\n        \n        margin-bottom: 5px;\n        border-radius: 5px;\n        background-color: rgb(32, 32, 32);\n}\n\n\n\n.chat-title-container[_ngcontent-%COMP%] {\n        width: 100%;\n        height: 50px;\n        border-radius: 5px;\n        background-color: rgb(38, 49, 54);\n        box-sizing: border-box;\n        order: 0;\n}\n\n.chat-title[_ngcontent-%COMP%] {\n        caret-color: white;\n        width: calc(100% - 30px);\n        padding-left: 15px;\n        line-height: 38px;\n        margin-top: 5px;\n        font-size: 17px;\n        border: none;\n        color: white;\n        background-color: rgb(38, 49, 54);\n        font-family: 'poppins-medium';\n}\n\n.chat-title[_ngcontent-%COMP%]::-moz-placeholder { font-family: 'poppins-medium'; }\n\n.chat-title[_ngcontent-%COMP%]::placeholder { font-family: 'poppins-medium'; }\n\n\n\n.chat-category-container[_ngcontent-%COMP%] {\n        order: 1;\n        width: 100%;\n        height: 50px; \n        margin-top: 10px;\n        border-radius: 5px;\n        box-sizing: border-box;\n}\n\n  .mat-select-content {\n        background-color: rgb(38, 49, 54);\n}\n\n\n\n.chat-tags-container[_ngcontent-%COMP%] {\n        order: 2;\n}\n\n.tags-container[_ngcontent-%COMP%] {\n        display: flex;\n        flex-wrap: wrap;\n        background-color: rgb(32, 32, 32);\n        border-radius: 5px;\n        margin-top: 10px;\n}\n\n.add-tag-button[_ngcontent-%COMP%] {\n        margin-left: 3px;\n        margin-right: 3px;\n        margin-top: 3px;\n        margin-bottom: 3px;\n        line-height: 30px;\n        height: 30px;\n        width: 30px;\n        border-radius: 15px;\n        background-color: rgb(38, 49, 54);\n        font-size: 25px;\n        transition: color 0.2s;\n        color: rgb(177, 177, 177);\n        border: none;\n        padding: none;\n}\n\n.add-tag-button[_ngcontent-%COMP%]:hover {\n        color: white;\n        cursor: pointer;\n}\n\n.add-tag-input-container[_ngcontent-%COMP%] {\n        margin-left: 3px;\n        margin-right: 3px;\n        margin-top: 3px;\n        margin-bottom: 3px;\n        height: 30px;\n        border-radius: 5px;\n        background-color: rgb(38, 49, 54);\n        transition: height 0.2s;\n        padding-right: 5px;\n}\n\n.add-tag-input[_ngcontent-%COMP%] {\n        color: #7abffc;\n        line-height: 20px;\n        margin-top: 5px;\n        margin-left: 5px;\n        caret-color: white;\n        background-color: rgb(38, 49, 54);\n        border: none;\n        font-size: 16px;\n        font-family: 'poppins-medium';\n}\n\n.add-tag-input[_ngcontent-%COMP%]::-moz-placeholder {\n        font-family: 'poppins-medium';\n}\n\n.add-tag-input[_ngcontent-%COMP%]::placeholder {\n        font-family: 'poppins-medium';\n}\n\n.tag-container[_ngcontent-%COMP%] {\n        margin-left: 3px;\n        margin-right: 3px;\n        margin-top: 3px;\n        margin-bottom: 3px;\n        width: 100%;\n        height: 30px;\n        border-radius: 5px;\n        background-color: rgb(38, 49, 54);\n        transition: border 0.2s;\n        border-top: 1px solid transparent;\n        border-bottom: 1px solid transparent;\n}\n\n.tag-container[_ngcontent-%COMP%]:hover {\n        border-top: 1px solid white;\n        border-bottom: 1px solid white;\n}\n\n.tag-text-container[_ngcontent-%COMP%] {\n        width: calc(100% - 35px);\n        float: left;\n        color: #7abffc;\n        line-height: 30px;\n        margin-left: 5px;\n        text-align: center;\n}\n\n.tag-button-container[_ngcontent-%COMP%] {\n        float: right;\n        width: 30px;\n        border-radius: 15px;\n        color: rgb(177, 177, 177);\n        transition: color 0.2s;\n        transition: background-color 0.2s;\n        font-size: 16px;\n        line-height: 30px;\n        text-align: center;\n}\n\n.tag-button-container[_ngcontent-%COMP%]:hover {\n        background-color: rgb(59, 65, 68);\n        color: rgb(255, 105, 105);\n}\n\n\n\n.search-button[_ngcontent-%COMP%] {\n        height: 30px;\n        line-height: 30px;\n        border-radius: 5px;\n        width: 100%;\n        text-align: center;\n        margin-top: 15px;\n        background-color: rgb(38, 49, 54);;\n        color: white;\n        font-size: 17px;\n        transition: color 0.2s;\n        color: rgb(177, 177, 177);\n        order: 3;\n}\n\n.search-button[_ngcontent-%COMP%]:hover {\n        color: white;\n        cursor: pointer;\n}\n\n.searching-label[_ngcontent-%COMP%] {\n        height: 25px;\n        line-height: 25px;\n        border-radius: 5px;\n        width: 100%;\n        text-align: center;\n        margin-top: 15px;\n        background-color: rgb(38, 49, 54);;\n        color: white;\n        font-size: 15px;\n        transition: color 0.2s;\n        color: white;\n}\n\n.results-container[_ngcontent-%COMP%] {\n        margin-top: 5px;\n        order: 4;\n}\n\n.no-select[_ngcontent-%COMP%] {\n        -webkit-touch-callout: none;\n        -webkit-user-select: none; \n        -moz-user-select: none; \n        user-select: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lLXBhZ2UvY2hhdC1zZWFyY2gvY2hhdC1zZWFyY2guY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtRQUNRLFdBQVc7UUFDWCxZQUFZO0FBQ3BCOztBQUVBO1FBQ1EsMEJBQTBCO1FBQzFCLGFBQWE7UUFDYixrQkFBa0I7UUFDbEIsc0JBQXNCO0FBQzlCOztBQUVBO1FBQ1Esc0JBQXNCO1FBQ3RCLFlBQVk7UUFDWixxQkFBcUI7UUFDckIsa0JBQWtCO1FBQ2xCLGtCQUFrQjtRQUNsQixpQ0FBaUM7QUFDekM7O0FBQ0EsVUFBVTs7QUFDVjtRQUNRLFdBQVc7UUFDWCxZQUFZO1FBQ1osa0JBQWtCO1FBQ2xCLGlDQUFpQztRQUNqQyxzQkFBc0I7UUFDdEIsUUFBUTtBQUNoQjs7QUFFQTtRQUNRLGtCQUFrQjtRQUNsQix3QkFBd0I7UUFDeEIsa0JBQWtCO1FBQ2xCLGlCQUFpQjtRQUNqQixlQUFlO1FBQ2YsZUFBZTtRQUNmLFlBQVk7UUFDWixZQUFZO1FBQ1osaUNBQWlDO1FBQ2pDLDZCQUE2QjtBQUNyQzs7QUFFQSxnQ0FBMkIsNkJBQTZCLEVBQUU7O0FBQTFELDJCQUEyQiw2QkFBNkIsRUFBRTs7QUFFMUQsb0JBQW9COztBQUNwQjtRQUNRLFFBQVE7UUFDUixXQUFXO1FBQ1gsWUFBWTtRQUNaLGdCQUFnQjtRQUNoQixrQkFBa0I7UUFDbEIsc0JBQXNCO0FBQzlCOztBQUVBO1FBQ1EsaUNBQWlDO0FBQ3pDOztBQUNBLFNBQVM7O0FBQ1Q7UUFDUSxRQUFRO0FBQ2hCOztBQUVBO1FBQ1EsYUFBYTtRQUNiLGVBQWU7UUFDZixpQ0FBaUM7UUFDakMsa0JBQWtCO1FBQ2xCLGdCQUFnQjtBQUN4Qjs7QUFFQTtRQUNRLGdCQUFnQjtRQUNoQixpQkFBaUI7UUFDakIsZUFBZTtRQUNmLGtCQUFrQjtRQUNsQixpQkFBaUI7UUFDakIsWUFBWTtRQUNaLFdBQVc7UUFDWCxtQkFBbUI7UUFDbkIsaUNBQWlDO1FBQ2pDLGVBQWU7UUFJZixzQkFBc0I7UUFDdEIseUJBQXlCO1FBQ3pCLFlBQVk7UUFDWixhQUFhO0FBQ3JCOztBQUVBO1FBQ1EsWUFBWTtRQUNaLGVBQWU7QUFDdkI7O0FBRUE7UUFDUSxnQkFBZ0I7UUFDaEIsaUJBQWlCO1FBQ2pCLGVBQWU7UUFDZixrQkFBa0I7UUFDbEIsWUFBWTtRQUNaLGtCQUFrQjtRQUNsQixpQ0FBaUM7UUFJakMsdUJBQXVCO1FBQ3ZCLGtCQUFrQjtBQUMxQjs7QUFFQTtRQUNRLGNBQWM7UUFDZCxpQkFBaUI7UUFDakIsZUFBZTtRQUNmLGdCQUFnQjtRQUNoQixrQkFBa0I7UUFDbEIsaUNBQWlDO1FBQ2pDLFlBQVk7UUFDWixlQUFlO1FBQ2YsNkJBQTZCO0FBQ3JDOztBQUVBO1FBQ1EsNkJBQTZCO0FBQ3JDOztBQUZBO1FBQ1EsNkJBQTZCO0FBQ3JDOztBQUVBO1FBQ1EsZ0JBQWdCO1FBQ2hCLGlCQUFpQjtRQUNqQixlQUFlO1FBQ2Ysa0JBQWtCO1FBQ2xCLFdBQVc7UUFDWCxZQUFZO1FBQ1osa0JBQWtCO1FBQ2xCLGlDQUFpQztRQUlqQyx1QkFBdUI7UUFDdkIsaUNBQWlDO1FBQ2pDLG9DQUFvQztBQUM1Qzs7QUFFQTtRQUNRLDJCQUEyQjtRQUMzQiw4QkFBOEI7QUFDdEM7O0FBRUE7UUFDUSx3QkFBd0I7UUFDeEIsV0FBVztRQUNYLGNBQWM7UUFDZCxpQkFBaUI7UUFDakIsZ0JBQWdCO1FBQ2hCLGtCQUFrQjtBQUMxQjs7QUFFQTtRQUNRLFlBQVk7UUFDWixXQUFXO1FBQ1gsbUJBQW1CO1FBQ25CLHlCQUF5QjtRQUl6QixzQkFBc0I7UUFJdEIsaUNBQWlDO1FBQ2pDLGVBQWU7UUFDZixpQkFBaUI7UUFDakIsa0JBQWtCO0FBQzFCOztBQUVBO1FBQ1EsaUNBQWlDO1FBQ2pDLHlCQUF5QjtBQUNqQzs7QUFFQSxrQkFBa0I7O0FBQ2xCO1FBQ1EsWUFBWTtRQUNaLGlCQUFpQjtRQUNqQixrQkFBa0I7UUFDbEIsV0FBVztRQUNYLGtCQUFrQjtRQUNsQixnQkFBZ0I7UUFDaEIsaUNBQWlDO1FBQ2pDLFlBQVk7UUFDWixlQUFlO1FBSWYsc0JBQXNCO1FBQ3RCLHlCQUF5QjtRQUN6QixRQUFRO0FBQ2hCOztBQUVBO1FBQ1EsWUFBWTtRQUNaLGVBQWU7QUFDdkI7O0FBRUE7UUFDUSxZQUFZO1FBQ1osaUJBQWlCO1FBQ2pCLGtCQUFrQjtRQUNsQixXQUFXO1FBQ1gsa0JBQWtCO1FBQ2xCLGdCQUFnQjtRQUNoQixpQ0FBaUM7UUFDakMsWUFBWTtRQUNaLGVBQWU7UUFJZixzQkFBc0I7UUFDdEIsWUFBWTtBQUNwQjs7QUFFQTtRQUNRLGVBQWU7UUFDZixRQUFRO0FBQ2hCOztBQUVBO1FBQ1EsMkJBQTJCO1FBQzNCLHlCQUF5QjtRQUV6QixzQkFBc0I7UUFFdEIsaUJBQWlCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ob21lLXBhZ2UvY2hhdC1zZWFyY2gvY2hhdC1zZWFyY2guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY2hhdC1zZWFyY2gtY29udGFpbmVyLW1haW4ge1xuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDEwNXB4KTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uY2hhdC1zZWFyY2gtY29udGFpbmVyIHtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAvKiBtYXJnaW4tdG9wOiA1cHg7ICovXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzIsIDMyLCAzMik7XG59XG4vKiBUaXRsZSAqL1xuLmNoYXQtdGl0bGUtY29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzgsIDQ5LCA1NCk7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIG9yZGVyOiAwO1xufVxuXG4uY2hhdC10aXRsZSB7XG4gICAgICAgIGNhcmV0LWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDMwcHgpO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzOHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzOCwgNDksIDU0KTtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdwb3BwaW5zLW1lZGl1bSc7XG59XG5cbi5jaGF0LXRpdGxlOjpwbGFjZWhvbGRlciB7IGZvbnQtZmFtaWx5OiAncG9wcGlucy1tZWRpdW0nOyB9XG5cbi8qIENhdGVnb3J5IFNlbGVjdCAqL1xuLmNoYXQtY2F0ZWdvcnktY29udGFpbmVyIHtcbiAgICAgICAgb3JkZXI6IDE7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDUwcHg7IFxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbjo6bmctZGVlcCAubWF0LXNlbGVjdC1jb250ZW50IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM4LCA0OSwgNTQpO1xufVxuLyogVGFncyAqL1xuLmNoYXQtdGFncy1jb250YWluZXIge1xuICAgICAgICBvcmRlcjogMjtcbn1cblxuLnRhZ3MtY29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzIsIDMyLCAzMik7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmFkZC10YWctYnV0dG9uIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDNweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAzcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDNweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogM3B4O1xuICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM4LCA0OSwgNTQpO1xuICAgICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogY29sb3IgMC4ycztcbiAgICAgICAgLW1vei10cmFuc2l0aW9uOiBjb2xvciAwLjJzO1xuICAgICAgICAtby10cmFuc2l0aW9uOiBjb2xvciAwLjJzO1xuICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzO1xuICAgICAgICBjb2xvcjogcmdiKDE3NywgMTc3LCAxNzcpO1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIHBhZGRpbmc6IG5vbmU7XG59XG5cbi5hZGQtdGFnLWJ1dHRvbjpob3ZlciB7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYWRkLXRhZy1pbnB1dC1jb250YWluZXIge1xuICAgICAgICBtYXJnaW4tbGVmdDogM3B4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDNweDtcbiAgICAgICAgbWFyZ2luLXRvcDogM3B4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzcHg7XG4gICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzgsIDQ5LCA1NCk7XG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogaGVpZ2h0IDAuMnM7XG4gICAgICAgIC1tb3otdHJhbnNpdGlvbjogaGVpZ2h0IDAuMnM7XG4gICAgICAgIC1vLXRyYW5zaXRpb246IGhlaWdodCAwLjJzO1xuICAgICAgICB0cmFuc2l0aW9uOiBoZWlnaHQgMC4ycztcbiAgICAgICAgcGFkZGluZy1yaWdodDogNXB4O1xufVxuXG4uYWRkLXRhZy1pbnB1dCB7XG4gICAgICAgIGNvbG9yOiAjN2FiZmZjO1xuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgICAgICBjYXJldC1jb2xvcjogd2hpdGU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzOCwgNDksIDU0KTtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAncG9wcGlucy1tZWRpdW0nO1xufVxuXG4uYWRkLXRhZy1pbnB1dDo6cGxhY2Vob2xkZXIge1xuICAgICAgICBmb250LWZhbWlseTogJ3BvcHBpbnMtbWVkaXVtJztcbn1cblxuLnRhZy1jb250YWluZXIge1xuICAgICAgICBtYXJnaW4tbGVmdDogM3B4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDNweDtcbiAgICAgICAgbWFyZ2luLXRvcDogM3B4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM4LCA0OSwgNTQpO1xuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGJvcmRlciAwLjJzO1xuICAgICAgICAtbW96LXRyYW5zaXRpb246IGJvcmRlciAwLjJzO1xuICAgICAgICAtby10cmFuc2l0aW9uOiBib3JkZXIgMC4ycztcbiAgICAgICAgdHJhbnNpdGlvbjogYm9yZGVyIDAuMnM7XG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xufVxuXG4udGFnLWNvbnRhaW5lcjpob3ZlciB7XG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB3aGl0ZTtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xufVxuXG4udGFnLXRleHQtY29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDM1cHgpO1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgY29sb3I6ICM3YWJmZmM7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50YWctYnV0dG9uLWNvbnRhaW5lciB7XG4gICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICAgIGNvbG9yOiByZ2IoMTc3LCAxNzcsIDE3Nyk7XG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogY29sb3IgMC4ycztcbiAgICAgICAgLW1vei10cmFuc2l0aW9uOiBjb2xvciAwLjJzO1xuICAgICAgICAtby10cmFuc2l0aW9uOiBjb2xvciAwLjJzO1xuICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzO1xuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycztcbiAgICAgICAgLW1vei10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnM7XG4gICAgICAgIC1vLXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycztcbiAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzO1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50YWctYnV0dG9uLWNvbnRhaW5lcjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1OSwgNjUsIDY4KTtcbiAgICAgICAgY29sb3I6IHJnYigyNTUsIDEwNSwgMTA1KTtcbn1cblxuLyogU2VhcmNoIGJ1dHRvbiAqL1xuLnNlYXJjaC1idXR0b24ge1xuICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzOCwgNDksIDU0KTs7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGNvbG9yIDAuMnM7XG4gICAgICAgIC1tb3otdHJhbnNpdGlvbjogY29sb3IgMC4ycztcbiAgICAgICAgLW8tdHJhbnNpdGlvbjogY29sb3IgMC4ycztcbiAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4ycztcbiAgICAgICAgY29sb3I6IHJnYigxNzcsIDE3NywgMTc3KTtcbiAgICAgICAgb3JkZXI6IDM7XG59XG5cbi5zZWFyY2gtYnV0dG9uOmhvdmVyIHtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zZWFyY2hpbmctbGFiZWwge1xuICAgICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzOCwgNDksIDU0KTs7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGNvbG9yIDAuMnM7XG4gICAgICAgIC1tb3otdHJhbnNpdGlvbjogY29sb3IgMC4ycztcbiAgICAgICAgLW8tdHJhbnNpdGlvbjogY29sb3IgMC4ycztcbiAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4ycztcbiAgICAgICAgY29sb3I6IHdoaXRlO1xufVxuXG4ucmVzdWx0cy1jb250YWluZXIge1xuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgIG9yZGVyOiA0O1xufVxuXG4ubm8tc2VsZWN0IHtcbiAgICAgICAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xuICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lOyBcbiAgICAgICAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lOyBcbiAgICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTsgXG4gICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTsgXG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatSearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-chat-search",
          templateUrl: "chat-search.component.html",
          styleUrls: ["chat-search.component.css"]
        }]
      }], function () {
        return [{
          type: _services_chats__WEBPACK_IMPORTED_MODULE_3__["ChatsService"]
        }];
      }, {
        tagInput: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ["tagInput"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/home-page/home-page.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/home-page/home-page.component.ts ***!
    \*************************************************************/

  /*! exports provided: HomePageComponent */

  /***/
  function srcAppComponentsHomePageHomePageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageComponent", function () {
      return HomePageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var src_app_services_chat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/chat */
    "./src/app/services/chat.ts");
    /* harmony import */


    var src_app_services_chats__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/chats */
    "./src/app/services/chats.ts");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../navbar/navbar.component */
    "./src/app/components/navbar/navbar.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/flex-layout/extended */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");
    /* harmony import */


    var _chat_search_chat_search_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./chat-search/chat-search.component */
    "./src/app/components/home-page/chat-search/chat-search.component.ts");
    /* harmony import */


    var _chat_display_chat_display_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./chat-display/chat-display.component */
    "./src/app/components/home-page/chat-display/chat-display.component.ts");
    /* harmony import */


    var _chat_lists_chat_lists_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./chat-lists/chat-lists.component */
    "./src/app/components/home-page/chat-lists/chat-lists.component.ts");

    function HomePageComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-chat-search");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-chat-display");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-chat-lists");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomePageComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomePageComponent_div_2_Template_div_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.toggleLeft();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " \u25C0\uFE0E ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-chat-search");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomePageComponent_div_2_Template_div_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.toggleMiddle();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " \u25C8\uFE0E ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-chat-display");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomePageComponent_div_2_Template_div_click_11_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.toggleRight();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " \u25B6\uFE0E ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-chat-lists");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@expansionTitle", !ctx_r1.leftExpanded ? "visible" : "invisible");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@expansionPanel", ctx_r1.leftExpanded ? "open" : "closed");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@expansionTitle", ctx_r1.leftExpanded || ctx_r1.rightExpanded ? "visible" : "invisible");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@expansionPanel", !ctx_r1.rightExpanded && !ctx_r1.leftExpanded ? "open" : "closed");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@expansionTitle", !ctx_r1.rightExpanded ? "visible" : "invisible");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@expansionPanel", ctx_r1.rightExpanded ? "open" : "closed");
      }
    }

    var HomePageComponent = /*#__PURE__*/function () {
      function HomePageComponent(chatsService, media, chatService) {
        _classCallCheck(this, HomePageComponent);

        this.chatsService = chatsService;
        this.media = media;
        this.chatService = chatService;
        this.leftExpanded = false;
        this.rightExpanded = false;
      }

      _createClass(HomePageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this18 = this;

          this.popChatIdsSub = this.chatsService.getPopularChatIdsUpdated().subscribe(function (popularChatsIds) {
            _this18.chatsService.setSelectedChatId(popularChatsIds[0]);

            _this18.popChatIdsSub.unsubscribe();
          });
        } //Toggle left expansion panel

      }, {
        key: "toggleLeft",
        value: function toggleLeft() {
          this.leftExpanded = !this.leftExpanded;

          if (this.leftExpanded) {
            this.rightExpanded = false;
          }
        } //Toggle right expansion panel

      }, {
        key: "toggleRight",
        value: function toggleRight() {
          this.rightExpanded = !this.rightExpanded;

          if (this.rightExpanded) {
            this.leftExpanded = false;
          }
        } //Toggle middle expansion panel 

      }, {
        key: "toggleMiddle",
        value: function toggleMiddle() {
          this.rightExpanded = false;
          this.leftExpanded = false;
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.popChatIdsSub.unsubscribe();
        }
      }]);

      return HomePageComponent;
    }();

    HomePageComponent.ɵfac = function HomePageComponent_Factory(t) {
      return new (t || HomePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_chats__WEBPACK_IMPORTED_MODULE_3__["ChatsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["MediaObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_chat__WEBPACK_IMPORTED_MODULE_2__["ChatService"]));
    };

    HomePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomePageComponent,
      selectors: [["app-home-page"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([src_app_services_chat__WEBPACK_IMPORTED_MODULE_2__["ChatService"]])],
      decls: 3,
      vars: 2,
      consts: [["fxShow", "true", "fxHide.lt-md", "true", "class", "container", 4, "ngIf"], ["fxShow", "true", "fxHide.gt-sm", "true", "class", "container-small", 4, "ngIf"], ["fxShow", "true", "fxHide.lt-md", "true", 1, "container"], [1, "left"], [1, "middle"], [1, "right"], ["fxShow", "true", "fxHide.gt-sm", "true", 1, "container-small"], [1, "header-container", "float-left", 3, "click"], [1, "header-text", "no-select", "transform-color"], [1, "left-small", "float-left"], [1, "header-text", "transform-color", "no-select"], [1, "middle-small", "float-left"], [1, "header-container", "float-right", 3, "click"], [1, "right-small", "float-right"]],
      template: function HomePageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-navbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomePageComponent_div_1_Template, 7, 0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomePageComponent_div_2_Template, 16, 6, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.media.isActive("gt-sm"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.media.isActive("lt-md"));
        }
      },
      directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_7__["DefaultShowHideDirective"], _chat_search_chat_search_component__WEBPACK_IMPORTED_MODULE_8__["ChatSearchComponent"], _chat_display_chat_display_component__WEBPACK_IMPORTED_MODULE_9__["ChatDisplayComponent"], _chat_lists_chat_lists_component__WEBPACK_IMPORTED_MODULE_10__["ChatListsComponent"]],
      styles: [".left[_ngcontent-%COMP%] {\n  width: 25%;\n  height: 100%;\n  background-color: rgb(50, 64, 71);\n  \n  float: left;\n}\n\n.right[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 25%;\n  background-color: rgb(50, 64, 71);\n  \n  float: left;\n}\n\n.middle[_ngcontent-%COMP%] {\n  height: 100%;\n  width: calc(50% - 2px);\n  \n  margin-left: 1px;\n  margin-right: 1px;\n  background: linear-gradient(to right, rgb(38, 49, 54) 0px, rgb(38, 49, 54) 50px, rgb(50, 64, 71) 50px, rgb(50, 64, 71) 100%);\n  float: left;\n}\n\n.chat-list-container[_ngcontent-%COMP%] {\n  height: 31%;\n}\n\n.header-container[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100%;\n  width: 20px;\n  background-color: rgb(233, 233, 233);\n  justify-content: center;\n  align-items: center;\n}\n\n.header-text[_ngcontent-%COMP%] {\n        font-weight: bolder;\n        font-family: 'poppins-semibold';\n        text-align: center;\n        font-size: 17px;\n        width: 100%;\n        color: rgb(54, 136, 252) !important;\n}\n\n.header-container[_ngcontent-%COMP%]:hover { cursor: pointer; }\n\n.header-container[_ngcontent-%COMP%]:hover   .header-text[_ngcontent-%COMP%] {\n  color: black;\n}\n\n.float-left[_ngcontent-%COMP%] {\n  float: left;\n}\n\n.float-right[_ngcontent-%COMP%] {\n  float: right;\n}\n\n.middle-small[_ngcontent-%COMP%] {\n  background: linear-gradient(to right, rgb(38, 49, 54) 0px, rgb(38, 49, 54) 50px, rgb(50, 64, 71) 50px, rgb(50, 64, 71) 100%);\n  height: 100%;\n}\n\n.right-small[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.left-small[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.container-small[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;  \n}\n\n\n\n.no-select[_ngcontent-%COMP%] {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none; \n  -moz-user-select: none; \n  user-select: none;\n}\n\n.transform-color[_ngcontent-%COMP%] {\n  transition: color 0.1s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lLXBhZ2UvaG9tZS1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLGlDQUFpQztFQUNqQyxrQkFBa0I7RUFDbEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7RUFDVixpQ0FBaUM7RUFDakMsa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsNkJBQTZCO0VBQzdCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsNEhBQTRIO0VBQzVILFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osV0FBVztFQUNYLG9DQUFvQztFQUNwQyx1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO1FBQ1EsbUJBQW1CO1FBQ25CLCtCQUErQjtRQUMvQixrQkFBa0I7UUFDbEIsZUFBZTtRQUNmLFdBQVc7UUFDWCxtQ0FBbUM7QUFDM0M7O0FBRUEsMEJBQTBCLGVBQWUsRUFBRTs7QUFFM0M7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSw0SEFBNEg7RUFDNUgsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBLHVDQUF1Qzs7QUFDdkM7RUFDRSwyQkFBMkI7RUFDM0IseUJBQXlCO0VBRXpCLHNCQUFzQjtFQUV0QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFJRSxzQkFBc0I7QUFDeEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hvbWUtcGFnZS9ob21lLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sZWZ0IHtcbiAgd2lkdGg6IDI1JTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTAsIDY0LCA3MSk7XG4gIC8qIGNvbG9yOiB3aGl0ZTsgKi9cbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5yaWdodCB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDI1JTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDUwLCA2NCwgNzEpO1xuICAvKiBjb2xvcjogd2hpdGU7ICovXG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4ubWlkZGxlIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogY2FsYyg1MCUgLSAycHgpO1xuICAvKiB3aWR0aDogY2FsYyg1MCUgLSAyMHB4KTsgKi9cbiAgbWFyZ2luLWxlZnQ6IDFweDtcbiAgbWFyZ2luLXJpZ2h0OiAxcHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiKDM4LCA0OSwgNTQpIDBweCwgcmdiKDM4LCA0OSwgNTQpIDUwcHgsIHJnYig1MCwgNjQsIDcxKSA1MHB4LCByZ2IoNTAsIDY0LCA3MSkgMTAwJSk7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4uY2hhdC1saXN0LWNvbnRhaW5lciB7XG4gIGhlaWdodDogMzElO1xufVxuXG4uaGVhZGVyLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzMsIDIzMywgMjMzKTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5oZWFkZXItdGV4dCB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAncG9wcGlucy1zZW1pYm9sZCc7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgY29sb3I6IHJnYig1NCwgMTM2LCAyNTIpICFpbXBvcnRhbnQ7XG59XG5cbi5oZWFkZXItY29udGFpbmVyOmhvdmVyIHsgY3Vyc29yOiBwb2ludGVyOyB9XG5cbi5oZWFkZXItY29udGFpbmVyOmhvdmVyIC5oZWFkZXItdGV4dCB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLmZsb2F0LWxlZnQge1xuICBmbG9hdDogbGVmdDtcbn1cblxuLmZsb2F0LXJpZ2h0IHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4ubWlkZGxlLXNtYWxsIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2IoMzgsIDQ5LCA1NCkgMHB4LCByZ2IoMzgsIDQ5LCA1NCkgNTBweCwgcmdiKDUwLCA2NCwgNzEpIDUwcHgsIHJnYig1MCwgNjQsIDcxKSAxMDAlKTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ucmlnaHQtc21hbGwge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5sZWZ0LXNtYWxsIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmNvbnRhaW5lci1zbWFsbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7ICBcbn1cblxuLyogUHJldmVudHMgdXNlcnMgZnJvbSBzZWxlY3RpbmcgdGV4dCAqL1xuLm5vLXNlbGVjdCB7XG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsgXG4gIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTsgXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7IFxuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7IFxuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLnRyYW5zZm9ybS1jb2xvciB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogY29sb3IgMC4xcztcbiAgLW1vei10cmFuc2l0aW9uOiBjb2xvciAwLjFzO1xuICAtby10cmFuc2l0aW9uOiBjb2xvciAwLjFzO1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjFzO1xufSJdfQ== */"],
      data: {
        animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])("expansionPanel", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])("open", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          visibility: "visible",
          width: "calc(100% - 64px)"
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])("closed", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          width: "0%",
          visibility: "hidden"
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])("open => closed", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])("0.2s")]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])("closed => open", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])("0.2s")])]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])("expansionTitle", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])("visible", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          width: "30px",
          lineHeight: "30px",
          marginRight: "1px",
          marginLeft: "1px",
          visibility: "visible"
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])("invisible", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          width: "0px",
          visibility: "hidden"
        }))])]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomePageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-home-page",
          animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])("expansionPanel", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])("open", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            visibility: "visible",
            width: "calc(100% - 64px)"
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])("closed", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            width: "0%",
            visibility: "hidden"
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])("open => closed", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])("0.2s")]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])("closed => open", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])("0.2s")])]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])("expansionTitle", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])("visible", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            width: "30px",
            lineHeight: "30px",
            marginRight: "1px",
            marginLeft: "1px",
            visibility: "visible"
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])("invisible", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            width: "0px",
            visibility: "hidden"
          }))])],
          templateUrl: "home-page.component.html",
          styleUrls: ["home-page.component.css"],
          providers: [src_app_services_chat__WEBPACK_IMPORTED_MODULE_2__["ChatService"]]
        }]
      }], function () {
        return [{
          type: src_app_services_chats__WEBPACK_IMPORTED_MODULE_3__["ChatsService"]
        }, {
          type: _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["MediaObserver"]
        }, {
          type: src_app_services_chat__WEBPACK_IMPORTED_MODULE_2__["ChatService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/image-fab/image-fab.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/image-fab/image-fab.component.ts ***!
    \*************************************************************/

  /*! exports provided: ImageFabComponent */

  /***/
  function srcAppComponentsImageFabImageFabComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImageFabComponent", function () {
      return ImageFabComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ImageFabComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 4);
      }
    }

    function ImageFabComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 5);
      }
    }

    var ImageFabComponent = function ImageFabComponent(DomSanitationService) {
      _classCallCheck(this, ImageFabComponent);

      this.DomSanitationService = DomSanitationService;
    };

    ImageFabComponent.ɵfac = function ImageFabComponent_Factory(t) {
      return new (t || ImageFabComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]));
    };

    ImageFabComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ImageFabComponent,
      selectors: [["app-image-fab"]],
      inputs: {
        imageUrl: "imageUrl",
        showStatus: "showStatus",
        online: "online"
      },
      decls: 4,
      vars: 3,
      consts: [[1, "container"], ["object-fit", "contain", 1, "icon-button", 3, "src"], ["class", "online-marker", 4, "ngIf"], ["class", "offline-marker", 4, "ngIf"], [1, "online-marker"], [1, "offline-marker"]],
      template: function ImageFabComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ImageFabComponent_div_2_Template, 1, 0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ImageFabComponent_div_3_Template, 1, 0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.DomSanitationService.bypassSecurityTrustUrl(ctx.imageUrl), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.online && ctx.showStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.online && ctx.showStatus);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
      styles: [".container[_ngcontent-%COMP%] {\n        position: relative;\n        height: 100%;\n        width: 100%;\n}\n\n.icon-button[_ngcontent-%COMP%] {\n        display: block;\n        width: 88%;\n        height: 88%;\n        border-radius: 50%;\n        margin: 6%;\n        position: relative;\n        \n}\n\n.online-marker[_ngcontent-%COMP%] {\n        position: absolute;\n        width: 22%;\n        height: 22%;\n        background-color: rgb(0, 190, 0);\n        border-width: 1px;\n        border: solid white; \n        border-radius: 50%;\n        bottom: 12%;\n        right: 6%;\n}\n\n.offline-marker[_ngcontent-%COMP%] {\n        position: absolute;\n        width: 22%;\n        height: 22%;\n        background-color: rgb(87, 87, 87);\n        border: solid rgb(214, 213, 213); \n        border-radius: 50%;\n        bottom: 12%;\n        right: 6%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pbWFnZS1mYWIvaW1hZ2UtZmFiLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7UUFDUSxrQkFBa0I7UUFDbEIsWUFBWTtRQUNaLFdBQVc7QUFDbkI7O0FBRUE7UUFDUSxjQUFjO1FBQ2QsVUFBVTtRQUNWLFdBQVc7UUFDWCxrQkFBa0I7UUFDbEIsVUFBVTtRQUNWLGtCQUFrQjtRQUNsQiw2QkFBNkI7QUFDckM7O0FBRUE7UUFDUSxrQkFBa0I7UUFDbEIsVUFBVTtRQUNWLFdBQVc7UUFDWCxnQ0FBZ0M7UUFDaEMsaUJBQWlCO1FBQ2pCLG1CQUFtQjtRQUNuQixrQkFBa0I7UUFDbEIsV0FBVztRQUNYLFNBQVM7QUFDakI7O0FBRUE7UUFDUSxrQkFBa0I7UUFDbEIsVUFBVTtRQUNWLFdBQVc7UUFDWCxpQ0FBaUM7UUFDakMsZ0NBQWdDO1FBQ2hDLGtCQUFrQjtRQUNsQixXQUFXO1FBQ1gsU0FBUztBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW1hZ2UtZmFiL2ltYWdlLWZhYi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbn1cblxuLmljb24tYnV0dG9uIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHdpZHRoOiA4OCU7XG4gICAgICAgIGhlaWdodDogODglO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIG1hcmdpbjogNiU7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgLyogYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7ICovXG59XG5cbi5vbmxpbmUtbWFya2VyIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB3aWR0aDogMjIlO1xuICAgICAgICBoZWlnaHQ6IDIyJTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDE5MCwgMCk7XG4gICAgICAgIGJvcmRlci13aWR0aDogMXB4O1xuICAgICAgICBib3JkZXI6IHNvbGlkIHdoaXRlOyBcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBib3R0b206IDEyJTtcbiAgICAgICAgcmlnaHQ6IDYlO1xufVxuXG4ub2ZmbGluZS1tYXJrZXIge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHdpZHRoOiAyMiU7XG4gICAgICAgIGhlaWdodDogMjIlO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODcsIDg3LCA4Nyk7XG4gICAgICAgIGJvcmRlcjogc29saWQgcmdiKDIxNCwgMjEzLCAyMTMpOyBcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBib3R0b206IDEyJTtcbiAgICAgICAgcmlnaHQ6IDYlO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImageFabComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-image-fab",
          templateUrl: "image-fab.component.html",
          styleUrls: ["image-fab.component.css"]
        }]
      }], function () {
        return [{
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]
        }];
      }, {
        imageUrl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        showStatus: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        online: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/navbar/navbar.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/navbar/navbar.component.ts ***!
    \*******************************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppComponentsNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_authentication__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/authentication */
    "./src/app/services/authentication.ts");
    /* harmony import */


    var _services_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/user */
    "./src/app/services/user.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _user_icon_user_icon_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../user-icon/user-icon.component */
    "./src/app/components/user-icon/user-icon.component.ts");
    /* harmony import */


    var _image_fab_image_fab_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../image-fab/image-fab.component */
    "./src/app/components/image-fab/image-fab.component.ts");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    function NavbarComponent_div_2_app_user_icon_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-user-icon", 10);
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/api/user")("showStatus", true)("online", ctx_r5.user.online);
      }
    }

    function NavbarComponent_div_2_app_image_fab_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-image-fab", 11);
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/api/user")("imageUrl", ctx_r6.user.image)("showStatus", true)("online", ctx_r6.user.online);
      }
    }

    function NavbarComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NavbarComponent_div_2_app_user_icon_1_Template, 1, 3, "app-user-icon", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NavbarComponent_div_2_app_image_fab_2_Template, 1, 4, "app-image-fab", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.user.image === "$$$Default$$$");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.user.image != "$$$Default$$$");
      }
    }

    function NavbarComponent_span_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 12);
      }
    }

    function NavbarComponent_span_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 12);
      }
    }

    function NavbarComponent_button_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_button_7_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r7.loginWithKeycloak();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Login");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function NavbarComponent_button_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_button_8_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r9.logoutWithKeycloak();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Logout");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = ["*"];

    var NavbarComponent = /*#__PURE__*/function () {
      function NavbarComponent(authService, userService, location) {
        _classCallCheck(this, NavbarComponent);

        this.authService = authService;
        this.userService = userService;
        this.location = location;
      }

      _createClass(NavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this19 = this;

          this.userSub = this.userService.getUserUpdated().subscribe(function (user) {
            _this19.user = user;
          });

          if (this.authService.isAuthenticated()) {
            this.userService.getUser();
          }
        } //Checks if user is logged in

      }, {
        key: "isAuthenticated",
        value: function isAuthenticated() {
          return this.authService.isAuthenticated();
        } // logout of keycloak register page

      }, {
        key: "logoutWithKeycloak",
        value: function logoutWithKeycloak() {
          var keycloakLogoutUrl = "http://localhost:3000/logout";
          window.location.href = keycloakLogoutUrl;
          console.log("logout of keycloak");
        } // redirect to keycloack login page

      }, {
        key: "loginWithKeycloak",
        value: function loginWithKeycloak() {
          console.log("redirecting to keycloak login page");
          this.authService.login();
        } //Avoids memory leak

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.userSub.unsubscribe();
        }
      }]);

      return NavbarComponent;
    }();

    NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
      return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_authentication__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]));
    };

    NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavbarComponent,
      selectors: [["app-navbar"]],
      ngContentSelectors: _c0,
      decls: 10,
      vars: 6,
      consts: [[1, "nav-container"], [1, "navbar-main"], ["class", "account-button transform-border", 4, "ngIf"], ["class", "flexExpand", 4, "ngIf"], [1, "home-link", 3, "routerLink"], ["mat-raised-button", "", "class", "button-login transform-opacity", 3, "click", 4, "ngIf"], ["mat-raised-button", "", "class", "button-register transform-opacity", 3, "click", 4, "ngIf"], [1, "account-button", "transform-border"], ["class", "change-on-hover", "style", "outline: 0 !important;", 3, "routerLink", "showStatus", "online", 4, "ngIf"], ["class", "change-on-hover", "style", "outline: 0 !important;", 3, "routerLink", "imageUrl", "showStatus", "online", 4, "ngIf"], [1, "change-on-hover", 2, "outline", "0 !important", 3, "routerLink", "showStatus", "online"], [1, "change-on-hover", 2, "outline", "0 !important", 3, "routerLink", "imageUrl", "showStatus", "online"], [1, "flexExpand"], ["mat-raised-button", "", 1, "button-login", "transform-opacity", 3, "click"], ["mat-raised-button", "", 1, "button-register", "transform-opacity", 3, "click"]],
      template: function NavbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NavbarComponent_div_2_Template, 3, 2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NavbarComponent_span_3_Template, 1, 0, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "RUMBLE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NavbarComponent_span_6_Template, 1, 0, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, NavbarComponent_button_7_Template, 2, 0, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NavbarComponent_button_8_Template, 2, 0, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user !== undefined && ctx.user !== null);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAuthenticated());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isAuthenticated());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isAuthenticated());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isAuthenticated());
        }
      },
      directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbar"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], _user_icon_user_icon_component__WEBPACK_IMPORTED_MODULE_6__["UserIconComponent"], _image_fab_image_fab_component__WEBPACK_IMPORTED_MODULE_7__["ImageFabComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"]],
      styles: [".nav-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  padding: 0px;\n  overflow: hidden;\n}\n.navbar-main[_ngcontent-%COMP%] {\n  background-color: #134169;\n  color: white;\n  height: 60px;\n  top: 0px;\n}\n.sandwich-icon[_ngcontent-%COMP%] {\n  width: 55px;\n  height: 55px;\n  padding: 5px;\n  font-size: 30px;\n}\n.button-login[_ngcontent-%COMP%] {\n  font-family: 'poppins-semibold';\n  margin-right: 10px;\n  color: white;\n  border: 2px solid white;\n  background-color: transparent;\n  font-size: 18px;\n  margin-right: 10px;\n  opacity: 1;\n}\n.button-register[_ngcontent-%COMP%] {\n  font-family: 'poppins-semibold';\n  color: white;\n  background-color: rgb(32, 32, 32);\n  font-size: 18px;\n  border: 2px solid rgb(32, 32, 32);\n  opacity: 1;\n}\n.button-register[_ngcontent-%COMP%]:hover {\n  opacity: 0.6;\n}\n.button-login[_ngcontent-%COMP%]:hover {\n  opacity: 0.6;\n}\n.home-link[_ngcontent-%COMP%] {\n  font-family: 'momcake';\n  font-size: 32px;\n  font-weight: bold;\n  background-color: #3a5266;\n  padding-left: 10px;\n  padding-right: 10px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  color: rgb(173, 243, 250);\n  border-bottom: solid white;\n  border-top: solid white;\n  border-radius: 3px;\n}\n.home-link[_ngcontent-%COMP%]:hover { cursor: pointer; }\n.flexExpand[_ngcontent-%COMP%] { flex: 1 1 auto; }\n.account-button[_ngcontent-%COMP%] {\n  border: solid transparent;\n  width: 55px;\n  height: 55px;\n  border-radius: 50%;\n  border-width: 3px;\n  z-index: 2;\n}\n.account-button[_ngcontent-%COMP%]:hover {\n  border: solid rgb(173, 243, 250);\n  cursor: pointer; \n}\n.spacer[_ngcontent-%COMP%] {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n.home-container[_ngcontent-%COMP%] {\n  background-color: rgb(63, 81, 90);\n  \n}\n.transform-font-size[_ngcontent-%COMP%] {\n  transition: font-size 0.4s;  \n}\n.transform-color[_ngcontent-%COMP%] {\n  transition: color 0.4s;  \n}\n.transform-border-bottom[_ngcontent-%COMP%] {\n  transition: border-bottom 0.2s;\n}\n.transform-border-top[_ngcontent-%COMP%] {\n  transition: border-top 0.2s;\n}\n.transform-opacity[_ngcontent-%COMP%] {\n  transition: opacity 0.2s;\n}\n.transform-border[_ngcontent-%COMP%] {\n  transition: border 0.2s;\n}\n.no-select[_ngcontent-%COMP%] {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none; \n  -moz-user-select: none; \n  user-select: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsd0NBQXdDO0FBQ3hDO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFlBQVk7RUFDWixRQUFRO0FBQ1Y7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osWUFBWTtFQUNaLGVBQWU7QUFDakI7QUFFQTtFQUNFLCtCQUErQjtFQUMvQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLHVCQUF1QjtFQUN2Qiw2QkFBNkI7RUFDN0IsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7QUFFQTtFQUNFLCtCQUErQjtFQUMvQixZQUFZO0VBQ1osaUNBQWlDO0VBQ2pDLGVBQWU7RUFDZixpQ0FBaUM7RUFDakMsVUFBVTtBQUNaO0FBRUE7RUFDRSxZQUFZO0FBQ2Q7QUFFQTtFQUNFLFlBQVk7QUFDZDtBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsMEJBQTBCO0VBQzFCLHVCQUF1QjtFQUN2QixrQkFBa0I7QUFDcEI7QUFFQSxtQkFBbUIsZUFBZSxFQUFFO0FBR3BDLGNBQWMsY0FBYyxFQUFFO0FBRTlCO0VBQ0UseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixVQUFVO0FBQ1o7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyxlQUFlO0FBQ2pCO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxpQ0FBaUM7RUFDakMsK0JBQStCO0FBQ2pDO0FBRUE7RUFJRSwwQkFBMEI7QUFDNUI7QUFFQTtFQUlFLHNCQUFzQjtBQUN4QjtBQUVBO0VBSUUsOEJBQThCO0FBQ2hDO0FBRUE7RUFJRSwyQkFBMkI7QUFDN0I7QUFFQTtFQUlFLHdCQUF3QjtBQUMxQjtBQUVBO0VBSUUsdUJBQXVCO0FBQ3pCO0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IseUJBQXlCO0VBRXpCLHNCQUFzQjtFQUV0QixpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIENvbnRhaW5zIHRoZSBjb250ZW50cyBvZiBldmVyeSBwYWdlICovXG4ubmF2LWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLm5hdmJhci1tYWluIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEzNDE2OTtcbiAgY29sb3I6IHdoaXRlO1xuICBoZWlnaHQ6IDYwcHg7XG4gIHRvcDogMHB4O1xufVxuXG4uc2FuZHdpY2gtaWNvbiB7XG4gIHdpZHRoOiA1NXB4O1xuICBoZWlnaHQ6IDU1cHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuXG4uYnV0dG9uLWxvZ2luIHtcbiAgZm9udC1mYW1pbHk6ICdwb3BwaW5zLXNlbWlib2xkJztcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5idXR0b24tcmVnaXN0ZXIge1xuICBmb250LWZhbWlseTogJ3BvcHBpbnMtc2VtaWJvbGQnO1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigzMiwgMzIsIDMyKTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMzIsIDMyLCAzMik7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5idXR0b24tcmVnaXN0ZXI6aG92ZXIge1xuICBvcGFjaXR5OiAwLjY7XG59XG5cbi5idXR0b24tbG9naW46aG92ZXIge1xuICBvcGFjaXR5OiAwLjY7XG59XG5cbi5ob21lLWxpbmsge1xuICBmb250LWZhbWlseTogJ21vbWNha2UnO1xuICBmb250LXNpemU6IDMycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2E1MjY2O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gIGNvbG9yOiByZ2IoMTczLCAyNDMsIDI1MCk7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIHdoaXRlO1xuICBib3JkZXItdG9wOiBzb2xpZCB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuXG4uaG9tZS1saW5rOmhvdmVyIHsgY3Vyc29yOiBwb2ludGVyOyB9XG5cblxuLmZsZXhFeHBhbmQgeyBmbGV4OiAxIDEgYXV0bzsgfVxuXG4uYWNjb3VudC1idXR0b24ge1xuICBib3JkZXI6IHNvbGlkIHRyYW5zcGFyZW50O1xuICB3aWR0aDogNTVweDtcbiAgaGVpZ2h0OiA1NXB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlci13aWR0aDogM3B4O1xuICB6LWluZGV4OiAyO1xufVxuXG4uYWNjb3VudC1idXR0b246aG92ZXIge1xuICBib3JkZXI6IHNvbGlkIHJnYigxNzMsIDI0MywgMjUwKTtcbiAgY3Vyc29yOiBwb2ludGVyOyBcbn1cblxuLnNwYWNlciB7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbn1cblxuLmhvbWUtY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDYzLCA4MSwgOTApO1xuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjMGUxODIyOyAqL1xufVxuXG4udHJhbnNmb3JtLWZvbnQtc2l6ZSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogZm9udC1zaXplIDAuNHM7XG4gIC1tb3otdHJhbnNpdGlvbjogZm9udC1zaXplIDAuNHM7XG4gIC1vLXRyYW5zaXRpb246IGZvbnQtc2l6ZSAwLjRzO1xuICB0cmFuc2l0aW9uOiBmb250LXNpemUgMC40czsgIFxufVxuXG4udHJhbnNmb3JtLWNvbG9yIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBjb2xvciAwLjRzO1xuICAtbW96LXRyYW5zaXRpb246IGNvbG9yIDAuNHM7XG4gIC1vLXRyYW5zaXRpb246IGNvbG9yIDAuNHM7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuNHM7ICBcbn1cblxuLnRyYW5zZm9ybS1ib3JkZXItYm90dG9tIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBib3JkZXItYm90dG9tIDAuMnM7XG4gIC1tb3otdHJhbnNpdGlvbjogYm9yZGVyLWJvdHRvbSAwLjJzO1xuICAtby10cmFuc2l0aW9uOiBib3JkZXItYm90dG9tIDAuMnM7XG4gIHRyYW5zaXRpb246IGJvcmRlci1ib3R0b20gMC4ycztcbn1cblxuLnRyYW5zZm9ybS1ib3JkZXItdG9wIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBib3JkZXItdG9wIDAuMnM7XG4gIC1tb3otdHJhbnNpdGlvbjogYm9yZGVyLXRvcCAwLjJzO1xuICAtby10cmFuc2l0aW9uOiBib3JkZXItdG9wIDAuMnM7XG4gIHRyYW5zaXRpb246IGJvcmRlci10b3AgMC4ycztcbn1cblxuLnRyYW5zZm9ybS1vcGFjaXR5IHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnM7XG4gIC1tb3otdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzO1xuICAtby10cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnM7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycztcbn1cblxuLnRyYW5zZm9ybS1ib3JkZXIge1xuICAtd2Via2l0LXRyYW5zaXRpb246IGJvcmRlciAwLjJzO1xuICAtbW96LXRyYW5zaXRpb246IGJvcmRlciAwLjJzO1xuICAtby10cmFuc2l0aW9uOiBib3JkZXIgMC4ycztcbiAgdHJhbnNpdGlvbjogYm9yZGVyIDAuMnM7XG59XG5cbi5uby1zZWxlY3Qge1xuICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7IFxuICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7IFxuICAtbW96LXVzZXItc2VsZWN0OiBub25lOyBcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lOyBcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-navbar",
          templateUrl: "navbar.component.html",
          styleUrls: ["navbar.component.css"]
        }]
      }], function () {
        return [{
          type: _services_authentication__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]
        }, {
          type: _services_user__WEBPACK_IMPORTED_MODULE_2__["UserService"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/user-icon/user-icon.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/user-icon/user-icon.component.ts ***!
    \*************************************************************/

  /*! exports provided: UserIconComponent */

  /***/
  function srcAppComponentsUserIconUserIconComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserIconComponent", function () {
      return UserIconComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function UserIconComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 3);
      }
    }

    function UserIconComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 4);
      }
    }

    var UserIconComponent = function UserIconComponent() {
      _classCallCheck(this, UserIconComponent);
    };

    UserIconComponent.ɵfac = function UserIconComponent_Factory(t) {
      return new (t || UserIconComponent)();
    };

    UserIconComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UserIconComponent,
      selectors: [["app-user-icon"]],
      inputs: {
        showStatus: "showStatus",
        online: "online"
      },
      decls: 3,
      vars: 2,
      consts: [[1, "icon-button"], ["class", "online-marker", 4, "ngIf"], ["class", "offline-marker", 4, "ngIf"], [1, "online-marker"], [1, "offline-marker"]],
      template: function UserIconComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UserIconComponent_div_1_Template, 1, 0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UserIconComponent_div_2_Template, 1, 0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showStatus && ctx.online);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showStatus && !ctx.online);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
      styles: [".icon-button[_ngcontent-%COMP%] {\n        background-image: url('DefaultIconImage.png');\n        background-size: contain;                   \n        background-repeat: no-repeat;\n        background-position: center center; \n        width: 88%;\n        height: 88%;\n        border-radius: 50%;\n        margin: 6%;\n        position: relative;\n}\n.online-marker[_ngcontent-%COMP%] {\n        position: absolute;\n        width: 25%;\n        height: 25%;\n        background-color: rgb(0, 190, 0);\n        border-width: 1px;\n        border: solid white; \n        border-radius: 50%;\n        bottom: 0px;\n        right: 0px;\n}\n.offline-marker[_ngcontent-%COMP%] {\n        position: absolute;\n        width: 25%;\n        height: 25%;\n        background-color: rgb(87, 87, 87);\n        border: solid rgb(214, 213, 213); \n        border-radius: 50%;\n        bottom: 0px;\n        right: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyLWljb24vdXNlci1pY29uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7UUFDUSw2Q0FBb0U7UUFDcEUsd0JBQXdCO1FBQ3hCLDRCQUE0QjtRQUM1QixrQ0FBa0M7UUFDbEMsVUFBVTtRQUNWLFdBQVc7UUFDWCxrQkFBa0I7UUFDbEIsVUFBVTtRQUNWLGtCQUFrQjtBQUMxQjtBQUNBO1FBQ1Esa0JBQWtCO1FBQ2xCLFVBQVU7UUFDVixXQUFXO1FBQ1gsZ0NBQWdDO1FBQ2hDLGlCQUFpQjtRQUNqQixtQkFBbUI7UUFDbkIsa0JBQWtCO1FBQ2xCLFdBQVc7UUFDWCxVQUFVO0FBQ2xCO0FBRUE7UUFDUSxrQkFBa0I7UUFDbEIsVUFBVTtRQUNWLFdBQVc7UUFDWCxpQ0FBaUM7UUFDakMsZ0NBQWdDO1FBQ2hDLGtCQUFrQjtRQUNsQixXQUFXO1FBQ1gsVUFBVTtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci1pY29uL3VzZXItaWNvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmljb24tYnV0dG9uIHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9EZWZhdWx0SWNvbkltYWdlLnBuZ1wiKTtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluOyAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjsgXG4gICAgICAgIHdpZHRoOiA4OCU7XG4gICAgICAgIGhlaWdodDogODglO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIG1hcmdpbjogNiU7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5vbmxpbmUtbWFya2VyIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB3aWR0aDogMjUlO1xuICAgICAgICBoZWlnaHQ6IDI1JTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDE5MCwgMCk7XG4gICAgICAgIGJvcmRlci13aWR0aDogMXB4O1xuICAgICAgICBib3JkZXI6IHNvbGlkIHdoaXRlOyBcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBib3R0b206IDBweDtcbiAgICAgICAgcmlnaHQ6IDBweDtcbn1cblxuLm9mZmxpbmUtbWFya2VyIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB3aWR0aDogMjUlO1xuICAgICAgICBoZWlnaHQ6IDI1JTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDg3LCA4NywgODcpO1xuICAgICAgICBib3JkZXI6IHNvbGlkIHJnYigyMTQsIDIxMywgMjEzKTsgXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgYm90dG9tOiAwcHg7XG4gICAgICAgIHJpZ2h0OiAwcHg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserIconComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-user-icon",
          templateUrl: "user-icon.component.html",
          styleUrls: ["user-icon.component.css"]
        }]
      }], null, {
        showStatus: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ["showStatus"]
        }],
        online: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ["online"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/user-page/user-chats-view/user-chats-view.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/components/user-page/user-chats-view/user-chats-view.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: UserChatsViewComponent */

  /***/
  function srcAppComponentsUserPageUserChatsViewUserChatsViewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserChatsViewComponent", function () {
      return UserChatsViewComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../services/user */
    "./src/app/services/user.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../header/header.component */
    "./src/app/components/header/header.component.ts");
    /* harmony import */


    var _chat_selection_chat_selection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../chat-selection/chat-selection */
    "./src/app/components/chat-selection/chat-selection.ts");

    var UserChatsViewComponent = /*#__PURE__*/function () {
      function UserChatsViewComponent(userService) {
        _classCallCheck(this, UserChatsViewComponent);

        this.userService = userService;
      }

      _createClass(UserChatsViewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this20 = this;

          this.userSub = this.userService.getUserUpdated().subscribe(function (user) {
            _this20.user = user;
          });
          this.userService.getUser();
        } //Get chat Ids from user chatIds list

      }, {
        key: "getChatIds",
        value: function getChatIds() {
          if (this.user === undefined || this.user === null) return [];
          var chatIds = [];

          for (var i = 0; i < this.user.chatIds.length; i++) {
            chatIds.push(this.user.chatIds[i]);
          }

          return chatIds;
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.userSub.unsubscribe();
        }
      }]);

      return UserChatsViewComponent;
    }();

    UserChatsViewComponent.ɵfac = function UserChatsViewComponent_Factory(t) {
      return new (t || UserChatsViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user__WEBPACK_IMPORTED_MODULE_1__["UserService"]));
    };

    UserChatsViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UserChatsViewComponent,
      selectors: [["app-user-chats-view"]],
      decls: 5,
      vars: 4,
      consts: [[1, "container"], [1, "header-container"], [3, "headerText", "imageUrl"], [1, "chats-container"], [3, "chatIds", "color"]],
      template: function UserChatsViewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-header", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-chat-selection", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("headerText", "Subscriptions")("imageUrl", "../../../assets/images/SubsTwo.png");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("chatIds", ctx.getChatIds())("color", "rgb(173, 243, 250)");
        }
      },
      directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _chat_selection_chat_selection__WEBPACK_IMPORTED_MODULE_3__["ChatSelectionComponent"]],
      styles: [".container[_ngcontent-%COMP%] {\n        width: 100%;\n        height: 100%;\n        background-color: rgb(50, 64, 71);\n        display: flex;\n        flex-direction: column;\n}\n\n.header-container[_ngcontent-%COMP%] {\n        height: 35px;\n        width: 100%;\n}\n\n.chats-container[_ngcontent-%COMP%] {\n        width: 100%;\n        height: calc(100% - 85px);\n        overflow-y: scroll;\n}\n.chat-create-container[_ngcontent-%COMP%] {\n        height: 65px;\n        width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyLXBhZ2UvdXNlci1jaGF0cy12aWV3L3VzZXItY2hhdHMtdmlldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO1FBQ1EsV0FBVztRQUNYLFlBQVk7UUFDWixpQ0FBaUM7UUFDakMsYUFBYTtRQUNiLHNCQUFzQjtBQUM5QjtBQUNBLDZEQUE2RDtBQUU3RDtRQUNRLFlBQVk7UUFDWixXQUFXO0FBQ25CO0FBQ0EsZUFBZTtBQUNmO1FBQ1EsV0FBVztRQUNYLHlCQUF5QjtRQUN6QixrQkFBa0I7QUFDMUI7QUFFQTtRQUNRLFlBQVk7UUFDWixXQUFXO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy91c2VyLXBhZ2UvdXNlci1jaGF0cy12aWV3L3VzZXItY2hhdHMtdmlldy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1MCwgNjQsIDcxKTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi5oZWFkZXItY29udGFpbmVyIHtcbiAgICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbn1cbi8qIENoYXRzIExpc3QgKi9cbi5jaGF0cy1jb250YWluZXIge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA4NXB4KTtcbiAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuXG4uY2hhdC1jcmVhdGUtY29udGFpbmVyIHtcbiAgICAgICAgaGVpZ2h0OiA2NXB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserChatsViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-user-chats-view",
          templateUrl: "user-chats-view.component.html",
          styleUrls: ["user-chats-view.component.css"]
        }]
      }], function () {
        return [{
          type: _services_user__WEBPACK_IMPORTED_MODULE_1__["UserService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/user-page/user-friends-view/friend-request/friend-request.component.ts":
  /*!***************************************************************************************************!*\
    !*** ./src/app/components/user-page/user-friends-view/friend-request/friend-request.component.ts ***!
    \***************************************************************************************************/

  /*! exports provided: FriendRequestComponent */

  /***/
  function srcAppComponentsUserPageUserFriendsViewFriendRequestFriendRequestComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FriendRequestComponent", function () {
      return FriendRequestComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/user */
    "./src/app/services/user.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _image_fab_image_fab_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../image-fab/image-fab.component */
    "./src/app/components/image-fab/image-fab.component.ts");
    /* harmony import */


    var _user_icon_user_icon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../user-icon/user-icon.component */
    "./src/app/components/user-icon/user-icon.component.ts");

    function FriendRequestComponent_app_image_fab_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-image-fab", 9);
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imageUrl", ctx_r0.image)("showStatus", false)("online", false);
      }
    }

    function FriendRequestComponent_app_user_icon_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-user-icon", 10);
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showStatus", false)("online", false);
      }
    }

    var FriendRequestComponent = /*#__PURE__*/function () {
      function FriendRequestComponent(userService) {
        _classCallCheck(this, FriendRequestComponent);

        this.userService = userService;
        this.image = "$$$Default$$$";
      } //Accept user's friend request


      _createClass(FriendRequestComponent, [{
        key: "acceptRequest",
        value: function acceptRequest() {
          this.userService.acceptFriendRequest(this.userId);
        } //Decline user's friend request

      }, {
        key: "declineRequest",
        value: function declineRequest() {
          this.userService.declineFriendRequest(this.userId);
        }
      }]);

      return FriendRequestComponent;
    }();

    FriendRequestComponent.ɵfac = function FriendRequestComponent_Factory(t) {
      return new (t || FriendRequestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user__WEBPACK_IMPORTED_MODULE_1__["UserService"]));
    };

    FriendRequestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FriendRequestComponent,
      selectors: [["app-friend-request"]],
      inputs: {
        username: "username",
        image: "image",
        userId: "userId"
      },
      decls: 12,
      vars: 3,
      consts: [[1, "request-container"], [1, "request-icon-container"], [3, "imageUrl", "showStatus", "online", 4, "ngIf"], [3, "showStatus", "online", 4, "ngIf"], [1, "request-username-container"], [1, "request-username"], [1, "request-actions-container"], [1, "request-accept", "transform-background-color", "transform-font-size", "transform-color", 3, "click"], [1, "request-decline", "transform-background-color", "transform-font-size", "transform-color", 3, "click"], [3, "imageUrl", "showStatus", "online"], [3, "showStatus", "online"]],
      template: function FriendRequestComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FriendRequestComponent_app_image_fab_2_Template, 1, 3, "app-image-fab", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FriendRequestComponent_app_user_icon_3_Template, 1, 2, "app-user-icon", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FriendRequestComponent_Template_div_click_8_listener() {
            return ctx.acceptRequest();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " \u2713 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FriendRequestComponent_Template_div_click_10_listener() {
            return ctx.declineRequest();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " x ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.image !== "$$$Default$$$");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.image === "$$$Default$$$");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.username, " ");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _image_fab_image_fab_component__WEBPACK_IMPORTED_MODULE_3__["ImageFabComponent"], _user_icon_user_icon_component__WEBPACK_IMPORTED_MODULE_4__["UserIconComponent"]],
      styles: [".request-container[_ngcontent-%COMP%] {\n        width: 100%;\n        display: flex;\n        height: 50px;\n        border-radius: 5px;\n        background-color: rgb(38, 49, 54);\n}\n\n.request-icon-container[_ngcontent-%COMP%] {\n        order: 0;\n        height: 50px;\n        width: 50px;\n}\n\n.request-username-container[_ngcontent-%COMP%] {\n        order: 1;\n        width: calc(100% - 140px);\n        height: 50px;\n}\n\n.request-username[_ngcontent-%COMP%] {\n        text-align: center;\n        width: 100%;\n        font-size: 19px;\n        line-height: 50px;\n        color: hotpink;\n}\n\n.request-actions-container[_ngcontent-%COMP%] {\n        order: 2;\n        width: 50px;\n        height: 50px;\n        display: flex;\n}\n\n.request-accept[_ngcontent-%COMP%] {\n        line-height: 40px;\n        height: 40px;\n        min-width: 40px;\n        margin-right: 5px;\n        border-radius: 2px;\n        text-align: center;\n        margin-top: 5px;\n        font-size: 20px;\n        color: white;\n}\n\n.request-decline[_ngcontent-%COMP%] {\n        line-height: 40px;\n        height: 40px;\n        min-width: 40px;\n        border-radius: 2px;\n        text-align: center;\n        margin-top: 5px;\n        font-size: 20px;\n        color: white;\n}\n\n.request-decline[_ngcontent-%COMP%]:hover {\n        background-color: rgb(50, 62, 68);\n        font-size: 26px;\n        color: rgb(255, 105, 105);\n}\n\n.request-accept[_ngcontent-%COMP%]:hover {\n        background-color: rgb(50, 62, 68);\n        font-size: 26px;\n        color: rgb(105, 255, 185);\n}\n\n.transform-background-color[_ngcontent-%COMP%] {\n        transition: background-color 0.2s;  \n}\n\n.transform-font-size[_ngcontent-%COMP%] {\n        transition: font-size 0.2s;  \n}\n\n.transform-color[_ngcontent-%COMP%] {\n        transition: color 0.2s;  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyLXBhZ2UvdXNlci1mcmllbmRzLXZpZXcvZnJpZW5kLXJlcXVlc3QvZnJpZW5kLXJlcXVlc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtRQUNRLFdBQVc7UUFDWCxhQUFhO1FBQ2IsWUFBWTtRQUNaLGtCQUFrQjtRQUNsQixpQ0FBaUM7QUFDekM7O0FBRUE7UUFDUSxRQUFRO1FBQ1IsWUFBWTtRQUNaLFdBQVc7QUFDbkI7O0FBRUE7UUFDUSxRQUFRO1FBQ1IseUJBQXlCO1FBQ3pCLFlBQVk7QUFDcEI7O0FBQ0E7UUFDUSxrQkFBa0I7UUFDbEIsV0FBVztRQUNYLGVBQWU7UUFDZixpQkFBaUI7UUFDakIsY0FBYztBQUN0Qjs7QUFFQTtRQUNRLFFBQVE7UUFDUixXQUFXO1FBQ1gsWUFBWTtRQUNaLGFBQWE7QUFDckI7O0FBRUE7UUFDUSxpQkFBaUI7UUFDakIsWUFBWTtRQUNaLGVBQWU7UUFDZixpQkFBaUI7UUFDakIsa0JBQWtCO1FBQ2xCLGtCQUFrQjtRQUNsQixlQUFlO1FBQ2YsZUFBZTtRQUNmLFlBQVk7QUFDcEI7O0FBRUE7UUFDUSxpQkFBaUI7UUFDakIsWUFBWTtRQUNaLGVBQWU7UUFDZixrQkFBa0I7UUFDbEIsa0JBQWtCO1FBQ2xCLGVBQWU7UUFDZixlQUFlO1FBQ2YsWUFBWTtBQUNwQjs7QUFFQTtRQUNRLGlDQUFpQztRQUNqQyxlQUFlO1FBQ2YseUJBQXlCO0FBQ2pDOztBQUVBO1FBQ1EsaUNBQWlDO1FBQ2pDLGVBQWU7UUFDZix5QkFBeUI7QUFDakM7O0FBRUE7UUFJUSxpQ0FBaUM7QUFDekM7O0FBRUE7UUFJUSwwQkFBMEI7QUFDbEM7O0FBRUE7UUFJUSxzQkFBc0I7QUFDOUIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3VzZXItcGFnZS91c2VyLWZyaWVuZHMtdmlldy9mcmllbmQtcmVxdWVzdC9mcmllbmQtcmVxdWVzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlcXVlc3QtY29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzgsIDQ5LCA1NCk7XG59XG5cbi5yZXF1ZXN0LWljb24tY29udGFpbmVyIHtcbiAgICAgICAgb3JkZXI6IDA7XG4gICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgd2lkdGg6IDUwcHg7XG59XG5cbi5yZXF1ZXN0LXVzZXJuYW1lLWNvbnRhaW5lciB7XG4gICAgICAgIG9yZGVyOiAxO1xuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMTQwcHgpO1xuICAgICAgICBoZWlnaHQ6IDUwcHg7XG59XG4ucmVxdWVzdC11c2VybmFtZSB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGZvbnQtc2l6ZTogMTlweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gICAgICAgIGNvbG9yOiBob3RwaW5rO1xufVxuXG4ucmVxdWVzdC1hY3Rpb25zLWNvbnRhaW5lciB7XG4gICAgICAgIG9yZGVyOiAyO1xuICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ucmVxdWVzdC1hY2NlcHQge1xuICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICBtaW4td2lkdGg6IDQwcHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnJlcXVlc3QtZGVjbGluZSB7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIG1pbi13aWR0aDogNDBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5yZXF1ZXN0LWRlY2xpbmU6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTAsIDYyLCA2OCk7XG4gICAgICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgICAgICAgY29sb3I6IHJnYigyNTUsIDEwNSwgMTA1KTtcbn1cblxuLnJlcXVlc3QtYWNjZXB0OmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDUwLCA2MiwgNjgpO1xuICAgICAgICBmb250LXNpemU6IDI2cHg7XG4gICAgICAgIGNvbG9yOiByZ2IoMTA1LCAyNTUsIDE4NSk7XG59XG5cbi50cmFuc2Zvcm0tYmFja2dyb3VuZC1jb2xvciB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzO1xuICAgICAgICAtbW96LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycztcbiAgICAgICAgLW8tdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzO1xuICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnM7ICBcbn1cblxuLnRyYW5zZm9ybS1mb250LXNpemUge1xuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGZvbnQtc2l6ZSAwLjJzO1xuICAgICAgICAtbW96LXRyYW5zaXRpb246IGZvbnQtc2l6ZSAwLjJzO1xuICAgICAgICAtby10cmFuc2l0aW9uOiBmb250LXNpemUgMC4ycztcbiAgICAgICAgdHJhbnNpdGlvbjogZm9udC1zaXplIDAuMnM7ICBcbn1cblxuLnRyYW5zZm9ybS1jb2xvciB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogY29sb3IgMC4ycztcbiAgICAgICAgLW1vei10cmFuc2l0aW9uOiBjb2xvciAwLjJzO1xuICAgICAgICAtby10cmFuc2l0aW9uOiBjb2xvciAwLjJzO1xuICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzOyAgXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FriendRequestComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-friend-request",
          templateUrl: "friend-request.component.html",
          styleUrls: ["friend-request.component.css"]
        }]
      }], function () {
        return [{
          type: src_app_services_user__WEBPACK_IMPORTED_MODULE_1__["UserService"]
        }];
      }, {
        username: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        image: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        userId: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/user-page/user-friends-view/user-friends-view.component.ts":
  /*!***************************************************************************************!*\
    !*** ./src/app/components/user-page/user-friends-view/user-friends-view.component.ts ***!
    \***************************************************************************************/

  /*! exports provided: UserFriendsViewComponent */

  /***/
  function srcAppComponentsUserPageUserFriendsViewUserFriendsViewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserFriendsViewComponent", function () {
      return UserFriendsViewComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../services/user */
    "./src/app/services/user.ts");
    /* harmony import */


    var src_app_services_users__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/users */
    "./src/app/services/users.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../header/header.component */
    "./src/app/components/header/header.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _chat_page_subscribers_view_subscriber_subscriber_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../chat-page/subscribers-view/subscriber/subscriber.component */
    "./src/app/components/chat-page/subscribers-view/subscriber/subscriber.component.ts");
    /* harmony import */


    var _friend_request_friend_request_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./friend-request/friend-request.component */
    "./src/app/components/user-page/user-friends-view/friend-request/friend-request.component.ts");

    function UserFriendsViewComponent_app_subscriber_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-subscriber", 5);
      }

      if (rf & 2) {
        var friendId_r3 = ctx.$implicit;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("username", ctx_r0.getUserSub(friendId_r3).username)("online", ctx_r0.getUserSub(friendId_r3).online)("image", ctx_r0.getUserSub(friendId_r3).image);
      }
    }

    function UserFriendsViewComponent_app_header_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header", 1);
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("headerText", "Friend Requests")("imageUrl", "../../../assets/images/SubsOne.png");
      }
    }

    function UserFriendsViewComponent_app_friend_request_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-friend-request", 6);
      }

      if (rf & 2) {
        var requestId_r4 = ctx.$implicit;

        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("username", ctx_r2.getUserSub(requestId_r4).username)("image", ctx_r2.getUserSub(requestId_r4).image)("userId", requestId_r4);
      }
    }

    var UserFriendsViewComponent = /*#__PURE__*/function () {
      function UserFriendsViewComponent(userService, usersService) {
        _classCallCheck(this, UserFriendsViewComponent);

        this.userService = userService;
        this.usersService = usersService;
      }

      _createClass(UserFriendsViewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this21 = this;

          this.userSub = this.userService.getUserUpdated().subscribe(function (user) {
            _this21.user = user;
          });
          this.userService.getUser();
        }
      }, {
        key: "getUserSub",
        value: function getUserSub(subId) {
          if (this.usersService.getUserSub(subId)) {
            return this.usersService.getUserSub(subId);
          }

          return {
            _id: "-----",
            username: "loading...",
            image: "$$$Default$$$",
            online: false
          };
        } //Avoid memory leaks

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.userSub.unsubscribe();
        }
      }]);

      return UserFriendsViewComponent;
    }();

    UserFriendsViewComponent.ɵfac = function UserFriendsViewComponent_Factory(t) {
      return new (t || UserFriendsViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_users__WEBPACK_IMPORTED_MODULE_2__["UsersService"]));
    };

    UserFriendsViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UserFriendsViewComponent,
      selectors: [["app-user-friends-view"]],
      decls: 5,
      vars: 5,
      consts: [[1, "container"], [3, "headerText", "imageUrl"], [3, "username", "online", "image", 4, "ngFor", "ngForOf"], [3, "headerText", "imageUrl", 4, "ngIf"], [3, "username", "image", "userId", 4, "ngFor", "ngForOf"], [3, "username", "online", "image"], [3, "username", "image", "userId"]],
      template: function UserFriendsViewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UserFriendsViewComponent_app_subscriber_2_Template, 1, 3, "app-subscriber", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, UserFriendsViewComponent_app_header_3_Template, 1, 2, "app-header", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, UserFriendsViewComponent_app_friend_request_4_Template, 1, 3, "app-friend-request", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("headerText", "Friends")("imageUrl", "../../../assets/images/FriendsThree.png");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.user.friendIds);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user.friendReqIds.length > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.user.friendReqIds);
        }
      },
      directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _chat_page_subscribers_view_subscriber_subscriber_component__WEBPACK_IMPORTED_MODULE_5__["SubscriberComponent"], _friend_request_friend_request_component__WEBPACK_IMPORTED_MODULE_6__["FriendRequestComponent"]],
      styles: [".container[_ngcontent-%COMP%] {\n        display: flex;\n        flex-direction: column;\n        background-color: rgb(50, 64, 71);\n        width: 100%;\n        height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyLXBhZ2UvdXNlci1mcmllbmRzLXZpZXcvdXNlci1mcmllbmRzLXZpZXcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtRQUNRLGFBQWE7UUFDYixzQkFBc0I7UUFDdEIsaUNBQWlDO1FBQ2pDLFdBQVc7UUFDWCxZQUFZO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy91c2VyLXBhZ2UvdXNlci1mcmllbmRzLXZpZXcvdXNlci1mcmllbmRzLXZpZXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTAsIDY0LCA3MSk7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG59XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserFriendsViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-user-friends-view",
          templateUrl: "user-friends-view.component.html",
          styleUrls: ["user-friends-view.component.css"]
        }]
      }], function () {
        return [{
          type: _services_user__WEBPACK_IMPORTED_MODULE_1__["UserService"]
        }, {
          type: src_app_services_users__WEBPACK_IMPORTED_MODULE_2__["UsersService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/user-page/user-page.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/user-page/user-page.component.ts ***!
    \*************************************************************/

  /*! exports provided: UserPageComponent */

  /***/
  function srcAppComponentsUserPageUserPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserPageComponent", function () {
      return UserPageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _services_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/user */
    "./src/app/services/user.ts");
    /* harmony import */


    var src_app_services_authentication__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/authentication */
    "./src/app/services/authentication.ts");
    /* harmony import */


    var src_app_services_chats__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/chats */
    "./src/app/services/chats.ts");
    /* harmony import */


    var src_app_services_users__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/users */
    "./src/app/services/users.ts");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../navbar/navbar.component */
    "./src/app/components/navbar/navbar.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/flex-layout/extended */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");
    /* harmony import */


    var _user_friends_view_user_friends_view_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./user-friends-view/user-friends-view.component */
    "./src/app/components/user-page/user-friends-view/user-friends-view.component.ts");
    /* harmony import */


    var _user_chats_view_user_chats_view_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./user-chats-view/user-chats-view.component */
    "./src/app/components/user-page/user-chats-view/user-chats-view.component.ts");
    /* harmony import */


    var _user_view_user_view_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./user-view/user-view.component */
    "./src/app/components/user-page/user-view/user-view.component.ts");

    function UserPageComponent_div_1_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-user-friends-view");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function UserPageComponent_div_1_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-user-chats-view");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function UserPageComponent_div_1_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-user-view");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function UserPageComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UserPageComponent_div_1_div_1_Template, 2, 0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UserPageComponent_div_1_div_2_Template, 2, 0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, UserPageComponent_div_1_div_3_Template, 2, 0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.user != null && ctx_r0.user != undefined);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.user != null && ctx_r0.user != undefined);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.user != null && ctx_r0.user != undefined);
      }
    }

    function UserPageComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserPageComponent_div_2_Template_div_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.toggleLeft();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " \u25C0\uFE0E ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-user-friends-view");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserPageComponent_div_2_Template_div_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r7.toggleMiddle();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " \u25C8\uFE0E ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-user-chats-view");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserPageComponent_div_2_Template_div_click_11_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r8.toggleRight();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " \u25B6\uFE0E ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-user-view");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@expansionTitle", !ctx_r1.leftExpanded ? "visible" : "invisible");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@expansionPanel", ctx_r1.leftExpanded ? "open" : "closed");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@expansionTitle", ctx_r1.leftExpanded || ctx_r1.rightExpanded ? "visible" : "invisible");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@expansionPanel", !ctx_r1.rightExpanded && !ctx_r1.leftExpanded ? "open" : "closed");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@expansionTitle", !ctx_r1.rightExpanded ? "visible" : "invisible");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@expansionPanel", ctx_r1.rightExpanded ? "open" : "closed");
      }
    }

    var UserPageComponent = /*#__PURE__*/function () {
      function UserPageComponent(userService, authService, chatsService, usersService, media) {
        _classCallCheck(this, UserPageComponent);

        this.userService = userService;
        this.authService = authService;
        this.chatsService = chatsService;
        this.usersService = usersService;
        this.media = media;
        this.leftExpanded = false;
        this.rightExpanded = true;
        this.queried = false;
      }

      _createClass(UserPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this22 = this;

          if (this.queried) return;
          this.queried = true;
          this.userSub = this.userService.getUserUpdated().subscribe(function (user) {
            _this22.user = user;
            var chatIds = [];

            for (var i = 0; i < _this22.user.chatIds.length; i++) {
              var chatId = _this22.user.chatIds[i];

              if (!_this22.chatsService.containsChatSub(chatId) && chatIds.indexOf(chatId) === -1) {
                chatIds.push(chatId);
              }
            }

            _this22.chatsService.getChats(chatIds);

            var userIds = [];

            for (var i = 0; i < _this22.user.friendIds.length; i++) {
              var userId = _this22.user.friendIds[i];

              if (!_this22.usersService.containsUserSub(userId) && userIds.indexOf(userId) === -1) {
                userIds.push(userId);
              }
            }

            for (var i = 0; i < _this22.user.friendReqIds.length; i++) {
              var _userId3 = _this22.user.friendReqIds[i];

              if (!_this22.usersService.containsUserSub(_userId3) && userIds.indexOf(_userId3) === -1) {
                userIds.push(_userId3);
              }
            }

            _this22.usersService.getUsers(userIds);
          });
          this.userService.getUser();
        }
      }, {
        key: "isAuthenticated",
        value: function isAuthenticated() {
          return this.authService.isAuthenticated();
        } //Avoid memoroy leaks

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.userSub.unsubscribe();
        } //Toggles the left expansion panel

      }, {
        key: "toggleLeft",
        value: function toggleLeft() {
          this.leftExpanded = !this.leftExpanded;

          if (this.leftExpanded) {
            this.rightExpanded = false;
          }
        } //Toggles the right expansion panel

      }, {
        key: "toggleRight",
        value: function toggleRight() {
          this.rightExpanded = !this.rightExpanded;

          if (this.rightExpanded) {
            this.leftExpanded = false;
          }
        } //Toggles the middle expansion panel

      }, {
        key: "toggleMiddle",
        value: function toggleMiddle() {
          this.rightExpanded = false;
          this.leftExpanded = false;
        }
      }]);

      return UserPageComponent;
    }();

    UserPageComponent.ɵfac = function UserPageComponent_Factory(t) {
      return new (t || UserPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_authentication__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_chats__WEBPACK_IMPORTED_MODULE_4__["ChatsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_users__WEBPACK_IMPORTED_MODULE_5__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["MediaObserver"]));
    };

    UserPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UserPageComponent,
      selectors: [["app-user-page"]],
      decls: 3,
      vars: 2,
      consts: [["class", "container", "fxShow", "true", "fxHide.lt-md", "true", 4, "ngIf"], ["fxShow", "true", "fxHide.gt-sm", "true", "class", "container-small", 4, "ngIf"], ["fxShow", "true", "fxHide.lt-md", "true", 1, "container"], ["class", "left", 4, "ngIf"], ["class", "middle", 4, "ngIf"], ["class", "right", 4, "ngIf"], [1, "left"], [1, "middle"], [1, "right"], ["fxShow", "true", "fxHide.gt-sm", "true", 1, "container-small"], [1, "header-container", "float-left", 3, "click"], [1, "header-text", "no-select", "transform-color"], [1, "left-small", "float-left"], [1, "header-text", "transform-color", "no-select"], [1, "middle-small", "float-left"], [1, "header-container", "float-right", 3, "click"], [1, "right-small", "float-right"]],
      template: function UserPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-navbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UserPageComponent_div_1_Template, 4, 3, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UserPageComponent_div_2_Template, 16, 6, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.media.isActive("gt-sm"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.media.isActive("lt-md"));
        }
      },
      directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_9__["DefaultShowHideDirective"], _user_friends_view_user_friends_view_component__WEBPACK_IMPORTED_MODULE_10__["UserFriendsViewComponent"], _user_chats_view_user_chats_view_component__WEBPACK_IMPORTED_MODULE_11__["UserChatsViewComponent"], _user_view_user_view_component__WEBPACK_IMPORTED_MODULE_12__["UserViewComponent"]],
      styles: [".container[_ngcontent-%COMP%] {\n        width: 100%;\n        height: 100%;\n}\n.left[_ngcontent-%COMP%] {\n        width: 25%;\n        height: 100%;\n        float: left;\n}\n.middle[_ngcontent-%COMP%] {\n        width: 25%;\n        height: 100%;\n        margin-left: 10px;\n        float: left;\n}\n.right[_ngcontent-%COMP%] {\n        background-color: rgb(50, 64, 71);\n        margin-left: 10px;\n        width: calc(50% - 20px);\n        height: 100%;\n        float: left;\n}\n\n.header-container[_ngcontent-%COMP%] {\n        display: flex;\n        height: 100%;\n        background-color: rgb(56, 63, 65);\n        justify-content: center;\n        align-items: center;\n}\n.header-text[_ngcontent-%COMP%] {\n        font-size: 30px;\n        font-weight: bolder;\n        color: white;\n}\n.header-container[_ngcontent-%COMP%]:hover {\n        cursor: pointer;\n}\n.header-container[_ngcontent-%COMP%]:hover   .header-text[_ngcontent-%COMP%] {\n        color: black;\n}\n.float-left[_ngcontent-%COMP%] {\n        float: left;\n}\n.float-right[_ngcontent-%COMP%] {\n        float: right;\n}\n.middle-small[_ngcontent-%COMP%] {\n        background: linear-gradient(to right, rgb(38, 49, 54) 0px, rgb(38, 49, 54) 50px, rgb(50, 64, 71) 50px, rgb(50, 64, 71) 100%);\n        height: 100%;\n}\n.right-small[_ngcontent-%COMP%] {\n        height: 100%;\n}\n.left-small[_ngcontent-%COMP%] {\n        height: 100%;\n}\n.container-small[_ngcontent-%COMP%] {\n        width: 100%;\n        height: 100%;\n        display: flex;  \n}\n\n.no-select[_ngcontent-%COMP%] {\n        -webkit-touch-callout: none;\n        -webkit-user-select: none; \n        -moz-user-select: none; \n        user-select: none;\n}\n.transform-color[_ngcontent-%COMP%] {\n        transition: color 0.1s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyLXBhZ2UvdXNlci1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsbUJBQW1CO0FBQ25CO1FBQ1EsV0FBVztRQUNYLFlBQVk7QUFDcEI7QUFFQTtRQUNRLFVBQVU7UUFDVixZQUFZO1FBQ1osV0FBVztBQUNuQjtBQUVBO1FBQ1EsVUFBVTtRQUNWLFlBQVk7UUFDWixpQkFBaUI7UUFDakIsV0FBVztBQUNuQjtBQUVBO1FBQ1EsaUNBQWlDO1FBQ2pDLGlCQUFpQjtRQUNqQix1QkFBdUI7UUFDdkIsWUFBWTtRQUNaLFdBQVc7QUFDbkI7QUFFQSxtQkFBbUI7QUFDbkI7UUFDUSxhQUFhO1FBQ2IsWUFBWTtRQUNaLGlDQUFpQztRQUNqQyx1QkFBdUI7UUFDdkIsbUJBQW1CO0FBQzNCO0FBRUE7UUFDUSxlQUFlO1FBQ2YsbUJBQW1CO1FBQ25CLFlBQVk7QUFDcEI7QUFFQTtRQUNRLGVBQWU7QUFDdkI7QUFFQTtRQUNRLFlBQVk7QUFDcEI7QUFFQTtRQUNRLFdBQVc7QUFDbkI7QUFFQTtRQUNRLFlBQVk7QUFDcEI7QUFFQTtRQUNRLDRIQUE0SDtRQUM1SCxZQUFZO0FBQ3BCO0FBRUE7UUFDUSxZQUFZO0FBQ3BCO0FBRUE7UUFDUSxZQUFZO0FBQ3BCO0FBRUE7UUFDUSxXQUFXO1FBQ1gsWUFBWTtRQUNaLGFBQWE7QUFDckI7QUFFQSx1Q0FBdUM7QUFDdkM7UUFDUSwyQkFBMkI7UUFDM0IseUJBQXlCO1FBRXpCLHNCQUFzQjtRQUV0QixpQkFBaUI7QUFDekI7QUFFQTtRQUlRLHNCQUFzQjtBQUM5QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci1wYWdlL3VzZXItcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogTGFyZ2UgRGlzcGxheXMgKi9cbi5jb250YWluZXIge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ubGVmdCB7XG4gICAgICAgIHdpZHRoOiAyNSU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5taWRkbGUge1xuICAgICAgICB3aWR0aDogMjUlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICBmbG9hdDogbGVmdDtcbn1cblxuLnJpZ2h0IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDUwLCA2NCwgNzEpO1xuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgd2lkdGg6IGNhbGMoNTAlIC0gMjBweCk7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG59XG5cbi8qIFNtYWxsIGRpc3BsYXlzICovXG4uaGVhZGVyLWNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDU2LCA2MywgNjUpO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmhlYWRlci10ZXh0IHtcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5oZWFkZXItY29udGFpbmVyOmhvdmVyIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaGVhZGVyLWNvbnRhaW5lcjpob3ZlciAuaGVhZGVyLXRleHQge1xuICAgICAgICBjb2xvcjogYmxhY2s7XG59XG5cbi5mbG9hdC1sZWZ0IHtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5mbG9hdC1yaWdodCB7XG4gICAgICAgIGZsb2F0OiByaWdodDtcbn1cblxuLm1pZGRsZS1zbWFsbCB7XG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiKDM4LCA0OSwgNTQpIDBweCwgcmdiKDM4LCA0OSwgNTQpIDUwcHgsIHJnYig1MCwgNjQsIDcxKSA1MHB4LCByZ2IoNTAsIDY0LCA3MSkgMTAwJSk7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbn1cblxuLnJpZ2h0LXNtYWxsIHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ubGVmdC1zbWFsbCB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbn1cblxuLmNvbnRhaW5lci1zbWFsbCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7ICBcbn1cblxuLyogUHJldmVudHMgdXNlcnMgZnJvbSBzZWxlY3RpbmcgdGV4dCAqL1xuLm5vLXNlbGVjdCB7XG4gICAgICAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcbiAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsgXG4gICAgICAgIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTsgXG4gICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7IFxuICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7IFxuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLnRyYW5zZm9ybS1jb2xvciB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogY29sb3IgMC4xcztcbiAgICAgICAgLW1vei10cmFuc2l0aW9uOiBjb2xvciAwLjFzO1xuICAgICAgICAtby10cmFuc2l0aW9uOiBjb2xvciAwLjFzO1xuICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjFzO1xufSJdfQ== */"],
      data: {
        animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])("expansionPanel", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])("open", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          visibility: "visible",
          width: "calc(100% - 64px)"
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])("closed", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          width: "0%",
          visibility: "hidden"
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])("open => closed", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])("0.2s")]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])("closed => open", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])("0.2s")])]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])("expansionTitle", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])("visible", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          width: "30px",
          lineHeight: "30px",
          marginRight: "1px",
          marginLeft: "1px",
          visibility: "visible"
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])("invisible", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          width: "0px",
          visibility: "hidden"
        }))])]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-user-page",
          templateUrl: "user-page.component.html",
          styleUrls: ["user-page.component.css"],
          animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])("expansionPanel", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])("open", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            visibility: "visible",
            width: "calc(100% - 64px)"
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])("closed", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            width: "0%",
            visibility: "hidden"
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])("open => closed", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])("0.2s")]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])("closed => open", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])("0.2s")])]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])("expansionTitle", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])("visible", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            width: "30px",
            lineHeight: "30px",
            marginRight: "1px",
            marginLeft: "1px",
            visibility: "visible"
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])("invisible", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            width: "0px",
            visibility: "hidden"
          }))])]
        }]
      }], function () {
        return [{
          type: _services_user__WEBPACK_IMPORTED_MODULE_2__["UserService"]
        }, {
          type: src_app_services_authentication__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
        }, {
          type: src_app_services_chats__WEBPACK_IMPORTED_MODULE_4__["ChatsService"]
        }, {
          type: src_app_services_users__WEBPACK_IMPORTED_MODULE_5__["UsersService"]
        }, {
          type: _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["MediaObserver"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/user-page/user-view/user-view-chat-create-dialog/chat-tags/chat-tags.component.ts":
  /*!**************************************************************************************************************!*\
    !*** ./src/app/components/user-page/user-view/user-view-chat-create-dialog/chat-tags/chat-tags.component.ts ***!
    \**************************************************************************************************************/

  /*! exports provided: ChatTagsComponent */

  /***/
  function srcAppComponentsUserPageUserViewUserViewChatCreateDialogChatTagsChatTagsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatTagsComponent", function () {
      return ChatTagsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_chat_create__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/chat-create */
    "./src/app/services/chat-create.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _tag_tag_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./tag/tag.component */
    "./src/app/components/user-page/user-view/user-view-chat-create-dialog/chat-tags/tag/tag.component.ts");

    function ChatTagsComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-tag", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var tag_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tagText", tag_r3);
      }
    }

    var ChatTagsComponent = /*#__PURE__*/function () {
      function ChatTagsComponent(chatCreateService) {
        _classCallCheck(this, ChatTagsComponent);

        this.chatCreateService = chatCreateService;
      }

      _createClass(ChatTagsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this23 = this;

          this.newChatSub = this.chatCreateService.getNewChatUpdated().subscribe(function (chat) {
            _this23.newChat = chat;
          });
          this.chatCreateService.updateNewChat();
        } //Adds a new tag to the list of tags

      }, {
        key: "addTag",
        value: function addTag(tagForm) {
          var newTag = this.fixTag(tagForm.value.tag.trim().toLowerCase()).split(/\s+/g).join('‑');

          if (!(newTag === null || newTag === undefined || newTag === "" || newTag === "new tag")) {
            this.chatCreateService.addTag(newTag);
          }

          tagForm.resetForm();
        } //Replace underscores and hyphens with no breakable hyphen

      }, {
        key: "fixTag",
        value: function fixTag(tag) {
          for (var i = 0; i < tag.length; i++) {
            if (tag[i] === '_' || tag[i] === '-') {
              tag = this.replaceAt(tag, i, '‑');
            }
          }

          return tag;
        } //Replace character at index

      }, {
        key: "replaceAt",
        value: function replaceAt(current, index, replacement) {
          return current.substr(0, index) + replacement + current.substr(index + replacement.length);
        }
      }, {
        key: "updateOptions",
        value: function updateOptions(queryText) {// this.chatsService.getTags(queryText) 
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.newChatSub.unsubscribe();
        }
      }]);

      return ChatTagsComponent;
    }();

    ChatTagsComponent.ɵfac = function ChatTagsComponent_Factory(t) {
      return new (t || ChatTagsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_chat_create__WEBPACK_IMPORTED_MODULE_1__["ChatCreateService"]));
    };

    ChatTagsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ChatTagsComponent,
      selectors: [["app-chat-tags"]],
      decls: 10,
      vars: 1,
      consts: [[1, "main-container"], [1, "tags-container"], ["class", "tag-container", 4, "ngFor", "ngForOf"], [1, "add-tag-button", "no-select", 3, "click"], [3, "submit"], ["tagForm", "ngForm"], [1, "add-tag-input-container", "tag-container"], ["type", "text", "matInput", "", "name", "tag", "ngModel", "", "placeholder", "tag", "maxlength", "25", "autocomplete", "off", 1, "add-tag-input"], ["tag", "ngModel"], [1, "tag-container"], [3, "tagText"]],
      template: function ChatTagsComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ChatTagsComponent_div_2_Template, 2, 1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatTagsComponent_Template_button_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

            return ctx.addTag(_r1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "+");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 4, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function ChatTagsComponent_Template_form_submit_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

            return ctx.addTag(_r1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 7, 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.newChat.tags);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["MaxLengthValidator"], _tag_tag_component__WEBPACK_IMPORTED_MODULE_5__["TagComponent"]],
      styles: [".main-container[_ngcontent-%COMP%] {\n        width: 100%;\n        height: 100%;\n}\n\n.tags-container[_ngcontent-%COMP%] {\n        display: flex;\n        flex-wrap: wrap;\n        border-radius: 5px;\n        background-color: transparent;\n}\n\n.tag-container[_ngcontent-%COMP%] {\n        margin-left: 3px;\n        margin-right: 3px;\n        margin-top: 3px;\n        margin-bottom: 3px;\n        width: calc(100% - 6px);\n        height: 30px;\n}\n\n\n\n.add-tag-button[_ngcontent-%COMP%] {\n        margin-left: 3px;\n        margin-right: 3px;\n        margin-top: 3px;\n        margin-bottom: 3px;\n        line-height: 30px;\n        height: 30px;\n        width: 30px;\n        border-radius: 15px;\n        background-color: rgb(38, 49, 54);\n        font-size: 25px;\n        transition: color 0.2s;\n        color: rgb(177, 177, 177);\n        border: none;\n        padding: none;\n        cursor: pointer; \n}\n\n.add-tag-button[_ngcontent-%COMP%]:hover {\n        color: white;\n}\n\n.add-tag-input-container[_ngcontent-%COMP%] {\n        height: 30px;\n        border-radius: 5px;\n        background-color: rgb(38, 49, 54);\n        transition: height 0.2s;\n        padding-right: 5px;\n}\n\n.add-tag-input[_ngcontent-%COMP%] {\n        color: #7abffc;\n        line-height: 20px;\n        margin-top: 5px;\n        margin-left: 5px;\n        caret-color: white;\n        background-color: rgb(38, 49, 54);\n        border: none;\n        font-size: 16px;\n}\n\n\n\n\n\n.no-select[_ngcontent-%COMP%] {\n        -webkit-touch-callout: none;\n        -webkit-user-select: none; \n        -moz-user-select: none; \n        user-select: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyLXBhZ2UvdXNlci12aWV3L3VzZXItdmlldy1jaGF0LWNyZWF0ZS1kaWFsb2cvY2hhdC10YWdzL2NoYXQtdGFncy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO1FBQ1EsV0FBVztRQUNYLFlBQVk7QUFDcEI7O0FBRUE7UUFDUSxhQUFhO1FBQ2IsZUFBZTtRQUNmLGtCQUFrQjtRQUNsQiw2QkFBNkI7QUFDckM7O0FBRUE7UUFDUSxnQkFBZ0I7UUFDaEIsaUJBQWlCO1FBQ2pCLGVBQWU7UUFDZixrQkFBa0I7UUFDbEIsdUJBQXVCO1FBQ3ZCLFlBQVk7QUFDcEI7O0FBR0Esc0JBQXNCOztBQUN0QjtRQUNRLGdCQUFnQjtRQUNoQixpQkFBaUI7UUFDakIsZUFBZTtRQUNmLGtCQUFrQjtRQUNsQixpQkFBaUI7UUFDakIsWUFBWTtRQUNaLFdBQVc7UUFDWCxtQkFBbUI7UUFDbkIsaUNBQWlDO1FBQ2pDLGVBQWU7UUFJZixzQkFBc0I7UUFDdEIseUJBQXlCO1FBQ3pCLFlBQVk7UUFDWixhQUFhO1FBQ2IsZUFBZTtBQUN2Qjs7QUFFQTtRQUNRLFlBQVk7QUFDcEI7O0FBRUE7UUFDUSxZQUFZO1FBQ1osa0JBQWtCO1FBQ2xCLGlDQUFpQztRQUlqQyx1QkFBdUI7UUFDdkIsa0JBQWtCO0FBQzFCOztBQUVBO1FBQ1EsY0FBYztRQUNkLGlCQUFpQjtRQUNqQixlQUFlO1FBQ2YsZ0JBQWdCO1FBQ2hCLGtCQUFrQjtRQUNsQixpQ0FBaUM7UUFDakMsWUFBWTtRQUNaLGVBQWU7QUFDdkI7O0FBRUE7O0dBRUc7O0FBRUgsdUNBQXVDOztBQUN2QztRQUNRLDJCQUEyQjtRQUMzQix5QkFBeUI7UUFFekIsc0JBQXNCO1FBRXRCLGlCQUFpQjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci1wYWdlL3VzZXItdmlldy91c2VyLXZpZXctY2hhdC1jcmVhdGUtZGlhbG9nL2NoYXQtdGFncy9jaGF0LXRhZ3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLWNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi50YWdzLWNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLnRhZy1jb250YWluZXIge1xuICAgICAgICBtYXJnaW4tbGVmdDogM3B4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDNweDtcbiAgICAgICAgbWFyZ2luLXRvcDogM3B4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzcHg7XG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA2cHgpO1xuICAgICAgICBoZWlnaHQ6IDMwcHg7XG59XG5cblxuLyogQWRkIHRhZyBjb21wb25lbnQgKi9cbi5hZGQtdGFnLWJ1dHRvbiB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzcHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogM3B4O1xuICAgICAgICBtYXJnaW4tdG9wOiAzcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDNweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzOCwgNDksIDU0KTtcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGNvbG9yIDAuMnM7XG4gICAgICAgIC1tb3otdHJhbnNpdGlvbjogY29sb3IgMC4ycztcbiAgICAgICAgLW8tdHJhbnNpdGlvbjogY29sb3IgMC4ycztcbiAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4ycztcbiAgICAgICAgY29sb3I6IHJnYigxNzcsIDE3NywgMTc3KTtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBwYWRkaW5nOiBub25lO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7IFxufVxuXG4uYWRkLXRhZy1idXR0b246aG92ZXIge1xuICAgICAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5hZGQtdGFnLWlucHV0LWNvbnRhaW5lciB7XG4gICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzgsIDQ5LCA1NCk7XG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogaGVpZ2h0IDAuMnM7XG4gICAgICAgIC1tb3otdHJhbnNpdGlvbjogaGVpZ2h0IDAuMnM7XG4gICAgICAgIC1vLXRyYW5zaXRpb246IGhlaWdodCAwLjJzO1xuICAgICAgICB0cmFuc2l0aW9uOiBoZWlnaHQgMC4ycztcbiAgICAgICAgcGFkZGluZy1yaWdodDogNXB4O1xufVxuXG4uYWRkLXRhZy1pbnB1dCB7XG4gICAgICAgIGNvbG9yOiAjN2FiZmZjO1xuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgICAgICBjYXJldC1jb2xvcjogd2hpdGU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzOCwgNDksIDU0KTtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG59XG5cbi8qIC5hZGQtdGFnLWlucHV0LWNvbnRhaW5lcjpob3ZlciB7XG4gICAgICAgIGhlaWdodDogMzVweDtcbn0gKi9cblxuLyogUHJldmVudHMgdXNlcnMgZnJvbSBzZWxlY3RpbmcgdGV4dCAqL1xuLm5vLXNlbGVjdCB7XG4gICAgICAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcbiAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsgXG4gICAgICAgIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTsgXG4gICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7IFxuICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7IFxuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatTagsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-chat-tags",
          templateUrl: "chat-tags.component.html",
          styleUrls: ["chat-tags.component.css"]
        }]
      }], function () {
        return [{
          type: src_app_services_chat_create__WEBPACK_IMPORTED_MODULE_1__["ChatCreateService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/user-page/user-view/user-view-chat-create-dialog/chat-tags/tag/tag.component.ts":
  /*!************************************************************************************************************!*\
    !*** ./src/app/components/user-page/user-view/user-view-chat-create-dialog/chat-tags/tag/tag.component.ts ***!
    \************************************************************************************************************/

  /*! exports provided: TagComponent */

  /***/
  function srcAppComponentsUserPageUserViewUserViewChatCreateDialogChatTagsTagTagComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TagComponent", function () {
      return TagComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_chat_create__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/chat-create */
    "./src/app/services/chat-create.ts");

    var TagComponent = /*#__PURE__*/function () {
      function TagComponent(chatCreateService) {
        _classCallCheck(this, TagComponent);

        this.chatCreateService = chatCreateService;
      } //Removes existing tag from this of tags


      _createClass(TagComponent, [{
        key: "removeTag",
        value: function removeTag() {
          this.chatCreateService.removeTag(this.tagText);
        }
      }]);

      return TagComponent;
    }();

    TagComponent.ɵfac = function TagComponent_Factory(t) {
      return new (t || TagComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_chat_create__WEBPACK_IMPORTED_MODULE_1__["ChatCreateService"]));
    };

    TagComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TagComponent,
      selectors: [["app-tag"]],
      inputs: {
        tagText: "tagText"
      },
      decls: 5,
      vars: 1,
      consts: [[1, "container"], [1, "text-container", "no-select"], [1, "button-container", "no-select", 3, "click"]],
      template: function TagComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TagComponent_Template_div_click_3_listener() {
            return ctx.removeTag();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " x ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.tagText, " ");
        }
      },
      styles: [".container[_ngcontent-%COMP%] {\n        height: 30px;\n        border-radius: 5px;\n        background-color: rgb(38, 49, 54);\n        transition: border 0.2s;\n        border-top: 1px solid transparent;\n        border-bottom: 1px solid transparent;\n\n}\n\n.container[_ngcontent-%COMP%]:hover {\n        border-top: 1px solid white;\n        border-bottom: 1px solid white;\n}\n\n.text-container[_ngcontent-%COMP%] {\n        width: calc(100% - 35px);\n        float: left;\n        color: #7abffc;\n        line-height: 30px;\n        margin-left: 5px;\n        text-align: center;\n}\n\n.button-container[_ngcontent-%COMP%] {\n        float: right;\n        width: 30px;\n        border-radius: 15px;\n        color: rgb(177, 177, 177);\n        transition: color 0.2s;\n        transition: background-color 0.2s;\n        font-size: 16px;\n        line-height: 30px;\n        text-align: center;\n}\n\n.button-container[_ngcontent-%COMP%]:hover {\n        background-color: rgb(59, 65, 68);\n        color: rgb(255, 105, 105);\n}\n\n\n\n.no-select[_ngcontent-%COMP%] {\n        -webkit-touch-callout: none;\n        -webkit-user-select: none; \n        -moz-user-select: none; \n        user-select: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyLXBhZ2UvdXNlci12aWV3L3VzZXItdmlldy1jaGF0LWNyZWF0ZS1kaWFsb2cvY2hhdC10YWdzL3RhZy90YWcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtRQUNRLFlBQVk7UUFDWixrQkFBa0I7UUFDbEIsaUNBQWlDO1FBSWpDLHVCQUF1QjtRQUN2QixpQ0FBaUM7UUFDakMsb0NBQW9DOztBQUU1Qzs7QUFFQTtRQUNRLDJCQUEyQjtRQUMzQiw4QkFBOEI7QUFDdEM7O0FBQ0E7UUFDUSx3QkFBd0I7UUFDeEIsV0FBVztRQUNYLGNBQWM7UUFDZCxpQkFBaUI7UUFDakIsZ0JBQWdCO1FBQ2hCLGtCQUFrQjtBQUMxQjs7QUFFQTtRQUNRLFlBQVk7UUFDWixXQUFXO1FBQ1gsbUJBQW1CO1FBQ25CLHlCQUF5QjtRQUl6QixzQkFBc0I7UUFJdEIsaUNBQWlDO1FBQ2pDLGVBQWU7UUFDZixpQkFBaUI7UUFDakIsa0JBQWtCO0FBQzFCOztBQUVBO1FBQ1EsaUNBQWlDO1FBQ2pDLHlCQUF5QjtBQUNqQzs7QUFJQSx1Q0FBdUM7O0FBQ3ZDO1FBQ1EsMkJBQTJCO1FBQzNCLHlCQUF5QjtRQUV6QixzQkFBc0I7UUFFdEIsaUJBQWlCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy91c2VyLXBhZ2UvdXNlci12aWV3L3VzZXItdmlldy1jaGF0LWNyZWF0ZS1kaWFsb2cvY2hhdC10YWdzL3RhZy90YWcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM4LCA0OSwgNTQpO1xuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGJvcmRlciAwLjJzO1xuICAgICAgICAtbW96LXRyYW5zaXRpb246IGJvcmRlciAwLjJzO1xuICAgICAgICAtby10cmFuc2l0aW9uOiBib3JkZXIgMC4ycztcbiAgICAgICAgdHJhbnNpdGlvbjogYm9yZGVyIDAuMnM7XG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuXG59XG5cbi5jb250YWluZXI6aG92ZXIge1xuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgd2hpdGU7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcbn0gXG4udGV4dC1jb250YWluZXIge1xuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMzVweCk7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICBjb2xvcjogIzdhYmZmYztcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJ1dHRvbi1jb250YWluZXIge1xuICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgICBjb2xvcjogcmdiKDE3NywgMTc3LCAxNzcpO1xuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGNvbG9yIDAuMnM7XG4gICAgICAgIC1tb3otdHJhbnNpdGlvbjogY29sb3IgMC4ycztcbiAgICAgICAgLW8tdHJhbnNpdGlvbjogY29sb3IgMC4ycztcbiAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4ycztcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnM7XG4gICAgICAgIC1tb3otdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzO1xuICAgICAgICAtby10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnM7XG4gICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycztcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYnV0dG9uLWNvbnRhaW5lcjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1OSwgNjUsIDY4KTtcbiAgICAgICAgY29sb3I6IHJnYigyNTUsIDEwNSwgMTA1KTtcbn1cblxuXG5cbi8qIFByZXZlbnRzIHVzZXJzIGZyb20gc2VsZWN0aW5nIHRleHQgKi9cbi5uby1zZWxlY3Qge1xuICAgICAgICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XG4gICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7IFxuICAgICAgICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7IFxuICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lOyBcbiAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lOyBcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TagComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-tag",
          templateUrl: "tag.component.html",
          styleUrls: ["tag.component.css"]
        }]
      }], function () {
        return [{
          type: src_app_services_chat_create__WEBPACK_IMPORTED_MODULE_1__["ChatCreateService"]
        }];
      }, {
        tagText: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/user-page/user-view/user-view-chat-create-dialog/user-view-chat-create-dialog.component.ts":
  /*!***********************************************************************************************************************!*\
    !*** ./src/app/components/user-page/user-view/user-view-chat-create-dialog/user-view-chat-create-dialog.component.ts ***!
    \***********************************************************************************************************************/

  /*! exports provided: UserViewChatCreateDialogComponent */

  /***/
  function srcAppComponentsUserPageUserViewUserViewChatCreateDialogUserViewChatCreateDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserViewChatCreateDialogComponent", function () {
      return UserViewChatCreateDialogComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_chat_create__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/chat-create */
    "./src/app/services/chat-create.ts");
    /* harmony import */


    var _services_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../services/user */
    "./src/app/services/user.ts");
    /* harmony import */


    var src_app_services_authentication__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/authentication */
    "./src/app/services/authentication.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _chat_tags_chat_tags_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./chat-tags/chat-tags.component */
    "./src/app/components/user-page/user-view/user-view-chat-create-dialog/chat-tags/chat-tags.component.ts");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");

    function UserViewChatCreateDialogComponent_mat_option_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var category_r5 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", category_r5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", category_r5, " ");
      }
    }

    function UserViewChatCreateDialogComponent_button_13_Template(rf, ctx) {
      if (rf & 1) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserViewChatCreateDialogComponent_button_13_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

          return ctx_r6.createChat(_r0);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Create");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var UserViewChatCreateDialogComponent = /*#__PURE__*/function () {
      function UserViewChatCreateDialogComponent(chatCreateService, userService, authService, dialogRef) {
        _classCallCheck(this, UserViewChatCreateDialogComponent);

        this.chatCreateService = chatCreateService;
        this.userService = userService;
        this.authService = authService;
        this.dialogRef = dialogRef;
        this.categories = ["Science and Tech", "Entertainment", "Esports", "Sports", "Other"];
      }

      _createClass(UserViewChatCreateDialogComponent, [{
        key: "onExit",
        value: function onExit() {
          this.dialogRef.close();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this24 = this;

          this.chatCreateService.initNewChat();
          this.userSub = this.userService.getUserUpdated().subscribe(function (user) {
            _this24.user = user;
          });
          this.userService.getUser();
        }
      }, {
        key: "isAuthenticated",
        value: function isAuthenticated() {
          return this.authService.isAuthenticated();
        } //Creates a chat if the users input is valid

      }, {
        key: "createChat",
        value: function createChat(chatForm) {
          var title = chatForm.value.title;
          var category = chatForm.value.category;

          if (!chatForm.invalid && category !== undefined && category !== null && category !== "") {
            this.chatCreateService.postChat(title, this.user._id, category, true);
            chatForm.resetForm();
          }
        } //Avoid memory leaks

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.userSub.unsubscribe();
        }
      }]);

      return UserViewChatCreateDialogComponent;
    }();

    UserViewChatCreateDialogComponent.ɵfac = function UserViewChatCreateDialogComponent_Factory(t) {
      return new (t || UserViewChatCreateDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_chat_create__WEBPACK_IMPORTED_MODULE_1__["ChatCreateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_authentication__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"]));
    };

    UserViewChatCreateDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UserViewChatCreateDialogComponent,
      selectors: [["app-user-view-chat-create-dialog"]],
      decls: 16,
      vars: 2,
      consts: [[1, "two-container"], [1, "three-container"], ["chatForm", "ngForm"], [1, "chat-title-input-container"], ["type", "text", "matInput", "", "name", "title", "ngModel", "", "required", "", "placeholder", "title", "maxlength", "40", "autocomplete", "off", 1, "chat-title-input"], ["title", "ngModel"], [1, "chat-category-container"], ["placeholder", "Select a Category", "ngModel", "", "name", "category"], ["category", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [1, "chat-tags"], ["mat-dialog-actions", "", 1, "form-submit-container"], ["mat-button", "", "class", "form-submit-button", 3, "click", 4, "ngIf"], ["mat-button", "", 1, "dialog-button", 3, "click"], [3, "value"], ["mat-button", "", 1, "form-submit-button", 3, "click"]],
      template: function UserViewChatCreateDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", null, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 4, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-select", 7, 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, UserViewChatCreateDialogComponent_mat_option_10_Template, 2, 2, "mat-option", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-chat-tags", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, UserViewChatCreateDialogComponent_button_13_Template, 2, 0, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserViewChatCreateDialogComponent_Template_button_click_14_listener() {
            return ctx.onExit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Exit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categories);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.value !== "" && !(_r2.value === undefined || _r2.value === null || _r2.value === ""));
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["MaxLengthValidator"], _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _chat_tags_chat_tags_component__WEBPACK_IMPORTED_MODULE_9__["ChatTagsComponent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogActions"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatOption"]],
      styles: [".two-container[_ngcontent-%COMP%] {\n        width: 100%;\n        height: 100%;\n        background-image: linear-gradient(rgb(36, 36, 36), rgb(38, 49, 54));\n        border-radius: 5px;\n}\n\n.three-container[_ngcontent-%COMP%] {\n        box-sizing: border-box;\n        padding: 5px;\n        margin-top: 5px;\n        margin-bottom: 5px;\n        border-radius: 5px;\n        \n}\n\n\n\n.chat-title-input-container[_ngcontent-%COMP%] {\n        width: 100%;\n        height: 50px;\n        border-radius: 5px;\n        background-color: rgb(38, 49, 54);\n        box-sizing: border-box;\n}\n\n.chat-title-input[_ngcontent-%COMP%] {\n        caret-color: white;\n        width: calc(100% - 30px);\n        padding-left: 15px;\n        line-height: 38px;\n        margin-top: 5px;\n        font-size: 17px;\n        border: none;\n        color: white;\n        background-color: rgb(38, 49, 54);\n}\n\n\n\n.chat-category-container[_ngcontent-%COMP%] {\n        order: 1;\n        width: 100%;\n        height: 50px; \n        margin-top: 10px;\n        border-radius: 5px;\n        box-sizing: border-box;\n}\n\n.chat-tags[_ngcontent-%COMP%] {\n        order: 2;\n}\n\n.form-submit-button[_ngcontent-%COMP%] {\n        width: 100%;\n        background: transparent;\n        font-size: 18px;\n        color: #7abffc; \n}\n\n.dialog-button[_ngcontent-%COMP%] {\n        width: 100%;\n        font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyLXBhZ2UvdXNlci12aWV3L3VzZXItdmlldy1jaGF0LWNyZWF0ZS1kaWFsb2cvdXNlci12aWV3LWNoYXQtY3JlYXRlLWRpYWxvZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO1FBQ1EsV0FBVztRQUNYLFlBQVk7UUFDWixtRUFBbUU7UUFDbkUsa0JBQWtCO0FBQzFCOztBQUVBO1FBQ1Esc0JBQXNCO1FBQ3RCLFlBQVk7UUFDWixlQUFlO1FBQ2Ysa0JBQWtCO1FBQ2xCLGtCQUFrQjtRQUNsQix1Q0FBdUM7QUFDL0M7O0FBRUEsZ0JBQWdCOztBQUNoQjtRQUNRLFdBQVc7UUFDWCxZQUFZO1FBQ1osa0JBQWtCO1FBQ2xCLGlDQUFpQztRQUNqQyxzQkFBc0I7QUFDOUI7O0FBRUE7UUFDUSxrQkFBa0I7UUFDbEIsd0JBQXdCO1FBQ3hCLGtCQUFrQjtRQUNsQixpQkFBaUI7UUFDakIsZUFBZTtRQUNmLGVBQWU7UUFDZixZQUFZO1FBQ1osWUFBWTtRQUNaLGlDQUFpQztBQUN6Qzs7QUFFQSxvQkFBb0I7O0FBQ3BCO1FBQ1EsUUFBUTtRQUNSLFdBQVc7UUFDWCxZQUFZO1FBQ1osZ0JBQWdCO1FBQ2hCLGtCQUFrQjtRQUNsQixzQkFBc0I7QUFDOUI7O0FBRUE7UUFDUSxRQUFRO0FBQ2hCOztBQUVBO1FBQ1EsV0FBVztRQUNYLHVCQUF1QjtRQUN2QixlQUFlO1FBQ2YsY0FBYztBQUN0Qjs7QUFFQTtRQUNRLFdBQVc7UUFDWCxlQUFlO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy91c2VyLXBhZ2UvdXNlci12aWV3L3VzZXItdmlldy1jaGF0LWNyZWF0ZS1kaWFsb2cvdXNlci12aWV3LWNoYXQtY3JlYXRlLWRpYWxvZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnR3by1jb250YWluZXIge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiKDM2LCAzNiwgMzYpLCByZ2IoMzgsIDQ5LCA1NCkpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi50aHJlZS1jb250YWluZXIge1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYigzMiwgMzIsIDMyKTsgKi9cbn1cblxuLyogVGl0bGUgSW5wdXQgKi9cbi5jaGF0LXRpdGxlLWlucHV0LWNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM4LCA0OSwgNTQpO1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uY2hhdC10aXRsZS1pbnB1dCB7XG4gICAgICAgIGNhcmV0LWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDMwcHgpO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzOHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzOCwgNDksIDU0KTtcbn1cblxuLyogQ2F0ZWdvcnkgc2VsZWN0ICovXG4uY2hhdC1jYXRlZ29yeS1jb250YWluZXIge1xuICAgICAgICBvcmRlcjogMTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogNTBweDsgXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLmNoYXQtdGFncyB7XG4gICAgICAgIG9yZGVyOiAyO1xufVxuXG4uZm9ybS1zdWJtaXQtYnV0dG9uIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIGNvbG9yOiAjN2FiZmZjOyBcbn1cblxuLmRpYWxvZy1idXR0b24ge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserViewChatCreateDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-user-view-chat-create-dialog",
          templateUrl: "user-view-chat-create-dialog.component.html",
          styleUrls: ["user-view-chat-create-dialog.component.css"]
        }]
      }], function () {
        return [{
          type: src_app_services_chat_create__WEBPACK_IMPORTED_MODULE_1__["ChatCreateService"]
        }, {
          type: _services_user__WEBPACK_IMPORTED_MODULE_2__["UserService"]
        }, {
          type: src_app_services_authentication__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/user-page/user-view/user-view-icon-dialog/user-view-icon-dialog.component.ts":
  /*!*********************************************************************************************************!*\
    !*** ./src/app/components/user-page/user-view/user-view-icon-dialog/user-view-icon-dialog.component.ts ***!
    \*********************************************************************************************************/

  /*! exports provided: UserViewIconDialogComponent */

  /***/
  function srcAppComponentsUserPageUserViewUserViewIconDialogUserViewIconDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserViewIconDialogComponent", function () {
      return UserViewIconDialogComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var src_app_services_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/user */
    "./src/app/services/user.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    function UserViewIconDialogComponent_button_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserViewIconDialogComponent_button_6_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1.uploadImage();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Upload");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var UserViewIconDialogComponent = /*#__PURE__*/function () {
      function UserViewIconDialogComponent(dialogRef, userService) {
        _classCallCheck(this, UserViewIconDialogComponent);

        this.dialogRef = dialogRef;
        this.userService = userService;
      } //Closes the dialog


      _createClass(UserViewIconDialogComponent, [{
        key: "onExit",
        value: function onExit() {
          this.dialogRef.close();
        } //Sets the selected image to the image selected by the user

      }, {
        key: "onImageSelected",
        value: function onImageSelected(event) {
          var _this25 = this;

          this.selectedImage = event.target.files[0];
          var reader = new FileReader();
          reader.readAsDataURL(this.selectedImage);

          reader.onload = function () {
            var originalDataUrl = reader.result; //Scaled the image down to a 400 X 400 square

            _this25.scaleImage(originalDataUrl, 400, 400, _this25.selectedImage.type, 0.7, function (dataUrl) {
              _this25.selectedImageUrl = dataUrl;
            });
          };
        } //https://codepen.io/shrinivas93/pen/xdLLPN

      }, {
        key: "scaleImage",
        value: function scaleImage(dataUrl, newWidth, newHeight, imageType, imageArguments, callback) {
          imageType = imageType || "image/jpeg";
          imageArguments = imageArguments || 0.7;
          var image = new Image();

          image.onload = function () {
            var canvas = document.createElement("canvas");
            canvas.width = newWidth;
            canvas.height = newHeight;
            var ctx = canvas.getContext("2d");
            ctx.drawImage(image, 0, 0, newWidth, newHeight);
            var newDataUrl = canvas.toDataURL(imageType, imageArguments);
            callback(newDataUrl);
          };

          image.src = dataUrl;
        } //Uploads image

      }, {
        key: "uploadImage",
        value: function uploadImage() {
          if (this.selectedImageUrl === undefined || this.selectedImageUrl === null) return;
          this.userService.setProfileImage(this.selectedImageUrl);
          this.dialogRef.close();
        }
      }]);

      return UserViewIconDialogComponent;
    }();

    UserViewIconDialogComponent.ɵfac = function UserViewIconDialogComponent_Factory(t) {
      return new (t || UserViewIconDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user__WEBPACK_IMPORTED_MODULE_2__["UserService"]));
    };

    UserViewIconDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UserViewIconDialogComponent,
      selectors: [["app-user-view-icon-dialog"]],
      decls: 9,
      vars: 1,
      consts: [[1, "container"], [1, "dialog-header"], [1, "file-input-container"], ["type", "file", "accept", "image/*", 3, "change"], ["mat-dialog-actions", ""], ["mat-button", "", "class", "upload-button", 3, "click", 4, "ngIf"], ["mat-button", "", 1, "dialog-button", 3, "click"], ["mat-button", "", 1, "upload-button", 3, "click"]],
      template: function UserViewIconDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Upload profile image");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function UserViewIconDialogComponent_Template_input_change_4_listener($event) {
            return ctx.onImageSelected($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, UserViewIconDialogComponent_button_6_Template, 2, 0, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserViewIconDialogComponent_Template_button_click_7_listener() {
            return ctx.onExit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Exit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedImage !== null && ctx.selectedImage !== undefined);
        }
      },
      directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"]],
      styles: [".container[_ngcontent-%COMP%] {\n        background-image: linear-gradient(rgb(32, 32, 32), rgb(2, 78, 114));\n        width: 100%;\n        height: 100%;\n}\n\n.dialog-header[_ngcontent-%COMP%] {\n        box-sizing: border-box;\n        margin-top: 10px;\n        margin-left: 10px;\n        width: calc(100% - 20px);\n        padding: 5px;\n        padding-left: 10px;\n        padding-right: 10px;\n        padding-top: 20px;\n        padding-bottom: 20px;\n        background-color: rgb(48, 60, 65);\n        border-radius: 5px;\n        font-size: 22px;\n        font-weight: bold;\n        text-align: center;\n}\n\n.file-input-container[_ngcontent-%COMP%] {\n        box-sizing: border-box;\n        background-color: rgb(48, 60, 65);\n        padding: 10px;\n        margin-top: 10px;\n        width: calc(100% - 20px);\n        margin-left: 10px;\n        border-radius: 5px;\n        display: flex;\n        align-content: center;\n}\n\n.dialog-button[_ngcontent-%COMP%] {\n        font-size: 16px;\n        width: 100%;\n}\n\n.upload-button[_ngcontent-%COMP%] {\n        font-size: 18px;\n        width: 100%;\n        color: #7abffc; \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyLXBhZ2UvdXNlci12aWV3L3VzZXItdmlldy1pY29uLWRpYWxvZy91c2VyLXZpZXctaWNvbi1kaWFsb2cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtRQUNRLG1FQUFtRTtRQUNuRSxXQUFXO1FBQ1gsWUFBWTtBQUNwQjs7QUFFQTtRQUNRLHNCQUFzQjtRQUN0QixnQkFBZ0I7UUFDaEIsaUJBQWlCO1FBQ2pCLHdCQUF3QjtRQUN4QixZQUFZO1FBQ1osa0JBQWtCO1FBQ2xCLG1CQUFtQjtRQUNuQixpQkFBaUI7UUFDakIsb0JBQW9CO1FBQ3BCLGlDQUFpQztRQUNqQyxrQkFBa0I7UUFDbEIsZUFBZTtRQUNmLGlCQUFpQjtRQUNqQixrQkFBa0I7QUFDMUI7O0FBRUE7UUFDUSxzQkFBc0I7UUFDdEIsaUNBQWlDO1FBQ2pDLGFBQWE7UUFDYixnQkFBZ0I7UUFDaEIsd0JBQXdCO1FBQ3hCLGlCQUFpQjtRQUNqQixrQkFBa0I7UUFDbEIsYUFBYTtRQUNiLHFCQUFxQjtBQUM3Qjs7QUFFQTtRQUNRLGVBQWU7UUFDZixXQUFXO0FBQ25COztBQUdBO1FBQ1EsZUFBZTtRQUNmLFdBQVc7UUFDWCxjQUFjO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy91c2VyLXBhZ2UvdXNlci12aWV3L3VzZXItdmlldy1pY29uLWRpYWxvZy91c2VyLXZpZXctaWNvbi1kaWFsb2cuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiKDMyLCAzMiwgMzIpLCByZ2IoMiwgNzgsIDExNCkpO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uZGlhbG9nLWhlYWRlciB7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XG4gICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0OCwgNjAsIDY1KTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5maWxlLWlucHV0LWNvbnRhaW5lciB7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0OCwgNjAsIDY1KTtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5kaWFsb2ctYnV0dG9uIHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbn1cblxuXG4udXBsb2FkLWJ1dHRvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGNvbG9yOiAjN2FiZmZjOyBcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserViewIconDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-user-view-icon-dialog',
          templateUrl: 'user-view-icon-dialog.component.html',
          styleUrls: ["user-view-icon-dialog.component.css"]
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
        }, {
          type: src_app_services_user__WEBPACK_IMPORTED_MODULE_2__["UserService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/user-page/user-view/user-view.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/components/user-page/user-view/user-view.component.ts ***!
    \***********************************************************************/

  /*! exports provided: UserViewComponent */

  /***/
  function srcAppComponentsUserPageUserViewUserViewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserViewComponent", function () {
      return UserViewComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _user_view_icon_dialog_user_view_icon_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./user-view-icon-dialog/user-view-icon-dialog.component */
    "./src/app/components/user-page/user-view/user-view-icon-dialog/user-view-icon-dialog.component.ts");
    /* harmony import */


    var _user_view_chat_create_dialog_user_view_chat_create_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./user-view-chat-create-dialog/user-view-chat-create-dialog.component */
    "./src/app/components/user-page/user-view/user-view-chat-create-dialog/user-view-chat-create-dialog.component.ts");
    /* harmony import */


    var _services_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../services/user */
    "./src/app/services/user.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _image_fab_image_fab_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../image-fab/image-fab.component */
    "./src/app/components/image-fab/image-fab.component.ts");
    /* harmony import */


    var _user_icon_user_icon_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../user-icon/user-icon.component */
    "./src/app/components/user-icon/user-icon.component.ts");

    function UserViewComponent_app_image_fab_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-image-fab", 23);
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imageUrl", ctx_r0.user.image);
      }
    }

    function UserViewComponent_app_user_icon_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-user-icon");
      }
    }

    function UserViewComponent_div_28_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserViewComponent_div_28_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23);

          return ctx_r5.sendFriendReq(_r2);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Send");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var UserViewComponent = /*#__PURE__*/function () {
      function UserViewComponent(userService, DomSanitationService, dialog) {
        _classCallCheck(this, UserViewComponent);

        this.userService = userService;
        this.DomSanitationService = DomSanitationService;
        this.dialog = dialog;
        this.sendingFriendRequest = false;
      }

      _createClass(UserViewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this26 = this;

          this.userSub = this.userService.getUserUpdated().subscribe(function (user) {
            _this26.user = user;
          });
          this.userService.getUser();
        } //Sends a friend request

      }, {
        key: "sendFriendReq",
        value: function sendFriendReq(requestForm) {
          var _this27 = this;

          var email = requestForm.value.email.trim();
          if (email == "" || email == "null" || email == undefined || this.sendingFriendRequest) return;
          this.sendingFriendRequest = true;
          this.userService.sendFriendRequestToEmail(email).then(function (resolve) {
            alert(resolve);
            _this27.sendingFriendRequest = false;
            requestForm.resetForm();
          })["catch"](function (reject) {
            alert(reject);
            _this27.sendingFriendRequest = false;
            requestForm.resetForm();
          });
        } //Opens the image icon select dialog

      }, {
        key: "openIconDialog",
        value: function openIconDialog() {
          var _this28 = this;

          var dialogRef = this.dialog.open(_user_view_icon_dialog_user_view_icon_dialog_component__WEBPACK_IMPORTED_MODULE_1__["UserViewIconDialogComponent"], {
            width: "350px",
            height: "350px"
          });
          dialogRef.afterClosed().subscribe(function () {
            //Gets the new user icon image from the database
            _this28.userService.getUser(true);
          });
        } //Opens the chat create dialog

      }, {
        key: "openChatCreateDialog",
        value: function openChatCreateDialog() {
          this.dialog.open(_user_view_chat_create_dialog_user_view_chat_create_dialog_component__WEBPACK_IMPORTED_MODULE_2__["UserViewChatCreateDialogComponent"], {
            width: "350px",
            height: "550px"
          });
        } //Logs out the user

      }, {
        key: "logOut",
        value: function logOut() {
          this.userService.logOut();
        } //Avoid memory leaks

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.userSub.unsubscribe();
        }
      }]);

      return UserViewComponent;
    }();

    UserViewComponent.ɵfac = function UserViewComponent_Factory(t) {
      return new (t || UserViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]));
    };

    UserViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UserViewComponent,
      selectors: [["app-user-view"]],
      decls: 41,
      vars: 4,
      consts: [[1, "container"], [1, "user-container"], [1, "user-icon-container"], [3, "imageUrl", 4, "ngIf"], [4, "ngIf"], [1, "user-username-container"], [1, "user-username"], [1, "user-options-header"], [1, "user-options-container"], [1, "user-option-container"], [1, "user-option-header"], [1, "user-option"], [1, "edit-image-button", "transform-color", "no-select", 3, "click"], [1, "user-option-container", "margin-top"], [1, "friend-request-form-container"], [1, "friend-request-form", 3, "submit"], ["friendReqForm", "ngForm"], [1, "friend-request-input-container"], ["matInput", "", "type", "text", "name", "email", "ngModel", "", "placeholder", "email", "autocomplete", "off", 1, "friend-request-email-field"], ["email", "ngModel"], ["class", "friend-request-button\n                                                                transform-color\n                                                                no-select", 3, "click", 4, "ngIf"], [1, "create-chat-button", "transform-color", "no-select", 3, "click"], [1, "log-out-button", "transform-color", "no-select", 3, "click"], [3, "imageUrl"], [1, "friend-request-button", "transform-color", "no-select", 3, "click"]],
      template: function UserViewComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, UserViewComponent_app_image_fab_3_Template, 1, 1, "app-image-fab", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, UserViewComponent_app_user_icon_4_Template, 1, 0, "app-user-icon", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Options ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Set Your Icon ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserViewComponent_Template_div_click_15_listener() {
            return ctx.openIconDialog();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Send a Friend Request ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "form", 15, 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function UserViewComponent_Template_form_submit_22_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23);

            return ctx.sendFriendReq(_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 18, 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, UserViewComponent_div_28_Template, 2, 0, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Create a New Chat ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserViewComponent_Template_div_click_33_listener() {
            return ctx.openChatCreateDialog();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Create");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Log Out ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserViewComponent_Template_div_click_39_listener() {
            return ctx.logOut();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Leave");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user.image != "$$$Default$$$");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user.image === "$$$Default$$$");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.user.username, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r2.value.email !== "");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _image_fab_image_fab_component__WEBPACK_IMPORTED_MODULE_10__["ImageFabComponent"], _user_icon_user_icon_component__WEBPACK_IMPORTED_MODULE_11__["UserIconComponent"]],
      styles: [".container[_ngcontent-%COMP%] {\n        width: 100%;\n        height: 100%;\n        background-image: linear-gradient(rgb(36, 36, 36), rgb(38, 49, 54));\n}\n\n.user-container[_ngcontent-%COMP%] {\n        padding-top: 10px;\n        width: 60%;\n        margin: auto;\n        height: 40%;\n}\n\n.user-icon-container[_ngcontent-%COMP%] {\n        margin: auto;\n        width: 250px;\n        height: 250px;\n}\n\n.user-username-container[_ngcontent-%COMP%] {\n        width: 100%;\n        margin: auto;\n        height: 60px;\n        font-weight: bolder;\n        text-align: center;\n        font-size: 30px;\n        margin-top: -10px;\n        text-align: center;\n}\n\n.user-username[_ngcontent-%COMP%] {\n        color: hotpink;\n}\n\n.user-options-container[_ngcontent-%COMP%] {\n        width: 60%;\n        height: calc(60% - 130px);\n        margin: auto;\n        display: flex;\n        overflow-y: scroll;\n        flex-direction: column;\n        \n}\n\n.user-options-header[_ngcontent-%COMP%] {\n        border-bottom: solid white;\n        border-width: 2px;\n        width: 60%;\n        margin: auto;\n        margin-bottom: 20px;\n        color: white;\n}\n\n.user-option-container[_ngcontent-%COMP%] {\n        background-color: rgb(50, 62, 68);\n        padding: 10px;\n        border-radius: 5px;\n}\n\n.friend-request-email-field[_ngcontent-%COMP%] {\n        color: white;\n}\n\n.friend-request-button[_ngcontent-%COMP%] {\n        background-color: rgb(44, 51, 54);\n        padding: 5px;\n        width: 50px;\n        margin-top: 10px;\n        border-radius: 3px;\n        text-align: center;\n        color: white;\n}\n\n.friend-request-button[_ngcontent-%COMP%]:hover {\n        color: #7abffc;\n        cursor: pointer;\n}\n\n.edit-image-button[_ngcontent-%COMP%] {\n        background-color: rgb(44, 51, 54);\n        padding: 5px;\n        width: 50px;\n        margin-top: 10px;\n        border-radius: 3px;\n        text-align: center;\n        color: white;\n}\n\n.edit-image-button[_ngcontent-%COMP%]:hover {\n        color: #7abffc;\n        cursor: pointer;   \n}\n\n.user-option-header[_ngcontent-%COMP%] {\n        font-size: 17px;\n        font-weight: bold;\n        color: #7abffc;\n}\n\n.user-option[_ngcontent-%COMP%] {\n        margin-top: 10px;\n        margin-left: 20px;\n}\n\n.image-input[_ngcontent-%COMP%] {\n        font-size: 15px;\n        margin-top: 10px;\n        color: white;\n}\n\n.image-upload-button[_ngcontent-%COMP%] {\n        color: white;\n        background-color: rgb(44, 51, 54);\n        padding: 5px;\n        width: 70px;\n        margin-top: 20px;\n        border-radius: 3px;\n        text-align: center;\n}\n\n.image-upload-button[_ngcontent-%COMP%]:hover {\n        color: #7abffc;\n}\n\n.create-chat-button[_ngcontent-%COMP%] {\n        background-color: rgb(44, 51, 54);\n        padding: 5px;\n        width: 50px;\n        margin-top: 10px;\n        border-radius: 3px;\n        text-align: center;\n        color: white;\n}\n\n.create-chat-button[_ngcontent-%COMP%]:hover {\n        color: #7abffc; \n        cursor: pointer;\n}\n\n.log-out-button[_ngcontent-%COMP%] {\n        background-color: rgb(44, 51, 54);\n        padding: 5px;\n        width: 50px;\n        margin-top: 10px;\n        border-radius: 3px;\n        text-align: center;\n        color: white; \n}\n\n.log-out-button[_ngcontent-%COMP%]:hover {\n        color: #7abffc; \n        cursor: pointer;  \n}\n\n.margin-top[_ngcontent-%COMP%] {\n        margin-top: 30px;\n}\n\n.chat-create-dialog[_ngcontent-%COMP%]   .mat-dialog-container[_ngcontent-%COMP%] {\n        padding: 0px;\n}\n\n.transform-color[_ngcontent-%COMP%] {\n        transition: color 0.2s;\n}\n\n.no-select[_ngcontent-%COMP%] {\n        -webkit-touch-callout: none;\n        -webkit-user-select: none; \n        -moz-user-select: none; \n        user-select: none;\n}\n\n  .mat-dialog-container {\n        padding: 0px !important;\n        background-color: rgb(32, 32, 32) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyLXBhZ2UvdXNlci12aWV3L3VzZXItdmlldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO1FBQ1EsV0FBVztRQUNYLFlBQVk7UUFDWixtRUFBbUU7QUFDM0U7O0FBRUE7UUFDUSxpQkFBaUI7UUFDakIsVUFBVTtRQUNWLFlBQVk7UUFDWixXQUFXO0FBQ25COztBQUVBO1FBQ1EsWUFBWTtRQUNaLFlBQVk7UUFDWixhQUFhO0FBQ3JCOztBQUVBO1FBQ1EsV0FBVztRQUNYLFlBQVk7UUFDWixZQUFZO1FBQ1osbUJBQW1CO1FBQ25CLGtCQUFrQjtRQUNsQixlQUFlO1FBQ2YsaUJBQWlCO1FBQ2pCLGtCQUFrQjtBQUMxQjs7QUFFQTtRQUNRLGNBQWM7QUFDdEI7O0FBRUE7UUFDUSxVQUFVO1FBQ1YseUJBQXlCO1FBQ3pCLFlBQVk7UUFDWixhQUFhO1FBQ2Isa0JBQWtCO1FBQ2xCLHNCQUFzQjtRQUN0Qiw2QkFBNkI7QUFDckM7O0FBRUE7UUFDUSwwQkFBMEI7UUFDMUIsaUJBQWlCO1FBQ2pCLFVBQVU7UUFDVixZQUFZO1FBQ1osbUJBQW1CO1FBQ25CLFlBQVk7QUFDcEI7O0FBRUE7UUFDUSxpQ0FBaUM7UUFDakMsYUFBYTtRQUNiLGtCQUFrQjtBQUMxQjs7QUFFQTtRQUNRLFlBQVk7QUFDcEI7O0FBRUE7UUFDUSxpQ0FBaUM7UUFDakMsWUFBWTtRQUNaLFdBQVc7UUFDWCxnQkFBZ0I7UUFDaEIsa0JBQWtCO1FBQ2xCLGtCQUFrQjtRQUNsQixZQUFZO0FBQ3BCOztBQUVBO1FBQ1EsY0FBYztRQUNkLGVBQWU7QUFDdkI7O0FBRUE7UUFDUSxpQ0FBaUM7UUFDakMsWUFBWTtRQUNaLFdBQVc7UUFDWCxnQkFBZ0I7UUFDaEIsa0JBQWtCO1FBQ2xCLGtCQUFrQjtRQUNsQixZQUFZO0FBQ3BCOztBQUVBO1FBQ1EsY0FBYztRQUNkLGVBQWU7QUFDdkI7O0FBRUE7UUFDUSxlQUFlO1FBQ2YsaUJBQWlCO1FBQ2pCLGNBQWM7QUFDdEI7O0FBRUE7UUFDUSxnQkFBZ0I7UUFDaEIsaUJBQWlCO0FBQ3pCOztBQUVBO1FBQ1EsZUFBZTtRQUNmLGdCQUFnQjtRQUNoQixZQUFZO0FBQ3BCOztBQUVBO1FBQ1EsWUFBWTtRQUNaLGlDQUFpQztRQUNqQyxZQUFZO1FBQ1osV0FBVztRQUNYLGdCQUFnQjtRQUNoQixrQkFBa0I7UUFDbEIsa0JBQWtCO0FBQzFCOztBQUVBO1FBQ1EsY0FBYztBQUN0Qjs7QUFFQTtRQUNRLGlDQUFpQztRQUNqQyxZQUFZO1FBQ1osV0FBVztRQUNYLGdCQUFnQjtRQUNoQixrQkFBa0I7UUFDbEIsa0JBQWtCO1FBQ2xCLFlBQVk7QUFDcEI7O0FBRUE7UUFDUSxjQUFjO1FBQ2QsZUFBZTtBQUN2Qjs7QUFFQTtRQUNRLGlDQUFpQztRQUNqQyxZQUFZO1FBQ1osV0FBVztRQUNYLGdCQUFnQjtRQUNoQixrQkFBa0I7UUFDbEIsa0JBQWtCO1FBQ2xCLFlBQVk7QUFDcEI7O0FBRUE7UUFDUSxjQUFjO1FBQ2QsZUFBZTtBQUN2Qjs7QUFFQTtRQUNRLGdCQUFnQjtBQUN4Qjs7QUFFQTtRQUNRLFlBQVk7QUFDcEI7O0FBRUE7UUFJUSxzQkFBc0I7QUFDOUI7O0FBRUE7UUFDUSwyQkFBMkI7UUFDM0IseUJBQXlCO1FBRXpCLHNCQUFzQjtRQUV0QixpQkFBaUI7QUFDekI7O0FBR0E7UUFDUSx1QkFBdUI7UUFDdkIsNENBQTRDO0FBQ3BEIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy91c2VyLXBhZ2UvdXNlci12aWV3L3VzZXItdmlldy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2IoMzYsIDM2LCAzNiksIHJnYigzOCwgNDksIDU0KSk7XG59XG5cbi51c2VyLWNvbnRhaW5lciB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgICAgICB3aWR0aDogNjAlO1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIGhlaWdodDogNDAlO1xufVxuXG4udXNlci1pY29uLWNvbnRhaW5lciB7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgd2lkdGg6IDI1MHB4O1xuICAgICAgICBoZWlnaHQ6IDI1MHB4O1xufVxuXG4udXNlci11c2VybmFtZS1jb250YWluZXIge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udXNlci11c2VybmFtZSB7XG4gICAgICAgIGNvbG9yOiBob3RwaW5rO1xufVxuXG4udXNlci1vcHRpb25zLWNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICAgIGhlaWdodDogY2FsYyg2MCUgLSAxMzBweCk7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjsgKi9cbn1cblxuLnVzZXItb3B0aW9ucy1oZWFkZXIge1xuICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCB3aGl0ZTtcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAycHg7XG4gICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xufVxuXG4udXNlci1vcHRpb24tY29udGFpbmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDUwLCA2MiwgNjgpO1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5mcmllbmQtcmVxdWVzdC1lbWFpbC1maWVsZCB7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmZyaWVuZC1yZXF1ZXN0LWJ1dHRvbiB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0NCwgNTEsIDU0KTtcbiAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmZyaWVuZC1yZXF1ZXN0LWJ1dHRvbjpob3ZlciB7XG4gICAgICAgIGNvbG9yOiAjN2FiZmZjO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5lZGl0LWltYWdlLWJ1dHRvbiB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0NCwgNTEsIDU0KTtcbiAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmVkaXQtaW1hZ2UtYnV0dG9uOmhvdmVyIHtcbiAgICAgICAgY29sb3I6ICM3YWJmZmM7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjsgICBcbn1cblxuLnVzZXItb3B0aW9uLWhlYWRlciB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGNvbG9yOiAjN2FiZmZjO1xufVxuXG4udXNlci1vcHRpb24ge1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbn1cblxuLmltYWdlLWlucHV0IHtcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5pbWFnZS11cGxvYWQtYnV0dG9uIHtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDQsIDUxLCA1NCk7XG4gICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgd2lkdGg6IDcwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaW1hZ2UtdXBsb2FkLWJ1dHRvbjpob3ZlciB7XG4gICAgICAgIGNvbG9yOiAjN2FiZmZjO1xufVxuXG4uY3JlYXRlLWNoYXQtYnV0dG9uIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ0LCA1MSwgNTQpO1xuICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xufVxuXG4uY3JlYXRlLWNoYXQtYnV0dG9uOmhvdmVyIHtcbiAgICAgICAgY29sb3I6ICM3YWJmZmM7IFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5sb2ctb3V0LWJ1dHRvbiB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0NCwgNTEsIDU0KTtcbiAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTsgXG59XG5cbi5sb2ctb3V0LWJ1dHRvbjpob3ZlciB7XG4gICAgICAgIGNvbG9yOiAjN2FiZmZjOyBcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyOyAgXG59XG5cbi5tYXJnaW4tdG9wIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuLmNoYXQtY3JlYXRlLWRpYWxvZyAubWF0LWRpYWxvZy1jb250YWluZXIge1xuICAgICAgICBwYWRkaW5nOiAwcHg7XG59XG5cbi50cmFuc2Zvcm0tY29sb3Ige1xuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGNvbG9yIDAuMnM7XG4gICAgICAgIC1tb3otdHJhbnNpdGlvbjogY29sb3IgMC4ycztcbiAgICAgICAgLW8tdHJhbnNpdGlvbjogY29sb3IgMC4ycztcbiAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4ycztcbn1cblxuLm5vLXNlbGVjdCB7XG4gICAgICAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcbiAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsgXG4gICAgICAgIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTsgXG4gICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7IFxuICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7IFxuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuXG46Om5nLWRlZXAgLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcbiAgICAgICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzMiwgMzIsIDMyKSAhaW1wb3J0YW50O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-user-view",
          templateUrl: "user-view.component.html",
          styleUrls: ["user-view.component.css"]
        }]
      }], function () {
        return [{
          type: _services_user__WEBPACK_IMPORTED_MODULE_3__["UserService"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/authentication.ts":
  /*!********************************************!*\
    !*** ./src/app/services/authentication.ts ***!
    \********************************************/

  /*! exports provided: AuthenticationService */

  /***/
  function srcAppServicesAuthenticationTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthenticationService", function () {
      return AuthenticationService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js"); //Service for the authentication API


    var BASE_URL = "https://ddm-rumble-keycloak.herokuapp.com/api/authentication/";
    var BASE_USER_URL = "https://ddm-rumble-keycloak.herokuapp.com/api/user/";

    var AuthenticationService = /*#__PURE__*/function () {
      function AuthenticationService(http, location, router) {
        _classCallCheck(this, AuthenticationService);

        this.http = http;
        this.location = location;
        this.router = router;
        console.log("Authentication Service Initialized"); // router.events.subscribe((val) => {
        //     console.log("here", val)
        // });
      } //Returns clients jwt token


      _createClass(AuthenticationService, [{
        key: "getToken",
        value: function getToken() {
          return sessionStorage.getItem("accessToken");
        } //Removes token from session storage

      }, {
        key: "clearTokens",
        value: function clearTokens() {
          sessionStorage.clear();
        }
      }, {
        key: "setAccessToken",
        value: function setAccessToken(token) {
          this.clearTokens();
          sessionStorage.setItem("accessToken", token);
        }
      }, {
        key: "isAuthenticated",
        value: function isAuthenticated() {
          if (this.getToken()) return true;
          return false;
        } //Changes client url

      }, {
        key: "go",
        value: function go(route) {
          this.location.replaceState(route);
          window.location.reload();
        } //Register a new user

      }, {
        key: "register",
        value: function register(username, email, password) {
          var _this29 = this;

          return new Promise(function (resolve) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
            headers = headers.append('Content-type', 'application/json');
            var body = {
              username: username,
              email: email,
              password: password
            };

            _this29.http.post(BASE_URL + "register/createUser", body, {
              headers: headers
            }).subscribe(function (res) {
              if (res.status === '0') {
                var accessToken = res.data;

                if (accessToken) {
                  //User was created
                  _this29.setAccessToken(accessToken);

                  _this29.go("");
                }
              } else {
                resolve(res.data);
              }
            });
          });
        } //Logs in a given user

      }, {
        key: "login",
        value: function login() {
          var _this30 = this;

          return new Promise(function (resolve) {
            _this30.http.get(BASE_URL + "login").subscribe(function (res) {
              if (res.status === '0') {
                var accessToken = res.data;

                if (accessToken) {
                  //User was authenticated
                  _this30.setAccessToken(accessToken);

                  _this30.setUserStatusOnline().then(function () {
                    return _this30.go("");
                  });
                }
              } else {
                resolve(res.data);
              }
            });
          });
        } //Set user status as online

      }, {
        key: "setUserStatusOnline",
        value: function setUserStatusOnline() {
          var _this31 = this;

          return new Promise(function (resolve, reject) {
            _this31.http.get(BASE_USER_URL + "userOnline").subscribe(function (res) {
              console.log(res);
              resolve("User status was set");
            });
          });
        }
      }]);

      return AuthenticationService;
    }();

    AuthenticationService.ɵfac = function AuthenticationService_Factory(t) {
      return new (t || AuthenticationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    AuthenticationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthenticationService,
      factory: AuthenticationService.ɵfac,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthenticationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: "root"
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/chat-create.ts":
  /*!*****************************************!*\
    !*** ./src/app/services/chat-create.ts ***!
    \*****************************************/

  /*! exports provided: ChatCreateService */

  /***/
  function srcAppServicesChatCreateTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatCreateService", function () {
      return ChatCreateService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js"); //Service for the chat API
    //Handles the creation of a single chat


    var BASE_URL = "https://ddm-rumble-keycloak.herokuapp.com/api/chat/";

    var ChatCreateService = /*#__PURE__*/function () {
      function ChatCreateService(http, location) {
        _classCallCheck(this, ChatCreateService);

        this.http = http;
        this.location = location;
        this.newChatUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
      }

      _createClass(ChatCreateService, [{
        key: "getNewChatUpdated",
        value: function getNewChatUpdated() {
          return this.newChatUpdated.asObservable();
        } //Initializes new chat

      }, {
        key: "initNewChat",
        value: function initNewChat() {
          this.newChat = {
            _id: undefined,
            tags: [],
            title: undefined,
            messages: [],
            category: undefined,
            adminId: undefined,
            subs: [],
            global: undefined,
            image: "$$$Default$$$"
          };
        } //Adds a tag to the new chat

      }, {
        key: "addTag",
        value: function addTag(newTag) {
          if (this.newChat === undefined || this.newChat === null) return;else if (this.newChat.tags.indexOf(newTag) == -1 && this.newChat.tags.length < 8) {
            this.newChat.tags.push(newTag);
            this.updateNewChat();
          }
        } //Removes a tag from the new chats list of tags

      }, {
        key: "removeTag",
        value: function removeTag(tagToRemove) {
          if (this.newChat === undefined || this.newChat === null) return;
          var indexOfTag = this.newChat.tags.indexOf(tagToRemove);

          if (indexOfTag >= 0) {
            this.newChat.tags.splice(indexOfTag, 1);
            this.updateNewChat();
          }
        } //Changes client url

      }, {
        key: "go",
        value: function go(route) {
          this.location.replaceState(route);
          window.location.reload();
        } //Create new chat

      }, {
        key: "postChat",
        value: function postChat(title, adminId, category, global) {
          var _this32 = this;

          var body = {
            title: title,
            adminId: adminId,
            category: category,
            tags: this.newChat.tags,
            global: global
          };
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
          headers = headers.append('Content-type', 'application/json');
          this.http.post(BASE_URL + "chat-create/create", body, {
            headers: headers
          }).subscribe(function (res) {
            console.log(res); //Chat was created

            _this32.postTags(_this32.newChat.tags, res).then(function () {
              return _this32.postCategory(category, res).then(function () {
                //Visit then chat once it's been created
                _this32.go("api/chat/view/" + res);
              });
            });
          });
        } //Add newly created tags and update existing tags with chat sub

      }, {
        key: "postTags",
        value: function postTags(tags, chatId) {
          var _this33 = this;

          return new Promise(function (resolve, reject) {
            for (var i = 0; i < tags.length; i++) {
              var body = {
                tag: tags[i],
                chatId: chatId
              };
              var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
              headers = headers.append('Content-type', 'application/json');

              _this33.http.post(BASE_URL + "chat-create/addTag", body, {
                headers: headers
              }).subscribe(function (res) {
                return console.log(res);
              });
            }

            resolve(0);
          });
        } //Post category from newly created chat

      }, {
        key: "postCategory",
        value: function postCategory(category, chatId) {
          var _this34 = this;

          return new Promise(function (resolve, reject) {
            var body = {
              category: category,
              chatId: chatId
            };
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
            headers = headers.append('Content-type', 'application/json');

            _this34.http.post(BASE_URL + "chat-create/addCategory", body, {
              headers: headers
            }).subscribe(function (res) {
              return console.log(res);
            });

            resolve(0);
          });
        } //Update new chat

      }, {
        key: "updateNewChat",
        value: function updateNewChat() {
          if (this.newChat === undefined || this.newChat === null) return;
          this.newChatUpdated.next(Object.assign({}, this.newChat));
        }
      }]);

      return ChatCreateService;
    }();

    ChatCreateService.ɵfac = function ChatCreateService_Factory(t) {
      return new (t || ChatCreateService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]));
    };

    ChatCreateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ChatCreateService,
      factory: ChatCreateService.ɵfac,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatCreateService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: "root"
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/chat.ts":
  /*!**********************************!*\
    !*** ./src/app/services/chat.ts ***!
    \**********************************/

  /*! exports provided: ChatService */

  /***/
  function srcAppServicesChatTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatService", function () {
      return ChatService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var socket_io_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! socket.io-client */
    "./node_modules/socket.io-client/lib/index.js");
    /* harmony import */


    var socket_io_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_3__); //Service for the chat API
    //Handles a single chat


    var CHAT_API = "https://ddm-rumble-keycloak.herokuapp.com/api/chat/";

    var ChatService = /*#__PURE__*/function () {
      function ChatService(http) {
        _classCallCheck(this, ChatService);

        this.http = http;
        this.chatUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
      } //Get subscription to chat object


      _createClass(ChatService, [{
        key: "getChatUpdated",
        value: function getChatUpdated() {
          return this.chatUpdated.asObservable();
        }
      }, {
        key: "initChatService",
        value: function initChatService(chatId) {
          this.setChatId(chatId);
          console.log("Chat Service Initialized"); // this.initServerSocket()

          this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_3__["connect"]("https://ddm-rumble-keycloak.herokuapp.com");
          this.initClientSocket();
        } //Sets the chat id

      }, {
        key: "setChatId",
        value: function setChatId(chatId) {
          this.chatId = chatId;
        } //Returns chat sub

      }, {
        key: "getChatSub",
        value: function getChatSub() {
          return {
            _id: this.chat._id,
            title: this.chat.title,
            image: this.chat.image,
            tags: this.chat.tags,
            subCount: this.chat.subs.length
          };
        } //Updates chat

      }, {
        key: "getChat",
        value: function getChat() {
          var _this35 = this;

          var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

          if (this.chatId === null || this.chatId === undefined || !query && this.chat !== undefined && this.chat !== null) {
            this.updateChat();
            return;
          }

          this.http.get(CHAT_API + "data/" + this.chatId).subscribe(function (res) {
            _this35.chat = res;

            _this35.updateChat();
          });
        } //Creates link between the socket on the client and the socket on the server

      }, {
        key: "initServerSocket",
        value: function initServerSocket() {
          this.http.get(CHAT_API + "init").subscribe(function (res) {
            console.log(res);
          });
        } //Declares function of client socket

      }, {
        key: "initClientSocket",
        value: function initClientSocket() {
          var _this36 = this;

          this.socket.on("message-posted-to-chat-" + this.chatId, function (message) {
            _this36.chat.messages.push(message);

            _this36.updateChat();
          });
        } //Request message post to database

      }, {
        key: "postMessage",
        value: function postMessage(message, senderId, timestamp) {
          this.socket.emit("message-posted-to-server", {
            text: message,
            senderId: senderId,
            chatId: this.chatId,
            timestamp: timestamp
          });
        } // Requests a subscription to a given chat

      }, {
        key: "subscribeToChat",
        value: function subscribeToChat() {
          var _this37 = this;

          return new Promise(function (resolve, reject) {
            if (_this37.chatId == undefined || _this37.chatId == null) reject("Bad Data");
            var body = {
              chatId: _this37.chatId
            };
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
            headers = headers.append('Content-type', 'application/json');

            _this37.http.post(CHAT_API + "subscribe/", body, {
              headers: headers
            }).subscribe(function (res) {
              //Get user and not just user id
              if (res == undefined || res == null) reject("Subscription was unsuccessful");

              _this37.chat.subs.push(res);

              _this37.updateChat();

              resolve(0);
            });
          });
        } // Requests a unsubscription to a given chat

      }, {
        key: "unsubscribeFromChat",
        value: function unsubscribeFromChat() {
          var _this38 = this;

          return new Promise(function (resolve, reject) {
            if (_this38.chatId == undefined || _this38.chatId == null) {
              reject("Bad Data");
              return;
            }

            var body = {
              chatId: _this38.chatId
            };
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
            headers = headers.append('Content-type', 'application/json');

            _this38.http.post(CHAT_API + "unsubscribe/", body, {
              headers: headers
            }).subscribe(function (res) {
              //Get user and not just user id
              if (res === undefined || res === null) {
                reject("Subscription was unsuccessful");
                return;
              }

              var index = _this38.getIndexOfUserId(res.data);

              if (index !== -1) {
                _this38.chat.subs.splice(index, 1);
              }

              _this38.updateChat();

              resolve(0);
            });
          });
        } //Get index of userSub in Chat subs list

      }, {
        key: "getIndexOfUserId",
        value: function getIndexOfUserId(userId) {
          for (var i = 0; i < this.chat.subs.length; i++) {
            var cur = this.chat.subs[i];

            if (cur === userId) {
              return i;
            }
          }

          return -1;
        } //Sets chat image

      }, {
        key: "setChatImage",
        value: function setChatImage(dataUrl) {
          var _this39 = this;

          var body = {
            imageUrl: dataUrl
          };
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
          headers = headers.append('Content-type', 'application/json');
          this.http.post(CHAT_API + "setChatImage/" + this.chatId, body, {
            headers: headers
          }).subscribe(function (res) {
            if (res.status == 1) {
              _this39.chat.image = res.data;

              _this39.updateChat();
            }
          });
        } //Checks if user on chat is the chat's admin

      }, {
        key: "isAdmin",
        value: function isAdmin(userId) {
          if (this.chat === undefined || userId === undefined) return false;
          if (this.chat.adminId === userId) return true;
          return false;
        } //Update chat object

      }, {
        key: "updateChat",
        value: function updateChat() {
          this.chatUpdated.next(Object.assign({}, this.chat));
        }
      }]);

      return ChatService;
    }();

    ChatService.ɵfac = function ChatService_Factory(t) {
      return new (t || ChatService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    ChatService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ChatService,
      factory: ChatService.ɵfac,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: "root"
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/chats.ts":
  /*!***********************************!*\
    !*** ./src/app/services/chats.ts ***!
    \***********************************/

  /*! exports provided: ChatsService */

  /***/
  function srcAppServicesChatsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatsService", function () {
      return ChatsService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js"); //Service for the chat API
    //Handles multiple chats


    var BASE_URL = "https://ddm-rumble-keycloak.herokuapp.com/api/chat/";

    var ChatsService = /*#__PURE__*/function () {
      function ChatsService(http) {
        _classCallCheck(this, ChatsService);

        this.http = http;
        this.chats = [];
        this.chatIds = [];
        this.chatsUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.popChatIds = [];
        this.recChatIds = [];
        this.recomChatIds = [];
        this.popChatIdsUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.recChatIdsUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.recomChatIdsUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.chatTitles = [];
        this.chatTags = [];
        this.chatTitlesUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.chatTagsUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.selectedChatIdUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
      } //Gets subscription to all chat subs


      _createClass(ChatsService, [{
        key: "getChatsUpdated",
        value: function getChatsUpdated() {
          return this.chatsUpdated.asObservable();
        } //Get selected chat updated

      }, {
        key: "getSelectedChatIdUpdated",
        value: function getSelectedChatIdUpdated() {
          return this.selectedChatIdUpdated.asObservable();
        } //Get observable for recent chat Ids

      }, {
        key: "getRecentChatIdsUpdated",
        value: function getRecentChatIdsUpdated() {
          return this.recChatIdsUpdated.asObservable();
        } //Get observable for popular chat Ids

      }, {
        key: "getPopularChatIdsUpdated",
        value: function getPopularChatIdsUpdated() {
          return this.popChatIdsUpdated.asObservable();
        } //Get observable for recent chat Ids

      }, {
        key: "getRecommendedChatIdsUpdated",
        value: function getRecommendedChatIdsUpdated() {
          return this.recomChatIdsUpdated.asObservable();
        } //Gets observable for all tags in use

      }, {
        key: "getTagsUpdated",
        value: function getTagsUpdated() {
          return this.chatTagsUpdated.asObservable();
        } //Gets observable for all chat titles in use

      }, {
        key: "getChatTitlesUpdated",
        value: function getChatTitlesUpdated() {
          return this.chatTitlesUpdated.asObservable();
        } //Gets chatsub from list of chatsubs that have already been gotten

      }, {
        key: "getChatSub",
        value: function getChatSub(chatId) {
          if (this.chats === undefined || this.chats === null) return;

          for (var i = 0; i < this.chats.length; i++) {
            if (this.chats[i]._id === chatId) {
              return this.chats[i];
            }
          }
        } //Checks if service has already searched for a given chat

      }, {
        key: "containsChatSub",
        value: function containsChatSub(chatId) {
          for (var i = 0; i < this.chatIds.length; i++) {
            if (this.chatIds[i] === chatId) return true;
          }

          return false;
        } //Creates list of chat subs from a list of chatIds

      }, {
        key: "getChats",
        value: function getChats(chatIds) {
          var _this40 = this;

          if (chatIds.length === 0) return;
          console.log("Getting chats", chatIds);

          for (var i = 0; i < chatIds.length; i++) {
            var chatId = chatIds[i];
            if (this.containsChatSub(chatId)) continue;
            this.chatIds.push(chatId);
            this.getChat(chatId).then(function (chatSub) {
              _this40.chats.push(chatSub);

              _this40.updateChats();
            });
          }
        } //Promise that resolves a chatSub

      }, {
        key: "getChat",
        value: function getChat(chatId) {
          var _this41 = this;

          return new Promise(function (resolve, reject) {
            if (chatId === undefined || chatId === null) {
              reject("Bad data");
              return;
            } //Send get request for chat sub


            var body = {
              _id: chatId
            };
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
            headers = headers.append('Content-type', 'application/json');

            _this41.http.post(BASE_URL + "chatSub", body, {
              headers: headers
            }).subscribe(function (chatSub) {
              resolve(chatSub);
            });
          });
        } //Get most recent 10 chats ids

      }, {
        key: "getRecentChatIds",
        value: function getRecentChatIds() {
          var _this42 = this;

          if (this.recChatIds.length === 0) {
            this.http.get(BASE_URL + "chatIds/recent").subscribe(function (res) {
              _this42.recChatIds = res.data;

              _this42.updateRecentChatIds();
            });
          } else {
            this.updateRecentChatIds();
          }
        } //Get 10 most popular chats

      }, {
        key: "getPopularChatIds",
        value: function getPopularChatIds() {
          var _this43 = this;

          if (this.popChatIds.length === 0) {
            this.http.get(BASE_URL + "chatIds/popular").subscribe(function (res) {
              _this43.popChatIds = res.data;

              _this43.updatePopularChatIds();
            });
          } else {
            this.updatePopularChatIds();
          }
        } //Get 10 recommeded chats

      }, {
        key: "getRecommendedChatIds",
        value: function getRecommendedChatIds() {
          var _this44 = this;

          if (this.recomChatIds.length === 0) {
            this.http.get(BASE_URL + "chatIds/recommended").subscribe(function (res) {
              _this44.recomChatIds = res.data;

              _this44.updateRecommendedChatIds();
            });
          } else {
            this.updateRecommendedChatIds();
          }
        } //Get up to 10 related chats

      }, {
        key: "getRelatedChatIds",
        value: function getRelatedChatIds(chatTags, chatCategory, chatId) {
          var _this45 = this;

          return new Promise(function (resolve) {
            var body = {
              tags: chatTags,
              category: chatCategory,
              chatId: chatId
            };
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
            headers = headers.append('Content-type', 'application/json');

            _this45.http.post(BASE_URL + "chatIds/related", body, {
              headers: headers
            }).subscribe(function (res) {
              if (res.status === '0') {
                resolve(res.data);
              }
            });
          });
        } //Get all tags in use

      }, {
        key: "getAllTags",
        value: function getAllTags() {
          var _this46 = this;

          if (this.chatTags.length === 0) {
            this.http.get(BASE_URL + "allTags").subscribe(function (res) {
              if (res.status === '0') {
                _this46.chatTags = res.data;

                _this46.updateChatTags();
              }
            });
          } else {
            this.updateChatTags();
          }
        } //Get all chat titles in use

      }, {
        key: "getAllChatTitles",
        value: function getAllChatTitles() {
          var _this47 = this;

          if (this.chatTitles.length === 0) {
            this.http.get(BASE_URL + "allChatTitles").subscribe(function (res) {
              if (res.status === '0') {
                _this47.chatTitles = res.data;

                _this47.updateChatTitles();
              }
            });
          } else {
            this.updateChatTitles();
          }
        } //Search chats based on title prefix, category and tags

      }, {
        key: "searchChats",
        value: function searchChats(category, title, tags) {
          var _this48 = this;

          return new Promise(function (resolve, reject) {
            var body = {
              category: category,
              title: title,
              tags: tags
            };
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
            headers.append('Content-type', 'application/json');

            _this48.http.post(BASE_URL + "searchChats", body, {
              headers: headers
            }).subscribe(function (res) {
              if (res.status === "0") {
                resolve(res.data);
              } else {
                reject(res.data);
              }
            });
          });
        } //Select chat

      }, {
        key: "setSelectedChatId",
        value: function setSelectedChatId(chatId) {
          this.selectedChatId = chatId;
          this.updateSelectedChatId();
        } //Update chat 

      }, {
        key: "updateChats",
        value: function updateChats() {
          this.chatsUpdated.next(_toConsumableArray(this.chats));
        } //Update selected chat id

      }, {
        key: "updateSelectedChatId",
        value: function updateSelectedChatId() {
          if (this.selectedChatId === undefined || this.selectedChatId === null) return;
          this.selectedChatIdUpdated.next(this.selectedChatId);
        } //Updated recent chat ids

      }, {
        key: "updateRecentChatIds",
        value: function updateRecentChatIds() {
          this.recChatIdsUpdated.next(_toConsumableArray(this.recChatIds));
        } //Updated recent chat ids

      }, {
        key: "updatePopularChatIds",
        value: function updatePopularChatIds() {
          this.popChatIdsUpdated.next(_toConsumableArray(this.popChatIds));
        } //Updated recent chat ids

      }, {
        key: "updateRecommendedChatIds",
        value: function updateRecommendedChatIds() {
          this.recomChatIdsUpdated.next(_toConsumableArray(this.recomChatIds));
        } //Update chat tags

      }, {
        key: "updateChatTags",
        value: function updateChatTags() {
          this.chatTagsUpdated.next(_toConsumableArray(this.chatTags));
        } //Updates chat titles

      }, {
        key: "updateChatTitles",
        value: function updateChatTitles() {
          this.chatTitlesUpdated.next(_toConsumableArray(this.chatTitles));
        }
      }]);

      return ChatsService;
    }();

    ChatsService.ɵfac = function ChatsService_Factory(t) {
      return new (t || ChatsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    ChatsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ChatsService,
      factory: ChatsService.ɵfac,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: "root"
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/token.interceptor.ts":
  /*!***********************************************!*\
    !*** ./src/app/services/token.interceptor.ts ***!
    \***********************************************/

  /*! exports provided: TokenInterceptor */

  /***/
  function srcAppServicesTokenInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function () {
      return TokenInterceptor;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _authentication__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./authentication */
    "./src/app/services/authentication.ts");

    var TokenInterceptor = /*#__PURE__*/function () {
      function TokenInterceptor(authService) {
        _classCallCheck(this, TokenInterceptor);

        this.authService = authService;
        console.log("Token Interceptor Initialized");
      }

      _createClass(TokenInterceptor, [{
        key: "intercept",
        value: function intercept(request, next) {
          //Injects token into request
          // console.log("Injecting token")
          request = request.clone({
            setHeaders: {
              authorization: "Bearer " + this.authService.getToken()
            }
          }); //Sends request to next handler

          return next.handle(request);
        }
      }]);

      return TokenInterceptor;
    }();

    TokenInterceptor.ɵfac = function TokenInterceptor_Factory(t) {
      return new (t || TokenInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_authentication__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]));
    };

    TokenInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: TokenInterceptor,
      factory: TokenInterceptor.ɵfac,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TokenInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: "root"
        }]
      }], function () {
        return [{
          type: _authentication__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/user.ts":
  /*!**********************************!*\
    !*** ./src/app/services/user.ts ***!
    \**********************************/

  /*! exports provided: UserService */

  /***/
  function srcAppServicesUserTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js"); //Service for User API


    var BASE_URL = "https://ddm-rumble-keycloak.herokuapp.com/api/user/";

    var UserService = /*#__PURE__*/function () {
      function UserService(http, location) {
        _classCallCheck(this, UserService);

        this.http = http;
        this.location = location;
        this.userUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        console.log("User Service Initialized");
      }

      _createClass(UserService, [{
        key: "getUserUpdated",
        value: function getUserUpdated() {
          return this.userUpdated.asObservable();
        }
      }, {
        key: "getUser",
        value: function getUser() {
          var _this49 = this;

          var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

          if (query || this.user == undefined || this.user == null) {
            //Query for user
            this.http.get(BASE_URL + "data").subscribe(function (res) {
              if (res.status === '0') {
                _this49.user = res.data;

                _this49.updateUser();
              }
            });
          } else {
            //Update subscription with existing user
            this.updateUser();
          }
        } //Send friend request

      }, {
        key: "sendFriendRequestToEmail",
        value: function sendFriendRequestToEmail(userEmail) {
          var _this50 = this;

          return new Promise(function (resolve, reject) {
            var body = {
              email: userEmail
            };
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
            headers = headers.append('Content-type', 'application/json');

            _this50.http.post(BASE_URL + "friend-request", body, {
              headers: headers
            }).subscribe(function (res) {
              if (res.status === '0') {
                resolve(res.data);
              } else {
                reject(res.data);
              }
            });
          });
        } //Logs out the user

      }, {
        key: "logOut",
        value: function logOut() {
          var _this51 = this;

          //Sets user status as offline
          this.http.get(BASE_URL + "userOffline").subscribe(function (res) {
            console.log(res); //Deletes authentication token

            sessionStorage.clear(); //Deletes user data

            _this51.user = undefined; //Routes to the home page and reloads

            _this51.go("");
          });
        } //Changes client url

      }, {
        key: "go",
        value: function go(route) {
          this.location.replaceState(route);
          window.location.reload();
        }
      }, {
        key: "acceptFriendRequest",
        value: function acceptFriendRequest(requestId) {
          var _this52 = this;

          var body = {
            requestId: requestId
          };
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
          headers = headers.append('Content-type', 'application/json');
          this.http.post(BASE_URL + "accept-request", body, {
            headers: headers
          }).subscribe(function (res) {
            if (res.status === '0') {
              var index = _this52.user.friendReqIds.indexOf(requestId);

              if (index !== -1) {
                _this52.user.friendReqIds.splice(index, 1);

                _this52.updateUser();
              }

              _this52.user.friendIds.push(requestId);

              _this52.updateUser();
            }
          });
        }
      }, {
        key: "declineFriendRequest",
        value: function declineFriendRequest(requestId) {
          var _this53 = this;

          var body = {
            requestId: requestId
          };
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
          headers = headers.append('Content-type', 'application/json');
          this.http.post(BASE_URL + "decline-request", body, {
            headers: headers
          }).subscribe(function (res) {
            if (res.status === "0") {
              var index = _this53.user.friendReqIds.indexOf(requestId);

              if (index !== -1) {
                _this53.user.friendReqIds.splice(index, 1);

                _this53.updateUser();
              }
            }
          });
        } //Sets profile image

      }, {
        key: "setProfileImage",
        value: function setProfileImage(dataUrl) {
          var _this54 = this;

          var body = {
            imageUrl: dataUrl
          };
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
          headers = headers.append('Content-type', 'application/json');
          this.http.post(BASE_URL + "setProfileImage", body, {
            headers: headers
          }).subscribe(function (res) {
            if (res.status == 1) {
              _this54.user.image = res.data;

              _this54.updateUser();
            }
          });
        } //Set user status as offline

      }, {
        key: "setUserStatusOffline",
        value: function setUserStatusOffline() {
          var _this55 = this;

          return new Promise(function (resolve, reject) {
            _this55.http.get(BASE_URL + "userOffline").subscribe(function (res) {
              console.log(res);
              resolve(0);
            });
          });
        }
      }, {
        key: "updateUser",
        value: function updateUser() {
          this.userUpdated.next(Object.assign({}, this.user));
        }
      }]);

      return UserService;
    }();

    UserService.ɵfac = function UserService_Factory(t) {
      return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]));
    };

    UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: UserService,
      factory: UserService.ɵfac,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: "root"
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/users.ts":
  /*!***********************************!*\
    !*** ./src/app/services/users.ts ***!
    \***********************************/

  /*! exports provided: UsersService */

  /***/
  function srcAppServicesUsersTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsersService", function () {
      return UsersService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var BASE_URL = "https://ddm-rumble-keycloak.herokuapp.com/api/user/";

    var UsersService = /*#__PURE__*/function () {
      function UsersService(http) {
        _classCallCheck(this, UsersService);

        this.http = http;
        this.users = [];
        this.userIds = [];
        this.usersUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
      }

      _createClass(UsersService, [{
        key: "getUsersUpdated",
        value: function getUsersUpdated() {
          return this.usersUpdated.asObservable();
        } //Get user from list of users that have already been retreived from database

      }, {
        key: "getUserSub",
        value: function getUserSub(userId) {
          if (this.users === undefined || this.users === null) return;

          for (var i = 0; i < this.users.length; i++) {
            if (this.users[i]._id === userId) {
              return this.users[i];
            }
          }
        } //Check if user service contains a user sub

      }, {
        key: "containsUserSub",
        value: function containsUserSub(userId) {
          for (var i = 0; i < this.userIds.length; i++) {
            if (this.userIds[i] === userId) return true;
          }

          return false;
        } //Creates list of user subs from a list of userIds

      }, {
        key: "getUsers",
        value: function getUsers(userIds) {
          var _this56 = this;

          if (userIds.length === 0) return;
          console.log("Getting users", userIds);

          for (var i = 0; i < userIds.length; i++) {
            var userId = userIds[i];
            if (this.containsUserSub(userId)) continue;
            this.userIds.push(userId);
            this.getUser(userId).then(function (userSub) {
              _this56.users.push(userSub);

              _this56.updateUsers();
            });
          }
        } //Promise that resolves a userSub

      }, {
        key: "getUser",
        value: function getUser(userId) {
          var _this57 = this;

          return new Promise(function (resolve, reject) {
            if (userId === null || userId === undefined) {
              reject("Bad data");
              return;
            }

            _this57.http.get(BASE_URL + "data/" + userId).subscribe(function (userSub) {
              resolve(userSub);
            });
          });
        } //Updates the users subject

      }, {
        key: "updateUsers",
        value: function updateUsers() {
          if (this.users) {
            this.usersUpdated.next(_toConsumableArray(this.users));
          }
        }
      }]);

      return UsersService;
    }();

    UsersService.ɵfac = function UsersService_Factory(t) {
      return new (t || UsersService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    UsersService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: UsersService,
      factory: UsersService.ɵfac,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: "root"
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
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
    }); // This file can be replaced during build by using the `fileReplacements` array.
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
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
    /*! /Users/Devin/Desktop/DDM/src/main.ts */
    "./src/main.ts");
    /***/
  },

  /***/
  1:
  /*!********************!*\
    !*** ws (ignored) ***!
    \********************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map