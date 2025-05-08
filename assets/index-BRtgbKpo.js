var vS=Object.defineProperty;var wS=(e,n,i)=>n in e?vS(e,n,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[n]=i;var Wm=(e,n,i)=>wS(e,typeof n!="symbol"?n+"":n,i);(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const u of a)if(u.type==="childList")for(const c of u.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function i(a){const u={};return a.integrity&&(u.integrity=a.integrity),a.referrerPolicy&&(u.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?u.credentials="include":a.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function o(a){if(a.ep)return;a.ep=!0;const u=i(a);fetch(a.href,u)}})();function SS(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Dc={exports:{}},Do={},Ic={exports:{}},ge={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hm;function bS(){if(Hm)return ge;Hm=1;var e=Symbol.for("react.element"),n=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),x=Symbol.iterator;function w(I){return I===null||typeof I!="object"?null:(I=x&&I[x]||I["@@iterator"],typeof I=="function"?I:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},k=Object.assign,T={};function E(I,N,de){this.props=I,this.context=N,this.refs=T,this.updater=de||S}E.prototype.isReactComponent={},E.prototype.setState=function(I,N){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,N,"setState")},E.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function P(){}P.prototype=E.prototype;function $(I,N,de){this.props=I,this.context=N,this.refs=T,this.updater=de||S}var D=$.prototype=new P;D.constructor=$,k(D,E.prototype),D.isPureReactComponent=!0;var F=Array.isArray,O=Object.prototype.hasOwnProperty,V={current:null},W={key:!0,ref:!0,__self:!0,__source:!0};function H(I,N,de){var pe,ye={},me=null,be=null;if(N!=null)for(pe in N.ref!==void 0&&(be=N.ref),N.key!==void 0&&(me=""+N.key),N)O.call(N,pe)&&!W.hasOwnProperty(pe)&&(ye[pe]=N[pe]);var xe=arguments.length-2;if(xe===1)ye.children=de;else if(1<xe){for(var we=Array(xe),rt=0;rt<xe;rt++)we[rt]=arguments[rt+2];ye.children=we}if(I&&I.defaultProps)for(pe in xe=I.defaultProps,xe)ye[pe]===void 0&&(ye[pe]=xe[pe]);return{$$typeof:e,type:I,key:me,ref:be,props:ye,_owner:V.current}}function Q(I,N){return{$$typeof:e,type:I.type,key:N,ref:I.ref,props:I.props,_owner:I._owner}}function ae(I){return typeof I=="object"&&I!==null&&I.$$typeof===e}function se(I){var N={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(de){return N[de]})}var Te=/\/+/g;function He(I,N){return typeof I=="object"&&I!==null&&I.key!=null?se(""+I.key):N.toString(36)}function ut(I,N,de,pe,ye){var me=typeof I;(me==="undefined"||me==="boolean")&&(I=null);var be=!1;if(I===null)be=!0;else switch(me){case"string":case"number":be=!0;break;case"object":switch(I.$$typeof){case e:case n:be=!0}}if(be)return be=I,ye=ye(be),I=pe===""?"."+He(be,0):pe,F(ye)?(de="",I!=null&&(de=I.replace(Te,"$&/")+"/"),ut(ye,N,de,"",function(rt){return rt})):ye!=null&&(ae(ye)&&(ye=Q(ye,de+(!ye.key||be&&be.key===ye.key?"":(""+ye.key).replace(Te,"$&/")+"/")+I)),N.push(ye)),1;if(be=0,pe=pe===""?".":pe+":",F(I))for(var xe=0;xe<I.length;xe++){me=I[xe];var we=pe+He(me,xe);be+=ut(me,N,de,we,ye)}else if(we=w(I),typeof we=="function")for(I=we.call(I),xe=0;!(me=I.next()).done;)me=me.value,we=pe+He(me,xe++),be+=ut(me,N,de,we,ye);else if(me==="object")throw N=String(I),Error("Objects are not valid as a React child (found: "+(N==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":N)+"). If you meant to render a collection of children, use an array instead.");return be}function Rt(I,N,de){if(I==null)return I;var pe=[],ye=0;return ut(I,pe,"","",function(me){return N.call(de,me,ye++)}),pe}function nt(I){if(I._status===-1){var N=I._result;N=N(),N.then(function(de){(I._status===0||I._status===-1)&&(I._status=1,I._result=de)},function(de){(I._status===0||I._status===-1)&&(I._status=2,I._result=de)}),I._status===-1&&(I._status=0,I._result=N)}if(I._status===1)return I._result.default;throw I._result}var ce={current:null},Y={transition:null},te={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:Y,ReactCurrentOwner:V};function X(){throw Error("act(...) is not supported in production builds of React.")}return ge.Children={map:Rt,forEach:function(I,N,de){Rt(I,function(){N.apply(this,arguments)},de)},count:function(I){var N=0;return Rt(I,function(){N++}),N},toArray:function(I){return Rt(I,function(N){return N})||[]},only:function(I){if(!ae(I))throw Error("React.Children.only expected to receive a single React element child.");return I}},ge.Component=E,ge.Fragment=i,ge.Profiler=a,ge.PureComponent=$,ge.StrictMode=o,ge.Suspense=p,ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=te,ge.act=X,ge.cloneElement=function(I,N,de){if(I==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+I+".");var pe=k({},I.props),ye=I.key,me=I.ref,be=I._owner;if(N!=null){if(N.ref!==void 0&&(me=N.ref,be=V.current),N.key!==void 0&&(ye=""+N.key),I.type&&I.type.defaultProps)var xe=I.type.defaultProps;for(we in N)O.call(N,we)&&!W.hasOwnProperty(we)&&(pe[we]=N[we]===void 0&&xe!==void 0?xe[we]:N[we])}var we=arguments.length-2;if(we===1)pe.children=de;else if(1<we){xe=Array(we);for(var rt=0;rt<we;rt++)xe[rt]=arguments[rt+2];pe.children=xe}return{$$typeof:e,type:I.type,key:ye,ref:me,props:pe,_owner:be}},ge.createContext=function(I){return I={$$typeof:c,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},I.Provider={$$typeof:u,_context:I},I.Consumer=I},ge.createElement=H,ge.createFactory=function(I){var N=H.bind(null,I);return N.type=I,N},ge.createRef=function(){return{current:null}},ge.forwardRef=function(I){return{$$typeof:d,render:I}},ge.isValidElement=ae,ge.lazy=function(I){return{$$typeof:g,_payload:{_status:-1,_result:I},_init:nt}},ge.memo=function(I,N){return{$$typeof:m,type:I,compare:N===void 0?null:N}},ge.startTransition=function(I){var N=Y.transition;Y.transition={};try{I()}finally{Y.transition=N}},ge.unstable_act=X,ge.useCallback=function(I,N){return ce.current.useCallback(I,N)},ge.useContext=function(I){return ce.current.useContext(I)},ge.useDebugValue=function(){},ge.useDeferredValue=function(I){return ce.current.useDeferredValue(I)},ge.useEffect=function(I,N){return ce.current.useEffect(I,N)},ge.useId=function(){return ce.current.useId()},ge.useImperativeHandle=function(I,N,de){return ce.current.useImperativeHandle(I,N,de)},ge.useInsertionEffect=function(I,N){return ce.current.useInsertionEffect(I,N)},ge.useLayoutEffect=function(I,N){return ce.current.useLayoutEffect(I,N)},ge.useMemo=function(I,N){return ce.current.useMemo(I,N)},ge.useReducer=function(I,N,de){return ce.current.useReducer(I,N,de)},ge.useRef=function(I){return ce.current.useRef(I)},ge.useState=function(I){return ce.current.useState(I)},ge.useSyncExternalStore=function(I,N,de){return ce.current.useSyncExternalStore(I,N,de)},ge.useTransition=function(){return ce.current.useTransition()},ge.version="18.3.1",ge}var Km;function Jd(){return Km||(Km=1,Ic.exports=bS()),Ic.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gm;function kS(){if(Gm)return Do;Gm=1;var e=Jd(),n=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,a=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function c(d,p,m){var g,x={},w=null,S=null;m!==void 0&&(w=""+m),p.key!==void 0&&(w=""+p.key),p.ref!==void 0&&(S=p.ref);for(g in p)o.call(p,g)&&!u.hasOwnProperty(g)&&(x[g]=p[g]);if(d&&d.defaultProps)for(g in p=d.defaultProps,p)x[g]===void 0&&(x[g]=p[g]);return{$$typeof:n,type:d,key:w,ref:S,props:x,_owner:a.current}}return Do.Fragment=i,Do.jsx=c,Do.jsxs=c,Do}var Ym;function ES(){return Ym||(Ym=1,Dc.exports=kS()),Dc.exports}var y=ES(),Ea={},Lc={exports:{}},Ct={},$c={exports:{}},Mc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qm;function CS(){return qm||(qm=1,function(e){function n(Y,te){var X=Y.length;Y.push(te);e:for(;0<X;){var I=X-1>>>1,N=Y[I];if(0<a(N,te))Y[I]=te,Y[X]=N,X=I;else break e}}function i(Y){return Y.length===0?null:Y[0]}function o(Y){if(Y.length===0)return null;var te=Y[0],X=Y.pop();if(X!==te){Y[0]=X;e:for(var I=0,N=Y.length,de=N>>>1;I<de;){var pe=2*(I+1)-1,ye=Y[pe],me=pe+1,be=Y[me];if(0>a(ye,X))me<N&&0>a(be,ye)?(Y[I]=be,Y[me]=X,I=me):(Y[I]=ye,Y[pe]=X,I=pe);else if(me<N&&0>a(be,X))Y[I]=be,Y[me]=X,I=me;else break e}}return te}function a(Y,te){var X=Y.sortIndex-te.sortIndex;return X!==0?X:Y.id-te.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;e.unstable_now=function(){return u.now()}}else{var c=Date,d=c.now();e.unstable_now=function(){return c.now()-d}}var p=[],m=[],g=1,x=null,w=3,S=!1,k=!1,T=!1,E=typeof setTimeout=="function"?setTimeout:null,P=typeof clearTimeout=="function"?clearTimeout:null,$=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function D(Y){for(var te=i(m);te!==null;){if(te.callback===null)o(m);else if(te.startTime<=Y)o(m),te.sortIndex=te.expirationTime,n(p,te);else break;te=i(m)}}function F(Y){if(T=!1,D(Y),!k)if(i(p)!==null)k=!0,nt(O);else{var te=i(m);te!==null&&ce(F,te.startTime-Y)}}function O(Y,te){k=!1,T&&(T=!1,P(H),H=-1),S=!0;var X=w;try{for(D(te),x=i(p);x!==null&&(!(x.expirationTime>te)||Y&&!se());){var I=x.callback;if(typeof I=="function"){x.callback=null,w=x.priorityLevel;var N=I(x.expirationTime<=te);te=e.unstable_now(),typeof N=="function"?x.callback=N:x===i(p)&&o(p),D(te)}else o(p);x=i(p)}if(x!==null)var de=!0;else{var pe=i(m);pe!==null&&ce(F,pe.startTime-te),de=!1}return de}finally{x=null,w=X,S=!1}}var V=!1,W=null,H=-1,Q=5,ae=-1;function se(){return!(e.unstable_now()-ae<Q)}function Te(){if(W!==null){var Y=e.unstable_now();ae=Y;var te=!0;try{te=W(!0,Y)}finally{te?He():(V=!1,W=null)}}else V=!1}var He;if(typeof $=="function")He=function(){$(Te)};else if(typeof MessageChannel<"u"){var ut=new MessageChannel,Rt=ut.port2;ut.port1.onmessage=Te,He=function(){Rt.postMessage(null)}}else He=function(){E(Te,0)};function nt(Y){W=Y,V||(V=!0,He())}function ce(Y,te){H=E(function(){Y(e.unstable_now())},te)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(Y){Y.callback=null},e.unstable_continueExecution=function(){k||S||(k=!0,nt(O))},e.unstable_forceFrameRate=function(Y){0>Y||125<Y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Q=0<Y?Math.floor(1e3/Y):5},e.unstable_getCurrentPriorityLevel=function(){return w},e.unstable_getFirstCallbackNode=function(){return i(p)},e.unstable_next=function(Y){switch(w){case 1:case 2:case 3:var te=3;break;default:te=w}var X=w;w=te;try{return Y()}finally{w=X}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(Y,te){switch(Y){case 1:case 2:case 3:case 4:case 5:break;default:Y=3}var X=w;w=Y;try{return te()}finally{w=X}},e.unstable_scheduleCallback=function(Y,te,X){var I=e.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?I+X:I):X=I,Y){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=X+N,Y={id:g++,callback:te,priorityLevel:Y,startTime:X,expirationTime:N,sortIndex:-1},X>I?(Y.sortIndex=X,n(m,Y),i(p)===null&&Y===i(m)&&(T?(P(H),H=-1):T=!0,ce(F,X-I))):(Y.sortIndex=N,n(p,Y),k||S||(k=!0,nt(O))),Y},e.unstable_shouldYield=se,e.unstable_wrapCallback=function(Y){var te=w;return function(){var X=w;w=te;try{return Y.apply(this,arguments)}finally{w=X}}}}(Mc)),Mc}var Xm;function TS(){return Xm||(Xm=1,$c.exports=CS()),$c.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qm;function PS(){if(Qm)return Ct;Qm=1;var e=Jd(),n=TS();function i(t){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+t,s=1;s<arguments.length;s++)r+="&args[]="+encodeURIComponent(arguments[s]);return"Minified React error #"+t+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var o=new Set,a={};function u(t,r){c(t,r),c(t+"Capture",r)}function c(t,r){for(a[t]=r,t=0;t<r.length;t++)o.add(r[t])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},x={};function w(t){return p.call(x,t)?!0:p.call(g,t)?!1:m.test(t)?x[t]=!0:(g[t]=!0,!1)}function S(t,r,s,l){if(s!==null&&s.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return l?!1:s!==null?!s.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function k(t,r,s,l){if(r===null||typeof r>"u"||S(t,r,s,l))return!0;if(l)return!1;if(s!==null)switch(s.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function T(t,r,s,l,f,h,v){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=l,this.attributeNamespace=f,this.mustUseProperty=s,this.propertyName=t,this.type=r,this.sanitizeURL=h,this.removeEmptyString=v}var E={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){E[t]=new T(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var r=t[0];E[r]=new T(r,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){E[t]=new T(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){E[t]=new T(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){E[t]=new T(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){E[t]=new T(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){E[t]=new T(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){E[t]=new T(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){E[t]=new T(t,5,!1,t.toLowerCase(),null,!1,!1)});var P=/[\-:]([a-z])/g;function $(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var r=t.replace(P,$);E[r]=new T(r,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var r=t.replace(P,$);E[r]=new T(r,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var r=t.replace(P,$);E[r]=new T(r,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){E[t]=new T(t,1,!1,t.toLowerCase(),null,!1,!1)}),E.xlinkHref=new T("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){E[t]=new T(t,1,!1,t.toLowerCase(),null,!0,!0)});function D(t,r,s,l){var f=E.hasOwnProperty(r)?E[r]:null;(f!==null?f.type!==0:l||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(k(r,s,f,l)&&(s=null),l||f===null?w(r)&&(s===null?t.removeAttribute(r):t.setAttribute(r,""+s)):f.mustUseProperty?t[f.propertyName]=s===null?f.type===3?!1:"":s:(r=f.attributeName,l=f.attributeNamespace,s===null?t.removeAttribute(r):(f=f.type,s=f===3||f===4&&s===!0?"":""+s,l?t.setAttributeNS(l,r,s):t.setAttribute(r,s))))}var F=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,O=Symbol.for("react.element"),V=Symbol.for("react.portal"),W=Symbol.for("react.fragment"),H=Symbol.for("react.strict_mode"),Q=Symbol.for("react.profiler"),ae=Symbol.for("react.provider"),se=Symbol.for("react.context"),Te=Symbol.for("react.forward_ref"),He=Symbol.for("react.suspense"),ut=Symbol.for("react.suspense_list"),Rt=Symbol.for("react.memo"),nt=Symbol.for("react.lazy"),ce=Symbol.for("react.offscreen"),Y=Symbol.iterator;function te(t){return t===null||typeof t!="object"?null:(t=Y&&t[Y]||t["@@iterator"],typeof t=="function"?t:null)}var X=Object.assign,I;function N(t){if(I===void 0)try{throw Error()}catch(s){var r=s.stack.trim().match(/\n( *(at )?)/);I=r&&r[1]||""}return`
`+I+t}var de=!1;function pe(t,r){if(!t||de)return"";de=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(_){var l=_}Reflect.construct(t,[],r)}else{try{r.call()}catch(_){l=_}t.call(r.prototype)}else{try{throw Error()}catch(_){l=_}t()}}catch(_){if(_&&l&&typeof _.stack=="string"){for(var f=_.stack.split(`
`),h=l.stack.split(`
`),v=f.length-1,C=h.length-1;1<=v&&0<=C&&f[v]!==h[C];)C--;for(;1<=v&&0<=C;v--,C--)if(f[v]!==h[C]){if(v!==1||C!==1)do if(v--,C--,0>C||f[v]!==h[C]){var j=`
`+f[v].replace(" at new "," at ");return t.displayName&&j.includes("<anonymous>")&&(j=j.replace("<anonymous>",t.displayName)),j}while(1<=v&&0<=C);break}}}finally{de=!1,Error.prepareStackTrace=s}return(t=t?t.displayName||t.name:"")?N(t):""}function ye(t){switch(t.tag){case 5:return N(t.type);case 16:return N("Lazy");case 13:return N("Suspense");case 19:return N("SuspenseList");case 0:case 2:case 15:return t=pe(t.type,!1),t;case 11:return t=pe(t.type.render,!1),t;case 1:return t=pe(t.type,!0),t;default:return""}}function me(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case W:return"Fragment";case V:return"Portal";case Q:return"Profiler";case H:return"StrictMode";case He:return"Suspense";case ut:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case se:return(t.displayName||"Context")+".Consumer";case ae:return(t._context.displayName||"Context")+".Provider";case Te:var r=t.render;return t=t.displayName,t||(t=r.displayName||r.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Rt:return r=t.displayName||null,r!==null?r:me(t.type)||"Memo";case nt:r=t._payload,t=t._init;try{return me(t(r))}catch{}}return null}function be(t){var r=t.type;switch(t.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=r.render,t=t.displayName||t.name||"",r.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return me(r);case 8:return r===H?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function xe(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function we(t){var r=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function rt(t){var r=we(t)?"checked":"value",s=Object.getOwnPropertyDescriptor(t.constructor.prototype,r),l=""+t[r];if(!t.hasOwnProperty(r)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var f=s.get,h=s.set;return Object.defineProperty(t,r,{configurable:!0,get:function(){return f.call(this)},set:function(v){l=""+v,h.call(this,v)}}),Object.defineProperty(t,r,{enumerable:s.enumerable}),{getValue:function(){return l},setValue:function(v){l=""+v},stopTracking:function(){t._valueTracker=null,delete t[r]}}}}function vn(t){t._valueTracker||(t._valueTracker=rt(t))}function Kt(t){if(!t)return!1;var r=t._valueTracker;if(!r)return!0;var s=r.getValue(),l="";return t&&(l=we(t)?t.checked?"true":"false":t.value),t=l,t!==s?(r.setValue(t),!0):!1}function ms(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ol(t,r){var s=r.checked;return X({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:s??t._wrapperState.initialChecked})}function Qf(t,r){var s=r.defaultValue==null?"":r.defaultValue,l=r.checked!=null?r.checked:r.defaultChecked;s=xe(r.value!=null?r.value:s),t._wrapperState={initialChecked:l,initialValue:s,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function Jf(t,r){r=r.checked,r!=null&&D(t,"checked",r,!1)}function Fl(t,r){Jf(t,r);var s=xe(r.value),l=r.type;if(s!=null)l==="number"?(s===0&&t.value===""||t.value!=s)&&(t.value=""+s):t.value!==""+s&&(t.value=""+s);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}r.hasOwnProperty("value")?Nl(t,r.type,s):r.hasOwnProperty("defaultValue")&&Nl(t,r.type,xe(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(t.defaultChecked=!!r.defaultChecked)}function Zf(t,r,s){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var l=r.type;if(!(l!=="submit"&&l!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+t._wrapperState.initialValue,s||r===t.value||(t.value=r),t.defaultValue=r}s=t.name,s!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,s!==""&&(t.name=s)}function Nl(t,r,s){(r!=="number"||ms(t.ownerDocument)!==t)&&(s==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+s&&(t.defaultValue=""+s))}var Hi=Array.isArray;function Wr(t,r,s,l){if(t=t.options,r){r={};for(var f=0;f<s.length;f++)r["$"+s[f]]=!0;for(s=0;s<t.length;s++)f=r.hasOwnProperty("$"+t[s].value),t[s].selected!==f&&(t[s].selected=f),f&&l&&(t[s].defaultSelected=!0)}else{for(s=""+xe(s),r=null,f=0;f<t.length;f++){if(t[f].value===s){t[f].selected=!0,l&&(t[f].defaultSelected=!0);return}r!==null||t[f].disabled||(r=t[f])}r!==null&&(r.selected=!0)}}function Vl(t,r){if(r.dangerouslySetInnerHTML!=null)throw Error(i(91));return X({},r,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function ep(t,r){var s=r.value;if(s==null){if(s=r.children,r=r.defaultValue,s!=null){if(r!=null)throw Error(i(92));if(Hi(s)){if(1<s.length)throw Error(i(93));s=s[0]}r=s}r==null&&(r=""),s=r}t._wrapperState={initialValue:xe(s)}}function tp(t,r){var s=xe(r.value),l=xe(r.defaultValue);s!=null&&(s=""+s,s!==t.value&&(t.value=s),r.defaultValue==null&&t.defaultValue!==s&&(t.defaultValue=s)),l!=null&&(t.defaultValue=""+l)}function np(t){var r=t.textContent;r===t._wrapperState.initialValue&&r!==""&&r!==null&&(t.value=r)}function rp(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function zl(t,r){return t==null||t==="http://www.w3.org/1999/xhtml"?rp(r):t==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var gs,ip=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,s,l,f){MSApp.execUnsafeLocalFunction(function(){return t(r,s,l,f)})}:t}(function(t,r){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=r;else{for(gs=gs||document.createElement("div"),gs.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=gs.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;r.firstChild;)t.appendChild(r.firstChild)}});function Ki(t,r){if(r){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=r;return}}t.textContent=r}var Gi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},k1=["Webkit","ms","Moz","O"];Object.keys(Gi).forEach(function(t){k1.forEach(function(r){r=r+t.charAt(0).toUpperCase()+t.substring(1),Gi[r]=Gi[t]})});function op(t,r,s){return r==null||typeof r=="boolean"||r===""?"":s||typeof r!="number"||r===0||Gi.hasOwnProperty(t)&&Gi[t]?(""+r).trim():r+"px"}function sp(t,r){t=t.style;for(var s in r)if(r.hasOwnProperty(s)){var l=s.indexOf("--")===0,f=op(s,r[s],l);s==="float"&&(s="cssFloat"),l?t.setProperty(s,f):t[s]=f}}var E1=X({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ul(t,r){if(r){if(E1[t]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(i(137,t));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(i(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(i(61))}if(r.style!=null&&typeof r.style!="object")throw Error(i(62))}}function Wl(t,r){if(t.indexOf("-")===-1)return typeof r.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Hl=null;function Kl(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Gl=null,Hr=null,Kr=null;function ap(t){if(t=go(t)){if(typeof Gl!="function")throw Error(i(280));var r=t.stateNode;r&&(r=Fs(r),Gl(t.stateNode,t.type,r))}}function lp(t){Hr?Kr?Kr.push(t):Kr=[t]:Hr=t}function up(){if(Hr){var t=Hr,r=Kr;if(Kr=Hr=null,ap(t),r)for(t=0;t<r.length;t++)ap(r[t])}}function cp(t,r){return t(r)}function dp(){}var Yl=!1;function fp(t,r,s){if(Yl)return t(r,s);Yl=!0;try{return cp(t,r,s)}finally{Yl=!1,(Hr!==null||Kr!==null)&&(dp(),up())}}function Yi(t,r){var s=t.stateNode;if(s===null)return null;var l=Fs(s);if(l===null)return null;s=l[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(i(231,r,typeof s));return s}var ql=!1;if(d)try{var qi={};Object.defineProperty(qi,"passive",{get:function(){ql=!0}}),window.addEventListener("test",qi,qi),window.removeEventListener("test",qi,qi)}catch{ql=!1}function C1(t,r,s,l,f,h,v,C,j){var _=Array.prototype.slice.call(arguments,3);try{r.apply(s,_)}catch(U){this.onError(U)}}var Xi=!1,ys=null,xs=!1,Xl=null,T1={onError:function(t){Xi=!0,ys=t}};function P1(t,r,s,l,f,h,v,C,j){Xi=!1,ys=null,C1.apply(T1,arguments)}function j1(t,r,s,l,f,h,v,C,j){if(P1.apply(this,arguments),Xi){if(Xi){var _=ys;Xi=!1,ys=null}else throw Error(i(198));xs||(xs=!0,Xl=_)}}function hr(t){var r=t,s=t;if(t.alternate)for(;r.return;)r=r.return;else{t=r;do r=t,r.flags&4098&&(s=r.return),t=r.return;while(t)}return r.tag===3?s:null}function pp(t){if(t.tag===13){var r=t.memoizedState;if(r===null&&(t=t.alternate,t!==null&&(r=t.memoizedState)),r!==null)return r.dehydrated}return null}function hp(t){if(hr(t)!==t)throw Error(i(188))}function R1(t){var r=t.alternate;if(!r){if(r=hr(t),r===null)throw Error(i(188));return r!==t?null:t}for(var s=t,l=r;;){var f=s.return;if(f===null)break;var h=f.alternate;if(h===null){if(l=f.return,l!==null){s=l;continue}break}if(f.child===h.child){for(h=f.child;h;){if(h===s)return hp(f),t;if(h===l)return hp(f),r;h=h.sibling}throw Error(i(188))}if(s.return!==l.return)s=f,l=h;else{for(var v=!1,C=f.child;C;){if(C===s){v=!0,s=f,l=h;break}if(C===l){v=!0,l=f,s=h;break}C=C.sibling}if(!v){for(C=h.child;C;){if(C===s){v=!0,s=h,l=f;break}if(C===l){v=!0,l=h,s=f;break}C=C.sibling}if(!v)throw Error(i(189))}}if(s.alternate!==l)throw Error(i(190))}if(s.tag!==3)throw Error(i(188));return s.stateNode.current===s?t:r}function mp(t){return t=R1(t),t!==null?gp(t):null}function gp(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var r=gp(t);if(r!==null)return r;t=t.sibling}return null}var yp=n.unstable_scheduleCallback,xp=n.unstable_cancelCallback,A1=n.unstable_shouldYield,D1=n.unstable_requestPaint,Ne=n.unstable_now,I1=n.unstable_getCurrentPriorityLevel,Ql=n.unstable_ImmediatePriority,vp=n.unstable_UserBlockingPriority,vs=n.unstable_NormalPriority,L1=n.unstable_LowPriority,wp=n.unstable_IdlePriority,ws=null,an=null;function $1(t){if(an&&typeof an.onCommitFiberRoot=="function")try{an.onCommitFiberRoot(ws,t,void 0,(t.current.flags&128)===128)}catch{}}var Gt=Math.clz32?Math.clz32:B1,M1=Math.log,_1=Math.LN2;function B1(t){return t>>>=0,t===0?32:31-(M1(t)/_1|0)|0}var Ss=64,bs=4194304;function Qi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ks(t,r){var s=t.pendingLanes;if(s===0)return 0;var l=0,f=t.suspendedLanes,h=t.pingedLanes,v=s&268435455;if(v!==0){var C=v&~f;C!==0?l=Qi(C):(h&=v,h!==0&&(l=Qi(h)))}else v=s&~f,v!==0?l=Qi(v):h!==0&&(l=Qi(h));if(l===0)return 0;if(r!==0&&r!==l&&!(r&f)&&(f=l&-l,h=r&-r,f>=h||f===16&&(h&4194240)!==0))return r;if(l&4&&(l|=s&16),r=t.entangledLanes,r!==0)for(t=t.entanglements,r&=l;0<r;)s=31-Gt(r),f=1<<s,l|=t[s],r&=~f;return l}function O1(t,r){switch(t){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function F1(t,r){for(var s=t.suspendedLanes,l=t.pingedLanes,f=t.expirationTimes,h=t.pendingLanes;0<h;){var v=31-Gt(h),C=1<<v,j=f[v];j===-1?(!(C&s)||C&l)&&(f[v]=O1(C,r)):j<=r&&(t.expiredLanes|=C),h&=~C}}function Jl(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Sp(){var t=Ss;return Ss<<=1,!(Ss&4194240)&&(Ss=64),t}function Zl(t){for(var r=[],s=0;31>s;s++)r.push(t);return r}function Ji(t,r,s){t.pendingLanes|=r,r!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,r=31-Gt(r),t[r]=s}function N1(t,r){var s=t.pendingLanes&~r;t.pendingLanes=r,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=r,t.mutableReadLanes&=r,t.entangledLanes&=r,r=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<s;){var f=31-Gt(s),h=1<<f;r[f]=0,l[f]=-1,t[f]=-1,s&=~h}}function eu(t,r){var s=t.entangledLanes|=r;for(t=t.entanglements;s;){var l=31-Gt(s),f=1<<l;f&r|t[l]&r&&(t[l]|=r),s&=~f}}var Ce=0;function bp(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var kp,tu,Ep,Cp,Tp,nu=!1,Es=[],$n=null,Mn=null,_n=null,Zi=new Map,eo=new Map,Bn=[],V1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Pp(t,r){switch(t){case"focusin":case"focusout":$n=null;break;case"dragenter":case"dragleave":Mn=null;break;case"mouseover":case"mouseout":_n=null;break;case"pointerover":case"pointerout":Zi.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":eo.delete(r.pointerId)}}function to(t,r,s,l,f,h){return t===null||t.nativeEvent!==h?(t={blockedOn:r,domEventName:s,eventSystemFlags:l,nativeEvent:h,targetContainers:[f]},r!==null&&(r=go(r),r!==null&&tu(r)),t):(t.eventSystemFlags|=l,r=t.targetContainers,f!==null&&r.indexOf(f)===-1&&r.push(f),t)}function z1(t,r,s,l,f){switch(r){case"focusin":return $n=to($n,t,r,s,l,f),!0;case"dragenter":return Mn=to(Mn,t,r,s,l,f),!0;case"mouseover":return _n=to(_n,t,r,s,l,f),!0;case"pointerover":var h=f.pointerId;return Zi.set(h,to(Zi.get(h)||null,t,r,s,l,f)),!0;case"gotpointercapture":return h=f.pointerId,eo.set(h,to(eo.get(h)||null,t,r,s,l,f)),!0}return!1}function jp(t){var r=mr(t.target);if(r!==null){var s=hr(r);if(s!==null){if(r=s.tag,r===13){if(r=pp(s),r!==null){t.blockedOn=r,Tp(t.priority,function(){Ep(s)});return}}else if(r===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Cs(t){if(t.blockedOn!==null)return!1;for(var r=t.targetContainers;0<r.length;){var s=iu(t.domEventName,t.eventSystemFlags,r[0],t.nativeEvent);if(s===null){s=t.nativeEvent;var l=new s.constructor(s.type,s);Hl=l,s.target.dispatchEvent(l),Hl=null}else return r=go(s),r!==null&&tu(r),t.blockedOn=s,!1;r.shift()}return!0}function Rp(t,r,s){Cs(t)&&s.delete(r)}function U1(){nu=!1,$n!==null&&Cs($n)&&($n=null),Mn!==null&&Cs(Mn)&&(Mn=null),_n!==null&&Cs(_n)&&(_n=null),Zi.forEach(Rp),eo.forEach(Rp)}function no(t,r){t.blockedOn===r&&(t.blockedOn=null,nu||(nu=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,U1)))}function ro(t){function r(f){return no(f,t)}if(0<Es.length){no(Es[0],t);for(var s=1;s<Es.length;s++){var l=Es[s];l.blockedOn===t&&(l.blockedOn=null)}}for($n!==null&&no($n,t),Mn!==null&&no(Mn,t),_n!==null&&no(_n,t),Zi.forEach(r),eo.forEach(r),s=0;s<Bn.length;s++)l=Bn[s],l.blockedOn===t&&(l.blockedOn=null);for(;0<Bn.length&&(s=Bn[0],s.blockedOn===null);)jp(s),s.blockedOn===null&&Bn.shift()}var Gr=F.ReactCurrentBatchConfig,Ts=!0;function W1(t,r,s,l){var f=Ce,h=Gr.transition;Gr.transition=null;try{Ce=1,ru(t,r,s,l)}finally{Ce=f,Gr.transition=h}}function H1(t,r,s,l){var f=Ce,h=Gr.transition;Gr.transition=null;try{Ce=4,ru(t,r,s,l)}finally{Ce=f,Gr.transition=h}}function ru(t,r,s,l){if(Ts){var f=iu(t,r,s,l);if(f===null)Su(t,r,l,Ps,s),Pp(t,l);else if(z1(f,t,r,s,l))l.stopPropagation();else if(Pp(t,l),r&4&&-1<V1.indexOf(t)){for(;f!==null;){var h=go(f);if(h!==null&&kp(h),h=iu(t,r,s,l),h===null&&Su(t,r,l,Ps,s),h===f)break;f=h}f!==null&&l.stopPropagation()}else Su(t,r,l,null,s)}}var Ps=null;function iu(t,r,s,l){if(Ps=null,t=Kl(l),t=mr(t),t!==null)if(r=hr(t),r===null)t=null;else if(s=r.tag,s===13){if(t=pp(r),t!==null)return t;t=null}else if(s===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;t=null}else r!==t&&(t=null);return Ps=t,null}function Ap(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(I1()){case Ql:return 1;case vp:return 4;case vs:case L1:return 16;case wp:return 536870912;default:return 16}default:return 16}}var On=null,ou=null,js=null;function Dp(){if(js)return js;var t,r=ou,s=r.length,l,f="value"in On?On.value:On.textContent,h=f.length;for(t=0;t<s&&r[t]===f[t];t++);var v=s-t;for(l=1;l<=v&&r[s-l]===f[h-l];l++);return js=f.slice(t,1<l?1-l:void 0)}function Rs(t){var r=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&r===13&&(t=13)):t=r,t===10&&(t=13),32<=t||t===13?t:0}function As(){return!0}function Ip(){return!1}function At(t){function r(s,l,f,h,v){this._reactName=s,this._targetInst=f,this.type=l,this.nativeEvent=h,this.target=v,this.currentTarget=null;for(var C in t)t.hasOwnProperty(C)&&(s=t[C],this[C]=s?s(h):h[C]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?As:Ip,this.isPropagationStopped=Ip,this}return X(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=As)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=As)},persist:function(){},isPersistent:As}),r}var Yr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},su=At(Yr),io=X({},Yr,{view:0,detail:0}),K1=At(io),au,lu,oo,Ds=X({},io,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:cu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==oo&&(oo&&t.type==="mousemove"?(au=t.screenX-oo.screenX,lu=t.screenY-oo.screenY):lu=au=0,oo=t),au)},movementY:function(t){return"movementY"in t?t.movementY:lu}}),Lp=At(Ds),G1=X({},Ds,{dataTransfer:0}),Y1=At(G1),q1=X({},io,{relatedTarget:0}),uu=At(q1),X1=X({},Yr,{animationName:0,elapsedTime:0,pseudoElement:0}),Q1=At(X1),J1=X({},Yr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Z1=At(J1),ew=X({},Yr,{data:0}),$p=At(ew),tw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},nw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},rw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function iw(t){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(t):(t=rw[t])?!!r[t]:!1}function cu(){return iw}var ow=X({},io,{key:function(t){if(t.key){var r=tw[t.key]||t.key;if(r!=="Unidentified")return r}return t.type==="keypress"?(t=Rs(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?nw[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:cu,charCode:function(t){return t.type==="keypress"?Rs(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Rs(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),sw=At(ow),aw=X({},Ds,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Mp=At(aw),lw=X({},io,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:cu}),uw=At(lw),cw=X({},Yr,{propertyName:0,elapsedTime:0,pseudoElement:0}),dw=At(cw),fw=X({},Ds,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),pw=At(fw),hw=[9,13,27,32],du=d&&"CompositionEvent"in window,so=null;d&&"documentMode"in document&&(so=document.documentMode);var mw=d&&"TextEvent"in window&&!so,_p=d&&(!du||so&&8<so&&11>=so),Bp=" ",Op=!1;function Fp(t,r){switch(t){case"keyup":return hw.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Np(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var qr=!1;function gw(t,r){switch(t){case"compositionend":return Np(r);case"keypress":return r.which!==32?null:(Op=!0,Bp);case"textInput":return t=r.data,t===Bp&&Op?null:t;default:return null}}function yw(t,r){if(qr)return t==="compositionend"||!du&&Fp(t,r)?(t=Dp(),js=ou=On=null,qr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return _p&&r.locale!=="ko"?null:r.data;default:return null}}var xw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Vp(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r==="input"?!!xw[t.type]:r==="textarea"}function zp(t,r,s,l){lp(l),r=_s(r,"onChange"),0<r.length&&(s=new su("onChange","change",null,s,l),t.push({event:s,listeners:r}))}var ao=null,lo=null;function vw(t){sh(t,0)}function Is(t){var r=ei(t);if(Kt(r))return t}function ww(t,r){if(t==="change")return r}var Up=!1;if(d){var fu;if(d){var pu="oninput"in document;if(!pu){var Wp=document.createElement("div");Wp.setAttribute("oninput","return;"),pu=typeof Wp.oninput=="function"}fu=pu}else fu=!1;Up=fu&&(!document.documentMode||9<document.documentMode)}function Hp(){ao&&(ao.detachEvent("onpropertychange",Kp),lo=ao=null)}function Kp(t){if(t.propertyName==="value"&&Is(lo)){var r=[];zp(r,lo,t,Kl(t)),fp(vw,r)}}function Sw(t,r,s){t==="focusin"?(Hp(),ao=r,lo=s,ao.attachEvent("onpropertychange",Kp)):t==="focusout"&&Hp()}function bw(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Is(lo)}function kw(t,r){if(t==="click")return Is(r)}function Ew(t,r){if(t==="input"||t==="change")return Is(r)}function Cw(t,r){return t===r&&(t!==0||1/t===1/r)||t!==t&&r!==r}var Yt=typeof Object.is=="function"?Object.is:Cw;function uo(t,r){if(Yt(t,r))return!0;if(typeof t!="object"||t===null||typeof r!="object"||r===null)return!1;var s=Object.keys(t),l=Object.keys(r);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var f=s[l];if(!p.call(r,f)||!Yt(t[f],r[f]))return!1}return!0}function Gp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Yp(t,r){var s=Gp(t);t=0;for(var l;s;){if(s.nodeType===3){if(l=t+s.textContent.length,t<=r&&l>=r)return{node:s,offset:r-t};t=l}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=Gp(s)}}function qp(t,r){return t&&r?t===r?!0:t&&t.nodeType===3?!1:r&&r.nodeType===3?qp(t,r.parentNode):"contains"in t?t.contains(r):t.compareDocumentPosition?!!(t.compareDocumentPosition(r)&16):!1:!1}function Xp(){for(var t=window,r=ms();r instanceof t.HTMLIFrameElement;){try{var s=typeof r.contentWindow.location.href=="string"}catch{s=!1}if(s)t=r.contentWindow;else break;r=ms(t.document)}return r}function hu(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r&&(r==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||r==="textarea"||t.contentEditable==="true")}function Tw(t){var r=Xp(),s=t.focusedElem,l=t.selectionRange;if(r!==s&&s&&s.ownerDocument&&qp(s.ownerDocument.documentElement,s)){if(l!==null&&hu(s)){if(r=l.start,t=l.end,t===void 0&&(t=r),"selectionStart"in s)s.selectionStart=r,s.selectionEnd=Math.min(t,s.value.length);else if(t=(r=s.ownerDocument||document)&&r.defaultView||window,t.getSelection){t=t.getSelection();var f=s.textContent.length,h=Math.min(l.start,f);l=l.end===void 0?h:Math.min(l.end,f),!t.extend&&h>l&&(f=l,l=h,h=f),f=Yp(s,h);var v=Yp(s,l);f&&v&&(t.rangeCount!==1||t.anchorNode!==f.node||t.anchorOffset!==f.offset||t.focusNode!==v.node||t.focusOffset!==v.offset)&&(r=r.createRange(),r.setStart(f.node,f.offset),t.removeAllRanges(),h>l?(t.addRange(r),t.extend(v.node,v.offset)):(r.setEnd(v.node,v.offset),t.addRange(r)))}}for(r=[],t=s;t=t.parentNode;)t.nodeType===1&&r.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<r.length;s++)t=r[s],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Pw=d&&"documentMode"in document&&11>=document.documentMode,Xr=null,mu=null,co=null,gu=!1;function Qp(t,r,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;gu||Xr==null||Xr!==ms(l)||(l=Xr,"selectionStart"in l&&hu(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),co&&uo(co,l)||(co=l,l=_s(mu,"onSelect"),0<l.length&&(r=new su("onSelect","select",null,r,s),t.push({event:r,listeners:l}),r.target=Xr)))}function Ls(t,r){var s={};return s[t.toLowerCase()]=r.toLowerCase(),s["Webkit"+t]="webkit"+r,s["Moz"+t]="moz"+r,s}var Qr={animationend:Ls("Animation","AnimationEnd"),animationiteration:Ls("Animation","AnimationIteration"),animationstart:Ls("Animation","AnimationStart"),transitionend:Ls("Transition","TransitionEnd")},yu={},Jp={};d&&(Jp=document.createElement("div").style,"AnimationEvent"in window||(delete Qr.animationend.animation,delete Qr.animationiteration.animation,delete Qr.animationstart.animation),"TransitionEvent"in window||delete Qr.transitionend.transition);function $s(t){if(yu[t])return yu[t];if(!Qr[t])return t;var r=Qr[t],s;for(s in r)if(r.hasOwnProperty(s)&&s in Jp)return yu[t]=r[s];return t}var Zp=$s("animationend"),eh=$s("animationiteration"),th=$s("animationstart"),nh=$s("transitionend"),rh=new Map,ih="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Fn(t,r){rh.set(t,r),u(r,[t])}for(var xu=0;xu<ih.length;xu++){var vu=ih[xu],jw=vu.toLowerCase(),Rw=vu[0].toUpperCase()+vu.slice(1);Fn(jw,"on"+Rw)}Fn(Zp,"onAnimationEnd"),Fn(eh,"onAnimationIteration"),Fn(th,"onAnimationStart"),Fn("dblclick","onDoubleClick"),Fn("focusin","onFocus"),Fn("focusout","onBlur"),Fn(nh,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Aw=new Set("cancel close invalid load scroll toggle".split(" ").concat(fo));function oh(t,r,s){var l=t.type||"unknown-event";t.currentTarget=s,j1(l,r,void 0,t),t.currentTarget=null}function sh(t,r){r=(r&4)!==0;for(var s=0;s<t.length;s++){var l=t[s],f=l.event;l=l.listeners;e:{var h=void 0;if(r)for(var v=l.length-1;0<=v;v--){var C=l[v],j=C.instance,_=C.currentTarget;if(C=C.listener,j!==h&&f.isPropagationStopped())break e;oh(f,C,_),h=j}else for(v=0;v<l.length;v++){if(C=l[v],j=C.instance,_=C.currentTarget,C=C.listener,j!==h&&f.isPropagationStopped())break e;oh(f,C,_),h=j}}}if(xs)throw t=Xl,xs=!1,Xl=null,t}function je(t,r){var s=r[Pu];s===void 0&&(s=r[Pu]=new Set);var l=t+"__bubble";s.has(l)||(ah(r,t,2,!1),s.add(l))}function wu(t,r,s){var l=0;r&&(l|=4),ah(s,t,l,r)}var Ms="_reactListening"+Math.random().toString(36).slice(2);function po(t){if(!t[Ms]){t[Ms]=!0,o.forEach(function(s){s!=="selectionchange"&&(Aw.has(s)||wu(s,!1,t),wu(s,!0,t))});var r=t.nodeType===9?t:t.ownerDocument;r===null||r[Ms]||(r[Ms]=!0,wu("selectionchange",!1,r))}}function ah(t,r,s,l){switch(Ap(r)){case 1:var f=W1;break;case 4:f=H1;break;default:f=ru}s=f.bind(null,r,s,t),f=void 0,!ql||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(f=!0),l?f!==void 0?t.addEventListener(r,s,{capture:!0,passive:f}):t.addEventListener(r,s,!0):f!==void 0?t.addEventListener(r,s,{passive:f}):t.addEventListener(r,s,!1)}function Su(t,r,s,l,f){var h=l;if(!(r&1)&&!(r&2)&&l!==null)e:for(;;){if(l===null)return;var v=l.tag;if(v===3||v===4){var C=l.stateNode.containerInfo;if(C===f||C.nodeType===8&&C.parentNode===f)break;if(v===4)for(v=l.return;v!==null;){var j=v.tag;if((j===3||j===4)&&(j=v.stateNode.containerInfo,j===f||j.nodeType===8&&j.parentNode===f))return;v=v.return}for(;C!==null;){if(v=mr(C),v===null)return;if(j=v.tag,j===5||j===6){l=h=v;continue e}C=C.parentNode}}l=l.return}fp(function(){var _=h,U=Kl(s),K=[];e:{var z=rh.get(t);if(z!==void 0){var J=su,ee=t;switch(t){case"keypress":if(Rs(s)===0)break e;case"keydown":case"keyup":J=sw;break;case"focusin":ee="focus",J=uu;break;case"focusout":ee="blur",J=uu;break;case"beforeblur":case"afterblur":J=uu;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":J=Lp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":J=Y1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":J=uw;break;case Zp:case eh:case th:J=Q1;break;case nh:J=dw;break;case"scroll":J=K1;break;case"wheel":J=pw;break;case"copy":case"cut":case"paste":J=Z1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":J=Mp}var ne=(r&4)!==0,Ve=!ne&&t==="scroll",L=ne?z!==null?z+"Capture":null:z;ne=[];for(var A=_,M;A!==null;){M=A;var G=M.stateNode;if(M.tag===5&&G!==null&&(M=G,L!==null&&(G=Yi(A,L),G!=null&&ne.push(ho(A,G,M)))),Ve)break;A=A.return}0<ne.length&&(z=new J(z,ee,null,s,U),K.push({event:z,listeners:ne}))}}if(!(r&7)){e:{if(z=t==="mouseover"||t==="pointerover",J=t==="mouseout"||t==="pointerout",z&&s!==Hl&&(ee=s.relatedTarget||s.fromElement)&&(mr(ee)||ee[wn]))break e;if((J||z)&&(z=U.window===U?U:(z=U.ownerDocument)?z.defaultView||z.parentWindow:window,J?(ee=s.relatedTarget||s.toElement,J=_,ee=ee?mr(ee):null,ee!==null&&(Ve=hr(ee),ee!==Ve||ee.tag!==5&&ee.tag!==6)&&(ee=null)):(J=null,ee=_),J!==ee)){if(ne=Lp,G="onMouseLeave",L="onMouseEnter",A="mouse",(t==="pointerout"||t==="pointerover")&&(ne=Mp,G="onPointerLeave",L="onPointerEnter",A="pointer"),Ve=J==null?z:ei(J),M=ee==null?z:ei(ee),z=new ne(G,A+"leave",J,s,U),z.target=Ve,z.relatedTarget=M,G=null,mr(U)===_&&(ne=new ne(L,A+"enter",ee,s,U),ne.target=M,ne.relatedTarget=Ve,G=ne),Ve=G,J&&ee)t:{for(ne=J,L=ee,A=0,M=ne;M;M=Jr(M))A++;for(M=0,G=L;G;G=Jr(G))M++;for(;0<A-M;)ne=Jr(ne),A--;for(;0<M-A;)L=Jr(L),M--;for(;A--;){if(ne===L||L!==null&&ne===L.alternate)break t;ne=Jr(ne),L=Jr(L)}ne=null}else ne=null;J!==null&&lh(K,z,J,ne,!1),ee!==null&&Ve!==null&&lh(K,Ve,ee,ne,!0)}}e:{if(z=_?ei(_):window,J=z.nodeName&&z.nodeName.toLowerCase(),J==="select"||J==="input"&&z.type==="file")var re=ww;else if(Vp(z))if(Up)re=Ew;else{re=bw;var ie=Sw}else(J=z.nodeName)&&J.toLowerCase()==="input"&&(z.type==="checkbox"||z.type==="radio")&&(re=kw);if(re&&(re=re(t,_))){zp(K,re,s,U);break e}ie&&ie(t,z,_),t==="focusout"&&(ie=z._wrapperState)&&ie.controlled&&z.type==="number"&&Nl(z,"number",z.value)}switch(ie=_?ei(_):window,t){case"focusin":(Vp(ie)||ie.contentEditable==="true")&&(Xr=ie,mu=_,co=null);break;case"focusout":co=mu=Xr=null;break;case"mousedown":gu=!0;break;case"contextmenu":case"mouseup":case"dragend":gu=!1,Qp(K,s,U);break;case"selectionchange":if(Pw)break;case"keydown":case"keyup":Qp(K,s,U)}var oe;if(du)e:{switch(t){case"compositionstart":var ue="onCompositionStart";break e;case"compositionend":ue="onCompositionEnd";break e;case"compositionupdate":ue="onCompositionUpdate";break e}ue=void 0}else qr?Fp(t,s)&&(ue="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(ue="onCompositionStart");ue&&(_p&&s.locale!=="ko"&&(qr||ue!=="onCompositionStart"?ue==="onCompositionEnd"&&qr&&(oe=Dp()):(On=U,ou="value"in On?On.value:On.textContent,qr=!0)),ie=_s(_,ue),0<ie.length&&(ue=new $p(ue,t,null,s,U),K.push({event:ue,listeners:ie}),oe?ue.data=oe:(oe=Np(s),oe!==null&&(ue.data=oe)))),(oe=mw?gw(t,s):yw(t,s))&&(_=_s(_,"onBeforeInput"),0<_.length&&(U=new $p("onBeforeInput","beforeinput",null,s,U),K.push({event:U,listeners:_}),U.data=oe))}sh(K,r)})}function ho(t,r,s){return{instance:t,listener:r,currentTarget:s}}function _s(t,r){for(var s=r+"Capture",l=[];t!==null;){var f=t,h=f.stateNode;f.tag===5&&h!==null&&(f=h,h=Yi(t,s),h!=null&&l.unshift(ho(t,h,f)),h=Yi(t,r),h!=null&&l.push(ho(t,h,f))),t=t.return}return l}function Jr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function lh(t,r,s,l,f){for(var h=r._reactName,v=[];s!==null&&s!==l;){var C=s,j=C.alternate,_=C.stateNode;if(j!==null&&j===l)break;C.tag===5&&_!==null&&(C=_,f?(j=Yi(s,h),j!=null&&v.unshift(ho(s,j,C))):f||(j=Yi(s,h),j!=null&&v.push(ho(s,j,C)))),s=s.return}v.length!==0&&t.push({event:r,listeners:v})}var Dw=/\r\n?/g,Iw=/\u0000|\uFFFD/g;function uh(t){return(typeof t=="string"?t:""+t).replace(Dw,`
`).replace(Iw,"")}function Bs(t,r,s){if(r=uh(r),uh(t)!==r&&s)throw Error(i(425))}function Os(){}var bu=null,ku=null;function Eu(t,r){return t==="textarea"||t==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Cu=typeof setTimeout=="function"?setTimeout:void 0,Lw=typeof clearTimeout=="function"?clearTimeout:void 0,ch=typeof Promise=="function"?Promise:void 0,$w=typeof queueMicrotask=="function"?queueMicrotask:typeof ch<"u"?function(t){return ch.resolve(null).then(t).catch(Mw)}:Cu;function Mw(t){setTimeout(function(){throw t})}function Tu(t,r){var s=r,l=0;do{var f=s.nextSibling;if(t.removeChild(s),f&&f.nodeType===8)if(s=f.data,s==="/$"){if(l===0){t.removeChild(f),ro(r);return}l--}else s!=="$"&&s!=="$?"&&s!=="$!"||l++;s=f}while(s);ro(r)}function Nn(t){for(;t!=null;t=t.nextSibling){var r=t.nodeType;if(r===1||r===3)break;if(r===8){if(r=t.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return t}function dh(t){t=t.previousSibling;for(var r=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"){if(r===0)return t;r--}else s==="/$"&&r++}t=t.previousSibling}return null}var Zr=Math.random().toString(36).slice(2),ln="__reactFiber$"+Zr,mo="__reactProps$"+Zr,wn="__reactContainer$"+Zr,Pu="__reactEvents$"+Zr,_w="__reactListeners$"+Zr,Bw="__reactHandles$"+Zr;function mr(t){var r=t[ln];if(r)return r;for(var s=t.parentNode;s;){if(r=s[wn]||s[ln]){if(s=r.alternate,r.child!==null||s!==null&&s.child!==null)for(t=dh(t);t!==null;){if(s=t[ln])return s;t=dh(t)}return r}t=s,s=t.parentNode}return null}function go(t){return t=t[ln]||t[wn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ei(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(i(33))}function Fs(t){return t[mo]||null}var ju=[],ti=-1;function Vn(t){return{current:t}}function Re(t){0>ti||(t.current=ju[ti],ju[ti]=null,ti--)}function Pe(t,r){ti++,ju[ti]=t.current,t.current=r}var zn={},ct=Vn(zn),wt=Vn(!1),gr=zn;function ni(t,r){var s=t.type.contextTypes;if(!s)return zn;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===r)return l.__reactInternalMemoizedMaskedChildContext;var f={},h;for(h in s)f[h]=r[h];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=f),f}function St(t){return t=t.childContextTypes,t!=null}function Ns(){Re(wt),Re(ct)}function fh(t,r,s){if(ct.current!==zn)throw Error(i(168));Pe(ct,r),Pe(wt,s)}function ph(t,r,s){var l=t.stateNode;if(r=r.childContextTypes,typeof l.getChildContext!="function")return s;l=l.getChildContext();for(var f in l)if(!(f in r))throw Error(i(108,be(t)||"Unknown",f));return X({},s,l)}function Vs(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||zn,gr=ct.current,Pe(ct,t),Pe(wt,wt.current),!0}function hh(t,r,s){var l=t.stateNode;if(!l)throw Error(i(169));s?(t=ph(t,r,gr),l.__reactInternalMemoizedMergedChildContext=t,Re(wt),Re(ct),Pe(ct,t)):Re(wt),Pe(wt,s)}var Sn=null,zs=!1,Ru=!1;function mh(t){Sn===null?Sn=[t]:Sn.push(t)}function Ow(t){zs=!0,mh(t)}function Un(){if(!Ru&&Sn!==null){Ru=!0;var t=0,r=Ce;try{var s=Sn;for(Ce=1;t<s.length;t++){var l=s[t];do l=l(!0);while(l!==null)}Sn=null,zs=!1}catch(f){throw Sn!==null&&(Sn=Sn.slice(t+1)),yp(Ql,Un),f}finally{Ce=r,Ru=!1}}return null}var ri=[],ii=0,Us=null,Ws=0,Mt=[],_t=0,yr=null,bn=1,kn="";function xr(t,r){ri[ii++]=Ws,ri[ii++]=Us,Us=t,Ws=r}function gh(t,r,s){Mt[_t++]=bn,Mt[_t++]=kn,Mt[_t++]=yr,yr=t;var l=bn;t=kn;var f=32-Gt(l)-1;l&=~(1<<f),s+=1;var h=32-Gt(r)+f;if(30<h){var v=f-f%5;h=(l&(1<<v)-1).toString(32),l>>=v,f-=v,bn=1<<32-Gt(r)+f|s<<f|l,kn=h+t}else bn=1<<h|s<<f|l,kn=t}function Au(t){t.return!==null&&(xr(t,1),gh(t,1,0))}function Du(t){for(;t===Us;)Us=ri[--ii],ri[ii]=null,Ws=ri[--ii],ri[ii]=null;for(;t===yr;)yr=Mt[--_t],Mt[_t]=null,kn=Mt[--_t],Mt[_t]=null,bn=Mt[--_t],Mt[_t]=null}var Dt=null,It=null,De=!1,qt=null;function yh(t,r){var s=Nt(5,null,null,0);s.elementType="DELETED",s.stateNode=r,s.return=t,r=t.deletions,r===null?(t.deletions=[s],t.flags|=16):r.push(s)}function xh(t,r){switch(t.tag){case 5:var s=t.type;return r=r.nodeType!==1||s.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(t.stateNode=r,Dt=t,It=Nn(r.firstChild),!0):!1;case 6:return r=t.pendingProps===""||r.nodeType!==3?null:r,r!==null?(t.stateNode=r,Dt=t,It=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(s=yr!==null?{id:bn,overflow:kn}:null,t.memoizedState={dehydrated:r,treeContext:s,retryLane:1073741824},s=Nt(18,null,null,0),s.stateNode=r,s.return=t,t.child=s,Dt=t,It=null,!0):!1;default:return!1}}function Iu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Lu(t){if(De){var r=It;if(r){var s=r;if(!xh(t,r)){if(Iu(t))throw Error(i(418));r=Nn(s.nextSibling);var l=Dt;r&&xh(t,r)?yh(l,s):(t.flags=t.flags&-4097|2,De=!1,Dt=t)}}else{if(Iu(t))throw Error(i(418));t.flags=t.flags&-4097|2,De=!1,Dt=t}}}function vh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Dt=t}function Hs(t){if(t!==Dt)return!1;if(!De)return vh(t),De=!0,!1;var r;if((r=t.tag!==3)&&!(r=t.tag!==5)&&(r=t.type,r=r!=="head"&&r!=="body"&&!Eu(t.type,t.memoizedProps)),r&&(r=It)){if(Iu(t))throw wh(),Error(i(418));for(;r;)yh(t,r),r=Nn(r.nextSibling)}if(vh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(i(317));e:{for(t=t.nextSibling,r=0;t;){if(t.nodeType===8){var s=t.data;if(s==="/$"){if(r===0){It=Nn(t.nextSibling);break e}r--}else s!=="$"&&s!=="$!"&&s!=="$?"||r++}t=t.nextSibling}It=null}}else It=Dt?Nn(t.stateNode.nextSibling):null;return!0}function wh(){for(var t=It;t;)t=Nn(t.nextSibling)}function oi(){It=Dt=null,De=!1}function $u(t){qt===null?qt=[t]:qt.push(t)}var Fw=F.ReactCurrentBatchConfig;function yo(t,r,s){if(t=s.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(s._owner){if(s=s._owner,s){if(s.tag!==1)throw Error(i(309));var l=s.stateNode}if(!l)throw Error(i(147,t));var f=l,h=""+t;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===h?r.ref:(r=function(v){var C=f.refs;v===null?delete C[h]:C[h]=v},r._stringRef=h,r)}if(typeof t!="string")throw Error(i(284));if(!s._owner)throw Error(i(290,t))}return t}function Ks(t,r){throw t=Object.prototype.toString.call(r),Error(i(31,t==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":t))}function Sh(t){var r=t._init;return r(t._payload)}function bh(t){function r(L,A){if(t){var M=L.deletions;M===null?(L.deletions=[A],L.flags|=16):M.push(A)}}function s(L,A){if(!t)return null;for(;A!==null;)r(L,A),A=A.sibling;return null}function l(L,A){for(L=new Map;A!==null;)A.key!==null?L.set(A.key,A):L.set(A.index,A),A=A.sibling;return L}function f(L,A){return L=Qn(L,A),L.index=0,L.sibling=null,L}function h(L,A,M){return L.index=M,t?(M=L.alternate,M!==null?(M=M.index,M<A?(L.flags|=2,A):M):(L.flags|=2,A)):(L.flags|=1048576,A)}function v(L){return t&&L.alternate===null&&(L.flags|=2),L}function C(L,A,M,G){return A===null||A.tag!==6?(A=Cc(M,L.mode,G),A.return=L,A):(A=f(A,M),A.return=L,A)}function j(L,A,M,G){var re=M.type;return re===W?U(L,A,M.props.children,G,M.key):A!==null&&(A.elementType===re||typeof re=="object"&&re!==null&&re.$$typeof===nt&&Sh(re)===A.type)?(G=f(A,M.props),G.ref=yo(L,A,M),G.return=L,G):(G=ga(M.type,M.key,M.props,null,L.mode,G),G.ref=yo(L,A,M),G.return=L,G)}function _(L,A,M,G){return A===null||A.tag!==4||A.stateNode.containerInfo!==M.containerInfo||A.stateNode.implementation!==M.implementation?(A=Tc(M,L.mode,G),A.return=L,A):(A=f(A,M.children||[]),A.return=L,A)}function U(L,A,M,G,re){return A===null||A.tag!==7?(A=Tr(M,L.mode,G,re),A.return=L,A):(A=f(A,M),A.return=L,A)}function K(L,A,M){if(typeof A=="string"&&A!==""||typeof A=="number")return A=Cc(""+A,L.mode,M),A.return=L,A;if(typeof A=="object"&&A!==null){switch(A.$$typeof){case O:return M=ga(A.type,A.key,A.props,null,L.mode,M),M.ref=yo(L,null,A),M.return=L,M;case V:return A=Tc(A,L.mode,M),A.return=L,A;case nt:var G=A._init;return K(L,G(A._payload),M)}if(Hi(A)||te(A))return A=Tr(A,L.mode,M,null),A.return=L,A;Ks(L,A)}return null}function z(L,A,M,G){var re=A!==null?A.key:null;if(typeof M=="string"&&M!==""||typeof M=="number")return re!==null?null:C(L,A,""+M,G);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case O:return M.key===re?j(L,A,M,G):null;case V:return M.key===re?_(L,A,M,G):null;case nt:return re=M._init,z(L,A,re(M._payload),G)}if(Hi(M)||te(M))return re!==null?null:U(L,A,M,G,null);Ks(L,M)}return null}function J(L,A,M,G,re){if(typeof G=="string"&&G!==""||typeof G=="number")return L=L.get(M)||null,C(A,L,""+G,re);if(typeof G=="object"&&G!==null){switch(G.$$typeof){case O:return L=L.get(G.key===null?M:G.key)||null,j(A,L,G,re);case V:return L=L.get(G.key===null?M:G.key)||null,_(A,L,G,re);case nt:var ie=G._init;return J(L,A,M,ie(G._payload),re)}if(Hi(G)||te(G))return L=L.get(M)||null,U(A,L,G,re,null);Ks(A,G)}return null}function ee(L,A,M,G){for(var re=null,ie=null,oe=A,ue=A=0,Je=null;oe!==null&&ue<M.length;ue++){oe.index>ue?(Je=oe,oe=null):Je=oe.sibling;var Se=z(L,oe,M[ue],G);if(Se===null){oe===null&&(oe=Je);break}t&&oe&&Se.alternate===null&&r(L,oe),A=h(Se,A,ue),ie===null?re=Se:ie.sibling=Se,ie=Se,oe=Je}if(ue===M.length)return s(L,oe),De&&xr(L,ue),re;if(oe===null){for(;ue<M.length;ue++)oe=K(L,M[ue],G),oe!==null&&(A=h(oe,A,ue),ie===null?re=oe:ie.sibling=oe,ie=oe);return De&&xr(L,ue),re}for(oe=l(L,oe);ue<M.length;ue++)Je=J(oe,L,ue,M[ue],G),Je!==null&&(t&&Je.alternate!==null&&oe.delete(Je.key===null?ue:Je.key),A=h(Je,A,ue),ie===null?re=Je:ie.sibling=Je,ie=Je);return t&&oe.forEach(function(Jn){return r(L,Jn)}),De&&xr(L,ue),re}function ne(L,A,M,G){var re=te(M);if(typeof re!="function")throw Error(i(150));if(M=re.call(M),M==null)throw Error(i(151));for(var ie=re=null,oe=A,ue=A=0,Je=null,Se=M.next();oe!==null&&!Se.done;ue++,Se=M.next()){oe.index>ue?(Je=oe,oe=null):Je=oe.sibling;var Jn=z(L,oe,Se.value,G);if(Jn===null){oe===null&&(oe=Je);break}t&&oe&&Jn.alternate===null&&r(L,oe),A=h(Jn,A,ue),ie===null?re=Jn:ie.sibling=Jn,ie=Jn,oe=Je}if(Se.done)return s(L,oe),De&&xr(L,ue),re;if(oe===null){for(;!Se.done;ue++,Se=M.next())Se=K(L,Se.value,G),Se!==null&&(A=h(Se,A,ue),ie===null?re=Se:ie.sibling=Se,ie=Se);return De&&xr(L,ue),re}for(oe=l(L,oe);!Se.done;ue++,Se=M.next())Se=J(oe,L,ue,Se.value,G),Se!==null&&(t&&Se.alternate!==null&&oe.delete(Se.key===null?ue:Se.key),A=h(Se,A,ue),ie===null?re=Se:ie.sibling=Se,ie=Se);return t&&oe.forEach(function(xS){return r(L,xS)}),De&&xr(L,ue),re}function Ve(L,A,M,G){if(typeof M=="object"&&M!==null&&M.type===W&&M.key===null&&(M=M.props.children),typeof M=="object"&&M!==null){switch(M.$$typeof){case O:e:{for(var re=M.key,ie=A;ie!==null;){if(ie.key===re){if(re=M.type,re===W){if(ie.tag===7){s(L,ie.sibling),A=f(ie,M.props.children),A.return=L,L=A;break e}}else if(ie.elementType===re||typeof re=="object"&&re!==null&&re.$$typeof===nt&&Sh(re)===ie.type){s(L,ie.sibling),A=f(ie,M.props),A.ref=yo(L,ie,M),A.return=L,L=A;break e}s(L,ie);break}else r(L,ie);ie=ie.sibling}M.type===W?(A=Tr(M.props.children,L.mode,G,M.key),A.return=L,L=A):(G=ga(M.type,M.key,M.props,null,L.mode,G),G.ref=yo(L,A,M),G.return=L,L=G)}return v(L);case V:e:{for(ie=M.key;A!==null;){if(A.key===ie)if(A.tag===4&&A.stateNode.containerInfo===M.containerInfo&&A.stateNode.implementation===M.implementation){s(L,A.sibling),A=f(A,M.children||[]),A.return=L,L=A;break e}else{s(L,A);break}else r(L,A);A=A.sibling}A=Tc(M,L.mode,G),A.return=L,L=A}return v(L);case nt:return ie=M._init,Ve(L,A,ie(M._payload),G)}if(Hi(M))return ee(L,A,M,G);if(te(M))return ne(L,A,M,G);Ks(L,M)}return typeof M=="string"&&M!==""||typeof M=="number"?(M=""+M,A!==null&&A.tag===6?(s(L,A.sibling),A=f(A,M),A.return=L,L=A):(s(L,A),A=Cc(M,L.mode,G),A.return=L,L=A),v(L)):s(L,A)}return Ve}var si=bh(!0),kh=bh(!1),Gs=Vn(null),Ys=null,ai=null,Mu=null;function _u(){Mu=ai=Ys=null}function Bu(t){var r=Gs.current;Re(Gs),t._currentValue=r}function Ou(t,r,s){for(;t!==null;){var l=t.alternate;if((t.childLanes&r)!==r?(t.childLanes|=r,l!==null&&(l.childLanes|=r)):l!==null&&(l.childLanes&r)!==r&&(l.childLanes|=r),t===s)break;t=t.return}}function li(t,r){Ys=t,Mu=ai=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&r&&(bt=!0),t.firstContext=null)}function Bt(t){var r=t._currentValue;if(Mu!==t)if(t={context:t,memoizedValue:r,next:null},ai===null){if(Ys===null)throw Error(i(308));ai=t,Ys.dependencies={lanes:0,firstContext:t}}else ai=ai.next=t;return r}var vr=null;function Fu(t){vr===null?vr=[t]:vr.push(t)}function Eh(t,r,s,l){var f=r.interleaved;return f===null?(s.next=s,Fu(r)):(s.next=f.next,f.next=s),r.interleaved=s,En(t,l)}function En(t,r){t.lanes|=r;var s=t.alternate;for(s!==null&&(s.lanes|=r),s=t,t=t.return;t!==null;)t.childLanes|=r,s=t.alternate,s!==null&&(s.childLanes|=r),s=t,t=t.return;return s.tag===3?s.stateNode:null}var Wn=!1;function Nu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ch(t,r){t=t.updateQueue,r.updateQueue===t&&(r.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Cn(t,r){return{eventTime:t,lane:r,tag:0,payload:null,callback:null,next:null}}function Hn(t,r,s){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,ve&2){var f=l.pending;return f===null?r.next=r:(r.next=f.next,f.next=r),l.pending=r,En(t,s)}return f=l.interleaved,f===null?(r.next=r,Fu(l)):(r.next=f.next,f.next=r),l.interleaved=r,En(t,s)}function qs(t,r,s){if(r=r.updateQueue,r!==null&&(r=r.shared,(s&4194240)!==0)){var l=r.lanes;l&=t.pendingLanes,s|=l,r.lanes=s,eu(t,s)}}function Th(t,r){var s=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var f=null,h=null;if(s=s.firstBaseUpdate,s!==null){do{var v={eventTime:s.eventTime,lane:s.lane,tag:s.tag,payload:s.payload,callback:s.callback,next:null};h===null?f=h=v:h=h.next=v,s=s.next}while(s!==null);h===null?f=h=r:h=h.next=r}else f=h=r;s={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:h,shared:l.shared,effects:l.effects},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=r:t.next=r,s.lastBaseUpdate=r}function Xs(t,r,s,l){var f=t.updateQueue;Wn=!1;var h=f.firstBaseUpdate,v=f.lastBaseUpdate,C=f.shared.pending;if(C!==null){f.shared.pending=null;var j=C,_=j.next;j.next=null,v===null?h=_:v.next=_,v=j;var U=t.alternate;U!==null&&(U=U.updateQueue,C=U.lastBaseUpdate,C!==v&&(C===null?U.firstBaseUpdate=_:C.next=_,U.lastBaseUpdate=j))}if(h!==null){var K=f.baseState;v=0,U=_=j=null,C=h;do{var z=C.lane,J=C.eventTime;if((l&z)===z){U!==null&&(U=U.next={eventTime:J,lane:0,tag:C.tag,payload:C.payload,callback:C.callback,next:null});e:{var ee=t,ne=C;switch(z=r,J=s,ne.tag){case 1:if(ee=ne.payload,typeof ee=="function"){K=ee.call(J,K,z);break e}K=ee;break e;case 3:ee.flags=ee.flags&-65537|128;case 0:if(ee=ne.payload,z=typeof ee=="function"?ee.call(J,K,z):ee,z==null)break e;K=X({},K,z);break e;case 2:Wn=!0}}C.callback!==null&&C.lane!==0&&(t.flags|=64,z=f.effects,z===null?f.effects=[C]:z.push(C))}else J={eventTime:J,lane:z,tag:C.tag,payload:C.payload,callback:C.callback,next:null},U===null?(_=U=J,j=K):U=U.next=J,v|=z;if(C=C.next,C===null){if(C=f.shared.pending,C===null)break;z=C,C=z.next,z.next=null,f.lastBaseUpdate=z,f.shared.pending=null}}while(!0);if(U===null&&(j=K),f.baseState=j,f.firstBaseUpdate=_,f.lastBaseUpdate=U,r=f.shared.interleaved,r!==null){f=r;do v|=f.lane,f=f.next;while(f!==r)}else h===null&&(f.shared.lanes=0);br|=v,t.lanes=v,t.memoizedState=K}}function Ph(t,r,s){if(t=r.effects,r.effects=null,t!==null)for(r=0;r<t.length;r++){var l=t[r],f=l.callback;if(f!==null){if(l.callback=null,l=s,typeof f!="function")throw Error(i(191,f));f.call(l)}}}var xo={},un=Vn(xo),vo=Vn(xo),wo=Vn(xo);function wr(t){if(t===xo)throw Error(i(174));return t}function Vu(t,r){switch(Pe(wo,r),Pe(vo,t),Pe(un,xo),t=r.nodeType,t){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:zl(null,"");break;default:t=t===8?r.parentNode:r,r=t.namespaceURI||null,t=t.tagName,r=zl(r,t)}Re(un),Pe(un,r)}function ui(){Re(un),Re(vo),Re(wo)}function jh(t){wr(wo.current);var r=wr(un.current),s=zl(r,t.type);r!==s&&(Pe(vo,t),Pe(un,s))}function zu(t){vo.current===t&&(Re(un),Re(vo))}var $e=Vn(0);function Qs(t){for(var r=t;r!==null;){if(r.tag===13){var s=r.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||s.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if(r.flags&128)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Uu=[];function Wu(){for(var t=0;t<Uu.length;t++)Uu[t]._workInProgressVersionPrimary=null;Uu.length=0}var Js=F.ReactCurrentDispatcher,Hu=F.ReactCurrentBatchConfig,Sr=0,Me=null,Ye=null,Xe=null,Zs=!1,So=!1,bo=0,Nw=0;function dt(){throw Error(i(321))}function Ku(t,r){if(r===null)return!1;for(var s=0;s<r.length&&s<t.length;s++)if(!Yt(t[s],r[s]))return!1;return!0}function Gu(t,r,s,l,f,h){if(Sr=h,Me=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Js.current=t===null||t.memoizedState===null?Ww:Hw,t=s(l,f),So){h=0;do{if(So=!1,bo=0,25<=h)throw Error(i(301));h+=1,Xe=Ye=null,r.updateQueue=null,Js.current=Kw,t=s(l,f)}while(So)}if(Js.current=na,r=Ye!==null&&Ye.next!==null,Sr=0,Xe=Ye=Me=null,Zs=!1,r)throw Error(i(300));return t}function Yu(){var t=bo!==0;return bo=0,t}function cn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Xe===null?Me.memoizedState=Xe=t:Xe=Xe.next=t,Xe}function Ot(){if(Ye===null){var t=Me.alternate;t=t!==null?t.memoizedState:null}else t=Ye.next;var r=Xe===null?Me.memoizedState:Xe.next;if(r!==null)Xe=r,Ye=t;else{if(t===null)throw Error(i(310));Ye=t,t={memoizedState:Ye.memoizedState,baseState:Ye.baseState,baseQueue:Ye.baseQueue,queue:Ye.queue,next:null},Xe===null?Me.memoizedState=Xe=t:Xe=Xe.next=t}return Xe}function ko(t,r){return typeof r=="function"?r(t):r}function qu(t){var r=Ot(),s=r.queue;if(s===null)throw Error(i(311));s.lastRenderedReducer=t;var l=Ye,f=l.baseQueue,h=s.pending;if(h!==null){if(f!==null){var v=f.next;f.next=h.next,h.next=v}l.baseQueue=f=h,s.pending=null}if(f!==null){h=f.next,l=l.baseState;var C=v=null,j=null,_=h;do{var U=_.lane;if((Sr&U)===U)j!==null&&(j=j.next={lane:0,action:_.action,hasEagerState:_.hasEagerState,eagerState:_.eagerState,next:null}),l=_.hasEagerState?_.eagerState:t(l,_.action);else{var K={lane:U,action:_.action,hasEagerState:_.hasEagerState,eagerState:_.eagerState,next:null};j===null?(C=j=K,v=l):j=j.next=K,Me.lanes|=U,br|=U}_=_.next}while(_!==null&&_!==h);j===null?v=l:j.next=C,Yt(l,r.memoizedState)||(bt=!0),r.memoizedState=l,r.baseState=v,r.baseQueue=j,s.lastRenderedState=l}if(t=s.interleaved,t!==null){f=t;do h=f.lane,Me.lanes|=h,br|=h,f=f.next;while(f!==t)}else f===null&&(s.lanes=0);return[r.memoizedState,s.dispatch]}function Xu(t){var r=Ot(),s=r.queue;if(s===null)throw Error(i(311));s.lastRenderedReducer=t;var l=s.dispatch,f=s.pending,h=r.memoizedState;if(f!==null){s.pending=null;var v=f=f.next;do h=t(h,v.action),v=v.next;while(v!==f);Yt(h,r.memoizedState)||(bt=!0),r.memoizedState=h,r.baseQueue===null&&(r.baseState=h),s.lastRenderedState=h}return[h,l]}function Rh(){}function Ah(t,r){var s=Me,l=Ot(),f=r(),h=!Yt(l.memoizedState,f);if(h&&(l.memoizedState=f,bt=!0),l=l.queue,Qu(Lh.bind(null,s,l,t),[t]),l.getSnapshot!==r||h||Xe!==null&&Xe.memoizedState.tag&1){if(s.flags|=2048,Eo(9,Ih.bind(null,s,l,f,r),void 0,null),Qe===null)throw Error(i(349));Sr&30||Dh(s,r,f)}return f}function Dh(t,r,s){t.flags|=16384,t={getSnapshot:r,value:s},r=Me.updateQueue,r===null?(r={lastEffect:null,stores:null},Me.updateQueue=r,r.stores=[t]):(s=r.stores,s===null?r.stores=[t]:s.push(t))}function Ih(t,r,s,l){r.value=s,r.getSnapshot=l,$h(r)&&Mh(t)}function Lh(t,r,s){return s(function(){$h(r)&&Mh(t)})}function $h(t){var r=t.getSnapshot;t=t.value;try{var s=r();return!Yt(t,s)}catch{return!0}}function Mh(t){var r=En(t,1);r!==null&&Zt(r,t,1,-1)}function _h(t){var r=cn();return typeof t=="function"&&(t=t()),r.memoizedState=r.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ko,lastRenderedState:t},r.queue=t,t=t.dispatch=Uw.bind(null,Me,t),[r.memoizedState,t]}function Eo(t,r,s,l){return t={tag:t,create:r,destroy:s,deps:l,next:null},r=Me.updateQueue,r===null?(r={lastEffect:null,stores:null},Me.updateQueue=r,r.lastEffect=t.next=t):(s=r.lastEffect,s===null?r.lastEffect=t.next=t:(l=s.next,s.next=t,t.next=l,r.lastEffect=t)),t}function Bh(){return Ot().memoizedState}function ea(t,r,s,l){var f=cn();Me.flags|=t,f.memoizedState=Eo(1|r,s,void 0,l===void 0?null:l)}function ta(t,r,s,l){var f=Ot();l=l===void 0?null:l;var h=void 0;if(Ye!==null){var v=Ye.memoizedState;if(h=v.destroy,l!==null&&Ku(l,v.deps)){f.memoizedState=Eo(r,s,h,l);return}}Me.flags|=t,f.memoizedState=Eo(1|r,s,h,l)}function Oh(t,r){return ea(8390656,8,t,r)}function Qu(t,r){return ta(2048,8,t,r)}function Fh(t,r){return ta(4,2,t,r)}function Nh(t,r){return ta(4,4,t,r)}function Vh(t,r){if(typeof r=="function")return t=t(),r(t),function(){r(null)};if(r!=null)return t=t(),r.current=t,function(){r.current=null}}function zh(t,r,s){return s=s!=null?s.concat([t]):null,ta(4,4,Vh.bind(null,r,t),s)}function Ju(){}function Uh(t,r){var s=Ot();r=r===void 0?null:r;var l=s.memoizedState;return l!==null&&r!==null&&Ku(r,l[1])?l[0]:(s.memoizedState=[t,r],t)}function Wh(t,r){var s=Ot();r=r===void 0?null:r;var l=s.memoizedState;return l!==null&&r!==null&&Ku(r,l[1])?l[0]:(t=t(),s.memoizedState=[t,r],t)}function Hh(t,r,s){return Sr&21?(Yt(s,r)||(s=Sp(),Me.lanes|=s,br|=s,t.baseState=!0),r):(t.baseState&&(t.baseState=!1,bt=!0),t.memoizedState=s)}function Vw(t,r){var s=Ce;Ce=s!==0&&4>s?s:4,t(!0);var l=Hu.transition;Hu.transition={};try{t(!1),r()}finally{Ce=s,Hu.transition=l}}function Kh(){return Ot().memoizedState}function zw(t,r,s){var l=qn(t);if(s={lane:l,action:s,hasEagerState:!1,eagerState:null,next:null},Gh(t))Yh(r,s);else if(s=Eh(t,r,s,l),s!==null){var f=xt();Zt(s,t,l,f),qh(s,r,l)}}function Uw(t,r,s){var l=qn(t),f={lane:l,action:s,hasEagerState:!1,eagerState:null,next:null};if(Gh(t))Yh(r,f);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=r.lastRenderedReducer,h!==null))try{var v=r.lastRenderedState,C=h(v,s);if(f.hasEagerState=!0,f.eagerState=C,Yt(C,v)){var j=r.interleaved;j===null?(f.next=f,Fu(r)):(f.next=j.next,j.next=f),r.interleaved=f;return}}catch{}finally{}s=Eh(t,r,f,l),s!==null&&(f=xt(),Zt(s,t,l,f),qh(s,r,l))}}function Gh(t){var r=t.alternate;return t===Me||r!==null&&r===Me}function Yh(t,r){So=Zs=!0;var s=t.pending;s===null?r.next=r:(r.next=s.next,s.next=r),t.pending=r}function qh(t,r,s){if(s&4194240){var l=r.lanes;l&=t.pendingLanes,s|=l,r.lanes=s,eu(t,s)}}var na={readContext:Bt,useCallback:dt,useContext:dt,useEffect:dt,useImperativeHandle:dt,useInsertionEffect:dt,useLayoutEffect:dt,useMemo:dt,useReducer:dt,useRef:dt,useState:dt,useDebugValue:dt,useDeferredValue:dt,useTransition:dt,useMutableSource:dt,useSyncExternalStore:dt,useId:dt,unstable_isNewReconciler:!1},Ww={readContext:Bt,useCallback:function(t,r){return cn().memoizedState=[t,r===void 0?null:r],t},useContext:Bt,useEffect:Oh,useImperativeHandle:function(t,r,s){return s=s!=null?s.concat([t]):null,ea(4194308,4,Vh.bind(null,r,t),s)},useLayoutEffect:function(t,r){return ea(4194308,4,t,r)},useInsertionEffect:function(t,r){return ea(4,2,t,r)},useMemo:function(t,r){var s=cn();return r=r===void 0?null:r,t=t(),s.memoizedState=[t,r],t},useReducer:function(t,r,s){var l=cn();return r=s!==void 0?s(r):r,l.memoizedState=l.baseState=r,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:r},l.queue=t,t=t.dispatch=zw.bind(null,Me,t),[l.memoizedState,t]},useRef:function(t){var r=cn();return t={current:t},r.memoizedState=t},useState:_h,useDebugValue:Ju,useDeferredValue:function(t){return cn().memoizedState=t},useTransition:function(){var t=_h(!1),r=t[0];return t=Vw.bind(null,t[1]),cn().memoizedState=t,[r,t]},useMutableSource:function(){},useSyncExternalStore:function(t,r,s){var l=Me,f=cn();if(De){if(s===void 0)throw Error(i(407));s=s()}else{if(s=r(),Qe===null)throw Error(i(349));Sr&30||Dh(l,r,s)}f.memoizedState=s;var h={value:s,getSnapshot:r};return f.queue=h,Oh(Lh.bind(null,l,h,t),[t]),l.flags|=2048,Eo(9,Ih.bind(null,l,h,s,r),void 0,null),s},useId:function(){var t=cn(),r=Qe.identifierPrefix;if(De){var s=kn,l=bn;s=(l&~(1<<32-Gt(l)-1)).toString(32)+s,r=":"+r+"R"+s,s=bo++,0<s&&(r+="H"+s.toString(32)),r+=":"}else s=Nw++,r=":"+r+"r"+s.toString(32)+":";return t.memoizedState=r},unstable_isNewReconciler:!1},Hw={readContext:Bt,useCallback:Uh,useContext:Bt,useEffect:Qu,useImperativeHandle:zh,useInsertionEffect:Fh,useLayoutEffect:Nh,useMemo:Wh,useReducer:qu,useRef:Bh,useState:function(){return qu(ko)},useDebugValue:Ju,useDeferredValue:function(t){var r=Ot();return Hh(r,Ye.memoizedState,t)},useTransition:function(){var t=qu(ko)[0],r=Ot().memoizedState;return[t,r]},useMutableSource:Rh,useSyncExternalStore:Ah,useId:Kh,unstable_isNewReconciler:!1},Kw={readContext:Bt,useCallback:Uh,useContext:Bt,useEffect:Qu,useImperativeHandle:zh,useInsertionEffect:Fh,useLayoutEffect:Nh,useMemo:Wh,useReducer:Xu,useRef:Bh,useState:function(){return Xu(ko)},useDebugValue:Ju,useDeferredValue:function(t){var r=Ot();return Ye===null?r.memoizedState=t:Hh(r,Ye.memoizedState,t)},useTransition:function(){var t=Xu(ko)[0],r=Ot().memoizedState;return[t,r]},useMutableSource:Rh,useSyncExternalStore:Ah,useId:Kh,unstable_isNewReconciler:!1};function Xt(t,r){if(t&&t.defaultProps){r=X({},r),t=t.defaultProps;for(var s in t)r[s]===void 0&&(r[s]=t[s]);return r}return r}function Zu(t,r,s,l){r=t.memoizedState,s=s(l,r),s=s==null?r:X({},r,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var ra={isMounted:function(t){return(t=t._reactInternals)?hr(t)===t:!1},enqueueSetState:function(t,r,s){t=t._reactInternals;var l=xt(),f=qn(t),h=Cn(l,f);h.payload=r,s!=null&&(h.callback=s),r=Hn(t,h,f),r!==null&&(Zt(r,t,f,l),qs(r,t,f))},enqueueReplaceState:function(t,r,s){t=t._reactInternals;var l=xt(),f=qn(t),h=Cn(l,f);h.tag=1,h.payload=r,s!=null&&(h.callback=s),r=Hn(t,h,f),r!==null&&(Zt(r,t,f,l),qs(r,t,f))},enqueueForceUpdate:function(t,r){t=t._reactInternals;var s=xt(),l=qn(t),f=Cn(s,l);f.tag=2,r!=null&&(f.callback=r),r=Hn(t,f,l),r!==null&&(Zt(r,t,l,s),qs(r,t,l))}};function Xh(t,r,s,l,f,h,v){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,h,v):r.prototype&&r.prototype.isPureReactComponent?!uo(s,l)||!uo(f,h):!0}function Qh(t,r,s){var l=!1,f=zn,h=r.contextType;return typeof h=="object"&&h!==null?h=Bt(h):(f=St(r)?gr:ct.current,l=r.contextTypes,h=(l=l!=null)?ni(t,f):zn),r=new r(s,h),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=ra,t.stateNode=r,r._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=f,t.__reactInternalMemoizedMaskedChildContext=h),r}function Jh(t,r,s,l){t=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(s,l),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(s,l),r.state!==t&&ra.enqueueReplaceState(r,r.state,null)}function ec(t,r,s,l){var f=t.stateNode;f.props=s,f.state=t.memoizedState,f.refs={},Nu(t);var h=r.contextType;typeof h=="object"&&h!==null?f.context=Bt(h):(h=St(r)?gr:ct.current,f.context=ni(t,h)),f.state=t.memoizedState,h=r.getDerivedStateFromProps,typeof h=="function"&&(Zu(t,r,h,s),f.state=t.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(r=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),r!==f.state&&ra.enqueueReplaceState(f,f.state,null),Xs(t,s,f,l),f.state=t.memoizedState),typeof f.componentDidMount=="function"&&(t.flags|=4194308)}function ci(t,r){try{var s="",l=r;do s+=ye(l),l=l.return;while(l);var f=s}catch(h){f=`
Error generating stack: `+h.message+`
`+h.stack}return{value:t,source:r,stack:f,digest:null}}function tc(t,r,s){return{value:t,source:null,stack:s??null,digest:r??null}}function nc(t,r){try{console.error(r.value)}catch(s){setTimeout(function(){throw s})}}var Gw=typeof WeakMap=="function"?WeakMap:Map;function Zh(t,r,s){s=Cn(-1,s),s.tag=3,s.payload={element:null};var l=r.value;return s.callback=function(){ca||(ca=!0,yc=l),nc(t,r)},s}function em(t,r,s){s=Cn(-1,s),s.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var f=r.value;s.payload=function(){return l(f)},s.callback=function(){nc(t,r)}}var h=t.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(s.callback=function(){nc(t,r),typeof l!="function"&&(Gn===null?Gn=new Set([this]):Gn.add(this));var v=r.stack;this.componentDidCatch(r.value,{componentStack:v!==null?v:""})}),s}function tm(t,r,s){var l=t.pingCache;if(l===null){l=t.pingCache=new Gw;var f=new Set;l.set(r,f)}else f=l.get(r),f===void 0&&(f=new Set,l.set(r,f));f.has(s)||(f.add(s),t=aS.bind(null,t,r,s),r.then(t,t))}function nm(t){do{var r;if((r=t.tag===13)&&(r=t.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return t;t=t.return}while(t!==null);return null}function rm(t,r,s,l,f){return t.mode&1?(t.flags|=65536,t.lanes=f,t):(t===r?t.flags|=65536:(t.flags|=128,s.flags|=131072,s.flags&=-52805,s.tag===1&&(s.alternate===null?s.tag=17:(r=Cn(-1,1),r.tag=2,Hn(s,r,1))),s.lanes|=1),t)}var Yw=F.ReactCurrentOwner,bt=!1;function yt(t,r,s,l){r.child=t===null?kh(r,null,s,l):si(r,t.child,s,l)}function im(t,r,s,l,f){s=s.render;var h=r.ref;return li(r,f),l=Gu(t,r,s,l,h,f),s=Yu(),t!==null&&!bt?(r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~f,Tn(t,r,f)):(De&&s&&Au(r),r.flags|=1,yt(t,r,l,f),r.child)}function om(t,r,s,l,f){if(t===null){var h=s.type;return typeof h=="function"&&!Ec(h)&&h.defaultProps===void 0&&s.compare===null&&s.defaultProps===void 0?(r.tag=15,r.type=h,sm(t,r,h,l,f)):(t=ga(s.type,null,l,r,r.mode,f),t.ref=r.ref,t.return=r,r.child=t)}if(h=t.child,!(t.lanes&f)){var v=h.memoizedProps;if(s=s.compare,s=s!==null?s:uo,s(v,l)&&t.ref===r.ref)return Tn(t,r,f)}return r.flags|=1,t=Qn(h,l),t.ref=r.ref,t.return=r,r.child=t}function sm(t,r,s,l,f){if(t!==null){var h=t.memoizedProps;if(uo(h,l)&&t.ref===r.ref)if(bt=!1,r.pendingProps=l=h,(t.lanes&f)!==0)t.flags&131072&&(bt=!0);else return r.lanes=t.lanes,Tn(t,r,f)}return rc(t,r,s,l,f)}function am(t,r,s){var l=r.pendingProps,f=l.children,h=t!==null?t.memoizedState:null;if(l.mode==="hidden")if(!(r.mode&1))r.memoizedState={baseLanes:0,cachePool:null,transitions:null},Pe(fi,Lt),Lt|=s;else{if(!(s&1073741824))return t=h!==null?h.baseLanes|s:s,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:t,cachePool:null,transitions:null},r.updateQueue=null,Pe(fi,Lt),Lt|=t,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=h!==null?h.baseLanes:s,Pe(fi,Lt),Lt|=l}else h!==null?(l=h.baseLanes|s,r.memoizedState=null):l=s,Pe(fi,Lt),Lt|=l;return yt(t,r,f,s),r.child}function lm(t,r){var s=r.ref;(t===null&&s!==null||t!==null&&t.ref!==s)&&(r.flags|=512,r.flags|=2097152)}function rc(t,r,s,l,f){var h=St(s)?gr:ct.current;return h=ni(r,h),li(r,f),s=Gu(t,r,s,l,h,f),l=Yu(),t!==null&&!bt?(r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~f,Tn(t,r,f)):(De&&l&&Au(r),r.flags|=1,yt(t,r,s,f),r.child)}function um(t,r,s,l,f){if(St(s)){var h=!0;Vs(r)}else h=!1;if(li(r,f),r.stateNode===null)oa(t,r),Qh(r,s,l),ec(r,s,l,f),l=!0;else if(t===null){var v=r.stateNode,C=r.memoizedProps;v.props=C;var j=v.context,_=s.contextType;typeof _=="object"&&_!==null?_=Bt(_):(_=St(s)?gr:ct.current,_=ni(r,_));var U=s.getDerivedStateFromProps,K=typeof U=="function"||typeof v.getSnapshotBeforeUpdate=="function";K||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(C!==l||j!==_)&&Jh(r,v,l,_),Wn=!1;var z=r.memoizedState;v.state=z,Xs(r,l,v,f),j=r.memoizedState,C!==l||z!==j||wt.current||Wn?(typeof U=="function"&&(Zu(r,s,U,l),j=r.memoizedState),(C=Wn||Xh(r,s,C,l,z,j,_))?(K||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount()),typeof v.componentDidMount=="function"&&(r.flags|=4194308)):(typeof v.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=l,r.memoizedState=j),v.props=l,v.state=j,v.context=_,l=C):(typeof v.componentDidMount=="function"&&(r.flags|=4194308),l=!1)}else{v=r.stateNode,Ch(t,r),C=r.memoizedProps,_=r.type===r.elementType?C:Xt(r.type,C),v.props=_,K=r.pendingProps,z=v.context,j=s.contextType,typeof j=="object"&&j!==null?j=Bt(j):(j=St(s)?gr:ct.current,j=ni(r,j));var J=s.getDerivedStateFromProps;(U=typeof J=="function"||typeof v.getSnapshotBeforeUpdate=="function")||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(C!==K||z!==j)&&Jh(r,v,l,j),Wn=!1,z=r.memoizedState,v.state=z,Xs(r,l,v,f);var ee=r.memoizedState;C!==K||z!==ee||wt.current||Wn?(typeof J=="function"&&(Zu(r,s,J,l),ee=r.memoizedState),(_=Wn||Xh(r,s,_,l,z,ee,j)||!1)?(U||typeof v.UNSAFE_componentWillUpdate!="function"&&typeof v.componentWillUpdate!="function"||(typeof v.componentWillUpdate=="function"&&v.componentWillUpdate(l,ee,j),typeof v.UNSAFE_componentWillUpdate=="function"&&v.UNSAFE_componentWillUpdate(l,ee,j)),typeof v.componentDidUpdate=="function"&&(r.flags|=4),typeof v.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof v.componentDidUpdate!="function"||C===t.memoizedProps&&z===t.memoizedState||(r.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||C===t.memoizedProps&&z===t.memoizedState||(r.flags|=1024),r.memoizedProps=l,r.memoizedState=ee),v.props=l,v.state=ee,v.context=j,l=_):(typeof v.componentDidUpdate!="function"||C===t.memoizedProps&&z===t.memoizedState||(r.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||C===t.memoizedProps&&z===t.memoizedState||(r.flags|=1024),l=!1)}return ic(t,r,s,l,h,f)}function ic(t,r,s,l,f,h){lm(t,r);var v=(r.flags&128)!==0;if(!l&&!v)return f&&hh(r,s,!1),Tn(t,r,h);l=r.stateNode,Yw.current=r;var C=v&&typeof s.getDerivedStateFromError!="function"?null:l.render();return r.flags|=1,t!==null&&v?(r.child=si(r,t.child,null,h),r.child=si(r,null,C,h)):yt(t,r,C,h),r.memoizedState=l.state,f&&hh(r,s,!0),r.child}function cm(t){var r=t.stateNode;r.pendingContext?fh(t,r.pendingContext,r.pendingContext!==r.context):r.context&&fh(t,r.context,!1),Vu(t,r.containerInfo)}function dm(t,r,s,l,f){return oi(),$u(f),r.flags|=256,yt(t,r,s,l),r.child}var oc={dehydrated:null,treeContext:null,retryLane:0};function sc(t){return{baseLanes:t,cachePool:null,transitions:null}}function fm(t,r,s){var l=r.pendingProps,f=$e.current,h=!1,v=(r.flags&128)!==0,C;if((C=v)||(C=t!==null&&t.memoizedState===null?!1:(f&2)!==0),C?(h=!0,r.flags&=-129):(t===null||t.memoizedState!==null)&&(f|=1),Pe($e,f&1),t===null)return Lu(r),t=r.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(r.mode&1?t.data==="$!"?r.lanes=8:r.lanes=1073741824:r.lanes=1,null):(v=l.children,t=l.fallback,h?(l=r.mode,h=r.child,v={mode:"hidden",children:v},!(l&1)&&h!==null?(h.childLanes=0,h.pendingProps=v):h=ya(v,l,0,null),t=Tr(t,l,s,null),h.return=r,t.return=r,h.sibling=t,r.child=h,r.child.memoizedState=sc(s),r.memoizedState=oc,t):ac(r,v));if(f=t.memoizedState,f!==null&&(C=f.dehydrated,C!==null))return qw(t,r,v,l,C,f,s);if(h){h=l.fallback,v=r.mode,f=t.child,C=f.sibling;var j={mode:"hidden",children:l.children};return!(v&1)&&r.child!==f?(l=r.child,l.childLanes=0,l.pendingProps=j,r.deletions=null):(l=Qn(f,j),l.subtreeFlags=f.subtreeFlags&14680064),C!==null?h=Qn(C,h):(h=Tr(h,v,s,null),h.flags|=2),h.return=r,l.return=r,l.sibling=h,r.child=l,l=h,h=r.child,v=t.child.memoizedState,v=v===null?sc(s):{baseLanes:v.baseLanes|s,cachePool:null,transitions:v.transitions},h.memoizedState=v,h.childLanes=t.childLanes&~s,r.memoizedState=oc,l}return h=t.child,t=h.sibling,l=Qn(h,{mode:"visible",children:l.children}),!(r.mode&1)&&(l.lanes=s),l.return=r,l.sibling=null,t!==null&&(s=r.deletions,s===null?(r.deletions=[t],r.flags|=16):s.push(t)),r.child=l,r.memoizedState=null,l}function ac(t,r){return r=ya({mode:"visible",children:r},t.mode,0,null),r.return=t,t.child=r}function ia(t,r,s,l){return l!==null&&$u(l),si(r,t.child,null,s),t=ac(r,r.pendingProps.children),t.flags|=2,r.memoizedState=null,t}function qw(t,r,s,l,f,h,v){if(s)return r.flags&256?(r.flags&=-257,l=tc(Error(i(422))),ia(t,r,v,l)):r.memoizedState!==null?(r.child=t.child,r.flags|=128,null):(h=l.fallback,f=r.mode,l=ya({mode:"visible",children:l.children},f,0,null),h=Tr(h,f,v,null),h.flags|=2,l.return=r,h.return=r,l.sibling=h,r.child=l,r.mode&1&&si(r,t.child,null,v),r.child.memoizedState=sc(v),r.memoizedState=oc,h);if(!(r.mode&1))return ia(t,r,v,null);if(f.data==="$!"){if(l=f.nextSibling&&f.nextSibling.dataset,l)var C=l.dgst;return l=C,h=Error(i(419)),l=tc(h,l,void 0),ia(t,r,v,l)}if(C=(v&t.childLanes)!==0,bt||C){if(l=Qe,l!==null){switch(v&-v){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=f&(l.suspendedLanes|v)?0:f,f!==0&&f!==h.retryLane&&(h.retryLane=f,En(t,f),Zt(l,t,f,-1))}return kc(),l=tc(Error(i(421))),ia(t,r,v,l)}return f.data==="$?"?(r.flags|=128,r.child=t.child,r=lS.bind(null,t),f._reactRetry=r,null):(t=h.treeContext,It=Nn(f.nextSibling),Dt=r,De=!0,qt=null,t!==null&&(Mt[_t++]=bn,Mt[_t++]=kn,Mt[_t++]=yr,bn=t.id,kn=t.overflow,yr=r),r=ac(r,l.children),r.flags|=4096,r)}function pm(t,r,s){t.lanes|=r;var l=t.alternate;l!==null&&(l.lanes|=r),Ou(t.return,r,s)}function lc(t,r,s,l,f){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:f}:(h.isBackwards=r,h.rendering=null,h.renderingStartTime=0,h.last=l,h.tail=s,h.tailMode=f)}function hm(t,r,s){var l=r.pendingProps,f=l.revealOrder,h=l.tail;if(yt(t,r,l.children,s),l=$e.current,l&2)l=l&1|2,r.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=r.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&pm(t,s,r);else if(t.tag===19)pm(t,s,r);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===r)break e;for(;t.sibling===null;){if(t.return===null||t.return===r)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(Pe($e,l),!(r.mode&1))r.memoizedState=null;else switch(f){case"forwards":for(s=r.child,f=null;s!==null;)t=s.alternate,t!==null&&Qs(t)===null&&(f=s),s=s.sibling;s=f,s===null?(f=r.child,r.child=null):(f=s.sibling,s.sibling=null),lc(r,!1,f,s,h);break;case"backwards":for(s=null,f=r.child,r.child=null;f!==null;){if(t=f.alternate,t!==null&&Qs(t)===null){r.child=f;break}t=f.sibling,f.sibling=s,s=f,f=t}lc(r,!0,s,null,h);break;case"together":lc(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function oa(t,r){!(r.mode&1)&&t!==null&&(t.alternate=null,r.alternate=null,r.flags|=2)}function Tn(t,r,s){if(t!==null&&(r.dependencies=t.dependencies),br|=r.lanes,!(s&r.childLanes))return null;if(t!==null&&r.child!==t.child)throw Error(i(153));if(r.child!==null){for(t=r.child,s=Qn(t,t.pendingProps),r.child=s,s.return=r;t.sibling!==null;)t=t.sibling,s=s.sibling=Qn(t,t.pendingProps),s.return=r;s.sibling=null}return r.child}function Xw(t,r,s){switch(r.tag){case 3:cm(r),oi();break;case 5:jh(r);break;case 1:St(r.type)&&Vs(r);break;case 4:Vu(r,r.stateNode.containerInfo);break;case 10:var l=r.type._context,f=r.memoizedProps.value;Pe(Gs,l._currentValue),l._currentValue=f;break;case 13:if(l=r.memoizedState,l!==null)return l.dehydrated!==null?(Pe($e,$e.current&1),r.flags|=128,null):s&r.child.childLanes?fm(t,r,s):(Pe($e,$e.current&1),t=Tn(t,r,s),t!==null?t.sibling:null);Pe($e,$e.current&1);break;case 19:if(l=(s&r.childLanes)!==0,t.flags&128){if(l)return hm(t,r,s);r.flags|=128}if(f=r.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Pe($e,$e.current),l)break;return null;case 22:case 23:return r.lanes=0,am(t,r,s)}return Tn(t,r,s)}var mm,uc,gm,ym;mm=function(t,r){for(var s=r.child;s!==null;){if(s.tag===5||s.tag===6)t.appendChild(s.stateNode);else if(s.tag!==4&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return;s=s.return}s.sibling.return=s.return,s=s.sibling}},uc=function(){},gm=function(t,r,s,l){var f=t.memoizedProps;if(f!==l){t=r.stateNode,wr(un.current);var h=null;switch(s){case"input":f=Ol(t,f),l=Ol(t,l),h=[];break;case"select":f=X({},f,{value:void 0}),l=X({},l,{value:void 0}),h=[];break;case"textarea":f=Vl(t,f),l=Vl(t,l),h=[];break;default:typeof f.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=Os)}Ul(s,l);var v;s=null;for(_ in f)if(!l.hasOwnProperty(_)&&f.hasOwnProperty(_)&&f[_]!=null)if(_==="style"){var C=f[_];for(v in C)C.hasOwnProperty(v)&&(s||(s={}),s[v]="")}else _!=="dangerouslySetInnerHTML"&&_!=="children"&&_!=="suppressContentEditableWarning"&&_!=="suppressHydrationWarning"&&_!=="autoFocus"&&(a.hasOwnProperty(_)?h||(h=[]):(h=h||[]).push(_,null));for(_ in l){var j=l[_];if(C=f!=null?f[_]:void 0,l.hasOwnProperty(_)&&j!==C&&(j!=null||C!=null))if(_==="style")if(C){for(v in C)!C.hasOwnProperty(v)||j&&j.hasOwnProperty(v)||(s||(s={}),s[v]="");for(v in j)j.hasOwnProperty(v)&&C[v]!==j[v]&&(s||(s={}),s[v]=j[v])}else s||(h||(h=[]),h.push(_,s)),s=j;else _==="dangerouslySetInnerHTML"?(j=j?j.__html:void 0,C=C?C.__html:void 0,j!=null&&C!==j&&(h=h||[]).push(_,j)):_==="children"?typeof j!="string"&&typeof j!="number"||(h=h||[]).push(_,""+j):_!=="suppressContentEditableWarning"&&_!=="suppressHydrationWarning"&&(a.hasOwnProperty(_)?(j!=null&&_==="onScroll"&&je("scroll",t),h||C===j||(h=[])):(h=h||[]).push(_,j))}s&&(h=h||[]).push("style",s);var _=h;(r.updateQueue=_)&&(r.flags|=4)}},ym=function(t,r,s,l){s!==l&&(r.flags|=4)};function Co(t,r){if(!De)switch(t.tailMode){case"hidden":r=t.tail;for(var s=null;r!==null;)r.alternate!==null&&(s=r),r=r.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?r||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function ft(t){var r=t.alternate!==null&&t.alternate.child===t.child,s=0,l=0;if(r)for(var f=t.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags&14680064,l|=f.flags&14680064,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=l,t.childLanes=s,r}function Qw(t,r,s){var l=r.pendingProps;switch(Du(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ft(r),null;case 1:return St(r.type)&&Ns(),ft(r),null;case 3:return l=r.stateNode,ui(),Re(wt),Re(ct),Wu(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(Hs(r)?r.flags|=4:t===null||t.memoizedState.isDehydrated&&!(r.flags&256)||(r.flags|=1024,qt!==null&&(wc(qt),qt=null))),uc(t,r),ft(r),null;case 5:zu(r);var f=wr(wo.current);if(s=r.type,t!==null&&r.stateNode!=null)gm(t,r,s,l,f),t.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!l){if(r.stateNode===null)throw Error(i(166));return ft(r),null}if(t=wr(un.current),Hs(r)){l=r.stateNode,s=r.type;var h=r.memoizedProps;switch(l[ln]=r,l[mo]=h,t=(r.mode&1)!==0,s){case"dialog":je("cancel",l),je("close",l);break;case"iframe":case"object":case"embed":je("load",l);break;case"video":case"audio":for(f=0;f<fo.length;f++)je(fo[f],l);break;case"source":je("error",l);break;case"img":case"image":case"link":je("error",l),je("load",l);break;case"details":je("toggle",l);break;case"input":Qf(l,h),je("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!h.multiple},je("invalid",l);break;case"textarea":ep(l,h),je("invalid",l)}Ul(s,h),f=null;for(var v in h)if(h.hasOwnProperty(v)){var C=h[v];v==="children"?typeof C=="string"?l.textContent!==C&&(h.suppressHydrationWarning!==!0&&Bs(l.textContent,C,t),f=["children",C]):typeof C=="number"&&l.textContent!==""+C&&(h.suppressHydrationWarning!==!0&&Bs(l.textContent,C,t),f=["children",""+C]):a.hasOwnProperty(v)&&C!=null&&v==="onScroll"&&je("scroll",l)}switch(s){case"input":vn(l),Zf(l,h,!0);break;case"textarea":vn(l),np(l);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(l.onclick=Os)}l=f,r.updateQueue=l,l!==null&&(r.flags|=4)}else{v=f.nodeType===9?f:f.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=rp(s)),t==="http://www.w3.org/1999/xhtml"?s==="script"?(t=v.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=v.createElement(s,{is:l.is}):(t=v.createElement(s),s==="select"&&(v=t,l.multiple?v.multiple=!0:l.size&&(v.size=l.size))):t=v.createElementNS(t,s),t[ln]=r,t[mo]=l,mm(t,r,!1,!1),r.stateNode=t;e:{switch(v=Wl(s,l),s){case"dialog":je("cancel",t),je("close",t),f=l;break;case"iframe":case"object":case"embed":je("load",t),f=l;break;case"video":case"audio":for(f=0;f<fo.length;f++)je(fo[f],t);f=l;break;case"source":je("error",t),f=l;break;case"img":case"image":case"link":je("error",t),je("load",t),f=l;break;case"details":je("toggle",t),f=l;break;case"input":Qf(t,l),f=Ol(t,l),je("invalid",t);break;case"option":f=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},f=X({},l,{value:void 0}),je("invalid",t);break;case"textarea":ep(t,l),f=Vl(t,l),je("invalid",t);break;default:f=l}Ul(s,f),C=f;for(h in C)if(C.hasOwnProperty(h)){var j=C[h];h==="style"?sp(t,j):h==="dangerouslySetInnerHTML"?(j=j?j.__html:void 0,j!=null&&ip(t,j)):h==="children"?typeof j=="string"?(s!=="textarea"||j!=="")&&Ki(t,j):typeof j=="number"&&Ki(t,""+j):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(a.hasOwnProperty(h)?j!=null&&h==="onScroll"&&je("scroll",t):j!=null&&D(t,h,j,v))}switch(s){case"input":vn(t),Zf(t,l,!1);break;case"textarea":vn(t),np(t);break;case"option":l.value!=null&&t.setAttribute("value",""+xe(l.value));break;case"select":t.multiple=!!l.multiple,h=l.value,h!=null?Wr(t,!!l.multiple,h,!1):l.defaultValue!=null&&Wr(t,!!l.multiple,l.defaultValue,!0);break;default:typeof f.onClick=="function"&&(t.onclick=Os)}switch(s){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return ft(r),null;case 6:if(t&&r.stateNode!=null)ym(t,r,t.memoizedProps,l);else{if(typeof l!="string"&&r.stateNode===null)throw Error(i(166));if(s=wr(wo.current),wr(un.current),Hs(r)){if(l=r.stateNode,s=r.memoizedProps,l[ln]=r,(h=l.nodeValue!==s)&&(t=Dt,t!==null))switch(t.tag){case 3:Bs(l.nodeValue,s,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Bs(l.nodeValue,s,(t.mode&1)!==0)}h&&(r.flags|=4)}else l=(s.nodeType===9?s:s.ownerDocument).createTextNode(l),l[ln]=r,r.stateNode=l}return ft(r),null;case 13:if(Re($e),l=r.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(De&&It!==null&&r.mode&1&&!(r.flags&128))wh(),oi(),r.flags|=98560,h=!1;else if(h=Hs(r),l!==null&&l.dehydrated!==null){if(t===null){if(!h)throw Error(i(318));if(h=r.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(i(317));h[ln]=r}else oi(),!(r.flags&128)&&(r.memoizedState=null),r.flags|=4;ft(r),h=!1}else qt!==null&&(wc(qt),qt=null),h=!0;if(!h)return r.flags&65536?r:null}return r.flags&128?(r.lanes=s,r):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(r.child.flags|=8192,r.mode&1&&(t===null||$e.current&1?qe===0&&(qe=3):kc())),r.updateQueue!==null&&(r.flags|=4),ft(r),null);case 4:return ui(),uc(t,r),t===null&&po(r.stateNode.containerInfo),ft(r),null;case 10:return Bu(r.type._context),ft(r),null;case 17:return St(r.type)&&Ns(),ft(r),null;case 19:if(Re($e),h=r.memoizedState,h===null)return ft(r),null;if(l=(r.flags&128)!==0,v=h.rendering,v===null)if(l)Co(h,!1);else{if(qe!==0||t!==null&&t.flags&128)for(t=r.child;t!==null;){if(v=Qs(t),v!==null){for(r.flags|=128,Co(h,!1),l=v.updateQueue,l!==null&&(r.updateQueue=l,r.flags|=4),r.subtreeFlags=0,l=s,s=r.child;s!==null;)h=s,t=l,h.flags&=14680066,v=h.alternate,v===null?(h.childLanes=0,h.lanes=t,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=v.childLanes,h.lanes=v.lanes,h.child=v.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=v.memoizedProps,h.memoizedState=v.memoizedState,h.updateQueue=v.updateQueue,h.type=v.type,t=v.dependencies,h.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),s=s.sibling;return Pe($e,$e.current&1|2),r.child}t=t.sibling}h.tail!==null&&Ne()>pi&&(r.flags|=128,l=!0,Co(h,!1),r.lanes=4194304)}else{if(!l)if(t=Qs(v),t!==null){if(r.flags|=128,l=!0,s=t.updateQueue,s!==null&&(r.updateQueue=s,r.flags|=4),Co(h,!0),h.tail===null&&h.tailMode==="hidden"&&!v.alternate&&!De)return ft(r),null}else 2*Ne()-h.renderingStartTime>pi&&s!==1073741824&&(r.flags|=128,l=!0,Co(h,!1),r.lanes=4194304);h.isBackwards?(v.sibling=r.child,r.child=v):(s=h.last,s!==null?s.sibling=v:r.child=v,h.last=v)}return h.tail!==null?(r=h.tail,h.rendering=r,h.tail=r.sibling,h.renderingStartTime=Ne(),r.sibling=null,s=$e.current,Pe($e,l?s&1|2:s&1),r):(ft(r),null);case 22:case 23:return bc(),l=r.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(r.flags|=8192),l&&r.mode&1?Lt&1073741824&&(ft(r),r.subtreeFlags&6&&(r.flags|=8192)):ft(r),null;case 24:return null;case 25:return null}throw Error(i(156,r.tag))}function Jw(t,r){switch(Du(r),r.tag){case 1:return St(r.type)&&Ns(),t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 3:return ui(),Re(wt),Re(ct),Wu(),t=r.flags,t&65536&&!(t&128)?(r.flags=t&-65537|128,r):null;case 5:return zu(r),null;case 13:if(Re($e),t=r.memoizedState,t!==null&&t.dehydrated!==null){if(r.alternate===null)throw Error(i(340));oi()}return t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 19:return Re($e),null;case 4:return ui(),null;case 10:return Bu(r.type._context),null;case 22:case 23:return bc(),null;case 24:return null;default:return null}}var sa=!1,pt=!1,Zw=typeof WeakSet=="function"?WeakSet:Set,Z=null;function di(t,r){var s=t.ref;if(s!==null)if(typeof s=="function")try{s(null)}catch(l){Oe(t,r,l)}else s.current=null}function cc(t,r,s){try{s()}catch(l){Oe(t,r,l)}}var xm=!1;function eS(t,r){if(bu=Ts,t=Xp(),hu(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var f=l.anchorOffset,h=l.focusNode;l=l.focusOffset;try{s.nodeType,h.nodeType}catch{s=null;break e}var v=0,C=-1,j=-1,_=0,U=0,K=t,z=null;t:for(;;){for(var J;K!==s||f!==0&&K.nodeType!==3||(C=v+f),K!==h||l!==0&&K.nodeType!==3||(j=v+l),K.nodeType===3&&(v+=K.nodeValue.length),(J=K.firstChild)!==null;)z=K,K=J;for(;;){if(K===t)break t;if(z===s&&++_===f&&(C=v),z===h&&++U===l&&(j=v),(J=K.nextSibling)!==null)break;K=z,z=K.parentNode}K=J}s=C===-1||j===-1?null:{start:C,end:j}}else s=null}s=s||{start:0,end:0}}else s=null;for(ku={focusedElem:t,selectionRange:s},Ts=!1,Z=r;Z!==null;)if(r=Z,t=r.child,(r.subtreeFlags&1028)!==0&&t!==null)t.return=r,Z=t;else for(;Z!==null;){r=Z;try{var ee=r.alternate;if(r.flags&1024)switch(r.tag){case 0:case 11:case 15:break;case 1:if(ee!==null){var ne=ee.memoizedProps,Ve=ee.memoizedState,L=r.stateNode,A=L.getSnapshotBeforeUpdate(r.elementType===r.type?ne:Xt(r.type,ne),Ve);L.__reactInternalSnapshotBeforeUpdate=A}break;case 3:var M=r.stateNode.containerInfo;M.nodeType===1?M.textContent="":M.nodeType===9&&M.documentElement&&M.removeChild(M.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(i(163))}}catch(G){Oe(r,r.return,G)}if(t=r.sibling,t!==null){t.return=r.return,Z=t;break}Z=r.return}return ee=xm,xm=!1,ee}function To(t,r,s){var l=r.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var f=l=l.next;do{if((f.tag&t)===t){var h=f.destroy;f.destroy=void 0,h!==void 0&&cc(r,s,h)}f=f.next}while(f!==l)}}function aa(t,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var l=s.create;s.destroy=l()}s=s.next}while(s!==r)}}function dc(t){var r=t.ref;if(r!==null){var s=t.stateNode;switch(t.tag){case 5:t=s;break;default:t=s}typeof r=="function"?r(t):r.current=t}}function vm(t){var r=t.alternate;r!==null&&(t.alternate=null,vm(r)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(r=t.stateNode,r!==null&&(delete r[ln],delete r[mo],delete r[Pu],delete r[_w],delete r[Bw])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function wm(t){return t.tag===5||t.tag===3||t.tag===4}function Sm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||wm(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function fc(t,r,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,r?s.nodeType===8?s.parentNode.insertBefore(t,r):s.insertBefore(t,r):(s.nodeType===8?(r=s.parentNode,r.insertBefore(t,s)):(r=s,r.appendChild(t)),s=s._reactRootContainer,s!=null||r.onclick!==null||(r.onclick=Os));else if(l!==4&&(t=t.child,t!==null))for(fc(t,r,s),t=t.sibling;t!==null;)fc(t,r,s),t=t.sibling}function pc(t,r,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,r?s.insertBefore(t,r):s.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for(pc(t,r,s),t=t.sibling;t!==null;)pc(t,r,s),t=t.sibling}var it=null,Qt=!1;function Kn(t,r,s){for(s=s.child;s!==null;)bm(t,r,s),s=s.sibling}function bm(t,r,s){if(an&&typeof an.onCommitFiberUnmount=="function")try{an.onCommitFiberUnmount(ws,s)}catch{}switch(s.tag){case 5:pt||di(s,r);case 6:var l=it,f=Qt;it=null,Kn(t,r,s),it=l,Qt=f,it!==null&&(Qt?(t=it,s=s.stateNode,t.nodeType===8?t.parentNode.removeChild(s):t.removeChild(s)):it.removeChild(s.stateNode));break;case 18:it!==null&&(Qt?(t=it,s=s.stateNode,t.nodeType===8?Tu(t.parentNode,s):t.nodeType===1&&Tu(t,s),ro(t)):Tu(it,s.stateNode));break;case 4:l=it,f=Qt,it=s.stateNode.containerInfo,Qt=!0,Kn(t,r,s),it=l,Qt=f;break;case 0:case 11:case 14:case 15:if(!pt&&(l=s.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){f=l=l.next;do{var h=f,v=h.destroy;h=h.tag,v!==void 0&&(h&2||h&4)&&cc(s,r,v),f=f.next}while(f!==l)}Kn(t,r,s);break;case 1:if(!pt&&(di(s,r),l=s.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=s.memoizedProps,l.state=s.memoizedState,l.componentWillUnmount()}catch(C){Oe(s,r,C)}Kn(t,r,s);break;case 21:Kn(t,r,s);break;case 22:s.mode&1?(pt=(l=pt)||s.memoizedState!==null,Kn(t,r,s),pt=l):Kn(t,r,s);break;default:Kn(t,r,s)}}function km(t){var r=t.updateQueue;if(r!==null){t.updateQueue=null;var s=t.stateNode;s===null&&(s=t.stateNode=new Zw),r.forEach(function(l){var f=uS.bind(null,t,l);s.has(l)||(s.add(l),l.then(f,f))})}}function Jt(t,r){var s=r.deletions;if(s!==null)for(var l=0;l<s.length;l++){var f=s[l];try{var h=t,v=r,C=v;e:for(;C!==null;){switch(C.tag){case 5:it=C.stateNode,Qt=!1;break e;case 3:it=C.stateNode.containerInfo,Qt=!0;break e;case 4:it=C.stateNode.containerInfo,Qt=!0;break e}C=C.return}if(it===null)throw Error(i(160));bm(h,v,f),it=null,Qt=!1;var j=f.alternate;j!==null&&(j.return=null),f.return=null}catch(_){Oe(f,r,_)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)Em(r,t),r=r.sibling}function Em(t,r){var s=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Jt(r,t),dn(t),l&4){try{To(3,t,t.return),aa(3,t)}catch(ne){Oe(t,t.return,ne)}try{To(5,t,t.return)}catch(ne){Oe(t,t.return,ne)}}break;case 1:Jt(r,t),dn(t),l&512&&s!==null&&di(s,s.return);break;case 5:if(Jt(r,t),dn(t),l&512&&s!==null&&di(s,s.return),t.flags&32){var f=t.stateNode;try{Ki(f,"")}catch(ne){Oe(t,t.return,ne)}}if(l&4&&(f=t.stateNode,f!=null)){var h=t.memoizedProps,v=s!==null?s.memoizedProps:h,C=t.type,j=t.updateQueue;if(t.updateQueue=null,j!==null)try{C==="input"&&h.type==="radio"&&h.name!=null&&Jf(f,h),Wl(C,v);var _=Wl(C,h);for(v=0;v<j.length;v+=2){var U=j[v],K=j[v+1];U==="style"?sp(f,K):U==="dangerouslySetInnerHTML"?ip(f,K):U==="children"?Ki(f,K):D(f,U,K,_)}switch(C){case"input":Fl(f,h);break;case"textarea":tp(f,h);break;case"select":var z=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!h.multiple;var J=h.value;J!=null?Wr(f,!!h.multiple,J,!1):z!==!!h.multiple&&(h.defaultValue!=null?Wr(f,!!h.multiple,h.defaultValue,!0):Wr(f,!!h.multiple,h.multiple?[]:"",!1))}f[mo]=h}catch(ne){Oe(t,t.return,ne)}}break;case 6:if(Jt(r,t),dn(t),l&4){if(t.stateNode===null)throw Error(i(162));f=t.stateNode,h=t.memoizedProps;try{f.nodeValue=h}catch(ne){Oe(t,t.return,ne)}}break;case 3:if(Jt(r,t),dn(t),l&4&&s!==null&&s.memoizedState.isDehydrated)try{ro(r.containerInfo)}catch(ne){Oe(t,t.return,ne)}break;case 4:Jt(r,t),dn(t);break;case 13:Jt(r,t),dn(t),f=t.child,f.flags&8192&&(h=f.memoizedState!==null,f.stateNode.isHidden=h,!h||f.alternate!==null&&f.alternate.memoizedState!==null||(gc=Ne())),l&4&&km(t);break;case 22:if(U=s!==null&&s.memoizedState!==null,t.mode&1?(pt=(_=pt)||U,Jt(r,t),pt=_):Jt(r,t),dn(t),l&8192){if(_=t.memoizedState!==null,(t.stateNode.isHidden=_)&&!U&&t.mode&1)for(Z=t,U=t.child;U!==null;){for(K=Z=U;Z!==null;){switch(z=Z,J=z.child,z.tag){case 0:case 11:case 14:case 15:To(4,z,z.return);break;case 1:di(z,z.return);var ee=z.stateNode;if(typeof ee.componentWillUnmount=="function"){l=z,s=z.return;try{r=l,ee.props=r.memoizedProps,ee.state=r.memoizedState,ee.componentWillUnmount()}catch(ne){Oe(l,s,ne)}}break;case 5:di(z,z.return);break;case 22:if(z.memoizedState!==null){Pm(K);continue}}J!==null?(J.return=z,Z=J):Pm(K)}U=U.sibling}e:for(U=null,K=t;;){if(K.tag===5){if(U===null){U=K;try{f=K.stateNode,_?(h=f.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(C=K.stateNode,j=K.memoizedProps.style,v=j!=null&&j.hasOwnProperty("display")?j.display:null,C.style.display=op("display",v))}catch(ne){Oe(t,t.return,ne)}}}else if(K.tag===6){if(U===null)try{K.stateNode.nodeValue=_?"":K.memoizedProps}catch(ne){Oe(t,t.return,ne)}}else if((K.tag!==22&&K.tag!==23||K.memoizedState===null||K===t)&&K.child!==null){K.child.return=K,K=K.child;continue}if(K===t)break e;for(;K.sibling===null;){if(K.return===null||K.return===t)break e;U===K&&(U=null),K=K.return}U===K&&(U=null),K.sibling.return=K.return,K=K.sibling}}break;case 19:Jt(r,t),dn(t),l&4&&km(t);break;case 21:break;default:Jt(r,t),dn(t)}}function dn(t){var r=t.flags;if(r&2){try{e:{for(var s=t.return;s!==null;){if(wm(s)){var l=s;break e}s=s.return}throw Error(i(160))}switch(l.tag){case 5:var f=l.stateNode;l.flags&32&&(Ki(f,""),l.flags&=-33);var h=Sm(t);pc(t,h,f);break;case 3:case 4:var v=l.stateNode.containerInfo,C=Sm(t);fc(t,C,v);break;default:throw Error(i(161))}}catch(j){Oe(t,t.return,j)}t.flags&=-3}r&4096&&(t.flags&=-4097)}function tS(t,r,s){Z=t,Cm(t)}function Cm(t,r,s){for(var l=(t.mode&1)!==0;Z!==null;){var f=Z,h=f.child;if(f.tag===22&&l){var v=f.memoizedState!==null||sa;if(!v){var C=f.alternate,j=C!==null&&C.memoizedState!==null||pt;C=sa;var _=pt;if(sa=v,(pt=j)&&!_)for(Z=f;Z!==null;)v=Z,j=v.child,v.tag===22&&v.memoizedState!==null?jm(f):j!==null?(j.return=v,Z=j):jm(f);for(;h!==null;)Z=h,Cm(h),h=h.sibling;Z=f,sa=C,pt=_}Tm(t)}else f.subtreeFlags&8772&&h!==null?(h.return=f,Z=h):Tm(t)}}function Tm(t){for(;Z!==null;){var r=Z;if(r.flags&8772){var s=r.alternate;try{if(r.flags&8772)switch(r.tag){case 0:case 11:case 15:pt||aa(5,r);break;case 1:var l=r.stateNode;if(r.flags&4&&!pt)if(s===null)l.componentDidMount();else{var f=r.elementType===r.type?s.memoizedProps:Xt(r.type,s.memoizedProps);l.componentDidUpdate(f,s.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var h=r.updateQueue;h!==null&&Ph(r,h,l);break;case 3:var v=r.updateQueue;if(v!==null){if(s=null,r.child!==null)switch(r.child.tag){case 5:s=r.child.stateNode;break;case 1:s=r.child.stateNode}Ph(r,v,s)}break;case 5:var C=r.stateNode;if(s===null&&r.flags&4){s=C;var j=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":j.autoFocus&&s.focus();break;case"img":j.src&&(s.src=j.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var _=r.alternate;if(_!==null){var U=_.memoizedState;if(U!==null){var K=U.dehydrated;K!==null&&ro(K)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(i(163))}pt||r.flags&512&&dc(r)}catch(z){Oe(r,r.return,z)}}if(r===t){Z=null;break}if(s=r.sibling,s!==null){s.return=r.return,Z=s;break}Z=r.return}}function Pm(t){for(;Z!==null;){var r=Z;if(r===t){Z=null;break}var s=r.sibling;if(s!==null){s.return=r.return,Z=s;break}Z=r.return}}function jm(t){for(;Z!==null;){var r=Z;try{switch(r.tag){case 0:case 11:case 15:var s=r.return;try{aa(4,r)}catch(j){Oe(r,s,j)}break;case 1:var l=r.stateNode;if(typeof l.componentDidMount=="function"){var f=r.return;try{l.componentDidMount()}catch(j){Oe(r,f,j)}}var h=r.return;try{dc(r)}catch(j){Oe(r,h,j)}break;case 5:var v=r.return;try{dc(r)}catch(j){Oe(r,v,j)}}}catch(j){Oe(r,r.return,j)}if(r===t){Z=null;break}var C=r.sibling;if(C!==null){C.return=r.return,Z=C;break}Z=r.return}}var nS=Math.ceil,la=F.ReactCurrentDispatcher,hc=F.ReactCurrentOwner,Ft=F.ReactCurrentBatchConfig,ve=0,Qe=null,Ke=null,ot=0,Lt=0,fi=Vn(0),qe=0,Po=null,br=0,ua=0,mc=0,jo=null,kt=null,gc=0,pi=1/0,Pn=null,ca=!1,yc=null,Gn=null,da=!1,Yn=null,fa=0,Ro=0,xc=null,pa=-1,ha=0;function xt(){return ve&6?Ne():pa!==-1?pa:pa=Ne()}function qn(t){return t.mode&1?ve&2&&ot!==0?ot&-ot:Fw.transition!==null?(ha===0&&(ha=Sp()),ha):(t=Ce,t!==0||(t=window.event,t=t===void 0?16:Ap(t.type)),t):1}function Zt(t,r,s,l){if(50<Ro)throw Ro=0,xc=null,Error(i(185));Ji(t,s,l),(!(ve&2)||t!==Qe)&&(t===Qe&&(!(ve&2)&&(ua|=s),qe===4&&Xn(t,ot)),Et(t,l),s===1&&ve===0&&!(r.mode&1)&&(pi=Ne()+500,zs&&Un()))}function Et(t,r){var s=t.callbackNode;F1(t,r);var l=ks(t,t===Qe?ot:0);if(l===0)s!==null&&xp(s),t.callbackNode=null,t.callbackPriority=0;else if(r=l&-l,t.callbackPriority!==r){if(s!=null&&xp(s),r===1)t.tag===0?Ow(Am.bind(null,t)):mh(Am.bind(null,t)),$w(function(){!(ve&6)&&Un()}),s=null;else{switch(bp(l)){case 1:s=Ql;break;case 4:s=vp;break;case 16:s=vs;break;case 536870912:s=wp;break;default:s=vs}s=Om(s,Rm.bind(null,t))}t.callbackPriority=r,t.callbackNode=s}}function Rm(t,r){if(pa=-1,ha=0,ve&6)throw Error(i(327));var s=t.callbackNode;if(hi()&&t.callbackNode!==s)return null;var l=ks(t,t===Qe?ot:0);if(l===0)return null;if(l&30||l&t.expiredLanes||r)r=ma(t,l);else{r=l;var f=ve;ve|=2;var h=Im();(Qe!==t||ot!==r)&&(Pn=null,pi=Ne()+500,Er(t,r));do try{oS();break}catch(C){Dm(t,C)}while(!0);_u(),la.current=h,ve=f,Ke!==null?r=0:(Qe=null,ot=0,r=qe)}if(r!==0){if(r===2&&(f=Jl(t),f!==0&&(l=f,r=vc(t,f))),r===1)throw s=Po,Er(t,0),Xn(t,l),Et(t,Ne()),s;if(r===6)Xn(t,l);else{if(f=t.current.alternate,!(l&30)&&!rS(f)&&(r=ma(t,l),r===2&&(h=Jl(t),h!==0&&(l=h,r=vc(t,h))),r===1))throw s=Po,Er(t,0),Xn(t,l),Et(t,Ne()),s;switch(t.finishedWork=f,t.finishedLanes=l,r){case 0:case 1:throw Error(i(345));case 2:Cr(t,kt,Pn);break;case 3:if(Xn(t,l),(l&130023424)===l&&(r=gc+500-Ne(),10<r)){if(ks(t,0)!==0)break;if(f=t.suspendedLanes,(f&l)!==l){xt(),t.pingedLanes|=t.suspendedLanes&f;break}t.timeoutHandle=Cu(Cr.bind(null,t,kt,Pn),r);break}Cr(t,kt,Pn);break;case 4:if(Xn(t,l),(l&4194240)===l)break;for(r=t.eventTimes,f=-1;0<l;){var v=31-Gt(l);h=1<<v,v=r[v],v>f&&(f=v),l&=~h}if(l=f,l=Ne()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*nS(l/1960))-l,10<l){t.timeoutHandle=Cu(Cr.bind(null,t,kt,Pn),l);break}Cr(t,kt,Pn);break;case 5:Cr(t,kt,Pn);break;default:throw Error(i(329))}}}return Et(t,Ne()),t.callbackNode===s?Rm.bind(null,t):null}function vc(t,r){var s=jo;return t.current.memoizedState.isDehydrated&&(Er(t,r).flags|=256),t=ma(t,r),t!==2&&(r=kt,kt=s,r!==null&&wc(r)),t}function wc(t){kt===null?kt=t:kt.push.apply(kt,t)}function rS(t){for(var r=t;;){if(r.flags&16384){var s=r.updateQueue;if(s!==null&&(s=s.stores,s!==null))for(var l=0;l<s.length;l++){var f=s[l],h=f.getSnapshot;f=f.value;try{if(!Yt(h(),f))return!1}catch{return!1}}}if(s=r.child,r.subtreeFlags&16384&&s!==null)s.return=r,r=s;else{if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Xn(t,r){for(r&=~mc,r&=~ua,t.suspendedLanes|=r,t.pingedLanes&=~r,t=t.expirationTimes;0<r;){var s=31-Gt(r),l=1<<s;t[s]=-1,r&=~l}}function Am(t){if(ve&6)throw Error(i(327));hi();var r=ks(t,0);if(!(r&1))return Et(t,Ne()),null;var s=ma(t,r);if(t.tag!==0&&s===2){var l=Jl(t);l!==0&&(r=l,s=vc(t,l))}if(s===1)throw s=Po,Er(t,0),Xn(t,r),Et(t,Ne()),s;if(s===6)throw Error(i(345));return t.finishedWork=t.current.alternate,t.finishedLanes=r,Cr(t,kt,Pn),Et(t,Ne()),null}function Sc(t,r){var s=ve;ve|=1;try{return t(r)}finally{ve=s,ve===0&&(pi=Ne()+500,zs&&Un())}}function kr(t){Yn!==null&&Yn.tag===0&&!(ve&6)&&hi();var r=ve;ve|=1;var s=Ft.transition,l=Ce;try{if(Ft.transition=null,Ce=1,t)return t()}finally{Ce=l,Ft.transition=s,ve=r,!(ve&6)&&Un()}}function bc(){Lt=fi.current,Re(fi)}function Er(t,r){t.finishedWork=null,t.finishedLanes=0;var s=t.timeoutHandle;if(s!==-1&&(t.timeoutHandle=-1,Lw(s)),Ke!==null)for(s=Ke.return;s!==null;){var l=s;switch(Du(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&Ns();break;case 3:ui(),Re(wt),Re(ct),Wu();break;case 5:zu(l);break;case 4:ui();break;case 13:Re($e);break;case 19:Re($e);break;case 10:Bu(l.type._context);break;case 22:case 23:bc()}s=s.return}if(Qe=t,Ke=t=Qn(t.current,null),ot=Lt=r,qe=0,Po=null,mc=ua=br=0,kt=jo=null,vr!==null){for(r=0;r<vr.length;r++)if(s=vr[r],l=s.interleaved,l!==null){s.interleaved=null;var f=l.next,h=s.pending;if(h!==null){var v=h.next;h.next=f,l.next=v}s.pending=l}vr=null}return t}function Dm(t,r){do{var s=Ke;try{if(_u(),Js.current=na,Zs){for(var l=Me.memoizedState;l!==null;){var f=l.queue;f!==null&&(f.pending=null),l=l.next}Zs=!1}if(Sr=0,Xe=Ye=Me=null,So=!1,bo=0,hc.current=null,s===null||s.return===null){qe=1,Po=r,Ke=null;break}e:{var h=t,v=s.return,C=s,j=r;if(r=ot,C.flags|=32768,j!==null&&typeof j=="object"&&typeof j.then=="function"){var _=j,U=C,K=U.tag;if(!(U.mode&1)&&(K===0||K===11||K===15)){var z=U.alternate;z?(U.updateQueue=z.updateQueue,U.memoizedState=z.memoizedState,U.lanes=z.lanes):(U.updateQueue=null,U.memoizedState=null)}var J=nm(v);if(J!==null){J.flags&=-257,rm(J,v,C,h,r),J.mode&1&&tm(h,_,r),r=J,j=_;var ee=r.updateQueue;if(ee===null){var ne=new Set;ne.add(j),r.updateQueue=ne}else ee.add(j);break e}else{if(!(r&1)){tm(h,_,r),kc();break e}j=Error(i(426))}}else if(De&&C.mode&1){var Ve=nm(v);if(Ve!==null){!(Ve.flags&65536)&&(Ve.flags|=256),rm(Ve,v,C,h,r),$u(ci(j,C));break e}}h=j=ci(j,C),qe!==4&&(qe=2),jo===null?jo=[h]:jo.push(h),h=v;do{switch(h.tag){case 3:h.flags|=65536,r&=-r,h.lanes|=r;var L=Zh(h,j,r);Th(h,L);break e;case 1:C=j;var A=h.type,M=h.stateNode;if(!(h.flags&128)&&(typeof A.getDerivedStateFromError=="function"||M!==null&&typeof M.componentDidCatch=="function"&&(Gn===null||!Gn.has(M)))){h.flags|=65536,r&=-r,h.lanes|=r;var G=em(h,C,r);Th(h,G);break e}}h=h.return}while(h!==null)}$m(s)}catch(re){r=re,Ke===s&&s!==null&&(Ke=s=s.return);continue}break}while(!0)}function Im(){var t=la.current;return la.current=na,t===null?na:t}function kc(){(qe===0||qe===3||qe===2)&&(qe=4),Qe===null||!(br&268435455)&&!(ua&268435455)||Xn(Qe,ot)}function ma(t,r){var s=ve;ve|=2;var l=Im();(Qe!==t||ot!==r)&&(Pn=null,Er(t,r));do try{iS();break}catch(f){Dm(t,f)}while(!0);if(_u(),ve=s,la.current=l,Ke!==null)throw Error(i(261));return Qe=null,ot=0,qe}function iS(){for(;Ke!==null;)Lm(Ke)}function oS(){for(;Ke!==null&&!A1();)Lm(Ke)}function Lm(t){var r=Bm(t.alternate,t,Lt);t.memoizedProps=t.pendingProps,r===null?$m(t):Ke=r,hc.current=null}function $m(t){var r=t;do{var s=r.alternate;if(t=r.return,r.flags&32768){if(s=Jw(s,r),s!==null){s.flags&=32767,Ke=s;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{qe=6,Ke=null;return}}else if(s=Qw(s,r,Lt),s!==null){Ke=s;return}if(r=r.sibling,r!==null){Ke=r;return}Ke=r=t}while(r!==null);qe===0&&(qe=5)}function Cr(t,r,s){var l=Ce,f=Ft.transition;try{Ft.transition=null,Ce=1,sS(t,r,s,l)}finally{Ft.transition=f,Ce=l}return null}function sS(t,r,s,l){do hi();while(Yn!==null);if(ve&6)throw Error(i(327));s=t.finishedWork;var f=t.finishedLanes;if(s===null)return null;if(t.finishedWork=null,t.finishedLanes=0,s===t.current)throw Error(i(177));t.callbackNode=null,t.callbackPriority=0;var h=s.lanes|s.childLanes;if(N1(t,h),t===Qe&&(Ke=Qe=null,ot=0),!(s.subtreeFlags&2064)&&!(s.flags&2064)||da||(da=!0,Om(vs,function(){return hi(),null})),h=(s.flags&15990)!==0,s.subtreeFlags&15990||h){h=Ft.transition,Ft.transition=null;var v=Ce;Ce=1;var C=ve;ve|=4,hc.current=null,eS(t,s),Em(s,t),Tw(ku),Ts=!!bu,ku=bu=null,t.current=s,tS(s),D1(),ve=C,Ce=v,Ft.transition=h}else t.current=s;if(da&&(da=!1,Yn=t,fa=f),h=t.pendingLanes,h===0&&(Gn=null),$1(s.stateNode),Et(t,Ne()),r!==null)for(l=t.onRecoverableError,s=0;s<r.length;s++)f=r[s],l(f.value,{componentStack:f.stack,digest:f.digest});if(ca)throw ca=!1,t=yc,yc=null,t;return fa&1&&t.tag!==0&&hi(),h=t.pendingLanes,h&1?t===xc?Ro++:(Ro=0,xc=t):Ro=0,Un(),null}function hi(){if(Yn!==null){var t=bp(fa),r=Ft.transition,s=Ce;try{if(Ft.transition=null,Ce=16>t?16:t,Yn===null)var l=!1;else{if(t=Yn,Yn=null,fa=0,ve&6)throw Error(i(331));var f=ve;for(ve|=4,Z=t.current;Z!==null;){var h=Z,v=h.child;if(Z.flags&16){var C=h.deletions;if(C!==null){for(var j=0;j<C.length;j++){var _=C[j];for(Z=_;Z!==null;){var U=Z;switch(U.tag){case 0:case 11:case 15:To(8,U,h)}var K=U.child;if(K!==null)K.return=U,Z=K;else for(;Z!==null;){U=Z;var z=U.sibling,J=U.return;if(vm(U),U===_){Z=null;break}if(z!==null){z.return=J,Z=z;break}Z=J}}}var ee=h.alternate;if(ee!==null){var ne=ee.child;if(ne!==null){ee.child=null;do{var Ve=ne.sibling;ne.sibling=null,ne=Ve}while(ne!==null)}}Z=h}}if(h.subtreeFlags&2064&&v!==null)v.return=h,Z=v;else e:for(;Z!==null;){if(h=Z,h.flags&2048)switch(h.tag){case 0:case 11:case 15:To(9,h,h.return)}var L=h.sibling;if(L!==null){L.return=h.return,Z=L;break e}Z=h.return}}var A=t.current;for(Z=A;Z!==null;){v=Z;var M=v.child;if(v.subtreeFlags&2064&&M!==null)M.return=v,Z=M;else e:for(v=A;Z!==null;){if(C=Z,C.flags&2048)try{switch(C.tag){case 0:case 11:case 15:aa(9,C)}}catch(re){Oe(C,C.return,re)}if(C===v){Z=null;break e}var G=C.sibling;if(G!==null){G.return=C.return,Z=G;break e}Z=C.return}}if(ve=f,Un(),an&&typeof an.onPostCommitFiberRoot=="function")try{an.onPostCommitFiberRoot(ws,t)}catch{}l=!0}return l}finally{Ce=s,Ft.transition=r}}return!1}function Mm(t,r,s){r=ci(s,r),r=Zh(t,r,1),t=Hn(t,r,1),r=xt(),t!==null&&(Ji(t,1,r),Et(t,r))}function Oe(t,r,s){if(t.tag===3)Mm(t,t,s);else for(;r!==null;){if(r.tag===3){Mm(r,t,s);break}else if(r.tag===1){var l=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Gn===null||!Gn.has(l))){t=ci(s,t),t=em(r,t,1),r=Hn(r,t,1),t=xt(),r!==null&&(Ji(r,1,t),Et(r,t));break}}r=r.return}}function aS(t,r,s){var l=t.pingCache;l!==null&&l.delete(r),r=xt(),t.pingedLanes|=t.suspendedLanes&s,Qe===t&&(ot&s)===s&&(qe===4||qe===3&&(ot&130023424)===ot&&500>Ne()-gc?Er(t,0):mc|=s),Et(t,r)}function _m(t,r){r===0&&(t.mode&1?(r=bs,bs<<=1,!(bs&130023424)&&(bs=4194304)):r=1);var s=xt();t=En(t,r),t!==null&&(Ji(t,r,s),Et(t,s))}function lS(t){var r=t.memoizedState,s=0;r!==null&&(s=r.retryLane),_m(t,s)}function uS(t,r){var s=0;switch(t.tag){case 13:var l=t.stateNode,f=t.memoizedState;f!==null&&(s=f.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(i(314))}l!==null&&l.delete(r),_m(t,s)}var Bm;Bm=function(t,r,s){if(t!==null)if(t.memoizedProps!==r.pendingProps||wt.current)bt=!0;else{if(!(t.lanes&s)&&!(r.flags&128))return bt=!1,Xw(t,r,s);bt=!!(t.flags&131072)}else bt=!1,De&&r.flags&1048576&&gh(r,Ws,r.index);switch(r.lanes=0,r.tag){case 2:var l=r.type;oa(t,r),t=r.pendingProps;var f=ni(r,ct.current);li(r,s),f=Gu(null,r,l,t,f,s);var h=Yu();return r.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,St(l)?(h=!0,Vs(r)):h=!1,r.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,Nu(r),f.updater=ra,r.stateNode=f,f._reactInternals=r,ec(r,l,t,s),r=ic(null,r,l,!0,h,s)):(r.tag=0,De&&h&&Au(r),yt(null,r,f,s),r=r.child),r;case 16:l=r.elementType;e:{switch(oa(t,r),t=r.pendingProps,f=l._init,l=f(l._payload),r.type=l,f=r.tag=dS(l),t=Xt(l,t),f){case 0:r=rc(null,r,l,t,s);break e;case 1:r=um(null,r,l,t,s);break e;case 11:r=im(null,r,l,t,s);break e;case 14:r=om(null,r,l,Xt(l.type,t),s);break e}throw Error(i(306,l,""))}return r;case 0:return l=r.type,f=r.pendingProps,f=r.elementType===l?f:Xt(l,f),rc(t,r,l,f,s);case 1:return l=r.type,f=r.pendingProps,f=r.elementType===l?f:Xt(l,f),um(t,r,l,f,s);case 3:e:{if(cm(r),t===null)throw Error(i(387));l=r.pendingProps,h=r.memoizedState,f=h.element,Ch(t,r),Xs(r,l,null,s);var v=r.memoizedState;if(l=v.element,h.isDehydrated)if(h={element:l,isDehydrated:!1,cache:v.cache,pendingSuspenseBoundaries:v.pendingSuspenseBoundaries,transitions:v.transitions},r.updateQueue.baseState=h,r.memoizedState=h,r.flags&256){f=ci(Error(i(423)),r),r=dm(t,r,l,s,f);break e}else if(l!==f){f=ci(Error(i(424)),r),r=dm(t,r,l,s,f);break e}else for(It=Nn(r.stateNode.containerInfo.firstChild),Dt=r,De=!0,qt=null,s=kh(r,null,l,s),r.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(oi(),l===f){r=Tn(t,r,s);break e}yt(t,r,l,s)}r=r.child}return r;case 5:return jh(r),t===null&&Lu(r),l=r.type,f=r.pendingProps,h=t!==null?t.memoizedProps:null,v=f.children,Eu(l,f)?v=null:h!==null&&Eu(l,h)&&(r.flags|=32),lm(t,r),yt(t,r,v,s),r.child;case 6:return t===null&&Lu(r),null;case 13:return fm(t,r,s);case 4:return Vu(r,r.stateNode.containerInfo),l=r.pendingProps,t===null?r.child=si(r,null,l,s):yt(t,r,l,s),r.child;case 11:return l=r.type,f=r.pendingProps,f=r.elementType===l?f:Xt(l,f),im(t,r,l,f,s);case 7:return yt(t,r,r.pendingProps,s),r.child;case 8:return yt(t,r,r.pendingProps.children,s),r.child;case 12:return yt(t,r,r.pendingProps.children,s),r.child;case 10:e:{if(l=r.type._context,f=r.pendingProps,h=r.memoizedProps,v=f.value,Pe(Gs,l._currentValue),l._currentValue=v,h!==null)if(Yt(h.value,v)){if(h.children===f.children&&!wt.current){r=Tn(t,r,s);break e}}else for(h=r.child,h!==null&&(h.return=r);h!==null;){var C=h.dependencies;if(C!==null){v=h.child;for(var j=C.firstContext;j!==null;){if(j.context===l){if(h.tag===1){j=Cn(-1,s&-s),j.tag=2;var _=h.updateQueue;if(_!==null){_=_.shared;var U=_.pending;U===null?j.next=j:(j.next=U.next,U.next=j),_.pending=j}}h.lanes|=s,j=h.alternate,j!==null&&(j.lanes|=s),Ou(h.return,s,r),C.lanes|=s;break}j=j.next}}else if(h.tag===10)v=h.type===r.type?null:h.child;else if(h.tag===18){if(v=h.return,v===null)throw Error(i(341));v.lanes|=s,C=v.alternate,C!==null&&(C.lanes|=s),Ou(v,s,r),v=h.sibling}else v=h.child;if(v!==null)v.return=h;else for(v=h;v!==null;){if(v===r){v=null;break}if(h=v.sibling,h!==null){h.return=v.return,v=h;break}v=v.return}h=v}yt(t,r,f.children,s),r=r.child}return r;case 9:return f=r.type,l=r.pendingProps.children,li(r,s),f=Bt(f),l=l(f),r.flags|=1,yt(t,r,l,s),r.child;case 14:return l=r.type,f=Xt(l,r.pendingProps),f=Xt(l.type,f),om(t,r,l,f,s);case 15:return sm(t,r,r.type,r.pendingProps,s);case 17:return l=r.type,f=r.pendingProps,f=r.elementType===l?f:Xt(l,f),oa(t,r),r.tag=1,St(l)?(t=!0,Vs(r)):t=!1,li(r,s),Qh(r,l,f),ec(r,l,f,s),ic(null,r,l,!0,t,s);case 19:return hm(t,r,s);case 22:return am(t,r,s)}throw Error(i(156,r.tag))};function Om(t,r){return yp(t,r)}function cS(t,r,s,l){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nt(t,r,s,l){return new cS(t,r,s,l)}function Ec(t){return t=t.prototype,!(!t||!t.isReactComponent)}function dS(t){if(typeof t=="function")return Ec(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Te)return 11;if(t===Rt)return 14}return 2}function Qn(t,r){var s=t.alternate;return s===null?(s=Nt(t.tag,r,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=r,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&14680064,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,r=t.dependencies,s.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s}function ga(t,r,s,l,f,h){var v=2;if(l=t,typeof t=="function")Ec(t)&&(v=1);else if(typeof t=="string")v=5;else e:switch(t){case W:return Tr(s.children,f,h,r);case H:v=8,f|=8;break;case Q:return t=Nt(12,s,r,f|2),t.elementType=Q,t.lanes=h,t;case He:return t=Nt(13,s,r,f),t.elementType=He,t.lanes=h,t;case ut:return t=Nt(19,s,r,f),t.elementType=ut,t.lanes=h,t;case ce:return ya(s,f,h,r);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case ae:v=10;break e;case se:v=9;break e;case Te:v=11;break e;case Rt:v=14;break e;case nt:v=16,l=null;break e}throw Error(i(130,t==null?t:typeof t,""))}return r=Nt(v,s,r,f),r.elementType=t,r.type=l,r.lanes=h,r}function Tr(t,r,s,l){return t=Nt(7,t,l,r),t.lanes=s,t}function ya(t,r,s,l){return t=Nt(22,t,l,r),t.elementType=ce,t.lanes=s,t.stateNode={isHidden:!1},t}function Cc(t,r,s){return t=Nt(6,t,null,r),t.lanes=s,t}function Tc(t,r,s){return r=Nt(4,t.children!==null?t.children:[],t.key,r),r.lanes=s,r.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},r}function fS(t,r,s,l,f){this.tag=r,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Zl(0),this.expirationTimes=Zl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Zl(0),this.identifierPrefix=l,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function Pc(t,r,s,l,f,h,v,C,j){return t=new fS(t,r,s,C,j),r===1?(r=1,h===!0&&(r|=8)):r=0,h=Nt(3,null,null,r),t.current=h,h.stateNode=t,h.memoizedState={element:l,isDehydrated:s,cache:null,transitions:null,pendingSuspenseBoundaries:null},Nu(h),t}function pS(t,r,s){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:V,key:l==null?null:""+l,children:t,containerInfo:r,implementation:s}}function Fm(t){if(!t)return zn;t=t._reactInternals;e:{if(hr(t)!==t||t.tag!==1)throw Error(i(170));var r=t;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(St(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(i(171))}if(t.tag===1){var s=t.type;if(St(s))return ph(t,s,r)}return r}function Nm(t,r,s,l,f,h,v,C,j){return t=Pc(s,l,!0,t,f,h,v,C,j),t.context=Fm(null),s=t.current,l=xt(),f=qn(s),h=Cn(l,f),h.callback=r??null,Hn(s,h,f),t.current.lanes=f,Ji(t,f,l),Et(t,l),t}function xa(t,r,s,l){var f=r.current,h=xt(),v=qn(f);return s=Fm(s),r.context===null?r.context=s:r.pendingContext=s,r=Cn(h,v),r.payload={element:t},l=l===void 0?null:l,l!==null&&(r.callback=l),t=Hn(f,r,v),t!==null&&(Zt(t,f,v,h),qs(t,f,v)),v}function va(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Vm(t,r){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<r?s:r}}function jc(t,r){Vm(t,r),(t=t.alternate)&&Vm(t,r)}function hS(){return null}var zm=typeof reportError=="function"?reportError:function(t){console.error(t)};function Rc(t){this._internalRoot=t}wa.prototype.render=Rc.prototype.render=function(t){var r=this._internalRoot;if(r===null)throw Error(i(409));xa(t,r,null,null)},wa.prototype.unmount=Rc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var r=t.containerInfo;kr(function(){xa(null,t,null,null)}),r[wn]=null}};function wa(t){this._internalRoot=t}wa.prototype.unstable_scheduleHydration=function(t){if(t){var r=Cp();t={blockedOn:null,target:t,priority:r};for(var s=0;s<Bn.length&&r!==0&&r<Bn[s].priority;s++);Bn.splice(s,0,t),s===0&&jp(t)}};function Ac(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Sa(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Um(){}function mS(t,r,s,l,f){if(f){if(typeof l=="function"){var h=l;l=function(){var _=va(v);h.call(_)}}var v=Nm(r,l,t,0,null,!1,!1,"",Um);return t._reactRootContainer=v,t[wn]=v.current,po(t.nodeType===8?t.parentNode:t),kr(),v}for(;f=t.lastChild;)t.removeChild(f);if(typeof l=="function"){var C=l;l=function(){var _=va(j);C.call(_)}}var j=Pc(t,0,!1,null,null,!1,!1,"",Um);return t._reactRootContainer=j,t[wn]=j.current,po(t.nodeType===8?t.parentNode:t),kr(function(){xa(r,j,s,l)}),j}function ba(t,r,s,l,f){var h=s._reactRootContainer;if(h){var v=h;if(typeof f=="function"){var C=f;f=function(){var j=va(v);C.call(j)}}xa(r,v,t,f)}else v=mS(s,r,t,f,l);return va(v)}kp=function(t){switch(t.tag){case 3:var r=t.stateNode;if(r.current.memoizedState.isDehydrated){var s=Qi(r.pendingLanes);s!==0&&(eu(r,s|1),Et(r,Ne()),!(ve&6)&&(pi=Ne()+500,Un()))}break;case 13:kr(function(){var l=En(t,1);if(l!==null){var f=xt();Zt(l,t,1,f)}}),jc(t,1)}},tu=function(t){if(t.tag===13){var r=En(t,134217728);if(r!==null){var s=xt();Zt(r,t,134217728,s)}jc(t,134217728)}},Ep=function(t){if(t.tag===13){var r=qn(t),s=En(t,r);if(s!==null){var l=xt();Zt(s,t,r,l)}jc(t,r)}},Cp=function(){return Ce},Tp=function(t,r){var s=Ce;try{return Ce=t,r()}finally{Ce=s}},Gl=function(t,r,s){switch(r){case"input":if(Fl(t,s),r=s.name,s.type==="radio"&&r!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<s.length;r++){var l=s[r];if(l!==t&&l.form===t.form){var f=Fs(l);if(!f)throw Error(i(90));Kt(l),Fl(l,f)}}}break;case"textarea":tp(t,s);break;case"select":r=s.value,r!=null&&Wr(t,!!s.multiple,r,!1)}},cp=Sc,dp=kr;var gS={usingClientEntryPoint:!1,Events:[go,ei,Fs,lp,up,Sc]},Ao={findFiberByHostInstance:mr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},yS={bundleType:Ao.bundleType,version:Ao.version,rendererPackageName:Ao.rendererPackageName,rendererConfig:Ao.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:F.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=mp(t),t===null?null:t.stateNode},findFiberByHostInstance:Ao.findFiberByHostInstance||hS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ka=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ka.isDisabled&&ka.supportsFiber)try{ws=ka.inject(yS),an=ka}catch{}}return Ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gS,Ct.createPortal=function(t,r){var s=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ac(r))throw Error(i(200));return pS(t,r,null,s)},Ct.createRoot=function(t,r){if(!Ac(t))throw Error(i(299));var s=!1,l="",f=zm;return r!=null&&(r.unstable_strictMode===!0&&(s=!0),r.identifierPrefix!==void 0&&(l=r.identifierPrefix),r.onRecoverableError!==void 0&&(f=r.onRecoverableError)),r=Pc(t,1,!1,null,null,s,!1,l,f),t[wn]=r.current,po(t.nodeType===8?t.parentNode:t),new Rc(r)},Ct.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var r=t._reactInternals;if(r===void 0)throw typeof t.render=="function"?Error(i(188)):(t=Object.keys(t).join(","),Error(i(268,t)));return t=mp(r),t=t===null?null:t.stateNode,t},Ct.flushSync=function(t){return kr(t)},Ct.hydrate=function(t,r,s){if(!Sa(r))throw Error(i(200));return ba(null,t,r,!0,s)},Ct.hydrateRoot=function(t,r,s){if(!Ac(t))throw Error(i(405));var l=s!=null&&s.hydratedSources||null,f=!1,h="",v=zm;if(s!=null&&(s.unstable_strictMode===!0&&(f=!0),s.identifierPrefix!==void 0&&(h=s.identifierPrefix),s.onRecoverableError!==void 0&&(v=s.onRecoverableError)),r=Nm(r,null,t,1,s??null,f,!1,h,v),t[wn]=r.current,po(t),l)for(t=0;t<l.length;t++)s=l[t],f=s._getVersion,f=f(s._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[s,f]:r.mutableSourceEagerHydrationData.push(s,f);return new wa(r)},Ct.render=function(t,r,s){if(!Sa(r))throw Error(i(200));return ba(null,t,r,!1,s)},Ct.unmountComponentAtNode=function(t){if(!Sa(t))throw Error(i(40));return t._reactRootContainer?(kr(function(){ba(null,null,t,!1,function(){t._reactRootContainer=null,t[wn]=null})}),!0):!1},Ct.unstable_batchedUpdates=Sc,Ct.unstable_renderSubtreeIntoContainer=function(t,r,s,l){if(!Sa(s))throw Error(i(200));if(t==null||t._reactInternals===void 0)throw Error(i(38));return ba(t,r,s,!1,l)},Ct.version="18.3.1-next-f1338f8080-20240426",Ct}var Jm;function jS(){if(Jm)return Lc.exports;Jm=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}return e(),Lc.exports=PS(),Lc.exports}var Zm;function RS(){if(Zm)return Ea;Zm=1;var e=jS();return Ea.createRoot=e.createRoot,Ea.hydrateRoot=e.hydrateRoot,Ea}var AS=RS();const DS="modulepreload",IS=function(e){return"/WuKonWeb4/"+e},eg={},LS=function(n,i,o){let a=Promise.resolve();if(i&&i.length>0){document.getElementsByTagName("link");const c=document.querySelector("meta[property=csp-nonce]"),d=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));a=Promise.allSettled(i.map(p=>{if(p=IS(p),p in eg)return;eg[p]=!0;const m=p.endsWith(".css"),g=m?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${p}"]${g}`))return;const x=document.createElement("link");if(x.rel=m?"stylesheet":DS,m||(x.as="script"),x.crossOrigin="",x.href=p,d&&x.setAttribute("nonce",d),document.head.appendChild(x),m)return new Promise((w,S)=>{x.addEventListener("load",w),x.addEventListener("error",()=>S(new Error(`Unable to preload CSS for ${p}`)))})}))}function u(c){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=c,window.dispatchEvent(d),!d.defaultPrevented)throw c}return a.then(c=>{for(const d of c||[])d.status==="rejected"&&u(d.reason);return n().catch(u)})};var b=Jd();const tn=SS(b);var tt=function(){return tt=Object.assign||function(n){for(var i,o=1,a=arguments.length;o<a;o++){i=arguments[o];for(var u in i)Object.prototype.hasOwnProperty.call(i,u)&&(n[u]=i[u])}return n},tt.apply(this,arguments)};function Go(e,n,i){if(i||arguments.length===2)for(var o=0,a=n.length,u;o<a;o++)(u||!(o in n))&&(u||(u=Array.prototype.slice.call(n,0,o)),u[o]=n[o]);return e.concat(u||Array.prototype.slice.call(n))}var Ae="-ms-",No="-moz-",Ee="-webkit-",Cy="comm",gl="rule",Zd="decl",$S="@import",Ty="@keyframes",MS="@layer",Py=Math.abs,ef=String.fromCharCode,fd=Object.assign;function _S(e,n){return Ze(e,0)^45?(((n<<2^Ze(e,0))<<2^Ze(e,1))<<2^Ze(e,2))<<2^Ze(e,3):0}function jy(e){return e.trim()}function Rn(e,n){return(e=n.exec(e))?e[0]:e}function he(e,n,i){return e.replace(n,i)}function za(e,n,i){return e.indexOf(n,i)}function Ze(e,n){return e.charCodeAt(n)|0}function Ri(e,n,i){return e.slice(n,i)}function hn(e){return e.length}function Ry(e){return e.length}function Bo(e,n){return n.push(e),e}function BS(e,n){return e.map(n).join("")}function tg(e,n){return e.filter(function(i){return!Rn(i,n)})}var yl=1,Ai=1,Ay=0,Wt=0,Ge=0,Mi="";function xl(e,n,i,o,a,u,c,d){return{value:e,root:n,parent:i,type:o,props:a,children:u,line:yl,column:Ai,length:c,return:"",siblings:d}}function rr(e,n){return fd(xl("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},n)}function mi(e){for(;e.root;)e=rr(e.root,{children:[e]});Bo(e,e.siblings)}function OS(){return Ge}function FS(){return Ge=Wt>0?Ze(Mi,--Wt):0,Ai--,Ge===10&&(Ai=1,yl--),Ge}function nn(){return Ge=Wt<Ay?Ze(Mi,Wt++):0,Ai++,Ge===10&&(Ai=1,yl++),Ge}function _r(){return Ze(Mi,Wt)}function Ua(){return Wt}function vl(e,n){return Ri(Mi,e,n)}function pd(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function NS(e){return yl=Ai=1,Ay=hn(Mi=e),Wt=0,[]}function VS(e){return Mi="",e}function _c(e){return jy(vl(Wt-1,hd(e===91?e+2:e===40?e+1:e)))}function zS(e){for(;(Ge=_r())&&Ge<33;)nn();return pd(e)>2||pd(Ge)>3?"":" "}function US(e,n){for(;--n&&nn()&&!(Ge<48||Ge>102||Ge>57&&Ge<65||Ge>70&&Ge<97););return vl(e,Ua()+(n<6&&_r()==32&&nn()==32))}function hd(e){for(;nn();)switch(Ge){case e:return Wt;case 34:case 39:e!==34&&e!==39&&hd(Ge);break;case 40:e===41&&hd(e);break;case 92:nn();break}return Wt}function WS(e,n){for(;nn()&&e+Ge!==57;)if(e+Ge===84&&_r()===47)break;return"/*"+vl(n,Wt-1)+"*"+ef(e===47?e:nn())}function HS(e){for(;!pd(_r());)nn();return vl(e,Wt)}function KS(e){return VS(Wa("",null,null,null,[""],e=NS(e),0,[0],e))}function Wa(e,n,i,o,a,u,c,d,p){for(var m=0,g=0,x=c,w=0,S=0,k=0,T=1,E=1,P=1,$=0,D="",F=a,O=u,V=o,W=D;E;)switch(k=$,$=nn()){case 40:if(k!=108&&Ze(W,x-1)==58){za(W+=he(_c($),"&","&\f"),"&\f",Py(m?d[m-1]:0))!=-1&&(P=-1);break}case 34:case 39:case 91:W+=_c($);break;case 9:case 10:case 13:case 32:W+=zS(k);break;case 92:W+=US(Ua()-1,7);continue;case 47:switch(_r()){case 42:case 47:Bo(GS(WS(nn(),Ua()),n,i,p),p);break;default:W+="/"}break;case 123*T:d[m++]=hn(W)*P;case 125*T:case 59:case 0:switch($){case 0:case 125:E=0;case 59+g:P==-1&&(W=he(W,/\f/g,"")),S>0&&hn(W)-x&&Bo(S>32?rg(W+";",o,i,x-1,p):rg(he(W," ","")+";",o,i,x-2,p),p);break;case 59:W+=";";default:if(Bo(V=ng(W,n,i,m,g,a,d,D,F=[],O=[],x,u),u),$===123)if(g===0)Wa(W,n,V,V,F,u,x,d,O);else switch(w===99&&Ze(W,3)===110?100:w){case 100:case 108:case 109:case 115:Wa(e,V,V,o&&Bo(ng(e,V,V,0,0,a,d,D,a,F=[],x,O),O),a,O,x,d,o?F:O);break;default:Wa(W,V,V,V,[""],O,0,d,O)}}m=g=S=0,T=P=1,D=W="",x=c;break;case 58:x=1+hn(W),S=k;default:if(T<1){if($==123)--T;else if($==125&&T++==0&&FS()==125)continue}switch(W+=ef($),$*T){case 38:P=g>0?1:(W+="\f",-1);break;case 44:d[m++]=(hn(W)-1)*P,P=1;break;case 64:_r()===45&&(W+=_c(nn())),w=_r(),g=x=hn(D=W+=HS(Ua())),$++;break;case 45:k===45&&hn(W)==2&&(T=0)}}return u}function ng(e,n,i,o,a,u,c,d,p,m,g,x){for(var w=a-1,S=a===0?u:[""],k=Ry(S),T=0,E=0,P=0;T<o;++T)for(var $=0,D=Ri(e,w+1,w=Py(E=c[T])),F=e;$<k;++$)(F=jy(E>0?S[$]+" "+D:he(D,/&\f/g,S[$])))&&(p[P++]=F);return xl(e,n,i,a===0?gl:d,p,m,g,x)}function GS(e,n,i,o){return xl(e,n,i,Cy,ef(OS()),Ri(e,2,-2),0,o)}function rg(e,n,i,o,a){return xl(e,n,i,Zd,Ri(e,0,o),Ri(e,o+1,-1),o,a)}function Dy(e,n,i){switch(_S(e,n)){case 5103:return Ee+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Ee+e+e;case 4789:return No+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Ee+e+No+e+Ae+e+e;case 5936:switch(Ze(e,n+11)){case 114:return Ee+e+Ae+he(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Ee+e+Ae+he(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Ee+e+Ae+he(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return Ee+e+Ae+e+e;case 6165:return Ee+e+Ae+"flex-"+e+e;case 5187:return Ee+e+he(e,/(\w+).+(:[^]+)/,Ee+"box-$1$2"+Ae+"flex-$1$2")+e;case 5443:return Ee+e+Ae+"flex-item-"+he(e,/flex-|-self/g,"")+(Rn(e,/flex-|baseline/)?"":Ae+"grid-row-"+he(e,/flex-|-self/g,""))+e;case 4675:return Ee+e+Ae+"flex-line-pack"+he(e,/align-content|flex-|-self/g,"")+e;case 5548:return Ee+e+Ae+he(e,"shrink","negative")+e;case 5292:return Ee+e+Ae+he(e,"basis","preferred-size")+e;case 6060:return Ee+"box-"+he(e,"-grow","")+Ee+e+Ae+he(e,"grow","positive")+e;case 4554:return Ee+he(e,/([^-])(transform)/g,"$1"+Ee+"$2")+e;case 6187:return he(he(he(e,/(zoom-|grab)/,Ee+"$1"),/(image-set)/,Ee+"$1"),e,"")+e;case 5495:case 3959:return he(e,/(image-set\([^]*)/,Ee+"$1$`$1");case 4968:return he(he(e,/(.+:)(flex-)?(.*)/,Ee+"box-pack:$3"+Ae+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Ee+e+e;case 4200:if(!Rn(e,/flex-|baseline/))return Ae+"grid-column-align"+Ri(e,n)+e;break;case 2592:case 3360:return Ae+he(e,"template-","")+e;case 4384:case 3616:return i&&i.some(function(o,a){return n=a,Rn(o.props,/grid-\w+-end/)})?~za(e+(i=i[n].value),"span",0)?e:Ae+he(e,"-start","")+e+Ae+"grid-row-span:"+(~za(i,"span",0)?Rn(i,/\d+/):+Rn(i,/\d+/)-+Rn(e,/\d+/))+";":Ae+he(e,"-start","")+e;case 4896:case 4128:return i&&i.some(function(o){return Rn(o.props,/grid-\w+-start/)})?e:Ae+he(he(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return he(e,/(.+)-inline(.+)/,Ee+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(hn(e)-1-n>6)switch(Ze(e,n+1)){case 109:if(Ze(e,n+4)!==45)break;case 102:return he(e,/(.+:)(.+)-([^]+)/,"$1"+Ee+"$2-$3$1"+No+(Ze(e,n+3)==108?"$3":"$2-$3"))+e;case 115:return~za(e,"stretch",0)?Dy(he(e,"stretch","fill-available"),n,i)+e:e}break;case 5152:case 5920:return he(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(o,a,u,c,d,p,m){return Ae+a+":"+u+m+(c?Ae+a+"-span:"+(d?p:+p-+u)+m:"")+e});case 4949:if(Ze(e,n+6)===121)return he(e,":",":"+Ee)+e;break;case 6444:switch(Ze(e,Ze(e,14)===45?18:11)){case 120:return he(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Ee+(Ze(e,14)===45?"inline-":"")+"box$3$1"+Ee+"$2$3$1"+Ae+"$2box$3")+e;case 100:return he(e,":",":"+Ae)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return he(e,"scroll-","scroll-snap-")+e}return e}function rl(e,n){for(var i="",o=0;o<e.length;o++)i+=n(e[o],o,e,n)||"";return i}function YS(e,n,i,o){switch(e.type){case MS:if(e.children.length)break;case $S:case Zd:return e.return=e.return||e.value;case Cy:return"";case Ty:return e.return=e.value+"{"+rl(e.children,o)+"}";case gl:if(!hn(e.value=e.props.join(",")))return""}return hn(i=rl(e.children,o))?e.return=e.value+"{"+i+"}":""}function qS(e){var n=Ry(e);return function(i,o,a,u){for(var c="",d=0;d<n;d++)c+=e[d](i,o,a,u)||"";return c}}function XS(e){return function(n){n.root||(n=n.return)&&e(n)}}function QS(e,n,i,o){if(e.length>-1&&!e.return)switch(e.type){case Zd:e.return=Dy(e.value,e.length,i);return;case Ty:return rl([rr(e,{value:he(e.value,"@","@"+Ee)})],o);case gl:if(e.length)return BS(i=e.props,function(a){switch(Rn(a,o=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":mi(rr(e,{props:[he(a,/:(read-\w+)/,":"+No+"$1")]})),mi(rr(e,{props:[a]})),fd(e,{props:tg(i,o)});break;case"::placeholder":mi(rr(e,{props:[he(a,/:(plac\w+)/,":"+Ee+"input-$1")]})),mi(rr(e,{props:[he(a,/:(plac\w+)/,":"+No+"$1")]})),mi(rr(e,{props:[he(a,/:(plac\w+)/,Ae+"input-$1")]})),mi(rr(e,{props:[a]})),fd(e,{props:tg(i,o)});break}return""})}}var JS={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},$t={},Di=typeof process<"u"&&$t!==void 0&&($t.REACT_APP_SC_ATTR||$t.SC_ATTR)||"data-styled",Iy="active",Ly="data-styled-version",wl="6.1.15",tf=`/*!sc*/
`,il=typeof window<"u"&&"HTMLElement"in window,ZS=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&$t!==void 0&&$t.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&$t.REACT_APP_SC_DISABLE_SPEEDY!==""?$t.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&$t.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&$t!==void 0&&$t.SC_DISABLE_SPEEDY!==void 0&&$t.SC_DISABLE_SPEEDY!==""&&$t.SC_DISABLE_SPEEDY!=="false"&&$t.SC_DISABLE_SPEEDY),eb={},Sl=Object.freeze([]),Ii=Object.freeze({});function $y(e,n,i){return i===void 0&&(i=Ii),e.theme!==i.theme&&e.theme||n||i.theme}var My=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),tb=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,nb=/(^-|-$)/g;function ig(e){return e.replace(tb,"-").replace(nb,"")}var rb=/(a)(d)/gi,Ca=52,og=function(e){return String.fromCharCode(e+(e>25?39:97))};function md(e){var n,i="";for(n=Math.abs(e);n>Ca;n=n/Ca|0)i=og(n%Ca)+i;return(og(n%Ca)+i).replace(rb,"$1-$2")}var Bc,_y=5381,ki=function(e,n){for(var i=n.length;i;)e=33*e^n.charCodeAt(--i);return e},By=function(e){return ki(_y,e)};function Oy(e){return md(By(e)>>>0)}function ib(e){return e.displayName||e.name||"Component"}function Oc(e){return typeof e=="string"&&!0}var Fy=typeof Symbol=="function"&&Symbol.for,Ny=Fy?Symbol.for("react.memo"):60115,ob=Fy?Symbol.for("react.forward_ref"):60112,sb={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},ab={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Vy={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},lb=((Bc={})[ob]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Bc[Ny]=Vy,Bc);function sg(e){return("type"in(n=e)&&n.type.$$typeof)===Ny?Vy:"$$typeof"in e?lb[e.$$typeof]:sb;var n}var ub=Object.defineProperty,cb=Object.getOwnPropertyNames,ag=Object.getOwnPropertySymbols,db=Object.getOwnPropertyDescriptor,fb=Object.getPrototypeOf,lg=Object.prototype;function zy(e,n,i){if(typeof n!="string"){if(lg){var o=fb(n);o&&o!==lg&&zy(e,o,i)}var a=cb(n);ag&&(a=a.concat(ag(n)));for(var u=sg(e),c=sg(n),d=0;d<a.length;++d){var p=a[d];if(!(p in ab||i&&i[p]||c&&p in c||u&&p in u)){var m=db(n,p);try{ub(e,p,m)}catch{}}}}return e}function Fr(e){return typeof e=="function"}function nf(e){return typeof e=="object"&&"styledComponentId"in e}function Dr(e,n){return e&&n?"".concat(e," ").concat(n):e||n||""}function gd(e,n){if(e.length===0)return"";for(var i=e[0],o=1;o<e.length;o++)i+=e[o];return i}function Yo(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function yd(e,n,i){if(i===void 0&&(i=!1),!i&&!Yo(e)&&!Array.isArray(e))return n;if(Array.isArray(n))for(var o=0;o<n.length;o++)e[o]=yd(e[o],n[o]);else if(Yo(n))for(var o in n)e[o]=yd(e[o],n[o]);return e}function rf(e,n){Object.defineProperty(e,"toString",{value:n})}function Nr(e){for(var n=[],i=1;i<arguments.length;i++)n[i-1]=arguments[i];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(n.length>0?" Args: ".concat(n.join(", ")):""))}var pb=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}return e.prototype.indexOfGroup=function(n){for(var i=0,o=0;o<n;o++)i+=this.groupSizes[o];return i},e.prototype.insertRules=function(n,i){if(n>=this.groupSizes.length){for(var o=this.groupSizes,a=o.length,u=a;n>=u;)if((u<<=1)<0)throw Nr(16,"".concat(n));this.groupSizes=new Uint32Array(u),this.groupSizes.set(o),this.length=u;for(var c=a;c<u;c++)this.groupSizes[c]=0}for(var d=this.indexOfGroup(n+1),p=(c=0,i.length);c<p;c++)this.tag.insertRule(d,i[c])&&(this.groupSizes[n]++,d++)},e.prototype.clearGroup=function(n){if(n<this.length){var i=this.groupSizes[n],o=this.indexOfGroup(n),a=o+i;this.groupSizes[n]=0;for(var u=o;u<a;u++)this.tag.deleteRule(o)}},e.prototype.getGroup=function(n){var i="";if(n>=this.length||this.groupSizes[n]===0)return i;for(var o=this.groupSizes[n],a=this.indexOfGroup(n),u=a+o,c=a;c<u;c++)i+="".concat(this.tag.getRule(c)).concat(tf);return i},e}(),Ha=new Map,ol=new Map,Ka=1,Ta=function(e){if(Ha.has(e))return Ha.get(e);for(;ol.has(Ka);)Ka++;var n=Ka++;return Ha.set(e,n),ol.set(n,e),n},hb=function(e,n){Ka=n+1,Ha.set(e,n),ol.set(n,e)},mb="style[".concat(Di,"][").concat(Ly,'="').concat(wl,'"]'),gb=new RegExp("^".concat(Di,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),yb=function(e,n,i){for(var o,a=i.split(","),u=0,c=a.length;u<c;u++)(o=a[u])&&e.registerName(n,o)},xb=function(e,n){for(var i,o=((i=n.textContent)!==null&&i!==void 0?i:"").split(tf),a=[],u=0,c=o.length;u<c;u++){var d=o[u].trim();if(d){var p=d.match(gb);if(p){var m=0|parseInt(p[1],10),g=p[2];m!==0&&(hb(g,m),yb(e,g,p[3]),e.getTag().insertRules(m,a)),a.length=0}else a.push(d)}}},ug=function(e){for(var n=document.querySelectorAll(mb),i=0,o=n.length;i<o;i++){var a=n[i];a&&a.getAttribute(Di)!==Iy&&(xb(e,a),a.parentNode&&a.parentNode.removeChild(a))}};function vb(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Uy=function(e){var n=document.head,i=e||n,o=document.createElement("style"),a=function(d){var p=Array.from(d.querySelectorAll("style[".concat(Di,"]")));return p[p.length-1]}(i),u=a!==void 0?a.nextSibling:null;o.setAttribute(Di,Iy),o.setAttribute(Ly,wl);var c=vb();return c&&o.setAttribute("nonce",c),i.insertBefore(o,u),o},wb=function(){function e(n){this.element=Uy(n),this.element.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var o=document.styleSheets,a=0,u=o.length;a<u;a++){var c=o[a];if(c.ownerNode===i)return c}throw Nr(17)}(this.element),this.length=0}return e.prototype.insertRule=function(n,i){try{return this.sheet.insertRule(i,n),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},e.prototype.getRule=function(n){var i=this.sheet.cssRules[n];return i&&i.cssText?i.cssText:""},e}(),Sb=function(){function e(n){this.element=Uy(n),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(n,i){if(n<=this.length&&n>=0){var o=document.createTextNode(i);return this.element.insertBefore(o,this.nodes[n]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},e.prototype.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),bb=function(){function e(n){this.rules=[],this.length=0}return e.prototype.insertRule=function(n,i){return n<=this.length&&(this.rules.splice(n,0,i),this.length++,!0)},e.prototype.deleteRule=function(n){this.rules.splice(n,1),this.length--},e.prototype.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),cg=il,kb={isServer:!il,useCSSOMInjection:!ZS},sl=function(){function e(n,i,o){n===void 0&&(n=Ii),i===void 0&&(i={});var a=this;this.options=tt(tt({},kb),n),this.gs=i,this.names=new Map(o),this.server=!!n.isServer,!this.server&&il&&cg&&(cg=!1,ug(this)),rf(this,function(){return function(u){for(var c=u.getTag(),d=c.length,p="",m=function(x){var w=function(P){return ol.get(P)}(x);if(w===void 0)return"continue";var S=u.names.get(w),k=c.getGroup(x);if(S===void 0||!S.size||k.length===0)return"continue";var T="".concat(Di,".g").concat(x,'[id="').concat(w,'"]'),E="";S!==void 0&&S.forEach(function(P){P.length>0&&(E+="".concat(P,","))}),p+="".concat(k).concat(T,'{content:"').concat(E,'"}').concat(tf)},g=0;g<d;g++)m(g);return p}(a)})}return e.registerId=function(n){return Ta(n)},e.prototype.rehydrate=function(){!this.server&&il&&ug(this)},e.prototype.reconstructWithOptions=function(n,i){return i===void 0&&(i=!0),new e(tt(tt({},this.options),n),this.gs,i&&this.names||void 0)},e.prototype.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(n=function(i){var o=i.useCSSOMInjection,a=i.target;return i.isServer?new bb(a):o?new wb(a):new Sb(a)}(this.options),new pb(n)));var n},e.prototype.hasNameForId=function(n,i){return this.names.has(n)&&this.names.get(n).has(i)},e.prototype.registerName=function(n,i){if(Ta(n),this.names.has(n))this.names.get(n).add(i);else{var o=new Set;o.add(i),this.names.set(n,o)}},e.prototype.insertRules=function(n,i,o){this.registerName(n,i),this.getTag().insertRules(Ta(n),o)},e.prototype.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},e.prototype.clearRules=function(n){this.getTag().clearGroup(Ta(n)),this.clearNames(n)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Eb=/&/g,Cb=/^\s*\/\/.*$/gm;function Wy(e,n){return e.map(function(i){return i.type==="rule"&&(i.value="".concat(n," ").concat(i.value),i.value=i.value.replaceAll(",",",".concat(n," ")),i.props=i.props.map(function(o){return"".concat(n," ").concat(o)})),Array.isArray(i.children)&&i.type!=="@keyframes"&&(i.children=Wy(i.children,n)),i})}function Tb(e){var n,i,o,a=Ii,u=a.options,c=u===void 0?Ii:u,d=a.plugins,p=d===void 0?Sl:d,m=function(w,S,k){return k.startsWith(i)&&k.endsWith(i)&&k.replaceAll(i,"").length>0?".".concat(n):w},g=p.slice();g.push(function(w){w.type===gl&&w.value.includes("&")&&(w.props[0]=w.props[0].replace(Eb,i).replace(o,m))}),c.prefix&&g.push(QS),g.push(YS);var x=function(w,S,k,T){S===void 0&&(S=""),k===void 0&&(k=""),T===void 0&&(T="&"),n=T,i=S,o=new RegExp("\\".concat(i,"\\b"),"g");var E=w.replace(Cb,""),P=KS(k||S?"".concat(k," ").concat(S," { ").concat(E," }"):E);c.namespace&&(P=Wy(P,c.namespace));var $=[];return rl(P,qS(g.concat(XS(function(D){return $.push(D)})))),$};return x.hash=p.length?p.reduce(function(w,S){return S.name||Nr(15),ki(w,S.name)},_y).toString():"",x}var Pb=new sl,xd=Tb(),Hy=tn.createContext({shouldForwardProp:void 0,styleSheet:Pb,stylis:xd});Hy.Consumer;tn.createContext(void 0);function vd(){return b.useContext(Hy)}var jb=function(){function e(n,i){var o=this;this.inject=function(a,u){u===void 0&&(u=xd);var c=o.name+u.hash;a.hasNameForId(o.id,c)||a.insertRules(o.id,c,u(o.rules,c,"@keyframes"))},this.name=n,this.id="sc-keyframes-".concat(n),this.rules=i,rf(this,function(){throw Nr(12,String(o.name))})}return e.prototype.getName=function(n){return n===void 0&&(n=xd),this.name+n.hash},e}(),Rb=function(e){return e>="A"&&e<="Z"};function dg(e){for(var n="",i=0;i<e.length;i++){var o=e[i];if(i===1&&o==="-"&&e[0]==="-")return e;Rb(o)?n+="-"+o.toLowerCase():n+=o}return n.startsWith("ms-")?"-"+n:n}var Ky=function(e){return e==null||e===!1||e===""},Gy=function(e){var n,i,o=[];for(var a in e){var u=e[a];e.hasOwnProperty(a)&&!Ky(u)&&(Array.isArray(u)&&u.isCss||Fr(u)?o.push("".concat(dg(a),":"),u,";"):Yo(u)?o.push.apply(o,Go(Go(["".concat(a," {")],Gy(u),!1),["}"],!1)):o.push("".concat(dg(a),": ").concat((n=a,(i=u)==null||typeof i=="boolean"||i===""?"":typeof i!="number"||i===0||n in JS||n.startsWith("--")?String(i).trim():"".concat(i,"px")),";")))}return o};function ar(e,n,i,o){if(Ky(e))return[];if(nf(e))return[".".concat(e.styledComponentId)];if(Fr(e)){if(!Fr(u=e)||u.prototype&&u.prototype.isReactComponent||!n)return[e];var a=e(n);return ar(a,n,i,o)}var u;return e instanceof jb?i?(e.inject(i,o),[e.getName(o)]):[e]:Yo(e)?Gy(e):Array.isArray(e)?Array.prototype.concat.apply(Sl,e.map(function(c){return ar(c,n,i,o)})):[e.toString()]}function Yy(e){for(var n=0;n<e.length;n+=1){var i=e[n];if(Fr(i)&&!nf(i))return!1}return!0}var Ab=By(wl),Db=function(){function e(n,i,o){this.rules=n,this.staticRulesId="",this.isStatic=(o===void 0||o.isStatic)&&Yy(n),this.componentId=i,this.baseHash=ki(Ab,i),this.baseStyle=o,sl.registerId(i)}return e.prototype.generateAndInjectStyles=function(n,i,o){var a=this.baseStyle?this.baseStyle.generateAndInjectStyles(n,i,o):"";if(this.isStatic&&!o.hash)if(this.staticRulesId&&i.hasNameForId(this.componentId,this.staticRulesId))a=Dr(a,this.staticRulesId);else{var u=gd(ar(this.rules,n,i,o)),c=md(ki(this.baseHash,u)>>>0);if(!i.hasNameForId(this.componentId,c)){var d=o(u,".".concat(c),void 0,this.componentId);i.insertRules(this.componentId,c,d)}a=Dr(a,c),this.staticRulesId=c}else{for(var p=ki(this.baseHash,o.hash),m="",g=0;g<this.rules.length;g++){var x=this.rules[g];if(typeof x=="string")m+=x;else if(x){var w=gd(ar(x,n,i,o));p=ki(p,w+g),m+=w}}if(m){var S=md(p>>>0);i.hasNameForId(this.componentId,S)||i.insertRules(this.componentId,S,o(m,".".concat(S),void 0,this.componentId)),a=Dr(a,S)}}return a},e}(),qo=tn.createContext(void 0);qo.Consumer;function Ib(e){var n=tn.useContext(qo),i=b.useMemo(function(){return function(o,a){if(!o)throw Nr(14);if(Fr(o)){var u=o(a);return u}if(Array.isArray(o)||typeof o!="object")throw Nr(8);return a?tt(tt({},a),o):o}(e.theme,n)},[e.theme,n]);return e.children?tn.createElement(qo.Provider,{value:i},e.children):null}var Fc={};function Lb(e,n,i){var o=nf(e),a=e,u=!Oc(e),c=n.attrs,d=c===void 0?Sl:c,p=n.componentId,m=p===void 0?function(F,O){var V=typeof F!="string"?"sc":ig(F);Fc[V]=(Fc[V]||0)+1;var W="".concat(V,"-").concat(Oy(wl+V+Fc[V]));return O?"".concat(O,"-").concat(W):W}(n.displayName,n.parentComponentId):p,g=n.displayName,x=g===void 0?function(F){return Oc(F)?"styled.".concat(F):"Styled(".concat(ib(F),")")}(e):g,w=n.displayName&&n.componentId?"".concat(ig(n.displayName),"-").concat(n.componentId):n.componentId||m,S=o&&a.attrs?a.attrs.concat(d).filter(Boolean):d,k=n.shouldForwardProp;if(o&&a.shouldForwardProp){var T=a.shouldForwardProp;if(n.shouldForwardProp){var E=n.shouldForwardProp;k=function(F,O){return T(F,O)&&E(F,O)}}else k=T}var P=new Db(i,w,o?a.componentStyle:void 0);function $(F,O){return function(V,W,H){var Q=V.attrs,ae=V.componentStyle,se=V.defaultProps,Te=V.foldedComponentIds,He=V.styledComponentId,ut=V.target,Rt=tn.useContext(qo),nt=vd(),ce=V.shouldForwardProp||nt.shouldForwardProp,Y=$y(W,Rt,se)||Ii,te=function(ye,me,be){for(var xe,we=tt(tt({},me),{className:void 0,theme:be}),rt=0;rt<ye.length;rt+=1){var vn=Fr(xe=ye[rt])?xe(we):xe;for(var Kt in vn)we[Kt]=Kt==="className"?Dr(we[Kt],vn[Kt]):Kt==="style"?tt(tt({},we[Kt]),vn[Kt]):vn[Kt]}return me.className&&(we.className=Dr(we.className,me.className)),we}(Q,W,Y),X=te.as||ut,I={};for(var N in te)te[N]===void 0||N[0]==="$"||N==="as"||N==="theme"&&te.theme===Y||(N==="forwardedAs"?I.as=te.forwardedAs:ce&&!ce(N,X)||(I[N]=te[N]));var de=function(ye,me){var be=vd(),xe=ye.generateAndInjectStyles(me,be.styleSheet,be.stylis);return xe}(ae,te),pe=Dr(Te,He);return de&&(pe+=" "+de),te.className&&(pe+=" "+te.className),I[Oc(X)&&!My.has(X)?"class":"className"]=pe,H&&(I.ref=H),b.createElement(X,I)}(D,F,O)}$.displayName=x;var D=tn.forwardRef($);return D.attrs=S,D.componentStyle=P,D.displayName=x,D.shouldForwardProp=k,D.foldedComponentIds=o?Dr(a.foldedComponentIds,a.styledComponentId):"",D.styledComponentId=w,D.target=o?a.target:e,Object.defineProperty(D,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(F){this._foldedDefaultProps=o?function(O){for(var V=[],W=1;W<arguments.length;W++)V[W-1]=arguments[W];for(var H=0,Q=V;H<Q.length;H++)yd(O,Q[H],!0);return O}({},a.defaultProps,F):F}}),rf(D,function(){return".".concat(D.styledComponentId)}),u&&zy(D,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),D}function fg(e,n){for(var i=[e[0]],o=0,a=n.length;o<a;o+=1)i.push(n[o],e[o+1]);return i}var pg=function(e){return Object.assign(e,{isCss:!0})};function qy(e){for(var n=[],i=1;i<arguments.length;i++)n[i-1]=arguments[i];if(Fr(e)||Yo(e))return pg(ar(fg(Sl,Go([e],n,!0))));var o=e;return n.length===0&&o.length===1&&typeof o[0]=="string"?ar(o):pg(ar(fg(o,n)))}function wd(e,n,i){if(i===void 0&&(i=Ii),!n)throw Nr(1,n);var o=function(a){for(var u=[],c=1;c<arguments.length;c++)u[c-1]=arguments[c];return e(n,i,qy.apply(void 0,Go([a],u,!1)))};return o.attrs=function(a){return wd(e,n,tt(tt({},i),{attrs:Array.prototype.concat(i.attrs,a).filter(Boolean)}))},o.withConfig=function(a){return wd(e,n,tt(tt({},i),a))},o}var Xy=function(e){return wd(Lb,e)},R=Xy;My.forEach(function(e){R[e]=Xy(e)});var $b=function(){function e(n,i){this.rules=n,this.componentId=i,this.isStatic=Yy(n),sl.registerId(this.componentId+1)}return e.prototype.createStyles=function(n,i,o,a){var u=a(gd(ar(this.rules,i,o,a)),""),c=this.componentId+n;o.insertRules(c,c,u)},e.prototype.removeStyles=function(n,i){i.clearRules(this.componentId+n)},e.prototype.renderStyles=function(n,i,o,a){n>2&&sl.registerId(this.componentId+n),this.removeStyles(n,o),this.createStyles(n,i,o,a)},e}();function Mb(e){for(var n=[],i=1;i<arguments.length;i++)n[i-1]=arguments[i];var o=qy.apply(void 0,Go([e],n,!1)),a="sc-global-".concat(Oy(JSON.stringify(o))),u=new $b(o,a),c=function(p){var m=vd(),g=tn.useContext(qo),x=tn.useRef(m.styleSheet.allocateGSInstance(a)).current;return m.styleSheet.server&&d(x,p,m.styleSheet,g,m.stylis),tn.useLayoutEffect(function(){if(!m.styleSheet.server)return d(x,p,m.styleSheet,g,m.stylis),function(){return u.removeStyles(x,m.styleSheet)}},[x,p,m.styleSheet,g,m.stylis]),null};function d(p,m,g,x,w){if(u.isStatic)u.renderStyles(p,eb,g,w);else{var S=tt(tt({},m),{theme:$y(m,x,c.defaultProps)});u.renderStyles(p,S,g,w)}}return tn.memo(c)}const _b=Mb`
  :root {
    --background: ${e=>e.theme.colors[e.theme.mode].background};
    --text: ${e=>e.theme.colors[e.theme.mode].text};
    --card-bg: ${e=>e.theme.colors[e.theme.mode].cardBg};
    --card-border: ${e=>e.theme.colors[e.theme.mode].cardBorder};
    --hover-bg: ${e=>e.theme.colors[e.theme.mode].hoverBg};
    --modal-bg: ${e=>e.theme.colors[e.theme.mode].modalBg};
    --nav-bg: ${e=>e.theme.colors[e.theme.mode].navBg};
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: var(--background) !important;
    color: var(--text) !important;
    transition: all 0.3s ease;
    min-height: 100vh;
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background: var(--background);
  }

  main {
    flex: 1;
    width: 100%;
    position: relative;
    z-index: 1;
    padding-top: 1rem;
    background: var(--background);
  }
  
  /* 自定义滚动条样式 */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  
  ::-webkit-scrollbar-track {
    background: ${e=>e.theme.mode==="dark"?"rgba(255, 255, 255, 0.1)":"rgba(0, 0, 0, 0.1)"};
    border-radius: 4px;
  }
  
  ::-webkit-scrollbar-thumb {
    background: ${e=>e.theme.mode==="dark"?"rgba(255, 255, 255, 0.2)":"rgba(0, 0, 0, 0.2)"};
    border-radius: 4px;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: ${e=>e.theme.mode==="dark"?"rgba(255, 255, 255, 0.3)":"rgba(0, 0, 0, 0.3)"};
  }

  /* 平滑滚动 */
  html {
    scroll-behavior: smooth;
  }

  /* 文本选择样式 */
  ::selection {
    background: ${e=>e.theme.colors[e.theme.mode].primary};
    color: ${e=>e.theme.mode==="dark"?"black":"white"};
  }

  /* 链接样式 */
  a {
    color: ${e=>e.theme.colors[e.theme.mode].primary};
    text-decoration: none;
    transition: color 0.3s ease;
  }

  a:hover {
    color: ${e=>e.theme.colors[e.theme.mode].secondary};
  }
`,Bb={mode:"dark",colors:{dark:{primary:"#2563EB",secondary:"#2563EB",background:"#0A0A0A",text:"#FFFFFF",gray:"#6B7280",cardBg:"rgba(20, 20, 20, 0.95)",cardBorder:"transparent",hoverBg:"rgba(255, 255, 255, 0.1)",modalBg:"rgba(0, 0, 0, 0.85)",navBg:"rgba(20, 20, 20, 0.8)"},light:{primary:"#2563EB",secondary:"#2563EB",background:"#FFFFFF",text:"#1A1A1A",gray:"#4B5563",cardBg:"rgba(255, 255, 255, 0.95)",cardBorder:"transparent",hoverBg:"rgba(37, 99, 235, 0.05)",modalBg:"rgba(0, 0, 0, 0.5)",navBg:"rgba(255, 255, 255, 0.8)"}},breakpoints:{sm:"640px",md:"768px",lg:"1024px",xl:"1280px"}};var Io={},hg;function Ob(){if(hg)return Io;hg=1,Object.defineProperty(Io,"__esModule",{value:!0}),Io.parse=c,Io.serialize=m;const e=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,n=/^[\u0021-\u003A\u003C-\u007E]*$/,i=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,o=/^[\u0020-\u003A\u003D-\u007E]*$/,a=Object.prototype.toString,u=(()=>{const w=function(){};return w.prototype=Object.create(null),w})();function c(w,S){const k=new u,T=w.length;if(T<2)return k;const E=(S==null?void 0:S.decode)||g;let P=0;do{const $=w.indexOf("=",P);if($===-1)break;const D=w.indexOf(";",P),F=D===-1?T:D;if($>F){P=w.lastIndexOf(";",$-1)+1;continue}const O=d(w,P,$),V=p(w,$,O),W=w.slice(O,V);if(k[W]===void 0){let H=d(w,$+1,F),Q=p(w,F,H);const ae=E(w.slice(H,Q));k[W]=ae}P=F+1}while(P<T);return k}function d(w,S,k){do{const T=w.charCodeAt(S);if(T!==32&&T!==9)return S}while(++S<k);return k}function p(w,S,k){for(;S>k;){const T=w.charCodeAt(--S);if(T!==32&&T!==9)return S+1}return k}function m(w,S,k){const T=(k==null?void 0:k.encode)||encodeURIComponent;if(!e.test(w))throw new TypeError(`argument name is invalid: ${w}`);const E=T(S);if(!n.test(E))throw new TypeError(`argument val is invalid: ${S}`);let P=w+"="+E;if(!k)return P;if(k.maxAge!==void 0){if(!Number.isInteger(k.maxAge))throw new TypeError(`option maxAge is invalid: ${k.maxAge}`);P+="; Max-Age="+k.maxAge}if(k.domain){if(!i.test(k.domain))throw new TypeError(`option domain is invalid: ${k.domain}`);P+="; Domain="+k.domain}if(k.path){if(!o.test(k.path))throw new TypeError(`option path is invalid: ${k.path}`);P+="; Path="+k.path}if(k.expires){if(!x(k.expires)||!Number.isFinite(k.expires.valueOf()))throw new TypeError(`option expires is invalid: ${k.expires}`);P+="; Expires="+k.expires.toUTCString()}if(k.httpOnly&&(P+="; HttpOnly"),k.secure&&(P+="; Secure"),k.partitioned&&(P+="; Partitioned"),k.priority)switch(typeof k.priority=="string"?k.priority.toLowerCase():void 0){case"low":P+="; Priority=Low";break;case"medium":P+="; Priority=Medium";break;case"high":P+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${k.priority}`)}if(k.sameSite)switch(typeof k.sameSite=="string"?k.sameSite.toLowerCase():k.sameSite){case!0:case"strict":P+="; SameSite=Strict";break;case"lax":P+="; SameSite=Lax";break;case"none":P+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${k.sameSite}`)}return P}function g(w){if(w.indexOf("%")===-1)return w;try{return decodeURIComponent(w)}catch{return w}}function x(w){return a.call(w)==="[object Date]"}return Io}Ob();/**
 * react-router v7.2.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var mg="popstate";function Fb(e={}){function n(o,a){let{pathname:u,search:c,hash:d}=o.location;return Sd("",{pathname:u,search:c,hash:d},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function i(o,a){return typeof a=="string"?a:Xo(a)}return Vb(n,i,null,e)}function Le(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function rn(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function Nb(){return Math.random().toString(36).substring(2,10)}function gg(e,n){return{usr:e.state,key:e.key,idx:n}}function Sd(e,n,i=null,o){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof n=="string"?_i(n):n,state:i,key:n&&n.key||o||Nb()}}function Xo({pathname:e="/",search:n="",hash:i=""}){return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function _i(e){let n={};if(e){let i=e.indexOf("#");i>=0&&(n.hash=e.substring(i),e=e.substring(0,i));let o=e.indexOf("?");o>=0&&(n.search=e.substring(o),e=e.substring(0,o)),e&&(n.pathname=e)}return n}function Vb(e,n,i,o={}){let{window:a=document.defaultView,v5Compat:u=!1}=o,c=a.history,d="POP",p=null,m=g();m==null&&(m=0,c.replaceState({...c.state,idx:m},""));function g(){return(c.state||{idx:null}).idx}function x(){d="POP";let E=g(),P=E==null?null:E-m;m=E,p&&p({action:d,location:T.location,delta:P})}function w(E,P){d="PUSH";let $=Sd(T.location,E,P);m=g()+1;let D=gg($,m),F=T.createHref($);try{c.pushState(D,"",F)}catch(O){if(O instanceof DOMException&&O.name==="DataCloneError")throw O;a.location.assign(F)}u&&p&&p({action:d,location:T.location,delta:1})}function S(E,P){d="REPLACE";let $=Sd(T.location,E,P);m=g();let D=gg($,m),F=T.createHref($);c.replaceState(D,"",F),u&&p&&p({action:d,location:T.location,delta:0})}function k(E){let P=a.location.origin!=="null"?a.location.origin:a.location.href,$=typeof E=="string"?E:Xo(E);return $=$.replace(/ $/,"%20"),Le(P,`No window.location.(origin|href) available to create URL for href: ${$}`),new URL($,P)}let T={get action(){return d},get location(){return e(a,c)},listen(E){if(p)throw new Error("A history only accepts one active listener");return a.addEventListener(mg,x),p=E,()=>{a.removeEventListener(mg,x),p=null}},createHref(E){return n(a,E)},createURL:k,encodeLocation(E){let P=k(E);return{pathname:P.pathname,search:P.search,hash:P.hash}},push:w,replace:S,go(E){return c.go(E)}};return T}function Qy(e,n,i="/"){return zb(e,n,i,!1)}function zb(e,n,i,o){let a=typeof n=="string"?_i(n):n,u=lr(a.pathname||"/",i);if(u==null)return null;let c=Jy(e);Ub(c);let d=null;for(let p=0;d==null&&p<c.length;++p){let m=e2(u);d=Jb(c[p],m,o)}return d}function Jy(e,n=[],i=[],o=""){let a=(u,c,d)=>{let p={relativePath:d===void 0?u.path||"":d,caseSensitive:u.caseSensitive===!0,childrenIndex:c,route:u};p.relativePath.startsWith("/")&&(Le(p.relativePath.startsWith(o),`Absolute route path "${p.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(o.length));let m=An([o,p.relativePath]),g=i.concat(p);u.children&&u.children.length>0&&(Le(u.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${m}".`),Jy(u.children,n,g,m)),!(u.path==null&&!u.index)&&n.push({path:m,score:Xb(m,u.index),routesMeta:g})};return e.forEach((u,c)=>{var d;if(u.path===""||!((d=u.path)!=null&&d.includes("?")))a(u,c);else for(let p of Zy(u.path))a(u,c,p)}),n}function Zy(e){let n=e.split("/");if(n.length===0)return[];let[i,...o]=n,a=i.endsWith("?"),u=i.replace(/\?$/,"");if(o.length===0)return a?[u,""]:[u];let c=Zy(o.join("/")),d=[];return d.push(...c.map(p=>p===""?u:[u,p].join("/"))),a&&d.push(...c),d.map(p=>e.startsWith("/")&&p===""?"/":p)}function Ub(e){e.sort((n,i)=>n.score!==i.score?i.score-n.score:Qb(n.routesMeta.map(o=>o.childrenIndex),i.routesMeta.map(o=>o.childrenIndex)))}var Wb=/^:[\w-]+$/,Hb=3,Kb=2,Gb=1,Yb=10,qb=-2,yg=e=>e==="*";function Xb(e,n){let i=e.split("/"),o=i.length;return i.some(yg)&&(o+=qb),n&&(o+=Kb),i.filter(a=>!yg(a)).reduce((a,u)=>a+(Wb.test(u)?Hb:u===""?Gb:Yb),o)}function Qb(e,n){return e.length===n.length&&e.slice(0,-1).every((o,a)=>o===n[a])?e[e.length-1]-n[n.length-1]:0}function Jb(e,n,i=!1){let{routesMeta:o}=e,a={},u="/",c=[];for(let d=0;d<o.length;++d){let p=o[d],m=d===o.length-1,g=u==="/"?n:n.slice(u.length)||"/",x=al({path:p.relativePath,caseSensitive:p.caseSensitive,end:m},g),w=p.route;if(!x&&m&&i&&!o[o.length-1].route.index&&(x=al({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},g)),!x)return null;Object.assign(a,x.params),c.push({params:a,pathname:An([u,x.pathname]),pathnameBase:i2(An([u,x.pathnameBase])),route:w}),x.pathnameBase!=="/"&&(u=An([u,x.pathnameBase]))}return c}function al(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[i,o]=Zb(e.path,e.caseSensitive,e.end),a=n.match(i);if(!a)return null;let u=a[0],c=u.replace(/(.)\/+$/,"$1"),d=a.slice(1);return{params:o.reduce((m,{paramName:g,isOptional:x},w)=>{if(g==="*"){let k=d[w]||"";c=u.slice(0,u.length-k.length).replace(/(.)\/+$/,"$1")}const S=d[w];return x&&!S?m[g]=void 0:m[g]=(S||"").replace(/%2F/g,"/"),m},{}),pathname:u,pathnameBase:c,pattern:e}}function Zb(e,n=!1,i=!0){rn(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let o=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,d,p)=>(o.push({paramName:d,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(o.push({paramName:"*"}),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,n?void 0:"i"),o]}function e2(e){try{return e.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return rn(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${n}).`),e}}function lr(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let i=n.endsWith("/")?n.length-1:n.length,o=e.charAt(i);return o&&o!=="/"?null:e.slice(i)||"/"}function t2(e,n="/"){let{pathname:i,search:o="",hash:a=""}=typeof e=="string"?_i(e):e;return{pathname:i?i.startsWith("/")?i:n2(i,n):n,search:o2(o),hash:s2(a)}}function n2(e,n){let i=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?i.length>1&&i.pop():a!=="."&&i.push(a)}),i.length>1?i.join("/"):"/"}function Nc(e,n,i,o){return`Cannot include a '${e}' character in a manually specified \`to.${n}\` field [${JSON.stringify(o)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function r2(e){return e.filter((n,i)=>i===0||n.route.path&&n.route.path.length>0)}function of(e){let n=r2(e);return n.map((i,o)=>o===n.length-1?i.pathname:i.pathnameBase)}function sf(e,n,i,o=!1){let a;typeof e=="string"?a=_i(e):(a={...e},Le(!a.pathname||!a.pathname.includes("?"),Nc("?","pathname","search",a)),Le(!a.pathname||!a.pathname.includes("#"),Nc("#","pathname","hash",a)),Le(!a.search||!a.search.includes("#"),Nc("#","search","hash",a)));let u=e===""||a.pathname==="",c=u?"/":a.pathname,d;if(c==null)d=i;else{let x=n.length-1;if(!o&&c.startsWith("..")){let w=c.split("/");for(;w[0]==="..";)w.shift(),x-=1;a.pathname=w.join("/")}d=x>=0?n[x]:"/"}let p=t2(a,d),m=c&&c!=="/"&&c.endsWith("/"),g=(u||c===".")&&i.endsWith("/");return!p.pathname.endsWith("/")&&(m||g)&&(p.pathname+="/"),p}var An=e=>e.join("/").replace(/\/\/+/g,"/"),i2=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),o2=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,s2=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function a2(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}var ex=["POST","PUT","PATCH","DELETE"];new Set(ex);var l2=["GET",...ex];new Set(l2);var Bi=b.createContext(null);Bi.displayName="DataRouter";var bl=b.createContext(null);bl.displayName="DataRouterState";var tx=b.createContext({isTransitioning:!1});tx.displayName="ViewTransition";var u2=b.createContext(new Map);u2.displayName="Fetchers";var c2=b.createContext(null);c2.displayName="Await";var on=b.createContext(null);on.displayName="Navigation";var ss=b.createContext(null);ss.displayName="Location";var xn=b.createContext({outlet:null,matches:[],isDataRoute:!1});xn.displayName="Route";var af=b.createContext(null);af.displayName="RouteError";function d2(e,{relative:n}={}){Le(Oi(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:o}=b.useContext(on),{hash:a,pathname:u,search:c}=as(e,{relative:n}),d=u;return i!=="/"&&(d=u==="/"?i:An([i,u])),o.createHref({pathname:d,search:c,hash:a})}function Oi(){return b.useContext(ss)!=null}function Ht(){return Le(Oi(),"useLocation() may be used only in the context of a <Router> component."),b.useContext(ss).location}var nx="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function rx(e){b.useContext(on).static||b.useLayoutEffect(e)}function Fi(){let{isDataRoute:e}=b.useContext(xn);return e?E2():f2()}function f2(){Le(Oi(),"useNavigate() may be used only in the context of a <Router> component.");let e=b.useContext(Bi),{basename:n,navigator:i}=b.useContext(on),{matches:o}=b.useContext(xn),{pathname:a}=Ht(),u=JSON.stringify(of(o)),c=b.useRef(!1);return rx(()=>{c.current=!0}),b.useCallback((p,m={})=>{if(rn(c.current,nx),!c.current)return;if(typeof p=="number"){i.go(p);return}let g=sf(p,JSON.parse(u),a,m.relative==="path");e==null&&n!=="/"&&(g.pathname=g.pathname==="/"?n:An([n,g.pathname])),(m.replace?i.replace:i.push)(g,m.state,m)},[n,i,u,a,e])}b.createContext(null);function as(e,{relative:n}={}){let{matches:i}=b.useContext(xn),{pathname:o}=Ht(),a=JSON.stringify(of(i));return b.useMemo(()=>sf(e,JSON.parse(a),o,n==="path"),[e,a,o,n])}function p2(e,n){return ix(e,n)}function ix(e,n,i,o){var $;Le(Oi(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:a,static:u}=b.useContext(on),{matches:c}=b.useContext(xn),d=c[c.length-1],p=d?d.params:{},m=d?d.pathname:"/",g=d?d.pathnameBase:"/",x=d&&d.route;{let D=x&&x.path||"";ox(m,!x||D.endsWith("*")||D.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${D}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${D}"> to <Route path="${D==="/"?"*":`${D}/*`}">.`)}let w=Ht(),S;if(n){let D=typeof n=="string"?_i(n):n;Le(g==="/"||(($=D.pathname)==null?void 0:$.startsWith(g)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${D.pathname}" was given in the \`location\` prop.`),S=D}else S=w;let k=S.pathname||"/",T=k;if(g!=="/"){let D=g.replace(/^\//,"").split("/");T="/"+k.replace(/^\//,"").split("/").slice(D.length).join("/")}let E=!u&&i&&i.matches&&i.matches.length>0?i.matches:Qy(e,{pathname:T});rn(x||E!=null,`No routes matched location "${S.pathname}${S.search}${S.hash}" `),rn(E==null||E[E.length-1].route.element!==void 0||E[E.length-1].route.Component!==void 0||E[E.length-1].route.lazy!==void 0,`Matched leaf route at location "${S.pathname}${S.search}${S.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let P=x2(E&&E.map(D=>Object.assign({},D,{params:Object.assign({},p,D.params),pathname:An([g,a.encodeLocation?a.encodeLocation(D.pathname).pathname:D.pathname]),pathnameBase:D.pathnameBase==="/"?g:An([g,a.encodeLocation?a.encodeLocation(D.pathnameBase).pathname:D.pathnameBase])})),c,i,o);return n&&P?b.createElement(ss.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...S},navigationType:"POP"}},P):P}function h2(){let e=k2(),n=a2(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),i=e instanceof Error?e.stack:null,o="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:o},u={padding:"2px 4px",backgroundColor:o},c=null;return console.error("Error handled by React Router default ErrorBoundary:",e),c=b.createElement(b.Fragment,null,b.createElement("p",null,"💿 Hey developer 👋"),b.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",b.createElement("code",{style:u},"ErrorBoundary")," or"," ",b.createElement("code",{style:u},"errorElement")," prop on your route.")),b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},n),i?b.createElement("pre",{style:a},i):null,c)}var m2=b.createElement(h2,null),g2=class extends b.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?b.createElement(xn.Provider,{value:this.props.routeContext},b.createElement(af.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function y2({routeContext:e,match:n,children:i}){let o=b.useContext(Bi);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),b.createElement(xn.Provider,{value:e},i)}function x2(e,n=[],i=null,o=null){if(e==null){if(!i)return null;if(i.errors)e=i.matches;else if(n.length===0&&!i.initialized&&i.matches.length>0)e=i.matches;else return null}let a=e,u=i==null?void 0:i.errors;if(u!=null){let p=a.findIndex(m=>m.route.id&&(u==null?void 0:u[m.route.id])!==void 0);Le(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),a=a.slice(0,Math.min(a.length,p+1))}let c=!1,d=-1;if(i)for(let p=0;p<a.length;p++){let m=a[p];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(d=p),m.route.id){let{loaderData:g,errors:x}=i,w=m.route.loader&&!g.hasOwnProperty(m.route.id)&&(!x||x[m.route.id]===void 0);if(m.route.lazy||w){c=!0,d>=0?a=a.slice(0,d+1):a=[a[0]];break}}}return a.reduceRight((p,m,g)=>{let x,w=!1,S=null,k=null;i&&(x=u&&m.route.id?u[m.route.id]:void 0,S=m.route.errorElement||m2,c&&(d<0&&g===0?(ox("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),w=!0,k=null):d===g&&(w=!0,k=m.route.hydrateFallbackElement||null)));let T=n.concat(a.slice(0,g+1)),E=()=>{let P;return x?P=S:w?P=k:m.route.Component?P=b.createElement(m.route.Component,null):m.route.element?P=m.route.element:P=p,b.createElement(y2,{match:m,routeContext:{outlet:p,matches:T,isDataRoute:i!=null},children:P})};return i&&(m.route.ErrorBoundary||m.route.errorElement||g===0)?b.createElement(g2,{location:i.location,revalidation:i.revalidation,component:S,error:x,children:E(),routeContext:{outlet:null,matches:T,isDataRoute:!0}}):E()},null)}function lf(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function v2(e){let n=b.useContext(Bi);return Le(n,lf(e)),n}function w2(e){let n=b.useContext(bl);return Le(n,lf(e)),n}function S2(e){let n=b.useContext(xn);return Le(n,lf(e)),n}function uf(e){let n=S2(e),i=n.matches[n.matches.length-1];return Le(i.route.id,`${e} can only be used on routes that contain a unique "id"`),i.route.id}function b2(){return uf("useRouteId")}function k2(){var o;let e=b.useContext(af),n=w2("useRouteError"),i=uf("useRouteError");return e!==void 0?e:(o=n.errors)==null?void 0:o[i]}function E2(){let{router:e}=v2("useNavigate"),n=uf("useNavigate"),i=b.useRef(!1);return rx(()=>{i.current=!0}),b.useCallback(async(a,u={})=>{rn(i.current,nx),i.current&&(typeof a=="number"?e.navigate(a):await e.navigate(a,{fromRouteId:n,...u}))},[e,n])}var xg={};function ox(e,n,i){!n&&!xg[e]&&(xg[e]=!0,rn(!1,i))}b.memo(C2);function C2({routes:e,future:n,state:i}){return ix(e,void 0,i,n)}function sx({to:e,replace:n,state:i,relative:o}){Le(Oi(),"<Navigate> may be used only in the context of a <Router> component.");let{static:a}=b.useContext(on);rn(!a,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:u}=b.useContext(xn),{pathname:c}=Ht(),d=Fi(),p=sf(e,of(u),c,o==="path"),m=JSON.stringify(p);return b.useEffect(()=>{d(JSON.parse(m),{replace:n,state:i,relative:o})},[d,m,o,n,i]),null}function pn(e){Le(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function T2({basename:e="/",children:n=null,location:i,navigationType:o="POP",navigator:a,static:u=!1}){Le(!Oi(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let c=e.replace(/^\/*/,"/"),d=b.useMemo(()=>({basename:c,navigator:a,static:u,future:{}}),[c,a,u]);typeof i=="string"&&(i=_i(i));let{pathname:p="/",search:m="",hash:g="",state:x=null,key:w="default"}=i,S=b.useMemo(()=>{let k=lr(p,c);return k==null?null:{location:{pathname:k,search:m,hash:g,state:x,key:w},navigationType:o}},[c,p,m,g,x,w,o]);return rn(S!=null,`<Router basename="${c}"> is not able to match the URL "${p}${m}${g}" because it does not start with the basename, so the <Router> won't render anything.`),S==null?null:b.createElement(on.Provider,{value:d},b.createElement(ss.Provider,{children:n,value:S}))}function P2({children:e,location:n}){return p2(bd(e),n)}function bd(e,n=[]){let i=[];return b.Children.forEach(e,(o,a)=>{if(!b.isValidElement(o))return;let u=[...n,a];if(o.type===b.Fragment){i.push.apply(i,bd(o.props.children,u));return}Le(o.type===pn,`[${typeof o.type=="string"?o.type:o.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Le(!o.props.index||!o.props.children,"An index route cannot have child routes.");let c={id:o.props.id||u.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,loader:o.props.loader,action:o.props.action,hydrateFallbackElement:o.props.hydrateFallbackElement,HydrateFallback:o.props.HydrateFallback,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.hasErrorBoundary===!0||o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(c.children=bd(o.props.children,u)),i.push(c)}),i}var Ga="get",Ya="application/x-www-form-urlencoded";function kl(e){return e!=null&&typeof e.tagName=="string"}function j2(e){return kl(e)&&e.tagName.toLowerCase()==="button"}function R2(e){return kl(e)&&e.tagName.toLowerCase()==="form"}function A2(e){return kl(e)&&e.tagName.toLowerCase()==="input"}function D2(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function I2(e,n){return e.button===0&&(!n||n==="_self")&&!D2(e)}var Pa=null;function L2(){if(Pa===null)try{new FormData(document.createElement("form"),0),Pa=!1}catch{Pa=!0}return Pa}var $2=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Vc(e){return e!=null&&!$2.has(e)?(rn(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ya}"`),null):e}function M2(e,n){let i,o,a,u,c;if(R2(e)){let d=e.getAttribute("action");o=d?lr(d,n):null,i=e.getAttribute("method")||Ga,a=Vc(e.getAttribute("enctype"))||Ya,u=new FormData(e)}else if(j2(e)||A2(e)&&(e.type==="submit"||e.type==="image")){let d=e.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=e.getAttribute("formaction")||d.getAttribute("action");if(o=p?lr(p,n):null,i=e.getAttribute("formmethod")||d.getAttribute("method")||Ga,a=Vc(e.getAttribute("formenctype"))||Vc(d.getAttribute("enctype"))||Ya,u=new FormData(d,e),!L2()){let{name:m,type:g,value:x}=e;if(g==="image"){let w=m?`${m}.`:"";u.append(`${w}x`,"0"),u.append(`${w}y`,"0")}else m&&u.append(m,x)}}else{if(kl(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=Ga,o=null,a=Ya,c=e}return u&&a==="text/plain"&&(c=u,u=void 0),{action:o,method:i.toLowerCase(),encType:a,formData:u,body:c}}function cf(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}async function _2(e,n){if(e.id in n)return n[e.id];try{let i=await import(e.module);return n[e.id]=i,i}catch(i){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function B2(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function O2(e,n,i){let o=await Promise.all(e.map(async a=>{let u=n.routes[a.route.id];if(u){let c=await _2(u,i);return c.links?c.links():[]}return[]}));return z2(o.flat(1).filter(B2).filter(a=>a.rel==="stylesheet"||a.rel==="preload").map(a=>a.rel==="stylesheet"?{...a,rel:"prefetch",as:"style"}:{...a,rel:"prefetch"}))}function vg(e,n,i,o,a,u){let c=(p,m)=>i[m]?p.route.id!==i[m].route.id:!0,d=(p,m)=>{var g;return i[m].pathname!==p.pathname||((g=i[m].route.path)==null?void 0:g.endsWith("*"))&&i[m].params["*"]!==p.params["*"]};return u==="assets"?n.filter((p,m)=>c(p,m)||d(p,m)):u==="data"?n.filter((p,m)=>{var x;let g=o.routes[p.route.id];if(!g||!g.hasLoader)return!1;if(c(p,m)||d(p,m))return!0;if(p.route.shouldRevalidate){let w=p.route.shouldRevalidate({currentUrl:new URL(a.pathname+a.search+a.hash,window.origin),currentParams:((x=i[0])==null?void 0:x.params)||{},nextUrl:new URL(e,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof w=="boolean")return w}return!0}):[]}function F2(e,n,{includeHydrateFallback:i}={}){return N2(e.map(o=>{let a=n.routes[o.route.id];if(!a)return[];let u=[a.module];return a.clientActionModule&&(u=u.concat(a.clientActionModule)),a.clientLoaderModule&&(u=u.concat(a.clientLoaderModule)),i&&a.hydrateFallbackModule&&(u=u.concat(a.hydrateFallbackModule)),a.imports&&(u=u.concat(a.imports)),u}).flat(1))}function N2(e){return[...new Set(e)]}function V2(e){let n={},i=Object.keys(e).sort();for(let o of i)n[o]=e[o];return n}function z2(e,n){let i=new Set;return new Set(n),e.reduce((o,a)=>{let u=JSON.stringify(V2(a));return i.has(u)||(i.add(u),o.push({key:u,link:a})),o},[])}function U2(e){let n=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return n.pathname==="/"?n.pathname="_root.data":n.pathname=`${n.pathname.replace(/\/$/,"")}.data`,n}function W2(){let e=b.useContext(Bi);return cf(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function H2(){let e=b.useContext(bl);return cf(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var df=b.createContext(void 0);df.displayName="FrameworkContext";function ax(){let e=b.useContext(df);return cf(e,"You must render this element inside a <HydratedRouter> element"),e}function K2(e,n){let i=b.useContext(df),[o,a]=b.useState(!1),[u,c]=b.useState(!1),{onFocus:d,onBlur:p,onMouseEnter:m,onMouseLeave:g,onTouchStart:x}=n,w=b.useRef(null);b.useEffect(()=>{if(e==="render"&&c(!0),e==="viewport"){let T=P=>{P.forEach($=>{c($.isIntersecting)})},E=new IntersectionObserver(T,{threshold:.5});return w.current&&E.observe(w.current),()=>{E.disconnect()}}},[e]),b.useEffect(()=>{if(o){let T=setTimeout(()=>{c(!0)},100);return()=>{clearTimeout(T)}}},[o]);let S=()=>{a(!0)},k=()=>{a(!1),c(!1)};return i?e!=="intent"?[u,w,{}]:[u,w,{onFocus:Lo(d,S),onBlur:Lo(p,k),onMouseEnter:Lo(m,S),onMouseLeave:Lo(g,k),onTouchStart:Lo(x,S)}]:[!1,w,{}]}function Lo(e,n){return i=>{e&&e(i),i.defaultPrevented||n(i)}}function G2({page:e,...n}){let{router:i}=W2(),o=b.useMemo(()=>Qy(i.routes,e,i.basename),[i.routes,e,i.basename]);return o?b.createElement(q2,{page:e,matches:o,...n}):null}function Y2(e){let{manifest:n,routeModules:i}=ax(),[o,a]=b.useState([]);return b.useEffect(()=>{let u=!1;return O2(e,n,i).then(c=>{u||a(c)}),()=>{u=!0}},[e,n,i]),o}function q2({page:e,matches:n,...i}){let o=Ht(),{manifest:a,routeModules:u}=ax(),{loaderData:c,matches:d}=H2(),p=b.useMemo(()=>vg(e,n,d,a,o,"data"),[e,n,d,a,o]),m=b.useMemo(()=>vg(e,n,d,a,o,"assets"),[e,n,d,a,o]),g=b.useMemo(()=>{if(e===o.pathname+o.search+o.hash)return[];let S=new Set,k=!1;if(n.forEach(E=>{var $;let P=a.routes[E.route.id];!P||!P.hasLoader||(!p.some(D=>D.route.id===E.route.id)&&E.route.id in c&&(($=u[E.route.id])!=null&&$.shouldRevalidate)||P.hasClientLoader?k=!0:S.add(E.route.id))}),S.size===0)return[];let T=U2(e);return k&&S.size>0&&T.searchParams.set("_routes",n.filter(E=>S.has(E.route.id)).map(E=>E.route.id).join(",")),[T.pathname+T.search]},[c,o,a,p,n,e,u]),x=b.useMemo(()=>F2(m,a),[m,a]),w=Y2(m);return b.createElement(b.Fragment,null,g.map(S=>b.createElement("link",{key:S,rel:"prefetch",as:"fetch",href:S,...i})),x.map(S=>b.createElement("link",{key:S,rel:"modulepreload",href:S,...i})),w.map(({key:S,link:k})=>b.createElement("link",{key:S,...k})))}function X2(...e){return n=>{e.forEach(i=>{typeof i=="function"?i(n):i!=null&&(i.current=n)})}}var lx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{lx&&(window.__reactRouterVersion="7.2.0")}catch{}function Q2({basename:e,children:n,window:i}){let o=b.useRef();o.current==null&&(o.current=Fb({window:i,v5Compat:!0}));let a=o.current,[u,c]=b.useState({action:a.action,location:a.location}),d=b.useCallback(p=>{b.startTransition(()=>c(p))},[c]);return b.useLayoutEffect(()=>a.listen(d),[a,d]),b.createElement(T2,{basename:e,children:n,location:u.location,navigationType:u.action,navigator:a})}var ux=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ff=b.forwardRef(function({onClick:n,discover:i="render",prefetch:o="none",relative:a,reloadDocument:u,replace:c,state:d,target:p,to:m,preventScrollReset:g,viewTransition:x,...w},S){let{basename:k}=b.useContext(on),T=typeof m=="string"&&ux.test(m),E,P=!1;if(typeof m=="string"&&T&&(E=m,lx))try{let Q=new URL(window.location.href),ae=m.startsWith("//")?new URL(Q.protocol+m):new URL(m),se=lr(ae.pathname,k);ae.origin===Q.origin&&se!=null?m=se+ae.search+ae.hash:P=!0}catch{rn(!1,`<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let $=d2(m,{relative:a}),[D,F,O]=K2(o,w),V=tk(m,{replace:c,state:d,target:p,preventScrollReset:g,relative:a,viewTransition:x});function W(Q){n&&n(Q),Q.defaultPrevented||V(Q)}let H=b.createElement("a",{...w,...O,href:E||$,onClick:P||u?n:W,ref:X2(S,F),target:p,"data-discover":!T&&i==="render"?"true":void 0});return D&&!T?b.createElement(b.Fragment,null,H,b.createElement(G2,{page:$})):H});ff.displayName="Link";var J2=b.forwardRef(function({"aria-current":n="page",caseSensitive:i=!1,className:o="",end:a=!1,style:u,to:c,viewTransition:d,children:p,...m},g){let x=as(c,{relative:m.relative}),w=Ht(),S=b.useContext(bl),{navigator:k,basename:T}=b.useContext(on),E=S!=null&&sk(x)&&d===!0,P=k.encodeLocation?k.encodeLocation(x).pathname:x.pathname,$=w.pathname,D=S&&S.navigation&&S.navigation.location?S.navigation.location.pathname:null;i||($=$.toLowerCase(),D=D?D.toLowerCase():null,P=P.toLowerCase()),D&&T&&(D=lr(D,T)||D);const F=P!=="/"&&P.endsWith("/")?P.length-1:P.length;let O=$===P||!a&&$.startsWith(P)&&$.charAt(F)==="/",V=D!=null&&(D===P||!a&&D.startsWith(P)&&D.charAt(P.length)==="/"),W={isActive:O,isPending:V,isTransitioning:E},H=O?n:void 0,Q;typeof o=="function"?Q=o(W):Q=[o,O?"active":null,V?"pending":null,E?"transitioning":null].filter(Boolean).join(" ");let ae=typeof u=="function"?u(W):u;return b.createElement(ff,{...m,"aria-current":H,className:Q,ref:g,style:ae,to:c,viewTransition:d},typeof p=="function"?p(W):p)});J2.displayName="NavLink";var Z2=b.forwardRef(({discover:e="render",fetcherKey:n,navigate:i,reloadDocument:o,replace:a,state:u,method:c=Ga,action:d,onSubmit:p,relative:m,preventScrollReset:g,viewTransition:x,...w},S)=>{let k=ik(),T=ok(d,{relative:m}),E=c.toLowerCase()==="get"?"get":"post",P=typeof d=="string"&&ux.test(d),$=D=>{if(p&&p(D),D.defaultPrevented)return;D.preventDefault();let F=D.nativeEvent.submitter,O=(F==null?void 0:F.getAttribute("formmethod"))||c;k(F||D.currentTarget,{fetcherKey:n,method:O,navigate:i,replace:a,state:u,relative:m,preventScrollReset:g,viewTransition:x})};return b.createElement("form",{ref:S,method:E,action:T,onSubmit:o?p:$,...w,"data-discover":!P&&e==="render"?"true":void 0})});Z2.displayName="Form";function ek(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function cx(e){let n=b.useContext(Bi);return Le(n,ek(e)),n}function tk(e,{target:n,replace:i,state:o,preventScrollReset:a,relative:u,viewTransition:c}={}){let d=Fi(),p=Ht(),m=as(e,{relative:u});return b.useCallback(g=>{if(I2(g,n)){g.preventDefault();let x=i!==void 0?i:Xo(p)===Xo(m);d(e,{replace:x,state:o,preventScrollReset:a,relative:u,viewTransition:c})}},[p,d,m,i,o,n,e,a,u,c])}var nk=0,rk=()=>`__${String(++nk)}__`;function ik(){let{router:e}=cx("useSubmit"),{basename:n}=b.useContext(on),i=b2();return b.useCallback(async(o,a={})=>{let{action:u,method:c,encType:d,formData:p,body:m}=M2(o,n);if(a.navigate===!1){let g=a.fetcherKey||rk();await e.fetch(g,i,a.action||u,{preventScrollReset:a.preventScrollReset,formData:p,body:m,formMethod:a.method||c,formEncType:a.encType||d,flushSync:a.flushSync})}else await e.navigate(a.action||u,{preventScrollReset:a.preventScrollReset,formData:p,body:m,formMethod:a.method||c,formEncType:a.encType||d,replace:a.replace,state:a.state,fromRouteId:i,flushSync:a.flushSync,viewTransition:a.viewTransition})},[e,n,i])}function ok(e,{relative:n}={}){let{basename:i}=b.useContext(on),o=b.useContext(xn);Le(o,"useFormAction must be used inside a RouteContext");let[a]=o.matches.slice(-1),u={...as(e||".",{relative:n})},c=Ht();if(e==null){u.search=c.search;let d=new URLSearchParams(u.search),p=d.getAll("index");if(p.some(g=>g==="")){d.delete("index"),p.filter(x=>x).forEach(x=>d.append("index",x));let g=d.toString();u.search=g?`?${g}`:""}}return(!e||e===".")&&a.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(u.pathname=u.pathname==="/"?i:An([i,u.pathname])),Xo(u)}function sk(e,n={}){let i=b.useContext(tx);Le(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:o}=cx("useViewTransitionState"),a=as(e,{relative:n.relative});if(!i.isTransitioning)return!1;let u=lr(i.currentLocation.pathname,o)||i.currentLocation.pathname,c=lr(i.nextLocation.pathname,o)||i.nextLocation.pathname;return al(a.pathname,c)!=null||al(a.pathname,u)!=null}new TextEncoder;const pf=b.createContext({});function hf(e){const n=b.useRef(null);return n.current===null&&(n.current=e()),n.current}const mf=typeof window<"u",dx=mf?b.useLayoutEffect:b.useEffect,El=b.createContext(null),gf=b.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});class ak extends b.Component{getSnapshotBeforeUpdate(n){const i=this.props.childRef.current;if(i&&n.isPresent&&!this.props.isPresent){const o=i.offsetParent,a=o instanceof HTMLElement&&o.offsetWidth||0,u=this.props.sizeRef.current;u.height=i.offsetHeight||0,u.width=i.offsetWidth||0,u.top=i.offsetTop,u.left=i.offsetLeft,u.right=a-u.width-u.left}return null}componentDidUpdate(){}render(){return this.props.children}}function lk({children:e,isPresent:n,anchorX:i}){const o=b.useId(),a=b.useRef(null),u=b.useRef({width:0,height:0,top:0,left:0,right:0}),{nonce:c}=b.useContext(gf);return b.useInsertionEffect(()=>{const{width:d,height:p,top:m,left:g,right:x}=u.current;if(n||!a.current||!d||!p)return;const w=i==="left"?`left: ${g}`:`right: ${x}`;a.current.dataset.motionPopId=o;const S=document.createElement("style");return c&&(S.nonce=c),document.head.appendChild(S),S.sheet&&S.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${d}px !important;
            height: ${p}px !important;
            ${w}px !important;
            top: ${m}px !important;
          }
        `),()=>{document.head.removeChild(S)}},[n]),y.jsx(ak,{isPresent:n,childRef:a,sizeRef:u,children:b.cloneElement(e,{ref:a})})}const uk=({children:e,initial:n,isPresent:i,onExitComplete:o,custom:a,presenceAffectsLayout:u,mode:c,anchorX:d})=>{const p=hf(ck),m=b.useId();let g=!0,x=b.useMemo(()=>(g=!1,{id:m,initial:n,isPresent:i,custom:a,onExitComplete:w=>{p.set(w,!0);for(const S of p.values())if(!S)return;o&&o()},register:w=>(p.set(w,!1),()=>p.delete(w))}),[i,p,o]);return u&&g&&(x={...x}),b.useMemo(()=>{p.forEach((w,S)=>p.set(S,!1))},[i]),b.useEffect(()=>{!i&&!p.size&&o&&o()},[i]),c==="popLayout"&&(e=y.jsx(lk,{isPresent:i,anchorX:d,children:e})),y.jsx(El.Provider,{value:x,children:e})};function ck(){return new Map}function fx(e=!0){const n=b.useContext(El);if(n===null)return[!0,null];const{isPresent:i,onExitComplete:o,register:a}=n,u=b.useId();b.useEffect(()=>{if(e)return a(u)},[e]);const c=b.useCallback(()=>e&&o&&o(u),[u,o,e]);return!i&&o?[!1,c]:[!0]}const ja=e=>e.key||"";function wg(e){const n=[];return b.Children.forEach(e,i=>{b.isValidElement(i)&&n.push(i)}),n}const zr=({children:e,custom:n,initial:i=!0,onExitComplete:o,presenceAffectsLayout:a=!0,mode:u="sync",propagate:c=!1,anchorX:d="left"})=>{const[p,m]=fx(c),g=b.useMemo(()=>wg(e),[e]),x=c&&!p?[]:g.map(ja),w=b.useRef(!0),S=b.useRef(g),k=hf(()=>new Map),[T,E]=b.useState(g),[P,$]=b.useState(g);dx(()=>{w.current=!1,S.current=g;for(let O=0;O<P.length;O++){const V=ja(P[O]);x.includes(V)?k.delete(V):k.get(V)!==!0&&k.set(V,!1)}},[P,x.length,x.join("-")]);const D=[];if(g!==T){let O=[...g];for(let V=0;V<P.length;V++){const W=P[V],H=ja(W);x.includes(H)||(O.splice(V,0,W),D.push(W))}return u==="wait"&&D.length&&(O=D),$(wg(O)),E(g),null}const{forceRender:F}=b.useContext(pf);return y.jsx(y.Fragment,{children:P.map(O=>{const V=ja(O),W=c&&!p?!1:g===P||x.includes(V),H=()=>{if(k.has(V))k.set(V,!0);else return;let Q=!0;k.forEach(ae=>{ae||(Q=!1)}),Q&&(F==null||F(),$(S.current),c&&(m==null||m()),o&&o())};return y.jsx(uk,{isPresent:W,initial:!w.current||i?void 0:!1,custom:n,presenceAffectsLayout:a,mode:u,onExitComplete:W?void 0:H,anchorX:d,children:O},V)})})};function yf(e,n){e.indexOf(n)===-1&&e.push(n)}function xf(e,n){const i=e.indexOf(n);i>-1&&e.splice(i,1)}const Dn=(e,n,i)=>i>n?n:i<e?e:i;let vf=()=>{};const In={},px=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),hx=e=>/^0[^.\s]+$/u.test(e);function wf(e){let n;return()=>(n===void 0&&(n=e()),n)}const Ut=e=>e,dk=(e,n)=>i=>n(e(i)),ls=(...e)=>e.reduce(dk),Qo=(e,n,i)=>{const o=n-e;return o===0?1:(i-e)/o};class Sf{constructor(){this.subscriptions=[]}add(n){return yf(this.subscriptions,n),()=>xf(this.subscriptions,n)}notify(n,i,o){const a=this.subscriptions.length;if(a)if(a===1)this.subscriptions[0](n,i,o);else for(let u=0;u<a;u++){const c=this.subscriptions[u];c&&c(n,i,o)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const mn=e=>e*1e3,gn=e=>e/1e3;function mx(e,n){return n?e*(1e3/n):0}const gx=(e,n,i)=>(((1-3*i+3*n)*e+(3*i-6*n))*e+3*n)*e,fk=1e-7,pk=12;function hk(e,n,i,o,a){let u,c,d=0;do c=n+(i-n)/2,u=gx(c,o,a)-e,u>0?i=c:n=c;while(Math.abs(u)>fk&&++d<pk);return c}function us(e,n,i,o){if(e===n&&i===o)return Ut;const a=u=>hk(u,0,1,e,i);return u=>u===0||u===1?u:gx(a(u),n,o)}const yx=e=>n=>n<=.5?e(2*n)/2:(2-e(2*(1-n)))/2,xx=e=>n=>1-e(1-n),vx=us(.33,1.53,.69,.99),bf=xx(vx),wx=yx(bf),Sx=e=>(e*=2)<1?.5*bf(e):.5*(2-Math.pow(2,-10*(e-1))),kf=e=>1-Math.sin(Math.acos(e)),bx=xx(kf),kx=yx(kf),mk=us(.42,0,1,1),gk=us(0,0,.58,1),Ex=us(.42,0,.58,1),yk=e=>Array.isArray(e)&&typeof e[0]!="number",Cx=e=>Array.isArray(e)&&typeof e[0]=="number",xk={linear:Ut,easeIn:mk,easeInOut:Ex,easeOut:gk,circIn:kf,circInOut:kx,circOut:bx,backIn:bf,backInOut:wx,backOut:vx,anticipate:Sx},vk=e=>typeof e=="string",Sg=e=>{if(Cx(e)){vf(e.length===4);const[n,i,o,a]=e;return us(n,i,o,a)}else if(vk(e))return xk[e];return e},Ra=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"],bg={value:null};function wk(e,n){let i=new Set,o=new Set,a=!1,u=!1;const c=new WeakSet;let d={delta:0,timestamp:0,isProcessing:!1},p=0;function m(x){c.has(x)&&(g.schedule(x),e()),p++,x(d)}const g={schedule:(x,w=!1,S=!1)=>{const T=S&&a?i:o;return w&&c.add(x),T.has(x)||T.add(x),x},cancel:x=>{o.delete(x),c.delete(x)},process:x=>{if(d=x,a){u=!0;return}a=!0,[i,o]=[o,i],i.forEach(m),n&&bg.value&&bg.value.frameloop[n].push(p),p=0,i.clear(),a=!1,u&&(u=!1,g.process(x))}};return g}const Sk=40;function Tx(e,n){let i=!1,o=!0;const a={delta:0,timestamp:0,isProcessing:!1},u=()=>i=!0,c=Ra.reduce((D,F)=>(D[F]=wk(u,n?F:void 0),D),{}),{setup:d,read:p,resolveKeyframes:m,preUpdate:g,update:x,preRender:w,render:S,postRender:k}=c,T=()=>{const D=In.useManualTiming?a.timestamp:performance.now();i=!1,In.useManualTiming||(a.delta=o?1e3/60:Math.max(Math.min(D-a.timestamp,Sk),1)),a.timestamp=D,a.isProcessing=!0,d.process(a),p.process(a),m.process(a),g.process(a),x.process(a),w.process(a),S.process(a),k.process(a),a.isProcessing=!1,i&&n&&(o=!1,e(T))},E=()=>{i=!0,o=!0,a.isProcessing||e(T)};return{schedule:Ra.reduce((D,F)=>{const O=c[F];return D[F]=(V,W=!1,H=!1)=>(i||E(),O.schedule(V,W,H)),D},{}),cancel:D=>{for(let F=0;F<Ra.length;F++)c[Ra[F]].cancel(D)},state:a,steps:c}}const{schedule:Be,cancel:ur,state:at,steps:zc}=Tx(typeof requestAnimationFrame<"u"?requestAnimationFrame:Ut,!0);let qa;function bk(){qa=void 0}const Tt={now:()=>(qa===void 0&&Tt.set(at.isProcessing||In.useManualTiming?at.timestamp:performance.now()),qa),set:e=>{qa=e,queueMicrotask(bk)}},Px=e=>n=>typeof n=="string"&&n.startsWith(e),Ef=Px("--"),kk=Px("var(--"),Cf=e=>kk(e)?Ek.test(e.split("/*")[0].trim()):!1,Ek=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,Ni={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},Jo={...Ni,transform:e=>Dn(0,1,e)},Aa={...Ni,default:1},Vo=e=>Math.round(e*1e5)/1e5,Tf=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function Ck(e){return e==null}const Tk=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Pf=(e,n)=>i=>!!(typeof i=="string"&&Tk.test(i)&&i.startsWith(e)||n&&!Ck(i)&&Object.prototype.hasOwnProperty.call(i,n)),jx=(e,n,i)=>o=>{if(typeof o!="string")return o;const[a,u,c,d]=o.match(Tf);return{[e]:parseFloat(a),[n]:parseFloat(u),[i]:parseFloat(c),alpha:d!==void 0?parseFloat(d):1}},Pk=e=>Dn(0,255,e),Uc={...Ni,transform:e=>Math.round(Pk(e))},Ir={test:Pf("rgb","red"),parse:jx("red","green","blue"),transform:({red:e,green:n,blue:i,alpha:o=1})=>"rgba("+Uc.transform(e)+", "+Uc.transform(n)+", "+Uc.transform(i)+", "+Vo(Jo.transform(o))+")"};function jk(e){let n="",i="",o="",a="";return e.length>5?(n=e.substring(1,3),i=e.substring(3,5),o=e.substring(5,7),a=e.substring(7,9)):(n=e.substring(1,2),i=e.substring(2,3),o=e.substring(3,4),a=e.substring(4,5),n+=n,i+=i,o+=o,a+=a),{red:parseInt(n,16),green:parseInt(i,16),blue:parseInt(o,16),alpha:a?parseInt(a,16)/255:1}}const kd={test:Pf("#"),parse:jk,transform:Ir.transform},cs=e=>({test:n=>typeof n=="string"&&n.endsWith(e)&&n.split(" ").length===1,parse:parseFloat,transform:n=>`${n}${e}`}),ir=cs("deg"),yn=cs("%"),le=cs("px"),Rk=cs("vh"),Ak=cs("vw"),kg={...yn,parse:e=>yn.parse(e)/100,transform:e=>yn.transform(e*100)},Ei={test:Pf("hsl","hue"),parse:jx("hue","saturation","lightness"),transform:({hue:e,saturation:n,lightness:i,alpha:o=1})=>"hsla("+Math.round(e)+", "+yn.transform(Vo(n))+", "+yn.transform(Vo(i))+", "+Vo(Jo.transform(o))+")"},ht={test:e=>Ir.test(e)||kd.test(e)||Ei.test(e),parse:e=>Ir.test(e)?Ir.parse(e):Ei.test(e)?Ei.parse(e):kd.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?Ir.transform(e):Ei.transform(e)},Dk=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function Ik(e){var n,i;return isNaN(e)&&typeof e=="string"&&(((n=e.match(Tf))==null?void 0:n.length)||0)+(((i=e.match(Dk))==null?void 0:i.length)||0)>0}const Rx="number",Ax="color",Lk="var",$k="var(",Eg="${}",Mk=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Zo(e){const n=e.toString(),i=[],o={color:[],number:[],var:[]},a=[];let u=0;const d=n.replace(Mk,p=>(ht.test(p)?(o.color.push(u),a.push(Ax),i.push(ht.parse(p))):p.startsWith($k)?(o.var.push(u),a.push(Lk),i.push(p)):(o.number.push(u),a.push(Rx),i.push(parseFloat(p))),++u,Eg)).split(Eg);return{values:i,split:d,indexes:o,types:a}}function Dx(e){return Zo(e).values}function Ix(e){const{split:n,types:i}=Zo(e),o=n.length;return a=>{let u="";for(let c=0;c<o;c++)if(u+=n[c],a[c]!==void 0){const d=i[c];d===Rx?u+=Vo(a[c]):d===Ax?u+=ht.transform(a[c]):u+=a[c]}return u}}const _k=e=>typeof e=="number"?0:e;function Bk(e){const n=Dx(e);return Ix(e)(n.map(_k))}const cr={test:Ik,parse:Dx,createTransformer:Ix,getAnimatableNone:Bk};function Wc(e,n,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?e+(n-e)*6*i:i<1/2?n:i<2/3?e+(n-e)*(2/3-i)*6:e}function Ok({hue:e,saturation:n,lightness:i,alpha:o}){e/=360,n/=100,i/=100;let a=0,u=0,c=0;if(!n)a=u=c=i;else{const d=i<.5?i*(1+n):i+n-i*n,p=2*i-d;a=Wc(p,d,e+1/3),u=Wc(p,d,e),c=Wc(p,d,e-1/3)}return{red:Math.round(a*255),green:Math.round(u*255),blue:Math.round(c*255),alpha:o}}function ll(e,n){return i=>i>0?n:e}const _e=(e,n,i)=>e+(n-e)*i,Hc=(e,n,i)=>{const o=e*e,a=i*(n*n-o)+o;return a<0?0:Math.sqrt(a)},Fk=[kd,Ir,Ei],Nk=e=>Fk.find(n=>n.test(e));function Cg(e){const n=Nk(e);if(!n)return!1;let i=n.parse(e);return n===Ei&&(i=Ok(i)),i}const Tg=(e,n)=>{const i=Cg(e),o=Cg(n);if(!i||!o)return ll(e,n);const a={...i};return u=>(a.red=Hc(i.red,o.red,u),a.green=Hc(i.green,o.green,u),a.blue=Hc(i.blue,o.blue,u),a.alpha=_e(i.alpha,o.alpha,u),Ir.transform(a))},Ed=new Set(["none","hidden"]);function Vk(e,n){return Ed.has(e)?i=>i<=0?e:n:i=>i>=1?n:e}function zk(e,n){return i=>_e(e,n,i)}function jf(e){return typeof e=="number"?zk:typeof e=="string"?Cf(e)?ll:ht.test(e)?Tg:Hk:Array.isArray(e)?Lx:typeof e=="object"?ht.test(e)?Tg:Uk:ll}function Lx(e,n){const i=[...e],o=i.length,a=e.map((u,c)=>jf(u)(u,n[c]));return u=>{for(let c=0;c<o;c++)i[c]=a[c](u);return i}}function Uk(e,n){const i={...e,...n},o={};for(const a in i)e[a]!==void 0&&n[a]!==void 0&&(o[a]=jf(e[a])(e[a],n[a]));return a=>{for(const u in o)i[u]=o[u](a);return i}}function Wk(e,n){const i=[],o={color:0,var:0,number:0};for(let a=0;a<n.values.length;a++){const u=n.types[a],c=e.indexes[u][o[u]],d=e.values[c]??0;i[a]=d,o[u]++}return i}const Hk=(e,n)=>{const i=cr.createTransformer(n),o=Zo(e),a=Zo(n);return o.indexes.var.length===a.indexes.var.length&&o.indexes.color.length===a.indexes.color.length&&o.indexes.number.length>=a.indexes.number.length?Ed.has(e)&&!a.values.length||Ed.has(n)&&!o.values.length?Vk(e,n):ls(Lx(Wk(o,a),a.values),i):ll(e,n)};function $x(e,n,i){return typeof e=="number"&&typeof n=="number"&&typeof i=="number"?_e(e,n,i):jf(e)(e,n)}const Kk=e=>{const n=({timestamp:i})=>e(i);return{start:()=>Be.update(n,!0),stop:()=>ur(n),now:()=>at.isProcessing?at.timestamp:Tt.now()}},Mx=(e,n,i=10)=>{let o="";const a=Math.max(Math.round(n/i),2);for(let u=0;u<a;u++)o+=e(u/(a-1))+", ";return`linear(${o.substring(0,o.length-2)})`},ul=2e4;function Rf(e){let n=0;const i=50;let o=e.next(n);for(;!o.done&&n<ul;)n+=i,o=e.next(n);return n>=ul?1/0:n}function Gk(e,n=100,i){const o=i({...e,keyframes:[0,n]}),a=Math.min(Rf(o),ul);return{type:"keyframes",ease:u=>o.next(a*u).value/n,duration:gn(a)}}const Yk=5;function _x(e,n,i){const o=Math.max(n-Yk,0);return mx(i-e(o),n-o)}const Fe={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Pg=.001;function qk({duration:e=Fe.duration,bounce:n=Fe.bounce,velocity:i=Fe.velocity,mass:o=Fe.mass}){let a,u,c=1-n;c=Dn(Fe.minDamping,Fe.maxDamping,c),e=Dn(Fe.minDuration,Fe.maxDuration,gn(e)),c<1?(a=m=>{const g=m*c,x=g*e,w=g-i,S=Cd(m,c),k=Math.exp(-x);return Pg-w/S*k},u=m=>{const x=m*c*e,w=x*i+i,S=Math.pow(c,2)*Math.pow(m,2)*e,k=Math.exp(-x),T=Cd(Math.pow(m,2),c);return(-a(m)+Pg>0?-1:1)*((w-S)*k)/T}):(a=m=>{const g=Math.exp(-m*e),x=(m-i)*e+1;return-.001+g*x},u=m=>{const g=Math.exp(-m*e),x=(i-m)*(e*e);return g*x});const d=5/e,p=Qk(a,u,d);if(e=mn(e),isNaN(p))return{stiffness:Fe.stiffness,damping:Fe.damping,duration:e};{const m=Math.pow(p,2)*o;return{stiffness:m,damping:c*2*Math.sqrt(o*m),duration:e}}}const Xk=12;function Qk(e,n,i){let o=i;for(let a=1;a<Xk;a++)o=o-e(o)/n(o);return o}function Cd(e,n){return e*Math.sqrt(1-n*n)}const Jk=["duration","bounce"],Zk=["stiffness","damping","mass"];function jg(e,n){return n.some(i=>e[i]!==void 0)}function eE(e){let n={velocity:Fe.velocity,stiffness:Fe.stiffness,damping:Fe.damping,mass:Fe.mass,isResolvedFromDuration:!1,...e};if(!jg(e,Zk)&&jg(e,Jk))if(e.visualDuration){const i=e.visualDuration,o=2*Math.PI/(i*1.2),a=o*o,u=2*Dn(.05,1,1-(e.bounce||0))*Math.sqrt(a);n={...n,mass:Fe.mass,stiffness:a,damping:u}}else{const i=qk(e);n={...n,...i,mass:Fe.mass},n.isResolvedFromDuration=!0}return n}function cl(e=Fe.visualDuration,n=Fe.bounce){const i=typeof e!="object"?{visualDuration:e,keyframes:[0,1],bounce:n}:e;let{restSpeed:o,restDelta:a}=i;const u=i.keyframes[0],c=i.keyframes[i.keyframes.length-1],d={done:!1,value:u},{stiffness:p,damping:m,mass:g,duration:x,velocity:w,isResolvedFromDuration:S}=eE({...i,velocity:-gn(i.velocity||0)}),k=w||0,T=m/(2*Math.sqrt(p*g)),E=c-u,P=gn(Math.sqrt(p/g)),$=Math.abs(E)<5;o||(o=$?Fe.restSpeed.granular:Fe.restSpeed.default),a||(a=$?Fe.restDelta.granular:Fe.restDelta.default);let D;if(T<1){const O=Cd(P,T);D=V=>{const W=Math.exp(-T*P*V);return c-W*((k+T*P*E)/O*Math.sin(O*V)+E*Math.cos(O*V))}}else if(T===1)D=O=>c-Math.exp(-P*O)*(E+(k+P*E)*O);else{const O=P*Math.sqrt(T*T-1);D=V=>{const W=Math.exp(-T*P*V),H=Math.min(O*V,300);return c-W*((k+T*P*E)*Math.sinh(H)+O*E*Math.cosh(H))/O}}const F={calculatedDuration:S&&x||null,next:O=>{const V=D(O);if(S)d.done=O>=x;else{let W=O===0?k:0;T<1&&(W=O===0?mn(k):_x(D,O,V));const H=Math.abs(W)<=o,Q=Math.abs(c-V)<=a;d.done=H&&Q}return d.value=d.done?c:V,d},toString:()=>{const O=Math.min(Rf(F),ul),V=Mx(W=>F.next(O*W).value,O,30);return O+"ms "+V},toTransition:()=>{}};return F}cl.applyToOptions=e=>{const n=Gk(e,100,cl);return e.ease=n.ease,e.duration=mn(n.duration),e.type="keyframes",e};function Td({keyframes:e,velocity:n=0,power:i=.8,timeConstant:o=325,bounceDamping:a=10,bounceStiffness:u=500,modifyTarget:c,min:d,max:p,restDelta:m=.5,restSpeed:g}){const x=e[0],w={done:!1,value:x},S=H=>d!==void 0&&H<d||p!==void 0&&H>p,k=H=>d===void 0?p:p===void 0||Math.abs(d-H)<Math.abs(p-H)?d:p;let T=i*n;const E=x+T,P=c===void 0?E:c(E);P!==E&&(T=P-x);const $=H=>-T*Math.exp(-H/o),D=H=>P+$(H),F=H=>{const Q=$(H),ae=D(H);w.done=Math.abs(Q)<=m,w.value=w.done?P:ae};let O,V;const W=H=>{S(w.value)&&(O=H,V=cl({keyframes:[w.value,k(w.value)],velocity:_x(D,H,w.value),damping:a,stiffness:u,restDelta:m,restSpeed:g}))};return W(0),{calculatedDuration:null,next:H=>{let Q=!1;return!V&&O===void 0&&(Q=!0,F(H),W(H)),O!==void 0&&H>=O?V.next(H-O):(!Q&&F(H),w)}}}function tE(e,n,i){const o=[],a=i||In.mix||$x,u=e.length-1;for(let c=0;c<u;c++){let d=a(e[c],e[c+1]);if(n){const p=Array.isArray(n)?n[c]||Ut:n;d=ls(p,d)}o.push(d)}return o}function nE(e,n,{clamp:i=!0,ease:o,mixer:a}={}){const u=e.length;if(vf(u===n.length),u===1)return()=>n[0];if(u===2&&n[0]===n[1])return()=>n[1];const c=e[0]===e[1];e[0]>e[u-1]&&(e=[...e].reverse(),n=[...n].reverse());const d=tE(n,o,a),p=d.length,m=g=>{if(c&&g<e[0])return n[0];let x=0;if(p>1)for(;x<e.length-2&&!(g<e[x+1]);x++);const w=Qo(e[x],e[x+1],g);return d[x](w)};return i?g=>m(Dn(e[0],e[u-1],g)):m}function rE(e,n){const i=e[e.length-1];for(let o=1;o<=n;o++){const a=Qo(0,n,o);e.push(_e(i,1,a))}}function iE(e){const n=[0];return rE(n,e.length-1),n}function oE(e,n){return e.map(i=>i*n)}function sE(e,n){return e.map(()=>n||Ex).splice(0,e.length-1)}function zo({duration:e=300,keyframes:n,times:i,ease:o="easeInOut"}){const a=yk(o)?o.map(Sg):Sg(o),u={done:!1,value:n[0]},c=oE(i&&i.length===n.length?i:iE(n),e),d=nE(c,n,{ease:Array.isArray(a)?a:sE(n,a)});return{calculatedDuration:e,next:p=>(u.value=d(p),u.done=p>=e,u)}}const aE=e=>e!==null;function Af(e,{repeat:n,repeatType:i="loop"},o,a=1){const u=e.filter(aE),d=a<0||n&&i!=="loop"&&n%2===1?0:u.length-1;return!d||o===void 0?u[d]:o}const lE={decay:Td,inertia:Td,tween:zo,keyframes:zo,spring:cl};function Bx(e){typeof e.type=="string"&&(e.type=lE[e.type])}class Df{constructor(){this.count=0,this.updateFinished()}get finished(){return this._finished}updateFinished(){this.count++,this._finished=new Promise(n=>{this.resolve=n})}notifyFinished(){this.resolve()}then(n,i){return this.finished.then(n,i)}}const uE=e=>e/100;class Ox extends Df{constructor(n){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{const{motionValue:i}=this.options;if(i&&i.updatedAt!==Tt.now()&&this.tick(Tt.now()),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:o}=this.options;o&&o()},this.options=n,this.initAnimation(),this.play(),n.autoplay===!1&&this.pause()}initAnimation(){const{options:n}=this;Bx(n);const{type:i=zo,repeat:o=0,repeatDelay:a=0,repeatType:u,velocity:c=0}=n;let{keyframes:d}=n;const p=i||zo;p!==zo&&typeof d[0]!="number"&&(this.mixKeyframes=ls(uE,$x(d[0],d[1])),d=[0,100]);const m=p({...n,keyframes:d});u==="mirror"&&(this.mirroredGenerator=p({...n,keyframes:[...d].reverse(),velocity:-c})),m.calculatedDuration===null&&(m.calculatedDuration=Rf(m));const{calculatedDuration:g}=m;this.calculatedDuration=g,this.resolvedDuration=g+a,this.totalDuration=this.resolvedDuration*(o+1)-a,this.generator=m}updateTime(n){const i=Math.round(n-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=i}tick(n,i=!1){const{generator:o,totalDuration:a,mixKeyframes:u,mirroredGenerator:c,resolvedDuration:d,calculatedDuration:p}=this;if(this.startTime===null)return o.next(0);const{delay:m=0,keyframes:g,repeat:x,repeatType:w,repeatDelay:S,type:k,onUpdate:T,finalKeyframe:E}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,n):this.speed<0&&(this.startTime=Math.min(n-a/this.speed,this.startTime)),i?this.currentTime=n:this.updateTime(n);const P=this.currentTime-m*(this.playbackSpeed>=0?1:-1),$=this.playbackSpeed>=0?P<0:P>a;this.currentTime=Math.max(P,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=a);let D=this.currentTime,F=o;if(x){const H=Math.min(this.currentTime,a)/d;let Q=Math.floor(H),ae=H%1;!ae&&H>=1&&(ae=1),ae===1&&Q--,Q=Math.min(Q,x+1),!!(Q%2)&&(w==="reverse"?(ae=1-ae,S&&(ae-=S/d)):w==="mirror"&&(F=c)),D=Dn(0,1,ae)*d}const O=$?{done:!1,value:g[0]}:F.next(D);u&&(O.value=u(O.value));let{done:V}=O;!$&&p!==null&&(V=this.playbackSpeed>=0?this.currentTime>=a:this.currentTime<=0);const W=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&V);return W&&k!==Td&&(O.value=Af(g,this.options,E,this.speed)),T&&T(O.value),W&&this.finish(),O}then(n,i){return this.finished.then(n,i)}get duration(){return gn(this.calculatedDuration)}get time(){return gn(this.currentTime)}set time(n){n=mn(n),this.currentTime=n,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=n:this.driver&&(this.startTime=this.driver.now()-n/this.playbackSpeed)}get speed(){return this.playbackSpeed}set speed(n){this.updateTime(Tt.now());const i=this.playbackSpeed!==n;this.playbackSpeed=n,i&&(this.time=gn(this.currentTime))}play(){if(this.isStopped)return;const{driver:n=Kk,onPlay:i,startTime:o}=this.options;this.driver||(this.driver=n(u=>this.tick(u))),i&&i();const a=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=a):this.holdTime!==null?this.startTime=a-this.holdTime:this.startTime||(this.startTime=o??a),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(Tt.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:n}=this.options;n&&n()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown()}teardown(){this.notifyFinished(),this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(n){return this.startTime=0,this.tick(n,!0)}attachTimeline(n){return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),n.observe(this)}}function cE(e){for(let n=1;n<e.length;n++)e[n]??(e[n]=e[n-1])}const Lr=e=>e*180/Math.PI,Pd=e=>{const n=Lr(Math.atan2(e[1],e[0]));return jd(n)},dE={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:Pd,rotateZ:Pd,skewX:e=>Lr(Math.atan(e[1])),skewY:e=>Lr(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},jd=e=>(e=e%360,e<0&&(e+=360),e),Rg=Pd,Ag=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),Dg=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),fE={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:Ag,scaleY:Dg,scale:e=>(Ag(e)+Dg(e))/2,rotateX:e=>jd(Lr(Math.atan2(e[6],e[5]))),rotateY:e=>jd(Lr(Math.atan2(-e[2],e[0]))),rotateZ:Rg,rotate:Rg,skewX:e=>Lr(Math.atan(e[4])),skewY:e=>Lr(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function Ig(e){return e.includes("scale")?1:0}function Rd(e,n){if(!e||e==="none")return Ig(n);const i=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let o,a;if(i)o=fE,a=i;else{const d=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);o=dE,a=d}if(!a)return Ig(n);const u=o[n],c=a[1].split(",").map(hE);return typeof u=="function"?u(c):c[u]}const pE=(e,n)=>{const{transform:i="none"}=getComputedStyle(e);return Rd(i,n)};function hE(e){return parseFloat(e.trim())}const Vi=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],zi=new Set(Vi),Lg=e=>e===Ni||e===le,mE=new Set(["x","y","z"]),gE=Vi.filter(e=>!mE.has(e));function yE(e){const n=[];return gE.forEach(i=>{const o=e.getValue(i);o!==void 0&&(n.push([i,o.get()]),o.set(i.startsWith("scale")?1:0))}),n}const Li={width:({x:e},{paddingLeft:n="0",paddingRight:i="0"})=>e.max-e.min-parseFloat(n)-parseFloat(i),height:({y:e},{paddingTop:n="0",paddingBottom:i="0"})=>e.max-e.min-parseFloat(n)-parseFloat(i),top:(e,{top:n})=>parseFloat(n),left:(e,{left:n})=>parseFloat(n),bottom:({y:e},{top:n})=>parseFloat(n)+(e.max-e.min),right:({x:e},{left:n})=>parseFloat(n)+(e.max-e.min),x:(e,{transform:n})=>Rd(n,"x"),y:(e,{transform:n})=>Rd(n,"y")};Li.translateX=Li.x;Li.translateY=Li.y;const Br=new Set;let Ad=!1,Dd=!1,Id=!1;function Fx(){if(Dd){const e=Array.from(Br).filter(o=>o.needsMeasurement),n=new Set(e.map(o=>o.element)),i=new Map;n.forEach(o=>{const a=yE(o);a.length&&(i.set(o,a),o.render())}),e.forEach(o=>o.measureInitialState()),n.forEach(o=>{o.render();const a=i.get(o);a&&a.forEach(([u,c])=>{var d;(d=o.getValue(u))==null||d.set(c)})}),e.forEach(o=>o.measureEndState()),e.forEach(o=>{o.suspendedScrollY!==void 0&&window.scrollTo(0,o.suspendedScrollY)})}Dd=!1,Ad=!1,Br.forEach(e=>e.complete(Id)),Br.clear()}function Nx(){Br.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(Dd=!0)})}function xE(){Id=!0,Nx(),Fx(),Id=!1}class If{constructor(n,i,o,a,u,c=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...n],this.onComplete=i,this.name=o,this.motionValue=a,this.element=u,this.isAsync=c}scheduleResolve(){this.isScheduled=!0,this.isAsync?(Br.add(this),Ad||(Ad=!0,Be.read(Nx),Be.resolveKeyframes(Fx))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:n,name:i,element:o,motionValue:a}=this;if(n[0]===null){const u=a==null?void 0:a.get(),c=n[n.length-1];if(u!==void 0)n[0]=u;else if(o&&i){const d=o.readValue(i,c);d!=null&&(n[0]=d)}n[0]===void 0&&(n[0]=c),a&&u===void 0&&a.set(n[0])}cE(n)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(n=!1){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,n),Br.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,Br.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const vE=e=>e.startsWith("--");function wE(e,n,i){vE(n)?e.style.setProperty(n,i):e.style[n]=i}const SE=wf(()=>window.ScrollTimeline!==void 0),bE={};function kE(e,n){const i=wf(e);return()=>bE[n]??i()}const Vx=kE(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Oo=([e,n,i,o])=>`cubic-bezier(${e}, ${n}, ${i}, ${o})`,$g={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Oo([0,.65,.55,1]),circOut:Oo([.55,0,1,.45]),backIn:Oo([.31,.01,.66,-.59]),backOut:Oo([.33,1.53,.69,.99])};function zx(e,n){if(e)return typeof e=="function"?Vx()?Mx(e,n):"ease-out":Cx(e)?Oo(e):Array.isArray(e)?e.map(i=>zx(i,n)||$g.easeOut):$g[e]}function EE(e,n,i,{delay:o=0,duration:a=300,repeat:u=0,repeatType:c="loop",ease:d="easeOut",times:p}={},m=void 0){const g={[n]:i};p&&(g.offset=p);const x=zx(d,a);Array.isArray(x)&&(g.easing=x);const w={delay:o,duration:a,easing:Array.isArray(x)?"linear":x,fill:"both",iterations:u+1,direction:c==="reverse"?"alternate":"normal"};return m&&(w.pseudoElement=m),e.animate(g,w)}function Ux(e){return typeof e=="function"&&"applyToOptions"in e}function CE({type:e,...n}){return Ux(e)&&Vx()?e.applyToOptions(n):(n.duration??(n.duration=300),n.ease??(n.ease="easeOut"),n)}class TE extends Df{constructor(n){if(super(),this.finishedTime=null,this.isStopped=!1,!n)return;const{element:i,name:o,keyframes:a,pseudoElement:u,allowFlatten:c=!1,finalKeyframe:d,onComplete:p}=n;this.isPseudoElement=!!u,this.allowFlatten=c,this.options=n,vf(typeof n.type!="string");const m=CE(n);this.animation=EE(i,o,a,m,u),m.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!u){const g=Af(a,this.options,d,this.speed);this.updateMotionValue?this.updateMotionValue(g):wE(i,o,g),this.animation.cancel()}p==null||p(),this.notifyFinished()},this.animation.oncancel=()=>this.notifyFinished()}play(){this.isStopped||(this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var n,i;(i=(n=this.animation).finish)==null||i.call(n)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:n}=this;n==="idle"||n==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var n,i;this.isPseudoElement||(i=(n=this.animation).commitStyles)==null||i.call(n)}get duration(){var i,o;const n=((o=(i=this.animation.effect)==null?void 0:i.getComputedTiming)==null?void 0:o.call(i).duration)||0;return gn(Number(n))}get time(){return gn(Number(this.animation.currentTime)||0)}set time(n){this.finishedTime=null,this.animation.currentTime=mn(n)}get speed(){return this.animation.playbackRate}set speed(n){n<0&&(this.finishedTime=null),this.animation.playbackRate=n}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return Number(this.animation.startTime)}set startTime(n){this.animation.startTime=n}attachTimeline({timeline:n,observe:i}){var o;return this.allowFlatten&&((o=this.animation.effect)==null||o.updateTiming({easing:"linear"})),this.animation.onfinish=null,n&&SE()?(this.animation.timeline=n,Ut):i(this)}}const Wx={anticipate:Sx,backInOut:wx,circInOut:kx};function PE(e){return e in Wx}function jE(e){typeof e.ease=="string"&&PE(e.ease)&&(e.ease=Wx[e.ease])}const Mg=10;class RE extends TE{constructor(n){jE(n),Bx(n),super(n),n.startTime&&(this.startTime=n.startTime),this.options=n}updateMotionValue(n){const{motionValue:i,onUpdate:o,onComplete:a,element:u,...c}=this.options;if(!i)return;if(n!==void 0){i.set(n);return}const d=new Ox({...c,autoplay:!1}),p=mn(this.finishedTime??this.time);i.setWithVelocity(d.sample(p-Mg).value,d.sample(p).value,Mg),d.stop()}}const _g=(e,n)=>n==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(cr.test(e)||e==="0")&&!e.startsWith("url("));function AE(e){const n=e[0];if(e.length===1)return!0;for(let i=0;i<e.length;i++)if(e[i]!==n)return!0}function DE(e,n,i,o){const a=e[0];if(a===null)return!1;if(n==="display"||n==="visibility")return!0;const u=e[e.length-1],c=_g(a,n),d=_g(u,n);return!c||!d?!1:AE(e)||(i==="spring"||Ux(i))&&o}const IE=new Set(["opacity","clipPath","filter","transform"]),LE=wf(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function $E(e){const{motionValue:n,name:i,repeatDelay:o,repeatType:a,damping:u,type:c}=e;if(!n||!n.owner||!(n.owner.current instanceof HTMLElement))return!1;const{onUpdate:d,transformTemplate:p}=n.owner.getProps();return LE()&&i&&IE.has(i)&&(i!=="transform"||!p)&&!d&&!o&&a!=="mirror"&&u!==0&&c!=="inertia"}const ME=40;class _E extends Df{constructor({autoplay:n=!0,delay:i=0,type:o="keyframes",repeat:a=0,repeatDelay:u=0,repeatType:c="loop",keyframes:d,name:p,motionValue:m,element:g,...x}){var k;super(),this.stop=()=>{var T,E;this._animation?(this._animation.stop(),(T=this.stopTimeline)==null||T.call(this)):(E=this.keyframeResolver)==null||E.cancel()},this.createdAt=Tt.now();const w={autoplay:n,delay:i,type:o,repeat:a,repeatDelay:u,repeatType:c,name:p,motionValue:m,element:g,...x},S=(g==null?void 0:g.KeyframeResolver)||If;this.keyframeResolver=new S(d,(T,E,P)=>this.onKeyframesResolved(T,E,w,!P),p,m,g),(k=this.keyframeResolver)==null||k.scheduleResolve()}onKeyframesResolved(n,i,o,a){this.keyframeResolver=void 0;const{name:u,type:c,velocity:d,delay:p,isHandoff:m,onUpdate:g}=o;this.resolvedAt=Tt.now(),DE(n,u,c,d)||((In.instantAnimations||!p)&&(g==null||g(Af(n,o,i))),n[0]=n[n.length-1],o.duration=0,o.repeat=0);const w={startTime:a?this.resolvedAt?this.resolvedAt-this.createdAt>ME?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:i,...o,keyframes:n},S=!m&&$E(w)?new RE({...w,element:w.motionValue.owner.current}):new Ox(w);S.finished.then(()=>this.notifyFinished()).catch(Ut),this.pendingTimeline&&(this.stopTimeline=S.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=S}get finished(){return this._animation?this.animation.finished:this._finished}then(n,i){return this.finished.finally(n).then(()=>{})}get animation(){return this._animation||xE(),this._animation}get duration(){return this.animation.duration}get time(){return this.animation.time}set time(n){this.animation.time=n}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(n){this.animation.speed=n}get startTime(){return this.animation.startTime}attachTimeline(n){return this._animation?this.stopTimeline=this.animation.attachTimeline(n):this.pendingTimeline=n,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this.animation.cancel()}}const BE=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function OE(e){const n=BE.exec(e);if(!n)return[,];const[,i,o,a]=n;return[`--${i??o}`,a]}function Hx(e,n,i=1){const[o,a]=OE(e);if(!o)return;const u=window.getComputedStyle(n).getPropertyValue(o);if(u){const c=u.trim();return px(c)?parseFloat(c):c}return Cf(a)?Hx(a,n,i+1):a}function Lf(e,n){return(e==null?void 0:e[n])??(e==null?void 0:e.default)??e}const Kx=new Set(["width","height","top","left","right","bottom",...Vi]),FE={test:e=>e==="auto",parse:e=>e},Gx=e=>n=>n.test(e),Yx=[Ni,le,yn,ir,Ak,Rk,FE],Bg=e=>Yx.find(Gx(e));function NE(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||hx(e):!0}const VE=new Set(["brightness","contrast","saturate","opacity"]);function zE(e){const[n,i]=e.slice(0,-1).split("(");if(n==="drop-shadow")return e;const[o]=i.match(Tf)||[];if(!o)return e;const a=i.replace(o,"");let u=VE.has(n)?1:0;return o!==i&&(u*=100),n+"("+u+a+")"}const UE=/\b([a-z-]*)\(.*?\)/gu,Ld={...cr,getAnimatableNone:e=>{const n=e.match(UE);return n?n.map(zE).join(" "):e}},Og={...Ni,transform:Math.round},WE={rotate:ir,rotateX:ir,rotateY:ir,rotateZ:ir,scale:Aa,scaleX:Aa,scaleY:Aa,scaleZ:Aa,skew:ir,skewX:ir,skewY:ir,distance:le,translateX:le,translateY:le,translateZ:le,x:le,y:le,z:le,perspective:le,transformPerspective:le,opacity:Jo,originX:kg,originY:kg,originZ:le},$f={borderWidth:le,borderTopWidth:le,borderRightWidth:le,borderBottomWidth:le,borderLeftWidth:le,borderRadius:le,radius:le,borderTopLeftRadius:le,borderTopRightRadius:le,borderBottomRightRadius:le,borderBottomLeftRadius:le,width:le,maxWidth:le,height:le,maxHeight:le,top:le,right:le,bottom:le,left:le,padding:le,paddingTop:le,paddingRight:le,paddingBottom:le,paddingLeft:le,margin:le,marginTop:le,marginRight:le,marginBottom:le,marginLeft:le,backgroundPositionX:le,backgroundPositionY:le,...WE,zIndex:Og,fillOpacity:Jo,strokeOpacity:Jo,numOctaves:Og},HE={...$f,color:ht,backgroundColor:ht,outlineColor:ht,fill:ht,stroke:ht,borderColor:ht,borderTopColor:ht,borderRightColor:ht,borderBottomColor:ht,borderLeftColor:ht,filter:Ld,WebkitFilter:Ld},qx=e=>HE[e];function Xx(e,n){let i=qx(e);return i!==Ld&&(i=cr),i.getAnimatableNone?i.getAnimatableNone(n):void 0}const KE=new Set(["auto","none","0"]);function GE(e,n,i){let o=0,a;for(;o<e.length&&!a;){const u=e[o];typeof u=="string"&&!KE.has(u)&&Zo(u).values.length&&(a=e[o]),o++}if(a&&i)for(const u of n)e[u]=Xx(i,a)}class YE extends If{constructor(n,i,o,a,u){super(n,i,o,a,u,!0)}readKeyframes(){const{unresolvedKeyframes:n,element:i,name:o}=this;if(!i||!i.current)return;super.readKeyframes();for(let p=0;p<n.length;p++){let m=n[p];if(typeof m=="string"&&(m=m.trim(),Cf(m))){const g=Hx(m,i.current);g!==void 0&&(n[p]=g),p===n.length-1&&(this.finalKeyframe=m)}}if(this.resolveNoneKeyframes(),!Kx.has(o)||n.length!==2)return;const[a,u]=n,c=Bg(a),d=Bg(u);if(c!==d)if(Lg(c)&&Lg(d))for(let p=0;p<n.length;p++){const m=n[p];typeof m=="string"&&(n[p]=parseFloat(m))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:n,name:i}=this,o=[];for(let a=0;a<n.length;a++)(n[a]===null||NE(n[a]))&&o.push(a);o.length&&GE(n,o,i)}measureInitialState(){const{element:n,unresolvedKeyframes:i,name:o}=this;if(!n||!n.current)return;o==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Li[o](n.measureViewportBox(),window.getComputedStyle(n.current)),i[0]=this.measuredOrigin;const a=i[i.length-1];a!==void 0&&n.getValue(o,a).jump(a,!1)}measureEndState(){var d;const{element:n,name:i,unresolvedKeyframes:o}=this;if(!n||!n.current)return;const a=n.getValue(i);a&&a.jump(this.measuredOrigin,!1);const u=o.length-1,c=o[u];o[u]=Li[i](n.measureViewportBox(),window.getComputedStyle(n.current)),c!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=c),(d=this.removedTransforms)!=null&&d.length&&this.removedTransforms.forEach(([p,m])=>{n.getValue(p).set(m)}),this.resolveNoneKeyframes()}}function qE(e,n,i){if(e instanceof EventTarget)return[e];if(typeof e=="string"){let o=document;const a=(i==null?void 0:i[e])??o.querySelectorAll(e);return a?Array.from(a):[]}return Array.from(e)}const{schedule:Mf}=Tx(queueMicrotask,!1),en={x:!1,y:!1};function Qx(){return en.x||en.y}function XE(e){return e==="x"||e==="y"?en[e]?null:(en[e]=!0,()=>{en[e]=!1}):en.x||en.y?null:(en.x=en.y=!0,()=>{en.x=en.y=!1})}function Jx(e,n){const i=qE(e),o=new AbortController,a={passive:!0,...n,signal:o.signal};return[i,a,()=>o.abort()]}function Fg(e){return!(e.pointerType==="touch"||Qx())}function QE(e,n,i={}){const[o,a,u]=Jx(e,i),c=d=>{if(!Fg(d))return;const{target:p}=d,m=n(p,d);if(typeof m!="function"||!p)return;const g=x=>{Fg(x)&&(m(x),p.removeEventListener("pointerleave",g))};p.addEventListener("pointerleave",g,a)};return o.forEach(d=>{d.addEventListener("pointerenter",c,a)}),u}const Zx=(e,n)=>n?e===n?!0:Zx(e,n.parentElement):!1,_f=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1,JE=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function ZE(e){return JE.has(e.tagName)||e.tabIndex!==-1}const Fo=new WeakSet;function Ng(e){return n=>{n.key==="Enter"&&e(n)}}function Kc(e,n){e.dispatchEvent(new PointerEvent("pointer"+n,{isPrimary:!0,bubbles:!0}))}const eC=(e,n)=>{const i=e.currentTarget;if(!i)return;const o=Ng(()=>{if(Fo.has(i))return;Kc(i,"down");const a=Ng(()=>{Kc(i,"up")}),u=()=>Kc(i,"cancel");i.addEventListener("keyup",a,n),i.addEventListener("blur",u,n)});i.addEventListener("keydown",o,n),i.addEventListener("blur",()=>i.removeEventListener("keydown",o),n)};function Vg(e){return _f(e)&&!Qx()}function tC(e,n,i={}){const[o,a,u]=Jx(e,i),c=d=>{const p=d.currentTarget;if(!Vg(d)||Fo.has(p))return;Fo.add(p);const m=n(p,d),g=(S,k)=>{window.removeEventListener("pointerup",x),window.removeEventListener("pointercancel",w),!(!Vg(S)||!Fo.has(p))&&(Fo.delete(p),typeof m=="function"&&m(S,{success:k}))},x=S=>{g(S,p===window||p===document||i.useGlobalTarget||Zx(p,S.target))},w=S=>{g(S,!1)};window.addEventListener("pointerup",x,a),window.addEventListener("pointercancel",w,a)};return o.forEach(d=>{(i.useGlobalTarget?window:d).addEventListener("pointerdown",c,a),d instanceof HTMLElement&&(d.addEventListener("focus",m=>eC(m,a)),!ZE(d)&&!d.hasAttribute("tabindex")&&(d.tabIndex=0))}),u}const zg=30,nC=e=>!isNaN(parseFloat(e));class rC{constructor(n,i={}){this.version="__VERSION__",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(o,a=!0)=>{var c,d;const u=Tt.now();this.updatedAt!==u&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(o),this.current!==this.prev&&((c=this.events.change)==null||c.notify(this.current)),a&&((d=this.events.renderRequest)==null||d.notify(this.current))},this.hasAnimated=!1,this.setCurrent(n),this.owner=i.owner}setCurrent(n){this.current=n,this.updatedAt=Tt.now(),this.canTrackVelocity===null&&n!==void 0&&(this.canTrackVelocity=nC(this.current))}setPrevFrameValue(n=this.current){this.prevFrameValue=n,this.prevUpdatedAt=this.updatedAt}onChange(n){return this.on("change",n)}on(n,i){this.events[n]||(this.events[n]=new Sf);const o=this.events[n].add(i);return n==="change"?()=>{o(),Be.read(()=>{this.events.change.getSize()||this.stop()})}:o}clearListeners(){for(const n in this.events)this.events[n].clear()}attach(n,i){this.passiveEffect=n,this.stopPassiveEffect=i}set(n,i=!0){!i||!this.passiveEffect?this.updateAndNotify(n,i):this.passiveEffect(n,this.updateAndNotify)}setWithVelocity(n,i,o){this.set(i),this.prev=void 0,this.prevFrameValue=n,this.prevUpdatedAt=this.updatedAt-o}jump(n,i=!0){this.updateAndNotify(n),this.prev=n,this.prevUpdatedAt=this.prevFrameValue=void 0,i&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const n=Tt.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||n-this.updatedAt>zg)return 0;const i=Math.min(this.updatedAt-this.prevUpdatedAt,zg);return mx(parseFloat(this.current)-parseFloat(this.prevFrameValue),i)}start(n){return this.stop(),new Promise(i=>{this.hasAnimated=!0,this.animation=n(i),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var n;(n=this.events.destroy)==null||n.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function es(e,n){return new rC(e,n)}const iC=[...Yx,ht,cr],oC=e=>iC.find(Gx(e)),ev=(e,n)=>n&&typeof e=="number"?n.transform(e):e,tv=b.createContext({strict:!1}),Ug={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},$i={};for(const e in Ug)$i[e]={isEnabled:n=>Ug[e].some(i=>!!n[i])};function sC(e){for(const n in e)$i[n]={...$i[n],...e[n]}}const aC=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function dl(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||aC.has(e)}let nv=e=>!dl(e);function lC(e){e&&(nv=n=>n.startsWith("on")?!dl(n):e(n))}try{lC(require("@emotion/is-prop-valid").default)}catch{}function uC(e,n,i){const o={};for(const a in e)a==="values"&&typeof e.values=="object"||(nv(a)||i===!0&&dl(a)||!n&&!dl(a)||e.draggable&&a.startsWith("onDrag"))&&(o[a]=e[a]);return o}function cC(e){if(typeof Proxy>"u")return e;const n=new Map,i=(...o)=>e(...o);return new Proxy(i,{get:(o,a)=>a==="create"?e:(n.has(a)||n.set(a,e(a)),n.get(a))})}const Cl=b.createContext({});function Tl(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}function ts(e){return typeof e=="string"||Array.isArray(e)}const Bf=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Of=["initial",...Bf];function Pl(e){return Tl(e.animate)||Of.some(n=>ts(e[n]))}function rv(e){return!!(Pl(e)||e.variants)}function dC(e,n){if(Pl(e)){const{initial:i,animate:o}=e;return{initial:i===!1||ts(i)?i:void 0,animate:ts(o)?o:void 0}}return e.inherit!==!1?n:{}}function fC(e){const{initial:n,animate:i}=dC(e,b.useContext(Cl));return b.useMemo(()=>({initial:n,animate:i}),[Wg(n),Wg(i)])}function Wg(e){return Array.isArray(e)?e.join(" "):e}const pC=Symbol.for("motionComponentSymbol");function Ci(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function hC(e,n,i){return b.useCallback(o=>{o&&e.onMount&&e.onMount(o),n&&(o?n.mount(o):n.unmount()),i&&(typeof i=="function"?i(o):Ci(i)&&(i.current=o))},[n])}const Ff=e=>e.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),mC="framerAppearId",iv="data-"+Ff(mC),ov=b.createContext({});function gC(e,n,i,o,a){var T,E;const{visualElement:u}=b.useContext(Cl),c=b.useContext(tv),d=b.useContext(El),p=b.useContext(gf).reducedMotion,m=b.useRef(null);o=o||c.renderer,!m.current&&o&&(m.current=o(e,{visualState:n,parent:u,props:i,presenceContext:d,blockInitialAnimation:d?d.initial===!1:!1,reducedMotionConfig:p}));const g=m.current,x=b.useContext(ov);g&&!g.projection&&a&&(g.type==="html"||g.type==="svg")&&yC(m.current,i,a,x);const w=b.useRef(!1);b.useInsertionEffect(()=>{g&&w.current&&g.update(i,d)});const S=i[iv],k=b.useRef(!!S&&!((T=window.MotionHandoffIsComplete)!=null&&T.call(window,S))&&((E=window.MotionHasOptimisedAnimation)==null?void 0:E.call(window,S)));return dx(()=>{g&&(w.current=!0,window.MotionIsMounted=!0,g.updateFeatures(),Mf.render(g.render),k.current&&g.animationState&&g.animationState.animateChanges())}),b.useEffect(()=>{g&&(!k.current&&g.animationState&&g.animationState.animateChanges(),k.current&&(queueMicrotask(()=>{var P;(P=window.MotionHandoffMarkAsComplete)==null||P.call(window,S)}),k.current=!1))}),g}function yC(e,n,i,o){const{layoutId:a,layout:u,drag:c,dragConstraints:d,layoutScroll:p,layoutRoot:m,layoutCrossfade:g}=n;e.projection=new i(e.latestValues,n["data-framer-portal-id"]?void 0:sv(e.parent)),e.projection.setOptions({layoutId:a,layout:u,alwaysMeasureLayout:!!c||d&&Ci(d),visualElement:e,animationType:typeof u=="string"?u:"both",initialPromotionConfig:o,crossfade:g,layoutScroll:p,layoutRoot:m})}function sv(e){if(e)return e.options.allowProjection!==!1?e.projection:sv(e.parent)}function xC({preloadedFeatures:e,createVisualElement:n,useRender:i,useVisualState:o,Component:a}){e&&sC(e);function u(d,p){let m;const g={...b.useContext(gf),...d,layoutId:vC(d)},{isStatic:x}=g,w=fC(d),S=o(d,x);if(!x&&mf){wC();const k=SC(g);m=k.MeasureLayout,w.visualElement=gC(a,S,g,n,k.ProjectionNode)}return y.jsxs(Cl.Provider,{value:w,children:[m&&w.visualElement?y.jsx(m,{visualElement:w.visualElement,...g}):null,i(a,d,hC(S,w.visualElement,p),S,x,w.visualElement)]})}u.displayName=`motion.${typeof a=="string"?a:`create(${a.displayName??a.name??""})`}`;const c=b.forwardRef(u);return c[pC]=a,c}function vC({layoutId:e}){const n=b.useContext(pf).id;return n&&e!==void 0?n+"-"+e:e}function wC(e,n){b.useContext(tv).strict}function SC(e){const{drag:n,layout:i}=$i;if(!n&&!i)return{};const o={...n,...i};return{MeasureLayout:n!=null&&n.isEnabled(e)||i!=null&&i.isEnabled(e)?o.MeasureLayout:void 0,ProjectionNode:o.ProjectionNode}}const ns={};function bC(e){for(const n in e)ns[n]=e[n],Ef(n)&&(ns[n].isCSSVariable=!0)}function av(e,{layout:n,layoutId:i}){return zi.has(e)||e.startsWith("origin")||(n||i!==void 0)&&(!!ns[e]||e==="opacity")}const gt=e=>!!(e&&e.getVelocity),kC={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},EC=Vi.length;function CC(e,n,i){let o="",a=!0;for(let u=0;u<EC;u++){const c=Vi[u],d=e[c];if(d===void 0)continue;let p=!0;if(typeof d=="number"?p=d===(c.startsWith("scale")?1:0):p=parseFloat(d)===0,!p||i){const m=ev(d,$f[c]);if(!p){a=!1;const g=kC[c]||c;o+=`${g}(${m}) `}i&&(n[c]=m)}}return o=o.trim(),i?o=i(n,a?"":o):a&&(o="none"),o}function Nf(e,n,i){const{style:o,vars:a,transformOrigin:u}=e;let c=!1,d=!1;for(const p in n){const m=n[p];if(zi.has(p)){c=!0;continue}else if(Ef(p)){a[p]=m;continue}else{const g=ev(m,$f[p]);p.startsWith("origin")?(d=!0,u[p]=g):o[p]=g}}if(n.transform||(c||i?o.transform=CC(n,e.transform,i):o.transform&&(o.transform="none")),d){const{originX:p="50%",originY:m="50%",originZ:g=0}=u;o.transformOrigin=`${p} ${m} ${g}`}}const Vf=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function lv(e,n,i){for(const o in n)!gt(n[o])&&!av(o,i)&&(e[o]=n[o])}function TC({transformTemplate:e},n){return b.useMemo(()=>{const i=Vf();return Nf(i,n,e),Object.assign({},i.vars,i.style)},[n])}function PC(e,n){const i=e.style||{},o={};return lv(o,i,e),Object.assign(o,TC(e,n)),o}function jC(e,n){const i={},o=PC(e,n);return e.drag&&e.dragListener!==!1&&(i.draggable=!1,o.userSelect=o.WebkitUserSelect=o.WebkitTouchCallout="none",o.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(i.tabIndex=0),i.style=o,i}const RC=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function zf(e){return typeof e!="string"||e.includes("-")?!1:!!(RC.indexOf(e)>-1||/[A-Z]/u.test(e))}const AC={offset:"stroke-dashoffset",array:"stroke-dasharray"},DC={offset:"strokeDashoffset",array:"strokeDasharray"};function IC(e,n,i=1,o=0,a=!0){e.pathLength=1;const u=a?AC:DC;e[u.offset]=le.transform(-o);const c=le.transform(n),d=le.transform(i);e[u.array]=`${c} ${d}`}function uv(e,{attrX:n,attrY:i,attrScale:o,pathLength:a,pathSpacing:u=1,pathOffset:c=0,...d},p,m){if(Nf(e,d,m),p){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:g,style:x}=e;g.transform&&(x.transform=g.transform,delete g.transform),(x.transform||g.transformOrigin)&&(x.transformOrigin=g.transformOrigin??"50% 50%",delete g.transformOrigin),x.transform&&(x.transformBox="fill-box",delete g.transformBox),n!==void 0&&(g.x=n),i!==void 0&&(g.y=i),o!==void 0&&(g.scale=o),a!==void 0&&IC(g,a,u,c,!1)}const cv=()=>({...Vf(),attrs:{}}),dv=e=>typeof e=="string"&&e.toLowerCase()==="svg";function LC(e,n,i,o){const a=b.useMemo(()=>{const u=cv();return uv(u,n,dv(o),e.transformTemplate),{...u.attrs,style:{...u.style}}},[n]);if(e.style){const u={};lv(u,e.style,e),a.style={...u,...a.style}}return a}function $C(e=!1){return(i,o,a,{latestValues:u},c)=>{const p=(zf(i)?LC:jC)(o,u,c,i),m=uC(o,typeof i=="string",e),g=i!==b.Fragment?{...m,...p,ref:a}:{},{children:x}=o,w=b.useMemo(()=>gt(x)?x.get():x,[x]);return b.createElement(i,{...g,children:w})}}function Hg(e){const n=[{},{}];return e==null||e.values.forEach((i,o)=>{n[0][o]=i.get(),n[1][o]=i.getVelocity()}),n}function Uf(e,n,i,o){if(typeof n=="function"){const[a,u]=Hg(o);n=n(i!==void 0?i:e.custom,a,u)}if(typeof n=="string"&&(n=e.variants&&e.variants[n]),typeof n=="function"){const[a,u]=Hg(o);n=n(i!==void 0?i:e.custom,a,u)}return n}function Xa(e){return gt(e)?e.get():e}function MC({scrapeMotionValuesFromProps:e,createRenderState:n},i,o,a){return{latestValues:_C(i,o,a,e),renderState:n()}}const fv=e=>(n,i)=>{const o=b.useContext(Cl),a=b.useContext(El),u=()=>MC(e,n,o,a);return i?u():hf(u)};function _C(e,n,i,o){const a={},u=o(e,{});for(const w in u)a[w]=Xa(u[w]);let{initial:c,animate:d}=e;const p=Pl(e),m=rv(e);n&&m&&!p&&e.inherit!==!1&&(c===void 0&&(c=n.initial),d===void 0&&(d=n.animate));let g=i?i.initial===!1:!1;g=g||c===!1;const x=g?d:c;if(x&&typeof x!="boolean"&&!Tl(x)){const w=Array.isArray(x)?x:[x];for(let S=0;S<w.length;S++){const k=Uf(e,w[S]);if(k){const{transitionEnd:T,transition:E,...P}=k;for(const $ in P){let D=P[$];if(Array.isArray(D)){const F=g?D.length-1:0;D=D[F]}D!==null&&(a[$]=D)}for(const $ in T)a[$]=T[$]}}}return a}function Wf(e,n,i){var u;const{style:o}=e,a={};for(const c in o)(gt(o[c])||n.style&&gt(n.style[c])||av(c,e)||((u=i==null?void 0:i.getValue(c))==null?void 0:u.liveStyle)!==void 0)&&(a[c]=o[c]);return a}const BC={useVisualState:fv({scrapeMotionValuesFromProps:Wf,createRenderState:Vf})};function pv(e,n,i){const o=Wf(e,n,i);for(const a in e)if(gt(e[a])||gt(n[a])){const u=Vi.indexOf(a)!==-1?"attr"+a.charAt(0).toUpperCase()+a.substring(1):a;o[u]=e[a]}return o}const OC={useVisualState:fv({scrapeMotionValuesFromProps:pv,createRenderState:cv})};function FC(e,n){return function(o,{forwardMotionProps:a}={forwardMotionProps:!1}){const c={...zf(o)?OC:BC,preloadedFeatures:e,useRender:$C(a),createVisualElement:n,Component:o};return xC(c)}}function rs(e,n,i){const o=e.getProps();return Uf(o,n,i!==void 0?i:o.custom,e)}const $d=e=>Array.isArray(e);function NC(e,n,i){e.hasValue(n)?e.getValue(n).set(i):e.addValue(n,es(i))}function VC(e){return $d(e)?e[e.length-1]||0:e}function zC(e,n){const i=rs(e,n);let{transitionEnd:o={},transition:a={},...u}=i||{};u={...u,...o};for(const c in u){const d=VC(u[c]);NC(e,c,d)}}function UC(e){return!!(gt(e)&&e.add)}function Md(e,n){const i=e.getValue("willChange");if(UC(i))return i.add(n);if(!i&&In.WillChange){const o=new In.WillChange("auto");e.addValue("willChange",o),o.add(n)}}function hv(e){return e.props[iv]}const WC=e=>e!==null;function HC(e,{repeat:n,repeatType:i="loop"},o){const a=e.filter(WC),u=n&&i!=="loop"&&n%2===1?0:a.length-1;return a[u]}const KC={type:"spring",stiffness:500,damping:25,restSpeed:10},GC=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),YC={type:"keyframes",duration:.8},qC={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},XC=(e,{keyframes:n})=>n.length>2?YC:zi.has(e)?e.startsWith("scale")?GC(n[1]):KC:qC;function QC({when:e,delay:n,delayChildren:i,staggerChildren:o,staggerDirection:a,repeat:u,repeatType:c,repeatDelay:d,from:p,elapsed:m,...g}){return!!Object.keys(g).length}const Hf=(e,n,i,o={},a,u)=>c=>{const d=Lf(o,e)||{},p=d.delay||o.delay||0;let{elapsed:m=0}=o;m=m-mn(p);const g={keyframes:Array.isArray(i)?i:[null,i],ease:"easeOut",velocity:n.getVelocity(),...d,delay:-m,onUpdate:w=>{n.set(w),d.onUpdate&&d.onUpdate(w)},onComplete:()=>{c(),d.onComplete&&d.onComplete()},name:e,motionValue:n,element:u?void 0:a};QC(d)||Object.assign(g,XC(e,g)),g.duration&&(g.duration=mn(g.duration)),g.repeatDelay&&(g.repeatDelay=mn(g.repeatDelay)),g.from!==void 0&&(g.keyframes[0]=g.from);let x=!1;if((g.type===!1||g.duration===0&&!g.repeatDelay)&&(g.duration=0,g.delay===0&&(x=!0)),(In.instantAnimations||In.skipAnimations)&&(x=!0,g.duration=0,g.delay=0),g.allowFlatten=!d.type&&!d.ease,x&&!u&&n.get()!==void 0){const w=HC(g.keyframes,d);if(w!==void 0){Be.update(()=>{g.onUpdate(w),g.onComplete()});return}}return new _E(g)};function JC({protectedKeys:e,needsAnimating:n},i){const o=e.hasOwnProperty(i)&&n[i]!==!0;return n[i]=!1,o}function mv(e,n,{delay:i=0,transitionOverride:o,type:a}={}){let{transition:u=e.getDefaultTransition(),transitionEnd:c,...d}=n;o&&(u=o);const p=[],m=a&&e.animationState&&e.animationState.getState()[a];for(const g in d){const x=e.getValue(g,e.latestValues[g]??null),w=d[g];if(w===void 0||m&&JC(m,g))continue;const S={delay:i,...Lf(u||{},g)},k=x.get();if(k!==void 0&&!x.isAnimating&&!Array.isArray(w)&&w===k&&!S.velocity)continue;let T=!1;if(window.MotionHandoffAnimation){const P=hv(e);if(P){const $=window.MotionHandoffAnimation(P,g,Be);$!==null&&(S.startTime=$,T=!0)}}Md(e,g),x.start(Hf(g,x,w,e.shouldReduceMotion&&Kx.has(g)?{type:!1}:S,e,T));const E=x.animation;E&&p.push(E)}return c&&Promise.all(p).then(()=>{Be.update(()=>{c&&zC(e,c)})}),p}function _d(e,n,i={}){var p;const o=rs(e,n,i.type==="exit"?(p=e.presenceContext)==null?void 0:p.custom:void 0);let{transition:a=e.getDefaultTransition()||{}}=o||{};i.transitionOverride&&(a=i.transitionOverride);const u=o?()=>Promise.all(mv(e,o,i)):()=>Promise.resolve(),c=e.variantChildren&&e.variantChildren.size?(m=0)=>{const{delayChildren:g=0,staggerChildren:x,staggerDirection:w}=a;return ZC(e,n,g+m,x,w,i)}:()=>Promise.resolve(),{when:d}=a;if(d){const[m,g]=d==="beforeChildren"?[u,c]:[c,u];return m().then(()=>g())}else return Promise.all([u(),c(i.delay)])}function ZC(e,n,i=0,o=0,a=1,u){const c=[],d=(e.variantChildren.size-1)*o,p=a===1?(m=0)=>m*o:(m=0)=>d-m*o;return Array.from(e.variantChildren).sort(eT).forEach((m,g)=>{m.notify("AnimationStart",n),c.push(_d(m,n,{...u,delay:i+p(g)}).then(()=>m.notify("AnimationComplete",n)))}),Promise.all(c)}function eT(e,n){return e.sortNodePosition(n)}function tT(e,n,i={}){e.notify("AnimationStart",n);let o;if(Array.isArray(n)){const a=n.map(u=>_d(e,u,i));o=Promise.all(a)}else if(typeof n=="string")o=_d(e,n,i);else{const a=typeof n=="function"?rs(e,n,i.custom):n;o=Promise.all(mv(e,a,i))}return o.then(()=>{e.notify("AnimationComplete",n)})}function gv(e,n){if(!Array.isArray(n))return!1;const i=n.length;if(i!==e.length)return!1;for(let o=0;o<i;o++)if(n[o]!==e[o])return!1;return!0}const nT=Of.length;function yv(e){if(!e)return;if(!e.isControllingVariants){const i=e.parent?yv(e.parent)||{}:{};return e.props.initial!==void 0&&(i.initial=e.props.initial),i}const n={};for(let i=0;i<nT;i++){const o=Of[i],a=e.props[o];(ts(a)||a===!1)&&(n[o]=a)}return n}const rT=[...Bf].reverse(),iT=Bf.length;function oT(e){return n=>Promise.all(n.map(({animation:i,options:o})=>tT(e,i,o)))}function sT(e){let n=oT(e),i=Kg(),o=!0;const a=p=>(m,g)=>{var w;const x=rs(e,g,p==="exit"?(w=e.presenceContext)==null?void 0:w.custom:void 0);if(x){const{transition:S,transitionEnd:k,...T}=x;m={...m,...T,...k}}return m};function u(p){n=p(e)}function c(p){const{props:m}=e,g=yv(e.parent)||{},x=[],w=new Set;let S={},k=1/0;for(let E=0;E<iT;E++){const P=rT[E],$=i[P],D=m[P]!==void 0?m[P]:g[P],F=ts(D),O=P===p?$.isActive:null;O===!1&&(k=E);let V=D===g[P]&&D!==m[P]&&F;if(V&&o&&e.manuallyAnimateOnMount&&(V=!1),$.protectedKeys={...S},!$.isActive&&O===null||!D&&!$.prevProp||Tl(D)||typeof D=="boolean")continue;const W=aT($.prevProp,D);let H=W||P===p&&$.isActive&&!V&&F||E>k&&F,Q=!1;const ae=Array.isArray(D)?D:[D];let se=ae.reduce(a(P),{});O===!1&&(se={});const{prevResolvedValues:Te={}}=$,He={...Te,...se},ut=ce=>{H=!0,w.has(ce)&&(Q=!0,w.delete(ce)),$.needsAnimating[ce]=!0;const Y=e.getValue(ce);Y&&(Y.liveStyle=!1)};for(const ce in He){const Y=se[ce],te=Te[ce];if(S.hasOwnProperty(ce))continue;let X=!1;$d(Y)&&$d(te)?X=!gv(Y,te):X=Y!==te,X?Y!=null?ut(ce):w.add(ce):Y!==void 0&&w.has(ce)?ut(ce):$.protectedKeys[ce]=!0}$.prevProp=D,$.prevResolvedValues=se,$.isActive&&(S={...S,...se}),o&&e.blockInitialAnimation&&(H=!1),H&&(!(V&&W)||Q)&&x.push(...ae.map(ce=>({animation:ce,options:{type:P}})))}if(w.size){const E={};if(typeof m.initial!="boolean"){const P=rs(e,Array.isArray(m.initial)?m.initial[0]:m.initial);P&&P.transition&&(E.transition=P.transition)}w.forEach(P=>{const $=e.getBaseTarget(P),D=e.getValue(P);D&&(D.liveStyle=!0),E[P]=$??null}),x.push({animation:E})}let T=!!x.length;return o&&(m.initial===!1||m.initial===m.animate)&&!e.manuallyAnimateOnMount&&(T=!1),o=!1,T?n(x):Promise.resolve()}function d(p,m){var x;if(i[p].isActive===m)return Promise.resolve();(x=e.variantChildren)==null||x.forEach(w=>{var S;return(S=w.animationState)==null?void 0:S.setActive(p,m)}),i[p].isActive=m;const g=c(p);for(const w in i)i[w].protectedKeys={};return g}return{animateChanges:c,setActive:d,setAnimateFunction:u,getState:()=>i,reset:()=>{i=Kg(),o=!0}}}function aT(e,n){return typeof n=="string"?n!==e:Array.isArray(n)?!gv(n,e):!1}function Pr(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Kg(){return{animate:Pr(!0),whileInView:Pr(),whileHover:Pr(),whileTap:Pr(),whileDrag:Pr(),whileFocus:Pr(),exit:Pr()}}class dr{constructor(n){this.isMounted=!1,this.node=n}update(){}}class lT extends dr{constructor(n){super(n),n.animationState||(n.animationState=sT(n))}updateAnimationControlsSubscription(){const{animate:n}=this.node.getProps();Tl(n)&&(this.unmountControls=n.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:n}=this.node.getProps(),{animate:i}=this.node.prevProps||{};n!==i&&this.updateAnimationControlsSubscription()}unmount(){var n;this.node.animationState.reset(),(n=this.unmountControls)==null||n.call(this)}}let uT=0;class cT extends dr{constructor(){super(...arguments),this.id=uT++}update(){if(!this.node.presenceContext)return;const{isPresent:n,onExitComplete:i}=this.node.presenceContext,{isPresent:o}=this.node.prevPresenceContext||{};if(!this.node.animationState||n===o)return;const a=this.node.animationState.setActive("exit",!n);i&&!n&&a.then(()=>{i(this.id)})}mount(){const{register:n,onExitComplete:i}=this.node.presenceContext||{};i&&i(this.id),n&&(this.unmount=n(this.id))}unmount(){}}const dT={animation:{Feature:lT},exit:{Feature:cT}};function is(e,n,i,o={passive:!0}){return e.addEventListener(n,i,o),()=>e.removeEventListener(n,i)}function ds(e){return{point:{x:e.pageX,y:e.pageY}}}const fT=e=>n=>_f(n)&&e(n,ds(n));function Uo(e,n,i,o){return is(e,n,fT(i),o)}function xv({top:e,left:n,right:i,bottom:o}){return{x:{min:n,max:i},y:{min:e,max:o}}}function pT({x:e,y:n}){return{top:n.min,right:e.max,bottom:n.max,left:e.min}}function hT(e,n){if(!n)return e;const i=n({x:e.left,y:e.top}),o=n({x:e.right,y:e.bottom});return{top:i.y,left:i.x,bottom:o.y,right:o.x}}const vv=1e-4,mT=1-vv,gT=1+vv,wv=.01,yT=0-wv,xT=0+wv;function vt(e){return e.max-e.min}function vT(e,n,i){return Math.abs(e-n)<=i}function Gg(e,n,i,o=.5){e.origin=o,e.originPoint=_e(n.min,n.max,e.origin),e.scale=vt(i)/vt(n),e.translate=_e(i.min,i.max,e.origin)-e.originPoint,(e.scale>=mT&&e.scale<=gT||isNaN(e.scale))&&(e.scale=1),(e.translate>=yT&&e.translate<=xT||isNaN(e.translate))&&(e.translate=0)}function Wo(e,n,i,o){Gg(e.x,n.x,i.x,o?o.originX:void 0),Gg(e.y,n.y,i.y,o?o.originY:void 0)}function Yg(e,n,i){e.min=i.min+n.min,e.max=e.min+vt(n)}function wT(e,n,i){Yg(e.x,n.x,i.x),Yg(e.y,n.y,i.y)}function qg(e,n,i){e.min=n.min-i.min,e.max=e.min+vt(n)}function Ho(e,n,i){qg(e.x,n.x,i.x),qg(e.y,n.y,i.y)}const Xg=()=>({translate:0,scale:1,origin:0,originPoint:0}),Ti=()=>({x:Xg(),y:Xg()}),Qg=()=>({min:0,max:0}),ze=()=>({x:Qg(),y:Qg()});function zt(e){return[e("x"),e("y")]}function Gc(e){return e===void 0||e===1}function Bd({scale:e,scaleX:n,scaleY:i}){return!Gc(e)||!Gc(n)||!Gc(i)}function jr(e){return Bd(e)||Sv(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function Sv(e){return Jg(e.x)||Jg(e.y)}function Jg(e){return e&&e!=="0%"}function fl(e,n,i){const o=e-i,a=n*o;return i+a}function Zg(e,n,i,o,a){return a!==void 0&&(e=fl(e,a,o)),fl(e,i,o)+n}function Od(e,n=0,i=1,o,a){e.min=Zg(e.min,n,i,o,a),e.max=Zg(e.max,n,i,o,a)}function bv(e,{x:n,y:i}){Od(e.x,n.translate,n.scale,n.originPoint),Od(e.y,i.translate,i.scale,i.originPoint)}const e0=.999999999999,t0=1.0000000000001;function ST(e,n,i,o=!1){const a=i.length;if(!a)return;n.x=n.y=1;let u,c;for(let d=0;d<a;d++){u=i[d],c=u.projectionDelta;const{visualElement:p}=u.options;p&&p.props.style&&p.props.style.display==="contents"||(o&&u.options.layoutScroll&&u.scroll&&u!==u.root&&ji(e,{x:-u.scroll.offset.x,y:-u.scroll.offset.y}),c&&(n.x*=c.x.scale,n.y*=c.y.scale,bv(e,c)),o&&jr(u.latestValues)&&ji(e,u.latestValues))}n.x<t0&&n.x>e0&&(n.x=1),n.y<t0&&n.y>e0&&(n.y=1)}function Pi(e,n){e.min=e.min+n,e.max=e.max+n}function n0(e,n,i,o,a=.5){const u=_e(e.min,e.max,a);Od(e,n,i,u,o)}function ji(e,n){n0(e.x,n.x,n.scaleX,n.scale,n.originX),n0(e.y,n.y,n.scaleY,n.scale,n.originY)}function kv(e,n){return xv(hT(e.getBoundingClientRect(),n))}function bT(e,n,i){const o=kv(e,i),{scroll:a}=n;return a&&(Pi(o.x,a.offset.x),Pi(o.y,a.offset.y)),o}const Ev=({current:e})=>e?e.ownerDocument.defaultView:null,r0=(e,n)=>Math.abs(e-n);function kT(e,n){const i=r0(e.x,n.x),o=r0(e.y,n.y);return Math.sqrt(i**2+o**2)}class Cv{constructor(n,i,{transformPagePoint:o,contextWindow:a,dragSnapToOrigin:u=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const x=qc(this.lastMoveEventInfo,this.history),w=this.startEvent!==null,S=kT(x.offset,{x:0,y:0})>=3;if(!w&&!S)return;const{point:k}=x,{timestamp:T}=at;this.history.push({...k,timestamp:T});const{onStart:E,onMove:P}=this.handlers;w||(E&&E(this.lastMoveEvent,x),this.startEvent=this.lastMoveEvent),P&&P(this.lastMoveEvent,x)},this.handlePointerMove=(x,w)=>{this.lastMoveEvent=x,this.lastMoveEventInfo=Yc(w,this.transformPagePoint),Be.update(this.updatePoint,!0)},this.handlePointerUp=(x,w)=>{this.end();const{onEnd:S,onSessionEnd:k,resumeAnimation:T}=this.handlers;if(this.dragSnapToOrigin&&T&&T(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const E=qc(x.type==="pointercancel"?this.lastMoveEventInfo:Yc(w,this.transformPagePoint),this.history);this.startEvent&&S&&S(x,E),k&&k(x,E)},!_f(n))return;this.dragSnapToOrigin=u,this.handlers=i,this.transformPagePoint=o,this.contextWindow=a||window;const c=ds(n),d=Yc(c,this.transformPagePoint),{point:p}=d,{timestamp:m}=at;this.history=[{...p,timestamp:m}];const{onSessionStart:g}=i;g&&g(n,qc(d,this.history)),this.removeListeners=ls(Uo(this.contextWindow,"pointermove",this.handlePointerMove),Uo(this.contextWindow,"pointerup",this.handlePointerUp),Uo(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(n){this.handlers=n}end(){this.removeListeners&&this.removeListeners(),ur(this.updatePoint)}}function Yc(e,n){return n?{point:n(e.point)}:e}function i0(e,n){return{x:e.x-n.x,y:e.y-n.y}}function qc({point:e},n){return{point:e,delta:i0(e,Tv(n)),offset:i0(e,ET(n)),velocity:CT(n,.1)}}function ET(e){return e[0]}function Tv(e){return e[e.length-1]}function CT(e,n){if(e.length<2)return{x:0,y:0};let i=e.length-1,o=null;const a=Tv(e);for(;i>=0&&(o=e[i],!(a.timestamp-o.timestamp>mn(n)));)i--;if(!o)return{x:0,y:0};const u=gn(a.timestamp-o.timestamp);if(u===0)return{x:0,y:0};const c={x:(a.x-o.x)/u,y:(a.y-o.y)/u};return c.x===1/0&&(c.x=0),c.y===1/0&&(c.y=0),c}function TT(e,{min:n,max:i},o){return n!==void 0&&e<n?e=o?_e(n,e,o.min):Math.max(e,n):i!==void 0&&e>i&&(e=o?_e(i,e,o.max):Math.min(e,i)),e}function o0(e,n,i){return{min:n!==void 0?e.min+n:void 0,max:i!==void 0?e.max+i-(e.max-e.min):void 0}}function PT(e,{top:n,left:i,bottom:o,right:a}){return{x:o0(e.x,i,a),y:o0(e.y,n,o)}}function s0(e,n){let i=n.min-e.min,o=n.max-e.max;return n.max-n.min<e.max-e.min&&([i,o]=[o,i]),{min:i,max:o}}function jT(e,n){return{x:s0(e.x,n.x),y:s0(e.y,n.y)}}function RT(e,n){let i=.5;const o=vt(e),a=vt(n);return a>o?i=Qo(n.min,n.max-o,e.min):o>a&&(i=Qo(e.min,e.max-a,n.min)),Dn(0,1,i)}function AT(e,n){const i={};return n.min!==void 0&&(i.min=n.min-e.min),n.max!==void 0&&(i.max=n.max-e.min),i}const Fd=.35;function DT(e=Fd){return e===!1?e=0:e===!0&&(e=Fd),{x:a0(e,"left","right"),y:a0(e,"top","bottom")}}function a0(e,n,i){return{min:l0(e,n),max:l0(e,i)}}function l0(e,n){return typeof e=="number"?e:e[n]||0}const IT=new WeakMap;class LT{constructor(n){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=ze(),this.visualElement=n}start(n,{snapToCursor:i=!1}={}){const{presenceContext:o}=this.visualElement;if(o&&o.isPresent===!1)return;const a=g=>{const{dragSnapToOrigin:x}=this.getProps();x?this.pauseAnimation():this.stopAnimation(),i&&this.snapToCursor(ds(g).point)},u=(g,x)=>{const{drag:w,dragPropagation:S,onDragStart:k}=this.getProps();if(w&&!S&&(this.openDragLock&&this.openDragLock(),this.openDragLock=XE(w),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),zt(E=>{let P=this.getAxisMotionValue(E).get()||0;if(yn.test(P)){const{projection:$}=this.visualElement;if($&&$.layout){const D=$.layout.layoutBox[E];D&&(P=vt(D)*(parseFloat(P)/100))}}this.originPoint[E]=P}),k&&Be.postRender(()=>k(g,x)),Md(this.visualElement,"transform");const{animationState:T}=this.visualElement;T&&T.setActive("whileDrag",!0)},c=(g,x)=>{const{dragPropagation:w,dragDirectionLock:S,onDirectionLock:k,onDrag:T}=this.getProps();if(!w&&!this.openDragLock)return;const{offset:E}=x;if(S&&this.currentDirection===null){this.currentDirection=$T(E),this.currentDirection!==null&&k&&k(this.currentDirection);return}this.updateAxis("x",x.point,E),this.updateAxis("y",x.point,E),this.visualElement.render(),T&&T(g,x)},d=(g,x)=>this.stop(g,x),p=()=>zt(g=>{var x;return this.getAnimationState(g)==="paused"&&((x=this.getAxisMotionValue(g).animation)==null?void 0:x.play())}),{dragSnapToOrigin:m}=this.getProps();this.panSession=new Cv(n,{onSessionStart:a,onStart:u,onMove:c,onSessionEnd:d,resumeAnimation:p},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:m,contextWindow:Ev(this.visualElement)})}stop(n,i){const o=this.isDragging;if(this.cancel(),!o)return;const{velocity:a}=i;this.startAnimation(a);const{onDragEnd:u}=this.getProps();u&&Be.postRender(()=>u(n,i))}cancel(){this.isDragging=!1;const{projection:n,animationState:i}=this.visualElement;n&&(n.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:o}=this.getProps();!o&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),i&&i.setActive("whileDrag",!1)}updateAxis(n,i,o){const{drag:a}=this.getProps();if(!o||!Da(n,a,this.currentDirection))return;const u=this.getAxisMotionValue(n);let c=this.originPoint[n]+o[n];this.constraints&&this.constraints[n]&&(c=TT(c,this.constraints[n],this.elastic[n])),u.set(c)}resolveConstraints(){var u;const{dragConstraints:n,dragElastic:i}=this.getProps(),o=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(u=this.visualElement.projection)==null?void 0:u.layout,a=this.constraints;n&&Ci(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&o?this.constraints=PT(o.layoutBox,n):this.constraints=!1,this.elastic=DT(i),a!==this.constraints&&o&&this.constraints&&!this.hasMutatedConstraints&&zt(c=>{this.constraints!==!1&&this.getAxisMotionValue(c)&&(this.constraints[c]=AT(o.layoutBox[c],this.constraints[c]))})}resolveRefConstraints(){const{dragConstraints:n,onMeasureDragConstraints:i}=this.getProps();if(!n||!Ci(n))return!1;const o=n.current,{projection:a}=this.visualElement;if(!a||!a.layout)return!1;const u=bT(o,a.root,this.visualElement.getTransformPagePoint());let c=jT(a.layout.layoutBox,u);if(i){const d=i(pT(c));this.hasMutatedConstraints=!!d,d&&(c=xv(d))}return c}startAnimation(n){const{drag:i,dragMomentum:o,dragElastic:a,dragTransition:u,dragSnapToOrigin:c,onDragTransitionEnd:d}=this.getProps(),p=this.constraints||{},m=zt(g=>{if(!Da(g,i,this.currentDirection))return;let x=p&&p[g]||{};c&&(x={min:0,max:0});const w=a?200:1e6,S=a?40:1e7,k={type:"inertia",velocity:o?n[g]:0,bounceStiffness:w,bounceDamping:S,timeConstant:750,restDelta:1,restSpeed:10,...u,...x};return this.startAxisValueAnimation(g,k)});return Promise.all(m).then(d)}startAxisValueAnimation(n,i){const o=this.getAxisMotionValue(n);return Md(this.visualElement,n),o.start(Hf(n,o,0,i,this.visualElement,!1))}stopAnimation(){zt(n=>this.getAxisMotionValue(n).stop())}pauseAnimation(){zt(n=>{var i;return(i=this.getAxisMotionValue(n).animation)==null?void 0:i.pause()})}getAnimationState(n){var i;return(i=this.getAxisMotionValue(n).animation)==null?void 0:i.state}getAxisMotionValue(n){const i=`_drag${n.toUpperCase()}`,o=this.visualElement.getProps(),a=o[i];return a||this.visualElement.getValue(n,(o.initial?o.initial[n]:void 0)||0)}snapToCursor(n){zt(i=>{const{drag:o}=this.getProps();if(!Da(i,o,this.currentDirection))return;const{projection:a}=this.visualElement,u=this.getAxisMotionValue(i);if(a&&a.layout){const{min:c,max:d}=a.layout.layoutBox[i];u.set(n[i]-_e(c,d,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:n,dragConstraints:i}=this.getProps(),{projection:o}=this.visualElement;if(!Ci(i)||!o||!this.constraints)return;this.stopAnimation();const a={x:0,y:0};zt(c=>{const d=this.getAxisMotionValue(c);if(d&&this.constraints!==!1){const p=d.get();a[c]=RT({min:p,max:p},this.constraints[c])}});const{transformTemplate:u}=this.visualElement.getProps();this.visualElement.current.style.transform=u?u({},""):"none",o.root&&o.root.updateScroll(),o.updateLayout(),this.resolveConstraints(),zt(c=>{if(!Da(c,n,null))return;const d=this.getAxisMotionValue(c),{min:p,max:m}=this.constraints[c];d.set(_e(p,m,a[c]))})}addListeners(){if(!this.visualElement.current)return;IT.set(this.visualElement,this);const n=this.visualElement.current,i=Uo(n,"pointerdown",p=>{const{drag:m,dragListener:g=!0}=this.getProps();m&&g&&this.start(p)}),o=()=>{const{dragConstraints:p}=this.getProps();Ci(p)&&p.current&&(this.constraints=this.resolveRefConstraints())},{projection:a}=this.visualElement,u=a.addEventListener("measure",o);a&&!a.layout&&(a.root&&a.root.updateScroll(),a.updateLayout()),Be.read(o);const c=is(window,"resize",()=>this.scalePositionWithinConstraints()),d=a.addEventListener("didUpdate",({delta:p,hasLayoutChanged:m})=>{this.isDragging&&m&&(zt(g=>{const x=this.getAxisMotionValue(g);x&&(this.originPoint[g]+=p[g].translate,x.set(x.get()+p[g].translate))}),this.visualElement.render())});return()=>{c(),i(),u(),d&&d()}}getProps(){const n=this.visualElement.getProps(),{drag:i=!1,dragDirectionLock:o=!1,dragPropagation:a=!1,dragConstraints:u=!1,dragElastic:c=Fd,dragMomentum:d=!0}=n;return{...n,drag:i,dragDirectionLock:o,dragPropagation:a,dragConstraints:u,dragElastic:c,dragMomentum:d}}}function Da(e,n,i){return(n===!0||n===e)&&(i===null||i===e)}function $T(e,n=10){let i=null;return Math.abs(e.y)>n?i="y":Math.abs(e.x)>n&&(i="x"),i}class MT extends dr{constructor(n){super(n),this.removeGroupControls=Ut,this.removeListeners=Ut,this.controls=new LT(n)}mount(){const{dragControls:n}=this.node.getProps();n&&(this.removeGroupControls=n.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Ut}unmount(){this.removeGroupControls(),this.removeListeners()}}const u0=e=>(n,i)=>{e&&Be.postRender(()=>e(n,i))};class _T extends dr{constructor(){super(...arguments),this.removePointerDownListener=Ut}onPointerDown(n){this.session=new Cv(n,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Ev(this.node)})}createPanHandlers(){const{onPanSessionStart:n,onPanStart:i,onPan:o,onPanEnd:a}=this.node.getProps();return{onSessionStart:u0(n),onStart:u0(i),onMove:o,onEnd:(u,c)=>{delete this.session,a&&Be.postRender(()=>a(u,c))}}}mount(){this.removePointerDownListener=Uo(this.node.current,"pointerdown",n=>this.onPointerDown(n))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const Qa={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function c0(e,n){return n.max===n.min?0:e/(n.max-n.min)*100}const $o={correct:(e,n)=>{if(!n.target)return e;if(typeof e=="string")if(le.test(e))e=parseFloat(e);else return e;const i=c0(e,n.target.x),o=c0(e,n.target.y);return`${i}% ${o}%`}},BT={correct:(e,{treeScale:n,projectionDelta:i})=>{const o=e,a=cr.parse(e);if(a.length>5)return o;const u=cr.createTransformer(e),c=typeof a[0]!="number"?1:0,d=i.x.scale*n.x,p=i.y.scale*n.y;a[0+c]/=d,a[1+c]/=p;const m=_e(d,p,.5);return typeof a[2+c]=="number"&&(a[2+c]/=m),typeof a[3+c]=="number"&&(a[3+c]/=m),u(a)}};class OT extends b.Component{componentDidMount(){const{visualElement:n,layoutGroup:i,switchLayoutGroup:o,layoutId:a}=this.props,{projection:u}=n;bC(FT),u&&(i.group&&i.group.add(u),o&&o.register&&a&&o.register(u),u.root.didUpdate(),u.addEventListener("animationComplete",()=>{this.safeToRemove()}),u.setOptions({...u.options,onExitComplete:()=>this.safeToRemove()})),Qa.hasEverUpdated=!0}getSnapshotBeforeUpdate(n){const{layoutDependency:i,visualElement:o,drag:a,isPresent:u}=this.props,c=o.projection;return c&&(c.isPresent=u,a||n.layoutDependency!==i||i===void 0||n.isPresent!==u?c.willUpdate():this.safeToRemove(),n.isPresent!==u&&(u?c.promote():c.relegate()||Be.postRender(()=>{const d=c.getStack();(!d||!d.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:n}=this.props.visualElement;n&&(n.root.didUpdate(),Mf.postRender(()=>{!n.currentAnimation&&n.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:n,layoutGroup:i,switchLayoutGroup:o}=this.props,{projection:a}=n;a&&(a.scheduleCheckAfterUnmount(),i&&i.group&&i.group.remove(a),o&&o.deregister&&o.deregister(a))}safeToRemove(){const{safeToRemove:n}=this.props;n&&n()}render(){return null}}function Pv(e){const[n,i]=fx(),o=b.useContext(pf);return y.jsx(OT,{...e,layoutGroup:o,switchLayoutGroup:b.useContext(ov),isPresent:n,safeToRemove:i})}const FT={borderRadius:{...$o,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:$o,borderTopRightRadius:$o,borderBottomLeftRadius:$o,borderBottomRightRadius:$o,boxShadow:BT};function NT(e,n,i){const o=gt(e)?e:es(e);return o.start(Hf("",o,n,i)),o.animation}function VT(e){return e instanceof SVGElement&&e.tagName!=="svg"}const zT=(e,n)=>e.depth-n.depth;class UT{constructor(){this.children=[],this.isDirty=!1}add(n){yf(this.children,n),this.isDirty=!0}remove(n){xf(this.children,n),this.isDirty=!0}forEach(n){this.isDirty&&this.children.sort(zT),this.isDirty=!1,this.children.forEach(n)}}function WT(e,n){const i=Tt.now(),o=({timestamp:a})=>{const u=a-i;u>=n&&(ur(o),e(u-n))};return Be.setup(o,!0),()=>ur(o)}const jv=["TopLeft","TopRight","BottomLeft","BottomRight"],HT=jv.length,d0=e=>typeof e=="string"?parseFloat(e):e,f0=e=>typeof e=="number"||le.test(e);function KT(e,n,i,o,a,u){a?(e.opacity=_e(0,i.opacity??1,GT(o)),e.opacityExit=_e(n.opacity??1,0,YT(o))):u&&(e.opacity=_e(n.opacity??1,i.opacity??1,o));for(let c=0;c<HT;c++){const d=`border${jv[c]}Radius`;let p=p0(n,d),m=p0(i,d);if(p===void 0&&m===void 0)continue;p||(p=0),m||(m=0),p===0||m===0||f0(p)===f0(m)?(e[d]=Math.max(_e(d0(p),d0(m),o),0),(yn.test(m)||yn.test(p))&&(e[d]+="%")):e[d]=m}(n.rotate||i.rotate)&&(e.rotate=_e(n.rotate||0,i.rotate||0,o))}function p0(e,n){return e[n]!==void 0?e[n]:e.borderRadius}const GT=Rv(0,.5,bx),YT=Rv(.5,.95,Ut);function Rv(e,n,i){return o=>o<e?0:o>n?1:i(Qo(e,n,o))}function h0(e,n){e.min=n.min,e.max=n.max}function Vt(e,n){h0(e.x,n.x),h0(e.y,n.y)}function m0(e,n){e.translate=n.translate,e.scale=n.scale,e.originPoint=n.originPoint,e.origin=n.origin}function g0(e,n,i,o,a){return e-=n,e=fl(e,1/i,o),a!==void 0&&(e=fl(e,1/a,o)),e}function qT(e,n=0,i=1,o=.5,a,u=e,c=e){if(yn.test(n)&&(n=parseFloat(n),n=_e(c.min,c.max,n/100)-c.min),typeof n!="number")return;let d=_e(u.min,u.max,o);e===u&&(d-=n),e.min=g0(e.min,n,i,d,a),e.max=g0(e.max,n,i,d,a)}function y0(e,n,[i,o,a],u,c){qT(e,n[i],n[o],n[a],n.scale,u,c)}const XT=["x","scaleX","originX"],QT=["y","scaleY","originY"];function x0(e,n,i,o){y0(e.x,n,XT,i?i.x:void 0,o?o.x:void 0),y0(e.y,n,QT,i?i.y:void 0,o?o.y:void 0)}function v0(e){return e.translate===0&&e.scale===1}function Av(e){return v0(e.x)&&v0(e.y)}function w0(e,n){return e.min===n.min&&e.max===n.max}function JT(e,n){return w0(e.x,n.x)&&w0(e.y,n.y)}function S0(e,n){return Math.round(e.min)===Math.round(n.min)&&Math.round(e.max)===Math.round(n.max)}function Dv(e,n){return S0(e.x,n.x)&&S0(e.y,n.y)}function b0(e){return vt(e.x)/vt(e.y)}function k0(e,n){return e.translate===n.translate&&e.scale===n.scale&&e.originPoint===n.originPoint}class ZT{constructor(){this.members=[]}add(n){yf(this.members,n),n.scheduleRender()}remove(n){if(xf(this.members,n),n===this.prevLead&&(this.prevLead=void 0),n===this.lead){const i=this.members[this.members.length-1];i&&this.promote(i)}}relegate(n){const i=this.members.findIndex(a=>n===a);if(i===0)return!1;let o;for(let a=i;a>=0;a--){const u=this.members[a];if(u.isPresent!==!1){o=u;break}}return o?(this.promote(o),!0):!1}promote(n,i){const o=this.lead;if(n!==o&&(this.prevLead=o,this.lead=n,n.show(),o)){o.instance&&o.scheduleRender(),n.scheduleRender(),n.resumeFrom=o,i&&(n.resumeFrom.preserveOpacity=!0),o.snapshot&&(n.snapshot=o.snapshot,n.snapshot.latestValues=o.animationValues||o.latestValues),n.root&&n.root.isUpdating&&(n.isLayoutDirty=!0);const{crossfade:a}=n.options;a===!1&&o.hide()}}exitAnimationComplete(){this.members.forEach(n=>{const{options:i,resumingFrom:o}=n;i.onExitComplete&&i.onExitComplete(),o&&o.options.onExitComplete&&o.options.onExitComplete()})}scheduleRender(){this.members.forEach(n=>{n.instance&&n.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function e5(e,n,i){let o="";const a=e.x.translate/n.x,u=e.y.translate/n.y,c=(i==null?void 0:i.z)||0;if((a||u||c)&&(o=`translate3d(${a}px, ${u}px, ${c}px) `),(n.x!==1||n.y!==1)&&(o+=`scale(${1/n.x}, ${1/n.y}) `),i){const{transformPerspective:m,rotate:g,rotateX:x,rotateY:w,skewX:S,skewY:k}=i;m&&(o=`perspective(${m}px) ${o}`),g&&(o+=`rotate(${g}deg) `),x&&(o+=`rotateX(${x}deg) `),w&&(o+=`rotateY(${w}deg) `),S&&(o+=`skewX(${S}deg) `),k&&(o+=`skewY(${k}deg) `)}const d=e.x.scale*n.x,p=e.y.scale*n.y;return(d!==1||p!==1)&&(o+=`scale(${d}, ${p})`),o||"none"}const Xc=["","X","Y","Z"],t5={visibility:"hidden"},E0=1e3;let n5=0;function Qc(e,n,i,o){const{latestValues:a}=n;a[e]&&(i[e]=a[e],n.setStaticValue(e,0),o&&(o[e]=0))}function Iv(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:n}=e.options;if(!n)return;const i=hv(n);if(window.MotionHasOptimisedAnimation(i,"transform")){const{layout:a,layoutId:u}=e.options;window.MotionCancelOptimisedAnimation(i,"transform",Be,!(a||u))}const{parent:o}=e;o&&!o.hasCheckedOptimisedAppear&&Iv(o)}function Lv({attachResizeListener:e,defaultParent:n,measureScroll:i,checkIsScrollRoot:o,resetTransform:a}){return class{constructor(c={},d=n==null?void 0:n()){this.id=n5++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(o5),this.nodes.forEach(c5),this.nodes.forEach(d5),this.nodes.forEach(s5)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=c,this.root=d?d.root||d:this,this.path=d?[...d.path,d]:[],this.parent=d,this.depth=d?d.depth+1:0;for(let p=0;p<this.path.length;p++)this.path[p].shouldResetTransform=!0;this.root===this&&(this.nodes=new UT)}addEventListener(c,d){return this.eventHandlers.has(c)||this.eventHandlers.set(c,new Sf),this.eventHandlers.get(c).add(d)}notifyListeners(c,...d){const p=this.eventHandlers.get(c);p&&p.notify(...d)}hasListeners(c){return this.eventHandlers.has(c)}mount(c,d=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=VT(c),this.instance=c;const{layoutId:p,layout:m,visualElement:g}=this.options;if(g&&!g.current&&g.mount(c),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),d&&(m||p)&&(this.isLayoutDirty=!0),e){let x;const w=()=>this.root.updateBlockedByResize=!1;e(c,()=>{this.root.updateBlockedByResize=!0,x&&x(),x=WT(w,250),Qa.hasAnimatedSinceResize&&(Qa.hasAnimatedSinceResize=!1,this.nodes.forEach(T0))})}p&&this.root.registerSharedNode(p,this),this.options.animate!==!1&&g&&(p||m)&&this.addEventListener("didUpdate",({delta:x,hasLayoutChanged:w,hasRelativeLayoutChanged:S,layout:k})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const T=this.options.transition||g.getDefaultTransition()||g5,{onLayoutAnimationStart:E,onLayoutAnimationComplete:P}=g.getProps(),$=!this.targetLayout||!Dv(this.targetLayout,k),D=!w&&S;if(this.options.layoutRoot||this.resumeFrom||D||w&&($||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(x,D);const F={...Lf(T,"layout"),onPlay:E,onComplete:P};(g.shouldReduceMotion||this.options.layoutRoot)&&(F.delay=0,F.type=!1),this.startAnimation(F)}else w||T0(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=k})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const c=this.getStack();c&&c.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),ur(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(f5),this.animationId++)}getTransformTemplate(){const{visualElement:c}=this.options;return c&&c.getProps().transformTemplate}willUpdate(c=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Iv(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let g=0;g<this.path.length;g++){const x=this.path[g];x.shouldResetTransform=!0,x.updateScroll("snapshot"),x.options.layoutRoot&&x.willUpdate(!1)}const{layoutId:d,layout:p}=this.options;if(d===void 0&&!p)return;const m=this.getTransformTemplate();this.prevTransformTemplateValue=m?m(this.latestValues,""):void 0,this.updateSnapshot(),c&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(C0);return}this.isUpdating||this.nodes.forEach(l5),this.isUpdating=!1,this.nodes.forEach(u5),this.nodes.forEach(r5),this.nodes.forEach(i5),this.clearAllSnapshots();const d=Tt.now();at.delta=Dn(0,1e3/60,d-at.timestamp),at.timestamp=d,at.isProcessing=!0,zc.update.process(at),zc.preRender.process(at),zc.render.process(at),at.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Mf.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(a5),this.sharedNodes.forEach(p5)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Be.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Be.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!vt(this.snapshot.measuredBox.x)&&!vt(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let p=0;p<this.path.length;p++)this.path[p].updateScroll();const c=this.layout;this.layout=this.measure(!1),this.layoutCorrected=ze(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:d}=this.options;d&&d.notify("LayoutMeasure",this.layout.layoutBox,c?c.layoutBox:void 0)}updateScroll(c="measure"){let d=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===c&&(d=!1),d){const p=o(this.instance);this.scroll={animationId:this.root.animationId,phase:c,isRoot:p,offset:i(this.instance),wasRoot:this.scroll?this.scroll.isRoot:p}}}resetTransform(){if(!a)return;const c=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,d=this.projectionDelta&&!Av(this.projectionDelta),p=this.getTransformTemplate(),m=p?p(this.latestValues,""):void 0,g=m!==this.prevTransformTemplateValue;c&&(d||jr(this.latestValues)||g)&&(a(this.instance,m),this.shouldResetTransform=!1,this.scheduleRender())}measure(c=!0){const d=this.measurePageBox();let p=this.removeElementScroll(d);return c&&(p=this.removeTransform(p)),y5(p),{animationId:this.root.animationId,measuredBox:d,layoutBox:p,latestValues:{},source:this.id}}measurePageBox(){var m;const{visualElement:c}=this.options;if(!c)return ze();const d=c.measureViewportBox();if(!(((m=this.scroll)==null?void 0:m.wasRoot)||this.path.some(x5))){const{scroll:g}=this.root;g&&(Pi(d.x,g.offset.x),Pi(d.y,g.offset.y))}return d}removeElementScroll(c){var p;const d=ze();if(Vt(d,c),(p=this.scroll)!=null&&p.wasRoot)return d;for(let m=0;m<this.path.length;m++){const g=this.path[m],{scroll:x,options:w}=g;g!==this.root&&x&&w.layoutScroll&&(x.wasRoot&&Vt(d,c),Pi(d.x,x.offset.x),Pi(d.y,x.offset.y))}return d}applyTransform(c,d=!1){const p=ze();Vt(p,c);for(let m=0;m<this.path.length;m++){const g=this.path[m];!d&&g.options.layoutScroll&&g.scroll&&g!==g.root&&ji(p,{x:-g.scroll.offset.x,y:-g.scroll.offset.y}),jr(g.latestValues)&&ji(p,g.latestValues)}return jr(this.latestValues)&&ji(p,this.latestValues),p}removeTransform(c){const d=ze();Vt(d,c);for(let p=0;p<this.path.length;p++){const m=this.path[p];if(!m.instance||!jr(m.latestValues))continue;Bd(m.latestValues)&&m.updateSnapshot();const g=ze(),x=m.measurePageBox();Vt(g,x),x0(d,m.latestValues,m.snapshot?m.snapshot.layoutBox:void 0,g)}return jr(this.latestValues)&&x0(d,this.latestValues),d}setTargetDelta(c){this.targetDelta=c,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(c){this.options={...this.options,...c,crossfade:c.crossfade!==void 0?c.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==at.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(c=!1){var w;const d=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=d.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=d.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=d.isSharedProjectionDirty);const p=!!this.resumingFrom||this!==d;if(!(c||p&&this.isSharedProjectionDirty||this.isProjectionDirty||(w=this.parent)!=null&&w.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:g,layoutId:x}=this.options;if(!(!this.layout||!(g||x))){if(this.resolvedRelativeTargetAt=at.timestamp,!this.targetDelta&&!this.relativeTarget){const S=this.getClosestProjectingParent();S&&S.layout&&this.animationProgress!==1?(this.relativeParent=S,this.forceRelativeParentToResolveTarget(),this.relativeTarget=ze(),this.relativeTargetOrigin=ze(),Ho(this.relativeTargetOrigin,this.layout.layoutBox,S.layout.layoutBox),Vt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=ze(),this.targetWithTransforms=ze()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),wT(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Vt(this.target,this.layout.layoutBox),bv(this.target,this.targetDelta)):Vt(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget)){this.attemptToResolveRelativeTarget=!1;const S=this.getClosestProjectingParent();S&&!!S.resumingFrom==!!this.resumingFrom&&!S.options.layoutScroll&&S.target&&this.animationProgress!==1?(this.relativeParent=S,this.forceRelativeParentToResolveTarget(),this.relativeTarget=ze(),this.relativeTargetOrigin=ze(),Ho(this.relativeTargetOrigin,this.target,S.target),Vt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}}}getClosestProjectingParent(){if(!(!this.parent||Bd(this.parent.latestValues)||Sv(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var k;const c=this.getLead(),d=!!this.resumingFrom||this!==c;let p=!0;if((this.isProjectionDirty||(k=this.parent)!=null&&k.isProjectionDirty)&&(p=!1),d&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(p=!1),this.resolvedRelativeTargetAt===at.timestamp&&(p=!1),p)return;const{layout:m,layoutId:g}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(m||g))return;Vt(this.layoutCorrected,this.layout.layoutBox);const x=this.treeScale.x,w=this.treeScale.y;ST(this.layoutCorrected,this.treeScale,this.path,d),c.layout&&!c.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(c.target=c.layout.layoutBox,c.targetWithTransforms=ze());const{target:S}=c;if(!S){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(m0(this.prevProjectionDelta.x,this.projectionDelta.x),m0(this.prevProjectionDelta.y,this.projectionDelta.y)),Wo(this.projectionDelta,this.layoutCorrected,S,this.latestValues),(this.treeScale.x!==x||this.treeScale.y!==w||!k0(this.projectionDelta.x,this.prevProjectionDelta.x)||!k0(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",S))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(c=!0){var d;if((d=this.options.visualElement)==null||d.scheduleRender(),c){const p=this.getStack();p&&p.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Ti(),this.projectionDelta=Ti(),this.projectionDeltaWithTransform=Ti()}setAnimationOrigin(c,d=!1){const p=this.snapshot,m=p?p.latestValues:{},g={...this.latestValues},x=Ti();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!d;const w=ze(),S=p?p.source:void 0,k=this.layout?this.layout.source:void 0,T=S!==k,E=this.getStack(),P=!E||E.members.length<=1,$=!!(T&&!P&&this.options.crossfade===!0&&!this.path.some(m5));this.animationProgress=0;let D;this.mixTargetDelta=F=>{const O=F/1e3;P0(x.x,c.x,O),P0(x.y,c.y,O),this.setTargetDelta(x),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Ho(w,this.layout.layoutBox,this.relativeParent.layout.layoutBox),h5(this.relativeTarget,this.relativeTargetOrigin,w,O),D&&JT(this.relativeTarget,D)&&(this.isProjectionDirty=!1),D||(D=ze()),Vt(D,this.relativeTarget)),T&&(this.animationValues=g,KT(g,m,this.latestValues,O,$,P)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=O},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(c){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(ur(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Be.update(()=>{Qa.hasAnimatedSinceResize=!0,this.currentAnimation=NT(0,E0,{...c,onUpdate:d=>{this.mixTargetDelta(d),c.onUpdate&&c.onUpdate(d)},onStop:()=>{},onComplete:()=>{c.onComplete&&c.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const c=this.getStack();c&&c.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(E0),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const c=this.getLead();let{targetWithTransforms:d,target:p,layout:m,latestValues:g}=c;if(!(!d||!p||!m)){if(this!==c&&this.layout&&m&&$v(this.options.animationType,this.layout.layoutBox,m.layoutBox)){p=this.target||ze();const x=vt(this.layout.layoutBox.x);p.x.min=c.target.x.min,p.x.max=p.x.min+x;const w=vt(this.layout.layoutBox.y);p.y.min=c.target.y.min,p.y.max=p.y.min+w}Vt(d,p),ji(d,g),Wo(this.projectionDeltaWithTransform,this.layoutCorrected,d,g)}}registerSharedNode(c,d){this.sharedNodes.has(c)||this.sharedNodes.set(c,new ZT),this.sharedNodes.get(c).add(d);const m=d.options.initialPromotionConfig;d.promote({transition:m?m.transition:void 0,preserveFollowOpacity:m&&m.shouldPreserveFollowOpacity?m.shouldPreserveFollowOpacity(d):void 0})}isLead(){const c=this.getStack();return c?c.lead===this:!0}getLead(){var d;const{layoutId:c}=this.options;return c?((d=this.getStack())==null?void 0:d.lead)||this:this}getPrevLead(){var d;const{layoutId:c}=this.options;return c?(d=this.getStack())==null?void 0:d.prevLead:void 0}getStack(){const{layoutId:c}=this.options;if(c)return this.root.sharedNodes.get(c)}promote({needsReset:c,transition:d,preserveFollowOpacity:p}={}){const m=this.getStack();m&&m.promote(this,p),c&&(this.projectionDelta=void 0,this.needsReset=!0),d&&this.setOptions({transition:d})}relegate(){const c=this.getStack();return c?c.relegate(this):!1}resetSkewAndRotation(){const{visualElement:c}=this.options;if(!c)return;let d=!1;const{latestValues:p}=c;if((p.z||p.rotate||p.rotateX||p.rotateY||p.rotateZ||p.skewX||p.skewY)&&(d=!0),!d)return;const m={};p.z&&Qc("z",c,m,this.animationValues);for(let g=0;g<Xc.length;g++)Qc(`rotate${Xc[g]}`,c,m,this.animationValues),Qc(`skew${Xc[g]}`,c,m,this.animationValues);c.render();for(const g in m)c.setStaticValue(g,m[g]),this.animationValues&&(this.animationValues[g]=m[g]);c.scheduleRender()}getProjectionStyles(c){if(!this.instance||this.isSVG)return;if(!this.isVisible)return t5;const d={visibility:""},p=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,d.opacity="",d.pointerEvents=Xa(c==null?void 0:c.pointerEvents)||"",d.transform=p?p(this.latestValues,""):"none",d;const m=this.getLead();if(!this.projectionDelta||!this.layout||!m.target){const S={};return this.options.layoutId&&(S.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,S.pointerEvents=Xa(c==null?void 0:c.pointerEvents)||""),this.hasProjected&&!jr(this.latestValues)&&(S.transform=p?p({},""):"none",this.hasProjected=!1),S}const g=m.animationValues||m.latestValues;this.applyTransformsToTarget(),d.transform=e5(this.projectionDeltaWithTransform,this.treeScale,g),p&&(d.transform=p(g,d.transform));const{x,y:w}=this.projectionDelta;d.transformOrigin=`${x.origin*100}% ${w.origin*100}% 0`,m.animationValues?d.opacity=m===this?g.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:g.opacityExit:d.opacity=m===this?g.opacity!==void 0?g.opacity:"":g.opacityExit!==void 0?g.opacityExit:0;for(const S in ns){if(g[S]===void 0)continue;const{correct:k,applyTo:T,isCSSVariable:E}=ns[S],P=d.transform==="none"?g[S]:k(g[S],m);if(T){const $=T.length;for(let D=0;D<$;D++)d[T[D]]=P}else E?this.options.visualElement.renderState.vars[S]=P:d[S]=P}return this.options.layoutId&&(d.pointerEvents=m===this?Xa(c==null?void 0:c.pointerEvents)||"":"none"),d}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(c=>{var d;return(d=c.currentAnimation)==null?void 0:d.stop()}),this.root.nodes.forEach(C0),this.root.sharedNodes.clear()}}}function r5(e){e.updateLayout()}function i5(e){var i;const n=((i=e.resumeFrom)==null?void 0:i.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&n&&e.hasListeners("didUpdate")){const{layoutBox:o,measuredBox:a}=e.layout,{animationType:u}=e.options,c=n.source!==e.layout.source;u==="size"?zt(x=>{const w=c?n.measuredBox[x]:n.layoutBox[x],S=vt(w);w.min=o[x].min,w.max=w.min+S}):$v(u,n.layoutBox,o)&&zt(x=>{const w=c?n.measuredBox[x]:n.layoutBox[x],S=vt(o[x]);w.max=w.min+S,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[x].max=e.relativeTarget[x].min+S)});const d=Ti();Wo(d,o,n.layoutBox);const p=Ti();c?Wo(p,e.applyTransform(a,!0),n.measuredBox):Wo(p,o,n.layoutBox);const m=!Av(d);let g=!1;if(!e.resumeFrom){const x=e.getClosestProjectingParent();if(x&&!x.resumeFrom){const{snapshot:w,layout:S}=x;if(w&&S){const k=ze();Ho(k,n.layoutBox,w.layoutBox);const T=ze();Ho(T,o,S.layoutBox),Dv(k,T)||(g=!0),x.options.layoutRoot&&(e.relativeTarget=T,e.relativeTargetOrigin=k,e.relativeParent=x)}}}e.notifyListeners("didUpdate",{layout:o,snapshot:n,delta:p,layoutDelta:d,hasLayoutChanged:m,hasRelativeLayoutChanged:g})}else if(e.isLead()){const{onExitComplete:o}=e.options;o&&o()}e.options.transition=void 0}function o5(e){e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function s5(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function a5(e){e.clearSnapshot()}function C0(e){e.clearMeasurements()}function l5(e){e.isLayoutDirty=!1}function u5(e){const{visualElement:n}=e.options;n&&n.getProps().onBeforeLayoutMeasure&&n.notify("BeforeLayoutMeasure"),e.resetTransform()}function T0(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function c5(e){e.resolveTargetDelta()}function d5(e){e.calcProjection()}function f5(e){e.resetSkewAndRotation()}function p5(e){e.removeLeadSnapshot()}function P0(e,n,i){e.translate=_e(n.translate,0,i),e.scale=_e(n.scale,1,i),e.origin=n.origin,e.originPoint=n.originPoint}function j0(e,n,i,o){e.min=_e(n.min,i.min,o),e.max=_e(n.max,i.max,o)}function h5(e,n,i,o){j0(e.x,n.x,i.x,o),j0(e.y,n.y,i.y,o)}function m5(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const g5={duration:.45,ease:[.4,0,.1,1]},R0=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),A0=R0("applewebkit/")&&!R0("chrome/")?Math.round:Ut;function D0(e){e.min=A0(e.min),e.max=A0(e.max)}function y5(e){D0(e.x),D0(e.y)}function $v(e,n,i){return e==="position"||e==="preserve-aspect"&&!vT(b0(n),b0(i),.2)}function x5(e){var n;return e!==e.root&&((n=e.scroll)==null?void 0:n.wasRoot)}const v5=Lv({attachResizeListener:(e,n)=>is(e,"resize",n),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Jc={current:void 0},Mv=Lv({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Jc.current){const e=new v5({});e.mount(window),e.setOptions({layoutScroll:!0}),Jc.current=e}return Jc.current},resetTransform:(e,n)=>{e.style.transform=n!==void 0?n:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),w5={pan:{Feature:_T},drag:{Feature:MT,ProjectionNode:Mv,MeasureLayout:Pv}};function I0(e,n,i){const{props:o}=e;e.animationState&&o.whileHover&&e.animationState.setActive("whileHover",i==="Start");const a="onHover"+i,u=o[a];u&&Be.postRender(()=>u(n,ds(n)))}class S5 extends dr{mount(){const{current:n}=this.node;n&&(this.unmount=QE(n,(i,o)=>(I0(this.node,o,"Start"),a=>I0(this.node,a,"End"))))}unmount(){}}class b5 extends dr{constructor(){super(...arguments),this.isActive=!1}onFocus(){let n=!1;try{n=this.node.current.matches(":focus-visible")}catch{n=!0}!n||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=ls(is(this.node.current,"focus",()=>this.onFocus()),is(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function L0(e,n,i){const{props:o}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&o.whileTap&&e.animationState.setActive("whileTap",i==="Start");const a="onTap"+(i==="End"?"":i),u=o[a];u&&Be.postRender(()=>u(n,ds(n)))}class k5 extends dr{mount(){const{current:n}=this.node;n&&(this.unmount=tC(n,(i,o)=>(L0(this.node,o,"Start"),(a,{success:u})=>L0(this.node,a,u?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const Nd=new WeakMap,Zc=new WeakMap,E5=e=>{const n=Nd.get(e.target);n&&n(e)},C5=e=>{e.forEach(E5)};function T5({root:e,...n}){const i=e||document;Zc.has(i)||Zc.set(i,{});const o=Zc.get(i),a=JSON.stringify(n);return o[a]||(o[a]=new IntersectionObserver(C5,{root:e,...n})),o[a]}function P5(e,n,i){const o=T5(n);return Nd.set(e,i),o.observe(e),()=>{Nd.delete(e),o.unobserve(e)}}const j5={some:0,all:1};class R5 extends dr{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:n={}}=this.node.getProps(),{root:i,margin:o,amount:a="some",once:u}=n,c={root:i?i.current:void 0,rootMargin:o,threshold:typeof a=="number"?a:j5[a]},d=p=>{const{isIntersecting:m}=p;if(this.isInView===m||(this.isInView=m,u&&!m&&this.hasEnteredView))return;m&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",m);const{onViewportEnter:g,onViewportLeave:x}=this.node.getProps(),w=m?g:x;w&&w(p)};return P5(this.node.current,c,d)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:n,prevProps:i}=this.node;["amount","margin","root"].some(A5(n,i))&&this.startObserver()}unmount(){}}function A5({viewport:e={}},{viewport:n={}}={}){return i=>e[i]!==n[i]}const D5={inView:{Feature:R5},tap:{Feature:k5},focus:{Feature:b5},hover:{Feature:S5}},I5={layout:{ProjectionNode:Mv,MeasureLayout:Pv}},Vd={current:null},_v={current:!1};function L5(){if(_v.current=!0,!!mf)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),n=()=>Vd.current=e.matches;e.addListener(n),n()}else Vd.current=!1}const $5=new WeakMap;function M5(e,n,i){for(const o in n){const a=n[o],u=i[o];if(gt(a))e.addValue(o,a);else if(gt(u))e.addValue(o,es(a,{owner:e}));else if(u!==a)if(e.hasValue(o)){const c=e.getValue(o);c.liveStyle===!0?c.jump(a):c.hasAnimated||c.set(a)}else{const c=e.getStaticValue(o);e.addValue(o,es(c!==void 0?c:a,{owner:e}))}}for(const o in i)n[o]===void 0&&e.removeValue(o);return n}const $0=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class _5{scrapeMotionValuesFromProps(n,i,o){return{}}constructor({parent:n,props:i,presenceContext:o,reducedMotionConfig:a,blockInitialAnimation:u,visualState:c},d={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=If,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const w=Tt.now();this.renderScheduledAt<w&&(this.renderScheduledAt=w,Be.render(this.render,!1,!0))};const{latestValues:p,renderState:m}=c;this.latestValues=p,this.baseTarget={...p},this.initialValues=i.initial?{...p}:{},this.renderState=m,this.parent=n,this.props=i,this.presenceContext=o,this.depth=n?n.depth+1:0,this.reducedMotionConfig=a,this.options=d,this.blockInitialAnimation=!!u,this.isControllingVariants=Pl(i),this.isVariantNode=rv(i),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(n&&n.current);const{willChange:g,...x}=this.scrapeMotionValuesFromProps(i,{},this);for(const w in x){const S=x[w];p[w]!==void 0&&gt(S)&&S.set(p[w],!1)}}mount(n){this.current=n,$5.set(n,this),this.projection&&!this.projection.instance&&this.projection.mount(n),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((i,o)=>this.bindToMotionValue(o,i)),_v.current||L5(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Vd.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){this.projection&&this.projection.unmount(),this.projection=void 0,ur(this.notifyUpdate),ur(this.render),this.valueSubscriptions.forEach(n=>n()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const n in this.events)this.events[n].clear();for(const n in this.features){const i=this.features[n];i&&(i.unmount(),i.isMounted=!1)}this.current=null}bindToMotionValue(n,i){this.valueSubscriptions.has(n)&&this.valueSubscriptions.get(n)();const o=zi.has(n);o&&this.onBindTransform&&this.onBindTransform();const a=i.on("change",d=>{this.latestValues[n]=d,this.props.onUpdate&&Be.preRender(this.notifyUpdate),o&&this.projection&&(this.projection.isTransformDirty=!0)}),u=i.on("renderRequest",this.scheduleRender);let c;window.MotionCheckAppearSync&&(c=window.MotionCheckAppearSync(this,n,i)),this.valueSubscriptions.set(n,()=>{a(),u(),c&&c(),i.owner&&i.stop()})}sortNodePosition(n){return!this.current||!this.sortInstanceNodePosition||this.type!==n.type?0:this.sortInstanceNodePosition(this.current,n.current)}updateFeatures(){let n="animation";for(n in $i){const i=$i[n];if(!i)continue;const{isEnabled:o,Feature:a}=i;if(!this.features[n]&&a&&o(this.props)&&(this.features[n]=new a(this)),this.features[n]){const u=this.features[n];u.isMounted?u.update():(u.mount(),u.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):ze()}getStaticValue(n){return this.latestValues[n]}setStaticValue(n,i){this.latestValues[n]=i}update(n,i){(n.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=n,this.prevPresenceContext=this.presenceContext,this.presenceContext=i;for(let o=0;o<$0.length;o++){const a=$0[o];this.propEventSubscriptions[a]&&(this.propEventSubscriptions[a](),delete this.propEventSubscriptions[a]);const u="on"+a,c=n[u];c&&(this.propEventSubscriptions[a]=this.on(a,c))}this.prevMotionValues=M5(this,this.scrapeMotionValuesFromProps(n,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(n){return this.props.variants?this.props.variants[n]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(n){const i=this.getClosestVariantNode();if(i)return i.variantChildren&&i.variantChildren.add(n),()=>i.variantChildren.delete(n)}addValue(n,i){const o=this.values.get(n);i!==o&&(o&&this.removeValue(n),this.bindToMotionValue(n,i),this.values.set(n,i),this.latestValues[n]=i.get())}removeValue(n){this.values.delete(n);const i=this.valueSubscriptions.get(n);i&&(i(),this.valueSubscriptions.delete(n)),delete this.latestValues[n],this.removeValueFromRenderState(n,this.renderState)}hasValue(n){return this.values.has(n)}getValue(n,i){if(this.props.values&&this.props.values[n])return this.props.values[n];let o=this.values.get(n);return o===void 0&&i!==void 0&&(o=es(i===null?void 0:i,{owner:this}),this.addValue(n,o)),o}readValue(n,i){let o=this.latestValues[n]!==void 0||!this.current?this.latestValues[n]:this.getBaseTargetFromProps(this.props,n)??this.readValueFromInstance(this.current,n,this.options);return o!=null&&(typeof o=="string"&&(px(o)||hx(o))?o=parseFloat(o):!oC(o)&&cr.test(i)&&(o=Xx(n,i)),this.setBaseTarget(n,gt(o)?o.get():o)),gt(o)?o.get():o}setBaseTarget(n,i){this.baseTarget[n]=i}getBaseTarget(n){var u;const{initial:i}=this.props;let o;if(typeof i=="string"||typeof i=="object"){const c=Uf(this.props,i,(u=this.presenceContext)==null?void 0:u.custom);c&&(o=c[n])}if(i&&o!==void 0)return o;const a=this.getBaseTargetFromProps(this.props,n);return a!==void 0&&!gt(a)?a:this.initialValues[n]!==void 0&&o===void 0?void 0:this.baseTarget[n]}on(n,i){return this.events[n]||(this.events[n]=new Sf),this.events[n].add(i)}notify(n,...i){this.events[n]&&this.events[n].notify(...i)}}class Bv extends _5{constructor(){super(...arguments),this.KeyframeResolver=YE}sortInstanceNodePosition(n,i){return n.compareDocumentPosition(i)&2?1:-1}getBaseTargetFromProps(n,i){return n.style?n.style[i]:void 0}removeValueFromRenderState(n,{vars:i,style:o}){delete i[n],delete o[n]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:n}=this.props;gt(n)&&(this.childSubscription=n.on("change",i=>{this.current&&(this.current.textContent=`${i}`)}))}}function Ov(e,{style:n,vars:i},o,a){Object.assign(e.style,n,a&&a.getProjectionStyles(o));for(const u in i)e.style.setProperty(u,i[u])}function B5(e){return window.getComputedStyle(e)}class O5 extends Bv{constructor(){super(...arguments),this.type="html",this.renderInstance=Ov}readValueFromInstance(n,i){if(zi.has(i))return pE(n,i);{const o=B5(n),a=(Ef(i)?o.getPropertyValue(i):o[i])||0;return typeof a=="string"?a.trim():a}}measureInstanceViewportBox(n,{transformPagePoint:i}){return kv(n,i)}build(n,i,o){Nf(n,i,o.transformTemplate)}scrapeMotionValuesFromProps(n,i,o){return Wf(n,i,o)}}const Fv=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function F5(e,n,i,o){Ov(e,n,void 0,o);for(const a in n.attrs)e.setAttribute(Fv.has(a)?a:Ff(a),n.attrs[a])}class N5 extends Bv{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=ze}getBaseTargetFromProps(n,i){return n[i]}readValueFromInstance(n,i){if(zi.has(i)){const o=qx(i);return o&&o.default||0}return i=Fv.has(i)?i:Ff(i),n.getAttribute(i)}scrapeMotionValuesFromProps(n,i,o){return pv(n,i,o)}build(n,i,o){uv(n,i,this.isSVGTag,o.transformTemplate)}renderInstance(n,i,o,a){F5(n,i,o,a)}mount(n){this.isSVGTag=dv(n.tagName),super.mount(n)}}const V5=(e,n)=>zf(e)?new N5(n):new O5(n,{allowProjection:e!==b.Fragment}),z5=FC({...dT,...D5,...w5,...I5},V5),q=cC(z5);function Nv(e,n){return function(){return e.apply(n,arguments)}}const{toString:U5}=Object.prototype,{getPrototypeOf:Kf}=Object,{iterator:jl,toStringTag:Vv}=Symbol,Rl=(e=>n=>{const i=U5.call(n);return e[i]||(e[i]=i.slice(8,-1).toLowerCase())})(Object.create(null)),sn=e=>(e=e.toLowerCase(),n=>Rl(n)===e),Al=e=>n=>typeof n===e,{isArray:Ui}=Array,os=Al("undefined");function W5(e){return e!==null&&!os(e)&&e.constructor!==null&&!os(e.constructor)&&Pt(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const zv=sn("ArrayBuffer");function H5(e){let n;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?n=ArrayBuffer.isView(e):n=e&&e.buffer&&zv(e.buffer),n}const K5=Al("string"),Pt=Al("function"),Uv=Al("number"),Dl=e=>e!==null&&typeof e=="object",G5=e=>e===!0||e===!1,Ja=e=>{if(Rl(e)!=="object")return!1;const n=Kf(e);return(n===null||n===Object.prototype||Object.getPrototypeOf(n)===null)&&!(Vv in e)&&!(jl in e)},Y5=sn("Date"),q5=sn("File"),X5=sn("Blob"),Q5=sn("FileList"),J5=e=>Dl(e)&&Pt(e.pipe),Z5=e=>{let n;return e&&(typeof FormData=="function"&&e instanceof FormData||Pt(e.append)&&((n=Rl(e))==="formdata"||n==="object"&&Pt(e.toString)&&e.toString()==="[object FormData]"))},eP=sn("URLSearchParams"),[tP,nP,rP,iP]=["ReadableStream","Request","Response","Headers"].map(sn),oP=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function fs(e,n,{allOwnKeys:i=!1}={}){if(e===null||typeof e>"u")return;let o,a;if(typeof e!="object"&&(e=[e]),Ui(e))for(o=0,a=e.length;o<a;o++)n.call(null,e[o],o,e);else{const u=i?Object.getOwnPropertyNames(e):Object.keys(e),c=u.length;let d;for(o=0;o<c;o++)d=u[o],n.call(null,e[d],d,e)}}function Wv(e,n){n=n.toLowerCase();const i=Object.keys(e);let o=i.length,a;for(;o-- >0;)if(a=i[o],n===a.toLowerCase())return a;return null}const $r=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Hv=e=>!os(e)&&e!==$r;function zd(){const{caseless:e}=Hv(this)&&this||{},n={},i=(o,a)=>{const u=e&&Wv(n,a)||a;Ja(n[u])&&Ja(o)?n[u]=zd(n[u],o):Ja(o)?n[u]=zd({},o):Ui(o)?n[u]=o.slice():n[u]=o};for(let o=0,a=arguments.length;o<a;o++)arguments[o]&&fs(arguments[o],i);return n}const sP=(e,n,i,{allOwnKeys:o}={})=>(fs(n,(a,u)=>{i&&Pt(a)?e[u]=Nv(a,i):e[u]=a},{allOwnKeys:o}),e),aP=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),lP=(e,n,i,o)=>{e.prototype=Object.create(n.prototype,o),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:n.prototype}),i&&Object.assign(e.prototype,i)},uP=(e,n,i,o)=>{let a,u,c;const d={};if(n=n||{},e==null)return n;do{for(a=Object.getOwnPropertyNames(e),u=a.length;u-- >0;)c=a[u],(!o||o(c,e,n))&&!d[c]&&(n[c]=e[c],d[c]=!0);e=i!==!1&&Kf(e)}while(e&&(!i||i(e,n))&&e!==Object.prototype);return n},cP=(e,n,i)=>{e=String(e),(i===void 0||i>e.length)&&(i=e.length),i-=n.length;const o=e.indexOf(n,i);return o!==-1&&o===i},dP=e=>{if(!e)return null;if(Ui(e))return e;let n=e.length;if(!Uv(n))return null;const i=new Array(n);for(;n-- >0;)i[n]=e[n];return i},fP=(e=>n=>e&&n instanceof e)(typeof Uint8Array<"u"&&Kf(Uint8Array)),pP=(e,n)=>{const o=(e&&e[jl]).call(e);let a;for(;(a=o.next())&&!a.done;){const u=a.value;n.call(e,u[0],u[1])}},hP=(e,n)=>{let i;const o=[];for(;(i=e.exec(n))!==null;)o.push(i);return o},mP=sn("HTMLFormElement"),gP=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(i,o,a){return o.toUpperCase()+a}),M0=(({hasOwnProperty:e})=>(n,i)=>e.call(n,i))(Object.prototype),yP=sn("RegExp"),Kv=(e,n)=>{const i=Object.getOwnPropertyDescriptors(e),o={};fs(i,(a,u)=>{let c;(c=n(a,u,e))!==!1&&(o[u]=c||a)}),Object.defineProperties(e,o)},xP=e=>{Kv(e,(n,i)=>{if(Pt(e)&&["arguments","caller","callee"].indexOf(i)!==-1)return!1;const o=e[i];if(Pt(o)){if(n.enumerable=!1,"writable"in n){n.writable=!1;return}n.set||(n.set=()=>{throw Error("Can not rewrite read-only method '"+i+"'")})}})},vP=(e,n)=>{const i={},o=a=>{a.forEach(u=>{i[u]=!0})};return Ui(e)?o(e):o(String(e).split(n)),i},wP=()=>{},SP=(e,n)=>e!=null&&Number.isFinite(e=+e)?e:n;function bP(e){return!!(e&&Pt(e.append)&&e[Vv]==="FormData"&&e[jl])}const kP=e=>{const n=new Array(10),i=(o,a)=>{if(Dl(o)){if(n.indexOf(o)>=0)return;if(!("toJSON"in o)){n[a]=o;const u=Ui(o)?[]:{};return fs(o,(c,d)=>{const p=i(c,a+1);!os(p)&&(u[d]=p)}),n[a]=void 0,u}}return o};return i(e,0)},EP=sn("AsyncFunction"),CP=e=>e&&(Dl(e)||Pt(e))&&Pt(e.then)&&Pt(e.catch),Gv=((e,n)=>e?setImmediate:n?((i,o)=>($r.addEventListener("message",({source:a,data:u})=>{a===$r&&u===i&&o.length&&o.shift()()},!1),a=>{o.push(a),$r.postMessage(i,"*")}))(`axios@${Math.random()}`,[]):i=>setTimeout(i))(typeof setImmediate=="function",Pt($r.postMessage)),TP=typeof queueMicrotask<"u"?queueMicrotask.bind($r):typeof process<"u"&&process.nextTick||Gv,PP=e=>e!=null&&Pt(e[jl]),B={isArray:Ui,isArrayBuffer:zv,isBuffer:W5,isFormData:Z5,isArrayBufferView:H5,isString:K5,isNumber:Uv,isBoolean:G5,isObject:Dl,isPlainObject:Ja,isReadableStream:tP,isRequest:nP,isResponse:rP,isHeaders:iP,isUndefined:os,isDate:Y5,isFile:q5,isBlob:X5,isRegExp:yP,isFunction:Pt,isStream:J5,isURLSearchParams:eP,isTypedArray:fP,isFileList:Q5,forEach:fs,merge:zd,extend:sP,trim:oP,stripBOM:aP,inherits:lP,toFlatObject:uP,kindOf:Rl,kindOfTest:sn,endsWith:cP,toArray:dP,forEachEntry:pP,matchAll:hP,isHTMLForm:mP,hasOwnProperty:M0,hasOwnProp:M0,reduceDescriptors:Kv,freezeMethods:xP,toObjectSet:vP,toCamelCase:gP,noop:wP,toFiniteNumber:SP,findKey:Wv,global:$r,isContextDefined:Hv,isSpecCompliantForm:bP,toJSONObject:kP,isAsyncFn:EP,isThenable:CP,setImmediate:Gv,asap:TP,isIterable:PP};function fe(e,n,i,o,a){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",n&&(this.code=n),i&&(this.config=i),o&&(this.request=o),a&&(this.response=a,this.status=a.status?a.status:null)}B.inherits(fe,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:B.toJSONObject(this.config),code:this.code,status:this.status}}});const Yv=fe.prototype,qv={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{qv[e]={value:e}});Object.defineProperties(fe,qv);Object.defineProperty(Yv,"isAxiosError",{value:!0});fe.from=(e,n,i,o,a,u)=>{const c=Object.create(Yv);return B.toFlatObject(e,c,function(p){return p!==Error.prototype},d=>d!=="isAxiosError"),fe.call(c,e.message,n,i,o,a),c.cause=e,c.name=e.name,u&&Object.assign(c,u),c};const jP=null;function Ud(e){return B.isPlainObject(e)||B.isArray(e)}function Xv(e){return B.endsWith(e,"[]")?e.slice(0,-2):e}function _0(e,n,i){return e?e.concat(n).map(function(a,u){return a=Xv(a),!i&&u?"["+a+"]":a}).join(i?".":""):n}function RP(e){return B.isArray(e)&&!e.some(Ud)}const AP=B.toFlatObject(B,{},null,function(n){return/^is[A-Z]/.test(n)});function Il(e,n,i){if(!B.isObject(e))throw new TypeError("target must be an object");n=n||new FormData,i=B.toFlatObject(i,{metaTokens:!0,dots:!1,indexes:!1},!1,function(T,E){return!B.isUndefined(E[T])});const o=i.metaTokens,a=i.visitor||g,u=i.dots,c=i.indexes,p=(i.Blob||typeof Blob<"u"&&Blob)&&B.isSpecCompliantForm(n);if(!B.isFunction(a))throw new TypeError("visitor must be a function");function m(k){if(k===null)return"";if(B.isDate(k))return k.toISOString();if(!p&&B.isBlob(k))throw new fe("Blob is not supported. Use a Buffer instead.");return B.isArrayBuffer(k)||B.isTypedArray(k)?p&&typeof Blob=="function"?new Blob([k]):Buffer.from(k):k}function g(k,T,E){let P=k;if(k&&!E&&typeof k=="object"){if(B.endsWith(T,"{}"))T=o?T:T.slice(0,-2),k=JSON.stringify(k);else if(B.isArray(k)&&RP(k)||(B.isFileList(k)||B.endsWith(T,"[]"))&&(P=B.toArray(k)))return T=Xv(T),P.forEach(function(D,F){!(B.isUndefined(D)||D===null)&&n.append(c===!0?_0([T],F,u):c===null?T:T+"[]",m(D))}),!1}return Ud(k)?!0:(n.append(_0(E,T,u),m(k)),!1)}const x=[],w=Object.assign(AP,{defaultVisitor:g,convertValue:m,isVisitable:Ud});function S(k,T){if(!B.isUndefined(k)){if(x.indexOf(k)!==-1)throw Error("Circular reference detected in "+T.join("."));x.push(k),B.forEach(k,function(P,$){(!(B.isUndefined(P)||P===null)&&a.call(n,P,B.isString($)?$.trim():$,T,w))===!0&&S(P,T?T.concat($):[$])}),x.pop()}}if(!B.isObject(e))throw new TypeError("data must be an object");return S(e),n}function B0(e){const n={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(o){return n[o]})}function Gf(e,n){this._pairs=[],e&&Il(e,this,n)}const Qv=Gf.prototype;Qv.append=function(n,i){this._pairs.push([n,i])};Qv.toString=function(n){const i=n?function(o){return n.call(this,o,B0)}:B0;return this._pairs.map(function(a){return i(a[0])+"="+i(a[1])},"").join("&")};function DP(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Jv(e,n,i){if(!n)return e;const o=i&&i.encode||DP;B.isFunction(i)&&(i={serialize:i});const a=i&&i.serialize;let u;if(a?u=a(n,i):u=B.isURLSearchParams(n)?n.toString():new Gf(n,i).toString(o),u){const c=e.indexOf("#");c!==-1&&(e=e.slice(0,c)),e+=(e.indexOf("?")===-1?"?":"&")+u}return e}class O0{constructor(){this.handlers=[]}use(n,i,o){return this.handlers.push({fulfilled:n,rejected:i,synchronous:o?o.synchronous:!1,runWhen:o?o.runWhen:null}),this.handlers.length-1}eject(n){this.handlers[n]&&(this.handlers[n]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(n){B.forEach(this.handlers,function(o){o!==null&&n(o)})}}const Zv={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},IP=typeof URLSearchParams<"u"?URLSearchParams:Gf,LP=typeof FormData<"u"?FormData:null,$P=typeof Blob<"u"?Blob:null,MP={isBrowser:!0,classes:{URLSearchParams:IP,FormData:LP,Blob:$P},protocols:["http","https","file","blob","url","data"]},Yf=typeof window<"u"&&typeof document<"u",Wd=typeof navigator=="object"&&navigator||void 0,_P=Yf&&(!Wd||["ReactNative","NativeScript","NS"].indexOf(Wd.product)<0),BP=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",OP=Yf&&window.location.href||"http://localhost",FP=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Yf,hasStandardBrowserEnv:_P,hasStandardBrowserWebWorkerEnv:BP,navigator:Wd,origin:OP},Symbol.toStringTag,{value:"Module"})),mt={...FP,...MP};function NP(e,n){return Il(e,new mt.classes.URLSearchParams,Object.assign({visitor:function(i,o,a,u){return mt.isNode&&B.isBuffer(i)?(this.append(o,i.toString("base64")),!1):u.defaultVisitor.apply(this,arguments)}},n))}function VP(e){return B.matchAll(/\w+|\[(\w*)]/g,e).map(n=>n[0]==="[]"?"":n[1]||n[0])}function zP(e){const n={},i=Object.keys(e);let o;const a=i.length;let u;for(o=0;o<a;o++)u=i[o],n[u]=e[u];return n}function e1(e){function n(i,o,a,u){let c=i[u++];if(c==="__proto__")return!0;const d=Number.isFinite(+c),p=u>=i.length;return c=!c&&B.isArray(a)?a.length:c,p?(B.hasOwnProp(a,c)?a[c]=[a[c],o]:a[c]=o,!d):((!a[c]||!B.isObject(a[c]))&&(a[c]=[]),n(i,o,a[c],u)&&B.isArray(a[c])&&(a[c]=zP(a[c])),!d)}if(B.isFormData(e)&&B.isFunction(e.entries)){const i={};return B.forEachEntry(e,(o,a)=>{n(VP(o),a,i,0)}),i}return null}function UP(e,n,i){if(B.isString(e))try{return(n||JSON.parse)(e),B.trim(e)}catch(o){if(o.name!=="SyntaxError")throw o}return(i||JSON.stringify)(e)}const ps={transitional:Zv,adapter:["xhr","http","fetch"],transformRequest:[function(n,i){const o=i.getContentType()||"",a=o.indexOf("application/json")>-1,u=B.isObject(n);if(u&&B.isHTMLForm(n)&&(n=new FormData(n)),B.isFormData(n))return a?JSON.stringify(e1(n)):n;if(B.isArrayBuffer(n)||B.isBuffer(n)||B.isStream(n)||B.isFile(n)||B.isBlob(n)||B.isReadableStream(n))return n;if(B.isArrayBufferView(n))return n.buffer;if(B.isURLSearchParams(n))return i.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),n.toString();let d;if(u){if(o.indexOf("application/x-www-form-urlencoded")>-1)return NP(n,this.formSerializer).toString();if((d=B.isFileList(n))||o.indexOf("multipart/form-data")>-1){const p=this.env&&this.env.FormData;return Il(d?{"files[]":n}:n,p&&new p,this.formSerializer)}}return u||a?(i.setContentType("application/json",!1),UP(n)):n}],transformResponse:[function(n){const i=this.transitional||ps.transitional,o=i&&i.forcedJSONParsing,a=this.responseType==="json";if(B.isResponse(n)||B.isReadableStream(n))return n;if(n&&B.isString(n)&&(o&&!this.responseType||a)){const c=!(i&&i.silentJSONParsing)&&a;try{return JSON.parse(n)}catch(d){if(c)throw d.name==="SyntaxError"?fe.from(d,fe.ERR_BAD_RESPONSE,this,null,this.response):d}}return n}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:mt.classes.FormData,Blob:mt.classes.Blob},validateStatus:function(n){return n>=200&&n<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};B.forEach(["delete","get","head","post","put","patch"],e=>{ps.headers[e]={}});const WP=B.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),HP=e=>{const n={};let i,o,a;return e&&e.split(`
`).forEach(function(c){a=c.indexOf(":"),i=c.substring(0,a).trim().toLowerCase(),o=c.substring(a+1).trim(),!(!i||n[i]&&WP[i])&&(i==="set-cookie"?n[i]?n[i].push(o):n[i]=[o]:n[i]=n[i]?n[i]+", "+o:o)}),n},F0=Symbol("internals");function Mo(e){return e&&String(e).trim().toLowerCase()}function Za(e){return e===!1||e==null?e:B.isArray(e)?e.map(Za):String(e)}function KP(e){const n=Object.create(null),i=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let o;for(;o=i.exec(e);)n[o[1]]=o[2];return n}const GP=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function ed(e,n,i,o,a){if(B.isFunction(o))return o.call(this,n,i);if(a&&(n=i),!!B.isString(n)){if(B.isString(o))return n.indexOf(o)!==-1;if(B.isRegExp(o))return o.test(n)}}function YP(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(n,i,o)=>i.toUpperCase()+o)}function qP(e,n){const i=B.toCamelCase(" "+n);["get","set","has"].forEach(o=>{Object.defineProperty(e,o+i,{value:function(a,u,c){return this[o].call(this,n,a,u,c)},configurable:!0})})}let jt=class{constructor(n){n&&this.set(n)}set(n,i,o){const a=this;function u(d,p,m){const g=Mo(p);if(!g)throw new Error("header name must be a non-empty string");const x=B.findKey(a,g);(!x||a[x]===void 0||m===!0||m===void 0&&a[x]!==!1)&&(a[x||p]=Za(d))}const c=(d,p)=>B.forEach(d,(m,g)=>u(m,g,p));if(B.isPlainObject(n)||n instanceof this.constructor)c(n,i);else if(B.isString(n)&&(n=n.trim())&&!GP(n))c(HP(n),i);else if(B.isObject(n)&&B.isIterable(n)){let d={},p,m;for(const g of n){if(!B.isArray(g))throw TypeError("Object iterator must return a key-value pair");d[m=g[0]]=(p=d[m])?B.isArray(p)?[...p,g[1]]:[p,g[1]]:g[1]}c(d,i)}else n!=null&&u(i,n,o);return this}get(n,i){if(n=Mo(n),n){const o=B.findKey(this,n);if(o){const a=this[o];if(!i)return a;if(i===!0)return KP(a);if(B.isFunction(i))return i.call(this,a,o);if(B.isRegExp(i))return i.exec(a);throw new TypeError("parser must be boolean|regexp|function")}}}has(n,i){if(n=Mo(n),n){const o=B.findKey(this,n);return!!(o&&this[o]!==void 0&&(!i||ed(this,this[o],o,i)))}return!1}delete(n,i){const o=this;let a=!1;function u(c){if(c=Mo(c),c){const d=B.findKey(o,c);d&&(!i||ed(o,o[d],d,i))&&(delete o[d],a=!0)}}return B.isArray(n)?n.forEach(u):u(n),a}clear(n){const i=Object.keys(this);let o=i.length,a=!1;for(;o--;){const u=i[o];(!n||ed(this,this[u],u,n,!0))&&(delete this[u],a=!0)}return a}normalize(n){const i=this,o={};return B.forEach(this,(a,u)=>{const c=B.findKey(o,u);if(c){i[c]=Za(a),delete i[u];return}const d=n?YP(u):String(u).trim();d!==u&&delete i[u],i[d]=Za(a),o[d]=!0}),this}concat(...n){return this.constructor.concat(this,...n)}toJSON(n){const i=Object.create(null);return B.forEach(this,(o,a)=>{o!=null&&o!==!1&&(i[a]=n&&B.isArray(o)?o.join(", "):o)}),i}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([n,i])=>n+": "+i).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(n){return n instanceof this?n:new this(n)}static concat(n,...i){const o=new this(n);return i.forEach(a=>o.set(a)),o}static accessor(n){const o=(this[F0]=this[F0]={accessors:{}}).accessors,a=this.prototype;function u(c){const d=Mo(c);o[d]||(qP(a,c),o[d]=!0)}return B.isArray(n)?n.forEach(u):u(n),this}};jt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);B.reduceDescriptors(jt.prototype,({value:e},n)=>{let i=n[0].toUpperCase()+n.slice(1);return{get:()=>e,set(o){this[i]=o}}});B.freezeMethods(jt);function td(e,n){const i=this||ps,o=n||i,a=jt.from(o.headers);let u=o.data;return B.forEach(e,function(d){u=d.call(i,u,a.normalize(),n?n.status:void 0)}),a.normalize(),u}function t1(e){return!!(e&&e.__CANCEL__)}function Wi(e,n,i){fe.call(this,e??"canceled",fe.ERR_CANCELED,n,i),this.name="CanceledError"}B.inherits(Wi,fe,{__CANCEL__:!0});function n1(e,n,i){const o=i.config.validateStatus;!i.status||!o||o(i.status)?e(i):n(new fe("Request failed with status code "+i.status,[fe.ERR_BAD_REQUEST,fe.ERR_BAD_RESPONSE][Math.floor(i.status/100)-4],i.config,i.request,i))}function XP(e){const n=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return n&&n[1]||""}function QP(e,n){e=e||10;const i=new Array(e),o=new Array(e);let a=0,u=0,c;return n=n!==void 0?n:1e3,function(p){const m=Date.now(),g=o[u];c||(c=m),i[a]=p,o[a]=m;let x=u,w=0;for(;x!==a;)w+=i[x++],x=x%e;if(a=(a+1)%e,a===u&&(u=(u+1)%e),m-c<n)return;const S=g&&m-g;return S?Math.round(w*1e3/S):void 0}}function JP(e,n){let i=0,o=1e3/n,a,u;const c=(m,g=Date.now())=>{i=g,a=null,u&&(clearTimeout(u),u=null),e.apply(null,m)};return[(...m)=>{const g=Date.now(),x=g-i;x>=o?c(m,g):(a=m,u||(u=setTimeout(()=>{u=null,c(a)},o-x)))},()=>a&&c(a)]}const pl=(e,n,i=3)=>{let o=0;const a=QP(50,250);return JP(u=>{const c=u.loaded,d=u.lengthComputable?u.total:void 0,p=c-o,m=a(p),g=c<=d;o=c;const x={loaded:c,total:d,progress:d?c/d:void 0,bytes:p,rate:m||void 0,estimated:m&&d&&g?(d-c)/m:void 0,event:u,lengthComputable:d!=null,[n?"download":"upload"]:!0};e(x)},i)},N0=(e,n)=>{const i=e!=null;return[o=>n[0]({lengthComputable:i,total:e,loaded:o}),n[1]]},V0=e=>(...n)=>B.asap(()=>e(...n)),ZP=mt.hasStandardBrowserEnv?((e,n)=>i=>(i=new URL(i,mt.origin),e.protocol===i.protocol&&e.host===i.host&&(n||e.port===i.port)))(new URL(mt.origin),mt.navigator&&/(msie|trident)/i.test(mt.navigator.userAgent)):()=>!0,ej=mt.hasStandardBrowserEnv?{write(e,n,i,o,a,u){const c=[e+"="+encodeURIComponent(n)];B.isNumber(i)&&c.push("expires="+new Date(i).toGMTString()),B.isString(o)&&c.push("path="+o),B.isString(a)&&c.push("domain="+a),u===!0&&c.push("secure"),document.cookie=c.join("; ")},read(e){const n=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return n?decodeURIComponent(n[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function tj(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function nj(e,n){return n?e.replace(/\/?\/$/,"")+"/"+n.replace(/^\/+/,""):e}function r1(e,n,i){let o=!tj(n);return e&&(o||i==!1)?nj(e,n):n}const z0=e=>e instanceof jt?{...e}:e;function Vr(e,n){n=n||{};const i={};function o(m,g,x,w){return B.isPlainObject(m)&&B.isPlainObject(g)?B.merge.call({caseless:w},m,g):B.isPlainObject(g)?B.merge({},g):B.isArray(g)?g.slice():g}function a(m,g,x,w){if(B.isUndefined(g)){if(!B.isUndefined(m))return o(void 0,m,x,w)}else return o(m,g,x,w)}function u(m,g){if(!B.isUndefined(g))return o(void 0,g)}function c(m,g){if(B.isUndefined(g)){if(!B.isUndefined(m))return o(void 0,m)}else return o(void 0,g)}function d(m,g,x){if(x in n)return o(m,g);if(x in e)return o(void 0,m)}const p={url:u,method:u,data:u,baseURL:c,transformRequest:c,transformResponse:c,paramsSerializer:c,timeout:c,timeoutMessage:c,withCredentials:c,withXSRFToken:c,adapter:c,responseType:c,xsrfCookieName:c,xsrfHeaderName:c,onUploadProgress:c,onDownloadProgress:c,decompress:c,maxContentLength:c,maxBodyLength:c,beforeRedirect:c,transport:c,httpAgent:c,httpsAgent:c,cancelToken:c,socketPath:c,responseEncoding:c,validateStatus:d,headers:(m,g,x)=>a(z0(m),z0(g),x,!0)};return B.forEach(Object.keys(Object.assign({},e,n)),function(g){const x=p[g]||a,w=x(e[g],n[g],g);B.isUndefined(w)&&x!==d||(i[g]=w)}),i}const i1=e=>{const n=Vr({},e);let{data:i,withXSRFToken:o,xsrfHeaderName:a,xsrfCookieName:u,headers:c,auth:d}=n;n.headers=c=jt.from(c),n.url=Jv(r1(n.baseURL,n.url,n.allowAbsoluteUrls),e.params,e.paramsSerializer),d&&c.set("Authorization","Basic "+btoa((d.username||"")+":"+(d.password?unescape(encodeURIComponent(d.password)):"")));let p;if(B.isFormData(i)){if(mt.hasStandardBrowserEnv||mt.hasStandardBrowserWebWorkerEnv)c.setContentType(void 0);else if((p=c.getContentType())!==!1){const[m,...g]=p?p.split(";").map(x=>x.trim()).filter(Boolean):[];c.setContentType([m||"multipart/form-data",...g].join("; "))}}if(mt.hasStandardBrowserEnv&&(o&&B.isFunction(o)&&(o=o(n)),o||o!==!1&&ZP(n.url))){const m=a&&u&&ej.read(u);m&&c.set(a,m)}return n},rj=typeof XMLHttpRequest<"u",ij=rj&&function(e){return new Promise(function(i,o){const a=i1(e);let u=a.data;const c=jt.from(a.headers).normalize();let{responseType:d,onUploadProgress:p,onDownloadProgress:m}=a,g,x,w,S,k;function T(){S&&S(),k&&k(),a.cancelToken&&a.cancelToken.unsubscribe(g),a.signal&&a.signal.removeEventListener("abort",g)}let E=new XMLHttpRequest;E.open(a.method.toUpperCase(),a.url,!0),E.timeout=a.timeout;function P(){if(!E)return;const D=jt.from("getAllResponseHeaders"in E&&E.getAllResponseHeaders()),O={data:!d||d==="text"||d==="json"?E.responseText:E.response,status:E.status,statusText:E.statusText,headers:D,config:e,request:E};n1(function(W){i(W),T()},function(W){o(W),T()},O),E=null}"onloadend"in E?E.onloadend=P:E.onreadystatechange=function(){!E||E.readyState!==4||E.status===0&&!(E.responseURL&&E.responseURL.indexOf("file:")===0)||setTimeout(P)},E.onabort=function(){E&&(o(new fe("Request aborted",fe.ECONNABORTED,e,E)),E=null)},E.onerror=function(){o(new fe("Network Error",fe.ERR_NETWORK,e,E)),E=null},E.ontimeout=function(){let F=a.timeout?"timeout of "+a.timeout+"ms exceeded":"timeout exceeded";const O=a.transitional||Zv;a.timeoutErrorMessage&&(F=a.timeoutErrorMessage),o(new fe(F,O.clarifyTimeoutError?fe.ETIMEDOUT:fe.ECONNABORTED,e,E)),E=null},u===void 0&&c.setContentType(null),"setRequestHeader"in E&&B.forEach(c.toJSON(),function(F,O){E.setRequestHeader(O,F)}),B.isUndefined(a.withCredentials)||(E.withCredentials=!!a.withCredentials),d&&d!=="json"&&(E.responseType=a.responseType),m&&([w,k]=pl(m,!0),E.addEventListener("progress",w)),p&&E.upload&&([x,S]=pl(p),E.upload.addEventListener("progress",x),E.upload.addEventListener("loadend",S)),(a.cancelToken||a.signal)&&(g=D=>{E&&(o(!D||D.type?new Wi(null,e,E):D),E.abort(),E=null)},a.cancelToken&&a.cancelToken.subscribe(g),a.signal&&(a.signal.aborted?g():a.signal.addEventListener("abort",g)));const $=XP(a.url);if($&&mt.protocols.indexOf($)===-1){o(new fe("Unsupported protocol "+$+":",fe.ERR_BAD_REQUEST,e));return}E.send(u||null)})},oj=(e,n)=>{const{length:i}=e=e?e.filter(Boolean):[];if(n||i){let o=new AbortController,a;const u=function(m){if(!a){a=!0,d();const g=m instanceof Error?m:this.reason;o.abort(g instanceof fe?g:new Wi(g instanceof Error?g.message:g))}};let c=n&&setTimeout(()=>{c=null,u(new fe(`timeout ${n} of ms exceeded`,fe.ETIMEDOUT))},n);const d=()=>{e&&(c&&clearTimeout(c),c=null,e.forEach(m=>{m.unsubscribe?m.unsubscribe(u):m.removeEventListener("abort",u)}),e=null)};e.forEach(m=>m.addEventListener("abort",u));const{signal:p}=o;return p.unsubscribe=()=>B.asap(d),p}},sj=function*(e,n){let i=e.byteLength;if(i<n){yield e;return}let o=0,a;for(;o<i;)a=o+n,yield e.slice(o,a),o=a},aj=async function*(e,n){for await(const i of lj(e))yield*sj(i,n)},lj=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const n=e.getReader();try{for(;;){const{done:i,value:o}=await n.read();if(i)break;yield o}}finally{await n.cancel()}},U0=(e,n,i,o)=>{const a=aj(e,n);let u=0,c,d=p=>{c||(c=!0,o&&o(p))};return new ReadableStream({async pull(p){try{const{done:m,value:g}=await a.next();if(m){d(),p.close();return}let x=g.byteLength;if(i){let w=u+=x;i(w)}p.enqueue(new Uint8Array(g))}catch(m){throw d(m),m}},cancel(p){return d(p),a.return()}},{highWaterMark:2})},Ll=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",o1=Ll&&typeof ReadableStream=="function",uj=Ll&&(typeof TextEncoder=="function"?(e=>n=>e.encode(n))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),s1=(e,...n)=>{try{return!!e(...n)}catch{return!1}},cj=o1&&s1(()=>{let e=!1;const n=new Request(mt.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!n}),W0=64*1024,Hd=o1&&s1(()=>B.isReadableStream(new Response("").body)),hl={stream:Hd&&(e=>e.body)};Ll&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(n=>{!hl[n]&&(hl[n]=B.isFunction(e[n])?i=>i[n]():(i,o)=>{throw new fe(`Response type '${n}' is not supported`,fe.ERR_NOT_SUPPORT,o)})})})(new Response);const dj=async e=>{if(e==null)return 0;if(B.isBlob(e))return e.size;if(B.isSpecCompliantForm(e))return(await new Request(mt.origin,{method:"POST",body:e}).arrayBuffer()).byteLength;if(B.isArrayBufferView(e)||B.isArrayBuffer(e))return e.byteLength;if(B.isURLSearchParams(e)&&(e=e+""),B.isString(e))return(await uj(e)).byteLength},fj=async(e,n)=>{const i=B.toFiniteNumber(e.getContentLength());return i??dj(n)},pj=Ll&&(async e=>{let{url:n,method:i,data:o,signal:a,cancelToken:u,timeout:c,onDownloadProgress:d,onUploadProgress:p,responseType:m,headers:g,withCredentials:x="same-origin",fetchOptions:w}=i1(e);m=m?(m+"").toLowerCase():"text";let S=oj([a,u&&u.toAbortSignal()],c),k;const T=S&&S.unsubscribe&&(()=>{S.unsubscribe()});let E;try{if(p&&cj&&i!=="get"&&i!=="head"&&(E=await fj(g,o))!==0){let O=new Request(n,{method:"POST",body:o,duplex:"half"}),V;if(B.isFormData(o)&&(V=O.headers.get("content-type"))&&g.setContentType(V),O.body){const[W,H]=N0(E,pl(V0(p)));o=U0(O.body,W0,W,H)}}B.isString(x)||(x=x?"include":"omit");const P="credentials"in Request.prototype;k=new Request(n,{...w,signal:S,method:i.toUpperCase(),headers:g.normalize().toJSON(),body:o,duplex:"half",credentials:P?x:void 0});let $=await fetch(k);const D=Hd&&(m==="stream"||m==="response");if(Hd&&(d||D&&T)){const O={};["status","statusText","headers"].forEach(Q=>{O[Q]=$[Q]});const V=B.toFiniteNumber($.headers.get("content-length")),[W,H]=d&&N0(V,pl(V0(d),!0))||[];$=new Response(U0($.body,W0,W,()=>{H&&H(),T&&T()}),O)}m=m||"text";let F=await hl[B.findKey(hl,m)||"text"]($,e);return!D&&T&&T(),await new Promise((O,V)=>{n1(O,V,{data:F,headers:jt.from($.headers),status:$.status,statusText:$.statusText,config:e,request:k})})}catch(P){throw T&&T(),P&&P.name==="TypeError"&&/Load failed|fetch/i.test(P.message)?Object.assign(new fe("Network Error",fe.ERR_NETWORK,e,k),{cause:P.cause||P}):fe.from(P,P&&P.code,e,k)}}),Kd={http:jP,xhr:ij,fetch:pj};B.forEach(Kd,(e,n)=>{if(e){try{Object.defineProperty(e,"name",{value:n})}catch{}Object.defineProperty(e,"adapterName",{value:n})}});const H0=e=>`- ${e}`,hj=e=>B.isFunction(e)||e===null||e===!1,a1={getAdapter:e=>{e=B.isArray(e)?e:[e];const{length:n}=e;let i,o;const a={};for(let u=0;u<n;u++){i=e[u];let c;if(o=i,!hj(i)&&(o=Kd[(c=String(i)).toLowerCase()],o===void 0))throw new fe(`Unknown adapter '${c}'`);if(o)break;a[c||"#"+u]=o}if(!o){const u=Object.entries(a).map(([d,p])=>`adapter ${d} `+(p===!1?"is not supported by the environment":"is not available in the build"));let c=n?u.length>1?`since :
`+u.map(H0).join(`
`):" "+H0(u[0]):"as no adapter specified";throw new fe("There is no suitable adapter to dispatch the request "+c,"ERR_NOT_SUPPORT")}return o},adapters:Kd};function nd(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Wi(null,e)}function K0(e){return nd(e),e.headers=jt.from(e.headers),e.data=td.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),a1.getAdapter(e.adapter||ps.adapter)(e).then(function(o){return nd(e),o.data=td.call(e,e.transformResponse,o),o.headers=jt.from(o.headers),o},function(o){return t1(o)||(nd(e),o&&o.response&&(o.response.data=td.call(e,e.transformResponse,o.response),o.response.headers=jt.from(o.response.headers))),Promise.reject(o)})}const l1="1.9.0",$l={};["object","boolean","number","function","string","symbol"].forEach((e,n)=>{$l[e]=function(o){return typeof o===e||"a"+(n<1?"n ":" ")+e}});const G0={};$l.transitional=function(n,i,o){function a(u,c){return"[Axios v"+l1+"] Transitional option '"+u+"'"+c+(o?". "+o:"")}return(u,c,d)=>{if(n===!1)throw new fe(a(c," has been removed"+(i?" in "+i:"")),fe.ERR_DEPRECATED);return i&&!G0[c]&&(G0[c]=!0,console.warn(a(c," has been deprecated since v"+i+" and will be removed in the near future"))),n?n(u,c,d):!0}};$l.spelling=function(n){return(i,o)=>(console.warn(`${o} is likely a misspelling of ${n}`),!0)};function mj(e,n,i){if(typeof e!="object")throw new fe("options must be an object",fe.ERR_BAD_OPTION_VALUE);const o=Object.keys(e);let a=o.length;for(;a-- >0;){const u=o[a],c=n[u];if(c){const d=e[u],p=d===void 0||c(d,u,e);if(p!==!0)throw new fe("option "+u+" must be "+p,fe.ERR_BAD_OPTION_VALUE);continue}if(i!==!0)throw new fe("Unknown option "+u,fe.ERR_BAD_OPTION)}}const el={assertOptions:mj,validators:$l},fn=el.validators;let Or=class{constructor(n){this.defaults=n||{},this.interceptors={request:new O0,response:new O0}}async request(n,i){try{return await this._request(n,i)}catch(o){if(o instanceof Error){let a={};Error.captureStackTrace?Error.captureStackTrace(a):a=new Error;const u=a.stack?a.stack.replace(/^.+\n/,""):"";try{o.stack?u&&!String(o.stack).endsWith(u.replace(/^.+\n.+\n/,""))&&(o.stack+=`
`+u):o.stack=u}catch{}}throw o}}_request(n,i){typeof n=="string"?(i=i||{},i.url=n):i=n||{},i=Vr(this.defaults,i);const{transitional:o,paramsSerializer:a,headers:u}=i;o!==void 0&&el.assertOptions(o,{silentJSONParsing:fn.transitional(fn.boolean),forcedJSONParsing:fn.transitional(fn.boolean),clarifyTimeoutError:fn.transitional(fn.boolean)},!1),a!=null&&(B.isFunction(a)?i.paramsSerializer={serialize:a}:el.assertOptions(a,{encode:fn.function,serialize:fn.function},!0)),i.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?i.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:i.allowAbsoluteUrls=!0),el.assertOptions(i,{baseUrl:fn.spelling("baseURL"),withXsrfToken:fn.spelling("withXSRFToken")},!0),i.method=(i.method||this.defaults.method||"get").toLowerCase();let c=u&&B.merge(u.common,u[i.method]);u&&B.forEach(["delete","get","head","post","put","patch","common"],k=>{delete u[k]}),i.headers=jt.concat(c,u);const d=[];let p=!0;this.interceptors.request.forEach(function(T){typeof T.runWhen=="function"&&T.runWhen(i)===!1||(p=p&&T.synchronous,d.unshift(T.fulfilled,T.rejected))});const m=[];this.interceptors.response.forEach(function(T){m.push(T.fulfilled,T.rejected)});let g,x=0,w;if(!p){const k=[K0.bind(this),void 0];for(k.unshift.apply(k,d),k.push.apply(k,m),w=k.length,g=Promise.resolve(i);x<w;)g=g.then(k[x++],k[x++]);return g}w=d.length;let S=i;for(x=0;x<w;){const k=d[x++],T=d[x++];try{S=k(S)}catch(E){T.call(this,E);break}}try{g=K0.call(this,S)}catch(k){return Promise.reject(k)}for(x=0,w=m.length;x<w;)g=g.then(m[x++],m[x++]);return g}getUri(n){n=Vr(this.defaults,n);const i=r1(n.baseURL,n.url,n.allowAbsoluteUrls);return Jv(i,n.params,n.paramsSerializer)}};B.forEach(["delete","get","head","options"],function(n){Or.prototype[n]=function(i,o){return this.request(Vr(o||{},{method:n,url:i,data:(o||{}).data}))}});B.forEach(["post","put","patch"],function(n){function i(o){return function(u,c,d){return this.request(Vr(d||{},{method:n,headers:o?{"Content-Type":"multipart/form-data"}:{},url:u,data:c}))}}Or.prototype[n]=i(),Or.prototype[n+"Form"]=i(!0)});let gj=class u1{constructor(n){if(typeof n!="function")throw new TypeError("executor must be a function.");let i;this.promise=new Promise(function(u){i=u});const o=this;this.promise.then(a=>{if(!o._listeners)return;let u=o._listeners.length;for(;u-- >0;)o._listeners[u](a);o._listeners=null}),this.promise.then=a=>{let u;const c=new Promise(d=>{o.subscribe(d),u=d}).then(a);return c.cancel=function(){o.unsubscribe(u)},c},n(function(u,c,d){o.reason||(o.reason=new Wi(u,c,d),i(o.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(n){if(this.reason){n(this.reason);return}this._listeners?this._listeners.push(n):this._listeners=[n]}unsubscribe(n){if(!this._listeners)return;const i=this._listeners.indexOf(n);i!==-1&&this._listeners.splice(i,1)}toAbortSignal(){const n=new AbortController,i=o=>{n.abort(o)};return this.subscribe(i),n.signal.unsubscribe=()=>this.unsubscribe(i),n.signal}static source(){let n;return{token:new u1(function(a){n=a}),cancel:n}}};function yj(e){return function(i){return e.apply(null,i)}}function xj(e){return B.isObject(e)&&e.isAxiosError===!0}const Gd={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Gd).forEach(([e,n])=>{Gd[n]=e});function c1(e){const n=new Or(e),i=Nv(Or.prototype.request,n);return B.extend(i,Or.prototype,n,{allOwnKeys:!0}),B.extend(i,n,null,{allOwnKeys:!0}),i.create=function(a){return c1(Vr(e,a))},i}const ke=c1(ps);ke.Axios=Or;ke.CanceledError=Wi;ke.CancelToken=gj;ke.isCancel=t1;ke.VERSION=l1;ke.toFormData=Il;ke.AxiosError=fe;ke.Cancel=ke.CanceledError;ke.all=function(n){return Promise.all(n)};ke.spread=yj;ke.isAxiosError=xj;ke.mergeConfig=Vr;ke.AxiosHeaders=jt;ke.formToJSON=e=>e1(B.isHTMLForm(e)?new FormData(e):e);ke.getAdapter=a1.getAdapter;ke.HttpStatusCode=Gd;ke.default=ke;const{Axios:g4,AxiosError:y4,CanceledError:x4,isCancel:v4,CancelToken:w4,VERSION:S4,all:b4,Cancel:k4,isAxiosError:E4,spread:C4,toFormData:T4,AxiosHeaders:P4,HttpStatusCode:j4,formToJSON:R4,getAdapter:A4,mergeConfig:D4}=ke,vj="http://192.168.1.14:8888",st=ke.create({baseURL:vj,timeout:1e4,headers:{"Content-Type":"application/json"}});st.interceptors.request.use(e=>{const n=localStorage.getItem("access_token");n&&(e.headers.Authorization=`Bearer ${n}`);const i=tl();return i&&e.data&&typeof e.data=="object"&&(e.data={...e.data,deviceId:i}),e},e=>Promise.reject(e));st.interceptors.response.use(e=>e,e=>(e.response?(console.error("API Error:",e.response.data),e.response.status===401&&localStorage.removeItem("access_token")):e.request?console.error("No response received:",e.request):console.error("Request error:",e.message),Promise.reject(e)));const tl=()=>{let e=localStorage.getItem("device_id");return e||(e="device_"+Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15),localStorage.setItem("device_id",e)),e},lt={loginWithPassword:async(e,n)=>{try{const i=await st.post("/api/login/password",{username:e,password:n,deviceId:tl()});if(i.data.code===200&&i.data.data)return localStorage.setItem("access_token",i.data.data.access_token),localStorage.setItem("user_data",JSON.stringify(i.data.data)),i.data.data;throw new Error(i.data.message||"登录失败")}catch(i){throw ke.isAxiosError(i)&&i.response?new Error(i.response.data.message||"登录失败"):new Error("网络错误，请稍后再试")}},loginWithPhoneCode:async(e,n)=>{try{const i=await st.post("/api/verify_code",{phone:e,code:n,deviceId:tl()});if(i.data.code===200&&i.data.data)return localStorage.setItem("access_token",i.data.data.access_token),localStorage.setItem("user_data",JSON.stringify(i.data.data)),i.data.data;throw new Error(i.data.message||"登录失败")}catch(i){throw ke.isAxiosError(i)&&i.response?new Error(i.response.data.message||"登录失败"):new Error("网络错误，请稍后再试")}},sendVerificationCode:async e=>{try{const n=await st.post("/api/send_code",{phone:e,deviceId:tl()});if(n.data.code!==200)throw new Error(n.data.message||"发送验证码失败")}catch(n){throw ke.isAxiosError(n)&&n.response?new Error(n.response.data.message||"发送验证码失败"):new Error("网络错误，请稍后再试")}},logout:async()=>{try{await st.post("/api/logout"),localStorage.removeItem("access_token"),localStorage.removeItem("user_data")}catch(e){console.error("Logout error:",e),localStorage.removeItem("access_token"),localStorage.removeItem("user_data")}},getUserInfo:async()=>{try{const e=localStorage.getItem("user_data");if(e)return JSON.parse(e);throw new Error("未找到用户数据")}catch(e){throw console.error("获取用户数据失败:",e),new Error("获取用户信息失败")}},checkLoginStatus:async()=>!!localStorage.getItem("access_token"),getUserVoices:async e=>{try{let n=e;if(!n){const o=localStorage.getItem("user_data");o&&(n=JSON.parse(o).user_id)}if(!n)throw new Error("未找到用户ID");const i=await st.get(`/api/voice-enrollment/user-voices?user_id=${n}`);if(i.data.success)return i.data;throw new Error(i.data.message||"获取音色列表失败")}catch(n){throw ke.isAxiosError(n)&&n.response?new Error(n.response.data.message||"获取音色列表失败"):new Error("网络错误，请稍后再试")}},async shareVoice(e,n,i,o){try{const a=localStorage.getItem("access_token");if(!a)throw new Error("用户未登录");const u=await st.post("/api/voice-enrollment/share",{voiceId:e,bubbleId:n,voiceName:i,voicePrompt:o},{headers:{Authorization:`Bearer ${a}`,"Content-Type":"application/json;charset=UTF-8"}});if(u.status!==200)throw new Error(u.data.message||"共享音色失败");return{success:!0,sharedVoiceId:u.data.sharedVoiceId}}catch(a){if(a.response){const{status:u,data:c}=a.response;throw u===404?new Error("目标用户不存在"):u===400?new Error(c.message||"参数错误"):new Error(c.message||"共享音色失败")}else throw a.request?new Error("服务器无响应，请稍后重试"):a}},async updateVoice(e,n,i){try{const o=localStorage.getItem("access_token");if(!o)throw new Error("用户未登录");const a=localStorage.getItem("user_data");if(!a)throw new Error("未找到用户信息");const c=JSON.parse(a).user_id;if(!c)throw new Error("未找到用户ID");const d={voiceId:e,userId:c};n!==void 0&&(d.name=n),i!==void 0&&(d.userPrompt=i);const p=await st.post("/api/voice-enrollment/update",d,{headers:{Authorization:`Bearer ${o}`,"Content-Type":"application/json;charset=UTF-8"}});if(!p.data.success)throw new Error(p.data.message||"更新音色失败");return{success:!0,voiceId:p.data.voiceId,name:p.data.name,userPrompt:p.data.userPrompt}}catch(o){throw o.response?new Error(o.response.data.message||"更新音色失败"):o.request?new Error("服务器无响应，请稍后重试"):o}},async deleteVoice(e){try{const n=localStorage.getItem("user_data");if(!n)throw new Error("未找到用户信息");const o=JSON.parse(n).user_id;if(!o)throw new Error("未找到用户ID");if(!e)throw new Error("缺少必要的参数: voice_id");const a=await st.post(`/api/voice-enrollment/delete?voice_id=${e}`,{user_id:o});return{success:a.data.success,message:a.data.message,voiceId:a.data.voiceId,userId:a.data.userId}}catch(n){throw n.response?new Error(n.response.data.message||"删除音色失败"):n.request?new Error("服务器无响应，请稍后重试"):n}},getAdminUsersList:async e=>{try{const n=await st.post("/api/admin/users/list",{username:e.username,page:e.page||1,pageSize:e.pageSize||10,searchTerm:e.searchTerm});if(n.data.code===200)return n.data.data;throw new Error(n.data.message||"获取用户列表失败")}catch(n){throw ke.isAxiosError(n)&&n.response?new Error(n.response.data.message||"获取用户列表失败"):new Error("网络错误，请稍后重试")}},editAdminUser:async e=>{try{const n=await st.post("/api/admin/users/edit",{adminUsername:e.adminUsername,userId:e.userId,userData:e.userData},{headers:{"Content-Type":"application/json;charset=UTF-8"}});if(n.data.code===200)return{success:!0,message:n.data.message||"编辑用户成功",user:n.data.data};throw new Error(n.data.message||"编辑用户失败")}catch(n){if(ke.isAxiosError(n)&&n.response){const i=n.response.status;throw i===403?new Error("没有权限执行此操作"):i===404?new Error("用户不存在"):i===400?new Error(n.response.data.message||"请求参数无效"):new Error(n.response.data.message||"编辑用户失败")}else throw n instanceof Error?n:new Error("网络错误，请稍后重试")}},deleteAdminUser:async e=>{try{const n=await st.post("/api/admin/users/delete",{adminUsername:e.adminUsername,userId:e.userId});if(n.data.code===200)return{success:!0,message:n.data.message||"删除用户成功",userId:e.userId};throw new Error(n.data.message||"删除用户失败")}catch(n){if(ke.isAxiosError(n)&&n.response){const i=n.response.status;throw i===403?new Error("没有权限执行此操作"):i===404?new Error("用户不存在"):new Error(n.response.data.message||"删除用户失败")}else throw n instanceof Error?n:new Error("网络错误，请稍后重试")}},getAdminVoicesList:async e=>{try{const n=await st.post("/api/admin/voices/list",{username:e.username,page:e.page||1,pageSize:e.pageSize||10,searchTerm:e.searchTerm});if(n.data.code===200)return n.data.data;throw new Error(n.data.message||"获取音色列表失败")}catch(n){throw ke.isAxiosError(n)&&n.response?new Error(n.response.data.message||"获取音色列表失败"):new Error("网络错误，请稍后重试")}},deleteAdminVoice:async e=>{try{const n=await st.post("/api/admin/voices/delete",{adminUsername:e.adminUsername,voiceId:e.voiceId});if(n.data.code===200)return{success:!0,message:n.data.message||"删除音色成功",voiceId:e.voiceId};throw new Error(n.data.message||"删除音色失败")}catch(n){if(ke.isAxiosError(n)&&n.response){const i=n.response.status;throw i===403?new Error("没有权限执行此操作"):i===404?new Error("音色不存在"):new Error(n.response.data.message||"删除音色失败")}else throw n instanceof Error?n:new Error("网络错误，请稍后重试")}},async createAdminUser(e){var n;try{const i=await st.post("/api/admin/users/create",e,{headers:{"Content-Type":"application/json;charset=UTF-8","Accept-Charset":"UTF-8"}});if(i.data&&i.data.code===200)return i.data.data;throw new Error(((n=i.data)==null?void 0:n.message)||"创建用户失败")}catch(i){if(i.response){const o=i.response.data;throw o.code===400?new Error(o.message||"参数错误"):o.code===403?new Error("无权限创建用户"):new Error(o.message||"创建用户失败")}else throw i.request?new Error("网络错误，请检查您的网络连接"):i}},redeemCode:async(e,n)=>{try{const i=await st.post("/api/redeem-codes/use",{username:e,code:n});if(i.data&&i.data.id)return localStorage.setItem("user_data",JSON.stringify(i.data)),i.data;if(i.data&&i.data.code===200&&i.data.data)return localStorage.setItem("user_data",JSON.stringify(i.data.data)),i.data.data;throw i.data&&i.data.message?new Error(i.data.message):new Error("兑换失败，响应数据格式不正确")}catch(i){if(ke.isAxiosError(i)&&i.response){const o=i.response.data;throw o&&o.message?new Error(o.message):new Error("兑换失败: "+i.response.status)}else throw i instanceof Error?i:new Error("网络错误，请稍后再试")}}};class wj{constructor(){Wm(this,"listeners",new Map)}on(n,i){var o;return this.listeners.has(n)||this.listeners.set(n,[]),(o=this.listeners.get(n))==null||o.push(i),()=>{const a=this.listeners.get(n);if(a){const u=a.indexOf(i);u!==-1&&a.splice(u,1)}}}emit(n,...i){var o;this.listeners.has(n)&&((o=this.listeners.get(n))==null||o.forEach(a=>{try{a(...i)}catch(u){console.error(`Error in user event listener for ${n}:`,u)}}))}}const Ie=new wj,d1={isLogin:!!localStorage.getItem("access_token"),userData:null,loading:!1,error:null};try{const e=localStorage.getItem("user_data");e&&(d1.userData=JSON.parse(e))}catch(e){console.error("Failed to parse stored user data:",e)}const et={state:{...d1},get isLogin(){const e=!!localStorage.getItem("access_token");return e!==this.state.isLogin&&(console.log("登录状态不一致，修复中...","本地存储token:",e,"当前状态:",this.state.isLogin),this.state.isLogin=e),this.state.isLogin},forceRefreshLoginStatus(){const e=!!localStorage.getItem("access_token");if(console.log("强制刷新登录状态:","本地存储token:",e,"当前状态:",this.state.isLogin),e!==this.state.isLogin)if(this.state.isLogin=e,e)try{const n=localStorage.getItem("user_data");n&&(this.state.userData=JSON.parse(n),Ie.emit("login",this.state.userData))}catch(n){console.error("解析用户数据失败:",n)}else this.state.userData=null,Ie.emit("logout");return this.state.isLogin},get userData(){return this.state.userData},get loading(){return this.state.loading},get error(){return this.state.error},async init(){try{if(this.state.loading=!0,Ie.emit("loading",!0),await lt.checkLoginStatus()){const n=await lt.getUserInfo();this.state.userData=n,this.state.isLogin=!0,Ie.emit("login",n)}else this.state.isLogin=!1,this.state.userData=null,Ie.emit("logout");this.state.error=null}catch(e){this.state.error=e instanceof Error?e.message:"初始化用户状态失败",Ie.emit("error",this.state.error)}finally{this.state.loading=!1,Ie.emit("loading",!1)}},async login(e,n){try{this.state.loading=!0,this.state.error=null,Ie.emit("loading",!0);const i=await lt.loginWithPassword(e,n);return this.state.isLogin=!0,this.state.userData=i,localStorage.setItem("access_token",i.access_token),localStorage.setItem("user_data",JSON.stringify(i)),console.log("发送登录事件, 当前登录状态:",this.state.isLogin),Ie.emit("login",i),i}catch(i){throw this.state.error=i instanceof Error?i.message:"登录失败",Ie.emit("error",this.state.error),i}finally{this.state.loading=!1,Ie.emit("loading",!1)}},async loginWithPhone(e,n){try{this.state.loading=!0,this.state.error=null,Ie.emit("loading",!0);const i=await lt.loginWithPhoneCode(e,n);return this.state.isLogin=!0,this.state.userData=i,Ie.emit("login",i),i}catch(i){throw this.state.error=i instanceof Error?i.message:"登录失败",Ie.emit("error",this.state.error),i}finally{this.state.loading=!1,Ie.emit("loading",!1)}},async logout(){try{this.state.loading=!0,Ie.emit("loading",!0),localStorage.removeItem("access_token"),localStorage.removeItem("user_data"),this.state.isLogin=!1,this.state.userData=null,Ie.emit("logout");try{await lt.logout()}catch(e){console.error("调用登出API失败，但客户端已登出",e)}}catch(e){throw this.state.error=e instanceof Error?e.message:"退出登录失败",Ie.emit("error",this.state.error),e}finally{this.state.loading=!1,Ie.emit("loading",!1)}},async refreshUserInfo(){try{this.state.loading=!0,Ie.emit("loading",!0);const e=await lt.getUserInfo();return this.state.userData=e,Ie.emit("update",e),e}catch(e){throw this.state.error=e instanceof Error?e.message:"获取用户信息失败",Ie.emit("error",this.state.error),e}finally{this.state.loading=!1,Ie.emit("loading",!1)}},subscribe(e,n){return Ie.on(e,n)}};et.init().catch(e=>{console.error("Failed to initialize user store:",e)});const Sj=R.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  position: relative;
  overflow: hidden;
  padding-top: calc(80px + 2rem);
  
  @media (max-width: 768px) {
    padding: 1rem;
    min-height: 80vh;
    padding-top: calc(60px + 2rem);
  }
`,bj=R(q.div)`
  text-align: center;
  z-index: 1;
  max-width: 1000px;
  padding-top: 1rem;
  position: relative;
  
  @media (max-width: 768px) {
    padding-top: 2rem;
  }
`,kj=R(q.h1)`
  font-size: 3.2rem;
  font-weight: 800;
  margin-bottom: 2rem;
  color: ${({theme:e})=>`${e.colors[e.mode].text}0.8`};
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2.2rem;
    padding-right: 0;
    margin-left: 0;
  }
`,Ej=R(q.span)`
  background: ${({theme:e})=>e.mode==="dark"?"linear-gradient(to right, #7C3AED, #2563EB)":"linear-gradient(to right, #007AFF, #007AFF)"};
  -webkit-background-clip: text;
  color: ${({theme:e})=>(e.mode==="dark","#007AFF")};
  font-size: 3rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  letter-spacing: 1px;
  position: relative;
  min-height: 4.5rem;
  transform: translateX(0);

  @media (max-width: 768px) {
    font-size: 1.4rem;
    padding: 0;
    transform: translateX(0);
    flex-wrap: wrap;
    gap: 0.5rem;
    min-height: 2.5rem;
  }
`,Cj=R(q.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateX(0);
  
  @media (max-width: 768px) {
    transform: translateX(0);
  }
`,Tj=R.img`
  width: 40px;
  height: 40px;
  margin-left: 10px;
  animation: bounce 2s infinite;
  
  @keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }

  @media (max-width: 768px) {
    width: 24px;
    height: 24px;
  }
`,Pj=R.span`
  display: inline-block;
  width: 3px;
  height: 1.2em;
  background-color: ${({theme:e})=>e.mode==="dark"?"#7C3AED":"#7230e3"};
  margin-left: 2px;
  animation: blink 1s step-end infinite;

  @keyframes blink {
    from, to { opacity: 1; }
    50% { opacity: 0; }
  }
`,jj=R(q.p)`
  font-size: 1.4rem;
  color: ${({theme:e})=>e.colors[e.mode].text};
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
  opacity: 0.8;
  transform: translateX(0);
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    padding: 0 1rem;
    transform: translateX(0);
  }
`,Rj=R.div`
  position: fixed;
  bottom: 30px;
  width: 100%;
  overflow: hidden;
  z-index: 1;
  transition: opacity 0.3s ease-out;
  opacity: ${e=>e.$isVisible?1:0};
`,Aj=R(q.div)`
  white-space: nowrap;
  font-size: 6rem;
  font-weight: bold;
  -webkit-text-stroke: 1px rgba(255, 255, 255, 0.08);
  color: transparent;
  letter-spacing: 8px;
  display: flex;
  gap: 2rem;
  opacity: 0.25;

  @media (max-width: 768px) {
    font-size: 3rem;
    letter-spacing: 4px;
  }
`,Dj=R.span`
  display: inline-block;
  padding-right: 4rem;
`,Ij=()=>!0,Lj="BLACK BUBBLE",Ia=["你好，泡友~","Hello, Bubble Friend~","こんにちは、バブル友達~","Bonjour, Ami Bulle~","Hola, Amigo Burbuja~","안녕, 버블 친구~","Ciao, Amico Bolla~","Hallo, Blasenfreund~","Привет, Пузырьковый друг~","Olá, Amigo Bolha~","你好，泡友~","नमस्ते, बबल मित्र~","مرحبا، صديق الفقاعة~","Γεια σου, φίλε φυσαλίδα~","Merhaba, Kabarcık Arkadaşım~","Hej, Bubbla Vän~","Hei, Kupla Ystävä~","สวัสดี เพื่อนฟอง~","Xin chào, Bạn Bong Bóng~","Halo, Teman Gelembung~","Kumusta, Kaibigan ng Bula~","Salam, Dost Həbab~","Habari, Rafiki wa Bubble~","Salut, Prieten Bulă~","Ahoj, Bublinový Příteli~","Cześć, Przyjacielu Bańki~","Sveiki, Burbuļa Draugs~","Tere, Mulli Sõber~","Sveiki, Burbulo Drauge~","Helló, Buborék Barát~","Здравейте, Мехур Приятел~","Здраво, Меур Пријатељ~","Բարեւ, Պղպջակ Ընկեր~","გამარჯობა, ბუშტი მეგობარი~","Hej, Boble Ven~","Hai, Teman Gelembung~","Chào, Bạn Bong Bóng~","Hallo, Borrelvriend~","שלום, חבר בועה~","Dia dhuit, Cara Bolgóideach~"],Y0=()=>{const[e,n]=b.useState(""),[i,o]=b.useState(!1),[a,u]=b.useState(0),[c,d]=b.useState(et.isLogin),p=b.useRef(100),m=b.useRef(50),g=b.useRef(1500),x={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.3}}},w={hidden:{opacity:0,y:30},visible:{opacity:1,y:0}},S={animate:{x:[0,-2e3],transition:{x:{repeat:1/0,repeatType:"loop",duration:25,ease:"linear"}}}},k=Ij();return b.useEffect(()=>{const T=!!localStorage.getItem("access_token");T!==c&&(console.log("Hero组件 - 强制更新状态与localStorage一致:",T),d(T));const E=et.forceRefreshLoginStatus();console.log("Hero组件 - 初始化登录状态:",E),d(E);const P=et.subscribe("login",F=>{console.log("Hero组件 - 检测到登录事件"),d(!0)}),$=et.subscribe("logout",()=>{console.log("Hero组件 - 检测到登出事件"),localStorage.removeItem("access_token"),localStorage.removeItem("user_data"),d(!1)}),D=setInterval(()=>{const F=!!localStorage.getItem("access_token"),O=et.isLogin;(O!==c||F!==c)&&(console.log("Hero组件 - 登录状态不一致，更新状态:","当前状态:",c,"token状态:",F,"store状态:",O),d(F))},500);return()=>{P(),$(),clearInterval(D)}},[]),b.useEffect(()=>{n(""),o(!1),u(0);const T=setTimeout(()=>{n(Ia[0].slice(0,1))},500);return()=>clearTimeout(T)},[]),b.useEffect(()=>{let T;if(i)e===""?(o(!1),u(E=>(E+1)%Ia.length),T=setTimeout(()=>{},500)):T=setTimeout(()=>{n(e.slice(0,-1))},m.current);else{const E=Ia[a];e===E?T=setTimeout(()=>{o(!0)},g.current):T=setTimeout(()=>{n(E.slice(0,e.length+1))},p.current)}return()=>clearTimeout(T)},[e,i,a,Ia]),y.jsxs(Sj,{children:[y.jsxs(bj,{variants:x,initial:"hidden",whileInView:"visible",viewport:{once:!0},transition:{duration:.8},children:[y.jsx(kj,{variants:w,children:y.jsx(Ej,{children:y.jsxs(Cj,{children:[e,y.jsx(Pj,{}),y.jsx(Tj,{src:"/WuKonWeb4/assets/hello.png",alt:"Hello"})]})})}),y.jsx(jj,{variants:w,transition:{delay:.3},children:"每个泡泡有不同能力，音色克隆、实时翻译、多语言互译 一个泡泡，解锁无限可能···"}),!c&&y.jsx("div",{style:{marginTop:"3rem",width:"100%",display:"flex",justifyContent:"center",marginBottom:"2rem",position:"relative",zIndex:200},children:y.jsx("button",{onClick:()=>window.location.href="/WuKonWeb4/login",style:{padding:"0.9rem 2.2rem",background:"linear-gradient(135deg, #8B5CF6, #6366F1)",color:"white",borderRadius:"12px",fontSize:"1.1rem",fontWeight:"600",cursor:"pointer",boxShadow:"0 4px 20px rgba(99, 102, 241, 0.5)",border:"none",letterSpacing:"0.5px",transition:"all 0.3s ease",backdropFilter:"blur(4px)",outline:"none"},onMouseOver:T=>{T.currentTarget.style.transform="translateY(-2px)",T.currentTarget.style.boxShadow="0 6px 25px rgba(99, 102, 241, 0.6)"},onMouseOut:T=>{T.currentTarget.style.transform="translateY(0)",T.currentTarget.style.boxShadow="0 4px 20px rgba(99, 102, 241, 0.5)"},children:"Log in"})})]}),y.jsx(Rj,{$isVisible:k,children:y.jsx(Aj,{animate:"animate",variants:S,children:[...Array(6)].map((T,E)=>y.jsx(Dj,{children:Lj},E))})})]})},or=()=>{const e=b.useRef(null),n=b.useRef(null);return b.useEffect(()=>(e.current=new(window.AudioContext||window.webkitAudioContext),()=>{n.current&&clearTimeout(n.current),e.current&&e.current.close()}),[]),null},q0=R.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
  will-change: transform;
`,$j=R(q.div)`
  position: absolute;
  width: ${e=>e.size}px;
  height: ${e=>e.size}px;
  opacity: 0.15;
  will-change: transform, opacity;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    filter: brightness(1.2);
  }
`,rd=(...e)=>{},qf=b.memo(()=>{const n=Ht().pathname,[i,o]=b.useState(!1);if(n==="/admin")return null;const a=b.useMemo(()=>{let c=["/WuKonWeb4/assets/logo.png","/WuKonWeb4/assets/jindouyun.png","/WuKonWeb4/assets/pingxingyuzhou.png","/WuKonWeb4/assets/tongchuanyimeng.png"];return n==="/jindouyun"?c=["/WuKonWeb4/assets/jindouyun.png"]:n==="/parallel"?c=["/WuKonWeb4/assets/pingxingyuzhou.png"]:n==="/interpreter"&&(c=["/WuKonWeb4/assets/tongchuanyimeng.png"]),c},[n]),u=b.useMemo(()=>Array.from({length:8},(c,d)=>{const p=Math.floor(Math.random()*a.length);return{id:d,size:Math.random()*70+50,x:Math.random()*100,delay:Math.random()*3,duration:Math.random()*10+35,rotate:Math.random()*360,image:a[p]}}),[a]);return b.useEffect(()=>{(async()=>{try{rd("开始预加载图片..."),o(!1);const d=a.map(p=>new Promise((m,g)=>{const x=new Image;x.onload=()=>{rd(`图片加载成功: ${p}`),m()},x.onerror=()=>{console.error(`图片加载失败: ${p}`),g(new Error(`图片加载失败: ${p}`))},x.src=p}));await Promise.all(d).catch(p=>{console.error("部分图片加载失败:",p)}),o(!0),rd("所有图片预加载完成")}catch(d){console.error("预加载图片时出错:",d),o(!0)}})()},[a]),i?y.jsxs(q0,{children:[y.jsx(or,{}),u.map(c=>y.jsx($j,{size:c.size,initial:{x:`${c.x}vw`,y:`${100+Math.random()*20}vh`,rotate:c.rotate,opacity:.15},animate:{y:"-100vh",opacity:[.15,.15,0],rotate:c.rotate+180,x:`${c.x}vw`},transition:{duration:c.duration,delay:c.delay,repeat:1/0,ease:"linear"},children:y.jsx("img",{src:c.image,alt:"",onError:d=>{const p=d.target;console.error(`图片加载失败，使用备用图片: ${p.src}`),p.src="/WuKonWeb4/assets/logo.png"}})},c.id))]}):y.jsx(q0,{children:y.jsx(or,{})})}),Mj=R.section`
  padding: 100px 20px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(124, 58, 237, 0.2), transparent);
  }
`,_j=R(q.div)`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  z-index: 1;
`,Bj=R(q.h2)`
  font-size: 2.5rem;
  background: linear-gradient(to right, #7C3AED, #2563EB);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,Oj=R(q.p)`
  font-size: 1.1rem;
  color: ${({theme:e})=>e.colors[e.mode].text};
  opacity: 0.8;
  max-width: 600px;
  margin: 0 auto 3rem;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 0 1rem;
    margin-bottom: 2rem;
  }
`,Fj=R.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin: 3rem auto;
  max-width: 1000px;
  padding: 0 1rem;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    inset: -20px;
    background: radial-gradient(circle at center, rgba(124, 58, 237, 0.1) 0%, transparent 70%);
    z-index: -1;
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    gap: 1rem;
    margin: 2rem auto;
  }
`,Nj=R(q.div)`
  position: relative;
  background: rgba(124, 58, 237, 0.02);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(124, 58, 237, 0.1);
  border-radius: 20px;
  padding: 1.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(124, 58, 237, 0.05);
    border-color: rgba(124, 58, 237, 0.2);
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(124, 58, 237, 0.1);
  }

  &::before {
    content: '';
    position: absolute;
    inset: 1px;
    border-radius: 19px;
    background: linear-gradient(180deg, rgba(124, 58, 237, 0.03), transparent);
    z-index: -1;
  }

  img {
    width: 80px;
    height: 80px;
    object-fit: contain;
    margin-bottom: 1rem;
    filter: drop-shadow(0 4px 6px rgba(124, 58, 237, 0.2));

    @media (max-width: 768px) {
      width: 50px;
      height: 50px;
    }
  }

  h3 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    background: linear-gradient(to right, #7C3AED, #2563EB);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }

  p {
    color: ${({theme:e})=>e.colors[e.mode].text};
    opacity: 0.8;
    font-size: 0.9rem;
    line-height: 1.4;
    margin: 0;

    @media (max-width: 768px) {
      font-size: 0.8rem;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }
`,Vj=[{name:"ChatGPT",image:"/WuKonWeb4/Aiphoto/ChatGPT.png",description:"开创性的大语言模型，强大的对话能力"},{name:"Deepseek",image:"/WuKonWeb4/Aiphoto/deepseek.png",description:"专注于深度学习的AI助手，精准的专业解答"},{name:"Gemini",image:"/WuKonWeb4/Aiphoto/gemini.png",description:"Google最新多模态AI，跨领域理解能力"},{name:"Grok",image:"/WuKonWeb4/Aiphoto/Grok.png",description:"实时学习的AI，富有个性的对话风格"},{name:"Kimi",image:"/WuKonWeb4/Aiphoto/kimi.png",description:"安全可靠的AI助手，稳定的对话体验"},{name:"Qwen",image:"/WuKonWeb4/Aiphoto/Qwen.png",description:"通义千问，中文理解能力出众的AI模型"}],zj=()=>{const e={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2}}},n={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.5}}},i={initial:{y:0},animate:{y:[-10,10,-10],transition:{duration:4,repeat:1/0,ease:"easeInOut"}}};return y.jsxs(Mj,{children:[y.jsx(qf,{}),y.jsxs(_j,{variants:e,initial:"hidden",whileInView:"visible",viewport:{once:!0,margin:"-100px"},children:[y.jsx(Bj,{variants:n,children:"强大LLM模型"}),y.jsx(Oj,{variants:n,children:"集成多个顶尖AI大语言模型，为您提供全方位的智能对话服务。 每个模型都有其独特优势，共同打造极致翻译体验。"}),y.jsx(Fj,{children:Vj.map((o,a)=>y.jsxs(Nj,{variants:n,children:[y.jsx(q.div,{variants:i,initial:"initial",animate:"animate",children:y.jsx("img",{src:o.image,alt:o.name})}),y.jsx("h3",{children:o.name}),y.jsx("p",{children:o.description})]},o.name))})]})]})},Uj=R.section`
  padding: 100px 20px;
    position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(124, 58, 237, 0.2), transparent);
  }
`,Wj=R.div`
  max-width: 1200px;
  margin: 0 auto;
`,Hj=R(q.h2)`
  font-size: 3rem;
  text-align: center;
  background: linear-gradient(to right, #7C3AED, #2563EB);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 4rem;
  position: relative;
  
  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`,Kj=R.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
`,Gj=R(q.div)`
  position: relative;
  padding: 2rem;
  border-radius: 24px;
  background: rgba(124, 58, 237, 0.02);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(124, 58, 237, 0.1);
  overflow: hidden;
  
  @media (max-width: 768px) {
    padding: 1.2rem;
    border-radius: 16px;
  }

  &::before {
    content: '';
    position: absolute;
    inset: 1px;
    border-radius: 23px;
    background: linear-gradient(180deg, rgba(124, 58, 237, 0.03), transparent);
    z-index: -1;

    @media (max-width: 768px) {
      border-radius: 15px;
    }
  }
  
  &:hover {
    border-color: rgba(124, 58, 237, 0.3);
    transform: translateY(-5px);
    transition: all 0.3s ease;
  }
`,Yj=R.div`
  width: 50px;
  height: 50px;
  border-radius: 15px;
  background: linear-gradient(135deg, #7C3AED 0%, #2563EB 100%);
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    border-radius: 12px;
    margin-bottom: 1rem;
    font-size: 1.2rem;
  }
`,qj=R.h3`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 0.8rem;
  background: linear-gradient(to right, #7C3AED, #2563EB);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }
`,Xj=R.p`
  font-size: 1rem;
  line-height: 1.5;
  color: ${({theme:e})=>e.colors[e.mode].text};
  opacity: 0.8;

  @media (max-width: 768px) {
    font-size: 0.85rem;
    line-height: 1.4;
  }
`,Qj=()=>{const e=[{icon:"✍️",title:"文字润色",description:"AI智能润色，让表达更优雅精准"},{icon:"🌍",title:"外语翻译",description:"40+语言实时翻译，无障碍沟通"},{icon:"🎲",title:"天外之音",description:"盲盒匹配外语聊天，趣味学习"},{icon:"👽",title:"语音交流",description:"外星人音效，探索语言新乐趣"},{icon:"🤖",title:"AI助手",description:"智能对话，帮你解决语言难题"},{icon:"��",title:"极速响应",description:"毫秒级翻译，丝滑交流体验"}];return y.jsx(Uj,{children:y.jsxs(Wj,{children:[y.jsx(Hj,{children:"强大功能"}),y.jsx(Kj,{children:e.map((n,i)=>y.jsxs(Gj,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.5,delay:i*.1},viewport:{once:!0},children:[y.jsx(Yj,{children:n.icon}),y.jsx(qj,{children:n.title}),y.jsx(Xj,{children:n.description})]},i))})]})})};var Yd=new Map,La=new WeakMap,X0=0,Jj=void 0;function Zj(e){return e?(La.has(e)||(X0+=1,La.set(e,X0.toString())),La.get(e)):"0"}function eR(e){return Object.keys(e).sort().filter(n=>e[n]!==void 0).map(n=>`${n}_${n==="root"?Zj(e.root):e[n]}`).toString()}function tR(e){const n=eR(e);let i=Yd.get(n);if(!i){const o=new Map;let a;const u=new IntersectionObserver(c=>{c.forEach(d=>{var p;const m=d.isIntersecting&&a.some(g=>d.intersectionRatio>=g);e.trackVisibility&&typeof d.isVisible>"u"&&(d.isVisible=m),(p=o.get(d.target))==null||p.forEach(g=>{g(m,d)})})},e);a=u.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),i={id:n,observer:u,elements:o},Yd.set(n,i)}return i}function nR(e,n,i={},o=Jj){if(typeof window.IntersectionObserver>"u"&&o!==void 0){const p=e.getBoundingClientRect();return n(o,{isIntersecting:o,target:e,intersectionRatio:typeof i.threshold=="number"?i.threshold:0,time:0,boundingClientRect:p,intersectionRect:p,rootBounds:p}),()=>{}}const{id:a,observer:u,elements:c}=tR(i),d=c.get(e)||[];return c.has(e)||c.set(e,d),d.push(n),u.observe(e),function(){d.splice(d.indexOf(n),1),d.length===0&&(c.delete(e),u.unobserve(e)),c.size===0&&(u.disconnect(),Yd.delete(a))}}function rR({threshold:e,delay:n,trackVisibility:i,rootMargin:o,root:a,triggerOnce:u,skip:c,initialInView:d,fallbackInView:p,onChange:m}={}){var g;const[x,w]=b.useState(null),S=b.useRef(m),[k,T]=b.useState({inView:!!d,entry:void 0});S.current=m,b.useEffect(()=>{if(c||!x)return;let D;return D=nR(x,(F,O)=>{T({inView:F,entry:O}),S.current&&S.current(F,O),O.isIntersecting&&u&&D&&(D(),D=void 0)},{root:a,rootMargin:o,threshold:e,trackVisibility:i,delay:n},p),()=>{D&&D()}},[Array.isArray(e)?e.toString():e,x,a,o,u,c,i,p,n]);const E=(g=k.entry)==null?void 0:g.target,P=b.useRef(void 0);!x&&E&&!u&&!c&&P.current!==E&&(P.current=E,T({inView:!!d,entry:void 0}));const $=[w,k.inView,k.entry];return $.ref=$[0],$.inView=$[1],$.entry=$[2],$}const iR=R.section`
  padding: 80px 20px;
    position: relative;
  overflow: hidden;
`,oR=R.div`
  max-width: 1200px;
  margin: 0 auto;
`,sR=R.div`
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`,aR=R.div`
  @media (max-width: 768px) {
  text-align: center;
  }
`,lR=R(q.h2)`
  font-size: 3rem;
  font-weight: 700;
  background: linear-gradient(to right, #7C3AED, #2563EB);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,uR=R(q.p)`
  font-size: 1.2rem;
  color: ${({theme:e})=>e.colors[e.mode].text};
  opacity: 0.8;
  line-height: 1.8;
  margin-bottom: 2rem;
`,cR=R(q.div)`
  position: relative;
  
  img {
    width: 100%;
    max-width: 500px;
    height: auto;
    border-radius: 24px;
    box-shadow: 0 20px 40px rgba(124, 58, 237, 0.1);
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 24px;
    background: linear-gradient(
      45deg,
      rgba(124, 58, 237, 0.1),
      rgba(37, 99, 235, 0.1)
    );
    pointer-events: none;
  }
`,dR=()=>{const[e,n]=rR({threshold:.3,triggerOnce:!0});return y.jsx(iR,{ref:e,children:y.jsx(oR,{children:y.jsxs(sR,{children:[y.jsxs(aR,{children:[y.jsx(lR,{initial:{opacity:0,y:20},animate:n?{opacity:1,y:0}:{},transition:{duration:.6},children:"40国语言即时交流"}),y.jsx(uR,{initial:{opacity:0,y:20},animate:n?{opacity:1,y:0}:{},transition:{duration:.6,delay:.2},children:"覆盖全球主要语种，从英语、日语到阿拉伯语，让你畅通无阻地与世界对话。 智能识别语言，一键切换目标语种，让跨语言交流变得轻松自如。"})]}),y.jsx(cR,{initial:{opacity:0,scale:.8,rotateY:-20},animate:n?{opacity:1,scale:1,rotateY:0}:{},transition:{type:"spring",duration:1,bounce:.4},whileHover:{scale:1.05,rotateY:5,transition:{duration:.3}},children:y.jsx("img",{src:"/WuKonWeb4/assets/lang.png",alt:"支持的语言"})})]})})})},fR=R.section`
  padding: 100px 20px;
  background: linear-gradient(0deg, ${({theme:e})=>e.colors[e.mode].background} 0%, rgba(124, 58, 237, 0.1) 100%);
`,pR=R.div`
  max-width: 800px;
  margin: 0 auto;
`,hR=R(q.h2)`
  font-size: 2.5rem;
  text-align: center;
  background: linear-gradient(to right, #7C3AED, #2563EB);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 50px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,mR=R(q.div)`
  margin-bottom: 20px;
`,gR=R(q.button)`
  width: 100%;
  text-align: left;
  padding: 20px;
  background: rgba(124, 58, 237, 0.05);
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  border: 1px solid rgba(124, 58, 237, 0.1);
  color: ${({theme:e})=>e.colors[e.mode].text};
  font-size: 1.1rem;
  font-weight: 500;
  
  &:hover {
    background: rgba(124, 58, 237, 0.1);
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 15px;
  }
`,yR=R(q.div)`
  padding: 0 20px;
  color: ${({theme:e})=>e.colors[e.mode].gray};
  line-height: 1.6;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 0 15px;
  }
`,xR=()=>{const[e,n]=b.useState(null),i=[{question:"筋斗云支持哪些语言？",answer:"筋斗云支持超过40个国家和地区的语言，覆盖全球主要语种，让你随时随地都能畅通无阻地进行交流。"},{question:"天外之音功能是什么？",answer:"天外之音是一个创新的语言学习功能，通过盲盒模式随机匹配外语伙伴，让你在趣味聊天中自然提升语言能力。"},{question:"文字润色功能如何使用？",answer:"就像有一位专业的语文老师，筋斗云能智能分析你的文字，提供更优雅、更地道的表达建议，适用于作文、报告等场景。"},{question:"外星人语音交流是什么？",answer:"这是一个趣味性的语音功能，可以为你的语音添加有趣的外星人音效，让语言学习和交流变得更加有趣。"}],o=c=>{n(e===c?null:c)},a={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1}}},u={hidden:{opacity:0,x:-30},visible:{opacity:1,x:0,transition:{duration:.5}}};return y.jsx(fR,{children:y.jsxs(pR,{as:q.div,variants:a,initial:"hidden",whileInView:"visible",viewport:{once:!0,margin:"-100px"},children:[y.jsx(hR,{variants:u,children:"常见问题"}),i.map((c,d)=>y.jsxs(mR,{variants:u,children:[y.jsxs(gR,{onClick:()=>o(d),whileTap:{scale:.98},children:[c.question,y.jsx(q.span,{animate:{rotate:e===d?180:0},transition:{duration:.3},children:"▼"})]}),y.jsx(zr,{children:e===d&&y.jsx(yR,{initial:{height:0,opacity:0},animate:{height:"auto",opacity:1},exit:{height:0,opacity:0},transition:{duration:.3},children:y.jsx("p",{children:c.answer})})})]},d))]})})};let vR={data:""},wR=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||vR,SR=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,bR=/\/\*[^]*?\*\/|  +/g,Q0=/\n+/g,sr=(e,n)=>{let i="",o="",a="";for(let u in e){let c=e[u];u[0]=="@"?u[1]=="i"?i=u+" "+c+";":o+=u[1]=="f"?sr(c,u):u+"{"+sr(c,u[1]=="k"?"":n)+"}":typeof c=="object"?o+=sr(c,n?n.replace(/([^,])+/g,d=>u.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,p=>/&/.test(p)?p.replace(/&/g,d):d?d+" "+p:p)):u):c!=null&&(u=/^--/.test(u)?u:u.replace(/[A-Z]/g,"-$&").toLowerCase(),a+=sr.p?sr.p(u,c):u+":"+c+";")}return i+(n&&a?n+"{"+a+"}":a)+o},jn={},f1=e=>{if(typeof e=="object"){let n="";for(let i in e)n+=i+f1(e[i]);return n}return e},kR=(e,n,i,o,a)=>{let u=f1(e),c=jn[u]||(jn[u]=(p=>{let m=0,g=11;for(;m<p.length;)g=101*g+p.charCodeAt(m++)>>>0;return"go"+g})(u));if(!jn[c]){let p=u!==e?e:(m=>{let g,x,w=[{}];for(;g=SR.exec(m.replace(bR,""));)g[4]?w.shift():g[3]?(x=g[3].replace(Q0," ").trim(),w.unshift(w[0][x]=w[0][x]||{})):w[0][g[1]]=g[2].replace(Q0," ").trim();return w[0]})(e);jn[c]=sr(a?{["@keyframes "+c]:p}:p,i?"":"."+c)}let d=i&&jn.g?jn.g:null;return i&&(jn.g=jn[c]),((p,m,g,x)=>{x?m.data=m.data.replace(x,p):m.data.indexOf(p)===-1&&(m.data=g?p+m.data:m.data+p)})(jn[c],n,o,d),c},ER=(e,n,i)=>e.reduce((o,a,u)=>{let c=n[u];if(c&&c.call){let d=c(i),p=d&&d.props&&d.props.className||/^go/.test(d)&&d;c=p?"."+p:d&&typeof d=="object"?d.props?"":sr(d,""):d===!1?"":d}return o+a+(c??"")},"");function Ml(e){let n=this||{},i=e.call?e(n.p):e;return kR(i.unshift?i.raw?ER(i,[].slice.call(arguments,1),n.p):i.reduce((o,a)=>Object.assign(o,a&&a.call?a(n.p):a),{}):i,wR(n.target),n.g,n.o,n.k)}let p1,qd,Xd;Ml.bind({g:1});let Ln=Ml.bind({k:1});function CR(e,n,i,o){sr.p=n,p1=e,qd=i,Xd=o}function fr(e,n){let i=this||{};return function(){let o=arguments;function a(u,c){let d=Object.assign({},u),p=d.className||a.className;i.p=Object.assign({theme:qd&&qd()},d),i.o=/ *go\d+/.test(p),d.className=Ml.apply(i,o)+(p?" "+p:"");let m=e;return e[0]&&(m=d.as||e,delete d.as),Xd&&m[0]&&Xd(d),p1(m,d)}return a}}var TR=e=>typeof e=="function",ml=(e,n)=>TR(e)?e(n):e,PR=(()=>{let e=0;return()=>(++e).toString()})(),h1=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){let n=matchMedia("(prefers-reduced-motion: reduce)");e=!n||n.matches}return e}})(),jR=20,m1=(e,n)=>{switch(n.type){case 0:return{...e,toasts:[n.toast,...e.toasts].slice(0,jR)};case 1:return{...e,toasts:e.toasts.map(u=>u.id===n.toast.id?{...u,...n.toast}:u)};case 2:let{toast:i}=n;return m1(e,{type:e.toasts.find(u=>u.id===i.id)?1:0,toast:i});case 3:let{toastId:o}=n;return{...e,toasts:e.toasts.map(u=>u.id===o||o===void 0?{...u,dismissed:!0,visible:!1}:u)};case 4:return n.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(u=>u.id!==n.toastId)};case 5:return{...e,pausedAt:n.time};case 6:let a=n.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(u=>({...u,pauseDuration:u.pauseDuration+a}))}}},nl=[],Mr={toasts:[],pausedAt:void 0},Ur=e=>{Mr=m1(Mr,e),nl.forEach(n=>{n(Mr)})},RR={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},AR=(e={})=>{let[n,i]=b.useState(Mr),o=b.useRef(Mr);b.useEffect(()=>(o.current!==Mr&&i(Mr),nl.push(i),()=>{let u=nl.indexOf(i);u>-1&&nl.splice(u,1)}),[]);let a=n.toasts.map(u=>{var c,d,p;return{...e,...e[u.type],...u,removeDelay:u.removeDelay||((c=e[u.type])==null?void 0:c.removeDelay)||(e==null?void 0:e.removeDelay),duration:u.duration||((d=e[u.type])==null?void 0:d.duration)||(e==null?void 0:e.duration)||RR[u.type],style:{...e.style,...(p=e[u.type])==null?void 0:p.style,...u.style}}});return{...n,toasts:a}},DR=(e,n="blank",i)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:n,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...i,id:(i==null?void 0:i.id)||PR()}),hs=e=>(n,i)=>{let o=DR(n,e,i);return Ur({type:2,toast:o}),o.id},Ue=(e,n)=>hs("blank")(e,n);Ue.error=hs("error");Ue.success=hs("success");Ue.loading=hs("loading");Ue.custom=hs("custom");Ue.dismiss=e=>{Ur({type:3,toastId:e})};Ue.remove=e=>Ur({type:4,toastId:e});Ue.promise=(e,n,i)=>{let o=Ue.loading(n.loading,{...i,...i==null?void 0:i.loading});return typeof e=="function"&&(e=e()),e.then(a=>{let u=n.success?ml(n.success,a):void 0;return u?Ue.success(u,{id:o,...i,...i==null?void 0:i.success}):Ue.dismiss(o),a}).catch(a=>{let u=n.error?ml(n.error,a):void 0;u?Ue.error(u,{id:o,...i,...i==null?void 0:i.error}):Ue.dismiss(o)}),e};var IR=(e,n)=>{Ur({type:1,toast:{id:e,height:n}})},LR=()=>{Ur({type:5,time:Date.now()})},Ko=new Map,$R=1e3,MR=(e,n=$R)=>{if(Ko.has(e))return;let i=setTimeout(()=>{Ko.delete(e),Ur({type:4,toastId:e})},n);Ko.set(e,i)},_R=e=>{let{toasts:n,pausedAt:i}=AR(e);b.useEffect(()=>{if(i)return;let u=Date.now(),c=n.map(d=>{if(d.duration===1/0)return;let p=(d.duration||0)+d.pauseDuration-(u-d.createdAt);if(p<0){d.visible&&Ue.dismiss(d.id);return}return setTimeout(()=>Ue.dismiss(d.id),p)});return()=>{c.forEach(d=>d&&clearTimeout(d))}},[n,i]);let o=b.useCallback(()=>{i&&Ur({type:6,time:Date.now()})},[i]),a=b.useCallback((u,c)=>{let{reverseOrder:d=!1,gutter:p=8,defaultPosition:m}=c||{},g=n.filter(S=>(S.position||m)===(u.position||m)&&S.height),x=g.findIndex(S=>S.id===u.id),w=g.filter((S,k)=>k<x&&S.visible).length;return g.filter(S=>S.visible).slice(...d?[w+1]:[0,w]).reduce((S,k)=>S+(k.height||0)+p,0)},[n]);return b.useEffect(()=>{n.forEach(u=>{if(u.dismissed)MR(u.id,u.removeDelay);else{let c=Ko.get(u.id);c&&(clearTimeout(c),Ko.delete(u.id))}})},[n]),{toasts:n,handlers:{updateHeight:IR,startPause:LR,endPause:o,calculateOffset:a}}},BR=Ln`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,OR=Ln`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,FR=Ln`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,NR=fr("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${BR} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${OR} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${FR} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,VR=Ln`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,zR=fr("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${VR} 1s linear infinite;
`,UR=Ln`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,WR=Ln`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,HR=fr("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${UR} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${WR} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,KR=fr("div")`
  position: absolute;
`,GR=fr("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,YR=Ln`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,qR=fr("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${YR} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,XR=({toast:e})=>{let{icon:n,type:i,iconTheme:o}=e;return n!==void 0?typeof n=="string"?b.createElement(qR,null,n):n:i==="blank"?null:b.createElement(GR,null,b.createElement(zR,{...o}),i!=="loading"&&b.createElement(KR,null,i==="error"?b.createElement(NR,{...o}):b.createElement(HR,{...o})))},QR=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,JR=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,ZR="0%{opacity:0;} 100%{opacity:1;}",eA="0%{opacity:1;} 100%{opacity:0;}",tA=fr("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,nA=fr("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,rA=(e,n)=>{let i=e.includes("top")?1:-1,[o,a]=h1()?[ZR,eA]:[QR(i),JR(i)];return{animation:n?`${Ln(o)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${Ln(a)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},iA=b.memo(({toast:e,position:n,style:i,children:o})=>{let a=e.height?rA(e.position||n||"top-center",e.visible):{opacity:0},u=b.createElement(XR,{toast:e}),c=b.createElement(nA,{...e.ariaProps},ml(e.message,e));return b.createElement(tA,{className:e.className,style:{...a,...i,...e.style}},typeof o=="function"?o({icon:u,message:c}):b.createElement(b.Fragment,null,u,c))});CR(b.createElement);var oA=({id:e,className:n,style:i,onHeightUpdate:o,children:a})=>{let u=b.useCallback(c=>{if(c){let d=()=>{let p=c.getBoundingClientRect().height;o(e,p)};d(),new MutationObserver(d).observe(c,{subtree:!0,childList:!0,characterData:!0})}},[e,o]);return b.createElement("div",{ref:u,className:n,style:i},a)},sA=(e,n)=>{let i=e.includes("top"),o=i?{top:0}:{bottom:0},a=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:h1()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${n*(i?1:-1)}px)`,...o,...a}},aA=Ml`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,$a=16,lA=({reverseOrder:e,position:n="top-center",toastOptions:i,gutter:o,children:a,containerStyle:u,containerClassName:c})=>{let{toasts:d,handlers:p}=_R(i);return b.createElement("div",{id:"_rht_toaster",style:{position:"fixed",zIndex:9999,top:$a,left:$a,right:$a,bottom:$a,pointerEvents:"none",...u},className:c,onMouseEnter:p.startPause,onMouseLeave:p.endPause},d.map(m=>{let g=m.position||n,x=p.calculateOffset(m,{reverseOrder:e,gutter:o,defaultPosition:n}),w=sA(g,x);return b.createElement(oA,{id:m.id,key:m.id,onHeightUpdate:p.updateHeight,className:m.visible?aA:"",style:w},m.type==="custom"?ml(m.message,m):a?a(m):b.createElement(iA,{toast:m,position:g}))}))},We=Ue;const uA=R.section`
  padding: 80px 20px;
    position: relative;
  overflow: hidden;
  min-height: 600px;
`,cA=R.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`,dA=R.div`
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
`,fA=R.div`
  padding-right: 2rem;

  @media (max-width: 768px) {
    padding-right: 0;
    order: 2;
  }
`,pA=R.div`
  position: relative;
  
  @media (max-width: 768px) {
    order: 1;
  }
`,hA=R(q.div)`
  position: relative;
  perspective: 1000px;
  
  img {
    width: 100%;
    max-width: 500px;
    height: auto;
    border-radius: 24px;
    box-shadow: 0 20px 40px rgba(124, 58, 237, 0.1);
    transform-style: preserve-3d;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 24px;
    background: linear-gradient(
      45deg,
      rgba(124, 58, 237, 0.1),
      rgba(37, 99, 235, 0.1)
    );
    pointer-events: none;
  }
`,mA=R.h3`
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  background: linear-gradient(to right, #7C3AED, #2563EB);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,gA=R.p`
  font-size: 1.2rem;
  color: ${({theme:e})=>e.colors[e.mode].text};
  opacity: 0.8;
  margin-bottom: 2.5rem;
  line-height: 1.8;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;R.div`
  display: none;
`;R(q.button)`
  display: none;
`;R(q.div)`
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(124, 58, 237, 0.05), rgba(37, 99, 235, 0.05));
  backdrop-filter: blur(4px);
  z-index: 0;
`;const J0=()=>y.jsxs(uA,{children:[y.jsx(qf,{}),y.jsx(cA,{children:y.jsxs(dA,{children:[y.jsxs(fA,{children:[y.jsx(mA,{children:"简约设计，优雅交互"}),y.jsx(gA,{children:"轻盈的双语输入按钮，如同两个灵动的肥皂泡，让语言切换变得轻松自如。 简约不简单的设计理念，带来流畅的操作体验。每一次交互都经过精心打磨， 让您的翻译之旅充满愉悦感。"})]}),y.jsx(pA,{children:y.jsx(hA,{initial:{opacity:0,scale:.8,rotateY:-20},whileInView:{opacity:1,scale:1,rotateY:0,transition:{type:"spring",duration:1.2,bounce:.4}},animate:{y:[0,-10,0],rotateY:[-5,5,-5]},transition:{duration:6,repeat:1/0,ease:"easeInOut"},whileHover:{scale:1.05,rotateY:10,transition:{duration:.3}},viewport:{once:!0},children:y.jsx("img",{src:"/WuKonWeb4/assets/appindex.png",alt:"筋斗云主界面"})})})]})})]}),yA=R.footer`
  padding: 20px;
    border-top: 1px solid rgba(124, 58, 237, 0.1);
`,xA=R.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
`;R(ff)`
  color: ${({theme:e})=>e.colors[e.mode].text};
  text-decoration: none;
  opacity: 0.8;
  font-size: 0.9rem;
  transition: opacity 0.3s;

  &:hover {
    opacity: 1;
  }
`;const vA=R.a`
  color: ${({theme:e})=>e.colors[e.mode].text};
  text-decoration: none;
  opacity: 0.8;
  font-size: 0.9rem;
  transition: opacity 0.3s;

  &:hover {
    opacity: 1;
  }
`,_o=()=>y.jsx(yA,{children:y.jsx(xA,{children:y.jsx(vA,{href:"mailto:cming0185@gmail.com",children:"联系我们"})})}),Ma=["泡泡平行宇宙","Bubble Parallel Universe","バブルパラレルユニバース","Univers Parallèle de Bulles","Universo Paralelo de Burbujas","거품 평행 우주","Universo Parallelo di Bolle","Blasen-Paralleluniversum","Параллельная Вселенная Пузырей","Universo Paralelo de Bolhas","泡泡平行宇宙","बुलबुला समानांतर ब्रह्मांड","الكون المتوازي للفقاعات","Παράλληλο Σύμπαν Φυσαλίδων","Kabarcık Paralel Evren","Bubbla Parallellt Universum","Kupla Rinnakkaismaailma","จักรวาลคู่ขนานฟอง","Vũ Trụ Song Song Bong Bóng","Alam Semesta Paralel Gelembung","Parallel na Uniberso ng Bula","Köpük Paralel Kainat","Ulimwengu Sambamba wa Bubble","Univers Paralel de Bule","Bublinový Paralelní Vesmír","Równoległy Wszechświat Bąbelków","Burbuļu Paralēlā Visuma","Mullide Paralleeluniversum","Burbulių Lygiagretusis Visata","Buborék Párhuzamos Univerzum","Паралелна Вселена от Мехурчета","Паралелни Свемир Мехурића","Պղպջակների Զուգահեռ Տիեզերք","ბუშტის პარალელური სამყარო","Boble Parallelt Univers","Alam Selari Gelembung","Vũ Trụ Song Song của Bong Bóng","Parallelle Bellenuniversum","יקום מקביל של בועות","Cruinne Chomhthreomhar na mBolgóidí"],wA=R.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  position: relative;
  overflow: hidden;
  padding-top: calc(80px + 2rem);
  
  @media (max-width: 768px) {
    padding: 1rem;
    min-height: 80vh;
    padding-top: calc(60px + 2rem);
  }
`,SA=R(q.div)`
  text-align: center;
  z-index: 1;
  max-width: 1000px;
  padding-top: 1rem;
  
  @media (max-width: 768px) {
    padding-top: 2rem;
  }
`,bA=R(q.h1)`
  font-size: 4rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  background: linear-gradient(to right, #3A7CED, #4CC4F0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  min-height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    font-size: 2.8rem;
    min-height: 3.5rem;
  }
`,kA=R(q.p)`
  font-size: 1.5rem;
  color: #3A7CED;
  max-width: 800px;
  margin: 0 auto 3rem;
  line-height: 1.6;
  opacity: 0.85;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    padding: 0 1rem;
  }
`,Z0=R.section`
  padding: 100px 20px;
    position: relative;
  
  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`,id=R.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`,_a=R.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  background: linear-gradient(to right, #3A7CED, #4CC4F0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,EA=R.div`
  font-size: 1.2rem;
  line-height: 1.7;
  color: ${({theme:e})=>e.colors[e.mode].text};
  margin-bottom: 3rem;
  text-align: center;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`,CA=R.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2.5rem;
  margin-top: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`,gi=R(q.div)`
  background: rgba(58, 124, 237, 0.05);
  border-radius: 16px;
  padding: 2.5rem;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 40px rgba(58, 124, 237, 0.15);
  }
`,yi=R.h3`
  font-size: 1.6rem;
  font-weight: 600;
  margin-bottom: 1.2rem;
  color: ${({theme:e})=>e.colors[e.mode].primary};
`,Zn=R.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: ${({theme:e})=>e.colors[e.mode].text};
  opacity: 0.9;
  flex-grow: 1;
`,TA=R.section`
  padding: 80px 20px;
    position: relative;
  overflow: hidden;
  
  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`,ey=R.div`
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 4rem;
  align-items: center;
  margin-bottom: 6rem;

  &:nth-child(even) {
    grid-template-columns: 1.2fr 1fr;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr !important;
    gap: 2rem;
    text-align: center;
    margin-bottom: 4rem;
  }
`,ty=R.div`
  padding-right: 2rem;

  @media (max-width: 768px) {
    padding-right: 0;
    order: 2;
  }
`,ny=R.div`
  position: relative;
  
  @media (max-width: 768px) {
    order: 1;
  }
`,ry=R(q.div)`
  position: relative;
  perspective: 1000px;
  
  img {
    width: 100%;
    max-width: 500px;
    height: auto;
    border-radius: 24px;
    box-shadow: 0 20px 40px rgba(58, 124, 237, 0.15);
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 24px;
    background: linear-gradient(
      45deg,
      rgba(58, 124, 237, 0.1),
      rgba(76, 196, 240, 0.1)
    );
    pointer-events: none;
  }
`,PA=R.span`
  display: inline-block;
  width: 3px;
  height: 1.2em;
  background-color: #3A7CED;
  margin-left: 2px;
  animation: blink 1s step-end infinite;

  @keyframes blink {
    from, to { opacity: 1; }
    50% { opacity: 0; }
  }
`,jA=()=>{const[e,n]=b.useState(""),[i,o]=b.useState(!1),[a,u]=b.useState(0),c=b.useRef(100),d=b.useRef(50),p=b.useRef(1500);b.useEffect(()=>{n(""),o(!1),u(0);const g=setTimeout(()=>{n(Ma[0].slice(0,1))},500);return()=>clearTimeout(g)},[]),b.useEffect(()=>{let g;if(i)e===""?(o(!1),u(x=>(x+1)%Ma.length),g=setTimeout(()=>{},500)):g=setTimeout(()=>{n(e.slice(0,-1))},d.current);else{const x=Ma[a];e===x?g=setTimeout(()=>{o(!0)},p.current):g=setTimeout(()=>{n(x.slice(0,e.length+1))},c.current)}return()=>clearTimeout(g)},[e,i,a,Ma]);const m={hidden:{y:20,opacity:0},visible:{y:0,opacity:1,transition:{type:"spring",stiffness:300,damping:20}}};return y.jsxs(y.Fragment,{children:[y.jsx(wA,{children:y.jsxs(SA,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8},children:[y.jsxs(bA,{children:[e,y.jsx(PA,{})]}),y.jsx(kA,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.6},children:"克隆您喜爱的音色，让AI用熟悉的声音与您聊天，打造专属于您的交流体验"})]})}),y.jsx(Z0,{children:y.jsxs(id,{children:[y.jsx(_a,{children:"平行宇宙是什么？"}),y.jsx(EA,{children:"泡泡平行宇宙是一款创新的AI音色克隆工具，它能够精准克隆指定的人声音色，并让AI使用该音色与您进行自然流畅的对话。 无论是模仿您喜爱的名人声音，还是复制家人朋友的音色，平行宇宙都能为您创造独特的交流体验。 通过先进的语音克隆技术，它能够捕捉音色的细微特点，让AI对话更加真实自然，仿佛与真人交流一般。"})]})}),y.jsx(TA,{children:y.jsxs(id,{children:[y.jsxs(ey,{children:[y.jsxs(ty,{children:[y.jsx(_a,{style:{textAlign:"left"},children:"音色克隆"}),y.jsx(Zn,{style:{fontSize:"1.2rem",marginBottom:"2rem"},children:"只需提供几分钟的语音样本，泡泡平行宇宙就能精确克隆出目标音色。 无论是低沉磁性的男声，还是清脆悦耳的女声，系统都能准确捕捉音色特点， 并应用到AI对话中，让交流更加生动有趣。"})]}),y.jsx(ny,{children:y.jsx(ry,{initial:{opacity:0,scale:.8},whileInView:{opacity:1,scale:1,transition:{type:"spring",duration:1,bounce:.4}},animate:{y:[0,-10,0],rotateZ:[-1,1,-1]},transition:{duration:6,repeat:1/0,ease:"easeInOut"},viewport:{once:!0},children:y.jsx("img",{src:"/WuKonWeb4/assets/pingxingyuzhou.png",alt:"平行宇宙音色克隆"})})})]}),y.jsxs(ey,{children:[y.jsx(ny,{children:y.jsx(ry,{initial:{opacity:0,scale:.8},whileInView:{opacity:1,scale:1,transition:{type:"spring",duration:1,bounce:.4}},animate:{y:[0,-10,0],rotateZ:[1,-1,1]},transition:{duration:6,repeat:1/0,ease:"easeInOut"},viewport:{once:!0},children:y.jsx("img",{src:"/WuKonWeb4/assets/appindex.png",alt:"平行宇宙应用界面"})})}),y.jsxs(ty,{children:[y.jsx(_a,{style:{textAlign:"left"},children:"智能聊天"}),y.jsx(Zn,{style:{fontSize:"1.2rem",marginBottom:"2rem"},children:"泡泡平行宇宙不仅仅是音色克隆工具，更是强大的AI聊天助手。它能够理解复杂的对话， 跟随上下文，提供有趣而有见地的回应。无论是日常闲聊、情感支持，还是知识探讨， 都能用您喜爱的声音与您进行自然流畅的互动。"})]})]})]})}),y.jsx(Z0,{children:y.jsxs(id,{children:[y.jsx(_a,{children:"主要特点"}),y.jsxs(CA,{children:[y.jsxs(gi,{as:q.div,variants:m,whileHover:{scale:1.03},children:[y.jsx(yi,{children:"精准音色克隆"}),y.jsx(Zn,{children:"通过先进的深度学习算法，只需少量样本即可精确复制目标音色，包括音调、音色、语速和情感特点等细微特征。"})]}),y.jsxs(gi,{as:q.div,variants:m,whileHover:{scale:1.03},children:[y.jsx(yi,{children:"自然对话体验"}),y.jsx(Zn,{children:"结合强大的AI语言模型，提供流畅自然的对话交流，能够理解上下文，记忆对话历史，模拟真实人类交流。"})]}),y.jsxs(gi,{as:q.div,variants:m,whileHover:{scale:1.03},children:[y.jsx(yi,{children:"情感表达"}),y.jsx(Zn,{children:"AI能够在对话中表达各种情感，如欢乐、同情、惊讶等，通过语调和语速变化，让交流更加生动有感染力。"})]}),y.jsxs(gi,{as:q.div,variants:m,whileHover:{scale:1.03},children:[y.jsx(yi,{children:"多场景应用"}),y.jsx(Zn,{children:"适用于多种场景，包括虚拟伴侣、语音助手、有声读物朗读、角色扮演等，为用户创造独特的交互体验。"})]}),y.jsxs(gi,{as:q.div,variants:m,whileHover:{scale:1.03},children:[y.jsx(yi,{children:"音色管理"}),y.jsx(Zn,{children:"支持创建和管理多个音色模型，随时切换不同的声音，为不同场景和需求选择适合的音色。"})]}),y.jsxs(gi,{as:q.div,variants:m,whileHover:{scale:1.03},children:[y.jsx(yi,{children:"隐私保护"}),y.jsx(Zn,{children:"严格的隐私保护措施，确保用户提供的语音样本和对话内容安全保密，未经授权不会用于其他用途。"})]})]})]})})]})},Ba=["泡泡同传译梦","Bubble Interpreter Dream","バブル通訳の夢","Rêve d'Interprétation de Bulles","Sueño de Interpretación de Burbujas","버블 통역 꿈","Sogno di Interpretazione delle Bolle","Blasen-Dolmetschertraum","Мечта Пузырькового Переводчика","Sonho de Interpretação de Bolhas","泡泡同傳譯夢","बबल इंटरप्रेटर ड्रीम","حلم مترجم الفقاعة","Όνειρο Διερμηνέα Φυσαλίδων","Kabarcık Tercüman Rüyası","Bubbla Tolkdröm","Kupla Tulkin Unelma","ความฝันล่ามฟอง","Giấc Mơ Thông Dịch Bong Bóng","Mimpi Penerjemah Gelembung","Pangarap ng Tagasalin ng Bula","Köpük Tərcüməçi Yuxu","Ndoto ya Mkalimani wa Bubble","Visul Interpretului de Bule","Sen Bublinového Tlumočníka","Marzenie Tłumacza Bąbelkowego","Burbuļu Tulka Sapnis","Mullivahu Tõlgi Unistus","Burbulų Vertėjo Svajonė","Buborék Tolmács Álom","Мечта на Преводача на Мехурчета","Сан Преводиоца Мехурића","Պղպջակի Թարգմանչի Երազանք","ბუშტის მთარგმნელის ოცნება","Boble Tolk Drøm","Impian Jurubahasa Gelembung","Ước Mơ Thông Dịch Bong Bóng","Droom van de Bellenvertaler","חלום מתורגמן הבועות","Aisling an Ateangaire Bolgán"],RA=R.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  position: relative;
  overflow: hidden;
  padding-top: calc(80px + 2rem);
  
  @media (max-width: 768px) {
    padding: 1rem;
    min-height: 80vh;
    padding-top: calc(60px + 2rem);
  }
`,AA=R(q.div)`
  text-align: center;
  z-index: 1;
  max-width: 1000px;
  padding-top: 1rem;
  
  @media (max-width: 768px) {
    padding-top: 2rem;
  }
`,DA=R(q.h1)`
  font-size: 4rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  background: linear-gradient(to right, #EC4899, #F472B6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  min-height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    font-size: 2.8rem;
    min-height: 3.5rem;
  }
`,IA=R(q.p)`
  font-size: 1.5rem;
  color: ${({theme:e})=>e.colors[e.mode].text};
  max-width: 800px;
  margin: 0 auto 3rem;
  line-height: 1.6;
  opacity: 0.8;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    padding: 0 1rem;
  }
`,iy=R.section`
  padding: 100px 20px;
  position: relative;
  
  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`,od=R.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`,Oa=R.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  background: linear-gradient(to right, #EC4899, #F472B6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,LA=R.div`
  font-size: 1.2rem;
  line-height: 1.7;
  color: ${({theme:e})=>e.colors[e.mode].text};
  margin-bottom: 3rem;
  text-align: center;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`,$A=R.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2.5rem;
  margin-top: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`,xi=R(q.div)`
  background: rgba(236, 72, 153, 0.05);
  border-radius: 16px;
  padding: 2.5rem;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 40px rgba(236, 72, 153, 0.15);
  }
`,vi=R.h3`
  font-size: 1.6rem;
  font-weight: 600;
  margin-bottom: 1.2rem;
  color: ${({theme:e})=>e.colors[e.mode].primary};
`,er=R.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: ${({theme:e})=>e.colors[e.mode].text};
  opacity: 0.9;
  flex-grow: 1;
`,MA=R.section`
  padding: 80px 20px;
  position: relative;
  overflow: hidden;
  
  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`,oy=R.div`
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 4rem;
  align-items: center;
  margin-bottom: 6rem;

  &:nth-child(even) {
    grid-template-columns: 1.2fr 1fr;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr !important;
    gap: 2rem;
    text-align: center;
    margin-bottom: 4rem;
  }
`,sy=R.div`
  padding-right: 2rem;

  @media (max-width: 768px) {
    padding-right: 0;
    order: 2;
  }
`,ay=R.div`
  position: relative;
  
  @media (max-width: 768px) {
    order: 1;
  }
`,ly=R(q.div)`
  position: relative;
  perspective: 1000px;
  
  img {
    width: 100%;
    max-width: 500px;
    height: auto;
    border-radius: 24px;
    box-shadow: 0 20px 40px rgba(236, 72, 153, 0.15);
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 24px;
    background: linear-gradient(
      45deg,
      rgba(236, 72, 153, 0.1),
      rgba(244, 114, 182, 0.1)
    );
    pointer-events: none;
  }
`,_A=R.span`
  display: inline-block;
  width: 3px;
  height: 1.2em;
  background-color: ${({theme:e})=>e.mode==="dark"?"#EC4899":"#ce2a7b"};
  margin-left: 2px;
  animation: blink 1s step-end infinite;

  @keyframes blink {
    from, to { opacity: 1; }
    50% { opacity: 0; }
  }
`,BA=()=>{const[e,n]=b.useState(""),[i,o]=b.useState(!1),[a,u]=b.useState(0),c=b.useRef(100),d=b.useRef(50),p=b.useRef(1500);b.useEffect(()=>{n(""),o(!1),u(0);const g=setTimeout(()=>{n(Ba[0].slice(0,1))},500);return()=>clearTimeout(g)},[]),b.useEffect(()=>{let g;if(i)e===""?(o(!1),u(x=>(x+1)%Ba.length),g=setTimeout(()=>{},500)):g=setTimeout(()=>{n(e.slice(0,-1))},d.current);else{const x=Ba[a];e===x?g=setTimeout(()=>{o(!0)},p.current):g=setTimeout(()=>{n(x.slice(0,e.length+1))},c.current)}return()=>clearTimeout(g)},[e,i,a,Ba]);const m={hidden:{y:20,opacity:0},visible:{y:0,opacity:1,transition:{type:"spring",stiffness:300,damping:20}}};return y.jsxs(y.Fragment,{children:[y.jsx(RA,{children:y.jsxs(AA,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8},children:[y.jsxs(DA,{children:[e,y.jsx(_A,{})]}),y.jsx(IA,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.6},children:"实时翻译，支持40国语言，让沟通无国界，让跨语言交流如同母语般自然流畅"})]})}),y.jsx(iy,{children:y.jsxs(od,{children:[y.jsx(Oa,{children:"同传译梦是什么？"}),y.jsx(LA,{children:"泡泡同传译梦是一款专注于实时同声传译的应用，支持40个国家的语言，能够在各种场景下提供即时翻译服务。 它特别适合会议同传、实时对话、演讲翻译等需要即时性的场合，让不同语言背景的人们能够无障碍地交流， 就像使用同一种语言一样自然流畅，彻底消除语言壁垒。"})]})}),y.jsx(MA,{children:y.jsxs(od,{children:[y.jsxs(oy,{children:[y.jsxs(sy,{children:[y.jsx(Oa,{style:{textAlign:"left"},children:"实时翻译"}),y.jsx(er,{style:{fontSize:"1.2rem",marginBottom:"2rem"},children:"同传译梦最大的特点是实时性，能够在您说话的同时进行翻译，延迟几乎可以忽略不计。 这使它成为国际会议、商务谈判、学术交流等场合的理想工具，让演讲者的话语几乎同步地 传递给使用不同语言的听众，保持交流的连贯性和流畅度。"})]}),y.jsx(ay,{children:y.jsx(ly,{initial:{opacity:0,scale:.8},whileInView:{opacity:1,scale:1,transition:{type:"spring",duration:1,bounce:.4}},animate:{y:[0,-10,0],rotateZ:[-1,1,-1]},transition:{duration:6,repeat:1/0,ease:"easeInOut"},viewport:{once:!0},children:y.jsx("img",{src:"/WuKonWeb4/assets/tongchuanyimeng.png",alt:"同传译梦实时翻译"})})})]}),y.jsxs(oy,{children:[y.jsx(ay,{children:y.jsx(ly,{initial:{opacity:0,scale:.8},whileInView:{opacity:1,scale:1,transition:{type:"spring",duration:1,bounce:.4}},animate:{y:[0,-10,0],rotateZ:[1,-1,1]},transition:{duration:6,repeat:1/0,ease:"easeInOut"},viewport:{once:!0},children:y.jsx("img",{src:"/WuKonWeb4/assets/appindex.png",alt:"同传译梦多语种支持"})})}),y.jsxs(sy,{children:[y.jsx(Oa,{style:{textAlign:"left"},children:"多语种支持"}),y.jsx(er,{style:{fontSize:"1.2rem",marginBottom:"2rem"},children:"同传译梦支持40个国家的语言，覆盖全球主要语言和地区性语言。 无论是英语、法语、德语、西班牙语、中文、日语、韩语，还是阿拉伯语、俄语等， 同传译梦都能提供准确流畅的翻译，让全球沟通变得轻松自如。"})]})]})]})}),y.jsx(iy,{children:y.jsxs(od,{children:[y.jsx(Oa,{children:"主要功能"}),y.jsxs($A,{children:[y.jsxs(xi,{as:q.div,variants:m,whileHover:{scale:1.03},children:[y.jsx(vi,{children:"会议同传"}),y.jsx(er,{children:"为多语言会议提供实时翻译服务，支持多人同时参与，每个参与者都能听到自己语言的翻译内容，让国际会议沟通无障碍。"})]}),y.jsxs(xi,{as:q.div,variants:m,whileHover:{scale:1.03},children:[y.jsx(vi,{children:"语音翻译"}),y.jsx(er,{children:"实时捕捉语音内容并转换为目标语言，保留原始语调和情感特征，使交流更加自然流畅，适用于面对面交谈和远程通话。"})]}),y.jsxs(xi,{as:q.div,variants:m,whileHover:{scale:1.03},children:[y.jsx(vi,{children:"演讲翻译"}),y.jsx(er,{children:"为演讲、讲座、培训等场合提供实时字幕和语音翻译，帮助听众即时理解内容，提升国际活动的参与体验。"})]}),y.jsxs(xi,{as:q.div,variants:m,whileHover:{scale:1.03},children:[y.jsx(vi,{children:"旅行助手"}),y.jsx(er,{children:"支持离线模式，无需网络也能在国外旅行时进行基本沟通。内置常用旅行短语和场景对话，帮助快速应对各种旅行情况。"})]}),y.jsxs(xi,{as:q.div,variants:m,whileHover:{scale:1.03},children:[y.jsx(vi,{children:"多端同步"}),y.jsx(er,{children:"支持在手机、平板、电脑等多种设备上同步使用，随时随地满足翻译需求，适应不同场景下的使用习惯。"})]}),y.jsxs(xi,{as:q.div,variants:m,whileHover:{scale:1.03},children:[y.jsx(vi,{children:"专业术语"}),y.jsx(er,{children:"内置医疗、法律、技术、金融等多个专业领域的术语库，确保在专业场合下翻译的准确性和专业性，满足不同行业的需求。"})]})]})]})})]})},Fa=["泡泡筋斗云","Bubble Cloud","バブルクラウド","Nuage de Bulles","Nube de Burbujas","버블 클라우드","Nuvola di Bolle","Blasenwolke","Облако Пузырей","Nuvem de Bolhas","泡泡筋斗云","बुलबुला बादल","سحابة الفقاعات","Σύννεφο Φυσαλίδων","Kabarcık Bulutu","Bubbla Moln","Kupla Pilvi","เมฆฟอง","Mây Bong Bóng","Awan Gelembung","Ulap ng Bula","Köpük Buludu","Wingu la Bubble","Nor de Bule","Bublinový Mrak","Chmura Bąbelków","Burbuļu Mākonis","Mullipilv","Burbulių Debesis","Buborék Felhő","Мехурен Облак","Мехур Облак","Պղպջակային Ամպ","ბუშტის ღრუბელი","Boble Sky","Awan Gelembung","Mây Bong Bóng","Bellenwolk","ענן בועות","Scamall Bolgóideach"],OA=R.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  position: relative;
  overflow: hidden;
  padding-top: calc(80px + 2rem);
  
  @media (max-width: 768px) {
    padding: 1rem;
    min-height: 80vh;
    padding-top: calc(60px + 2rem);
  }
`,FA=R(q.div)`
  text-align: center;
  z-index: 1;
  max-width: 1000px;
  padding-top: 1rem;
  
  @media (max-width: 768px) {
    padding-top: 2rem;
  }
`,NA=R(q.h1)`
  font-size: 4rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  color: ${({theme:e})=>e.colors[e.mode].primary};
  min-height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    font-size: 2.8rem;
    min-height: 3.5rem;
  }
`,VA=R(q.p)`
  font-size: 1.5rem;
  color: ${({theme:e})=>e.colors[e.mode].text};
  max-width: 800px;
  margin: 0 auto 3rem;
  line-height: 1.6;
  opacity: 0.8;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    padding: 0 1rem;
  }
`,uy=R.section`
  padding: 100px 20px;
  position: relative;
  
  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`,sd=R.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`,Na=R.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  background: linear-gradient(to right, #2563EB, #3b82f6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,zA=R.div`
  font-size: 1.2rem;
  line-height: 1.7;
  color: ${({theme:e})=>e.colors[e.mode].text};
  margin-bottom: 3rem;
  text-align: center;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`,UA=R.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2.5rem;
  margin-top: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`,wi=R(q.div)`
  background: rgba(37, 99, 235, 0.05);
  border-radius: 16px;
  padding: 2.5rem;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 40px rgba(37, 99, 235, 0.15);
  }
`,Si=R.h3`
  font-size: 1.6rem;
  font-weight: 600;
  margin-bottom: 1.2rem;
  color: ${({theme:e})=>e.colors[e.mode].primary};
`,tr=R.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: ${({theme:e})=>e.colors[e.mode].text};
  opacity: 0.9;
  flex-grow: 1;
`,WA=R.section`
  padding: 80px 20px;
  position: relative;
  overflow: hidden;
  
  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`,cy=R.div`
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 4rem;
  align-items: center;
  margin-bottom: 6rem;

  &:nth-child(even) {
    grid-template-columns: 1.2fr 1fr;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr !important;
    gap: 2rem;
    text-align: center;
    margin-bottom: 4rem;
  }
`,dy=R.div`
  padding-right: 2rem;

  @media (max-width: 768px) {
    padding-right: 0;
    order: 2;
  }
`,fy=R.div`
  position: relative;
  
  @media (max-width: 768px) {
    order: 1;
  }
`,py=R(q.div)`
  position: relative;
  perspective: 1000px;
  
  img {
    width: 100%;
    max-width: 500px;
    height: auto;
    border-radius: 24px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  }
`,HA=R.span`
  display: inline-block;
  width: 3px;
  height: 1.2em;
  background-color: ${({theme:e})=>e.mode==="dark"?"#2563EB":"#1d4ed8"};
  margin-left: 2px;
  animation: blink 1s step-end infinite;

  @keyframes blink {
    from, to { opacity: 1; }
    50% { opacity: 0; }
  }
`,KA=()=>{const[e,n]=b.useState(""),[i,o]=b.useState(!1),[a,u]=b.useState(0),c=b.useRef(100),d=b.useRef(50),p=b.useRef(1500);b.useEffect(()=>{n(""),o(!1),u(0);const g=setTimeout(()=>{n(Fa[0].slice(0,1))},500);return()=>clearTimeout(g)},[]),b.useEffect(()=>{let g;if(i)e===""?(o(!1),u(x=>(x+1)%Fa.length),g=setTimeout(()=>{},500)):g=setTimeout(()=>{n(e.slice(0,-1))},d.current);else{const x=Fa[a];e===x?g=setTimeout(()=>{o(!0)},p.current):g=setTimeout(()=>{n(x.slice(0,e.length+1))},c.current)}return()=>clearTimeout(g)},[e,i,a,Fa]);const m={hidden:{y:20,opacity:0},visible:{y:0,opacity:1,transition:{type:"spring",stiffness:300,damping:20}}};return y.jsxs(y.Fragment,{children:[y.jsx(OA,{children:y.jsxs(FA,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8},children:[y.jsxs(NA,{children:[e,y.jsx(HA,{})]}),y.jsx(VA,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.6},children:"让AI成为您的私人翻译官，实时翻译、多语言互译，打破语言障碍"})]})}),y.jsx(uy,{children:y.jsxs(sd,{children:[y.jsx(Na,{children:"筋斗云是什么？"}),y.jsx(zA,{children:"泡泡筋斗云是一款高效的多语言翻译工具，覆盖全球40个国家的主要语言，翻译速度极快且准确度高。 无论是日常对话、商务交流、学术研究还是旅行需求，筋斗云都能提供准确、流畅的翻译服务， 帮助用户轻松跨越语言障碍，与世界各地的人们无障碍沟通。"})]})}),y.jsx(WA,{children:y.jsxs(sd,{children:[y.jsxs(cy,{children:[y.jsxs(dy,{children:[y.jsx(Na,{style:{textAlign:"left"},children:"超快翻译速度"}),y.jsx(tr,{style:{fontSize:"1.2rem",marginBottom:"2rem"},children:"筋斗云采用先进的神经网络翻译技术，翻译速度比传统翻译工具快数倍。无论是短句还是长篇文档， 都能在极短时间内完成高质量翻译，让您在国际交流中不再有等待的困扰，实现即时无缝的跨语言沟通。"})]}),y.jsx(fy,{children:y.jsx(py,{initial:{opacity:0,scale:.8},whileInView:{opacity:1,scale:1,transition:{type:"spring",duration:1,bounce:.4}},animate:{y:[0,-10,0],rotateZ:[-1,1,-1]},transition:{duration:6,repeat:1/0,ease:"easeInOut"},viewport:{once:!0},children:y.jsx("img",{src:"/WuKonWeb4/assets/appindex.png",alt:"筋斗云翻译界面"})})})]}),y.jsxs(cy,{children:[y.jsx(fy,{children:y.jsx(py,{initial:{opacity:0,scale:.8},whileInView:{opacity:1,scale:1,transition:{type:"spring",duration:1,bounce:.4}},animate:{y:[0,-10,0],rotateZ:[1,-1,1]},transition:{duration:6,repeat:1/0,ease:"easeInOut"},viewport:{once:!0},children:y.jsx("img",{src:"/WuKonWeb4/assets/jindouyun.png",alt:"筋斗云多语言支持"})})}),y.jsxs(dy,{children:[y.jsx(Na,{style:{textAlign:"left"},children:"40国语言支持"}),y.jsx(tr,{style:{fontSize:"1.2rem",marginBottom:"2rem"},children:"筋斗云支持全球40个国家的主要语言，包括英语、法语、德语、西班牙语、俄语、 日语、韩语、阿拉伯语等。无论您身处何地，面对何种语言环境，筋斗云都能为您 提供精准的翻译服务，让全球沟通变得简单自然。"})]})]})]})}),y.jsx(uy,{children:y.jsxs(sd,{children:[y.jsx(Na,{children:"主要功能"}),y.jsxs(UA,{children:[y.jsxs(wi,{as:q.div,variants:m,whileHover:{scale:1.03},children:[y.jsx(Si,{children:"文本翻译"}),y.jsx(tr,{children:"支持多种语言之间的文本翻译，保留原文格式和语义，提供准确流畅的翻译结果。适用于各类文档、邮件、聊天消息等文本内容。"})]}),y.jsxs(wi,{as:q.div,variants:m,whileHover:{scale:1.03},children:[y.jsx(Si,{children:"语音翻译"}),y.jsx(tr,{children:"将语音实时转换为其他语言，支持多种口音和方言识别，准确捕捉语音内容并快速翻译，适合面对面交流和电话会议。"})]}),y.jsxs(wi,{as:q.div,variants:m,whileHover:{scale:1.03},children:[y.jsx(Si,{children:"图像翻译"}),y.jsx(tr,{children:"识别图片中的文字并进行翻译，支持多种图片格式，适用于菜单、路标、说明书等场景，让旅行和日常生活更便捷。"})]}),y.jsxs(wi,{as:q.div,variants:m,whileHover:{scale:1.03},children:[y.jsx(Si,{children:"文档翻译"}),y.jsx(tr,{children:"批量处理各类文档，包括Word、PDF、PowerPoint等格式，保留原始排版和格式，适合商务和学术交流场景。"})]}),y.jsxs(wi,{as:q.div,variants:m,whileHover:{scale:1.03},children:[y.jsx(Si,{children:"离线翻译"}),y.jsx(tr,{children:"支持下载语言包进行离线翻译，无需网络也能使用核心功能，适合国际旅行和网络受限的环境，随时随地满足翻译需求。"})]}),y.jsxs(wi,{as:q.div,variants:m,whileHover:{scale:1.03},children:[y.jsx(Si,{children:"专业词汇"}),y.jsx(tr,{children:"内置多个领域的专业词汇库，包括医学、法律、工程、金融等，确保专业术语的准确翻译，满足不同行业的专业需求。"})]})]})]})})]})},GA=R(q.div)`
  display: flex !important;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 0.5rem 1rem;
  margin: 0.5rem auto 1rem;
  width: 90%;
  max-width: 850px;
  position: relative;
  z-index: 1;
  transition: all 0.3s ease;
  
  @media (max-width: 768px) {
    gap: 1rem;
    padding: 0.3rem 0.5rem;
    margin: -2rem auto 0.5rem; /* 向上移动导航栏 */
    width: 95%;
  }
  
  @media (max-width: 480px) {
    margin: -3rem auto 0.5rem; /* 在更小的屏幕上移动更多 */
    gap: 0.8rem;
  }
`,YA=R(q.div)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${e=>e.$position==="center"?"90px":"70px"};
  height: ${e=>e.$position==="center"?"90px":"70px"};
  
  @media (max-width: 768px) {
    width: ${e=>e.$position==="center"?"70px":"55px"};
    height: ${e=>e.$position==="center"?"70px":"55px"};
  }
  
  @media (max-width: 480px) {
    width: ${e=>e.$position==="center"?"60px":"50px"};
    height: ${e=>e.$position==="center"?"60px":"50px"};
  }
`,qA=R(q.div)`
  cursor: pointer;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`,g1=R(q.div)`
  position: relative;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  
  img {
    width: ${e=>e.$position==="center"?"100px":"60px"};
    height: ${e=>e.$position==="center"?"100px":"60px"};
    border-radius: 50%;
    transition: all 0.4s ease;
    opacity: ${e=>e.$position==="center"?1:.6};
    filter: drop-shadow(0 0 ${e=>e.$position==="center"?"12px":"0px"} rgba(255, 255, 255, 0.4));
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    
    @media (max-width: 768px) {
      width: ${e=>e.$position==="center"?"80px":"50px"};
      height: ${e=>e.$position==="center"?"80px":"50px"};
    }
    
    @media (max-width: 480px) {
      width: ${e=>e.$position==="center"?"65px":"40px"};
      height: ${e=>e.$position==="center"?"65px":"40px"};
      filter: drop-shadow(0 0 ${e=>e.$position==="center"?"8px":"0px"} rgba(255, 255, 255, 0.4));
    }
  }

  &:hover img {
    transform: translate(-50%, -50%) scale(1.1);
    opacity: ${e=>e.$position==="center"?1:.8};
    filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.5));
  }
`,XA=R(q.span)`
  position: absolute;
  bottom: ${e=>e.$position==="center"?"-80px":"-60px"};
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
  color: ${({theme:e})=>e.colors[e.mode].text};
  font-size: ${e=>e.$position==="center"?"0.9rem":"0.8rem"};
  font-weight: 600;
  opacity: 0;
  transition: opacity 0.3s ease;

  ${g1}:hover & {
    opacity: 1;
  }
  
  @media (max-width: 768px) {
    bottom: ${e=>e.$position==="center"?"-60px":"-50px"};
    font-size: ${e=>e.$position==="center"?"0.8rem":"0.7rem"};
  }
  
  @media (max-width: 480px) {
    bottom: ${e=>e.$position==="center"?"-50px":"-40px"};
    font-size: ${e=>e.$position==="center"?"0.7rem":"0.6rem"};
  }
`,hy={initial:{y:0},animate:{y:[-3,3,-3],transition:{duration:3,repeat:1/0,ease:"easeInOut"}}},QA=()=>{const e=Ht(),n=Fi(),[i,o]=b.useState(0),[a,u]=b.useState(!1),[c,d]=b.useState(0),p=[{icon:"/WuKonWeb4/assets/logo.png",label:"首页",path:"/"},{icon:"/WuKonWeb4/assets/jindouyun.png",label:"泡泡筋斗云",path:"/jindouyun"},{icon:"/WuKonWeb4/assets/pingxingyuzhou.png",label:"泡泡平行宇宙",path:"/parallel-universe"},{icon:"/WuKonWeb4/assets/tongchuanyimeng.png",label:"泡泡同传译梦",path:"/interpreter"}],m=S=>S==="/"&&e.pathname==="/"?!0:e.pathname===S;b.useEffect(()=>{const S=p.findIndex(k=>m(k.path));o(S>=0?S:0)},[e.pathname]);const g=()=>{const S=p.length,k=(i-1+S)%S,T=(i+1)%S;return[{...p[k],position:"left"},{...p[i],position:"center"},{...p[T],position:"right"}]},x=(S,k)=>T=>{T.preventDefault(),!(k==="center"||a)&&(u(!0),d(k==="left"?-1:1),n(S),setTimeout(()=>{u(!1)},600))},w=g();return y.jsx(GA,{className:"navigation-menu-container",children:y.jsx(zr,{custom:c,children:w.map(S=>y.jsx(YA,{className:"nav-item",$position:S.position,children:y.jsx(qA,{onClick:x(S.path,S.position),children:y.jsx(g1,{$position:S.position,children:y.jsxs(q.div,{initial:hy.initial,animate:hy.animate,children:[y.jsx("img",{src:S.icon,alt:S.label}),y.jsx(XA,{$position:S.position,children:S.label})]})})})},S.path))})})},JA={login:async(e,n)=>await lt.loginWithPassword(e,n),loginWithPhone:async(e,n)=>await lt.loginWithPhoneCode(e,n),sendVerificationCode:async e=>await lt.sendVerificationCode(e),logout:async()=>await lt.logout(),getUserInfo:async()=>await lt.getUserInfo(),isLoggedIn:async()=>await lt.checkLoginStatus()},ZA=R.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  position: relative;
  overflow: hidden;
  
  @media (max-width: 768px) {
    padding: 1rem;
    min-height: 80vh;
  }
`,e3=R.h1`
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 3.5rem;
  text-align: center;
  color: ${({theme:e})=>e.colors[e.mode].secondary};
  position: relative;
  z-index: 1;
  min-height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
`,t3=R.span`
  position: relative;
  display: inline-block;
  
  &::after {
    content: '|';
    position: absolute;
    right: -8px;
    top: -2px;
    color: ${({theme:e})=>e.colors[e.mode].secondary};
    animation: blink 1s step-end infinite;
  }
  
  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }
`,n3=R(q.a)`
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
  color: ${({theme:e})=>e.colors[e.mode].text};
  font-size: 1rem;
  text-decoration: none;
  display: flex;
  align-items: center;
  z-index: 10;
  
  &:hover {
    color: ${({theme:e})=>e.mode==="dark"?"#7C3AED":"#7230e3"};
  }
  
  svg {
    margin-right: 0.5rem;
  }
`,r3=R(q.form)`
  width: 100%;
  max-width: 350px;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`,ad=R(q.div)`
  position: relative;
`,ld=R.div`
  position: relative;
  display: flex;
  width: 100%;
`,ud=R.input`
  width: 100%;
  padding: 0.9rem 1rem;
  border-radius: 10px;
  background: ${({theme:e})=>e.mode==="dark"?"rgba(255, 255, 255, 0.05)":"rgba(0, 0, 0, 0.05)"};
  border: 1px solid ${({theme:e})=>e.mode==="dark"?"rgba(255, 255, 255, 0.1)":"rgba(0, 0, 0, 0.1)"};
  color: ${({theme:e})=>e.colors[e.mode].text};
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${({theme:e})=>e.mode==="dark"?"#2563EB":"#3b82f6"};
    box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.2);
  }
  
  &::placeholder {
    color: ${({theme:e})=>`${e.colors[e.mode].text}80`};
  }
  
  // 为验证码输入框添加右侧内边距，为按钮留出空间
  &.with-button {
    padding-right: 120px;
  }
`,i3=R(q.button)`
  position: absolute;
  right: 5px;
  top: 5px;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  background: #3b82f6;
  color: white;
  border: none;
  font-size: 0.85rem;
  cursor: pointer;
  white-space: nowrap;
  height: calc(100% - 10px);
  z-index: 2;
  
  &:hover {
    background: #2563eb;
  }
  
  &:disabled {
    background: rgba(59, 130, 246, 0.5);
    color: rgba(255, 255, 255, 0.7);
    cursor: not-allowed;
  }
`,my=R(q.button)`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%) !important;
  background: none;
  border: none;
  padding: 0;
  line-height: 0;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 30px;
  height: 30px;
  
  img {
    width: 24px;
    height: 24px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,o3=R.div`
  text-align: center;
  margin-top: 2.5rem;
  color: ${({theme:e})=>e.colors[e.mode].text};
  font-size: 0.95rem;
  position: relative;
  z-index: 1;
  
  a {
    color: ${({theme:e})=>e.colors[e.mode].secondary};
    text-decoration: none;
    font-weight: 500;
    
    &:hover {
      text-decoration: underline;
    }
  }
`,gy={hidden:{opacity:0,y:20,height:0},visible:{opacity:1,y:0,height:"auto",transition:{duration:.3,ease:"easeOut"}},exit:{opacity:0,y:-20,height:0,transition:{duration:.2}}},s3=()=>{const[e,n]=b.useState(""),[i,o]=b.useState(""),[a,u]=b.useState(""),[c,d]=b.useState(!1),[p,m]=b.useState(null),[g,x]=b.useState(0),[w,S]=b.useState(!1),[k,T]=b.useState(""),[E,P]=b.useState(!1),[$,D]=b.useState(0),F=b.useRef(100),O=b.useRef(50),V=b.useRef(1500),W=Fi(),H=["你好，泡友~","Hello, Bubble Friend~","こんにちは、バブル友達~","Bonjour, Ami Bulle~","Hola, Amigo Burbuja~","안녕, 버블 친구~","Ciao, Amico Bolla~","Hallo, Blasenfreund~","Привет, Пузырьковый друг~","Olá, Amigo Bolha~","你好，泡友~","नमस्ते, बबल मित्र~","مرحبا، صديق الفقاعة~","Γεια σου, φίλε φυσαλίδα~","Merhaba, Kabarcık Arkadaşım~","Hej, Bubbla Vän~","Hei, Kupla Ystävä~","สวัสดี เพื่อนฟอง~","Xin chào, Bạn Bong Bóng~","Halo, Teman Gelembung~","Kumusta, Kaibigan ng Bula~","Salam, Dost Həbab~","Habari, Rafiki wa Bubble~","Salut, Prieten Bulă~","Ahoj, Bublinový Příteli~","Cześć, Przyjacielu Bańki~","Sveiki, Burbuļa Draugs~","Tere, Mulli Sõber~","Sveiki, Burbulo Drauge~","Helló, Buborék Barát~","Здравейте, Мехур Приятел~","Здраво, Меур Пријатељ~","Բարեւ, Պղպջակ Ընկեր~","გამარჯობა, ბუშტი მეგობარი~","Hej, Boble Ven~","Hai, Teman Gelembung~","Chào, Bạn Bong Bóng~","Hallo, Borrelvriend~","שלום, חבר בועה~","Dia dhuit, Cara Bolgóideach~"];b.useEffect(()=>{T(""),P(!1),D(0);const se=setTimeout(()=>{T(H[0].slice(0,1))},500);return()=>clearTimeout(se)},[]),b.useEffect(()=>{let se;if(E)k===""?(P(!1),D(Te=>(Te+1)%H.length),se=setTimeout(()=>{},500)):se=setTimeout(()=>{T(k.slice(0,-1))},O.current);else{const Te=H[$];k===Te?se=setTimeout(()=>{P(!0)},V.current):se=setTimeout(()=>{T(Te.slice(0,k.length+1))},F.current)}return()=>clearTimeout(se)},[k,E,$,H]),b.useEffect(()=>{if(!e){d(!1),m(null),S(!1);return}o(""),u("");const se=/^1[3-9]\d{9}$/.test(e),Te=/^[a-zA-Z_]/.test(e);se?(m("phone"),d(!0),S(!0)):Te?(m("username"),d(!0),S(!1)):(/^1[3-9]/.test(e)?(m("phone"),d(!1)):(m(null),d(!1)),S(!1))},[e]),b.useEffect(()=>{if(g<=0)return;const se=setTimeout(()=>{x(g-1)},1e3);return()=>clearTimeout(se)},[g]);const Q=async()=>{if(!e||!w){Ue.error("请输入有效的手机号");return}try{await JA.sendVerificationCode(e),x(60),Ue.success("验证码已发送")}catch(se){Ue.error(se.message||"发送验证码失败")}},ae=async se=>{se.preventDefault();try{if(p==="username")await et.login(e,i),Ue.success("登录成功");else if(p==="phone")await et.loginWithPhone(e,a),Ue.success("登录成功");else return;W("/")}catch(Te){Ue.error(Te.message||"登录失败")}};return y.jsxs(ZA,{children:[y.jsx(n3,{href:"/WuKonWeb4",whileHover:{x:-5},transition:{duration:.2},children:y.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:y.jsx("path",{d:"M9.5 12.5L4.5 8L9.5 3.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}),y.jsx(e3,{children:y.jsx(t3,{children:k})}),y.jsxs(r3,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},onSubmit:ae,children:[y.jsx(ad,{children:y.jsxs(ld,{children:[y.jsx(ud,{type:"text",id:"identifier",value:e,onChange:se=>n(se.target.value),required:!0,placeholder:"请输入用户名或手机号",className:p==="phone"&&w?"with-button":""}),p==="phone"&&w&&y.jsx(i3,{type:"button",onClick:Q,disabled:g>0,whileHover:{scale:1.02},whileTap:{scale:.98},children:g>0?`${g}秒后重发`:"获取验证码"})]})}),y.jsxs(zr,{children:[c&&p==="username"&&y.jsx(ad,{variants:gy,initial:"hidden",animate:"visible",exit:"exit",children:y.jsxs(ld,{children:[y.jsx(ud,{type:"password",id:"password",value:i,onChange:se=>o(se.target.value),required:!0,placeholder:"请输入密码",style:{paddingRight:"50px"}}),y.jsx(my,{type:"submit",whileHover:{scale:1.1},whileTap:{scale:.9},children:y.jsx("img",{src:"/WuKonWeb4/assets/loginbutton.png",alt:"登录"})})]})},"password"),c&&p==="phone"&&y.jsx(ad,{variants:gy,initial:"hidden",animate:"visible",exit:"exit",children:y.jsxs(ld,{children:[y.jsx(ud,{type:"text",id:"verificationCode",value:a,onChange:se=>u(se.target.value),required:!0,placeholder:"请输入验证码",maxLength:6,style:{paddingRight:"50px"}}),y.jsx(my,{type:"submit",whileHover:{scale:1.1},whileTap:{scale:.9},children:y.jsx("img",{src:"/WuKonWeb4/assets/loginbutton.png",alt:"登录"})})]})},"verificationCode")]})]}),y.jsx(o3,{children:y.jsx("a",{href:"/WuKonWeb4/register",children:"没有Bubble ID？"})})]})},_l=()=>{const[e,n]=b.useState(()=>{const a=localStorage.getItem("theme");return a==="dark"||a==="light"?a:window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"});b.useEffect(()=>{const a=c=>{localStorage.getItem("theme")||n(c.matches?"dark":"light")},u=window.matchMedia("(prefers-color-scheme: dark)");return u.addEventListener("change",a),()=>u.removeEventListener("change",a)},[]),b.useEffect(()=>{localStorage.setItem("theme",e),document.documentElement.setAttribute("data-theme",e),document.body.className=e,document.documentElement.style.setProperty("--background",e==="dark"?"#000000":"#FFFFFF"),document.documentElement.style.setProperty("--text",e==="dark"?"#FFFFFF":"#1A1A1A")},[e]);const i=()=>{n(a=>{const u=a==="dark"?"light":"dark";return console.log("切换主题:",u),u})};return{theme:e,toggleTheme:i,toggleThemeWithRefresh:()=>{i(),setTimeout(()=>{window.location.reload()},100)}}},a3=R(q.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${e=>e.theme.colors[e.theme.mode].modalBg};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  backdrop-filter: blur(12px);
`,l3=R(q.div)`
  background: ${e=>e.theme.mode==="dark"?"linear-gradient(135deg, rgba(20, 20, 20, 0.95) 0%, rgba(15, 15, 15, 0.95) 100%)":"linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(245, 245, 245, 0.95) 100%)"};
  border-radius: 32px;
  width: 90%;
  max-width: 1200px;
  height: 90vh;
  max-height: 800px;
  position: relative;
  display: flex;
  overflow: hidden;
  border: 1px solid ${e=>e.theme.mode==="dark"?"rgba(255, 255, 255, 0.1)":"rgba(0, 0, 0, 0.1)"};
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5),
              0 0 0 1px ${e=>e.theme.mode==="dark"?"rgba(255, 255, 255, 0.05)":"rgba(0, 0, 0, 0.05)"},
              inset 0 1px 1px ${e=>e.theme.mode==="dark"?"rgba(255, 255, 255, 0.05)":"rgba(255, 255, 255, 0.7)"};
`,u3=R(q.button)`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: transparent;
  border: none;
  color: ${({theme:e})=>e.colors[e.mode].text};
  font-size: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10001;
  
  &:hover {
    color: ${({theme:e})=>e.colors[e.mode].secondary};
  }
`,c3=R.div`
  width: 280px;
  background: ${e=>e.theme.mode==="dark"?"linear-gradient(180deg, rgba(25, 25, 25, 0.9) 0%, rgba(20, 20, 20, 0.9) 100%)":"linear-gradient(180deg, rgba(250, 250, 250, 0.9) 0%, rgba(245, 245, 245, 0.9) 100%)"};
  padding: 2rem;
  border-right: 1px solid ${e=>e.theme.mode==="dark"?"rgba(255, 255, 255, 0.1)":"rgba(0, 0, 0, 0.1)"};
  display: flex;
  flex-direction: column;
  gap: 1rem;
  box-shadow: inset -5px 0 15px -5px ${e=>e.theme.mode==="dark"?"rgba(0, 0, 0, 0.3)":"rgba(0, 0, 0, 0.1)"};
`;R.div`
  padding: 0 24px 24px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  margin-bottom: 24px;
`;R.div`
  width: 80px;
  height: 80px;
  margin: 0 auto 16px;
  border-radius: 50%;
  background: linear-gradient(135deg, #2563EB, #3b82f6);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  color: ${({theme:e})=>e.colors[e.mode].text};
  box-shadow: 0 4px 20px rgba(37, 99, 235, 0.4);
`;R.h2`
  font-size: 18px;
  color: ${e=>e.theme.colors[e.theme.mode].text};
  margin: 0;
  text-align: center;
`;const d3=R.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex-grow: 1;
`,f3=R.div`
  margin-top: auto;
  padding-top: 20px;
  border-top: 1px solid ${e=>e.theme.colors[e.theme.mode].cardBorder};
`,Va=R.div`
  padding: 12px 16px;
  margin: 4px 0;
  border-radius: 16px;
  color: ${e=>e.$isActive?e.theme.colors[e.theme.mode].text:e.theme.colors[e.theme.mode].gray};
  background: ${e=>e.$isActive?e.theme.mode==="dark"?"linear-gradient(135deg, rgba(37, 99, 235, 0.2) 0%, rgba(37, 99, 235, 0.1) 100%)":"linear-gradient(135deg, rgba(37, 99, 235, 0.1) 0%, rgba(37, 99, 235, 0.05) 100%)":"transparent"};
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: all 0.3s ease;
  box-shadow: ${e=>e.$isActive?e.theme.mode==="dark"?"0 2px 5px rgba(0, 0, 0, 0.2), inset 0 1px 1px rgba(255, 255, 255, 0.05)":"0 2px 5px rgba(0, 0, 0, 0.05), inset 0 1px 1px rgba(255, 255, 255, 0.5)":"none"};
  
  &:hover {
    background: ${e=>e.theme.mode==="dark"?"linear-gradient(135deg, rgba(37, 99, 235, 0.15) 0%, rgba(37, 99, 235, 0.05) 100%)":"linear-gradient(135deg, rgba(37, 99, 235, 0.08) 0%, rgba(37, 99, 235, 0.02) 100%)"};
    color: ${e=>e.theme.colors[e.theme.mode].text};
    transform: translateY(-1px);
    box-shadow: 0 2px 5px ${e=>e.theme.mode==="dark"?"rgba(0, 0, 0, 0.2)":"rgba(0, 0, 0, 0.05)"};
  }
  
  svg {
    width: 20px;
    height: 20px;
    margin-right: 12px;
  }
`,p3=R.div`
  flex: 1;
  padding: 40px;
  overflow-y: auto;
  background: ${e=>e.theme.mode==="dark"?"linear-gradient(135deg, rgba(15, 15, 15, 0.7) 0%, rgba(10, 10, 10, 0.7) 100%)":"linear-gradient(135deg, rgba(250, 250, 250, 0.7) 0%, rgba(240, 240, 240, 0.7) 100%)"};
  box-shadow: inset 5px 0 15px -5px ${e=>e.theme.mode==="dark"?"rgba(0, 0, 0, 0.3)":"rgba(0, 0, 0, 0.1)"};
`,pr=R.div`
  max-width: 800px;
  margin: 0 auto;
  background: ${e=>e.theme.mode==="dark"?"rgba(25, 25, 25, 0.5)":"rgba(255, 255, 255, 0.5)"};
  border-radius: 24px;
  padding: 20px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  border: 1px solid ${e=>e.theme.mode==="dark"?"rgba(255, 255, 255, 0.05)":"rgba(0, 0, 0, 0.05)"};
`,Rr=R.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
  border-bottom: 1px solid ${e=>e.theme.colors[e.theme.mode].cardBorder};
  
  &:last-child {
    border-bottom: none;
  }
`,Ar=R.span`
  color: ${e=>e.theme.colors[e.theme.mode].gray};
  font-size: 16px;
`,bi=R.span`
  color: ${e=>e.theme.colors[e.theme.mode].text};
  font-size: 16px;
`,h3=R.button`
  background: transparent;
  border: 1px solid ${e=>e.theme.colors[e.theme.mode].gray};
  padding: 12px 24px;
  border-radius: 18px;
  color: ${({theme:e})=>e.colors[e.mode].text};
  cursor: pointer;
  font-size: 16px;
  transition: all 0.3s ease;
  outline: none !important;
  -webkit-tap-highlight-color: transparent;
  
  &:hover, &:focus, &:active {
    background: ${e=>e.theme.colors[e.theme.mode].hoverBg};
    transform: translateY(-2px);
    outline: none !important;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    border-color: ${e=>e.theme.mode==="dark"?"#3b82f6":"#2563eb"};
  }
`,yy=R.button`
  background: ${({theme:e})=>e.mode==="dark"?"linear-gradient(135deg, #EF4444 0%, #DC2626 100%)":"linear-gradient(135deg, #DC2626 0%, #B91C1C 100%)"};
  border: none;
  padding: 12px 16px;
  border-radius: 24px;
  color: white;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.3s ease;
  width: 48%;
  margin-top: 20px;
  outline: none !important;
  -webkit-tap-highlight-color: transparent;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  box-shadow: 0 4px 10px rgba(220, 38, 38, 0.3);
  
  &:hover, &:focus, &:active {
    background: ${({theme:e})=>e.mode==="dark"?"linear-gradient(135deg, #DC2626 0%, #B91C1C 100%)":"linear-gradient(135deg, #B91C1C 0%, #991B1B 100%)"};
    transform: translateY(-2px);
    outline: none !important;
    box-shadow: 0 6px 12px rgba(220, 38, 38, 0.4);
  }
`,m3=R.button`
  background: ${({theme:e})=>e.mode==="dark"?"linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)":"linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)"};
  border: none;
  padding: 12px 16px;
  border-radius: 24px;
  color: white;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.3s ease;
  width: 48%;
  outline: none !important;
  -webkit-tap-highlight-color: transparent;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  box-shadow: 0 4px 10px rgba(37, 99, 235, 0.3);
  
  &:hover, &:focus, &:active {
    background: ${({theme:e})=>e.mode==="dark"?"linear-gradient(135deg, #1D4ED8 0%, #1E40AF 100%)":"linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)"};
    transform: translateY(-2px);
    outline: none !important;
    box-shadow: 0 6px 12px rgba(37, 99, 235, 0.4);
  }
`,g3=R.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`,y3=R.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 0;
  border-bottom: 1px solid rgba(37, 99, 235, 0.1);
  
  &:last-child {
    border-bottom: none;
  }
`,x3=R.span`
  color: ${e=>e.theme.colors[e.theme.mode].text};
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 8px;
  
  svg {
    width: 16px;
    height: 16px;
  }
`,v3=R.label`
  position: relative;
  display: inline-block;
  width: 44px;
  height: 24px;
  
  input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  
  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({theme:e})=>e.mode==="dark"?"rgba(255, 255, 255, 0.2)":"rgba(0, 0, 0, 0.15)"};
    transition: .4s;
    border-radius: 24px;
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
    
    &:before {
      position: absolute;
      content: "";
      height: 18px;
      width: 18px;
      left: 3px;
      bottom: 3px;
      background-color: ${({theme:e})=>(e.mode==="dark","#FFFFFF")};
      transition: .4s;
      border-radius: 50%;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    }
  }
  
  input:checked + span {
    background-color: ${({theme:e})=>e.mode==="dark"?"#2563EB":"#3b82f6"};
  }
  
  input:checked + span:before {
    background-color: #FFFFFF;
    transform: translateX(20px);
  }
`,y1=R.h2`
  color: ${e=>e.theme.colors[e.theme.mode].text};
  margin-bottom: 24px;
  font-size: 20px;
`,w3=R.span`
  color: ${({theme:e})=>e.mode==="dark"?"#10B981":"#059669"};
`,S3=R.span`
  color: ${({theme:e})=>e.mode==="dark"?"#EF4444":"#DC2626"};
`,xy=({userData:e})=>y.jsxs(pr,{children:[y.jsxs(Rr,{children:[y.jsx(Ar,{children:"用户名"}),y.jsx(bi,{children:e.username})]}),y.jsxs(Rr,{children:[y.jsx(Ar,{children:"昵称"}),y.jsx(bi,{children:e.nickname})]}),y.jsxs(Rr,{children:[y.jsx(Ar,{children:"手机号"}),y.jsx(bi,{children:e.phone})]}),y.jsxs(Rr,{children:[y.jsx(Ar,{children:"泡泡ID"}),y.jsx(bi,{children:e.bubble_id})]}),y.jsxs(Rr,{children:[y.jsx(Ar,{children:"会员状态"}),y.jsx(bi,{children:e.is_subscribed?y.jsx(w3,{children:e.subscription_type==="monthly"?"月度会员":e.subscription_type==="yearly"?"年度会员":"试用会员"}):y.jsx(S3,{children:"未订阅"})})]}),e.is_subscribed&&e.subscription_expiry_date&&y.jsxs(Rr,{children:[y.jsx(Ar,{children:"会员到期时间"}),y.jsx(bi,{children:new Date(e.subscription_expiry_date).toLocaleDateString()})]})]}),b3=()=>(_l(),y.jsx(pr,{children:y.jsxs(Rr,{children:[y.jsx(Ar,{children:"系统通知"}),y.jsx(h3,{onClick:()=>We("通知设置功能开发中..."),children:"设置"})]})}));R.div`
  width: 80px;
  height: 80px;
  margin: 0 auto 16px;
  border-radius: 50%;
  background: ${({theme:e})=>e.mode==="dark"?"rgba(255, 255, 255, 0.1)":"rgba(0, 0, 0, 0.05)"};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  color: ${({theme:e})=>e.colors[e.mode].gray};
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;R.h2`
  font-size: 18px;
  color: ${e=>e.theme.colors[e.theme.mode].gray};
  margin: 0;
  text-align: center;
  opacity: 0.7;
`;const Xf=R.div`
  text-align: center;
  padding: 30px;
  background: ${({theme:e})=>e.mode==="dark"?"rgba(255, 255, 255, 0.05)":"rgba(0, 0, 0, 0.03)"};
  border-radius: 24px;
  margin-bottom: 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
`,Bl=R(q.button)`
  background: ${({theme:e})=>e.mode==="dark"?"linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)":"linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)"};
  border: none;
  padding: 12px 24px;
  border-radius: 24px;
  color: white;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  width: 100%;
  max-width: 200px;
  transition: all 0.3s ease;
  outline: none !important;
  -webkit-tap-highlight-color: transparent;
  box-shadow: 0 4px 10px rgba(37, 99, 235, 0.3);
  
  &:hover, &:focus, &:active {
    background: ${({theme:e})=>e.mode==="dark"?"linear-gradient(135deg, #1D4ED8 0%, #1E40AF 100%)":"linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)"};
    transform: translateY(-2px);
    outline: none !important;
    box-shadow: 0 6px 12px rgba(37, 99, 235, 0.4);
  }
`,k3=R.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
`,E3=R.div`
  background: ${({theme:e})=>e.mode==="dark"?"rgba(20, 20, 20, 0.6)":"rgba(255, 255, 255, 0.6)"};
  border-radius: 20px;
  border: 1px solid ${({theme:e})=>e.colors[e.mode].cardBorder};
  padding: 1.2rem;
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }
`,C3=R.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,T3=R.h3`
  margin: 0;
  font-size: 1.2rem;
  color: ${({theme:e})=>e.colors[e.mode].text};
`,P3=R.div`
  display: flex;
  gap: 0.5rem;
`,vy=R.button`
  padding: 0.5rem 1rem;
  border-radius: 12px;
  border: none;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  color: white;
  background: ${({$type:e,theme:n})=>e==="share"?n.mode==="dark"?"#2563EB":"#3b82f6":n.mode==="dark"?"#DC2626":"#EF4444"};
  
  &:hover {
    background: ${({$type:e,theme:n})=>e==="share"?n.mode==="dark"?"#1d4ed8":"#2563eb":n.mode==="dark"?"#B91C1C":"#DC2626"};
    transform: translateY(-1px);
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);
  }
  
  &:active {
    transform: translateY(0);
  }
`;R.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: ${({theme:e})=>e.colors[e.mode].gray};
`;const wy=R.div`
  text-align: center;
  padding: 2rem;
  color: ${({theme:e})=>e.colors[e.mode].gray};
  font-size: 1rem;
`,j3=R.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  color: ${({theme:e})=>e.colors[e.mode].text};
`,R3=R.div`
  padding: 1rem;
`,A3=R.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`,D3=R.button`
  background: transparent;
  border: none;
  color: ${({theme:e})=>e.colors[e.mode].text};
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${({theme:e})=>e.colors[e.mode].hoverBg};
  }
  
  svg {
    width: 20px;
    height: 20px;
  }
`,I3=R.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,Sy=R.div`
  background: ${({theme:e})=>e.mode==="dark"?"rgba(20, 20, 20, 0.6)":"rgba(255, 255, 255, 0.6)"};
  border-radius: 20px;
  border: 1px solid ${({theme:e})=>e.colors[e.mode].cardBorder};
  padding: 1.5rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
`,by=R.h3`
  margin: 0 0 1rem 0;
  font-size: 1.1rem;
  color: ${({theme:e})=>e.colors[e.mode].text};
`,cd=R.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 0;
  border-bottom: 1px solid ${({theme:e})=>e.colors[e.mode].cardBorder};
  
  &:last-child {
    border-bottom: none;
  }
`,ky=R.span`
  color: ${({theme:e})=>e.colors[e.mode].gray};
  font-size: 0.9rem;
`,dd=R.span`
  color: ${({theme:e})=>e.colors[e.mode].text};
  font-size: 0.9rem;
`,x1=R(q.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  backdrop-filter: blur(4px);
`,v1=R(q.div)`
  background: ${e=>e.theme.mode==="dark"?"linear-gradient(135deg, rgba(20, 20, 20, 0.95) 0%, rgba(15, 15, 15, 0.95) 100%)":"linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(245, 245, 245, 0.95) 100%)"};
  border-radius: 24px;
  width: 90%;
  max-width: 400px;
  padding: 24px;
  position: relative;
  border: 1px solid ${e=>e.theme.colors[e.theme.mode].cardBorder};
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
`,w1=R.h3`
  color: ${e=>e.theme.colors[e.theme.mode].text};
  margin: 0 0 20px 0;
  font-size: 1.2rem;
  text-align: center;
`,L3=R.input`
  width: 100%;
  padding: 12px 16px;
  border-radius: 16px;
  border: 1px solid ${e=>e.theme.colors[e.theme.mode].cardBorder};
  background: ${e=>e.theme.colors[e.theme.mode].cardBg};
  color: ${e=>e.theme.colors[e.theme.mode].text};
  font-size: 1rem;
  margin-bottom: 20px;
  outline: none;
  
  &:focus {
    border-color: #3b82f6;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
  }
`,S1=R.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
`,Qd=R.button`
  flex: 1;
  padding: 12px;
  border-radius: 16px;
  border: none;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s ease;
  background: ${({$primary:e,theme:n})=>e?n.mode==="dark"?"#2563EB":"#3b82f6":n.mode==="dark"?"rgba(255, 255, 255, 0.1)":"rgba(0, 0, 0, 0.05)"};
  color: ${({$primary:e,theme:n})=>e?"white":n.colors[n.mode].text};
  
  &:hover {
    background: ${({$primary:e,theme:n})=>e?n.mode==="dark"?"#1d4ed8":"#2563eb":n.mode==="dark"?"rgba(255, 255, 255, 0.15)":"rgba(0, 0, 0, 0.1)"};
    transform: translateY(-2px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }
  
  &:active {
    transform: translateY(0);
  }
`,$3=R(q.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  backdrop-filter: blur(4px);
`,M3=R(q.div)`
  background: ${e=>e.theme.mode==="dark"?"linear-gradient(135deg, rgba(20, 20, 20, 0.95) 0%, rgba(15, 15, 15, 0.95) 100%)":"linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(245, 245, 245, 0.95) 100%)"};
  border-radius: 24px;
  width: 90%;
  max-width: 500px;
  padding: 24px;
  position: relative;
  border: 1px solid ${e=>e.theme.colors[e.theme.mode].cardBorder};
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
`,_3=R.h3`
  color: ${e=>e.theme.colors[e.theme.mode].text};
  margin: 0 0 20px 0;
  font-size: 1.2rem;
  text-align: center;
`,b1=R.input`
  width: 100%;
  padding: 12px 16px;
  border-radius: 16px;
  border: 1px solid ${e=>e.theme.colors[e.theme.mode].cardBorder};
  background: ${e=>e.theme.colors[e.theme.mode].cardBg};
  color: ${e=>e.theme.colors[e.theme.mode].text};
  font-size: 1rem;
  margin-bottom: 16px;
  outline: none;
  
  &:focus {
    border-color: #3b82f6;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
  }
`,B3=R.textarea`
  width: 100%;
  padding: 12px 16px;
  border-radius: 16px;
  border: 1px solid ${e=>e.theme.colors[e.theme.mode].cardBorder};
  background: ${e=>e.theme.colors[e.theme.mode].cardBg};
  color: ${e=>e.theme.colors[e.theme.mode].text};
  font-size: 1rem;
  margin-bottom: 20px;
  min-height: 120px;
  resize: vertical;
  outline: none;
  
  &:focus {
    border-color: #3b82f6;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
  }
`,O3=R.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
`,F3=R.button`
  background: transparent;
  border: none;
  color: ${({theme:e})=>e.colors[e.mode].text};
  opacity: 0.7;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 4px;
  
  &:hover {
    opacity: 1;
    background: ${({theme:e})=>e.colors[e.mode].hoverBg};
  }
  
  svg {
    width: 16px;
    height: 16px;
  }
`,N3=({isOpen:e,onClose:n,voiceId:i,voiceName:o,voicePrompt:a})=>{const[u,c]=b.useState(""),[d,p]=b.useState(!1),m=async()=>{if(!u.trim()){We.error("请输入要共享的泡友ID");return}p(!0);try{await lt.shareVoice(i,u.trim(),o,a),We.success("音色共享成功"),n()}catch(g){g instanceof Error?We.error(`共享失败: ${g.message}`):We.error("共享失败，请稍后重试")}finally{p(!1)}};return y.jsx(zr,{children:e&&y.jsx(x1,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:n,children:y.jsxs(v1,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.9,opacity:0},onClick:g=>g.stopPropagation(),children:[y.jsxs(w1,{children:['共享音色 "',o,'"']}),y.jsx(L3,{placeholder:"请输入要共享的泡友ID",value:u,onChange:g=>c(g.target.value),autoFocus:!0}),y.jsxs(S1,{children:[y.jsx(Qd,{onClick:n,disabled:d,children:"取消"}),y.jsx(Qd,{$primary:!0,onClick:m,disabled:d,children:d?"共享中...":"共享"})]})]})})})},V3=({isOpen:e,onClose:n,voice:i,onSave:o})=>{const[a,u]=b.useState(i.name||""),[c,d]=b.useState(i.userPrompt||""),[p,m]=b.useState(!1),g=async()=>{if(!a.trim()){We.error("音色名称不能为空");return}m(!0);try{await o(a.trim(),c.trim()),We.success("音色信息更新成功"),n()}catch(x){x instanceof Error?We.error(`更新失败: ${x.message}`):We.error("更新失败，请稍后重试")}finally{m(!1)}};return y.jsx(zr,{children:e&&y.jsx($3,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:n,children:y.jsxs(M3,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.9,opacity:0},onClick:x=>x.stopPropagation(),children:[y.jsx(_3,{children:"编辑音色"}),y.jsx("label",{style:{display:"block",margin:"0 0 8px 0",color:"inherit"},children:"音色名称"}),y.jsx(b1,{placeholder:"请输入音色名称",value:a,onChange:x=>u(x.target.value),autoFocus:!0}),y.jsx("label",{style:{display:"block",margin:"0 0 8px 0",color:"inherit"},children:"音色提示语"}),y.jsx(B3,{placeholder:"请输入音色提示语（可选）",value:c,onChange:x=>d(x.target.value)}),y.jsxs(O3,{children:[y.jsx(q.button,{style:{flex:1,padding:"12px",borderRadius:"8px",border:"none",cursor:"pointer",fontSize:"0.9rem",fontWeight:500,background:"rgba(255, 255, 255, 0.1)",color:"inherit"},whileHover:{background:"rgba(255, 255, 255, 0.15)",y:-2},onClick:n,disabled:p,children:"取消"}),y.jsx(q.button,{style:{flex:1,padding:"12px",borderRadius:"8px",border:"none",cursor:"pointer",fontSize:"0.9rem",fontWeight:500,background:"#3b82f6",color:"white"},whileHover:{background:"#2563eb",y:-2},onClick:g,disabled:p,children:p?"保存中...":"保存"})]})]})})})},z3=R(x1)``,U3=R(v1)``,W3=R(w1)`
  color: #e11d48;
`,H3=R(S1)``,Ey=R(Qd)`
  ${e=>e.$danger&&`
    background: #e11d48;
    
    &:hover {
      background: #be123c;
    }
  `}
`,K3=({isOpen:e,onClose:n,voice:i,onConfirm:o})=>{const[a,u]=b.useState(!1),c=async()=>{u(!0);try{await o(),We.success("音色已成功删除"),n()}catch(d){d instanceof Error?We.error(`删除失败: ${d.message}`):We.error("删除失败，请稍后重试")}finally{u(!1)}};return y.jsx(zr,{children:e&&y.jsx(z3,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:n,children:y.jsxs(U3,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.9,opacity:0},onClick:d=>d.stopPropagation(),children:[y.jsx(W3,{children:"确认删除音色"}),y.jsxs("p",{style:{marginBottom:"20px",textAlign:"center"},children:['您确定要删除音色 "',i.name||"未命名音色",'" 吗？此操作无法撤销。']}),y.jsxs(H3,{children:[y.jsx(Ey,{onClick:n,disabled:a,children:"取消"}),y.jsx(Ey,{$danger:!0,onClick:c,disabled:a,children:a?"删除中...":"确认删除"})]})]})})})},G3=()=>{const[e,n]=b.useState([]),[i,o]=b.useState(!0),[a,u]=b.useState(null),[c,d]=b.useState(null),[p,m]=b.useState(!1),[g,x]=b.useState(null),[w,S]=b.useState(!1),[k,T]=b.useState(!1),[E,P]=b.useState(null),[$,D]=b.useState(!1);b.useEffect(()=>{(async()=>{try{const Q=localStorage.getItem("user_voices"),ae=localStorage.getItem("user_voices_timestamp");if(Q&&ae&&!$){const se=parseInt(ae);if(new Date().getTime()-se<36e5){n(JSON.parse(Q)),o(!1),D(!0);return}}if(!$){o(!0),u(null);const se=await lt.getUserVoices();n(se.voices||[]),localStorage.setItem("user_voices",JSON.stringify(se.voices||[])),localStorage.setItem("user_voices_timestamp",new Date().getTime().toString()),D(!0)}}catch(Q){u(Q instanceof Error?Q.message:"获取音色列表失败"),We.error("获取音色列表失败")}finally{o(!1)}})()},[$]);const F=(H,Q)=>{H.stopPropagation(),x({id:Q.voiceId,name:Q.name||"未命名音色",prompt:Q.userPrompt}),m(!0)},O=(H,Q)=>{H.stopPropagation(),P(Q),T(!0)},V=async()=>{if(E)try{const H=await lt.deleteVoice(E.voiceId);if(H.success){const Q=e.filter(ae=>ae.voiceId!==E.voiceId);n(Q),localStorage.setItem("user_voices",JSON.stringify(Q)),localStorage.setItem("user_voices_timestamp",new Date().getTime().toString()),c&&c.voiceId===E.voiceId&&d(null)}else throw new Error(H.message)}catch(H){throw console.error("删除音色失败:",H),H}},W=async(H,Q)=>{if(c)try{const ae=await lt.updateVoice(c.voiceId,H,Q),se={...c,name:ae.name||c.name,userPrompt:ae.userPrompt||c.userPrompt};d(se);const Te=e.map(He=>He.voiceId===c.voiceId?se:He);n(Te),localStorage.setItem("user_voices",JSON.stringify(Te)),localStorage.setItem("user_voices_timestamp",new Date().getTime().toString())}catch(ae){throw console.error("更新音色失败:",ae),ae}};return i?y.jsx(j3,{children:"加载中..."}):a?y.jsxs(wy,{children:["加载失败: ",a]}):e.length===0?y.jsx(wy,{children:"您还没有创建任何音色"}):c?y.jsxs(y.Fragment,{children:[y.jsxs(R3,{children:[y.jsxs(A3,{children:[y.jsxs(D3,{onClick:()=>d(null),children:[y.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:y.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})}),"返回列表"]}),y.jsxs(F3,{onClick:()=>S(!0),children:[y.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[y.jsx("path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}),y.jsx("path",{d:"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"})]}),"编辑"]})]}),y.jsxs(I3,{children:[y.jsxs(Sy,{children:[y.jsx(by,{children:"基本信息"}),y.jsxs(cd,{children:[y.jsx(ky,{children:"音色名称"}),y.jsx(dd,{children:c.name||"未命名音色"})]}),y.jsxs(cd,{children:[y.jsx(ky,{children:"创建时间"}),y.jsx(dd,{children:c.createTime})]})]}),c.userPrompt&&y.jsxs(Sy,{children:[y.jsx(by,{children:"提示语"}),y.jsx(cd,{children:y.jsx(dd,{children:c.userPrompt})})]})]})]}),y.jsx(V3,{isOpen:w,onClose:()=>S(!1),voice:c,onSave:W})]}):y.jsxs(y.Fragment,{children:[y.jsxs(pr,{children:[y.jsx(y1,{children:"我的音色列表"}),y.jsx(k3,{children:e.map(H=>y.jsx(E3,{onClick:()=>d(H),children:y.jsxs(C3,{children:[y.jsx(T3,{children:H.name||"未命名音色"}),y.jsxs(P3,{children:[y.jsx(vy,{$type:"share",onClick:Q=>F(Q,H),children:"共享"}),y.jsx(vy,{$type:"delete",onClick:Q=>O(Q,H),children:"删除"})]})]})},H.voiceId))})]}),g&&y.jsx(N3,{isOpen:p,onClose:()=>{m(!1),x(null)},voiceId:g.id,voiceName:g.name,voicePrompt:g.prompt}),E&&y.jsx(K3,{isOpen:k,onClose:()=>{T(!1),P(null)},voice:E,onConfirm:V})]})},Y3=()=>y.jsx(pr,{children:y.jsxs(Xf,{children:[y.jsx("h3",{children:"需要登录"}),y.jsx("p",{style:{marginBottom:"20px"},children:"登录后才能查看您的音色列表"}),y.jsx(Bl,{onClick:()=>window.location.href="/WuKonWeb4/login",whileHover:{scale:1.05},whileTap:{scale:.95},children:"去登录"})]})}),q3=()=>y.jsx(pr,{children:y.jsxs(Xf,{children:[y.jsx("h3",{children:"需要登录"}),y.jsx("p",{style:{marginBottom:"20px"},children:"登录后才能管理您的通知设置"}),y.jsx(Bl,{onClick:()=>window.location.href="/WuKonWeb4/login",whileHover:{scale:1.05},whileTap:{scale:.95},children:"去登录"})]})}),X3=()=>{const[e,n]=b.useState(""),[i,o]=b.useState(!1),a=async()=>{if(!e.trim()){We.error("请输入兑换码");return}try{o(!0);const c=JSON.parse(localStorage.getItem("user_data")||"{}").username;if(!c){We.error("未找到用户信息，请重新登录");return}const d=await lt.redeemCode(c,e.trim()),m=new Date(d.subscriptionExpiryDate).toLocaleDateString("zh-CN",{year:"numeric",month:"long",day:"numeric"});We.success(`兑换成功！会员有效期至: ${m}`),n(""),await et.refreshUserInfo()}catch(u){u instanceof Error?We.error(u.message):We.error("兑换失败，请稍后重试")}finally{o(!1)}};return y.jsxs(pr,{children:[y.jsx(y1,{style:{textAlign:"center"},children:"兑换码"}),y.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"12px",padding:"20px 0"},children:[y.jsx(b1,{placeholder:"请输入兑换码",value:e,onChange:u=>n(u.target.value),style:{margin:0,width:"180px",boxShadow:"0 2px 8px rgba(0, 0, 0, 0.1)"}}),y.jsx(q.button,{style:{padding:"12px 24px",borderRadius:"16px",border:"none",background:"#3b82f6",color:"white",cursor:"pointer",fontSize:"14px",fontWeight:500,minWidth:"80px"},whileHover:{background:"#2563eb",y:-2},whileTap:{y:0},onClick:a,disabled:i,children:i?"兑换中...":"兑换"})]})]})},Q3=()=>y.jsx(pr,{children:y.jsxs(Xf,{children:[y.jsx("h3",{children:"需要登录"}),y.jsx("p",{style:{marginBottom:"20px"},children:"登录后才能使用兑换码"}),y.jsx(Bl,{onClick:()=>window.location.href="/WuKonWeb4/login",whileHover:{scale:1.05},whileTap:{scale:.95},children:"去登录"})]})}),J3=({isOpen:e,onClose:n})=>{const[i,o]=b.useState(et.userData),[a,u]=b.useState(!1),[c,d]=b.useState("profile"),{theme:p,toggleThemeWithRefresh:m}=_l(),g=et.isLogin,[x,w]=b.useState(!1);b.useEffect(()=>{e&&g&&(async()=>{try{u(!0);const P=await et.refreshUserInfo();o(P)}catch(P){We.error("获取用户信息失败"),console.error("获取用户信息失败:",P)}finally{u(!1)}})()},[e,g]);const S=E=>{d(E),E==="voices"&&w(!0)},k=()=>y.jsx(pr,{style:{height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:y.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"100%"},children:y.jsx(Bl,{onClick:()=>window.location.href="/WuKonWeb4/login",whileHover:{scale:1.05},whileTap:{scale:.95},children:"去登录"})})}),T=()=>{if(!g)switch(c){case"profile":return k();case"voices":return y.jsx(Y3,{});case"notification":return y.jsx(q3,{});case"redeemCode":return y.jsx(Q3,{});default:return k()}if(a&&c==="profile")return y.jsx("div",{style:{textAlign:"center",padding:"40px"},children:"加载中..."});if(!i&&c==="profile")return y.jsx("div",{style:{textAlign:"center",padding:"40px"},children:"未找到用户信息"});switch(c){case"profile":return y.jsx(xy,{userData:i});case"voices":return y.jsx(G3,{},"my-voices");case"notification":return y.jsx(b3,{});case"redeemCode":return y.jsx(X3,{});default:return y.jsx(xy,{userData:i})}};return y.jsx(zr,{children:e&&y.jsx(a3,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:n,children:y.jsxs(l3,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.9,opacity:0},onClick:E=>E.stopPropagation(),children:[y.jsx(u3,{onClick:n,whileHover:{scale:1.1},whileTap:{scale:.9},children:"×"}),y.jsxs(c3,{children:[y.jsxs(d3,{children:[y.jsxs(Va,{$isActive:c==="profile",onClick:()=>S("profile"),children:[y.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[y.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),y.jsx("circle",{cx:"12",cy:"7",r:"4"})]}),"个人资料"]}),y.jsxs(Va,{$isActive:c==="voices",onClick:()=>S("voices"),children:[y.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[y.jsx("path",{d:"M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"}),y.jsx("path",{d:"M19 10v2a7 7 0 0 1-14 0v-2"}),y.jsx("line",{x1:"12",y1:"19",x2:"12",y2:"23"}),y.jsx("line",{x1:"8",y1:"23",x2:"16",y2:"23"})]}),"我的音色"]}),y.jsxs(Va,{$isActive:c==="redeemCode",onClick:()=>S("redeemCode"),children:[y.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[y.jsx("rect",{x:"2",y:"6",width:"20",height:"12",rx:"2"}),y.jsx("path",{d:"M12 12H12.01"}),y.jsx("path",{d:"M17 12H17.01"}),y.jsx("path",{d:"M7 12H7.01"})]}),"兑换码"]}),y.jsxs(Va,{$isActive:c==="notification",onClick:()=>S("notification"),children:[y.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[y.jsx("path",{d:"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"}),y.jsx("path",{d:"M13.73 21a2 2 0 0 1-3.46 0"})]}),"通知设置"]})]}),y.jsxs(f3,{children:[y.jsxs(y3,{children:[y.jsxs(x3,{children:[y.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[y.jsx("circle",{cx:"12",cy:"12",r:"5"}),y.jsx("line",{x1:"12",y1:"1",x2:"12",y2:"3"}),y.jsx("line",{x1:"12",y1:"21",x2:"12",y2:"23"}),y.jsx("line",{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"}),y.jsx("line",{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"}),y.jsx("line",{x1:"1",y1:"12",x2:"3",y2:"12"}),y.jsx("line",{x1:"21",y1:"12",x2:"23",y2:"12"}),y.jsx("line",{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"}),y.jsx("line",{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"})]}),"深色主题"]}),y.jsxs(v3,{children:[y.jsx("input",{type:"checkbox",checked:p==="dark",onChange:m}),y.jsx("span",{})]})]}),g&&y.jsx(y.Fragment,{children:i&&i.username==="chenming2"?y.jsxs(g3,{children:[y.jsx(m3,{onClick:()=>{window.location.href="/WuKonWeb4/admin"},children:"进入后台"}),y.jsx(yy,{style:{marginTop:0},onClick:()=>{et.logout(),We.success("已退出登录"),n()},children:"退出登录"})]}):y.jsx(yy,{style:{width:"100%"},onClick:()=>{et.logout(),We.success("已退出登录"),n()},children:"退出登录"})})]})]}),y.jsx(p3,{children:T()})]})})})},Z3=R.div`
  position: relative;
  margin-right: 20px;
  margin-top: 20px;
`,e4=R(q.button)`
  background: transparent;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${({theme:e})=>e.colors[e.mode].text};
  font-size: 20px;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
  }
`;R(q.div)`
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 8px;
  background: rgba(30, 30, 30, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 8px;
  min-width: 160px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
`;R(q.div)`
  padding: 10px 16px;
  color: ${({theme:e})=>e.colors[e.mode].text};
  cursor: pointer;
  border-radius: 8px;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 8px;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
  
  svg {
    width: 16px;
    height: 16px;
  }
`;const t4=()=>{const[e,n]=b.useState(!1),[i,o]=b.useState(!1),a=b.useRef(null);return Fi(),b.useEffect(()=>{const u=c=>{a.current&&!a.current.contains(c.target)&&n(!1)};return document.addEventListener("mousedown",u),()=>document.removeEventListener("mousedown",u)},[]),y.jsxs(Z3,{ref:a,children:[y.jsx(e4,{onClick:()=>o(!0),whileHover:{scale:1.05},whileTap:{scale:.95},children:y.jsx("img",{src:"/WuKonWeb4/assets/Setting.png",alt:"设置",style:{width:"20px",height:"20px"}})}),y.jsx(J3,{isOpen:i,onClose:()=>o(!1)})]})},n4={initial:{opacity:.6,scale:.98},in:{opacity:1,scale:1,transition:{duration:.3,ease:"easeOut"}},out:{opacity:.6,scale:.98,transition:{duration:.2,ease:"easeIn"}}},nr=({children:e})=>y.jsx(q.div,{initial:"initial",animate:"in",exit:"out",variants:n4,style:{width:"100%"},children:e}),r4=R.div`
  width: 100%;
  display: flex !important;
  justify-content: center;
  z-index: 9990;
  position: fixed;
  left: 0;
  top: var(--nav-top-position, 45%);
  transform: translateY(-50%);
  pointer-events: ${e=>e.$isVisible?"auto":"none"};
  visibility: ${e=>e.$isVisible?"visible":"hidden"};
  opacity: ${e=>e.$isVisible?"1":"0"};
  transition: opacity 0.3s ease, visibility 0.3s ease;
  
  & > * {
    pointer-events: auto;
  }
  
  @media (max-width: 768px) {
    top: var(--nav-top-position, 45%);
  }
`,i4=R.div`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9999;
  pointer-events: ${e=>e.$isVisible?"auto":"none"};
  visibility: ${e=>e.$isVisible?"visible":"hidden"};
  opacity: ${e=>e.$isVisible?"1":"0"};
  transition: opacity 0.3s ease, visibility 0.3s ease;
`,o4=R.div`
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  position: relative;
  scroll-behavior: smooth;
`,s4=()=>{const{theme:e}=_l();return y.jsxs(Ib,{theme:{...Bb,mode:e},children:[y.jsx(_b,{}),y.jsx(Q2,{basename:"/WuKonWeb4",children:y.jsx(a4,{})})]})},a4=()=>{const{theme:e}=_l(),n=b.useRef(null),[i,o]=b.useState(!0),a=b.useRef(0),c=Ht().pathname==="/admin";return b.useEffect(()=>{const d=()=>{if(!n.current)return;const m=n.current.scrollTop;m<5?o(!0):o(!1),a.current=m},p=n.current;return p&&p.addEventListener("scroll",d,{passive:!0}),()=>{p&&p.removeEventListener("scroll",d)}},[]),b.useEffect(()=>{console.log("当前主题:",e),document.documentElement.setAttribute("data-theme",e),document.body.className=e},[e]),y.jsxs(o4,{ref:n,children:[!c&&y.jsx(qf,{}),y.jsx(u4,{navVisible:i}),y.jsx(lA,{position:"top-center"})]})},l4=({children:e})=>et.isLogin?y.jsx(y.Fragment,{children:e}):y.jsx(sx,{to:"/login",replace:!0}),u4=({navVisible:e})=>{const n=Ht(),i=Fi(),o=n.pathname==="/login",a=n.pathname==="/profile",u=n.pathname==="/admin";return b.useEffect(()=>{const c=et.subscribe("login",p=>{console.log("登录状态变化 - 已登录:")}),d=et.subscribe("logout",()=>{console.log("登录状态变化 - 已登出"),i("/",{replace:!0})});return()=>{c(),d()}},[i]),b.useEffect(()=>{window.scrollTo(0,0)},[n.pathname]),b.useEffect(()=>{const c=()=>{const p=et.forceRefreshLoginStatus();console.log("检查登录状态:",p),!p&&!["/","/login","/hero","/app-showcase","/jindouyun","/interpreter","/parallel-universe"].includes(n.pathname)&&i("/login",{replace:!0})};["/","/login","/hero","/app-showcase","/jindouyun","/interpreter","/parallel-universe"].includes(n.pathname)||c()},[n.pathname,i]),y.jsxs(y.Fragment,{children:[!o&&!a&&!u&&y.jsx(r4,{$isVisible:e,children:y.jsx(QA,{})}),y.jsxs(P2,{children:[y.jsx(pn,{path:"/",element:y.jsxs(nr,{children:[y.jsxs("main",{children:[y.jsx(Y0,{}),y.jsx(J0,{}),y.jsx(zj,{}),y.jsx(Qj,{}),y.jsx(dR,{}),y.jsx(xR,{})]}),y.jsx(_o,{}),y.jsx(or,{})]})}),y.jsx(pn,{path:"/login",element:y.jsx(nr,{children:y.jsx("main",{children:y.jsx(s3,{})})})}),y.jsx(pn,{path:"/hero",element:y.jsxs(nr,{children:[y.jsx("main",{children:y.jsx(Y0,{})}),y.jsx(_o,{}),y.jsx(or,{})]})}),y.jsx(pn,{path:"/app-showcase",element:y.jsxs(nr,{children:[y.jsx("main",{children:y.jsx(J0,{})}),y.jsx(_o,{}),y.jsx(or,{})]})}),y.jsx(pn,{path:"/jindouyun",element:y.jsxs(nr,{children:[y.jsx("main",{children:y.jsx(KA,{})}),y.jsx(_o,{}),y.jsx(or,{})]})}),y.jsx(pn,{path:"/interpreter",element:y.jsxs(nr,{children:[y.jsx("main",{children:y.jsx(BA,{})}),y.jsx(_o,{}),y.jsx(or,{})]})}),y.jsx(pn,{path:"/parallel-universe",element:y.jsxs(nr,{children:[y.jsx(jA,{}),y.jsx(or,{})]})}),y.jsx(pn,{path:"/admin",element:y.jsx(l4,{children:y.jsx(nr,{children:y.jsx(b.Suspense,{fallback:y.jsx("div",{children:"加载中..."}),children:y.jsx(c4,{})})})})}),y.jsx(pn,{path:"*",element:y.jsx(sx,{to:"/",replace:!0})})]}),!o&&!u&&y.jsx(i4,{$isVisible:e,children:y.jsx(t4,{})})]})},c4=b.lazy(()=>LS(()=>import("./Admin-Dx40KiK4.js"),[]));console.log("使用的App版本: App.tsx");const d4=document.querySelectorAll("style[data-navigation-styles]");d4.forEach(e=>e.remove());document.body.classList.remove("is-scrolling");document.body.removeAttribute("data-nav-visible");AS.createRoot(document.getElementById("root")).render(y.jsx(s4,{}));export{We as V,et as a,lt as b,ke as c,R as d,Fi as e,y as j,b as r,_l as u};
