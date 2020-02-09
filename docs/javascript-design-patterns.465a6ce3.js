parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Fm0o":[function(require,module,exports) {
"use strict";function e(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}function o(e,o){for(var t=0;t<o.length;t++){var n=o[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function t(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var n=function(){function o(){e(this,o),this.logs=[]}return t(o,[{key:"log",value:function(e){this.logs.push(e),console.log("Logger: ".concat(e)),this.printLogCount()}},{key:"printLogCount",value:function(){console.log("There are ".concat(this.logs.length," logs."))}}]),o}();exports.default=n;
},{}],"nMRB":[function(require,module,exports) {
"use strict";function e(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function n(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function t(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var o=function(){function n(){return e(this,n),null==n.instance&&(this.logs=[],n.instance=this),n.instance}return t(n,[{key:"log",value:function(e){this.logs.push(e),console.log("Logger: ".concat(e)),this.printLogCount()}},{key:"printLogCount",value:function(){console.log("There are ".concat(this.logs.length," logs."))}}]),n}(),r=new o;Object.freeze(r);var i=r;exports.default=i;
},{}],"tu1p":[function(require,module,exports) {
"use strict";function e(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function n(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function t(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var o=function(){function n(){if(e(this,n),n.instance instanceof n)return n.instance;this.logs=[],Object.freeze(this),n.instance=this}return t(n,[{key:"log",value:function(e){this.logs.push(e),console.log("Logger: ".concat(e)),this.printLogCount()}},{key:"printLogCount",value:function(){console.log("There are ".concat(this.logs.length," logs."))}}]),n}();exports.default=o;
},{}],"KCEV":[function(require,module,exports) {

},{}],"pp3e":[function(require,module,exports) {
"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(t,n){return!n||"object"!==e(n)&&"function"!=typeof n?r(t):n}function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function n(e){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function u(e,t,r){return t&&c(e.prototype,t),r&&c(e,r),e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.Subject=exports.ObserverList=void 0,require("./behavioral.css");var f=function(){function e(){s(this,e),this.observerList=[]}return u(e,[{key:"addObserver",value:function(e){-1===this.observerList.indexOf(e)&&this.observerList.push(e)}},{key:"count",value:function(){return this.ObserverList.length}},{key:"get",value:function(e){if(e>-1&&e<this.observerList.length)return this.observerList[e];throw new Error("Observer index provided is not valid.")}},{key:"indexOf",value:function(e){for(var t=0;t<this.observerList.length;t++)if(this.observerList[t]===e)return t;return-1}},{key:"removeAt",value:function(e){this.observerList.splice(e,1)}}]),e}();exports.ObserverList=f;var a=function(){function e(){s(this,e),this.observers=new f}return u(e,[{key:"addObserver",value:function(e){this.observers.addObserver(e)}},{key:"removeObserver",value:function(e){this.observers.removeAt(this.observers.indexOf(e,0))}},{key:"notify",value:function(e){this.observers.observerList.forEach(function(t){t.update(e)})}}]),e}();exports.Subject=a;var l=document.getElementById("inp1"),b=document.getElementById("inp2"),v=document.getElementById("inp3"),d=document.getElementById("scoreboard"),h=document.getElementById("btnIncrementScore"),y=document.getElementById("scoreBoard-score"),p=function(){function e(t){s(this,e),this.content="",this.element=t,this.update("0")}return u(e,[{key:"update",value:function(e){this.content=e,this.element.textContent=this.content}}]),e}(),m=function(e){function r(e){var o;return s(this,r),(o=t(this,n(r).call(this))).score=10,o.element=e,o.btnInc=o.element.querySelector("#btnIncrementScore"),o.divScore=o.element.querySelector("#scoreBoard-score"),o.btnInc.addEventListener("click",function(){o.incrementScore(),o.broadCastScore()}),o.render(),o}return o(r,a),u(r,[{key:"incrementScore",value:function(){this.score++,this.render(),this.broadCastScore()}},{key:"decrementScore",value:function(){this.score--,this.render(),this.broadCastScore()}},{key:"broadCastScore",value:function(){this.notify(this.score)}},{key:"render",value:function(){this.divScore.innerText=this.score}}]),r}(),O=new p(l),S=new p(b),g=new p(v),k=new m(d);k.addObserver(O),k.addObserver(S),k.addObserver(g);
},{"./behavioral.css":"KCEV"}],"Focm":[function(require,module,exports) {
"use strict";var e=a(require("./Creational_Design_Patterns/Singleton/InitialClass_NotSingleton")),t=a(require("./Creational_Design_Patterns/Singleton/Singleton")),n=a(require("./Creational_Design_Patterns/Singleton/Singleton2")),r=o(require("./Behavioral_Design_Patterns/Observer"));function i(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return i=function(){return e},e}function o(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=i();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=r?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}return n.default=e,t&&t.set(e,n),n}function a(e){return e&&e.__esModule?e:{default:e}}window.singleton1=t.default,window.singleton2=n.default,window.LoggerUtility_NotSingleton=e.default,window.Subject=r.Subject,window.ObserverList=r.ObserverList;
},{"./Creational_Design_Patterns/Singleton/InitialClass_NotSingleton":"Fm0o","./Creational_Design_Patterns/Singleton/Singleton":"nMRB","./Creational_Design_Patterns/Singleton/Singleton2":"tu1p","./Behavioral_Design_Patterns/Observer":"pp3e"}]},{},["Focm"], null)
//# sourceMappingURL=/javascript-design-patterns.465a6ce3.js.map