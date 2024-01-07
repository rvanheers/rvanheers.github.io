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
a[c]=function(){a[c]=function(){A.ps(b)}
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
if(a[b]!==s)A.pu(b)
a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s)convertToFastObject(a[s])}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.kj(b)
return new s(c,this)}:function(){if(s===null)s=A.kj(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.kj(a).prototype
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
km(a,b,c,d){return{i:a,p:b,e:c,x:d}},
h4(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.kk==null){A.p9()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw A.b(A.k3("Return interceptor for "+A.m(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.iZ
if(o==null)o=$.iZ=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=A.pg(a)
if(p!=null)return p
if(typeof a=="function")return B.U
s=Object.getPrototypeOf(a)
if(s==null)return B.v
if(s===Object.prototype)return B.v
if(typeof q=="function"){o=$.iZ
if(o==null)o=$.iZ=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:B.i,enumerable:false,writable:true,configurable:true})
return B.i}return B.i},
n7(a,b){if(a<0||a>4294967295)throw A.b(A.la(a,0,4294967295,"length",null))
return J.kX(A.q(new Array(a),b.h("z<0>")),b)},
kW(a,b){if(a<0)throw A.b(A.aV("Length must be a non-negative integer: "+a,null))
return A.q(new Array(a),b.h("z<0>"))},
kX(a,b){a.fixed$length=Array
return a},
bc(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cC.prototype
return J.e9.prototype}if(typeof a=="string")return J.bh.prototype
if(a==null)return J.cD.prototype
if(typeof a=="boolean")return J.e7.prototype
if(Array.isArray(a))return J.z.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aK.prototype
if(typeof a=="symbol")return J.bG.prototype
if(typeof a=="bigint")return J.bF.prototype
return a}if(a instanceof A.v)return a
return J.h4(a)},
p3(a){if(typeof a=="number")return J.bE.prototype
if(typeof a=="string")return J.bh.prototype
if(a==null)return a
if(Array.isArray(a))return J.z.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aK.prototype
if(typeof a=="symbol")return J.bG.prototype
if(typeof a=="bigint")return J.bF.prototype
return a}if(a instanceof A.v)return a
return J.h4(a)},
aH(a){if(typeof a=="string")return J.bh.prototype
if(a==null)return a
if(Array.isArray(a))return J.z.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aK.prototype
if(typeof a=="symbol")return J.bG.prototype
if(typeof a=="bigint")return J.bF.prototype
return a}if(a instanceof A.v)return a
return J.h4(a)},
cl(a){if(a==null)return a
if(Array.isArray(a))return J.z.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aK.prototype
if(typeof a=="symbol")return J.bG.prototype
if(typeof a=="bigint")return J.bF.prototype
return a}if(a instanceof A.v)return a
return J.h4(a)},
p4(a){if(typeof a=="number")return J.bE.prototype
if(typeof a=="string")return J.bh.prototype
if(a==null)return a
if(!(a instanceof A.v))return J.bO.prototype
return a},
cm(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aK.prototype
if(typeof a=="symbol")return J.bG.prototype
if(typeof a=="bigint")return J.bF.prototype
return a}if(a instanceof A.v)return a
return J.h4(a)},
p5(a){if(a==null)return a
if(!(a instanceof A.v))return J.bO.prototype
return a},
mz(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.p3(a).t(a,b)},
ha(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.bc(a).J(a,b)},
kx(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.p4(a).n(a,b)},
aj(a,b){if(typeof b==="number")if(Array.isArray(a)||typeof a=="string"||A.pc(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aH(a).j(a,b)},
mA(a,b,c){return J.cl(a).i(a,b,c)},
mB(a,b,c,d){return J.cm(a).cJ(a,b,c,d)},
mC(a,b,c,d){return J.cm(a).cU(a,b,c,d)},
mD(a){return J.cm(a).cV(a)},
mE(a,b){return J.cl(a).p(a,b)},
hb(a,b){return J.cl(a).q(a,b)},
mF(a){return J.p5(a).gdv(a)},
mG(a){return J.cl(a).gB(a)},
jN(a){return J.bc(a).gv(a)},
mH(a){return J.cm(a).gdg(a)},
aT(a){return J.cl(a).gH(a)},
dF(a){return J.aH(a).gl(a)},
mI(a){return J.bc(a).gF(a)},
ky(a,b,c){return J.cl(a).aw(a,b,c)},
mJ(a,b){return J.bc(a).bR(a,b)},
dG(a){return J.bc(a).m(a)},
c0:function c0(){},
e7:function e7(){},
cD:function cD(){},
a:function a(){},
bI:function bI(){},
ew:function ew(){},
bO:function bO(){},
aK:function aK(){},
bF:function bF(){},
bG:function bG(){},
z:function z(a){this.$ti=a},
hH:function hH(a){this.$ti=a},
bu:function bu(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bE:function bE(){},
cC:function cC(){},
e9:function e9(){},
bh:function bh(){}},A={jW:function jW(){},
cZ(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
li(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
nx(a,b,c){return A.li(A.cZ(A.cZ(c,a),b))},
dA(a,b,c){return a},
kl(a){var s,r
for(s=$.ai.length,r=0;r<s;++r)if(a===$.ai[r])return!0
return!1},
l_(a,b,c,d){if(t.gw.b(a))return new A.cy(a,b,c.h("@<0>").u(d).h("cy<1,2>"))
return new A.bK(a,b,c.h("@<0>").u(d).h("bK<1,2>"))},
kU(){return new A.bN("No element")},
cH:function cH(a){this.a=a},
jx:function jx(){},
ia:function ia(){},
k:function k(){},
an:function an(){},
bJ:function bJ(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bK:function bK(a,b,c){this.a=a
this.b=b
this.$ti=c},
cy:function cy(a,b,c){this.a=a
this.b=b
this.$ti=c},
aB:function aB(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
b4:function b4(a,b,c){this.a=a
this.b=b
this.$ti=c},
X:function X(){},
c8:function c8(a){this.a=a},
mf(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
pc(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.aU.b(a)},
m(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.dG(a)
return s},
cT(a){var s,r=$.l7
if(r==null)r=$.l7=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
i4(a){return A.ng(a)},
ng(a){var s,r,q,p
if(a instanceof A.v)return A.a8(A.aw(a),null)
s=J.bc(a)
if(s===B.T||s===B.V||t.ak.b(a)){r=B.m(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.a8(A.aw(a),null)},
np(a){if(typeof a=="number"||A.ci(a))return J.dG(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.bg)return a.m(0)
return"Instance of '"+A.i4(a)+"'"},
a4(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
no(a){return a.b?A.a4(a).getUTCFullYear()+0:A.a4(a).getFullYear()+0},
nm(a){return a.b?A.a4(a).getUTCMonth()+1:A.a4(a).getMonth()+1},
ni(a){return a.b?A.a4(a).getUTCDate()+0:A.a4(a).getDate()+0},
nj(a){return a.b?A.a4(a).getUTCHours()+0:A.a4(a).getHours()+0},
nl(a){return a.b?A.a4(a).getUTCMinutes()+0:A.a4(a).getMinutes()+0},
nn(a){return a.b?A.a4(a).getUTCSeconds()+0:A.a4(a).getSeconds()+0},
nk(a){return a.b?A.a4(a).getUTCMilliseconds()+0:A.a4(a).getMilliseconds()+0},
bj(a,b,c){var s,r,q={}
q.a=0
s=[]
r=[]
q.a=b.length
B.a.R(s,b)
q.b=""
if(c!=null&&c.a!==0)c.q(0,new A.i3(q,r,s))
return J.mJ(a,new A.e8(B.a6,0,s,r,0))},
nh(a,b,c){var s,r,q
if(Array.isArray(b))s=c==null||c.a===0
else s=!1
if(s){r=b.length
if(r===0){if(!!a.$0)return a.$0()}else if(r===1){if(!!a.$1)return a.$1(b[0])}else if(r===2){if(!!a.$2)return a.$2(b[0],b[1])}else if(r===3){if(!!a.$3)return a.$3(b[0],b[1],b[2])}else if(r===4){if(!!a.$4)return a.$4(b[0],b[1],b[2],b[3])}else if(r===5)if(!!a.$5)return a.$5(b[0],b[1],b[2],b[3],b[4])
q=a[""+"$"+r]
if(q!=null)return q.apply(a,b)}return A.nf(a,b,c)},
nf(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g=Array.isArray(b)?b:A.ee(b,t.z),f=g.length,e=a.$R
if(f<e)return A.bj(a,g,c)
s=a.$D
r=s==null
q=!r?s():null
p=J.bc(a)
o=p.$C
if(typeof o=="string")o=p[o]
if(r){if(c!=null&&c.a!==0)return A.bj(a,g,c)
if(f===e)return o.apply(a,g)
return A.bj(a,g,c)}if(Array.isArray(q)){if(c!=null&&c.a!==0)return A.bj(a,g,c)
n=e+q.length
if(f>n)return A.bj(a,g,null)
if(f<n){m=q.slice(f-e)
if(g===b)g=A.ee(g,t.z)
B.a.R(g,m)}return o.apply(a,g)}else{if(f>e)return A.bj(a,g,c)
if(g===b)g=A.ee(g,t.z)
l=Object.keys(q)
if(c==null)for(r=l.length,k=0;k<l.length;l.length===r||(0,A.V)(l),++k){j=q[A.I(l[k])]
if(B.o===j)return A.bj(a,g,c)
B.a.k(g,j)}else{for(r=l.length,i=0,k=0;k<l.length;l.length===r||(0,A.V)(l),++k){h=A.I(l[k])
if(c.a6(0,h)){++i
B.a.k(g,c.j(0,h))}else{j=q[h]
if(B.o===j)return A.bj(a,g,c)
B.a.k(g,j)}}if(i!==c.a)return A.bj(a,g,c)}return o.apply(a,g)}},
av(a){throw A.b(A.m3(a))},
d(a,b){if(a==null)J.dF(a)
throw A.b(A.h3(a,b))},
h3(a,b){var s,r="index"
if(!A.h0(b))return new A.aU(!0,b,r,null)
s=A.r(J.dF(a))
if(b<0||b>=s)return A.S(b,s,a,r)
return A.lb(b,r)},
m3(a){return new A.aU(!0,a,null,null)},
b(a){return A.m9(new Error(),a)},
m9(a,b){var s
if(b==null)b=new A.b7()
a.dartException=b
s=A.pv
if("defineProperty" in Object){Object.defineProperty(a,"message",{get:s})
a.name=""}else a.toString=s
return a},
pv(){return J.dG(this.dartException)},
bt(a){throw A.b(a)},
pt(a,b){throw A.m9(b,a)},
V(a){throw A.b(A.a1(a))},
b8(a){var s,r,q,p,o,n
a=A.pr(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.q([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.iq(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
ir(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
lm(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
jX(a,b){var s=b==null,r=s?null:b.method
return new A.ea(a,r,s?null:b.receiver)},
aS(a){if(a==null)return new A.i0(a)
if(typeof a!=="object")return a
if("dartException" in a)return A.bV(a,a.dartException)
return A.oQ(a)},
bV(a,b){if(t.e.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
oQ(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.f.bC(r,16)&8191)===10)switch(q){case 438:return A.bV(a,A.jX(A.m(s)+" (Error "+q+")",null))
case 445:case 5007:A.m(s)
return A.bV(a,new A.cS())}}if(a instanceof TypeError){p=$.mg()
o=$.mh()
n=$.mi()
m=$.mj()
l=$.mm()
k=$.mn()
j=$.ml()
$.mk()
i=$.mp()
h=$.mo()
g=p.M(s)
if(g!=null)return A.bV(a,A.jX(A.I(s),g))
else{g=o.M(s)
if(g!=null){g.method="call"
return A.bV(a,A.jX(A.I(s),g))}else if(n.M(s)!=null||m.M(s)!=null||l.M(s)!=null||k.M(s)!=null||j.M(s)!=null||m.M(s)!=null||i.M(s)!=null||h.M(s)!=null){A.I(s)
return A.bV(a,new A.cS())}}return A.bV(a,new A.eW(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.cW()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.bV(a,new A.aU(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.cW()
return a},
bd(a){var s
if(a==null)return new A.dm(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.dm(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
jy(a){if(a==null)return J.jN(a)
if(typeof a=="object")return A.cT(a)
return J.jN(a)},
p2(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.i(0,a[s],a[r])}return b},
on(a,b,c,d,e,f){t.Z.a(a)
switch(A.r(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.b(A.dX("Unsupported number of arguments for wrapped closure"))},
aR(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=A.p_(a,b)
a.$identity=s
return s},
p_(a,b){var s
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
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.on)},
mR(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.eJ().constructor.prototype):Object.create(new A.bX(null,null).constructor.prototype)
s.$initialize=s.constructor
if(h)r=function static_tear_off(){this.$initialize()}
else r=function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.kG(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.mN(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.kG(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
mN(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.b("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.mK)}throw A.b("Error in functionType of tearoff")},
mO(a,b,c,d){var s=A.kE
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
kG(a,b,c,d){var s,r
if(c)return A.mQ(a,b,d)
s=b.length
r=A.mO(s,d,a,b)
return r},
mP(a,b,c,d){var s=A.kE,r=A.mL
switch(b?-1:a){case 0:throw A.b(new A.eD("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
mQ(a,b,c){var s,r
if($.kC==null)$.kC=A.kB("interceptor")
if($.kD==null)$.kD=A.kB("receiver")
s=b.length
r=A.mP(s,c,a,b)
return r},
kj(a){return A.mR(a)},
mK(a,b){return A.j6(v.typeUniverse,A.aw(a.a),b)},
kE(a){return a.a},
mL(a){return a.b},
kB(a){var s,r,q,p=new A.bX("receiver","interceptor"),o=J.kX(Object.getOwnPropertyNames(p),t.X)
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw A.b(A.aV("Field name "+a+" not found.",null))},
oZ(a){if(a==null)A.oS("boolean expression must not be null")
return a},
oS(a){throw A.b(new A.f3(a))},
ps(a){throw A.b(new A.f8(a))},
m7(a){return v.getIsolateTag(a)},
qI(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
pg(a){var s,r,q,p,o,n=A.I($.m8.$1(a)),m=$.jl[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.jp[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.o6($.m2.$2(a,n))
if(q!=null){m=$.jl[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.jp[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.jw(s)
$.jl[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.jp[n]=s
return s}if(p==="-"){o=A.jw(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.mc(a,s)
if(p==="*")throw A.b(A.k3(n))
if(v.leafTags[n]===true){o=A.jw(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.mc(a,s)},
mc(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.km(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
jw(a){return J.km(a,!1,null,!!a.$iu)},
pi(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.jw(s)
else return J.km(s,c,null,null)},
p9(){if(!0===$.kk)return
$.kk=!0
A.pa()},
pa(){var s,r,q,p,o,n,m,l
$.jl=Object.create(null)
$.jp=Object.create(null)
A.p8()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.me.$1(o)
if(n!=null){m=A.pi(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
p8(){var s,r,q,p,o,n,m=B.H()
m=A.ck(B.I,A.ck(B.J,A.ck(B.n,A.ck(B.n,A.ck(B.K,A.ck(B.L,A.ck(B.M(B.m),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.m8=new A.jm(p)
$.m2=new A.jn(o)
$.me=new A.jo(n)},
ck(a,b){return a(b)||b},
p0(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
pr(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
cs:function cs(a,b){this.a=a
this.$ti=b},
cr:function cr(){},
ct:function ct(a,b,c){this.a=a
this.b=b
this.$ti=c},
dc:function dc(a,b){this.a=a
this.$ti=b},
dd:function dd(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
e8:function e8(a,b,c,d,e){var _=this
_.a=a
_.c=b
_.d=c
_.e=d
_.f=e},
i3:function i3(a,b,c){this.a=a
this.b=b
this.c=c},
iq:function iq(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
cS:function cS(){},
ea:function ea(a,b,c){this.a=a
this.b=b
this.c=c},
eW:function eW(a){this.a=a},
i0:function i0(a){this.a=a},
dm:function dm(a){this.a=a
this.b=null},
bg:function bg(){},
dO:function dO(){},
dP:function dP(){},
eM:function eM(){},
eJ:function eJ(){},
bX:function bX(a,b){this.a=a
this.b=b},
f8:function f8(a){this.a=a},
eD:function eD(a){this.a=a},
f3:function f3(a){this.a=a},
j0:function j0(){},
b1:function b1(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
hI:function hI(a){this.a=a},
hO:function hO(a,b){this.a=a
this.b=b
this.c=null},
aA:function aA(a,b){this.a=a
this.$ti=b},
cI:function cI(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
jm:function jm(a){this.a=a},
jn:function jn(a){this.a=a},
jo:function jo(a){this.a=a},
pu(a){A.pt(new A.cH("Field '"+a+"' has been assigned during initialization."),new Error())},
lu(a){var s=new A.iH(a)
return s.b=s},
iH:function iH(a){this.a=a
this.b=null},
lM(a){return a},
ja(a,b,c){},
bS(a){return a},
na(a,b,c){A.ja(a,b,c)
return c==null?new Uint8Array(a,b):new Uint8Array(a,b,c)},
ba(a,b,c){if(a>>>0!==a||a>=c)throw A.b(A.h3(b,a))},
ek:function ek(){},
cO:function cO(){},
el:function el(){},
c3:function c3(){},
cM:function cM(){},
cN:function cN(){},
cL:function cL(){},
em:function em(){},
en:function en(){},
eo:function eo(){},
ep:function ep(){},
cP:function cP(){},
eq:function eq(){},
cQ:function cQ(){},
er:function er(){},
df:function df(){},
dg:function dg(){},
dh:function dh(){},
di:function di(){},
ld(a,b){var s=b.c
return s==null?b.c=A.k9(a,b.y,!0):s},
jZ(a,b){var s=b.c
return s==null?b.c=A.ds(a,"ay",[b.y]):s},
nw(a){var s=a.d
if(s!=null)return s
return a.d=new Map()},
le(a){var s=a.x
if(s===6||s===7||s===8)return A.le(a.y)
return s===12||s===13},
nv(a){return a.at},
T(a){return A.fQ(v.typeUniverse,a,!1)},
br(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.x
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.y
r=A.br(a,s,a0,a1)
if(r===s)return b
return A.lH(a,r,!0)
case 7:s=b.y
r=A.br(a,s,a0,a1)
if(r===s)return b
return A.k9(a,r,!0)
case 8:s=b.y
r=A.br(a,s,a0,a1)
if(r===s)return b
return A.lG(a,r,!0)
case 9:q=b.z
p=A.dz(a,q,a0,a1)
if(p===q)return b
return A.ds(a,b.y,p)
case 10:o=b.y
n=A.br(a,o,a0,a1)
m=b.z
l=A.dz(a,m,a0,a1)
if(n===o&&l===m)return b
return A.k7(a,n,l)
case 12:k=b.y
j=A.br(a,k,a0,a1)
i=b.z
h=A.oM(a,i,a0,a1)
if(j===k&&h===i)return b
return A.lF(a,j,h)
case 13:g=b.z
a1+=g.length
f=A.dz(a,g,a0,a1)
o=b.y
n=A.br(a,o,a0,a1)
if(f===g&&n===o)return b
return A.k8(a,n,f,!0)
case 14:e=b.y
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw A.b(A.dJ("Attempted to substitute unexpected RTI kind "+c))}},
dz(a,b,c,d){var s,r,q,p,o=b.length,n=A.j7(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.br(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
oN(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.j7(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.br(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
oM(a,b,c,d){var s,r=b.a,q=A.dz(a,r,c,d),p=b.b,o=A.dz(a,p,c,d),n=b.c,m=A.oN(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.fi()
s.a=q
s.b=o
s.c=m
return s},
q(a,b){a[v.arrayRti]=b
return a},
m5(a){var s,r=a.$S
if(r!=null){if(typeof r=="number")return A.p7(r)
s=a.$S()
return s}return null},
pb(a,b){var s
if(A.le(b))if(a instanceof A.bg){s=A.m5(a)
if(s!=null)return s}return A.aw(a)},
aw(a){if(a instanceof A.v)return A.x(a)
if(Array.isArray(a))return A.aQ(a)
return A.ke(J.bc(a))},
aQ(a){var s=a[v.arrayRti],r=t.b
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
x(a){var s=a.$ti
return s!=null?s:A.ke(a)},
ke(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.om(a,s)},
om(a,b){var s=a instanceof A.bg?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.o2(v.typeUniverse,s.name)
b.$ccache=r
return r},
p7(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.fQ(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
p6(a){return A.bU(A.x(a))},
oL(a){var s=a instanceof A.bg?A.m5(a):null
if(s!=null)return s
if(t.dm.b(a))return J.mI(a).a
if(Array.isArray(a))return A.aQ(a)
return A.aw(a)},
bU(a){var s=a.w
return s==null?a.w=A.lQ(a):s},
lQ(a){var s,r,q=a.at,p=q.replace(/\*/g,"")
if(p===q)return a.w=new A.j5(a)
s=A.fQ(v.typeUniverse,p,!0)
r=s.w
return r==null?s.w=A.lQ(s):r},
aI(a){return A.bU(A.fQ(v.typeUniverse,a,!1))},
ol(a){var s,r,q,p,o,n,m=this
if(m===t.K)return A.bb(m,a,A.os)
if(!A.be(m))if(!(m===t._))s=!1
else s=!0
else s=!0
if(s)return A.bb(m,a,A.ow)
s=m.x
if(s===7)return A.bb(m,a,A.oj)
if(s===1)return A.bb(m,a,A.lW)
r=s===6?m.y:m
q=r.x
if(q===8)return A.bb(m,a,A.oo)
if(r===t.S)p=A.h0
else if(r===t.i||r===t.H)p=A.or
else if(r===t.N)p=A.ou
else p=r===t.y?A.ci:null
if(p!=null)return A.bb(m,a,p)
if(q===9){o=r.y
if(r.z.every(A.pe)){m.r="$i"+o
if(o==="l")return A.bb(m,a,A.oq)
return A.bb(m,a,A.ov)}}else if(q===11){n=A.p0(r.y,r.z)
return A.bb(m,a,n==null?A.lW:n)}return A.bb(m,a,A.oh)},
bb(a,b,c){a.b=c
return a.b(b)},
ok(a){var s,r=this,q=A.og
if(!A.be(r))if(!(r===t._))s=!1
else s=!0
else s=!0
if(s)q=A.o7
else if(r===t.K)q=A.o5
else{s=A.dB(r)
if(s)q=A.oi}r.a=q
return r.a(a)},
h1(a){var s,r=a.x
if(!A.be(a))if(!(a===t._))if(!(a===t.aw))if(r!==7)if(!(r===6&&A.h1(a.y)))s=r===8&&A.h1(a.y)||a===t.P||a===t.T
else s=!0
else s=!0
else s=!0
else s=!0
else s=!0
return s},
oh(a){var s=this
if(a==null)return A.h1(s)
return A.pd(v.typeUniverse,A.pb(a,s),s)},
oj(a){if(a==null)return!0
return this.y.b(a)},
ov(a){var s,r=this
if(a==null)return A.h1(r)
s=r.r
if(a instanceof A.v)return!!a[s]
return!!J.bc(a)[s]},
oq(a){var s,r=this
if(a==null)return A.h1(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.r
if(a instanceof A.v)return!!a[s]
return!!J.bc(a)[s]},
og(a){var s,r=this
if(a==null){s=A.dB(r)
if(s)return a}else if(r.b(a))return a
A.lR(a,r)},
oi(a){var s=this
if(a==null)return a
else if(s.b(a))return a
A.lR(a,s)},
lR(a,b){throw A.b(A.nS(A.lv(a,A.a8(b,null))))},
lv(a,b){return A.by(a)+": type '"+A.a8(A.oL(a),null)+"' is not a subtype of type '"+b+"'"},
nS(a){return new A.dq("TypeError: "+a)},
a0(a,b){return new A.dq("TypeError: "+A.lv(a,b))},
oo(a){var s=this,r=s.x===6?s.y:s
return r.y.b(a)||A.jZ(v.typeUniverse,r).b(a)},
os(a){return a!=null},
o5(a){if(a!=null)return a
throw A.b(A.a0(a,"Object"))},
ow(a){return!0},
o7(a){return a},
lW(a){return!1},
ci(a){return!0===a||!1===a},
ka(a){if(!0===a)return!0
if(!1===a)return!1
throw A.b(A.a0(a,"bool"))},
qb(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.b(A.a0(a,"bool"))},
qa(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.b(A.a0(a,"bool?"))},
dw(a){if(typeof a=="number")return a
throw A.b(A.a0(a,"double"))},
qd(a){if(typeof a=="number")return a
if(a==null)return a
throw A.b(A.a0(a,"double"))},
qc(a){if(typeof a=="number")return a
if(a==null)return a
throw A.b(A.a0(a,"double?"))},
h0(a){return typeof a=="number"&&Math.floor(a)===a},
r(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.b(A.a0(a,"int"))},
qe(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.b(A.a0(a,"int"))},
lK(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.b(A.a0(a,"int?"))},
or(a){return typeof a=="number"},
lL(a){if(typeof a=="number")return a
throw A.b(A.a0(a,"num"))},
qf(a){if(typeof a=="number")return a
if(a==null)return a
throw A.b(A.a0(a,"num"))},
o4(a){if(typeof a=="number")return a
if(a==null)return a
throw A.b(A.a0(a,"num?"))},
ou(a){return typeof a=="string"},
I(a){if(typeof a=="string")return a
throw A.b(A.a0(a,"String"))},
qg(a){if(typeof a=="string")return a
if(a==null)return a
throw A.b(A.a0(a,"String"))},
o6(a){if(typeof a=="string")return a
if(a==null)return a
throw A.b(A.a0(a,"String?"))},
lZ(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.a8(a[q],b)
return s},
oE(a,b){var s,r,q,p,o,n,m=a.y,l=a.z
if(""===m)return"("+A.lZ(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.a8(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
lS(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=", "
if(a6!=null){s=a6.length
if(a5==null){a5=A.q([],t.s)
r=null}else r=a5.length
q=a5.length
for(p=s;p>0;--p)B.a.k(a5,"T"+(q+p))
for(o=t.X,n=t._,m="<",l="",p=0;p<s;++p,l=a3){k=a5.length
j=k-1-p
if(!(j>=0))return A.d(a5,j)
m=B.p.t(m+l,a5[j])
i=a6[p]
h=i.x
if(!(h===2||h===3||h===4||h===5||i===o))if(!(i===n))k=!1
else k=!0
else k=!0
if(!k)m+=" extends "+A.a8(i,a5)}m+=">"}else{m=""
r=null}o=a4.y
g=a4.z
f=g.a
e=f.length
d=g.b
c=d.length
b=g.c
a=b.length
a0=A.a8(o,a5)
for(a1="",a2="",p=0;p<e;++p,a2=a3)a1+=a2+A.a8(f[p],a5)
if(c>0){a1+=a2+"["
for(a2="",p=0;p<c;++p,a2=a3)a1+=a2+A.a8(d[p],a5)
a1+="]"}if(a>0){a1+=a2+"{"
for(a2="",p=0;p<a;p+=3,a2=a3){a1+=a2
if(b[p+1])a1+="required "
a1+=A.a8(b[p+2],a5)+" "+b[p]}a1+="}"}if(r!=null){a5.toString
a5.length=r}return m+"("+a1+") => "+a0},
a8(a,b){var s,r,q,p,o,n,m,l=a.x
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=A.a8(a.y,b)
return s}if(l===7){r=a.y
s=A.a8(r,b)
q=r.x
return(q===12||q===13?"("+s+")":s)+"?"}if(l===8)return"FutureOr<"+A.a8(a.y,b)+">"
if(l===9){p=A.oP(a.y)
o=a.z
return o.length>0?p+("<"+A.lZ(o,b)+">"):p}if(l===11)return A.oE(a,b)
if(l===12)return A.lS(a,b,null)
if(l===13)return A.lS(a.y,b,a.z)
if(l===14){n=a.y
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.d(b,n)
return b[n]}return"?"},
oP(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
o3(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
o2(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.fQ(a,b,!1)
else if(typeof m=="number"){s=m
r=A.dt(a,5,"#")
q=A.j7(s)
for(p=0;p<s;++p)q[p]=r
o=A.ds(a,b,q)
n[b]=o
return o}else return m},
o0(a,b){return A.lI(a.tR,b)},
o_(a,b){return A.lI(a.eT,b)},
fQ(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.lC(A.lA(a,null,b,c))
r.set(b,s)
return s},
j6(a,b,c){var s,r,q=b.Q
if(q==null)q=b.Q=new Map()
s=q.get(c)
if(s!=null)return s
r=A.lC(A.lA(a,b,c,!0))
q.set(c,r)
return r},
o1(a,b,c){var s,r,q,p=b.as
if(p==null)p=b.as=new Map()
s=c.at
r=p.get(s)
if(r!=null)return r
q=A.k7(a,b,c.x===10?c.z:[c])
p.set(s,q)
return q},
b9(a,b){b.a=A.ok
b.b=A.ol
return b},
dt(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.ar(null,null)
s.x=b
s.at=c
r=A.b9(a,s)
a.eC.set(c,r)
return r},
lH(a,b,c){var s,r=b.at+"*",q=a.eC.get(r)
if(q!=null)return q
s=A.nX(a,b,r,c)
a.eC.set(r,s)
return s},
nX(a,b,c,d){var s,r,q
if(d){s=b.x
if(!A.be(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new A.ar(null,null)
q.x=6
q.y=b
q.at=c
return A.b9(a,q)},
k9(a,b,c){var s,r=b.at+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.nW(a,b,r,c)
a.eC.set(r,s)
return s},
nW(a,b,c,d){var s,r,q,p
if(d){s=b.x
if(!A.be(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&A.dB(b.y)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.aw)return t.P
else if(s===6){q=b.y
if(q.x===8&&A.dB(q.y))return q
else return A.ld(a,b)}}p=new A.ar(null,null)
p.x=7
p.y=b
p.at=c
return A.b9(a,p)},
lG(a,b,c){var s,r=b.at+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.nU(a,b,r,c)
a.eC.set(r,s)
return s},
nU(a,b,c,d){var s,r,q
if(d){s=b.x
if(!A.be(b))if(!(b===t._))r=!1
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return A.ds(a,"ay",[b])
else if(b===t.P||b===t.T)return t.eH}q=new A.ar(null,null)
q.x=8
q.y=b
q.at=c
return A.b9(a,q)},
nY(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.ar(null,null)
s.x=14
s.y=b
s.at=q
r=A.b9(a,s)
a.eC.set(q,r)
return r},
dr(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].at
return s},
nT(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].at}return s},
ds(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.dr(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.ar(null,null)
r.x=9
r.y=b
r.z=c
if(c.length>0)r.c=c[0]
r.at=p
q=A.b9(a,r)
a.eC.set(p,q)
return q},
k7(a,b,c){var s,r,q,p,o,n
if(b.x===10){s=b.y
r=b.z.concat(c)}else{r=c
s=b}q=s.at+(";<"+A.dr(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.ar(null,null)
o.x=10
o.y=s
o.z=r
o.at=q
n=A.b9(a,o)
a.eC.set(q,n)
return n},
nZ(a,b,c){var s,r,q="+"+(b+"("+A.dr(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.ar(null,null)
s.x=11
s.y=b
s.z=c
s.at=q
r=A.b9(a,s)
a.eC.set(q,r)
return r},
lF(a,b,c){var s,r,q,p,o,n=b.at,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.dr(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.dr(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.nT(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.ar(null,null)
p.x=12
p.y=b
p.z=c
p.at=r
o=A.b9(a,p)
a.eC.set(r,o)
return o},
k8(a,b,c,d){var s,r=b.at+("<"+A.dr(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.nV(a,b,c,r,d)
a.eC.set(r,s)
return s},
nV(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.j7(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.x===1){r[p]=o;++q}}if(q>0){n=A.br(a,b,r,0)
m=A.dz(a,c,r,0)
return A.k8(a,n,m,c!==m)}}l=new A.ar(null,null)
l.x=13
l.y=b
l.z=c
l.at=d
return A.b9(a,l)},
lA(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
lC(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.nM(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.lB(a,r,l,k,!1)
else if(q===46)r=A.lB(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.bq(a.u,a.e,k.pop()))
break
case 94:k.push(A.nY(a.u,k.pop()))
break
case 35:k.push(A.dt(a.u,5,"#"))
break
case 64:k.push(A.dt(a.u,2,"@"))
break
case 126:k.push(A.dt(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.nO(a,k)
break
case 38:A.nN(a,k)
break
case 42:p=a.u
k.push(A.lH(p,A.bq(p,a.e,k.pop()),a.n))
break
case 63:p=a.u
k.push(A.k9(p,A.bq(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.lG(p,A.bq(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.nL(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.lD(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.nQ(a.u,a.e,o)
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
return A.bq(a.u,a.e,m)},
nM(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
lB(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.x===10)o=o.y
n=A.o3(s,o.y)[p]
if(n==null)A.bt('No "'+p+'" in "'+A.nv(o)+'"')
d.push(A.j6(s,o,n))}else d.push(p)
return m},
nO(a,b){var s,r=a.u,q=A.lz(a,b),p=b.pop()
if(typeof p=="string")b.push(A.ds(r,p,q))
else{s=A.bq(r,a.e,p)
switch(s.x){case 12:b.push(A.k8(r,s,q,a.n))
break
default:b.push(A.k7(r,s,q))
break}}},
nL(a,b){var s,r,q,p,o,n=null,m=a.u,l=b.pop()
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
s=r}q=A.lz(a,b)
l=b.pop()
switch(l){case-3:l=b.pop()
if(s==null)s=m.sEA
if(r==null)r=m.sEA
p=A.bq(m,a.e,l)
o=new A.fi()
o.a=q
o.b=s
o.c=r
b.push(A.lF(m,p,o))
return
case-4:b.push(A.nZ(m,b.pop(),q))
return
default:throw A.b(A.dJ("Unexpected state under `()`: "+A.m(l)))}},
nN(a,b){var s=b.pop()
if(0===s){b.push(A.dt(a.u,1,"0&"))
return}if(1===s){b.push(A.dt(a.u,4,"1&"))
return}throw A.b(A.dJ("Unexpected extended operation "+A.m(s)))},
lz(a,b){var s=b.splice(a.p)
A.lD(a.u,a.e,s)
a.p=b.pop()
return s},
bq(a,b,c){if(typeof c=="string")return A.ds(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.nP(a,b,c)}else return c},
lD(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.bq(a,b,c[s])},
nQ(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.bq(a,b,c[s])},
nP(a,b,c){var s,r,q=b.x
if(q===10){if(c===0)return b.y
s=b.z
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.y
q=b.x}else if(c===0)return b
if(q!==9)throw A.b(A.dJ("Indexed base must be an interface type"))
s=b.z
if(c<=s.length)return s[c-1]
throw A.b(A.dJ("Bad index "+c+" for "+b.m(0)))},
pd(a,b,c){var s,r=A.nw(b),q=r.get(c)
if(q!=null)return q
s=A.R(a,b,null,c,null)
r.set(c,s)
return s},
R(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(!A.be(d))if(!(d===t._))s=!1
else s=!0
else s=!0
if(s)return!0
r=b.x
if(r===4)return!0
if(A.be(b))return!1
if(b.x!==1)s=!1
else s=!0
if(s)return!0
q=r===14
if(q)if(A.R(a,c[b.y],c,d,e))return!0
p=d.x
s=b===t.P||b===t.T
if(s){if(p===8)return A.R(a,b,c,d.y,e)
return d===t.P||d===t.T||p===7||p===6}if(d===t.K){if(r===8)return A.R(a,b.y,c,d,e)
if(r===6)return A.R(a,b.y,c,d,e)
return r!==7}if(r===6)return A.R(a,b.y,c,d,e)
if(p===6){s=A.ld(a,d)
return A.R(a,b,c,s,e)}if(r===8){if(!A.R(a,b.y,c,d,e))return!1
return A.R(a,A.jZ(a,b),c,d,e)}if(r===7){s=A.R(a,t.P,c,d,e)
return s&&A.R(a,b.y,c,d,e)}if(p===8){if(A.R(a,b,c,d.y,e))return!0
return A.R(a,b,c,A.jZ(a,d),e)}if(p===7){s=A.R(a,b,c,t.P,e)
return s||A.R(a,b,c,d.y,e)}if(q)return!1
s=r!==12
if((!s||r===13)&&d===t.Z)return!0
o=r===11
if(o&&d===t.gT)return!0
if(p===13){if(b===t.x)return!0
if(r!==13)return!1
n=b.z
m=d.z
l=n.length
if(l!==m.length)return!1
c=c==null?n:n.concat(c)
e=e==null?m:m.concat(e)
for(k=0;k<l;++k){j=n[k]
i=m[k]
if(!A.R(a,j,c,i,e)||!A.R(a,i,e,j,c))return!1}return A.lV(a,b.y,c,d.y,e)}if(p===12){if(b===t.x)return!0
if(s)return!1
return A.lV(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return A.op(a,b,c,d,e)}if(o&&p===11)return A.ot(a,b,c,d,e)
return!1},
lV(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!A.R(a3,a4.y,a5,a6.y,a7))return!1
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
if(!A.R(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.R(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.R(a3,k[h],a7,g,a5))return!1}f=s.c
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
if(!A.R(a3,e[a+2],a7,g,a5))return!1
break}}for(;b<d;){if(f[b+1])return!1
b+=3}return!0},
op(a,b,c,d,e){var s,r,q,p,o,n,m,l=b.y,k=d.y
for(;l!==k;){s=a.tR[l]
if(s==null)return!1
if(typeof s=="string"){l=s
continue}r=s[k]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.j6(a,b,r[o])
return A.lJ(a,p,null,c,d.z,e)}n=b.z
m=d.z
return A.lJ(a,n,null,c,m,e)},
lJ(a,b,c,d,e,f){var s,r,q,p=b.length
for(s=0;s<p;++s){r=b[s]
q=e[s]
if(!A.R(a,r,d,q,f))return!1}return!0},
ot(a,b,c,d,e){var s,r=b.z,q=d.z,p=r.length
if(p!==q.length)return!1
if(b.y!==d.y)return!1
for(s=0;s<p;++s)if(!A.R(a,r[s],c,q[s],e))return!1
return!0},
dB(a){var s,r=a.x
if(!(a===t.P||a===t.T))if(!A.be(a))if(r!==7)if(!(r===6&&A.dB(a.y)))s=r===8&&A.dB(a.y)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
pe(a){var s
if(!A.be(a))if(!(a===t._))s=!1
else s=!0
else s=!0
return s},
be(a){var s=a.x
return s===2||s===3||s===4||s===5||a===t.X},
lI(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
j7(a){return a>0?new Array(a):v.typeUniverse.sEA},
ar:function ar(a,b){var _=this
_.a=a
_.b=b
_.w=_.r=_.e=_.d=_.c=null
_.x=0
_.at=_.as=_.Q=_.z=_.y=null},
fi:function fi(){this.c=this.b=this.a=null},
j5:function j5(a){this.a=a},
ff:function ff(){},
dq:function dq(a){this.a=a},
nD(){var s,r,q={}
if(self.scheduleImmediate!=null)return A.oT()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(A.aR(new A.iD(q),1)).observe(s,{childList:true})
return new A.iC(q,s,r)}else if(self.setImmediate!=null)return A.oU()
return A.oV()},
nE(a){self.scheduleImmediate(A.aR(new A.iE(t.M.a(a)),0))},
nF(a){self.setImmediate(A.aR(new A.iF(t.M.a(a)),0))},
nG(a){t.M.a(a)
A.nR(0,a)},
nR(a,b){var s=new A.j3()
s.cs(a,b)
return s},
he(a,b){var s=A.dA(a,"error",t.K)
return new A.co(s,b==null?A.jO(a):b)},
jO(a){var s
if(t.e.b(a)){s=a.ga_()
if(s!=null)return s}return B.R},
mX(a,b){var s,r,q,p,o,n,m,l,k,j,i,h={},g=null,f=!1,e=b.h("K<l<0>>"),d=new A.K($.E,e)
h.a=null
h.b=0
s=A.lu("error")
r=A.lu("stackTrace")
q=new A.hz(h,g,f,d,s,r)
try{for(l=t.P,k=0,j=0;k<2;++k){p=a[k]
o=j
p.b2(new A.hy(h,o,d,g,f,s,r,b),q,l)
j=++h.b}if(j===0){l=d
l.ah(A.q([],b.h("z<0>")))
return l}h.a=A.ac(j,null,!1,b.h("0?"))}catch(i){n=A.aS(i)
m=A.bd(i)
if(h.b===0||A.oZ(f)){l=n
r=m
A.dA(l,"error",t.K)
$.E!==B.d
if(r==null)r=A.jO(l)
e=new A.K($.E,e)
e.bi(l,r)
return e}else{s.b=n
r.b=m}}return d},
lw(a,b){var s,r,q
for(s=t.c;r=a.a,(r&4)!==0;)a=s.a(a.c)
if((r&24)!==0){q=b.am()
b.ag(a)
A.cc(b,q)}else{q=t.F.a(b.c)
b.bB(a)
a.aS(q)}},
nJ(a,b){var s,r,q,p={},o=p.a=a
for(s=t.c;r=o.a,(r&4)!==0;o=a){a=s.a(o.c)
p.a=a}if((r&24)===0){q=t.F.a(b.c)
b.bB(o)
p.a.aS(q)
return}if((r&16)===0&&b.c==null){b.ag(o)
return}b.a^=2
A.bT(null,null,b.b,t.M.a(new A.iP(p,b)))},
cc(a,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c={},b=c.a=a
for(s=t.t,r=t.F,q=t.b9;!0;){p={}
o=b.a
n=(o&16)===0
m=!n
if(a0==null){if(m&&(o&1)===0){l=s.a(b.c)
A.h2(l.a,l.b)}return}p.a=a0
k=a0.a
for(b=a0;k!=null;b=k,k=j){b.a=null
A.cc(c.a,b)
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
A.h2(i.a,i.b)
return}f=$.E
if(f!==g)$.E=g
else f=null
b=b.c
if((b&15)===8)new A.iW(p,c,m).$0()
else if(n){if((b&1)!==0)new A.iV(p,i).$0()}else if((b&2)!==0)new A.iU(c,p).$0()
if(f!=null)$.E=f
b=p.c
if(b instanceof A.K){o=p.a.$ti
o=o.h("ay<2>").b(b)||!o.z[1].b(b)}else o=!1
if(o){q.a(b)
e=p.a.b
if((b.a&24)!==0){d=r.a(e.c)
e.c=null
a0=e.an(d)
e.a=b.a&30|e.a&1
e.c=b.c
c.a=b
continue}else A.lw(b,e)
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
oF(a,b){var s
if(t.C.b(a))return b.bT(a,t.z,t.K,t.l)
s=t.v
if(s.b(a))return s.a(a)
throw A.b(A.kz(a,"onError",u.c))},
oy(){var s,r
for(s=$.cj;s!=null;s=$.cj){$.dy=null
r=s.b
$.cj=r
if(r==null)$.dx=null
s.a.$0()}},
oK(){$.kf=!0
try{A.oy()}finally{$.dy=null
$.kf=!1
if($.cj!=null)$.kp().$1(A.m4())}},
m0(a){var s=new A.f4(a),r=$.dx
if(r==null){$.cj=$.dx=s
if(!$.kf)$.kp().$1(A.m4())}else $.dx=r.b=s},
oI(a){var s,r,q,p=$.cj
if(p==null){A.m0(a)
$.dy=$.dx
return}s=new A.f4(a)
r=$.dy
if(r==null){s.b=p
$.cj=$.dy=s}else{q=r.b
s.b=q
$.dy=r.b=s
if(q==null)$.dx=s}},
kn(a){var s,r=null,q=$.E
if(B.d===q){A.bT(r,r,B.d,a)
return}s=!1
if(s){A.bT(r,r,q,t.M.a(a))
return}A.bT(r,r,q,t.M.a(q.bG(a)))},
k0(a){return new A.aF(null,null,a.h("aF<0>"))},
m_(a){return},
lt(a,b,c){var s=b==null?A.oW():b
return t.a7.u(c).h("1(2)").a(s)},
nH(a,b){if(b==null)b=A.oY()
if(t.da.b(b))return a.bT(b,t.z,t.K,t.l)
if(t.d5.b(b))return t.v.a(b)
throw A.b(A.aV("handleError callback must take either an Object (the error), or both an Object (the error) and a StackTrace.",null))},
oz(a){},
oB(a,b){A.h2(a,b)},
oA(){},
oH(a,b,c,d){var s,r,q,p,o,n
try{b.$1(a.$0())}catch(n){s=A.aS(n)
r=A.bd(n)
t.K.a(s)
t.gO.a(r)
q=null
if(q==null)c.$2(s,r)
else{p=J.mF(q)
o=q.ga_()
c.$2(p,o)}}},
oa(a,b,c,d){var s,r,q=a.V(0),p=$.jB()
if(q!==p){s=t.O.a(new A.j9(b,c,d))
p=q.$ti
r=$.E
q.aH(new A.bR(new A.K(r,p),8,s,null,p.h("@<1>").u(p.c).h("bR<1,2>")))}else b.K(c,d)},
ob(a,b){return new A.j8(a,b)},
h2(a,b){A.oI(new A.jf(a,b))},
lX(a,b,c,d,e){var s,r=$.E
if(r===c)return d.$0()
$.E=c
s=r
try{r=d.$0()
return r}finally{$.E=s}},
lY(a,b,c,d,e,f,g){var s,r=$.E
if(r===c)return d.$1(e)
$.E=c
s=r
try{r=d.$1(e)
return r}finally{$.E=s}},
oG(a,b,c,d,e,f,g,h,i){var s,r=$.E
if(r===c)return d.$2(e,f)
$.E=c
s=r
try{r=d.$2(e,f)
return r}finally{$.E=s}},
bT(a,b,c,d){t.M.a(d)
if(B.d!==c)d=c.bG(d)
A.m0(d)},
iD:function iD(a){this.a=a},
iC:function iC(a,b,c){this.a=a
this.b=b
this.c=c},
iE:function iE(a){this.a=a},
iF:function iF(a){this.a=a},
j3:function j3(){},
j4:function j4(a,b){this.a=a
this.b=b},
co:function co(a,b){this.a=a
this.b=b},
a7:function a7(a,b){this.a=a
this.$ti=b},
aG:function aG(a,b,c,d,e,f){var _=this
_.ay=0
_.CW=_.ch=null
_.w=a
_.a=b
_.c=c
_.d=d
_.e=e
_.r=_.f=null
_.$ti=f},
d0:function d0(){},
aF:function aF(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.r=_.e=_.d=null
_.$ti=c},
hz:function hz(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hy:function hy(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
d1:function d1(){},
bQ:function bQ(a,b){this.a=a
this.$ti=b},
bR:function bR(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
K:function K(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
iM:function iM(a,b){this.a=a
this.b=b},
iT:function iT(a,b){this.a=a
this.b=b},
iQ:function iQ(a){this.a=a},
iR:function iR(a){this.a=a},
iS:function iS(a,b,c){this.a=a
this.b=b
this.c=c},
iP:function iP(a,b){this.a=a
this.b=b},
iO:function iO(a,b){this.a=a
this.b=b},
iN:function iN(a,b,c){this.a=a
this.b=b
this.c=c},
iW:function iW(a,b,c){this.a=a
this.b=b
this.c=c},
iX:function iX(a){this.a=a},
iV:function iV(a,b){this.a=a
this.b=b},
iU:function iU(a,b){this.a=a
this.b=b},
f4:function f4(a){this.a=a
this.b=null},
bl:function bl(){},
ig:function ig(a){this.a=a},
ih:function ih(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
id:function id(a,b){this.a=a
this.b=b},
ie:function ie(){},
ii:function ii(a,b){this.a=a
this.b=b},
ij:function ij(a,b){this.a=a
this.b=b},
d2:function d2(){},
d3:function d3(){},
ca:function ca(){},
iG:function iG(a){this.a=a},
cg:function cg(){},
bo:function bo(){},
d4:function d4(a,b){this.b=a
this.a=null
this.$ti=b},
f9:function f9(){},
dj:function dj(a){var _=this
_.a=0
_.c=_.b=null
_.$ti=a},
j_:function j_(a,b){this.a=a
this.b=b},
cb:function cb(a,b){var _=this
_.a=1
_.b=a
_.c=null
_.$ti=b},
j9:function j9(a,b,c){this.a=a
this.b=b
this.c=c},
j8:function j8(a,b){this.a=a
this.b=b},
dv:function dv(){},
jf:function jf(a,b){this.a=a
this.b=b},
fA:function fA(){},
j1:function j1(a,b){this.a=a
this.b=b},
j2:function j2(a,b,c){this.a=a
this.b=b
this.c=c},
lx(a,b){var s=a[b]
return s===a?null:s},
ly(a,b,c){if(c==null)a[b]=a
else a[b]=c},
nK(){var s=Object.create(null)
A.ly(s,"<non-identifier-key>",s)
delete s["<non-identifier-key>"]
return s},
ed(a,b,c){return b.h("@<0>").u(c).h("kZ<1,2>").a(A.p2(a,new A.b1(b.h("@<0>").u(c).h("b1<1,2>"))))},
cJ(a,b){return new A.b1(a.h("@<0>").u(b).h("b1<1,2>"))},
hQ(a){var s,r={}
if(A.kl(a))return"{...}"
s=new A.cY("")
try{B.a.k($.ai,a)
s.a+="{"
r.a=!0
J.hb(a,new A.hR(r,s))
s.a+="}"}finally{if(0>=$.ai.length)return A.d($.ai,-1)
$.ai.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
d8:function d8(){},
db:function db(a){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=a},
d9:function d9(a,b){this.a=a
this.$ti=b},
da:function da(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
e:function e(){},
y:function y(){},
hR:function hR(a,b){this.a=a
this.b=b},
du:function du(){},
c2:function c2(){},
d_:function d_(){},
ch:function ch(){},
oC(a,b){var s,r,q,p=null
try{p=JSON.parse(a)}catch(r){s=A.aS(r)
q=String(s)
throw A.b(new A.hv(q))}q=A.jc(p)
return q},
jc(a){var s
if(a==null)return null
if(typeof a!="object")return a
if(Object.getPrototypeOf(a)!==Array.prototype)return new A.fm(a,Object.create(null))
for(s=0;s<a.length;++s)a[s]=A.jc(a[s])
return a},
fm:function fm(a,b){this.a=a
this.b=b
this.c=null},
fn:function fn(a){this.a=a},
dQ:function dQ(){},
dS:function dS(){},
eb:function eb(){},
hK:function hK(a){this.a=a},
kO(a,b){return A.nh(a,b,null)},
mU(a,b){a=A.b(a)
if(a==null)a=t.K.a(a)
a.stack=b.m(0)
throw a
throw A.b("unreachable")},
kJ(a,b){var s
if(Math.abs(a)<=864e13)s=!1
else s=!0
if(s)A.bt(A.aV("DateTime is outside valid range: "+a,null))
A.dA(b,"isUtc",t.y)
return new A.cv(a,b)},
ac(a,b,c,d){var s,r=c?J.kW(a,d):J.n7(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
J(a,b){var s,r=A.q([],b.h("z<0>"))
for(s=J.aT(a);s.A();)B.a.k(r,b.a(s.gC(s)))
return r},
ee(a,b){var s=A.n9(a,b)
return s},
n9(a,b){var s,r
if(Array.isArray(a))return A.q(a.slice(0),b.h("z<0>"))
s=A.q([],b.h("z<0>"))
for(r=J.aT(a);r.A();)B.a.k(s,r.gC(r))
return s},
lh(a,b,c){var s=J.aT(b)
if(!s.A())return a
if(c.length===0){do a+=A.m(s.gC(s))
while(s.A())}else{a+=A.m(s.gC(s))
for(;s.A();)a=a+c+A.m(s.gC(s))}return a},
l4(a,b){return new A.es(a,b.gdi(),b.gdn(),b.gdj())},
mS(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
mT(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
dT(a){if(a>=10)return""+a
return"0"+a},
by(a){if(typeof a=="number"||A.ci(a)||a==null)return J.dG(a)
if(typeof a=="string")return JSON.stringify(a)
return A.np(a)},
mV(a,b){A.dA(a,"error",t.K)
A.dA(b,"stackTrace",t.l)
A.mU(a,b)},
dJ(a){return new A.cn(a)},
aV(a,b){return new A.aU(!1,null,b,a)},
kz(a,b,c){return new A.aU(!0,a,b,c)},
nr(a){var s=null
return new A.c6(s,s,!1,s,s,a)},
lb(a,b){return new A.c6(null,null,!0,a,b,"Value not in range")},
la(a,b,c,d,e){return new A.c6(b,c,!0,a,d,"Invalid value")},
S(a,b,c,d){return new A.e5(b,!0,a,d,"Index out of range")},
D(a){return new A.eX(a)},
k3(a){return new A.eV(a)},
M(a){return new A.bN(a)},
a1(a){return new A.dR(a)},
dX(a){return new A.iL(a)},
n6(a,b,c){var s,r
if(A.kl(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.q([],t.s)
B.a.k($.ai,a)
try{A.ox(a,s)}finally{if(0>=$.ai.length)return A.d($.ai,-1)
$.ai.pop()}r=A.lh(b,t.k.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
kV(a,b,c){var s,r
if(A.kl(a))return b+"..."+c
s=new A.cY(b)
B.a.k($.ai,a)
try{r=s
r.a=A.lh(r.a,a,", ")}finally{if(0>=$.ai.length)return A.d($.ai,-1)
$.ai.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
ox(a,b){var s,r,q,p,o,n,m,l=a.gH(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.A())return
s=A.m(l.gC(l))
B.a.k(b,s)
k+=s.length+2;++j}if(!l.A()){if(j<=5)return
if(0>=b.length)return A.d(b,-1)
r=b.pop()
if(0>=b.length)return A.d(b,-1)
q=b.pop()}else{p=l.gC(l);++j
if(!l.A()){if(j<=4){B.a.k(b,A.m(p))
return}r=A.m(p)
if(0>=b.length)return A.d(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gC(l);++j
for(;l.A();p=o,o=n){n=l.gC(l);++j
if(j>100){while(!0){if(!(k>75&&j>3))break
if(0>=b.length)return A.d(b,-1)
k-=b.pop().length+2;--j}B.a.k(b,"...")
return}}q=A.m(p)
r=A.m(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
while(!0){if(!(k>80&&b.length>3))break
if(0>=b.length)return A.d(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)B.a.k(b,m)
B.a.k(b,q)
B.a.k(b,r)},
l5(a,b,c,d){var s=B.c.gv(a)
b=B.c.gv(b)
c=B.c.gv(c)
d=B.c.gv(d)
d=A.li(A.cZ(A.cZ(A.cZ(A.cZ($.mr(),s),b),c),d))
return d},
md(a){A.pp(a)},
hZ:function hZ(a,b){this.a=a
this.b=b},
cv:function cv(a,b){this.a=a
this.b=b},
iI:function iI(){},
G:function G(){},
cn:function cn(a){this.a=a},
b7:function b7(){},
aU:function aU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
c6:function c6(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
e5:function e5(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
es:function es(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eX:function eX(a){this.a=a},
eV:function eV(a){this.a=a},
bN:function bN(a){this.a=a},
dR:function dR(a){this.a=a},
ev:function ev(){},
cW:function cW(){},
iL:function iL(a){this.a=a},
hv:function hv(a){this.a=a},
f:function f(){},
L:function L(){},
v:function v(){},
fI:function fI(){},
cY:function cY(a){this.a=a},
p1(){var s=document
s.toString
return s},
kF(a,b){var s=document.createElement("canvas")
s.toString
if(b!=null)B.e.sO(s,b)
if(a!=null)B.e.sN(s,a)
return s},
nI(a,b){if(b.parentNode===a){a.removeChild(b).toString
return!0}return!1},
kK(a){t.aS.a(a)
return"wheel"},
jQ(a,b){var s,r,q,p,o=a===b
if(!o){s=b.tagName
s.toString
r=s==="HTML"}else r=!0
if(a==null||o){if(r)return new A.bi(0,0,t.I)
throw A.b(A.aV("Specified element is not a transitive offset parent of this element.",null))}q=A.jQ(a.offsetParent,b)
s=a.offsetLeft
s.toString
s=B.c.W(s)
p=a.offsetTop
p.toString
return new A.bi(q.a+s,q.b+B.c.W(p),t.I)},
n0(a){return A.kR(a,null,null,null).b1(new A.hD(),t.N)},
kR(a,b,c,d){var s,r,q=new A.K($.E,t.ao),p=new A.bQ(q,t.bj),o=new XMLHttpRequest()
o.toString
B.S.dm(o,"GET",a,!0)
if(c!=null)o.responseType=c
s=t.dB
r=t.J
A.a_(o,"load",s.a(new A.hE(o,p)),!1,r)
A.a_(o,"error",s.a(p.gcY()),!1,r)
o.send()
return q},
n5(a){var s=new IntersectionObserver(A.aR(a,2))
s.toString
return s},
a_(a,b,c,d,e){var s=c==null?null:A.ki(new A.iJ(c),t.A)
s=new A.d7(a,b,s,!1,e.h("d7<0>"))
s.bD()
return s},
oe(a){var s
if(t.e5.b(a))return a
s=new A.iA([],[])
s.c=!0
return s.b5(a)},
ki(a,b){var s=$.E
if(s===B.d)return a
return s.cX(a,b)},
n:function n(){},
hd:function hd(){},
dH:function dH(){},
dI:function dI(){},
bv:function bv(){},
bw:function bw(){},
bx:function bx(){},
aJ:function aJ(){},
hn:function hn(){},
B:function B(){},
cu:function cu(){},
ho:function ho(){},
ax:function ax(){},
aY:function aY(){},
hp:function hp(){},
hq:function hq(){},
hr:function hr(){},
aZ:function aZ(){},
b_:function b_(){},
bY:function bY(){},
b0:function b0(){},
hs:function hs(){},
cw:function cw(){},
cx:function cx(){},
dV:function dV(){},
ht:function ht(){},
i:function i(){},
j:function j(){},
c:function c(){},
a2:function a2(){},
dY:function dY(){},
dZ:function dZ(){},
bZ:function bZ(){},
c_:function c_(){},
e_:function e_(){},
ab:function ab(){},
hC:function hC(){},
bB:function bB(){},
az:function az(){},
hD:function hD(){},
hE:function hE(a,b){this.a=a
this.b=b},
bC:function bC(){},
cB:function cB(){},
e4:function e4(){},
bD:function bD(){},
hG:function hG(){},
b3:function b3(){},
hP:function hP(){},
bL:function bL(){},
hV:function hV(){},
eg:function eg(){},
hW:function hW(a){this.a=a},
eh:function eh(){},
hX:function hX(a){this.a=a},
ad:function ad(){},
ei:function ei(){},
a3:function a3(){},
t:function t(){},
cR:function cR(){},
ae:function ae(){},
ex:function ex(){},
aD:function aD(){},
eC:function eC(){},
i8:function i8(a){this.a=a},
eE:function eE(){},
a5:function a5(){},
eH:function eH(){},
af:function af(){},
eI:function eI(){},
ag:function ag(){},
eK:function eK(){},
ic:function ic(a){this.a=a},
Z:function Z(){},
a6:function a6(){},
W:function W(){},
eN:function eN(){},
eO:function eO(){},
im:function im(){},
ah:function ah(){},
eQ:function eQ(){},
io:function io(){},
aN:function aN(){},
it:function it(){},
f_:function f_(){},
f0:function f0(){},
bm:function bm(){},
bn:function bn(){},
aO:function aO(){},
f6:function f6(){},
d5:function d5(){},
fj:function fj(){},
de:function de(){},
fE:function fE(){},
fJ:function fJ(){},
jR:function jR(a,b){this.a=a
this.$ti=b},
d6:function d6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
fe:function fe(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
d7:function d7(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
iJ:function iJ(a){this.a=a},
iK:function iK(a){this.a=a},
k6:function k6(a){this.$ti=a},
p:function p(){},
cz:function cz(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
f7:function f7(){},
fa:function fa(){},
fb:function fb(){},
fc:function fc(){},
fd:function fd(){},
fg:function fg(){},
fh:function fh(){},
fk:function fk(){},
fl:function fl(){},
fq:function fq(){},
fr:function fr(){},
fs:function fs(){},
ft:function ft(){},
fu:function fu(){},
fv:function fv(){},
fy:function fy(){},
fz:function fz(){},
fB:function fB(){},
dk:function dk(){},
dl:function dl(){},
fC:function fC(){},
fD:function fD(){},
fF:function fF(){},
fK:function fK(){},
fL:function fL(){},
dn:function dn(){},
dp:function dp(){},
fM:function fM(){},
fN:function fN(){},
fR:function fR(){},
fS:function fS(){},
fT:function fT(){},
fU:function fU(){},
fV:function fV(){},
fW:function fW(){},
fX:function fX(){},
fY:function fY(){},
fZ:function fZ(){},
h_:function h_(){},
lO(a){var s,r,q
if(a==null)return a
if(typeof a=="string"||typeof a=="number"||A.ci(a))return a
if(A.mb(a))return A.bs(a)
s=Array.isArray(a)
s.toString
if(s){r=[]
q=0
while(!0){s=a.length
s.toString
if(!(q<s))break
r.push(A.lO(a[q]));++q}return r}return a},
bs(a){var s,r,q,p,o,n
if(a==null)return null
s=A.cJ(t.N,t.z)
r=Object.getOwnPropertyNames(a)
for(q=r.length,p=0;p<r.length;r.length===q||(0,A.V)(r),++p){o=r[p]
n=o
n.toString
s.i(0,n,A.lO(a[o]))}return s},
lN(a){var s
if(a==null)return a
if(typeof a=="string"||typeof a=="number"||A.ci(a))return a
if(t.f.b(a))return A.m6(a)
if(t.j.b(a)){s=[]
J.hb(a,new A.jb(s))
a=s}return a},
m6(a){var s={}
J.hb(a,new A.jk(s))
return s},
mb(a){var s=Object.getPrototypeOf(a),r=s===Object.prototype
r.toString
if(!r){r=s===null
r.toString}else r=!0
return r},
iz:function iz(){},
iB:function iB(a,b){this.a=a
this.b=b},
jb:function jb(a){this.a=a},
jk:function jk(a){this.a=a},
iA:function iA(a,b){this.a=a
this.b=b
this.c=!1},
cG:function cG(){},
o8(a,b,c,d){var s,r,q
A.ka(b)
t.j.a(d)
if(b){s=[c]
B.a.R(s,d)
d=s}r=t.z
q=A.J(J.ky(d,A.pf(),r),r)
return A.kb(A.kO(t.Z.a(a),q))},
n8(a){return new A.hJ(new A.db(t.dx)).$1(a)},
oc(a){return a},
kc(a,b,c){var s
try{if(Object.isExtensible(a)&&!Object.prototype.hasOwnProperty.call(a,b)){Object.defineProperty(a,b,{value:c})
return!0}}catch(s){}return!1},
lU(a,b){if(Object.prototype.hasOwnProperty.call(a,b))return a[b]
return null},
kb(a){if(a==null||typeof a=="string"||typeof a=="number"||A.ci(a))return a
if(a instanceof A.b2)return a.a
if(A.ma(a))return a
if(t.Q.b(a))return a
if(a instanceof A.cv)return A.a4(a)
if(t.Z.b(a))return A.lT(a,"$dart_jsFunction",new A.jd())
return A.lT(a,"_$dart_jsObject",new A.je($.ks()))},
lT(a,b,c){var s=A.lU(a,b)
if(s==null){s=c.$1(a)
A.kc(a,b,s)}return s},
lP(a){if(a==null||typeof a=="string"||typeof a=="number"||typeof a=="boolean")return a
else if(a instanceof Object&&A.ma(a))return a
else if(a instanceof Object&&t.Q.b(a))return a
else if(a instanceof Date)return A.kJ(A.r(a.getTime()),!1)
else if(a.constructor===$.ks())return a.o
else return A.kh(a)},
kh(a){if(typeof a=="function")return A.kd(a,$.h5(),new A.jg())
if(a instanceof Array)return A.kd(a,$.kq(),new A.jh())
return A.kd(a,$.kq(),new A.ji())},
kd(a,b,c){var s=A.lU(a,b)
if(s==null||!(a instanceof Object)){s=c.$1(a)
A.kc(a,b,s)}return s},
hJ:function hJ(a){this.a=a},
jd:function jd(){},
je:function je(a){this.a=a},
jg:function jg(){},
jh:function jh(){},
ji:function ji(){},
b2:function b2(a){this.a=a},
cE:function cE(a){this.a=a},
bH:function bH(a,b){this.a=a
this.$ti=b},
cd:function cd(){},
od(a){var s,r=a.$dart_jsFunction
if(r!=null)return r
s=function(b,c){return function(){return b(c,Array.prototype.slice.apply(arguments))}}(A.o9,a)
s[$.h5()]=a
a.$dart_jsFunction=s
return s},
o9(a,b){t.j.a(b)
return A.kO(t.Z.a(a),b)},
m1(a,b){if(typeof a=="function")return a
else return b.a(A.od(a))},
pq(a,b){var s=new A.K($.E,b.h("K<0>")),r=new A.bQ(s,b.h("bQ<0>"))
a.then(A.aR(new A.jz(r,b),1),A.aR(new A.jA(r),1))
return s},
jz:function jz(a,b){this.a=a
this.b=b},
jA:function jA(a){this.a=a},
i_:function i_(a){this.a=a},
iY:function iY(){},
bi:function bi(a,b,c){this.a=a
this.b=b
this.$ti=c},
am:function am(){},
ec:function ec(){},
ao:function ao(){},
et:function et(){},
i2:function i2(){},
eL:function eL(){},
at:function at(){},
eS:function eS(){},
fo:function fo(){},
fp:function fp(){},
fw:function fw(){},
fx:function fx(){},
fG:function fG(){},
fH:function fH(){},
fO:function fO(){},
fP:function fP(){},
hf:function hf(){},
dK:function dK(){},
hg:function hg(a){this.a=a},
dL:function dL(){},
bf:function bf(){},
eu:function eu(){},
f5:function f5(){},
dM:function dM(){},
aX:function aX(){},
e1:function e1(){},
ey:function ey(){},
eB:function eB(){},
cV:function cV(){},
c7:function c7(){},
eG:function eG(){},
eP:function eP(){},
eU:function eU(){},
kN(){return new A.e2(A.ac(20,0,!0,t.i))},
hc:function hc(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=0
_.a=null},
ip:function ip(){},
e2:function e2(a){var _=this
_.a=a
_.f=_.e=_.d=_.c=_.b=0
_.w=_.r=null},
hw:function hw(){},
cq:function cq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jY(a){var s=new A.aC(A.ac(9,0,!1,t.i))
s.c9(a)
return s},
l0(a,b){var s=new A.aC(A.ac(9,0,!1,t.i))
s.c8(a,b)
return s},
ef(){return new A.Y(A.q([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t.n))},
b5(a,b){var s=new A.Y(A.ac(16,0,!1,t.i))
s.P(a,b)
return s},
i1(){return new A.b6(0,0)},
l6(a,b,c){return new A.ap(a,b,c)},
nq(a,b,c,d){return new A.cU(new A.b6(c,d))},
ez(){return new A.aE(0,0,0,1)},
c5(a,b){var s=b/2,r=Math.sin(s),q=a.a,p=a.b,o=a.c,n=Math.sqrt(q*q+p*p+o*o)
if(n===0)return A.ez()
return new A.aE(q/n*r,p/n*r,o/n*r,Math.cos(s))},
l8(a){var s=new A.aE(0,0,0,0)
s.ca(a)
return s},
l9(a){var s=a.a,r=a.b,q=a.c,p=a.d
return A.eA(a,1/Math.sqrt(s*s+r*r+q*q+p*p))},
eA(a,b){return new A.aE(a.a*b,a.b*b,a.c*b,a.d*b)},
i6(a,b,c){var s,r,q,p=a.a,o=b.a,n=a.b,m=b.b,l=a.c,k=b.c,j=a.d,i=b.d,h=p*o+n*m+l*k+j*i
if(h<0){h=-h
s=A.eA(b,-1)}else s=b
if(h>0.9995)return A.l9(a.t(0,A.eA(new A.aE(o-p,m-n,k-l,i-j),c)))
r=Math.acos(h)
q=Math.sin(r)
p=Math.sin((1-c)*r)
o=Math.sin(c*r)
return A.l9(A.eA(a,p/q).t(0,A.eA(s,o/q)))},
k1(){return new A.U(A.q([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t.n))},
ll(a){var s,r,q,p,o,n,m,l,k=a.a,j=k.length
if(0>=j)return A.d(k,0)
s=k[0]
if(1>=j)return A.d(k,1)
r=k[1]
if(2>=j)return A.d(k,2)
q=k[2]
if(3>=j)return A.d(k,3)
p=k[3]
if(4>=j)return A.d(k,4)
o=k[4]
if(5>=j)return A.d(k,5)
n=k[5]
if(6>=j)return A.d(k,6)
m=k[6]
if(7>=j)return A.d(k,7)
l=k[7]
if(8>=j)return A.d(k,8)
return new A.U(A.J(A.q([s,r,q,0,p,o,n,0,m,l,k[8],0,0,0,0,1],t.n),t.i))},
ny(a){return new A.U(A.J(A.q([1,0,0,0,0,1,0,0,0,0,1,0,a.a,a.b,a.c,1],t.n),t.i))},
ln(a,b,c){return new A.Q(a,b,c)},
lo(){return new A.Q(0,0,0)},
eY(a){var s=new A.Q(0,0,0),r=a.a,q=a.b,p=a.c,o=Math.sqrt(r*r+q*q+p*p)
s.a=a.a/o
s.b=a.b/o
s.c=a.c/o
return s},
iu(a,b){var s=a.b,r=b.c,q=a.c,p=b.b,o=b.a,n=a.a
return new A.Q(s*r-q*p,q*o-n*r,n*p-s*o)},
hx:function hx(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aC:function aC(a){this.a=a},
hS:function hS(a){this.a=a},
Y:function Y(a){this.a=a},
b6:function b6(a,b){this.a=a
this.b=b},
ap:function ap(a,b,c){this.a=a
this.b=b
this.c=c},
cU:function cU(a){this.b=a},
aE:function aE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
i5:function i5(a){this.a=a},
eR:function eR(a){this.a=a},
U:function U(a){this.a=a},
Q:function Q(a,b,c){this.a=a
this.b=b
this.c=c},
hA:function hA(){},
hB:function hB(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
c1:function c1(){},
aa:function aa(a){this.a=a},
cF:function cF(a){this.a=a},
dW:function dW(a){this.a=a},
f2:function f2(a){this.a=a},
bk:function bk(a){this.a=a},
ce:function ce(a,b){this.a=a
this.b=b},
hL:function hL(a,b){this.a=a
this.b=b},
hM:function hM(a){this.a=a},
hN:function hN(a){this.a=a},
aP:function aP(a,b){this.a=a
this.b=b},
ej:function ej(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=!1},
cf:function cf(a,b){this.a=a
this.b=b},
eF:function eF(a,b){this.a=a
this.b=b
this.c=null},
kA(a,b,c,d,e){return new A.aW(a,b,c,d,e)},
hi(){return new A.hh()},
jP(){return new A.hl(0,0,0,1,1)},
kM(a){return new A.hu(a)},
iw(a){return new A.iv(a)},
l1(a){return new A.hT(a)},
cK(a){return new A.hU(a)},
k_(a){return new A.i9(a)},
lr(){return new A.bP(A.q([new A.aW("aPosition",0,3,12,0)],t.U))},
k4(){return new A.bP(A.q([new A.aW("aPositionMapping",0,2,8,0)],t.U))},
nC(){var s,r,q,p=$.k5
if(p==null)try{p=A.kF(null,null)
s=A.ed(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],t.N,t.z)
r=B.e.aB(p,"webgl",s)
if(r==null)r=B.e.aB(p,"experimental-webgl",s)
t.eV.a(r)
$.k5=!0
p=!0}catch(q){$.k5=!1
p=!1}p.toString
return p},
nB(a,b){var s,r,q,p,o,n,m=b.getSupportedExtensions()
if(m==null)return
s=A.q([],t.s)
for(r=a.f,q=r.length,p=J.aH(m),o=0;o<r.length;r.length===q||(0,A.V)(r),++o){n=r[o]
if(!p.bL(m,n))B.a.k(s,n)}if(s.length!==0)throw A.b(A.dX("Invalid webgl extensions\n"+A.m(s)))},
kI(){return"    precision highp float;\n    \n    attribute vec3 aPosition;\n\n    uniform mat4 uPvwlTransform;\n\n    void main(void)\n    {\n      gl_Position = uPvwlTransform * vec4(aPosition, 1.0);\n    }\n  "},
kH(){return"    precision highp float;\n\n    uniform vec4 uColor;\n\n    void main(void)\n    {\n      gl_FragColor = uColor;\n    }\n  "},
l3(){return"    #version 300 es\n    precision highp float;\n\n    in vec2 aPositionMapping;\n    out vec2 vMapping;\n\n    uniform mat3 uPvwlTransform;\n\n    void main()\n    {\n      vMapping = aPositionMapping;\n\n      vec3 position = uPvwlTransform * vec3(aPositionMapping, 1.0);\n      gl_Position = vec4(position.xy, 0.0, 1.0);\n    }\n  "},
l2(a){A.r(a)
return"    #version 300 es\n    precision highp float;\n\n    in vec2 vMapping;\n    out vec4 outColor;\n\n    uniform sampler2D uColorSampler;\n    uniform sampler2D uVelocitySampler;\n    uniform vec4 uViewBound;\n    uniform float uStep;\n\n    void main()\n    {\n      vec4 color = texture(uColorSampler, vMapping);\n      vec2 velocity = texture(uVelocitySampler, vMapping).xy;\n      velocity = (velocity * 2.0) - 1.0;\n      velocity *= uViewBound.zw;\n      \n      for (int i = 1; i <= "+a+"; i ++)\n      {\n          float distance = float(i) * uStep;\n          color += texture(uColorSampler, vMapping + velocity * distance);\n          color += texture(uColorSampler, vMapping - velocity * distance);\n      }\n\n      outColor = color * "+A.m(1/(a*2+1))+";\n      //outColor = vec4(velocity, 0, 1.0);\n    }\n  "},
lg(){return"    precision highp float;\n    \n    attribute vec3 aPosition;\n    attribute vec3 aNormal;\n\n    uniform mat4 uPvTransform;\n    uniform mat4 uWlTransform;\n\n    varying vec4 vWorldPosition;\n    varying vec4 vWorldNormal;\n\n    void main(void)\n    {\n      vWorldPosition = uWlTransform * vec4(aPosition, 1.0);\n      vWorldNormal = normalize(uWlTransform * vec4(aNormal, 0.0));\n      \n      gl_Position = uPvTransform * vWorldPosition;\n    }\n  "},
lf(){return"    precision highp float;\n\n        float LambertianFactor(\n      in vec4 polygonNormal,\n      in vec4 lightDirection)\n    {\n      return max(dot(polygonNormal, lightDirection), 0.0);\n    }\n  \n\n    uniform vec4 uLightPosition;\n    uniform vec4 uLightColor;\n\n    varying vec4 vWorldPosition;\n    varying vec4 vWorldNormal;\n\n    void main(void)\n    {\n      vec4 worldLightDirection = normalize(uLightPosition - vWorldPosition);\n      float diffuseFactor = LambertianFactor(vWorldNormal, worldLightDirection);\n      gl_FragColor = uLightColor * diffuseFactor;\n    }\n  "},
lk(){return"    precision highp float;\n    \n    attribute vec2 aPositionMapping;\n\n    uniform mat3 uPvwlTransform;\n\n    varying vec2 vMapping;\n\n    void main(void)\n    {\n      vMapping = aPositionMapping;\n\n      vec3 position = uPvwlTransform * vec3(aPositionMapping, 1.0);\n      gl_Position = vec4(position.xy, 0.0, 1.0);\n    }\n  "},
lj(){return"    precision highp float;\n\n    uniform sampler2D uSampler;\n\n    varying vec2 vMapping;\n\n    void main(void)\n    {\n      gl_FragColor = texture2D(uSampler, vMapping);\n    }\n  "},
lq(){return"    #version 300 es\n    precision highp float;\n    in vec3 aPosition;\n    out vec4 vViewportPosition;\n    out vec4 vViewportPreviousPosition;\n\n    uniform mat4 uPvwlTransform;\n    uniform mat4 uTpvwlTransform;\n    uniform mat4 uPreviousTpvwlTransform;\n\n    void main()\n    {\n      vec4 position = vec4(aPosition, 1.0);\n      vViewportPosition = uTpvwlTransform * position;\n      vViewportPreviousPosition = uPreviousTpvwlTransform * position;\n\n      gl_Position = uPvwlTransform * position;\n    }\n  "},
lp(){return"    #version 300 es\n    precision highp float;\n    in vec4 vViewportPosition;\n    in vec4 vViewportPreviousPosition;\n    out vec4 outColor;\n\n    uniform float uViewScale;\n\n    void main()\n    {\n      vec2 velocity = (vViewportPosition.xy / vViewportPosition.w)\n        - (vViewportPreviousPosition.xy / vViewportPreviousPosition.w);\n      velocity *= uViewScale;\n      velocity /= max(length(velocity), 1.0);\n      velocity = velocity * 0.5 + 0.5;\n\n      outColor = vec4(velocity, 0, 0);\n    }\n  "},
mY(a,b,c){var s,r,q,p,o,n,m,l,k,j,i
$.n_=$.mZ=!1
B.a.G($.A)
B.a.G($.bA)
B.a.G($.e3)
B.a.G($.jV)
$.jU.G(0)
s=(1+Math.sqrt(5))*0.5
A.ak(-1,s,0)
A.ak(1,s,0)
r=-s
A.ak(-1,r,0)
A.ak(1,r,0)
A.ak(0,-1,s)
A.ak(0,1,s)
A.ak(0,-1,r)
A.ak(0,1,r)
A.ak(s,0,-1)
A.ak(s,0,1)
A.ak(r,0,-1)
A.ak(r,0,1)
B.a.k($.A,new A.H(0,11,5))
B.a.k($.A,new A.H(0,5,1))
B.a.k($.A,new A.H(0,1,7))
B.a.k($.A,new A.H(0,7,10))
B.a.k($.A,new A.H(0,10,11))
B.a.k($.A,new A.H(1,5,9))
B.a.k($.A,new A.H(5,11,4))
B.a.k($.A,new A.H(11,10,2))
B.a.k($.A,new A.H(10,7,6))
B.a.k($.A,new A.H(7,1,8))
B.a.k($.A,new A.H(3,9,4))
B.a.k($.A,new A.H(3,4,2))
B.a.k($.A,new A.H(3,2,6))
B.a.k($.A,new A.H(3,6,8))
B.a.k($.A,new A.H(3,8,9))
B.a.k($.A,new A.H(4,9,5))
B.a.k($.A,new A.H(2,4,11))
B.a.k($.A,new A.H(6,2,10))
B.a.k($.A,new A.H(8,6,7))
B.a.k($.A,new A.H(9,8,1))
for(q=0;q<a;++q){B.a.G($.cA)
for(r=$.A.length,p=0;p<$.A.length;$.A.length===r||(0,A.V)($.A),++p){o=$.A[p]
n=o.a
m=o.b
l=A.jT(n,m)
k=o.c
j=A.jT(m,k)
i=A.jT(k,n)
B.a.k($.cA,new A.H(n,l,i))
B.a.k($.cA,new A.H(m,j,l))
B.a.k($.cA,new A.H(k,i,j))
B.a.k($.cA,new A.H(l,j,i))}B.a.G($.A)
B.a.R($.A,$.cA)}for(r=$.A.length,p=0;p<$.A.length;$.A.length===r||(0,A.V)($.A),++p){o=$.A[p]
B.a.k($.e3,o.a)
B.a.k($.e3,o.b)
B.a.k($.e3,o.c)}$.kP=new Uint16Array(A.bS($.e3))
$.kQ=new Float32Array(A.bS($.jV))},
ak(a,b,c){var s,r
B.a.k($.bA,new A.ap(a,b,c))
s=A.eY(new A.Q(a,b,c))
r=Math.atan2(-s.c,s.a)
r+=r<0?6.283185307179586:0
Math.acos(s.b)
A.eY(new A.Q(-Math.sin(r),0,-Math.cos(r)))
B.a.R($.jV,A.q([s.a,s.b,s.c],t.n))
return $.bA.length-1},
jT(a,b){var s,r,q,p=A.m(Math.min(a,b))+"-"+A.m(Math.max(a,b)),o=$.jU.j(0,p)
if(o!=null)return o
s=$.bA.length
if(!(a>=0&&a<s))return A.d($.bA,a)
r=$.bA[a]
if(!(b>=0&&b<s))return A.d($.bA,b)
q=r.t(0,$.bA[b]).n(0,0.5)
o=A.ak(q.a,q.b,q.c)
$.jU.i(0,p,o)
return o},
hk:function hk(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aW:function aW(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hh:function hh(){},
hl:function hl(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e},
hF:function hF(a,b,c){this.a=a
this.b=b
this.c=c},
eZ:function eZ(a){this.b=a},
hj:function hj(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
dU:function dU(){},
e0:function e0(){},
cp:function cp(){var _=this
_.b=_.a=0
_.f=_.e=_.d=_.c=null},
c4:function c4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null},
bM:function bM(){var _=this
_.d=_.c=_.b=_.a=null},
il:function il(){this.f=this.e=this.d=null},
is:function is(){},
hu:function hu(a){this.a=a
this.c=this.b=null},
iv:function iv(a){this.a=a
this.c=this.b=null},
hT:function hT(a){this.a=a
this.c=this.b=null},
hU:function hU(a){this.a=a
this.c=this.b=null},
i9:function i9(a){this.a=a
this.c=this.b=null},
bP:function bP(a){this.a=a},
i7:function i7(a,b,c){this.b=a
this.c=b
this.f=c},
iy:function iy(){this.a=null},
hm:function hm(a,b,c,d){var _=this
_.c=a
_.d=b
_.e=c
_.f=d},
hY:function hY(a,b,c,d,e,f,g){var _=this
_.c=a
_.d=b
_.e=c
_.f=d
_.r=e
_.w=f
_.x=g
_.y=4},
ib:function ib(a,b,c,d,e,f){var _=this
_.c=a
_.d=b
_.e=c
_.f=d
_.r=e
_.w=f},
ik:function ik(a,b,c,d){var _=this
_.c=a
_.d=b
_.e=c
_.f=d},
ix:function ix(a,b,c,d,e,f){var _=this
_.c=a
_.d=b
_.e=c
_.f=d
_.r=e
_.w=f
_.Q=_.z=_.y=_.x=0},
H:function H(a,b,c){this.a=a
this.b=b
this.c=c},
f1:function f1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=!1
_.f=null},
ph(){A.mX(A.q([A.n0("media/gltf/invaders.gltf"),A.kR("media/gltf/invaders.bin",null,"arraybuffer",null)],t.aJ),t.K).b1(new A.jv(),t.P)},
kY(){var s,r,q,p=$.kr()
p.i(0,"Report",null)
p.i(0,"Kill",null)
for(p=$.a9.length,s=0;s<$.a9.length;$.a9.length===p||(0,A.V)($.a9),++s)$.a9[s].V(0)
B.a.G($.a9)
$.kg=-1
A.kL()
p=$.jG()
p.children.toString
r=$.dE()
q=r.a
A.nI(p,q)
r.f.unobserve(q)
r.f.disconnect()
$.ko().E()
$.jC().E()
$.kt().E()
$.ku().E()
$.kw().E()},
nu(){var s=A.ed(["status",$.kg,"fps",$.jC().gd9(),"size","288"],t.N,t.K)
return A.kh(A.n8(s))},
lc(){var s,r,q=$.dE(),p=q.a,o=document,n=o.documentElement
n.toString
B.c.W(A.jQ(p,n).a)
o=o.documentElement
o.toString
B.c.W(A.jQ(p,o).b)
o=p.clientWidth
o.toString
n=window.devicePixelRatio
n.toString
n=B.c.W(o*n)
o=p.clientHeight
o.toString
s=window.devicePixelRatio
s.toString
q.b=new A.cU(new A.b6(n,B.c.W(o*s)))
B.e.sO(p,n)
B.e.sN(p,A.r(q.b.b.b))
q.f.takeRecords().toString
q=q.b.b
r=q.b/q.a
q=$.dC().b
p=q.a*0.5
q=q.b*0.5
n=t.n
s=t.i
$.oR=new A.Y(A.J(A.q([p,0,0,0,0,q,0,0,0,0,1,0,p,q,0,1],n),s))
$.oJ=new A.aC(A.J(A.q([2*r,0,0,0,2,0,-r,-1,1],n),s))},
nb(a){var s,r,q,p
t.cE.a(a)
s=$.jG().getBoundingClientRect()
s.left.toString
s.right.toString
r=s.width
r.toString
s=s.height
s.toString
q=a.a
p=new A.b6(q.a/r-0.5,q.b/s-0.5).n(0,2)
$.h6().e=A.c5(new A.Q(1,0,0),p.b).n(0,A.c5(new A.Q(0,1,0),-p.a))},
nc(a){var s,r,q,p,o
t.as.a(a)
s=$.h6()
s.f=B.f.aV(0,0,1)
s.d=a.a
r=A.l8($.dD().d.ga9())
q=r.n(0,s.e)
p=r.n(0,s.d)
s=p.ab(q)
o=r.ab(q)
A.md(B.c.m(p.ab(q))+" "+B.c.m(r.ab(q))+" "+B.c.m(s-o))},
nd(a){var s,r,q,p
A.dw(a)
for(s=$.au.length,r=0;r<s;++r){q=$.au[r]
p=q.c-=a
if(p<=0){q.d=!q.d
q.c=1}}},
ne(a){var s,r,q,p,o,n,m,l,k,j
A.dw(a)
s=$.h6()
r=1-s.f
s.b=s.b.n(0,r)
s.c=s.c.n(0,r)
s.d=A.i6(A.ez(),s.d,r)
s.e=A.i6(A.ez(),s.e,r)
s.c=s.c.t(0,s.b.n(0,a))
q=s.a
p=q.gT()
o=s.c.n(0,a)
q.sT(p.t(0,new A.ap(o.a,o.b,o.c)))
o=s.e
s.e=A.i6(o,o.n(0,s.d),a)
n=A.l8(s.a.ga9())
o=s.a
o.toString
o.sa9(A.jY(A.i6(n,n.n(0,s.e),a)))
$.oD=$.jK()
s=$.dD()
s.aF()
$.oO=A.b5($.my(),s.a)
A.ns()
A.nt(a)
s=$.jH()
o=s.c.a
o.toString
B.b.L(o,36160,s.d)
o=$.bW()
o.sap(A.hi())
o.sau(null)
p=$.dC()
o.ae(p)
o.aE(A.jP())
q=$.jI()
m=q.d
l=m.a.a
l.toString
B.b.aa(l,m.b)
m=q.e
l=t.r
k=l.a(A.J(A.q([2,0,0,0,2,0,-1,-1,1],t.n),t.i))
j=m.b.a
j.toString
B.b.bZ(j,m.c,!1,k)
m=q.f
k=m.b.a
k.toString
B.b.b3(k,m.c,0)
m=q.r
k=m.b.a
k.toString
B.b.b3(k,m.c,1)
m=q.w
p=p.b
k=p.a
p=p.b
p=l.a(A.q([k,p,1/k,1/p],t.a))
k=m.b.a
k.toString
B.b.aA(k,m.c,p)
p=q.x
q=q.y
m=p.b.a
m.toString
B.b.bY(m,p.c,30/q)
if(7>=$.F.length)return A.d($.F,7)
q=$.F[7]
q.Y()
q.ad()
q.X()
s=s.c.a
s.toString
B.b.L(s,36160,null)
o.a.flush()
o.sap(A.hi())
o.sau(null)
o.ae($.dE().b)
s=$.jJ()
q=s.d
p=q.a.a
p.toString
B.b.aa(p,q.b)
q=$.mu()
p=s.e
m=p.b.a
m.toString
B.b.b3(m,p.c,2)
s=s.f
q=l.a(q.a)
l=s.b.a
l.toString
B.b.bZ(l,s.c,!1,q)
if(7>=$.F.length)return A.d($.F,7)
s=$.F[7]
s.Y()
s.ad()
s.X()
o.a.flush()},
n1(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=t.n,c=t.i
$.of=new A.U(A.J(A.q([45,0,0,0,0,45,0,0,0,0,45,0,0,0,0,1],d),c))
s=[B.w,B.x,B.y]
for(r=0;r<9;){++r
q=r*0.3141592653589793
p=B.c.d6(Math.cos(q-1.5707963267948966)*12)
o=6.283185307179586/p
for(n=0;n<p;++n){m=n*o
l=Math.sin(q)*Math.cos(m)
k=Math.cos(q)
j=Math.sin(q)*Math.sin(m)
i=new A.Q(l,k,j)
h=$.mt()
g=h.dl(3)
if(!(g>=0&&g<3))return A.d(s,g)
g=s[g].a
if(!(g<9))return A.d(B.h,g)
g=new A.e6(B.h[g],new A.U(A.q([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],d)))
j=A.J(A.q([1,0,0,0,0,1,0,0,0,0,1,0,l*40,k*40,j*40,1],d),c)
f=new A.Q(0,0,0)
f.cf(A.iu(new A.Q(0,1,0),i))
e=A.iu(i,f)
k=A.J(A.J(A.q([f.a,f.b,f.c,0,e.a,e.b,e.c,0,i.a,i.b,i.c,0,0,0,0,1],d),c),c)
l=A.ac(16,0,!1,c)
new A.Y(l).P(new A.U(j),new A.U(k))
l=A.J(A.J(l,c),c)
h=A.ll(A.jY(A.c5(new A.Q(0,0,1),(h.dk()*2-1)*3.141592653589793*0.5)))
k=A.ac(16,0,!1,c)
new A.Y(k).P(new A.U(l),h)
k=A.J(A.J(k,c),c)
h=A.ll(A.jY(A.c5(new A.Q(1,0,0),0.6283185307179586)))
l=A.ac(16,0,!1,c)
new A.Y(l).P(new A.U(k),h)
l=A.J(A.J(l,c),c)
h=A.J(A.q([1,0,0,0,0,1,0,0,0,0,1,0,0,-3,0,1],d),c)
k=A.ac(16,0,!1,c)
new A.Y(k).P(new A.U(l),new A.U(h))
g.b=new A.U(A.J(A.J(k,c),c))
B.a.k($.au,g)}}},
kS(){var s,r,q,p,o,n,m=$.bW(),l=$.dE(),k=A.q([],t.s)
m.c7(l.a,new A.i7(!0,!0,k))
l=$.jD()
l.c=m
k=m.a.createBuffer()
k.toString
l.d=k
k=m.a.createBuffer()
k.toString
l.e=k
k=l.c.a
k.toString
B.b.ao(k,34963,l.d)
k=l.c.a
k.toString
B.b.ao(k,34962,l.e)
l.c.a.bufferData(34963,l.a,35044)
l.c.a.bufferData(34962,l.b,35044)
for(l=$.F.length,s=0;s<l;++s)$.F[s].e=m
l=$.h8()
k=$.dC()
l.aG(m,k,!0)
r=$.h9()
r.aG(m,k,!0)
q=$.jH()
q.D(m,k)
k=$.jJ()
p=k.d
o=A.lk()
n=A.lj()
A.I(o)
A.I(n)
p.a=m
p.b=p.a2(o,n,k.c)
k.e.D(m,p)
k.f.D(m,p)
p=$.jE()
k=p.d
n=A.kI()
o=A.kH()
A.I(n)
A.I(o)
k.a=m
k.b=k.a2(n,o,p.c)
p.e.D(m,k)
p.f.D(m,k)
k=$.jF()
p=k.d
o=A.lg()
n=A.lf()
A.I(o)
A.I(n)
p.a=m
p.b=p.a2(o,n,k.c)
k.r.D(m,p)
k.w.D(m,p)
k.e.D(m,p)
k.f.D(m,p)
p=$.jL()
k=p.d
n=A.lq()
o=A.lp()
A.I(n)
A.I(o)
k.a=m
k.b=k.a2(n,o,p.c)
p.e.D(m,k)
p.f.D(m,k)
p.r.D(m,k)
p.w.D(m,k)
k=$.jI()
k.y=8
p=k.d
o=A.l3()
n=A.l2(8)
A.I(o)
A.I(n)
p.a=m
p.b=p.a2(o,n,k.c)
k.e.D(m,p)
k.f.D(m,p)
k.r.D(m,p)
k.w.D(m,p)
k.x.D(m,p)
l.f.ac(0)
r=r.f
r.ac(1)
r.bc(9728)
q.f.ac(2)},
kL(){var s,r,q
for(s=$.F.length,r=0;r<s;++r)$.F[r].e=null
B.a.G($.F)
s=$.jJ()
s.d.E()
q=s.e
q.b=q.c=null
s=s.f
s.b=s.c=null
s=$.jE()
s.d.E()
q=s.e
q.b=q.c=null
s=s.f
s.b=s.c=null
s=$.jF()
s.d.E()
q=s.r
q.b=q.c=null
q=s.w
q.b=q.c=null
q=s.e
q.b=q.c=null
s=s.f
s.b=s.c=null
s=$.jL()
s.d.E()
q=s.e
q.b=q.c=null
q=s.f
q.b=q.c=null
q=s.r
q.b=q.c=null
s=s.w
s.b=s.c=null
s=$.jI()
s.d.E()
q=s.e
q.b=q.c=null
q=s.f
q.b=q.c=null
q=s.r
q.b=q.c=null
q=s.w
q.b=q.c=null
s=s.x
s.b=s.c=null
$.h8().E()
$.h9().E()
$.jH().E()
s=$.jD()
q=s.c.a
q.toString
B.b.ao(q,34963,null)
q=s.c.a
q.toString
B.b.ao(q,34962,null)
q=s.c.a
q.toString
B.b.bM(q,s.d)
q=s.c.a
q.toString
B.b.bM(q,s.e)
s.c=null
$.bW().a=null},
ns(){var s,r,q,p,o,n,m,l=$.h8(),k=l.c.a
k.toString
B.b.L(k,36160,l.d)
l=$.bW()
l.sap(A.hi())
l.sau(new A.dU())
l.ae($.dC())
l.aE(A.jP())
l=$.jE()
k=l.d
s=k.a.a
s.toString
B.b.aa(s,k.b)
k=$.dD()
s=A.b5(k.a,$.h7())
r=l.e
q=t.r
p=q.a(new A.cq(0.1,0.1,0.1,1).gbV())
o=r.b.a
o.toString
B.b.aA(o,r.c,p)
l=l.f
s=q.a(s.a)
q=l.b.a
q.toString
B.b.Z(q,l.c,!1,s)
if(8>=$.F.length)return A.d($.F,8)
l=$.F[8]
l.Y()
l.ad()
l.X()
l=$.jF()
s=l.d
r=s.a.a
r.toString
B.b.aa(r,s.b)
k=k.a
l.cc($.ms(),k)
for(k=$.au.length,n=0;n<$.au.length;$.au.length===k||(0,A.V)($.au),++n){m=$.au[n]
l.cb(new A.cq(1,1,1,1),m.b)
s=m.a
if(m.d){s=s.a+1
if(!(s<9))return A.d(B.h,s)
s=B.h[s]}s=s.a
if(!(s<$.F.length))return A.d($.F,s)
s=$.F[s]
s.Y()
r=s.a
s.e.a.drawElements(s.d,r.a,r.c,r.b)
s.X()}l=$.h8().c.a
l.toString
B.b.L(l,36160,null)
$.bW().a.flush()},
nt(a){var s,r,q,p,o,n,m,l,k,j=$.h9(),i=j.c.a
i.toString
B.b.L(i,36160,j.d)
j=$.bW()
j.sap(A.hi())
j.sau(new A.dU())
j.ae($.dC())
j.aE(A.jP())
j=$.jL()
i=j.d
s=i.a.a
s.toString
B.b.aa(s,i.b)
j.cd(a,0.016666666666666666,30,2.4)
i=$.dD()
s=A.b5(i.a,$.h7())
r=A.b5($.jK(),$.h7())
j.b9(A.b5($.kv(),$.h7()),s,r)
if(8>=$.F.length)return A.d($.F,8)
r=$.F[8]
r.Y()
r.ad()
r.X()
for(s=$.au.length,r=t.i,q=0;q<$.au.length;$.au.length===s||(0,A.V)($.au),++q){p=$.au[q]
o=i.a
n=p.b
m=new A.Y(A.ac(16,0,!1,r))
m.P(o,n)
n=$.jK()
o=p.b
l=new A.Y(A.ac(16,0,!1,r))
l.P(n,o)
o=$.kv()
n=p.b
k=new A.Y(A.ac(16,0,!1,r))
k.P(o,n)
j.b9(k,m,l)
o=p.a
if(p.d){o=o.a+1
if(!(o<9))return A.d(B.h,o)
o=B.h[o]}o=o.a
if(!(o<$.F.length))return A.d($.F,o)
o=$.F[o]
o.Y()
n=o.a
o.e.a.drawElements(o.d,n.a,n.c,n.b)
o.X()}j=$.h9().c.a
j.toString
B.b.L(j,36160,null)
$.bW().a.flush()},
e6:function e6(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=!1},
jv:function jv(){},
jq:function jq(){},
jr:function jr(){},
js:function js(){},
jt:function jt(){},
ju:function ju(){},
aq:function aq(a,b){this.a=a
this.b=b},
ma(a){return t.fK.b(a)||t.A.b(a)||t.dz.b(a)||t.gb.b(a)||t.G.b(a)||t.g4.b(a)||t.g2.b(a)},
pp(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},B={}
var w=[A,J,B]
var $={}
A.jW.prototype={}
J.c0.prototype={
J(a,b){return a===b},
gv(a){return A.cT(a)},
m(a){return"Instance of '"+A.i4(a)+"'"},
bR(a,b){throw A.b(A.l4(a,t.B.a(b)))},
gF(a){return A.bU(A.ke(this))}}
J.e7.prototype={
m(a){return String(a)},
gv(a){return a?519018:218159},
gF(a){return A.bU(t.y)},
$iC:1,
$ijj:1}
J.cD.prototype={
J(a,b){return null==b},
m(a){return"null"},
gv(a){return 0},
$iC:1,
$iL:1}
J.a.prototype={}
J.bI.prototype={
gv(a){return 0},
m(a){return String(a)}}
J.ew.prototype={}
J.bO.prototype={}
J.aK.prototype={
m(a){var s=a[$.h5()]
if(s==null)return this.c4(a)
return"JavaScript function for "+J.dG(s)},
$ibz:1}
J.bF.prototype={
gv(a){return 0},
m(a){return String(a)}}
J.bG.prototype={
gv(a){return 0},
m(a){return String(a)}}
J.z.prototype={
k(a,b){A.aQ(a).c.a(b)
if(!!a.fixed$length)A.bt(A.D("add"))
a.push(b)},
R(a,b){var s
A.aQ(a).h("f<1>").a(b)
if(!!a.fixed$length)A.bt(A.D("addAll"))
if(Array.isArray(b)){this.ct(a,b)
return}for(s=J.aT(b);s.A();)a.push(s.gC(s))},
ct(a,b){var s,r
t.b.a(b)
s=b.length
if(s===0)return
if(a===b)throw A.b(A.a1(a))
for(r=0;r<s;++r)a.push(b[r])},
G(a){if(!!a.fixed$length)A.bt(A.D("clear"))
a.length=0},
q(a,b){var s,r
A.aQ(a).h("~(1)").a(b)
s=a.length
for(r=0;r<s;++r){b.$1(a[r])
if(a.length!==s)throw A.b(A.a1(a))}},
aw(a,b,c){var s=A.aQ(a)
return new A.b4(a,s.u(c).h("1(2)").a(b),s.h("@<1>").u(c).h("b4<1,2>"))},
d7(a,b,c,d){var s,r,q
d.a(b)
A.aQ(a).u(d).h("1(1,2)").a(c)
s=a.length
for(r=b,q=0;q<s;++q){r=c.$2(r,a[q])
if(a.length!==s)throw A.b(A.a1(a))}return r},
p(a,b){if(!(b<a.length))return A.d(a,b)
return a[b]},
gB(a){if(a.length>0)return a[0]
throw A.b(A.kU())},
bL(a,b){var s
for(s=0;s<a.length;++s)if(J.ha(a[s],b))return!0
return!1},
m(a){return A.kV(a,"[","]")},
gH(a){return new J.bu(a,a.length,A.aQ(a).h("bu<1>"))},
gv(a){return A.cT(a)},
gl(a){return a.length},
j(a,b){A.r(b)
if(!(b>=0&&b<a.length))throw A.b(A.h3(a,b))
return a[b]},
i(a,b,c){A.aQ(a).c.a(c)
if(!!a.immutable$list)A.bt(A.D("indexed set"))
if(!(b>=0&&b<a.length))throw A.b(A.h3(a,b))
a[b]=c},
t(a,b){var s=A.aQ(a)
s.h("l<1>").a(b)
s=A.ee(a,s.c)
this.R(s,b)
return s},
$ik:1,
$if:1,
$il:1}
J.hH.prototype={}
J.bu.prototype={
gC(a){var s=this.d
return s==null?this.$ti.c.a(s):s},
A(){var s,r=this,q=r.a,p=q.length
if(r.b!==p){q=A.V(q)
throw A.b(q)}s=r.c
if(s>=p){r.sbp(null)
return!1}r.sbp(q[s]);++r.c
return!0},
sbp(a){this.d=this.$ti.h("1?").a(a)},
$ial:1}
J.bE.prototype={
aW(a,b){var s
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=B.f.gaY(b)
if(this.gaY(a)===s)return 0
if(this.gaY(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gaY(a){return a===0?1/a<0:a<0},
d6(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw A.b(A.D(""+a+".floor()"))},
W(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.b(A.D(""+a+".round()"))},
aV(a,b,c){if(B.f.aW(b,c)>0)throw A.b(A.m3(b))
if(this.aW(a,b)<0)return b
if(this.aW(a,c)>0)return c
return a},
m(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gv(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
t(a,b){return a+b},
n(a,b){return a*b},
c_(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
cP(a,b){return(a|0)===a?a/b|0:this.cQ(a,b)},
cQ(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.b(A.D("Result of truncating division is "+A.m(s)+": "+A.m(a)+" ~/ "+b))},
bC(a,b){var s
if(a>0)s=this.cN(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
cN(a,b){return b>31?0:a>>>b},
gF(a){return A.bU(t.H)},
$iw:1,
$iN:1}
J.cC.prototype={
gF(a){return A.bU(t.S)},
$iC:1,
$ih:1}
J.e9.prototype={
gF(a){return A.bU(t.i)},
$iC:1}
J.bh.prototype={
t(a,b){A.I(b)
return a+b},
n(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.b(B.O)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
m(a){return a},
gv(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gF(a){return A.bU(t.N)},
gl(a){return a.length},
j(a,b){A.r(b)
if(!(b>=0&&b<a.length))throw A.b(A.h3(a,b))
return a[b]},
$iC:1,
$io:1}
A.cH.prototype={
m(a){return"LateInitializationError: "+this.a}}
A.jx.prototype={
$0(){var s=new A.K($.E,t.ck)
s.af(null)
return s},
$S:15}
A.ia.prototype={}
A.k.prototype={}
A.an.prototype={
gH(a){var s=this
return new A.bJ(s,s.gl(s),A.x(s).h("bJ<an.E>"))},
q(a,b){var s,r,q=this
A.x(q).h("~(an.E)").a(b)
s=q.gl(q)
for(r=0;r<s;++r){b.$1(q.p(0,r))
if(s!==q.gl(q))throw A.b(A.a1(q))}},
aw(a,b,c){var s=A.x(this)
return new A.b4(this,s.u(c).h("1(an.E)").a(b),s.h("@<an.E>").u(c).h("b4<1,2>"))}}
A.bJ.prototype={
gC(a){var s=this.d
return s==null?this.$ti.c.a(s):s},
A(){var s,r=this,q=r.a,p=J.aH(q),o=p.gl(q)
if(r.b!==o)throw A.b(A.a1(q))
s=r.c
if(s>=o){r.sa3(null)
return!1}r.sa3(p.p(q,s));++r.c
return!0},
sa3(a){this.d=this.$ti.h("1?").a(a)},
$ial:1}
A.bK.prototype={
gH(a){var s=A.x(this)
return new A.aB(J.aT(this.a),this.b,s.h("@<1>").u(s.z[1]).h("aB<1,2>"))},
gl(a){return J.dF(this.a)}}
A.cy.prototype={$ik:1}
A.aB.prototype={
A(){var s=this,r=s.b
if(r.A()){s.sa3(s.c.$1(r.gC(r)))
return!0}s.sa3(null)
return!1},
gC(a){var s=this.a
return s==null?this.$ti.z[1].a(s):s},
sa3(a){this.a=this.$ti.h("2?").a(a)},
$ial:1}
A.b4.prototype={
gl(a){return J.dF(this.a)},
p(a,b){return this.b.$1(J.mE(this.a,b))}}
A.X.prototype={}
A.c8.prototype={
gv(a){var s=this._hashCode
if(s!=null)return s
s=664597*B.p.gv(this.a)&536870911
this._hashCode=s
return s},
m(a){return'Symbol("'+this.a+'")'},
J(a,b){if(b==null)return!1
return b instanceof A.c8&&this.a===b.a},
$ic9:1}
A.cs.prototype={}
A.cr.prototype={
m(a){return A.hQ(this)},
$iO:1}
A.ct.prototype={
gl(a){return this.b.length},
gbv(){var s=this.$keys
if(s==null){s=Object.keys(this.a)
this.$keys=s}return s},
a6(a,b){if(typeof b!="string")return!1
if("__proto__"===b)return!1
return this.a.hasOwnProperty(b)},
j(a,b){if(!this.a6(0,b))return null
return this.b[this.a[b]]},
q(a,b){var s,r,q,p
this.$ti.h("~(1,2)").a(b)
s=this.gbv()
r=this.b
for(q=s.length,p=0;p<q;++p)b.$2(s[p],r[p])},
gI(a){return new A.dc(this.gbv(),this.$ti.h("dc<1>"))}}
A.dc.prototype={
gl(a){return this.a.length},
gH(a){var s=this.a
return new A.dd(s,s.length,this.$ti.h("dd<1>"))}}
A.dd.prototype={
gC(a){var s=this.d
return s==null?this.$ti.c.a(s):s},
A(){var s=this,r=s.c
if(r>=s.b){s.sa4(null)
return!1}s.sa4(s.a[r]);++s.c
return!0},
sa4(a){this.d=this.$ti.h("1?").a(a)},
$ial:1}
A.e8.prototype={
gdi(){var s=this.a
return s},
gdn(){var s,r,q,p,o=this
if(o.c===1)return B.q
s=o.d
r=s.length-o.e.length-o.f
if(r===0)return B.q
q=[]
for(p=0;p<r;++p){if(!(p<s.length))return A.d(s,p)
q.push(s[p])}q.fixed$length=Array
q.immutable$list=Array
return q},
gdj(){var s,r,q,p,o,n,m,l,k=this
if(k.c!==0)return B.r
s=k.e
r=s.length
q=k.d
p=q.length-r-k.f
if(r===0)return B.r
o=new A.b1(t.eo)
for(n=0;n<r;++n){if(!(n<s.length))return A.d(s,n)
m=s[n]
l=p+n
if(!(l>=0&&l<q.length))return A.d(q,l)
o.i(0,new A.c8(m),q[l])}return new A.cs(o,t.gF)},
$ikT:1}
A.i3.prototype={
$2(a,b){var s
A.I(a)
s=this.a
s.b=s.b+"$"+a
B.a.k(this.b,a)
B.a.k(this.c,b);++s.a},
$S:2}
A.iq.prototype={
M(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
A.cS.prototype={
m(a){return"Null check operator used on a null value"}}
A.ea.prototype={
m(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.eW.prototype={
m(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.i0.prototype={
m(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.dm.prototype={
m(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$ias:1}
A.bg.prototype={
m(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.mf(r==null?"unknown":r)+"'"},
$ibz:1,
gdu(){return this},
$C:"$1",
$R:1,
$D:null}
A.dO.prototype={$C:"$0",$R:0}
A.dP.prototype={$C:"$2",$R:2}
A.eM.prototype={}
A.eJ.prototype={
m(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.mf(s)+"'"}}
A.bX.prototype={
J(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.bX))return!1
return this.$_target===b.$_target&&this.a===b.a},
gv(a){return(A.jy(this.a)^A.cT(this.$_target))>>>0},
m(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.i4(this.a)+"'")}}
A.f8.prototype={
m(a){return"Reading static variable '"+this.a+"' during its initialization"}}
A.eD.prototype={
m(a){return"RuntimeError: "+this.a}}
A.f3.prototype={
m(a){return"Assertion failed: "+A.by(this.a)}}
A.j0.prototype={}
A.b1.prototype={
gl(a){return this.a},
gI(a){return new A.aA(this,A.x(this).h("aA<1>"))},
gb4(a){var s=A.x(this)
return A.l_(new A.aA(this,s.h("aA<1>")),new A.hI(this),s.c,s.z[1])},
a6(a,b){var s=this.b
if(s==null)return!1
return s[b]!=null},
j(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.de(b)},
de(a){var s,r,q=this.d
if(q==null)return null
s=q[this.bP(a)]
r=this.bQ(s,a)
if(r<0)return null
return s[r].b},
i(a,b,c){var s,r,q,p,o,n,m=this,l=A.x(m)
l.c.a(b)
l.z[1].a(c)
if(typeof b=="string"){s=m.b
m.bg(s==null?m.b=m.aM():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=m.c
m.bg(r==null?m.c=m.aM():r,b,c)}else{q=m.d
if(q==null)q=m.d=m.aM()
p=m.bP(b)
o=q[p]
if(o==null)q[p]=[m.aN(b,c)]
else{n=m.bQ(o,b)
if(n>=0)o[n].b=c
else o.push(m.aN(b,c))}}},
G(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.by()}},
q(a,b){var s,r,q=this
A.x(q).h("~(1,2)").a(b)
s=q.e
r=q.r
for(;s!=null;){b.$2(s.a,s.b)
if(r!==q.r)throw A.b(A.a1(q))
s=s.c}},
bg(a,b,c){var s,r=A.x(this)
r.c.a(b)
r.z[1].a(c)
s=a[b]
if(s==null)a[b]=this.aN(b,c)
else s.b=c},
by(){this.r=this.r+1&1073741823},
aN(a,b){var s=this,r=A.x(s),q=new A.hO(r.c.a(a),r.z[1].a(b))
if(s.e==null)s.e=s.f=q
else s.f=s.f.c=q;++s.a
s.by()
return q},
bP(a){return J.jN(a)&1073741823},
bQ(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.ha(a[r].a,b))return r
return-1},
m(a){return A.hQ(this)},
aM(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
$ikZ:1}
A.hI.prototype={
$1(a){var s=this.a,r=A.x(s)
s=s.j(0,r.c.a(a))
return s==null?r.z[1].a(s):s},
$S(){return A.x(this.a).h("2(1)")}}
A.hO.prototype={}
A.aA.prototype={
gl(a){return this.a.a},
gH(a){var s=this.a,r=new A.cI(s,s.r,this.$ti.h("cI<1>"))
r.c=s.e
return r},
q(a,b){var s,r,q
this.$ti.h("~(1)").a(b)
s=this.a
r=s.e
q=s.r
for(;r!=null;){b.$1(r.a)
if(q!==s.r)throw A.b(A.a1(s))
r=r.c}}}
A.cI.prototype={
gC(a){return this.d},
A(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.b(A.a1(q))
s=r.c
if(s==null){r.sa4(null)
return!1}else{r.sa4(s.a)
r.c=s.c
return!0}},
sa4(a){this.d=this.$ti.h("1?").a(a)},
$ial:1}
A.jm.prototype={
$1(a){return this.a(a)},
$S:7}
A.jn.prototype={
$2(a,b){return this.a(a,b)},
$S:38}
A.jo.prototype={
$1(a){return this.a(A.I(a))},
$S:19}
A.iH.prototype={
al(){var s=this.b
if(s===this)throw A.b(new A.cH("Local '"+this.a+"' has not been initialized."))
return s}}
A.ek.prototype={
gF(a){return B.a7},
cW(a,b,c){A.ja(a,b,c)
return c==null?new Uint8Array(a,b):new Uint8Array(a,b,c)},
cV(a){return this.cW(a,0,null)},
$iC:1}
A.cO.prototype={$iP:1}
A.el.prototype={
gF(a){return B.a8},
$iC:1}
A.c3.prototype={
gl(a){return a.length},
$iu:1}
A.cM.prototype={
j(a,b){A.r(b)
A.ba(b,a,a.length)
return a[b]},
i(a,b,c){A.dw(c)
A.ba(b,a,a.length)
a[b]=c},
$ik:1,
$if:1,
$il:1}
A.cN.prototype={
i(a,b,c){A.r(c)
A.ba(b,a,a.length)
a[b]=c},
$ik:1,
$if:1,
$il:1}
A.cL.prototype={
gF(a){return B.a9},
$iC:1,
$ijS:1}
A.em.prototype={
gF(a){return B.aa},
$iC:1}
A.en.prototype={
gF(a){return B.ab},
j(a,b){A.r(b)
A.ba(b,a,a.length)
return a[b]},
$iC:1}
A.eo.prototype={
gF(a){return B.ac},
j(a,b){A.r(b)
A.ba(b,a,a.length)
return a[b]},
$iC:1}
A.ep.prototype={
gF(a){return B.ad},
j(a,b){A.r(b)
A.ba(b,a,a.length)
return a[b]},
$iC:1}
A.cP.prototype={
gF(a){return B.af},
j(a,b){A.r(b)
A.ba(b,a,a.length)
return a[b]},
$iC:1,
$ik2:1}
A.eq.prototype={
gF(a){return B.ag},
j(a,b){A.r(b)
A.ba(b,a,a.length)
return a[b]},
$iC:1}
A.cQ.prototype={
gF(a){return B.ah},
gl(a){return a.length},
j(a,b){A.r(b)
A.ba(b,a,a.length)
return a[b]},
$iC:1}
A.er.prototype={
gF(a){return B.ai},
gl(a){return a.length},
j(a,b){A.r(b)
A.ba(b,a,a.length)
return a[b]},
$iC:1,
$ieT:1}
A.df.prototype={}
A.dg.prototype={}
A.dh.prototype={}
A.di.prototype={}
A.ar.prototype={
h(a){return A.j6(v.typeUniverse,this,a)},
u(a){return A.o1(v.typeUniverse,this,a)}}
A.fi.prototype={}
A.j5.prototype={
m(a){return A.a8(this.a,null)}}
A.ff.prototype={
m(a){return this.a}}
A.dq.prototype={$ib7:1}
A.iD.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:12}
A.iC.prototype={
$1(a){var s,r
this.a.a=t.M.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:42}
A.iE.prototype={
$0(){this.a.$0()},
$S:8}
A.iF.prototype={
$0(){this.a.$0()},
$S:8}
A.j3.prototype={
cs(a,b){if(self.setTimeout!=null)self.setTimeout(A.aR(new A.j4(this,b),0),a)
else throw A.b(A.D("`setTimeout()` not found."))}}
A.j4.prototype={
$0(){this.b.$0()},
$S:0}
A.co.prototype={
m(a){return A.m(this.a)},
$iG:1,
ga_(){return this.b}}
A.a7.prototype={}
A.aG.prototype={
aP(){},
aQ(){},
sa5(a){this.ch=this.$ti.h("aG<1>?").a(a)},
sak(a){this.CW=this.$ti.h("aG<1>?").a(a)}}
A.d0.prototype={
gbx(){return this.c<4},
cK(a){var s,r
A.x(this).h("aG<1>").a(a)
s=a.CW
r=a.ch
if(s==null)this.sbr(r)
else s.sa5(r)
if(r==null)this.sbw(s)
else r.sak(s)
a.sak(a)
a.sa5(a)},
cO(a,b,c,d){var s,r,q,p,o,n,m=this,l=A.x(m)
l.h("~(1)?").a(a)
t.Y.a(c)
if((m.c&4)!==0){l=new A.cb($.E,l.h("cb<1>"))
A.kn(l.gcF())
if(c!=null)l.saO(t.M.a(c))
return l}s=$.E
r=d?1:0
q=A.lt(s,a,l.c)
A.nH(s,b)
p=c==null?A.oX():c
l=l.h("aG<1>")
o=new A.aG(m,q,t.M.a(p),s,r,l)
o.sak(o)
o.sa5(o)
l.a(o)
o.ay=m.c&1
n=m.e
m.sbw(o)
o.sa5(null)
o.sak(n)
if(n==null)m.sbr(o)
else n.sa5(o)
if(m.d==m.e)A.m_(m.a)
return o},
cI(a){var s=this,r=A.x(s)
a=r.h("aG<1>").a(r.h("aM<1>").a(a))
if(a.ch===a)return null
r=a.ay
if((r&2)!==0)a.ay=r|4
else{s.cK(a)
if((s.c&2)===0&&s.d==null)s.cz()}return null},
bf(){if((this.c&4)!==0)return new A.bN("Cannot add new events after calling close")
return new A.bN("Cannot add new events while doing an addStream")},
k(a,b){var s=this
A.x(s).c.a(b)
if(!s.gbx())throw A.b(s.bf())
s.aT(b)},
aq(a){var s,r,q=this
if((q.c&4)!==0){s=q.r
s.toString
return s}if(!q.gbx())throw A.b(q.bf())
q.c|=4
r=q.r
if(r==null)r=q.r=new A.K($.E,t.cd)
q.aU()
return r},
cz(){if((this.c&4)!==0){var s=this.r
if((s.a&30)===0)s.af(null)}A.m_(this.b)},
sbr(a){this.d=A.x(this).h("aG<1>?").a(a)},
sbw(a){this.e=A.x(this).h("aG<1>?").a(a)},
$icX:1,
$ilE:1,
$ibp:1}
A.aF.prototype={
aT(a){var s,r=this.$ti
r.c.a(a)
for(s=this.d,r=r.h("d4<1>");s!=null;s=s.ch)s.bh(new A.d4(a,r))},
aU(){var s=this.d
if(s!=null)for(;s!=null;s=s.ch)s.bh(B.P)
else this.r.af(null)}}
A.hz.prototype={
$2(a,b){var s,r,q=this
t.K.a(a)
t.l.a(b)
s=q.a
r=--s.b
if(s.a!=null){s.a=null
if(s.b===0||q.c)q.d.K(a,b)
else{q.e.b=a
q.f.b=b}}else if(r===0&&!q.c)q.d.K(q.e.al(),q.f.al())},
$S:4}
A.hy.prototype={
$1(a){var s,r,q=this,p=q.w
p.a(a)
r=q.a;--r.b
s=r.a
if(s!=null){J.mA(s,q.b,a)
if(r.b===0)q.c.ah(A.J(s,p))}else if(r.b===0&&!q.e)q.c.K(q.f.al(),q.r.al())},
$S(){return this.w.h("L(0)")}}
A.d1.prototype={
bK(a,b){var s
A.dA(a,"error",t.K)
s=this.a
if((s.a&30)!==0)throw A.b(A.M("Future already completed"))
b=A.jO(a)
s.bi(a,b)},
ar(a){return this.bK(a,null)}}
A.bQ.prototype={
bJ(a,b){var s,r=this.$ti
r.h("1/?").a(b)
s=this.a
if((s.a&30)!==0)throw A.b(A.M("Future already completed"))
s.af(r.h("1/").a(b))}}
A.bR.prototype={
dh(a){if((this.c&15)!==6)return!0
return this.b.b.b0(t.al.a(this.d),a.a,t.y,t.K)},
dd(a){var s,r=this,q=r.e,p=null,o=t.z,n=t.K,m=a.a,l=r.b.b
if(t.C.b(q))p=l.dq(q,m,a.b,o,n,t.l)
else p=l.b0(t.v.a(q),m,o,n)
try{o=r.$ti.h("2/").a(p)
return o}catch(s){if(t.eK.b(A.aS(s))){if((r.c&1)!==0)throw A.b(A.aV("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.b(A.aV("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.K.prototype={
bB(a){this.a=this.a&1|4
this.c=a},
b2(a,b,c){var s,r,q,p=this.$ti
p.u(c).h("1/(2)").a(a)
s=$.E
if(s===B.d){if(b!=null&&!t.C.b(b)&&!t.v.b(b))throw A.b(A.kz(b,"onError",u.c))}else{c.h("@<0/>").u(p.c).h("1(2)").a(a)
if(b!=null)b=A.oF(b,s)}r=new A.K(s,c.h("K<0>"))
q=b==null?1:3
this.aH(new A.bR(r,q,a,b,p.h("@<1>").u(c).h("bR<1,2>")))
return r},
b1(a,b){return this.b2(a,null,b)},
cM(a){this.a=this.a&1|16
this.c=a},
ag(a){this.a=a.a&30|this.a&1
this.c=a.c},
aH(a){var s,r=this,q=r.a
if(q<=3){a.a=t.F.a(r.c)
r.c=a}else{if((q&4)!==0){s=t.c.a(r.c)
if((s.a&24)===0){s.aH(a)
return}r.ag(s)}A.bT(null,null,r.b,t.M.a(new A.iM(r,a)))}},
aS(a){var s,r,q,p,o,n,m=this,l={}
l.a=a
if(a==null)return
s=m.a
if(s<=3){r=t.F.a(m.c)
m.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){n=t.c.a(m.c)
if((n.a&24)===0){n.aS(a)
return}m.ag(n)}l.a=m.an(a)
A.bT(null,null,m.b,t.M.a(new A.iT(l,m)))}},
am(){var s=t.F.a(this.c)
this.c=null
return this.an(s)},
an(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
cA(a){var s,r,q,p=this
p.a^=2
try{a.b2(new A.iQ(p),new A.iR(p),t.P)}catch(q){s=A.aS(q)
r=A.bd(q)
A.kn(new A.iS(p,s,r))}},
bm(a){var s,r=this,q=r.$ti
q.h("1/").a(a)
s=r.am()
q.c.a(a)
r.a=8
r.c=a
A.cc(r,s)},
ah(a){var s,r=this
r.$ti.c.a(a)
s=r.am()
r.a=8
r.c=a
A.cc(r,s)},
K(a,b){var s
t.K.a(a)
t.l.a(b)
s=this.am()
this.cM(A.he(a,b))
A.cc(this,s)},
af(a){var s=this.$ti
s.h("1/").a(a)
if(s.h("ay<1>").b(a)){this.cB(a)
return}this.cw(a)},
cw(a){var s=this
s.$ti.c.a(a)
s.a^=2
A.bT(null,null,s.b,t.M.a(new A.iO(s,a)))},
cB(a){var s=this.$ti
s.h("ay<1>").a(a)
if(s.b(a)){A.nJ(a,this)
return}this.cA(a)},
bi(a,b){t.l.a(b)
this.a^=2
A.bT(null,null,this.b,t.M.a(new A.iN(this,a,b)))},
$iay:1}
A.iM.prototype={
$0(){A.cc(this.a,this.b)},
$S:0}
A.iT.prototype={
$0(){A.cc(this.b,this.a.a)},
$S:0}
A.iQ.prototype={
$1(a){var s,r,q,p=this.a
p.a^=2
try{p.ah(p.$ti.c.a(a))}catch(q){s=A.aS(q)
r=A.bd(q)
p.K(s,r)}},
$S:12}
A.iR.prototype={
$2(a,b){this.a.K(t.K.a(a),t.l.a(b))},
$S:31}
A.iS.prototype={
$0(){this.a.K(this.b,this.c)},
$S:0}
A.iP.prototype={
$0(){A.lw(this.a.a,this.b)},
$S:0}
A.iO.prototype={
$0(){this.a.ah(this.b)},
$S:0}
A.iN.prototype={
$0(){this.a.K(this.b,this.c)},
$S:0}
A.iW.prototype={
$0(){var s,r,q,p,o,n,m=this,l=null
try{q=m.a.a
l=q.b.b.bW(t.O.a(q.d),t.z)}catch(p){s=A.aS(p)
r=A.bd(p)
q=m.c&&t.t.a(m.b.a.c).a===s
o=m.a
if(q)o.c=t.t.a(m.b.a.c)
else o.c=A.he(s,r)
o.b=!0
return}if(l instanceof A.K&&(l.a&24)!==0){if((l.a&16)!==0){q=m.a
q.c=t.t.a(l.c)
q.b=!0}return}if(l instanceof A.K){n=m.b.a
q=m.a
q.c=l.b1(new A.iX(n),t.z)
q.b=!1}},
$S:0}
A.iX.prototype={
$1(a){return this.a},
$S:21}
A.iV.prototype={
$0(){var s,r,q,p,o,n,m,l
try{q=this.a
p=q.a
o=p.$ti
n=o.c
m=n.a(this.b)
q.c=p.b.b.b0(o.h("2/(1)").a(p.d),m,o.h("2/"),n)}catch(l){s=A.aS(l)
r=A.bd(l)
q=this.a
q.c=A.he(s,r)
q.b=!0}},
$S:0}
A.iU.prototype={
$0(){var s,r,q,p,o,n,m=this
try{s=t.t.a(m.a.a.c)
p=m.b
if(p.a.dh(s)&&p.a.e!=null){p.c=p.a.dd(s)
p.b=!1}}catch(o){r=A.aS(o)
q=A.bd(o)
p=t.t.a(m.a.a.c)
n=m.b
if(p.a===r)n.c=p
else n.c=A.he(r,q)
n.b=!0}},
$S:0}
A.f4.prototype={}
A.bl.prototype={
q(a,b){var s,r
A.x(this).h("~(1)").a(b)
s=new A.K($.E,t.c)
r=this.av(null,!0,new A.ig(s),s.gbn())
r.aZ(new A.ih(this,b,r,s))
return s},
gl(a){var s={},r=new A.K($.E,t.fJ)
s.a=0
this.av(new A.ii(s,this),!0,new A.ij(s,r),r.gbn())
return r}}
A.ig.prototype={
$0(){this.a.bm(null)},
$S:0}
A.ih.prototype={
$1(a){var s=this
A.oH(new A.id(s.b,A.x(s.a).c.a(a)),new A.ie(),A.ob(s.c,s.d),t.p)},
$S(){return A.x(this.a).h("~(1)")}}
A.id.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
A.ie.prototype={
$1(a){},
$S:13}
A.ii.prototype={
$1(a){A.x(this.b).c.a(a);++this.a.a},
$S(){return A.x(this.b).h("~(1)")}}
A.ij.prototype={
$0(){this.b.bm(this.a.a)},
$S:0}
A.d2.prototype={
gv(a){return(A.cT(this.a)^892482866)>>>0},
J(a,b){if(b==null)return!1
if(this===b)return!0
return b instanceof A.a7&&b.a===this.a}}
A.d3.prototype={
bz(){return this.w.cI(this)},
aP(){A.x(this.w).h("aM<1>").a(this)},
aQ(){A.x(this.w).h("aM<1>").a(this)}}
A.ca.prototype={
aZ(a){var s=A.x(this)
this.scv(A.lt(this.d,s.h("~(1)?").a(a),s.c))},
V(a){var s=this.e&=4294967279
if((s&8)===0)this.bj()
s=$.jB()
return s},
bj(){var s,r=this,q=r.e|=8
if((q&64)!==0){s=r.r
if(s.a===1)s.a=3}if((q&32)===0)r.saR(null)
r.f=r.bz()},
aP(){},
aQ(){},
bz(){return null},
bh(a){var s,r,q=this,p=q.r
if(p==null){p=new A.dj(A.x(q).h("dj<1>"))
q.saR(p)}s=p.c
if(s==null)p.b=p.c=a
else{s.sa8(0,a)
p.c=a}r=q.e
if((r&64)===0){r|=64
q.e=r
if(r<128)p.b7(q)}},
aT(a){var s,r=this,q=A.x(r).c
q.a(a)
s=r.e
r.e=s|32
r.d.bX(r.a,a,q)
r.e&=4294967263
r.cC((s&4)!==0)},
aU(){this.bj()
this.e|=16
new A.iG(this).$0()},
cC(a){var s,r,q=this,p=q.e
if((p&64)!==0&&q.r.c==null){p=q.e=p&4294967231
if((p&4)!==0)if(p<128){s=q.r
s=s==null?null:s.c==null
s=s!==!1}else s=!1
else s=!1
if(s){p&=4294967291
q.e=p}}for(;!0;a=r){if((p&8)!==0){q.saR(null)
return}r=(p&4)!==0
if(a===r)break
q.e=p^32
if(r)q.aP()
else q.aQ()
p=q.e&=4294967263}if((p&64)!==0&&p<128)q.r.b7(q)},
scv(a){this.a=A.x(this).h("~(1)").a(a)},
saR(a){this.r=A.x(this).h("dj<1>?").a(a)},
$iaM:1,
$ibp:1}
A.iG.prototype={
$0(){var s=this.a,r=s.e
if((r&16)===0)return
s.e=r|42
s.d.b_(s.c)
s.e&=4294967263},
$S:0}
A.cg.prototype={
av(a,b,c,d){var s=this.$ti
s.h("~(1)?").a(a)
t.Y.a(c)
return this.a.cO(s.h("~(1)?").a(a),d,c,b===!0)},
a7(a){return this.av(a,null,null,null)}}
A.bo.prototype={
sa8(a,b){this.a=t.ev.a(b)},
ga8(a){return this.a}}
A.d4.prototype={
bS(a){this.$ti.h("bp<1>").a(a).aT(this.b)}}
A.f9.prototype={
bS(a){a.aU()},
ga8(a){return null},
sa8(a,b){throw A.b(A.M("No events after a done."))},
$ibo:1}
A.dj.prototype={
b7(a){var s,r=this
r.$ti.h("bp<1>").a(a)
s=r.a
if(s===1)return
if(s>=1){r.a=1
return}A.kn(new A.j_(r,a))
r.a=1}}
A.j_.prototype={
$0(){var s,r,q,p=this.a,o=p.a
p.a=0
if(o===3)return
s=p.$ti.h("bp<1>").a(this.b)
r=p.b
q=r.ga8(r)
p.b=q
if(q==null)p.c=null
r.bS(s)},
$S:0}
A.cb.prototype={
aZ(a){this.$ti.h("~(1)?").a(a)},
V(a){this.a=-1
this.saO(null)
return $.jB()},
cG(){var s,r,q,p=this,o=p.a-1
if(o===0){p.a=-1
s=p.c
if(s!=null){r=s
q=!0}else{r=null
q=!1}if(q){p.saO(null)
p.b.b_(r)}}else p.a=o},
saO(a){this.c=t.Y.a(a)},
$iaM:1}
A.j9.prototype={
$0(){return this.a.K(this.b,this.c)},
$S:0}
A.j8.prototype={
$2(a,b){A.oa(this.a,this.b,a,t.l.a(b))},
$S:4}
A.dv.prototype={$ils:1}
A.jf.prototype={
$0(){A.mV(this.a,this.b)},
$S:0}
A.fA.prototype={
b_(a){var s,r,q
t.M.a(a)
try{if(B.d===$.E){a.$0()
return}A.lX(null,null,this,a,t.p)}catch(q){s=A.aS(q)
r=A.bd(q)
A.h2(t.K.a(s),t.l.a(r))}},
bX(a,b,c){var s,r,q
c.h("~(0)").a(a)
c.a(b)
try{if(B.d===$.E){a.$1(b)
return}A.lY(null,null,this,a,b,t.p,c)}catch(q){s=A.aS(q)
r=A.bd(q)
A.h2(t.K.a(s),t.l.a(r))}},
bG(a){return new A.j1(this,t.M.a(a))},
cX(a,b){return new A.j2(this,b.h("~(0)").a(a),b)},
j(a,b){return null},
bW(a,b){b.h("0()").a(a)
if($.E===B.d)return a.$0()
return A.lX(null,null,this,a,b)},
b0(a,b,c,d){c.h("@<0>").u(d).h("1(2)").a(a)
d.a(b)
if($.E===B.d)return a.$1(b)
return A.lY(null,null,this,a,b,c,d)},
dq(a,b,c,d,e,f){d.h("@<0>").u(e).u(f).h("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.E===B.d)return a.$2(b,c)
return A.oG(null,null,this,a,b,c,d,e,f)},
bT(a,b,c,d){return b.h("@<0>").u(c).u(d).h("1(2,3)").a(a)}}
A.j1.prototype={
$0(){return this.a.b_(this.b)},
$S:0}
A.j2.prototype={
$1(a){var s=this.c
return this.a.bX(this.b,s.a(a),s)},
$S(){return this.c.h("~(0)")}}
A.d8.prototype={
gl(a){return this.a},
gI(a){return new A.d9(this,this.$ti.h("d9<1>"))},
a6(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
return s==null?!1:s[b]!=null}else if(typeof b=="number"&&(b&1073741823)===b){r=this.c
return r==null?!1:r[b]!=null}else return this.cD(b)},
cD(a){var s=this.d
if(s==null)return!1
return this.aL(this.bs(s,a),a)>=0},
j(a,b){var s,r,q
if(typeof b=="string"&&b!=="__proto__"){s=this.b
r=s==null?null:A.lx(s,b)
return r}else if(typeof b=="number"&&(b&1073741823)===b){q=this.c
r=q==null?null:A.lx(q,b)
return r}else return this.cE(0,b)},
cE(a,b){var s,r,q=this.d
if(q==null)return null
s=this.bs(q,b)
r=this.aL(s,b)
return r<0?null:s[r+1]},
i(a,b,c){var s,r,q,p,o=this,n=o.$ti
n.c.a(b)
n.z[1].a(c)
s=o.d
if(s==null)s=o.d=A.nK()
r=A.jy(b)&1073741823
q=s[r]
if(q==null){A.ly(s,r,[b,c]);++o.a
o.e=null}else{p=o.aL(q,b)
if(p>=0)q[p+1]=c
else{q.push(b,c);++o.a
o.e=null}}},
q(a,b){var s,r,q,p,o,n,m=this,l=m.$ti
l.h("~(1,2)").a(b)
s=m.aI()
for(r=s.length,q=l.c,l=l.z[1],p=0;p<r;++p){o=s[p]
q.a(o)
n=m.j(0,o)
b.$2(o,n==null?l.a(n):n)
if(s!==m.e)throw A.b(A.a1(m))}},
aI(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.e
if(h!=null)return h
h=A.ac(i.a,null,!1,t.z)
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
bs(a,b){return a[A.jy(b)&1073741823]}}
A.db.prototype={
aL(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=0;r<s;r+=2){q=a[r]
if(q==null?b==null:q===b)return r}return-1}}
A.d9.prototype={
gl(a){return this.a.a},
gH(a){var s=this.a
return new A.da(s,s.aI(),this.$ti.h("da<1>"))},
q(a,b){var s,r,q,p
this.$ti.h("~(1)").a(b)
s=this.a
r=s.aI()
for(q=r.length,p=0;p<q;++p){b.$1(r[p])
if(r!==s.e)throw A.b(A.a1(s))}}}
A.da.prototype={
gC(a){var s=this.d
return s==null?this.$ti.c.a(s):s},
A(){var s=this,r=s.b,q=s.c,p=s.a
if(r!==p.e)throw A.b(A.a1(p))
else if(q>=r.length){s.sbl(null)
return!1}else{s.sbl(r[q])
s.c=q+1
return!0}},
sbl(a){this.d=this.$ti.h("1?").a(a)},
$ial:1}
A.e.prototype={
gH(a){return new A.bJ(a,this.gl(a),A.aw(a).h("bJ<e.E>"))},
p(a,b){return this.j(a,b)},
q(a,b){var s,r
A.aw(a).h("~(e.E)").a(b)
s=this.gl(a)
for(r=0;r<s;++r){b.$1(this.j(a,r))
if(s!==this.gl(a))throw A.b(A.a1(a))}},
gdf(a){return this.gl(a)===0},
gB(a){if(this.gl(a)===0)throw A.b(A.kU())
return this.j(a,0)},
bL(a,b){var s,r=this.gl(a)
for(s=0;s<r;++s){if(J.ha(this.j(a,s),b))return!0
if(r!==this.gl(a))throw A.b(A.a1(a))}return!1},
aw(a,b,c){var s=A.aw(a)
return new A.b4(a,s.u(c).h("1(e.E)").a(b),s.h("@<e.E>").u(c).h("b4<1,2>"))},
az(a){var s,r,q,p,o=this
if(o.gdf(a)){s=J.kW(0,A.aw(a).h("e.E"))
return s}r=o.j(a,0)
q=A.ac(o.gl(a),r,!0,A.aw(a).h("e.E"))
for(p=1;p<o.gl(a);++p)B.a.i(q,p,o.j(a,p))
return q},
t(a,b){var s=A.aw(a)
s.h("l<e.E>").a(b)
s=A.ee(a,s.h("e.E"))
B.a.R(s,b)
return s},
m(a){return A.kV(a,"[","]")}}
A.y.prototype={
q(a,b){var s,r,q,p=A.aw(a)
p.h("~(y.K,y.V)").a(b)
for(s=J.aT(this.gI(a)),p=p.h("y.V");s.A();){r=s.gC(s)
q=this.j(a,r)
b.$2(r,q==null?p.a(q):q)}},
gl(a){return J.dF(this.gI(a))},
m(a){return A.hQ(a)},
$iO:1}
A.hR.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=r.a+=A.m(a)
r.a=s+": "
r.a+=A.m(b)},
$S:14}
A.du.prototype={}
A.c2.prototype={
j(a,b){return this.a.j(0,b)},
q(a,b){this.a.q(0,this.$ti.h("~(1,2)").a(b))},
gl(a){return this.a.a},
gI(a){var s=this.a
return new A.aA(s,s.$ti.h("aA<1>"))},
m(a){return A.hQ(this.a)},
$iO:1}
A.d_.prototype={}
A.ch.prototype={}
A.fm.prototype={
j(a,b){var s,r=this.b
if(r==null)return this.c.j(0,b)
else if(typeof b!="string")return null
else{s=r[b]
return typeof s=="undefined"?this.cH(b):s}},
gl(a){return this.b==null?this.c.a:this.ai().length},
gI(a){var s
if(this.b==null){s=this.c
return new A.aA(s,A.x(s).h("aA<1>"))}return new A.fn(this)},
q(a,b){var s,r,q,p,o=this
t.u.a(b)
if(o.b==null)return o.c.q(0,b)
s=o.ai()
for(r=0;r<s.length;++r){q=s[r]
p=o.b[q]
if(typeof p=="undefined"){p=A.jc(o.a[q])
o.b[q]=p}b.$2(q,p)
if(s!==o.c)throw A.b(A.a1(o))}},
ai(){var s=t.bM.a(this.c)
if(s==null)s=this.c=A.q(Object.keys(this.a),t.s)
return s},
cH(a){var s
if(!Object.prototype.hasOwnProperty.call(this.a,a))return null
s=A.jc(this.a[a])
return this.b[a]=s}}
A.fn.prototype={
gl(a){var s=this.a
return s.gl(s)},
p(a,b){var s=this.a
if(s.b==null)s=s.gI(s).p(0,b)
else{s=s.ai()
if(!(b<s.length))return A.d(s,b)
s=s[b]}return s},
gH(a){var s=this.a
if(s.b==null){s=s.gI(s)
s=s.gH(s)}else{s=s.ai()
s=new J.bu(s,s.length,A.aQ(s).h("bu<1>"))}return s}}
A.dQ.prototype={}
A.dS.prototype={}
A.eb.prototype={
cZ(a,b){var s=A.oC(b,this.gd_().a)
return s},
gd_(){return B.W}}
A.hK.prototype={}
A.hZ.prototype={
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
$S:23}
A.cv.prototype={
J(a,b){if(b==null)return!1
return b instanceof A.cv&&this.a===b.a&&this.b===b.b},
gv(a){var s=this.a
return(s^B.f.bC(s,30))&1073741823},
m(a){var s=this,r=A.mS(A.no(s)),q=A.dT(A.nm(s)),p=A.dT(A.ni(s)),o=A.dT(A.nj(s)),n=A.dT(A.nl(s)),m=A.dT(A.nn(s)),l=A.mT(A.nk(s)),k=r+"-"+q
if(s.b)return k+"-"+p+" "+o+":"+n+":"+m+"."+l+"Z"
else return k+"-"+p+" "+o+":"+n+":"+m+"."+l}}
A.iI.prototype={
m(a){return this.aj()}}
A.G.prototype={
ga_(){return A.bd(this.$thrownJsError)}}
A.cn.prototype={
m(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.by(s)
return"Assertion failed"}}
A.b7.prototype={}
A.aU.prototype={
gaK(){return"Invalid argument"+(!this.a?"(s)":"")},
gaJ(){return""},
m(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+A.m(p),n=s.gaK()+q+o
if(!s.a)return n
return n+s.gaJ()+": "+A.by(s.gaX())},
gaX(){return this.b}}
A.c6.prototype={
gaX(){return A.o4(this.b)},
gaK(){return"RangeError"},
gaJ(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.m(q):""
else if(q==null)s=": Not greater than or equal to "+A.m(r)
else if(q>r)s=": Not in inclusive range "+A.m(r)+".."+A.m(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.m(r)
return s}}
A.e5.prototype={
gaX(){return A.r(this.b)},
gaK(){return"RangeError"},
gaJ(){if(A.r(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gl(a){return this.f}}
A.es.prototype={
m(a){var s,r,q,p,o,n,m,l,k=this,j={},i=new A.cY("")
j.a=""
s=k.c
for(r=s.length,q=0,p="",o="";q<r;++q,o=", "){n=s[q]
i.a=p+o
p=i.a+=A.by(n)
j.a=", "}k.d.q(0,new A.hZ(j,i))
m=A.by(k.a)
l=i.m(0)
return"NoSuchMethodError: method not found: '"+k.b.a+"'\nReceiver: "+m+"\nArguments: ["+l+"]"}}
A.eX.prototype={
m(a){return"Unsupported operation: "+this.a}}
A.eV.prototype={
m(a){return"UnimplementedError: "+this.a}}
A.bN.prototype={
m(a){return"Bad state: "+this.a}}
A.dR.prototype={
m(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.by(s)+"."}}
A.ev.prototype={
m(a){return"Out of Memory"},
ga_(){return null},
$iG:1}
A.cW.prototype={
m(a){return"Stack Overflow"},
ga_(){return null},
$iG:1}
A.iL.prototype={
m(a){return"Exception: "+this.a}}
A.hv.prototype={
m(a){var s=this.a,r=""!==s?"FormatException: "+s:"FormatException"
return r}}
A.f.prototype={
aw(a,b,c){var s=A.x(this)
return A.l_(this,s.u(c).h("1(f.E)").a(b),s.h("f.E"),c)},
q(a,b){var s
A.x(this).h("~(f.E)").a(b)
for(s=this.gH(this);s.A();)b.$1(s.gC(s))},
gl(a){var s,r=this.gH(this)
for(s=0;r.A();)++s
return s},
p(a,b){var s,r=this.gH(this)
for(s=b;r.A();){if(s===0)return r.gC(r);--s}throw A.b(A.S(b,b-s,this,"index"))},
m(a){return A.n6(this,"(",")")}}
A.L.prototype={
gv(a){return A.v.prototype.gv.call(this,this)},
m(a){return"null"}}
A.v.prototype={$iv:1,
J(a,b){return this===b},
gv(a){return A.cT(this)},
m(a){return"Instance of '"+A.i4(this)+"'"},
bR(a,b){throw A.b(A.l4(this,t.B.a(b)))},
gF(a){return A.p6(this)},
toString(){return this.m(this)}}
A.fI.prototype={
m(a){return""},
$ias:1}
A.cY.prototype={
gl(a){return this.a.length},
m(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
A.n.prototype={}
A.hd.prototype={
gl(a){return a.length}}
A.dH.prototype={
m(a){var s=String(a)
s.toString
return s}}
A.dI.prototype={
m(a){var s=String(a)
s.toString
return s}}
A.bv.prototype={$ibv:1}
A.bw.prototype={$ibw:1}
A.bx.prototype={
sN(a,b){a.height=b},
sO(a,b){a.width=b},
aB(a,b,c){var s=a.getContext(b,A.m6(c))
return s},
$ibx:1,
$idN:1}
A.aJ.prototype={
gl(a){return a.length}}
A.hn.prototype={
gl(a){return a.length}}
A.B.prototype={$iB:1}
A.cu.prototype={
gl(a){var s=a.length
s.toString
return s}}
A.ho.prototype={}
A.ax.prototype={}
A.aY.prototype={}
A.hp.prototype={
gl(a){return a.length}}
A.hq.prototype={
gl(a){return a.length}}
A.hr.prototype={
gl(a){return a.length},
j(a,b){var s=a[A.r(b)]
s.toString
return s}}
A.aZ.prototype={$iaZ:1}
A.b_.prototype={$ib_:1}
A.bY.prototype={$ibY:1}
A.b0.prototype={$ib0:1}
A.hs.prototype={
m(a){var s=String(a)
s.toString
return s}}
A.cw.prototype={
gl(a){var s=a.length
s.toString
return s},
j(a,b){var s,r
A.r(b)
s=a.length
r=b>>>0!==b||b>=s
r.toString
if(r)throw A.b(A.S(b,s,a,null))
s=a[b]
s.toString
return s},
i(a,b,c){t.q.a(c)
throw A.b(A.D("Cannot assign element of immutable List."))},
gB(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.b(A.M("No elements"))},
p(a,b){if(!(b<a.length))return A.d(a,b)
return a[b]},
$ik:1,
$iu:1,
$if:1,
$il:1}
A.cx.prototype={
m(a){var s,r=a.left
r.toString
s=a.top
s.toString
return"Rectangle ("+A.m(r)+", "+A.m(s)+") "+A.m(this.gO(a))+" x "+A.m(this.gN(a))},
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
if(s===r){s=J.cm(b)
s=this.gO(a)===s.gO(b)&&this.gN(a)===s.gN(b)}else s=!1}else s=!1}else s=!1
return s},
gv(a){var s,r=a.left
r.toString
s=a.top
s.toString
return A.l5(r,s,this.gO(a),this.gN(a))},
gbt(a){return a.height},
gN(a){var s=this.gbt(a)
s.toString
return s},
gbF(a){return a.width},
gO(a){var s=this.gbF(a)
s.toString
return s},
$iaL:1}
A.dV.prototype={
gl(a){var s=a.length
s.toString
return s},
j(a,b){var s,r
A.r(b)
s=a.length
r=b>>>0!==b||b>=s
r.toString
if(r)throw A.b(A.S(b,s,a,null))
s=a[b]
s.toString
return s},
i(a,b,c){A.I(c)
throw A.b(A.D("Cannot assign element of immutable List."))},
gB(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.b(A.M("No elements"))},
p(a,b){if(!(b<a.length))return A.d(a,b)
return a[b]},
$ik:1,
$iu:1,
$if:1,
$il:1}
A.ht.prototype={
gl(a){var s=a.length
s.toString
return s}}
A.i.prototype={
m(a){var s=a.localName
s.toString
return s},
$ii:1}
A.j.prototype={$ij:1}
A.c.prototype={
cU(a,b,c,d){t.o.a(c)
if(c!=null)this.cu(a,b,c,!1)},
cu(a,b,c,d){return a.addEventListener(b,A.aR(t.o.a(c),1),!1)},
cJ(a,b,c,d){return a.removeEventListener(b,A.aR(t.o.a(c),1),!1)},
$ic:1}
A.a2.prototype={$ia2:1}
A.dY.prototype={
gl(a){var s=a.length
s.toString
return s},
j(a,b){var s,r
A.r(b)
s=a.length
r=b>>>0!==b||b>=s
r.toString
if(r)throw A.b(A.S(b,s,a,null))
s=a[b]
s.toString
return s},
i(a,b,c){t.c8.a(c)
throw A.b(A.D("Cannot assign element of immutable List."))},
gB(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.b(A.M("No elements"))},
p(a,b){if(!(b<a.length))return A.d(a,b)
return a[b]},
$ik:1,
$iu:1,
$if:1,
$il:1}
A.dZ.prototype={
gl(a){return a.length}}
A.bZ.prototype={$ibZ:1}
A.c_.prototype={
q(a,b){return a.forEach(A.aR(t.cZ.a(b),3))},
$ic_:1}
A.e_.prototype={
gl(a){return a.length}}
A.ab.prototype={$iab:1}
A.hC.prototype={
gl(a){var s=a.length
s.toString
return s}}
A.bB.prototype={
gl(a){var s=a.length
s.toString
return s},
j(a,b){var s,r
A.r(b)
s=a.length
r=b>>>0!==b||b>=s
r.toString
if(r)throw A.b(A.S(b,s,a,null))
s=a[b]
s.toString
return s},
i(a,b,c){t.G.a(c)
throw A.b(A.D("Cannot assign element of immutable List."))},
gB(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.b(A.M("No elements"))},
p(a,b){if(!(b<a.length))return A.d(a,b)
return a[b]},
$ik:1,
$iu:1,
$if:1,
$il:1}
A.az.prototype={
dm(a,b,c,d){return a.open(b,c,!0)},
$iaz:1}
A.hD.prototype={
$1(a){var s=t.h.a(a).responseText
s.toString
return s},
$S:16}
A.hE.prototype={
$1(a){var s,r,q,p,o
t.J.a(a)
s=this.a
r=s.status
r.toString
q=r>=200&&r<300
p=r>307&&r<400
r=q||r===0||r===304||p
o=this.b
if(r)o.bJ(0,s)
else o.ar(a)},
$S:17}
A.bC.prototype={}
A.cB.prototype={$icB:1}
A.e4.prototype={$idN:1}
A.bD.prototype={$ibD:1}
A.hG.prototype={
gdg(a){return a.isIntersecting}}
A.b3.prototype={$ib3:1}
A.hP.prototype={
m(a){var s=String(a)
s.toString
return s}}
A.bL.prototype={}
A.hV.prototype={
gl(a){return a.length}}
A.eg.prototype={
j(a,b){return A.bs(a.get(A.I(b)))},
q(a,b){var s,r,q
t.u.a(b)
s=a.entries()
for(;!0;){r=s.next()
q=r.done
q.toString
if(q)return
q=r.value[0]
q.toString
b.$2(q,A.bs(r.value[1]))}},
gI(a){var s=A.q([],t.s)
this.q(a,new A.hW(s))
return s},
gl(a){var s=a.size
s.toString
return s},
$iO:1}
A.hW.prototype={
$2(a,b){return B.a.k(this.a,a)},
$S:2}
A.eh.prototype={
j(a,b){return A.bs(a.get(A.I(b)))},
q(a,b){var s,r,q
t.u.a(b)
s=a.entries()
for(;!0;){r=s.next()
q=r.done
q.toString
if(q)return
q=r.value[0]
q.toString
b.$2(q,A.bs(r.value[1]))}},
gI(a){var s=A.q([],t.s)
this.q(a,new A.hX(s))
return s},
gl(a){var s=a.size
s.toString
return s},
$iO:1}
A.hX.prototype={
$2(a,b){return B.a.k(this.a,a)},
$S:2}
A.ad.prototype={$iad:1}
A.ei.prototype={
gl(a){var s=a.length
s.toString
return s},
j(a,b){var s,r
A.r(b)
s=a.length
r=b>>>0!==b||b>=s
r.toString
if(r)throw A.b(A.S(b,s,a,null))
s=a[b]
s.toString
return s},
i(a,b,c){t.cI.a(c)
throw A.b(A.D("Cannot assign element of immutable List."))},
gB(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.b(A.M("No elements"))},
p(a,b){if(!(b<a.length))return A.d(a,b)
return a[b]},
$ik:1,
$iu:1,
$if:1,
$il:1}
A.a3.prototype={$ia3:1}
A.t.prototype={
m(a){var s=a.nodeValue
return s==null?this.c1(a):s},
$it:1}
A.cR.prototype={
gl(a){var s=a.length
s.toString
return s},
j(a,b){var s,r
A.r(b)
s=a.length
r=b>>>0!==b||b>=s
r.toString
if(r)throw A.b(A.S(b,s,a,null))
s=a[b]
s.toString
return s},
i(a,b,c){t.G.a(c)
throw A.b(A.D("Cannot assign element of immutable List."))},
gB(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.b(A.M("No elements"))},
p(a,b){if(!(b<a.length))return A.d(a,b)
return a[b]},
$ik:1,
$iu:1,
$if:1,
$il:1}
A.ae.prototype={
gl(a){return a.length},
$iae:1}
A.ex.prototype={
gl(a){var s=a.length
s.toString
return s},
j(a,b){var s,r
A.r(b)
s=a.length
r=b>>>0!==b||b>=s
r.toString
if(r)throw A.b(A.S(b,s,a,null))
s=a[b]
s.toString
return s},
i(a,b,c){t.he.a(c)
throw A.b(A.D("Cannot assign element of immutable List."))},
gB(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.b(A.M("No elements"))},
p(a,b){if(!(b<a.length))return A.d(a,b)
return a[b]},
$ik:1,
$iu:1,
$if:1,
$il:1}
A.aD.prototype={$iaD:1}
A.eC.prototype={
j(a,b){return A.bs(a.get(A.I(b)))},
q(a,b){var s,r,q
t.u.a(b)
s=a.entries()
for(;!0;){r=s.next()
q=r.done
q.toString
if(q)return
q=r.value[0]
q.toString
b.$2(q,A.bs(r.value[1]))}},
gI(a){var s=A.q([],t.s)
this.q(a,new A.i8(s))
return s},
gl(a){var s=a.size
s.toString
return s},
$iO:1}
A.i8.prototype={
$2(a,b){return B.a.k(this.a,a)},
$S:2}
A.eE.prototype={
gl(a){return a.length}}
A.a5.prototype={$ia5:1}
A.eH.prototype={
gl(a){var s=a.length
s.toString
return s},
j(a,b){var s,r
A.r(b)
s=a.length
r=b>>>0!==b||b>=s
r.toString
if(r)throw A.b(A.S(b,s,a,null))
s=a[b]
s.toString
return s},
i(a,b,c){t.fY.a(c)
throw A.b(A.D("Cannot assign element of immutable List."))},
gB(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.b(A.M("No elements"))},
p(a,b){if(!(b<a.length))return A.d(a,b)
return a[b]},
$ik:1,
$iu:1,
$if:1,
$il:1}
A.af.prototype={$iaf:1}
A.eI.prototype={
gl(a){var s=a.length
s.toString
return s},
j(a,b){var s,r
A.r(b)
s=a.length
r=b>>>0!==b||b>=s
r.toString
if(r)throw A.b(A.S(b,s,a,null))
s=a[b]
s.toString
return s},
i(a,b,c){t.f7.a(c)
throw A.b(A.D("Cannot assign element of immutable List."))},
gB(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.b(A.M("No elements"))},
p(a,b){if(!(b<a.length))return A.d(a,b)
return a[b]},
$ik:1,
$iu:1,
$if:1,
$il:1}
A.ag.prototype={
gl(a){return a.length},
$iag:1}
A.eK.prototype={
j(a,b){return a.getItem(A.I(b))},
q(a,b){var s,r,q
t.eA.a(b)
for(s=0;!0;++s){r=a.key(s)
if(r==null)return
q=a.getItem(r)
q.toString
b.$2(r,q)}},
gI(a){var s=A.q([],t.s)
this.q(a,new A.ic(s))
return s},
gl(a){var s=a.length
s.toString
return s},
$iO:1}
A.ic.prototype={
$2(a,b){return B.a.k(this.a,a)},
$S:18}
A.Z.prototype={$iZ:1}
A.a6.prototype={$ia6:1}
A.W.prototype={$iW:1}
A.eN.prototype={
gl(a){var s=a.length
s.toString
return s},
j(a,b){var s,r
A.r(b)
s=a.length
r=b>>>0!==b||b>=s
r.toString
if(r)throw A.b(A.S(b,s,a,null))
s=a[b]
s.toString
return s},
i(a,b,c){t.c7.a(c)
throw A.b(A.D("Cannot assign element of immutable List."))},
gB(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.b(A.M("No elements"))},
p(a,b){if(!(b<a.length))return A.d(a,b)
return a[b]},
$ik:1,
$iu:1,
$if:1,
$il:1}
A.eO.prototype={
gl(a){var s=a.length
s.toString
return s},
j(a,b){var s,r
A.r(b)
s=a.length
r=b>>>0!==b||b>=s
r.toString
if(r)throw A.b(A.S(b,s,a,null))
s=a[b]
s.toString
return s},
i(a,b,c){t.a0.a(c)
throw A.b(A.D("Cannot assign element of immutable List."))},
gB(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.b(A.M("No elements"))},
p(a,b){if(!(b<a.length))return A.d(a,b)
return a[b]},
$ik:1,
$iu:1,
$if:1,
$il:1}
A.im.prototype={
gl(a){var s=a.length
s.toString
return s}}
A.ah.prototype={$iah:1}
A.eQ.prototype={
gl(a){var s=a.length
s.toString
return s},
j(a,b){var s,r
A.r(b)
s=a.length
r=b>>>0!==b||b>=s
r.toString
if(r)throw A.b(A.S(b,s,a,null))
s=a[b]
s.toString
return s},
i(a,b,c){t.aK.a(c)
throw A.b(A.D("Cannot assign element of immutable List."))},
gB(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.b(A.M("No elements"))},
p(a,b){if(!(b<a.length))return A.d(a,b)
return a[b]},
$ik:1,
$iu:1,
$if:1,
$il:1}
A.io.prototype={
gl(a){return a.length}}
A.aN.prototype={}
A.it.prototype={
m(a){var s=String(a)
s.toString
return s}}
A.f_.prototype={$idN:1}
A.f0.prototype={
gl(a){return a.length}}
A.bm.prototype={
gd5(a){var s=a.deltaY
if(s!=null)return s
throw A.b(A.D("deltaY is not supported"))},
gd4(a){var s=a.deltaX
if(s!=null)return s
throw A.b(A.D("deltaX is not supported"))},
$ibm:1}
A.bn.prototype={
bU(a,b){var s
t.c4.a(b)
this.bq(a)
s=A.ki(b,t.H)
s.toString
return this.cL(a,s)},
cL(a,b){var s=a.requestAnimationFrame(A.aR(t.c4.a(b),1))
s.toString
return s},
bq(a){var s=!!(a.requestAnimationFrame&&a.cancelAnimationFrame)
s.toString
if(s)return;(function(b){var r=["ms","moz","webkit","o"]
for(var q=0;q<r.length&&!b.requestAnimationFrame;++q){b.requestAnimationFrame=b[r[q]+"RequestAnimationFrame"]
b.cancelAnimationFrame=b[r[q]+"CancelAnimationFrame"]||b[r[q]+"CancelRequestAnimationFrame"]}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
$ibn:1}
A.aO.prototype={$iaO:1}
A.f6.prototype={
gl(a){var s=a.length
s.toString
return s},
j(a,b){var s,r
A.r(b)
s=a.length
r=b>>>0!==b||b>=s
r.toString
if(r)throw A.b(A.S(b,s,a,null))
s=a[b]
s.toString
return s},
i(a,b,c){t.g5.a(c)
throw A.b(A.D("Cannot assign element of immutable List."))},
gB(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.b(A.M("No elements"))},
p(a,b){if(!(b<a.length))return A.d(a,b)
return a[b]},
$ik:1,
$iu:1,
$if:1,
$il:1}
A.d5.prototype={
m(a){var s,r,q,p=a.left
p.toString
s=a.top
s.toString
r=a.width
r.toString
q=a.height
q.toString
return"Rectangle ("+A.m(p)+", "+A.m(s)+") "+A.m(r)+" x "+A.m(q)},
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
r=J.cm(b)
if(s===r.gO(b)){s=a.height
s.toString
r=s===r.gN(b)
s=r}else s=!1}else s=!1}else s=!1}else s=!1
return s},
gv(a){var s,r,q,p=a.left
p.toString
s=a.top
s.toString
r=a.width
r.toString
q=a.height
q.toString
return A.l5(p,s,r,q)},
gbt(a){return a.height},
gN(a){var s=a.height
s.toString
return s},
gbF(a){return a.width},
gO(a){var s=a.width
s.toString
return s}}
A.fj.prototype={
gl(a){var s=a.length
s.toString
return s},
j(a,b){var s,r
A.r(b)
s=a.length
r=b>>>0!==b||b>=s
r.toString
if(r)throw A.b(A.S(b,s,a,null))
return a[b]},
i(a,b,c){t.g7.a(c)
throw A.b(A.D("Cannot assign element of immutable List."))},
gB(a){if(a.length>0)return a[0]
throw A.b(A.M("No elements"))},
p(a,b){if(!(b<a.length))return A.d(a,b)
return a[b]},
$ik:1,
$iu:1,
$if:1,
$il:1}
A.de.prototype={
gl(a){var s=a.length
s.toString
return s},
j(a,b){var s,r
A.r(b)
s=a.length
r=b>>>0!==b||b>=s
r.toString
if(r)throw A.b(A.S(b,s,a,null))
s=a[b]
s.toString
return s},
i(a,b,c){t.G.a(c)
throw A.b(A.D("Cannot assign element of immutable List."))},
gB(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.b(A.M("No elements"))},
p(a,b){if(!(b<a.length))return A.d(a,b)
return a[b]},
$ik:1,
$iu:1,
$if:1,
$il:1}
A.fE.prototype={
gl(a){var s=a.length
s.toString
return s},
j(a,b){var s,r
A.r(b)
s=a.length
r=b>>>0!==b||b>=s
r.toString
if(r)throw A.b(A.S(b,s,a,null))
s=a[b]
s.toString
return s},
i(a,b,c){t.gf.a(c)
throw A.b(A.D("Cannot assign element of immutable List."))},
gB(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.b(A.M("No elements"))},
p(a,b){if(!(b<a.length))return A.d(a,b)
return a[b]},
$ik:1,
$iu:1,
$if:1,
$il:1}
A.fJ.prototype={
gl(a){var s=a.length
s.toString
return s},
j(a,b){var s,r
A.r(b)
s=a.length
r=b>>>0!==b||b>=s
r.toString
if(r)throw A.b(A.S(b,s,a,null))
s=a[b]
s.toString
return s},
i(a,b,c){t.gn.a(c)
throw A.b(A.D("Cannot assign element of immutable List."))},
gB(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.b(A.M("No elements"))},
p(a,b){if(!(b<a.length))return A.d(a,b)
return a[b]},
$ik:1,
$iu:1,
$if:1,
$il:1}
A.jR.prototype={}
A.d6.prototype={
av(a,b,c,d){var s=A.x(this)
s.h("~(1)?").a(a)
t.Y.a(c)
return A.a_(this.a,this.b,a,!1,s.c)}}
A.fe.prototype={}
A.d7.prototype={
V(a){var s=this
if(s.b==null)return $.jM()
s.bE()
s.b=null
s.sbA(null)
return $.jM()},
aZ(a){var s,r=this
r.$ti.h("~(1)?").a(a)
if(r.b==null)throw A.b(A.M("Subscription has been canceled."))
r.bE()
s=A.ki(new A.iK(a),t.A)
r.sbA(s)
r.bD()},
bD(){var s,r=this.d
if(r!=null&&!0){s=this.b
s.toString
J.mC(s,this.c,r,!1)}},
bE(){var s,r=this.d
if(r!=null){s=this.b
s.toString
J.mB(s,this.c,t.o.a(r),!1)}},
sbA(a){this.d=t.o.a(a)},
$iaM:1}
A.iJ.prototype={
$1(a){return this.a.$1(t.A.a(a))},
$S:5}
A.iK.prototype={
$1(a){return this.a.$1(t.A.a(a))},
$S:5}
A.k6.prototype={}
A.p.prototype={
gH(a){return new A.cz(a,this.gl(a),A.aw(a).h("cz<p.E>"))}}
A.cz.prototype={
A(){var s=this,r=s.c+1,q=s.b
if(r<q){s.sbu(J.aj(s.a,r))
s.c=r
return!0}s.sbu(null)
s.c=q
return!1},
gC(a){var s=this.d
return s==null?this.$ti.c.a(s):s},
sbu(a){this.d=this.$ti.h("1?").a(a)},
$ial:1}
A.f7.prototype={}
A.fa.prototype={}
A.fb.prototype={}
A.fc.prototype={}
A.fd.prototype={}
A.fg.prototype={}
A.fh.prototype={}
A.fk.prototype={}
A.fl.prototype={}
A.fq.prototype={}
A.fr.prototype={}
A.fs.prototype={}
A.ft.prototype={}
A.fu.prototype={}
A.fv.prototype={}
A.fy.prototype={}
A.fz.prototype={}
A.fB.prototype={}
A.dk.prototype={}
A.dl.prototype={}
A.fC.prototype={}
A.fD.prototype={}
A.fF.prototype={}
A.fK.prototype={}
A.fL.prototype={}
A.dn.prototype={}
A.dp.prototype={}
A.fM.prototype={}
A.fN.prototype={}
A.fR.prototype={}
A.fS.prototype={}
A.fT.prototype={}
A.fU.prototype={}
A.fV.prototype={}
A.fW.prototype={}
A.fX.prototype={}
A.fY.prototype={}
A.fZ.prototype={}
A.h_.prototype={}
A.iz.prototype={
bO(a){var s,r=this.a,q=r.length
for(s=0;s<q;++s)if(r[s]===a)return s
B.a.k(r,a)
B.a.k(this.b,null)
return q},
b5(a){var s,r,q,p,o,n,m,l,k,j=this
if(a==null)return a
if(A.ci(a))return a
if(typeof a=="number")return a
if(typeof a=="string")return a
s=a instanceof Date
s.toString
if(s){s=a.getTime()
s.toString
return A.kJ(s,!0)}s=a instanceof RegExp
s.toString
if(s)throw A.b(A.k3("structured clone of RegExp"))
s=typeof Promise!="undefined"&&a instanceof Promise
s.toString
if(s)return A.pq(a,t.z)
if(A.mb(a)){r=j.bO(a)
s=j.b
if(!(r<s.length))return A.d(s,r)
q=s[r]
if(q!=null)return q
p=t.z
o=A.cJ(p,p)
B.a.i(s,r,o)
j.d8(a,new A.iB(j,o))
return o}s=a instanceof Array
s.toString
if(s){s=a
s.toString
r=j.bO(s)
p=j.b
if(!(r<p.length))return A.d(p,r)
q=p[r]
if(q!=null)return q
n=J.aH(s)
m=n.gl(s)
if(j.c){l=new Array(m)
l.toString
q=l}else q=s
B.a.i(p,r,q)
for(p=J.cl(q),k=0;k<m;++k)p.i(q,k,j.b5(n.j(s,k)))
return q}return a}}
A.iB.prototype={
$2(a,b){var s=this.a.b5(b)
this.b.i(0,a,s)
return s},
$S:20}
A.jb.prototype={
$1(a){this.a.push(A.lN(a))},
$S:3}
A.jk.prototype={
$2(a,b){this.a[a]=A.lN(b)},
$S:22}
A.iA.prototype={
d8(a,b){var s,r,q,p
t.b8.a(b)
for(s=Object.keys(a),r=s.length,q=0;q<s.length;s.length===r||(0,A.V)(s),++q){p=s[q]
b.$2(p,a[p])}}}
A.cG.prototype={$icG:1}
A.hJ.prototype={
$1(a){var s,r,q,p,o=this.a
if(o.a6(0,a))return o.j(0,a)
if(t.f.b(a)){s={}
o.i(0,a,s)
for(o=J.cm(a),r=J.aT(o.gI(a));r.A();){q=r.gC(r)
s[q]=this.$1(o.j(a,q))}return s}else if(t.k.b(a)){p=[]
o.i(0,a,p)
B.a.R(p,J.ky(a,this,t.z))
return p}else return A.kb(a)},
$S:47}
A.jd.prototype={
$1(a){var s
t.Z.a(a)
s=function(b,c,d){return function(){return b(c,d,this,Array.prototype.slice.apply(arguments))}}(A.o8,a,!1)
A.kc(s,$.h5(),a)
return s},
$S:7}
A.je.prototype={
$1(a){return new this.a(a)},
$S:7}
A.jg.prototype={
$1(a){return new A.cE(a==null?t.K.a(a):a)},
$S:24}
A.jh.prototype={
$1(a){var s=a==null?t.K.a(a):a
return new A.bH(s,t.am)},
$S:25}
A.ji.prototype={
$1(a){return new A.b2(a==null?t.K.a(a):a)},
$S:26}
A.b2.prototype={
j(a,b){t.K.a(b)
if(typeof b!="string"&&typeof b!="number")throw A.b(A.aV("property is not a String or num",null))
return A.lP(this.a[b])},
i(a,b,c){if(typeof b!="string"&&typeof b!="number")throw A.b(A.aV("property is not a String or num",null))
this.a[b]=A.kb(c)},
J(a,b){if(b==null)return!1
return b instanceof A.b2&&this.a===b.a},
m(a){var s,r
try{s=String(this.a)
return s}catch(r){s=this.c5(0)
return s}},
gv(a){return 0}}
A.cE.prototype={}
A.bH.prototype={
bk(a){var s=this,r=a<0||a>=s.gl(s)
if(r)throw A.b(A.la(a,0,s.gl(s),null,null))},
j(a,b){t.K.a(b)
if(A.h0(b))this.bk(b)
return this.$ti.c.a(this.c2(0,b))},
i(a,b,c){if(A.h0(b))this.bk(b)
this.c6(0,b,c)},
gl(a){var s=this.a.length
if(typeof s==="number"&&s>>>0===s)return s
throw A.b(A.M("Bad JsArray length"))},
$ik:1,
$if:1,
$il:1}
A.cd.prototype={
i(a,b,c){return this.c3(0,b,c)}}
A.jz.prototype={
$1(a){return this.a.bJ(0,this.b.h("0/?").a(a))},
$S:3}
A.jA.prototype={
$1(a){if(a==null)return this.a.ar(new A.i_(a===undefined))
return this.a.ar(a)},
$S:3}
A.i_.prototype={
m(a){return"Promise was rejected with a value of `"+(this.a?"undefined":"null")+"`."}}
A.iY.prototype={
dl(a){if(a<=0||a>4294967296)throw A.b(A.nr("max must be in range 0 < max \u2264 2^32, was "+a))
return Math.random()*a>>>0},
dk(){return Math.random()}}
A.bi.prototype={
m(a){return"Point("+A.m(this.a)+", "+A.m(this.b)+")"},
J(a,b){if(b==null)return!1
return b instanceof A.bi&&this.a===b.a&&this.b===b.b},
gv(a){return A.nx(B.c.gv(this.a),B.c.gv(this.b),0)},
t(a,b){var s,r=this.$ti
r.a(b)
s=r.c
return new A.bi(s.a(B.c.t(this.a,b.gds(b))),s.a(B.c.t(this.b,b.gdt(b))),r)},
n(a,b){var s=this.$ti,r=s.c
return new A.bi(r.a(this.a*b),r.a(this.b*b),s)}}
A.am.prototype={$iam:1}
A.ec.prototype={
gl(a){var s=a.length
s.toString
return s},
j(a,b){var s
A.r(b)
s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw A.b(A.S(b,this.gl(a),a,null))
s=a.getItem(b)
s.toString
return s},
i(a,b,c){t.bG.a(c)
throw A.b(A.D("Cannot assign element of immutable List."))},
gB(a){var s=a.length
s.toString
if(s>0){s=a[0]
s.toString
return s}throw A.b(A.M("No elements"))},
p(a,b){return this.j(a,b)},
$ik:1,
$if:1,
$il:1}
A.ao.prototype={$iao:1}
A.et.prototype={
gl(a){var s=a.length
s.toString
return s},
j(a,b){var s
A.r(b)
s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw A.b(A.S(b,this.gl(a),a,null))
s=a.getItem(b)
s.toString
return s},
i(a,b,c){t.eq.a(c)
throw A.b(A.D("Cannot assign element of immutable List."))},
gB(a){var s=a.length
s.toString
if(s>0){s=a[0]
s.toString
return s}throw A.b(A.M("No elements"))},
p(a,b){return this.j(a,b)},
$ik:1,
$if:1,
$il:1}
A.i2.prototype={
gl(a){return a.length}}
A.eL.prototype={
gl(a){var s=a.length
s.toString
return s},
j(a,b){var s
A.r(b)
s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw A.b(A.S(b,this.gl(a),a,null))
s=a.getItem(b)
s.toString
return s},
i(a,b,c){A.I(c)
throw A.b(A.D("Cannot assign element of immutable List."))},
gB(a){var s=a.length
s.toString
if(s>0){s=a[0]
s.toString
return s}throw A.b(A.M("No elements"))},
p(a,b){return this.j(a,b)},
$ik:1,
$if:1,
$il:1}
A.at.prototype={$iat:1}
A.eS.prototype={
gl(a){var s=a.length
s.toString
return s},
j(a,b){var s
A.r(b)
s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw A.b(A.S(b,this.gl(a),a,null))
s=a.getItem(b)
s.toString
return s},
i(a,b,c){t.cM.a(c)
throw A.b(A.D("Cannot assign element of immutable List."))},
gB(a){var s=a.length
s.toString
if(s>0){s=a[0]
s.toString
return s}throw A.b(A.M("No elements"))},
p(a,b){return this.j(a,b)},
$ik:1,
$if:1,
$il:1}
A.fo.prototype={}
A.fp.prototype={}
A.fw.prototype={}
A.fx.prototype={}
A.fG.prototype={}
A.fH.prototype={}
A.fO.prototype={}
A.fP.prototype={}
A.hf.prototype={
gl(a){return a.length}}
A.dK.prototype={
j(a,b){return A.bs(a.get(A.I(b)))},
q(a,b){var s,r,q
t.u.a(b)
s=a.entries()
for(;!0;){r=s.next()
q=r.done
q.toString
if(q)return
q=r.value[0]
q.toString
b.$2(q,A.bs(r.value[1]))}},
gI(a){var s=A.q([],t.s)
this.q(a,new A.hg(s))
return s},
gl(a){var s=a.size
s.toString
return s},
$iO:1}
A.hg.prototype={
$2(a,b){return B.a.k(this.a,a)},
$S:2}
A.dL.prototype={
gl(a){return a.length}}
A.bf.prototype={}
A.eu.prototype={
gl(a){return a.length}}
A.f5.prototype={}
A.dM.prototype={$idM:1}
A.aX.prototype={$iaX:1}
A.e1.prototype={$ie1:1}
A.ey.prototype={$iey:1}
A.eB.prototype={$ieB:1}
A.cV.prototype={$icV:1}
A.c7.prototype={
ao(a,b,c){return a.bindBuffer(b,c)},
L(a,b,c){return a.bindFramebuffer(b,c)},
bH(a,b,c){return a.bindRenderbuffer(b,c)},
bI(a,b,c){return a.bindTexture(b,c)},
bM(a,b){return a.deleteBuffer(b)},
d0(a,b){return a.deleteFramebuffer(b)},
d1(a,b){return a.deleteProgram(b)},
d2(a,b){return a.deleteRenderbuffer(b)},
bN(a,b){return a.deleteShader(b)},
d3(a,b){return a.deleteTexture(b)},
da(a,b,c,d,e){return a.framebufferRenderbuffer(b,c,d,e)},
dc(a,b,c,d,e,f){return a.framebufferTexture2D(b,c,d,e,f)},
dr(a,b,c,d,e,f,g,h,i,j){var s=i==null
if(!s&&h!=null&&A.h0(g)){this.cR(a,b,c,d,e,f,g,h,i,j)
return}if(t.gA.b(g)&&h==null&&s&&j==null){this.cS(a,b,c,d,e,f,g)
return}throw A.b(A.aV("Incorrect number or type of arguments",null))},
cR(a,b,c,d,e,f,g,h,i,j){return a.texImage2D(b,c,d,e,f,g,h,i,j)},
cS(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
bY(a,b,c){return a.uniform1f(b,c)},
b3(a,b,c){return a.uniform1i(b,c)},
aA(a,b,c){return a.uniform4fv(b,c)},
bZ(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
Z(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
aa(a,b){return a.useProgram(b)},
$ic7:1}
A.eG.prototype={$ieG:1}
A.eP.prototype={$ieP:1}
A.eU.prototype={$ieU:1}
A.hc.prototype={}
A.ip.prototype={}
A.e2.prototype={
gd9(){var s=B.a.d7(this.a,0,new A.hw(),t.H)
if(typeof s!=="number")return A.av(s)
return B.c.W(20/s)},
b8(a){var s,r=this
r.b=a
s=window
s.toString
r.w=B.j.bU(s,r.gbe())
r.scT(A.k0(t.i))},
E(){var s,r=window
r.toString
s=this.w
s.toString
B.j.bq(r)
r.cancelAnimationFrame(s)
this.r.aq(0)},
cj(a){var s,r,q=this
A.lL(a)
s=q.f=(a-q.d)*0.001
q.d=a
r=q.c+=s
q.e+=s
s=q.b
if(r>=s){r=B.c.c_(r,s)
q.c=r
q.r.k(0,s+r)
r=q.a
if(!!r.fixed$length)A.bt(A.D("removeAt"))
s=r.length
if(0>=s)A.bt(A.lb(0,null))
r.splice(0,1)[0]
B.a.k(r,q.e)
q.e=0}s=window
s.toString
q.w=B.j.bU(s,q.gbe())},
scT(a){this.r=t.di.a(a)}}
A.hw.prototype={
$2(a,b){return A.lL(a)+A.dw(b)},
$S:28}
A.cq.prototype={
gbV(){var s=this
return A.q([s.a,s.b,s.c,s.d],t.n)}}
A.hx.prototype={}
A.aC.prototype={
c9(a){var s=a.a,r=s*s,q=a.b,p=q*q,o=a.c,n=o*o,m=s*q,l=s*o,k=q*o,j=a.d,i=j*s,h=j*q,g=j*o,f=new A.hS(this)
f.$3(0,0,1-2*(p+n))
f.$3(0,1,2*(m-g))
f.$3(0,2,2*(l+h))
f.$3(1,0,2*(m+g))
f.$3(1,1,1-2*(r+n))
f.$3(1,2,2*(k-i))
f.$3(2,0,2*(l-h))
f.$3(2,1,2*(k+i))
f.$3(2,2,1-2*(r+p))},
c8(a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=a1.a,a0=a.length
if(0>=a0)return A.d(a,0)
s=a[0]
if(3>=a0)return A.d(a,3)
r=a[3]
if(6>=a0)return A.d(a,6)
q=a[6]
p=a[1]
o=a[4]
if(7>=a0)return A.d(a,7)
n=a[7]
m=a[2]
l=a[5]
if(8>=a0)return A.d(a,8)
k=a[8]
j=a2.gS(a2).j(0,0)
i=a2.gS(a2).j(0,1)
h=a2.gS(a2).j(0,2)
g=a2.gS(a2).j(0,3)
f=a2.gS(a2).j(0,4)
e=a2.gS(a2).j(0,5)
d=a2.gS(a2).j(0,6)
c=a2.gS(a2).j(0,7)
b=a2.gS(a2).j(0,8)
a=this.a
B.a.i(a,0,B.c.n(s,j)+B.c.n(r,i)+B.c.n(q,h))
B.a.i(a,1,B.c.n(p,j)+B.c.n(o,i)+B.c.n(n,h))
B.a.i(a,2,B.c.n(m,j)+B.c.n(l,i)+B.c.n(k,h))
B.a.i(a,3,B.c.n(s,g)+B.c.n(r,f)+B.c.n(q,e))
B.a.i(a,4,B.c.n(p,g)+B.c.n(o,f)+B.c.n(n,e))
B.a.i(a,5,B.c.n(m,g)+B.c.n(l,f)+B.c.n(k,e))
B.a.i(a,6,B.c.n(s,d)+B.c.n(r,c)+B.c.n(q,b))
B.a.i(a,7,B.c.n(p,d)+B.c.n(o,c)+B.c.n(n,b))
B.a.i(a,8,B.c.n(m,d)+B.c.n(l,c)+B.c.n(k,b))},
n(a,b){return A.l0(this,t.E.a(b))},
m(a){var s,r,q,p,o,n,m,l,k=this.a
if(0>=k.length)return A.d(k,0)
s=A.m(k[0])
if(1>=k.length)return A.d(k,1)
r=A.m(k[1])
if(2>=k.length)return A.d(k,2)
q=A.m(k[2])
if(3>=k.length)return A.d(k,3)
p=A.m(k[3])
if(4>=k.length)return A.d(k,4)
o=A.m(k[4])
if(5>=k.length)return A.d(k,5)
n=A.m(k[5])
if(6>=k.length)return A.d(k,6)
m=A.m(k[6])
if(7>=k.length)return A.d(k,7)
l=A.m(k[7])
if(8>=k.length)return A.d(k,8)
return"      ["+s+", "+r+", "+q+"]\n      ["+p+", "+o+", "+n+"]\n      ["+m+", "+l+", "+A.m(k[8])+"]\n    "}}
A.hS.prototype={
$3(a,b,c){B.a.i(this.a.a,b*3+a,c)
return c},
$S:29}
A.Y.prototype={
P(b5,b6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=b5.a,b4=b3.length
if(0>=b4)return A.d(b3,0)
s=b3[0]
if(4>=b4)return A.d(b3,4)
r=b3[4]
if(8>=b4)return A.d(b3,8)
q=b3[8]
if(12>=b4)return A.d(b3,12)
p=b3[12]
o=b3[1]
n=b3[5]
m=b3[9]
if(13>=b4)return A.d(b3,13)
l=b3[13]
k=b3[2]
j=b3[6]
i=b3[10]
if(14>=b4)return A.d(b3,14)
h=b3[14]
g=b3[3]
f=b3[7]
e=b3[11]
if(15>=b4)return A.d(b3,15)
d=b3[15]
b3=b6.a
b4=b3.length
if(0>=b4)return A.d(b3,0)
c=b3[0]
if(4>=b4)return A.d(b3,4)
b=b3[4]
if(8>=b4)return A.d(b3,8)
a=b3[8]
if(12>=b4)return A.d(b3,12)
a0=b3[12]
a1=b3[1]
a2=b3[5]
a3=b3[9]
if(13>=b4)return A.d(b3,13)
a4=b3[13]
a5=b3[2]
a6=b3[6]
a7=b3[10]
if(14>=b4)return A.d(b3,14)
a8=b3[14]
a9=b3[3]
b0=b3[7]
b1=b3[11]
if(15>=b4)return A.d(b3,15)
b2=b3[15]
b3=this.a
B.a.i(b3,0,s*c+r*a1+q*a5+p*a9)
B.a.i(b3,1,o*c+n*a1+m*a5+l*a9)
B.a.i(b3,2,k*c+j*a1+i*a5+h*a9)
B.a.i(b3,3,g*c+f*a1+e*a5+d*a9)
B.a.i(b3,4,s*b+r*a2+q*a6+p*b0)
B.a.i(b3,5,o*b+n*a2+m*a6+l*b0)
B.a.i(b3,6,k*b+j*a2+i*a6+h*b0)
B.a.i(b3,7,g*b+f*a2+e*a6+d*b0)
B.a.i(b3,8,s*a+r*a3+q*a7+p*b1)
B.a.i(b3,9,o*a+n*a3+m*a7+l*b1)
B.a.i(b3,10,k*a+j*a3+i*a7+h*b1)
B.a.i(b3,11,g*a+f*a3+e*a7+d*b1)
B.a.i(b3,12,s*a0+r*a4+q*a8+p*b2)
B.a.i(b3,13,o*a0+n*a4+m*a8+l*b2)
B.a.i(b3,14,k*a0+j*a4+i*a8+h*b2)
B.a.i(b3,15,g*a0+f*a4+e*a8+d*b2)},
n(a,b){return A.b5(this,t.w.a(b))},
m(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this.a
if(0>=d.length)return A.d(d,0)
s=A.m(d[0])
if(1>=d.length)return A.d(d,1)
r=A.m(d[1])
if(2>=d.length)return A.d(d,2)
q=A.m(d[2])
if(3>=d.length)return A.d(d,3)
p=A.m(d[3])
if(4>=d.length)return A.d(d,4)
o=A.m(d[4])
if(5>=d.length)return A.d(d,5)
n=A.m(d[5])
if(6>=d.length)return A.d(d,6)
m=A.m(d[6])
if(7>=d.length)return A.d(d,7)
l=A.m(d[7])
if(8>=d.length)return A.d(d,8)
k=A.m(d[8])
if(9>=d.length)return A.d(d,9)
j=A.m(d[9])
if(10>=d.length)return A.d(d,10)
i=A.m(d[10])
if(11>=d.length)return A.d(d,11)
h=A.m(d[11])
if(12>=d.length)return A.d(d,12)
g=A.m(d[12])
if(13>=d.length)return A.d(d,13)
f=A.m(d[13])
if(14>=d.length)return A.d(d,14)
e=A.m(d[14])
if(15>=d.length)return A.d(d,15)
return"      ["+s+", "+r+", "+q+", "+p+"]\n      ["+o+", "+n+", "+m+", "+l+"]\n      ["+k+", "+j+", "+i+", "+h+"]\n      ["+g+", "+f+", "+e+", "+A.m(d[15])+"]\n    "}}
A.b6.prototype={
n(a,b){return new A.b6(this.a*b,this.b*b)},
t(a,b){t.af.a(b)
return new A.b6(B.c.t(this.a,b.gds(b)),B.c.t(this.b,b.gdt(b)))},
m(a){return"["+A.m(this.a)+", "+A.m(this.b)+"]"}}
A.ap.prototype={
t(a,b){t.eU.a(b)
return new A.ap(this.a+b.a,this.b+b.b,this.c+b.c)},
n(a,b){return new A.ap(this.a*b,this.b*b,this.c*b)},
m(a){return"["+A.m(this.a)+", "+A.m(this.b)+", "+A.m(this.c)+"]"}}
A.cU.prototype={}
A.aE.prototype={
ca(a){var s,r,q,p=this,o=new A.i5(a),n=o.$2(0,0),m=o.$2(1,1),l=o.$2(2,2),k=n+m+l
if(k>0){s=Math.sqrt(k+1)*0.5
p.d=s
r=0.25/s
s=o.$2(2,1)
q=o.$2(1,2)
if(typeof s!=="number")return s.a0()
if(typeof q!=="number")return A.av(q)
p.a=(s-q)*r
q=o.$2(0,2)
s=o.$2(2,0)
if(typeof q!=="number")return q.a0()
if(typeof s!=="number")return A.av(s)
p.b=(q-s)*r
s=o.$2(1,0)
q=o.$2(0,1)
if(typeof s!=="number")return s.a0()
if(typeof q!=="number")return A.av(q)
p.c=(s-q)*r}else if(n>m&&n>l){s=Math.sqrt(n-m-l+1)*0.5
p.a=s
r=0.25/s
s=o.$2(1,0)
q=o.$2(0,1)
if(typeof s!=="number")return s.t()
if(typeof q!=="number")return A.av(q)
p.b=(s+q)*r
q=o.$2(0,2)
s=o.$2(2,0)
if(typeof q!=="number")return q.t()
if(typeof s!=="number")return A.av(s)
p.c=(q+s)*r
s=o.$2(2,1)
q=o.$2(1,2)
if(typeof s!=="number")return s.a0()
if(typeof q!=="number")return A.av(q)
p.d=(s-q)*r}else if(m>l){s=Math.sqrt(m-n-l+1)*0.5
p.b=s
r=0.25/s
s=o.$2(1,0)
q=o.$2(0,1)
if(typeof s!=="number")return s.t()
if(typeof q!=="number")return A.av(q)
p.a=(s+q)*r
q=o.$2(2,1)
s=o.$2(1,2)
if(typeof q!=="number")return q.t()
if(typeof s!=="number")return A.av(s)
p.c=(q+s)*r
s=o.$2(0,2)
q=o.$2(2,0)
if(typeof s!=="number")return s.a0()
if(typeof q!=="number")return A.av(q)
p.d=(s-q)*r}else{s=Math.sqrt(l-n-m+1)*0.5
p.c=s
r=0.25/s
s=o.$2(0,2)
q=o.$2(2,0)
if(typeof s!=="number")return s.t()
if(typeof q!=="number")return A.av(q)
p.a=(s+q)*r
q=o.$2(2,1)
s=o.$2(1,2)
if(typeof q!=="number")return q.t()
if(typeof s!=="number")return A.av(s)
p.b=(q+s)*r
s=o.$2(1,0)
q=o.$2(0,1)
if(typeof s!=="number")return s.a0()
if(typeof q!=="number")return A.av(q)
p.d=(s-q)*r}},
t(a,b){var s=this
t.L.a(b)
return new A.aE(s.a+b.a,s.b+b.b,s.c+b.c,s.d+b.d)},
n(a,b){var s,r,q,p,o,n,m,l,k=this
t.L.a(b)
s=b.d
r=b.c
q=b.b
p=b.a
o=k.d
n=k.a
m=k.b
l=k.c
return new A.aE(o*p+n*s+m*r-l*q,o*q+m*s+l*p-n*r,o*r+l*s+n*q-m*p,o*s-n*p-m*q-l*r)},
ab(a){var s=this
return 2*Math.acos(B.c.aV(Math.abs(s.a*a.a+s.b*a.b+s.c*a.c+s.d*a.d),0,1))},
m(a){var s=this
return"      ["+A.m(s.a)+", "+A.m(s.b)+", "+A.m(s.c)+", "+A.m(s.d)+"]\n    "}}
A.i5.prototype={
$2(a,b){var s=this.a.a,r=b*3+a
if(!(r<s.length))return A.d(s,r)
return s[r]},
$S:30}
A.eR.prototype={
j(a,b){var s
A.r(b)
s=this.a
if(!(b>=0&&b<s.length))return A.d(s,b)
return s[b]},
n(a,b){var s=t.i
return new A.eR(A.J(A.J(A.l0(this,t.E.a(b)).a,s),s))}}
A.U.prototype={
ga9(){var s,r,q,p,o,n,m,l,k=this.a,j=k.length
if(0>=j)return A.d(k,0)
s=k[0]
if(1>=j)return A.d(k,1)
r=k[1]
if(2>=j)return A.d(k,2)
q=k[2]
if(4>=j)return A.d(k,4)
p=k[4]
if(5>=j)return A.d(k,5)
o=k[5]
if(6>=j)return A.d(k,6)
n=k[6]
if(8>=j)return A.d(k,8)
m=k[8]
if(9>=j)return A.d(k,9)
l=k[9]
if(10>=j)return A.d(k,10)
return new A.aC(A.J(A.q([s,r,q,p,o,n,m,l,k[10]],t.n),t.i))},
sa9(a){var s=a.a,r=this.a
if(0>=s.length)return A.d(s,0)
B.a.i(r,0,s[0])
if(1>=s.length)return A.d(s,1)
B.a.i(r,1,s[1])
if(2>=s.length)return A.d(s,2)
B.a.i(r,2,s[2])
if(3>=s.length)return A.d(s,3)
B.a.i(r,4,s[3])
if(4>=s.length)return A.d(s,4)
B.a.i(r,5,s[4])
if(5>=s.length)return A.d(s,5)
B.a.i(r,6,s[5])
if(6>=s.length)return A.d(s,6)
B.a.i(r,8,s[6])
if(7>=s.length)return A.d(s,7)
B.a.i(r,9,s[7])
if(8>=s.length)return A.d(s,8)
B.a.i(r,10,s[8])},
gT(){var s,r,q=this.a,p=q.length
if(12>=p)return A.d(q,12)
s=q[12]
if(13>=p)return A.d(q,13)
r=q[13]
if(14>=p)return A.d(q,14)
return new A.ap(s,r,q[14])},
sT(a){var s=this.a
B.a.i(s,12,a.a)
B.a.i(s,13,a.b)
B.a.i(s,14,a.c)},
n(a,b){var s=t.i
return new A.U(A.J(A.J(A.b5(this,t.w.a(b)).a,s),s))}}
A.Q.prototype={
cf(a){var s=a.a,r=a.b,q=a.c,p=Math.sqrt(s*s+r*r+q*q)
this.a=a.a/p
this.b=a.b/p
this.c=a.c/p},
t(a,b){t.cW.a(b)
return new A.Q(this.a+b.a,this.b+b.b,this.c+b.c)},
n(a,b){return new A.Q(this.a*b,this.b*b,this.c*b)},
b6(a){return new A.Q(-this.a,-this.b,-this.c)},
m(a){return"["+A.m(this.a)+", "+A.m(this.b)+", "+A.m(this.c)+"]"}}
A.hA.prototype={
U(a,b,c,d,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e="byteOffset"
t.aH.a(a0)
t.g6.a(a1)
s=J.aH(d)
r=J.aj(J.aj(J.aj(s.j(d,"meshes"),a),"primitives"),b)
q=s.j(d,"accessors")
p=s.j(d,"bufferViews")
o=s.j(d,"buffers")
n=A.q([],t.U)
s=J.aH(r)
J.hb(s.j(r,"attributes"),new A.hB(this,a1,q,p,a0,o,c,n))
m=J.aj(q,s.j(r,"indices"))
s=J.aH(m)
l=J.aj(p,s.j(m,"bufferView"))
k=J.aH(l)
j=k.j(l,e)
i=A.r(j==null?0:j)
k=a0.j(0,J.aj(J.aj(o,k.j(l,"buffer")),"uri"))
k.toString
j=s.j(m,e)
h=A.r(j==null?0:j)
A.r(s.j(m,"componentType"))
g=J.kx(s.j(m,"count"),2)
s=new Uint8Array(A.bS(A.na(k.buffer,i+h,A.lK(g)))).buffer
A.ja(s,0,null)
f=B.f.cP(s.byteLength-0,2)
return new A.c4(c.aD(new Uint16Array(s,0,f)),new A.eZ(0),new A.bP(A.J(n,t.cQ)),4)},
cg(a){switch(J.aj(a,"type")){case"VEC4":return 4
case"VEC3":return 3
case"VEC2":return 2
default:return 1}}}
A.hB.prototype={
$2(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=this,g="byteOffset",f=h.b
if(f.j(0,a)==null)return
f=f.j(0,a)
f.toString
s=J.aj(h.c,b)
r=J.aH(s)
q=J.aj(h.d,r.j(s,"bufferView"))
p=J.aH(q)
o=p.j(q,g)
p=h.e.j(0,J.aj(J.aj(h.f,p.j(q,"buffer")),"uri"))
p.toString
n=r.j(s,g)
m=A.r(n==null?0:n)
l=J.ha(r.j(s,"componentType"),5123)?2:4
t.f.a(s)
k=h.a.cg(s)
j=J.kx(r.j(s,"count"),k)
r=p.buffer
p=A.r(J.mz(o,m))
A.lK(j)
A.ja(r,p,j)
i=h.r.aC(new Float32Array(A.bS(new Float32Array(r,p,j))))
B.a.k(h.w,new A.aW(A.I(a),f,k,k*l,i.b))},
$S:39}
A.c1.prototype={}
A.aa.prototype={}
A.cF.prototype={}
A.dW.prototype={}
A.f2.prototype={}
A.bk.prototype={}
A.ce.prototype={
aj(){return"_KeyAction."+this.b}}
A.hL.prototype={
a1(){var s,r,q,p,o,n,m=this
for(s=t.bl,r=m.b,q=0;q<2;++q){p=B.Y[q]
r.i(0,p,new A.aF(null,null,s))}s=m.a
r=document
r.toString
o=t.eN
n=t.g
B.a.k(s,A.a_(r,"keydown",o.a(new A.hM(m)),!1,n))
B.a.k(s,A.a_(r,"keyup",o.a(new A.hN(m)),!1,n))},
E(){var s,r,q,p,o
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.V)(s),++q)s[q].V(0)
B.a.G(s)
for(s=this.b,r=s.gb4(s),p=A.x(r),p=p.h("@<1>").u(p.z[1]),r=new A.aB(J.aT(r.a),r.b,p.h("aB<1,2>")),p=p.z[1];r.A();){o=r.a;(o==null?p.a(o):o).aq(0)}s.G(0)}}
A.hM.prototype={
$1(a){var s
t.g.a(a)
s=this.a.b.j(0,B.A)
s.toString
a.keyCode.toString
s.k(0,new A.c1())},
$S:10}
A.hN.prototype={
$1(a){var s
t.g.a(a)
s=this.a.b.j(0,B.B)
s.toString
a.keyCode.toString
s.k(0,new A.c1())},
$S:10}
A.aP.prototype={
aj(){return"_MouseAction."+this.b}}
A.ej.prototype={
a1(){var s,r,q,p,o,n
for(s=t.er,r=this.b,q=0;q<6;++q){p=B.X[q]
r.i(0,p,new A.aF(null,null,s))}s=this.a
r=document
r.toString
o=t.h2.a(this.gcq())
n=t.V
B.a.k(s,A.a_(r,"mousedown",o,!1,n))
B.a.k(s,A.a_(r,"mouseup",o,!1,n))
B.a.k(s,A.a_(r,"mousemove",o,!1,n))
B.a.k(s,A.a_(r,"mouseout",o,!1,n))
B.a.k(s,A.a_(r,A.I(A.kK(r)),t.h8.a(o),!1,t.gx))},
E(){var s,r,q,p,o
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.V)(s),++q)s[q].V(0)
B.a.G(s)
for(s=this.b,r=s.gb4(s),p=A.x(r),p=p.h("@<1>").u(p.z[1]),r=new A.aB(J.aT(r.a),r.b,p.h("aB<1,2>")),p=p.z[1];r.A();){o=r.a;(o==null?p.a(o):o).aq(0)}s.G(0)},
cr(a){var s,r,q=this
t.V.a(a)
s=q.c
r=a.clientX
r.toString
a.clientY.toString
s.a=r
a.clientX.toString
r=a.clientY
r.toString
s.b=r
r=a.type
r.toString
switch(r){case"mouseout":q.b.j(0,B.C).k(0,new A.aa(s))
break
case"mousemove":r=q.b
r.j(0,B.k).k(0,new A.aa(s))
if(q.e)r.j(0,B.F).k(0,new A.dW(s))
break
case"mousedown":r=q.b.j(0,B.D)
r.toString
a.button.toString
r.k(0,new A.cF(s))
q.e=!0
r=q.d
r.a=s.a
r.b=s.b
break
case"mouseup":r=q.b.j(0,B.E)
r.toString
a.button.toString
r.k(0,new A.cF(s))
q.e=!1
break
case"wheel":t.gx.a(a)
B.z.gd4(a)
B.z.gd5(a)
q.b.j(0,B.G).k(0,new A.f2(s))
break}}}
A.cf.prototype={
aj(){return"_SensorAction."+this.b}}
A.eF.prototype={
a1(){var s,r,q,p,o=this
for(s=t.ce,r=o.b,q=0;q<2;++q){p=B.Z[q]
r.i(0,p,new A.aF(null,null,s))}s=o.a
r=window
r.toString
B.a.k(s,A.a_(r,"devicemotion",t.ax.a(o.gck()),!1,t.D))
r=window
r.toString
B.a.k(s,A.a_(r,"deviceorientation",t.aA.a(o.gcm()),!1,t.W))},
E(){var s,r,q,p,o
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.V)(s),++q)s[q].V(0)
B.a.G(s)
for(s=this.b,r=s.gb4(s),p=A.x(r),p=p.h("@<1>").u(p.z[1]),r=new A.aB(J.aT(r.a),r.b,p.h("aB<1,2>")),p=p.z[1];r.A();){o=r.a;(o==null?p.a(o):o).aq(0)}s.G(0)},
cl(a){var s,r,q,p=t.D.a(a).accelerationIncludingGravity
if(p==null||p.x==null)return
s=A.dw(p.x)
r=Math.atan2(s,s)
q=Math.atan2(s,s)
A.c5(new A.Q(0,1,0),r)
A.c5(new A.Q(1,0,0),q)},
cn(a){var s,r,q
t.W.a(a)
if(a.alpha==null)return
s=A.c5(new A.Q(1,0,0),A.dw(a.beta)*0.017453292519943295)
r=this.c
if(r==null)r=s
q=s.n(0,new A.aE(-r.a,-r.b,-r.c,r.d))
this.c=s
this.b.j(0,B.l).k(0,new A.bk(q))}}
A.hk.prototype={
aF(){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.d,f=g.a,e=f.length
if(8>=e)return A.d(f,8)
s=f[8]
if(9>=e)return A.d(f,9)
r=f[9]
if(10>=e)return A.d(f,10)
q=new A.Q(s,r,f[10]).b6(0)
r=f.length
if(0>=r)return A.d(f,0)
s=f[0]
if(1>=r)return A.d(f,1)
e=f[1]
if(2>=r)return A.d(f,2)
p=new A.Q(s,e,f[2]).b6(0)
e=f.length
if(4>=e)return A.d(f,4)
s=f[4]
if(5>=e)return A.d(f,5)
r=f[5]
if(6>=e)return A.d(f,6)
f=f[6]
g=g.gT()
e=h.c
f=[p.a,p.b,p.c,s,r,f,q.a,q.b,q.c]
r=f.length
if(0>=r)return A.d(f,0)
s=f[0]
if(3>=r)return A.d(f,3)
o=f[3]
if(6>=r)return A.d(f,6)
n=f[6]
m=f[1]
l=f[4]
if(7>=r)return A.d(f,7)
k=f[7]
j=f[2]
i=f[5]
if(8>=r)return A.d(f,8)
e.sa9(new A.aC(A.q([s,o,n,m,l,k,j,i,f[8]],t.n)))
e.sT(new A.ap(0,0,0))
f=t.i
e.sT(new A.U(A.J(A.J(A.b5(e,A.ny(new A.ap(-g.a,-g.b,-g.c))).a,f),f)).gT())
h.a=A.b5(h.b,e)}}
A.aW.prototype={}
A.hh.prototype={}
A.hl.prototype={}
A.hF.prototype={}
A.eZ.prototype={}
A.hj.prototype={
aD(a){var s=this.a,r=s.byteLength
this.a=new Uint16Array(A.bS(B.a.t(B.u.az(s),B.u.az(a))))
return new A.hF(a.length,r,5123)},
aC(a){var s=this.b,r=s.byteLength
this.b=new Float32Array(A.bS(B.a.t(B.t.az(s),B.t.az(a))))
return new A.eZ(r)}}
A.dU.prototype={}
A.e0.prototype={
ci(a,b,c){var s,r,q=this,p=36161
q.c=a
s=a.a.createFramebuffer()
s.toString
q.d=s
if(c){r=q.c.a
s=r.createRenderbuffer()
s.toString
q.e=s
B.b.L(r,36160,q.d)
B.b.bH(r,p,q.e)
s=b.b
r.renderbufferStorage(p,33189,A.r(s.a),A.r(s.b))
B.b.da(r,36160,36096,p,q.e)
B.b.bH(r,p,null)
B.b.L(r,36160,null)}s=b.b
q.a=A.r(s.a)
q.b=A.r(s.b)},
E(){var s=this,r=s.f,q=r.d.a
q.toString
B.b.d3(q,r.f)
s.f=r.d=r.f=null
r=s.e
if(r!=null){q=s.c.a
q.toString
B.b.d2(q,r)
s.e=null}r=s.c.a
r.toString
B.b.d0(r,s.d)
s.c=null}}
A.cp.prototype={
aG(a,b,c){var s,r,q,p,o,n=this
n.c0(a,b,c)
s=n.c.a
s.toString
B.b.L(s,36160,n.d)
s=new A.il()
s.d=a
r=a.a.createTexture()
r.toString
s.f=r
s.ac(0)
r=n.a
q=n.b
p=new Uint8Array(r*q*4)
o=s.d.a
o.toString
B.b.dr(o,3553,0,6408,r,q,0,6408,5121,p)
s.ce()
r=s.d.a
r.toString
q=s.e
q.toString
r.activeTexture(33984+q)
B.b.bI(r,3553,null)
s.e=null
n.f=s
r=n.c.a
r.toString
s=s.f
s.toString
B.b.dc(r,36160,36064,3553,s,0)
s=n.c.a
s.toString
B.b.L(s,36160,null)},
D(a,b){return this.aG(a,b,!1)}}
A.c4.prototype={
Y(){var s,r,q,p,o,n,m,l=this
for(s=l.c.a,r=s.length,q=l.b.b,p=0;p<s.length;s.length===r||(0,A.V)(s),++p){o=s[p]
n=l.e.a
n.toString
m=o.b
n.vertexAttribPointer(m,o.c,5126,!1,o.d,q+o.e)
l.e.a.enableVertexAttribArray(m)}},
X(){var s,r,q,p,o
for(s=this.c.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.V)(s),++q){p=s[q]
o=this.e.a
o.toString
o.disableVertexAttribArray(p.b)}},
ad(){var s=this.a
this.e.a.drawElements(this.d,s.a,s.c,s.b)}}
A.bM.prototype={
gbo(){var s=this.a.a
s.toString
return s},
E(){var s=this,r=s.a.a
r.toString
B.b.d1(r,s.b)
r=s.a.a
r.toString
B.b.bN(r,s.c)
r=s.a.a
r.toString
B.b.bN(r,s.d)
s.a=null},
a2(a,b,c){var s,r,q,p,o,n,m=this
m.c=m.bd(35633,a)
m.d=m.bd(35632,b)
s=m.a.a.createProgram()
s.toString
r=m.a.a
r.toString
q=m.c
q.toString
r.attachShader(s,q)
q=m.a.a
q.toString
r=m.d
r.toString
q.attachShader(s,r)
for(r=c.a,q=r.length,p=0;p<r.length;r.length===q||(0,A.V)(r),++p){o=r[p]
n=m.a.a
n.toString
n.bindAttribLocation(s,o.b,o.a)}m.a.a.linkProgram(s)
if(m.a.a.getProgramParameter(s,35714)==null){s=m.gbo().getProgramInfoLog(s)
s.toString
throw A.b(A.dX("Invalide program\n          "+s+"\n        "))}return s},
bd(a,b){var s,r,q=this,p=q.a.a.createShader(a)
p.toString
q.a.a.shaderSource(p,b)
q.a.a.compileShader(p)
s=q.a.a.getShaderParameter(p,35713)
s.toString
if(!A.ka(s)){s="Invalide shader\n          type:"+a+" "
r=q.a.a.getShaderInfoLog(p)
r.toString
A.md(s+r+"\n        ")
p=q.gbo().getShaderInfoLog(p)
p.toString
throw A.b(A.dX(s+p+"\n        "))}return p}}
A.il.prototype={
ac(a){var s
this.e=a
s=this.d.a
s.activeTexture(33984+a)
B.b.bI(s,3553,this.f)},
bc(a){var s=this,r=3553
s.d.a.texParameteri(r,10240,a)
s.d.a.texParameteri(r,10241,a)
s.d.a.texParameteri(r,10242,33071)
s.d.a.texParameteri(r,10243,33071)},
ce(){return this.bc(9729)}}
A.is.prototype={
D(a,b){var s,r
this.b=a
s=a.a
s.toString
r=b.b
r.toString
r=s.getUniformLocation(r,this.a)
r.toString
this.c=r}}
A.hu.prototype={}
A.iv.prototype={}
A.hT.prototype={}
A.hU.prototype={}
A.i9.prototype={}
A.bP.prototype={}
A.i7.prototype={}
A.iy.prototype={
sap(a){var s=this
s.a.enable(3042)
s.a.blendFunc(1,0)
s.a.blendEquation(32774)
s.a.blendColor(0,0,0,0)},
sau(a){if(a==null){this.a.disable(2929)
return}this.a.enable(2929)
this.a.depthFunc(515)},
c7(a,b){var s,r,q,p=this,o=t.z
o=t.cl.a(B.e.aB(a,"webgl2",A.ed(["alpha",!1,"antialias",!0,"stencil",!1,"depth",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],o,o)))
p.a=o
A.nB(b,o)
for(o=b.f,s=o.length,r=0;r<o.length;o.length===s||(0,A.V)(o),++r){q=o[r]
p.a.getExtension(q)}p.a.frontFace(2305)
p.a.pixelStorei(37441,0)},
ae(a){var s,r=this.a
r.toString
s=a.b
r.viewport(0,0,A.r(s.a),A.r(s.b))},
aE(a){var s=this
s.a.clearColor(a.b,a.c,a.d,a.e)
s.a.clearDepth(a.f)
s.a.clearStencil(0)
s.a.clear(16640)}}
A.hm.prototype={}
A.hY.prototype={}
A.ib.prototype={
ba(a,b,c,d){var s,r,q,p=this
if(c!=null){s=p.e
r=t.r.a(c.a)
q=s.b.a
q.toString
B.b.Z(q,s.c,!1,r)}if(d!=null){s=p.f
r=t.r.a(d.a)
q=s.b.a
q.toString
B.b.Z(q,s.c,!1,r)}if(b!=null){s=p.r
r=t.r.a(A.q([b.a,b.b,b.c,1],t.a))
q=s.b.a
q.toString
B.b.aA(q,s.c,r)}if(a!=null){s=p.w
r=t.r.a(a.gbV())
q=s.b.a
q.toString
B.b.aA(q,s.c,r)}},
cc(a,b){return this.ba(null,a,b,null)},
cb(a,b){return this.ba(a,null,null,b)}}
A.ik.prototype={}
A.ix.prototype={
bb(a,b,c,d,e,f,g){var s,r,q,p,o,n,m=this
if(e!=null){s=m.e
r=t.r.a(e.a)
q=s.b.a
q.toString
B.b.Z(q,s.c,!1,r)}if(g!=null){s=m.f
r=t.r.a(g.a)
q=s.b.a
q.toString
B.b.Z(q,s.c,!1,r)}if(d!=null){s=m.r
r=t.r.a(d.a)
q=s.b.a
q.toString
B.b.Z(q,s.c,!1,r)}s=f==null
if(!s||b!=null||c!=null||a!=null){s=s?m.x:f
m.x=s
r=b==null?m.y:b
m.y=r
q=c==null?m.z:c
m.z=q
p=a==null?m.Q:a
m.Q=p
o=m.w
n=o.b.a
n.toString
B.b.bY(n,o.c,s*r/(q*(p+0.00001)))}},
cd(a,b,c,d){return this.bb(a,b,c,null,null,d,null)},
b9(a,b,c){return this.bb(null,null,null,a,b,null,c)}}
A.H.prototype={}
A.f1.prototype={
cp(a,b){var s,r
t.j.a(a)
t.dt.a(b)
s=J.mG(a)
r=A.ka(J.mH(s))
this.e=r
if(r)this.c.k(0,s)
else this.d.k(0,s)}}
A.e6.prototype={}
A.jv.prototype={
$1(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0="webglcontextlost"
t.ew.a(a1)
s=$.dE()
if(!A.nC())A.bt(A.dX("WebGL is not available"))
r=s.a
q=r.style
q.position="absolute"
q.width="100%"
q.height="100%"
q.top="0"
q.left="0"
q=A.n5(s.gco())
s.f=q
q.observe(r)
s.f.takeRecords().toString
q=$.jG()
q.children.toString
q.appendChild(r).toString
q=$.ko()
q.b8(0.03333333333333333)
p=$.jC()
p.b8(0.016666666666666666)
$.kt().a1()
o=$.ku()
o.a1()
n=$.kw()
n.a1()
m=J.aH(a1)
l=t.f.a(B.N.cZ(0,A.I(m.j(a1,0))))
k=new A.hA()
j=t.N
i=A.ed(["invaders.bin",J.mD(A.oe(t.h.a(m.j(a1,1)).response))],j,t.gc)
h=A.ed(["POSITION",0,"NORMAL",1],j,t.S)
j=$.jD()
B.a.k($.F,k.U(0,0,j,l,i,h))
B.a.k($.F,k.U(1,0,j,l,i,h))
B.a.k($.F,k.U(2,0,j,l,i,h))
B.a.k($.F,k.U(3,0,j,l,i,h))
B.a.k($.F,k.U(4,0,j,l,i,h))
B.a.k($.F,k.U(5,0,j,l,i,h))
B.a.k($.F,k.U(6,0,j,l,i,h))
B.a.k($.F,new A.c4(j.aD(new Uint16Array(A.bS(A.q([0,1,3,2],t.m)))),j.aC(new Float32Array(A.bS(A.q([0,1,0,0,1,0,1,1],t.n)))),A.k4(),5))
A.mY(3,!1,!1)
l=$.kP
l.toString
g=j.aD(l)
l=$.kQ
l.toString
B.a.k($.F,new A.c4(g,j.aC(l),new A.bP(A.q([new A.aW("aPositionNormal",0,3,12,0)],t.U)),4))
A.n1()
A.kS()
$.kg=0
l=$.dD()
j=$.mq()
f=1/Math.tan(j.a*0.5)
m=j.d
e=j.c
d=m/(m-e)
m=l.b
c=m.a
B.a.i(c,0,f/j.b)
B.a.i(c,1,0)
B.a.i(c,2,0)
B.a.i(c,3,0)
B.a.i(c,4,0)
B.a.i(c,5,f)
B.a.i(c,6,0)
B.a.i(c,7,0)
B.a.i(c,8,0)
B.a.i(c,9,0)
B.a.i(c,10,-d)
B.a.i(c,11,-1)
B.a.i(c,12,0)
B.a.i(c,13,0)
B.a.i(c,14,-e*d)
B.a.i(c,15,0)
l.a=A.b5(m,l.c)
m=l.d
m.sT($.mw())
l.aF()
c=$.mv()
b=A.eY(A.iu($.mx(),c))
a=A.iu(c,b)
e=m.a
B.a.i(e,8,c.a)
B.a.i(e,9,c.b)
B.a.i(e,10,c.c)
B.a.i(e,0,b.a)
B.a.i(e,1,b.b)
B.a.i(e,2,b.c)
B.a.i(e,4,a.a)
B.a.i(e,5,a.b)
B.a.i(e,6,a.c)
l.aF()
l=$.h6()
l.a=m
l.f=B.f.aV(0,0,1)
l=window
l.toString
B.a.k($.a9,A.a_(l,"beforeunload",t.gq.a(new A.jq()),!1,t.c9))
l=window
l.toString
B.a.k($.a9,A.a_(l,"resize",t.fi.a(new A.jr()),!1,t.A))
q=q.r
q.toString
B.a.k($.a9,new A.a7(q,A.x(q).h("a7<1>")).a7(A.pm()))
p=p.r
p.toString
B.a.k($.a9,new A.a7(p,A.x(p).h("a7<1>")).a7(A.pn()))
o=o.b.j(0,B.k)
o.toString
B.a.k($.a9,new A.a7(o,A.x(o).h("a7<1>")).a7(A.pk()))
n=n.b.j(0,B.l)
n.toString
B.a.k($.a9,new A.a7(n,A.x(n).h("a7<1>")).a7(A.pl()))
n=t.eJ
o=n.h("~(1)?")
n=n.c
B.a.k($.a9,A.a_(r,a0,o.a(new A.js()),!1,n))
B.a.k($.a9,A.a_(r,a0,o.a(new A.jt()),!1,n))
s=s.c
B.a.k($.a9,new A.a7(s,A.x(s).h("a7<1>")).a7(new A.ju()))
s=$.kr()
n=t.Z
s.i(0,"Report",A.m1(A.po(),n))
s.i(0,"Kill",A.m1(A.pj(),n))},
$S:37}
A.jq.prototype={
$1(a){return A.kY()},
$S:5}
A.jr.prototype={
$1(a){return A.lc()},
$S:5}
A.js.prototype={
$1(a){t.R.a(a)
return A.kL()},
$S:9}
A.jt.prototype={
$1(a){t.R.a(a)
return A.kS()},
$S:9}
A.ju.prototype={
$1(a){return A.lc()},
$S:3}
A.aq.prototype={
aj(){return"PrimitiveId."+this.b}};(function aliases(){var s=J.c0.prototype
s.c1=s.m
s=J.bI.prototype
s.c4=s.m
s=A.v.prototype
s.c5=s.m
s=A.b2.prototype
s.c2=s.j
s.c3=s.i
s=A.cd.prototype
s.c6=s.i
s=A.e0.prototype
s.c0=s.ci})();(function installTearOffs(){var s=hunkHelpers._static_1,r=hunkHelpers._static_0,q=hunkHelpers._static_2,p=hunkHelpers.installInstanceTearOff,o=hunkHelpers._instance_2u,n=hunkHelpers._instance_0u,m=hunkHelpers._instance_1u
s(A,"oT","nE",6)
s(A,"oU","nF",6)
s(A,"oV","nG",6)
r(A,"m4","oK",0)
s(A,"oW","oz",3)
q(A,"oY","oB",4)
r(A,"oX","oA",0)
p(A.d1.prototype,"gcY",0,1,null,["$2","$1"],["bK","ar"],32,0,0)
o(A.K.prototype,"gbn","K",4)
n(A.cb.prototype,"gcF","cG",0)
s(A,"qJ","kK",40)
s(A,"pf","lP",41)
m(A.e2.prototype,"gbe","cj",27)
m(A.ej.prototype,"gcq","cr",33)
var l
m(l=A.eF.prototype,"gck","cl",34)
m(l,"gcm","cn",35)
r(A,"qM","kI",1)
r(A,"qL","kH",1)
r(A,"qO","l3",1)
s(A,"qN","l2",43)
r(A,"qQ","lg",1)
r(A,"qP","lf",1)
r(A,"qS","lk",1)
r(A,"qR","lj",1)
r(A,"qU","lq",1)
r(A,"qT","lp",1)
o(A.f1.prototype,"gco","cp",36)
r(A,"pj","kY",0)
r(A,"po","nu",44)
s(A,"pk","nb",45)
s(A,"pl","nc",46)
s(A,"pm","nd",11)
s(A,"pn","ne",11)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.mixinHard,q=hunkHelpers.inherit,p=hunkHelpers.inheritMany
q(A.v,null)
p(A.v,[A.jW,J.c0,J.bu,A.G,A.bg,A.ia,A.f,A.bJ,A.aB,A.X,A.c8,A.c2,A.cr,A.dd,A.e8,A.iq,A.i0,A.dm,A.j0,A.y,A.hO,A.cI,A.iH,A.ar,A.fi,A.j5,A.j3,A.co,A.bl,A.ca,A.d0,A.d1,A.bR,A.K,A.f4,A.bo,A.f9,A.dj,A.cb,A.dv,A.da,A.e,A.du,A.dQ,A.dS,A.cv,A.iI,A.ev,A.cW,A.iL,A.hv,A.L,A.fI,A.cY,A.ho,A.jR,A.d7,A.k6,A.p,A.cz,A.iz,A.b2,A.i_,A.iY,A.bi,A.ip,A.e2,A.cq,A.hx,A.aC,A.Y,A.b6,A.ap,A.cU,A.aE,A.Q,A.hA,A.c1,A.aa,A.bk,A.hL,A.ej,A.eF,A.hk,A.aW,A.hh,A.hl,A.hF,A.eZ,A.hj,A.dU,A.e0,A.c4,A.bM,A.il,A.is,A.bP,A.i7,A.iy,A.hm,A.hY,A.ib,A.ik,A.ix,A.H,A.f1,A.e6])
p(J.c0,[J.e7,J.cD,J.a,J.bF,J.bG,J.bE,J.bh])
p(J.a,[J.bI,J.z,A.ek,A.cO,A.c,A.hd,A.j,A.bw,A.aY,A.B,A.f7,A.ax,A.hr,A.hs,A.fa,A.cx,A.fc,A.ht,A.fg,A.bZ,A.ab,A.hC,A.fk,A.cB,A.bD,A.hG,A.hP,A.hV,A.fq,A.fr,A.ad,A.fs,A.fu,A.ae,A.fy,A.fB,A.af,A.fC,A.ag,A.fF,A.Z,A.fK,A.im,A.ah,A.fM,A.io,A.it,A.fR,A.fT,A.fV,A.fX,A.fZ,A.cG,A.am,A.fo,A.ao,A.fw,A.i2,A.fG,A.at,A.fO,A.hf,A.f5,A.dM,A.e1,A.ey,A.eB,A.cV,A.c7,A.eG,A.eP,A.eU])
p(J.bI,[J.ew,J.bO,J.aK])
q(J.hH,J.z)
p(J.bE,[J.cC,J.e9])
p(A.G,[A.cH,A.b7,A.ea,A.eW,A.f8,A.eD,A.cn,A.ff,A.aU,A.es,A.eX,A.eV,A.bN,A.dR])
p(A.bg,[A.dO,A.dP,A.eM,A.hI,A.jm,A.jo,A.iD,A.iC,A.hy,A.iQ,A.iX,A.ih,A.ie,A.ii,A.j2,A.hD,A.hE,A.iJ,A.iK,A.jb,A.hJ,A.jd,A.je,A.jg,A.jh,A.ji,A.jz,A.jA,A.hS,A.hM,A.hN,A.jv,A.jq,A.jr,A.js,A.jt,A.ju])
p(A.dO,[A.jx,A.iE,A.iF,A.j4,A.iM,A.iT,A.iS,A.iP,A.iO,A.iN,A.iW,A.iV,A.iU,A.ig,A.id,A.ij,A.iG,A.j_,A.j9,A.jf,A.j1])
p(A.f,[A.k,A.bK,A.dc])
p(A.k,[A.an,A.aA,A.d9])
q(A.cy,A.bK)
p(A.an,[A.b4,A.fn])
q(A.ch,A.c2)
q(A.d_,A.ch)
q(A.cs,A.d_)
q(A.ct,A.cr)
p(A.dP,[A.i3,A.jn,A.hz,A.iR,A.j8,A.hR,A.hZ,A.hW,A.hX,A.i8,A.ic,A.iB,A.jk,A.hg,A.hw,A.i5,A.hB])
q(A.cS,A.b7)
p(A.eM,[A.eJ,A.bX])
q(A.f3,A.cn)
p(A.y,[A.b1,A.d8,A.fm])
p(A.cO,[A.el,A.c3])
p(A.c3,[A.df,A.dh])
q(A.dg,A.df)
q(A.cM,A.dg)
q(A.di,A.dh)
q(A.cN,A.di)
p(A.cM,[A.cL,A.em])
p(A.cN,[A.en,A.eo,A.ep,A.cP,A.eq,A.cQ,A.er])
q(A.dq,A.ff)
p(A.bl,[A.cg,A.d6])
q(A.d2,A.cg)
q(A.a7,A.d2)
q(A.d3,A.ca)
q(A.aG,A.d3)
q(A.aF,A.d0)
q(A.bQ,A.d1)
q(A.d4,A.bo)
q(A.fA,A.dv)
q(A.db,A.d8)
q(A.eb,A.dQ)
q(A.hK,A.dS)
p(A.aU,[A.c6,A.e5])
p(A.c,[A.t,A.dZ,A.c_,A.bC,A.a5,A.dk,A.a6,A.W,A.dn,A.f0,A.bn,A.aO,A.dL,A.bf])
p(A.t,[A.i,A.aJ,A.b0])
q(A.n,A.i)
p(A.n,[A.dH,A.dI,A.bx,A.bY,A.e_,A.e4,A.bL,A.eE])
p(A.j,[A.bv,A.aZ,A.b_,A.aN,A.aD,A.aX])
q(A.hn,A.aY)
q(A.cu,A.f7)
p(A.ax,[A.hp,A.hq])
q(A.fb,A.fa)
q(A.cw,A.fb)
q(A.fd,A.fc)
q(A.dV,A.fd)
q(A.a2,A.bw)
q(A.fh,A.fg)
q(A.dY,A.fh)
q(A.fl,A.fk)
q(A.bB,A.fl)
q(A.az,A.bC)
p(A.aN,[A.b3,A.a3])
q(A.eg,A.fq)
q(A.eh,A.fr)
q(A.ft,A.fs)
q(A.ei,A.ft)
q(A.fv,A.fu)
q(A.cR,A.fv)
q(A.fz,A.fy)
q(A.ex,A.fz)
q(A.eC,A.fB)
q(A.dl,A.dk)
q(A.eH,A.dl)
q(A.fD,A.fC)
q(A.eI,A.fD)
q(A.eK,A.fF)
q(A.fL,A.fK)
q(A.eN,A.fL)
q(A.dp,A.dn)
q(A.eO,A.dp)
q(A.fN,A.fM)
q(A.eQ,A.fN)
q(A.f_,A.bL)
q(A.bm,A.a3)
q(A.fS,A.fR)
q(A.f6,A.fS)
q(A.d5,A.cx)
q(A.fU,A.fT)
q(A.fj,A.fU)
q(A.fW,A.fV)
q(A.de,A.fW)
q(A.fY,A.fX)
q(A.fE,A.fY)
q(A.h_,A.fZ)
q(A.fJ,A.h_)
q(A.fe,A.d6)
q(A.iA,A.iz)
p(A.b2,[A.cE,A.cd])
q(A.bH,A.cd)
q(A.fp,A.fo)
q(A.ec,A.fp)
q(A.fx,A.fw)
q(A.et,A.fx)
q(A.fH,A.fG)
q(A.eL,A.fH)
q(A.fP,A.fO)
q(A.eS,A.fP)
q(A.dK,A.f5)
q(A.eu,A.bf)
q(A.hc,A.ip)
q(A.eR,A.aC)
q(A.U,A.Y)
p(A.aa,[A.cF,A.dW,A.f2])
p(A.iI,[A.ce,A.aP,A.cf,A.aq])
q(A.cp,A.e0)
p(A.is,[A.hu,A.iv,A.hT,A.hU,A.i9])
s(A.df,A.e)
s(A.dg,A.X)
s(A.dh,A.e)
s(A.di,A.X)
s(A.ch,A.du)
s(A.f7,A.ho)
s(A.fa,A.e)
s(A.fb,A.p)
s(A.fc,A.e)
s(A.fd,A.p)
s(A.fg,A.e)
s(A.fh,A.p)
s(A.fk,A.e)
s(A.fl,A.p)
s(A.fq,A.y)
s(A.fr,A.y)
s(A.fs,A.e)
s(A.ft,A.p)
s(A.fu,A.e)
s(A.fv,A.p)
s(A.fy,A.e)
s(A.fz,A.p)
s(A.fB,A.y)
s(A.dk,A.e)
s(A.dl,A.p)
s(A.fC,A.e)
s(A.fD,A.p)
s(A.fF,A.y)
s(A.fK,A.e)
s(A.fL,A.p)
s(A.dn,A.e)
s(A.dp,A.p)
s(A.fM,A.e)
s(A.fN,A.p)
s(A.fR,A.e)
s(A.fS,A.p)
s(A.fT,A.e)
s(A.fU,A.p)
s(A.fV,A.e)
s(A.fW,A.p)
s(A.fX,A.e)
s(A.fY,A.p)
s(A.fZ,A.e)
s(A.h_,A.p)
r(A.cd,A.e)
s(A.fo,A.e)
s(A.fp,A.p)
s(A.fw,A.e)
s(A.fx,A.p)
s(A.fG,A.e)
s(A.fH,A.p)
s(A.fO,A.e)
s(A.fP,A.p)
s(A.f5,A.y)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{h:"int",w:"double",N:"num",o:"String",jj:"bool",L:"Null",l:"List"},mangledNames:{},types:["~()","o()","~(o,@)","~(@)","~(v,as)","~(j)","~(~())","@(@)","L()","~(aX)","~(b3)","~(w)","L(@)","L(~)","~(v?,v?)","ay<L>()","o(az)","~(aD)","~(o,o)","@(o)","@(@,@)","K<@>(@)","~(@,@)","~(c9,@)","cE(@)","bH<@>(@)","b2(@)","~(N)","w(N,w)","w(h,h,w)","w(h,h)","L(v,as)","~(v[as?])","~(a3)","~(aZ)","~(b_)","~(l<@>,bD)","L(l<v>)","@(@,o)","L(@,@)","o(c)","v?(@)","L(~())","o(h)","@()","~(aa)","~(bk)","@(v?)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti")}
A.o0(v.typeUniverse,JSON.parse('{"ew":"bI","bO":"bI","aK":"bI","pw":"j","pJ":"j","py":"bf","px":"c","pP":"c","pS":"c","pO":"i","q9":"aD","pA":"n","pT":"t","pI":"t","pL":"b0","q4":"W","pD":"aN","pH":"aO","pC":"aJ","pU":"aJ","pQ":"a3","pN":"bC","pM":"bB","pE":"B","pF":"Z","pz":"bL","e7":{"jj":[],"C":[]},"cD":{"L":[],"C":[]},"z":{"l":["1"],"k":["1"],"f":["1"]},"hH":{"z":["1"],"l":["1"],"k":["1"],"f":["1"]},"bu":{"al":["1"]},"bE":{"w":[],"N":[]},"cC":{"w":[],"h":[],"N":[],"C":[]},"e9":{"w":[],"N":[],"C":[]},"bh":{"o":[],"C":[]},"cH":{"G":[]},"k":{"f":["1"]},"an":{"k":["1"],"f":["1"]},"bJ":{"al":["1"]},"bK":{"f":["2"],"f.E":"2"},"cy":{"bK":["1","2"],"k":["2"],"f":["2"],"f.E":"2"},"aB":{"al":["2"]},"b4":{"an":["2"],"k":["2"],"f":["2"],"an.E":"2","f.E":"2"},"c8":{"c9":[]},"cs":{"d_":["1","2"],"ch":["1","2"],"c2":["1","2"],"du":["1","2"],"O":["1","2"]},"cr":{"O":["1","2"]},"ct":{"cr":["1","2"],"O":["1","2"]},"dc":{"f":["1"],"f.E":"1"},"dd":{"al":["1"]},"e8":{"kT":[]},"cS":{"b7":[],"G":[]},"ea":{"G":[]},"eW":{"G":[]},"dm":{"as":[]},"bg":{"bz":[]},"dO":{"bz":[]},"dP":{"bz":[]},"eM":{"bz":[]},"eJ":{"bz":[]},"bX":{"bz":[]},"f8":{"G":[]},"eD":{"G":[]},"f3":{"G":[]},"b1":{"y":["1","2"],"kZ":["1","2"],"O":["1","2"],"y.K":"1","y.V":"2"},"aA":{"k":["1"],"f":["1"],"f.E":"1"},"cI":{"al":["1"]},"ek":{"C":[]},"cO":{"P":[]},"el":{"P":[],"C":[]},"c3":{"u":["1"],"P":[]},"cM":{"e":["w"],"l":["w"],"u":["w"],"k":["w"],"P":[],"f":["w"],"X":["w"]},"cN":{"e":["h"],"l":["h"],"u":["h"],"k":["h"],"P":[],"f":["h"],"X":["h"]},"cL":{"e":["w"],"jS":[],"l":["w"],"u":["w"],"k":["w"],"P":[],"f":["w"],"X":["w"],"C":[],"e.E":"w"},"em":{"e":["w"],"l":["w"],"u":["w"],"k":["w"],"P":[],"f":["w"],"X":["w"],"C":[],"e.E":"w"},"en":{"e":["h"],"l":["h"],"u":["h"],"k":["h"],"P":[],"f":["h"],"X":["h"],"C":[],"e.E":"h"},"eo":{"e":["h"],"l":["h"],"u":["h"],"k":["h"],"P":[],"f":["h"],"X":["h"],"C":[],"e.E":"h"},"ep":{"e":["h"],"l":["h"],"u":["h"],"k":["h"],"P":[],"f":["h"],"X":["h"],"C":[],"e.E":"h"},"cP":{"e":["h"],"k2":[],"l":["h"],"u":["h"],"k":["h"],"P":[],"f":["h"],"X":["h"],"C":[],"e.E":"h"},"eq":{"e":["h"],"l":["h"],"u":["h"],"k":["h"],"P":[],"f":["h"],"X":["h"],"C":[],"e.E":"h"},"cQ":{"e":["h"],"l":["h"],"u":["h"],"k":["h"],"P":[],"f":["h"],"X":["h"],"C":[],"e.E":"h"},"er":{"e":["h"],"eT":[],"l":["h"],"u":["h"],"k":["h"],"P":[],"f":["h"],"X":["h"],"C":[],"e.E":"h"},"ff":{"G":[]},"dq":{"b7":[],"G":[]},"K":{"ay":["1"]},"co":{"G":[]},"a7":{"d2":["1"],"cg":["1"],"bl":["1"]},"aG":{"d3":["1"],"ca":["1"],"aM":["1"],"bp":["1"]},"d0":{"cX":["1"],"lE":["1"],"bp":["1"]},"aF":{"d0":["1"],"cX":["1"],"lE":["1"],"bp":["1"]},"bQ":{"d1":["1"]},"d2":{"cg":["1"],"bl":["1"]},"d3":{"ca":["1"],"aM":["1"],"bp":["1"]},"ca":{"aM":["1"],"bp":["1"]},"cg":{"bl":["1"]},"d4":{"bo":["1"]},"f9":{"bo":["@"]},"cb":{"aM":["1"]},"dv":{"ls":[]},"fA":{"dv":[],"ls":[]},"d8":{"y":["1","2"],"O":["1","2"]},"db":{"d8":["1","2"],"y":["1","2"],"O":["1","2"],"y.K":"1","y.V":"2"},"d9":{"k":["1"],"f":["1"],"f.E":"1"},"da":{"al":["1"]},"y":{"O":["1","2"]},"c2":{"O":["1","2"]},"d_":{"ch":["1","2"],"c2":["1","2"],"du":["1","2"],"O":["1","2"]},"fm":{"y":["o","@"],"O":["o","@"],"y.K":"o","y.V":"@"},"fn":{"an":["o"],"k":["o"],"f":["o"],"an.E":"o","f.E":"o"},"eb":{"dQ":["v?","o"]},"w":{"N":[]},"h":{"N":[]},"l":{"k":["1"],"f":["1"]},"cn":{"G":[]},"b7":{"G":[]},"aU":{"G":[]},"c6":{"G":[]},"e5":{"G":[]},"es":{"G":[]},"eX":{"G":[]},"eV":{"G":[]},"bN":{"G":[]},"dR":{"G":[]},"ev":{"G":[]},"cW":{"G":[]},"fI":{"as":[]},"bv":{"j":[]},"aZ":{"j":[]},"b_":{"j":[]},"a2":{"bw":[]},"c_":{"c":[]},"az":{"c":[]},"b3":{"j":[]},"a3":{"j":[]},"t":{"c":[]},"aD":{"j":[]},"a5":{"c":[]},"a6":{"c":[]},"W":{"c":[]},"bm":{"a3":[],"j":[]},"n":{"i":[],"t":[],"c":[]},"dH":{"i":[],"t":[],"c":[]},"dI":{"i":[],"t":[],"c":[]},"bx":{"i":[],"t":[],"c":[],"dN":[]},"aJ":{"t":[],"c":[]},"bY":{"i":[],"t":[],"c":[]},"b0":{"t":[],"c":[]},"cw":{"e":["aL<N>"],"p":["aL<N>"],"l":["aL<N>"],"u":["aL<N>"],"k":["aL<N>"],"f":["aL<N>"],"p.E":"aL<N>","e.E":"aL<N>"},"cx":{"aL":["N"]},"dV":{"e":["o"],"p":["o"],"l":["o"],"u":["o"],"k":["o"],"f":["o"],"p.E":"o","e.E":"o"},"i":{"t":[],"c":[]},"dY":{"e":["a2"],"p":["a2"],"l":["a2"],"u":["a2"],"k":["a2"],"f":["a2"],"p.E":"a2","e.E":"a2"},"dZ":{"c":[]},"e_":{"i":[],"t":[],"c":[]},"bB":{"e":["t"],"p":["t"],"l":["t"],"u":["t"],"k":["t"],"f":["t"],"p.E":"t","e.E":"t"},"bC":{"c":[]},"e4":{"i":[],"t":[],"c":[],"dN":[]},"bL":{"i":[],"t":[],"c":[]},"eg":{"y":["o","@"],"O":["o","@"],"y.K":"o","y.V":"@"},"eh":{"y":["o","@"],"O":["o","@"],"y.K":"o","y.V":"@"},"ei":{"e":["ad"],"p":["ad"],"l":["ad"],"u":["ad"],"k":["ad"],"f":["ad"],"p.E":"ad","e.E":"ad"},"cR":{"e":["t"],"p":["t"],"l":["t"],"u":["t"],"k":["t"],"f":["t"],"p.E":"t","e.E":"t"},"ex":{"e":["ae"],"p":["ae"],"l":["ae"],"u":["ae"],"k":["ae"],"f":["ae"],"p.E":"ae","e.E":"ae"},"eC":{"y":["o","@"],"O":["o","@"],"y.K":"o","y.V":"@"},"eE":{"i":[],"t":[],"c":[]},"eH":{"e":["a5"],"p":["a5"],"l":["a5"],"c":[],"u":["a5"],"k":["a5"],"f":["a5"],"p.E":"a5","e.E":"a5"},"eI":{"e":["af"],"p":["af"],"l":["af"],"u":["af"],"k":["af"],"f":["af"],"p.E":"af","e.E":"af"},"eK":{"y":["o","o"],"O":["o","o"],"y.K":"o","y.V":"o"},"eN":{"e":["W"],"p":["W"],"l":["W"],"u":["W"],"k":["W"],"f":["W"],"p.E":"W","e.E":"W"},"eO":{"e":["a6"],"p":["a6"],"l":["a6"],"c":[],"u":["a6"],"k":["a6"],"f":["a6"],"p.E":"a6","e.E":"a6"},"eQ":{"e":["ah"],"p":["ah"],"l":["ah"],"u":["ah"],"k":["ah"],"f":["ah"],"p.E":"ah","e.E":"ah"},"aN":{"j":[]},"f_":{"i":[],"t":[],"c":[],"dN":[]},"f0":{"c":[]},"bn":{"c":[]},"aO":{"c":[]},"f6":{"e":["B"],"p":["B"],"l":["B"],"u":["B"],"k":["B"],"f":["B"],"p.E":"B","e.E":"B"},"d5":{"aL":["N"]},"fj":{"e":["ab?"],"p":["ab?"],"l":["ab?"],"u":["ab?"],"k":["ab?"],"f":["ab?"],"p.E":"ab?","e.E":"ab?"},"de":{"e":["t"],"p":["t"],"l":["t"],"u":["t"],"k":["t"],"f":["t"],"p.E":"t","e.E":"t"},"fE":{"e":["ag"],"p":["ag"],"l":["ag"],"u":["ag"],"k":["ag"],"f":["ag"],"p.E":"ag","e.E":"ag"},"fJ":{"e":["Z"],"p":["Z"],"l":["Z"],"u":["Z"],"k":["Z"],"f":["Z"],"p.E":"Z","e.E":"Z"},"d6":{"bl":["1"]},"fe":{"d6":["1"],"bl":["1"]},"d7":{"aM":["1"]},"cz":{"al":["1"]},"bH":{"e":["1"],"l":["1"],"k":["1"],"f":["1"],"e.E":"1"},"ec":{"e":["am"],"p":["am"],"l":["am"],"k":["am"],"f":["am"],"p.E":"am","e.E":"am"},"et":{"e":["ao"],"p":["ao"],"l":["ao"],"k":["ao"],"f":["ao"],"p.E":"ao","e.E":"ao"},"eL":{"e":["o"],"p":["o"],"l":["o"],"k":["o"],"f":["o"],"p.E":"o","e.E":"o"},"eS":{"e":["at"],"p":["at"],"l":["at"],"k":["at"],"f":["at"],"p.E":"at","e.E":"at"},"dK":{"y":["o","@"],"O":["o","@"],"y.K":"o","y.V":"@"},"dL":{"c":[]},"bf":{"c":[]},"eu":{"c":[]},"aX":{"j":[]},"eR":{"aC":[]},"U":{"Y":[]},"cF":{"aa":[]},"dW":{"aa":[]},"f2":{"aa":[]},"mM":{"P":[]},"n4":{"l":["h"],"k":["h"],"f":["h"],"P":[]},"eT":{"l":["h"],"k":["h"],"f":["h"],"P":[]},"nA":{"l":["h"],"k":["h"],"f":["h"],"P":[]},"n2":{"l":["h"],"k":["h"],"f":["h"],"P":[]},"k2":{"l":["h"],"k":["h"],"f":["h"],"P":[]},"n3":{"l":["h"],"k":["h"],"f":["h"],"P":[]},"nz":{"l":["h"],"k":["h"],"f":["h"],"P":[]},"jS":{"l":["w"],"k":["w"],"f":["w"],"P":[]},"mW":{"l":["w"],"k":["w"],"f":["w"],"P":[]}}'))
A.o_(v.typeUniverse,JSON.parse('{"k":1,"c3":1,"bo":1,"dS":2,"cd":1}'))
var u={c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type"}
var t=(function rtii(){var s=A.T
return{a7:s("@<~>"),t:s("co"),cQ:s("aW"),c9:s("bv"),fK:s("bw"),gA:s("bx"),gF:s("cs<c9,@>"),R:s("aX"),g5:s("B"),cE:s("aa"),D:s("aZ"),W:s("b_"),e5:s("b0"),gw:s("k<@>"),e:s("G"),A:s("j"),aS:s("c"),c8:s("a2"),Z:s("bz"),b9:s("ay<@>"),h:s("az"),gb:s("cB"),dt:s("bD"),B:s("kT"),k:s("f<@>"),U:s("z<aW>"),aJ:s("z<ay<v>>"),d:s("z<aM<@>>"),s:s("z<o>"),n:s("z<w>"),b:s("z<@>"),m:s("z<h>"),a:s("z<N>"),T:s("cD"),x:s("aK"),aU:s("u<@>"),am:s("bH<@>"),eo:s("b1<c9,@>"),dz:s("cG"),g:s("b3"),bG:s("am"),ew:s("l<v>"),j:s("l<@>"),r:s("l<N>"),aH:s("O<o,eT>"),g6:s("O<o,h>"),f:s("O<@,@>"),E:s("aC"),w:s("Y"),cI:s("ad"),V:s("a3"),G:s("t"),P:s("L"),eq:s("ao"),K:s("v"),he:s("ae"),af:s("b6"),eU:s("ap"),I:s("bi<N>"),J:s("aD"),L:s("aE"),gT:s("pR"),q:s("aL<N>"),cl:s("c7"),as:s("bk"),fY:s("a5"),f7:s("af"),gf:s("ag"),l:s("as"),N:s("o"),gn:s("Z"),fo:s("c9"),a0:s("a6"),c7:s("W"),aK:s("ah"),cM:s("at"),dm:s("C"),eK:s("b7"),Q:s("P"),gc:s("eT"),ak:s("bO"),cW:s("Q"),gx:s("bm"),g4:s("bn"),g2:s("aO"),er:s("aF<aa>"),bl:s("aF<c1>"),ce:s("aF<bk>"),bj:s("bQ<az>"),eJ:s("fe<aX>"),ao:s("K<az>"),ck:s("K<L>"),c:s("K<@>"),fJ:s("K<h>"),cd:s("K<~>"),dx:s("db<@,@>"),y:s("jj"),al:s("jj(v)"),i:s("w"),z:s("@"),O:s("@()"),v:s("@(v)"),C:s("@(v,as)"),b8:s("@(@,@)"),S:s("h"),aw:s("0&*"),_:s("v*"),eH:s("ay<L>?"),g7:s("ab?"),bM:s("l<@>?"),X:s("v?"),eV:s("cV?"),gO:s("as?"),di:s("cX<w>?"),ev:s("bo<@>?"),F:s("bR<@,@>?"),o:s("@(j)?"),Y:s("~()?"),gq:s("~(bv)?"),ax:s("~(aZ)?"),aA:s("~(b_)?"),fi:s("~(j)?"),eN:s("~(b3)?"),h2:s("~(a3)?"),dB:s("~(aD)?"),h8:s("~(bm)?"),H:s("N"),p:s("~"),M:s("~()"),cZ:s("~(bZ,bZ,c_)"),d5:s("~(v)"),da:s("~(v,as)"),eA:s("~(o,o)"),u:s("~(o,@)"),c4:s("~(N)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.e=A.bx.prototype
B.S=A.az.prototype
B.T=J.c0.prototype
B.a=J.z.prototype
B.f=J.cC.prototype
B.c=J.bE.prototype
B.p=J.bh.prototype
B.U=J.aK.prototype
B.V=J.a.prototype
B.t=A.cL.prototype
B.u=A.cP.prototype
B.v=J.ew.prototype
B.b=A.c7.prototype
B.i=J.bO.prototype
B.z=A.bm.prototype
B.j=A.bn.prototype
B.m=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.H=function() {
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
B.M=function(getTagFallback) {
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
B.I=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.J=function(hooks) {
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
B.L=function(hooks) {
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
B.K=function(hooks) {
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
B.n=function(hooks) { return hooks; }

B.N=new A.eb()
B.O=new A.ev()
B.ak=new A.ia()
B.P=new A.f9()
B.Q=new A.iY()
B.o=new A.j0()
B.d=new A.fA()
B.R=new A.fI()
B.al=new A.cq(0,0,0,1)
B.W=new A.hK(null)
B.w=new A.aq(0,"octopus")
B.a0=new A.aq(1,"octopusAlt")
B.x=new A.aq(2,"crab")
B.a1=new A.aq(3,"crabAlt")
B.y=new A.aq(4,"medusa")
B.a2=new A.aq(5,"medusaAlt")
B.a3=new A.aq(6,"boss")
B.a4=new A.aq(7,"quad")
B.a5=new A.aq(8,"sphere")
B.h=A.q(s([B.w,B.a0,B.x,B.a1,B.y,B.a2,B.a3,B.a4,B.a5]),A.T("z<aq>"))
B.C=new A.aP(0,"out")
B.D=new A.aP(1,"down")
B.E=new A.aP(2,"up")
B.k=new A.aP(3,"move")
B.F=new A.aP(4,"drag")
B.G=new A.aP(5,"wheel")
B.X=A.q(s([B.C,B.D,B.E,B.k,B.F,B.G]),A.T("z<aP>"))
B.A=new A.ce(0,"down")
B.B=new A.ce(1,"up")
B.Y=A.q(s([B.A,B.B]),A.T("z<ce>"))
B.aj=new A.cf(0,"motion")
B.l=new A.cf(1,"orientation")
B.Z=A.q(s([B.aj,B.l]),A.T("z<cf>"))
B.q=A.q(s([]),t.b)
B.a_={}
B.r=new A.ct(B.a_,[],A.T("ct<c9,@>"))
B.a6=new A.c8("call")
B.a7=A.aI("pB")
B.a8=A.aI("mM")
B.a9=A.aI("jS")
B.aa=A.aI("mW")
B.ab=A.aI("n2")
B.ac=A.aI("n3")
B.ad=A.aI("n4")
B.ae=A.aI("v")
B.af=A.aI("k2")
B.ag=A.aI("nz")
B.ah=A.aI("nA")
B.ai=A.aI("eT")})();(function staticFields(){$.iZ=null
$.ai=A.q([],A.T("z<v>"))
$.l7=null
$.kD=null
$.kC=null
$.m8=null
$.m2=null
$.me=null
$.jl=null
$.jp=null
$.kk=null
$.cj=null
$.dx=null
$.dy=null
$.kf=!1
$.E=B.d
$.k5=null
$.A=A.q([],A.T("z<H>"))
$.cA=A.q([],A.T("z<H>"))
$.bA=A.q([],A.T("z<ap>"))
$.e3=A.q([],t.m)
$.jV=A.q([],t.n)
$.jU=A.cJ(t.N,t.S)
$.mZ=!1
$.n_=!1
$.kP=null
$.kQ=null
$.a9=A.q([],t.d)
$.F=A.q([],A.T("z<c4>"))
$.au=A.q([],A.T("z<e6>"))
$.kg=-1})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"pG","h5",()=>A.m7("_$dart_dartClosure"))
s($,"qK","jM",()=>B.d.bW(new A.jx(),A.T("ay<L>")))
s($,"pV","mg",()=>A.b8(A.ir({
toString:function(){return"$receiver$"}})))
s($,"pW","mh",()=>A.b8(A.ir({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"pX","mi",()=>A.b8(A.ir(null)))
s($,"pY","mj",()=>A.b8(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"q0","mm",()=>A.b8(A.ir(void 0)))
s($,"q1","mn",()=>A.b8(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"q_","ml",()=>A.b8(A.lm(null)))
s($,"pZ","mk",()=>A.b8(function(){try{null.$method$}catch(q){return q.message}}()))
s($,"q3","mp",()=>A.b8(A.lm(void 0)))
s($,"q2","mo",()=>A.b8(function(){try{(void 0).$method$}catch(q){return q.message}}()))
s($,"q7","kp",()=>A.nD())
s($,"pK","jB",()=>t.ck.a($.jM()))
s($,"qq","mr",()=>A.jy(B.ae))
s($,"qm","kr",()=>A.oc(A.kh(self)))
s($,"q8","kq",()=>A.m7("_$dart_dartObject"))
s($,"qn","ks",()=>function DartObject(a){this.o=a})
s($,"qp","mq",()=>new A.hx(1.0471975511965976,1,0.1,100))
s($,"qh","dC",()=>A.nq(0,0,1024,1024))
s($,"qG","mw",()=>A.l6(0,0,0))
s($,"qt","ms",()=>A.l6(0,0,0))
s($,"qF","mv",()=>A.eY(A.ln(0,0,-1)))
s($,"qH","mx",()=>A.eY(A.ln(0,1,0)))
s($,"qu","jG",()=>A.T("bY").a(A.p1().querySelector("#real-t-demo-motion-blur")))
s($,"ql","dE",()=>{var q,p=A.kF(null,null)
A.i1()
q=t.z
return new A.f1(p,new A.cU(A.i1()),A.k0(q),A.k0(q))})
s($,"q5","ko",()=>A.kN())
s($,"q6","jC",()=>A.kN())
s($,"qs","kt",()=>new A.hL(A.q([],t.d),A.cJ(A.T("ce"),A.T("cX<c1>"))))
s($,"qx","ku",()=>new A.ej(A.q([],t.d),A.cJ(A.T("aP"),A.T("cX<aa>")),A.i1(),A.i1()))
s($,"qC","kw",()=>new A.eF(A.q([],t.d),A.cJ(A.T("cf"),A.T("cX<bk>"))))
s($,"qj","dD",()=>new A.hk(A.ef(),A.ef(),A.k1(),A.k1()))
s($,"qk","h6",()=>new A.hc(A.lo(),A.lo(),A.ez(),A.ez()))
s($,"qz","bW",()=>new A.iy())
s($,"qi","jD",()=>new A.hj(new Uint16Array(A.lM(0)),new Float32Array(A.lM(0))))
s($,"qA","h8",()=>new A.cp())
s($,"qD","h9",()=>new A.cp())
s($,"qv","jH",()=>new A.cp())
s($,"qo","jE",()=>{var q=A.iw("uColor"),p=A.cK("uPvwlTransform")
return new A.hm(A.lr(),new A.bM(),q,p)})
s($,"qr","jF",()=>{var q=A.cK("uPvTransform"),p=A.cK("uWlTransform"),o=A.iw("uLightPosition"),n=A.iw("uLightColor")
return new A.ib(new A.bP(A.q([A.kA("aPosition",0,3,24,0),A.kA("aNormal",1,3,24,12)],t.U)),new A.bM(),q,p,o,n)})
s($,"qE","jL",()=>{var q=A.cK("uPvwlTransform"),p=A.cK("uTpvwlTransform"),o=A.cK("uPreviousTpvwlTransform"),n=A.kM("uViewScale")
return new A.ix(A.lr(),new A.bM(),q,p,o,n)})
s($,"qw","jI",()=>{var q=A.l1("uPvwlTransform"),p=A.k_("uColorSampler"),o=A.k_("uVelocitySampler"),n=A.iw("uViewBound"),m=A.kM("uStep")
return new A.hY(A.k4(),new A.bM(),q,p,o,n,m)})
s($,"qB","jJ",()=>{var q=A.k_("uSampler"),p=A.l1("uPvwlTransform")
return new A.ik(A.k4(),new A.bM(),q,p)})
r($,"oJ","mu",()=>new A.aC(A.q([1,0,0,0,1,0,0,0,1],t.n)))
r($,"oR","my",()=>A.ef())
r($,"oO","jK",()=>A.ef())
r($,"oD","kv",()=>A.ef())
r($,"of","h7",()=>A.k1())
s($,"qy","mt",()=>B.Q)})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({WebGL:J.c0,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,webkitFileSystemDirectoryEntry:J.a,FileSystemDirectoryEntry:J.a,DirectoryReader:J.a,WebKitDirectoryReader:J.a,webkitFileSystemDirectoryReader:J.a,FileSystemDirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,webkitFileSystemEntry:J.a,FileSystemEntry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,webkitFileSystemFileEntry:J.a,FileSystemFileEntry:J.a,DOMFileSystem:J.a,WebKitFileSystem:J.a,webkitFileSystem:J.a,FileSystem:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,GeolocationPosition:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,GeolocationPositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL2RenderingContextBase:J.a,ArrayBuffer:A.ek,ArrayBufferView:A.cO,DataView:A.el,Float32Array:A.cL,Float64Array:A.em,Int16Array:A.en,Int32Array:A.eo,Int8Array:A.ep,Uint16Array:A.cP,Uint32Array:A.eq,Uint8ClampedArray:A.cQ,CanvasPixelArray:A.cQ,Uint8Array:A.er,HTMLBRElement:A.n,HTMLBaseElement:A.n,HTMLBodyElement:A.n,HTMLButtonElement:A.n,HTMLContentElement:A.n,HTMLDListElement:A.n,HTMLDataElement:A.n,HTMLDataListElement:A.n,HTMLDetailsElement:A.n,HTMLDialogElement:A.n,HTMLEmbedElement:A.n,HTMLFieldSetElement:A.n,HTMLHRElement:A.n,HTMLHeadElement:A.n,HTMLHeadingElement:A.n,HTMLHtmlElement:A.n,HTMLIFrameElement:A.n,HTMLInputElement:A.n,HTMLLIElement:A.n,HTMLLabelElement:A.n,HTMLLegendElement:A.n,HTMLLinkElement:A.n,HTMLMapElement:A.n,HTMLMenuElement:A.n,HTMLMetaElement:A.n,HTMLMeterElement:A.n,HTMLModElement:A.n,HTMLOListElement:A.n,HTMLObjectElement:A.n,HTMLOptGroupElement:A.n,HTMLOptionElement:A.n,HTMLOutputElement:A.n,HTMLParagraphElement:A.n,HTMLParamElement:A.n,HTMLPictureElement:A.n,HTMLPreElement:A.n,HTMLProgressElement:A.n,HTMLQuoteElement:A.n,HTMLScriptElement:A.n,HTMLShadowElement:A.n,HTMLSlotElement:A.n,HTMLSourceElement:A.n,HTMLSpanElement:A.n,HTMLStyleElement:A.n,HTMLTableCaptionElement:A.n,HTMLTableCellElement:A.n,HTMLTableDataCellElement:A.n,HTMLTableHeaderCellElement:A.n,HTMLTableColElement:A.n,HTMLTableElement:A.n,HTMLTableRowElement:A.n,HTMLTableSectionElement:A.n,HTMLTemplateElement:A.n,HTMLTextAreaElement:A.n,HTMLTimeElement:A.n,HTMLTitleElement:A.n,HTMLTrackElement:A.n,HTMLUListElement:A.n,HTMLUnknownElement:A.n,HTMLDirectoryElement:A.n,HTMLFontElement:A.n,HTMLFrameElement:A.n,HTMLFrameSetElement:A.n,HTMLMarqueeElement:A.n,HTMLElement:A.n,AccessibleNodeList:A.hd,HTMLAnchorElement:A.dH,HTMLAreaElement:A.dI,BeforeUnloadEvent:A.bv,Blob:A.bw,HTMLCanvasElement:A.bx,CDATASection:A.aJ,CharacterData:A.aJ,Comment:A.aJ,ProcessingInstruction:A.aJ,Text:A.aJ,CSSPerspective:A.hn,CSSCharsetRule:A.B,CSSConditionRule:A.B,CSSFontFaceRule:A.B,CSSGroupingRule:A.B,CSSImportRule:A.B,CSSKeyframeRule:A.B,MozCSSKeyframeRule:A.B,WebKitCSSKeyframeRule:A.B,CSSKeyframesRule:A.B,MozCSSKeyframesRule:A.B,WebKitCSSKeyframesRule:A.B,CSSMediaRule:A.B,CSSNamespaceRule:A.B,CSSPageRule:A.B,CSSRule:A.B,CSSStyleRule:A.B,CSSSupportsRule:A.B,CSSViewportRule:A.B,CSSStyleDeclaration:A.cu,MSStyleCSSProperties:A.cu,CSS2Properties:A.cu,CSSImageValue:A.ax,CSSKeywordValue:A.ax,CSSNumericValue:A.ax,CSSPositionValue:A.ax,CSSResourceValue:A.ax,CSSUnitValue:A.ax,CSSURLImageValue:A.ax,CSSStyleValue:A.ax,CSSMatrixComponent:A.aY,CSSRotation:A.aY,CSSScale:A.aY,CSSSkew:A.aY,CSSTranslation:A.aY,CSSTransformComponent:A.aY,CSSTransformValue:A.hp,CSSUnparsedValue:A.hq,DataTransferItemList:A.hr,DeviceMotionEvent:A.aZ,DeviceOrientationEvent:A.b_,HTMLDivElement:A.bY,Document:A.b0,HTMLDocument:A.b0,XMLDocument:A.b0,DOMException:A.hs,ClientRectList:A.cw,DOMRectList:A.cw,DOMRectReadOnly:A.cx,DOMStringList:A.dV,DOMTokenList:A.ht,MathMLElement:A.i,SVGAElement:A.i,SVGAnimateElement:A.i,SVGAnimateMotionElement:A.i,SVGAnimateTransformElement:A.i,SVGAnimationElement:A.i,SVGCircleElement:A.i,SVGClipPathElement:A.i,SVGDefsElement:A.i,SVGDescElement:A.i,SVGDiscardElement:A.i,SVGEllipseElement:A.i,SVGFEBlendElement:A.i,SVGFEColorMatrixElement:A.i,SVGFEComponentTransferElement:A.i,SVGFECompositeElement:A.i,SVGFEConvolveMatrixElement:A.i,SVGFEDiffuseLightingElement:A.i,SVGFEDisplacementMapElement:A.i,SVGFEDistantLightElement:A.i,SVGFEFloodElement:A.i,SVGFEFuncAElement:A.i,SVGFEFuncBElement:A.i,SVGFEFuncGElement:A.i,SVGFEFuncRElement:A.i,SVGFEGaussianBlurElement:A.i,SVGFEImageElement:A.i,SVGFEMergeElement:A.i,SVGFEMergeNodeElement:A.i,SVGFEMorphologyElement:A.i,SVGFEOffsetElement:A.i,SVGFEPointLightElement:A.i,SVGFESpecularLightingElement:A.i,SVGFESpotLightElement:A.i,SVGFETileElement:A.i,SVGFETurbulenceElement:A.i,SVGFilterElement:A.i,SVGForeignObjectElement:A.i,SVGGElement:A.i,SVGGeometryElement:A.i,SVGGraphicsElement:A.i,SVGImageElement:A.i,SVGLineElement:A.i,SVGLinearGradientElement:A.i,SVGMarkerElement:A.i,SVGMaskElement:A.i,SVGMetadataElement:A.i,SVGPathElement:A.i,SVGPatternElement:A.i,SVGPolygonElement:A.i,SVGPolylineElement:A.i,SVGRadialGradientElement:A.i,SVGRectElement:A.i,SVGScriptElement:A.i,SVGSetElement:A.i,SVGStopElement:A.i,SVGStyleElement:A.i,SVGElement:A.i,SVGSVGElement:A.i,SVGSwitchElement:A.i,SVGSymbolElement:A.i,SVGTSpanElement:A.i,SVGTextContentElement:A.i,SVGTextElement:A.i,SVGTextPathElement:A.i,SVGTextPositioningElement:A.i,SVGTitleElement:A.i,SVGUseElement:A.i,SVGViewElement:A.i,SVGGradientElement:A.i,SVGComponentTransferFunctionElement:A.i,SVGFEDropShadowElement:A.i,SVGMPathElement:A.i,Element:A.i,AbortPaymentEvent:A.j,AnimationEvent:A.j,AnimationPlaybackEvent:A.j,ApplicationCacheErrorEvent:A.j,BackgroundFetchClickEvent:A.j,BackgroundFetchEvent:A.j,BackgroundFetchFailEvent:A.j,BackgroundFetchedEvent:A.j,BeforeInstallPromptEvent:A.j,BlobEvent:A.j,CanMakePaymentEvent:A.j,ClipboardEvent:A.j,CloseEvent:A.j,CustomEvent:A.j,ErrorEvent:A.j,ExtendableEvent:A.j,ExtendableMessageEvent:A.j,FetchEvent:A.j,FontFaceSetLoadEvent:A.j,ForeignFetchEvent:A.j,GamepadEvent:A.j,HashChangeEvent:A.j,InstallEvent:A.j,MediaEncryptedEvent:A.j,MediaKeyMessageEvent:A.j,MediaQueryListEvent:A.j,MediaStreamEvent:A.j,MediaStreamTrackEvent:A.j,MessageEvent:A.j,MIDIConnectionEvent:A.j,MIDIMessageEvent:A.j,MutationEvent:A.j,NotificationEvent:A.j,PageTransitionEvent:A.j,PaymentRequestEvent:A.j,PaymentRequestUpdateEvent:A.j,PopStateEvent:A.j,PresentationConnectionAvailableEvent:A.j,PresentationConnectionCloseEvent:A.j,PromiseRejectionEvent:A.j,PushEvent:A.j,RTCDataChannelEvent:A.j,RTCDTMFToneChangeEvent:A.j,RTCPeerConnectionIceEvent:A.j,RTCTrackEvent:A.j,SecurityPolicyViolationEvent:A.j,SensorErrorEvent:A.j,SpeechRecognitionError:A.j,SpeechRecognitionEvent:A.j,SpeechSynthesisEvent:A.j,StorageEvent:A.j,SyncEvent:A.j,TrackEvent:A.j,TransitionEvent:A.j,WebKitTransitionEvent:A.j,VRDeviceEvent:A.j,VRDisplayEvent:A.j,VRSessionEvent:A.j,MojoInterfaceRequestEvent:A.j,USBConnectionEvent:A.j,IDBVersionChangeEvent:A.j,AudioProcessingEvent:A.j,OfflineAudioCompletionEvent:A.j,Event:A.j,InputEvent:A.j,SubmitEvent:A.j,AbsoluteOrientationSensor:A.c,Accelerometer:A.c,AccessibleNode:A.c,AmbientLightSensor:A.c,Animation:A.c,ApplicationCache:A.c,DOMApplicationCache:A.c,OfflineResourceList:A.c,BackgroundFetchRegistration:A.c,BatteryManager:A.c,BroadcastChannel:A.c,CanvasCaptureMediaStreamTrack:A.c,EventSource:A.c,FileReader:A.c,Gyroscope:A.c,LinearAccelerationSensor:A.c,Magnetometer:A.c,MediaDevices:A.c,MediaKeySession:A.c,MediaQueryList:A.c,MediaRecorder:A.c,MediaSource:A.c,MediaStream:A.c,MediaStreamTrack:A.c,MessagePort:A.c,MIDIAccess:A.c,MIDIInput:A.c,MIDIOutput:A.c,MIDIPort:A.c,NetworkInformation:A.c,Notification:A.c,OffscreenCanvas:A.c,OrientationSensor:A.c,PaymentRequest:A.c,Performance:A.c,PermissionStatus:A.c,PresentationAvailability:A.c,PresentationConnection:A.c,PresentationConnectionList:A.c,PresentationRequest:A.c,RelativeOrientationSensor:A.c,RemotePlayback:A.c,RTCDataChannel:A.c,DataChannel:A.c,RTCDTMFSender:A.c,RTCPeerConnection:A.c,webkitRTCPeerConnection:A.c,mozRTCPeerConnection:A.c,ScreenOrientation:A.c,Sensor:A.c,ServiceWorker:A.c,ServiceWorkerContainer:A.c,ServiceWorkerRegistration:A.c,SharedWorker:A.c,SpeechRecognition:A.c,webkitSpeechRecognition:A.c,SpeechSynthesis:A.c,SpeechSynthesisUtterance:A.c,VR:A.c,VRDevice:A.c,VRDisplay:A.c,VRSession:A.c,VisualViewport:A.c,WebSocket:A.c,Worker:A.c,WorkerPerformance:A.c,BluetoothDevice:A.c,BluetoothRemoteGATTCharacteristic:A.c,Clipboard:A.c,MojoInterfaceInterceptor:A.c,USB:A.c,IDBDatabase:A.c,IDBOpenDBRequest:A.c,IDBVersionChangeRequest:A.c,IDBRequest:A.c,IDBTransaction:A.c,AnalyserNode:A.c,RealtimeAnalyserNode:A.c,AudioBufferSourceNode:A.c,AudioDestinationNode:A.c,AudioNode:A.c,AudioScheduledSourceNode:A.c,AudioWorkletNode:A.c,BiquadFilterNode:A.c,ChannelMergerNode:A.c,AudioChannelMerger:A.c,ChannelSplitterNode:A.c,AudioChannelSplitter:A.c,ConstantSourceNode:A.c,ConvolverNode:A.c,DelayNode:A.c,DynamicsCompressorNode:A.c,GainNode:A.c,AudioGainNode:A.c,IIRFilterNode:A.c,MediaElementAudioSourceNode:A.c,MediaStreamAudioDestinationNode:A.c,MediaStreamAudioSourceNode:A.c,OscillatorNode:A.c,Oscillator:A.c,PannerNode:A.c,AudioPannerNode:A.c,webkitAudioPannerNode:A.c,ScriptProcessorNode:A.c,JavaScriptAudioNode:A.c,StereoPannerNode:A.c,WaveShaperNode:A.c,EventTarget:A.c,File:A.a2,FileList:A.dY,FileWriter:A.dZ,FontFace:A.bZ,FontFaceSet:A.c_,HTMLFormElement:A.e_,Gamepad:A.ab,History:A.hC,HTMLCollection:A.bB,HTMLFormControlsCollection:A.bB,HTMLOptionsCollection:A.bB,XMLHttpRequest:A.az,XMLHttpRequestUpload:A.bC,XMLHttpRequestEventTarget:A.bC,ImageData:A.cB,HTMLImageElement:A.e4,IntersectionObserver:A.bD,IntersectionObserverEntry:A.hG,KeyboardEvent:A.b3,Location:A.hP,HTMLAudioElement:A.bL,HTMLMediaElement:A.bL,MediaList:A.hV,MIDIInputMap:A.eg,MIDIOutputMap:A.eh,MimeType:A.ad,MimeTypeArray:A.ei,PointerEvent:A.a3,MouseEvent:A.a3,DragEvent:A.a3,DocumentFragment:A.t,ShadowRoot:A.t,Attr:A.t,DocumentType:A.t,Node:A.t,NodeList:A.cR,RadioNodeList:A.cR,Plugin:A.ae,PluginArray:A.ex,ProgressEvent:A.aD,ResourceProgressEvent:A.aD,RTCStatsReport:A.eC,HTMLSelectElement:A.eE,SourceBuffer:A.a5,SourceBufferList:A.eH,SpeechGrammar:A.af,SpeechGrammarList:A.eI,SpeechRecognitionResult:A.ag,Storage:A.eK,CSSStyleSheet:A.Z,StyleSheet:A.Z,TextTrack:A.a6,TextTrackCue:A.W,VTTCue:A.W,TextTrackCueList:A.eN,TextTrackList:A.eO,TimeRanges:A.im,Touch:A.ah,TouchList:A.eQ,TrackDefaultList:A.io,CompositionEvent:A.aN,FocusEvent:A.aN,TextEvent:A.aN,TouchEvent:A.aN,UIEvent:A.aN,URL:A.it,HTMLVideoElement:A.f_,VideoTrackList:A.f0,WheelEvent:A.bm,Window:A.bn,DOMWindow:A.bn,DedicatedWorkerGlobalScope:A.aO,ServiceWorkerGlobalScope:A.aO,SharedWorkerGlobalScope:A.aO,WorkerGlobalScope:A.aO,CSSRuleList:A.f6,ClientRect:A.d5,DOMRect:A.d5,GamepadList:A.fj,NamedNodeMap:A.de,MozNamedAttrMap:A.de,SpeechRecognitionResultList:A.fE,StyleSheetList:A.fJ,IDBKeyRange:A.cG,SVGLength:A.am,SVGLengthList:A.ec,SVGNumber:A.ao,SVGNumberList:A.et,SVGPointList:A.i2,SVGStringList:A.eL,SVGTransform:A.at,SVGTransformList:A.eS,AudioBuffer:A.hf,AudioParamMap:A.dK,AudioTrackList:A.dL,AudioContext:A.bf,webkitAudioContext:A.bf,BaseAudioContext:A.bf,OfflineAudioContext:A.eu,WebGLBuffer:A.dM,WebGLContextEvent:A.aX,WebGLFramebuffer:A.e1,WebGLProgram:A.ey,WebGLRenderbuffer:A.eB,WebGLRenderingContext:A.cV,WebGL2RenderingContext:A.c7,WebGLShader:A.eG,WebGLTexture:A.eP,WebGLUniformLocation:A.eU})
hunkHelpers.setOrUpdateLeafTags({WebGL:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,webkitFileSystemDirectoryEntry:true,FileSystemDirectoryEntry:true,DirectoryReader:true,WebKitDirectoryReader:true,webkitFileSystemDirectoryReader:true,FileSystemDirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,webkitFileSystemEntry:true,FileSystemEntry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,webkitFileSystemFileEntry:true,FileSystemFileEntry:true,DOMFileSystem:true,WebKitFileSystem:true,webkitFileSystem:true,FileSystem:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,GeolocationPosition:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,GeolocationPositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL2RenderingContextBase:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,BeforeUnloadEvent:true,Blob:false,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,HTMLDivElement:true,Document:true,HTMLDocument:true,XMLDocument:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,MathMLElement:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,Event:false,InputEvent:false,SubmitEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,EventSource:true,FileReader:true,Gyroscope:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerRegistration:true,SharedWorker:true,SpeechRecognition:true,webkitSpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,FontFace:true,FontFaceSet:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,XMLHttpRequest:true,XMLHttpRequestUpload:true,XMLHttpRequestEventTarget:false,ImageData:true,HTMLImageElement:true,IntersectionObserver:true,IntersectionObserverEntry:true,KeyboardEvent:true,Location:true,HTMLAudioElement:true,HTMLMediaElement:false,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,DocumentFragment:true,ShadowRoot:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,ProgressEvent:true,ResourceProgressEvent:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,TouchEvent:true,UIEvent:false,URL:true,HTMLVideoElement:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,DedicatedWorkerGlobalScope:true,ServiceWorkerGlobalScope:true,SharedWorkerGlobalScope:true,WorkerGlobalScope:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,IDBKeyRange:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLContextEvent:true,WebGLFramebuffer:true,WebGLProgram:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true})
A.c3.$nativeSuperclassTag="ArrayBufferView"
A.df.$nativeSuperclassTag="ArrayBufferView"
A.dg.$nativeSuperclassTag="ArrayBufferView"
A.cM.$nativeSuperclassTag="ArrayBufferView"
A.dh.$nativeSuperclassTag="ArrayBufferView"
A.di.$nativeSuperclassTag="ArrayBufferView"
A.cN.$nativeSuperclassTag="ArrayBufferView"
A.dk.$nativeSuperclassTag="EventTarget"
A.dl.$nativeSuperclassTag="EventTarget"
A.dn.$nativeSuperclassTag="EventTarget"
A.dp.$nativeSuperclassTag="EventTarget"})()
Function.prototype.$1$1=function(a){return this(a)}
Function.prototype.$2=function(a,b){return this(a,b)}
Function.prototype.$1=function(a){return this(a)}
Function.prototype.$0=function(){return this()}
Function.prototype.$3=function(a,b,c){return this(a,b,c)}
Function.prototype.$4=function(a,b,c,d){return this(a,b,c,d)}
Function.prototype.$5=function(a,b,c,d,e){return this(a,b,c,d,e)}
Function.prototype.$9=function(a,b,c,d,e,f,g,h,i){return this(a,b,c,d,e,f,g,h,i)}
Function.prototype.$6=function(a,b,c,d,e,f){return this(a,b,c,d,e,f)}
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q)s[q].removeEventListener("load",onLoad,false)
a(b.target)}for(var r=0;r<s.length;++r)s[r].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
var s=A.ph
if(typeof dartMainRunner==="function")dartMainRunner(s,[])
else s([])})})()