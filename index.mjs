// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.1.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";function t(t,e,i){if(!n(t))throw new TypeError(r("invalid argument. First argument must be a function. Value: `%s`.",t));if(!n(e))throw new TypeError(r("invalid argument. Second argument must be a function. Value: `%s`.",e));if(!n(i))throw new TypeError(r("invalid argument. Last argument must be a function. Value: `%s`.",i));function u(n){var r,t,e;if(n)return i(n);for(r=arguments.length,(t=new Array(r))[0]=null,e=1;e<r;e++)t[e]=arguments[e];return i.apply(null,t)}t((function(n){var r,t,a;if(n)return 1===e.length?e(u):e(n,u);for(r=arguments.length,(t=new Array(r))[0]=null,a=1;a<r;a++)t[a]=arguments[a];return i.apply(null,t)}))}export{t as default};
//# sourceMappingURL=index.mjs.map
