(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"global-wrapper\">\n  <app-header class=\"header\"></app-header>\n  <app-content class=\"content\"></app-content>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/content.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/content.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"topbar\">\n  <div class=\"add-image-section\">\n    <form [formGroup]=\"newPhotoUrl\" (submit)=\"addNewPhoto()\">\n      <div class=\"input\">\n        <span>Add image to the board</span>\n        <input type=\"text\" formControlName=\"text\" />\n      </div>\n      <button\n        type=\"submit\"\n        class=\"add-btn contained\"\n        [disabled]=\"isLoading || isEdit\"\n      >\n        Add\n      </button>\n    </form>\n  </div>\n  <div class=\"tagging-section\">\n    <button\n      class=\"tagging-btn outlined\"\n      (click)=\"runTagging()\"\n      [disabled]=\"isLoading || isEdit\"\n    >\n      Run Tagging API\n    </button>\n  </div>\n  <div class=\"change-board-section\">\n    <div class=\"select\">\n      <span>Selectan existing board</span>\n      <select\n        class=\"board-select\"\n        name=\"boards\"\n        [value]=\"selectedBoard._id\"\n        (change)=\"changeBoard($event.target.value)\"\n        [disabled]=\"isLoading || isEdit\"\n      >\n        <option [value]=\"board._id\" *ngFor=\"let board of boards; let i = index\">\n          {{ board.name === \"default\" ? \"Default board\" : board.name }}\n        </option>\n      </select>\n    </div>\n    <button\n      class=\"new-border-btn outlined\"\n      (click)=\"openPopup()\"\n      [disabled]=\"isLoading || isEdit\"\n    >\n      Create a new board\n    </button>\n\n    <form\n      [formGroup]=\"newBoardTitle\"\n      (submit)=\"createNewBoard()\"\n      class=\"inputNewBoard\"\n      *ngIf=\"isCreateNewBoardOpen\"\n    >\n      <input type=\"text\" formControlName=\"text\" />\n      <button\n        type=\"submit\"\n        class=\"add-btn contained\"\n        [disabled]=\"isLoading || isEdit\"\n      >\n        Add\n      </button>\n      <button (click)=\"closePopup()\" class=\"cancel-btn contained\">Close</button>\n    </form>\n  </div>\n</div>\n<div class=\"images\">\n  <div class=\"image\" *ngFor=\"let image of images; let i = index\">\n    <div class=\"img-block\">\n      <img [src]=\"image.imageUrl\" alt=\"Image example\" />\n      <div class=\"image-tags\">\n        <span *ngFor=\"let tag of image.tags; let idx = index\"\n          >#{{ tag.tag }}</span\n        >\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"actions\" *ngIf=\"isEdit\">\n  <button class=\"cancel outlined\" [disabled]=\"isLoading\" (click)=\"cancel()\">\n    Dismiss Changes\n  </button>\n  <button class=\"save contained\" [disabled]=\"isLoading\" (click)=\"save()\">\n    Save Board\n  </button>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Photo Board</h1>\n<div class=\"loader\" *ngIf=\"isLoading\">\n  <div class=\"lds-ring\">\n    <div></div>\n    <div></div>\n    <div></div>\n    <div></div>\n    <div></div>\n    <div></div>\n    <div></div>\n  </div>\n  <h3>Loading..</h3>\n</div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".global-wrapper {\n  width: 100%;\n  height: 100%;\n  padding: 8px;\n  display: flex;\n  flex-direction: column;\n}\n\n.header {\n  display: flex;\n  position: relative;\n  width: 100%;\n  padding-bottom: 8px;\n  border-bottom: 1px solid #c1c1c1;\n}\n\n.content {\n  padding-top: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RldmVsb3Blci9wcm9qZWN0cy9NRUFOLXRlc3QvY2xpZW50L3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdsb2JhbC13cmFwcGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogOHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1ib3R0b206IDhweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjMWMxYzE7XG59XG5cbi5jb250ZW50IHtcbiAgcGFkZGluZy10b3A6IDMwcHg7XG59XG4iLCIuZ2xvYmFsLXdyYXBwZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiA4cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLWJvdHRvbTogOHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2MxYzFjMTtcbn1cblxuLmNvbnRlbnQge1xuICBwYWRkaW5nLXRvcDogMzBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    ngOnInit() { }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-root",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _content_content_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./content/content.component */ "./src/app/content/content.component.ts");








let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], _content_content_component__WEBPACK_IMPORTED_MODULE_7__["ContentComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "./src/app/content/content.component.scss":
/*!************************************************!*\
  !*** ./src/app/content/content.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".topbar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-bottom: 30px;\n}\n.topbar .add-image-section form {\n  display: flex;\n}\n.topbar .add-image-section .input {\n  position: relative;\n}\n.topbar .add-image-section .input input {\n  width: 250px;\n}\n.topbar .add-image-section .input span {\n  position: absolute;\n  top: -15px;\n  left: 7px;\n  font-size: 11px;\n  font-weight: 300;\n  color: #7f7f7f;\n}\n.topbar .add-image-section .add-btn {\n  width: 70px;\n  margin-left: 15px;\n}\n.topbar .tagging-section button {\n  padding: 5px 12px;\n}\n.topbar .change-board-section {\n  display: flex;\n  position: relative;\n}\n.topbar .change-board-section .select {\n  position: relative;\n}\n.topbar .change-board-section .select select {\n  width: 140px;\n}\n.topbar .change-board-section .select span {\n  position: absolute;\n  top: -15px;\n  left: 7px;\n  font-size: 11px;\n  font-weight: 300;\n  color: #7f7f7f;\n}\n.topbar .change-board-section .new-border-btn {\n  margin-left: 40px;\n}\n.topbar .change-board-section .inputNewBoard {\n  display: flex;\n  position: absolute;\n  bottom: -65px;\n  right: 0;\n  padding: 13px;\n  border: 1px solid #e0e0e0;\n  border-radius: 6px;\n  background: #f3f3f3;\n  z-index: 2;\n}\n.topbar .change-board-section .inputNewBoard input {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0;\n}\n.topbar .change-board-section .inputNewBoard .add-btn {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n  margin-right: 5px;\n}\n.images {\n  display: flex;\n  flex-wrap: wrap;\n  margin-bottom: 30px;\n  position: relative;\n}\n.images .image {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin: 20px 10px;\n}\n.images .image .img-block {\n  display: inline;\n  position: relative;\n  width: auto;\n}\n.images .image .img-block img {\n  max-height: 160px;\n  box-shadow: 20px 20px 80px 0 rgba(16, 5, 48, 0.18);\n}\n.images .image-tags {\n  display: inline-flex;\n  position: absolute;\n  top: 162px;\n  left: 0;\n  max-width: 100%;\n  flex-wrap: wrap;\n}\n.images .image-tags span {\n  font-size: 10px;\n  color: #7f7f7f;\n  margin-right: 4px;\n  visibility: hidden;\n  cursor: pointer;\n  padding: 1px 2px;\n  background: #fff;\n  border-radius: 2px;\n  margin-bottom: 3px;\n}\n.images .image-tags span:nth-child(1), .images .image-tags span:nth-child(2) {\n  visibility: visible;\n}\n.images .image-tags:hover span {\n  visibility: visible;\n  background-color: #fff;\n  z-index: 2;\n}\n.actions {\n  display: flex;\n  justify-content: flex-end;\n  padding-bottom: 20px;\n}\n.actions .cancel {\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RldmVsb3Blci9wcm9qZWN0cy9NRUFOLXRlc3QvY2xpZW50L3NyYy9hcHAvY29udGVudC9jb250ZW50LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb250ZW50L2NvbnRlbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLG9CQUFBO0FDQ0Y7QURFSTtFQUNFLGFBQUE7QUNBTjtBREdJO0VBQ0Usa0JBQUE7QUNETjtBREdNO0VBQ0UsWUFBQTtBQ0RSO0FESU07RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ0ZSO0FETUk7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7QUNKTjtBRFNJO0VBQ0UsaUJBQUE7QUNQTjtBRFdFO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0FDVEo7QURXSTtFQUNFLGtCQUFBO0FDVE47QURXTTtFQUNFLFlBQUE7QUNUUjtBRFlNO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNWUjtBRGNJO0VBQ0UsaUJBQUE7QUNaTjtBRGVJO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFFBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtBQ2JOO0FEZU07RUFDRSw2QkFBQTtFQUNBLDBCQUFBO0FDYlI7QURnQk07RUFDRSx5QkFBQTtFQUNBLDRCQUFBO0VBQ0EsaUJBQUE7QUNkUjtBRG9CQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ2pCRjtBRG1CRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7QUNqQko7QURtQkk7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDakJOO0FEbUJNO0VBQ0UsaUJBQUE7RUFDQSxrREFBQTtBQ2pCUjtBRHFCSTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsT0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FDbkJOO0FEcUJNO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDbkJSO0FEcUJRO0VBRUUsbUJBQUE7QUNwQlY7QUR5QlE7RUFDRSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtBQ3ZCVjtBRDhCQTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0FDM0JGO0FENkJFO0VBQ0Usa0JBQUE7QUMzQkoiLCJmaWxlIjoic3JjL2FwcC9jb250ZW50L2NvbnRlbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9wYmFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcblxuICAuYWRkLWltYWdlLXNlY3Rpb24ge1xuICAgIGZvcm0ge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICB9XG5cbiAgICAuaW5wdXQge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICBpbnB1dCB7XG4gICAgICAgIHdpZHRoOiAyNTBweDtcbiAgICAgIH1cblxuICAgICAgc3BhbiB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAtMTVweDtcbiAgICAgICAgbGVmdDogN3B4O1xuICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgIGNvbG9yOiAjN2Y3ZjdmO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5hZGQtYnRuIHtcbiAgICAgIHdpZHRoOiA3MHB4O1xuICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgfVxuICB9XG5cbiAgLnRhZ2dpbmctc2VjdGlvbiB7XG4gICAgYnV0dG9uIHtcbiAgICAgIHBhZGRpbmc6IDVweCAxMnB4O1xuICAgIH1cbiAgfVxuXG4gIC5jaGFuZ2UtYm9hcmQtc2VjdGlvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAuc2VsZWN0IHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgc2VsZWN0IHtcbiAgICAgICAgd2lkdGg6IDE0MHB4O1xuICAgICAgfVxuXG4gICAgICBzcGFuIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IC0xNXB4O1xuICAgICAgICBsZWZ0OiA3cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgY29sb3I6ICM3ZjdmN2Y7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLm5ldy1ib3JkZXItYnRuIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xuICAgIH1cblxuICAgIC5pbnB1dE5ld0JvYXJkIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBib3R0b206IC02NXB4O1xuICAgICAgcmlnaHQ6IDA7XG4gICAgICBwYWRkaW5nOiAxM3B4O1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2UwZTBlMDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgIGJhY2tncm91bmQ6ICNmM2YzZjM7XG4gICAgICB6LWluZGV4OiAyO1xuXG4gICAgICBpbnB1dCB7XG4gICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcbiAgICAgIH1cblxuICAgICAgLmFkZC1idG4ge1xuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xuICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLmltYWdlcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gIC5pbWFnZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbjogMjBweCAxMHB4O1xuXG4gICAgLmltZy1ibG9jayB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB3aWR0aDogYXV0bztcblxuICAgICAgaW1nIHtcbiAgICAgICAgbWF4LWhlaWdodDogMTYwcHg7XG4gICAgICAgIGJveC1zaGFkb3c6IDIwcHggMjBweCA4MHB4IDAgcmdiYSgxNiwgNSwgNDgsIDAuMTgpO1xuICAgICAgfVxuICAgIH1cblxuICAgICYtdGFncyB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMTYycHg7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgZmxleC13cmFwOiB3cmFwO1xuXG4gICAgICBzcGFuIHtcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICBjb2xvcjogIzdmN2Y3ZjtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA0cHg7XG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBwYWRkaW5nOiAxcHggMnB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDNweDtcblxuICAgICAgICAmOm50aC1jaGlsZCgxKSxcbiAgICAgICAgJjpudGgtY2hpbGQoMikge1xuICAgICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5hY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG5cbiAgLmNhbmNlbCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB9XG59XG4iLCIudG9wYmFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbn1cbi50b3BiYXIgLmFkZC1pbWFnZS1zZWN0aW9uIGZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLnRvcGJhciAuYWRkLWltYWdlLXNlY3Rpb24gLmlucHV0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnRvcGJhciAuYWRkLWltYWdlLXNlY3Rpb24gLmlucHV0IGlucHV0IHtcbiAgd2lkdGg6IDI1MHB4O1xufVxuLnRvcGJhciAuYWRkLWltYWdlLXNlY3Rpb24gLmlucHV0IHNwYW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTE1cHg7XG4gIGxlZnQ6IDdweDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBjb2xvcjogIzdmN2Y3Zjtcbn1cbi50b3BiYXIgLmFkZC1pbWFnZS1zZWN0aW9uIC5hZGQtYnRuIHtcbiAgd2lkdGg6IDcwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuLnRvcGJhciAudGFnZ2luZy1zZWN0aW9uIGJ1dHRvbiB7XG4gIHBhZGRpbmc6IDVweCAxMnB4O1xufVxuLnRvcGJhciAuY2hhbmdlLWJvYXJkLXNlY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4udG9wYmFyIC5jaGFuZ2UtYm9hcmQtc2VjdGlvbiAuc2VsZWN0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnRvcGJhciAuY2hhbmdlLWJvYXJkLXNlY3Rpb24gLnNlbGVjdCBzZWxlY3Qge1xuICB3aWR0aDogMTQwcHg7XG59XG4udG9wYmFyIC5jaGFuZ2UtYm9hcmQtc2VjdGlvbiAuc2VsZWN0IHNwYW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTE1cHg7XG4gIGxlZnQ6IDdweDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBjb2xvcjogIzdmN2Y3Zjtcbn1cbi50b3BiYXIgLmNoYW5nZS1ib2FyZC1zZWN0aW9uIC5uZXctYm9yZGVyLWJ0biB7XG4gIG1hcmdpbi1sZWZ0OiA0MHB4O1xufVxuLnRvcGJhciAuY2hhbmdlLWJvYXJkLXNlY3Rpb24gLmlucHV0TmV3Qm9hcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogLTY1cHg7XG4gIHJpZ2h0OiAwO1xuICBwYWRkaW5nOiAxM3B4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTBlMGUwO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGJhY2tncm91bmQ6ICNmM2YzZjM7XG4gIHotaW5kZXg6IDI7XG59XG4udG9wYmFyIC5jaGFuZ2UtYm9hcmQtc2VjdGlvbiAuaW5wdXROZXdCb2FyZCBpbnB1dCB7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcbn1cbi50b3BiYXIgLmNoYW5nZS1ib2FyZC1zZWN0aW9uIC5pbnB1dE5ld0JvYXJkIC5hZGQtYnRuIHtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbi5pbWFnZXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5pbWFnZXMgLmltYWdlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbjogMjBweCAxMHB4O1xufVxuLmltYWdlcyAuaW1hZ2UgLmltZy1ibG9jayB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogYXV0bztcbn1cbi5pbWFnZXMgLmltYWdlIC5pbWctYmxvY2sgaW1nIHtcbiAgbWF4LWhlaWdodDogMTYwcHg7XG4gIGJveC1zaGFkb3c6IDIwcHggMjBweCA4MHB4IDAgcmdiYSgxNiwgNSwgNDgsIDAuMTgpO1xufVxuLmltYWdlcyAuaW1hZ2UtdGFncyB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTYycHg7XG4gIGxlZnQ6IDA7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuLmltYWdlcyAuaW1hZ2UtdGFncyBzcGFuIHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBjb2xvcjogIzdmN2Y3ZjtcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiAxcHggMnB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIG1hcmdpbi1ib3R0b206IDNweDtcbn1cbi5pbWFnZXMgLmltYWdlLXRhZ3Mgc3BhbjpudGgtY2hpbGQoMSksIC5pbWFnZXMgLmltYWdlLXRhZ3Mgc3BhbjpudGgtY2hpbGQoMikge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuLmltYWdlcyAuaW1hZ2UtdGFnczpob3ZlciBzcGFuIHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgei1pbmRleDogMjtcbn1cblxuLmFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cbi5hY3Rpb25zIC5jYW5jZWwge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/content/content.component.ts":
/*!**********************************************!*\
  !*** ./src/app/content/content.component.ts ***!
  \**********************************************/
/*! exports provided: ContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentComponent", function() { return ContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/api.service */ "./src/app/shared/api.service.ts");




let ContentComponent = class ContentComponent {
    constructor(ApiService) {
        this.ApiService = ApiService;
        this.images = [];
        this.boards = [];
        this.selectedBoard = this.boards.length ? this.boards[0] : "default";
        this.isEdit = false;
        this.isLoading = false;
        this.isCreateNewBoardOpen = false;
    }
    addNewPhoto() {
        if (!this.newPhotoUrl.value.text.length)
            return;
        this.ApiService.sendNewImage(this.newPhotoUrl.value.text, this.selectedBoard).subscribe((res) => {
            this.ApiService.getBoardImage(this.selectedBoard).subscribe((res) => (this.images = res.data));
        });
        this.newPhotoUrl.reset();
    }
    runTagging() {
        this.ApiService.isLoading.next(true);
        this.ApiService.getTags(this.selectedBoard).subscribe((res) => {
            this.ApiService.isLoading.next(false);
            this.images = res.data;
        });
        this.isEdit = true;
    }
    save() {
        this.isEdit = false;
    }
    cancel() {
        this.ApiService.isLoading.next(true);
        this.ApiService.removeTags(this.selectedBoard).subscribe((res) => {
            this.ApiService.isLoading.next(false);
            this.images = res.data;
            this.isEdit = false;
        });
    }
    changeBoard(id) {
        console.log(id);
        this.ApiService.showTheBoard(id).subscribe((res) => {
            this.selectedBoard = res.data.name;
            this.images = res.data.images;
        });
    }
    openPopup() {
        this.isCreateNewBoardOpen = true;
    }
    closePopup() {
        this.isCreateNewBoardOpen = false;
    }
    createNewBoard() {
        if (this.newBoardTitle.value.text.length) {
            this.isCreateNewBoardOpen = false;
            this.ApiService.createNewBoard(this.newBoardTitle.value.text).subscribe((resp) => {
                this.ApiService.getAllBoards().subscribe((res) => {
                    this.boards = res.data;
                    this.changeBoard(res.data[0]._id);
                });
            });
            this.newBoardTitle.reset();
        }
    }
    ngOnInit() {
        this.ApiService.getBoardImage("default").subscribe((res) => (this.images = res.data));
        this.newPhotoUrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            text: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
        });
        this.newBoardTitle = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            text: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
        });
        this.ApiService.isLoading.subscribe((isLoading) => (this.isLoading = isLoading));
        this.ApiService.getAllBoards().subscribe((res) => (this.boards = res.data));
    }
};
ContentComponent.ctorParameters = () => [
    { type: _shared_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
];
ContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-content",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./content.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/content.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./content.component.scss */ "./src/app/content/content.component.scss")).default]
    })
], ContentComponent);



