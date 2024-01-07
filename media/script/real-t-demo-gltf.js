(function dartProgram(){function copyProperties(a,b){var s=Object.keys(a)
for(var r=0;r<s.length;r++){var q=s[r]
b[q]=a[q]}}function mixinPropertiesHard(a,b){var s=Object.keys(a)
for(var r=0;r<s.length;r++){var q=s[r]
if(!b.hasOwnProperty(q))b[q]=a[q]}}function mixinPropertiesEasy(a,b){Object.assign(b,a)}var z=function(){var s=function(){}
s.prototype={p:{}}
var r=new s()
if(!(Object.getPrototypeOf(r)&&Object.getPrototypeOf(r).p===s.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var q=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(q))return true}}catch(p){}return false}()
function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){Object.setPrototypeOf(a.prototype,b.prototype)
return}var s=Object.create(b.prototype)
copyProperties(a.prototype,s)
a.prototype=s}}function inheritMany(a,b){for(var s=0;s<b.length;s++)inherit(b[s],a)}function mixinEasy(a,b){mixinPropertiesEasy(b.prototype,a.prototype)
a.prototype.constructor=a}function mixinHard(a,b){mixinPropertiesHard(b.prototype,a.prototype)
a.prototype.constructor=a}function lazyOld(a,b,c,d){var s=a
a[b]=s
a[c]=function(){a[c]=function(){A.nQ(b)}
var r
var q=d
try{if(a[b]===s){r=a[b]=q
r=a[b]=d()}else r=a[b]}finally{if(r===q)a[b]=null
a[c]=function(){return this[b]}}return r}}function lazy(a,b,c,d){var s=a
a[b]=s
a[c]=function(){if(a[b]===s)a[b]=d()
a[c]=function(){return this[b]}
return a[b]}}function lazyFinal(a,b,c,d){var s=a
a[b]=s
a[c]=function(){if(a[b]===s){var r=d()
if(a[b]!==s)A.nR(b)
a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s)convertToFastObject(a[s])}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.jy(b)
return new s(c,this)}:function(){if(s===null)s=A.jy(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.jy(a).prototype
return s}}var x=0
function tearOffParameters(a,b,c,d,e,f,g,h,i,j){if(typeof h=="number")h+=x
return{co:a,iS:b,iI:c,rC:d,dV:e,cs:f,fs:g,fT:h,aI:i||0,nDA:j}}function installStaticTearOff(a,b,c,d,e,f,g,h){var s=tearOffParameters(a,true,false,c,d,e,f,g,h,false)
var r=staticTearOffGetter(s)
a[b]=r}function installInstanceTearOff(a,b,c,d,e,f,g,h,i,j){c=!!c
var s=tearOffParameters(a,false,c,d,e,f,g,h,i,!!j)
var r=instanceTearOffGetter(c,s)
a[b]=r}function setOrUpdateInterceptorsByTag(a){var s=v.interceptorsByTag
if(!s){v.interceptorsByTag=a
return}copyProperties(a,s)}function setOrUpdateLeafTags(a){var s=v.leafTags
if(!s){v.leafTags=a
return}copyProperties(a,s)}function updateTypes(a){var s=v.types
var r=s.length
s.push.apply(s,a)
return r}function updateHolder(a,b){copyProperties(b,a)
return a}var hunkHelpers=function(){var s=function(a,b,c,d,e){return function(f,g,h,i){return installInstanceTearOff(f,g,a,b,c,d,[h],i,e,false)}},r=function(a,b,c,d){return function(e,f,g,h){return installStaticTearOff(e,f,a,b,c,[g],h,d)}}
return{inherit:inherit,inheritMany:inheritMany,mixin:mixinEasy,mixinHard:mixinHard,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:s(0,0,null,["$0"],0),_instance_1u:s(0,1,null,["$1"],0),_instance_2u:s(0,2,null,["$2"],0),_instance_0i:s(1,0,null,["$0"],0),_instance_1i:s(1,1,null,["$1"],0),_instance_2i:s(1,2,null,["$2"],0),_static_0:r(0,null,["$0"],0),_static_1:r(1,null,["$1"],0),_static_2:r(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,lazyFinal:lazyFinal,lazyOld:lazyOld,updateHolder:updateHolder,convertToFastObject:convertToFastObject,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}var J={
jC(a,b,c,d){return{i:a,p:b,e:c,x:d}},
fF(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.jz==null){A.nE()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw A.b(A.jj("Return interceptor for "+A.o(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.im
if(o==null)o=$.im=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=A.nL(a)
if(p!=null)return p
if(typeof a=="function")return B.F
s=Object.getPrototypeOf(a)
if(s==null)return B.t
if(s===Object.prototype)return B.t
if(typeof q=="function"){o=$.im
if(o==null)o=$.im=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:B.i,enumerable:false,writable:true,configurable:true})
return B.i}return B.i},
lN(a,b){if(a<0||a>4294967295)throw A.b(A.ea(a,0,4294967295,"length",null))
return J.k_(A.v(new Array(a),b.h("H<0>")),b)},
jZ(a,b){if(a<0)throw A.b(A.ax("Length must be a non-negative integer: "+a,null))
return A.v(new Array(a),b.h("H<0>"))},
k_(a,b){a.fixed$length=Array
return a},
aJ(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.c7.prototype
return J.dK.prototype}if(typeof a=="string")return J.aQ.prototype
if(a==null)return J.c8.prototype
if(typeof a=="boolean")return J.dI.prototype
if(Array.isArray(a))return J.H.prototype
if(typeof a!="object"){if(typeof a=="function")return J.an.prototype
if(typeof a=="symbol")return J.bg.prototype
if(typeof a=="bigint")return J.bf.prototype
return a}if(a instanceof A.w)return a
return J.fF(a)},
nx(a){if(typeof a=="number")return J.be.prototype
if(typeof a=="string")return J.aQ.prototype
if(a==null)return a
if(Array.isArray(a))return J.H.prototype
if(typeof a!="object"){if(typeof a=="function")return J.an.prototype
if(typeof a=="symbol")return J.bg.prototype
if(typeof a=="bigint")return J.bf.prototype
return a}if(a instanceof A.w)return a
return J.fF(a)},
aK(a){if(typeof a=="string")return J.aQ.prototype
if(a==null)return a
if(Array.isArray(a))return J.H.prototype
if(typeof a!="object"){if(typeof a=="function")return J.an.prototype
if(typeof a=="symbol")return J.bg.prototype
if(typeof a=="bigint")return J.bf.prototype
return a}if(a instanceof A.w)return a
return J.fF(a)},
db(a){if(a==null)return a
if(Array.isArray(a))return J.H.prototype
if(typeof a!="object"){if(typeof a=="function")return J.an.prototype
if(typeof a=="symbol")return J.bg.prototype
if(typeof a=="bigint")return J.bf.prototype
return a}if(a instanceof A.w)return a
return J.fF(a)},
ny(a){if(typeof a=="number")return J.be.prototype
if(typeof a=="string")return J.aQ.prototype
if(a==null)return a
if(!(a instanceof A.w))return J.bp.prototype
return a},
dc(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.an.prototype
if(typeof a=="symbol")return J.bg.prototype
if(typeof a=="bigint")return J.bf.prototype
return a}if(a instanceof A.w)return a
return J.fF(a)},
nz(a){if(a==null)return a
if(!(a instanceof A.w))return J.bp.prototype
return a},
ll(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.nx(a).B(a,b)},
fH(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.aJ(a).J(a,b)},
jH(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.ny(a).m(a,b)},
a7(a,b){if(typeof b==="number")if(Array.isArray(a)||typeof a=="string"||A.nH(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aK(a).i(a,b)},
lm(a,b,c,d){return J.dc(a).dg(a,b,c,d)},
ln(a,b,c,d){return J.dc(a).ds(a,b,c,d)},
lo(a,b){return J.db(a).p(a,b)},
de(a,b){return J.db(a).q(a,b)},
lp(a){return J.nz(a).ge_(a)},
lq(a){return J.db(a).gv(a)},
j3(a){return J.aJ(a).gt(a)},
lr(a){return J.dc(a).gdN(a)},
bS(a){return J.db(a).gG(a)},
fI(a){return J.aK(a).gj(a)},
ls(a){return J.aJ(a).gF(a)},
jI(a,b,c){return J.db(a).aw(a,b,c)},
lt(a,b){return J.aJ(a).c8(a,b)},
df(a){return J.aJ(a).l(a)},
bB:function bB(){},
dI:function dI(){},
c8:function c8(){},
a:function a(){},
bi:function bi(){},
e6:function e6(){},
bp:function bp(){},
an:function an(){},
bf:function bf(){},
bg:function bg(){},
H:function H(a){this.$ti=a},
hc:function hc(a){this.$ti=a},
b4:function b4(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
be:function be(){},
c7:function c7(){},
dK:function dK(){},
aQ:function aQ(){}},A={jc:function jc(){},
cv(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
kh(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
m7(a,b,c){return A.kh(A.cv(A.cv(c,a),b))},
da(a,b,c){return a},
jB(a){var s,r
for(s=$.a6.length,r=0;r<s;++r)if(a===$.a6[r])return!0
return!1},
lQ(a,b,c,d){if(t.gw.b(a))return new A.c2(a,b,c.h("@<0>").u(d).h("c2<1,2>"))
return new A.bk(a,b,c.h("@<0>").u(d).h("bk<1,2>"))},
jX(){return new A.bo("No element")},
cb:function cb(a){this.a=a},
iY:function iY(){},
hA:function hA(){},
k:function k(){},
aa:function aa(){},
bj:function bj(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bk:function bk(a,b,c){this.a=a
this.b=b
this.$ti=c},
c2:function c2(a,b,c){this.a=a
this.b=b
this.$ti=c},
ce:function ce(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
aC:function aC(a,b,c){this.a=a
this.b=b
this.$ti=c},
Q:function Q(){},
bF:function bF(a){this.a=a},
l5(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
nH(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.aU.b(a)},
o(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.df(a)
return s},
co(a){var s,r=$.ka
if(r==null)r=$.ka=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
m2(a,b){var s,r,q,p,o,n=null,m=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(m==null)return n
if(3>=m.length)return A.d(m,3)
s=m[3]
if(b<2||b>36)throw A.b(A.ea(b,2,36,"radix",n))
if(b===10&&s!=null)return parseInt(a,10)
if(b<10||s==null){r=b<=10?47+b:86+b
q=m[1]
for(p=q.length,o=0;o<p;++o)if((q.charCodeAt(o)|32)>r)return n}return parseInt(a,b)},
hv(a){return A.lU(a)},
lU(a){var s,r,q,p
if(a instanceof A.w)return A.Z(A.ae(a),null)
s=J.aJ(a)
if(s===B.E||s===B.G||t.ak.b(a)){r=B.k(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.Z(A.ae(a),null)},
m3(a){if(typeof a=="number"||A.bP(a))return J.df(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.aP)return a.l(0)
return"Instance of '"+A.hv(a)+"'"},
V(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
m1(a){return a.b?A.V(a).getUTCFullYear()+0:A.V(a).getFullYear()+0},
m_(a){return a.b?A.V(a).getUTCMonth()+1:A.V(a).getMonth()+1},
lW(a){return a.b?A.V(a).getUTCDate()+0:A.V(a).getDate()+0},
lX(a){return a.b?A.V(a).getUTCHours()+0:A.V(a).getHours()+0},
lZ(a){return a.b?A.V(a).getUTCMinutes()+0:A.V(a).getMinutes()+0},
m0(a){return a.b?A.V(a).getUTCSeconds()+0:A.V(a).getSeconds()+0},
lY(a){return a.b?A.V(a).getUTCMilliseconds()+0:A.V(a).getMilliseconds()+0},
aU(a,b,c){var s,r,q={}
q.a=0
s=[]
r=[]
q.a=b.length
B.a.P(s,b)
q.b=""
if(c!=null&&c.a!==0)c.q(0,new A.hu(q,r,s))
return J.lt(a,new A.dJ(B.J,0,s,r,0))},
lV(a,b,c){var s,r,q
if(Array.isArray(b))s=c==null||c.a===0
else s=!1
if(s){r=b.length
if(r===0){if(!!a.$0)return a.$0()}else if(r===1){if(!!a.$1)return a.$1(b[0])}else if(r===2){if(!!a.$2)return a.$2(b[0],b[1])}else if(r===3){if(!!a.$3)return a.$3(b[0],b[1],b[2])}else if(r===4){if(!!a.$4)return a.$4(b[0],b[1],b[2],b[3])}else if(r===5)if(!!a.$5)return a.$5(b[0],b[1],b[2],b[3],b[4])
q=a[""+"$"+r]
if(q!=null)return q.apply(a,b)}return A.lT(a,b,c)},
lT(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g=Array.isArray(b)?b:A.dQ(b,t.z),f=g.length,e=a.$R
if(f<e)return A.aU(a,g,c)
s=a.$D
r=s==null
q=!r?s():null
p=J.aJ(a)
o=p.$C
if(typeof o=="string")o=p[o]
if(r){if(c!=null&&c.a!==0)return A.aU(a,g,c)
if(f===e)return o.apply(a,g)
return A.aU(a,g,c)}if(Array.isArray(q)){if(c!=null&&c.a!==0)return A.aU(a,g,c)
n=e+q.length
if(f>n)return A.aU(a,g,null)
if(f<n){m=q.slice(f-e)
if(g===b)g=A.dQ(g,t.z)
B.a.P(g,m)}return o.apply(a,g)}else{if(f>e)return A.aU(a,g,c)
if(g===b)g=A.dQ(g,t.z)
l=Object.keys(q)
if(c==null)for(r=l.length,k=0;k<l.length;l.length===r||(0,A.ak)(l),++k){j=q[A.P(l[k])]
if(B.n===j)return A.aU(a,g,c)
B.a.n(g,j)}else{for(r=l.length,i=0,k=0;k<l.length;l.length===r||(0,A.ak)(l),++k){h=A.P(l[k])
if(c.a9(0,h)){++i
B.a.n(g,c.i(0,h))}else{j=q[h]
if(B.n===j)return A.aU(a,g,c)
B.a.n(g,j)}}if(i!==c.a)return A.aU(a,g,c)}return o.apply(a,g)}},
nC(a){throw A.b(A.kU(a))},
d(a,b){if(a==null)J.fI(a)
throw A.b(A.fE(a,b))},
fE(a,b){var s,r="index"
if(!A.fB(b))return new A.aw(!0,b,r,null)
s=A.u(J.fI(a))
if(b<0||b>=s)return A.N(b,s,a,r)
return A.kb(b,r)},
kU(a){return new A.aw(!0,a,null,null)},
b(a){return A.l_(new Error(),a)},
l_(a,b){var s
if(b==null)b=new A.aD()
a.dartException=b
s=A.nS
if("defineProperty" in Object){Object.defineProperty(a,"message",{get:s})
a.name=""}else a.toString=s
return a},
nS(){return J.df(this.dartException)},
aN(a){throw A.b(a)},
l4(a,b){throw A.l_(b,a)},
ak(a){throw A.b(A.T(a))},
aE(a){var s,r,q,p,o,n
a=A.nP(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.v([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.hQ(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
hR(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
ki(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
jd(a,b){var s=b==null,r=s?null:b.method
return new A.dL(a,r,s?null:b.receiver)},
av(a){var s
if(a==null)return new A.hs(a)
if(a instanceof A.c3){s=a.a
return A.b2(a,s==null?t.K.a(s):s)}if(typeof a!=="object")return a
if("dartException" in a)return A.b2(a,a.dartException)
return A.nm(a)},
b2(a,b){if(t.R.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
nm(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.d.bT(r,16)&8191)===10)switch(q){case 438:return A.b2(a,A.jd(A.o(s)+" (Error "+q+")",null))
case 445:case 5007:A.o(s)
return A.b2(a,new A.cm())}}if(a instanceof TypeError){p=$.l8()
o=$.l9()
n=$.la()
m=$.lb()
l=$.le()
k=$.lf()
j=$.ld()
$.lc()
i=$.lh()
h=$.lg()
g=p.L(s)
if(g!=null)return A.b2(a,A.jd(A.P(s),g))
else{g=o.L(s)
if(g!=null){g.method="call"
return A.b2(a,A.jd(A.P(s),g))}else if(n.L(s)!=null||m.L(s)!=null||l.L(s)!=null||k.L(s)!=null||j.L(s)!=null||m.L(s)!=null||i.L(s)!=null||h.L(s)!=null){A.P(s)
return A.b2(a,new A.cm())}}return A.b2(a,new A.ev(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.ct()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.b2(a,new A.aw(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.ct()
return a},
aL(a){var s
if(a instanceof A.c3)return a.b
if(a==null)return new A.cZ(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.cZ(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
iZ(a){if(a==null)return J.j3(a)
if(typeof a=="object")return A.co(a)
return J.j3(a)},
nw(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.k(0,a[s],a[r])}return b},
mX(a,b,c,d,e,f){t.Z.a(a)
switch(A.u(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.b(A.dz("Unsupported number of arguments for wrapped closure"))},
at(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=A.nt(a,b)
a.$identity=s
return s},
nt(a,b){var s
switch(b){case 0:s=a.$0
break
case 1:s=a.$1
break
case 2:s=a.$2
break
case 3:s=a.$3
break
case 4:s=a.$4
break
default:s=null}if(s!=null)return s.bind(a)
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.mX)},
lB(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.ej().constructor.prototype):Object.create(new A.bu(null,null).constructor.prototype)
s.$initialize=s.constructor
if(h)r=function static_tear_off(){this.$initialize()}
else r=function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.jR(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.lx(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.jR(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
lx(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.b("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.lu)}throw A.b("Error in functionType of tearoff")},
ly(a,b,c,d){var s=A.jP
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
jR(a,b,c,d){var s,r
if(c)return A.lA(a,b,d)
s=b.length
r=A.ly(s,d,a,b)
return r},
lz(a,b,c,d){var s=A.jP,r=A.lv
switch(b?-1:a){case 0:throw A.b(new A.ed("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
lA(a,b,c){var s,r
if($.jN==null)$.jN=A.jM("interceptor")
if($.jO==null)$.jO=A.jM("receiver")
s=b.length
r=A.lz(s,c,a,b)
return r},
jy(a){return A.lB(a)},
lu(a,b){return A.iv(v.typeUniverse,A.ae(a.a),b)},
jP(a){return a.a},
lv(a){return a.b},
jM(a){var s,r,q,p=new A.bu("receiver","interceptor"),o=J.k_(Object.getOwnPropertyNames(p),t.X)
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw A.b(A.ax("Field name "+a+" not found.",null))},
nQ(a){throw A.b(new A.eH(a))},
kY(a){return v.getIsolateTag(a)},
oG(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
nL(a){var s,r,q,p,o,n=A.P($.kZ.$1(a)),m=$.iS[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.iW[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.mG($.kT.$2(a,n))
if(q!=null){m=$.iS[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.iW[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.iX(s)
$.iS[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.iW[n]=s
return s}if(p==="-"){o=A.iX(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.l2(a,s)
if(p==="*")throw A.b(A.jj(n))
if(v.leafTags[n]===true){o=A.iX(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.l2(a,s)},
l2(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.jC(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
iX(a){return J.jC(a,!1,null,!!a.$ir)},
nN(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.iX(s)
else return J.jC(s,c,null,null)},
nE(){if(!0===$.jz)return
$.jz=!0
A.nF()},
nF(){var s,r,q,p,o,n,m,l
$.iS=Object.create(null)
$.iW=Object.create(null)
A.nD()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.l3.$1(o)
if(n!=null){m=A.nN(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
nD(){var s,r,q,p,o,n,m=B.u()
m=A.bR(B.v,A.bR(B.w,A.bR(B.l,A.bR(B.l,A.bR(B.x,A.bR(B.y,A.bR(B.z(B.k),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.kZ=new A.iT(p)
$.kT=new A.iU(o)
$.l3=new A.iV(n)},
bR(a,b){return a(b)||b},
nu(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
nP(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
bX:function bX(a,b){this.a=a
this.$ti=b},
bW:function bW(){},
bY:function bY(a,b,c){this.a=a
this.b=b
this.$ti=c},
cP:function cP(a,b){this.a=a
this.$ti=b},
cQ:function cQ(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
dJ:function dJ(a,b,c,d,e){var _=this
_.a=a
_.c=b
_.d=c
_.e=d
_.f=e},
hu:function hu(a,b,c){this.a=a
this.b=b
this.c=c},
hQ:function hQ(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
cm:function cm(){},
dL:function dL(a,b,c){this.a=a
this.b=b
this.c=c},
ev:function ev(a){this.a=a},
hs:function hs(a){this.a=a},
c3:function c3(a,b){this.a=a
this.b=b},
cZ:function cZ(a){this.a=a
this.b=null},
aP:function aP(){},
dr:function dr(){},
ds:function ds(){},
em:function em(){},
ej:function ej(){},
bu:function bu(a,b){this.a=a
this.b=b},
eH:function eH(a){this.a=a},
ed:function ed(a){this.a=a},
ip:function ip(){},
a0:function a0(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
hd:function hd(a){this.a=a},
hg:function hg(a,b){this.a=a
this.b=b
this.c=null},
aB:function aB(a,b){this.a=a
this.$ti=b},
cc:function cc(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
iT:function iT(a){this.a=a},
iU:function iU(a){this.a=a},
iV:function iV(a){this.a=a},
jp(a,b,c){},
bO(a){return a},
lR(a){return new Float32Array(a)},
lS(a){return new Uint16Array(a)},
k4(a,b,c){A.jp(a,b,c)
return c==null?new Uint8Array(a,b):new Uint8Array(a,b,c)},
aH(a,b,c){if(a>>>0!==a||a>=c)throw A.b(A.fE(b,a))},
dV:function dV(){},
ci:function ci(){},
dW:function dW(){},
bD:function bD(){},
cg:function cg(){},
ch:function ch(){},
cf:function cf(){},
dX:function dX(){},
dY:function dY(){},
dZ:function dZ(){},
e_:function e_(){},
cj:function cj(){},
e0:function e0(){},
ck:function ck(){},
e1:function e1(){},
cS:function cS(){},
cT:function cT(){},
cU:function cU(){},
cV:function cV(){},
kc(a,b){var s=b.c
return s==null?b.c=A.jn(a,b.y,!0):s},
jh(a,b){var s=b.c
return s==null?b.c=A.d3(a,"ag",[b.y]):s},
m6(a){var s=a.d
if(s!=null)return s
return a.d=new Map()},
kd(a){var s=a.x
if(s===6||s===7||s===8)return A.kd(a.y)
return s===12||s===13},
m5(a){return a.at},
au(a){return A.fp(v.typeUniverse,a,!1)},
b0(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.x
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.y
r=A.b0(a,s,a0,a1)
if(r===s)return b
return A.kz(a,r,!0)
case 7:s=b.y
r=A.b0(a,s,a0,a1)
if(r===s)return b
return A.jn(a,r,!0)
case 8:s=b.y
r=A.b0(a,s,a0,a1)
if(r===s)return b
return A.ky(a,r,!0)
case 9:q=b.z
p=A.d9(a,q,a0,a1)
if(p===q)return b
return A.d3(a,b.y,p)
case 10:o=b.y
n=A.b0(a,o,a0,a1)
m=b.z
l=A.d9(a,m,a0,a1)
if(n===o&&l===m)return b
return A.jl(a,n,l)
case 12:k=b.y
j=A.b0(a,k,a0,a1)
i=b.z
h=A.nj(a,i,a0,a1)
if(j===k&&h===i)return b
return A.kx(a,j,h)
case 13:g=b.z
a1+=g.length
f=A.d9(a,g,a0,a1)
o=b.y
n=A.b0(a,o,a0,a1)
if(f===g&&n===o)return b
return A.jm(a,n,f,!0)
case 14:e=b.y
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw A.b(A.dk("Attempted to substitute unexpected RTI kind "+c))}},
d9(a,b,c,d){var s,r,q,p,o=b.length,n=A.iw(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.b0(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
nk(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.iw(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.b0(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
nj(a,b,c,d){var s,r=b.a,q=A.d9(a,r,c,d),p=b.b,o=A.d9(a,p,c,d),n=b.c,m=A.nk(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.eQ()
s.a=q
s.b=o
s.c=m
return s},
v(a,b){a[v.arrayRti]=b
return a},
kW(a){var s,r=a.$S
if(r!=null){if(typeof r=="number")return A.nB(r)
s=a.$S()
return s}return null},
nG(a,b){var s
if(A.kd(b))if(a instanceof A.aP){s=A.kW(a)
if(s!=null)return s}return A.ae(a)},
ae(a){if(a instanceof A.w)return A.x(a)
if(Array.isArray(a))return A.as(a)
return A.jt(J.aJ(a))},
as(a){var s=a[v.arrayRti],r=t.b
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
x(a){var s=a.$ti
return s!=null?s:A.jt(a)},
jt(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.mW(a,s)},
mW(a,b){var s=a instanceof A.aP?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.mC(v.typeUniverse,s.name)
b.$ccache=r
return r},
nB(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.fp(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
nA(a){return A.bt(A.x(a))},
ni(a){var s=a instanceof A.aP?A.kW(a):null
if(s!=null)return s
if(t.dm.b(a))return J.ls(a).a
if(Array.isArray(a))return A.as(a)
return A.ae(a)},
bt(a){var s=a.w
return s==null?a.w=A.kH(a):s},
kH(a){var s,r,q=a.at,p=q.replace(/\*/g,"")
if(p===q)return a.w=new A.iu(a)
s=A.fp(v.typeUniverse,p,!0)
r=s.w
return r==null?s.w=A.kH(s):r},
al(a){return A.bt(A.fp(v.typeUniverse,a,!1))},
mV(a){var s,r,q,p,o,n,m=this
if(m===t.K)return A.aI(m,a,A.n1)
if(!A.aM(m))if(!(m===t._))s=!1
else s=!0
else s=!0
if(s)return A.aI(m,a,A.n5)
s=m.x
if(s===7)return A.aI(m,a,A.mT)
if(s===1)return A.aI(m,a,A.kN)
r=s===6?m.y:m
q=r.x
if(q===8)return A.aI(m,a,A.mY)
if(r===t.S)p=A.fB
else if(r===t.i||r===t.H)p=A.n0
else if(r===t.N)p=A.n3
else p=r===t.y?A.bP:null
if(p!=null)return A.aI(m,a,p)
if(q===9){o=r.y
if(r.z.every(A.nJ)){m.r="$i"+o
if(o==="l")return A.aI(m,a,A.n_)
return A.aI(m,a,A.n4)}}else if(q===11){n=A.nu(r.y,r.z)
return A.aI(m,a,n==null?A.kN:n)}return A.aI(m,a,A.mR)},
aI(a,b,c){a.b=c
return a.b(b)},
mU(a){var s,r=this,q=A.mQ
if(!A.aM(r))if(!(r===t._))s=!1
else s=!0
else s=!0
if(s)q=A.mH
else if(r===t.K)q=A.mF
else{s=A.dd(r)
if(s)q=A.mS}r.a=q
return r.a(a)},
fC(a){var s,r=a.x
if(!A.aM(a))if(!(a===t._))if(!(a===t.J))if(r!==7)if(!(r===6&&A.fC(a.y)))s=r===8&&A.fC(a.y)||a===t.P||a===t.T
else s=!0
else s=!0
else s=!0
else s=!0
else s=!0
return s},
mR(a){var s=this
if(a==null)return A.fC(s)
return A.nI(v.typeUniverse,A.nG(a,s),s)},
mT(a){if(a==null)return!0
return this.y.b(a)},
n4(a){var s,r=this
if(a==null)return A.fC(r)
s=r.r
if(a instanceof A.w)return!!a[s]
return!!J.aJ(a)[s]},
n_(a){var s,r=this
if(a==null)return A.fC(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.r
if(a instanceof A.w)return!!a[s]
return!!J.aJ(a)[s]},
mQ(a){var s,r=this
if(a==null){s=A.dd(r)
if(s)return a}else if(r.b(a))return a
A.kI(a,r)},
mS(a){var s=this
if(a==null)return a
else if(s.b(a))return a
A.kI(a,s)},
kI(a,b){throw A.b(A.mr(A.kn(a,A.Z(b,null))))},
kn(a,b){return A.by(a)+": type '"+A.Z(A.ni(a),null)+"' is not a subtype of type '"+b+"'"},
mr(a){return new A.d1("TypeError: "+a)},
S(a,b){return new A.d1("TypeError: "+A.kn(a,b))},
mY(a){var s=this,r=s.x===6?s.y:s
return r.y.b(a)||A.jh(v.typeUniverse,r).b(a)},
n1(a){return a!=null},
mF(a){if(a!=null)return a
throw A.b(A.S(a,"Object"))},
n5(a){return!0},
mH(a){return a},
kN(a){return!1},
bP(a){return!0===a||!1===a},
jo(a){if(!0===a)return!0
if(!1===a)return!1
throw A.b(A.S(a,"bool"))},
ox(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.b(A.S(a,"bool"))},
ow(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.b(A.S(a,"bool?"))},
ix(a){if(typeof a=="number")return a
throw A.b(A.S(a,"double"))},
oz(a){if(typeof a=="number")return a
if(a==null)return a
throw A.b(A.S(a,"double"))},
oy(a){if(typeof a=="number")return a
if(a==null)return a
throw A.b(A.S(a,"double?"))},
fB(a){return typeof a=="number"&&Math.floor(a)===a},
u(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.b(A.S(a,"int"))},
oA(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.b(A.S(a,"int"))},
kC(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.b(A.S(a,"int?"))},
n0(a){return typeof a=="number"},
kD(a){if(typeof a=="number")return a
throw A.b(A.S(a,"num"))},
oB(a){if(typeof a=="number")return a
if(a==null)return a
throw A.b(A.S(a,"num"))},
mE(a){if(typeof a=="number")return a
if(a==null)return a
throw A.b(A.S(a,"num?"))},
n3(a){return typeof a=="string"},
P(a){if(typeof a=="string")return a
throw A.b(A.S(a,"String"))},
oC(a){if(typeof a=="string")return a
if(a==null)return a
throw A.b(A.S(a,"String"))},
mG(a){if(typeof a=="string")return a
if(a==null)return a
throw A.b(A.S(a,"String?"))},
kQ(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.Z(a[q],b)
return s},
nc(a,b){var s,r,q,p,o,n,m=a.y,l=a.z
if(""===m)return"("+A.kQ(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.Z(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
kJ(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=", "
if(a6!=null){s=a6.length
if(a5==null){a5=A.v([],t.s)
r=null}else r=a5.length
q=a5.length
for(p=s;p>0;--p)B.a.n(a5,"T"+(q+p))
for(o=t.X,n=t._,m="<",l="",p=0;p<s;++p,l=a3){k=a5.length
j=k-1-p
if(!(j>=0))return A.d(a5,j)
m=B.h.B(m+l,a5[j])
i=a6[p]
h=i.x
if(!(h===2||h===3||h===4||h===5||i===o))if(!(i===n))k=!1
else k=!0
else k=!0
if(!k)m+=" extends "+A.Z(i,a5)}m+=">"}else{m=""
r=null}o=a4.y
g=a4.z
f=g.a
e=f.length
d=g.b
c=d.length
b=g.c
a=b.length
a0=A.Z(o,a5)
for(a1="",a2="",p=0;p<e;++p,a2=a3)a1+=a2+A.Z(f[p],a5)
if(c>0){a1+=a2+"["
for(a2="",p=0;p<c;++p,a2=a3)a1+=a2+A.Z(d[p],a5)
a1+="]"}if(a>0){a1+=a2+"{"
for(a2="",p=0;p<a;p+=3,a2=a3){a1+=a2
if(b[p+1])a1+="required "
a1+=A.Z(b[p+2],a5)+" "+b[p]}a1+="}"}if(r!=null){a5.toString
a5.length=r}return m+"("+a1+") => "+a0},
Z(a,b){var s,r,q,p,o,n,m,l=a.x
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=A.Z(a.y,b)
return s}if(l===7){r=a.y
s=A.Z(r,b)
q=r.x
return(q===12||q===13?"("+s+")":s)+"?"}if(l===8)return"FutureOr<"+A.Z(a.y,b)+">"
if(l===9){p=A.nl(a.y)
o=a.z
return o.length>0?p+("<"+A.kQ(o,b)+">"):p}if(l===11)return A.nc(a,b)
if(l===12)return A.kJ(a,b,null)
if(l===13)return A.kJ(a.y,b,a.z)
if(l===14){n=a.y
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.d(b,n)
return b[n]}return"?"},
nl(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
mD(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
mC(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.fp(a,b,!1)
else if(typeof m=="number"){s=m
r=A.d4(a,5,"#")
q=A.iw(s)
for(p=0;p<s;++p)q[p]=r
o=A.d3(a,b,q)
n[b]=o
return o}else return m},
mA(a,b){return A.kA(a.tR,b)},
mz(a,b){return A.kA(a.eT,b)},
fp(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.ku(A.ks(a,null,b,c))
r.set(b,s)
return s},
iv(a,b,c){var s,r,q=b.Q
if(q==null)q=b.Q=new Map()
s=q.get(c)
if(s!=null)return s
r=A.ku(A.ks(a,b,c,!0))
q.set(c,r)
return r},
mB(a,b,c){var s,r,q,p=b.as
if(p==null)p=b.as=new Map()
s=c.at
r=p.get(s)
if(r!=null)return r
q=A.jl(a,b,c.x===10?c.z:[c])
p.set(s,q)
return q},
aG(a,b){b.a=A.mU
b.b=A.mV
return b},
d4(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.ac(null,null)
s.x=b
s.at=c
r=A.aG(a,s)
a.eC.set(c,r)
return r},
kz(a,b,c){var s,r=b.at+"*",q=a.eC.get(r)
if(q!=null)return q
s=A.mw(a,b,r,c)
a.eC.set(r,s)
return s},
mw(a,b,c,d){var s,r,q
if(d){s=b.x
if(!A.aM(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new A.ac(null,null)
q.x=6
q.y=b
q.at=c
return A.aG(a,q)},
jn(a,b,c){var s,r=b.at+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.mv(a,b,r,c)
a.eC.set(r,s)
return s},
mv(a,b,c,d){var s,r,q,p
if(d){s=b.x
if(!A.aM(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&A.dd(b.y)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.J)return t.P
else if(s===6){q=b.y
if(q.x===8&&A.dd(q.y))return q
else return A.kc(a,b)}}p=new A.ac(null,null)
p.x=7
p.y=b
p.at=c
return A.aG(a,p)},
ky(a,b,c){var s,r=b.at+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.mt(a,b,r,c)
a.eC.set(r,s)
return s},
mt(a,b,c,d){var s,r,q
if(d){s=b.x
if(!A.aM(b))if(!(b===t._))r=!1
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return A.d3(a,"ag",[b])
else if(b===t.P||b===t.T)return t.eH}q=new A.ac(null,null)
q.x=8
q.y=b
q.at=c
return A.aG(a,q)},
mx(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.ac(null,null)
s.x=14
s.y=b
s.at=q
r=A.aG(a,s)
a.eC.set(q,r)
return r},
d2(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].at
return s},
ms(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].at}return s},
d3(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.d2(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.ac(null,null)
r.x=9
r.y=b
r.z=c
if(c.length>0)r.c=c[0]
r.at=p
q=A.aG(a,r)
a.eC.set(p,q)
return q},
jl(a,b,c){var s,r,q,p,o,n
if(b.x===10){s=b.y
r=b.z.concat(c)}else{r=c
s=b}q=s.at+(";<"+A.d2(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.ac(null,null)
o.x=10
o.y=s
o.z=r
o.at=q
n=A.aG(a,o)
a.eC.set(q,n)
return n},
my(a,b,c){var s,r,q="+"+(b+"("+A.d2(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.ac(null,null)
s.x=11
s.y=b
s.z=c
s.at=q
r=A.aG(a,s)
a.eC.set(q,r)
return r},
kx(a,b,c){var s,r,q,p,o,n=b.at,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.d2(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.d2(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.ms(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.ac(null,null)
p.x=12
p.y=b
p.z=c
p.at=r
o=A.aG(a,p)
a.eC.set(r,o)
return o},
jm(a,b,c,d){var s,r=b.at+("<"+A.d2(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.mu(a,b,c,r,d)
a.eC.set(r,s)
return s},
mu(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.iw(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.x===1){r[p]=o;++q}}if(q>0){n=A.b0(a,b,r,0)
m=A.d9(a,c,r,0)
return A.jm(a,n,m,c!==m)}}l=new A.ac(null,null)
l.x=13
l.y=b
l.z=c
l.at=d
return A.aG(a,l)},
ks(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
ku(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.ml(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.kt(a,r,l,k,!1)
else if(q===46)r=A.kt(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.b_(a.u,a.e,k.pop()))
break
case 94:k.push(A.mx(a.u,k.pop()))
break
case 35:k.push(A.d4(a.u,5,"#"))
break
case 64:k.push(A.d4(a.u,2,"@"))
break
case 126:k.push(A.d4(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.mn(a,k)
break
case 38:A.mm(a,k)
break
case 42:p=a.u
k.push(A.kz(p,A.b_(p,a.e,k.pop()),a.n))
break
case 63:p=a.u
k.push(A.jn(p,A.b_(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.ky(p,A.b_(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.mk(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.kv(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.mp(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-2)
break
case 43:n=l.indexOf("(",r)
k.push(l.substring(r,n))
k.push(-4)
k.push(a.p)
a.p=k.length
r=n+1
break
default:throw"Bad character "+q}}}m=k.pop()
return A.b_(a.u,a.e,m)},
ml(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
kt(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.x===10)o=o.y
n=A.mD(s,o.y)[p]
if(n==null)A.aN('No "'+p+'" in "'+A.m5(o)+'"')
d.push(A.iv(s,o,n))}else d.push(p)
return m},
mn(a,b){var s,r=a.u,q=A.kr(a,b),p=b.pop()
if(typeof p=="string")b.push(A.d3(r,p,q))
else{s=A.b_(r,a.e,p)
switch(s.x){case 12:b.push(A.jm(r,s,q,a.n))
break
default:b.push(A.jl(r,s,q))
break}}},
mk(a,b){var s,r,q,p,o,n=null,m=a.u,l=b.pop()
if(typeof l=="number")switch(l){case-1:s=b.pop()
r=n
break
case-2:r=b.pop()
s=n
break
default:b.push(l)
r=n
s=r
break}else{b.push(l)
r=n
s=r}q=A.kr(a,b)
l=b.pop()
switch(l){case-3:l=b.pop()
if(s==null)s=m.sEA
if(r==null)r=m.sEA
p=A.b_(m,a.e,l)
o=new A.eQ()
o.a=q
o.b=s
o.c=r
b.push(A.kx(m,p,o))
return
case-4:b.push(A.my(m,b.pop(),q))
return
default:throw A.b(A.dk("Unexpected state under `()`: "+A.o(l)))}},
mm(a,b){var s=b.pop()
if(0===s){b.push(A.d4(a.u,1,"0&"))
return}if(1===s){b.push(A.d4(a.u,4,"1&"))
return}throw A.b(A.dk("Unexpected extended operation "+A.o(s)))},
kr(a,b){var s=b.splice(a.p)
A.kv(a.u,a.e,s)
a.p=b.pop()
return s},
b_(a,b,c){if(typeof c=="string")return A.d3(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.mo(a,b,c)}else return c},
kv(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.b_(a,b,c[s])},
mp(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.b_(a,b,c[s])},
mo(a,b,c){var s,r,q=b.x
if(q===10){if(c===0)return b.y
s=b.z
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.y
q=b.x}else if(c===0)return b
if(q!==9)throw A.b(A.dk("Indexed base must be an interface type"))
s=b.z
if(c<=s.length)return s[c-1]
throw A.b(A.dk("Bad index "+c+" for "+b.l(0)))},
nI(a,b,c){var s,r=A.m6(b),q=r.get(c)
if(q!=null)return q
s=A.M(a,b,null,c,null)
r.set(c,s)
return s},
M(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(!A.aM(d))if(!(d===t._))s=!1
else s=!0
else s=!0
if(s)return!0
r=b.x
if(r===4)return!0
if(A.aM(b))return!1
if(b.x!==1)s=!1
else s=!0
if(s)return!0
q=r===14
if(q)if(A.M(a,c[b.y],c,d,e))return!0
p=d.x
s=b===t.P||b===t.T
if(s){if(p===8)return A.M(a,b,c,d.y,e)
return d===t.P||d===t.T||p===7||p===6}if(d===t.K){if(r===8)return A.M(a,b.y,c,d,e)
if(r===6)return A.M(a,b.y,c,d,e)
return r!==7}if(r===6)return A.M(a,b.y,c,d,e)
if(p===6){s=A.kc(a,d)
return A.M(a,b,c,s,e)}if(r===8){if(!A.M(a,b.y,c,d,e))return!1
return A.M(a,A.jh(a,b),c,d,e)}if(r===7){s=A.M(a,t.P,c,d,e)
return s&&A.M(a,b.y,c,d,e)}if(p===8){if(A.M(a,b,c,d.y,e))return!0
return A.M(a,b,c,A.jh(a,d),e)}if(p===7){s=A.M(a,b,c,t.P,e)
return s||A.M(a,b,c,d.y,e)}if(q)return!1
s=r!==12
if((!s||r===13)&&d===t.Z)return!0
o=r===11
if(o&&d===t.gT)return!0
if(p===13){if(b===t.g)return!0
if(r!==13)return!1
n=b.z
m=d.z
l=n.length
if(l!==m.length)return!1
c=c==null?n:n.concat(c)
e=e==null?m:m.concat(e)
for(k=0;k<l;++k){j=n[k]
i=m[k]
if(!A.M(a,j,c,i,e)||!A.M(a,i,e,j,c))return!1}return A.kM(a,b.y,c,d.y,e)}if(p===12){if(b===t.g)return!0
if(s)return!1
return A.kM(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return A.mZ(a,b,c,d,e)}if(o&&p===11)return A.n2(a,b,c,d,e)
return!1},
kM(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!A.M(a3,a4.y,a5,a6.y,a7))return!1
s=a4.z
r=a6.z
q=s.a
p=r.a
o=q.length
n=p.length
if(o>n)return!1
m=n-o
l=s.b
k=r.b
j=l.length
i=k.length
if(o+j<n+i)return!1
for(h=0;h<o;++h){g=q[h]
if(!A.M(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.M(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.M(a3,k[h],a7,g,a5))return!1}f=s.c
e=r.c
d=f.length
c=e.length
for(b=0,a=0;a<c;a+=3){a0=e[a]
for(;!0;){if(b>=d)return!1
a1=f[b]
b+=3
if(a0<a1)return!1
a2=f[b-2]
if(a1<a0){if(a2)return!1
continue}g=e[a+1]
if(a2&&!g)return!1
g=f[b-1]
if(!A.M(a3,e[a+2],a7,g,a5))return!1
break}}for(;b<d;){if(f[b+1])return!1
b+=3}return!0},
mZ(a,b,c,d,e){var s,r,q,p,o,n,m,l=b.y,k=d.y
for(;l!==k;){s=a.tR[l]
if(s==null)return!1
if(typeof s=="string"){l=s
continue}r=s[k]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.iv(a,b,r[o])
return A.kB(a,p,null,c,d.z,e)}n=b.z
m=d.z
return A.kB(a,n,null,c,m,e)},
kB(a,b,c,d,e,f){var s,r,q,p=b.length
for(s=0;s<p;++s){r=b[s]
q=e[s]
if(!A.M(a,r,d,q,f))return!1}return!0},
n2(a,b,c,d,e){var s,r=b.z,q=d.z,p=r.length
if(p!==q.length)return!1
if(b.y!==d.y)return!1
for(s=0;s<p;++s)if(!A.M(a,r[s],c,q[s],e))return!1
return!0},
dd(a){var s,r=a.x
if(!(a===t.P||a===t.T))if(!A.aM(a))if(r!==7)if(!(r===6&&A.dd(a.y)))s=r===8&&A.dd(a.y)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
nJ(a){var s
if(!A.aM(a))if(!(a===t._))s=!1
else s=!0
else s=!0
return s},
aM(a){var s=a.x
return s===2||s===3||s===4||s===5||a===t.X},
kA(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
iw(a){return a>0?new Array(a):v.typeUniverse.sEA},
ac:function ac(a,b){var _=this
_.a=a
_.b=b
_.w=_.r=_.e=_.d=_.c=null
_.x=0
_.at=_.as=_.Q=_.z=_.y=null},
eQ:function eQ(){this.c=this.b=this.a=null},
iu:function iu(a){this.a=a},
eN:function eN(){},
d1:function d1(a){this.a=a},
mc(){var s,r,q={}
if(self.scheduleImmediate!=null)return A.nn()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(A.at(new A.i2(q),1)).observe(s,{childList:true})
return new A.i1(q,s,r)}else if(self.setImmediate!=null)return A.no()
return A.np()},
md(a){self.scheduleImmediate(A.at(new A.i3(t.M.a(a)),0))},
me(a){self.setImmediate(A.at(new A.i4(t.M.a(a)),0))},
mf(a){t.M.a(a)
A.mq(0,a)},
mq(a,b){var s=new A.is()
s.cZ(a,b)
return s},
iJ(a){return new A.eC(new A.C($.B,a.h("C<0>")),a.h("eC<0>"))},
iA(a,b){a.$2(0,null)
b.b=!0
return b.a},
fA(a,b){A.mI(a,b)},
iz(a,b){b.aq(0,a)},
iy(a,b){b.au(A.av(a),A.aL(a))},
mI(a,b){var s,r,q=new A.iB(b),p=new A.iC(b)
if(a instanceof A.C)a.bU(q,p,t.z)
else{s=t.z
if(a instanceof A.C)a.b5(q,p,s)
else{r=new A.C($.B,t.c)
r.a=8
r.c=a
r.bU(q,p,s)}}},
iL(a){var s=function(b,c){return function(d,e){while(true)try{b(d,e)
break}catch(r){e=r
d=c}}}(a,1)
return $.B.b3(new A.iM(s),t.p,t.S,t.z)},
fK(a,b){var s=A.da(a,"error",t.K)
return new A.bT(s,b==null?A.jK(a):b)},
jK(a){var s
if(t.R.b(a)){s=a.ga_()
if(s!=null)return s}return B.C},
jb(a,b){var s=a==null?b.a(a):a,r=new A.C($.B,b.h("C<0>"))
r.ai(s)
return r},
ko(a,b){var s,r,q
for(s=t.c;r=a.a,(r&4)!==0;)a=s.a(a.c)
if((r&24)!==0){q=b.am()
b.aj(a)
A.bK(b,q)}else{q=t.F.a(b.c)
b.bS(a)
a.aV(q)}},
mi(a,b){var s,r,q,p={},o=p.a=a
for(s=t.c;r=o.a,(r&4)!==0;o=a){a=s.a(o.c)
p.a=a}if((r&24)===0){q=t.F.a(b.c)
b.bS(o)
p.a.aV(q)
return}if((r&16)===0&&b.c==null){b.aj(o)
return}b.a^=2
A.bs(null,null,b.b,t.M.a(new A.ib(p,b)))},
bK(a,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c={},b=c.a=a
for(s=t.t,r=t.F,q=t.b9;!0;){p={}
o=b.a
n=(o&16)===0
m=!n
if(a0==null){if(m&&(o&1)===0){l=s.a(b.c)
A.fD(l.a,l.b)}return}p.a=a0
k=a0.a
for(b=a0;k!=null;b=k,k=j){b.a=null
A.bK(c.a,b)
p.a=k
j=k.a}o=c.a
i=o.c
p.b=m
p.c=i
if(n){h=b.c
h=(h&1)!==0||(h&15)===8}else h=!0
if(h){g=b.b.b
if(m){o=o.b===g
o=!(o||o)}else o=!1
if(o){s.a(i)
A.fD(i.a,i.b)
return}f=$.B
if(f!==g)$.B=g
else f=null
b=b.c
if((b&15)===8)new A.ij(p,c,m).$0()
else if(n){if((b&1)!==0)new A.ii(p,i).$0()}else if((b&2)!==0)new A.ih(c,p).$0()
if(f!=null)$.B=f
b=p.c
if(b instanceof A.C){o=p.a.$ti
o=o.h("ag<2>").b(b)||!o.z[1].b(b)}else o=!1
if(o){q.a(b)
e=p.a.b
if((b.a&24)!==0){d=r.a(e.c)
e.c=null
a0=e.an(d)
e.a=b.a&30|e.a&1
e.c=b.c
c.a=b
continue}else A.ko(b,e)
return}}e=p.a.b
d=r.a(e.c)
e.c=null
a0=e.an(d)
b=p.b
o=p.c
if(!b){e.$ti.c.a(o)
e.a=8
e.c=o}else{s.a(o)
e.a=e.a&1|16
e.c=o}c.a=e
b=e}},
nd(a,b){var s
if(t.C.b(a))return b.b3(a,t.z,t.K,t.l)
s=t.v
if(s.b(a))return s.a(a)
throw A.b(A.jJ(a,"onError",u.c))},
n7(){var s,r
for(s=$.bQ;s!=null;s=$.bQ){$.d8=null
r=s.b
$.bQ=r
if(r==null)$.d7=null
s.a.$0()}},
nh(){$.ju=!0
try{A.n7()}finally{$.d8=null
$.ju=!1
if($.bQ!=null)$.jE().$1(A.kV())}},
kS(a){var s=new A.eD(a),r=$.d7
if(r==null){$.bQ=$.d7=s
if(!$.ju)$.jE().$1(A.kV())}else $.d7=r.b=s},
ng(a){var s,r,q,p=$.bQ
if(p==null){A.kS(a)
$.d8=$.d7
return}s=new A.eD(a)
r=$.d8
if(r==null){s.b=p
$.bQ=$.d8=s}else{q=r.b
s.b=q
$.d8=r.b=s
if(q==null)$.d7=s}},
jD(a){var s,r=null,q=$.B
if(B.e===q){A.bs(r,r,B.e,a)
return}s=!1
if(s){A.bs(r,r,q,t.M.a(a))
return}A.bs(r,r,q,t.M.a(q.bY(a)))},
oe(a,b){A.da(a,"stream",t.K)
return new A.fd(b.h("fd<0>"))},
kf(a){return new A.cB(null,null,a.h("cB<0>"))},
kR(a){return},
km(a,b,c){var s=b==null?A.nq():b
return t.h.u(c).h("1(2)").a(s)},
mg(a,b){if(b==null)b=A.ns()
if(t.da.b(b))return a.b3(b,t.z,t.K,t.l)
if(t.d5.b(b))return t.v.a(b)
throw A.b(A.ax("handleError callback must take either an Object (the error), or both an Object (the error) and a StackTrace.",null))},
n8(a){},
na(a,b){A.fD(a,b)},
n9(){},
nf(a,b,c,d){var s,r,q,p,o,n
try{b.$1(a.$0())}catch(n){s=A.av(n)
r=A.aL(n)
t.K.a(s)
t.gO.a(r)
q=null
if(q==null)c.$2(s,r)
else{p=J.lp(q)
o=q.ga_()
c.$2(p,o)}}},
mL(a,b,c,d){var s,r,q=a.ap(0),p=$.j1()
if(q!==p){s=t.O.a(new A.iE(b,c,d))
p=q.$ti
r=$.B
q.ah(new A.aF(new A.C(r,p),8,s,null,p.h("@<1>").u(p.c).h("aF<1,2>")))}else b.O(c,d)},
mM(a,b){return new A.iD(a,b)},
fD(a,b){A.ng(new A.iK(a,b))},
kO(a,b,c,d,e){var s,r=$.B
if(r===c)return d.$0()
$.B=c
s=r
try{r=d.$0()
return r}finally{$.B=s}},
kP(a,b,c,d,e,f,g){var s,r=$.B
if(r===c)return d.$1(e)
$.B=c
s=r
try{r=d.$1(e)
return r}finally{$.B=s}},
ne(a,b,c,d,e,f,g,h,i){var s,r=$.B
if(r===c)return d.$2(e,f)
$.B=c
s=r
try{r=d.$2(e,f)
return r}finally{$.B=s}},
bs(a,b,c,d){t.M.a(d)
if(B.e!==c)d=c.bY(d)
A.kS(d)},
i2:function i2(a){this.a=a},
i1:function i1(a,b,c){this.a=a
this.b=b
this.c=c},
i3:function i3(a){this.a=a},
i4:function i4(a){this.a=a},
is:function is(){},
it:function it(a,b){this.a=a
this.b=b},
eC:function eC(a,b){this.a=a
this.b=!1
this.$ti=b},
iB:function iB(a){this.a=a},
iC:function iC(a){this.a=a},
iM:function iM(a){this.a=a},
bT:function bT(a,b){this.a=a
this.b=b},
aY:function aY(a,b){this.a=a
this.$ti=b},
aj:function aj(a,b,c,d,e){var _=this
_.ay=0
_.CW=_.ch=null
_.w=a
_.a=b
_.d=c
_.e=d
_.r=_.f=null
_.$ti=e},
cC:function cC(){},
cB:function cB(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.e=_.d=null
_.$ti=c},
cD:function cD(){},
bq:function bq(a,b){this.a=a
this.$ti=b},
aF:function aF(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
C:function C(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
i8:function i8(a,b){this.a=a
this.b=b},
ig:function ig(a,b){this.a=a
this.b=b},
ic:function ic(a){this.a=a},
id:function id(a){this.a=a},
ie:function ie(a,b,c){this.a=a
this.b=b
this.c=c},
ib:function ib(a,b){this.a=a
this.b=b},
ia:function ia(a,b){this.a=a
this.b=b},
i9:function i9(a,b,c){this.a=a
this.b=b
this.c=c},
ij:function ij(a,b,c){this.a=a
this.b=b
this.c=c},
ik:function ik(a){this.a=a},
ii:function ii(a,b){this.a=a
this.b=b},
ih:function ih(a,b){this.a=a
this.b=b},
eD:function eD(a){this.a=a
this.b=null},
aV:function aV(){},
hJ:function hJ(a){this.a=a},
hK:function hK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hH:function hH(a,b){this.a=a
this.b=b},
hI:function hI(){},
hL:function hL(a,b){this.a=a
this.b=b},
hM:function hM(a,b){this.a=a
this.b=b},
cE:function cE(){},
cF:function cF(){},
bI:function bI(){},
bM:function bM(){},
cH:function cH(){},
cG:function cG(a,b){this.b=a
this.a=null
this.$ti=b},
cW:function cW(a){var _=this
_.a=0
_.c=_.b=null
_.$ti=a},
io:function io(a,b){this.a=a
this.b=b},
bJ:function bJ(a,b){var _=this
_.a=1
_.b=a
_.c=null
_.$ti=b},
fd:function fd(a){this.$ti=a},
iE:function iE(a,b,c){this.a=a
this.b=b
this.c=c},
iD:function iD(a,b){this.a=a
this.b=b},
d6:function d6(){},
iK:function iK(a,b){this.a=a
this.b=b},
f7:function f7(){},
iq:function iq(a,b){this.a=a
this.b=b},
ir:function ir(a,b,c){this.a=a
this.b=b
this.c=c},
kp(a,b){var s=a[b]
return s===a?null:s},
kq(a,b,c){if(c==null)a[b]=a
else a[b]=c},
mj(){var s=Object.create(null)
A.kq(s,"<non-identifier-key>",s)
delete s["<non-identifier-key>"]
return s},
hh(a,b,c){return b.h("@<0>").u(c).h("k1<1,2>").a(A.nw(a,new A.a0(b.h("@<0>").u(c).h("a0<1,2>"))))},
k2(a,b){return new A.a0(a.h("@<0>").u(b).h("a0<1,2>"))},
hj(a){var s,r={}
if(A.jB(a))return"{...}"
s=new A.cu("")
try{B.a.n($.a6,a)
s.a+="{"
r.a=!0
J.de(a,new A.hk(r,s))
s.a+="}"}finally{if(0>=$.a6.length)return A.d($.a6,-1)
$.a6.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
cL:function cL(){},
cO:function cO(a){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=a},
cM:function cM(a,b){this.a=a
this.$ti=b},
cN:function cN(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
e:function e(){},
y:function y(){},
hk:function hk(a,b){this.a=a
this.b=b},
d5:function d5(){},
bC:function bC(){},
cz:function cz(){},
bN:function bN(){},
nb(a,b){var s,r,q,p=null
try{p=JSON.parse(a)}catch(r){s=A.av(r)
q=A.jT(String(s))
throw A.b(q)}q=A.iG(p)
return q},
iG(a){var s
if(a==null)return null
if(typeof a!="object")return a
if(Object.getPrototypeOf(a)!==Array.prototype)return new A.eU(a,Object.create(null))
for(s=0;s<a.length;++s)a[s]=A.iG(a[s])
return a},
eU:function eU(a,b){this.a=a
this.b=b
this.c=null},
eV:function eV(a){this.a=a},
dt:function dt(){},
dv:function dv(){},
dM:function dM(){},
hf:function hf(a){this.a=a},
jU(a,b){return A.lV(a,b,null)},
jA(a,b){var s=A.m2(a,b)
if(s!=null)return s
throw A.b(A.jT(a))},
lE(a,b){a=A.b(a)
if(a==null)a=t.K.a(a)
a.stack=b.l(0)
throw a
throw A.b("unreachable")},
jS(a,b){var s
if(Math.abs(a)<=864e13)s=!1
else s=!0
if(s)A.aN(A.ax("DateTime is outside valid range: "+a,null))
A.da(b,"isUtc",t.y)
return new A.c_(a,b)},
je(a,b,c,d){var s,r=c?J.jZ(a,d):J.lN(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
dP(a,b){var s,r=A.v([],b.h("H<0>"))
for(s=J.bS(a);s.A();)B.a.n(r,b.a(s.gC(s)))
return r},
dQ(a,b){var s=A.lP(a,b)
return s},
lP(a,b){var s,r
if(Array.isArray(a))return A.v(a.slice(0),b.h("H<0>"))
s=A.v([],b.h("H<0>"))
for(r=J.bS(a);r.A();)B.a.n(s,r.gC(r))
return s},
kg(a,b,c){var s=J.bS(b)
if(!s.A())return a
if(c.length===0){do a+=A.o(s.gC(s))
while(s.A())}else{a+=A.o(s.gC(s))
for(;s.A();)a=a+c+A.o(s.gC(s))}return a},
k5(a,b){return new A.e2(a,b.gdP(),b.gdS(),b.gdQ())},
lC(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
lD(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
dw(a){if(a>=10)return""+a
return"0"+a},
by(a){if(typeof a=="number"||A.bP(a)||a==null)return J.df(a)
if(typeof a=="string")return JSON.stringify(a)
return A.m3(a)},
lF(a,b){A.da(a,"error",t.K)
A.da(b,"stackTrace",t.l)
A.lE(a,b)},
dk(a){return new A.dj(a)},
ax(a,b){return new A.aw(!1,null,b,a)},
jJ(a,b,c){return new A.aw(!0,a,b,c)},
kb(a,b){return new A.cq(null,null,!0,a,b,"Value not in range")},
ea(a,b,c,d,e){return new A.cq(b,c,!0,a,d,"Invalid value")},
m4(a,b,c){if(0>a||a>c)throw A.b(A.ea(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.b(A.ea(b,a,c,"end",null))
return b}return c},
N(a,b,c,d){return new A.dH(b,!0,a,d,"Index out of range")},
F(a){return new A.ew(a)},
jj(a){return new A.eu(a)},
K(a){return new A.bo(a)},
T(a){return new A.du(a)},
dz(a){return new A.i7(a)},
jT(a){return new A.h2(a)},
lM(a,b,c){var s,r
if(A.jB(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.v([],t.s)
B.a.n($.a6,a)
try{A.n6(a,s)}finally{if(0>=$.a6.length)return A.d($.a6,-1)
$.a6.pop()}r=A.kg(b,t.V.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
jY(a,b,c){var s,r
if(A.jB(a))return b+"..."+c
s=new A.cu(b)
B.a.n($.a6,a)
try{r=s
r.a=A.kg(r.a,a,", ")}finally{if(0>=$.a6.length)return A.d($.a6,-1)
$.a6.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
n6(a,b){var s,r,q,p,o,n,m,l=a.gG(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.A())return
s=A.o(l.gC(l))
B.a.n(b,s)
k+=s.length+2;++j}if(!l.A()){if(j<=5)return
if(0>=b.length)return A.d(b,-1)
r=b.pop()
if(0>=b.length)return A.d(b,-1)
q=b.pop()}else{p=l.gC(l);++j
if(!l.A()){if(j<=4){B.a.n(b,A.o(p))
return}r=A.o(p)
if(0>=b.length)return A.d(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gC(l);++j
for(;l.A();p=o,o=n){n=l.gC(l);++j
if(j>100){while(!0){if(!(k>75&&j>3))break
if(0>=b.length)return A.d(b,-1)
k-=b.pop().length+2;--j}B.a.n(b,"...")
return}}q=A.o(p)
r=A.o(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
while(!0){if(!(k>80&&b.length>3))break
if(0>=b.length)return A.d(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)B.a.n(b,m)
B.a.n(b,q)
B.a.n(b,r)},
k6(a,b,c,d){var s=B.c.gt(a)
b=B.c.gt(b)
c=B.c.gt(c)
d=B.c.gt(d)
d=A.kh(A.cv(A.cv(A.cv(A.cv($.lk(),s),b),c),d))
return d},
hq:function hq(a,b){this.a=a
this.b=b},
c_:function c_(a,b){this.a=a
this.b=b},
E:function E(){},
dj:function dj(a){this.a=a},
aD:function aD(){},
aw:function aw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cq:function cq(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
dH:function dH(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
e2:function e2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ew:function ew(a){this.a=a},
eu:function eu(a){this.a=a},
bo:function bo(a){this.a=a},
du:function du(a){this.a=a},
e5:function e5(){},
ct:function ct(){},
i7:function i7(a){this.a=a},
h2:function h2(a){this.a=a},
f:function f(){},
I:function I(){},
w:function w(){},
fg:function fg(){},
cu:function cu(a){this.a=a},
nv(){var s=document
s.toString
return s},
j6(a,b){var s=document.createElement("canvas")
s.toString
if(b!=null)B.f.sN(s,b)
if(a!=null)B.f.sM(s,a)
return s},
mh(a,b){if(b.parentNode===a){a.removeChild(b).toString
return!0}return!1},
j8(a,b){var s,r,q,p,o=a===b
if(!o){s=b.tagName
s.toString
r=s==="HTML"}else r=!0
if(a==null||o){if(r)return new A.aS(0,0,t.D)
throw A.b(A.ax("Specified element is not a transitive offset parent of this element.",null))}q=A.j8(a.offsetParent,b)
s=a.offsetLeft
s.toString
s=B.c.T(s)
p=a.offsetTop
p.toString
return new A.aS(q.a+s,q.b+B.c.T(p),t.D)},
lH(a){return A.jV(a,null,null,null).ce(new A.h8(),t.N)},
jV(a,b,c,d){var s,r,q=new A.C($.B,t.ao),p=new A.bq(q,t.bj),o=new XMLHttpRequest()
o.toString
B.D.dR(o,"GET",a,!0)
if(c!=null)o.responseType=c
s=t.gx
r=t.E
A.br(o,"load",s.a(new A.h9(o,p)),!1,r)
A.br(o,"error",s.a(p.gdw()),!1,r)
o.send()
return q},
lL(a){var s=new IntersectionObserver(A.at(a,2))
s.toString
return s},
br(a,b,c,d,e){var s=c==null?null:A.jw(new A.i5(c),t.A)
s=new A.cK(a,b,s,!1,e.h("cK<0>"))
s.bV()
return s},
mP(a){var s
if(t.e5.b(a))return a
s=new A.i_([],[])
s.c=!0
return s.b7(a)},
jw(a,b){var s=$.B
if(s===B.e)return a
return s.dt(a,b)},
m:function m(){},
fJ:function fJ(){},
dg:function dg(){},
di:function di(){},
b6:function b6(){},
b7:function b7(){},
b8:function b8(){},
am:function am(){},
fQ:function fQ(){},
z:function z(){},
bZ:function bZ(){},
fR:function fR(){},
af:function af(){},
ay:function ay(){},
fS:function fS(){},
fT:function fT(){},
fV:function fV(){},
b9:function b9(){},
bw:function bw(){},
az:function az(){},
fW:function fW(){},
c0:function c0(){},
c1:function c1(){},
dy:function dy(){},
fX:function fX(){},
i:function i(){},
h:function h(){},
c:function c(){},
U:function U(){},
dA:function dA(){},
dB:function dB(){},
bz:function bz(){},
bA:function bA(){},
dC:function dC(){},
a_:function a_(){},
h7:function h7(){},
bb:function bb(){},
ah:function ah(){},
h8:function h8(){},
h9:function h9(a,b){this.a=a
this.b=b},
bc:function bc(){},
c6:function c6(){},
dG:function dG(){},
bd:function bd(){},
hb:function hb(){},
hi:function hi(){},
bm:function bm(){},
hn:function hn(){},
dS:function dS(){},
ho:function ho(a){this.a=a},
dT:function dT(){},
hp:function hp(a){this.a=a},
a1:function a1(){},
dU:function dU(){},
q:function q(){},
cl:function cl(){},
a2:function a2(){},
e7:function e7(){},
ai:function ai(){},
ec:function ec(){},
hx:function hx(a){this.a=a},
ef:function ef(){},
W:function W(){},
eh:function eh(){},
a3:function a3(){},
ei:function ei(){},
a4:function a4(){},
ek:function ek(){},
hG:function hG(a){this.a=a},
R:function R(){},
Y:function Y(){},
O:function O(){},
en:function en(){},
eo:function eo(){},
hO:function hO(){},
a5:function a5(){},
eq:function eq(){},
hP:function hP(){},
hT:function hT(){},
ez:function ez(){},
eA:function eA(){},
aX:function aX(){},
ar:function ar(){},
eF:function eF(){},
cI:function cI(){},
eR:function eR(){},
cR:function cR(){},
fb:function fb(){},
fh:function fh(){},
j9:function j9(a,b){this.a=a
this.$ti=b},
cJ:function cJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
eM:function eM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
cK:function cK(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
i5:function i5(a){this.a=a},
i6:function i6(a){this.a=a},
n:function n(){},
c4:function c4(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
eG:function eG(){},
eI:function eI(){},
eJ:function eJ(){},
eK:function eK(){},
eL:function eL(){},
eO:function eO(){},
eP:function eP(){},
eS:function eS(){},
eT:function eT(){},
eY:function eY(){},
eZ:function eZ(){},
f_:function f_(){},
f0:function f0(){},
f1:function f1(){},
f2:function f2(){},
f5:function f5(){},
f6:function f6(){},
f8:function f8(){},
cX:function cX(){},
cY:function cY(){},
f9:function f9(){},
fa:function fa(){},
fc:function fc(){},
fi:function fi(){},
fj:function fj(){},
d_:function d_(){},
d0:function d0(){},
fl:function fl(){},
fm:function fm(){},
fq:function fq(){},
fr:function fr(){},
fs:function fs(){},
ft:function ft(){},
fu:function fu(){},
fv:function fv(){},
fw:function fw(){},
fx:function fx(){},
fy:function fy(){},
fz:function fz(){},
kF(a){var s,r,q
if(a==null)return a
if(typeof a=="string"||typeof a=="number"||A.bP(a))return a
if(A.l1(a))return A.b1(a)
s=Array.isArray(a)
s.toString
if(s){r=[]
q=0
while(!0){s=a.length
s.toString
if(!(q<s))break
r.push(A.kF(a[q]));++q}return r}return a},
b1(a){var s,r,q,p,o,n
if(a==null)return null
s=A.k2(t.N,t.z)
r=Object.getOwnPropertyNames(a)
for(q=r.length,p=0;p<r.length;r.length===q||(0,A.ak)(r),++p){o=r[p]
n=o
n.toString
s.k(0,n,A.kF(a[o]))}return s},
kE(a){var s
if(a==null)return a
if(typeof a=="string"||typeof a=="number"||A.bP(a))return a
if(t.f.b(a))return A.kX(a)
if(t.j.b(a)){s=[]
J.de(a,new A.iF(s))
a=s}return a},
kX(a){var s={}
J.de(a,new A.iR(s))
return s},
l1(a){var s=Object.getPrototypeOf(a),r=s===Object.prototype
r.toString
if(!r){r=s===null
r.toString}else r=!0
return r},
hZ:function hZ(){},
i0:function i0(a,b){this.a=a
this.b=b},
iF:function iF(a){this.a=a},
iR:function iR(a){this.a=a},
i_:function i_(a,b){this.a=a
this.b=b
this.c=!1},
ca:function ca(){},
mJ(a,b,c,d){var s,r,q
A.jo(b)
t.j.a(d)
if(b){s=[c]
B.a.P(s,d)
d=s}r=t.z
q=A.dP(J.jI(d,A.nK(),r),r)
return A.jq(A.jU(t.Z.a(a),q))},
lO(a){return new A.he(new A.cO(t.dx)).$1(a)},
mN(a){return a},
jr(a,b,c){var s
try{if(Object.isExtensible(a)&&!Object.prototype.hasOwnProperty.call(a,b)){Object.defineProperty(a,b,{value:c})
return!0}}catch(s){}return!1},
kL(a,b){if(Object.prototype.hasOwnProperty.call(a,b))return a[b]
return null},
jq(a){if(a==null||typeof a=="string"||typeof a=="number"||A.bP(a))return a
if(a instanceof A.aA)return a.a
if(A.l0(a))return a
if(t.Q.b(a))return a
if(a instanceof A.c_)return A.V(a)
if(t.Z.b(a))return A.kK(a,"$dart_jsFunction",new A.iH())
return A.kK(a,"_$dart_jsObject",new A.iI($.jG()))},
kK(a,b,c){var s=A.kL(a,b)
if(s==null){s=c.$1(a)
A.jr(a,b,s)}return s},
kG(a){if(a==null||typeof a=="string"||typeof a=="number"||typeof a=="boolean")return a
else if(a instanceof Object&&A.l0(a))return a
else if(a instanceof Object&&t.Q.b(a))return a
else if(a instanceof Date)return A.jS(A.u(a.getTime()),!1)
else if(a.constructor===$.jG())return a.o
else return A.jv(a)},
jv(a){if(typeof a=="function")return A.js(a,$.fG(),new A.iN())
if(a instanceof Array)return A.js(a,$.jF(),new A.iO())
return A.js(a,$.jF(),new A.iP())},
js(a,b,c){var s=A.kL(a,b)
if(s==null||!(a instanceof Object)){s=c.$1(a)
A.jr(a,b,s)}return s},
he:function he(a){this.a=a},
iH:function iH(){},
iI:function iI(a){this.a=a},
iN:function iN(){},
iO:function iO(){},
iP:function iP(){},
aA:function aA(a){this.a=a},
c9:function c9(a){this.a=a},
bh:function bh(a,b){this.a=a
this.$ti=b},
bL:function bL(){},
mO(a){var s,r=a.$dart_jsFunction
if(r!=null)return r
s=function(b,c){return function(){return b(c,Array.prototype.slice.apply(arguments))}}(A.mK,a)
s[$.fG()]=a
a.$dart_jsFunction=s
return s},
mK(a,b){t.j.a(b)
return A.jU(t.Z.a(a),b)},
jx(a,b){if(typeof a=="function")return a
else return b.a(A.mO(a))},
nO(a,b){var s=new A.C($.B,b.h("C<0>")),r=new A.bq(s,b.h("bq<0>"))
a.then(A.at(new A.j_(r,b),1),A.at(new A.j0(r),1))
return s},
j_:function j_(a,b){this.a=a
this.b=b},
j0:function j0(a){this.a=a},
hr:function hr(a){this.a=a},
il:function il(){},
aS:function aS(a,b,c){this.a=a
this.b=b
this.$ti=c},
a9:function a9(){},
dN:function dN(){},
ab:function ab(){},
e3:function e3(){},
ht:function ht(){},
el:function el(){},
ad:function ad(){},
es:function es(){},
eW:function eW(){},
eX:function eX(){},
f3:function f3(){},
f4:function f4(){},
fe:function fe(){},
ff:function ff(){},
fn:function fn(){},
fo:function fo(){},
fL:function fL(){},
dl:function dl(){},
fM:function fM(a){this.a=a},
dm:function dm(){},
aO:function aO(){},
e4:function e4(){},
eE:function eE(){},
dn:function dn(){},
bv:function bv(){},
dE:function dE(){},
e9:function e9(){},
eb:function eb(){},
cr:function cr(){},
bE:function bE(){},
eg:function eg(){},
ep:function ep(){},
et:function et(){},
dF:function dF(a){var _=this
_.a=a
_.f=_.e=_.d=_.c=_.b=0
_.x=_.w=_.r=null},
h3:function h3(){},
fO:function fO(){},
hC:function hC(a,b,c,d,e,f,g,h,i){var _=this
_.r=a
_.w=b
_.x=c
_.y=1
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
j7(a){return new A.fP(A.jA(B.h.aD(a,1,3),16)/256,A.jA(B.h.aD(a,3,5),16)/256,A.jA(B.h.aD(a,5,7),16)/256)},
fP:function fP(a,b,c){this.a=a
this.b=b
this.c=c},
h0:function h0(){},
k3(){return new A.bl(A.v([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t.n))},
k7(a,b){return new A.aT(a,b)},
k8(){return new A.aT(0,0)},
e8(a,b,c){return new A.ao(a,b,c)},
k9(){return new A.ao(0,0,0)},
er(){return new A.cx(A.v([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t.n))},
kj(a,b,c){return new A.aW(a,b,c)},
kk(){return new A.aW(0,0,0)},
h4:function h4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aR:function aR(a){this.a=a},
bl:function bl(a){this.a=a},
aT:function aT(a,b){this.a=a
this.b=b},
ao:function ao(a,b,c){this.a=a
this.b=b
this.c=c},
cp:function cp(a){this.b=a},
cw:function cw(a){this.a=a},
cx:function cx(a){this.a=a},
aW:function aW(a,b,c){this.a=a
this.b=b
this.c=c},
h5:function h5(){},
h6:function h6(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
j4(a,b,c,d,e){return new A.b5(b,c,d,e)},
jL(){return new A.bV(1,0)},
jQ(){return new A.dq(16640,1)},
cA(a){return new A.hV(a)},
jf(a){return new A.hl(a)},
jg(a){return new A.hm(a)},
ee(a){return new A.hy(a)},
hW(){return new A.ey(A.v([new A.b5(0,2,8,0)],t.U))},
mb(){var s,r,q,p=$.jk
if(p==null)try{p=A.j6(null,null)
s=A.hh(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],t.N,t.z)
r=B.f.aB(p,"webgl",s)
if(r==null)r=B.f.aB(p,"experimental-webgl",s)
t.eV.a(r)
$.jk=!0
p=!0}catch(q){$.jk=!1
p=!1}p.toString
return p},
ma(a,b){var s,r,q,p,o,n,m=b.getSupportedExtensions()
if(m==null)return
s=A.v([],t.s)
for(r=a.f,q=r.length,p=J.aK(m),o=0;o<r.length;r.length===q||(0,A.ak)(r),++o){n=r[o]
if(!p.c0(m,n))B.a.n(s,n)}if(s.length!==0)throw A.b(A.dz("Invalid webgl extensions\n"+A.o(s)))},
b5:function b5(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
bV:function bV(a,b){this.a=a
this.b=b},
dq:function dq(a,b){this.a=a
this.f=b},
fU:function fU(){},
ha:function ha(a,b,c){this.a=a
this.b=b
this.c=c},
ex:function ex(a){this.b=a},
fN:function fN(){},
fY:function fY(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
dx:function dx(){},
dD:function dD(){},
bU:function bU(){var _=this
_.b=_.a=0
_.f=_.e=_.d=_.c=null},
h_:function h_(){var _=this
_.b=_.a=0
_.f=_.e=_.d=_.c=null},
fZ:function fZ(){var _=this
_.b=_.a=0
_.f=_.e=_.d=_.c=null},
dR:function dR(){},
cn:function cn(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null},
bn:function bn(a,b){var _=this
_.a=a
_.b=b
_.f=_.e=_.d=_.c=null},
bH:function bH(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.f=_.e=_.d=null},
hS:function hS(){},
h1:function h1(a){this.a=a
this.c=this.b=null},
hU:function hU(a){this.a=a
this.c=this.b=null},
hV:function hV(a){this.a=a
this.c=this.b=null},
hl:function hl(a){this.a=a
this.c=this.b=null},
hm:function hm(a){this.a=a
this.c=this.b=null},
hy:function hy(a){this.a=a
this.c=this.b=null},
ey:function ey(a){this.a=a},
hw:function hw(a,b,c,d){var _=this
_.b=a
_.c=b
_.e=c
_.f=d},
hY:function hY(){this.a=null},
hD:function hD(a,b,c,d,e,f,g,h){var _=this
_.c=a
_.d=b
_.e=c
_.f=d
_.r=e
_.w=f
_.x=g
_.a=h},
hE:function hE(a,b,c,d,e){var _=this
_.c=a
_.d=b
_.e=c
_.f=d
_.a=e},
hF:function hF(a,b,c,d,e,f){var _=this
_.c=a
_.d=b
_.e=c
_.f=d
_.r=e
_.w=null
_.a=f},
fk:function fk(){},
hN:function hN(a,b,c){this.f=a
this.c=b
this.a=c},
hX:function hX(a,b){this.c=a
this.a=b},
eB:function eB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=!1
_.f=null},
dh:function dh(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
b3:function b3(){},
bx:function bx(){},
c5:function c5(){},
cd:function cd(a){this.a=a
this.b=!1},
hz:function hz(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.Q=l
_.as=m
_.at=n
_.ax=o
_.ay=p
_.ch=q
_.CW=r
_.cx=s
_.cy=a0
_.db=0
_.dx=null},
k0(a,b){return new A.dO(a,b)},
dO:function dO(a,b){this.a=a
this.b=b},
hB:function hB(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
cs:function cs(){},
l0(a){return t.fK.b(a)||t.A.b(a)||t.dz.b(a)||t.gb.b(a)||t.G.b(a)||t.g4.b(a)||t.g2.b(a)},
nR(a){A.l4(new A.cb("Field '"+a+"' has been assigned during initialization."),new Error())},
D(){A.l4(new A.cb("Field '' has not been initialized."),new Error())},
nM(){var s,r,q,p="webglcontextlost",o=$.lj(),n=$.li(),m=t.Z
o.k(0,"OnScreenOrientation",A.jx(n.gcu(),m))
o.k(0,"OnReport",A.jx(n.gcs(),m))
o.k(0,"Kill",A.jx(n.gcq(),m))
m=n.b
if(!A.mb())A.aN(A.dz("WebGL is not available"))
o=m.a
s=o.style
s.position="absolute"
s.width="100%"
s.height="100%"
s.top="0"
s.left="0"
s=A.lL(m.gcJ())
m.f=s
s.observe(o)
s=n.c
r=window
r.toString
s.x=B.j.c9(r,s.gbv())
r=t.ge
s.sbQ(r.a(n.gcP()))
s.sbR(r.a(n.gcR()))
r=n.a
r.children.toString
r.appendChild(o).toString
r=n.d
s=window
s.toString
B.a.n(r,A.br(s,"beforeunload",t.gq.a(n.gcD()),!1,t.d))
s=window
s.toString
B.a.n(r,A.br(s,"resize",t.fi.a(n.gcN()),!1,t.A))
s=window
s.toString
B.a.n(r,A.br(s,"deviceorientation",t.aA.a(n.gcF()),!1,t.ey))
s=t.eJ
q=s.h("~(1)?")
s=s.c
B.a.n(r,A.br(o,p,q.a(n.gcT()),!1,s))
B.a.n(r,A.br(o,p,q.a(n.gcV()),!1,s))
s=m.c
B.a.n(r,new A.aY(s,A.x(s).h("aY<1>")).c6(n.gcH()))
m=m.d
B.a.n(r,new A.aY(m,A.x(m).h("aY<1>")).c6(n.gcL()))
n.ae()
n.a2(new A.cd(new A.h0()))}},B={}
var w=[A,J,B]
var $={}
A.jc.prototype={}
J.bB.prototype={
J(a,b){return a===b},
gt(a){return A.co(a)},
l(a){return"Instance of '"+A.hv(a)+"'"},
c8(a,b){throw A.b(A.k5(a,t.B.a(b)))},
gF(a){return A.bt(A.jt(this))}}
J.dI.prototype={
l(a){return String(a)},
gt(a){return a?519018:218159},
gF(a){return A.bt(t.y)},
$iA:1,
$iiQ:1}
J.c8.prototype={
J(a,b){return null==b},
l(a){return"null"},
gt(a){return 0},
$iA:1,
$iI:1}
J.a.prototype={}
J.bi.prototype={
gt(a){return 0},
l(a){return String(a)}}
J.e6.prototype={}
J.bp.prototype={}
J.an.prototype={
l(a){var s=a[$.fG()]
if(s==null)return this.ck(a)
return"JavaScript function for "+J.df(s)},
$iba:1}
J.bf.prototype={
gt(a){return 0},
l(a){return String(a)}}
J.bg.prototype={
gt(a){return 0},
l(a){return String(a)}}
J.H.prototype={
n(a,b){A.as(a).c.a(b)
if(!!a.fixed$length)A.aN(A.F("add"))
a.push(b)},
P(a,b){var s
A.as(a).h("f<1>").a(b)
if(!!a.fixed$length)A.aN(A.F("addAll"))
if(Array.isArray(b)){this.d_(a,b)
return}for(s=J.bS(b);s.A();)a.push(s.gC(s))},
d_(a,b){var s,r
t.b.a(b)
s=b.length
if(s===0)return
if(a===b)throw A.b(A.T(a))
for(r=0;r<s;++r)a.push(b[r])},
dv(a){if(!!a.fixed$length)A.aN(A.F("clear"))
a.length=0},
q(a,b){var s,r
A.as(a).h("~(1)").a(b)
s=a.length
for(r=0;r<s;++r){b.$1(a[r])
if(a.length!==s)throw A.b(A.T(a))}},
aw(a,b,c){var s=A.as(a)
return new A.aC(a,s.u(c).h("1(2)").a(b),s.h("@<1>").u(c).h("aC<1,2>"))},
dG(a,b,c,d){var s,r,q
d.a(b)
A.as(a).u(d).h("1(1,2)").a(c)
s=a.length
for(r=b,q=0;q<s;++q){r=c.$2(r,a[q])
if(a.length!==s)throw A.b(A.T(a))}return r},
p(a,b){if(!(b<a.length))return A.d(a,b)
return a[b]},
gv(a){if(a.length>0)return a[0]
throw A.b(A.jX())},
c0(a,b){var s
for(s=0;s<a.length;++s)if(J.fH(a[s],b))return!0
return!1},
l(a){return A.jY(a,"[","]")},
gG(a){return new J.b4(a,a.length,A.as(a).h("b4<1>"))},
gt(a){return A.co(a)},
gj(a){return a.length},
i(a,b){A.u(b)
if(!(b>=0&&b<a.length))throw A.b(A.fE(a,b))
return a[b]},
k(a,b,c){var s
A.as(a).c.a(c)
if(!!a.immutable$list)A.aN(A.F("indexed set"))
s=a.length
if(b>=s)throw A.b(A.fE(a,b))
a[b]=c},
B(a,b){var s=A.as(a)
s.h("l<1>").a(b)
s=A.dQ(a,s.c)
this.P(s,b)
return s},
$ik:1,
$if:1,
$il:1}
J.hc.prototype={}
J.b4.prototype={
gC(a){var s=this.d
return s==null?this.$ti.c.a(s):s},
A(){var s,r=this,q=r.a,p=q.length
if(r.b!==p){q=A.ak(q)
throw A.b(q)}s=r.c
if(s>=p){r.sbG(null)
return!1}r.sbG(q[s]);++r.c
return!0},
sbG(a){this.d=this.$ti.h("1?").a(a)},
$ia8:1}
J.be.prototype={
aZ(a,b){var s
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=B.d.gb1(b)
if(this.gb1(a)===s)return 0
if(this.gb1(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gb1(a){return a===0?1/a<0:a<0},
T(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.b(A.F(""+a+".round()"))},
du(a,b,c){if(B.d.aZ(b,c)>0)throw A.b(A.kU(b))
if(this.aZ(a,b)<0)return b
if(this.aZ(a,c)>0)return c
return a},
l(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gt(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
B(a,b){return a+b},
m(a,b){return a*b},
ba(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
dm(a,b){return(a|0)===a?a/b|0:this.dn(a,b)},
dn(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.b(A.F("Result of truncating division is "+A.o(s)+": "+A.o(a)+" ~/ "+b))},
bT(a,b){var s
if(a>0)s=this.dk(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
dk(a,b){return b>31?0:a>>>b},
gF(a){return A.bt(t.H)},
$it:1,
$iJ:1}
J.c7.prototype={
gF(a){return A.bt(t.S)},
$iA:1,
$ij:1}
J.dK.prototype={
gF(a){return A.bt(t.i)},
$iA:1}
J.aQ.prototype={
B(a,b){A.P(b)
return a+b},
aD(a,b,c){return a.substring(b,A.m4(b,c,a.length))},
m(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.b(B.B)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
l(a){return a},
gt(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gF(a){return A.bt(t.N)},
gj(a){return a.length},
i(a,b){A.u(b)
if(!(b>=0&&b<a.length))throw A.b(A.fE(a,b))
return a[b]},
$iA:1,
$ip:1}
A.cb.prototype={
l(a){return"LateInitializationError: "+this.a}}
A.iY.prototype={
$0(){return A.jb(null,t.P)},
$S:12}
A.hA.prototype={}
A.k.prototype={}
A.aa.prototype={
gG(a){var s=this
return new A.bj(s,s.gj(s),A.x(s).h("bj<aa.E>"))},
q(a,b){var s,r,q=this
A.x(q).h("~(aa.E)").a(b)
s=q.gj(q)
for(r=0;r<s;++r){b.$1(q.p(0,r))
if(s!==q.gj(q))throw A.b(A.T(q))}},
aw(a,b,c){var s=A.x(this)
return new A.aC(this,s.u(c).h("1(aa.E)").a(b),s.h("@<aa.E>").u(c).h("aC<1,2>"))}}
A.bj.prototype={
gC(a){var s=this.d
return s==null?this.$ti.c.a(s):s},
A(){var s,r=this,q=r.a,p=J.aK(q),o=p.gj(q)
if(r.b!==o)throw A.b(A.T(q))
s=r.c
if(s>=o){r.sa6(null)
return!1}r.sa6(p.p(q,s));++r.c
return!0},
sa6(a){this.d=this.$ti.h("1?").a(a)},
$ia8:1}
A.bk.prototype={
gG(a){var s=this.a,r=A.x(this)
return new A.ce(s.gG(s),this.b,r.h("@<1>").u(r.z[1]).h("ce<1,2>"))},
gj(a){var s=this.a
return s.gj(s)}}
A.c2.prototype={$ik:1}
A.ce.prototype={
A(){var s=this,r=s.b
if(r.A()){s.sa6(s.c.$1(r.gC(r)))
return!0}s.sa6(null)
return!1},
gC(a){var s=this.a
return s==null?this.$ti.z[1].a(s):s},
sa6(a){this.a=this.$ti.h("2?").a(a)},
$ia8:1}
A.aC.prototype={
gj(a){return J.fI(this.a)},
p(a,b){return this.b.$1(J.lo(this.a,b))}}
A.Q.prototype={}
A.bF.prototype={
gt(a){var s=this._hashCode
if(s!=null)return s
s=664597*B.h.gt(this.a)&536870911
this._hashCode=s
return s},
l(a){return'Symbol("'+this.a+'")'},
J(a,b){if(b==null)return!1
return b instanceof A.bF&&this.a===b.a},
$ibG:1}
A.bX.prototype={}
A.bW.prototype={
l(a){return A.hj(this)},
$iG:1}
A.bY.prototype={
gj(a){return this.b.length},
gbN(){var s=this.$keys
if(s==null){s=Object.keys(this.a)
this.$keys=s}return s},
a9(a,b){if(typeof b!="string")return!1
if("__proto__"===b)return!1
return this.a.hasOwnProperty(b)},
i(a,b){if(!this.a9(0,b))return null
return this.b[this.a[b]]},
q(a,b){var s,r,q,p
this.$ti.h("~(1,2)").a(b)
s=this.gbN()
r=this.b
for(q=s.length,p=0;p<q;++p)b.$2(s[p],r[p])},
gH(a){return new A.cP(this.gbN(),this.$ti.h("cP<1>"))}}
A.cP.prototype={
gj(a){return this.a.length},
gG(a){var s=this.a
return new A.cQ(s,s.length,this.$ti.h("cQ<1>"))}}
A.cQ.prototype={
gC(a){var s=this.d
return s==null?this.$ti.c.a(s):s},
A(){var s=this,r=s.c
if(r>=s.b){s.sa7(null)
return!1}s.sa7(s.a[r]);++s.c
return!0},
sa7(a){this.d=this.$ti.h("1?").a(a)},
$ia8:1}
A.dJ.prototype={
gdP(){var s=this.a
return s},
gdS(){var s,r,q,p,o=this
if(o.c===1)return B.o
s=o.d
r=s.length-o.e.length-o.f
if(r===0)return B.o
q=[]
for(p=0;p<r;++p){if(!(p<s.length))return A.d(s,p)
q.push(s[p])}q.fixed$length=Array
q.immutable$list=Array
return q},
gdQ(){var s,r,q,p,o,n,m,l,k=this
if(k.c!==0)return B.p
s=k.e
r=s.length
q=k.d
p=q.length-r-k.f
if(r===0)return B.p
o=new A.a0(t.eo)
for(n=0;n<r;++n){if(!(n<s.length))return A.d(s,n)
m=s[n]
l=p+n
if(!(l>=0&&l<q.length))return A.d(q,l)
o.k(0,new A.bF(m),q[l])}return new A.bX(o,t.gF)},
$ijW:1}
A.hu.prototype={
$2(a,b){var s
A.P(a)
s=this.a
s.b=s.b+"$"+a
B.a.n(this.b,a)
B.a.n(this.c,b);++s.a},
$S:2}
A.hQ.prototype={
L(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
if(p==null)return null
s=Object.create(null)
r=q.b
if(r!==-1)s.arguments=p[r+1]
r=q.c
if(r!==-1)s.argumentsExpr=p[r+1]
r=q.d
if(r!==-1)s.expr=p[r+1]
r=q.e
if(r!==-1)s.method=p[r+1]
r=q.f
if(r!==-1)s.receiver=p[r+1]
return s}}
A.cm.prototype={
l(a){return"Null check operator used on a null value"}}
A.dL.prototype={
l(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.ev.prototype={
l(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.hs.prototype={
l(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.c3.prototype={}
A.cZ.prototype={
l(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$iX:1}
A.aP.prototype={
l(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.l5(r==null?"unknown":r)+"'"},
$iba:1,
gdY(){return this},
$C:"$1",
$R:1,
$D:null}
A.dr.prototype={$C:"$0",$R:0}
A.ds.prototype={$C:"$2",$R:2}
A.em.prototype={}
A.ej.prototype={
l(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.l5(s)+"'"}}
A.bu.prototype={
J(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.bu))return!1
return this.$_target===b.$_target&&this.a===b.a},
gt(a){return(A.iZ(this.a)^A.co(this.$_target))>>>0},
l(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.hv(this.a)+"'")}}
A.eH.prototype={
l(a){return"Reading static variable '"+this.a+"' during its initialization"}}
A.ed.prototype={
l(a){return"RuntimeError: "+this.a}}
A.ip.prototype={}
A.a0.prototype={
gj(a){return this.a},
gH(a){return new A.aB(this,A.x(this).h("aB<1>"))},
a9(a,b){var s=this.b
if(s==null)return!1
return s[b]!=null},
P(a,b){J.de(A.x(this).h("G<1,2>").a(b),new A.hd(this))},
i(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.dL(b)},
dL(a){var s,r,q=this.d
if(q==null)return null
s=q[this.c4(a)]
r=this.c5(s,a)
if(r<0)return null
return s[r].b},
k(a,b,c){var s,r,q,p,o,n,m=this,l=A.x(m)
l.c.a(b)
l.z[1].a(c)
if(typeof b=="string"){s=m.b
m.by(s==null?m.b=m.aP():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=m.c
m.by(r==null?m.c=m.aP():r,b,c)}else{q=m.d
if(q==null)q=m.d=m.aP()
p=m.c4(b)
o=q[p]
if(o==null)q[p]=[m.aQ(b,c)]
else{n=m.c5(o,b)
if(n>=0)o[n].b=c
else o.push(m.aQ(b,c))}}},
q(a,b){var s,r,q=this
A.x(q).h("~(1,2)").a(b)
s=q.e
r=q.r
for(;s!=null;){b.$2(s.a,s.b)
if(r!==q.r)throw A.b(A.T(q))
s=s.c}},
by(a,b,c){var s,r=A.x(this)
r.c.a(b)
r.z[1].a(c)
s=a[b]
if(s==null)a[b]=this.aQ(b,c)
else s.b=c},
aQ(a,b){var s=this,r=A.x(s),q=new A.hg(r.c.a(a),r.z[1].a(b))
if(s.e==null)s.e=s.f=q
else s.f=s.f.c=q;++s.a
s.r=s.r+1&1073741823
return q},
c4(a){return J.j3(a)&1073741823},
c5(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.fH(a[r].a,b))return r
return-1},
l(a){return A.hj(this)},
aP(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
$ik1:1}
A.hd.prototype={
$2(a,b){var s=this.a,r=A.x(s)
s.k(0,r.c.a(a),r.z[1].a(b))},
$S(){return A.x(this.a).h("~(1,2)")}}
A.hg.prototype={}
A.aB.prototype={
gj(a){return this.a.a},
gG(a){var s=this.a,r=new A.cc(s,s.r,this.$ti.h("cc<1>"))
r.c=s.e
return r},
q(a,b){var s,r,q
this.$ti.h("~(1)").a(b)
s=this.a
r=s.e
q=s.r
for(;r!=null;){b.$1(r.a)
if(q!==s.r)throw A.b(A.T(s))
r=r.c}}}
A.cc.prototype={
gC(a){return this.d},
A(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.b(A.T(q))
s=r.c
if(s==null){r.sa7(null)
return!1}else{r.sa7(s.a)
r.c=s.c
return!0}},
sa7(a){this.d=this.$ti.h("1?").a(a)},
$ia8:1}
A.iT.prototype={
$1(a){return this.a(a)},
$S:4}
A.iU.prototype={
$2(a,b){return this.a(a,b)},
$S:22}
A.iV.prototype={
$1(a){return this.a(A.P(a))},
$S:13}
A.dV.prototype={
gF(a){return B.K},
$iA:1,
$ij5:1}
A.ci.prototype={$iL:1}
A.dW.prototype={
gF(a){return B.L},
$iA:1}
A.bD.prototype={
gj(a){return a.length},
$ir:1}
A.cg.prototype={
i(a,b){A.u(b)
A.aH(b,a,a.length)
return a[b]},
k(a,b,c){A.ix(c)
A.aH(b,a,a.length)
a[b]=c},
$ik:1,
$if:1,
$il:1}
A.ch.prototype={
k(a,b,c){A.u(c)
A.aH(b,a,a.length)
a[b]=c},
$ik:1,
$if:1,
$il:1}
A.cf.prototype={
gF(a){return B.M},
$iA:1,
$ija:1}
A.dX.prototype={
gF(a){return B.N},
$iA:1}
A.dY.prototype={
gF(a){return B.O},
i(a,b){A.u(b)
A.aH(b,a,a.length)
return a[b]},
$iA:1}
A.dZ.prototype={
gF(a){return B.P},
i(a,b){A.u(b)
A.aH(b,a,a.length)
return a[b]},
$iA:1}
A.e_.prototype={
gF(a){return B.Q},
i(a,b){A.u(b)
A.aH(b,a,a.length)
return a[b]},
$iA:1}
A.cj.prototype={
gF(a){return B.S},
i(a,b){A.u(b)
A.aH(b,a,a.length)
return a[b]},
$iA:1,
$iji:1}
A.e0.prototype={
gF(a){return B.T},
i(a,b){A.u(b)
A.aH(b,a,a.length)
return a[b]},
$iA:1}
A.ck.prototype={
gF(a){return B.U},
gj(a){return a.length},
i(a,b){A.u(b)
A.aH(b,a,a.length)
return a[b]},
$iA:1}
A.e1.prototype={
gF(a){return B.V},
gj(a){return a.length},
i(a,b){A.u(b)
A.aH(b,a,a.length)
return a[b]},
$iA:1,
$icy:1}
A.cS.prototype={}
A.cT.prototype={}
A.cU.prototype={}
A.cV.prototype={}
A.ac.prototype={
h(a){return A.iv(v.typeUniverse,this,a)},
u(a){return A.mB(v.typeUniverse,this,a)}}
A.eQ.prototype={}
A.iu.prototype={
l(a){return A.Z(this.a,null)}}
A.eN.prototype={
l(a){return this.a}}
A.d1.prototype={$iaD:1}
A.i2.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:6}
A.i1.prototype={
$1(a){var s,r
this.a.a=t.M.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:33}
A.i3.prototype={
$0(){this.a.$0()},
$S:7}
A.i4.prototype={
$0(){this.a.$0()},
$S:7}
A.is.prototype={
cZ(a,b){if(self.setTimeout!=null)self.setTimeout(A.at(new A.it(this,b),0),a)
else throw A.b(A.F("`setTimeout()` not found."))}}
A.it.prototype={
$0(){this.b.$0()},
$S:0}
A.eC.prototype={
aq(a,b){var s,r=this,q=r.$ti
q.h("1/?").a(b)
if(b==null)b=q.c.a(b)
if(!r.b)r.a.ai(b)
else{s=r.a
if(q.h("ag<1>").b(b))s.bA(b)
else s.aL(b)}},
au(a,b){var s=this.a
if(this.b)s.O(a,b)
else s.bz(a,b)}}
A.iB.prototype={
$1(a){return this.a.$2(0,a)},
$S:1}
A.iC.prototype={
$2(a,b){this.a.$2(1,new A.c3(a,t.l.a(b)))},
$S:36}
A.iM.prototype={
$2(a,b){this.a(A.u(a),b)},
$S:11}
A.bT.prototype={
l(a){return A.o(this.a)},
$iE:1,
ga_(){return this.b}}
A.aY.prototype={}
A.aj.prototype={
aS(){},
aT(){},
sa8(a){this.ch=this.$ti.h("aj<1>?").a(a)},
sal(a){this.CW=this.$ti.h("aj<1>?").a(a)}}
A.cC.prototype={
gd9(){return this.c<4},
dh(a){var s,r
A.x(this).h("aj<1>").a(a)
s=a.CW
r=a.ch
if(s==null)this.sbI(r)
else s.sa8(r)
if(r==null)this.sbO(s)
else r.sal(s)
a.sal(a)
a.sa8(a)},
dl(a,b,c,d){var s,r,q,p,o,n,m=this,l=A.x(m)
l.h("~(1)?").a(a)
t.Y.a(c)
if((m.c&4)!==0){l=new A.bJ($.B,l.h("bJ<1>"))
A.jD(l.gdc())
if(c!=null)l.saR(t.M.a(c))
return l}s=$.B
r=d?1:0
q=A.km(s,a,l.c)
A.mg(s,b)
p=c==null?A.nr():c
t.M.a(p)
l=l.h("aj<1>")
o=new A.aj(m,q,s,r,l)
o.sal(o)
o.sa8(o)
l.a(o)
o.ay=m.c&1
n=m.e
m.sbO(o)
o.sa8(null)
o.sal(n)
if(n==null)m.sbI(o)
else n.sa8(o)
if(m.d==m.e)A.kR(m.a)
return o},
df(a){var s=this,r=A.x(s)
a=r.h("aj<1>").a(r.h("aq<1>").a(a))
if(a.ch===a)return null
r=a.ay
if((r&2)!==0)a.ay=r|4
else{s.dh(a)
if((s.c&2)===0&&s.d==null)s.d4()}return null},
d0(){if((this.c&4)!==0)return new A.bo("Cannot add new events after calling close")
return new A.bo("Cannot add new events while doing an addStream")},
n(a,b){var s=this
A.x(s).c.a(b)
if(!s.gd9())throw A.b(s.d0())
s.aW(b)},
d4(){if((this.c&4)!==0)if(null.gdZ())null.ai(null)
A.kR(this.b)},
sbI(a){this.d=A.x(this).h("aj<1>?").a(a)},
sbO(a){this.e=A.x(this).h("aj<1>?").a(a)},
$ike:1,
$ikw:1,
$iaZ:1}
A.cB.prototype={
aW(a){var s,r=this.$ti
r.c.a(a)
for(s=this.d,r=r.h("cG<1>");s!=null;s=s.ch)s.d2(new A.cG(a,r))}}
A.cD.prototype={
au(a,b){var s
A.da(a,"error",t.K)
s=this.a
if((s.a&30)!==0)throw A.b(A.K("Future already completed"))
if(b==null)b=A.jK(a)
s.bz(a,b)},
ar(a){return this.au(a,null)}}
A.bq.prototype={
aq(a,b){var s,r=this.$ti
r.h("1/?").a(b)
s=this.a
if((s.a&30)!==0)throw A.b(A.K("Future already completed"))
s.ai(r.h("1/").a(b))}}
A.aF.prototype={
dO(a){if((this.c&15)!==6)return!0
return this.b.b.b4(t.m.a(this.d),a.a,t.y,t.K)},
dK(a){var s,r=this,q=r.e,p=null,o=t.z,n=t.K,m=a.a,l=r.b.b
if(t.C.b(q))p=l.dT(q,m,a.b,o,n,t.l)
else p=l.b4(t.v.a(q),m,o,n)
try{o=r.$ti.h("2/").a(p)
return o}catch(s){if(t.eK.b(A.av(s))){if((r.c&1)!==0)throw A.b(A.ax("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.b(A.ax("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.C.prototype={
bS(a){this.a=this.a&1|4
this.c=a},
b5(a,b,c){var s,r,q,p=this.$ti
p.u(c).h("1/(2)").a(a)
s=$.B
if(s===B.e){if(b!=null&&!t.C.b(b)&&!t.v.b(b))throw A.b(A.jJ(b,"onError",u.c))}else{c.h("@<0/>").u(p.c).h("1(2)").a(a)
if(b!=null)b=A.nd(b,s)}r=new A.C(s,c.h("C<0>"))
q=b==null?1:3
this.ah(new A.aF(r,q,a,b,p.h("@<1>").u(c).h("aF<1,2>")))
return r},
ce(a,b){return this.b5(a,null,b)},
bU(a,b,c){var s,r=this.$ti
r.u(c).h("1/(2)").a(a)
s=new A.C($.B,c.h("C<0>"))
this.ah(new A.aF(s,19,a,b,r.h("@<1>").u(c).h("aF<1,2>")))
return s},
dj(a){this.a=this.a&1|16
this.c=a},
aj(a){this.a=a.a&30|this.a&1
this.c=a.c},
ah(a){var s,r=this,q=r.a
if(q<=3){a.a=t.F.a(r.c)
r.c=a}else{if((q&4)!==0){s=t.c.a(r.c)
if((s.a&24)===0){s.ah(a)
return}r.aj(s)}A.bs(null,null,r.b,t.M.a(new A.i8(r,a)))}},
aV(a){var s,r,q,p,o,n,m=this,l={}
l.a=a
if(a==null)return
s=m.a
if(s<=3){r=t.F.a(m.c)
m.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){n=t.c.a(m.c)
if((n.a&24)===0){n.aV(a)
return}m.aj(n)}l.a=m.an(a)
A.bs(null,null,m.b,t.M.a(new A.ig(l,m)))}},
am(){var s=t.F.a(this.c)
this.c=null
return this.an(s)},
an(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
d5(a){var s,r,q,p=this
p.a^=2
try{a.b5(new A.ic(p),new A.id(p),t.P)}catch(q){s=A.av(q)
r=A.aL(q)
A.jD(new A.ie(p,s,r))}},
bD(a){var s,r=this,q=r.$ti
q.h("1/").a(a)
s=r.am()
q.c.a(a)
r.a=8
r.c=a
A.bK(r,s)},
aL(a){var s,r=this
r.$ti.c.a(a)
s=r.am()
r.a=8
r.c=a
A.bK(r,s)},
O(a,b){var s
t.K.a(a)
t.l.a(b)
s=this.am()
this.dj(A.fK(a,b))
A.bK(this,s)},
ai(a){var s=this.$ti
s.h("1/").a(a)
if(s.h("ag<1>").b(a)){this.bA(a)
return}this.d3(a)},
d3(a){var s=this
s.$ti.c.a(a)
s.a^=2
A.bs(null,null,s.b,t.M.a(new A.ia(s,a)))},
bA(a){var s=this.$ti
s.h("ag<1>").a(a)
if(s.b(a)){A.mi(a,this)
return}this.d5(a)},
bz(a,b){this.a^=2
A.bs(null,null,this.b,t.M.a(new A.i9(this,a,b)))},
$iag:1}
A.i8.prototype={
$0(){A.bK(this.a,this.b)},
$S:0}
A.ig.prototype={
$0(){A.bK(this.b,this.a.a)},
$S:0}
A.ic.prototype={
$1(a){var s,r,q,p=this.a
p.a^=2
try{p.aL(p.$ti.c.a(a))}catch(q){s=A.av(q)
r=A.aL(q)
p.O(s,r)}},
$S:6}
A.id.prototype={
$2(a,b){this.a.O(t.K.a(a),t.l.a(b))},
$S:14}
A.ie.prototype={
$0(){this.a.O(this.b,this.c)},
$S:0}
A.ib.prototype={
$0(){A.ko(this.a.a,this.b)},
$S:0}
A.ia.prototype={
$0(){this.a.aL(this.b)},
$S:0}
A.i9.prototype={
$0(){this.a.O(this.b,this.c)},
$S:0}
A.ij.prototype={
$0(){var s,r,q,p,o,n,m=this,l=null
try{q=m.a.a
l=q.b.b.ca(t.O.a(q.d),t.z)}catch(p){s=A.av(p)
r=A.aL(p)
q=m.c&&t.t.a(m.b.a.c).a===s
o=m.a
if(q)o.c=t.t.a(m.b.a.c)
else o.c=A.fK(s,r)
o.b=!0
return}if(l instanceof A.C&&(l.a&24)!==0){if((l.a&16)!==0){q=m.a
q.c=t.t.a(l.c)
q.b=!0}return}if(l instanceof A.C){n=m.b.a
q=m.a
q.c=l.ce(new A.ik(n),t.z)
q.b=!1}},
$S:0}
A.ik.prototype={
$1(a){return this.a},
$S:15}
A.ii.prototype={
$0(){var s,r,q,p,o,n,m,l
try{q=this.a
p=q.a
o=p.$ti
n=o.c
m=n.a(this.b)
q.c=p.b.b.b4(o.h("2/(1)").a(p.d),m,o.h("2/"),n)}catch(l){s=A.av(l)
r=A.aL(l)
q=this.a
q.c=A.fK(s,r)
q.b=!0}},
$S:0}
A.ih.prototype={
$0(){var s,r,q,p,o,n,m=this
try{s=t.t.a(m.a.a.c)
p=m.b
if(p.a.dO(s)&&p.a.e!=null){p.c=p.a.dK(s)
p.b=!1}}catch(o){r=A.av(o)
q=A.aL(o)
p=t.t.a(m.a.a.c)
n=m.b
if(p.a===r)n.c=p
else n.c=A.fK(r,q)
n.b=!0}},
$S:0}
A.eD.prototype={}
A.aV.prototype={
q(a,b){var s,r
A.x(this).h("~(1)").a(b)
s=new A.C($.B,t.c)
r=this.av(null,!0,new A.hJ(s),s.gbE())
r.b2(new A.hK(this,b,r,s))
return s},
gj(a){var s={},r=new A.C($.B,t.fJ)
s.a=0
this.av(new A.hL(s,this),!0,new A.hM(s,r),r.gbE())
return r}}
A.hJ.prototype={
$0(){this.a.bD(null)},
$S:0}
A.hK.prototype={
$1(a){var s=this
A.nf(new A.hH(s.b,A.x(s.a).c.a(a)),new A.hI(),A.mM(s.c,s.d),t.p)},
$S(){return A.x(this.a).h("~(1)")}}
A.hH.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
A.hI.prototype={
$1(a){},
$S:16}
A.hL.prototype={
$1(a){A.x(this.b).c.a(a);++this.a.a},
$S(){return A.x(this.b).h("~(1)")}}
A.hM.prototype={
$0(){this.b.bD(this.a.a)},
$S:0}
A.cE.prototype={
gt(a){return(A.co(this.a)^892482866)>>>0},
J(a,b){if(b==null)return!1
if(this===b)return!0
return b instanceof A.aY&&b.a===this.a}}
A.cF.prototype={
bP(){return this.w.df(this)},
aS(){A.x(this.w).h("aq<1>").a(this)},
aT(){A.x(this.w).h("aq<1>").a(this)}}
A.bI.prototype={
b2(a){var s=A.x(this)
this.sda(A.km(this.d,s.h("~(1)?").a(a),s.c))},
ap(a){var s,r=this,q=r.e&=4294967279
if((q&8)===0){q=r.e=q|8
if((q&64)!==0){s=r.r
if(s.a===1)s.a=3}if((q&32)===0)r.saU(null)
r.f=r.bP()}q=$.j1()
return q},
aS(){},
aT(){},
bP(){return null},
d2(a){var s,r,q=this,p=q.r
if(p==null){p=new A.cW(A.x(q).h("cW<1>"))
q.saU(p)}s=p.c
if(s==null)p.b=p.c=a
else p.c=s.a=a
r=q.e
if((r&64)===0){r|=64
q.e=r
if(r<128)p.bb(q)}},
aW(a){var s,r=this,q=A.x(r).c
q.a(a)
s=r.e
r.e=s|32
r.d.cc(r.a,a,q)
r.e&=4294967263
r.d6((s&4)!==0)},
d6(a){var s,r,q=this,p=q.e
if((p&64)!==0&&q.r.c==null){p=q.e=p&4294967231
if((p&4)!==0)if(p<128){s=q.r
s=s==null?null:s.c==null
s=s!==!1}else s=!1
else s=!1
if(s){p&=4294967291
q.e=p}}for(;!0;a=r){if((p&8)!==0){q.saU(null)
return}r=(p&4)!==0
if(a===r)break
q.e=p^32
if(r)q.aS()
else q.aT()
p=q.e&=4294967263}if((p&64)!==0&&p<128)q.r.bb(q)},
sda(a){this.a=A.x(this).h("~(1)").a(a)},
saU(a){this.r=A.x(this).h("cW<1>?").a(a)},
$iaq:1,
$iaZ:1}
A.bM.prototype={
av(a,b,c,d){var s=this.$ti
s.h("~(1)?").a(a)
t.Y.a(c)
return this.a.dl(s.h("~(1)?").a(a),d,c,b===!0)},
c6(a){return this.av(a,null,null,null)}}
A.cH.prototype={}
A.cG.prototype={}
A.cW.prototype={
bb(a){var s,r=this
r.$ti.h("aZ<1>").a(a)
s=r.a
if(s===1)return
if(s>=1){r.a=1
return}A.jD(new A.io(r,a))
r.a=1}}
A.io.prototype={
$0(){var s,r,q,p=this.a,o=p.a
p.a=0
if(o===3)return
s=p.$ti.h("aZ<1>").a(this.b)
r=p.b
q=r.a
p.b=q
if(q==null)p.c=null
A.x(r).h("aZ<1>").a(s).aW(r.b)},
$S:0}
A.bJ.prototype={
b2(a){this.$ti.h("~(1)?").a(a)},
ap(a){this.a=-1
this.saR(null)
return $.j1()},
dd(){var s,r,q,p=this,o=p.a-1
if(o===0){p.a=-1
s=p.c
if(s!=null){r=s
q=!0}else{r=null
q=!1}if(q){p.saR(null)
p.b.cb(r)}}else p.a=o},
saR(a){this.c=t.Y.a(a)},
$iaq:1}
A.fd.prototype={}
A.iE.prototype={
$0(){return this.a.O(this.b,this.c)},
$S:0}
A.iD.prototype={
$2(a,b){A.mL(this.a,this.b,a,t.l.a(b))},
$S:5}
A.d6.prototype={$ikl:1}
A.iK.prototype={
$0(){A.lF(this.a,this.b)},
$S:0}
A.f7.prototype={
cb(a){var s,r,q
t.M.a(a)
try{if(B.e===$.B){a.$0()
return}A.kO(null,null,this,a,t.p)}catch(q){s=A.av(q)
r=A.aL(q)
A.fD(t.K.a(s),t.l.a(r))}},
cc(a,b,c){var s,r,q
c.h("~(0)").a(a)
c.a(b)
try{if(B.e===$.B){a.$1(b)
return}A.kP(null,null,this,a,b,t.p,c)}catch(q){s=A.av(q)
r=A.aL(q)
A.fD(t.K.a(s),t.l.a(r))}},
bY(a){return new A.iq(this,t.M.a(a))},
dt(a,b){return new A.ir(this,b.h("~(0)").a(a),b)},
i(a,b){return null},
ca(a,b){b.h("0()").a(a)
if($.B===B.e)return a.$0()
return A.kO(null,null,this,a,b)},
b4(a,b,c,d){c.h("@<0>").u(d).h("1(2)").a(a)
d.a(b)
if($.B===B.e)return a.$1(b)
return A.kP(null,null,this,a,b,c,d)},
dT(a,b,c,d,e,f){d.h("@<0>").u(e).u(f).h("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.B===B.e)return a.$2(b,c)
return A.ne(null,null,this,a,b,c,d,e,f)},
b3(a,b,c,d){return b.h("@<0>").u(c).u(d).h("1(2,3)").a(a)}}
A.iq.prototype={
$0(){return this.a.cb(this.b)},
$S:0}
A.ir.prototype={
$1(a){var s=this.c
return this.a.cc(this.b,s.a(a),s)},
$S(){return this.c.h("~(0)")}}
A.cL.prototype={
gj(a){return this.a},
gH(a){return new A.cM(this,this.$ti.h("cM<1>"))},
a9(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
return s==null?!1:s[b]!=null}else if(typeof b=="number"&&(b&1073741823)===b){r=this.c
return r==null?!1:r[b]!=null}else return this.d7(b)},
d7(a){var s=this.d
if(s==null)return!1
return this.aO(this.bJ(s,a),a)>=0},
i(a,b){var s,r,q
if(typeof b=="string"&&b!=="__proto__"){s=this.b
r=s==null?null:A.kp(s,b)
return r}else if(typeof b=="number"&&(b&1073741823)===b){q=this.c
r=q==null?null:A.kp(q,b)
return r}else return this.d8(0,b)},
d8(a,b){var s,r,q=this.d
if(q==null)return null
s=this.bJ(q,b)
r=this.aO(s,b)
return r<0?null:s[r+1]},
k(a,b,c){var s,r,q,p,o=this,n=o.$ti
n.c.a(b)
n.z[1].a(c)
s=o.d
if(s==null)s=o.d=A.mj()
r=A.iZ(b)&1073741823
q=s[r]
if(q==null){A.kq(s,r,[b,c]);++o.a
o.e=null}else{p=o.aO(q,b)
if(p>=0)q[p+1]=c
else{q.push(b,c);++o.a
o.e=null}}},
q(a,b){var s,r,q,p,o,n,m=this,l=m.$ti
l.h("~(1,2)").a(b)
s=m.aK()
for(r=s.length,q=l.c,l=l.z[1],p=0;p<r;++p){o=s[p]
q.a(o)
n=m.i(0,o)
b.$2(o,n==null?l.a(n):n)
if(s!==m.e)throw A.b(A.T(m))}},
aK(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.e
if(h!=null)return h
h=A.je(i.a,null,!1,t.z)
s=i.b
if(s!=null){r=Object.getOwnPropertyNames(s)
q=r.length
for(p=0,o=0;o<q;++o){h[p]=r[o];++p}}else p=0
n=i.c
if(n!=null){r=Object.getOwnPropertyNames(n)
q=r.length
for(o=0;o<q;++o){h[p]=+r[o];++p}}m=i.d
if(m!=null){r=Object.getOwnPropertyNames(m)
q=r.length
for(o=0;o<q;++o){l=m[r[o]]
k=l.length
for(j=0;j<k;j+=2){h[p]=l[j];++p}}}return i.e=h},
bJ(a,b){return a[A.iZ(b)&1073741823]}}
A.cO.prototype={
aO(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=0;r<s;r+=2){q=a[r]
if(q==null?b==null:q===b)return r}return-1}}
A.cM.prototype={
gj(a){return this.a.a},
gG(a){var s=this.a
return new A.cN(s,s.aK(),this.$ti.h("cN<1>"))},
q(a,b){var s,r,q,p
this.$ti.h("~(1)").a(b)
s=this.a
r=s.aK()
for(q=r.length,p=0;p<q;++p){b.$1(r[p])
if(r!==s.e)throw A.b(A.T(s))}}}
A.cN.prototype={
gC(a){var s=this.d
return s==null?this.$ti.c.a(s):s},
A(){var s=this,r=s.b,q=s.c,p=s.a
if(r!==p.e)throw A.b(A.T(p))
else if(q>=r.length){s.sbC(null)
return!1}else{s.sbC(r[q])
s.c=q+1
return!0}},
sbC(a){this.d=this.$ti.h("1?").a(a)},
$ia8:1}
A.e.prototype={
gG(a){return new A.bj(a,this.gj(a),A.ae(a).h("bj<e.E>"))},
p(a,b){return this.i(a,b)},
q(a,b){var s,r
A.ae(a).h("~(e.E)").a(b)
s=this.gj(a)
for(r=0;r<s;++r){b.$1(this.i(a,r))
if(s!==this.gj(a))throw A.b(A.T(a))}},
gdM(a){return this.gj(a)===0},
gv(a){if(this.gj(a)===0)throw A.b(A.jX())
return this.i(a,0)},
c0(a,b){var s,r=this.gj(a)
for(s=0;s<r;++s){if(J.fH(this.i(a,s),b))return!0
if(r!==this.gj(a))throw A.b(A.T(a))}return!1},
aw(a,b,c){var s=A.ae(a)
return new A.aC(a,s.u(c).h("1(e.E)").a(b),s.h("@<e.E>").u(c).h("aC<1,2>"))},
az(a){var s,r,q,p,o=this
if(o.gdM(a)){s=J.jZ(0,A.ae(a).h("e.E"))
return s}r=o.i(a,0)
q=A.je(o.gj(a),r,!0,A.ae(a).h("e.E"))
for(p=1;p<o.gj(a);++p)B.a.k(q,p,o.i(a,p))
return q},
B(a,b){var s=A.ae(a)
s.h("l<e.E>").a(b)
s=A.dQ(a,s.h("e.E"))
B.a.P(s,b)
return s},
l(a){return A.jY(a,"[","]")}}
A.y.prototype={
q(a,b){var s,r,q,p=A.ae(a)
p.h("~(y.K,y.V)").a(b)
for(s=J.bS(this.gH(a)),p=p.h("y.V");s.A();){r=s.gC(s)
q=this.i(a,r)
b.$2(r,q==null?p.a(q):q)}},
gj(a){return J.fI(this.gH(a))},
l(a){return A.hj(a)},
$iG:1}
A.hk.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=r.a+=A.o(a)
r.a=s+": "
r.a+=A.o(b)},
$S:17}
A.d5.prototype={}
A.bC.prototype={
i(a,b){return this.a.i(0,b)},
q(a,b){this.a.q(0,this.$ti.h("~(1,2)").a(b))},
gj(a){return this.a.a},
gH(a){var s=this.a
return new A.aB(s,s.$ti.h("aB<1>"))},
l(a){return A.hj(this.a)},
$iG:1}
A.cz.prototype={}
A.bN.prototype={}
A.eU.prototype={
i(a,b){var s,r=this.b
if(r==null)return this.c.i(0,b)
else if(typeof b!="string")return null
else{s=r[b]
return typeof s=="undefined"?this.de(b):s}},
gj(a){return this.b==null?this.c.a:this.ak().length},
gH(a){var s
if(this.b==null){s=this.c
return new A.aB(s,A.x(s).h("aB<1>"))}return new A.eV(this)},
q(a,b){var s,r,q,p,o=this
t.u.a(b)
if(o.b==null)return o.c.q(0,b)
s=o.ak()
for(r=0;r<s.length;++r){q=s[r]
p=o.b[q]
if(typeof p=="undefined"){p=A.iG(o.a[q])
o.b[q]=p}b.$2(q,p)
if(s!==o.c)throw A.b(A.T(o))}},
ak(){var s=t.bM.a(this.c)
if(s==null)s=this.c=A.v(Object.keys(this.a),t.s)
return s},
de(a){var s
if(!Object.prototype.hasOwnProperty.call(this.a,a))return null
s=A.iG(this.a[a])
return this.b[a]=s}}
A.eV.prototype={
gj(a){var s=this.a
return s.gj(s)},
p(a,b){var s=this.a
if(s.b==null)s=s.gH(s).p(0,b)
else{s=s.ak()
if(!(b<s.length))return A.d(s,b)
s=s[b]}return s},
gG(a){var s=this.a
if(s.b==null){s=s.gH(s)
s=s.gG(s)}else{s=s.ak()
s=new J.b4(s,s.length,A.as(s).h("b4<1>"))}return s}}
A.dt.prototype={}
A.dv.prototype={}
A.dM.prototype={
dA(a,b){var s=A.nb(b,this.gdB().a)
return s},
gdB(){return B.H}}
A.hf.prototype={}
A.hq.prototype={
$2(a,b){var s,r,q
t.fo.a(a)
s=this.b
r=this.a
q=s.a+=r.a
q+=a.a
s.a=q
s.a=q+": "
s.a+=A.by(b)
r.a=", "},
$S:18}
A.c_.prototype={
J(a,b){if(b==null)return!1
return b instanceof A.c_&&this.a===b.a&&this.b===b.b},
gt(a){var s=this.a
return(s^B.d.bT(s,30))&1073741823},
l(a){var s=this,r=A.lC(A.m1(s)),q=A.dw(A.m_(s)),p=A.dw(A.lW(s)),o=A.dw(A.lX(s)),n=A.dw(A.lZ(s)),m=A.dw(A.m0(s)),l=A.lD(A.lY(s)),k=r+"-"+q
if(s.b)return k+"-"+p+" "+o+":"+n+":"+m+"."+l+"Z"
else return k+"-"+p+" "+o+":"+n+":"+m+"."+l}}
A.E.prototype={
ga_(){return A.aL(this.$thrownJsError)}}
A.dj.prototype={
l(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.by(s)
return"Assertion failed"}}
A.aD.prototype={}
A.aw.prototype={
gaN(){return"Invalid argument"+(!this.a?"(s)":"")},
gaM(){return""},
l(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+A.o(p),n=s.gaN()+q+o
if(!s.a)return n
return n+s.gaM()+": "+A.by(s.gb0())},
gb0(){return this.b}}
A.cq.prototype={
gb0(){return A.mE(this.b)},
gaN(){return"RangeError"},
gaM(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.o(q):""
else if(q==null)s=": Not greater than or equal to "+A.o(r)
else if(q>r)s=": Not in inclusive range "+A.o(r)+".."+A.o(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.o(r)
return s}}
A.dH.prototype={
gb0(){return A.u(this.b)},
gaN(){return"RangeError"},
gaM(){if(A.u(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gj(a){return this.f}}
A.e2.prototype={
l(a){var s,r,q,p,o,n,m,l,k=this,j={},i=new A.cu("")
j.a=""
s=k.c
for(r=s.length,q=0,p="",o="";q<r;++q,o=", "){n=s[q]
i.a=p+o
p=i.a+=A.by(n)
j.a=", "}k.d.q(0,new A.hq(j,i))
m=A.by(k.a)
l=i.l(0)
return"NoSuchMethodError: method not found: '"+k.b.a+"'\nReceiver: "+m+"\nArguments: ["+l+"]"}}
A.ew.prototype={
l(a){return"Unsupported operation: "+this.a}}
A.eu.prototype={
l(a){return"UnimplementedError: "+this.a}}
A.bo.prototype={
l(a){return"Bad state: "+this.a}}
A.du.prototype={
l(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.by(s)+"."}}
A.e5.prototype={
l(a){return"Out of Memory"},
ga_(){return null},
$iE:1}
A.ct.prototype={
l(a){return"Stack Overflow"},
ga_(){return null},
$iE:1}
A.i7.prototype={
l(a){return"Exception: "+this.a}}
A.h2.prototype={
l(a){var s=this.a,r=""!==s?"FormatException: "+s:"FormatException"
return r}}
A.f.prototype={
aw(a,b,c){var s=A.x(this)
return A.lQ(this,s.u(c).h("1(f.E)").a(b),s.h("f.E"),c)},
q(a,b){var s
A.x(this).h("~(f.E)").a(b)
for(s=this.gG(this);s.A();)b.$1(s.gC(s))},
gj(a){var s,r=this.gG(this)
for(s=0;r.A();)++s
return s},
p(a,b){var s,r=this.gG(this)
for(s=b;r.A();){if(s===0)return r.gC(r);--s}throw A.b(A.N(b,b-s,this,"index"))},
l(a){return A.lM(this,"(",")")}}
A.I.prototype={
gt(a){return A.w.prototype.gt.call(this,this)},
l(a){return"null"}}
A.w.prototype={$iw:1,
J(a,b){return this===b},
gt(a){return A.co(this)},
l(a){return"Instance of '"+A.hv(this)+"'"},
c8(a,b){throw A.b(A.k5(this,t.B.a(b)))},
gF(a){return A.nA(this)},
toString(){return this.l(this)}}
A.fg.prototype={
l(a){return""},
$iX:1}
A.cu.prototype={
gj(a){return this.a.length},
l(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
A.m.prototype={}
A.fJ.prototype={
gj(a){return a.length}}
A.dg.prototype={
l(a){var s=String(a)
s.toString
return s}}
A.di.prototype={
l(a){var s=String(a)
s.toString
return s}}
A.b6.prototype={$ib6:1}
A.b7.prototype={$ib7:1}
A.b8.prototype={
sM(a,b){a.height=b},
sN(a,b){a.width=b},
aB(a,b,c){var s=a.getContext(b,A.kX(c))
return s},
$ib8:1,
$idp:1}
A.am.prototype={
gj(a){return a.length}}
A.fQ.prototype={
gj(a){return a.length}}
A.z.prototype={$iz:1}
A.bZ.prototype={
gj(a){var s=a.length
s.toString
return s}}
A.fR.prototype={}
A.af.prototype={}
A.ay.prototype={}
A.fS.prototype={
gj(a){return a.length}}
A.fT.prototype={
gj(a){return a.length}}
A.fV.prototype={
gj(a){return a.length},
i(a,b){var s=a[A.u(b)]
s.toString
return s}}
A.b9.prototype={$ib9:1}
A.bw.prototype={$ibw:1}
A.az.prototype={$iaz:1}
A.fW.prototype={
l(a){var s=String(a)
s.toString
return s}}
A.c0.prototype={
gj(a){var s=a.length
s.toString
return s},
i(a,b){var s,r
A.u(b)
s=a.length
r=b>>>0!==b||b>=s
r.toString
if(r)throw A.b(A.N(b,s,a,null))
s=a[b]
s.toString
return s},
k(a,b,c){t.q.a(c)
throw A.b(A.F("Cannot assign element of immutable List."))},
gv(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.b(A.K("No elements"))},
p(a,b){if(!(b<a.length))return A.d(a,b)
return a[b]},
$ik:1,
$ir:1,
$if:1,
$il:1}
A.c1.prototype={
l(a){var s,r=a.left
r.toString
s=a.top
s.toString
return"Rectangle ("+A.o(r)+", "+A.o(s)+") "+A.o(this.gN(a))+" x "+A.o(this.gM(a))},
J(a,b){var s,r
if(b==null)return!1
if(t.q.b(b)){s=a.left
s.toString
r=b.left
r.toString
if(s===r){s=a.top
s.toString
r=b.top
r.toString
if(s===r){s=J.dc(b)
s=this.gN(a)===s.gN(b)&&this.gM(a)===s.gM(b)}else s=!1}else s=!1}else s=!1
return s},
gt(a){var s,r=a.left
r.toString
s=a.top
s.toString
return A.k6(r,s,this.gN(a),this.gM(a))},
gbK(a){return a.height},
gM(a){var s=this.gbK(a)
s.toString
return s},
gbX(a){return a.width},
gN(a){var s=this.gbX(a)
s.toString
return s},
$iap:1}
A.dy.prototype={
gj(a){var s=a.length
s.toString
return s},
i(a,b){var s,r
A.u(b)
s=a.length
r=b>>>0!==b||b>=s
r.toString
if(r)throw A.b(A.N(b,s,a,null))
s=a[b]
s.toString
return s},
k(a,b,c){A.P(c)
throw A.b(A.F("Cannot assign element of immutable List."))},
gv(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.b(A.K("No elements"))},
p(a,b){if(!(b<a.length))return A.d(a,b)
return a[b]},
$ik:1,
$ir:1,
$if:1,
$il:1}
A.fX.prototype={
gj(a){var s=a.length
s.toString
return s}}
A.i.prototype={
l(a){var s=a.localName
s.toString
return s},
$ii:1}
A.h.prototype={$ih:1}
A.c.prototype={
ds(a,b,c,d){t.o.a(c)
if(c!=null)this.d1(a,b,c,!1)},
d1(a,b,c,d){return a.addEventListener(b,A.at(t.o.a(c),1),!1)},
dg(a,b,c,d){return a.removeEventListener(b,A.at(t.o.a(c),1),!1)},
$ic:1}
A.U.prototype={$iU:1}
A.dA.prototype={
gj(a){var s=a.length
s.toString
return s},
i(a,b){var s,r
A.u(b)
s=a.length
r=b>>>0!==b||b>=s
r.toString
if(r)throw A.b(A.N(b,s,a,null))
s=a[b]
s.toString
return s},
k(a,b,c){t.c8.a(c)
throw A.b(A.F("Cannot assign element of immutable List."))},
gv(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.b(A.K("No elements"))},
p(a,b){if(!(b<a.length))return A.d(a,b)
return a[b]},
$ik:1,
$ir:1,
$if:1,
$il:1}
A.dB.prototype={
gj(a){return a.length}}
A.bz.prototype={$ibz:1}
A.bA.prototype={
q(a,b){return a.forEach(A.at(t.cZ.a(b),3))},
$ibA:1}
A.dC.prototype={
gj(a){return a.length}}
A.a_.prototype={$ia_:1}
A.h7.prototype={
gj(a){var s=a.length
s.toString
return s}}
A.bb.prototype={
gj(a){var s=a.length
s.toString
return s},
i(a,b){var s,r
A.u(b)
s=a.length
r=b>>>0!==b||b>=s
r.toString
if(r)throw A.b(A.N(b,s,a,null))
s=a[b]
s.toString
return s},
k(a,b,c){t.G.a(c)
throw A.b(A.F("Cannot assign element of immutable List."))},
gv(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.b(A.K("No elements"))},
p(a,b){if(!(b<a.length))return A.d(a,b)
return a[b]},
$ik:1,
$ir:1,
$if:1,
$il:1}
A.ah.prototype={
dR(a,b,c,d){return a.open(b,c,!0)},
$iah:1}
A.h8.prototype={
$1(a){var s=t.bo.a(a).responseText
s.toString
return s},
$S:19}
A.h9.prototype={
$1(a){var s,r,q,p,o
t.E.a(a)
s=this.a
r=s.status
r.toString
q=r>=200&&r<300
p=r>307&&r<400
r=q||r===0||r===304||p
o=this.b
if(r)o.aq(0,s)
else o.ar(a)},
$S:20}
A.bc.prototype={}
A.c6.prototype={$ic6:1}
A.dG.prototype={$idp:1}
A.bd.prototype={$ibd:1}
A.hb.prototype={
gdN(a){return a.isIntersecting}}
A.hi.prototype={
l(a){var s=String(a)
s.toString
return s}}
A.bm.prototype={}
A.hn.prototype={
gj(a){return a.length}}
A.dS.prototype={
i(a,b){return A.b1(a.get(A.P(b)))},
q(a,b){var s,r,q
t.u.a(b)
s=a.entries()
for(;!0;){r=s.next()
q=r.done
q.toString
if(q)return
q=r.value[0]
q.toString
b.$2(q,A.b1(r.value[1]))}},
gH(a){var s=A.v([],t.s)
this.q(a,new A.ho(s))
return s},
gj(a){var s=a.size
s.toString
return s},
$iG:1}
A.ho.prototype={
$2(a,b){return B.a.n(this.a,a)},
$S:2}
A.dT.prototype={
i(a,b){return A.b1(a.get(A.P(b)))},
q(a,b){var s,r,q
t.u.a(b)
s=a.entries()
for(;!0;){r=s.next()
q=r.done
q.toString
if(q)return
q=r.value[0]
q.toString
b.$2(q,A.b1(r.value[1]))}},
gH(a){var s=A.v([],t.s)
this.q(a,new A.hp(s))
return s},
gj(a){var s=a.size
s.toString
return s},
$iG:1}
A.hp.prototype={
$2(a,b){return B.a.n(this.a,a)},
$S:2}
A.a1.prototype={$ia1:1}
A.dU.prototype={
gj(a){var s=a.length
s.toString
return s},
i(a,b){var s,r
A.u(b)
s=a.length
r=b>>>0!==b||b>=s
r.toString
if(r)throw A.b(A.N(b,s,a,null))
s=a[b]
s.toString
return s},
k(a,b,c){t.cI.a(c)
throw A.b(A.F("Cannot assign element of immutable List."))},
gv(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.b(A.K("No elements"))},
p(a,b){if(!(b<a.length))return A.d(a,b)
return a[b]},
$ik:1,
$ir:1,
$if:1,
$il:1}
A.q.prototype={
l(a){var s=a.nodeValue
return s==null?this.cg(a):s},
$iq:1}
A.cl.prototype={
gj(a){var s=a.length
s.toString
return s},
i(a,b){var s,r
A.u(b)
s=a.length
r=b>>>0!==b||b>=s
r.toString
if(r)throw A.b(A.N(b,s,a,null))
s=a[b]
s.toString
return s},
k(a,b,c){t.G.a(c)
throw A.b(A.F("Cannot assign element of immutable List."))},
gv(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.b(A.K("No elements"))},
p(a,b){if(!(b<a.length))return A.d(a,b)
return a[b]},
$ik:1,
$ir:1,
$if:1,
$il:1}
A.a2.prototype={
gj(a){return a.length},
$ia2:1}
A.e7.prototype={
gj(a){var s=a.length
s.toString
return s},
i(a,b){var s,r
A.u(b)
s=a.length
r=b>>>0!==b||b>=s
r.toString
if(r)throw A.b(A.N(b,s,a,null))
s=a[b]
s.toString
return s},
k(a,b,c){t.he.a(c)
throw A.b(A.F("Cannot assign element of immutable List."))},
gv(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.b(A.K("No elements"))},
p(a,b){if(!(b<a.length))return A.d(a,b)
return a[b]},
$ik:1,
$ir:1,
$if:1,
$il:1}
A.ai.prototype={$iai:1}
A.ec.prototype={
i(a,b){return A.b1(a.get(A.P(b)))},
q(a,b){var s,r,q
t.u.a(b)
s=a.entries()
for(;!0;){r=s.next()
q=r.done
q.toString
if(q)return
q=r.value[0]
q.toString
b.$2(q,A.b1(r.value[1]))}},
gH(a){var s=A.v([],t.s)
this.q(a,new A.hx(s))
return s},
gj(a){var s=a.size
s.toString
return s},
$iG:1}
A.hx.prototype={
$2(a,b){return B.a.n(this.a,a)},
$S:2}
A.ef.prototype={
gj(a){return a.length}}
A.W.prototype={$iW:1}
A.eh.prototype={
gj(a){var s=a.length
s.toString
return s},
i(a,b){var s,r
A.u(b)
s=a.length
r=b>>>0!==b||b>=s
r.toString
if(r)throw A.b(A.N(b,s,a,null))
s=a[b]
s.toString
return s},
k(a,b,c){t.fY.a(c)
throw A.b(A.F("Cannot assign element of immutable List."))},
gv(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.b(A.K("No elements"))},
p(a,b){if(!(b<a.length))return A.d(a,b)
return a[b]},
$ik:1,
$ir:1,
$if:1,
$il:1}
A.a3.prototype={$ia3:1}
A.ei.prototype={
gj(a){var s=a.length
s.toString
return s},
i(a,b){var s,r
A.u(b)
s=a.length
r=b>>>0!==b||b>=s
r.toString
if(r)throw A.b(A.N(b,s,a,null))
s=a[b]
s.toString
return s},
k(a,b,c){t.f7.a(c)
throw A.b(A.F("Cannot assign element of immutable List."))},
gv(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.b(A.K("No elements"))},
p(a,b){if(!(b<a.length))return A.d(a,b)
return a[b]},
$ik:1,
$ir:1,
$if:1,
$il:1}
A.a4.prototype={
gj(a){return a.length},
$ia4:1}
A.ek.prototype={
i(a,b){return a.getItem(A.P(b))},
q(a,b){var s,r,q
t.eA.a(b)
for(s=0;!0;++s){r=a.key(s)
if(r==null)return
q=a.getItem(r)
q.toString
b.$2(r,q)}},
gH(a){var s=A.v([],t.s)
this.q(a,new A.hG(s))
return s},
gj(a){var s=a.length
s.toString
return s},
$iG:1}
A.hG.prototype={
$2(a,b){return B.a.n(this.a,a)},
$S:21}
A.R.prototype={$iR:1}
A.Y.prototype={$iY:1}
A.O.prototype={$iO:1}
A.en.prototype={
gj(a){var s=a.length
s.toString
return s},
i(a,b){var s,r
A.u(b)
s=a.length
r=b>>>0!==b||b>=s
r.toString
if(r)throw A.b(A.N(b,s,a,null))
s=a[b]
s.toString
return s},
k(a,b,c){t.c7.a(c)
throw A.b(A.F("Cannot assign element of immutable List."))},
gv(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.b(A.K("No elements"))},
p(a,b){if(!(b<a.length))return A.d(a,b)
return a[b]},
$ik:1,
$ir:1,
$if:1,
$il:1}
A.eo.prototype={
gj(a){var s=a.length
s.toString
return s},
i(a,b){var s,r
A.u(b)
s=a.length
r=b>>>0!==b||b>=s
r.toString
if(r)throw A.b(A.N(b,s,a,null))
s=a[b]
s.toString
return s},
k(a,b,c){t.a0.a(c)
throw A.b(A.F("Cannot assign element of immutable List."))},
gv(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.b(A.K("No elements"))},
p(a,b){if(!(b<a.length))return A.d(a,b)
return a[b]},
$ik:1,
$ir:1,
$if:1,
$il:1}
A.hO.prototype={
gj(a){var s=a.length
s.toString
return s}}
A.a5.prototype={$ia5:1}
A.eq.prototype={
gj(a){var s=a.length
s.toString
return s},
i(a,b){var s,r
A.u(b)
s=a.length
r=b>>>0!==b||b>=s
r.toString
if(r)throw A.b(A.N(b,s,a,null))
s=a[b]
s.toString
return s},
k(a,b,c){t.aK.a(c)
throw A.b(A.F("Cannot assign element of immutable List."))},
gv(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.b(A.K("No elements"))},
p(a,b){if(!(b<a.length))return A.d(a,b)
return a[b]},
$ik:1,
$ir:1,
$if:1,
$il:1}
A.hP.prototype={
gj(a){return a.length}}
A.hT.prototype={
l(a){var s=String(a)
s.toString
return s}}
A.ez.prototype={$idp:1}
A.eA.prototype={
gj(a){return a.length}}
A.aX.prototype={
c9(a,b){var s
t.L.a(b)
this.bH(a)
s=A.jw(b,t.H)
s.toString
return this.di(a,s)},
di(a,b){var s=a.requestAnimationFrame(A.at(t.L.a(b),1))
s.toString
return s},
bH(a){var s=!!(a.requestAnimationFrame&&a.cancelAnimationFrame)
s.toString
if(s)return;(function(b){var r=["ms","moz","webkit","o"]
for(var q=0;q<r.length&&!b.requestAnimationFrame;++q){b.requestAnimationFrame=b[r[q]+"RequestAnimationFrame"]
b.cancelAnimationFrame=b[r[q]+"CancelAnimationFrame"]||b[r[q]+"CancelRequestAnimationFrame"]}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
$iaX:1}
A.ar.prototype={$iar:1}
A.eF.prototype={
gj(a){var s=a.length
s.toString
return s},
i(a,b){var s,r
A.u(b)
s=a.length
r=b>>>0!==b||b>=s
r.toString
if(r)throw A.b(A.N(b,s,a,null))
s=a[b]
s.toString
return s},
k(a,b,c){t.e.a(c)
throw A.b(A.F("Cannot assign element of immutable List."))},
gv(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.b(A.K("No elements"))},
p(a,b){if(!(b<a.length))return A.d(a,b)
return a[b]},
$ik:1,
$ir:1,
$if:1,
$il:1}
A.cI.prototype={
l(a){var s,r,q,p=a.left
p.toString
s=a.top
s.toString
r=a.width
r.toString
q=a.height
q.toString
return"Rectangle ("+A.o(p)+", "+A.o(s)+") "+A.o(r)+" x "+A.o(q)},
J(a,b){var s,r
if(b==null)return!1
if(t.q.b(b)){s=a.left
s.toString
r=b.left
r.toString
if(s===r){s=a.top
s.toString
r=b.top
r.toString
if(s===r){s=a.width
s.toString
r=J.dc(b)
if(s===r.gN(b)){s=a.height
s.toString
r=s===r.gM(b)
s=r}else s=!1}else s=!1}else s=!1}else s=!1
return s},
gt(a){var s,r,q,p=a.left
p.toString
s=a.top
s.toString
r=a.width
r.toString
q=a.height
q.toString
return A.k6(p,s,r,q)},
gbK(a){return a.height},
gM(a){var s=a.height
s.toString
return s},
gbX(a){return a.width},
gN(a){var s=a.width
s.toString
return s}}
A.eR.prototype={
gj(a){var s=a.length
s.toString
return s},
i(a,b){var s,r
A.u(b)
s=a.length
r=b>>>0!==b||b>=s
r.toString
if(r)throw A.b(A.N(b,s,a,null))
return a[b]},
k(a,b,c){t.g7.a(c)
throw A.b(A.F("Cannot assign element of immutable List."))},
gv(a){if(a.length>0)return a[0]
throw A.b(A.K("No elements"))},
p(a,b){if(!(b<a.length))return A.d(a,b)
return a[b]},
$ik:1,
$ir:1,
$if:1,
$il:1}
A.cR.prototype={
gj(a){var s=a.length
s.toString
return s},
i(a,b){var s,r
A.u(b)
s=a.length
r=b>>>0!==b||b>=s
r.toString
if(r)throw A.b(A.N(b,s,a,null))
s=a[b]
s.toString
return s},
k(a,b,c){t.G.a(c)
throw A.b(A.F("Cannot assign element of immutable List."))},
gv(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.b(A.K("No elements"))},
p(a,b){if(!(b<a.length))return A.d(a,b)
return a[b]},
$ik:1,
$ir:1,
$if:1,
$il:1}
A.fb.prototype={
gj(a){var s=a.length
s.toString
return s},
i(a,b){var s,r
A.u(b)
s=a.length
r=b>>>0!==b||b>=s
r.toString
if(r)throw A.b(A.N(b,s,a,null))
s=a[b]
s.toString
return s},
k(a,b,c){t.gf.a(c)
throw A.b(A.F("Cannot assign element of immutable List."))},
gv(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.b(A.K("No elements"))},
p(a,b){if(!(b<a.length))return A.d(a,b)
return a[b]},
$ik:1,
$ir:1,
$if:1,
$il:1}
A.fh.prototype={
gj(a){var s=a.length
s.toString
return s},
i(a,b){var s,r
A.u(b)
s=a.length
r=b>>>0!==b||b>=s
r.toString
if(r)throw A.b(A.N(b,s,a,null))
s=a[b]
s.toString
return s},
k(a,b,c){t.k.a(c)
throw A.b(A.F("Cannot assign element of immutable List."))},
gv(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.b(A.K("No elements"))},
p(a,b){if(!(b<a.length))return A.d(a,b)
return a[b]},
$ik:1,
$ir:1,
$if:1,
$il:1}
A.j9.prototype={}
A.cJ.prototype={
av(a,b,c,d){var s=A.x(this)
s.h("~(1)?").a(a)
t.Y.a(c)
return A.br(this.a,this.b,a,!1,s.c)}}
A.eM.prototype={}
A.cK.prototype={
ap(a){var s=this
if(s.b==null)return $.j2()
s.bW()
s.b=null
s.sbM(null)
return $.j2()},
b2(a){var s,r=this
r.$ti.h("~(1)?").a(a)
if(r.b==null)throw A.b(A.K("Subscription has been canceled."))
r.bW()
s=A.jw(new A.i6(a),t.A)
r.sbM(s)
r.bV()},
bV(){var s,r=this.d
if(r!=null&&!0){s=this.b
s.toString
J.ln(s,this.c,r,!1)}},
bW(){var s,r=this.d
if(r!=null){s=this.b
s.toString
J.lm(s,this.c,t.o.a(r),!1)}},
sbM(a){this.d=t.o.a(a)},
$iaq:1}
A.i5.prototype={
$1(a){return this.a.$1(t.A.a(a))},
$S:8}
A.i6.prototype={
$1(a){return this.a.$1(t.A.a(a))},
$S:8}
A.n.prototype={
gG(a){return new A.c4(a,this.gj(a),A.ae(a).h("c4<n.E>"))}}
A.c4.prototype={
A(){var s=this,r=s.c+1,q=s.b
if(r<q){s.sbL(J.a7(s.a,r))
s.c=r
return!0}s.sbL(null)
s.c=q
return!1},
gC(a){var s=this.d
return s==null?this.$ti.c.a(s):s},
sbL(a){this.d=this.$ti.h("1?").a(a)},
$ia8:1}
A.eG.prototype={}
A.eI.prototype={}
A.eJ.prototype={}
A.eK.prototype={}
A.eL.prototype={}
A.eO.prototype={}
A.eP.prototype={}
A.eS.prototype={}
A.eT.prototype={}
A.eY.prototype={}
A.eZ.prototype={}
A.f_.prototype={}
A.f0.prototype={}
A.f1.prototype={}
A.f2.prototype={}
A.f5.prototype={}
A.f6.prototype={}
A.f8.prototype={}
A.cX.prototype={}
A.cY.prototype={}
A.f9.prototype={}
A.fa.prototype={}
A.fc.prototype={}
A.fi.prototype={}
A.fj.prototype={}
A.d_.prototype={}
A.d0.prototype={}
A.fl.prototype={}
A.fm.prototype={}
A.fq.prototype={}
A.fr.prototype={}
A.fs.prototype={}
A.ft.prototype={}
A.fu.prototype={}
A.fv.prototype={}
A.fw.prototype={}
A.fx.prototype={}
A.fy.prototype={}
A.fz.prototype={}
A.hZ.prototype={
c3(a){var s,r=this.a,q=r.length
for(s=0;s<q;++s)if(r[s]===a)return s
B.a.n(r,a)
B.a.n(this.b,null)
return q},
b7(a){var s,r,q,p,o,n,m,l,k,j=this
if(a==null)return a
if(A.bP(a))return a
if(typeof a=="number")return a
if(typeof a=="string")return a
s=a instanceof Date
s.toString
if(s){s=a.getTime()
s.toString
return A.jS(s,!0)}s=a instanceof RegExp
s.toString
if(s)throw A.b(A.jj("structured clone of RegExp"))
s=typeof Promise!="undefined"&&a instanceof Promise
s.toString
if(s)return A.nO(a,t.z)
if(A.l1(a)){r=j.c3(a)
s=j.b
if(!(r<s.length))return A.d(s,r)
q=s[r]
if(q!=null)return q
p=t.z
o=A.k2(p,p)
B.a.k(s,r,o)
j.dH(a,new A.i0(j,o))
return o}s=a instanceof Array
s.toString
if(s){s=a
s.toString
r=j.c3(s)
p=j.b
if(!(r<p.length))return A.d(p,r)
q=p[r]
if(q!=null)return q
n=J.aK(s)
m=n.gj(s)
if(j.c){l=new Array(m)
l.toString
q=l}else q=s
B.a.k(p,r,q)
for(p=J.db(q),k=0;k<m;++k)p.k(q,k,j.b7(n.i(s,k)))
return q}return a}}
A.i0.prototype={
$2(a,b){var s=this.a.b7(b)
this.b.k(0,a,s)
return s},
$S:23}
A.iF.prototype={
$1(a){this.a.push(A.kE(a))},
$S:1}
A.iR.prototype={
$2(a,b){this.a[a]=A.kE(b)},
$S:37}
A.i_.prototype={
dH(a,b){var s,r,q,p
t.b8.a(b)
for(s=Object.keys(a),r=s.length,q=0;q<s.length;s.length===r||(0,A.ak)(s),++q){p=s[q]
b.$2(p,a[p])}}}
A.ca.prototype={$ica:1}
A.he.prototype={
$1(a){var s,r,q,p,o=this.a
if(o.a9(0,a))return o.i(0,a)
if(t.f.b(a)){s={}
o.k(0,a,s)
for(o=J.dc(a),r=J.bS(o.gH(a));r.A();){q=r.gC(r)
s[q]=this.$1(o.i(a,q))}return s}else if(t.V.b(a)){p=[]
o.k(0,a,p)
B.a.P(p,J.jI(a,this,t.z))
return p}else return A.jq(a)},
$S:25}
A.iH.prototype={
$1(a){var s
t.Z.a(a)
s=function(b,c,d){return function(){return b(c,d,this,Array.prototype.slice.apply(arguments))}}(A.mJ,a,!1)
A.jr(s,$.fG(),a)
return s},
$S:4}
A.iI.prototype={
$1(a){return new this.a(a)},
$S:4}
A.iN.prototype={
$1(a){return new A.c9(a==null?t.K.a(a):a)},
$S:26}
A.iO.prototype={
$1(a){var s=a==null?t.K.a(a):a
return new A.bh(s,t.am)},
$S:27}
A.iP.prototype={
$1(a){return new A.aA(a==null?t.K.a(a):a)},
$S:28}
A.aA.prototype={
i(a,b){t.K.a(b)
if(typeof b!="string"&&typeof b!="number")throw A.b(A.ax("property is not a String or num",null))
return A.kG(this.a[b])},
k(a,b,c){if(typeof b!="string"&&typeof b!="number")throw A.b(A.ax("property is not a String or num",null))
this.a[b]=A.jq(c)},
J(a,b){if(b==null)return!1
return b instanceof A.aA&&this.a===b.a},
l(a){var s,r
try{s=String(this.a)
return s}catch(r){s=this.cl(0)
return s}},
gt(a){return 0}}
A.c9.prototype={}
A.bh.prototype={
bB(a){var s=this,r=a<0||a>=s.gj(s)
if(r)throw A.b(A.ea(a,0,s.gj(s),null,null))},
i(a,b){t.K.a(b)
if(A.fB(b))this.bB(b)
return this.$ti.c.a(this.ci(0,b))},
k(a,b,c){if(A.fB(b))this.bB(b)
this.cm(0,b,c)},
gj(a){var s=this.a.length
if(typeof s==="number"&&s>>>0===s)return s
throw A.b(A.K("Bad JsArray length"))},
$ik:1,
$if:1,
$il:1}
A.bL.prototype={
k(a,b,c){return this.cj(0,b,c)}}
A.j_.prototype={
$1(a){return this.a.aq(0,this.b.h("0/?").a(a))},
$S:1}
A.j0.prototype={
$1(a){if(a==null)return this.a.ar(new A.hr(a===undefined))
return this.a.ar(a)},
$S:1}
A.hr.prototype={
l(a){return"Promise was rejected with a value of `"+(this.a?"undefined":"null")+"`."}}
A.il.prototype={
c7(){return Math.random()}}
A.aS.prototype={
l(a){return"Point("+this.a+", "+this.b+")"},
J(a,b){if(b==null)return!1
return b instanceof A.aS&&this.a===b.a&&this.b===b.b},
gt(a){return A.m7(B.d.gt(this.a),B.d.gt(this.b),0)},
B(a,b){var s,r=this.$ti
r.a(b)
s=r.c
return new A.aS(s.a(B.d.B(this.a,b.gb8(b))),s.a(B.d.B(this.b,b.gb9(b))),r)},
m(a,b){var s=this.$ti,r=s.c
return new A.aS(r.a(this.a*b),r.a(this.b*b),s)}}
A.a9.prototype={$ia9:1}
A.dN.prototype={
gj(a){var s=a.length
s.toString
return s},
i(a,b){var s
A.u(b)
s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw A.b(A.N(b,this.gj(a),a,null))
s=a.getItem(b)
s.toString
return s},
k(a,b,c){t.bG.a(c)
throw A.b(A.F("Cannot assign element of immutable List."))},
gv(a){var s=a.length
s.toString
if(s>0){s=a[0]
s.toString
return s}throw A.b(A.K("No elements"))},
p(a,b){return this.i(a,b)},
$ik:1,
$if:1,
$il:1}
A.ab.prototype={$iab:1}
A.e3.prototype={
gj(a){var s=a.length
s.toString
return s},
i(a,b){var s
A.u(b)
s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw A.b(A.N(b,this.gj(a),a,null))
s=a.getItem(b)
s.toString
return s},
k(a,b,c){t.ck.a(c)
throw A.b(A.F("Cannot assign element of immutable List."))},
gv(a){var s=a.length
s.toString
if(s>0){s=a[0]
s.toString
return s}throw A.b(A.K("No elements"))},
p(a,b){return this.i(a,b)},
$ik:1,
$if:1,
$il:1}
A.ht.prototype={
gj(a){return a.length}}
A.el.prototype={
gj(a){var s=a.length
s.toString
return s},
i(a,b){var s
A.u(b)
s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw A.b(A.N(b,this.gj(a),a,null))
s=a.getItem(b)
s.toString
return s},
k(a,b,c){A.P(c)
throw A.b(A.F("Cannot assign element of immutable List."))},
gv(a){var s=a.length
s.toString
if(s>0){s=a[0]
s.toString
return s}throw A.b(A.K("No elements"))},
p(a,b){return this.i(a,b)},
$ik:1,
$if:1,
$il:1}
A.ad.prototype={$iad:1}
A.es.prototype={
gj(a){var s=a.length
s.toString
return s},
i(a,b){var s
A.u(b)
s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw A.b(A.N(b,this.gj(a),a,null))
s=a.getItem(b)
s.toString
return s},
k(a,b,c){t.cM.a(c)
throw A.b(A.F("Cannot assign element of immutable List."))},
gv(a){var s=a.length
s.toString
if(s>0){s=a[0]
s.toString
return s}throw A.b(A.K("No elements"))},
p(a,b){return this.i(a,b)},
$ik:1,
$if:1,
$il:1}
A.eW.prototype={}
A.eX.prototype={}
A.f3.prototype={}
A.f4.prototype={}
A.fe.prototype={}
A.ff.prototype={}
A.fn.prototype={}
A.fo.prototype={}
A.fL.prototype={
gj(a){return a.length}}
A.dl.prototype={
i(a,b){return A.b1(a.get(A.P(b)))},
q(a,b){var s,r,q
t.u.a(b)
s=a.entries()
for(;!0;){r=s.next()
q=r.done
q.toString
if(q)return
q=r.value[0]
q.toString
b.$2(q,A.b1(r.value[1]))}},
gH(a){var s=A.v([],t.s)
this.q(a,new A.fM(s))
return s},
gj(a){var s=a.size
s.toString
return s},
$iG:1}
A.fM.prototype={
$2(a,b){return B.a.n(this.a,a)},
$S:2}
A.dm.prototype={
gj(a){return a.length}}
A.aO.prototype={}
A.e4.prototype={
gj(a){return a.length}}
A.eE.prototype={}
A.dn.prototype={$idn:1}
A.bv.prototype={$ibv:1}
A.dE.prototype={$idE:1}
A.e9.prototype={$ie9:1}
A.eb.prototype={$ieb:1}
A.cr.prototype={$icr:1}
A.bE.prototype={
ao(a,b,c){return a.bindBuffer(b,c)},
D(a,b,c){return a.bindFramebuffer(b,c)},
bZ(a,b,c){return a.bindRenderbuffer(b,c)},
c_(a,b,c){return a.bindTexture(b,c)},
c1(a,b){return a.deleteBuffer(b)},
dC(a,b){return a.deleteFramebuffer(b)},
dD(a,b){return a.deleteProgram(b)},
dE(a,b){return a.deleteRenderbuffer(b)},
c2(a,b){return a.deleteShader(b)},
dF(a,b){return a.deleteTexture(b)},
dJ(a,b,c,d,e){return a.framebufferRenderbuffer(b,c,d,e)},
b_(a,b,c,d,e,f){return a.framebufferTexture2D(b,c,d,e,f)},
cd(a,b,c,d,e,f,g,h,i,j){var s=i==null
if(!s&&h!=null&&A.fB(g)){this.dq(a,b,c,d,e,f,g,h,i,j)
return}if(t.gA.b(g)&&h==null&&s&&j==null){this.dr(a,b,c,d,e,f,g)
return}throw A.b(A.ax("Incorrect number or type of arguments",null))},
dU(a,b,c,d,e,f,g){return this.cd(a,b,c,d,e,f,g,null,null,null)},
dq(a,b,c,d,e,f,g,h,i,j){return a.texImage2D(b,c,d,e,f,g,h,i,j)},
dr(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
dV(a,b,c){return a.uniform1f(b,c)},
X(a,b,c){return a.uniform1i(b,c)},
dW(a,b,c){return a.uniform2fv(b,c)},
Y(a,b,c){return a.uniform4fv(b,c)},
aA(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
b6(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
Z(a,b){return a.useProgram(b)},
$ibE:1}
A.eg.prototype={$ieg:1}
A.ep.prototype={$iep:1}
A.et.prototype={$iet:1}
A.dF.prototype={
gdI(){var s=B.a.dG(this.a,0,new A.h3(),t.H)
if(typeof s!=="number")return A.nC(s)
return B.c.T(20/s)},
cC(a){var s,r,q=this
A.kD(a)
s=q.f=(a-q.b)*0.001
q.b=a
r=q.c+=s
q.d+=s
q.e+=s
if(r>=0.03333333333333333){s=B.c.ba(r,0.03333333333333333)
q.c=s
r=q.r
if(r!=null)r.$1(0.03333333333333333+s)}s=q.d
if(s>=0.016666666666666666){s=B.c.ba(s,0.016666666666666666)
q.d=s
r=q.w
if(r!=null)r.$1(0.016666666666666666+s)
s=q.a
if(!!s.fixed$length)A.aN(A.F("removeAt"))
r=s.length
if(0>=r)A.aN(A.kb(0,null))
s.splice(0,1)[0]
B.a.n(s,q.e)
q.e=0}s=window
s.toString
q.x=B.j.c9(s,q.gbv())},
sbQ(a){this.r=t.W.a(a)},
sbR(a){this.w=t.W.a(a)}}
A.h3.prototype={
$2(a,b){return A.kD(a)+A.ix(b)},
$S:30}
A.fO.prototype={
bt(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.f,c=e.d,b=e.e.be(c)
b.aI()
s=c.be(b)
r=b.a
r===$&&A.D()
q=b.b
q===$&&A.D()
p=b.c
p===$&&A.D()
o=s.a
o===$&&A.D()
n=s.b
n===$&&A.D()
m=s.c
m===$&&A.D()
l=c.a
l===$&&A.D()
k=c.b
k===$&&A.D()
c=c.c
c===$&&A.D()
j=t.n
c=A.v([r,q,p,o,n,m,l,k,c],j)
i=new A.aR(c)
k=c.length
if(0>=k)return A.d(c,0)
l=c[0]
if(3>=k)return A.d(c,3)
m=c[3]
if(6>=k)return A.d(c,6)
n=c[6]
o=c[1]
p=c[4]
if(7>=k)return A.d(c,7)
q=c[7]
r=c[2]
h=c[5]
if(8>=k)return A.d(c,8)
i.sR(0,A.v([l,m,n,o,p,q,r,h,c[8]],j))
c=d.a
h=d.b
d=d.c
r=i.a
q=r.length
if(0>=q)return A.d(r,0)
p=r[0]
if(typeof p!=="number")return p.m()
if(3>=q)return A.d(r,3)
o=r[3]
if(typeof o!=="number")return o.m()
if(6>=q)return A.d(r,6)
n=r[6]
if(typeof n!=="number")return n.m()
m=r[1]
if(typeof m!=="number")return m.m()
l=r[4]
if(typeof l!=="number")return l.m()
if(7>=q)return A.d(r,7)
k=r[7]
if(typeof k!=="number")return k.m()
g=r[2]
if(typeof g!=="number")return g.m()
f=r[5]
if(typeof f!=="number")return f.m()
if(8>=q)return A.d(r,8)
r=r[8]
if(typeof r!=="number")return r.m()
q=e.c
q.sR(0,A.v([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],j))
q.bq(i)
q.br(new A.ao(-(p*c+o*h+n*d),-(m*c+l*h+k*d),-(g*c+f*h+r*d)))
e.a.sR(0,A.dP(e.b.m(0,q).a,t.i))}}
A.hC.prototype={}
A.fP.prototype={}
A.h0.prototype={
ad(a){var s=0,r=A.iJ(t.f),q,p,o,n
var $async$ad=A.iL(function(b,c){if(b===1)return A.iy(c,r)
while(true)switch(s){case 0:p=A
o=t.dy
n=B.A
s=3
return A.fA(A.lH(a),$async$ad)
case 3:q=p.jb(o.a(n.dA(0,c)),t.f)
s=1
break
case 1:return A.iz(q,r)}})
return A.iA($async$ad,r)},
ac(a){var s=0,r=A.iJ(t.I),q,p,o,n,m
var $async$ac=A.iL(function(b,c){if(b===1)return A.iy(c,r)
while(true)switch(s){case 0:p=A
o=A
n=t.dI
m=A
s=3
return A.fA(A.jV(a,null,"arraybuffer",null),$async$ac)
case 3:q=p.jb(o.k4(n.a(m.mP(c.response)),0,null),t.I)
s=1
break
case 1:return A.iz(q,r)}})
return A.iA($async$ac,r)}}
A.h4.prototype={}
A.aR.prototype={
m(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
t.gU.a(a3)
s=this.a
r=s.length
if(0>=r)return A.d(s,0)
q=s[0]
if(3>=r)return A.d(s,3)
p=s[3]
if(6>=r)return A.d(s,6)
o=s[6]
n=s[1]
m=s[4]
if(7>=r)return A.d(s,7)
l=s[7]
k=s[2]
j=s[5]
if(8>=r)return A.d(s,8)
i=s[8]
h=a3.gR(a3)
g=h.i(0,0)
f=h.i(0,1)
e=h.i(0,2)
d=h.i(0,3)
c=h.i(0,4)
b=h.i(0,5)
a=h.i(0,6)
a0=h.i(0,7)
a1=h.i(0,8)
return new A.aR(A.v([B.c.m(q,g)+B.c.m(p,f)+B.c.m(o,e),B.c.m(n,g)+B.c.m(m,f)+B.c.m(l,e),B.c.m(k,g)+B.c.m(j,f)+B.c.m(i,e),B.c.m(q,d)+B.c.m(p,c)+B.c.m(o,b),B.c.m(n,d)+B.c.m(m,c)+B.c.m(l,b),B.c.m(k,d)+B.c.m(j,c)+B.c.m(i,b),B.c.m(q,a)+B.c.m(p,a0)+B.c.m(o,a1),B.c.m(n,a)+B.c.m(m,a0)+B.c.m(l,a1),B.c.m(k,a)+B.c.m(j,a0)+B.c.m(i,a1)],t.n))},
l(a){var s,r,q,p,o,n,m,l,k=this,j=k.a
if(0>=j.length)return A.d(j,0)
j=A.o(j[0])
s=k.a
if(1>=s.length)return A.d(s,1)
s=A.o(s[1])
r=k.a
if(2>=r.length)return A.d(r,2)
r=A.o(r[2])
q=k.a
if(3>=q.length)return A.d(q,3)
q=A.o(q[3])
p=k.a
if(4>=p.length)return A.d(p,4)
p=A.o(p[4])
o=k.a
if(5>=o.length)return A.d(o,5)
o=A.o(o[5])
n=k.a
if(6>=n.length)return A.d(n,6)
n=A.o(n[6])
m=k.a
if(7>=m.length)return A.d(m,7)
m=A.o(m[7])
l=k.a
if(8>=l.length)return A.d(l,8)
return"      ["+j+", "+s+", "+r+"]\n      ["+q+", "+p+", "+o+"]\n      ["+n+", "+m+", "+A.o(l[8])+"]\n    "},
sR(a,b){this.a=t.x.a(b)}}
A.bl.prototype={
m(b6,b7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
t.w.a(b7)
s=this.a
r=s.length
if(0>=r)return A.d(s,0)
q=s[0]
if(4>=r)return A.d(s,4)
p=s[4]
if(8>=r)return A.d(s,8)
o=s[8]
if(12>=r)return A.d(s,12)
n=s[12]
m=s[1]
l=s[5]
k=s[9]
if(13>=r)return A.d(s,13)
j=s[13]
i=s[2]
h=s[6]
g=s[10]
if(14>=r)return A.d(s,14)
f=s[14]
e=s[3]
d=s[7]
c=s[11]
if(15>=r)return A.d(s,15)
b=s[15]
a=b7.a
s=a.length
if(0>=s)return A.d(a,0)
a0=a[0]
if(4>=s)return A.d(a,4)
a1=a[4]
if(8>=s)return A.d(a,8)
a2=a[8]
if(12>=s)return A.d(a,12)
a3=a[12]
a4=a[1]
a5=a[5]
a6=a[9]
if(13>=s)return A.d(a,13)
a7=a[13]
a8=a[2]
a9=a[6]
b0=a[10]
if(14>=s)return A.d(a,14)
b1=a[14]
b2=a[3]
b3=a[7]
b4=a[11]
if(15>=s)return A.d(a,15)
b5=a[15]
return new A.bl(A.v([q*a0+p*a4+o*a8+n*b2,m*a0+l*a4+k*a8+j*b2,i*a0+h*a4+g*a8+f*b2,e*a0+d*a4+c*a8+b*b2,q*a1+p*a5+o*a9+n*b3,m*a1+l*a5+k*a9+j*b3,i*a1+h*a5+g*a9+f*b3,e*a1+d*a5+c*a9+b*b3,q*a2+p*a6+o*b0+n*b4,m*a2+l*a6+k*b0+j*b4,i*a2+h*a6+g*b0+f*b4,e*a2+d*a6+c*b0+b*b4,q*a3+p*a7+o*b1+n*b5,m*a3+l*a7+k*b1+j*b5,i*a3+h*a7+g*b1+f*b5,e*a3+d*a7+c*b1+b*b5],t.n))},
l(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=d.a
if(0>=c.length)return A.d(c,0)
c=A.o(c[0])
s=d.a
if(1>=s.length)return A.d(s,1)
s=A.o(s[1])
r=d.a
if(2>=r.length)return A.d(r,2)
r=A.o(r[2])
q=d.a
if(3>=q.length)return A.d(q,3)
q=A.o(q[3])
p=d.a
if(4>=p.length)return A.d(p,4)
p=A.o(p[4])
o=d.a
if(5>=o.length)return A.d(o,5)
o=A.o(o[5])
n=d.a
if(6>=n.length)return A.d(n,6)
n=A.o(n[6])
m=d.a
if(7>=m.length)return A.d(m,7)
m=A.o(m[7])
l=d.a
if(8>=l.length)return A.d(l,8)
l=A.o(l[8])
k=d.a
if(9>=k.length)return A.d(k,9)
k=A.o(k[9])
j=d.a
if(10>=j.length)return A.d(j,10)
j=A.o(j[10])
i=d.a
if(11>=i.length)return A.d(i,11)
i=A.o(i[11])
h=d.a
if(12>=h.length)return A.d(h,12)
h=A.o(h[12])
g=d.a
if(13>=g.length)return A.d(g,13)
g=A.o(g[13])
f=d.a
if(14>=f.length)return A.d(f,14)
f=A.o(f[14])
e=d.a
if(15>=e.length)return A.d(e,15)
return"      ["+c+", "+s+", "+r+", "+q+"]\n      ["+p+", "+o+", "+n+", "+m+"]\n      ["+l+", "+k+", "+j+", "+i+"]\n      ["+h+", "+g+", "+f+", "+A.o(e[15])+"]\n    "},
sR(a,b){this.a=t.x.a(b)}}
A.aT.prototype={
B(a,b){t.af.a(b)
return new A.aT(B.d.B(this.a,b.gb8(b)),B.d.B(this.b,b.gb9(b)))},
m(a,b){return new A.aT(this.a*b,this.b*b)},
l(a){return"["+this.a+", "+this.b+"]"}}
A.ao.prototype={
B(a,b){t.eU.a(b)
return new A.ao(B.c.B(this.a,b.gb8(b)),B.c.B(this.b,b.gb9(b)),B.c.B(this.c,b.gdX(b)))},
aC(a,b){return new A.ao(this.a-b.a,this.b-b.b,this.c-b.c)},
m(a,b){return new A.ao(this.a*b,this.b*b,this.c*b)},
aF(a){this.a=a.a
this.b=a.b
this.c=a.c},
l(a){return"["+A.o(this.a)+", "+A.o(this.b)+", "+A.o(this.c)+"]"}}
A.cp.prototype={}
A.cw.prototype={}
A.cx.prototype={
bq(a){var s=this,r=a.a,q=s.a
if(0>=r.length)return A.d(r,0)
B.a.k(q,0,r[0])
q=s.a
if(1>=r.length)return A.d(r,1)
B.a.k(q,1,r[1])
q=s.a
if(2>=r.length)return A.d(r,2)
B.a.k(q,2,r[2])
q=s.a
if(3>=r.length)return A.d(r,3)
B.a.k(q,4,r[3])
q=s.a
if(4>=r.length)return A.d(r,4)
B.a.k(q,5,r[4])
q=s.a
if(5>=r.length)return A.d(r,5)
B.a.k(q,6,r[5])
q=s.a
if(6>=r.length)return A.d(r,6)
B.a.k(q,8,r[6])
q=s.a
if(7>=r.length)return A.d(r,7)
B.a.k(q,9,r[7])
q=s.a
if(8>=r.length)return A.d(r,8)
B.a.k(q,10,r[8])},
br(a){B.a.k(this.a,12,a.a)
B.a.k(this.a,13,a.b)
B.a.k(this.a,14,a.c)},
m(a8,a9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
t.w.a(a9)
s=this.a
r=s.length
if(0>=r)return A.d(s,0)
q=s[0]
if(4>=r)return A.d(s,4)
p=s[4]
if(8>=r)return A.d(s,8)
o=s[8]
if(12>=r)return A.d(s,12)
n=s[12]
m=s[1]
l=s[5]
k=s[9]
if(13>=r)return A.d(s,13)
j=s[13]
i=s[2]
h=s[6]
g=s[10]
if(14>=r)return A.d(s,14)
f=s[14]
e=a9.a
s=e.length
if(0>=s)return A.d(e,0)
d=e[0]
if(4>=s)return A.d(e,4)
c=e[4]
if(8>=s)return A.d(e,8)
b=e[8]
if(12>=s)return A.d(e,12)
a=e[12]
a0=e[1]
a1=e[5]
a2=e[9]
if(13>=s)return A.d(e,13)
a3=e[13]
a4=e[2]
a5=e[6]
a6=e[10]
if(14>=s)return A.d(e,14)
a7=e[14]
return new A.cx(A.v([q*d+p*a0+o*a4,m*d+l*a0+k*a4,i*d+h*a0+g*a4,0,q*c+p*a1+o*a5,m*c+l*a1+k*a5,i*c+h*a1+g*a5,0,q*b+p*a2+o*a6,m*b+l*a2+k*a6,i*b+h*a2+g*a6,0,q*a+p*a3+o*a7+n,m*a+l*a3+k*a7+j,i*a+h*a3+g*a7+f,1],t.n))}}
A.aW.prototype={
B(a,b){var s,r,q
t.cW.a(b)
s=this.a
s===$&&A.D()
s=B.c.B(s,b.gb8(b))
r=this.b
r===$&&A.D()
r=B.c.B(r,b.gb9(b))
q=this.c
q===$&&A.D()
return new A.aW(s,r,B.c.B(q,b.gdX(b)))},
m(a,b){var s,r,q=this.a
q===$&&A.D()
s=this.b
s===$&&A.D()
r=this.c
r===$&&A.D()
return new A.aW(q*b,s*b,r*b)},
aI(){var s,r,q,p=this,o=p.a
o===$&&A.D()
s=p.b
s===$&&A.D()
r=p.c
r===$&&A.D()
q=Math.sqrt(o*o+s*s+r*r)
p.a=p.a/q
p.b=p.b/q
p.c=p.c/q},
be(a){var s,r,q,p,o,n=this.b
n===$&&A.D()
s=a.c
s===$&&A.D()
r=this.c
r===$&&A.D()
q=a.b
q===$&&A.D()
p=a.a
p===$&&A.D()
o=this.a
o===$&&A.D()
return new A.aW(n*s-r*q,r*p-o*s,o*q-n*p)},
aG(a){this.a=a.a
this.b=a.b
this.c=a.c},
l(a){var s,r,q=this.a
q===$&&A.D()
s=this.b
s===$&&A.D()
r=this.c
r===$&&A.D()
return"["+A.o(q)+", "+A.o(s)+", "+A.o(r)+"]"}}
A.h5.prototype={
bf(a,b,c,a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d="byteOffset"
t.aH.a(a1)
t.g6.a(a2)
s=J.a7(J.a7(J.a7(a0.i(0,"meshes"),a),"primitives"),b)
r=a0.i(0,"accessors")
q=a0.i(0,"bufferViews")
p=a0.i(0,"buffers")
o=A.v([],t.U)
n=J.aK(s)
J.de(n.i(s,"attributes"),new A.h6(this,a2,r,q,a1,p,c,o))
m=J.a7(r,n.i(s,"indices"))
n=J.aK(m)
l=J.a7(q,n.i(m,"bufferView"))
k=J.aK(l)
j=k.i(l,d)
i=A.u(j==null?0:j)
k=a1.i(0,J.a7(J.a7(p,k.i(l,"buffer")),"uri"))
k.toString
j=n.i(m,d)
h=A.u(j==null?0:j)
g=A.u(n.i(m,"componentType"))===5125?4:2
f=J.jH(n.i(m,"count"),g)
n=new Uint8Array(A.bO(A.k4(k.buffer,i+h,A.kC(f)))).buffer
A.jp(n,0,null)
e=B.d.dm(n.byteLength-0,4)
return new A.cn(c.bd(new Uint16Array(A.bO(new Uint32Array(n,0,e)))),new A.ex(0),new A.ey(A.dP(o,t.cQ)),4)},
cA(a){switch(J.a7(a,"type")){case"VEC4":return 4
case"VEC3":return 3
case"VEC2":return 2
default:return 1}}}
A.h6.prototype={
$2(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=this,g="byteOffset",f=h.b
if(f.i(0,a)==null)return
f=f.i(0,a)
f.toString
s=J.a7(h.c,b)
r=J.aK(s)
q=J.a7(h.d,r.i(s,"bufferView"))
p=J.aK(q)
o=p.i(q,g)
p=h.e.i(0,J.a7(J.a7(h.f,p.i(q,"buffer")),"uri"))
p.toString
n=r.i(s,g)
m=A.u(n==null?0:n)
l=J.fH(r.i(s,"componentType"),5123)?2:4
t.f.a(s)
k=h.a.cA(s)
j=J.jH(r.i(s,"count"),k)
r=p.buffer
p=A.u(J.ll(o,m))
A.kC(j)
A.jp(r,p,j)
i=h.r.bc(new Float32Array(A.bO(new Float32Array(r,p,j))))
A.P(a)
B.a.n(h.w,new A.b5(f,k,k*l,i.b))},
$S:31}
A.b5.prototype={}
A.bV.prototype={}
A.dq.prototype={}
A.fU.prototype={}
A.ha.prototype={}
A.ex.prototype={}
A.fN.prototype={}
A.fY.prototype={
bd(a){var s=this.a,r=s.byteLength
this.a=new Uint16Array(A.bO(B.a.B(B.r.az(s),B.r.az(a))))
return new A.ha(a.length,r,5123)},
bc(a){var s=this.b,r=s.byteLength
this.b=new Float32Array(A.bO(B.a.B(B.q.az(s),B.q.az(a))))
return new A.ex(r)}}
A.dx.prototype={}
A.dD.prototype={
cB(a,b,c){var s,r,q=this,p=36161
q.c=a
s=a.a.createFramebuffer()
s.toString
q.d=s
if(c){r=q.c.a
s=r.createRenderbuffer()
s.toString
q.e=s
B.b.D(r,36160,q.d)
B.b.bZ(r,p,q.e)
s=b.b
r.renderbufferStorage(p,33189,s.a,s.b)
B.b.dJ(r,36160,36096,p,q.e)
B.b.bZ(r,p,null)
B.b.D(r,36160,null)}s=b.b
q.a=s.a
q.b=s.b},
I(){var s,r,q=this
q.f.I()
q.f=null
s=q.e
if(s!=null){r=q.c.a
r.toString
B.b.dE(r,s)
q.e=null}s=q.c.a
s.toString
B.b.dC(s,q.d)
q.c=null}}
A.bU.prototype={
bh(a,b,c,d){var s,r,q,p=this
p.aE(a,c,d)
s=p.c.a
s.toString
B.b.D(s,36160,p.d)
s=new A.bH(6408,6408,5121)
s.d=a
r=a.a.createTexture()
r.toString
s.f=r
s.K(b)
r=p.a
q=p.b
s.ag(new Uint8Array(r*q*4),r,q,9729,33071)
s.af()
p.f=s
r=p.c.a
r.toString
s=s.f
s.toString
B.b.b_(r,36160,36064,3553,s,0)
s=p.c.a
s.toString
B.b.D(s,36160,null)},
bg(a,b,c){return this.bh(a,b,c,!1)}}
A.h_.prototype={}
A.fZ.prototype={}
A.dR.prototype={
aH(a){var s,r,q,p=this.a
p.c=a
p.e=p.bu(35633,p.a)
p.f=p.bu(35632,p.b)
s=p.c.a.createProgram()
s.toString
r=p.c.a
r.toString
q=p.e
q.toString
r.attachShader(s,q)
q=p.c.a
q.toString
r=p.f
r.toString
q.attachShader(s,r)
p.c.a.linkProgram(s)
if(p.c.a.getProgramParameter(s,35714)==null){r=p.gbF().getProgramInfoLog(s)
r.toString
A.aN(A.dz("Invalide program\n          "+r+"\n        "))}p.d=s},
I(){var s=this.a,r=s.c.a
r.toString
B.b.dD(r,s.d)
r=s.c.a
r.toString
B.b.c2(r,s.e)
r=s.c.a
r.toString
B.b.c2(r,s.f)
s.c=null}}
A.cn.prototype={
V(){var s,r,q,p,o,n,m,l=this
for(s=l.c.a,r=s.length,q=l.b.b,p=0;p<s.length;s.length===r||(0,A.ak)(s),++p){o=s[p]
n=l.e.a
n.toString
m=o.b
n.vertexAttribPointer(m,o.c,5126,!1,o.d,q+o.e)
l.e.a.enableVertexAttribArray(m)}},
U(){var s,r,q,p,o
for(s=this.c.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.ak)(s),++q){p=s[q]
o=this.e.a
o.toString
o.disableVertexAttribArray(p.b)}},
ab(){var s=this.a
this.e.a.drawElements(this.d,s.a,s.c,s.b)}}
A.bn.prototype={
gbF(){var s=this.c.a
s.toString
return s},
bu(a,b){var s,r=this,q=r.c.a.createShader(a)
q.toString
r.c.a.shaderSource(q,b)
r.c.a.compileShader(q)
s=r.c.a.getShaderParameter(q,35713)
s.toString
if(!A.jo(s)){q=r.gbF().getShaderInfoLog(q)
q.toString
throw A.b(A.dz("Invalide shader\n          type:"+a+" "+q+"\n        "))}return q}}
A.bH.prototype={
I(){var s=this,r=s.d.a
r.toString
B.b.dF(r,s.f)
s.d=s.f=null},
K(a){var s
this.e=a
s=this.d.a
s.activeTexture(33984+a)
B.b.c_(s,3553,this.f)},
S(a){var s,r,q,p=this
if(a){s=$.l7()
r=p.d.a
r.toString
q=p.e
q.toString
r.activeTexture(33984+q)
p.d.a.pixelStorei(37440,1)
q=p.d.a
q.toString
B.b.dU(q,3553,0,p.a,p.b,p.c,s)
p.d.a.pixelStorei(37440,0)
p.bx(33071,9729)}else{s=p.d.a
s.toString
r=p.e
r.toString
s.activeTexture(33984+r)}s=p.d.a
s.toString
B.b.c_(s,3553,null)
p.e=null},
af(){return this.S(!1)},
ag(a,b,c,d,e){var s,r=this,q=r.d.a
q.toString
s=r.e
s.toString
q.activeTexture(33984+s)
s=r.d.a
s.toString
B.b.cd(s,3553,0,r.a,b,c,0,r.b,r.c,a)
r.bx(e,d)},
bx(a,b){var s=this,r=3553
s.d.a.texParameteri(r,10240,b)
s.d.a.texParameteri(r,10241,b)
s.d.a.texParameteri(r,10242,a)
s.d.a.texParameteri(r,10243,a)}}
A.hS.prototype={
E(a,b){var s,r
this.b=a
s=a.a
s.toString
r=b.d
r.toString
r=s.getUniformLocation(r,this.a)
r.toString
this.c=r}}
A.h1.prototype={}
A.hU.prototype={}
A.hV.prototype={}
A.hl.prototype={}
A.hm.prototype={}
A.hy.prototype={}
A.ey.prototype={}
A.hw.prototype={}
A.hY.prototype={
saY(a,b){this.a.clearColor(0,0,0,0)
this.a.clearDepth(b.f)
this.a.clear(b.a)},
saX(a){var s=this
s.a.enable(3042)
s.a.blendFunc(a.a,a.b)
s.a.blendEquation(32774)
s.a.blendColor(0,0,0,0)},
sdz(a){this.a.enable(2884)
this.a.cullFace(1029)},
saa(a){if(a==null){this.a.disable(2929)
return}this.a.enable(2929)
this.a.depthFunc(515)},
scf(a,b){var s=b.b
this.a.viewport(0,0,s.a,s.b)},
cp(a,b){var s,r,q,p=this,o=t.z
o=t.cl.a(B.f.aB(a,"webgl2",A.hh(["alpha",!1,"antialias",!0,"depth",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],o,o)))
p.a=o
A.ma(b,o)
for(o=b.f,s=o.length,r=0;r<o.length;o.length===s||(0,A.ak)(o),++r){q=o[r]
p.a.getExtension(q)}p.a.frontFace(2305)
p.a.pixelStorei(37441,0)}}
A.hD.prototype={}
A.hE.prototype={}
A.hF.prototype={
cw(a,b){var s,r,q,p,o,n=new Float32Array(32)
for(s=0;s<4;++s)for(r=0;r<4;++r){q=(r*4+s)*2
p=B.m.c7()
if(!(q<32))return A.d(n,q)
n[q]=2*p-1
p=q+1
o=B.m.c7()
if(!(p<32))return A.d(n,p)
n[p]=2*o-1}p=new A.bH(33328,33319,5126)
p.d=a
o=a.a.createTexture()
o.toString
p.f=o
p.K(b)
p.ag(n,4,4,9728,10497)
p.af()
return p}}
A.fk.prototype={
aH(a){this.a1(a)
this.c.E(a,this.a)},
I(){this.a0()
var s=this.c
s.b=s.c=null}}
A.hN.prototype={}
A.hX.prototype={}
A.eB.prototype={
cK(a,b){var s,r
t.j.a(a)
t.dt.a(b)
s=J.lq(a)
r=A.jo(J.lr(s))
this.e=r
if(r)this.c.n(0,s)
else this.d.n(0,s)}}
A.dh.prototype={
bi(){var s,r,q,p,o=this
o.cz()
s=o.b
r=s.a
s.f.unobserve(r)
s.f.disconnect()
s=o.c
q=window
q.toString
p=s.x
p.toString
B.j.bH(q)
q.cancelAnimationFrame(p)
s.sbQ(null)
s.sbR(null)
s=o.a
s.children.toString
A.mh(s,r)
o.x.aJ(o)
o.x=new A.bx()},
ae(){var s,r=this.b,q=r.a,p=document,o=p.documentElement
o.toString
B.d.T(A.j8(q,o).a)
p=p.documentElement
p.toString
B.d.T(A.j8(q,p).b)
p=q.clientWidth
p.toString
o=window.devicePixelRatio
o.toString
o=B.c.T(p*o)
p=q.clientHeight
p.toString
s=window.devicePixelRatio
s.toString
s=B.c.T(p*s)
r.b=new A.cp(new A.aT(o,s))
B.f.sN(q,o)
B.f.sM(q,r.b.b.b)
r.f.takeRecords().toString
this.x.bm(this)},
a2(a){var s=this
s.x.aJ(s)
s.x=a
a.W(s)},
cz(){var s,r,q
for(s=this.d,r=s.length,q=0;q<s.length;s.length===r||(0,A.ak)(s),++q)s[q].ap(0)
B.a.dv(s)},
cE(a){return this.bi()},
cO(a){return this.ae()},
cG(a){return this.ae()},
cU(a){return this.x.a3(this)},
cW(a){return this.x.a4(this)},
cI(a){return this.x.bk(this)},
cM(a){return this.x.bl(this)},
cQ(a){this.x.bo(this,a)},
cS(a){var s=this
s.x.bp(s,a)
s.x.bj(s)},
cv(a,b){A.ix(a)
A.ix(b)
this.x.bn(this,a,b)},
ct(){var s,r,q=this.x
if(q instanceof A.bx)s=-1
else s=q instanceof A.cd?1:0
r=A.hh(["status",s,"fps",this.c.gdI(),"size","??"],t.N,t.K)
return A.jv(A.lO(r))}}
A.b3.prototype={
W(a){},
aJ(a){},
bo(a,b){},
bp(a,b){},
bm(a){},
bk(a){},
bl(a){},
a4(a){},
a3(a){},
bj(a){},
bn(a,b,c){}}
A.bx.prototype={}
A.c5.prototype={
W(a){a.r.a4(a)
a.ae()},
aJ(a){a.r.a3(a)},
bp(a9,b0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6=a9.r,a7=a9.w,a8=a6.db+0.03*b0
a6.db=a8
s=(0.2+a8)*0.5
r=Math.cos(0)
q=Math.sin(0)
p=Math.cos(0)
o=Math.sin(0)
n=Math.cos(s)
m=Math.sin(s)
a8=n*o
l=m*p
k=a8*r+l*q
j=n*p
i=m*o
h=j*q-i*r
a8=l*r-a8*q
i=j*r+i*q
j=A.v([1,0,0,0,1,0,0,0,1],t.n)
g=2/(k*k+h*h+a8*a8+i*i)
f=k*g
e=h*g
d=a8*g
c=i*f
b=i*e
a=i*d
a0=k*f
a1=k*e
a2=k*d
a3=h*e
a4=h*d
a5=a8*d
B.a.k(j,0,1-(a3+a5))
B.a.k(j,1,a1+a)
B.a.k(j,2,a2-b)
B.a.k(j,3,a1-a)
B.a.k(j,4,1-(a0+a5))
B.a.k(j,5,a4+c)
B.a.k(j,6,a2+b)
B.a.k(j,7,a4-c)
B.a.k(j,8,1-(a0+a3))
a8=a6.ch
a8.bq(new A.aR(j))
j=a6.CW
j.br(a7.e)
a6.ay.sR(0,A.dP(a6.cx.m(0,a8).m(0,j).a,t.i))
a6=a6.as
j=a6.r
a8=a6.f
j.aG(a6.x.aC(0,a8))
h=a6.w
j=j.m(0,a6.y).m(0,b0)
k=j.a
k===$&&A.D()
h.a=k
i=j.b
i===$&&A.D()
h.b=i
j=j.c
j===$&&A.D()
h.c=j
a8.a+=k
a8.b+=i
a8.c+=j
l=a6.d
l.aG(a8.aC(0,a7.d))
l.aI()
a6.bt()},
bm(a){a.r.bs(a.b.b)},
bl(a){a.a2(new A.cs())},
a4(a){a.r.a4(a)},
a3(a){a.r.a3(a)},
bj(a){a.r.cr(a)},
bn(a,b,c){var s=a.w.c,r=s.a,q=s.b,p=new A.ao(r,q,s.c)
p.a=r+b*10
p.b=q+c*8
q=a.r.as
q.x.aF(p)
q.y=1-B.c.du(0.6,0,1)}}
A.cd.prototype={
W(a){var s=0,r=A.iJ(t.z),q=this
var $async$W=A.iL(function(b,c){if(b===1)return A.iy(c,r)
while(true)switch(s){case 0:s=2
return A.fA(q.a5(a),$async$W)
case 2:return A.iz(null,r)}})
return A.iA($async$W,r)},
bo(a,b){var s,r,q,p,o,n,m,l,k,j,i
if(this.b)return
s=a.r
r=a.b
s.bs(r.b)
q=s.as
p=a.w
o=p.a
n=1/Math.tan(o.a*0.5)
m=o.d
l=o.c
k=m/(m-l)
m=q.b
B.a.k(m.a,0,n/o.b)
B.a.k(m.a,1,0)
B.a.k(m.a,2,0)
B.a.k(m.a,3,0)
B.a.k(m.a,4,0)
B.a.k(m.a,5,n)
B.a.k(m.a,6,0)
B.a.k(m.a,7,0)
B.a.k(m.a,8,0)
B.a.k(m.a,9,0)
B.a.k(m.a,10,-k)
B.a.k(m.a,11,-1)
B.a.k(m.a,12,0)
B.a.k(m.a,13,0)
B.a.k(m.a,14,-l*k)
B.a.k(m.a,15,0)
q.a.sR(0,A.dP(m.m(0,q.c).a,t.i))
m=p.c
l=q.f
l.aF(m)
q.x.aF(m)
m=q.r
m.a=m.b=m.c=0
m=q.d
m.aG(l.aC(0,p.d))
m.aI()
q.bt()
q=t.n
s.cx.sR(0,A.v([1,0,0,0,0,0,-1,0,0,1,0,0,0,0,0,1],q))
j=new A.h5()
i=A.hh(["POSITION",0,"NORMAL",1],t.N,t.S)
m=s.cy
p=s.b
l=a.f
o=a.e
B.a.n(m,j.bf(0,0,p,l,o,i))
B.a.n(m,j.bf(1,0,p,l,o,i))
s.dx=new A.cn(p.bd(new Uint16Array(A.bO(A.v([0,1,3,2],t.dC)))),p.bc(new Float32Array(A.bO(A.v([0,1,0,0,1,0,1,1],q)))),A.hW(),5)
if(r.e)a.a2(new A.c5())
else a.a2(new A.cs())},
a5(a){var s=0,r=A.iJ(t.z),q=this,p,o
var $async$a5=A.iL(function(b,c){if(b===1)return A.iy(c,r)
while(true)switch(s){case 0:q.b=!0
p=q.a
o=a.f
s=2
return A.fA(p.ad("media/gltf/model.gltf"),$async$a5)
case 2:o.P(0,c)
o=a.e
s=3
return A.fA(p.ac("media/gltf/model.bin"),$async$a5)
case 3:o.k(0,"model.bin",c)
q.b=!1
return A.iz(null,r)}})
return A.iA($async$a5,r)}}
A.hz.prototype={
bs(a){var s=a.b,r=s.b/s.a
s=this.at
B.a.k(s.a,0,2*r)
B.a.k(s.a,4,2)
B.a.k(s.a,6,-r)
B.a.k(s.a,7,-1)},
a4(a){var s,r,q,p,o,n,m,l,k,j=this,i=36160,h=j.a,g=A.v([],t.s)
B.a.n(g,"EXT_color_buffer_float")
h.cp(a.b.a,new A.hw(!0,!0,!0,g))
h.saX(A.jL())
h.sdz(new A.fU())
h.saa(null)
g=j.b
g.c=h
s=h.a.createBuffer()
s.toString
g.d=s
s=h.a.createBuffer()
s.toString
g.e=s
s=g.c.a
s.toString
B.b.ao(s,34963,g.d)
s=g.c.a
s.toString
B.b.ao(s,34962,g.e)
g.c.a.bufferData(34963,g.a,35044)
g.c.a.bufferData(34962,g.b,35044)
r=a.w.b
g=j.c
g.bh(h,0,r,!0)
s=j.d
s.bg(h,0,r)
q=j.e
q.aE(h,r,!0)
p=q.c.a
p.toString
B.b.D(p,i,q.d)
p=new A.bH(34842,6408,5131)
p.d=h
o=h.a.createTexture()
o.toString
p.f=o
p.K(0)
o=q.a
n=q.b
p.ag(new Uint16Array(o*n*4),o,n,9728,33071)
p.af()
q.f=p
o=q.c.a
o.toString
p=p.f
p.toString
B.b.b_(o,i,36064,3553,p,0)
p=q.c.a
p.toString
B.b.D(p,i,null)
p=j.f
p.aE(h,r,!1)
o=p.c.a
o.toString
B.b.D(o,i,p.d)
o=new A.bH(33325,6403,5131)
o.d=h
n=h.a.createTexture()
n.toString
o.f=n
o.K(0)
n=p.a
m=p.b
o.ag(new Uint16Array(n*m),n,m,9728,33071)
o.af()
p.f=o
n=p.c.a
n.toString
o=o.f
o.toString
B.b.b_(n,i,36064,3553,o,0)
o=p.c.a
o.toString
B.b.D(o,i,null)
o=j.r
o.bg(h,0,r)
n=j.w
n.co(h)
n.f.E(h,n.a)
n=j.x
n.a1(h)
m=n.a
n.c.E(h,m)
n.d.E(h,m)
n.e.E(h,m)
n.f.E(h,m)
n.r.E(h,m)
n.w.E(h,m)
n.x.E(h,m)
m=j.y
m.a1(h)
m.c.E(h,m.a)
m=j.z
m.a1(h)
n=m.a
m.c.E(h,n)
m.d.E(h,n)
m.e.E(h,n)
m.f.E(h,n)
m.r.E(h,n)
m.w=m.cw(h,0)
n=j.Q
n.a1(h)
l=n.a
n.c.E(h,l)
n.d.E(h,l)
n.e.E(h,l)
n.f.E(h,l)
j.dx.e=h
for(n=j.cy,l=n.length,k=0;k<l;++k)n[k].e=h
g.f.K(0)
s.f.K(1)
q.f.K(2)
p.f.K(3)
o.f.K(4)
m.w.K(5)},
a3(a){var s,r,q,p,o,n,m,l,k=this,j=k.c
j.f.S(!0)
s=k.d
s.f.S(!0)
r=k.e
r.f.S(!0)
q=k.f
q.f.S(!0)
p=k.r
p.f.S(!0)
o=k.z
o.w.S(!0)
k.dx.e=null
for(n=k.cy,m=n.length,l=0;l<m;++l)n[l].e=null
n=k.w
n.cn()
n=n.f
n.b=n.c=null
n=k.x
n.a0()
m=n.c
m.b=m.c=null
m=n.d
m.b=m.c=null
m=n.e
m.b=m.c=null
m=n.f
m.b=m.c=null
m=n.r
m.b=m.c=null
m=n.w
m.b=m.c=null
n=n.x
n.b=n.c=null
n=k.y
n.a0()
n=n.c
n.b=n.c=null
o.a0()
n=o.c
n.b=n.c=null
n=o.d
n.b=n.c=null
n=o.e
n.b=n.c=null
n=o.f
n.b=n.c=null
n=o.r
n.b=n.c=null
o.w.I()
o=k.Q
o.a0()
n=o.c
n.b=n.c=null
n=o.d
n.b=n.c=null
n=o.e
n.b=n.c=null
o=o.f
o.b=o.c=null
j.I()
s.I()
r.I()
q.I()
p.I()
p=k.b
q=p.c.a
q.toString
B.b.ao(q,34963,null)
q=p.c.a
q.toString
B.b.ao(q,34962,null)
q=p.c.a
q.toString
B.b.c1(q,p.d)
q=p.c.a
q.toString
B.b.c1(q,p.e)
p.c=null
k.a.a=null},
cr(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=36160,c=a0.w,b=e.a,a=c.b
b.scf(0,a)
s=e.d
r=s.c.a
r.toString
B.b.D(r,d,s.d)
b.saY(0,new A.dq(16384,1))
r=s.c.a
r.toString
B.b.D(r,d,null)
for(r=c.f,q=e.c,p=0;p<2;++p){e.cX(a0,r[p])
o=q.f.e
o.toString
e.bw(a0,o,new A.bV(1,1))}e.cY(a0)
r=e.f
q=r.c.a
q.toString
B.b.D(q,d,r.d)
q=e.z
o=q.a
n=o.c.a
n.toString
B.b.Z(n,o.d)
o=c.a
a=a.b
n=a.a
m=q.d
l=t.a
k=t.r
o=k.a(A.v([2*o.b/(n*(1/Math.tan(o.a*0.5))),7.5],l))
j=m.b.a
j.toString
B.b.dW(j,m.c,o)
o=q.r
m=q.w.e
m.toString
j=o.b.a
j.toString
B.b.X(j,o.c,m)
m=q.e
a=a.b
o=1/n
j=1/a
i=k.a(A.v([n,a,o,j],l))
h=m.b.a
h.toString
B.b.Y(h,m.c,i)
i=e.ax
m=q.c
h=k.a(i.a)
g=m.b.a
g.toString
B.b.aA(g,m.c,!1,h)
h=e.e
m=h.f.e
m.toString
q=q.f
g=q.b.a
g.toString
B.b.X(g,q.c,m)
m=e.dx
m.V()
m.ab()
m.U()
b.a.flush()
m=r.c.a
m.toString
B.b.D(m,d,null)
m=e.r
q=m.c.a
q.toString
B.b.D(q,d,m.d)
q=e.Q
g=q.a
f=g.c.a
f.toString
B.b.Z(f,g.d)
g=q.c
i=k.a(i.a)
f=g.b.a
f.toString
B.b.aA(f,g.c,!1,i)
i=q.d
l=k.a(A.v([n,a,o,j],l))
j=i.b.a
j.toString
B.b.Y(j,i.c,l)
h=h.f.e
h.toString
l=q.e
i=l.b.a
i.toString
B.b.X(i,l.c,h)
r=r.f.e
r.toString
q=q.f
h=q.b.a
h.toString
B.b.X(h,q.c,r)
r=e.dx
r.V()
r.ab()
r.U()
b.a.flush()
r=m.c.a
r.toString
B.b.D(r,d,null)
m=m.f.e
m.toString
e.bw(a0,m,new A.bV(774,0))
b.scf(0,a0.b.b)
m=e.w
r=m.a
q=r.c.a
q.toString
B.b.Z(q,r.d)
r=m.f
k=k.a(e.at.a)
q=r.b.a
q.toString
B.b.aA(q,r.c,!1,k)
s=s.f.e
s.toString
m=m.c
k=m.b.a
k.toString
B.b.X(k,m.c,s)
s=e.dx
s.V()
s.ab()
s.U()
b.a.flush()},
cY(a){var s,r,q,p,o,n=this,m=n.e,l=m.c.a
l.toString
B.b.D(l,36160,m.d)
l=n.a
l.saa(new A.dx())
l.saY(0,A.jQ())
s=n.y
r=s.a
q=r.c.a
q.toString
B.b.Z(q,r.d)
s=s.c
r=t.r.a(n.as.a.m(0,n.ay).a)
q=s.b.a
q.toString
B.b.b6(q,s.c,!1,r)
for(s=n.cy,r=s.length,p=0;p<s.length;s.length===r||(0,A.ak)(s),++p){o=s[p]
o.V()
q=o.a
o.e.a.drawElements(o.d,q.a,q.c,q.b)
o.U()}l.a.flush()
l.saa(null)
m=m.c.a
m.toString
B.b.D(m,36160,null)},
cX(a,b){var s,r,q,p,o,n,m,l,k=this,j=a.w,i=k.c,h=i.c.a
h.toString
B.b.D(h,36160,i.d)
h=k.a
h.saa(new A.dx())
h.saY(0,A.jQ())
s=k.x
r=s.a
q=r.c.a
q.toString
B.b.Z(q,r.d)
r=s.c
q=t.r
p=q.a(k.as.a.a)
o=r.b.a
o.toString
B.b.b6(o,r.c,!1,p)
p=s.d
r=q.a(k.ay.a)
o=p.b.a
o.toString
B.b.b6(o,p.c,!1,r)
r=j.c
p=s.e
o=t.a
r=q.a(A.v([r.a,r.b,r.c,1],o))
n=p.b.a
n.toString
B.b.Y(n,p.c,r)
r=b.a
p=s.f
r=q.a(A.v([r.a,r.b,r.c,1],o))
n=p.b.a
n.toString
B.b.Y(n,p.c,r)
r=b.b
p=s.r
r=q.a(A.v([r.a,r.b,r.c,1],o))
n=p.b.a
n.toString
B.b.Y(n,p.c,r)
r=j.r
p=s.w
o=q.a(A.v([r.a,r.b,r.c,1],o))
r=p.b.a
r.toString
B.b.Y(r,p.c,o)
s=s.x
o=s.b.a
o.toString
B.b.dV(o,s.c,20)
for(s=k.cy,r=s.length,m=0;m<s.length;s.length===r||(0,A.ak)(s),++m){l=s[m]
l.V()
q=l.a
l.e.a.drawElements(l.d,q.a,q.c,q.b)
l.U()}h.a.flush()
h.saa(null)
i=i.c.a
i.toString
B.b.D(i,36160,null)},
bw(a,b,c){var s,r,q,p,o=this,n=o.d,m=n.c.a
m.toString
B.b.D(m,36160,n.d)
m=o.a
m.saX(c)
s=o.w
r=s.a
q=r.c.a
q.toString
B.b.Z(q,r.d)
r=s.f
q=t.r.a(o.ax.a)
p=r.b.a
p.toString
B.b.aA(p,r.c,!1,q)
s=s.c
q=s.b.a
q.toString
B.b.X(q,s.c,b)
s=o.dx
s.V()
s.ab()
s.U()
m.a.flush()
m.saX(A.jL())
n=n.c.a
n.toString
B.b.D(n,36160,null)}}
A.dO.prototype={}
A.hB.prototype={}
A.cs.prototype={
bk(a){a.a2(new A.c5())}};(function aliases(){var s=J.bB.prototype
s.cg=s.l
s=J.bi.prototype
s.ck=s.l
s=A.w.prototype
s.cl=s.l
s=A.aA.prototype
s.ci=s.i
s.cj=s.k
s=A.bL.prototype
s.cm=s.k
s=A.dD.prototype
s.aE=s.cB
s=A.dR.prototype
s.a1=s.aH
s.a0=s.I
s=A.fk.prototype
s.co=s.aH
s.cn=s.I})();(function installTearOffs(){var s=hunkHelpers._static_1,r=hunkHelpers._static_0,q=hunkHelpers._static_2,p=hunkHelpers.installInstanceTearOff,o=hunkHelpers._instance_2u,n=hunkHelpers._instance_0u,m=hunkHelpers._instance_1u
s(A,"nn","md",3)
s(A,"no","me",3)
s(A,"np","mf",3)
r(A,"kV","nh",0)
s(A,"nq","n8",1)
q(A,"ns","na",5)
r(A,"nr","n9",0)
p(A.cD.prototype,"gdw",0,1,null,["$2","$1"],["au","ar"],10,0,0)
o(A.C.prototype,"gbE","O",5)
n(A.bJ.prototype,"gdc","dd",0)
s(A,"nK","kG",24)
m(A.dF.prototype,"gbv","cC",29)
o(A.eB.prototype,"gcJ","cK",32)
var l
n(l=A.dh.prototype,"gcq","bi",0)
m(l,"gcD","cE",1)
m(l,"gcN","cO",1)
m(l,"gcF","cG",1)
m(l,"gcT","cU",1)
m(l,"gcV","cW",1)
m(l,"gcH","cI",1)
m(l,"gcL","cM",1)
m(l,"gcP","cQ",9)
m(l,"gcR","cS",9)
o(l,"gcu","cv",34)
n(l,"gcs","ct",35)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.mixinHard,q=hunkHelpers.inherit,p=hunkHelpers.inheritMany
q(A.w,null)
p(A.w,[A.jc,J.bB,J.b4,A.E,A.aP,A.hA,A.f,A.bj,A.ce,A.Q,A.bF,A.bC,A.bW,A.cQ,A.dJ,A.hQ,A.hs,A.c3,A.cZ,A.ip,A.y,A.hg,A.cc,A.ac,A.eQ,A.iu,A.is,A.eC,A.bT,A.aV,A.bI,A.cC,A.cD,A.aF,A.C,A.eD,A.cH,A.cW,A.bJ,A.fd,A.d6,A.cN,A.e,A.d5,A.dt,A.dv,A.c_,A.e5,A.ct,A.i7,A.h2,A.I,A.fg,A.cu,A.fR,A.j9,A.cK,A.n,A.c4,A.hZ,A.aA,A.hr,A.il,A.aS,A.dF,A.fO,A.fP,A.h0,A.h4,A.aR,A.bl,A.aT,A.ao,A.cp,A.aW,A.h5,A.b5,A.bV,A.dq,A.fU,A.ha,A.ex,A.fN,A.dx,A.dD,A.dR,A.cn,A.bn,A.bH,A.hS,A.ey,A.hw,A.hY,A.eB,A.dh,A.b3,A.hz,A.dO,A.hB])
p(J.bB,[J.dI,J.c8,J.a,J.bf,J.bg,J.be,J.aQ])
p(J.a,[J.bi,J.H,A.dV,A.ci,A.c,A.fJ,A.h,A.b7,A.ay,A.z,A.eG,A.af,A.fV,A.fW,A.eI,A.c1,A.eK,A.fX,A.eO,A.bz,A.a_,A.h7,A.eS,A.c6,A.bd,A.hb,A.hi,A.hn,A.eY,A.eZ,A.a1,A.f_,A.f1,A.a2,A.f5,A.f8,A.a3,A.f9,A.a4,A.fc,A.R,A.fi,A.hO,A.a5,A.fl,A.hP,A.hT,A.fq,A.fs,A.fu,A.fw,A.fy,A.ca,A.a9,A.eW,A.ab,A.f3,A.ht,A.fe,A.ad,A.fn,A.fL,A.eE,A.dn,A.dE,A.e9,A.eb,A.cr,A.bE,A.eg,A.ep,A.et])
p(J.bi,[J.e6,J.bp,J.an])
q(J.hc,J.H)
p(J.be,[J.c7,J.dK])
p(A.E,[A.cb,A.aD,A.dL,A.ev,A.eH,A.ed,A.eN,A.dj,A.aw,A.e2,A.ew,A.eu,A.bo,A.du])
p(A.aP,[A.dr,A.ds,A.em,A.iT,A.iV,A.i2,A.i1,A.iB,A.ic,A.ik,A.hK,A.hI,A.hL,A.ir,A.h8,A.h9,A.i5,A.i6,A.iF,A.he,A.iH,A.iI,A.iN,A.iO,A.iP,A.j_,A.j0])
p(A.dr,[A.iY,A.i3,A.i4,A.it,A.i8,A.ig,A.ie,A.ib,A.ia,A.i9,A.ij,A.ii,A.ih,A.hJ,A.hH,A.hM,A.io,A.iE,A.iK,A.iq])
p(A.f,[A.k,A.bk,A.cP])
p(A.k,[A.aa,A.aB,A.cM])
q(A.c2,A.bk)
p(A.aa,[A.aC,A.eV])
q(A.bN,A.bC)
q(A.cz,A.bN)
q(A.bX,A.cz)
q(A.bY,A.bW)
p(A.ds,[A.hu,A.hd,A.iU,A.iC,A.iM,A.id,A.iD,A.hk,A.hq,A.ho,A.hp,A.hx,A.hG,A.i0,A.iR,A.fM,A.h3,A.h6])
q(A.cm,A.aD)
p(A.em,[A.ej,A.bu])
p(A.y,[A.a0,A.cL,A.eU])
p(A.ci,[A.dW,A.bD])
p(A.bD,[A.cS,A.cU])
q(A.cT,A.cS)
q(A.cg,A.cT)
q(A.cV,A.cU)
q(A.ch,A.cV)
p(A.cg,[A.cf,A.dX])
p(A.ch,[A.dY,A.dZ,A.e_,A.cj,A.e0,A.ck,A.e1])
q(A.d1,A.eN)
p(A.aV,[A.bM,A.cJ])
q(A.cE,A.bM)
q(A.aY,A.cE)
q(A.cF,A.bI)
q(A.aj,A.cF)
q(A.cB,A.cC)
q(A.bq,A.cD)
q(A.cG,A.cH)
q(A.f7,A.d6)
q(A.cO,A.cL)
q(A.dM,A.dt)
q(A.hf,A.dv)
p(A.aw,[A.cq,A.dH])
p(A.c,[A.q,A.dB,A.bA,A.bc,A.W,A.cX,A.Y,A.O,A.d_,A.eA,A.aX,A.ar,A.dm,A.aO])
p(A.q,[A.i,A.am,A.az])
q(A.m,A.i)
p(A.m,[A.dg,A.di,A.b8,A.bw,A.dC,A.dG,A.bm,A.ef])
p(A.h,[A.b6,A.b9,A.ai,A.bv])
q(A.fQ,A.ay)
q(A.bZ,A.eG)
p(A.af,[A.fS,A.fT])
q(A.eJ,A.eI)
q(A.c0,A.eJ)
q(A.eL,A.eK)
q(A.dy,A.eL)
q(A.U,A.b7)
q(A.eP,A.eO)
q(A.dA,A.eP)
q(A.eT,A.eS)
q(A.bb,A.eT)
q(A.ah,A.bc)
q(A.dS,A.eY)
q(A.dT,A.eZ)
q(A.f0,A.f_)
q(A.dU,A.f0)
q(A.f2,A.f1)
q(A.cl,A.f2)
q(A.f6,A.f5)
q(A.e7,A.f6)
q(A.ec,A.f8)
q(A.cY,A.cX)
q(A.eh,A.cY)
q(A.fa,A.f9)
q(A.ei,A.fa)
q(A.ek,A.fc)
q(A.fj,A.fi)
q(A.en,A.fj)
q(A.d0,A.d_)
q(A.eo,A.d0)
q(A.fm,A.fl)
q(A.eq,A.fm)
q(A.ez,A.bm)
q(A.fr,A.fq)
q(A.eF,A.fr)
q(A.cI,A.c1)
q(A.ft,A.fs)
q(A.eR,A.ft)
q(A.fv,A.fu)
q(A.cR,A.fv)
q(A.fx,A.fw)
q(A.fb,A.fx)
q(A.fz,A.fy)
q(A.fh,A.fz)
q(A.eM,A.cJ)
q(A.i_,A.hZ)
p(A.aA,[A.c9,A.bL])
q(A.bh,A.bL)
q(A.eX,A.eW)
q(A.dN,A.eX)
q(A.f4,A.f3)
q(A.e3,A.f4)
q(A.ff,A.fe)
q(A.el,A.ff)
q(A.fo,A.fn)
q(A.es,A.fo)
q(A.dl,A.eE)
q(A.e4,A.aO)
q(A.hC,A.fO)
q(A.cw,A.aR)
q(A.cx,A.bl)
q(A.fY,A.fN)
p(A.dD,[A.bU,A.h_,A.fZ])
p(A.hS,[A.h1,A.hU,A.hV,A.hl,A.hm,A.hy])
p(A.dR,[A.hD,A.hE,A.hF,A.fk,A.hX])
q(A.hN,A.fk)
p(A.b3,[A.bx,A.c5,A.cd,A.cs])
s(A.cS,A.e)
s(A.cT,A.Q)
s(A.cU,A.e)
s(A.cV,A.Q)
s(A.bN,A.d5)
s(A.eG,A.fR)
s(A.eI,A.e)
s(A.eJ,A.n)
s(A.eK,A.e)
s(A.eL,A.n)
s(A.eO,A.e)
s(A.eP,A.n)
s(A.eS,A.e)
s(A.eT,A.n)
s(A.eY,A.y)
s(A.eZ,A.y)
s(A.f_,A.e)
s(A.f0,A.n)
s(A.f1,A.e)
s(A.f2,A.n)
s(A.f5,A.e)
s(A.f6,A.n)
s(A.f8,A.y)
s(A.cX,A.e)
s(A.cY,A.n)
s(A.f9,A.e)
s(A.fa,A.n)
s(A.fc,A.y)
s(A.fi,A.e)
s(A.fj,A.n)
s(A.d_,A.e)
s(A.d0,A.n)
s(A.fl,A.e)
s(A.fm,A.n)
s(A.fq,A.e)
s(A.fr,A.n)
s(A.fs,A.e)
s(A.ft,A.n)
s(A.fu,A.e)
s(A.fv,A.n)
s(A.fw,A.e)
s(A.fx,A.n)
s(A.fy,A.e)
s(A.fz,A.n)
r(A.bL,A.e)
s(A.eW,A.e)
s(A.eX,A.n)
s(A.f3,A.e)
s(A.f4,A.n)
s(A.fe,A.e)
s(A.ff,A.n)
s(A.fn,A.e)
s(A.fo,A.n)
s(A.eE,A.y)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{j:"int",t:"double",J:"num",p:"String",iQ:"bool",I:"Null",l:"List"},mangledNames:{},types:["~()","~(@)","~(p,@)","~(~())","@(@)","~(w,X)","I(@)","I()","~(h)","~(t)","~(w[X?])","~(j,@)","ag<I>()","@(p)","I(w,X)","C<@>(@)","I(~)","~(w?,w?)","~(bG,@)","p(ah)","~(ai)","~(p,p)","@(@,p)","@(@,@)","w?(@)","@(w?)","c9(@)","bh<@>(@)","aA(@)","~(J)","t(J,t)","I(@,@)","~(l<@>,bd)","I(~())","~(t,t)","@()","I(@,X)","~(@,@)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti")}
A.mA(v.typeUniverse,JSON.parse('{"e6":"bi","bp":"bi","an":"bi","nT":"h","o4":"h","nW":"aO","nU":"c","oa":"c","oc":"c","o9":"i","ou":"ai","nY":"m","od":"q","o3":"q","o6":"az","or":"O","o2":"ar","nZ":"am","of":"am","o8":"bc","o7":"bb","o_":"z","o0":"R","nX":"bm","dI":{"iQ":[],"A":[]},"c8":{"I":[],"A":[]},"H":{"l":["1"],"k":["1"],"f":["1"]},"hc":{"H":["1"],"l":["1"],"k":["1"],"f":["1"]},"b4":{"a8":["1"]},"be":{"t":[],"J":[]},"c7":{"t":[],"j":[],"J":[],"A":[]},"dK":{"t":[],"J":[],"A":[]},"aQ":{"p":[],"A":[]},"cb":{"E":[]},"k":{"f":["1"]},"aa":{"k":["1"],"f":["1"]},"bj":{"a8":["1"]},"bk":{"f":["2"],"f.E":"2"},"c2":{"bk":["1","2"],"k":["2"],"f":["2"],"f.E":"2"},"ce":{"a8":["2"]},"aC":{"aa":["2"],"k":["2"],"f":["2"],"aa.E":"2","f.E":"2"},"bF":{"bG":[]},"bX":{"cz":["1","2"],"bN":["1","2"],"bC":["1","2"],"d5":["1","2"],"G":["1","2"]},"bW":{"G":["1","2"]},"bY":{"bW":["1","2"],"G":["1","2"]},"cP":{"f":["1"],"f.E":"1"},"cQ":{"a8":["1"]},"dJ":{"jW":[]},"cm":{"aD":[],"E":[]},"dL":{"E":[]},"ev":{"E":[]},"cZ":{"X":[]},"aP":{"ba":[]},"dr":{"ba":[]},"ds":{"ba":[]},"em":{"ba":[]},"ej":{"ba":[]},"bu":{"ba":[]},"eH":{"E":[]},"ed":{"E":[]},"a0":{"y":["1","2"],"k1":["1","2"],"G":["1","2"],"y.K":"1","y.V":"2"},"aB":{"k":["1"],"f":["1"],"f.E":"1"},"cc":{"a8":["1"]},"dV":{"j5":[],"A":[]},"ci":{"L":[]},"dW":{"L":[],"A":[]},"bD":{"r":["1"],"L":[]},"cg":{"e":["t"],"l":["t"],"r":["t"],"k":["t"],"L":[],"f":["t"],"Q":["t"]},"ch":{"e":["j"],"l":["j"],"r":["j"],"k":["j"],"L":[],"f":["j"],"Q":["j"]},"cf":{"e":["t"],"ja":[],"l":["t"],"r":["t"],"k":["t"],"L":[],"f":["t"],"Q":["t"],"A":[],"e.E":"t"},"dX":{"e":["t"],"l":["t"],"r":["t"],"k":["t"],"L":[],"f":["t"],"Q":["t"],"A":[],"e.E":"t"},"dY":{"e":["j"],"l":["j"],"r":["j"],"k":["j"],"L":[],"f":["j"],"Q":["j"],"A":[],"e.E":"j"},"dZ":{"e":["j"],"l":["j"],"r":["j"],"k":["j"],"L":[],"f":["j"],"Q":["j"],"A":[],"e.E":"j"},"e_":{"e":["j"],"l":["j"],"r":["j"],"k":["j"],"L":[],"f":["j"],"Q":["j"],"A":[],"e.E":"j"},"cj":{"e":["j"],"ji":[],"l":["j"],"r":["j"],"k":["j"],"L":[],"f":["j"],"Q":["j"],"A":[],"e.E":"j"},"e0":{"e":["j"],"l":["j"],"r":["j"],"k":["j"],"L":[],"f":["j"],"Q":["j"],"A":[],"e.E":"j"},"ck":{"e":["j"],"l":["j"],"r":["j"],"k":["j"],"L":[],"f":["j"],"Q":["j"],"A":[],"e.E":"j"},"e1":{"e":["j"],"cy":[],"l":["j"],"r":["j"],"k":["j"],"L":[],"f":["j"],"Q":["j"],"A":[],"e.E":"j"},"eN":{"E":[]},"d1":{"aD":[],"E":[]},"C":{"ag":["1"]},"bT":{"E":[]},"aY":{"cE":["1"],"bM":["1"],"aV":["1"]},"aj":{"cF":["1"],"bI":["1"],"aq":["1"],"aZ":["1"]},"cC":{"ke":["1"],"kw":["1"],"aZ":["1"]},"cB":{"cC":["1"],"ke":["1"],"kw":["1"],"aZ":["1"]},"bq":{"cD":["1"]},"cE":{"bM":["1"],"aV":["1"]},"cF":{"bI":["1"],"aq":["1"],"aZ":["1"]},"bI":{"aq":["1"],"aZ":["1"]},"bM":{"aV":["1"]},"cG":{"cH":["1"]},"bJ":{"aq":["1"]},"d6":{"kl":[]},"f7":{"d6":[],"kl":[]},"cL":{"y":["1","2"],"G":["1","2"]},"cO":{"cL":["1","2"],"y":["1","2"],"G":["1","2"],"y.K":"1","y.V":"2"},"cM":{"k":["1"],"f":["1"],"f.E":"1"},"cN":{"a8":["1"]},"y":{"G":["1","2"]},"bC":{"G":["1","2"]},"cz":{"bN":["1","2"],"bC":["1","2"],"d5":["1","2"],"G":["1","2"]},"eU":{"y":["p","@"],"G":["p","@"],"y.K":"p","y.V":"@"},"eV":{"aa":["p"],"k":["p"],"f":["p"],"aa.E":"p","f.E":"p"},"dM":{"dt":["w?","p"]},"t":{"J":[]},"j":{"J":[]},"l":{"k":["1"],"f":["1"]},"dj":{"E":[]},"aD":{"E":[]},"aw":{"E":[]},"cq":{"E":[]},"dH":{"E":[]},"e2":{"E":[]},"ew":{"E":[]},"eu":{"E":[]},"bo":{"E":[]},"du":{"E":[]},"e5":{"E":[]},"ct":{"E":[]},"fg":{"X":[]},"b6":{"h":[]},"b9":{"h":[]},"U":{"b7":[]},"bA":{"c":[]},"ah":{"c":[]},"q":{"c":[]},"ai":{"h":[]},"W":{"c":[]},"Y":{"c":[]},"O":{"c":[]},"m":{"i":[],"q":[],"c":[]},"dg":{"i":[],"q":[],"c":[]},"di":{"i":[],"q":[],"c":[]},"b8":{"i":[],"q":[],"c":[],"dp":[]},"am":{"q":[],"c":[]},"bw":{"i":[],"q":[],"c":[]},"az":{"q":[],"c":[]},"c0":{"e":["ap<J>"],"n":["ap<J>"],"l":["ap<J>"],"r":["ap<J>"],"k":["ap<J>"],"f":["ap<J>"],"n.E":"ap<J>","e.E":"ap<J>"},"c1":{"ap":["J"]},"dy":{"e":["p"],"n":["p"],"l":["p"],"r":["p"],"k":["p"],"f":["p"],"n.E":"p","e.E":"p"},"i":{"q":[],"c":[]},"dA":{"e":["U"],"n":["U"],"l":["U"],"r":["U"],"k":["U"],"f":["U"],"n.E":"U","e.E":"U"},"dB":{"c":[]},"dC":{"i":[],"q":[],"c":[]},"bb":{"e":["q"],"n":["q"],"l":["q"],"r":["q"],"k":["q"],"f":["q"],"n.E":"q","e.E":"q"},"bc":{"c":[]},"dG":{"i":[],"q":[],"c":[],"dp":[]},"bm":{"i":[],"q":[],"c":[]},"dS":{"y":["p","@"],"G":["p","@"],"y.K":"p","y.V":"@"},"dT":{"y":["p","@"],"G":["p","@"],"y.K":"p","y.V":"@"},"dU":{"e":["a1"],"n":["a1"],"l":["a1"],"r":["a1"],"k":["a1"],"f":["a1"],"n.E":"a1","e.E":"a1"},"cl":{"e":["q"],"n":["q"],"l":["q"],"r":["q"],"k":["q"],"f":["q"],"n.E":"q","e.E":"q"},"e7":{"e":["a2"],"n":["a2"],"l":["a2"],"r":["a2"],"k":["a2"],"f":["a2"],"n.E":"a2","e.E":"a2"},"ec":{"y":["p","@"],"G":["p","@"],"y.K":"p","y.V":"@"},"ef":{"i":[],"q":[],"c":[]},"eh":{"e":["W"],"n":["W"],"l":["W"],"c":[],"r":["W"],"k":["W"],"f":["W"],"n.E":"W","e.E":"W"},"ei":{"e":["a3"],"n":["a3"],"l":["a3"],"r":["a3"],"k":["a3"],"f":["a3"],"n.E":"a3","e.E":"a3"},"ek":{"y":["p","p"],"G":["p","p"],"y.K":"p","y.V":"p"},"en":{"e":["O"],"n":["O"],"l":["O"],"r":["O"],"k":["O"],"f":["O"],"n.E":"O","e.E":"O"},"eo":{"e":["Y"],"n":["Y"],"l":["Y"],"c":[],"r":["Y"],"k":["Y"],"f":["Y"],"n.E":"Y","e.E":"Y"},"eq":{"e":["a5"],"n":["a5"],"l":["a5"],"r":["a5"],"k":["a5"],"f":["a5"],"n.E":"a5","e.E":"a5"},"ez":{"i":[],"q":[],"c":[],"dp":[]},"eA":{"c":[]},"aX":{"c":[]},"ar":{"c":[]},"eF":{"e":["z"],"n":["z"],"l":["z"],"r":["z"],"k":["z"],"f":["z"],"n.E":"z","e.E":"z"},"cI":{"ap":["J"]},"eR":{"e":["a_?"],"n":["a_?"],"l":["a_?"],"r":["a_?"],"k":["a_?"],"f":["a_?"],"n.E":"a_?","e.E":"a_?"},"cR":{"e":["q"],"n":["q"],"l":["q"],"r":["q"],"k":["q"],"f":["q"],"n.E":"q","e.E":"q"},"fb":{"e":["a4"],"n":["a4"],"l":["a4"],"r":["a4"],"k":["a4"],"f":["a4"],"n.E":"a4","e.E":"a4"},"fh":{"e":["R"],"n":["R"],"l":["R"],"r":["R"],"k":["R"],"f":["R"],"n.E":"R","e.E":"R"},"cJ":{"aV":["1"]},"eM":{"cJ":["1"],"aV":["1"]},"cK":{"aq":["1"]},"c4":{"a8":["1"]},"bh":{"e":["1"],"l":["1"],"k":["1"],"f":["1"],"e.E":"1"},"dN":{"e":["a9"],"n":["a9"],"l":["a9"],"k":["a9"],"f":["a9"],"n.E":"a9","e.E":"a9"},"e3":{"e":["ab"],"n":["ab"],"l":["ab"],"k":["ab"],"f":["ab"],"n.E":"ab","e.E":"ab"},"el":{"e":["p"],"n":["p"],"l":["p"],"k":["p"],"f":["p"],"n.E":"p","e.E":"p"},"es":{"e":["ad"],"n":["ad"],"l":["ad"],"k":["ad"],"f":["ad"],"n.E":"ad","e.E":"ad"},"dl":{"y":["p","@"],"G":["p","@"],"y.K":"p","y.V":"@"},"dm":{"c":[]},"aO":{"c":[]},"e4":{"c":[]},"bv":{"h":[]},"cw":{"aR":[]},"cx":{"bl":[]},"bx":{"b3":[]},"c5":{"b3":[]},"cd":{"b3":[]},"cs":{"b3":[]},"lw":{"L":[]},"lK":{"l":["j"],"k":["j"],"f":["j"],"L":[]},"cy":{"l":["j"],"k":["j"],"f":["j"],"L":[]},"m9":{"l":["j"],"k":["j"],"f":["j"],"L":[]},"lI":{"l":["j"],"k":["j"],"f":["j"],"L":[]},"ji":{"l":["j"],"k":["j"],"f":["j"],"L":[]},"lJ":{"l":["j"],"k":["j"],"f":["j"],"L":[]},"m8":{"l":["j"],"k":["j"],"f":["j"],"L":[]},"ja":{"l":["t"],"k":["t"],"f":["t"],"L":[]},"lG":{"l":["t"],"k":["t"],"f":["t"],"L":[]}}'))
A.mz(v.typeUniverse,JSON.parse('{"k":1,"bD":1,"cH":1,"dv":2,"bL":1}'))
var u={c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type"}
var t=(function rtii(){var s=A.au
return{h:s("@<~>"),t:s("bT"),cQ:s("b5"),d:s("b6"),fK:s("b7"),dI:s("j5"),gA:s("b8"),gF:s("bX<bG,@>"),e:s("z"),ey:s("b9"),e5:s("az"),gw:s("k<@>"),R:s("E"),A:s("h"),c8:s("U"),Z:s("ba"),b9:s("ag<@>"),bo:s("ah"),gb:s("c6"),dt:s("bd"),B:s("jW"),V:s("f<@>"),U:s("H<b5>"),s:s("H<p>"),n:s("H<t>"),b:s("H<@>"),dC:s("H<j>"),a:s("H<J>"),T:s("c8"),g:s("an"),aU:s("r<@>"),am:s("bh<@>"),eo:s("a0<bG,@>"),dz:s("ca"),bG:s("a9"),x:s("l<t>"),j:s("l<@>"),r:s("l<J>"),aH:s("G<p,cy>"),g6:s("G<p,j>"),f:s("G<@,@>"),gU:s("aR"),w:s("bl"),cI:s("a1"),G:s("q"),P:s("I"),ck:s("ab"),K:s("w"),he:s("a2"),af:s("aT"),eU:s("ao"),D:s("aS<J>"),E:s("ai"),gT:s("ob"),q:s("ap<J>"),cl:s("bE"),fY:s("W"),f7:s("a3"),gf:s("a4"),l:s("X"),N:s("p"),k:s("R"),fo:s("bG"),a0:s("Y"),c7:s("O"),aK:s("a5"),cM:s("ad"),dm:s("A"),eK:s("aD"),Q:s("L"),I:s("cy"),ak:s("bp"),cW:s("aW"),g4:s("aX"),g2:s("ar"),bj:s("bq<ah>"),eJ:s("eM<bv>"),ao:s("C<ah>"),c:s("C<@>"),fJ:s("C<j>"),dx:s("cO<@,@>"),y:s("iQ"),m:s("iQ(w)"),i:s("t"),z:s("@"),O:s("@()"),v:s("@(w)"),C:s("@(w,X)"),b8:s("@(@,@)"),S:s("j"),J:s("0&*"),_:s("w*"),dy:s("G<@,@>/?"),eH:s("ag<I>?"),g7:s("a_?"),bM:s("l<@>?"),X:s("w?"),eV:s("cr?"),gO:s("X?"),F:s("aF<@,@>?"),o:s("@(h)?"),Y:s("~()?"),gq:s("~(b6)?"),aA:s("~(b9)?"),fi:s("~(h)?"),gx:s("~(ai)?"),W:s("~(t)?"),H:s("J"),p:s("~"),M:s("~()"),cZ:s("~(bz,bz,bA)"),d5:s("~(w)"),da:s("~(w,X)"),eA:s("~(p,p)"),u:s("~(p,@)"),ge:s("~(t)"),L:s("~(J)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.f=A.b8.prototype
B.D=A.ah.prototype
B.E=J.bB.prototype
B.a=J.H.prototype
B.d=J.c7.prototype
B.c=J.be.prototype
B.h=J.aQ.prototype
B.F=J.an.prototype
B.G=J.a.prototype
B.q=A.cf.prototype
B.r=A.cj.prototype
B.t=J.e6.prototype
B.b=A.bE.prototype
B.i=J.bp.prototype
B.j=A.aX.prototype
B.k=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.u=function() {
  var toStringFunction = Object.prototype.toString;
  function getTag(o) {
    var s = toStringFunction.call(o);
    return s.substring(8, s.length - 1);
  }
  function getUnknownTag(object, tag) {
    if (/^HTML[A-Z].*Element$/.test(tag)) {
      var name = toStringFunction.call(object);
      if (name == "[object Object]") return null;
      return "HTMLElement";
    }
  }
  function getUnknownTagGenericBrowser(object, tag) {
    if (self.HTMLElement && object instanceof HTMLElement) return "HTMLElement";
    return getUnknownTag(object, tag);
  }
  function prototypeForTag(tag) {
    if (typeof window == "undefined") return null;
    if (typeof window[tag] == "undefined") return null;
    var constructor = window[tag];
    if (typeof constructor != "function") return null;
    return constructor.prototype;
  }
  function discriminator(tag) { return null; }
  var isBrowser = typeof navigator == "object";
  return {
    getTag: getTag,
    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,
    prototypeForTag: prototypeForTag,
    discriminator: discriminator };
}
B.z=function(getTagFallback) {
  return function(hooks) {
    if (typeof navigator != "object") return hooks;
    var ua = navigator.userAgent;
    if (ua.indexOf("DumpRenderTree") >= 0) return hooks;
    if (ua.indexOf("Chrome") >= 0) {
      function confirm(p) {
        return typeof window == "object" && window[p] && window[p].name == p;
      }
      if (confirm("Window") && confirm("HTMLElement")) return hooks;
    }
    hooks.getTag = getTagFallback;
  };
}
B.v=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.w=function(hooks) {
  var getTag = hooks.getTag;
  var prototypeForTag = hooks.prototypeForTag;
  function getTagFixed(o) {
    var tag = getTag(o);
    if (tag == "Document") {
      if (!!o.xmlVersion) return "!Document";
      return "!HTMLDocument";
    }
    return tag;
  }
  function prototypeForTagFixed(tag) {
    if (tag == "Document") return null;
    return prototypeForTag(tag);
  }
  hooks.getTag = getTagFixed;
  hooks.prototypeForTag = prototypeForTagFixed;
}
B.y=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Firefox") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "GeoGeolocation": "Geolocation",
    "Location": "!Location",
    "WorkerMessageEvent": "MessageEvent",
    "XMLDocument": "!Document"};
  function getTagFirefox(o) {
    var tag = getTag(o);
    return quickMap[tag] || tag;
  }
  hooks.getTag = getTagFirefox;
}
B.x=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Trident/") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "HTMLDDElement": "HTMLElement",
    "HTMLDTElement": "HTMLElement",
    "HTMLPhraseElement": "HTMLElement",
    "Position": "Geoposition"
  };
  function getTagIE(o) {
    var tag = getTag(o);
    var newTag = quickMap[tag];
    if (newTag) return newTag;
    if (tag == "Object") {
      if (window.DataView && (o instanceof window.DataView)) return "DataView";
    }
    return tag;
  }
  function prototypeForTagIE(tag) {
    var constructor = window[tag];
    if (constructor == null) return null;
    return constructor.prototype;
  }
  hooks.getTag = getTagIE;
  hooks.prototypeForTag = prototypeForTagIE;
}
B.l=function(hooks) { return hooks; }

B.A=new A.dM()
B.B=new A.e5()
B.W=new A.hA()
B.m=new A.il()
B.n=new A.ip()
B.e=new A.f7()
B.C=new A.fg()
B.H=new A.hf(null)
B.o=A.v(s([]),t.b)
B.I={}
B.p=new A.bY(B.I,[],A.au("bY<bG,@>"))
B.J=new A.bF("call")
B.K=A.al("j5")
B.L=A.al("lw")
B.M=A.al("ja")
B.N=A.al("lG")
B.O=A.al("lI")
B.P=A.al("lJ")
B.Q=A.al("lK")
B.R=A.al("w")
B.S=A.al("ji")
B.T=A.al("m8")
B.U=A.al("m9")
B.V=A.al("cy")})();(function staticFields(){$.im=null
$.a6=A.v([],A.au("H<w>"))
$.ka=null
$.jO=null
$.jN=null
$.kZ=null
$.kT=null
$.l3=null
$.iS=null
$.iW=null
$.jz=null
$.bQ=null
$.d7=null
$.d8=null
$.ju=!1
$.B=B.e
$.jk=null})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal
s($,"o1","fG",()=>A.kY("_$dart_dartClosure"))
s($,"oH","j2",()=>B.e.ca(new A.iY(),A.au("ag<I>")))
s($,"oh","l8",()=>A.aE(A.hR({
toString:function(){return"$receiver$"}})))
s($,"oi","l9",()=>A.aE(A.hR({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"oj","la",()=>A.aE(A.hR(null)))
s($,"ok","lb",()=>A.aE(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"on","le",()=>A.aE(A.hR(void 0)))
s($,"oo","lf",()=>A.aE(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"om","ld",()=>A.aE(A.ki(null)))
s($,"ol","lc",()=>A.aE(function(){try{null.$method$}catch(r){return r.message}}()))
s($,"oq","lh",()=>A.aE(A.ki(void 0)))
s($,"op","lg",()=>A.aE(function(){try{(void 0).$method$}catch(r){return r.message}}()))
s($,"os","jE",()=>A.mc())
s($,"o5","j1",()=>A.au("C<I>").a($.j2()))
s($,"oF","lk",()=>A.iZ(B.R))
s($,"oD","lj",()=>A.mN(A.jv(self)))
s($,"ot","jF",()=>A.kY("_$dart_dartObject"))
s($,"oE","jG",()=>function DartObject(a){this.o=a})
s($,"og","l7",()=>A.j6(1,1))
s($,"nV","l6",()=>{var r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3="uPvwlTransform",c4="aPosition",c5="uViewBound",c6="uDepthDataSampler",c7="#version 300 es\n    precision highp float;\n\n    in vec2 aPositionMapping;\n    out vec2 vMapping;\n\n    uniform mat3 uPvwlTransform;\n\n    void main()\n    {\n      vMapping = aPositionMapping;\n\n      vec3 position = uPvwlTransform * vec3(aPositionMapping, 1.0);\n      gl_Position = vec4(position.xy, 0.0, 1.0);\n    }\n  ",c8=A.au("bw").a(A.nv().querySelector("#real-t-demo-gltf")),c9=A.j6(null,null)
A.k8()
r=A.k8()
q=t.z
p=A.kf(q)
q=A.kf(q)
o=A.je(20,0,!0,t.i)
n=A.v([],A.au("H<aq<@>>"))
m=A.lS(0)
l=A.lR(0)
k=A.jf(c3)
A.hW()
j=A.ee("uSampler")
i=A.jg("uPvTransform")
h=A.jg("uWlTransform")
g=A.cA("uViewPosition")
f=A.cA("uLightPosition")
e=A.cA("uDiffuseColor")
d=A.cA("uSpecularColor")
A.j4(c4,0,3,24,0)
A.j4("aNormal",1,3,24,12)
c=A.jg(c3)
A.j4(c4,0,3,12,0)
b=A.jf(c3)
a=A.cA(c5)
a0=A.ee(c6)
a1=A.ee("uSamplingRotationSampler")
A.hW()
a2=A.jf(c3)
a3=A.cA(c5)
a4=A.ee(c6)
a5=A.ee("uOcclusionSampler")
A.hW()
a6=A.kk()
a7=A.kk()
a8=A.k9()
a9=A.k3()
b0=A.k3()
b1=A.er()
b2=A.kj(0,0,1)
b3=A.kj(0,1,0)
b4=A.k9()
b5=t.n
b6=A.v([1,0,0,0,1,0,0,0,1],b5)
b5=A.v([2,0,0,0,2,0,-1,-1,1],b5)
b7=A.er()
b8=A.er()
b9=A.er()
c0=A.er()
c1=A.v([],A.au("H<cn>"))
A.k7(0,0)
c2=A.k7(1024,1024)
return new A.dh(c8,new A.eB(c9,new A.cp(r),p,q),new A.dF(o),n,new A.a0(A.au("a0<p,cy>")),new A.a0(A.au("a0<@,@>")),new A.hz(new A.hY(),new A.fY(m,l),new A.bU(),new A.bU(),new A.h_(),new A.fZ(),new A.bU(),new A.hN(k,j,new A.bn("    precision highp float;\n    \n    attribute vec2 aPositionMapping;\n\n    uniform mat3 uPvwlTransform;\n\n    varying vec2 vMapping;\n\n    void main(void)\n    {\n      vMapping = aPositionMapping;\n\n      vec3 position = uPvwlTransform * vec3(aPositionMapping, 1.0);\n      gl_Position = vec4(position.xy, 0.0, 1.0);\n    }\n  ","    precision highp float;\n\n    uniform sampler2D uSampler;\n\n    varying vec2 vMapping;\n\n    void main(void)\n    {\n      gl_FragColor = texture2D(uSampler, vMapping);\n    }\n  ")),new A.hD(i,h,g,f,e,d,new A.h1("uShininess"),new A.bn("    precision highp float;\n\n    attribute vec3 aPosition;\n    attribute vec3 aNormal;\n\n    uniform mat4 uPvTransform;\n    uniform mat4 uWlTransform;\n\n    varying vec4 vWorldPosition;\n    varying vec4 vWorldNormal;\n\n    void main(void)\n    {\n      vWorldPosition = uWlTransform * vec4(aPosition, 1.0);\n      vWorldNormal = normalize(uWlTransform * vec4(aNormal, 0.0));\n\n      gl_Position = uPvTransform * vWorldPosition;\n    }\n  ","    precision highp float;\n\n        float LambertianFactor(\n      in vec4 polygonNormal,\n      in vec4 lightDirection)\n    {\n      return max(dot(polygonNormal, lightDirection), 0.0);\n    }\n  \n        float PhongFactor(\n        in vec4 polygonNormal,\n        in vec4 viewDirection,\n        in vec4 lightDirection,\n        in float shininess)\n    {\n      vec4 reflection = reflect(-lightDirection, polygonNormal);\n      return pow(max(dot(reflection, viewDirection),0.0), shininess);\n    }\n  \n\n    uniform vec4 uViewPosition;\n    uniform vec4 uLightPosition;\n    uniform vec4 uDiffuseColor;\n    uniform vec4 uSpecularColor;\n    uniform float uShininess;\n\n    varying vec4 vWorldPosition;\n    varying vec4 vWorldNormal;\n\n    void main(void)\n    {\n      vec4 worldViewDirection = normalize(uViewPosition - vWorldPosition);\n      vec4 worldLightDirection = normalize(uLightPosition - vWorldPosition);\n\n      float diffuseFactor = LambertianFactor(vWorldNormal, worldLightDirection);\n\n      float phongFactor = PhongFactor(\n          vWorldNormal,\n          worldViewDirection,\n          worldLightDirection,\n          uShininess);\n\n      gl_FragColor = uDiffuseColor * diffuseFactor + uSpecularColor * phongFactor;\n    }\n  ")),new A.hX(c,new A.bn("#version 300 es\n    precision highp float;\n    in vec3 aPosition;\n    out float vViewDepth;\n\n    uniform mat4 uPvwlTransform;\n\n    void main()\n    {\n      gl_Position = uPvwlTransform * vec4(aPosition, 1.0);\n      vViewDepth = gl_Position.w;\n    }\n  ","#version 300 es\n    precision highp float;\n    in float vViewDepth;\n    out vec4 outColor;\n\n    void main()\n    {\n      outColor = vec4(dFdx(vViewDepth), dFdy(vViewDepth), vViewDepth, 0);\n    }\n  ")),new A.hF(b,new A.hU("uData"),a,a0,a1,new A.bn(c7,"#version 300 es\n    precision highp float;\n\n\t  const float kTangentTau = 0.03125;\n    const float dx[4] = float[4](0.1, 0.0, -0.3, 0.0);\n    const float dy[4] = float[4](0.0, 0.2, 0.0, -0.4);\n\n    in vec2 vMapping;\n    out vec4 outColor;\n\n    uniform vec2 uData;\n    uniform vec4 uViewBound;\n    uniform sampler2D uDepthDataSampler;\n    uniform sampler2D uSamplingRotationSampler;\n\n    void main()\n    {\n      float vectorScale = uData.x;\n      float intensity = uData.y;\n\n      vec4 depthData = texture(uDepthDataSampler, vMapping);\n\n      float scale = vectorScale * depthData.z;\n      vec3 normal = normalize(vec3(depthData.xy, -scale));\n      scale = 1.0 / scale;\n\n      vec2 rot = texture(uSamplingRotationSampler, vMapping * uViewBound.xy * 0.25).xy;\n      float occlusion = 0.0;\n      float weight = 0.0;\n  \n      for (int i = 0; i < 4; i++)\n      {\n        vec3 v;\n        v.x = rot.x * dx[i] - rot.y * dy[i];\n        v.y = rot.y * dx[i] + rot.x * dy[i];\n\n        vec2 sampling = vMapping + ( v.xy * scale * uViewBound.zw);\n        v.z = texture(uDepthDataSampler, sampling).z - depthData.z;\n\n        float d = dot(normal, v);\n        float w = clamp(1.0 - d * 0.5, 0.0, 1.0);\n        float c = clamp(d * inversesqrt(dot(v, v)) - kTangentTau, 0.0, 1.0);\n\n        occlusion += w - w * sqrt(1.0 - c * c);\n        weight += w;\n      }\n\n      outColor = vec4(1.0 - occlusion * intensity / max(weight, 0.0001), 0, 0, 0);\n    }\n  ")),new A.hE(a2,a3,a4,a5,new A.bn(c7,"#version 300 es\n    precision highp float;\n\n    const float kDepthDelta = 0.0078125;\n\n    in vec2 vMapping;\n    out vec4 outColor;\n\n    uniform vec4 uViewBound;\n    uniform sampler2D uDepthDataSampler;\n    uniform sampler2D uOcclusionSampler;\n\n    void main()\n    {\n      vec4 depthData = texture(uDepthDataSampler, vMapping);\n      float range = (max(abs(depthData.x), abs(depthData.y)) + kDepthDelta) * 1.5;\n\n      vec2 occl = vec2(0.0, 1.0);\n      vec3 blur = vec3(0.0);\n      \n      for (int j = 0; j < 2; j++)\n      {\n        float y = float(j * 2) - 0.5;\n        for (int i = 0; i < 2; i++)\n        {\n          float x = float(i * 2) - 0.5;\n\n          vec2 sampling = vMapping + vec2(x, y) * uViewBound.zw;\n\n          occl.x = texture(uOcclusionSampler, sampling).x;\n          blur.z += occl.x;\n\n          float depth = texture(uDepthDataSampler, sampling).z;\n          if (abs(depth - depthData.z) < range) blur.xy += occl;\n        }\n      }\n\n      float occlusion = (blur.y > 0.0) ? blur.x / blur.y : blur.z * 0.25;\n      outColor = vec4(occlusion);\n    }\n  ")),new A.hC(a6,a7,a8,a9,b0,b1,b2,b3,b4),new A.cw(b6),new A.cw(b5),b7,b8,b9,c0,c1),new A.hB(new A.h4(1.5707963267948966,1,0.1,400),new A.cp(c2),A.e8(0,0,15),A.e8(0,-4.5,0),A.e8(5,0,0),A.v([A.k0(A.e8(10,0,10),A.j7("#d3a555")),A.k0(A.e8(-10,0,10),A.j7("#6260c3"))],A.au("H<dO>")),A.j7("#17505e")),new A.bx())})
s($,"ov","li",()=>$.l6())})();(function nativeSupport(){!function(){var s=function(a){var m={}
m[a]=1
return Object.keys(hunkHelpers.convertToFastObject(m))[0]}
v.getIsolateTag=function(a){return s("___dart_"+a+v.isolateTag)}
var r="___dart_isolate_tags_"
var q=Object[r]||(Object[r]=Object.create(null))
var p="_ZxYxX"
for(var o=0;;o++){var n=s(p+"_"+o+"_")
if(!(n in q)){q[n]=1
v.isolateTag=n
break}}v.dispatchPropertyName=v.getIsolateTag("dispatch_record")}()
hunkHelpers.setOrUpdateInterceptorsByTag({WebGL:J.bB,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,webkitFileSystemDirectoryEntry:J.a,FileSystemDirectoryEntry:J.a,DirectoryReader:J.a,WebKitDirectoryReader:J.a,webkitFileSystemDirectoryReader:J.a,FileSystemDirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,webkitFileSystemEntry:J.a,FileSystemEntry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,webkitFileSystemFileEntry:J.a,FileSystemFileEntry:J.a,DOMFileSystem:J.a,WebKitFileSystem:J.a,webkitFileSystem:J.a,FileSystem:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,GeolocationPosition:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,GeolocationPositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL2RenderingContextBase:J.a,ArrayBuffer:A.dV,ArrayBufferView:A.ci,DataView:A.dW,Float32Array:A.cf,Float64Array:A.dX,Int16Array:A.dY,Int32Array:A.dZ,Int8Array:A.e_,Uint16Array:A.cj,Uint32Array:A.e0,Uint8ClampedArray:A.ck,CanvasPixelArray:A.ck,Uint8Array:A.e1,HTMLBRElement:A.m,HTMLBaseElement:A.m,HTMLBodyElement:A.m,HTMLButtonElement:A.m,HTMLContentElement:A.m,HTMLDListElement:A.m,HTMLDataElement:A.m,HTMLDataListElement:A.m,HTMLDetailsElement:A.m,HTMLDialogElement:A.m,HTMLEmbedElement:A.m,HTMLFieldSetElement:A.m,HTMLHRElement:A.m,HTMLHeadElement:A.m,HTMLHeadingElement:A.m,HTMLHtmlElement:A.m,HTMLIFrameElement:A.m,HTMLInputElement:A.m,HTMLLIElement:A.m,HTMLLabelElement:A.m,HTMLLegendElement:A.m,HTMLLinkElement:A.m,HTMLMapElement:A.m,HTMLMenuElement:A.m,HTMLMetaElement:A.m,HTMLMeterElement:A.m,HTMLModElement:A.m,HTMLOListElement:A.m,HTMLObjectElement:A.m,HTMLOptGroupElement:A.m,HTMLOptionElement:A.m,HTMLOutputElement:A.m,HTMLParagraphElement:A.m,HTMLParamElement:A.m,HTMLPictureElement:A.m,HTMLPreElement:A.m,HTMLProgressElement:A.m,HTMLQuoteElement:A.m,HTMLScriptElement:A.m,HTMLShadowElement:A.m,HTMLSlotElement:A.m,HTMLSourceElement:A.m,HTMLSpanElement:A.m,HTMLStyleElement:A.m,HTMLTableCaptionElement:A.m,HTMLTableCellElement:A.m,HTMLTableDataCellElement:A.m,HTMLTableHeaderCellElement:A.m,HTMLTableColElement:A.m,HTMLTableElement:A.m,HTMLTableRowElement:A.m,HTMLTableSectionElement:A.m,HTMLTemplateElement:A.m,HTMLTextAreaElement:A.m,HTMLTimeElement:A.m,HTMLTitleElement:A.m,HTMLTrackElement:A.m,HTMLUListElement:A.m,HTMLUnknownElement:A.m,HTMLDirectoryElement:A.m,HTMLFontElement:A.m,HTMLFrameElement:A.m,HTMLFrameSetElement:A.m,HTMLMarqueeElement:A.m,HTMLElement:A.m,AccessibleNodeList:A.fJ,HTMLAnchorElement:A.dg,HTMLAreaElement:A.di,BeforeUnloadEvent:A.b6,Blob:A.b7,HTMLCanvasElement:A.b8,CDATASection:A.am,CharacterData:A.am,Comment:A.am,ProcessingInstruction:A.am,Text:A.am,CSSPerspective:A.fQ,CSSCharsetRule:A.z,CSSConditionRule:A.z,CSSFontFaceRule:A.z,CSSGroupingRule:A.z,CSSImportRule:A.z,CSSKeyframeRule:A.z,MozCSSKeyframeRule:A.z,WebKitCSSKeyframeRule:A.z,CSSKeyframesRule:A.z,MozCSSKeyframesRule:A.z,WebKitCSSKeyframesRule:A.z,CSSMediaRule:A.z,CSSNamespaceRule:A.z,CSSPageRule:A.z,CSSRule:A.z,CSSStyleRule:A.z,CSSSupportsRule:A.z,CSSViewportRule:A.z,CSSStyleDeclaration:A.bZ,MSStyleCSSProperties:A.bZ,CSS2Properties:A.bZ,CSSImageValue:A.af,CSSKeywordValue:A.af,CSSNumericValue:A.af,CSSPositionValue:A.af,CSSResourceValue:A.af,CSSUnitValue:A.af,CSSURLImageValue:A.af,CSSStyleValue:A.af,CSSMatrixComponent:A.ay,CSSRotation:A.ay,CSSScale:A.ay,CSSSkew:A.ay,CSSTranslation:A.ay,CSSTransformComponent:A.ay,CSSTransformValue:A.fS,CSSUnparsedValue:A.fT,DataTransferItemList:A.fV,DeviceOrientationEvent:A.b9,HTMLDivElement:A.bw,Document:A.az,HTMLDocument:A.az,XMLDocument:A.az,DOMException:A.fW,ClientRectList:A.c0,DOMRectList:A.c0,DOMRectReadOnly:A.c1,DOMStringList:A.dy,DOMTokenList:A.fX,MathMLElement:A.i,SVGAElement:A.i,SVGAnimateElement:A.i,SVGAnimateMotionElement:A.i,SVGAnimateTransformElement:A.i,SVGAnimationElement:A.i,SVGCircleElement:A.i,SVGClipPathElement:A.i,SVGDefsElement:A.i,SVGDescElement:A.i,SVGDiscardElement:A.i,SVGEllipseElement:A.i,SVGFEBlendElement:A.i,SVGFEColorMatrixElement:A.i,SVGFEComponentTransferElement:A.i,SVGFECompositeElement:A.i,SVGFEConvolveMatrixElement:A.i,SVGFEDiffuseLightingElement:A.i,SVGFEDisplacementMapElement:A.i,SVGFEDistantLightElement:A.i,SVGFEFloodElement:A.i,SVGFEFuncAElement:A.i,SVGFEFuncBElement:A.i,SVGFEFuncGElement:A.i,SVGFEFuncRElement:A.i,SVGFEGaussianBlurElement:A.i,SVGFEImageElement:A.i,SVGFEMergeElement:A.i,SVGFEMergeNodeElement:A.i,SVGFEMorphologyElement:A.i,SVGFEOffsetElement:A.i,SVGFEPointLightElement:A.i,SVGFESpecularLightingElement:A.i,SVGFESpotLightElement:A.i,SVGFETileElement:A.i,SVGFETurbulenceElement:A.i,SVGFilterElement:A.i,SVGForeignObjectElement:A.i,SVGGElement:A.i,SVGGeometryElement:A.i,SVGGraphicsElement:A.i,SVGImageElement:A.i,SVGLineElement:A.i,SVGLinearGradientElement:A.i,SVGMarkerElement:A.i,SVGMaskElement:A.i,SVGMetadataElement:A.i,SVGPathElement:A.i,SVGPatternElement:A.i,SVGPolygonElement:A.i,SVGPolylineElement:A.i,SVGRadialGradientElement:A.i,SVGRectElement:A.i,SVGScriptElement:A.i,SVGSetElement:A.i,SVGStopElement:A.i,SVGStyleElement:A.i,SVGElement:A.i,SVGSVGElement:A.i,SVGSwitchElement:A.i,SVGSymbolElement:A.i,SVGTSpanElement:A.i,SVGTextContentElement:A.i,SVGTextElement:A.i,SVGTextPathElement:A.i,SVGTextPositioningElement:A.i,SVGTitleElement:A.i,SVGUseElement:A.i,SVGViewElement:A.i,SVGGradientElement:A.i,SVGComponentTransferFunctionElement:A.i,SVGFEDropShadowElement:A.i,SVGMPathElement:A.i,Element:A.i,AbortPaymentEvent:A.h,AnimationEvent:A.h,AnimationPlaybackEvent:A.h,ApplicationCacheErrorEvent:A.h,BackgroundFetchClickEvent:A.h,BackgroundFetchEvent:A.h,BackgroundFetchFailEvent:A.h,BackgroundFetchedEvent:A.h,BeforeInstallPromptEvent:A.h,BlobEvent:A.h,CanMakePaymentEvent:A.h,ClipboardEvent:A.h,CloseEvent:A.h,CompositionEvent:A.h,CustomEvent:A.h,DeviceMotionEvent:A.h,ErrorEvent:A.h,ExtendableEvent:A.h,ExtendableMessageEvent:A.h,FetchEvent:A.h,FocusEvent:A.h,FontFaceSetLoadEvent:A.h,ForeignFetchEvent:A.h,GamepadEvent:A.h,HashChangeEvent:A.h,InstallEvent:A.h,KeyboardEvent:A.h,MediaEncryptedEvent:A.h,MediaKeyMessageEvent:A.h,MediaQueryListEvent:A.h,MediaStreamEvent:A.h,MediaStreamTrackEvent:A.h,MessageEvent:A.h,MIDIConnectionEvent:A.h,MIDIMessageEvent:A.h,MouseEvent:A.h,DragEvent:A.h,MutationEvent:A.h,NotificationEvent:A.h,PageTransitionEvent:A.h,PaymentRequestEvent:A.h,PaymentRequestUpdateEvent:A.h,PointerEvent:A.h,PopStateEvent:A.h,PresentationConnectionAvailableEvent:A.h,PresentationConnectionCloseEvent:A.h,PromiseRejectionEvent:A.h,PushEvent:A.h,RTCDataChannelEvent:A.h,RTCDTMFToneChangeEvent:A.h,RTCPeerConnectionIceEvent:A.h,RTCTrackEvent:A.h,SecurityPolicyViolationEvent:A.h,SensorErrorEvent:A.h,SpeechRecognitionError:A.h,SpeechRecognitionEvent:A.h,SpeechSynthesisEvent:A.h,StorageEvent:A.h,SyncEvent:A.h,TextEvent:A.h,TouchEvent:A.h,TrackEvent:A.h,TransitionEvent:A.h,WebKitTransitionEvent:A.h,UIEvent:A.h,VRDeviceEvent:A.h,VRDisplayEvent:A.h,VRSessionEvent:A.h,WheelEvent:A.h,MojoInterfaceRequestEvent:A.h,USBConnectionEvent:A.h,IDBVersionChangeEvent:A.h,AudioProcessingEvent:A.h,OfflineAudioCompletionEvent:A.h,Event:A.h,InputEvent:A.h,SubmitEvent:A.h,AbsoluteOrientationSensor:A.c,Accelerometer:A.c,AccessibleNode:A.c,AmbientLightSensor:A.c,Animation:A.c,ApplicationCache:A.c,DOMApplicationCache:A.c,OfflineResourceList:A.c,BackgroundFetchRegistration:A.c,BatteryManager:A.c,BroadcastChannel:A.c,CanvasCaptureMediaStreamTrack:A.c,EventSource:A.c,FileReader:A.c,Gyroscope:A.c,LinearAccelerationSensor:A.c,Magnetometer:A.c,MediaDevices:A.c,MediaKeySession:A.c,MediaQueryList:A.c,MediaRecorder:A.c,MediaSource:A.c,MediaStream:A.c,MediaStreamTrack:A.c,MessagePort:A.c,MIDIAccess:A.c,MIDIInput:A.c,MIDIOutput:A.c,MIDIPort:A.c,NetworkInformation:A.c,Notification:A.c,OffscreenCanvas:A.c,OrientationSensor:A.c,PaymentRequest:A.c,Performance:A.c,PermissionStatus:A.c,PresentationAvailability:A.c,PresentationConnection:A.c,PresentationConnectionList:A.c,PresentationRequest:A.c,RelativeOrientationSensor:A.c,RemotePlayback:A.c,RTCDataChannel:A.c,DataChannel:A.c,RTCDTMFSender:A.c,RTCPeerConnection:A.c,webkitRTCPeerConnection:A.c,mozRTCPeerConnection:A.c,ScreenOrientation:A.c,Sensor:A.c,ServiceWorker:A.c,ServiceWorkerContainer:A.c,ServiceWorkerRegistration:A.c,SharedWorker:A.c,SpeechRecognition:A.c,webkitSpeechRecognition:A.c,SpeechSynthesis:A.c,SpeechSynthesisUtterance:A.c,VR:A.c,VRDevice:A.c,VRDisplay:A.c,VRSession:A.c,VisualViewport:A.c,WebSocket:A.c,Worker:A.c,WorkerPerformance:A.c,BluetoothDevice:A.c,BluetoothRemoteGATTCharacteristic:A.c,Clipboard:A.c,MojoInterfaceInterceptor:A.c,USB:A.c,IDBDatabase:A.c,IDBOpenDBRequest:A.c,IDBVersionChangeRequest:A.c,IDBRequest:A.c,IDBTransaction:A.c,AnalyserNode:A.c,RealtimeAnalyserNode:A.c,AudioBufferSourceNode:A.c,AudioDestinationNode:A.c,AudioNode:A.c,AudioScheduledSourceNode:A.c,AudioWorkletNode:A.c,BiquadFilterNode:A.c,ChannelMergerNode:A.c,AudioChannelMerger:A.c,ChannelSplitterNode:A.c,AudioChannelSplitter:A.c,ConstantSourceNode:A.c,ConvolverNode:A.c,DelayNode:A.c,DynamicsCompressorNode:A.c,GainNode:A.c,AudioGainNode:A.c,IIRFilterNode:A.c,MediaElementAudioSourceNode:A.c,MediaStreamAudioDestinationNode:A.c,MediaStreamAudioSourceNode:A.c,OscillatorNode:A.c,Oscillator:A.c,PannerNode:A.c,AudioPannerNode:A.c,webkitAudioPannerNode:A.c,ScriptProcessorNode:A.c,JavaScriptAudioNode:A.c,StereoPannerNode:A.c,WaveShaperNode:A.c,EventTarget:A.c,File:A.U,FileList:A.dA,FileWriter:A.dB,FontFace:A.bz,FontFaceSet:A.bA,HTMLFormElement:A.dC,Gamepad:A.a_,History:A.h7,HTMLCollection:A.bb,HTMLFormControlsCollection:A.bb,HTMLOptionsCollection:A.bb,XMLHttpRequest:A.ah,XMLHttpRequestUpload:A.bc,XMLHttpRequestEventTarget:A.bc,ImageData:A.c6,HTMLImageElement:A.dG,IntersectionObserver:A.bd,IntersectionObserverEntry:A.hb,Location:A.hi,HTMLAudioElement:A.bm,HTMLMediaElement:A.bm,MediaList:A.hn,MIDIInputMap:A.dS,MIDIOutputMap:A.dT,MimeType:A.a1,MimeTypeArray:A.dU,DocumentFragment:A.q,ShadowRoot:A.q,Attr:A.q,DocumentType:A.q,Node:A.q,NodeList:A.cl,RadioNodeList:A.cl,Plugin:A.a2,PluginArray:A.e7,ProgressEvent:A.ai,ResourceProgressEvent:A.ai,RTCStatsReport:A.ec,HTMLSelectElement:A.ef,SourceBuffer:A.W,SourceBufferList:A.eh,SpeechGrammar:A.a3,SpeechGrammarList:A.ei,SpeechRecognitionResult:A.a4,Storage:A.ek,CSSStyleSheet:A.R,StyleSheet:A.R,TextTrack:A.Y,TextTrackCue:A.O,VTTCue:A.O,TextTrackCueList:A.en,TextTrackList:A.eo,TimeRanges:A.hO,Touch:A.a5,TouchList:A.eq,TrackDefaultList:A.hP,URL:A.hT,HTMLVideoElement:A.ez,VideoTrackList:A.eA,Window:A.aX,DOMWindow:A.aX,DedicatedWorkerGlobalScope:A.ar,ServiceWorkerGlobalScope:A.ar,SharedWorkerGlobalScope:A.ar,WorkerGlobalScope:A.ar,CSSRuleList:A.eF,ClientRect:A.cI,DOMRect:A.cI,GamepadList:A.eR,NamedNodeMap:A.cR,MozNamedAttrMap:A.cR,SpeechRecognitionResultList:A.fb,StyleSheetList:A.fh,IDBKeyRange:A.ca,SVGLength:A.a9,SVGLengthList:A.dN,SVGNumber:A.ab,SVGNumberList:A.e3,SVGPointList:A.ht,SVGStringList:A.el,SVGTransform:A.ad,SVGTransformList:A.es,AudioBuffer:A.fL,AudioParamMap:A.dl,AudioTrackList:A.dm,AudioContext:A.aO,webkitAudioContext:A.aO,BaseAudioContext:A.aO,OfflineAudioContext:A.e4,WebGLBuffer:A.dn,WebGLContextEvent:A.bv,WebGLFramebuffer:A.dE,WebGLProgram:A.e9,WebGLRenderbuffer:A.eb,WebGLRenderingContext:A.cr,WebGL2RenderingContext:A.bE,WebGLShader:A.eg,WebGLTexture:A.ep,WebGLUniformLocation:A.et})
hunkHelpers.setOrUpdateLeafTags({WebGL:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,webkitFileSystemDirectoryEntry:true,FileSystemDirectoryEntry:true,DirectoryReader:true,WebKitDirectoryReader:true,webkitFileSystemDirectoryReader:true,FileSystemDirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,webkitFileSystemEntry:true,FileSystemEntry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,webkitFileSystemFileEntry:true,FileSystemFileEntry:true,DOMFileSystem:true,WebKitFileSystem:true,webkitFileSystem:true,FileSystem:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,GeolocationPosition:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,GeolocationPositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL2RenderingContextBase:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,BeforeUnloadEvent:true,Blob:false,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,DeviceOrientationEvent:true,HTMLDivElement:true,Document:true,HTMLDocument:true,XMLDocument:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,MathMLElement:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CompositionEvent:true,CustomEvent:true,DeviceMotionEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FocusEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,KeyboardEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MouseEvent:true,DragEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PointerEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TextEvent:true,TouchEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,UIEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,WheelEvent:true,MojoInterfaceRequestEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,Event:false,InputEvent:false,SubmitEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,EventSource:true,FileReader:true,Gyroscope:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerRegistration:true,SharedWorker:true,SpeechRecognition:true,webkitSpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,FontFace:true,FontFaceSet:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,XMLHttpRequest:true,XMLHttpRequestUpload:true,XMLHttpRequestEventTarget:false,ImageData:true,HTMLImageElement:true,IntersectionObserver:true,IntersectionObserverEntry:true,Location:true,HTMLAudioElement:true,HTMLMediaElement:false,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,DocumentFragment:true,ShadowRoot:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,ProgressEvent:true,ResourceProgressEvent:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchList:true,TrackDefaultList:true,URL:true,HTMLVideoElement:true,VideoTrackList:true,Window:true,DOMWindow:true,DedicatedWorkerGlobalScope:true,ServiceWorkerGlobalScope:true,SharedWorkerGlobalScope:true,WorkerGlobalScope:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,IDBKeyRange:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLContextEvent:true,WebGLFramebuffer:true,WebGLProgram:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true})
A.bD.$nativeSuperclassTag="ArrayBufferView"
A.cS.$nativeSuperclassTag="ArrayBufferView"
A.cT.$nativeSuperclassTag="ArrayBufferView"
A.cg.$nativeSuperclassTag="ArrayBufferView"
A.cU.$nativeSuperclassTag="ArrayBufferView"
A.cV.$nativeSuperclassTag="ArrayBufferView"
A.ch.$nativeSuperclassTag="ArrayBufferView"
A.cX.$nativeSuperclassTag="EventTarget"
A.cY.$nativeSuperclassTag="EventTarget"
A.d_.$nativeSuperclassTag="EventTarget"
A.d0.$nativeSuperclassTag="EventTarget"})()
Function.prototype.$2=function(a,b){return this(a,b)}
Function.prototype.$1=function(a){return this(a)}
Function.prototype.$0=function(){return this()}
Function.prototype.$3=function(a,b,c){return this(a,b,c)}
Function.prototype.$4=function(a,b,c,d){return this(a,b,c,d)}
Function.prototype.$1$1=function(a){return this(a)}
Function.prototype.$6=function(a,b,c,d,e,f){return this(a,b,c,d,e,f)}
Function.prototype.$9=function(a,b,c,d,e,f,g,h,i){return this(a,b,c,d,e,f,g,h,i)}
Function.prototype.$5=function(a,b,c,d,e){return this(a,b,c,d,e)}
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q)s[q].removeEventListener("load",onLoad,false)
a(b.target)}for(var r=0;r<s.length;++r)s[r].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
var s=A.nM
if(typeof dartMainRunner==="function")dartMainRunner(s,[])
else s([])})})()