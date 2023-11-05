(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function vp(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const ze={},Di=[],On=()=>{},JR=()=>!1,ZR=/^on[^a-z]/,Su=t=>ZR.test(t),Ep=t=>t.startsWith("onUpdate:"),it=Object.assign,wp=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},eC=Object.prototype.hasOwnProperty,Re=(t,e)=>eC.call(t,e),ne=Array.isArray,Mi=t=>Pu(t)==="[object Map]",Y0=t=>Pu(t)==="[object Set]",ue=t=>typeof t=="function",nt=t=>typeof t=="string",Tp=t=>typeof t=="symbol",$e=t=>t!==null&&typeof t=="object",X0=t=>($e(t)||ue(t))&&ue(t.then)&&ue(t.catch),J0=Object.prototype.toString,Pu=t=>J0.call(t),tC=t=>Pu(t).slice(8,-1),Z0=t=>Pu(t)==="[object Object]",bp=t=>nt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,hc=vp(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ku=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},nC=/-(\w)/g,or=ku(t=>t.replace(nC,(e,n)=>n?n.toUpperCase():"")),rC=/\B([A-Z])/g,vo=ku(t=>t.replace(rC,"-$1").toLowerCase()),Nu=ku(t=>t.charAt(0).toUpperCase()+t.slice(1)),fc=ku(t=>t?`on${Nu(t)}`:""),Bs=(t,e)=>!Object.is(t,e),zh=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Cc=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},sC=t=>{const e=parseFloat(t);return isNaN(e)?t:e},iC=t=>{const e=nt(t)?Number(t):NaN;return isNaN(e)?t:e};let t_;const Bf=()=>t_||(t_=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ip(t){if(ne(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=nt(r)?cC(r):Ip(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(nt(t)||$e(t))return t}const oC=/;(?![^(]*\))/g,aC=/:([^]+)/,lC=/\/\*[^]*?\*\//g;function cC(t){const e={};return t.replace(lC,"").split(oC).forEach(n=>{if(n){const r=n.split(aC);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Ap(t){let e="";if(nt(t))e=t;else if(ne(t))for(let n=0;n<t.length;n++){const r=Ap(t[n]);r&&(e+=r+" ")}else if($e(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const uC="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",hC=vp(uC);function eE(t){return!!t||t===""}const qB=t=>nt(t)?t:t==null?"":ne(t)||$e(t)&&(t.toString===J0||!ue(t.toString))?JSON.stringify(t,tE,2):String(t),tE=(t,e)=>e&&e.__v_isRef?tE(t,e.value):Mi(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:Y0(e)?{[`Set(${e.size})`]:[...e.values()]}:$e(e)&&!ne(e)&&!Z0(e)?String(e):e;let nn;class nE{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=nn,!e&&nn&&(this.index=(nn.scopes||(nn.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=nn;try{return nn=this,e()}finally{nn=n}}}on(){nn=this}off(){nn=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Rp(t){return new nE(t)}function fC(t,e=nn){e&&e.active&&e.effects.push(t)}function Eo(){return nn}function cl(t){nn&&nn.cleanups.push(t)}const Cp=t=>{const e=new Set(t);return e.w=0,e.n=0,e},rE=t=>(t.w&rs)>0,sE=t=>(t.n&rs)>0,dC=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=rs},pC=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];rE(s)&&!sE(s)?s.delete(t):e[n++]=s,s.w&=~rs,s.n&=~rs}e.length=n}},Sc=new WeakMap;let Xo=0,rs=1;const jf=30;let An;const xs=Symbol(""),qf=Symbol("");class Sp{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,fC(this,r)}run(){if(!this.active)return this.fn();let e=An,n=Yr;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=An,An=this,Yr=!0,rs=1<<++Xo,Xo<=jf?dC(this):n_(this),this.fn()}finally{Xo<=jf&&pC(this),rs=1<<--Xo,An=this.parent,Yr=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){An===this?this.deferStop=!0:this.active&&(n_(this),this.onStop&&this.onStop(),this.active=!1)}}function n_(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Yr=!0;const iE=[];function wo(){iE.push(Yr),Yr=!1}function To(){const t=iE.pop();Yr=t===void 0?!0:t}function Zt(t,e,n){if(Yr&&An){let r=Sc.get(t);r||Sc.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=Cp()),oE(s)}}function oE(t,e){let n=!1;Xo<=jf?sE(t)||(t.n|=rs,n=!rE(t)):n=!t.has(An),n&&(t.add(An),An.deps.push(t))}function Er(t,e,n,r,s,i){const o=Sc.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&ne(t)){const l=Number(r);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":ne(t)?bp(n)&&a.push(o.get("length")):(a.push(o.get(xs)),Mi(t)&&a.push(o.get(qf)));break;case"delete":ne(t)||(a.push(o.get(xs)),Mi(t)&&a.push(o.get(qf)));break;case"set":Mi(t)&&a.push(o.get(xs));break}if(a.length===1)a[0]&&Hf(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Hf(Cp(l))}}function Hf(t,e){const n=ne(t)?t:[...t];for(const r of n)r.computed&&r_(r);for(const r of n)r.computed||r_(r)}function r_(t,e){(t!==An||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function mC(t,e){var n;return(n=Sc.get(t))==null?void 0:n.get(e)}const gC=vp("__proto__,__v_isRef,__isVue"),aE=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Tp)),s_=_C();function _C(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=Ie(this);for(let i=0,o=this.length;i<o;i++)Zt(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(Ie)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){wo();const r=Ie(this)[e].apply(this,n);return To(),r}}),t}function yC(t){const e=Ie(this);return Zt(e,"has",t),e.hasOwnProperty(t)}class lE{constructor(e=!1,n=!1){this._isReadonly=e,this._shallow=n}get(e,n,r){const s=this._isReadonly,i=this._shallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw"&&r===(s?i?NC:fE:i?hE:uE).get(e))return e;const o=ne(e);if(!s){if(o&&Re(s_,n))return Reflect.get(s_,n,r);if(n==="hasOwnProperty")return yC}const a=Reflect.get(e,n,r);return(Tp(n)?aE.has(n):gC(n))||(s||Zt(e,"get",n),i)?a:Oe(a)?o&&bp(n)?a:a.value:$e(a)?s?pE(a):Qn(a):a}}class cE extends lE{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(Ki(i)&&Oe(i)&&!Oe(r))return!1;if(!this._shallow&&(!Pc(r)&&!Ki(r)&&(i=Ie(i),r=Ie(r)),!ne(e)&&Oe(i)&&!Oe(r)))return i.value=r,!0;const o=ne(e)&&bp(n)?Number(n)<e.length:Re(e,n),a=Reflect.set(e,n,r,s);return e===Ie(s)&&(o?Bs(r,i)&&Er(e,"set",n,r):Er(e,"add",n,r)),a}deleteProperty(e,n){const r=Re(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Er(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Tp(n)||!aE.has(n))&&Zt(e,"has",n),r}ownKeys(e){return Zt(e,"iterate",ne(e)?"length":xs),Reflect.ownKeys(e)}}class vC extends lE{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const EC=new cE,wC=new vC,TC=new cE(!0),Pp=t=>t,Ou=t=>Reflect.getPrototypeOf(t);function Ul(t,e,n=!1,r=!1){t=t.__v_raw;const s=Ie(t),i=Ie(e);n||(Bs(e,i)&&Zt(s,"get",e),Zt(s,"get",i));const{has:o}=Ou(s),a=r?Pp:n?Op:ka;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function Bl(t,e=!1){const n=this.__v_raw,r=Ie(n),s=Ie(t);return e||(Bs(t,s)&&Zt(r,"has",t),Zt(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function jl(t,e=!1){return t=t.__v_raw,!e&&Zt(Ie(t),"iterate",xs),Reflect.get(t,"size",t)}function i_(t){t=Ie(t);const e=Ie(this);return Ou(e).has.call(e,t)||(e.add(t),Er(e,"add",t,t)),this}function o_(t,e){e=Ie(e);const n=Ie(this),{has:r,get:s}=Ou(n);let i=r.call(n,t);i||(t=Ie(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?Bs(e,o)&&Er(n,"set",t,e):Er(n,"add",t,e),this}function a_(t){const e=Ie(this),{has:n,get:r}=Ou(e);let s=n.call(e,t);s||(t=Ie(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&Er(e,"delete",t,void 0),i}function l_(){const t=Ie(this),e=t.size!==0,n=t.clear();return e&&Er(t,"clear",void 0,void 0),n}function ql(t,e){return function(r,s){const i=this,o=i.__v_raw,a=Ie(o),l=e?Pp:t?Op:ka;return!t&&Zt(a,"iterate",xs),o.forEach((c,u)=>r.call(s,l(c),l(u),i))}}function Hl(t,e,n){return function(...r){const s=this.__v_raw,i=Ie(s),o=Mi(i),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=s[t](...r),u=n?Pp:e?Op:ka;return!e&&Zt(i,"iterate",l?qf:xs),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function Mr(t){return function(...e){return t==="delete"?!1:this}}function bC(){const t={get(i){return Ul(this,i)},get size(){return jl(this)},has:Bl,add:i_,set:o_,delete:a_,clear:l_,forEach:ql(!1,!1)},e={get(i){return Ul(this,i,!1,!0)},get size(){return jl(this)},has:Bl,add:i_,set:o_,delete:a_,clear:l_,forEach:ql(!1,!0)},n={get(i){return Ul(this,i,!0)},get size(){return jl(this,!0)},has(i){return Bl.call(this,i,!0)},add:Mr("add"),set:Mr("set"),delete:Mr("delete"),clear:Mr("clear"),forEach:ql(!0,!1)},r={get(i){return Ul(this,i,!0,!0)},get size(){return jl(this,!0)},has(i){return Bl.call(this,i,!0)},add:Mr("add"),set:Mr("set"),delete:Mr("delete"),clear:Mr("clear"),forEach:ql(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Hl(i,!1,!1),n[i]=Hl(i,!0,!1),e[i]=Hl(i,!1,!0),r[i]=Hl(i,!0,!0)}),[t,n,e,r]}const[IC,AC,RC,CC]=bC();function kp(t,e){const n=e?t?CC:RC:t?AC:IC;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Re(n,s)&&s in r?n:r,s,i)}const SC={get:kp(!1,!1)},PC={get:kp(!1,!0)},kC={get:kp(!0,!1)},uE=new WeakMap,hE=new WeakMap,fE=new WeakMap,NC=new WeakMap;function OC(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function xC(t){return t.__v_skip||!Object.isExtensible(t)?0:OC(tC(t))}function Qn(t){return Ki(t)?t:Np(t,!1,EC,SC,uE)}function dE(t){return Np(t,!1,TC,PC,hE)}function pE(t){return Np(t,!0,wC,kC,fE)}function Np(t,e,n,r,s){if(!$e(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=xC(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function tr(t){return Ki(t)?tr(t.__v_raw):!!(t&&t.__v_isReactive)}function Ki(t){return!!(t&&t.__v_isReadonly)}function Pc(t){return!!(t&&t.__v_isShallow)}function mE(t){return tr(t)||Ki(t)}function Ie(t){const e=t&&t.__v_raw;return e?Ie(e):t}function bo(t){return Cc(t,"__v_skip",!0),t}const ka=t=>$e(t)?Qn(t):t,Op=t=>$e(t)?pE(t):t;function gE(t){Yr&&An&&(t=Ie(t),oE(t.dep||(t.dep=Cp())))}function xp(t,e){t=Ie(t);const n=t.dep;n&&Hf(n)}function Oe(t){return!!(t&&t.__v_isRef===!0)}function Me(t){return _E(t,!1)}function Xr(t){return _E(t,!0)}function _E(t,e){return Oe(t)?t:new DC(t,e)}class DC{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Ie(e),this._value=n?e:ka(e)}get value(){return gE(this),this._value}set value(e){const n=this.__v_isShallow||Pc(e)||Ki(e);e=n?e:Ie(e),Bs(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:ka(e),xp(this))}}function Wl(t){xp(t)}function ht(t){return Oe(t)?t.value:t}function yt(t){return ue(t)?t():ht(t)}const MC={get:(t,e,n)=>ht(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Oe(s)&&!Oe(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function yE(t){return tr(t)?t:new Proxy(t,MC)}function LC(t){const e=ne(t)?new Array(t.length):{};for(const n in t)e[n]=vE(t,n);return e}class VC{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return mC(Ie(this._object),this._key)}}class $C{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function FC(t,e,n){return Oe(t)?t:ue(t)?new $C(t):$e(t)&&arguments.length>1?vE(t,e,n):Me(t)}function vE(t,e,n){const r=t[e];return Oe(r)?r:new VC(t,e,n)}class UC{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Sp(e,()=>{this._dirty||(this._dirty=!0,xp(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=Ie(this);return gE(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function BC(t,e,n=!1){let r,s;const i=ue(t);return i?(r=t,s=On):(r=t.get,s=t.set),new UC(r,s,i||!s,n)}function Jr(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){xu(i,e,n)}return s}function _n(t,e,n,r){if(ue(t)){const i=Jr(t,e,n,r);return i&&X0(i)&&i.catch(o=>{xu(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(_n(t[i],e,n,r));return s}function xu(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const c=i.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}i=i.parent}const l=e.appContext.config.errorHandler;if(l){Jr(l,null,10,[t,o,a]);return}}jC(t,n,s,r)}function jC(t,e,n,r=!0){console.error(t)}let Na=!1,Wf=!1;const Dt=[];let Kn=0;const Li=[];let fr=null,As=0;const EE=Promise.resolve();let Dp=null;function Du(t){const e=Dp||EE;return t?e.then(this?t.bind(this):t):e}function qC(t){let e=Kn+1,n=Dt.length;for(;e<n;){const r=e+n>>>1;Oa(Dt[r])<t?e=r+1:n=r}return e}function Mp(t){(!Dt.length||!Dt.includes(t,Na&&t.allowRecurse?Kn+1:Kn))&&(t.id==null?Dt.push(t):Dt.splice(qC(t.id),0,t),wE())}function wE(){!Na&&!Wf&&(Wf=!0,Dp=EE.then(bE))}function HC(t){const e=Dt.indexOf(t);e>Kn&&Dt.splice(e,1)}function WC(t){ne(t)?Li.push(...t):(!fr||!fr.includes(t,t.allowRecurse?As+1:As))&&Li.push(t),wE()}function c_(t,e=Na?Kn+1:0){for(;e<Dt.length;e++){const n=Dt[e];n&&n.pre&&(Dt.splice(e,1),e--,n())}}function TE(t){if(Li.length){const e=[...new Set(Li)];if(Li.length=0,fr){fr.push(...e);return}for(fr=e,fr.sort((n,r)=>Oa(n)-Oa(r)),As=0;As<fr.length;As++)fr[As]();fr=null,As=0}}const Oa=t=>t.id==null?1/0:t.id,zC=(t,e)=>{const n=Oa(t)-Oa(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function bE(t){Wf=!1,Na=!0,Dt.sort(zC);const e=On;try{for(Kn=0;Kn<Dt.length;Kn++){const n=Dt[Kn];n&&n.active!==!1&&Jr(n,null,14)}}finally{Kn=0,Dt.length=0,TE(),Na=!1,Dp=null,(Dt.length||Li.length)&&bE()}}function KC(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||ze;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=r[u]||ze;f&&(s=n.map(d=>nt(d)?d.trim():d)),h&&(s=n.map(sC))}let a,l=r[a=fc(e)]||r[a=fc(or(e))];!l&&i&&(l=r[a=fc(vo(e))]),l&&_n(l,t,6,s);const c=r[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,_n(c,t,6,s)}}function IE(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!ue(t)){const l=c=>{const u=IE(c,e,!0);u&&(a=!0,it(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!a?($e(t)&&r.set(t,null),null):(ne(i)?i.forEach(l=>o[l]=null):it(o,i),$e(t)&&r.set(t,o),o)}function Mu(t,e){return!t||!Su(e)?!1:(e=e.slice(2).replace(/Once$/,""),Re(t,e[0].toLowerCase()+e.slice(1))||Re(t,vo(e))||Re(t,e))}let bt=null,AE=null;function kc(t){const e=bt;return bt=t,AE=t&&t.type.__scopeId||null,e}function ut(t,e=bt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&w_(-1);const i=kc(e);let o;try{o=t(...s)}finally{kc(i),r._d&&w_(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Kh(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:f,setupState:d,ctx:m,inheritAttrs:p}=t;let g,y;const w=kc(t);try{if(n.shapeFlag&4){const T=s||r;g=zn(u.call(T,T,h,i,d,f,m)),y=l}else{const T=e;g=zn(T.length>1?T(i,{attrs:l,slots:a,emit:c}):T(i,null)),y=e.props?l:GC(l)}}catch(T){pa.length=0,xu(T,t,1),g=ge(yn)}let b=g;if(y&&p!==!1){const T=Object.keys(y),{shapeFlag:k}=b;T.length&&k&7&&(o&&T.some(Ep)&&(y=QC(y,o)),b=ss(b,y))}return n.dirs&&(b=ss(b),b.dirs=b.dirs?b.dirs.concat(n.dirs):n.dirs),n.transition&&(b.transition=n.transition),g=b,kc(w),g}const GC=t=>{let e;for(const n in t)(n==="class"||n==="style"||Su(n))&&((e||(e={}))[n]=t[n]);return e},QC=(t,e)=>{const n={};for(const r in t)(!Ep(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function YC(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:l}=e,c=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?u_(r,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==r[f]&&!Mu(c,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?u_(r,o,c):!0:!!o;return!1}function u_(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Mu(n,i))return!0}return!1}function XC({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const JC=t=>t.__isSuspense;function ZC(t,e){e&&e.pendingBranch?ne(t)?e.effects.push(...t):e.effects.push(t):WC(t)}function Wn(t,e){return Lp(t,null,e)}const zl={};function Yt(t,e,n){return Lp(t,e,n)}function Lp(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=ze){var a;const l=Eo()===((a=rt)==null?void 0:a.scope)?rt:null;let c,u=!1,h=!1;if(Oe(t)?(c=()=>t.value,u=Pc(t)):tr(t)?(c=()=>t,r=!0):ne(t)?(h=!0,u=t.some(T=>tr(T)||Pc(T)),c=()=>t.map(T=>{if(Oe(T))return T.value;if(tr(T))return Ci(T);if(ue(T))return Jr(T,l,2)})):ue(t)?e?c=()=>Jr(t,l,2):c=()=>{if(!(l&&l.isUnmounted))return f&&f(),_n(t,l,3,[d])}:c=On,e&&r){const T=c;c=()=>Ci(T())}let f,d=T=>{f=w.onStop=()=>{Jr(T,l,4)}},m;if(Ma)if(d=On,e?n&&_n(e,l,3,[c(),h?[]:void 0,d]):c(),s==="sync"){const T=GS();m=T.__watcherHandles||(T.__watcherHandles=[])}else return On;let p=h?new Array(t.length).fill(zl):zl;const g=()=>{if(w.active)if(e){const T=w.run();(r||u||(h?T.some((k,I)=>Bs(k,p[I])):Bs(T,p)))&&(f&&f(),_n(e,l,3,[T,p===zl?void 0:h&&p[0]===zl?[]:p,d]),p=T)}else w.run()};g.allowRecurse=!!e;let y;s==="sync"?y=g:s==="post"?y=()=>Kt(g,l&&l.suspense):(g.pre=!0,l&&(g.id=l.uid),y=()=>Mp(g));const w=new Sp(c,y);e?n?g():p=w.run():s==="post"?Kt(w.run.bind(w),l&&l.suspense):w.run();const b=()=>{w.stop(),l&&l.scope&&wp(l.scope.effects,w)};return m&&m.push(b),b}function eS(t,e,n){const r=this.proxy,s=nt(t)?t.includes(".")?RE(r,t):()=>r[t]:t.bind(r,r);let i;ue(e)?i=e:(i=e.handler,n=e);const o=rt;Gi(this);const a=Lp(s,i.bind(r),n);return o?Gi(o):Ds(),a}function RE(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Ci(t,e){if(!$e(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Oe(t))Ci(t.value,e);else if(ne(t))for(let n=0;n<t.length;n++)Ci(t[n],e);else if(Y0(t)||Mi(t))t.forEach(n=>{Ci(n,e)});else if(Z0(t))for(const n in t)Ci(t[n],e);return t}function vs(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let l=a.dir[r];l&&(wo(),_n(l,n,8,[t.el,a,t,e]),To())}}const Br=Symbol("_leaveCb"),Kl=Symbol("_enterCb");function tS(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Fu(()=>{t.isMounted=!0}),Vp(()=>{t.isUnmounting=!0}),t}const pn=[Function,Array],CE={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:pn,onEnter:pn,onAfterEnter:pn,onEnterCancelled:pn,onBeforeLeave:pn,onLeave:pn,onAfterLeave:pn,onLeaveCancelled:pn,onBeforeAppear:pn,onAppear:pn,onAfterAppear:pn,onAppearCancelled:pn},nS={name:"BaseTransition",props:CE,setup(t,{slots:e}){const n=Ar(),r=tS();let s;return()=>{const i=e.default&&PE(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const p of i)if(p.type!==yn){o=p;break}}const a=Ie(t),{mode:l}=a;if(r.isLeaving)return Gh(o);const c=h_(o);if(!c)return Gh(o);const u=zf(c,a,r,n);Kf(c,u);const h=n.subTree,f=h&&h_(h);let d=!1;const{getTransitionKey:m}=c.type;if(m){const p=m();s===void 0?s=p:p!==s&&(s=p,d=!0)}if(f&&f.type!==yn&&(!Rs(c,f)||d)){const p=zf(f,a,r,n);if(Kf(f,p),l==="out-in")return r.isLeaving=!0,p.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&n.update()},Gh(o);l==="in-out"&&c.type!==yn&&(p.delayLeave=(g,y,w)=>{const b=SE(r,f);b[String(f.key)]=f,g[Br]=()=>{y(),g[Br]=void 0,delete u.delayedLeave},u.delayedLeave=w})}return o}}},rS=nS;function SE(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function zf(t,e,n,r){const{appear:s,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:h,onLeave:f,onAfterLeave:d,onLeaveCancelled:m,onBeforeAppear:p,onAppear:g,onAfterAppear:y,onAppearCancelled:w}=e,b=String(t.key),T=SE(n,t),k=(E,R)=>{E&&_n(E,r,9,R)},I=(E,R)=>{const M=R[1];k(E,R),ne(E)?E.every(U=>U.length<=1)&&M():E.length<=1&&M()},C={mode:i,persisted:o,beforeEnter(E){let R=a;if(!n.isMounted)if(s)R=p||a;else return;E[Br]&&E[Br](!0);const M=T[b];M&&Rs(t,M)&&M.el[Br]&&M.el[Br](),k(R,[E])},enter(E){let R=l,M=c,U=u;if(!n.isMounted)if(s)R=g||l,M=y||c,U=w||u;else return;let V=!1;const H=E[Kl]=ve=>{V||(V=!0,ve?k(U,[E]):k(M,[E]),C.delayedLeave&&C.delayedLeave(),E[Kl]=void 0)};R?I(R,[E,H]):H()},leave(E,R){const M=String(t.key);if(E[Kl]&&E[Kl](!0),n.isUnmounting)return R();k(h,[E]);let U=!1;const V=E[Br]=H=>{U||(U=!0,R(),H?k(m,[E]):k(d,[E]),E[Br]=void 0,T[M]===t&&delete T[M])};T[M]=t,f?I(f,[E,V]):V()},clone(E){return zf(E,e,n,r)}};return C}function Gh(t){if(Vu(t))return t=ss(t),t.children=null,t}function h_(t){return Vu(t)?t.children?t.children[0]:void 0:t}function Kf(t,e){t.shapeFlag&6&&t.component?Kf(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function PE(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===sn?(o.patchFlag&128&&s++,r=r.concat(PE(o.children,e,a))):(e||o.type!==yn)&&r.push(a!=null?ss(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function Lu(t,e){return ue(t)?(()=>it({name:t.name},e,{setup:t}))():t}const ha=t=>!!t.type.__asyncLoader,Vu=t=>t.type.__isKeepAlive;function sS(t,e){kE(t,"a",e)}function iS(t,e){kE(t,"da",e)}function kE(t,e,n=rt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if($u(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Vu(s.parent.vnode)&&oS(r,e,n,s),s=s.parent}}function oS(t,e,n,r){const s=$u(e,t,r,!0);$p(()=>{wp(r[e],s)},n)}function $u(t,e,n=rt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;wo(),Gi(n);const a=_n(e,n,t,o);return Ds(),To(),a});return r?s.unshift(i):s.push(i),i}}const xr=t=>(e,n=rt)=>(!Ma||t==="sp")&&$u(t,(...r)=>e(...r),n),aS=xr("bm"),Fu=xr("m"),lS=xr("bu"),cS=xr("u"),Vp=xr("bum"),$p=xr("um"),Uu=xr("sp"),uS=xr("rtg"),hS=xr("rtc");function fS(t,e=rt){$u("ec",t,e)}const NE="components";function Fp(t,e){return pS(NE,t,!0,e)||t}const dS=Symbol.for("v-ndc");function pS(t,e,n=!0,r=!1){const s=bt||rt;if(s){const i=s.type;if(t===NE){const a=WS(i,!1);if(a&&(a===e||a===or(e)||a===Nu(or(e))))return i}const o=f_(s[t]||i[t],e)||f_(s.appContext[t],e);return!o&&r?i:o}}function f_(t,e){return t&&(t[e]||t[or(e)]||t[Nu(or(e))])}function HB(t,e,n,r){let s;const i=n&&n[r];if(ne(t)||nt(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if($e(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];s[a]=e(t[c],c,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}function WB(t,e,n={},r,s){if(bt.isCE||bt.parent&&ha(bt.parent)&&bt.parent.isCE)return e!=="default"&&(n.name=e),ge("slot",n,r&&r());let i=t[e];i&&i._c&&(i._d=!1),Et();const o=i&&OE(i(n)),a=Oc(sn,{key:n.key||o&&o.key||`_${e}`},o||(r?r():[]),o&&t._===1?64:-2);return!s&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function OE(t){return t.some(e=>xc(e)?!(e.type===yn||e.type===sn&&!OE(e.children)):!0)?t:null}function zB(t,e){const n={};for(const r in t)n[e&&/[A-Z]/.test(r)?`on:${r}`:fc(r)]=t[r];return n}const Gf=t=>t?qE(t)?Hp(t)||t.proxy:Gf(t.parent):null,fa=it(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Gf(t.parent),$root:t=>Gf(t.root),$emit:t=>t.emit,$options:t=>Up(t),$forceUpdate:t=>t.f||(t.f=()=>Mp(t.update)),$nextTick:t=>t.n||(t.n=Du.bind(t.proxy)),$watch:t=>eS.bind(t)}),Qh=(t,e)=>t!==ze&&!t.__isScriptSetup&&Re(t,e),mS={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Qh(r,e))return o[e]=1,r[e];if(s!==ze&&Re(s,e))return o[e]=2,s[e];if((c=t.propsOptions[0])&&Re(c,e))return o[e]=3,i[e];if(n!==ze&&Re(n,e))return o[e]=4,n[e];Qf&&(o[e]=0)}}const u=fa[e];let h,f;if(u)return e==="$attrs"&&Zt(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==ze&&Re(n,e))return o[e]=4,n[e];if(f=l.config.globalProperties,Re(f,e))return f[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Qh(s,e)?(s[e]=n,!0):r!==ze&&Re(r,e)?(r[e]=n,!0):Re(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==ze&&Re(t,o)||Qh(e,o)||(a=i[0])&&Re(a,o)||Re(r,o)||Re(fa,o)||Re(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Re(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function d_(t){return ne(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Qf=!0;function gS(t){const e=Up(t),n=t.proxy,r=t.ctx;Qf=!1,e.beforeCreate&&p_(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:d,updated:m,activated:p,deactivated:g,beforeDestroy:y,beforeUnmount:w,destroyed:b,unmounted:T,render:k,renderTracked:I,renderTriggered:C,errorCaptured:E,serverPrefetch:R,expose:M,inheritAttrs:U,components:V,directives:H,filters:ve}=e;if(c&&_S(c,r,null),o)for(const ae in o){const de=o[ae];ue(de)&&(r[ae]=de.bind(n))}if(s){const ae=s.call(n,n);$e(ae)&&(t.data=Qn(ae))}if(Qf=!0,i)for(const ae in i){const de=i[ae],ot=ue(de)?de.bind(n,n):ue(de.get)?de.get.bind(n,n):On,en=!ue(de)&&ue(de.set)?de.set.bind(n):On,Ct=Xe({get:ot,set:en});Object.defineProperty(r,ae,{enumerable:!0,configurable:!0,get:()=>Ct.value,set:Wt=>Ct.value=Wt})}if(a)for(const ae in a)xE(a[ae],r,n,ae);if(l){const ae=ue(l)?l.call(n):l;Reflect.ownKeys(ae).forEach(de=>{da(de,ae[de])})}u&&p_(u,t,"c");function K(ae,de){ne(de)?de.forEach(ot=>ae(ot.bind(n))):de&&ae(de.bind(n))}if(K(aS,h),K(Fu,f),K(lS,d),K(cS,m),K(sS,p),K(iS,g),K(fS,E),K(hS,I),K(uS,C),K(Vp,w),K($p,T),K(Uu,R),ne(M))if(M.length){const ae=t.exposed||(t.exposed={});M.forEach(de=>{Object.defineProperty(ae,de,{get:()=>n[de],set:ot=>n[de]=ot})})}else t.exposed||(t.exposed={});k&&t.render===On&&(t.render=k),U!=null&&(t.inheritAttrs=U),V&&(t.components=V),H&&(t.directives=H)}function _S(t,e,n=On){ne(t)&&(t=Yf(t));for(const r in t){const s=t[r];let i;$e(s)?"default"in s?i=It(s.from||r,s.default,!0):i=It(s.from||r):i=It(s),Oe(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function p_(t,e,n){_n(ne(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function xE(t,e,n,r){const s=r.includes(".")?RE(n,r):()=>n[r];if(nt(t)){const i=e[t];ue(i)&&Yt(s,i)}else if(ue(t))Yt(s,t.bind(n));else if($e(t))if(ne(t))t.forEach(i=>xE(i,e,n,r));else{const i=ue(t.handler)?t.handler.bind(n):e[t.handler];ue(i)&&Yt(s,i,t)}}function Up(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let l;return a?l=a:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(c=>Nc(l,c,o,!0)),Nc(l,e,o)),$e(e)&&i.set(e,l),l}function Nc(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Nc(t,i,n,!0),s&&s.forEach(o=>Nc(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=yS[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const yS={data:m_,props:g_,emits:g_,methods:Jo,computed:Jo,beforeCreate:Bt,created:Bt,beforeMount:Bt,mounted:Bt,beforeUpdate:Bt,updated:Bt,beforeDestroy:Bt,beforeUnmount:Bt,destroyed:Bt,unmounted:Bt,activated:Bt,deactivated:Bt,errorCaptured:Bt,serverPrefetch:Bt,components:Jo,directives:Jo,watch:ES,provide:m_,inject:vS};function m_(t,e){return e?t?function(){return it(ue(t)?t.call(this,this):t,ue(e)?e.call(this,this):e)}:e:t}function vS(t,e){return Jo(Yf(t),Yf(e))}function Yf(t){if(ne(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Bt(t,e){return t?[...new Set([].concat(t,e))]:e}function Jo(t,e){return t?it(Object.create(null),t,e):e}function g_(t,e){return t?ne(t)&&ne(e)?[...new Set([...t,...e])]:it(Object.create(null),d_(t),d_(e??{})):e}function ES(t,e){if(!t)return e;if(!e)return t;const n=it(Object.create(null),t);for(const r in e)n[r]=Bt(t[r],e[r]);return n}function DE(){return{app:null,config:{isNativeTag:JR,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let wS=0;function TS(t,e){return function(r,s=null){ue(r)||(r=it({},r)),s!=null&&!$e(s)&&(s=null);const i=DE(),o=new Set;let a=!1;const l=i.app={_uid:wS++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:QS,get config(){return i.config},set config(c){},use(c,...u){return o.has(c)||(c&&ue(c.install)?(o.add(c),c.install(l,...u)):ue(c)&&(o.add(c),c(l,...u))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,u){return u?(i.components[c]=u,l):i.components[c]},directive(c,u){return u?(i.directives[c]=u,l):i.directives[c]},mount(c,u,h){if(!a){const f=ge(r,s);return f.appContext=i,u&&e?e(f,c):t(f,c,h),a=!0,l._container=c,c.__vue_app__=l,Hp(f.component)||f.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return i.provides[c]=u,l},runWithContext(c){xa=l;try{return c()}finally{xa=null}}};return l}}let xa=null;function da(t,e){if(rt){let n=rt.provides;const r=rt.parent&&rt.parent.provides;r===n&&(n=rt.provides=Object.create(r)),n[t]=e}}function It(t,e,n=!1){const r=rt||bt;if(r||xa){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:xa._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&ue(e)?e.call(r&&r.proxy):e}}function bS(){return!!(rt||bt||xa)}function IS(t,e,n,r=!1){const s={},i={};Cc(i,ju,1),t.propsDefaults=Object.create(null),ME(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:dE(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function AS(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=Ie(s),[l]=t.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(Mu(t.emitsOptions,f))continue;const d=e[f];if(l)if(Re(i,f))d!==i[f]&&(i[f]=d,c=!0);else{const m=or(f);s[m]=Xf(l,a,m,d,t,!1)}else d!==i[f]&&(i[f]=d,c=!0)}}}else{ME(t,e,s,i)&&(c=!0);let u;for(const h in a)(!e||!Re(e,h)&&((u=vo(h))===h||!Re(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=Xf(l,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!Re(e,h))&&(delete i[h],c=!0)}c&&Er(t,"set","$attrs")}function ME(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(hc(l))continue;const c=e[l];let u;s&&Re(s,u=or(l))?!i||!i.includes(u)?n[u]=c:(a||(a={}))[u]=c:Mu(t.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=Ie(n),c=a||ze;for(let u=0;u<i.length;u++){const h=i[u];n[h]=Xf(s,l,h,c[h],t,!Re(c,h))}}return o}function Xf(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=Re(o,"default");if(a&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&ue(l)){const{propsDefaults:c}=s;n in c?r=c[n]:(Gi(s),r=c[n]=l.call(null,e),Ds())}else r=l}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===vo(n))&&(r=!0))}return r}function LE(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let l=!1;if(!ue(t)){const u=h=>{l=!0;const[f,d]=LE(h,e,!0);it(o,f),d&&a.push(...d)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!l)return $e(t)&&r.set(t,Di),Di;if(ne(i))for(let u=0;u<i.length;u++){const h=or(i[u]);__(h)&&(o[h]=ze)}else if(i)for(const u in i){const h=or(u);if(__(h)){const f=i[u],d=o[h]=ne(f)||ue(f)?{type:f}:it({},f);if(d){const m=E_(Boolean,d.type),p=E_(String,d.type);d[0]=m>-1,d[1]=p<0||m<p,(m>-1||Re(d,"default"))&&a.push(h)}}}const c=[o,a];return $e(t)&&r.set(t,c),c}function __(t){return t[0]!=="$"}function y_(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function v_(t,e){return y_(t)===y_(e)}function E_(t,e){return ne(e)?e.findIndex(n=>v_(n,t)):ue(e)&&v_(e,t)?0:-1}const VE=t=>t[0]==="_"||t==="$stable",Bp=t=>ne(t)?t.map(zn):[zn(t)],RS=(t,e,n)=>{if(e._n)return e;const r=ut((...s)=>Bp(e(...s)),n);return r._c=!1,r},$E=(t,e,n)=>{const r=t._ctx;for(const s in t){if(VE(s))continue;const i=t[s];if(ue(i))e[s]=RS(s,i,r);else if(i!=null){const o=Bp(i);e[s]=()=>o}}},FE=(t,e)=>{const n=Bp(e);t.slots.default=()=>n},CS=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=Ie(e),Cc(e,"_",n)):$E(e,t.slots={})}else t.slots={},e&&FE(t,e);Cc(t.slots,ju,1)},SS=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=ze;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(it(s,e),!n&&a===1&&delete s._):(i=!e.$stable,$E(e,s)),o=e}else e&&(FE(t,e),o={default:1});if(i)for(const a in s)!VE(a)&&!(a in o)&&delete s[a]};function Jf(t,e,n,r,s=!1){if(ne(t)){t.forEach((f,d)=>Jf(f,e&&(ne(e)?e[d]:e),n,r,s));return}if(ha(r)&&!s)return;const i=r.shapeFlag&4?Hp(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:l}=t,c=e&&e.r,u=a.refs===ze?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(nt(c)?(u[c]=null,Re(h,c)&&(h[c]=null)):Oe(c)&&(c.value=null)),ue(l))Jr(l,a,12,[o,u]);else{const f=nt(l),d=Oe(l);if(f||d){const m=()=>{if(t.f){const p=f?Re(h,l)?h[l]:u[l]:l.value;s?ne(p)&&wp(p,i):ne(p)?p.includes(i)||p.push(i):f?(u[l]=[i],Re(h,l)&&(h[l]=u[l])):(l.value=[i],t.k&&(u[t.k]=l.value))}else f?(u[l]=o,Re(h,l)&&(h[l]=o)):d&&(l.value=o,t.k&&(u[t.k]=o))};o?(m.id=-1,Kt(m,n)):m()}}}const Kt=ZC;function PS(t){return kS(t)}function kS(t,e){const n=Bf();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:d=On,insertStaticContent:m}=t,p=(_,v,A,S=null,N=null,x=null,W=!1,$=null,F=!!v.dynamicChildren)=>{if(_===v)return;_&&!Rs(_,v)&&(S=P(_),Wt(_,N,x,!0),_=null),v.patchFlag===-2&&(F=!1,v.dynamicChildren=null);const{type:L,ref:J,shapeFlag:Q}=v;switch(L){case Bu:g(_,v,A,S);break;case yn:y(_,v,A,S);break;case dc:_==null&&w(v,A,S,W);break;case sn:V(_,v,A,S,N,x,W,$,F);break;default:Q&1?k(_,v,A,S,N,x,W,$,F):Q&6?H(_,v,A,S,N,x,W,$,F):(Q&64||Q&128)&&L.process(_,v,A,S,N,x,W,$,F,B)}J!=null&&N&&Jf(J,_&&_.ref,x,v||_,!v)},g=(_,v,A,S)=>{if(_==null)r(v.el=a(v.children),A,S);else{const N=v.el=_.el;v.children!==_.children&&c(N,v.children)}},y=(_,v,A,S)=>{_==null?r(v.el=l(v.children||""),A,S):v.el=_.el},w=(_,v,A,S)=>{[_.el,_.anchor]=m(_.children,v,A,S,_.el,_.anchor)},b=({el:_,anchor:v},A,S)=>{let N;for(;_&&_!==v;)N=f(_),r(_,A,S),_=N;r(v,A,S)},T=({el:_,anchor:v})=>{let A;for(;_&&_!==v;)A=f(_),s(_),_=A;s(v)},k=(_,v,A,S,N,x,W,$,F)=>{W=W||v.type==="svg",_==null?I(v,A,S,N,x,W,$,F):R(_,v,N,x,W,$,F)},I=(_,v,A,S,N,x,W,$)=>{let F,L;const{type:J,props:Q,shapeFlag:Z,transition:le,dirs:pe}=_;if(F=_.el=o(_.type,x,Q&&Q.is,Q),Z&8?u(F,_.children):Z&16&&E(_.children,F,null,S,N,x&&J!=="foreignObject",W,$),pe&&vs(_,null,S,"created"),C(F,_,_.scopeId,W,S),Q){for(const De in Q)De!=="value"&&!hc(De)&&i(F,De,null,Q[De],x,_.children,S,N,St);"value"in Q&&i(F,"value",null,Q.value),(L=Q.onVnodeBeforeMount)&&jn(L,S,_)}pe&&vs(_,null,S,"beforeMount");const Ve=(!N||N&&!N.pendingBranch)&&le&&!le.persisted;Ve&&le.beforeEnter(F),r(F,v,A),((L=Q&&Q.onVnodeMounted)||Ve||pe)&&Kt(()=>{L&&jn(L,S,_),Ve&&le.enter(F),pe&&vs(_,null,S,"mounted")},N)},C=(_,v,A,S,N)=>{if(A&&d(_,A),S)for(let x=0;x<S.length;x++)d(_,S[x]);if(N){let x=N.subTree;if(v===x){const W=N.vnode;C(_,W,W.scopeId,W.slotScopeIds,N.parent)}}},E=(_,v,A,S,N,x,W,$,F=0)=>{for(let L=F;L<_.length;L++){const J=_[L]=$?jr(_[L]):zn(_[L]);p(null,J,v,A,S,N,x,W,$)}},R=(_,v,A,S,N,x,W)=>{const $=v.el=_.el;let{patchFlag:F,dynamicChildren:L,dirs:J}=v;F|=_.patchFlag&16;const Q=_.props||ze,Z=v.props||ze;let le;A&&Es(A,!1),(le=Z.onVnodeBeforeUpdate)&&jn(le,A,v,_),J&&vs(v,_,A,"beforeUpdate"),A&&Es(A,!0);const pe=N&&v.type!=="foreignObject";if(L?M(_.dynamicChildren,L,$,A,S,pe,x):W||de(_,v,$,null,A,S,pe,x,!1),F>0){if(F&16)U($,v,Q,Z,A,S,N);else if(F&2&&Q.class!==Z.class&&i($,"class",null,Z.class,N),F&4&&i($,"style",Q.style,Z.style,N),F&8){const Ve=v.dynamicProps;for(let De=0;De<Ve.length;De++){const Je=Ve[De],bn=Q[Je],pi=Z[Je];(pi!==bn||Je==="value")&&i($,Je,bn,pi,N,_.children,A,S,St)}}F&1&&_.children!==v.children&&u($,v.children)}else!W&&L==null&&U($,v,Q,Z,A,S,N);((le=Z.onVnodeUpdated)||J)&&Kt(()=>{le&&jn(le,A,v,_),J&&vs(v,_,A,"updated")},S)},M=(_,v,A,S,N,x,W)=>{for(let $=0;$<v.length;$++){const F=_[$],L=v[$],J=F.el&&(F.type===sn||!Rs(F,L)||F.shapeFlag&70)?h(F.el):A;p(F,L,J,null,S,N,x,W,!0)}},U=(_,v,A,S,N,x,W)=>{if(A!==S){if(A!==ze)for(const $ in A)!hc($)&&!($ in S)&&i(_,$,A[$],null,W,v.children,N,x,St);for(const $ in S){if(hc($))continue;const F=S[$],L=A[$];F!==L&&$!=="value"&&i(_,$,L,F,W,v.children,N,x,St)}"value"in S&&i(_,"value",A.value,S.value)}},V=(_,v,A,S,N,x,W,$,F)=>{const L=v.el=_?_.el:a(""),J=v.anchor=_?_.anchor:a("");let{patchFlag:Q,dynamicChildren:Z,slotScopeIds:le}=v;le&&($=$?$.concat(le):le),_==null?(r(L,A,S),r(J,A,S),E(v.children,A,J,N,x,W,$,F)):Q>0&&Q&64&&Z&&_.dynamicChildren?(M(_.dynamicChildren,Z,A,N,x,W,$),(v.key!=null||N&&v===N.subTree)&&UE(_,v,!0)):de(_,v,A,J,N,x,W,$,F)},H=(_,v,A,S,N,x,W,$,F)=>{v.slotScopeIds=$,_==null?v.shapeFlag&512?N.ctx.activate(v,A,S,W,F):ve(v,A,S,N,x,W,F):Se(_,v,F)},ve=(_,v,A,S,N,x,W)=>{const $=_.component=US(_,S,N);if(Vu(_)&&($.ctx.renderer=B),BS($),$.asyncDep){if(N&&N.registerDep($,K),!_.el){const F=$.subTree=ge(yn);y(null,F,v,A)}return}K($,_,v,A,N,x,W)},Se=(_,v,A)=>{const S=v.component=_.component;if(YC(_,v,A))if(S.asyncDep&&!S.asyncResolved){ae(S,v,A);return}else S.next=v,HC(S.update),S.update();else v.el=_.el,S.vnode=v},K=(_,v,A,S,N,x,W)=>{const $=()=>{if(_.isMounted){let{next:J,bu:Q,u:Z,parent:le,vnode:pe}=_,Ve=J,De;Es(_,!1),J?(J.el=pe.el,ae(_,J,W)):J=pe,Q&&zh(Q),(De=J.props&&J.props.onVnodeBeforeUpdate)&&jn(De,le,J,pe),Es(_,!0);const Je=Kh(_),bn=_.subTree;_.subTree=Je,p(bn,Je,h(bn.el),P(bn),_,N,x),J.el=Je.el,Ve===null&&XC(_,Je.el),Z&&Kt(Z,N),(De=J.props&&J.props.onVnodeUpdated)&&Kt(()=>jn(De,le,J,pe),N)}else{let J;const{el:Q,props:Z}=v,{bm:le,m:pe,parent:Ve}=_,De=ha(v);if(Es(_,!1),le&&zh(le),!De&&(J=Z&&Z.onVnodeBeforeMount)&&jn(J,Ve,v),Es(_,!0),Q&&Pe){const Je=()=>{_.subTree=Kh(_),Pe(Q,_.subTree,_,N,null)};De?v.type.__asyncLoader().then(()=>!_.isUnmounted&&Je()):Je()}else{const Je=_.subTree=Kh(_);p(null,Je,A,S,_,N,x),v.el=Je.el}if(pe&&Kt(pe,N),!De&&(J=Z&&Z.onVnodeMounted)){const Je=v;Kt(()=>jn(J,Ve,Je),N)}(v.shapeFlag&256||Ve&&ha(Ve.vnode)&&Ve.vnode.shapeFlag&256)&&_.a&&Kt(_.a,N),_.isMounted=!0,v=A=S=null}},F=_.effect=new Sp($,()=>Mp(L),_.scope),L=_.update=()=>F.run();L.id=_.uid,Es(_,!0),L()},ae=(_,v,A)=>{v.component=_;const S=_.vnode.props;_.vnode=v,_.next=null,AS(_,v.props,S,A),SS(_,v.children,A),wo(),c_(),To()},de=(_,v,A,S,N,x,W,$,F=!1)=>{const L=_&&_.children,J=_?_.shapeFlag:0,Q=v.children,{patchFlag:Z,shapeFlag:le}=v;if(Z>0){if(Z&128){en(L,Q,A,S,N,x,W,$,F);return}else if(Z&256){ot(L,Q,A,S,N,x,W,$,F);return}}le&8?(J&16&&St(L,N,x),Q!==L&&u(A,Q)):J&16?le&16?en(L,Q,A,S,N,x,W,$,F):St(L,N,x,!0):(J&8&&u(A,""),le&16&&E(Q,A,S,N,x,W,$,F))},ot=(_,v,A,S,N,x,W,$,F)=>{_=_||Di,v=v||Di;const L=_.length,J=v.length,Q=Math.min(L,J);let Z;for(Z=0;Z<Q;Z++){const le=v[Z]=F?jr(v[Z]):zn(v[Z]);p(_[Z],le,A,null,N,x,W,$,F)}L>J?St(_,N,x,!0,!1,Q):E(v,A,S,N,x,W,$,F,Q)},en=(_,v,A,S,N,x,W,$,F)=>{let L=0;const J=v.length;let Q=_.length-1,Z=J-1;for(;L<=Q&&L<=Z;){const le=_[L],pe=v[L]=F?jr(v[L]):zn(v[L]);if(Rs(le,pe))p(le,pe,A,null,N,x,W,$,F);else break;L++}for(;L<=Q&&L<=Z;){const le=_[Q],pe=v[Z]=F?jr(v[Z]):zn(v[Z]);if(Rs(le,pe))p(le,pe,A,null,N,x,W,$,F);else break;Q--,Z--}if(L>Q){if(L<=Z){const le=Z+1,pe=le<J?v[le].el:S;for(;L<=Z;)p(null,v[L]=F?jr(v[L]):zn(v[L]),A,pe,N,x,W,$,F),L++}}else if(L>Z)for(;L<=Q;)Wt(_[L],N,x,!0),L++;else{const le=L,pe=L,Ve=new Map;for(L=pe;L<=Z;L++){const tn=v[L]=F?jr(v[L]):zn(v[L]);tn.key!=null&&Ve.set(tn.key,L)}let De,Je=0;const bn=Z-pe+1;let pi=!1,Jg=0;const Uo=new Array(bn);for(L=0;L<bn;L++)Uo[L]=0;for(L=le;L<=Q;L++){const tn=_[L];if(Je>=bn){Wt(tn,N,x,!0);continue}let Bn;if(tn.key!=null)Bn=Ve.get(tn.key);else for(De=pe;De<=Z;De++)if(Uo[De-pe]===0&&Rs(tn,v[De])){Bn=De;break}Bn===void 0?Wt(tn,N,x,!0):(Uo[Bn-pe]=L+1,Bn>=Jg?Jg=Bn:pi=!0,p(tn,v[Bn],A,null,N,x,W,$,F),Je++)}const Zg=pi?NS(Uo):Di;for(De=Zg.length-1,L=bn-1;L>=0;L--){const tn=pe+L,Bn=v[tn],e_=tn+1<J?v[tn+1].el:S;Uo[L]===0?p(null,Bn,A,e_,N,x,W,$,F):pi&&(De<0||L!==Zg[De]?Ct(Bn,A,e_,2):De--)}}},Ct=(_,v,A,S,N=null)=>{const{el:x,type:W,transition:$,children:F,shapeFlag:L}=_;if(L&6){Ct(_.component.subTree,v,A,S);return}if(L&128){_.suspense.move(v,A,S);return}if(L&64){W.move(_,v,A,B);return}if(W===sn){r(x,v,A);for(let Q=0;Q<F.length;Q++)Ct(F[Q],v,A,S);r(_.anchor,v,A);return}if(W===dc){b(_,v,A);return}if(S!==2&&L&1&&$)if(S===0)$.beforeEnter(x),r(x,v,A),Kt(()=>$.enter(x),N);else{const{leave:Q,delayLeave:Z,afterLeave:le}=$,pe=()=>r(x,v,A),Ve=()=>{Q(x,()=>{pe(),le&&le()})};Z?Z(x,pe,Ve):Ve()}else r(x,v,A)},Wt=(_,v,A,S=!1,N=!1)=>{const{type:x,props:W,ref:$,children:F,dynamicChildren:L,shapeFlag:J,patchFlag:Q,dirs:Z}=_;if($!=null&&Jf($,null,A,_,!0),J&256){v.ctx.deactivate(_);return}const le=J&1&&Z,pe=!ha(_);let Ve;if(pe&&(Ve=W&&W.onVnodeBeforeUnmount)&&jn(Ve,v,_),J&6)Fl(_.component,A,S);else{if(J&128){_.suspense.unmount(A,S);return}le&&vs(_,null,v,"beforeUnmount"),J&64?_.type.remove(_,v,A,N,B,S):L&&(x!==sn||Q>0&&Q&64)?St(L,v,A,!1,!0):(x===sn&&Q&384||!N&&J&16)&&St(F,v,A),S&&fi(_)}(pe&&(Ve=W&&W.onVnodeUnmounted)||le)&&Kt(()=>{Ve&&jn(Ve,v,_),le&&vs(_,null,v,"unmounted")},A)},fi=_=>{const{type:v,el:A,anchor:S,transition:N}=_;if(v===sn){di(A,S);return}if(v===dc){T(_);return}const x=()=>{s(A),N&&!N.persisted&&N.afterLeave&&N.afterLeave()};if(_.shapeFlag&1&&N&&!N.persisted){const{leave:W,delayLeave:$}=N,F=()=>W(A,x);$?$(_.el,x,F):F()}else x()},di=(_,v)=>{let A;for(;_!==v;)A=f(_),s(_),_=A;s(v)},Fl=(_,v,A)=>{const{bum:S,scope:N,update:x,subTree:W,um:$}=_;S&&zh(S),N.stop(),x&&(x.active=!1,Wt(W,_,v,A)),$&&Kt($,v),Kt(()=>{_.isUnmounted=!0},v),v&&v.pendingBranch&&!v.isUnmounted&&_.asyncDep&&!_.asyncResolved&&_.suspenseId===v.pendingId&&(v.deps--,v.deps===0&&v.resolve())},St=(_,v,A,S=!1,N=!1,x=0)=>{for(let W=x;W<_.length;W++)Wt(_[W],v,A,S,N)},P=_=>_.shapeFlag&6?P(_.component.subTree):_.shapeFlag&128?_.suspense.next():f(_.anchor||_.el),z=(_,v,A)=>{_==null?v._vnode&&Wt(v._vnode,null,null,!0):p(v._vnode||null,_,v,null,null,null,A),c_(),TE(),v._vnode=_},B={p,um:Wt,m:Ct,r:fi,mt:ve,mc:E,pc:de,pbc:M,n:P,o:t};let X,Pe;return e&&([X,Pe]=e(B)),{render:z,hydrate:X,createApp:TS(z,X)}}function Es({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function UE(t,e,n=!1){const r=t.children,s=e.children;if(ne(r)&&ne(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=jr(s[i]),a.el=o.el),n||UE(o,a)),a.type===Bu&&(a.el=o.el)}}function NS(t){const e=t.slice(),n=[0];let r,s,i,o,a;const l=t.length;for(r=0;r<l;r++){const c=t[r];if(c!==0){if(s=n[n.length-1],t[s]<c){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<c?i=a+1:o=a;c<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const OS=t=>t.__isTeleport,sn=Symbol.for("v-fgt"),Bu=Symbol.for("v-txt"),yn=Symbol.for("v-cmt"),dc=Symbol.for("v-stc"),pa=[];let Cn=null;function Et(t=!1){pa.push(Cn=t?null:[])}function xS(){pa.pop(),Cn=pa[pa.length-1]||null}let Da=1;function w_(t){Da+=t}function BE(t){return t.dynamicChildren=Da>0?Cn||Di:null,xS(),Da>0&&Cn&&Cn.push(t),t}function cn(t,e,n,r,s,i){return BE(fe(t,e,n,r,s,i,!0))}function Oc(t,e,n,r,s){return BE(ge(t,e,n,r,s,!0))}function xc(t){return t?t.__v_isVNode===!0:!1}function Rs(t,e){return t.type===e.type&&t.key===e.key}const ju="__vInternal",jE=({key:t})=>t??null,pc=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?nt(t)||Oe(t)||ue(t)?{i:bt,r:t,k:e,f:!!n}:t:null);function fe(t,e=null,n=null,r=0,s=null,i=t===sn?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&jE(e),ref:e&&pc(e),scopeId:AE,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:bt};return a?(jp(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=nt(n)?8:16),Da>0&&!o&&Cn&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Cn.push(l),l}const ge=DS;function DS(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===dS)&&(t=yn),xc(t)){const a=ss(t,e,!0);return n&&jp(a,n),Da>0&&!i&&Cn&&(a.shapeFlag&6?Cn[Cn.indexOf(t)]=a:Cn.push(a)),a.patchFlag|=-2,a}if(zS(t)&&(t=t.__vccOpts),e){e=MS(e);let{class:a,style:l}=e;a&&!nt(a)&&(e.class=Ap(a)),$e(l)&&(mE(l)&&!ne(l)&&(l=it({},l)),e.style=Ip(l))}const o=nt(t)?1:JC(t)?128:OS(t)?64:$e(t)?4:ue(t)?2:0;return fe(t,e,n,r,s,o,i,!0)}function MS(t){return t?mE(t)||ju in t?it({},t):t:null}function ss(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?VS(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&jE(a),ref:e&&e.ref?n&&s?ne(s)?s.concat(pc(e)):[s,pc(e)]:pc(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==sn?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&ss(t.ssContent),ssFallback:t.ssFallback&&ss(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function gt(t=" ",e=0){return ge(Bu,null,t,e)}function KB(t,e){const n=ge(dc,null,t);return n.staticCount=e,n}function LS(t="",e=!1){return e?(Et(),Oc(yn,null,t)):ge(yn,null,t)}function zn(t){return t==null||typeof t=="boolean"?ge(yn):ne(t)?ge(sn,null,t.slice()):typeof t=="object"?jr(t):ge(Bu,null,String(t))}function jr(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:ss(t)}function jp(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ne(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),jp(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(ju in e)?e._ctx=bt:s===3&&bt&&(bt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ue(e)?(e={default:e,_ctx:bt},n=32):(e=String(e),r&64?(n=16,e=[gt(e)]):n=8);t.children=e,t.shapeFlag|=n}function VS(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Ap([e.class,r.class]));else if(s==="style")e.style=Ip([e.style,r.style]);else if(Su(s)){const i=e[s],o=r[s];o&&i!==o&&!(ne(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function jn(t,e,n,r=null){_n(t,e,7,[n,r])}const $S=DE();let FS=0;function US(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||$S,i={uid:FS++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new nE(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:LE(r,s),emitsOptions:IE(r,s),emit:null,emitted:null,propsDefaults:ze,inheritAttrs:r.inheritAttrs,ctx:ze,data:ze,props:ze,attrs:ze,slots:ze,refs:ze,setupState:ze,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=KC.bind(null,i),t.ce&&t.ce(i),i}let rt=null;const Ar=()=>rt||bt;let qp,mi,T_="__VUE_INSTANCE_SETTERS__";(mi=Bf()[T_])||(mi=Bf()[T_]=[]),mi.push(t=>rt=t),qp=t=>{mi.length>1?mi.forEach(e=>e(t)):mi[0](t)};const Gi=t=>{qp(t),t.scope.on()},Ds=()=>{rt&&rt.scope.off(),qp(null)};function qE(t){return t.vnode.shapeFlag&4}let Ma=!1;function BS(t,e=!1){Ma=e;const{props:n,children:r}=t.vnode,s=qE(t);IS(t,n,s,e),CS(t,r);const i=s?jS(t,e):void 0;return Ma=!1,i}function jS(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=bo(new Proxy(t.ctx,mS));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?HS(t):null;Gi(t),wo();const i=Jr(r,t,0,[t.props,s]);if(To(),Ds(),X0(i)){if(i.then(Ds,Ds),e)return i.then(o=>{b_(t,o,e)}).catch(o=>{xu(o,t,0)});t.asyncDep=i}else b_(t,i,e)}else HE(t,e)}function b_(t,e,n){ue(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:$e(e)&&(t.setupState=yE(e)),HE(t,n)}let I_;function HE(t,e,n){const r=t.type;if(!t.render){if(!e&&I_&&!r.render){const s=r.template||Up(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=r,c=it(it({isCustomElement:i,delimiters:a},o),l);r.render=I_(s,c)}}t.render=r.render||On}{Gi(t),wo();try{gS(t)}finally{To(),Ds()}}}function qS(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return Zt(t,"get","$attrs"),e[n]}}))}function HS(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return qS(t)},slots:t.slots,emit:t.emit,expose:e}}function Hp(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(yE(bo(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in fa)return fa[n](t)},has(e,n){return n in e||n in fa}}))}function WS(t,e=!0){return ue(t)?t.displayName||t.name:t.name||e&&t.__name}function zS(t){return ue(t)&&"__vccOpts"in t}const Xe=(t,e)=>BC(t,e,Ma);function Qi(t,e,n){const r=arguments.length;return r===2?$e(e)&&!ne(e)?xc(e)?ge(t,null,[e]):ge(t,e):ge(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&xc(n)&&(n=[n]),ge(t,e,n))}const KS=Symbol.for("v-scx"),GS=()=>It(KS),QS="3.3.5",YS="http://www.w3.org/2000/svg",Cs=typeof document<"u"?document:null,A_=Cs&&Cs.createElement("template"),XS={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?Cs.createElementNS(YS,t):Cs.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Cs.createTextNode(t),createComment:t=>Cs.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Cs.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{A_.innerHTML=r?`<svg>${t}</svg>`:t;const a=A_.content;if(r){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Lr="transition",Bo="animation",La=Symbol("_vtc"),Wp=(t,{slots:e})=>Qi(rS,JS(t),e);Wp.displayName="Transition";const WE={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Wp.props=it({},CE,WE);const ws=(t,e=[])=>{ne(t)?t.forEach(n=>n(...e)):t&&t(...e)},R_=t=>t?ne(t)?t.some(e=>e.length>1):t.length>1:!1;function JS(t){const e={};for(const V in t)V in WE||(e[V]=t[V]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=i,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:d=`${n}-leave-to`}=t,m=ZS(s),p=m&&m[0],g=m&&m[1],{onBeforeEnter:y,onEnter:w,onEnterCancelled:b,onLeave:T,onLeaveCancelled:k,onBeforeAppear:I=y,onAppear:C=w,onAppearCancelled:E=b}=e,R=(V,H,ve)=>{Ts(V,H?u:a),Ts(V,H?c:o),ve&&ve()},M=(V,H)=>{V._isLeaving=!1,Ts(V,h),Ts(V,d),Ts(V,f),H&&H()},U=V=>(H,ve)=>{const Se=V?C:w,K=()=>R(H,V,ve);ws(Se,[H,K]),C_(()=>{Ts(H,V?l:i),Vr(H,V?u:a),R_(Se)||S_(H,r,p,K)})};return it(e,{onBeforeEnter(V){ws(y,[V]),Vr(V,i),Vr(V,o)},onBeforeAppear(V){ws(I,[V]),Vr(V,l),Vr(V,c)},onEnter:U(!1),onAppear:U(!0),onLeave(V,H){V._isLeaving=!0;const ve=()=>M(V,H);Vr(V,h),n1(),Vr(V,f),C_(()=>{V._isLeaving&&(Ts(V,h),Vr(V,d),R_(T)||S_(V,r,g,ve))}),ws(T,[V,ve])},onEnterCancelled(V){R(V,!1),ws(b,[V])},onAppearCancelled(V){R(V,!0),ws(E,[V])},onLeaveCancelled(V){M(V),ws(k,[V])}})}function ZS(t){if(t==null)return null;if($e(t))return[Yh(t.enter),Yh(t.leave)];{const e=Yh(t);return[e,e]}}function Yh(t){return iC(t)}function Vr(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[La]||(t[La]=new Set)).add(e)}function Ts(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[La];n&&(n.delete(e),n.size||(t[La]=void 0))}function C_(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let e1=0;function S_(t,e,n,r){const s=t._endId=++e1,i=()=>{s===t._endId&&r()};if(n)return setTimeout(i,n);const{type:o,timeout:a,propCount:l}=t1(t,e);if(!o)return r();const c=o+"end";let u=0;const h=()=>{t.removeEventListener(c,f),i()},f=d=>{d.target===t&&++u>=l&&h()};setTimeout(()=>{u<l&&h()},a+1),t.addEventListener(c,f)}function t1(t,e){const n=window.getComputedStyle(t),r=m=>(n[m]||"").split(", "),s=r(`${Lr}Delay`),i=r(`${Lr}Duration`),o=P_(s,i),a=r(`${Bo}Delay`),l=r(`${Bo}Duration`),c=P_(a,l);let u=null,h=0,f=0;e===Lr?o>0&&(u=Lr,h=o,f=i.length):e===Bo?c>0&&(u=Bo,h=c,f=l.length):(h=Math.max(o,c),u=h>0?o>c?Lr:Bo:null,f=u?u===Lr?i.length:l.length:0);const d=u===Lr&&/\b(transform|all)(,|$)/.test(r(`${Lr}Property`).toString());return{type:u,timeout:h,propCount:f,hasTransform:d}}function P_(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>k_(n)+k_(t[r])))}function k_(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function n1(){return document.body.offsetHeight}function r1(t,e,n){const r=t[La];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const s1=Symbol("_vod");function i1(t,e,n){const r=t.style,s=nt(n);if(n&&!s){if(e&&!nt(e))for(const i in e)n[i]==null&&Zf(r,i,"");for(const i in n)Zf(r,i,n[i])}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),s1 in t&&(r.display=i)}}const N_=/\s*!important$/;function Zf(t,e,n){if(ne(n))n.forEach(r=>Zf(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=o1(t,e);N_.test(n)?t.setProperty(vo(r),n.replace(N_,""),"important"):t[r]=n}}const O_=["Webkit","Moz","ms"],Xh={};function o1(t,e){const n=Xh[e];if(n)return n;let r=or(e);if(r!=="filter"&&r in t)return Xh[e]=r;r=Nu(r);for(let s=0;s<O_.length;s++){const i=O_[s]+r;if(i in t)return Xh[e]=i}return e}const x_="http://www.w3.org/1999/xlink";function a1(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(x_,e.slice(6,e.length)):t.setAttributeNS(x_,e,n);else{const i=hC(e);n==null||i&&!eE(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function l1(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const c=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";c!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=eE(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function c1(t,e,n,r){t.addEventListener(e,n,r)}function u1(t,e,n,r){t.removeEventListener(e,n,r)}const D_=Symbol("_vei");function h1(t,e,n,r,s=null){const i=t[D_]||(t[D_]={}),o=i[e];if(r&&o)o.value=r;else{const[a,l]=f1(e);if(r){const c=i[e]=m1(r,s);c1(t,a,c,l)}else o&&(u1(t,a,o,l),i[e]=void 0)}}const M_=/(?:Once|Passive|Capture)$/;function f1(t){let e;if(M_.test(t)){e={};let r;for(;r=t.match(M_);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):vo(t.slice(2)),e]}let Jh=0;const d1=Promise.resolve(),p1=()=>Jh||(d1.then(()=>Jh=0),Jh=Date.now());function m1(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;_n(g1(r,n.value),e,5,[r])};return n.value=t,n.attached=p1(),n}function g1(t,e){if(ne(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const L_=/^on[a-z]/,_1=(t,e,n,r,s=!1,i,o,a,l)=>{e==="class"?r1(t,r,s):e==="style"?i1(t,n,r):Su(e)?Ep(e)||h1(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):y1(t,e,r,s))?l1(t,e,r,i,o,a,l):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),a1(t,e,r,s))};function y1(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&L_.test(e)&&ue(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||L_.test(e)&&nt(n)?!1:e in t}const v1=it({patchProp:_1},XS);let V_;function E1(){return V_||(V_=PS(v1))}const w1=(...t)=>{const e=E1().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=T1(r);if(!s)return;const i=e._component;!ue(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function T1(t){return nt(t)?document.querySelector(t):t}var b1=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let zE;const qu=t=>zE=t,KE=Symbol();function ed(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var ma;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(ma||(ma={}));function I1(){const t=Rp(!0),e=t.run(()=>Me({}));let n=[],r=[];const s=bo({install(i){qu(s),s._a=i,i.provide(KE,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!b1?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const GE=()=>{};function $_(t,e,n,r=GE){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&Eo()&&cl(s),s}function gi(t,...e){t.slice().forEach(n=>{n(...e)})}const A1=t=>t();function td(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,r)=>t.set(r,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];ed(s)&&ed(r)&&t.hasOwnProperty(n)&&!Oe(r)&&!tr(r)?t[n]=td(s,r):t[n]=r}return t}const R1=Symbol();function C1(t){return!ed(t)||!t.hasOwnProperty(R1)}const{assign:Ur}=Object;function S1(t){return!!(Oe(t)&&t.effect)}function P1(t,e,n,r){const{state:s,actions:i,getters:o}=e,a=n.state.value[t];let l;function c(){a||(n.state.value[t]=s?s():{});const u=LC(n.state.value[t]);return Ur(u,i,Object.keys(o||{}).reduce((h,f)=>(h[f]=bo(Xe(()=>{qu(n);const d=n._s.get(t);return o[f].call(d,d)})),h),{}))}return l=QE(t,c,e,n,r,!0),l}function QE(t,e,n={},r,s,i){let o;const a=Ur({actions:{}},n),l={deep:!0};let c,u,h=[],f=[],d;const m=r.state.value[t];!i&&!m&&(r.state.value[t]={}),Me({});let p;function g(E){let R;c=u=!1,typeof E=="function"?(E(r.state.value[t]),R={type:ma.patchFunction,storeId:t,events:d}):(td(r.state.value[t],E),R={type:ma.patchObject,payload:E,storeId:t,events:d});const M=p=Symbol();Du().then(()=>{p===M&&(c=!0)}),u=!0,gi(h,R,r.state.value[t])}const y=i?function(){const{state:R}=n,M=R?R():{};this.$patch(U=>{Ur(U,M)})}:GE;function w(){o.stop(),h=[],f=[],r._s.delete(t)}function b(E,R){return function(){qu(r);const M=Array.from(arguments),U=[],V=[];function H(K){U.push(K)}function ve(K){V.push(K)}gi(f,{args:M,name:E,store:k,after:H,onError:ve});let Se;try{Se=R.apply(this&&this.$id===t?this:k,M)}catch(K){throw gi(V,K),K}return Se instanceof Promise?Se.then(K=>(gi(U,K),K)).catch(K=>(gi(V,K),Promise.reject(K))):(gi(U,Se),Se)}}const T={_p:r,$id:t,$onAction:$_.bind(null,f),$patch:g,$reset:y,$subscribe(E,R={}){const M=$_(h,E,R.detached,()=>U()),U=o.run(()=>Yt(()=>r.state.value[t],V=>{(R.flush==="sync"?u:c)&&E({storeId:t,type:ma.direct,events:d},V)},Ur({},l,R)));return M},$dispose:w},k=Qn(T);r._s.set(t,k);const C=(r._a&&r._a.runWithContext||A1)(()=>r._e.run(()=>(o=Rp()).run(e)));for(const E in C){const R=C[E];if(Oe(R)&&!S1(R)||tr(R))i||(m&&C1(R)&&(Oe(R)?R.value=m[E]:td(R,m[E])),r.state.value[t][E]=R);else if(typeof R=="function"){const M=b(E,R);C[E]=M,a.actions[E]=R}}return Ur(k,C),Ur(Ie(k),C),Object.defineProperty(k,"$state",{get:()=>r.state.value[t],set:E=>{g(R=>{Ur(R,E)})}}),r._p.forEach(E=>{Ur(k,o.run(()=>E({store:k,app:r._a,pinia:r,options:a})))}),m&&i&&n.hydrate&&n.hydrate(k.$state,m),c=!0,u=!0,k}function k1(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function o(a,l){const c=bS();return a=a||(c?It(KE,null):null),a&&qu(a),a=zE,a._s.has(r)||(i?QE(r,e,s,a):P1(r,s,a)),a._s.get(r)}return o.$id=r,o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YE={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j=function(t,e){if(!t)throw Io(e)},Io=function(t){return new Error("Firebase Database ("+YE.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},N1=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Hu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,c=l?t[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|c>>6,d=c&63;l||(d=64,o||(f=64)),r.push(n[u],n[h],n[f],n[d])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(XE(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):N1(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||c==null||h==null)throw new O1;const f=i<<2|a>>4;if(r.push(f),c!==64){const d=a<<4&240|c>>2;if(r.push(d),h!==64){const m=c<<6&192|h;r.push(m)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class O1 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const JE=function(t){const e=XE(t);return Hu.encodeByteArray(e,!0)},Dc=function(t){return JE(t).replace(/\./g,"")},Mc=function(t){try{return Hu.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x1(t){return ZE(void 0,t)}function ZE(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!D1(n)||(t[n]=ZE(t[n],e[n]));return t}function D1(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M1(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L1=()=>M1().__FIREBASE_DEFAULTS__,V1=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},$1=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Mc(t[1]);return e&&JSON.parse(e)},Wu=()=>{try{return L1()||V1()||$1()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},ew=t=>{var e,n;return(n=(e=Wu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},tw=t=>{const e=ew(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},nw=()=>{var t;return(t=Wu())===null||t===void 0?void 0:t.config},rw=t=>{var e;return(e=Wu())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sw(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Dc(JSON.stringify(n)),Dc(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $t(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function zp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test($t())}function F1(){var t;const e=(t=Wu())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function U1(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function iw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function B1(){const t=$t();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function ow(){return YE.NODE_ADMIN===!0}function aw(){try{return typeof indexedDB=="object"}catch{return!1}}function j1(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q1="FirebaseError";class ur extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=q1,Object.setPrototypeOf(this,ur.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ao.prototype.create)}}class Ao{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?H1(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new ur(s,a,r)}}function H1(t,e){return t.replace(W1,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const W1=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $a(t){return JSON.parse(t)}function wt(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lw=function(t){let e={},n={},r={},s="";try{const i=t.split(".");e=$a(Mc(i[0])||""),n=$a(Mc(i[1])||""),s=i[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:s}},z1=function(t){const e=lw(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},K1=function(t){const e=lw(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dr(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Yi(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function nd(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Lc(t,e,n){const r={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(r[s]=e.call(n,t[s],s,t));return r}function Vc(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(F_(i)&&F_(o)){if(!Vc(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function F_(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ro(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Zo(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function ea(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G1{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)r[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)r[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const f=r[h-3]^r[h-8]^r[h-14]^r[h-16];r[h]=(f<<1|f>>>31)&4294967295}let s=this.chain_[0],i=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^i&(o^a),u=1518500249):(c=i^o^a,u=1859775393):h<60?(c=i&o|a&(i|o),u=2400959708):(c=i^o^a,u=3395469782);const f=(s<<5|s>>>27)+c+l+u+r[h]&4294967295;l=a,a=o,o=(i<<30|i>>>2)&4294967295,i=s,s=f}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+i&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let s=0;const i=this.buf_;let o=this.inbuf_;for(;s<n;){if(o===0)for(;s<=r;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<n;)if(i[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}else for(;s<n;)if(i[o]=e[s],++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let s=0;s<5;s++)for(let i=24;i>=0;i-=8)e[r]=this.chain_[s]>>i&255,++r;return e}}function Q1(t,e){const n=new Y1(t,e);return n.subscribe.bind(n)}class Y1{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");X1(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Zh),s.error===void 0&&(s.error=Zh),s.complete===void 0&&(s.complete=Zh);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function X1(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Zh(){}function J1(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z1=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);if(s>=55296&&s<=56319){const i=s-55296;r++,j(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;s=65536+(i<<10)+o}s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):s<65536?(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},zu=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fe(t){return t&&t._delegate?t._delegate:t}class Mn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bs="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eP{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Va;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(nP(e))try{this.getOrInitializeService({instanceIdentifier:bs})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=bs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=bs){return this.instances.has(e)}getOptions(e=bs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:tP(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=bs){return this.component?this.component.multipleInstances?e:bs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function tP(t){return t===bs?void 0:t}function nP(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rP{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new eP(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var me;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(me||(me={}));const sP={debug:me.DEBUG,verbose:me.VERBOSE,info:me.INFO,warn:me.WARN,error:me.ERROR,silent:me.SILENT},iP=me.INFO,oP={[me.DEBUG]:"log",[me.VERBOSE]:"log",[me.INFO]:"info",[me.WARN]:"warn",[me.ERROR]:"error"},aP=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=oP[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ul{constructor(e){this.name=e,this._logLevel=iP,this._logHandler=aP,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in me))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?sP[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,me.DEBUG,...e),this._logHandler(this,me.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,me.VERBOSE,...e),this._logHandler(this,me.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,me.INFO,...e),this._logHandler(this,me.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,me.WARN,...e),this._logHandler(this,me.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,me.ERROR,...e),this._logHandler(this,me.ERROR,...e)}}const lP=(t,e)=>e.some(n=>t instanceof n);let U_,B_;function cP(){return U_||(U_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function uP(){return B_||(B_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const cw=new WeakMap,rd=new WeakMap,uw=new WeakMap,ef=new WeakMap,Kp=new WeakMap;function hP(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Zr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&cw.set(n,t)}).catch(()=>{}),Kp.set(e,t),e}function fP(t){if(rd.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});rd.set(t,e)}let sd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return rd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||uw.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Zr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function dP(t){sd=t(sd)}function pP(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(tf(this),e,...n);return uw.set(r,e.sort?e.sort():[e]),Zr(r)}:uP().includes(t)?function(...e){return t.apply(tf(this),e),Zr(cw.get(this))}:function(...e){return Zr(t.apply(tf(this),e))}}function mP(t){return typeof t=="function"?pP(t):(t instanceof IDBTransaction&&fP(t),lP(t,cP())?new Proxy(t,sd):t)}function Zr(t){if(t instanceof IDBRequest)return hP(t);if(ef.has(t))return ef.get(t);const e=mP(t);return e!==t&&(ef.set(t,e),Kp.set(e,t)),e}const tf=t=>Kp.get(t);function gP(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Zr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Zr(o.result),l.oldVersion,l.newVersion,Zr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const _P=["get","getKey","getAll","getAllKeys","count"],yP=["put","add","delete","clear"],nf=new Map;function j_(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(nf.get(e))return nf.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=yP.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||_P.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&l.done]))[0]};return nf.set(e,i),i}dP(t=>({...t,get:(e,n,r)=>j_(e,n)||t.get(e,n,r),has:(e,n)=>!!j_(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vP{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(EP(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function EP(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const id="@firebase/app",q_="0.9.20";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const js=new ul("@firebase/app"),wP="@firebase/app-compat",TP="@firebase/analytics-compat",bP="@firebase/analytics",IP="@firebase/app-check-compat",AP="@firebase/app-check",RP="@firebase/auth",CP="@firebase/auth-compat",SP="@firebase/database",PP="@firebase/database-compat",kP="@firebase/functions",NP="@firebase/functions-compat",OP="@firebase/installations",xP="@firebase/installations-compat",DP="@firebase/messaging",MP="@firebase/messaging-compat",LP="@firebase/performance",VP="@firebase/performance-compat",$P="@firebase/remote-config",FP="@firebase/remote-config-compat",UP="@firebase/storage",BP="@firebase/storage-compat",jP="@firebase/firestore",qP="@firebase/firestore-compat",HP="firebase",WP="10.5.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const od="[DEFAULT]",zP={[id]:"fire-core",[wP]:"fire-core-compat",[bP]:"fire-analytics",[TP]:"fire-analytics-compat",[AP]:"fire-app-check",[IP]:"fire-app-check-compat",[RP]:"fire-auth",[CP]:"fire-auth-compat",[SP]:"fire-rtdb",[PP]:"fire-rtdb-compat",[kP]:"fire-fn",[NP]:"fire-fn-compat",[OP]:"fire-iid",[xP]:"fire-iid-compat",[DP]:"fire-fcm",[MP]:"fire-fcm-compat",[LP]:"fire-perf",[VP]:"fire-perf-compat",[$P]:"fire-rc",[FP]:"fire-rc-compat",[UP]:"fire-gcs",[BP]:"fire-gcs-compat",[jP]:"fire-fst",[qP]:"fire-fst-compat","fire-js":"fire-js",[HP]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $c=new Map,ad=new Map;function KP(t,e){try{t.container.addComponent(e)}catch(n){js.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ar(t){const e=t.name;if(ad.has(e))return js.debug(`There were multiple attempts to register component ${e}.`),!1;ad.set(e,t);for(const n of $c.values())KP(n,t);return!0}function Ku(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GP={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},es=new Ao("app","Firebase",GP);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QP{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Mn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw es.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hs=WP;function hw(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:od,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw es.create("bad-app-name",{appName:String(s)});if(n||(n=nw()),!n)throw es.create("no-options");const i=$c.get(s);if(i){if(Vc(n,i.options)&&Vc(r,i.config))return i;throw es.create("duplicate-app",{appName:s})}const o=new rP(s);for(const l of ad.values())o.addComponent(l);const a=new QP(n,r,o);return $c.set(s,a),a}function Gu(t=od){const e=$c.get(t);if(!e&&t===od&&nw())return hw();if(!e)throw es.create("no-app",{appName:t});return e}function un(t,e,n){var r;let s=(r=zP[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),js.warn(a.join(" "));return}ar(new Mn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YP="firebase-heartbeat-database",XP=1,Fa="firebase-heartbeat-store";let rf=null;function fw(){return rf||(rf=gP(YP,XP,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Fa)}}}).catch(t=>{throw es.create("idb-open",{originalErrorMessage:t.message})})),rf}async function JP(t){try{return await(await fw()).transaction(Fa).objectStore(Fa).get(dw(t))}catch(e){if(e instanceof ur)js.warn(e.message);else{const n=es.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});js.warn(n.message)}}}async function H_(t,e){try{const r=(await fw()).transaction(Fa,"readwrite");await r.objectStore(Fa).put(e,dw(t)),await r.done}catch(n){if(n instanceof ur)js.warn(n.message);else{const r=es.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});js.warn(r.message)}}}function dw(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZP=1024,ek=30*24*60*60*1e3;class tk{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new rk(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=W_();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=ek}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=W_(),{heartbeatsToSend:n,unsentEntries:r}=nk(this._heartbeatsCache.heartbeats),s=Dc(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function W_(){return new Date().toISOString().substring(0,10)}function nk(t,e=ZP){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),z_(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),z_(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class rk{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return aw()?j1().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await JP(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return H_(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return H_(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function z_(t){return Dc(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sk(t){ar(new Mn("platform-logger",e=>new vP(e),"PRIVATE")),ar(new Mn("heartbeat",e=>new tk(e),"PRIVATE")),un(id,q_,t),un(id,q_,"esm2017"),un("fire-js","")}sk("");function Gp(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function K_(t){return t!==void 0&&t.enterprise!==void 0}class ik{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}function pw(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ok=pw,mw=new Ao("auth","Firebase",pw());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fc=new ul("@firebase/auth");function ak(t,...e){Fc.logLevel<=me.WARN&&Fc.warn(`Auth (${hs}): ${t}`,...e)}function mc(t,...e){Fc.logLevel<=me.ERROR&&Fc.error(`Auth (${hs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ln(t,...e){throw Qp(t,...e)}function nr(t,...e){return Qp(t,...e)}function lk(t,e,n){const r=Object.assign(Object.assign({},ok()),{[e]:n});return new Ao("auth","Firebase",r).create(e,{appName:t.name})}function Qp(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return mw.create(t,...e)}function re(t,e,...n){if(!t)throw Qp(e,...n)}function mr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw mc(e),new Error(e)}function Rr(t,e){t||mr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ld(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function ck(){return G_()==="http:"||G_()==="https:"}function G_(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uk(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ck()||U1()||"connection"in navigator)?navigator.onLine:!0}function hk(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{constructor(e,n){this.shortDelay=e,this.longDelay=n,Rr(n>e,"Short delay should be less than long delay!"),this.isMobile=zp()||iw()}get(){return uk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yp(t,e){Rr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gw{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;mr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;mr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;mr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fk={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dk=new hl(3e4,6e4);function Co(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ti(t,e,n,r,s={}){return _w(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Ro(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),gw.fetch()(yw(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},i))})}async function _w(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},fk),e);try{const s=new pk(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Gl(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Gl(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Gl(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Gl(t,"user-disabled",o);const u=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw lk(t,u,c);Ln(t,u)}}catch(s){if(s instanceof ur)throw s;Ln(t,"network-request-failed",{message:String(s)})}}async function Qu(t,e,n,r,s={}){const i=await ti(t,e,n,r,s);return"mfaPendingCredential"in i&&Ln(t,"multi-factor-auth-required",{_serverResponse:i}),i}function yw(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Yp(t.config,s):`${t.config.apiScheme}://${s}`}class pk{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(nr(this.auth,"network-request-failed")),dk.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Gl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=nr(t,e,r);return s.customData._tokenResponse=n,s}async function mk(t,e){return ti(t,"GET","/v2/recaptchaConfig",Co(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gk(t,e){return ti(t,"POST","/v1/accounts:delete",e)}async function _k(t,e){return ti(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ga(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function yk(t,e=!1){const n=Fe(t),r=await n.getIdToken(e),s=Xp(r);re(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:ga(sf(s.auth_time)),issuedAtTime:ga(sf(s.iat)),expirationTime:ga(sf(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function sf(t){return Number(t)*1e3}function Xp(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return mc("JWT malformed, contained fewer than 3 sections"),null;try{const s=Mc(n);return s?JSON.parse(s):(mc("Failed to decode base64 JWT payload"),null)}catch(s){return mc("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function vk(t){const e=Xp(t);return re(e,"internal-error"),re(typeof e.exp<"u","internal-error"),re(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ua(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof ur&&Ek(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Ek({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wk{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vw{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ga(this.lastLoginAt),this.creationTime=ga(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Uc(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Ua(t,_k(n,{idToken:r}));re(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Ik(i.providerUserInfo):[],a=bk(t.providerData,o),l=t.isAnonymous,c=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new vw(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function Tk(t){const e=Fe(t);await Uc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function bk(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Ik(t){return t.map(e=>{var{providerId:n}=e,r=Gp(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ak(t,e){const n=await _w(t,{},async()=>{const r=Ro({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=yw(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",gw.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){re(e.idToken,"internal-error"),re(typeof e.idToken<"u","internal-error"),re(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):vk(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return re(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await Ak(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Ba;return r&&(re(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(re(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(re(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ba,this.toJSON())}_performRefresh(){return mr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $r(t,e){re(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ms{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Gp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new wk(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new vw(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Ua(this,this.stsTokenManager.getToken(this.auth,e));return re(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return yk(this,e)}reload(){return Tk(this)}_assign(e){this!==e&&(re(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ms(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){re(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Uc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Ua(this,gk(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,l,c,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(s=n.email)!==null&&s!==void 0?s:void 0,d=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,p=(a=n.tenantId)!==null&&a!==void 0?a:void 0,g=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,y=(c=n.createdAt)!==null&&c!==void 0?c:void 0,w=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:b,emailVerified:T,isAnonymous:k,providerData:I,stsTokenManager:C}=n;re(b&&C,e,"internal-error");const E=Ba.fromJSON(this.name,C);re(typeof b=="string",e,"internal-error"),$r(h,e.name),$r(f,e.name),re(typeof T=="boolean",e,"internal-error"),re(typeof k=="boolean",e,"internal-error"),$r(d,e.name),$r(m,e.name),$r(p,e.name),$r(g,e.name),$r(y,e.name),$r(w,e.name);const R=new Ms({uid:b,auth:e,email:f,emailVerified:T,displayName:h,isAnonymous:k,photoURL:m,phoneNumber:d,tenantId:p,stsTokenManager:E,createdAt:y,lastLoginAt:w});return I&&Array.isArray(I)&&(R.providerData=I.map(M=>Object.assign({},M))),g&&(R._redirectEventId=g),R}static async _fromIdTokenResponse(e,n,r=!1){const s=new Ba;s.updateFromServerResponse(n);const i=new Ms({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Uc(i),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q_=new Map;function gr(t){Rr(t instanceof Function,"Expected a class definition");let e=Q_.get(t);return e?(Rr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Q_.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ew{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Ew.type="NONE";const Y_=Ew;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gc(t,e,n){return`firebase:${t}:${e}:${n}`}class Vi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=gc(this.userKey,s.apiKey,i),this.fullPersistenceKey=gc("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ms._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Vi(gr(Y_),e,r);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=s[0]||gr(Y_);const o=gc(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=Ms._fromJSON(e,u);c!==i&&(a=h),i=c;break}}catch{}const l=s.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Vi(i,e,r):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new Vi(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X_(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(bw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ww(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Aw(e))return"Blackberry";if(Rw(e))return"Webos";if(Jp(e))return"Safari";if((e.includes("chrome/")||Tw(e))&&!e.includes("edge/"))return"Chrome";if(Iw(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function ww(t=$t()){return/firefox\//i.test(t)}function Jp(t=$t()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Tw(t=$t()){return/crios\//i.test(t)}function bw(t=$t()){return/iemobile/i.test(t)}function Iw(t=$t()){return/android/i.test(t)}function Aw(t=$t()){return/blackberry/i.test(t)}function Rw(t=$t()){return/webos/i.test(t)}function Yu(t=$t()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Rk(t=$t()){var e;return Yu(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Ck(){return B1()&&document.documentMode===10}function Cw(t=$t()){return Yu(t)||Iw(t)||Rw(t)||Aw(t)||/windows phone/i.test(t)||bw(t)}function Sk(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sw(t,e=[]){let n;switch(t){case"Browser":n=X_($t());break;case"Worker":n=`${X_($t())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${hs}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pk{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const l=e(i);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kk(t,e={}){return ti(t,"GET","/v2/passwordPolicy",Co(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nk=6;class Ok{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Nk,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xk{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new J_(this),this.idTokenSubscription=new J_(this),this.beforeStateQueue=new Pk(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=mw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=gr(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Vi.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return re(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Uc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=hk()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Fe(e):null;return n&&re(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&re(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(gr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await kk(this),n=new Ok(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ao("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&gr(e)||this._popupRedirectResolver;re(n,this,"argument-error"),this.redirectPersistenceManager=await Vi.create(this,[gr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(re(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return re(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Sw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&ak(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function So(t){return Fe(t)}class J_{constructor(e){this.auth=e,this.observer=null,this.addObserver=Q1(n=>this.observer=n)}get next(){return re(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dk(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Pw(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=nr("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Dk().appendChild(r)})}function Mk(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const Lk="https://www.google.com/recaptcha/enterprise.js?render=",Vk="recaptcha-enterprise",$k="NO_RECAPTCHA";class Fk{constructor(e){this.type=Vk,this.auth=So(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{mk(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new ik(l);return i.tenantId==null?i._agentRecaptchaConfig=c:i._tenantRecaptchaConfigs[i.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function s(i,o,a){const l=window.grecaptcha;K_(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(c=>{o(c)}).catch(()=>{o($k)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&K_(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Pw(Lk+a).then(()=>{s(a,i,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function Z_(t,e,n,r=!1){const s=new Fk(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uk(t,e){const n=Ku(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Vc(i,e??{}))return s;Ln(s,"already-initialized")}return n.initialize({options:e})}function Bk(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(gr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function jk(t,e,n){const r=So(t);re(r._canInitEmulator,r,"emulator-config-failed"),re(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=kw(e),{host:o,port:a}=qk(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||Hk()}function kw(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function qk(t){const e=kw(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:ey(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:ey(o)}}}function ey(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Hk(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zp{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return mr("not implemented")}_getIdTokenResponse(e){return mr("not implemented")}_linkToIdToken(e,n){return mr("not implemented")}_getReauthenticationResolver(e){return mr("not implemented")}}async function Wk(t,e){return ti(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function of(t,e){return Qu(t,"POST","/v1/accounts:signInWithPassword",Co(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zk(t,e){return Qu(t,"POST","/v1/accounts:signInWithEmailLink",Co(t,e))}async function Kk(t,e){return Qu(t,"POST","/v1/accounts:signInWithEmailLink",Co(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja extends Zp{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new ja(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ja(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const s=await Z_(e,r,"signInWithPassword");return of(e,s)}else return of(e,r).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const i=await Z_(e,r,"signInWithPassword");return of(e,i)}else return Promise.reject(s)});case"emailLink":return zk(e,{email:this._email,oobCode:this._password});default:Ln(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return Wk(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Kk(e,{idToken:n,email:this._email,oobCode:this._password});default:Ln(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $i(t,e){return Qu(t,"POST","/v1/accounts:signInWithIdp",Co(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gk="http://localhost";class qs extends Zp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new qs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ln("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Gp(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new qs(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return $i(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,$i(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,$i(e,n)}buildRequest(){const e={requestUri:Gk,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ro(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qk(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Yk(t){const e=Zo(ea(t)).link,n=e?Zo(ea(e)).deep_link_id:null,r=Zo(ea(t)).deep_link_id;return(r?Zo(ea(r)).link:null)||r||n||e||t}class em{constructor(e){var n,r,s,i,o,a;const l=Zo(ea(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(r=l.oobCode)!==null&&r!==void 0?r:null,h=Qk((s=l.mode)!==null&&s!==void 0?s:null);re(c&&u&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=u,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Yk(e);try{return new em(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{constructor(){this.providerId=Po.PROVIDER_ID}static credential(e,n){return ja._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=em.parseLink(n);return re(r,"argument-error"),ja._fromEmailAndCode(e,r.code,r.tenantId)}}Po.PROVIDER_ID="password";Po.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Po.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nw{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl extends Nw{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr extends fl{constructor(){super("facebook.com")}static credential(e){return qs._fromParams({providerId:Hr.PROVIDER_ID,signInMethod:Hr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Hr.credentialFromTaggedObject(e)}static credentialFromError(e){return Hr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Hr.credential(e.oauthAccessToken)}catch{return null}}}Hr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Hr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr extends fl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return qs._fromParams({providerId:Wr.PROVIDER_ID,signInMethod:Wr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Wr.credentialFromTaggedObject(e)}static credentialFromError(e){return Wr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Wr.credential(n,r)}catch{return null}}}Wr.GOOGLE_SIGN_IN_METHOD="google.com";Wr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr extends fl{constructor(){super("github.com")}static credential(e){return qs._fromParams({providerId:zr.PROVIDER_ID,signInMethod:zr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return zr.credentialFromTaggedObject(e)}static credentialFromError(e){return zr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return zr.credential(e.oauthAccessToken)}catch{return null}}}zr.GITHUB_SIGN_IN_METHOD="github.com";zr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr extends fl{constructor(){super("twitter.com")}static credential(e,n){return qs._fromParams({providerId:Kr.PROVIDER_ID,signInMethod:Kr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Kr.credentialFromTaggedObject(e)}static credentialFromError(e){return Kr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Kr.credential(n,r)}catch{return null}}}Kr.TWITTER_SIGN_IN_METHOD="twitter.com";Kr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Ms._fromIdTokenResponse(e,r,s),o=ty(r);return new Xi({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=ty(r);return new Xi({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function ty(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc extends ur{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Bc.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Bc(e,n,r,s)}}function Ow(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Bc._fromErrorAndOperation(t,i,e,r):i})}async function Xk(t,e,n=!1){const r=await Ua(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Xi._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jk(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await Ua(t,Ow(r,s,e,t),n);re(i.idToken,r,"internal-error");const o=Xp(i.idToken);re(o,r,"internal-error");const{sub:a}=o;return re(t.uid===a,r,"user-mismatch"),Xi._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Ln(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xw(t,e,n=!1){const r="signIn",s=await Ow(t,r,e),i=await Xi._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function Zk(t,e){return xw(So(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eN(t){const e=So(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function tN(t,e,n){return Zk(Fe(t),Po.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&eN(t),r})}function Dw(t,e,n,r){return Fe(t).onIdTokenChanged(e,n,r)}function nN(t,e,n){return Fe(t).beforeAuthStateChanged(e,n)}function Mw(t,e,n,r){return Fe(t).onAuthStateChanged(e,n,r)}function rN(t){return Fe(t).signOut()}const jc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lw{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(jc,"1"),this.storage.removeItem(jc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sN(){const t=$t();return Jp(t)||Yu(t)}const iN=1e3,oN=10;class Vw extends Lw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=sN()&&Sk(),this.fallbackToPolling=Cw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);Ck()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,oN):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},iN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Vw.type="LOCAL";const aN=Vw;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $w extends Lw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}$w.type="SESSION";const Fw=$w;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lN(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Xu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async c=>c(n.origin,i)),l=await lN(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Xu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tm(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cN{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const c=tm("",20);s.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const f=h;if(f.data.eventId===c)switch(f.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(f.data.response);break;default:clearTimeout(u),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rr(){return window}function uN(t){rr().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uw(){return typeof rr().WorkerGlobalScope<"u"&&typeof rr().importScripts=="function"}async function hN(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function fN(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function dN(){return Uw()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bw="firebaseLocalStorageDb",pN=1,qc="firebaseLocalStorage",jw="fbase_key";class dl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ju(t,e){return t.transaction([qc],e?"readwrite":"readonly").objectStore(qc)}function mN(){const t=indexedDB.deleteDatabase(Bw);return new dl(t).toPromise()}function cd(){const t=indexedDB.open(Bw,pN);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(qc,{keyPath:jw})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(qc)?e(r):(r.close(),await mN(),e(await cd()))})})}async function ny(t,e,n){const r=Ju(t,!0).put({[jw]:e,value:n});return new dl(r).toPromise()}async function gN(t,e){const n=Ju(t,!1).get(e),r=await new dl(n).toPromise();return r===void 0?null:r.value}function ry(t,e){const n=Ju(t,!0).delete(e);return new dl(n).toPromise()}const _N=800,yN=3;class qw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await cd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>yN)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Uw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Xu._getInstance(dN()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await hN(),!this.activeServiceWorker)return;this.sender=new cN(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||fN()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await cd();return await ny(e,jc,"1"),await ry(e,jc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>ny(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>gN(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ry(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Ju(s,!1).getAll();return new dl(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),_N)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}qw.type="LOCAL";const vN=qw;new hl(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EN(t,e){return e?gr(e):(re(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nm extends Zp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return $i(e,this._buildIdpRequest())}_linkToIdToken(e,n){return $i(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return $i(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function wN(t){return xw(t.auth,new nm(t),t.bypassAuthState)}function TN(t){const{auth:e,user:n}=t;return re(n,e,"internal-error"),Jk(n,new nm(t),t.bypassAuthState)}async function bN(t){const{auth:e,user:n}=t;return re(n,e,"internal-error"),Xk(n,new nm(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hw{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return wN;case"linkViaPopup":case"linkViaRedirect":return bN;case"reauthViaPopup":case"reauthViaRedirect":return TN;default:Ln(this.auth,"internal-error")}}resolve(e){Rr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Rr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IN=new hl(2e3,1e4);class Si extends Hw{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Si.currentPopupAction&&Si.currentPopupAction.cancel(),Si.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return re(e,this.auth,"internal-error"),e}async onExecution(){Rr(this.filter.length===1,"Popup operations only handle one event");const e=tm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(nr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(nr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Si.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(nr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,IN.get())};e()}}Si.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AN="pendingRedirect",_c=new Map;class RN extends Hw{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=_c.get(this.auth._key());if(!e){try{const r=await CN(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}_c.set(this.auth._key(),e)}return this.bypassAuthState||_c.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function CN(t,e){const n=kN(e),r=PN(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function SN(t,e){_c.set(t._key(),e)}function PN(t){return gr(t._redirectPersistence)}function kN(t){return gc(AN,t.config.apiKey,t.name)}async function NN(t,e,n=!1){const r=So(t),s=EN(r,e),o=await new RN(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ON=10*60*1e3;class xN{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!DN(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Ww(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(nr(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ON&&this.cachedEventUids.clear(),this.cachedEventUids.has(sy(e))}saveEventToCache(e){this.cachedEventUids.add(sy(e)),this.lastProcessedEventTime=Date.now()}}function sy(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Ww({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function DN(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ww(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MN(t,e={}){return ti(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LN=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,VN=/^https?/;async function $N(t){if(t.config.emulator)return;const{authorizedDomains:e}=await MN(t);for(const n of e)try{if(FN(n))return}catch{}Ln(t,"unauthorized-domain")}function FN(t){const e=ld(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!VN.test(n))return!1;if(LN.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UN=new hl(3e4,6e4);function iy(){const t=rr().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function BN(t){return new Promise((e,n)=>{var r,s,i;function o(){iy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{iy(),n(nr(t,"network-request-failed"))},timeout:UN.get()})}if(!((s=(r=rr().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=rr().gapi)===null||i===void 0)&&i.load)o();else{const a=Mk("iframefcb");return rr()[a]=()=>{gapi.load?o():n(nr(t,"network-request-failed"))},Pw(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw yc=null,e})}let yc=null;function jN(t){return yc=yc||BN(t),yc}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qN=new hl(5e3,15e3),HN="__/auth/iframe",WN="emulator/auth/iframe",zN={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},KN=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function GN(t){const e=t.config;re(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Yp(e,WN):`https://${t.config.authDomain}/${HN}`,r={apiKey:e.apiKey,appName:t.name,v:hs},s=KN.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Ro(r).slice(1)}`}async function QN(t){const e=await jN(t),n=rr().gapi;return re(n,t,"internal-error"),e.open({where:document.body,url:GN(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:zN,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=nr(t,"network-request-failed"),a=rr().setTimeout(()=>{i(o)},qN.get());function l(){rr().clearTimeout(a),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YN={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},XN=500,JN=600,ZN="_blank",eO="http://localhost";class oy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function tO(t,e,n,r=XN,s=JN){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},YN),{width:r.toString(),height:s.toString(),top:i,left:o}),c=$t().toLowerCase();n&&(a=Tw(c)?ZN:n),ww(c)&&(e=e||eO,l.scrollbars="yes");const u=Object.entries(l).reduce((f,[d,m])=>`${f}${d}=${m},`,"");if(Rk(c)&&a!=="_self")return nO(e||"",a),new oy(null);const h=window.open(e||"",a,u);re(h,t,"popup-blocked");try{h.focus()}catch{}return new oy(h)}function nO(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rO="__/auth/handler",sO="emulator/auth/handler",iO=encodeURIComponent("fac");async function ay(t,e,n,r,s,i){re(t.config.authDomain,t,"auth-domain-config-required"),re(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:hs,eventId:s};if(e instanceof Nw){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",nd(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(i||{}))o[u]=h}if(e instanceof fl){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${iO}=${encodeURIComponent(l)}`:"";return`${oO(t)}?${Ro(a).slice(1)}${c}`}function oO({config:t}){return t.emulator?Yp(t,sO):`https://${t.authDomain}/${rO}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const af="webStorageSupport";class aO{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Fw,this._completeRedirectFn=NN,this._overrideRedirectResult=SN}async _openPopup(e,n,r,s){var i;Rr((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await ay(e,n,r,ld(),s);return tO(e,o,tm())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await ay(e,n,r,ld(),s);return uN(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Rr(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await QN(e),r=new xN(e);return n.register("authEvent",s=>(re(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(af,{type:af},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[af];o!==void 0&&n(!!o),Ln(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=$N(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Cw()||Jp()||Yu()}}const lO=aO;var ly="@firebase/auth",cy="1.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cO{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){re(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uO(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function hO(t){ar(new Mn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;re(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Sw(t)},c=new xk(r,s,i,l);return Bk(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ar(new Mn("auth-internal",e=>{const n=So(e.getProvider("auth").getImmediate());return(r=>new cO(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),un(ly,cy,uO(t)),un(ly,cy,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fO=5*60,dO=rw("authIdTokenMaxAge")||fO;let uy=null;const pO=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>dO)return;const s=n==null?void 0:n.token;uy!==s&&(uy=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function zw(t=Gu()){const e=Ku(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Uk(t,{popupRedirectResolver:lO,persistence:[vN,aN,Fw]}),r=rw("authTokenSyncURL");if(r){const i=pO(r);nN(n,i,()=>i(n.currentUser)),Dw(n,o=>i(o))}const s=ew("auth");return s&&jk(n,`http://${s}`),n}hO("Browser");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mO=new Map,gO={activated:!1,tokenObservers:[]};function Vn(t){return mO.get(t)||Object.assign({},gO)}const hy={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _O{constructor(e,n,r,s,i){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=r,this.lowerBound=s,this.upperBound=i,this.pending=null,this.nextErrorWaitInterval=s,s>i)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new Va,await yO(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new Va,await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function yO(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vO={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},Hc=new Ao("appCheck","AppCheck",vO);function Kw(t){if(!Vn(t).activated)throw Hc.create("use-before-activation",{appName:t.name})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EO="firebase-app-check-database",wO=1,ud="firebase-app-check-store";let Ql=null;function TO(){return Ql||(Ql=new Promise((t,e)=>{try{const n=indexedDB.open(EO,wO);n.onsuccess=r=>{t(r.target.result)},n.onerror=r=>{var s;e(Hc.create("storage-open",{originalErrorMessage:(s=r.target.error)===null||s===void 0?void 0:s.message}))},n.onupgradeneeded=r=>{const s=r.target.result;switch(r.oldVersion){case 0:s.createObjectStore(ud,{keyPath:"compositeKey"})}}}catch(n){e(Hc.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),Ql)}function bO(t,e){return IO(AO(t),e)}async function IO(t,e){const r=(await TO()).transaction(ud,"readwrite"),i=r.objectStore(ud).put({compositeKey:t,value:e});return new Promise((o,a)=>{i.onsuccess=l=>{o()},r.onerror=l=>{var c;a(Hc.create("storage-set",{originalErrorMessage:(c=l.target.error)===null||c===void 0?void 0:c.message}))}})}function AO(t){return`${t.options.appId}-${t.name}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hd=new ul("@firebase/app-check");function fy(t,e){return aw()?bO(t,e).catch(n=>{hd.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RO={error:"UNKNOWN_ERROR"};function CO(t){return Hu.encodeString(JSON.stringify(t),!1)}async function fd(t,e=!1){const n=t.app;Kw(n);const r=Vn(n);let s=r.token,i;if(s&&!ta(s)&&(r.token=void 0,s=void 0),!s){const l=await r.cachedTokenPromise;l&&(ta(l)?s=l:await fy(n,void 0))}if(!e&&s&&ta(s))return{token:s.token};let o=!1;try{r.exchangeTokenPromise||(r.exchangeTokenPromise=r.provider.getToken().finally(()=>{r.exchangeTokenPromise=void 0}),o=!0),s=await Vn(n).exchangeTokenPromise}catch(l){l.code==="appCheck/throttled"?hd.warn(l.message):hd.error(l),i=l}let a;return s?i?ta(s)?a={token:s.token,internalError:i}:a=py(i):(a={token:s.token},r.token=s,await fy(n,s)):a=py(i),o&&NO(n,a),a}async function SO(t){const e=t.app;Kw(e);const{provider:n}=Vn(e);{const{token:r}=await n.getToken();return{token:r}}}function PO(t,e,n,r){const{app:s}=t,i=Vn(s),o={next:n,error:r,type:e};if(i.tokenObservers=[...i.tokenObservers,o],i.token&&ta(i.token)){const a=i.token;Promise.resolve().then(()=>{n({token:a.token}),dy(t)}).catch(()=>{})}i.cachedTokenPromise.then(()=>dy(t))}function Gw(t,e){const n=Vn(t),r=n.tokenObservers.filter(s=>s.next!==e);r.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=r}function dy(t){const{app:e}=t,n=Vn(e);let r=n.tokenRefresher;r||(r=kO(t),n.tokenRefresher=r),!r.isRunning()&&n.isTokenAutoRefreshEnabled&&r.start()}function kO(t){const{app:e}=t;return new _O(async()=>{const n=Vn(e);let r;if(n.token?r=await fd(t,!0):r=await fd(t),r.error)throw r.error;if(r.internalError)throw r.internalError},()=>!0,()=>{const n=Vn(e);if(n.token){let r=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const s=n.token.expireTimeMillis-5*60*1e3;return r=Math.min(r,s),Math.max(0,r-Date.now())}else return 0},hy.RETRIAL_MIN_WAIT,hy.RETRIAL_MAX_WAIT)}function NO(t,e){const n=Vn(t).tokenObservers;for(const r of n)try{r.type==="EXTERNAL"&&e.error!=null?r.error(e.error):r.next(e)}catch{}}function ta(t){return t.expireTimeMillis-Date.now()>0}function py(t){return{token:CO(RO),error:t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OO{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=Vn(this.app);for(const n of e)Gw(this.app,n.next);return Promise.resolve()}}function xO(t,e){return new OO(t,e)}function DO(t){return{getToken:e=>fd(t,e),getLimitedUseToken:()=>SO(t),addTokenListener:e=>PO(t,"INTERNAL",e),removeTokenListener:e=>Gw(t.app,e)}}const MO="@firebase/app-check",LO="0.8.0",VO="app-check",my="app-check-internal";function $O(){ar(new Mn(VO,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return xO(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(my).initialize()})),ar(new Mn(my,t=>{const e=t.getProvider("app-check").getImmediate();return DO(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),un(MO,LO)}$O();var FO="firebase",UO="10.5.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */un(FO,UO,"app");const Qw=Symbol("firebaseApp");function fs(t){return Ar()&&It(Qw,null)||Gu(t)}const on=()=>{},BO=typeof window<"u";function rm(t,e){return e.split(".").reduce((n,r)=>n&&n[r],t)}function jO(t,e,n){const r=(""+e).split("."),s=r.pop(),i=r.reduce((o,a)=>o&&o[a],t);if(i!=null)return Array.isArray(i)?i.splice(Number(s),1,n):i[s]=n}function ni(t){return!!t&&typeof t=="object"}const qO=Object.prototype;function HO(t){return ni(t)&&Object.getPrototypeOf(t)===qO}function sm(t){return ni(t)&&t.type==="document"}function WO(t){return ni(t)&&t.type==="collection"}function zO(t){return sm(t)||WO(t)}function KO(t){return ni(t)&&t.type==="query"}function GO(t){return ni(t)&&"ref"in t}function QO(t){return ni(t)&&typeof t.bucket=="string"}function YO(t,e){let n;return()=>{if(!n)return n=!0,t(e())}}const XO=Symbol.for("v-scx");function JO(){return Ar(),!!It(XO,0)}const Yl=new WeakMap;function ZO(t,e){if(!Yl.has(t)){const n=Rp(!0);Yl.set(t,n);const{unmount:r}=e;e.unmount=()=>{r.call(e),n.stop(),Yl.delete(t)}}return Yl.get(t)}const ex=new WeakMap,Xl=new WeakMap;function tx(t){const e=fs(t);if(!Xl.has(e)){let n;const s=[new Promise(i=>{n=i}),i=>{Xl.set(e,i),n(i.value)}];Xl.set(e,s)}return Xl.get(e)}function nx(t,e){const n=zw(e);Dw(n,r=>{const s=tx();t.value=r,Array.isArray(s)&&s[1](t)})}const gy="@firebase/database",_y="1.0.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yw="";function rx(t){Yw=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sx{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),wt(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:$a(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ix{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Dr(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xw=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new sx(e)}}catch{}return new ix},Ps=Xw("localStorage"),dd=Xw("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fi=new ul("@firebase/database"),ox=function(){let t=1;return function(){return t++}}(),Jw=function(t){const e=Z1(t),n=new G1;n.update(e);const r=n.digest();return Hu.encodeByteArray(r)},pl=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=pl.apply(null,r):typeof r=="object"?e+=wt(r):e+=r,e+=" "}return e};let Ls=null,yy=!0;const ax=function(t,e){j(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Fi.logLevel=me.VERBOSE,Ls=Fi.log.bind(Fi),e&&dd.set("logging_enabled",!0)):typeof t=="function"?Ls=t:(Ls=null,dd.remove("logging_enabled"))},Nt=function(...t){if(yy===!0&&(yy=!1,Ls===null&&dd.get("logging_enabled")===!0&&ax(!0)),Ls){const e=pl.apply(null,t);Ls(e)}},ml=function(t){return function(...e){Nt(t,...e)}},pd=function(...t){const e="FIREBASE INTERNAL ERROR: "+pl(...t);Fi.error(e)},Hs=function(...t){const e=`FIREBASE FATAL ERROR: ${pl(...t)}`;throw Fi.error(e),new Error(e)},hn=function(...t){const e="FIREBASE WARNING: "+pl(...t);Fi.warn(e)},lx=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&hn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Zw=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},cx=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Ji="[MIN_NAME]",Ws="[MAX_NAME]",ko=function(t,e){if(t===e)return 0;if(t===Ji||e===Ws)return-1;if(e===Ji||t===Ws)return 1;{const n=vy(t),r=vy(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},ux=function(t,e){return t===e?0:t<e?-1:1},jo=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+wt(e))},im=function(t){if(typeof t!="object"||t===null)return wt(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=wt(e[r]),n+=":",n+=im(t[e[r]]);return n+="}",n},eT=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let s=0;s<n;s+=e)s+e>n?r.push(t.substring(s,n)):r.push(t.substring(s,s+e));return r};function Tn(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const tT=function(t){j(!Zw(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let s,i,o,a,l;t===0?(i=0,o=0,s=1/t===-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),i=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(i=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(i%2?1:0),i=Math.floor(i/2);c.push(s?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let f=parseInt(u.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),h=h+f}return h.toLowerCase()},hx=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},fx=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},dx=new RegExp("^-?(0*)\\d{1,10}$"),px=-2147483648,mx=2147483647,vy=function(t){if(dx.test(t)){const e=Number(t);if(e>=px&&e<=mx)return e}return null},gl=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw hn("Exception was thrown by user callback.",n),e},Math.floor(0))}},gx=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},_a=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _x{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){hn(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yx{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Nt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',hn(e)}}class md{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}md.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const om="5",nT="v",rT="s",sT="r",iT="f",oT=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,aT="ls",lT="p",gd="ac",cT="websocket",uT="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vx{constructor(e,n,r,s,i=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=s,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Ps.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Ps.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function Ex(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function hT(t,e,n){j(typeof e=="string","typeof type must == string"),j(typeof n=="object","typeof params must == object");let r;if(e===cT)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===uT)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Ex(t)&&(n.ns=t.namespace);const s=[];return Tn(n,(i,o)=>{s.push(i+"="+o)}),r+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wx{constructor(){this.counters_={}}incrementCounter(e,n=1){Dr(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return x1(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lf={},cf={};function am(t){const e=t.toString();return lf[e]||(lf[e]=new wx),lf[e]}function Tx(t,e){const n=t.toString();return cf[n]||(cf[n]=e()),cf[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bx{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<r.length;++s)r[s]&&gl(()=>{this.onMessage_(r[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ey="start",Ix="close",Ax="pLPCommand",Rx="pRTLPCB",fT="id",dT="pw",pT="ser",Cx="cb",Sx="seg",Px="ts",kx="d",Nx="dframe",mT=1870,gT=30,Ox=mT-gT,xx=25e3,Dx=3e4;class Pi{constructor(e,n,r,s,i,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ml(e),this.stats_=am(n),this.urlFn=l=>(this.appCheckToken&&(l[gd]=this.appCheckToken),hT(n,uT,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new bx(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Dx)),cx(()=>{if(this.isClosed_)return;this.scriptTagHolder=new lm((...i)=>{const[o,a,l,c,u]=i;if(this.incrementIncomingBytes_(i),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Ey)this.id=a,this.password=l;else if(o===Ix)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...i)=>{const[o,a]=i;this.incrementIncomingBytes_(i),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[Ey]="t",r[pT]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[Cx]=this.scriptTagHolder.uniqueCallbackIdentifier),r[nT]=om,this.transportSessionId&&(r[rT]=this.transportSessionId),this.lastSessionId&&(r[aT]=this.lastSessionId),this.applicationId&&(r[lT]=this.applicationId),this.appCheckToken&&(r[gd]=this.appCheckToken),typeof location<"u"&&location.hostname&&oT.test(location.hostname)&&(r[sT]=iT);const s=this.urlFn(r);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Pi.forceAllow_=!0}static forceDisallow(){Pi.forceDisallow_=!0}static isAvailable(){return Pi.forceAllow_?!0:!Pi.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!hx()&&!fx()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=wt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=JE(n),s=eT(r,Ox);for(let i=0;i<s.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[i]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[Nx]="t",r[fT]=e,r[dT]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=wt(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class lm{constructor(e,n,r,s){this.onDisconnect=r,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=ox(),window[Ax+this.uniqueCallbackIdentifier]=e,window[Rx+this.uniqueCallbackIdentifier]=n,this.myIFrame=lm.createIFrame_();let i="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(i='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Nt("frame writing exception"),a.stack&&Nt(a.stack),Nt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Nt("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[fT]=this.myID,e[dT]=this.myPW,e[pT]=this.currentSerial;let n=this.urlFn(e),r="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+gT+r.length<=mT;){const o=this.pendingSegs.shift();r=r+"&"+Sx+s+"="+o.seg+"&"+Px+s+"="+o.ts+"&"+kx+s+"="+o.d,s++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(r,Math.floor(xx)),i=()=>{clearTimeout(s),r()};this.addTag(e,i)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const s=r.readyState;(!s||s==="loaded"||s==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Nt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mx=16384,Lx=45e3;let Wc=null;typeof MozWebSocket<"u"?Wc=MozWebSocket:typeof WebSocket<"u"&&(Wc=WebSocket);class Rn{constructor(e,n,r,s,i,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ml(this.connId),this.stats_=am(n),this.connURL=Rn.connectionURL_(n,o,a,s,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,s,i){const o={};return o[nT]=om,typeof location<"u"&&location.hostname&&oT.test(location.hostname)&&(o[sT]=iT),n&&(o[rT]=n),r&&(o[aT]=r),s&&(o[gd]=s),i&&(o[lT]=i),hT(e,cT,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Ps.set("previous_websocket_failure",!0);try{let r;ow(),this.mySock=new Wc(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){Rn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Wc!==null&&!Rn.forceDisallow_}static previouslyFailed(){return Ps.isInMemoryStorage||Ps.get("previous_websocket_failure")===!0}markConnectionHealthy(){Ps.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=$a(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(j(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=wt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=eT(n,Mx);r.length>1&&this.sendString_(String(r.length));for(let s=0;s<r.length;s++)this.sendString_(r[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Lx))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Rn.responsesRequiredToBeHealthy=2;Rn.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Pi,Rn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Rn&&Rn.isAvailable();let r=n&&!Rn.previouslyFailed();if(e.webSocketOnly&&(n||hn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Rn];else{const s=this.transports_=[];for(const i of qa.ALL_TRANSPORTS)i&&i.isAvailable()&&s.push(i);qa.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}qa.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vx=6e4,$x=5e3,Fx=10*1024,Ux=100*1024,uf="t",wy="d",Bx="s",Ty="r",jx="e",by="o",Iy="a",Ay="n",Ry="p",qx="h";class Hx{constructor(e,n,r,s,i,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=s,this.authToken_=i,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ml("c:"+this.id+":"),this.transportManager_=new qa(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=_a(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Ux?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Fx?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(uf in e){const n=e[uf];n===Iy?this.upgradeIfSecondaryHealthy_():n===Ty?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===by&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=jo("t",e),r=jo("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Ry,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Iy,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Ay,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=jo("t",e),r=jo("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=jo(uf,e);if(wy in e){const r=e[wy];if(n===qx){const s=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(n===Ay){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Bx?this.onConnectionShutdown_(r):n===Ty?this.onReset_(r):n===jx?pd("Server Error: "+r):n===by?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):pd("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),om!==r&&hn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),_a(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Vx))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):_a(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor($x))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Ry,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Ps.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _T{put(e,n,r,s){}merge(e,n,r,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yT{constructor(e){this.allowedEvents_=e,this.listeners_={},j(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let s=0;s<r.length;s++)r[s].callback.apply(r[s].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const s=this.getInitialEvent(e);s&&n.apply(r,s)}off(e,n,r){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let i=0;i<s.length;i++)if(s[i].callback===n&&(!r||r===s[i].context)){s.splice(i,1);return}}validateEventType_(e){j(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc extends yT{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!zp()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new zc}getInitialEvent(e){return j(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cy=32,Sy=768;class He{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[r]=this.pieces_[s],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Le(){return new He("")}function Te(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function is(t){return t.pieces_.length-t.pieceNum_}function Be(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new He(t.pieces_,e)}function vT(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function Wx(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function ET(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function wT(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new He(e,0)}function ft(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof He)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let s=0;s<r.length;s++)r[s].length>0&&n.push(r[s])}return new He(n,0)}function ye(t){return t.pieceNum_>=t.pieces_.length}function gn(t,e){const n=Te(t),r=Te(e);if(n===null)return e;if(n===r)return gn(Be(t),Be(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function TT(t,e){if(is(t)!==is(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function Sn(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(is(t)>is(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class zx{constructor(e,n){this.errorPrefix_=n,this.parts_=ET(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=zu(this.parts_[r]);bT(this)}}function Kx(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=zu(e),bT(t)}function Gx(t){const e=t.parts_.pop();t.byteLength_-=zu(e),t.parts_.length>0&&(t.byteLength_-=1)}function bT(t){if(t.byteLength_>Sy)throw new Error(t.errorPrefix_+"has a key path longer than "+Sy+" bytes ("+t.byteLength_+").");if(t.parts_.length>Cy)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Cy+") or object contains a cycle "+Is(t))}function Is(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cm extends yT{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new cm}getInitialEvent(e){return j(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qo=1e3,Qx=60*5*1e3,Py=30*1e3,Yx=1.3,Xx=3e4,Jx="server_kill",ky=3;class wr extends _T{constructor(e,n,r,s,i,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=s,this.onServerInfoUpdate_=i,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=wr.nextPersistentConnectionId_++,this.log_=ml("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=qo,this.maxReconnectDelay_=Qx,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!ow())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");cm.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&zc.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const s=++this.requestNumber_,i={r:s,a:e,b:n};this.log_(wt(i)),j(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),r&&(this.requestCBHash_[s]=r)}get(e){this.initConnection_();const n=new Va,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),n.promise}listen(e,n,r,s){this.initConnection_();const i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),j(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),j(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:n,query:e,tag:r};this.listens.get(o).set(i,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+r+" for "+s);const i={p:r},o="q";e.tag&&(i.q=n._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest(o,i,a=>{const l=a.d,c=a.s;wr.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(s))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(r,s),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Dr(e,"w")){const r=Yi(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',i=n._path.toString();hn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${i} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||K1(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Py)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=z1(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,s=>{const i=s.s,o=s.d||"error";this.authToken_===e&&(i==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(i,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+s),j(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,s)&&this.connected_&&this.sendUnlisten_(r,s,e._queryObject,n)}sendUnlisten_(e,n,r,s){this.log_("Unlisten on "+e+" for "+n);const i={p:e},o="n";s&&(i.q=r,i.t=s),this.sendRequest(o,i)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,s){const i={p:n,d:r};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,n,r,s){this.putInternal("p",e,n,r,s)}merge(e,n,r,s){this.putInternal("m",e,n,r,s)}putInternal(e,n,r,s,i){this.initConnection_();const o={p:n,d:r};i!==void 0&&(o.h=i),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,i=>{this.log_(n+" response",i),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(i.s,i.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const i=r.d;this.log_("reportStats","Error sending stats: "+i)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+wt(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):pd("Unrecognized action received from server: "+wt(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){j(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=qo,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=qo,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Xx&&(this.reconnectDelay_=qo),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Yx)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+wr.nextConnectionId_++,i=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},c=function(h){j(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,f]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Nt("getToken() completed but was canceled"):(Nt("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=f&&f.token,a=new Hx(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,d=>{hn(d+" ("+this.repoInfo_.toString()+")"),this.interrupt(Jx)},i))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&hn(h),l())}}}interrupt(e){Nt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Nt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],nd(this.interruptReasons_)&&(this.reconnectDelay_=qo,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(i=>im(i)).join("$"):r="default";const s=this.removeListen_(e,r);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,n){const r=new He(e).toString();let s;if(this.listens.has(r)){const i=this.listens.get(r);s=i.get(n),i.delete(n),i.size===0&&this.listens.delete(r)}else s=void 0;return s}onAuthRevoked_(e,n){Nt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=ky&&(this.reconnectDelay_=Py,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Nt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=ky&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Yw.replace(/\./g,"-")]=1,zp()?e["framework.cordova"]=1:iw()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=zc.getInstance().currentlyOnline();return nd(this.interruptReasons_)&&e}}wr.nextPersistentConnectionId_=0;wr.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new be(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zu{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new be(Ji,e),s=new be(Ji,n);return this.compare(r,s)!==0}minPost(){return be.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Jl;class IT extends Zu{static get __EMPTY_NODE(){return Jl}static set __EMPTY_NODE(e){Jl=e}compare(e,n){return ko(e.name,n.name)}isDefinedOn(e){throw Io("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return be.MIN}maxPost(){return new be(Ws,Jl)}makePost(e,n){return j(typeof e=="string","KeyIndex indexValue must always be a string."),new be(e,Jl)}toString(){return".key"}}const Ui=new IT;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zl=class{constructor(e,n,r,s,i=null){this.isReverse_=s,this.resultGenerator_=i,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}},rn=class na{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??na.RED,this.left=s??Yn.EMPTY_NODE,this.right=i??Yn.EMPTY_NODE}copy(e,n,r,s,i){return new na(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return i<0?s=s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return Yn.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,s;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Yn.EMPTY_NODE;s=r.right.min_(),r=r.copy(s.key,s.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,na.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,na.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}};rn.RED=!0;rn.BLACK=!1;class Zx{copy(e,n,r,s,i){return this}insert(e,n,r){return new rn(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}let Yn=class vc{constructor(e,n=vc.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new vc(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,rn.BLACK,null,null))}remove(e){return new vc(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,rn.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,s=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return s?s.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(s=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Zl(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Zl(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Zl(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Zl(this.root_,null,this.comparator_,!0,e)}};Yn.EMPTY_NODE=new Zx;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eD(t,e){return ko(t.name,e.name)}function um(t,e){return ko(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _d;function tD(t){_d=t}const AT=function(t){return typeof t=="number"?"number:"+tT(t):"string:"+t},RT=function(t){if(t.isLeafNode()){const e=t.val();j(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Dr(e,".sv"),"Priority must be a string or number.")}else j(t===_d||t.isEmpty(),"priority of unexpected type.");j(t===_d||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ny;class lt{constructor(e,n=lt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,j(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),RT(this.priorityNode_)}static set __childrenNodeConstructor(e){Ny=e}static get __childrenNodeConstructor(){return Ny}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new lt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:lt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ye(e)?this:Te(e)===".priority"?this.priorityNode_:lt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:lt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=Te(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(j(r!==".priority"||is(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,lt.__childrenNodeConstructor.EMPTY_NODE.updateChild(Be(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+AT(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=tT(this.value_):e+=this.value_,this.lazyHash_=Jw(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===lt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof lt.__childrenNodeConstructor?-1:(j(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,s=lt.VALUE_TYPE_ORDER.indexOf(n),i=lt.VALUE_TYPE_ORDER.indexOf(r);return j(s>=0,"Unknown leaf type: "+n),j(i>=0,"Unknown leaf type: "+r),s===i?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}lt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let CT,ST;function nD(t){CT=t}function rD(t){ST=t}class sD extends Zu{compare(e,n){const r=e.node.getPriority(),s=n.node.getPriority(),i=r.compareTo(s);return i===0?ko(e.name,n.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return be.MIN}maxPost(){return new be(Ws,new lt("[PRIORITY-POST]",ST))}makePost(e,n){const r=CT(e);return new be(n,new lt("[PRIORITY-POST]",r))}toString(){return".priority"}}const Mt=new sD;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iD=Math.log(2);class oD{constructor(e){const n=i=>parseInt(Math.log(i)/iD,10),r=i=>parseInt(Array(i+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const s=r(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Kc=function(t,e,n,r){t.sort(e);const s=function(l,c){const u=c-l;let h,f;if(u===0)return null;if(u===1)return h=t[l],f=n?n(h):h,new rn(f,h.node,rn.BLACK,null,null);{const d=parseInt(u/2,10)+l,m=s(l,d),p=s(d+1,c);return h=t[d],f=n?n(h):h,new rn(f,h.node,rn.BLACK,m,p)}},i=function(l){let c=null,u=null,h=t.length;const f=function(m,p){const g=h-m,y=h;h-=m;const w=s(g+1,y),b=t[g],T=n?n(b):b;d(new rn(T,b.node,p,null,w))},d=function(m){c?(c.left=m,c=m):(u=m,c=m)};for(let m=0;m<l.count;++m){const p=l.nextBitIsOne(),g=Math.pow(2,l.count-(m+1));p?f(g,rn.BLACK):(f(g,rn.BLACK),f(g,rn.RED))}return u},o=new oD(t.length),a=i(o);return new Yn(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hf;const _i={};class _r{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return j(_i&&Mt,"ChildrenNode.ts has not been loaded"),hf=hf||new _r({".priority":_i},{".priority":Mt}),hf}get(e){const n=Yi(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Yn?n:null}hasIndex(e){return Dr(this.indexSet_,e.toString())}addIndex(e,n){j(e!==Ui,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let s=!1;const i=n.getIterator(be.Wrap);let o=i.getNext();for(;o;)s=s||e.isDefinedOn(o.node),r.push(o),o=i.getNext();let a;s?a=Kc(r,e.getCompare()):a=_i;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new _r(u,c)}addToIndexes(e,n){const r=Lc(this.indexes_,(s,i)=>{const o=Yi(this.indexSet_,i);if(j(o,"Missing index implementation for "+i),s===_i)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(be.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Kc(a,o.getCompare())}else return _i;else{const a=n.get(e.name);let l=s;return a&&(l=l.remove(new be(e.name,a))),l.insert(e,e.node)}});return new _r(r,this.indexSet_)}removeFromIndexes(e,n){const r=Lc(this.indexes_,s=>{if(s===_i)return s;{const i=n.get(e.name);return i?s.remove(new be(e.name,i)):s}});return new _r(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ho;class ke{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&RT(this.priorityNode_),this.children_.isEmpty()&&j(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Ho||(Ho=new ke(new Yn(um),null,_r.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ho}updatePriority(e){return this.children_.isEmpty()?this:new ke(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Ho:n}}getChild(e){const n=Te(e);return n===null?this:this.getImmediateChild(n).getChild(Be(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(j(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new be(e,n);let s,i;n.isEmpty()?(s=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(r,this.children_)):(s=this.children_.insert(e,n),i=this.indexMap_.addToIndexes(r,this.children_));const o=s.isEmpty()?Ho:this.priorityNode_;return new ke(s,o,i)}}updateChild(e,n){const r=Te(e);if(r===null)return n;{j(Te(e)!==".priority"||is(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(r).updateChild(Be(e),n);return this.updateImmediateChild(r,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,s=0,i=!0;if(this.forEachChild(Mt,(o,a)=>{n[o]=a.val(e),r++,i&&ke.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):i=!1}),!e&&i&&s<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+AT(this.getPriority().val())+":"),this.forEachChild(Mt,(n,r)=>{const s=r.hash();s!==""&&(e+=":"+n+":"+s)}),this.lazyHash_=e===""?"":Jw(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const s=this.resolveIndex_(r);if(s){const i=s.getPredecessorKey(new be(e,n));return i?i.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new be(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new be(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,be.Wrap);let i=s.peek();for(;i!=null&&n.compare(i,e)<0;)s.getNext(),i=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,be.Wrap);let i=s.peek();for(;i!=null&&n.compare(i,e)>0;)s.getNext(),i=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===_l?-1:0}withIndex(e){if(e===Ui||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new ke(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Ui||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Mt),s=n.getIterator(Mt);let i=r.getNext(),o=s.getNext();for(;i&&o;){if(i.name!==o.name||!i.node.equals(o.node))return!1;i=r.getNext(),o=s.getNext()}return i===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Ui?null:this.indexMap_.get(e.toString())}}ke.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class aD extends ke{constructor(){super(new Yn(um),ke.EMPTY_NODE,_r.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return ke.EMPTY_NODE}isEmpty(){return!1}}const _l=new aD;Object.defineProperties(be,{MIN:{value:new be(Ji,ke.EMPTY_NODE)},MAX:{value:new be(Ws,_l)}});IT.__EMPTY_NODE=ke.EMPTY_NODE;lt.__childrenNodeConstructor=ke;tD(_l);rD(_l);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lD=!0;function Ot(t,e=null){if(t===null)return ke.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),j(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new lt(n,Ot(e))}if(!(t instanceof Array)&&lD){const n=[];let r=!1;if(Tn(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Ot(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new be(o,l)))}}),n.length===0)return ke.EMPTY_NODE;const i=Kc(n,eD,o=>o.name,um);if(r){const o=Kc(n,Mt.getCompare());return new ke(i,Ot(e),new _r({".priority":o},{".priority":Mt}))}else return new ke(i,Ot(e),_r.Default)}else{let n=ke.EMPTY_NODE;return Tn(t,(r,s)=>{if(Dr(t,r)&&r.substring(0,1)!=="."){const i=Ot(s);(i.isLeafNode()||!i.isEmpty())&&(n=n.updateImmediateChild(r,i))}}),n.updatePriority(Ot(e))}}nD(Ot);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cD extends Zu{constructor(e){super(),this.indexPath_=e,j(!ye(e)&&Te(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),s=this.extractChild(n.node),i=r.compareTo(s);return i===0?ko(e.name,n.name):i}makePost(e,n){const r=Ot(e),s=ke.EMPTY_NODE.updateChild(this.indexPath_,r);return new be(n,s)}maxPost(){const e=ke.EMPTY_NODE.updateChild(this.indexPath_,_l);return new be(Ws,e)}toString(){return ET(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uD extends Zu{compare(e,n){const r=e.node.compareTo(n.node);return r===0?ko(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return be.MIN}maxPost(){return be.MAX}makePost(e,n){const r=Ot(e);return new be(n,r)}toString(){return".value"}}const hD=new uD;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fD(t){return{type:"value",snapshotNode:t}}function dD(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function pD(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Oy(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function mD(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hm{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Mt}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return j(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return j(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ji}hasEnd(){return this.endSet_}getIndexEndValue(){return j(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return j(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ws}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return j(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Mt}copy(){const e=new hm;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function xy(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Mt?n="$priority":t.index_===hD?n="$value":t.index_===Ui?n="$key":(j(t.index_ instanceof cD,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=wt(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=wt(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+wt(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=wt(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+wt(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Dy(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Mt&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc extends _T{constructor(e,n,r,s){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=s,this.log_=ml("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(j(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,s){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const o=Gc.getListenId_(e,r),a={};this.listens_[o]=a;const l=xy(e._queryParams);this.restRequest_(i+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(i,h,!1,r),Yi(this.listens_,o)===a){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",s(f,null)}})}unlisten(e,n){const r=Gc.getListenId_(e,n);delete this.listens_[r]}get(e){const n=xy(e._queryParams),r=e._path.toString(),s=new Va;return this.restRequest_(r+".json",n,(i,o)=>{let a=o;i===404&&(a=null,i=null),i===null?(this.onDataUpdate_(r,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,i])=>{s&&s.accessToken&&(n.auth=s.accessToken),i&&i.token&&(n.ac=i.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Ro(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=$a(a.responseText)}catch{hn("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&hn("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gD{constructor(){this.rootNode_=ke.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qc(){return{value:null,children:new Map}}function PT(t,e,n){if(ye(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=Te(e);t.children.has(r)||t.children.set(r,Qc());const s=t.children.get(r);e=Be(e),PT(s,e,n)}}function yd(t,e,n){t.value!==null?n(e,t.value):_D(t,(r,s)=>{const i=new He(e.toString()+"/"+r);yd(s,i,n)})}function _D(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yD{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Tn(this.last_,(r,s)=>{n[r]=n[r]-s}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const My=10*1e3,vD=30*1e3,ED=5*60*1e3;class wD{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new yD(e);const r=My+(vD-My)*Math.random();_a(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Tn(e,(s,i)=>{i>0&&Dr(this.statsToReport_,s)&&(n[s]=i,r=!0)}),r&&this.server_.reportStats(n),_a(this.reportStats_.bind(this),Math.floor(Math.random()*2*ED))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Xn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Xn||(Xn={}));function kT(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function NT(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function OT(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yc{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Xn.ACK_USER_WRITE,this.source=kT()}operationForChild(e){if(ye(this.path)){if(this.affectedTree.value!=null)return j(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new He(e));return new Yc(Le(),n,this.revert)}}else return j(Te(this.path)===e,"operationForChild called for unrelated child."),new Yc(Be(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Xn.OVERWRITE}operationForChild(e){return ye(this.path)?new zs(this.source,Le(),this.snap.getImmediateChild(e)):new zs(this.source,Be(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Xn.MERGE}operationForChild(e){if(ye(this.path)){const n=this.children.subtree(new He(e));return n.isEmpty()?null:n.value?new zs(this.source,Le(),n.value):new Ha(this.source,Le(),n)}else return j(Te(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ha(this.source,Be(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fm{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ye(e))return this.isFullyInitialized()&&!this.filtered_;const n=Te(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function TD(t,e,n,r){const s=[],i=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&i.push(mD(o.childName,o.snapshotNode))}),Wo(t,s,"child_removed",e,r,n),Wo(t,s,"child_added",e,r,n),Wo(t,s,"child_moved",i,r,n),Wo(t,s,"child_changed",e,r,n),Wo(t,s,"value",e,r,n),s}function Wo(t,e,n,r,s,i){const o=r.filter(a=>a.type===n);o.sort((a,l)=>ID(t,a,l)),o.forEach(a=>{const l=bD(t,a,i);s.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function bD(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function ID(t,e,n){if(e.childName==null||n.childName==null)throw Io("Should only compare child_ events.");const r=new be(e.childName,e.snapshotNode),s=new be(n.childName,n.snapshotNode);return t.index_.compare(r,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xT(t,e){return{eventCache:t,serverCache:e}}function ya(t,e,n,r){return xT(new fm(e,n,r),t.serverCache)}function DT(t,e,n,r){return xT(t.eventCache,new fm(e,n,r))}function vd(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Ks(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ff;const AD=()=>(ff||(ff=new Yn(ux)),ff);class Ue{constructor(e,n=AD()){this.value=e,this.children=n}static fromObject(e){let n=new Ue(null);return Tn(e,(r,s)=>{n=n.set(new He(r),s)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Le(),value:this.value};if(ye(e))return null;{const r=Te(e),s=this.children.get(r);if(s!==null){const i=s.findRootMostMatchingPathAndValue(Be(e),n);return i!=null?{path:ft(new He(r),i.path),value:i.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ye(e))return this;{const n=Te(e),r=this.children.get(n);return r!==null?r.subtree(Be(e)):new Ue(null)}}set(e,n){if(ye(e))return new Ue(n,this.children);{const r=Te(e),i=(this.children.get(r)||new Ue(null)).set(Be(e),n),o=this.children.insert(r,i);return new Ue(this.value,o)}}remove(e){if(ye(e))return this.children.isEmpty()?new Ue(null):new Ue(null,this.children);{const n=Te(e),r=this.children.get(n);if(r){const s=r.remove(Be(e));let i;return s.isEmpty()?i=this.children.remove(n):i=this.children.insert(n,s),this.value===null&&i.isEmpty()?new Ue(null):new Ue(this.value,i)}else return this}}get(e){if(ye(e))return this.value;{const n=Te(e),r=this.children.get(n);return r?r.get(Be(e)):null}}setTree(e,n){if(ye(e))return n;{const r=Te(e),i=(this.children.get(r)||new Ue(null)).setTree(Be(e),n);let o;return i.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,i),new Ue(this.value,o)}}fold(e){return this.fold_(Le(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((s,i)=>{r[s]=i.fold_(ft(e,s),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,Le(),n)}findOnPath_(e,n,r){const s=this.value?r(n,this.value):!1;if(s)return s;if(ye(e))return null;{const i=Te(e),o=this.children.get(i);return o?o.findOnPath_(Be(e),ft(n,i),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Le(),n)}foreachOnPath_(e,n,r){if(ye(e))return this;{this.value&&r(n,this.value);const s=Te(e),i=this.children.get(s);return i?i.foreachOnPath_(Be(e),ft(n,s),r):new Ue(null)}}foreach(e){this.foreach_(Le(),e)}foreach_(e,n){this.children.inorderTraversal((r,s)=>{s.foreach_(ft(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(e){this.writeTree_=e}static empty(){return new xn(new Ue(null))}}function va(t,e,n){if(ye(e))return new xn(new Ue(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const s=r.path;let i=r.value;const o=gn(s,e);return i=i.updateChild(o,n),new xn(t.writeTree_.set(s,i))}else{const s=new Ue(n),i=t.writeTree_.setTree(e,s);return new xn(i)}}}function Ly(t,e,n){let r=t;return Tn(n,(s,i)=>{r=va(r,ft(e,s),i)}),r}function Vy(t,e){if(ye(e))return xn.empty();{const n=t.writeTree_.setTree(e,new Ue(null));return new xn(n)}}function Ed(t,e){return ri(t,e)!=null}function ri(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(gn(n.path,e)):null}function $y(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Mt,(r,s)=>{e.push(new be(r,s))}):t.writeTree_.children.inorderTraversal((r,s)=>{s.value!=null&&e.push(new be(r,s.value))}),e}function ts(t,e){if(ye(e))return t;{const n=ri(t,e);return n!=null?new xn(new Ue(n)):new xn(t.writeTree_.subtree(e))}}function wd(t){return t.writeTree_.isEmpty()}function Zi(t,e){return MT(Le(),t.writeTree_,e)}function MT(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((s,i)=>{s===".priority"?(j(i.value!==null,"Priority writes must always be leaf nodes"),r=i.value):n=MT(ft(t,s),i,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(ft(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LT(t,e){return BT(e,t)}function RD(t,e,n,r,s){j(r>t.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:s}),s&&(t.visibleWrites=va(t.visibleWrites,e,n)),t.lastWriteId=r}function CD(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function SD(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);j(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let s=r.visible,i=!1,o=t.allWrites.length-1;for(;s&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&PD(a,r.path)?s=!1:Sn(r.path,a.path)&&(i=!0)),o--}if(s){if(i)return kD(t),!0;if(r.snap)t.visibleWrites=Vy(t.visibleWrites,r.path);else{const a=r.children;Tn(a,l=>{t.visibleWrites=Vy(t.visibleWrites,ft(r.path,l))})}return!0}else return!1}function PD(t,e){if(t.snap)return Sn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Sn(ft(t.path,n),e))return!0;return!1}function kD(t){t.visibleWrites=VT(t.allWrites,ND,Le()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function ND(t){return t.visible}function VT(t,e,n){let r=xn.empty();for(let s=0;s<t.length;++s){const i=t[s];if(e(i)){const o=i.path;let a;if(i.snap)Sn(n,o)?(a=gn(n,o),r=va(r,a,i.snap)):Sn(o,n)&&(a=gn(o,n),r=va(r,Le(),i.snap.getChild(a)));else if(i.children){if(Sn(n,o))a=gn(n,o),r=Ly(r,a,i.children);else if(Sn(o,n))if(a=gn(o,n),ye(a))r=Ly(r,Le(),i.children);else{const l=Yi(i.children,Te(a));if(l){const c=l.getChild(Be(a));r=va(r,Le(),c)}}}else throw Io("WriteRecord should have .snap or .children")}}return r}function $T(t,e,n,r,s){if(!r&&!s){const i=ri(t.visibleWrites,e);if(i!=null)return i;{const o=ts(t.visibleWrites,e);if(wd(o))return n;if(n==null&&!Ed(o,Le()))return null;{const a=n||ke.EMPTY_NODE;return Zi(o,a)}}}else{const i=ts(t.visibleWrites,e);if(!s&&wd(i))return n;if(!s&&n==null&&!Ed(i,Le()))return null;{const o=function(c){return(c.visible||s)&&(!r||!~r.indexOf(c.writeId))&&(Sn(c.path,e)||Sn(e,c.path))},a=VT(t.allWrites,o,e),l=n||ke.EMPTY_NODE;return Zi(a,l)}}}function OD(t,e,n){let r=ke.EMPTY_NODE;const s=ri(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(Mt,(i,o)=>{r=r.updateImmediateChild(i,o)}),r;if(n){const i=ts(t.visibleWrites,e);return n.forEachChild(Mt,(o,a)=>{const l=Zi(ts(i,new He(o)),a);r=r.updateImmediateChild(o,l)}),$y(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const i=ts(t.visibleWrites,e);return $y(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function xD(t,e,n,r,s){j(r||s,"Either existingEventSnap or existingServerSnap must exist");const i=ft(e,n);if(Ed(t.visibleWrites,i))return null;{const o=ts(t.visibleWrites,i);return wd(o)?s.getChild(n):Zi(o,s.getChild(n))}}function DD(t,e,n,r){const s=ft(e,n),i=ri(t.visibleWrites,s);if(i!=null)return i;if(r.isCompleteForChild(n)){const o=ts(t.visibleWrites,s);return Zi(o,r.getNode().getImmediateChild(n))}else return null}function MD(t,e){return ri(t.visibleWrites,e)}function LD(t,e,n,r,s,i,o){let a;const l=ts(t.visibleWrites,e),c=ri(l,Le());if(c!=null)a=c;else if(n!=null)a=Zi(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),f=i?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let d=f.getNext();for(;d&&u.length<s;)h(d,r)!==0&&u.push(d),d=f.getNext();return u}else return[]}function VD(){return{visibleWrites:xn.empty(),allWrites:[],lastWriteId:-1}}function Td(t,e,n,r){return $T(t.writeTree,t.treePath,e,n,r)}function FT(t,e){return OD(t.writeTree,t.treePath,e)}function Fy(t,e,n,r){return xD(t.writeTree,t.treePath,e,n,r)}function Xc(t,e){return MD(t.writeTree,ft(t.treePath,e))}function $D(t,e,n,r,s,i){return LD(t.writeTree,t.treePath,e,n,r,s,i)}function dm(t,e,n){return DD(t.writeTree,t.treePath,e,n)}function UT(t,e){return BT(ft(t.treePath,e),t.writeTree)}function BT(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FD{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;j(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),j(r!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(r);if(s){const i=s.type;if(n==="child_added"&&i==="child_removed")this.changeMap.set(r,Oy(r,e.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&i==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&i==="child_changed")this.changeMap.set(r,pD(r,s.oldSnap));else if(n==="child_changed"&&i==="child_added")this.changeMap.set(r,dD(r,e.snapshotNode));else if(n==="child_changed"&&i==="child_changed")this.changeMap.set(r,Oy(r,e.snapshotNode,s.oldSnap));else throw Io("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UD{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const jT=new UD;class pm{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new fm(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return dm(this.writes_,e,r)}}getChildAfterChild(e,n,r){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Ks(this.viewCache_),i=$D(this.writes_,s,n,1,r,e);return i.length===0?null:i[0]}}function BD(t,e){j(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),j(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function jD(t,e,n,r,s){const i=new FD;let o,a;if(n.type===Xn.OVERWRITE){const c=n;c.source.fromUser?o=bd(t,e,c.path,c.snap,r,s,i):(j(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!ye(c.path),o=Jc(t,e,c.path,c.snap,r,s,a,i))}else if(n.type===Xn.MERGE){const c=n;c.source.fromUser?o=HD(t,e,c.path,c.children,r,s,i):(j(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Id(t,e,c.path,c.children,r,s,a,i))}else if(n.type===Xn.ACK_USER_WRITE){const c=n;c.revert?o=KD(t,e,c.path,r,s,i):o=WD(t,e,c.path,c.affectedTree,r,s,i)}else if(n.type===Xn.LISTEN_COMPLETE)o=zD(t,e,n.path,r,i);else throw Io("Unknown operation type: "+n.type);const l=i.getChanges();return qD(e,o,l),{viewCache:o,changes:l}}function qD(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const s=r.getNode().isLeafNode()||r.getNode().isEmpty(),i=vd(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!r.getNode().equals(i)||!r.getNode().getPriority().equals(i.getPriority()))&&n.push(fD(vd(e)))}}function qT(t,e,n,r,s,i){const o=e.eventCache;if(Xc(r,n)!=null)return e;{let a,l;if(ye(n))if(j(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Ks(e),u=c instanceof ke?c:ke.EMPTY_NODE,h=FT(r,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,i)}else{const c=Td(r,Ks(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,i)}else{const c=Te(n);if(c===".priority"){j(is(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=Fy(r,n,u,l);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=Be(n);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const f=Fy(r,n,o.getNode(),l);f!=null?h=o.getNode().getImmediateChild(c).updateChild(u,f):h=o.getNode().getImmediateChild(c)}else h=dm(r,c,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),c,h,u,s,i):a=o.getNode()}}return ya(e,a,o.isFullyInitialized()||ye(n),t.filter.filtersNodes())}}function Jc(t,e,n,r,s,i,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(ye(n))c=u.updateFullNode(l.getNode(),r,null);else if(u.filtersNodes()&&!l.isFiltered()){const d=l.getNode().updateChild(n,r);c=u.updateFullNode(l.getNode(),d,null)}else{const d=Te(n);if(!l.isCompleteForPath(n)&&is(n)>1)return e;const m=Be(n),g=l.getNode().getImmediateChild(d).updateChild(m,r);d===".priority"?c=u.updatePriority(l.getNode(),g):c=u.updateChild(l.getNode(),d,g,m,jT,null)}const h=DT(e,c,l.isFullyInitialized()||ye(n),u.filtersNodes()),f=new pm(s,h,i);return qT(t,h,n,s,f,a)}function bd(t,e,n,r,s,i,o){const a=e.eventCache;let l,c;const u=new pm(s,e,i);if(ye(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=ya(e,c,!0,t.filter.filtersNodes());else{const h=Te(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),l=ya(e,c,a.isFullyInitialized(),a.isFiltered());else{const f=Be(n),d=a.getNode().getImmediateChild(h);let m;if(ye(f))m=r;else{const p=u.getCompleteChild(h);p!=null?vT(f)===".priority"&&p.getChild(wT(f)).isEmpty()?m=p:m=p.updateChild(f,r):m=ke.EMPTY_NODE}if(d.equals(m))l=e;else{const p=t.filter.updateChild(a.getNode(),h,m,f,u,o);l=ya(e,p,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Uy(t,e){return t.eventCache.isCompleteForChild(e)}function HD(t,e,n,r,s,i,o){let a=e;return r.foreach((l,c)=>{const u=ft(n,l);Uy(e,Te(u))&&(a=bd(t,a,u,c,s,i,o))}),r.foreach((l,c)=>{const u=ft(n,l);Uy(e,Te(u))||(a=bd(t,a,u,c,s,i,o))}),a}function By(t,e,n){return n.foreach((r,s)=>{e=e.updateChild(r,s)}),e}function Id(t,e,n,r,s,i,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;ye(n)?c=r:c=new Ue(null).setTree(n,r);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,f)=>{if(u.hasChild(h)){const d=e.serverCache.getNode().getImmediateChild(h),m=By(t,d,f);l=Jc(t,l,new He(h),m,s,i,o,a)}}),c.children.inorderTraversal((h,f)=>{const d=!e.serverCache.isCompleteForChild(h)&&f.value===null;if(!u.hasChild(h)&&!d){const m=e.serverCache.getNode().getImmediateChild(h),p=By(t,m,f);l=Jc(t,l,new He(h),p,s,i,o,a)}}),l}function WD(t,e,n,r,s,i,o){if(Xc(s,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(ye(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Jc(t,e,n,l.getNode().getChild(n),s,i,a,o);if(ye(n)){let c=new Ue(null);return l.getNode().forEachChild(Ui,(u,h)=>{c=c.set(new He(u),h)}),Id(t,e,n,c,s,i,a,o)}else return e}else{let c=new Ue(null);return r.foreach((u,h)=>{const f=ft(n,u);l.isCompleteForPath(f)&&(c=c.set(u,l.getNode().getChild(f)))}),Id(t,e,n,c,s,i,a,o)}}function zD(t,e,n,r,s){const i=e.serverCache,o=DT(e,i.getNode(),i.isFullyInitialized()||ye(n),i.isFiltered());return qT(t,o,n,r,jT,s)}function KD(t,e,n,r,s,i){let o;if(Xc(r,n)!=null)return e;{const a=new pm(r,e,s),l=e.eventCache.getNode();let c;if(ye(n)||Te(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Td(r,Ks(e));else{const h=e.serverCache.getNode();j(h instanceof ke,"serverChildren would be complete if leaf node"),u=FT(r,h)}u=u,c=t.filter.updateFullNode(l,u,i)}else{const u=Te(n);let h=dm(r,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=t.filter.updateChild(l,u,h,Be(n),a,i):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,ke.EMPTY_NODE,Be(n),a,i):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Td(r,Ks(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,i)))}return o=e.serverCache.isFullyInitialized()||Xc(r,Le())!=null,ya(e,c,o,t.filter.filtersNodes())}}function GD(t,e){const n=Ks(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!ye(e)&&!n.getImmediateChild(Te(e)).isEmpty())?n.getChild(e):null}function jy(t,e,n,r){e.type===Xn.MERGE&&e.source.queryId!==null&&(j(Ks(t.viewCache_),"We should always have a full cache before handling merges"),j(vd(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,i=jD(t.processor_,s,e,n,r);return BD(t.processor_,i.viewCache),j(i.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=i.viewCache,QD(t,i.changes,i.viewCache.eventCache.getNode(),null)}function QD(t,e,n,r){const s=r?[r]:t.eventRegistrations_;return TD(t.eventGenerator_,e,n,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qy;function YD(t){j(!qy,"__referenceConstructor has already been defined"),qy=t}function mm(t,e,n,r){const s=e.source.queryId;if(s!==null){const i=t.views.get(s);return j(i!=null,"SyncTree gave us an op for an invalid query."),jy(i,e,n,r)}else{let i=[];for(const o of t.views.values())i=i.concat(jy(o,e,n,r));return i}}function gm(t,e){let n=null;for(const r of t.views.values())n=n||GD(r,e);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hy;function XD(t){j(!Hy,"__referenceConstructor has already been defined"),Hy=t}class Wy{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ue(null),this.pendingWriteTree_=VD(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function JD(t,e,n,r,s){return RD(t.pendingWriteTree_,e,n,r,s),s?th(t,new zs(kT(),e,n)):[]}function ki(t,e,n=!1){const r=CD(t.pendingWriteTree_,e);if(SD(t.pendingWriteTree_,e)){let i=new Ue(null);return r.snap!=null?i=i.set(Le(),!0):Tn(r.children,o=>{i=i.set(new He(o),!0)}),th(t,new Yc(r.path,i,n))}else return[]}function eh(t,e,n){return th(t,new zs(NT(),e,n))}function ZD(t,e,n){const r=Ue.fromObject(n);return th(t,new Ha(NT(),e,r))}function e2(t,e,n,r){const s=KT(t,r);if(s!=null){const i=GT(s),o=i.path,a=i.queryId,l=gn(o,e),c=new zs(OT(a),l,n);return QT(t,o,c)}else return[]}function t2(t,e,n,r){const s=KT(t,r);if(s){const i=GT(s),o=i.path,a=i.queryId,l=gn(o,e),c=Ue.fromObject(n),u=new Ha(OT(a),l,c);return QT(t,o,u)}else return[]}function HT(t,e,n){const s=t.pendingWriteTree_,i=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=gn(o,e),c=gm(a,l);if(c)return c});return $T(s,e,i,n,!0)}function th(t,e){return WT(e,t.syncPointTree_,null,LT(t.pendingWriteTree_,Le()))}function WT(t,e,n,r){if(ye(t.path))return zT(t,e,n,r);{const s=e.get(Le());n==null&&s!=null&&(n=gm(s,Le()));let i=[];const o=Te(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=UT(r,o);i=i.concat(WT(a,l,c,u))}return s&&(i=i.concat(mm(s,t,r,n))),i}}function zT(t,e,n,r){const s=e.get(Le());n==null&&s!=null&&(n=gm(s,Le()));let i=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=UT(r,o),u=t.operationForChild(o);u&&(i=i.concat(zT(u,a,l,c)))}),s&&(i=i.concat(mm(s,t,r,n))),i}function KT(t,e){return t.tagToQueryMap.get(e)}function GT(t){const e=t.indexOf("$");return j(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new He(t.substr(0,e))}}function QT(t,e,n){const r=t.syncPointTree_.get(e);j(r,"Missing sync point for query tag that we're tracking");const s=LT(t.pendingWriteTree_,e);return mm(r,n,s,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _m{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new _m(n)}node(){return this.node_}}class ym{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ft(this.path_,e);return new ym(this.syncTree_,n)}node(){return HT(this.syncTree_,this.path_)}}const n2=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},zy=function(t,e,n){if(!t||typeof t!="object")return t;if(j(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return r2(t[".sv"],e,n);if(typeof t[".sv"]=="object")return s2(t[".sv"],e);j(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},r2=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:j(!1,"Unexpected server value: "+t)}},s2=function(t,e,n){t.hasOwnProperty("increment")||j(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&j(!1,"Unexpected increment value: "+r);const s=e.node();if(j(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return r;const o=s.getValue();return typeof o!="number"?r:o+r},i2=function(t,e,n,r){return vm(e,new ym(n,t),r)},o2=function(t,e,n){return vm(t,new _m(e),n)};function vm(t,e,n){const r=t.getPriority().val(),s=zy(r,e.getImmediateChild(".priority"),n);let i;if(t.isLeafNode()){const o=t,a=zy(o.getValue(),e,n);return a!==o.getValue()||s!==o.getPriority().val()?new lt(a,Ot(s)):t}else{const o=t;return i=o,s!==o.getPriority().val()&&(i=i.updatePriority(new lt(s))),o.forEachChild(Mt,(a,l)=>{const c=vm(l,e.getImmediateChild(a),n);c!==l&&(i=i.updateImmediateChild(a,c))}),i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Em{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function wm(t,e){let n=e instanceof He?e:new He(e),r=t,s=Te(n);for(;s!==null;){const i=Yi(r.node.children,s)||{children:{},childCount:0};r=new Em(s,r,i),n=Be(n),s=Te(n)}return r}function No(t){return t.node.value}function YT(t,e){t.node.value=e,Ad(t)}function XT(t){return t.node.childCount>0}function a2(t){return No(t)===void 0&&!XT(t)}function nh(t,e){Tn(t.node.children,(n,r)=>{e(new Em(n,t,r))})}function JT(t,e,n,r){n&&!r&&e(t),nh(t,s=>{JT(s,e,!0,r)}),n&&r&&e(t)}function l2(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function yl(t){return new He(t.parent===null?t.name:yl(t.parent)+"/"+t.name)}function Ad(t){t.parent!==null&&c2(t.parent,t.name,t)}function c2(t,e,n){const r=a2(n),s=Dr(t.node.children,e);r&&s?(delete t.node.children[e],t.node.childCount--,Ad(t)):!r&&!s&&(t.node.children[e]=n.node,t.node.childCount++,Ad(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u2=/[\[\].#$\/\u0000-\u001F\u007F]/,h2=/[\[\].#$\u0000-\u001F\u007F]/,df=10*1024*1024,ZT=function(t){return typeof t=="string"&&t.length!==0&&!u2.test(t)},f2=function(t){return typeof t=="string"&&t.length!==0&&!h2.test(t)},d2=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),f2(t)},eb=function(t,e,n){const r=n instanceof He?new zx(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Is(r));if(typeof e=="function")throw new Error(t+"contains a function "+Is(r)+" with contents = "+e.toString());if(Zw(e))throw new Error(t+"contains "+e.toString()+" "+Is(r));if(typeof e=="string"&&e.length>df/3&&zu(e)>df)throw new Error(t+"contains a string greater than "+df+" utf8 bytes "+Is(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,i=!1;if(Tn(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(i=!0,!ZT(o)))throw new Error(t+" contains an invalid key ("+o+") "+Is(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Kx(r,o),eb(t,a,r),Gx(r)}),s&&i)throw new Error(t+' contains ".value" child '+Is(r)+" in addition to actual children.")}},p2=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!ZT(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!d2(n))throw new Error(J1(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m2{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function g2(t,e){let n=null;for(let r=0;r<e.length;r++){const s=e[r],i=s.getPath();n!==null&&!TT(i,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:i}),n.events.push(s)}n&&t.eventLists_.push(n)}function si(t,e,n){g2(t,n),_2(t,r=>Sn(r,e)||Sn(e,r))}function _2(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const s=t.eventLists_[r];if(s){const i=s.path;e(i)?(y2(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function y2(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Ls&&Nt("event: "+n.toString()),gl(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v2="repo_interrupt",E2=25;class w2{constructor(e,n,r,s){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new m2,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Qc(),this.transactionQueueTree_=new Em,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function T2(t,e,n){if(t.stats_=am(t.repoInfo_),t.forceRestClient_||gx())t.server_=new Gc(t.repoInfo_,(r,s,i,o)=>{Ky(t,r,s,i,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Gy(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{wt(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new wr(t.repoInfo_,e,(r,s,i,o)=>{Ky(t,r,s,i,o)},r=>{Gy(t,r)},r=>{I2(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=Tx(t.repoInfo_,()=>new wD(t.stats_,t.server_)),t.infoData_=new gD,t.infoSyncTree_=new Wy({startListening:(r,s,i,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=eh(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Tm(t,"connected",!1),t.serverSyncTree_=new Wy({startListening:(r,s,i,o)=>(t.server_.listen(r,i,s,(a,l)=>{const c=o(a,l);si(t.eventQueue_,r._path,c)}),[]),stopListening:(r,s)=>{t.server_.unlisten(r,s)}})}function b2(t){const n=t.infoData_.getNode(new He(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function tb(t){return n2({timestamp:b2(t)})}function Ky(t,e,n,r,s){t.dataUpdateCount++;const i=new He(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(s)if(r){const l=Lc(n,c=>Ot(c));o=t2(t.serverSyncTree_,i,l,s)}else{const l=Ot(n);o=e2(t.serverSyncTree_,i,l,s)}else if(r){const l=Lc(n,c=>Ot(c));o=ZD(t.serverSyncTree_,i,l)}else{const l=Ot(n);o=eh(t.serverSyncTree_,i,l)}let a=i;o.length>0&&(a=Im(t,i)),si(t.eventQueue_,a,o)}function Gy(t,e){Tm(t,"connected",e),e===!1&&R2(t)}function I2(t,e){Tn(e,(n,r)=>{Tm(t,n,r)})}function Tm(t,e,n){const r=new He("/.info/"+e),s=Ot(n);t.infoData_.updateSnapshot(r,s);const i=eh(t.infoSyncTree_,r,s);si(t.eventQueue_,r,i)}function A2(t){return t.nextWriteId_++}function R2(t){nb(t,"onDisconnectEvents");const e=tb(t),n=Qc();yd(t.onDisconnect_,Le(),(s,i)=>{const o=i2(s,i,t.serverSyncTree_,e);PT(n,s,o)});let r=[];yd(n,Le(),(s,i)=>{r=r.concat(eh(t.serverSyncTree_,s,i));const o=k2(t,s);Im(t,o)}),t.onDisconnect_=Qc(),si(t.eventQueue_,Le(),r)}function C2(t){t.persistentConnection_&&t.persistentConnection_.interrupt(v2)}function nb(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Nt(n,...e)}function rb(t,e,n){return HT(t.serverSyncTree_,e,n)||ke.EMPTY_NODE}function bm(t,e=t.transactionQueueTree_){if(e||rh(t,e),No(e)){const n=ib(t,e);j(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&S2(t,yl(e),n)}else XT(e)&&nh(e,n=>{bm(t,n)})}function S2(t,e,n){const r=n.map(c=>c.currentWriteId),s=rb(t,e,r);let i=s;const o=s.hash();for(let c=0;c<n.length;c++){const u=n[c];j(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=gn(e,u.path);i=i.updateChild(h,u.currentOutputSnapshotRaw)}const a=i.val(!0),l=e;t.server_.put(l.toString(),a,c=>{nb(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let f=0;f<n.length;f++)n[f].status=2,u=u.concat(ki(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&h.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();rh(t,wm(t.transactionQueueTree_,e)),bm(t,t.transactionQueueTree_),si(t.eventQueue_,e,u);for(let f=0;f<h.length;f++)gl(h[f])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{hn("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}Im(t,e)}},o)}function Im(t,e){const n=sb(t,e),r=yl(n),s=ib(t,n);return P2(t,s,r),r}function P2(t,e,n){if(e.length===0)return;const r=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=gn(n,l.path);let u=!1,h;if(j(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,s=s.concat(ki(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=E2)u=!0,h="maxretry",s=s.concat(ki(t.serverSyncTree_,l.currentWriteId,!0));else{const f=rb(t,l.path,o);l.currentInputSnapshot=f;const d=e[a].update(f.val());if(d!==void 0){eb("transaction failed: Data returned ",d,l.path);let m=Ot(d);typeof d=="object"&&d!=null&&Dr(d,".priority")||(m=m.updatePriority(f.getPriority()));const g=l.currentWriteId,y=tb(t),w=o2(m,f,y);l.currentOutputSnapshotRaw=m,l.currentOutputSnapshotResolved=w,l.currentWriteId=A2(t),o.splice(o.indexOf(g),1),s=s.concat(JD(t.serverSyncTree_,l.path,w,l.currentWriteId,l.applyLocally)),s=s.concat(ki(t.serverSyncTree_,g,!0))}else u=!0,h="nodata",s=s.concat(ki(t.serverSyncTree_,l.currentWriteId,!0))}si(t.eventQueue_,n,s),s=[],u&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(h),!1,null))))}rh(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)gl(r[a]);bm(t,t.transactionQueueTree_)}function sb(t,e){let n,r=t.transactionQueueTree_;for(n=Te(e);n!==null&&No(r)===void 0;)r=wm(r,n),e=Be(e),n=Te(e);return r}function ib(t,e){const n=[];return ob(t,e,n),n.sort((r,s)=>r.order-s.order),n}function ob(t,e,n){const r=No(e);if(r)for(let s=0;s<r.length;s++)n.push(r[s]);nh(e,s=>{ob(t,s,n)})}function rh(t,e){const n=No(e);if(n){let r=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[r]=n[s],r++);n.length=r,YT(e,n.length>0?n:void 0)}nh(e,r=>{rh(t,r)})}function k2(t,e){const n=yl(sb(t,e)),r=wm(t.transactionQueueTree_,e);return l2(r,s=>{pf(t,s)}),pf(t,r),JT(r,s=>{pf(t,s)}),n}function pf(t,e){const n=No(e);if(n){const r=[];let s=[],i=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(j(i===o-1,"All SENT items should be at beginning of queue."),i=o,n[o].status=3,n[o].abortReason="set"):(j(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),s=s.concat(ki(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));i===-1?YT(e,void 0):n.length=i+1,si(t.eventQueue_,yl(e),s);for(let o=0;o<r.length;o++)gl(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N2(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let s=n[r];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function O2(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):hn(`Invalid query segment '${n}' in query '${t}'`)}return e}const Qy=function(t,e){const n=x2(t),r=n.namespace;n.domain==="firebase.com"&&Hs(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Hs("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||lx();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new vx(n.host,n.secure,r,s,e,"",r!==n.subdomain),path:new He(n.pathString)}},x2=function(t){let e="",n="",r="",s="",i="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(s=N2(t.substring(u,h)));const f=O2(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const d=e.slice(0,c);if(d.toLowerCase()==="localhost")n="localhost";else if(d.split(".").length<=2)n=d;else{const m=e.indexOf(".");r=e.substring(0,m).toLowerCase(),n=e.substring(m+1),i=r}"ns"in f&&(i=f.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:s,namespace:i}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Am{constructor(e,n,r,s){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=s}get key(){return ye(this._path)?null:vT(this._path)}get ref(){return new Oo(this._repo,this._path)}get _queryIdentifier(){const e=Dy(this._queryParams),n=im(e);return n==="{}"?"default":n}get _queryObject(){return Dy(this._queryParams)}isEqual(e){if(e=Fe(e),!(e instanceof Am))return!1;const n=this._repo===e._repo,r=TT(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return n&&r&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+Wx(this._path)}}class Oo extends Am{constructor(e,n){super(e,n,new hm,!1)}get parent(){const e=wT(this._path);return e===null?null:new Oo(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}YD(Oo);XD(Oo);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D2="FIREBASE_DATABASE_EMULATOR_HOST",Rd={};let M2=!1;function L2(t,e,n,r,s){let i=r||t.options.databaseURL;i===void 0&&(t.options.projectId||Hs("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Nt("Using default host for project ",t.options.projectId),i=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Qy(i,s),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[D2]),c?(l=!0,i=`http://${c}?ns=${a.namespace}`,o=Qy(i,s),a=o.repoInfo):l=!o.repoInfo.secure;const u=s&&l?new md(md.OWNER):new yx(t.name,t.options,e);p2("Invalid Firebase Database URL",o),ye(o.path)||Hs("Database URL must point to the root of a Firebase Database (not including a child path).");const h=$2(a,t,u,new _x(t.name,n));return new F2(h,t)}function V2(t,e){const n=Rd[e];(!n||n[t.key]!==t)&&Hs(`Database ${e}(${t.repoInfo_}) has already been deleted.`),C2(t),delete n[t.key]}function $2(t,e,n,r){let s=Rd[e.name];s||(s={},Rd[e.name]=s);let i=s[t.toURLString()];return i&&Hs("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),i=new w2(t,M2,n,r),s[t.toURLString()]=i,i}class F2{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(T2(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Oo(this._repo,Le())),this._rootInternal}_delete(){return this._rootInternal!==null&&(V2(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Hs("Cannot call "+e+" on a deleted database.")}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U2(t){rx(hs),ar(new Mn("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return L2(r,s,i,n)},"PUBLIC").setMultipleInstances(!0)),un(gy,_y,t),un(gy,_y,"esm2017")}wr.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};wr.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};U2();var B2=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},q,Rm=Rm||{},ie=B2||self;function sh(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function vl(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function j2(t){return Object.prototype.hasOwnProperty.call(t,mf)&&t[mf]||(t[mf]=++q2)}var mf="closure_uid_"+(1e9*Math.random()>>>0),q2=0;function H2(t,e,n){return t.call.apply(t.bind,arguments)}function W2(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function Lt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Lt=H2:Lt=W2,Lt.apply(null,arguments)}function ec(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function mt(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function ds(){this.s=this.s,this.o=this.o}var z2=0;ds.prototype.s=!1;ds.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),z2!=0)&&j2(this)};ds.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const ab=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Cm(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Yy(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(sh(r)){const s=t.length||0,i=r.length||0;t.length=s+i;for(let o=0;o<i;o++)t[s+o]=r[o]}else t.push(r)}}function Vt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Vt.prototype.h=function(){this.defaultPrevented=!0};var K2=function(){if(!ie.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{ie.addEventListener("test",()=>{},e),ie.removeEventListener("test",()=>{},e)}catch{}return t}();function Wa(t){return/^[\s\xa0]*$/.test(t)}function ih(){var t=ie.navigator;return t&&(t=t.userAgent)?t:""}function Gn(t){return ih().indexOf(t)!=-1}function Sm(t){return Sm[" "](t),t}Sm[" "]=function(){};function G2(t,e){var n=UM;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var Q2=Gn("Opera"),eo=Gn("Trident")||Gn("MSIE"),lb=Gn("Edge"),Cd=lb||eo,cb=Gn("Gecko")&&!(ih().toLowerCase().indexOf("webkit")!=-1&&!Gn("Edge"))&&!(Gn("Trident")||Gn("MSIE"))&&!Gn("Edge"),Y2=ih().toLowerCase().indexOf("webkit")!=-1&&!Gn("Edge");function ub(){var t=ie.document;return t?t.documentMode:void 0}var Sd;e:{var gf="",_f=function(){var t=ih();if(cb)return/rv:([^\);]+)(\)|;)/.exec(t);if(lb)return/Edge\/([\d\.]+)/.exec(t);if(eo)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(Y2)return/WebKit\/(\S+)/.exec(t);if(Q2)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(_f&&(gf=_f?_f[1]:""),eo){var yf=ub();if(yf!=null&&yf>parseFloat(gf)){Sd=String(yf);break e}}Sd=gf}var Pd;if(ie.document&&eo){var Xy=ub();Pd=Xy||parseInt(Sd,10)||void 0}else Pd=void 0;var X2=Pd;function za(t,e){if(Vt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(cb){e:{try{Sm(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:J2[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&za.$.h.call(this)}}mt(za,Vt);var J2={2:"touch",3:"pen",4:"mouse"};za.prototype.h=function(){za.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var El="closure_listenable_"+(1e6*Math.random()|0),Z2=0;function eM(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=s,this.key=++Z2,this.fa=this.ia=!1}function oh(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Pm(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function tM(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function hb(t){const e={};for(const n in t)e[n]=t[n];return e}const Jy="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function fb(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<Jy.length;i++)n=Jy[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function ah(t){this.src=t,this.g={},this.h=0}ah.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=Nd(t,e,r,s);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new eM(e,this.src,i,!!r,s),e.ia=n,t.push(e)),e};function kd(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=ab(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(oh(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Nd(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.fa&&i.listener==e&&i.capture==!!n&&i.la==r)return s}return-1}var km="closure_lm_"+(1e6*Math.random()|0),vf={};function db(t,e,n,r,s){if(r&&r.once)return mb(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)db(t,e[i],n,r,s);return null}return n=xm(n),t&&t[El]?t.O(e,n,vl(r)?!!r.capture:!!r,s):pb(t,e,n,!1,r,s)}function pb(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=vl(s)?!!s.capture:!!s,a=Om(t);if(a||(t[km]=a=new ah(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=nM(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)K2||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(_b(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function nM(){function t(n){return e.call(t.src,t.listener,n)}const e=rM;return t}function mb(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)mb(t,e[i],n,r,s);return null}return n=xm(n),t&&t[El]?t.P(e,n,vl(r)?!!r.capture:!!r,s):pb(t,e,n,!0,r,s)}function gb(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)gb(t,e[i],n,r,s);else r=vl(r)?!!r.capture:!!r,n=xm(n),t&&t[El]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=Nd(i,n,r,s),-1<n&&(oh(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Om(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Nd(e,n,r,s)),(n=-1<t?e[t]:null)&&Nm(n))}function Nm(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[El])kd(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(_b(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Om(e))?(kd(n,t),n.h==0&&(n.src=null,e[km]=null)):oh(t)}}}function _b(t){return t in vf?vf[t]:vf[t]="on"+t}function rM(t,e){if(t.fa)t=!0;else{e=new za(e,this);var n=t.listener,r=t.la||t.src;t.ia&&Nm(t),t=n.call(r,e)}return t}function Om(t){return t=t[km],t instanceof ah?t:null}var Ef="__closure_events_fn_"+(1e9*Math.random()>>>0);function xm(t){return typeof t=="function"?t:(t[Ef]||(t[Ef]=function(e){return t.handleEvent(e)}),t[Ef])}function pt(){ds.call(this),this.i=new ah(this),this.S=this,this.J=null}mt(pt,ds);pt.prototype[El]=!0;pt.prototype.removeEventListener=function(t,e,n,r){gb(this,t,e,n,r)};function At(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new Vt(e,t);else if(e instanceof Vt)e.target=e.target||t;else{var s=e;e=new Vt(r,t),fb(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=tc(o,r,!0,e)&&s}if(o=e.g=t,s=tc(o,r,!0,e)&&s,s=tc(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=tc(o,r,!1,e)&&s}pt.prototype.N=function(){if(pt.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)oh(n[r]);delete t.g[e],t.h--}}this.J=null};pt.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};pt.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function tc(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&kd(t.i,o),s=a.call(l,r)!==!1&&s}}return s&&!r.defaultPrevented}var Dm=ie.JSON.stringify;class sM{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function iM(){var t=Mm;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class oM{constructor(){this.h=this.g=null}add(e,n){const r=yb.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var yb=new sM(()=>new aM,t=>t.reset());class aM{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function lM(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function cM(t){ie.setTimeout(()=>{throw t},0)}let Ka,Ga=!1,Mm=new oM,vb=()=>{const t=ie.Promise.resolve(void 0);Ka=()=>{t.then(uM)}};var uM=()=>{for(var t;t=iM();){try{t.h.call(t.g)}catch(n){cM(n)}var e=yb;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ga=!1};function lh(t,e){pt.call(this),this.h=t||1,this.g=e||ie,this.j=Lt(this.qb,this),this.l=Date.now()}mt(lh,pt);q=lh.prototype;q.ga=!1;q.T=null;q.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),At(this,"tick"),this.ga&&(Lm(this),this.start()))}};q.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Lm(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}q.N=function(){lh.$.N.call(this),Lm(this),delete this.g};function Vm(t,e,n){if(typeof t=="function")n&&(t=Lt(t,n));else if(t&&typeof t.handleEvent=="function")t=Lt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:ie.setTimeout(t,e||0)}function Eb(t){t.g=Vm(()=>{t.g=null,t.i&&(t.i=!1,Eb(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class hM extends ds{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Eb(this)}N(){super.N(),this.g&&(ie.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Qa(t){ds.call(this),this.h=t,this.g={}}mt(Qa,ds);var Zy=[];function wb(t,e,n,r){Array.isArray(n)||(n&&(Zy[0]=n.toString()),n=Zy);for(var s=0;s<n.length;s++){var i=db(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function Tb(t){Pm(t.g,function(e,n){this.g.hasOwnProperty(n)&&Nm(e)},t),t.g={}}Qa.prototype.N=function(){Qa.$.N.call(this),Tb(this)};Qa.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function ch(){this.g=!0}ch.prototype.Ea=function(){this.g=!1};function fM(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function dM(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function Ni(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+mM(t,n)+(r?" "+r:"")})}function pM(t,e){t.info(function(){return"TIMEOUT: "+e})}ch.prototype.info=function(){};function mM(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Dm(n)}catch{return e}}var ii={},ev=null;function uh(){return ev=ev||new pt}ii.Ta="serverreachability";function bb(t){Vt.call(this,ii.Ta,t)}mt(bb,Vt);function Ya(t){const e=uh();At(e,new bb(e))}ii.STAT_EVENT="statevent";function Ib(t,e){Vt.call(this,ii.STAT_EVENT,t),this.stat=e}mt(Ib,Vt);function qt(t){const e=uh();At(e,new Ib(e,t))}ii.Ua="timingevent";function Ab(t,e){Vt.call(this,ii.Ua,t),this.size=e}mt(Ab,Vt);function wl(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return ie.setTimeout(function(){t()},e)}var hh={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Rb={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function $m(){}$m.prototype.h=null;function tv(t){return t.h||(t.h=t.i())}function Cb(){}var Tl={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Fm(){Vt.call(this,"d")}mt(Fm,Vt);function Um(){Vt.call(this,"c")}mt(Um,Vt);var Od;function fh(){}mt(fh,$m);fh.prototype.g=function(){return new XMLHttpRequest};fh.prototype.i=function(){return{}};Od=new fh;function bl(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new Qa(this),this.P=gM,t=Cd?125:void 0,this.V=new lh(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Sb}function Sb(){this.i=null,this.g="",this.h=!1}var gM=45e3,xd={},Zc={};q=bl.prototype;q.setTimeout=function(t){this.P=t};function Dd(t,e,n){t.L=1,t.v=ph(Cr(e)),t.s=n,t.S=!0,Pb(t,null)}function Pb(t,e){t.G=Date.now(),Il(t),t.A=Cr(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),Vb(n.i,"t",r),t.C=0,n=t.l.J,t.h=new Sb,t.g=sI(t.l,n?e:null,!t.s),0<t.O&&(t.M=new hM(Lt(t.Pa,t,t.g),t.O)),wb(t.U,t.g,"readystatechange",t.nb),e=t.I?hb(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),Ya(),fM(t.j,t.u,t.A,t.m,t.W,t.s)}q.nb=function(t){t=t.target;const e=this.M;e&&Jn(t)==3?e.l():this.Pa(t)};q.Pa=function(t){try{if(t==this.g)e:{const u=Jn(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||Cd||this.g&&(this.h.h||this.g.ja()||iv(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?Ya(3):Ya(2)),dh(this);var n=this.g.da();this.ca=n;t:if(kb(this)){var r=iv(this.g);t="";var s=r.length,i=Jn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ks(this),Ea(this);var o="";break t}this.h.i=new ie.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,dM(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Wa(a)){var c=a;break t}}c=null}if(n=c)Ni(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Md(this,n);else{this.i=!1,this.o=3,qt(12),ks(this),Ea(this);break e}}this.S?(Nb(this,u,o),Cd&&this.i&&u==3&&(wb(this.U,this.V,"tick",this.mb),this.V.start())):(Ni(this.j,this.m,o,null),Md(this,o)),u==4&&ks(this),this.i&&!this.J&&(u==4?eI(this.l,this):(this.i=!1,Il(this)))}else VM(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,qt(12)):(this.o=0,qt(13)),ks(this),Ea(this)}}}catch{}finally{}};function kb(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function Nb(t,e,n){let r=!0,s;for(;!t.J&&t.C<n.length;)if(s=_M(t,n),s==Zc){e==4&&(t.o=4,qt(14),r=!1),Ni(t.j,t.m,null,"[Incomplete Response]");break}else if(s==xd){t.o=4,qt(15),Ni(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Ni(t.j,t.m,s,null),Md(t,s);kb(t)&&s!=Zc&&s!=xd&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,qt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),zm(e),e.M=!0,qt(11))):(Ni(t.j,t.m,n,"[Invalid Chunked Response]"),ks(t),Ea(t))}q.mb=function(){if(this.g){var t=Jn(this.g),e=this.g.ja();this.C<e.length&&(dh(this),Nb(this,t,e),this.i&&t!=4&&Il(this))}};function _M(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Zc:(n=Number(e.substring(n,r)),isNaN(n)?xd:(r+=1,r+n>e.length?Zc:(e=e.slice(r,r+n),t.C=r+n,e)))}q.cancel=function(){this.J=!0,ks(this)};function Il(t){t.Y=Date.now()+t.P,Ob(t,t.P)}function Ob(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=wl(Lt(t.lb,t),e)}function dh(t){t.B&&(ie.clearTimeout(t.B),t.B=null)}q.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(pM(this.j,this.A),this.L!=2&&(Ya(),qt(17)),ks(this),this.o=2,Ea(this)):Ob(this,this.Y-t)};function Ea(t){t.l.H==0||t.J||eI(t.l,t)}function ks(t){dh(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Lm(t.V),Tb(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Md(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Ld(n.i,t))){if(!t.K&&Ld(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)nu(n),yh(n);else break e;Wm(n),qt(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=wl(Lt(n.ib,n),6e3));if(1>=Ub(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Ns(n,11)}else if((t.K||n.g==t)&&nu(n),!Wa(e))for(s=n.Ja.g.parse(e),e=0;e<s.length;e++){let c=s[e];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.K=c[1],n.pa=c[2];const u=c[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=c[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const f=c[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const d=t.g;if(d){const m=d.g?d.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var i=r.i;i.g||m.indexOf("spdy")==-1&&m.indexOf("quic")==-1&&m.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Bm(i,i.h),i.h=null))}if(r.F){const p=d.g?d.g.getResponseHeader("X-HTTP-Session-Id"):null;p&&(r.Da=p,je(r.I,r.F,p))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=rI(r,r.J?r.pa:null,r.Y),o.K){Bb(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.B&&(dh(a),Il(a)),r.g=o}else Jb(r);0<n.j.length&&vh(n)}else c[0]!="stop"&&c[0]!="close"||Ns(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?Ns(n,7):Hm(n):c[0]!="noop"&&n.h&&n.h.Aa(c),n.A=0)}}Ya(4)}catch{}}function yM(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(sh(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function vM(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(sh(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function xb(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(sh(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=vM(t),r=yM(t),s=r.length,i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}var Db=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function EM(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function Vs(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Vs){this.h=t.h,eu(this,t.j),this.s=t.s,this.g=t.g,tu(this,t.m),this.l=t.l;var e=t.i,n=new Xa;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),nv(this,n),this.o=t.o}else t&&(e=String(t).match(Db))?(this.h=!1,eu(this,e[1]||"",!0),this.s=ra(e[2]||""),this.g=ra(e[3]||"",!0),tu(this,e[4]),this.l=ra(e[5]||"",!0),nv(this,e[6]||"",!0),this.o=ra(e[7]||"")):(this.h=!1,this.i=new Xa(null,this.h))}Vs.prototype.toString=function(){var t=[],e=this.j;e&&t.push(sa(e,rv,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(sa(e,rv,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(sa(n,n.charAt(0)=="/"?bM:TM,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",sa(n,AM)),t.join("")};function Cr(t){return new Vs(t)}function eu(t,e,n){t.j=n?ra(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function tu(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function nv(t,e,n){e instanceof Xa?(t.i=e,RM(t.i,t.h)):(n||(e=sa(e,IM)),t.i=new Xa(e,t.h))}function je(t,e,n){t.i.set(e,n)}function ph(t){return je(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function ra(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function sa(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,wM),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function wM(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var rv=/[#\/\?@]/g,TM=/[#\?:]/g,bM=/[#\?]/g,IM=/[#\?@]/g,AM=/#/g;function Xa(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function ps(t){t.g||(t.g=new Map,t.h=0,t.i&&EM(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}q=Xa.prototype;q.add=function(t,e){ps(this),this.i=null,t=xo(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Mb(t,e){ps(t),e=xo(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Lb(t,e){return ps(t),e=xo(t,e),t.g.has(e)}q.forEach=function(t,e){ps(this),this.g.forEach(function(n,r){n.forEach(function(s){t.call(e,s,r,this)},this)},this)};q.ta=function(){ps(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const s=t[r];for(let i=0;i<s.length;i++)n.push(e[r])}return n};q.Z=function(t){ps(this);let e=[];if(typeof t=="string")Lb(this,t)&&(e=e.concat(this.g.get(xo(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};q.set=function(t,e){return ps(this),this.i=null,t=xo(this,t),Lb(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};q.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function Vb(t,e,n){Mb(t,e),0<n.length&&(t.i=null,t.g.set(xo(t,e),Cm(n)),t.h+=n.length)}q.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),t.push(s)}}return this.i=t.join("&")};function xo(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function RM(t,e){e&&!t.j&&(ps(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(Mb(this,r),Vb(this,s,n))},t)),t.j=e}var CM=class{constructor(t,e){this.g=t,this.map=e}};function $b(t){this.l=t||SM,ie.PerformanceNavigationTiming?(t=ie.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(ie.g&&ie.g.Ka&&ie.g.Ka()&&ie.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var SM=10;function Fb(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Ub(t){return t.h?1:t.g?t.g.size:0}function Ld(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Bm(t,e){t.g?t.g.add(e):t.h=e}function Bb(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}$b.prototype.cancel=function(){if(this.i=jb(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function jb(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Cm(t.i)}var PM=class{stringify(t){return ie.JSON.stringify(t,void 0)}parse(t){return ie.JSON.parse(t,void 0)}};function kM(){this.g=new PM}function NM(t,e,n){const r=n||"";try{xb(t,function(s,i){let o=s;vl(s)&&(o=Dm(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function OM(t,e){const n=new ch;if(ie.Image){const r=new Image;r.onload=ec(nc,n,r,"TestLoadImage: loaded",!0,e),r.onerror=ec(nc,n,r,"TestLoadImage: error",!1,e),r.onabort=ec(nc,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=ec(nc,n,r,"TestLoadImage: timeout",!1,e),ie.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function nc(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function mh(t){this.l=t.ec||null,this.j=t.ob||!1}mt(mh,$m);mh.prototype.g=function(){return new gh(this.l,this.j)};mh.prototype.i=function(t){return function(){return t}}({});function gh(t,e){pt.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=jm,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}mt(gh,pt);var jm=0;q=gh.prototype;q.open=function(t,e){if(this.readyState!=jm)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Ja(this)};q.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||ie).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};q.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Al(this)),this.readyState=jm};q.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Ja(this)),this.g&&(this.readyState=3,Ja(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof ie.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;qb(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function qb(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}q.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Al(this):Ja(this),this.readyState==3&&qb(this)}};q.Za=function(t){this.g&&(this.response=this.responseText=t,Al(this))};q.Ya=function(t){this.g&&(this.response=t,Al(this))};q.ka=function(){this.g&&Al(this)};function Al(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Ja(t)}q.setRequestHeader=function(t,e){this.v.append(t,e)};q.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};q.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Ja(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(gh.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var xM=ie.JSON.parse;function Ye(t){pt.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Hb,this.L=this.M=!1}mt(Ye,pt);var Hb="",DM=/^https?$/i,MM=["POST","PUT"];q=Ye.prototype;q.Oa=function(t){this.M=t};q.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Od.g(),this.C=this.u?tv(this.u):tv(Od),this.g.onreadystatechange=Lt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(i){sv(this,i);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=ie.FormData&&t instanceof ie.FormData,!(0<=ab(MM,e))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Kb(this),0<this.B&&((this.L=LM(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Lt(this.ua,this)):this.A=Vm(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){sv(this,i)}};function LM(t){return eo&&typeof t.timeout=="number"&&t.ontimeout!==void 0}q.ua=function(){typeof Rm<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,At(this,"timeout"),this.abort(8))};function sv(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Wb(t),_h(t)}function Wb(t){t.F||(t.F=!0,At(t,"complete"),At(t,"error"))}q.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,At(this,"complete"),At(this,"abort"),_h(this))};q.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),_h(this,!0)),Ye.$.N.call(this)};q.La=function(){this.s||(this.G||this.v||this.l?zb(this):this.kb())};q.kb=function(){zb(this)};function zb(t){if(t.h&&typeof Rm<"u"&&(!t.C[1]||Jn(t)!=4||t.da()!=2)){if(t.v&&Jn(t)==4)Vm(t.La,0,t);else if(At(t,"readystatechange"),Jn(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var s=String(t.I).match(Db)[1]||null;!s&&ie.self&&ie.self.location&&(s=ie.self.location.protocol.slice(0,-1)),r=!DM.test(s?s.toLowerCase():"")}n=r}if(n)At(t,"complete"),At(t,"success");else{t.m=6;try{var i=2<Jn(t)?t.g.statusText:""}catch{i=""}t.j=i+" ["+t.da()+"]",Wb(t)}}finally{_h(t)}}}}function _h(t,e){if(t.g){Kb(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||At(t,"ready");try{n.onreadystatechange=r}catch{}}}function Kb(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(ie.clearTimeout(t.A),t.A=null)}q.isActive=function(){return!!this.g};function Jn(t){return t.g?t.g.readyState:0}q.da=function(){try{return 2<Jn(this)?this.g.status:-1}catch{return-1}};q.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};q.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),xM(e)}};function iv(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case Hb:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function VM(t){const e={};t=(t.g&&2<=Jn(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(Wa(t[r]))continue;var n=lM(t[r]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=e[s]||[];e[s]=i,i.push(n)}tM(e,function(r){return r.join(", ")})}q.Ia=function(){return this.m};q.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Gb(t){let e="";return Pm(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function qm(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Gb(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):je(t,e,n))}function zo(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Qb(t){this.Ga=0,this.j=[],this.l=new ch,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=zo("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=zo("baseRetryDelayMs",5e3,t),this.hb=zo("retryDelaySeedMs",1e4,t),this.eb=zo("forwardChannelMaxRetries",2,t),this.xa=zo("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new $b(t&&t.concurrentRequestLimit),this.Ja=new kM,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}q=Qb.prototype;q.ra=8;q.H=1;function Hm(t){if(Yb(t),t.H==3){var e=t.W++,n=Cr(t.I);if(je(n,"SID",t.K),je(n,"RID",e),je(n,"TYPE","terminate"),Rl(t,n),e=new bl(t,t.l,e),e.L=2,e.v=ph(Cr(n)),n=!1,ie.navigator&&ie.navigator.sendBeacon)try{n=ie.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&ie.Image&&(new Image().src=e.v,n=!0),n||(e.g=sI(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Il(e)}nI(t)}function yh(t){t.g&&(zm(t),t.g.cancel(),t.g=null)}function Yb(t){yh(t),t.u&&(ie.clearTimeout(t.u),t.u=null),nu(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&ie.clearTimeout(t.m),t.m=null)}function vh(t){if(!Fb(t.i)&&!t.m){t.m=!0;var e=t.Na;Ka||vb(),Ga||(Ka(),Ga=!0),Mm.add(e,t),t.C=0}}function $M(t,e){return Ub(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=wl(Lt(t.Na,t,e),tI(t,t.C)),t.C++,!0)}q.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const s=new bl(this,this.l,t);let i=this.s;if(this.U&&(i?(i=hb(i),fb(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Xb(this,s,e),n=Cr(this.I),je(n,"RID",t),je(n,"CVER",22),this.F&&je(n,"X-HTTP-Session-Id",this.F),Rl(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(Gb(i)))+"&"+e:this.o&&qm(n,this.o,i)),Bm(this.i,s),this.bb&&je(n,"TYPE","init"),this.P?(je(n,"$req",e),je(n,"SID","null"),s.aa=!0,Dd(s,n,null)):Dd(s,n,e),this.H=2}}else this.H==3&&(t?ov(this,t):this.j.length==0||Fb(this.i)||ov(this))};function ov(t,e){var n;e?n=e.m:n=t.W++;const r=Cr(t.I);je(r,"SID",t.K),je(r,"RID",n),je(r,"AID",t.V),Rl(t,r),t.o&&t.s&&qm(r,t.o,t.s),n=new bl(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=Xb(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Bm(t.i,n),Dd(n,r,e)}function Rl(t,e){t.na&&Pm(t.na,function(n,r){je(e,r,n)}),t.h&&xb({},function(n,r){je(e,r,n)})}function Xb(t,e,n){n=Math.min(t.j.length,n);var r=t.h?Lt(t.h.Va,t.h,t):null;e:{var s=t.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let l=0;l<n;l++){let c=s[l].g;const u=s[l].map;if(c-=i,0>c)i=Math.max(0,s[l].g-100),a=!1;else try{NM(u,o,"req"+c+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function Jb(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Ka||vb(),Ga||(Ka(),Ga=!0),Mm.add(e,t),t.A=0}}function Wm(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=wl(Lt(t.Ma,t),tI(t,t.A)),t.A++,!0)}q.Ma=function(){if(this.u=null,Zb(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=wl(Lt(this.jb,this),t)}};q.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,qt(10),yh(this),Zb(this))};function zm(t){t.B!=null&&(ie.clearTimeout(t.B),t.B=null)}function Zb(t){t.g=new bl(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Cr(t.wa);je(e,"RID","rpc"),je(e,"SID",t.K),je(e,"AID",t.V),je(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&je(e,"TO",t.qa),je(e,"TYPE","xmlhttp"),Rl(t,e),t.o&&t.s&&qm(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=ph(Cr(e)),n.s=null,n.S=!0,Pb(n,t)}q.ib=function(){this.v!=null&&(this.v=null,yh(this),Wm(this),qt(19))};function nu(t){t.v!=null&&(ie.clearTimeout(t.v),t.v=null)}function eI(t,e){var n=null;if(t.g==e){nu(t),zm(t),t.g=null;var r=2}else if(Ld(t.i,e))n=e.F,Bb(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var s=t.C;r=uh(),At(r,new Ab(r,n)),vh(t)}else Jb(t);else if(s=e.o,s==3||s==0&&0<e.ca||!(r==1&&$M(t,e)||r==2&&Wm(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:Ns(t,5);break;case 4:Ns(t,10);break;case 3:Ns(t,6);break;default:Ns(t,2)}}}function tI(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Ns(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=Lt(t.pb,t);n||(n=new Vs("//www.google.com/images/cleardot.gif"),ie.location&&ie.location.protocol=="http"||eu(n,"https"),ph(n)),OM(n.toString(),r)}else qt(2);t.H=0,t.h&&t.h.za(e),nI(t),Yb(t)}q.pb=function(t){t?(this.l.info("Successfully pinged google.com"),qt(2)):(this.l.info("Failed to ping google.com"),qt(1))};function nI(t){if(t.H=0,t.ma=[],t.h){const e=jb(t.i);(e.length!=0||t.j.length!=0)&&(Yy(t.ma,e),Yy(t.ma,t.j),t.i.i.length=0,Cm(t.j),t.j.length=0),t.h.ya()}}function rI(t,e,n){var r=n instanceof Vs?Cr(n):new Vs(n);if(r.g!="")e&&(r.g=e+"."+r.g),tu(r,r.m);else{var s=ie.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var i=new Vs(null);r&&eu(i,r),e&&(i.g=e),s&&tu(i,s),n&&(i.l=n),r=i}return n=t.F,e=t.Da,n&&e&&je(r,n,e),je(r,"VER",t.ra),Rl(t,r),r}function sI(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Ye(new mh({ob:!0})):new Ye(t.va),e.Oa(t.J),e}q.isActive=function(){return!!this.h&&this.h.isActive(this)};function iI(){}q=iI.prototype;q.Ba=function(){};q.Aa=function(){};q.za=function(){};q.ya=function(){};q.isActive=function(){return!0};q.Va=function(){};function ru(){if(eo&&!(10<=Number(X2)))throw Error("Environmental error: no available transport.")}ru.prototype.g=function(t,e){return new dn(t,e)};function dn(t,e){pt.call(this),this.g=new Qb(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Wa(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Wa(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Do(this)}mt(dn,pt);dn.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;qt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=rI(t,null,t.Y),vh(t)};dn.prototype.close=function(){Hm(this.g)};dn.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Dm(t),t=n);e.j.push(new CM(e.fb++,t)),e.H==3&&vh(e)};dn.prototype.N=function(){this.g.h=null,delete this.j,Hm(this.g),delete this.g,dn.$.N.call(this)};function oI(t){Fm.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}mt(oI,Fm);function aI(){Um.call(this),this.status=1}mt(aI,Um);function Do(t){this.g=t}mt(Do,iI);Do.prototype.Ba=function(){At(this.g,"a")};Do.prototype.Aa=function(t){At(this.g,new oI(t))};Do.prototype.za=function(t){At(this.g,new aI)};Do.prototype.ya=function(){At(this.g,"b")};function FM(){this.blockSize=-1}function $n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}mt($n,FM);$n.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function wf(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var s=0;16>s;++s)r[s]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],s=t.g[2];var i=t.g[3],o=e+(i^n&(s^i))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(s^i&(n^s))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(n^s^i)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(s^(n|~i))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+s&4294967295,t.g[3]=t.g[3]+i&4294967295}$n.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,s=this.h,i=0;i<e;){if(s==0)for(;i<=n;)wf(this,t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<e;)if(r[s++]=t.charCodeAt(i++),s==this.blockSize){wf(this,r),s=0;break}}else for(;i<e;)if(r[s++]=t[i++],s==this.blockSize){wf(this,r),s=0;break}}this.h=s,this.i+=e};$n.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function xe(t,e){this.h=e;for(var n=[],r=!0,s=t.length-1;0<=s;s--){var i=t[s]|0;r&&i==e||(n[s]=i,r=!1)}this.g=n}var UM={};function Km(t){return-128<=t&&128>t?G2(t,function(e){return new xe([e|0],0>e?-1:0)}):new xe([t|0],0>t?-1:0)}function Zn(t){if(isNaN(t)||!isFinite(t))return Bi;if(0>t)return vt(Zn(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Vd;return new xe(e,0)}function lI(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return vt(lI(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Zn(Math.pow(e,8)),r=Bi,s=0;s<t.length;s+=8){var i=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+i),e);8>i?(i=Zn(Math.pow(e,i)),r=r.R(i).add(Zn(o))):(r=r.R(n),r=r.add(Zn(o)))}return r}var Vd=4294967296,Bi=Km(0),$d=Km(1),av=Km(16777216);q=xe.prototype;q.ea=function(){if(mn(this))return-vt(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Vd+r)*e,e*=Vd}return t};q.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(yr(this))return"0";if(mn(this))return"-"+vt(this).toString(t);for(var e=Zn(Math.pow(t,6)),n=this,r="";;){var s=iu(n,e).g;n=su(n,s.R(e));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=s,yr(n))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};q.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function yr(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function mn(t){return t.h==-1}q.X=function(t){return t=su(this,t),mn(t)?-1:yr(t)?0:1};function vt(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new xe(n,~t.h).add($d)}q.abs=function(){return mn(this)?vt(this):this};q.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,s=0;s<=e;s++){var i=r+(this.D(s)&65535)+(t.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(t.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,n[s]=o<<16|i}return new xe(n,n[n.length-1]&-2147483648?-1:0)};function su(t,e){return t.add(vt(e))}q.R=function(t){if(yr(this)||yr(t))return Bi;if(mn(this))return mn(t)?vt(this).R(vt(t)):vt(vt(this).R(t));if(mn(t))return vt(this.R(vt(t)));if(0>this.X(av)&&0>t.X(av))return Zn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<t.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(s)>>>16,l=t.D(s)&65535;n[2*r+2*s]+=o*l,rc(n,2*r+2*s),n[2*r+2*s+1]+=i*l,rc(n,2*r+2*s+1),n[2*r+2*s+1]+=o*a,rc(n,2*r+2*s+1),n[2*r+2*s+2]+=i*a,rc(n,2*r+2*s+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new xe(n,0)};function rc(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Ko(t,e){this.g=t,this.h=e}function iu(t,e){if(yr(e))throw Error("division by zero");if(yr(t))return new Ko(Bi,Bi);if(mn(t))return e=iu(vt(t),e),new Ko(vt(e.g),vt(e.h));if(mn(e))return e=iu(t,vt(e)),new Ko(vt(e.g),e.h);if(30<t.g.length){if(mn(t)||mn(e))throw Error("slowDivide_ only works with positive integers.");for(var n=$d,r=e;0>=r.X(t);)n=lv(n),r=lv(r);var s=yi(n,1),i=yi(r,1);for(r=yi(r,2),n=yi(n,2);!yr(r);){var o=i.add(r);0>=o.X(t)&&(s=s.add(n),i=o),r=yi(r,1),n=yi(n,1)}return e=su(t,s.R(e)),new Ko(s,e)}for(s=Bi;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=Zn(n),o=i.R(e);mn(o)||0<o.X(t);)n-=r,i=Zn(n),o=i.R(e);yr(i)&&(i=$d),s=s.add(i),t=su(t,o)}return new Ko(s,t)}q.gb=function(t){return iu(this,t).h};q.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new xe(n,this.h&t.h)};q.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new xe(n,this.h|t.h)};q.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new xe(n,this.h^t.h)};function lv(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new xe(n,t.h)}function yi(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,s=[],i=0;i<r;i++)s[i]=0<e?t.D(i+n)>>>e|t.D(i+n+1)<<32-e:t.D(i+n);return new xe(s,t.h)}ru.prototype.createWebChannel=ru.prototype.g;dn.prototype.send=dn.prototype.u;dn.prototype.open=dn.prototype.m;dn.prototype.close=dn.prototype.close;hh.NO_ERROR=0;hh.TIMEOUT=8;hh.HTTP_ERROR=6;Rb.COMPLETE="complete";Cb.EventType=Tl;Tl.OPEN="a";Tl.CLOSE="b";Tl.ERROR="c";Tl.MESSAGE="d";pt.prototype.listen=pt.prototype.O;Ye.prototype.listenOnce=Ye.prototype.P;Ye.prototype.getLastError=Ye.prototype.Sa;Ye.prototype.getLastErrorCode=Ye.prototype.Ia;Ye.prototype.getStatus=Ye.prototype.da;Ye.prototype.getResponseJson=Ye.prototype.Wa;Ye.prototype.getResponseText=Ye.prototype.ja;Ye.prototype.send=Ye.prototype.ha;Ye.prototype.setWithCredentials=Ye.prototype.Oa;$n.prototype.digest=$n.prototype.l;$n.prototype.reset=$n.prototype.reset;$n.prototype.update=$n.prototype.j;xe.prototype.add=xe.prototype.add;xe.prototype.multiply=xe.prototype.R;xe.prototype.modulo=xe.prototype.gb;xe.prototype.compare=xe.prototype.X;xe.prototype.toNumber=xe.prototype.ea;xe.prototype.toString=xe.prototype.toString;xe.prototype.getBits=xe.prototype.D;xe.fromNumber=Zn;xe.fromString=lI;var BM=function(){return new ru},jM=function(){return uh()},Tf=hh,qM=Rb,HM=ii,cv={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},sc=Cb,WM=Ye,zM=$n,ji=xe;const uv="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}kt.UNAUTHENTICATED=new kt(null),kt.GOOGLE_CREDENTIALS=new kt("google-credentials-uid"),kt.FIRST_PARTY=new kt("first-party-uid"),kt.MOCK_USER=new kt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mo="10.5.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gs=new ul("@firebase/firestore");function Go(){return Gs.logLevel}function G(t,...e){if(Gs.logLevel<=me.DEBUG){const n=e.map(Gm);Gs.debug(`Firestore (${Mo}): ${t}`,...n)}}function Sr(t,...e){if(Gs.logLevel<=me.ERROR){const n=e.map(Gm);Gs.error(`Firestore (${Mo}): ${t}`,...n)}}function to(t,...e){if(Gs.logLevel<=me.WARN){const n=e.map(Gm);Gs.warn(`Firestore (${Mo}): ${t}`,...n)}}function Gm(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function se(t="Unexpected state"){const e=`FIRESTORE (${Mo}) INTERNAL ASSERTION FAILED: `+t;throw Sr(e),new Error(e)}function qe(t,e){t||se()}function he(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Y extends ur{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cI{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class KM{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(kt.UNAUTHENTICATED))}shutdown(){}}class GM{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class QM{constructor(e){this.t=e,this.currentUser=kt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new Tr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Tr,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},a=l=>{G("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(G("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Tr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(G("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(qe(typeof r.accessToken=="string"),new cI(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return qe(e===null||typeof e=="string"),new kt(e)}}class YM{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=kt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class XM{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new YM(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(kt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class JM{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ZM{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=i=>{i.error!=null&&G("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,G("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{G("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):G("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(qe(typeof n.token=="string"),this.R=n.token,new JM(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eL(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uI{static V(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=eL(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function Ce(t,e){return t<e?-1:t>e?1:0}function no(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new Y(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Y(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new Y(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Y(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return tt.fromMillis(Date.now())}static fromDate(e){return tt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new tt(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ce(this.nanoseconds,e.nanoseconds):Ce(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ce(e)}static min(){return new ce(new tt(0,0))}static max(){return new ce(new tt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za{constructor(e,n,r){n===void 0?n=0:n>e.length&&se(),r===void 0?r=e.length-n:r>e.length-n&&se(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Za.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Za?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ke extends Za{construct(e,n,r){return new Ke(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new Y(O.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Ke(n)}static emptyPath(){return new Ke([])}}const tL=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Tt extends Za{construct(e,n,r){return new Tt(e,n,r)}static isValidIdentifier(e){return tL.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Tt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Tt(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new Y(O.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new Y(O.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new Y(O.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new Y(O.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Tt(n)}static emptyPath(){return new Tt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e){this.path=e}static fromPath(e){return new ee(Ke.fromString(e))}static fromName(e){return new ee(Ke.fromString(e).popFirst(5))}static empty(){return new ee(Ke.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ke.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ke.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ee(new Ke(e.slice()))}}function nL(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ce.fromTimestamp(r===1e9?new tt(n+1,0):new tt(n,r));return new os(s,ee.empty(),e)}function rL(t){return new os(t.readTime,t.key,-1)}class os{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new os(ce.min(),ee.empty(),-1)}static max(){return new os(ce.max(),ee.empty(),-1)}}function sL(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ee.comparator(t.documentKey,e.documentKey),n!==0?n:Ce(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iL="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class oL{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cl(t){if(t.code!==O.FAILED_PRECONDITION||t.message!==iL)throw t;G("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&se(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new D((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof D?n:D.resolve(n)}catch(n){return D.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):D.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):D.reject(n)}static resolve(e){return new D((n,r)=>{n(e)})}static reject(e){return new D((n,r)=>{r(e)})}static waitFor(e){return new D((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(e){let n=D.resolve(!1);for(const r of e)n=n.next(s=>s?D.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new D((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let l=0;l<i;l++){const c=l;n(e[c]).next(u=>{o[c]=u,++a,a===i&&r(o)},u=>s(u))}})}static doWhile(e,n){return new D((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function Sl(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qm{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}Qm.ae=-1;function Eh(t){return t==null}function ou(t){return t===0&&1/t==-1/0}function aL(t){return typeof t=="number"&&Number.isInteger(t)&&!ou(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hv(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function oi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function hI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e,n){this.comparator=e,this.root=n||_t.EMPTY}insert(e,n){return new Ge(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,_t.BLACK,null,null))}remove(e){return new Ge(this.comparator,this.root.remove(e,this.comparator).copy(null,null,_t.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ic(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ic(this.root,e,this.comparator,!1)}getReverseIterator(){return new ic(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ic(this.root,e,this.comparator,!0)}}class ic{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class _t{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??_t.RED,this.left=s??_t.EMPTY,this.right=i??_t.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new _t(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return _t.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return _t.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,_t.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,_t.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw se();const e=this.left.check();if(e!==this.right.check())throw se();return e+(this.isRed()?0:1)}}_t.EMPTY=null,_t.RED=!0,_t.BLACK=!1;_t.EMPTY=new class{constructor(){this.size=0}get key(){throw se()}get value(){throw se()}get color(){throw se()}get left(){throw se()}get right(){throw se()}copy(e,n,r,s,i){return this}insert(e,n,r){return new _t(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e){this.comparator=e,this.data=new Ge(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new fv(this.data.getIterator())}getIteratorFrom(e){return new fv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Rt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Rt(this.comparator);return n.data=e,n}}class fv{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(e){this.fields=e,e.sort(Tt.comparator)}static empty(){return new an([])}unionWith(e){let n=new Rt(Tt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new an(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return no(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fI extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new fI("Invalid base64 string: "+i):i}}(e);return new Ft(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new Ft(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ce(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ft.EMPTY_BYTE_STRING=new Ft("");const lL=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function as(t){if(qe(!!t),typeof t=="string"){let e=0;const n=lL.exec(t);if(qe(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:et(t.seconds),nanos:et(t.nanos)}}function et(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Qs(t){return typeof t=="string"?Ft.fromBase64String(t):Ft.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ym(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Xm(t){const e=t.mapValue.fields.__previous_value__;return Ym(e)?Xm(e):e}function el(t){const e=as(t.mapValue.fields.__local_write_time__.timestampValue);return new tt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cL{constructor(e,n,r,s,i,o,a,l,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class tl{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new tl("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof tl&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oc={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ys(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Ym(t)?4:uL(t)?9007199254740991:10:se()}function lr(t,e){if(t===e)return!0;const n=Ys(t);if(n!==Ys(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return el(t).isEqual(el(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=as(s.timestampValue),a=as(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Qs(s.bytesValue).isEqual(Qs(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return et(s.geoPointValue.latitude)===et(i.geoPointValue.latitude)&&et(s.geoPointValue.longitude)===et(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return et(s.integerValue)===et(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=et(s.doubleValue),a=et(i.doubleValue);return o===a?ou(o)===ou(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return no(t.arrayValue.values||[],e.arrayValue.values||[],lr);case 10:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(hv(o)!==hv(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!lr(o[l],a[l])))return!1;return!0}(t,e);default:return se()}}function nl(t,e){return(t.values||[]).find(n=>lr(n,e))!==void 0}function ro(t,e){if(t===e)return 0;const n=Ys(t),r=Ys(e);if(n!==r)return Ce(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ce(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=et(i.integerValue||i.doubleValue),l=et(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return dv(t.timestampValue,e.timestampValue);case 4:return dv(el(t),el(e));case 5:return Ce(t.stringValue,e.stringValue);case 6:return function(i,o){const a=Qs(i),l=Qs(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),l=o.split("/");for(let c=0;c<a.length&&c<l.length;c++){const u=Ce(a[c],l[c]);if(u!==0)return u}return Ce(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=Ce(et(i.latitude),et(o.latitude));return a!==0?a:Ce(et(i.longitude),et(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,o){const a=i.values||[],l=o.values||[];for(let c=0;c<a.length&&c<l.length;++c){const u=ro(a[c],l[c]);if(u)return u}return Ce(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,o){if(i===oc.mapValue&&o===oc.mapValue)return 0;if(i===oc.mapValue)return 1;if(o===oc.mapValue)return-1;const a=i.fields||{},l=Object.keys(a),c=o.fields||{},u=Object.keys(c);l.sort(),u.sort();for(let h=0;h<l.length&&h<u.length;++h){const f=Ce(l[h],u[h]);if(f!==0)return f;const d=ro(a[l[h]],c[u[h]]);if(d!==0)return d}return Ce(l.length,u.length)}(t.mapValue,e.mapValue);default:throw se()}}function dv(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ce(t,e);const n=as(t),r=as(e),s=Ce(n.seconds,r.seconds);return s!==0?s:Ce(n.nanos,r.nanos)}function so(t){return Fd(t)}function Fd(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=as(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Qs(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return ee.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Fd(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Fd(n.fields[o])}`;return s+"}"}(t.mapValue):se()}function Ud(t){return!!t&&"integerValue"in t}function Jm(t){return!!t&&"arrayValue"in t}function pv(t){return!!t&&"nullValue"in t}function mv(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ec(t){return!!t&&"mapValue"in t}function wa(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return oi(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=wa(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=wa(t.arrayValue.values[n]);return e}return Object.assign({},t)}function uL(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(e){this.value=e}static empty(){return new Qt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ec(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=wa(n)}setAll(e){let n=Tt.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=wa(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Ec(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return lr(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Ec(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){oi(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Qt(wa(this.value))}}function dI(t){const e=[];return oi(t.fields,(n,r)=>{const s=new Tt([n]);if(Ec(r)){const i=dI(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new an(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new xt(e,0,ce.min(),ce.min(),ce.min(),Qt.empty(),0)}static newFoundDocument(e,n,r,s){return new xt(e,1,n,ce.min(),r,s,0)}static newNoDocument(e,n){return new xt(e,2,n,ce.min(),ce.min(),Qt.empty(),0)}static newUnknownDocument(e,n){return new xt(e,3,n,ce.min(),ce.min(),Qt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ce.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Qt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Qt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ce.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof xt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new xt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class au{constructor(e,n){this.position=e,this.inclusive=n}}function gv(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=ee.comparator(ee.fromName(o.referenceValue),n.key):r=ro(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function _v(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!lr(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lu{constructor(e,n="asc"){this.field=e,this.dir=n}}function hL(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pI{}class st extends pI{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new dL(e,n,r):n==="array-contains"?new gL(e,r):n==="in"?new _L(e,r):n==="not-in"?new yL(e,r):n==="array-contains-any"?new vL(e,r):new st(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new pL(e,r):new mL(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ro(n,this.value)):n!==null&&Ys(this.value)===Ys(n)&&this.matchesComparison(ro(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return se()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class cr extends pI{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new cr(e,n)}matches(e){return mI(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function mI(t){return t.op==="and"}function gI(t){return fL(t)&&mI(t)}function fL(t){for(const e of t.filters)if(e instanceof cr)return!1;return!0}function Bd(t){if(t instanceof st)return t.field.canonicalString()+t.op.toString()+so(t.value);if(gI(t))return t.filters.map(e=>Bd(e)).join(",");{const e=t.filters.map(n=>Bd(n)).join(",");return`${t.op}(${e})`}}function _I(t,e){return t instanceof st?function(r,s){return s instanceof st&&r.op===s.op&&r.field.isEqual(s.field)&&lr(r.value,s.value)}(t,e):t instanceof cr?function(r,s){return s instanceof cr&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&_I(o,s.filters[a]),!0):!1}(t,e):void se()}function yI(t){return t instanceof st?function(n){return`${n.field.canonicalString()} ${n.op} ${so(n.value)}`}(t):t instanceof cr?function(n){return n.op.toString()+" {"+n.getFilters().map(yI).join(" ,")+"}"}(t):"Filter"}class dL extends st{constructor(e,n,r){super(e,n,r),this.key=ee.fromName(r.referenceValue)}matches(e){const n=ee.comparator(e.key,this.key);return this.matchesComparison(n)}}class pL extends st{constructor(e,n){super(e,"in",n),this.keys=vI("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class mL extends st{constructor(e,n){super(e,"not-in",n),this.keys=vI("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function vI(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>ee.fromName(r.referenceValue))}class gL extends st{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Jm(n)&&nl(n.arrayValue,this.value)}}class _L extends st{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&nl(this.value.arrayValue,n)}}class yL extends st{constructor(e,n){super(e,"not-in",n)}matches(e){if(nl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!nl(this.value.arrayValue,n)}}class vL extends st{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Jm(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>nl(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EL{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.le=null}}function yv(t,e=null,n=[],r=[],s=null,i=null,o=null){return new EL(t,e,n,r,s,i,o)}function Zm(t){const e=he(t);if(e.le===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Bd(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Eh(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>so(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>so(r)).join(",")),e.le=n}return e.le}function eg(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!hL(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!_I(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!_v(t.startAt,e.startAt)&&_v(t.endAt,e.endAt)}function jd(t){return ee.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wh{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=l,this.he=null,this.Pe=null,this.Ie=null,this.startAt,this.endAt}}function wL(t,e,n,r,s,i,o,a){return new wh(t,e,n,r,s,i,o,a)}function Th(t){return new wh(t)}function vv(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function TL(t){return t.collectionGroup!==null}function Ta(t){const e=he(t);if(e.he===null){e.he=[];const n=new Set;for(const i of e.explicitOrderBy)e.he.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Rt(Tt.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.he.push(new lu(i,r))}),n.has(Tt.keyField().canonicalString())||e.he.push(new lu(Tt.keyField(),r))}return e.he}function sr(t){const e=he(t);return e.Pe||(e.Pe=bL(e,Ta(t))),e.Pe}function bL(t,e){if(t.limitType==="F")return yv(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new lu(s.field,i)});const n=t.endAt?new au(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new au(t.startAt.position,t.startAt.inclusive):null;return yv(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function qd(t,e,n){return new wh(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function bh(t,e){return eg(sr(t),sr(e))&&t.limitType===e.limitType}function EI(t){return`${Zm(sr(t))}|lt:${t.limitType}`}function wi(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>yI(s)).join(", ")}]`),Eh(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>so(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>so(s)).join(",")),`Target(${r})`}(sr(t))}; limitType=${t.limitType})`}function Ih(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):ee.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Ta(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,a,l){const c=gv(o,a,l);return o.inclusive?c<=0:c<0}(r.startAt,Ta(r),s)||r.endAt&&!function(o,a,l){const c=gv(o,a,l);return o.inclusive?c>=0:c>0}(r.endAt,Ta(r),s))}(t,e)}function IL(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function wI(t){return(e,n)=>{let r=!1;for(const s of Ta(t)){const i=AL(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function AL(t,e,n){const r=t.field.isKeyField()?ee.comparator(e.key,n.key):function(i,o,a){const l=o.data.field(i),c=a.data.field(i);return l!==null&&c!==null?ro(l,c):se()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return se()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){oi(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return hI(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RL=new Ge(ee.comparator);function Pr(){return RL}const TI=new Ge(ee.comparator);function ia(...t){let e=TI;for(const n of t)e=e.insert(n.key,n);return e}function bI(t){let e=TI;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Os(){return ba()}function II(){return ba()}function ba(){return new Lo(t=>t.toString(),(t,e)=>t.isEqual(e))}const CL=new Ge(ee.comparator),SL=new Rt(ee.comparator);function _e(...t){let e=SL;for(const n of t)e=e.add(n);return e}const PL=new Rt(Ce);function kL(){return PL}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AI(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ou(e)?"-0":e}}function RI(t){return{integerValue:""+t}}function NL(t,e){return aL(e)?RI(e):AI(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ah{constructor(){this._=void 0}}function OL(t,e,n){return t instanceof cu?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Ym(i)&&(i=Xm(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof rl?SI(t,e):t instanceof sl?PI(t,e):function(s,i){const o=CI(s,i),a=Ev(o)+Ev(s.Te);return Ud(o)&&Ud(s.Te)?RI(a):AI(s.serializer,a)}(t,e)}function xL(t,e,n){return t instanceof rl?SI(t,e):t instanceof sl?PI(t,e):n}function CI(t,e){return t instanceof uu?function(r){return Ud(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class cu extends Ah{}class rl extends Ah{constructor(e){super(),this.elements=e}}function SI(t,e){const n=kI(e);for(const r of t.elements)n.some(s=>lr(s,r))||n.push(r);return{arrayValue:{values:n}}}class sl extends Ah{constructor(e){super(),this.elements=e}}function PI(t,e){let n=kI(e);for(const r of t.elements)n=n.filter(s=>!lr(s,r));return{arrayValue:{values:n}}}class uu extends Ah{constructor(e,n){super(),this.serializer=e,this.Te=n}}function Ev(t){return et(t.integerValue||t.doubleValue)}function kI(t){return Jm(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function DL(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof rl&&s instanceof rl||r instanceof sl&&s instanceof sl?no(r.elements,s.elements,lr):r instanceof uu&&s instanceof uu?lr(r.Te,s.Te):r instanceof cu&&s instanceof cu}(t.transform,e.transform)}class ML{constructor(e,n){this.version=e,this.transformResults=n}}class Dn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Dn}static exists(e){return new Dn(void 0,e)}static updateTime(e){return new Dn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function wc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Rh{}function NI(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new tg(t.key,Dn.none()):new Pl(t.key,t.data,Dn.none());{const n=t.data,r=Qt.empty();let s=new Rt(Tt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new ms(t.key,r,new an(s.toArray()),Dn.none())}}function LL(t,e,n){t instanceof Pl?function(s,i,o){const a=s.value.clone(),l=Tv(s.fieldTransforms,i,o.transformResults);a.setAll(l),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof ms?function(s,i,o){if(!wc(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=Tv(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(OI(s)),l.setAll(a),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Ia(t,e,n,r){return t instanceof Pl?function(i,o,a,l){if(!wc(i.precondition,o))return a;const c=i.value.clone(),u=bv(i.fieldTransforms,l,o);return c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof ms?function(i,o,a,l){if(!wc(i.precondition,o))return a;const c=bv(i.fieldTransforms,l,o),u=o.data;return u.setAll(OI(i)),u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(i,o,a){return wc(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function VL(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=CI(r.transform,s||null);i!=null&&(n===null&&(n=Qt.empty()),n.set(r.field,i))}return n||null}function wv(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&no(r,s,(i,o)=>DL(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Pl extends Rh{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ms extends Rh{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function OI(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Tv(t,e,n){const r=new Map;qe(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,xL(o,a,n[s]))}return r}function bv(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,OL(i,o,e))}return r}class tg extends Rh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class $L extends Rh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FL{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&LL(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ia(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ia(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=II();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const l=NI(o,a);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(ce.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),_e())}isEqual(e){return this.batchId===e.batchId&&no(this.mutations,e.mutations,(n,r)=>wv(n,r))&&no(this.baseMutations,e.baseMutations,(n,r)=>wv(n,r))}}class ng{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){qe(e.mutations.length===r.length);let s=function(){return CL}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new ng(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UL{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BL{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ze,Ee;function jL(t){switch(t){default:return se();case O.CANCELLED:case O.UNKNOWN:case O.DEADLINE_EXCEEDED:case O.RESOURCE_EXHAUSTED:case O.INTERNAL:case O.UNAVAILABLE:case O.UNAUTHENTICATED:return!1;case O.INVALID_ARGUMENT:case O.NOT_FOUND:case O.ALREADY_EXISTS:case O.PERMISSION_DENIED:case O.FAILED_PRECONDITION:case O.ABORTED:case O.OUT_OF_RANGE:case O.UNIMPLEMENTED:case O.DATA_LOSS:return!0}}function xI(t){if(t===void 0)return Sr("GRPC error has no .code"),O.UNKNOWN;switch(t){case Ze.OK:return O.OK;case Ze.CANCELLED:return O.CANCELLED;case Ze.UNKNOWN:return O.UNKNOWN;case Ze.DEADLINE_EXCEEDED:return O.DEADLINE_EXCEEDED;case Ze.RESOURCE_EXHAUSTED:return O.RESOURCE_EXHAUSTED;case Ze.INTERNAL:return O.INTERNAL;case Ze.UNAVAILABLE:return O.UNAVAILABLE;case Ze.UNAUTHENTICATED:return O.UNAUTHENTICATED;case Ze.INVALID_ARGUMENT:return O.INVALID_ARGUMENT;case Ze.NOT_FOUND:return O.NOT_FOUND;case Ze.ALREADY_EXISTS:return O.ALREADY_EXISTS;case Ze.PERMISSION_DENIED:return O.PERMISSION_DENIED;case Ze.FAILED_PRECONDITION:return O.FAILED_PRECONDITION;case Ze.ABORTED:return O.ABORTED;case Ze.OUT_OF_RANGE:return O.OUT_OF_RANGE;case Ze.UNIMPLEMENTED:return O.UNIMPLEMENTED;case Ze.DATA_LOSS:return O.DATA_LOSS;default:return se()}}(Ee=Ze||(Ze={}))[Ee.OK=0]="OK",Ee[Ee.CANCELLED=1]="CANCELLED",Ee[Ee.UNKNOWN=2]="UNKNOWN",Ee[Ee.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ee[Ee.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ee[Ee.NOT_FOUND=5]="NOT_FOUND",Ee[Ee.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ee[Ee.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ee[Ee.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ee[Ee.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ee[Ee.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ee[Ee.ABORTED=10]="ABORTED",Ee[Ee.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ee[Ee.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ee[Ee.INTERNAL=13]="INTERNAL",Ee[Ee.UNAVAILABLE=14]="UNAVAILABLE",Ee[Ee.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qL(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HL=new ji([4294967295,4294967295],0);function Iv(t){const e=qL().encode(t),n=new zM;return n.update(e),new Uint8Array(n.digest())}function Av(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new ji([n,r],0),new ji([s,i],0)]}class rg{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new oa(`Invalid padding: ${n}`);if(r<0)throw new oa(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new oa(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new oa(`Invalid padding when bitmap length is 0: ${n}`);this.Ee=8*e.length-n,this.de=ji.fromNumber(this.Ee)}Ae(e,n,r){let s=e.add(n.multiply(ji.fromNumber(r)));return s.compare(HL)===1&&(s=new ji([s.getBits(0),s.getBits(1)],0)),s.modulo(this.de).toNumber()}Re(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ee===0)return!1;const n=Iv(e),[r,s]=Av(n);for(let i=0;i<this.hashCount;i++){const o=this.Ae(r,s,i);if(!this.Re(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new rg(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ee===0)return;const n=Iv(e),[r,s]=Av(n);for(let i=0;i<this.hashCount;i++){const o=this.Ae(r,s,i);this.Ve(o)}}Ve(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class oa extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ch{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,kl.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Ch(ce.min(),s,new Ge(Ce),Pr(),_e())}}class kl{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new kl(r,n,_e(),_e(),_e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{constructor(e,n,r,s){this.me=e,this.removedTargetIds=n,this.key=r,this.fe=s}}class DI{constructor(e,n){this.targetId=e,this.ge=n}}class MI{constructor(e,n,r=Ft.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Rv{constructor(){this.pe=0,this.ye=Sv(),this.we=Ft.EMPTY_BYTE_STRING,this.Se=!1,this.be=!0}get current(){return this.Se}get resumeToken(){return this.we}get De(){return this.pe!==0}get Ce(){return this.be}ve(e){e.approximateByteSize()>0&&(this.be=!0,this.we=e)}Fe(){let e=_e(),n=_e(),r=_e();return this.ye.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:se()}}),new kl(this.we,this.Se,e,n,r)}Me(){this.be=!1,this.ye=Sv()}xe(e,n){this.be=!0,this.ye=this.ye.insert(e,n)}Oe(e){this.be=!0,this.ye=this.ye.remove(e)}Ne(){this.pe+=1}Be(){this.pe-=1}Le(){this.be=!0,this.Se=!0}}class WL{constructor(e){this.ke=e,this.qe=new Map,this.Qe=Pr(),this.Ke=Cv(),this.$e=new Ge(Ce)}Ue(e){for(const n of e.me)e.fe&&e.fe.isFoundDocument()?this.We(n,e.fe):this.Ge(n,e.key,e.fe);for(const n of e.removedTargetIds)this.Ge(n,e.key,e.fe)}ze(e){this.forEachTarget(e,n=>{const r=this.je(n);switch(e.state){case 0:this.He(n)&&r.ve(e.resumeToken);break;case 1:r.Be(),r.De||r.Me(),r.ve(e.resumeToken);break;case 2:r.Be(),r.De||this.removeTarget(n);break;case 3:this.He(n)&&(r.Le(),r.ve(e.resumeToken));break;case 4:this.He(n)&&(this.Je(n),r.ve(e.resumeToken));break;default:se()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.qe.forEach((r,s)=>{this.He(s)&&n(s)})}Ye(e){const n=e.targetId,r=e.ge.count,s=this.Ze(n);if(s){const i=s.target;if(jd(i))if(r===0){const o=new ee(i.path);this.Ge(n,o,xt.newNoDocument(o,ce.min()))}else qe(r===1);else{const o=this.Xe(n);if(o!==r){const a=this.et(e),l=a?this.tt(a,e,o):1;if(l!==0){this.Je(n);const c=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.$e=this.$e.insert(n,c)}}}}}et(e){const n=e.ge.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=Qs(r).toUint8Array()}catch(l){if(l instanceof fI)return to("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new rg(o,s,i)}catch(l){return to(l instanceof oa?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Ee===0?null:a}tt(e,n,r){return n.ge.count===r-this.it(e,n.targetId)?0:2}it(e,n){const r=this.ke.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.ke.rt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.Ge(n,i,null),s++)}),s}st(e){const n=new Map;this.qe.forEach((i,o)=>{const a=this.Ze(o);if(a){if(i.current&&jd(a.target)){const l=new ee(a.target.path);this.Qe.get(l)!==null||this.ot(o,l)||this.Ge(o,l,xt.newNoDocument(l,e))}i.Ce&&(n.set(o,i.Fe()),i.Me())}});let r=_e();this.Ke.forEach((i,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Ze(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.Qe.forEach((i,o)=>o.setReadTime(e));const s=new Ch(e,n,this.$e,this.Qe,r);return this.Qe=Pr(),this.Ke=Cv(),this.$e=new Ge(Ce),s}We(e,n){if(!this.He(e))return;const r=this.ot(e,n.key)?2:0;this.je(e).xe(n.key,r),this.Qe=this.Qe.insert(n.key,n),this.Ke=this.Ke.insert(n.key,this._t(n.key).add(e))}Ge(e,n,r){if(!this.He(e))return;const s=this.je(e);this.ot(e,n)?s.xe(n,1):s.Oe(n),this.Ke=this.Ke.insert(n,this._t(n).delete(e)),r&&(this.Qe=this.Qe.insert(n,r))}removeTarget(e){this.qe.delete(e)}Xe(e){const n=this.je(e).Fe();return this.ke.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ne(e){this.je(e).Ne()}je(e){let n=this.qe.get(e);return n||(n=new Rv,this.qe.set(e,n)),n}_t(e){let n=this.Ke.get(e);return n||(n=new Rt(Ce),this.Ke=this.Ke.insert(e,n)),n}He(e){const n=this.Ze(e)!==null;return n||G("WatchChangeAggregator","Detected inactive target",e),n}Ze(e){const n=this.qe.get(e);return n&&n.De?null:this.ke.ut(e)}Je(e){this.qe.set(e,new Rv),this.ke.getRemoteKeysForTarget(e).forEach(n=>{this.Ge(e,n,null)})}ot(e,n){return this.ke.getRemoteKeysForTarget(e).has(n)}}function Cv(){return new Ge(ee.comparator)}function Sv(){return new Ge(ee.comparator)}const zL=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),KL=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),GL=(()=>({and:"AND",or:"OR"}))();class QL{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Hd(t,e){return t.useProto3Json||Eh(e)?e:{value:e}}function hu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function LI(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function YL(t,e){return hu(t,e.toTimestamp())}function ir(t){return qe(!!t),ce.fromTimestamp(function(n){const r=as(n);return new tt(r.seconds,r.nanos)}(t))}function sg(t,e){return function(r){return new Ke(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function VI(t){const e=Ke.fromString(t);return qe(BI(e)),e}function Wd(t,e){return sg(t.databaseId,e.path)}function bf(t,e){const n=VI(e);if(n.get(1)!==t.databaseId.projectId)throw new Y(O.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Y(O.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ee($I(n))}function zd(t,e){return sg(t.databaseId,e)}function XL(t){const e=VI(t);return e.length===4?Ke.emptyPath():$I(e)}function Kd(t){return new Ke(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function $I(t){return qe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Pv(t,e,n){return{name:Wd(t,e),fields:n.value.mapValue.fields}}function JL(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:se()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(c,u){return c.useProto3Json?(qe(u===void 0||typeof u=="string"),Ft.fromBase64String(u||"")):(qe(u===void 0||u instanceof Uint8Array),Ft.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?O.UNKNOWN:xI(c.code);return new Y(u,c.message||"")}(o);n=new MI(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=bf(t,r.document.name),i=ir(r.document.updateTime),o=r.document.createTime?ir(r.document.createTime):ce.min(),a=new Qt({mapValue:{fields:r.document.fields}}),l=xt.newFoundDocument(s,i,o,a),c=r.targetIds||[],u=r.removedTargetIds||[];n=new Tc(c,u,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=bf(t,r.document),i=r.readTime?ir(r.readTime):ce.min(),o=xt.newNoDocument(s,i),a=r.removedTargetIds||[];n=new Tc([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=bf(t,r.document),i=r.removedTargetIds||[];n=new Tc([],i,s,null)}else{if(!("filter"in e))return se();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new BL(s,i),a=r.targetId;n=new DI(a,o)}}return n}function ZL(t,e){let n;if(e instanceof Pl)n={update:Pv(t,e.key,e.value)};else if(e instanceof tg)n={delete:Wd(t,e.key)};else if(e instanceof ms)n={update:Pv(t,e.key,e.data),updateMask:lV(e.fieldMask)};else{if(!(e instanceof $L))return se();n={verify:Wd(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof cu)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof rl)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof sl)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof uu)return{fieldPath:o.field.canonicalString(),increment:a.Te};throw se()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:YL(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:se()}(t,e.precondition)),n}function eV(t,e){return t&&t.length>0?(qe(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?ir(s.updateTime):ir(i);return o.isEqual(ce.min())&&(o=ir(i)),new ML(o,s.transformResults||[])}(n,e))):[]}function tV(t,e){return{documents:[zd(t,e.path)]}}function nV(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=zd(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=zd(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(l){if(l.length!==0)return UI(cr.create(l,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const i=function(l){if(l.length!==0)return l.map(c=>function(h){return{field:Ti(h.field),direction:iV(h.dir)}}(c))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=Hd(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function rV(t){let e=XL(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){qe(r===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(h){const f=FI(h);return f instanceof cr&&gI(f)?f.getFilters():[f]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(f=>function(m){return new lu(bi(m.field),function(g){switch(g){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(m.direction))}(f))}(n.orderBy));let a=null;n.limit&&(a=function(h){let f;return f=typeof h=="object"?h.value:h,Eh(f)?null:f}(n.limit));let l=null;n.startAt&&(l=function(h){const f=!!h.before,d=h.values||[];return new au(d,f)}(n.startAt));let c=null;return n.endAt&&(c=function(h){const f=!h.before,d=h.values||[];return new au(d,f)}(n.endAt)),wL(e,s,o,i,a,"F",l,c)}function sV(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return se()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function FI(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=bi(n.unaryFilter.field);return st.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=bi(n.unaryFilter.field);return st.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=bi(n.unaryFilter.field);return st.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=bi(n.unaryFilter.field);return st.create(o,"!=",{nullValue:"NULL_VALUE"});default:return se()}}(t):t.fieldFilter!==void 0?function(n){return st.create(bi(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return se()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return cr.create(n.compositeFilter.filters.map(r=>FI(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return se()}}(n.compositeFilter.op))}(t):se()}function iV(t){return zL[t]}function oV(t){return KL[t]}function aV(t){return GL[t]}function Ti(t){return{fieldPath:t.canonicalString()}}function bi(t){return Tt.fromServerFormat(t.fieldPath)}function UI(t){return t instanceof st?function(n){if(n.op==="=="){if(mv(n.value))return{unaryFilter:{field:Ti(n.field),op:"IS_NAN"}};if(pv(n.value))return{unaryFilter:{field:Ti(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(mv(n.value))return{unaryFilter:{field:Ti(n.field),op:"IS_NOT_NAN"}};if(pv(n.value))return{unaryFilter:{field:Ti(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ti(n.field),op:oV(n.op),value:n.value}}}(t):t instanceof cr?function(n){const r=n.getFilters().map(s=>UI(s));return r.length===1?r[0]:{compositeFilter:{op:aV(n.op),filters:r}}}(t):se()}function lV(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function BI(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(e,n,r,s,i=ce.min(),o=ce.min(),a=Ft.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new Qr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Qr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Qr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Qr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cV{constructor(e){this.ct=e}}function uV(t){const e=rV({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?qd(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hV{constructor(){this._n=new fV}addToCollectionParentIndex(e,n){return this._n.add(n),D.resolve()}getCollectionParents(e,n){return D.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return D.resolve()}deleteFieldIndex(e,n){return D.resolve()}deleteAllFieldIndexes(e){return D.resolve()}createTargetIndexes(e,n){return D.resolve()}getDocumentsMatchingTarget(e,n){return D.resolve(null)}getIndexType(e,n){return D.resolve(0)}getFieldIndexes(e,n){return D.resolve([])}getNextCollectionGroupToUpdate(e){return D.resolve(null)}getMinOffset(e,n){return D.resolve(os.min())}getMinOffsetFromCollectionGroup(e,n){return D.resolve(os.min())}updateCollectionGroup(e,n,r){return D.resolve()}updateIndexEntries(e,n){return D.resolve()}}class fV{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Rt(Ke.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Rt(Ke.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new io(0)}static Bn(){return new io(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dV{constructor(){this.changes=new Lo(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,xt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?D.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pV{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mV{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Ia(r.mutation,s,an.empty(),tt.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,_e()).next(()=>r))}getLocalViewOfDocuments(e,n,r=_e()){const s=Os();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=ia();return i.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Os();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,_e()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=Pr();const o=ba(),a=function(){return ba()}();return n.forEach((l,c)=>{const u=r.get(c.key);s.has(c.key)&&(u===void 0||u.mutation instanceof ms)?i=i.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),Ia(u.mutation,c,u.mutation.getFieldMask(),tt.now())):o.set(c.key,an.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var h;return a.set(c,new pV(u,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=ba();let s=new Ge((o,a)=>o-a),i=_e();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=r.get(l)||an.empty();u=a.applyToLocalView(c,u),r.set(l,u);const h=(s.get(a.batchId)||_e()).add(l);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,h=II();u.forEach(f=>{if(!i.has(f)){const d=NI(n.get(f),r.get(f));d!==null&&h.set(f,d),i=i.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,h))}return D.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return ee.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):TL(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):D.resolve(Os());let a=-1,l=i;return o.next(c=>D.forEach(c,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?D.resolve():this.remoteDocumentCache.getEntry(e,u).next(f=>{l=l.insert(u,f)}))).next(()=>this.populateOverlays(e,c,i)).next(()=>this.computeViews(e,l,c,_e())).next(u=>({batchId:a,changes:bI(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ee(n)).next(r=>{let s=ia();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=ia();return this.indexManager.getCollectionParents(e,i).next(a=>D.forEach(a,l=>{const c=function(h,f){return new wh(f,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,r,s).next(u=>{u.forEach((h,f)=>{o=o.insert(h,f)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((l,c)=>{const u=c.getKey();o.get(u)===null&&(o=o.insert(u,xt.newInvalidDocument(u)))});let a=ia();return o.forEach((l,c)=>{const u=i.get(l);u!==void 0&&Ia(u.mutation,c,an.empty(),tt.now()),Ih(n,c)&&(a=a.insert(l,c))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gV{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return D.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:ir(s.createTime)}}(n)),D.resolve()}getNamedQuery(e,n){return D.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(s){return{name:s.name,query:uV(s.bundledQuery),readTime:ir(s.readTime)}}(n)),D.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _V{constructor(){this.overlays=new Ge(ee.comparator),this.hr=new Map}getOverlay(e,n){return D.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Os();return D.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),D.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.hr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.hr.delete(r)),D.resolve()}getOverlaysForCollection(e,n,r){const s=Os(),i=n.length+1,o=new ee(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return D.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Ge((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let u=i.get(c.largestBatchId);u===null&&(u=Os(),i=i.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=Os(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=s)););return D.resolve(a)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.hr.get(s.largestBatchId).delete(r.key);this.hr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new UL(n,r));let i=this.hr.get(n);i===void 0&&(i=_e(),this.hr.set(n,i)),this.hr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ig{constructor(){this.Pr=new Rt(ct.Ir),this.Tr=new Rt(ct.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new ct(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new ct(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new ee(new Ke([])),r=new ct(n,e),s=new ct(n,e+1),i=[];return this.Tr.forEachInRange([r,s],o=>{this.Ar(o),i.push(o.key)}),i}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new ee(new Ke([])),r=new ct(n,e),s=new ct(n,e+1);let i=_e();return this.Tr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new ct(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ct{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return ee.comparator(e.key,n.key)||Ce(e.pr,n.pr)}static Er(e,n){return Ce(e.pr,n.pr)||ee.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yV{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new Rt(ct.Ir)}checkEmpty(e){return D.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new FL(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.wr=this.wr.add(new ct(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return D.resolve(o)}lookupMutationBatch(e,n){return D.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.br(r),i=s<0?0:s;return D.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return D.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return D.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ct(n,0),s=new ct(n,Number.POSITIVE_INFINITY),i=[];return this.wr.forEachInRange([r,s],o=>{const a=this.Sr(o.pr);i.push(a)}),D.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Rt(Ce);return n.forEach(s=>{const i=new ct(s,0),o=new ct(s,Number.POSITIVE_INFINITY);this.wr.forEachInRange([i,o],a=>{r=r.add(a.pr)})}),D.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;ee.isDocumentKey(i)||(i=i.child(""));const o=new ct(new ee(i),0);let a=new Rt(Ce);return this.wr.forEachWhile(l=>{const c=l.key.path;return!!r.isPrefixOf(c)&&(c.length===s&&(a=a.add(l.pr)),!0)},o),D.resolve(this.Dr(a))}Dr(e){const n=[];return e.forEach(r=>{const s=this.Sr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){qe(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return D.forEach(n.mutations,s=>{const i=new ct(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new ct(n,0),s=this.wr.firstAfterOrEqual(r);return D.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,D.resolve()}Cr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vV{constructor(e){this.vr=e,this.docs=function(){return new Ge(ee.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return D.resolve(r?r.document.mutableCopy():xt.newInvalidDocument(n))}getEntries(e,n){let r=Pr();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():xt.newInvalidDocument(s))}),D.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Pr();const o=n.path,a=new ee(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||sL(rL(u),r)<=0||(s.has(u.key)||Ih(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return D.resolve(i)}getAllFromCollectionGroup(e,n,r,s){se()}Fr(e,n){return D.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new EV(this)}getSize(e){return D.resolve(this.size)}}class EV extends dV{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.ar.addEntry(e,s)):this.ar.removeEntry(r)}),D.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wV{constructor(e){this.persistence=e,this.Mr=new Lo(n=>Zm(n),eg),this.lastRemoteSnapshotVersion=ce.min(),this.highestTargetId=0,this.Or=0,this.Nr=new ig,this.targetCount=0,this.Br=io.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,s)=>n(s)),D.resolve()}getLastRemoteSnapshotVersion(e){return D.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return D.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Br.next(),D.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),D.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Br=new io(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,D.resolve()}updateTargetData(e,n){return this.qn(n),D.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,D.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),D.waitFor(i).next(()=>s)}getTargetCount(e){return D.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return D.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),D.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),D.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),D.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return D.resolve(r)}containsKey(e,n){return D.resolve(this.Nr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TV{constructor(e,n){this.Lr={},this.overlays={},this.kr=new Qm(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new wV(this),this.indexManager=new hV,this.remoteDocumentCache=function(s){return new vV(s)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new cV(n),this.$r=new gV(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new _V,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Lr[e.toKey()];return r||(r=new yV(n,this.referenceDelegate),this.Lr[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){G("MemoryPersistence","Starting transaction:",e);const s=new bV(this.kr.next());return this.referenceDelegate.Ur(),r(s).next(i=>this.referenceDelegate.Wr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Gr(e,n){return D.or(Object.values(this.Lr).map(r=>()=>r.containsKey(e,n)))}}class bV extends oL{constructor(e){super(),this.currentSequenceNumber=e}}class og{constructor(e){this.persistence=e,this.zr=new ig,this.jr=null}static Hr(e){return new og(e)}get Jr(){if(this.jr)return this.jr;throw se()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),D.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),D.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),D.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(s=>this.Jr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Jr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return D.forEach(this.Jr,r=>{const s=ee.fromPath(r);return this.Yr(e,s).next(i=>{i||n.removeEntry(s,ce.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return D.or([()=>D.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ag{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=s}static Ki(e,n){let r=_e(),s=_e();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new ag(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IV{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AV{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=8}initialize(e,n){this.zi=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ji(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Hi(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new IV;return this.Ji(e,n,o).next(a=>{if(i.result=a,this.Ui)return this.Yi(e,n,o,a.size)})}).next(()=>i.result)}Yi(e,n,r,s){return r.documentReadCount<this.Wi?(Go()<=me.DEBUG&&G("QueryEngine","SDK will not create cache indexes for query:",wi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),D.resolve()):(Go()<=me.DEBUG&&G("QueryEngine","Query:",wi(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Gi*s?(Go()<=me.DEBUG&&G("QueryEngine","The SDK decides to create cache indexes for query:",wi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,sr(n))):D.resolve())}ji(e,n){if(vv(n))return D.resolve(null);let r=sr(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=qd(n,null,"F"),r=sr(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=_e(...i);return this.zi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const c=this.Zi(n,a);return this.Xi(n,c,o,l.readTime)?this.ji(e,qd(n,null,"F")):this.es(e,c,n,l)}))})))}Hi(e,n,r,s){return vv(n)||s.isEqual(ce.min())?D.resolve(null):this.zi.getDocuments(e,r).next(i=>{const o=this.Zi(n,i);return this.Xi(n,o,r,s)?D.resolve(null):(Go()<=me.DEBUG&&G("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),wi(n)),this.es(e,o,n,nL(s,-1)).next(a=>a))})}Zi(e,n){let r=new Rt(wI(e));return n.forEach((s,i)=>{Ih(e,i)&&(r=r.add(i))}),r}Xi(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ji(e,n,r){return Go()<=me.DEBUG&&G("QueryEngine","Using full collection scan to execute query:",wi(n)),this.zi.getDocumentsMatchingQuery(e,n,os.min(),r)}es(e,n,r,s){return this.zi.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RV{constructor(e,n,r,s){this.persistence=e,this.ts=n,this.serializer=s,this.ns=new Ge(Ce),this.rs=new Lo(i=>Zm(i),eg),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new mV(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ns))}}function CV(t,e,n,r){return new RV(t,e,n,r)}async function jI(t,e){const n=he(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n._s(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let l=_e();for(const c of s){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of i){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(r,l).next(c=>({us:c,removedBatchIds:o,addedBatchIds:a}))})})}function SV(t,e){const n=he(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.os.newChangeBuffer({trackRemovals:!0});return function(a,l,c,u){const h=c.batch,f=h.keys();let d=D.resolve();return f.forEach(m=>{d=d.next(()=>u.getEntry(l,m)).next(p=>{const g=c.docVersions.get(m);qe(g!==null),p.version.compareTo(g)<0&&(h.applyToRemoteDocument(p,c),p.isValidDocument()&&(p.setReadTime(c.commitVersion),u.addEntry(p)))})}),d.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=_e();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(l=l.add(a.batch.mutations[c].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function qI(t){const e=he(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function PV(t,e){const n=he(t),r=e.snapshotVersion;let s=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.os.newChangeBuffer({trackRemovals:!0});s=n.ns;const a=[];e.targetChanges.forEach((u,h)=>{const f=s.get(h);if(!f)return;a.push(n.Qr.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Qr.addMatchingKeys(i,u.addedDocuments,h)));let d=f.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?d=d.withResumeToken(Ft.EMPTY_BYTE_STRING,ce.min()).withLastLimboFreeSnapshotVersion(ce.min()):u.resumeToken.approximateByteSize()>0&&(d=d.withResumeToken(u.resumeToken,r)),s=s.insert(h,d),function(p,g,y){return p.resumeToken.approximateByteSize()===0||g.snapshotVersion.toMicroseconds()-p.snapshotVersion.toMicroseconds()>=3e8?!0:y.addedDocuments.size+y.modifiedDocuments.size+y.removedDocuments.size>0}(f,d,u)&&a.push(n.Qr.updateTargetData(i,d))});let l=Pr(),c=_e();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(kV(i,o,e.documentUpdates).next(u=>{l=u.cs,c=u.ls})),!r.isEqual(ce.min())){const u=n.Qr.getLastRemoteSnapshotVersion(i).next(h=>n.Qr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(u)}return D.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,c)).next(()=>l)}).then(i=>(n.ns=s,i))}function kV(t,e,n){let r=_e(),s=_e();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Pr();return n.forEach((a,l)=>{const c=i.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(s=s.add(a)),l.isNoDocument()&&l.version.isEqual(ce.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):G("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{cs:o,ls:s}})}function NV(t,e){const n=he(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function OV(t,e){const n=he(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Qr.getTargetData(r,e).next(i=>i?(s=i,D.resolve(s)):n.Qr.allocateTargetId(r).next(o=>(s=new Qr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.ns.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(e,r.targetId)),r})}async function Gd(t,e,n){const r=he(t),s=r.ns.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Sl(o))throw o;G("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ns=r.ns.remove(e),r.rs.delete(s.target)}function kv(t,e,n){const r=he(t);let s=ce.min(),i=_e();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,c,u){const h=he(l),f=h.rs.get(u);return f!==void 0?D.resolve(h.ns.get(f)):h.Qr.getTargetData(c,u)}(r,o,sr(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{i=l})}).next(()=>r.ts.getDocumentsMatchingQuery(o,e,n?s:ce.min(),n?i:_e())).next(a=>(xV(r,IL(e),a),{documents:a,hs:i})))}function xV(t,e,n){let r=t.ss.get(e)||ce.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.ss.set(e,r)}class Nv{constructor(){this.activeTargetIds=kL()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class DV{constructor(){this.no=new Nv,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,n,r){this.ro[e]=n}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new Nv,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MV{io(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ov{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){G("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){G("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ac=null;function If(){return ac===null?ac=function(){return 268435456+Math.round(2147483648*Math.random())}():ac++,"0x"+ac.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LV={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VV{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}onMessage(e){this.Ao=e}close(){this.ho()}send(e){this.lo(e)}Ro(){this.Io()}Vo(e){this.Eo(e)}mo(e){this.Ao(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pt="WebChannelConnection";class $V extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.fo=r+"://"+n.host,this.po=`projects/${s}/databases/${i}`,this.yo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get wo(){return!1}So(n,r,s,i,o){const a=If(),l=this.bo(n,r);G("RestConnection",`Sending RPC '${n}' ${a}:`,l,s);const c={"google-cloud-resource-prefix":this.po,"x-goog-request-params":this.yo};return this.Do(c,i,o),this.Co(n,l,c,s).then(u=>(G("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw to("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",l,"request:",s),u})}vo(n,r,s,i,o,a){return this.So(n,r,s,i,o)}Do(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Mo}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}bo(n,r){const s=LV[n];return`${this.fo}/v1/${r}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Co(e,n,r,s){const i=If();return new Promise((o,a)=>{const l=new WM;l.setWithCredentials(!0),l.listenOnce(qM.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Tf.NO_ERROR:const u=l.getResponseJson();G(Pt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case Tf.TIMEOUT:G(Pt,`RPC '${e}' ${i} timed out`),a(new Y(O.DEADLINE_EXCEEDED,"Request time out"));break;case Tf.HTTP_ERROR:const h=l.getStatus();if(G(Pt,`RPC '${e}' ${i} failed with status:`,h,"response text:",l.getResponseText()),h>0){let f=l.getResponseJson();Array.isArray(f)&&(f=f[0]);const d=f==null?void 0:f.error;if(d&&d.status&&d.message){const m=function(g){const y=g.toLowerCase().replace(/_/g,"-");return Object.values(O).indexOf(y)>=0?y:O.UNKNOWN}(d.status);a(new Y(m,d.message))}else a(new Y(O.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new Y(O.UNAVAILABLE,"Connection failed."));break;default:se()}}finally{G(Pt,`RPC '${e}' ${i} completed.`)}});const c=JSON.stringify(s);G(Pt,`RPC '${e}' ${i} sending request:`,s),l.send(n,"POST",c,r,15)})}Fo(e,n,r){const s=If(),i=[this.fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=BM(),a=jM(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Do(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const u=i.join("");G(Pt,`Creating RPC '${e}' stream ${s}: ${u}`,l);const h=o.createWebChannel(u,l);let f=!1,d=!1;const m=new VV({lo:g=>{d?G(Pt,`Not sending because RPC '${e}' stream ${s} is closed:`,g):(f||(G(Pt,`Opening RPC '${e}' stream ${s} transport.`),h.open(),f=!0),G(Pt,`RPC '${e}' stream ${s} sending:`,g),h.send(g))},ho:()=>h.close()}),p=(g,y,w)=>{g.listen(y,b=>{try{w(b)}catch(T){setTimeout(()=>{throw T},0)}})};return p(h,sc.EventType.OPEN,()=>{d||G(Pt,`RPC '${e}' stream ${s} transport opened.`)}),p(h,sc.EventType.CLOSE,()=>{d||(d=!0,G(Pt,`RPC '${e}' stream ${s} transport closed`),m.Vo())}),p(h,sc.EventType.ERROR,g=>{d||(d=!0,to(Pt,`RPC '${e}' stream ${s} transport errored:`,g),m.Vo(new Y(O.UNAVAILABLE,"The operation could not be completed")))}),p(h,sc.EventType.MESSAGE,g=>{var y;if(!d){const w=g.data[0];qe(!!w);const b=w,T=b.error||((y=b[0])===null||y===void 0?void 0:y.error);if(T){G(Pt,`RPC '${e}' stream ${s} received error:`,T);const k=T.status;let I=function(R){const M=Ze[R];if(M!==void 0)return xI(M)}(k),C=T.message;I===void 0&&(I=O.INTERNAL,C="Unknown error status: "+k+" with message "+T.message),d=!0,m.Vo(new Y(I,C)),h.close()}else G(Pt,`RPC '${e}' stream ${s} received:`,w),m.mo(w)}}),p(a,HM.STAT_EVENT,g=>{g.stat===cv.PROXY?G(Pt,`RPC '${e}' stream ${s} detected buffering proxy`):g.stat===cv.NOPROXY&&G(Pt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{m.Ro()},0),m}}function Af(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sh(t){return new QL(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HI{constructor(e,n,r=1e3,s=1.5,i=6e4){this.oi=e,this.timerId=n,this.Mo=r,this.xo=s,this.Oo=i,this.No=0,this.Bo=null,this.Lo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(e){this.cancel();const n=Math.floor(this.No+this.Qo()),r=Math.max(0,Date.now()-this.Lo),s=Math.max(0,n-r);s>0&&G("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.No} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Bo=this.oi.enqueueAfterDelay(this.timerId,s,()=>(this.Lo=Date.now(),e())),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){this.Bo!==null&&(this.Bo.skipDelay(),this.Bo=null)}cancel(){this.Bo!==null&&(this.Bo.cancel(),this.Bo=null)}Qo(){return(Math.random()-.5)*this.No}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WI{constructor(e,n,r,s,i,o,a,l){this.oi=e,this.$o=r,this.Uo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Wo=0,this.Go=null,this.zo=null,this.stream=null,this.jo=new HI(e,n)}Ho(){return this.state===1||this.state===5||this.Jo()}Jo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Yo()}async stop(){this.Ho()&&await this.close(0)}Zo(){this.state=0,this.jo.reset()}Xo(){this.Jo()&&this.Go===null&&(this.Go=this.oi.enqueueAfterDelay(this.$o,6e4,()=>this.e_()))}t_(e){this.n_(),this.stream.send(e)}async e_(){if(this.Jo())return this.close(0)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}async close(e,n){this.n_(),this.r_(),this.jo.cancel(),this.Wo++,e!==4?this.jo.reset():n&&n.code===O.RESOURCE_EXHAUSTED?(Sr(n.toString()),Sr("Using maximum backoff delay to prevent overloading the backend."),this.jo.ko()):n&&n.code===O.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.i_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.To(n)}i_(){}auth(){this.state=1;const e=this.s_(this.Wo),n=this.Wo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Wo===n&&this.o_(r,s)},r=>{e(()=>{const s=new Y(O.UNKNOWN,"Fetching auth token failed: "+r.message);return this.__(s)})})}o_(e,n){const r=this.s_(this.Wo);this.stream=this.a_(e,n),this.stream.Po(()=>{r(()=>(this.state=2,this.zo=this.oi.enqueueAfterDelay(this.Uo,1e4,()=>(this.Jo()&&(this.state=3),Promise.resolve())),this.listener.Po()))}),this.stream.To(s=>{r(()=>this.__(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Yo(){this.state=5,this.jo.qo(async()=>{this.state=0,this.start()})}__(e){return G("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}s_(e){return n=>{this.oi.enqueueAndForget(()=>this.Wo===e?n():(G("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class FV extends WI{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}a_(e,n){return this.connection.Fo("Listen",e,n)}onMessage(e){this.jo.reset();const n=JL(this.serializer,e),r=function(i){if(!("targetChange"in i))return ce.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ce.min():o.readTime?ir(o.readTime):ce.min()}(e);return this.listener.u_(n,r)}c_(e){const n={};n.database=Kd(this.serializer),n.addTarget=function(i,o){let a;const l=o.target;if(a=jd(l)?{documents:tV(i,l)}:{query:nV(i,l)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=LI(i,o.resumeToken);const c=Hd(i,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(ce.min())>0){a.readTime=hu(i,o.snapshotVersion.toTimestamp());const c=Hd(i,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=sV(this.serializer,e);r&&(n.labels=r),this.t_(n)}l_(e){const n={};n.database=Kd(this.serializer),n.removeTarget=e,this.t_(n)}}class UV extends WI{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i,this.h_=!1}get P_(){return this.h_}start(){this.h_=!1,this.lastStreamToken=void 0,super.start()}i_(){this.h_&&this.I_([])}a_(e,n){return this.connection.Fo("Write",e,n)}onMessage(e){if(qe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.h_){this.jo.reset();const n=eV(e.writeResults,e.commitTime),r=ir(e.commitTime);return this.listener.T_(r,n)}return qe(!e.writeResults||e.writeResults.length===0),this.h_=!0,this.listener.E_()}d_(){const e={};e.database=Kd(this.serializer),this.t_(e)}I_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>ZL(this.serializer,r))};this.t_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BV extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.A_=!1}R_(){if(this.A_)throw new Y(O.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,n,r){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.So(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new Y(O.UNKNOWN,s.toString())})}vo(e,n,r,s){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.vo(e,n,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new Y(O.UNKNOWN,i.toString())})}terminate(){this.A_=!0}}class jV{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.m_=0,this.f_=null,this.g_=!0}p_(){this.m_===0&&(this.y_("Unknown"),this.f_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.f_=null,this.w_("Backend didn't respond within 10 seconds."),this.y_("Offline"),Promise.resolve())))}S_(e){this.state==="Online"?this.y_("Unknown"):(this.m_++,this.m_>=1&&(this.b_(),this.w_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.y_("Offline")))}set(e){this.b_(),this.m_=0,e==="Online"&&(this.g_=!1),this.y_(e)}y_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}w_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.g_?(Sr(n),this.g_=!1):G("OnlineStateTracker",n)}b_(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qV{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.D_=[],this.C_=new Map,this.v_=new Set,this.F_=[],this.M_=i,this.M_.io(o=>{r.enqueueAndForget(async()=>{ai(this)&&(G("RemoteStore","Restarting streams for network reachability change."),await async function(l){const c=he(l);c.v_.add(4),await Nl(c),c.x_.set("Unknown"),c.v_.delete(4),await Ph(c)}(this))})}),this.x_=new jV(r,s)}}async function Ph(t){if(ai(t))for(const e of t.F_)await e(!0)}async function Nl(t){for(const e of t.F_)await e(!1)}function zI(t,e){const n=he(t);n.C_.has(e.targetId)||(n.C_.set(e.targetId,e),ug(n)?cg(n):Vo(n).Jo()&&lg(n,e))}function KI(t,e){const n=he(t),r=Vo(n);n.C_.delete(e),r.Jo()&&GI(n,e),n.C_.size===0&&(r.Jo()?r.Xo():ai(n)&&n.x_.set("Unknown"))}function lg(t,e){if(t.O_.Ne(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ce.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Vo(t).c_(e)}function GI(t,e){t.O_.Ne(e),Vo(t).l_(e)}function cg(t){t.O_=new WL({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>t.C_.get(e)||null,rt:()=>t.datastore.serializer.databaseId}),Vo(t).start(),t.x_.p_()}function ug(t){return ai(t)&&!Vo(t).Ho()&&t.C_.size>0}function ai(t){return he(t).v_.size===0}function QI(t){t.O_=void 0}async function HV(t){t.C_.forEach((e,n)=>{lg(t,e)})}async function WV(t,e){QI(t),ug(t)?(t.x_.S_(e),cg(t)):t.x_.set("Unknown")}async function zV(t,e,n){if(t.x_.set("Online"),e instanceof MI&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.C_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.C_.delete(a),s.O_.removeTarget(a))}(t,e)}catch(r){G("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await fu(t,r)}else if(e instanceof Tc?t.O_.Ue(e):e instanceof DI?t.O_.Ye(e):t.O_.ze(e),!n.isEqual(ce.min()))try{const r=await qI(t.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.O_.st(o);return a.targetChanges.forEach((l,c)=>{if(l.resumeToken.approximateByteSize()>0){const u=i.C_.get(c);u&&i.C_.set(c,u.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,c)=>{const u=i.C_.get(l);if(!u)return;i.C_.set(l,u.withResumeToken(Ft.EMPTY_BYTE_STRING,u.snapshotVersion)),GI(i,l);const h=new Qr(u.target,l,c,u.sequenceNumber);lg(i,h)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){G("RemoteStore","Failed to raise snapshot:",r),await fu(t,r)}}async function fu(t,e,n){if(!Sl(e))throw e;t.v_.add(1),await Nl(t),t.x_.set("Offline"),n||(n=()=>qI(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{G("RemoteStore","Retrying IndexedDB access"),await n(),t.v_.delete(1),await Ph(t)})}function YI(t,e){return e().catch(n=>fu(t,n,e))}async function kh(t){const e=he(t),n=ls(e);let r=e.D_.length>0?e.D_[e.D_.length-1].batchId:-1;for(;KV(e);)try{const s=await NV(e.localStore,r);if(s===null){e.D_.length===0&&n.Xo();break}r=s.batchId,GV(e,s)}catch(s){await fu(e,s)}XI(e)&&JI(e)}function KV(t){return ai(t)&&t.D_.length<10}function GV(t,e){t.D_.push(e);const n=ls(t);n.Jo()&&n.P_&&n.I_(e.mutations)}function XI(t){return ai(t)&&!ls(t).Ho()&&t.D_.length>0}function JI(t){ls(t).start()}async function QV(t){ls(t).d_()}async function YV(t){const e=ls(t);for(const n of t.D_)e.I_(n.mutations)}async function XV(t,e,n){const r=t.D_.shift(),s=ng.from(r,e,n);await YI(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await kh(t)}async function JV(t,e){e&&ls(t).P_&&await async function(r,s){if(function(o){return jL(o)&&o!==O.ABORTED}(s.code)){const i=r.D_.shift();ls(r).Zo(),await YI(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await kh(r)}}(t,e),XI(t)&&JI(t)}async function xv(t,e){const n=he(t);n.asyncQueue.verifyOperationInProgress(),G("RemoteStore","RemoteStore received new credentials");const r=ai(n);n.v_.add(3),await Nl(n),r&&n.x_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.v_.delete(3),await Ph(n)}async function ZV(t,e){const n=he(t);e?(n.v_.delete(2),await Ph(n)):e||(n.v_.add(2),await Nl(n),n.x_.set("Unknown"))}function Vo(t){return t.N_||(t.N_=function(n,r,s){const i=he(n);return i.R_(),new FV(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Po:HV.bind(null,t),To:WV.bind(null,t),u_:zV.bind(null,t)}),t.F_.push(async e=>{e?(t.N_.Zo(),ug(t)?cg(t):t.x_.set("Unknown")):(await t.N_.stop(),QI(t))})),t.N_}function ls(t){return t.B_||(t.B_=function(n,r,s){const i=he(n);return i.R_(),new UV(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Po:QV.bind(null,t),To:JV.bind(null,t),E_:YV.bind(null,t),T_:XV.bind(null,t)}),t.F_.push(async e=>{e?(t.B_.Zo(),await kh(t)):(await t.B_.stop(),t.D_.length>0&&(G("RemoteStore",`Stopping write stream with ${t.D_.length} pending writes`),t.D_=[]))})),t.B_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hg{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Tr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new hg(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Y(O.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function fg(t,e){if(Sr("AsyncQueue",`${e}: ${t}`),Sl(t))return new Y(O.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi{constructor(e){this.comparator=e?(n,r)=>e(n,r)||ee.comparator(n.key,r.key):(n,r)=>ee.comparator(n.key,r.key),this.keyedMap=ia(),this.sortedSet=new Ge(this.comparator)}static emptySet(e){return new qi(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof qi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new qi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dv{constructor(){this.L_=new Ge(ee.comparator)}track(e){const n=e.doc.key,r=this.L_.get(n);r?e.type!==0&&r.type===3?this.L_=this.L_.insert(n,e):e.type===3&&r.type!==1?this.L_=this.L_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.L_=this.L_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.L_=this.L_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.L_=this.L_.remove(n):e.type===1&&r.type===2?this.L_=this.L_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.L_=this.L_.insert(n,{type:2,doc:e.doc}):se():this.L_=this.L_.insert(n,e)}k_(){const e=[];return this.L_.inorderTraversal((n,r)=>{e.push(r)}),e}}class oo{constructor(e,n,r,s,i,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new oo(e,n,qi.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&bh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e${constructor(){this.q_=void 0,this.listeners=[]}}class t${constructor(){this.queries=new Lo(e=>EI(e),bh),this.onlineState="Unknown",this.Q_=new Set}}async function dg(t,e){const n=he(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new e$),s)try{i.q_=await n.onListen(r)}catch(o){const a=fg(o,`Initialization of query '${wi(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,i),i.listeners.push(e),e.K_(n.onlineState),i.q_&&e.U_(i.q_)&&mg(n)}async function pg(t,e){const n=he(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function n$(t,e){const n=he(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.U_(s)&&(r=!0);o.q_=s}}r&&mg(n)}function r$(t,e,n){const r=he(t),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(e)}function mg(t){t.Q_.forEach(e=>{e.next()})}class gg{constructor(e,n,r){this.query=e,this.W_=n,this.G_=!1,this.z_=null,this.onlineState="Unknown",this.options=r||{}}U_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new oo(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.G_?this.j_(e)&&(this.W_.next(e),n=!0):this.H_(e,this.onlineState)&&(this.J_(e),n=!0),this.z_=e,n}onError(e){this.W_.error(e)}K_(e){this.onlineState=e;let n=!1;return this.z_&&!this.G_&&this.H_(this.z_,e)&&(this.J_(this.z_),n=!0),n}H_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Y_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}j_(e){if(e.docChanges.length>0)return!0;const n=this.z_&&this.z_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}J_(e){e=oo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.G_=!0,this.W_.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZI{constructor(e){this.key=e}}class eA{constructor(e){this.key=e}}class s${constructor(e,n){this.query=e,this.sa=n,this.oa=null,this.hasCachedResults=!1,this.current=!1,this._a=_e(),this.mutatedKeys=_e(),this.aa=wI(e),this.ua=new qi(this.aa)}get ca(){return this.sa}la(e,n){const r=n?n.ha:new Dv,s=n?n.ua:this.ua;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,c=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const f=s.get(u),d=Ih(this.query,h)?h:null,m=!!f&&this.mutatedKeys.has(f.key),p=!!d&&(d.hasLocalMutations||this.mutatedKeys.has(d.key)&&d.hasCommittedMutations);let g=!1;f&&d?f.data.isEqual(d.data)?m!==p&&(r.track({type:3,doc:d}),g=!0):this.Pa(f,d)||(r.track({type:2,doc:d}),g=!0,(l&&this.aa(d,l)>0||c&&this.aa(d,c)<0)&&(a=!0)):!f&&d?(r.track({type:0,doc:d}),g=!0):f&&!d&&(r.track({type:1,doc:f}),g=!0,(l||c)&&(a=!0)),g&&(d?(o=o.add(d),i=p?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{ua:o,ha:r,Xi:a,mutatedKeys:i}}Pa(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const s=this.ua;this.ua=e.ua,this.mutatedKeys=e.mutatedKeys;const i=e.ha.k_();i.sort((c,u)=>function(f,d){const m=p=>{switch(p){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return se()}};return m(f)-m(d)}(c.type,u.type)||this.aa(c.doc,u.doc)),this.Ia(r);const o=n?this.Ta():[],a=this._a.size===0&&this.current?1:0,l=a!==this.oa;return this.oa=a,i.length!==0||l?{snapshot:new oo(this.query,e.ua,s,i,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ea:o}:{Ea:o}}K_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ua:this.ua,ha:new Dv,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{Ea:[]}}da(e){return!this.sa.has(e)&&!!this.ua.has(e)&&!this.ua.get(e).hasLocalMutations}Ia(e){e&&(e.addedDocuments.forEach(n=>this.sa=this.sa.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.sa=this.sa.delete(n)),this.current=e.current)}Ta(){if(!this.current)return[];const e=this._a;this._a=_e(),this.ua.forEach(r=>{this.da(r.key)&&(this._a=this._a.add(r.key))});const n=[];return e.forEach(r=>{this._a.has(r)||n.push(new eA(r))}),this._a.forEach(r=>{e.has(r)||n.push(new ZI(r))}),n}Aa(e){this.sa=e.hs,this._a=_e();const n=this.la(e.documents);return this.applyChanges(n,!0)}Ra(){return oo.fromInitialDocuments(this.query,this.ua,this.mutatedKeys,this.oa===0,this.hasCachedResults)}}class i${constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class o${constructor(e){this.key=e,this.Va=!1}}class a${constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.ma={},this.fa=new Lo(a=>EI(a),bh),this.ga=new Map,this.pa=new Set,this.ya=new Ge(ee.comparator),this.wa=new Map,this.Sa=new ig,this.ba={},this.Da=new Map,this.Ca=io.Bn(),this.onlineState="Unknown",this.va=void 0}get isPrimaryClient(){return this.va===!0}}async function l$(t,e){const n=y$(t);let r,s;const i=n.fa.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.Ra();else{const o=await OV(n.localStore,sr(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await c$(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&zI(n.remoteStore,o)}return s}async function c$(t,e,n,r,s){t.Fa=(h,f,d)=>async function(p,g,y,w){let b=g.view.la(y);b.Xi&&(b=await kv(p.localStore,g.query,!1).then(({documents:I})=>g.view.la(I,b)));const T=w&&w.targetChanges.get(g.targetId),k=g.view.applyChanges(b,p.isPrimaryClient,T);return Lv(p,g.targetId,k.Ea),k.snapshot}(t,h,f,d);const i=await kv(t.localStore,e,!0),o=new s$(e,i.hs),a=o.la(i.documents),l=kl.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),c=o.applyChanges(a,t.isPrimaryClient,l);Lv(t,n,c.Ea);const u=new i$(e,n,o);return t.fa.set(e,u),t.ga.has(n)?t.ga.get(n).push(e):t.ga.set(n,[e]),c.snapshot}async function u$(t,e){const n=he(t),r=n.fa.get(e),s=n.ga.get(r.targetId);if(s.length>1)return n.ga.set(r.targetId,s.filter(i=>!bh(i,e))),void n.fa.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Gd(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),KI(n.remoteStore,r.targetId),Qd(n,r.targetId)}).catch(Cl)):(Qd(n,r.targetId),await Gd(n.localStore,r.targetId,!0))}async function h$(t,e,n){const r=v$(t);try{const s=await function(o,a){const l=he(o),c=tt.now(),u=a.reduce((d,m)=>d.add(m.key),_e());let h,f;return l.persistence.runTransaction("Locally write mutations","readwrite",d=>{let m=Pr(),p=_e();return l.os.getEntries(d,u).next(g=>{m=g,m.forEach((y,w)=>{w.isValidDocument()||(p=p.add(y))})}).next(()=>l.localDocuments.getOverlayedDocuments(d,m)).next(g=>{h=g;const y=[];for(const w of a){const b=VL(w,h.get(w.key).overlayedDocument);b!=null&&y.push(new ms(w.key,b,dI(b.value.mapValue),Dn.exists(!0)))}return l.mutationQueue.addMutationBatch(d,c,y,a)}).next(g=>{f=g;const y=g.applyToLocalDocumentSet(h,p);return l.documentOverlayCache.saveOverlays(d,g.batchId,y)})}).then(()=>({batchId:f.batchId,changes:bI(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,l){let c=o.ba[o.currentUser.toKey()];c||(c=new Ge(Ce)),c=c.insert(a,l),o.ba[o.currentUser.toKey()]=c}(r,s.batchId,n),await Ol(r,s.changes),await kh(r.remoteStore)}catch(s){const i=fg(s,"Failed to persist write");n.reject(i)}}async function tA(t,e){const n=he(t);try{const r=await PV(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.wa.get(i);o&&(qe(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Va=!0:s.modifiedDocuments.size>0?qe(o.Va):s.removedDocuments.size>0&&(qe(o.Va),o.Va=!1))}),await Ol(n,r,e)}catch(r){await Cl(r)}}function Mv(t,e,n){const r=he(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.fa.forEach((i,o)=>{const a=o.view.K_(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const l=he(o);l.onlineState=a;let c=!1;l.queries.forEach((u,h)=>{for(const f of h.listeners)f.K_(a)&&(c=!0)}),c&&mg(l)}(r.eventManager,e),s.length&&r.ma.u_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function f$(t,e,n){const r=he(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.wa.get(e),i=s&&s.key;if(i){let o=new Ge(ee.comparator);o=o.insert(i,xt.newNoDocument(i,ce.min()));const a=_e().add(i),l=new Ch(ce.min(),new Map,new Ge(Ce),o,a);await tA(r,l),r.ya=r.ya.remove(i),r.wa.delete(e),_g(r)}else await Gd(r.localStore,e,!1).then(()=>Qd(r,e,n)).catch(Cl)}async function d$(t,e){const n=he(t),r=e.batch.batchId;try{const s=await SV(n.localStore,e);rA(n,r,null),nA(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ol(n,s)}catch(s){await Cl(s)}}async function p$(t,e,n){const r=he(t);try{const s=await function(o,a){const l=he(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return l.mutationQueue.lookupMutationBatch(c,a).next(h=>(qe(h!==null),u=h.keys(),l.mutationQueue.removeMutationBatch(c,h))).next(()=>l.mutationQueue.performConsistencyCheck(c)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(c,u,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>l.localDocuments.getDocuments(c,u))})}(r.localStore,e);rA(r,e,n),nA(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ol(r,s)}catch(s){await Cl(s)}}function nA(t,e){(t.Da.get(e)||[]).forEach(n=>{n.resolve()}),t.Da.delete(e)}function rA(t,e,n){const r=he(t);let s=r.ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.ba[r.currentUser.toKey()]=s}}function Qd(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.ga.get(e))t.fa.delete(r),n&&t.ma.Ma(r,n);t.ga.delete(e),t.isPrimaryClient&&t.Sa.Vr(e).forEach(r=>{t.Sa.containsKey(r)||sA(t,r)})}function sA(t,e){t.pa.delete(e.path.canonicalString());const n=t.ya.get(e);n!==null&&(KI(t.remoteStore,n),t.ya=t.ya.remove(e),t.wa.delete(n),_g(t))}function Lv(t,e,n){for(const r of n)r instanceof ZI?(t.Sa.addReference(r.key,e),m$(t,r)):r instanceof eA?(G("SyncEngine","Document no longer in limbo: "+r.key),t.Sa.removeReference(r.key,e),t.Sa.containsKey(r.key)||sA(t,r.key)):se()}function m$(t,e){const n=e.key,r=n.path.canonicalString();t.ya.get(n)||t.pa.has(r)||(G("SyncEngine","New document in limbo: "+n),t.pa.add(r),_g(t))}function _g(t){for(;t.pa.size>0&&t.ya.size<t.maxConcurrentLimboResolutions;){const e=t.pa.values().next().value;t.pa.delete(e);const n=new ee(Ke.fromString(e)),r=t.Ca.next();t.wa.set(r,new o$(n)),t.ya=t.ya.insert(n,r),zI(t.remoteStore,new Qr(sr(Th(n.path)),r,"TargetPurposeLimboResolution",Qm.ae))}}async function Ol(t,e,n){const r=he(t),s=[],i=[],o=[];r.fa.isEmpty()||(r.fa.forEach((a,l)=>{o.push(r.Fa(l,e,n).then(c=>{if((c||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){s.push(c);const u=ag.Ki(l.targetId,c);i.push(u)}}))}),await Promise.all(o),r.ma.u_(s),await async function(l,c){const u=he(l);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>D.forEach(c,f=>D.forEach(f.qi,d=>u.persistence.referenceDelegate.addReference(h,f.targetId,d)).next(()=>D.forEach(f.Qi,d=>u.persistence.referenceDelegate.removeReference(h,f.targetId,d)))))}catch(h){if(!Sl(h))throw h;G("LocalStore","Failed to update sequence numbers: "+h)}for(const h of c){const f=h.targetId;if(!h.fromCache){const d=u.ns.get(f),m=d.snapshotVersion,p=d.withLastLimboFreeSnapshotVersion(m);u.ns=u.ns.insert(f,p)}}}(r.localStore,i))}async function g$(t,e){const n=he(t);if(!n.currentUser.isEqual(e)){G("SyncEngine","User change. New user:",e.toKey());const r=await jI(n.localStore,e);n.currentUser=e,function(i,o){i.Da.forEach(a=>{a.forEach(l=>{l.reject(new Y(O.CANCELLED,o))})}),i.Da.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ol(n,r.us)}}function _$(t,e){const n=he(t),r=n.wa.get(e);if(r&&r.Va)return _e().add(r.key);{let s=_e();const i=n.ga.get(e);if(!i)return s;for(const o of i){const a=n.fa.get(o);s=s.unionWith(a.view.ca)}return s}}function y$(t){const e=he(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=tA.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=_$.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=f$.bind(null,e),e.ma.u_=n$.bind(null,e.eventManager),e.ma.Ma=r$.bind(null,e.eventManager),e}function v$(t){const e=he(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=d$.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=p$.bind(null,e),e}class Vv{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Sh(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return CV(this.persistence,new AV,e.initialUser,this.serializer)}createPersistence(e){return new TV(og.Hr,this.serializer)}createSharedClientState(e){return new DV}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class E${async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Mv(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=g$.bind(null,this.syncEngine),await ZV(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new t$}()}createDatastore(e){const n=Sh(e.databaseInfo.databaseId),r=function(i){return new $V(i)}(e.databaseInfo);return function(i,o,a,l){return new BV(i,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,a){return new qV(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>Mv(this.syncEngine,n,0),function(){return Ov.C()?new Ov:new MV}())}createSyncEngine(e,n){return function(s,i,o,a,l,c,u){const h=new a$(s,i,o,a,l,c);return u&&(h.va=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=he(n);G("RemoteStore","RemoteStore shutting down."),r.v_.add(5),await Nl(r),r.M_.shutdown(),r.x_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yg{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Na(this.observer.next,e)}error(e){this.observer.error?this.Na(this.observer.error,e):Sr("Uncaught Error in snapshot listener:",e.toString())}Ba(){this.muted=!0}Na(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w${constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=kt.UNAUTHENTICATED,this.clientId=uI.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{G("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(G("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Y(O.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Tr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=fg(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Rf(t,e){t.asyncQueue.verifyOperationInProgress(),G("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await jI(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function $v(t,e){t.asyncQueue.verifyOperationInProgress();const n=await b$(t);G("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(s=>xv(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,i)=>xv(e.remoteStore,i)),t._onlineComponents=e}function T$(t){return t.name==="FirebaseError"?t.code===O.FAILED_PRECONDITION||t.code===O.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function b$(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){G("FirestoreClient","Using user provided OfflineComponentProvider");try{await Rf(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!T$(n))throw n;to("Error using user provided cache. Falling back to memory cache: "+n),await Rf(t,new Vv)}}else G("FirestoreClient","Using default OfflineComponentProvider"),await Rf(t,new Vv);return t._offlineComponents}async function iA(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(G("FirestoreClient","Using user provided OnlineComponentProvider"),await $v(t,t._uninitializedComponentsProvider._online)):(G("FirestoreClient","Using default OnlineComponentProvider"),await $v(t,new E$))),t._onlineComponents}function I$(t){return iA(t).then(e=>e.syncEngine)}async function du(t){const e=await iA(t),n=e.eventManager;return n.onListen=l$.bind(null,e.syncEngine),n.onUnlisten=u$.bind(null,e.syncEngine),n}function A$(t,e,n={}){const r=new Tr;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,l,c){const u=new yg({next:f=>{o.enqueueAndForget(()=>pg(i,h));const d=f.docs.has(a);!d&&f.fromCache?c.reject(new Y(O.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&f.fromCache&&l&&l.source==="server"?c.reject(new Y(O.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(f)},error:f=>c.reject(f)}),h=new gg(Th(a.path),u,{includeMetadataChanges:!0,Y_:!0});return dg(i,h)}(await du(t),t.asyncQueue,e,n,r)),r.promise}function R$(t,e,n={}){const r=new Tr;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,l,c){const u=new yg({next:f=>{o.enqueueAndForget(()=>pg(i,h)),f.fromCache&&l.source==="server"?c.reject(new Y(O.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(f)},error:f=>c.reject(f)}),h=new gg(a,u,{includeMetadataChanges:!0,Y_:!0});return dg(i,h)}(await du(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oA(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fv=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aA(t,e,n){if(!n)throw new Y(O.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function C$(t,e,n,r){if(e===!0&&r===!0)throw new Y(O.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Uv(t){if(!ee.isDocumentKey(t))throw new Y(O.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Bv(t){if(ee.isDocumentKey(t))throw new Y(O.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function vg(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":se()}function vn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Y(O.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=vg(t);throw new Y(O.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jv{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new Y(O.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new Y(O.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}C$("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=oA((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new Y(O.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new Y(O.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new Y(O.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Nh{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new jv({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Y(O.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new Y(O.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new jv(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new KM;switch(r.type){case"firstParty":return new XM(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Y(O.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Fv.get(n);r&&(G("ComponentProvider","Removing Datastore"),Fv.delete(n),r.terminate())}(this),Promise.resolve()}}function S$(t,e,n,r={}){var s;const i=(t=vn(t,Nh))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&to("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=kt.MOCK_USER;else{a=sw(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new Y(O.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new kt(c)}t._authCredentials=new GM(new cI(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new xl(this.firestore,e,this._query)}}class Xt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ns(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Xt(this.firestore,e,this._key)}}class ns extends xl{constructor(e,n,r){super(e,n,Th(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Xt(this.firestore,null,new ee(e))}withConverter(e){return new ns(this.firestore,e,this._path)}}function JB(t,e,...n){if(t=Fe(t),aA("collection","path",e),t instanceof Nh){const r=Ke.fromString(e,...n);return Bv(r),new ns(t,null,r)}{if(!(t instanceof Xt||t instanceof ns))throw new Y(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ke.fromString(e,...n));return Bv(r),new ns(t.firestore,null,r)}}function P$(t,e,...n){if(t=Fe(t),arguments.length===1&&(e=uI.V()),aA("doc","path",e),t instanceof Nh){const r=Ke.fromString(e,...n);return Uv(r),new Xt(t,null,new ee(r))}{if(!(t instanceof Xt||t instanceof ns))throw new Y(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ke.fromString(e,...n));return Uv(r),new Xt(t.firestore,t instanceof ns?t.converter:null,new ee(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k${constructor(){this.Ya=Promise.resolve(),this.Za=[],this.Xa=!1,this.eu=[],this.tu=null,this.nu=!1,this.ru=!1,this.iu=[],this.jo=new HI(this,"async_queue_retry"),this.su=()=>{const n=Af();n&&G("AsyncQueue","Visibility state changed to "+n.visibilityState),this.jo.Ko()};const e=Af();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.su)}get isShuttingDown(){return this.Xa}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ou(),this._u(e)}enterRestrictedMode(e){if(!this.Xa){this.Xa=!0,this.ru=e||!1;const n=Af();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.su)}}enqueue(e){if(this.ou(),this.Xa)return new Promise(()=>{});const n=new Tr;return this._u(()=>this.Xa&&this.ru?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Za.push(e),this.au()))}async au(){if(this.Za.length!==0){try{await this.Za[0](),this.Za.shift(),this.jo.reset()}catch(e){if(!Sl(e))throw e;G("AsyncQueue","Operation failed with retryable error: "+e)}this.Za.length>0&&this.jo.qo(()=>this.au())}}_u(e){const n=this.Ya.then(()=>(this.nu=!0,e().catch(r=>{this.tu=r,this.nu=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Sr("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.nu=!1,r))));return this.Ya=n,n}enqueueAfterDelay(e,n,r){this.ou(),this.iu.indexOf(e)>-1&&(n=0);const s=hg.createAndSchedule(this,e,n,r,i=>this.uu(i));return this.eu.push(s),s}ou(){this.tu&&se()}verifyOperationInProgress(){}async cu(){let e;do e=this.Ya,await e;while(e!==this.Ya)}lu(e){for(const n of this.eu)if(n.timerId===e)return!0;return!1}hu(e){return this.cu().then(()=>{this.eu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.eu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.cu()})}Pu(e){this.iu.push(e)}uu(e){const n=this.eu.indexOf(e);this.eu.splice(n,1)}}function qv(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class cs extends Nh{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=function(){return new k$}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||lA(this),this._firestoreClient.terminate()}}function N$(t,e){const n=typeof t=="object"?t:Gu(),r=typeof t=="string"?t:e||"(default)",s=Ku(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=tw("firestore");i&&S$(s,...i)}return s}function Oh(t){return t._firestoreClient||lA(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function lA(t){var e,n,r;const s=t._freezeSettings(),i=function(a,l,c,u){return new cL(a,l,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,oA(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new w$(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ao(Ft.fromBase64String(e))}catch(n){throw new Y(O.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ao(Ft.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xh{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new Y(O.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Tt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eg{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dh{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new Y(O.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new Y(O.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ce(this._lat,e._lat)||Ce(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O$=/^__.*__$/;class x${constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ms(e,this.data,this.fieldMask,n,this.fieldTransforms):new Pl(e,this.data,n,this.fieldTransforms)}}class cA{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new ms(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function uA(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw se()}}class wg{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Iu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Tu(){return this.settings.Tu}Eu(e){return new wg(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}du(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Eu({path:r,Au:!1});return s.Ru(e),s}Vu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Eu({path:r,Au:!1});return s.Iu(),s}mu(e){return this.Eu({path:void 0,Au:!0})}fu(e){return pu(e,this.settings.methodName,this.settings.gu||!1,this.path,this.settings.pu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Iu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ru(this.path.get(e))}Ru(e){if(e.length===0)throw this.fu("Document fields must not be empty");if(uA(this.Tu)&&O$.test(e))throw this.fu('Document fields cannot begin and end with "__"')}}class D${constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Sh(e)}yu(e,n,r,s=!1){return new wg({Tu:e,methodName:n,pu:r,path:Tt.emptyPath(),Au:!1,gu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function hA(t){const e=t._freezeSettings(),n=Sh(t._databaseId);return new D$(t._databaseId,!!e.ignoreUndefinedProperties,n)}function M$(t,e,n,r,s,i={}){const o=t.yu(i.merge||i.mergeFields?2:0,e,n,s);Tg("Data must be an object, but it was:",o,r);const a=fA(r,o);let l,c;if(i.merge)l=new an(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const f=Yd(e,h,n);if(!o.contains(f))throw new Y(O.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);pA(u,f)||u.push(f)}l=new an(u),c=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,c=o.fieldTransforms;return new x$(new Qt(a),l,c)}class Mh extends Eg{_toFieldTransform(e){if(e.Tu!==2)throw e.Tu===1?e.fu(`${this._methodName}() can only appear at the top level of your update data`):e.fu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Mh}}function L$(t,e,n,r){const s=t.yu(1,e,n);Tg("Data must be an object, but it was:",s,r);const i=[],o=Qt.empty();oi(r,(l,c)=>{const u=bg(e,l,n);c=Fe(c);const h=s.Vu(u);if(c instanceof Mh)i.push(u);else{const f=Lh(c,h);f!=null&&(i.push(u),o.set(u,f))}});const a=new an(i);return new cA(o,a,s.fieldTransforms)}function V$(t,e,n,r,s,i){const o=t.yu(1,e,n),a=[Yd(e,r,n)],l=[s];if(i.length%2!=0)throw new Y(O.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<i.length;f+=2)a.push(Yd(e,i[f])),l.push(i[f+1]);const c=[],u=Qt.empty();for(let f=a.length-1;f>=0;--f)if(!pA(c,a[f])){const d=a[f];let m=l[f];m=Fe(m);const p=o.Vu(d);if(m instanceof Mh)c.push(d);else{const g=Lh(m,p);g!=null&&(c.push(d),u.set(d,g))}}const h=new an(c);return new cA(u,h,o.fieldTransforms)}function Lh(t,e){if(dA(t=Fe(t)))return Tg("Unsupported field value:",e,t),fA(t,e);if(t instanceof Eg)return function(r,s){if(!uA(s.Tu))throw s.fu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.fu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Au&&e.Tu!==4)throw e.fu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let l=Lh(a,s.mu(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Fe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return NL(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=tt.fromDate(r);return{timestampValue:hu(s.serializer,i)}}if(r instanceof tt){const i=new tt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:hu(s.serializer,i)}}if(r instanceof Dh)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ao)return{bytesValue:LI(s.serializer,r._byteString)};if(r instanceof Xt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.fu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:sg(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.fu(`Unsupported field value: ${vg(r)}`)}(t,e)}function fA(t,e){const n={};return hI(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):oi(t,(r,s)=>{const i=Lh(s,e.du(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function dA(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof tt||t instanceof Dh||t instanceof ao||t instanceof Xt||t instanceof Eg)}function Tg(t,e,n){if(!dA(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=vg(n);throw r==="an object"?e.fu(t+" a custom object"):e.fu(t+" "+r)}}function Yd(t,e,n){if((e=Fe(e))instanceof xh)return e._internalPath;if(typeof e=="string")return bg(t,e);throw pu("Field path arguments must be of type string or ",t,!1,void 0,n)}const $$=new RegExp("[~\\*/\\[\\]]");function bg(t,e,n){if(e.search($$)>=0)throw pu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new xh(...e.split("."))._internalPath}catch{throw pu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function pu(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new Y(O.INVALID_ARGUMENT,a+t+l)}function pA(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mA{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Xt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new F$(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(gA("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class F$ extends mA{data(){return super.data()}}function gA(t,e){return typeof e=="string"?bg(t,e):e instanceof xh?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _A(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new Y(O.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class U${convertValue(e,n="none"){switch(Ys(e)){case 0:return null;case 1:return e.booleanValue;case 2:return et(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Qs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw se()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return oi(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new Dh(et(e.latitude),et(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Xm(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(el(e));default:return null}}convertTimestamp(e){const n=as(e);return new tt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ke.fromString(e);qe(BI(r));const s=new tl(r.get(1),r.get(3)),i=new ee(r.popFirst(5));return s.isEqual(n)||Sr(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B$(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class yA extends mA{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new bc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(gA("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class bc extends yA{data(e={}){return super.data(e)}}class vA{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new aa(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new bc(this._firestore,this._userDataWriter,r.key,r,new aa(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new Y(O.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const l=new bc(s._firestore,s._userDataWriter,a.doc.key,a.doc,new aa(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const l=new bc(s._firestore,s._userDataWriter,a.doc.key,a.doc,new aa(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,u=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:j$(a.type),doc:l,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function j$(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return se()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EA(t){t=vn(t,Xt);const e=vn(t.firestore,cs);return A$(Oh(e),t._key).then(n=>wA(e,t,n))}class Ig extends U${constructor(e){super(),this.firestore=e}convertBytes(e){return new ao(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Xt(this.firestore,null,n)}}function q$(t){t=vn(t,xl);const e=vn(t.firestore,cs),n=Oh(e),r=new Ig(e);return _A(t._query),R$(n,t._query).then(s=>new vA(e,r,t,s))}function ZB(t,e,n,...r){t=vn(t,Xt);const s=vn(t.firestore,cs),i=hA(s);let o;return o=typeof(e=Fe(e))=="string"||e instanceof xh?V$(i,"updateDoc",t._key,e,n,r):L$(i,"updateDoc",t._key,e),Rg(s,[o.toMutation(t._key,Dn.exists(!0))])}function ej(t){return Rg(vn(t.firestore,cs),[new tg(t._key,Dn.none())])}function tj(t,e){const n=vn(t.firestore,cs),r=P$(t),s=B$(t.converter,e);return Rg(n,[M$(hA(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,Dn.exists(!1))]).then(()=>r)}function Ag(t,...e){var n,r,s;t=Fe(t);let i={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||qv(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(qv(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(s=h.complete)===null||s===void 0?void 0:s.bind(h)}let l,c,u;if(t instanceof Xt)c=vn(t.firestore,cs),u=Th(t._key.path),l={next:h=>{e[o]&&e[o](wA(c,t,h))},error:e[o+1],complete:e[o+2]};else{const h=vn(t,xl);c=vn(h.firestore,cs),u=h._query;const f=new Ig(c);l={next:d=>{e[o]&&e[o](new vA(c,f,h,d))},error:e[o+1],complete:e[o+2]},_A(t._query)}return function(f,d,m,p){const g=new yg(p),y=new gg(d,g,m);return f.asyncQueue.enqueueAndForget(async()=>dg(await du(f),y)),()=>{g.Ba(),f.asyncQueue.enqueueAndForget(async()=>pg(await du(f),y))}}(Oh(c),u,a,l)}function Rg(t,e){return function(r,s){const i=new Tr;return r.asyncQueue.enqueueAndForget(async()=>h$(await I$(r),s,i)),i.promise}(Oh(t),e)}function wA(t,e,n){const r=n.docs.get(e._key),s=new Ig(t);return new yA(t,s,e._key,r,new aa(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){Mo=s})(hs),ar(new Mn("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new cs(new QM(r.getProvider("auth-internal")),new ZM(r.getProvider("app-check-internal")),function(c,u){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new Y(O.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new tl(c.options.projectId,u)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),un(uv,"4.3.0",e),un(uv,"4.3.0","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TA="firebasestorage.googleapis.com",bA="storageBucket",H$=2*60*1e3,W$=10*60*1e3,z$=1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe extends ur{constructor(e,n,r=0){super(Cf(e),`Firebase Storage: ${n} (${Cf(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Qe.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Cf(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var We;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(We||(We={}));function Cf(t){return"storage/"+t}function Cg(){const t="An unknown error occurred, please check the error payload for server response.";return new Qe(We.UNKNOWN,t)}function K$(t){return new Qe(We.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function G$(t){return new Qe(We.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Q$(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Qe(We.UNAUTHENTICATED,t)}function Y$(){return new Qe(We.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function X$(t){return new Qe(We.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function IA(){return new Qe(We.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function AA(){return new Qe(We.CANCELED,"User canceled the upload/download.")}function J$(t){return new Qe(We.INVALID_URL,"Invalid URL '"+t+"'.")}function Z$(t){return new Qe(We.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function eF(){return new Qe(We.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+bA+"' property when initializing the app?")}function RA(){return new Qe(We.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function tF(){return new Qe(We.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function nF(){return new Qe(We.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function rF(t){return new Qe(We.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Xd(t){return new Qe(We.INVALID_ARGUMENT,t)}function CA(){return new Qe(We.APP_DELETED,"The Firebase app was deleted.")}function sF(t){return new Qe(We.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Aa(t,e){return new Qe(We.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Qo(t){throw new Qe(We.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=ln.makeFromUrl(e,n)}catch{return new ln(e,"")}if(r.path==="")return r;throw Z$(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(T){T.path.charAt(T.path.length-1)==="/"&&(T.path_=T.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function c(T){T.path_=decodeURIComponent(T.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",d=new RegExp(`^https?://${h}/${u}/b/${s}/o${f}`,"i"),m={bucket:1,path:3},p=n===TA?"(?:storage.googleapis.com|storage.cloud.google.com)":n,g="([^?#]*)",y=new RegExp(`^https?://${p}/${s}/${g}`,"i"),b=[{regex:a,indices:l,postModify:i},{regex:d,indices:m,postModify:c},{regex:y,indices:{bucket:1,path:2},postModify:c}];for(let T=0;T<b.length;T++){const k=b[T],I=k.regex.exec(e);if(I){const C=I[k.indices.bucket];let E=I[k.indices.path];E||(E=""),r=new ln(C,E),k.postModify(r);break}}if(r==null)throw J$(e);return r}}class iF{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oF(t,e,n){let r=1,s=null,i=null,o=!1,a=0;function l(){return a===2}let c=!1;function u(...g){c||(c=!0,e.apply(null,g))}function h(g){s=setTimeout(()=>{s=null,t(d,l())},g)}function f(){i&&clearTimeout(i)}function d(g,...y){if(c){f();return}if(g){f(),u.call(null,g,...y);return}if(l()||o){f(),u.call(null,g,...y);return}r<64&&(r*=2);let b;a===1?(a=2,b=0):b=(r+Math.random())*1e3,h(b)}let m=!1;function p(g){m||(m=!0,f(),!c&&(s!==null?(g||(a=2),clearTimeout(s),h(0)):g||(a=1)))}return h(0),i=setTimeout(()=>{o=!0,p(!0)},n),p}function aF(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lF(t){return t!==void 0}function cF(t){return typeof t=="function"}function uF(t){return typeof t=="object"&&!Array.isArray(t)}function Vh(t){return typeof t=="string"||t instanceof String}function Hv(t){return Sg()&&t instanceof Blob}function Sg(){return typeof Blob<"u"&&!F1()}function Wv(t,e,n,r){if(r<e)throw Xd(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Xd(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function li(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function SA(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $s;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})($s||($s={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PA(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hF{constructor(e,n,r,s,i,o,a,l,c,u,h,f=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=h,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((d,m)=>{this.resolve_=d,this.reject_=m,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new lc(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===$s.NO_ERROR,l=i.getStatus();if(!a||PA(l,this.additionalRetryCodes_)&&this.retry){const u=i.getErrorCode()===$s.ABORT;r(!1,new lc(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;r(!0,new lc(c,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());lF(l)?i(l):i()}catch(l){o(l)}else if(a!==null){const l=Cg();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(s.canceled){const l=this.appDelete_?CA():AA();o(l)}else{const l=IA();o(l)}};this.canceled_?n(!1,new lc(!1,null,!0)):this.backoffId_=oF(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&aF(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class lc{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function fF(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function dF(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function pF(t,e){e&&(t["X-Firebase-GMPID"]=e)}function mF(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function gF(t,e,n,r,s,i,o=!0){const a=SA(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return pF(c,e),fF(c,n),dF(c,i),mF(c,r),new hF(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _F(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function yF(...t){const e=_F();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Sg())return new Blob(t);throw new Qe(We.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function vF(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EF(t){if(typeof atob>"u")throw rF("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const er={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Sf{constructor(e,n){this.data=e,this.contentType=n||null}}function wF(t,e){switch(t){case er.RAW:return new Sf(kA(e));case er.BASE64:case er.BASE64URL:return new Sf(NA(t,e));case er.DATA_URL:return new Sf(bF(e),IF(e))}throw Cg()}function kA(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function TF(t){let e;try{e=decodeURIComponent(t)}catch{throw Aa(er.DATA_URL,"Malformed data URL.")}return kA(e)}function NA(t,e){switch(t){case er.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw Aa(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case er.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw Aa(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=EF(e)}catch(s){throw s.message.includes("polyfill")?s:Aa(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class OA{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Aa(er.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=AF(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function bF(t){const e=new OA(t);return e.base64?NA(er.BASE64,e.rest):TF(e.rest)}function IF(t){return new OA(t).contentType}function AF(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(e,n){let r=0,s="";Hv(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(Hv(this.data_)){const r=this.data_,s=vF(r,e,n);return s===null?null:new Gr(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Gr(r,!0)}}static getBlob(...e){if(Sg()){const n=e.map(r=>r instanceof Gr?r.data_:r);return new Gr(yF.apply(null,n))}else{const n=e.map(o=>Vh(o)?wF(er.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)s[i++]=o[a]}),new Gr(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xA(t){let e;try{e=JSON.parse(t)}catch{return null}return uF(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RF(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function CF(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function DA(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SF(t,e){return e}class Ut{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||SF}}let cc=null;function PF(t){return!Vh(t)||t.length<2?t:DA(t)}function $h(){if(cc)return cc;const t=[];t.push(new Ut("bucket")),t.push(new Ut("generation")),t.push(new Ut("metageneration")),t.push(new Ut("name","fullPath",!0));function e(i,o){return PF(o)}const n=new Ut("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new Ut("size");return s.xform=r,t.push(s),t.push(new Ut("timeCreated")),t.push(new Ut("updated")),t.push(new Ut("md5Hash",null,!0)),t.push(new Ut("cacheControl",null,!0)),t.push(new Ut("contentDisposition",null,!0)),t.push(new Ut("contentEncoding",null,!0)),t.push(new Ut("contentLanguage",null,!0)),t.push(new Ut("contentType",null,!0)),t.push(new Ut("metadata","customMetadata",!0)),cc=t,cc}function kF(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new ln(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function NF(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return kF(r,t),r}function MA(t,e,n){const r=xA(e);return r===null?null:NF(t,r,n)}function OF(t,e,n,r){const s=xA(e);if(s===null||!Vh(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(c=>{const u=t.bucket,h=t.fullPath,f="/b/"+o(u)+"/o/"+o(h),d=li(f,n,r),m=SA({alt:"media",token:c});return d+m})[0]}function Pg(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class gs{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function br(t){if(!t)throw Cg()}function Fh(t,e){function n(r,s){const i=MA(t,s,e);return br(i!==null),i}return n}function xF(t,e){function n(r,s){const i=MA(t,s,e);return br(i!==null),OF(i,s,t.host,t._protocol)}return n}function Dl(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=Y$():s=Q$():n.getStatus()===402?s=G$(t.bucket):n.getStatus()===403?s=X$(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function Uh(t){const e=Dl(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=K$(t.path)),i.serverResponse=s.serverResponse,i}return n}function LA(t,e,n){const r=e.fullServerUrl(),s=li(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new gs(s,i,Fh(t,n),o);return a.errorHandler=Uh(e),a}function DF(t,e,n){const r=e.fullServerUrl(),s=li(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new gs(s,i,xF(t,n),o);return a.errorHandler=Uh(e),a}function MF(t,e,n,r){const s=e.fullServerUrl(),i=li(s,t.host,t._protocol),o="PATCH",a=Pg(n,r),l={"Content-Type":"application/json; charset=utf-8"},c=t.maxOperationRetryTime,u=new gs(i,o,Fh(t,r),c);return u.headers=l,u.body=a,u.errorHandler=Uh(e),u}function LF(t,e){const n=e.fullServerUrl(),r=li(n,t.host,t._protocol),s="DELETE",i=t.maxOperationRetryTime;function o(l,c){}const a=new gs(r,s,o,i);return a.successCodes=[200,204],a.errorHandler=Uh(e),a}function VF(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function VA(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=VF(null,e)),r}function $F(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let b="";for(let T=0;T<2;T++)b=b+Math.random().toString().slice(2);return b}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const c=VA(e,r,s),u=Pg(c,n),h="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+u+`\r
--`+l+`\r
Content-Type: `+c.contentType+`\r
\r
`,f=`\r
--`+l+"--",d=Gr.getBlob(h,r,f);if(d===null)throw RA();const m={name:c.fullPath},p=li(i,t.host,t._protocol),g="POST",y=t.maxUploadRetryTime,w=new gs(p,g,Fh(t,n),y);return w.urlParams=m,w.headers=o,w.body=d.uploadData(),w.errorHandler=Dl(e),w}class mu{constructor(e,n,r,s){this.current=e,this.total=n,this.finalized=!!r,this.metadata=s||null}}function kg(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{br(!1)}return br(!!n&&(e||["active"]).indexOf(n)!==-1),n}function FF(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o=VA(e,r,s),a={name:o.fullPath},l=li(i,t.host,t._protocol),c="POST",u={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},h=Pg(o,n),f=t.maxUploadRetryTime;function d(p){kg(p);let g;try{g=p.getResponseHeader("X-Goog-Upload-URL")}catch{br(!1)}return br(Vh(g)),g}const m=new gs(l,c,d,f);return m.urlParams=a,m.headers=u,m.body=h,m.errorHandler=Dl(e),m}function UF(t,e,n,r){const s={"X-Goog-Upload-Command":"query"};function i(c){const u=kg(c,["active","final"]);let h=null;try{h=c.getResponseHeader("X-Goog-Upload-Size-Received")}catch{br(!1)}h||br(!1);const f=Number(h);return br(!isNaN(f)),new mu(f,r.size(),u==="final")}const o="POST",a=t.maxUploadRetryTime,l=new gs(n,o,i,a);return l.headers=s,l.errorHandler=Dl(e),l}const zv=256*1024;function BF(t,e,n,r,s,i,o,a){const l=new mu(0,0);if(o?(l.current=o.current,l.total=o.total):(l.current=0,l.total=r.size()),r.size()!==l.total)throw tF();const c=l.total-l.current;let u=c;s>0&&(u=Math.min(u,s));const h=l.current,f=h+u;let d="";u===0?d="finalize":c===u?d="upload, finalize":d="upload";const m={"X-Goog-Upload-Command":d,"X-Goog-Upload-Offset":`${l.current}`},p=r.slice(h,f);if(p===null)throw RA();function g(T,k){const I=kg(T,["active","final"]),C=l.current+u,E=r.size();let R;return I==="final"?R=Fh(e,i)(T,k):R=null,new mu(C,E,I==="final",R)}const y="POST",w=e.maxUploadRetryTime,b=new gs(n,y,g,w);return b.headers=m,b.body=p.uploadData(),b.progressCallback=a||null,b.errorHandler=Dl(t),b}const Gt={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function Pf(t){switch(t){case"running":case"pausing":case"canceling":return Gt.RUNNING;case"paused":return Gt.PAUSED;case"success":return Gt.SUCCESS;case"canceled":return Gt.CANCELED;case"error":return Gt.ERROR;default:return Gt.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jF{constructor(e,n,r){if(cF(e)||n!=null||r!=null)this.next=e,this.error=n??void 0,this.complete=r??void 0;else{const i=e;this.next=i.next,this.error=i.error,this.complete=i.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vi(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class qF{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=$s.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=$s.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=$s.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s){if(this.sent_)throw Qo("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Qo("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Qo("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Qo("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Qo("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class HF extends qF{initXhr(){this.xhr_.responseType="text"}}function dr(){return new HF}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WF{constructor(e,n,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=r,this._mappings=$h(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=s=>{if(this._request=void 0,this._chunkMultiplier=1,s._codeEquals(We.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const i=this.isExponentialBackoffExpired();if(PA(s.status,[]))if(i)s=IA();else{this.sleepTime=Math.max(this.sleepTime*2,z$),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=s,this._transition("error")}},this._metadataErrorHandler=s=>{this._request=void 0,s._codeEquals(We.CANCELED)?this.completeTransitions_():(this._error=s,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((s,i)=>{this._resolve=s,this._reject=i,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,r])=>{switch(this._state){case"running":e(n,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const r=FF(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),s=this._ref.storage._makeRequest(r,dr,e,n);this._request=s,s.getPromise().then(i=>{this._request=void 0,this._uploadUrl=i,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,r)=>{const s=UF(this._ref.storage,this._ref._location,e,this._blob),i=this._ref.storage._makeRequest(s,dr,n,r);this._request=i,i.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=zv*this._chunkMultiplier,n=new mu(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((s,i)=>{let o;try{o=BF(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(l){this._error=l,this._transition("error");return}const a=this._ref.storage._makeRequest(o,dr,s,i,!1);this._request=a,a.getPromise().then(l=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(l.current),l.finalized?(this._metadata=l.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){zv*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const r=LA(this._ref.storage,this._ref._location,this._mappings),s=this._ref.storage._makeRequest(r,dr,e,n);this._request=s,s.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const r=$F(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),s=this._ref.storage._makeRequest(r,dr,e,n);this._request=s,s.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=AA(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=Pf(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,r,s){const i=new jF(n||void 0,r||void 0,s||void 0);return this._addObserver(i),()=>{this._removeObserver(i)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(Pf(this._state)){case Gt.SUCCESS:vi(this._resolve.bind(null,this.snapshot))();break;case Gt.CANCELED:case Gt.ERROR:const n=this._reject;vi(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(Pf(this._state)){case Gt.RUNNING:case Gt.PAUSED:e.next&&vi(e.next.bind(e,this.snapshot))();break;case Gt.SUCCESS:e.complete&&vi(e.complete.bind(e))();break;case Gt.CANCELED:case Gt.ERROR:e.error&&vi(e.error.bind(e,this._error))();break;default:e.error&&vi(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(e,n){this._service=e,n instanceof ln?this._location=n:this._location=ln.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Xs(e,n)}get root(){const e=new ln(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return DA(this._location.path)}get storage(){return this._service}get parent(){const e=RF(this._location.path);if(e===null)return null;const n=new ln(this._location.bucket,e);return new Xs(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw sF(e)}}function zF(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new WF(t,new Gr(e),n)}function KF(t){t._throwIfRoot("getMetadata");const e=LA(t.storage,t._location,$h());return t.storage.makeRequestWithTokens(e,dr)}function GF(t,e){t._throwIfRoot("updateMetadata");const n=MF(t.storage,t._location,e,$h());return t.storage.makeRequestWithTokens(n,dr)}function QF(t){t._throwIfRoot("getDownloadURL");const e=DF(t.storage,t._location,$h());return t.storage.makeRequestWithTokens(e,dr).then(n=>{if(n===null)throw nF();return n})}function YF(t){t._throwIfRoot("deleteObject");const e=LF(t.storage,t._location);return t.storage.makeRequestWithTokens(e,dr)}function XF(t,e){const n=CF(t._location.path,e),r=new ln(t._location.bucket,n);return new Xs(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JF(t){return/^[A-Za-z]+:\/\//.test(t)}function ZF(t,e){return new Xs(t,e)}function $A(t,e){if(t instanceof Ng){const n=t;if(n._bucket==null)throw eF();const r=new Xs(n,n._bucket);return e!=null?$A(r,e):r}else return e!==void 0?XF(t,e):t}function e5(t,e){if(e&&JF(e)){if(t instanceof Ng)return ZF(t,e);throw Xd("To use ref(service, url), the first argument must be a Storage instance.")}else return $A(t,e)}function Kv(t,e){const n=e==null?void 0:e[bA];return n==null?null:ln.makeFromBucketSpec(n,t)}function t5(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:sw(s,t.app.options.projectId))}class Ng{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=TA,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=H$,this._maxUploadRetryTime=W$,this._requests=new Set,s!=null?this._bucket=ln.makeFromBucketSpec(s,this._host):this._bucket=Kv(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=ln.makeFromBucketSpec(this._url,e):this._bucket=Kv(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Wv("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Wv("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Xs(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new iF(CA());{const o=gF(e,this._appId,r,s,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const Gv="@firebase/storage",Qv="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FA="storage";function n5(t,e,n){return t=Fe(t),zF(t,e,n)}function r5(t){return t=Fe(t),KF(t)}function s5(t,e){return t=Fe(t),GF(t,e)}function i5(t){return t=Fe(t),QF(t)}function nj(t){return t=Fe(t),YF(t)}function rj(t,e){return t=Fe(t),e5(t,e)}function o5(t=Gu(),e){t=Fe(t);const r=Ku(t,FA).getImmediate({identifier:e}),s=tw("storage");return s&&a5(r,...s),r}function a5(t,e,n,r={}){t5(t,e,n,r)}function l5(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new Ng(n,r,s,e,hs)}function c5(){ar(new Mn(FA,l5,"PUBLIC").setMultipleInstances(!0)),un(Gv,Qv,""),un(Gv,Qv,"esm2017")}c5();const kf=new WeakMap;function UA(t,e){return kf.has(e)||kf.set(e,t||{f:{},r:{},s:{},u:{}}),kf.get(e)}function Og(t,e,n,r){if(!t)return n;const[s,i]=BA(t);if(!s)return n;const o=UA(void 0,r)[s]||{},a=e||i;return a&&a in o?o[a]:n}function u5(t,e,n,r){if(!t)return;const[s,i]=BA(t);if(!s)return;const o=UA(void 0,r)[s],a=e||i;if(a)return n.then(l=>{o[a]=l}).catch(on),a}function BA(t){return zO(t)||KO(t)?["f",t.path]:GO(t)?["r",t.toString()]:QO(t)?["s",t.toString()]:[]}const Nf=new WeakMap;function xg(t,e,n){const r=fs();Nf.has(r)||Nf.set(r,new Map);const s=Nf.get(r),i=u5(e,n,t,r);return i&&s.set(i,t),i?()=>s.delete(i):on}const h5={toFirestore(t){return t},fromFirestore(t,e){return t.exists()?Object.defineProperties(t.data(e),{id:{value:t.id}}):null}};function Jd(t,e,n,r){if(!HO(t))return[t,{}];const s=[{},{}],i=Object.keys(n).reduce((a,l)=>{const c=n[l];return a[c.path]=c.data(),a},{});function o(a,l,c,u){l=l||{};const[h,f]=u;Object.getOwnPropertyNames(a).forEach(d=>{const m=Object.getOwnPropertyDescriptor(a,d);m&&!m.enumerable&&Object.defineProperty(h,d,m)});for(const d in a){const m=a[d];if(m==null||m instanceof Date||m instanceof tt||m instanceof Dh)h[d]=m;else if(sm(m)){const p=c+d;h[d]=p in n?l[d]:m.path,f[p]=m.converter?m:m.withConverter(r.converter)}else if(Array.isArray(m)){h[d]=Array(m.length);for(let p=0;p<m.length;p++){const g=m[p];g&&g.path in i&&(h[d][p]=i[g.path])}o(m,l[d]||h[d],c+d+".",[h[d],f])}else ni(m)?(h[d]={},o(m,l[d],c+d+".",[h[d],f])):h[d]=m}}return o(t,e,"",s),s}const Dg={reset:!1,wait:!0,maxRefDepth:2,converter:h5,snapshotOptions:{serverTimestamps:"estimate"}};function gu(t){for(const e in t)t[e].unsub()}function Zd(t,e,n,r,s,i,o,a,l){const[c,u]=Jd(r.data(t.snapshotOptions),rm(e,n),s,t);i.set(e,n,c),ep(t,e,n,s,u,i,o,a,l)}function f5({ref:t,target:e,path:n,depth:r,resolve:s,reject:i,ops:o},a){const l=Object.create(null);let c=on;return a.once?EA(t).then(u=>{u.exists()?Zd(a,e,n,u,l,o,r,s,i):(o.set(e,n,null),s())}).catch(i):c=Ag(t,u=>{u.exists()?Zd(a,e,n,u,l,o,r,s,i):(o.set(e,n,null),s())},i),()=>{c(),gu(l)}}function ep(t,e,n,r,s,i,o,a,l){const c=Object.keys(s);if(Object.keys(r).filter(p=>c.indexOf(p)<0).forEach(p=>{r[p].unsub(),delete r[p]}),!c.length||++o>t.maxRefDepth)return a(n);let h=0;const f=c.length,d=Object.create(null);function m(p){p in d&&++h>=f&&a(n)}c.forEach(p=>{const g=r[p],y=s[p],w=`${n}.${p}`;if(d[w]=!0,g)if(g.path!==y.path)g.unsub();else return;r[p]={data:()=>rm(e,w),unsub:f5({ref:y,target:e,path:w,depth:o,ops:i,resolve:m.bind(null,w),reject:l},t),path:y.path}})}function d5(t,e,n,r,s,i){const o=Object.assign({},Dg,i),{snapshotListenOptions:a,snapshotOptions:l,wait:c,once:u}=o,h="value";let f=Me(c?[]:t.value);c||n.set(t,h,[]);const d=r;let m,p=on;const g=[],y={added:({newIndex:b,doc:T})=>{g.splice(b,0,Object.create(null));const k=g[b],[I,C]=Jd(T.data(l),void 0,k,o);n.add(yt(f),b,I),ep(o,f,`${h}.${b}`,k,C,n,0,r.bind(null,T),s)},modified:({oldIndex:b,newIndex:T,doc:k})=>{const I=yt(f),C=g[b],E=I[b],[R,M]=Jd(k.data(l),E,C,o);g.splice(T,0,C),n.remove(I,b),n.add(I,T,R),ep(o,f,`${h}.${T}`,C,M,n,0,r,s)},removed:({oldIndex:b})=>{const T=yt(f);n.remove(T,b),gu(g.splice(b,1)[0])}};function w(b){const T=b.docChanges(a);if(!m&&T.length){m=!0;let k=0;const I=T.length,C=Object.create(null);for(let E=0;E<I;E++)C[T[E].doc.id]=!0;r=E=>{E&&E.id in C&&++k>=I&&(c&&(n.set(t,h,yt(f)),f=t),d(yt(f)),r=on)}}T.forEach(k=>{y[k.type](k)}),T.length||(c&&(n.set(t,h,yt(f)),f=t),r(yt(f)))}return u?q$(e).then(w).catch(s):p=Ag(e,w,s),b=>{if(p(),b){const T=typeof b=="function"?b():[];n.set(t,h,T)}g.forEach(gu)}}function p5(t,e,n,r,s,i){const o=Object.assign({},Dg,i),a="value",l=Object.create(null);r=YO(r,()=>rm(t,a));let c=on;function u(h){h.exists()?Zd(o,t,a,h,l,n,0,r,s):(n.set(t,a,null),r(null))}return o.once?EA(e).then(u).catch(s):c=Ag(e,u,s),h=>{if(c(),h){const f=typeof h=="function"?h():null;n.set(t,a,f)}gu(l)}}const Yv=Symbol();function jA(t,e){let n=on;const r=Object.assign({},Dg,e),s=yt(t),i=r.target||Me();JO()&&(r.once=!0);const o=Og(s,r.ssrKey,Yv,fs()),a=o!==Yv;a&&(i.value=o);let l=!a;const c=Me(!1),u=Me(),h=Xr(),f=Eo();let d=on;function m(){let y=yt(t);const w=new Promise((b,T)=>{if(n(r.reset),!y)return n=on,b(null);c.value=l,l=!0,y.converter||(y=y.withConverter(r.converter)),n=(sm(y)?p5:d5)(i,y,m5,b,T,r)}).catch(b=>(h.value===w&&(u.value=b),Promise.reject(b))).finally(()=>{h.value===w&&(c.value=!1)});h.value=w}let p=on;Oe(t)&&(p=Yt(t,m)),m(),s&&(d=xg(h.value,s,r.ssrKey)),Ar()&&Uu(()=>h.value),f&&cl(g);function g(y=r.reset){p(),d(),n(y)}return Object.defineProperties(i,{error:{get:()=>u},data:{get:()=>i},pending:{get:()=>c},promise:{get:()=>h},stop:{get:()=>g}})}const m5={set:(t,e,n)=>jO(t,e,n),add:(t,e,n)=>t.splice(e,0,n),remove:(t,e)=>t.splice(e,1)};function sj(t,e){return jA(t,{target:Me([]),...e})}function ij(t,e){return jA(t,e)}function oj(t){return N$(fs(t))}function g5(t){return(e,n)=>{const r=ZO(e,n).run(()=>Me(t));ex.set(e,r),nx(r,e)}}function qA(t){return BO?zw(fs(t)):null}function aj(t){return o5(fs(t))}function _5(t){const e=yt(t),n=Me();n.value=Og(e,void 0,n.value,fs());const r=Xr(Promise.resolve(null));let s=on;function i(){const o=yt(t);return o?r.value=i5(o).then(a=>n.value=a).catch(()=>null):r.value=Promise.resolve(n.value=null),r.value}return i(),Oe(t)&&Yt(t,i),e&&(s=xg(r.value,e)),Eo()&&cl(s),Ar()&&Uu(()=>r.value),{url:n,refresh:i,promise:r}}function y5(t){const e=yt(t),n=Xr();e&&(n.value=Og(e,"m "+e.toString(),n.value,fs()));const r=Xr(Promise.resolve(null));let s=on;function i(){const a=yt(t);return a?r.value=r5(a).then(l=>n.value=l).catch(()=>null):r.value=Promise.resolve(n.value=null),r.value}function o(a){const l=yt(t);return l&&(r.value=s5(l,a).then(c=>n.value=c)),r.value}return i(),Oe(t)&&Yt(t,i),e&&(s=xg(r.value,e)),Eo()&&cl(s),Ar()&&Uu(()=>r.value),{metadata:n,update:o,refresh:i,promise:r}}function lj(t){const{url:e,refresh:n}=_5(t),{metadata:r,update:s,refresh:i}=y5(t),o=Xr(),a=Xr(),l=Xr(),c=Xe(()=>{const d=yt(a);return d?d.bytesTransferred/d.totalBytes:null});let u=on;function h(d,m){const p=yt(t),g=yt(o);if(g&&g.cancel(),l.value=null,a.value=null,o.value=null,e.value=null,r.value=null,u(),p){const y=n5(p,d,m);return o.value=y,a.value=y.snapshot,u=y.on("state_changed",w=>{a.value=w}),y.then(w=>{r.value=w.metadata,n()}).catch(w=>(l.value=w,Promise.reject(w))).finally(()=>{u(),o.value=null})}}function f(){return Promise.all([n(),i()])}return Oe(t)&&Yt(t,d=>{d||(o.value&&(u(),o.value.cancel()),o.value=null,a.value=null),f()}),Eo()&&cl(u),{url:e,metadata:r,snapshot:a,uploadTask:o,uploadError:l,uploadProgress:c,upload:h,updateMetadata:s,refresh:f}}function v5(t,{firebaseApp:e,modules:n=[]}){t.provide(Qw,e);for(const r of n)r(e,t)}const E5={apiKey:"AIzaSyD6YQExdnVdPnnwUfLjP0pJveAHPODKGzI",authDomain:"mistrocitos-e7130.firebaseapp.com",projectId:"mistrocitos-e7130",storageBucket:"mistrocitos-e7130.appspot.com",messagingSenderId:"953894457854",appId:"1:953894457854:web:11dda60cda75ba477eb0af"},w5=hw(E5),T5="modulepreload",b5=function(t){return"/"+t},Xv={},at=function(e,n,r){if(!n||n.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=b5(i),i in Xv)return;Xv[i]=!0;const o=i.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!r)for(let u=s.length-1;u>=0;u--){const h=s[u];if(h.href===i&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${a}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":T5,o||(c.as="script",c.crossOrigin=""),c.href=i,document.head.appendChild(c),o)return new Promise((u,h)=>{c.addEventListener("load",u),c.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})},HA=["__key","__init","__shim","__original","__index","__prevKey"];function $o(){return Math.random().toString(36).substring(2,15)}function I5(t,e){const n=t instanceof Set?t:new Set(t);return e&&e.forEach(r=>n.add(r)),[...n]}function oe(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Ht(t,e,n=!0,r=["__key"]){if(t===e)return!0;if(typeof e=="object"&&typeof t=="object"){if(t instanceof Map||t instanceof Set)return!1;if(t instanceof Date&&e instanceof Date)return t.getTime()===e.getTime();if(t instanceof RegExp&&e instanceof RegExp)return A5(t,e);if(t===null||e===null||Object.keys(t).length!==Object.keys(e).length)return!1;for(const s of r)if((s in t||s in e)&&t[s]!==e[s])return!1;for(const s in t)if(!(s in e)||t[s]!==e[s]&&!n||n&&!Ht(t[s],e[s],n,r))return!1;return!0}return!1}function A5(t,e){return t.source===e.source&&t.flags.split("").sort().join("")===e.flags.split("").sort().join("")}function En(t){const e=typeof t;if(e==="number")return!1;if(t===void 0)return!0;if(e==="string")return t==="";if(e==="object"){if(t===null)return!0;for(const n in t)return!1;return!(t instanceof RegExp||t instanceof Date)}return!1}function R5(t){return t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function C5(t){const e=`^${R5(t)}$`,n={MM:"(0[1-9]|1[012])",M:"([1-9]|1[012])",DD:"([012][0-9]|3[01])",D:"([012]?[0-9]|3[01])",YYYY:"\\d{4}",YY:"\\d{2}"},r=Object.keys(n);return new RegExp(r.reduce((s,i)=>s.replace(i,n[i]),e))}function tp(t){return Object.prototype.toString.call(t)==="[object Object]"}function Ra(t){return tp(t)||Array.isArray(t)}function lo(t){if(tp(t)===!1||t.__FKNode__||t.__POJO__===!1)return!1;const e=t.constructor;if(e===void 0)return!0;const n=e.prototype;return!(tp(n)===!1||n.hasOwnProperty("isPrototypeOf")===!1)}function Js(t,e,n=!1,r=!1){if(e===null)return null;const s={};if(typeof e=="string")return e;for(const i in t)if(oe(e,i)&&(e[i]!==void 0||!r)){if(n&&Array.isArray(t[i])&&Array.isArray(e[i])){s[i]=t[i].concat(e[i]);continue}if(e[i]===void 0)continue;lo(t[i])&&lo(e[i])?s[i]=Js(t[i],e[i],n,r):s[i]=e[i]}else s[i]=t[i];for(const i in e)!oe(s,i)&&e[i]!==void 0&&(s[i]=e[i]);return s}function S5(t){if(t[0]!=='"'&&t[0]!=="'"||t[0]!==t[t.length-1])return!1;const e=t[0];for(let n=1;n<t.length;n++)if(t[n]===e&&(n===1||t[n-1]!=="\\")&&n!==t.length-1)return!1;return!0}function P5(t){if(!t.length)return"";let e="",n="";for(let r=0;r<t.length;r++){const s=t.charAt(r);(s!=="\\"||n==="\\")&&(e+=s),n=s}return e}function Ei(...t){return t.reduce((e,n)=>{const{value:r,name:s,modelValue:i,config:o,plugins:a,...l}=n;return Object.assign(e,l)},{})}function k5(t){const e=[];let n="",r=0,s="",i="";for(let o=0;o<t.length;o++){const a=t.charAt(o);a===s&&i!=="\\"?s="":(a==="'"||a==='"')&&!s&&i!=="\\"?s=a:a==="("&&!s?r++:a===")"&&!s&&r--,a===","&&!s&&r===0?(e.push(n),n=""):(a!==" "||s)&&(n+=a),i=a}return n&&e.push(n),e}function Jv(t,e){const n={},r=e.filter(i=>i instanceof RegExp),s=new Set(e);for(const i in t)!s.has(i)&&!r.some(o=>o.test(i))&&(n[i]=t[i]);return n}function Zv(t,e){const n={},r=e.filter(s=>s instanceof RegExp);return e.forEach(s=>{s instanceof RegExp||(n[s]=t[s])}),Object.keys(t).forEach(s=>{r.some(i=>i.test(s))&&(n[s]=t[s])}),n}function Hi(t){return t.replace(/-([a-z0-9])/gi,(e,n)=>n.toUpperCase())}function WA(t){return t.replace(/([a-z0-9])([A-Z])/g,(e,n,r)=>n+"-"+r.toLowerCase()).replace(" ","-").toLowerCase()}function np(t,e=HA){if(t!==null&&typeof t=="object"){let n;if(Array.isArray(t)?n=[...t]:lo(t)&&(n={...t}),n)return O5(t,n,e),n}return t}function co(t,e=HA){if(t===null||t instanceof RegExp||t instanceof Date||t instanceof Map||t instanceof Set||typeof File=="function"&&t instanceof File)return t;let n;Array.isArray(t)?n=t.map(r=>typeof r=="object"?co(r,e):r):n=Object.keys(t).reduce((r,s)=>(r[s]=typeof t[s]=="object"?co(t[s],e):t[s],r),{});for(const r of e)r in t&&Object.defineProperty(n,r,{enumerable:!1,value:t[r]});return n}function Pn(t){return typeof t=="object"?co(t):t}function N5(t,e){if(!t||typeof t!="object")return null;const n=e.split(".");let r=t;for(const s in n){const i=n[s];if(oe(r,i)&&(r=r[i]),+s===n.length-1)return r;if(!r||typeof r!="object")return null}return null}function kn(t){return t!==void 0&&t!=="false"&&t!==!1?!0:void 0}function uo(t){return Object.isFrozen(t)?t:Object.defineProperty(t,"__init",{enumerable:!1,value:!0})}function Mg(t){return t.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[^a-z0-9]/g," ").trim().replace(/\s+/g,"-")}function O5(t,e,n){for(const r of n)r in t&&Object.defineProperty(e,r,{enumerable:!1,value:t[r]});return e}function x5(t){let e=!1;return(...n)=>{if(!e)return e=!0,queueMicrotask(()=>e=!1),t(...n)}}function Lg(){const t=[];let e=0;const n=s=>t.push(s),r=s=>{const i=t[e];return typeof i=="function"?i(s,o=>(e++,r(o))):(e=0,s)};return n.dispatch=r,n.unshift=s=>t.unshift(s),n.remove=s=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)},n}function zA(){const t=new Map,e=new Map;let n;const r=(s,i)=>{if(n){n.set(i.name,[s,i]);return}t.has(i.name)&&t.get(i.name).forEach(o=>{(i.origin===s||o.modifiers.includes("deep"))&&o.listener(i)}),i.bubble&&s.bubble(i)};return r.flush=()=>{t.clear(),e.clear(),n==null||n.clear()},r.on=(s,i)=>{const[o,...a]=s.split("."),l=i.receipt||$o(),c={modifiers:a,event:o,listener:i,receipt:l};return t.has(o)?t.get(o).push(c):t.set(o,[c]),e.has(l)?e.get(l).push(o):e.set(l,[o]),l},r.off=s=>{var i;e.has(s)&&((i=e.get(s))===null||i===void 0||i.forEach(o=>{const a=t.get(o);Array.isArray(a)&&t.set(o,a.filter(l=>l.receipt!==s))}),e.delete(s))},r.pause=s=>{n||(n=new Map),s&&s.walk(i=>i._e.pause())},r.play=s=>{if(!n)return;const i=n;n=void 0,i.forEach(([o,a])=>r(o,a)),s&&s.walk(o=>o._e.play())},r}function D5(t,e,n,r,s=!0,i){return e._e(t,{payload:r,name:n,bubble:s,origin:t,meta:i}),t}function M5(t,e,n){return Ll(t.parent)&&t.parent._e(t.parent,n),t}function L5(t,e,n,r){return e._e.on(n,r)}function V5(t,e,n){return e._e.off(n),t}const Vg=Lg();Vg((t,e)=>(t.message||(t.message=`E${t.code}`),e(t)));const $g=Lg();$g((t,e)=>{t.message||(t.message=`W${t.code}`);const n=e(t);return console&&typeof console.warn=="function"&&console.warn(n.message),n});function ci(t,e={}){$g.dispatch({code:t,data:e})}function fn(t,e={}){throw Error(Vg.dispatch({code:t,data:e}).message)}function Fn(t,e){const n={blocking:!1,key:$o(),meta:{},type:"state",visible:!0,...t};return e&&n.value&&n.meta.localize!==!1&&(n.value=e.t(n),n.meta.locale=e.config.locale),n}const e0={apply:q5,set:F5,remove:KA,filter:B5,reduce:j5,release:z5,touch:U5};function $5(t=!1){const e={};let n,r=t,s=[];const i=new Map;let o;const a=new Proxy(e,{get(...l){const[c,u]=l;return u==="buffer"?r:u==="_b"?s:u==="_m"?i:u==="_r"?o:oe(e0,u)?e0[u].bind(null,e,a,n):Reflect.get(...l)},set(l,c,u){return c==="_n"?(n=u,o==="__n"&&GA(n,a),!0):c==="_b"?(s=u,!0):c==="buffer"?(r=u,!0):c==="_r"?(o=u,!0):(fn(101,n),!1)}});return a}function F5(t,e,n,r){if(e.buffer)return e._b.push([[r]]),e;if(t[r.key]!==r){if(typeof r.value=="string"&&r.meta.localize!==!1){const i=r.value;r.value=n.t(r),r.value!==i&&(r.meta.locale=n.props.locale)}const s=`message-${oe(t,r.key)?"updated":"added"}`;t[r.key]=Object.freeze(n.hook.message.dispatch(r)),n.emit(s,r)}return e}function U5(t,e){for(const n in t){const r={...t[n]};e.set(r)}}function KA(t,e,n,r){if(oe(t,r)){const s=t[r];delete t[r],n.emit("message-removed",s)}return e.buffer===!0&&(e._b=e._b.filter(s=>(s[0]=s[0].filter(i=>i.key!==r),s[1]||s[0].length))),e}function B5(t,e,n,r,s){for(const i in t){const o=t[i];(!s||o.type===s)&&!r(o)&&KA(t,e,n,i)}}function j5(t,e,n,r,s){for(const i in t){const o=t[i];s=r(s,o)}return s}function q5(t,e,n,r,s){if(Array.isArray(r)){if(e.buffer){e._b.push([r,s]);return}const i=new Set(r.map(o=>(e.set(o),o.key)));typeof s=="string"?e.filter(o=>o.type!==s||i.has(o.key)):typeof s=="function"&&e.filter(o=>!s(o)||i.has(o.key))}else for(const i in r){const o=n.at(i);o?o.store.apply(r[i],s):W5(n,e,i,r[i],s)}}function H5(t,...e){const n=`${t.name}-set`,r=s=>Fn({key:Mg(s),type:"error",value:s,meta:{source:n,autoClear:!0}});return e.filter(s=>!!s).map(s=>{if(typeof s=="string"&&(s=[s]),Array.isArray(s))return s.map(i=>r(i));{const i={};for(const o in s)Array.isArray(s[o])?i[o]=s[o].map(a=>r(a)):i[o]=[r(s[o])];return i}})}function W5(t,e,n,r,s){var i;const o=e._m;o.has(n)||o.set(n,[]),e._r||(e._r=GA(t,e)),(i=o.get(n))===null||i===void 0||i.push([r,s])}function GA(t,e){return t.on("child.deep",({payload:n})=>{e._m.forEach((r,s)=>{t.at(s)===n&&(r.forEach(([i,o])=>{n.store.apply(i,o)}),e._m.delete(s))}),e._m.size===0&&e._r&&(t.off(e._r),e._r=void 0)})}function z5(t,e){e.buffer=!1,e._b.forEach(([n,r])=>e.apply(n,r)),e._b=[]}function K5(){const t={};let e;return{count:(...n)=>G5(e,t,...n),init(n){e=n,n.on("message-added.deep",t0(t,1)),n.on("message-removed.deep",t0(t,-1))},merge:n=>n0(e,t,n),settled(n){return oe(t,n)?t[n].promise:Promise.resolve()},unmerge:n=>n0(e,t,n,!0),value(n){return oe(t,n)?t[n].count:0}}}function G5(t,e,n,r,s=0){if(r=Q5(r||n),!oe(e,n)){const i={condition:r,count:0,name:n,node:t,promise:Promise.resolve(),resolve:()=>{}};e[n]=i,s=t.store.reduce((o,a)=>o+i.condition(a)*1,s),t.each(o=>{o.ledger.count(i.name,i.condition),s+=o.ledger.value(i.name)})}return QA(e[n],s).promise}function Q5(t){return typeof t=="function"?t:e=>e.type===t}function QA(t,e){const n=t.count,r=t.count+e;return t.count=r,n===0&&r!==0?(t.node.emit(`unsettled:${t.name}`,t.count,!1),t.promise=new Promise(s=>t.resolve=s)):n!==0&&r===0&&(t.node.emit(`settled:${t.name}`,t.count,!1),t.resolve()),t.node.emit(`count:${t.name}`,t.count,!1),t}function t0(t,e){return n=>{for(const r in t){const s=t[r];s.condition(n.payload)&&QA(s,e)}}}function n0(t,e,n,r=!1){const s=t;for(const i in e){const o=e[i].condition;r||n.ledger.count(i,o);const a=n.ledger.value(i)*(r?-1:1);if(t){do t.ledger.count(i,o,a),t=t.parent;while(t);t=s}}}const Fg=new Map,Ic=new Map,Ug=zA(),Y5=[];function X5(t){t.props.id&&(Fg.set(t.props.id,t),Ic.set(t,t.props.id),Ug(t,{payload:t,name:t.props.id,bubble:!1,origin:t}))}function J5(t){if(Ic.has(t)){const e=Ic.get(t);Ic.delete(t),Fg.delete(e),Ug(t,{payload:null,name:e,bubble:!1,origin:t})}}function Ml(t){return Fg.get(t)}function Z5(t,e){Y5.push(Ug.on(t,e))}function rp(t,e,n){let r=!0;return e in t.config._t?r=!1:t.emit(`config:${e}`,n,!1),e in t.props||(t.emit("prop",{prop:e,value:n}),t.emit(`prop:${e}`,n)),r}function eU(t={}){const e=new Set,n={...t,_add:s=>e.add(s),_rm:s=>e.delete(s)};return new Proxy(n,{set(s,i,o,a){return typeof i=="string"&&e.forEach(l=>rp(l,i,o)),Reflect.set(s,i,o,a)}})}function YA(t){const e=document.getElementById(t);if(e instanceof HTMLFormElement){const n=new Event("submit",{cancelable:!0,bubbles:!0});e.dispatchEvent(n);return}ci(151,t)}function tU(t){const e=n=>{for(const r in n.store){const s=n.store[r];s.type==="error"||s.type==="ui"&&r==="incomplete"?n.store.remove(r):s.type==="state"&&n.store.set({...s,value:!1})}};e(t),t.walk(e)}function XA(t,e){const n=typeof t=="string"?Ml(t):t;if(n){const r=o=>Pn(o.props.initial)||(o.type==="group"?{}:o.type==="list"?[]:void 0);n._e.pause(n);const s=Pn(e);return e&&!En(e)&&(n.props.initial=Ra(s)?uo(s):s,n.props._init=n.props.initial),n.input(r(n),!1),n.walk(o=>{o.type==="list"&&o.sync||o.input(r(o),!1)}),n.input(En(s)&&s?s:r(n),!1),n.type!=="input"&&e&&!En(e)&&Ra(e)&&n.walk(o=>{o.props.initial=Ra(o.value)?uo(o.value):o.value,o.props._init=n.props.initial}),n._e.play(n),tU(n),n.emit("reset",n),n}ci(152,t)}const nU={delimiter:".",delay:0,locale:"en",rootClasses:t=>({[`formkit-${WA(t)}`]:!0})},JA=Symbol("index"),sp=Symbol("removed"),ip=Symbol("moved"),ZA=Symbol("inserted");function rU(t){return t.type==="list"&&Array.isArray(t._value)}function Ll(t){return t&&typeof t=="object"&&t.__FKNode__===!0}const Ac=(t,e,n)=>{fn(102,[t,n])},sU={_c:Ae(AU,Ac,!1),add:Ae(_U),addProps:Ae(gU),address:Ae(CU,Ac,!1),at:Ae(SU),bubble:Ae(M5),clearErrors:Ae(LU),calm:Ae(dU),config:Ae(!1),define:Ae(mU),disturb:Ae(fU),destroy:Ae(pU),extend:Ae($U),hydrate:Ae(uU),index:Ae(IU,bU,!1),input:Ae(nR),each:Ae(EU),emit:Ae(D5),find:Ae(kU),on:Ae(L5),off:Ae(V5),parent:Ae(!1,yU),plugins:Ae(!1),remove:Ae(vU),root:Ae(OU,Ac,!1),reset:Ae(MU),resetConfig:Ae(TU),setErrors:Ae(iR),submit:Ae(DU),t:Ae(xU),use:Ae(Bg),name:Ae(RU,!1,!1),walk:Ae(wU)};function iU(){return new Map(Object.entries(sU))}function Ae(t,e,n=!0){return{get:t?(r,s)=>n?(...i)=>t(r,s,...i):t(r,s):!1,set:e!==void 0?e:Ac.bind(null)}}function oU(){const t=new Map;return new Proxy(t,{get(e,n){return t.has(n)||t.set(n,Lg()),t.get(n)}})}let eR=0,aU=0;function lU(t){var e,n;return((e=t.parent)===null||e===void 0?void 0:e.type)==="list"?JA:t.name||`${((n=t.props)===null||n===void 0?void 0:n.type)||"input"}_${++eR}`}function tR(t){return t.type==="group"?uo(t.value&&typeof t.value=="object"&&!Array.isArray(t.value)?t.value:{}):t.type==="list"?uo(Array.isArray(t.value)?t.value:[]):t.value}function nR(t,e,n,r=!0){return e._value=cU(t,t.hook.input.dispatch(n)),t.emit("input",e._value),t.isCreated&&t.type==="input"&&Ht(e._value,e.value)?(t.emit("commitRaw",e.value),e.settled):(e.isSettled&&t.disturb(),r?(e._tmo&&clearTimeout(e._tmo),e._tmo=setTimeout(_u,t.props.delay,t,e)):_u(t,e),e.settled)}function cU(t,e){switch(t.type){case"input":break;case"group":(!e||typeof e!="object")&&fn(107,[t,e]);break;case"list":Array.isArray(e)||fn(108,[t,e]);break}return e}function _u(t,e,n=!0,r=!0){e._value=e.value=t.hook.commit.dispatch(e._value),t.type!=="input"&&r&&t.hydrate(),t.emit("commitRaw",e.value),t.emit("commit",e.value),n&&t.calm()}function rR(t,{name:e,value:n,from:r}){if(!Object.isFrozen(t._value)){if(rU(t)){const s=n===sp?[]:n===ip&&typeof r=="number"?t._value.splice(r,1):[n];t._value.splice(e,n===ip||r===ZA?0:1,...s);return}n!==sp?t._value[e]=n:delete t._value[e]}}function uU(t,e){const n=e._value;return t.type==="list"&&t.sync&&hU(t,e),e.children.forEach(r=>{if(typeof n=="object")if(r.name in n){const s=r.type!=="input"||n[r.name]&&typeof n[r.name]=="object"?uo(n[r.name]):n[r.name];if(!r.isSettled||!Ra(s)&&Ht(s,r._value))return;r.input(s,!1)}else(t.type!=="list"||typeof r.name=="number")&&rR(e,{name:r.name,value:r.value}),n.__init||(r.type==="group"?r.input({},!1):r.type==="list"?r.input([],!1):r.input(void 0,!1))}),t}function hU(t,e){const n=t._value;if(!Array.isArray(n))return;const r=[],s=new Set(e.children),i=new Map;n.forEach((a,l)=>{if(e.children[l]&&e.children[l]._value===a)r.push(e.children[l]),s.delete(e.children[l]);else{r.push(null);const c=i.get(a)||[];c.push(l),i.set(a,c)}}),s.size&&i.size&&s.forEach(a=>{if(i.has(a._value)){const l=i.get(a._value),c=l.shift();r[c]=a,s.delete(a),l.length||i.delete(a._value)}});const o=[];for(i.forEach(a=>{o.push(...a)});s.size&&o.length;){const a=s.values().next().value,l=o.shift();if(l===void 0)break;r[l]=a,s.delete(a)}o.forEach((a,l)=>{r[a]=jU({value:l})}),s.size&&s.forEach(a=>{if(!("__FKP"in a)){const l=a._c.parent;if(!l||qU(l))return;l.ledger.unmerge(a),a._c.parent=null,a.destroy()}}),e.children=r}function fU(t,e){var n;return e._d<=0&&(e.isSettled=!1,t.emit("settled",!1,!1),e.settled=new Promise(r=>{e._resolve=r}),t.parent&&((n=t.parent)===null||n===void 0||n.disturb())),e._d++,t}function dU(t,e,n){var r;if(n!==void 0&&t.type!=="input")return rR(e,n),_u(t,e,!0,!1);e._d>0&&e._d--,e._d===0&&(e.isSettled=!0,t.emit("settled",!0,!1),t.parent&&((r=t.parent)===null||r===void 0||r.calm({name:t.name,value:e.value})),e._resolve&&e._resolve(e.value))}function pU(t,e){t.emit("destroying",t),t.store.filter(()=>!1),t.parent&&(t.parent.emit("childRemoved",t),t.parent.remove(t)),J5(t),t.emit("destroyed",t),e._e.flush(),e._value=e.value=void 0;for(const n in e.context)delete e.context[n];e.plugins.clear(),e.context=null}function mU(t,e,n){e.type=n.type,e.props.definition=co(n),e.value=e._value=tR({type:t.type,value:e.value}),n.forceTypeProp&&(t.props.type&&(t.props.originalType=t.props.type),e.props.type=n.forceTypeProp),n.family&&(e.props.family=n.family),n.features&&n.features.forEach(r=>r(t)),n.props&&t.addProps(n.props),t.emit("defined",n)}function gU(t,e,n){var r;if(t.props.attrs){const s={...t.props.attrs};t.props._emit=!1;for(const o in s){const a=Hi(o);n.includes(a)&&(t.props[a]=s[o],delete s[o])}const i=Pn(e._value);t.props.initial=t.type!=="input"?uo(i):i,t.props._emit=!0,t.props.attrs=s,t.props.definition&&(t.props.definition.props=[...((r=t.props.definition)===null||r===void 0?void 0:r.props)||[],...n])}return t.emit("added-props",n),t}function _U(t,e,n,r){if(t.type==="input"&&fn(100,t),n.parent&&n.parent!==t&&n.parent.remove(n),!e.children.includes(n)){if(r!==void 0&&t.type==="list"){const s=e.children[r];s&&"__FKP"in s?(n._c.uid=s.uid,e.children.splice(r,1,n)):e.children.splice(r,0,n),Array.isArray(t.value)&&t.value.length<e.children.length&&t.disturb().calm({name:r,value:n.value,from:ZA})}else e.children.push(n);n.isSettled||t.disturb()}if(n.parent!==t){if(n.parent=t,n.parent!==t)return t.remove(n),n.parent.add(n),t}else n.use(t.plugins);return _u(t,e,!1),t.ledger.merge(n),t.emit("child",n),t}function yU(t,e,n,r){return Ll(r)?(t.parent&&t.parent!==r&&t.parent.remove(t),e.parent=r,t.resetConfig(),r.children.includes(t)?t.use(r.plugins):r.add(t),!0):r===null?(e.parent=null,!0):!1}function vU(t,e,n){const r=e.children.indexOf(n);if(r!==-1){n.isSettled&&t.disturb(),e.children.splice(r,1);let s=kn(n.props.preserve),i=n.parent;for(;s===void 0&&i;)s=kn(i.props.preserve),i=i.parent;s?t.calm():t.calm({name:t.type==="list"?r:n.name,value:sp}),n.parent=null,n.config._rmn=n}return t.ledger.unmerge(n),t}function EU(t,e,n){e.children.forEach(r=>!("__FKP"in r)&&n(r))}function wU(t,e,n,r=!1,s=!1){e.children.some(i=>{if("__FKP"in i)return!1;const o=n(i);return r&&o===!1?!0:s&&o===!1?!1:i.walk(n,r,s)})}function TU(t,e){const n=t.parent||void 0;e.config=sR(t.config._t,n),t.walk(r=>r.resetConfig())}function Bg(t,e,n,r=!0,s=!0){return Array.isArray(n)||n instanceof Set?(n.forEach(i=>Bg(t,e,i)),t):(e.plugins.has(n)||(s&&typeof n.library=="function"&&n.library(t),r&&n(t)!==!1&&(e.plugins.add(n),t.children.forEach(i=>i.use(n)))),t)}function bU(t,e,n,r){if(Ll(t.parent)){const s=t.parent.children,i=r>=s.length?s.length-1:r<0?0:r,o=s.indexOf(t);return o===-1?!1:(s.splice(o,1),s.splice(i,0,t),t.parent.children=s,t.parent.type==="list"&&t.parent.disturb().calm({name:i,value:ip,from:o}),!0)}return!1}function IU(t){if(t.parent){const e=[...t.parent.children].indexOf(t);return e===-1?t.parent.children.length:e}return-1}function AU(t,e){return e}function RU(t,e){var n;return((n=t.parent)===null||n===void 0?void 0:n.type)==="list"?t.index:e.name!==JA?e.name:t.index}function CU(t,e){return e.parent?e.parent.address.concat([t.name]):[t.name]}function SU(t,e,n){const r=typeof n=="string"?n.split(t.config.delimiter):n;if(!r.length)return;const s=r[0];let i=t.parent;for(i||(String(r[0])===String(t.name)&&r.shift(),i=t),s==="$parent"&&r.shift();i&&r.length;){const o=r.shift();switch(o){case"$root":i=t.root;break;case"$parent":i=i.parent;break;case"$self":i=t;break;default:i=i.children.find(a=>!("__FKP"in a)&&String(a.name)===String(o))||PU(i,o)}}return i||void 0}function PU(t,e){const n=String(e).match(/^(find)\((.*)\)$/);if(n){const[,r,s]=n,i=s.split(",").map(o=>o.trim());switch(r){case"find":return t.find(i[0],i[1]);default:return}}}function kU(t,e,n,r){return NU(t,n,r)}function NU(t,e,n="name"){const r=typeof n=="string"?i=>i[n]==e:n,s=[t];for(;s.length;){const i=s.shift();if(!("__FKP"in i)){if(r(i,e))return i;s.push(...i.children)}}}function OU(t){let e=t;for(;e.parent;)e=e.parent;return e}function sR(t={},e){let n;return new Proxy(t,{get(...r){const s=r[1];if(s==="_t")return t;const i=Reflect.get(...r);if(i!==void 0)return i;if(e){const o=e.config[s];if(o!==void 0)return o}if(t.rootConfig&&typeof s=="string"){const o=t.rootConfig[s];if(o!==void 0)return o}return s==="delay"&&(n==null?void 0:n.type)==="input"?20:nU[s]},set(...r){const s=r[1],i=r[2];if(s==="_n")return n=i,t.rootConfig&&t.rootConfig._add(n),!0;if(s==="_rmn")return t.rootConfig&&t.rootConfig._rm(n),n=void 0,!0;if(!Ht(t[s],i,!1)){const o=Reflect.set(...r);return n&&(n.emit(`config:${s}`,i,!1),rp(n,s,i),n.walk(a=>rp(a,s,i),!1,!0)),o}return!0}})}function xU(t,e,n,r="ui"){const s=typeof n=="string"?{key:n,value:n,type:r}:n,i=t.hook.text.dispatch(s);return t.emit("text",i,!1),i.value}function DU(t){const e=t.name;do{if(t.props.isForm===!0)break;t.parent||fn(106,e),t=t.parent}while(t);t.props.id&&YA(t.props.id)}function MU(t,e,n){return XA(t,n)}function iR(t,e,n,r){const s=`${t.name}-set`,i=t.hook.setErrors.dispatch({localErrors:n,childErrors:r});return H5(t,i.localErrors,i.childErrors).forEach(o=>{t.store.apply(o,a=>a.meta.source===s)}),t}function LU(t,e,n=!0,r){return iR(t,e,[]),n&&(r=r||`${t.name}-set`,t.walk(s=>{s.store.filter(i=>!(i.type==="error"&&i.meta&&i.meta.source===r))})),t}function VU(t){const e={initial:typeof t=="object"?Pn(t):t};let n,r=!0;return new Proxy(e,{get(...s){const[i,o]=s;if(oe(e,o))return Reflect.get(...s);if(n&&typeof o=="string"&&n.config[o]!==void 0)return n.config[o]},set(s,i,o,a){if(i==="_n")return n=o,!0;if(i==="_emit")return r=o,!0;const{prop:l,value:c}=n.hook.prop.dispatch({prop:i,value:o});if(!Ht(e[l],c,!1)||typeof c=="object"){const u=Reflect.set(s,l,c,a);return r&&(n.emit("prop",{prop:l,value:c}),typeof l=="string"&&n.emit(`prop:${l}`,c)),u}return!0}})}function $U(t,e,n,r){return e.traps.set(n,r),t}function FU(t,e){if(t.props.definition)return t.define(t.props.definition);for(const n of e){if(t.props.definition)return;typeof n.library=="function"&&n.library(t)}}function UU(t){const e=tR(t),n=sR(t.config||{},t.parent);return{_d:0,_e:zA(),uid:Symbol(),_resolve:!1,_tmo:!1,_value:e,children:I5(t.children||[]),config:n,hook:oU(),isCreated:!1,isSettled:!0,ledger:K5(),name:lU(t),parent:t.parent||null,plugins:new Set,props:VU(e),settled:Promise.resolve(e),store:$5(!0),sync:t.sync||!1,traps:iU(),type:t.type||"input",value:e}}function BU(t,e){var n,r,s;const i=(n=e.props)===null||n===void 0?void 0:n.id;if(i||(r=e.props)===null||r===void 0||delete r.id,t.ledger.init(t.store._n=t.props._n=t.config._n=t),t.props._emit=!1,Object.assign(t.props,i?{}:{id:`input_${aU++}`},(s=e.props)!==null&&s!==void 0?s:{}),t.props._emit=!0,FU(t,new Set([...e.plugins||[],...t.parent?t.parent.plugins:[]])),e.plugins)for(const o of e.plugins)Bg(t,t._c,o,!0,!1);return t.each(o=>t.add(o)),t.parent&&t.parent.add(t,e.index),t.type==="input"&&t.children.length&&fn(100,t),nR(t,t._c,t._value,!1),t.store.release(),i&&X5(t),t.emit("created",t),t.isCreated=!0,t}function jU(t){var e,n,r,s;return{__FKP:!0,uid:Symbol(),name:(e=t==null?void 0:t.name)!==null&&e!==void 0?e:`p_${eR++}`,value:(n=t==null?void 0:t.value)!==null&&n!==void 0?n:null,_value:(r=t==null?void 0:t.value)!==null&&r!==void 0?r:null,type:(s=t==null?void 0:t.type)!==null&&s!==void 0?s:"input",use:()=>{},input(i){return this._value=i,this.value=i,Promise.resolve()},isSettled:!0}}function qU(t){return"__FKP"in t}function HU(t){const e=t||{},n=UU(e),r=new Proxy(n,{get(...s){const[,i]=s;if(i==="__FKNode__")return!0;const o=n.traps.get(i);return o&&o.get?o.get(r,n):Reflect.get(...s)},set(...s){const[,i,o]=s,a=n.traps.get(i);return a&&a.set?a.set(r,n,i,o):Reflect.set(...s)}});return BU(r,e)}function op(t){return typeof t!="string"&&oe(t,"$el")}function ap(t){return typeof t!="string"&&oe(t,"$cmp")}function Ii(t){return!t||typeof t=="string"?!1:oe(t,"if")&&oe(t,"then")}function WU(t){return typeof t!="string"&&"$formkit"in t}function zU(t){if(typeof t=="string")return{$el:"text",children:t};if(WU(t)){const{$formkit:e,for:n,if:r,children:s,bind:i,...o}=t;return Object.assign({$cmp:"FormKit",props:{...o,type:e}},r?{if:r}:{},n?{for:n}:{},s?{children:s}:{},i?{bind:i}:{})}return t}function In(t){let e;const n=new Set,r=function(g,y){return typeof g=="function"?g(y):g},s=[{"&&":(p,g,y)=>r(p,y)&&r(g,y),"||":(p,g,y)=>r(p,y)||r(g,y)},{"===":(p,g,y)=>r(p,y)===r(g,y),"!==":(p,g,y)=>r(p,y)!==r(g,y),"==":(p,g,y)=>r(p,y)==r(g,y),"!=":(p,g,y)=>r(p,y)!=r(g,y),">=":(p,g,y)=>r(p,y)>=r(g,y),"<=":(p,g,y)=>r(p,y)<=r(g,y),">":(p,g,y)=>r(p,y)>r(g,y),"<":(p,g,y)=>r(p,y)<r(g,y)},{"+":(p,g,y)=>r(p,y)+r(g,y),"-":(p,g,y)=>r(p,y)-r(g,y)},{"*":(p,g,y)=>r(p,y)*r(g,y),"/":(p,g,y)=>r(p,y)/r(g,y),"%":(p,g,y)=>r(p,y)%r(g,y)}],i=s.reduce((p,g)=>p.concat(Object.keys(g)),[]),o=new Set(i.map(p=>p.charAt(0)));function a(p,g,y,w){const b=p.filter(T=>T.startsWith(g));return b.length?b.find(T=>w.length>=y+T.length&&w.substring(y,y+T.length)===T?T:!1):!1}function l(p,g,y=1){let w=y?g.substring(p+1).trim():g.substring(0,p).trim();if(!w.length)return-1;if(!y){const T=w.split("").reverse(),k=T.findIndex(I=>o.has(I));w=T.slice(k).join("")}const b=w[0];return s.findIndex(T=>{const k=Object.keys(T);return!!a(k,b,0,w)})}function c(p,g){let y="";const w=g.length;let b=0;for(let T=p;T<w;T++){const k=g.charAt(T);if(k==="(")b++;else if(k===")")b--;else if(b===0&&k===" ")continue;if(b===0&&a(i,k,T,g))return[y,T-1];y+=k}return[y,g.length-1]}function u(p,g=0){const y=s[g],w=p.length,b=Object.keys(y);let T=0,k=!1,I=null,C="",E=null,R,M="",U="",V="",H="",ve=0;const Se=(K,ae)=>{K?V+=ae:C+=ae};for(let K=0;K<w;K++)if(M=U,U=p.charAt(K),(U==="'"||U==='"')&&M!=="\\"&&(T===0&&!k||T&&!H)){T?H=U:k=U,Se(T,U);continue}else if(k&&(U!==k||M==="\\")||H&&(U!==H||M==="\\")){Se(T,U);continue}else if(k===U){k=!1,Se(T,U);continue}else if(H===U){H=!1,Se(T,U);continue}else{if(U===" ")continue;if(U==="(")T===0?ve=K:V+=U,T++;else if(U===")")if(T--,T===0){const ae=typeof C=="string"&&C.startsWith("$")?C:void 0,de=ae&&p.charAt(K+1)===".";let ot="";de&&([ot,K]=c(K+2,p));const en=I?g:l(ve,p,0),Ct=l(K,p);en===-1&&Ct===-1?(C=h(V,-1,ae,ot),typeof C=="string"&&(C=V)):I&&(en>=Ct||Ct===-1)&&g===en?(E=I.bind(null,h(V,-1,ae,ot)),I=null,C=""):Ct>en&&g===Ct?C=h(V,-1,ae,ot):C+=`(${V})${de?`.${ot}`:""}`,V=""}else V+=U;else if(T===0&&(R=a(b,U,K,p))){K===0&&fn(103,[R,p]),K+=R.length-1,K===p.length-1&&fn(104,[R,p]),I?C&&(E=I.bind(null,h(C,g)),I=y[R].bind(null,E),C=""):E?(I=y[R].bind(null,h(E,g)),E=null):(I=y[R].bind(null,h(C,g)),C="");continue}else Se(T,U)}return C&&I&&(I=I.bind(null,h(C,g))),I=!I&&E?E:I,!I&&C&&(I=(K,ae)=>typeof K=="function"?K(ae):K,I=I.bind(null,h(C,g))),!I&&!C&&fn(105,p),I}function h(p,g,y,w){if(y){const b=h(y,s.length);let T,k=w?In(`$${w}`):!1;if(typeof b=="function"){const I=k5(String(p)).map(C=>h(C,-1));return C=>{const E=b(C);return typeof E!="function"?(ci(150,y),E):(T=E(...I.map(R=>typeof R=="function"?R(C):R)),k&&(k=k.provide(R=>{const M=e(R);return R.reduce((V,H)=>{if(H===w||(w==null?void 0:w.startsWith(`${H}(`))){const Se=N5(T,H);V[H]=()=>Se}else V[H]=M[H];return V},{})})),k?k():T)}}}else if(typeof p=="string"){if(p==="true")return!0;if(p==="false")return!1;if(p==="undefined")return;if(S5(p))return P5(p.substring(1,p.length-1));if(!isNaN(+p))return Number(p);if(g<s.length-1)return u(p,g+1);if(p.startsWith("$")){const b=p.substring(1);return n.add(b),function(k){return b in k?k[b]():void 0}}return p}return p}const f=u(t.startsWith("$:")?t.substring(2):t),d=Array.from(n);function m(p){return e=p,Object.assign(f.bind(null,p(d)),{provide:m})}return Object.assign(f,{provide:m})}function Rc(t,e,n){return n?typeof n=="string"?n.split(" ").reduce((s,i)=>Object.assign(s,{[i]:!0}),{}):typeof n=="function"?Rc(t,e,n(e,t)):n:{}}function KU(t,e,...n){const r=n.reduce((s,i)=>{if(!i)return Of(s);const{$reset:o,...a}=i;return Of(o?a:Object.assign(s,a))},{});return Object.keys(t.hook.classes.dispatch({property:e,classes:r}).classes).filter(s=>r[s]).join(" ")||null}function Of(t){const e="$remove:";let n=!1;const r=Object.keys(t).filter(s=>(t[s]&&s.startsWith(e)&&(n=!0),t[s]));return r.length>1&&n&&r.filter(i=>i.startsWith(e)).map(i=>{const o=i.substring(e.length);t[o]=!1,t[i]=!1}),t}function GU(t,e,n){const r=Ml(t);r?r.setErrors(e,n):ci(651,t)}function QU(t,e=!0){const n=Ml(t);n?n.clearErrors(e):ci(652,t)}const yu="1.2.2";function YU(...t){const e=t.reduce((r,s)=>Js(r,s),{}),n=()=>{};return n.library=function(r){const s=Hi(r.props.type);oe(e,s)&&r.define(e[s])},n}const XU=["classes","config","delay","errors","id","index","inputErrors","modelValue","onUpdate:modelValue","name","number","parent","plugins","sectionsSchema","type","validation","validationLabel","validationMessages","validationRules","onInput","onInputRaw","onUpdate:modelValue","onNode","onSubmit","onSubmitInvalid","onSubmitRaw"];function Bh(t){return t&&typeof t=="object"&&"group"in t&&Array.isArray(t)}function oR(t){let e=1;return Array.isArray(t)?t.map(n=>{if(typeof n=="string"||typeof n=="number")return{label:String(n),value:String(n)};if(typeof n=="object"){if("group"in n)return n.options=oR(n.options||[]),n;"value"in n&&typeof n.value!="string"&&Object.assign(n,{value:`__mask_${e++}`,__original:n.value})}return n}):Object.keys(t).map(n=>({label:t[n],value:n}))}function Zs(t,e){if(Array.isArray(t)){for(const n of t)if(!(typeof n!="object"&&n)){if(Bh(n)){const r=Zs(n.options,e);if(r!==void 0)return r}else if(e==n.value)return"__original"in n?n.__original:n.value}}return e}function ho(t,e){return t===null&&e===void 0||t===void 0&&e===null?!1:t==e?!0:lo(t)&&lo(e)?Ht(t,e):!1}function jg(t){t.hook.prop((e,n)=>(e.prop==="options"&&(typeof e.value=="function"?(t.props.optionsLoader=e.value,e.value=[]):e.value=oR(e.value)),n(e)))}function te(t,e,n=!1){return(...r)=>{const s=i=>{const o=!e||typeof e=="string"?{$el:e}:e();return(op(o)||ap(o))&&(o.meta||(o.meta={section:t}),r.length&&!o.children&&(o.children=[...r.map(a=>typeof a=="function"?a(i):a)]),op(o)&&(o.attrs={class:`$classes.${t}`,...o.attrs||{}})),{if:`$slots.${t}`,then:`$slots.${t}`,else:t in i?la(o,i[t]):o}};return s._s=t,n?JU(s):s}}function JU(t){return e=>[t(e)]}function vu(t){return typeof t=="object"&&("$el"in t||"$cmp"in t||"$formkit"in t)}function la(t,e={}){return typeof t=="string"?vu(e)||typeof e=="string"?e:t:Array.isArray(t)?vu(e)?e:t:Js(t,e)}const ZU=te("actions",()=>({$el:"div",if:"$actions"})),Eu=te("input",()=>({$el:"input",bind:"$attrs",attrs:{type:"$type",name:"$node.props.altName || $node.name",disabled:"$option.attrs.disabled || $disabled",onInput:"$handlers.toggleChecked",checked:"$fns.eq($_value, $onValue)",onBlur:"$handlers.blur",value:"$: true",id:"$id","aria-describedby":{if:"$options.length",then:{if:"$option.help",then:'$: "help-" + $option.attrs.id',else:void 0},else:{if:"$help",then:'$: "help-" + $id',else:void 0}}}})),aR=te("optionHelp",()=>({$el:"div",if:"$option.help",attrs:{id:'$: "help-" + $option.attrs.id'}})),r0=te("inner","span"),wu=te("label","span"),lR=te("option",()=>({$el:"li",for:["option","$options"],attrs:{"data-disabled":"$option.attrs.disabled || $disabled"}})),cR=te("options","ul"),Tu=te("wrapper",()=>({$el:"label",attrs:{"data-disabled":{if:"$options.length",then:void 0,else:"$disabled || undefined"},"data-checked":{if:"$options == undefined",then:"$fns.eq($_value, $onValue) || undefined",else:"$fns.isChecked($option.value) || undefined"}}})),e4=te("input",()=>({$el:"button",bind:"$attrs",attrs:{type:"$type",disabled:"$disabled",name:"$node.name",id:"$id"}})),t4=te("default",null),bu=te("decorator",()=>({$el:"span",attrs:{"aria-hidden":"true"}})),uR=te("fieldset",()=>({$el:"fieldset",attrs:{id:"$id","aria-describedby":{if:"$help",then:'$: "help-" + $id',else:void 0}}})),n4=te("input",()=>({$el:"input",bind:"$attrs",attrs:{type:"file",disabled:"$disabled",name:"$node.name",onChange:"$handlers.files",onBlur:"$handlers.blur",id:"$id","aria-describedby":"$describedBy"}})),r4=te("fileItem",()=>({$el:"li",for:["file","$value"]})),s4=te("fileList",()=>({$el:"ul",if:"$value.length",attrs:{"data-has-multiple":{if:"$value.length > 1",then:"true"}}})),i4=te("fileName",()=>({$el:"span",attrs:{class:"$classes.fileName"}})),s0=te("fileRemove",()=>({$el:"button",attrs:{type:"button",onClick:"$handlers.resetFiles"}})),o4=te("form",()=>({$el:"form",bind:"$attrs",attrs:{id:"$id",name:"$node.name",onSubmit:"$handlers.submit","data-loading":"$state.loading || undefined"}})),qg=te("wrapper",null,!0),kr=te("help",()=>({$el:"div",if:"$help",attrs:{id:'$: "help-" + $id'}})),dt=(t,e)=>te(`${t}Icon`,()=>{const n=`_raw${t.charAt(0).toUpperCase()}${t.slice(1)}Icon`;return{if:`$${t}Icon && $${n}`,$el:`${e||"span"}`,attrs:{class:`$classes.${t}Icon + " " + $classes.icon`,innerHTML:`$${n}`,onClick:`$handlers.iconClick(${t})`,for:{if:`${e==="label"}`,then:"$id"}}}})(),fo=te("inner","div"),jh=te("label",()=>({$el:"label",if:"$label",attrs:{for:"$id"}})),hR=te("legend",()=>({$el:"legend",if:"$label"})),_s=te("message",()=>({$el:"li",for:["message","$messages"],attrs:{key:"$message.key",id:"$id + '-' + $message.key","data-message-type":"$message.type"}})),ys=te("messages",()=>({$el:"ul",if:"$defaultMessagePlacement && $fns.length($messages)"})),a4=te("noFiles",()=>({$el:"span",if:"$value.length == 0"})),l4=te("optGroup",()=>({$el:"optgroup",bind:"$option.attrs",attrs:{label:"$option.group"}})),i0=te("option",()=>({$el:"option",bind:"$option.attrs",attrs:{class:"$classes.option",value:"$option.value",selected:"$fns.isSelected($option)"}})),o0=te("options",()=>({$el:null,if:"$options.length",for:["option","$option.options || $options"]})),ui=te("outer",()=>({$el:"div",attrs:{key:"$id","data-family":"$family || undefined","data-type":"$type","data-multiple":'$attrs.multiple || ($type != "select" && $options != undefined) || undefined',"data-disabled":'$: ($disabled !== "false" && $disabled) || undefined',"data-empty":"$state.empty || undefined","data-complete":"$state.complete || undefined","data-invalid":"$state.valid === false && $state.validationVisible || undefined","data-errors":"$state.errors || undefined","data-submitted":"$state.submitted || undefined","data-prefix-icon":"$_rawPrefixIcon !== undefined || undefined","data-suffix-icon":"$_rawSuffixIcon !== undefined || undefined","data-prefix-icon-click":"$onPrefixIconClick !== undefined || undefined","data-suffix-icon-click":"$onSuffixIconClick !== undefined || undefined"}})),Nr=te("prefix",null),c4=te("input",()=>({$el:"select",bind:"$attrs",attrs:{id:"$id","data-placeholder":"$fns.showPlaceholder($_value, $placeholder)",disabled:"$disabled",class:"$classes.input",name:"$node.name",onChange:"$handlers.onChange",onInput:"$handlers.selectInput",onBlur:"$handlers.blur","aria-describedby":"$describedBy"}})),u4=te("submit",()=>({$cmp:"FormKit",bind:"$submitAttrs",props:{type:"submit",disabled:"$disabled",label:"$submitLabel"}})),Or=te("suffix",null),fR=te("input",()=>({$el:"input",bind:"$attrs",attrs:{type:"$type",disabled:"$disabled",name:"$node.name",onInput:"$handlers.DOMInput",onBlur:"$handlers.blur",value:"$_value",id:"$id","aria-describedby":"$describedBy"}})),h4=te("input",()=>({$el:"textarea",bind:"$attrs",attrs:{disabled:"$disabled",name:"$node.name",onInput:"$handlers.DOMInput",onBlur:"$handlers.blur",value:"$_value",id:"$id","aria-describedby":"$describedBy"},children:"$initialValue"})),Fo=te("wrapper","div");function dR(t){return function(e,n){return e.prop==="options"&&Array.isArray(e.value)&&(e.value=e.value.map(r=>{var s;return!((s=r.attrs)===null||s===void 0)&&s.id?r:Js(r,{attrs:{id:`${t.props.id}-option-${Mg(String(r.value))}`}})}),t.props.type==="checkbox"&&!Array.isArray(t.value)&&(t.isCreated?t.input([],!1):t.on("created",()=>{Array.isArray(t.value)||t.input([],!1)}))),n(e)}}function f4(t,e){const n=e.target;if(n instanceof HTMLInputElement){const r=Array.isArray(t.props.options)?Zs(t.props.options,n.value):n.value;Array.isArray(t.props.options)&&t.props.options.length?Array.isArray(t._value)?t._value.some(s=>ho(r,s))?t.input(t._value.filter(s=>!ho(r,s))):t.input([...t._value,r]):t.input([r]):n.checked?t.input(t.props.onValue):t.input(t.props.offValue)}}function d4(t,e){var n,r;return(n=t.context)===null||n===void 0||n.value,(r=t.context)===null||r===void 0||r._value,Array.isArray(t._value)?t._value.some(s=>ho(Zs(t.props.options,e),s)):!1}function p4(t){t.on("created",()=>{var e,n;!((e=t.context)===null||e===void 0)&&e.handlers&&(t.context.handlers.toggleChecked=f4.bind(null,t)),!((n=t.context)===null||n===void 0)&&n.fns&&(t.context.fns.isChecked=d4.bind(null,t)),oe(t.props,"onValue")||(t.props.onValue=!0),oe(t.props,"offValue")||(t.props.offValue=!1)}),t.hook.prop(dR(t))}function Fs(t,e){return n=>{n.props[`${t}Icon`]===void 0&&(n.props[`${t}Icon`]=e.startsWith("<svg")?e:`default:${e}`)}}function Vl(t){t.on("created",()=>{"disabled"in t.props&&(t.props.disabled=kn(t.props.disabled),t.config.disabled=kn(t.props.disabled))}),t.hook.prop(({prop:e,value:n},r)=>(n=e==="disabled"?kn(n):n,r({prop:e,value:n}))),t.on("prop:disabled",({payload:e})=>{t.config.disabled=kn(e)})}function Wi(t,e){return n=>{n.store.set(Fn({key:t,type:"ui",value:e||t,meta:{localize:!0,i18nArgs:[n]}}))}}const xf=typeof window<"u";function pR(t){t.target instanceof HTMLElement&&t.target.hasAttribute("data-file-hover")&&t.target.removeAttribute("data-file-hover")}function a0(t,e){e.target instanceof HTMLInputElement?t==="dragover"&&e.target.setAttribute("data-file-hover","true"):e.preventDefault(),t==="drop"&&pR(e)}function m4(t){Wi("noFiles","Select file")(t),Wi("removeAll","Remove all")(t),Wi("remove")(t),xf&&(window._FormKit_File_Drop||(window.addEventListener("dragover",a0.bind(null,"dragover")),window.addEventListener("drop",a0.bind(null,"drop")),window.addEventListener("dragleave",pR),window._FormKit_File_Drop=!0)),t.hook.input((e,n)=>n(Array.isArray(e)?e:[])),t.on("reset",()=>{if(t.props.id&&xf){const e=document.getElementById(t.props.id);e&&(e.value="")}}),t.on("created",()=>{Array.isArray(t.value)||t.input([],!1),t.context&&(t.context.handlers.resetFiles=e=>{if(e.preventDefault(),t.input([]),t.props.id&&xf){const n=document.getElementById(t.props.id);n&&(n.value=""),n==null||n.focus()}},t.context.handlers.files=e=>{var n,r;const s=[];if(e.target instanceof HTMLInputElement&&e.target.files){for(let i=0;i<e.target.files.length;i++){let o;(o=e.target.files.item(i))&&s.push({name:o.name,file:o})}t.input(s)}t.context&&(t.context.files=s),typeof((n=t.props.attrs)===null||n===void 0?void 0:n.onChange)=="function"&&((r=t.props.attrs)===null||r===void 0||r.onChange(e))})})}const l0=Fn({key:"loading",value:!0,visible:!1});async function g4(t,e){const n=Math.random();if(t.props._submitNonce=n,e.preventDefault(),await t.settled,t.ledger.value("validating")&&(t.store.set(l0),await t.ledger.settled("validating"),t.store.remove("loading"),t.props._submitNonce!==n))return;const r=s=>s.store.set(Fn({key:"submitted",value:!0,visible:!1}));if(t.walk(r),r(t),t.emit("submit-raw"),typeof t.props.onSubmitRaw=="function"&&t.props.onSubmitRaw(e,t),t.ledger.value("blocking"))typeof t.props.onSubmitInvalid=="function"&&t.props.onSubmitInvalid(t),t.props.incompleteMessage!==!1&&t.store.set(Fn({blocking:!1,key:"incomplete",meta:{localize:t.props.incompleteMessage===void 0,i18nArgs:[{node:t}],showAsMessage:!0},type:"ui",value:t.props.incompleteMessage||"Form incomplete."}));else if(typeof t.props.onSubmit=="function"){const s=t.props.onSubmit(t.hook.submit.dispatch(co(t.value)),t);if(s instanceof Promise){const i=t.props.disabled===void 0&&t.props.submitBehavior!=="live";i&&(t.props.disabled=!0),t.store.set(l0),await s,i&&(t.props.disabled=!1),t.store.remove("loading")}}else e.target instanceof HTMLFormElement&&e.target.submit()}function _4(t){t.props.isForm=!0,t.ledger.count("validating",e=>e.key==="validating"),t.on("created",()=>{var e;!((e=t.context)===null||e===void 0)&&e.handlers&&(t.context.handlers.submit=g4.bind(null,t)),oe(t.props,"actions")||(t.props.actions=!0)}),t.on("settled:blocking",()=>t.store.remove("incomplete"))}function y4(t){t.props.ignore===void 0&&(t.props.ignore=!0,t.parent=null)}function v4(t){t.on("created",()=>{t.context&&(t.context.initialValue=t.value||"")})}function mR(t){if(typeof t.props.number>"u")return;const e=["number","range","hidden"].includes(t.props.type);t.hook.input((n,r)=>{if(n==="")return r(void 0);const s=t.props.number==="integer"?parseInt(n):parseFloat(n);return Number.isFinite(s)?r(s):r(e?void 0:n)})}function E4(t,e){e.target instanceof HTMLInputElement&&t.input(Zs(t.props.options,e.target.value))}function w4(t,e){var n,r;return(n=t.context)===null||n===void 0||n.value,(r=t.context)===null||r===void 0||r._value,ho(Zs(t.props.options,e),t._value)}function T4(t){t.on("created",()=>{var e,n;Array.isArray(t.props.options)||ci(350,{node:t,inputType:"radio"}),!((e=t.context)===null||e===void 0)&&e.handlers&&(t.context.handlers.toggleChecked=E4.bind(null,t)),!((n=t.context)===null||n===void 0)&&n.fns&&(t.context.fns.isChecked=w4.bind(null,t))}),t.hook.prop(dR(t))}let b4=0;function I4(t){t.sync&&t.plugins.add(A4)}function A4(t){t.props.type==="radio"&&(t.props.altName=`${t.name}_${b4++}`)}function R4(t,e){if(Bh(e))return!1;t.context&&t.context.value;const n="__original"in e?e.__original:e.value;return Array.isArray(t._value)?t._value.some(r=>ho(r,n)):(t._value===void 0||t._value===null&&!gR(t.props.options,null))&&e.attrs&&e.attrs["data-is-placeholder"]?!0:ho(n,t._value)}function gR(t,e){return t.some(n=>Bh(n)?gR(n.options,e):("__original"in n?n.__original:n.value)===e)}async function C4(t,e){var n;typeof((n=t.props.attrs)===null||n===void 0?void 0:n.onChange)=="function"&&(await new Promise(r=>setTimeout(r,0)),await t.settled,t.props.attrs.onChange(e))}function S4(t,e){const n=e.target,r=n.hasAttribute("multiple")?Array.from(n.selectedOptions).map(s=>Zs(t.props.options,s.value)):Zs(t.props.options,n.value);t.input(r)}function c0(t,e){return t.some(n=>n.attrs&&n.attrs["data-is-placeholder"])?t:[{label:e,value:"",attrs:{hidden:!0,disabled:!0,"data-is-placeholder":"true"}},...t]}function _R(t){const e=t.length>0?t[0]:void 0;if(e)return Bh(e)?_R(e.options):"__original"in e?e.__original:e.value}function P4(t){t.on("created",()=>{var e,n,r;const s=kn((e=t.props.attrs)===null||e===void 0?void 0:e.multiple);!s&&t.props.placeholder&&Array.isArray(t.props.options)&&(t.hook.prop(({prop:i,value:o},a)=>(i==="options"&&(o=c0(o,t.props.placeholder)),a({prop:i,value:o}))),t.props.options=c0(t.props.options,t.props.placeholder)),s?t.value===void 0&&t.input([],!1):t.context&&!t.context.options&&(t.props.attrs=Object.assign({},t.props.attrs,{value:t._value}),t.on("input",({payload:i})=>{t.props.attrs=Object.assign({},t.props.attrs,{value:i})})),!((n=t.context)===null||n===void 0)&&n.handlers&&(t.context.handlers.selectInput=S4.bind(null,t),t.context.handlers.onChange=C4.bind(null,t)),!((r=t.context)===null||r===void 0)&&r.fns&&(t.context.fns.isSelected=R4.bind(null,t),t.context.fns.showPlaceholder=(i,o)=>{if(!Array.isArray(t.props.options))return!1;const a=t.props.options.some(l=>{if(l.attrs&&"data-is-placeholder"in l.attrs)return!1;const c="__original"in l?l.__original:l.value;return Ht(i,c)});return o&&!a?!0:void 0})}),t.hook.input((e,n)=>{var r,s,i;return!t.props.placeholder&&e===void 0&&Array.isArray((r=t.props)===null||r===void 0?void 0:r.options)&&t.props.options.length&&!kn((i=(s=t.props)===null||s===void 0?void 0:s.attrs)===null||i===void 0?void 0:i.multiple)&&(e=_R(t.props.options)),n(e)})}function lp(t){return!!(Ii(t)&&t.if&&t.if.startsWith("$slots.")&&typeof t.then=="string"&&t.then.startsWith("$slots.")&&"else"in t)}function wn(t,e,n){const r=s=>{const i=e(s);if(n||vu(i)&&"if"in i||lp(i)){const o={if:t,then:i};return n&&(o.else=n(s)),o}else lp(i)?Object.assign(i.else,{if:t}):vu(i)&&Object.assign(i,{if:t});return i};return r._s=$o(),r}function Us(t,e){const n=r=>{const s=t({});return lp(s)?(Array.isArray(s.else)||(s.else=la(la(s.else,e),t._s?r[t._s]:{})),s):la(la(s,e),t._s?r[t._s]:{})};return n._s=t._s,n}const u0={schema:ui(ys(_s("$message.value")),Fo(e4(dt("prefix"),Nr(),t4("$label || $ui.submit.value"),Or(),dt("suffix"))),kr("$help")),type:"input",family:"button",props:[],features:[Wi("submit"),y4],schemaMemoKey:"h6st4epl3j8"},k4={schema:ui(wn("$options == undefined",Tu(r0(Nr(),Eu(),bu(dt("decorator")),Or()),Us(wu("$label"),{if:"$label"})),uR(hR("$label"),kr("$help"),cR(lR(Tu(r0(Nr(),Us(Eu(),{bind:"$option.attrs",attrs:{id:"$option.attrs.id",value:"$option.value",checked:"$fns.isChecked($option.value)"}}),bu(dt("decorator")),Or()),Us(wu("$option.label"),{if:"$option.label"})),aR("$option.help"))))),wn("$options == undefined && $help",kr("$help")),ys(_s("$message.value"))),type:"input",family:"box",props:["options","onValue","offValue","optionsLoader"],features:[jg,p4,Fs("decorator","checkboxDecorator")],schemaMemoKey:"qje02tb3gu8"},N4={schema:ui(Fo(jh("$label"),fo(dt("prefix","label"),Nr(),n4(),s4(r4(dt("fileItem"),i4("$file.name"),wn("$value.length === 1",s0(dt("fileRemove"),'$ui.remove.value + " " + $file.name')))),wn("$value.length > 1",s0("$ui.removeAll.value")),a4(dt("noFiles"),"$ui.noFiles.value"),Or(),dt("suffix"))),kr("$help"),ys(_s("$message.value"))),type:"input",family:"text",props:[],features:[m4,Fs("fileItem","fileItem"),Fs("fileRemove","fileRemove"),Fs("noFiles","noFiles")],schemaMemoKey:"9kqc4852fv8"},O4={schema:o4("$slots.default",ys(_s("$message.value")),ZU(u4())),type:"group",props:["actions","submit","submitLabel","submitAttrs","submitBehavior","incompleteMessage"],features:[_4,Vl],schemaMemoKey:"5bg016redjo"},x4={schema:qg("$slots.default"),type:"group",props:[],features:[Vl]},D4={schema:fR(),type:"input",props:[],features:[mR]},M4={schema:qg("$slots.default"),type:"list",props:["sync","dynamic"],features:[Vl,I4]},L4={schema:qg(),type:"input",props:[],features:[]},V4={schema:ui(wn("$options == undefined",Tu(fo(Nr(),Eu(),bu(dt("decorator")),Or()),Us(wu("$label"),{if:"$label"})),uR(hR("$label"),kr("$help"),cR(lR(Tu(fo(Nr(),Us(Eu(),{bind:"$option.attrs",attrs:{id:"$option.attrs.id",value:"$option.value",checked:"$fns.isChecked($option.value)"}}),bu(dt("decorator")),Or()),Us(wu("$option.label"),{if:"$option.label"})),aR("$option.help"))))),wn("$options == undefined && $help",kr("$help")),ys(_s("$message.value"))),type:"input",family:"box",props:["options","onValue","offValue","optionsLoader"],features:[jg,T4,Fs("decorator","radioDecorator")],schemaMemoKey:"qje02tb3gu8"},$4={schema:ui(Fo(jh("$label"),fo(dt("prefix"),Nr(),c4(wn("$slots.default",()=>"$slots.default",o0(wn("$option.group",l4(o0(i0("$option.label"))),i0("$option.label"))))),wn("$attrs.multiple !== undefined",()=>"",dt("select")),Or(),dt("suffix"))),kr("$help"),ys(_s("$message.value"))),type:"input",props:["options","placeholder","optionsLoader"],features:[jg,P4,Fs("select","select")],schemaMemoKey:"cb119h43krg"},F4={schema:ui(Fo(jh("$label"),fo(dt("prefix","label"),Nr(),h4(),Or(),dt("suffix"))),kr("$help"),ys(_s("$message.value"))),type:"input",props:[],features:[v4],schemaMemoKey:"b1n0td79m9g"},zt={schema:ui(Fo(jh("$label"),fo(dt("prefix","label"),Nr(),fR(),Or(),dt("suffix"))),kr("$help"),ys(_s("$message.value"))),type:"input",family:"text",props:[],features:[mR],schemaMemoKey:"c3cc4kflsg"};var U4=Object.freeze({__proto__:null,button:u0,checkbox:k4,color:zt,date:zt,datetimeLocal:zt,email:zt,file:N4,form:O4,group:x4,hidden:D4,list:M4,meta:L4,month:zt,number:zt,password:zt,radio:V4,range:zt,search:zt,select:$4,submit:u0,tel:zt,text:zt,textarea:F4,time:zt,url:zt,week:zt});const yR=function({value:e}){return["yes","on","1",1,!0,"true"].includes(e)};yR.skipEmpty=!1;const B4=function({value:t},e=!1){const n=Date.parse(e||new Date),r=Date.parse(String(t));return isNaN(r)?!1:r>n},j4=function({value:t},e="default"){const n={default:/^\p{L}+$/u,latin:/^[a-z]+$/i},r=oe(n,e)?e:"default";return n[r].test(String(t))},q4=function({value:t},e="default"){const n={default:/^[\p{L} ]+$/u,latin:/^[a-z ]+$/i},r=oe(n,e)?e:"default";return n[r].test(String(t))},H4=function({value:t},e="default"){const n={default:/^[0-9\p{L}]+$/u,latin:/^[0-9a-z]+$/i},r=oe(n,e)?e:"default";return n[r].test(String(t))},W4=function({value:t},e=!1){const n=Date.parse(e||new Date),r=Date.parse(String(t));return isNaN(r)?!1:r<n},z4=function({value:e},n,r){if(!isNaN(e)&&!isNaN(n)&&!isNaN(r)){const s=1*e;n=Number(n),r=Number(r);const[i,o]=n<=r?[n,r]:[r,n];return s>=1*i&&s<=1*o}return!1},h0=/(_confirm(?:ed)?)$/,K4=function(e,n,r="loose"){var s;n||(n=h0.test(e.name)?e.name.replace(h0,""):`${e.name}_confirm`);const i=(s=e.at(n))===null||s===void 0?void 0:s.value;return r==="strict"?e.value===i:e.value==i},G4=function({value:t},e="default"){const n={default:/\p{L}/u,latin:/[a-z]/i},r=oe(n,e)?e:"default";return n[r].test(String(t))},Q4=function({value:t},e="default"){const n={default:/[\p{L} ]/u,latin:/[a-z ]/i},r=oe(n,e)?e:"default";return n[r].test(String(t))},Y4=function({value:t},e="default"){const n={default:/[0-9\p{L}]/u,latin:/[0-9a-z]/i},r=oe(n,e)?e:"default";return n[r].test(String(t))},X4=function({value:t},e="default"){const n={default:/\p{Ll}/u,latin:/[a-z]/},r=oe(n,e)?e:"default";return n[r].test(String(t))},J4=function({value:e}){return/[0-9]/.test(String(e))},Z4=function({value:t}){return/[!-/:-@[-`{-~]/.test(String(t))},e9=function({value:t},e="default"){const n={default:/\p{Lu}/u,latin:/[A-Z]/},r=oe(n,e)?e:"default";return n[r].test(String(t))},t9=function({value:e},n,r){n=n instanceof Date?n.getTime():Date.parse(n),r=r instanceof Date?r.getTime():Date.parse(r);const s=e instanceof Date?e.getTime():Date.parse(String(e));if(n&&!r)r=n,n=Date.now();else if(!n||!s)return!1;return s>=n&&s<=r},n9=function({value:e},n){return n&&typeof n=="string"?C5(n).test(String(e)):!isNaN(Date.parse(String(e)))},r9=function({value:e}){return/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(String(e))},s9=function({value:e},...n){return typeof e=="string"&&n.length?n.some(r=>e.endsWith(r)):typeof e=="string"&&n.length===0},i9=function({value:e},...n){return n.some(r=>typeof r=="object"?Ht(r,e):r==e)},o9=function({value:e},n=0,r=1/0){n=parseInt(n),r=isNaN(parseInt(r))?1/0:parseInt(r);const s=n<=r?n:r,i=r>=n?r:n;if(typeof e=="string"||Array.isArray(e))return e.length>=s&&e.length<=i;if(e&&typeof e=="object"){const o=Object.keys(e).length;return o>=s&&o<=i}return!1},a9=function({value:t},e="default"){const n={default:/^\p{Ll}+$/u,latin:/^[a-z]+$/},r=oe(n,e)?e:"default";return n[r].test(String(t))},l9=function({value:e},...n){return n.some(r=>(typeof r=="string"&&r.substr(0,1)==="/"&&r.substr(-1)==="/"&&(r=new RegExp(r.substr(1,r.length-2))),r instanceof RegExp?r.test(String(e)):r===e))},c9=function({value:e},n=10){return Array.isArray(e)?e.length<=n:Number(e)<=Number(n)},u9=function({value:e},n=1){return Array.isArray(e)?e.length>=n:Number(e)>=Number(n)},h9=function({value:e},...n){return!n.some(r=>typeof r=="object"?Ht(r,e):r===e)},f9=function({value:e}){return!isNaN(e)},vR=function(t,...e){return En(t.value)?e.map(r=>{var s;return(s=t.at(r))===null||s===void 0?void 0:s.value}).some(r=>!En(r)):!0};vR.skipEmpty=!1;const ER=function({value:e},n="default"){return n==="trim"&&typeof e=="string"?!En(e.trim()):!En(e)};ER.skipEmpty=!1;const d9=function({value:e},...n){return typeof e=="string"&&n.length?n.some(r=>e.startsWith(r)):typeof e=="string"&&n.length===0},p9=function({value:t}){return/^[!-/:-@[-`{-~]+$/.test(String(t))},m9=function({value:t},e="default"){const n={default:/^\p{Lu}+$/u,latin:/^[A-Z]+$/},r=oe(n,e)?e:"default";return n[r].test(String(t))},g9=function({value:e},...n){try{const r=n.length?n:["http:","https:"],s=new URL(String(e));return r.includes(s.protocol)}catch{return!1}},_9=Object.freeze(Object.defineProperty({__proto__:null,accepted:yR,alpha:j4,alpha_spaces:q4,alphanumeric:H4,between:z4,confirm:K4,contains_alpha:G4,contains_alpha_spaces:Q4,contains_alphanumeric:Y4,contains_lowercase:X4,contains_numeric:J4,contains_symbol:Z4,contains_uppercase:e9,date_after:B4,date_before:W4,date_between:t9,date_format:n9,email:r9,ends_with:s9,is:i9,length:o9,lowercase:a9,matches:l9,max:c9,min:u9,not:h9,number:f9,require_one:vR,required:ER,starts_with:d9,symbol:p9,uppercase:m9,url:g9},Symbol.toStringTag,{value:"Module"})),wR=new WeakSet;function il(t,e){const n=e||Object.assign(new Map,{active:!1}),r=new Map,s=function(u){var h;n.active&&(n.has(t)||n.set(t,new Set),(h=n.get(t))===null||h===void 0||h.add(u))},i=function(u){return new Proxy(u,{get(...h){return typeof h[1]=="string"&&s(`prop:${h[1]}`),Reflect.get(...h)}})},o=function(u){return new Proxy(u,{get(...h){return h[1]==="value"?f=>(s(`count:${f}`),u.value(f)):Reflect.get(...h)}})},a=function(u,h){return Ll(u)?il(u,n):(h==="value"&&s("commit"),h==="_value"&&s("input"),h==="props"?i(u):h==="ledger"?o(u):u)},{proxy:l,revoke:c}=Proxy.revocable(t,{get(...u){switch(u[1]){case"_node":return t;case"deps":return n;case"watch":return(f,d)=>IR(l,f,d);case"observe":return()=>{const f=new Map(n);return n.clear(),n.active=!0,f};case"stopObserve":return()=>{const f=new Map(n);return n.active=!1,f};case"receipts":return r;case"kill":return()=>{bR(r),wR.add(u[2]),c()}}const h=Reflect.get(...u);return typeof h=="function"?(...f)=>{const d=h(...f);return a(d,u[1])}:a(h,u[1])}});return l}function TR(t,[e,n],r){e.forEach((s,i)=>{s.forEach(o=>{var a;t.receipts.has(i)||t.receipts.set(i,{}),t.receipts.set(i,Object.assign((a=t.receipts.get(i))!==null&&a!==void 0?a:{},{[o]:i.on(o,r)}))})}),n.forEach((s,i)=>{s.forEach(o=>{if(t.receipts.has(i)){const a=t.receipts.get(i);a&&oe(a,o)&&(i.off(a[o]),delete a[o],t.receipts.set(i,a))}})})}function bR(t){t.forEach((e,n)=>{for(const r in e)n.off(e[r])})}function IR(t,e,n){const r=o=>{const a=t.stopObserve();TR(t,AR(s,a),()=>IR(t,e,n)),n&&n(o)},s=new Map(t.deps);t.observe();const i=e(t);i instanceof Promise?i.then(o=>r(o)):r(i)}function AR(t,e){const n=new Map,r=new Map;return e.forEach((s,i)=>{if(!t.has(i))n.set(i,s);else{const o=new Set,a=t.get(i);s.forEach(l=>!(a!=null&&a.has(l))&&o.add(l)),n.set(i,o)}}),t.forEach((s,i)=>{if(!e.has(i))r.set(i,s);else{const o=new Set,a=e.get(i);s.forEach(l=>!(a!=null&&a.has(l))&&o.add(l)),r.set(i,o)}}),[n,r]}function RR(t){return wR.has(t)}const cp=Fn({type:"state",blocking:!0,visible:!1,value:!0,key:"validating"});function y9(t={}){return function(n){let r=Pn(n.props.validationRules||{}),s={...t,...r},i=il(n);const o={input:$o(),rerun:null,isPassing:!0};let a=Pn(n.props.validation);n.on("prop:validation",({payload:c})=>l(c,r)),n.on("prop:validationRules",({payload:c})=>l(a,c));function l(c,u){var h;Ht(Object.keys(r||{}),Object.keys(u||{}))&&Ht(a,c)||(r=Pn(u),a=Pn(c),s={...t,...r},bR(i.receipts),(h=n.props.parsedRules)===null||h===void 0||h.forEach(f=>{var d;f.messageObserver=(d=f.messageObserver)===null||d===void 0?void 0:d.kill()}),n.store.filter(()=>!1,"validation"),n.props.parsedRules=d0(c,s),i.kill(),i=il(n),up(i,n.props.parsedRules,o))}n.props.parsedRules=d0(a,s),up(i,n.props.parsedRules,o)}}function up(t,e,n){RR(t)||(n.input=$o(),n.isPassing=!0,t.store.filter(r=>!r.meta.removeImmediately,"validation"),e.forEach(r=>r.debounce&&clearTimeout(r.timer)),e.length&&(t.store.set(cp),hp(0,e,t,n,!1,()=>{t.store.remove(cp.key)})))}function hp(t,e,n,r,s,i){const o=e[t];if(!o)return i();const a=r.input;o.state=null;function l(c,u){r.isPassing=r.isPassing&&!!u,o.queued=!1;const h=n.stopObserve();TR(n,AR(o.deps,h),()=>{try{n.store.set(cp)}catch{}o.queued=!0,r.rerun&&clearTimeout(r.rerun),r.rerun=setTimeout(up,0,n,e,r)}),o.deps=h,r.input===a&&(o.state=u,u===!1?w9(n,o,s||c):E9(n,o),e.length>t+1?hp(t+1,e,n,r,s||c,i):i())}(!En(n.value)||!o.skipEmpty)&&(r.isPassing||o.force)?o.queued?v9(o,n,c=>{c instanceof Promise?c.then(u=>l(!0,u)):l(!1,c)}):hp(t+1,e,n,r,s,i):En(n.value)&&o.skipEmpty&&r.isPassing?(n.observe(),n.value,l(!1,r.isPassing)):l(!1,null)}function v9(t,e,n){t.debounce?t.timer=setTimeout(()=>{e.observe(),n(t.rule(e,...t.args))},t.debounce):(e.observe(),n(t.rule(e,...t.args)))}function E9(t,e){const n=`rule_${e.name}`;e.messageObserver&&(e.messageObserver=e.messageObserver.kill()),oe(t.store,n)&&t.store.remove(n)}function w9(t,e,n){RR(t)||(e.messageObserver||(e.messageObserver=il(t._node)),e.messageObserver.watch(r=>b9(r,e),r=>{const s=T9(t,e,r),i=Fn({blocking:e.blocking,key:`rule_${e.name}`,meta:{messageKey:e.name,removeImmediately:n,localize:!s,i18nArgs:r},type:"validation",value:s||"This field is not valid."});t.store.set(i)}))}function T9(t,e,n){const r=t.props.validationMessages&&oe(t.props.validationMessages,e.name)?t.props.validationMessages[e.name]:void 0;return typeof r=="function"?r(...n):r}function b9(t,e){return[{node:t,name:CR(t),args:e.args}]}function CR(t){return typeof t.props.validationLabel=="function"?t.props.validationLabel(t):t.props.validationLabel||t.props.label||t.props.name||String(t.name)}const SR="(?:[\\*+?()0-9]+)",PR="[a-zA-Z][a-zA-Z0-9_]+",I9=new RegExp(`^(${SR}?${PR})(?:\\:(.*)+)?$`,"i"),A9=new RegExp(`^(${SR})(${PR})$`,"i"),R9=/([\*+?]+)?(\(\d+\))([\*+?]+)?/,f0=/\(\d+\)/,C9={blocking:!0,debounce:0,force:!1,skipEmpty:!0,name:""};function d0(t,e){return t?(typeof t=="string"?S9(t):co(t)).reduce((r,s)=>{let i=s.shift();const o={};if(typeof i=="string"){const[a,l]=k9(i);oe(e,a)&&(i=e[a],Object.assign(o,l))}return typeof i=="function"&&r.push({rule:i,args:s,timer:0,state:null,queued:!0,deps:new Map,...C9,...N9(o,i)}),r},[]):[]}function S9(t){return t.split("|").reduce((e,n)=>{const r=P9(n);return r&&e.push(r),e},[])}function P9(t){const e=t.trim();if(e){const n=e.match(I9);if(n&&typeof n[1]=="string"){const r=n[1].trim(),s=n[2]&&typeof n[2]=="string"?n[2].split(",").map(i=>i.trim()):[];return[r,...s]}}return!1}function k9(t){const e=t.match(A9);if(!e)return[t,{name:t}];const n={"*":{force:!0},"+":{skipEmpty:!1},"?":{blocking:!1}},[,r,s]=e,i=f0.test(r)?r.match(R9)||[]:[,r];return[s,[i[1],i[2],i[3]].reduce((o,a)=>(a&&(f0.test(a)?o.debounce=parseInt(a.substr(1,a.length-1)):a.split("").forEach(l=>oe(n,l)&&Object.assign(o,n[l]))),o),{name:s})]}function N9(t,e){return t.name||(t.name=e.ruleName||e.name),["skipEmpty","force","debounce","blocking"].reduce((n,r)=>(oe(e,r)&&!oe(n,r)&&Object.assign(n,{[r]:e[r]}),n),t)}function we(t){return t[0].toUpperCase()+t.substr(1)}function p0(t,e="or"){return t.reduce((n,r,s)=>(n+=r,s<=t.length-2&&t.length>2&&(n+=", "),s===t.length-2&&(n+=`${t.length===2?" ":""}${e} `),n),"")}function uc(t){const e=typeof t=="string"?new Date(Date.parse(t)):t;return e instanceof Date?new Intl.DateTimeFormat(void 0,{dateStyle:"medium",timeZone:"UTC"}).format(e):"(unknown)"}function O9(t,e){return Number(t)>=Number(e)?[e,t]:[t,e]}const x9={add:"Add",remove:"Remove",removeAll:"Remove all",incomplete:"Sorry, not all fields are filled out correctly.",submit:"Submit",noFiles:"No file chosen",moveUp:"Move up",moveDown:"Move down",isLoading:"Loading...",loadMore:"Load more",next:"Next",prev:"Previous",addAllValues:"Add all values",addSelectedValues:"Add selected values",removeAllValues:"Remove all values",removeSelectedValues:"Remove selected values",chooseDate:"Choose date",changeDate:"Change date",invalidDate:"The selected date is invalid.",summaryHeader:"There were errors in your form.",close:"Close"},D9={accepted({name:t}){return`Please accept the ${t}.`},date_after({name:t,args:e}){return Array.isArray(e)&&e.length?`${we(t)} must be after ${uc(e[0])}.`:`${we(t)} must be in the future.`},alpha({name:t}){return`${we(t)} can only contain alphabetical characters.`},alphanumeric({name:t}){return`${we(t)} can only contain letters and numbers.`},alpha_spaces({name:t}){return`${we(t)} can only contain letters and spaces.`},contains_alpha({name:t}){return`${we(t)} must contain alphabetical characters.`},contains_alphanumeric({name:t}){return`${we(t)} must contain letters or numbers.`},contains_alpha_spaces({name:t}){return`${we(t)} must contain letters or spaces.`},contains_symbol({name:t}){return`${we(t)} must contain a symbol.`},contains_uppercase({name:t}){return`${we(t)} must contain an uppercase letter.`},contains_lowercase({name:t}){return`${we(t)} must contain a lowercase letter.`},contains_numeric({name:t}){return`${we(t)} must contain numbers.`},symbol({name:t}){return`${we(t)} must be a symbol.`},uppercase({name:t}){return`${we(t)} can only contain uppercase letters.`},lowercase({name:t}){return`${we(t)} can only contain lowercase letters.`},date_before({name:t,args:e}){return Array.isArray(e)&&e.length?`${we(t)} must be before ${uc(e[0])}.`:`${we(t)} must be in the past.`},between({name:t,args:e}){if(isNaN(e[0])||isNaN(e[1]))return"This field was configured incorrectly and can’t be submitted.";const[n,r]=O9(e[0],e[1]);return`${we(t)} must be between ${n} and ${r}.`},confirm({name:t}){return`${we(t)} does not match.`},date_format({name:t,args:e}){return Array.isArray(e)&&e.length?`${we(t)} is not a valid date, please use the format ${e[0]}`:"This field was configured incorrectly and can’t be submitted"},date_between({name:t,args:e}){return`${we(t)} must be between ${uc(e[0])} and ${uc(e[1])}`},email:"Please enter a valid email address.",ends_with({name:t,args:e}){return`${we(t)} doesn’t end with ${p0(e)}.`},is({name:t}){return`${we(t)} is not an allowed value.`},length({name:t,args:[e=0,n=1/0]}){const r=Number(e)<=Number(n)?e:n,s=Number(n)>=Number(e)?n:e;return r==1&&s===1/0?`${we(t)} must be at least one character.`:r==0&&s?`${we(t)} must be less than or equal to ${s} characters.`:r===s?`${we(t)} should be ${s} characters long.`:r&&s===1/0?`${we(t)} must be greater than or equal to ${r} characters.`:`${we(t)} must be between ${r} and ${s} characters.`},matches({name:t}){return`${we(t)} is not an allowed value.`},max({name:t,node:{value:e},args:n}){return Array.isArray(e)?`Cannot have more than ${n[0]} ${t}.`:`${we(t)} must be less than or equal to ${n[0]}.`},mime({name:t,args:e}){return e[0]?`${we(t)} must be of the type: ${e[0]}`:"No file formats allowed."},min({name:t,node:{value:e},args:n}){return Array.isArray(e)?`Cannot have fewer than ${n[0]} ${t}.`:`Must be at least ${n[0]} ${t} .`},not({name:t,node:{value:e}}){return`“${e}” is not an allowed ${t}.`},number({name:t}){return`${we(t)} must be a number.`},require_one:({name:t,node:e,args:n})=>{const r=n.map(s=>{const i=e.at(s);return i?CR(i):!1}).filter(s=>!!s);return r.unshift(t),`${r.join(" or ")} is required.`},required({name:t}){return`${we(t)} is required.`},starts_with({name:t,args:e}){return`${we(t)} doesn’t start with ${p0(e)}.`},url(){return"Please enter a valid URL."}};var M9=Object.freeze({__proto__:null,ui:x9,validation:D9});function L9(t){return function(n){let r=m0(n.config.locale,t),s=r?t[r]:{};n.on("prop:locale",({payload:i})=>{r=m0(i,t),s=r?t[r]:{},n.store.touch()}),n.on("prop:label",()=>n.store.touch()),n.on("prop:validationLabel",()=>n.store.touch()),n.hook.text((i,o)=>{var a,l;const c=((a=i.meta)===null||a===void 0?void 0:a.messageKey)||i.key;if(oe(s,i.type)&&oe(s[i.type],c)){const u=s[i.type][c];typeof u=="function"?i.value=Array.isArray((l=i.meta)===null||l===void 0?void 0:l.i18nArgs)?u(...i.meta.i18nArgs):u(i):i.value=u}return o(i)})}}function m0(t,e){if(oe(e,t))return t;const[n]=t.split("-");if(oe(e,n))return n;for(const r in e)return r;return!1}function V9(t){const e={};return Object.keys(t).forEach(n=>{Object.keys(t[n]).forEach(r=>{e[r]?e[r][n]=t[n][r]:e[r]={[n]:t[n][r]}})}),Object.keys(e).forEach(n=>{const r=e[n];e[n]=function(s,i){return $9(s,i,r)}}),e}function $9(t,e,n){const r=t.props.type,s=t.props.family;let i="";n.global&&(i+=n.global+" "),n[`family:${s}`]&&(i+=n[`family:${s}`]+" "),n[r]&&(i+=n[r]);const o=i.split("$reset");return o.length>1?`$reset ${o[o.length-1].trim()}`:o[0].trim()}let Nn,qn=null,Iu,kR=!1,ca=!1;const F9=new Promise(t=>{Iu=()=>{kR=!0,t()}}),Ir=typeof window<"u"&&typeof fetch<"u";Nn=Ir?getComputedStyle(document.documentElement):void 0;const Oi={},Df={};function U9(t,e,n,r){e&&Object.assign(Oi,e),Ir&&!ca&&(Nn!=null&&Nn.getPropertyValue("--formkit-theme"))?(Iu(),ca=!0):t&&!ca&&Ir?B9(t):!ca&&Ir&&Iu();const s=function(o){var a,l;o.addProps(["iconLoader","iconLoaderUrl"]),o.props.iconHandler=g0(!((a=o.props)===null||a===void 0)&&a.iconLoader?o.props.iconLoader:r,!((l=o.props)===null||l===void 0)&&l.iconLoaderUrl?o.props.iconLoaderUrl:n),H9(o,o.props.iconHandler),o.on("created",()=>{var c;!((c=o==null?void 0:o.context)===null||c===void 0)&&c.handlers&&(o.context.handlers.iconClick=u=>{const h=`on${u.charAt(0).toUpperCase()}${u.slice(1)}IconClick`,f=o.props[h];if(f&&typeof f=="function")return d=>f(o,d)})})};return s.iconHandler=g0(r,n),s}function B9(t){if(!(!t||!Ir||typeof getComputedStyle!="function")&&(ca=!0,qn=document.getElementById("formkit-theme"),t&&Ir&&(!(Nn!=null&&Nn.getPropertyValue("--formkit-theme"))&&!qn||qn!=null&&qn.getAttribute("data-theme")&&(qn==null?void 0:qn.getAttribute("data-theme"))!==t))){const n=`https://cdn.jsdelivr.net/npm/@formkit/themes@${yu.startsWith("__")?"latest":yu}/dist/${t}/theme.css`,r=document.createElement("link");r.type="text/css",r.rel="stylesheet",r.id="formkit-theme",r.setAttribute("data-theme",t),r.onload=()=>{Nn=getComputedStyle(document.documentElement),Iu()},document.head.appendChild(r),r.href=n,qn&&qn.remove()}}function g0(t,e){return n=>{if(typeof n!="string")return;if(n.startsWith("<svg"))return n;const r=n.startsWith("default:");n=r?n.split(":")[1]:n;const s=n in Oi;let i;if(s)return Oi[n];if(!Df[n]){if(i=j9(n),i=Ir&&typeof i>"u"?Promise.resolve(i):i,i instanceof Promise)Df[n]=i.then(o=>!o&&typeof n=="string"&&!r?i=typeof t=="function"?t(n):q9(n,e):o).then(o=>(typeof n=="string"&&(Oi[r?`default:${n}`:n]=o),o));else if(typeof i=="string")return Oi[r?`default:${n}`:n]=i,i}return Df[n]}}function j9(t){if(Ir)return kR?_0(t):F9.then(()=>_0(t))}function _0(t){const e=Nn==null?void 0:Nn.getPropertyValue(`--fk-icon-${t}`);if(e){const n=atob(e);if(n.startsWith("<svg"))return Oi[t]=n,n}}function q9(t,e){const n=yu.startsWith("__")?"latest":yu,r=typeof e=="function"?e(t):`https://cdn.jsdelivr.net/npm/@formkit/icons@${n}/dist/icons/${t}.svg`;if(Ir)return fetch(`${r}`).then(async s=>{const i=await s.text();if(i.startsWith("<svg"))return i}).catch(s=>{console.error(s)})}function H9(t,e){const n=/^[a-zA-Z-]+(?:-icon|Icon)$/;Object.keys(t.props).filter(s=>n.test(s)).forEach(s=>W9(t,e,s))}function W9(t,e,n){const r=t.props[n],s=e(r),i=`_raw${n.charAt(0).toUpperCase()}${n.slice(1)}`,o=`on${n.charAt(0).toUpperCase()}${n.slice(1)}Click`;if(t.addProps([i,o]),t.on(`prop:${n}`,z9),s instanceof Promise)return s.then(a=>{t.props[i]=a});t.props[i]=s}function z9(t){var e;const n=t.origin,r=t.payload,s=(e=n==null?void 0:n.props)===null||e===void 0?void 0:e.iconHandler,i=t.name.split(":")[1],o=`_raw${i.charAt(0).toUpperCase()}${i.slice(1)}`;if(s&&typeof s=="function"){const a=s(r);if(a instanceof Promise)return a.then(l=>{n.props[o]=l});n.props[o]=a}}const y0={100:({data:t})=>`Only groups, lists, and forms can have children (${t.name}).`,101:({data:t})=>`You cannot directly modify the store (${t.name}). See: https://formkit.com/advanced/core#message-store`,102:({data:[t,e]})=>`You cannot directly assign node.${e} (${t.name})`,103:({data:[t]})=>`Schema expressions cannot start with an operator (${t})`,104:({data:[t,e]})=>`Schema expressions cannot end with an operator (${t} in "${e}")`,105:({data:t})=>`Invalid schema expression: ${t}`,106:({data:t})=>`Cannot submit because (${t}) is not in a form.`,107:({data:[t,e]})=>`Cannot set ${t.name} to non object value: ${e}`,108:({data:[t,e]})=>`Cannot set ${t.name} to non array value: ${e}`,300:({data:[t]})=>`Cannot set behavior prop to overscroll (on ${t.name} input) when options prop is a function.`,600:({data:t})=>`Unknown input type${typeof t.props.type=="string"?' "'+t.props.type+'"':""} ("${t.name}")`,601:({data:t})=>`Input definition${typeof t.props.type=="string"?' "'+t.props.type+'"':""} is missing a schema or component property (${t.name}).`},v0={150:({data:t})=>`Schema function "${t}()" is not a valid function.`,151:({data:t})=>`No form element with id: ${t}`,152:({data:t})=>`No input element with id: ${t}`,350:({data:{node:t,inputType:e}})=>`Invalid options prop for ${t.name} input (${e}). See https://formkit.com/inputs/${e}`,650:'Schema "$get()" must use the id of an input to access.',651:({data:t})=>`Cannot setErrors() on "${t}" because no such id exists.`,652:({data:t})=>`Cannot clearErrors() on "${t}" because no such id exists.`,800:({data:t})=>`${t} is deprecated.`},K9=(t,e)=>{if(t.code in y0){const n=y0[t.code];t.message=typeof n=="function"?n(t):n}return e(t)};let E0=!1;function G9(){E0||(Vg(K9),$g(Q9),E0=!0)}const Q9=(t,e)=>{if(t.code in v0){const n=v0[t.code];t.message=typeof n=="function"?n(t):n}return e(t)},Y9=typeof window>"u",Mf=new Map;function X9(t,e){var n;!Y9||!t||(Mf.has(t)||Mf.set(t,new Set),(n=Mf.get(t))===null||n===void 0||n.add(e))}const NR=typeof window>"u",Ca={},zi={};let jt;const pr=new WeakMap,J9="__raw__",Z9=/[a-zA-Z0-9\-][cC]lass$/;function e3(t,e){const n=Me(null);if(t==="get"){const s={};return n.value=t3.bind(null,s),n}const r=t.split(".");return Wn(()=>{n.value=Hg(Oe(e)?e.value:e,r)}),n}function Hg(t,e){if(Array.isArray(t)){for(const s of t){const i=s!==!1&&Hg(s,e);if(i!==void 0)return i}return}let n,r=t;for(const s in e){const i=e[s];if(typeof r!="object"||r===null){n=void 0;break}const o=r[i];if(Number(s)===e.length-1&&o!==void 0){n=typeof o=="function"?o.bind(r):o;break}r=o}return n}function t3(t,e){if(typeof e!="string")return ci(650);if(e in t||(t[e]=Me(void 0)),t[e].value===void 0){t[e].value=null;const n=Ml(e);n&&(t[e].value=n.context),Z5(e,({payload:r})=>{t[e].value=Ll(r)?r.context:r})}return t[e].value}function w0(t,e,n){function r(d,m){const p=h(In(m.if),{if:!0}),g=c(d,m.then),y=m.else?c(d,m.else):null;return[p,g,y]}function s(d,m){var p,g;const y=h(In(d.if));let w=()=>m,b=()=>m;return typeof d.then=="object"?b=i(d.then,void 0):typeof d.then=="string"&&(!((p=d.then)===null||p===void 0)&&p.startsWith("$"))?b=h(In(d.then)):b=()=>d.then,oe(d,"else")&&(typeof d.else=="object"?w=i(d.else):typeof d.else=="string"&&(!((g=d.else)===null||g===void 0)&&g.startsWith("$"))?w=h(In(d.else)):w=()=>d.else),()=>y()?b():w()}function i(d,m,p={}){const g=new Set(Object.keys(d||{})),y=m?h(In(m)):()=>({}),w=[b=>{const T=y();for(const k in T)g.has(k)||(b[k]=T[k])}];if(d){if(Ii(d))return s(d,p);for(let b in d){const T=d[b];let k;const I=typeof T=="string";b.startsWith(J9)?(b=b.substring(7),k=()=>T):I&&T.startsWith("$")&&T.length>1&&!(T.startsWith("$reset")&&Z9.test(b))?k=h(In(T)):typeof T=="object"&&Ii(T)?k=s(T,void 0):typeof T=="object"&&lo(T)?k=i(T):k=()=>T,w.push(C=>{C[b]=k()})}}return()=>{const b=Array.isArray(d)?[]:{};return w.forEach(T=>T(b)),b}}function o(d,m){let p=null,g=()=>null,y=!1,w=null,b=null,T=null,k=!1;const I=zU(m);if(op(I)?(p=I.$el,g=I.$el!=="text"?i(I.attrs,I.bind):()=>null):ap(I)?(typeof I.$cmp=="string"?oe(d,I.$cmp)?p=d[I.$cmp]:(p=I.$cmp,k=!0):p=I.$cmp,g=i(I.props,I.bind)):Ii(I)&&([y,w,b]=r(d,I)),!Ii(I)&&"if"in I?y=h(In(I.if)):!Ii(I)&&p===null&&(y=()=>!0),"children"in I&&I.children)if(typeof I.children=="string")if(I.children.startsWith("$slots."))p=p==="text"?"slot":p,w=h(In(I.children));else if(I.children.startsWith("$")&&I.children.length>1){const C=h(In(I.children));w=()=>String(C())}else w=()=>String(I.children);else if(Array.isArray(I.children))w=c(d,I.children);else{const[C,E,R]=r(d,I.children);w=M=>C&&C()?E&&E(M):R&&R(M)}if(ap(I))if(w){const C=w;w=E=>({default(R,M){var U,V,H,ve;const Se=jt;M&&(jt=M),R&&((U=pr.get(jt))===null||U===void 0||U.unshift(R)),E&&((V=pr.get(jt))===null||V===void 0||V.unshift(E));const K=C(E);return R&&((H=pr.get(jt))===null||H===void 0||H.shift()),E&&((ve=pr.get(jt))===null||ve===void 0||ve.shift()),jt=Se,K}}),w.slot=!0}else w=()=>({});if("for"in I&&I.for){const C=I.for.length===3?I.for[2]:I.for[1];T=[typeof C=="string"&&C.startsWith("$")?h(In(C)):()=>C,I.for[0],I.for.length===3?String(I.for[1]):null]}return[y,p,g,w,b,T,k]}function a(d,m){const p=d(m),g=jt;return Object.keys(p).reduce((y,w)=>{const b=p&&p[w];return y[w]=T=>b&&b(T,g)||null,y},{})}function l(d,m){const[p,g,y,w,b,T,k]=o(d,m);let I=C=>{if(p&&g===null&&w)return p()?w(C):b&&b(C);if(g&&(!p||p())){if(g==="text"&&w)return gt(String(w()));if(g==="slot"&&w)return w(C);const E=k?Fp(g):g,R=w!=null&&w.slot?a(w,C):null;return Qi(E,y(),R||(w?w(C):[]))}return typeof b=="function"?b(C):b};if(T){const C=I,[E,R,M]=T;I=()=>{const U=E(),V=Number.isFinite(U)?Array(Number(U)).fill(0).map((K,ae)=>ae):U,H=[];if(typeof V!="object")return null;const ve=pr.get(jt)||[],Se=Array.isArray(V);for(const K in V){if(Se&&K in Array.prototype)continue;const ae=Object.defineProperty({...ve.reduce((de,ot)=>de.__idata?{...de,...ot}:ot,{}),[R]:V[K],...M!==null?{[M]:Se?Number(K):K}:{}},"__idata",{enumerable:!1,value:!0});ve.unshift(ae),H.push(C.bind(null,ae)()),ve.shift()}return H}}return I}function c(d,m){if(Array.isArray(m)){const g=m.map(l.bind(null,d));return y=>g.map(w=>w(y))}const p=l(d,m);return g=>p(g)}const u=[];function h(d,m={}){const p=new WeakMap;return u.push((g,y)=>{p.set(y,d.provide(w=>g(w,m)))}),()=>p.get(jt)()}function f(d,m){var p;n??(n=JSON.stringify(e));const[g,y]=oe(Ca,n)?Ca[n]:[c(t,e),u];return NR||((p=zi[n])!==null&&p!==void 0||(zi[n]=0),zi[n]++,Ca[n]=[g,y]),y.forEach(w=>{w(d,m)}),()=>(jt=m,g())}return f}function OR(t,e){const n=pr.get(jt)||[];let r;return n.length&&(r=Hg(n,t.split("."))),r===void 0?e:r}function n3(t,e){return new Proxy(t,{get(...n){let r;const s=n[1];if(typeof s=="string"){const i=jt;jt=e,r=OR(s,void 0),jt=i}return r!==void 0?r:Reflect.get(...n)}})}function T0(t,e,n){return t((r,s={})=>r.reduce((i,o)=>{if(o.startsWith("slots.")){const a=o.substring(6),l=()=>e.slots&&oe(e.slots,a)&&typeof e.slots[a]=="function";if(s.if)i[o]=l;else if(e.slots){const c=n3(e,n);i[o]=()=>l()?e.slots[a](c):null}}else{const a=e3(o,e);i[o]=()=>OR(o,a.value)}return i},{}),n)}function b0(t,e,n){if(e??(e=JSON.stringify(t)),zi[e]--,zi[e]===0){delete zi[e];const[,r]=Ca[e];delete Ca[e],r.length=0}pr.delete(n)}const xR=Lu({name:"FormKitSchema",props:{schema:{type:[Array,Object],required:!0},data:{type:Object,default:()=>({})},library:{type:Object,default:()=>({})},memoKey:{type:String,required:!1}},setup(t,e){var n;const r=Ar();let s={};pr.set(s,[]);let i=w0(t.library,t.schema,t.memoKey),o,a;NR||Yt(()=>t.schema,(c,u)=>{var h;const f=s;s={},pr.set(s,[]),i=w0(t.library,t.schema,t.memoKey),o=T0(i,a,s),c===u&&((h=r==null?void 0:r.proxy)===null||h===void 0?void 0:h.$forceUpdate)(),b0(t.schema,t.memoKey,f)},{deep:!0}),Wn(()=>{var c;a=Object.assign(Qn((c=t.data)!==null&&c!==void 0?c:{}),{slots:e.slots}),e.slots,o=T0(i,a,s)});function l(){b0(t.schema,t.memoKey,s),a.node&&a.node.destroy(),a.slots=null,a=null,o=null}return $p(l),X9((n=Ar())===null||n===void 0?void 0:n.appContext.app,l),()=>o?o():null}}),r3=typeof window>"u",I0=Symbol("FormKitParent");function s3(t,e){const n=h3(t,e);if(n.props.definition||fn(600,n),n.props.definition.component)return()=>{var l;return Qi((l=n.props.definition)===null||l===void 0?void 0:l.component,{context:n.context},{...e.slots})};const r=Me([]);let s=n.props.definition.schemaMemoKey;const i=()=>{var l,c;const u=(c=(l=n.props)===null||l===void 0?void 0:l.definition)===null||c===void 0?void 0:c.schema;u||fn(601,n),typeof u=="function"?(r.value=u({...t.sectionsSchema}),(s&&t.sectionsSchema||"memoKey"in u&&typeof u.memoKey=="string")&&(s=(s??(u==null?void 0:u.memoKey))+JSON.stringify(t.sectionsSchema))):r.value=u};i(),r3||n.on("schema",()=>{s+="♻️",i()}),e.emit("node",n);const o=n.props.definition.library,a={FormKit:bo(DR),...o};return e.expose({node:n}),()=>Qi(xR,{schema:r.value,data:n.context,library:a,memoKey:s},{...e.slots})}const DR=Lu(s3,{props:XU,inheritAttrs:!1}),i3=Symbol();function o3(t,e){return t.component(e.alias||"FormKit",DR).component(e.schemaAlias||"FormKitSchema",xR),{get:Ml,setLocale:n=>{var r;!((r=e.config)===null||r===void 0)&&r.rootConfig&&(e.config.rootConfig.locale=n)},clearErrors:QU,setErrors:GU,submit:YA,reset:XA}}const MR=Symbol.for("FormKitOptions"),a3=Symbol.for("FormKitConfig"),l3={install(t,e){const n=Object.assign({alias:"FormKit",schemaAlias:"FormKitSchema"},typeof e=="function"?e():e),r=eU(n.config||{});n.config={rootConfig:r},t.config.globalProperties.$formkit=o3(t,n),t.provide(MR,n),t.provide(a3,r)}},c3=typeof window<"u",Lf=["help","label","ignore","disabled","preserve",/^preserve(-e|E)rrors/,/^[a-z]+(?:-visibility|Visibility|-behavior|Behavior)$/,/^[a-zA-Z-]+(?:-class|Class)$/,"prefixIcon","suffixIcon",/^[a-zA-Z-]+(?:-icon|Icon)$/];function A0(t,e){e.classes&&Object.keys(e.classes).forEach(n=>{typeof n=="string"&&(t.props[`_${n}Class`]=e.classes[n],Ra(e.classes[n])&&n==="inner"&&Object.values(e.classes[n]))})}function u3(t){return t?["Submit","SubmitRaw","SubmitInvalid"].reduce((n,r)=>{const s=`on${r}`;return s in t&&typeof t[s]=="function"&&(n[s]=t[s]),n},{}):{}}function h3(t,e,n={}){var r;const s=Object.assign({},It(MR)||{},n),i=It(i3,Me(c3?document:void 0)),o=Ar(),a=u3(o==null?void 0:o.vnode.props),l=["modelValue","model-value"].some(I=>{var C;return I in((C=o==null?void 0:o.vnode.props)!==null&&C!==void 0?C:{})});let c=!1;Fu(()=>{c=!0});const u=t.modelValue!==void 0?t.modelValue:Pn(e.attrs.value);function h(){var I;const C={...Ei(t),...a,type:(I=t.type)!==null&&I!==void 0?I:"text",__root:i.value,__slots:e.slots},E=Jv(Ei(e.attrs),Lf);E.key||(E.key=$o()),C.attrs=E;const R=Zv(Ei(e.attrs),Lf);for(const U in R)C[Hi(U)]=R[U];const M={props:{}};return A0(M,t),Object.assign(C,M.props),typeof C.type!="string"&&(C.definition=C.type,delete C.type),C}const f=h(),d=f.ignore?null:t.parent||It(I0,null),m=HU(Js(s||{},{name:t.name||void 0,value:u,parent:d,plugins:(s.plugins||[]).concat((r=t.plugins)!==null&&r!==void 0?r:[]),config:t.config||{},props:f,index:t.index,sync:!!kn(e.attrs.sync||e.attrs.dynamic)},!1,!0));m.props.definition||fn(600,m);const p=Me(new Set(m.props.definition.props||[]));m.on("added-props",({payload:I})=>{Array.isArray(I)&&I.forEach(C=>p.value.add(C))});const g=Xe(()=>Lf.concat([...p.value]).reduce((I,C)=>(typeof C=="string"?(I.push(Hi(C)),I.push(WA(C))):I.push(C),I),[]));Wn(()=>A0(m,t));const y=Ei(t);for(const I in y)Yt(()=>t[I],()=>{t[I]!==void 0&&(m.props[I]=t[I])});Wn(()=>{m.props.__root=i.value});const w=new Set,b=Ei(e.attrs);Wn(()=>{T(Zv(b,g.value))});function T(I){w.forEach(C=>{C(),w.delete(C)});for(const C in I){const E=Hi(C);w.add(Yt(()=>e.attrs[C],()=>{m.props[E]=e.attrs[C]}))}}if(Wn(()=>{const I=Jv(Ei(e.attrs),g.value);"multiple"in I&&(I.multiple=kn(I.multiple)),typeof I.onBlur=="function"&&(I.onBlur=x5(I.onBlur)),m.props.attrs=Object.assign({},m.props.attrs||{},I)}),Wn(()=>{var I;const C=((I=t.errors)!==null&&I!==void 0?I:[]).map(E=>Fn({key:Mg(E),type:"error",value:E,meta:{source:"prop"}}));m.store.apply(C,E=>E.type==="error"&&E.meta.source==="prop")}),m.type!=="input"){const I=`${m.name}-prop`;Wn(()=>{var C;const E=(C=t.inputErrors)!==null&&C!==void 0?C:{},R=Object.keys(E);R.length||m.clearErrors(!0,I);const M=R.reduce((U,V)=>{let H=E[V];return typeof H=="string"&&(H=[H]),Array.isArray(H)&&(U[V]=H.map(ve=>Fn({key:ve,type:"error",value:ve,meta:{source:I}}))),U},{});m.store.apply(M,U=>U.type==="error"&&U.meta.source===I)})}Wn(()=>Object.assign(m.config,t.config)),m.type!=="input"&&da(I0,m);let k;return m.on("modelUpdated",()=>{var I,C;e.emit("inputRaw",(I=m.context)===null||I===void 0?void 0:I.value,m),c&&e.emit("input",(C=m.context)===null||C===void 0?void 0:C.value,m),l&&m.context&&(k=Pn(m.value),e.emit("update:modelValue",np(m.value)))}),l&&(Yt(FC(t,"modelValue"),I=>{Ht(k,I)||m.input(I,!1)},{deep:!0}),m.value!==u&&m.emit("modelUpdated")),Vp(()=>m.destroy()),m}const f3=function(e){e.ledger.count("blocking",E=>E.blocking);const n=Me(!e.ledger.value("blocking"));e.ledger.count("errors",E=>E.type==="error");const r=Me(!!e.ledger.value("errors"));let s=!1;Du(()=>{s=!0});const i=Qn(e.store.reduce((E,R)=>(R.visible&&(E[R.key]=R),E),{})),o=Me(e.props.validationVisibility||(e.props.type==="checkbox"?"dirty":"blur"));e.on("prop:validationVisibility",({payload:E})=>{o.value=E});const a=Me(o.value==="live"),l=Me(e.children.map(E=>E.uid)),c=Xe(()=>{if(!b.state)return!1;if(b.state.submitted)return!0;if(!a.value&&!b.state.settled)return!1;switch(o.value){case"live":return!0;case"blur":return b.state.blurred;case"dirty":return b.state.dirty;default:return!1}}),u=Xe(()=>b&&h.value?n.value&&!r.value:b.state.dirty&&!En(b.value)),h=Me(Array.isArray(e.props.parsedRules)&&e.props.parsedRules.length>0);e.on("prop:parsedRules",({payload:E})=>{h.value=Array.isArray(E)&&E.length>0});const f=Xe(()=>{const E={};for(const R in i){const M=i[R];(M.type!=="validation"||c.value)&&(E[R]=M)}return E}),d=Qn(e.store.reduce((E,R)=>(R.type==="ui"&&R.visible&&(E[R.key]=R),E),{})),m=Qn({}),p=new Proxy(m,{get(...E){const[R,M]=E;let U=Reflect.get(...E);return!U&&typeof M=="string"&&!oe(R,M)&&!M.startsWith("__v")&&il(e).watch(H=>{const ve=typeof H.config.rootClasses=="function"?H.config.rootClasses(M,H):{},Se=H.config.classes?Rc(M,H,H.config.classes[M]):{},K=Rc(M,H,H.props[`_${M}Class`]),ae=Rc(M,H,H.props[`${M}Class`]);U=KU(H,M,ve,Se,K,ae),R[M]=U??""}),U}}),g=Xe(()=>{const E=[];b.help&&E.push(`help-${e.props.id}`);for(const R in f.value)E.push(`${e.props.id}-${R}`);return E.length?E.join(" "):void 0}),y=Me(e.value),w=Me(e.value),b=Qn({_value:w,attrs:e.props.attrs,disabled:e.props.disabled,describedBy:g,fns:{length:E=>Object.keys(E).length,number:E=>Number(E),string:E=>String(E),json:E=>JSON.stringify(E),eq:Ht},handlers:{blur:E=>{e&&(e.store.set(Fn({key:"blurred",visible:!1,value:!0})),typeof e.props.attrs.onBlur=="function"&&e.props.attrs.onBlur(E))},touch:()=>{var E;const R=b.dirtyBehavior==="compare";if(!((E=e.store.dirty)===null||E===void 0)&&E.value&&!R)return;const M=!Ht(e.props._init,e._value);!M&&!R||e.store.set(Fn({key:"dirty",visible:!1,value:M}))},DOMInput:E=>{e.input(E.target.value),e.emit("dom-input-event",E)}},help:e.props.help,id:e.props.id,items:l,label:e.props.label,messages:f,node:bo(e),options:e.props.options,defaultMessagePlacement:!0,slots:e.props.__slots,state:{blurred:!1,complete:u,dirty:!1,empty:En(y),submitted:!1,settled:e.isSettled,valid:n,errors:r,rules:h,validationVisible:c},type:e.props.type,family:e.props.family,ui:d,value:y,classes:p});e.on("created",()=>{Ht(b.value,e.value)||(w.value=e.value,y.value=e.value,Wl(y),Wl(w)),(async()=>(await e.settled,e&&(e.props._init=Pn(e.value))))()}),e.on("settled",({payload:E})=>{b.state.settled=E});function T(E){E.forEach(R=>{R=Hi(R),oe(b,R)||(b[R]=e.props[R]),e.on(`prop:${R}`,({payload:M})=>{b[R]=M})})}T((()=>{const E=["__root","help","label","disabled","options","type","attrs","preserve","preserveErrors","id","dirtyBehavior"],R=/^[a-zA-Z-]+(?:-icon|Icon)$/,M=Object.keys(e.props).filter(U=>R.test(U));return E.concat(M)})());function I(E){E.props&&T(E.props)}e.props.definition&&I(e.props.definition),e.on("added-props",({payload:E})=>T(E)),e.on("input",({payload:E})=>{e.type!=="input"&&!Oe(E)&&!tr(E)?w.value=np(E):(w.value=E,Wl(w))}),e.on("commitRaw",({payload:E})=>{e.type!=="input"&&!Oe(E)&&!tr(E)?y.value=w.value=np(E):(y.value=w.value=E,Wl(y)),e.emit("modelUpdated")}),e.on("commit",({payload:E})=>{(!b.state.dirty||b.dirtyBehavior==="compare")&&e.isCreated&&s&&b.handlers.touch(),u&&e.type==="input"&&r.value&&!kn(e.props.preserveErrors)&&e.store.filter(R=>{var M;return!(R.type==="error"&&((M=R.meta)===null||M===void 0?void 0:M.autoClear)===!0)}),e.type==="list"&&e.sync&&(l.value=e.children.map(R=>R.uid)),b.state.empty=En(E)});const C=async E=>{E.type==="ui"&&E.visible&&!E.meta.showAsMessage?d[E.key]=E:E.visible?i[E.key]=E:E.type==="state"&&(b.state[E.key]=!!E.value)};e.on("message-added",E=>C(E.payload)),e.on("message-updated",E=>C(E.payload)),e.on("message-removed",({payload:E})=>{delete d[E.key],delete i[E.key],delete b.state[E.key]}),e.on("settled:blocking",()=>{n.value=!0}),e.on("unsettled:blocking",()=>{n.value=!1}),e.on("settled:errors",()=>{r.value=!1}),e.on("unsettled:errors",()=>{r.value=!0}),Yt(c,E=>{E&&(a.value=!0)}),e.context=b,e.emit("context",e,!1),e.on("destroyed",()=>{e.context=void 0,e=null})},d3=(t={})=>{G9();const{rules:e={},locales:n={},inputs:r={},messages:s={},locale:i=void 0,theme:o=void 0,iconLoaderUrl:a=void 0,iconLoader:l=void 0,icons:c={},...u}=t,h=y9({..._9,...e||{}}),f=L9(Js({en:M9,...n||{}},s)),d=YU(U4,r),m=U9(o,c,a,l);return Js({plugins:[d,m,f3,f,h],...i?{config:{locale:i}}:{}},u||{},!0)};var p3='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M8,15c-3.86,0-7-3.14-7-7S4.14,1,8,1s7,3.14,7,7-3.14,7-7,7Zm0-13c-3.31,0-6,2.69-6,6s2.69,6,6,6,6-2.69,6-6-2.69-6-6-6Z" fill="currentColor"/><path d="M8,11.5c-.28,0-.5-.22-.5-.5V5c0-.28,.22-.5,.5-.5s.5,.22,.5,.5v6c0,.28-.22,.5-.5,.5Z" fill="currentColor"/><path d="M11,8.5H5c-.28,0-.5-.22-.5-.5s.22-.5,.5-.5h6c.28,0,.5,.22,.5,.5s-.22,.5-.5,.5Z" fill="currentColor"/></svg>',R0='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 27"><polygon fill="currentColor" points="26.99 0 10.13 17.17 4.69 11.63 0 16.41 10.4 27 15.05 22.27 15.09 22.31 32 5.1 26.99 0"/></svg>',m3='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><circle fill="currentColor" cx="16" cy="16" r="16"/></svg>',C0='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 16"><path d="M10,12.5c-.13,0-.26-.05-.35-.15L1.65,4.35c-.2-.2-.2-.51,0-.71,.2-.2,.51-.2,.71,0L10.35,11.65c.2,.2,.2,.51,0,.71-.1,.1-.23,.15-.35,.15Z" fill="currentColor"/><path d="M2,12.5c-.13,0-.26-.05-.35-.15-.2-.2-.2-.51,0-.71L9.65,3.65c.2-.2,.51-.2,.71,0,.2,.2,.2,.51,0,.71L2.35,12.35c-.1,.1-.23,.15-.35,.15Z" fill="currentColor"/></svg>',g3='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15"><path fill="currentColor" d="M7.56,13.88c-.28,0-.5-.22-.5-.5s.22-.5,.5-.5c2.96,0,5.38-2.41,5.38-5.38S10.53,2.12,7.56,2.12c-.28,0-.5-.22-.5-.5s.22-.5,.5-.5c3.52,0,6.38,2.86,6.38,6.38s-2.86,6.38-6.38,6.38Z"/></svg>',_3='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15"><path fill="currentColor" d="M11.41,8.41h0l1.14-.93,1.14-.93c.48-.39,.37-.74-.25-.77l-1.58-.09-2.5-.14-.41-1.05s0,0,0,0l-.53-1.38-.53-1.38c-.22-.58-.59-.58-.81,0l-1.07,2.75s0,0,0,0l-.41,1.05-2.5,.14-1.58,.09c-.62,.03-.73,.38-.25,.77l1.14,.93,1.14,.93h0l.87,.71-.57,2.15-.47,1.79c-.16,.6,.14,.81,.66,.48l2.48-1.6h0s.94-.61,.94-.61l.94,.61h0s1.24,.8,1.24,.8l1.24,.8c.52,.33,.82,.12,.66-.48l-.47-1.79-.57-2.15,.87-.71Z"/></svg>',y3='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M14.5,4H1.5c-.28,0-.5-.22-.5-.5s.22-.5,.5-.5H14.5c.28,0,.5,.22,.5,.5s-.22,.5-.5,.5Z" fill="currentColor"/><path d="M11.02,3.81l-.44-1.46c-.06-.21-.26-.36-.48-.36H5.9c-.22,0-.41,.14-.48,.36l-.44,1.46-.96-.29,.44-1.46c.19-.64,.77-1.07,1.44-1.07h4.2c.67,0,1.24,.43,1.44,1.07l.44,1.46-.96,.29Z" fill="currentColor"/><path d="M11.53,15H4.47c-.81,0-1.47-.64-1.5-1.45l-.34-9.87,1-.03,.34,9.87c0,.27,.23,.48,.5,.48h7.07c.27,0,.49-.21,.5-.48l.34-9.87,1,.03-.34,9.87c-.03,.81-.69,1.45-1.5,1.45Z" fill="currentColor"/><path d="M6.5,11.62c-.28,0-.5-.22-.5-.5V7.12c0-.28,.22-.5,.5-.5s.5,.22,.5,.5v4c0,.28-.22,.5-.5,.5Z" fill="currentColor"/><path d="M9.5,11.62c-.28,0-.5-.22-.5-.5V7.12c0-.28,.22-.5,.5-.5s.5,.22,.5,.5v4c0,.28-.22,.5-.5,.5Z" fill="currentColor"/></svg>',v3='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 12"><path d="M3.09,11.01c-.18,0-.36-.05-.53-.14-.35-.19-.57-.56-.57-.96V2.09c0-.4,.22-.77,.57-.96,.35-.19,.78-.18,1.12,.03l3.03,1.92c.23,.15,.3,.46,.15,.69-.15,.23-.46,.3-.69,.15l-3.03-1.92s-.07-.02-.1,0-.05,.05-.05,.09v7.82s.02,.07,.05,.09c.03,.02,.07,.02,.1,0l3.03-1.92c.23-.15,.54-.08,.69,.15,.15,.23,.08,.54-.15,.69l-3.03,1.92c-.18,.11-.38,.17-.59,.17Z" fill="currentColor"/><path d="M7.04,10.98c-.18,0-.36-.04-.52-.13-.36-.19-.58-.56-.58-.97V2.11c0-.41,.22-.78,.58-.97,.36-.19,.79-.17,1.13,.05l5.87,3.89c.31,.2,.49,.55,.49,.92,0,.37-.18,.71-.49,.92l-5.87,3.89c-.18,.12-.39,.18-.61,.18Zm0-8.97s-.03,0-.05,.01c-.03,.02-.05,.05-.05,.09v7.77s.02,.07,.05,.09c.03,.02,.07,.02,.1,0l5.87-3.89,.28-.58-.28,.42L7.09,2.03s-.04-.02-.05-.02Z" fill="currentColor"/></svg>',E3='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 12"><path d="M12.91,11.01c-.2,0-.41-.06-.59-.17l-3.03-1.92c-.23-.15-.3-.46-.15-.69,.15-.23,.46-.3,.69-.15l3.03,1.92s.07,.02,.1,0,.05-.05,.05-.09V2.09s-.02-.07-.05-.09c-.03-.02-.07-.02-.1,0l-3.03,1.92c-.23,.15-.54,.08-.69-.15-.15-.23-.08-.54,.15-.69l3.03-1.92c.34-.21,.77-.23,1.12-.03,.35,.19,.57,.56,.57,.96v7.82c0,.4-.22,.77-.57,.96-.17,.09-.35,.14-.53,.14Z" fill="currentColor"/><path d="M8.96,10.98c-.21,0-.42-.06-.61-.18L2.49,6.92c-.31-.2-.49-.55-.49-.92,0-.37,.18-.71,.49-.92L8.36,1.2c.34-.22,.77-.24,1.13-.05,.36,.19,.58,.56,.58,.97v7.77c0,.41-.22,.78-.58,.97-.16,.09-.34,.13-.52,.13ZM2.76,5.5l.28,.42s-.04,.06-.04,.08l5.92,3.97s.07,.02,.1,0c.03-.02,.05-.05,.05-.09V2.11s-.02-.07-.05-.09c-.03-.02-.07-.02-.1,0L3.04,5.92l-.28-.42Z" fill="currentColor"/></svg>',w3='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 16"><path d="M4.5,13c-.28,0-.5-.22-.5-.5V3.5c0-.28,.22-.5,.5-.5s.5,.22,.5,.5V12.5c0,.28-.22,.5-.5,.5Z" fill="currentColor"/><path d="M4.5,14c-.13,0-.26-.05-.35-.15L.65,10.35c-.2-.2-.2-.51,0-.71,.2-.2,.51-.2,.71,0l3.15,3.15,3.15-3.15c.2-.2,.51-.2,.71,0,.2,.2,.2,.51,0,.71l-3.5,3.5c-.1,.1-.23,.15-.35,.15Z" fill="currentColor"/></svg>',T3='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 16"><path d="M4.5,14c-.28,0-.5-.22-.5-.5V4.5c0-.28,.22-.5,.5-.5s.5,.22,.5,.5V13.5c0,.28-.22,.5-.5,.5Z" fill="currentColor"/><path d="M8,7.5c-.13,0-.26-.05-.35-.15l-3.15-3.15L1.35,7.35c-.2,.2-.51,.2-.71,0-.2-.2-.2-.51,0-.71l3.5-3.5c.2-.2,.51-.2,.71,0l3.5,3.5c.2,.2,.2,.51,0,.71-.1,.1-.23,.15-.35,.15Z" fill="currentColor"/></svg>',b3='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 7"><path d="M8,6.5c-.13,0-.26-.05-.35-.15L3.15,1.85c-.2-.2-.2-.51,0-.71,.2-.2,.51-.2,.71,0l4.15,4.15L12.15,1.15c.2-.2,.51-.2,.71,0,.2,.2,.2,.51,0,.71l-4.5,4.5c-.1,.1-.23,.15-.35,.15Z" fill="currentColor"/></svg>',I3='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7 16"><path d="M5.5,13c-.13,0-.26-.05-.35-.15L.65,8.35c-.2-.2-.2-.51,0-.71L5.15,3.15c.2-.2,.51-.2,.71,0,.2,.2,.2,.51,0,.71L1.71,8l4.15,4.15c.2,.2,.2,.51,0,.71-.1,.1-.23,.15-.35,.15Z" fill="currentColor"/></svg>',A3='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7 16"><path d="M1.5,13c-.13,0-.26-.05-.35-.15-.2-.2-.2-.51,0-.71l4.15-4.15L1.15,3.85c-.2-.2-.2-.51,0-.71,.2-.2,.51-.2,.71,0L6.35,7.65c.2,.2,.2,.51,0,.71L1.85,12.85c-.1,.1-.23,.15-.35,.15Z" fill="currentColor"/></svg>',S0='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 16"><path d="M12.5,16H2.5c-.83,0-1.5-.67-1.5-1.5V1.5c0-.83,.67-1.5,1.5-1.5h7.09c.4,0,.78,.16,1.06,.44l2.91,2.91c.28,.28,.44,.66,.44,1.06V14.5c0,.83-.67,1.5-1.5,1.5ZM2.5,1c-.28,0-.5,.22-.5,.5V14.5c0,.28,.22,.5,.5,.5H12.5c.28,0,.5-.22,.5-.5V4.41c0-.13-.05-.26-.15-.35l-2.91-2.91c-.09-.09-.22-.15-.35-.15H2.5Z" fill="currentColor"/><path d="M13.38,5h-2.91c-.81,0-1.47-.66-1.47-1.47V.62c0-.28,.22-.5,.5-.5s.5,.22,.5,.5V3.53c0,.26,.21,.47,.47,.47h2.91c.28,0,.5,.22,.5,.5s-.22,.5-.5,.5Z" fill="currentColor"/><path d="M10,13H5c-.28,0-.5-.22-.5-.5s.22-.5,.5-.5h5c.28,0,.5,.22,.5,.5s-.22,.5-.5,.5Z" fill="currentColor"/><path d="M10,10H5c-.28,0-.5-.22-.5-.5s.22-.5,.5-.5h5c.28,0,.5,.22,.5,.5s-.22,.5-.5,.5Z" fill="currentColor"/><path d="M7,7h-2c-.28,0-.5-.22-.5-.5s.22-.5,.5-.5h2c.28,0,.5,.22,.5,.5s-.22,.5-.5,.5Z" fill="currentColor"/></svg>',R3='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M5.5,14H2.5c-.28,0-.5-.22-.5-.5v-3c0-.13,.05-.26,.15-.35L7.15,5.15c.2-.2,.51-.2,.71,0l3,3c.2,.2,.2,.51,0,.71l-5,5c-.09,.09-.22,.15-.35,.15Zm-2.5-1h2.29l4.5-4.5-2.29-2.29L3,10.71v2.29Z" fill="currentColor"/><path d="M13.37,5.62l-1.38,1.38-3-3,1.38-1.38c.42-.42,.96-.62,1.5-.62s1.08,.2,1.5,.62c.83,.83,.83,2.17,0,3Z" fill="currentColor"/><path d="M12.5,8c-.13,0-.26-.05-.35-.15L8.15,3.85c-.2-.2-.2-.51,0-.71,.2-.2,.51-.2,.71,0l4,4c.2,.2,.2,.51,0,.71-.1,.1-.23,.15-.35,.15Z" fill="currentColor"/></svg>',C3='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M14.5,16H1.5c-.83,0-1.5-.67-1.5-1.5V2.5c0-.83,.67-1.5,1.5-1.5H14.5c.83,0,1.5,.67,1.5,1.5V14.5c0,.83-.67,1.5-1.5,1.5ZM1.5,2c-.28,0-.5,.22-.5,.5V14.5c0,.28,.22,.5,.5,.5H14.5c.28,0,.5-.22,.5-.5V2.5c0-.28-.22-.5-.5-.5H1.5Z" fill="currentColor"/><path d="M4.5,4c-.28,0-.5-.22-.5-.5V.5c0-.28,.22-.5,.5-.5s.5,.22,.5,.5V3.5c0,.28-.22,.5-.5,.5Z" fill="currentColor"/><path d="M11.5,4c-.28,0-.5-.22-.5-.5V.5c0-.28,.22-.5,.5-.5s.5,.22,.5,.5V3.5c0,.28-.22,.5-.5,.5Z" fill="currentColor"/><path d="M15.5,6H.5c-.28,0-.5-.22-.5-.5s.22-.5,.5-.5H15.5c.28,0,.5,.22,.5,.5s-.22,.5-.5,.5Z" fill="currentColor"/></svg>';const S3={add:p3,arrowDown:w3,arrowUp:T3,check:R0,close:C0,checkboxDecorator:R0,date:C3,fileItem:S0,fileRemove:C0,noFiles:S0,radioDecorator:m3,select:b3,spinner:g3,star:_3,trash:y3,fastForward:v3,right:A3,left:I3,rewind:E3,color:R3},LR=new Set,Jt=new WeakMap,po=new WeakMap,ei=new WeakMap,fp=new WeakMap,P3=new WeakMap,mo=new WeakMap,Au=new WeakMap,ua=new WeakSet;let us,Wg=0,zg=0;const vr="__aa_tgt",ol="__aa_del",Ru="__aa_new",k3=t=>{const e=M3(t);e&&e.forEach(n=>L3(n))},N3=t=>{t.forEach(e=>{e.target===us&&x3(),Jt.has(e.target)&&hi(e.target)})};function O3(t){const e=fp.get(t);e==null||e.disconnect();let n=Jt.get(t),r=0;const s=5;n||(n=go(t),Jt.set(t,n));const{offsetWidth:i,offsetHeight:o}=us,l=[n.top-s,i-(n.left+s+n.width),o-(n.top+s+n.height),n.left-s].map(u=>`${-1*Math.floor(u)}px`).join(" "),c=new IntersectionObserver(()=>{++r>1&&hi(t)},{root:us,threshold:1,rootMargin:l});c.observe(t),fp.set(t,c)}function hi(t){clearTimeout(Au.get(t));const e=qh(t),n=al(e)?500:e.duration;Au.set(t,setTimeout(async()=>{const r=ei.get(t);try{await(r==null?void 0:r.finished),Jt.set(t,go(t)),O3(t)}catch{}},n))}function x3(){clearTimeout(Au.get(us)),Au.set(us,setTimeout(()=>{LR.forEach(t=>UR(t,e=>VR(()=>hi(e))))},100))}function D3(t){setTimeout(()=>{P3.set(t,setInterval(()=>VR(hi.bind(null,t)),2e3))},Math.round(2e3*Math.random()))}function VR(t){typeof requestIdleCallback=="function"?requestIdleCallback(()=>t()):requestAnimationFrame(()=>t())}let dp,xi;typeof window<"u"&&(us=document.documentElement,dp=new MutationObserver(k3),xi=new ResizeObserver(N3),window.addEventListener("scroll",()=>{zg=window.scrollY,Wg=window.scrollX}),xi.observe(us));function M3(t){return t.reduce((r,s)=>[...r,...Array.from(s.addedNodes),...Array.from(s.removedNodes)],[]).every(r=>r.nodeName==="#comment")?!1:t.reduce((r,s)=>{if(r===!1)return!1;if(s.target instanceof Element){if(Vf(s.target),!r.has(s.target)){r.add(s.target);for(let i=0;i<s.target.children.length;i++){const o=s.target.children.item(i);if(o){if(ol in o)return!1;Vf(s.target,o),r.add(o)}}}if(s.removedNodes.length)for(let i=0;i<s.removedNodes.length;i++){const o=s.removedNodes[i];if(ol in o)return!1;o instanceof Element&&(r.add(o),Vf(s.target,o),po.set(o,[s.previousSibling,s.nextSibling]))}}return r},new Set)}function Vf(t,e){!e&&!(vr in t)?Object.defineProperty(t,vr,{value:t}):e&&!(vr in e)&&Object.defineProperty(e,vr,{value:t})}function L3(t){var e;const n=t.isConnected,r=Jt.has(t);n&&po.has(t)&&po.delete(t),ei.has(t)&&((e=ei.get(t))===null||e===void 0||e.cancel()),Ru in t?P0(t):r&&n?$3(t):r&&!n?F3(t):P0(t)}function Hn(t){return Number(t.replace(/[^0-9.\-]/g,""))}function V3(t){let e=t.parentElement;for(;e;){if(e.scrollLeft||e.scrollTop)return{x:e.scrollLeft,y:e.scrollTop};e=e.parentElement}return{x:0,y:0}}function go(t){const e=t.getBoundingClientRect(),{x:n,y:r}=V3(t);return{top:e.top+r,left:e.left+n,width:e.width,height:e.height}}function $R(t,e,n){let r=e.width,s=e.height,i=n.width,o=n.height;const a=getComputedStyle(t);if(a.getPropertyValue("box-sizing")==="content-box"){const c=Hn(a.paddingTop)+Hn(a.paddingBottom)+Hn(a.borderTopWidth)+Hn(a.borderBottomWidth),u=Hn(a.paddingLeft)+Hn(a.paddingRight)+Hn(a.borderRightWidth)+Hn(a.borderLeftWidth);r-=u,i-=u,s-=c,o-=c}return[r,i,s,o].map(Math.round)}function qh(t){return vr in t&&mo.has(t[vr])?mo.get(t[vr]):{duration:250,easing:"ease-in-out"}}function FR(t){if(vr in t)return t[vr]}function Kg(t){const e=FR(t);return e?ua.has(e):!1}function UR(t,...e){e.forEach(n=>n(t,mo.has(t)));for(let n=0;n<t.children.length;n++){const r=t.children.item(n);r&&e.forEach(s=>s(r,mo.has(r)))}}function Gg(t){return Array.isArray(t)?t:[t]}function al(t){return typeof t=="function"}function $3(t){const e=Jt.get(t),n=go(t);if(!Kg(t))return Jt.set(t,n);let r;if(!e)return;const s=qh(t);if(typeof s!="function"){const i=e.left-n.left,o=e.top-n.top,[a,l,c,u]=$R(t,e,n),h={transform:`translate(${i}px, ${o}px)`},f={transform:"translate(0, 0)"};a!==l&&(h.width=`${a}px`,f.width=`${l}px`),c!==u&&(h.height=`${c}px`,f.height=`${u}px`),r=t.animate([h,f],{duration:s.duration,easing:s.easing})}else{const[i]=Gg(s(t,"remain",e,n));r=new Animation(i),r.play()}ei.set(t,r),Jt.set(t,n),r.addEventListener("finish",hi.bind(null,t))}function P0(t){Ru in t&&delete t[Ru];const e=go(t);Jt.set(t,e);const n=qh(t);if(!Kg(t))return;let r;if(typeof n!="function")r=t.animate([{transform:"scale(.98)",opacity:0},{transform:"scale(0.98)",opacity:0,offset:.5},{transform:"scale(1)",opacity:1}],{duration:n.duration*1.5,easing:"ease-in"});else{const[s]=Gg(n(t,"add",e));r=new Animation(s),r.play()}ei.set(t,r),r.addEventListener("finish",hi.bind(null,t))}function k0(t,e){var n;t.remove(),Jt.delete(t),po.delete(t),ei.delete(t),(n=fp.get(t))===null||n===void 0||n.disconnect(),setTimeout(()=>{if(ol in t&&delete t[ol],Object.defineProperty(t,Ru,{value:!0,configurable:!0}),e&&t instanceof HTMLElement)for(const r in e)t.style[r]=""},0)}function F3(t){var e;if(!po.has(t)||!Jt.has(t))return;const[n,r]=po.get(t);Object.defineProperty(t,ol,{value:!0,configurable:!0});const s=window.scrollX,i=window.scrollY;if(r&&r.parentNode&&r.parentNode instanceof Element?r.parentNode.insertBefore(t,r):n&&n.parentNode?n.parentNode.appendChild(t):(e=FR(t))===null||e===void 0||e.appendChild(t),!Kg(t))return k0(t);const[o,a,l,c]=B3(t),u=qh(t),h=Jt.get(t);(s!==Wg||i!==zg)&&U3(t,s,i,u);let f,d={position:"absolute",top:`${o}px`,left:`${a}px`,width:`${l}px`,height:`${c}px`,margin:"0",pointerEvents:"none",transformOrigin:"center",zIndex:"100"};if(!al(u))Object.assign(t.style,d),f=t.animate([{transform:"scale(1)",opacity:1},{transform:"scale(.98)",opacity:0}],{duration:u.duration,easing:"ease-out"});else{const[m,p]=Gg(u(t,"remove",h));(p==null?void 0:p.styleReset)!==!1&&(d=(p==null?void 0:p.styleReset)||d,Object.assign(t.style,d)),f=new Animation(m),f.play()}ei.set(t,f),f.addEventListener("finish",k0.bind(null,t,d))}function U3(t,e,n,r){const s=Wg-e,i=zg-n,o=document.documentElement.style.scrollBehavior;if(getComputedStyle(us).scrollBehavior==="smooth"&&(document.documentElement.style.scrollBehavior="auto"),window.scrollTo(window.scrollX+s,window.scrollY+i),!t.parentElement)return;const l=t.parentElement;let c=l.clientHeight,u=l.clientWidth;const h=performance.now();function f(){requestAnimationFrame(()=>{if(!al(r)){const d=c-l.clientHeight,m=u-l.clientWidth;h+r.duration>performance.now()?(window.scrollTo({left:window.scrollX-m,top:window.scrollY-d}),c=l.clientHeight,u=l.clientWidth,f()):document.documentElement.style.scrollBehavior=o}})}f()}function B3(t){const e=Jt.get(t),[n,,r]=$R(t,e,go(t));let s=t.parentElement;for(;s&&(getComputedStyle(s).position==="static"||s instanceof HTMLBodyElement);)s=s.parentElement;s||(s=document.body);const i=getComputedStyle(s),o=Jt.get(s)||go(s),a=Math.round(e.top-o.top)-Hn(i.borderTopWidth),l=Math.round(e.left-o.left)-Hn(i.borderLeftWidth);return[a,l,n,r]}function j3(t,e={}){return dp&&xi&&(window.matchMedia("(prefers-reduced-motion: reduce)").matches&&!al(e)&&!e.disrespectUserMotionPreference||(ua.add(t),getComputedStyle(t).position==="static"&&Object.assign(t.style,{position:"relative"}),UR(t,hi,D3,s=>xi==null?void 0:xi.observe(s)),al(e)?mo.set(t,e):mo.set(t,{duration:250,easing:"ease-in-out",...e}),dp.observe(t,{childList:!0}),LR.add(t))),Object.freeze({parent:t,enable:()=>{ua.add(t)},disable:()=>{ua.delete(t)},isEnabled:()=>ua.has(t)})}const pp=new Map,q3=new Map;let Ai=null,N0=0;function H3(){O0(),Ai=new MutationObserver(()=>{O0(),!pp.size&&Ai&&(Ai.disconnect(),Ai=null)}),Ai.observe(document,{childList:!0,subtree:!0})}function O0(){pp.forEach((t,e)=>{document.getElementById(e)&&(clearTimeout(N0),pp.delete(e),N0=setTimeout(()=>{document.querySelectorAll("[data-auto-animate]").forEach(s=>{let i;const o=s.getAttribute("data-auto-animate");o&&(i=q3.get(o)),j3(s,i||t||{})})},250))})}function W3(t,e={global:["outer","inner"],form:["form"],repeater:["items"]}){return n=>{n.on("created",()=>{var r;if(typeof((r=n.props.definition)===null||r===void 0?void 0:r.schema)=="function"){if(typeof window===void 0)return;const s=n.props.definition.schema;n.props.definition.schema=i=>{const o=s(i);return Array.isArray(o)?o[0]:o}}!Ai&&typeof window<"u"&&H3()})}}const x0=te("badge",()=>({$el:"span",attrs:{role:"presentation"}})),z3=te("stepActions",()=>({$el:"div"})),K3=te("stepInner","div"),G3=te("stepNext",()=>({$el:"div",if:"$isLastStep === false || $stepIndex === 0",children:[{$cmp:"FormKit",bind:"$nextAttrs",props:{type:"button",label:{if:"$nextLabel",then:"$nextLabel",else:"$ui.next.value"},"data-next":"$isLastStep === false",onClick:"$handlers.next"}}]})),Q3=te("stepOuter",()=>({$el:"div",attrs:{key:"$id","data-type":"step","data-disabled":"$disabled || undefined","data-complete":"$state.complete || undefined","data-invalid":"$state.valid === false && $state.validationVisible || undefined","data-errors":"$state.errors || undefined","data-submitted":"$state.submitted || undefined",id:"$id",role:"tabpanel","aria-labelledby":'$node.parent.props.id + "_tab_" + $stepIndex',class:"$classes.step",hidden:"$isActiveStep === false || undefined"}})),Y3=te("stepPrevious",()=>({$el:"div",if:"$isFirstStep === false",children:[{$cmp:"FormKit",bind:"$previousAttrs",props:{type:"button",label:{if:"$previousLabel",then:"$previousLabel",else:"$ui.prev.value"},"data-prev":"$isFirstStep === false",onClick:"$handlers.previous"}}]})),X3=te("steps",()=>({$el:"div"})),J3=(t,e)=>te(`${t}Icon`,()=>{const n=`_raw${t.charAt(0).toUpperCase()}${t.slice(1)}Icon`;return{if:`$step.${t}Icon && $step.${n}`,then:{$el:`${e||"span"}`,attrs:{class:`$classes.${t}Icon + " formkit-icon"`,innerHTML:`$step.${n}`,role:"presentation",onClick:`$handlers.iconClick(${t})`}},else:{if:`$${t}Icon && $${n}`,then:{$el:`${e||"span"}`,attrs:{class:`$classes.${t}Icon + " formkit-icon"`,innerHTML:`$${n}`,role:"presentation",onClick:`$handlers.iconClick(${t})`}}}}})(),Z3=te("tab",()=>({$el:"button",for:["step","index","$steps"],attrs:{key:"$step.id",type:"button",onClick:"$step.makeActive","data-active":"$step.isActiveStep","data-valid":"$step.isValid","data-visited":"$step.hasBeenVisited",role:"tab",id:'$id + "_tab_" + $index',"aria-selected":"$step.isActiveStep || false","aria-controls":"$step.id",tabindex:{if:"$step.isActiveStep",then:"0",else:"-1"}}})),e6=te("tabLabel",()=>({$el:"span"})),t6=te("tabs",()=>({$el:"div",attrs:{role:"tablist"}})),n6=te("multiStepOuter",()=>({$el:"div",attrs:{key:"$id",id:"$id",class:"$classes.outer","data-family":"$family || undefined","data-type":"$type","data-multiple":'$attrs.multiple || ($type != "select" && $options != undefined) || undefined',"data-disabled":"$disabled || undefined","data-complete":"$state.complete || undefined","data-invalid":"$state.valid === false && $state.validationVisible || undefined","data-errors":"$state.errors || undefined","data-submitted":"$state.submitted || undefined"}}));n6(Us(Fo(t6(Z3(wn('$tabStyle === "tab" || ($tabStyle === "progress" && $hideProgressLabels === false)',e6("$step.stepName")),wn("($step.totalErrorCount > 0) && $step.showStepErrors",x0("$step.totalErrorCount")),wn("$step.isValid && $step.hasBeenVisited",x0(J3("validStep"))))),X3("$slots.default")),{attrs:{"data-tab-style":"$tabStyle","data-hide-labels":"$hideProgressLabels"}})),Fs("validStep","check");Q3(K3("$slots.default"),z3(Y3(),G3())),Wi("next"),Wi("prev");const r6={global:{fieldset:"max-w-md border border-gray-400 rounded px-2 pb-1",help:"text-xs text-gray-500",inner:"formkit-disabled:bg-gray-200 formkit-disabled:cursor-not-allowed formkit-disabled:pointer-events-none",input:"appearance-none bg-transparent focus:outline-none focus:ring-0 focus:shadow-none",label:"block mb-1 font-bold text-sm",legend:"font-bold text-sm",loaderIcon:"inline-flex items-center w-4 text-gray-600 animate-spin",message:"text-red-500 mb-1 text-xs",messages:"list-none p-0 mt-1 mb-0",outer:"mb-4 formkit-disabled:opacity-50",prefixIcon:"w-10 flex self-stretch grow-0 shrink-0 rounded-tl rounded-bl border-r border-gray-400 bg-white bg-gradient-to-b from-transparent to-gray-200 [&>svg]:w-full [&>svg]:max-w-[1em] [&>svg]:max-h-[1em] [&>svg]:m-auto",suffixIcon:"w-7 pr-3 p-3 flex self-stretch grow-0 shrink-0 [&>svg]:w-full [&>svg]:max-w-[1em] [&>svg]:max-h-[1em] [&>svg]:m-auto"},"family:box":{decorator:"block relative h-5 w-5 mr-2 rounded bg-white bg-gradient-to-b from-transparent to-gray-200 ring-1 ring-gray-400 peer-checked:ring-blue-500 text-transparent peer-checked:text-blue-500",decoratorIcon:"flex p-[3px] w-full h-full absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2",help:"mb-2 mt-1.5",input:"absolute w-0 h-0 overflow-hidden opacity-0 pointer-events-none peer",inner:"$remove:formkit-disabled:bg-gray-200",label:"$reset text-sm text-gray-700 mt-1 select-none",wrapper:"flex items-center mb-1"},"family:button":{input:"$reset inline-flex items-center bg-blue-600 text-white text-sm font-normal py-3 px-6 rounded focus-visible:outline-2 focus-visible:outline-blue-600 focus-visible:outline-offset-2 formkit-disabled:bg-gray-400 formkit-loading:before:w-4 formkit-loading:before:h-4 formkit-loading:before:mr-2 formkit-loading:before:border formkit-loading:before:border-2 formkit-loading:before:border-r-transparent formkit-loading:before:rounded-3xl formkit-loading:before:border-white formkit-loading:before:animate-spin",wrapper:"mb-1",prefixIcon:"$reset block w-4 -ml-2 mr-2 stretch",suffixIcon:"$reset block w-4 ml-2 stretch"},"family:dropdown":{dropdownWrapper:"my-2 w-full shadow-lg rounded [&::-webkit-scrollbar]:hidden",emptyMessageInner:"flex items-center justify-center text-sm p-2 text-center w-full text-gray-500 [&>span]:mr-3 [&>span]:ml-0",inner:"max-w-md relative flex ring-1 ring-gray-400 focus-within:ring-blue-500 focus-within:ring-2 rounded mb-2 formkit-disabled:focus-within:ring-gray-400 formkit-disabled:focus-within:ring-1 [&>span:first-child]:focus-within:text-blue-500",input:"w-full px-3 py-2",listbox:"bg-white shadow-lg rounded overflow-hidden",listboxButton:"flex w-12 self-stretch justify-center mx-auto",listitem:'pl-7 relative hover:bg-gray-300 data-[is-active="true"]:bg-gray-300 aria-selected:bg-blue-600 aria-selected:text-white data-[is-active="true"]:aria-selected:bg-blue-600 data-[is-active="true"]:aria-selected:bg-blue-700',loaderIcon:"ml-auto",loadMoreInner:"flex items-center justify-center text-sm p-2 text-center w-full text-blue-500 formkit-loading:text-gray-500 cursor-pointer [&>span]:mr-3 [&>span]:ml-0",option:"p-2.5",optionLoading:"pl-2.5 text-gray-400",placeholder:"p-2.5 text-gray-400",selector:"flex w-full justify-between items-center min-h-[2.625em] [&u] cursor-default",selection:"flex w-full",selectedIcon:"block absolute top-1/2 left-2 w-3 -translate-y-1/2",selectIcon:"flex box-content w-4 px-2 self-stretch grow-0 shrink-0 [&>svg]:w-[1em] cursor-pointer"},"family:text":{inner:"flex items-center max-w-full mx-auto ring-1 ring-gray-400 focus-within:ring-blue-500 focus-within:ring-2 [&>label:first-child]:focus-within:text-blue-500 rounded mb-1",input:"w-full px-3 py-2 border-none text-base text-gray-700 placeholder-gray-400"},"family:date":{inner:"flex items-center max-w-md ring-1 ring-gray-400 focus-within:ring-blue-500 focus-within:ring-2 [&>label:first-child]:focus-within:text-blue-500 rounded mb-1",input:"w-full px-3 py-2 border-none text-gray-700 placeholder-gray-400"},color:{inner:"flex max-w-[5.5em] w-full formkit-prefix-icon:max-w-[7.5em] formkit-suffix-icon:formkit-prefix-icon:max-w-[10em]",input:"$reset appearance-none w-full cursor-pointer border-none rounded p-0 m-0 bg-transparent [&::-webkit-color-swatch-wrapper]:p-0 [&::-webkit-color-swatch]:border-none",suffixIcon:"min-w-[2.5em] pr-0 pl-0 m-auto"},file:{fileItem:"flex items-center text-gray-800 mb-1 last:mb-0",fileItemIcon:"w-4 mr-2 shrink-0",fileList:'shrink grow peer px-3 py-2 formkit-multiple:data-[has-multiple="true"]:mb-6',fileName:"break-all grow text-ellipsis",fileRemove:"relative z-[2] ml-auto text-[0px] hover:text-red-500 pl-2 peer-data-[has-multiple=true]:text-sm peer-data-[has-multiple=true]:text-blue-500 peer-data-[has-multiple=true]:ml-3 peer-data-[has-multiple=true]:mb-2 formkit-multiple:bottom-[0.15em] formkit-multiple:pl-0 formkit-multiple:ml-0 formkit-multiple:left-[1em] formkit-multiple:formkit-prefix-icon:left-[3.75em]",fileRemoveIcon:"block text-base w-3 relative z-[2]",inner:"relative max-w-full cursor-pointer formkit-multiple:[&>button]:absolute",input:"cursor-pointer text-transparent absolute top-0 right-0 left-0 bottom-0 opacity-0 z-[2]",noFiles:"flex w-full items-center px-3 py-2 text-gray-400",noFilesIcon:"w-4 mr-2"},radio:{decorator:"rounded-full",decoratorIcon:"w-5 p-[5px]"},range:{inner:"$reset flex items-center max-w-md",input:"$reset w-full mb-1 h-2 p-0 rounded-full",prefixIcon:"$reset w-4 mr-1 flex self-stretch grow-0 shrink-0 [&>svg]:max-w-[1em] [&>svg]:max-h-[1em] [&>svg]:m-auto",suffixIcon:"$reset w-4 ml-1 flex self-stretch grow-0 shrink-0 [&>svg]:max-w-[1em] [&>svg]:max-h-[1em] [&>svg]:m-auto"},select:{inner:"flex relative max-w-full items-center rounded mb-1 ring-1 ring-gray-400 focus-within:ring-blue-500 focus-within:ring-2 [&>span:first-child]:focus-within:text-blue-500",input:'w-full pl-3 pr-8 py-2 border-none text-base text-gray-700 placeholder-gray-400 formkit-multiple:p-0 data-[placeholder="true"]:text-gray-400 formkit-multiple:data-[placeholder="true"]:text-inherit',selectIcon:"flex p-[3px] shrink-0 w-5 mr-2 -ml-[1.5em] h-full pointer-events-none [&>svg]:w-[1em]",option:"formkit-multiple:p-3 formkit-multiple:text-sm text-gray-700"},textarea:{inner:"flex max-w-full rounded mb-1 ring-1 ring-gray-400 focus-within:ring-blue-500 [&>label:first-child]:focus-within:text-blue-500",input:"block w-full h-32 px-3 py-3 border-none text-base text-gray-700 placeholder-gray-400 focus:shadow-outline"}},s6={icons:{...S3},config:{classes:V9(r6)},plugins:[W3()]};/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Ri=typeof window<"u";function i6(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Ne=Object.assign;function $f(t,e){const n={};for(const r in e){const s=e[r];n[r]=Un(s)?s.map(t):t(s)}return n}const Sa=()=>{},Un=Array.isArray,o6=/\/$/,a6=t=>t.replace(o6,"");function Ff(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(r=e.slice(0,l),i=e.slice(l+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=h6(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function l6(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function D0(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function c6(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&_o(e.matched[r],n.matched[s])&&BR(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function _o(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function BR(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!u6(t[n],e[n]))return!1;return!0}function u6(t,e){return Un(t)?M0(t,e):Un(e)?M0(e,t):t===e}function M0(t,e){return Un(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function h6(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var ll;(function(t){t.pop="pop",t.push="push"})(ll||(ll={}));var Pa;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Pa||(Pa={}));function f6(t){if(!t)if(Ri){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),a6(t)}const d6=/^[^#]+#/;function p6(t,e){return t.replace(d6,"#")+e}function m6(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Hh=()=>({left:window.pageXOffset,top:window.pageYOffset});function g6(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=m6(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function L0(t,e){return(history.state?history.state.position-e:-1)+t}const mp=new Map;function _6(t,e){mp.set(t,e)}function y6(t){const e=mp.get(t);return mp.delete(t),e}let v6=()=>location.protocol+"//"+location.host;function jR(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),D0(l,"")}return D0(n,t)+r+s}function E6(t,e,n,r){let s=[],i=[],o=null;const a=({state:f})=>{const d=jR(t,location),m=n.value,p=e.value;let g=0;if(f){if(n.value=d,e.value=f,o&&o===m){o=null;return}g=p?f.position-p.position:0}else r(d);s.forEach(y=>{y(n.value,m,{delta:g,type:ll.pop,direction:g?g>0?Pa.forward:Pa.back:Pa.unknown})})};function l(){o=n.value}function c(f){s.push(f);const d=()=>{const m=s.indexOf(f);m>-1&&s.splice(m,1)};return i.push(d),d}function u(){const{history:f}=window;f.state&&f.replaceState(Ne({},f.state,{scroll:Hh()}),"")}function h(){for(const f of i)f();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:h}}function V0(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Hh():null}}function w6(t){const{history:e,location:n}=window,r={value:jR(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,c,u){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:v6()+t+l;try{e[u?"replaceState":"pushState"](c,"",f),s.value=c}catch(d){console.error(d),n[u?"replace":"assign"](f)}}function o(l,c){const u=Ne({},e.state,V0(s.value.back,l,s.value.forward,!0),c,{position:s.value.position});i(l,u,!0),r.value=l}function a(l,c){const u=Ne({},s.value,e.state,{forward:l,scroll:Hh()});i(u.current,u,!0);const h=Ne({},V0(r.value,l,null),{position:u.position+1},c);i(l,h,!1),r.value=l}return{location:r,state:s,push:a,replace:o}}function T6(t){t=f6(t);const e=w6(t),n=E6(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Ne({location:"",base:t,go:r,createHref:p6.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function b6(t){return typeof t=="string"||t&&typeof t=="object"}function qR(t){return typeof t=="string"||typeof t=="symbol"}const Fr={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},HR=Symbol("");var $0;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})($0||($0={}));function yo(t,e){return Ne(new Error,{type:t,[HR]:!0},e)}function hr(t,e){return t instanceof Error&&HR in t&&(e==null||!!(t.type&e))}const F0="[^/]+?",I6={sensitive:!1,strict:!1,start:!0,end:!0},A6=/[.+*?^${}()[\]/\\]/g;function R6(t,e){const n=Ne({},I6,e),r=[];let s=n.start?"^":"";const i=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(s+="/");for(let h=0;h<c.length;h++){const f=c[h];let d=40+(n.sensitive?.25:0);if(f.type===0)h||(s+="/"),s+=f.value.replace(A6,"\\$&"),d+=40;else if(f.type===1){const{value:m,repeatable:p,optional:g,regexp:y}=f;i.push({name:m,repeatable:p,optional:g});const w=y||F0;if(w!==F0){d+=10;try{new RegExp(`(${w})`)}catch(T){throw new Error(`Invalid custom RegExp for param "${m}" (${w}): `+T.message)}}let b=p?`((?:${w})(?:/(?:${w}))*)`:`(${w})`;h||(b=g&&c.length<2?`(?:/${b})`:"/"+b),g&&(b+="?"),s+=b,d+=20,g&&(d+=-8),p&&(d+=-20),w===".*"&&(d+=-50)}u.push(d)}r.push(u)}if(n.strict&&n.end){const c=r.length-1;r[c][r[c].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const d=u[f]||"",m=i[f-1];h[m.name]=d&&m.repeatable?d.split("/"):d}return h}function l(c){let u="",h=!1;for(const f of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const d of f)if(d.type===0)u+=d.value;else if(d.type===1){const{value:m,repeatable:p,optional:g}=d,y=m in c?c[m]:"";if(Un(y)&&!p)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const w=Un(y)?y.join("/"):y;if(!w)if(g)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${m}"`);u+=w}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:l}}function C6(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function S6(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=C6(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(U0(r))return 1;if(U0(s))return-1}return s.length-r.length}function U0(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const P6={type:0,value:""},k6=/[a-zA-Z0-9_]/;function N6(t){if(!t)return[[]];if(t==="/")return[[P6]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(d){throw new Error(`ERR (${n})/"${c}": ${d}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,l,c="",u="";function h(){c&&(n===0?i.push({type:0,value:c}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),n=1):f();break;case 4:f(),n=r;break;case 1:l==="("?n=2:k6.test(l)?f():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),s}function O6(t,e,n){const r=R6(N6(t.path),n),s=Ne(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function x6(t,e){const n=[],r=new Map;e=q0({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,h,f){const d=!f,m=D6(u);m.aliasOf=f&&f.record;const p=q0(e,u),g=[m];if("alias"in u){const b=typeof u.alias=="string"?[u.alias]:u.alias;for(const T of b)g.push(Ne({},m,{components:f?f.record.components:m.components,path:T,aliasOf:f?f.record:m}))}let y,w;for(const b of g){const{path:T}=b;if(h&&T[0]!=="/"){const k=h.record.path,I=k[k.length-1]==="/"?"":"/";b.path=h.record.path+(T&&I+T)}if(y=O6(b,h,p),f?f.alias.push(y):(w=w||y,w!==y&&w.alias.push(y),d&&u.name&&!j0(y)&&o(u.name)),m.children){const k=m.children;for(let I=0;I<k.length;I++)i(k[I],y,f&&f.children[I])}f=f||y,(y.record.components&&Object.keys(y.record.components).length||y.record.name||y.record.redirect)&&l(y)}return w?()=>{o(w)}:Sa}function o(u){if(qR(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let h=0;for(;h<n.length&&S6(u,n[h])>=0&&(u.record.path!==n[h].record.path||!WR(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!j0(u)&&r.set(u.record.name,u)}function c(u,h){let f,d={},m,p;if("name"in u&&u.name){if(f=r.get(u.name),!f)throw yo(1,{location:u});p=f.record.name,d=Ne(B0(h.params,f.keys.filter(w=>!w.optional).map(w=>w.name)),u.params&&B0(u.params,f.keys.map(w=>w.name))),m=f.stringify(d)}else if("path"in u)m=u.path,f=n.find(w=>w.re.test(m)),f&&(d=f.parse(m),p=f.record.name);else{if(f=h.name?r.get(h.name):n.find(w=>w.re.test(h.path)),!f)throw yo(1,{location:u,currentLocation:h});p=f.record.name,d=Ne({},h.params,u.params),m=f.stringify(d)}const g=[];let y=f;for(;y;)g.unshift(y.record),y=y.parent;return{name:p,path:m,params:d,matched:g,meta:L6(g)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function B0(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function D6(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:M6(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function M6(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function j0(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function L6(t){return t.reduce((e,n)=>Ne(e,n.meta),{})}function q0(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function WR(t,e){return e.children.some(n=>n===t||WR(t,n))}const zR=/#/g,V6=/&/g,$6=/\//g,F6=/=/g,U6=/\?/g,KR=/\+/g,B6=/%5B/g,j6=/%5D/g,GR=/%5E/g,q6=/%60/g,QR=/%7B/g,H6=/%7C/g,YR=/%7D/g,W6=/%20/g;function Qg(t){return encodeURI(""+t).replace(H6,"|").replace(B6,"[").replace(j6,"]")}function z6(t){return Qg(t).replace(QR,"{").replace(YR,"}").replace(GR,"^")}function gp(t){return Qg(t).replace(KR,"%2B").replace(W6,"+").replace(zR,"%23").replace(V6,"%26").replace(q6,"`").replace(QR,"{").replace(YR,"}").replace(GR,"^")}function K6(t){return gp(t).replace(F6,"%3D")}function G6(t){return Qg(t).replace(zR,"%23").replace(U6,"%3F")}function Q6(t){return t==null?"":G6(t).replace($6,"%2F")}function Cu(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function Y6(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(KR," "),o=i.indexOf("="),a=Cu(o<0?i:i.slice(0,o)),l=o<0?null:Cu(i.slice(o+1));if(a in e){let c=e[a];Un(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function H0(t){let e="";for(let n in t){const r=t[n];if(n=K6(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Un(r)?r.map(i=>i&&gp(i)):[r&&gp(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function X6(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Un(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const J6=Symbol(""),W0=Symbol(""),Wh=Symbol(""),Yg=Symbol(""),_p=Symbol("");function Yo(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function qr(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const l=h=>{h===!1?a(yo(4,{from:n,to:e})):h instanceof Error?a(h):b6(h)?a(yo(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},c=t.call(r&&r.instances[s],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(h=>a(h))})}function Uf(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(Z6(a)){const c=(a.__vccOpts||a)[e];c&&s.push(qr(c,n,r,i,o))}else{let l=a();s.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=i6(c)?c.default:c;i.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&qr(f,n,r,i,o)()}))}}return s}function Z6(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function z0(t){const e=It(Wh),n=It(Yg),r=Xe(()=>e.resolve(ht(t.to))),s=Xe(()=>{const{matched:l}=r.value,{length:c}=l,u=l[c-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex(_o.bind(null,u));if(f>-1)return f;const d=K0(l[c-2]);return c>1&&K0(u)===d&&h[h.length-1].path!==d?h.findIndex(_o.bind(null,l[c-2])):f}),i=Xe(()=>s.value>-1&&nB(n.params,r.value.params)),o=Xe(()=>s.value>-1&&s.value===n.matched.length-1&&BR(n.params,r.value.params));function a(l={}){return tB(l)?e[ht(t.replace)?"replace":"push"](ht(t.to)).catch(Sa):Promise.resolve()}return{route:r,href:Xe(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const eB=Lu({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:z0,setup(t,{slots:e}){const n=Qn(z0(t)),{options:r}=It(Wh),s=Xe(()=>({[G0(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[G0(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Qi("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Ss=eB;function tB(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function nB(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Un(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function K0(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const G0=(t,e,n)=>t??e??n,rB=Lu({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=It(_p),s=Xe(()=>t.route||r.value),i=It(W0,0),o=Xe(()=>{let c=ht(i);const{matched:u}=s.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=Xe(()=>s.value.matched[o.value]);da(W0,Xe(()=>o.value+1)),da(J6,a),da(_p,s);const l=Me();return Yt(()=>[l.value,a.value,t.name],([c,u,h],[f,d,m])=>{u&&(u.instances[h]=c,d&&d!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=d.leaveGuards),u.updateGuards.size||(u.updateGuards=d.updateGuards))),c&&u&&(!d||!_o(u,d)||!f)&&(u.enterCallbacks[h]||[]).forEach(p=>p(c))},{flush:"post"}),()=>{const c=s.value,u=t.name,h=a.value,f=h&&h.components[u];if(!f)return Q0(n.default,{Component:f,route:c});const d=h.props[u],m=d?d===!0?c.params:typeof d=="function"?d(c):d:null,g=Qi(f,Ne({},m,e,{onVnodeUnmounted:y=>{y.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return Q0(n.default,{Component:g,route:c})||g}}});function Q0(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const XR=rB;function sB(t){const e=x6(t.routes,t),n=t.parseQuery||Y6,r=t.stringifyQuery||H0,s=t.history,i=Yo(),o=Yo(),a=Yo(),l=Xr(Fr);let c=Fr;Ri&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=$f.bind(null,P=>""+P),h=$f.bind(null,Q6),f=$f.bind(null,Cu);function d(P,z){let B,X;return qR(P)?(B=e.getRecordMatcher(P),X=z):X=P,e.addRoute(X,B)}function m(P){const z=e.getRecordMatcher(P);z&&e.removeRoute(z)}function p(){return e.getRoutes().map(P=>P.record)}function g(P){return!!e.getRecordMatcher(P)}function y(P,z){if(z=Ne({},z||l.value),typeof P=="string"){const A=Ff(n,P,z.path),S=e.resolve({path:A.path},z),N=s.createHref(A.fullPath);return Ne(A,S,{params:f(S.params),hash:Cu(A.hash),redirectedFrom:void 0,href:N})}let B;if("path"in P)B=Ne({},P,{path:Ff(n,P.path,z.path).path});else{const A=Ne({},P.params);for(const S in A)A[S]==null&&delete A[S];B=Ne({},P,{params:h(A)}),z.params=h(z.params)}const X=e.resolve(B,z),Pe=P.hash||"";X.params=u(f(X.params));const _=l6(r,Ne({},P,{hash:z6(Pe),path:X.path})),v=s.createHref(_);return Ne({fullPath:_,hash:Pe,query:r===H0?X6(P.query):P.query||{}},X,{redirectedFrom:void 0,href:v})}function w(P){return typeof P=="string"?Ff(n,P,l.value.path):Ne({},P)}function b(P,z){if(c!==P)return yo(8,{from:z,to:P})}function T(P){return C(P)}function k(P){return T(Ne(w(P),{replace:!0}))}function I(P){const z=P.matched[P.matched.length-1];if(z&&z.redirect){const{redirect:B}=z;let X=typeof B=="function"?B(P):B;return typeof X=="string"&&(X=X.includes("?")||X.includes("#")?X=w(X):{path:X},X.params={}),Ne({query:P.query,hash:P.hash,params:"path"in X?{}:P.params},X)}}function C(P,z){const B=c=y(P),X=l.value,Pe=P.state,_=P.force,v=P.replace===!0,A=I(B);if(A)return C(Ne(w(A),{state:typeof A=="object"?Ne({},Pe,A.state):Pe,force:_,replace:v}),z||B);const S=B;S.redirectedFrom=z;let N;return!_&&c6(r,X,B)&&(N=yo(16,{to:S,from:X}),Ct(X,X,!0,!1)),(N?Promise.resolve(N):M(S,X)).catch(x=>hr(x)?hr(x,2)?x:en(x):de(x,S,X)).then(x=>{if(x){if(hr(x,2))return C(Ne({replace:v},w(x.to),{state:typeof x.to=="object"?Ne({},Pe,x.to.state):Pe,force:_}),z||S)}else x=V(S,X,!0,v,Pe);return U(S,X,x),x})}function E(P,z){const B=b(P,z);return B?Promise.reject(B):Promise.resolve()}function R(P){const z=di.values().next().value;return z&&typeof z.runWithContext=="function"?z.runWithContext(P):P()}function M(P,z){let B;const[X,Pe,_]=iB(P,z);B=Uf(X.reverse(),"beforeRouteLeave",P,z);for(const A of X)A.leaveGuards.forEach(S=>{B.push(qr(S,P,z))});const v=E.bind(null,P,z);return B.push(v),St(B).then(()=>{B=[];for(const A of i.list())B.push(qr(A,P,z));return B.push(v),St(B)}).then(()=>{B=Uf(Pe,"beforeRouteUpdate",P,z);for(const A of Pe)A.updateGuards.forEach(S=>{B.push(qr(S,P,z))});return B.push(v),St(B)}).then(()=>{B=[];for(const A of _)if(A.beforeEnter)if(Un(A.beforeEnter))for(const S of A.beforeEnter)B.push(qr(S,P,z));else B.push(qr(A.beforeEnter,P,z));return B.push(v),St(B)}).then(()=>(P.matched.forEach(A=>A.enterCallbacks={}),B=Uf(_,"beforeRouteEnter",P,z),B.push(v),St(B))).then(()=>{B=[];for(const A of o.list())B.push(qr(A,P,z));return B.push(v),St(B)}).catch(A=>hr(A,8)?A:Promise.reject(A))}function U(P,z,B){a.list().forEach(X=>R(()=>X(P,z,B)))}function V(P,z,B,X,Pe){const _=b(P,z);if(_)return _;const v=z===Fr,A=Ri?history.state:{};B&&(X||v?s.replace(P.fullPath,Ne({scroll:v&&A&&A.scroll},Pe)):s.push(P.fullPath,Pe)),l.value=P,Ct(P,z,B,v),en()}let H;function ve(){H||(H=s.listen((P,z,B)=>{if(!Fl.listening)return;const X=y(P),Pe=I(X);if(Pe){C(Ne(Pe,{replace:!0}),X).catch(Sa);return}c=X;const _=l.value;Ri&&_6(L0(_.fullPath,B.delta),Hh()),M(X,_).catch(v=>hr(v,12)?v:hr(v,2)?(C(v.to,X).then(A=>{hr(A,20)&&!B.delta&&B.type===ll.pop&&s.go(-1,!1)}).catch(Sa),Promise.reject()):(B.delta&&s.go(-B.delta,!1),de(v,X,_))).then(v=>{v=v||V(X,_,!1),v&&(B.delta&&!hr(v,8)?s.go(-B.delta,!1):B.type===ll.pop&&hr(v,20)&&s.go(-1,!1)),U(X,_,v)}).catch(Sa)}))}let Se=Yo(),K=Yo(),ae;function de(P,z,B){en(P);const X=K.list();return X.length?X.forEach(Pe=>Pe(P,z,B)):console.error(P),Promise.reject(P)}function ot(){return ae&&l.value!==Fr?Promise.resolve():new Promise((P,z)=>{Se.add([P,z])})}function en(P){return ae||(ae=!P,ve(),Se.list().forEach(([z,B])=>P?B(P):z()),Se.reset()),P}function Ct(P,z,B,X){const{scrollBehavior:Pe}=t;if(!Ri||!Pe)return Promise.resolve();const _=!B&&y6(L0(P.fullPath,0))||(X||!B)&&history.state&&history.state.scroll||null;return Du().then(()=>Pe(P,z,_)).then(v=>v&&g6(v)).catch(v=>de(v,P,z))}const Wt=P=>s.go(P);let fi;const di=new Set,Fl={currentRoute:l,listening:!0,addRoute:d,removeRoute:m,hasRoute:g,getRoutes:p,resolve:y,options:t,push:T,replace:k,go:Wt,back:()=>Wt(-1),forward:()=>Wt(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:K.add,isReady:ot,install(P){const z=this;P.component("RouterLink",Ss),P.component("RouterView",XR),P.config.globalProperties.$router=z,Object.defineProperty(P.config.globalProperties,"$route",{enumerable:!0,get:()=>ht(l)}),Ri&&!fi&&l.value===Fr&&(fi=!0,T(s.location).catch(Pe=>{}));const B={};for(const Pe in Fr)Object.defineProperty(B,Pe,{get:()=>l.value[Pe],enumerable:!0});P.provide(Wh,z),P.provide(Yg,dE(B)),P.provide(_p,l);const X=P.unmount;di.add(P),P.unmount=function(){di.delete(P),di.size<1&&(c=Fr,H&&H(),H=null,l.value=Fr,fi=!1,ae=!1),X()}}};function St(P){return P.reduce((z,B)=>z.then(()=>R(B)),Promise.resolve())}return Fl}function iB(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(c=>_o(c,a))?r.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>_o(c,l))||s.push(l))}return[n,r,s]}function oB(){return It(Wh)}function aB(){return It(Yg)}const lB="/assets/logoweb-d7dfbfcc.png",cB={class:"nav-container"},uB={class:"flex flex-col gap-4 md:flex-row"},hB={__name:"MenuPublic",setup(t){return(e,n)=>(Et(),cn("nav",cB,[fe("ul",uB,[fe("li",null,[ge(ht(Ss),{to:{name:"inicio"}},{default:ut(()=>[gt("Inicio")]),_:1})]),fe("li",null,[ge(ht(Ss),{to:{name:"acercade"}},{default:ut(()=>[gt("Acerca de Nosotros")]),_:1})]),fe("li",null,[ge(ht(Ss),{to:{name:"sedes"}},{default:ut(()=>[gt("Nuestras Sedes")]),_:1})]),fe("li",null,[ge(ht(Ss),{to:{name:"servicios"}},{default:ut(()=>[gt("Nuestros Servicios")]),_:1})]),fe("li",null,[ge(ht(Ss),{to:{name:"contacto"}},{default:ut(()=>[gt("Contáctanos")]),_:1})])])]))}},Xg=k1("auth",()=>{const t=qA(),e=Me(null),n=Me(""),r=oB();Fu(()=>{Mw(t,u=>{u&&(e.value=u)})});const s={"auth/user-not-found":"Usuario no encontrado.","auth/wrong-password":"La contraseña es incorrecta.","auth/invalid-login-credentials":"Credenciales inválidas."};function i(u,h){tN(t,u,h).then(f=>{const d=f.user;e.value=d,r.push({name:"manage"})}).catch(f=>{n.value=s[f.code]})}function o(){rN(t).then(()=>{e.value=null,r.push({name:"inicio"})}).catch(u=>{console.log(u)})}const a=Xe(()=>n.value),l=()=>{setTimeout(()=>{n.value=""},3e3)},c=Xe(()=>e.value);return{login:i,logout:o,hasError:a,isAuth:c,errorMsg:n,clearError:l}}),fB={class:"nav-container"},dB={class:"flex flex-col gap-4 md:flex-row"},pB=fe("span",{class:"hidden md:block"},"|",-1),mB={__name:"MenuAdmin",setup(t){const e=Xg();return(n,r)=>{const s=Fp("RouterLink");return Et(),cn("nav",fB,[fe("ul",dB,[fe("li",null,[ge(s,{to:{name:"manage"}},{default:ut(()=>[gt("Panel de Administración")]),_:1})]),pB,fe("li",null,[ge(s,{to:{name:"inicio"},onClick:ht(e).logout},{default:ut(()=>[gt("Cerrar Sesión")]),_:1},8,["onClick"])])])])}}},gB={class:"relative z-50"},_B={class:"header-container flex justify-between mx-2 my-2 md:sticky md:top-0"},yB=fe("img",{src:lB,alt:"Mis Trocitos",class:"h-14 w-auto lg:h-20"},null,-1),vB=fe("path",{d:"M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z"},null,-1),EB=[vB],wB=fe("path",{d:"M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"},null,-1),TB=[wB],bB={__name:"Header",setup(t){const e=Xg(),n=()=>{const r=document.querySelector(".menu-container"),s=document.querySelector('[name="menu"]'),i=document.querySelector('[name="close"]');s.classList.toggle("hidden"),i.classList.toggle("hidden"),r.classList.toggle("z-10"),r.classList.toggle("top-16"),r.classList.toggle("opacity-100"),r.classList.toggle("h-[600px]")};return(r,s)=>(Et(),cn("header",gB,[fe("div",_B,[ge(ht(Ss),{to:{name:"inicio"}},{default:ut(()=>[yB]),_:1}),fe("span",null,[(Et(),cn("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"36",height:"36",viewBox:"0 0 30 30",class:"fill-current cursor-pointer md:hidden",name:"menu",onClick:s[0]||(s[0]=i=>n())},EB)),(Et(),cn("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"36",height:"36",viewBox:"0 0 30 30",class:"fill-current cursor-pointer hidden md:hidden",name:"close",onClick:s[1]||(s[1]=i=>n())},TB))]),ht(e).isAuth?(Et(),Oc(mB,{key:0,class:"menu-container absolute h-0 w-full left-0 opacity-0 top-0 transition-all ease-in-out duration-500 z-0 bg-white flex items-center justify-center text-center md:w-auto md:z-auto md:static md:opacity-100 md:h-20 md:left-auto md:pr-2",onClick:s[2]||(s[2]=i=>n())})):(Et(),Oc(hB,{key:1,class:"menu-container absolute h-0 w-full left-0 opacity-0 top-0 transition-all ease-in-out duration-500 z-0 bg-white flex items-center justify-center text-center md:w-auto md:z-auto md:static md:opacity-100 md:h-20 md:left-auto md:pr-2",onClick:s[3]||(s[3]=i=>n())}))])]))}},IB={class:"md:mx-auto md:container md:flex md:justify-center md:items-center"},AB=fe("div",{class:"footer-logo"},[fe("img",{src:"",alt:""})],-1),RB={class:"nav-container"},CB={class:"flex flex-col gap-4 text-right mr-4 mb-4 md:container md:mx-auto md:gap-2 md:flex-row"},SB=fe("span",{class:"hidden md:block"},"|",-1),PB={key:0},kB={key:1},NB={__name:"Footer",setup(t){const e=Xg();return(n,r)=>{const s=Fp("RouterLink");return Et(),cn("footer",IB,[AB,fe("nav",RB,[fe("ul",CB,[fe("li",null,[ge(s,{to:{name:"inicio"}},{default:ut(()=>[gt("Inicio")]),_:1})]),fe("li",null,[ge(s,{to:{name:"acercade"}},{default:ut(()=>[gt("Acerca de Nosotros")]),_:1})]),fe("li",null,[ge(s,{to:{name:"sedes"}},{default:ut(()=>[gt("Nuestras Sedes")]),_:1})]),fe("li",null,[ge(s,{to:{name:"servicios"}},{default:ut(()=>[gt("Nuestros Servicios")]),_:1})]),fe("li",null,[ge(s,{to:{name:"blog"}},{default:ut(()=>[gt("Blog")]),_:1})]),fe("li",null,[ge(s,{to:{name:"contacto"}},{default:ut(()=>[gt("Contáctanos")]),_:1})]),SB,ht(e).isAuth?(Et(),cn("li",PB,[ge(s,{to:{name:"inicio"},onClick:ht(e).logout},{default:ut(()=>[gt("Cerrar Sesión")]),_:1},8,["onClick"])])):(Et(),cn("li",kB,[ge(s,{to:{name:"login"}},{default:ut(()=>[gt("Iniciar Sesión")]),_:1})]))])])])}}},OB={class:"min-h-full grid grid-rows-[auto_1fr_auto]"},xB={__name:"App",setup(t){return(e,n)=>(Et(),cn("div",OB,[ge(bB),ge(ht(XR)),ge(NB)]))}};const DB=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},MB={class:"slideshow-container h-32 md:h-44 lg:h-80"},LB=["src","alt"],VB={__name:"Gallery",setup(t){const e=Me([{src:"../img/ps1.jpg",alt:"Imagen de un niño jugando"},{src:"../img/ps2.jpg",alt:"Imagen de un niño jugando"},{src:"../img/ps3.jpg",alt:"Imagen de un niño jugando"}]),n=Me(0),r=()=>{n.value=(n.value+1)%e.value.length},s=()=>{setInterval(r,3e3)};return Wn(()=>{s()}),(i,o)=>(Et(),cn("div",MB,[ge(Wp,{"enter-active-class":"transition-opacity duration-1000","leave-active-class":"transition-opacity duration-1000","enter-from-class":"opacity-0","leave-to-class":"opacity-0"},{default:ut(()=>[(Et(),cn("div",{key:n.value,class:"slide"},[fe("img",{src:e.value[n.value].src,alt:e.value[n.value].alt},null,8,LB)]))]),_:1})]))}},$B=DB(VB,[["__scopeId","data-v-a9b42352"]]),FB={key:0,class:"mt-3"},UB=fe("main",{class:"md:mt-5 container mx-auto"},[fe("h1",{class:"font-bold text-center my-4 text-2xl md:text-3xl"}," ¡Bienvenidos a nuestro centro de cuidado infantil y preescolar! "),fe("div",{class:"w-[80%] grid gap-4 mx-auto my-8 leading-7"},[fe("p",null," En nuestro espacio dedicado a la educación preescolar y la estimulación temprana, nos enorgullece cuidar y nutrir a los pequeños desde los 2 meses hasta los 5 años de edad. Somos mucho más que una simple guardería; somos un refugio seguro y estimulante donde cada niño florece. "),fe("p",null," Sabemos que mientras tú trabajas, tus hijos son tu mayor preocupación, y es por eso que nosotros asumimos esa responsabilidad con pasión y dedicación. Nuestro compromiso es proporcionar un ambiente enriquecedor donde los pequeños puedan crecer, aprender y explorar en un entorno lleno de amor y cuidado. "),fe("p",null," En nuestro centro, la educación integral es la base de todo lo que hacemos. A través de programas diseñados específicamente para cada grupo de edad, fomentamos el desarrollo cognitivo, emocional, social y físico de los niños. Nuestro enfoque en la estimulación temprana les brinda las herramientas necesarias para un futuro brillante. "),fe("p",null," Te invitamos a explorar nuestra página web y descubrir todo lo que ofrecemos para tus pequeños. Encontrarás información detallada sobre nuestros programas, instalaciones de vanguardia y nuestro equipo de profesionales apasionados. Tu confianza en nosotros es el motor que impulsa nuestro trabajo, y estamos listos para cuidar y educar a tus hijos con el cariño y la excelencia que merecen. "),fe("p",null," En el Centro de Cuidado Infantil y Preescolar, mientras tú trabajas, nosotros nos encargamos de los más pequeños de la casa. ¡Únete a nuestra comunidad y permite que tus hijos comiencen su viaje hacia un futuro brillante en un entorno que se preocupa por su crecimiento y bienestar en cada paso del camino. ")])],-1),BB={__name:"HomeView",setup(t){const e=aB(),n=Xe(()=>e.name==="inicio");return(r,s)=>(Et(),cn(sn,null,[n.value?(Et(),cn("div",FB,[ge($B)])):LS("",!0),UB],64))}},yp=sB({history:T6("/"),routes:[{path:"/",name:"inicio",component:BB},{path:"/acerca-de",name:"acercade",component:()=>at(()=>import("./AboutView-937eb052.js"),["assets/AboutView-937eb052.js","assets/ps1-3d638d32.js","assets/AboutView-d1b05fa1.css"])},{path:"/sedes",name:"sedes",component:()=>at(()=>import("./SedesView-aa048b0e.js"),["assets/SedesView-aa048b0e.js","assets/SedesView-7b6021ff.css"])},{path:"/servicios",name:"servicios",component:()=>at(()=>import("./ServiciosView-ac6e6f39.js"),["assets/ServiciosView-ac6e6f39.js","assets/ServiciosView-0e9ae55e.css"])},{path:"/blog",name:"blog",component:()=>at(()=>import("./BlogView-fb2f4595.js"),[])},{path:"/contacto",name:"contacto",component:()=>at(()=>import("./ContactView-d1559bc3.js"),["assets/ContactView-d1559bc3.js","assets/ps1-3d638d32.js","assets/ContactView-9d478204.css"])},{path:"/:pathMatch(.*)*",name:"not-found",component:()=>at(()=>import("./NotFoundView-5335d4fa.js"),[])},{path:"/login",name:"login",component:()=>at(()=>import("./LoginView-b4b90d71.js"),[])},{path:"/admin",name:"admin",component:()=>at(()=>import("./AdminLayoutView-c2f06639.js"),[]),meta:{requiresAuth:!0},children:[{path:"manage",name:"manage",component:()=>at(()=>import("./ManageView-9d5f06da.js"),[])},{path:"newstudent",name:"newstudent",component:()=>at(()=>import("./NewStudentView-6b4f0087.js"),["assets/NewStudentView-6b4f0087.js","assets/useStudents-b51574c6.js","assets/index-3395c5ac.js"])},{path:"allstudents",name:"allstudents",component:()=>at(()=>import("./AllStudentsView-04b9c350.js"),["assets/AllStudentsView-04b9c350.js","assets/useStudents-b51574c6.js","assets/index-3395c5ac.js"])},{path:"newpersonal",name:"newpersonal",component:()=>at(()=>import("./NewPersonalView-20260227.js"),["assets/NewPersonalView-20260227.js","assets/usePersonal-4ae890e6.js","assets/index-3395c5ac.js"])},{path:"allpersonal",name:"allpersonal",component:()=>at(()=>import("./AllPersonalView-f2ff3353.js"),["assets/AllPersonalView-f2ff3353.js","assets/usePersonal-4ae890e6.js","assets/index-3395c5ac.js"])},{path:"newpost",name:"newpost",component:()=>at(()=>import("./NewPostView-c173481b.js"),[])},{path:"allposts",name:"allposts",component:()=>at(()=>import("./AllPostView-dc299656.js"),[])},{path:"editstudent/:id",name:"editstudent",component:()=>at(()=>import("./EditStudentView-b5ff8942.js"),["assets/EditStudentView-b5ff8942.js","assets/useStudents-b51574c6.js","assets/index-3395c5ac.js"])},{path:"editpersonal/:id",name:"editpersonal",component:()=>at(()=>import("./EditPersonalView-a6700ace.js"),["assets/EditPersonalView-a6700ace.js","assets/index-3395c5ac.js"])},{path:"editpost/:id",name:"editpost",component:()=>at(()=>import("./EditPostView-bbd5fb5a.js"),[])}]}]});yp.beforeEach(async(t,e,n)=>{if(t.matched.some(s=>s.meta.requiresAuth))try{await jB(),n()}catch(s){console.log(s),yp.push({name:"inicio"})}else n()});const jB=()=>{const t=qA();return new Promise((e,n)=>{const r=Mw(t,s=>{r(),s?e():n()})})},$l=w1(xB);$l.use(I1());$l.use(yp);$l.use(l3,d3(s6));$l.use(v5,{firebaseApp:w5,modules:[g5()]});$l.mount("#app");export{lj as A,Xe as B,P$ as C,ej as D,nj as E,sn as F,aB as G,ij as H,Qn as I,Yt as J,ZB as K,DB as _,cn as a,fe as b,KB as c,ht as d,Oc as e,LS as f,ge as g,gt as h,qB as i,DR as j,Fp as k,Me as l,VS as m,oj as n,Et as o,oB as p,tj as q,WB as r,JB as s,zB as t,Xg as u,HB as v,ut as w,aj as x,sj as y,rj as z};
