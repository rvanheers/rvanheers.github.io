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
a[c]=function(){a[c]=function(){A.oQ(b)}
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
if(a[b]!==s)A.oS(b)
a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s)convertToFastObject(a[s])}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.k0(b)
return new s(c,this)}:function(){if(s===null)s=A.k0(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.k0(a).prototype
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
k3(a,b,c,d){return{i:a,p:b,e:c,x:d}},
fO(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.k1==null){A.oE()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw A.b(A.jK("Return interceptor for "+A.m(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.iI
if(o==null)o=$.iI=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=A.oL(a)
if(p!=null)return p
if(typeof a=="function")return B.T
s=Object.getPrototypeOf(a)
if(s==null)return B.v
if(s===Object.prototype)return B.v
if(typeof q=="function"){o=$.iI
if(o==null)o=$.iI=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:B.h,enumerable:false,writable:true,configurable:true})
return B.h}return B.h},
my(a,b){if(a<0||a>4294967295)throw A.b(A.kE(a,0,4294967295,"length",null))
return J.ku(A.q(new Array(a),b.h("z<0>")),b)},
kt(a,b){if(a<0)throw A.b(A.aJ("Length must be a non-negative integer: "+a,null))
return A.q(new Array(a),b.h("z<0>"))},
ku(a,b){a.fixed$length=Array
return a},
b2(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.co.prototype
return J.dU.prototype}if(typeof a=="string")return J.b7.prototype
if(a==null)return J.cp.prototype
if(typeof a=="boolean")return J.dS.prototype
if(Array.isArray(a))return J.z.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aA.prototype
if(typeof a=="symbol")return J.bx.prototype
if(typeof a=="bigint")return J.bw.prototype
return a}if(a instanceof A.v)return a
return J.fO(a)},
oq(a){if(typeof a=="number")return J.bv.prototype
if(typeof a=="string")return J.b7.prototype
if(a==null)return a
if(Array.isArray(a))return J.z.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aA.prototype
if(typeof a=="symbol")return J.bx.prototype
if(typeof a=="bigint")return J.bw.prototype
return a}if(a instanceof A.v)return a
return J.fO(a)},
ax(a){if(typeof a=="string")return J.b7.prototype
if(a==null)return a
if(Array.isArray(a))return J.z.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aA.prototype
if(typeof a=="symbol")return J.bx.prototype
if(typeof a=="bigint")return J.bw.prototype
return a}if(a instanceof A.v)return a
return J.fO(a)},
ca(a){if(a==null)return a
if(Array.isArray(a))return J.z.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aA.prototype
if(typeof a=="symbol")return J.bx.prototype
if(typeof a=="bigint")return J.bw.prototype
return a}if(a instanceof A.v)return a
return J.fO(a)},
or(a){if(typeof a=="number")return J.bv.prototype
if(typeof a=="string")return J.b7.prototype
if(a==null)return a
if(!(a instanceof A.v))return J.bH.prototype
return a},
cb(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aA.prototype
if(typeof a=="symbol")return J.bx.prototype
if(typeof a=="bigint")return J.bw.prototype
return a}if(a instanceof A.v)return a
return J.fO(a)},
os(a){if(a==null)return a
if(!(a instanceof A.v))return J.bH.prototype
return a},
m1(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.oq(a).q(a,b)},
fS(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.b2(a).K(a,b)},
kc(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.or(a).j(a,b)},
ab(a,b){if(typeof b==="number")if(Array.isArray(a)||typeof a=="string"||A.oH(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.ax(a).i(a,b)},
m2(a,b,c){return J.ca(a).l(a,b,c)},
m3(a,b,c,d){return J.cb(a).cu(a,b,c,d)},
m4(a,b,c,d){return J.cb(a).cI(a,b,c,d)},
m5(a){return J.cb(a).cJ(a)},
m6(a,b){return J.ca(a).p(a,b)},
fT(a,b){return J.ca(a).t(a,b)},
m7(a){return J.os(a).gdh(a)},
m8(a){return J.ca(a).gA(a)},
jw(a){return J.b2(a).gu(a)},
m9(a){return J.cb(a).gd2(a)},
bk(a){return J.ca(a).gF(a)},
ds(a){return J.ax(a).gk(a)},
ma(a){return J.b2(a).gD(a)},
kd(a,b,c){return J.ca(a).aq(a,b,c)},
mb(a,b){return J.b2(a).bO(a,b)},
dt(a){return J.b2(a).m(a)},
bR:function bR(){},
dS:function dS(){},
cp:function cp(){},
a:function a(){},
bz:function bz(){},
ef:function ef(){},
bH:function bH(){},
aA:function aA(){},
bw:function bw(){},
bx:function bx(){},
z:function z(a){this.$ti=a},
ho:function ho(a){this.$ti=a},
bl:function bl(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bv:function bv(){},
co:function co(){},
dU:function dU(){},
b7:function b7(){}},A={jC:function jC(){},
cJ(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
kO(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
mZ(a,b,c){return A.kO(A.cJ(A.cJ(c,a),b))},
dl(a,b,c){return a},
k2(a){var s,r
for(s=$.aa.length,r=0;r<s;++r)if(a===$.aa[r])return!0
return!1},
kx(a,b,c,d){if(t.gw.b(a))return new A.cl(a,b,c.h("@<0>").v(d).h("cl<1,2>"))
return new A.bB(a,b,c.h("@<0>").v(d).h("bB<1,2>"))},
kr(){return new A.bG("No element")},
ct:function ct(a){this.a=a},
jg:function jg(){},
hS:function hS(){},
k:function k(){},
af:function af(){},
bA:function bA(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bB:function bB(a,b,c){this.a=a
this.b=b
this.$ti=c},
cl:function cl(a,b,c){this.a=a
this.b=b
this.$ti=c},
bC:function bC(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
aS:function aS(a,b,c){this.a=a
this.b=b
this.$ti=c},
T:function T(){},
bY:function bY(a){this.a=a},
lK(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
oH(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.aU.b(a)},
m(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.dt(a)
return s},
cE(a){var s,r=$.kC
if(r==null)r=$.kC=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
hM(a){return A.mM(a)},
mM(a){var s,r,q,p
if(a instanceof A.v)return A.a3(A.an(a),null)
s=J.b2(a)
if(s===B.S||s===B.U||t.ak.b(a)){r=B.m(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.a3(A.an(a),null)},
mV(a){if(typeof a=="number"||A.c7(a))return J.dt(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.b6)return a.m(0)
return"Instance of '"+A.hM(a)+"'"},
a_(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
mU(a){return a.b?A.a_(a).getUTCFullYear()+0:A.a_(a).getFullYear()+0},
mS(a){return a.b?A.a_(a).getUTCMonth()+1:A.a_(a).getMonth()+1},
mO(a){return a.b?A.a_(a).getUTCDate()+0:A.a_(a).getDate()+0},
mP(a){return a.b?A.a_(a).getUTCHours()+0:A.a_(a).getHours()+0},
mR(a){return a.b?A.a_(a).getUTCMinutes()+0:A.a_(a).getMinutes()+0},
mT(a){return a.b?A.a_(a).getUTCSeconds()+0:A.a_(a).getSeconds()+0},
mQ(a){return a.b?A.a_(a).getUTCMilliseconds()+0:A.a_(a).getMilliseconds()+0},
b9(a,b,c){var s,r,q={}
q.a=0
s=[]
r=[]
q.a=b.length
B.a.U(s,b)
q.b=""
if(c!=null&&c.a!==0)c.t(0,new A.hL(q,r,s))
return J.mb(a,new A.dT(B.a0,0,s,r,0))},
mN(a,b,c){var s,r,q
if(Array.isArray(b))s=c==null||c.a===0
else s=!1
if(s){r=b.length
if(r===0){if(!!a.$0)return a.$0()}else if(r===1){if(!!a.$1)return a.$1(b[0])}else if(r===2){if(!!a.$2)return a.$2(b[0],b[1])}else if(r===3){if(!!a.$3)return a.$3(b[0],b[1],b[2])}else if(r===4){if(!!a.$4)return a.$4(b[0],b[1],b[2],b[3])}else if(r===5)if(!!a.$5)return a.$5(b[0],b[1],b[2],b[3],b[4])
q=a[""+"$"+r]
if(q!=null)return q.apply(a,b)}return A.mL(a,b,c)},
mL(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g=Array.isArray(b)?b:A.dZ(b,t.z),f=g.length,e=a.$R
if(f<e)return A.b9(a,g,c)
s=a.$D
r=s==null
q=!r?s():null
p=J.b2(a)
o=p.$C
if(typeof o=="string")o=p[o]
if(r){if(c!=null&&c.a!==0)return A.b9(a,g,c)
if(f===e)return o.apply(a,g)
return A.b9(a,g,c)}if(Array.isArray(q)){if(c!=null&&c.a!==0)return A.b9(a,g,c)
n=e+q.length
if(f>n)return A.b9(a,g,null)
if(f<n){m=q.slice(f-e)
if(g===b)g=A.dZ(g,t.z)
B.a.U(g,m)}return o.apply(a,g)}else{if(f>e)return A.b9(a,g,c)
if(g===b)g=A.dZ(g,t.z)
l=Object.keys(q)
if(c==null)for(r=l.length,k=0;k<l.length;l.length===r||(0,A.ao)(l),++k){j=q[A.H(l[k])]
if(B.o===j)return A.b9(a,g,c)
B.a.n(g,j)}else{for(r=l.length,i=0,k=0;k<l.length;l.length===r||(0,A.ao)(l),++k){h=A.H(l[k])
if(c.a4(0,h)){++i
B.a.n(g,c.i(0,h))}else{j=q[h]
if(B.o===j)return A.b9(a,g,c)
B.a.n(g,j)}}if(i!==c.a)return A.b9(a,g,c)}return o.apply(a,g)}},
am(a){throw A.b(A.lz(a))},
d(a,b){if(a==null)J.ds(a)
throw A.b(A.fN(a,b))},
fN(a,b){var s,r="index"
if(!A.fK(b))return new A.aI(!0,b,r,null)
s=A.t(J.ds(a))
if(b<0||b>=s)return A.O(b,s,a,r)
return A.kF(b,r)},
lz(a){return new A.aI(!0,a,null,null)},
b(a){return A.lF(new Error(),a)},
lF(a,b){var s
if(b==null)b=new A.aV()
a.dartException=b
s=A.oT
if("defineProperty" in Object){Object.defineProperty(a,"message",{get:s})
a.name=""}else a.toString=s
return a},
oT(){return J.dt(this.dartException)},
bj(a){throw A.b(a)},
oR(a,b){throw A.lF(b,a)},
ao(a){throw A.b(A.X(a))},
aW(a){var s,r,q,p,o,n
a=A.oP(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.q([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.i8(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
i9(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
kR(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
jD(a,b){var s=b==null,r=s?null:b.method
return new A.dV(a,r,s?null:b.receiver)},
aH(a){if(a==null)return new A.hJ(a)
if(typeof a!=="object")return a
if("dartException" in a)return A.bM(a,a.dartException)
return A.od(a)},
bM(a,b){if(t.a.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
od(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.f.bx(r,16)&8191)===10)switch(q){case 438:return A.bM(a,A.jD(A.m(s)+" (Error "+q+")",null))
case 445:case 5007:A.m(s)
return A.bM(a,new A.cC())}}if(a instanceof TypeError){p=$.lM()
o=$.lN()
n=$.lO()
m=$.lP()
l=$.lS()
k=$.lT()
j=$.lR()
$.lQ()
i=$.lV()
h=$.lU()
g=p.M(s)
if(g!=null)return A.bM(a,A.jD(A.H(s),g))
else{g=o.M(s)
if(g!=null){g.method="call"
return A.bM(a,A.jD(A.H(s),g))}else if(n.M(s)!=null||m.M(s)!=null||l.M(s)!=null||k.M(s)!=null||j.M(s)!=null||m.M(s)!=null||i.M(s)!=null||h.M(s)!=null){A.H(s)
return A.bM(a,new A.cC())}}return A.bM(a,new A.eG(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.cH()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.bM(a,new A.aI(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.cH()
return a},
b3(a){var s
if(a==null)return new A.d8(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.d8(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
jh(a){if(a==null)return J.jw(a)
if(typeof a=="object")return A.cE(a)
return J.jw(a)},
op(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.l(0,a[s],a[r])}return b},
nO(a,b,c,d,e,f){t.Z.a(a)
switch(A.t(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.b(A.dI("Unsupported number of arguments for wrapped closure"))},
aG(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=A.om(a,b)
a.$identity=s
return s},
om(a,b){var s
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
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.nO)},
mk(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.et().constructor.prototype):Object.create(new A.bN(null,null).constructor.prototype)
s.$initialize=s.constructor
if(h)r=function static_tear_off(){this.$initialize()}
else r=function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.kj(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.mg(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.kj(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
mg(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.b("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.md)}throw A.b("Error in functionType of tearoff")},
mh(a,b,c,d){var s=A.ki
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
kj(a,b,c,d){var s,r
if(c)return A.mj(a,b,d)
s=b.length
r=A.mh(s,d,a,b)
return r},
mi(a,b,c,d){var s=A.ki,r=A.me
switch(b?-1:a){case 0:throw A.b(new A.en("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
mj(a,b,c){var s,r
if($.kg==null)$.kg=A.kf("interceptor")
if($.kh==null)$.kh=A.kf("receiver")
s=b.length
r=A.mi(s,c,a,b)
return r},
k0(a){return A.mk(a)},
md(a,b){return A.iQ(v.typeUniverse,A.an(a.a),b)},
ki(a){return a.a},
me(a){return a.b},
kf(a){var s,r,q,p=new A.bN("receiver","interceptor"),o=J.ku(Object.getOwnPropertyNames(p),t.X)
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw A.b(A.aJ("Field name "+a+" not found.",null))},
ol(a){if(a==null)A.oe("boolean expression must not be null")
return a},
oe(a){throw A.b(new A.eN(a))},
oQ(a){throw A.b(new A.eS(a))},
lD(a){return v.getIsolateTag(a)},
q4(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
oL(a){var s,r,q,p,o,n=A.H($.lE.$1(a)),m=$.j4[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.j8[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.ny($.ly.$2(a,n))
if(q!=null){m=$.j4[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.j8[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.jf(s)
$.j4[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.j8[n]=s
return s}if(p==="-"){o=A.jf(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.lI(a,s)
if(p==="*")throw A.b(A.jK(n))
if(v.leafTags[n]===true){o=A.jf(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.lI(a,s)},
lI(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.k3(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
jf(a){return J.k3(a,!1,null,!!a.$iu)},
oN(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.jf(s)
else return J.k3(s,c,null,null)},
oE(){if(!0===$.k1)return
$.k1=!0
A.oF()},
oF(){var s,r,q,p,o,n,m,l
$.j4=Object.create(null)
$.j8=Object.create(null)
A.oD()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.lJ.$1(o)
if(n!=null){m=A.oN(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
oD(){var s,r,q,p,o,n,m=B.H()
m=A.c9(B.I,A.c9(B.J,A.c9(B.n,A.c9(B.n,A.c9(B.K,A.c9(B.L,A.c9(B.M(B.m),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.lE=new A.j5(p)
$.ly=new A.j6(o)
$.lJ=new A.j7(n)},
c9(a,b){return a(b)||b},
on(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
oP(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
cf:function cf(a,b){this.a=a
this.$ti=b},
ce:function ce(){},
cg:function cg(a,b,c){this.a=a
this.b=b
this.$ti=c},
cZ:function cZ(a,b){this.a=a
this.$ti=b},
d_:function d_(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
dT:function dT(a,b,c,d,e){var _=this
_.a=a
_.c=b
_.d=c
_.e=d
_.f=e},
hL:function hL(a,b,c){this.a=a
this.b=b
this.c=c},
i8:function i8(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
cC:function cC(){},
dV:function dV(a,b,c){this.a=a
this.b=b
this.c=c},
eG:function eG(a){this.a=a},
hJ:function hJ(a){this.a=a},
d8:function d8(a){this.a=a
this.b=null},
b6:function b6(){},
dB:function dB(){},
dC:function dC(){},
ex:function ex(){},
et:function et(){},
bN:function bN(a,b){this.a=a
this.b=b},
eS:function eS(a){this.a=a},
en:function en(a){this.a=a},
eN:function eN(a){this.a=a},
iK:function iK(){},
aO:function aO(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
hp:function hp(a){this.a=a},
hv:function hv(a,b){this.a=a
this.b=b
this.c=null},
as:function as(a,b){this.a=a
this.$ti=b},
cu:function cu(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
j5:function j5(a){this.a=a},
j6:function j6(a){this.a=a},
j7:function j7(a){this.a=a},
oS(a){A.oR(new A.ct("Field '"+a+"' has been assigned during initialization."),new Error())},
l_(a){var s=new A.ir(a)
return s.b=s},
ir:function ir(a){this.a=a
this.b=null},
iU(a,b,c){},
dh(a){return a},
mB(a){return new Float32Array(a)},
mC(a){return new Uint16Array(a)},
mD(a,b,c){A.iU(a,b,c)
return c==null?new Uint8Array(a,b):new Uint8Array(a,b,c)},
b_(a,b,c){if(a>>>0!==a||a>=c)throw A.b(A.fN(b,a))},
e3:function e3(){},
cy:function cy(){},
e4:function e4(){},
bU:function bU(){},
cw:function cw(){},
cx:function cx(){},
cv:function cv(){},
e5:function e5(){},
e6:function e6(){},
e7:function e7(){},
e8:function e8(){},
cz:function cz(){},
e9:function e9(){},
cA:function cA(){},
ea:function ea(){},
d1:function d1(){},
d2:function d2(){},
d3:function d3(){},
d4:function d4(){},
kH(a,b){var s=b.c
return s==null?b.c=A.jQ(a,b.y,!0):s},
jI(a,b){var s=b.c
return s==null?b.c=A.dd(a,"aq",[b.y]):s},
mY(a){var s=a.d
if(s!=null)return s
return a.d=new Map()},
kI(a){var s=a.x
if(s===6||s===7||s===8)return A.kI(a.y)
return s===12||s===13},
mX(a){return a.at},
W(a){return A.fz(v.typeUniverse,a,!1)},
bh(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.x
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.y
r=A.bh(a,s,a0,a1)
if(r===s)return b
return A.lc(a,r,!0)
case 7:s=b.y
r=A.bh(a,s,a0,a1)
if(r===s)return b
return A.jQ(a,r,!0)
case 8:s=b.y
r=A.bh(a,s,a0,a1)
if(r===s)return b
return A.lb(a,r,!0)
case 9:q=b.z
p=A.dk(a,q,a0,a1)
if(p===q)return b
return A.dd(a,b.y,p)
case 10:o=b.y
n=A.bh(a,o,a0,a1)
m=b.z
l=A.dk(a,m,a0,a1)
if(n===o&&l===m)return b
return A.jO(a,n,l)
case 12:k=b.y
j=A.bh(a,k,a0,a1)
i=b.z
h=A.oa(a,i,a0,a1)
if(j===k&&h===i)return b
return A.la(a,j,h)
case 13:g=b.z
a1+=g.length
f=A.dk(a,g,a0,a1)
o=b.y
n=A.bh(a,o,a0,a1)
if(f===g&&n===o)return b
return A.jP(a,n,f,!0)
case 14:e=b.y
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw A.b(A.dw("Attempted to substitute unexpected RTI kind "+c))}},
dk(a,b,c,d){var s,r,q,p,o=b.length,n=A.iR(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.bh(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
ob(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.iR(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.bh(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
oa(a,b,c,d){var s,r=b.a,q=A.dk(a,r,c,d),p=b.b,o=A.dk(a,p,c,d),n=b.c,m=A.ob(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.f1()
s.a=q
s.b=o
s.c=m
return s},
q(a,b){a[v.arrayRti]=b
return a},
lB(a){var s,r=a.$S
if(r!=null){if(typeof r=="number")return A.ou(r)
s=a.$S()
return s}return null},
oG(a,b){var s
if(A.kI(b))if(a instanceof A.b6){s=A.lB(a)
if(s!=null)return s}return A.an(a)},
an(a){if(a instanceof A.v)return A.x(a)
if(Array.isArray(a))return A.aF(a)
return A.jW(J.b2(a))},
aF(a){var s=a[v.arrayRti],r=t.b
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
x(a){var s=a.$ti
return s!=null?s:A.jW(a)},
jW(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.nN(a,s)},
nN(a,b){var s=a instanceof A.b6?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.nu(v.typeUniverse,s.name)
b.$ccache=r
return r},
ou(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.fz(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
ot(a){return A.bL(A.x(a))},
o9(a){var s=a instanceof A.b6?A.lB(a):null
if(s!=null)return s
if(t.dm.b(a))return J.ma(a).a
if(Array.isArray(a))return A.aF(a)
return A.an(a)},
bL(a){var s=a.w
return s==null?a.w=A.lk(a):s},
lk(a){var s,r,q=a.at,p=q.replace(/\*/g,"")
if(p===q)return a.w=new A.iP(a)
s=A.fz(v.typeUniverse,p,!0)
r=s.w
return r==null?s.w=A.lk(s):r},
ay(a){return A.bL(A.fz(v.typeUniverse,a,!1))},
nM(a){var s,r,q,p,o,n,m=this
if(m===t.K)return A.b0(m,a,A.nT)
if(!A.b4(m))if(!(m===t._))s=!1
else s=!0
else s=!0
if(s)return A.b0(m,a,A.nX)
s=m.x
if(s===7)return A.b0(m,a,A.nK)
if(s===1)return A.b0(m,a,A.lq)
r=s===6?m.y:m
q=r.x
if(q===8)return A.b0(m,a,A.nP)
if(r===t.S)p=A.fK
else if(r===t.i||r===t.H)p=A.nS
else if(r===t.N)p=A.nV
else p=r===t.y?A.c7:null
if(p!=null)return A.b0(m,a,p)
if(q===9){o=r.y
if(r.z.every(A.oJ)){m.r="$i"+o
if(o==="l")return A.b0(m,a,A.nR)
return A.b0(m,a,A.nW)}}else if(q===11){n=A.on(r.y,r.z)
return A.b0(m,a,n==null?A.lq:n)}return A.b0(m,a,A.nI)},
b0(a,b,c){a.b=c
return a.b(b)},
nL(a){var s,r=this,q=A.nH
if(!A.b4(r))if(!(r===t._))s=!1
else s=!0
else s=!0
if(s)q=A.nz
else if(r===t.K)q=A.nx
else{s=A.dm(r)
if(s)q=A.nJ}r.a=q
return r.a(a)},
fL(a){var s,r=a.x
if(!A.b4(a))if(!(a===t._))if(!(a===t.aw))if(r!==7)if(!(r===6&&A.fL(a.y)))s=r===8&&A.fL(a.y)||a===t.P||a===t.T
else s=!0
else s=!0
else s=!0
else s=!0
else s=!0
return s},
nI(a){var s=this
if(a==null)return A.fL(s)
return A.oI(v.typeUniverse,A.oG(a,s),s)},
nK(a){if(a==null)return!0
return this.y.b(a)},
nW(a){var s,r=this
if(a==null)return A.fL(r)
s=r.r
if(a instanceof A.v)return!!a[s]
return!!J.b2(a)[s]},
nR(a){var s,r=this
if(a==null)return A.fL(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.r
if(a instanceof A.v)return!!a[s]
return!!J.b2(a)[s]},
nH(a){var s,r=this
if(a==null){s=A.dm(r)
if(s)return a}else if(r.b(a))return a
A.ll(a,r)},
nJ(a){var s=this
if(a==null)return a
else if(s.b(a))return a
A.ll(a,s)},
ll(a,b){throw A.b(A.nj(A.l0(a,A.a3(b,null))))},
l0(a,b){return A.bq(a)+": type '"+A.a3(A.o9(a),null)+"' is not a subtype of type '"+b+"'"},
nj(a){return new A.db("TypeError: "+a)},
V(a,b){return new A.db("TypeError: "+A.l0(a,b))},
nP(a){var s=this,r=s.x===6?s.y:s
return r.y.b(a)||A.jI(v.typeUniverse,r).b(a)},
nT(a){return a!=null},
nx(a){if(a!=null)return a
throw A.b(A.V(a,"Object"))},
nX(a){return!0},
nz(a){return a},
lq(a){return!1},
c7(a){return!0===a||!1===a},
jS(a){if(!0===a)return!0
if(!1===a)return!1
throw A.b(A.V(a,"bool"))},
py(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.b(A.V(a,"bool"))},
px(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.b(A.V(a,"bool?"))},
bg(a){if(typeof a=="number")return a
throw A.b(A.V(a,"double"))},
pA(a){if(typeof a=="number")return a
if(a==null)return a
throw A.b(A.V(a,"double"))},
pz(a){if(typeof a=="number")return a
if(a==null)return a
throw A.b(A.V(a,"double?"))},
fK(a){return typeof a=="number"&&Math.floor(a)===a},
t(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.b(A.V(a,"int"))},
pB(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.b(A.V(a,"int"))},
lf(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.b(A.V(a,"int?"))},
nS(a){return typeof a=="number"},
lg(a){if(typeof a=="number")return a
throw A.b(A.V(a,"num"))},
pC(a){if(typeof a=="number")return a
if(a==null)return a
throw A.b(A.V(a,"num"))},
nw(a){if(typeof a=="number")return a
if(a==null)return a
throw A.b(A.V(a,"num?"))},
nV(a){return typeof a=="string"},
H(a){if(typeof a=="string")return a
throw A.b(A.V(a,"String"))},
pD(a){if(typeof a=="string")return a
if(a==null)return a
throw A.b(A.V(a,"String"))},
ny(a){if(typeof a=="string")return a
if(a==null)return a
throw A.b(A.V(a,"String?"))},
lu(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.a3(a[q],b)
return s},
o3(a,b){var s,r,q,p,o,n,m=a.y,l=a.z
if(""===m)return"("+A.lu(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.a3(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
lm(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=", "
if(a6!=null){s=a6.length
if(a5==null){a5=A.q([],t.s)
r=null}else r=a5.length
q=a5.length
for(p=s;p>0;--p)B.a.n(a5,"T"+(q+p))
for(o=t.X,n=t._,m="<",l="",p=0;p<s;++p,l=a3){k=a5.length
j=k-1-p
if(!(j>=0))return A.d(a5,j)
m=B.p.q(m+l,a5[j])
i=a6[p]
h=i.x
if(!(h===2||h===3||h===4||h===5||i===o))if(!(i===n))k=!1
else k=!0
else k=!0
if(!k)m+=" extends "+A.a3(i,a5)}m+=">"}else{m=""
r=null}o=a4.y
g=a4.z
f=g.a
e=f.length
d=g.b
c=d.length
b=g.c
a=b.length
a0=A.a3(o,a5)
for(a1="",a2="",p=0;p<e;++p,a2=a3)a1+=a2+A.a3(f[p],a5)
if(c>0){a1+=a2+"["
for(a2="",p=0;p<c;++p,a2=a3)a1+=a2+A.a3(d[p],a5)
a1+="]"}if(a>0){a1+=a2+"{"
for(a2="",p=0;p<a;p+=3,a2=a3){a1+=a2
if(b[p+1])a1+="required "
a1+=A.a3(b[p+2],a5)+" "+b[p]}a1+="}"}if(r!=null){a5.toString
a5.length=r}return m+"("+a1+") => "+a0},
a3(a,b){var s,r,q,p,o,n,m,l=a.x
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=A.a3(a.y,b)
return s}if(l===7){r=a.y
s=A.a3(r,b)
q=r.x
return(q===12||q===13?"("+s+")":s)+"?"}if(l===8)return"FutureOr<"+A.a3(a.y,b)+">"
if(l===9){p=A.oc(a.y)
o=a.z
return o.length>0?p+("<"+A.lu(o,b)+">"):p}if(l===11)return A.o3(a,b)
if(l===12)return A.lm(a,b,null)
if(l===13)return A.lm(a.y,b,a.z)
if(l===14){n=a.y
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.d(b,n)
return b[n]}return"?"},
oc(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
nv(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
nu(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.fz(a,b,!1)
else if(typeof m=="number"){s=m
r=A.de(a,5,"#")
q=A.iR(s)
for(p=0;p<s;++p)q[p]=r
o=A.dd(a,b,q)
n[b]=o
return o}else return m},
ns(a,b){return A.ld(a.tR,b)},
nr(a,b){return A.ld(a.eT,b)},
fz(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.l7(A.l5(a,null,b,c))
r.set(b,s)
return s},
iQ(a,b,c){var s,r,q=b.Q
if(q==null)q=b.Q=new Map()
s=q.get(c)
if(s!=null)return s
r=A.l7(A.l5(a,b,c,!0))
q.set(c,r)
return r},
nt(a,b,c){var s,r,q,p=b.as
if(p==null)p=b.as=new Map()
s=c.at
r=p.get(s)
if(r!=null)return r
q=A.jO(a,b,c.x===10?c.z:[c])
p.set(s,q)
return q},
aZ(a,b){b.a=A.nL
b.b=A.nM
return b},
de(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.ai(null,null)
s.x=b
s.at=c
r=A.aZ(a,s)
a.eC.set(c,r)
return r},
lc(a,b,c){var s,r=b.at+"*",q=a.eC.get(r)
if(q!=null)return q
s=A.no(a,b,r,c)
a.eC.set(r,s)
return s},
no(a,b,c,d){var s,r,q
if(d){s=b.x
if(!A.b4(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new A.ai(null,null)
q.x=6
q.y=b
q.at=c
return A.aZ(a,q)},
jQ(a,b,c){var s,r=b.at+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.nn(a,b,r,c)
a.eC.set(r,s)
return s},
nn(a,b,c,d){var s,r,q,p
if(d){s=b.x
if(!A.b4(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&A.dm(b.y)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.aw)return t.P
else if(s===6){q=b.y
if(q.x===8&&A.dm(q.y))return q
else return A.kH(a,b)}}p=new A.ai(null,null)
p.x=7
p.y=b
p.at=c
return A.aZ(a,p)},
lb(a,b,c){var s,r=b.at+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.nl(a,b,r,c)
a.eC.set(r,s)
return s},
nl(a,b,c,d){var s,r,q
if(d){s=b.x
if(!A.b4(b))if(!(b===t._))r=!1
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return A.dd(a,"aq",[b])
else if(b===t.P||b===t.T)return t.eH}q=new A.ai(null,null)
q.x=8
q.y=b
q.at=c
return A.aZ(a,q)},
np(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.ai(null,null)
s.x=14
s.y=b
s.at=q
r=A.aZ(a,s)
a.eC.set(q,r)
return r},
dc(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].at
return s},
nk(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].at}return s},
dd(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.dc(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.ai(null,null)
r.x=9
r.y=b
r.z=c
if(c.length>0)r.c=c[0]
r.at=p
q=A.aZ(a,r)
a.eC.set(p,q)
return q},
jO(a,b,c){var s,r,q,p,o,n
if(b.x===10){s=b.y
r=b.z.concat(c)}else{r=c
s=b}q=s.at+(";<"+A.dc(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.ai(null,null)
o.x=10
o.y=s
o.z=r
o.at=q
n=A.aZ(a,o)
a.eC.set(q,n)
return n},
nq(a,b,c){var s,r,q="+"+(b+"("+A.dc(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.ai(null,null)
s.x=11
s.y=b
s.z=c
s.at=q
r=A.aZ(a,s)
a.eC.set(q,r)
return r},
la(a,b,c){var s,r,q,p,o,n=b.at,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.dc(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.dc(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.nk(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.ai(null,null)
p.x=12
p.y=b
p.z=c
p.at=r
o=A.aZ(a,p)
a.eC.set(r,o)
return o},
jP(a,b,c,d){var s,r=b.at+("<"+A.dc(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.nm(a,b,c,r,d)
a.eC.set(r,s)
return s},
nm(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.iR(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.x===1){r[p]=o;++q}}if(q>0){n=A.bh(a,b,r,0)
m=A.dk(a,c,r,0)
return A.jP(a,n,m,c!==m)}}l=new A.ai(null,null)
l.x=13
l.y=b
l.z=c
l.at=d
return A.aZ(a,l)},
l5(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
l7(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.nc(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.l6(a,r,l,k,!1)
else if(q===46)r=A.l6(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.bf(a.u,a.e,k.pop()))
break
case 94:k.push(A.np(a.u,k.pop()))
break
case 35:k.push(A.de(a.u,5,"#"))
break
case 64:k.push(A.de(a.u,2,"@"))
break
case 126:k.push(A.de(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.ne(a,k)
break
case 38:A.nd(a,k)
break
case 42:p=a.u
k.push(A.lc(p,A.bf(p,a.e,k.pop()),a.n))
break
case 63:p=a.u
k.push(A.jQ(p,A.bf(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.lb(p,A.bf(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.nb(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.l8(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.ng(a.u,a.e,o)
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
return A.bf(a.u,a.e,m)},
nc(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
l6(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.x===10)o=o.y
n=A.nv(s,o.y)[p]
if(n==null)A.bj('No "'+p+'" in "'+A.mX(o)+'"')
d.push(A.iQ(s,o,n))}else d.push(p)
return m},
ne(a,b){var s,r=a.u,q=A.l4(a,b),p=b.pop()
if(typeof p=="string")b.push(A.dd(r,p,q))
else{s=A.bf(r,a.e,p)
switch(s.x){case 12:b.push(A.jP(r,s,q,a.n))
break
default:b.push(A.jO(r,s,q))
break}}},
nb(a,b){var s,r,q,p,o,n=null,m=a.u,l=b.pop()
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
s=r}q=A.l4(a,b)
l=b.pop()
switch(l){case-3:l=b.pop()
if(s==null)s=m.sEA
if(r==null)r=m.sEA
p=A.bf(m,a.e,l)
o=new A.f1()
o.a=q
o.b=s
o.c=r
b.push(A.la(m,p,o))
return
case-4:b.push(A.nq(m,b.pop(),q))
return
default:throw A.b(A.dw("Unexpected state under `()`: "+A.m(l)))}},
nd(a,b){var s=b.pop()
if(0===s){b.push(A.de(a.u,1,"0&"))
return}if(1===s){b.push(A.de(a.u,4,"1&"))
return}throw A.b(A.dw("Unexpected extended operation "+A.m(s)))},
l4(a,b){var s=b.splice(a.p)
A.l8(a.u,a.e,s)
a.p=b.pop()
return s},
bf(a,b,c){if(typeof c=="string")return A.dd(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.nf(a,b,c)}else return c},
l8(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.bf(a,b,c[s])},
ng(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.bf(a,b,c[s])},
nf(a,b,c){var s,r,q=b.x
if(q===10){if(c===0)return b.y
s=b.z
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.y
q=b.x}else if(c===0)return b
if(q!==9)throw A.b(A.dw("Indexed base must be an interface type"))
s=b.z
if(c<=s.length)return s[c-1]
throw A.b(A.dw("Bad index "+c+" for "+b.m(0)))},
oI(a,b,c){var s,r=A.mY(b),q=r.get(c)
if(q!=null)return q
s=A.N(a,b,null,c,null)
r.set(c,s)
return s},
N(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(!A.b4(d))if(!(d===t._))s=!1
else s=!0
else s=!0
if(s)return!0
r=b.x
if(r===4)return!0
if(A.b4(b))return!1
if(b.x!==1)s=!1
else s=!0
if(s)return!0
q=r===14
if(q)if(A.N(a,c[b.y],c,d,e))return!0
p=d.x
s=b===t.P||b===t.T
if(s){if(p===8)return A.N(a,b,c,d.y,e)
return d===t.P||d===t.T||p===7||p===6}if(d===t.K){if(r===8)return A.N(a,b.y,c,d,e)
if(r===6)return A.N(a,b.y,c,d,e)
return r!==7}if(r===6)return A.N(a,b.y,c,d,e)
if(p===6){s=A.kH(a,d)
return A.N(a,b,c,s,e)}if(r===8){if(!A.N(a,b.y,c,d,e))return!1
return A.N(a,A.jI(a,b),c,d,e)}if(r===7){s=A.N(a,t.P,c,d,e)
return s&&A.N(a,b.y,c,d,e)}if(p===8){if(A.N(a,b,c,d.y,e))return!0
return A.N(a,b,c,A.jI(a,d),e)}if(p===7){s=A.N(a,b,c,t.P,e)
return s||A.N(a,b,c,d.y,e)}if(q)return!1
s=r!==12
if((!s||r===13)&&d===t.Z)return!0
o=r===11
if(o&&d===t.gT)return!0
if(p===13){if(b===t.e)return!0
if(r!==13)return!1
n=b.z
m=d.z
l=n.length
if(l!==m.length)return!1
c=c==null?n:n.concat(c)
e=e==null?m:m.concat(e)
for(k=0;k<l;++k){j=n[k]
i=m[k]
if(!A.N(a,j,c,i,e)||!A.N(a,i,e,j,c))return!1}return A.lp(a,b.y,c,d.y,e)}if(p===12){if(b===t.e)return!0
if(s)return!1
return A.lp(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return A.nQ(a,b,c,d,e)}if(o&&p===11)return A.nU(a,b,c,d,e)
return!1},
lp(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!A.N(a3,a4.y,a5,a6.y,a7))return!1
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
if(!A.N(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.N(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.N(a3,k[h],a7,g,a5))return!1}f=s.c
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
if(!A.N(a3,e[a+2],a7,g,a5))return!1
break}}for(;b<d;){if(f[b+1])return!1
b+=3}return!0},
nQ(a,b,c,d,e){var s,r,q,p,o,n,m,l=b.y,k=d.y
for(;l!==k;){s=a.tR[l]
if(s==null)return!1
if(typeof s=="string"){l=s
continue}r=s[k]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.iQ(a,b,r[o])
return A.le(a,p,null,c,d.z,e)}n=b.z
m=d.z
return A.le(a,n,null,c,m,e)},
le(a,b,c,d,e,f){var s,r,q,p=b.length
for(s=0;s<p;++s){r=b[s]
q=e[s]
if(!A.N(a,r,d,q,f))return!1}return!0},
nU(a,b,c,d,e){var s,r=b.z,q=d.z,p=r.length
if(p!==q.length)return!1
if(b.y!==d.y)return!1
for(s=0;s<p;++s)if(!A.N(a,r[s],c,q[s],e))return!1
return!0},
dm(a){var s,r=a.x
if(!(a===t.P||a===t.T))if(!A.b4(a))if(r!==7)if(!(r===6&&A.dm(a.y)))s=r===8&&A.dm(a.y)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
oJ(a){var s
if(!A.b4(a))if(!(a===t._))s=!1
else s=!0
else s=!0
return s},
b4(a){var s=a.x
return s===2||s===3||s===4||s===5||a===t.X},
ld(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
iR(a){return a>0?new Array(a):v.typeUniverse.sEA},
ai:function ai(a,b){var _=this
_.a=a
_.b=b
_.w=_.r=_.e=_.d=_.c=null
_.x=0
_.at=_.as=_.Q=_.z=_.y=null},
f1:function f1(){this.c=this.b=this.a=null},
iP:function iP(a){this.a=a},
eZ:function eZ(){},
db:function db(a){this.a=a},
n3(){var s,r,q={}
if(self.scheduleImmediate!=null)return A.of()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(A.aG(new A.im(q),1)).observe(s,{childList:true})
return new A.il(q,s,r)}else if(self.setImmediate!=null)return A.og()
return A.oh()},
n4(a){self.scheduleImmediate(A.aG(new A.io(t.M.a(a)),0))},
n5(a){self.setImmediate(A.aG(new A.ip(t.M.a(a)),0))},
n6(a){t.M.a(a)
A.ni(0,a)},
ni(a,b){var s=new A.iN()
s.ce(a,b)
return s},
fW(a,b){var s=A.dl(a,"error",t.K)
return new A.cd(s,b==null?A.jx(a):b)},
jx(a){var s
if(t.a.b(a)){s=a.gX()
if(s!=null)return s}return B.Q},
mq(a,b){var s,r,q,p,o,n,m,l,k,j,i,h={},g=null,f=!1,e=b.h("F<l<0>>"),d=new A.F($.C,e)
h.a=null
h.b=0
s=A.l_("error")
r=A.l_("stackTrace")
q=new A.hg(h,g,f,d,s,r)
try{for(l=t.P,k=0,j=0;k<2;++k){p=a[k]
o=j
p.b1(new A.hf(h,o,d,g,f,s,r,b),q,l)
j=++h.b}if(j===0){l=d
l.af(A.q([],b.h("z<0>")))
return l}h.a=A.hx(j,null,!1,b.h("0?"))}catch(i){n=A.aH(i)
m=A.b3(i)
if(h.b===0||A.ol(f)){l=n
r=m
A.dl(l,"error",t.K)
$.C!==B.d
if(r==null)r=A.jx(l)
e=new A.F($.C,e)
e.bd(l,r)
return e}else{s.b=n
r.b=m}}return d},
l1(a,b){var s,r,q
for(s=t.c;r=a.a,(r&4)!==0;)a=s.a(a.c)
if((r&24)!==0){q=b.aj()
b.ae(a)
A.c2(b,q)}else{q=t.F.a(b.c)
b.bw(a)
a.aQ(q)}},
n9(a,b){var s,r,q,p={},o=p.a=a
for(s=t.c;r=o.a,(r&4)!==0;o=a){a=s.a(o.c)
p.a=a}if((r&24)===0){q=t.F.a(b.c)
b.bw(o)
p.a.aQ(q)
return}if((r&16)===0&&b.c==null){b.ae(o)
return}b.a^=2
A.bK(null,null,b.b,t.M.a(new A.iz(p,b)))},
c2(a,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c={},b=c.a=a
for(s=t.t,r=t.F,q=t.b9;!0;){p={}
o=b.a
n=(o&16)===0
m=!n
if(a0==null){if(m&&(o&1)===0){l=s.a(b.c)
A.fM(l.a,l.b)}return}p.a=a0
k=a0.a
for(b=a0;k!=null;b=k,k=j){b.a=null
A.c2(c.a,b)
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
A.fM(i.a,i.b)
return}f=$.C
if(f!==g)$.C=g
else f=null
b=b.c
if((b&15)===8)new A.iG(p,c,m).$0()
else if(n){if((b&1)!==0)new A.iF(p,i).$0()}else if((b&2)!==0)new A.iE(c,p).$0()
if(f!=null)$.C=f
b=p.c
if(b instanceof A.F){o=p.a.$ti
o=o.h("aq<2>").b(b)||!o.z[1].b(b)}else o=!1
if(o){q.a(b)
e=p.a.b
if((b.a&24)!==0){d=r.a(e.c)
e.c=null
a0=e.ak(d)
e.a=b.a&30|e.a&1
e.c=b.c
c.a=b
continue}else A.l1(b,e)
return}}e=p.a.b
d=r.a(e.c)
e.c=null
a0=e.ak(d)
b=p.b
o=p.c
if(!b){e.$ti.c.a(o)
e.a=8
e.c=o}else{s.a(o)
e.a=e.a&1|16
e.c=o}c.a=e
b=e}},
o4(a,b){var s
if(t.C.b(a))return b.bQ(a,t.z,t.K,t.l)
s=t.v
if(s.b(a))return s.a(a)
throw A.b(A.ke(a,"onError",u.c))},
nZ(){var s,r
for(s=$.c8;s!=null;s=$.c8){$.dj=null
r=s.b
$.c8=r
if(r==null)$.di=null
s.a.$0()}},
o8(){$.jX=!0
try{A.nZ()}finally{$.dj=null
$.jX=!1
if($.c8!=null)$.k5().$1(A.lA())}},
lw(a){var s=new A.eO(a),r=$.di
if(r==null){$.c8=$.di=s
if(!$.jX)$.k5().$1(A.lA())}else $.di=r.b=s},
o7(a){var s,r,q,p=$.c8
if(p==null){A.lw(a)
$.dj=$.di
return}s=new A.eO(a)
r=$.dj
if(r==null){s.b=p
$.c8=$.dj=s}else{q=r.b
s.b=q
$.dj=r.b=s
if(q==null)$.di=s}},
k4(a){var s,r=null,q=$.C
if(B.d===q){A.bK(r,r,B.d,a)
return}s=!1
if(s){A.bK(r,r,q,t.M.a(a))
return}A.bK(r,r,q,t.M.a(q.bB(a)))},
hX(a){return new A.aX(null,null,a.h("aX<0>"))},
lv(a){return},
kZ(a,b,c){var s=b==null?A.oi():b
return t.a7.v(c).h("1(2)").a(s)},
n7(a,b){if(b==null)b=A.ok()
if(t.da.b(b))return a.bQ(b,t.z,t.K,t.l)
if(t.d5.b(b))return t.v.a(b)
throw A.b(A.aJ("handleError callback must take either an Object (the error), or both an Object (the error) and a StackTrace.",null))},
o_(a){},
o1(a,b){A.fM(a,b)},
o0(){},
o6(a,b,c,d){var s,r,q,p,o,n
try{b.$1(a.$0())}catch(n){s=A.aH(n)
r=A.b3(n)
t.K.a(s)
t.gO.a(r)
q=null
if(q==null)c.$2(s,r)
else{p=J.m7(q)
o=q.gX()
c.$2(p,o)}}},
nC(a,b,c,d){var s,r,q=a.a2(0),p=$.jk()
if(q!==p){s=t.O.a(new A.iT(b,c,d))
p=q.$ti
r=$.C
q.aE(new A.bJ(new A.F(r,p),8,s,null,p.h("@<1>").v(p.c).h("bJ<1,2>")))}else b.L(c,d)},
nD(a,b){return new A.iS(a,b)},
fM(a,b){A.o7(new A.iZ(a,b))},
ls(a,b,c,d,e){var s,r=$.C
if(r===c)return d.$0()
$.C=c
s=r
try{r=d.$0()
return r}finally{$.C=s}},
lt(a,b,c,d,e,f,g){var s,r=$.C
if(r===c)return d.$1(e)
$.C=c
s=r
try{r=d.$1(e)
return r}finally{$.C=s}},
o5(a,b,c,d,e,f,g,h,i){var s,r=$.C
if(r===c)return d.$2(e,f)
$.C=c
s=r
try{r=d.$2(e,f)
return r}finally{$.C=s}},
bK(a,b,c,d){t.M.a(d)
if(B.d!==c)d=c.bB(d)
A.lw(d)},
im:function im(a){this.a=a},
il:function il(a,b,c){this.a=a
this.b=b
this.c=c},
io:function io(a){this.a=a},
ip:function ip(a){this.a=a},
iN:function iN(){},
iO:function iO(a,b){this.a=a
this.b=b},
cd:function cd(a,b){this.a=a
this.b=b},
R:function R(a,b){this.a=a
this.$ti=b},
aw:function aw(a,b,c,d,e,f){var _=this
_.ay=0
_.CW=_.ch=null
_.w=a
_.a=b
_.c=c
_.d=d
_.e=e
_.r=_.f=null
_.$ti=f},
cN:function cN(){},
aX:function aX(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.r=_.e=_.d=null
_.$ti=c},
hg:function hg(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hf:function hf(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
cO:function cO(){},
bI:function bI(a,b){this.a=a
this.$ti=b},
bJ:function bJ(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
F:function F(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
iw:function iw(a,b){this.a=a
this.b=b},
iD:function iD(a,b){this.a=a
this.b=b},
iA:function iA(a){this.a=a},
iB:function iB(a){this.a=a},
iC:function iC(a,b,c){this.a=a
this.b=b
this.c=c},
iz:function iz(a,b){this.a=a
this.b=b},
iy:function iy(a,b){this.a=a
this.b=b},
ix:function ix(a,b,c){this.a=a
this.b=b
this.c=c},
iG:function iG(a,b,c){this.a=a
this.b=b
this.c=c},
iH:function iH(a){this.a=a},
iF:function iF(a,b){this.a=a
this.b=b},
iE:function iE(a,b){this.a=a
this.b=b},
eO:function eO(a){this.a=a
this.b=null},
ba:function ba(){},
i_:function i_(a){this.a=a},
i0:function i0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hY:function hY(a,b){this.a=a
this.b=b},
hZ:function hZ(){},
i1:function i1(a,b){this.a=a
this.b=b},
i2:function i2(a,b){this.a=a
this.b=b},
cP:function cP(){},
cQ:function cQ(){},
c0:function c0(){},
iq:function iq(a){this.a=a},
c5:function c5(){},
bd:function bd(){},
cR:function cR(a,b){this.b=a
this.a=null
this.$ti=b},
eT:function eT(){},
d5:function d5(a){var _=this
_.a=0
_.c=_.b=null
_.$ti=a},
iJ:function iJ(a,b){this.a=a
this.b=b},
c1:function c1(a,b){var _=this
_.a=1
_.b=a
_.c=null
_.$ti=b},
iT:function iT(a,b,c){this.a=a
this.b=b
this.c=c},
iS:function iS(a,b){this.a=a
this.b=b},
dg:function dg(){},
iZ:function iZ(a,b){this.a=a
this.b=b},
fj:function fj(){},
iL:function iL(a,b){this.a=a
this.b=b},
iM:function iM(a,b,c){this.a=a
this.b=b
this.c=c},
l2(a,b){var s=a[b]
return s===a?null:s},
l3(a,b,c){if(c==null)a[b]=a
else a[b]=c},
na(){var s=Object.create(null)
A.l3(s,"<non-identifier-key>",s)
delete s["<non-identifier-key>"]
return s},
dY(a,b,c){return b.h("@<0>").v(c).h("kw<1,2>").a(A.op(a,new A.aO(b.h("@<0>").v(c).h("aO<1,2>"))))},
hw(a,b){return new A.aO(a.h("@<0>").v(b).h("aO<1,2>"))},
hz(a){var s,r={}
if(A.k2(a))return"{...}"
s=new A.cI("")
try{B.a.n($.aa,a)
s.a+="{"
r.a=!0
J.fT(a,new A.hA(r,s))
s.a+="}"}finally{if(0>=$.aa.length)return A.d($.aa,-1)
$.aa.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
cV:function cV(){},
cY:function cY(a){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=a},
cW:function cW(a,b){this.a=a
this.$ti=b},
cX:function cX(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
e:function e(){},
y:function y(){},
hA:function hA(a,b){this.a=a
this.b=b},
df:function df(){},
bS:function bS(){},
cL:function cL(){},
c6:function c6(){},
o2(a,b){var s,r,q,p=null
try{p=JSON.parse(a)}catch(r){s=A.aH(r)
q=String(s)
throw A.b(new A.hd(q))}q=A.iW(p)
return q},
iW(a){var s
if(a==null)return null
if(typeof a!="object")return a
if(Object.getPrototypeOf(a)!==Array.prototype)return new A.f5(a,Object.create(null))
for(s=0;s<a.length;++s)a[s]=A.iW(a[s])
return a},
f5:function f5(a,b){this.a=a
this.b=b
this.c=null},
f6:function f6(a){this.a=a},
dD:function dD(){},
dF:function dF(){},
dW:function dW(){},
hr:function hr(a){this.a=a},
kn(a,b){return A.mN(a,b,null)},
mn(a,b){a=A.b(a)
if(a==null)a=t.K.a(a)
a.stack=b.m(0)
throw a
throw A.b("unreachable")},
kk(a,b){var s
if(Math.abs(a)<=864e13)s=!1
else s=!0
if(s)A.bj(A.aJ("DateTime is outside valid range: "+a,null))
A.dl(b,"isUtc",t.y)
return new A.ci(a,b)},
hx(a,b,c,d){var s,r=c?J.kt(a,d):J.my(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
jE(a,b){var s,r=A.q([],b.h("z<0>"))
for(s=J.bk(a);s.B();)B.a.n(r,b.a(s.gC(s)))
return r},
dZ(a,b){var s=A.mA(a,b)
return s},
mA(a,b){var s,r
if(Array.isArray(a))return A.q(a.slice(0),b.h("z<0>"))
s=A.q([],b.h("z<0>"))
for(r=J.bk(a);r.B();)B.a.n(s,r.gC(r))
return s},
kN(a,b,c){var s=J.bk(b)
if(!s.B())return a
if(c.length===0){do a+=A.m(s.gC(s))
while(s.B())}else{a+=A.m(s.gC(s))
for(;s.B();)a=a+c+A.m(s.gC(s))}return a},
kA(a,b){return new A.eb(a,b.gd4(),b.gd7(),b.gd5())},
ml(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
mm(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
dG(a){if(a>=10)return""+a
return"0"+a},
bq(a){if(typeof a=="number"||A.c7(a)||a==null)return J.dt(a)
if(typeof a=="string")return JSON.stringify(a)
return A.mV(a)},
mo(a,b){A.dl(a,"error",t.K)
A.dl(b,"stackTrace",t.l)
A.mn(a,b)},
dw(a){return new A.cc(a)},
aJ(a,b){return new A.aI(!1,null,b,a)},
ke(a,b,c){return new A.aI(!0,a,b,c)},
kF(a,b){return new A.cF(null,null,!0,a,b,"Value not in range")},
kE(a,b,c,d,e){return new A.cF(b,c,!0,a,d,"Invalid value")},
O(a,b,c,d){return new A.dR(b,!0,a,d,"Index out of range")},
D(a){return new A.eH(a)},
jK(a){return new A.eF(a)},
I(a){return new A.bG(a)},
X(a){return new A.dE(a)},
dI(a){return new A.iv(a)},
mx(a,b,c){var s,r
if(A.k2(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.q([],t.s)
B.a.n($.aa,a)
try{A.nY(a,s)}finally{if(0>=$.aa.length)return A.d($.aa,-1)
$.aa.pop()}r=A.kN(b,t.d.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
ks(a,b,c){var s,r
if(A.k2(a))return b+"..."+c
s=new A.cI(b)
B.a.n($.aa,a)
try{r=s
r.a=A.kN(r.a,a,", ")}finally{if(0>=$.aa.length)return A.d($.aa,-1)
$.aa.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
nY(a,b){var s,r,q,p,o,n,m,l=a.gF(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.B())return
s=A.m(l.gC(l))
B.a.n(b,s)
k+=s.length+2;++j}if(!l.B()){if(j<=5)return
if(0>=b.length)return A.d(b,-1)
r=b.pop()
if(0>=b.length)return A.d(b,-1)
q=b.pop()}else{p=l.gC(l);++j
if(!l.B()){if(j<=4){B.a.n(b,A.m(p))
return}r=A.m(p)
if(0>=b.length)return A.d(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gC(l);++j
for(;l.B();p=o,o=n){n=l.gC(l);++j
if(j>100){while(!0){if(!(k>75&&j>3))break
if(0>=b.length)return A.d(b,-1)
k-=b.pop().length+2;--j}B.a.n(b,"...")
return}}q=A.m(p)
r=A.m(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
while(!0){if(!(k>80&&b.length>3))break
if(0>=b.length)return A.d(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)B.a.n(b,m)
B.a.n(b,q)
B.a.n(b,r)},
kB(a,b,c,d){var s=B.b.gu(a)
b=B.b.gu(b)
c=B.b.gu(c)
d=B.b.gu(d)
d=A.kO(A.cJ(A.cJ(A.cJ(A.cJ($.lX(),s),b),c),d))
return d},
hH:function hH(a,b){this.a=a
this.b=b},
ci:function ci(a,b){this.a=a
this.b=b},
is:function is(){},
E:function E(){},
cc:function cc(a){this.a=a},
aV:function aV(){},
aI:function aI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cF:function cF(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
dR:function dR(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
eb:function eb(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eH:function eH(a){this.a=a},
eF:function eF(a){this.a=a},
bG:function bG(a){this.a=a},
dE:function dE(a){this.a=a},
ee:function ee(){},
cH:function cH(){},
iv:function iv(a){this.a=a},
hd:function hd(a){this.a=a},
f:function f(){},
G:function G(){},
v:function v(){},
fr:function fr(){},
cI:function cI(a){this.a=a},
oo(){var s=document
s.toString
return s},
jy(a,b){var s=document.createElement("canvas")
s.toString
if(b!=null)B.e.sP(s,b)
if(a!=null)B.e.sN(s,a)
return s},
n8(a,b){if(b.parentNode===a){a.removeChild(b).toString
return!0}return!1},
kl(a){t.aS.a(a)
return"wheel"},
jz(a,b){var s,r,q,p,o=a===b
if(!o){s=b.tagName
s.toString
r=s==="HTML"}else r=!0
if(a==null||o){if(r)return new A.b8(0,0,t.x)
throw A.b(A.aJ("Specified element is not a transitive offset parent of this element.",null))}q=A.jz(a.offsetParent,b)
s=a.offsetLeft
s.toString
s=B.b.T(s)
p=a.offsetTop
p.toString
return new A.b8(q.a+s,q.b+B.b.T(p),t.x)},
mr(a){return A.ko(a,null,null,null).b0(new A.hk(),t.N)},
ko(a,b,c,d){var s,r,q=new A.F($.C,t.ao),p=new A.bI(q,t.bj),o=new XMLHttpRequest()
o.toString
B.R.d6(o,"GET",a,!0)
if(c!=null)o.responseType=c
s=t.gx
r=t.D
A.a2(o,"load",s.a(new A.hl(o,p)),!1,r)
A.a2(o,"error",s.a(p.gcM()),!1,r)
o.send()
return q},
mw(a){var s=new IntersectionObserver(A.aG(a,2))
s.toString
return s},
a2(a,b,c,d,e){var s=c==null?null:A.k_(new A.it(c),t.A)
s=new A.cU(a,b,s,!1,e.h("cU<0>"))
s.by()
return s},
nG(a){var s
if(t.e5.b(a))return a
s=new A.ij([],[])
s.c=!0
return s.b3(a)},
k_(a,b){var s=$.C
if(s===B.d)return a
return s.cL(a,b)},
n:function n(){},
fV:function fV(){},
du:function du(){},
dv:function dv(){},
bn:function bn(){},
bo:function bo(){},
bp:function bp(){},
az:function az(){},
h3:function h3(){},
A:function A(){},
ch:function ch(){},
h4:function h4(){},
ap:function ap(){},
aL:function aL(){},
h5:function h5(){},
h6:function h6(){},
h7:function h7(){},
aM:function aM(){},
bO:function bO(){},
aN:function aN(){},
h9:function h9(){},
cj:function cj(){},
ck:function ck(){},
dH:function dH(){},
ha:function ha(){},
h:function h(){},
j:function j(){},
c:function c(){},
Y:function Y(){},
dJ:function dJ(){},
dK:function dK(){},
bP:function bP(){},
bQ:function bQ(){},
dL:function dL(){},
a4:function a4(){},
hj:function hj(){},
bs:function bs(){},
ar:function ar(){},
hk:function hk(){},
hl:function hl(a,b){this.a=a
this.b=b},
bt:function bt(){},
cn:function cn(){},
dQ:function dQ(){},
bu:function bu(){},
hn:function hn(){},
aR:function aR(){},
hy:function hy(){},
bE:function bE(){},
hE:function hE(){},
e_:function e_(){},
hF:function hF(a){this.a=a},
e0:function e0(){},
hG:function hG(a){this.a=a},
a5:function a5(){},
e1:function e1(){},
Z:function Z(){},
r:function r(){},
cB:function cB(){},
a6:function a6(){},
eg:function eg(){},
au:function au(){},
em:function em(){},
hQ:function hQ(a){this.a=a},
ep:function ep(){},
a0:function a0(){},
er:function er(){},
a7:function a7(){},
es:function es(){},
a8:function a8(){},
eu:function eu(){},
hW:function hW(a){this.a=a},
U:function U(){},
a1:function a1(){},
Q:function Q(){},
ey:function ey(){},
ez:function ez(){},
i4:function i4(){},
a9:function a9(){},
eB:function eB(){},
i5:function i5(){},
aD:function aD(){},
ib:function ib(){},
eJ:function eJ(){},
eK:function eK(){},
bb:function bb(){},
bc:function bc(){},
aE:function aE(){},
eQ:function eQ(){},
cS:function cS(){},
f2:function f2(){},
d0:function d0(){},
fn:function fn(){},
fs:function fs(){},
jA:function jA(a,b){this.a=a
this.$ti=b},
cT:function cT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
eY:function eY(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
cU:function cU(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
it:function it(a){this.a=a},
iu:function iu(a){this.a=a},
jN:function jN(a){this.$ti=a},
o:function o(){},
cm:function cm(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
eR:function eR(){},
eU:function eU(){},
eV:function eV(){},
eW:function eW(){},
eX:function eX(){},
f_:function f_(){},
f0:function f0(){},
f3:function f3(){},
f4:function f4(){},
f9:function f9(){},
fa:function fa(){},
fb:function fb(){},
fc:function fc(){},
fd:function fd(){},
fe:function fe(){},
fh:function fh(){},
fi:function fi(){},
fk:function fk(){},
d6:function d6(){},
d7:function d7(){},
fl:function fl(){},
fm:function fm(){},
fo:function fo(){},
ft:function ft(){},
fu:function fu(){},
d9:function d9(){},
da:function da(){},
fv:function fv(){},
fw:function fw(){},
fA:function fA(){},
fB:function fB(){},
fC:function fC(){},
fD:function fD(){},
fE:function fE(){},
fF:function fF(){},
fG:function fG(){},
fH:function fH(){},
fI:function fI(){},
fJ:function fJ(){},
li(a){var s,r,q
if(a==null)return a
if(typeof a=="string"||typeof a=="number"||A.c7(a))return a
if(A.lH(a))return A.bi(a)
s=Array.isArray(a)
s.toString
if(s){r=[]
q=0
while(!0){s=a.length
s.toString
if(!(q<s))break
r.push(A.li(a[q]));++q}return r}return a},
bi(a){var s,r,q,p,o,n
if(a==null)return null
s=A.hw(t.N,t.z)
r=Object.getOwnPropertyNames(a)
for(q=r.length,p=0;p<r.length;r.length===q||(0,A.ao)(r),++p){o=r[p]
n=o
n.toString
s.l(0,n,A.li(a[o]))}return s},
lh(a){var s
if(a==null)return a
if(typeof a=="string"||typeof a=="number"||A.c7(a))return a
if(t.f.b(a))return A.lC(a)
if(t.j.b(a)){s=[]
J.fT(a,new A.iV(s))
a=s}return a},
lC(a){var s={}
J.fT(a,new A.j3(s))
return s},
lH(a){var s=Object.getPrototypeOf(a),r=s===Object.prototype
r.toString
if(!r){r=s===null
r.toString}else r=!0
return r},
ii:function ii(){},
ik:function ik(a,b){this.a=a
this.b=b},
iV:function iV(a){this.a=a},
j3:function j3(a){this.a=a},
ij:function ij(a,b){this.a=a
this.b=b
this.c=!1},
cs:function cs(){},
nA(a,b,c,d){var s,r,q
A.jS(b)
t.j.a(d)
if(b){s=[c]
B.a.U(s,d)
d=s}r=t.z
q=A.jE(J.kd(d,A.oK(),r),r)
return A.jT(A.kn(t.Z.a(a),q))},
mz(a){return new A.hq(new A.cY(t.dx)).$1(a)},
nE(a){return a},
jU(a,b,c){var s
try{if(Object.isExtensible(a)&&!Object.prototype.hasOwnProperty.call(a,b)){Object.defineProperty(a,b,{value:c})
return!0}}catch(s){}return!1},
lo(a,b){if(Object.prototype.hasOwnProperty.call(a,b))return a[b]
return null},
jT(a){if(a==null||typeof a=="string"||typeof a=="number"||A.c7(a))return a
if(a instanceof A.aP)return a.a
if(A.lG(a))return a
if(t.Q.b(a))return a
if(a instanceof A.ci)return A.a_(a)
if(t.Z.b(a))return A.ln(a,"$dart_jsFunction",new A.iX())
return A.ln(a,"_$dart_jsObject",new A.iY($.k7()))},
ln(a,b,c){var s=A.lo(a,b)
if(s==null){s=c.$1(a)
A.jU(a,b,s)}return s},
lj(a){if(a==null||typeof a=="string"||typeof a=="number"||typeof a=="boolean")return a
else if(a instanceof Object&&A.lG(a))return a
else if(a instanceof Object&&t.Q.b(a))return a
else if(a instanceof Date)return A.kk(A.t(a.getTime()),!1)
else if(a.constructor===$.k7())return a.o
else return A.jZ(a)},
jZ(a){if(typeof a=="function")return A.jV(a,$.fP(),new A.j_())
if(a instanceof Array)return A.jV(a,$.k6(),new A.j0())
return A.jV(a,$.k6(),new A.j1())},
jV(a,b,c){var s=A.lo(a,b)
if(s==null||!(a instanceof Object)){s=c.$1(a)
A.jU(a,b,s)}return s},
hq:function hq(a){this.a=a},
iX:function iX(){},
iY:function iY(a){this.a=a},
j_:function j_(){},
j0:function j0(){},
j1:function j1(){},
aP:function aP(a){this.a=a},
cq:function cq(a){this.a=a},
by:function by(a,b){this.a=a
this.$ti=b},
c3:function c3(){},
nF(a){var s,r=a.$dart_jsFunction
if(r!=null)return r
s=function(b,c){return function(){return b(c,Array.prototype.slice.apply(arguments))}}(A.nB,a)
s[$.fP()]=a
a.$dart_jsFunction=s
return s},
nB(a,b){t.j.a(b)
return A.kn(t.Z.a(a),b)},
lx(a,b){if(typeof a=="function")return a
else return b.a(A.nF(a))},
oO(a,b){var s=new A.F($.C,b.h("F<0>")),r=new A.bI(s,b.h("bI<0>"))
a.then(A.aG(new A.ji(r,b),1),A.aG(new A.jj(r),1))
return s},
ji:function ji(a,b){this.a=a
this.b=b},
jj:function jj(a){this.a=a},
hI:function hI(a){this.a=a},
b8:function b8(a,b,c){this.a=a
this.b=b
this.$ti=c},
ae:function ae(){},
dX:function dX(){},
ag:function ag(){},
ec:function ec(){},
hK:function hK(){},
ew:function ew(){},
al:function al(){},
eC:function eC(){},
f7:function f7(){},
f8:function f8(){},
ff:function ff(){},
fg:function fg(){},
fp:function fp(){},
fq:function fq(){},
fx:function fx(){},
fy:function fy(){},
fX:function fX(){},
dx:function dx(){},
fY:function fY(a){this.a=a},
dy:function dy(){},
b5:function b5(){},
ed:function ed(){},
eP:function eP(){},
dz:function dz(){},
aK:function aK(){},
dN:function dN(){},
eh:function eh(){},
el:function el(){},
cG:function cG(){},
bX:function bX(){},
eq:function eq(){},
eA:function eA(){},
eE:function eE(){},
fU:function fU(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=0
_.a=null},
hT:function hT(a,b){var _=this
_.b=a
_.c=b
_.d=1
_.a=null},
i7:function i7(){},
dO:function dO(a){var _=this
_.a=a
_.f=_.e=_.d=_.c=_.b=0
_.x=_.w=_.r=null},
he:function he(){},
ky(a){var s=new A.aB(A.q([0,0,0,0,0,0,0,0,0],t.n))
s.c4(a)
return s},
kz(){return new A.bD(A.q([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t.n))},
jG(){return new A.aT(0,0)},
mK(a,b,c){return new A.ah(a,b,c)},
kD(a,b,c,d){return new A.ei(new A.aT(c,d))},
bF(){return new A.av(0,0,0,1)},
jH(a,b){var s=b/2,r=Math.sin(s),q=a.a,p=a.b,o=a.c,n=Math.sqrt(q*q+p*p+o*o)
if(n===0)return A.bF()
return new A.av(q/n*r,p/n*r,o/n*r,Math.cos(s))},
hN(a){var s=new A.av(0,0,0,0)
s.c5(a)
return s},
bW(a,b,c){var s,r,q=new A.av(0,0,0,0),p=a*0.5,o=b*0.5,n=c*0.5,m=Math.cos(p),l=Math.sin(p),k=Math.cos(o),j=Math.sin(o),i=Math.cos(n),h=Math.sin(n),g=i*j,f=h*k
q.a=g*m+f*l
s=i*k
r=h*j
q.b=s*l-r*m
q.c=f*m-g*l
q.d=s*m+r*l
return q},
ej(a,b){return new A.av(a.a*b,a.b*b,a.c*b,a.d*b)},
ek(a,b,c){var s,r,q,p=a.a,o=b.a,n=a.b,m=b.b,l=a.c,k=b.c,j=a.d,i=b.d,h=p*o+n*m+l*k+j*i
if(h<0){h=-h
s=A.ej(b,-1)}else s=b
if(h>0.9995){p=a.q(0,A.ej(new A.av(o-p,m-n,k-l,i-j),c))
o=p.a
n=p.b
m=p.c
l=p.d
return A.ej(p,1/Math.sqrt(o*o+n*n+m*m+l*l))}r=Math.acos(h)
q=Math.sin(r)
p=Math.sin((1-c)*r)
o=Math.sin(c*r)
return A.ej(a,p/q).q(0,A.ej(s,o/q))},
i6(){return new A.aU(A.q([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t.n))},
kS(a,b,c){return new A.P(a,b,c)},
kU(){return new A.P(0,0,0)},
jL(a){var s=new A.P(0,0,0),r=a.a,q=a.b,p=a.c,o=Math.sqrt(r*r+q*q+p*p)
s.a=a.a/o
s.b=a.b/o
s.c=a.c/o
return s},
kT(a,b){var s=a.b,r=b.c,q=a.c,p=b.b,o=b.a,n=a.a
return new A.P(s*r-q*p,q*o-n*r,n*p-s*o)},
dP:function dP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aB:function aB(a){this.a=a},
hB:function hB(a){this.a=a},
bD:function bD(a){this.a=a},
aT:function aT(a,b){this.a=a
this.b=b},
ah:function ah(a,b,c){this.a=a
this.b=b
this.c=c},
ei:function ei(a){this.b=a},
av:function av(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hO:function hO(a){this.a=a},
cK:function cK(a){this.a=a},
aU:function aU(a){this.a=a},
P:function P(a,b,c){this.a=a
this.b=b
this.c=c},
hh:function hh(){},
hi:function hi(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
aQ:function aQ(a){this.a=a},
ac:function ac(a){this.a=a},
cr:function cr(a){this.a=a},
eM:function eM(a){this.a=a},
c4:function c4(a,b){this.a=a
this.b=b},
hs:function hs(a,b){this.a=a
this.b=b},
ht:function ht(a){this.a=a},
hu:function hu(a){this.a=a},
aY:function aY(a,b){this.a=a
this.b=b},
e2:function e2(a,b,c){this.a=a
this.b=b
this.c=c},
mc(a,b,c,d,e){return new A.bm(a,b,c,d,e)},
h0(){return new A.h_()},
kV(a){return new A.id(a)},
jF(a){return new A.hC(a)},
eo(a){return new A.hR(a)},
ie(){return new A.cM(A.q([new A.bm("aPositionMapping",0,2,8,0)],t.U))},
n2(){var s,r,q,p=$.jM
if(p==null)try{p=A.jy(null,null)
s=A.dY(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],t.N,t.z)
r=B.e.av(p,"webgl",s)
if(r==null)r=B.e.av(p,"experimental-webgl",s)
t.eV.a(r)
$.jM=!0
p=!0}catch(q){$.jM=!1
p=!1}p.toString
return p},
n1(a,b){var s,r,q,p,o,n,m=b.getSupportedExtensions()
if(m==null)return
s=A.q([],t.s)
for(r=a.e,q=r.length,p=J.ax(m),o=0;o<r.length;r.length===q||(0,A.ao)(r),++o){n=r[o]
if(!p.bH(m,n))B.a.n(s,n)}if(s.length!==0)throw A.b(A.dI("Invalid webgl extensions\n"+A.m(s)))},
kK(){return u.b},
kJ(){return"    #version 300 es\n    precision highp float;\n\n    const float kDepthDelta = 0.0078125;\n\n    in vec2 vMapping;\n    out vec4 outColor;\n\n    uniform vec4 uViewBound;\n    uniform sampler2D uDepthDataSampler;\n    uniform sampler2D uOcclusionSampler;\n\n    void main()\n    {\n      vec4 depthData = texture(uDepthDataSampler, vMapping);\n      float range = (max(abs(depthData.x), abs(depthData.y)) + kDepthDelta) * 1.5;\n\n      vec2 occl = vec2(0.0, 1.0);\n      vec3 blur = vec3(0.0);\n      \n      for (int j = 0; j < 2; j++)\n      {\n        float y = float(j * 2) - 0.5;\n        for (int i = 0; i < 2; i++)\n        {\n          float x = float(i * 2) - 0.5;\n\n          vec2 sampling = vMapping + vec2(x, y) * uViewBound.zw;\n\n          occl.x = texture(uOcclusionSampler, sampling).x;\n          blur.z += occl.x;\n\n          float depth = texture(uDepthDataSampler, sampling).z;\n          if (abs(depth - depthData.z) < range) blur.xy += occl;\n        }\n      }\n\n      float occlusion = (blur.y > 0.0) ? blur.x / blur.y : blur.z * 0.25;\n      outColor = vec4(occlusion);\n    }\n  "},
kM(){return u.b},
kL(){return"    #version 300 es\n    precision highp float;\n\n\t  const float kTangentTau = 0.03125;\n    const float dx[4] = float[4](0.1, 0.0, -0.3, 0.0);\n    const float dy[4] = float[4](0.0, 0.2, 0.0, -0.4);\n\n    in vec2 vMapping;\n    out vec4 outColor;\n\n    uniform vec2 uData;\n    uniform vec4 uViewBound;\n    uniform sampler2D uDepthDataSampler;\n    uniform sampler2D uSamplingRotationSampler;\n\n    void main()\n    {\n      float vectorScale = uData.x;\n      float intensity = uData.y;\n\n      vec4 depthData = texture(uDepthDataSampler, vMapping);\n\n      float scale = vectorScale * depthData.z;\n      vec3 normal = normalize(vec3(depthData.xy, -scale));\n      scale = 1.0 / scale;\n\n      vec2 rot = texture(uSamplingRotationSampler, vMapping * uViewBound.xy * 0.25).xy;\n      float occlusion = 0.0;\n      float weight = 0.0;\n  \n      for (int i = 0; i < 4; i++)\n      {\n        vec3 v;\n        v.x = rot.x * dx[i] - rot.y * dy[i];\n        v.y = rot.y * dx[i] + rot.x * dy[i];\n\n        vec2 sampling = vMapping + ( v.xy * scale * uViewBound.zw);\n        v.z = texture(uDepthDataSampler, sampling).z - depthData.z;\n\n        float d = dot(normal, v);\n        float w = clamp(1.0 - d * 0.5, 0.0, 1.0);\n        float c = clamp(d * inversesqrt(dot(v, v)) - kTangentTau, 0.0, 1.0);\n\n        occlusion += w - w * sqrt(1.0 - c * c);\n        weight += w;\n      }\n\n      outColor = vec4(1.0 - occlusion * intensity / max(weight, 0.0001), 0, 0, 0);\n    }\n  "},
kQ(){return"    precision highp float;\n    \n    attribute vec2 aPositionMapping;\n\n    uniform mat3 uPvwlTransform;\n\n    varying vec2 vMapping;\n\n    void main(void)\n    {\n      vMapping = aPositionMapping;\n\n      vec3 position = uPvwlTransform * vec3(aPositionMapping, 1.0);\n      gl_Position = vec4(position.xy, 0.0, 1.0);\n    }\n  "},
kP(){return"    precision highp float;\n\n    uniform sampler2D uSampler;\n\n    varying vec2 vMapping;\n\n    void main(void)\n    {\n      gl_FragColor = texture2D(uSampler, vMapping);\n    }\n  "},
kX(){return"    #version 300 es\n    precision highp float;\n\n    in vec3 aPosition;\n    out float vViewDepth;\n\n    uniform mat4 uPvwlTransform;\n\n    void main()\n    {\n      gl_Position = uPvwlTransform * vec4(aPosition, 1.0);\n      vViewDepth = gl_Position.w;\n    }\n  "},
kW(){return"    #version 300 es\n    precision highp float;\n    in float vViewDepth;\n    out vec4 outColor;\n\n    void main()\n    {\n      outColor = vec4(dFdx(vViewDepth), dFdy(vViewDepth), vViewDepth, 0);\n    }\n  "},
h2:function h2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bm:function bm(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
h_:function h_(){},
hm:function hm(a,b,c){this.a=a
this.b=b
this.c=c},
eI:function eI(a){this.b=a},
h1:function h1(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
h8:function h8(){},
dM:function dM(){},
fZ:function fZ(){var _=this
_.b=_.a=0
_.f=_.e=_.d=_.c=null},
hc:function hc(){var _=this
_.b=_.a=0
_.f=_.e=_.d=_.c=null},
hb:function hb(){var _=this
_.b=_.a=0
_.f=_.e=_.d=_.c=null},
cD:function cD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null},
bV:function bV(){var _=this
_.d=_.c=_.b=_.a=null},
c_:function c_(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.f=_.e=_.d=null},
ia:function ia(){},
ic:function ic(a){this.a=a
this.c=this.b=null},
id:function id(a){this.a=a
this.c=this.b=null},
hC:function hC(a){this.a=a
this.c=this.b=null},
hD:function hD(a){this.a=a
this.c=this.b=null},
hR:function hR(a){this.a=a
this.c=this.b=null},
cM:function cM(a){this.a=a},
hP:function hP(a,b,c){this.b=a
this.c=b
this.e=c},
ih:function ih(){this.a=null},
hU:function hU(a,b,c,d,e,f){var _=this
_.c=a
_.d=b
_.e=c
_.f=d
_.r=e
_.w=f},
hV:function hV(a,b,c,d,e,f,g,h){var _=this
_.c=a
_.d=b
_.e=c
_.f=d
_.r=e
_.w=f
_.x=g
_.y=null
_.z=h
_.Q=0
_.as=1},
i3:function i3(a,b,c,d){var _=this
_.c=a
_.d=b
_.e=c
_.f=d},
ig:function ig(a,b,c){this.c=a
this.d=b
this.e=c},
eL:function eL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=!1
_.f=null},
oM(){A.mq(A.q([A.mr("media/gltf/invaders.gltf"),A.ko("media/gltf/invaders.bin",null,"arraybuffer",null)],t.aJ),t.K).b0(new A.je(),t.P)},
kv(){var s,r,q,p
for(s=$.S.length,r=0;r<$.S.length;$.S.length===s||(0,A.ao)($.S),++r)$.S[r].a2(0)
B.a.a3($.S)
A.km()
s=$.dp()
q=s.a
s.f.unobserve(q)
s.f.disconnect()
s=$.jo()
s.children.toString
A.n8(s,q)
q=$.jn()
s=window
s.toString
p=q.x
p.toString
B.i.bl(s)
s.cancelAnimationFrame(p)
q.r.aT(0)
q.w.aT(0)
$.k9().I()
$.jY=-1},
mW(){var s=A.dY(["status",$.jY,"fps",$.jn().gcY(),"size","288"],t.N,t.K)
return A.jZ(A.mz(s))},
kG(){var s,r,q,p,o=$.dp(),n=o.a,m=document,l=m.documentElement
l.toString
l=B.b.T(A.jz(n,l).a)
m=m.documentElement
m.toString
m=B.b.T(A.jz(n,m).b)
s=n.clientWidth
s.toString
r=window.devicePixelRatio
r.toString
r=B.b.T(s*r)
s=n.clientHeight
s.toString
q=window.devicePixelRatio
q.toString
q=A.kD(l,m,r,B.b.T(s*q))
o.b=q
B.e.sP(n,A.t(q.b.a))
B.e.sN(n,A.t(o.b.b.b))
o.f.takeRecords().toString
o=o.b.b
p=o.b/o.a
o=$.ka().a
B.a.l(o,0,2*p)
B.a.l(o,4,2)
B.a.l(o,6,-p)
B.a.l(o,7,-1)},
mH(a){var s,r,q,p
t.cE.a(a)
s=$.jo().getBoundingClientRect()
s.left.toString
s.right.toString
r=s.width
r.toString
s=s.height
s.toString
q=a.a
p=new A.aT(q.a/r-0.5,q.b/s-0.5).j(0,new A.aT(2,2))
$.dn().b=$.kb().q(0,new A.ah(p.a,-p.b,0))},
mF(a){var s,r,q,p,o
t.h.a(a)
$.dn().d=0
s=$.fR()
s.f=B.b.bE(0.1,0,1)
r=$.fQ().d
q=r.gbS(r)
p=r.gbX()
o=r.gbL(r)
switch(a.a){case 96:s.b=o.W(0)
break
case 97:s.b=q
break
case 98:s.b=o
break
case 99:s.b=q.W(0)
break
case 107:s.b=p.W(0)
break
case 109:s.b=p
break
case 100:s.d=A.bW(3.141592653589793,0,0)
break
case 102:s.d=A.bW(-3.141592653589793,0,0)
break
case 101:s.d=A.bW(0,3.141592653589793,0)
break
case 104:s.d=A.bW(0,-3.141592653589793,0)
break
case 103:s.d=A.bW(0,0,-3.141592653589793)
break
case 105:s.d=A.bW(0,0,3.141592653589793)
break}},
mG(a){var s
t.h.a(a)
s=$.fR()
s.c=new A.P(0,0,0)
s.b=new A.P(0,0,0)
s.e=A.bF()
s.d=A.bF()},
mE(a){var s,r,q,p,o,n
t.W.a(a)
s=a.alpha
if(s==null)return
r=A.bW(A.bg(a.gamma)*0.017453292519943295,A.bg(a.beta)*0.017453292519943295,s*0.017453292519943295*0)
q=A.jH(new A.P(0,0,1),A.bg(a.alpha)*0.017453292519943295)
p=A.jH(new A.P(1,0,0),A.bg(a.beta)*0.017453292519943295)
o=A.jH(new A.P(0,1,0),A.bg(a.gamma)*0.017453292519943295)
s=A.q([-1,0,0,0,0,-1,0,-1,0],t.n)
if($.lr==null)$.lr=r
n=$.dn()
n.d=2
n.c=q.j(0,p).j(0,o).j(0,A.hN(new A.aB(s)))},
mI(a){var s,r,q
A.bg(a)
s=$.jR-a
$.jR=s
if(s<=0){for(s=$.b1.length,r=0;r<s;++r){q=$.b1[r]
q.d=!q.d}$.jR=1}},
mJ(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=null,a0=36160
A.bg(a1)
s=$.dn()
r=s.b
q=s.a.gO()
p=s.a
p.sO(p.gO().q(0,new A.ah(r.a-q.a,r.b-q.b,r.c-q.c).j(0,s.d).j(0,a1)))
o=A.ek(A.hN(s.a.gS()),s.c,s.d*a1)
s=s.a
s.toString
s.sS(A.ky(o))
s=$.fR()
n=1-s.f
s.b=s.b.j(0,n)
s.c=s.c.j(0,n)
s.d=A.ek(A.bF(),s.d,n)
s.e=A.ek(A.bF(),s.e,n)
s.c=s.c.q(0,s.b.j(0,a1))
q=s.a
r=q.gO()
p=s.c.j(0,a1)
q.sO(r.q(0,new A.ah(p.a,p.b,p.c)))
p=s.e
s.e=A.ek(p,p.j(0,s.d),a1)
m=A.hN(s.a.gS())
p=s.a
p.toString
p.sS(A.ky(A.ek(m,m.j(0,s.e),a1)))
$.fQ().az()
A.nh()
s=$.js()
p=s.c.a
p.toString
B.c.E(p,a0,s.d)
p=s.f
r=p.e
r.toString
p.H(r)
p.a9(9728)
p=$.dr()
p.sam(A.h0())
p.sao(a)
r=$.jl()
p.ab(r)
q=$.jt()
l=q.d
k=l.a.a
k.toString
B.c.au(k,l.b)
l=$.lY()
k=$.dq()
j=k.f.e
j.toString
i=$.k8()
h=r.b
g=h.a
f=q.e
e=t.k
l=e.a(l.a)
d=f.b.a
d.toString
B.c.b2(d,f.c,!1,l)
f=q.r
d=h.a
c=h.b
b=t.cA
c=e.a(A.q([d,c,1/d,1/c],b))
d=f.b.a
d.toString
B.c.bW(d,f.c,c)
f=q.w
d=f.b.a
d.toString
B.c.a6(d,f.c,j)
q.z=i
q.Q=g
q.as=4
j=q.f
i=e.a(A.q([2*i.b/(g*(1/Math.tan(i.a*0.5))),q.as],b))
g=j.b.a
g.toString
B.c.da(g,j.c,i)
j=q.x
q=q.y.e
q.toString
i=j.b.a
i.toString
B.c.a6(i,j.c,q)
if(7>=$.M.length)return A.d($.M,7)
q=$.M[7]
q.a8()
q.aA()
q.a7()
q=s.c.a
q.toString
B.c.E(q,a0,a)
p.a.flush()
q=k.f
j=q.e
j.toString
q.H(j)
q.a9(9729)
q=s.f
j=q.e
j.toString
q.H(j)
q.a9(9729)
q=$.jq()
j=q.c.a
j.toString
B.c.E(j,a0,q.d)
p.sam(A.h0())
p.sao(a)
p.ab(r)
r=$.jr()
j=r.d
i=j.a.a
i.toString
B.c.au(i,j.b)
k=k.f.e
k.toString
s=s.f.e
s.toString
j=r.e
i=j.b.a
i.toString
B.c.b2(i,j.c,!1,l)
l=r.f
j=h.a
h=h.b
b=e.a(A.q([j,h,1/j,1/h],b))
h=l.b.a
h.toString
B.c.bW(h,l.c,b)
l=r.r
j=l.b.a
j.toString
B.c.a6(j,l.c,k)
r=r.w
l=r.b.a
l.toString
B.c.a6(l,r.c,s)
if(7>=$.M.length)return A.d($.M,7)
s=$.M[7]
s.a8()
s.aA()
s.a7()
s=q.c.a
s.toString
B.c.E(s,a0,a)
p.a.flush()
p.sam(A.h0())
p.sao(a)
p.ab($.dp().b)
s=$.jp()
r=s.d
l=r.a.a
l.toString
B.c.au(l,r.b)
r=$.ka()
q=q.f.e
q.toString
l=s.e
k=l.b.a
k.toString
B.c.a6(k,l.c,q)
s=s.f
r=e.a(r.a)
e=s.b.a
e.toString
B.c.b2(e,s.c,!1,r)
if(7>=$.M.length)return A.d($.M,7)
s=$.M[7]
s.a8()
s.aA()
s.a7()
p.a.flush()},
ms(a,b){var s,r,q,p,o,n=new A.hh(),m=t.N,l=A.dY(["invaders.bin",b],m,t.gc),k=A.dY(["POSITION",0],m,t.S)
m=$.jm()
B.a.n($.M,n.R(0,0,m,a,l,k))
B.a.n($.M,n.R(1,0,m,a,l,k))
B.a.n($.M,n.R(2,0,m,a,l,k))
B.a.n($.M,n.R(3,0,m,a,l,k))
B.a.n($.M,n.R(4,0,m,a,l,k))
B.a.n($.M,n.R(5,0,m,a,l,k))
B.a.n($.M,n.R(6,0,m,a,l,k))
s=t.n
B.a.n($.M,new A.cD(m.b7(new Uint16Array(A.dh(A.q([0,1,3,2],t.dC)))),m.b6(new Float32Array(A.dh(A.q([0,1,0,0,1,0,1,1],s)))),A.ie(),5))
m=new A.bT(B.a_,null,A.i6())
m.c=new A.aU(A.q([20,0,0,0,0,20,0,0,0,0,1,0,-10,-10,0,1],s))
B.a.n($.b1,m)
m=new A.bT(B.Z,null,A.i6())
m.c=new A.aU(A.q([0.18,0,0,0,0,0.18,0,0,0,0,0.18,0,0,1.5,0,1],s))
B.a.n($.b1,m)
m=t.f3
r=[A.q([B.w,B.x],m),A.q([B.w,B.x],m),A.q([B.y,B.z],m),A.q([B.y,B.z],m),A.q([B.A,B.B],m),A.q([B.A,B.B],m)]
for(q=0;q<6;++q)for(m=-q*1.5,p=-2;p<=2;++p){o=r[q]
o=new A.bT(o[0],o[1],new A.aU(A.q([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],s)))
o.c=new A.aU(A.q([0.1,0,0,0,0,0.1,0,0,0,0,0.1,0,p*1.5,m,0,1],s))
B.a.n($.b1,o)}},
kp(){var s,r,q,p,o,n,m,l=36160,k=$.dr(),j=$.dp(),i=A.q([],t.s)
B.a.n(i,"EXT_color_buffer_float")
k.c3(j.a,new A.hP(!0,!0,i))
j=$.jm()
j.c=k
i=k.a.createBuffer()
i.toString
j.d=i
i=k.a.createBuffer()
i.toString
j.e=i
i=j.c.a
i.toString
B.c.al(i,34963,j.d)
i=j.c.a
i.toString
B.c.al(i,34962,j.e)
j.c.a.bufferData(34963,j.a,35044)
j.c.a.bufferData(34962,j.b,35044)
for(j=$.M.length,s=0;s<j;++s)$.M[s].e=k
j=$.dq()
i=$.jl()
j.aw(k,i,!0)
r=j.c.a
r.toString
B.c.E(r,l,j.d)
r=new A.c_(34842,6408,5131)
r.d=k
q=k.a.createTexture()
q.toString
r.f=q
r.H(0)
q=j.a
p=j.b
r.aa(new Uint16Array(q*p*4),q,p)
r.aC()
r.Z()
j.f=r
q=j.c.a
q.toString
r=r.f
r.toString
B.c.aV(q,l,36064,3553,r,0)
r=j.c.a
r.toString
B.c.E(r,l,null)
r=$.js()
r.aw(k,i,!1)
q=r.c.a
q.toString
B.c.E(q,l,r.d)
q=new A.c_(33325,6403,5131)
q.d=k
p=k.a.createTexture()
p.toString
q.f=p
q.H(0)
p=r.a
o=r.b
q.aa(new Uint16Array(p*o),p,o)
q.aC()
q.Z()
r.f=q
p=r.c.a
p.toString
q=q.f
q.toString
B.c.aV(p,l,36064,3553,q,0)
q=r.c.a
q.toString
B.c.E(q,l,null)
q=$.jq()
q.aw(k,i,!1)
i=q.c.a
i.toString
B.c.E(i,l,q.d)
i=new A.c_(6408,6408,5121)
i.d=k
p=k.a.createTexture()
p.toString
i.f=p
i.H(0)
p=q.a
o=q.b
i.aa(new Uint8Array(p*o*4),p,o)
i.aC()
i.Z()
q.f=i
p=q.c.a
p.toString
i=i.f
i.toString
B.c.aV(p,l,36064,3553,i,0)
i=q.c.a
i.toString
B.c.E(i,l,null)
i=$.jp()
p=i.d
o=A.kQ()
n=A.kP()
A.H(o)
A.H(n)
p.a=k
p.b=p.ac(o,n,i.c)
i.e.J(k,p)
i.f.J(k,p)
p=$.ju()
i=p.d
n=A.kX()
o=A.kW()
A.H(n)
A.H(o)
i.a=k
i.b=i.ac(n,o,p.c)
p.e.J(k,i)
i=$.jt()
p=i.d
o=A.kM()
n=A.kL()
A.H(o)
A.H(n)
p.a=k
p.b=p.ac(o,n,i.c)
i.e.J(k,p)
i.f.J(k,p)
i.r.J(k,p)
i.w.J(k,p)
i.x.J(k,p)
i.y=i.c7(k)
p=$.jr()
n=p.d
o=A.kK()
m=A.kJ()
A.H(o)
A.H(m)
n.a=k
n.b=n.ac(o,m,p.c)
p.e.J(k,n)
p.f.J(k,n)
p.r.J(k,n)
p.w.J(k,n)
j.f.H(1)
r.f.H(2)
q.f.H(3)
i.y.H(4)},
km(){var s,r,q
for(s=$.M.length,r=0;r<s;++r)$.M[r].e=null
B.a.a3($.M)
s=$.jp()
s.d.I()
q=s.e
q.b=q.c=null
s=s.f
s.b=s.c=null
s=$.ju()
s.d.I()
s=s.e
s.b=s.c=null
s=$.jt()
s.d.I()
q=s.e
q.b=q.c=null
q=s.f
q.b=q.c=null
q=s.r
q.b=q.c=null
q=s.w
q.b=q.c=null
q=s.x
q.b=q.c=null
s.y.I()
s=$.jr()
s.d.I()
q=s.e
q.b=q.c=null
q=s.f
q.b=q.c=null
q=s.r
q.b=q.c=null
s=s.w
s.b=s.c=null
$.dq().I()
$.js().I()
$.jq().I()
s=$.jm()
q=s.c.a
q.toString
B.c.al(q,34963,null)
q=s.c.a
q.toString
B.c.al(q,34962,null)
q=s.c.a
q.toString
B.c.bI(q,s.d)
q=s.c.a
q.toString
B.c.bI(q,s.e)
s.c=null
$.dr().a=null},
nh(){var s,r,q,p,o,n=$.dq(),m=n.c.a
m.toString
B.c.E(m,36160,n.d)
n=n.f
m=n.e
m.toString
n.H(m)
n.a9(9728)
n=$.dr()
n.sam(A.h0())
n.sao(new A.h8())
n.ab($.jl())
n.a.clearColor(0,0,0,0)
n.a.clearDepth(1)
n.a.clear(16640)
n=$.ju()
m=n.d
s=m.a.a
s.toString
B.c.au(s,m.b)
for(m=$.b1.length,s=t.k,n=n.e,r=0;r<$.b1.length;$.b1.length===m||(0,A.ao)($.b1),++r){q=$.b1[r]
p=s.a($.fQ().a.j(0,q.c).a)
o=n.b.a
o.toString
B.c.dc(o,n.c,!1,p)
if(q.d&&q.b!=null){p=q.b
p.toString}else p=q.a
p=p.a
if(!(p<$.M.length))return A.d($.M,p)
p=$.M[p]
p.a8()
o=p.a
p.e.a.drawElements(p.d,o.a,o.c,o.b)
p.a7()}n=$.dq().c.a
n.toString
B.c.E(n,36160,null)
$.dr().a.flush()},
at:function at(a,b){this.a=a
this.b=b},
bT:function bT(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=!1},
je:function je(){},
j9:function j9(){},
ja:function ja(){},
jb:function jb(){},
jc:function jc(){},
jd:function jd(){},
lG(a){return t.fK.b(a)||t.A.b(a)||t.dz.b(a)||t.gb.b(a)||t.G.b(a)||t.g4.b(a)||t.g2.b(a)}},B={}
var w=[A,J,B]
var $={}
A.jC.prototype={}
J.bR.prototype={
K(a,b){return a===b},
gu(a){return A.cE(a)},
m(a){return"Instance of '"+A.hM(a)+"'"},
bO(a,b){throw A.b(A.kA(a,t.B.a(b)))},
gD(a){return A.bL(A.jW(this))}}
J.dS.prototype={
m(a){return String(a)},
gu(a){return a?519018:218159},
gD(a){return A.bL(t.y)},
$iB:1,
$ij2:1}
J.cp.prototype={
K(a,b){return null==b},
m(a){return"null"},
gu(a){return 0},
$iB:1,
$iG:1}
J.a.prototype={}
J.bz.prototype={
gu(a){return 0},
m(a){return String(a)}}
J.ef.prototype={}
J.bH.prototype={}
J.aA.prototype={
m(a){var s=a[$.fP()]
if(s==null)return this.c0(a)
return"JavaScript function for "+J.dt(s)},
$ibr:1}
J.bw.prototype={
gu(a){return 0},
m(a){return String(a)}}
J.bx.prototype={
gu(a){return 0},
m(a){return String(a)}}
J.z.prototype={
n(a,b){A.aF(a).c.a(b)
if(!!a.fixed$length)A.bj(A.D("add"))
a.push(b)},
U(a,b){var s
A.aF(a).h("f<1>").a(b)
if(!!a.fixed$length)A.bj(A.D("addAll"))
if(Array.isArray(b)){this.cf(a,b)
return}for(s=J.bk(b);s.B();)a.push(s.gC(s))},
cf(a,b){var s,r
t.b.a(b)
s=b.length
if(s===0)return
if(a===b)throw A.b(A.X(a))
for(r=0;r<s;++r)a.push(b[r])},
a3(a){if(!!a.fixed$length)A.bj(A.D("clear"))
a.length=0},
t(a,b){var s,r
A.aF(a).h("~(1)").a(b)
s=a.length
for(r=0;r<s;++r){b.$1(a[r])
if(a.length!==s)throw A.b(A.X(a))}},
aq(a,b,c){var s=A.aF(a)
return new A.aS(a,s.v(c).h("1(2)").a(b),s.h("@<1>").v(c).h("aS<1,2>"))},
cW(a,b,c,d){var s,r,q
d.a(b)
A.aF(a).v(d).h("1(1,2)").a(c)
s=a.length
for(r=b,q=0;q<s;++q){r=c.$2(r,a[q])
if(a.length!==s)throw A.b(A.X(a))}return r},
p(a,b){if(!(b<a.length))return A.d(a,b)
return a[b]},
gA(a){if(a.length>0)return a[0]
throw A.b(A.kr())},
bH(a,b){var s
for(s=0;s<a.length;++s)if(J.fS(a[s],b))return!0
return!1},
m(a){return A.ks(a,"[","]")},
gF(a){return new J.bl(a,a.length,A.aF(a).h("bl<1>"))},
gu(a){return A.cE(a)},
gk(a){return a.length},
i(a,b){A.t(b)
if(!(b>=0&&b<a.length))throw A.b(A.fN(a,b))
return a[b]},
l(a,b,c){A.aF(a).c.a(c)
if(!!a.immutable$list)A.bj(A.D("indexed set"))
if(!(b>=0&&b<a.length))throw A.b(A.fN(a,b))
a[b]=c},
q(a,b){var s=A.aF(a)
s.h("l<1>").a(b)
s=A.dZ(a,s.c)
this.U(s,b)
return s},
$ik:1,
$if:1,
$il:1}
J.ho.prototype={}
J.bl.prototype={
gC(a){var s=this.d
return s==null?this.$ti.c.a(s):s},
B(){var s,r=this,q=r.a,p=q.length
if(r.b!==p){q=A.ao(q)
throw A.b(q)}s=r.c
if(s>=p){r.sbk(null)
return!1}r.sbk(q[s]);++r.c
return!0},
sbk(a){this.d=this.$ti.h("1?").a(a)},
$iad:1}
J.bv.prototype={
aU(a,b){var s
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=B.f.gaX(b)
if(this.gaX(a)===s)return 0
if(this.gaX(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gaX(a){return a===0?1/a<0:a<0},
T(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.b(A.D(""+a+".round()"))},
bE(a,b,c){if(B.f.aU(b,c)>0)throw A.b(A.lz(b))
if(this.aU(a,b)<0)return b
if(this.aU(a,c)>0)return c
return a},
m(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gu(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
q(a,b){return a+b},
j(a,b){return a*b},
b4(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
cC(a,b){return(a|0)===a?a/b|0:this.cD(a,b)},
cD(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.b(A.D("Result of truncating division is "+A.m(s)+": "+A.m(a)+" ~/ "+b))},
bx(a,b){var s
if(a>0)s=this.cA(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
cA(a,b){return b>31?0:a>>>b},
gD(a){return A.bL(t.H)},
$iw:1,
$iJ:1}
J.co.prototype={
gD(a){return A.bL(t.S)},
$iB:1,
$ii:1}
J.dU.prototype={
gD(a){return A.bL(t.i)},
$iB:1}
J.b7.prototype={
q(a,b){A.H(b)
return a+b},
j(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.b(B.O)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
m(a){return a},
gu(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gD(a){return A.bL(t.N)},
gk(a){return a.length},
i(a,b){A.t(b)
if(!(b>=0&&b<a.length))throw A.b(A.fN(a,b))
return a[b]},
$iB:1,
$ip:1}
A.ct.prototype={
m(a){return"LateInitializationError: "+this.a}}
A.jg.prototype={
$0(){var s=new A.F($.C,t.J)
s.ad(null)
return s},
$S:15}
A.hS.prototype={}
A.k.prototype={}
A.af.prototype={
gF(a){var s=this
return new A.bA(s,s.gk(s),A.x(s).h("bA<af.E>"))},
t(a,b){var s,r,q=this
A.x(q).h("~(af.E)").a(b)
s=q.gk(q)
for(r=0;r<s;++r){b.$1(q.p(0,r))
if(s!==q.gk(q))throw A.b(A.X(q))}},
aq(a,b,c){var s=A.x(this)
return new A.aS(this,s.v(c).h("1(af.E)").a(b),s.h("@<af.E>").v(c).h("aS<1,2>"))}}
A.bA.prototype={
gC(a){var s=this.d
return s==null?this.$ti.c.a(s):s},
B(){var s,r=this,q=r.a,p=J.ax(q),o=p.gk(q)
if(r.b!==o)throw A.b(A.X(q))
s=r.c
if(s>=o){r.sa_(null)
return!1}r.sa_(p.p(q,s));++r.c
return!0},
sa_(a){this.d=this.$ti.h("1?").a(a)},
$iad:1}
A.bB.prototype={
gF(a){var s=A.x(this)
return new A.bC(J.bk(this.a),this.b,s.h("@<1>").v(s.z[1]).h("bC<1,2>"))},
gk(a){return J.ds(this.a)}}
A.cl.prototype={$ik:1}
A.bC.prototype={
B(){var s=this,r=s.b
if(r.B()){s.sa_(s.c.$1(r.gC(r)))
return!0}s.sa_(null)
return!1},
gC(a){var s=this.a
return s==null?this.$ti.z[1].a(s):s},
sa_(a){this.a=this.$ti.h("2?").a(a)},
$iad:1}
A.aS.prototype={
gk(a){return J.ds(this.a)},
p(a,b){return this.b.$1(J.m6(this.a,b))}}
A.T.prototype={}
A.bY.prototype={
gu(a){var s=this._hashCode
if(s!=null)return s
s=664597*B.p.gu(this.a)&536870911
this._hashCode=s
return s},
m(a){return'Symbol("'+this.a+'")'},
K(a,b){if(b==null)return!1
return b instanceof A.bY&&this.a===b.a},
$ibZ:1}
A.cf.prototype={}
A.ce.prototype={
m(a){return A.hz(this)},
$iK:1}
A.cg.prototype={
gk(a){return this.b.length},
gbq(){var s=this.$keys
if(s==null){s=Object.keys(this.a)
this.$keys=s}return s},
a4(a,b){if(typeof b!="string")return!1
if("__proto__"===b)return!1
return this.a.hasOwnProperty(b)},
i(a,b){if(!this.a4(0,b))return null
return this.b[this.a[b]]},
t(a,b){var s,r,q,p
this.$ti.h("~(1,2)").a(b)
s=this.gbq()
r=this.b
for(q=s.length,p=0;p<q;++p)b.$2(s[p],r[p])},
gG(a){return new A.cZ(this.gbq(),this.$ti.h("cZ<1>"))}}
A.cZ.prototype={
gk(a){return this.a.length},
gF(a){var s=this.a
return new A.d_(s,s.length,this.$ti.h("d_<1>"))}}
A.d_.prototype={
gC(a){var s=this.d
return s==null?this.$ti.c.a(s):s},
B(){var s=this,r=s.c
if(r>=s.b){s.sa0(null)
return!1}s.sa0(s.a[r]);++s.c
return!0},
sa0(a){this.d=this.$ti.h("1?").a(a)},
$iad:1}
A.dT.prototype={
gd4(){var s=this.a
return s},
gd7(){var s,r,q,p,o=this
if(o.c===1)return B.q
s=o.d
r=s.length-o.e.length-o.f
if(r===0)return B.q
q=[]
for(p=0;p<r;++p){if(!(p<s.length))return A.d(s,p)
q.push(s[p])}q.fixed$length=Array
q.immutable$list=Array
return q},
gd5(){var s,r,q,p,o,n,m,l,k=this
if(k.c!==0)return B.r
s=k.e
r=s.length
q=k.d
p=q.length-r-k.f
if(r===0)return B.r
o=new A.aO(t.eo)
for(n=0;n<r;++n){if(!(n<s.length))return A.d(s,n)
m=s[n]
l=p+n
if(!(l>=0&&l<q.length))return A.d(q,l)
o.l(0,new A.bY(m),q[l])}return new A.cf(o,t.gF)},
$ikq:1}
A.hL.prototype={
$2(a,b){var s
A.H(a)
s=this.a
s.b=s.b+"$"+a
B.a.n(this.b,a)
B.a.n(this.c,b);++s.a},
$S:2}
A.i8.prototype={
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
A.cC.prototype={
m(a){return"Null check operator used on a null value"}}
A.dV.prototype={
m(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.eG.prototype={
m(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.hJ.prototype={
m(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.d8.prototype={
m(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$iaj:1}
A.b6.prototype={
m(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.lK(r==null?"unknown":r)+"'"},
$ibr:1,
gdg(){return this},
$C:"$1",
$R:1,
$D:null}
A.dB.prototype={$C:"$0",$R:0}
A.dC.prototype={$C:"$2",$R:2}
A.ex.prototype={}
A.et.prototype={
m(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.lK(s)+"'"}}
A.bN.prototype={
K(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.bN))return!1
return this.$_target===b.$_target&&this.a===b.a},
gu(a){return(A.jh(this.a)^A.cE(this.$_target))>>>0},
m(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.hM(this.a)+"'")}}
A.eS.prototype={
m(a){return"Reading static variable '"+this.a+"' during its initialization"}}
A.en.prototype={
m(a){return"RuntimeError: "+this.a}}
A.eN.prototype={
m(a){return"Assertion failed: "+A.bq(this.a)}}
A.iK.prototype={}
A.aO.prototype={
gk(a){return this.a},
gG(a){return new A.as(this,A.x(this).h("as<1>"))},
gdd(a){var s=A.x(this)
return A.kx(new A.as(this,s.h("as<1>")),new A.hp(this),s.c,s.z[1])},
a4(a,b){var s=this.b
if(s==null)return!1
return s[b]!=null},
i(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.d0(b)},
d0(a){var s,r,q=this.d
if(q==null)return null
s=q[this.bM(a)]
r=this.bN(s,a)
if(r<0)return null
return s[r].b},
l(a,b,c){var s,r,q,p,o,n,m=this,l=A.x(m)
l.c.a(b)
l.z[1].a(c)
if(typeof b=="string"){s=m.b
m.bb(s==null?m.b=m.aK():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=m.c
m.bb(r==null?m.c=m.aK():r,b,c)}else{q=m.d
if(q==null)q=m.d=m.aK()
p=m.bM(b)
o=q[p]
if(o==null)q[p]=[m.aL(b,c)]
else{n=m.bN(o,b)
if(n>=0)o[n].b=c
else o.push(m.aL(b,c))}}},
a3(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.bt()}},
t(a,b){var s,r,q=this
A.x(q).h("~(1,2)").a(b)
s=q.e
r=q.r
for(;s!=null;){b.$2(s.a,s.b)
if(r!==q.r)throw A.b(A.X(q))
s=s.c}},
bb(a,b,c){var s,r=A.x(this)
r.c.a(b)
r.z[1].a(c)
s=a[b]
if(s==null)a[b]=this.aL(b,c)
else s.b=c},
bt(){this.r=this.r+1&1073741823},
aL(a,b){var s=this,r=A.x(s),q=new A.hv(r.c.a(a),r.z[1].a(b))
if(s.e==null)s.e=s.f=q
else s.f=s.f.c=q;++s.a
s.bt()
return q},
bM(a){return J.jw(a)&1073741823},
bN(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.fS(a[r].a,b))return r
return-1},
m(a){return A.hz(this)},
aK(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
$ikw:1}
A.hp.prototype={
$1(a){var s=this.a,r=A.x(s)
s=s.i(0,r.c.a(a))
return s==null?r.z[1].a(s):s},
$S(){return A.x(this.a).h("2(1)")}}
A.hv.prototype={}
A.as.prototype={
gk(a){return this.a.a},
gF(a){var s=this.a,r=new A.cu(s,s.r,this.$ti.h("cu<1>"))
r.c=s.e
return r},
t(a,b){var s,r,q
this.$ti.h("~(1)").a(b)
s=this.a
r=s.e
q=s.r
for(;r!=null;){b.$1(r.a)
if(q!==s.r)throw A.b(A.X(s))
r=r.c}}}
A.cu.prototype={
gC(a){return this.d},
B(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.b(A.X(q))
s=r.c
if(s==null){r.sa0(null)
return!1}else{r.sa0(s.a)
r.c=s.c
return!0}},
sa0(a){this.d=this.$ti.h("1?").a(a)},
$iad:1}
A.j5.prototype={
$1(a){return this.a(a)},
$S:6}
A.j6.prototype={
$2(a,b){return this.a(a,b)},
$S:21}
A.j7.prototype={
$1(a){return this.a(A.H(a))},
$S:19}
A.ir.prototype={
ai(){var s=this.b
if(s===this)throw A.b(new A.ct("Local '"+this.a+"' has not been initialized."))
return s}}
A.e3.prototype={
gD(a){return B.a1},
cK(a,b,c){A.iU(a,b,c)
return c==null?new Uint8Array(a,b):new Uint8Array(a,b,c)},
cJ(a){return this.cK(a,0,null)},
$iB:1}
A.cy.prototype={$iL:1}
A.e4.prototype={
gD(a){return B.a2},
$iB:1}
A.bU.prototype={
gk(a){return a.length},
$iu:1}
A.cw.prototype={
i(a,b){A.t(b)
A.b_(b,a,a.length)
return a[b]},
l(a,b,c){A.bg(c)
A.b_(b,a,a.length)
a[b]=c},
$ik:1,
$if:1,
$il:1}
A.cx.prototype={
l(a,b,c){A.t(c)
A.b_(b,a,a.length)
a[b]=c},
$ik:1,
$if:1,
$il:1}
A.cv.prototype={
gD(a){return B.a3},
$iB:1,
$ijB:1}
A.e5.prototype={
gD(a){return B.a4},
$iB:1}
A.e6.prototype={
gD(a){return B.a5},
i(a,b){A.t(b)
A.b_(b,a,a.length)
return a[b]},
$iB:1}
A.e7.prototype={
gD(a){return B.a6},
i(a,b){A.t(b)
A.b_(b,a,a.length)
return a[b]},
$iB:1}
A.e8.prototype={
gD(a){return B.a7},
i(a,b){A.t(b)
A.b_(b,a,a.length)
return a[b]},
$iB:1}
A.cz.prototype={
gD(a){return B.a9},
i(a,b){A.t(b)
A.b_(b,a,a.length)
return a[b]},
$iB:1,
$ijJ:1}
A.e9.prototype={
gD(a){return B.aa},
i(a,b){A.t(b)
A.b_(b,a,a.length)
return a[b]},
$iB:1}
A.cA.prototype={
gD(a){return B.ab},
gk(a){return a.length},
i(a,b){A.t(b)
A.b_(b,a,a.length)
return a[b]},
$iB:1}
A.ea.prototype={
gD(a){return B.ac},
gk(a){return a.length},
i(a,b){A.t(b)
A.b_(b,a,a.length)
return a[b]},
$iB:1,
$ieD:1}
A.d1.prototype={}
A.d2.prototype={}
A.d3.prototype={}
A.d4.prototype={}
A.ai.prototype={
h(a){return A.iQ(v.typeUniverse,this,a)},
v(a){return A.nt(v.typeUniverse,this,a)}}
A.f1.prototype={}
A.iP.prototype={
m(a){return A.a3(this.a,null)}}
A.eZ.prototype={
m(a){return this.a}}
A.db.prototype={$iaV:1}
A.im.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:9}
A.il.prototype={
$1(a){var s,r
this.a.a=t.M.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:29}
A.io.prototype={
$0(){this.a.$0()},
$S:10}
A.ip.prototype={
$0(){this.a.$0()},
$S:10}
A.iN.prototype={
ce(a,b){if(self.setTimeout!=null)self.setTimeout(A.aG(new A.iO(this,b),0),a)
else throw A.b(A.D("`setTimeout()` not found."))}}
A.iO.prototype={
$0(){this.b.$0()},
$S:0}
A.cd.prototype={
m(a){return A.m(this.a)},
$iE:1,
gX(){return this.b}}
A.R.prototype={}
A.aw.prototype={
aN(){},
aO(){},
sa1(a){this.ch=this.$ti.h("aw<1>?").a(a)},
sah(a){this.CW=this.$ti.h("aw<1>?").a(a)}}
A.cN.prototype={
gbs(){return this.c<4},
cv(a){var s,r
A.x(this).h("aw<1>").a(a)
s=a.CW
r=a.ch
if(s==null)this.sbm(r)
else s.sa1(r)
if(r==null)this.sbr(s)
else r.sah(s)
a.sah(a)
a.sa1(a)},
cB(a,b,c,d){var s,r,q,p,o,n,m=this,l=A.x(m)
l.h("~(1)?").a(a)
t.Y.a(c)
if((m.c&4)!==0){l=new A.c1($.C,l.h("c1<1>"))
A.k4(l.gcq())
if(c!=null)l.saM(t.M.a(c))
return l}s=$.C
r=d?1:0
q=A.kZ(s,a,l.c)
A.n7(s,b)
p=c==null?A.oj():c
l=l.h("aw<1>")
o=new A.aw(m,q,t.M.a(p),s,r,l)
o.sah(o)
o.sa1(o)
l.a(o)
o.ay=m.c&1
n=m.e
m.sbr(o)
o.sa1(null)
o.sah(n)
if(n==null)m.sbm(o)
else n.sa1(o)
if(m.d==m.e)A.lv(m.a)
return o},
ct(a){var s=this,r=A.x(s)
a=r.h("aw<1>").a(r.h("ak<1>").a(a))
if(a.ch===a)return null
r=a.ay
if((r&2)!==0)a.ay=r|4
else{s.cv(a)
if((s.c&2)===0&&s.d==null)s.ck()}return null},
ba(){if((this.c&4)!==0)return new A.bG("Cannot add new events after calling close")
return new A.bG("Cannot add new events while doing an addStream")},
n(a,b){var s=this
A.x(s).c.a(b)
if(!s.gbs())throw A.b(s.ba())
s.aR(b)},
aT(a){var s,r,q=this
if((q.c&4)!==0){s=q.r
s.toString
return s}if(!q.gbs())throw A.b(q.ba())
q.c|=4
r=q.r
if(r==null)r=q.r=new A.F($.C,t.cd)
q.aS()
return r},
ck(){if((this.c&4)!==0){var s=this.r
if((s.a&30)===0)s.ad(null)}A.lv(this.b)},
sbm(a){this.d=A.x(this).h("aw<1>?").a(a)},
sbr(a){this.e=A.x(this).h("aw<1>?").a(a)},
$iev:1,
$il9:1,
$ibe:1}
A.aX.prototype={
aR(a){var s,r=this.$ti
r.c.a(a)
for(s=this.d,r=r.h("cR<1>");s!=null;s=s.ch)s.bc(new A.cR(a,r))},
aS(){var s=this.d
if(s!=null)for(;s!=null;s=s.ch)s.bc(B.P)
else this.r.ad(null)}}
A.hg.prototype={
$2(a,b){var s,r,q=this
t.K.a(a)
t.l.a(b)
s=q.a
r=--s.b
if(s.a!=null){s.a=null
if(s.b===0||q.c)q.d.L(a,b)
else{q.e.b=a
q.f.b=b}}else if(r===0&&!q.c)q.d.L(q.e.ai(),q.f.ai())},
$S:4}
A.hf.prototype={
$1(a){var s,r,q=this,p=q.w
p.a(a)
r=q.a;--r.b
s=r.a
if(s!=null){J.m2(s,q.b,a)
if(r.b===0)q.c.af(A.jE(s,p))}else if(r.b===0&&!q.e)q.c.L(q.f.ai(),q.r.ai())},
$S(){return this.w.h("G(0)")}}
A.cO.prototype={
bG(a,b){var s
A.dl(a,"error",t.K)
s=this.a
if((s.a&30)!==0)throw A.b(A.I("Future already completed"))
b=A.jx(a)
s.bd(a,b)},
an(a){return this.bG(a,null)}}
A.bI.prototype={
bF(a,b){var s,r=this.$ti
r.h("1/?").a(b)
s=this.a
if((s.a&30)!==0)throw A.b(A.I("Future already completed"))
s.ad(r.h("1/").a(b))}}
A.bJ.prototype={
d3(a){if((this.c&15)!==6)return!0
return this.b.b.b_(t.al.a(this.d),a.a,t.y,t.K)},
d_(a){var s,r=this,q=r.e,p=null,o=t.z,n=t.K,m=a.a,l=r.b.b
if(t.C.b(q))p=l.d8(q,m,a.b,o,n,t.l)
else p=l.b_(t.v.a(q),m,o,n)
try{o=r.$ti.h("2/").a(p)
return o}catch(s){if(t.eK.b(A.aH(s))){if((r.c&1)!==0)throw A.b(A.aJ("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.b(A.aJ("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.F.prototype={
bw(a){this.a=this.a&1|4
this.c=a},
b1(a,b,c){var s,r,q,p=this.$ti
p.v(c).h("1/(2)").a(a)
s=$.C
if(s===B.d){if(b!=null&&!t.C.b(b)&&!t.v.b(b))throw A.b(A.ke(b,"onError",u.c))}else{c.h("@<0/>").v(p.c).h("1(2)").a(a)
if(b!=null)b=A.o4(b,s)}r=new A.F(s,c.h("F<0>"))
q=b==null?1:3
this.aE(new A.bJ(r,q,a,b,p.h("@<1>").v(c).h("bJ<1,2>")))
return r},
b0(a,b){return this.b1(a,null,b)},
cz(a){this.a=this.a&1|16
this.c=a},
ae(a){this.a=a.a&30|this.a&1
this.c=a.c},
aE(a){var s,r=this,q=r.a
if(q<=3){a.a=t.F.a(r.c)
r.c=a}else{if((q&4)!==0){s=t.c.a(r.c)
if((s.a&24)===0){s.aE(a)
return}r.ae(s)}A.bK(null,null,r.b,t.M.a(new A.iw(r,a)))}},
aQ(a){var s,r,q,p,o,n,m=this,l={}
l.a=a
if(a==null)return
s=m.a
if(s<=3){r=t.F.a(m.c)
m.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){n=t.c.a(m.c)
if((n.a&24)===0){n.aQ(a)
return}m.ae(n)}l.a=m.ak(a)
A.bK(null,null,m.b,t.M.a(new A.iD(l,m)))}},
aj(){var s=t.F.a(this.c)
this.c=null
return this.ak(s)},
ak(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
cl(a){var s,r,q,p=this
p.a^=2
try{a.b1(new A.iA(p),new A.iB(p),t.P)}catch(q){s=A.aH(q)
r=A.b3(q)
A.k4(new A.iC(p,s,r))}},
bh(a){var s,r=this,q=r.$ti
q.h("1/").a(a)
s=r.aj()
q.c.a(a)
r.a=8
r.c=a
A.c2(r,s)},
af(a){var s,r=this
r.$ti.c.a(a)
s=r.aj()
r.a=8
r.c=a
A.c2(r,s)},
L(a,b){var s
t.K.a(a)
t.l.a(b)
s=this.aj()
this.cz(A.fW(a,b))
A.c2(this,s)},
ad(a){var s=this.$ti
s.h("1/").a(a)
if(s.h("aq<1>").b(a)){this.cm(a)
return}this.cj(a)},
cj(a){var s=this
s.$ti.c.a(a)
s.a^=2
A.bK(null,null,s.b,t.M.a(new A.iy(s,a)))},
cm(a){var s=this.$ti
s.h("aq<1>").a(a)
if(s.b(a)){A.n9(a,this)
return}this.cl(a)},
bd(a,b){t.l.a(b)
this.a^=2
A.bK(null,null,this.b,t.M.a(new A.ix(this,a,b)))},
$iaq:1}
A.iw.prototype={
$0(){A.c2(this.a,this.b)},
$S:0}
A.iD.prototype={
$0(){A.c2(this.b,this.a.a)},
$S:0}
A.iA.prototype={
$1(a){var s,r,q,p=this.a
p.a^=2
try{p.af(p.$ti.c.a(a))}catch(q){s=A.aH(q)
r=A.b3(q)
p.L(s,r)}},
$S:9}
A.iB.prototype={
$2(a,b){this.a.L(t.K.a(a),t.l.a(b))},
$S:36}
A.iC.prototype={
$0(){this.a.L(this.b,this.c)},
$S:0}
A.iz.prototype={
$0(){A.l1(this.a.a,this.b)},
$S:0}
A.iy.prototype={
$0(){this.a.af(this.b)},
$S:0}
A.ix.prototype={
$0(){this.a.L(this.b,this.c)},
$S:0}
A.iG.prototype={
$0(){var s,r,q,p,o,n,m=this,l=null
try{q=m.a.a
l=q.b.b.bT(t.O.a(q.d),t.z)}catch(p){s=A.aH(p)
r=A.b3(p)
q=m.c&&t.t.a(m.b.a.c).a===s
o=m.a
if(q)o.c=t.t.a(m.b.a.c)
else o.c=A.fW(s,r)
o.b=!0
return}if(l instanceof A.F&&(l.a&24)!==0){if((l.a&16)!==0){q=m.a
q.c=t.t.a(l.c)
q.b=!0}return}if(l instanceof A.F){n=m.b.a
q=m.a
q.c=l.b0(new A.iH(n),t.z)
q.b=!1}},
$S:0}
A.iH.prototype={
$1(a){return this.a},
$S:37}
A.iF.prototype={
$0(){var s,r,q,p,o,n,m,l
try{q=this.a
p=q.a
o=p.$ti
n=o.c
m=n.a(this.b)
q.c=p.b.b.b_(o.h("2/(1)").a(p.d),m,o.h("2/"),n)}catch(l){s=A.aH(l)
r=A.b3(l)
q=this.a
q.c=A.fW(s,r)
q.b=!0}},
$S:0}
A.iE.prototype={
$0(){var s,r,q,p,o,n,m=this
try{s=t.t.a(m.a.a.c)
p=m.b
if(p.a.d3(s)&&p.a.e!=null){p.c=p.a.d_(s)
p.b=!1}}catch(o){r=A.aH(o)
q=A.b3(o)
p=t.t.a(m.a.a.c)
n=m.b
if(p.a===r)n.c=p
else n.c=A.fW(r,q)
n.b=!0}},
$S:0}
A.eO.prototype={}
A.ba.prototype={
t(a,b){var s,r
A.x(this).h("~(1)").a(b)
s=new A.F($.C,t.c)
r=this.ap(null,!0,new A.i_(s),s.gbi())
r.aY(new A.i0(this,b,r,s))
return s},
gk(a){var s={},r=new A.F($.C,t.fJ)
s.a=0
this.ap(new A.i1(s,this),!0,new A.i2(s,r),r.gbi())
return r}}
A.i_.prototype={
$0(){this.a.bh(null)},
$S:0}
A.i0.prototype={
$1(a){var s=this
A.o6(new A.hY(s.b,A.x(s.a).c.a(a)),new A.hZ(),A.nD(s.c,s.d),t.p)},
$S(){return A.x(this.a).h("~(1)")}}
A.hY.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
A.hZ.prototype={
$1(a){},
$S:40}
A.i1.prototype={
$1(a){A.x(this.b).c.a(a);++this.a.a},
$S(){return A.x(this.b).h("~(1)")}}
A.i2.prototype={
$0(){this.b.bh(this.a.a)},
$S:0}
A.cP.prototype={
gu(a){return(A.cE(this.a)^892482866)>>>0},
K(a,b){if(b==null)return!1
if(this===b)return!0
return b instanceof A.R&&b.a===this.a}}
A.cQ.prototype={
bu(){return this.w.ct(this)},
aN(){A.x(this.w).h("ak<1>").a(this)},
aO(){A.x(this.w).h("ak<1>").a(this)}}
A.c0.prototype={
aY(a){var s=A.x(this)
this.sci(A.kZ(this.d,s.h("~(1)?").a(a),s.c))},
a2(a){var s=this.e&=4294967279
if((s&8)===0)this.be()
s=$.jk()
return s},
be(){var s,r=this,q=r.e|=8
if((q&64)!==0){s=r.r
if(s.a===1)s.a=3}if((q&32)===0)r.saP(null)
r.f=r.bu()},
aN(){},
aO(){},
bu(){return null},
bc(a){var s,r,q=this,p=q.r
if(p==null){p=new A.d5(A.x(q).h("d5<1>"))
q.saP(p)}s=p.c
if(s==null)p.b=p.c=a
else{s.sa5(0,a)
p.c=a}r=q.e
if((r&64)===0){r|=64
q.e=r
if(r<128)p.b5(q)}},
aR(a){var s,r=this,q=A.x(r).c
q.a(a)
s=r.e
r.e=s|32
r.d.bU(r.a,a,q)
r.e&=4294967263
r.cn((s&4)!==0)},
aS(){this.be()
this.e|=16
new A.iq(this).$0()},
cn(a){var s,r,q=this,p=q.e
if((p&64)!==0&&q.r.c==null){p=q.e=p&4294967231
if((p&4)!==0)if(p<128){s=q.r
s=s==null?null:s.c==null
s=s!==!1}else s=!1
else s=!1
if(s){p&=4294967291
q.e=p}}for(;!0;a=r){if((p&8)!==0){q.saP(null)
return}r=(p&4)!==0
if(a===r)break
q.e=p^32
if(r)q.aN()
else q.aO()
p=q.e&=4294967263}if((p&64)!==0&&p<128)q.r.b5(q)},
sci(a){this.a=A.x(this).h("~(1)").a(a)},
saP(a){this.r=A.x(this).h("d5<1>?").a(a)},
$iak:1,
$ibe:1}
A.iq.prototype={
$0(){var s=this.a,r=s.e
if((r&16)===0)return
s.e=r|42
s.d.aZ(s.c)
s.e&=4294967263},
$S:0}
A.c5.prototype={
ap(a,b,c,d){var s=this.$ti
s.h("~(1)?").a(a)
t.Y.a(c)
return this.a.cB(s.h("~(1)?").a(a),d,c,b===!0)},
V(a){return this.ap(a,null,null,null)}}
A.bd.prototype={
sa5(a,b){this.a=t.ev.a(b)},
ga5(a){return this.a}}
A.cR.prototype={
bP(a){this.$ti.h("be<1>").a(a).aR(this.b)}}
A.eT.prototype={
bP(a){a.aS()},
ga5(a){return null},
sa5(a,b){throw A.b(A.I("No events after a done."))},
$ibd:1}
A.d5.prototype={
b5(a){var s,r=this
r.$ti.h("be<1>").a(a)
s=r.a
if(s===1)return
if(s>=1){r.a=1
return}A.k4(new A.iJ(r,a))
r.a=1}}
A.iJ.prototype={
$0(){var s,r,q,p=this.a,o=p.a
p.a=0
if(o===3)return
s=p.$ti.h("be<1>").a(this.b)
r=p.b
q=r.ga5(r)
p.b=q
if(q==null)p.c=null
r.bP(s)},
$S:0}
A.c1.prototype={
aY(a){this.$ti.h("~(1)?").a(a)},
a2(a){this.a=-1
this.saM(null)
return $.jk()},
cr(){var s,r,q,p=this,o=p.a-1
if(o===0){p.a=-1
s=p.c
if(s!=null){r=s
q=!0}else{r=null
q=!1}if(q){p.saM(null)
p.b.aZ(r)}}else p.a=o},
saM(a){this.c=t.Y.a(a)},
$iak:1}
A.iT.prototype={
$0(){return this.a.L(this.b,this.c)},
$S:0}
A.iS.prototype={
$2(a,b){A.nC(this.a,this.b,a,t.l.a(b))},
$S:4}
A.dg.prototype={$ikY:1}
A.iZ.prototype={
$0(){A.mo(this.a,this.b)},
$S:0}
A.fj.prototype={
aZ(a){var s,r,q
t.M.a(a)
try{if(B.d===$.C){a.$0()
return}A.ls(null,null,this,a,t.p)}catch(q){s=A.aH(q)
r=A.b3(q)
A.fM(t.K.a(s),t.l.a(r))}},
bU(a,b,c){var s,r,q
c.h("~(0)").a(a)
c.a(b)
try{if(B.d===$.C){a.$1(b)
return}A.lt(null,null,this,a,b,t.p,c)}catch(q){s=A.aH(q)
r=A.b3(q)
A.fM(t.K.a(s),t.l.a(r))}},
bB(a){return new A.iL(this,t.M.a(a))},
cL(a,b){return new A.iM(this,b.h("~(0)").a(a),b)},
i(a,b){return null},
bT(a,b){b.h("0()").a(a)
if($.C===B.d)return a.$0()
return A.ls(null,null,this,a,b)},
b_(a,b,c,d){c.h("@<0>").v(d).h("1(2)").a(a)
d.a(b)
if($.C===B.d)return a.$1(b)
return A.lt(null,null,this,a,b,c,d)},
d8(a,b,c,d,e,f){d.h("@<0>").v(e).v(f).h("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.C===B.d)return a.$2(b,c)
return A.o5(null,null,this,a,b,c,d,e,f)},
bQ(a,b,c,d){return b.h("@<0>").v(c).v(d).h("1(2,3)").a(a)}}
A.iL.prototype={
$0(){return this.a.aZ(this.b)},
$S:0}
A.iM.prototype={
$1(a){var s=this.c
return this.a.bU(this.b,s.a(a),s)},
$S(){return this.c.h("~(0)")}}
A.cV.prototype={
gk(a){return this.a},
gG(a){return new A.cW(this,this.$ti.h("cW<1>"))},
a4(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
return s==null?!1:s[b]!=null}else if(typeof b=="number"&&(b&1073741823)===b){r=this.c
return r==null?!1:r[b]!=null}else return this.co(b)},
co(a){var s=this.d
if(s==null)return!1
return this.aJ(this.bn(s,a),a)>=0},
i(a,b){var s,r,q
if(typeof b=="string"&&b!=="__proto__"){s=this.b
r=s==null?null:A.l2(s,b)
return r}else if(typeof b=="number"&&(b&1073741823)===b){q=this.c
r=q==null?null:A.l2(q,b)
return r}else return this.cp(0,b)},
cp(a,b){var s,r,q=this.d
if(q==null)return null
s=this.bn(q,b)
r=this.aJ(s,b)
return r<0?null:s[r+1]},
l(a,b,c){var s,r,q,p,o=this,n=o.$ti
n.c.a(b)
n.z[1].a(c)
s=o.d
if(s==null)s=o.d=A.na()
r=A.jh(b)&1073741823
q=s[r]
if(q==null){A.l3(s,r,[b,c]);++o.a
o.e=null}else{p=o.aJ(q,b)
if(p>=0)q[p+1]=c
else{q.push(b,c);++o.a
o.e=null}}},
t(a,b){var s,r,q,p,o,n,m=this,l=m.$ti
l.h("~(1,2)").a(b)
s=m.aF()
for(r=s.length,q=l.c,l=l.z[1],p=0;p<r;++p){o=s[p]
q.a(o)
n=m.i(0,o)
b.$2(o,n==null?l.a(n):n)
if(s!==m.e)throw A.b(A.X(m))}},
aF(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.e
if(h!=null)return h
h=A.hx(i.a,null,!1,t.z)
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
bn(a,b){return a[A.jh(b)&1073741823]}}
A.cY.prototype={
aJ(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=0;r<s;r+=2){q=a[r]
if(q==null?b==null:q===b)return r}return-1}}
A.cW.prototype={
gk(a){return this.a.a},
gF(a){var s=this.a
return new A.cX(s,s.aF(),this.$ti.h("cX<1>"))},
t(a,b){var s,r,q,p
this.$ti.h("~(1)").a(b)
s=this.a
r=s.aF()
for(q=r.length,p=0;p<q;++p){b.$1(r[p])
if(r!==s.e)throw A.b(A.X(s))}}}
A.cX.prototype={
gC(a){var s=this.d
return s==null?this.$ti.c.a(s):s},
B(){var s=this,r=s.b,q=s.c,p=s.a
if(r!==p.e)throw A.b(A.X(p))
else if(q>=r.length){s.sbg(null)
return!1}else{s.sbg(r[q])
s.c=q+1
return!0}},
sbg(a){this.d=this.$ti.h("1?").a(a)},
$iad:1}
A.e.prototype={
gF(a){return new A.bA(a,this.gk(a),A.an(a).h("bA<e.E>"))},
p(a,b){return this.i(a,b)},
t(a,b){var s,r
A.an(a).h("~(e.E)").a(b)
s=this.gk(a)
for(r=0;r<s;++r){b.$1(this.i(a,r))
if(s!==this.gk(a))throw A.b(A.X(a))}},
gd1(a){return this.gk(a)===0},
gA(a){if(this.gk(a)===0)throw A.b(A.kr())
return this.i(a,0)},
bH(a,b){var s,r=this.gk(a)
for(s=0;s<r;++s){if(J.fS(this.i(a,s),b))return!0
if(r!==this.gk(a))throw A.b(A.X(a))}return!1},
aq(a,b,c){var s=A.an(a)
return new A.aS(a,s.v(c).h("1(e.E)").a(b),s.h("@<e.E>").v(c).h("aS<1,2>"))},
ar(a){var s,r,q,p,o=this
if(o.gd1(a)){s=J.kt(0,A.an(a).h("e.E"))
return s}r=o.i(a,0)
q=A.hx(o.gk(a),r,!0,A.an(a).h("e.E"))
for(p=1;p<o.gk(a);++p)B.a.l(q,p,o.i(a,p))
return q},
q(a,b){var s=A.an(a)
s.h("l<e.E>").a(b)
s=A.dZ(a,s.h("e.E"))
B.a.U(s,b)
return s},
m(a){return A.ks(a,"[","]")}}
A.y.prototype={
t(a,b){var s,r,q,p=A.an(a)
p.h("~(y.K,y.V)").a(b)
for(s=J.bk(this.gG(a)),p=p.h("y.V");s.B();){r=s.gC(s)
q=this.i(a,r)
b.$2(r,q==null?p.a(q):q)}},
gk(a){return J.ds(this.gG(a))},
m(a){return A.hz(a)},
$iK:1}
A.hA.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=r.a+=A.m(a)
r.a=s+": "
r.a+=A.m(b)},
$S:43}
A.df.prototype={}
A.bS.prototype={
i(a,b){return this.a.i(0,b)},
t(a,b){this.a.t(0,this.$ti.h("~(1,2)").a(b))},
gk(a){return this.a.a},
gG(a){var s=this.a
return new A.as(s,s.$ti.h("as<1>"))},
m(a){return A.hz(this.a)},
$iK:1}
A.cL.prototype={}
A.c6.prototype={}
A.f5.prototype={
i(a,b){var s,r=this.b
if(r==null)return this.c.i(0,b)
else if(typeof b!="string")return null
else{s=r[b]
return typeof s=="undefined"?this.cs(b):s}},
gk(a){return this.b==null?this.c.a:this.ag().length},
gG(a){var s
if(this.b==null){s=this.c
return new A.as(s,A.x(s).h("as<1>"))}return new A.f6(this)},
t(a,b){var s,r,q,p,o=this
t.u.a(b)
if(o.b==null)return o.c.t(0,b)
s=o.ag()
for(r=0;r<s.length;++r){q=s[r]
p=o.b[q]
if(typeof p=="undefined"){p=A.iW(o.a[q])
o.b[q]=p}b.$2(q,p)
if(s!==o.c)throw A.b(A.X(o))}},
ag(){var s=t.bM.a(this.c)
if(s==null)s=this.c=A.q(Object.keys(this.a),t.s)
return s},
cs(a){var s
if(!Object.prototype.hasOwnProperty.call(this.a,a))return null
s=A.iW(this.a[a])
return this.b[a]=s}}
A.f6.prototype={
gk(a){var s=this.a
return s.gk(s)},
p(a,b){var s=this.a
if(s.b==null)s=s.gG(s).p(0,b)
else{s=s.ag()
if(!(b<s.length))return A.d(s,b)
s=s[b]}return s},
gF(a){var s=this.a
if(s.b==null){s=s.gG(s)
s=s.gF(s)}else{s=s.ag()
s=new J.bl(s,s.length,A.aF(s).h("bl<1>"))}return s}}
A.dD.prototype={}
A.dF.prototype={}
A.dW.prototype={
cO(a,b){var s=A.o2(b,this.gcP().a)
return s},
gcP(){return B.V}}
A.hr.prototype={}
A.hH.prototype={
$2(a,b){var s,r,q
t.fo.a(a)
s=this.b
r=this.a
q=s.a+=r.a
q+=a.a
s.a=q
s.a=q+": "
s.a+=A.bq(b)
r.a=", "},
$S:14}
A.ci.prototype={
K(a,b){if(b==null)return!1
return b instanceof A.ci&&this.a===b.a&&this.b===b.b},
gu(a){var s=this.a
return(s^B.f.bx(s,30))&1073741823},
m(a){var s=this,r=A.ml(A.mU(s)),q=A.dG(A.mS(s)),p=A.dG(A.mO(s)),o=A.dG(A.mP(s)),n=A.dG(A.mR(s)),m=A.dG(A.mT(s)),l=A.mm(A.mQ(s)),k=r+"-"+q
if(s.b)return k+"-"+p+" "+o+":"+n+":"+m+"."+l+"Z"
else return k+"-"+p+" "+o+":"+n+":"+m+"."+l}}
A.is.prototype={
m(a){return this.aG()}}
A.E.prototype={
gX(){return A.b3(this.$thrownJsError)}}
A.cc.prototype={
m(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.bq(s)
return"Assertion failed"}}
A.aV.prototype={}
A.aI.prototype={
gaI(){return"Invalid argument"+(!this.a?"(s)":"")},
gaH(){return""},
m(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+A.m(p),n=s.gaI()+q+o
if(!s.a)return n
return n+s.gaH()+": "+A.bq(s.gaW())},
gaW(){return this.b}}
A.cF.prototype={
gaW(){return A.nw(this.b)},
gaI(){return"RangeError"},
gaH(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.m(q):""
else if(q==null)s=": Not greater than or equal to "+A.m(r)
else if(q>r)s=": Not in inclusive range "+A.m(r)+".."+A.m(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.m(r)
return s}}
A.dR.prototype={
gaW(){return A.t(this.b)},
gaI(){return"RangeError"},
gaH(){if(A.t(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gk(a){return this.f}}
A.eb.prototype={
m(a){var s,r,q,p,o,n,m,l,k=this,j={},i=new A.cI("")
j.a=""
s=k.c
for(r=s.length,q=0,p="",o="";q<r;++q,o=", "){n=s[q]
i.a=p+o
p=i.a+=A.bq(n)
j.a=", "}k.d.t(0,new A.hH(j,i))
m=A.bq(k.a)
l=i.m(0)
return"NoSuchMethodError: method not found: '"+k.b.a+"'\nReceiver: "+m+"\nArguments: ["+l+"]"}}
A.eH.prototype={
m(a){return"Unsupported operation: "+this.a}}
A.eF.prototype={
m(a){return"UnimplementedError: "+this.a}}
A.bG.prototype={
m(a){return"Bad state: "+this.a}}
A.dE.prototype={
m(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.bq(s)+"."}}
A.ee.prototype={
m(a){return"Out of Memory"},
gX(){return null},
$iE:1}
A.cH.prototype={
m(a){return"Stack Overflow"},
gX(){return null},
$iE:1}
A.iv.prototype={
m(a){return"Exception: "+this.a}}
A.hd.prototype={
m(a){var s=this.a,r=""!==s?"FormatException: "+s:"FormatException"
return r}}
A.f.prototype={
aq(a,b,c){var s=A.x(this)
return A.kx(this,s.v(c).h("1(f.E)").a(b),s.h("f.E"),c)},
t(a,b){var s
A.x(this).h("~(f.E)").a(b)
for(s=this.gF(this);s.B();)b.$1(s.gC(s))},
gk(a){var s,r=this.gF(this)
for(s=0;r.B();)++s
return s},
p(a,b){var s,r=this.gF(this)
for(s=b;r.B();){if(s===0)return r.gC(r);--s}throw A.b(A.O(b,b-s,this,"index"))},
m(a){return A.mx(this,"(",")")}}
A.G.prototype={
gu(a){return A.v.prototype.gu.call(this,this)},
m(a){return"null"}}
A.v.prototype={$iv:1,
K(a,b){return this===b},
gu(a){return A.cE(this)},
m(a){return"Instance of '"+A.hM(this)+"'"},
bO(a,b){throw A.b(A.kA(this,t.B.a(b)))},
gD(a){return A.ot(this)},
toString(){return this.m(this)}}
A.fr.prototype={
m(a){return""},
$iaj:1}
A.cI.prototype={
gk(a){return this.a.length},
m(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
A.n.prototype={}
A.fV.prototype={
gk(a){return a.length}}
A.du.prototype={
m(a){var s=String(a)
s.toString
return s}}
A.dv.prototype={
m(a){var s=String(a)
s.toString
return s}}
A.bn.prototype={$ibn:1}
A.bo.prototype={$ibo:1}
A.bp.prototype={
sN(a,b){a.height=b},
sP(a,b){a.width=b},
av(a,b,c){var s=a.getContext(b,A.lC(c))
return s},
$ibp:1,
$idA:1}
A.az.prototype={
gk(a){return a.length}}
A.h3.prototype={
gk(a){return a.length}}
A.A.prototype={$iA:1}
A.ch.prototype={
gk(a){var s=a.length
s.toString
return s}}
A.h4.prototype={}
A.ap.prototype={}
A.aL.prototype={}
A.h5.prototype={
gk(a){return a.length}}
A.h6.prototype={
gk(a){return a.length}}
A.h7.prototype={
gk(a){return a.length},
i(a,b){var s=a[A.t(b)]
s.toString
return s}}
A.aM.prototype={$iaM:1}
A.bO.prototype={$ibO:1}
A.aN.prototype={$iaN:1}
A.h9.prototype={
m(a){var s=String(a)
s.toString
return s}}
A.cj.prototype={
gk(a){var s=a.length
s.toString
return s},
i(a,b){var s,r
A.t(b)
s=a.length
r=b>>>0!==b||b>=s
r.toString
if(r)throw A.b(A.O(b,s,a,null))
s=a[b]
s.toString
return s},
l(a,b,c){t.q.a(c)
throw A.b(A.D("Cannot assign element of immutable List."))},
gA(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.b(A.I("No elements"))},
p(a,b){if(!(b<a.length))return A.d(a,b)
return a[b]},
$ik:1,
$iu:1,
$if:1,
$il:1}
A.ck.prototype={
m(a){var s,r=a.left
r.toString
s=a.top
s.toString
return"Rectangle ("+A.m(r)+", "+A.m(s)+") "+A.m(this.gP(a))+" x "+A.m(this.gN(a))},
K(a,b){var s,r
if(b==null)return!1
if(t.q.b(b)){s=a.left
s.toString
r=b.left
r.toString
if(s===r){s=a.top
s.toString
r=b.top
r.toString
if(s===r){s=J.cb(b)
s=this.gP(a)===s.gP(b)&&this.gN(a)===s.gN(b)}else s=!1}else s=!1}else s=!1
return s},
gu(a){var s,r=a.left
r.toString
s=a.top
s.toString
return A.kB(r,s,this.gP(a),this.gN(a))},
gbo(a){return a.height},
gN(a){var s=this.gbo(a)
s.toString
return s},
gbA(a){return a.width},
gP(a){var s=this.gbA(a)
s.toString
return s},
$iaC:1}
A.dH.prototype={
gk(a){var s=a.length
s.toString
return s},
i(a,b){var s,r
A.t(b)
s=a.length
r=b>>>0!==b||b>=s
r.toString
if(r)throw A.b(A.O(b,s,a,null))
s=a[b]
s.toString
return s},
l(a,b,c){A.H(c)
throw A.b(A.D("Cannot assign element of immutable List."))},
gA(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.b(A.I("No elements"))},
p(a,b){if(!(b<a.length))return A.d(a,b)
return a[b]},
$ik:1,
$iu:1,
$if:1,
$il:1}
A.ha.prototype={
gk(a){var s=a.length
s.toString
return s}}
A.h.prototype={
m(a){var s=a.localName
s.toString
return s},
$ih:1}
A.j.prototype={$ij:1}
A.c.prototype={
cI(a,b,c,d){t.o.a(c)
if(c!=null)this.cg(a,b,c,!1)},
cg(a,b,c,d){return a.addEventListener(b,A.aG(t.o.a(c),1),!1)},
cu(a,b,c,d){return a.removeEventListener(b,A.aG(t.o.a(c),1),!1)},
$ic:1}
A.Y.prototype={$iY:1}
A.dJ.prototype={
gk(a){var s=a.length
s.toString
return s},
i(a,b){var s,r
A.t(b)
s=a.length
r=b>>>0!==b||b>=s
r.toString
if(r)throw A.b(A.O(b,s,a,null))
s=a[b]
s.toString
return s},
l(a,b,c){t.c8.a(c)
throw A.b(A.D("Cannot assign element of immutable List."))},
gA(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.b(A.I("No elements"))},
p(a,b){if(!(b<a.length))return A.d(a,b)
return a[b]},
$ik:1,
$iu:1,
$if:1,
$il:1}
A.dK.prototype={
gk(a){return a.length}}
A.bP.prototype={$ibP:1}
A.bQ.prototype={
t(a,b){return a.forEach(A.aG(t.cZ.a(b),3))},
$ibQ:1}
A.dL.prototype={
gk(a){return a.length}}
A.a4.prototype={$ia4:1}
A.hj.prototype={
gk(a){var s=a.length
s.toString
return s}}
A.bs.prototype={
gk(a){var s=a.length
s.toString
return s},
i(a,b){var s,r
A.t(b)
s=a.length
r=b>>>0!==b||b>=s
r.toString
if(r)throw A.b(A.O(b,s,a,null))
s=a[b]
s.toString
return s},
l(a,b,c){t.G.a(c)
throw A.b(A.D("Cannot assign element of immutable List."))},
gA(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.b(A.I("No elements"))},
p(a,b){if(!(b<a.length))return A.d(a,b)
return a[b]},
$ik:1,
$iu:1,
$if:1,
$il:1}
A.ar.prototype={
d6(a,b,c,d){return a.open(b,c,!0)},
$iar:1}
A.hk.prototype={
$1(a){var s=t.r.a(a).responseText
s.toString
return s},
$S:16}
A.hl.prototype={
$1(a){var s,r,q,p,o
t.D.a(a)
s=this.a
r=s.status
r.toString
q=r>=200&&r<300
p=r>307&&r<400
r=q||r===0||r===304||p
o=this.b
if(r)o.bF(0,s)
else o.an(a)},
$S:17}
A.bt.prototype={}
A.cn.prototype={$icn:1}
A.dQ.prototype={$idA:1}
A.bu.prototype={$ibu:1}
A.hn.prototype={
gd2(a){return a.isIntersecting}}
A.aR.prototype={$iaR:1}
A.hy.prototype={
m(a){var s=String(a)
s.toString
return s}}
A.bE.prototype={}
A.hE.prototype={
gk(a){return a.length}}
A.e_.prototype={
i(a,b){return A.bi(a.get(A.H(b)))},
t(a,b){var s,r,q
t.u.a(b)
s=a.entries()
for(;!0;){r=s.next()
q=r.done
q.toString
if(q)return
q=r.value[0]
q.toString
b.$2(q,A.bi(r.value[1]))}},
gG(a){var s=A.q([],t.s)
this.t(a,new A.hF(s))
return s},
gk(a){var s=a.size
s.toString
return s},
$iK:1}
A.hF.prototype={
$2(a,b){return B.a.n(this.a,a)},
$S:2}
A.e0.prototype={
i(a,b){return A.bi(a.get(A.H(b)))},
t(a,b){var s,r,q
t.u.a(b)
s=a.entries()
for(;!0;){r=s.next()
q=r.done
q.toString
if(q)return
q=r.value[0]
q.toString
b.$2(q,A.bi(r.value[1]))}},
gG(a){var s=A.q([],t.s)
this.t(a,new A.hG(s))
return s},
gk(a){var s=a.size
s.toString
return s},
$iK:1}
A.hG.prototype={
$2(a,b){return B.a.n(this.a,a)},
$S:2}
A.a5.prototype={$ia5:1}
A.e1.prototype={
gk(a){var s=a.length
s.toString
return s},
i(a,b){var s,r
A.t(b)
s=a.length
r=b>>>0!==b||b>=s
r.toString
if(r)throw A.b(A.O(b,s,a,null))
s=a[b]
s.toString
return s},
l(a,b,c){t.cI.a(c)
throw A.b(A.D("Cannot assign element of immutable List."))},
gA(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.b(A.I("No elements"))},
p(a,b){if(!(b<a.length))return A.d(a,b)
return a[b]},
$ik:1,
$iu:1,
$if:1,
$il:1}
A.Z.prototype={$iZ:1}
A.r.prototype={
m(a){var s=a.nodeValue
return s==null?this.bY(a):s},
$ir:1}
A.cB.prototype={
gk(a){var s=a.length
s.toString
return s},
i(a,b){var s,r
A.t(b)
s=a.length
r=b>>>0!==b||b>=s
r.toString
if(r)throw A.b(A.O(b,s,a,null))
s=a[b]
s.toString
return s},
l(a,b,c){t.G.a(c)
throw A.b(A.D("Cannot assign element of immutable List."))},
gA(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.b(A.I("No elements"))},
p(a,b){if(!(b<a.length))return A.d(a,b)
return a[b]},
$ik:1,
$iu:1,
$if:1,
$il:1}
A.a6.prototype={
gk(a){return a.length},
$ia6:1}
A.eg.prototype={
gk(a){var s=a.length
s.toString
return s},
i(a,b){var s,r
A.t(b)
s=a.length
r=b>>>0!==b||b>=s
r.toString
if(r)throw A.b(A.O(b,s,a,null))
s=a[b]
s.toString
return s},
l(a,b,c){t.he.a(c)
throw A.b(A.D("Cannot assign element of immutable List."))},
gA(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.b(A.I("No elements"))},
p(a,b){if(!(b<a.length))return A.d(a,b)
return a[b]},
$ik:1,
$iu:1,
$if:1,
$il:1}
A.au.prototype={$iau:1}
A.em.prototype={
i(a,b){return A.bi(a.get(A.H(b)))},
t(a,b){var s,r,q
t.u.a(b)
s=a.entries()
for(;!0;){r=s.next()
q=r.done
q.toString
if(q)return
q=r.value[0]
q.toString
b.$2(q,A.bi(r.value[1]))}},
gG(a){var s=A.q([],t.s)
this.t(a,new A.hQ(s))
return s},
gk(a){var s=a.size
s.toString
return s},
$iK:1}
A.hQ.prototype={
$2(a,b){return B.a.n(this.a,a)},
$S:2}
A.ep.prototype={
gk(a){return a.length}}
A.a0.prototype={$ia0:1}
A.er.prototype={
gk(a){var s=a.length
s.toString
return s},
i(a,b){var s,r
A.t(b)
s=a.length
r=b>>>0!==b||b>=s
r.toString
if(r)throw A.b(A.O(b,s,a,null))
s=a[b]
s.toString
return s},
l(a,b,c){t.fY.a(c)
throw A.b(A.D("Cannot assign element of immutable List."))},
gA(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.b(A.I("No elements"))},
p(a,b){if(!(b<a.length))return A.d(a,b)
return a[b]},
$ik:1,
$iu:1,
$if:1,
$il:1}
A.a7.prototype={$ia7:1}
A.es.prototype={
gk(a){var s=a.length
s.toString
return s},
i(a,b){var s,r
A.t(b)
s=a.length
r=b>>>0!==b||b>=s
r.toString
if(r)throw A.b(A.O(b,s,a,null))
s=a[b]
s.toString
return s},
l(a,b,c){t.f7.a(c)
throw A.b(A.D("Cannot assign element of immutable List."))},
gA(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.b(A.I("No elements"))},
p(a,b){if(!(b<a.length))return A.d(a,b)
return a[b]},
$ik:1,
$iu:1,
$if:1,
$il:1}
A.a8.prototype={
gk(a){return a.length},
$ia8:1}
A.eu.prototype={
i(a,b){return a.getItem(A.H(b))},
t(a,b){var s,r,q
t.eA.a(b)
for(s=0;!0;++s){r=a.key(s)
if(r==null)return
q=a.getItem(r)
q.toString
b.$2(r,q)}},
gG(a){var s=A.q([],t.s)
this.t(a,new A.hW(s))
return s},
gk(a){var s=a.length
s.toString
return s},
$iK:1}
A.hW.prototype={
$2(a,b){return B.a.n(this.a,a)},
$S:18}
A.U.prototype={$iU:1}
A.a1.prototype={$ia1:1}
A.Q.prototype={$iQ:1}
A.ey.prototype={
gk(a){var s=a.length
s.toString
return s},
i(a,b){var s,r
A.t(b)
s=a.length
r=b>>>0!==b||b>=s
r.toString
if(r)throw A.b(A.O(b,s,a,null))
s=a[b]
s.toString
return s},
l(a,b,c){t.c7.a(c)
throw A.b(A.D("Cannot assign element of immutable List."))},
gA(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.b(A.I("No elements"))},
p(a,b){if(!(b<a.length))return A.d(a,b)
return a[b]},
$ik:1,
$iu:1,
$if:1,
$il:1}
A.ez.prototype={
gk(a){var s=a.length
s.toString
return s},
i(a,b){var s,r
A.t(b)
s=a.length
r=b>>>0!==b||b>=s
r.toString
if(r)throw A.b(A.O(b,s,a,null))
s=a[b]
s.toString
return s},
l(a,b,c){t.a0.a(c)
throw A.b(A.D("Cannot assign element of immutable List."))},
gA(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.b(A.I("No elements"))},
p(a,b){if(!(b<a.length))return A.d(a,b)
return a[b]},
$ik:1,
$iu:1,
$if:1,
$il:1}
A.i4.prototype={
gk(a){var s=a.length
s.toString
return s}}
A.a9.prototype={$ia9:1}
A.eB.prototype={
gk(a){var s=a.length
s.toString
return s},
i(a,b){var s,r
A.t(b)
s=a.length
r=b>>>0!==b||b>=s
r.toString
if(r)throw A.b(A.O(b,s,a,null))
s=a[b]
s.toString
return s},
l(a,b,c){t.aK.a(c)
throw A.b(A.D("Cannot assign element of immutable List."))},
gA(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.b(A.I("No elements"))},
p(a,b){if(!(b<a.length))return A.d(a,b)
return a[b]},
$ik:1,
$iu:1,
$if:1,
$il:1}
A.i5.prototype={
gk(a){return a.length}}
A.aD.prototype={}
A.ib.prototype={
m(a){var s=String(a)
s.toString
return s}}
A.eJ.prototype={$idA:1}
A.eK.prototype={
gk(a){return a.length}}
A.bb.prototype={
gcV(a){var s=a.deltaY
if(s!=null)return s
throw A.b(A.D("deltaY is not supported"))},
gcU(a){var s=a.deltaX
if(s!=null)return s
throw A.b(A.D("deltaX is not supported"))},
$ibb:1}
A.bc.prototype={
bR(a,b){var s
t.c4.a(b)
this.bl(a)
s=A.k_(b,t.H)
s.toString
return this.cw(a,s)},
cw(a,b){var s=a.requestAnimationFrame(A.aG(t.c4.a(b),1))
s.toString
return s},
bl(a){var s=!!(a.requestAnimationFrame&&a.cancelAnimationFrame)
s.toString
if(s)return;(function(b){var r=["ms","moz","webkit","o"]
for(var q=0;q<r.length&&!b.requestAnimationFrame;++q){b.requestAnimationFrame=b[r[q]+"RequestAnimationFrame"]
b.cancelAnimationFrame=b[r[q]+"CancelAnimationFrame"]||b[r[q]+"CancelRequestAnimationFrame"]}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
$ibc:1}
A.aE.prototype={$iaE:1}
A.eQ.prototype={
gk(a){var s=a.length
s.toString
return s},
i(a,b){var s,r
A.t(b)
s=a.length
r=b>>>0!==b||b>=s
r.toString
if(r)throw A.b(A.O(b,s,a,null))
s=a[b]
s.toString
return s},
l(a,b,c){t.g5.a(c)
throw A.b(A.D("Cannot assign element of immutable List."))},
gA(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.b(A.I("No elements"))},
p(a,b){if(!(b<a.length))return A.d(a,b)
return a[b]},
$ik:1,
$iu:1,
$if:1,
$il:1}
A.cS.prototype={
m(a){var s,r,q,p=a.left
p.toString
s=a.top
s.toString
r=a.width
r.toString
q=a.height
q.toString
return"Rectangle ("+A.m(p)+", "+A.m(s)+") "+A.m(r)+" x "+A.m(q)},
K(a,b){var s,r
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
r=J.cb(b)
if(s===r.gP(b)){s=a.height
s.toString
r=s===r.gN(b)
s=r}else s=!1}else s=!1}else s=!1}else s=!1
return s},
gu(a){var s,r,q,p=a.left
p.toString
s=a.top
s.toString
r=a.width
r.toString
q=a.height
q.toString
return A.kB(p,s,r,q)},
gbo(a){return a.height},
gN(a){var s=a.height
s.toString
return s},
gbA(a){return a.width},
gP(a){var s=a.width
s.toString
return s}}
A.f2.prototype={
gk(a){var s=a.length
s.toString
return s},
i(a,b){var s,r
A.t(b)
s=a.length
r=b>>>0!==b||b>=s
r.toString
if(r)throw A.b(A.O(b,s,a,null))
return a[b]},
l(a,b,c){t.g7.a(c)
throw A.b(A.D("Cannot assign element of immutable List."))},
gA(a){if(a.length>0)return a[0]
throw A.b(A.I("No elements"))},
p(a,b){if(!(b<a.length))return A.d(a,b)
return a[b]},
$ik:1,
$iu:1,
$if:1,
$il:1}
A.d0.prototype={
gk(a){var s=a.length
s.toString
return s},
i(a,b){var s,r
A.t(b)
s=a.length
r=b>>>0!==b||b>=s
r.toString
if(r)throw A.b(A.O(b,s,a,null))
s=a[b]
s.toString
return s},
l(a,b,c){t.G.a(c)
throw A.b(A.D("Cannot assign element of immutable List."))},
gA(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.b(A.I("No elements"))},
p(a,b){if(!(b<a.length))return A.d(a,b)
return a[b]},
$ik:1,
$iu:1,
$if:1,
$il:1}
A.fn.prototype={
gk(a){var s=a.length
s.toString
return s},
i(a,b){var s,r
A.t(b)
s=a.length
r=b>>>0!==b||b>=s
r.toString
if(r)throw A.b(A.O(b,s,a,null))
s=a[b]
s.toString
return s},
l(a,b,c){t.gf.a(c)
throw A.b(A.D("Cannot assign element of immutable List."))},
gA(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.b(A.I("No elements"))},
p(a,b){if(!(b<a.length))return A.d(a,b)
return a[b]},
$ik:1,
$iu:1,
$if:1,
$il:1}
A.fs.prototype={
gk(a){var s=a.length
s.toString
return s},
i(a,b){var s,r
A.t(b)
s=a.length
r=b>>>0!==b||b>=s
r.toString
if(r)throw A.b(A.O(b,s,a,null))
s=a[b]
s.toString
return s},
l(a,b,c){t.gn.a(c)
throw A.b(A.D("Cannot assign element of immutable List."))},
gA(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.b(A.I("No elements"))},
p(a,b){if(!(b<a.length))return A.d(a,b)
return a[b]},
$ik:1,
$iu:1,
$if:1,
$il:1}
A.jA.prototype={}
A.cT.prototype={
ap(a,b,c,d){var s=A.x(this)
s.h("~(1)?").a(a)
t.Y.a(c)
return A.a2(this.a,this.b,a,!1,s.c)}}
A.eY.prototype={}
A.cU.prototype={
a2(a){var s=this
if(s.b==null)return $.jv()
s.bz()
s.b=null
s.sbv(null)
return $.jv()},
aY(a){var s,r=this
r.$ti.h("~(1)?").a(a)
if(r.b==null)throw A.b(A.I("Subscription has been canceled."))
r.bz()
s=A.k_(new A.iu(a),t.A)
r.sbv(s)
r.by()},
by(){var s,r=this.d
if(r!=null&&!0){s=this.b
s.toString
J.m4(s,this.c,r,!1)}},
bz(){var s,r=this.d
if(r!=null){s=this.b
s.toString
J.m3(s,this.c,t.o.a(r),!1)}},
sbv(a){this.d=t.o.a(a)},
$iak:1}
A.it.prototype={
$1(a){return this.a.$1(t.A.a(a))},
$S:5}
A.iu.prototype={
$1(a){return this.a.$1(t.A.a(a))},
$S:5}
A.jN.prototype={}
A.o.prototype={
gF(a){return new A.cm(a,this.gk(a),A.an(a).h("cm<o.E>"))}}
A.cm.prototype={
B(){var s=this,r=s.c+1,q=s.b
if(r<q){s.sbp(J.ab(s.a,r))
s.c=r
return!0}s.sbp(null)
s.c=q
return!1},
gC(a){var s=this.d
return s==null?this.$ti.c.a(s):s},
sbp(a){this.d=this.$ti.h("1?").a(a)},
$iad:1}
A.eR.prototype={}
A.eU.prototype={}
A.eV.prototype={}
A.eW.prototype={}
A.eX.prototype={}
A.f_.prototype={}
A.f0.prototype={}
A.f3.prototype={}
A.f4.prototype={}
A.f9.prototype={}
A.fa.prototype={}
A.fb.prototype={}
A.fc.prototype={}
A.fd.prototype={}
A.fe.prototype={}
A.fh.prototype={}
A.fi.prototype={}
A.fk.prototype={}
A.d6.prototype={}
A.d7.prototype={}
A.fl.prototype={}
A.fm.prototype={}
A.fo.prototype={}
A.ft.prototype={}
A.fu.prototype={}
A.d9.prototype={}
A.da.prototype={}
A.fv.prototype={}
A.fw.prototype={}
A.fA.prototype={}
A.fB.prototype={}
A.fC.prototype={}
A.fD.prototype={}
A.fE.prototype={}
A.fF.prototype={}
A.fG.prototype={}
A.fH.prototype={}
A.fI.prototype={}
A.fJ.prototype={}
A.ii.prototype={
bK(a){var s,r=this.a,q=r.length
for(s=0;s<q;++s)if(r[s]===a)return s
B.a.n(r,a)
B.a.n(this.b,null)
return q},
b3(a){var s,r,q,p,o,n,m,l,k,j=this
if(a==null)return a
if(A.c7(a))return a
if(typeof a=="number")return a
if(typeof a=="string")return a
s=a instanceof Date
s.toString
if(s){s=a.getTime()
s.toString
return A.kk(s,!0)}s=a instanceof RegExp
s.toString
if(s)throw A.b(A.jK("structured clone of RegExp"))
s=typeof Promise!="undefined"&&a instanceof Promise
s.toString
if(s)return A.oO(a,t.z)
if(A.lH(a)){r=j.bK(a)
s=j.b
if(!(r<s.length))return A.d(s,r)
q=s[r]
if(q!=null)return q
p=t.z
o=A.hw(p,p)
B.a.l(s,r,o)
j.cX(a,new A.ik(j,o))
return o}s=a instanceof Array
s.toString
if(s){s=a
s.toString
r=j.bK(s)
p=j.b
if(!(r<p.length))return A.d(p,r)
q=p[r]
if(q!=null)return q
n=J.ax(s)
m=n.gk(s)
if(j.c){l=new Array(m)
l.toString
q=l}else q=s
B.a.l(p,r,q)
for(p=J.ca(q),k=0;k<m;++k)p.l(q,k,j.b3(n.i(s,k)))
return q}return a}}
A.ik.prototype={
$2(a,b){var s=this.a.b3(b)
this.b.l(0,a,s)
return s},
$S:20}
A.iV.prototype={
$1(a){this.a.push(A.lh(a))},
$S:3}
A.j3.prototype={
$2(a,b){this.a[a]=A.lh(b)},
$S:22}
A.ij.prototype={
cX(a,b){var s,r,q,p
t.b8.a(b)
for(s=Object.keys(a),r=s.length,q=0;q<s.length;s.length===r||(0,A.ao)(s),++q){p=s[q]
b.$2(p,a[p])}}}
A.cs.prototype={$ics:1}
A.hq.prototype={
$1(a){var s,r,q,p,o=this.a
if(o.a4(0,a))return o.i(0,a)
if(t.f.b(a)){s={}
o.l(0,a,s)
for(o=J.cb(a),r=J.bk(o.gG(a));r.B();){q=r.gC(r)
s[q]=this.$1(o.i(a,q))}return s}else if(t.d.b(a)){p=[]
o.l(0,a,p)
B.a.U(p,J.kd(a,this,t.z))
return p}else return A.jT(a)},
$S:23}
A.iX.prototype={
$1(a){var s
t.Z.a(a)
s=function(b,c,d){return function(){return b(c,d,this,Array.prototype.slice.apply(arguments))}}(A.nA,a,!1)
A.jU(s,$.fP(),a)
return s},
$S:6}
A.iY.prototype={
$1(a){return new this.a(a)},
$S:6}
A.j_.prototype={
$1(a){return new A.cq(a==null?t.K.a(a):a)},
$S:24}
A.j0.prototype={
$1(a){var s=a==null?t.K.a(a):a
return new A.by(s,t.am)},
$S:25}
A.j1.prototype={
$1(a){return new A.aP(a==null?t.K.a(a):a)},
$S:26}
A.aP.prototype={
i(a,b){t.K.a(b)
if(typeof b!="string"&&typeof b!="number")throw A.b(A.aJ("property is not a String or num",null))
return A.lj(this.a[b])},
l(a,b,c){if(typeof b!="string"&&typeof b!="number")throw A.b(A.aJ("property is not a String or num",null))
this.a[b]=A.jT(c)},
K(a,b){if(b==null)return!1
return b instanceof A.aP&&this.a===b.a},
m(a){var s,r
try{s=String(this.a)
return s}catch(r){s=this.c1(0)
return s}},
gu(a){return 0}}
A.cq.prototype={}
A.by.prototype={
bf(a){var s=this,r=a<0||a>=s.gk(s)
if(r)throw A.b(A.kE(a,0,s.gk(s),null,null))},
i(a,b){t.K.a(b)
if(A.fK(b))this.bf(b)
return this.$ti.c.a(this.bZ(0,b))},
l(a,b,c){if(A.fK(b))this.bf(b)
this.c2(0,b,c)},
gk(a){var s=this.a.length
if(typeof s==="number"&&s>>>0===s)return s
throw A.b(A.I("Bad JsArray length"))},
$ik:1,
$if:1,
$il:1}
A.c3.prototype={
l(a,b,c){return this.c_(0,b,c)}}
A.ji.prototype={
$1(a){return this.a.bF(0,this.b.h("0/?").a(a))},
$S:3}
A.jj.prototype={
$1(a){if(a==null)return this.a.an(new A.hI(a===undefined))
return this.a.an(a)},
$S:3}
A.hI.prototype={
m(a){return"Promise was rejected with a value of `"+(this.a?"undefined":"null")+"`."}}
A.b8.prototype={
m(a){return"Point("+A.m(this.a)+", "+A.m(this.b)+")"},
K(a,b){if(b==null)return!1
return b instanceof A.b8&&this.a===b.a&&this.b===b.b},
gu(a){return A.mZ(B.b.gu(this.a),B.b.gu(this.b),0)},
q(a,b){var s,r=this.$ti
r.a(b)
s=r.c
return new A.b8(s.a(B.b.q(this.a,b.gde(b))),s.a(B.b.q(this.b,b.gdf(b))),r)},
j(a,b){var s=this.$ti,r=s.c
return new A.b8(r.a(this.a*b),r.a(this.b*b),s)}}
A.ae.prototype={$iae:1}
A.dX.prototype={
gk(a){var s=a.length
s.toString
return s},
i(a,b){var s
A.t(b)
s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw A.b(A.O(b,this.gk(a),a,null))
s=a.getItem(b)
s.toString
return s},
l(a,b,c){t.bG.a(c)
throw A.b(A.D("Cannot assign element of immutable List."))},
gA(a){var s=a.length
s.toString
if(s>0){s=a[0]
s.toString
return s}throw A.b(A.I("No elements"))},
p(a,b){return this.i(a,b)},
$ik:1,
$if:1,
$il:1}
A.ag.prototype={$iag:1}
A.ec.prototype={
gk(a){var s=a.length
s.toString
return s},
i(a,b){var s
A.t(b)
s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw A.b(A.O(b,this.gk(a),a,null))
s=a.getItem(b)
s.toString
return s},
l(a,b,c){t.ck.a(c)
throw A.b(A.D("Cannot assign element of immutable List."))},
gA(a){var s=a.length
s.toString
if(s>0){s=a[0]
s.toString
return s}throw A.b(A.I("No elements"))},
p(a,b){return this.i(a,b)},
$ik:1,
$if:1,
$il:1}
A.hK.prototype={
gk(a){return a.length}}
A.ew.prototype={
gk(a){var s=a.length
s.toString
return s},
i(a,b){var s
A.t(b)
s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw A.b(A.O(b,this.gk(a),a,null))
s=a.getItem(b)
s.toString
return s},
l(a,b,c){A.H(c)
throw A.b(A.D("Cannot assign element of immutable List."))},
gA(a){var s=a.length
s.toString
if(s>0){s=a[0]
s.toString
return s}throw A.b(A.I("No elements"))},
p(a,b){return this.i(a,b)},
$ik:1,
$if:1,
$il:1}
A.al.prototype={$ial:1}
A.eC.prototype={
gk(a){var s=a.length
s.toString
return s},
i(a,b){var s
A.t(b)
s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw A.b(A.O(b,this.gk(a),a,null))
s=a.getItem(b)
s.toString
return s},
l(a,b,c){t.cM.a(c)
throw A.b(A.D("Cannot assign element of immutable List."))},
gA(a){var s=a.length
s.toString
if(s>0){s=a[0]
s.toString
return s}throw A.b(A.I("No elements"))},
p(a,b){return this.i(a,b)},
$ik:1,
$if:1,
$il:1}
A.f7.prototype={}
A.f8.prototype={}
A.ff.prototype={}
A.fg.prototype={}
A.fp.prototype={}
A.fq.prototype={}
A.fx.prototype={}
A.fy.prototype={}
A.fX.prototype={
gk(a){return a.length}}
A.dx.prototype={
i(a,b){return A.bi(a.get(A.H(b)))},
t(a,b){var s,r,q
t.u.a(b)
s=a.entries()
for(;!0;){r=s.next()
q=r.done
q.toString
if(q)return
q=r.value[0]
q.toString
b.$2(q,A.bi(r.value[1]))}},
gG(a){var s=A.q([],t.s)
this.t(a,new A.fY(s))
return s},
gk(a){var s=a.size
s.toString
return s},
$iK:1}
A.fY.prototype={
$2(a,b){return B.a.n(this.a,a)},
$S:2}
A.dy.prototype={
gk(a){return a.length}}
A.b5.prototype={}
A.ed.prototype={
gk(a){return a.length}}
A.eP.prototype={}
A.dz.prototype={$idz:1}
A.aK.prototype={$iaK:1}
A.dN.prototype={$idN:1}
A.eh.prototype={$ieh:1}
A.el.prototype={$iel:1}
A.cG.prototype={$icG:1}
A.bX.prototype={
al(a,b,c){return a.bindBuffer(b,c)},
E(a,b,c){return a.bindFramebuffer(b,c)},
bC(a,b,c){return a.bindRenderbuffer(b,c)},
bD(a,b,c){return a.bindTexture(b,c)},
bI(a,b){return a.deleteBuffer(b)},
cQ(a,b){return a.deleteFramebuffer(b)},
cR(a,b){return a.deleteProgram(b)},
cS(a,b){return a.deleteRenderbuffer(b)},
bJ(a,b){return a.deleteShader(b)},
cT(a,b){return a.deleteTexture(b)},
cZ(a,b,c,d,e){return a.framebufferRenderbuffer(b,c,d,e)},
aV(a,b,c,d,e,f){return a.framebufferTexture2D(b,c,d,e,f)},
bV(a,b,c,d,e,f,g,h,i,j){var s=i==null
if(!s&&h!=null&&A.fK(g)){this.cE(a,b,c,d,e,f,g,h,i,j)
return}if(t.gA.b(g)&&h==null&&s&&j==null){this.cF(a,b,c,d,e,f,g)
return}throw A.b(A.aJ("Incorrect number or type of arguments",null))},
d9(a,b,c,d,e,f,g){return this.bV(a,b,c,d,e,f,g,null,null,null)},
cE(a,b,c,d,e,f,g,h,i,j){return a.texImage2D(b,c,d,e,f,g,h,i,j)},
cF(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
a6(a,b,c){return a.uniform1i(b,c)},
da(a,b,c){return a.uniform2fv(b,c)},
bW(a,b,c){return a.uniform4fv(b,c)},
b2(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
dc(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
au(a,b){return a.useProgram(b)},
$ibX:1}
A.eq.prototype={$ieq:1}
A.eA.prototype={$ieA:1}
A.eE.prototype={$ieE:1}
A.fU.prototype={}
A.hT.prototype={}
A.i7.prototype={}
A.dO.prototype={
gcY(){var s=B.a.cW(this.a,0,new A.he(),t.H)
if(typeof s!=="number")return A.am(s)
return B.b.T(20/s)},
c9(a){var s,r,q=this
A.lg(a)
s=q.f=(a-q.b)*0.001
q.b=a
r=q.c+=s
q.d+=s
q.e+=s
if(r>=0.03333333333333333){s=B.b.b4(r,0.03333333333333333)
q.c=s
q.r.n(0,0.03333333333333333+s)}s=q.d
if(s>=0.016666666666666666){s=B.b.b4(s,0.016666666666666666)
q.d=s
q.w.n(0,0.016666666666666666+s)
s=q.a
if(!!s.fixed$length)A.bj(A.D("removeAt"))
r=s.length
if(0>=r)A.bj(A.kF(0,null))
s.splice(0,1)[0]
B.a.n(s,q.e)
q.e=0}s=window
s.toString
q.x=B.i.bR(s,q.gb9())},
scG(a){this.r=t.I.a(a)},
scH(a){this.w=t.I.a(a)}}
A.he.prototype={
$2(a,b){return A.lg(a)+A.bg(b)},
$S:28}
A.dP.prototype={}
A.aB.prototype={
c4(a){var s=a.a,r=s*s,q=a.b,p=q*q,o=a.c,n=o*o,m=s*q,l=s*o,k=q*o,j=a.d,i=j*s,h=j*q,g=j*o,f=new A.hB(this)
f.$3(0,0,1-2*(p+n))
f.$3(0,1,2*(m-g))
f.$3(0,2,2*(l+h))
f.$3(1,0,2*(m+g))
f.$3(1,1,1-2*(r+n))
f.$3(1,2,2*(k-i))
f.$3(2,0,2*(l-h))
f.$3(2,1,2*(k+i))
f.$3(2,2,1-2*(r+p))},
j(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
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
h=a3.gcN(a3)
g=h.i(0,0)
f=h.i(0,1)
e=h.i(0,2)
d=h.i(0,3)
c=h.i(0,4)
b=h.i(0,5)
a=h.i(0,6)
a0=h.i(0,7)
a1=h.i(0,8)
return new A.aB(A.q([B.b.j(q,g)+B.b.j(p,f)+B.b.j(o,e),B.b.j(n,g)+B.b.j(m,f)+B.b.j(l,e),B.b.j(k,g)+B.b.j(j,f)+B.b.j(i,e),B.b.j(q,d)+B.b.j(p,c)+B.b.j(o,b),B.b.j(n,d)+B.b.j(m,c)+B.b.j(l,b),B.b.j(k,d)+B.b.j(j,c)+B.b.j(i,b),B.b.j(q,a)+B.b.j(p,a0)+B.b.j(o,a1),B.b.j(n,a)+B.b.j(m,a0)+B.b.j(l,a1),B.b.j(k,a)+B.b.j(j,a0)+B.b.j(i,a1)],t.n))},
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
A.hB.prototype={
$3(a,b,c){B.a.l(this.a.a,b*3+a,c)
return c},
$S:45}
A.bD.prototype={
j(b6,b7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
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
return new A.bD(A.q([q*a0+p*a4+o*a8+n*b2,m*a0+l*a4+k*a8+j*b2,i*a0+h*a4+g*a8+f*b2,e*a0+d*a4+c*a8+b*b2,q*a1+p*a5+o*a9+n*b3,m*a1+l*a5+k*a9+j*b3,i*a1+h*a5+g*a9+f*b3,e*a1+d*a5+c*a9+b*b3,q*a2+p*a6+o*b0+n*b4,m*a2+l*a6+k*b0+j*b4,i*a2+h*a6+g*b0+f*b4,e*a2+d*a6+c*b0+b*b4,q*a3+p*a7+o*b1+n*b5,m*a3+l*a7+k*b1+j*b5,i*a3+h*a7+g*b1+f*b5,e*a3+d*a7+c*b1+b*b5],t.n))},
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
A.aT.prototype={
q(a,b){t.m.a(b)
return new A.aT(B.b.q(this.a,b.gde(b)),B.b.q(this.b,b.gdf(b)))},
j(a,b){t.m.a(b)
return new A.aT(this.a*b.a,this.b*b.b)},
m(a){return"["+A.m(this.a)+", "+A.m(this.b)+"]"}}
A.ah.prototype={
q(a,b){t.eU.a(b)
return new A.ah(this.a+b.a,this.b+b.b,this.c+b.c)},
j(a,b){return new A.ah(this.a*b,this.b*b,this.c*b)},
m(a){return"["+A.m(this.a)+", "+A.m(this.b)+", "+A.m(this.c)+"]"}}
A.ei.prototype={}
A.av.prototype={
c5(a){var s,r,q,p=this,o=new A.hO(a),n=o.$2(0,0),m=o.$2(1,1),l=o.$2(2,2),k=n+m+l
if(k>0){s=Math.sqrt(k+1)*0.5
p.d=s
r=0.25/s
s=o.$2(2,1)
q=o.$2(1,2)
if(typeof s!=="number")return s.Y()
if(typeof q!=="number")return A.am(q)
p.a=(s-q)*r
q=o.$2(0,2)
s=o.$2(2,0)
if(typeof q!=="number")return q.Y()
if(typeof s!=="number")return A.am(s)
p.b=(q-s)*r
s=o.$2(1,0)
q=o.$2(0,1)
if(typeof s!=="number")return s.Y()
if(typeof q!=="number")return A.am(q)
p.c=(s-q)*r}else if(n>m&&n>l){s=Math.sqrt(n-m-l+1)*0.5
p.a=s
r=0.25/s
s=o.$2(1,0)
q=o.$2(0,1)
if(typeof s!=="number")return s.q()
if(typeof q!=="number")return A.am(q)
p.b=(s+q)*r
q=o.$2(0,2)
s=o.$2(2,0)
if(typeof q!=="number")return q.q()
if(typeof s!=="number")return A.am(s)
p.c=(q+s)*r
s=o.$2(2,1)
q=o.$2(1,2)
if(typeof s!=="number")return s.Y()
if(typeof q!=="number")return A.am(q)
p.d=(s-q)*r}else if(m>l){s=Math.sqrt(m-n-l+1)*0.5
p.b=s
r=0.25/s
s=o.$2(1,0)
q=o.$2(0,1)
if(typeof s!=="number")return s.q()
if(typeof q!=="number")return A.am(q)
p.a=(s+q)*r
q=o.$2(2,1)
s=o.$2(1,2)
if(typeof q!=="number")return q.q()
if(typeof s!=="number")return A.am(s)
p.c=(q+s)*r
s=o.$2(0,2)
q=o.$2(2,0)
if(typeof s!=="number")return s.Y()
if(typeof q!=="number")return A.am(q)
p.d=(s-q)*r}else{s=Math.sqrt(l-n-m+1)*0.5
p.c=s
r=0.25/s
s=o.$2(0,2)
q=o.$2(2,0)
if(typeof s!=="number")return s.q()
if(typeof q!=="number")return A.am(q)
p.a=(s+q)*r
q=o.$2(2,1)
s=o.$2(1,2)
if(typeof q!=="number")return q.q()
if(typeof s!=="number")return A.am(s)
p.b=(q+s)*r
s=o.$2(1,0)
q=o.$2(0,1)
if(typeof s!=="number")return s.Y()
if(typeof q!=="number")return A.am(q)
p.d=(s-q)*r}},
q(a,b){var s=this
t.L.a(b)
return new A.av(s.a+b.a,s.b+b.b,s.c+b.c,s.d+b.d)},
j(a,b){var s,r,q,p,o,n,m,l,k=this
t.L.a(b)
s=b.d
r=b.c
q=b.b
p=b.a
o=k.d
n=k.a
m=k.b
l=k.c
return new A.av(o*p+n*s+m*r-l*q,o*q+m*s+l*p-n*r,o*r+l*s+n*q-m*p,o*s-n*p-m*q-l*r)},
m(a){var s=this
return"      ["+A.m(s.a)+", "+A.m(s.b)+", "+A.m(s.c)+", "+A.m(s.d)+"]\n    "}}
A.hO.prototype={
$2(a,b){var s=this.a.a,r=b*3+a
if(!(r<s.length))return A.d(s,r)
return s[r]},
$S:30}
A.cK.prototype={}
A.aU.prototype={
gS(){var s,r,q,p,o,n,m,l,k=this.a,j=k.length
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
return new A.aB(A.q([s,r,q,p,o,n,m,l,k[10]],t.n))},
sS(a){var s=a.a,r=this.a
if(0>=s.length)return A.d(s,0)
B.a.l(r,0,s[0])
if(1>=s.length)return A.d(s,1)
B.a.l(r,1,s[1])
if(2>=s.length)return A.d(s,2)
B.a.l(r,2,s[2])
if(3>=s.length)return A.d(s,3)
B.a.l(r,4,s[3])
if(4>=s.length)return A.d(s,4)
B.a.l(r,5,s[4])
if(5>=s.length)return A.d(s,5)
B.a.l(r,6,s[5])
if(6>=s.length)return A.d(s,6)
B.a.l(r,8,s[6])
if(7>=s.length)return A.d(s,7)
B.a.l(r,9,s[7])
if(8>=s.length)return A.d(s,8)
B.a.l(r,10,s[8])},
gbS(a){var s,r,q=this.a,p=q.length
if(0>=p)return A.d(q,0)
s=q[0]
if(1>=p)return A.d(q,1)
r=q[1]
if(2>=p)return A.d(q,2)
return new A.P(s,r,q[2])},
gbX(){var s,r,q=this.a,p=q.length
if(4>=p)return A.d(q,4)
s=q[4]
if(5>=p)return A.d(q,5)
r=q[5]
if(6>=p)return A.d(q,6)
return new A.P(s,r,q[6])},
gbL(a){var s,r,q=this.a,p=q.length
if(8>=p)return A.d(q,8)
s=q[8]
if(9>=p)return A.d(q,9)
r=q[9]
if(10>=p)return A.d(q,10)
return new A.P(s,r,q[10])},
gO(){var s,r,q=this.a,p=q.length
if(12>=p)return A.d(q,12)
s=q[12]
if(13>=p)return A.d(q,13)
r=q[13]
if(14>=p)return A.d(q,14)
return new A.ah(s,r,q[14])},
sO(a){var s=this.a
B.a.l(s,12,a.a)
B.a.l(s,13,a.b)
B.a.l(s,14,a.c)},
j(a8,a9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
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
e=a9.gcN(a9)
d=e.i(0,0)
c=e.i(0,4)
b=e.i(0,8)
a=e.i(0,12)
a0=e.i(0,1)
a1=e.i(0,5)
a2=e.i(0,9)
a3=e.i(0,13)
a4=e.i(0,2)
a5=e.i(0,6)
a6=e.i(0,10)
a7=e.i(0,14)
return new A.aU(A.q([B.b.j(q,d)+B.b.j(p,a0)+B.b.j(o,a4),B.b.j(m,d)+B.b.j(l,a0)+B.b.j(k,a4),B.b.j(i,d)+B.b.j(h,a0)+B.b.j(g,a4),0,B.b.j(q,c)+B.b.j(p,a1)+B.b.j(o,a5),B.b.j(m,c)+B.b.j(l,a1)+B.b.j(k,a5),B.b.j(i,c)+B.b.j(h,a1)+B.b.j(g,a5),0,B.b.j(q,b)+B.b.j(p,a2)+B.b.j(o,a6),B.b.j(m,b)+B.b.j(l,a2)+B.b.j(k,a6),B.b.j(i,b)+B.b.j(h,a2)+B.b.j(g,a6),0,B.b.j(q,a)+B.b.j(p,a3)+B.b.j(o,a7)+n,B.b.j(m,a)+B.b.j(l,a3)+B.b.j(k,a7)+j,B.b.j(i,a)+B.b.j(h,a3)+B.b.j(g,a7)+f,1],t.n))}}
A.P.prototype={
q(a,b){t.cW.a(b)
return new A.P(this.a+b.a,this.b+b.b,this.c+b.c)},
j(a,b){return new A.P(this.a*b,this.b*b,this.c*b)},
W(a){return new A.P(-this.a,-this.b,-this.c)},
m(a){return"["+A.m(this.a)+", "+A.m(this.b)+", "+A.m(this.c)+"]"}}
A.hh.prototype={
R(a,b,c,d,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e="byteOffset"
t.aH.a(a0)
t.g6.a(a1)
s=J.ax(d)
r=J.ab(J.ab(J.ab(s.i(d,"meshes"),a),"primitives"),b)
q=s.i(d,"accessors")
p=s.i(d,"bufferViews")
o=s.i(d,"buffers")
n=A.q([],t.U)
s=J.ax(r)
J.fT(s.i(r,"attributes"),new A.hi(this,a1,q,p,a0,o,c,n))
m=J.ab(q,s.i(r,"indices"))
s=J.ax(m)
l=J.ab(p,s.i(m,"bufferView"))
k=J.ax(l)
j=k.i(l,e)
i=A.t(j==null?0:j)
k=a0.i(0,J.ab(J.ab(o,k.i(l,"buffer")),"uri"))
k.toString
j=s.i(m,e)
h=A.t(j==null?0:j)
A.t(s.i(m,"componentType"))
g=J.kc(s.i(m,"count"),2)
s=new Uint8Array(A.dh(A.mD(k.buffer,i+h,A.lf(g)))).buffer
A.iU(s,0,null)
f=B.f.cC(s.byteLength-0,2)
return new A.cD(c.b7(new Uint16Array(s,0,f)),new A.eI(0),new A.cM(A.jE(n,t.cQ)),4)},
c6(a){switch(J.ab(a,"type")){case"VEC4":return 4
case"VEC3":return 3
case"VEC2":return 2
default:return 1}}}
A.hi.prototype={
$2(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=this,g="byteOffset",f=h.b
if(f.i(0,a)==null)return
f=f.i(0,a)
f.toString
s=J.ab(h.c,b)
r=J.ax(s)
q=J.ab(h.d,r.i(s,"bufferView"))
p=J.ax(q)
o=p.i(q,g)
p=h.e.i(0,J.ab(J.ab(h.f,p.i(q,"buffer")),"uri"))
p.toString
n=r.i(s,g)
m=A.t(n==null?0:n)
l=J.fS(r.i(s,"componentType"),5123)?2:4
t.f.a(s)
k=h.a.c6(s)
j=J.kc(r.i(s,"count"),k)
r=p.buffer
p=A.t(J.m1(o,m))
A.lf(j)
A.iU(r,p,j)
i=h.r.b6(new Float32Array(A.dh(new Float32Array(r,p,j))))
B.a.n(h.w,new A.bm(A.H(a),f,k,k*l,i.b))},
$S:31}
A.aQ.prototype={}
A.ac.prototype={}
A.cr.prototype={}
A.eM.prototype={}
A.c4.prototype={
aG(){return"_KeyAction."+this.b}}
A.hs.prototype={
aB(){var s,r,q,p,o,n,m=this
for(s=t.bl,r=m.b,q=0;q<2;++q){p=B.W[q]
r.l(0,p,new A.aX(null,null,s))}s=m.a
r=document
r.toString
o=t.eN
n=t.g
B.a.n(s,A.a2(r,"keydown",o.a(new A.ht(m)),!1,n))
B.a.n(s,A.a2(r,"keyup",o.a(new A.hu(m)),!1,n))},
I(){var s,r,q,p,o
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.ao)(s),++q)s[q].a2(0)
B.a.a3(s)
for(s=this.b,r=s.gdd(s),p=A.x(r),p=p.h("@<1>").v(p.z[1]),r=new A.bC(J.bk(r.a),r.b,p.h("bC<1,2>")),p=p.z[1];r.B();){o=r.a;(o==null?p.a(o):o).aT(0)}s.a3(0)}}
A.ht.prototype={
$1(a){var s,r
t.g.a(a)
s=this.a.b.i(0,B.j)
s.toString
r=a.keyCode
r.toString
s.n(0,new A.aQ(r))},
$S:12}
A.hu.prototype={
$1(a){var s,r
t.g.a(a)
s=this.a.b.i(0,B.k)
s.toString
r=a.keyCode
r.toString
s.n(0,new A.aQ(r))},
$S:12}
A.aY.prototype={
aG(){return"_MouseAction."+this.b}}
A.e2.prototype={
aB(){var s,r,q,p,o,n
for(s=t.er,r=this.b,q=0;q<5;++q){p=B.X[q]
r.l(0,p,new A.aX(null,null,s))}s=this.a
r=document
r.toString
o=t.h2.a(this.gcc())
n=t.V
B.a.n(s,A.a2(r,"mousedown",o,!1,n))
B.a.n(s,A.a2(r,"mouseup",o,!1,n))
B.a.n(s,A.a2(r,"mousemove",o,!1,n))
B.a.n(s,A.a2(r,"mouseout",o,!1,n))
B.a.n(s,A.a2(r,A.H(A.kl(r)),t.h8.a(o),!1,t.E))},
cd(a){var s,r,q=this
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
switch(r){case"mouseout":q.b.i(0,B.D).n(0,new A.ac(s))
break
case"mousemove":q.b.i(0,B.l).n(0,new A.ac(s))
break
case"mousedown":r=q.b.i(0,B.E)
r.toString
a.button.toString
r.n(0,new A.cr(s))
break
case"mouseup":r=q.b.i(0,B.F)
r.toString
a.button.toString
r.n(0,new A.cr(s))
break
case"wheel":t.E.a(a)
B.C.gcU(a)
B.C.gcV(a)
q.b.i(0,B.G).n(0,new A.eM(s))
break}}}
A.h2.prototype={
az(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.d,d=e.gbL(e).W(0),c=e.gbS(e).W(0),b=e.gbX()
e=e.gO()
s=-e.a
r=-e.b
e=-e.c
q=[c.a,c.b,c.c,b.a,b.b,b.c,d.a,d.b,d.c]
p=q.length
if(0>=p)return A.d(q,0)
o=q[0]
if(3>=p)return A.d(q,3)
n=q[3]
if(6>=p)return A.d(q,6)
m=q[6]
l=q[1]
k=q[4]
if(7>=p)return A.d(q,7)
j=q[7]
i=q[2]
h=q[5]
if(8>=p)return A.d(q,8)
q=A.q([o,n,m,l,k,j,i,h,q[8]],t.n)
h=q.length
if(0>=h)return A.d(q,0)
i=q[0]
if(typeof i!=="number")return i.j()
if(3>=h)return A.d(q,3)
j=q[3]
if(typeof j!=="number")return j.j()
if(6>=h)return A.d(q,6)
k=q[6]
if(typeof k!=="number")return k.j()
l=q[1]
if(typeof l!=="number")return l.j()
m=q[4]
if(typeof m!=="number")return m.j()
if(7>=h)return A.d(q,7)
n=q[7]
if(typeof n!=="number")return n.j()
o=q[2]
if(typeof o!=="number")return o.j()
p=q[5]
if(typeof p!=="number")return p.j()
if(8>=h)return A.d(q,8)
h=q[8]
if(typeof h!=="number")return h.j()
g=f.c
g.sS(new A.aB(q))
g.sO(new A.ah(i*s+j*r+k*e,l*s+m*r+n*e,o*s+p*r+h*e))
f.a=f.b.j(0,g)}}
A.bm.prototype={}
A.h_.prototype={}
A.hm.prototype={}
A.eI.prototype={}
A.h1.prototype={
b7(a){var s=this.a,r=s.byteLength
this.a=new Uint16Array(A.dh(B.a.q(B.u.ar(s),B.u.ar(a))))
return new A.hm(a.length,r,5123)},
b6(a){var s=this.b,r=s.byteLength
this.b=new Float32Array(A.dh(B.a.q(B.t.ar(s),B.t.ar(a))))
return new A.eI(r)}}
A.h8.prototype={}
A.dM.prototype={
c8(a,b,c){var s,r,q=this,p=36161
q.c=a
s=a.a.createFramebuffer()
s.toString
q.d=s
if(c){r=q.c.a
s=r.createRenderbuffer()
s.toString
q.e=s
B.c.E(r,36160,q.d)
B.c.bC(r,p,q.e)
s=b.b
r.renderbufferStorage(p,33189,A.t(s.a),A.t(s.b))
B.c.cZ(r,36160,36096,p,q.e)
B.c.bC(r,p,null)
B.c.E(r,36160,null)}s=b.b
q.a=A.t(s.a)
q.b=A.t(s.b)},
I(){var s,r,q=this
q.f.I()
q.f=null
s=q.e
if(s!=null){r=q.c.a
r.toString
B.c.cS(r,s)
q.e=null}s=q.c.a
s.toString
B.c.cQ(s,q.d)
q.c=null}}
A.fZ.prototype={}
A.hc.prototype={}
A.hb.prototype={}
A.cD.prototype={
a8(){var s,r,q,p,o,n,m,l=this
for(s=l.c.a,r=s.length,q=l.b.b,p=0;p<s.length;s.length===r||(0,A.ao)(s),++p){o=s[p]
n=l.e.a
n.toString
m=o.b
n.vertexAttribPointer(m,o.c,5126,!1,o.d,q+o.e)
l.e.a.enableVertexAttribArray(m)}},
a7(){var s,r,q,p,o
for(s=this.c.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.ao)(s),++q){p=s[q]
o=this.e.a
o.toString
o.disableVertexAttribArray(p.b)}},
aA(){var s=this.a
this.e.a.drawElements(this.d,s.a,s.c,s.b)}}
A.bV.prototype={
gbj(){var s=this.a.a
s.toString
return s},
I(){var s=this,r=s.a.a
r.toString
B.c.cR(r,s.b)
r=s.a.a
r.toString
B.c.bJ(r,s.c)
r=s.a.a
r.toString
B.c.bJ(r,s.d)
s.a=null},
ac(a,b,c){var s,r,q,p,o,n,m=this
m.c=m.b8(35633,a)
m.d=m.b8(35632,b)
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
for(r=c.a,q=r.length,p=0;p<r.length;r.length===q||(0,A.ao)(r),++p){o=r[p]
n=m.a.a
n.toString
n.bindAttribLocation(s,o.b,o.a)}m.a.a.linkProgram(s)
if(m.a.a.getProgramParameter(s,35714)==null){s=m.gbj().getProgramInfoLog(s)
s.toString
throw A.b(A.dI("Invalide program\n          "+s+"\n        "))}return s},
b8(a,b){var s,r=this,q=r.a.a.createShader(a)
q.toString
r.a.a.shaderSource(q,b)
r.a.a.compileShader(q)
s=r.a.a.getShaderParameter(q,35713)
s.toString
if(!A.jS(s)){q=r.gbj().getShaderInfoLog(q)
q.toString
throw A.b(A.dI("Invalide shader\n          type:"+a+" "+q+"\n        "))}return q}}
A.c_.prototype={
I(){var s,r=this,q=r.e
if(q!=null){r.H(q)
q=$.lL()
r.d.a.pixelStorei(37440,1)
s=r.d.a
s.toString
B.c.d9(s,3553,0,r.a,r.b,r.c,q)
r.d.a.pixelStorei(37440,0)
r.Z()}q=r.d.a
q.toString
B.c.cT(q,r.f)
r.d=r.f=null},
H(a){var s
this.e=a
s=this.d.a
s.activeTexture(33984+a)
B.c.bD(s,3553,this.f)},
Z(){var s,r=this.d.a
r.toString
s=this.e
s.toString
r.activeTexture(33984+s)
B.c.bD(r,3553,null)
this.e=null},
aa(a,b,c){var s=this,r=s.d.a
r.toString
B.c.bV(r,3553,0,s.a,b,c,0,s.b,s.c,a)},
aD(a,b){var s=this,r=3553
s.d.a.texParameteri(r,10240,a)
s.d.a.texParameteri(r,10241,a)
s.d.a.texParameteri(r,10242,b)
s.d.a.texParameteri(r,10243,b)},
a9(a){return this.aD(a,33071)},
aC(){return this.aD(9729,33071)}}
A.ia.prototype={
J(a,b){var s,r
this.b=a
s=a.a
s.toString
r=b.b
r.toString
r=s.getUniformLocation(r,this.a)
r.toString
this.c=r}}
A.ic.prototype={}
A.id.prototype={}
A.hC.prototype={}
A.hD.prototype={}
A.hR.prototype={}
A.cM.prototype={}
A.hP.prototype={}
A.ih.prototype={
sam(a){var s=this
s.a.enable(3042)
s.a.blendFunc(1,0)
s.a.blendEquation(32774)
s.a.blendColor(0,0,0,0)},
sao(a){if(a==null){this.a.disable(2929)
return}this.a.enable(2929)
this.a.depthFunc(515)},
c3(a,b){var s,r,q,p=this,o=t.z
o=t.cl.a(B.e.av(a,"webgl2",A.dY(["alpha",!1,"antialias",!0,"depth",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],o,o)))
p.a=o
A.n1(b,o)
for(o=b.e,s=o.length,r=0;r<o.length;o.length===s||(0,A.ao)(o),++r){q=o[r]
p.a.getExtension(q)}p.a.frontFace(2305)
p.a.pixelStorei(37441,0)},
ab(a){var s,r=this.a
r.toString
s=a.b
r.viewport(0,0,A.t(s.a),A.t(s.b))}}
A.hU.prototype={}
A.hV.prototype={
c7(a){var s,r,q,p,o=new Float32Array(32)
for(s=0;s<32;s+=2){r=6.283185307179586*s/16
q=Math.cos(r)
if(!(s<32))return A.d(o,s)
o[s]=q
q=s+1
p=Math.sin(r)
if(!(q<32))return A.d(o,q)
o[q]=p}q=new A.c_(33328,33319,5126)
q.d=a
p=a.a.createTexture()
p.toString
q.f=p
q.H(0)
q.aa(o,4,4)
q.aD(9728,10497)
q.Z()
return q}}
A.i3.prototype={}
A.ig.prototype={}
A.eL.prototype={
cb(a,b){var s,r
t.j.a(a)
t.dt.a(b)
s=J.m8(a)
r=A.jS(J.m9(s))
this.e=r
if(r)this.c.n(0,s)
else this.d.n(0,s)}}
A.at.prototype={
aG(){return"PrimitiveId."+this.b}}
A.bT.prototype={}
A.je.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i="webglcontextlost"
t.ew.a(a)
s=$.dp()
if(!A.n2())A.bj(A.dI("WebGL is not available"))
r=s.a
q=r.style
q.position="absolute"
q.width="100%"
q.height="100%"
q.top="0"
q.left="0"
q=A.mw(s.gca())
s.f=q
q.observe(r)
s.f.takeRecords().toString
q=$.jo()
q.children.toString
q.appendChild(r).toString
q=$.jn()
p=window
p.toString
q.x=B.i.bR(p,q.gb9())
p=t.i
q.scG(A.hX(p))
q.scH(A.hX(p))
p=$.lZ()
p.aB()
o=$.k9()
o.aB()
n=window
n.toString
B.a.n($.S,A.a2(n,"beforeunload",t.gq.a(new A.j9()),!1,t.c9))
n=window
n.toString
B.a.n($.S,A.a2(n,"resize",t.fi.a(new A.ja()),!1,t.A))
n=q.r
n.toString
B.a.n($.S,new A.R(n,A.x(n).h("R<1>")).V(A.oA()))
q=q.w
q.toString
B.a.n($.S,new A.R(q,A.x(q).h("R<1>")).V(A.oB()))
p=p.b.i(0,B.l)
p.toString
B.a.n($.S,new A.R(p,A.x(p).h("R<1>")).V(A.oz()))
o=o.b
p=o.i(0,B.j)
p.toString
B.a.n($.S,new A.R(p,A.x(p).h("R<1>")).V(A.ox()))
o=o.i(0,B.k)
o.toString
B.a.n($.S,new A.R(o,A.x(o).h("R<1>")).V(A.oy()))
o=window
o.toString
B.a.n($.S,A.a2(o,"deviceorientation",t.aA.a(A.ow()),!1,t.W))
o=t.eJ
p=o.h("~(1)?")
o=o.c
B.a.n($.S,A.a2(r,i,p.a(new A.jb()),!1,o))
B.a.n($.S,A.a2(r,i,p.a(new A.jc()),!1,o))
s=s.c
B.a.n($.S,new A.R(s,A.x(s).h("R<1>")).V(new A.jd()))
s=$.lW()
o=t.Z
s.l(0,"Report",A.lx(A.oC(),o))
s.l(0,"Kill",A.lx(A.ov(),o))
o=$.fQ()
s=$.k8()
m=1/Math.tan(s.a*0.5)
p=s.d
r=s.c
l=p/(p-r)
p=o.b
q=p.a
B.a.l(q,0,m/s.b)
B.a.l(q,1,0)
B.a.l(q,2,0)
B.a.l(q,3,0)
B.a.l(q,4,0)
B.a.l(q,5,m)
B.a.l(q,6,0)
B.a.l(q,7,0)
B.a.l(q,8,0)
B.a.l(q,9,0)
B.a.l(q,10,-l)
B.a.l(q,11,-1)
B.a.l(q,12,0)
B.a.l(q,13,0)
B.a.l(q,14,-r*l)
B.a.l(q,15,0)
o.a=p.j(0,o.c)
p=$.kb()
q=o.d
q.sO(p)
o.az()
r=$.m_()
k=A.jL(A.kT($.m0(),r))
j=A.kT(r,k)
s=q.a
B.a.l(s,8,r.a)
B.a.l(s,9,r.b)
B.a.l(s,10,r.c)
B.a.l(s,0,k.a)
B.a.l(s,1,k.b)
B.a.l(s,2,k.c)
B.a.l(s,4,j.a)
B.a.l(s,5,j.b)
B.a.l(s,6,j.c)
o.az()
o=$.dn()
o.a=q
o.d=1
o.b=p
o.c=A.hN(q.gS())
o=$.fR()
o.a=q
o.f=B.f.bE(1,0,1)
o=J.ax(a)
A.ms(t.f.a(B.N.cO(0,A.H(o.i(a,0)))),J.m5(A.nG(t.r.a(o.i(a,1)).response)))
A.kp()
$.jY=0},
$S:35}
A.j9.prototype={
$1(a){return A.kv()},
$S:5}
A.ja.prototype={
$1(a){return A.kG()},
$S:5}
A.jb.prototype={
$1(a){t.R.a(a)
return A.km()},
$S:13}
A.jc.prototype={
$1(a){t.R.a(a)
return A.kp()},
$S:13}
A.jd.prototype={
$1(a){return A.kG()},
$S:3};(function aliases(){var s=J.bR.prototype
s.bY=s.m
s=J.bz.prototype
s.c0=s.m
s=A.v.prototype
s.c1=s.m
s=A.aP.prototype
s.bZ=s.i
s.c_=s.l
s=A.c3.prototype
s.c2=s.l
s=A.dM.prototype
s.aw=s.c8})();(function installTearOffs(){var s=hunkHelpers._static_1,r=hunkHelpers._static_0,q=hunkHelpers._static_2,p=hunkHelpers.installInstanceTearOff,o=hunkHelpers._instance_2u,n=hunkHelpers._instance_0u,m=hunkHelpers._instance_1u
s(A,"of","n4",7)
s(A,"og","n5",7)
s(A,"oh","n6",7)
r(A,"lA","o8",0)
s(A,"oi","o_",3)
q(A,"ok","o1",4)
r(A,"oj","o0",0)
p(A.cO.prototype,"gcM",0,1,null,["$2","$1"],["bG","an"],32,0,0)
o(A.F.prototype,"gbi","L",4)
n(A.c1.prototype,"gcq","cr",0)
s(A,"q5","kl",38)
s(A,"oK","lj",39)
m(A.dO.prototype,"gb9","c9",27)
m(A.e2.prototype,"gcc","cd",33)
r(A,"q8","kK",1)
r(A,"q7","kJ",1)
r(A,"qa","kM",1)
r(A,"q9","kL",1)
r(A,"qc","kQ",1)
r(A,"qb","kP",1)
r(A,"qe","kX",1)
r(A,"qd","kW",1)
o(A.eL.prototype,"gca","cb",34)
r(A,"ov","kv",0)
r(A,"oC","mW",41)
s(A,"oz","mH",42)
s(A,"ox","mF",8)
s(A,"oy","mG",8)
s(A,"ow","mE",44)
s(A,"oA","mI",11)
s(A,"oB","mJ",11)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.mixinHard,q=hunkHelpers.inherit,p=hunkHelpers.inheritMany
q(A.v,null)
p(A.v,[A.jC,J.bR,J.bl,A.E,A.b6,A.hS,A.f,A.bA,A.bC,A.T,A.bY,A.bS,A.ce,A.d_,A.dT,A.i8,A.hJ,A.d8,A.iK,A.y,A.hv,A.cu,A.ir,A.ai,A.f1,A.iP,A.iN,A.cd,A.ba,A.c0,A.cN,A.cO,A.bJ,A.F,A.eO,A.bd,A.eT,A.d5,A.c1,A.dg,A.cX,A.e,A.df,A.dD,A.dF,A.ci,A.is,A.ee,A.cH,A.iv,A.hd,A.G,A.fr,A.cI,A.h4,A.jA,A.cU,A.jN,A.o,A.cm,A.ii,A.aP,A.hI,A.b8,A.i7,A.dO,A.dP,A.aB,A.bD,A.aT,A.ah,A.ei,A.av,A.P,A.hh,A.aQ,A.ac,A.hs,A.e2,A.h2,A.bm,A.h_,A.hm,A.eI,A.h1,A.h8,A.dM,A.cD,A.bV,A.c_,A.ia,A.cM,A.hP,A.ih,A.hU,A.hV,A.i3,A.ig,A.eL,A.bT])
p(J.bR,[J.dS,J.cp,J.a,J.bw,J.bx,J.bv,J.b7])
p(J.a,[J.bz,J.z,A.e3,A.cy,A.c,A.fV,A.j,A.bo,A.aL,A.A,A.eR,A.ap,A.h7,A.h9,A.eU,A.ck,A.eW,A.ha,A.f_,A.bP,A.a4,A.hj,A.f3,A.cn,A.bu,A.hn,A.hy,A.hE,A.f9,A.fa,A.a5,A.fb,A.fd,A.a6,A.fh,A.fk,A.a7,A.fl,A.a8,A.fo,A.U,A.ft,A.i4,A.a9,A.fv,A.i5,A.ib,A.fA,A.fC,A.fE,A.fG,A.fI,A.cs,A.ae,A.f7,A.ag,A.ff,A.hK,A.fp,A.al,A.fx,A.fX,A.eP,A.dz,A.dN,A.eh,A.el,A.cG,A.bX,A.eq,A.eA,A.eE])
p(J.bz,[J.ef,J.bH,J.aA])
q(J.ho,J.z)
p(J.bv,[J.co,J.dU])
p(A.E,[A.ct,A.aV,A.dV,A.eG,A.eS,A.en,A.cc,A.eZ,A.aI,A.eb,A.eH,A.eF,A.bG,A.dE])
p(A.b6,[A.dB,A.dC,A.ex,A.hp,A.j5,A.j7,A.im,A.il,A.hf,A.iA,A.iH,A.i0,A.hZ,A.i1,A.iM,A.hk,A.hl,A.it,A.iu,A.iV,A.hq,A.iX,A.iY,A.j_,A.j0,A.j1,A.ji,A.jj,A.hB,A.ht,A.hu,A.je,A.j9,A.ja,A.jb,A.jc,A.jd])
p(A.dB,[A.jg,A.io,A.ip,A.iO,A.iw,A.iD,A.iC,A.iz,A.iy,A.ix,A.iG,A.iF,A.iE,A.i_,A.hY,A.i2,A.iq,A.iJ,A.iT,A.iZ,A.iL])
p(A.f,[A.k,A.bB,A.cZ])
p(A.k,[A.af,A.as,A.cW])
q(A.cl,A.bB)
p(A.af,[A.aS,A.f6])
q(A.c6,A.bS)
q(A.cL,A.c6)
q(A.cf,A.cL)
q(A.cg,A.ce)
p(A.dC,[A.hL,A.j6,A.hg,A.iB,A.iS,A.hA,A.hH,A.hF,A.hG,A.hQ,A.hW,A.ik,A.j3,A.fY,A.he,A.hO,A.hi])
q(A.cC,A.aV)
p(A.ex,[A.et,A.bN])
q(A.eN,A.cc)
p(A.y,[A.aO,A.cV,A.f5])
p(A.cy,[A.e4,A.bU])
p(A.bU,[A.d1,A.d3])
q(A.d2,A.d1)
q(A.cw,A.d2)
q(A.d4,A.d3)
q(A.cx,A.d4)
p(A.cw,[A.cv,A.e5])
p(A.cx,[A.e6,A.e7,A.e8,A.cz,A.e9,A.cA,A.ea])
q(A.db,A.eZ)
p(A.ba,[A.c5,A.cT])
q(A.cP,A.c5)
q(A.R,A.cP)
q(A.cQ,A.c0)
q(A.aw,A.cQ)
q(A.aX,A.cN)
q(A.bI,A.cO)
q(A.cR,A.bd)
q(A.fj,A.dg)
q(A.cY,A.cV)
q(A.dW,A.dD)
q(A.hr,A.dF)
p(A.aI,[A.cF,A.dR])
p(A.c,[A.r,A.dK,A.bQ,A.bt,A.a0,A.d6,A.a1,A.Q,A.d9,A.eK,A.bc,A.aE,A.dy,A.b5])
p(A.r,[A.h,A.az,A.aN])
q(A.n,A.h)
p(A.n,[A.du,A.dv,A.bp,A.bO,A.dL,A.dQ,A.bE,A.ep])
p(A.j,[A.bn,A.aM,A.aD,A.au,A.aK])
q(A.h3,A.aL)
q(A.ch,A.eR)
p(A.ap,[A.h5,A.h6])
q(A.eV,A.eU)
q(A.cj,A.eV)
q(A.eX,A.eW)
q(A.dH,A.eX)
q(A.Y,A.bo)
q(A.f0,A.f_)
q(A.dJ,A.f0)
q(A.f4,A.f3)
q(A.bs,A.f4)
q(A.ar,A.bt)
p(A.aD,[A.aR,A.Z])
q(A.e_,A.f9)
q(A.e0,A.fa)
q(A.fc,A.fb)
q(A.e1,A.fc)
q(A.fe,A.fd)
q(A.cB,A.fe)
q(A.fi,A.fh)
q(A.eg,A.fi)
q(A.em,A.fk)
q(A.d7,A.d6)
q(A.er,A.d7)
q(A.fm,A.fl)
q(A.es,A.fm)
q(A.eu,A.fo)
q(A.fu,A.ft)
q(A.ey,A.fu)
q(A.da,A.d9)
q(A.ez,A.da)
q(A.fw,A.fv)
q(A.eB,A.fw)
q(A.eJ,A.bE)
q(A.bb,A.Z)
q(A.fB,A.fA)
q(A.eQ,A.fB)
q(A.cS,A.ck)
q(A.fD,A.fC)
q(A.f2,A.fD)
q(A.fF,A.fE)
q(A.d0,A.fF)
q(A.fH,A.fG)
q(A.fn,A.fH)
q(A.fJ,A.fI)
q(A.fs,A.fJ)
q(A.eY,A.cT)
q(A.ij,A.ii)
p(A.aP,[A.cq,A.c3])
q(A.by,A.c3)
q(A.f8,A.f7)
q(A.dX,A.f8)
q(A.fg,A.ff)
q(A.ec,A.fg)
q(A.fq,A.fp)
q(A.ew,A.fq)
q(A.fy,A.fx)
q(A.eC,A.fy)
q(A.dx,A.eP)
q(A.ed,A.b5)
p(A.i7,[A.fU,A.hT])
q(A.cK,A.aB)
q(A.aU,A.bD)
p(A.ac,[A.cr,A.eM])
p(A.is,[A.c4,A.aY,A.at])
p(A.dM,[A.fZ,A.hc,A.hb])
p(A.ia,[A.ic,A.id,A.hC,A.hD,A.hR])
s(A.d1,A.e)
s(A.d2,A.T)
s(A.d3,A.e)
s(A.d4,A.T)
s(A.c6,A.df)
s(A.eR,A.h4)
s(A.eU,A.e)
s(A.eV,A.o)
s(A.eW,A.e)
s(A.eX,A.o)
s(A.f_,A.e)
s(A.f0,A.o)
s(A.f3,A.e)
s(A.f4,A.o)
s(A.f9,A.y)
s(A.fa,A.y)
s(A.fb,A.e)
s(A.fc,A.o)
s(A.fd,A.e)
s(A.fe,A.o)
s(A.fh,A.e)
s(A.fi,A.o)
s(A.fk,A.y)
s(A.d6,A.e)
s(A.d7,A.o)
s(A.fl,A.e)
s(A.fm,A.o)
s(A.fo,A.y)
s(A.ft,A.e)
s(A.fu,A.o)
s(A.d9,A.e)
s(A.da,A.o)
s(A.fv,A.e)
s(A.fw,A.o)
s(A.fA,A.e)
s(A.fB,A.o)
s(A.fC,A.e)
s(A.fD,A.o)
s(A.fE,A.e)
s(A.fF,A.o)
s(A.fG,A.e)
s(A.fH,A.o)
s(A.fI,A.e)
s(A.fJ,A.o)
r(A.c3,A.e)
s(A.f7,A.e)
s(A.f8,A.o)
s(A.ff,A.e)
s(A.fg,A.o)
s(A.fp,A.e)
s(A.fq,A.o)
s(A.fx,A.e)
s(A.fy,A.o)
s(A.eP,A.y)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{i:"int",w:"double",J:"num",p:"String",j2:"bool",G:"Null",l:"List"},mangledNames:{},types:["~()","p()","~(p,@)","~(@)","~(v,aj)","~(j)","@(@)","~(~())","~(aQ)","G(@)","G()","~(w)","~(aR)","~(aK)","~(bZ,@)","aq<G>()","p(ar)","~(au)","~(p,p)","@(p)","@(@,@)","@(@,p)","~(@,@)","@(v?)","cq(@)","by<@>(@)","aP(@)","~(J)","w(J,w)","G(~())","w(i,i)","G(@,@)","~(v[aj?])","~(Z)","~(l<@>,bu)","G(l<v>)","G(v,aj)","F<@>(@)","p(c)","v?(@)","G(~)","@()","~(ac)","~(v?,v?)","~(aM)","w(i,i,w)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti")}
A.ns(v.typeUniverse,JSON.parse('{"ef":"bz","bH":"bz","aA":"bz","oU":"j","p6":"j","oW":"b5","oV":"c","pc":"c","pf":"c","pb":"h","pw":"au","oY":"n","pg":"r","p5":"r","p8":"aN","pt":"Q","p0":"aD","p4":"aE","p_":"az","ph":"az","pd":"Z","pa":"bt","p9":"bs","p1":"A","p2":"U","oX":"bE","dS":{"j2":[],"B":[]},"cp":{"G":[],"B":[]},"z":{"l":["1"],"k":["1"],"f":["1"]},"ho":{"z":["1"],"l":["1"],"k":["1"],"f":["1"]},"bl":{"ad":["1"]},"bv":{"w":[],"J":[]},"co":{"w":[],"i":[],"J":[],"B":[]},"dU":{"w":[],"J":[],"B":[]},"b7":{"p":[],"B":[]},"ct":{"E":[]},"k":{"f":["1"]},"af":{"k":["1"],"f":["1"]},"bA":{"ad":["1"]},"bB":{"f":["2"],"f.E":"2"},"cl":{"bB":["1","2"],"k":["2"],"f":["2"],"f.E":"2"},"bC":{"ad":["2"]},"aS":{"af":["2"],"k":["2"],"f":["2"],"af.E":"2","f.E":"2"},"bY":{"bZ":[]},"cf":{"cL":["1","2"],"c6":["1","2"],"bS":["1","2"],"df":["1","2"],"K":["1","2"]},"ce":{"K":["1","2"]},"cg":{"ce":["1","2"],"K":["1","2"]},"cZ":{"f":["1"],"f.E":"1"},"d_":{"ad":["1"]},"dT":{"kq":[]},"cC":{"aV":[],"E":[]},"dV":{"E":[]},"eG":{"E":[]},"d8":{"aj":[]},"b6":{"br":[]},"dB":{"br":[]},"dC":{"br":[]},"ex":{"br":[]},"et":{"br":[]},"bN":{"br":[]},"eS":{"E":[]},"en":{"E":[]},"eN":{"E":[]},"aO":{"y":["1","2"],"kw":["1","2"],"K":["1","2"],"y.K":"1","y.V":"2"},"as":{"k":["1"],"f":["1"],"f.E":"1"},"cu":{"ad":["1"]},"e3":{"B":[]},"cy":{"L":[]},"e4":{"L":[],"B":[]},"bU":{"u":["1"],"L":[]},"cw":{"e":["w"],"l":["w"],"u":["w"],"k":["w"],"L":[],"f":["w"],"T":["w"]},"cx":{"e":["i"],"l":["i"],"u":["i"],"k":["i"],"L":[],"f":["i"],"T":["i"]},"cv":{"e":["w"],"jB":[],"l":["w"],"u":["w"],"k":["w"],"L":[],"f":["w"],"T":["w"],"B":[],"e.E":"w"},"e5":{"e":["w"],"l":["w"],"u":["w"],"k":["w"],"L":[],"f":["w"],"T":["w"],"B":[],"e.E":"w"},"e6":{"e":["i"],"l":["i"],"u":["i"],"k":["i"],"L":[],"f":["i"],"T":["i"],"B":[],"e.E":"i"},"e7":{"e":["i"],"l":["i"],"u":["i"],"k":["i"],"L":[],"f":["i"],"T":["i"],"B":[],"e.E":"i"},"e8":{"e":["i"],"l":["i"],"u":["i"],"k":["i"],"L":[],"f":["i"],"T":["i"],"B":[],"e.E":"i"},"cz":{"e":["i"],"jJ":[],"l":["i"],"u":["i"],"k":["i"],"L":[],"f":["i"],"T":["i"],"B":[],"e.E":"i"},"e9":{"e":["i"],"l":["i"],"u":["i"],"k":["i"],"L":[],"f":["i"],"T":["i"],"B":[],"e.E":"i"},"cA":{"e":["i"],"l":["i"],"u":["i"],"k":["i"],"L":[],"f":["i"],"T":["i"],"B":[],"e.E":"i"},"ea":{"e":["i"],"eD":[],"l":["i"],"u":["i"],"k":["i"],"L":[],"f":["i"],"T":["i"],"B":[],"e.E":"i"},"eZ":{"E":[]},"db":{"aV":[],"E":[]},"F":{"aq":["1"]},"cd":{"E":[]},"R":{"cP":["1"],"c5":["1"],"ba":["1"]},"aw":{"cQ":["1"],"c0":["1"],"ak":["1"],"be":["1"]},"cN":{"ev":["1"],"l9":["1"],"be":["1"]},"aX":{"cN":["1"],"ev":["1"],"l9":["1"],"be":["1"]},"bI":{"cO":["1"]},"cP":{"c5":["1"],"ba":["1"]},"cQ":{"c0":["1"],"ak":["1"],"be":["1"]},"c0":{"ak":["1"],"be":["1"]},"c5":{"ba":["1"]},"cR":{"bd":["1"]},"eT":{"bd":["@"]},"c1":{"ak":["1"]},"dg":{"kY":[]},"fj":{"dg":[],"kY":[]},"cV":{"y":["1","2"],"K":["1","2"]},"cY":{"cV":["1","2"],"y":["1","2"],"K":["1","2"],"y.K":"1","y.V":"2"},"cW":{"k":["1"],"f":["1"],"f.E":"1"},"cX":{"ad":["1"]},"y":{"K":["1","2"]},"bS":{"K":["1","2"]},"cL":{"c6":["1","2"],"bS":["1","2"],"df":["1","2"],"K":["1","2"]},"f5":{"y":["p","@"],"K":["p","@"],"y.K":"p","y.V":"@"},"f6":{"af":["p"],"k":["p"],"f":["p"],"af.E":"p","f.E":"p"},"dW":{"dD":["v?","p"]},"w":{"J":[]},"i":{"J":[]},"l":{"k":["1"],"f":["1"]},"cc":{"E":[]},"aV":{"E":[]},"aI":{"E":[]},"cF":{"E":[]},"dR":{"E":[]},"eb":{"E":[]},"eH":{"E":[]},"eF":{"E":[]},"bG":{"E":[]},"dE":{"E":[]},"ee":{"E":[]},"cH":{"E":[]},"fr":{"aj":[]},"bn":{"j":[]},"aM":{"j":[]},"Y":{"bo":[]},"bQ":{"c":[]},"ar":{"c":[]},"aR":{"j":[]},"Z":{"j":[]},"r":{"c":[]},"au":{"j":[]},"a0":{"c":[]},"a1":{"c":[]},"Q":{"c":[]},"bb":{"Z":[],"j":[]},"n":{"h":[],"r":[],"c":[]},"du":{"h":[],"r":[],"c":[]},"dv":{"h":[],"r":[],"c":[]},"bp":{"h":[],"r":[],"c":[],"dA":[]},"az":{"r":[],"c":[]},"bO":{"h":[],"r":[],"c":[]},"aN":{"r":[],"c":[]},"cj":{"e":["aC<J>"],"o":["aC<J>"],"l":["aC<J>"],"u":["aC<J>"],"k":["aC<J>"],"f":["aC<J>"],"o.E":"aC<J>","e.E":"aC<J>"},"ck":{"aC":["J"]},"dH":{"e":["p"],"o":["p"],"l":["p"],"u":["p"],"k":["p"],"f":["p"],"o.E":"p","e.E":"p"},"h":{"r":[],"c":[]},"dJ":{"e":["Y"],"o":["Y"],"l":["Y"],"u":["Y"],"k":["Y"],"f":["Y"],"o.E":"Y","e.E":"Y"},"dK":{"c":[]},"dL":{"h":[],"r":[],"c":[]},"bs":{"e":["r"],"o":["r"],"l":["r"],"u":["r"],"k":["r"],"f":["r"],"o.E":"r","e.E":"r"},"bt":{"c":[]},"dQ":{"h":[],"r":[],"c":[],"dA":[]},"bE":{"h":[],"r":[],"c":[]},"e_":{"y":["p","@"],"K":["p","@"],"y.K":"p","y.V":"@"},"e0":{"y":["p","@"],"K":["p","@"],"y.K":"p","y.V":"@"},"e1":{"e":["a5"],"o":["a5"],"l":["a5"],"u":["a5"],"k":["a5"],"f":["a5"],"o.E":"a5","e.E":"a5"},"cB":{"e":["r"],"o":["r"],"l":["r"],"u":["r"],"k":["r"],"f":["r"],"o.E":"r","e.E":"r"},"eg":{"e":["a6"],"o":["a6"],"l":["a6"],"u":["a6"],"k":["a6"],"f":["a6"],"o.E":"a6","e.E":"a6"},"em":{"y":["p","@"],"K":["p","@"],"y.K":"p","y.V":"@"},"ep":{"h":[],"r":[],"c":[]},"er":{"e":["a0"],"o":["a0"],"l":["a0"],"c":[],"u":["a0"],"k":["a0"],"f":["a0"],"o.E":"a0","e.E":"a0"},"es":{"e":["a7"],"o":["a7"],"l":["a7"],"u":["a7"],"k":["a7"],"f":["a7"],"o.E":"a7","e.E":"a7"},"eu":{"y":["p","p"],"K":["p","p"],"y.K":"p","y.V":"p"},"ey":{"e":["Q"],"o":["Q"],"l":["Q"],"u":["Q"],"k":["Q"],"f":["Q"],"o.E":"Q","e.E":"Q"},"ez":{"e":["a1"],"o":["a1"],"l":["a1"],"c":[],"u":["a1"],"k":["a1"],"f":["a1"],"o.E":"a1","e.E":"a1"},"eB":{"e":["a9"],"o":["a9"],"l":["a9"],"u":["a9"],"k":["a9"],"f":["a9"],"o.E":"a9","e.E":"a9"},"aD":{"j":[]},"eJ":{"h":[],"r":[],"c":[],"dA":[]},"eK":{"c":[]},"bc":{"c":[]},"aE":{"c":[]},"eQ":{"e":["A"],"o":["A"],"l":["A"],"u":["A"],"k":["A"],"f":["A"],"o.E":"A","e.E":"A"},"cS":{"aC":["J"]},"f2":{"e":["a4?"],"o":["a4?"],"l":["a4?"],"u":["a4?"],"k":["a4?"],"f":["a4?"],"o.E":"a4?","e.E":"a4?"},"d0":{"e":["r"],"o":["r"],"l":["r"],"u":["r"],"k":["r"],"f":["r"],"o.E":"r","e.E":"r"},"fn":{"e":["a8"],"o":["a8"],"l":["a8"],"u":["a8"],"k":["a8"],"f":["a8"],"o.E":"a8","e.E":"a8"},"fs":{"e":["U"],"o":["U"],"l":["U"],"u":["U"],"k":["U"],"f":["U"],"o.E":"U","e.E":"U"},"cT":{"ba":["1"]},"eY":{"cT":["1"],"ba":["1"]},"cU":{"ak":["1"]},"cm":{"ad":["1"]},"by":{"e":["1"],"l":["1"],"k":["1"],"f":["1"],"e.E":"1"},"dX":{"e":["ae"],"o":["ae"],"l":["ae"],"k":["ae"],"f":["ae"],"o.E":"ae","e.E":"ae"},"ec":{"e":["ag"],"o":["ag"],"l":["ag"],"k":["ag"],"f":["ag"],"o.E":"ag","e.E":"ag"},"ew":{"e":["p"],"o":["p"],"l":["p"],"k":["p"],"f":["p"],"o.E":"p","e.E":"p"},"eC":{"e":["al"],"o":["al"],"l":["al"],"k":["al"],"f":["al"],"o.E":"al","e.E":"al"},"dx":{"y":["p","@"],"K":["p","@"],"y.K":"p","y.V":"@"},"dy":{"c":[]},"b5":{"c":[]},"ed":{"c":[]},"aK":{"j":[]},"cK":{"aB":[]},"aU":{"bD":[]},"cr":{"ac":[]},"eM":{"ac":[]},"mf":{"L":[]},"mv":{"l":["i"],"k":["i"],"f":["i"],"L":[]},"eD":{"l":["i"],"k":["i"],"f":["i"],"L":[]},"n0":{"l":["i"],"k":["i"],"f":["i"],"L":[]},"mt":{"l":["i"],"k":["i"],"f":["i"],"L":[]},"jJ":{"l":["i"],"k":["i"],"f":["i"],"L":[]},"mu":{"l":["i"],"k":["i"],"f":["i"],"L":[]},"n_":{"l":["i"],"k":["i"],"f":["i"],"L":[]},"jB":{"l":["w"],"k":["w"],"f":["w"],"L":[]},"mp":{"l":["w"],"k":["w"],"f":["w"],"L":[]}}'))
A.nr(v.typeUniverse,JSON.parse('{"k":1,"bU":1,"bd":1,"dF":2,"c3":1}'))
var u={b:"    #version 300 es\n    precision highp float;\n\n    in vec2 aPositionMapping;\n    out vec2 vMapping;\n\n    uniform mat3 uPvwlTransform;\n\n    void main()\n    {\n      vMapping = aPositionMapping;\n\n      vec3 position = uPvwlTransform * vec3(aPositionMapping, 1.0);\n      gl_Position = vec4(position.xy, 0.0, 1.0);\n    }\n  ",c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type"}
var t=(function rtii(){var s=A.W
return{a7:s("@<~>"),t:s("cd"),cQ:s("bm"),c9:s("bn"),fK:s("bo"),gA:s("bp"),gF:s("cf<bZ,@>"),R:s("aK"),g5:s("A"),cE:s("ac"),W:s("aM"),e5:s("aN"),gw:s("k<@>"),a:s("E"),A:s("j"),aS:s("c"),c8:s("Y"),Z:s("br"),b9:s("aq<@>"),r:s("ar"),gb:s("cn"),dt:s("bu"),B:s("kq"),d:s("f<@>"),U:s("z<bm>"),aJ:s("z<aq<v>>"),f3:s("z<at>"),s:s("z<p>"),n:s("z<w>"),b:s("z<@>"),dC:s("z<i>"),cA:s("z<J>"),T:s("cp"),e:s("aA"),aU:s("u<@>"),am:s("by<@>"),eo:s("aO<bZ,@>"),h:s("aQ"),dz:s("cs"),g:s("aR"),bG:s("ae"),ew:s("l<v>"),j:s("l<@>"),k:s("l<J>"),aH:s("K<p,eD>"),g6:s("K<p,i>"),f:s("K<@,@>"),gU:s("aB"),w:s("bD"),cI:s("a5"),V:s("Z"),G:s("r"),P:s("G"),ck:s("ag"),K:s("v"),he:s("a6"),m:s("aT"),eU:s("ah"),x:s("b8<J>"),D:s("au"),L:s("av"),gT:s("pe"),q:s("aC<J>"),cl:s("bX"),fY:s("a0"),f7:s("a7"),gf:s("a8"),l:s("aj"),N:s("p"),gn:s("U"),fo:s("bZ"),a0:s("a1"),c7:s("Q"),aK:s("a9"),cM:s("al"),dm:s("B"),eK:s("aV"),Q:s("L"),gc:s("eD"),ak:s("bH"),cW:s("P"),E:s("bb"),g4:s("bc"),g2:s("aE"),er:s("aX<ac>"),bl:s("aX<aQ>"),bj:s("bI<ar>"),eJ:s("eY<aK>"),ao:s("F<ar>"),J:s("F<G>"),c:s("F<@>"),fJ:s("F<i>"),cd:s("F<~>"),dx:s("cY<@,@>"),y:s("j2"),al:s("j2(v)"),i:s("w"),z:s("@"),O:s("@()"),v:s("@(v)"),C:s("@(v,aj)"),b8:s("@(@,@)"),S:s("i"),aw:s("0&*"),_:s("v*"),eH:s("aq<G>?"),g7:s("a4?"),bM:s("l<@>?"),X:s("v?"),eV:s("cG?"),gO:s("aj?"),I:s("ev<w>?"),ev:s("bd<@>?"),F:s("bJ<@,@>?"),o:s("@(j)?"),Y:s("~()?"),gq:s("~(bn)?"),aA:s("~(aM)?"),fi:s("~(j)?"),eN:s("~(aR)?"),h2:s("~(Z)?"),gx:s("~(au)?"),h8:s("~(bb)?"),H:s("J"),p:s("~"),M:s("~()"),cZ:s("~(bP,bP,bQ)"),d5:s("~(v)"),da:s("~(v,aj)"),eA:s("~(p,p)"),u:s("~(p,@)"),c4:s("~(J)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.e=A.bp.prototype
B.R=A.ar.prototype
B.S=J.bR.prototype
B.a=J.z.prototype
B.f=J.co.prototype
B.b=J.bv.prototype
B.p=J.b7.prototype
B.T=J.aA.prototype
B.U=J.a.prototype
B.t=A.cv.prototype
B.u=A.cz.prototype
B.v=J.ef.prototype
B.c=A.bX.prototype
B.h=J.bH.prototype
B.C=A.bb.prototype
B.i=A.bc.prototype
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

B.N=new A.dW()
B.O=new A.ee()
B.ad=new A.hS()
B.P=new A.eT()
B.o=new A.iK()
B.d=new A.fj()
B.Q=new A.fr()
B.V=new A.hr(null)
B.j=new A.c4(0,"down")
B.k=new A.c4(1,"up")
B.W=A.q(s([B.j,B.k]),A.W("z<c4>"))
B.q=A.q(s([]),t.b)
B.D=new A.aY(0,"out")
B.E=new A.aY(1,"down")
B.F=new A.aY(2,"up")
B.l=new A.aY(3,"move")
B.G=new A.aY(4,"wheel")
B.X=A.q(s([B.D,B.E,B.F,B.l,B.G]),A.W("z<aY>"))
B.Y={}
B.r=new A.cg(B.Y,[],A.W("cg<bZ,@>"))
B.w=new A.at(0,"octopus")
B.x=new A.at(1,"octopusAlt")
B.y=new A.at(2,"crab")
B.z=new A.at(3,"crabAlt")
B.A=new A.at(4,"medusa")
B.B=new A.at(5,"medusaAlt")
B.Z=new A.at(6,"boss")
B.a_=new A.at(7,"quad")
B.a0=new A.bY("call")
B.a1=A.ay("oZ")
B.a2=A.ay("mf")
B.a3=A.ay("jB")
B.a4=A.ay("mp")
B.a5=A.ay("mt")
B.a6=A.ay("mu")
B.a7=A.ay("mv")
B.a8=A.ay("v")
B.a9=A.ay("jJ")
B.aa=A.ay("n_")
B.ab=A.ay("n0")
B.ac=A.ay("eD")})();(function staticFields(){$.iI=null
$.aa=A.q([],A.W("z<v>"))
$.kC=null
$.kh=null
$.kg=null
$.lE=null
$.ly=null
$.lJ=null
$.j4=null
$.j8=null
$.k1=null
$.c8=null
$.di=null
$.dj=null
$.jX=!1
$.C=B.d
$.jM=null
$.S=A.q([],A.W("z<ak<@>>"))
$.M=A.q([],A.W("z<cD>"))
$.b1=A.q([],A.W("z<bT>"))
$.jY=-1
$.jR=0
$.lr=null})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal
s($,"p3","fP",()=>A.lD("_$dart_dartClosure"))
s($,"q6","jv",()=>B.d.bT(new A.jg(),A.W("aq<G>")))
s($,"pj","lM",()=>A.aW(A.i9({
toString:function(){return"$receiver$"}})))
s($,"pk","lN",()=>A.aW(A.i9({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"pl","lO",()=>A.aW(A.i9(null)))
s($,"pm","lP",()=>A.aW(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"pp","lS",()=>A.aW(A.i9(void 0)))
s($,"pq","lT",()=>A.aW(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"po","lR",()=>A.aW(A.kR(null)))
s($,"pn","lQ",()=>A.aW(function(){try{null.$method$}catch(r){return r.message}}()))
s($,"ps","lV",()=>A.aW(A.kR(void 0)))
s($,"pr","lU",()=>A.aW(function(){try{(void 0).$method$}catch(r){return r.message}}()))
s($,"pu","k5",()=>A.n3())
s($,"p7","jk",()=>t.J.a($.jv()))
s($,"pP","lX",()=>A.jh(B.a8))
s($,"pK","lW",()=>A.nE(A.jZ(self)))
s($,"pv","k6",()=>A.lD("_$dart_dartObject"))
s($,"pL","k7",()=>function DartObject(a){this.o=a})
s($,"pi","lL",()=>A.jy(1,1))
s($,"pO","k8",()=>new A.dP(1.5707963267948966,1,0.1,100))
s($,"pE","jl",()=>A.kD(0,0,1024,1024))
s($,"q2","kb",()=>A.mK(-3,-2,6))
s($,"q1","m_",()=>A.jL(A.kS(0.343,-0.072,-0.936)))
s($,"q3","m0",()=>A.jL(A.kS(0.021,0.961,0.274)))
s($,"pS","jo",()=>A.W("bO").a(A.oo().querySelector("#real-t-demo-hbao")))
s($,"pJ","dp",()=>{var r,q=A.jy(null,null)
A.jG()
r=t.z
return new A.eL(q,new A.ei(A.jG()),A.hX(r),A.hX(r))})
s($,"pN","jn",()=>new A.dO(A.hx(20,0,!0,t.i)))
s($,"pR","k9",()=>new A.hs(A.q([],A.W("z<ak<@>>")),A.hw(A.W("c4"),A.W("ev<aQ>"))))
s($,"pT","lZ",()=>new A.e2(A.q([],A.W("z<ak<@>>")),A.hw(A.W("aY"),A.W("ev<ac>")),A.jG()))
s($,"pG","fQ",()=>new A.h2(A.kz(),A.kz(),A.i6(),A.i6()))
s($,"pI","dn",()=>new A.hT(new A.ah(0,0,0),A.bF()))
s($,"pH","fR",()=>new A.fU(A.kU(),A.kU(),A.bF(),A.bF()))
s($,"pU","dr",()=>new A.ih())
s($,"pF","jm",()=>new A.h1(A.mC(0),A.mB(0)))
s($,"pM","dq",()=>new A.hc())
s($,"pZ","js",()=>new A.hb())
s($,"pX","jq",()=>new A.fZ())
s($,"pV","jp",()=>{var r=A.eo("uSampler"),q=A.jF("uPvwlTransform")
return new A.i3(A.ie(),new A.bV(),r,q)})
s($,"q0","ju",()=>new A.ig(new A.cM(A.q([A.mc("aPosition",0,3,12,0)],t.U)),new A.bV(),new A.hD("uPvwlTransform")))
s($,"q_","jt",()=>{var r=A.jF("uPvwlTransform"),q=A.kV("uViewBound"),p=A.eo("uDepthDataSampler"),o=A.eo("uSamplingRotationSampler")
return new A.hV(A.ie(),new A.bV(),r,new A.ic("uData"),q,p,o,new A.dP(0,0,0,0))})
s($,"pY","jr",()=>{var r=A.jF("uPvwlTransform"),q=A.kV("uViewBound"),p=A.eo("uDepthDataSampler"),o=A.eo("uOcclusionSampler")
return new A.hU(A.ie(),new A.bV(),r,q,p,o)})
s($,"pW","ka",()=>new A.cK(A.q([1,0,0,0,1,0,0,0,1],t.n)))
s($,"pQ","lY",()=>new A.cK(A.q([2,0,0,0,2,0,-1,-1,1],t.n)))})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({WebGL:J.bR,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,webkitFileSystemDirectoryEntry:J.a,FileSystemDirectoryEntry:J.a,DirectoryReader:J.a,WebKitDirectoryReader:J.a,webkitFileSystemDirectoryReader:J.a,FileSystemDirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,webkitFileSystemEntry:J.a,FileSystemEntry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,webkitFileSystemFileEntry:J.a,FileSystemFileEntry:J.a,DOMFileSystem:J.a,WebKitFileSystem:J.a,webkitFileSystem:J.a,FileSystem:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,GeolocationPosition:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,GeolocationPositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL2RenderingContextBase:J.a,ArrayBuffer:A.e3,ArrayBufferView:A.cy,DataView:A.e4,Float32Array:A.cv,Float64Array:A.e5,Int16Array:A.e6,Int32Array:A.e7,Int8Array:A.e8,Uint16Array:A.cz,Uint32Array:A.e9,Uint8ClampedArray:A.cA,CanvasPixelArray:A.cA,Uint8Array:A.ea,HTMLBRElement:A.n,HTMLBaseElement:A.n,HTMLBodyElement:A.n,HTMLButtonElement:A.n,HTMLContentElement:A.n,HTMLDListElement:A.n,HTMLDataElement:A.n,HTMLDataListElement:A.n,HTMLDetailsElement:A.n,HTMLDialogElement:A.n,HTMLEmbedElement:A.n,HTMLFieldSetElement:A.n,HTMLHRElement:A.n,HTMLHeadElement:A.n,HTMLHeadingElement:A.n,HTMLHtmlElement:A.n,HTMLIFrameElement:A.n,HTMLInputElement:A.n,HTMLLIElement:A.n,HTMLLabelElement:A.n,HTMLLegendElement:A.n,HTMLLinkElement:A.n,HTMLMapElement:A.n,HTMLMenuElement:A.n,HTMLMetaElement:A.n,HTMLMeterElement:A.n,HTMLModElement:A.n,HTMLOListElement:A.n,HTMLObjectElement:A.n,HTMLOptGroupElement:A.n,HTMLOptionElement:A.n,HTMLOutputElement:A.n,HTMLParagraphElement:A.n,HTMLParamElement:A.n,HTMLPictureElement:A.n,HTMLPreElement:A.n,HTMLProgressElement:A.n,HTMLQuoteElement:A.n,HTMLScriptElement:A.n,HTMLShadowElement:A.n,HTMLSlotElement:A.n,HTMLSourceElement:A.n,HTMLSpanElement:A.n,HTMLStyleElement:A.n,HTMLTableCaptionElement:A.n,HTMLTableCellElement:A.n,HTMLTableDataCellElement:A.n,HTMLTableHeaderCellElement:A.n,HTMLTableColElement:A.n,HTMLTableElement:A.n,HTMLTableRowElement:A.n,HTMLTableSectionElement:A.n,HTMLTemplateElement:A.n,HTMLTextAreaElement:A.n,HTMLTimeElement:A.n,HTMLTitleElement:A.n,HTMLTrackElement:A.n,HTMLUListElement:A.n,HTMLUnknownElement:A.n,HTMLDirectoryElement:A.n,HTMLFontElement:A.n,HTMLFrameElement:A.n,HTMLFrameSetElement:A.n,HTMLMarqueeElement:A.n,HTMLElement:A.n,AccessibleNodeList:A.fV,HTMLAnchorElement:A.du,HTMLAreaElement:A.dv,BeforeUnloadEvent:A.bn,Blob:A.bo,HTMLCanvasElement:A.bp,CDATASection:A.az,CharacterData:A.az,Comment:A.az,ProcessingInstruction:A.az,Text:A.az,CSSPerspective:A.h3,CSSCharsetRule:A.A,CSSConditionRule:A.A,CSSFontFaceRule:A.A,CSSGroupingRule:A.A,CSSImportRule:A.A,CSSKeyframeRule:A.A,MozCSSKeyframeRule:A.A,WebKitCSSKeyframeRule:A.A,CSSKeyframesRule:A.A,MozCSSKeyframesRule:A.A,WebKitCSSKeyframesRule:A.A,CSSMediaRule:A.A,CSSNamespaceRule:A.A,CSSPageRule:A.A,CSSRule:A.A,CSSStyleRule:A.A,CSSSupportsRule:A.A,CSSViewportRule:A.A,CSSStyleDeclaration:A.ch,MSStyleCSSProperties:A.ch,CSS2Properties:A.ch,CSSImageValue:A.ap,CSSKeywordValue:A.ap,CSSNumericValue:A.ap,CSSPositionValue:A.ap,CSSResourceValue:A.ap,CSSUnitValue:A.ap,CSSURLImageValue:A.ap,CSSStyleValue:A.ap,CSSMatrixComponent:A.aL,CSSRotation:A.aL,CSSScale:A.aL,CSSSkew:A.aL,CSSTranslation:A.aL,CSSTransformComponent:A.aL,CSSTransformValue:A.h5,CSSUnparsedValue:A.h6,DataTransferItemList:A.h7,DeviceOrientationEvent:A.aM,HTMLDivElement:A.bO,Document:A.aN,HTMLDocument:A.aN,XMLDocument:A.aN,DOMException:A.h9,ClientRectList:A.cj,DOMRectList:A.cj,DOMRectReadOnly:A.ck,DOMStringList:A.dH,DOMTokenList:A.ha,MathMLElement:A.h,SVGAElement:A.h,SVGAnimateElement:A.h,SVGAnimateMotionElement:A.h,SVGAnimateTransformElement:A.h,SVGAnimationElement:A.h,SVGCircleElement:A.h,SVGClipPathElement:A.h,SVGDefsElement:A.h,SVGDescElement:A.h,SVGDiscardElement:A.h,SVGEllipseElement:A.h,SVGFEBlendElement:A.h,SVGFEColorMatrixElement:A.h,SVGFEComponentTransferElement:A.h,SVGFECompositeElement:A.h,SVGFEConvolveMatrixElement:A.h,SVGFEDiffuseLightingElement:A.h,SVGFEDisplacementMapElement:A.h,SVGFEDistantLightElement:A.h,SVGFEFloodElement:A.h,SVGFEFuncAElement:A.h,SVGFEFuncBElement:A.h,SVGFEFuncGElement:A.h,SVGFEFuncRElement:A.h,SVGFEGaussianBlurElement:A.h,SVGFEImageElement:A.h,SVGFEMergeElement:A.h,SVGFEMergeNodeElement:A.h,SVGFEMorphologyElement:A.h,SVGFEOffsetElement:A.h,SVGFEPointLightElement:A.h,SVGFESpecularLightingElement:A.h,SVGFESpotLightElement:A.h,SVGFETileElement:A.h,SVGFETurbulenceElement:A.h,SVGFilterElement:A.h,SVGForeignObjectElement:A.h,SVGGElement:A.h,SVGGeometryElement:A.h,SVGGraphicsElement:A.h,SVGImageElement:A.h,SVGLineElement:A.h,SVGLinearGradientElement:A.h,SVGMarkerElement:A.h,SVGMaskElement:A.h,SVGMetadataElement:A.h,SVGPathElement:A.h,SVGPatternElement:A.h,SVGPolygonElement:A.h,SVGPolylineElement:A.h,SVGRadialGradientElement:A.h,SVGRectElement:A.h,SVGScriptElement:A.h,SVGSetElement:A.h,SVGStopElement:A.h,SVGStyleElement:A.h,SVGElement:A.h,SVGSVGElement:A.h,SVGSwitchElement:A.h,SVGSymbolElement:A.h,SVGTSpanElement:A.h,SVGTextContentElement:A.h,SVGTextElement:A.h,SVGTextPathElement:A.h,SVGTextPositioningElement:A.h,SVGTitleElement:A.h,SVGUseElement:A.h,SVGViewElement:A.h,SVGGradientElement:A.h,SVGComponentTransferFunctionElement:A.h,SVGFEDropShadowElement:A.h,SVGMPathElement:A.h,Element:A.h,AbortPaymentEvent:A.j,AnimationEvent:A.j,AnimationPlaybackEvent:A.j,ApplicationCacheErrorEvent:A.j,BackgroundFetchClickEvent:A.j,BackgroundFetchEvent:A.j,BackgroundFetchFailEvent:A.j,BackgroundFetchedEvent:A.j,BeforeInstallPromptEvent:A.j,BlobEvent:A.j,CanMakePaymentEvent:A.j,ClipboardEvent:A.j,CloseEvent:A.j,CustomEvent:A.j,DeviceMotionEvent:A.j,ErrorEvent:A.j,ExtendableEvent:A.j,ExtendableMessageEvent:A.j,FetchEvent:A.j,FontFaceSetLoadEvent:A.j,ForeignFetchEvent:A.j,GamepadEvent:A.j,HashChangeEvent:A.j,InstallEvent:A.j,MediaEncryptedEvent:A.j,MediaKeyMessageEvent:A.j,MediaQueryListEvent:A.j,MediaStreamEvent:A.j,MediaStreamTrackEvent:A.j,MessageEvent:A.j,MIDIConnectionEvent:A.j,MIDIMessageEvent:A.j,MutationEvent:A.j,NotificationEvent:A.j,PageTransitionEvent:A.j,PaymentRequestEvent:A.j,PaymentRequestUpdateEvent:A.j,PopStateEvent:A.j,PresentationConnectionAvailableEvent:A.j,PresentationConnectionCloseEvent:A.j,PromiseRejectionEvent:A.j,PushEvent:A.j,RTCDataChannelEvent:A.j,RTCDTMFToneChangeEvent:A.j,RTCPeerConnectionIceEvent:A.j,RTCTrackEvent:A.j,SecurityPolicyViolationEvent:A.j,SensorErrorEvent:A.j,SpeechRecognitionError:A.j,SpeechRecognitionEvent:A.j,SpeechSynthesisEvent:A.j,StorageEvent:A.j,SyncEvent:A.j,TrackEvent:A.j,TransitionEvent:A.j,WebKitTransitionEvent:A.j,VRDeviceEvent:A.j,VRDisplayEvent:A.j,VRSessionEvent:A.j,MojoInterfaceRequestEvent:A.j,USBConnectionEvent:A.j,IDBVersionChangeEvent:A.j,AudioProcessingEvent:A.j,OfflineAudioCompletionEvent:A.j,Event:A.j,InputEvent:A.j,SubmitEvent:A.j,AbsoluteOrientationSensor:A.c,Accelerometer:A.c,AccessibleNode:A.c,AmbientLightSensor:A.c,Animation:A.c,ApplicationCache:A.c,DOMApplicationCache:A.c,OfflineResourceList:A.c,BackgroundFetchRegistration:A.c,BatteryManager:A.c,BroadcastChannel:A.c,CanvasCaptureMediaStreamTrack:A.c,EventSource:A.c,FileReader:A.c,Gyroscope:A.c,LinearAccelerationSensor:A.c,Magnetometer:A.c,MediaDevices:A.c,MediaKeySession:A.c,MediaQueryList:A.c,MediaRecorder:A.c,MediaSource:A.c,MediaStream:A.c,MediaStreamTrack:A.c,MessagePort:A.c,MIDIAccess:A.c,MIDIInput:A.c,MIDIOutput:A.c,MIDIPort:A.c,NetworkInformation:A.c,Notification:A.c,OffscreenCanvas:A.c,OrientationSensor:A.c,PaymentRequest:A.c,Performance:A.c,PermissionStatus:A.c,PresentationAvailability:A.c,PresentationConnection:A.c,PresentationConnectionList:A.c,PresentationRequest:A.c,RelativeOrientationSensor:A.c,RemotePlayback:A.c,RTCDataChannel:A.c,DataChannel:A.c,RTCDTMFSender:A.c,RTCPeerConnection:A.c,webkitRTCPeerConnection:A.c,mozRTCPeerConnection:A.c,ScreenOrientation:A.c,Sensor:A.c,ServiceWorker:A.c,ServiceWorkerContainer:A.c,ServiceWorkerRegistration:A.c,SharedWorker:A.c,SpeechRecognition:A.c,webkitSpeechRecognition:A.c,SpeechSynthesis:A.c,SpeechSynthesisUtterance:A.c,VR:A.c,VRDevice:A.c,VRDisplay:A.c,VRSession:A.c,VisualViewport:A.c,WebSocket:A.c,Worker:A.c,WorkerPerformance:A.c,BluetoothDevice:A.c,BluetoothRemoteGATTCharacteristic:A.c,Clipboard:A.c,MojoInterfaceInterceptor:A.c,USB:A.c,IDBDatabase:A.c,IDBOpenDBRequest:A.c,IDBVersionChangeRequest:A.c,IDBRequest:A.c,IDBTransaction:A.c,AnalyserNode:A.c,RealtimeAnalyserNode:A.c,AudioBufferSourceNode:A.c,AudioDestinationNode:A.c,AudioNode:A.c,AudioScheduledSourceNode:A.c,AudioWorkletNode:A.c,BiquadFilterNode:A.c,ChannelMergerNode:A.c,AudioChannelMerger:A.c,ChannelSplitterNode:A.c,AudioChannelSplitter:A.c,ConstantSourceNode:A.c,ConvolverNode:A.c,DelayNode:A.c,DynamicsCompressorNode:A.c,GainNode:A.c,AudioGainNode:A.c,IIRFilterNode:A.c,MediaElementAudioSourceNode:A.c,MediaStreamAudioDestinationNode:A.c,MediaStreamAudioSourceNode:A.c,OscillatorNode:A.c,Oscillator:A.c,PannerNode:A.c,AudioPannerNode:A.c,webkitAudioPannerNode:A.c,ScriptProcessorNode:A.c,JavaScriptAudioNode:A.c,StereoPannerNode:A.c,WaveShaperNode:A.c,EventTarget:A.c,File:A.Y,FileList:A.dJ,FileWriter:A.dK,FontFace:A.bP,FontFaceSet:A.bQ,HTMLFormElement:A.dL,Gamepad:A.a4,History:A.hj,HTMLCollection:A.bs,HTMLFormControlsCollection:A.bs,HTMLOptionsCollection:A.bs,XMLHttpRequest:A.ar,XMLHttpRequestUpload:A.bt,XMLHttpRequestEventTarget:A.bt,ImageData:A.cn,HTMLImageElement:A.dQ,IntersectionObserver:A.bu,IntersectionObserverEntry:A.hn,KeyboardEvent:A.aR,Location:A.hy,HTMLAudioElement:A.bE,HTMLMediaElement:A.bE,MediaList:A.hE,MIDIInputMap:A.e_,MIDIOutputMap:A.e0,MimeType:A.a5,MimeTypeArray:A.e1,PointerEvent:A.Z,MouseEvent:A.Z,DragEvent:A.Z,DocumentFragment:A.r,ShadowRoot:A.r,Attr:A.r,DocumentType:A.r,Node:A.r,NodeList:A.cB,RadioNodeList:A.cB,Plugin:A.a6,PluginArray:A.eg,ProgressEvent:A.au,ResourceProgressEvent:A.au,RTCStatsReport:A.em,HTMLSelectElement:A.ep,SourceBuffer:A.a0,SourceBufferList:A.er,SpeechGrammar:A.a7,SpeechGrammarList:A.es,SpeechRecognitionResult:A.a8,Storage:A.eu,CSSStyleSheet:A.U,StyleSheet:A.U,TextTrack:A.a1,TextTrackCue:A.Q,VTTCue:A.Q,TextTrackCueList:A.ey,TextTrackList:A.ez,TimeRanges:A.i4,Touch:A.a9,TouchList:A.eB,TrackDefaultList:A.i5,CompositionEvent:A.aD,FocusEvent:A.aD,TextEvent:A.aD,TouchEvent:A.aD,UIEvent:A.aD,URL:A.ib,HTMLVideoElement:A.eJ,VideoTrackList:A.eK,WheelEvent:A.bb,Window:A.bc,DOMWindow:A.bc,DedicatedWorkerGlobalScope:A.aE,ServiceWorkerGlobalScope:A.aE,SharedWorkerGlobalScope:A.aE,WorkerGlobalScope:A.aE,CSSRuleList:A.eQ,ClientRect:A.cS,DOMRect:A.cS,GamepadList:A.f2,NamedNodeMap:A.d0,MozNamedAttrMap:A.d0,SpeechRecognitionResultList:A.fn,StyleSheetList:A.fs,IDBKeyRange:A.cs,SVGLength:A.ae,SVGLengthList:A.dX,SVGNumber:A.ag,SVGNumberList:A.ec,SVGPointList:A.hK,SVGStringList:A.ew,SVGTransform:A.al,SVGTransformList:A.eC,AudioBuffer:A.fX,AudioParamMap:A.dx,AudioTrackList:A.dy,AudioContext:A.b5,webkitAudioContext:A.b5,BaseAudioContext:A.b5,OfflineAudioContext:A.ed,WebGLBuffer:A.dz,WebGLContextEvent:A.aK,WebGLFramebuffer:A.dN,WebGLProgram:A.eh,WebGLRenderbuffer:A.el,WebGLRenderingContext:A.cG,WebGL2RenderingContext:A.bX,WebGLShader:A.eq,WebGLTexture:A.eA,WebGLUniformLocation:A.eE})
hunkHelpers.setOrUpdateLeafTags({WebGL:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,webkitFileSystemDirectoryEntry:true,FileSystemDirectoryEntry:true,DirectoryReader:true,WebKitDirectoryReader:true,webkitFileSystemDirectoryReader:true,FileSystemDirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,webkitFileSystemEntry:true,FileSystemEntry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,webkitFileSystemFileEntry:true,FileSystemFileEntry:true,DOMFileSystem:true,WebKitFileSystem:true,webkitFileSystem:true,FileSystem:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,GeolocationPosition:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,GeolocationPositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL2RenderingContextBase:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,BeforeUnloadEvent:true,Blob:false,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,DeviceOrientationEvent:true,HTMLDivElement:true,Document:true,HTMLDocument:true,XMLDocument:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,MathMLElement:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,Event:false,InputEvent:false,SubmitEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,EventSource:true,FileReader:true,Gyroscope:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerRegistration:true,SharedWorker:true,SpeechRecognition:true,webkitSpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,FontFace:true,FontFaceSet:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,XMLHttpRequest:true,XMLHttpRequestUpload:true,XMLHttpRequestEventTarget:false,ImageData:true,HTMLImageElement:true,IntersectionObserver:true,IntersectionObserverEntry:true,KeyboardEvent:true,Location:true,HTMLAudioElement:true,HTMLMediaElement:false,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,DocumentFragment:true,ShadowRoot:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,ProgressEvent:true,ResourceProgressEvent:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,TouchEvent:true,UIEvent:false,URL:true,HTMLVideoElement:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,DedicatedWorkerGlobalScope:true,ServiceWorkerGlobalScope:true,SharedWorkerGlobalScope:true,WorkerGlobalScope:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,IDBKeyRange:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLContextEvent:true,WebGLFramebuffer:true,WebGLProgram:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true})
A.bU.$nativeSuperclassTag="ArrayBufferView"
A.d1.$nativeSuperclassTag="ArrayBufferView"
A.d2.$nativeSuperclassTag="ArrayBufferView"
A.cw.$nativeSuperclassTag="ArrayBufferView"
A.d3.$nativeSuperclassTag="ArrayBufferView"
A.d4.$nativeSuperclassTag="ArrayBufferView"
A.cx.$nativeSuperclassTag="ArrayBufferView"
A.d6.$nativeSuperclassTag="EventTarget"
A.d7.$nativeSuperclassTag="EventTarget"
A.d9.$nativeSuperclassTag="EventTarget"
A.da.$nativeSuperclassTag="EventTarget"})()
Function.prototype.$1$1=function(a){return this(a)}
Function.prototype.$2=function(a,b){return this(a,b)}
Function.prototype.$1=function(a){return this(a)}
Function.prototype.$0=function(){return this()}
Function.prototype.$3=function(a,b,c){return this(a,b,c)}
Function.prototype.$4=function(a,b,c,d){return this(a,b,c,d)}
Function.prototype.$6=function(a,b,c,d,e,f){return this(a,b,c,d,e,f)}
Function.prototype.$9=function(a,b,c,d,e,f,g,h,i){return this(a,b,c,d,e,f,g,h,i)}
Function.prototype.$5=function(a,b,c,d,e){return this(a,b,c,d,e)}
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q)s[q].removeEventListener("load",onLoad,false)
a(b.target)}for(var r=0;r<s.length;++r)s[r].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
var s=A.oM
if(typeof dartMainRunner==="function")dartMainRunner(s,[])
else s([])})})()