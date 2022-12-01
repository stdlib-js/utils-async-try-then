// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).trythenAsync=t()}(this,(function(){"use strict";var e=/./,t="function"==typeof Object.defineProperty?Object.defineProperty:null;var r,n=Object.defineProperty,o=Object.prototype,i=o.toString,u=o.__defineGetter__,f=o.__defineSetter__,l=o.__lookupGetter__,c=o.__lookupSetter__;r=function(){try{return t({},"x",{}),!0}catch(e){return!1}}()?n:function(e,t,r){var n,a,p,y;if("object"!=typeof e||null===e||"[object Array]"===i.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof r||null===r||"[object Array]"===i.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((a="value"in r)&&(l.call(e,t)||c.call(e,t)?(n=e.__proto__,e.__proto__=o,delete e[t],e[t]=r.value,e.__proto__=n):e[t]=r.value),p="get"in r,y="set"in r,a&&(p||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&u&&u.call(e,t,r.get),y&&f&&f.call(e,t,r.set),e};var a=r;function p(e,t,r){a(e,t,{configurable:!1,enumerable:!1,writable:!1,value:r})}function y(e){return"boolean"==typeof e}var s="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return s&&"symbol"==typeof Symbol.toStringTag}var d=Object.prototype.toString;var v=Object.prototype.hasOwnProperty;var w="function"==typeof Symbol?Symbol.toStringTag:"";var g=b()?function(e){var t,r,n,o,i;if(null==e)return d.call(e);r=e[w],i=w,t=null!=(o=e)&&v.call(o,i);try{e[w]=void 0}catch(t){return d.call(e)}return n=d.call(e),t?e[w]=r:delete e[w],n}:function(e){return d.call(e)},_=Boolean.prototype.toString;var h=b();function m(e){return"object"==typeof e&&(e instanceof Boolean||(h?function(e){try{return _.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===g(e)))}function j(e){return y(e)||m(e)}function S(){return new Function("return this;")()}p(j,"isPrimitive",y),p(j,"isObject",m);var A="object"==typeof self?self:null,E="object"==typeof window?window:null,T="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},O="object"==typeof T?T:null;var B=function(e){if(arguments.length){if(!y(e))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+e+"`.");if(e)return S()}if(A)return A;if(E)return E;if(O)return O;throw new Error("unexpected error. Unable to resolve global object.")}(),P=B.document&&B.document.childNodes,k=Int8Array;function x(){return/^\s*function\s*([^(]*)/i}var C=/^\s*function\s*([^(]*)/i;p(x,"REGEXP",C);var V=Array.isArray?Array.isArray:function(e){return"[object Array]"===g(e)};function G(e){return null!==e&&"object"==typeof e}function L(e){var t,r,n,o;if(("Object"===(r=g(e).slice(8,-1))||"Error"===r)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(t=C.exec(n.toString()))return t[1]}return G(o=e)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":r}p(G,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError("invalid argument. Must provide a function. Value: `"+e+"`.");return function(t){var r,n;if(!V(t))return!1;if(0===(r=t.length))return!1;for(n=0;n<r;n++)if(!1===e(t[n]))return!1;return!0}}(G));var F="function"==typeof e||"object"==typeof k||"function"==typeof P?function(e){return L(e).toLowerCase()}:function(e){var t;return null===e?"null":"object"===(t=typeof e)?L(e).toLowerCase():t};function I(e){return"function"===F(e)}function M(){var e,t=arguments,r=t[0],n="https://stdlib.io/e/"+r+"?";for(e=1;e<t.length;e++)n+="&arg[]="+encodeURIComponent(t[e]);return n}return function(e,t,r){if(!I(e))throw new TypeError(M("0ik3p",e));if(!I(t))throw new TypeError(M("0ik2S",t));if(!I(r))throw new TypeError(M("0ik43",r));function n(e){var t,n,o;if(e)return r(e);for(t=arguments.length,(n=new Array(t))[0]=null,o=1;o<t;o++)n[o]=arguments[o];return r.apply(null,n)}e((function(e){var o,i,u;if(e)return 1===t.length?t(n):t(e,n);for(o=arguments.length,(i=new Array(o))[0]=null,u=1;u<o;u++)i[u]=arguments[u];return r.apply(null,i)}))}}));
//# sourceMappingURL=browser.js.map
