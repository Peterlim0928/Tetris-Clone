var We=Object.defineProperty;var Ve=(e,t,r)=>t in e?We(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var P=(e,t,r)=>(Ve(e,typeof t!="symbol"?t+"":t,r),r);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function r(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=r(i);fetch(i.href,o)}})();var J=function(e,t){return J=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,n){r.__proto__=n}||function(r,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(r[i]=n[i])},J(e,t)};function k(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");J(e,t);function r(){this.constructor=e}e.prototype=t===null?Object.create(t):(r.prototype=t.prototype,new r)}function Ye(e,t,r,n){function i(o){return o instanceof r?o:new r(function(u){u(o)})}return new(r||(r=Promise))(function(o,u){function c(l){try{a(n.next(l))}catch(v){u(v)}}function s(l){try{a(n.throw(l))}catch(v){u(v)}}function a(l){l.done?o(l.value):i(l.value).then(c,s)}a((n=n.apply(e,t||[])).next())})}function he(e,t){var r={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},n,i,o,u;return u={next:c(0),throw:c(1),return:c(2)},typeof Symbol=="function"&&(u[Symbol.iterator]=function(){return this}),u;function c(a){return function(l){return s([a,l])}}function s(a){if(n)throw new TypeError("Generator is already executing.");for(;u&&(u=0,a[0]&&(r=0)),r;)try{if(n=1,i&&(o=a[0]&2?i.return:a[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,a[1])).done)return o;switch(i=0,o&&(a=[a[0]&2,o.value]),a[0]){case 0:case 1:o=a;break;case 4:return r.label++,{value:a[1],done:!1};case 5:r.label++,i=a[1],a=[0];continue;case 7:a=r.ops.pop(),r.trys.pop();continue;default:if(o=r.trys,!(o=o.length>0&&o[o.length-1])&&(a[0]===6||a[0]===2)){r=0;continue}if(a[0]===3&&(!o||a[1]>o[0]&&a[1]<o[3])){r.label=a[1];break}if(a[0]===6&&r.label<o[1]){r.label=o[1],o=a;break}if(o&&r.label<o[2]){r.label=o[2],r.ops.push(a);break}o[2]&&r.ops.pop(),r.trys.pop();continue}a=t.call(e,r)}catch(l){a=[6,l],i=0}finally{n=o=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}}function Y(e){var t=typeof Symbol=="function"&&Symbol.iterator,r=t&&e[t],n=0;if(r)return r.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function A(e,t){var r=typeof Symbol=="function"&&e[Symbol.iterator];if(!r)return e;var n=r.call(e),i,o=[],u;try{for(;(t===void 0||t-- >0)&&!(i=n.next()).done;)o.push(i.value)}catch(c){u={error:c}}finally{try{i&&!i.done&&(r=n.return)&&r.call(n)}finally{if(u)throw u.error}}return o}function R(e,t,r){if(r||arguments.length===2)for(var n=0,i=t.length,o;n<i;n++)(o||!(n in t))&&(o||(o=Array.prototype.slice.call(t,0,n)),o[n]=t[n]);return e.concat(o||Array.prototype.slice.call(t))}function M(e){return this instanceof M?(this.v=e,this):new M(e)}function Xe(e,t,r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n=r.apply(e,t||[]),i,o=[];return i={},u("next"),u("throw"),u("return"),i[Symbol.asyncIterator]=function(){return this},i;function u(d){n[d]&&(i[d]=function(I){return new Promise(function(g,y){o.push([d,I,g,y])>1||c(d,I)})})}function c(d,I){try{s(n[d](I))}catch(g){v(o[0][3],g)}}function s(d){d.value instanceof M?Promise.resolve(d.value.v).then(a,l):v(o[0][2],d)}function a(d){c("next",d)}function l(d){c("throw",d)}function v(d,I){d(I),o.shift(),o.length&&c(o[0][0],o[0][1])}}function Ke(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t=e[Symbol.asyncIterator],r;return t?t.call(e):(e=typeof Y=="function"?Y(e):e[Symbol.iterator](),r={},n("next"),n("throw"),n("return"),r[Symbol.asyncIterator]=function(){return this},r);function n(o){r[o]=e[o]&&function(u){return new Promise(function(c,s){u=e[o](u),i(c,s,u.done,u.value)})}}function i(o,u,c,s){Promise.resolve(s).then(function(a){o({value:a,done:c})},u)}}function p(e){return typeof e=="function"}function qe(e){var t=function(n){Error.call(n),n.stack=new Error().stack},r=e(t);return r.prototype=Object.create(Error.prototype),r.prototype.constructor=r,r}var N=qe(function(e){return function(r){e(this),this.message=r?r.length+` errors occurred during unsubscription:
`+r.map(function(n,i){return i+1+") "+n.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=r}});function Q(e,t){if(e){var r=e.indexOf(t);0<=r&&e.splice(r,1)}}var j=function(){function e(t){this.initialTeardown=t,this.closed=!1,this._parentage=null,this._finalizers=null}return e.prototype.unsubscribe=function(){var t,r,n,i,o;if(!this.closed){this.closed=!0;var u=this._parentage;if(u)if(this._parentage=null,Array.isArray(u))try{for(var c=Y(u),s=c.next();!s.done;s=c.next()){var a=s.value;a.remove(this)}}catch(y){t={error:y}}finally{try{s&&!s.done&&(r=c.return)&&r.call(c)}finally{if(t)throw t.error}}else u.remove(this);var l=this.initialTeardown;if(p(l))try{l()}catch(y){o=y instanceof N?y.errors:[y]}var v=this._finalizers;if(v){this._finalizers=null;try{for(var d=Y(v),I=d.next();!I.done;I=d.next()){var g=I.value;try{ue(g)}catch(y){o=o??[],y instanceof N?o=R(R([],A(o)),A(y.errors)):o.push(y)}}}catch(y){n={error:y}}finally{try{I&&!I.done&&(i=d.return)&&i.call(d)}finally{if(n)throw n.error}}}if(o)throw new N(o)}},e.prototype.add=function(t){var r;if(t&&t!==this)if(this.closed)ue(t);else{if(t instanceof e){if(t.closed||t._hasParent(this))return;t._addParent(this)}(this._finalizers=(r=this._finalizers)!==null&&r!==void 0?r:[]).push(t)}},e.prototype._hasParent=function(t){var r=this._parentage;return r===t||Array.isArray(r)&&r.includes(t)},e.prototype._addParent=function(t){var r=this._parentage;this._parentage=Array.isArray(r)?(r.push(t),r):r?[r,t]:t},e.prototype._removeParent=function(t){var r=this._parentage;r===t?this._parentage=null:Array.isArray(r)&&Q(r,t)},e.prototype.remove=function(t){var r=this._finalizers;r&&Q(r,t),t instanceof e&&t._removeParent(this)},e.EMPTY=function(){var t=new e;return t.closed=!0,t}(),e}();j.EMPTY;function pe(e){return e instanceof j||e&&"closed"in e&&p(e.remove)&&p(e.add)&&p(e.unsubscribe)}function ue(e){p(e)?e():e.unsubscribe()}var ve={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},Z={setTimeout:function(e,t){for(var r=[],n=2;n<arguments.length;n++)r[n-2]=arguments[n];var i=Z.delegate;return i!=null&&i.setTimeout?i.setTimeout.apply(i,R([e,t],A(r))):setTimeout.apply(void 0,R([e,t],A(r)))},clearTimeout:function(e){var t=Z.delegate;return((t==null?void 0:t.clearTimeout)||clearTimeout)(e)},delegate:void 0};function ye(e){Z.setTimeout(function(){throw e})}function ce(){}function Ue(e){e()}var te=function(e){k(t,e);function t(r){var n=e.call(this)||this;return n.isStopped=!1,r?(n.destination=r,pe(r)&&r.add(n)):n.destination=Fe,n}return t.create=function(r,n,i){return new z(r,n,i)},t.prototype.next=function(r){this.isStopped||this._next(r)},t.prototype.error=function(r){this.isStopped||(this.isStopped=!0,this._error(r))},t.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},t.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,e.prototype.unsubscribe.call(this),this.destination=null)},t.prototype._next=function(r){this.destination.next(r)},t.prototype._error=function(r){try{this.destination.error(r)}finally{this.unsubscribe()}},t.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},t}(j),je=Function.prototype.bind;function F(e,t){return je.call(e,t)}var Be=function(){function e(t){this.partialObserver=t}return e.prototype.next=function(t){var r=this.partialObserver;if(r.next)try{r.next(t)}catch(n){K(n)}},e.prototype.error=function(t){var r=this.partialObserver;if(r.error)try{r.error(t)}catch(n){K(n)}else K(t)},e.prototype.complete=function(){var t=this.partialObserver;if(t.complete)try{t.complete()}catch(r){K(r)}},e}(),z=function(e){k(t,e);function t(r,n,i){var o=e.call(this)||this,u;if(p(r)||!r)u={next:r??void 0,error:n??void 0,complete:i??void 0};else{var c;o&&ve.useDeprecatedNextContext?(c=Object.create(r),c.unsubscribe=function(){return o.unsubscribe()},u={next:r.next&&F(r.next,c),error:r.error&&F(r.error,c),complete:r.complete&&F(r.complete,c)}):u=r}return o.destination=new Be(u),o}return t}(te);function K(e){ye(e)}function Ne(e){throw e}var Fe={closed:!0,next:ce,error:Ne,complete:ce},re=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}();function me(e){return e}function Je(e){return e.length===0?me:e.length===1?e[0]:function(r){return e.reduce(function(n,i){return i(n)},r)}}var E=function(){function e(t){t&&(this._subscribe=t)}return e.prototype.lift=function(t){var r=new e;return r.source=this,r.operator=t,r},e.prototype.subscribe=function(t,r,n){var i=this,o=Ze(t)?t:new z(t,r,n);return Ue(function(){var u=i,c=u.operator,s=u.source;o.add(c?c.call(o,s):s?i._subscribe(o):i._trySubscribe(o))}),o},e.prototype._trySubscribe=function(t){try{return this._subscribe(t)}catch(r){t.error(r)}},e.prototype.forEach=function(t,r){var n=this;return r=ae(r),new r(function(i,o){var u=new z({next:function(c){try{t(c)}catch(s){o(s),u.unsubscribe()}},error:o,complete:i});n.subscribe(u)})},e.prototype._subscribe=function(t){var r;return(r=this.source)===null||r===void 0?void 0:r.subscribe(t)},e.prototype[re]=function(){return this},e.prototype.pipe=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return Je(t)(this)},e.prototype.toPromise=function(t){var r=this;return t=ae(t),new t(function(n,i){var o;r.subscribe(function(u){return o=u},function(u){return i(u)},function(){return n(o)})})},e.create=function(t){return new e(t)},e}();function ae(e){var t;return(t=e??ve.Promise)!==null&&t!==void 0?t:Promise}function Qe(e){return e&&p(e.next)&&p(e.error)&&p(e.complete)}function Ze(e){return e&&e instanceof te||Qe(e)&&pe(e)}function ze(e){return p(e==null?void 0:e.lift)}function $(e){return function(t){if(ze(t))return t.lift(function(r){try{return e(r,this)}catch(n){this.error(n)}});throw new TypeError("Unable to lift unknown Observable type")}}function L(e,t,r,n,i){return new et(e,t,r,n,i)}var et=function(e){k(t,e);function t(r,n,i,o,u,c){var s=e.call(this,r)||this;return s.onFinalize=u,s.shouldUnsubscribe=c,s._next=n?function(a){try{n(a)}catch(l){r.error(l)}}:e.prototype._next,s._error=o?function(a){try{o(a)}catch(l){r.error(l)}finally{this.unsubscribe()}}:e.prototype._error,s._complete=i?function(){try{i()}catch(a){r.error(a)}finally{this.unsubscribe()}}:e.prototype._complete,s}return t.prototype.unsubscribe=function(){var r;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){var n=this.closed;e.prototype.unsubscribe.call(this),!n&&((r=this.onFinalize)===null||r===void 0||r.call(this))}},t}(te),be={now:function(){return(be.delegate||Date).now()},delegate:void 0},tt=function(e){k(t,e);function t(r,n){return e.call(this)||this}return t.prototype.schedule=function(r,n){return this},t}(j),U={setInterval:function(e,t){for(var r=[],n=2;n<arguments.length;n++)r[n-2]=arguments[n];var i=U.delegate;return i!=null&&i.setInterval?i.setInterval.apply(i,R([e,t],A(r))):setInterval.apply(void 0,R([e,t],A(r)))},clearInterval:function(e){var t=U.delegate;return((t==null?void 0:t.clearInterval)||clearInterval)(e)},delegate:void 0},rt=function(e){k(t,e);function t(r,n){var i=e.call(this,r,n)||this;return i.scheduler=r,i.work=n,i.pending=!1,i}return t.prototype.schedule=function(r,n){var i;if(n===void 0&&(n=0),this.closed)return this;this.state=r;var o=this.id,u=this.scheduler;return o!=null&&(this.id=this.recycleAsyncId(u,o,n)),this.pending=!0,this.delay=n,this.id=(i=this.id)!==null&&i!==void 0?i:this.requestAsyncId(u,this.id,n),this},t.prototype.requestAsyncId=function(r,n,i){return i===void 0&&(i=0),U.setInterval(r.flush.bind(r,this),i)},t.prototype.recycleAsyncId=function(r,n,i){if(i===void 0&&(i=0),i!=null&&this.delay===i&&this.pending===!1)return n;n!=null&&U.clearInterval(n)},t.prototype.execute=function(r,n){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var i=this._execute(r,n);if(i)return i;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},t.prototype._execute=function(r,n){var i=!1,o;try{this.work(r)}catch(u){i=!0,o=u||new Error("Scheduled action threw falsy error")}if(i)return this.unsubscribe(),o},t.prototype.unsubscribe=function(){if(!this.closed){var r=this,n=r.id,i=r.scheduler,o=i.actions;this.work=this.state=this.scheduler=null,this.pending=!1,Q(o,this),n!=null&&(this.id=this.recycleAsyncId(i,n,null)),this.delay=null,e.prototype.unsubscribe.call(this)}},t}(tt),se=function(){function e(t,r){r===void 0&&(r=e.now),this.schedulerActionCtor=t,this.now=r}return e.prototype.schedule=function(t,r,n){return r===void 0&&(r=0),new this.schedulerActionCtor(this,t).schedule(n,r)},e.now=be.now,e}(),nt=function(e){k(t,e);function t(r,n){n===void 0&&(n=se.now);var i=e.call(this,r,n)||this;return i.actions=[],i._active=!1,i}return t.prototype.flush=function(r){var n=this.actions;if(this._active){n.push(r);return}var i;this._active=!0;do if(i=r.execute(r.state,r.delay))break;while(r=n.shift());if(this._active=!1,i){for(;r=n.shift();)r.unsubscribe();throw i}},t}(se),Ie=new nt(rt),it=Ie,ot=new E(function(e){return e.complete()});function ge(e){return e&&p(e.schedule)}function we(e){return e[e.length-1]}function ut(e){return ge(we(e))?e.pop():void 0}function ct(e,t){return typeof we(e)=="number"?e.pop():t}var ne=function(e){return e&&typeof e.length=="number"&&typeof e!="function"};function Ce(e){return p(e==null?void 0:e.then)}function Ee(e){return p(e[re])}function Se(e){return Symbol.asyncIterator&&p(e==null?void 0:e[Symbol.asyncIterator])}function Te(e){return new TypeError("You provided "+(e!==null&&typeof e=="object"?"an invalid object":"'"+e+"'")+" where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")}function at(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var _e=at();function Ge(e){return p(e==null?void 0:e[_e])}function Ae(e){return Xe(this,arguments,function(){var r,n,i,o;return he(this,function(u){switch(u.label){case 0:r=e.getReader(),u.label=1;case 1:u.trys.push([1,,9,10]),u.label=2;case 2:return[4,M(r.read())];case 3:return n=u.sent(),i=n.value,o=n.done,o?[4,M(void 0)]:[3,5];case 4:return[2,u.sent()];case 5:return[4,M(i)];case 6:return[4,u.sent()];case 7:return u.sent(),[3,2];case 8:return[3,10];case 9:return r.releaseLock(),[7];case 10:return[2]}})})}function Re(e){return p(e==null?void 0:e.getReader)}function x(e){if(e instanceof E)return e;if(e!=null){if(Ee(e))return st(e);if(ne(e))return lt(e);if(Ce(e))return ft(e);if(Se(e))return De(e);if(Ge(e))return dt(e);if(Re(e))return ht(e)}throw Te(e)}function st(e){return new E(function(t){var r=e[re]();if(p(r.subscribe))return r.subscribe(t);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function lt(e){return new E(function(t){for(var r=0;r<e.length&&!t.closed;r++)t.next(e[r]);t.complete()})}function ft(e){return new E(function(t){e.then(function(r){t.closed||(t.next(r),t.complete())},function(r){return t.error(r)}).then(null,ye)})}function dt(e){return new E(function(t){var r,n;try{for(var i=Y(e),o=i.next();!o.done;o=i.next()){var u=o.value;if(t.next(u),t.closed)return}}catch(c){r={error:c}}finally{try{o&&!o.done&&(n=i.return)&&n.call(i)}finally{if(r)throw r.error}}t.complete()})}function De(e){return new E(function(t){pt(e,t).catch(function(r){return t.error(r)})})}function ht(e){return De(Ae(e))}function pt(e,t){var r,n,i,o;return Ye(this,void 0,void 0,function(){var u,c;return he(this,function(s){switch(s.label){case 0:s.trys.push([0,5,6,11]),r=Ke(e),s.label=1;case 1:return[4,r.next()];case 2:if(n=s.sent(),!!n.done)return[3,4];if(u=n.value,t.next(u),t.closed)return[2];s.label=3;case 3:return[3,1];case 4:return[3,11];case 5:return c=s.sent(),i={error:c},[3,11];case 6:return s.trys.push([6,,9,10]),n&&!n.done&&(o=r.return)?[4,o.call(r)]:[3,8];case 7:s.sent(),s.label=8;case 8:return[3,10];case 9:if(i)throw i.error;return[7];case 10:return[7];case 11:return t.complete(),[2]}})})}function G(e,t,r,n,i){n===void 0&&(n=0),i===void 0&&(i=!1);var o=t.schedule(function(){r(),i?e.add(this.schedule(null,n)):this.unsubscribe()},n);if(e.add(o),!i)return o}function xe(e,t){return t===void 0&&(t=0),$(function(r,n){r.subscribe(L(n,function(i){return G(n,e,function(){return n.next(i)},t)},function(){return G(n,e,function(){return n.complete()},t)},function(i){return G(n,e,function(){return n.error(i)},t)}))})}function He(e,t){return t===void 0&&(t=0),$(function(r,n){n.add(e.schedule(function(){return r.subscribe(n)},t))})}function vt(e,t){return x(e).pipe(He(t),xe(t))}function yt(e,t){return x(e).pipe(He(t),xe(t))}function mt(e,t){return new E(function(r){var n=0;return t.schedule(function(){n===e.length?r.complete():(r.next(e[n++]),r.closed||this.schedule())})})}function bt(e,t){return new E(function(r){var n;return G(r,t,function(){n=e[_e](),G(r,t,function(){var i,o,u;try{i=n.next(),o=i.value,u=i.done}catch(c){r.error(c);return}u?r.complete():r.next(o)},0,!0)}),function(){return p(n==null?void 0:n.return)&&n.return()}})}function Pe(e,t){if(!e)throw new Error("Iterable cannot be null");return new E(function(r){G(r,t,function(){var n=e[Symbol.asyncIterator]();G(r,t,function(){n.next().then(function(i){i.done?r.complete():r.next(i.value)})},0,!0)})})}function It(e,t){return Pe(Ae(e),t)}function gt(e,t){if(e!=null){if(Ee(e))return vt(e,t);if(ne(e))return mt(e,t);if(Ce(e))return yt(e,t);if(Se(e))return Pe(e,t);if(Ge(e))return bt(e,t);if(Re(e))return It(e,t)}throw Te(e)}function wt(e,t){return t?gt(e,t):x(e)}function Ct(e){return e instanceof Date&&!isNaN(e)}function T(e,t){return $(function(r,n){var i=0;r.subscribe(L(n,function(o){n.next(e.call(t,o,i++))}))})}var Et=Array.isArray;function St(e,t){return Et(t)?e.apply(void 0,R([],A(t))):e(t)}function Tt(e){return T(function(t){return St(e,t)})}function _t(e,t,r,n,i,o,u,c){var s=[],a=0,l=0,v=!1,d=function(){v&&!s.length&&!a&&t.complete()},I=function(y){return a<n?g(y):s.push(y)},g=function(y){o&&t.next(y),a++;var b=!1;x(r(y,l++)).subscribe(L(t,function(m){i==null||i(m),o?I(m):t.next(m)},function(){b=!0},void 0,function(){if(b)try{a--;for(var m=function(){var C=s.shift();u?G(t,u,function(){return g(C)}):g(C)};s.length&&a<n;)m();d()}catch(C){t.error(C)}}))};return e.subscribe(L(t,I,function(){v=!0,d()})),function(){c==null||c()}}function ie(e,t,r){return r===void 0&&(r=1/0),p(t)?ie(function(n,i){return T(function(o,u){return t(n,o,i,u)})(x(e(n,i)))},r):(typeof t=="number"&&(r=t),$(function(n,i){return _t(n,i,e,r)}))}function Gt(e){return e===void 0&&(e=1/0),ie(me,e)}var At=["addListener","removeListener"],Rt=["addEventListener","removeEventListener"],Dt=["on","off"];function ee(e,t,r,n){if(p(r)&&(n=r,r=void 0),n)return ee(e,t,r).pipe(Tt(n));var i=A(Pt(e)?Rt.map(function(c){return function(s){return e[c](t,s,r)}}):xt(e)?At.map(le(e,t)):Ht(e)?Dt.map(le(e,t)):[],2),o=i[0],u=i[1];if(!o&&ne(e))return ie(function(c){return ee(c,t,r)})(x(e));if(!o)throw new TypeError("Invalid event target");return new E(function(c){var s=function(){for(var a=[],l=0;l<arguments.length;l++)a[l]=arguments[l];return c.next(1<a.length?a:a[0])};return o(s),function(){return u(s)}})}function le(e,t){return function(r){return function(n){return e[r](t,n)}}}function xt(e){return p(e.addListener)&&p(e.removeListener)}function Ht(e){return p(e.on)&&p(e.off)}function Pt(e){return p(e.addEventListener)&&p(e.removeEventListener)}function Ot(e,t,r){e===void 0&&(e=0),r===void 0&&(r=it);var n=-1;return t!=null&&(ge(t)?r=t:n=t),new E(function(i){var o=Ct(e)?+e-r.now():e;o<0&&(o=0);var u=0;return r.schedule(function(){i.closed||(i.next(u++),0<=n?this.schedule(void 0,n):i.complete())},o)})}function Mt(e,t){return e===void 0&&(e=0),t===void 0&&(t=Ie),e<0&&(e=0),Ot(e,e,t)}function Lt(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var r=ut(e),n=ct(e,1/0),i=e;return i.length?i.length===1?x(i[0]):Gt(n)(wt(i,r)):ot}function kt(e,t){return $(function(r,n){var i=0;r.subscribe(L(n,function(o){return e.call(t,o,i++)&&n.next(o)}))})}function $t(e,t,r,n,i){return function(o,u){var c=r,s=t,a=0;o.subscribe(L(u,function(l){var v=a++;s=c?e(s,l,v):(c=!0,l),n&&u.next(s)},i&&function(){c&&u.next(s),u.complete()}))}}function Wt(e,t){return $($t(e,t,arguments.length>=2,!0))}const H=e=>t=>r=>[{x:t[0][0],y:t[0][1],colour:e,id:`${r}1`},{x:t[1][0],y:t[1][1],colour:e,id:`${r}2`},{x:t[2][0],y:t[2][1],colour:e,id:`${r}3`},{x:t[3][0],y:t[3][1],colour:e,id:`${r}4`}],Vt=(e,t)=>H("yellow")([[e,t],[e+1,t],[e,t+1],[e+1,t+1]]),Yt=(e,t)=>H("blue")([[e,t+1],[e+1,t+1],[e-1,t+1],[e-1,t]]),Xt=(e,t)=>H("orange")([[e,t+1],[e+1,t+1],[e-1,t+1],[e+1,t]]),Kt=(e,t)=>H("red")([[e,t],[e-1,t],[e,t+1],[e+1,t+1]]),qt=(e,t)=>H("green")([[e,t],[e+1,t],[e,t+1],[e-1,t+1]]),Ut=(e,t)=>H("purple")([[e,t+1],[e+1,t+1],[e-1,t+1],[e,t]]),jt=(e,t)=>H("cyan")([[e,t],[e-1,t],[e+1,t],[e+2,t]]),X=(e,t,r)=>[Vt,Yt,Xt,Kt,qt,Ut,jt][w.scale(e)](t,r),Oe=e=>["yellow","blue","orange","red","green","purple","cyan"].indexOf(e),V=class{};let w=V;P(w,"m",2147483648),P(w,"a",1103515245),P(w,"c",12345),P(w,"hash",t=>(V.a*t+V.c)%V.m),P(w,"scale",t=>t%7);const fe=(e,t)=>Array.from({length:t-e+1},(r,n)=>e+n),O={CANVAS_WIDTH:200,CANVAS_HEIGHT:400,PREVIEW_WIDTH:160,PREVIEW_HEIGHT:80},h={BASE_TICK_RATE_MS:10,INITIAL_DROP_TICK:500,MAX_SCORE_PER_LEVEL:1e3,GRID_WIDTH:10,GRID_HEIGHT:20,MAIN_GRID_X:4,MAIN_GRID_Y:-2,PREVIEW_GRID_X:3,PREVIEW_GRID_Y:1},q={WIDTH:O.CANVAS_WIDTH/h.GRID_WIDTH,HEIGHT:O.CANVAS_HEIGHT/h.GRID_HEIGHT},Bt=e=>Math.round(h.INITIAL_DROP_TICK*5**(-.1*(e-1))/h.BASE_TICK_RATE_MS),Nt=(e,t)=>t.apply(e),de=Math.round(w.hash(Math.random()*1e3)),Ft={gameTick:0,currentTick:0,dropTick:h.INITIAL_DROP_TICK/h.BASE_TICK_RATE_MS,currentCubes:[],mainGridCubes:[],previousMainGridCubes:[],previewGridCubes:X(de,h.PREVIEW_GRID_X,h.PREVIEW_GRID_Y)("p"),holdOnCooldown:!1,updateGrid:!1,rng:w.hash(de),level:1,score:0,linesCleared:0,highScore:0,gameEnd:!1},B=e=>e.currentCubes.filter(t=>e.mainGridCubes.filter(r=>r.x===t.x&&r.y===t.y).length>0||t.y>=h.GRID_HEIGHT).length>0,Jt=e=>e.currentCubes.filter(t=>t.x<0||t.x>=h.GRID_WIDTH||t.y>=h.GRID_HEIGHT).length>0,oe=e=>!B(e)&&!Jt(e)&&!e.gameEnd,D=(e,t,r,n)=>e.map(i=>({x:i.x+t,y:i.y+r,colour:i.colour,id:n?`x${i.x+t}y${i.y+r}`:i.id})),Me=e=>e.reduce((t,r)=>t.map((n,i)=>i===r.y?[...n,r]:[...n]),Array.from({length:h.GRID_HEIGHT},()=>[])),Le=e=>e.map(t=>t.length===h.GRID_WIDTH?t[0].y:-1).filter(t=>t!==-1),ke=(e,t)=>e.filter(r=>r.y!==t).map(r=>r.y<=t?{...r,y:r.y+1,id:`x${r.x}y${r.y+1}`}:{...r}),W=e=>(B(e)||e.currentCubes.length===0)&&!e.gameEnd,$e=(e,t)=>{const r=e[0]<t?e[0]:t,n=e[1]>t?e[1]:t;return[r,n]},Qt=(e,t)=>{const r=t[0]-e[0],n=t[1]-e[1],i=-n,o=r;return[e[0]+i,e[1]+o]};class Zt{apply(t){const r=t.currentTick+1===t.dropTick?0:t.currentTick+1,n=r===0?{...t,currentTick:r,dropTick:Bt(t.level),updateGrid:!1}:{...t,currentTick:r,updateGrid:!1};return r===0?new zt().apply(n):n}}class zt{apply(t){const r=D(t.currentCubes,0,1),n={...t,currentCubes:r},i=D(t.currentCubes,0,0,!0),o=B(n)?t.mainGridCubes.concat(i):t.mainGridCubes,u=Me(o),c=Le(u),s=c.length>0?c.reduce(ke,o):o,a=t.score+c.length*100,l=s.filter(v=>v.y<0).length>0;return{...t,gameTick:t.gameTick+1,currentCubes:W(n)?X(Oe(t.previewGridCubes[0].colour),h.MAIN_GRID_X,h.MAIN_GRID_Y)("c"):r,mainGridCubes:t.gameEnd?t.mainGridCubes:s,previousMainGridCubes:t.mainGridCubes,previewGridCubes:W(n)?X(w.scale(t.rng),h.PREVIEW_GRID_X,h.PREVIEW_GRID_Y)("p"):t.previewGridCubes,holdOnCooldown:W(n)?!1:t.holdOnCooldown,updateGrid:W(n),rng:W(n)?w.hash(t.rng):t.rng,level:Math.floor(a/h.MAX_SCORE_PER_LEVEL)+1,score:a,linesCleared:t.linesCleared+c.length,highScore:t.highScore<a?a:t.highScore,gameEnd:l}}}class er{apply(t){const r=D(t.currentCubes,-1,0),n={...t,currentCubes:r};return{...t,currentCubes:oe(n)?r:t.currentCubes,updateGrid:!1}}}class tr{apply(t){const r=D(t.currentCubes,1,0),n={...t,currentCubes:r};return{...t,currentCubes:oe(n)?r:t.currentCubes,updateGrid:!1}}}class rr{apply(t){const r=D(t.currentCubes,0,1),n={...t,currentCubes:r};return{...t,currentCubes:oe(n)?r:t.currentCubes,updateGrid:!1}}}class nr{apply(t){if(t.currentCubes.length===0||t.currentCubes[0].colour==="yellow")return t;const r=[t.currentCubes[0].x,t.currentCubes[0].y],n=t.currentCubes.map(l=>{const v=Qt(r,[l.x,l.y]);return{x:v[0],y:v[1],colour:l.colour,id:l.id}}),[i,o]=n.reduce((l,{x:v})=>$e(l,v),[h.GRID_WIDTH,-1]),u=i<0?-i:o>=h.GRID_WIDTH?h.GRID_WIDTH-o-1:0,c=D(n,u,0),s={...t,currentCubes:c},a=B(s)?t.currentCubes:c;return{...t,currentCubes:a,updateGrid:!1}}}class ir{apply(t){const[r,n]=t.currentCubes.reduce((b,{x:m})=>$e(b,m),[h.GRID_WIDTH,-1]),i=fe(r,n).map(b=>t.currentCubes.filter(m=>m.x===b)),o=i.map(b=>b.reduce((m,{y:C})=>C>m?C:m,h.MAIN_GRID_Y)),u=fe(r,n).map(b=>t.mainGridCubes.filter(m=>m.x===b)),c=u.map(b=>b.reduce((m,{x:C,y:f})=>f<m&&f>o[C-r]?f:m,h.GRID_HEIGHT)),s=c.reduce((b,m,C)=>{const f=m-o[C]-1;return f<b?f:b},h.GRID_HEIGHT),a=D(t.currentCubes,0,s,!0),l=t.mainGridCubes.concat(a),v=Me(l),d=Le(v),I=d.length>0?d.reduce(ke,l):l,g=t.score+d.length*100,y=I.filter(b=>b.y<0).length>0;return{...t,currentCubes:X(Oe(t.previewGridCubes[0].colour),h.MAIN_GRID_X,h.MAIN_GRID_Y)("c"),mainGridCubes:t.gameEnd?t.mainGridCubes:I,previousMainGridCubes:t.mainGridCubes,previewGridCubes:X(w.scale(t.rng),h.PREVIEW_GRID_X,h.PREVIEW_GRID_Y)("p"),holdOnCooldown:!1,updateGrid:!0,rng:w.hash(t.rng),level:Math.floor(g/h.MAX_SCORE_PER_LEVEL)+1,score:g,linesCleared:t.linesCleared+d.length,highScore:t.highScore<g?g:t.highScore,gameEnd:y}}}class or{apply(t){return t.gameEnd?{...t,gameTick:0,currentTick:0,currentCubes:[],mainGridCubes:[],previousMainGridCubes:t.mainGridCubes,previewGridCubes:t.previewGridCubes,updateGrid:!1,level:1,score:0,linesCleared:0,gameEnd:!1}:t}}const ur=e=>{e.setAttribute("visibility","visible"),e.parentNode.appendChild(e)},cr=e=>e.setAttribute("visibility","hidden"),ar=(e,t,r={})=>{const n=document.createElementNS(e,t);return Object.entries(r).forEach(([i,o])=>n.setAttribute(i,o)),n};function sr(){const e=document.querySelector("#svgCanvas"),t=document.querySelector("#svgPreview"),r=document.querySelector("#gameOver");document.querySelector("#main"),e.setAttribute("height",`${O.CANVAS_HEIGHT}`),e.setAttribute("width",`${O.CANVAS_WIDTH}`),t.setAttribute("height",`${O.PREVIEW_HEIGHT}`),t.setAttribute("width",`${O.PREVIEW_WIDTH}`);const n=document.querySelector("#levelText"),i=document.querySelector("#scoreText"),o=document.querySelector("#highScoreText"),u=ee(document,"keypress"),c=f=>u.pipe(kt(({code:_})=>_===f)),s=c("KeyA").pipe(T(f=>new er)),a=c("KeyD").pipe(T(f=>new tr)),l=c("KeyS").pipe(T(f=>new rr)),v=c("KeyW").pipe(T(f=>new nr)),d=c("Space").pipe(T(f=>new ir)),I=c("KeyR").pipe(T(f=>new or)),g=Mt(h.BASE_TICK_RATE_MS).pipe(T(f=>new Zt)),y=(f,_)=>ar(_.namespaceURI,"rect",{height:`${q.HEIGHT}`,width:`${q.WIDTH}`,x:`${q.WIDTH*f.x}`,y:`${q.HEIGHT*f.y}`,style:`fill: ${f.colour}`,id:`${f.id}`}),b=(f,_)=>f.map(S=>y(S,_)).forEach(S=>_.appendChild(S)),m=(f,_)=>f.map(S=>document.getElementById(S.id)).forEach(S=>S?_.removeChild(S):null),C=f=>{f.gameEnd||((f.updateGrid||f.gameTick===0)&&(m(f.previousMainGridCubes,e),m(f.previewGridCubes,t),b(f.mainGridCubes,e),b(f.previewGridCubes,t)),m(f.currentCubes,e),b(f.currentCubes,e)),n.innerHTML=`${f.level}`,i.innerHTML=`${f.score}`,o.innerHTML=`${f.highScore}`};Lt(g,s,a,l,v,d,I).pipe(Wt(Nt,Ft)).subscribe(f=>{C(f),f.gameEnd?ur(r):cr(r)})}typeof window<"u"&&(window.onload=()=>{sr()});