(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{128:function(t,e,r){"use strict";r.r(e);var n,o,a=r(0),i=r.n(a),c=r(78),l=r.n(c),u=(r(95),r(97),r(20)),s=r(13),h=r(21),f=r(12),p=r(180),d=r(174),m=r(181),v=r(182),g=r(183),y={upcoming:"Upcoming",popular:"Most Popular",toprated:"Top Rated",trending:"Trending"},b=r(166),w=r(167),E=r(168),x=r(172),L=r(176),O={home:"/",categories:"/categories",movie:"/movie",movies:"/movies",topRated:"/movies",upcoming:"/movies",nowPlaying:"/movies",invalid:"/*"},j=r(36),_=function(t){var e=t.open,r=t.handleClose,n=Boolean(e);return i.a.createElement(x.a,{id:"basic-menu",anchorEl:e,open:n,onClose:r,MenuListProps:{"aria-labelledby":"basic-button"}},i.a.createElement(j.b,{to:"".concat(O.categories,"?category=popular"),style:{textDecoration:"none",color:"inherit"}},i.a.createElement(L.a,{onClick:r},"Popular")),i.a.createElement(j.b,{to:"".concat(O.categories,"?category=toprated"),style:{textDecoration:"none",color:"inherit"}},i.a.createElement(L.a,{onClick:r},"Top Rated")),i.a.createElement(j.b,{to:"".concat(O.categories,"?category=upcoming"),style:{textDecoration:"none",color:"inherit"}},i.a.createElement(L.a,{onClick:r},"Upcoming")),i.a.createElement(j.b,{to:"".concat(O.categories,"?category=trending"),style:{textDecoration:"none",color:"inherit"}},i.a.createElement(L.a,{onClick:r},"Trending Movies")))},k=r(2),F=Object(f.a)(p.a)(n||(n=Object(h.a)(["\nbackground: #121212;\nmin-height: 56px !important;\npadding: 0 100px !important;\njustify-content: space-between;\n& > * {\n    padding: 0 15px;\n}\n& > div {\n    display: flex;\n    align-items: center;\n    cursor: pointer;\n    & > p {\n        font-size: 14px;\n        font-weight: 600;\n    }\n}\n& > p {\n    font-size: 14px;\n    font-weight: 600;\n}\n"]))),P=Object(f.a)(d.a)(o||(o=Object(h.a)(["\nbackground: #FFFFFF;\nheight: 30px;\nwidth: 55%;\nborder-radius: 5px;\n"]))),S=Object(f.a)("img")({width:64}),N=function(){var t=Object(a.useState)(null),e=Object(s.a)(t,2),r=e[0],n=e[1],o=Object(k.o)();return i.a.createElement(m.a,{position:"static"},i.a.createElement(F,null,i.a.createElement(S,{src:" https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/512px-IMDB_Logo_2016.svg.png",alt:"logo",onClick:function(){return o(O.home)}}),i.a.createElement(v.a,{onClick:function(t){n(t.currentTarget)}},i.a.createElement(b.a,null),i.a.createElement(g.a,null,"Menu")),i.a.createElement(_,{open:r,handleClose:function(){n(null)}}),i.a.createElement(P,null),i.a.createElement(g.a,null,"IMDb",i.a.createElement(v.a,{component:"span",color:"#4dabf5"},"Pro")),i.a.createElement(v.a,null,i.a.createElement(w.a,null),i.a.createElement(g.a,null,"Watchlist")),i.a.createElement(g.a,null,"Sign In"),i.a.createElement(v.a,null,i.a.createElement(g.a,null,"EN"),i.a.createElement(E.a,null))))},T=r(171);function G(){G=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(F){l=function(t,e,r){return t[e]=r}}function u(t,e,r,o){var a=e&&e.prototype instanceof f?e:f,i=Object.create(a.prototype),c=new j(o||[]);return n(i,"_invoke",{value:E(t,r,c)}),i}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(F){return{type:"throw",arg:F}}}t.wrap=u;var h={};function f(){}function p(){}function d(){}var m={};l(m,a,function(){return this});var v=Object.getPrototypeOf,g=v&&v(v(_([])));g&&g!==e&&r.call(g,a)&&(m=g);var y=d.prototype=f.prototype=Object.create(m);function b(t){["next","throw","return"].forEach(function(e){l(t,e,function(t){return this._invoke(e,t)})})}function w(t,e){var o;n(this,"_invoke",{value:function(n,a){function i(){return new e(function(o,i){!function n(o,a,i,c){var l=s(t[o],t,a);if("throw"!==l.type){var u=l.arg,h=u.value;return h&&"object"==typeof h&&r.call(h,"__await")?e.resolve(h.__await).then(function(t){n("next",t,i,c)},function(t){n("throw",t,i,c)}):e.resolve(h).then(function(t){u.value=t,i(u)},function(t){return n("throw",t,i,c)})}c(l.arg)}(n,a,o,i)})}return o=o?o.then(i,i):i()}})}function E(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return k()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=x(i,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=s(t,e,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===h)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}function x(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),h;var o=s(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,h;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function _(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:k}}function k(){return{value:void 0,done:!0}}return p.prototype=d,n(y,"constructor",{value:d,configurable:!0}),n(d,"constructor",{value:p,configurable:!0}),p.displayName=l(d,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,l(t,c,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},b(w.prototype),l(w.prototype,i,function(){return this}),t.AsyncIterator=w,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new w(u(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then(function(t){return t.done?t.value:i.next()})},b(y),l(y,c,"Generator"),l(y,a,function(){return this}),l(y,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=_,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),l=r.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,h):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:_(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},t}var C,I,D,M,A,B,Y=function(){var t=Object(u.a)(G().mark(function t(e){var r;return G().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,T.a.get(e);case 3:return r=t.sent,t.abrupt("return",r.data);case 7:return t.prev=7,t.t0=t.catch(0),console.log("Error while calling the API",t.t0.message),t.abrupt("return",t.t0.response.data);case 11:case"end":return t.stop()}},t,null,[[0,7]])}));return function(e){return t.apply(this,arguments)}}(),z=r(50),R=r.n(z),U=(r(77),{desktop:{breakpoint:{max:3e3,min:1024},items:1},tablet:{breakpoint:{max:1024,min:464},items:1},mobile:{breakpoint:{max:464,min:0},items:1}}),J=Object(f.a)("img")({width:"100%",height:500}),W=function(t){var e=t.movies;return i.a.createElement(v.a,{style:{width:"65%",height:"75%"}},i.a.createElement(R.a,{responsive:U,swipeable:!1,draggable:!1,infinite:!0,autoPlay:!0,autoPlaySpeed:4e3,slidesToSlide:1},e.map(function(t){return i.a.createElement(J,{src:"https://image.tmdb.org/t/p/original/".concat(t.backdrop_path),alt:"banner"})})))},H=r(184),q=r(185),K=Object(f.a)(v.a)(C||(C=Object(h.a)(["\n  width: 35%;\n  display: flex;\n  flex-direction: column;\n  align-items: baseline;\n  padding-left: 20px;\n  & > p {\n    color: #f5c518;\n    font-weight: 600;\n    font-size: 18px;\n    margin-bottom: 10px;\n  }\n"]))),Q=Object(f.a)("img")({width:88}),V=Object(f.a)(v.a)(I||(I=Object(h.a)(["\n  color: #ffffff;\n  display: flex;\n"]))),X=function(t){var e=t.movies;return i.a.createElement(H.a,{sx:{maxWidth:550,maxHeight:500,bgcolor:"#121212"}},i.a.createElement(q.a,null,i.a.createElement(K,null,i.a.createElement(g.a,null,"Up Next"),e.splice(0,3).map(function(t){return i.a.createElement(V,null,i.a.createElement(Q,{sx:{paddingTop:2},src:"https://image.tmdb.org/t/p/original/".concat(t.poster_path),alt:"poster"}),i.a.createElement(g.a,{sx:{paddingLeft:5,paddingTop:5}},t.original_title))}))))},Z=Object(f.a)("img")(D||(D=Object(h.a)(["\nwidth: 100%;\nmargin-top: 20px;\n"]))),$=Object(f.a)(g.a)(M||(M=Object(h.a)(["\ncolor: #FFFFFF;\ndisplay: flex;\n"]))),tt={desktop:{breakpoint:{max:3e3,min:1024},items:3},tablet:{breakpoint:{max:1024,min:464},items:3},mobile:{breakpoint:{max:464,min:0},items:1}},et=function(t){var e=t.movies;return i.a.createElement(v.a,{styled:{marginTop:20}},i.a.createElement(R.a,{swipeable:!1,draggable:!1,showDots:!1,responsive:tt,infinite:!0,autoPlay:!0,autoPlaySpeed:3e3,keyBoardControl:!0,slidesToSlide:1,containerClass:"carousel-container",dotListClass:"custom-dot-list-style",itemClass:"carousel-item-padding-40-px"},e.map(function(t){return i.a.createElement(i.a.Fragment,null,i.a.createElement(Z,{key:t.id,src:"https://image.tmdb.org/t/p/original/".concat(t.backdrop_path)}),i.a.createElement($,null,t.original_title))})))};function rt(){rt=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(F){l=function(t,e,r){return t[e]=r}}function u(t,e,r,o){var a=e&&e.prototype instanceof f?e:f,i=Object.create(a.prototype),c=new j(o||[]);return n(i,"_invoke",{value:E(t,r,c)}),i}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(F){return{type:"throw",arg:F}}}t.wrap=u;var h={};function f(){}function p(){}function d(){}var m={};l(m,a,function(){return this});var v=Object.getPrototypeOf,g=v&&v(v(_([])));g&&g!==e&&r.call(g,a)&&(m=g);var y=d.prototype=f.prototype=Object.create(m);function b(t){["next","throw","return"].forEach(function(e){l(t,e,function(t){return this._invoke(e,t)})})}function w(t,e){var o;n(this,"_invoke",{value:function(n,a){function i(){return new e(function(o,i){!function n(o,a,i,c){var l=s(t[o],t,a);if("throw"!==l.type){var u=l.arg,h=u.value;return h&&"object"==typeof h&&r.call(h,"__await")?e.resolve(h.__await).then(function(t){n("next",t,i,c)},function(t){n("throw",t,i,c)}):e.resolve(h).then(function(t){u.value=t,i(u)},function(t){return n("throw",t,i,c)})}c(l.arg)}(n,a,o,i)})}return o=o?o.then(i,i):i()}})}function E(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return k()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=x(i,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=s(t,e,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===h)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}function x(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),h;var o=s(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,h;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function _(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:k}}function k(){return{value:void 0,done:!0}}return p.prototype=d,n(y,"constructor",{value:d,configurable:!0}),n(d,"constructor",{value:p,configurable:!0}),p.displayName=l(d,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,l(t,c,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},b(w.prototype),l(w.prototype,i,function(){return this}),t.AsyncIterator=w,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new w(u(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then(function(t){return t.done?t.value:i.next()})},b(y),l(y,c,"Generator"),l(y,a,function(){return this}),l(y,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=_,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),l=r.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,h):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:_(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},t}var nt,ot,at,it=Object(f.a)(v.a)(A||(A=Object(h.a)(["\n  display: flex;\n  padding: 20px 0;\n"]))),ct=Object(f.a)(v.a)(B||(B=Object(h.a)(["\n  padding: 0 100px;\n"]))),lt=function(){var t=Object(a.useState)([]),e=Object(s.a)(t,2),r=e[0],n=e[1];return Object(a.useEffect)(function(){!function(){var t=Object(u.a)(rt().mark(function t(){var e;return rt().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Y("https://api.themoviedb.org/3/movie/now_playing?api_key=98cd5271e22b3a17151073b617759235");case 2:e=t.sent,n(e.results);case 4:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}()()},[]),i.a.createElement(i.a.Fragment,null,i.a.createElement(N,null),i.a.createElement(ct,null,i.a.createElement(it,null,i.a.createElement(W,{movies:r}),i.a.createElement(X,{movies:r})),i.a.createElement(et,{movies:r})))},ut=r(170),st=r(169),ht=r(179),ft=r(175),pt=Object(f.a)(ht.a)(nt||(nt=Object(h.a)(["\n  display: flex;\n"]))),dt=Object(f.a)("img")({width:47}),mt=function(t){var e=t.movies;return i.a.createElement(i.a.Fragment,null,e.map(function(t){return i.a.createElement(pt,{key:t.id},i.a.createElement(ft.a,null,i.a.createElement(dt,{src:"https://image.tmdb.org/t/p/original/".concat(t.poster_path)})),i.a.createElement(ft.a,null,i.a.createElement(g.a,null,t.original_title)),i.a.createElement(ft.a,null,i.a.createElement(st.a,{color:"warning"}),i.a.createElement(g.a,null,t.vote_average)),i.a.createElement(ft.a,null,i.a.createElement(g.a,null,t.release_date)))}))};function vt(){vt=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(F){l=function(t,e,r){return t[e]=r}}function u(t,e,r,o){var a=e&&e.prototype instanceof f?e:f,i=Object.create(a.prototype),c=new j(o||[]);return n(i,"_invoke",{value:E(t,r,c)}),i}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(F){return{type:"throw",arg:F}}}t.wrap=u;var h={};function f(){}function p(){}function d(){}var m={};l(m,a,function(){return this});var v=Object.getPrototypeOf,g=v&&v(v(_([])));g&&g!==e&&r.call(g,a)&&(m=g);var y=d.prototype=f.prototype=Object.create(m);function b(t){["next","throw","return"].forEach(function(e){l(t,e,function(t){return this._invoke(e,t)})})}function w(t,e){var o;n(this,"_invoke",{value:function(n,a){function i(){return new e(function(o,i){!function n(o,a,i,c){var l=s(t[o],t,a);if("throw"!==l.type){var u=l.arg,h=u.value;return h&&"object"==typeof h&&r.call(h,"__await")?e.resolve(h.__await).then(function(t){n("next",t,i,c)},function(t){n("throw",t,i,c)}):e.resolve(h).then(function(t){u.value=t,i(u)},function(t){return n("throw",t,i,c)})}c(l.arg)}(n,a,o,i)})}return o=o?o.then(i,i):i()}})}function E(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return k()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=x(i,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=s(t,e,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===h)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}function x(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),h;var o=s(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,h;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function _(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:k}}function k(){return{value:void 0,done:!0}}return p.prototype=d,n(y,"constructor",{value:d,configurable:!0}),n(d,"constructor",{value:p,configurable:!0}),p.displayName=l(d,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,l(t,c,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},b(w.prototype),l(w.prototype,i,function(){return this}),t.AsyncIterator=w,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new w(u(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then(function(t){return t.done?t.value:i.next()})},b(y),l(y,c,"Generator"),l(y,a,function(){return this}),l(y,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=_,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),l=r.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,h):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:_(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},t}var gt={desktop:{breakpoint:{max:3e3,min:1024},items:1},tablet:{breakpoint:{max:1024,min:464},items:1},mobile:{breakpoint:{max:464,min:0},items:1}},yt=Object(f.a)("img")({width:"100%",height:450}),bt=Object(f.a)(v.a)(ot||(ot=Object(h.a)(["\n  width: 83%;\n  margin: auto;\n"]))),wt=Object(f.a)(v.a)(at||(at=Object(h.a)(["\n  background: #F5F5F5;\n  text-align: left;\n  padding: 10px;\n"]))),Et=function(){var t=Object(a.useState)([]),e=Object(s.a)(t,2),r=e[0],n=e[1],o=Object(k.m)().search;return Object(a.useEffect)(function(){var t=function(){var t=Object(u.a)(vt().mark(function t(){var r;return vt().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Y(e);case 2:r=t.sent,n(r.results);case 4:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),e=" ";o.includes("popular")?e="https://api.themoviedb.org/3/movie/popular?api_key=98cd5271e22b3a17151073b617759235":o.includes("toprated")?e="https://api.themoviedb.org/3/movie/top_rated?api_key=98cd5271e22b3a17151073b617759235":o.includes("upcoming")?e="https://api.themoviedb.org/3/movie/upcoming?api_key=98cd5271e22b3a17151073b617759235":o.includes("trending")&&(e="https://api.themoviedb.org/3/trending/movie/day?api_key=98cd5271e22b3a17151073b617759235"),t(e)},[o]),i.a.createElement(i.a.Fragment,null,i.a.createElement(N,null),i.a.createElement(bt,null,i.a.createElement(R.a,{swipeable:!1,draggable:!1,responsive:gt,infinite:!0,autoPlay:!0,autoPlaySpeed:3e3,keyBoardControl:!0,showDots:!1,slidesToSlide:1,containerClass:"carousel-container",dotListClass:"custom-dot-list-style",itemClass:"carousel-item-padding-40-px"},r.map(function(t){return i.a.createElement(yt,{key:t.id,src:"https://image.tmdb.org/t/p/original".concat(t.backdrop_path)})})),i.a.createElement(wt,null,i.a.createElement(g.a,{variant:"h6"},"IMDb Charts"),i.a.createElement(g.a,{variant:"h4"},y[o.split("=")[1]]," Movies"),i.a.createElement(g.a,{style:{fontSize:12,margin:5}},"As determined by IMDb Users"),i.a.createElement(ut.a,null),i.a.createElement(mt,{movies:r}))))};var xt=function(){return i.a.createElement(j.a,null,i.a.createElement(k.c,null,i.a.createElement(k.a,{path:O.home,element:i.a.createElement(lt,null)}),i.a.createElement(k.a,{path:O.categories,element:i.a.createElement(Et,null)}),i.a.createElement(k.a,{path:O.invalid,element:i.a.createElement(lt,null)})))};l.a.createRoot(document.getElementById("root")).render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(xt,null)))},87:function(t,e,r){t.exports=r(128)},95:function(t,e,r){},97:function(t,e,r){}},[[87,2,1]]]);
//# sourceMappingURL=main.fbab7780.chunk.js.map