"use strict";var y=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(i){throw (r=0, i)}};};var m=y(function(J,h){
var S=require("path").resolve,T=require('@stdlib/fs-read-wasm/dist').sync,B=T(S(__dirname,"..","src","main.wasm"));h.exports=B
});var d=y(function(K,_){
var V=require('@stdlib/assert-is-wasm-memory/dist'),w=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),g=require('@stdlib/utils-inherit/dist'),M=require('@stdlib/wasm-module-wrapper/dist'),j=require('@stdlib/error-tools-fmtprodmsg/dist'),z=m();function u(e){if(!(this instanceof u))return new u(e);if(!V(e))throw new TypeError(j('26xH0',e));return M.call(this,z,e,{env:{memory:e}}),this}g(u,M);w(u.prototype,"main",function(r,i,a,s,t){return this._instance.exports.c_scopy(r,i,a,s,t),s});w(u.prototype,"ndarray",function(r,i,a,s,t,c,p){return this._instance.exports.c_scopy_ndarray(r,i,a,s,t,c,p),t});_.exports=u
});var W=y(function(Q,R){
var E=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),D=require('@stdlib/utils-inherit/dist'),x=require('@stdlib/strided-base-stride2offset/dist'),L=require('@stdlib/strided-base-read-dataview/dist').ndarray,P=require('@stdlib/wasm-memory/dist'),k=require('@stdlib/wasm-base-arrays2ptrs/dist'),b=require('@stdlib/wasm-base-strided2object/dist'),q=d();function o(){return this instanceof o?(q.call(this,new P({initial:0})),this):new o}D(o,q);E(o.prototype,"main",function(r,i,a,s,t){return this.ndarray(r,i,a,x(r,a),s,t,x(r,t))});E(o.prototype,"ndarray",function(r,i,a,s,t,c,p){var l,v,n;return l=k(this,[b(r,i,a,s),b(r,t,c,p)]),v=l[0],n=l[1],q.prototype.ndarray.call(this,r,v.ptr,v.stride,v.offset,n.ptr,n.stride,n.offset),n.copy&&L(r,this.view,n.stride*n.BYTES_PER_ELEMENT,n.ptr,t,c,p,!0),t});R.exports=o
});var O=y(function(U,A){
var C=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),F=W(),G=d(),f=new F;f.initializeSync();C(f,"Module",G.bind(null));A.exports=f
});var H=O();module.exports=H;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
