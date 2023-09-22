// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).trythenAsync=r()}(this,(function(){"use strict";var e=/./,r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty;function n(e){return"number"==typeof e}function i(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function a(e,r,t){var n=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+i(a):i(a)+e,n&&(e="-"+e)),e}var o=String.prototype.toLowerCase,c=String.prototype.toUpperCase;function s(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!n(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=a(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=a(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===c.call(e.specifier)?c.call(t):o.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function l(e){return"string"==typeof e}var u=Math.abs,p=String.prototype.toLowerCase,f=String.prototype.toUpperCase,g=String.prototype.replace,d=/e\+(\d)$/,h=/e-(\d)$/,y=/^(\d+)$/,b=/^(\d+)e/,w=/\.0$/,v=/\.0*e/,m=/(\..*[^0])0*e/;function _(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!n(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":u(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=g.call(t,m,"$1e"),t=g.call(t,v,"e"),t=g.call(t,w,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=g.call(t,d,"e+0$1"),t=g.call(t,h,"e-0$1"),e.alternate&&(t=g.call(t,y,"$1."),t=g.call(t,b,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===f.call(e.specifier)?f.call(t):p.call(t)}function E(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function j(e,r,t){var n=r-e.length;return n<0?e:e=t?e+E(n):E(n)+e}var x=String.fromCharCode,S=isNaN,k=Array.isArray;function T(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function A(e){var r,t,n,i,o,c,u,p,f;if(!k(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(c="",u=1,p=0;p<e.length;p++)if(l(n=e[p]))c+=n;else{if(r=void 0!==n.precision,!(n=T(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+p+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(i=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,S(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,S(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=s(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!S(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=S(o)?String(n.arg):x(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=_(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=a(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=j(n.arg,n.width,n.padRight)),c+=n.arg||"",u+=1}return c}var V=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function $(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function F(e){var r,t,n,i;for(t=[],i=0,n=V.exec(e);n;)(r=e.slice(i,V.lastIndex-n[0].length)).length&&t.push(r),t.push($(n)),i=V.lastIndex,n=V.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function O(e){return"string"==typeof e}function I(e){var r,t,n;if(!O(e))throw new TypeError(I("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=F(e),(t=new Array(arguments.length))[0]=r,n=1;n<t.length;n++)t[n]=arguments[n];return A.apply(null,t)}var C,R=Object.prototype,P=R.toString,G=R.__defineGetter__,Z=R.__defineSetter__,L=R.__lookupGetter__,W=R.__lookupSetter__;C=function(){try{return r({},"x",{}),!0}catch(e){return!1}}()?t:function(e,r,t){var n,i,a,o;if("object"!=typeof e||null===e||"[object Array]"===P.call(e))throw new TypeError(I("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===P.call(t))throw new TypeError(I("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(L.call(e,r)||W.call(e,r)?(n=e.__proto__,e.__proto__=R,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&G&&G.call(e,r,t.get),o&&Z&&Z.call(e,r,t.set),e};var B=C;function U(e,r,t){B(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function N(e){return"boolean"==typeof e}function X(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var M=X();function z(){return M&&"symbol"==typeof Symbol.toStringTag}var J=Object.prototype.toString;var q=Object.prototype.hasOwnProperty;var H="function"==typeof Symbol?Symbol:void 0,D="function"==typeof H?H.toStringTag:"";var K=z()?function(e){var r,t,n,i,a;if(null==e)return J.call(e);t=e[D],a=D,r=null!=(i=e)&&q.call(i,a);try{e[D]=void 0}catch(r){return J.call(e)}return n=J.call(e),r?e[D]=t:delete e[D],n}:function(e){return J.call(e)},Q=Boolean,Y=Boolean.prototype.toString;var ee=z();function re(e){return"object"==typeof e&&(e instanceof Q||(ee?function(e){try{return Y.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===K(e)))}function te(e){return N(e)||re(e)}function ne(){return new Function("return this;")()}U(te,"isPrimitive",N),U(te,"isObject",re);var ie="object"==typeof self?self:null,ae="object"==typeof window?window:null,oe="object"==typeof global?global:null,ce="object"==typeof globalThis?globalThis:null;var se=function(e){if(arguments.length){if(!N(e))throw new TypeError(I("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return ne()}if(ce)return ce;if(ie)return ie;if(ae)return ae;if(oe)return oe;throw new Error("unexpected error. Unable to resolve global object.")}(),le=se.document&&se.document.childNodes,ue=Int8Array;var pe=X();var fe=Object.prototype.toString;var ge=Object.prototype.hasOwnProperty;var de="function"==typeof H?H.toStringTag:"";var he=pe&&"symbol"==typeof Symbol.toStringTag?function(e){var r,t,n,i,a;if(null==e)return fe.call(e);t=e[de],a=de,r=null!=(i=e)&&ge.call(i,a);try{e[de]=void 0}catch(r){return fe.call(e)}return n=fe.call(e),r?e[de]=t:delete e[de],n}:function(e){return fe.call(e)},ye="function"==typeof Object.defineProperty?Object.defineProperty:null;var be=Object.defineProperty;function we(e){return"number"==typeof e}function ve(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function me(e,r,t){var n=!1,i=r-e.length;return i<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+ve(i):ve(i)+e,n&&(e="-"+e)),e}var _e=String.prototype.toLowerCase,Ee=String.prototype.toUpperCase;function je(e){var r,t,n;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,n=parseInt(t,10),!isFinite(n)){if(!we(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===e.specifier||10!==r)&&(n=4294967295+n+1),n<0?(t=(-n).toString(r),e.precision&&(t=me(t,e.precision,e.padRight)),t="-"+t):(t=n.toString(r),n||e.precision?e.precision&&(t=me(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===Ee.call(e.specifier)?Ee.call(t):_e.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function xe(e){return"string"==typeof e}var Se=Math.abs,ke=String.prototype.toLowerCase,Te=String.prototype.toUpperCase,Ae=String.prototype.replace,Ve=/e\+(\d)$/,$e=/e-(\d)$/,Fe=/^(\d+)$/,Oe=/^(\d+)e/,Ie=/\.0$/,Ce=/\.0*e/,Re=/(\..*[^0])0*e/;function Pe(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!we(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":Se(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=Ae.call(t,Re,"$1e"),t=Ae.call(t,Ce,"e"),t=Ae.call(t,Ie,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=Ae.call(t,Ve,"e+0$1"),t=Ae.call(t,$e,"e-0$1"),e.alternate&&(t=Ae.call(t,Fe,"$1."),t=Ae.call(t,Oe,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===Te.call(e.specifier)?Te.call(t):ke.call(t)}function Ge(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function Ze(e,r,t){var n=r-e.length;return n<0?e:e=t?e+Ge(n):Ge(n)+e}var Le=String.fromCharCode,We=isNaN,Be=Array.isArray;function Ue(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function Ne(e){var r,t,n,i,a,o,c,s,l;if(!Be(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if(xe(n=e[s]))o+=n;else{if(r=void 0!==n.precision,!(n=Ue(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,l=0;l<t.length;l++)switch(i=t.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,We(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,We(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=je(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!We(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=We(a)?String(n.arg):Le(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=Pe(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=me(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=Ze(n.arg,n.width,n.padRight)),o+=n.arg||"",c+=1}return o}var Xe=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Me(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function ze(e){var r,t,n,i;for(t=[],i=0,n=Xe.exec(e);n;)(r=e.slice(i,Xe.lastIndex-n[0].length)).length&&t.push(r),t.push(Me(n)),i=Xe.lastIndex,n=Xe.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function Je(e){return"string"==typeof e}function qe(e){var r,t,n;if(!Je(e))throw new TypeError(qe("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=ze(e),(t=new Array(arguments.length))[0]=r,n=1;n<t.length;n++)t[n]=arguments[n];return Ne.apply(null,t)}var He,De=Object.prototype,Ke=De.toString,Qe=De.__defineGetter__,Ye=De.__defineSetter__,er=De.__lookupGetter__,rr=De.__lookupSetter__;He=function(){try{return ye({},"x",{}),!0}catch(e){return!1}}()?be:function(e,r,t){var n,i,a,o;if("object"!=typeof e||null===e||"[object Array]"===Ke.call(e))throw new TypeError(qe("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===Ke.call(t))throw new TypeError(qe("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(er.call(e,r)||rr.call(e,r)?(n=e.__proto__,e.__proto__=De,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&Qe&&Qe.call(e,r,t.get),o&&Ye&&Ye.call(e,r,t.set),e};var tr=He;function nr(e,r,t){tr(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function ir(){return/^\s*function\s*([^(]*)/i}var ar=/^\s*function\s*([^(]*)/i;nr(ir,"REGEXP",ar);var or=Array.isArray?Array.isArray:function(e){return"[object Array]"===he(e)};function cr(e){return null!==e&&"object"==typeof e}function sr(e){var r,t,n,i;if(("Object"===(t=he(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=ar.exec(n.toString()))return r[1]}return cr(i=e)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}nr(cr,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(qe("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!or(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(cr));var lr="function"==typeof e||"object"==typeof ue||"function"==typeof le?function(e){return sr(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?sr(e).toLowerCase():r};function ur(e){return"function"===lr(e)}function pr(){var e,r=arguments,t=r[0],n="https://stdlib.io/e/"+t+"?";for(e=1;e<r.length;e++)n+="&arg[]="+encodeURIComponent(r[e]);return n}return function(e,r,t){if(!ur(e))throw new TypeError(pr("1Rn3c,J9",e));if(!ur(r))throw new TypeError(pr("1Rn2H,G6",r));if(!ur(t))throw new TypeError(pr("1Rn3q,JV",t));function n(e){var r,n,i;if(e)return t(e);for(r=arguments.length,(n=new Array(r))[0]=null,i=1;i<r;i++)n[i]=arguments[i];return t.apply(null,n)}e((function(e){var i,a,o;if(e)return 1===r.length?r(n):r(e,n);for(i=arguments.length,(a=new Array(i))[0]=null,o=1;o<i;o++)a[o]=arguments[o];return t.apply(null,a)}))}}));
//# sourceMappingURL=index.js.map
