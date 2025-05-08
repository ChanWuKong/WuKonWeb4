var gS=Object.defineProperty;var yS=(e,n,i)=>n in e?gS(e,n,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[n]=i;var zm=(e,n,i)=>yS(e,typeof n!="symbol"?n+"":n,i);(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const u of a)if(u.type==="childList")for(const c of u.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function i(a){const u={};return a.integrity&&(u.integrity=a.integrity),a.referrerPolicy&&(u.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?u.credentials="include":a.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function o(a){if(a.ep)return;a.ep=!0;const u=i(a);fetch(a.href,u)}})();function xS(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Rc={exports:{}},Ao={},Ac={exports:{}},ge={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Um;function vS(){if(Um)return ge;Um=1;var e=Symbol.for("react.element"),n=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),x=Symbol.iterator;function w(I){return I===null||typeof I!="object"?null:(I=x&&I[x]||I["@@iterator"],typeof I=="function"?I:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},k=Object.assign,T={};function E(I,N,de){this.props=I,this.context=N,this.refs=T,this.updater=de||S}E.prototype.isReactComponent={},E.prototype.setState=function(I,N){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,N,"setState")},E.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function P(){}P.prototype=E.prototype;function L(I,N,de){this.props=I,this.context=N,this.refs=T,this.updater=de||S}var A=L.prototype=new P;A.constructor=L,k(A,E.prototype),A.isPureReactComponent=!0;var F=Array.isArray,O=Object.prototype.hasOwnProperty,V={current:null},W={key:!0,ref:!0,__self:!0,__source:!0};function H(I,N,de){var pe,ye={},me=null,be=null;if(N!=null)for(pe in N.ref!==void 0&&(be=N.ref),N.key!==void 0&&(me=""+N.key),N)O.call(N,pe)&&!W.hasOwnProperty(pe)&&(ye[pe]=N[pe]);var xe=arguments.length-2;if(xe===1)ye.children=de;else if(1<xe){for(var we=Array(xe),rt=0;rt<xe;rt++)we[rt]=arguments[rt+2];ye.children=we}if(I&&I.defaultProps)for(pe in xe=I.defaultProps,xe)ye[pe]===void 0&&(ye[pe]=xe[pe]);return{$$typeof:e,type:I,key:me,ref:be,props:ye,_owner:V.current}}function Q(I,N){return{$$typeof:e,type:I.type,key:N,ref:I.ref,props:I.props,_owner:I._owner}}function ae(I){return typeof I=="object"&&I!==null&&I.$$typeof===e}function se(I){var N={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(de){return N[de]})}var Te=/\/+/g;function He(I,N){return typeof I=="object"&&I!==null&&I.key!=null?se(""+I.key):N.toString(36)}function ut(I,N,de,pe,ye){var me=typeof I;(me==="undefined"||me==="boolean")&&(I=null);var be=!1;if(I===null)be=!0;else switch(me){case"string":case"number":be=!0;break;case"object":switch(I.$$typeof){case e:case n:be=!0}}if(be)return be=I,ye=ye(be),I=pe===""?"."+He(be,0):pe,F(ye)?(de="",I!=null&&(de=I.replace(Te,"$&/")+"/"),ut(ye,N,de,"",function(rt){return rt})):ye!=null&&(ae(ye)&&(ye=Q(ye,de+(!ye.key||be&&be.key===ye.key?"":(""+ye.key).replace(Te,"$&/")+"/")+I)),N.push(ye)),1;if(be=0,pe=pe===""?".":pe+":",F(I))for(var xe=0;xe<I.length;xe++){me=I[xe];var we=pe+He(me,xe);be+=ut(me,N,de,we,ye)}else if(we=w(I),typeof we=="function")for(I=we.call(I),xe=0;!(me=I.next()).done;)me=me.value,we=pe+He(me,xe++),be+=ut(me,N,de,we,ye);else if(me==="object")throw N=String(I),Error("Objects are not valid as a React child (found: "+(N==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":N)+"). If you meant to render a collection of children, use an array instead.");return be}function Rt(I,N,de){if(I==null)return I;var pe=[],ye=0;return ut(I,pe,"","",function(me){return N.call(de,me,ye++)}),pe}function nt(I){if(I._status===-1){var N=I._result;N=N(),N.then(function(de){(I._status===0||I._status===-1)&&(I._status=1,I._result=de)},function(de){(I._status===0||I._status===-1)&&(I._status=2,I._result=de)}),I._status===-1&&(I._status=0,I._result=N)}if(I._status===1)return I._result.default;throw I._result}var ce={current:null},q={transition:null},te={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:q,ReactCurrentOwner:V};function X(){throw Error("act(...) is not supported in production builds of React.")}return ge.Children={map:Rt,forEach:function(I,N,de){Rt(I,function(){N.apply(this,arguments)},de)},count:function(I){var N=0;return Rt(I,function(){N++}),N},toArray:function(I){return Rt(I,function(N){return N})||[]},only:function(I){if(!ae(I))throw Error("React.Children.only expected to receive a single React element child.");return I}},ge.Component=E,ge.Fragment=i,ge.Profiler=a,ge.PureComponent=L,ge.StrictMode=o,ge.Suspense=p,ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=te,ge.act=X,ge.cloneElement=function(I,N,de){if(I==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+I+".");var pe=k({},I.props),ye=I.key,me=I.ref,be=I._owner;if(N!=null){if(N.ref!==void 0&&(me=N.ref,be=V.current),N.key!==void 0&&(ye=""+N.key),I.type&&I.type.defaultProps)var xe=I.type.defaultProps;for(we in N)O.call(N,we)&&!W.hasOwnProperty(we)&&(pe[we]=N[we]===void 0&&xe!==void 0?xe[we]:N[we])}var we=arguments.length-2;if(we===1)pe.children=de;else if(1<we){xe=Array(we);for(var rt=0;rt<we;rt++)xe[rt]=arguments[rt+2];pe.children=xe}return{$$typeof:e,type:I.type,key:ye,ref:me,props:pe,_owner:be}},ge.createContext=function(I){return I={$$typeof:c,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},I.Provider={$$typeof:u,_context:I},I.Consumer=I},ge.createElement=H,ge.createFactory=function(I){var N=H.bind(null,I);return N.type=I,N},ge.createRef=function(){return{current:null}},ge.forwardRef=function(I){return{$$typeof:d,render:I}},ge.isValidElement=ae,ge.lazy=function(I){return{$$typeof:g,_payload:{_status:-1,_result:I},_init:nt}},ge.memo=function(I,N){return{$$typeof:m,type:I,compare:N===void 0?null:N}},ge.startTransition=function(I){var N=q.transition;q.transition={};try{I()}finally{q.transition=N}},ge.unstable_act=X,ge.useCallback=function(I,N){return ce.current.useCallback(I,N)},ge.useContext=function(I){return ce.current.useContext(I)},ge.useDebugValue=function(){},ge.useDeferredValue=function(I){return ce.current.useDeferredValue(I)},ge.useEffect=function(I,N){return ce.current.useEffect(I,N)},ge.useId=function(){return ce.current.useId()},ge.useImperativeHandle=function(I,N,de){return ce.current.useImperativeHandle(I,N,de)},ge.useInsertionEffect=function(I,N){return ce.current.useInsertionEffect(I,N)},ge.useLayoutEffect=function(I,N){return ce.current.useLayoutEffect(I,N)},ge.useMemo=function(I,N){return ce.current.useMemo(I,N)},ge.useReducer=function(I,N,de){return ce.current.useReducer(I,N,de)},ge.useRef=function(I){return ce.current.useRef(I)},ge.useState=function(I){return ce.current.useState(I)},ge.useSyncExternalStore=function(I,N,de){return ce.current.useSyncExternalStore(I,N,de)},ge.useTransition=function(){return ce.current.useTransition()},ge.version="18.3.1",ge}var Wm;function Xd(){return Wm||(Wm=1,Ac.exports=vS()),Ac.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hm;function wS(){if(Hm)return Ao;Hm=1;var e=Xd(),n=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,a=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function c(d,p,m){var g,x={},w=null,S=null;m!==void 0&&(w=""+m),p.key!==void 0&&(w=""+p.key),p.ref!==void 0&&(S=p.ref);for(g in p)o.call(p,g)&&!u.hasOwnProperty(g)&&(x[g]=p[g]);if(d&&d.defaultProps)for(g in p=d.defaultProps,p)x[g]===void 0&&(x[g]=p[g]);return{$$typeof:n,type:d,key:w,ref:S,props:x,_owner:a.current}}return Ao.Fragment=i,Ao.jsx=c,Ao.jsxs=c,Ao}var Km;function SS(){return Km||(Km=1,Rc.exports=wS()),Rc.exports}var y=SS(),ka={},Dc={exports:{}},Ct={},Ic={exports:{}},Lc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gm;function bS(){return Gm||(Gm=1,function(e){function n(q,te){var X=q.length;q.push(te);e:for(;0<X;){var I=X-1>>>1,N=q[I];if(0<a(N,te))q[I]=te,q[X]=N,X=I;else break e}}function i(q){return q.length===0?null:q[0]}function o(q){if(q.length===0)return null;var te=q[0],X=q.pop();if(X!==te){q[0]=X;e:for(var I=0,N=q.length,de=N>>>1;I<de;){var pe=2*(I+1)-1,ye=q[pe],me=pe+1,be=q[me];if(0>a(ye,X))me<N&&0>a(be,ye)?(q[I]=be,q[me]=X,I=me):(q[I]=ye,q[pe]=X,I=pe);else if(me<N&&0>a(be,X))q[I]=be,q[me]=X,I=me;else break e}}return te}function a(q,te){var X=q.sortIndex-te.sortIndex;return X!==0?X:q.id-te.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;e.unstable_now=function(){return u.now()}}else{var c=Date,d=c.now();e.unstable_now=function(){return c.now()-d}}var p=[],m=[],g=1,x=null,w=3,S=!1,k=!1,T=!1,E=typeof setTimeout=="function"?setTimeout:null,P=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function A(q){for(var te=i(m);te!==null;){if(te.callback===null)o(m);else if(te.startTime<=q)o(m),te.sortIndex=te.expirationTime,n(p,te);else break;te=i(m)}}function F(q){if(T=!1,A(q),!k)if(i(p)!==null)k=!0,nt(O);else{var te=i(m);te!==null&&ce(F,te.startTime-q)}}function O(q,te){k=!1,T&&(T=!1,P(H),H=-1),S=!0;var X=w;try{for(A(te),x=i(p);x!==null&&(!(x.expirationTime>te)||q&&!se());){var I=x.callback;if(typeof I=="function"){x.callback=null,w=x.priorityLevel;var N=I(x.expirationTime<=te);te=e.unstable_now(),typeof N=="function"?x.callback=N:x===i(p)&&o(p),A(te)}else o(p);x=i(p)}if(x!==null)var de=!0;else{var pe=i(m);pe!==null&&ce(F,pe.startTime-te),de=!1}return de}finally{x=null,w=X,S=!1}}var V=!1,W=null,H=-1,Q=5,ae=-1;function se(){return!(e.unstable_now()-ae<Q)}function Te(){if(W!==null){var q=e.unstable_now();ae=q;var te=!0;try{te=W(!0,q)}finally{te?He():(V=!1,W=null)}}else V=!1}var He;if(typeof L=="function")He=function(){L(Te)};else if(typeof MessageChannel<"u"){var ut=new MessageChannel,Rt=ut.port2;ut.port1.onmessage=Te,He=function(){Rt.postMessage(null)}}else He=function(){E(Te,0)};function nt(q){W=q,V||(V=!0,He())}function ce(q,te){H=E(function(){q(e.unstable_now())},te)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(q){q.callback=null},e.unstable_continueExecution=function(){k||S||(k=!0,nt(O))},e.unstable_forceFrameRate=function(q){0>q||125<q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Q=0<q?Math.floor(1e3/q):5},e.unstable_getCurrentPriorityLevel=function(){return w},e.unstable_getFirstCallbackNode=function(){return i(p)},e.unstable_next=function(q){switch(w){case 1:case 2:case 3:var te=3;break;default:te=w}var X=w;w=te;try{return q()}finally{w=X}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(q,te){switch(q){case 1:case 2:case 3:case 4:case 5:break;default:q=3}var X=w;w=q;try{return te()}finally{w=X}},e.unstable_scheduleCallback=function(q,te,X){var I=e.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?I+X:I):X=I,q){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=X+N,q={id:g++,callback:te,priorityLevel:q,startTime:X,expirationTime:N,sortIndex:-1},X>I?(q.sortIndex=X,n(m,q),i(p)===null&&q===i(m)&&(T?(P(H),H=-1):T=!0,ce(F,X-I))):(q.sortIndex=N,n(p,q),k||S||(k=!0,nt(O))),q},e.unstable_shouldYield=se,e.unstable_wrapCallback=function(q){var te=w;return function(){var X=w;w=te;try{return q.apply(this,arguments)}finally{w=X}}}}(Lc)),Lc}var Ym;function kS(){return Ym||(Ym=1,Ic.exports=bS()),Ic.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qm;function ES(){if(qm)return Ct;qm=1;var e=Xd(),n=kS();function i(t){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+t,s=1;s<arguments.length;s++)r+="&args[]="+encodeURIComponent(arguments[s]);return"Minified React error #"+t+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var o=new Set,a={};function u(t,r){c(t,r),c(t+"Capture",r)}function c(t,r){for(a[t]=r,t=0;t<r.length;t++)o.add(r[t])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},x={};function w(t){return p.call(x,t)?!0:p.call(g,t)?!1:m.test(t)?x[t]=!0:(g[t]=!0,!1)}function S(t,r,s,l){if(s!==null&&s.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return l?!1:s!==null?!s.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function k(t,r,s,l){if(r===null||typeof r>"u"||S(t,r,s,l))return!0;if(l)return!1;if(s!==null)switch(s.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function T(t,r,s,l,f,h,v){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=l,this.attributeNamespace=f,this.mustUseProperty=s,this.propertyName=t,this.type=r,this.sanitizeURL=h,this.removeEmptyString=v}var E={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){E[t]=new T(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var r=t[0];E[r]=new T(r,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){E[t]=new T(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){E[t]=new T(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){E[t]=new T(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){E[t]=new T(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){E[t]=new T(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){E[t]=new T(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){E[t]=new T(t,5,!1,t.toLowerCase(),null,!1,!1)});var P=/[\-:]([a-z])/g;function L(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var r=t.replace(P,L);E[r]=new T(r,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var r=t.replace(P,L);E[r]=new T(r,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var r=t.replace(P,L);E[r]=new T(r,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){E[t]=new T(t,1,!1,t.toLowerCase(),null,!1,!1)}),E.xlinkHref=new T("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){E[t]=new T(t,1,!1,t.toLowerCase(),null,!0,!0)});function A(t,r,s,l){var f=E.hasOwnProperty(r)?E[r]:null;(f!==null?f.type!==0:l||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(k(r,s,f,l)&&(s=null),l||f===null?w(r)&&(s===null?t.removeAttribute(r):t.setAttribute(r,""+s)):f.mustUseProperty?t[f.propertyName]=s===null?f.type===3?!1:"":s:(r=f.attributeName,l=f.attributeNamespace,s===null?t.removeAttribute(r):(f=f.type,s=f===3||f===4&&s===!0?"":""+s,l?t.setAttributeNS(l,r,s):t.setAttribute(r,s))))}var F=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,O=Symbol.for("react.element"),V=Symbol.for("react.portal"),W=Symbol.for("react.fragment"),H=Symbol.for("react.strict_mode"),Q=Symbol.for("react.profiler"),ae=Symbol.for("react.provider"),se=Symbol.for("react.context"),Te=Symbol.for("react.forward_ref"),He=Symbol.for("react.suspense"),ut=Symbol.for("react.suspense_list"),Rt=Symbol.for("react.memo"),nt=Symbol.for("react.lazy"),ce=Symbol.for("react.offscreen"),q=Symbol.iterator;function te(t){return t===null||typeof t!="object"?null:(t=q&&t[q]||t["@@iterator"],typeof t=="function"?t:null)}var X=Object.assign,I;function N(t){if(I===void 0)try{throw Error()}catch(s){var r=s.stack.trim().match(/\n( *(at )?)/);I=r&&r[1]||""}return`
`+I+t}var de=!1;function pe(t,r){if(!t||de)return"";de=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(_){var l=_}Reflect.construct(t,[],r)}else{try{r.call()}catch(_){l=_}t.call(r.prototype)}else{try{throw Error()}catch(_){l=_}t()}}catch(_){if(_&&l&&typeof _.stack=="string"){for(var f=_.stack.split(`
`),h=l.stack.split(`
`),v=f.length-1,C=h.length-1;1<=v&&0<=C&&f[v]!==h[C];)C--;for(;1<=v&&0<=C;v--,C--)if(f[v]!==h[C]){if(v!==1||C!==1)do if(v--,C--,0>C||f[v]!==h[C]){var j=`
`+f[v].replace(" at new "," at ");return t.displayName&&j.includes("<anonymous>")&&(j=j.replace("<anonymous>",t.displayName)),j}while(1<=v&&0<=C);break}}}finally{de=!1,Error.prepareStackTrace=s}return(t=t?t.displayName||t.name:"")?N(t):""}function ye(t){switch(t.tag){case 5:return N(t.type);case 16:return N("Lazy");case 13:return N("Suspense");case 19:return N("SuspenseList");case 0:case 2:case 15:return t=pe(t.type,!1),t;case 11:return t=pe(t.type.render,!1),t;case 1:return t=pe(t.type,!0),t;default:return""}}function me(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case W:return"Fragment";case V:return"Portal";case Q:return"Profiler";case H:return"StrictMode";case He:return"Suspense";case ut:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case se:return(t.displayName||"Context")+".Consumer";case ae:return(t._context.displayName||"Context")+".Provider";case Te:var r=t.render;return t=t.displayName,t||(t=r.displayName||r.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Rt:return r=t.displayName||null,r!==null?r:me(t.type)||"Memo";case nt:r=t._payload,t=t._init;try{return me(t(r))}catch{}}return null}function be(t){var r=t.type;switch(t.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=r.render,t=t.displayName||t.name||"",r.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return me(r);case 8:return r===H?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function xe(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function we(t){var r=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function rt(t){var r=we(t)?"checked":"value",s=Object.getOwnPropertyDescriptor(t.constructor.prototype,r),l=""+t[r];if(!t.hasOwnProperty(r)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var f=s.get,h=s.set;return Object.defineProperty(t,r,{configurable:!0,get:function(){return f.call(this)},set:function(v){l=""+v,h.call(this,v)}}),Object.defineProperty(t,r,{enumerable:s.enumerable}),{getValue:function(){return l},setValue:function(v){l=""+v},stopTracking:function(){t._valueTracker=null,delete t[r]}}}}function vn(t){t._valueTracker||(t._valueTracker=rt(t))}function Kt(t){if(!t)return!1;var r=t._valueTracker;if(!r)return!0;var s=r.getValue(),l="";return t&&(l=we(t)?t.checked?"true":"false":t.value),t=l,t!==s?(r.setValue(t),!0):!1}function hs(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function _l(t,r){var s=r.checked;return X({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:s??t._wrapperState.initialChecked})}function qf(t,r){var s=r.defaultValue==null?"":r.defaultValue,l=r.checked!=null?r.checked:r.defaultChecked;s=xe(r.value!=null?r.value:s),t._wrapperState={initialChecked:l,initialValue:s,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function Xf(t,r){r=r.checked,r!=null&&A(t,"checked",r,!1)}function Bl(t,r){Xf(t,r);var s=xe(r.value),l=r.type;if(s!=null)l==="number"?(s===0&&t.value===""||t.value!=s)&&(t.value=""+s):t.value!==""+s&&(t.value=""+s);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}r.hasOwnProperty("value")?Ol(t,r.type,s):r.hasOwnProperty("defaultValue")&&Ol(t,r.type,xe(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(t.defaultChecked=!!r.defaultChecked)}function Qf(t,r,s){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var l=r.type;if(!(l!=="submit"&&l!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+t._wrapperState.initialValue,s||r===t.value||(t.value=r),t.defaultValue=r}s=t.name,s!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,s!==""&&(t.name=s)}function Ol(t,r,s){(r!=="number"||hs(t.ownerDocument)!==t)&&(s==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+s&&(t.defaultValue=""+s))}var Wi=Array.isArray;function Ur(t,r,s,l){if(t=t.options,r){r={};for(var f=0;f<s.length;f++)r["$"+s[f]]=!0;for(s=0;s<t.length;s++)f=r.hasOwnProperty("$"+t[s].value),t[s].selected!==f&&(t[s].selected=f),f&&l&&(t[s].defaultSelected=!0)}else{for(s=""+xe(s),r=null,f=0;f<t.length;f++){if(t[f].value===s){t[f].selected=!0,l&&(t[f].defaultSelected=!0);return}r!==null||t[f].disabled||(r=t[f])}r!==null&&(r.selected=!0)}}function Fl(t,r){if(r.dangerouslySetInnerHTML!=null)throw Error(i(91));return X({},r,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Jf(t,r){var s=r.value;if(s==null){if(s=r.children,r=r.defaultValue,s!=null){if(r!=null)throw Error(i(92));if(Wi(s)){if(1<s.length)throw Error(i(93));s=s[0]}r=s}r==null&&(r=""),s=r}t._wrapperState={initialValue:xe(s)}}function Zf(t,r){var s=xe(r.value),l=xe(r.defaultValue);s!=null&&(s=""+s,s!==t.value&&(t.value=s),r.defaultValue==null&&t.defaultValue!==s&&(t.defaultValue=s)),l!=null&&(t.defaultValue=""+l)}function ep(t){var r=t.textContent;r===t._wrapperState.initialValue&&r!==""&&r!==null&&(t.value=r)}function tp(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Nl(t,r){return t==null||t==="http://www.w3.org/1999/xhtml"?tp(r):t==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ms,np=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,s,l,f){MSApp.execUnsafeLocalFunction(function(){return t(r,s,l,f)})}:t}(function(t,r){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=r;else{for(ms=ms||document.createElement("div"),ms.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=ms.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;r.firstChild;)t.appendChild(r.firstChild)}});function Hi(t,r){if(r){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=r;return}}t.textContent=r}var Ki={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},w1=["Webkit","ms","Moz","O"];Object.keys(Ki).forEach(function(t){w1.forEach(function(r){r=r+t.charAt(0).toUpperCase()+t.substring(1),Ki[r]=Ki[t]})});function rp(t,r,s){return r==null||typeof r=="boolean"||r===""?"":s||typeof r!="number"||r===0||Ki.hasOwnProperty(t)&&Ki[t]?(""+r).trim():r+"px"}function ip(t,r){t=t.style;for(var s in r)if(r.hasOwnProperty(s)){var l=s.indexOf("--")===0,f=rp(s,r[s],l);s==="float"&&(s="cssFloat"),l?t.setProperty(s,f):t[s]=f}}var S1=X({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Vl(t,r){if(r){if(S1[t]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(i(137,t));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(i(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(i(61))}if(r.style!=null&&typeof r.style!="object")throw Error(i(62))}}function zl(t,r){if(t.indexOf("-")===-1)return typeof r.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ul=null;function Wl(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Hl=null,Wr=null,Hr=null;function op(t){if(t=mo(t)){if(typeof Hl!="function")throw Error(i(280));var r=t.stateNode;r&&(r=Os(r),Hl(t.stateNode,t.type,r))}}function sp(t){Wr?Hr?Hr.push(t):Hr=[t]:Wr=t}function ap(){if(Wr){var t=Wr,r=Hr;if(Hr=Wr=null,op(t),r)for(t=0;t<r.length;t++)op(r[t])}}function lp(t,r){return t(r)}function up(){}var Kl=!1;function cp(t,r,s){if(Kl)return t(r,s);Kl=!0;try{return lp(t,r,s)}finally{Kl=!1,(Wr!==null||Hr!==null)&&(up(),ap())}}function Gi(t,r){var s=t.stateNode;if(s===null)return null;var l=Os(s);if(l===null)return null;s=l[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(i(231,r,typeof s));return s}var Gl=!1;if(d)try{var Yi={};Object.defineProperty(Yi,"passive",{get:function(){Gl=!0}}),window.addEventListener("test",Yi,Yi),window.removeEventListener("test",Yi,Yi)}catch{Gl=!1}function b1(t,r,s,l,f,h,v,C,j){var _=Array.prototype.slice.call(arguments,3);try{r.apply(s,_)}catch(U){this.onError(U)}}var qi=!1,gs=null,ys=!1,Yl=null,k1={onError:function(t){qi=!0,gs=t}};function E1(t,r,s,l,f,h,v,C,j){qi=!1,gs=null,b1.apply(k1,arguments)}function C1(t,r,s,l,f,h,v,C,j){if(E1.apply(this,arguments),qi){if(qi){var _=gs;qi=!1,gs=null}else throw Error(i(198));ys||(ys=!0,Yl=_)}}function pr(t){var r=t,s=t;if(t.alternate)for(;r.return;)r=r.return;else{t=r;do r=t,r.flags&4098&&(s=r.return),t=r.return;while(t)}return r.tag===3?s:null}function dp(t){if(t.tag===13){var r=t.memoizedState;if(r===null&&(t=t.alternate,t!==null&&(r=t.memoizedState)),r!==null)return r.dehydrated}return null}function fp(t){if(pr(t)!==t)throw Error(i(188))}function T1(t){var r=t.alternate;if(!r){if(r=pr(t),r===null)throw Error(i(188));return r!==t?null:t}for(var s=t,l=r;;){var f=s.return;if(f===null)break;var h=f.alternate;if(h===null){if(l=f.return,l!==null){s=l;continue}break}if(f.child===h.child){for(h=f.child;h;){if(h===s)return fp(f),t;if(h===l)return fp(f),r;h=h.sibling}throw Error(i(188))}if(s.return!==l.return)s=f,l=h;else{for(var v=!1,C=f.child;C;){if(C===s){v=!0,s=f,l=h;break}if(C===l){v=!0,l=f,s=h;break}C=C.sibling}if(!v){for(C=h.child;C;){if(C===s){v=!0,s=h,l=f;break}if(C===l){v=!0,l=h,s=f;break}C=C.sibling}if(!v)throw Error(i(189))}}if(s.alternate!==l)throw Error(i(190))}if(s.tag!==3)throw Error(i(188));return s.stateNode.current===s?t:r}function pp(t){return t=T1(t),t!==null?hp(t):null}function hp(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var r=hp(t);if(r!==null)return r;t=t.sibling}return null}var mp=n.unstable_scheduleCallback,gp=n.unstable_cancelCallback,P1=n.unstable_shouldYield,j1=n.unstable_requestPaint,Ne=n.unstable_now,R1=n.unstable_getCurrentPriorityLevel,ql=n.unstable_ImmediatePriority,yp=n.unstable_UserBlockingPriority,xs=n.unstable_NormalPriority,A1=n.unstable_LowPriority,xp=n.unstable_IdlePriority,vs=null,an=null;function D1(t){if(an&&typeof an.onCommitFiberRoot=="function")try{an.onCommitFiberRoot(vs,t,void 0,(t.current.flags&128)===128)}catch{}}var Gt=Math.clz32?Math.clz32:$1,I1=Math.log,L1=Math.LN2;function $1(t){return t>>>=0,t===0?32:31-(I1(t)/L1|0)|0}var ws=64,Ss=4194304;function Xi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function bs(t,r){var s=t.pendingLanes;if(s===0)return 0;var l=0,f=t.suspendedLanes,h=t.pingedLanes,v=s&268435455;if(v!==0){var C=v&~f;C!==0?l=Xi(C):(h&=v,h!==0&&(l=Xi(h)))}else v=s&~f,v!==0?l=Xi(v):h!==0&&(l=Xi(h));if(l===0)return 0;if(r!==0&&r!==l&&!(r&f)&&(f=l&-l,h=r&-r,f>=h||f===16&&(h&4194240)!==0))return r;if(l&4&&(l|=s&16),r=t.entangledLanes,r!==0)for(t=t.entanglements,r&=l;0<r;)s=31-Gt(r),f=1<<s,l|=t[s],r&=~f;return l}function M1(t,r){switch(t){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function _1(t,r){for(var s=t.suspendedLanes,l=t.pingedLanes,f=t.expirationTimes,h=t.pendingLanes;0<h;){var v=31-Gt(h),C=1<<v,j=f[v];j===-1?(!(C&s)||C&l)&&(f[v]=M1(C,r)):j<=r&&(t.expiredLanes|=C),h&=~C}}function Xl(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function vp(){var t=ws;return ws<<=1,!(ws&4194240)&&(ws=64),t}function Ql(t){for(var r=[],s=0;31>s;s++)r.push(t);return r}function Qi(t,r,s){t.pendingLanes|=r,r!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,r=31-Gt(r),t[r]=s}function B1(t,r){var s=t.pendingLanes&~r;t.pendingLanes=r,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=r,t.mutableReadLanes&=r,t.entangledLanes&=r,r=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<s;){var f=31-Gt(s),h=1<<f;r[f]=0,l[f]=-1,t[f]=-1,s&=~h}}function Jl(t,r){var s=t.entangledLanes|=r;for(t=t.entanglements;s;){var l=31-Gt(s),f=1<<l;f&r|t[l]&r&&(t[l]|=r),s&=~f}}var Ce=0;function wp(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Sp,Zl,bp,kp,Ep,eu=!1,ks=[],$n=null,Mn=null,_n=null,Ji=new Map,Zi=new Map,Bn=[],O1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Cp(t,r){switch(t){case"focusin":case"focusout":$n=null;break;case"dragenter":case"dragleave":Mn=null;break;case"mouseover":case"mouseout":_n=null;break;case"pointerover":case"pointerout":Ji.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zi.delete(r.pointerId)}}function eo(t,r,s,l,f,h){return t===null||t.nativeEvent!==h?(t={blockedOn:r,domEventName:s,eventSystemFlags:l,nativeEvent:h,targetContainers:[f]},r!==null&&(r=mo(r),r!==null&&Zl(r)),t):(t.eventSystemFlags|=l,r=t.targetContainers,f!==null&&r.indexOf(f)===-1&&r.push(f),t)}function F1(t,r,s,l,f){switch(r){case"focusin":return $n=eo($n,t,r,s,l,f),!0;case"dragenter":return Mn=eo(Mn,t,r,s,l,f),!0;case"mouseover":return _n=eo(_n,t,r,s,l,f),!0;case"pointerover":var h=f.pointerId;return Ji.set(h,eo(Ji.get(h)||null,t,r,s,l,f)),!0;case"gotpointercapture":return h=f.pointerId,Zi.set(h,eo(Zi.get(h)||null,t,r,s,l,f)),!0}return!1}function Tp(t){var r=hr(t.target);if(r!==null){var s=pr(r);if(s!==null){if(r=s.tag,r===13){if(r=dp(s),r!==null){t.blockedOn=r,Ep(t.priority,function(){bp(s)});return}}else if(r===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Es(t){if(t.blockedOn!==null)return!1;for(var r=t.targetContainers;0<r.length;){var s=nu(t.domEventName,t.eventSystemFlags,r[0],t.nativeEvent);if(s===null){s=t.nativeEvent;var l=new s.constructor(s.type,s);Ul=l,s.target.dispatchEvent(l),Ul=null}else return r=mo(s),r!==null&&Zl(r),t.blockedOn=s,!1;r.shift()}return!0}function Pp(t,r,s){Es(t)&&s.delete(r)}function N1(){eu=!1,$n!==null&&Es($n)&&($n=null),Mn!==null&&Es(Mn)&&(Mn=null),_n!==null&&Es(_n)&&(_n=null),Ji.forEach(Pp),Zi.forEach(Pp)}function to(t,r){t.blockedOn===r&&(t.blockedOn=null,eu||(eu=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,N1)))}function no(t){function r(f){return to(f,t)}if(0<ks.length){to(ks[0],t);for(var s=1;s<ks.length;s++){var l=ks[s];l.blockedOn===t&&(l.blockedOn=null)}}for($n!==null&&to($n,t),Mn!==null&&to(Mn,t),_n!==null&&to(_n,t),Ji.forEach(r),Zi.forEach(r),s=0;s<Bn.length;s++)l=Bn[s],l.blockedOn===t&&(l.blockedOn=null);for(;0<Bn.length&&(s=Bn[0],s.blockedOn===null);)Tp(s),s.blockedOn===null&&Bn.shift()}var Kr=F.ReactCurrentBatchConfig,Cs=!0;function V1(t,r,s,l){var f=Ce,h=Kr.transition;Kr.transition=null;try{Ce=1,tu(t,r,s,l)}finally{Ce=f,Kr.transition=h}}function z1(t,r,s,l){var f=Ce,h=Kr.transition;Kr.transition=null;try{Ce=4,tu(t,r,s,l)}finally{Ce=f,Kr.transition=h}}function tu(t,r,s,l){if(Cs){var f=nu(t,r,s,l);if(f===null)vu(t,r,l,Ts,s),Cp(t,l);else if(F1(f,t,r,s,l))l.stopPropagation();else if(Cp(t,l),r&4&&-1<O1.indexOf(t)){for(;f!==null;){var h=mo(f);if(h!==null&&Sp(h),h=nu(t,r,s,l),h===null&&vu(t,r,l,Ts,s),h===f)break;f=h}f!==null&&l.stopPropagation()}else vu(t,r,l,null,s)}}var Ts=null;function nu(t,r,s,l){if(Ts=null,t=Wl(l),t=hr(t),t!==null)if(r=pr(t),r===null)t=null;else if(s=r.tag,s===13){if(t=dp(r),t!==null)return t;t=null}else if(s===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;t=null}else r!==t&&(t=null);return Ts=t,null}function jp(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(R1()){case ql:return 1;case yp:return 4;case xs:case A1:return 16;case xp:return 536870912;default:return 16}default:return 16}}var On=null,ru=null,Ps=null;function Rp(){if(Ps)return Ps;var t,r=ru,s=r.length,l,f="value"in On?On.value:On.textContent,h=f.length;for(t=0;t<s&&r[t]===f[t];t++);var v=s-t;for(l=1;l<=v&&r[s-l]===f[h-l];l++);return Ps=f.slice(t,1<l?1-l:void 0)}function js(t){var r=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&r===13&&(t=13)):t=r,t===10&&(t=13),32<=t||t===13?t:0}function Rs(){return!0}function Ap(){return!1}function At(t){function r(s,l,f,h,v){this._reactName=s,this._targetInst=f,this.type=l,this.nativeEvent=h,this.target=v,this.currentTarget=null;for(var C in t)t.hasOwnProperty(C)&&(s=t[C],this[C]=s?s(h):h[C]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?Rs:Ap,this.isPropagationStopped=Ap,this}return X(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Rs)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Rs)},persist:function(){},isPersistent:Rs}),r}var Gr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},iu=At(Gr),ro=X({},Gr,{view:0,detail:0}),U1=At(ro),ou,su,io,As=X({},ro,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:lu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==io&&(io&&t.type==="mousemove"?(ou=t.screenX-io.screenX,su=t.screenY-io.screenY):su=ou=0,io=t),ou)},movementY:function(t){return"movementY"in t?t.movementY:su}}),Dp=At(As),W1=X({},As,{dataTransfer:0}),H1=At(W1),K1=X({},ro,{relatedTarget:0}),au=At(K1),G1=X({},Gr,{animationName:0,elapsedTime:0,pseudoElement:0}),Y1=At(G1),q1=X({},Gr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),X1=At(q1),Q1=X({},Gr,{data:0}),Ip=At(Q1),J1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Z1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ew={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function tw(t){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(t):(t=ew[t])?!!r[t]:!1}function lu(){return tw}var nw=X({},ro,{key:function(t){if(t.key){var r=J1[t.key]||t.key;if(r!=="Unidentified")return r}return t.type==="keypress"?(t=js(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Z1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:lu,charCode:function(t){return t.type==="keypress"?js(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?js(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),rw=At(nw),iw=X({},As,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Lp=At(iw),ow=X({},ro,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:lu}),sw=At(ow),aw=X({},Gr,{propertyName:0,elapsedTime:0,pseudoElement:0}),lw=At(aw),uw=X({},As,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),cw=At(uw),dw=[9,13,27,32],uu=d&&"CompositionEvent"in window,oo=null;d&&"documentMode"in document&&(oo=document.documentMode);var fw=d&&"TextEvent"in window&&!oo,$p=d&&(!uu||oo&&8<oo&&11>=oo),Mp=" ",_p=!1;function Bp(t,r){switch(t){case"keyup":return dw.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Op(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Yr=!1;function pw(t,r){switch(t){case"compositionend":return Op(r);case"keypress":return r.which!==32?null:(_p=!0,Mp);case"textInput":return t=r.data,t===Mp&&_p?null:t;default:return null}}function hw(t,r){if(Yr)return t==="compositionend"||!uu&&Bp(t,r)?(t=Rp(),Ps=ru=On=null,Yr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return $p&&r.locale!=="ko"?null:r.data;default:return null}}var mw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Fp(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r==="input"?!!mw[t.type]:r==="textarea"}function Np(t,r,s,l){sp(l),r=Ms(r,"onChange"),0<r.length&&(s=new iu("onChange","change",null,s,l),t.push({event:s,listeners:r}))}var so=null,ao=null;function gw(t){ih(t,0)}function Ds(t){var r=Zr(t);if(Kt(r))return t}function yw(t,r){if(t==="change")return r}var Vp=!1;if(d){var cu;if(d){var du="oninput"in document;if(!du){var zp=document.createElement("div");zp.setAttribute("oninput","return;"),du=typeof zp.oninput=="function"}cu=du}else cu=!1;Vp=cu&&(!document.documentMode||9<document.documentMode)}function Up(){so&&(so.detachEvent("onpropertychange",Wp),ao=so=null)}function Wp(t){if(t.propertyName==="value"&&Ds(ao)){var r=[];Np(r,ao,t,Wl(t)),cp(gw,r)}}function xw(t,r,s){t==="focusin"?(Up(),so=r,ao=s,so.attachEvent("onpropertychange",Wp)):t==="focusout"&&Up()}function vw(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ds(ao)}function ww(t,r){if(t==="click")return Ds(r)}function Sw(t,r){if(t==="input"||t==="change")return Ds(r)}function bw(t,r){return t===r&&(t!==0||1/t===1/r)||t!==t&&r!==r}var Yt=typeof Object.is=="function"?Object.is:bw;function lo(t,r){if(Yt(t,r))return!0;if(typeof t!="object"||t===null||typeof r!="object"||r===null)return!1;var s=Object.keys(t),l=Object.keys(r);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var f=s[l];if(!p.call(r,f)||!Yt(t[f],r[f]))return!1}return!0}function Hp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Kp(t,r){var s=Hp(t);t=0;for(var l;s;){if(s.nodeType===3){if(l=t+s.textContent.length,t<=r&&l>=r)return{node:s,offset:r-t};t=l}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=Hp(s)}}function Gp(t,r){return t&&r?t===r?!0:t&&t.nodeType===3?!1:r&&r.nodeType===3?Gp(t,r.parentNode):"contains"in t?t.contains(r):t.compareDocumentPosition?!!(t.compareDocumentPosition(r)&16):!1:!1}function Yp(){for(var t=window,r=hs();r instanceof t.HTMLIFrameElement;){try{var s=typeof r.contentWindow.location.href=="string"}catch{s=!1}if(s)t=r.contentWindow;else break;r=hs(t.document)}return r}function fu(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r&&(r==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||r==="textarea"||t.contentEditable==="true")}function kw(t){var r=Yp(),s=t.focusedElem,l=t.selectionRange;if(r!==s&&s&&s.ownerDocument&&Gp(s.ownerDocument.documentElement,s)){if(l!==null&&fu(s)){if(r=l.start,t=l.end,t===void 0&&(t=r),"selectionStart"in s)s.selectionStart=r,s.selectionEnd=Math.min(t,s.value.length);else if(t=(r=s.ownerDocument||document)&&r.defaultView||window,t.getSelection){t=t.getSelection();var f=s.textContent.length,h=Math.min(l.start,f);l=l.end===void 0?h:Math.min(l.end,f),!t.extend&&h>l&&(f=l,l=h,h=f),f=Kp(s,h);var v=Kp(s,l);f&&v&&(t.rangeCount!==1||t.anchorNode!==f.node||t.anchorOffset!==f.offset||t.focusNode!==v.node||t.focusOffset!==v.offset)&&(r=r.createRange(),r.setStart(f.node,f.offset),t.removeAllRanges(),h>l?(t.addRange(r),t.extend(v.node,v.offset)):(r.setEnd(v.node,v.offset),t.addRange(r)))}}for(r=[],t=s;t=t.parentNode;)t.nodeType===1&&r.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<r.length;s++)t=r[s],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Ew=d&&"documentMode"in document&&11>=document.documentMode,qr=null,pu=null,uo=null,hu=!1;function qp(t,r,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;hu||qr==null||qr!==hs(l)||(l=qr,"selectionStart"in l&&fu(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),uo&&lo(uo,l)||(uo=l,l=Ms(pu,"onSelect"),0<l.length&&(r=new iu("onSelect","select",null,r,s),t.push({event:r,listeners:l}),r.target=qr)))}function Is(t,r){var s={};return s[t.toLowerCase()]=r.toLowerCase(),s["Webkit"+t]="webkit"+r,s["Moz"+t]="moz"+r,s}var Xr={animationend:Is("Animation","AnimationEnd"),animationiteration:Is("Animation","AnimationIteration"),animationstart:Is("Animation","AnimationStart"),transitionend:Is("Transition","TransitionEnd")},mu={},Xp={};d&&(Xp=document.createElement("div").style,"AnimationEvent"in window||(delete Xr.animationend.animation,delete Xr.animationiteration.animation,delete Xr.animationstart.animation),"TransitionEvent"in window||delete Xr.transitionend.transition);function Ls(t){if(mu[t])return mu[t];if(!Xr[t])return t;var r=Xr[t],s;for(s in r)if(r.hasOwnProperty(s)&&s in Xp)return mu[t]=r[s];return t}var Qp=Ls("animationend"),Jp=Ls("animationiteration"),Zp=Ls("animationstart"),eh=Ls("transitionend"),th=new Map,nh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Fn(t,r){th.set(t,r),u(r,[t])}for(var gu=0;gu<nh.length;gu++){var yu=nh[gu],Cw=yu.toLowerCase(),Tw=yu[0].toUpperCase()+yu.slice(1);Fn(Cw,"on"+Tw)}Fn(Qp,"onAnimationEnd"),Fn(Jp,"onAnimationIteration"),Fn(Zp,"onAnimationStart"),Fn("dblclick","onDoubleClick"),Fn("focusin","onFocus"),Fn("focusout","onBlur"),Fn(eh,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var co="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Pw=new Set("cancel close invalid load scroll toggle".split(" ").concat(co));function rh(t,r,s){var l=t.type||"unknown-event";t.currentTarget=s,C1(l,r,void 0,t),t.currentTarget=null}function ih(t,r){r=(r&4)!==0;for(var s=0;s<t.length;s++){var l=t[s],f=l.event;l=l.listeners;e:{var h=void 0;if(r)for(var v=l.length-1;0<=v;v--){var C=l[v],j=C.instance,_=C.currentTarget;if(C=C.listener,j!==h&&f.isPropagationStopped())break e;rh(f,C,_),h=j}else for(v=0;v<l.length;v++){if(C=l[v],j=C.instance,_=C.currentTarget,C=C.listener,j!==h&&f.isPropagationStopped())break e;rh(f,C,_),h=j}}}if(ys)throw t=Yl,ys=!1,Yl=null,t}function je(t,r){var s=r[Cu];s===void 0&&(s=r[Cu]=new Set);var l=t+"__bubble";s.has(l)||(oh(r,t,2,!1),s.add(l))}function xu(t,r,s){var l=0;r&&(l|=4),oh(s,t,l,r)}var $s="_reactListening"+Math.random().toString(36).slice(2);function fo(t){if(!t[$s]){t[$s]=!0,o.forEach(function(s){s!=="selectionchange"&&(Pw.has(s)||xu(s,!1,t),xu(s,!0,t))});var r=t.nodeType===9?t:t.ownerDocument;r===null||r[$s]||(r[$s]=!0,xu("selectionchange",!1,r))}}function oh(t,r,s,l){switch(jp(r)){case 1:var f=V1;break;case 4:f=z1;break;default:f=tu}s=f.bind(null,r,s,t),f=void 0,!Gl||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(f=!0),l?f!==void 0?t.addEventListener(r,s,{capture:!0,passive:f}):t.addEventListener(r,s,!0):f!==void 0?t.addEventListener(r,s,{passive:f}):t.addEventListener(r,s,!1)}function vu(t,r,s,l,f){var h=l;if(!(r&1)&&!(r&2)&&l!==null)e:for(;;){if(l===null)return;var v=l.tag;if(v===3||v===4){var C=l.stateNode.containerInfo;if(C===f||C.nodeType===8&&C.parentNode===f)break;if(v===4)for(v=l.return;v!==null;){var j=v.tag;if((j===3||j===4)&&(j=v.stateNode.containerInfo,j===f||j.nodeType===8&&j.parentNode===f))return;v=v.return}for(;C!==null;){if(v=hr(C),v===null)return;if(j=v.tag,j===5||j===6){l=h=v;continue e}C=C.parentNode}}l=l.return}cp(function(){var _=h,U=Wl(s),K=[];e:{var z=th.get(t);if(z!==void 0){var J=iu,ee=t;switch(t){case"keypress":if(js(s)===0)break e;case"keydown":case"keyup":J=rw;break;case"focusin":ee="focus",J=au;break;case"focusout":ee="blur",J=au;break;case"beforeblur":case"afterblur":J=au;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":J=Dp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":J=H1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":J=sw;break;case Qp:case Jp:case Zp:J=Y1;break;case eh:J=lw;break;case"scroll":J=U1;break;case"wheel":J=cw;break;case"copy":case"cut":case"paste":J=X1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":J=Lp}var ne=(r&4)!==0,Ve=!ne&&t==="scroll",$=ne?z!==null?z+"Capture":null:z;ne=[];for(var D=_,M;D!==null;){M=D;var G=M.stateNode;if(M.tag===5&&G!==null&&(M=G,$!==null&&(G=Gi(D,$),G!=null&&ne.push(po(D,G,M)))),Ve)break;D=D.return}0<ne.length&&(z=new J(z,ee,null,s,U),K.push({event:z,listeners:ne}))}}if(!(r&7)){e:{if(z=t==="mouseover"||t==="pointerover",J=t==="mouseout"||t==="pointerout",z&&s!==Ul&&(ee=s.relatedTarget||s.fromElement)&&(hr(ee)||ee[wn]))break e;if((J||z)&&(z=U.window===U?U:(z=U.ownerDocument)?z.defaultView||z.parentWindow:window,J?(ee=s.relatedTarget||s.toElement,J=_,ee=ee?hr(ee):null,ee!==null&&(Ve=pr(ee),ee!==Ve||ee.tag!==5&&ee.tag!==6)&&(ee=null)):(J=null,ee=_),J!==ee)){if(ne=Dp,G="onMouseLeave",$="onMouseEnter",D="mouse",(t==="pointerout"||t==="pointerover")&&(ne=Lp,G="onPointerLeave",$="onPointerEnter",D="pointer"),Ve=J==null?z:Zr(J),M=ee==null?z:Zr(ee),z=new ne(G,D+"leave",J,s,U),z.target=Ve,z.relatedTarget=M,G=null,hr(U)===_&&(ne=new ne($,D+"enter",ee,s,U),ne.target=M,ne.relatedTarget=Ve,G=ne),Ve=G,J&&ee)t:{for(ne=J,$=ee,D=0,M=ne;M;M=Qr(M))D++;for(M=0,G=$;G;G=Qr(G))M++;for(;0<D-M;)ne=Qr(ne),D--;for(;0<M-D;)$=Qr($),M--;for(;D--;){if(ne===$||$!==null&&ne===$.alternate)break t;ne=Qr(ne),$=Qr($)}ne=null}else ne=null;J!==null&&sh(K,z,J,ne,!1),ee!==null&&Ve!==null&&sh(K,Ve,ee,ne,!0)}}e:{if(z=_?Zr(_):window,J=z.nodeName&&z.nodeName.toLowerCase(),J==="select"||J==="input"&&z.type==="file")var re=yw;else if(Fp(z))if(Vp)re=Sw;else{re=vw;var ie=xw}else(J=z.nodeName)&&J.toLowerCase()==="input"&&(z.type==="checkbox"||z.type==="radio")&&(re=ww);if(re&&(re=re(t,_))){Np(K,re,s,U);break e}ie&&ie(t,z,_),t==="focusout"&&(ie=z._wrapperState)&&ie.controlled&&z.type==="number"&&Ol(z,"number",z.value)}switch(ie=_?Zr(_):window,t){case"focusin":(Fp(ie)||ie.contentEditable==="true")&&(qr=ie,pu=_,uo=null);break;case"focusout":uo=pu=qr=null;break;case"mousedown":hu=!0;break;case"contextmenu":case"mouseup":case"dragend":hu=!1,qp(K,s,U);break;case"selectionchange":if(Ew)break;case"keydown":case"keyup":qp(K,s,U)}var oe;if(uu)e:{switch(t){case"compositionstart":var ue="onCompositionStart";break e;case"compositionend":ue="onCompositionEnd";break e;case"compositionupdate":ue="onCompositionUpdate";break e}ue=void 0}else Yr?Bp(t,s)&&(ue="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(ue="onCompositionStart");ue&&($p&&s.locale!=="ko"&&(Yr||ue!=="onCompositionStart"?ue==="onCompositionEnd"&&Yr&&(oe=Rp()):(On=U,ru="value"in On?On.value:On.textContent,Yr=!0)),ie=Ms(_,ue),0<ie.length&&(ue=new Ip(ue,t,null,s,U),K.push({event:ue,listeners:ie}),oe?ue.data=oe:(oe=Op(s),oe!==null&&(ue.data=oe)))),(oe=fw?pw(t,s):hw(t,s))&&(_=Ms(_,"onBeforeInput"),0<_.length&&(U=new Ip("onBeforeInput","beforeinput",null,s,U),K.push({event:U,listeners:_}),U.data=oe))}ih(K,r)})}function po(t,r,s){return{instance:t,listener:r,currentTarget:s}}function Ms(t,r){for(var s=r+"Capture",l=[];t!==null;){var f=t,h=f.stateNode;f.tag===5&&h!==null&&(f=h,h=Gi(t,s),h!=null&&l.unshift(po(t,h,f)),h=Gi(t,r),h!=null&&l.push(po(t,h,f))),t=t.return}return l}function Qr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function sh(t,r,s,l,f){for(var h=r._reactName,v=[];s!==null&&s!==l;){var C=s,j=C.alternate,_=C.stateNode;if(j!==null&&j===l)break;C.tag===5&&_!==null&&(C=_,f?(j=Gi(s,h),j!=null&&v.unshift(po(s,j,C))):f||(j=Gi(s,h),j!=null&&v.push(po(s,j,C)))),s=s.return}v.length!==0&&t.push({event:r,listeners:v})}var jw=/\r\n?/g,Rw=/\u0000|\uFFFD/g;function ah(t){return(typeof t=="string"?t:""+t).replace(jw,`
`).replace(Rw,"")}function _s(t,r,s){if(r=ah(r),ah(t)!==r&&s)throw Error(i(425))}function Bs(){}var wu=null,Su=null;function bu(t,r){return t==="textarea"||t==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var ku=typeof setTimeout=="function"?setTimeout:void 0,Aw=typeof clearTimeout=="function"?clearTimeout:void 0,lh=typeof Promise=="function"?Promise:void 0,Dw=typeof queueMicrotask=="function"?queueMicrotask:typeof lh<"u"?function(t){return lh.resolve(null).then(t).catch(Iw)}:ku;function Iw(t){setTimeout(function(){throw t})}function Eu(t,r){var s=r,l=0;do{var f=s.nextSibling;if(t.removeChild(s),f&&f.nodeType===8)if(s=f.data,s==="/$"){if(l===0){t.removeChild(f),no(r);return}l--}else s!=="$"&&s!=="$?"&&s!=="$!"||l++;s=f}while(s);no(r)}function Nn(t){for(;t!=null;t=t.nextSibling){var r=t.nodeType;if(r===1||r===3)break;if(r===8){if(r=t.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return t}function uh(t){t=t.previousSibling;for(var r=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"){if(r===0)return t;r--}else s==="/$"&&r++}t=t.previousSibling}return null}var Jr=Math.random().toString(36).slice(2),ln="__reactFiber$"+Jr,ho="__reactProps$"+Jr,wn="__reactContainer$"+Jr,Cu="__reactEvents$"+Jr,Lw="__reactListeners$"+Jr,$w="__reactHandles$"+Jr;function hr(t){var r=t[ln];if(r)return r;for(var s=t.parentNode;s;){if(r=s[wn]||s[ln]){if(s=r.alternate,r.child!==null||s!==null&&s.child!==null)for(t=uh(t);t!==null;){if(s=t[ln])return s;t=uh(t)}return r}t=s,s=t.parentNode}return null}function mo(t){return t=t[ln]||t[wn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Zr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(i(33))}function Os(t){return t[ho]||null}var Tu=[],ei=-1;function Vn(t){return{current:t}}function Re(t){0>ei||(t.current=Tu[ei],Tu[ei]=null,ei--)}function Pe(t,r){ei++,Tu[ei]=t.current,t.current=r}var zn={},ct=Vn(zn),wt=Vn(!1),mr=zn;function ti(t,r){var s=t.type.contextTypes;if(!s)return zn;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===r)return l.__reactInternalMemoizedMaskedChildContext;var f={},h;for(h in s)f[h]=r[h];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=f),f}function St(t){return t=t.childContextTypes,t!=null}function Fs(){Re(wt),Re(ct)}function ch(t,r,s){if(ct.current!==zn)throw Error(i(168));Pe(ct,r),Pe(wt,s)}function dh(t,r,s){var l=t.stateNode;if(r=r.childContextTypes,typeof l.getChildContext!="function")return s;l=l.getChildContext();for(var f in l)if(!(f in r))throw Error(i(108,be(t)||"Unknown",f));return X({},s,l)}function Ns(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||zn,mr=ct.current,Pe(ct,t),Pe(wt,wt.current),!0}function fh(t,r,s){var l=t.stateNode;if(!l)throw Error(i(169));s?(t=dh(t,r,mr),l.__reactInternalMemoizedMergedChildContext=t,Re(wt),Re(ct),Pe(ct,t)):Re(wt),Pe(wt,s)}var Sn=null,Vs=!1,Pu=!1;function ph(t){Sn===null?Sn=[t]:Sn.push(t)}function Mw(t){Vs=!0,ph(t)}function Un(){if(!Pu&&Sn!==null){Pu=!0;var t=0,r=Ce;try{var s=Sn;for(Ce=1;t<s.length;t++){var l=s[t];do l=l(!0);while(l!==null)}Sn=null,Vs=!1}catch(f){throw Sn!==null&&(Sn=Sn.slice(t+1)),mp(ql,Un),f}finally{Ce=r,Pu=!1}}return null}var ni=[],ri=0,zs=null,Us=0,Mt=[],_t=0,gr=null,bn=1,kn="";function yr(t,r){ni[ri++]=Us,ni[ri++]=zs,zs=t,Us=r}function hh(t,r,s){Mt[_t++]=bn,Mt[_t++]=kn,Mt[_t++]=gr,gr=t;var l=bn;t=kn;var f=32-Gt(l)-1;l&=~(1<<f),s+=1;var h=32-Gt(r)+f;if(30<h){var v=f-f%5;h=(l&(1<<v)-1).toString(32),l>>=v,f-=v,bn=1<<32-Gt(r)+f|s<<f|l,kn=h+t}else bn=1<<h|s<<f|l,kn=t}function ju(t){t.return!==null&&(yr(t,1),hh(t,1,0))}function Ru(t){for(;t===zs;)zs=ni[--ri],ni[ri]=null,Us=ni[--ri],ni[ri]=null;for(;t===gr;)gr=Mt[--_t],Mt[_t]=null,kn=Mt[--_t],Mt[_t]=null,bn=Mt[--_t],Mt[_t]=null}var Dt=null,It=null,De=!1,qt=null;function mh(t,r){var s=Nt(5,null,null,0);s.elementType="DELETED",s.stateNode=r,s.return=t,r=t.deletions,r===null?(t.deletions=[s],t.flags|=16):r.push(s)}function gh(t,r){switch(t.tag){case 5:var s=t.type;return r=r.nodeType!==1||s.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(t.stateNode=r,Dt=t,It=Nn(r.firstChild),!0):!1;case 6:return r=t.pendingProps===""||r.nodeType!==3?null:r,r!==null?(t.stateNode=r,Dt=t,It=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(s=gr!==null?{id:bn,overflow:kn}:null,t.memoizedState={dehydrated:r,treeContext:s,retryLane:1073741824},s=Nt(18,null,null,0),s.stateNode=r,s.return=t,t.child=s,Dt=t,It=null,!0):!1;default:return!1}}function Au(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Du(t){if(De){var r=It;if(r){var s=r;if(!gh(t,r)){if(Au(t))throw Error(i(418));r=Nn(s.nextSibling);var l=Dt;r&&gh(t,r)?mh(l,s):(t.flags=t.flags&-4097|2,De=!1,Dt=t)}}else{if(Au(t))throw Error(i(418));t.flags=t.flags&-4097|2,De=!1,Dt=t}}}function yh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Dt=t}function Ws(t){if(t!==Dt)return!1;if(!De)return yh(t),De=!0,!1;var r;if((r=t.tag!==3)&&!(r=t.tag!==5)&&(r=t.type,r=r!=="head"&&r!=="body"&&!bu(t.type,t.memoizedProps)),r&&(r=It)){if(Au(t))throw xh(),Error(i(418));for(;r;)mh(t,r),r=Nn(r.nextSibling)}if(yh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(i(317));e:{for(t=t.nextSibling,r=0;t;){if(t.nodeType===8){var s=t.data;if(s==="/$"){if(r===0){It=Nn(t.nextSibling);break e}r--}else s!=="$"&&s!=="$!"&&s!=="$?"||r++}t=t.nextSibling}It=null}}else It=Dt?Nn(t.stateNode.nextSibling):null;return!0}function xh(){for(var t=It;t;)t=Nn(t.nextSibling)}function ii(){It=Dt=null,De=!1}function Iu(t){qt===null?qt=[t]:qt.push(t)}var _w=F.ReactCurrentBatchConfig;function go(t,r,s){if(t=s.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(s._owner){if(s=s._owner,s){if(s.tag!==1)throw Error(i(309));var l=s.stateNode}if(!l)throw Error(i(147,t));var f=l,h=""+t;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===h?r.ref:(r=function(v){var C=f.refs;v===null?delete C[h]:C[h]=v},r._stringRef=h,r)}if(typeof t!="string")throw Error(i(284));if(!s._owner)throw Error(i(290,t))}return t}function Hs(t,r){throw t=Object.prototype.toString.call(r),Error(i(31,t==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":t))}function vh(t){var r=t._init;return r(t._payload)}function wh(t){function r($,D){if(t){var M=$.deletions;M===null?($.deletions=[D],$.flags|=16):M.push(D)}}function s($,D){if(!t)return null;for(;D!==null;)r($,D),D=D.sibling;return null}function l($,D){for($=new Map;D!==null;)D.key!==null?$.set(D.key,D):$.set(D.index,D),D=D.sibling;return $}function f($,D){return $=Qn($,D),$.index=0,$.sibling=null,$}function h($,D,M){return $.index=M,t?(M=$.alternate,M!==null?(M=M.index,M<D?($.flags|=2,D):M):($.flags|=2,D)):($.flags|=1048576,D)}function v($){return t&&$.alternate===null&&($.flags|=2),$}function C($,D,M,G){return D===null||D.tag!==6?(D=kc(M,$.mode,G),D.return=$,D):(D=f(D,M),D.return=$,D)}function j($,D,M,G){var re=M.type;return re===W?U($,D,M.props.children,G,M.key):D!==null&&(D.elementType===re||typeof re=="object"&&re!==null&&re.$$typeof===nt&&vh(re)===D.type)?(G=f(D,M.props),G.ref=go($,D,M),G.return=$,G):(G=ma(M.type,M.key,M.props,null,$.mode,G),G.ref=go($,D,M),G.return=$,G)}function _($,D,M,G){return D===null||D.tag!==4||D.stateNode.containerInfo!==M.containerInfo||D.stateNode.implementation!==M.implementation?(D=Ec(M,$.mode,G),D.return=$,D):(D=f(D,M.children||[]),D.return=$,D)}function U($,D,M,G,re){return D===null||D.tag!==7?(D=Cr(M,$.mode,G,re),D.return=$,D):(D=f(D,M),D.return=$,D)}function K($,D,M){if(typeof D=="string"&&D!==""||typeof D=="number")return D=kc(""+D,$.mode,M),D.return=$,D;if(typeof D=="object"&&D!==null){switch(D.$$typeof){case O:return M=ma(D.type,D.key,D.props,null,$.mode,M),M.ref=go($,null,D),M.return=$,M;case V:return D=Ec(D,$.mode,M),D.return=$,D;case nt:var G=D._init;return K($,G(D._payload),M)}if(Wi(D)||te(D))return D=Cr(D,$.mode,M,null),D.return=$,D;Hs($,D)}return null}function z($,D,M,G){var re=D!==null?D.key:null;if(typeof M=="string"&&M!==""||typeof M=="number")return re!==null?null:C($,D,""+M,G);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case O:return M.key===re?j($,D,M,G):null;case V:return M.key===re?_($,D,M,G):null;case nt:return re=M._init,z($,D,re(M._payload),G)}if(Wi(M)||te(M))return re!==null?null:U($,D,M,G,null);Hs($,M)}return null}function J($,D,M,G,re){if(typeof G=="string"&&G!==""||typeof G=="number")return $=$.get(M)||null,C(D,$,""+G,re);if(typeof G=="object"&&G!==null){switch(G.$$typeof){case O:return $=$.get(G.key===null?M:G.key)||null,j(D,$,G,re);case V:return $=$.get(G.key===null?M:G.key)||null,_(D,$,G,re);case nt:var ie=G._init;return J($,D,M,ie(G._payload),re)}if(Wi(G)||te(G))return $=$.get(M)||null,U(D,$,G,re,null);Hs(D,G)}return null}function ee($,D,M,G){for(var re=null,ie=null,oe=D,ue=D=0,Je=null;oe!==null&&ue<M.length;ue++){oe.index>ue?(Je=oe,oe=null):Je=oe.sibling;var Se=z($,oe,M[ue],G);if(Se===null){oe===null&&(oe=Je);break}t&&oe&&Se.alternate===null&&r($,oe),D=h(Se,D,ue),ie===null?re=Se:ie.sibling=Se,ie=Se,oe=Je}if(ue===M.length)return s($,oe),De&&yr($,ue),re;if(oe===null){for(;ue<M.length;ue++)oe=K($,M[ue],G),oe!==null&&(D=h(oe,D,ue),ie===null?re=oe:ie.sibling=oe,ie=oe);return De&&yr($,ue),re}for(oe=l($,oe);ue<M.length;ue++)Je=J(oe,$,ue,M[ue],G),Je!==null&&(t&&Je.alternate!==null&&oe.delete(Je.key===null?ue:Je.key),D=h(Je,D,ue),ie===null?re=Je:ie.sibling=Je,ie=Je);return t&&oe.forEach(function(Jn){return r($,Jn)}),De&&yr($,ue),re}function ne($,D,M,G){var re=te(M);if(typeof re!="function")throw Error(i(150));if(M=re.call(M),M==null)throw Error(i(151));for(var ie=re=null,oe=D,ue=D=0,Je=null,Se=M.next();oe!==null&&!Se.done;ue++,Se=M.next()){oe.index>ue?(Je=oe,oe=null):Je=oe.sibling;var Jn=z($,oe,Se.value,G);if(Jn===null){oe===null&&(oe=Je);break}t&&oe&&Jn.alternate===null&&r($,oe),D=h(Jn,D,ue),ie===null?re=Jn:ie.sibling=Jn,ie=Jn,oe=Je}if(Se.done)return s($,oe),De&&yr($,ue),re;if(oe===null){for(;!Se.done;ue++,Se=M.next())Se=K($,Se.value,G),Se!==null&&(D=h(Se,D,ue),ie===null?re=Se:ie.sibling=Se,ie=Se);return De&&yr($,ue),re}for(oe=l($,oe);!Se.done;ue++,Se=M.next())Se=J(oe,$,ue,Se.value,G),Se!==null&&(t&&Se.alternate!==null&&oe.delete(Se.key===null?ue:Se.key),D=h(Se,D,ue),ie===null?re=Se:ie.sibling=Se,ie=Se);return t&&oe.forEach(function(mS){return r($,mS)}),De&&yr($,ue),re}function Ve($,D,M,G){if(typeof M=="object"&&M!==null&&M.type===W&&M.key===null&&(M=M.props.children),typeof M=="object"&&M!==null){switch(M.$$typeof){case O:e:{for(var re=M.key,ie=D;ie!==null;){if(ie.key===re){if(re=M.type,re===W){if(ie.tag===7){s($,ie.sibling),D=f(ie,M.props.children),D.return=$,$=D;break e}}else if(ie.elementType===re||typeof re=="object"&&re!==null&&re.$$typeof===nt&&vh(re)===ie.type){s($,ie.sibling),D=f(ie,M.props),D.ref=go($,ie,M),D.return=$,$=D;break e}s($,ie);break}else r($,ie);ie=ie.sibling}M.type===W?(D=Cr(M.props.children,$.mode,G,M.key),D.return=$,$=D):(G=ma(M.type,M.key,M.props,null,$.mode,G),G.ref=go($,D,M),G.return=$,$=G)}return v($);case V:e:{for(ie=M.key;D!==null;){if(D.key===ie)if(D.tag===4&&D.stateNode.containerInfo===M.containerInfo&&D.stateNode.implementation===M.implementation){s($,D.sibling),D=f(D,M.children||[]),D.return=$,$=D;break e}else{s($,D);break}else r($,D);D=D.sibling}D=Ec(M,$.mode,G),D.return=$,$=D}return v($);case nt:return ie=M._init,Ve($,D,ie(M._payload),G)}if(Wi(M))return ee($,D,M,G);if(te(M))return ne($,D,M,G);Hs($,M)}return typeof M=="string"&&M!==""||typeof M=="number"?(M=""+M,D!==null&&D.tag===6?(s($,D.sibling),D=f(D,M),D.return=$,$=D):(s($,D),D=kc(M,$.mode,G),D.return=$,$=D),v($)):s($,D)}return Ve}var oi=wh(!0),Sh=wh(!1),Ks=Vn(null),Gs=null,si=null,Lu=null;function $u(){Lu=si=Gs=null}function Mu(t){var r=Ks.current;Re(Ks),t._currentValue=r}function _u(t,r,s){for(;t!==null;){var l=t.alternate;if((t.childLanes&r)!==r?(t.childLanes|=r,l!==null&&(l.childLanes|=r)):l!==null&&(l.childLanes&r)!==r&&(l.childLanes|=r),t===s)break;t=t.return}}function ai(t,r){Gs=t,Lu=si=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&r&&(bt=!0),t.firstContext=null)}function Bt(t){var r=t._currentValue;if(Lu!==t)if(t={context:t,memoizedValue:r,next:null},si===null){if(Gs===null)throw Error(i(308));si=t,Gs.dependencies={lanes:0,firstContext:t}}else si=si.next=t;return r}var xr=null;function Bu(t){xr===null?xr=[t]:xr.push(t)}function bh(t,r,s,l){var f=r.interleaved;return f===null?(s.next=s,Bu(r)):(s.next=f.next,f.next=s),r.interleaved=s,En(t,l)}function En(t,r){t.lanes|=r;var s=t.alternate;for(s!==null&&(s.lanes|=r),s=t,t=t.return;t!==null;)t.childLanes|=r,s=t.alternate,s!==null&&(s.childLanes|=r),s=t,t=t.return;return s.tag===3?s.stateNode:null}var Wn=!1;function Ou(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function kh(t,r){t=t.updateQueue,r.updateQueue===t&&(r.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Cn(t,r){return{eventTime:t,lane:r,tag:0,payload:null,callback:null,next:null}}function Hn(t,r,s){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,ve&2){var f=l.pending;return f===null?r.next=r:(r.next=f.next,f.next=r),l.pending=r,En(t,s)}return f=l.interleaved,f===null?(r.next=r,Bu(l)):(r.next=f.next,f.next=r),l.interleaved=r,En(t,s)}function Ys(t,r,s){if(r=r.updateQueue,r!==null&&(r=r.shared,(s&4194240)!==0)){var l=r.lanes;l&=t.pendingLanes,s|=l,r.lanes=s,Jl(t,s)}}function Eh(t,r){var s=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var f=null,h=null;if(s=s.firstBaseUpdate,s!==null){do{var v={eventTime:s.eventTime,lane:s.lane,tag:s.tag,payload:s.payload,callback:s.callback,next:null};h===null?f=h=v:h=h.next=v,s=s.next}while(s!==null);h===null?f=h=r:h=h.next=r}else f=h=r;s={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:h,shared:l.shared,effects:l.effects},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=r:t.next=r,s.lastBaseUpdate=r}function qs(t,r,s,l){var f=t.updateQueue;Wn=!1;var h=f.firstBaseUpdate,v=f.lastBaseUpdate,C=f.shared.pending;if(C!==null){f.shared.pending=null;var j=C,_=j.next;j.next=null,v===null?h=_:v.next=_,v=j;var U=t.alternate;U!==null&&(U=U.updateQueue,C=U.lastBaseUpdate,C!==v&&(C===null?U.firstBaseUpdate=_:C.next=_,U.lastBaseUpdate=j))}if(h!==null){var K=f.baseState;v=0,U=_=j=null,C=h;do{var z=C.lane,J=C.eventTime;if((l&z)===z){U!==null&&(U=U.next={eventTime:J,lane:0,tag:C.tag,payload:C.payload,callback:C.callback,next:null});e:{var ee=t,ne=C;switch(z=r,J=s,ne.tag){case 1:if(ee=ne.payload,typeof ee=="function"){K=ee.call(J,K,z);break e}K=ee;break e;case 3:ee.flags=ee.flags&-65537|128;case 0:if(ee=ne.payload,z=typeof ee=="function"?ee.call(J,K,z):ee,z==null)break e;K=X({},K,z);break e;case 2:Wn=!0}}C.callback!==null&&C.lane!==0&&(t.flags|=64,z=f.effects,z===null?f.effects=[C]:z.push(C))}else J={eventTime:J,lane:z,tag:C.tag,payload:C.payload,callback:C.callback,next:null},U===null?(_=U=J,j=K):U=U.next=J,v|=z;if(C=C.next,C===null){if(C=f.shared.pending,C===null)break;z=C,C=z.next,z.next=null,f.lastBaseUpdate=z,f.shared.pending=null}}while(!0);if(U===null&&(j=K),f.baseState=j,f.firstBaseUpdate=_,f.lastBaseUpdate=U,r=f.shared.interleaved,r!==null){f=r;do v|=f.lane,f=f.next;while(f!==r)}else h===null&&(f.shared.lanes=0);Sr|=v,t.lanes=v,t.memoizedState=K}}function Ch(t,r,s){if(t=r.effects,r.effects=null,t!==null)for(r=0;r<t.length;r++){var l=t[r],f=l.callback;if(f!==null){if(l.callback=null,l=s,typeof f!="function")throw Error(i(191,f));f.call(l)}}}var yo={},un=Vn(yo),xo=Vn(yo),vo=Vn(yo);function vr(t){if(t===yo)throw Error(i(174));return t}function Fu(t,r){switch(Pe(vo,r),Pe(xo,t),Pe(un,yo),t=r.nodeType,t){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:Nl(null,"");break;default:t=t===8?r.parentNode:r,r=t.namespaceURI||null,t=t.tagName,r=Nl(r,t)}Re(un),Pe(un,r)}function li(){Re(un),Re(xo),Re(vo)}function Th(t){vr(vo.current);var r=vr(un.current),s=Nl(r,t.type);r!==s&&(Pe(xo,t),Pe(un,s))}function Nu(t){xo.current===t&&(Re(un),Re(xo))}var $e=Vn(0);function Xs(t){for(var r=t;r!==null;){if(r.tag===13){var s=r.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||s.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if(r.flags&128)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Vu=[];function zu(){for(var t=0;t<Vu.length;t++)Vu[t]._workInProgressVersionPrimary=null;Vu.length=0}var Qs=F.ReactCurrentDispatcher,Uu=F.ReactCurrentBatchConfig,wr=0,Me=null,Ye=null,Xe=null,Js=!1,wo=!1,So=0,Bw=0;function dt(){throw Error(i(321))}function Wu(t,r){if(r===null)return!1;for(var s=0;s<r.length&&s<t.length;s++)if(!Yt(t[s],r[s]))return!1;return!0}function Hu(t,r,s,l,f,h){if(wr=h,Me=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Qs.current=t===null||t.memoizedState===null?Vw:zw,t=s(l,f),wo){h=0;do{if(wo=!1,So=0,25<=h)throw Error(i(301));h+=1,Xe=Ye=null,r.updateQueue=null,Qs.current=Uw,t=s(l,f)}while(wo)}if(Qs.current=ta,r=Ye!==null&&Ye.next!==null,wr=0,Xe=Ye=Me=null,Js=!1,r)throw Error(i(300));return t}function Ku(){var t=So!==0;return So=0,t}function cn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Xe===null?Me.memoizedState=Xe=t:Xe=Xe.next=t,Xe}function Ot(){if(Ye===null){var t=Me.alternate;t=t!==null?t.memoizedState:null}else t=Ye.next;var r=Xe===null?Me.memoizedState:Xe.next;if(r!==null)Xe=r,Ye=t;else{if(t===null)throw Error(i(310));Ye=t,t={memoizedState:Ye.memoizedState,baseState:Ye.baseState,baseQueue:Ye.baseQueue,queue:Ye.queue,next:null},Xe===null?Me.memoizedState=Xe=t:Xe=Xe.next=t}return Xe}function bo(t,r){return typeof r=="function"?r(t):r}function Gu(t){var r=Ot(),s=r.queue;if(s===null)throw Error(i(311));s.lastRenderedReducer=t;var l=Ye,f=l.baseQueue,h=s.pending;if(h!==null){if(f!==null){var v=f.next;f.next=h.next,h.next=v}l.baseQueue=f=h,s.pending=null}if(f!==null){h=f.next,l=l.baseState;var C=v=null,j=null,_=h;do{var U=_.lane;if((wr&U)===U)j!==null&&(j=j.next={lane:0,action:_.action,hasEagerState:_.hasEagerState,eagerState:_.eagerState,next:null}),l=_.hasEagerState?_.eagerState:t(l,_.action);else{var K={lane:U,action:_.action,hasEagerState:_.hasEagerState,eagerState:_.eagerState,next:null};j===null?(C=j=K,v=l):j=j.next=K,Me.lanes|=U,Sr|=U}_=_.next}while(_!==null&&_!==h);j===null?v=l:j.next=C,Yt(l,r.memoizedState)||(bt=!0),r.memoizedState=l,r.baseState=v,r.baseQueue=j,s.lastRenderedState=l}if(t=s.interleaved,t!==null){f=t;do h=f.lane,Me.lanes|=h,Sr|=h,f=f.next;while(f!==t)}else f===null&&(s.lanes=0);return[r.memoizedState,s.dispatch]}function Yu(t){var r=Ot(),s=r.queue;if(s===null)throw Error(i(311));s.lastRenderedReducer=t;var l=s.dispatch,f=s.pending,h=r.memoizedState;if(f!==null){s.pending=null;var v=f=f.next;do h=t(h,v.action),v=v.next;while(v!==f);Yt(h,r.memoizedState)||(bt=!0),r.memoizedState=h,r.baseQueue===null&&(r.baseState=h),s.lastRenderedState=h}return[h,l]}function Ph(){}function jh(t,r){var s=Me,l=Ot(),f=r(),h=!Yt(l.memoizedState,f);if(h&&(l.memoizedState=f,bt=!0),l=l.queue,qu(Dh.bind(null,s,l,t),[t]),l.getSnapshot!==r||h||Xe!==null&&Xe.memoizedState.tag&1){if(s.flags|=2048,ko(9,Ah.bind(null,s,l,f,r),void 0,null),Qe===null)throw Error(i(349));wr&30||Rh(s,r,f)}return f}function Rh(t,r,s){t.flags|=16384,t={getSnapshot:r,value:s},r=Me.updateQueue,r===null?(r={lastEffect:null,stores:null},Me.updateQueue=r,r.stores=[t]):(s=r.stores,s===null?r.stores=[t]:s.push(t))}function Ah(t,r,s,l){r.value=s,r.getSnapshot=l,Ih(r)&&Lh(t)}function Dh(t,r,s){return s(function(){Ih(r)&&Lh(t)})}function Ih(t){var r=t.getSnapshot;t=t.value;try{var s=r();return!Yt(t,s)}catch{return!0}}function Lh(t){var r=En(t,1);r!==null&&Zt(r,t,1,-1)}function $h(t){var r=cn();return typeof t=="function"&&(t=t()),r.memoizedState=r.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:bo,lastRenderedState:t},r.queue=t,t=t.dispatch=Nw.bind(null,Me,t),[r.memoizedState,t]}function ko(t,r,s,l){return t={tag:t,create:r,destroy:s,deps:l,next:null},r=Me.updateQueue,r===null?(r={lastEffect:null,stores:null},Me.updateQueue=r,r.lastEffect=t.next=t):(s=r.lastEffect,s===null?r.lastEffect=t.next=t:(l=s.next,s.next=t,t.next=l,r.lastEffect=t)),t}function Mh(){return Ot().memoizedState}function Zs(t,r,s,l){var f=cn();Me.flags|=t,f.memoizedState=ko(1|r,s,void 0,l===void 0?null:l)}function ea(t,r,s,l){var f=Ot();l=l===void 0?null:l;var h=void 0;if(Ye!==null){var v=Ye.memoizedState;if(h=v.destroy,l!==null&&Wu(l,v.deps)){f.memoizedState=ko(r,s,h,l);return}}Me.flags|=t,f.memoizedState=ko(1|r,s,h,l)}function _h(t,r){return Zs(8390656,8,t,r)}function qu(t,r){return ea(2048,8,t,r)}function Bh(t,r){return ea(4,2,t,r)}function Oh(t,r){return ea(4,4,t,r)}function Fh(t,r){if(typeof r=="function")return t=t(),r(t),function(){r(null)};if(r!=null)return t=t(),r.current=t,function(){r.current=null}}function Nh(t,r,s){return s=s!=null?s.concat([t]):null,ea(4,4,Fh.bind(null,r,t),s)}function Xu(){}function Vh(t,r){var s=Ot();r=r===void 0?null:r;var l=s.memoizedState;return l!==null&&r!==null&&Wu(r,l[1])?l[0]:(s.memoizedState=[t,r],t)}function zh(t,r){var s=Ot();r=r===void 0?null:r;var l=s.memoizedState;return l!==null&&r!==null&&Wu(r,l[1])?l[0]:(t=t(),s.memoizedState=[t,r],t)}function Uh(t,r,s){return wr&21?(Yt(s,r)||(s=vp(),Me.lanes|=s,Sr|=s,t.baseState=!0),r):(t.baseState&&(t.baseState=!1,bt=!0),t.memoizedState=s)}function Ow(t,r){var s=Ce;Ce=s!==0&&4>s?s:4,t(!0);var l=Uu.transition;Uu.transition={};try{t(!1),r()}finally{Ce=s,Uu.transition=l}}function Wh(){return Ot().memoizedState}function Fw(t,r,s){var l=qn(t);if(s={lane:l,action:s,hasEagerState:!1,eagerState:null,next:null},Hh(t))Kh(r,s);else if(s=bh(t,r,s,l),s!==null){var f=xt();Zt(s,t,l,f),Gh(s,r,l)}}function Nw(t,r,s){var l=qn(t),f={lane:l,action:s,hasEagerState:!1,eagerState:null,next:null};if(Hh(t))Kh(r,f);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=r.lastRenderedReducer,h!==null))try{var v=r.lastRenderedState,C=h(v,s);if(f.hasEagerState=!0,f.eagerState=C,Yt(C,v)){var j=r.interleaved;j===null?(f.next=f,Bu(r)):(f.next=j.next,j.next=f),r.interleaved=f;return}}catch{}finally{}s=bh(t,r,f,l),s!==null&&(f=xt(),Zt(s,t,l,f),Gh(s,r,l))}}function Hh(t){var r=t.alternate;return t===Me||r!==null&&r===Me}function Kh(t,r){wo=Js=!0;var s=t.pending;s===null?r.next=r:(r.next=s.next,s.next=r),t.pending=r}function Gh(t,r,s){if(s&4194240){var l=r.lanes;l&=t.pendingLanes,s|=l,r.lanes=s,Jl(t,s)}}var ta={readContext:Bt,useCallback:dt,useContext:dt,useEffect:dt,useImperativeHandle:dt,useInsertionEffect:dt,useLayoutEffect:dt,useMemo:dt,useReducer:dt,useRef:dt,useState:dt,useDebugValue:dt,useDeferredValue:dt,useTransition:dt,useMutableSource:dt,useSyncExternalStore:dt,useId:dt,unstable_isNewReconciler:!1},Vw={readContext:Bt,useCallback:function(t,r){return cn().memoizedState=[t,r===void 0?null:r],t},useContext:Bt,useEffect:_h,useImperativeHandle:function(t,r,s){return s=s!=null?s.concat([t]):null,Zs(4194308,4,Fh.bind(null,r,t),s)},useLayoutEffect:function(t,r){return Zs(4194308,4,t,r)},useInsertionEffect:function(t,r){return Zs(4,2,t,r)},useMemo:function(t,r){var s=cn();return r=r===void 0?null:r,t=t(),s.memoizedState=[t,r],t},useReducer:function(t,r,s){var l=cn();return r=s!==void 0?s(r):r,l.memoizedState=l.baseState=r,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:r},l.queue=t,t=t.dispatch=Fw.bind(null,Me,t),[l.memoizedState,t]},useRef:function(t){var r=cn();return t={current:t},r.memoizedState=t},useState:$h,useDebugValue:Xu,useDeferredValue:function(t){return cn().memoizedState=t},useTransition:function(){var t=$h(!1),r=t[0];return t=Ow.bind(null,t[1]),cn().memoizedState=t,[r,t]},useMutableSource:function(){},useSyncExternalStore:function(t,r,s){var l=Me,f=cn();if(De){if(s===void 0)throw Error(i(407));s=s()}else{if(s=r(),Qe===null)throw Error(i(349));wr&30||Rh(l,r,s)}f.memoizedState=s;var h={value:s,getSnapshot:r};return f.queue=h,_h(Dh.bind(null,l,h,t),[t]),l.flags|=2048,ko(9,Ah.bind(null,l,h,s,r),void 0,null),s},useId:function(){var t=cn(),r=Qe.identifierPrefix;if(De){var s=kn,l=bn;s=(l&~(1<<32-Gt(l)-1)).toString(32)+s,r=":"+r+"R"+s,s=So++,0<s&&(r+="H"+s.toString(32)),r+=":"}else s=Bw++,r=":"+r+"r"+s.toString(32)+":";return t.memoizedState=r},unstable_isNewReconciler:!1},zw={readContext:Bt,useCallback:Vh,useContext:Bt,useEffect:qu,useImperativeHandle:Nh,useInsertionEffect:Bh,useLayoutEffect:Oh,useMemo:zh,useReducer:Gu,useRef:Mh,useState:function(){return Gu(bo)},useDebugValue:Xu,useDeferredValue:function(t){var r=Ot();return Uh(r,Ye.memoizedState,t)},useTransition:function(){var t=Gu(bo)[0],r=Ot().memoizedState;return[t,r]},useMutableSource:Ph,useSyncExternalStore:jh,useId:Wh,unstable_isNewReconciler:!1},Uw={readContext:Bt,useCallback:Vh,useContext:Bt,useEffect:qu,useImperativeHandle:Nh,useInsertionEffect:Bh,useLayoutEffect:Oh,useMemo:zh,useReducer:Yu,useRef:Mh,useState:function(){return Yu(bo)},useDebugValue:Xu,useDeferredValue:function(t){var r=Ot();return Ye===null?r.memoizedState=t:Uh(r,Ye.memoizedState,t)},useTransition:function(){var t=Yu(bo)[0],r=Ot().memoizedState;return[t,r]},useMutableSource:Ph,useSyncExternalStore:jh,useId:Wh,unstable_isNewReconciler:!1};function Xt(t,r){if(t&&t.defaultProps){r=X({},r),t=t.defaultProps;for(var s in t)r[s]===void 0&&(r[s]=t[s]);return r}return r}function Qu(t,r,s,l){r=t.memoizedState,s=s(l,r),s=s==null?r:X({},r,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var na={isMounted:function(t){return(t=t._reactInternals)?pr(t)===t:!1},enqueueSetState:function(t,r,s){t=t._reactInternals;var l=xt(),f=qn(t),h=Cn(l,f);h.payload=r,s!=null&&(h.callback=s),r=Hn(t,h,f),r!==null&&(Zt(r,t,f,l),Ys(r,t,f))},enqueueReplaceState:function(t,r,s){t=t._reactInternals;var l=xt(),f=qn(t),h=Cn(l,f);h.tag=1,h.payload=r,s!=null&&(h.callback=s),r=Hn(t,h,f),r!==null&&(Zt(r,t,f,l),Ys(r,t,f))},enqueueForceUpdate:function(t,r){t=t._reactInternals;var s=xt(),l=qn(t),f=Cn(s,l);f.tag=2,r!=null&&(f.callback=r),r=Hn(t,f,l),r!==null&&(Zt(r,t,l,s),Ys(r,t,l))}};function Yh(t,r,s,l,f,h,v){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,h,v):r.prototype&&r.prototype.isPureReactComponent?!lo(s,l)||!lo(f,h):!0}function qh(t,r,s){var l=!1,f=zn,h=r.contextType;return typeof h=="object"&&h!==null?h=Bt(h):(f=St(r)?mr:ct.current,l=r.contextTypes,h=(l=l!=null)?ti(t,f):zn),r=new r(s,h),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=na,t.stateNode=r,r._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=f,t.__reactInternalMemoizedMaskedChildContext=h),r}function Xh(t,r,s,l){t=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(s,l),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(s,l),r.state!==t&&na.enqueueReplaceState(r,r.state,null)}function Ju(t,r,s,l){var f=t.stateNode;f.props=s,f.state=t.memoizedState,f.refs={},Ou(t);var h=r.contextType;typeof h=="object"&&h!==null?f.context=Bt(h):(h=St(r)?mr:ct.current,f.context=ti(t,h)),f.state=t.memoizedState,h=r.getDerivedStateFromProps,typeof h=="function"&&(Qu(t,r,h,s),f.state=t.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(r=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),r!==f.state&&na.enqueueReplaceState(f,f.state,null),qs(t,s,f,l),f.state=t.memoizedState),typeof f.componentDidMount=="function"&&(t.flags|=4194308)}function ui(t,r){try{var s="",l=r;do s+=ye(l),l=l.return;while(l);var f=s}catch(h){f=`
Error generating stack: `+h.message+`
`+h.stack}return{value:t,source:r,stack:f,digest:null}}function Zu(t,r,s){return{value:t,source:null,stack:s??null,digest:r??null}}function ec(t,r){try{console.error(r.value)}catch(s){setTimeout(function(){throw s})}}var Ww=typeof WeakMap=="function"?WeakMap:Map;function Qh(t,r,s){s=Cn(-1,s),s.tag=3,s.payload={element:null};var l=r.value;return s.callback=function(){ua||(ua=!0,mc=l),ec(t,r)},s}function Jh(t,r,s){s=Cn(-1,s),s.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var f=r.value;s.payload=function(){return l(f)},s.callback=function(){ec(t,r)}}var h=t.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(s.callback=function(){ec(t,r),typeof l!="function"&&(Gn===null?Gn=new Set([this]):Gn.add(this));var v=r.stack;this.componentDidCatch(r.value,{componentStack:v!==null?v:""})}),s}function Zh(t,r,s){var l=t.pingCache;if(l===null){l=t.pingCache=new Ww;var f=new Set;l.set(r,f)}else f=l.get(r),f===void 0&&(f=new Set,l.set(r,f));f.has(s)||(f.add(s),t=iS.bind(null,t,r,s),r.then(t,t))}function em(t){do{var r;if((r=t.tag===13)&&(r=t.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return t;t=t.return}while(t!==null);return null}function tm(t,r,s,l,f){return t.mode&1?(t.flags|=65536,t.lanes=f,t):(t===r?t.flags|=65536:(t.flags|=128,s.flags|=131072,s.flags&=-52805,s.tag===1&&(s.alternate===null?s.tag=17:(r=Cn(-1,1),r.tag=2,Hn(s,r,1))),s.lanes|=1),t)}var Hw=F.ReactCurrentOwner,bt=!1;function yt(t,r,s,l){r.child=t===null?Sh(r,null,s,l):oi(r,t.child,s,l)}function nm(t,r,s,l,f){s=s.render;var h=r.ref;return ai(r,f),l=Hu(t,r,s,l,h,f),s=Ku(),t!==null&&!bt?(r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~f,Tn(t,r,f)):(De&&s&&ju(r),r.flags|=1,yt(t,r,l,f),r.child)}function rm(t,r,s,l,f){if(t===null){var h=s.type;return typeof h=="function"&&!bc(h)&&h.defaultProps===void 0&&s.compare===null&&s.defaultProps===void 0?(r.tag=15,r.type=h,im(t,r,h,l,f)):(t=ma(s.type,null,l,r,r.mode,f),t.ref=r.ref,t.return=r,r.child=t)}if(h=t.child,!(t.lanes&f)){var v=h.memoizedProps;if(s=s.compare,s=s!==null?s:lo,s(v,l)&&t.ref===r.ref)return Tn(t,r,f)}return r.flags|=1,t=Qn(h,l),t.ref=r.ref,t.return=r,r.child=t}function im(t,r,s,l,f){if(t!==null){var h=t.memoizedProps;if(lo(h,l)&&t.ref===r.ref)if(bt=!1,r.pendingProps=l=h,(t.lanes&f)!==0)t.flags&131072&&(bt=!0);else return r.lanes=t.lanes,Tn(t,r,f)}return tc(t,r,s,l,f)}function om(t,r,s){var l=r.pendingProps,f=l.children,h=t!==null?t.memoizedState:null;if(l.mode==="hidden")if(!(r.mode&1))r.memoizedState={baseLanes:0,cachePool:null,transitions:null},Pe(di,Lt),Lt|=s;else{if(!(s&1073741824))return t=h!==null?h.baseLanes|s:s,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:t,cachePool:null,transitions:null},r.updateQueue=null,Pe(di,Lt),Lt|=t,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=h!==null?h.baseLanes:s,Pe(di,Lt),Lt|=l}else h!==null?(l=h.baseLanes|s,r.memoizedState=null):l=s,Pe(di,Lt),Lt|=l;return yt(t,r,f,s),r.child}function sm(t,r){var s=r.ref;(t===null&&s!==null||t!==null&&t.ref!==s)&&(r.flags|=512,r.flags|=2097152)}function tc(t,r,s,l,f){var h=St(s)?mr:ct.current;return h=ti(r,h),ai(r,f),s=Hu(t,r,s,l,h,f),l=Ku(),t!==null&&!bt?(r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~f,Tn(t,r,f)):(De&&l&&ju(r),r.flags|=1,yt(t,r,s,f),r.child)}function am(t,r,s,l,f){if(St(s)){var h=!0;Ns(r)}else h=!1;if(ai(r,f),r.stateNode===null)ia(t,r),qh(r,s,l),Ju(r,s,l,f),l=!0;else if(t===null){var v=r.stateNode,C=r.memoizedProps;v.props=C;var j=v.context,_=s.contextType;typeof _=="object"&&_!==null?_=Bt(_):(_=St(s)?mr:ct.current,_=ti(r,_));var U=s.getDerivedStateFromProps,K=typeof U=="function"||typeof v.getSnapshotBeforeUpdate=="function";K||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(C!==l||j!==_)&&Xh(r,v,l,_),Wn=!1;var z=r.memoizedState;v.state=z,qs(r,l,v,f),j=r.memoizedState,C!==l||z!==j||wt.current||Wn?(typeof U=="function"&&(Qu(r,s,U,l),j=r.memoizedState),(C=Wn||Yh(r,s,C,l,z,j,_))?(K||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount()),typeof v.componentDidMount=="function"&&(r.flags|=4194308)):(typeof v.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=l,r.memoizedState=j),v.props=l,v.state=j,v.context=_,l=C):(typeof v.componentDidMount=="function"&&(r.flags|=4194308),l=!1)}else{v=r.stateNode,kh(t,r),C=r.memoizedProps,_=r.type===r.elementType?C:Xt(r.type,C),v.props=_,K=r.pendingProps,z=v.context,j=s.contextType,typeof j=="object"&&j!==null?j=Bt(j):(j=St(s)?mr:ct.current,j=ti(r,j));var J=s.getDerivedStateFromProps;(U=typeof J=="function"||typeof v.getSnapshotBeforeUpdate=="function")||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(C!==K||z!==j)&&Xh(r,v,l,j),Wn=!1,z=r.memoizedState,v.state=z,qs(r,l,v,f);var ee=r.memoizedState;C!==K||z!==ee||wt.current||Wn?(typeof J=="function"&&(Qu(r,s,J,l),ee=r.memoizedState),(_=Wn||Yh(r,s,_,l,z,ee,j)||!1)?(U||typeof v.UNSAFE_componentWillUpdate!="function"&&typeof v.componentWillUpdate!="function"||(typeof v.componentWillUpdate=="function"&&v.componentWillUpdate(l,ee,j),typeof v.UNSAFE_componentWillUpdate=="function"&&v.UNSAFE_componentWillUpdate(l,ee,j)),typeof v.componentDidUpdate=="function"&&(r.flags|=4),typeof v.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof v.componentDidUpdate!="function"||C===t.memoizedProps&&z===t.memoizedState||(r.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||C===t.memoizedProps&&z===t.memoizedState||(r.flags|=1024),r.memoizedProps=l,r.memoizedState=ee),v.props=l,v.state=ee,v.context=j,l=_):(typeof v.componentDidUpdate!="function"||C===t.memoizedProps&&z===t.memoizedState||(r.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||C===t.memoizedProps&&z===t.memoizedState||(r.flags|=1024),l=!1)}return nc(t,r,s,l,h,f)}function nc(t,r,s,l,f,h){sm(t,r);var v=(r.flags&128)!==0;if(!l&&!v)return f&&fh(r,s,!1),Tn(t,r,h);l=r.stateNode,Hw.current=r;var C=v&&typeof s.getDerivedStateFromError!="function"?null:l.render();return r.flags|=1,t!==null&&v?(r.child=oi(r,t.child,null,h),r.child=oi(r,null,C,h)):yt(t,r,C,h),r.memoizedState=l.state,f&&fh(r,s,!0),r.child}function lm(t){var r=t.stateNode;r.pendingContext?ch(t,r.pendingContext,r.pendingContext!==r.context):r.context&&ch(t,r.context,!1),Fu(t,r.containerInfo)}function um(t,r,s,l,f){return ii(),Iu(f),r.flags|=256,yt(t,r,s,l),r.child}var rc={dehydrated:null,treeContext:null,retryLane:0};function ic(t){return{baseLanes:t,cachePool:null,transitions:null}}function cm(t,r,s){var l=r.pendingProps,f=$e.current,h=!1,v=(r.flags&128)!==0,C;if((C=v)||(C=t!==null&&t.memoizedState===null?!1:(f&2)!==0),C?(h=!0,r.flags&=-129):(t===null||t.memoizedState!==null)&&(f|=1),Pe($e,f&1),t===null)return Du(r),t=r.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(r.mode&1?t.data==="$!"?r.lanes=8:r.lanes=1073741824:r.lanes=1,null):(v=l.children,t=l.fallback,h?(l=r.mode,h=r.child,v={mode:"hidden",children:v},!(l&1)&&h!==null?(h.childLanes=0,h.pendingProps=v):h=ga(v,l,0,null),t=Cr(t,l,s,null),h.return=r,t.return=r,h.sibling=t,r.child=h,r.child.memoizedState=ic(s),r.memoizedState=rc,t):oc(r,v));if(f=t.memoizedState,f!==null&&(C=f.dehydrated,C!==null))return Kw(t,r,v,l,C,f,s);if(h){h=l.fallback,v=r.mode,f=t.child,C=f.sibling;var j={mode:"hidden",children:l.children};return!(v&1)&&r.child!==f?(l=r.child,l.childLanes=0,l.pendingProps=j,r.deletions=null):(l=Qn(f,j),l.subtreeFlags=f.subtreeFlags&14680064),C!==null?h=Qn(C,h):(h=Cr(h,v,s,null),h.flags|=2),h.return=r,l.return=r,l.sibling=h,r.child=l,l=h,h=r.child,v=t.child.memoizedState,v=v===null?ic(s):{baseLanes:v.baseLanes|s,cachePool:null,transitions:v.transitions},h.memoizedState=v,h.childLanes=t.childLanes&~s,r.memoizedState=rc,l}return h=t.child,t=h.sibling,l=Qn(h,{mode:"visible",children:l.children}),!(r.mode&1)&&(l.lanes=s),l.return=r,l.sibling=null,t!==null&&(s=r.deletions,s===null?(r.deletions=[t],r.flags|=16):s.push(t)),r.child=l,r.memoizedState=null,l}function oc(t,r){return r=ga({mode:"visible",children:r},t.mode,0,null),r.return=t,t.child=r}function ra(t,r,s,l){return l!==null&&Iu(l),oi(r,t.child,null,s),t=oc(r,r.pendingProps.children),t.flags|=2,r.memoizedState=null,t}function Kw(t,r,s,l,f,h,v){if(s)return r.flags&256?(r.flags&=-257,l=Zu(Error(i(422))),ra(t,r,v,l)):r.memoizedState!==null?(r.child=t.child,r.flags|=128,null):(h=l.fallback,f=r.mode,l=ga({mode:"visible",children:l.children},f,0,null),h=Cr(h,f,v,null),h.flags|=2,l.return=r,h.return=r,l.sibling=h,r.child=l,r.mode&1&&oi(r,t.child,null,v),r.child.memoizedState=ic(v),r.memoizedState=rc,h);if(!(r.mode&1))return ra(t,r,v,null);if(f.data==="$!"){if(l=f.nextSibling&&f.nextSibling.dataset,l)var C=l.dgst;return l=C,h=Error(i(419)),l=Zu(h,l,void 0),ra(t,r,v,l)}if(C=(v&t.childLanes)!==0,bt||C){if(l=Qe,l!==null){switch(v&-v){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=f&(l.suspendedLanes|v)?0:f,f!==0&&f!==h.retryLane&&(h.retryLane=f,En(t,f),Zt(l,t,f,-1))}return Sc(),l=Zu(Error(i(421))),ra(t,r,v,l)}return f.data==="$?"?(r.flags|=128,r.child=t.child,r=oS.bind(null,t),f._reactRetry=r,null):(t=h.treeContext,It=Nn(f.nextSibling),Dt=r,De=!0,qt=null,t!==null&&(Mt[_t++]=bn,Mt[_t++]=kn,Mt[_t++]=gr,bn=t.id,kn=t.overflow,gr=r),r=oc(r,l.children),r.flags|=4096,r)}function dm(t,r,s){t.lanes|=r;var l=t.alternate;l!==null&&(l.lanes|=r),_u(t.return,r,s)}function sc(t,r,s,l,f){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:f}:(h.isBackwards=r,h.rendering=null,h.renderingStartTime=0,h.last=l,h.tail=s,h.tailMode=f)}function fm(t,r,s){var l=r.pendingProps,f=l.revealOrder,h=l.tail;if(yt(t,r,l.children,s),l=$e.current,l&2)l=l&1|2,r.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=r.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&dm(t,s,r);else if(t.tag===19)dm(t,s,r);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===r)break e;for(;t.sibling===null;){if(t.return===null||t.return===r)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(Pe($e,l),!(r.mode&1))r.memoizedState=null;else switch(f){case"forwards":for(s=r.child,f=null;s!==null;)t=s.alternate,t!==null&&Xs(t)===null&&(f=s),s=s.sibling;s=f,s===null?(f=r.child,r.child=null):(f=s.sibling,s.sibling=null),sc(r,!1,f,s,h);break;case"backwards":for(s=null,f=r.child,r.child=null;f!==null;){if(t=f.alternate,t!==null&&Xs(t)===null){r.child=f;break}t=f.sibling,f.sibling=s,s=f,f=t}sc(r,!0,s,null,h);break;case"together":sc(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function ia(t,r){!(r.mode&1)&&t!==null&&(t.alternate=null,r.alternate=null,r.flags|=2)}function Tn(t,r,s){if(t!==null&&(r.dependencies=t.dependencies),Sr|=r.lanes,!(s&r.childLanes))return null;if(t!==null&&r.child!==t.child)throw Error(i(153));if(r.child!==null){for(t=r.child,s=Qn(t,t.pendingProps),r.child=s,s.return=r;t.sibling!==null;)t=t.sibling,s=s.sibling=Qn(t,t.pendingProps),s.return=r;s.sibling=null}return r.child}function Gw(t,r,s){switch(r.tag){case 3:lm(r),ii();break;case 5:Th(r);break;case 1:St(r.type)&&Ns(r);break;case 4:Fu(r,r.stateNode.containerInfo);break;case 10:var l=r.type._context,f=r.memoizedProps.value;Pe(Ks,l._currentValue),l._currentValue=f;break;case 13:if(l=r.memoizedState,l!==null)return l.dehydrated!==null?(Pe($e,$e.current&1),r.flags|=128,null):s&r.child.childLanes?cm(t,r,s):(Pe($e,$e.current&1),t=Tn(t,r,s),t!==null?t.sibling:null);Pe($e,$e.current&1);break;case 19:if(l=(s&r.childLanes)!==0,t.flags&128){if(l)return fm(t,r,s);r.flags|=128}if(f=r.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Pe($e,$e.current),l)break;return null;case 22:case 23:return r.lanes=0,om(t,r,s)}return Tn(t,r,s)}var pm,ac,hm,mm;pm=function(t,r){for(var s=r.child;s!==null;){if(s.tag===5||s.tag===6)t.appendChild(s.stateNode);else if(s.tag!==4&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return;s=s.return}s.sibling.return=s.return,s=s.sibling}},ac=function(){},hm=function(t,r,s,l){var f=t.memoizedProps;if(f!==l){t=r.stateNode,vr(un.current);var h=null;switch(s){case"input":f=_l(t,f),l=_l(t,l),h=[];break;case"select":f=X({},f,{value:void 0}),l=X({},l,{value:void 0}),h=[];break;case"textarea":f=Fl(t,f),l=Fl(t,l),h=[];break;default:typeof f.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=Bs)}Vl(s,l);var v;s=null;for(_ in f)if(!l.hasOwnProperty(_)&&f.hasOwnProperty(_)&&f[_]!=null)if(_==="style"){var C=f[_];for(v in C)C.hasOwnProperty(v)&&(s||(s={}),s[v]="")}else _!=="dangerouslySetInnerHTML"&&_!=="children"&&_!=="suppressContentEditableWarning"&&_!=="suppressHydrationWarning"&&_!=="autoFocus"&&(a.hasOwnProperty(_)?h||(h=[]):(h=h||[]).push(_,null));for(_ in l){var j=l[_];if(C=f!=null?f[_]:void 0,l.hasOwnProperty(_)&&j!==C&&(j!=null||C!=null))if(_==="style")if(C){for(v in C)!C.hasOwnProperty(v)||j&&j.hasOwnProperty(v)||(s||(s={}),s[v]="");for(v in j)j.hasOwnProperty(v)&&C[v]!==j[v]&&(s||(s={}),s[v]=j[v])}else s||(h||(h=[]),h.push(_,s)),s=j;else _==="dangerouslySetInnerHTML"?(j=j?j.__html:void 0,C=C?C.__html:void 0,j!=null&&C!==j&&(h=h||[]).push(_,j)):_==="children"?typeof j!="string"&&typeof j!="number"||(h=h||[]).push(_,""+j):_!=="suppressContentEditableWarning"&&_!=="suppressHydrationWarning"&&(a.hasOwnProperty(_)?(j!=null&&_==="onScroll"&&je("scroll",t),h||C===j||(h=[])):(h=h||[]).push(_,j))}s&&(h=h||[]).push("style",s);var _=h;(r.updateQueue=_)&&(r.flags|=4)}},mm=function(t,r,s,l){s!==l&&(r.flags|=4)};function Eo(t,r){if(!De)switch(t.tailMode){case"hidden":r=t.tail;for(var s=null;r!==null;)r.alternate!==null&&(s=r),r=r.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?r||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function ft(t){var r=t.alternate!==null&&t.alternate.child===t.child,s=0,l=0;if(r)for(var f=t.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags&14680064,l|=f.flags&14680064,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=l,t.childLanes=s,r}function Yw(t,r,s){var l=r.pendingProps;switch(Ru(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ft(r),null;case 1:return St(r.type)&&Fs(),ft(r),null;case 3:return l=r.stateNode,li(),Re(wt),Re(ct),zu(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(Ws(r)?r.flags|=4:t===null||t.memoizedState.isDehydrated&&!(r.flags&256)||(r.flags|=1024,qt!==null&&(xc(qt),qt=null))),ac(t,r),ft(r),null;case 5:Nu(r);var f=vr(vo.current);if(s=r.type,t!==null&&r.stateNode!=null)hm(t,r,s,l,f),t.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!l){if(r.stateNode===null)throw Error(i(166));return ft(r),null}if(t=vr(un.current),Ws(r)){l=r.stateNode,s=r.type;var h=r.memoizedProps;switch(l[ln]=r,l[ho]=h,t=(r.mode&1)!==0,s){case"dialog":je("cancel",l),je("close",l);break;case"iframe":case"object":case"embed":je("load",l);break;case"video":case"audio":for(f=0;f<co.length;f++)je(co[f],l);break;case"source":je("error",l);break;case"img":case"image":case"link":je("error",l),je("load",l);break;case"details":je("toggle",l);break;case"input":qf(l,h),je("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!h.multiple},je("invalid",l);break;case"textarea":Jf(l,h),je("invalid",l)}Vl(s,h),f=null;for(var v in h)if(h.hasOwnProperty(v)){var C=h[v];v==="children"?typeof C=="string"?l.textContent!==C&&(h.suppressHydrationWarning!==!0&&_s(l.textContent,C,t),f=["children",C]):typeof C=="number"&&l.textContent!==""+C&&(h.suppressHydrationWarning!==!0&&_s(l.textContent,C,t),f=["children",""+C]):a.hasOwnProperty(v)&&C!=null&&v==="onScroll"&&je("scroll",l)}switch(s){case"input":vn(l),Qf(l,h,!0);break;case"textarea":vn(l),ep(l);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(l.onclick=Bs)}l=f,r.updateQueue=l,l!==null&&(r.flags|=4)}else{v=f.nodeType===9?f:f.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=tp(s)),t==="http://www.w3.org/1999/xhtml"?s==="script"?(t=v.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=v.createElement(s,{is:l.is}):(t=v.createElement(s),s==="select"&&(v=t,l.multiple?v.multiple=!0:l.size&&(v.size=l.size))):t=v.createElementNS(t,s),t[ln]=r,t[ho]=l,pm(t,r,!1,!1),r.stateNode=t;e:{switch(v=zl(s,l),s){case"dialog":je("cancel",t),je("close",t),f=l;break;case"iframe":case"object":case"embed":je("load",t),f=l;break;case"video":case"audio":for(f=0;f<co.length;f++)je(co[f],t);f=l;break;case"source":je("error",t),f=l;break;case"img":case"image":case"link":je("error",t),je("load",t),f=l;break;case"details":je("toggle",t),f=l;break;case"input":qf(t,l),f=_l(t,l),je("invalid",t);break;case"option":f=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},f=X({},l,{value:void 0}),je("invalid",t);break;case"textarea":Jf(t,l),f=Fl(t,l),je("invalid",t);break;default:f=l}Vl(s,f),C=f;for(h in C)if(C.hasOwnProperty(h)){var j=C[h];h==="style"?ip(t,j):h==="dangerouslySetInnerHTML"?(j=j?j.__html:void 0,j!=null&&np(t,j)):h==="children"?typeof j=="string"?(s!=="textarea"||j!=="")&&Hi(t,j):typeof j=="number"&&Hi(t,""+j):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(a.hasOwnProperty(h)?j!=null&&h==="onScroll"&&je("scroll",t):j!=null&&A(t,h,j,v))}switch(s){case"input":vn(t),Qf(t,l,!1);break;case"textarea":vn(t),ep(t);break;case"option":l.value!=null&&t.setAttribute("value",""+xe(l.value));break;case"select":t.multiple=!!l.multiple,h=l.value,h!=null?Ur(t,!!l.multiple,h,!1):l.defaultValue!=null&&Ur(t,!!l.multiple,l.defaultValue,!0);break;default:typeof f.onClick=="function"&&(t.onclick=Bs)}switch(s){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return ft(r),null;case 6:if(t&&r.stateNode!=null)mm(t,r,t.memoizedProps,l);else{if(typeof l!="string"&&r.stateNode===null)throw Error(i(166));if(s=vr(vo.current),vr(un.current),Ws(r)){if(l=r.stateNode,s=r.memoizedProps,l[ln]=r,(h=l.nodeValue!==s)&&(t=Dt,t!==null))switch(t.tag){case 3:_s(l.nodeValue,s,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&_s(l.nodeValue,s,(t.mode&1)!==0)}h&&(r.flags|=4)}else l=(s.nodeType===9?s:s.ownerDocument).createTextNode(l),l[ln]=r,r.stateNode=l}return ft(r),null;case 13:if(Re($e),l=r.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(De&&It!==null&&r.mode&1&&!(r.flags&128))xh(),ii(),r.flags|=98560,h=!1;else if(h=Ws(r),l!==null&&l.dehydrated!==null){if(t===null){if(!h)throw Error(i(318));if(h=r.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(i(317));h[ln]=r}else ii(),!(r.flags&128)&&(r.memoizedState=null),r.flags|=4;ft(r),h=!1}else qt!==null&&(xc(qt),qt=null),h=!0;if(!h)return r.flags&65536?r:null}return r.flags&128?(r.lanes=s,r):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(r.child.flags|=8192,r.mode&1&&(t===null||$e.current&1?qe===0&&(qe=3):Sc())),r.updateQueue!==null&&(r.flags|=4),ft(r),null);case 4:return li(),ac(t,r),t===null&&fo(r.stateNode.containerInfo),ft(r),null;case 10:return Mu(r.type._context),ft(r),null;case 17:return St(r.type)&&Fs(),ft(r),null;case 19:if(Re($e),h=r.memoizedState,h===null)return ft(r),null;if(l=(r.flags&128)!==0,v=h.rendering,v===null)if(l)Eo(h,!1);else{if(qe!==0||t!==null&&t.flags&128)for(t=r.child;t!==null;){if(v=Xs(t),v!==null){for(r.flags|=128,Eo(h,!1),l=v.updateQueue,l!==null&&(r.updateQueue=l,r.flags|=4),r.subtreeFlags=0,l=s,s=r.child;s!==null;)h=s,t=l,h.flags&=14680066,v=h.alternate,v===null?(h.childLanes=0,h.lanes=t,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=v.childLanes,h.lanes=v.lanes,h.child=v.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=v.memoizedProps,h.memoizedState=v.memoizedState,h.updateQueue=v.updateQueue,h.type=v.type,t=v.dependencies,h.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),s=s.sibling;return Pe($e,$e.current&1|2),r.child}t=t.sibling}h.tail!==null&&Ne()>fi&&(r.flags|=128,l=!0,Eo(h,!1),r.lanes=4194304)}else{if(!l)if(t=Xs(v),t!==null){if(r.flags|=128,l=!0,s=t.updateQueue,s!==null&&(r.updateQueue=s,r.flags|=4),Eo(h,!0),h.tail===null&&h.tailMode==="hidden"&&!v.alternate&&!De)return ft(r),null}else 2*Ne()-h.renderingStartTime>fi&&s!==1073741824&&(r.flags|=128,l=!0,Eo(h,!1),r.lanes=4194304);h.isBackwards?(v.sibling=r.child,r.child=v):(s=h.last,s!==null?s.sibling=v:r.child=v,h.last=v)}return h.tail!==null?(r=h.tail,h.rendering=r,h.tail=r.sibling,h.renderingStartTime=Ne(),r.sibling=null,s=$e.current,Pe($e,l?s&1|2:s&1),r):(ft(r),null);case 22:case 23:return wc(),l=r.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(r.flags|=8192),l&&r.mode&1?Lt&1073741824&&(ft(r),r.subtreeFlags&6&&(r.flags|=8192)):ft(r),null;case 24:return null;case 25:return null}throw Error(i(156,r.tag))}function qw(t,r){switch(Ru(r),r.tag){case 1:return St(r.type)&&Fs(),t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 3:return li(),Re(wt),Re(ct),zu(),t=r.flags,t&65536&&!(t&128)?(r.flags=t&-65537|128,r):null;case 5:return Nu(r),null;case 13:if(Re($e),t=r.memoizedState,t!==null&&t.dehydrated!==null){if(r.alternate===null)throw Error(i(340));ii()}return t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 19:return Re($e),null;case 4:return li(),null;case 10:return Mu(r.type._context),null;case 22:case 23:return wc(),null;case 24:return null;default:return null}}var oa=!1,pt=!1,Xw=typeof WeakSet=="function"?WeakSet:Set,Z=null;function ci(t,r){var s=t.ref;if(s!==null)if(typeof s=="function")try{s(null)}catch(l){Oe(t,r,l)}else s.current=null}function lc(t,r,s){try{s()}catch(l){Oe(t,r,l)}}var gm=!1;function Qw(t,r){if(wu=Cs,t=Yp(),fu(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var f=l.anchorOffset,h=l.focusNode;l=l.focusOffset;try{s.nodeType,h.nodeType}catch{s=null;break e}var v=0,C=-1,j=-1,_=0,U=0,K=t,z=null;t:for(;;){for(var J;K!==s||f!==0&&K.nodeType!==3||(C=v+f),K!==h||l!==0&&K.nodeType!==3||(j=v+l),K.nodeType===3&&(v+=K.nodeValue.length),(J=K.firstChild)!==null;)z=K,K=J;for(;;){if(K===t)break t;if(z===s&&++_===f&&(C=v),z===h&&++U===l&&(j=v),(J=K.nextSibling)!==null)break;K=z,z=K.parentNode}K=J}s=C===-1||j===-1?null:{start:C,end:j}}else s=null}s=s||{start:0,end:0}}else s=null;for(Su={focusedElem:t,selectionRange:s},Cs=!1,Z=r;Z!==null;)if(r=Z,t=r.child,(r.subtreeFlags&1028)!==0&&t!==null)t.return=r,Z=t;else for(;Z!==null;){r=Z;try{var ee=r.alternate;if(r.flags&1024)switch(r.tag){case 0:case 11:case 15:break;case 1:if(ee!==null){var ne=ee.memoizedProps,Ve=ee.memoizedState,$=r.stateNode,D=$.getSnapshotBeforeUpdate(r.elementType===r.type?ne:Xt(r.type,ne),Ve);$.__reactInternalSnapshotBeforeUpdate=D}break;case 3:var M=r.stateNode.containerInfo;M.nodeType===1?M.textContent="":M.nodeType===9&&M.documentElement&&M.removeChild(M.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(i(163))}}catch(G){Oe(r,r.return,G)}if(t=r.sibling,t!==null){t.return=r.return,Z=t;break}Z=r.return}return ee=gm,gm=!1,ee}function Co(t,r,s){var l=r.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var f=l=l.next;do{if((f.tag&t)===t){var h=f.destroy;f.destroy=void 0,h!==void 0&&lc(r,s,h)}f=f.next}while(f!==l)}}function sa(t,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var l=s.create;s.destroy=l()}s=s.next}while(s!==r)}}function uc(t){var r=t.ref;if(r!==null){var s=t.stateNode;switch(t.tag){case 5:t=s;break;default:t=s}typeof r=="function"?r(t):r.current=t}}function ym(t){var r=t.alternate;r!==null&&(t.alternate=null,ym(r)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(r=t.stateNode,r!==null&&(delete r[ln],delete r[ho],delete r[Cu],delete r[Lw],delete r[$w])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function xm(t){return t.tag===5||t.tag===3||t.tag===4}function vm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||xm(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function cc(t,r,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,r?s.nodeType===8?s.parentNode.insertBefore(t,r):s.insertBefore(t,r):(s.nodeType===8?(r=s.parentNode,r.insertBefore(t,s)):(r=s,r.appendChild(t)),s=s._reactRootContainer,s!=null||r.onclick!==null||(r.onclick=Bs));else if(l!==4&&(t=t.child,t!==null))for(cc(t,r,s),t=t.sibling;t!==null;)cc(t,r,s),t=t.sibling}function dc(t,r,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,r?s.insertBefore(t,r):s.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for(dc(t,r,s),t=t.sibling;t!==null;)dc(t,r,s),t=t.sibling}var it=null,Qt=!1;function Kn(t,r,s){for(s=s.child;s!==null;)wm(t,r,s),s=s.sibling}function wm(t,r,s){if(an&&typeof an.onCommitFiberUnmount=="function")try{an.onCommitFiberUnmount(vs,s)}catch{}switch(s.tag){case 5:pt||ci(s,r);case 6:var l=it,f=Qt;it=null,Kn(t,r,s),it=l,Qt=f,it!==null&&(Qt?(t=it,s=s.stateNode,t.nodeType===8?t.parentNode.removeChild(s):t.removeChild(s)):it.removeChild(s.stateNode));break;case 18:it!==null&&(Qt?(t=it,s=s.stateNode,t.nodeType===8?Eu(t.parentNode,s):t.nodeType===1&&Eu(t,s),no(t)):Eu(it,s.stateNode));break;case 4:l=it,f=Qt,it=s.stateNode.containerInfo,Qt=!0,Kn(t,r,s),it=l,Qt=f;break;case 0:case 11:case 14:case 15:if(!pt&&(l=s.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){f=l=l.next;do{var h=f,v=h.destroy;h=h.tag,v!==void 0&&(h&2||h&4)&&lc(s,r,v),f=f.next}while(f!==l)}Kn(t,r,s);break;case 1:if(!pt&&(ci(s,r),l=s.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=s.memoizedProps,l.state=s.memoizedState,l.componentWillUnmount()}catch(C){Oe(s,r,C)}Kn(t,r,s);break;case 21:Kn(t,r,s);break;case 22:s.mode&1?(pt=(l=pt)||s.memoizedState!==null,Kn(t,r,s),pt=l):Kn(t,r,s);break;default:Kn(t,r,s)}}function Sm(t){var r=t.updateQueue;if(r!==null){t.updateQueue=null;var s=t.stateNode;s===null&&(s=t.stateNode=new Xw),r.forEach(function(l){var f=sS.bind(null,t,l);s.has(l)||(s.add(l),l.then(f,f))})}}function Jt(t,r){var s=r.deletions;if(s!==null)for(var l=0;l<s.length;l++){var f=s[l];try{var h=t,v=r,C=v;e:for(;C!==null;){switch(C.tag){case 5:it=C.stateNode,Qt=!1;break e;case 3:it=C.stateNode.containerInfo,Qt=!0;break e;case 4:it=C.stateNode.containerInfo,Qt=!0;break e}C=C.return}if(it===null)throw Error(i(160));wm(h,v,f),it=null,Qt=!1;var j=f.alternate;j!==null&&(j.return=null),f.return=null}catch(_){Oe(f,r,_)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)bm(r,t),r=r.sibling}function bm(t,r){var s=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Jt(r,t),dn(t),l&4){try{Co(3,t,t.return),sa(3,t)}catch(ne){Oe(t,t.return,ne)}try{Co(5,t,t.return)}catch(ne){Oe(t,t.return,ne)}}break;case 1:Jt(r,t),dn(t),l&512&&s!==null&&ci(s,s.return);break;case 5:if(Jt(r,t),dn(t),l&512&&s!==null&&ci(s,s.return),t.flags&32){var f=t.stateNode;try{Hi(f,"")}catch(ne){Oe(t,t.return,ne)}}if(l&4&&(f=t.stateNode,f!=null)){var h=t.memoizedProps,v=s!==null?s.memoizedProps:h,C=t.type,j=t.updateQueue;if(t.updateQueue=null,j!==null)try{C==="input"&&h.type==="radio"&&h.name!=null&&Xf(f,h),zl(C,v);var _=zl(C,h);for(v=0;v<j.length;v+=2){var U=j[v],K=j[v+1];U==="style"?ip(f,K):U==="dangerouslySetInnerHTML"?np(f,K):U==="children"?Hi(f,K):A(f,U,K,_)}switch(C){case"input":Bl(f,h);break;case"textarea":Zf(f,h);break;case"select":var z=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!h.multiple;var J=h.value;J!=null?Ur(f,!!h.multiple,J,!1):z!==!!h.multiple&&(h.defaultValue!=null?Ur(f,!!h.multiple,h.defaultValue,!0):Ur(f,!!h.multiple,h.multiple?[]:"",!1))}f[ho]=h}catch(ne){Oe(t,t.return,ne)}}break;case 6:if(Jt(r,t),dn(t),l&4){if(t.stateNode===null)throw Error(i(162));f=t.stateNode,h=t.memoizedProps;try{f.nodeValue=h}catch(ne){Oe(t,t.return,ne)}}break;case 3:if(Jt(r,t),dn(t),l&4&&s!==null&&s.memoizedState.isDehydrated)try{no(r.containerInfo)}catch(ne){Oe(t,t.return,ne)}break;case 4:Jt(r,t),dn(t);break;case 13:Jt(r,t),dn(t),f=t.child,f.flags&8192&&(h=f.memoizedState!==null,f.stateNode.isHidden=h,!h||f.alternate!==null&&f.alternate.memoizedState!==null||(hc=Ne())),l&4&&Sm(t);break;case 22:if(U=s!==null&&s.memoizedState!==null,t.mode&1?(pt=(_=pt)||U,Jt(r,t),pt=_):Jt(r,t),dn(t),l&8192){if(_=t.memoizedState!==null,(t.stateNode.isHidden=_)&&!U&&t.mode&1)for(Z=t,U=t.child;U!==null;){for(K=Z=U;Z!==null;){switch(z=Z,J=z.child,z.tag){case 0:case 11:case 14:case 15:Co(4,z,z.return);break;case 1:ci(z,z.return);var ee=z.stateNode;if(typeof ee.componentWillUnmount=="function"){l=z,s=z.return;try{r=l,ee.props=r.memoizedProps,ee.state=r.memoizedState,ee.componentWillUnmount()}catch(ne){Oe(l,s,ne)}}break;case 5:ci(z,z.return);break;case 22:if(z.memoizedState!==null){Cm(K);continue}}J!==null?(J.return=z,Z=J):Cm(K)}U=U.sibling}e:for(U=null,K=t;;){if(K.tag===5){if(U===null){U=K;try{f=K.stateNode,_?(h=f.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(C=K.stateNode,j=K.memoizedProps.style,v=j!=null&&j.hasOwnProperty("display")?j.display:null,C.style.display=rp("display",v))}catch(ne){Oe(t,t.return,ne)}}}else if(K.tag===6){if(U===null)try{K.stateNode.nodeValue=_?"":K.memoizedProps}catch(ne){Oe(t,t.return,ne)}}else if((K.tag!==22&&K.tag!==23||K.memoizedState===null||K===t)&&K.child!==null){K.child.return=K,K=K.child;continue}if(K===t)break e;for(;K.sibling===null;){if(K.return===null||K.return===t)break e;U===K&&(U=null),K=K.return}U===K&&(U=null),K.sibling.return=K.return,K=K.sibling}}break;case 19:Jt(r,t),dn(t),l&4&&Sm(t);break;case 21:break;default:Jt(r,t),dn(t)}}function dn(t){var r=t.flags;if(r&2){try{e:{for(var s=t.return;s!==null;){if(xm(s)){var l=s;break e}s=s.return}throw Error(i(160))}switch(l.tag){case 5:var f=l.stateNode;l.flags&32&&(Hi(f,""),l.flags&=-33);var h=vm(t);dc(t,h,f);break;case 3:case 4:var v=l.stateNode.containerInfo,C=vm(t);cc(t,C,v);break;default:throw Error(i(161))}}catch(j){Oe(t,t.return,j)}t.flags&=-3}r&4096&&(t.flags&=-4097)}function Jw(t,r,s){Z=t,km(t)}function km(t,r,s){for(var l=(t.mode&1)!==0;Z!==null;){var f=Z,h=f.child;if(f.tag===22&&l){var v=f.memoizedState!==null||oa;if(!v){var C=f.alternate,j=C!==null&&C.memoizedState!==null||pt;C=oa;var _=pt;if(oa=v,(pt=j)&&!_)for(Z=f;Z!==null;)v=Z,j=v.child,v.tag===22&&v.memoizedState!==null?Tm(f):j!==null?(j.return=v,Z=j):Tm(f);for(;h!==null;)Z=h,km(h),h=h.sibling;Z=f,oa=C,pt=_}Em(t)}else f.subtreeFlags&8772&&h!==null?(h.return=f,Z=h):Em(t)}}function Em(t){for(;Z!==null;){var r=Z;if(r.flags&8772){var s=r.alternate;try{if(r.flags&8772)switch(r.tag){case 0:case 11:case 15:pt||sa(5,r);break;case 1:var l=r.stateNode;if(r.flags&4&&!pt)if(s===null)l.componentDidMount();else{var f=r.elementType===r.type?s.memoizedProps:Xt(r.type,s.memoizedProps);l.componentDidUpdate(f,s.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var h=r.updateQueue;h!==null&&Ch(r,h,l);break;case 3:var v=r.updateQueue;if(v!==null){if(s=null,r.child!==null)switch(r.child.tag){case 5:s=r.child.stateNode;break;case 1:s=r.child.stateNode}Ch(r,v,s)}break;case 5:var C=r.stateNode;if(s===null&&r.flags&4){s=C;var j=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":j.autoFocus&&s.focus();break;case"img":j.src&&(s.src=j.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var _=r.alternate;if(_!==null){var U=_.memoizedState;if(U!==null){var K=U.dehydrated;K!==null&&no(K)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(i(163))}pt||r.flags&512&&uc(r)}catch(z){Oe(r,r.return,z)}}if(r===t){Z=null;break}if(s=r.sibling,s!==null){s.return=r.return,Z=s;break}Z=r.return}}function Cm(t){for(;Z!==null;){var r=Z;if(r===t){Z=null;break}var s=r.sibling;if(s!==null){s.return=r.return,Z=s;break}Z=r.return}}function Tm(t){for(;Z!==null;){var r=Z;try{switch(r.tag){case 0:case 11:case 15:var s=r.return;try{sa(4,r)}catch(j){Oe(r,s,j)}break;case 1:var l=r.stateNode;if(typeof l.componentDidMount=="function"){var f=r.return;try{l.componentDidMount()}catch(j){Oe(r,f,j)}}var h=r.return;try{uc(r)}catch(j){Oe(r,h,j)}break;case 5:var v=r.return;try{uc(r)}catch(j){Oe(r,v,j)}}}catch(j){Oe(r,r.return,j)}if(r===t){Z=null;break}var C=r.sibling;if(C!==null){C.return=r.return,Z=C;break}Z=r.return}}var Zw=Math.ceil,aa=F.ReactCurrentDispatcher,fc=F.ReactCurrentOwner,Ft=F.ReactCurrentBatchConfig,ve=0,Qe=null,Ke=null,ot=0,Lt=0,di=Vn(0),qe=0,To=null,Sr=0,la=0,pc=0,Po=null,kt=null,hc=0,fi=1/0,Pn=null,ua=!1,mc=null,Gn=null,ca=!1,Yn=null,da=0,jo=0,gc=null,fa=-1,pa=0;function xt(){return ve&6?Ne():fa!==-1?fa:fa=Ne()}function qn(t){return t.mode&1?ve&2&&ot!==0?ot&-ot:_w.transition!==null?(pa===0&&(pa=vp()),pa):(t=Ce,t!==0||(t=window.event,t=t===void 0?16:jp(t.type)),t):1}function Zt(t,r,s,l){if(50<jo)throw jo=0,gc=null,Error(i(185));Qi(t,s,l),(!(ve&2)||t!==Qe)&&(t===Qe&&(!(ve&2)&&(la|=s),qe===4&&Xn(t,ot)),Et(t,l),s===1&&ve===0&&!(r.mode&1)&&(fi=Ne()+500,Vs&&Un()))}function Et(t,r){var s=t.callbackNode;_1(t,r);var l=bs(t,t===Qe?ot:0);if(l===0)s!==null&&gp(s),t.callbackNode=null,t.callbackPriority=0;else if(r=l&-l,t.callbackPriority!==r){if(s!=null&&gp(s),r===1)t.tag===0?Mw(jm.bind(null,t)):ph(jm.bind(null,t)),Dw(function(){!(ve&6)&&Un()}),s=null;else{switch(wp(l)){case 1:s=ql;break;case 4:s=yp;break;case 16:s=xs;break;case 536870912:s=xp;break;default:s=xs}s=_m(s,Pm.bind(null,t))}t.callbackPriority=r,t.callbackNode=s}}function Pm(t,r){if(fa=-1,pa=0,ve&6)throw Error(i(327));var s=t.callbackNode;if(pi()&&t.callbackNode!==s)return null;var l=bs(t,t===Qe?ot:0);if(l===0)return null;if(l&30||l&t.expiredLanes||r)r=ha(t,l);else{r=l;var f=ve;ve|=2;var h=Am();(Qe!==t||ot!==r)&&(Pn=null,fi=Ne()+500,kr(t,r));do try{nS();break}catch(C){Rm(t,C)}while(!0);$u(),aa.current=h,ve=f,Ke!==null?r=0:(Qe=null,ot=0,r=qe)}if(r!==0){if(r===2&&(f=Xl(t),f!==0&&(l=f,r=yc(t,f))),r===1)throw s=To,kr(t,0),Xn(t,l),Et(t,Ne()),s;if(r===6)Xn(t,l);else{if(f=t.current.alternate,!(l&30)&&!eS(f)&&(r=ha(t,l),r===2&&(h=Xl(t),h!==0&&(l=h,r=yc(t,h))),r===1))throw s=To,kr(t,0),Xn(t,l),Et(t,Ne()),s;switch(t.finishedWork=f,t.finishedLanes=l,r){case 0:case 1:throw Error(i(345));case 2:Er(t,kt,Pn);break;case 3:if(Xn(t,l),(l&130023424)===l&&(r=hc+500-Ne(),10<r)){if(bs(t,0)!==0)break;if(f=t.suspendedLanes,(f&l)!==l){xt(),t.pingedLanes|=t.suspendedLanes&f;break}t.timeoutHandle=ku(Er.bind(null,t,kt,Pn),r);break}Er(t,kt,Pn);break;case 4:if(Xn(t,l),(l&4194240)===l)break;for(r=t.eventTimes,f=-1;0<l;){var v=31-Gt(l);h=1<<v,v=r[v],v>f&&(f=v),l&=~h}if(l=f,l=Ne()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*Zw(l/1960))-l,10<l){t.timeoutHandle=ku(Er.bind(null,t,kt,Pn),l);break}Er(t,kt,Pn);break;case 5:Er(t,kt,Pn);break;default:throw Error(i(329))}}}return Et(t,Ne()),t.callbackNode===s?Pm.bind(null,t):null}function yc(t,r){var s=Po;return t.current.memoizedState.isDehydrated&&(kr(t,r).flags|=256),t=ha(t,r),t!==2&&(r=kt,kt=s,r!==null&&xc(r)),t}function xc(t){kt===null?kt=t:kt.push.apply(kt,t)}function eS(t){for(var r=t;;){if(r.flags&16384){var s=r.updateQueue;if(s!==null&&(s=s.stores,s!==null))for(var l=0;l<s.length;l++){var f=s[l],h=f.getSnapshot;f=f.value;try{if(!Yt(h(),f))return!1}catch{return!1}}}if(s=r.child,r.subtreeFlags&16384&&s!==null)s.return=r,r=s;else{if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Xn(t,r){for(r&=~pc,r&=~la,t.suspendedLanes|=r,t.pingedLanes&=~r,t=t.expirationTimes;0<r;){var s=31-Gt(r),l=1<<s;t[s]=-1,r&=~l}}function jm(t){if(ve&6)throw Error(i(327));pi();var r=bs(t,0);if(!(r&1))return Et(t,Ne()),null;var s=ha(t,r);if(t.tag!==0&&s===2){var l=Xl(t);l!==0&&(r=l,s=yc(t,l))}if(s===1)throw s=To,kr(t,0),Xn(t,r),Et(t,Ne()),s;if(s===6)throw Error(i(345));return t.finishedWork=t.current.alternate,t.finishedLanes=r,Er(t,kt,Pn),Et(t,Ne()),null}function vc(t,r){var s=ve;ve|=1;try{return t(r)}finally{ve=s,ve===0&&(fi=Ne()+500,Vs&&Un())}}function br(t){Yn!==null&&Yn.tag===0&&!(ve&6)&&pi();var r=ve;ve|=1;var s=Ft.transition,l=Ce;try{if(Ft.transition=null,Ce=1,t)return t()}finally{Ce=l,Ft.transition=s,ve=r,!(ve&6)&&Un()}}function wc(){Lt=di.current,Re(di)}function kr(t,r){t.finishedWork=null,t.finishedLanes=0;var s=t.timeoutHandle;if(s!==-1&&(t.timeoutHandle=-1,Aw(s)),Ke!==null)for(s=Ke.return;s!==null;){var l=s;switch(Ru(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&Fs();break;case 3:li(),Re(wt),Re(ct),zu();break;case 5:Nu(l);break;case 4:li();break;case 13:Re($e);break;case 19:Re($e);break;case 10:Mu(l.type._context);break;case 22:case 23:wc()}s=s.return}if(Qe=t,Ke=t=Qn(t.current,null),ot=Lt=r,qe=0,To=null,pc=la=Sr=0,kt=Po=null,xr!==null){for(r=0;r<xr.length;r++)if(s=xr[r],l=s.interleaved,l!==null){s.interleaved=null;var f=l.next,h=s.pending;if(h!==null){var v=h.next;h.next=f,l.next=v}s.pending=l}xr=null}return t}function Rm(t,r){do{var s=Ke;try{if($u(),Qs.current=ta,Js){for(var l=Me.memoizedState;l!==null;){var f=l.queue;f!==null&&(f.pending=null),l=l.next}Js=!1}if(wr=0,Xe=Ye=Me=null,wo=!1,So=0,fc.current=null,s===null||s.return===null){qe=1,To=r,Ke=null;break}e:{var h=t,v=s.return,C=s,j=r;if(r=ot,C.flags|=32768,j!==null&&typeof j=="object"&&typeof j.then=="function"){var _=j,U=C,K=U.tag;if(!(U.mode&1)&&(K===0||K===11||K===15)){var z=U.alternate;z?(U.updateQueue=z.updateQueue,U.memoizedState=z.memoizedState,U.lanes=z.lanes):(U.updateQueue=null,U.memoizedState=null)}var J=em(v);if(J!==null){J.flags&=-257,tm(J,v,C,h,r),J.mode&1&&Zh(h,_,r),r=J,j=_;var ee=r.updateQueue;if(ee===null){var ne=new Set;ne.add(j),r.updateQueue=ne}else ee.add(j);break e}else{if(!(r&1)){Zh(h,_,r),Sc();break e}j=Error(i(426))}}else if(De&&C.mode&1){var Ve=em(v);if(Ve!==null){!(Ve.flags&65536)&&(Ve.flags|=256),tm(Ve,v,C,h,r),Iu(ui(j,C));break e}}h=j=ui(j,C),qe!==4&&(qe=2),Po===null?Po=[h]:Po.push(h),h=v;do{switch(h.tag){case 3:h.flags|=65536,r&=-r,h.lanes|=r;var $=Qh(h,j,r);Eh(h,$);break e;case 1:C=j;var D=h.type,M=h.stateNode;if(!(h.flags&128)&&(typeof D.getDerivedStateFromError=="function"||M!==null&&typeof M.componentDidCatch=="function"&&(Gn===null||!Gn.has(M)))){h.flags|=65536,r&=-r,h.lanes|=r;var G=Jh(h,C,r);Eh(h,G);break e}}h=h.return}while(h!==null)}Im(s)}catch(re){r=re,Ke===s&&s!==null&&(Ke=s=s.return);continue}break}while(!0)}function Am(){var t=aa.current;return aa.current=ta,t===null?ta:t}function Sc(){(qe===0||qe===3||qe===2)&&(qe=4),Qe===null||!(Sr&268435455)&&!(la&268435455)||Xn(Qe,ot)}function ha(t,r){var s=ve;ve|=2;var l=Am();(Qe!==t||ot!==r)&&(Pn=null,kr(t,r));do try{tS();break}catch(f){Rm(t,f)}while(!0);if($u(),ve=s,aa.current=l,Ke!==null)throw Error(i(261));return Qe=null,ot=0,qe}function tS(){for(;Ke!==null;)Dm(Ke)}function nS(){for(;Ke!==null&&!P1();)Dm(Ke)}function Dm(t){var r=Mm(t.alternate,t,Lt);t.memoizedProps=t.pendingProps,r===null?Im(t):Ke=r,fc.current=null}function Im(t){var r=t;do{var s=r.alternate;if(t=r.return,r.flags&32768){if(s=qw(s,r),s!==null){s.flags&=32767,Ke=s;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{qe=6,Ke=null;return}}else if(s=Yw(s,r,Lt),s!==null){Ke=s;return}if(r=r.sibling,r!==null){Ke=r;return}Ke=r=t}while(r!==null);qe===0&&(qe=5)}function Er(t,r,s){var l=Ce,f=Ft.transition;try{Ft.transition=null,Ce=1,rS(t,r,s,l)}finally{Ft.transition=f,Ce=l}return null}function rS(t,r,s,l){do pi();while(Yn!==null);if(ve&6)throw Error(i(327));s=t.finishedWork;var f=t.finishedLanes;if(s===null)return null;if(t.finishedWork=null,t.finishedLanes=0,s===t.current)throw Error(i(177));t.callbackNode=null,t.callbackPriority=0;var h=s.lanes|s.childLanes;if(B1(t,h),t===Qe&&(Ke=Qe=null,ot=0),!(s.subtreeFlags&2064)&&!(s.flags&2064)||ca||(ca=!0,_m(xs,function(){return pi(),null})),h=(s.flags&15990)!==0,s.subtreeFlags&15990||h){h=Ft.transition,Ft.transition=null;var v=Ce;Ce=1;var C=ve;ve|=4,fc.current=null,Qw(t,s),bm(s,t),kw(Su),Cs=!!wu,Su=wu=null,t.current=s,Jw(s),j1(),ve=C,Ce=v,Ft.transition=h}else t.current=s;if(ca&&(ca=!1,Yn=t,da=f),h=t.pendingLanes,h===0&&(Gn=null),D1(s.stateNode),Et(t,Ne()),r!==null)for(l=t.onRecoverableError,s=0;s<r.length;s++)f=r[s],l(f.value,{componentStack:f.stack,digest:f.digest});if(ua)throw ua=!1,t=mc,mc=null,t;return da&1&&t.tag!==0&&pi(),h=t.pendingLanes,h&1?t===gc?jo++:(jo=0,gc=t):jo=0,Un(),null}function pi(){if(Yn!==null){var t=wp(da),r=Ft.transition,s=Ce;try{if(Ft.transition=null,Ce=16>t?16:t,Yn===null)var l=!1;else{if(t=Yn,Yn=null,da=0,ve&6)throw Error(i(331));var f=ve;for(ve|=4,Z=t.current;Z!==null;){var h=Z,v=h.child;if(Z.flags&16){var C=h.deletions;if(C!==null){for(var j=0;j<C.length;j++){var _=C[j];for(Z=_;Z!==null;){var U=Z;switch(U.tag){case 0:case 11:case 15:Co(8,U,h)}var K=U.child;if(K!==null)K.return=U,Z=K;else for(;Z!==null;){U=Z;var z=U.sibling,J=U.return;if(ym(U),U===_){Z=null;break}if(z!==null){z.return=J,Z=z;break}Z=J}}}var ee=h.alternate;if(ee!==null){var ne=ee.child;if(ne!==null){ee.child=null;do{var Ve=ne.sibling;ne.sibling=null,ne=Ve}while(ne!==null)}}Z=h}}if(h.subtreeFlags&2064&&v!==null)v.return=h,Z=v;else e:for(;Z!==null;){if(h=Z,h.flags&2048)switch(h.tag){case 0:case 11:case 15:Co(9,h,h.return)}var $=h.sibling;if($!==null){$.return=h.return,Z=$;break e}Z=h.return}}var D=t.current;for(Z=D;Z!==null;){v=Z;var M=v.child;if(v.subtreeFlags&2064&&M!==null)M.return=v,Z=M;else e:for(v=D;Z!==null;){if(C=Z,C.flags&2048)try{switch(C.tag){case 0:case 11:case 15:sa(9,C)}}catch(re){Oe(C,C.return,re)}if(C===v){Z=null;break e}var G=C.sibling;if(G!==null){G.return=C.return,Z=G;break e}Z=C.return}}if(ve=f,Un(),an&&typeof an.onPostCommitFiberRoot=="function")try{an.onPostCommitFiberRoot(vs,t)}catch{}l=!0}return l}finally{Ce=s,Ft.transition=r}}return!1}function Lm(t,r,s){r=ui(s,r),r=Qh(t,r,1),t=Hn(t,r,1),r=xt(),t!==null&&(Qi(t,1,r),Et(t,r))}function Oe(t,r,s){if(t.tag===3)Lm(t,t,s);else for(;r!==null;){if(r.tag===3){Lm(r,t,s);break}else if(r.tag===1){var l=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Gn===null||!Gn.has(l))){t=ui(s,t),t=Jh(r,t,1),r=Hn(r,t,1),t=xt(),r!==null&&(Qi(r,1,t),Et(r,t));break}}r=r.return}}function iS(t,r,s){var l=t.pingCache;l!==null&&l.delete(r),r=xt(),t.pingedLanes|=t.suspendedLanes&s,Qe===t&&(ot&s)===s&&(qe===4||qe===3&&(ot&130023424)===ot&&500>Ne()-hc?kr(t,0):pc|=s),Et(t,r)}function $m(t,r){r===0&&(t.mode&1?(r=Ss,Ss<<=1,!(Ss&130023424)&&(Ss=4194304)):r=1);var s=xt();t=En(t,r),t!==null&&(Qi(t,r,s),Et(t,s))}function oS(t){var r=t.memoizedState,s=0;r!==null&&(s=r.retryLane),$m(t,s)}function sS(t,r){var s=0;switch(t.tag){case 13:var l=t.stateNode,f=t.memoizedState;f!==null&&(s=f.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(i(314))}l!==null&&l.delete(r),$m(t,s)}var Mm;Mm=function(t,r,s){if(t!==null)if(t.memoizedProps!==r.pendingProps||wt.current)bt=!0;else{if(!(t.lanes&s)&&!(r.flags&128))return bt=!1,Gw(t,r,s);bt=!!(t.flags&131072)}else bt=!1,De&&r.flags&1048576&&hh(r,Us,r.index);switch(r.lanes=0,r.tag){case 2:var l=r.type;ia(t,r),t=r.pendingProps;var f=ti(r,ct.current);ai(r,s),f=Hu(null,r,l,t,f,s);var h=Ku();return r.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,St(l)?(h=!0,Ns(r)):h=!1,r.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,Ou(r),f.updater=na,r.stateNode=f,f._reactInternals=r,Ju(r,l,t,s),r=nc(null,r,l,!0,h,s)):(r.tag=0,De&&h&&ju(r),yt(null,r,f,s),r=r.child),r;case 16:l=r.elementType;e:{switch(ia(t,r),t=r.pendingProps,f=l._init,l=f(l._payload),r.type=l,f=r.tag=lS(l),t=Xt(l,t),f){case 0:r=tc(null,r,l,t,s);break e;case 1:r=am(null,r,l,t,s);break e;case 11:r=nm(null,r,l,t,s);break e;case 14:r=rm(null,r,l,Xt(l.type,t),s);break e}throw Error(i(306,l,""))}return r;case 0:return l=r.type,f=r.pendingProps,f=r.elementType===l?f:Xt(l,f),tc(t,r,l,f,s);case 1:return l=r.type,f=r.pendingProps,f=r.elementType===l?f:Xt(l,f),am(t,r,l,f,s);case 3:e:{if(lm(r),t===null)throw Error(i(387));l=r.pendingProps,h=r.memoizedState,f=h.element,kh(t,r),qs(r,l,null,s);var v=r.memoizedState;if(l=v.element,h.isDehydrated)if(h={element:l,isDehydrated:!1,cache:v.cache,pendingSuspenseBoundaries:v.pendingSuspenseBoundaries,transitions:v.transitions},r.updateQueue.baseState=h,r.memoizedState=h,r.flags&256){f=ui(Error(i(423)),r),r=um(t,r,l,s,f);break e}else if(l!==f){f=ui(Error(i(424)),r),r=um(t,r,l,s,f);break e}else for(It=Nn(r.stateNode.containerInfo.firstChild),Dt=r,De=!0,qt=null,s=Sh(r,null,l,s),r.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(ii(),l===f){r=Tn(t,r,s);break e}yt(t,r,l,s)}r=r.child}return r;case 5:return Th(r),t===null&&Du(r),l=r.type,f=r.pendingProps,h=t!==null?t.memoizedProps:null,v=f.children,bu(l,f)?v=null:h!==null&&bu(l,h)&&(r.flags|=32),sm(t,r),yt(t,r,v,s),r.child;case 6:return t===null&&Du(r),null;case 13:return cm(t,r,s);case 4:return Fu(r,r.stateNode.containerInfo),l=r.pendingProps,t===null?r.child=oi(r,null,l,s):yt(t,r,l,s),r.child;case 11:return l=r.type,f=r.pendingProps,f=r.elementType===l?f:Xt(l,f),nm(t,r,l,f,s);case 7:return yt(t,r,r.pendingProps,s),r.child;case 8:return yt(t,r,r.pendingProps.children,s),r.child;case 12:return yt(t,r,r.pendingProps.children,s),r.child;case 10:e:{if(l=r.type._context,f=r.pendingProps,h=r.memoizedProps,v=f.value,Pe(Ks,l._currentValue),l._currentValue=v,h!==null)if(Yt(h.value,v)){if(h.children===f.children&&!wt.current){r=Tn(t,r,s);break e}}else for(h=r.child,h!==null&&(h.return=r);h!==null;){var C=h.dependencies;if(C!==null){v=h.child;for(var j=C.firstContext;j!==null;){if(j.context===l){if(h.tag===1){j=Cn(-1,s&-s),j.tag=2;var _=h.updateQueue;if(_!==null){_=_.shared;var U=_.pending;U===null?j.next=j:(j.next=U.next,U.next=j),_.pending=j}}h.lanes|=s,j=h.alternate,j!==null&&(j.lanes|=s),_u(h.return,s,r),C.lanes|=s;break}j=j.next}}else if(h.tag===10)v=h.type===r.type?null:h.child;else if(h.tag===18){if(v=h.return,v===null)throw Error(i(341));v.lanes|=s,C=v.alternate,C!==null&&(C.lanes|=s),_u(v,s,r),v=h.sibling}else v=h.child;if(v!==null)v.return=h;else for(v=h;v!==null;){if(v===r){v=null;break}if(h=v.sibling,h!==null){h.return=v.return,v=h;break}v=v.return}h=v}yt(t,r,f.children,s),r=r.child}return r;case 9:return f=r.type,l=r.pendingProps.children,ai(r,s),f=Bt(f),l=l(f),r.flags|=1,yt(t,r,l,s),r.child;case 14:return l=r.type,f=Xt(l,r.pendingProps),f=Xt(l.type,f),rm(t,r,l,f,s);case 15:return im(t,r,r.type,r.pendingProps,s);case 17:return l=r.type,f=r.pendingProps,f=r.elementType===l?f:Xt(l,f),ia(t,r),r.tag=1,St(l)?(t=!0,Ns(r)):t=!1,ai(r,s),qh(r,l,f),Ju(r,l,f,s),nc(null,r,l,!0,t,s);case 19:return fm(t,r,s);case 22:return om(t,r,s)}throw Error(i(156,r.tag))};function _m(t,r){return mp(t,r)}function aS(t,r,s,l){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nt(t,r,s,l){return new aS(t,r,s,l)}function bc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function lS(t){if(typeof t=="function")return bc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Te)return 11;if(t===Rt)return 14}return 2}function Qn(t,r){var s=t.alternate;return s===null?(s=Nt(t.tag,r,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=r,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&14680064,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,r=t.dependencies,s.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s}function ma(t,r,s,l,f,h){var v=2;if(l=t,typeof t=="function")bc(t)&&(v=1);else if(typeof t=="string")v=5;else e:switch(t){case W:return Cr(s.children,f,h,r);case H:v=8,f|=8;break;case Q:return t=Nt(12,s,r,f|2),t.elementType=Q,t.lanes=h,t;case He:return t=Nt(13,s,r,f),t.elementType=He,t.lanes=h,t;case ut:return t=Nt(19,s,r,f),t.elementType=ut,t.lanes=h,t;case ce:return ga(s,f,h,r);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case ae:v=10;break e;case se:v=9;break e;case Te:v=11;break e;case Rt:v=14;break e;case nt:v=16,l=null;break e}throw Error(i(130,t==null?t:typeof t,""))}return r=Nt(v,s,r,f),r.elementType=t,r.type=l,r.lanes=h,r}function Cr(t,r,s,l){return t=Nt(7,t,l,r),t.lanes=s,t}function ga(t,r,s,l){return t=Nt(22,t,l,r),t.elementType=ce,t.lanes=s,t.stateNode={isHidden:!1},t}function kc(t,r,s){return t=Nt(6,t,null,r),t.lanes=s,t}function Ec(t,r,s){return r=Nt(4,t.children!==null?t.children:[],t.key,r),r.lanes=s,r.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},r}function uS(t,r,s,l,f){this.tag=r,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ql(0),this.expirationTimes=Ql(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ql(0),this.identifierPrefix=l,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function Cc(t,r,s,l,f,h,v,C,j){return t=new uS(t,r,s,C,j),r===1?(r=1,h===!0&&(r|=8)):r=0,h=Nt(3,null,null,r),t.current=h,h.stateNode=t,h.memoizedState={element:l,isDehydrated:s,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ou(h),t}function cS(t,r,s){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:V,key:l==null?null:""+l,children:t,containerInfo:r,implementation:s}}function Bm(t){if(!t)return zn;t=t._reactInternals;e:{if(pr(t)!==t||t.tag!==1)throw Error(i(170));var r=t;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(St(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(i(171))}if(t.tag===1){var s=t.type;if(St(s))return dh(t,s,r)}return r}function Om(t,r,s,l,f,h,v,C,j){return t=Cc(s,l,!0,t,f,h,v,C,j),t.context=Bm(null),s=t.current,l=xt(),f=qn(s),h=Cn(l,f),h.callback=r??null,Hn(s,h,f),t.current.lanes=f,Qi(t,f,l),Et(t,l),t}function ya(t,r,s,l){var f=r.current,h=xt(),v=qn(f);return s=Bm(s),r.context===null?r.context=s:r.pendingContext=s,r=Cn(h,v),r.payload={element:t},l=l===void 0?null:l,l!==null&&(r.callback=l),t=Hn(f,r,v),t!==null&&(Zt(t,f,v,h),Ys(t,f,v)),v}function xa(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Fm(t,r){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<r?s:r}}function Tc(t,r){Fm(t,r),(t=t.alternate)&&Fm(t,r)}function dS(){return null}var Nm=typeof reportError=="function"?reportError:function(t){console.error(t)};function Pc(t){this._internalRoot=t}va.prototype.render=Pc.prototype.render=function(t){var r=this._internalRoot;if(r===null)throw Error(i(409));ya(t,r,null,null)},va.prototype.unmount=Pc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var r=t.containerInfo;br(function(){ya(null,t,null,null)}),r[wn]=null}};function va(t){this._internalRoot=t}va.prototype.unstable_scheduleHydration=function(t){if(t){var r=kp();t={blockedOn:null,target:t,priority:r};for(var s=0;s<Bn.length&&r!==0&&r<Bn[s].priority;s++);Bn.splice(s,0,t),s===0&&Tp(t)}};function jc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function wa(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Vm(){}function fS(t,r,s,l,f){if(f){if(typeof l=="function"){var h=l;l=function(){var _=xa(v);h.call(_)}}var v=Om(r,l,t,0,null,!1,!1,"",Vm);return t._reactRootContainer=v,t[wn]=v.current,fo(t.nodeType===8?t.parentNode:t),br(),v}for(;f=t.lastChild;)t.removeChild(f);if(typeof l=="function"){var C=l;l=function(){var _=xa(j);C.call(_)}}var j=Cc(t,0,!1,null,null,!1,!1,"",Vm);return t._reactRootContainer=j,t[wn]=j.current,fo(t.nodeType===8?t.parentNode:t),br(function(){ya(r,j,s,l)}),j}function Sa(t,r,s,l,f){var h=s._reactRootContainer;if(h){var v=h;if(typeof f=="function"){var C=f;f=function(){var j=xa(v);C.call(j)}}ya(r,v,t,f)}else v=fS(s,r,t,f,l);return xa(v)}Sp=function(t){switch(t.tag){case 3:var r=t.stateNode;if(r.current.memoizedState.isDehydrated){var s=Xi(r.pendingLanes);s!==0&&(Jl(r,s|1),Et(r,Ne()),!(ve&6)&&(fi=Ne()+500,Un()))}break;case 13:br(function(){var l=En(t,1);if(l!==null){var f=xt();Zt(l,t,1,f)}}),Tc(t,1)}},Zl=function(t){if(t.tag===13){var r=En(t,134217728);if(r!==null){var s=xt();Zt(r,t,134217728,s)}Tc(t,134217728)}},bp=function(t){if(t.tag===13){var r=qn(t),s=En(t,r);if(s!==null){var l=xt();Zt(s,t,r,l)}Tc(t,r)}},kp=function(){return Ce},Ep=function(t,r){var s=Ce;try{return Ce=t,r()}finally{Ce=s}},Hl=function(t,r,s){switch(r){case"input":if(Bl(t,s),r=s.name,s.type==="radio"&&r!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<s.length;r++){var l=s[r];if(l!==t&&l.form===t.form){var f=Os(l);if(!f)throw Error(i(90));Kt(l),Bl(l,f)}}}break;case"textarea":Zf(t,s);break;case"select":r=s.value,r!=null&&Ur(t,!!s.multiple,r,!1)}},lp=vc,up=br;var pS={usingClientEntryPoint:!1,Events:[mo,Zr,Os,sp,ap,vc]},Ro={findFiberByHostInstance:hr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},hS={bundleType:Ro.bundleType,version:Ro.version,rendererPackageName:Ro.rendererPackageName,rendererConfig:Ro.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:F.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=pp(t),t===null?null:t.stateNode},findFiberByHostInstance:Ro.findFiberByHostInstance||dS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ba=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ba.isDisabled&&ba.supportsFiber)try{vs=ba.inject(hS),an=ba}catch{}}return Ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pS,Ct.createPortal=function(t,r){var s=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!jc(r))throw Error(i(200));return cS(t,r,null,s)},Ct.createRoot=function(t,r){if(!jc(t))throw Error(i(299));var s=!1,l="",f=Nm;return r!=null&&(r.unstable_strictMode===!0&&(s=!0),r.identifierPrefix!==void 0&&(l=r.identifierPrefix),r.onRecoverableError!==void 0&&(f=r.onRecoverableError)),r=Cc(t,1,!1,null,null,s,!1,l,f),t[wn]=r.current,fo(t.nodeType===8?t.parentNode:t),new Pc(r)},Ct.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var r=t._reactInternals;if(r===void 0)throw typeof t.render=="function"?Error(i(188)):(t=Object.keys(t).join(","),Error(i(268,t)));return t=pp(r),t=t===null?null:t.stateNode,t},Ct.flushSync=function(t){return br(t)},Ct.hydrate=function(t,r,s){if(!wa(r))throw Error(i(200));return Sa(null,t,r,!0,s)},Ct.hydrateRoot=function(t,r,s){if(!jc(t))throw Error(i(405));var l=s!=null&&s.hydratedSources||null,f=!1,h="",v=Nm;if(s!=null&&(s.unstable_strictMode===!0&&(f=!0),s.identifierPrefix!==void 0&&(h=s.identifierPrefix),s.onRecoverableError!==void 0&&(v=s.onRecoverableError)),r=Om(r,null,t,1,s??null,f,!1,h,v),t[wn]=r.current,fo(t),l)for(t=0;t<l.length;t++)s=l[t],f=s._getVersion,f=f(s._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[s,f]:r.mutableSourceEagerHydrationData.push(s,f);return new va(r)},Ct.render=function(t,r,s){if(!wa(r))throw Error(i(200));return Sa(null,t,r,!1,s)},Ct.unmountComponentAtNode=function(t){if(!wa(t))throw Error(i(40));return t._reactRootContainer?(br(function(){Sa(null,null,t,!1,function(){t._reactRootContainer=null,t[wn]=null})}),!0):!1},Ct.unstable_batchedUpdates=vc,Ct.unstable_renderSubtreeIntoContainer=function(t,r,s,l){if(!wa(s))throw Error(i(200));if(t==null||t._reactInternals===void 0)throw Error(i(38));return Sa(t,r,s,!1,l)},Ct.version="18.3.1-next-f1338f8080-20240426",Ct}var Xm;function CS(){if(Xm)return Dc.exports;Xm=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}return e(),Dc.exports=ES(),Dc.exports}var Qm;function TS(){if(Qm)return ka;Qm=1;var e=CS();return ka.createRoot=e.createRoot,ka.hydrateRoot=e.hydrateRoot,ka}var PS=TS();const jS="modulepreload",RS=function(e){return"/WuKonWeb4/"+e},Jm={},AS=function(n,i,o){let a=Promise.resolve();if(i&&i.length>0){document.getElementsByTagName("link");const c=document.querySelector("meta[property=csp-nonce]"),d=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));a=Promise.allSettled(i.map(p=>{if(p=RS(p),p in Jm)return;Jm[p]=!0;const m=p.endsWith(".css"),g=m?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${p}"]${g}`))return;const x=document.createElement("link");if(x.rel=m?"stylesheet":jS,m||(x.as="script"),x.crossOrigin="",x.href=p,d&&x.setAttribute("nonce",d),document.head.appendChild(x),m)return new Promise((w,S)=>{x.addEventListener("load",w),x.addEventListener("error",()=>S(new Error(`Unable to preload CSS for ${p}`)))})}))}function u(c){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=c,window.dispatchEvent(d),!d.defaultPrevented)throw c}return a.then(c=>{for(const d of c||[])d.status==="rejected"&&u(d.reason);return n().catch(u)})};var b=Xd();const tn=xS(b);var tt=function(){return tt=Object.assign||function(n){for(var i,o=1,a=arguments.length;o<a;o++){i=arguments[o];for(var u in i)Object.prototype.hasOwnProperty.call(i,u)&&(n[u]=i[u])}return n},tt.apply(this,arguments)};function Ko(e,n,i){if(i||arguments.length===2)for(var o=0,a=n.length,u;o<a;o++)(u||!(o in n))&&(u||(u=Array.prototype.slice.call(n,0,o)),u[o]=n[o]);return e.concat(u||Array.prototype.slice.call(n))}var Ae="-ms-",Fo="-moz-",Ee="-webkit-",ky="comm",ml="rule",Qd="decl",DS="@import",Ey="@keyframes",IS="@layer",Cy=Math.abs,Jd=String.fromCharCode,cd=Object.assign;function LS(e,n){return Ze(e,0)^45?(((n<<2^Ze(e,0))<<2^Ze(e,1))<<2^Ze(e,2))<<2^Ze(e,3):0}function Ty(e){return e.trim()}function Rn(e,n){return(e=n.exec(e))?e[0]:e}function he(e,n,i){return e.replace(n,i)}function Va(e,n,i){return e.indexOf(n,i)}function Ze(e,n){return e.charCodeAt(n)|0}function ji(e,n,i){return e.slice(n,i)}function hn(e){return e.length}function Py(e){return e.length}function _o(e,n){return n.push(e),e}function $S(e,n){return e.map(n).join("")}function Zm(e,n){return e.filter(function(i){return!Rn(i,n)})}var gl=1,Ri=1,jy=0,Wt=0,Ge=0,$i="";function yl(e,n,i,o,a,u,c,d){return{value:e,root:n,parent:i,type:o,props:a,children:u,line:gl,column:Ri,length:c,return:"",siblings:d}}function rr(e,n){return cd(yl("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},n)}function hi(e){for(;e.root;)e=rr(e.root,{children:[e]});_o(e,e.siblings)}function MS(){return Ge}function _S(){return Ge=Wt>0?Ze($i,--Wt):0,Ri--,Ge===10&&(Ri=1,gl--),Ge}function nn(){return Ge=Wt<jy?Ze($i,Wt++):0,Ri++,Ge===10&&(Ri=1,gl++),Ge}function Mr(){return Ze($i,Wt)}function za(){return Wt}function xl(e,n){return ji($i,e,n)}function dd(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function BS(e){return gl=Ri=1,jy=hn($i=e),Wt=0,[]}function OS(e){return $i="",e}function $c(e){return Ty(xl(Wt-1,fd(e===91?e+2:e===40?e+1:e)))}function FS(e){for(;(Ge=Mr())&&Ge<33;)nn();return dd(e)>2||dd(Ge)>3?"":" "}function NS(e,n){for(;--n&&nn()&&!(Ge<48||Ge>102||Ge>57&&Ge<65||Ge>70&&Ge<97););return xl(e,za()+(n<6&&Mr()==32&&nn()==32))}function fd(e){for(;nn();)switch(Ge){case e:return Wt;case 34:case 39:e!==34&&e!==39&&fd(Ge);break;case 40:e===41&&fd(e);break;case 92:nn();break}return Wt}function VS(e,n){for(;nn()&&e+Ge!==57;)if(e+Ge===84&&Mr()===47)break;return"/*"+xl(n,Wt-1)+"*"+Jd(e===47?e:nn())}function zS(e){for(;!dd(Mr());)nn();return xl(e,Wt)}function US(e){return OS(Ua("",null,null,null,[""],e=BS(e),0,[0],e))}function Ua(e,n,i,o,a,u,c,d,p){for(var m=0,g=0,x=c,w=0,S=0,k=0,T=1,E=1,P=1,L=0,A="",F=a,O=u,V=o,W=A;E;)switch(k=L,L=nn()){case 40:if(k!=108&&Ze(W,x-1)==58){Va(W+=he($c(L),"&","&\f"),"&\f",Cy(m?d[m-1]:0))!=-1&&(P=-1);break}case 34:case 39:case 91:W+=$c(L);break;case 9:case 10:case 13:case 32:W+=FS(k);break;case 92:W+=NS(za()-1,7);continue;case 47:switch(Mr()){case 42:case 47:_o(WS(VS(nn(),za()),n,i,p),p);break;default:W+="/"}break;case 123*T:d[m++]=hn(W)*P;case 125*T:case 59:case 0:switch(L){case 0:case 125:E=0;case 59+g:P==-1&&(W=he(W,/\f/g,"")),S>0&&hn(W)-x&&_o(S>32?tg(W+";",o,i,x-1,p):tg(he(W," ","")+";",o,i,x-2,p),p);break;case 59:W+=";";default:if(_o(V=eg(W,n,i,m,g,a,d,A,F=[],O=[],x,u),u),L===123)if(g===0)Ua(W,n,V,V,F,u,x,d,O);else switch(w===99&&Ze(W,3)===110?100:w){case 100:case 108:case 109:case 115:Ua(e,V,V,o&&_o(eg(e,V,V,0,0,a,d,A,a,F=[],x,O),O),a,O,x,d,o?F:O);break;default:Ua(W,V,V,V,[""],O,0,d,O)}}m=g=S=0,T=P=1,A=W="",x=c;break;case 58:x=1+hn(W),S=k;default:if(T<1){if(L==123)--T;else if(L==125&&T++==0&&_S()==125)continue}switch(W+=Jd(L),L*T){case 38:P=g>0?1:(W+="\f",-1);break;case 44:d[m++]=(hn(W)-1)*P,P=1;break;case 64:Mr()===45&&(W+=$c(nn())),w=Mr(),g=x=hn(A=W+=zS(za())),L++;break;case 45:k===45&&hn(W)==2&&(T=0)}}return u}function eg(e,n,i,o,a,u,c,d,p,m,g,x){for(var w=a-1,S=a===0?u:[""],k=Py(S),T=0,E=0,P=0;T<o;++T)for(var L=0,A=ji(e,w+1,w=Cy(E=c[T])),F=e;L<k;++L)(F=Ty(E>0?S[L]+" "+A:he(A,/&\f/g,S[L])))&&(p[P++]=F);return yl(e,n,i,a===0?ml:d,p,m,g,x)}function WS(e,n,i,o){return yl(e,n,i,ky,Jd(MS()),ji(e,2,-2),0,o)}function tg(e,n,i,o,a){return yl(e,n,i,Qd,ji(e,0,o),ji(e,o+1,-1),o,a)}function Ry(e,n,i){switch(LS(e,n)){case 5103:return Ee+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Ee+e+e;case 4789:return Fo+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Ee+e+Fo+e+Ae+e+e;case 5936:switch(Ze(e,n+11)){case 114:return Ee+e+Ae+he(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Ee+e+Ae+he(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Ee+e+Ae+he(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return Ee+e+Ae+e+e;case 6165:return Ee+e+Ae+"flex-"+e+e;case 5187:return Ee+e+he(e,/(\w+).+(:[^]+)/,Ee+"box-$1$2"+Ae+"flex-$1$2")+e;case 5443:return Ee+e+Ae+"flex-item-"+he(e,/flex-|-self/g,"")+(Rn(e,/flex-|baseline/)?"":Ae+"grid-row-"+he(e,/flex-|-self/g,""))+e;case 4675:return Ee+e+Ae+"flex-line-pack"+he(e,/align-content|flex-|-self/g,"")+e;case 5548:return Ee+e+Ae+he(e,"shrink","negative")+e;case 5292:return Ee+e+Ae+he(e,"basis","preferred-size")+e;case 6060:return Ee+"box-"+he(e,"-grow","")+Ee+e+Ae+he(e,"grow","positive")+e;case 4554:return Ee+he(e,/([^-])(transform)/g,"$1"+Ee+"$2")+e;case 6187:return he(he(he(e,/(zoom-|grab)/,Ee+"$1"),/(image-set)/,Ee+"$1"),e,"")+e;case 5495:case 3959:return he(e,/(image-set\([^]*)/,Ee+"$1$`$1");case 4968:return he(he(e,/(.+:)(flex-)?(.*)/,Ee+"box-pack:$3"+Ae+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Ee+e+e;case 4200:if(!Rn(e,/flex-|baseline/))return Ae+"grid-column-align"+ji(e,n)+e;break;case 2592:case 3360:return Ae+he(e,"template-","")+e;case 4384:case 3616:return i&&i.some(function(o,a){return n=a,Rn(o.props,/grid-\w+-end/)})?~Va(e+(i=i[n].value),"span",0)?e:Ae+he(e,"-start","")+e+Ae+"grid-row-span:"+(~Va(i,"span",0)?Rn(i,/\d+/):+Rn(i,/\d+/)-+Rn(e,/\d+/))+";":Ae+he(e,"-start","")+e;case 4896:case 4128:return i&&i.some(function(o){return Rn(o.props,/grid-\w+-start/)})?e:Ae+he(he(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return he(e,/(.+)-inline(.+)/,Ee+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(hn(e)-1-n>6)switch(Ze(e,n+1)){case 109:if(Ze(e,n+4)!==45)break;case 102:return he(e,/(.+:)(.+)-([^]+)/,"$1"+Ee+"$2-$3$1"+Fo+(Ze(e,n+3)==108?"$3":"$2-$3"))+e;case 115:return~Va(e,"stretch",0)?Ry(he(e,"stretch","fill-available"),n,i)+e:e}break;case 5152:case 5920:return he(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(o,a,u,c,d,p,m){return Ae+a+":"+u+m+(c?Ae+a+"-span:"+(d?p:+p-+u)+m:"")+e});case 4949:if(Ze(e,n+6)===121)return he(e,":",":"+Ee)+e;break;case 6444:switch(Ze(e,Ze(e,14)===45?18:11)){case 120:return he(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Ee+(Ze(e,14)===45?"inline-":"")+"box$3$1"+Ee+"$2$3$1"+Ae+"$2box$3")+e;case 100:return he(e,":",":"+Ae)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return he(e,"scroll-","scroll-snap-")+e}return e}function nl(e,n){for(var i="",o=0;o<e.length;o++)i+=n(e[o],o,e,n)||"";return i}function HS(e,n,i,o){switch(e.type){case IS:if(e.children.length)break;case DS:case Qd:return e.return=e.return||e.value;case ky:return"";case Ey:return e.return=e.value+"{"+nl(e.children,o)+"}";case ml:if(!hn(e.value=e.props.join(",")))return""}return hn(i=nl(e.children,o))?e.return=e.value+"{"+i+"}":""}function KS(e){var n=Py(e);return function(i,o,a,u){for(var c="",d=0;d<n;d++)c+=e[d](i,o,a,u)||"";return c}}function GS(e){return function(n){n.root||(n=n.return)&&e(n)}}function YS(e,n,i,o){if(e.length>-1&&!e.return)switch(e.type){case Qd:e.return=Ry(e.value,e.length,i);return;case Ey:return nl([rr(e,{value:he(e.value,"@","@"+Ee)})],o);case ml:if(e.length)return $S(i=e.props,function(a){switch(Rn(a,o=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":hi(rr(e,{props:[he(a,/:(read-\w+)/,":"+Fo+"$1")]})),hi(rr(e,{props:[a]})),cd(e,{props:Zm(i,o)});break;case"::placeholder":hi(rr(e,{props:[he(a,/:(plac\w+)/,":"+Ee+"input-$1")]})),hi(rr(e,{props:[he(a,/:(plac\w+)/,":"+Fo+"$1")]})),hi(rr(e,{props:[he(a,/:(plac\w+)/,Ae+"input-$1")]})),hi(rr(e,{props:[a]})),cd(e,{props:Zm(i,o)});break}return""})}}var qS={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},$t={},Ai=typeof process<"u"&&$t!==void 0&&($t.REACT_APP_SC_ATTR||$t.SC_ATTR)||"data-styled",Ay="active",Dy="data-styled-version",vl="6.1.15",Zd=`/*!sc*/
`,rl=typeof window<"u"&&"HTMLElement"in window,XS=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&$t!==void 0&&$t.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&$t.REACT_APP_SC_DISABLE_SPEEDY!==""?$t.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&$t.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&$t!==void 0&&$t.SC_DISABLE_SPEEDY!==void 0&&$t.SC_DISABLE_SPEEDY!==""&&$t.SC_DISABLE_SPEEDY!=="false"&&$t.SC_DISABLE_SPEEDY),QS={},wl=Object.freeze([]),Di=Object.freeze({});function Iy(e,n,i){return i===void 0&&(i=Di),e.theme!==i.theme&&e.theme||n||i.theme}var Ly=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),JS=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,ZS=/(^-|-$)/g;function ng(e){return e.replace(JS,"-").replace(ZS,"")}var eb=/(a)(d)/gi,Ea=52,rg=function(e){return String.fromCharCode(e+(e>25?39:97))};function pd(e){var n,i="";for(n=Math.abs(e);n>Ea;n=n/Ea|0)i=rg(n%Ea)+i;return(rg(n%Ea)+i).replace(eb,"$1-$2")}var Mc,$y=5381,bi=function(e,n){for(var i=n.length;i;)e=33*e^n.charCodeAt(--i);return e},My=function(e){return bi($y,e)};function _y(e){return pd(My(e)>>>0)}function tb(e){return e.displayName||e.name||"Component"}function _c(e){return typeof e=="string"&&!0}var By=typeof Symbol=="function"&&Symbol.for,Oy=By?Symbol.for("react.memo"):60115,nb=By?Symbol.for("react.forward_ref"):60112,rb={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},ib={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Fy={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},ob=((Mc={})[nb]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Mc[Oy]=Fy,Mc);function ig(e){return("type"in(n=e)&&n.type.$$typeof)===Oy?Fy:"$$typeof"in e?ob[e.$$typeof]:rb;var n}var sb=Object.defineProperty,ab=Object.getOwnPropertyNames,og=Object.getOwnPropertySymbols,lb=Object.getOwnPropertyDescriptor,ub=Object.getPrototypeOf,sg=Object.prototype;function Ny(e,n,i){if(typeof n!="string"){if(sg){var o=ub(n);o&&o!==sg&&Ny(e,o,i)}var a=ab(n);og&&(a=a.concat(og(n)));for(var u=ig(e),c=ig(n),d=0;d<a.length;++d){var p=a[d];if(!(p in ib||i&&i[p]||c&&p in c||u&&p in u)){var m=lb(n,p);try{sb(e,p,m)}catch{}}}}return e}function Or(e){return typeof e=="function"}function ef(e){return typeof e=="object"&&"styledComponentId"in e}function Ar(e,n){return e&&n?"".concat(e," ").concat(n):e||n||""}function hd(e,n){if(e.length===0)return"";for(var i=e[0],o=1;o<e.length;o++)i+=e[o];return i}function Go(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function md(e,n,i){if(i===void 0&&(i=!1),!i&&!Go(e)&&!Array.isArray(e))return n;if(Array.isArray(n))for(var o=0;o<n.length;o++)e[o]=md(e[o],n[o]);else if(Go(n))for(var o in n)e[o]=md(e[o],n[o]);return e}function tf(e,n){Object.defineProperty(e,"toString",{value:n})}function Fr(e){for(var n=[],i=1;i<arguments.length;i++)n[i-1]=arguments[i];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(n.length>0?" Args: ".concat(n.join(", ")):""))}var cb=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}return e.prototype.indexOfGroup=function(n){for(var i=0,o=0;o<n;o++)i+=this.groupSizes[o];return i},e.prototype.insertRules=function(n,i){if(n>=this.groupSizes.length){for(var o=this.groupSizes,a=o.length,u=a;n>=u;)if((u<<=1)<0)throw Fr(16,"".concat(n));this.groupSizes=new Uint32Array(u),this.groupSizes.set(o),this.length=u;for(var c=a;c<u;c++)this.groupSizes[c]=0}for(var d=this.indexOfGroup(n+1),p=(c=0,i.length);c<p;c++)this.tag.insertRule(d,i[c])&&(this.groupSizes[n]++,d++)},e.prototype.clearGroup=function(n){if(n<this.length){var i=this.groupSizes[n],o=this.indexOfGroup(n),a=o+i;this.groupSizes[n]=0;for(var u=o;u<a;u++)this.tag.deleteRule(o)}},e.prototype.getGroup=function(n){var i="";if(n>=this.length||this.groupSizes[n]===0)return i;for(var o=this.groupSizes[n],a=this.indexOfGroup(n),u=a+o,c=a;c<u;c++)i+="".concat(this.tag.getRule(c)).concat(Zd);return i},e}(),Wa=new Map,il=new Map,Ha=1,Ca=function(e){if(Wa.has(e))return Wa.get(e);for(;il.has(Ha);)Ha++;var n=Ha++;return Wa.set(e,n),il.set(n,e),n},db=function(e,n){Ha=n+1,Wa.set(e,n),il.set(n,e)},fb="style[".concat(Ai,"][").concat(Dy,'="').concat(vl,'"]'),pb=new RegExp("^".concat(Ai,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),hb=function(e,n,i){for(var o,a=i.split(","),u=0,c=a.length;u<c;u++)(o=a[u])&&e.registerName(n,o)},mb=function(e,n){for(var i,o=((i=n.textContent)!==null&&i!==void 0?i:"").split(Zd),a=[],u=0,c=o.length;u<c;u++){var d=o[u].trim();if(d){var p=d.match(pb);if(p){var m=0|parseInt(p[1],10),g=p[2];m!==0&&(db(g,m),hb(e,g,p[3]),e.getTag().insertRules(m,a)),a.length=0}else a.push(d)}}},ag=function(e){for(var n=document.querySelectorAll(fb),i=0,o=n.length;i<o;i++){var a=n[i];a&&a.getAttribute(Ai)!==Ay&&(mb(e,a),a.parentNode&&a.parentNode.removeChild(a))}};function gb(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Vy=function(e){var n=document.head,i=e||n,o=document.createElement("style"),a=function(d){var p=Array.from(d.querySelectorAll("style[".concat(Ai,"]")));return p[p.length-1]}(i),u=a!==void 0?a.nextSibling:null;o.setAttribute(Ai,Ay),o.setAttribute(Dy,vl);var c=gb();return c&&o.setAttribute("nonce",c),i.insertBefore(o,u),o},yb=function(){function e(n){this.element=Vy(n),this.element.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var o=document.styleSheets,a=0,u=o.length;a<u;a++){var c=o[a];if(c.ownerNode===i)return c}throw Fr(17)}(this.element),this.length=0}return e.prototype.insertRule=function(n,i){try{return this.sheet.insertRule(i,n),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},e.prototype.getRule=function(n){var i=this.sheet.cssRules[n];return i&&i.cssText?i.cssText:""},e}(),xb=function(){function e(n){this.element=Vy(n),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(n,i){if(n<=this.length&&n>=0){var o=document.createTextNode(i);return this.element.insertBefore(o,this.nodes[n]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},e.prototype.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),vb=function(){function e(n){this.rules=[],this.length=0}return e.prototype.insertRule=function(n,i){return n<=this.length&&(this.rules.splice(n,0,i),this.length++,!0)},e.prototype.deleteRule=function(n){this.rules.splice(n,1),this.length--},e.prototype.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),lg=rl,wb={isServer:!rl,useCSSOMInjection:!XS},ol=function(){function e(n,i,o){n===void 0&&(n=Di),i===void 0&&(i={});var a=this;this.options=tt(tt({},wb),n),this.gs=i,this.names=new Map(o),this.server=!!n.isServer,!this.server&&rl&&lg&&(lg=!1,ag(this)),tf(this,function(){return function(u){for(var c=u.getTag(),d=c.length,p="",m=function(x){var w=function(P){return il.get(P)}(x);if(w===void 0)return"continue";var S=u.names.get(w),k=c.getGroup(x);if(S===void 0||!S.size||k.length===0)return"continue";var T="".concat(Ai,".g").concat(x,'[id="').concat(w,'"]'),E="";S!==void 0&&S.forEach(function(P){P.length>0&&(E+="".concat(P,","))}),p+="".concat(k).concat(T,'{content:"').concat(E,'"}').concat(Zd)},g=0;g<d;g++)m(g);return p}(a)})}return e.registerId=function(n){return Ca(n)},e.prototype.rehydrate=function(){!this.server&&rl&&ag(this)},e.prototype.reconstructWithOptions=function(n,i){return i===void 0&&(i=!0),new e(tt(tt({},this.options),n),this.gs,i&&this.names||void 0)},e.prototype.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(n=function(i){var o=i.useCSSOMInjection,a=i.target;return i.isServer?new vb(a):o?new yb(a):new xb(a)}(this.options),new cb(n)));var n},e.prototype.hasNameForId=function(n,i){return this.names.has(n)&&this.names.get(n).has(i)},e.prototype.registerName=function(n,i){if(Ca(n),this.names.has(n))this.names.get(n).add(i);else{var o=new Set;o.add(i),this.names.set(n,o)}},e.prototype.insertRules=function(n,i,o){this.registerName(n,i),this.getTag().insertRules(Ca(n),o)},e.prototype.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},e.prototype.clearRules=function(n){this.getTag().clearGroup(Ca(n)),this.clearNames(n)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Sb=/&/g,bb=/^\s*\/\/.*$/gm;function zy(e,n){return e.map(function(i){return i.type==="rule"&&(i.value="".concat(n," ").concat(i.value),i.value=i.value.replaceAll(",",",".concat(n," ")),i.props=i.props.map(function(o){return"".concat(n," ").concat(o)})),Array.isArray(i.children)&&i.type!=="@keyframes"&&(i.children=zy(i.children,n)),i})}function kb(e){var n,i,o,a=Di,u=a.options,c=u===void 0?Di:u,d=a.plugins,p=d===void 0?wl:d,m=function(w,S,k){return k.startsWith(i)&&k.endsWith(i)&&k.replaceAll(i,"").length>0?".".concat(n):w},g=p.slice();g.push(function(w){w.type===ml&&w.value.includes("&")&&(w.props[0]=w.props[0].replace(Sb,i).replace(o,m))}),c.prefix&&g.push(YS),g.push(HS);var x=function(w,S,k,T){S===void 0&&(S=""),k===void 0&&(k=""),T===void 0&&(T="&"),n=T,i=S,o=new RegExp("\\".concat(i,"\\b"),"g");var E=w.replace(bb,""),P=US(k||S?"".concat(k," ").concat(S," { ").concat(E," }"):E);c.namespace&&(P=zy(P,c.namespace));var L=[];return nl(P,KS(g.concat(GS(function(A){return L.push(A)})))),L};return x.hash=p.length?p.reduce(function(w,S){return S.name||Fr(15),bi(w,S.name)},$y).toString():"",x}var Eb=new ol,gd=kb(),Uy=tn.createContext({shouldForwardProp:void 0,styleSheet:Eb,stylis:gd});Uy.Consumer;tn.createContext(void 0);function yd(){return b.useContext(Uy)}var Cb=function(){function e(n,i){var o=this;this.inject=function(a,u){u===void 0&&(u=gd);var c=o.name+u.hash;a.hasNameForId(o.id,c)||a.insertRules(o.id,c,u(o.rules,c,"@keyframes"))},this.name=n,this.id="sc-keyframes-".concat(n),this.rules=i,tf(this,function(){throw Fr(12,String(o.name))})}return e.prototype.getName=function(n){return n===void 0&&(n=gd),this.name+n.hash},e}(),Tb=function(e){return e>="A"&&e<="Z"};function ug(e){for(var n="",i=0;i<e.length;i++){var o=e[i];if(i===1&&o==="-"&&e[0]==="-")return e;Tb(o)?n+="-"+o.toLowerCase():n+=o}return n.startsWith("ms-")?"-"+n:n}var Wy=function(e){return e==null||e===!1||e===""},Hy=function(e){var n,i,o=[];for(var a in e){var u=e[a];e.hasOwnProperty(a)&&!Wy(u)&&(Array.isArray(u)&&u.isCss||Or(u)?o.push("".concat(ug(a),":"),u,";"):Go(u)?o.push.apply(o,Ko(Ko(["".concat(a," {")],Hy(u),!1),["}"],!1)):o.push("".concat(ug(a),": ").concat((n=a,(i=u)==null||typeof i=="boolean"||i===""?"":typeof i!="number"||i===0||n in qS||n.startsWith("--")?String(i).trim():"".concat(i,"px")),";")))}return o};function ar(e,n,i,o){if(Wy(e))return[];if(ef(e))return[".".concat(e.styledComponentId)];if(Or(e)){if(!Or(u=e)||u.prototype&&u.prototype.isReactComponent||!n)return[e];var a=e(n);return ar(a,n,i,o)}var u;return e instanceof Cb?i?(e.inject(i,o),[e.getName(o)]):[e]:Go(e)?Hy(e):Array.isArray(e)?Array.prototype.concat.apply(wl,e.map(function(c){return ar(c,n,i,o)})):[e.toString()]}function Ky(e){for(var n=0;n<e.length;n+=1){var i=e[n];if(Or(i)&&!ef(i))return!1}return!0}var Pb=My(vl),jb=function(){function e(n,i,o){this.rules=n,this.staticRulesId="",this.isStatic=(o===void 0||o.isStatic)&&Ky(n),this.componentId=i,this.baseHash=bi(Pb,i),this.baseStyle=o,ol.registerId(i)}return e.prototype.generateAndInjectStyles=function(n,i,o){var a=this.baseStyle?this.baseStyle.generateAndInjectStyles(n,i,o):"";if(this.isStatic&&!o.hash)if(this.staticRulesId&&i.hasNameForId(this.componentId,this.staticRulesId))a=Ar(a,this.staticRulesId);else{var u=hd(ar(this.rules,n,i,o)),c=pd(bi(this.baseHash,u)>>>0);if(!i.hasNameForId(this.componentId,c)){var d=o(u,".".concat(c),void 0,this.componentId);i.insertRules(this.componentId,c,d)}a=Ar(a,c),this.staticRulesId=c}else{for(var p=bi(this.baseHash,o.hash),m="",g=0;g<this.rules.length;g++){var x=this.rules[g];if(typeof x=="string")m+=x;else if(x){var w=hd(ar(x,n,i,o));p=bi(p,w+g),m+=w}}if(m){var S=pd(p>>>0);i.hasNameForId(this.componentId,S)||i.insertRules(this.componentId,S,o(m,".".concat(S),void 0,this.componentId)),a=Ar(a,S)}}return a},e}(),Yo=tn.createContext(void 0);Yo.Consumer;function Rb(e){var n=tn.useContext(Yo),i=b.useMemo(function(){return function(o,a){if(!o)throw Fr(14);if(Or(o)){var u=o(a);return u}if(Array.isArray(o)||typeof o!="object")throw Fr(8);return a?tt(tt({},a),o):o}(e.theme,n)},[e.theme,n]);return e.children?tn.createElement(Yo.Provider,{value:i},e.children):null}var Bc={};function Ab(e,n,i){var o=ef(e),a=e,u=!_c(e),c=n.attrs,d=c===void 0?wl:c,p=n.componentId,m=p===void 0?function(F,O){var V=typeof F!="string"?"sc":ng(F);Bc[V]=(Bc[V]||0)+1;var W="".concat(V,"-").concat(_y(vl+V+Bc[V]));return O?"".concat(O,"-").concat(W):W}(n.displayName,n.parentComponentId):p,g=n.displayName,x=g===void 0?function(F){return _c(F)?"styled.".concat(F):"Styled(".concat(tb(F),")")}(e):g,w=n.displayName&&n.componentId?"".concat(ng(n.displayName),"-").concat(n.componentId):n.componentId||m,S=o&&a.attrs?a.attrs.concat(d).filter(Boolean):d,k=n.shouldForwardProp;if(o&&a.shouldForwardProp){var T=a.shouldForwardProp;if(n.shouldForwardProp){var E=n.shouldForwardProp;k=function(F,O){return T(F,O)&&E(F,O)}}else k=T}var P=new jb(i,w,o?a.componentStyle:void 0);function L(F,O){return function(V,W,H){var Q=V.attrs,ae=V.componentStyle,se=V.defaultProps,Te=V.foldedComponentIds,He=V.styledComponentId,ut=V.target,Rt=tn.useContext(Yo),nt=yd(),ce=V.shouldForwardProp||nt.shouldForwardProp,q=Iy(W,Rt,se)||Di,te=function(ye,me,be){for(var xe,we=tt(tt({},me),{className:void 0,theme:be}),rt=0;rt<ye.length;rt+=1){var vn=Or(xe=ye[rt])?xe(we):xe;for(var Kt in vn)we[Kt]=Kt==="className"?Ar(we[Kt],vn[Kt]):Kt==="style"?tt(tt({},we[Kt]),vn[Kt]):vn[Kt]}return me.className&&(we.className=Ar(we.className,me.className)),we}(Q,W,q),X=te.as||ut,I={};for(var N in te)te[N]===void 0||N[0]==="$"||N==="as"||N==="theme"&&te.theme===q||(N==="forwardedAs"?I.as=te.forwardedAs:ce&&!ce(N,X)||(I[N]=te[N]));var de=function(ye,me){var be=yd(),xe=ye.generateAndInjectStyles(me,be.styleSheet,be.stylis);return xe}(ae,te),pe=Ar(Te,He);return de&&(pe+=" "+de),te.className&&(pe+=" "+te.className),I[_c(X)&&!Ly.has(X)?"class":"className"]=pe,H&&(I.ref=H),b.createElement(X,I)}(A,F,O)}L.displayName=x;var A=tn.forwardRef(L);return A.attrs=S,A.componentStyle=P,A.displayName=x,A.shouldForwardProp=k,A.foldedComponentIds=o?Ar(a.foldedComponentIds,a.styledComponentId):"",A.styledComponentId=w,A.target=o?a.target:e,Object.defineProperty(A,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(F){this._foldedDefaultProps=o?function(O){for(var V=[],W=1;W<arguments.length;W++)V[W-1]=arguments[W];for(var H=0,Q=V;H<Q.length;H++)md(O,Q[H],!0);return O}({},a.defaultProps,F):F}}),tf(A,function(){return".".concat(A.styledComponentId)}),u&&Ny(A,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),A}function cg(e,n){for(var i=[e[0]],o=0,a=n.length;o<a;o+=1)i.push(n[o],e[o+1]);return i}var dg=function(e){return Object.assign(e,{isCss:!0})};function Gy(e){for(var n=[],i=1;i<arguments.length;i++)n[i-1]=arguments[i];if(Or(e)||Go(e))return dg(ar(cg(wl,Ko([e],n,!0))));var o=e;return n.length===0&&o.length===1&&typeof o[0]=="string"?ar(o):dg(ar(cg(o,n)))}function xd(e,n,i){if(i===void 0&&(i=Di),!n)throw Fr(1,n);var o=function(a){for(var u=[],c=1;c<arguments.length;c++)u[c-1]=arguments[c];return e(n,i,Gy.apply(void 0,Ko([a],u,!1)))};return o.attrs=function(a){return xd(e,n,tt(tt({},i),{attrs:Array.prototype.concat(i.attrs,a).filter(Boolean)}))},o.withConfig=function(a){return xd(e,n,tt(tt({},i),a))},o}var Yy=function(e){return xd(Ab,e)},R=Yy;Ly.forEach(function(e){R[e]=Yy(e)});var Db=function(){function e(n,i){this.rules=n,this.componentId=i,this.isStatic=Ky(n),ol.registerId(this.componentId+1)}return e.prototype.createStyles=function(n,i,o,a){var u=a(hd(ar(this.rules,i,o,a)),""),c=this.componentId+n;o.insertRules(c,c,u)},e.prototype.removeStyles=function(n,i){i.clearRules(this.componentId+n)},e.prototype.renderStyles=function(n,i,o,a){n>2&&ol.registerId(this.componentId+n),this.removeStyles(n,o),this.createStyles(n,i,o,a)},e}();function Ib(e){for(var n=[],i=1;i<arguments.length;i++)n[i-1]=arguments[i];var o=Gy.apply(void 0,Ko([e],n,!1)),a="sc-global-".concat(_y(JSON.stringify(o))),u=new Db(o,a),c=function(p){var m=yd(),g=tn.useContext(Yo),x=tn.useRef(m.styleSheet.allocateGSInstance(a)).current;return m.styleSheet.server&&d(x,p,m.styleSheet,g,m.stylis),tn.useLayoutEffect(function(){if(!m.styleSheet.server)return d(x,p,m.styleSheet,g,m.stylis),function(){return u.removeStyles(x,m.styleSheet)}},[x,p,m.styleSheet,g,m.stylis]),null};function d(p,m,g,x,w){if(u.isStatic)u.renderStyles(p,QS,g,w);else{var S=tt(tt({},m),{theme:Iy(m,x,c.defaultProps)});u.renderStyles(p,S,g,w)}}return tn.memo(c)}const Lb=Ib`
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
`,$b={mode:"dark",colors:{dark:{primary:"#2563EB",secondary:"#2563EB",background:"#0A0A0A",text:"#FFFFFF",gray:"#6B7280",cardBg:"rgba(20, 20, 20, 0.95)",cardBorder:"transparent",hoverBg:"rgba(255, 255, 255, 0.1)",modalBg:"rgba(0, 0, 0, 0.85)",navBg:"rgba(20, 20, 20, 0.8)"},light:{primary:"#2563EB",secondary:"#2563EB",background:"#FFFFFF",text:"#1A1A1A",gray:"#4B5563",cardBg:"rgba(255, 255, 255, 0.95)",cardBorder:"transparent",hoverBg:"rgba(37, 99, 235, 0.05)",modalBg:"rgba(0, 0, 0, 0.5)",navBg:"rgba(255, 255, 255, 0.8)"}},breakpoints:{sm:"640px",md:"768px",lg:"1024px",xl:"1280px"}};var Do={},fg;function Mb(){if(fg)return Do;fg=1,Object.defineProperty(Do,"__esModule",{value:!0}),Do.parse=c,Do.serialize=m;const e=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,n=/^[\u0021-\u003A\u003C-\u007E]*$/,i=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,o=/^[\u0020-\u003A\u003D-\u007E]*$/,a=Object.prototype.toString,u=(()=>{const w=function(){};return w.prototype=Object.create(null),w})();function c(w,S){const k=new u,T=w.length;if(T<2)return k;const E=(S==null?void 0:S.decode)||g;let P=0;do{const L=w.indexOf("=",P);if(L===-1)break;const A=w.indexOf(";",P),F=A===-1?T:A;if(L>F){P=w.lastIndexOf(";",L-1)+1;continue}const O=d(w,P,L),V=p(w,L,O),W=w.slice(O,V);if(k[W]===void 0){let H=d(w,L+1,F),Q=p(w,F,H);const ae=E(w.slice(H,Q));k[W]=ae}P=F+1}while(P<T);return k}function d(w,S,k){do{const T=w.charCodeAt(S);if(T!==32&&T!==9)return S}while(++S<k);return k}function p(w,S,k){for(;S>k;){const T=w.charCodeAt(--S);if(T!==32&&T!==9)return S+1}return k}function m(w,S,k){const T=(k==null?void 0:k.encode)||encodeURIComponent;if(!e.test(w))throw new TypeError(`argument name is invalid: ${w}`);const E=T(S);if(!n.test(E))throw new TypeError(`argument val is invalid: ${S}`);let P=w+"="+E;if(!k)return P;if(k.maxAge!==void 0){if(!Number.isInteger(k.maxAge))throw new TypeError(`option maxAge is invalid: ${k.maxAge}`);P+="; Max-Age="+k.maxAge}if(k.domain){if(!i.test(k.domain))throw new TypeError(`option domain is invalid: ${k.domain}`);P+="; Domain="+k.domain}if(k.path){if(!o.test(k.path))throw new TypeError(`option path is invalid: ${k.path}`);P+="; Path="+k.path}if(k.expires){if(!x(k.expires)||!Number.isFinite(k.expires.valueOf()))throw new TypeError(`option expires is invalid: ${k.expires}`);P+="; Expires="+k.expires.toUTCString()}if(k.httpOnly&&(P+="; HttpOnly"),k.secure&&(P+="; Secure"),k.partitioned&&(P+="; Partitioned"),k.priority)switch(typeof k.priority=="string"?k.priority.toLowerCase():void 0){case"low":P+="; Priority=Low";break;case"medium":P+="; Priority=Medium";break;case"high":P+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${k.priority}`)}if(k.sameSite)switch(typeof k.sameSite=="string"?k.sameSite.toLowerCase():k.sameSite){case!0:case"strict":P+="; SameSite=Strict";break;case"lax":P+="; SameSite=Lax";break;case"none":P+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${k.sameSite}`)}return P}function g(w){if(w.indexOf("%")===-1)return w;try{return decodeURIComponent(w)}catch{return w}}function x(w){return a.call(w)==="[object Date]"}return Do}Mb();/**
 * react-router v7.2.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var pg="popstate";function _b(e={}){function n(o,a){let{pathname:u,search:c,hash:d}=o.location;return vd("",{pathname:u,search:c,hash:d},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function i(o,a){return typeof a=="string"?a:qo(a)}return Ob(n,i,null,e)}function Le(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function rn(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function Bb(){return Math.random().toString(36).substring(2,10)}function hg(e,n){return{usr:e.state,key:e.key,idx:n}}function vd(e,n,i=null,o){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof n=="string"?Mi(n):n,state:i,key:n&&n.key||o||Bb()}}function qo({pathname:e="/",search:n="",hash:i=""}){return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function Mi(e){let n={};if(e){let i=e.indexOf("#");i>=0&&(n.hash=e.substring(i),e=e.substring(0,i));let o=e.indexOf("?");o>=0&&(n.search=e.substring(o),e=e.substring(0,o)),e&&(n.pathname=e)}return n}function Ob(e,n,i,o={}){let{window:a=document.defaultView,v5Compat:u=!1}=o,c=a.history,d="POP",p=null,m=g();m==null&&(m=0,c.replaceState({...c.state,idx:m},""));function g(){return(c.state||{idx:null}).idx}function x(){d="POP";let E=g(),P=E==null?null:E-m;m=E,p&&p({action:d,location:T.location,delta:P})}function w(E,P){d="PUSH";let L=vd(T.location,E,P);m=g()+1;let A=hg(L,m),F=T.createHref(L);try{c.pushState(A,"",F)}catch(O){if(O instanceof DOMException&&O.name==="DataCloneError")throw O;a.location.assign(F)}u&&p&&p({action:d,location:T.location,delta:1})}function S(E,P){d="REPLACE";let L=vd(T.location,E,P);m=g();let A=hg(L,m),F=T.createHref(L);c.replaceState(A,"",F),u&&p&&p({action:d,location:T.location,delta:0})}function k(E){let P=a.location.origin!=="null"?a.location.origin:a.location.href,L=typeof E=="string"?E:qo(E);return L=L.replace(/ $/,"%20"),Le(P,`No window.location.(origin|href) available to create URL for href: ${L}`),new URL(L,P)}let T={get action(){return d},get location(){return e(a,c)},listen(E){if(p)throw new Error("A history only accepts one active listener");return a.addEventListener(pg,x),p=E,()=>{a.removeEventListener(pg,x),p=null}},createHref(E){return n(a,E)},createURL:k,encodeLocation(E){let P=k(E);return{pathname:P.pathname,search:P.search,hash:P.hash}},push:w,replace:S,go(E){return c.go(E)}};return T}function qy(e,n,i="/"){return Fb(e,n,i,!1)}function Fb(e,n,i,o){let a=typeof n=="string"?Mi(n):n,u=lr(a.pathname||"/",i);if(u==null)return null;let c=Xy(e);Nb(c);let d=null;for(let p=0;d==null&&p<c.length;++p){let m=Qb(u);d=qb(c[p],m,o)}return d}function Xy(e,n=[],i=[],o=""){let a=(u,c,d)=>{let p={relativePath:d===void 0?u.path||"":d,caseSensitive:u.caseSensitive===!0,childrenIndex:c,route:u};p.relativePath.startsWith("/")&&(Le(p.relativePath.startsWith(o),`Absolute route path "${p.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(o.length));let m=An([o,p.relativePath]),g=i.concat(p);u.children&&u.children.length>0&&(Le(u.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${m}".`),Xy(u.children,n,g,m)),!(u.path==null&&!u.index)&&n.push({path:m,score:Gb(m,u.index),routesMeta:g})};return e.forEach((u,c)=>{var d;if(u.path===""||!((d=u.path)!=null&&d.includes("?")))a(u,c);else for(let p of Qy(u.path))a(u,c,p)}),n}function Qy(e){let n=e.split("/");if(n.length===0)return[];let[i,...o]=n,a=i.endsWith("?"),u=i.replace(/\?$/,"");if(o.length===0)return a?[u,""]:[u];let c=Qy(o.join("/")),d=[];return d.push(...c.map(p=>p===""?u:[u,p].join("/"))),a&&d.push(...c),d.map(p=>e.startsWith("/")&&p===""?"/":p)}function Nb(e){e.sort((n,i)=>n.score!==i.score?i.score-n.score:Yb(n.routesMeta.map(o=>o.childrenIndex),i.routesMeta.map(o=>o.childrenIndex)))}var Vb=/^:[\w-]+$/,zb=3,Ub=2,Wb=1,Hb=10,Kb=-2,mg=e=>e==="*";function Gb(e,n){let i=e.split("/"),o=i.length;return i.some(mg)&&(o+=Kb),n&&(o+=Ub),i.filter(a=>!mg(a)).reduce((a,u)=>a+(Vb.test(u)?zb:u===""?Wb:Hb),o)}function Yb(e,n){return e.length===n.length&&e.slice(0,-1).every((o,a)=>o===n[a])?e[e.length-1]-n[n.length-1]:0}function qb(e,n,i=!1){let{routesMeta:o}=e,a={},u="/",c=[];for(let d=0;d<o.length;++d){let p=o[d],m=d===o.length-1,g=u==="/"?n:n.slice(u.length)||"/",x=sl({path:p.relativePath,caseSensitive:p.caseSensitive,end:m},g),w=p.route;if(!x&&m&&i&&!o[o.length-1].route.index&&(x=sl({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},g)),!x)return null;Object.assign(a,x.params),c.push({params:a,pathname:An([u,x.pathname]),pathnameBase:t2(An([u,x.pathnameBase])),route:w}),x.pathnameBase!=="/"&&(u=An([u,x.pathnameBase]))}return c}function sl(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[i,o]=Xb(e.path,e.caseSensitive,e.end),a=n.match(i);if(!a)return null;let u=a[0],c=u.replace(/(.)\/+$/,"$1"),d=a.slice(1);return{params:o.reduce((m,{paramName:g,isOptional:x},w)=>{if(g==="*"){let k=d[w]||"";c=u.slice(0,u.length-k.length).replace(/(.)\/+$/,"$1")}const S=d[w];return x&&!S?m[g]=void 0:m[g]=(S||"").replace(/%2F/g,"/"),m},{}),pathname:u,pathnameBase:c,pattern:e}}function Xb(e,n=!1,i=!0){rn(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let o=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,d,p)=>(o.push({paramName:d,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(o.push({paramName:"*"}),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,n?void 0:"i"),o]}function Qb(e){try{return e.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return rn(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${n}).`),e}}function lr(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let i=n.endsWith("/")?n.length-1:n.length,o=e.charAt(i);return o&&o!=="/"?null:e.slice(i)||"/"}function Jb(e,n="/"){let{pathname:i,search:o="",hash:a=""}=typeof e=="string"?Mi(e):e;return{pathname:i?i.startsWith("/")?i:Zb(i,n):n,search:n2(o),hash:r2(a)}}function Zb(e,n){let i=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?i.length>1&&i.pop():a!=="."&&i.push(a)}),i.length>1?i.join("/"):"/"}function Oc(e,n,i,o){return`Cannot include a '${e}' character in a manually specified \`to.${n}\` field [${JSON.stringify(o)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function e2(e){return e.filter((n,i)=>i===0||n.route.path&&n.route.path.length>0)}function nf(e){let n=e2(e);return n.map((i,o)=>o===n.length-1?i.pathname:i.pathnameBase)}function rf(e,n,i,o=!1){let a;typeof e=="string"?a=Mi(e):(a={...e},Le(!a.pathname||!a.pathname.includes("?"),Oc("?","pathname","search",a)),Le(!a.pathname||!a.pathname.includes("#"),Oc("#","pathname","hash",a)),Le(!a.search||!a.search.includes("#"),Oc("#","search","hash",a)));let u=e===""||a.pathname==="",c=u?"/":a.pathname,d;if(c==null)d=i;else{let x=n.length-1;if(!o&&c.startsWith("..")){let w=c.split("/");for(;w[0]==="..";)w.shift(),x-=1;a.pathname=w.join("/")}d=x>=0?n[x]:"/"}let p=Jb(a,d),m=c&&c!=="/"&&c.endsWith("/"),g=(u||c===".")&&i.endsWith("/");return!p.pathname.endsWith("/")&&(m||g)&&(p.pathname+="/"),p}var An=e=>e.join("/").replace(/\/\/+/g,"/"),t2=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),n2=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,r2=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function i2(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}var Jy=["POST","PUT","PATCH","DELETE"];new Set(Jy);var o2=["GET",...Jy];new Set(o2);var _i=b.createContext(null);_i.displayName="DataRouter";var Sl=b.createContext(null);Sl.displayName="DataRouterState";var Zy=b.createContext({isTransitioning:!1});Zy.displayName="ViewTransition";var s2=b.createContext(new Map);s2.displayName="Fetchers";var a2=b.createContext(null);a2.displayName="Await";var on=b.createContext(null);on.displayName="Navigation";var os=b.createContext(null);os.displayName="Location";var xn=b.createContext({outlet:null,matches:[],isDataRoute:!1});xn.displayName="Route";var of=b.createContext(null);of.displayName="RouteError";function l2(e,{relative:n}={}){Le(Bi(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:o}=b.useContext(on),{hash:a,pathname:u,search:c}=ss(e,{relative:n}),d=u;return i!=="/"&&(d=u==="/"?i:An([i,u])),o.createHref({pathname:d,search:c,hash:a})}function Bi(){return b.useContext(os)!=null}function Ht(){return Le(Bi(),"useLocation() may be used only in the context of a <Router> component."),b.useContext(os).location}var ex="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function tx(e){b.useContext(on).static||b.useLayoutEffect(e)}function Oi(){let{isDataRoute:e}=b.useContext(xn);return e?S2():u2()}function u2(){Le(Bi(),"useNavigate() may be used only in the context of a <Router> component.");let e=b.useContext(_i),{basename:n,navigator:i}=b.useContext(on),{matches:o}=b.useContext(xn),{pathname:a}=Ht(),u=JSON.stringify(nf(o)),c=b.useRef(!1);return tx(()=>{c.current=!0}),b.useCallback((p,m={})=>{if(rn(c.current,ex),!c.current)return;if(typeof p=="number"){i.go(p);return}let g=rf(p,JSON.parse(u),a,m.relative==="path");e==null&&n!=="/"&&(g.pathname=g.pathname==="/"?n:An([n,g.pathname])),(m.replace?i.replace:i.push)(g,m.state,m)},[n,i,u,a,e])}b.createContext(null);function ss(e,{relative:n}={}){let{matches:i}=b.useContext(xn),{pathname:o}=Ht(),a=JSON.stringify(nf(i));return b.useMemo(()=>rf(e,JSON.parse(a),o,n==="path"),[e,a,o,n])}function c2(e,n){return nx(e,n)}function nx(e,n,i,o){var L;Le(Bi(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:a,static:u}=b.useContext(on),{matches:c}=b.useContext(xn),d=c[c.length-1],p=d?d.params:{},m=d?d.pathname:"/",g=d?d.pathnameBase:"/",x=d&&d.route;{let A=x&&x.path||"";rx(m,!x||A.endsWith("*")||A.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${A}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${A}"> to <Route path="${A==="/"?"*":`${A}/*`}">.`)}let w=Ht(),S;if(n){let A=typeof n=="string"?Mi(n):n;Le(g==="/"||((L=A.pathname)==null?void 0:L.startsWith(g)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${A.pathname}" was given in the \`location\` prop.`),S=A}else S=w;let k=S.pathname||"/",T=k;if(g!=="/"){let A=g.replace(/^\//,"").split("/");T="/"+k.replace(/^\//,"").split("/").slice(A.length).join("/")}let E=!u&&i&&i.matches&&i.matches.length>0?i.matches:qy(e,{pathname:T});rn(x||E!=null,`No routes matched location "${S.pathname}${S.search}${S.hash}" `),rn(E==null||E[E.length-1].route.element!==void 0||E[E.length-1].route.Component!==void 0||E[E.length-1].route.lazy!==void 0,`Matched leaf route at location "${S.pathname}${S.search}${S.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let P=m2(E&&E.map(A=>Object.assign({},A,{params:Object.assign({},p,A.params),pathname:An([g,a.encodeLocation?a.encodeLocation(A.pathname).pathname:A.pathname]),pathnameBase:A.pathnameBase==="/"?g:An([g,a.encodeLocation?a.encodeLocation(A.pathnameBase).pathname:A.pathnameBase])})),c,i,o);return n&&P?b.createElement(os.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...S},navigationType:"POP"}},P):P}function d2(){let e=w2(),n=i2(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),i=e instanceof Error?e.stack:null,o="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:o},u={padding:"2px 4px",backgroundColor:o},c=null;return console.error("Error handled by React Router default ErrorBoundary:",e),c=b.createElement(b.Fragment,null,b.createElement("p",null,"💿 Hey developer 👋"),b.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",b.createElement("code",{style:u},"ErrorBoundary")," or"," ",b.createElement("code",{style:u},"errorElement")," prop on your route.")),b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},n),i?b.createElement("pre",{style:a},i):null,c)}var f2=b.createElement(d2,null),p2=class extends b.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?b.createElement(xn.Provider,{value:this.props.routeContext},b.createElement(of.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function h2({routeContext:e,match:n,children:i}){let o=b.useContext(_i);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),b.createElement(xn.Provider,{value:e},i)}function m2(e,n=[],i=null,o=null){if(e==null){if(!i)return null;if(i.errors)e=i.matches;else if(n.length===0&&!i.initialized&&i.matches.length>0)e=i.matches;else return null}let a=e,u=i==null?void 0:i.errors;if(u!=null){let p=a.findIndex(m=>m.route.id&&(u==null?void 0:u[m.route.id])!==void 0);Le(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),a=a.slice(0,Math.min(a.length,p+1))}let c=!1,d=-1;if(i)for(let p=0;p<a.length;p++){let m=a[p];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(d=p),m.route.id){let{loaderData:g,errors:x}=i,w=m.route.loader&&!g.hasOwnProperty(m.route.id)&&(!x||x[m.route.id]===void 0);if(m.route.lazy||w){c=!0,d>=0?a=a.slice(0,d+1):a=[a[0]];break}}}return a.reduceRight((p,m,g)=>{let x,w=!1,S=null,k=null;i&&(x=u&&m.route.id?u[m.route.id]:void 0,S=m.route.errorElement||f2,c&&(d<0&&g===0?(rx("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),w=!0,k=null):d===g&&(w=!0,k=m.route.hydrateFallbackElement||null)));let T=n.concat(a.slice(0,g+1)),E=()=>{let P;return x?P=S:w?P=k:m.route.Component?P=b.createElement(m.route.Component,null):m.route.element?P=m.route.element:P=p,b.createElement(h2,{match:m,routeContext:{outlet:p,matches:T,isDataRoute:i!=null},children:P})};return i&&(m.route.ErrorBoundary||m.route.errorElement||g===0)?b.createElement(p2,{location:i.location,revalidation:i.revalidation,component:S,error:x,children:E(),routeContext:{outlet:null,matches:T,isDataRoute:!0}}):E()},null)}function sf(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function g2(e){let n=b.useContext(_i);return Le(n,sf(e)),n}function y2(e){let n=b.useContext(Sl);return Le(n,sf(e)),n}function x2(e){let n=b.useContext(xn);return Le(n,sf(e)),n}function af(e){let n=x2(e),i=n.matches[n.matches.length-1];return Le(i.route.id,`${e} can only be used on routes that contain a unique "id"`),i.route.id}function v2(){return af("useRouteId")}function w2(){var o;let e=b.useContext(of),n=y2("useRouteError"),i=af("useRouteError");return e!==void 0?e:(o=n.errors)==null?void 0:o[i]}function S2(){let{router:e}=g2("useNavigate"),n=af("useNavigate"),i=b.useRef(!1);return tx(()=>{i.current=!0}),b.useCallback(async(a,u={})=>{rn(i.current,ex),i.current&&(typeof a=="number"?e.navigate(a):await e.navigate(a,{fromRouteId:n,...u}))},[e,n])}var gg={};function rx(e,n,i){!n&&!gg[e]&&(gg[e]=!0,rn(!1,i))}b.memo(b2);function b2({routes:e,future:n,state:i}){return nx(e,void 0,i,n)}function ix({to:e,replace:n,state:i,relative:o}){Le(Bi(),"<Navigate> may be used only in the context of a <Router> component.");let{static:a}=b.useContext(on);rn(!a,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:u}=b.useContext(xn),{pathname:c}=Ht(),d=Oi(),p=rf(e,nf(u),c,o==="path"),m=JSON.stringify(p);return b.useEffect(()=>{d(JSON.parse(m),{replace:n,state:i,relative:o})},[d,m,o,n,i]),null}function pn(e){Le(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function k2({basename:e="/",children:n=null,location:i,navigationType:o="POP",navigator:a,static:u=!1}){Le(!Bi(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let c=e.replace(/^\/*/,"/"),d=b.useMemo(()=>({basename:c,navigator:a,static:u,future:{}}),[c,a,u]);typeof i=="string"&&(i=Mi(i));let{pathname:p="/",search:m="",hash:g="",state:x=null,key:w="default"}=i,S=b.useMemo(()=>{let k=lr(p,c);return k==null?null:{location:{pathname:k,search:m,hash:g,state:x,key:w},navigationType:o}},[c,p,m,g,x,w,o]);return rn(S!=null,`<Router basename="${c}"> is not able to match the URL "${p}${m}${g}" because it does not start with the basename, so the <Router> won't render anything.`),S==null?null:b.createElement(on.Provider,{value:d},b.createElement(os.Provider,{children:n,value:S}))}function E2({children:e,location:n}){return c2(wd(e),n)}function wd(e,n=[]){let i=[];return b.Children.forEach(e,(o,a)=>{if(!b.isValidElement(o))return;let u=[...n,a];if(o.type===b.Fragment){i.push.apply(i,wd(o.props.children,u));return}Le(o.type===pn,`[${typeof o.type=="string"?o.type:o.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Le(!o.props.index||!o.props.children,"An index route cannot have child routes.");let c={id:o.props.id||u.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,loader:o.props.loader,action:o.props.action,hydrateFallbackElement:o.props.hydrateFallbackElement,HydrateFallback:o.props.HydrateFallback,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.hasErrorBoundary===!0||o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(c.children=wd(o.props.children,u)),i.push(c)}),i}var Ka="get",Ga="application/x-www-form-urlencoded";function bl(e){return e!=null&&typeof e.tagName=="string"}function C2(e){return bl(e)&&e.tagName.toLowerCase()==="button"}function T2(e){return bl(e)&&e.tagName.toLowerCase()==="form"}function P2(e){return bl(e)&&e.tagName.toLowerCase()==="input"}function j2(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function R2(e,n){return e.button===0&&(!n||n==="_self")&&!j2(e)}var Ta=null;function A2(){if(Ta===null)try{new FormData(document.createElement("form"),0),Ta=!1}catch{Ta=!0}return Ta}var D2=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Fc(e){return e!=null&&!D2.has(e)?(rn(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ga}"`),null):e}function I2(e,n){let i,o,a,u,c;if(T2(e)){let d=e.getAttribute("action");o=d?lr(d,n):null,i=e.getAttribute("method")||Ka,a=Fc(e.getAttribute("enctype"))||Ga,u=new FormData(e)}else if(C2(e)||P2(e)&&(e.type==="submit"||e.type==="image")){let d=e.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=e.getAttribute("formaction")||d.getAttribute("action");if(o=p?lr(p,n):null,i=e.getAttribute("formmethod")||d.getAttribute("method")||Ka,a=Fc(e.getAttribute("formenctype"))||Fc(d.getAttribute("enctype"))||Ga,u=new FormData(d,e),!A2()){let{name:m,type:g,value:x}=e;if(g==="image"){let w=m?`${m}.`:"";u.append(`${w}x`,"0"),u.append(`${w}y`,"0")}else m&&u.append(m,x)}}else{if(bl(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=Ka,o=null,a=Ga,c=e}return u&&a==="text/plain"&&(c=u,u=void 0),{action:o,method:i.toLowerCase(),encType:a,formData:u,body:c}}function lf(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}async function L2(e,n){if(e.id in n)return n[e.id];try{let i=await import(e.module);return n[e.id]=i,i}catch(i){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function $2(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function M2(e,n,i){let o=await Promise.all(e.map(async a=>{let u=n.routes[a.route.id];if(u){let c=await L2(u,i);return c.links?c.links():[]}return[]}));return F2(o.flat(1).filter($2).filter(a=>a.rel==="stylesheet"||a.rel==="preload").map(a=>a.rel==="stylesheet"?{...a,rel:"prefetch",as:"style"}:{...a,rel:"prefetch"}))}function yg(e,n,i,o,a,u){let c=(p,m)=>i[m]?p.route.id!==i[m].route.id:!0,d=(p,m)=>{var g;return i[m].pathname!==p.pathname||((g=i[m].route.path)==null?void 0:g.endsWith("*"))&&i[m].params["*"]!==p.params["*"]};return u==="assets"?n.filter((p,m)=>c(p,m)||d(p,m)):u==="data"?n.filter((p,m)=>{var x;let g=o.routes[p.route.id];if(!g||!g.hasLoader)return!1;if(c(p,m)||d(p,m))return!0;if(p.route.shouldRevalidate){let w=p.route.shouldRevalidate({currentUrl:new URL(a.pathname+a.search+a.hash,window.origin),currentParams:((x=i[0])==null?void 0:x.params)||{},nextUrl:new URL(e,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof w=="boolean")return w}return!0}):[]}function _2(e,n,{includeHydrateFallback:i}={}){return B2(e.map(o=>{let a=n.routes[o.route.id];if(!a)return[];let u=[a.module];return a.clientActionModule&&(u=u.concat(a.clientActionModule)),a.clientLoaderModule&&(u=u.concat(a.clientLoaderModule)),i&&a.hydrateFallbackModule&&(u=u.concat(a.hydrateFallbackModule)),a.imports&&(u=u.concat(a.imports)),u}).flat(1))}function B2(e){return[...new Set(e)]}function O2(e){let n={},i=Object.keys(e).sort();for(let o of i)n[o]=e[o];return n}function F2(e,n){let i=new Set;return new Set(n),e.reduce((o,a)=>{let u=JSON.stringify(O2(a));return i.has(u)||(i.add(u),o.push({key:u,link:a})),o},[])}function N2(e){let n=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return n.pathname==="/"?n.pathname="_root.data":n.pathname=`${n.pathname.replace(/\/$/,"")}.data`,n}function V2(){let e=b.useContext(_i);return lf(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function z2(){let e=b.useContext(Sl);return lf(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var uf=b.createContext(void 0);uf.displayName="FrameworkContext";function ox(){let e=b.useContext(uf);return lf(e,"You must render this element inside a <HydratedRouter> element"),e}function U2(e,n){let i=b.useContext(uf),[o,a]=b.useState(!1),[u,c]=b.useState(!1),{onFocus:d,onBlur:p,onMouseEnter:m,onMouseLeave:g,onTouchStart:x}=n,w=b.useRef(null);b.useEffect(()=>{if(e==="render"&&c(!0),e==="viewport"){let T=P=>{P.forEach(L=>{c(L.isIntersecting)})},E=new IntersectionObserver(T,{threshold:.5});return w.current&&E.observe(w.current),()=>{E.disconnect()}}},[e]),b.useEffect(()=>{if(o){let T=setTimeout(()=>{c(!0)},100);return()=>{clearTimeout(T)}}},[o]);let S=()=>{a(!0)},k=()=>{a(!1),c(!1)};return i?e!=="intent"?[u,w,{}]:[u,w,{onFocus:Io(d,S),onBlur:Io(p,k),onMouseEnter:Io(m,S),onMouseLeave:Io(g,k),onTouchStart:Io(x,S)}]:[!1,w,{}]}function Io(e,n){return i=>{e&&e(i),i.defaultPrevented||n(i)}}function W2({page:e,...n}){let{router:i}=V2(),o=b.useMemo(()=>qy(i.routes,e,i.basename),[i.routes,e,i.basename]);return o?b.createElement(K2,{page:e,matches:o,...n}):null}function H2(e){let{manifest:n,routeModules:i}=ox(),[o,a]=b.useState([]);return b.useEffect(()=>{let u=!1;return M2(e,n,i).then(c=>{u||a(c)}),()=>{u=!0}},[e,n,i]),o}function K2({page:e,matches:n,...i}){let o=Ht(),{manifest:a,routeModules:u}=ox(),{loaderData:c,matches:d}=z2(),p=b.useMemo(()=>yg(e,n,d,a,o,"data"),[e,n,d,a,o]),m=b.useMemo(()=>yg(e,n,d,a,o,"assets"),[e,n,d,a,o]),g=b.useMemo(()=>{if(e===o.pathname+o.search+o.hash)return[];let S=new Set,k=!1;if(n.forEach(E=>{var L;let P=a.routes[E.route.id];!P||!P.hasLoader||(!p.some(A=>A.route.id===E.route.id)&&E.route.id in c&&((L=u[E.route.id])!=null&&L.shouldRevalidate)||P.hasClientLoader?k=!0:S.add(E.route.id))}),S.size===0)return[];let T=N2(e);return k&&S.size>0&&T.searchParams.set("_routes",n.filter(E=>S.has(E.route.id)).map(E=>E.route.id).join(",")),[T.pathname+T.search]},[c,o,a,p,n,e,u]),x=b.useMemo(()=>_2(m,a),[m,a]),w=H2(m);return b.createElement(b.Fragment,null,g.map(S=>b.createElement("link",{key:S,rel:"prefetch",as:"fetch",href:S,...i})),x.map(S=>b.createElement("link",{key:S,rel:"modulepreload",href:S,...i})),w.map(({key:S,link:k})=>b.createElement("link",{key:S,...k})))}function G2(...e){return n=>{e.forEach(i=>{typeof i=="function"?i(n):i!=null&&(i.current=n)})}}var sx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{sx&&(window.__reactRouterVersion="7.2.0")}catch{}function Y2({basename:e,children:n,window:i}){let o=b.useRef();o.current==null&&(o.current=_b({window:i,v5Compat:!0}));let a=o.current,[u,c]=b.useState({action:a.action,location:a.location}),d=b.useCallback(p=>{b.startTransition(()=>c(p))},[c]);return b.useLayoutEffect(()=>a.listen(d),[a,d]),b.createElement(k2,{basename:e,children:n,location:u.location,navigationType:u.action,navigator:a})}var ax=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,cf=b.forwardRef(function({onClick:n,discover:i="render",prefetch:o="none",relative:a,reloadDocument:u,replace:c,state:d,target:p,to:m,preventScrollReset:g,viewTransition:x,...w},S){let{basename:k}=b.useContext(on),T=typeof m=="string"&&ax.test(m),E,P=!1;if(typeof m=="string"&&T&&(E=m,sx))try{let Q=new URL(window.location.href),ae=m.startsWith("//")?new URL(Q.protocol+m):new URL(m),se=lr(ae.pathname,k);ae.origin===Q.origin&&se!=null?m=se+ae.search+ae.hash:P=!0}catch{rn(!1,`<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let L=l2(m,{relative:a}),[A,F,O]=U2(o,w),V=J2(m,{replace:c,state:d,target:p,preventScrollReset:g,relative:a,viewTransition:x});function W(Q){n&&n(Q),Q.defaultPrevented||V(Q)}let H=b.createElement("a",{...w,...O,href:E||L,onClick:P||u?n:W,ref:G2(S,F),target:p,"data-discover":!T&&i==="render"?"true":void 0});return A&&!T?b.createElement(b.Fragment,null,H,b.createElement(W2,{page:L})):H});cf.displayName="Link";var q2=b.forwardRef(function({"aria-current":n="page",caseSensitive:i=!1,className:o="",end:a=!1,style:u,to:c,viewTransition:d,children:p,...m},g){let x=ss(c,{relative:m.relative}),w=Ht(),S=b.useContext(Sl),{navigator:k,basename:T}=b.useContext(on),E=S!=null&&rk(x)&&d===!0,P=k.encodeLocation?k.encodeLocation(x).pathname:x.pathname,L=w.pathname,A=S&&S.navigation&&S.navigation.location?S.navigation.location.pathname:null;i||(L=L.toLowerCase(),A=A?A.toLowerCase():null,P=P.toLowerCase()),A&&T&&(A=lr(A,T)||A);const F=P!=="/"&&P.endsWith("/")?P.length-1:P.length;let O=L===P||!a&&L.startsWith(P)&&L.charAt(F)==="/",V=A!=null&&(A===P||!a&&A.startsWith(P)&&A.charAt(P.length)==="/"),W={isActive:O,isPending:V,isTransitioning:E},H=O?n:void 0,Q;typeof o=="function"?Q=o(W):Q=[o,O?"active":null,V?"pending":null,E?"transitioning":null].filter(Boolean).join(" ");let ae=typeof u=="function"?u(W):u;return b.createElement(cf,{...m,"aria-current":H,className:Q,ref:g,style:ae,to:c,viewTransition:d},typeof p=="function"?p(W):p)});q2.displayName="NavLink";var X2=b.forwardRef(({discover:e="render",fetcherKey:n,navigate:i,reloadDocument:o,replace:a,state:u,method:c=Ka,action:d,onSubmit:p,relative:m,preventScrollReset:g,viewTransition:x,...w},S)=>{let k=tk(),T=nk(d,{relative:m}),E=c.toLowerCase()==="get"?"get":"post",P=typeof d=="string"&&ax.test(d),L=A=>{if(p&&p(A),A.defaultPrevented)return;A.preventDefault();let F=A.nativeEvent.submitter,O=(F==null?void 0:F.getAttribute("formmethod"))||c;k(F||A.currentTarget,{fetcherKey:n,method:O,navigate:i,replace:a,state:u,relative:m,preventScrollReset:g,viewTransition:x})};return b.createElement("form",{ref:S,method:E,action:T,onSubmit:o?p:L,...w,"data-discover":!P&&e==="render"?"true":void 0})});X2.displayName="Form";function Q2(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function lx(e){let n=b.useContext(_i);return Le(n,Q2(e)),n}function J2(e,{target:n,replace:i,state:o,preventScrollReset:a,relative:u,viewTransition:c}={}){let d=Oi(),p=Ht(),m=ss(e,{relative:u});return b.useCallback(g=>{if(R2(g,n)){g.preventDefault();let x=i!==void 0?i:qo(p)===qo(m);d(e,{replace:x,state:o,preventScrollReset:a,relative:u,viewTransition:c})}},[p,d,m,i,o,n,e,a,u,c])}var Z2=0,ek=()=>`__${String(++Z2)}__`;function tk(){let{router:e}=lx("useSubmit"),{basename:n}=b.useContext(on),i=v2();return b.useCallback(async(o,a={})=>{let{action:u,method:c,encType:d,formData:p,body:m}=I2(o,n);if(a.navigate===!1){let g=a.fetcherKey||ek();await e.fetch(g,i,a.action||u,{preventScrollReset:a.preventScrollReset,formData:p,body:m,formMethod:a.method||c,formEncType:a.encType||d,flushSync:a.flushSync})}else await e.navigate(a.action||u,{preventScrollReset:a.preventScrollReset,formData:p,body:m,formMethod:a.method||c,formEncType:a.encType||d,replace:a.replace,state:a.state,fromRouteId:i,flushSync:a.flushSync,viewTransition:a.viewTransition})},[e,n,i])}function nk(e,{relative:n}={}){let{basename:i}=b.useContext(on),o=b.useContext(xn);Le(o,"useFormAction must be used inside a RouteContext");let[a]=o.matches.slice(-1),u={...ss(e||".",{relative:n})},c=Ht();if(e==null){u.search=c.search;let d=new URLSearchParams(u.search),p=d.getAll("index");if(p.some(g=>g==="")){d.delete("index"),p.filter(x=>x).forEach(x=>d.append("index",x));let g=d.toString();u.search=g?`?${g}`:""}}return(!e||e===".")&&a.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(u.pathname=u.pathname==="/"?i:An([i,u.pathname])),qo(u)}function rk(e,n={}){let i=b.useContext(Zy);Le(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:o}=lx("useViewTransitionState"),a=ss(e,{relative:n.relative});if(!i.isTransitioning)return!1;let u=lr(i.currentLocation.pathname,o)||i.currentLocation.pathname,c=lr(i.nextLocation.pathname,o)||i.nextLocation.pathname;return sl(a.pathname,c)!=null||sl(a.pathname,u)!=null}new TextEncoder;const df=b.createContext({});function ff(e){const n=b.useRef(null);return n.current===null&&(n.current=e()),n.current}const pf=typeof window<"u",ux=pf?b.useLayoutEffect:b.useEffect,kl=b.createContext(null),hf=b.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});class ik extends b.Component{getSnapshotBeforeUpdate(n){const i=this.props.childRef.current;if(i&&n.isPresent&&!this.props.isPresent){const o=i.offsetParent,a=o instanceof HTMLElement&&o.offsetWidth||0,u=this.props.sizeRef.current;u.height=i.offsetHeight||0,u.width=i.offsetWidth||0,u.top=i.offsetTop,u.left=i.offsetLeft,u.right=a-u.width-u.left}return null}componentDidUpdate(){}render(){return this.props.children}}function ok({children:e,isPresent:n,anchorX:i}){const o=b.useId(),a=b.useRef(null),u=b.useRef({width:0,height:0,top:0,left:0,right:0}),{nonce:c}=b.useContext(hf);return b.useInsertionEffect(()=>{const{width:d,height:p,top:m,left:g,right:x}=u.current;if(n||!a.current||!d||!p)return;const w=i==="left"?`left: ${g}`:`right: ${x}`;a.current.dataset.motionPopId=o;const S=document.createElement("style");return c&&(S.nonce=c),document.head.appendChild(S),S.sheet&&S.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${d}px !important;
            height: ${p}px !important;
            ${w}px !important;
            top: ${m}px !important;
          }
        `),()=>{document.head.removeChild(S)}},[n]),y.jsx(ik,{isPresent:n,childRef:a,sizeRef:u,children:b.cloneElement(e,{ref:a})})}const sk=({children:e,initial:n,isPresent:i,onExitComplete:o,custom:a,presenceAffectsLayout:u,mode:c,anchorX:d})=>{const p=ff(ak),m=b.useId();let g=!0,x=b.useMemo(()=>(g=!1,{id:m,initial:n,isPresent:i,custom:a,onExitComplete:w=>{p.set(w,!0);for(const S of p.values())if(!S)return;o&&o()},register:w=>(p.set(w,!1),()=>p.delete(w))}),[i,p,o]);return u&&g&&(x={...x}),b.useMemo(()=>{p.forEach((w,S)=>p.set(S,!1))},[i]),b.useEffect(()=>{!i&&!p.size&&o&&o()},[i]),c==="popLayout"&&(e=y.jsx(ok,{isPresent:i,anchorX:d,children:e})),y.jsx(kl.Provider,{value:x,children:e})};function ak(){return new Map}function cx(e=!0){const n=b.useContext(kl);if(n===null)return[!0,null];const{isPresent:i,onExitComplete:o,register:a}=n,u=b.useId();b.useEffect(()=>{if(e)return a(u)},[e]);const c=b.useCallback(()=>e&&o&&o(u),[u,o,e]);return!i&&o?[!1,c]:[!0]}const Pa=e=>e.key||"";function xg(e){const n=[];return b.Children.forEach(e,i=>{b.isValidElement(i)&&n.push(i)}),n}const Vr=({children:e,custom:n,initial:i=!0,onExitComplete:o,presenceAffectsLayout:a=!0,mode:u="sync",propagate:c=!1,anchorX:d="left"})=>{const[p,m]=cx(c),g=b.useMemo(()=>xg(e),[e]),x=c&&!p?[]:g.map(Pa),w=b.useRef(!0),S=b.useRef(g),k=ff(()=>new Map),[T,E]=b.useState(g),[P,L]=b.useState(g);ux(()=>{w.current=!1,S.current=g;for(let O=0;O<P.length;O++){const V=Pa(P[O]);x.includes(V)?k.delete(V):k.get(V)!==!0&&k.set(V,!1)}},[P,x.length,x.join("-")]);const A=[];if(g!==T){let O=[...g];for(let V=0;V<P.length;V++){const W=P[V],H=Pa(W);x.includes(H)||(O.splice(V,0,W),A.push(W))}return u==="wait"&&A.length&&(O=A),L(xg(O)),E(g),null}const{forceRender:F}=b.useContext(df);return y.jsx(y.Fragment,{children:P.map(O=>{const V=Pa(O),W=c&&!p?!1:g===P||x.includes(V),H=()=>{if(k.has(V))k.set(V,!0);else return;let Q=!0;k.forEach(ae=>{ae||(Q=!1)}),Q&&(F==null||F(),L(S.current),c&&(m==null||m()),o&&o())};return y.jsx(sk,{isPresent:W,initial:!w.current||i?void 0:!1,custom:n,presenceAffectsLayout:a,mode:u,onExitComplete:W?void 0:H,anchorX:d,children:O},V)})})};function mf(e,n){e.indexOf(n)===-1&&e.push(n)}function gf(e,n){const i=e.indexOf(n);i>-1&&e.splice(i,1)}const Dn=(e,n,i)=>i>n?n:i<e?e:i;let yf=()=>{};const In={},dx=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),fx=e=>/^0[^.\s]+$/u.test(e);function xf(e){let n;return()=>(n===void 0&&(n=e()),n)}const Ut=e=>e,lk=(e,n)=>i=>n(e(i)),as=(...e)=>e.reduce(lk),Xo=(e,n,i)=>{const o=n-e;return o===0?1:(i-e)/o};class vf{constructor(){this.subscriptions=[]}add(n){return mf(this.subscriptions,n),()=>gf(this.subscriptions,n)}notify(n,i,o){const a=this.subscriptions.length;if(a)if(a===1)this.subscriptions[0](n,i,o);else for(let u=0;u<a;u++){const c=this.subscriptions[u];c&&c(n,i,o)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const mn=e=>e*1e3,gn=e=>e/1e3;function px(e,n){return n?e*(1e3/n):0}const hx=(e,n,i)=>(((1-3*i+3*n)*e+(3*i-6*n))*e+3*n)*e,uk=1e-7,ck=12;function dk(e,n,i,o,a){let u,c,d=0;do c=n+(i-n)/2,u=hx(c,o,a)-e,u>0?i=c:n=c;while(Math.abs(u)>uk&&++d<ck);return c}function ls(e,n,i,o){if(e===n&&i===o)return Ut;const a=u=>dk(u,0,1,e,i);return u=>u===0||u===1?u:hx(a(u),n,o)}const mx=e=>n=>n<=.5?e(2*n)/2:(2-e(2*(1-n)))/2,gx=e=>n=>1-e(1-n),yx=ls(.33,1.53,.69,.99),wf=gx(yx),xx=mx(wf),vx=e=>(e*=2)<1?.5*wf(e):.5*(2-Math.pow(2,-10*(e-1))),Sf=e=>1-Math.sin(Math.acos(e)),wx=gx(Sf),Sx=mx(Sf),fk=ls(.42,0,1,1),pk=ls(0,0,.58,1),bx=ls(.42,0,.58,1),hk=e=>Array.isArray(e)&&typeof e[0]!="number",kx=e=>Array.isArray(e)&&typeof e[0]=="number",mk={linear:Ut,easeIn:fk,easeInOut:bx,easeOut:pk,circIn:Sf,circInOut:Sx,circOut:wx,backIn:wf,backInOut:xx,backOut:yx,anticipate:vx},gk=e=>typeof e=="string",vg=e=>{if(kx(e)){yf(e.length===4);const[n,i,o,a]=e;return ls(n,i,o,a)}else if(gk(e))return mk[e];return e},ja=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"],wg={value:null};function yk(e,n){let i=new Set,o=new Set,a=!1,u=!1;const c=new WeakSet;let d={delta:0,timestamp:0,isProcessing:!1},p=0;function m(x){c.has(x)&&(g.schedule(x),e()),p++,x(d)}const g={schedule:(x,w=!1,S=!1)=>{const T=S&&a?i:o;return w&&c.add(x),T.has(x)||T.add(x),x},cancel:x=>{o.delete(x),c.delete(x)},process:x=>{if(d=x,a){u=!0;return}a=!0,[i,o]=[o,i],i.forEach(m),n&&wg.value&&wg.value.frameloop[n].push(p),p=0,i.clear(),a=!1,u&&(u=!1,g.process(x))}};return g}const xk=40;function Ex(e,n){let i=!1,o=!0;const a={delta:0,timestamp:0,isProcessing:!1},u=()=>i=!0,c=ja.reduce((A,F)=>(A[F]=yk(u,n?F:void 0),A),{}),{setup:d,read:p,resolveKeyframes:m,preUpdate:g,update:x,preRender:w,render:S,postRender:k}=c,T=()=>{const A=In.useManualTiming?a.timestamp:performance.now();i=!1,In.useManualTiming||(a.delta=o?1e3/60:Math.max(Math.min(A-a.timestamp,xk),1)),a.timestamp=A,a.isProcessing=!0,d.process(a),p.process(a),m.process(a),g.process(a),x.process(a),w.process(a),S.process(a),k.process(a),a.isProcessing=!1,i&&n&&(o=!1,e(T))},E=()=>{i=!0,o=!0,a.isProcessing||e(T)};return{schedule:ja.reduce((A,F)=>{const O=c[F];return A[F]=(V,W=!1,H=!1)=>(i||E(),O.schedule(V,W,H)),A},{}),cancel:A=>{for(let F=0;F<ja.length;F++)c[ja[F]].cancel(A)},state:a,steps:c}}const{schedule:Be,cancel:ur,state:at,steps:Nc}=Ex(typeof requestAnimationFrame<"u"?requestAnimationFrame:Ut,!0);let Ya;function vk(){Ya=void 0}const Tt={now:()=>(Ya===void 0&&Tt.set(at.isProcessing||In.useManualTiming?at.timestamp:performance.now()),Ya),set:e=>{Ya=e,queueMicrotask(vk)}},Cx=e=>n=>typeof n=="string"&&n.startsWith(e),bf=Cx("--"),wk=Cx("var(--"),kf=e=>wk(e)?Sk.test(e.split("/*")[0].trim()):!1,Sk=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,Fi={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},Qo={...Fi,transform:e=>Dn(0,1,e)},Ra={...Fi,default:1},No=e=>Math.round(e*1e5)/1e5,Ef=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function bk(e){return e==null}const kk=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Cf=(e,n)=>i=>!!(typeof i=="string"&&kk.test(i)&&i.startsWith(e)||n&&!bk(i)&&Object.prototype.hasOwnProperty.call(i,n)),Tx=(e,n,i)=>o=>{if(typeof o!="string")return o;const[a,u,c,d]=o.match(Ef);return{[e]:parseFloat(a),[n]:parseFloat(u),[i]:parseFloat(c),alpha:d!==void 0?parseFloat(d):1}},Ek=e=>Dn(0,255,e),Vc={...Fi,transform:e=>Math.round(Ek(e))},Dr={test:Cf("rgb","red"),parse:Tx("red","green","blue"),transform:({red:e,green:n,blue:i,alpha:o=1})=>"rgba("+Vc.transform(e)+", "+Vc.transform(n)+", "+Vc.transform(i)+", "+No(Qo.transform(o))+")"};function Ck(e){let n="",i="",o="",a="";return e.length>5?(n=e.substring(1,3),i=e.substring(3,5),o=e.substring(5,7),a=e.substring(7,9)):(n=e.substring(1,2),i=e.substring(2,3),o=e.substring(3,4),a=e.substring(4,5),n+=n,i+=i,o+=o,a+=a),{red:parseInt(n,16),green:parseInt(i,16),blue:parseInt(o,16),alpha:a?parseInt(a,16)/255:1}}const Sd={test:Cf("#"),parse:Ck,transform:Dr.transform},us=e=>({test:n=>typeof n=="string"&&n.endsWith(e)&&n.split(" ").length===1,parse:parseFloat,transform:n=>`${n}${e}`}),ir=us("deg"),yn=us("%"),le=us("px"),Tk=us("vh"),Pk=us("vw"),Sg={...yn,parse:e=>yn.parse(e)/100,transform:e=>yn.transform(e*100)},ki={test:Cf("hsl","hue"),parse:Tx("hue","saturation","lightness"),transform:({hue:e,saturation:n,lightness:i,alpha:o=1})=>"hsla("+Math.round(e)+", "+yn.transform(No(n))+", "+yn.transform(No(i))+", "+No(Qo.transform(o))+")"},ht={test:e=>Dr.test(e)||Sd.test(e)||ki.test(e),parse:e=>Dr.test(e)?Dr.parse(e):ki.test(e)?ki.parse(e):Sd.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?Dr.transform(e):ki.transform(e)},jk=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function Rk(e){var n,i;return isNaN(e)&&typeof e=="string"&&(((n=e.match(Ef))==null?void 0:n.length)||0)+(((i=e.match(jk))==null?void 0:i.length)||0)>0}const Px="number",jx="color",Ak="var",Dk="var(",bg="${}",Ik=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Jo(e){const n=e.toString(),i=[],o={color:[],number:[],var:[]},a=[];let u=0;const d=n.replace(Ik,p=>(ht.test(p)?(o.color.push(u),a.push(jx),i.push(ht.parse(p))):p.startsWith(Dk)?(o.var.push(u),a.push(Ak),i.push(p)):(o.number.push(u),a.push(Px),i.push(parseFloat(p))),++u,bg)).split(bg);return{values:i,split:d,indexes:o,types:a}}function Rx(e){return Jo(e).values}function Ax(e){const{split:n,types:i}=Jo(e),o=n.length;return a=>{let u="";for(let c=0;c<o;c++)if(u+=n[c],a[c]!==void 0){const d=i[c];d===Px?u+=No(a[c]):d===jx?u+=ht.transform(a[c]):u+=a[c]}return u}}const Lk=e=>typeof e=="number"?0:e;function $k(e){const n=Rx(e);return Ax(e)(n.map(Lk))}const cr={test:Rk,parse:Rx,createTransformer:Ax,getAnimatableNone:$k};function zc(e,n,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?e+(n-e)*6*i:i<1/2?n:i<2/3?e+(n-e)*(2/3-i)*6:e}function Mk({hue:e,saturation:n,lightness:i,alpha:o}){e/=360,n/=100,i/=100;let a=0,u=0,c=0;if(!n)a=u=c=i;else{const d=i<.5?i*(1+n):i+n-i*n,p=2*i-d;a=zc(p,d,e+1/3),u=zc(p,d,e),c=zc(p,d,e-1/3)}return{red:Math.round(a*255),green:Math.round(u*255),blue:Math.round(c*255),alpha:o}}function al(e,n){return i=>i>0?n:e}const _e=(e,n,i)=>e+(n-e)*i,Uc=(e,n,i)=>{const o=e*e,a=i*(n*n-o)+o;return a<0?0:Math.sqrt(a)},_k=[Sd,Dr,ki],Bk=e=>_k.find(n=>n.test(e));function kg(e){const n=Bk(e);if(!n)return!1;let i=n.parse(e);return n===ki&&(i=Mk(i)),i}const Eg=(e,n)=>{const i=kg(e),o=kg(n);if(!i||!o)return al(e,n);const a={...i};return u=>(a.red=Uc(i.red,o.red,u),a.green=Uc(i.green,o.green,u),a.blue=Uc(i.blue,o.blue,u),a.alpha=_e(i.alpha,o.alpha,u),Dr.transform(a))},bd=new Set(["none","hidden"]);function Ok(e,n){return bd.has(e)?i=>i<=0?e:n:i=>i>=1?n:e}function Fk(e,n){return i=>_e(e,n,i)}function Tf(e){return typeof e=="number"?Fk:typeof e=="string"?kf(e)?al:ht.test(e)?Eg:zk:Array.isArray(e)?Dx:typeof e=="object"?ht.test(e)?Eg:Nk:al}function Dx(e,n){const i=[...e],o=i.length,a=e.map((u,c)=>Tf(u)(u,n[c]));return u=>{for(let c=0;c<o;c++)i[c]=a[c](u);return i}}function Nk(e,n){const i={...e,...n},o={};for(const a in i)e[a]!==void 0&&n[a]!==void 0&&(o[a]=Tf(e[a])(e[a],n[a]));return a=>{for(const u in o)i[u]=o[u](a);return i}}function Vk(e,n){const i=[],o={color:0,var:0,number:0};for(let a=0;a<n.values.length;a++){const u=n.types[a],c=e.indexes[u][o[u]],d=e.values[c]??0;i[a]=d,o[u]++}return i}const zk=(e,n)=>{const i=cr.createTransformer(n),o=Jo(e),a=Jo(n);return o.indexes.var.length===a.indexes.var.length&&o.indexes.color.length===a.indexes.color.length&&o.indexes.number.length>=a.indexes.number.length?bd.has(e)&&!a.values.length||bd.has(n)&&!o.values.length?Ok(e,n):as(Dx(Vk(o,a),a.values),i):al(e,n)};function Ix(e,n,i){return typeof e=="number"&&typeof n=="number"&&typeof i=="number"?_e(e,n,i):Tf(e)(e,n)}const Uk=e=>{const n=({timestamp:i})=>e(i);return{start:()=>Be.update(n,!0),stop:()=>ur(n),now:()=>at.isProcessing?at.timestamp:Tt.now()}},Lx=(e,n,i=10)=>{let o="";const a=Math.max(Math.round(n/i),2);for(let u=0;u<a;u++)o+=e(u/(a-1))+", ";return`linear(${o.substring(0,o.length-2)})`},ll=2e4;function Pf(e){let n=0;const i=50;let o=e.next(n);for(;!o.done&&n<ll;)n+=i,o=e.next(n);return n>=ll?1/0:n}function Wk(e,n=100,i){const o=i({...e,keyframes:[0,n]}),a=Math.min(Pf(o),ll);return{type:"keyframes",ease:u=>o.next(a*u).value/n,duration:gn(a)}}const Hk=5;function $x(e,n,i){const o=Math.max(n-Hk,0);return px(i-e(o),n-o)}const Fe={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Cg=.001;function Kk({duration:e=Fe.duration,bounce:n=Fe.bounce,velocity:i=Fe.velocity,mass:o=Fe.mass}){let a,u,c=1-n;c=Dn(Fe.minDamping,Fe.maxDamping,c),e=Dn(Fe.minDuration,Fe.maxDuration,gn(e)),c<1?(a=m=>{const g=m*c,x=g*e,w=g-i,S=kd(m,c),k=Math.exp(-x);return Cg-w/S*k},u=m=>{const x=m*c*e,w=x*i+i,S=Math.pow(c,2)*Math.pow(m,2)*e,k=Math.exp(-x),T=kd(Math.pow(m,2),c);return(-a(m)+Cg>0?-1:1)*((w-S)*k)/T}):(a=m=>{const g=Math.exp(-m*e),x=(m-i)*e+1;return-.001+g*x},u=m=>{const g=Math.exp(-m*e),x=(i-m)*(e*e);return g*x});const d=5/e,p=Yk(a,u,d);if(e=mn(e),isNaN(p))return{stiffness:Fe.stiffness,damping:Fe.damping,duration:e};{const m=Math.pow(p,2)*o;return{stiffness:m,damping:c*2*Math.sqrt(o*m),duration:e}}}const Gk=12;function Yk(e,n,i){let o=i;for(let a=1;a<Gk;a++)o=o-e(o)/n(o);return o}function kd(e,n){return e*Math.sqrt(1-n*n)}const qk=["duration","bounce"],Xk=["stiffness","damping","mass"];function Tg(e,n){return n.some(i=>e[i]!==void 0)}function Qk(e){let n={velocity:Fe.velocity,stiffness:Fe.stiffness,damping:Fe.damping,mass:Fe.mass,isResolvedFromDuration:!1,...e};if(!Tg(e,Xk)&&Tg(e,qk))if(e.visualDuration){const i=e.visualDuration,o=2*Math.PI/(i*1.2),a=o*o,u=2*Dn(.05,1,1-(e.bounce||0))*Math.sqrt(a);n={...n,mass:Fe.mass,stiffness:a,damping:u}}else{const i=Kk(e);n={...n,...i,mass:Fe.mass},n.isResolvedFromDuration=!0}return n}function ul(e=Fe.visualDuration,n=Fe.bounce){const i=typeof e!="object"?{visualDuration:e,keyframes:[0,1],bounce:n}:e;let{restSpeed:o,restDelta:a}=i;const u=i.keyframes[0],c=i.keyframes[i.keyframes.length-1],d={done:!1,value:u},{stiffness:p,damping:m,mass:g,duration:x,velocity:w,isResolvedFromDuration:S}=Qk({...i,velocity:-gn(i.velocity||0)}),k=w||0,T=m/(2*Math.sqrt(p*g)),E=c-u,P=gn(Math.sqrt(p/g)),L=Math.abs(E)<5;o||(o=L?Fe.restSpeed.granular:Fe.restSpeed.default),a||(a=L?Fe.restDelta.granular:Fe.restDelta.default);let A;if(T<1){const O=kd(P,T);A=V=>{const W=Math.exp(-T*P*V);return c-W*((k+T*P*E)/O*Math.sin(O*V)+E*Math.cos(O*V))}}else if(T===1)A=O=>c-Math.exp(-P*O)*(E+(k+P*E)*O);else{const O=P*Math.sqrt(T*T-1);A=V=>{const W=Math.exp(-T*P*V),H=Math.min(O*V,300);return c-W*((k+T*P*E)*Math.sinh(H)+O*E*Math.cosh(H))/O}}const F={calculatedDuration:S&&x||null,next:O=>{const V=A(O);if(S)d.done=O>=x;else{let W=O===0?k:0;T<1&&(W=O===0?mn(k):$x(A,O,V));const H=Math.abs(W)<=o,Q=Math.abs(c-V)<=a;d.done=H&&Q}return d.value=d.done?c:V,d},toString:()=>{const O=Math.min(Pf(F),ll),V=Lx(W=>F.next(O*W).value,O,30);return O+"ms "+V},toTransition:()=>{}};return F}ul.applyToOptions=e=>{const n=Wk(e,100,ul);return e.ease=n.ease,e.duration=mn(n.duration),e.type="keyframes",e};function Ed({keyframes:e,velocity:n=0,power:i=.8,timeConstant:o=325,bounceDamping:a=10,bounceStiffness:u=500,modifyTarget:c,min:d,max:p,restDelta:m=.5,restSpeed:g}){const x=e[0],w={done:!1,value:x},S=H=>d!==void 0&&H<d||p!==void 0&&H>p,k=H=>d===void 0?p:p===void 0||Math.abs(d-H)<Math.abs(p-H)?d:p;let T=i*n;const E=x+T,P=c===void 0?E:c(E);P!==E&&(T=P-x);const L=H=>-T*Math.exp(-H/o),A=H=>P+L(H),F=H=>{const Q=L(H),ae=A(H);w.done=Math.abs(Q)<=m,w.value=w.done?P:ae};let O,V;const W=H=>{S(w.value)&&(O=H,V=ul({keyframes:[w.value,k(w.value)],velocity:$x(A,H,w.value),damping:a,stiffness:u,restDelta:m,restSpeed:g}))};return W(0),{calculatedDuration:null,next:H=>{let Q=!1;return!V&&O===void 0&&(Q=!0,F(H),W(H)),O!==void 0&&H>=O?V.next(H-O):(!Q&&F(H),w)}}}function Jk(e,n,i){const o=[],a=i||In.mix||Ix,u=e.length-1;for(let c=0;c<u;c++){let d=a(e[c],e[c+1]);if(n){const p=Array.isArray(n)?n[c]||Ut:n;d=as(p,d)}o.push(d)}return o}function Zk(e,n,{clamp:i=!0,ease:o,mixer:a}={}){const u=e.length;if(yf(u===n.length),u===1)return()=>n[0];if(u===2&&n[0]===n[1])return()=>n[1];const c=e[0]===e[1];e[0]>e[u-1]&&(e=[...e].reverse(),n=[...n].reverse());const d=Jk(n,o,a),p=d.length,m=g=>{if(c&&g<e[0])return n[0];let x=0;if(p>1)for(;x<e.length-2&&!(g<e[x+1]);x++);const w=Xo(e[x],e[x+1],g);return d[x](w)};return i?g=>m(Dn(e[0],e[u-1],g)):m}function eE(e,n){const i=e[e.length-1];for(let o=1;o<=n;o++){const a=Xo(0,n,o);e.push(_e(i,1,a))}}function tE(e){const n=[0];return eE(n,e.length-1),n}function nE(e,n){return e.map(i=>i*n)}function rE(e,n){return e.map(()=>n||bx).splice(0,e.length-1)}function Vo({duration:e=300,keyframes:n,times:i,ease:o="easeInOut"}){const a=hk(o)?o.map(vg):vg(o),u={done:!1,value:n[0]},c=nE(i&&i.length===n.length?i:tE(n),e),d=Zk(c,n,{ease:Array.isArray(a)?a:rE(n,a)});return{calculatedDuration:e,next:p=>(u.value=d(p),u.done=p>=e,u)}}const iE=e=>e!==null;function jf(e,{repeat:n,repeatType:i="loop"},o,a=1){const u=e.filter(iE),d=a<0||n&&i!=="loop"&&n%2===1?0:u.length-1;return!d||o===void 0?u[d]:o}const oE={decay:Ed,inertia:Ed,tween:Vo,keyframes:Vo,spring:ul};function Mx(e){typeof e.type=="string"&&(e.type=oE[e.type])}class Rf{constructor(){this.count=0,this.updateFinished()}get finished(){return this._finished}updateFinished(){this.count++,this._finished=new Promise(n=>{this.resolve=n})}notifyFinished(){this.resolve()}then(n,i){return this.finished.then(n,i)}}const sE=e=>e/100;class _x extends Rf{constructor(n){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{const{motionValue:i}=this.options;if(i&&i.updatedAt!==Tt.now()&&this.tick(Tt.now()),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:o}=this.options;o&&o()},this.options=n,this.initAnimation(),this.play(),n.autoplay===!1&&this.pause()}initAnimation(){const{options:n}=this;Mx(n);const{type:i=Vo,repeat:o=0,repeatDelay:a=0,repeatType:u,velocity:c=0}=n;let{keyframes:d}=n;const p=i||Vo;p!==Vo&&typeof d[0]!="number"&&(this.mixKeyframes=as(sE,Ix(d[0],d[1])),d=[0,100]);const m=p({...n,keyframes:d});u==="mirror"&&(this.mirroredGenerator=p({...n,keyframes:[...d].reverse(),velocity:-c})),m.calculatedDuration===null&&(m.calculatedDuration=Pf(m));const{calculatedDuration:g}=m;this.calculatedDuration=g,this.resolvedDuration=g+a,this.totalDuration=this.resolvedDuration*(o+1)-a,this.generator=m}updateTime(n){const i=Math.round(n-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=i}tick(n,i=!1){const{generator:o,totalDuration:a,mixKeyframes:u,mirroredGenerator:c,resolvedDuration:d,calculatedDuration:p}=this;if(this.startTime===null)return o.next(0);const{delay:m=0,keyframes:g,repeat:x,repeatType:w,repeatDelay:S,type:k,onUpdate:T,finalKeyframe:E}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,n):this.speed<0&&(this.startTime=Math.min(n-a/this.speed,this.startTime)),i?this.currentTime=n:this.updateTime(n);const P=this.currentTime-m*(this.playbackSpeed>=0?1:-1),L=this.playbackSpeed>=0?P<0:P>a;this.currentTime=Math.max(P,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=a);let A=this.currentTime,F=o;if(x){const H=Math.min(this.currentTime,a)/d;let Q=Math.floor(H),ae=H%1;!ae&&H>=1&&(ae=1),ae===1&&Q--,Q=Math.min(Q,x+1),!!(Q%2)&&(w==="reverse"?(ae=1-ae,S&&(ae-=S/d)):w==="mirror"&&(F=c)),A=Dn(0,1,ae)*d}const O=L?{done:!1,value:g[0]}:F.next(A);u&&(O.value=u(O.value));let{done:V}=O;!L&&p!==null&&(V=this.playbackSpeed>=0?this.currentTime>=a:this.currentTime<=0);const W=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&V);return W&&k!==Ed&&(O.value=jf(g,this.options,E,this.speed)),T&&T(O.value),W&&this.finish(),O}then(n,i){return this.finished.then(n,i)}get duration(){return gn(this.calculatedDuration)}get time(){return gn(this.currentTime)}set time(n){n=mn(n),this.currentTime=n,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=n:this.driver&&(this.startTime=this.driver.now()-n/this.playbackSpeed)}get speed(){return this.playbackSpeed}set speed(n){this.updateTime(Tt.now());const i=this.playbackSpeed!==n;this.playbackSpeed=n,i&&(this.time=gn(this.currentTime))}play(){if(this.isStopped)return;const{driver:n=Uk,onPlay:i,startTime:o}=this.options;this.driver||(this.driver=n(u=>this.tick(u))),i&&i();const a=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=a):this.holdTime!==null?this.startTime=a-this.holdTime:this.startTime||(this.startTime=o??a),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(Tt.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:n}=this.options;n&&n()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown()}teardown(){this.notifyFinished(),this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(n){return this.startTime=0,this.tick(n,!0)}attachTimeline(n){return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),n.observe(this)}}function aE(e){for(let n=1;n<e.length;n++)e[n]??(e[n]=e[n-1])}const Ir=e=>e*180/Math.PI,Cd=e=>{const n=Ir(Math.atan2(e[1],e[0]));return Td(n)},lE={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:Cd,rotateZ:Cd,skewX:e=>Ir(Math.atan(e[1])),skewY:e=>Ir(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},Td=e=>(e=e%360,e<0&&(e+=360),e),Pg=Cd,jg=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),Rg=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),uE={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:jg,scaleY:Rg,scale:e=>(jg(e)+Rg(e))/2,rotateX:e=>Td(Ir(Math.atan2(e[6],e[5]))),rotateY:e=>Td(Ir(Math.atan2(-e[2],e[0]))),rotateZ:Pg,rotate:Pg,skewX:e=>Ir(Math.atan(e[4])),skewY:e=>Ir(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function Ag(e){return e.includes("scale")?1:0}function Pd(e,n){if(!e||e==="none")return Ag(n);const i=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let o,a;if(i)o=uE,a=i;else{const d=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);o=lE,a=d}if(!a)return Ag(n);const u=o[n],c=a[1].split(",").map(dE);return typeof u=="function"?u(c):c[u]}const cE=(e,n)=>{const{transform:i="none"}=getComputedStyle(e);return Pd(i,n)};function dE(e){return parseFloat(e.trim())}const Ni=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Vi=new Set(Ni),Dg=e=>e===Fi||e===le,fE=new Set(["x","y","z"]),pE=Ni.filter(e=>!fE.has(e));function hE(e){const n=[];return pE.forEach(i=>{const o=e.getValue(i);o!==void 0&&(n.push([i,o.get()]),o.set(i.startsWith("scale")?1:0))}),n}const Ii={width:({x:e},{paddingLeft:n="0",paddingRight:i="0"})=>e.max-e.min-parseFloat(n)-parseFloat(i),height:({y:e},{paddingTop:n="0",paddingBottom:i="0"})=>e.max-e.min-parseFloat(n)-parseFloat(i),top:(e,{top:n})=>parseFloat(n),left:(e,{left:n})=>parseFloat(n),bottom:({y:e},{top:n})=>parseFloat(n)+(e.max-e.min),right:({x:e},{left:n})=>parseFloat(n)+(e.max-e.min),x:(e,{transform:n})=>Pd(n,"x"),y:(e,{transform:n})=>Pd(n,"y")};Ii.translateX=Ii.x;Ii.translateY=Ii.y;const _r=new Set;let jd=!1,Rd=!1,Ad=!1;function Bx(){if(Rd){const e=Array.from(_r).filter(o=>o.needsMeasurement),n=new Set(e.map(o=>o.element)),i=new Map;n.forEach(o=>{const a=hE(o);a.length&&(i.set(o,a),o.render())}),e.forEach(o=>o.measureInitialState()),n.forEach(o=>{o.render();const a=i.get(o);a&&a.forEach(([u,c])=>{var d;(d=o.getValue(u))==null||d.set(c)})}),e.forEach(o=>o.measureEndState()),e.forEach(o=>{o.suspendedScrollY!==void 0&&window.scrollTo(0,o.suspendedScrollY)})}Rd=!1,jd=!1,_r.forEach(e=>e.complete(Ad)),_r.clear()}function Ox(){_r.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(Rd=!0)})}function mE(){Ad=!0,Ox(),Bx(),Ad=!1}class Af{constructor(n,i,o,a,u,c=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...n],this.onComplete=i,this.name=o,this.motionValue=a,this.element=u,this.isAsync=c}scheduleResolve(){this.isScheduled=!0,this.isAsync?(_r.add(this),jd||(jd=!0,Be.read(Ox),Be.resolveKeyframes(Bx))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:n,name:i,element:o,motionValue:a}=this;if(n[0]===null){const u=a==null?void 0:a.get(),c=n[n.length-1];if(u!==void 0)n[0]=u;else if(o&&i){const d=o.readValue(i,c);d!=null&&(n[0]=d)}n[0]===void 0&&(n[0]=c),a&&u===void 0&&a.set(n[0])}aE(n)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(n=!1){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,n),_r.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,_r.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const gE=e=>e.startsWith("--");function yE(e,n,i){gE(n)?e.style.setProperty(n,i):e.style[n]=i}const xE=xf(()=>window.ScrollTimeline!==void 0),vE={};function wE(e,n){const i=xf(e);return()=>vE[n]??i()}const Fx=wE(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Bo=([e,n,i,o])=>`cubic-bezier(${e}, ${n}, ${i}, ${o})`,Ig={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Bo([0,.65,.55,1]),circOut:Bo([.55,0,1,.45]),backIn:Bo([.31,.01,.66,-.59]),backOut:Bo([.33,1.53,.69,.99])};function Nx(e,n){if(e)return typeof e=="function"?Fx()?Lx(e,n):"ease-out":kx(e)?Bo(e):Array.isArray(e)?e.map(i=>Nx(i,n)||Ig.easeOut):Ig[e]}function SE(e,n,i,{delay:o=0,duration:a=300,repeat:u=0,repeatType:c="loop",ease:d="easeOut",times:p}={},m=void 0){const g={[n]:i};p&&(g.offset=p);const x=Nx(d,a);Array.isArray(x)&&(g.easing=x);const w={delay:o,duration:a,easing:Array.isArray(x)?"linear":x,fill:"both",iterations:u+1,direction:c==="reverse"?"alternate":"normal"};return m&&(w.pseudoElement=m),e.animate(g,w)}function Vx(e){return typeof e=="function"&&"applyToOptions"in e}function bE({type:e,...n}){return Vx(e)&&Fx()?e.applyToOptions(n):(n.duration??(n.duration=300),n.ease??(n.ease="easeOut"),n)}class kE extends Rf{constructor(n){if(super(),this.finishedTime=null,this.isStopped=!1,!n)return;const{element:i,name:o,keyframes:a,pseudoElement:u,allowFlatten:c=!1,finalKeyframe:d,onComplete:p}=n;this.isPseudoElement=!!u,this.allowFlatten=c,this.options=n,yf(typeof n.type!="string");const m=bE(n);this.animation=SE(i,o,a,m,u),m.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!u){const g=jf(a,this.options,d,this.speed);this.updateMotionValue?this.updateMotionValue(g):yE(i,o,g),this.animation.cancel()}p==null||p(),this.notifyFinished()},this.animation.oncancel=()=>this.notifyFinished()}play(){this.isStopped||(this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var n,i;(i=(n=this.animation).finish)==null||i.call(n)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:n}=this;n==="idle"||n==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var n,i;this.isPseudoElement||(i=(n=this.animation).commitStyles)==null||i.call(n)}get duration(){var i,o;const n=((o=(i=this.animation.effect)==null?void 0:i.getComputedTiming)==null?void 0:o.call(i).duration)||0;return gn(Number(n))}get time(){return gn(Number(this.animation.currentTime)||0)}set time(n){this.finishedTime=null,this.animation.currentTime=mn(n)}get speed(){return this.animation.playbackRate}set speed(n){n<0&&(this.finishedTime=null),this.animation.playbackRate=n}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return Number(this.animation.startTime)}set startTime(n){this.animation.startTime=n}attachTimeline({timeline:n,observe:i}){var o;return this.allowFlatten&&((o=this.animation.effect)==null||o.updateTiming({easing:"linear"})),this.animation.onfinish=null,n&&xE()?(this.animation.timeline=n,Ut):i(this)}}const zx={anticipate:vx,backInOut:xx,circInOut:Sx};function EE(e){return e in zx}function CE(e){typeof e.ease=="string"&&EE(e.ease)&&(e.ease=zx[e.ease])}const Lg=10;class TE extends kE{constructor(n){CE(n),Mx(n),super(n),n.startTime&&(this.startTime=n.startTime),this.options=n}updateMotionValue(n){const{motionValue:i,onUpdate:o,onComplete:a,element:u,...c}=this.options;if(!i)return;if(n!==void 0){i.set(n);return}const d=new _x({...c,autoplay:!1}),p=mn(this.finishedTime??this.time);i.setWithVelocity(d.sample(p-Lg).value,d.sample(p).value,Lg),d.stop()}}const $g=(e,n)=>n==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(cr.test(e)||e==="0")&&!e.startsWith("url("));function PE(e){const n=e[0];if(e.length===1)return!0;for(let i=0;i<e.length;i++)if(e[i]!==n)return!0}function jE(e,n,i,o){const a=e[0];if(a===null)return!1;if(n==="display"||n==="visibility")return!0;const u=e[e.length-1],c=$g(a,n),d=$g(u,n);return!c||!d?!1:PE(e)||(i==="spring"||Vx(i))&&o}const RE=new Set(["opacity","clipPath","filter","transform"]),AE=xf(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function DE(e){const{motionValue:n,name:i,repeatDelay:o,repeatType:a,damping:u,type:c}=e;if(!n||!n.owner||!(n.owner.current instanceof HTMLElement))return!1;const{onUpdate:d,transformTemplate:p}=n.owner.getProps();return AE()&&i&&RE.has(i)&&(i!=="transform"||!p)&&!d&&!o&&a!=="mirror"&&u!==0&&c!=="inertia"}const IE=40;class LE extends Rf{constructor({autoplay:n=!0,delay:i=0,type:o="keyframes",repeat:a=0,repeatDelay:u=0,repeatType:c="loop",keyframes:d,name:p,motionValue:m,element:g,...x}){var k;super(),this.stop=()=>{var T,E;this._animation?(this._animation.stop(),(T=this.stopTimeline)==null||T.call(this)):(E=this.keyframeResolver)==null||E.cancel()},this.createdAt=Tt.now();const w={autoplay:n,delay:i,type:o,repeat:a,repeatDelay:u,repeatType:c,name:p,motionValue:m,element:g,...x},S=(g==null?void 0:g.KeyframeResolver)||Af;this.keyframeResolver=new S(d,(T,E,P)=>this.onKeyframesResolved(T,E,w,!P),p,m,g),(k=this.keyframeResolver)==null||k.scheduleResolve()}onKeyframesResolved(n,i,o,a){this.keyframeResolver=void 0;const{name:u,type:c,velocity:d,delay:p,isHandoff:m,onUpdate:g}=o;this.resolvedAt=Tt.now(),jE(n,u,c,d)||((In.instantAnimations||!p)&&(g==null||g(jf(n,o,i))),n[0]=n[n.length-1],o.duration=0,o.repeat=0);const w={startTime:a?this.resolvedAt?this.resolvedAt-this.createdAt>IE?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:i,...o,keyframes:n},S=!m&&DE(w)?new TE({...w,element:w.motionValue.owner.current}):new _x(w);S.finished.then(()=>this.notifyFinished()).catch(Ut),this.pendingTimeline&&(this.stopTimeline=S.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=S}get finished(){return this._animation?this.animation.finished:this._finished}then(n,i){return this.finished.finally(n).then(()=>{})}get animation(){return this._animation||mE(),this._animation}get duration(){return this.animation.duration}get time(){return this.animation.time}set time(n){this.animation.time=n}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(n){this.animation.speed=n}get startTime(){return this.animation.startTime}attachTimeline(n){return this._animation?this.stopTimeline=this.animation.attachTimeline(n):this.pendingTimeline=n,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this.animation.cancel()}}const $E=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function ME(e){const n=$E.exec(e);if(!n)return[,];const[,i,o,a]=n;return[`--${i??o}`,a]}function Ux(e,n,i=1){const[o,a]=ME(e);if(!o)return;const u=window.getComputedStyle(n).getPropertyValue(o);if(u){const c=u.trim();return dx(c)?parseFloat(c):c}return kf(a)?Ux(a,n,i+1):a}function Df(e,n){return(e==null?void 0:e[n])??(e==null?void 0:e.default)??e}const Wx=new Set(["width","height","top","left","right","bottom",...Ni]),_E={test:e=>e==="auto",parse:e=>e},Hx=e=>n=>n.test(e),Kx=[Fi,le,yn,ir,Pk,Tk,_E],Mg=e=>Kx.find(Hx(e));function BE(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||fx(e):!0}const OE=new Set(["brightness","contrast","saturate","opacity"]);function FE(e){const[n,i]=e.slice(0,-1).split("(");if(n==="drop-shadow")return e;const[o]=i.match(Ef)||[];if(!o)return e;const a=i.replace(o,"");let u=OE.has(n)?1:0;return o!==i&&(u*=100),n+"("+u+a+")"}const NE=/\b([a-z-]*)\(.*?\)/gu,Dd={...cr,getAnimatableNone:e=>{const n=e.match(NE);return n?n.map(FE).join(" "):e}},_g={...Fi,transform:Math.round},VE={rotate:ir,rotateX:ir,rotateY:ir,rotateZ:ir,scale:Ra,scaleX:Ra,scaleY:Ra,scaleZ:Ra,skew:ir,skewX:ir,skewY:ir,distance:le,translateX:le,translateY:le,translateZ:le,x:le,y:le,z:le,perspective:le,transformPerspective:le,opacity:Qo,originX:Sg,originY:Sg,originZ:le},If={borderWidth:le,borderTopWidth:le,borderRightWidth:le,borderBottomWidth:le,borderLeftWidth:le,borderRadius:le,radius:le,borderTopLeftRadius:le,borderTopRightRadius:le,borderBottomRightRadius:le,borderBottomLeftRadius:le,width:le,maxWidth:le,height:le,maxHeight:le,top:le,right:le,bottom:le,left:le,padding:le,paddingTop:le,paddingRight:le,paddingBottom:le,paddingLeft:le,margin:le,marginTop:le,marginRight:le,marginBottom:le,marginLeft:le,backgroundPositionX:le,backgroundPositionY:le,...VE,zIndex:_g,fillOpacity:Qo,strokeOpacity:Qo,numOctaves:_g},zE={...If,color:ht,backgroundColor:ht,outlineColor:ht,fill:ht,stroke:ht,borderColor:ht,borderTopColor:ht,borderRightColor:ht,borderBottomColor:ht,borderLeftColor:ht,filter:Dd,WebkitFilter:Dd},Gx=e=>zE[e];function Yx(e,n){let i=Gx(e);return i!==Dd&&(i=cr),i.getAnimatableNone?i.getAnimatableNone(n):void 0}const UE=new Set(["auto","none","0"]);function WE(e,n,i){let o=0,a;for(;o<e.length&&!a;){const u=e[o];typeof u=="string"&&!UE.has(u)&&Jo(u).values.length&&(a=e[o]),o++}if(a&&i)for(const u of n)e[u]=Yx(i,a)}class HE extends Af{constructor(n,i,o,a,u){super(n,i,o,a,u,!0)}readKeyframes(){const{unresolvedKeyframes:n,element:i,name:o}=this;if(!i||!i.current)return;super.readKeyframes();for(let p=0;p<n.length;p++){let m=n[p];if(typeof m=="string"&&(m=m.trim(),kf(m))){const g=Ux(m,i.current);g!==void 0&&(n[p]=g),p===n.length-1&&(this.finalKeyframe=m)}}if(this.resolveNoneKeyframes(),!Wx.has(o)||n.length!==2)return;const[a,u]=n,c=Mg(a),d=Mg(u);if(c!==d)if(Dg(c)&&Dg(d))for(let p=0;p<n.length;p++){const m=n[p];typeof m=="string"&&(n[p]=parseFloat(m))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:n,name:i}=this,o=[];for(let a=0;a<n.length;a++)(n[a]===null||BE(n[a]))&&o.push(a);o.length&&WE(n,o,i)}measureInitialState(){const{element:n,unresolvedKeyframes:i,name:o}=this;if(!n||!n.current)return;o==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Ii[o](n.measureViewportBox(),window.getComputedStyle(n.current)),i[0]=this.measuredOrigin;const a=i[i.length-1];a!==void 0&&n.getValue(o,a).jump(a,!1)}measureEndState(){var d;const{element:n,name:i,unresolvedKeyframes:o}=this;if(!n||!n.current)return;const a=n.getValue(i);a&&a.jump(this.measuredOrigin,!1);const u=o.length-1,c=o[u];o[u]=Ii[i](n.measureViewportBox(),window.getComputedStyle(n.current)),c!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=c),(d=this.removedTransforms)!=null&&d.length&&this.removedTransforms.forEach(([p,m])=>{n.getValue(p).set(m)}),this.resolveNoneKeyframes()}}function KE(e,n,i){if(e instanceof EventTarget)return[e];if(typeof e=="string"){let o=document;const a=(i==null?void 0:i[e])??o.querySelectorAll(e);return a?Array.from(a):[]}return Array.from(e)}const{schedule:Lf}=Ex(queueMicrotask,!1),en={x:!1,y:!1};function qx(){return en.x||en.y}function GE(e){return e==="x"||e==="y"?en[e]?null:(en[e]=!0,()=>{en[e]=!1}):en.x||en.y?null:(en.x=en.y=!0,()=>{en.x=en.y=!1})}function Xx(e,n){const i=KE(e),o=new AbortController,a={passive:!0,...n,signal:o.signal};return[i,a,()=>o.abort()]}function Bg(e){return!(e.pointerType==="touch"||qx())}function YE(e,n,i={}){const[o,a,u]=Xx(e,i),c=d=>{if(!Bg(d))return;const{target:p}=d,m=n(p,d);if(typeof m!="function"||!p)return;const g=x=>{Bg(x)&&(m(x),p.removeEventListener("pointerleave",g))};p.addEventListener("pointerleave",g,a)};return o.forEach(d=>{d.addEventListener("pointerenter",c,a)}),u}const Qx=(e,n)=>n?e===n?!0:Qx(e,n.parentElement):!1,$f=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1,qE=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function XE(e){return qE.has(e.tagName)||e.tabIndex!==-1}const Oo=new WeakSet;function Og(e){return n=>{n.key==="Enter"&&e(n)}}function Wc(e,n){e.dispatchEvent(new PointerEvent("pointer"+n,{isPrimary:!0,bubbles:!0}))}const QE=(e,n)=>{const i=e.currentTarget;if(!i)return;const o=Og(()=>{if(Oo.has(i))return;Wc(i,"down");const a=Og(()=>{Wc(i,"up")}),u=()=>Wc(i,"cancel");i.addEventListener("keyup",a,n),i.addEventListener("blur",u,n)});i.addEventListener("keydown",o,n),i.addEventListener("blur",()=>i.removeEventListener("keydown",o),n)};function Fg(e){return $f(e)&&!qx()}function JE(e,n,i={}){const[o,a,u]=Xx(e,i),c=d=>{const p=d.currentTarget;if(!Fg(d)||Oo.has(p))return;Oo.add(p);const m=n(p,d),g=(S,k)=>{window.removeEventListener("pointerup",x),window.removeEventListener("pointercancel",w),!(!Fg(S)||!Oo.has(p))&&(Oo.delete(p),typeof m=="function"&&m(S,{success:k}))},x=S=>{g(S,p===window||p===document||i.useGlobalTarget||Qx(p,S.target))},w=S=>{g(S,!1)};window.addEventListener("pointerup",x,a),window.addEventListener("pointercancel",w,a)};return o.forEach(d=>{(i.useGlobalTarget?window:d).addEventListener("pointerdown",c,a),d instanceof HTMLElement&&(d.addEventListener("focus",m=>QE(m,a)),!XE(d)&&!d.hasAttribute("tabindex")&&(d.tabIndex=0))}),u}const Ng=30,ZE=e=>!isNaN(parseFloat(e));class eC{constructor(n,i={}){this.version="__VERSION__",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(o,a=!0)=>{var c,d;const u=Tt.now();this.updatedAt!==u&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(o),this.current!==this.prev&&((c=this.events.change)==null||c.notify(this.current)),a&&((d=this.events.renderRequest)==null||d.notify(this.current))},this.hasAnimated=!1,this.setCurrent(n),this.owner=i.owner}setCurrent(n){this.current=n,this.updatedAt=Tt.now(),this.canTrackVelocity===null&&n!==void 0&&(this.canTrackVelocity=ZE(this.current))}setPrevFrameValue(n=this.current){this.prevFrameValue=n,this.prevUpdatedAt=this.updatedAt}onChange(n){return this.on("change",n)}on(n,i){this.events[n]||(this.events[n]=new vf);const o=this.events[n].add(i);return n==="change"?()=>{o(),Be.read(()=>{this.events.change.getSize()||this.stop()})}:o}clearListeners(){for(const n in this.events)this.events[n].clear()}attach(n,i){this.passiveEffect=n,this.stopPassiveEffect=i}set(n,i=!0){!i||!this.passiveEffect?this.updateAndNotify(n,i):this.passiveEffect(n,this.updateAndNotify)}setWithVelocity(n,i,o){this.set(i),this.prev=void 0,this.prevFrameValue=n,this.prevUpdatedAt=this.updatedAt-o}jump(n,i=!0){this.updateAndNotify(n),this.prev=n,this.prevUpdatedAt=this.prevFrameValue=void 0,i&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const n=Tt.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||n-this.updatedAt>Ng)return 0;const i=Math.min(this.updatedAt-this.prevUpdatedAt,Ng);return px(parseFloat(this.current)-parseFloat(this.prevFrameValue),i)}start(n){return this.stop(),new Promise(i=>{this.hasAnimated=!0,this.animation=n(i),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var n;(n=this.events.destroy)==null||n.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Zo(e,n){return new eC(e,n)}const tC=[...Kx,ht,cr],nC=e=>tC.find(Hx(e)),Jx=(e,n)=>n&&typeof e=="number"?n.transform(e):e,Zx=b.createContext({strict:!1}),Vg={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Li={};for(const e in Vg)Li[e]={isEnabled:n=>Vg[e].some(i=>!!n[i])};function rC(e){for(const n in e)Li[n]={...Li[n],...e[n]}}const iC=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function cl(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||iC.has(e)}let ev=e=>!cl(e);function oC(e){e&&(ev=n=>n.startsWith("on")?!cl(n):e(n))}try{oC(require("@emotion/is-prop-valid").default)}catch{}function sC(e,n,i){const o={};for(const a in e)a==="values"&&typeof e.values=="object"||(ev(a)||i===!0&&cl(a)||!n&&!cl(a)||e.draggable&&a.startsWith("onDrag"))&&(o[a]=e[a]);return o}function aC(e){if(typeof Proxy>"u")return e;const n=new Map,i=(...o)=>e(...o);return new Proxy(i,{get:(o,a)=>a==="create"?e:(n.has(a)||n.set(a,e(a)),n.get(a))})}const El=b.createContext({});function Cl(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}function es(e){return typeof e=="string"||Array.isArray(e)}const Mf=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],_f=["initial",...Mf];function Tl(e){return Cl(e.animate)||_f.some(n=>es(e[n]))}function tv(e){return!!(Tl(e)||e.variants)}function lC(e,n){if(Tl(e)){const{initial:i,animate:o}=e;return{initial:i===!1||es(i)?i:void 0,animate:es(o)?o:void 0}}return e.inherit!==!1?n:{}}function uC(e){const{initial:n,animate:i}=lC(e,b.useContext(El));return b.useMemo(()=>({initial:n,animate:i}),[zg(n),zg(i)])}function zg(e){return Array.isArray(e)?e.join(" "):e}const cC=Symbol.for("motionComponentSymbol");function Ei(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function dC(e,n,i){return b.useCallback(o=>{o&&e.onMount&&e.onMount(o),n&&(o?n.mount(o):n.unmount()),i&&(typeof i=="function"?i(o):Ei(i)&&(i.current=o))},[n])}const Bf=e=>e.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),fC="framerAppearId",nv="data-"+Bf(fC),rv=b.createContext({});function pC(e,n,i,o,a){var T,E;const{visualElement:u}=b.useContext(El),c=b.useContext(Zx),d=b.useContext(kl),p=b.useContext(hf).reducedMotion,m=b.useRef(null);o=o||c.renderer,!m.current&&o&&(m.current=o(e,{visualState:n,parent:u,props:i,presenceContext:d,blockInitialAnimation:d?d.initial===!1:!1,reducedMotionConfig:p}));const g=m.current,x=b.useContext(rv);g&&!g.projection&&a&&(g.type==="html"||g.type==="svg")&&hC(m.current,i,a,x);const w=b.useRef(!1);b.useInsertionEffect(()=>{g&&w.current&&g.update(i,d)});const S=i[nv],k=b.useRef(!!S&&!((T=window.MotionHandoffIsComplete)!=null&&T.call(window,S))&&((E=window.MotionHasOptimisedAnimation)==null?void 0:E.call(window,S)));return ux(()=>{g&&(w.current=!0,window.MotionIsMounted=!0,g.updateFeatures(),Lf.render(g.render),k.current&&g.animationState&&g.animationState.animateChanges())}),b.useEffect(()=>{g&&(!k.current&&g.animationState&&g.animationState.animateChanges(),k.current&&(queueMicrotask(()=>{var P;(P=window.MotionHandoffMarkAsComplete)==null||P.call(window,S)}),k.current=!1))}),g}function hC(e,n,i,o){const{layoutId:a,layout:u,drag:c,dragConstraints:d,layoutScroll:p,layoutRoot:m,layoutCrossfade:g}=n;e.projection=new i(e.latestValues,n["data-framer-portal-id"]?void 0:iv(e.parent)),e.projection.setOptions({layoutId:a,layout:u,alwaysMeasureLayout:!!c||d&&Ei(d),visualElement:e,animationType:typeof u=="string"?u:"both",initialPromotionConfig:o,crossfade:g,layoutScroll:p,layoutRoot:m})}function iv(e){if(e)return e.options.allowProjection!==!1?e.projection:iv(e.parent)}function mC({preloadedFeatures:e,createVisualElement:n,useRender:i,useVisualState:o,Component:a}){e&&rC(e);function u(d,p){let m;const g={...b.useContext(hf),...d,layoutId:gC(d)},{isStatic:x}=g,w=uC(d),S=o(d,x);if(!x&&pf){yC();const k=xC(g);m=k.MeasureLayout,w.visualElement=pC(a,S,g,n,k.ProjectionNode)}return y.jsxs(El.Provider,{value:w,children:[m&&w.visualElement?y.jsx(m,{visualElement:w.visualElement,...g}):null,i(a,d,dC(S,w.visualElement,p),S,x,w.visualElement)]})}u.displayName=`motion.${typeof a=="string"?a:`create(${a.displayName??a.name??""})`}`;const c=b.forwardRef(u);return c[cC]=a,c}function gC({layoutId:e}){const n=b.useContext(df).id;return n&&e!==void 0?n+"-"+e:e}function yC(e,n){b.useContext(Zx).strict}function xC(e){const{drag:n,layout:i}=Li;if(!n&&!i)return{};const o={...n,...i};return{MeasureLayout:n!=null&&n.isEnabled(e)||i!=null&&i.isEnabled(e)?o.MeasureLayout:void 0,ProjectionNode:o.ProjectionNode}}const ts={};function vC(e){for(const n in e)ts[n]=e[n],bf(n)&&(ts[n].isCSSVariable=!0)}function ov(e,{layout:n,layoutId:i}){return Vi.has(e)||e.startsWith("origin")||(n||i!==void 0)&&(!!ts[e]||e==="opacity")}const gt=e=>!!(e&&e.getVelocity),wC={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},SC=Ni.length;function bC(e,n,i){let o="",a=!0;for(let u=0;u<SC;u++){const c=Ni[u],d=e[c];if(d===void 0)continue;let p=!0;if(typeof d=="number"?p=d===(c.startsWith("scale")?1:0):p=parseFloat(d)===0,!p||i){const m=Jx(d,If[c]);if(!p){a=!1;const g=wC[c]||c;o+=`${g}(${m}) `}i&&(n[c]=m)}}return o=o.trim(),i?o=i(n,a?"":o):a&&(o="none"),o}function Of(e,n,i){const{style:o,vars:a,transformOrigin:u}=e;let c=!1,d=!1;for(const p in n){const m=n[p];if(Vi.has(p)){c=!0;continue}else if(bf(p)){a[p]=m;continue}else{const g=Jx(m,If[p]);p.startsWith("origin")?(d=!0,u[p]=g):o[p]=g}}if(n.transform||(c||i?o.transform=bC(n,e.transform,i):o.transform&&(o.transform="none")),d){const{originX:p="50%",originY:m="50%",originZ:g=0}=u;o.transformOrigin=`${p} ${m} ${g}`}}const Ff=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function sv(e,n,i){for(const o in n)!gt(n[o])&&!ov(o,i)&&(e[o]=n[o])}function kC({transformTemplate:e},n){return b.useMemo(()=>{const i=Ff();return Of(i,n,e),Object.assign({},i.vars,i.style)},[n])}function EC(e,n){const i=e.style||{},o={};return sv(o,i,e),Object.assign(o,kC(e,n)),o}function CC(e,n){const i={},o=EC(e,n);return e.drag&&e.dragListener!==!1&&(i.draggable=!1,o.userSelect=o.WebkitUserSelect=o.WebkitTouchCallout="none",o.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(i.tabIndex=0),i.style=o,i}const TC=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Nf(e){return typeof e!="string"||e.includes("-")?!1:!!(TC.indexOf(e)>-1||/[A-Z]/u.test(e))}const PC={offset:"stroke-dashoffset",array:"stroke-dasharray"},jC={offset:"strokeDashoffset",array:"strokeDasharray"};function RC(e,n,i=1,o=0,a=!0){e.pathLength=1;const u=a?PC:jC;e[u.offset]=le.transform(-o);const c=le.transform(n),d=le.transform(i);e[u.array]=`${c} ${d}`}function av(e,{attrX:n,attrY:i,attrScale:o,pathLength:a,pathSpacing:u=1,pathOffset:c=0,...d},p,m){if(Of(e,d,m),p){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:g,style:x}=e;g.transform&&(x.transform=g.transform,delete g.transform),(x.transform||g.transformOrigin)&&(x.transformOrigin=g.transformOrigin??"50% 50%",delete g.transformOrigin),x.transform&&(x.transformBox="fill-box",delete g.transformBox),n!==void 0&&(g.x=n),i!==void 0&&(g.y=i),o!==void 0&&(g.scale=o),a!==void 0&&RC(g,a,u,c,!1)}const lv=()=>({...Ff(),attrs:{}}),uv=e=>typeof e=="string"&&e.toLowerCase()==="svg";function AC(e,n,i,o){const a=b.useMemo(()=>{const u=lv();return av(u,n,uv(o),e.transformTemplate),{...u.attrs,style:{...u.style}}},[n]);if(e.style){const u={};sv(u,e.style,e),a.style={...u,...a.style}}return a}function DC(e=!1){return(i,o,a,{latestValues:u},c)=>{const p=(Nf(i)?AC:CC)(o,u,c,i),m=sC(o,typeof i=="string",e),g=i!==b.Fragment?{...m,...p,ref:a}:{},{children:x}=o,w=b.useMemo(()=>gt(x)?x.get():x,[x]);return b.createElement(i,{...g,children:w})}}function Ug(e){const n=[{},{}];return e==null||e.values.forEach((i,o)=>{n[0][o]=i.get(),n[1][o]=i.getVelocity()}),n}function Vf(e,n,i,o){if(typeof n=="function"){const[a,u]=Ug(o);n=n(i!==void 0?i:e.custom,a,u)}if(typeof n=="string"&&(n=e.variants&&e.variants[n]),typeof n=="function"){const[a,u]=Ug(o);n=n(i!==void 0?i:e.custom,a,u)}return n}function qa(e){return gt(e)?e.get():e}function IC({scrapeMotionValuesFromProps:e,createRenderState:n},i,o,a){return{latestValues:LC(i,o,a,e),renderState:n()}}const cv=e=>(n,i)=>{const o=b.useContext(El),a=b.useContext(kl),u=()=>IC(e,n,o,a);return i?u():ff(u)};function LC(e,n,i,o){const a={},u=o(e,{});for(const w in u)a[w]=qa(u[w]);let{initial:c,animate:d}=e;const p=Tl(e),m=tv(e);n&&m&&!p&&e.inherit!==!1&&(c===void 0&&(c=n.initial),d===void 0&&(d=n.animate));let g=i?i.initial===!1:!1;g=g||c===!1;const x=g?d:c;if(x&&typeof x!="boolean"&&!Cl(x)){const w=Array.isArray(x)?x:[x];for(let S=0;S<w.length;S++){const k=Vf(e,w[S]);if(k){const{transitionEnd:T,transition:E,...P}=k;for(const L in P){let A=P[L];if(Array.isArray(A)){const F=g?A.length-1:0;A=A[F]}A!==null&&(a[L]=A)}for(const L in T)a[L]=T[L]}}}return a}function zf(e,n,i){var u;const{style:o}=e,a={};for(const c in o)(gt(o[c])||n.style&&gt(n.style[c])||ov(c,e)||((u=i==null?void 0:i.getValue(c))==null?void 0:u.liveStyle)!==void 0)&&(a[c]=o[c]);return a}const $C={useVisualState:cv({scrapeMotionValuesFromProps:zf,createRenderState:Ff})};function dv(e,n,i){const o=zf(e,n,i);for(const a in e)if(gt(e[a])||gt(n[a])){const u=Ni.indexOf(a)!==-1?"attr"+a.charAt(0).toUpperCase()+a.substring(1):a;o[u]=e[a]}return o}const MC={useVisualState:cv({scrapeMotionValuesFromProps:dv,createRenderState:lv})};function _C(e,n){return function(o,{forwardMotionProps:a}={forwardMotionProps:!1}){const c={...Nf(o)?MC:$C,preloadedFeatures:e,useRender:DC(a),createVisualElement:n,Component:o};return mC(c)}}function ns(e,n,i){const o=e.getProps();return Vf(o,n,i!==void 0?i:o.custom,e)}const Id=e=>Array.isArray(e);function BC(e,n,i){e.hasValue(n)?e.getValue(n).set(i):e.addValue(n,Zo(i))}function OC(e){return Id(e)?e[e.length-1]||0:e}function FC(e,n){const i=ns(e,n);let{transitionEnd:o={},transition:a={},...u}=i||{};u={...u,...o};for(const c in u){const d=OC(u[c]);BC(e,c,d)}}function NC(e){return!!(gt(e)&&e.add)}function Ld(e,n){const i=e.getValue("willChange");if(NC(i))return i.add(n);if(!i&&In.WillChange){const o=new In.WillChange("auto");e.addValue("willChange",o),o.add(n)}}function fv(e){return e.props[nv]}const VC=e=>e!==null;function zC(e,{repeat:n,repeatType:i="loop"},o){const a=e.filter(VC),u=n&&i!=="loop"&&n%2===1?0:a.length-1;return a[u]}const UC={type:"spring",stiffness:500,damping:25,restSpeed:10},WC=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),HC={type:"keyframes",duration:.8},KC={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},GC=(e,{keyframes:n})=>n.length>2?HC:Vi.has(e)?e.startsWith("scale")?WC(n[1]):UC:KC;function YC({when:e,delay:n,delayChildren:i,staggerChildren:o,staggerDirection:a,repeat:u,repeatType:c,repeatDelay:d,from:p,elapsed:m,...g}){return!!Object.keys(g).length}const Uf=(e,n,i,o={},a,u)=>c=>{const d=Df(o,e)||{},p=d.delay||o.delay||0;let{elapsed:m=0}=o;m=m-mn(p);const g={keyframes:Array.isArray(i)?i:[null,i],ease:"easeOut",velocity:n.getVelocity(),...d,delay:-m,onUpdate:w=>{n.set(w),d.onUpdate&&d.onUpdate(w)},onComplete:()=>{c(),d.onComplete&&d.onComplete()},name:e,motionValue:n,element:u?void 0:a};YC(d)||Object.assign(g,GC(e,g)),g.duration&&(g.duration=mn(g.duration)),g.repeatDelay&&(g.repeatDelay=mn(g.repeatDelay)),g.from!==void 0&&(g.keyframes[0]=g.from);let x=!1;if((g.type===!1||g.duration===0&&!g.repeatDelay)&&(g.duration=0,g.delay===0&&(x=!0)),(In.instantAnimations||In.skipAnimations)&&(x=!0,g.duration=0,g.delay=0),g.allowFlatten=!d.type&&!d.ease,x&&!u&&n.get()!==void 0){const w=zC(g.keyframes,d);if(w!==void 0){Be.update(()=>{g.onUpdate(w),g.onComplete()});return}}return new LE(g)};function qC({protectedKeys:e,needsAnimating:n},i){const o=e.hasOwnProperty(i)&&n[i]!==!0;return n[i]=!1,o}function pv(e,n,{delay:i=0,transitionOverride:o,type:a}={}){let{transition:u=e.getDefaultTransition(),transitionEnd:c,...d}=n;o&&(u=o);const p=[],m=a&&e.animationState&&e.animationState.getState()[a];for(const g in d){const x=e.getValue(g,e.latestValues[g]??null),w=d[g];if(w===void 0||m&&qC(m,g))continue;const S={delay:i,...Df(u||{},g)},k=x.get();if(k!==void 0&&!x.isAnimating&&!Array.isArray(w)&&w===k&&!S.velocity)continue;let T=!1;if(window.MotionHandoffAnimation){const P=fv(e);if(P){const L=window.MotionHandoffAnimation(P,g,Be);L!==null&&(S.startTime=L,T=!0)}}Ld(e,g),x.start(Uf(g,x,w,e.shouldReduceMotion&&Wx.has(g)?{type:!1}:S,e,T));const E=x.animation;E&&p.push(E)}return c&&Promise.all(p).then(()=>{Be.update(()=>{c&&FC(e,c)})}),p}function $d(e,n,i={}){var p;const o=ns(e,n,i.type==="exit"?(p=e.presenceContext)==null?void 0:p.custom:void 0);let{transition:a=e.getDefaultTransition()||{}}=o||{};i.transitionOverride&&(a=i.transitionOverride);const u=o?()=>Promise.all(pv(e,o,i)):()=>Promise.resolve(),c=e.variantChildren&&e.variantChildren.size?(m=0)=>{const{delayChildren:g=0,staggerChildren:x,staggerDirection:w}=a;return XC(e,n,g+m,x,w,i)}:()=>Promise.resolve(),{when:d}=a;if(d){const[m,g]=d==="beforeChildren"?[u,c]:[c,u];return m().then(()=>g())}else return Promise.all([u(),c(i.delay)])}function XC(e,n,i=0,o=0,a=1,u){const c=[],d=(e.variantChildren.size-1)*o,p=a===1?(m=0)=>m*o:(m=0)=>d-m*o;return Array.from(e.variantChildren).sort(QC).forEach((m,g)=>{m.notify("AnimationStart",n),c.push($d(m,n,{...u,delay:i+p(g)}).then(()=>m.notify("AnimationComplete",n)))}),Promise.all(c)}function QC(e,n){return e.sortNodePosition(n)}function JC(e,n,i={}){e.notify("AnimationStart",n);let o;if(Array.isArray(n)){const a=n.map(u=>$d(e,u,i));o=Promise.all(a)}else if(typeof n=="string")o=$d(e,n,i);else{const a=typeof n=="function"?ns(e,n,i.custom):n;o=Promise.all(pv(e,a,i))}return o.then(()=>{e.notify("AnimationComplete",n)})}function hv(e,n){if(!Array.isArray(n))return!1;const i=n.length;if(i!==e.length)return!1;for(let o=0;o<i;o++)if(n[o]!==e[o])return!1;return!0}const ZC=_f.length;function mv(e){if(!e)return;if(!e.isControllingVariants){const i=e.parent?mv(e.parent)||{}:{};return e.props.initial!==void 0&&(i.initial=e.props.initial),i}const n={};for(let i=0;i<ZC;i++){const o=_f[i],a=e.props[o];(es(a)||a===!1)&&(n[o]=a)}return n}const eT=[...Mf].reverse(),tT=Mf.length;function nT(e){return n=>Promise.all(n.map(({animation:i,options:o})=>JC(e,i,o)))}function rT(e){let n=nT(e),i=Wg(),o=!0;const a=p=>(m,g)=>{var w;const x=ns(e,g,p==="exit"?(w=e.presenceContext)==null?void 0:w.custom:void 0);if(x){const{transition:S,transitionEnd:k,...T}=x;m={...m,...T,...k}}return m};function u(p){n=p(e)}function c(p){const{props:m}=e,g=mv(e.parent)||{},x=[],w=new Set;let S={},k=1/0;for(let E=0;E<tT;E++){const P=eT[E],L=i[P],A=m[P]!==void 0?m[P]:g[P],F=es(A),O=P===p?L.isActive:null;O===!1&&(k=E);let V=A===g[P]&&A!==m[P]&&F;if(V&&o&&e.manuallyAnimateOnMount&&(V=!1),L.protectedKeys={...S},!L.isActive&&O===null||!A&&!L.prevProp||Cl(A)||typeof A=="boolean")continue;const W=iT(L.prevProp,A);let H=W||P===p&&L.isActive&&!V&&F||E>k&&F,Q=!1;const ae=Array.isArray(A)?A:[A];let se=ae.reduce(a(P),{});O===!1&&(se={});const{prevResolvedValues:Te={}}=L,He={...Te,...se},ut=ce=>{H=!0,w.has(ce)&&(Q=!0,w.delete(ce)),L.needsAnimating[ce]=!0;const q=e.getValue(ce);q&&(q.liveStyle=!1)};for(const ce in He){const q=se[ce],te=Te[ce];if(S.hasOwnProperty(ce))continue;let X=!1;Id(q)&&Id(te)?X=!hv(q,te):X=q!==te,X?q!=null?ut(ce):w.add(ce):q!==void 0&&w.has(ce)?ut(ce):L.protectedKeys[ce]=!0}L.prevProp=A,L.prevResolvedValues=se,L.isActive&&(S={...S,...se}),o&&e.blockInitialAnimation&&(H=!1),H&&(!(V&&W)||Q)&&x.push(...ae.map(ce=>({animation:ce,options:{type:P}})))}if(w.size){const E={};if(typeof m.initial!="boolean"){const P=ns(e,Array.isArray(m.initial)?m.initial[0]:m.initial);P&&P.transition&&(E.transition=P.transition)}w.forEach(P=>{const L=e.getBaseTarget(P),A=e.getValue(P);A&&(A.liveStyle=!0),E[P]=L??null}),x.push({animation:E})}let T=!!x.length;return o&&(m.initial===!1||m.initial===m.animate)&&!e.manuallyAnimateOnMount&&(T=!1),o=!1,T?n(x):Promise.resolve()}function d(p,m){var x;if(i[p].isActive===m)return Promise.resolve();(x=e.variantChildren)==null||x.forEach(w=>{var S;return(S=w.animationState)==null?void 0:S.setActive(p,m)}),i[p].isActive=m;const g=c(p);for(const w in i)i[w].protectedKeys={};return g}return{animateChanges:c,setActive:d,setAnimateFunction:u,getState:()=>i,reset:()=>{i=Wg(),o=!0}}}function iT(e,n){return typeof n=="string"?n!==e:Array.isArray(n)?!hv(n,e):!1}function Tr(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Wg(){return{animate:Tr(!0),whileInView:Tr(),whileHover:Tr(),whileTap:Tr(),whileDrag:Tr(),whileFocus:Tr(),exit:Tr()}}class dr{constructor(n){this.isMounted=!1,this.node=n}update(){}}class oT extends dr{constructor(n){super(n),n.animationState||(n.animationState=rT(n))}updateAnimationControlsSubscription(){const{animate:n}=this.node.getProps();Cl(n)&&(this.unmountControls=n.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:n}=this.node.getProps(),{animate:i}=this.node.prevProps||{};n!==i&&this.updateAnimationControlsSubscription()}unmount(){var n;this.node.animationState.reset(),(n=this.unmountControls)==null||n.call(this)}}let sT=0;class aT extends dr{constructor(){super(...arguments),this.id=sT++}update(){if(!this.node.presenceContext)return;const{isPresent:n,onExitComplete:i}=this.node.presenceContext,{isPresent:o}=this.node.prevPresenceContext||{};if(!this.node.animationState||n===o)return;const a=this.node.animationState.setActive("exit",!n);i&&!n&&a.then(()=>{i(this.id)})}mount(){const{register:n,onExitComplete:i}=this.node.presenceContext||{};i&&i(this.id),n&&(this.unmount=n(this.id))}unmount(){}}const lT={animation:{Feature:oT},exit:{Feature:aT}};function rs(e,n,i,o={passive:!0}){return e.addEventListener(n,i,o),()=>e.removeEventListener(n,i)}function cs(e){return{point:{x:e.pageX,y:e.pageY}}}const uT=e=>n=>$f(n)&&e(n,cs(n));function zo(e,n,i,o){return rs(e,n,uT(i),o)}function gv({top:e,left:n,right:i,bottom:o}){return{x:{min:n,max:i},y:{min:e,max:o}}}function cT({x:e,y:n}){return{top:n.min,right:e.max,bottom:n.max,left:e.min}}function dT(e,n){if(!n)return e;const i=n({x:e.left,y:e.top}),o=n({x:e.right,y:e.bottom});return{top:i.y,left:i.x,bottom:o.y,right:o.x}}const yv=1e-4,fT=1-yv,pT=1+yv,xv=.01,hT=0-xv,mT=0+xv;function vt(e){return e.max-e.min}function gT(e,n,i){return Math.abs(e-n)<=i}function Hg(e,n,i,o=.5){e.origin=o,e.originPoint=_e(n.min,n.max,e.origin),e.scale=vt(i)/vt(n),e.translate=_e(i.min,i.max,e.origin)-e.originPoint,(e.scale>=fT&&e.scale<=pT||isNaN(e.scale))&&(e.scale=1),(e.translate>=hT&&e.translate<=mT||isNaN(e.translate))&&(e.translate=0)}function Uo(e,n,i,o){Hg(e.x,n.x,i.x,o?o.originX:void 0),Hg(e.y,n.y,i.y,o?o.originY:void 0)}function Kg(e,n,i){e.min=i.min+n.min,e.max=e.min+vt(n)}function yT(e,n,i){Kg(e.x,n.x,i.x),Kg(e.y,n.y,i.y)}function Gg(e,n,i){e.min=n.min-i.min,e.max=e.min+vt(n)}function Wo(e,n,i){Gg(e.x,n.x,i.x),Gg(e.y,n.y,i.y)}const Yg=()=>({translate:0,scale:1,origin:0,originPoint:0}),Ci=()=>({x:Yg(),y:Yg()}),qg=()=>({min:0,max:0}),ze=()=>({x:qg(),y:qg()});function zt(e){return[e("x"),e("y")]}function Hc(e){return e===void 0||e===1}function Md({scale:e,scaleX:n,scaleY:i}){return!Hc(e)||!Hc(n)||!Hc(i)}function Pr(e){return Md(e)||vv(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function vv(e){return Xg(e.x)||Xg(e.y)}function Xg(e){return e&&e!=="0%"}function dl(e,n,i){const o=e-i,a=n*o;return i+a}function Qg(e,n,i,o,a){return a!==void 0&&(e=dl(e,a,o)),dl(e,i,o)+n}function _d(e,n=0,i=1,o,a){e.min=Qg(e.min,n,i,o,a),e.max=Qg(e.max,n,i,o,a)}function wv(e,{x:n,y:i}){_d(e.x,n.translate,n.scale,n.originPoint),_d(e.y,i.translate,i.scale,i.originPoint)}const Jg=.999999999999,Zg=1.0000000000001;function xT(e,n,i,o=!1){const a=i.length;if(!a)return;n.x=n.y=1;let u,c;for(let d=0;d<a;d++){u=i[d],c=u.projectionDelta;const{visualElement:p}=u.options;p&&p.props.style&&p.props.style.display==="contents"||(o&&u.options.layoutScroll&&u.scroll&&u!==u.root&&Pi(e,{x:-u.scroll.offset.x,y:-u.scroll.offset.y}),c&&(n.x*=c.x.scale,n.y*=c.y.scale,wv(e,c)),o&&Pr(u.latestValues)&&Pi(e,u.latestValues))}n.x<Zg&&n.x>Jg&&(n.x=1),n.y<Zg&&n.y>Jg&&(n.y=1)}function Ti(e,n){e.min=e.min+n,e.max=e.max+n}function e0(e,n,i,o,a=.5){const u=_e(e.min,e.max,a);_d(e,n,i,u,o)}function Pi(e,n){e0(e.x,n.x,n.scaleX,n.scale,n.originX),e0(e.y,n.y,n.scaleY,n.scale,n.originY)}function Sv(e,n){return gv(dT(e.getBoundingClientRect(),n))}function vT(e,n,i){const o=Sv(e,i),{scroll:a}=n;return a&&(Ti(o.x,a.offset.x),Ti(o.y,a.offset.y)),o}const bv=({current:e})=>e?e.ownerDocument.defaultView:null,t0=(e,n)=>Math.abs(e-n);function wT(e,n){const i=t0(e.x,n.x),o=t0(e.y,n.y);return Math.sqrt(i**2+o**2)}class kv{constructor(n,i,{transformPagePoint:o,contextWindow:a,dragSnapToOrigin:u=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const x=Gc(this.lastMoveEventInfo,this.history),w=this.startEvent!==null,S=wT(x.offset,{x:0,y:0})>=3;if(!w&&!S)return;const{point:k}=x,{timestamp:T}=at;this.history.push({...k,timestamp:T});const{onStart:E,onMove:P}=this.handlers;w||(E&&E(this.lastMoveEvent,x),this.startEvent=this.lastMoveEvent),P&&P(this.lastMoveEvent,x)},this.handlePointerMove=(x,w)=>{this.lastMoveEvent=x,this.lastMoveEventInfo=Kc(w,this.transformPagePoint),Be.update(this.updatePoint,!0)},this.handlePointerUp=(x,w)=>{this.end();const{onEnd:S,onSessionEnd:k,resumeAnimation:T}=this.handlers;if(this.dragSnapToOrigin&&T&&T(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const E=Gc(x.type==="pointercancel"?this.lastMoveEventInfo:Kc(w,this.transformPagePoint),this.history);this.startEvent&&S&&S(x,E),k&&k(x,E)},!$f(n))return;this.dragSnapToOrigin=u,this.handlers=i,this.transformPagePoint=o,this.contextWindow=a||window;const c=cs(n),d=Kc(c,this.transformPagePoint),{point:p}=d,{timestamp:m}=at;this.history=[{...p,timestamp:m}];const{onSessionStart:g}=i;g&&g(n,Gc(d,this.history)),this.removeListeners=as(zo(this.contextWindow,"pointermove",this.handlePointerMove),zo(this.contextWindow,"pointerup",this.handlePointerUp),zo(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(n){this.handlers=n}end(){this.removeListeners&&this.removeListeners(),ur(this.updatePoint)}}function Kc(e,n){return n?{point:n(e.point)}:e}function n0(e,n){return{x:e.x-n.x,y:e.y-n.y}}function Gc({point:e},n){return{point:e,delta:n0(e,Ev(n)),offset:n0(e,ST(n)),velocity:bT(n,.1)}}function ST(e){return e[0]}function Ev(e){return e[e.length-1]}function bT(e,n){if(e.length<2)return{x:0,y:0};let i=e.length-1,o=null;const a=Ev(e);for(;i>=0&&(o=e[i],!(a.timestamp-o.timestamp>mn(n)));)i--;if(!o)return{x:0,y:0};const u=gn(a.timestamp-o.timestamp);if(u===0)return{x:0,y:0};const c={x:(a.x-o.x)/u,y:(a.y-o.y)/u};return c.x===1/0&&(c.x=0),c.y===1/0&&(c.y=0),c}function kT(e,{min:n,max:i},o){return n!==void 0&&e<n?e=o?_e(n,e,o.min):Math.max(e,n):i!==void 0&&e>i&&(e=o?_e(i,e,o.max):Math.min(e,i)),e}function r0(e,n,i){return{min:n!==void 0?e.min+n:void 0,max:i!==void 0?e.max+i-(e.max-e.min):void 0}}function ET(e,{top:n,left:i,bottom:o,right:a}){return{x:r0(e.x,i,a),y:r0(e.y,n,o)}}function i0(e,n){let i=n.min-e.min,o=n.max-e.max;return n.max-n.min<e.max-e.min&&([i,o]=[o,i]),{min:i,max:o}}function CT(e,n){return{x:i0(e.x,n.x),y:i0(e.y,n.y)}}function TT(e,n){let i=.5;const o=vt(e),a=vt(n);return a>o?i=Xo(n.min,n.max-o,e.min):o>a&&(i=Xo(e.min,e.max-a,n.min)),Dn(0,1,i)}function PT(e,n){const i={};return n.min!==void 0&&(i.min=n.min-e.min),n.max!==void 0&&(i.max=n.max-e.min),i}const Bd=.35;function jT(e=Bd){return e===!1?e=0:e===!0&&(e=Bd),{x:o0(e,"left","right"),y:o0(e,"top","bottom")}}function o0(e,n,i){return{min:s0(e,n),max:s0(e,i)}}function s0(e,n){return typeof e=="number"?e:e[n]||0}const RT=new WeakMap;class AT{constructor(n){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=ze(),this.visualElement=n}start(n,{snapToCursor:i=!1}={}){const{presenceContext:o}=this.visualElement;if(o&&o.isPresent===!1)return;const a=g=>{const{dragSnapToOrigin:x}=this.getProps();x?this.pauseAnimation():this.stopAnimation(),i&&this.snapToCursor(cs(g).point)},u=(g,x)=>{const{drag:w,dragPropagation:S,onDragStart:k}=this.getProps();if(w&&!S&&(this.openDragLock&&this.openDragLock(),this.openDragLock=GE(w),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),zt(E=>{let P=this.getAxisMotionValue(E).get()||0;if(yn.test(P)){const{projection:L}=this.visualElement;if(L&&L.layout){const A=L.layout.layoutBox[E];A&&(P=vt(A)*(parseFloat(P)/100))}}this.originPoint[E]=P}),k&&Be.postRender(()=>k(g,x)),Ld(this.visualElement,"transform");const{animationState:T}=this.visualElement;T&&T.setActive("whileDrag",!0)},c=(g,x)=>{const{dragPropagation:w,dragDirectionLock:S,onDirectionLock:k,onDrag:T}=this.getProps();if(!w&&!this.openDragLock)return;const{offset:E}=x;if(S&&this.currentDirection===null){this.currentDirection=DT(E),this.currentDirection!==null&&k&&k(this.currentDirection);return}this.updateAxis("x",x.point,E),this.updateAxis("y",x.point,E),this.visualElement.render(),T&&T(g,x)},d=(g,x)=>this.stop(g,x),p=()=>zt(g=>{var x;return this.getAnimationState(g)==="paused"&&((x=this.getAxisMotionValue(g).animation)==null?void 0:x.play())}),{dragSnapToOrigin:m}=this.getProps();this.panSession=new kv(n,{onSessionStart:a,onStart:u,onMove:c,onSessionEnd:d,resumeAnimation:p},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:m,contextWindow:bv(this.visualElement)})}stop(n,i){const o=this.isDragging;if(this.cancel(),!o)return;const{velocity:a}=i;this.startAnimation(a);const{onDragEnd:u}=this.getProps();u&&Be.postRender(()=>u(n,i))}cancel(){this.isDragging=!1;const{projection:n,animationState:i}=this.visualElement;n&&(n.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:o}=this.getProps();!o&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),i&&i.setActive("whileDrag",!1)}updateAxis(n,i,o){const{drag:a}=this.getProps();if(!o||!Aa(n,a,this.currentDirection))return;const u=this.getAxisMotionValue(n);let c=this.originPoint[n]+o[n];this.constraints&&this.constraints[n]&&(c=kT(c,this.constraints[n],this.elastic[n])),u.set(c)}resolveConstraints(){var u;const{dragConstraints:n,dragElastic:i}=this.getProps(),o=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(u=this.visualElement.projection)==null?void 0:u.layout,a=this.constraints;n&&Ei(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&o?this.constraints=ET(o.layoutBox,n):this.constraints=!1,this.elastic=jT(i),a!==this.constraints&&o&&this.constraints&&!this.hasMutatedConstraints&&zt(c=>{this.constraints!==!1&&this.getAxisMotionValue(c)&&(this.constraints[c]=PT(o.layoutBox[c],this.constraints[c]))})}resolveRefConstraints(){const{dragConstraints:n,onMeasureDragConstraints:i}=this.getProps();if(!n||!Ei(n))return!1;const o=n.current,{projection:a}=this.visualElement;if(!a||!a.layout)return!1;const u=vT(o,a.root,this.visualElement.getTransformPagePoint());let c=CT(a.layout.layoutBox,u);if(i){const d=i(cT(c));this.hasMutatedConstraints=!!d,d&&(c=gv(d))}return c}startAnimation(n){const{drag:i,dragMomentum:o,dragElastic:a,dragTransition:u,dragSnapToOrigin:c,onDragTransitionEnd:d}=this.getProps(),p=this.constraints||{},m=zt(g=>{if(!Aa(g,i,this.currentDirection))return;let x=p&&p[g]||{};c&&(x={min:0,max:0});const w=a?200:1e6,S=a?40:1e7,k={type:"inertia",velocity:o?n[g]:0,bounceStiffness:w,bounceDamping:S,timeConstant:750,restDelta:1,restSpeed:10,...u,...x};return this.startAxisValueAnimation(g,k)});return Promise.all(m).then(d)}startAxisValueAnimation(n,i){const o=this.getAxisMotionValue(n);return Ld(this.visualElement,n),o.start(Uf(n,o,0,i,this.visualElement,!1))}stopAnimation(){zt(n=>this.getAxisMotionValue(n).stop())}pauseAnimation(){zt(n=>{var i;return(i=this.getAxisMotionValue(n).animation)==null?void 0:i.pause()})}getAnimationState(n){var i;return(i=this.getAxisMotionValue(n).animation)==null?void 0:i.state}getAxisMotionValue(n){const i=`_drag${n.toUpperCase()}`,o=this.visualElement.getProps(),a=o[i];return a||this.visualElement.getValue(n,(o.initial?o.initial[n]:void 0)||0)}snapToCursor(n){zt(i=>{const{drag:o}=this.getProps();if(!Aa(i,o,this.currentDirection))return;const{projection:a}=this.visualElement,u=this.getAxisMotionValue(i);if(a&&a.layout){const{min:c,max:d}=a.layout.layoutBox[i];u.set(n[i]-_e(c,d,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:n,dragConstraints:i}=this.getProps(),{projection:o}=this.visualElement;if(!Ei(i)||!o||!this.constraints)return;this.stopAnimation();const a={x:0,y:0};zt(c=>{const d=this.getAxisMotionValue(c);if(d&&this.constraints!==!1){const p=d.get();a[c]=TT({min:p,max:p},this.constraints[c])}});const{transformTemplate:u}=this.visualElement.getProps();this.visualElement.current.style.transform=u?u({},""):"none",o.root&&o.root.updateScroll(),o.updateLayout(),this.resolveConstraints(),zt(c=>{if(!Aa(c,n,null))return;const d=this.getAxisMotionValue(c),{min:p,max:m}=this.constraints[c];d.set(_e(p,m,a[c]))})}addListeners(){if(!this.visualElement.current)return;RT.set(this.visualElement,this);const n=this.visualElement.current,i=zo(n,"pointerdown",p=>{const{drag:m,dragListener:g=!0}=this.getProps();m&&g&&this.start(p)}),o=()=>{const{dragConstraints:p}=this.getProps();Ei(p)&&p.current&&(this.constraints=this.resolveRefConstraints())},{projection:a}=this.visualElement,u=a.addEventListener("measure",o);a&&!a.layout&&(a.root&&a.root.updateScroll(),a.updateLayout()),Be.read(o);const c=rs(window,"resize",()=>this.scalePositionWithinConstraints()),d=a.addEventListener("didUpdate",({delta:p,hasLayoutChanged:m})=>{this.isDragging&&m&&(zt(g=>{const x=this.getAxisMotionValue(g);x&&(this.originPoint[g]+=p[g].translate,x.set(x.get()+p[g].translate))}),this.visualElement.render())});return()=>{c(),i(),u(),d&&d()}}getProps(){const n=this.visualElement.getProps(),{drag:i=!1,dragDirectionLock:o=!1,dragPropagation:a=!1,dragConstraints:u=!1,dragElastic:c=Bd,dragMomentum:d=!0}=n;return{...n,drag:i,dragDirectionLock:o,dragPropagation:a,dragConstraints:u,dragElastic:c,dragMomentum:d}}}function Aa(e,n,i){return(n===!0||n===e)&&(i===null||i===e)}function DT(e,n=10){let i=null;return Math.abs(e.y)>n?i="y":Math.abs(e.x)>n&&(i="x"),i}class IT extends dr{constructor(n){super(n),this.removeGroupControls=Ut,this.removeListeners=Ut,this.controls=new AT(n)}mount(){const{dragControls:n}=this.node.getProps();n&&(this.removeGroupControls=n.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Ut}unmount(){this.removeGroupControls(),this.removeListeners()}}const a0=e=>(n,i)=>{e&&Be.postRender(()=>e(n,i))};class LT extends dr{constructor(){super(...arguments),this.removePointerDownListener=Ut}onPointerDown(n){this.session=new kv(n,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:bv(this.node)})}createPanHandlers(){const{onPanSessionStart:n,onPanStart:i,onPan:o,onPanEnd:a}=this.node.getProps();return{onSessionStart:a0(n),onStart:a0(i),onMove:o,onEnd:(u,c)=>{delete this.session,a&&Be.postRender(()=>a(u,c))}}}mount(){this.removePointerDownListener=zo(this.node.current,"pointerdown",n=>this.onPointerDown(n))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const Xa={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function l0(e,n){return n.max===n.min?0:e/(n.max-n.min)*100}const Lo={correct:(e,n)=>{if(!n.target)return e;if(typeof e=="string")if(le.test(e))e=parseFloat(e);else return e;const i=l0(e,n.target.x),o=l0(e,n.target.y);return`${i}% ${o}%`}},$T={correct:(e,{treeScale:n,projectionDelta:i})=>{const o=e,a=cr.parse(e);if(a.length>5)return o;const u=cr.createTransformer(e),c=typeof a[0]!="number"?1:0,d=i.x.scale*n.x,p=i.y.scale*n.y;a[0+c]/=d,a[1+c]/=p;const m=_e(d,p,.5);return typeof a[2+c]=="number"&&(a[2+c]/=m),typeof a[3+c]=="number"&&(a[3+c]/=m),u(a)}};class MT extends b.Component{componentDidMount(){const{visualElement:n,layoutGroup:i,switchLayoutGroup:o,layoutId:a}=this.props,{projection:u}=n;vC(_T),u&&(i.group&&i.group.add(u),o&&o.register&&a&&o.register(u),u.root.didUpdate(),u.addEventListener("animationComplete",()=>{this.safeToRemove()}),u.setOptions({...u.options,onExitComplete:()=>this.safeToRemove()})),Xa.hasEverUpdated=!0}getSnapshotBeforeUpdate(n){const{layoutDependency:i,visualElement:o,drag:a,isPresent:u}=this.props,c=o.projection;return c&&(c.isPresent=u,a||n.layoutDependency!==i||i===void 0||n.isPresent!==u?c.willUpdate():this.safeToRemove(),n.isPresent!==u&&(u?c.promote():c.relegate()||Be.postRender(()=>{const d=c.getStack();(!d||!d.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:n}=this.props.visualElement;n&&(n.root.didUpdate(),Lf.postRender(()=>{!n.currentAnimation&&n.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:n,layoutGroup:i,switchLayoutGroup:o}=this.props,{projection:a}=n;a&&(a.scheduleCheckAfterUnmount(),i&&i.group&&i.group.remove(a),o&&o.deregister&&o.deregister(a))}safeToRemove(){const{safeToRemove:n}=this.props;n&&n()}render(){return null}}function Cv(e){const[n,i]=cx(),o=b.useContext(df);return y.jsx(MT,{...e,layoutGroup:o,switchLayoutGroup:b.useContext(rv),isPresent:n,safeToRemove:i})}const _T={borderRadius:{...Lo,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Lo,borderTopRightRadius:Lo,borderBottomLeftRadius:Lo,borderBottomRightRadius:Lo,boxShadow:$T};function BT(e,n,i){const o=gt(e)?e:Zo(e);return o.start(Uf("",o,n,i)),o.animation}function OT(e){return e instanceof SVGElement&&e.tagName!=="svg"}const FT=(e,n)=>e.depth-n.depth;class NT{constructor(){this.children=[],this.isDirty=!1}add(n){mf(this.children,n),this.isDirty=!0}remove(n){gf(this.children,n),this.isDirty=!0}forEach(n){this.isDirty&&this.children.sort(FT),this.isDirty=!1,this.children.forEach(n)}}function VT(e,n){const i=Tt.now(),o=({timestamp:a})=>{const u=a-i;u>=n&&(ur(o),e(u-n))};return Be.setup(o,!0),()=>ur(o)}const Tv=["TopLeft","TopRight","BottomLeft","BottomRight"],zT=Tv.length,u0=e=>typeof e=="string"?parseFloat(e):e,c0=e=>typeof e=="number"||le.test(e);function UT(e,n,i,o,a,u){a?(e.opacity=_e(0,i.opacity??1,WT(o)),e.opacityExit=_e(n.opacity??1,0,HT(o))):u&&(e.opacity=_e(n.opacity??1,i.opacity??1,o));for(let c=0;c<zT;c++){const d=`border${Tv[c]}Radius`;let p=d0(n,d),m=d0(i,d);if(p===void 0&&m===void 0)continue;p||(p=0),m||(m=0),p===0||m===0||c0(p)===c0(m)?(e[d]=Math.max(_e(u0(p),u0(m),o),0),(yn.test(m)||yn.test(p))&&(e[d]+="%")):e[d]=m}(n.rotate||i.rotate)&&(e.rotate=_e(n.rotate||0,i.rotate||0,o))}function d0(e,n){return e[n]!==void 0?e[n]:e.borderRadius}const WT=Pv(0,.5,wx),HT=Pv(.5,.95,Ut);function Pv(e,n,i){return o=>o<e?0:o>n?1:i(Xo(e,n,o))}function f0(e,n){e.min=n.min,e.max=n.max}function Vt(e,n){f0(e.x,n.x),f0(e.y,n.y)}function p0(e,n){e.translate=n.translate,e.scale=n.scale,e.originPoint=n.originPoint,e.origin=n.origin}function h0(e,n,i,o,a){return e-=n,e=dl(e,1/i,o),a!==void 0&&(e=dl(e,1/a,o)),e}function KT(e,n=0,i=1,o=.5,a,u=e,c=e){if(yn.test(n)&&(n=parseFloat(n),n=_e(c.min,c.max,n/100)-c.min),typeof n!="number")return;let d=_e(u.min,u.max,o);e===u&&(d-=n),e.min=h0(e.min,n,i,d,a),e.max=h0(e.max,n,i,d,a)}function m0(e,n,[i,o,a],u,c){KT(e,n[i],n[o],n[a],n.scale,u,c)}const GT=["x","scaleX","originX"],YT=["y","scaleY","originY"];function g0(e,n,i,o){m0(e.x,n,GT,i?i.x:void 0,o?o.x:void 0),m0(e.y,n,YT,i?i.y:void 0,o?o.y:void 0)}function y0(e){return e.translate===0&&e.scale===1}function jv(e){return y0(e.x)&&y0(e.y)}function x0(e,n){return e.min===n.min&&e.max===n.max}function qT(e,n){return x0(e.x,n.x)&&x0(e.y,n.y)}function v0(e,n){return Math.round(e.min)===Math.round(n.min)&&Math.round(e.max)===Math.round(n.max)}function Rv(e,n){return v0(e.x,n.x)&&v0(e.y,n.y)}function w0(e){return vt(e.x)/vt(e.y)}function S0(e,n){return e.translate===n.translate&&e.scale===n.scale&&e.originPoint===n.originPoint}class XT{constructor(){this.members=[]}add(n){mf(this.members,n),n.scheduleRender()}remove(n){if(gf(this.members,n),n===this.prevLead&&(this.prevLead=void 0),n===this.lead){const i=this.members[this.members.length-1];i&&this.promote(i)}}relegate(n){const i=this.members.findIndex(a=>n===a);if(i===0)return!1;let o;for(let a=i;a>=0;a--){const u=this.members[a];if(u.isPresent!==!1){o=u;break}}return o?(this.promote(o),!0):!1}promote(n,i){const o=this.lead;if(n!==o&&(this.prevLead=o,this.lead=n,n.show(),o)){o.instance&&o.scheduleRender(),n.scheduleRender(),n.resumeFrom=o,i&&(n.resumeFrom.preserveOpacity=!0),o.snapshot&&(n.snapshot=o.snapshot,n.snapshot.latestValues=o.animationValues||o.latestValues),n.root&&n.root.isUpdating&&(n.isLayoutDirty=!0);const{crossfade:a}=n.options;a===!1&&o.hide()}}exitAnimationComplete(){this.members.forEach(n=>{const{options:i,resumingFrom:o}=n;i.onExitComplete&&i.onExitComplete(),o&&o.options.onExitComplete&&o.options.onExitComplete()})}scheduleRender(){this.members.forEach(n=>{n.instance&&n.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function QT(e,n,i){let o="";const a=e.x.translate/n.x,u=e.y.translate/n.y,c=(i==null?void 0:i.z)||0;if((a||u||c)&&(o=`translate3d(${a}px, ${u}px, ${c}px) `),(n.x!==1||n.y!==1)&&(o+=`scale(${1/n.x}, ${1/n.y}) `),i){const{transformPerspective:m,rotate:g,rotateX:x,rotateY:w,skewX:S,skewY:k}=i;m&&(o=`perspective(${m}px) ${o}`),g&&(o+=`rotate(${g}deg) `),x&&(o+=`rotateX(${x}deg) `),w&&(o+=`rotateY(${w}deg) `),S&&(o+=`skewX(${S}deg) `),k&&(o+=`skewY(${k}deg) `)}const d=e.x.scale*n.x,p=e.y.scale*n.y;return(d!==1||p!==1)&&(o+=`scale(${d}, ${p})`),o||"none"}const Yc=["","X","Y","Z"],JT={visibility:"hidden"},b0=1e3;let ZT=0;function qc(e,n,i,o){const{latestValues:a}=n;a[e]&&(i[e]=a[e],n.setStaticValue(e,0),o&&(o[e]=0))}function Av(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:n}=e.options;if(!n)return;const i=fv(n);if(window.MotionHasOptimisedAnimation(i,"transform")){const{layout:a,layoutId:u}=e.options;window.MotionCancelOptimisedAnimation(i,"transform",Be,!(a||u))}const{parent:o}=e;o&&!o.hasCheckedOptimisedAppear&&Av(o)}function Dv({attachResizeListener:e,defaultParent:n,measureScroll:i,checkIsScrollRoot:o,resetTransform:a}){return class{constructor(c={},d=n==null?void 0:n()){this.id=ZT++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(n5),this.nodes.forEach(a5),this.nodes.forEach(l5),this.nodes.forEach(r5)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=c,this.root=d?d.root||d:this,this.path=d?[...d.path,d]:[],this.parent=d,this.depth=d?d.depth+1:0;for(let p=0;p<this.path.length;p++)this.path[p].shouldResetTransform=!0;this.root===this&&(this.nodes=new NT)}addEventListener(c,d){return this.eventHandlers.has(c)||this.eventHandlers.set(c,new vf),this.eventHandlers.get(c).add(d)}notifyListeners(c,...d){const p=this.eventHandlers.get(c);p&&p.notify(...d)}hasListeners(c){return this.eventHandlers.has(c)}mount(c,d=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=OT(c),this.instance=c;const{layoutId:p,layout:m,visualElement:g}=this.options;if(g&&!g.current&&g.mount(c),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),d&&(m||p)&&(this.isLayoutDirty=!0),e){let x;const w=()=>this.root.updateBlockedByResize=!1;e(c,()=>{this.root.updateBlockedByResize=!0,x&&x(),x=VT(w,250),Xa.hasAnimatedSinceResize&&(Xa.hasAnimatedSinceResize=!1,this.nodes.forEach(E0))})}p&&this.root.registerSharedNode(p,this),this.options.animate!==!1&&g&&(p||m)&&this.addEventListener("didUpdate",({delta:x,hasLayoutChanged:w,hasRelativeLayoutChanged:S,layout:k})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const T=this.options.transition||g.getDefaultTransition()||p5,{onLayoutAnimationStart:E,onLayoutAnimationComplete:P}=g.getProps(),L=!this.targetLayout||!Rv(this.targetLayout,k),A=!w&&S;if(this.options.layoutRoot||this.resumeFrom||A||w&&(L||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(x,A);const F={...Df(T,"layout"),onPlay:E,onComplete:P};(g.shouldReduceMotion||this.options.layoutRoot)&&(F.delay=0,F.type=!1),this.startAnimation(F)}else w||E0(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=k})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const c=this.getStack();c&&c.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),ur(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(u5),this.animationId++)}getTransformTemplate(){const{visualElement:c}=this.options;return c&&c.getProps().transformTemplate}willUpdate(c=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Av(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let g=0;g<this.path.length;g++){const x=this.path[g];x.shouldResetTransform=!0,x.updateScroll("snapshot"),x.options.layoutRoot&&x.willUpdate(!1)}const{layoutId:d,layout:p}=this.options;if(d===void 0&&!p)return;const m=this.getTransformTemplate();this.prevTransformTemplateValue=m?m(this.latestValues,""):void 0,this.updateSnapshot(),c&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(k0);return}this.isUpdating||this.nodes.forEach(o5),this.isUpdating=!1,this.nodes.forEach(s5),this.nodes.forEach(e5),this.nodes.forEach(t5),this.clearAllSnapshots();const d=Tt.now();at.delta=Dn(0,1e3/60,d-at.timestamp),at.timestamp=d,at.isProcessing=!0,Nc.update.process(at),Nc.preRender.process(at),Nc.render.process(at),at.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Lf.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(i5),this.sharedNodes.forEach(c5)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Be.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Be.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!vt(this.snapshot.measuredBox.x)&&!vt(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let p=0;p<this.path.length;p++)this.path[p].updateScroll();const c=this.layout;this.layout=this.measure(!1),this.layoutCorrected=ze(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:d}=this.options;d&&d.notify("LayoutMeasure",this.layout.layoutBox,c?c.layoutBox:void 0)}updateScroll(c="measure"){let d=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===c&&(d=!1),d){const p=o(this.instance);this.scroll={animationId:this.root.animationId,phase:c,isRoot:p,offset:i(this.instance),wasRoot:this.scroll?this.scroll.isRoot:p}}}resetTransform(){if(!a)return;const c=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,d=this.projectionDelta&&!jv(this.projectionDelta),p=this.getTransformTemplate(),m=p?p(this.latestValues,""):void 0,g=m!==this.prevTransformTemplateValue;c&&(d||Pr(this.latestValues)||g)&&(a(this.instance,m),this.shouldResetTransform=!1,this.scheduleRender())}measure(c=!0){const d=this.measurePageBox();let p=this.removeElementScroll(d);return c&&(p=this.removeTransform(p)),h5(p),{animationId:this.root.animationId,measuredBox:d,layoutBox:p,latestValues:{},source:this.id}}measurePageBox(){var m;const{visualElement:c}=this.options;if(!c)return ze();const d=c.measureViewportBox();if(!(((m=this.scroll)==null?void 0:m.wasRoot)||this.path.some(m5))){const{scroll:g}=this.root;g&&(Ti(d.x,g.offset.x),Ti(d.y,g.offset.y))}return d}removeElementScroll(c){var p;const d=ze();if(Vt(d,c),(p=this.scroll)!=null&&p.wasRoot)return d;for(let m=0;m<this.path.length;m++){const g=this.path[m],{scroll:x,options:w}=g;g!==this.root&&x&&w.layoutScroll&&(x.wasRoot&&Vt(d,c),Ti(d.x,x.offset.x),Ti(d.y,x.offset.y))}return d}applyTransform(c,d=!1){const p=ze();Vt(p,c);for(let m=0;m<this.path.length;m++){const g=this.path[m];!d&&g.options.layoutScroll&&g.scroll&&g!==g.root&&Pi(p,{x:-g.scroll.offset.x,y:-g.scroll.offset.y}),Pr(g.latestValues)&&Pi(p,g.latestValues)}return Pr(this.latestValues)&&Pi(p,this.latestValues),p}removeTransform(c){const d=ze();Vt(d,c);for(let p=0;p<this.path.length;p++){const m=this.path[p];if(!m.instance||!Pr(m.latestValues))continue;Md(m.latestValues)&&m.updateSnapshot();const g=ze(),x=m.measurePageBox();Vt(g,x),g0(d,m.latestValues,m.snapshot?m.snapshot.layoutBox:void 0,g)}return Pr(this.latestValues)&&g0(d,this.latestValues),d}setTargetDelta(c){this.targetDelta=c,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(c){this.options={...this.options,...c,crossfade:c.crossfade!==void 0?c.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==at.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(c=!1){var w;const d=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=d.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=d.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=d.isSharedProjectionDirty);const p=!!this.resumingFrom||this!==d;if(!(c||p&&this.isSharedProjectionDirty||this.isProjectionDirty||(w=this.parent)!=null&&w.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:g,layoutId:x}=this.options;if(!(!this.layout||!(g||x))){if(this.resolvedRelativeTargetAt=at.timestamp,!this.targetDelta&&!this.relativeTarget){const S=this.getClosestProjectingParent();S&&S.layout&&this.animationProgress!==1?(this.relativeParent=S,this.forceRelativeParentToResolveTarget(),this.relativeTarget=ze(),this.relativeTargetOrigin=ze(),Wo(this.relativeTargetOrigin,this.layout.layoutBox,S.layout.layoutBox),Vt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=ze(),this.targetWithTransforms=ze()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),yT(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Vt(this.target,this.layout.layoutBox),wv(this.target,this.targetDelta)):Vt(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget)){this.attemptToResolveRelativeTarget=!1;const S=this.getClosestProjectingParent();S&&!!S.resumingFrom==!!this.resumingFrom&&!S.options.layoutScroll&&S.target&&this.animationProgress!==1?(this.relativeParent=S,this.forceRelativeParentToResolveTarget(),this.relativeTarget=ze(),this.relativeTargetOrigin=ze(),Wo(this.relativeTargetOrigin,this.target,S.target),Vt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}}}getClosestProjectingParent(){if(!(!this.parent||Md(this.parent.latestValues)||vv(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var k;const c=this.getLead(),d=!!this.resumingFrom||this!==c;let p=!0;if((this.isProjectionDirty||(k=this.parent)!=null&&k.isProjectionDirty)&&(p=!1),d&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(p=!1),this.resolvedRelativeTargetAt===at.timestamp&&(p=!1),p)return;const{layout:m,layoutId:g}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(m||g))return;Vt(this.layoutCorrected,this.layout.layoutBox);const x=this.treeScale.x,w=this.treeScale.y;xT(this.layoutCorrected,this.treeScale,this.path,d),c.layout&&!c.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(c.target=c.layout.layoutBox,c.targetWithTransforms=ze());const{target:S}=c;if(!S){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(p0(this.prevProjectionDelta.x,this.projectionDelta.x),p0(this.prevProjectionDelta.y,this.projectionDelta.y)),Uo(this.projectionDelta,this.layoutCorrected,S,this.latestValues),(this.treeScale.x!==x||this.treeScale.y!==w||!S0(this.projectionDelta.x,this.prevProjectionDelta.x)||!S0(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",S))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(c=!0){var d;if((d=this.options.visualElement)==null||d.scheduleRender(),c){const p=this.getStack();p&&p.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Ci(),this.projectionDelta=Ci(),this.projectionDeltaWithTransform=Ci()}setAnimationOrigin(c,d=!1){const p=this.snapshot,m=p?p.latestValues:{},g={...this.latestValues},x=Ci();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!d;const w=ze(),S=p?p.source:void 0,k=this.layout?this.layout.source:void 0,T=S!==k,E=this.getStack(),P=!E||E.members.length<=1,L=!!(T&&!P&&this.options.crossfade===!0&&!this.path.some(f5));this.animationProgress=0;let A;this.mixTargetDelta=F=>{const O=F/1e3;C0(x.x,c.x,O),C0(x.y,c.y,O),this.setTargetDelta(x),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Wo(w,this.layout.layoutBox,this.relativeParent.layout.layoutBox),d5(this.relativeTarget,this.relativeTargetOrigin,w,O),A&&qT(this.relativeTarget,A)&&(this.isProjectionDirty=!1),A||(A=ze()),Vt(A,this.relativeTarget)),T&&(this.animationValues=g,UT(g,m,this.latestValues,O,L,P)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=O},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(c){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(ur(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Be.update(()=>{Xa.hasAnimatedSinceResize=!0,this.currentAnimation=BT(0,b0,{...c,onUpdate:d=>{this.mixTargetDelta(d),c.onUpdate&&c.onUpdate(d)},onStop:()=>{},onComplete:()=>{c.onComplete&&c.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const c=this.getStack();c&&c.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(b0),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const c=this.getLead();let{targetWithTransforms:d,target:p,layout:m,latestValues:g}=c;if(!(!d||!p||!m)){if(this!==c&&this.layout&&m&&Iv(this.options.animationType,this.layout.layoutBox,m.layoutBox)){p=this.target||ze();const x=vt(this.layout.layoutBox.x);p.x.min=c.target.x.min,p.x.max=p.x.min+x;const w=vt(this.layout.layoutBox.y);p.y.min=c.target.y.min,p.y.max=p.y.min+w}Vt(d,p),Pi(d,g),Uo(this.projectionDeltaWithTransform,this.layoutCorrected,d,g)}}registerSharedNode(c,d){this.sharedNodes.has(c)||this.sharedNodes.set(c,new XT),this.sharedNodes.get(c).add(d);const m=d.options.initialPromotionConfig;d.promote({transition:m?m.transition:void 0,preserveFollowOpacity:m&&m.shouldPreserveFollowOpacity?m.shouldPreserveFollowOpacity(d):void 0})}isLead(){const c=this.getStack();return c?c.lead===this:!0}getLead(){var d;const{layoutId:c}=this.options;return c?((d=this.getStack())==null?void 0:d.lead)||this:this}getPrevLead(){var d;const{layoutId:c}=this.options;return c?(d=this.getStack())==null?void 0:d.prevLead:void 0}getStack(){const{layoutId:c}=this.options;if(c)return this.root.sharedNodes.get(c)}promote({needsReset:c,transition:d,preserveFollowOpacity:p}={}){const m=this.getStack();m&&m.promote(this,p),c&&(this.projectionDelta=void 0,this.needsReset=!0),d&&this.setOptions({transition:d})}relegate(){const c=this.getStack();return c?c.relegate(this):!1}resetSkewAndRotation(){const{visualElement:c}=this.options;if(!c)return;let d=!1;const{latestValues:p}=c;if((p.z||p.rotate||p.rotateX||p.rotateY||p.rotateZ||p.skewX||p.skewY)&&(d=!0),!d)return;const m={};p.z&&qc("z",c,m,this.animationValues);for(let g=0;g<Yc.length;g++)qc(`rotate${Yc[g]}`,c,m,this.animationValues),qc(`skew${Yc[g]}`,c,m,this.animationValues);c.render();for(const g in m)c.setStaticValue(g,m[g]),this.animationValues&&(this.animationValues[g]=m[g]);c.scheduleRender()}getProjectionStyles(c){if(!this.instance||this.isSVG)return;if(!this.isVisible)return JT;const d={visibility:""},p=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,d.opacity="",d.pointerEvents=qa(c==null?void 0:c.pointerEvents)||"",d.transform=p?p(this.latestValues,""):"none",d;const m=this.getLead();if(!this.projectionDelta||!this.layout||!m.target){const S={};return this.options.layoutId&&(S.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,S.pointerEvents=qa(c==null?void 0:c.pointerEvents)||""),this.hasProjected&&!Pr(this.latestValues)&&(S.transform=p?p({},""):"none",this.hasProjected=!1),S}const g=m.animationValues||m.latestValues;this.applyTransformsToTarget(),d.transform=QT(this.projectionDeltaWithTransform,this.treeScale,g),p&&(d.transform=p(g,d.transform));const{x,y:w}=this.projectionDelta;d.transformOrigin=`${x.origin*100}% ${w.origin*100}% 0`,m.animationValues?d.opacity=m===this?g.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:g.opacityExit:d.opacity=m===this?g.opacity!==void 0?g.opacity:"":g.opacityExit!==void 0?g.opacityExit:0;for(const S in ts){if(g[S]===void 0)continue;const{correct:k,applyTo:T,isCSSVariable:E}=ts[S],P=d.transform==="none"?g[S]:k(g[S],m);if(T){const L=T.length;for(let A=0;A<L;A++)d[T[A]]=P}else E?this.options.visualElement.renderState.vars[S]=P:d[S]=P}return this.options.layoutId&&(d.pointerEvents=m===this?qa(c==null?void 0:c.pointerEvents)||"":"none"),d}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(c=>{var d;return(d=c.currentAnimation)==null?void 0:d.stop()}),this.root.nodes.forEach(k0),this.root.sharedNodes.clear()}}}function e5(e){e.updateLayout()}function t5(e){var i;const n=((i=e.resumeFrom)==null?void 0:i.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&n&&e.hasListeners("didUpdate")){const{layoutBox:o,measuredBox:a}=e.layout,{animationType:u}=e.options,c=n.source!==e.layout.source;u==="size"?zt(x=>{const w=c?n.measuredBox[x]:n.layoutBox[x],S=vt(w);w.min=o[x].min,w.max=w.min+S}):Iv(u,n.layoutBox,o)&&zt(x=>{const w=c?n.measuredBox[x]:n.layoutBox[x],S=vt(o[x]);w.max=w.min+S,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[x].max=e.relativeTarget[x].min+S)});const d=Ci();Uo(d,o,n.layoutBox);const p=Ci();c?Uo(p,e.applyTransform(a,!0),n.measuredBox):Uo(p,o,n.layoutBox);const m=!jv(d);let g=!1;if(!e.resumeFrom){const x=e.getClosestProjectingParent();if(x&&!x.resumeFrom){const{snapshot:w,layout:S}=x;if(w&&S){const k=ze();Wo(k,n.layoutBox,w.layoutBox);const T=ze();Wo(T,o,S.layoutBox),Rv(k,T)||(g=!0),x.options.layoutRoot&&(e.relativeTarget=T,e.relativeTargetOrigin=k,e.relativeParent=x)}}}e.notifyListeners("didUpdate",{layout:o,snapshot:n,delta:p,layoutDelta:d,hasLayoutChanged:m,hasRelativeLayoutChanged:g})}else if(e.isLead()){const{onExitComplete:o}=e.options;o&&o()}e.options.transition=void 0}function n5(e){e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function r5(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function i5(e){e.clearSnapshot()}function k0(e){e.clearMeasurements()}function o5(e){e.isLayoutDirty=!1}function s5(e){const{visualElement:n}=e.options;n&&n.getProps().onBeforeLayoutMeasure&&n.notify("BeforeLayoutMeasure"),e.resetTransform()}function E0(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function a5(e){e.resolveTargetDelta()}function l5(e){e.calcProjection()}function u5(e){e.resetSkewAndRotation()}function c5(e){e.removeLeadSnapshot()}function C0(e,n,i){e.translate=_e(n.translate,0,i),e.scale=_e(n.scale,1,i),e.origin=n.origin,e.originPoint=n.originPoint}function T0(e,n,i,o){e.min=_e(n.min,i.min,o),e.max=_e(n.max,i.max,o)}function d5(e,n,i,o){T0(e.x,n.x,i.x,o),T0(e.y,n.y,i.y,o)}function f5(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const p5={duration:.45,ease:[.4,0,.1,1]},P0=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),j0=P0("applewebkit/")&&!P0("chrome/")?Math.round:Ut;function R0(e){e.min=j0(e.min),e.max=j0(e.max)}function h5(e){R0(e.x),R0(e.y)}function Iv(e,n,i){return e==="position"||e==="preserve-aspect"&&!gT(w0(n),w0(i),.2)}function m5(e){var n;return e!==e.root&&((n=e.scroll)==null?void 0:n.wasRoot)}const g5=Dv({attachResizeListener:(e,n)=>rs(e,"resize",n),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Xc={current:void 0},Lv=Dv({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Xc.current){const e=new g5({});e.mount(window),e.setOptions({layoutScroll:!0}),Xc.current=e}return Xc.current},resetTransform:(e,n)=>{e.style.transform=n!==void 0?n:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),y5={pan:{Feature:LT},drag:{Feature:IT,ProjectionNode:Lv,MeasureLayout:Cv}};function A0(e,n,i){const{props:o}=e;e.animationState&&o.whileHover&&e.animationState.setActive("whileHover",i==="Start");const a="onHover"+i,u=o[a];u&&Be.postRender(()=>u(n,cs(n)))}class x5 extends dr{mount(){const{current:n}=this.node;n&&(this.unmount=YE(n,(i,o)=>(A0(this.node,o,"Start"),a=>A0(this.node,a,"End"))))}unmount(){}}class v5 extends dr{constructor(){super(...arguments),this.isActive=!1}onFocus(){let n=!1;try{n=this.node.current.matches(":focus-visible")}catch{n=!0}!n||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=as(rs(this.node.current,"focus",()=>this.onFocus()),rs(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function D0(e,n,i){const{props:o}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&o.whileTap&&e.animationState.setActive("whileTap",i==="Start");const a="onTap"+(i==="End"?"":i),u=o[a];u&&Be.postRender(()=>u(n,cs(n)))}class w5 extends dr{mount(){const{current:n}=this.node;n&&(this.unmount=JE(n,(i,o)=>(D0(this.node,o,"Start"),(a,{success:u})=>D0(this.node,a,u?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const Od=new WeakMap,Qc=new WeakMap,S5=e=>{const n=Od.get(e.target);n&&n(e)},b5=e=>{e.forEach(S5)};function k5({root:e,...n}){const i=e||document;Qc.has(i)||Qc.set(i,{});const o=Qc.get(i),a=JSON.stringify(n);return o[a]||(o[a]=new IntersectionObserver(b5,{root:e,...n})),o[a]}function E5(e,n,i){const o=k5(n);return Od.set(e,i),o.observe(e),()=>{Od.delete(e),o.unobserve(e)}}const C5={some:0,all:1};class T5 extends dr{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:n={}}=this.node.getProps(),{root:i,margin:o,amount:a="some",once:u}=n,c={root:i?i.current:void 0,rootMargin:o,threshold:typeof a=="number"?a:C5[a]},d=p=>{const{isIntersecting:m}=p;if(this.isInView===m||(this.isInView=m,u&&!m&&this.hasEnteredView))return;m&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",m);const{onViewportEnter:g,onViewportLeave:x}=this.node.getProps(),w=m?g:x;w&&w(p)};return E5(this.node.current,c,d)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:n,prevProps:i}=this.node;["amount","margin","root"].some(P5(n,i))&&this.startObserver()}unmount(){}}function P5({viewport:e={}},{viewport:n={}}={}){return i=>e[i]!==n[i]}const j5={inView:{Feature:T5},tap:{Feature:w5},focus:{Feature:v5},hover:{Feature:x5}},R5={layout:{ProjectionNode:Lv,MeasureLayout:Cv}},Fd={current:null},$v={current:!1};function A5(){if($v.current=!0,!!pf)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),n=()=>Fd.current=e.matches;e.addListener(n),n()}else Fd.current=!1}const D5=new WeakMap;function I5(e,n,i){for(const o in n){const a=n[o],u=i[o];if(gt(a))e.addValue(o,a);else if(gt(u))e.addValue(o,Zo(a,{owner:e}));else if(u!==a)if(e.hasValue(o)){const c=e.getValue(o);c.liveStyle===!0?c.jump(a):c.hasAnimated||c.set(a)}else{const c=e.getStaticValue(o);e.addValue(o,Zo(c!==void 0?c:a,{owner:e}))}}for(const o in i)n[o]===void 0&&e.removeValue(o);return n}const I0=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class L5{scrapeMotionValuesFromProps(n,i,o){return{}}constructor({parent:n,props:i,presenceContext:o,reducedMotionConfig:a,blockInitialAnimation:u,visualState:c},d={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Af,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const w=Tt.now();this.renderScheduledAt<w&&(this.renderScheduledAt=w,Be.render(this.render,!1,!0))};const{latestValues:p,renderState:m}=c;this.latestValues=p,this.baseTarget={...p},this.initialValues=i.initial?{...p}:{},this.renderState=m,this.parent=n,this.props=i,this.presenceContext=o,this.depth=n?n.depth+1:0,this.reducedMotionConfig=a,this.options=d,this.blockInitialAnimation=!!u,this.isControllingVariants=Tl(i),this.isVariantNode=tv(i),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(n&&n.current);const{willChange:g,...x}=this.scrapeMotionValuesFromProps(i,{},this);for(const w in x){const S=x[w];p[w]!==void 0&&gt(S)&&S.set(p[w],!1)}}mount(n){this.current=n,D5.set(n,this),this.projection&&!this.projection.instance&&this.projection.mount(n),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((i,o)=>this.bindToMotionValue(o,i)),$v.current||A5(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Fd.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){this.projection&&this.projection.unmount(),this.projection=void 0,ur(this.notifyUpdate),ur(this.render),this.valueSubscriptions.forEach(n=>n()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const n in this.events)this.events[n].clear();for(const n in this.features){const i=this.features[n];i&&(i.unmount(),i.isMounted=!1)}this.current=null}bindToMotionValue(n,i){this.valueSubscriptions.has(n)&&this.valueSubscriptions.get(n)();const o=Vi.has(n);o&&this.onBindTransform&&this.onBindTransform();const a=i.on("change",d=>{this.latestValues[n]=d,this.props.onUpdate&&Be.preRender(this.notifyUpdate),o&&this.projection&&(this.projection.isTransformDirty=!0)}),u=i.on("renderRequest",this.scheduleRender);let c;window.MotionCheckAppearSync&&(c=window.MotionCheckAppearSync(this,n,i)),this.valueSubscriptions.set(n,()=>{a(),u(),c&&c(),i.owner&&i.stop()})}sortNodePosition(n){return!this.current||!this.sortInstanceNodePosition||this.type!==n.type?0:this.sortInstanceNodePosition(this.current,n.current)}updateFeatures(){let n="animation";for(n in Li){const i=Li[n];if(!i)continue;const{isEnabled:o,Feature:a}=i;if(!this.features[n]&&a&&o(this.props)&&(this.features[n]=new a(this)),this.features[n]){const u=this.features[n];u.isMounted?u.update():(u.mount(),u.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):ze()}getStaticValue(n){return this.latestValues[n]}setStaticValue(n,i){this.latestValues[n]=i}update(n,i){(n.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=n,this.prevPresenceContext=this.presenceContext,this.presenceContext=i;for(let o=0;o<I0.length;o++){const a=I0[o];this.propEventSubscriptions[a]&&(this.propEventSubscriptions[a](),delete this.propEventSubscriptions[a]);const u="on"+a,c=n[u];c&&(this.propEventSubscriptions[a]=this.on(a,c))}this.prevMotionValues=I5(this,this.scrapeMotionValuesFromProps(n,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(n){return this.props.variants?this.props.variants[n]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(n){const i=this.getClosestVariantNode();if(i)return i.variantChildren&&i.variantChildren.add(n),()=>i.variantChildren.delete(n)}addValue(n,i){const o=this.values.get(n);i!==o&&(o&&this.removeValue(n),this.bindToMotionValue(n,i),this.values.set(n,i),this.latestValues[n]=i.get())}removeValue(n){this.values.delete(n);const i=this.valueSubscriptions.get(n);i&&(i(),this.valueSubscriptions.delete(n)),delete this.latestValues[n],this.removeValueFromRenderState(n,this.renderState)}hasValue(n){return this.values.has(n)}getValue(n,i){if(this.props.values&&this.props.values[n])return this.props.values[n];let o=this.values.get(n);return o===void 0&&i!==void 0&&(o=Zo(i===null?void 0:i,{owner:this}),this.addValue(n,o)),o}readValue(n,i){let o=this.latestValues[n]!==void 0||!this.current?this.latestValues[n]:this.getBaseTargetFromProps(this.props,n)??this.readValueFromInstance(this.current,n,this.options);return o!=null&&(typeof o=="string"&&(dx(o)||fx(o))?o=parseFloat(o):!nC(o)&&cr.test(i)&&(o=Yx(n,i)),this.setBaseTarget(n,gt(o)?o.get():o)),gt(o)?o.get():o}setBaseTarget(n,i){this.baseTarget[n]=i}getBaseTarget(n){var u;const{initial:i}=this.props;let o;if(typeof i=="string"||typeof i=="object"){const c=Vf(this.props,i,(u=this.presenceContext)==null?void 0:u.custom);c&&(o=c[n])}if(i&&o!==void 0)return o;const a=this.getBaseTargetFromProps(this.props,n);return a!==void 0&&!gt(a)?a:this.initialValues[n]!==void 0&&o===void 0?void 0:this.baseTarget[n]}on(n,i){return this.events[n]||(this.events[n]=new vf),this.events[n].add(i)}notify(n,...i){this.events[n]&&this.events[n].notify(...i)}}class Mv extends L5{constructor(){super(...arguments),this.KeyframeResolver=HE}sortInstanceNodePosition(n,i){return n.compareDocumentPosition(i)&2?1:-1}getBaseTargetFromProps(n,i){return n.style?n.style[i]:void 0}removeValueFromRenderState(n,{vars:i,style:o}){delete i[n],delete o[n]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:n}=this.props;gt(n)&&(this.childSubscription=n.on("change",i=>{this.current&&(this.current.textContent=`${i}`)}))}}function _v(e,{style:n,vars:i},o,a){Object.assign(e.style,n,a&&a.getProjectionStyles(o));for(const u in i)e.style.setProperty(u,i[u])}function $5(e){return window.getComputedStyle(e)}class M5 extends Mv{constructor(){super(...arguments),this.type="html",this.renderInstance=_v}readValueFromInstance(n,i){if(Vi.has(i))return cE(n,i);{const o=$5(n),a=(bf(i)?o.getPropertyValue(i):o[i])||0;return typeof a=="string"?a.trim():a}}measureInstanceViewportBox(n,{transformPagePoint:i}){return Sv(n,i)}build(n,i,o){Of(n,i,o.transformTemplate)}scrapeMotionValuesFromProps(n,i,o){return zf(n,i,o)}}const Bv=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function _5(e,n,i,o){_v(e,n,void 0,o);for(const a in n.attrs)e.setAttribute(Bv.has(a)?a:Bf(a),n.attrs[a])}class B5 extends Mv{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=ze}getBaseTargetFromProps(n,i){return n[i]}readValueFromInstance(n,i){if(Vi.has(i)){const o=Gx(i);return o&&o.default||0}return i=Bv.has(i)?i:Bf(i),n.getAttribute(i)}scrapeMotionValuesFromProps(n,i,o){return dv(n,i,o)}build(n,i,o){av(n,i,this.isSVGTag,o.transformTemplate)}renderInstance(n,i,o,a){_5(n,i,o,a)}mount(n){this.isSVGTag=uv(n.tagName),super.mount(n)}}const O5=(e,n)=>Nf(e)?new B5(n):new M5(n,{allowProjection:e!==b.Fragment}),F5=_C({...lT,...j5,...y5,...R5},O5),Y=aC(F5);function Ov(e,n){return function(){return e.apply(n,arguments)}}const{toString:N5}=Object.prototype,{getPrototypeOf:Wf}=Object,{iterator:Pl,toStringTag:Fv}=Symbol,jl=(e=>n=>{const i=N5.call(n);return e[i]||(e[i]=i.slice(8,-1).toLowerCase())})(Object.create(null)),sn=e=>(e=e.toLowerCase(),n=>jl(n)===e),Rl=e=>n=>typeof n===e,{isArray:zi}=Array,is=Rl("undefined");function V5(e){return e!==null&&!is(e)&&e.constructor!==null&&!is(e.constructor)&&Pt(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Nv=sn("ArrayBuffer");function z5(e){let n;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?n=ArrayBuffer.isView(e):n=e&&e.buffer&&Nv(e.buffer),n}const U5=Rl("string"),Pt=Rl("function"),Vv=Rl("number"),Al=e=>e!==null&&typeof e=="object",W5=e=>e===!0||e===!1,Qa=e=>{if(jl(e)!=="object")return!1;const n=Wf(e);return(n===null||n===Object.prototype||Object.getPrototypeOf(n)===null)&&!(Fv in e)&&!(Pl in e)},H5=sn("Date"),K5=sn("File"),G5=sn("Blob"),Y5=sn("FileList"),q5=e=>Al(e)&&Pt(e.pipe),X5=e=>{let n;return e&&(typeof FormData=="function"&&e instanceof FormData||Pt(e.append)&&((n=jl(e))==="formdata"||n==="object"&&Pt(e.toString)&&e.toString()==="[object FormData]"))},Q5=sn("URLSearchParams"),[J5,Z5,eP,tP]=["ReadableStream","Request","Response","Headers"].map(sn),nP=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function ds(e,n,{allOwnKeys:i=!1}={}){if(e===null||typeof e>"u")return;let o,a;if(typeof e!="object"&&(e=[e]),zi(e))for(o=0,a=e.length;o<a;o++)n.call(null,e[o],o,e);else{const u=i?Object.getOwnPropertyNames(e):Object.keys(e),c=u.length;let d;for(o=0;o<c;o++)d=u[o],n.call(null,e[d],d,e)}}function zv(e,n){n=n.toLowerCase();const i=Object.keys(e);let o=i.length,a;for(;o-- >0;)if(a=i[o],n===a.toLowerCase())return a;return null}const Lr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Uv=e=>!is(e)&&e!==Lr;function Nd(){const{caseless:e}=Uv(this)&&this||{},n={},i=(o,a)=>{const u=e&&zv(n,a)||a;Qa(n[u])&&Qa(o)?n[u]=Nd(n[u],o):Qa(o)?n[u]=Nd({},o):zi(o)?n[u]=o.slice():n[u]=o};for(let o=0,a=arguments.length;o<a;o++)arguments[o]&&ds(arguments[o],i);return n}const rP=(e,n,i,{allOwnKeys:o}={})=>(ds(n,(a,u)=>{i&&Pt(a)?e[u]=Ov(a,i):e[u]=a},{allOwnKeys:o}),e),iP=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),oP=(e,n,i,o)=>{e.prototype=Object.create(n.prototype,o),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:n.prototype}),i&&Object.assign(e.prototype,i)},sP=(e,n,i,o)=>{let a,u,c;const d={};if(n=n||{},e==null)return n;do{for(a=Object.getOwnPropertyNames(e),u=a.length;u-- >0;)c=a[u],(!o||o(c,e,n))&&!d[c]&&(n[c]=e[c],d[c]=!0);e=i!==!1&&Wf(e)}while(e&&(!i||i(e,n))&&e!==Object.prototype);return n},aP=(e,n,i)=>{e=String(e),(i===void 0||i>e.length)&&(i=e.length),i-=n.length;const o=e.indexOf(n,i);return o!==-1&&o===i},lP=e=>{if(!e)return null;if(zi(e))return e;let n=e.length;if(!Vv(n))return null;const i=new Array(n);for(;n-- >0;)i[n]=e[n];return i},uP=(e=>n=>e&&n instanceof e)(typeof Uint8Array<"u"&&Wf(Uint8Array)),cP=(e,n)=>{const o=(e&&e[Pl]).call(e);let a;for(;(a=o.next())&&!a.done;){const u=a.value;n.call(e,u[0],u[1])}},dP=(e,n)=>{let i;const o=[];for(;(i=e.exec(n))!==null;)o.push(i);return o},fP=sn("HTMLFormElement"),pP=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(i,o,a){return o.toUpperCase()+a}),L0=(({hasOwnProperty:e})=>(n,i)=>e.call(n,i))(Object.prototype),hP=sn("RegExp"),Wv=(e,n)=>{const i=Object.getOwnPropertyDescriptors(e),o={};ds(i,(a,u)=>{let c;(c=n(a,u,e))!==!1&&(o[u]=c||a)}),Object.defineProperties(e,o)},mP=e=>{Wv(e,(n,i)=>{if(Pt(e)&&["arguments","caller","callee"].indexOf(i)!==-1)return!1;const o=e[i];if(Pt(o)){if(n.enumerable=!1,"writable"in n){n.writable=!1;return}n.set||(n.set=()=>{throw Error("Can not rewrite read-only method '"+i+"'")})}})},gP=(e,n)=>{const i={},o=a=>{a.forEach(u=>{i[u]=!0})};return zi(e)?o(e):o(String(e).split(n)),i},yP=()=>{},xP=(e,n)=>e!=null&&Number.isFinite(e=+e)?e:n;function vP(e){return!!(e&&Pt(e.append)&&e[Fv]==="FormData"&&e[Pl])}const wP=e=>{const n=new Array(10),i=(o,a)=>{if(Al(o)){if(n.indexOf(o)>=0)return;if(!("toJSON"in o)){n[a]=o;const u=zi(o)?[]:{};return ds(o,(c,d)=>{const p=i(c,a+1);!is(p)&&(u[d]=p)}),n[a]=void 0,u}}return o};return i(e,0)},SP=sn("AsyncFunction"),bP=e=>e&&(Al(e)||Pt(e))&&Pt(e.then)&&Pt(e.catch),Hv=((e,n)=>e?setImmediate:n?((i,o)=>(Lr.addEventListener("message",({source:a,data:u})=>{a===Lr&&u===i&&o.length&&o.shift()()},!1),a=>{o.push(a),Lr.postMessage(i,"*")}))(`axios@${Math.random()}`,[]):i=>setTimeout(i))(typeof setImmediate=="function",Pt(Lr.postMessage)),kP=typeof queueMicrotask<"u"?queueMicrotask.bind(Lr):typeof process<"u"&&process.nextTick||Hv,EP=e=>e!=null&&Pt(e[Pl]),B={isArray:zi,isArrayBuffer:Nv,isBuffer:V5,isFormData:X5,isArrayBufferView:z5,isString:U5,isNumber:Vv,isBoolean:W5,isObject:Al,isPlainObject:Qa,isReadableStream:J5,isRequest:Z5,isResponse:eP,isHeaders:tP,isUndefined:is,isDate:H5,isFile:K5,isBlob:G5,isRegExp:hP,isFunction:Pt,isStream:q5,isURLSearchParams:Q5,isTypedArray:uP,isFileList:Y5,forEach:ds,merge:Nd,extend:rP,trim:nP,stripBOM:iP,inherits:oP,toFlatObject:sP,kindOf:jl,kindOfTest:sn,endsWith:aP,toArray:lP,forEachEntry:cP,matchAll:dP,isHTMLForm:fP,hasOwnProperty:L0,hasOwnProp:L0,reduceDescriptors:Wv,freezeMethods:mP,toObjectSet:gP,toCamelCase:pP,noop:yP,toFiniteNumber:xP,findKey:zv,global:Lr,isContextDefined:Uv,isSpecCompliantForm:vP,toJSONObject:wP,isAsyncFn:SP,isThenable:bP,setImmediate:Hv,asap:kP,isIterable:EP};function fe(e,n,i,o,a){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",n&&(this.code=n),i&&(this.config=i),o&&(this.request=o),a&&(this.response=a,this.status=a.status?a.status:null)}B.inherits(fe,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:B.toJSONObject(this.config),code:this.code,status:this.status}}});const Kv=fe.prototype,Gv={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Gv[e]={value:e}});Object.defineProperties(fe,Gv);Object.defineProperty(Kv,"isAxiosError",{value:!0});fe.from=(e,n,i,o,a,u)=>{const c=Object.create(Kv);return B.toFlatObject(e,c,function(p){return p!==Error.prototype},d=>d!=="isAxiosError"),fe.call(c,e.message,n,i,o,a),c.cause=e,c.name=e.name,u&&Object.assign(c,u),c};const CP=null;function Vd(e){return B.isPlainObject(e)||B.isArray(e)}function Yv(e){return B.endsWith(e,"[]")?e.slice(0,-2):e}function $0(e,n,i){return e?e.concat(n).map(function(a,u){return a=Yv(a),!i&&u?"["+a+"]":a}).join(i?".":""):n}function TP(e){return B.isArray(e)&&!e.some(Vd)}const PP=B.toFlatObject(B,{},null,function(n){return/^is[A-Z]/.test(n)});function Dl(e,n,i){if(!B.isObject(e))throw new TypeError("target must be an object");n=n||new FormData,i=B.toFlatObject(i,{metaTokens:!0,dots:!1,indexes:!1},!1,function(T,E){return!B.isUndefined(E[T])});const o=i.metaTokens,a=i.visitor||g,u=i.dots,c=i.indexes,p=(i.Blob||typeof Blob<"u"&&Blob)&&B.isSpecCompliantForm(n);if(!B.isFunction(a))throw new TypeError("visitor must be a function");function m(k){if(k===null)return"";if(B.isDate(k))return k.toISOString();if(!p&&B.isBlob(k))throw new fe("Blob is not supported. Use a Buffer instead.");return B.isArrayBuffer(k)||B.isTypedArray(k)?p&&typeof Blob=="function"?new Blob([k]):Buffer.from(k):k}function g(k,T,E){let P=k;if(k&&!E&&typeof k=="object"){if(B.endsWith(T,"{}"))T=o?T:T.slice(0,-2),k=JSON.stringify(k);else if(B.isArray(k)&&TP(k)||(B.isFileList(k)||B.endsWith(T,"[]"))&&(P=B.toArray(k)))return T=Yv(T),P.forEach(function(A,F){!(B.isUndefined(A)||A===null)&&n.append(c===!0?$0([T],F,u):c===null?T:T+"[]",m(A))}),!1}return Vd(k)?!0:(n.append($0(E,T,u),m(k)),!1)}const x=[],w=Object.assign(PP,{defaultVisitor:g,convertValue:m,isVisitable:Vd});function S(k,T){if(!B.isUndefined(k)){if(x.indexOf(k)!==-1)throw Error("Circular reference detected in "+T.join("."));x.push(k),B.forEach(k,function(P,L){(!(B.isUndefined(P)||P===null)&&a.call(n,P,B.isString(L)?L.trim():L,T,w))===!0&&S(P,T?T.concat(L):[L])}),x.pop()}}if(!B.isObject(e))throw new TypeError("data must be an object");return S(e),n}function M0(e){const n={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(o){return n[o]})}function Hf(e,n){this._pairs=[],e&&Dl(e,this,n)}const qv=Hf.prototype;qv.append=function(n,i){this._pairs.push([n,i])};qv.toString=function(n){const i=n?function(o){return n.call(this,o,M0)}:M0;return this._pairs.map(function(a){return i(a[0])+"="+i(a[1])},"").join("&")};function jP(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Xv(e,n,i){if(!n)return e;const o=i&&i.encode||jP;B.isFunction(i)&&(i={serialize:i});const a=i&&i.serialize;let u;if(a?u=a(n,i):u=B.isURLSearchParams(n)?n.toString():new Hf(n,i).toString(o),u){const c=e.indexOf("#");c!==-1&&(e=e.slice(0,c)),e+=(e.indexOf("?")===-1?"?":"&")+u}return e}class _0{constructor(){this.handlers=[]}use(n,i,o){return this.handlers.push({fulfilled:n,rejected:i,synchronous:o?o.synchronous:!1,runWhen:o?o.runWhen:null}),this.handlers.length-1}eject(n){this.handlers[n]&&(this.handlers[n]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(n){B.forEach(this.handlers,function(o){o!==null&&n(o)})}}const Qv={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},RP=typeof URLSearchParams<"u"?URLSearchParams:Hf,AP=typeof FormData<"u"?FormData:null,DP=typeof Blob<"u"?Blob:null,IP={isBrowser:!0,classes:{URLSearchParams:RP,FormData:AP,Blob:DP},protocols:["http","https","file","blob","url","data"]},Kf=typeof window<"u"&&typeof document<"u",zd=typeof navigator=="object"&&navigator||void 0,LP=Kf&&(!zd||["ReactNative","NativeScript","NS"].indexOf(zd.product)<0),$P=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",MP=Kf&&window.location.href||"http://localhost",_P=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Kf,hasStandardBrowserEnv:LP,hasStandardBrowserWebWorkerEnv:$P,navigator:zd,origin:MP},Symbol.toStringTag,{value:"Module"})),mt={..._P,...IP};function BP(e,n){return Dl(e,new mt.classes.URLSearchParams,Object.assign({visitor:function(i,o,a,u){return mt.isNode&&B.isBuffer(i)?(this.append(o,i.toString("base64")),!1):u.defaultVisitor.apply(this,arguments)}},n))}function OP(e){return B.matchAll(/\w+|\[(\w*)]/g,e).map(n=>n[0]==="[]"?"":n[1]||n[0])}function FP(e){const n={},i=Object.keys(e);let o;const a=i.length;let u;for(o=0;o<a;o++)u=i[o],n[u]=e[u];return n}function Jv(e){function n(i,o,a,u){let c=i[u++];if(c==="__proto__")return!0;const d=Number.isFinite(+c),p=u>=i.length;return c=!c&&B.isArray(a)?a.length:c,p?(B.hasOwnProp(a,c)?a[c]=[a[c],o]:a[c]=o,!d):((!a[c]||!B.isObject(a[c]))&&(a[c]=[]),n(i,o,a[c],u)&&B.isArray(a[c])&&(a[c]=FP(a[c])),!d)}if(B.isFormData(e)&&B.isFunction(e.entries)){const i={};return B.forEachEntry(e,(o,a)=>{n(OP(o),a,i,0)}),i}return null}function NP(e,n,i){if(B.isString(e))try{return(n||JSON.parse)(e),B.trim(e)}catch(o){if(o.name!=="SyntaxError")throw o}return(i||JSON.stringify)(e)}const fs={transitional:Qv,adapter:["xhr","http","fetch"],transformRequest:[function(n,i){const o=i.getContentType()||"",a=o.indexOf("application/json")>-1,u=B.isObject(n);if(u&&B.isHTMLForm(n)&&(n=new FormData(n)),B.isFormData(n))return a?JSON.stringify(Jv(n)):n;if(B.isArrayBuffer(n)||B.isBuffer(n)||B.isStream(n)||B.isFile(n)||B.isBlob(n)||B.isReadableStream(n))return n;if(B.isArrayBufferView(n))return n.buffer;if(B.isURLSearchParams(n))return i.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),n.toString();let d;if(u){if(o.indexOf("application/x-www-form-urlencoded")>-1)return BP(n,this.formSerializer).toString();if((d=B.isFileList(n))||o.indexOf("multipart/form-data")>-1){const p=this.env&&this.env.FormData;return Dl(d?{"files[]":n}:n,p&&new p,this.formSerializer)}}return u||a?(i.setContentType("application/json",!1),NP(n)):n}],transformResponse:[function(n){const i=this.transitional||fs.transitional,o=i&&i.forcedJSONParsing,a=this.responseType==="json";if(B.isResponse(n)||B.isReadableStream(n))return n;if(n&&B.isString(n)&&(o&&!this.responseType||a)){const c=!(i&&i.silentJSONParsing)&&a;try{return JSON.parse(n)}catch(d){if(c)throw d.name==="SyntaxError"?fe.from(d,fe.ERR_BAD_RESPONSE,this,null,this.response):d}}return n}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:mt.classes.FormData,Blob:mt.classes.Blob},validateStatus:function(n){return n>=200&&n<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};B.forEach(["delete","get","head","post","put","patch"],e=>{fs.headers[e]={}});const VP=B.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),zP=e=>{const n={};let i,o,a;return e&&e.split(`
`).forEach(function(c){a=c.indexOf(":"),i=c.substring(0,a).trim().toLowerCase(),o=c.substring(a+1).trim(),!(!i||n[i]&&VP[i])&&(i==="set-cookie"?n[i]?n[i].push(o):n[i]=[o]:n[i]=n[i]?n[i]+", "+o:o)}),n},B0=Symbol("internals");function $o(e){return e&&String(e).trim().toLowerCase()}function Ja(e){return e===!1||e==null?e:B.isArray(e)?e.map(Ja):String(e)}function UP(e){const n=Object.create(null),i=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let o;for(;o=i.exec(e);)n[o[1]]=o[2];return n}const WP=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Jc(e,n,i,o,a){if(B.isFunction(o))return o.call(this,n,i);if(a&&(n=i),!!B.isString(n)){if(B.isString(o))return n.indexOf(o)!==-1;if(B.isRegExp(o))return o.test(n)}}function HP(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(n,i,o)=>i.toUpperCase()+o)}function KP(e,n){const i=B.toCamelCase(" "+n);["get","set","has"].forEach(o=>{Object.defineProperty(e,o+i,{value:function(a,u,c){return this[o].call(this,n,a,u,c)},configurable:!0})})}let jt=class{constructor(n){n&&this.set(n)}set(n,i,o){const a=this;function u(d,p,m){const g=$o(p);if(!g)throw new Error("header name must be a non-empty string");const x=B.findKey(a,g);(!x||a[x]===void 0||m===!0||m===void 0&&a[x]!==!1)&&(a[x||p]=Ja(d))}const c=(d,p)=>B.forEach(d,(m,g)=>u(m,g,p));if(B.isPlainObject(n)||n instanceof this.constructor)c(n,i);else if(B.isString(n)&&(n=n.trim())&&!WP(n))c(zP(n),i);else if(B.isObject(n)&&B.isIterable(n)){let d={},p,m;for(const g of n){if(!B.isArray(g))throw TypeError("Object iterator must return a key-value pair");d[m=g[0]]=(p=d[m])?B.isArray(p)?[...p,g[1]]:[p,g[1]]:g[1]}c(d,i)}else n!=null&&u(i,n,o);return this}get(n,i){if(n=$o(n),n){const o=B.findKey(this,n);if(o){const a=this[o];if(!i)return a;if(i===!0)return UP(a);if(B.isFunction(i))return i.call(this,a,o);if(B.isRegExp(i))return i.exec(a);throw new TypeError("parser must be boolean|regexp|function")}}}has(n,i){if(n=$o(n),n){const o=B.findKey(this,n);return!!(o&&this[o]!==void 0&&(!i||Jc(this,this[o],o,i)))}return!1}delete(n,i){const o=this;let a=!1;function u(c){if(c=$o(c),c){const d=B.findKey(o,c);d&&(!i||Jc(o,o[d],d,i))&&(delete o[d],a=!0)}}return B.isArray(n)?n.forEach(u):u(n),a}clear(n){const i=Object.keys(this);let o=i.length,a=!1;for(;o--;){const u=i[o];(!n||Jc(this,this[u],u,n,!0))&&(delete this[u],a=!0)}return a}normalize(n){const i=this,o={};return B.forEach(this,(a,u)=>{const c=B.findKey(o,u);if(c){i[c]=Ja(a),delete i[u];return}const d=n?HP(u):String(u).trim();d!==u&&delete i[u],i[d]=Ja(a),o[d]=!0}),this}concat(...n){return this.constructor.concat(this,...n)}toJSON(n){const i=Object.create(null);return B.forEach(this,(o,a)=>{o!=null&&o!==!1&&(i[a]=n&&B.isArray(o)?o.join(", "):o)}),i}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([n,i])=>n+": "+i).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(n){return n instanceof this?n:new this(n)}static concat(n,...i){const o=new this(n);return i.forEach(a=>o.set(a)),o}static accessor(n){const o=(this[B0]=this[B0]={accessors:{}}).accessors,a=this.prototype;function u(c){const d=$o(c);o[d]||(KP(a,c),o[d]=!0)}return B.isArray(n)?n.forEach(u):u(n),this}};jt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);B.reduceDescriptors(jt.prototype,({value:e},n)=>{let i=n[0].toUpperCase()+n.slice(1);return{get:()=>e,set(o){this[i]=o}}});B.freezeMethods(jt);function Zc(e,n){const i=this||fs,o=n||i,a=jt.from(o.headers);let u=o.data;return B.forEach(e,function(d){u=d.call(i,u,a.normalize(),n?n.status:void 0)}),a.normalize(),u}function Zv(e){return!!(e&&e.__CANCEL__)}function Ui(e,n,i){fe.call(this,e??"canceled",fe.ERR_CANCELED,n,i),this.name="CanceledError"}B.inherits(Ui,fe,{__CANCEL__:!0});function e1(e,n,i){const o=i.config.validateStatus;!i.status||!o||o(i.status)?e(i):n(new fe("Request failed with status code "+i.status,[fe.ERR_BAD_REQUEST,fe.ERR_BAD_RESPONSE][Math.floor(i.status/100)-4],i.config,i.request,i))}function GP(e){const n=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return n&&n[1]||""}function YP(e,n){e=e||10;const i=new Array(e),o=new Array(e);let a=0,u=0,c;return n=n!==void 0?n:1e3,function(p){const m=Date.now(),g=o[u];c||(c=m),i[a]=p,o[a]=m;let x=u,w=0;for(;x!==a;)w+=i[x++],x=x%e;if(a=(a+1)%e,a===u&&(u=(u+1)%e),m-c<n)return;const S=g&&m-g;return S?Math.round(w*1e3/S):void 0}}function qP(e,n){let i=0,o=1e3/n,a,u;const c=(m,g=Date.now())=>{i=g,a=null,u&&(clearTimeout(u),u=null),e.apply(null,m)};return[(...m)=>{const g=Date.now(),x=g-i;x>=o?c(m,g):(a=m,u||(u=setTimeout(()=>{u=null,c(a)},o-x)))},()=>a&&c(a)]}const fl=(e,n,i=3)=>{let o=0;const a=YP(50,250);return qP(u=>{const c=u.loaded,d=u.lengthComputable?u.total:void 0,p=c-o,m=a(p),g=c<=d;o=c;const x={loaded:c,total:d,progress:d?c/d:void 0,bytes:p,rate:m||void 0,estimated:m&&d&&g?(d-c)/m:void 0,event:u,lengthComputable:d!=null,[n?"download":"upload"]:!0};e(x)},i)},O0=(e,n)=>{const i=e!=null;return[o=>n[0]({lengthComputable:i,total:e,loaded:o}),n[1]]},F0=e=>(...n)=>B.asap(()=>e(...n)),XP=mt.hasStandardBrowserEnv?((e,n)=>i=>(i=new URL(i,mt.origin),e.protocol===i.protocol&&e.host===i.host&&(n||e.port===i.port)))(new URL(mt.origin),mt.navigator&&/(msie|trident)/i.test(mt.navigator.userAgent)):()=>!0,QP=mt.hasStandardBrowserEnv?{write(e,n,i,o,a,u){const c=[e+"="+encodeURIComponent(n)];B.isNumber(i)&&c.push("expires="+new Date(i).toGMTString()),B.isString(o)&&c.push("path="+o),B.isString(a)&&c.push("domain="+a),u===!0&&c.push("secure"),document.cookie=c.join("; ")},read(e){const n=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return n?decodeURIComponent(n[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function JP(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function ZP(e,n){return n?e.replace(/\/?\/$/,"")+"/"+n.replace(/^\/+/,""):e}function t1(e,n,i){let o=!JP(n);return e&&(o||i==!1)?ZP(e,n):n}const N0=e=>e instanceof jt?{...e}:e;function Nr(e,n){n=n||{};const i={};function o(m,g,x,w){return B.isPlainObject(m)&&B.isPlainObject(g)?B.merge.call({caseless:w},m,g):B.isPlainObject(g)?B.merge({},g):B.isArray(g)?g.slice():g}function a(m,g,x,w){if(B.isUndefined(g)){if(!B.isUndefined(m))return o(void 0,m,x,w)}else return o(m,g,x,w)}function u(m,g){if(!B.isUndefined(g))return o(void 0,g)}function c(m,g){if(B.isUndefined(g)){if(!B.isUndefined(m))return o(void 0,m)}else return o(void 0,g)}function d(m,g,x){if(x in n)return o(m,g);if(x in e)return o(void 0,m)}const p={url:u,method:u,data:u,baseURL:c,transformRequest:c,transformResponse:c,paramsSerializer:c,timeout:c,timeoutMessage:c,withCredentials:c,withXSRFToken:c,adapter:c,responseType:c,xsrfCookieName:c,xsrfHeaderName:c,onUploadProgress:c,onDownloadProgress:c,decompress:c,maxContentLength:c,maxBodyLength:c,beforeRedirect:c,transport:c,httpAgent:c,httpsAgent:c,cancelToken:c,socketPath:c,responseEncoding:c,validateStatus:d,headers:(m,g,x)=>a(N0(m),N0(g),x,!0)};return B.forEach(Object.keys(Object.assign({},e,n)),function(g){const x=p[g]||a,w=x(e[g],n[g],g);B.isUndefined(w)&&x!==d||(i[g]=w)}),i}const n1=e=>{const n=Nr({},e);let{data:i,withXSRFToken:o,xsrfHeaderName:a,xsrfCookieName:u,headers:c,auth:d}=n;n.headers=c=jt.from(c),n.url=Xv(t1(n.baseURL,n.url,n.allowAbsoluteUrls),e.params,e.paramsSerializer),d&&c.set("Authorization","Basic "+btoa((d.username||"")+":"+(d.password?unescape(encodeURIComponent(d.password)):"")));let p;if(B.isFormData(i)){if(mt.hasStandardBrowserEnv||mt.hasStandardBrowserWebWorkerEnv)c.setContentType(void 0);else if((p=c.getContentType())!==!1){const[m,...g]=p?p.split(";").map(x=>x.trim()).filter(Boolean):[];c.setContentType([m||"multipart/form-data",...g].join("; "))}}if(mt.hasStandardBrowserEnv&&(o&&B.isFunction(o)&&(o=o(n)),o||o!==!1&&XP(n.url))){const m=a&&u&&QP.read(u);m&&c.set(a,m)}return n},ej=typeof XMLHttpRequest<"u",tj=ej&&function(e){return new Promise(function(i,o){const a=n1(e);let u=a.data;const c=jt.from(a.headers).normalize();let{responseType:d,onUploadProgress:p,onDownloadProgress:m}=a,g,x,w,S,k;function T(){S&&S(),k&&k(),a.cancelToken&&a.cancelToken.unsubscribe(g),a.signal&&a.signal.removeEventListener("abort",g)}let E=new XMLHttpRequest;E.open(a.method.toUpperCase(),a.url,!0),E.timeout=a.timeout;function P(){if(!E)return;const A=jt.from("getAllResponseHeaders"in E&&E.getAllResponseHeaders()),O={data:!d||d==="text"||d==="json"?E.responseText:E.response,status:E.status,statusText:E.statusText,headers:A,config:e,request:E};e1(function(W){i(W),T()},function(W){o(W),T()},O),E=null}"onloadend"in E?E.onloadend=P:E.onreadystatechange=function(){!E||E.readyState!==4||E.status===0&&!(E.responseURL&&E.responseURL.indexOf("file:")===0)||setTimeout(P)},E.onabort=function(){E&&(o(new fe("Request aborted",fe.ECONNABORTED,e,E)),E=null)},E.onerror=function(){o(new fe("Network Error",fe.ERR_NETWORK,e,E)),E=null},E.ontimeout=function(){let F=a.timeout?"timeout of "+a.timeout+"ms exceeded":"timeout exceeded";const O=a.transitional||Qv;a.timeoutErrorMessage&&(F=a.timeoutErrorMessage),o(new fe(F,O.clarifyTimeoutError?fe.ETIMEDOUT:fe.ECONNABORTED,e,E)),E=null},u===void 0&&c.setContentType(null),"setRequestHeader"in E&&B.forEach(c.toJSON(),function(F,O){E.setRequestHeader(O,F)}),B.isUndefined(a.withCredentials)||(E.withCredentials=!!a.withCredentials),d&&d!=="json"&&(E.responseType=a.responseType),m&&([w,k]=fl(m,!0),E.addEventListener("progress",w)),p&&E.upload&&([x,S]=fl(p),E.upload.addEventListener("progress",x),E.upload.addEventListener("loadend",S)),(a.cancelToken||a.signal)&&(g=A=>{E&&(o(!A||A.type?new Ui(null,e,E):A),E.abort(),E=null)},a.cancelToken&&a.cancelToken.subscribe(g),a.signal&&(a.signal.aborted?g():a.signal.addEventListener("abort",g)));const L=GP(a.url);if(L&&mt.protocols.indexOf(L)===-1){o(new fe("Unsupported protocol "+L+":",fe.ERR_BAD_REQUEST,e));return}E.send(u||null)})},nj=(e,n)=>{const{length:i}=e=e?e.filter(Boolean):[];if(n||i){let o=new AbortController,a;const u=function(m){if(!a){a=!0,d();const g=m instanceof Error?m:this.reason;o.abort(g instanceof fe?g:new Ui(g instanceof Error?g.message:g))}};let c=n&&setTimeout(()=>{c=null,u(new fe(`timeout ${n} of ms exceeded`,fe.ETIMEDOUT))},n);const d=()=>{e&&(c&&clearTimeout(c),c=null,e.forEach(m=>{m.unsubscribe?m.unsubscribe(u):m.removeEventListener("abort",u)}),e=null)};e.forEach(m=>m.addEventListener("abort",u));const{signal:p}=o;return p.unsubscribe=()=>B.asap(d),p}},rj=function*(e,n){let i=e.byteLength;if(i<n){yield e;return}let o=0,a;for(;o<i;)a=o+n,yield e.slice(o,a),o=a},ij=async function*(e,n){for await(const i of oj(e))yield*rj(i,n)},oj=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const n=e.getReader();try{for(;;){const{done:i,value:o}=await n.read();if(i)break;yield o}}finally{await n.cancel()}},V0=(e,n,i,o)=>{const a=ij(e,n);let u=0,c,d=p=>{c||(c=!0,o&&o(p))};return new ReadableStream({async pull(p){try{const{done:m,value:g}=await a.next();if(m){d(),p.close();return}let x=g.byteLength;if(i){let w=u+=x;i(w)}p.enqueue(new Uint8Array(g))}catch(m){throw d(m),m}},cancel(p){return d(p),a.return()}},{highWaterMark:2})},Il=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",r1=Il&&typeof ReadableStream=="function",sj=Il&&(typeof TextEncoder=="function"?(e=>n=>e.encode(n))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),i1=(e,...n)=>{try{return!!e(...n)}catch{return!1}},aj=r1&&i1(()=>{let e=!1;const n=new Request(mt.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!n}),z0=64*1024,Ud=r1&&i1(()=>B.isReadableStream(new Response("").body)),pl={stream:Ud&&(e=>e.body)};Il&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(n=>{!pl[n]&&(pl[n]=B.isFunction(e[n])?i=>i[n]():(i,o)=>{throw new fe(`Response type '${n}' is not supported`,fe.ERR_NOT_SUPPORT,o)})})})(new Response);const lj=async e=>{if(e==null)return 0;if(B.isBlob(e))return e.size;if(B.isSpecCompliantForm(e))return(await new Request(mt.origin,{method:"POST",body:e}).arrayBuffer()).byteLength;if(B.isArrayBufferView(e)||B.isArrayBuffer(e))return e.byteLength;if(B.isURLSearchParams(e)&&(e=e+""),B.isString(e))return(await sj(e)).byteLength},uj=async(e,n)=>{const i=B.toFiniteNumber(e.getContentLength());return i??lj(n)},cj=Il&&(async e=>{let{url:n,method:i,data:o,signal:a,cancelToken:u,timeout:c,onDownloadProgress:d,onUploadProgress:p,responseType:m,headers:g,withCredentials:x="same-origin",fetchOptions:w}=n1(e);m=m?(m+"").toLowerCase():"text";let S=nj([a,u&&u.toAbortSignal()],c),k;const T=S&&S.unsubscribe&&(()=>{S.unsubscribe()});let E;try{if(p&&aj&&i!=="get"&&i!=="head"&&(E=await uj(g,o))!==0){let O=new Request(n,{method:"POST",body:o,duplex:"half"}),V;if(B.isFormData(o)&&(V=O.headers.get("content-type"))&&g.setContentType(V),O.body){const[W,H]=O0(E,fl(F0(p)));o=V0(O.body,z0,W,H)}}B.isString(x)||(x=x?"include":"omit");const P="credentials"in Request.prototype;k=new Request(n,{...w,signal:S,method:i.toUpperCase(),headers:g.normalize().toJSON(),body:o,duplex:"half",credentials:P?x:void 0});let L=await fetch(k);const A=Ud&&(m==="stream"||m==="response");if(Ud&&(d||A&&T)){const O={};["status","statusText","headers"].forEach(Q=>{O[Q]=L[Q]});const V=B.toFiniteNumber(L.headers.get("content-length")),[W,H]=d&&O0(V,fl(F0(d),!0))||[];L=new Response(V0(L.body,z0,W,()=>{H&&H(),T&&T()}),O)}m=m||"text";let F=await pl[B.findKey(pl,m)||"text"](L,e);return!A&&T&&T(),await new Promise((O,V)=>{e1(O,V,{data:F,headers:jt.from(L.headers),status:L.status,statusText:L.statusText,config:e,request:k})})}catch(P){throw T&&T(),P&&P.name==="TypeError"&&/Load failed|fetch/i.test(P.message)?Object.assign(new fe("Network Error",fe.ERR_NETWORK,e,k),{cause:P.cause||P}):fe.from(P,P&&P.code,e,k)}}),Wd={http:CP,xhr:tj,fetch:cj};B.forEach(Wd,(e,n)=>{if(e){try{Object.defineProperty(e,"name",{value:n})}catch{}Object.defineProperty(e,"adapterName",{value:n})}});const U0=e=>`- ${e}`,dj=e=>B.isFunction(e)||e===null||e===!1,o1={getAdapter:e=>{e=B.isArray(e)?e:[e];const{length:n}=e;let i,o;const a={};for(let u=0;u<n;u++){i=e[u];let c;if(o=i,!dj(i)&&(o=Wd[(c=String(i)).toLowerCase()],o===void 0))throw new fe(`Unknown adapter '${c}'`);if(o)break;a[c||"#"+u]=o}if(!o){const u=Object.entries(a).map(([d,p])=>`adapter ${d} `+(p===!1?"is not supported by the environment":"is not available in the build"));let c=n?u.length>1?`since :
`+u.map(U0).join(`
`):" "+U0(u[0]):"as no adapter specified";throw new fe("There is no suitable adapter to dispatch the request "+c,"ERR_NOT_SUPPORT")}return o},adapters:Wd};function ed(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Ui(null,e)}function W0(e){return ed(e),e.headers=jt.from(e.headers),e.data=Zc.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),o1.getAdapter(e.adapter||fs.adapter)(e).then(function(o){return ed(e),o.data=Zc.call(e,e.transformResponse,o),o.headers=jt.from(o.headers),o},function(o){return Zv(o)||(ed(e),o&&o.response&&(o.response.data=Zc.call(e,e.transformResponse,o.response),o.response.headers=jt.from(o.response.headers))),Promise.reject(o)})}const s1="1.9.0",Ll={};["object","boolean","number","function","string","symbol"].forEach((e,n)=>{Ll[e]=function(o){return typeof o===e||"a"+(n<1?"n ":" ")+e}});const H0={};Ll.transitional=function(n,i,o){function a(u,c){return"[Axios v"+s1+"] Transitional option '"+u+"'"+c+(o?". "+o:"")}return(u,c,d)=>{if(n===!1)throw new fe(a(c," has been removed"+(i?" in "+i:"")),fe.ERR_DEPRECATED);return i&&!H0[c]&&(H0[c]=!0,console.warn(a(c," has been deprecated since v"+i+" and will be removed in the near future"))),n?n(u,c,d):!0}};Ll.spelling=function(n){return(i,o)=>(console.warn(`${o} is likely a misspelling of ${n}`),!0)};function fj(e,n,i){if(typeof e!="object")throw new fe("options must be an object",fe.ERR_BAD_OPTION_VALUE);const o=Object.keys(e);let a=o.length;for(;a-- >0;){const u=o[a],c=n[u];if(c){const d=e[u],p=d===void 0||c(d,u,e);if(p!==!0)throw new fe("option "+u+" must be "+p,fe.ERR_BAD_OPTION_VALUE);continue}if(i!==!0)throw new fe("Unknown option "+u,fe.ERR_BAD_OPTION)}}const Za={assertOptions:fj,validators:Ll},fn=Za.validators;let Br=class{constructor(n){this.defaults=n||{},this.interceptors={request:new _0,response:new _0}}async request(n,i){try{return await this._request(n,i)}catch(o){if(o instanceof Error){let a={};Error.captureStackTrace?Error.captureStackTrace(a):a=new Error;const u=a.stack?a.stack.replace(/^.+\n/,""):"";try{o.stack?u&&!String(o.stack).endsWith(u.replace(/^.+\n.+\n/,""))&&(o.stack+=`
`+u):o.stack=u}catch{}}throw o}}_request(n,i){typeof n=="string"?(i=i||{},i.url=n):i=n||{},i=Nr(this.defaults,i);const{transitional:o,paramsSerializer:a,headers:u}=i;o!==void 0&&Za.assertOptions(o,{silentJSONParsing:fn.transitional(fn.boolean),forcedJSONParsing:fn.transitional(fn.boolean),clarifyTimeoutError:fn.transitional(fn.boolean)},!1),a!=null&&(B.isFunction(a)?i.paramsSerializer={serialize:a}:Za.assertOptions(a,{encode:fn.function,serialize:fn.function},!0)),i.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?i.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:i.allowAbsoluteUrls=!0),Za.assertOptions(i,{baseUrl:fn.spelling("baseURL"),withXsrfToken:fn.spelling("withXSRFToken")},!0),i.method=(i.method||this.defaults.method||"get").toLowerCase();let c=u&&B.merge(u.common,u[i.method]);u&&B.forEach(["delete","get","head","post","put","patch","common"],k=>{delete u[k]}),i.headers=jt.concat(c,u);const d=[];let p=!0;this.interceptors.request.forEach(function(T){typeof T.runWhen=="function"&&T.runWhen(i)===!1||(p=p&&T.synchronous,d.unshift(T.fulfilled,T.rejected))});const m=[];this.interceptors.response.forEach(function(T){m.push(T.fulfilled,T.rejected)});let g,x=0,w;if(!p){const k=[W0.bind(this),void 0];for(k.unshift.apply(k,d),k.push.apply(k,m),w=k.length,g=Promise.resolve(i);x<w;)g=g.then(k[x++],k[x++]);return g}w=d.length;let S=i;for(x=0;x<w;){const k=d[x++],T=d[x++];try{S=k(S)}catch(E){T.call(this,E);break}}try{g=W0.call(this,S)}catch(k){return Promise.reject(k)}for(x=0,w=m.length;x<w;)g=g.then(m[x++],m[x++]);return g}getUri(n){n=Nr(this.defaults,n);const i=t1(n.baseURL,n.url,n.allowAbsoluteUrls);return Xv(i,n.params,n.paramsSerializer)}};B.forEach(["delete","get","head","options"],function(n){Br.prototype[n]=function(i,o){return this.request(Nr(o||{},{method:n,url:i,data:(o||{}).data}))}});B.forEach(["post","put","patch"],function(n){function i(o){return function(u,c,d){return this.request(Nr(d||{},{method:n,headers:o?{"Content-Type":"multipart/form-data"}:{},url:u,data:c}))}}Br.prototype[n]=i(),Br.prototype[n+"Form"]=i(!0)});let pj=class a1{constructor(n){if(typeof n!="function")throw new TypeError("executor must be a function.");let i;this.promise=new Promise(function(u){i=u});const o=this;this.promise.then(a=>{if(!o._listeners)return;let u=o._listeners.length;for(;u-- >0;)o._listeners[u](a);o._listeners=null}),this.promise.then=a=>{let u;const c=new Promise(d=>{o.subscribe(d),u=d}).then(a);return c.cancel=function(){o.unsubscribe(u)},c},n(function(u,c,d){o.reason||(o.reason=new Ui(u,c,d),i(o.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(n){if(this.reason){n(this.reason);return}this._listeners?this._listeners.push(n):this._listeners=[n]}unsubscribe(n){if(!this._listeners)return;const i=this._listeners.indexOf(n);i!==-1&&this._listeners.splice(i,1)}toAbortSignal(){const n=new AbortController,i=o=>{n.abort(o)};return this.subscribe(i),n.signal.unsubscribe=()=>this.unsubscribe(i),n.signal}static source(){let n;return{token:new a1(function(a){n=a}),cancel:n}}};function hj(e){return function(i){return e.apply(null,i)}}function mj(e){return B.isObject(e)&&e.isAxiosError===!0}const Hd={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Hd).forEach(([e,n])=>{Hd[n]=e});function l1(e){const n=new Br(e),i=Ov(Br.prototype.request,n);return B.extend(i,Br.prototype,n,{allOwnKeys:!0}),B.extend(i,n,null,{allOwnKeys:!0}),i.create=function(a){return l1(Nr(e,a))},i}const ke=l1(fs);ke.Axios=Br;ke.CanceledError=Ui;ke.CancelToken=pj;ke.isCancel=Zv;ke.VERSION=s1;ke.toFormData=Dl;ke.AxiosError=fe;ke.Cancel=ke.CanceledError;ke.all=function(n){return Promise.all(n)};ke.spread=hj;ke.isAxiosError=mj;ke.mergeConfig=Nr;ke.AxiosHeaders=jt;ke.formToJSON=e=>Jv(B.isHTMLForm(e)?new FormData(e):e);ke.getAdapter=o1.getAdapter;ke.HttpStatusCode=Hd;ke.default=ke;const{Axios:m4,AxiosError:g4,CanceledError:y4,isCancel:x4,CancelToken:v4,VERSION:w4,all:S4,Cancel:b4,isAxiosError:k4,spread:E4,toFormData:C4,AxiosHeaders:T4,HttpStatusCode:P4,formToJSON:j4,getAdapter:R4,mergeConfig:A4}=ke,gj="https://www.bubbledogs.top",st=ke.create({baseURL:gj,timeout:1e4,headers:{"Content-Type":"application/json"}});st.interceptors.request.use(e=>{const n=localStorage.getItem("access_token");n&&(e.headers.Authorization=`Bearer ${n}`);const i=el();return i&&e.data&&typeof e.data=="object"&&(e.data={...e.data,deviceId:i}),e},e=>Promise.reject(e));st.interceptors.response.use(e=>e,e=>(e.response?(console.error("API Error:",e.response.data),e.response.status===401&&localStorage.removeItem("access_token")):e.request?console.error("No response received:",e.request):console.error("Request error:",e.message),Promise.reject(e)));const el=()=>{let e=localStorage.getItem("device_id");return e||(e="device_"+Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15),localStorage.setItem("device_id",e)),e},lt={loginWithPassword:async(e,n)=>{try{const i=await st.post("/api/login/password",{username:e,password:n,deviceId:el()});if(i.data.code===200&&i.data.data)return localStorage.setItem("access_token",i.data.data.access_token),localStorage.setItem("user_data",JSON.stringify(i.data.data)),i.data.data;throw new Error(i.data.message||"登录失败")}catch(i){throw ke.isAxiosError(i)&&i.response?new Error(i.response.data.message||"登录失败"):new Error("网络错误，请稍后再试")}},loginWithPhoneCode:async(e,n)=>{try{const i=await st.post("/api/verify_code",{phone:e,code:n,deviceId:el()});if(i.data.code===200&&i.data.data)return localStorage.setItem("access_token",i.data.data.access_token),localStorage.setItem("user_data",JSON.stringify(i.data.data)),i.data.data;throw new Error(i.data.message||"登录失败")}catch(i){throw ke.isAxiosError(i)&&i.response?new Error(i.response.data.message||"登录失败"):new Error("网络错误，请稍后再试")}},sendVerificationCode:async e=>{try{const n=await st.post("/api/send_code",{phone:e,deviceId:el()});if(n.data.code!==200)throw new Error(n.data.message||"发送验证码失败")}catch(n){throw ke.isAxiosError(n)&&n.response?new Error(n.response.data.message||"发送验证码失败"):new Error("网络错误，请稍后再试")}},logout:async()=>{try{await st.post("/api/logout"),localStorage.removeItem("access_token"),localStorage.removeItem("user_data")}catch(e){console.error("Logout error:",e),localStorage.removeItem("access_token"),localStorage.removeItem("user_data")}},getUserInfo:async()=>{try{const e=localStorage.getItem("user_data");if(e)return JSON.parse(e);throw new Error("未找到用户数据")}catch(e){throw console.error("获取用户数据失败:",e),new Error("获取用户信息失败")}},checkLoginStatus:async()=>!!localStorage.getItem("access_token"),getUserVoices:async e=>{try{let n=e;if(!n){const o=localStorage.getItem("user_data");o&&(n=JSON.parse(o).user_id)}if(!n)throw new Error("未找到用户ID");const i=await st.get(`/api/voice-enrollment/user-voices?user_id=${n}`);if(i.data.success)return i.data;throw new Error(i.data.message||"获取音色列表失败")}catch(n){throw ke.isAxiosError(n)&&n.response?new Error(n.response.data.message||"获取音色列表失败"):new Error("网络错误，请稍后再试")}},async shareVoice(e,n,i,o){try{const a=localStorage.getItem("access_token");if(!a)throw new Error("用户未登录");const u=await st.post("/api/voice-enrollment/share",{voiceId:e,bubbleId:n,voiceName:i,voicePrompt:o},{headers:{Authorization:`Bearer ${a}`,"Content-Type":"application/json;charset=UTF-8"}});if(u.status!==200)throw new Error(u.data.message||"共享音色失败");return{success:!0,sharedVoiceId:u.data.sharedVoiceId}}catch(a){if(a.response){const{status:u,data:c}=a.response;throw u===404?new Error("目标用户不存在"):u===400?new Error(c.message||"参数错误"):new Error(c.message||"共享音色失败")}else throw a.request?new Error("服务器无响应，请稍后重试"):a}},async updateVoice(e,n,i){try{const o=localStorage.getItem("access_token");if(!o)throw new Error("用户未登录");const a=localStorage.getItem("user_data");if(!a)throw new Error("未找到用户信息");const c=JSON.parse(a).user_id;if(!c)throw new Error("未找到用户ID");const d={voiceId:e,userId:c};n!==void 0&&(d.name=n),i!==void 0&&(d.userPrompt=i);const p=await st.post("/api/voice-enrollment/update",d,{headers:{Authorization:`Bearer ${o}`,"Content-Type":"application/json;charset=UTF-8"}});if(!p.data.success)throw new Error(p.data.message||"更新音色失败");return{success:!0,voiceId:p.data.voiceId,name:p.data.name,userPrompt:p.data.userPrompt}}catch(o){throw o.response?new Error(o.response.data.message||"更新音色失败"):o.request?new Error("服务器无响应，请稍后重试"):o}},async deleteVoice(e){try{const n=localStorage.getItem("user_data");if(!n)throw new Error("未找到用户信息");const o=JSON.parse(n).user_id;if(!o)throw new Error("未找到用户ID");if(!e)throw new Error("缺少必要的参数: voice_id");const a=await st.post(`/api/voice-enrollment/delete?voice_id=${e}`,{user_id:o});return{success:a.data.success,message:a.data.message,voiceId:a.data.voiceId,userId:a.data.userId}}catch(n){throw n.response?new Error(n.response.data.message||"删除音色失败"):n.request?new Error("服务器无响应，请稍后重试"):n}},getAdminUsersList:async e=>{try{const n=await st.post("/api/admin/users/list",{username:e.username,page:e.page||1,pageSize:e.pageSize||10,searchTerm:e.searchTerm});if(n.data.code===200)return n.data.data;throw new Error(n.data.message||"获取用户列表失败")}catch(n){throw ke.isAxiosError(n)&&n.response?new Error(n.response.data.message||"获取用户列表失败"):new Error("网络错误，请稍后重试")}},editAdminUser:async e=>{try{const n=await st.post("/api/admin/users/edit",{adminUsername:e.adminUsername,userId:e.userId,userData:e.userData},{headers:{"Content-Type":"application/json;charset=UTF-8"}});if(n.data.code===200)return{success:!0,message:n.data.message||"编辑用户成功",user:n.data.data};throw new Error(n.data.message||"编辑用户失败")}catch(n){if(ke.isAxiosError(n)&&n.response){const i=n.response.status;throw i===403?new Error("没有权限执行此操作"):i===404?new Error("用户不存在"):i===400?new Error(n.response.data.message||"请求参数无效"):new Error(n.response.data.message||"编辑用户失败")}else throw n instanceof Error?n:new Error("网络错误，请稍后重试")}},deleteAdminUser:async e=>{try{const n=await st.post("/api/admin/users/delete",{adminUsername:e.adminUsername,userId:e.userId});if(n.data.code===200)return{success:!0,message:n.data.message||"删除用户成功",userId:e.userId};throw new Error(n.data.message||"删除用户失败")}catch(n){if(ke.isAxiosError(n)&&n.response){const i=n.response.status;throw i===403?new Error("没有权限执行此操作"):i===404?new Error("用户不存在"):new Error(n.response.data.message||"删除用户失败")}else throw n instanceof Error?n:new Error("网络错误，请稍后重试")}},getAdminVoicesList:async e=>{try{const n=await st.post("/api/admin/voices/list",{username:e.username,page:e.page||1,pageSize:e.pageSize||10,searchTerm:e.searchTerm});if(n.data.code===200)return n.data.data;throw new Error(n.data.message||"获取音色列表失败")}catch(n){throw ke.isAxiosError(n)&&n.response?new Error(n.response.data.message||"获取音色列表失败"):new Error("网络错误，请稍后重试")}},deleteAdminVoice:async e=>{try{const n=await st.post("/api/admin/voices/delete",{adminUsername:e.adminUsername,voiceId:e.voiceId});if(n.data.code===200)return{success:!0,message:n.data.message||"删除音色成功",voiceId:e.voiceId};throw new Error(n.data.message||"删除音色失败")}catch(n){if(ke.isAxiosError(n)&&n.response){const i=n.response.status;throw i===403?new Error("没有权限执行此操作"):i===404?new Error("音色不存在"):new Error(n.response.data.message||"删除音色失败")}else throw n instanceof Error?n:new Error("网络错误，请稍后重试")}},async createAdminUser(e){var n;try{const i=await st.post("/api/admin/users/create",e,{headers:{"Content-Type":"application/json;charset=UTF-8","Accept-Charset":"UTF-8"}});if(i.data&&i.data.code===200)return i.data.data;throw new Error(((n=i.data)==null?void 0:n.message)||"创建用户失败")}catch(i){if(i.response){const o=i.response.data;throw o.code===400?new Error(o.message||"参数错误"):o.code===403?new Error("无权限创建用户"):new Error(o.message||"创建用户失败")}else throw i.request?new Error("网络错误，请检查您的网络连接"):i}},redeemCode:async(e,n)=>{try{const i=await st.post("/api/redeem-codes/use",{username:e,code:n});if(i.data&&i.data.id)return localStorage.setItem("user_data",JSON.stringify(i.data)),i.data;if(i.data&&i.data.code===200&&i.data.data)return localStorage.setItem("user_data",JSON.stringify(i.data.data)),i.data.data;throw i.data&&i.data.message?new Error(i.data.message):new Error("兑换失败，响应数据格式不正确")}catch(i){if(ke.isAxiosError(i)&&i.response){const o=i.response.data;throw o&&o.message?new Error(o.message):new Error("兑换失败: "+i.response.status)}else throw i instanceof Error?i:new Error("网络错误，请稍后再试")}}};class yj{constructor(){zm(this,"listeners",new Map)}on(n,i){var o;return this.listeners.has(n)||this.listeners.set(n,[]),(o=this.listeners.get(n))==null||o.push(i),()=>{const a=this.listeners.get(n);if(a){const u=a.indexOf(i);u!==-1&&a.splice(u,1)}}}emit(n,...i){var o;this.listeners.has(n)&&((o=this.listeners.get(n))==null||o.forEach(a=>{try{a(...i)}catch(u){console.error(`Error in user event listener for ${n}:`,u)}}))}}const Ie=new yj,u1={isLogin:!!localStorage.getItem("access_token"),userData:null,loading:!1,error:null};try{const e=localStorage.getItem("user_data");e&&(u1.userData=JSON.parse(e))}catch(e){console.error("Failed to parse stored user data:",e)}const et={state:{...u1},get isLogin(){const e=!!localStorage.getItem("access_token");return e!==this.state.isLogin&&(console.log("登录状态不一致，修复中...","本地存储token:",e,"当前状态:",this.state.isLogin),this.state.isLogin=e),this.state.isLogin},forceRefreshLoginStatus(){const e=!!localStorage.getItem("access_token");if(console.log("强制刷新登录状态:","本地存储token:",e,"当前状态:",this.state.isLogin),e!==this.state.isLogin)if(this.state.isLogin=e,e)try{const n=localStorage.getItem("user_data");n&&(this.state.userData=JSON.parse(n),Ie.emit("login",this.state.userData))}catch(n){console.error("解析用户数据失败:",n)}else this.state.userData=null,Ie.emit("logout");return this.state.isLogin},get userData(){return this.state.userData},get loading(){return this.state.loading},get error(){return this.state.error},async init(){try{if(this.state.loading=!0,Ie.emit("loading",!0),await lt.checkLoginStatus()){const n=await lt.getUserInfo();this.state.userData=n,this.state.isLogin=!0,Ie.emit("login",n)}else this.state.isLogin=!1,this.state.userData=null,Ie.emit("logout");this.state.error=null}catch(e){this.state.error=e instanceof Error?e.message:"初始化用户状态失败",Ie.emit("error",this.state.error)}finally{this.state.loading=!1,Ie.emit("loading",!1)}},async login(e,n){try{this.state.loading=!0,this.state.error=null,Ie.emit("loading",!0);const i=await lt.loginWithPassword(e,n);return this.state.isLogin=!0,this.state.userData=i,localStorage.setItem("access_token",i.access_token),localStorage.setItem("user_data",JSON.stringify(i)),console.log("发送登录事件, 当前登录状态:",this.state.isLogin),Ie.emit("login",i),i}catch(i){throw this.state.error=i instanceof Error?i.message:"登录失败",Ie.emit("error",this.state.error),i}finally{this.state.loading=!1,Ie.emit("loading",!1)}},async loginWithPhone(e,n){try{this.state.loading=!0,this.state.error=null,Ie.emit("loading",!0);const i=await lt.loginWithPhoneCode(e,n);return this.state.isLogin=!0,this.state.userData=i,Ie.emit("login",i),i}catch(i){throw this.state.error=i instanceof Error?i.message:"登录失败",Ie.emit("error",this.state.error),i}finally{this.state.loading=!1,Ie.emit("loading",!1)}},async logout(){try{this.state.loading=!0,Ie.emit("loading",!0),localStorage.removeItem("access_token"),localStorage.removeItem("user_data"),this.state.isLogin=!1,this.state.userData=null,Ie.emit("logout");try{await lt.logout()}catch(e){console.error("调用登出API失败，但客户端已登出",e)}}catch(e){throw this.state.error=e instanceof Error?e.message:"退出登录失败",Ie.emit("error",this.state.error),e}finally{this.state.loading=!1,Ie.emit("loading",!1)}},async refreshUserInfo(){try{this.state.loading=!0,Ie.emit("loading",!0);const e=await lt.getUserInfo();return this.state.userData=e,Ie.emit("update",e),e}catch(e){throw this.state.error=e instanceof Error?e.message:"获取用户信息失败",Ie.emit("error",this.state.error),e}finally{this.state.loading=!1,Ie.emit("loading",!1)}},subscribe(e,n){return Ie.on(e,n)}};et.init().catch(e=>{console.error("Failed to initialize user store:",e)});const xj=R.section`
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
`,vj=R(Y.div)`
  text-align: center;
  z-index: 1;
  max-width: 1000px;
  padding-top: 1rem;
  position: relative;
  
  @media (max-width: 768px) {
    padding-top: 2rem;
  }
`,wj=R(Y.h1)`
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
`,Sj=R(Y.span)`
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
`,bj=R(Y.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateX(0);
  
  @media (max-width: 768px) {
    transform: translateX(0);
  }
`,kj=R.img`
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
`,Ej=R.span`
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
`,Cj=R(Y.p)`
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
`,Tj=R.div`
  position: fixed;
  bottom: 30px;
  width: 100%;
  overflow: hidden;
  z-index: 1;
  transition: opacity 0.3s ease-out;
  opacity: ${e=>e.$isVisible?1:0};
`,Pj=R(Y.div)`
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
`,jj=R.span`
  display: inline-block;
  padding-right: 4rem;
`,Rj=()=>!0,Aj="BLACK BUBBLE",Da=["你好，泡友~","Hello, Bubble Friend~","こんにちは、バブル友達~","Bonjour, Ami Bulle~","Hola, Amigo Burbuja~","안녕, 버블 친구~","Ciao, Amico Bolla~","Hallo, Blasenfreund~","Привет, Пузырьковый друг~","Olá, Amigo Bolha~","你好，泡友~","नमस्ते, बबल मित्र~","مرحبا، صديق الفقاعة~","Γεια σου, φίλε φυσαλίδα~","Merhaba, Kabarcık Arkadaşım~","Hej, Bubbla Vän~","Hei, Kupla Ystävä~","สวัสดี เพื่อนฟอง~","Xin chào, Bạn Bong Bóng~","Halo, Teman Gelembung~","Kumusta, Kaibigan ng Bula~","Salam, Dost Həbab~","Habari, Rafiki wa Bubble~","Salut, Prieten Bulă~","Ahoj, Bublinový Příteli~","Cześć, Przyjacielu Bańki~","Sveiki, Burbuļa Draugs~","Tere, Mulli Sõber~","Sveiki, Burbulo Drauge~","Helló, Buborék Barát~","Здравейте, Мехур Приятел~","Здраво, Меур Пријатељ~","Բարեւ, Պղպջակ Ընկեր~","გამარჯობა, ბუშტი მეგობარი~","Hej, Boble Ven~","Hai, Teman Gelembung~","Chào, Bạn Bong Bóng~","Hallo, Borrelvriend~","שלום, חבר בועה~","Dia dhuit, Cara Bolgóideach~"],K0=()=>{const[e,n]=b.useState(""),[i,o]=b.useState(!1),[a,u]=b.useState(0),[c,d]=b.useState(et.isLogin),p=b.useRef(100),m=b.useRef(50),g=b.useRef(1500),x={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.3}}},w={hidden:{opacity:0,y:30},visible:{opacity:1,y:0}},S={animate:{x:[0,-2e3],transition:{x:{repeat:1/0,repeatType:"loop",duration:25,ease:"linear"}}}},k=Rj();return b.useEffect(()=>{const T=!!localStorage.getItem("access_token");T!==c&&(console.log("Hero组件 - 强制更新状态与localStorage一致:",T),d(T));const E=et.forceRefreshLoginStatus();console.log("Hero组件 - 初始化登录状态:",E),d(E);const P=et.subscribe("login",F=>{console.log("Hero组件 - 检测到登录事件"),d(!0)}),L=et.subscribe("logout",()=>{console.log("Hero组件 - 检测到登出事件"),localStorage.removeItem("access_token"),localStorage.removeItem("user_data"),d(!1)}),A=setInterval(()=>{const F=!!localStorage.getItem("access_token"),O=et.isLogin;(O!==c||F!==c)&&(console.log("Hero组件 - 登录状态不一致，更新状态:","当前状态:",c,"token状态:",F,"store状态:",O),d(F))},500);return()=>{P(),L(),clearInterval(A)}},[]),b.useEffect(()=>{n(""),o(!1),u(0);const T=setTimeout(()=>{n(Da[0].slice(0,1))},500);return()=>clearTimeout(T)},[]),b.useEffect(()=>{let T;if(i)e===""?(o(!1),u(E=>(E+1)%Da.length),T=setTimeout(()=>{},500)):T=setTimeout(()=>{n(e.slice(0,-1))},m.current);else{const E=Da[a];e===E?T=setTimeout(()=>{o(!0)},g.current):T=setTimeout(()=>{n(E.slice(0,e.length+1))},p.current)}return()=>clearTimeout(T)},[e,i,a,Da]),y.jsxs(xj,{children:[y.jsxs(vj,{variants:x,initial:"hidden",whileInView:"visible",viewport:{once:!0},transition:{duration:.8},children:[y.jsx(wj,{variants:w,children:y.jsx(Sj,{children:y.jsxs(bj,{children:[e,y.jsx(Ej,{}),y.jsx(kj,{src:"/WuKonWeb4/assets/hello.png",alt:"Hello"})]})})}),y.jsx(Cj,{variants:w,transition:{delay:.3},children:"每个泡泡有不同能力，音色克隆、实时翻译、多语言互译 一个泡泡，解锁无限可能···"}),!c&&y.jsx("div",{style:{marginTop:"3rem",width:"100%",display:"flex",justifyContent:"center",marginBottom:"2rem",position:"relative",zIndex:200},children:y.jsx("button",{onClick:()=>window.location.href="/WuKonWeb4/login",style:{padding:"0.9rem 2.2rem",background:"linear-gradient(135deg, #8B5CF6, #6366F1)",color:"white",borderRadius:"12px",fontSize:"1.1rem",fontWeight:"600",cursor:"pointer",boxShadow:"0 4px 20px rgba(99, 102, 241, 0.5)",border:"none",letterSpacing:"0.5px",transition:"all 0.3s ease",backdropFilter:"blur(4px)",outline:"none"},onMouseOver:T=>{T.currentTarget.style.transform="translateY(-2px)",T.currentTarget.style.boxShadow="0 6px 25px rgba(99, 102, 241, 0.6)"},onMouseOut:T=>{T.currentTarget.style.transform="translateY(0)",T.currentTarget.style.boxShadow="0 4px 20px rgba(99, 102, 241, 0.5)"},children:"Log in"})})]}),y.jsx(Tj,{$isVisible:k,children:y.jsx(Pj,{animate:"animate",variants:S,children:[...Array(6)].map((T,E)=>y.jsx(jj,{children:Aj},E))})})]})},or=()=>{const e=b.useRef(null),n=b.useRef(null);return b.useEffect(()=>(e.current=new(window.AudioContext||window.webkitAudioContext),()=>{n.current&&clearTimeout(n.current),e.current&&e.current.close()}),[]),null},G0=R.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
  will-change: transform;
`,Dj=R(Y.div)`
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
`,td=(...e)=>{},Gf=b.memo(()=>{const n=Ht().pathname,[i,o]=b.useState(!1);if(n==="/admin")return null;const a=b.useMemo(()=>{let c=["/WuKonWeb4/assets/logo.png","/WuKonWeb4/assets/jindouyun.png","/WuKonWeb4/assets/pingxingyuzhou.png","/WuKonWeb4/assets/tongchuanyimeng.png"];return n==="/jindouyun"?c=["/WuKonWeb4/assets/jindouyun.png"]:n==="/parallel"?c=["/WuKonWeb4/assets/pingxingyuzhou.png"]:n==="/interpreter"&&(c=["/WuKonWeb4/assets/tongchuanyimeng.png"]),c},[n]),u=b.useMemo(()=>Array.from({length:8},(c,d)=>{const p=Math.floor(Math.random()*a.length);return{id:d,size:Math.random()*70+50,x:Math.random()*100,delay:Math.random()*3,duration:Math.random()*10+35,rotate:Math.random()*360,image:a[p]}}),[a]);return b.useEffect(()=>{(async()=>{try{td("开始预加载图片..."),o(!1);const d=a.map(p=>new Promise((m,g)=>{const x=new Image;x.onload=()=>{td(`图片加载成功: ${p}`),m()},x.onerror=()=>{console.error(`图片加载失败: ${p}`),g(new Error(`图片加载失败: ${p}`))},x.src=p}));await Promise.all(d).catch(p=>{console.error("部分图片加载失败:",p)}),o(!0),td("所有图片预加载完成")}catch(d){console.error("预加载图片时出错:",d),o(!0)}})()},[a]),i?y.jsxs(G0,{children:[y.jsx(or,{}),u.map(c=>y.jsx(Dj,{size:c.size,initial:{x:`${c.x}vw`,y:`${100+Math.random()*20}vh`,rotate:c.rotate,opacity:.15},animate:{y:"-100vh",opacity:[.15,.15,0],rotate:c.rotate+180,x:`${c.x}vw`},transition:{duration:c.duration,delay:c.delay,repeat:1/0,ease:"linear"},children:y.jsx("img",{src:c.image,alt:"",onError:d=>{const p=d.target;console.error(`图片加载失败，使用备用图片: ${p.src}`),p.src="/WuKonWeb4/assets/logo.png"}})},c.id))]}):y.jsx(G0,{children:y.jsx(or,{})})}),Ij=R.section`
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
`,Lj=R(Y.div)`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  z-index: 1;
`,$j=R(Y.h2)`
  font-size: 2.5rem;
  background: linear-gradient(to right, #7C3AED, #2563EB);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,Mj=R(Y.p)`
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
`,_j=R.div`
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
`,Bj=R(Y.div)`
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
`,Oj=[{name:"ChatGPT",image:"/WuKonWeb4/Aiphoto/ChatGPT.png",description:"开创性的大语言模型，强大的对话能力"},{name:"Deepseek",image:"/WuKonWeb4/Aiphoto/deepseek.png",description:"专注于深度学习的AI助手，精准的专业解答"},{name:"Gemini",image:"/WuKonWeb4/Aiphoto/gemini.png",description:"Google最新多模态AI，跨领域理解能力"},{name:"Grok",image:"/WuKonWeb4/Aiphoto/Grok.png",description:"实时学习的AI，富有个性的对话风格"},{name:"Kimi",image:"/WuKonWeb4/Aiphoto/kimi.png",description:"安全可靠的AI助手，稳定的对话体验"},{name:"Qwen",image:"/WuKonWeb4/Aiphoto/Qwen.png",description:"通义千问，中文理解能力出众的AI模型"}],Fj=()=>{const e={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2}}},n={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.5}}},i={initial:{y:0},animate:{y:[-10,10,-10],transition:{duration:4,repeat:1/0,ease:"easeInOut"}}};return y.jsxs(Ij,{children:[y.jsx(Gf,{}),y.jsxs(Lj,{variants:e,initial:"hidden",whileInView:"visible",viewport:{once:!0,margin:"-100px"},children:[y.jsx($j,{variants:n,children:"强大LLM模型"}),y.jsx(Mj,{variants:n,children:"集成多个顶尖AI大语言模型，为您提供全方位的智能对话服务。 每个模型都有其独特优势，共同打造极致翻译体验。"}),y.jsx(_j,{children:Oj.map((o,a)=>y.jsxs(Bj,{variants:n,children:[y.jsx(Y.div,{variants:i,initial:"initial",animate:"animate",children:y.jsx("img",{src:o.image,alt:o.name})}),y.jsx("h3",{children:o.name}),y.jsx("p",{children:o.description})]},o.name))})]})]})},Nj=R.section`
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
`,Vj=R.div`
  max-width: 1200px;
  margin: 0 auto;
`,zj=R(Y.h2)`
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
`,Uj=R.div`
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
`,Wj=R(Y.div)`
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
`,Hj=R.div`
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
`,Kj=R.h3`
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
`,Gj=R.p`
  font-size: 1rem;
  line-height: 1.5;
  color: ${({theme:e})=>e.colors[e.mode].text};
  opacity: 0.8;

  @media (max-width: 768px) {
    font-size: 0.85rem;
    line-height: 1.4;
  }
`,Yj=()=>{const e=[{icon:"✍️",title:"文字润色",description:"AI智能润色，让表达更优雅精准"},{icon:"🌍",title:"外语翻译",description:"40+语言实时翻译，无障碍沟通"},{icon:"🎲",title:"天外之音",description:"盲盒匹配外语聊天，趣味学习"},{icon:"👽",title:"语音交流",description:"外星人音效，探索语言新乐趣"},{icon:"🤖",title:"AI助手",description:"智能对话，帮你解决语言难题"},{icon:"��",title:"极速响应",description:"毫秒级翻译，丝滑交流体验"}];return y.jsx(Nj,{children:y.jsxs(Vj,{children:[y.jsx(zj,{children:"强大功能"}),y.jsx(Uj,{children:e.map((n,i)=>y.jsxs(Wj,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.5,delay:i*.1},viewport:{once:!0},children:[y.jsx(Hj,{children:n.icon}),y.jsx(Kj,{children:n.title}),y.jsx(Gj,{children:n.description})]},i))})]})})};var Kd=new Map,Ia=new WeakMap,Y0=0,qj=void 0;function Xj(e){return e?(Ia.has(e)||(Y0+=1,Ia.set(e,Y0.toString())),Ia.get(e)):"0"}function Qj(e){return Object.keys(e).sort().filter(n=>e[n]!==void 0).map(n=>`${n}_${n==="root"?Xj(e.root):e[n]}`).toString()}function Jj(e){const n=Qj(e);let i=Kd.get(n);if(!i){const o=new Map;let a;const u=new IntersectionObserver(c=>{c.forEach(d=>{var p;const m=d.isIntersecting&&a.some(g=>d.intersectionRatio>=g);e.trackVisibility&&typeof d.isVisible>"u"&&(d.isVisible=m),(p=o.get(d.target))==null||p.forEach(g=>{g(m,d)})})},e);a=u.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),i={id:n,observer:u,elements:o},Kd.set(n,i)}return i}function Zj(e,n,i={},o=qj){if(typeof window.IntersectionObserver>"u"&&o!==void 0){const p=e.getBoundingClientRect();return n(o,{isIntersecting:o,target:e,intersectionRatio:typeof i.threshold=="number"?i.threshold:0,time:0,boundingClientRect:p,intersectionRect:p,rootBounds:p}),()=>{}}const{id:a,observer:u,elements:c}=Jj(i),d=c.get(e)||[];return c.has(e)||c.set(e,d),d.push(n),u.observe(e),function(){d.splice(d.indexOf(n),1),d.length===0&&(c.delete(e),u.unobserve(e)),c.size===0&&(u.disconnect(),Kd.delete(a))}}function e3({threshold:e,delay:n,trackVisibility:i,rootMargin:o,root:a,triggerOnce:u,skip:c,initialInView:d,fallbackInView:p,onChange:m}={}){var g;const[x,w]=b.useState(null),S=b.useRef(m),[k,T]=b.useState({inView:!!d,entry:void 0});S.current=m,b.useEffect(()=>{if(c||!x)return;let A;return A=Zj(x,(F,O)=>{T({inView:F,entry:O}),S.current&&S.current(F,O),O.isIntersecting&&u&&A&&(A(),A=void 0)},{root:a,rootMargin:o,threshold:e,trackVisibility:i,delay:n},p),()=>{A&&A()}},[Array.isArray(e)?e.toString():e,x,a,o,u,c,i,p,n]);const E=(g=k.entry)==null?void 0:g.target,P=b.useRef(void 0);!x&&E&&!u&&!c&&P.current!==E&&(P.current=E,T({inView:!!d,entry:void 0}));const L=[w,k.inView,k.entry];return L.ref=L[0],L.inView=L[1],L.entry=L[2],L}const t3=R.section`
  padding: 80px 20px;
    position: relative;
  overflow: hidden;
`,n3=R.div`
  max-width: 1200px;
  margin: 0 auto;
`,r3=R.div`
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`,i3=R.div`
  @media (max-width: 768px) {
  text-align: center;
  }
`,o3=R(Y.h2)`
  font-size: 3rem;
  font-weight: 700;
  background: linear-gradient(to right, #7C3AED, #2563EB);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,s3=R(Y.p)`
  font-size: 1.2rem;
  color: ${({theme:e})=>e.colors[e.mode].text};
  opacity: 0.8;
  line-height: 1.8;
  margin-bottom: 2rem;
`,a3=R(Y.div)`
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
`,l3=()=>{const[e,n]=e3({threshold:.3,triggerOnce:!0});return y.jsx(t3,{ref:e,children:y.jsx(n3,{children:y.jsxs(r3,{children:[y.jsxs(i3,{children:[y.jsx(o3,{initial:{opacity:0,y:20},animate:n?{opacity:1,y:0}:{},transition:{duration:.6},children:"40国语言即时交流"}),y.jsx(s3,{initial:{opacity:0,y:20},animate:n?{opacity:1,y:0}:{},transition:{duration:.6,delay:.2},children:"覆盖全球主要语种，从英语、日语到阿拉伯语，让你畅通无阻地与世界对话。 智能识别语言，一键切换目标语种，让跨语言交流变得轻松自如。"})]}),y.jsx(a3,{initial:{opacity:0,scale:.8,rotateY:-20},animate:n?{opacity:1,scale:1,rotateY:0}:{},transition:{type:"spring",duration:1,bounce:.4},whileHover:{scale:1.05,rotateY:5,transition:{duration:.3}},children:y.jsx("img",{src:"/WuKonWeb4/assets/lang.png",alt:"支持的语言"})})]})})})},u3=R.section`
  padding: 100px 20px;
  background: linear-gradient(0deg, ${({theme:e})=>e.colors[e.mode].background} 0%, rgba(124, 58, 237, 0.1) 100%);
`,c3=R.div`
  max-width: 800px;
  margin: 0 auto;
`,d3=R(Y.h2)`
  font-size: 2.5rem;
  text-align: center;
  background: linear-gradient(to right, #7C3AED, #2563EB);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 50px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,f3=R(Y.div)`
  margin-bottom: 20px;
`,p3=R(Y.button)`
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
`,h3=R(Y.div)`
  padding: 0 20px;
  color: ${({theme:e})=>e.colors[e.mode].gray};
  line-height: 1.6;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 0 15px;
  }
`,m3=()=>{const[e,n]=b.useState(null),i=[{question:"筋斗云支持哪些语言？",answer:"筋斗云支持超过40个国家和地区的语言，覆盖全球主要语种，让你随时随地都能畅通无阻地进行交流。"},{question:"天外之音功能是什么？",answer:"天外之音是一个创新的语言学习功能，通过盲盒模式随机匹配外语伙伴，让你在趣味聊天中自然提升语言能力。"},{question:"文字润色功能如何使用？",answer:"就像有一位专业的语文老师，筋斗云能智能分析你的文字，提供更优雅、更地道的表达建议，适用于作文、报告等场景。"},{question:"外星人语音交流是什么？",answer:"这是一个趣味性的语音功能，可以为你的语音添加有趣的外星人音效，让语言学习和交流变得更加有趣。"}],o=c=>{n(e===c?null:c)},a={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1}}},u={hidden:{opacity:0,x:-30},visible:{opacity:1,x:0,transition:{duration:.5}}};return y.jsx(u3,{children:y.jsxs(c3,{as:Y.div,variants:a,initial:"hidden",whileInView:"visible",viewport:{once:!0,margin:"-100px"},children:[y.jsx(d3,{variants:u,children:"常见问题"}),i.map((c,d)=>y.jsxs(f3,{variants:u,children:[y.jsxs(p3,{onClick:()=>o(d),whileTap:{scale:.98},children:[c.question,y.jsx(Y.span,{animate:{rotate:e===d?180:0},transition:{duration:.3},children:"▼"})]}),y.jsx(Vr,{children:e===d&&y.jsx(h3,{initial:{height:0,opacity:0},animate:{height:"auto",opacity:1},exit:{height:0,opacity:0},transition:{duration:.3},children:y.jsx("p",{children:c.answer})})})]},d))]})})};let g3={data:""},y3=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||g3,x3=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,v3=/\/\*[^]*?\*\/|  +/g,q0=/\n+/g,sr=(e,n)=>{let i="",o="",a="";for(let u in e){let c=e[u];u[0]=="@"?u[1]=="i"?i=u+" "+c+";":o+=u[1]=="f"?sr(c,u):u+"{"+sr(c,u[1]=="k"?"":n)+"}":typeof c=="object"?o+=sr(c,n?n.replace(/([^,])+/g,d=>u.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,p=>/&/.test(p)?p.replace(/&/g,d):d?d+" "+p:p)):u):c!=null&&(u=/^--/.test(u)?u:u.replace(/[A-Z]/g,"-$&").toLowerCase(),a+=sr.p?sr.p(u,c):u+":"+c+";")}return i+(n&&a?n+"{"+a+"}":a)+o},jn={},c1=e=>{if(typeof e=="object"){let n="";for(let i in e)n+=i+c1(e[i]);return n}return e},w3=(e,n,i,o,a)=>{let u=c1(e),c=jn[u]||(jn[u]=(p=>{let m=0,g=11;for(;m<p.length;)g=101*g+p.charCodeAt(m++)>>>0;return"go"+g})(u));if(!jn[c]){let p=u!==e?e:(m=>{let g,x,w=[{}];for(;g=x3.exec(m.replace(v3,""));)g[4]?w.shift():g[3]?(x=g[3].replace(q0," ").trim(),w.unshift(w[0][x]=w[0][x]||{})):w[0][g[1]]=g[2].replace(q0," ").trim();return w[0]})(e);jn[c]=sr(a?{["@keyframes "+c]:p}:p,i?"":"."+c)}let d=i&&jn.g?jn.g:null;return i&&(jn.g=jn[c]),((p,m,g,x)=>{x?m.data=m.data.replace(x,p):m.data.indexOf(p)===-1&&(m.data=g?p+m.data:m.data+p)})(jn[c],n,o,d),c},S3=(e,n,i)=>e.reduce((o,a,u)=>{let c=n[u];if(c&&c.call){let d=c(i),p=d&&d.props&&d.props.className||/^go/.test(d)&&d;c=p?"."+p:d&&typeof d=="object"?d.props?"":sr(d,""):d===!1?"":d}return o+a+(c??"")},"");function $l(e){let n=this||{},i=e.call?e(n.p):e;return w3(i.unshift?i.raw?S3(i,[].slice.call(arguments,1),n.p):i.reduce((o,a)=>Object.assign(o,a&&a.call?a(n.p):a),{}):i,y3(n.target),n.g,n.o,n.k)}let d1,Gd,Yd;$l.bind({g:1});let Ln=$l.bind({k:1});function b3(e,n,i,o){sr.p=n,d1=e,Gd=i,Yd=o}function fr(e,n){let i=this||{};return function(){let o=arguments;function a(u,c){let d=Object.assign({},u),p=d.className||a.className;i.p=Object.assign({theme:Gd&&Gd()},d),i.o=/ *go\d+/.test(p),d.className=$l.apply(i,o)+(p?" "+p:"");let m=e;return e[0]&&(m=d.as||e,delete d.as),Yd&&m[0]&&Yd(d),d1(m,d)}return a}}var k3=e=>typeof e=="function",hl=(e,n)=>k3(e)?e(n):e,E3=(()=>{let e=0;return()=>(++e).toString()})(),f1=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){let n=matchMedia("(prefers-reduced-motion: reduce)");e=!n||n.matches}return e}})(),C3=20,p1=(e,n)=>{switch(n.type){case 0:return{...e,toasts:[n.toast,...e.toasts].slice(0,C3)};case 1:return{...e,toasts:e.toasts.map(u=>u.id===n.toast.id?{...u,...n.toast}:u)};case 2:let{toast:i}=n;return p1(e,{type:e.toasts.find(u=>u.id===i.id)?1:0,toast:i});case 3:let{toastId:o}=n;return{...e,toasts:e.toasts.map(u=>u.id===o||o===void 0?{...u,dismissed:!0,visible:!1}:u)};case 4:return n.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(u=>u.id!==n.toastId)};case 5:return{...e,pausedAt:n.time};case 6:let a=n.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(u=>({...u,pauseDuration:u.pauseDuration+a}))}}},tl=[],$r={toasts:[],pausedAt:void 0},zr=e=>{$r=p1($r,e),tl.forEach(n=>{n($r)})},T3={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},P3=(e={})=>{let[n,i]=b.useState($r),o=b.useRef($r);b.useEffect(()=>(o.current!==$r&&i($r),tl.push(i),()=>{let u=tl.indexOf(i);u>-1&&tl.splice(u,1)}),[]);let a=n.toasts.map(u=>{var c,d,p;return{...e,...e[u.type],...u,removeDelay:u.removeDelay||((c=e[u.type])==null?void 0:c.removeDelay)||(e==null?void 0:e.removeDelay),duration:u.duration||((d=e[u.type])==null?void 0:d.duration)||(e==null?void 0:e.duration)||T3[u.type],style:{...e.style,...(p=e[u.type])==null?void 0:p.style,...u.style}}});return{...n,toasts:a}},j3=(e,n="blank",i)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:n,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...i,id:(i==null?void 0:i.id)||E3()}),ps=e=>(n,i)=>{let o=j3(n,e,i);return zr({type:2,toast:o}),o.id},Ue=(e,n)=>ps("blank")(e,n);Ue.error=ps("error");Ue.success=ps("success");Ue.loading=ps("loading");Ue.custom=ps("custom");Ue.dismiss=e=>{zr({type:3,toastId:e})};Ue.remove=e=>zr({type:4,toastId:e});Ue.promise=(e,n,i)=>{let o=Ue.loading(n.loading,{...i,...i==null?void 0:i.loading});return typeof e=="function"&&(e=e()),e.then(a=>{let u=n.success?hl(n.success,a):void 0;return u?Ue.success(u,{id:o,...i,...i==null?void 0:i.success}):Ue.dismiss(o),a}).catch(a=>{let u=n.error?hl(n.error,a):void 0;u?Ue.error(u,{id:o,...i,...i==null?void 0:i.error}):Ue.dismiss(o)}),e};var R3=(e,n)=>{zr({type:1,toast:{id:e,height:n}})},A3=()=>{zr({type:5,time:Date.now()})},Ho=new Map,D3=1e3,I3=(e,n=D3)=>{if(Ho.has(e))return;let i=setTimeout(()=>{Ho.delete(e),zr({type:4,toastId:e})},n);Ho.set(e,i)},L3=e=>{let{toasts:n,pausedAt:i}=P3(e);b.useEffect(()=>{if(i)return;let u=Date.now(),c=n.map(d=>{if(d.duration===1/0)return;let p=(d.duration||0)+d.pauseDuration-(u-d.createdAt);if(p<0){d.visible&&Ue.dismiss(d.id);return}return setTimeout(()=>Ue.dismiss(d.id),p)});return()=>{c.forEach(d=>d&&clearTimeout(d))}},[n,i]);let o=b.useCallback(()=>{i&&zr({type:6,time:Date.now()})},[i]),a=b.useCallback((u,c)=>{let{reverseOrder:d=!1,gutter:p=8,defaultPosition:m}=c||{},g=n.filter(S=>(S.position||m)===(u.position||m)&&S.height),x=g.findIndex(S=>S.id===u.id),w=g.filter((S,k)=>k<x&&S.visible).length;return g.filter(S=>S.visible).slice(...d?[w+1]:[0,w]).reduce((S,k)=>S+(k.height||0)+p,0)},[n]);return b.useEffect(()=>{n.forEach(u=>{if(u.dismissed)I3(u.id,u.removeDelay);else{let c=Ho.get(u.id);c&&(clearTimeout(c),Ho.delete(u.id))}})},[n]),{toasts:n,handlers:{updateHeight:R3,startPause:A3,endPause:o,calculateOffset:a}}},$3=Ln`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,M3=Ln`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,_3=Ln`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,B3=fr("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${$3} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${M3} 0.15s ease-out forwards;
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
    animation: ${_3} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,O3=Ln`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,F3=fr("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${O3} 1s linear infinite;
`,N3=Ln`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,V3=Ln`
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
}`,z3=fr("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${N3} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${V3} 0.2s ease-out forwards;
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
`,U3=fr("div")`
  position: absolute;
`,W3=fr("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,H3=Ln`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,K3=fr("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${H3} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,G3=({toast:e})=>{let{icon:n,type:i,iconTheme:o}=e;return n!==void 0?typeof n=="string"?b.createElement(K3,null,n):n:i==="blank"?null:b.createElement(W3,null,b.createElement(F3,{...o}),i!=="loading"&&b.createElement(U3,null,i==="error"?b.createElement(B3,{...o}):b.createElement(z3,{...o})))},Y3=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,q3=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,X3="0%{opacity:0;} 100%{opacity:1;}",Q3="0%{opacity:1;} 100%{opacity:0;}",J3=fr("div")`
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
`,Z3=fr("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,eR=(e,n)=>{let i=e.includes("top")?1:-1,[o,a]=f1()?[X3,Q3]:[Y3(i),q3(i)];return{animation:n?`${Ln(o)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${Ln(a)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},tR=b.memo(({toast:e,position:n,style:i,children:o})=>{let a=e.height?eR(e.position||n||"top-center",e.visible):{opacity:0},u=b.createElement(G3,{toast:e}),c=b.createElement(Z3,{...e.ariaProps},hl(e.message,e));return b.createElement(J3,{className:e.className,style:{...a,...i,...e.style}},typeof o=="function"?o({icon:u,message:c}):b.createElement(b.Fragment,null,u,c))});b3(b.createElement);var nR=({id:e,className:n,style:i,onHeightUpdate:o,children:a})=>{let u=b.useCallback(c=>{if(c){let d=()=>{let p=c.getBoundingClientRect().height;o(e,p)};d(),new MutationObserver(d).observe(c,{subtree:!0,childList:!0,characterData:!0})}},[e,o]);return b.createElement("div",{ref:u,className:n,style:i},a)},rR=(e,n)=>{let i=e.includes("top"),o=i?{top:0}:{bottom:0},a=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:f1()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${n*(i?1:-1)}px)`,...o,...a}},iR=$l`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,La=16,oR=({reverseOrder:e,position:n="top-center",toastOptions:i,gutter:o,children:a,containerStyle:u,containerClassName:c})=>{let{toasts:d,handlers:p}=L3(i);return b.createElement("div",{id:"_rht_toaster",style:{position:"fixed",zIndex:9999,top:La,left:La,right:La,bottom:La,pointerEvents:"none",...u},className:c,onMouseEnter:p.startPause,onMouseLeave:p.endPause},d.map(m=>{let g=m.position||n,x=p.calculateOffset(m,{reverseOrder:e,gutter:o,defaultPosition:n}),w=rR(g,x);return b.createElement(nR,{id:m.id,key:m.id,onHeightUpdate:p.updateHeight,className:m.visible?iR:"",style:w},m.type==="custom"?hl(m.message,m):a?a(m):b.createElement(tR,{toast:m,position:g}))}))},We=Ue;const sR=R.section`
  padding: 80px 20px;
    position: relative;
  overflow: hidden;
  min-height: 600px;
`,aR=R.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`,lR=R.div`
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
`,uR=R.div`
  padding-right: 2rem;

  @media (max-width: 768px) {
    padding-right: 0;
    order: 2;
  }
`,cR=R.div`
  position: relative;
  
  @media (max-width: 768px) {
    order: 1;
  }
`,dR=R(Y.div)`
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
`,fR=R.h3`
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
`,pR=R.p`
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
`;R(Y.button)`
  display: none;
`;R(Y.div)`
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(124, 58, 237, 0.05), rgba(37, 99, 235, 0.05));
  backdrop-filter: blur(4px);
  z-index: 0;
`;const X0=()=>y.jsxs(sR,{children:[y.jsx(Gf,{}),y.jsx(aR,{children:y.jsxs(lR,{children:[y.jsxs(uR,{children:[y.jsx(fR,{children:"简约设计，优雅交互"}),y.jsx(pR,{children:"轻盈的双语输入按钮，如同两个灵动的肥皂泡，让语言切换变得轻松自如。 简约不简单的设计理念，带来流畅的操作体验。每一次交互都经过精心打磨， 让您的翻译之旅充满愉悦感。"})]}),y.jsx(cR,{children:y.jsx(dR,{initial:{opacity:0,scale:.8,rotateY:-20},whileInView:{opacity:1,scale:1,rotateY:0,transition:{type:"spring",duration:1.2,bounce:.4}},animate:{y:[0,-10,0],rotateY:[-5,5,-5]},transition:{duration:6,repeat:1/0,ease:"easeInOut"},whileHover:{scale:1.05,rotateY:10,transition:{duration:.3}},viewport:{once:!0},children:y.jsx("img",{src:"/WuKonWeb4/assets/appindex.png",alt:"筋斗云主界面"})})})]})})]}),hR=R.footer`
  padding: 20px;
    border-top: 1px solid rgba(124, 58, 237, 0.1);
`,mR=R.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
`;R(cf)`
  color: ${({theme:e})=>e.colors[e.mode].text};
  text-decoration: none;
  opacity: 0.8;
  font-size: 0.9rem;
  transition: opacity 0.3s;

  &:hover {
    opacity: 1;
  }
`;const gR=R.a`
  color: ${({theme:e})=>e.colors[e.mode].text};
  text-decoration: none;
  opacity: 0.8;
  font-size: 0.9rem;
  transition: opacity 0.3s;

  &:hover {
    opacity: 1;
  }
`,Mo=()=>y.jsx(hR,{children:y.jsx(mR,{children:y.jsx(gR,{href:"mailto:cming0185@gmail.com",children:"联系我们"})})}),$a=["泡泡平行宇宙","Bubble Parallel Universe","バブルパラレルユニバース","Univers Parallèle de Bulles","Universo Paralelo de Burbujas","거품 평행 우주","Universo Parallelo di Bolle","Blasen-Paralleluniversum","Параллельная Вселенная Пузырей","Universo Paralelo de Bolhas","泡泡平行宇宙","बुलबुला समानांतर ब्रह्मांड","الكون المتوازي للفقاعات","Παράλληλο Σύμπαν Φυσαλίδων","Kabarcık Paralel Evren","Bubbla Parallellt Universum","Kupla Rinnakkaismaailma","จักรวาลคู่ขนานฟอง","Vũ Trụ Song Song Bong Bóng","Alam Semesta Paralel Gelembung","Parallel na Uniberso ng Bula","Köpük Paralel Kainat","Ulimwengu Sambamba wa Bubble","Univers Paralel de Bule","Bublinový Paralelní Vesmír","Równoległy Wszechświat Bąbelków","Burbuļu Paralēlā Visuma","Mullide Paralleeluniversum","Burbulių Lygiagretusis Visata","Buborék Párhuzamos Univerzum","Паралелна Вселена от Мехурчета","Паралелни Свемир Мехурића","Պղպջակների Զուգահեռ Տիեզերք","ბუშტის პარალელური სამყარო","Boble Parallelt Univers","Alam Selari Gelembung","Vũ Trụ Song Song của Bong Bóng","Parallelle Bellenuniversum","יקום מקביל של בועות","Cruinne Chomhthreomhar na mBolgóidí"],yR=R.section`
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
`,xR=R(Y.div)`
  text-align: center;
  z-index: 1;
  max-width: 1000px;
  padding-top: 1rem;
  
  @media (max-width: 768px) {
    padding-top: 2rem;
  }
`,vR=R(Y.h1)`
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
`,wR=R(Y.p)`
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
`,Q0=R.section`
  padding: 100px 20px;
    position: relative;
  
  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`,nd=R.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`,Ma=R.h2`
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
`,SR=R.div`
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
`,bR=R.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2.5rem;
  margin-top: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`,mi=R(Y.div)`
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
`,gi=R.h3`
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
`,kR=R.section`
  padding: 80px 20px;
    position: relative;
  overflow: hidden;
  
  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`,J0=R.div`
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
`,Z0=R.div`
  padding-right: 2rem;

  @media (max-width: 768px) {
    padding-right: 0;
    order: 2;
  }
`,ey=R.div`
  position: relative;
  
  @media (max-width: 768px) {
    order: 1;
  }
`,ty=R(Y.div)`
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
`,ER=R(Y.a)`
  display: inline-block;
  background: linear-gradient(135deg, #3A7CED, #4CC4F0);
  color: white;
  font-weight: 600;
  text-decoration: none;
  padding: 14px 32px;
  border-radius: 9999px; /* 最大圆角 */
  margin-top: 1rem;
  margin-bottom: 2rem;
  box-shadow: 0 10px 25px rgba(58, 124, 237, 0.3);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 30px rgba(58, 124, 237, 0.4);
    color: white; /* 确保悬停时文字颜色不变 */
  }
  
  &:active {
    transform: translateY(0);
    box-shadow: 0 5px 15px rgba(58, 124, 237, 0.2);
    color: white; /* 确保点击时文字颜色不变 */
  }
  
  @media (max-width: 768px) {
    padding: 12px 28px;
    font-size: 0.95rem;
  }
`,CR=R.span`
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
`,TR=()=>{const[e,n]=b.useState(""),[i,o]=b.useState(!1),[a,u]=b.useState(0),c=b.useRef(100),d=b.useRef(50),p=b.useRef(1500);b.useEffect(()=>{n(""),o(!1),u(0);const g=setTimeout(()=>{n($a[0].slice(0,1))},500);return()=>clearTimeout(g)},[]),b.useEffect(()=>{let g;if(i)e===""?(o(!1),u(x=>(x+1)%$a.length),g=setTimeout(()=>{},500)):g=setTimeout(()=>{n(e.slice(0,-1))},d.current);else{const x=$a[a];e===x?g=setTimeout(()=>{o(!0)},p.current):g=setTimeout(()=>{n(x.slice(0,e.length+1))},c.current)}return()=>clearTimeout(g)},[e,i,a,$a]);const m={hidden:{y:20,opacity:0},visible:{y:0,opacity:1,transition:{type:"spring",stiffness:300,damping:20}}};return y.jsxs(y.Fragment,{children:[y.jsx(yR,{children:y.jsxs(xR,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8},children:[y.jsxs(vR,{children:[e,y.jsx(CR,{})]}),y.jsx(wR,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.6},children:"克隆您喜爱的音色，让AI用熟悉的声音与您聊天，打造专属于您的交流体验"}),y.jsx(ER,{href:"https://apps.apple.com/cn/app/%E6%B3%A1%E6%B3%A1%E5%B9%B3%E8%A1%8C%E5%AE%87%E5%AE%99/id6744369213",target:"_blank",rel:"noopener noreferrer",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.8},whileHover:{scale:1.05},whileTap:{scale:.98},children:"iOS 下载"})]})}),y.jsx(Q0,{children:y.jsxs(nd,{children:[y.jsx(Ma,{children:"平行宇宙是什么？"}),y.jsx(SR,{children:"泡泡平行宇宙是一款创新的AI音色克隆工具，它能够精准克隆指定的人声音色，并让AI使用该音色与您进行自然流畅的对话。 无论是模仿您喜爱的名人声音，还是复制家人朋友的音色，平行宇宙都能为您创造独特的交流体验。 通过先进的语音克隆技术，它能够捕捉音色的细微特点，让AI对话更加真实自然，仿佛与真人交流一般。"})]})}),y.jsx(kR,{children:y.jsxs(nd,{children:[y.jsxs(J0,{children:[y.jsxs(Z0,{children:[y.jsx(Ma,{style:{textAlign:"left"},children:"音色克隆"}),y.jsx(Zn,{style:{fontSize:"1.2rem",marginBottom:"2rem"},children:"只需提供几分钟的语音样本，泡泡平行宇宙就能精确克隆出目标音色。 无论是低沉磁性的男声，还是清脆悦耳的女声，系统都能准确捕捉音色特点， 并应用到AI对话中，让交流更加生动有趣。"})]}),y.jsx(ey,{children:y.jsx(ty,{initial:{opacity:0,scale:.8},whileInView:{opacity:1,scale:1,transition:{type:"spring",duration:1,bounce:.4}},animate:{y:[0,-10,0],rotateZ:[-1,1,-1]},transition:{duration:6,repeat:1/0,ease:"easeInOut"},viewport:{once:!0},children:y.jsx("img",{src:"/WuKonWeb4/assets/pingxingyuzhou.png",alt:"平行宇宙音色克隆"})})})]}),y.jsxs(J0,{children:[y.jsx(ey,{children:y.jsx(ty,{initial:{opacity:0,scale:.8},whileInView:{opacity:1,scale:1,transition:{type:"spring",duration:1,bounce:.4}},animate:{y:[0,-10,0],rotateZ:[1,-1,1]},transition:{duration:6,repeat:1/0,ease:"easeInOut"},viewport:{once:!0},children:y.jsx("img",{src:"/WuKonWeb4/assets/appindex.png",alt:"平行宇宙应用界面"})})}),y.jsxs(Z0,{children:[y.jsx(Ma,{style:{textAlign:"left"},children:"智能聊天"}),y.jsx(Zn,{style:{fontSize:"1.2rem",marginBottom:"2rem"},children:"泡泡平行宇宙不仅仅是音色克隆工具，更是强大的AI聊天助手。它能够理解复杂的对话， 跟随上下文，提供有趣而有见地的回应。无论是日常闲聊、情感支持，还是知识探讨， 都能用您喜爱的声音与您进行自然流畅的互动。"})]})]})]})}),y.jsx(Q0,{children:y.jsxs(nd,{children:[y.jsx(Ma,{children:"主要特点"}),y.jsxs(bR,{children:[y.jsxs(mi,{as:Y.div,variants:m,whileHover:{scale:1.03},children:[y.jsx(gi,{children:"精准音色克隆"}),y.jsx(Zn,{children:"通过先进的深度学习算法，只需少量样本即可精确复制目标音色，包括音调、音色、语速和情感特点等细微特征。"})]}),y.jsxs(mi,{as:Y.div,variants:m,whileHover:{scale:1.03},children:[y.jsx(gi,{children:"自然对话体验"}),y.jsx(Zn,{children:"结合强大的AI语言模型，提供流畅自然的对话交流，能够理解上下文，记忆对话历史，模拟真实人类交流。"})]}),y.jsxs(mi,{as:Y.div,variants:m,whileHover:{scale:1.03},children:[y.jsx(gi,{children:"情感表达"}),y.jsx(Zn,{children:"AI能够在对话中表达各种情感，如欢乐、同情、惊讶等，通过语调和语速变化，让交流更加生动有感染力。"})]}),y.jsxs(mi,{as:Y.div,variants:m,whileHover:{scale:1.03},children:[y.jsx(gi,{children:"多场景应用"}),y.jsx(Zn,{children:"适用于多种场景，包括虚拟伴侣、语音助手、有声读物朗读、角色扮演等，为用户创造独特的交互体验。"})]}),y.jsxs(mi,{as:Y.div,variants:m,whileHover:{scale:1.03},children:[y.jsx(gi,{children:"音色管理"}),y.jsx(Zn,{children:"支持创建和管理多个音色模型，随时切换不同的声音，为不同场景和需求选择适合的音色。"})]}),y.jsxs(mi,{as:Y.div,variants:m,whileHover:{scale:1.03},children:[y.jsx(gi,{children:"隐私保护"}),y.jsx(Zn,{children:"严格的隐私保护措施，确保用户提供的语音样本和对话内容安全保密，未经授权不会用于其他用途。"})]})]})]})})]})},_a=["泡泡同传译梦","Bubble Interpreter Dream","バブル通訳の夢","Rêve d'Interprétation de Bulles","Sueño de Interpretación de Burbujas","버블 통역 꿈","Sogno di Interpretazione delle Bolle","Blasen-Dolmetschertraum","Мечта Пузырькового Переводчика","Sonho de Interpretação de Bolhas","泡泡同傳譯夢","बबल इंटरप्रेटर ड्रीम","حلم مترجم الفقاعة","Όνειρο Διερμηνέα Φυσαλίδων","Kabarcık Tercüman Rüyası","Bubbla Tolkdröm","Kupla Tulkin Unelma","ความฝันล่ามฟอง","Giấc Mơ Thông Dịch Bong Bóng","Mimpi Penerjemah Gelembung","Pangarap ng Tagasalin ng Bula","Köpük Tərcüməçi Yuxu","Ndoto ya Mkalimani wa Bubble","Visul Interpretului de Bule","Sen Bublinového Tlumočníka","Marzenie Tłumacza Bąbelkowego","Burbuļu Tulka Sapnis","Mullivahu Tõlgi Unistus","Burbulų Vertėjo Svajonė","Buborék Tolmács Álom","Мечта на Преводача на Мехурчета","Сан Преводиоца Мехурића","Պղպջակի Թարգմանչի Երազանք","ბუშტის მთარგმნელის ოცნება","Boble Tolk Drøm","Impian Jurubahasa Gelembung","Ước Mơ Thông Dịch Bong Bóng","Droom van de Bellenvertaler","חלום מתורגמן הבועות","Aisling an Ateangaire Bolgán"],PR=R.section`
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
`,jR=R(Y.div)`
  text-align: center;
  z-index: 1;
  max-width: 1000px;
  padding-top: 1rem;
  
  @media (max-width: 768px) {
    padding-top: 2rem;
  }
`,RR=R(Y.h1)`
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
`,AR=R(Y.p)`
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
`,ny=R.section`
  padding: 100px 20px;
  position: relative;
  
  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`,rd=R.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`,Ba=R.h2`
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
`,DR=R.div`
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
`,IR=R.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2.5rem;
  margin-top: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`,yi=R(Y.div)`
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
`,xi=R.h3`
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
`,LR=R.section`
  padding: 80px 20px;
  position: relative;
  overflow: hidden;
  
  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`,ry=R.div`
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
`,iy=R.div`
  padding-right: 2rem;

  @media (max-width: 768px) {
    padding-right: 0;
    order: 2;
  }
`,oy=R.div`
  position: relative;
  
  @media (max-width: 768px) {
    order: 1;
  }
`,sy=R(Y.div)`
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
`,$R=R(Y.a)`
  display: inline-block;
  background: linear-gradient(135deg, #EC4899, #F472B6);
  color: white;
  font-weight: 600;
  text-decoration: none;
  padding: 14px 32px;
  border-radius: 9999px; /* 最大圆角 */
  margin-top: 1rem;
  margin-bottom: 2rem;
  box-shadow: 0 10px 25px rgba(236, 72, 153, 0.3);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 30px rgba(236, 72, 153, 0.4);
    color: white; /* 确保悬停时文字颜色不变 */
  }
  
  &:active {
    transform: translateY(0);
    box-shadow: 0 5px 15px rgba(236, 72, 153, 0.2);
    color: white; /* 确保点击时文字颜色不变 */
  }
  
  @media (max-width: 768px) {
    padding: 12px 28px;
    font-size: 0.95rem;
  }
`,MR=R.span`
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
`,_R=()=>{const[e,n]=b.useState(""),[i,o]=b.useState(!1),[a,u]=b.useState(0),c=b.useRef(100),d=b.useRef(50),p=b.useRef(1500);b.useEffect(()=>{n(""),o(!1),u(0);const g=setTimeout(()=>{n(_a[0].slice(0,1))},500);return()=>clearTimeout(g)},[]),b.useEffect(()=>{let g;if(i)e===""?(o(!1),u(x=>(x+1)%_a.length),g=setTimeout(()=>{},500)):g=setTimeout(()=>{n(e.slice(0,-1))},d.current);else{const x=_a[a];e===x?g=setTimeout(()=>{o(!0)},p.current):g=setTimeout(()=>{n(x.slice(0,e.length+1))},c.current)}return()=>clearTimeout(g)},[e,i,a,_a]);const m={hidden:{y:20,opacity:0},visible:{y:0,opacity:1,transition:{type:"spring",stiffness:300,damping:20}}};return y.jsxs(y.Fragment,{children:[y.jsx(PR,{children:y.jsxs(jR,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8},children:[y.jsxs(RR,{children:[e,y.jsx(MR,{})]}),y.jsx(AR,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.6},children:"实时翻译，支持40国语言，让沟通无国界，让跨语言交流如同母语般自然流畅"}),y.jsx($R,{href:"https://apps.apple.com/cn/app/%E6%B3%A1%E6%B3%A1%E5%90%8C%E4%BC%A0%E8%AF%91%E6%A2%A6/id6745012691",target:"_blank",rel:"noopener noreferrer",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.8},whileHover:{scale:1.05},whileTap:{scale:.98},children:"iOS 下载"})]})}),y.jsx(ny,{children:y.jsxs(rd,{children:[y.jsx(Ba,{children:"同传译梦是什么？"}),y.jsx(DR,{children:"泡泡同传译梦是一款专注于实时同声传译的应用，支持40个国家的语言，能够在各种场景下提供即时翻译服务。 它特别适合会议同传、实时对话、演讲翻译等需要即时性的场合，让不同语言背景的人们能够无障碍地交流， 就像使用同一种语言一样自然流畅，彻底消除语言壁垒。"})]})}),y.jsx(LR,{children:y.jsxs(rd,{children:[y.jsxs(ry,{children:[y.jsxs(iy,{children:[y.jsx(Ba,{style:{textAlign:"left"},children:"实时翻译"}),y.jsx(er,{style:{fontSize:"1.2rem",marginBottom:"2rem"},children:"同传译梦最大的特点是实时性，能够在您说话的同时进行翻译，延迟几乎可以忽略不计。 这使它成为国际会议、商务谈判、学术交流等场合的理想工具，让演讲者的话语几乎同步地 传递给使用不同语言的听众，保持交流的连贯性和流畅度。"})]}),y.jsx(oy,{children:y.jsx(sy,{initial:{opacity:0,scale:.8},whileInView:{opacity:1,scale:1,transition:{type:"spring",duration:1,bounce:.4}},animate:{y:[0,-10,0],rotateZ:[-1,1,-1]},transition:{duration:6,repeat:1/0,ease:"easeInOut"},viewport:{once:!0},children:y.jsx("img",{src:"/WuKonWeb4/assets/tongchuanyimeng.png",alt:"同传译梦实时翻译"})})})]}),y.jsxs(ry,{children:[y.jsx(oy,{children:y.jsx(sy,{initial:{opacity:0,scale:.8},whileInView:{opacity:1,scale:1,transition:{type:"spring",duration:1,bounce:.4}},animate:{y:[0,-10,0],rotateZ:[1,-1,1]},transition:{duration:6,repeat:1/0,ease:"easeInOut"},viewport:{once:!0},children:y.jsx("img",{src:"/WuKonWeb4/assets/appindex.png",alt:"同传译梦多语种支持"})})}),y.jsxs(iy,{children:[y.jsx(Ba,{style:{textAlign:"left"},children:"多语种支持"}),y.jsx(er,{style:{fontSize:"1.2rem",marginBottom:"2rem"},children:"同传译梦支持40个国家的语言，覆盖全球主要语言和地区性语言。 无论是英语、法语、德语、西班牙语、中文、日语、韩语，还是阿拉伯语、俄语等， 同传译梦都能提供准确流畅的翻译，让全球沟通变得轻松自如。"})]})]})]})}),y.jsx(ny,{children:y.jsxs(rd,{children:[y.jsx(Ba,{children:"主要功能"}),y.jsxs(IR,{children:[y.jsxs(yi,{as:Y.div,variants:m,whileHover:{scale:1.03},children:[y.jsx(xi,{children:"会议同传"}),y.jsx(er,{children:"为多语言会议提供实时翻译服务，支持多人同时参与，每个参与者都能听到自己语言的翻译内容，让国际会议沟通无障碍。"})]}),y.jsxs(yi,{as:Y.div,variants:m,whileHover:{scale:1.03},children:[y.jsx(xi,{children:"语音翻译"}),y.jsx(er,{children:"实时捕捉语音内容并转换为目标语言，保留原始语调和情感特征，使交流更加自然流畅，适用于面对面交谈和远程通话。"})]}),y.jsxs(yi,{as:Y.div,variants:m,whileHover:{scale:1.03},children:[y.jsx(xi,{children:"演讲翻译"}),y.jsx(er,{children:"为演讲、讲座、培训等场合提供实时字幕和语音翻译，帮助听众即时理解内容，提升国际活动的参与体验。"})]}),y.jsxs(yi,{as:Y.div,variants:m,whileHover:{scale:1.03},children:[y.jsx(xi,{children:"旅行助手"}),y.jsx(er,{children:"支持离线模式，无需网络也能在国外旅行时进行基本沟通。内置常用旅行短语和场景对话，帮助快速应对各种旅行情况。"})]}),y.jsxs(yi,{as:Y.div,variants:m,whileHover:{scale:1.03},children:[y.jsx(xi,{children:"多端同步"}),y.jsx(er,{children:"支持在手机、平板、电脑等多种设备上同步使用，随时随地满足翻译需求，适应不同场景下的使用习惯。"})]}),y.jsxs(yi,{as:Y.div,variants:m,whileHover:{scale:1.03},children:[y.jsx(xi,{children:"专业术语"}),y.jsx(er,{children:"内置医疗、法律、技术、金融等多个专业领域的术语库，确保在专业场合下翻译的准确性和专业性，满足不同行业的需求。"})]})]})]})})]})},Oa=["泡泡筋斗云","Bubble Cloud","バブルクラウド","Nuage de Bulles","Nube de Burbujas","버블 클라우드","Nuvola di Bolle","Blasenwolke","Облако Пузырей","Nuvem de Bolhas","泡泡筋斗云","बुलबुला बादल","سحابة الفقاعات","Σύννεφο Φυσαλίδων","Kabarcık Bulutu","Bubbla Moln","Kupla Pilvi","เมฆฟอง","Mây Bong Bóng","Awan Gelembung","Ulap ng Bula","Köpük Buludu","Wingu la Bubble","Nor de Bule","Bublinový Mrak","Chmura Bąbelków","Burbuļu Mākonis","Mullipilv","Burbulių Debesis","Buborék Felhő","Мехурен Облак","Мехур Облак","Պղպջակային Ամպ","ბუშტის ღრუბელი","Boble Sky","Awan Gelembung","Mây Bong Bóng","Bellenwolk","ענן בועות","Scamall Bolgóideach"],BR=R.section`
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
`,OR=R(Y.div)`
  text-align: center;
  z-index: 1;
  max-width: 1000px;
  padding-top: 1rem;
  
  @media (max-width: 768px) {
    padding-top: 2rem;
  }
`,FR=R(Y.h1)`
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
`,NR=R(Y.p)`
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
`,ay=R.section`
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
`,Fa=R.h2`
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
`,VR=R.div`
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
`,zR=R.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2.5rem;
  margin-top: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`,vi=R(Y.div)`
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
`,wi=R.h3`
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
`,UR=R.section`
  padding: 80px 20px;
  position: relative;
  overflow: hidden;
  
  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`,ly=R.div`
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
`,uy=R.div`
  padding-right: 2rem;

  @media (max-width: 768px) {
    padding-right: 0;
    order: 2;
  }
`,cy=R.div`
  position: relative;
  
  @media (max-width: 768px) {
    order: 1;
  }
`,dy=R(Y.div)`
  position: relative;
  perspective: 1000px;
  
  img {
    width: 100%;
    max-width: 500px;
    height: auto;
    border-radius: 24px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  }
`,WR=R.span`
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
`,HR=R(Y.a)`
  display: inline-block;
  background: linear-gradient(135deg, #2563EB, #3b82f6);
  color: white;
  font-weight: 600;
  text-decoration: none;
  padding: 14px 32px;
  border-radius: 9999px; /* 最大圆角 */
  margin-top: 1rem;
  margin-bottom: 2rem;
  box-shadow: 0 10px 25px rgba(37, 99, 235, 0.3);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 30px rgba(37, 99, 235, 0.4);
    color: white; /* 确保悬停时文字颜色不变 */
  }
  
  &:active {
    transform: translateY(0);
    box-shadow: 0 5px 15px rgba(37, 99, 235, 0.2);
    color: white; /* 确保点击时文字颜色不变 */
  }
  
  @media (max-width: 768px) {
    padding: 12px 28px;
    font-size: 0.95rem;
  }
`,KR=()=>{const[e,n]=b.useState(""),[i,o]=b.useState(!1),[a,u]=b.useState(0),c=b.useRef(100),d=b.useRef(50),p=b.useRef(1500);b.useEffect(()=>{n(""),o(!1),u(0);const g=setTimeout(()=>{n(Oa[0].slice(0,1))},500);return()=>clearTimeout(g)},[]),b.useEffect(()=>{let g;if(i)e===""?(o(!1),u(x=>(x+1)%Oa.length),g=setTimeout(()=>{},500)):g=setTimeout(()=>{n(e.slice(0,-1))},d.current);else{const x=Oa[a];e===x?g=setTimeout(()=>{o(!0)},p.current):g=setTimeout(()=>{n(x.slice(0,e.length+1))},c.current)}return()=>clearTimeout(g)},[e,i,a,Oa]);const m={hidden:{y:20,opacity:0},visible:{y:0,opacity:1,transition:{type:"spring",stiffness:300,damping:20}}};return y.jsxs(y.Fragment,{children:[y.jsx(BR,{children:y.jsxs(OR,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8},children:[y.jsxs(FR,{children:[e,y.jsx(WR,{})]}),y.jsx(NR,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.6},children:"让AI成为您的私人翻译官，实时翻译、多语言互译，打破语言障碍"}),y.jsx(HR,{href:"https://apps.apple.com/cn/app/%E6%B3%A1%E6%B3%A1%E7%AD%8B%E6%96%97%E4%BA%91/id6743198774",target:"_blank",rel:"noopener noreferrer",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.8},whileHover:{scale:1.05},whileTap:{scale:.98},children:"iOS 下载"})]})}),y.jsx(ay,{children:y.jsxs(id,{children:[y.jsx(Fa,{children:"筋斗云是什么？"}),y.jsx(VR,{children:"泡泡筋斗云是一款高效的多语言翻译工具，覆盖全球40个国家的主要语言，翻译速度极快且准确度高。 无论是日常对话、商务交流、学术研究还是旅行需求，筋斗云都能提供准确、流畅的翻译服务， 帮助用户轻松跨越语言障碍，与世界各地的人们无障碍沟通。"})]})}),y.jsx(UR,{children:y.jsxs(id,{children:[y.jsxs(ly,{children:[y.jsxs(uy,{children:[y.jsx(Fa,{style:{textAlign:"left"},children:"超快翻译速度"}),y.jsx(tr,{style:{fontSize:"1.2rem",marginBottom:"2rem"},children:"筋斗云采用先进的神经网络翻译技术，翻译速度比传统翻译工具快数倍。无论是短句还是长篇文档， 都能在极短时间内完成高质量翻译，让您在国际交流中不再有等待的困扰，实现即时无缝的跨语言沟通。"})]}),y.jsx(cy,{children:y.jsx(dy,{initial:{opacity:0,scale:.8},whileInView:{opacity:1,scale:1,transition:{type:"spring",duration:1,bounce:.4}},animate:{y:[0,-10,0],rotateZ:[-1,1,-1]},transition:{duration:6,repeat:1/0,ease:"easeInOut"},viewport:{once:!0},children:y.jsx("img",{src:"/WuKonWeb4/assets/appindex.png",alt:"筋斗云翻译界面"})})})]}),y.jsxs(ly,{children:[y.jsx(cy,{children:y.jsx(dy,{initial:{opacity:0,scale:.8},whileInView:{opacity:1,scale:1,transition:{type:"spring",duration:1,bounce:.4}},animate:{y:[0,-10,0],rotateZ:[1,-1,1]},transition:{duration:6,repeat:1/0,ease:"easeInOut"},viewport:{once:!0},children:y.jsx("img",{src:"/WuKonWeb4/assets/jindouyun.png",alt:"筋斗云多语言支持"})})}),y.jsxs(uy,{children:[y.jsx(Fa,{style:{textAlign:"left"},children:"40国语言支持"}),y.jsx(tr,{style:{fontSize:"1.2rem",marginBottom:"2rem"},children:"筋斗云支持全球40个国家的主要语言，包括英语、法语、德语、西班牙语、俄语、 日语、韩语、阿拉伯语等。无论您身处何地，面对何种语言环境，筋斗云都能为您 提供精准的翻译服务，让全球沟通变得简单自然。"})]})]})]})}),y.jsx(ay,{children:y.jsxs(id,{children:[y.jsx(Fa,{children:"主要功能"}),y.jsxs(zR,{children:[y.jsxs(vi,{as:Y.div,variants:m,whileHover:{scale:1.03},children:[y.jsx(wi,{children:"文本翻译"}),y.jsx(tr,{children:"支持多种语言之间的文本翻译，保留原文格式和语义，提供准确流畅的翻译结果。适用于各类文档、邮件、聊天消息等文本内容。"})]}),y.jsxs(vi,{as:Y.div,variants:m,whileHover:{scale:1.03},children:[y.jsx(wi,{children:"语音翻译"}),y.jsx(tr,{children:"将语音实时转换为其他语言，支持多种口音和方言识别，准确捕捉语音内容并快速翻译，适合面对面交流和电话会议。"})]}),y.jsxs(vi,{as:Y.div,variants:m,whileHover:{scale:1.03},children:[y.jsx(wi,{children:"图像翻译"}),y.jsx(tr,{children:"识别图片中的文字并进行翻译，支持多种图片格式，适用于菜单、路标、说明书等场景，让旅行和日常生活更便捷。"})]}),y.jsxs(vi,{as:Y.div,variants:m,whileHover:{scale:1.03},children:[y.jsx(wi,{children:"文档翻译"}),y.jsx(tr,{children:"批量处理各类文档，包括Word、PDF、PowerPoint等格式，保留原始排版和格式，适合商务和学术交流场景。"})]}),y.jsxs(vi,{as:Y.div,variants:m,whileHover:{scale:1.03},children:[y.jsx(wi,{children:"离线翻译"}),y.jsx(tr,{children:"支持下载语言包进行离线翻译，无需网络也能使用核心功能，适合国际旅行和网络受限的环境，随时随地满足翻译需求。"})]}),y.jsxs(vi,{as:Y.div,variants:m,whileHover:{scale:1.03},children:[y.jsx(wi,{children:"专业词汇"}),y.jsx(tr,{children:"内置多个领域的专业词汇库，包括医学、法律、工程、金融等，确保专业术语的准确翻译，满足不同行业的专业需求。"})]})]})]})})]})},GR=R(Y.div)`
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
`,YR=R(Y.div)`
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
`,qR=R(Y.div)`
  cursor: pointer;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`,h1=R(Y.div)`
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
`,XR=R(Y.span)`
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

  ${h1}:hover & {
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
`,fy={initial:{y:0},animate:{y:[-3,3,-3],transition:{duration:3,repeat:1/0,ease:"easeInOut"}}},QR=()=>{const e=Ht(),n=Oi(),[i,o]=b.useState(0),[a,u]=b.useState(!1),[c,d]=b.useState(0),p=[{icon:"/WuKonWeb4/assets/logo.png",label:"首页",path:"/"},{icon:"/WuKonWeb4/assets/jindouyun.png",label:"泡泡筋斗云",path:"/jindouyun"},{icon:"/WuKonWeb4/assets/pingxingyuzhou.png",label:"泡泡平行宇宙",path:"/parallel-universe"},{icon:"/WuKonWeb4/assets/tongchuanyimeng.png",label:"泡泡同传译梦",path:"/interpreter"}],m=S=>S==="/"&&e.pathname==="/"?!0:e.pathname===S;b.useEffect(()=>{const S=p.findIndex(k=>m(k.path));o(S>=0?S:0)},[e.pathname]);const g=()=>{const S=p.length,k=(i-1+S)%S,T=(i+1)%S;return[{...p[k],position:"left"},{...p[i],position:"center"},{...p[T],position:"right"}]},x=(S,k)=>T=>{T.preventDefault(),!(k==="center"||a)&&(u(!0),d(k==="left"?-1:1),n(S),setTimeout(()=>{u(!1)},600))},w=g();return y.jsx(GR,{className:"navigation-menu-container",children:y.jsx(Vr,{custom:c,children:w.map(S=>y.jsx(YR,{className:"nav-item",$position:S.position,children:y.jsx(qR,{onClick:x(S.path,S.position),children:y.jsx(h1,{$position:S.position,children:y.jsxs(Y.div,{initial:fy.initial,animate:fy.animate,children:[y.jsx("img",{src:S.icon,alt:S.label}),y.jsx(XR,{$position:S.position,children:S.label})]})})})},S.path))})})},JR={login:async(e,n)=>await lt.loginWithPassword(e,n),loginWithPhone:async(e,n)=>await lt.loginWithPhoneCode(e,n),sendVerificationCode:async e=>await lt.sendVerificationCode(e),logout:async()=>await lt.logout(),getUserInfo:async()=>await lt.getUserInfo(),isLoggedIn:async()=>await lt.checkLoginStatus()},ZR=R.section`
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
`,eA=R.h1`
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
`,tA=R.span`
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
`,nA=R(Y.a)`
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
`,rA=R(Y.form)`
  width: 100%;
  max-width: 350px;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`,od=R(Y.div)`
  position: relative;
`,sd=R.div`
  position: relative;
  display: flex;
  width: 100%;
`,ad=R.input`
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
`,iA=R(Y.button)`
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
`,py=R(Y.button)`
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
`,oA=R.div`
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
`,hy={hidden:{opacity:0,y:20,height:0},visible:{opacity:1,y:0,height:"auto",transition:{duration:.3,ease:"easeOut"}},exit:{opacity:0,y:-20,height:0,transition:{duration:.2}}},sA=()=>{const[e,n]=b.useState(""),[i,o]=b.useState(""),[a,u]=b.useState(""),[c,d]=b.useState(!1),[p,m]=b.useState(null),[g,x]=b.useState(0),[w,S]=b.useState(!1),[k,T]=b.useState(""),[E,P]=b.useState(!1),[L,A]=b.useState(0),F=b.useRef(100),O=b.useRef(50),V=b.useRef(1500),W=Oi(),H=["你好，泡友~","Hello, Bubble Friend~","こんにちは、バブル友達~","Bonjour, Ami Bulle~","Hola, Amigo Burbuja~","안녕, 버블 친구~","Ciao, Amico Bolla~","Hallo, Blasenfreund~","Привет, Пузырьковый друг~","Olá, Amigo Bolha~","你好，泡友~","नमस्ते, बबल मित्र~","مرحبا، صديق الفقاعة~","Γεια σου, φίλε φυσαλίδα~","Merhaba, Kabarcık Arkadaşım~","Hej, Bubbla Vän~","Hei, Kupla Ystävä~","สวัสดี เพื่อนฟอง~","Xin chào, Bạn Bong Bóng~","Halo, Teman Gelembung~","Kumusta, Kaibigan ng Bula~","Salam, Dost Həbab~","Habari, Rafiki wa Bubble~","Salut, Prieten Bulă~","Ahoj, Bublinový Příteli~","Cześć, Przyjacielu Bańki~","Sveiki, Burbuļa Draugs~","Tere, Mulli Sõber~","Sveiki, Burbulo Drauge~","Helló, Buborék Barát~","Здравейте, Мехур Приятел~","Здраво, Меур Пријатељ~","Բարեւ, Պղպջակ Ընկեր~","გამარჯობა, ბუშტი მეგობარი~","Hej, Boble Ven~","Hai, Teman Gelembung~","Chào, Bạn Bong Bóng~","Hallo, Borrelvriend~","שלום, חבר בועה~","Dia dhuit, Cara Bolgóideach~"];b.useEffect(()=>{T(""),P(!1),A(0);const se=setTimeout(()=>{T(H[0].slice(0,1))},500);return()=>clearTimeout(se)},[]),b.useEffect(()=>{let se;if(E)k===""?(P(!1),A(Te=>(Te+1)%H.length),se=setTimeout(()=>{},500)):se=setTimeout(()=>{T(k.slice(0,-1))},O.current);else{const Te=H[L];k===Te?se=setTimeout(()=>{P(!0)},V.current):se=setTimeout(()=>{T(Te.slice(0,k.length+1))},F.current)}return()=>clearTimeout(se)},[k,E,L,H]),b.useEffect(()=>{if(!e){d(!1),m(null),S(!1);return}o(""),u("");const se=/^1[3-9]\d{9}$/.test(e),Te=/^[a-zA-Z_]/.test(e);se?(m("phone"),d(!0),S(!0)):Te?(m("username"),d(!0),S(!1)):(/^1[3-9]/.test(e)?(m("phone"),d(!1)):(m(null),d(!1)),S(!1))},[e]),b.useEffect(()=>{if(g<=0)return;const se=setTimeout(()=>{x(g-1)},1e3);return()=>clearTimeout(se)},[g]);const Q=async()=>{if(!e||!w){Ue.error("请输入有效的手机号");return}try{await JR.sendVerificationCode(e),x(60),Ue.success("验证码已发送")}catch(se){Ue.error(se.message||"发送验证码失败")}},ae=async se=>{se.preventDefault();try{if(p==="username")await et.login(e,i),Ue.success("登录成功");else if(p==="phone")await et.loginWithPhone(e,a),Ue.success("登录成功");else return;W("/")}catch(Te){Ue.error(Te.message||"登录失败")}};return y.jsxs(ZR,{children:[y.jsx(nA,{href:"/WuKonWeb4",whileHover:{x:-5},transition:{duration:.2},children:y.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:y.jsx("path",{d:"M9.5 12.5L4.5 8L9.5 3.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}),y.jsx(eA,{children:y.jsx(tA,{children:k})}),y.jsxs(rA,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},onSubmit:ae,children:[y.jsx(od,{children:y.jsxs(sd,{children:[y.jsx(ad,{type:"text",id:"identifier",value:e,onChange:se=>n(se.target.value),required:!0,placeholder:"请输入用户名或手机号",className:p==="phone"&&w?"with-button":""}),p==="phone"&&w&&y.jsx(iA,{type:"button",onClick:Q,disabled:g>0,whileHover:{scale:1.02},whileTap:{scale:.98},children:g>0?`${g}秒后重发`:"获取验证码"})]})}),y.jsxs(Vr,{children:[c&&p==="username"&&y.jsx(od,{variants:hy,initial:"hidden",animate:"visible",exit:"exit",children:y.jsxs(sd,{children:[y.jsx(ad,{type:"password",id:"password",value:i,onChange:se=>o(se.target.value),required:!0,placeholder:"请输入密码",style:{paddingRight:"50px"}}),y.jsx(py,{type:"submit",whileHover:{scale:1.1},whileTap:{scale:.9},children:y.jsx("img",{src:"/WuKonWeb4/assets/loginbutton.png",alt:"登录"})})]})},"password"),c&&p==="phone"&&y.jsx(od,{variants:hy,initial:"hidden",animate:"visible",exit:"exit",children:y.jsxs(sd,{children:[y.jsx(ad,{type:"text",id:"verificationCode",value:a,onChange:se=>u(se.target.value),required:!0,placeholder:"请输入验证码",maxLength:6,style:{paddingRight:"50px"}}),y.jsx(py,{type:"submit",whileHover:{scale:1.1},whileTap:{scale:.9},children:y.jsx("img",{src:"/WuKonWeb4/assets/loginbutton.png",alt:"登录"})})]})},"verificationCode")]})]}),y.jsx(oA,{children:y.jsx("a",{href:"/WuKonWeb4/register",children:"没有Bubble ID？"})})]})},Ml=()=>{const[e,n]=b.useState(()=>{const a=localStorage.getItem("theme");return a==="dark"||a==="light"?a:window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"});b.useEffect(()=>{const a=c=>{localStorage.getItem("theme")||n(c.matches?"dark":"light")},u=window.matchMedia("(prefers-color-scheme: dark)");return u.addEventListener("change",a),()=>u.removeEventListener("change",a)},[]),b.useEffect(()=>{localStorage.setItem("theme",e),document.documentElement.setAttribute("data-theme",e),document.body.className=e,document.documentElement.style.setProperty("--background",e==="dark"?"#000000":"#FFFFFF"),document.documentElement.style.setProperty("--text",e==="dark"?"#FFFFFF":"#1A1A1A")},[e]);const i=()=>{n(a=>{const u=a==="dark"?"light":"dark";return console.log("切换主题:",u),u})};return{theme:e,toggleTheme:i,toggleThemeWithRefresh:()=>{i(),setTimeout(()=>{window.location.reload()},100)}}},aA=R(Y.div)`
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
`,lA=R(Y.div)`
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
`,uA=R(Y.button)`
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
`,cA=R.div`
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
`;const dA=R.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex-grow: 1;
`,fA=R.div`
  margin-top: auto;
  padding-top: 20px;
  border-top: 1px solid ${e=>e.theme.colors[e.theme.mode].cardBorder};
`,Na=R.div`
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
`,pA=R.div`
  flex: 1;
  padding: 40px;
  overflow-y: auto;
  background: ${e=>e.theme.mode==="dark"?"linear-gradient(135deg, rgba(15, 15, 15, 0.7) 0%, rgba(10, 10, 10, 0.7) 100%)":"linear-gradient(135deg, rgba(250, 250, 250, 0.7) 0%, rgba(240, 240, 240, 0.7) 100%)"};
  box-shadow: inset 5px 0 15px -5px ${e=>e.theme.mode==="dark"?"rgba(0, 0, 0, 0.3)":"rgba(0, 0, 0, 0.1)"};
`,Yf=R.div`
  max-width: 800px;
  margin: 0 auto;
  background: ${e=>e.theme.mode==="dark"?"rgba(25, 25, 25, 0.5)":"rgba(255, 255, 255, 0.5)"};
  border-radius: 24px;
  padding: 20px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  border: 1px solid ${e=>e.theme.mode==="dark"?"rgba(255, 255, 255, 0.05)":"rgba(0, 0, 0, 0.05)"};
`,jr=R.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
  border-bottom: 1px solid ${e=>e.theme.colors[e.theme.mode].cardBorder};
  
  &:last-child {
    border-bottom: none;
  }
`,Rr=R.span`
  color: ${e=>e.theme.colors[e.theme.mode].gray};
  font-size: 16px;
`,Si=R.span`
  color: ${e=>e.theme.colors[e.theme.mode].text};
  font-size: 16px;
`,hA=R.button`
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
`,my=R.button`
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
`,mA=R.button`
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
`,gA=R.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`,yA=R.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 0;
  border-bottom: 1px solid rgba(37, 99, 235, 0.1);
  
  &:last-child {
    border-bottom: none;
  }
`,xA=R.span`
  color: ${e=>e.theme.colors[e.theme.mode].text};
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 8px;
  
  svg {
    width: 16px;
    height: 16px;
  }
`,vA=R.label`
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
`,wA=R.h2`
  color: ${e=>e.theme.colors[e.theme.mode].text};
  margin-bottom: 24px;
  font-size: 20px;
`,SA=R.span`
  color: ${({theme:e})=>e.mode==="dark"?"#10B981":"#059669"};
`,bA=R.span`
  color: ${({theme:e})=>e.mode==="dark"?"#EF4444":"#DC2626"};
`,gy=({userData:e})=>y.jsxs(Yf,{children:[y.jsxs(jr,{children:[y.jsx(Rr,{children:"用户名"}),y.jsx(Si,{children:e.username})]}),y.jsxs(jr,{children:[y.jsx(Rr,{children:"昵称"}),y.jsx(Si,{children:e.nickname})]}),y.jsxs(jr,{children:[y.jsx(Rr,{children:"手机号"}),y.jsx(Si,{children:e.phone})]}),y.jsxs(jr,{children:[y.jsx(Rr,{children:"泡泡ID"}),y.jsx(Si,{children:e.bubble_id})]}),y.jsxs(jr,{children:[y.jsx(Rr,{children:"会员状态"}),y.jsx(Si,{children:e.is_subscribed?y.jsx(SA,{children:e.subscription_type==="monthly"?"月度会员":e.subscription_type==="yearly"?"年度会员":"试用会员"}):y.jsx(bA,{children:"未订阅"})})]}),e.is_subscribed&&e.subscription_expiry_date&&y.jsxs(jr,{children:[y.jsx(Rr,{children:"会员到期时间"}),y.jsx(Si,{children:new Date(e.subscription_expiry_date).toLocaleDateString()})]})]}),kA=()=>(Ml(),y.jsx(Yf,{children:y.jsxs(jr,{children:[y.jsx(Rr,{children:"系统通知"}),y.jsx(hA,{onClick:()=>We("通知设置功能开发中..."),children:"设置"})]})}));R.div`
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
`;R.div`
  text-align: center;
  padding: 30px;
  background: ${({theme:e})=>e.mode==="dark"?"rgba(255, 255, 255, 0.05)":"rgba(0, 0, 0, 0.03)"};
  border-radius: 24px;
  margin-bottom: 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
`;const EA=R(Y.button)`
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
`,CA=R.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
`,TA=R.div`
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
`,PA=R.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,jA=R.h3`
  margin: 0;
  font-size: 1.2rem;
  color: ${({theme:e})=>e.colors[e.mode].text};
`,RA=R.div`
  display: flex;
  gap: 0.5rem;
`,yy=R.button`
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
`;const xy=R.div`
  text-align: center;
  padding: 2rem;
  color: ${({theme:e})=>e.colors[e.mode].gray};
  font-size: 1rem;
`,AA=R.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  color: ${({theme:e})=>e.colors[e.mode].text};
`,DA=R.div`
  padding: 1rem;
`,IA=R.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`,LA=R.button`
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
`,$A=R.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,vy=R.div`
  background: ${({theme:e})=>e.mode==="dark"?"rgba(20, 20, 20, 0.6)":"rgba(255, 255, 255, 0.6)"};
  border-radius: 20px;
  border: 1px solid ${({theme:e})=>e.colors[e.mode].cardBorder};
  padding: 1.5rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
`,wy=R.h3`
  margin: 0 0 1rem 0;
  font-size: 1.1rem;
  color: ${({theme:e})=>e.colors[e.mode].text};
`,ld=R.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 0;
  border-bottom: 1px solid ${({theme:e})=>e.colors[e.mode].cardBorder};
  
  &:last-child {
    border-bottom: none;
  }
`,Sy=R.span`
  color: ${({theme:e})=>e.colors[e.mode].gray};
  font-size: 0.9rem;
`,ud=R.span`
  color: ${({theme:e})=>e.colors[e.mode].text};
  font-size: 0.9rem;
`,m1=R(Y.div)`
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
`,g1=R(Y.div)`
  background: ${e=>e.theme.mode==="dark"?"linear-gradient(135deg, rgba(20, 20, 20, 0.95) 0%, rgba(15, 15, 15, 0.95) 100%)":"linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(245, 245, 245, 0.95) 100%)"};
  border-radius: 24px;
  width: 90%;
  max-width: 400px;
  padding: 24px;
  position: relative;
  border: 1px solid ${e=>e.theme.colors[e.theme.mode].cardBorder};
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
`,y1=R.h3`
  color: ${e=>e.theme.colors[e.theme.mode].text};
  margin: 0 0 20px 0;
  font-size: 1.2rem;
  text-align: center;
`,MA=R.input`
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
`,x1=R.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
`,qd=R.button`
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
`,_A=R(Y.div)`
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
`,BA=R(Y.div)`
  background: ${e=>e.theme.mode==="dark"?"linear-gradient(135deg, rgba(20, 20, 20, 0.95) 0%, rgba(15, 15, 15, 0.95) 100%)":"linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(245, 245, 245, 0.95) 100%)"};
  border-radius: 24px;
  width: 90%;
  max-width: 500px;
  padding: 24px;
  position: relative;
  border: 1px solid ${e=>e.theme.colors[e.theme.mode].cardBorder};
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
`,OA=R.h3`
  color: ${e=>e.theme.colors[e.theme.mode].text};
  margin: 0 0 20px 0;
  font-size: 1.2rem;
  text-align: center;
`,v1=R.input`
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
`,FA=R.textarea`
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
`,NA=R.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
`,VA=R.button`
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
`,zA=({isOpen:e,onClose:n,voiceId:i,voiceName:o,voicePrompt:a})=>{const[u,c]=b.useState(""),[d,p]=b.useState(!1),m=async()=>{if(!u.trim()){We.error("请输入要共享的泡友ID");return}p(!0);try{await lt.shareVoice(i,u.trim(),o,a),We.success("音色共享成功"),n()}catch(g){g instanceof Error?We.error(`共享失败: ${g.message}`):We.error("共享失败，请稍后重试")}finally{p(!1)}};return y.jsx(Vr,{children:e&&y.jsx(m1,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:n,children:y.jsxs(g1,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.9,opacity:0},onClick:g=>g.stopPropagation(),children:[y.jsxs(y1,{children:['共享音色 "',o,'"']}),y.jsx(MA,{placeholder:"请输入要共享的泡友ID",value:u,onChange:g=>c(g.target.value),autoFocus:!0}),y.jsxs(x1,{children:[y.jsx(qd,{onClick:n,disabled:d,children:"取消"}),y.jsx(qd,{$primary:!0,onClick:m,disabled:d,children:d?"共享中...":"共享"})]})]})})})},UA=({isOpen:e,onClose:n,voice:i,onSave:o})=>{const[a,u]=b.useState(i.name||""),[c,d]=b.useState(i.userPrompt||""),[p,m]=b.useState(!1),g=async()=>{if(!a.trim()){We.error("音色名称不能为空");return}m(!0);try{await o(a.trim(),c.trim()),We.success("音色信息更新成功"),n()}catch(x){x instanceof Error?We.error(`更新失败: ${x.message}`):We.error("更新失败，请稍后重试")}finally{m(!1)}};return y.jsx(Vr,{children:e&&y.jsx(_A,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:n,children:y.jsxs(BA,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.9,opacity:0},onClick:x=>x.stopPropagation(),children:[y.jsx(OA,{children:"编辑音色"}),y.jsx("label",{style:{display:"block",margin:"0 0 8px 0",color:"inherit"},children:"音色名称"}),y.jsx(v1,{placeholder:"请输入音色名称",value:a,onChange:x=>u(x.target.value),autoFocus:!0}),y.jsx("label",{style:{display:"block",margin:"0 0 8px 0",color:"inherit"},children:"音色提示语"}),y.jsx(FA,{placeholder:"请输入音色提示语（可选）",value:c,onChange:x=>d(x.target.value)}),y.jsxs(NA,{children:[y.jsx(Y.button,{style:{flex:1,padding:"12px",borderRadius:"8px",border:"none",cursor:"pointer",fontSize:"0.9rem",fontWeight:500,background:"rgba(255, 255, 255, 0.1)",color:"inherit"},whileHover:{background:"rgba(255, 255, 255, 0.15)",y:-2},onClick:n,disabled:p,children:"取消"}),y.jsx(Y.button,{style:{flex:1,padding:"12px",borderRadius:"8px",border:"none",cursor:"pointer",fontSize:"0.9rem",fontWeight:500,background:"#3b82f6",color:"white"},whileHover:{background:"#2563eb",y:-2},onClick:g,disabled:p,children:p?"保存中...":"保存"})]})]})})})},WA=R(m1)``,HA=R(g1)``,KA=R(y1)`
  color: #e11d48;
`,GA=R(x1)``,by=R(qd)`
  ${e=>e.$danger&&`
    background: #e11d48;
    
    &:hover {
      background: #be123c;
    }
  `}
`,YA=({isOpen:e,onClose:n,voice:i,onConfirm:o})=>{const[a,u]=b.useState(!1),c=async()=>{u(!0);try{await o(),We.success("音色已成功删除"),n()}catch(d){d instanceof Error?We.error(`删除失败: ${d.message}`):We.error("删除失败，请稍后重试")}finally{u(!1)}};return y.jsx(Vr,{children:e&&y.jsx(WA,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:n,children:y.jsxs(HA,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.9,opacity:0},onClick:d=>d.stopPropagation(),children:[y.jsx(KA,{children:"确认删除音色"}),y.jsxs("p",{style:{marginBottom:"20px",textAlign:"center"},children:['您确定要删除音色 "',i.name||"未命名音色",'" 吗？此操作无法撤销。']}),y.jsxs(GA,{children:[y.jsx(by,{onClick:n,disabled:a,children:"取消"}),y.jsx(by,{$danger:!0,onClick:c,disabled:a,children:a?"删除中...":"确认删除"})]})]})})})},qA=()=>{const[e,n]=b.useState([]),[i,o]=b.useState(!0),[a,u]=b.useState(null),[c,d]=b.useState(null),[p,m]=b.useState(!1),[g,x]=b.useState(null),[w,S]=b.useState(!1),[k,T]=b.useState(!1),[E,P]=b.useState(null),[L,A]=b.useState(!1);b.useEffect(()=>{(async()=>{try{const Q=localStorage.getItem("user_voices"),ae=localStorage.getItem("user_voices_timestamp");if(Q&&ae&&!L){const se=parseInt(ae);if(new Date().getTime()-se<36e5){n(JSON.parse(Q)),o(!1),A(!0);return}}if(!L){o(!0),u(null);const se=await lt.getUserVoices();n(se.voices||[]),localStorage.setItem("user_voices",JSON.stringify(se.voices||[])),localStorage.setItem("user_voices_timestamp",new Date().getTime().toString()),A(!0)}}catch(Q){u(Q instanceof Error?Q.message:"获取音色列表失败"),We.error("获取音色列表失败")}finally{o(!1)}})()},[L]);const F=(H,Q)=>{H.stopPropagation(),x({id:Q.voiceId,name:Q.name||"未命名音色",prompt:Q.userPrompt}),m(!0)},O=(H,Q)=>{H.stopPropagation(),P(Q),T(!0)},V=async()=>{if(E)try{const H=await lt.deleteVoice(E.voiceId);if(H.success){const Q=e.filter(ae=>ae.voiceId!==E.voiceId);n(Q),localStorage.setItem("user_voices",JSON.stringify(Q)),localStorage.setItem("user_voices_timestamp",new Date().getTime().toString()),c&&c.voiceId===E.voiceId&&d(null)}else throw new Error(H.message)}catch(H){throw console.error("删除音色失败:",H),H}},W=async(H,Q)=>{if(c)try{const ae=await lt.updateVoice(c.voiceId,H,Q),se={...c,name:ae.name||c.name,userPrompt:ae.userPrompt||c.userPrompt};d(se);const Te=e.map(He=>He.voiceId===c.voiceId?se:He);n(Te),localStorage.setItem("user_voices",JSON.stringify(Te)),localStorage.setItem("user_voices_timestamp",new Date().getTime().toString())}catch(ae){throw console.error("更新音色失败:",ae),ae}};return i?y.jsx(AA,{children:"加载中..."}):a?y.jsxs(xy,{children:["加载失败: ",a]}):e.length===0?y.jsx(xy,{children:"您还没有创建任何音色"}):c?y.jsxs(y.Fragment,{children:[y.jsxs(DA,{children:[y.jsxs(IA,{children:[y.jsxs(LA,{onClick:()=>d(null),children:[y.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:y.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})}),"返回列表"]}),y.jsxs(VA,{onClick:()=>S(!0),children:[y.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[y.jsx("path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}),y.jsx("path",{d:"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"})]}),"编辑"]})]}),y.jsxs($A,{children:[y.jsxs(vy,{children:[y.jsx(wy,{children:"基本信息"}),y.jsxs(ld,{children:[y.jsx(Sy,{children:"音色名称"}),y.jsx(ud,{children:c.name||"未命名音色"})]}),y.jsxs(ld,{children:[y.jsx(Sy,{children:"创建时间"}),y.jsx(ud,{children:c.createTime})]})]}),c.userPrompt&&y.jsxs(vy,{children:[y.jsx(wy,{children:"提示语"}),y.jsx(ld,{children:y.jsx(ud,{children:c.userPrompt})})]})]})]}),y.jsx(UA,{isOpen:w,onClose:()=>S(!1),voice:c,onSave:W})]}):y.jsxs(y.Fragment,{children:[y.jsxs(Yf,{children:[y.jsx(wA,{children:"我的音色列表"}),y.jsx(CA,{children:e.map(H=>y.jsx(TA,{onClick:()=>d(H),children:y.jsxs(PA,{children:[y.jsx(jA,{children:H.name||"未命名音色"}),y.jsxs(RA,{children:[y.jsx(yy,{$type:"share",onClick:Q=>F(Q,H),children:"共享"}),y.jsx(yy,{$type:"delete",onClick:Q=>O(Q,H),children:"删除"})]})]})},H.voiceId))})]}),g&&y.jsx(zA,{isOpen:p,onClose:()=>{m(!1),x(null)},voiceId:g.id,voiceName:g.name,voicePrompt:g.prompt}),E&&y.jsx(YA,{isOpen:k,onClose:()=>{T(!1),P(null)},voice:E,onConfirm:V})]})},XA=()=>{const[e,n]=b.useState(""),[i,o]=b.useState(!1),a=async()=>{if(!e.trim()){We.error("请输入兑换码");return}try{o(!0);const c=JSON.parse(localStorage.getItem("user_data")||"{}").username;if(!c){We.error("未找到用户信息，请重新登录");return}const d=await lt.redeemCode(c,e.trim()),m=new Date(d.subscriptionExpiryDate).toLocaleDateString("zh-CN",{year:"numeric",month:"long",day:"numeric"});We.success(`兑换成功！会员有效期至: ${m}`),n(""),await et.refreshUserInfo()}catch(u){u instanceof Error?We.error(u.message):We.error("兑换失败，请稍后重试")}finally{o(!1)}};return y.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[y.jsx("h2",{style:{marginBottom:"24px",color:"inherit",fontSize:"22px"},children:"兑换码"}),y.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"12px",marginBottom:"20px"},children:[y.jsx(v1,{placeholder:"请输入兑换码",value:e,onChange:u=>n(u.target.value),style:{margin:0,width:"180px",boxShadow:"0 2px 8px rgba(0, 0, 0, 0.1)"}}),y.jsx(Y.button,{style:{padding:"12px 24px",borderRadius:"16px",border:"none",background:"#3b82f6",color:"white",cursor:"pointer",fontSize:"14px",fontWeight:500,minWidth:"80px"},whileHover:{background:"#2563eb",y:-2},whileTap:{y:0},onClick:a,disabled:i,children:i?"兑换中...":"兑换"})]})]})},QA=({isOpen:e,onClose:n})=>{const[i,o]=b.useState(et.userData),[a,u]=b.useState(!1),[c,d]=b.useState("profile"),{theme:p,toggleThemeWithRefresh:m}=Ml(),g=et.isLogin,[x,w]=b.useState(!1);b.useEffect(()=>{e&&g&&(async()=>{try{u(!0);const P=await et.refreshUserInfo();o(P)}catch(P){We.error("获取用户信息失败"),console.error("获取用户信息失败:",P)}finally{u(!1)}})()},[e,g]);const S=E=>{d(E),E==="voices"&&w(!0)},k=()=>y.jsx("div",{style:{height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:y.jsx(EA,{onClick:()=>window.location.href="/WuKonWeb4/login",whileHover:{scale:1.05},whileTap:{scale:.95},style:{borderRadius:"9999px",padding:"16px 36px",fontSize:"1rem"},children:"去登录"})}),T=()=>{if(!g)return k();if(a&&c==="profile")return y.jsx("div",{style:{textAlign:"center",padding:"40px"},children:"加载中..."});if(!i&&c==="profile")return y.jsx("div",{style:{textAlign:"center",padding:"40px"},children:"未找到用户信息"});switch(c){case"profile":return y.jsx(gy,{userData:i});case"voices":return y.jsx(qA,{},"my-voices");case"notification":return y.jsx(kA,{});case"redeemCode":return y.jsx(XA,{});default:return y.jsx(gy,{userData:i})}};return y.jsx(Vr,{children:e&&y.jsx(aA,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:n,children:y.jsxs(lA,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.9,opacity:0},onClick:E=>E.stopPropagation(),children:[y.jsx(uA,{onClick:n,whileHover:{scale:1.1},whileTap:{scale:.9},children:"×"}),y.jsxs(cA,{children:[y.jsxs(dA,{children:[y.jsxs(Na,{$isActive:c==="profile",onClick:()=>S("profile"),children:[y.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[y.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),y.jsx("circle",{cx:"12",cy:"7",r:"4"})]}),"个人资料"]}),y.jsxs(Na,{$isActive:c==="voices",onClick:()=>S("voices"),children:[y.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[y.jsx("path",{d:"M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"}),y.jsx("path",{d:"M19 10v2a7 7 0 0 1-14 0v-2"}),y.jsx("line",{x1:"12",y1:"19",x2:"12",y2:"23"}),y.jsx("line",{x1:"8",y1:"23",x2:"16",y2:"23"})]}),"我的音色"]}),y.jsxs(Na,{$isActive:c==="redeemCode",onClick:()=>S("redeemCode"),children:[y.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[y.jsx("rect",{x:"2",y:"6",width:"20",height:"12",rx:"2"}),y.jsx("path",{d:"M12 12H12.01"}),y.jsx("path",{d:"M17 12H17.01"}),y.jsx("path",{d:"M7 12H7.01"})]}),"兑换码"]}),y.jsxs(Na,{$isActive:c==="notification",onClick:()=>S("notification"),children:[y.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[y.jsx("path",{d:"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"}),y.jsx("path",{d:"M13.73 21a2 2 0 0 1-3.46 0"})]}),"通知设置"]})]}),y.jsxs(fA,{children:[y.jsxs(yA,{children:[y.jsxs(xA,{children:[y.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[y.jsx("circle",{cx:"12",cy:"12",r:"5"}),y.jsx("line",{x1:"12",y1:"1",x2:"12",y2:"3"}),y.jsx("line",{x1:"12",y1:"21",x2:"12",y2:"23"}),y.jsx("line",{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"}),y.jsx("line",{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"}),y.jsx("line",{x1:"1",y1:"12",x2:"3",y2:"12"}),y.jsx("line",{x1:"21",y1:"12",x2:"23",y2:"12"}),y.jsx("line",{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"}),y.jsx("line",{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"})]}),"深色主题"]}),y.jsxs(vA,{children:[y.jsx("input",{type:"checkbox",checked:p==="dark",onChange:m}),y.jsx("span",{})]})]}),g&&y.jsx(y.Fragment,{children:i&&(i.username==="chenming2"||i.username==="BubbleWukon"||i.username==="blacksoup")?y.jsxs(gA,{children:[y.jsx(mA,{onClick:()=>{window.location.href="/WuKonWeb4/admin"},children:"进入后台"}),y.jsx(my,{style:{marginTop:0},onClick:()=>{et.logout(),localStorage.removeItem("user_voices"),localStorage.removeItem("user_voices_timestamp"),localStorage.removeItem("recent_chats"),localStorage.removeItem("chat_history"),localStorage.removeItem("selected_voice");const E=["theme_preference"],P=[];for(let L=0;L<localStorage.length;L++){const A=localStorage.key(L);A&&!E.includes(A)&&P.push(A)}P.forEach(L=>localStorage.removeItem(L)),We.success("已退出登录"),n()},children:"退出登录"})]}):y.jsx(my,{style:{width:"100%"},onClick:()=>{et.logout(),localStorage.removeItem("user_voices"),localStorage.removeItem("user_voices_timestamp"),localStorage.removeItem("recent_chats"),localStorage.removeItem("chat_history"),localStorage.removeItem("selected_voice");const E=["theme_preference"],P=[];for(let L=0;L<localStorage.length;L++){const A=localStorage.key(L);A&&!E.includes(A)&&P.push(A)}P.forEach(L=>localStorage.removeItem(L)),We.success("已退出登录"),n()},children:"退出登录"})})]})]}),y.jsx(pA,{children:T()})]})})})},JA=R.div`
  position: relative;
  margin-right: 20px;
  margin-top: 20px;
`,ZA=R(Y.button)`
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
`;R(Y.div)`
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
`;R(Y.div)`
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
`;const e4=()=>{const[e,n]=b.useState(!1),[i,o]=b.useState(!1),a=b.useRef(null);return Oi(),b.useEffect(()=>{const u=c=>{a.current&&!a.current.contains(c.target)&&n(!1)};return document.addEventListener("mousedown",u),()=>document.removeEventListener("mousedown",u)},[]),y.jsxs(JA,{ref:a,children:[y.jsx(ZA,{onClick:()=>o(!0),whileHover:{scale:1.05},whileTap:{scale:.95},children:y.jsx("img",{src:"/WuKonWeb4/assets/Setting.png",alt:"设置",style:{width:"20px",height:"20px"}})}),y.jsx(QA,{isOpen:i,onClose:()=>o(!1)})]})},t4={initial:{opacity:.6,scale:.98},in:{opacity:1,scale:1,transition:{duration:.3,ease:"easeOut"}},out:{opacity:.6,scale:.98,transition:{duration:.2,ease:"easeIn"}}},nr=({children:e})=>y.jsx(Y.div,{initial:"initial",animate:"in",exit:"out",variants:t4,style:{width:"100%"},children:e}),n4=R.div`
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
`,r4=R.div`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9999;
  pointer-events: ${e=>e.$isVisible?"auto":"none"};
  visibility: ${e=>e.$isVisible?"visible":"hidden"};
  opacity: ${e=>e.$isVisible?"1":"0"};
  transition: opacity 0.3s ease, visibility 0.3s ease;
`,i4=R.div`
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  position: relative;
  scroll-behavior: smooth;
`,o4=()=>{const{theme:e}=Ml();return y.jsxs(Rb,{theme:{...$b,mode:e},children:[y.jsx(Lb,{}),y.jsx(Y2,{basename:"/WuKonWeb4",children:y.jsx(s4,{})})]})},s4=()=>{const{theme:e}=Ml(),n=b.useRef(null),[i,o]=b.useState(!0),a=b.useRef(0),c=Ht().pathname==="/admin";return b.useEffect(()=>{const d=()=>{if(!n.current)return;const m=n.current.scrollTop;m<5?o(!0):o(!1),a.current=m},p=n.current;return p&&p.addEventListener("scroll",d,{passive:!0}),()=>{p&&p.removeEventListener("scroll",d)}},[]),b.useEffect(()=>{console.log("当前主题:",e),document.documentElement.setAttribute("data-theme",e),document.body.className=e},[e]),y.jsxs(i4,{ref:n,children:[!c&&y.jsx(Gf,{}),y.jsx(l4,{navVisible:i}),y.jsx(oR,{position:"top-center"})]})},a4=({children:e})=>et.isLogin?y.jsx(y.Fragment,{children:e}):y.jsx(ix,{to:"/login",replace:!0}),l4=({navVisible:e})=>{const n=Ht(),i=Oi(),o=n.pathname==="/login",a=n.pathname==="/profile",u=n.pathname==="/admin";return b.useEffect(()=>{const c=et.subscribe("login",p=>{console.log("登录状态变化 - 已登录:")}),d=et.subscribe("logout",()=>{console.log("登录状态变化 - 已登出"),i("/",{replace:!0})});return()=>{c(),d()}},[i]),b.useEffect(()=>{window.scrollTo(0,0)},[n.pathname]),b.useEffect(()=>{const c=()=>{const p=et.forceRefreshLoginStatus();console.log("检查登录状态:",p),!p&&!["/","/login","/hero","/app-showcase","/jindouyun","/interpreter","/parallel-universe"].includes(n.pathname)&&i("/login",{replace:!0})};["/","/login","/hero","/app-showcase","/jindouyun","/interpreter","/parallel-universe"].includes(n.pathname)||c()},[n.pathname,i]),y.jsxs(y.Fragment,{children:[!o&&!a&&!u&&y.jsx(n4,{$isVisible:e,children:y.jsx(QR,{})}),y.jsxs(E2,{children:[y.jsx(pn,{path:"/",element:y.jsxs(nr,{children:[y.jsxs("main",{children:[y.jsx(K0,{}),y.jsx(X0,{}),y.jsx(Fj,{}),y.jsx(Yj,{}),y.jsx(l3,{}),y.jsx(m3,{})]}),y.jsx(Mo,{}),y.jsx(or,{})]})}),y.jsx(pn,{path:"/login",element:y.jsx(nr,{children:y.jsx("main",{children:y.jsx(sA,{})})})}),y.jsx(pn,{path:"/hero",element:y.jsxs(nr,{children:[y.jsx("main",{children:y.jsx(K0,{})}),y.jsx(Mo,{}),y.jsx(or,{})]})}),y.jsx(pn,{path:"/app-showcase",element:y.jsxs(nr,{children:[y.jsx("main",{children:y.jsx(X0,{})}),y.jsx(Mo,{}),y.jsx(or,{})]})}),y.jsx(pn,{path:"/jindouyun",element:y.jsxs(nr,{children:[y.jsx("main",{children:y.jsx(KR,{})}),y.jsx(Mo,{}),y.jsx(or,{})]})}),y.jsx(pn,{path:"/interpreter",element:y.jsxs(nr,{children:[y.jsx("main",{children:y.jsx(_R,{})}),y.jsx(Mo,{}),y.jsx(or,{})]})}),y.jsx(pn,{path:"/parallel-universe",element:y.jsxs(nr,{children:[y.jsx(TR,{}),y.jsx(or,{})]})}),y.jsx(pn,{path:"/admin",element:y.jsx(a4,{children:y.jsx(nr,{children:y.jsx(b.Suspense,{fallback:y.jsx("div",{children:"加载中..."}),children:y.jsx(u4,{})})})})}),y.jsx(pn,{path:"*",element:y.jsx(ix,{to:"/",replace:!0})})]}),!o&&!u&&y.jsx(r4,{$isVisible:e,children:y.jsx(e4,{})})]})},u4=b.lazy(()=>AS(()=>import("./Admin-Bbkmu4L2.js"),[]));console.log("使用的App版本: App.tsx");const c4=document.querySelectorAll("style[data-navigation-styles]");c4.forEach(e=>e.remove());document.body.classList.remove("is-scrolling");document.body.removeAttribute("data-nav-visible");PS.createRoot(document.getElementById("root")).render(y.jsx(o4,{}));export{We as V,et as a,lt as b,ke as c,R as d,Oi as e,y as j,b as r,Ml as u};