/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h1 {\n  color: #7f7f7f;\n  font-size: 24px;\n  font-weight: 400;\n}\n\n.loader {\n  display: flex;\n  align-items: center;\n  margin-left: 20px;\n}\n\n.loader h3 {\n  font-weight: 300;\n  color: #7d7d7d;\n}\n\n.loader .lds-ring {\n  display: inline-block;\n  position: relative;\n  width: 30px;\n  height: 30px;\n}\n\n.loader .lds-ring div {\n  box-sizing: border-box;\n  display: block;\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  margin: 5px;\n  border: 1px solid #000;\n  border-radius: 50%;\n  -webkit-animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n          animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n  border-color: #000 transparent transparent transparent;\n}\n\n.loader .lds-ring div:nth-child(1) {\n  -webkit-animation-delay: -0.45s;\n          animation-delay: -0.45s;\n}\n\n.loader .lds-ring div:nth-child(2) {\n  -webkit-animation-delay: -0.4s;\n          animation-delay: -0.4s;\n}\n\n.loader .lds-ring div:nth-child(3) {\n  -webkit-animation-delay: -0.35s;\n          animation-delay: -0.35s;\n}\n\n.loader .lds-ring div:nth-child(4) {\n  -webkit-animation-delay: -0.3s;\n          animation-delay: -0.3s;\n}\n\n.loader .lds-ring div:nth-child(5) {\n  -webkit-animation-delay: -0.25s;\n          animation-delay: -0.25s;\n}\n\n.loader .lds-ring div:nth-child(6) {\n  -webkit-animation-delay: -0.2s;\n          animation-delay: -0.2s;\n}\n\n.loader .lds-ring div:nth-child(7) {\n  -webkit-animation-delay: -0.15s;\n          animation-delay: -0.15s;\n}\n\n@-webkit-keyframes lds-ring {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes lds-ring {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RldmVsb3Blci9wcm9qZWN0cy9NRUFOLXRlc3QvY2xpZW50L3NyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FEQ0U7RUFDRSxnQkFBQTtFQUNBLGNBQUE7QUNDSjs7QURFRTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0FKOztBREVFO0VBQ0Usc0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0VBQUE7VUFBQSw4REFBQTtFQUNBLHNEQUFBO0FDQUo7O0FERUU7RUFDRSwrQkFBQTtVQUFBLHVCQUFBO0FDQUo7O0FERUU7RUFDRSw4QkFBQTtVQUFBLHNCQUFBO0FDQUo7O0FERUU7RUFDRSwrQkFBQTtVQUFBLHVCQUFBO0FDQUo7O0FERUU7RUFDRSw4QkFBQTtVQUFBLHNCQUFBO0FDQUo7O0FERUU7RUFDRSwrQkFBQTtVQUFBLHVCQUFBO0FDQUo7O0FERUU7RUFDRSw4QkFBQTtVQUFBLHNCQUFBO0FDQUo7O0FERUU7RUFDRSwrQkFBQTtVQUFBLHVCQUFBO0FDQUo7O0FERUU7RUFDRTtJQUNFLHVCQUFBO0VDQUo7RURFRTtJQUNFLHlCQUFBO0VDQUo7QUFDRjs7QURORTtFQUNFO0lBQ0UsdUJBQUE7RUNBSjtFREVFO0lBQ0UseUJBQUE7RUNBSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgxIHtcbiAgY29sb3I6ICM3ZjdmN2Y7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLmxvYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuXG4gIGgzIHtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGNvbG9yOiAjN2Q3ZDdkO1xuICB9XG5cbiAgLmxkcy1yaW5nIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgfVxuICAubGRzLXJpbmcgZGl2IHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgbWFyZ2luOiA1cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYW5pbWF0aW9uOiBsZHMtcmluZyAxLjJzIGN1YmljLWJlemllcigwLjUsIDAsIDAuNSwgMSkgaW5maW5pdGU7XG4gICAgYm9yZGVyLWNvbG9yOiAjMDAwIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xuICB9XG4gIC5sZHMtcmluZyBkaXY6bnRoLWNoaWxkKDEpIHtcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjQ1cztcbiAgfVxuICAubGRzLXJpbmcgZGl2Om50aC1jaGlsZCgyKSB7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC40cztcbiAgfVxuICAubGRzLXJpbmcgZGl2Om50aC1jaGlsZCgzKSB7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4zNXM7XG4gIH1cbiAgLmxkcy1yaW5nIGRpdjpudGgtY2hpbGQoNCkge1xuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuM3M7XG4gIH1cbiAgLmxkcy1yaW5nIGRpdjpudGgtY2hpbGQoNSkge1xuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMjVzO1xuICB9XG4gIC5sZHMtcmluZyBkaXY6bnRoLWNoaWxkKDYpIHtcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjJzO1xuICB9XG4gIC5sZHMtcmluZyBkaXY6bnRoLWNoaWxkKDcpIHtcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjE1cztcbiAgfVxuICBAa2V5ZnJhbWVzIGxkcy1yaW5nIHtcbiAgICAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgIH1cbiAgfVxufVxuIiwiaDEge1xuICBjb2xvcjogIzdmN2Y3ZjtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4ubG9hZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG4ubG9hZGVyIGgzIHtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgY29sb3I6ICM3ZDdkN2Q7XG59XG4ubG9hZGVyIC5sZHMtcmluZyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xufVxuLmxvYWRlciAubGRzLXJpbmcgZGl2IHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgbWFyZ2luOiA1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYW5pbWF0aW9uOiBsZHMtcmluZyAxLjJzIGN1YmljLWJlemllcigwLjUsIDAsIDAuNSwgMSkgaW5maW5pdGU7XG4gIGJvcmRlci1jb2xvcjogIzAwMCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcbn1cbi5sb2FkZXIgLmxkcy1yaW5nIGRpdjpudGgtY2hpbGQoMSkge1xuICBhbmltYXRpb24tZGVsYXk6IC0wLjQ1cztcbn1cbi5sb2FkZXIgLmxkcy1yaW5nIGRpdjpudGgtY2hpbGQoMikge1xuICBhbmltYXRpb24tZGVsYXk6IC0wLjRzO1xufVxuLmxvYWRlciAubGRzLXJpbmcgZGl2Om50aC1jaGlsZCgzKSB7XG4gIGFuaW1hdGlvbi1kZWxheTogLTAuMzVzO1xufVxuLmxvYWRlciAubGRzLXJpbmcgZGl2Om50aC1jaGlsZCg0KSB7XG4gIGFuaW1hdGlvbi1kZWxheTogLTAuM3M7XG59XG4ubG9hZGVyIC5sZHMtcmluZyBkaXY6bnRoLWNoaWxkKDUpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4yNXM7XG59XG4ubG9hZGVyIC5sZHMtcmluZyBkaXY6bnRoLWNoaWxkKDYpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4ycztcbn1cbi5sb2FkZXIgLmxkcy1yaW5nIGRpdjpudGgtY2hpbGQoNykge1xuICBhbmltYXRpb24tZGVsYXk6IC0wLjE1cztcbn1cbkBrZXlmcmFtZXMgbGRzLXJpbmcge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/api.service */ "./src/app/shared/api.service.ts");



let HeaderComponent = class HeaderComponent {
    constructor(ApiService) {
        this.ApiService = ApiService;
        this.isLoading = false;
    }
    ngOnInit() {
        this.ApiService.isLoading.subscribe((isLoading) => {
            this.isLoading = isLoading;
        });
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _shared_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-header",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/shared/api.service.ts":
/*!***************************************!*\
  !*** ./src/app/shared/api.service.ts ***!
  \***************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let ApiService = class ApiService {
    constructor(http) {
        this.http = http;
        this.isLoading = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        // private apiUrl = "http://localhost:3001" // dev
        this.apiUrl = "http://photoboard-test.eu-4.evennode.com";
    }
    getAllImages() {
        return this.http.get(`${this.apiUrl}/api/images`);
    }
    getBoardImage(boardName = "default") {
        return this.http.get(`${this.apiUrl}/api/images/board?name=${boardName}`);
    }
    getTags(boardName = "default") {
        return this.http.get(`${this.apiUrl}/api/images/board/${boardName}`);
    }
    removeTags(boardName = "default") {
        return this.http.delete(`${this.apiUrl}/api/images/board/${boardName}`);
    }
    sendNewImage(imageUrl, board = "default") {
        const obj = {
            imageUrl,
            board,
            tags: [],
        };
        return this.http.post("${this.apiUrl}/api/images", obj);
    }
    createNewBoard(boardName) {
        return this.http.post(`${this.apiUrl}/api/boards`, {
            name: boardName,
        });
    }
    showTheBoard(id) {
        return this.http.get(`${this.apiUrl}/api/boards/${id}`);
    }
    getAllBoards() {
        return this.http.get(`${this.apiUrl}/api/boards`);
    }
};
ApiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], ApiService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/developer/projects/MEAN-test/client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map