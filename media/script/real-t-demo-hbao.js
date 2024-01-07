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
a[c]=function(){a[c]=function(){A.oS(b)}
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
if(a[b]!==s)A.oU(b)
a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s)convertToFastObject(a[s])}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.k1(b)
return new s(c,this)}:function(){if(s===null)s=A.k1(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.k1(a).prototype
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
k4(a,b,c,d){return{i:a,p:b,e:c,x:d}},
fQ(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.k2==null){A.oG()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw A.b(A.jL("Return interceptor for "+A.m(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.iI
if(o==null)o=$.iI=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=A.oN(a)
if(p!=null)return p
if(typeof a=="function")return B.T
s=Object.getPrototypeOf(a)
if(s==null)return B.v
if(s===Object.prototype)return B.v
if(typeof q=="function"){o=$.iI
if(o==null)o=$.iI=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:B.h,enumerable:false,writable:true,configurable:true})
return B.h}return B.h},
mx(a,b){if(a<0||a>4294967295)throw A.b(A.kG(a,0,4294967295,"length",null))
return J.kx(A.q(new Array(a),b.h("z<0>")),b)},
kw(a,b){if(a<0)throw A.b(A.aJ("Length must be a non-negative integer: "+a,null))
return A.q(new Array(a),b.h("z<0>"))},
kx(a,b){a.fixed$length=Array
return a},
b4(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cq.prototype
return J.dX.prototype}if(typeof a=="string")return J.ba.prototype
if(a==null)return J.cr.prototype
if(typeof a=="boolean")return J.dV.prototype
if(Array.isArray(a))return J.z.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aA.prototype
if(typeof a=="symbol")return J.bz.prototype
if(typeof a=="bigint")return J.by.prototype
return a}if(a instanceof A.v)return a
return J.fQ(a)},
or(a){if(typeof a=="number")return J.bx.prototype
if(typeof a=="string")return J.ba.prototype
if(a==null)return a
if(Array.isArray(a))return J.z.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aA.prototype
if(typeof a=="symbol")return J.bz.prototype
if(typeof a=="bigint")return J.by.prototype
return a}if(a instanceof A.v)return a
return J.fQ(a)},
ax(a){if(typeof a=="string")return J.ba.prototype
if(a==null)return a
if(Array.isArray(a))return J.z.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aA.prototype
if(typeof a=="symbol")return J.bz.prototype
if(typeof a=="bigint")return J.by.prototype
return a}if(a instanceof A.v)return a
return J.fQ(a)},
cb(a){if(a==null)return a
if(Array.isArray(a))return J.z.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aA.prototype
if(typeof a=="symbol")return J.bz.prototype
if(typeof a=="bigint")return J.by.prototype
return a}if(a instanceof A.v)return a
return J.fQ(a)},
os(a){if(typeof a=="number")return J.bx.prototype
if(typeof a=="string")return J.ba.prototype
if(a==null)return a
if(!(a instanceof A.v))return J.bI.prototype
return a},
cc(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aA.prototype
if(typeof a=="symbol")return J.bz.prototype
if(typeof a=="bigint")return J.by.prototype
return a}if(a instanceof A.v)return a
return J.fQ(a)},
ot(a){if(a==null)return a
if(!(a instanceof A.v))return J.bI.prototype
return a},
m0(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.or(a).q(a,b)},
fT(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.b4(a).K(a,b)},
kf(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.os(a).j(a,b)},
ac(a,b){if(typeof b==="number")if(Array.isArray(a)||typeof a=="string"||A.oJ(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.ax(a).i(a,b)},
m1(a,b,c){return J.cb(a).l(a,b,c)},
m2(a,b,c,d){return J.cc(a).cv(a,b,c,d)},
m3(a,b,c,d){return J.cc(a).cJ(a,b,c,d)},
m4(a){return J.cc(a).cK(a)},
m5(a,b){return J.cb(a).p(a,b)},
fU(a,b){return J.cb(a).t(a,b)},
m6(a){return J.ot(a).gdh(a)},
m7(a){return J.cb(a).gB(a)},
jx(a){return J.b4(a).gu(a)},
m8(a){return J.cc(a).gd3(a)},
b7(a){return J.cb(a).gG(a)},
dv(a){return J.ax(a).gk(a)},
m9(a){return J.b4(a).gD(a)},
kg(a,b,c){return J.cb(a).au(a,b,c)},
ma(a,b){return J.b4(a).bO(a,b)},
dw(a){return J.b4(a).m(a)},
bT:function bT(){},
dV:function dV(){},
cr:function cr(){},
a:function a(){},
bB:function bB(){},
ei:function ei(){},
bI:function bI(){},
aA:function aA(){},
by:function by(){},
bz:function bz(){},
z:function z(a){this.$ti=a},
hp:function hp(a){this.$ti=a},
bn:function bn(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bx:function bx(){},
cq:function cq(){},
dX:function dX(){},
ba:function ba(){}},A={jD:function jD(){},
cM(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
kQ(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
n_(a,b,c){return A.kQ(A.cM(A.cM(c,a),b))},
dp(a,b,c){return a},
k3(a){var s,r
for(s=$.ab.length,r=0;r<s;++r)if(a===$.ab[r])return!0
return!1},
kA(a,b,c,d){if(t.gw.b(a))return new A.cn(a,b,c.h("@<0>").v(d).h("cn<1,2>"))
return new A.bD(a,b,c.h("@<0>").v(d).h("bD<1,2>"))},
ku(){return new A.bH("No element")},
cv:function cv(a){this.a=a},
jh:function jh(){},
hS:function hS(){},
k:function k(){},
ag:function ag(){},
bC:function bC(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bD:function bD(a,b,c){this.a=a
this.b=b
this.$ti=c},
cn:function cn(a,b,c){this.a=a
this.b=b
this.$ti=c},
aT:function aT(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
aU:function aU(a,b,c){this.a=a
this.b=b
this.$ti=c},
T:function T(){},
bZ:function bZ(a){this.a=a},
lL(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
oJ(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.aU.b(a)},
m(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.dw(a)
return s},
cG(a){var s,r=$.kF
if(r==null)r=$.kF=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
hN(a){return A.mM(a)},
mM(a){var s,r,q,p
if(a instanceof A.v)return A.a3(A.ao(a),null)
s=J.b4(a)
if(s===B.S||s===B.U||t.ak.b(a)){r=B.m(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.a3(A.ao(a),null)},
mV(a){if(typeof a=="number"||A.c8(a))return J.dw(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.b9)return a.m(0)
return"Instance of '"+A.hN(a)+"'"},
a0(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
mU(a){return a.b?A.a0(a).getUTCFullYear()+0:A.a0(a).getFullYear()+0},
mS(a){return a.b?A.a0(a).getUTCMonth()+1:A.a0(a).getMonth()+1},
mO(a){return a.b?A.a0(a).getUTCDate()+0:A.a0(a).getDate()+0},
mP(a){return a.b?A.a0(a).getUTCHours()+0:A.a0(a).getHours()+0},
mR(a){return a.b?A.a0(a).getUTCMinutes()+0:A.a0(a).getMinutes()+0},
mT(a){return a.b?A.a0(a).getUTCSeconds()+0:A.a0(a).getSeconds()+0},
mQ(a){return a.b?A.a0(a).getUTCMilliseconds()+0:A.a0(a).getMilliseconds()+0},
bc(a,b,c){var s,r,q={}
q.a=0
s=[]
r=[]
q.a=b.length
B.a.V(s,b)
q.b=""
if(c!=null&&c.a!==0)c.t(0,new A.hM(q,r,s))
return J.ma(a,new A.dW(B.a0,0,s,r,0))},
mN(a,b,c){var s,r,q
if(Array.isArray(b))s=c==null||c.a===0
else s=!1
if(s){r=b.length
if(r===0){if(!!a.$0)return a.$0()}else if(r===1){if(!!a.$1)return a.$1(b[0])}else if(r===2){if(!!a.$2)return a.$2(b[0],b[1])}else if(r===3){if(!!a.$3)return a.$3(b[0],b[1],b[2])}else if(r===4){if(!!a.$4)return a.$4(b[0],b[1],b[2],b[3])}else if(r===5)if(!!a.$5)return a.$5(b[0],b[1],b[2],b[3],b[4])
q=a[""+"$"+r]
if(q!=null)return q.apply(a,b)}return A.mL(a,b,c)},
mL(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g=Array.isArray(b)?b:A.e1(b,t.z),f=g.length,e=a.$R
if(f<e)return A.bc(a,g,c)
s=a.$D
r=s==null
q=!r?s():null
p=J.b4(a)
o=p.$C
if(typeof o=="string")o=p[o]
if(r){if(c!=null&&c.a!==0)return A.bc(a,g,c)
if(f===e)return o.apply(a,g)
return A.bc(a,g,c)}if(Array.isArray(q)){if(c!=null&&c.a!==0)return A.bc(a,g,c)
n=e+q.length
if(f>n)return A.bc(a,g,null)
if(f<n){m=q.slice(f-e)
if(g===b)g=A.e1(g,t.z)
B.a.V(g,m)}return o.apply(a,g)}else{if(f>e)return A.bc(a,g,c)
if(g===b)g=A.e1(g,t.z)
l=Object.keys(q)
if(c==null)for(r=l.length,k=0;k<l.length;l.length===r||(0,A.aa)(l),++k){j=q[A.H(l[k])]
if(B.o===j)return A.bc(a,g,c)
B.a.n(g,j)}else{for(r=l.length,i=0,k=0;k<l.length;l.length===r||(0,A.aa)(l),++k){h=A.H(l[k])
if(c.a4(0,h)){++i
B.a.n(g,c.i(0,h))}else{j=q[h]
if(B.o===j)return A.bc(a,g,c)
B.a.n(g,j)}}if(i!==c.a)return A.bc(a,g,c)}return o.apply(a,g)}},
an(a){throw A.b(A.lA(a))},
d(a,b){if(a==null)J.dv(a)
throw A.b(A.fP(a,b))},
fP(a,b){var s,r="index"
if(!A.fM(b))return new A.aI(!0,b,r,null)
s=A.t(J.dv(a))
if(b<0||b>=s)return A.P(b,s,a,r)
return A.kH(b,r)},
lA(a){return new A.aI(!0,a,null,null)},
b(a){return A.lG(new Error(),a)},
lG(a,b){var s
if(b==null)b=new A.aX()
a.dartException=b
s=A.oV
if("defineProperty" in Object){Object.defineProperty(a,"message",{get:s})
a.name=""}else a.toString=s
return a},
oV(){return J.dw(this.dartException)},
bm(a){throw A.b(a)},
oT(a,b){throw A.lG(b,a)},
aa(a){throw A.b(A.Y(a))},
aY(a){var s,r,q,p,o,n
a=A.oR(a.replace(String({}),"$receiver$"))
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
kT(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
jE(a,b){var s=b==null,r=s?null:b.method
return new A.dY(a,r,s?null:b.receiver)},
aH(a){if(a==null)return new A.hK(a)
if(typeof a!=="object")return a
if("dartException" in a)return A.bO(a,a.dartException)
return A.oe(a)},
bO(a,b){if(t.a.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
oe(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.f.by(r,16)&8191)===10)switch(q){case 438:return A.bO(a,A.jE(A.m(s)+" (Error "+q+")",null))
case 445:case 5007:A.m(s)
return A.bO(a,new A.cE())}}if(a instanceof TypeError){p=$.lN()
o=$.lO()
n=$.lP()
m=$.lQ()
l=$.lT()
k=$.lU()
j=$.lS()
$.lR()
i=$.lW()
h=$.lV()
g=p.M(s)
if(g!=null)return A.bO(a,A.jE(A.H(s),g))
else{g=o.M(s)
if(g!=null){g.method="call"
return A.bO(a,A.jE(A.H(s),g))}else if(n.M(s)!=null||m.M(s)!=null||l.M(s)!=null||k.M(s)!=null||j.M(s)!=null||m.M(s)!=null||i.M(s)!=null||h.M(s)!=null){A.H(s)
return A.bO(a,new A.cE())}}return A.bO(a,new A.eI(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.cK()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.bO(a,new A.aI(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.cK()
return a},
b5(a){var s
if(a==null)return new A.db(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.db(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
ji(a){if(a==null)return J.jx(a)
if(typeof a=="object")return A.cG(a)
return J.jx(a)},
oq(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.l(0,a[s],a[r])}return b},
nP(a,b,c,d,e,f){t.Z.a(a)
switch(A.t(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.b(A.dL("Unsupported number of arguments for wrapped closure"))},
aG(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=A.on(a,b)
a.$identity=s
return s},
on(a,b){var s
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
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.nP)},
mj(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.ev().constructor.prototype):Object.create(new A.bP(null,null).constructor.prototype)
s.$initialize=s.constructor
if(h)r=function static_tear_off(){this.$initialize()}
else r=function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.km(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.mf(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.km(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
mf(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.b("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.mc)}throw A.b("Error in functionType of tearoff")},
mg(a,b,c,d){var s=A.kl
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
km(a,b,c,d){var s,r
if(c)return A.mi(a,b,d)
s=b.length
r=A.mg(s,d,a,b)
return r},
mh(a,b,c,d){var s=A.kl,r=A.md
switch(b?-1:a){case 0:throw A.b(new A.ep("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
mi(a,b,c){var s,r
if($.kj==null)$.kj=A.ki("interceptor")
if($.kk==null)$.kk=A.ki("receiver")
s=b.length
r=A.mh(s,c,a,b)
return r},
k1(a){return A.mj(a)},
mc(a,b){return A.iQ(v.typeUniverse,A.ao(a.a),b)},
kl(a){return a.a},
md(a){return a.b},
ki(a){var s,r,q,p=new A.bP("receiver","interceptor"),o=J.kx(Object.getOwnPropertyNames(p),t.X)
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw A.b(A.aJ("Field name "+a+" not found.",null))},
om(a){if(a==null)A.of("boolean expression must not be null")
return a},
of(a){throw A.b(new A.eP(a))},
oS(a){throw A.b(new A.eU(a))},
lE(a){return v.getIsolateTag(a)},
q6(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
oN(a){var s,r,q,p,o,n=A.H($.lF.$1(a)),m=$.j5[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.j9[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.nz($.lz.$2(a,n))
if(q!=null){m=$.j5[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.j9[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.jg(s)
$.j5[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.j9[n]=s
return s}if(p==="-"){o=A.jg(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.lJ(a,s)
if(p==="*")throw A.b(A.jL(n))
if(v.leafTags[n]===true){o=A.jg(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.lJ(a,s)},
lJ(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.k4(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
jg(a){return J.k4(a,!1,null,!!a.$iu)},
oP(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.jg(s)
else return J.k4(s,c,null,null)},
oG(){if(!0===$.k2)return
$.k2=!0
A.oH()},
oH(){var s,r,q,p,o,n,m,l
$.j5=Object.create(null)
$.j9=Object.create(null)
A.oF()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.lK.$1(o)
if(n!=null){m=A.oP(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
oF(){var s,r,q,p,o,n,m=B.H()
m=A.ca(B.I,A.ca(B.J,A.ca(B.n,A.ca(B.n,A.ca(B.K,A.ca(B.L,A.ca(B.M(B.m),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.lF=new A.j6(p)
$.lz=new A.j7(o)
$.lK=new A.j8(n)},
ca(a,b){return a(b)||b},
oo(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
oR(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
ch:function ch(a,b){this.a=a
this.$ti=b},
cg:function cg(){},
ci:function ci(a,b,c){this.a=a
this.b=b
this.$ti=c},
d1:function d1(a,b){this.a=a
this.$ti=b},
d2:function d2(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
dW:function dW(a,b,c,d,e){var _=this
_.a=a
_.c=b
_.d=c
_.e=d
_.f=e},
hM:function hM(a,b,c){this.a=a
this.b=b
this.c=c},
i8:function i8(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
cE:function cE(){},
dY:function dY(a,b,c){this.a=a
this.b=b
this.c=c},
eI:function eI(a){this.a=a},
hK:function hK(a){this.a=a},
db:function db(a){this.a=a
this.b=null},
b9:function b9(){},
dE:function dE(){},
dF:function dF(){},
ez:function ez(){},
ev:function ev(){},
bP:function bP(a,b){this.a=a
this.b=b},
eU:function eU(a){this.a=a},
ep:function ep(a){this.a=a},
eP:function eP(a){this.a=a},
iK:function iK(){},
aP:function aP(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
hq:function hq(a){this.a=a},
hw:function hw(a,b){this.a=a
this.b=b
this.c=null},
as:function as(a,b){this.a=a
this.$ti=b},
cw:function cw(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
j6:function j6(a){this.a=a},
j7:function j7(a){this.a=a},
j8:function j8(a){this.a=a},
oU(a){A.oT(new A.cv("Field '"+a+"' has been assigned during initialization."),new Error())},
l1(a){var s=new A.ir(a)
return s.b=s},
ir:function ir(a){this.a=a
this.b=null},
iU(a,b,c){},
dk(a){return a},
mA(a){return new Float32Array(a)},
mB(a){return new Uint16Array(a)},
mC(a,b,c){A.iU(a,b,c)
return c==null?new Uint8Array(a,b):new Uint8Array(a,b,c)},
b1(a,b,c){if(a>>>0!==a||a>=c)throw A.b(A.fP(b,a))},
e6:function e6(){},
cA:function cA(){},
e7:function e7(){},
bW:function bW(){},
cy:function cy(){},
cz:function cz(){},
cx:function cx(){},
e8:function e8(){},
e9:function e9(){},
ea:function ea(){},
eb:function eb(){},
cB:function cB(){},
ec:function ec(){},
cC:function cC(){},
ed:function ed(){},
d4:function d4(){},
d5:function d5(){},
d6:function d6(){},
d7:function d7(){},
kJ(a,b){var s=b.c
return s==null?b.c=A.jR(a,b.y,!0):s},
jJ(a,b){var s=b.c
return s==null?b.c=A.dg(a,"aq",[b.y]):s},
mZ(a){var s=a.d
if(s!=null)return s
return a.d=new Map()},
kK(a){var s=a.x
if(s===6||s===7||s===8)return A.kK(a.y)
return s===12||s===13},
mY(a){return a.at},
X(a){return A.fB(v.typeUniverse,a,!1)},
bk(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.x
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.y
r=A.bk(a,s,a0,a1)
if(r===s)return b
return A.le(a,r,!0)
case 7:s=b.y
r=A.bk(a,s,a0,a1)
if(r===s)return b
return A.jR(a,r,!0)
case 8:s=b.y
r=A.bk(a,s,a0,a1)
if(r===s)return b
return A.ld(a,r,!0)
case 9:q=b.z
p=A.dn(a,q,a0,a1)
if(p===q)return b
return A.dg(a,b.y,p)
case 10:o=b.y
n=A.bk(a,o,a0,a1)
m=b.z
l=A.dn(a,m,a0,a1)
if(n===o&&l===m)return b
return A.jP(a,n,l)
case 12:k=b.y
j=A.bk(a,k,a0,a1)
i=b.z
h=A.ob(a,i,a0,a1)
if(j===k&&h===i)return b
return A.lc(a,j,h)
case 13:g=b.z
a1+=g.length
f=A.dn(a,g,a0,a1)
o=b.y
n=A.bk(a,o,a0,a1)
if(f===g&&n===o)return b
return A.jQ(a,n,f,!0)
case 14:e=b.y
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw A.b(A.dz("Attempted to substitute unexpected RTI kind "+c))}},
dn(a,b,c,d){var s,r,q,p,o=b.length,n=A.iR(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.bk(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
oc(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.iR(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.bk(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
ob(a,b,c,d){var s,r=b.a,q=A.dn(a,r,c,d),p=b.b,o=A.dn(a,p,c,d),n=b.c,m=A.oc(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.f3()
s.a=q
s.b=o
s.c=m
return s},
q(a,b){a[v.arrayRti]=b
return a},
lC(a){var s,r=a.$S
if(r!=null){if(typeof r=="number")return A.ov(r)
s=a.$S()
return s}return null},
oI(a,b){var s
if(A.kK(b))if(a instanceof A.b9){s=A.lC(a)
if(s!=null)return s}return A.ao(a)},
ao(a){if(a instanceof A.v)return A.x(a)
if(Array.isArray(a))return A.aF(a)
return A.jX(J.b4(a))},
aF(a){var s=a[v.arrayRti],r=t.b
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
x(a){var s=a.$ti
return s!=null?s:A.jX(a)},
jX(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.nO(a,s)},
nO(a,b){var s=a instanceof A.b9?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.nv(v.typeUniverse,s.name)
b.$ccache=r
return r},
ov(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.fB(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
ou(a){return A.bN(A.x(a))},
oa(a){var s=a instanceof A.b9?A.lC(a):null
if(s!=null)return s
if(t.dm.b(a))return J.m9(a).a
if(Array.isArray(a))return A.aF(a)
return A.ao(a)},
bN(a){var s=a.w
return s==null?a.w=A.lm(a):s},
lm(a){var s,r,q=a.at,p=q.replace(/\*/g,"")
if(p===q)return a.w=new A.iP(a)
s=A.fB(v.typeUniverse,p,!0)
r=s.w
return r==null?s.w=A.lm(s):r},
ay(a){return A.bN(A.fB(v.typeUniverse,a,!1))},
nN(a){var s,r,q,p,o,n,m=this
if(m===t.K)return A.b2(m,a,A.nU)
if(!A.b6(m))if(!(m===t._))s=!1
else s=!0
else s=!0
if(s)return A.b2(m,a,A.nY)
s=m.x
if(s===7)return A.b2(m,a,A.nL)
if(s===1)return A.b2(m,a,A.ls)
r=s===6?m.y:m
q=r.x
if(q===8)return A.b2(m,a,A.nQ)
if(r===t.S)p=A.fM
else if(r===t.i||r===t.H)p=A.nT
else if(r===t.N)p=A.nW
else p=r===t.y?A.c8:null
if(p!=null)return A.b2(m,a,p)
if(q===9){o=r.y
if(r.z.every(A.oL)){m.r="$i"+o
if(o==="l")return A.b2(m,a,A.nS)
return A.b2(m,a,A.nX)}}else if(q===11){n=A.oo(r.y,r.z)
return A.b2(m,a,n==null?A.ls:n)}return A.b2(m,a,A.nJ)},
b2(a,b,c){a.b=c
return a.b(b)},
nM(a){var s,r=this,q=A.nI
if(!A.b6(r))if(!(r===t._))s=!1
else s=!0
else s=!0
if(s)q=A.nA
else if(r===t.K)q=A.ny
else{s=A.dq(r)
if(s)q=A.nK}r.a=q
return r.a(a)},
fN(a){var s,r=a.x
if(!A.b6(a))if(!(a===t._))if(!(a===t.aw))if(r!==7)if(!(r===6&&A.fN(a.y)))s=r===8&&A.fN(a.y)||a===t.P||a===t.T
else s=!0
else s=!0
else s=!0
else s=!0
else s=!0
return s},
nJ(a){var s=this
if(a==null)return A.fN(s)
return A.oK(v.typeUniverse,A.oI(a,s),s)},
nL(a){if(a==null)return!0
return this.y.b(a)},
nX(a){var s,r=this
if(a==null)return A.fN(r)
s=r.r
if(a instanceof A.v)return!!a[s]
return!!J.b4(a)[s]},
nS(a){var s,r=this
if(a==null)return A.fN(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.r
if(a instanceof A.v)return!!a[s]
return!!J.b4(a)[s]},
nI(a){var s,r=this
if(a==null){s=A.dq(r)
if(s)return a}else if(r.b(a))return a
A.ln(a,r)},
nK(a){var s=this
if(a==null)return a
else if(s.b(a))return a
A.ln(a,s)},
ln(a,b){throw A.b(A.nk(A.l2(a,A.a3(b,null))))},
l2(a,b){return A.bs(a)+": type '"+A.a3(A.oa(a),null)+"' is not a subtype of type '"+b+"'"},
nk(a){return new A.de("TypeError: "+a)},
W(a,b){return new A.de("TypeError: "+A.l2(a,b))},
nQ(a){var s=this,r=s.x===6?s.y:s
return r.y.b(a)||A.jJ(v.typeUniverse,r).b(a)},
nU(a){return a!=null},
ny(a){if(a!=null)return a
throw A.b(A.W(a,"Object"))},
nY(a){return!0},
nA(a){return a},
ls(a){return!1},
c8(a){return!0===a||!1===a},
jT(a){if(!0===a)return!0
if(!1===a)return!1
throw A.b(A.W(a,"bool"))},
pA(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.b(A.W(a,"bool"))},
pz(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.b(A.W(a,"bool?"))},
bL(a){if(typeof a=="number")return a
throw A.b(A.W(a,"double"))},
pC(a){if(typeof a=="number")return a
if(a==null)return a
throw A.b(A.W(a,"double"))},
pB(a){if(typeof a=="number")return a
if(a==null)return a
throw A.b(A.W(a,"double?"))},
fM(a){return typeof a=="number"&&Math.floor(a)===a},
t(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.b(A.W(a,"int"))},
pD(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.b(A.W(a,"int"))},
lh(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.b(A.W(a,"int?"))},
nT(a){return typeof a=="number"},
li(a){if(typeof a=="number")return a
throw A.b(A.W(a,"num"))},
pE(a){if(typeof a=="number")return a
if(a==null)return a
throw A.b(A.W(a,"num"))},
nx(a){if(typeof a=="number")return a
if(a==null)return a
throw A.b(A.W(a,"num?"))},
nW(a){return typeof a=="string"},
H(a){if(typeof a=="string")return a
throw A.b(A.W(a,"String"))},
pF(a){if(typeof a=="string")return a
if(a==null)return a
throw A.b(A.W(a,"String"))},
nz(a){if(typeof a=="string")return a
if(a==null)return a
throw A.b(A.W(a,"String?"))},
lv(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.a3(a[q],b)
return s},
o4(a,b){var s,r,q,p,o,n,m=a.y,l=a.z
if(""===m)return"("+A.lv(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.a3(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
lo(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=", "
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
if(l===9){p=A.od(a.y)
o=a.z
return o.length>0?p+("<"+A.lv(o,b)+">"):p}if(l===11)return A.o4(a,b)
if(l===12)return A.lo(a,b,null)
if(l===13)return A.lo(a.y,b,a.z)
if(l===14){n=a.y
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.d(b,n)
return b[n]}return"?"},
od(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
nw(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
nv(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.fB(a,b,!1)
else if(typeof m=="number"){s=m
r=A.dh(a,5,"#")
q=A.iR(s)
for(p=0;p<s;++p)q[p]=r
o=A.dg(a,b,q)
n[b]=o
return o}else return m},
nt(a,b){return A.lf(a.tR,b)},
ns(a,b){return A.lf(a.eT,b)},
fB(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.l9(A.l7(a,null,b,c))
r.set(b,s)
return s},
iQ(a,b,c){var s,r,q=b.Q
if(q==null)q=b.Q=new Map()
s=q.get(c)
if(s!=null)return s
r=A.l9(A.l7(a,b,c,!0))
q.set(c,r)
return r},
nu(a,b,c){var s,r,q,p=b.as
if(p==null)p=b.as=new Map()
s=c.at
r=p.get(s)
if(r!=null)return r
q=A.jP(a,b,c.x===10?c.z:[c])
p.set(s,q)
return q},
b0(a,b){b.a=A.nM
b.b=A.nN
return b},
dh(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.aj(null,null)
s.x=b
s.at=c
r=A.b0(a,s)
a.eC.set(c,r)
return r},
le(a,b,c){var s,r=b.at+"*",q=a.eC.get(r)
if(q!=null)return q
s=A.np(a,b,r,c)
a.eC.set(r,s)
return s},
np(a,b,c,d){var s,r,q
if(d){s=b.x
if(!A.b6(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new A.aj(null,null)
q.x=6
q.y=b
q.at=c
return A.b0(a,q)},
jR(a,b,c){var s,r=b.at+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.no(a,b,r,c)
a.eC.set(r,s)
return s},
no(a,b,c,d){var s,r,q,p
if(d){s=b.x
if(!A.b6(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&A.dq(b.y)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.aw)return t.P
else if(s===6){q=b.y
if(q.x===8&&A.dq(q.y))return q
else return A.kJ(a,b)}}p=new A.aj(null,null)
p.x=7
p.y=b
p.at=c
return A.b0(a,p)},
ld(a,b,c){var s,r=b.at+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.nm(a,b,r,c)
a.eC.set(r,s)
return s},
nm(a,b,c,d){var s,r,q
if(d){s=b.x
if(!A.b6(b))if(!(b===t._))r=!1
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return A.dg(a,"aq",[b])
else if(b===t.P||b===t.T)return t.eH}q=new A.aj(null,null)
q.x=8
q.y=b
q.at=c
return A.b0(a,q)},
nq(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.aj(null,null)
s.x=14
s.y=b
s.at=q
r=A.b0(a,s)
a.eC.set(q,r)
return r},
df(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].at
return s},
nl(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].at}return s},
dg(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.df(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.aj(null,null)
r.x=9
r.y=b
r.z=c
if(c.length>0)r.c=c[0]
r.at=p
q=A.b0(a,r)
a.eC.set(p,q)
return q},
jP(a,b,c){var s,r,q,p,o,n
if(b.x===10){s=b.y
r=b.z.concat(c)}else{r=c
s=b}q=s.at+(";<"+A.df(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.aj(null,null)
o.x=10
o.y=s
o.z=r
o.at=q
n=A.b0(a,o)
a.eC.set(q,n)
return n},
nr(a,b,c){var s,r,q="+"+(b+"("+A.df(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.aj(null,null)
s.x=11
s.y=b
s.z=c
s.at=q
r=A.b0(a,s)
a.eC.set(q,r)
return r},
lc(a,b,c){var s,r,q,p,o,n=b.at,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.df(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.df(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.nl(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.aj(null,null)
p.x=12
p.y=b
p.z=c
p.at=r
o=A.b0(a,p)
a.eC.set(r,o)
return o},
jQ(a,b,c,d){var s,r=b.at+("<"+A.df(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.nn(a,b,c,r,d)
a.eC.set(r,s)
return s},
nn(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.iR(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.x===1){r[p]=o;++q}}if(q>0){n=A.bk(a,b,r,0)
m=A.dn(a,c,r,0)
return A.jQ(a,n,m,c!==m)}}l=new A.aj(null,null)
l.x=13
l.y=b
l.z=c
l.at=d
return A.b0(a,l)},
l7(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
l9(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.nd(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.l8(a,r,l,k,!1)
else if(q===46)r=A.l8(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.bj(a.u,a.e,k.pop()))
break
case 94:k.push(A.nq(a.u,k.pop()))
break
case 35:k.push(A.dh(a.u,5,"#"))
break
case 64:k.push(A.dh(a.u,2,"@"))
break
case 126:k.push(A.dh(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.nf(a,k)
break
case 38:A.ne(a,k)
break
case 42:p=a.u
k.push(A.le(p,A.bj(p,a.e,k.pop()),a.n))
break
case 63:p=a.u
k.push(A.jR(p,A.bj(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.ld(p,A.bj(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.nc(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.la(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.nh(a.u,a.e,o)
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
return A.bj(a.u,a.e,m)},
nd(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
l8(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.x===10)o=o.y
n=A.nw(s,o.y)[p]
if(n==null)A.bm('No "'+p+'" in "'+A.mY(o)+'"')
d.push(A.iQ(s,o,n))}else d.push(p)
return m},
nf(a,b){var s,r=a.u,q=A.l6(a,b),p=b.pop()
if(typeof p=="string")b.push(A.dg(r,p,q))
else{s=A.bj(r,a.e,p)
switch(s.x){case 12:b.push(A.jQ(r,s,q,a.n))
break
default:b.push(A.jP(r,s,q))
break}}},
nc(a,b){var s,r,q,p,o,n=null,m=a.u,l=b.pop()
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
s=r}q=A.l6(a,b)
l=b.pop()
switch(l){case-3:l=b.pop()
if(s==null)s=m.sEA
if(r==null)r=m.sEA
p=A.bj(m,a.e,l)
o=new A.f3()
o.a=q
o.b=s
o.c=r
b.push(A.lc(m,p,o))
return
case-4:b.push(A.nr(m,b.pop(),q))
return
default:throw A.b(A.dz("Unexpected state under `()`: "+A.m(l)))}},
ne(a,b){var s=b.pop()
if(0===s){b.push(A.dh(a.u,1,"0&"))
return}if(1===s){b.push(A.dh(a.u,4,"1&"))
return}throw A.b(A.dz("Unexpected extended operation "+A.m(s)))},
l6(a,b){var s=b.splice(a.p)
A.la(a.u,a.e,s)
a.p=b.pop()
return s},
bj(a,b,c){if(typeof c=="string")return A.dg(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.ng(a,b,c)}else return c},
la(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.bj(a,b,c[s])},
nh(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.bj(a,b,c[s])},
ng(a,b,c){var s,r,q=b.x
if(q===10){if(c===0)return b.y
s=b.z
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.y
q=b.x}else if(c===0)return b
if(q!==9)throw A.b(A.dz("Indexed base must be an interface type"))
s=b.z
if(c<=s.length)return s[c-1]
throw A.b(A.dz("Bad index "+c+" for "+b.m(0)))},
oK(a,b,c){var s,r=A.mZ(b),q=r.get(c)
if(q!=null)return q
s=A.O(a,b,null,c,null)
r.set(c,s)
return s},
O(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(!A.b6(d))if(!(d===t._))s=!1
else s=!0
else s=!0
if(s)return!0
r=b.x
if(r===4)return!0
if(A.b6(b))return!1
if(b.x!==1)s=!1
else s=!0
if(s)return!0
q=r===14
if(q)if(A.O(a,c[b.y],c,d,e))return!0
p=d.x
s=b===t.P||b===t.T
if(s){if(p===8)return A.O(a,b,c,d.y,e)
return d===t.P||d===t.T||p===7||p===6}if(d===t.K){if(r===8)return A.O(a,b.y,c,d,e)
if(r===6)return A.O(a,b.y,c,d,e)
return r!==7}if(r===6)return A.O(a,b.y,c,d,e)
if(p===6){s=A.kJ(a,d)
return A.O(a,b,c,s,e)}if(r===8){if(!A.O(a,b.y,c,d,e))return!1
return A.O(a,A.jJ(a,b),c,d,e)}if(r===7){s=A.O(a,t.P,c,d,e)
return s&&A.O(a,b.y,c,d,e)}if(p===8){if(A.O(a,b,c,d.y,e))return!0
return A.O(a,b,c,A.jJ(a,d),e)}if(p===7){s=A.O(a,b,c,t.P,e)
return s||A.O(a,b,c,d.y,e)}if(q)return!1
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
if(!A.O(a,j,c,i,e)||!A.O(a,i,e,j,c))return!1}return A.lr(a,b.y,c,d.y,e)}if(p===12){if(b===t.e)return!0
if(s)return!1
return A.lr(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return A.nR(a,b,c,d,e)}if(o&&p===11)return A.nV(a,b,c,d,e)
return!1},
lr(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!A.O(a3,a4.y,a5,a6.y,a7))return!1
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
if(!A.O(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.O(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.O(a3,k[h],a7,g,a5))return!1}f=s.c
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
if(!A.O(a3,e[a+2],a7,g,a5))return!1
break}}for(;b<d;){if(f[b+1])return!1
b+=3}return!0},
nR(a,b,c,d,e){var s,r,q,p,o,n,m,l=b.y,k=d.y
for(;l!==k;){s=a.tR[l]
if(s==null)return!1
if(typeof s=="string"){l=s
continue}r=s[k]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.iQ(a,b,r[o])
return A.lg(a,p,null,c,d.z,e)}n=b.z
m=d.z
return A.lg(a,n,null,c,m,e)},
lg(a,b,c,d,e,f){var s,r,q,p=b.length
for(s=0;s<p;++s){r=b[s]
q=e[s]
if(!A.O(a,r,d,q,f))return!1}return!0},
nV(a,b,c,d,e){var s,r=b.z,q=d.z,p=r.length
if(p!==q.length)return!1
if(b.y!==d.y)return!1
for(s=0;s<p;++s)if(!A.O(a,r[s],c,q[s],e))return!1
return!0},
dq(a){var s,r=a.x
if(!(a===t.P||a===t.T))if(!A.b6(a))if(r!==7)if(!(r===6&&A.dq(a.y)))s=r===8&&A.dq(a.y)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
oL(a){var s
if(!A.b6(a))if(!(a===t._))s=!1
else s=!0
else s=!0
return s},
b6(a){var s=a.x
return s===2||s===3||s===4||s===5||a===t.X},
lf(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
iR(a){return a>0?new Array(a):v.typeUniverse.sEA},
aj:function aj(a,b){var _=this
_.a=a
_.b=b
_.w=_.r=_.e=_.d=_.c=null
_.x=0
_.at=_.as=_.Q=_.z=_.y=null},
f3:function f3(){this.c=this.b=this.a=null},
iP:function iP(a){this.a=a},
f0:function f0(){},
de:function de(a){this.a=a},
n4(){var s,r,q={}
if(self.scheduleImmediate!=null)return A.og()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(A.aG(new A.im(q),1)).observe(s,{childList:true})
return new A.il(q,s,r)}else if(self.setImmediate!=null)return A.oh()
return A.oi()},
n5(a){self.scheduleImmediate(A.aG(new A.io(t.M.a(a)),0))},
n6(a){self.setImmediate(A.aG(new A.ip(t.M.a(a)),0))},
n7(a){t.M.a(a)
A.nj(0,a)},
nj(a,b){var s=new A.iN()
s.cf(a,b)
return s},
fX(a,b){var s=A.dp(a,"error",t.K)
return new A.cf(s,b==null?A.jy(a):b)},
jy(a){var s
if(t.a.b(a)){s=a.gZ()
if(s!=null)return s}return B.Q},
mp(a,b){var s,r,q,p,o,n,m,l,k,j,i,h={},g=null,f=!1,e=b.h("F<l<0>>"),d=new A.F($.C,e)
h.a=null
h.b=0
s=A.l1("error")
r=A.l1("stackTrace")
q=new A.hh(h,g,f,d,s,r)
try{for(l=t.P,k=0,j=0;k<2;++k){p=a[k]
o=j
p.b2(new A.hg(h,o,d,g,f,s,r,b),q,l)
j=++h.b}if(j===0){l=d
l.af(A.q([],b.h("z<0>")))
return l}h.a=A.hy(j,null,!1,b.h("0?"))}catch(i){n=A.aH(i)
m=A.b5(i)
if(h.b===0||A.om(f)){l=n
r=m
A.dp(l,"error",t.K)
$.C!==B.d
if(r==null)r=A.jy(l)
e=new A.F($.C,e)
e.be(l,r)
return e}else{s.b=n
r.b=m}}return d},
l3(a,b){var s,r,q
for(s=t.c;r=a.a,(r&4)!==0;)a=s.a(a.c)
if((r&24)!==0){q=b.aj()
b.ae(a)
A.c3(b,q)}else{q=t.F.a(b.c)
b.bx(a)
a.aS(q)}},
na(a,b){var s,r,q,p={},o=p.a=a
for(s=t.c;r=o.a,(r&4)!==0;o=a){a=s.a(o.c)
p.a=a}if((r&24)===0){q=t.F.a(b.c)
b.bx(o)
p.a.aS(q)
return}if((r&16)===0&&b.c==null){b.ae(o)
return}b.a^=2
A.bM(null,null,b.b,t.M.a(new A.iz(p,b)))},
c3(a,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c={},b=c.a=a
for(s=t.t,r=t.F,q=t.b9;!0;){p={}
o=b.a
n=(o&16)===0
m=!n
if(a0==null){if(m&&(o&1)===0){l=s.a(b.c)
A.fO(l.a,l.b)}return}p.a=a0
k=a0.a
for(b=a0;k!=null;b=k,k=j){b.a=null
A.c3(c.a,b)
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
A.fO(i.a,i.b)
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
continue}else A.l3(b,e)
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
o5(a,b){var s
if(t.C.b(a))return b.bQ(a,t.z,t.K,t.l)
s=t.v
if(s.b(a))return s.a(a)
throw A.b(A.kh(a,"onError",u.c))},
o_(){var s,r
for(s=$.c9;s!=null;s=$.c9){$.dm=null
r=s.b
$.c9=r
if(r==null)$.dl=null
s.a.$0()}},
o9(){$.jY=!0
try{A.o_()}finally{$.dm=null
$.jY=!1
if($.c9!=null)$.k6().$1(A.lB())}},
lx(a){var s=new A.eQ(a),r=$.dl
if(r==null){$.c9=$.dl=s
if(!$.jY)$.k6().$1(A.lB())}else $.dl=r.b=s},
o8(a){var s,r,q,p=$.c9
if(p==null){A.lx(a)
$.dm=$.dl
return}s=new A.eQ(a)
r=$.dm
if(r==null){s.b=p
$.c9=$.dm=s}else{q=r.b
s.b=q
$.dm=r.b=s
if(q==null)$.dl=s}},
k5(a){var s,r=null,q=$.C
if(B.d===q){A.bM(r,r,B.d,a)
return}s=!1
if(s){A.bM(r,r,q,t.M.a(a))
return}A.bM(r,r,q,t.M.a(q.bC(a)))},
hX(a){return new A.aZ(null,null,a.h("aZ<0>"))},
lw(a){return},
l0(a,b,c){var s=b==null?A.oj():b
return t.a7.v(c).h("1(2)").a(s)},
n8(a,b){if(b==null)b=A.ol()
if(t.da.b(b))return a.bQ(b,t.z,t.K,t.l)
if(t.d5.b(b))return t.v.a(b)
throw A.b(A.aJ("handleError callback must take either an Object (the error), or both an Object (the error) and a StackTrace.",null))},
o0(a){},
o2(a,b){A.fO(a,b)},
o1(){},
o7(a,b,c,d){var s,r,q,p,o,n
try{b.$1(a.$0())}catch(n){s=A.aH(n)
r=A.b5(n)
t.K.a(s)
t.gO.a(r)
q=null
if(q==null)c.$2(s,r)
else{p=J.m6(q)
o=q.gZ()
c.$2(p,o)}}},
nD(a,b,c,d){var s,r,q=a.W(0),p=$.jl()
if(q!==p){s=t.O.a(new A.iT(b,c,d))
p=q.$ti
r=$.C
q.aG(new A.bK(new A.F(r,p),8,s,null,p.h("@<1>").v(p.c).h("bK<1,2>")))}else b.L(c,d)},
nE(a,b){return new A.iS(a,b)},
fO(a,b){A.o8(new A.j_(a,b))},
lt(a,b,c,d,e){var s,r=$.C
if(r===c)return d.$0()
$.C=c
s=r
try{r=d.$0()
return r}finally{$.C=s}},
lu(a,b,c,d,e,f,g){var s,r=$.C
if(r===c)return d.$1(e)
$.C=c
s=r
try{r=d.$1(e)
return r}finally{$.C=s}},
o6(a,b,c,d,e,f,g,h,i){var s,r=$.C
if(r===c)return d.$2(e,f)
$.C=c
s=r
try{r=d.$2(e,f)
return r}finally{$.C=s}},
bM(a,b,c,d){t.M.a(d)
if(B.d!==c)d=c.bC(d)
A.lx(d)},
im:function im(a){this.a=a},
il:function il(a,b,c){this.a=a
this.b=b
this.c=c},
io:function io(a){this.a=a},
ip:function ip(a){this.a=a},
iN:function iN(){},
iO:function iO(a,b){this.a=a
this.b=b},
cf:function cf(a,b){this.a=a
this.b=b},
S:function S(a,b){this.a=a
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
cQ:function cQ(){},
aZ:function aZ(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.r=_.e=_.d=null
_.$ti=c},
hh:function hh(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hg:function hg(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
cR:function cR(){},
bJ:function bJ(a,b){this.a=a
this.$ti=b},
bK:function bK(a,b,c,d,e){var _=this
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
eQ:function eQ(a){this.a=a
this.b=null},
be:function be(){},
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
cS:function cS(){},
cT:function cT(){},
c1:function c1(){},
iq:function iq(a){this.a=a},
c6:function c6(){},
bh:function bh(){},
cU:function cU(a,b){this.b=a
this.a=null
this.$ti=b},
eV:function eV(){},
d8:function d8(a){var _=this
_.a=0
_.c=_.b=null
_.$ti=a},
iJ:function iJ(a,b){this.a=a
this.b=b},
c2:function c2(a,b){var _=this
_.a=1
_.b=a
_.c=null
_.$ti=b},
iT:function iT(a,b,c){this.a=a
this.b=b
this.c=c},
iS:function iS(a,b){this.a=a
this.b=b},
dj:function dj(){},
j_:function j_(a,b){this.a=a
this.b=b},
fl:function fl(){},
iL:function iL(a,b){this.a=a
this.b=b},
iM:function iM(a,b,c){this.a=a
this.b=b
this.c=c},
l4(a,b){var s=a[b]
return s===a?null:s},
l5(a,b,c){if(c==null)a[b]=a
else a[b]=c},
nb(){var s=Object.create(null)
A.l5(s,"<non-identifier-key>",s)
delete s["<non-identifier-key>"]
return s},
e0(a,b,c){return b.h("@<0>").v(c).h("kz<1,2>").a(A.oq(a,new A.aP(b.h("@<0>").v(c).h("aP<1,2>"))))},
hx(a,b){return new A.aP(a.h("@<0>").v(b).h("aP<1,2>"))},
hA(a){var s,r={}
if(A.k3(a))return"{...}"
s=new A.cL("")
try{B.a.n($.ab,a)
s.a+="{"
r.a=!0
J.fU(a,new A.hB(r,s))
s.a+="}"}finally{if(0>=$.ab.length)return A.d($.ab,-1)
$.ab.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
cY:function cY(){},
d0:function d0(a){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=a},
cZ:function cZ(a,b){this.a=a
this.$ti=b},
d_:function d_(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
e:function e(){},
y:function y(){},
hB:function hB(a,b){this.a=a
this.b=b},
di:function di(){},
bU:function bU(){},
cO:function cO(){},
c7:function c7(){},
o3(a,b){var s,r,q,p=null
try{p=JSON.parse(a)}catch(r){s=A.aH(r)
q=String(s)
throw A.b(new A.he(q))}q=A.iW(p)
return q},
iW(a){var s
if(a==null)return null
if(typeof a!="object")return a
if(Object.getPrototypeOf(a)!==Array.prototype)return new A.f7(a,Object.create(null))
for(s=0;s<a.length;++s)a[s]=A.iW(a[s])
return a},
f7:function f7(a,b){this.a=a
this.b=b
this.c=null},
f8:function f8(a){this.a=a},
dG:function dG(){},
dI:function dI(){},
dZ:function dZ(){},
hs:function hs(a){this.a=a},
kq(a,b){return A.mN(a,b,null)},
mm(a,b){a=A.b(a)
if(a==null)a=t.K.a(a)
a.stack=b.m(0)
throw a
throw A.b("unreachable")},
kn(a,b){var s
if(Math.abs(a)<=864e13)s=!1
else s=!0
if(s)A.bm(A.aJ("DateTime is outside valid range: "+a,null))
A.dp(b,"isUtc",t.y)
return new A.ck(a,b)},
hy(a,b,c,d){var s,r=c?J.kw(a,d):J.mx(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
jF(a,b){var s,r=A.q([],b.h("z<0>"))
for(s=J.b7(a);s.A();)B.a.n(r,b.a(s.gC(s)))
return r},
e1(a,b){var s=A.mz(a,b)
return s},
mz(a,b){var s,r
if(Array.isArray(a))return A.q(a.slice(0),b.h("z<0>"))
s=A.q([],b.h("z<0>"))
for(r=J.b7(a);r.A();)B.a.n(s,r.gC(r))
return s},
kP(a,b,c){var s=J.b7(b)
if(!s.A())return a
if(c.length===0){do a+=A.m(s.gC(s))
while(s.A())}else{a+=A.m(s.gC(s))
for(;s.A();)a=a+c+A.m(s.gC(s))}return a},
kD(a,b){return new A.ee(a,b.gd5(),b.gd8(),b.gd6())},
mk(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
ml(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
dJ(a){if(a>=10)return""+a
return"0"+a},
bs(a){if(typeof a=="number"||A.c8(a)||a==null)return J.dw(a)
if(typeof a=="string")return JSON.stringify(a)
return A.mV(a)},
mn(a,b){A.dp(a,"error",t.K)
A.dp(b,"stackTrace",t.l)
A.mm(a,b)},
dz(a){return new A.ce(a)},
aJ(a,b){return new A.aI(!1,null,b,a)},
kh(a,b,c){return new A.aI(!0,a,b,c)},
kH(a,b){return new A.cI(null,null,!0,a,b,"Value not in range")},
kG(a,b,c,d,e){return new A.cI(b,c,!0,a,d,"Invalid value")},
P(a,b,c,d){return new A.dU(b,!0,a,d,"Index out of range")},
D(a){return new A.eJ(a)},
jL(a){return new A.eH(a)},
I(a){return new A.bH(a)},
Y(a){return new A.dH(a)},
dL(a){return new A.iv(a)},
mw(a,b,c){var s,r
if(A.k3(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.q([],t.s)
B.a.n($.ab,a)
try{A.nZ(a,s)}finally{if(0>=$.ab.length)return A.d($.ab,-1)
$.ab.pop()}r=A.kP(b,t.d.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
kv(a,b,c){var s,r
if(A.k3(a))return b+"..."+c
s=new A.cL(b)
B.a.n($.ab,a)
try{r=s
r.a=A.kP(r.a,a,", ")}finally{if(0>=$.ab.length)return A.d($.ab,-1)
$.ab.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
nZ(a,b){var s,r,q,p,o,n,m,l=a.gG(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.A())return
s=A.m(l.gC(l))
B.a.n(b,s)
k+=s.length+2;++j}if(!l.A()){if(j<=5)return
if(0>=b.length)return A.d(b,-1)
r=b.pop()
if(0>=b.length)return A.d(b,-1)
q=b.pop()}else{p=l.gC(l);++j
if(!l.A()){if(j<=4){B.a.n(b,A.m(p))
return}r=A.m(p)
if(0>=b.length)return A.d(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gC(l);++j
for(;l.A();p=o,o=n){n=l.gC(l);++j
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
kE(a,b,c,d){var s=B.b.gu(a)
b=B.b.gu(b)
c=B.b.gu(c)
d=B.b.gu(d)
d=A.kQ(A.cM(A.cM(A.cM(A.cM($.lX(),s),b),c),d))
return d},
hI:function hI(a,b){this.a=a
this.b=b},
ck:function ck(a,b){this.a=a
this.b=b},
is:function is(){},
E:function E(){},
ce:function ce(a){this.a=a},
aX:function aX(){},
aI:function aI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cI:function cI(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
dU:function dU(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
ee:function ee(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eJ:function eJ(a){this.a=a},
eH:function eH(a){this.a=a},
bH:function bH(a){this.a=a},
dH:function dH(a){this.a=a},
eh:function eh(){},
cK:function cK(){},
iv:function iv(a){this.a=a},
he:function he(a){this.a=a},
f:function f(){},
G:function G(){},
v:function v(){},
ft:function ft(){},
cL:function cL(a){this.a=a},
op(){var s=document
s.toString
return s},
jz(a,b){var s=document.createElement("canvas")
s.toString
if(b!=null)B.e.sP(s,b)
if(a!=null)B.e.sN(s,a)
return s},
n9(a,b){if(b.parentNode===a){a.removeChild(b).toString
return!0}return!1},
ko(a){t.aS.a(a)
return"wheel"},
jA(a,b){var s,r,q,p,o=a===b
if(!o){s=b.tagName
s.toString
r=s==="HTML"}else r=!0
if(a==null||o){if(r)return new A.bb(0,0,t.x)
throw A.b(A.aJ("Specified element is not a transitive offset parent of this element.",null))}q=A.jA(a.offsetParent,b)
s=a.offsetLeft
s.toString
s=B.b.U(s)
p=a.offsetTop
p.toString
return new A.bb(q.a+s,q.b+B.b.U(p),t.x)},
mq(a){return A.kr(a,null,null,null).b1(new A.hl(),t.N)},
kr(a,b,c,d){var s,r,q=new A.F($.C,t.ao),p=new A.bJ(q,t.bj),o=new XMLHttpRequest()
o.toString
B.R.d7(o,"GET",a,!0)
if(c!=null)o.responseType=c
s=t.gx
r=t.E
A.V(o,"load",s.a(new A.hm(o,p)),!1,r)
A.V(o,"error",s.a(p.gcN()),!1,r)
o.send()
return q},
mv(a){var s=new IntersectionObserver(A.aG(a,2))
s.toString
return s},
V(a,b,c,d,e){var s=c==null?null:A.k0(new A.it(c),t.A)
s=new A.cX(a,b,s,!1,e.h("cX<0>"))
s.bz()
return s},
nH(a){var s
if(t.e5.b(a))return a
s=new A.ij([],[])
s.c=!0
return s.b4(a)},
k0(a,b){var s=$.C
if(s===B.d)return a
return s.cM(a,b)},
n:function n(){},
fW:function fW(){},
dx:function dx(){},
dy:function dy(){},
bp:function bp(){},
bq:function bq(){},
br:function br(){},
az:function az(){},
h4:function h4(){},
A:function A(){},
cj:function cj(){},
h5:function h5(){},
ap:function ap(){},
aL:function aL(){},
h6:function h6(){},
h7:function h7(){},
h8:function h8(){},
aM:function aM(){},
aN:function aN(){},
bQ:function bQ(){},
aO:function aO(){},
ha:function ha(){},
cl:function cl(){},
cm:function cm(){},
dK:function dK(){},
hb:function hb(){},
h:function h(){},
j:function j(){},
c:function c(){},
Z:function Z(){},
dM:function dM(){},
dN:function dN(){},
bR:function bR(){},
bS:function bS(){},
dO:function dO(){},
a4:function a4(){},
hk:function hk(){},
bu:function bu(){},
ar:function ar(){},
hl:function hl(){},
hm:function hm(a,b){this.a=a
this.b=b},
bv:function bv(){},
cp:function cp(){},
dT:function dT(){},
bw:function bw(){},
ho:function ho(){},
aS:function aS(){},
hz:function hz(){},
bF:function bF(){},
hF:function hF(){},
e2:function e2(){},
hG:function hG(a){this.a=a},
e3:function e3(){},
hH:function hH(a){this.a=a},
a5:function a5(){},
e4:function e4(){},
a_:function a_(){},
r:function r(){},
cD:function cD(){},
a6:function a6(){},
ej:function ej(){},
au:function au(){},
eo:function eo(){},
hQ:function hQ(a){this.a=a},
er:function er(){},
a1:function a1(){},
et:function et(){},
a7:function a7(){},
eu:function eu(){},
a8:function a8(){},
ew:function ew(){},
hW:function hW(a){this.a=a},
U:function U(){},
a2:function a2(){},
R:function R(){},
eA:function eA(){},
eB:function eB(){},
i4:function i4(){},
a9:function a9(){},
eD:function eD(){},
i5:function i5(){},
aD:function aD(){},
ib:function ib(){},
eL:function eL(){},
eM:function eM(){},
bf:function bf(){},
bg:function bg(){},
aE:function aE(){},
eS:function eS(){},
cV:function cV(){},
f4:function f4(){},
d3:function d3(){},
fp:function fp(){},
fu:function fu(){},
jB:function jB(a,b){this.a=a
this.$ti=b},
cW:function cW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
f_:function f_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
cX:function cX(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
it:function it(a){this.a=a},
iu:function iu(a){this.a=a},
jO:function jO(a){this.$ti=a},
o:function o(){},
co:function co(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
eT:function eT(){},
eW:function eW(){},
eX:function eX(){},
eY:function eY(){},
eZ:function eZ(){},
f1:function f1(){},
f2:function f2(){},
f5:function f5(){},
f6:function f6(){},
fb:function fb(){},
fc:function fc(){},
fd:function fd(){},
fe:function fe(){},
ff:function ff(){},
fg:function fg(){},
fj:function fj(){},
fk:function fk(){},
fm:function fm(){},
d9:function d9(){},
da:function da(){},
fn:function fn(){},
fo:function fo(){},
fq:function fq(){},
fv:function fv(){},
fw:function fw(){},
dc:function dc(){},
dd:function dd(){},
fx:function fx(){},
fy:function fy(){},
fC:function fC(){},
fD:function fD(){},
fE:function fE(){},
fF:function fF(){},
fG:function fG(){},
fH:function fH(){},
fI:function fI(){},
fJ:function fJ(){},
fK:function fK(){},
fL:function fL(){},
lk(a){var s,r,q
if(a==null)return a
if(typeof a=="string"||typeof a=="number"||A.c8(a))return a
if(A.lI(a))return A.bl(a)
s=Array.isArray(a)
s.toString
if(s){r=[]
q=0
while(!0){s=a.length
s.toString
if(!(q<s))break
r.push(A.lk(a[q]));++q}return r}return a},
bl(a){var s,r,q,p,o,n
if(a==null)return null
s=A.hx(t.N,t.z)
r=Object.getOwnPropertyNames(a)
for(q=r.length,p=0;p<r.length;r.length===q||(0,A.aa)(r),++p){o=r[p]
n=o
n.toString
s.l(0,n,A.lk(a[o]))}return s},
lj(a){var s
if(a==null)return a
if(typeof a=="string"||typeof a=="number"||A.c8(a))return a
if(t.f.b(a))return A.lD(a)
if(t.j.b(a)){s=[]
J.fU(a,new A.iV(s))
a=s}return a},
lD(a){var s={}
J.fU(a,new A.j4(s))
return s},
lI(a){var s=Object.getPrototypeOf(a),r=s===Object.prototype
r.toString
if(!r){r=s===null
r.toString}else r=!0
return r},
ii:function ii(){},
ik:function ik(a,b){this.a=a
this.b=b},
iV:function iV(a){this.a=a},
j4:function j4(a){this.a=a},
ij:function ij(a,b){this.a=a
this.b=b
this.c=!1},
cu:function cu(){},
nB(a,b,c,d){var s,r,q
A.jT(b)
t.j.a(d)
if(b){s=[c]
B.a.V(s,d)
d=s}r=t.z
q=A.jF(J.kg(d,A.oM(),r),r)
return A.jU(A.kq(t.Z.a(a),q))},
my(a){return new A.hr(new A.d0(t.dx)).$1(a)},
nF(a){return a},
jV(a,b,c){var s
try{if(Object.isExtensible(a)&&!Object.prototype.hasOwnProperty.call(a,b)){Object.defineProperty(a,b,{value:c})
return!0}}catch(s){}return!1},
lq(a,b){if(Object.prototype.hasOwnProperty.call(a,b))return a[b]
return null},
jU(a){if(a==null||typeof a=="string"||typeof a=="number"||A.c8(a))return a
if(a instanceof A.aQ)return a.a
if(A.lH(a))return a
if(t.Q.b(a))return a
if(a instanceof A.ck)return A.a0(a)
if(t.Z.b(a))return A.lp(a,"$dart_jsFunction",new A.iX())
return A.lp(a,"_$dart_jsObject",new A.iY($.k9()))},
lp(a,b,c){var s=A.lq(a,b)
if(s==null){s=c.$1(a)
A.jV(a,b,s)}return s},
ll(a){if(a==null||typeof a=="string"||typeof a=="number"||typeof a=="boolean")return a
else if(a instanceof Object&&A.lH(a))return a
else if(a instanceof Object&&t.Q.b(a))return a
else if(a instanceof Date)return A.kn(A.t(a.getTime()),!1)
else if(a.constructor===$.k9())return a.o
else return A.k_(a)},
k_(a){if(typeof a=="function")return A.jW(a,$.fR(),new A.j0())
if(a instanceof Array)return A.jW(a,$.k7(),new A.j1())
return A.jW(a,$.k7(),new A.j2())},
jW(a,b,c){var s=A.lq(a,b)
if(s==null||!(a instanceof Object)){s=c.$1(a)
A.jV(a,b,s)}return s},
hr:function hr(a){this.a=a},
iX:function iX(){},
iY:function iY(a){this.a=a},
j0:function j0(){},
j1:function j1(){},
j2:function j2(){},
aQ:function aQ(a){this.a=a},
cs:function cs(a){this.a=a},
bA:function bA(a,b){this.a=a
this.$ti=b},
c4:function c4(){},
nG(a){var s,r=a.$dart_jsFunction
if(r!=null)return r
s=function(b,c){return function(){return b(c,Array.prototype.slice.apply(arguments))}}(A.nC,a)
s[$.fR()]=a
a.$dart_jsFunction=s
return s},
nC(a,b){t.j.a(b)
return A.kq(t.Z.a(a),b)},
ly(a,b){if(typeof a=="function")return a
else return b.a(A.nG(a))},
oQ(a,b){var s=new A.F($.C,b.h("F<0>")),r=new A.bJ(s,b.h("bJ<0>"))
a.then(A.aG(new A.jj(r,b),1),A.aG(new A.jk(r),1))
return s},
jj:function jj(a,b){this.a=a
this.b=b},
jk:function jk(a){this.a=a},
hJ:function hJ(a){this.a=a},
bb:function bb(a,b,c){this.a=a
this.b=b
this.$ti=c},
af:function af(){},
e_:function e_(){},
ah:function ah(){},
ef:function ef(){},
hL:function hL(){},
ey:function ey(){},
am:function am(){},
eE:function eE(){},
f9:function f9(){},
fa:function fa(){},
fh:function fh(){},
fi:function fi(){},
fr:function fr(){},
fs:function fs(){},
fz:function fz(){},
fA:function fA(){},
fY:function fY(){},
dA:function dA(){},
fZ:function fZ(a){this.a=a},
dB:function dB(){},
b8:function b8(){},
eg:function eg(){},
eR:function eR(){},
dC:function dC(){},
aK:function aK(){},
dQ:function dQ(){},
ek:function ek(){},
en:function en(){},
cJ:function cJ(){},
bY:function bY(){},
es:function es(){},
eC:function eC(){},
eG:function eG(){},
fV:function fV(a,b,c,d){var _=this
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
dR:function dR(a){var _=this
_.a=a
_.f=_.e=_.d=_.c=_.b=0
_.x=_.w=_.r=null},
hf:function hf(){},
kB(a){var s=new A.aV(A.q([0,0,0,0,0,0,0,0,0],t.n))
s.c5(a)
return s},
kC(){return new A.bE(A.q([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t.n))},
jH(){return new A.aB(0,0)},
mK(a,b,c){return new A.ai(a,b,c)},
mW(a,b,c,d){return new A.cH(new A.aB(c,d))},
bG(){return new A.av(0,0,0,1)},
bd(a,b){var s=b/2,r=Math.sin(s),q=a.a,p=a.b,o=a.c,n=Math.sqrt(q*q+p*p+o*o)
if(n===0)return A.bG()
return new A.av(q/n*r,p/n*r,o/n*r,Math.cos(s))},
jI(a){var s=new A.av(0,0,0,0)
s.c6(a)
return s},
el(a,b){return new A.av(a.a*b,a.b*b,a.c*b,a.d*b)},
em(a,b,c){var s,r,q,p=a.a,o=b.a,n=a.b,m=b.b,l=a.c,k=b.c,j=a.d,i=b.d,h=p*o+n*m+l*k+j*i
if(h<0){h=-h
s=A.el(b,-1)}else s=b
if(h>0.9995){p=a.q(0,A.el(new A.av(o-p,m-n,k-l,i-j),c))
o=p.a
n=p.b
m=p.c
l=p.d
return A.el(p,1/Math.sqrt(o*o+n*n+m*m+l*l))}r=Math.acos(h)
q=Math.sin(r)
p=Math.sin((1-c)*r)
o=Math.sin(c*r)
return A.el(a,p/q).q(0,A.el(s,o/q))},
i6(){return new A.aW(A.q([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t.n))},
kU(a,b,c){return new A.J(a,b,c)},
kW(){return new A.J(0,0,0)},
jM(a){var s=new A.J(0,0,0),r=a.a,q=a.b,p=a.c,o=Math.sqrt(r*r+q*q+p*p)
s.a=a.a/o
s.b=a.b/o
s.c=a.c/o
return s},
kV(a,b){var s=a.b,r=b.c,q=a.c,p=b.b,o=b.a,n=a.a
return new A.J(s*r-q*p,q*o-n*r,n*p-s*o)},
dS:function dS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aV:function aV(a){this.a=a},
hC:function hC(a){this.a=a},
bE:function bE(a){this.a=a},
aB:function aB(a,b){this.a=a
this.b=b},
ai:function ai(a,b,c){this.a=a
this.b=b
this.c=c},
cH:function cH(a){this.b=a},
av:function av(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hO:function hO(a){this.a=a},
cN:function cN(a){this.a=a},
aW:function aW(a){this.a=a},
J:function J(a,b,c){this.a=a
this.b=b
this.c=c},
hi:function hi(){},
hj:function hj(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
aR:function aR(a){this.a=a},
ad:function ad(a){this.a=a},
ct:function ct(a){this.a=a},
eO:function eO(a){this.a=a},
c5:function c5(a,b){this.a=a
this.b=b},
ht:function ht(a,b){this.a=a
this.b=b},
hu:function hu(a){this.a=a},
hv:function hv(a){this.a=a},
b_:function b_(a,b){this.a=a
this.b=b},
e5:function e5(a,b,c){this.a=a
this.b=b
this.c=c},
mb(a,b,c,d,e){return new A.bo(a,b,c,d,e)},
h1(){return new A.h0()},
kX(a){return new A.id(a)},
jG(a){return new A.hD(a)},
eq(a){return new A.hR(a)},
ie(){return new A.cP(A.q([new A.bo("aPositionMapping",0,2,8,0)],t.U))},
n3(){var s,r,q,p=$.jN
if(p==null)try{p=A.jz(null,null)
s=A.e0(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],t.N,t.z)
r=B.e.az(p,"webgl",s)
if(r==null)r=B.e.az(p,"experimental-webgl",s)
t.eV.a(r)
$.jN=!0
p=!0}catch(q){$.jN=!1
p=!1}p.toString
return p},
n2(a,b){var s,r,q,p,o,n,m=b.getSupportedExtensions()
if(m==null)return
s=A.q([],t.s)
for(r=a.e,q=r.length,p=J.ax(m),o=0;o<r.length;r.length===q||(0,A.aa)(r),++o){n=r[o]
if(!p.bH(m,n))B.a.n(s,n)}if(s.length!==0)throw A.b(A.dL("Invalid webgl extensions\n"+A.m(s)))},
kM(){return u.b},
kL(){return"    #version 300 es\n    precision highp float;\n\n    const float kDepthDelta = 0.0078125;\n\n    in vec2 vMapping;\n    out vec4 outColor;\n\n    uniform vec4 uViewBound;\n    uniform sampler2D uDepthDataSampler;\n    uniform sampler2D uOcclusionSampler;\n\n    void main()\n    {\n      vec4 depthData = texture(uDepthDataSampler, vMapping);\n      float range = (max(abs(depthData.x), abs(depthData.y)) + kDepthDelta) * 1.5;\n\n      vec2 occl = vec2(0.0, 1.0);\n      vec3 blur = vec3(0.0);\n      \n      for (int j = 0; j < 2; j++)\n      {\n        float y = float(j * 2) - 0.5;\n        for (int i = 0; i < 2; i++)\n        {\n          float x = float(i * 2) - 0.5;\n\n          vec2 sampling = vMapping + vec2(x, y) * uViewBound.zw;\n\n          occl.x = texture(uOcclusionSampler, sampling).x;\n          blur.z += occl.x;\n\n          float depth = texture(uDepthDataSampler, sampling).z;\n          if (abs(depth - depthData.z) < range) blur.xy += occl;\n        }\n      }\n\n      float occlusion = (blur.y > 0.0) ? blur.x / blur.y : blur.z * 0.25;\n      outColor = vec4(occlusion);\n    }\n  "},
kO(){return u.b},
kN(){return"    #version 300 es\n    precision highp float;\n\n\t  const float kTangentTau = 0.03125;\n    const float dx[4] = float[4](0.1, 0.0, -0.3, 0.0);\n    const float dy[4] = float[4](0.0, 0.2, 0.0, -0.4);\n\n    in vec2 vMapping;\n    out vec4 outColor;\n\n    uniform vec2 uData;\n    uniform vec4 uViewBound;\n    uniform sampler2D uDepthDataSampler;\n    uniform sampler2D uSamplingRotationSampler;\n\n    void main()\n    {\n      float vectorScale = uData.x;\n      float intensity = uData.y;\n\n      vec4 depthData = texture(uDepthDataSampler, vMapping);\n\n      float scale = vectorScale * depthData.z;\n      vec3 normal = normalize(vec3(depthData.xy, -scale));\n      scale = 1.0 / scale;\n\n      vec2 rot = texture(uSamplingRotationSampler, vMapping * uViewBound.xy * 0.25).xy;\n      float occlusion = 0.0;\n      float weight = 0.0;\n  \n      for (int i = 0; i < 4; i++)\n      {\n        vec3 v;\n        v.x = rot.x * dx[i] - rot.y * dy[i];\n        v.y = rot.y * dx[i] + rot.x * dy[i];\n\n        vec2 sampling = vMapping + ( v.xy * scale * uViewBound.zw);\n        v.z = texture(uDepthDataSampler, sampling).z - depthData.z;\n\n        float d = dot(normal, v);\n        float w = clamp(1.0 - d * 0.5, 0.0, 1.0);\n        float c = clamp(d * inversesqrt(dot(v, v)) - kTangentTau, 0.0, 1.0);\n\n        occlusion += w - w * sqrt(1.0 - c * c);\n        weight += w;\n      }\n\n      outColor = vec4(1.0 - occlusion * intensity / max(weight, 0.0001), 0, 0, 0);\n    }\n  "},
kS(){return"    precision highp float;\n    \n    attribute vec2 aPositionMapping;\n\n    uniform mat3 uPvwlTransform;\n\n    varying vec2 vMapping;\n\n    void main(void)\n    {\n      vMapping = aPositionMapping;\n\n      vec3 position = uPvwlTransform * vec3(aPositionMapping, 1.0);\n      gl_Position = vec4(position.xy, 0.0, 1.0);\n    }\n  "},
kR(){return"    precision highp float;\n\n    uniform sampler2D uSampler;\n\n    varying vec2 vMapping;\n\n    void main(void)\n    {\n      gl_FragColor = texture2D(uSampler, vMapping);\n    }\n  "},
kZ(){return"    #version 300 es\n    precision highp float;\n\n    in vec3 aPosition;\n    out float vViewDepth;\n\n    uniform mat4 uPvwlTransform;\n\n    void main()\n    {\n      gl_Position = uPvwlTransform * vec4(aPosition, 1.0);\n      vViewDepth = gl_Position.w;\n    }\n  "},
kY(){return"    #version 300 es\n    precision highp float;\n    in float vViewDepth;\n    out vec4 outColor;\n\n    void main()\n    {\n      outColor = vec4(dFdx(vViewDepth), dFdy(vViewDepth), vViewDepth, 0);\n    }\n  "},
h3:function h3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bo:function bo(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
h0:function h0(){},
hn:function hn(a,b,c){this.a=a
this.b=b
this.c=c},
eK:function eK(a){this.b=a},
h2:function h2(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
h9:function h9(){},
dP:function dP(){},
h_:function h_(){var _=this
_.b=_.a=0
_.f=_.e=_.d=_.c=null},
hd:function hd(){var _=this
_.b=_.a=0
_.f=_.e=_.d=_.c=null},
hc:function hc(){var _=this
_.b=_.a=0
_.f=_.e=_.d=_.c=null},
cF:function cF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null},
bX:function bX(){var _=this
_.d=_.c=_.b=_.a=null},
c0:function c0(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.f=_.e=_.d=null},
ia:function ia(){},
ic:function ic(a){this.a=a
this.c=this.b=null},
id:function id(a){this.a=a
this.c=this.b=null},
hD:function hD(a){this.a=a
this.c=this.b=null},
hE:function hE(a){this.a=a
this.c=this.b=null},
hR:function hR(a){this.a=a
this.c=this.b=null},
cP:function cP(a){this.a=a},
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
eN:function eN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=!1
_.f=null},
oO(){A.mp(A.q([A.mq("media/gltf/invaders.gltf"),A.kr("media/gltf/invaders.bin",null,"arraybuffer",null)],t.aJ),t.K).b1(new A.jf(),t.P)},
ky(){var s,r,q,p=$.k8()
p.l(0,"Report",null)
p.l(0,"Kill",null)
for(p=$.Q.length,s=0;s<$.Q.length;$.Q.length===p||(0,A.aa)($.Q),++s)$.Q[s].W(0)
B.a.S($.Q)
$.jZ=-1
A.kp()
p=$.jp()
p.children.toString
r=$.ds()
q=r.a
A.n9(p,q)
r.f.unobserve(q)
r.f.disconnect()
r=$.jo()
q=window
q.toString
p=r.x
p.toString
B.i.bm(q)
q.cancelAnimationFrame(p)
r.r.ao(0)
r.w.ao(0)
$.kb().E()
$.kc().E()},
mX(){var s=A.e0(["status",$.jZ,"fps",$.jo().gcZ(),"size","288"],t.N,t.K)
return A.k_(A.my(s))},
kI(){var s,r,q=$.ds(),p=q.a,o=document,n=o.documentElement
n.toString
B.b.U(A.jA(p,n).a)
o=o.documentElement
o.toString
B.b.U(A.jA(p,o).b)
o=p.clientWidth
o.toString
n=window.devicePixelRatio
n.toString
n=B.b.U(o*n)
o=p.clientHeight
o.toString
s=window.devicePixelRatio
s.toString
q.b=new A.cH(new A.aB(n,B.b.U(o*s)))
B.e.sP(p,n)
B.e.sN(p,A.t(q.b.b.b))
q.f.takeRecords().toString
q=q.b.b
r=q.b/q.a
q=$.kd().a
B.a.l(q,0,2*r)
B.a.l(q,4,2)
B.a.l(q,6,-r)
B.a.l(q,7,-1)},
mH(a){var s,r,q,p
t.cE.a(a)
s=$.jp().getBoundingClientRect()
s.left.toString
s.right.toString
r=s.width
r.toString
s=s.height
s.toString
q=a.a
p=new A.aB(q.a/r-0.5,q.b/s-0.5).j(0,new A.aB(2,2))
$.dr().b=$.ke().q(0,new A.ai(p.a,-p.b,0))},
mF(a){var s,r,q,p,o
t.h.a(a)
$.dr().d=0
s=$.cd()
s.f=B.b.an(0.1,0,1)
r=$.fS().d
q=r.gbS(r)
p=r.gbX()
o=r.gbL(r)
switch(a.a){case 96:s.b=o.Y(0)
break
case 97:s.b=q
break
case 98:s.b=o
break
case 99:s.b=q.Y(0)
break
case 107:s.b=p.Y(0)
break
case 109:s.b=p
break
case 100:s.d=A.bd(new A.J(0,1,0),3.141592653589793)
break
case 102:s.d=A.bd(new A.J(0,1,0),-3.141592653589793)
break
case 101:s.d=A.bd(new A.J(1,0,0),3.141592653589793)
break
case 104:s.d=A.bd(new A.J(1,0,0),-3.141592653589793)
break
case 103:s.d=A.bd(new A.J(0,0,1),3.141592653589793)
break
case 105:s.d=A.bd(new A.J(0,0,1),-3.141592653589793)
break}},
mG(a){var s
t.h.a(a)
s=$.cd()
s.c=new A.J(0,0,0)
s.b=new A.J(0,0,0)
s.e=A.bG()
s.d=A.bG()},
mD(a){var s,r=t.D.a(a).acceleration
if(r==null||r.x==null)return
s=A.bL(r.x)
r=$.cd()
r.f=B.b.an(0.1,0,1)
r.c=new A.J(s,0,0)},
mE(a){var s,r
t.W.a(a)
if(a.alpha==null)return
s=A.bd(new A.J(1,0,0),A.bL(a.beta)*0.017453292519943295)
A.bd(new A.J(0,1,0),A.bL(a.gamma)*0.017453292519943295)
A.bd(new A.J(0,0,1),A.bL(a.alpha)*0.017453292519943295)
if($.iZ==null)$.iZ=s
$.dr().d=0.3
r=$.cd()
r.f=B.b.an(0.1,0,1)
r.e=r.e.j(0,$.iZ.j(0,new A.av(-s.a,-s.b,-s.c,s.d)))
$.iZ=s},
mI(a){var s,r,q
A.bL(a)
s=$.jS-a
$.jS=s
if(s<=0){for(s=$.b3.length,r=0;r<s;++r){q=$.b3[r]
q.d=!q.d}$.jS=1}},
mJ(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=null,a0=36160
A.bL(a1)
s=$.dr()
r=s.b
q=s.a.gO()
p=s.a
p.sO(p.gO().q(0,new A.ai(r.a-q.a,r.b-q.b,r.c-q.c).j(0,s.d).j(0,a1)))
o=A.em(A.jI(s.a.gT()),s.c,s.d*a1)
s=s.a
s.toString
s.sT(A.kB(o))
s=$.cd()
n=1-s.f
s.b=s.b.j(0,n)
s.c=s.c.j(0,n)
s.d=A.em(A.bG(),s.d,n)
s.e=A.em(A.bG(),s.e,n)
s.c=s.c.q(0,s.b.j(0,a1))
q=s.a
r=q.gO()
p=s.c.j(0,a1)
q.sO(r.q(0,new A.ai(p.a,p.b,p.c)))
p=s.e
s.e=A.em(p,p.j(0,s.d),a1)
m=A.jI(s.a.gT())
p=s.a
p.toString
p.sT(A.kB(A.em(m,m.j(0,s.e),a1)))
$.fS().aB()
A.ni()
s=$.jt()
p=s.c.a
p.toString
B.c.F(p,a0,s.d)
p=s.f
r=p.e
r.toString
p.I(r)
p.a9(9728)
p=$.du()
p.sam(A.h1())
p.saq(a)
r=$.jm()
p.ab(r)
q=$.ju()
l=q.d
k=l.a.a
k.toString
B.c.aw(k,l.b)
l=$.lY()
k=$.dt()
j=k.f.e
j.toString
i=$.ka()
h=r.b
g=h.a
f=q.e
e=t.k
l=e.a(l.a)
d=f.b.a
d.toString
B.c.b3(d,f.c,!1,l)
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
B.c.dc(g,j.c,i)
j=q.x
q=q.y.e
q.toString
i=j.b.a
i.toString
B.c.a6(i,j.c,q)
if(7>=$.N.length)return A.d($.N,7)
q=$.N[7]
q.a8()
q.aC()
q.a7()
q=s.c.a
q.toString
B.c.F(q,a0,a)
p.a.flush()
q=k.f
j=q.e
j.toString
q.I(j)
q.a9(9729)
q=s.f
j=q.e
j.toString
q.I(j)
q.a9(9729)
q=$.jr()
j=q.c.a
j.toString
B.c.F(j,a0,q.d)
p.sam(A.h1())
p.saq(a)
p.ab(r)
r=$.js()
j=r.d
i=j.a.a
i.toString
B.c.aw(i,j.b)
k=k.f.e
k.toString
s=s.f.e
s.toString
j=r.e
i=j.b.a
i.toString
B.c.b3(i,j.c,!1,l)
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
if(7>=$.N.length)return A.d($.N,7)
s=$.N[7]
s.a8()
s.aC()
s.a7()
s=q.c.a
s.toString
B.c.F(s,a0,a)
p.a.flush()
p.sam(A.h1())
p.saq(a)
p.ab($.ds().b)
s=$.jq()
r=s.d
l=r.a.a
l.toString
B.c.aw(l,r.b)
r=$.kd()
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
B.c.b3(e,s.c,!1,r)
if(7>=$.N.length)return A.d($.N,7)
s=$.N[7]
s.a8()
s.aC()
s.a7()
p.a.flush()},
mr(a,b){var s,r,q,p,o,n=new A.hi(),m=t.N,l=A.e0(["invaders.bin",b],m,t.gc),k=A.e0(["POSITION",0],m,t.S)
m=$.jn()
B.a.n($.N,n.R(0,0,m,a,l,k))
B.a.n($.N,n.R(1,0,m,a,l,k))
B.a.n($.N,n.R(2,0,m,a,l,k))
B.a.n($.N,n.R(3,0,m,a,l,k))
B.a.n($.N,n.R(4,0,m,a,l,k))
B.a.n($.N,n.R(5,0,m,a,l,k))
B.a.n($.N,n.R(6,0,m,a,l,k))
s=t.n
B.a.n($.N,new A.cF(m.b8(new Uint16Array(A.dk(A.q([0,1,3,2],t.dC)))),m.b7(new Float32Array(A.dk(A.q([0,1,0,0,1,0,1,1],s)))),A.ie(),5))
m=new A.bV(B.a_,null,A.i6())
m.c=new A.aW(A.q([20,0,0,0,0,20,0,0,0,0,1,0,-10,-10,0,1],s))
B.a.n($.b3,m)
m=new A.bV(B.Z,null,A.i6())
m.c=new A.aW(A.q([0.18,0,0,0,0,0.18,0,0,0,0,0.18,0,0,1.5,0,1],s))
B.a.n($.b3,m)
m=t.f3
r=[A.q([B.w,B.x],m),A.q([B.w,B.x],m),A.q([B.y,B.z],m),A.q([B.y,B.z],m),A.q([B.A,B.B],m),A.q([B.A,B.B],m)]
for(q=0;q<6;++q)for(m=-q*1.5,p=-2;p<=2;++p){o=r[q]
o=new A.bV(o[0],o[1],new A.aW(A.q([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],s)))
o.c=new A.aW(A.q([0.1,0,0,0,0,0.1,0,0,0,0,0.1,0,p*1.5,m,0,1],s))
B.a.n($.b3,o)}},
ks(){var s,r,q,p,o,n,m,l=36160,k=$.du(),j=$.ds(),i=A.q([],t.s)
B.a.n(i,"EXT_color_buffer_float")
k.c4(j.a,new A.hP(!0,!0,i))
j=$.jn()
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
for(j=$.N.length,s=0;s<j;++s)$.N[s].e=k
j=$.dt()
i=$.jm()
j.aA(k,i,!0)
r=j.c.a
r.toString
B.c.F(r,l,j.d)
r=new A.c0(34842,6408,5131)
r.d=k
q=k.a.createTexture()
q.toString
r.f=q
r.I(0)
q=j.a
p=j.b
r.aa(new Uint16Array(q*p*4),q,p)
r.aE()
r.a0()
j.f=r
q=j.c.a
q.toString
r=r.f
r.toString
B.c.aW(q,l,36064,3553,r,0)
r=j.c.a
r.toString
B.c.F(r,l,null)
r=$.jt()
r.aA(k,i,!1)
q=r.c.a
q.toString
B.c.F(q,l,r.d)
q=new A.c0(33325,6403,5131)
q.d=k
p=k.a.createTexture()
p.toString
q.f=p
q.I(0)
p=r.a
o=r.b
q.aa(new Uint16Array(p*o),p,o)
q.aE()
q.a0()
r.f=q
p=r.c.a
p.toString
q=q.f
q.toString
B.c.aW(p,l,36064,3553,q,0)
q=r.c.a
q.toString
B.c.F(q,l,null)
q=$.jr()
q.aA(k,i,!1)
i=q.c.a
i.toString
B.c.F(i,l,q.d)
i=new A.c0(6408,6408,5121)
i.d=k
p=k.a.createTexture()
p.toString
i.f=p
i.I(0)
p=q.a
o=q.b
i.aa(new Uint8Array(p*o*4),p,o)
i.aE()
i.a0()
q.f=i
p=q.c.a
p.toString
i=i.f
i.toString
B.c.aW(p,l,36064,3553,i,0)
i=q.c.a
i.toString
B.c.F(i,l,null)
i=$.jq()
p=i.d
o=A.kS()
n=A.kR()
A.H(o)
A.H(n)
p.a=k
p.b=p.ac(o,n,i.c)
i.e.J(k,p)
i.f.J(k,p)
p=$.jv()
i=p.d
n=A.kZ()
o=A.kY()
A.H(n)
A.H(o)
i.a=k
i.b=i.ac(n,o,p.c)
p.e.J(k,i)
i=$.ju()
p=i.d
o=A.kO()
n=A.kN()
A.H(o)
A.H(n)
p.a=k
p.b=p.ac(o,n,i.c)
i.e.J(k,p)
i.f.J(k,p)
i.r.J(k,p)
i.w.J(k,p)
i.x.J(k,p)
i.y=i.c8(k)
p=$.js()
n=p.d
o=A.kM()
m=A.kL()
A.H(o)
A.H(m)
n.a=k
n.b=n.ac(o,m,p.c)
p.e.J(k,n)
p.f.J(k,n)
p.r.J(k,n)
p.w.J(k,n)
j.f.I(1)
r.f.I(2)
q.f.I(3)
i.y.I(4)},
kp(){var s,r,q
for(s=$.N.length,r=0;r<s;++r)$.N[r].e=null
B.a.S($.N)
s=$.jq()
s.d.E()
q=s.e
q.b=q.c=null
s=s.f
s.b=s.c=null
s=$.jv()
s.d.E()
s=s.e
s.b=s.c=null
s=$.ju()
s.d.E()
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
s.y.E()
s=$.js()
s.d.E()
q=s.e
q.b=q.c=null
q=s.f
q.b=q.c=null
q=s.r
q.b=q.c=null
s=s.w
s.b=s.c=null
$.dt().E()
$.jt().E()
$.jr().E()
s=$.jn()
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
$.du().a=null},
ni(){var s,r,q,p,o,n=$.dt(),m=n.c.a
m.toString
B.c.F(m,36160,n.d)
n=n.f
m=n.e
m.toString
n.I(m)
n.a9(9728)
n=$.du()
n.sam(A.h1())
n.saq(new A.h9())
n.ab($.jm())
n.a.clearColor(0,0,0,0)
n.a.clearDepth(1)
n.a.clear(16640)
n=$.jv()
m=n.d
s=m.a.a
s.toString
B.c.aw(s,m.b)
for(m=$.b3.length,s=t.k,n=n.e,r=0;r<$.b3.length;$.b3.length===m||(0,A.aa)($.b3),++r){q=$.b3[r]
p=s.a($.fS().a.j(0,q.c).a)
o=n.b.a
o.toString
B.c.dd(o,n.c,!1,p)
if(q.d&&q.b!=null){p=q.b
p.toString}else p=q.a
p=p.a
if(!(p<$.N.length))return A.d($.N,p)
p=$.N[p]
p.a8()
o=p.a
p.e.a.drawElements(p.d,o.a,o.c,o.b)
p.a7()}n=$.dt().c.a
n.toString
B.c.F(n,36160,null)
$.du().a.flush()},
at:function at(a,b){this.a=a
this.b=b},
bV:function bV(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=!1},
jf:function jf(){},
ja:function ja(){},
jb:function jb(){},
jc:function jc(){},
jd:function jd(){},
je:function je(){},
lH(a){return t.fK.b(a)||t.A.b(a)||t.dz.b(a)||t.gb.b(a)||t.G.b(a)||t.g4.b(a)||t.g2.b(a)}},B={}
var w=[A,J,B]
var $={}
A.jD.prototype={}
J.bT.prototype={
K(a,b){return a===b},
gu(a){return A.cG(a)},
m(a){return"Instance of '"+A.hN(a)+"'"},
bO(a,b){throw A.b(A.kD(a,t.B.a(b)))},
gD(a){return A.bN(A.jX(this))}}
J.dV.prototype={
m(a){return String(a)},
gu(a){return a?519018:218159},
gD(a){return A.bN(t.y)},
$iB:1,
$ij3:1}
J.cr.prototype={
K(a,b){return null==b},
m(a){return"null"},
gu(a){return 0},
$iB:1,
$iG:1}
J.a.prototype={}
J.bB.prototype={
gu(a){return 0},
m(a){return String(a)}}
J.ei.prototype={}
J.bI.prototype={}
J.aA.prototype={
m(a){var s=a[$.fR()]
if(s==null)return this.c1(a)
return"JavaScript function for "+J.dw(s)},
$ibt:1}
J.by.prototype={
gu(a){return 0},
m(a){return String(a)}}
J.bz.prototype={
gu(a){return 0},
m(a){return String(a)}}
J.z.prototype={
n(a,b){A.aF(a).c.a(b)
if(!!a.fixed$length)A.bm(A.D("add"))
a.push(b)},
V(a,b){var s
A.aF(a).h("f<1>").a(b)
if(!!a.fixed$length)A.bm(A.D("addAll"))
if(Array.isArray(b)){this.cg(a,b)
return}for(s=J.b7(b);s.A();)a.push(s.gC(s))},
cg(a,b){var s,r
t.b.a(b)
s=b.length
if(s===0)return
if(a===b)throw A.b(A.Y(a))
for(r=0;r<s;++r)a.push(b[r])},
S(a){if(!!a.fixed$length)A.bm(A.D("clear"))
a.length=0},
t(a,b){var s,r
A.aF(a).h("~(1)").a(b)
s=a.length
for(r=0;r<s;++r){b.$1(a[r])
if(a.length!==s)throw A.b(A.Y(a))}},
au(a,b,c){var s=A.aF(a)
return new A.aU(a,s.v(c).h("1(2)").a(b),s.h("@<1>").v(c).h("aU<1,2>"))},
cX(a,b,c,d){var s,r,q
d.a(b)
A.aF(a).v(d).h("1(1,2)").a(c)
s=a.length
for(r=b,q=0;q<s;++q){r=c.$2(r,a[q])
if(a.length!==s)throw A.b(A.Y(a))}return r},
p(a,b){if(!(b<a.length))return A.d(a,b)
return a[b]},
gB(a){if(a.length>0)return a[0]
throw A.b(A.ku())},
bH(a,b){var s
for(s=0;s<a.length;++s)if(J.fT(a[s],b))return!0
return!1},
m(a){return A.kv(a,"[","]")},
gG(a){return new J.bn(a,a.length,A.aF(a).h("bn<1>"))},
gu(a){return A.cG(a)},
gk(a){return a.length},
i(a,b){A.t(b)
if(!(b>=0&&b<a.length))throw A.b(A.fP(a,b))
return a[b]},
l(a,b,c){A.aF(a).c.a(c)
if(!!a.immutable$list)A.bm(A.D("indexed set"))
if(!(b>=0&&b<a.length))throw A.b(A.fP(a,b))
a[b]=c},
q(a,b){var s=A.aF(a)
s.h("l<1>").a(b)
s=A.e1(a,s.c)
this.V(s,b)
return s},
$ik:1,
$if:1,
$il:1}
J.hp.prototype={}
J.bn.prototype={
gC(a){var s=this.d
return s==null?this.$ti.c.a(s):s},
A(){var s,r=this,q=r.a,p=q.length
if(r.b!==p){q=A.aa(q)
throw A.b(q)}s=r.c
if(s>=p){r.sbl(null)
return!1}r.sbl(q[s]);++r.c
return!0},
sbl(a){this.d=this.$ti.h("1?").a(a)},
$iae:1}
J.bx.prototype={
aV(a,b){var s
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=B.f.gaY(b)
if(this.gaY(a)===s)return 0
if(this.gaY(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gaY(a){return a===0?1/a<0:a<0},
U(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.b(A.D(""+a+".round()"))},
an(a,b,c){if(B.f.aV(b,c)>0)throw A.b(A.lA(b))
if(this.aV(a,b)<0)return b
if(this.aV(a,c)>0)return c
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
b5(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
cD(a,b){return(a|0)===a?a/b|0:this.cE(a,b)},
cE(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.b(A.D("Result of truncating division is "+A.m(s)+": "+A.m(a)+" ~/ "+b))},
by(a,b){var s
if(a>0)s=this.cB(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
cB(a,b){return b>31?0:a>>>b},
gD(a){return A.bN(t.H)},
$iw:1,
$iK:1}
J.cq.prototype={
gD(a){return A.bN(t.S)},
$iB:1,
$ii:1}
J.dX.prototype={
gD(a){return A.bN(t.i)},
$iB:1}
J.ba.prototype={
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
gD(a){return A.bN(t.N)},
gk(a){return a.length},
i(a,b){A.t(b)
if(!(b>=0&&b<a.length))throw A.b(A.fP(a,b))
return a[b]},
$iB:1,
$ip:1}
A.cv.prototype={
m(a){return"LateInitializationError: "+this.a}}
A.jh.prototype={
$0(){var s=new A.F($.C,t.ck)
s.ad(null)
return s},
$S:16}
A.hS.prototype={}
A.k.prototype={}
A.ag.prototype={
gG(a){var s=this
return new A.bC(s,s.gk(s),A.x(s).h("bC<ag.E>"))},
t(a,b){var s,r,q=this
A.x(q).h("~(ag.E)").a(b)
s=q.gk(q)
for(r=0;r<s;++r){b.$1(q.p(0,r))
if(s!==q.gk(q))throw A.b(A.Y(q))}},
au(a,b,c){var s=A.x(this)
return new A.aU(this,s.v(c).h("1(ag.E)").a(b),s.h("@<ag.E>").v(c).h("aU<1,2>"))}}
A.bC.prototype={
gC(a){var s=this.d
return s==null?this.$ti.c.a(s):s},
A(){var s,r=this,q=r.a,p=J.ax(q),o=p.gk(q)
if(r.b!==o)throw A.b(A.Y(q))
s=r.c
if(s>=o){r.sa1(null)
return!1}r.sa1(p.p(q,s));++r.c
return!0},
sa1(a){this.d=this.$ti.h("1?").a(a)},
$iae:1}
A.bD.prototype={
gG(a){var s=A.x(this)
return new A.aT(J.b7(this.a),this.b,s.h("@<1>").v(s.z[1]).h("aT<1,2>"))},
gk(a){return J.dv(this.a)}}
A.cn.prototype={$ik:1}
A.aT.prototype={
A(){var s=this,r=s.b
if(r.A()){s.sa1(s.c.$1(r.gC(r)))
return!0}s.sa1(null)
return!1},
gC(a){var s=this.a
return s==null?this.$ti.z[1].a(s):s},
sa1(a){this.a=this.$ti.h("2?").a(a)},
$iae:1}
A.aU.prototype={
gk(a){return J.dv(this.a)},
p(a,b){return this.b.$1(J.m5(this.a,b))}}
A.T.prototype={}
A.bZ.prototype={
gu(a){var s=this._hashCode
if(s!=null)return s
s=664597*B.p.gu(this.a)&536870911
this._hashCode=s
return s},
m(a){return'Symbol("'+this.a+'")'},
K(a,b){if(b==null)return!1
return b instanceof A.bZ&&this.a===b.a},
$ic_:1}
A.ch.prototype={}
A.cg.prototype={
m(a){return A.hA(this)},
$iL:1}
A.ci.prototype={
gk(a){return this.b.length},
gbr(){var s=this.$keys
if(s==null){s=Object.keys(this.a)
this.$keys=s}return s},
a4(a,b){if(typeof b!="string")return!1
if("__proto__"===b)return!1
return this.a.hasOwnProperty(b)},
i(a,b){if(!this.a4(0,b))return null
return this.b[this.a[b]]},
t(a,b){var s,r,q,p
this.$ti.h("~(1,2)").a(b)
s=this.gbr()
r=this.b
for(q=s.length,p=0;p<q;++p)b.$2(s[p],r[p])},
gH(a){return new A.d1(this.gbr(),this.$ti.h("d1<1>"))}}
A.d1.prototype={
gk(a){return this.a.length},
gG(a){var s=this.a
return new A.d2(s,s.length,this.$ti.h("d2<1>"))}}
A.d2.prototype={
gC(a){var s=this.d
return s==null?this.$ti.c.a(s):s},
A(){var s=this,r=s.c
if(r>=s.b){s.sa2(null)
return!1}s.sa2(s.a[r]);++s.c
return!0},
sa2(a){this.d=this.$ti.h("1?").a(a)},
$iae:1}
A.dW.prototype={
gd5(){var s=this.a
return s},
gd8(){var s,r,q,p,o=this
if(o.c===1)return B.q
s=o.d
r=s.length-o.e.length-o.f
if(r===0)return B.q
q=[]
for(p=0;p<r;++p){if(!(p<s.length))return A.d(s,p)
q.push(s[p])}q.fixed$length=Array
q.immutable$list=Array
return q},
gd6(){var s,r,q,p,o,n,m,l,k=this
if(k.c!==0)return B.r
s=k.e
r=s.length
q=k.d
p=q.length-r-k.f
if(r===0)return B.r
o=new A.aP(t.eo)
for(n=0;n<r;++n){if(!(n<s.length))return A.d(s,n)
m=s[n]
l=p+n
if(!(l>=0&&l<q.length))return A.d(q,l)
o.l(0,new A.bZ(m),q[l])}return new A.ch(o,t.gF)},
$ikt:1}
A.hM.prototype={
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
A.cE.prototype={
m(a){return"Null check operator used on a null value"}}
A.dY.prototype={
m(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.eI.prototype={
m(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.hK.prototype={
m(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.db.prototype={
m(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$iak:1}
A.b9.prototype={
m(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.lL(r==null?"unknown":r)+"'"},
$ibt:1,
gdg(){return this},
$C:"$1",
$R:1,
$D:null}
A.dE.prototype={$C:"$0",$R:0}
A.dF.prototype={$C:"$2",$R:2}
A.ez.prototype={}
A.ev.prototype={
m(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.lL(s)+"'"}}
A.bP.prototype={
K(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.bP))return!1
return this.$_target===b.$_target&&this.a===b.a},
gu(a){return(A.ji(this.a)^A.cG(this.$_target))>>>0},
m(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.hN(this.a)+"'")}}
A.eU.prototype={
m(a){return"Reading static variable '"+this.a+"' during its initialization"}}
A.ep.prototype={
m(a){return"RuntimeError: "+this.a}}
A.eP.prototype={
m(a){return"Assertion failed: "+A.bs(this.a)}}
A.iK.prototype={}
A.aP.prototype={
gk(a){return this.a},
gH(a){return new A.as(this,A.x(this).h("as<1>"))},
gbY(a){var s=A.x(this)
return A.kA(new A.as(this,s.h("as<1>")),new A.hq(this),s.c,s.z[1])},
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
return q}else return this.d1(b)},
d1(a){var s,r,q=this.d
if(q==null)return null
s=q[this.bM(a)]
r=this.bN(s,a)
if(r<0)return null
return s[r].b},
l(a,b,c){var s,r,q,p,o,n,m=this,l=A.x(m)
l.c.a(b)
l.z[1].a(c)
if(typeof b=="string"){s=m.b
m.bc(s==null?m.b=m.aM():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=m.c
m.bc(r==null?m.c=m.aM():r,b,c)}else{q=m.d
if(q==null)q=m.d=m.aM()
p=m.bM(b)
o=q[p]
if(o==null)q[p]=[m.aN(b,c)]
else{n=m.bN(o,b)
if(n>=0)o[n].b=c
else o.push(m.aN(b,c))}}},
S(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.bu()}},
t(a,b){var s,r,q=this
A.x(q).h("~(1,2)").a(b)
s=q.e
r=q.r
for(;s!=null;){b.$2(s.a,s.b)
if(r!==q.r)throw A.b(A.Y(q))
s=s.c}},
bc(a,b,c){var s,r=A.x(this)
r.c.a(b)
r.z[1].a(c)
s=a[b]
if(s==null)a[b]=this.aN(b,c)
else s.b=c},
bu(){this.r=this.r+1&1073741823},
aN(a,b){var s=this,r=A.x(s),q=new A.hw(r.c.a(a),r.z[1].a(b))
if(s.e==null)s.e=s.f=q
else s.f=s.f.c=q;++s.a
s.bu()
return q},
bM(a){return J.jx(a)&1073741823},
bN(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.fT(a[r].a,b))return r
return-1},
m(a){return A.hA(this)},
aM(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
$ikz:1}
A.hq.prototype={
$1(a){var s=this.a,r=A.x(s)
s=s.i(0,r.c.a(a))
return s==null?r.z[1].a(s):s},
$S(){return A.x(this.a).h("2(1)")}}
A.hw.prototype={}
A.as.prototype={
gk(a){return this.a.a},
gG(a){var s=this.a,r=new A.cw(s,s.r,this.$ti.h("cw<1>"))
r.c=s.e
return r},
t(a,b){var s,r,q
this.$ti.h("~(1)").a(b)
s=this.a
r=s.e
q=s.r
for(;r!=null;){b.$1(r.a)
if(q!==s.r)throw A.b(A.Y(s))
r=r.c}}}
A.cw.prototype={
gC(a){return this.d},
A(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.b(A.Y(q))
s=r.c
if(s==null){r.sa2(null)
return!1}else{r.sa2(s.a)
r.c=s.c
return!0}},
sa2(a){this.d=this.$ti.h("1?").a(a)},
$iae:1}
A.j6.prototype={
$1(a){return this.a(a)},
$S:6}
A.j7.prototype={
$2(a,b){return this.a(a,b)},
$S:21}
A.j8.prototype={
$1(a){return this.a(A.H(a))},
$S:19}
A.ir.prototype={
ai(){var s=this.b
if(s===this)throw A.b(new A.cv("Local '"+this.a+"' has not been initialized."))
return s}}
A.e6.prototype={
gD(a){return B.a1},
cL(a,b,c){A.iU(a,b,c)
return c==null?new Uint8Array(a,b):new Uint8Array(a,b,c)},
cK(a){return this.cL(a,0,null)},
$iB:1}
A.cA.prototype={$iM:1}
A.e7.prototype={
gD(a){return B.a2},
$iB:1}
A.bW.prototype={
gk(a){return a.length},
$iu:1}
A.cy.prototype={
i(a,b){A.t(b)
A.b1(b,a,a.length)
return a[b]},
l(a,b,c){A.bL(c)
A.b1(b,a,a.length)
a[b]=c},
$ik:1,
$if:1,
$il:1}
A.cz.prototype={
l(a,b,c){A.t(c)
A.b1(b,a,a.length)
a[b]=c},
$ik:1,
$if:1,
$il:1}
A.cx.prototype={
gD(a){return B.a3},
$iB:1,
$ijC:1}
A.e8.prototype={
gD(a){return B.a4},
$iB:1}
A.e9.prototype={
gD(a){return B.a5},
i(a,b){A.t(b)
A.b1(b,a,a.length)
return a[b]},
$iB:1}
A.ea.prototype={
gD(a){return B.a6},
i(a,b){A.t(b)
A.b1(b,a,a.length)
return a[b]},
$iB:1}
A.eb.prototype={
gD(a){return B.a7},
i(a,b){A.t(b)
A.b1(b,a,a.length)
return a[b]},
$iB:1}
A.cB.prototype={
gD(a){return B.a9},
i(a,b){A.t(b)
A.b1(b,a,a.length)
return a[b]},
$iB:1,
$ijK:1}
A.ec.prototype={
gD(a){return B.aa},
i(a,b){A.t(b)
A.b1(b,a,a.length)
return a[b]},
$iB:1}
A.cC.prototype={
gD(a){return B.ab},
gk(a){return a.length},
i(a,b){A.t(b)
A.b1(b,a,a.length)
return a[b]},
$iB:1}
A.ed.prototype={
gD(a){return B.ac},
gk(a){return a.length},
i(a,b){A.t(b)
A.b1(b,a,a.length)
return a[b]},
$iB:1,
$ieF:1}
A.d4.prototype={}
A.d5.prototype={}
A.d6.prototype={}
A.d7.prototype={}
A.aj.prototype={
h(a){return A.iQ(v.typeUniverse,this,a)},
v(a){return A.nu(v.typeUniverse,this,a)}}
A.f3.prototype={}
A.iP.prototype={
m(a){return A.a3(this.a,null)}}
A.f0.prototype={
m(a){return this.a}}
A.de.prototype={$iaX:1}
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
$S:30}
A.io.prototype={
$0(){this.a.$0()},
$S:10}
A.ip.prototype={
$0(){this.a.$0()},
$S:10}
A.iN.prototype={
cf(a,b){if(self.setTimeout!=null)self.setTimeout(A.aG(new A.iO(this,b),0),a)
else throw A.b(A.D("`setTimeout()` not found."))}}
A.iO.prototype={
$0(){this.b.$0()},
$S:0}
A.cf.prototype={
m(a){return A.m(this.a)},
$iE:1,
gZ(){return this.b}}
A.S.prototype={}
A.aw.prototype={
aP(){},
aQ(){},
sa3(a){this.ch=this.$ti.h("aw<1>?").a(a)},
sah(a){this.CW=this.$ti.h("aw<1>?").a(a)}}
A.cQ.prototype={
gbt(){return this.c<4},
cw(a){var s,r
A.x(this).h("aw<1>").a(a)
s=a.CW
r=a.ch
if(s==null)this.sbn(r)
else s.sa3(r)
if(r==null)this.sbs(s)
else r.sah(s)
a.sah(a)
a.sa3(a)},
cC(a,b,c,d){var s,r,q,p,o,n,m=this,l=A.x(m)
l.h("~(1)?").a(a)
t.Y.a(c)
if((m.c&4)!==0){l=new A.c2($.C,l.h("c2<1>"))
A.k5(l.gcr())
if(c!=null)l.saO(t.M.a(c))
return l}s=$.C
r=d?1:0
q=A.l0(s,a,l.c)
A.n8(s,b)
p=c==null?A.ok():c
l=l.h("aw<1>")
o=new A.aw(m,q,t.M.a(p),s,r,l)
o.sah(o)
o.sa3(o)
l.a(o)
o.ay=m.c&1
n=m.e
m.sbs(o)
o.sa3(null)
o.sah(n)
if(n==null)m.sbn(o)
else n.sa3(o)
if(m.d==m.e)A.lw(m.a)
return o},
cu(a){var s=this,r=A.x(s)
a=r.h("aw<1>").a(r.h("al<1>").a(a))
if(a.ch===a)return null
r=a.ay
if((r&2)!==0)a.ay=r|4
else{s.cw(a)
if((s.c&2)===0&&s.d==null)s.cl()}return null},
bb(){if((this.c&4)!==0)return new A.bH("Cannot add new events after calling close")
return new A.bH("Cannot add new events while doing an addStream")},
n(a,b){var s=this
A.x(s).c.a(b)
if(!s.gbt())throw A.b(s.bb())
s.aT(b)},
ao(a){var s,r,q=this
if((q.c&4)!==0){s=q.r
s.toString
return s}if(!q.gbt())throw A.b(q.bb())
q.c|=4
r=q.r
if(r==null)r=q.r=new A.F($.C,t.cd)
q.aU()
return r},
cl(){if((this.c&4)!==0){var s=this.r
if((s.a&30)===0)s.ad(null)}A.lw(this.b)},
sbn(a){this.d=A.x(this).h("aw<1>?").a(a)},
sbs(a){this.e=A.x(this).h("aw<1>?").a(a)},
$iex:1,
$ilb:1,
$ibi:1}
A.aZ.prototype={
aT(a){var s,r=this.$ti
r.c.a(a)
for(s=this.d,r=r.h("cU<1>");s!=null;s=s.ch)s.bd(new A.cU(a,r))},
aU(){var s=this.d
if(s!=null)for(;s!=null;s=s.ch)s.bd(B.P)
else this.r.ad(null)}}
A.hh.prototype={
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
A.hg.prototype={
$1(a){var s,r,q=this,p=q.w
p.a(a)
r=q.a;--r.b
s=r.a
if(s!=null){J.m1(s,q.b,a)
if(r.b===0)q.c.af(A.jF(s,p))}else if(r.b===0&&!q.e)q.c.L(q.f.ai(),q.r.ai())},
$S(){return this.w.h("G(0)")}}
A.cR.prototype={
bG(a,b){var s
A.dp(a,"error",t.K)
s=this.a
if((s.a&30)!==0)throw A.b(A.I("Future already completed"))
b=A.jy(a)
s.be(a,b)},
ap(a){return this.bG(a,null)}}
A.bJ.prototype={
bF(a,b){var s,r=this.$ti
r.h("1/?").a(b)
s=this.a
if((s.a&30)!==0)throw A.b(A.I("Future already completed"))
s.ad(r.h("1/").a(b))}}
A.bK.prototype={
d4(a){if((this.c&15)!==6)return!0
return this.b.b.b0(t.al.a(this.d),a.a,t.y,t.K)},
d0(a){var s,r=this,q=r.e,p=null,o=t.z,n=t.K,m=a.a,l=r.b.b
if(t.C.b(q))p=l.d9(q,m,a.b,o,n,t.l)
else p=l.b0(t.v.a(q),m,o,n)
try{o=r.$ti.h("2/").a(p)
return o}catch(s){if(t.eK.b(A.aH(s))){if((r.c&1)!==0)throw A.b(A.aJ("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.b(A.aJ("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.F.prototype={
bx(a){this.a=this.a&1|4
this.c=a},
b2(a,b,c){var s,r,q,p=this.$ti
p.v(c).h("1/(2)").a(a)
s=$.C
if(s===B.d){if(b!=null&&!t.C.b(b)&&!t.v.b(b))throw A.b(A.kh(b,"onError",u.c))}else{c.h("@<0/>").v(p.c).h("1(2)").a(a)
if(b!=null)b=A.o5(b,s)}r=new A.F(s,c.h("F<0>"))
q=b==null?1:3
this.aG(new A.bK(r,q,a,b,p.h("@<1>").v(c).h("bK<1,2>")))
return r},
b1(a,b){return this.b2(a,null,b)},
cA(a){this.a=this.a&1|16
this.c=a},
ae(a){this.a=a.a&30|this.a&1
this.c=a.c},
aG(a){var s,r=this,q=r.a
if(q<=3){a.a=t.F.a(r.c)
r.c=a}else{if((q&4)!==0){s=t.c.a(r.c)
if((s.a&24)===0){s.aG(a)
return}r.ae(s)}A.bM(null,null,r.b,t.M.a(new A.iw(r,a)))}},
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
return}m.ae(n)}l.a=m.ak(a)
A.bM(null,null,m.b,t.M.a(new A.iD(l,m)))}},
aj(){var s=t.F.a(this.c)
this.c=null
return this.ak(s)},
ak(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
cm(a){var s,r,q,p=this
p.a^=2
try{a.b2(new A.iA(p),new A.iB(p),t.P)}catch(q){s=A.aH(q)
r=A.b5(q)
A.k5(new A.iC(p,s,r))}},
bi(a){var s,r=this,q=r.$ti
q.h("1/").a(a)
s=r.aj()
q.c.a(a)
r.a=8
r.c=a
A.c3(r,s)},
af(a){var s,r=this
r.$ti.c.a(a)
s=r.aj()
r.a=8
r.c=a
A.c3(r,s)},
L(a,b){var s
t.K.a(a)
t.l.a(b)
s=this.aj()
this.cA(A.fX(a,b))
A.c3(this,s)},
ad(a){var s=this.$ti
s.h("1/").a(a)
if(s.h("aq<1>").b(a)){this.cn(a)
return}this.ck(a)},
ck(a){var s=this
s.$ti.c.a(a)
s.a^=2
A.bM(null,null,s.b,t.M.a(new A.iy(s,a)))},
cn(a){var s=this.$ti
s.h("aq<1>").a(a)
if(s.b(a)){A.na(a,this)
return}this.cm(a)},
be(a,b){t.l.a(b)
this.a^=2
A.bM(null,null,this.b,t.M.a(new A.ix(this,a,b)))},
$iaq:1}
A.iw.prototype={
$0(){A.c3(this.a,this.b)},
$S:0}
A.iD.prototype={
$0(){A.c3(this.b,this.a.a)},
$S:0}
A.iA.prototype={
$1(a){var s,r,q,p=this.a
p.a^=2
try{p.af(p.$ti.c.a(a))}catch(q){s=A.aH(q)
r=A.b5(q)
p.L(s,r)}},
$S:9}
A.iB.prototype={
$2(a,b){this.a.L(t.K.a(a),t.l.a(b))},
$S:36}
A.iC.prototype={
$0(){this.a.L(this.b,this.c)},
$S:0}
A.iz.prototype={
$0(){A.l3(this.a.a,this.b)},
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
r=A.b5(p)
q=m.c&&t.t.a(m.b.a.c).a===s
o=m.a
if(q)o.c=t.t.a(m.b.a.c)
else o.c=A.fX(s,r)
o.b=!0
return}if(l instanceof A.F&&(l.a&24)!==0){if((l.a&16)!==0){q=m.a
q.c=t.t.a(l.c)
q.b=!0}return}if(l instanceof A.F){n=m.b.a
q=m.a
q.c=l.b1(new A.iH(n),t.z)
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
q.c=p.b.b.b0(o.h("2/(1)").a(p.d),m,o.h("2/"),n)}catch(l){s=A.aH(l)
r=A.b5(l)
q=this.a
q.c=A.fX(s,r)
q.b=!0}},
$S:0}
A.iE.prototype={
$0(){var s,r,q,p,o,n,m=this
try{s=t.t.a(m.a.a.c)
p=m.b
if(p.a.d4(s)&&p.a.e!=null){p.c=p.a.d0(s)
p.b=!1}}catch(o){r=A.aH(o)
q=A.b5(o)
p=t.t.a(m.a.a.c)
n=m.b
if(p.a===r)n.c=p
else n.c=A.fX(r,q)
n.b=!0}},
$S:0}
A.eQ.prototype={}
A.be.prototype={
t(a,b){var s,r
A.x(this).h("~(1)").a(b)
s=new A.F($.C,t.c)
r=this.ar(null,!0,new A.i_(s),s.gbj())
r.aZ(new A.i0(this,b,r,s))
return s},
gk(a){var s={},r=new A.F($.C,t.fJ)
s.a=0
this.ar(new A.i1(s,this),!0,new A.i2(s,r),r.gbj())
return r}}
A.i_.prototype={
$0(){this.a.bi(null)},
$S:0}
A.i0.prototype={
$1(a){var s=this
A.o7(new A.hY(s.b,A.x(s.a).c.a(a)),new A.hZ(),A.nE(s.c,s.d),t.p)},
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
$0(){this.b.bi(this.a.a)},
$S:0}
A.cS.prototype={
gu(a){return(A.cG(this.a)^892482866)>>>0},
K(a,b){if(b==null)return!1
if(this===b)return!0
return b instanceof A.S&&b.a===this.a}}
A.cT.prototype={
bv(){return this.w.cu(this)},
aP(){A.x(this.w).h("al<1>").a(this)},
aQ(){A.x(this.w).h("al<1>").a(this)}}
A.c1.prototype={
aZ(a){var s=A.x(this)
this.scj(A.l0(this.d,s.h("~(1)?").a(a),s.c))},
W(a){var s=this.e&=4294967279
if((s&8)===0)this.bf()
s=$.jl()
return s},
bf(){var s,r=this,q=r.e|=8
if((q&64)!==0){s=r.r
if(s.a===1)s.a=3}if((q&32)===0)r.saR(null)
r.f=r.bv()},
aP(){},
aQ(){},
bv(){return null},
bd(a){var s,r,q=this,p=q.r
if(p==null){p=new A.d8(A.x(q).h("d8<1>"))
q.saR(p)}s=p.c
if(s==null)p.b=p.c=a
else{s.sa5(0,a)
p.c=a}r=q.e
if((r&64)===0){r|=64
q.e=r
if(r<128)p.b6(q)}},
aT(a){var s,r=this,q=A.x(r).c
q.a(a)
s=r.e
r.e=s|32
r.d.bU(r.a,a,q)
r.e&=4294967263
r.co((s&4)!==0)},
aU(){this.bf()
this.e|=16
new A.iq(this).$0()},
co(a){var s,r,q=this,p=q.e
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
p=q.e&=4294967263}if((p&64)!==0&&p<128)q.r.b6(q)},
scj(a){this.a=A.x(this).h("~(1)").a(a)},
saR(a){this.r=A.x(this).h("d8<1>?").a(a)},
$ial:1,
$ibi:1}
A.iq.prototype={
$0(){var s=this.a,r=s.e
if((r&16)===0)return
s.e=r|42
s.d.b_(s.c)
s.e&=4294967263},
$S:0}
A.c6.prototype={
ar(a,b,c,d){var s=this.$ti
s.h("~(1)?").a(a)
t.Y.a(c)
return this.a.cC(s.h("~(1)?").a(a),d,c,b===!0)},
X(a){return this.ar(a,null,null,null)}}
A.bh.prototype={
sa5(a,b){this.a=t.ev.a(b)},
ga5(a){return this.a}}
A.cU.prototype={
bP(a){this.$ti.h("bi<1>").a(a).aT(this.b)}}
A.eV.prototype={
bP(a){a.aU()},
ga5(a){return null},
sa5(a,b){throw A.b(A.I("No events after a done."))},
$ibh:1}
A.d8.prototype={
b6(a){var s,r=this
r.$ti.h("bi<1>").a(a)
s=r.a
if(s===1)return
if(s>=1){r.a=1
return}A.k5(new A.iJ(r,a))
r.a=1}}
A.iJ.prototype={
$0(){var s,r,q,p=this.a,o=p.a
p.a=0
if(o===3)return
s=p.$ti.h("bi<1>").a(this.b)
r=p.b
q=r.ga5(r)
p.b=q
if(q==null)p.c=null
r.bP(s)},
$S:0}
A.c2.prototype={
aZ(a){this.$ti.h("~(1)?").a(a)},
W(a){this.a=-1
this.saO(null)
return $.jl()},
cs(){var s,r,q,p=this,o=p.a-1
if(o===0){p.a=-1
s=p.c
if(s!=null){r=s
q=!0}else{r=null
q=!1}if(q){p.saO(null)
p.b.b_(r)}}else p.a=o},
saO(a){this.c=t.Y.a(a)},
$ial:1}
A.iT.prototype={
$0(){return this.a.L(this.b,this.c)},
$S:0}
A.iS.prototype={
$2(a,b){A.nD(this.a,this.b,a,t.l.a(b))},
$S:4}
A.dj.prototype={$il_:1}
A.j_.prototype={
$0(){A.mn(this.a,this.b)},
$S:0}
A.fl.prototype={
b_(a){var s,r,q
t.M.a(a)
try{if(B.d===$.C){a.$0()
return}A.lt(null,null,this,a,t.p)}catch(q){s=A.aH(q)
r=A.b5(q)
A.fO(t.K.a(s),t.l.a(r))}},
bU(a,b,c){var s,r,q
c.h("~(0)").a(a)
c.a(b)
try{if(B.d===$.C){a.$1(b)
return}A.lu(null,null,this,a,b,t.p,c)}catch(q){s=A.aH(q)
r=A.b5(q)
A.fO(t.K.a(s),t.l.a(r))}},
bC(a){return new A.iL(this,t.M.a(a))},
cM(a,b){return new A.iM(this,b.h("~(0)").a(a),b)},
i(a,b){return null},
bT(a,b){b.h("0()").a(a)
if($.C===B.d)return a.$0()
return A.lt(null,null,this,a,b)},
b0(a,b,c,d){c.h("@<0>").v(d).h("1(2)").a(a)
d.a(b)
if($.C===B.d)return a.$1(b)
return A.lu(null,null,this,a,b,c,d)},
d9(a,b,c,d,e,f){d.h("@<0>").v(e).v(f).h("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.C===B.d)return a.$2(b,c)
return A.o6(null,null,this,a,b,c,d,e,f)},
bQ(a,b,c,d){return b.h("@<0>").v(c).v(d).h("1(2,3)").a(a)}}
A.iL.prototype={
$0(){return this.a.b_(this.b)},
$S:0}
A.iM.prototype={
$1(a){var s=this.c
return this.a.bU(this.b,s.a(a),s)},
$S(){return this.c.h("~(0)")}}
A.cY.prototype={
gk(a){return this.a},
gH(a){return new A.cZ(this,this.$ti.h("cZ<1>"))},
a4(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
return s==null?!1:s[b]!=null}else if(typeof b=="number"&&(b&1073741823)===b){r=this.c
return r==null?!1:r[b]!=null}else return this.cp(b)},
cp(a){var s=this.d
if(s==null)return!1
return this.aL(this.bo(s,a),a)>=0},
i(a,b){var s,r,q
if(typeof b=="string"&&b!=="__proto__"){s=this.b
r=s==null?null:A.l4(s,b)
return r}else if(typeof b=="number"&&(b&1073741823)===b){q=this.c
r=q==null?null:A.l4(q,b)
return r}else return this.cq(0,b)},
cq(a,b){var s,r,q=this.d
if(q==null)return null
s=this.bo(q,b)
r=this.aL(s,b)
return r<0?null:s[r+1]},
l(a,b,c){var s,r,q,p,o=this,n=o.$ti
n.c.a(b)
n.z[1].a(c)
s=o.d
if(s==null)s=o.d=A.nb()
r=A.ji(b)&1073741823
q=s[r]
if(q==null){A.l5(s,r,[b,c]);++o.a
o.e=null}else{p=o.aL(q,b)
if(p>=0)q[p+1]=c
else{q.push(b,c);++o.a
o.e=null}}},
t(a,b){var s,r,q,p,o,n,m=this,l=m.$ti
l.h("~(1,2)").a(b)
s=m.aH()
for(r=s.length,q=l.c,l=l.z[1],p=0;p<r;++p){o=s[p]
q.a(o)
n=m.i(0,o)
b.$2(o,n==null?l.a(n):n)
if(s!==m.e)throw A.b(A.Y(m))}},
aH(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.e
if(h!=null)return h
h=A.hy(i.a,null,!1,t.z)
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
bo(a,b){return a[A.ji(b)&1073741823]}}
A.d0.prototype={
aL(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=0;r<s;r+=2){q=a[r]
if(q==null?b==null:q===b)return r}return-1}}
A.cZ.prototype={
gk(a){return this.a.a},
gG(a){var s=this.a
return new A.d_(s,s.aH(),this.$ti.h("d_<1>"))},
t(a,b){var s,r,q,p
this.$ti.h("~(1)").a(b)
s=this.a
r=s.aH()
for(q=r.length,p=0;p<q;++p){b.$1(r[p])
if(r!==s.e)throw A.b(A.Y(s))}}}
A.d_.prototype={
gC(a){var s=this.d
return s==null?this.$ti.c.a(s):s},
A(){var s=this,r=s.b,q=s.c,p=s.a
if(r!==p.e)throw A.b(A.Y(p))
else if(q>=r.length){s.sbh(null)
return!1}else{s.sbh(r[q])
s.c=q+1
return!0}},
sbh(a){this.d=this.$ti.h("1?").a(a)},
$iae:1}
A.e.prototype={
gG(a){return new A.bC(a,this.gk(a),A.ao(a).h("bC<e.E>"))},
p(a,b){return this.i(a,b)},
t(a,b){var s,r
A.ao(a).h("~(e.E)").a(b)
s=this.gk(a)
for(r=0;r<s;++r){b.$1(this.i(a,r))
if(s!==this.gk(a))throw A.b(A.Y(a))}},
gd2(a){return this.gk(a)===0},
gB(a){if(this.gk(a)===0)throw A.b(A.ku())
return this.i(a,0)},
bH(a,b){var s,r=this.gk(a)
for(s=0;s<r;++s){if(J.fT(this.i(a,s),b))return!0
if(r!==this.gk(a))throw A.b(A.Y(a))}return!1},
au(a,b,c){var s=A.ao(a)
return new A.aU(a,s.v(c).h("1(e.E)").a(b),s.h("@<e.E>").v(c).h("aU<1,2>"))},
av(a){var s,r,q,p,o=this
if(o.gd2(a)){s=J.kw(0,A.ao(a).h("e.E"))
return s}r=o.i(a,0)
q=A.hy(o.gk(a),r,!0,A.ao(a).h("e.E"))
for(p=1;p<o.gk(a);++p)B.a.l(q,p,o.i(a,p))
return q},
q(a,b){var s=A.ao(a)
s.h("l<e.E>").a(b)
s=A.e1(a,s.h("e.E"))
B.a.V(s,b)
return s},
m(a){return A.kv(a,"[","]")}}
A.y.prototype={
t(a,b){var s,r,q,p=A.ao(a)
p.h("~(y.K,y.V)").a(b)
for(s=J.b7(this.gH(a)),p=p.h("y.V");s.A();){r=s.gC(s)
q=this.i(a,r)
b.$2(r,q==null?p.a(q):q)}},
gk(a){return J.dv(this.gH(a))},
m(a){return A.hA(a)},
$iL:1}
A.hB.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=r.a+=A.m(a)
r.a=s+": "
r.a+=A.m(b)},
$S:43}
A.di.prototype={}
A.bU.prototype={
i(a,b){return this.a.i(0,b)},
t(a,b){this.a.t(0,this.$ti.h("~(1,2)").a(b))},
gk(a){return this.a.a},
gH(a){var s=this.a
return new A.as(s,s.$ti.h("as<1>"))},
m(a){return A.hA(this.a)},
$iL:1}
A.cO.prototype={}
A.c7.prototype={}
A.f7.prototype={
i(a,b){var s,r=this.b
if(r==null)return this.c.i(0,b)
else if(typeof b!="string")return null
else{s=r[b]
return typeof s=="undefined"?this.ct(b):s}},
gk(a){return this.b==null?this.c.a:this.ag().length},
gH(a){var s
if(this.b==null){s=this.c
return new A.as(s,A.x(s).h("as<1>"))}return new A.f8(this)},
t(a,b){var s,r,q,p,o=this
t.u.a(b)
if(o.b==null)return o.c.t(0,b)
s=o.ag()
for(r=0;r<s.length;++r){q=s[r]
p=o.b[q]
if(typeof p=="undefined"){p=A.iW(o.a[q])
o.b[q]=p}b.$2(q,p)
if(s!==o.c)throw A.b(A.Y(o))}},
ag(){var s=t.bM.a(this.c)
if(s==null)s=this.c=A.q(Object.keys(this.a),t.s)
return s},
ct(a){var s
if(!Object.prototype.hasOwnProperty.call(this.a,a))return null
s=A.iW(this.a[a])
return this.b[a]=s}}
A.f8.prototype={
gk(a){var s=this.a
return s.gk(s)},
p(a,b){var s=this.a
if(s.b==null)s=s.gH(s).p(0,b)
else{s=s.ag()
if(!(b<s.length))return A.d(s,b)
s=s[b]}return s},
gG(a){var s=this.a
if(s.b==null){s=s.gH(s)
s=s.gG(s)}else{s=s.ag()
s=new J.bn(s,s.length,A.aF(s).h("bn<1>"))}return s}}
A.dG.prototype={}
A.dI.prototype={}
A.dZ.prototype={
cP(a,b){var s=A.o3(b,this.gcQ().a)
return s},
gcQ(){return B.V}}
A.hs.prototype={}
A.hI.prototype={
$2(a,b){var s,r,q
t.fo.a(a)
s=this.b
r=this.a
q=s.a+=r.a
q+=a.a
s.a=q
s.a=q+": "
s.a+=A.bs(b)
r.a=", "},
$S:15}
A.ck.prototype={
K(a,b){if(b==null)return!1
return b instanceof A.ck&&this.a===b.a&&this.b===b.b},
gu(a){var s=this.a
return(s^B.f.by(s,30))&1073741823},
m(a){var s=this,r=A.mk(A.mU(s)),q=A.dJ(A.mS(s)),p=A.dJ(A.mO(s)),o=A.dJ(A.mP(s)),n=A.dJ(A.mR(s)),m=A.dJ(A.mT(s)),l=A.ml(A.mQ(s)),k=r+"-"+q
if(s.b)return k+"-"+p+" "+o+":"+n+":"+m+"."+l+"Z"
else return k+"-"+p+" "+o+":"+n+":"+m+"."+l}}
A.is.prototype={
m(a){return this.aI()}}
A.E.prototype={
gZ(){return A.b5(this.$thrownJsError)}}
A.ce.prototype={
m(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.bs(s)
return"Assertion failed"}}
A.aX.prototype={}
A.aI.prototype={
gaK(){return"Invalid argument"+(!this.a?"(s)":"")},
gaJ(){return""},
m(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+A.m(p),n=s.gaK()+q+o
if(!s.a)return n
return n+s.gaJ()+": "+A.bs(s.gaX())},
gaX(){return this.b}}
A.cI.prototype={
gaX(){return A.nx(this.b)},
gaK(){return"RangeError"},
gaJ(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.m(q):""
else if(q==null)s=": Not greater than or equal to "+A.m(r)
else if(q>r)s=": Not in inclusive range "+A.m(r)+".."+A.m(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.m(r)
return s}}
A.dU.prototype={
gaX(){return A.t(this.b)},
gaK(){return"RangeError"},
gaJ(){if(A.t(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gk(a){return this.f}}
A.ee.prototype={
m(a){var s,r,q,p,o,n,m,l,k=this,j={},i=new A.cL("")
j.a=""
s=k.c
for(r=s.length,q=0,p="",o="";q<r;++q,o=", "){n=s[q]
i.a=p+o
p=i.a+=A.bs(n)
j.a=", "}k.d.t(0,new A.hI(j,i))
m=A.bs(k.a)
l=i.m(0)
return"NoSuchMethodError: method not found: '"+k.b.a+"'\nReceiver: "+m+"\nArguments: ["+l+"]"}}
A.eJ.prototype={
m(a){return"Unsupported operation: "+this.a}}
A.eH.prototype={
m(a){return"UnimplementedError: "+this.a}}
A.bH.prototype={
m(a){return"Bad state: "+this.a}}
A.dH.prototype={
m(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.bs(s)+"."}}
A.eh.prototype={
m(a){return"Out of Memory"},
gZ(){return null},
$iE:1}
A.cK.prototype={
m(a){return"Stack Overflow"},
gZ(){return null},
$iE:1}
A.iv.prototype={
m(a){return"Exception: "+this.a}}
A.he.prototype={
m(a){var s=this.a,r=""!==s?"FormatException: "+s:"FormatException"
return r}}
A.f.prototype={
au(a,b,c){var s=A.x(this)
return A.kA(this,s.v(c).h("1(f.E)").a(b),s.h("f.E"),c)},
t(a,b){var s
A.x(this).h("~(f.E)").a(b)
for(s=this.gG(this);s.A();)b.$1(s.gC(s))},
gk(a){var s,r=this.gG(this)
for(s=0;r.A();)++s
return s},
p(a,b){var s,r=this.gG(this)
for(s=b;r.A();){if(s===0)return r.gC(r);--s}throw A.b(A.P(b,b-s,this,"index"))},
m(a){return A.mw(this,"(",")")}}
A.G.prototype={
gu(a){return A.v.prototype.gu.call(this,this)},
m(a){return"null"}}
A.v.prototype={$iv:1,
K(a,b){return this===b},
gu(a){return A.cG(this)},
m(a){return"Instance of '"+A.hN(this)+"'"},
bO(a,b){throw A.b(A.kD(this,t.B.a(b)))},
gD(a){return A.ou(this)},
toString(){return this.m(this)}}
A.ft.prototype={
m(a){return""},
$iak:1}
A.cL.prototype={
gk(a){return this.a.length},
m(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
A.n.prototype={}
A.fW.prototype={
gk(a){return a.length}}
A.dx.prototype={
m(a){var s=String(a)
s.toString
return s}}
A.dy.prototype={
m(a){var s=String(a)
s.toString
return s}}
A.bp.prototype={$ibp:1}
A.bq.prototype={$ibq:1}
A.br.prototype={
sN(a,b){a.height=b},
sP(a,b){a.width=b},
az(a,b,c){var s=a.getContext(b,A.lD(c))
return s},
$ibr:1,
$idD:1}
A.az.prototype={
gk(a){return a.length}}
A.h4.prototype={
gk(a){return a.length}}
A.A.prototype={$iA:1}
A.cj.prototype={
gk(a){var s=a.length
s.toString
return s}}
A.h5.prototype={}
A.ap.prototype={}
A.aL.prototype={}
A.h6.prototype={
gk(a){return a.length}}
A.h7.prototype={
gk(a){return a.length}}
A.h8.prototype={
gk(a){return a.length},
i(a,b){var s=a[A.t(b)]
s.toString
return s}}
A.aM.prototype={$iaM:1}
A.aN.prototype={$iaN:1}
A.bQ.prototype={$ibQ:1}
A.aO.prototype={$iaO:1}
A.ha.prototype={
m(a){var s=String(a)
s.toString
return s}}
A.cl.prototype={
gk(a){var s=a.length
s.toString
return s},
i(a,b){var s,r
A.t(b)
s=a.length
r=b>>>0!==b||b>=s
r.toString
if(r)throw A.b(A.P(b,s,a,null))
s=a[b]
s.toString
return s},
l(a,b,c){t.q.a(c)
throw A.b(A.D("Cannot assign element of immutable List."))},
gB(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.b(A.I("No elements"))},
p(a,b){if(!(b<a.length))return A.d(a,b)
return a[b]},
$ik:1,
$iu:1,
$if:1,
$il:1}
A.cm.prototype={
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
if(s===r){s=J.cc(b)
s=this.gP(a)===s.gP(b)&&this.gN(a)===s.gN(b)}else s=!1}else s=!1}else s=!1
return s},
gu(a){var s,r=a.left
r.toString
s=a.top
s.toString
return A.kE(r,s,this.gP(a),this.gN(a))},
gbp(a){return a.height},
gN(a){var s=this.gbp(a)
s.toString
return s},
gbB(a){return a.width},
gP(a){var s=this.gbB(a)
s.toString
return s},
$iaC:1}
A.dK.prototype={
gk(a){var s=a.length
s.toString
return s},
i(a,b){var s,r
A.t(b)
s=a.length
r=b>>>0!==b||b>=s
r.toString
if(r)throw A.b(A.P(b,s,a,null))
s=a[b]
s.toString
return s},
l(a,b,c){A.H(c)
throw A.b(A.D("Cannot assign element of immutable List."))},
gB(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.b(A.I("No elements"))},
p(a,b){if(!(b<a.length))return A.d(a,b)
return a[b]},
$ik:1,
$iu:1,
$if:1,
$il:1}
A.hb.prototype={
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
cJ(a,b,c,d){t.o.a(c)
if(c!=null)this.ci(a,b,c,!1)},
ci(a,b,c,d){return a.addEventListener(b,A.aG(t.o.a(c),1),!1)},
cv(a,b,c,d){return a.removeEventListener(b,A.aG(t.o.a(c),1),!1)},
$ic:1}
A.Z.prototype={$iZ:1}
A.dM.prototype={
gk(a){var s=a.length
s.toString
return s},
i(a,b){var s,r
A.t(b)
s=a.length
r=b>>>0!==b||b>=s
r.toString
if(r)throw A.b(A.P(b,s,a,null))
s=a[b]
s.toString
return s},
l(a,b,c){t.c8.a(c)
throw A.b(A.D("Cannot assign element of immutable List."))},
gB(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.b(A.I("No elements"))},
p(a,b){if(!(b<a.length))return A.d(a,b)
return a[b]},
$ik:1,
$iu:1,
$if:1,
$il:1}
A.dN.prototype={
gk(a){return a.length}}
A.bR.prototype={$ibR:1}
A.bS.prototype={
t(a,b){return a.forEach(A.aG(t.cZ.a(b),3))},
$ibS:1}
A.dO.prototype={
gk(a){return a.length}}
A.a4.prototype={$ia4:1}
A.hk.prototype={
gk(a){var s=a.length
s.toString
return s}}
A.bu.prototype={
gk(a){var s=a.length
s.toString
return s},
i(a,b){var s,r
A.t(b)
s=a.length
r=b>>>0!==b||b>=s
r.toString
if(r)throw A.b(A.P(b,s,a,null))
s=a[b]
s.toString
return s},
l(a,b,c){t.G.a(c)
throw A.b(A.D("Cannot assign element of immutable List."))},
gB(a){var s
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
d7(a,b,c,d){return a.open(b,c,!0)},
$iar:1}
A.hl.prototype={
$1(a){var s=t.r.a(a).responseText
s.toString
return s},
$S:14}
A.hm.prototype={
$1(a){var s,r,q,p,o
t.E.a(a)
s=this.a
r=s.status
r.toString
q=r>=200&&r<300
p=r>307&&r<400
r=q||r===0||r===304||p
o=this.b
if(r)o.bF(0,s)
else o.ap(a)},
$S:17}
A.bv.prototype={}
A.cp.prototype={$icp:1}
A.dT.prototype={$idD:1}
A.bw.prototype={$ibw:1}
A.ho.prototype={
gd3(a){return a.isIntersecting}}
A.aS.prototype={$iaS:1}
A.hz.prototype={
m(a){var s=String(a)
s.toString
return s}}
A.bF.prototype={}
A.hF.prototype={
gk(a){return a.length}}
A.e2.prototype={
i(a,b){return A.bl(a.get(A.H(b)))},
t(a,b){var s,r,q
t.u.a(b)
s=a.entries()
for(;!0;){r=s.next()
q=r.done
q.toString
if(q)return
q=r.value[0]
q.toString
b.$2(q,A.bl(r.value[1]))}},
gH(a){var s=A.q([],t.s)
this.t(a,new A.hG(s))
return s},
gk(a){var s=a.size
s.toString
return s},
$iL:1}
A.hG.prototype={
$2(a,b){return B.a.n(this.a,a)},
$S:2}
A.e3.prototype={
i(a,b){return A.bl(a.get(A.H(b)))},
t(a,b){var s,r,q
t.u.a(b)
s=a.entries()
for(;!0;){r=s.next()
q=r.done
q.toString
if(q)return
q=r.value[0]
q.toString
b.$2(q,A.bl(r.value[1]))}},
gH(a){var s=A.q([],t.s)
this.t(a,new A.hH(s))
return s},
gk(a){var s=a.size
s.toString
return s},
$iL:1}
A.hH.prototype={
$2(a,b){return B.a.n(this.a,a)},
$S:2}
A.a5.prototype={$ia5:1}
A.e4.prototype={
gk(a){var s=a.length
s.toString
return s},
i(a,b){var s,r
A.t(b)
s=a.length
r=b>>>0!==b||b>=s
r.toString
if(r)throw A.b(A.P(b,s,a,null))
s=a[b]
s.toString
return s},
l(a,b,c){t.cI.a(c)
throw A.b(A.D("Cannot assign element of immutable List."))},
gB(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.b(A.I("No elements"))},
p(a,b){if(!(b<a.length))return A.d(a,b)
return a[b]},
$ik:1,
$iu:1,
$if:1,
$il:1}
A.a_.prototype={$ia_:1}
A.r.prototype={
m(a){var s=a.nodeValue
return s==null?this.bZ(a):s},
$ir:1}
A.cD.prototype={
gk(a){var s=a.length
s.toString
return s},
i(a,b){var s,r
A.t(b)
s=a.length
r=b>>>0!==b||b>=s
r.toString
if(r)throw A.b(A.P(b,s,a,null))
s=a[b]
s.toString
return s},
l(a,b,c){t.G.a(c)
throw A.b(A.D("Cannot assign element of immutable List."))},
gB(a){var s
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
A.ej.prototype={
gk(a){var s=a.length
s.toString
return s},
i(a,b){var s,r
A.t(b)
s=a.length
r=b>>>0!==b||b>=s
r.toString
if(r)throw A.b(A.P(b,s,a,null))
s=a[b]
s.toString
return s},
l(a,b,c){t.he.a(c)
throw A.b(A.D("Cannot assign element of immutable List."))},
gB(a){var s
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
A.eo.prototype={
i(a,b){return A.bl(a.get(A.H(b)))},
t(a,b){var s,r,q
t.u.a(b)
s=a.entries()
for(;!0;){r=s.next()
q=r.done
q.toString
if(q)return
q=r.value[0]
q.toString
b.$2(q,A.bl(r.value[1]))}},
gH(a){var s=A.q([],t.s)
this.t(a,new A.hQ(s))
return s},
gk(a){var s=a.size
s.toString
return s},
$iL:1}
A.hQ.prototype={
$2(a,b){return B.a.n(this.a,a)},
$S:2}
A.er.prototype={
gk(a){return a.length}}
A.a1.prototype={$ia1:1}
A.et.prototype={
gk(a){var s=a.length
s.toString
return s},
i(a,b){var s,r
A.t(b)
s=a.length
r=b>>>0!==b||b>=s
r.toString
if(r)throw A.b(A.P(b,s,a,null))
s=a[b]
s.toString
return s},
l(a,b,c){t.fY.a(c)
throw A.b(A.D("Cannot assign element of immutable List."))},
gB(a){var s
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
A.eu.prototype={
gk(a){var s=a.length
s.toString
return s},
i(a,b){var s,r
A.t(b)
s=a.length
r=b>>>0!==b||b>=s
r.toString
if(r)throw A.b(A.P(b,s,a,null))
s=a[b]
s.toString
return s},
l(a,b,c){t.f7.a(c)
throw A.b(A.D("Cannot assign element of immutable List."))},
gB(a){var s
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
A.ew.prototype={
i(a,b){return a.getItem(A.H(b))},
t(a,b){var s,r,q
t.eA.a(b)
for(s=0;!0;++s){r=a.key(s)
if(r==null)return
q=a.getItem(r)
q.toString
b.$2(r,q)}},
gH(a){var s=A.q([],t.s)
this.t(a,new A.hW(s))
return s},
gk(a){var s=a.length
s.toString
return s},
$iL:1}
A.hW.prototype={
$2(a,b){return B.a.n(this.a,a)},
$S:18}
A.U.prototype={$iU:1}
A.a2.prototype={$ia2:1}
A.R.prototype={$iR:1}
A.eA.prototype={
gk(a){var s=a.length
s.toString
return s},
i(a,b){var s,r
A.t(b)
s=a.length
r=b>>>0!==b||b>=s
r.toString
if(r)throw A.b(A.P(b,s,a,null))
s=a[b]
s.toString
return s},
l(a,b,c){t.c7.a(c)
throw A.b(A.D("Cannot assign element of immutable List."))},
gB(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.b(A.I("No elements"))},
p(a,b){if(!(b<a.length))return A.d(a,b)
return a[b]},
$ik:1,
$iu:1,
$if:1,
$il:1}
A.eB.prototype={
gk(a){var s=a.length
s.toString
return s},
i(a,b){var s,r
A.t(b)
s=a.length
r=b>>>0!==b||b>=s
r.toString
if(r)throw A.b(A.P(b,s,a,null))
s=a[b]
s.toString
return s},
l(a,b,c){t.a0.a(c)
throw A.b(A.D("Cannot assign element of immutable List."))},
gB(a){var s
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
A.eD.prototype={
gk(a){var s=a.length
s.toString
return s},
i(a,b){var s,r
A.t(b)
s=a.length
r=b>>>0!==b||b>=s
r.toString
if(r)throw A.b(A.P(b,s,a,null))
s=a[b]
s.toString
return s},
l(a,b,c){t.aK.a(c)
throw A.b(A.D("Cannot assign element of immutable List."))},
gB(a){var s
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
A.eL.prototype={$idD:1}
A.eM.prototype={
gk(a){return a.length}}
A.bf.prototype={
gcW(a){var s=a.deltaY
if(s!=null)return s
throw A.b(A.D("deltaY is not supported"))},
gcV(a){var s=a.deltaX
if(s!=null)return s
throw A.b(A.D("deltaX is not supported"))},
$ibf:1}
A.bg.prototype={
bR(a,b){var s
t.c4.a(b)
this.bm(a)
s=A.k0(b,t.H)
s.toString
return this.cz(a,s)},
cz(a,b){var s=a.requestAnimationFrame(A.aG(t.c4.a(b),1))
s.toString
return s},
bm(a){var s=!!(a.requestAnimationFrame&&a.cancelAnimationFrame)
s.toString
if(s)return;(function(b){var r=["ms","moz","webkit","o"]
for(var q=0;q<r.length&&!b.requestAnimationFrame;++q){b.requestAnimationFrame=b[r[q]+"RequestAnimationFrame"]
b.cancelAnimationFrame=b[r[q]+"CancelAnimationFrame"]||b[r[q]+"CancelRequestAnimationFrame"]}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
$ibg:1}
A.aE.prototype={$iaE:1}
A.eS.prototype={
gk(a){var s=a.length
s.toString
return s},
i(a,b){var s,r
A.t(b)
s=a.length
r=b>>>0!==b||b>=s
r.toString
if(r)throw A.b(A.P(b,s,a,null))
s=a[b]
s.toString
return s},
l(a,b,c){t.g5.a(c)
throw A.b(A.D("Cannot assign element of immutable List."))},
gB(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.b(A.I("No elements"))},
p(a,b){if(!(b<a.length))return A.d(a,b)
return a[b]},
$ik:1,
$iu:1,
$if:1,
$il:1}
A.cV.prototype={
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
r=J.cc(b)
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
return A.kE(p,s,r,q)},
gbp(a){return a.height},
gN(a){var s=a.height
s.toString
return s},
gbB(a){return a.width},
gP(a){var s=a.width
s.toString
return s}}
A.f4.prototype={
gk(a){var s=a.length
s.toString
return s},
i(a,b){var s,r
A.t(b)
s=a.length
r=b>>>0!==b||b>=s
r.toString
if(r)throw A.b(A.P(b,s,a,null))
return a[b]},
l(a,b,c){t.g7.a(c)
throw A.b(A.D("Cannot assign element of immutable List."))},
gB(a){if(a.length>0)return a[0]
throw A.b(A.I("No elements"))},
p(a,b){if(!(b<a.length))return A.d(a,b)
return a[b]},
$ik:1,
$iu:1,
$if:1,
$il:1}
A.d3.prototype={
gk(a){var s=a.length
s.toString
return s},
i(a,b){var s,r
A.t(b)
s=a.length
r=b>>>0!==b||b>=s
r.toString
if(r)throw A.b(A.P(b,s,a,null))
s=a[b]
s.toString
return s},
l(a,b,c){t.G.a(c)
throw A.b(A.D("Cannot assign element of immutable List."))},
gB(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.b(A.I("No elements"))},
p(a,b){if(!(b<a.length))return A.d(a,b)
return a[b]},
$ik:1,
$iu:1,
$if:1,
$il:1}
A.fp.prototype={
gk(a){var s=a.length
s.toString
return s},
i(a,b){var s,r
A.t(b)
s=a.length
r=b>>>0!==b||b>=s
r.toString
if(r)throw A.b(A.P(b,s,a,null))
s=a[b]
s.toString
return s},
l(a,b,c){t.gf.a(c)
throw A.b(A.D("Cannot assign element of immutable List."))},
gB(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.b(A.I("No elements"))},
p(a,b){if(!(b<a.length))return A.d(a,b)
return a[b]},
$ik:1,
$iu:1,
$if:1,
$il:1}
A.fu.prototype={
gk(a){var s=a.length
s.toString
return s},
i(a,b){var s,r
A.t(b)
s=a.length
r=b>>>0!==b||b>=s
r.toString
if(r)throw A.b(A.P(b,s,a,null))
s=a[b]
s.toString
return s},
l(a,b,c){t.gn.a(c)
throw A.b(A.D("Cannot assign element of immutable List."))},
gB(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.b(A.I("No elements"))},
p(a,b){if(!(b<a.length))return A.d(a,b)
return a[b]},
$ik:1,
$iu:1,
$if:1,
$il:1}
A.jB.prototype={}
A.cW.prototype={
ar(a,b,c,d){var s=A.x(this)
s.h("~(1)?").a(a)
t.Y.a(c)
return A.V(this.a,this.b,a,!1,s.c)}}
A.f_.prototype={}
A.cX.prototype={
W(a){var s=this
if(s.b==null)return $.jw()
s.bA()
s.b=null
s.sbw(null)
return $.jw()},
aZ(a){var s,r=this
r.$ti.h("~(1)?").a(a)
if(r.b==null)throw A.b(A.I("Subscription has been canceled."))
r.bA()
s=A.k0(new A.iu(a),t.A)
r.sbw(s)
r.bz()},
bz(){var s,r=this.d
if(r!=null&&!0){s=this.b
s.toString
J.m3(s,this.c,r,!1)}},
bA(){var s,r=this.d
if(r!=null){s=this.b
s.toString
J.m2(s,this.c,t.o.a(r),!1)}},
sbw(a){this.d=t.o.a(a)},
$ial:1}
A.it.prototype={
$1(a){return this.a.$1(t.A.a(a))},
$S:5}
A.iu.prototype={
$1(a){return this.a.$1(t.A.a(a))},
$S:5}
A.jO.prototype={}
A.o.prototype={
gG(a){return new A.co(a,this.gk(a),A.ao(a).h("co<o.E>"))}}
A.co.prototype={
A(){var s=this,r=s.c+1,q=s.b
if(r<q){s.sbq(J.ac(s.a,r))
s.c=r
return!0}s.sbq(null)
s.c=q
return!1},
gC(a){var s=this.d
return s==null?this.$ti.c.a(s):s},
sbq(a){this.d=this.$ti.h("1?").a(a)},
$iae:1}
A.eT.prototype={}
A.eW.prototype={}
A.eX.prototype={}
A.eY.prototype={}
A.eZ.prototype={}
A.f1.prototype={}
A.f2.prototype={}
A.f5.prototype={}
A.f6.prototype={}
A.fb.prototype={}
A.fc.prototype={}
A.fd.prototype={}
A.fe.prototype={}
A.ff.prototype={}
A.fg.prototype={}
A.fj.prototype={}
A.fk.prototype={}
A.fm.prototype={}
A.d9.prototype={}
A.da.prototype={}
A.fn.prototype={}
A.fo.prototype={}
A.fq.prototype={}
A.fv.prototype={}
A.fw.prototype={}
A.dc.prototype={}
A.dd.prototype={}
A.fx.prototype={}
A.fy.prototype={}
A.fC.prototype={}
A.fD.prototype={}
A.fE.prototype={}
A.fF.prototype={}
A.fG.prototype={}
A.fH.prototype={}
A.fI.prototype={}
A.fJ.prototype={}
A.fK.prototype={}
A.fL.prototype={}
A.ii.prototype={
bK(a){var s,r=this.a,q=r.length
for(s=0;s<q;++s)if(r[s]===a)return s
B.a.n(r,a)
B.a.n(this.b,null)
return q},
b4(a){var s,r,q,p,o,n,m,l,k,j=this
if(a==null)return a
if(A.c8(a))return a
if(typeof a=="number")return a
if(typeof a=="string")return a
s=a instanceof Date
s.toString
if(s){s=a.getTime()
s.toString
return A.kn(s,!0)}s=a instanceof RegExp
s.toString
if(s)throw A.b(A.jL("structured clone of RegExp"))
s=typeof Promise!="undefined"&&a instanceof Promise
s.toString
if(s)return A.oQ(a,t.z)
if(A.lI(a)){r=j.bK(a)
s=j.b
if(!(r<s.length))return A.d(s,r)
q=s[r]
if(q!=null)return q
p=t.z
o=A.hx(p,p)
B.a.l(s,r,o)
j.cY(a,new A.ik(j,o))
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
for(p=J.cb(q),k=0;k<m;++k)p.l(q,k,j.b4(n.i(s,k)))
return q}return a}}
A.ik.prototype={
$2(a,b){var s=this.a.b4(b)
this.b.l(0,a,s)
return s},
$S:20}
A.iV.prototype={
$1(a){this.a.push(A.lj(a))},
$S:3}
A.j4.prototype={
$2(a,b){this.a[a]=A.lj(b)},
$S:22}
A.ij.prototype={
cY(a,b){var s,r,q,p
t.b8.a(b)
for(s=Object.keys(a),r=s.length,q=0;q<s.length;s.length===r||(0,A.aa)(s),++q){p=s[q]
b.$2(p,a[p])}}}
A.cu.prototype={$icu:1}
A.hr.prototype={
$1(a){var s,r,q,p,o=this.a
if(o.a4(0,a))return o.i(0,a)
if(t.f.b(a)){s={}
o.l(0,a,s)
for(o=J.cc(a),r=J.b7(o.gH(a));r.A();){q=r.gC(r)
s[q]=this.$1(o.i(a,q))}return s}else if(t.d.b(a)){p=[]
o.l(0,a,p)
B.a.V(p,J.kg(a,this,t.z))
return p}else return A.jU(a)},
$S:23}
A.iX.prototype={
$1(a){var s
t.Z.a(a)
s=function(b,c,d){return function(){return b(c,d,this,Array.prototype.slice.apply(arguments))}}(A.nB,a,!1)
A.jV(s,$.fR(),a)
return s},
$S:6}
A.iY.prototype={
$1(a){return new this.a(a)},
$S:6}
A.j0.prototype={
$1(a){return new A.cs(a==null?t.K.a(a):a)},
$S:24}
A.j1.prototype={
$1(a){var s=a==null?t.K.a(a):a
return new A.bA(s,t.am)},
$S:25}
A.j2.prototype={
$1(a){return new A.aQ(a==null?t.K.a(a):a)},
$S:26}
A.aQ.prototype={
i(a,b){t.K.a(b)
if(typeof b!="string"&&typeof b!="number")throw A.b(A.aJ("property is not a String or num",null))
return A.ll(this.a[b])},
l(a,b,c){if(typeof b!="string"&&typeof b!="number")throw A.b(A.aJ("property is not a String or num",null))
this.a[b]=A.jU(c)},
K(a,b){if(b==null)return!1
return b instanceof A.aQ&&this.a===b.a},
m(a){var s,r
try{s=String(this.a)
return s}catch(r){s=this.c2(0)
return s}},
gu(a){return 0}}
A.cs.prototype={}
A.bA.prototype={
bg(a){var s=this,r=a<0||a>=s.gk(s)
if(r)throw A.b(A.kG(a,0,s.gk(s),null,null))},
i(a,b){t.K.a(b)
if(A.fM(b))this.bg(b)
return this.$ti.c.a(this.c_(0,b))},
l(a,b,c){if(A.fM(b))this.bg(b)
this.c3(0,b,c)},
gk(a){var s=this.a.length
if(typeof s==="number"&&s>>>0===s)return s
throw A.b(A.I("Bad JsArray length"))},
$ik:1,
$if:1,
$il:1}
A.c4.prototype={
l(a,b,c){return this.c0(0,b,c)}}
A.jj.prototype={
$1(a){return this.a.bF(0,this.b.h("0/?").a(a))},
$S:3}
A.jk.prototype={
$1(a){if(a==null)return this.a.ap(new A.hJ(a===undefined))
return this.a.ap(a)},
$S:3}
A.hJ.prototype={
m(a){return"Promise was rejected with a value of `"+(this.a?"undefined":"null")+"`."}}
A.bb.prototype={
m(a){return"Point("+A.m(this.a)+", "+A.m(this.b)+")"},
K(a,b){if(b==null)return!1
return b instanceof A.bb&&this.a===b.a&&this.b===b.b},
gu(a){return A.n_(B.b.gu(this.a),B.b.gu(this.b),0)},
q(a,b){var s,r=this.$ti
r.a(b)
s=r.c
return new A.bb(s.a(B.b.q(this.a,b.gde(b))),s.a(B.b.q(this.b,b.gdf(b))),r)},
j(a,b){var s=this.$ti,r=s.c
return new A.bb(r.a(this.a*b),r.a(this.b*b),s)}}
A.af.prototype={$iaf:1}
A.e_.prototype={
gk(a){var s=a.length
s.toString
return s},
i(a,b){var s
A.t(b)
s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw A.b(A.P(b,this.gk(a),a,null))
s=a.getItem(b)
s.toString
return s},
l(a,b,c){t.bG.a(c)
throw A.b(A.D("Cannot assign element of immutable List."))},
gB(a){var s=a.length
s.toString
if(s>0){s=a[0]
s.toString
return s}throw A.b(A.I("No elements"))},
p(a,b){return this.i(a,b)},
$ik:1,
$if:1,
$il:1}
A.ah.prototype={$iah:1}
A.ef.prototype={
gk(a){var s=a.length
s.toString
return s},
i(a,b){var s
A.t(b)
s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw A.b(A.P(b,this.gk(a),a,null))
s=a.getItem(b)
s.toString
return s},
l(a,b,c){t.eq.a(c)
throw A.b(A.D("Cannot assign element of immutable List."))},
gB(a){var s=a.length
s.toString
if(s>0){s=a[0]
s.toString
return s}throw A.b(A.I("No elements"))},
p(a,b){return this.i(a,b)},
$ik:1,
$if:1,
$il:1}
A.hL.prototype={
gk(a){return a.length}}
A.ey.prototype={
gk(a){var s=a.length
s.toString
return s},
i(a,b){var s
A.t(b)
s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw A.b(A.P(b,this.gk(a),a,null))
s=a.getItem(b)
s.toString
return s},
l(a,b,c){A.H(c)
throw A.b(A.D("Cannot assign element of immutable List."))},
gB(a){var s=a.length
s.toString
if(s>0){s=a[0]
s.toString
return s}throw A.b(A.I("No elements"))},
p(a,b){return this.i(a,b)},
$ik:1,
$if:1,
$il:1}
A.am.prototype={$iam:1}
A.eE.prototype={
gk(a){var s=a.length
s.toString
return s},
i(a,b){var s
A.t(b)
s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw A.b(A.P(b,this.gk(a),a,null))
s=a.getItem(b)
s.toString
return s},
l(a,b,c){t.cM.a(c)
throw A.b(A.D("Cannot assign element of immutable List."))},
gB(a){var s=a.length
s.toString
if(s>0){s=a[0]
s.toString
return s}throw A.b(A.I("No elements"))},
p(a,b){return this.i(a,b)},
$ik:1,
$if:1,
$il:1}
A.f9.prototype={}
A.fa.prototype={}
A.fh.prototype={}
A.fi.prototype={}
A.fr.prototype={}
A.fs.prototype={}
A.fz.prototype={}
A.fA.prototype={}
A.fY.prototype={
gk(a){return a.length}}
A.dA.prototype={
i(a,b){return A.bl(a.get(A.H(b)))},
t(a,b){var s,r,q
t.u.a(b)
s=a.entries()
for(;!0;){r=s.next()
q=r.done
q.toString
if(q)return
q=r.value[0]
q.toString
b.$2(q,A.bl(r.value[1]))}},
gH(a){var s=A.q([],t.s)
this.t(a,new A.fZ(s))
return s},
gk(a){var s=a.size
s.toString
return s},
$iL:1}
A.fZ.prototype={
$2(a,b){return B.a.n(this.a,a)},
$S:2}
A.dB.prototype={
gk(a){return a.length}}
A.b8.prototype={}
A.eg.prototype={
gk(a){return a.length}}
A.eR.prototype={}
A.dC.prototype={$idC:1}
A.aK.prototype={$iaK:1}
A.dQ.prototype={$idQ:1}
A.ek.prototype={$iek:1}
A.en.prototype={$ien:1}
A.cJ.prototype={$icJ:1}
A.bY.prototype={
al(a,b,c){return a.bindBuffer(b,c)},
F(a,b,c){return a.bindFramebuffer(b,c)},
bD(a,b,c){return a.bindRenderbuffer(b,c)},
bE(a,b,c){return a.bindTexture(b,c)},
bI(a,b){return a.deleteBuffer(b)},
cR(a,b){return a.deleteFramebuffer(b)},
cS(a,b){return a.deleteProgram(b)},
cT(a,b){return a.deleteRenderbuffer(b)},
bJ(a,b){return a.deleteShader(b)},
cU(a,b){return a.deleteTexture(b)},
d_(a,b,c,d,e){return a.framebufferRenderbuffer(b,c,d,e)},
aW(a,b,c,d,e,f){return a.framebufferTexture2D(b,c,d,e,f)},
bV(a,b,c,d,e,f,g,h,i,j){var s=i==null
if(!s&&h!=null&&A.fM(g)){this.cF(a,b,c,d,e,f,g,h,i,j)
return}if(t.gA.b(g)&&h==null&&s&&j==null){this.cG(a,b,c,d,e,f,g)
return}throw A.b(A.aJ("Incorrect number or type of arguments",null))},
da(a,b,c,d,e,f,g){return this.bV(a,b,c,d,e,f,g,null,null,null)},
cF(a,b,c,d,e,f,g,h,i,j){return a.texImage2D(b,c,d,e,f,g,h,i,j)},
cG(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
a6(a,b,c){return a.uniform1i(b,c)},
dc(a,b,c){return a.uniform2fv(b,c)},
bW(a,b,c){return a.uniform4fv(b,c)},
b3(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
dd(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
aw(a,b){return a.useProgram(b)},
$ibY:1}
A.es.prototype={$ies:1}
A.eC.prototype={$ieC:1}
A.eG.prototype={$ieG:1}
A.fV.prototype={}
A.hT.prototype={}
A.i7.prototype={}
A.dR.prototype={
gcZ(){var s=B.a.cX(this.a,0,new A.hf(),t.H)
if(typeof s!=="number")return A.an(s)
return B.b.U(20/s)},
ca(a){var s,r,q=this
A.li(a)
s=q.f=(a-q.b)*0.001
q.b=a
r=q.c+=s
q.d+=s
q.e+=s
if(r>=0.03333333333333333){s=B.b.b5(r,0.03333333333333333)
q.c=s
q.r.n(0,0.03333333333333333+s)}s=q.d
if(s>=0.016666666666666666){s=B.b.b5(s,0.016666666666666666)
q.d=s
q.w.n(0,0.016666666666666666+s)
s=q.a
if(!!s.fixed$length)A.bm(A.D("removeAt"))
r=s.length
if(0>=r)A.bm(A.kH(0,null))
s.splice(0,1)[0]
B.a.n(s,q.e)
q.e=0}s=window
s.toString
q.x=B.i.bR(s,q.gba())},
scH(a){this.r=t.I.a(a)},
scI(a){this.w=t.I.a(a)}}
A.hf.prototype={
$2(a,b){return A.li(a)+A.bL(b)},
$S:28}
A.dS.prototype={}
A.aV.prototype={
c5(a){var s=a.a,r=s*s,q=a.b,p=q*q,o=a.c,n=o*o,m=s*q,l=s*o,k=q*o,j=a.d,i=j*s,h=j*q,g=j*o,f=new A.hC(this)
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
h=a3.gcO(a3)
g=h.i(0,0)
f=h.i(0,1)
e=h.i(0,2)
d=h.i(0,3)
c=h.i(0,4)
b=h.i(0,5)
a=h.i(0,6)
a0=h.i(0,7)
a1=h.i(0,8)
return new A.aV(A.q([B.b.j(q,g)+B.b.j(p,f)+B.b.j(o,e),B.b.j(n,g)+B.b.j(m,f)+B.b.j(l,e),B.b.j(k,g)+B.b.j(j,f)+B.b.j(i,e),B.b.j(q,d)+B.b.j(p,c)+B.b.j(o,b),B.b.j(n,d)+B.b.j(m,c)+B.b.j(l,b),B.b.j(k,d)+B.b.j(j,c)+B.b.j(i,b),B.b.j(q,a)+B.b.j(p,a0)+B.b.j(o,a1),B.b.j(n,a)+B.b.j(m,a0)+B.b.j(l,a1),B.b.j(k,a)+B.b.j(j,a0)+B.b.j(i,a1)],t.n))},
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
A.hC.prototype={
$3(a,b,c){B.a.l(this.a.a,b*3+a,c)
return c},
$S:29}
A.bE.prototype={
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
return new A.bE(A.q([q*a0+p*a4+o*a8+n*b2,m*a0+l*a4+k*a8+j*b2,i*a0+h*a4+g*a8+f*b2,e*a0+d*a4+c*a8+b*b2,q*a1+p*a5+o*a9+n*b3,m*a1+l*a5+k*a9+j*b3,i*a1+h*a5+g*a9+f*b3,e*a1+d*a5+c*a9+b*b3,q*a2+p*a6+o*b0+n*b4,m*a2+l*a6+k*b0+j*b4,i*a2+h*a6+g*b0+f*b4,e*a2+d*a6+c*b0+b*b4,q*a3+p*a7+o*b1+n*b5,m*a3+l*a7+k*b1+j*b5,i*a3+h*a7+g*b1+f*b5,e*a3+d*a7+c*b1+b*b5],t.n))},
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
A.aB.prototype={
q(a,b){t.m.a(b)
return new A.aB(B.b.q(this.a,b.gde(b)),B.b.q(this.b,b.gdf(b)))},
j(a,b){t.m.a(b)
return new A.aB(this.a*b.a,this.b*b.b)},
m(a){return"["+A.m(this.a)+", "+A.m(this.b)+"]"}}
A.ai.prototype={
q(a,b){t.eU.a(b)
return new A.ai(this.a+b.a,this.b+b.b,this.c+b.c)},
j(a,b){return new A.ai(this.a*b,this.b*b,this.c*b)},
m(a){return"["+A.m(this.a)+", "+A.m(this.b)+", "+A.m(this.c)+"]"}}
A.cH.prototype={}
A.av.prototype={
c6(a){var s,r,q,p=this,o=new A.hO(a),n=o.$2(0,0),m=o.$2(1,1),l=o.$2(2,2),k=n+m+l
if(k>0){s=Math.sqrt(k+1)*0.5
p.d=s
r=0.25/s
s=o.$2(2,1)
q=o.$2(1,2)
if(typeof s!=="number")return s.a_()
if(typeof q!=="number")return A.an(q)
p.a=(s-q)*r
q=o.$2(0,2)
s=o.$2(2,0)
if(typeof q!=="number")return q.a_()
if(typeof s!=="number")return A.an(s)
p.b=(q-s)*r
s=o.$2(1,0)
q=o.$2(0,1)
if(typeof s!=="number")return s.a_()
if(typeof q!=="number")return A.an(q)
p.c=(s-q)*r}else if(n>m&&n>l){s=Math.sqrt(n-m-l+1)*0.5
p.a=s
r=0.25/s
s=o.$2(1,0)
q=o.$2(0,1)
if(typeof s!=="number")return s.q()
if(typeof q!=="number")return A.an(q)
p.b=(s+q)*r
q=o.$2(0,2)
s=o.$2(2,0)
if(typeof q!=="number")return q.q()
if(typeof s!=="number")return A.an(s)
p.c=(q+s)*r
s=o.$2(2,1)
q=o.$2(1,2)
if(typeof s!=="number")return s.a_()
if(typeof q!=="number")return A.an(q)
p.d=(s-q)*r}else if(m>l){s=Math.sqrt(m-n-l+1)*0.5
p.b=s
r=0.25/s
s=o.$2(1,0)
q=o.$2(0,1)
if(typeof s!=="number")return s.q()
if(typeof q!=="number")return A.an(q)
p.a=(s+q)*r
q=o.$2(2,1)
s=o.$2(1,2)
if(typeof q!=="number")return q.q()
if(typeof s!=="number")return A.an(s)
p.c=(q+s)*r
s=o.$2(0,2)
q=o.$2(2,0)
if(typeof s!=="number")return s.a_()
if(typeof q!=="number")return A.an(q)
p.d=(s-q)*r}else{s=Math.sqrt(l-n-m+1)*0.5
p.c=s
r=0.25/s
s=o.$2(0,2)
q=o.$2(2,0)
if(typeof s!=="number")return s.q()
if(typeof q!=="number")return A.an(q)
p.a=(s+q)*r
q=o.$2(2,1)
s=o.$2(1,2)
if(typeof q!=="number")return q.q()
if(typeof s!=="number")return A.an(s)
p.b=(q+s)*r
s=o.$2(1,0)
q=o.$2(0,1)
if(typeof s!=="number")return s.a_()
if(typeof q!=="number")return A.an(q)
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
$S:46}
A.cN.prototype={}
A.aW.prototype={
gT(){var s,r,q,p,o,n,m,l,k=this.a,j=k.length
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
return new A.aV(A.q([s,r,q,p,o,n,m,l,k[10]],t.n))},
sT(a){var s=a.a,r=this.a
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
return new A.J(s,r,q[2])},
gbX(){var s,r,q=this.a,p=q.length
if(4>=p)return A.d(q,4)
s=q[4]
if(5>=p)return A.d(q,5)
r=q[5]
if(6>=p)return A.d(q,6)
return new A.J(s,r,q[6])},
gbL(a){var s,r,q=this.a,p=q.length
if(8>=p)return A.d(q,8)
s=q[8]
if(9>=p)return A.d(q,9)
r=q[9]
if(10>=p)return A.d(q,10)
return new A.J(s,r,q[10])},
gO(){var s,r,q=this.a,p=q.length
if(12>=p)return A.d(q,12)
s=q[12]
if(13>=p)return A.d(q,13)
r=q[13]
if(14>=p)return A.d(q,14)
return new A.ai(s,r,q[14])},
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
e=a9.gcO(a9)
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
return new A.aW(A.q([B.b.j(q,d)+B.b.j(p,a0)+B.b.j(o,a4),B.b.j(m,d)+B.b.j(l,a0)+B.b.j(k,a4),B.b.j(i,d)+B.b.j(h,a0)+B.b.j(g,a4),0,B.b.j(q,c)+B.b.j(p,a1)+B.b.j(o,a5),B.b.j(m,c)+B.b.j(l,a1)+B.b.j(k,a5),B.b.j(i,c)+B.b.j(h,a1)+B.b.j(g,a5),0,B.b.j(q,b)+B.b.j(p,a2)+B.b.j(o,a6),B.b.j(m,b)+B.b.j(l,a2)+B.b.j(k,a6),B.b.j(i,b)+B.b.j(h,a2)+B.b.j(g,a6),0,B.b.j(q,a)+B.b.j(p,a3)+B.b.j(o,a7)+n,B.b.j(m,a)+B.b.j(l,a3)+B.b.j(k,a7)+j,B.b.j(i,a)+B.b.j(h,a3)+B.b.j(g,a7)+f,1],t.n))}}
A.J.prototype={
q(a,b){t.cW.a(b)
return new A.J(this.a+b.a,this.b+b.b,this.c+b.c)},
j(a,b){return new A.J(this.a*b,this.b*b,this.c*b)},
Y(a){return new A.J(-this.a,-this.b,-this.c)},
m(a){return"["+A.m(this.a)+", "+A.m(this.b)+", "+A.m(this.c)+"]"}}
A.hi.prototype={
R(a,b,c,d,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e="byteOffset"
t.aH.a(a0)
t.g6.a(a1)
s=J.ax(d)
r=J.ac(J.ac(J.ac(s.i(d,"meshes"),a),"primitives"),b)
q=s.i(d,"accessors")
p=s.i(d,"bufferViews")
o=s.i(d,"buffers")
n=A.q([],t.U)
s=J.ax(r)
J.fU(s.i(r,"attributes"),new A.hj(this,a1,q,p,a0,o,c,n))
m=J.ac(q,s.i(r,"indices"))
s=J.ax(m)
l=J.ac(p,s.i(m,"bufferView"))
k=J.ax(l)
j=k.i(l,e)
i=A.t(j==null?0:j)
k=a0.i(0,J.ac(J.ac(o,k.i(l,"buffer")),"uri"))
k.toString
j=s.i(m,e)
h=A.t(j==null?0:j)
A.t(s.i(m,"componentType"))
g=J.kf(s.i(m,"count"),2)
s=new Uint8Array(A.dk(A.mC(k.buffer,i+h,A.lh(g)))).buffer
A.iU(s,0,null)
f=B.f.cD(s.byteLength-0,2)
return new A.cF(c.b8(new Uint16Array(s,0,f)),new A.eK(0),new A.cP(A.jF(n,t.cQ)),4)},
c7(a){switch(J.ac(a,"type")){case"VEC4":return 4
case"VEC3":return 3
case"VEC2":return 2
default:return 1}}}
A.hj.prototype={
$2(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=this,g="byteOffset",f=h.b
if(f.i(0,a)==null)return
f=f.i(0,a)
f.toString
s=J.ac(h.c,b)
r=J.ax(s)
q=J.ac(h.d,r.i(s,"bufferView"))
p=J.ax(q)
o=p.i(q,g)
p=h.e.i(0,J.ac(J.ac(h.f,p.i(q,"buffer")),"uri"))
p.toString
n=r.i(s,g)
m=A.t(n==null?0:n)
l=J.fT(r.i(s,"componentType"),5123)?2:4
t.f.a(s)
k=h.a.c7(s)
j=J.kf(r.i(s,"count"),k)
r=p.buffer
p=A.t(J.m0(o,m))
A.lh(j)
A.iU(r,p,j)
i=h.r.b7(new Float32Array(A.dk(new Float32Array(r,p,j))))
B.a.n(h.w,new A.bo(A.H(a),f,k,k*l,i.b))},
$S:31}
A.aR.prototype={}
A.ad.prototype={}
A.ct.prototype={}
A.eO.prototype={}
A.c5.prototype={
aI(){return"_KeyAction."+this.b}}
A.ht.prototype={
aD(){var s,r,q,p,o,n,m=this
for(s=t.bl,r=m.b,q=0;q<2;++q){p=B.W[q]
r.l(0,p,new A.aZ(null,null,s))}s=m.a
r=document
r.toString
o=t.eN
n=t.g
B.a.n(s,A.V(r,"keydown",o.a(new A.hu(m)),!1,n))
B.a.n(s,A.V(r,"keyup",o.a(new A.hv(m)),!1,n))},
E(){var s,r,q,p,o
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.aa)(s),++q)s[q].W(0)
B.a.S(s)
for(s=this.b,r=s.gbY(s),p=A.x(r),p=p.h("@<1>").v(p.z[1]),r=new A.aT(J.b7(r.a),r.b,p.h("aT<1,2>")),p=p.z[1];r.A();){o=r.a;(o==null?p.a(o):o).ao(0)}s.S(0)}}
A.hu.prototype={
$1(a){var s,r
t.g.a(a)
s=this.a.b.i(0,B.j)
s.toString
r=a.keyCode
r.toString
s.n(0,new A.aR(r))},
$S:12}
A.hv.prototype={
$1(a){var s,r
t.g.a(a)
s=this.a.b.i(0,B.k)
s.toString
r=a.keyCode
r.toString
s.n(0,new A.aR(r))},
$S:12}
A.b_.prototype={
aI(){return"_MouseAction."+this.b}}
A.e5.prototype={
aD(){var s,r,q,p,o,n
for(s=t.er,r=this.b,q=0;q<5;++q){p=B.X[q]
r.l(0,p,new A.aZ(null,null,s))}s=this.a
r=document
r.toString
o=t.h2.a(this.gcd())
n=t.V
B.a.n(s,A.V(r,"mousedown",o,!1,n))
B.a.n(s,A.V(r,"mouseup",o,!1,n))
B.a.n(s,A.V(r,"mousemove",o,!1,n))
B.a.n(s,A.V(r,"mouseout",o,!1,n))
B.a.n(s,A.V(r,A.H(A.ko(r)),t.h8.a(o),!1,t.J))},
E(){var s,r,q,p,o
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.aa)(s),++q)s[q].W(0)
B.a.S(s)
for(s=this.b,r=s.gbY(s),p=A.x(r),p=p.h("@<1>").v(p.z[1]),r=new A.aT(J.b7(r.a),r.b,p.h("aT<1,2>")),p=p.z[1];r.A();){o=r.a;(o==null?p.a(o):o).ao(0)}s.S(0)},
ce(a){var s,r,q=this
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
switch(r){case"mouseout":q.b.i(0,B.D).n(0,new A.ad(s))
break
case"mousemove":q.b.i(0,B.l).n(0,new A.ad(s))
break
case"mousedown":r=q.b.i(0,B.E)
r.toString
a.button.toString
r.n(0,new A.ct(s))
break
case"mouseup":r=q.b.i(0,B.F)
r.toString
a.button.toString
r.n(0,new A.ct(s))
break
case"wheel":t.J.a(a)
B.C.gcV(a)
B.C.gcW(a)
q.b.i(0,B.G).n(0,new A.eO(s))
break}}}
A.h3.prototype={
aB(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.d,d=e.gbL(e).Y(0),c=e.gbS(e).Y(0),b=e.gbX()
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
g.sT(new A.aV(q))
g.sO(new A.ai(i*s+j*r+k*e,l*s+m*r+n*e,o*s+p*r+h*e))
f.a=f.b.j(0,g)}}
A.bo.prototype={}
A.h0.prototype={}
A.hn.prototype={}
A.eK.prototype={}
A.h2.prototype={
b8(a){var s=this.a,r=s.byteLength
this.a=new Uint16Array(A.dk(B.a.q(B.u.av(s),B.u.av(a))))
return new A.hn(a.length,r,5123)},
b7(a){var s=this.b,r=s.byteLength
this.b=new Float32Array(A.dk(B.a.q(B.t.av(s),B.t.av(a))))
return new A.eK(r)}}
A.h9.prototype={}
A.dP.prototype={
c9(a,b,c){var s,r,q=this,p=36161
q.c=a
s=a.a.createFramebuffer()
s.toString
q.d=s
if(c){r=q.c.a
s=r.createRenderbuffer()
s.toString
q.e=s
B.c.F(r,36160,q.d)
B.c.bD(r,p,q.e)
s=b.b
r.renderbufferStorage(p,33189,A.t(s.a),A.t(s.b))
B.c.d_(r,36160,36096,p,q.e)
B.c.bD(r,p,null)
B.c.F(r,36160,null)}s=b.b
q.a=A.t(s.a)
q.b=A.t(s.b)},
E(){var s,r,q=this
q.f.E()
q.f=null
s=q.e
if(s!=null){r=q.c.a
r.toString
B.c.cT(r,s)
q.e=null}s=q.c.a
s.toString
B.c.cR(s,q.d)
q.c=null}}
A.h_.prototype={}
A.hd.prototype={}
A.hc.prototype={}
A.cF.prototype={
a8(){var s,r,q,p,o,n,m,l=this
for(s=l.c.a,r=s.length,q=l.b.b,p=0;p<s.length;s.length===r||(0,A.aa)(s),++p){o=s[p]
n=l.e.a
n.toString
m=o.b
n.vertexAttribPointer(m,o.c,5126,!1,o.d,q+o.e)
l.e.a.enableVertexAttribArray(m)}},
a7(){var s,r,q,p,o
for(s=this.c.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.aa)(s),++q){p=s[q]
o=this.e.a
o.toString
o.disableVertexAttribArray(p.b)}},
aC(){var s=this.a
this.e.a.drawElements(this.d,s.a,s.c,s.b)}}
A.bX.prototype={
gbk(){var s=this.a.a
s.toString
return s},
E(){var s=this,r=s.a.a
r.toString
B.c.cS(r,s.b)
r=s.a.a
r.toString
B.c.bJ(r,s.c)
r=s.a.a
r.toString
B.c.bJ(r,s.d)
s.a=null},
ac(a,b,c){var s,r,q,p,o,n,m=this
m.c=m.b9(35633,a)
m.d=m.b9(35632,b)
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
for(r=c.a,q=r.length,p=0;p<r.length;r.length===q||(0,A.aa)(r),++p){o=r[p]
n=m.a.a
n.toString
n.bindAttribLocation(s,o.b,o.a)}m.a.a.linkProgram(s)
if(m.a.a.getProgramParameter(s,35714)==null){s=m.gbk().getProgramInfoLog(s)
s.toString
throw A.b(A.dL("Invalide program\n          "+s+"\n        "))}return s},
b9(a,b){var s,r=this,q=r.a.a.createShader(a)
q.toString
r.a.a.shaderSource(q,b)
r.a.a.compileShader(q)
s=r.a.a.getShaderParameter(q,35713)
s.toString
if(!A.jT(s)){q=r.gbk().getShaderInfoLog(q)
q.toString
throw A.b(A.dL("Invalide shader\n          type:"+a+" "+q+"\n        "))}return q}}
A.c0.prototype={
E(){var s,r=this,q=r.e
if(q!=null){r.I(q)
q=$.lM()
r.d.a.pixelStorei(37440,1)
s=r.d.a
s.toString
B.c.da(s,3553,0,r.a,r.b,r.c,q)
r.d.a.pixelStorei(37440,0)
r.a0()}q=r.d.a
q.toString
B.c.cU(q,r.f)
r.d=r.f=null},
I(a){var s
this.e=a
s=this.d.a
s.activeTexture(33984+a)
B.c.bE(s,3553,this.f)},
a0(){var s,r=this.d.a
r.toString
s=this.e
s.toString
r.activeTexture(33984+s)
B.c.bE(r,3553,null)
this.e=null},
aa(a,b,c){var s=this,r=s.d.a
r.toString
B.c.bV(r,3553,0,s.a,b,c,0,s.b,s.c,a)},
aF(a,b){var s=this,r=3553
s.d.a.texParameteri(r,10240,a)
s.d.a.texParameteri(r,10241,a)
s.d.a.texParameteri(r,10242,b)
s.d.a.texParameteri(r,10243,b)},
a9(a){return this.aF(a,33071)},
aE(){return this.aF(9729,33071)}}
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
A.hD.prototype={}
A.hE.prototype={}
A.hR.prototype={}
A.cP.prototype={}
A.hP.prototype={}
A.ih.prototype={
sam(a){var s=this
s.a.enable(3042)
s.a.blendFunc(1,0)
s.a.blendEquation(32774)
s.a.blendColor(0,0,0,0)},
saq(a){if(a==null){this.a.disable(2929)
return}this.a.enable(2929)
this.a.depthFunc(515)},
c4(a,b){var s,r,q,p=this,o=t.z
o=t.cl.a(B.e.az(a,"webgl2",A.e0(["alpha",!1,"antialias",!0,"depth",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],o,o)))
p.a=o
A.n2(b,o)
for(o=b.e,s=o.length,r=0;r<o.length;o.length===s||(0,A.aa)(o),++r){q=o[r]
p.a.getExtension(q)}p.a.frontFace(2305)
p.a.pixelStorei(37441,0)},
ab(a){var s,r=this.a
r.toString
s=a.b
r.viewport(0,0,A.t(s.a),A.t(s.b))}}
A.hU.prototype={}
A.hV.prototype={
c8(a){var s,r,q,p,o=new Float32Array(32)
for(s=0;s<32;s+=2){r=6.283185307179586*s/16
q=Math.cos(r)
if(!(s<32))return A.d(o,s)
o[s]=q
q=s+1
p=Math.sin(r)
if(!(q<32))return A.d(o,q)
o[q]=p}q=new A.c0(33328,33319,5126)
q.d=a
p=a.a.createTexture()
p.toString
q.f=p
q.I(0)
q.aa(o,4,4)
q.aF(9728,10497)
q.a0()
return q}}
A.i3.prototype={}
A.ig.prototype={}
A.eN.prototype={
cc(a,b){var s,r
t.j.a(a)
t.dt.a(b)
s=J.m7(a)
r=A.jT(J.m8(s))
this.e=r
if(r)this.c.n(0,s)
else this.d.n(0,s)}}
A.at.prototype={
aI(){return"PrimitiveId."+this.b}}
A.bV.prototype={}
A.jf.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e="webglcontextlost"
t.ew.a(a)
s=$.ds()
if(!A.n3())A.bm(A.dL("WebGL is not available"))
r=s.a
q=r.style
q.position="absolute"
q.width="100%"
q.height="100%"
q.top="0"
q.left="0"
q=A.mv(s.gcb())
s.f=q
q.observe(r)
s.f.takeRecords().toString
q=$.jp()
q.children.toString
q.appendChild(r).toString
q=$.jo()
p=window
p.toString
q.x=B.i.bR(p,q.gba())
p=t.i
q.scH(A.hX(p))
q.scI(A.hX(p))
p=$.kb()
p.aD()
o=$.kc()
o.aD()
n=J.ax(a)
A.mr(t.f.a(B.N.cP(0,A.H(n.i(a,0)))),J.m4(A.nH(t.r.a(n.i(a,1)).response)))
A.ks()
$.jZ=0
n=$.fS()
m=$.ka()
l=1/Math.tan(m.a*0.5)
k=m.d
j=m.c
i=k/(k-j)
k=n.b
h=k.a
B.a.l(h,0,l/m.b)
B.a.l(h,1,0)
B.a.l(h,2,0)
B.a.l(h,3,0)
B.a.l(h,4,0)
B.a.l(h,5,l)
B.a.l(h,6,0)
B.a.l(h,7,0)
B.a.l(h,8,0)
B.a.l(h,9,0)
B.a.l(h,10,-i)
B.a.l(h,11,-1)
B.a.l(h,12,0)
B.a.l(h,13,0)
B.a.l(h,14,-j*i)
B.a.l(h,15,0)
n.a=k.j(0,n.c)
k=$.ke()
h=n.d
h.sO(k)
n.aB()
j=$.lZ()
g=A.jM(A.kV($.m_(),j))
f=A.kV(j,g)
m=h.a
B.a.l(m,8,j.a)
B.a.l(m,9,j.b)
B.a.l(m,10,j.c)
B.a.l(m,0,g.a)
B.a.l(m,1,g.b)
B.a.l(m,2,g.c)
B.a.l(m,4,f.a)
B.a.l(m,5,f.b)
B.a.l(m,6,f.c)
n.aB()
n=$.dr()
n.a=h
n.d=1
n.b=k
n.c=A.jI(h.gT())
n=$.cd()
n.a=h
n.f=B.f.an(1,0,1)
n=window
n.toString
B.a.n($.Q,A.V(n,"beforeunload",t.gq.a(new A.ja()),!1,t.c9))
n=window
n.toString
B.a.n($.Q,A.V(n,"resize",t.fi.a(new A.jb()),!1,t.A))
n=q.r
n.toString
B.a.n($.Q,new A.S(n,A.x(n).h("S<1>")).X(A.oC()))
q=q.w
q.toString
B.a.n($.Q,new A.S(q,A.x(q).h("S<1>")).X(A.oD()))
o=o.b.i(0,B.l)
o.toString
B.a.n($.Q,new A.S(o,A.x(o).h("S<1>")).X(A.oB()))
p=p.b
o=p.i(0,B.j)
o.toString
B.a.n($.Q,new A.S(o,A.x(o).h("S<1>")).X(A.oz()))
p=p.i(0,B.k)
p.toString
B.a.n($.Q,new A.S(p,A.x(p).h("S<1>")).X(A.oA()))
p=window
p.toString
B.a.n($.Q,A.V(p,"devicemotion",t.ax.a(A.ox()),!1,t.D))
p=window
p.toString
B.a.n($.Q,A.V(p,"deviceorientation",t.aA.a(A.oy()),!1,t.W))
p=t.eJ
o=p.h("~(1)?")
p=p.c
B.a.n($.Q,A.V(r,e,o.a(new A.jc()),!1,p))
B.a.n($.Q,A.V(r,e,o.a(new A.jd()),!1,p))
s=s.c
B.a.n($.Q,new A.S(s,A.x(s).h("S<1>")).X(new A.je()))
s=$.k8()
p=t.Z
s.l(0,"Report",A.ly(A.oE(),p))
s.l(0,"Kill",A.ly(A.ow(),p))},
$S:35}
A.ja.prototype={
$1(a){return A.ky()},
$S:5}
A.jb.prototype={
$1(a){return A.kI()},
$S:5}
A.jc.prototype={
$1(a){t.R.a(a)
return A.kp()},
$S:13}
A.jd.prototype={
$1(a){t.R.a(a)
return A.ks()},
$S:13}
A.je.prototype={
$1(a){return A.kI()},
$S:3};(function aliases(){var s=J.bT.prototype
s.bZ=s.m
s=J.bB.prototype
s.c1=s.m
s=A.v.prototype
s.c2=s.m
s=A.aQ.prototype
s.c_=s.i
s.c0=s.l
s=A.c4.prototype
s.c3=s.l
s=A.dP.prototype
s.aA=s.c9})();(function installTearOffs(){var s=hunkHelpers._static_1,r=hunkHelpers._static_0,q=hunkHelpers._static_2,p=hunkHelpers.installInstanceTearOff,o=hunkHelpers._instance_2u,n=hunkHelpers._instance_0u,m=hunkHelpers._instance_1u
s(A,"og","n5",7)
s(A,"oh","n6",7)
s(A,"oi","n7",7)
r(A,"lB","o9",0)
s(A,"oj","o0",3)
q(A,"ol","o2",4)
r(A,"ok","o1",0)
p(A.cR.prototype,"gcN",0,1,null,["$2","$1"],["bG","ap"],32,0,0)
o(A.F.prototype,"gbj","L",4)
n(A.c2.prototype,"gcr","cs",0)
s(A,"q7","ko",38)
s(A,"oM","ll",39)
m(A.dR.prototype,"gba","ca",27)
m(A.e5.prototype,"gcd","ce",33)
r(A,"qa","kM",1)
r(A,"q9","kL",1)
r(A,"qc","kO",1)
r(A,"qb","kN",1)
r(A,"qe","kS",1)
r(A,"qd","kR",1)
r(A,"qg","kZ",1)
r(A,"qf","kY",1)
o(A.eN.prototype,"gcb","cc",34)
r(A,"ow","ky",0)
r(A,"oE","mX",41)
s(A,"oB","mH",42)
s(A,"oz","mF",8)
s(A,"oA","mG",8)
s(A,"ox","mD",44)
s(A,"oy","mE",45)
s(A,"oC","mI",11)
s(A,"oD","mJ",11)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.mixinHard,q=hunkHelpers.inherit,p=hunkHelpers.inheritMany
q(A.v,null)
p(A.v,[A.jD,J.bT,J.bn,A.E,A.b9,A.hS,A.f,A.bC,A.aT,A.T,A.bZ,A.bU,A.cg,A.d2,A.dW,A.i8,A.hK,A.db,A.iK,A.y,A.hw,A.cw,A.ir,A.aj,A.f3,A.iP,A.iN,A.cf,A.be,A.c1,A.cQ,A.cR,A.bK,A.F,A.eQ,A.bh,A.eV,A.d8,A.c2,A.dj,A.d_,A.e,A.di,A.dG,A.dI,A.ck,A.is,A.eh,A.cK,A.iv,A.he,A.G,A.ft,A.cL,A.h5,A.jB,A.cX,A.jO,A.o,A.co,A.ii,A.aQ,A.hJ,A.bb,A.i7,A.dR,A.dS,A.aV,A.bE,A.aB,A.ai,A.cH,A.av,A.J,A.hi,A.aR,A.ad,A.ht,A.e5,A.h3,A.bo,A.h0,A.hn,A.eK,A.h2,A.h9,A.dP,A.cF,A.bX,A.c0,A.ia,A.cP,A.hP,A.ih,A.hU,A.hV,A.i3,A.ig,A.eN,A.bV])
p(J.bT,[J.dV,J.cr,J.a,J.by,J.bz,J.bx,J.ba])
p(J.a,[J.bB,J.z,A.e6,A.cA,A.c,A.fW,A.j,A.bq,A.aL,A.A,A.eT,A.ap,A.h8,A.ha,A.eW,A.cm,A.eY,A.hb,A.f1,A.bR,A.a4,A.hk,A.f5,A.cp,A.bw,A.ho,A.hz,A.hF,A.fb,A.fc,A.a5,A.fd,A.ff,A.a6,A.fj,A.fm,A.a7,A.fn,A.a8,A.fq,A.U,A.fv,A.i4,A.a9,A.fx,A.i5,A.ib,A.fC,A.fE,A.fG,A.fI,A.fK,A.cu,A.af,A.f9,A.ah,A.fh,A.hL,A.fr,A.am,A.fz,A.fY,A.eR,A.dC,A.dQ,A.ek,A.en,A.cJ,A.bY,A.es,A.eC,A.eG])
p(J.bB,[J.ei,J.bI,J.aA])
q(J.hp,J.z)
p(J.bx,[J.cq,J.dX])
p(A.E,[A.cv,A.aX,A.dY,A.eI,A.eU,A.ep,A.ce,A.f0,A.aI,A.ee,A.eJ,A.eH,A.bH,A.dH])
p(A.b9,[A.dE,A.dF,A.ez,A.hq,A.j6,A.j8,A.im,A.il,A.hg,A.iA,A.iH,A.i0,A.hZ,A.i1,A.iM,A.hl,A.hm,A.it,A.iu,A.iV,A.hr,A.iX,A.iY,A.j0,A.j1,A.j2,A.jj,A.jk,A.hC,A.hu,A.hv,A.jf,A.ja,A.jb,A.jc,A.jd,A.je])
p(A.dE,[A.jh,A.io,A.ip,A.iO,A.iw,A.iD,A.iC,A.iz,A.iy,A.ix,A.iG,A.iF,A.iE,A.i_,A.hY,A.i2,A.iq,A.iJ,A.iT,A.j_,A.iL])
p(A.f,[A.k,A.bD,A.d1])
p(A.k,[A.ag,A.as,A.cZ])
q(A.cn,A.bD)
p(A.ag,[A.aU,A.f8])
q(A.c7,A.bU)
q(A.cO,A.c7)
q(A.ch,A.cO)
q(A.ci,A.cg)
p(A.dF,[A.hM,A.j7,A.hh,A.iB,A.iS,A.hB,A.hI,A.hG,A.hH,A.hQ,A.hW,A.ik,A.j4,A.fZ,A.hf,A.hO,A.hj])
q(A.cE,A.aX)
p(A.ez,[A.ev,A.bP])
q(A.eP,A.ce)
p(A.y,[A.aP,A.cY,A.f7])
p(A.cA,[A.e7,A.bW])
p(A.bW,[A.d4,A.d6])
q(A.d5,A.d4)
q(A.cy,A.d5)
q(A.d7,A.d6)
q(A.cz,A.d7)
p(A.cy,[A.cx,A.e8])
p(A.cz,[A.e9,A.ea,A.eb,A.cB,A.ec,A.cC,A.ed])
q(A.de,A.f0)
p(A.be,[A.c6,A.cW])
q(A.cS,A.c6)
q(A.S,A.cS)
q(A.cT,A.c1)
q(A.aw,A.cT)
q(A.aZ,A.cQ)
q(A.bJ,A.cR)
q(A.cU,A.bh)
q(A.fl,A.dj)
q(A.d0,A.cY)
q(A.dZ,A.dG)
q(A.hs,A.dI)
p(A.aI,[A.cI,A.dU])
p(A.c,[A.r,A.dN,A.bS,A.bv,A.a1,A.d9,A.a2,A.R,A.dc,A.eM,A.bg,A.aE,A.dB,A.b8])
p(A.r,[A.h,A.az,A.aO])
q(A.n,A.h)
p(A.n,[A.dx,A.dy,A.br,A.bQ,A.dO,A.dT,A.bF,A.er])
p(A.j,[A.bp,A.aM,A.aN,A.aD,A.au,A.aK])
q(A.h4,A.aL)
q(A.cj,A.eT)
p(A.ap,[A.h6,A.h7])
q(A.eX,A.eW)
q(A.cl,A.eX)
q(A.eZ,A.eY)
q(A.dK,A.eZ)
q(A.Z,A.bq)
q(A.f2,A.f1)
q(A.dM,A.f2)
q(A.f6,A.f5)
q(A.bu,A.f6)
q(A.ar,A.bv)
p(A.aD,[A.aS,A.a_])
q(A.e2,A.fb)
q(A.e3,A.fc)
q(A.fe,A.fd)
q(A.e4,A.fe)
q(A.fg,A.ff)
q(A.cD,A.fg)
q(A.fk,A.fj)
q(A.ej,A.fk)
q(A.eo,A.fm)
q(A.da,A.d9)
q(A.et,A.da)
q(A.fo,A.fn)
q(A.eu,A.fo)
q(A.ew,A.fq)
q(A.fw,A.fv)
q(A.eA,A.fw)
q(A.dd,A.dc)
q(A.eB,A.dd)
q(A.fy,A.fx)
q(A.eD,A.fy)
q(A.eL,A.bF)
q(A.bf,A.a_)
q(A.fD,A.fC)
q(A.eS,A.fD)
q(A.cV,A.cm)
q(A.fF,A.fE)
q(A.f4,A.fF)
q(A.fH,A.fG)
q(A.d3,A.fH)
q(A.fJ,A.fI)
q(A.fp,A.fJ)
q(A.fL,A.fK)
q(A.fu,A.fL)
q(A.f_,A.cW)
q(A.ij,A.ii)
p(A.aQ,[A.cs,A.c4])
q(A.bA,A.c4)
q(A.fa,A.f9)
q(A.e_,A.fa)
q(A.fi,A.fh)
q(A.ef,A.fi)
q(A.fs,A.fr)
q(A.ey,A.fs)
q(A.fA,A.fz)
q(A.eE,A.fA)
q(A.dA,A.eR)
q(A.eg,A.b8)
p(A.i7,[A.fV,A.hT])
q(A.cN,A.aV)
q(A.aW,A.bE)
p(A.ad,[A.ct,A.eO])
p(A.is,[A.c5,A.b_,A.at])
p(A.dP,[A.h_,A.hd,A.hc])
p(A.ia,[A.ic,A.id,A.hD,A.hE,A.hR])
s(A.d4,A.e)
s(A.d5,A.T)
s(A.d6,A.e)
s(A.d7,A.T)
s(A.c7,A.di)
s(A.eT,A.h5)
s(A.eW,A.e)
s(A.eX,A.o)
s(A.eY,A.e)
s(A.eZ,A.o)
s(A.f1,A.e)
s(A.f2,A.o)
s(A.f5,A.e)
s(A.f6,A.o)
s(A.fb,A.y)
s(A.fc,A.y)
s(A.fd,A.e)
s(A.fe,A.o)
s(A.ff,A.e)
s(A.fg,A.o)
s(A.fj,A.e)
s(A.fk,A.o)
s(A.fm,A.y)
s(A.d9,A.e)
s(A.da,A.o)
s(A.fn,A.e)
s(A.fo,A.o)
s(A.fq,A.y)
s(A.fv,A.e)
s(A.fw,A.o)
s(A.dc,A.e)
s(A.dd,A.o)
s(A.fx,A.e)
s(A.fy,A.o)
s(A.fC,A.e)
s(A.fD,A.o)
s(A.fE,A.e)
s(A.fF,A.o)
s(A.fG,A.e)
s(A.fH,A.o)
s(A.fI,A.e)
s(A.fJ,A.o)
s(A.fK,A.e)
s(A.fL,A.o)
r(A.c4,A.e)
s(A.f9,A.e)
s(A.fa,A.o)
s(A.fh,A.e)
s(A.fi,A.o)
s(A.fr,A.e)
s(A.fs,A.o)
s(A.fz,A.e)
s(A.fA,A.o)
s(A.eR,A.y)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{i:"int",w:"double",K:"num",p:"String",j3:"bool",G:"Null",l:"List"},mangledNames:{},types:["~()","p()","~(p,@)","~(@)","~(v,ak)","~(j)","@(@)","~(~())","~(aR)","G(@)","G()","~(w)","~(aS)","~(aK)","p(ar)","~(c_,@)","aq<G>()","~(au)","~(p,p)","@(p)","@(@,@)","@(@,p)","~(@,@)","@(v?)","cs(@)","bA<@>(@)","aQ(@)","~(K)","w(K,w)","w(i,i,w)","G(~())","G(@,@)","~(v[ak?])","~(a_)","~(l<@>,bw)","G(l<v>)","G(v,ak)","F<@>(@)","p(c)","v?(@)","G(~)","@()","~(ad)","~(v?,v?)","~(aM)","~(aN)","w(i,i)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti")}
A.nt(v.typeUniverse,JSON.parse('{"ei":"bB","bI":"bB","aA":"bB","oW":"j","p8":"j","oY":"b8","oX":"c","pe":"c","ph":"c","pd":"h","py":"au","p_":"n","pi":"r","p7":"r","pa":"aO","pv":"R","p2":"aD","p6":"aE","p1":"az","pj":"az","pf":"a_","pc":"bv","pb":"bu","p3":"A","p4":"U","oZ":"bF","dV":{"j3":[],"B":[]},"cr":{"G":[],"B":[]},"z":{"l":["1"],"k":["1"],"f":["1"]},"hp":{"z":["1"],"l":["1"],"k":["1"],"f":["1"]},"bn":{"ae":["1"]},"bx":{"w":[],"K":[]},"cq":{"w":[],"i":[],"K":[],"B":[]},"dX":{"w":[],"K":[],"B":[]},"ba":{"p":[],"B":[]},"cv":{"E":[]},"k":{"f":["1"]},"ag":{"k":["1"],"f":["1"]},"bC":{"ae":["1"]},"bD":{"f":["2"],"f.E":"2"},"cn":{"bD":["1","2"],"k":["2"],"f":["2"],"f.E":"2"},"aT":{"ae":["2"]},"aU":{"ag":["2"],"k":["2"],"f":["2"],"ag.E":"2","f.E":"2"},"bZ":{"c_":[]},"ch":{"cO":["1","2"],"c7":["1","2"],"bU":["1","2"],"di":["1","2"],"L":["1","2"]},"cg":{"L":["1","2"]},"ci":{"cg":["1","2"],"L":["1","2"]},"d1":{"f":["1"],"f.E":"1"},"d2":{"ae":["1"]},"dW":{"kt":[]},"cE":{"aX":[],"E":[]},"dY":{"E":[]},"eI":{"E":[]},"db":{"ak":[]},"b9":{"bt":[]},"dE":{"bt":[]},"dF":{"bt":[]},"ez":{"bt":[]},"ev":{"bt":[]},"bP":{"bt":[]},"eU":{"E":[]},"ep":{"E":[]},"eP":{"E":[]},"aP":{"y":["1","2"],"kz":["1","2"],"L":["1","2"],"y.K":"1","y.V":"2"},"as":{"k":["1"],"f":["1"],"f.E":"1"},"cw":{"ae":["1"]},"e6":{"B":[]},"cA":{"M":[]},"e7":{"M":[],"B":[]},"bW":{"u":["1"],"M":[]},"cy":{"e":["w"],"l":["w"],"u":["w"],"k":["w"],"M":[],"f":["w"],"T":["w"]},"cz":{"e":["i"],"l":["i"],"u":["i"],"k":["i"],"M":[],"f":["i"],"T":["i"]},"cx":{"e":["w"],"jC":[],"l":["w"],"u":["w"],"k":["w"],"M":[],"f":["w"],"T":["w"],"B":[],"e.E":"w"},"e8":{"e":["w"],"l":["w"],"u":["w"],"k":["w"],"M":[],"f":["w"],"T":["w"],"B":[],"e.E":"w"},"e9":{"e":["i"],"l":["i"],"u":["i"],"k":["i"],"M":[],"f":["i"],"T":["i"],"B":[],"e.E":"i"},"ea":{"e":["i"],"l":["i"],"u":["i"],"k":["i"],"M":[],"f":["i"],"T":["i"],"B":[],"e.E":"i"},"eb":{"e":["i"],"l":["i"],"u":["i"],"k":["i"],"M":[],"f":["i"],"T":["i"],"B":[],"e.E":"i"},"cB":{"e":["i"],"jK":[],"l":["i"],"u":["i"],"k":["i"],"M":[],"f":["i"],"T":["i"],"B":[],"e.E":"i"},"ec":{"e":["i"],"l":["i"],"u":["i"],"k":["i"],"M":[],"f":["i"],"T":["i"],"B":[],"e.E":"i"},"cC":{"e":["i"],"l":["i"],"u":["i"],"k":["i"],"M":[],"f":["i"],"T":["i"],"B":[],"e.E":"i"},"ed":{"e":["i"],"eF":[],"l":["i"],"u":["i"],"k":["i"],"M":[],"f":["i"],"T":["i"],"B":[],"e.E":"i"},"f0":{"E":[]},"de":{"aX":[],"E":[]},"F":{"aq":["1"]},"cf":{"E":[]},"S":{"cS":["1"],"c6":["1"],"be":["1"]},"aw":{"cT":["1"],"c1":["1"],"al":["1"],"bi":["1"]},"cQ":{"ex":["1"],"lb":["1"],"bi":["1"]},"aZ":{"cQ":["1"],"ex":["1"],"lb":["1"],"bi":["1"]},"bJ":{"cR":["1"]},"cS":{"c6":["1"],"be":["1"]},"cT":{"c1":["1"],"al":["1"],"bi":["1"]},"c1":{"al":["1"],"bi":["1"]},"c6":{"be":["1"]},"cU":{"bh":["1"]},"eV":{"bh":["@"]},"c2":{"al":["1"]},"dj":{"l_":[]},"fl":{"dj":[],"l_":[]},"cY":{"y":["1","2"],"L":["1","2"]},"d0":{"cY":["1","2"],"y":["1","2"],"L":["1","2"],"y.K":"1","y.V":"2"},"cZ":{"k":["1"],"f":["1"],"f.E":"1"},"d_":{"ae":["1"]},"y":{"L":["1","2"]},"bU":{"L":["1","2"]},"cO":{"c7":["1","2"],"bU":["1","2"],"di":["1","2"],"L":["1","2"]},"f7":{"y":["p","@"],"L":["p","@"],"y.K":"p","y.V":"@"},"f8":{"ag":["p"],"k":["p"],"f":["p"],"ag.E":"p","f.E":"p"},"dZ":{"dG":["v?","p"]},"w":{"K":[]},"i":{"K":[]},"l":{"k":["1"],"f":["1"]},"ce":{"E":[]},"aX":{"E":[]},"aI":{"E":[]},"cI":{"E":[]},"dU":{"E":[]},"ee":{"E":[]},"eJ":{"E":[]},"eH":{"E":[]},"bH":{"E":[]},"dH":{"E":[]},"eh":{"E":[]},"cK":{"E":[]},"ft":{"ak":[]},"bp":{"j":[]},"aM":{"j":[]},"aN":{"j":[]},"Z":{"bq":[]},"bS":{"c":[]},"ar":{"c":[]},"aS":{"j":[]},"a_":{"j":[]},"r":{"c":[]},"au":{"j":[]},"a1":{"c":[]},"a2":{"c":[]},"R":{"c":[]},"bf":{"a_":[],"j":[]},"n":{"h":[],"r":[],"c":[]},"dx":{"h":[],"r":[],"c":[]},"dy":{"h":[],"r":[],"c":[]},"br":{"h":[],"r":[],"c":[],"dD":[]},"az":{"r":[],"c":[]},"bQ":{"h":[],"r":[],"c":[]},"aO":{"r":[],"c":[]},"cl":{"e":["aC<K>"],"o":["aC<K>"],"l":["aC<K>"],"u":["aC<K>"],"k":["aC<K>"],"f":["aC<K>"],"o.E":"aC<K>","e.E":"aC<K>"},"cm":{"aC":["K"]},"dK":{"e":["p"],"o":["p"],"l":["p"],"u":["p"],"k":["p"],"f":["p"],"o.E":"p","e.E":"p"},"h":{"r":[],"c":[]},"dM":{"e":["Z"],"o":["Z"],"l":["Z"],"u":["Z"],"k":["Z"],"f":["Z"],"o.E":"Z","e.E":"Z"},"dN":{"c":[]},"dO":{"h":[],"r":[],"c":[]},"bu":{"e":["r"],"o":["r"],"l":["r"],"u":["r"],"k":["r"],"f":["r"],"o.E":"r","e.E":"r"},"bv":{"c":[]},"dT":{"h":[],"r":[],"c":[],"dD":[]},"bF":{"h":[],"r":[],"c":[]},"e2":{"y":["p","@"],"L":["p","@"],"y.K":"p","y.V":"@"},"e3":{"y":["p","@"],"L":["p","@"],"y.K":"p","y.V":"@"},"e4":{"e":["a5"],"o":["a5"],"l":["a5"],"u":["a5"],"k":["a5"],"f":["a5"],"o.E":"a5","e.E":"a5"},"cD":{"e":["r"],"o":["r"],"l":["r"],"u":["r"],"k":["r"],"f":["r"],"o.E":"r","e.E":"r"},"ej":{"e":["a6"],"o":["a6"],"l":["a6"],"u":["a6"],"k":["a6"],"f":["a6"],"o.E":"a6","e.E":"a6"},"eo":{"y":["p","@"],"L":["p","@"],"y.K":"p","y.V":"@"},"er":{"h":[],"r":[],"c":[]},"et":{"e":["a1"],"o":["a1"],"l":["a1"],"c":[],"u":["a1"],"k":["a1"],"f":["a1"],"o.E":"a1","e.E":"a1"},"eu":{"e":["a7"],"o":["a7"],"l":["a7"],"u":["a7"],"k":["a7"],"f":["a7"],"o.E":"a7","e.E":"a7"},"ew":{"y":["p","p"],"L":["p","p"],"y.K":"p","y.V":"p"},"eA":{"e":["R"],"o":["R"],"l":["R"],"u":["R"],"k":["R"],"f":["R"],"o.E":"R","e.E":"R"},"eB":{"e":["a2"],"o":["a2"],"l":["a2"],"c":[],"u":["a2"],"k":["a2"],"f":["a2"],"o.E":"a2","e.E":"a2"},"eD":{"e":["a9"],"o":["a9"],"l":["a9"],"u":["a9"],"k":["a9"],"f":["a9"],"o.E":"a9","e.E":"a9"},"aD":{"j":[]},"eL":{"h":[],"r":[],"c":[],"dD":[]},"eM":{"c":[]},"bg":{"c":[]},"aE":{"c":[]},"eS":{"e":["A"],"o":["A"],"l":["A"],"u":["A"],"k":["A"],"f":["A"],"o.E":"A","e.E":"A"},"cV":{"aC":["K"]},"f4":{"e":["a4?"],"o":["a4?"],"l":["a4?"],"u":["a4?"],"k":["a4?"],"f":["a4?"],"o.E":"a4?","e.E":"a4?"},"d3":{"e":["r"],"o":["r"],"l":["r"],"u":["r"],"k":["r"],"f":["r"],"o.E":"r","e.E":"r"},"fp":{"e":["a8"],"o":["a8"],"l":["a8"],"u":["a8"],"k":["a8"],"f":["a8"],"o.E":"a8","e.E":"a8"},"fu":{"e":["U"],"o":["U"],"l":["U"],"u":["U"],"k":["U"],"f":["U"],"o.E":"U","e.E":"U"},"cW":{"be":["1"]},"f_":{"cW":["1"],"be":["1"]},"cX":{"al":["1"]},"co":{"ae":["1"]},"bA":{"e":["1"],"l":["1"],"k":["1"],"f":["1"],"e.E":"1"},"e_":{"e":["af"],"o":["af"],"l":["af"],"k":["af"],"f":["af"],"o.E":"af","e.E":"af"},"ef":{"e":["ah"],"o":["ah"],"l":["ah"],"k":["ah"],"f":["ah"],"o.E":"ah","e.E":"ah"},"ey":{"e":["p"],"o":["p"],"l":["p"],"k":["p"],"f":["p"],"o.E":"p","e.E":"p"},"eE":{"e":["am"],"o":["am"],"l":["am"],"k":["am"],"f":["am"],"o.E":"am","e.E":"am"},"dA":{"y":["p","@"],"L":["p","@"],"y.K":"p","y.V":"@"},"dB":{"c":[]},"b8":{"c":[]},"eg":{"c":[]},"aK":{"j":[]},"cN":{"aV":[]},"aW":{"bE":[]},"ct":{"ad":[]},"eO":{"ad":[]},"me":{"M":[]},"mu":{"l":["i"],"k":["i"],"f":["i"],"M":[]},"eF":{"l":["i"],"k":["i"],"f":["i"],"M":[]},"n1":{"l":["i"],"k":["i"],"f":["i"],"M":[]},"ms":{"l":["i"],"k":["i"],"f":["i"],"M":[]},"jK":{"l":["i"],"k":["i"],"f":["i"],"M":[]},"mt":{"l":["i"],"k":["i"],"f":["i"],"M":[]},"n0":{"l":["i"],"k":["i"],"f":["i"],"M":[]},"jC":{"l":["w"],"k":["w"],"f":["w"],"M":[]},"mo":{"l":["w"],"k":["w"],"f":["w"],"M":[]}}'))
A.ns(v.typeUniverse,JSON.parse('{"k":1,"bW":1,"bh":1,"dI":2,"c4":1}'))
var u={b:"    #version 300 es\n    precision highp float;\n\n    in vec2 aPositionMapping;\n    out vec2 vMapping;\n\n    uniform mat3 uPvwlTransform;\n\n    void main()\n    {\n      vMapping = aPositionMapping;\n\n      vec3 position = uPvwlTransform * vec3(aPositionMapping, 1.0);\n      gl_Position = vec4(position.xy, 0.0, 1.0);\n    }\n  ",c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type"}
var t=(function rtii(){var s=A.X
return{a7:s("@<~>"),t:s("cf"),cQ:s("bo"),c9:s("bp"),fK:s("bq"),gA:s("br"),gF:s("ch<c_,@>"),R:s("aK"),g5:s("A"),cE:s("ad"),D:s("aM"),W:s("aN"),e5:s("aO"),gw:s("k<@>"),a:s("E"),A:s("j"),aS:s("c"),c8:s("Z"),Z:s("bt"),b9:s("aq<@>"),r:s("ar"),gb:s("cp"),dt:s("bw"),B:s("kt"),d:s("f<@>"),U:s("z<bo>"),aJ:s("z<aq<v>>"),f3:s("z<at>"),s:s("z<p>"),n:s("z<w>"),b:s("z<@>"),dC:s("z<i>"),cA:s("z<K>"),T:s("cr"),e:s("aA"),aU:s("u<@>"),am:s("bA<@>"),eo:s("aP<c_,@>"),h:s("aR"),dz:s("cu"),g:s("aS"),bG:s("af"),ew:s("l<v>"),j:s("l<@>"),k:s("l<K>"),aH:s("L<p,eF>"),g6:s("L<p,i>"),f:s("L<@,@>"),gU:s("aV"),w:s("bE"),cI:s("a5"),V:s("a_"),G:s("r"),P:s("G"),eq:s("ah"),K:s("v"),he:s("a6"),m:s("aB"),eU:s("ai"),x:s("bb<K>"),E:s("au"),L:s("av"),gT:s("pg"),q:s("aC<K>"),cl:s("bY"),fY:s("a1"),f7:s("a7"),gf:s("a8"),l:s("ak"),N:s("p"),gn:s("U"),fo:s("c_"),a0:s("a2"),c7:s("R"),aK:s("a9"),cM:s("am"),dm:s("B"),eK:s("aX"),Q:s("M"),gc:s("eF"),ak:s("bI"),cW:s("J"),J:s("bf"),g4:s("bg"),g2:s("aE"),er:s("aZ<ad>"),bl:s("aZ<aR>"),bj:s("bJ<ar>"),eJ:s("f_<aK>"),ao:s("F<ar>"),ck:s("F<G>"),c:s("F<@>"),fJ:s("F<i>"),cd:s("F<~>"),dx:s("d0<@,@>"),y:s("j3"),al:s("j3(v)"),i:s("w"),z:s("@"),O:s("@()"),v:s("@(v)"),C:s("@(v,ak)"),b8:s("@(@,@)"),S:s("i"),aw:s("0&*"),_:s("v*"),eH:s("aq<G>?"),g7:s("a4?"),bM:s("l<@>?"),X:s("v?"),eV:s("cJ?"),gO:s("ak?"),I:s("ex<w>?"),ev:s("bh<@>?"),F:s("bK<@,@>?"),o:s("@(j)?"),Y:s("~()?"),gq:s("~(bp)?"),ax:s("~(aM)?"),aA:s("~(aN)?"),fi:s("~(j)?"),eN:s("~(aS)?"),h2:s("~(a_)?"),gx:s("~(au)?"),h8:s("~(bf)?"),H:s("K"),p:s("~"),M:s("~()"),cZ:s("~(bR,bR,bS)"),d5:s("~(v)"),da:s("~(v,ak)"),eA:s("~(p,p)"),u:s("~(p,@)"),c4:s("~(K)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.e=A.br.prototype
B.R=A.ar.prototype
B.S=J.bT.prototype
B.a=J.z.prototype
B.f=J.cq.prototype
B.b=J.bx.prototype
B.p=J.ba.prototype
B.T=J.aA.prototype
B.U=J.a.prototype
B.t=A.cx.prototype
B.u=A.cB.prototype
B.v=J.ei.prototype
B.c=A.bY.prototype
B.h=J.bI.prototype
B.C=A.bf.prototype
B.i=A.bg.prototype
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

B.N=new A.dZ()
B.O=new A.eh()
B.ad=new A.hS()
B.P=new A.eV()
B.o=new A.iK()
B.d=new A.fl()
B.Q=new A.ft()
B.V=new A.hs(null)
B.j=new A.c5(0,"down")
B.k=new A.c5(1,"up")
B.W=A.q(s([B.j,B.k]),A.X("z<c5>"))
B.q=A.q(s([]),t.b)
B.D=new A.b_(0,"out")
B.E=new A.b_(1,"down")
B.F=new A.b_(2,"up")
B.l=new A.b_(3,"move")
B.G=new A.b_(4,"wheel")
B.X=A.q(s([B.D,B.E,B.F,B.l,B.G]),A.X("z<b_>"))
B.Y={}
B.r=new A.ci(B.Y,[],A.X("ci<c_,@>"))
B.w=new A.at(0,"octopus")
B.x=new A.at(1,"octopusAlt")
B.y=new A.at(2,"crab")
B.z=new A.at(3,"crabAlt")
B.A=new A.at(4,"medusa")
B.B=new A.at(5,"medusaAlt")
B.Z=new A.at(6,"boss")
B.a_=new A.at(7,"quad")
B.a0=new A.bZ("call")
B.a1=A.ay("p0")
B.a2=A.ay("me")
B.a3=A.ay("jC")
B.a4=A.ay("mo")
B.a5=A.ay("ms")
B.a6=A.ay("mt")
B.a7=A.ay("mu")
B.a8=A.ay("v")
B.a9=A.ay("jK")
B.aa=A.ay("n0")
B.ab=A.ay("n1")
B.ac=A.ay("eF")})();(function staticFields(){$.iI=null
$.ab=A.q([],A.X("z<v>"))
$.kF=null
$.kk=null
$.kj=null
$.lF=null
$.lz=null
$.lK=null
$.j5=null
$.j9=null
$.k2=null
$.c9=null
$.dl=null
$.dm=null
$.jY=!1
$.C=B.d
$.jN=null
$.Q=A.q([],A.X("z<al<@>>"))
$.N=A.q([],A.X("z<cF>"))
$.b3=A.q([],A.X("z<bV>"))
$.jZ=-1
$.jS=0
$.iZ=null})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal
s($,"p5","fR",()=>A.lE("_$dart_dartClosure"))
s($,"q8","jw",()=>B.d.bT(new A.jh(),A.X("aq<G>")))
s($,"pl","lN",()=>A.aY(A.i9({
toString:function(){return"$receiver$"}})))
s($,"pm","lO",()=>A.aY(A.i9({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"pn","lP",()=>A.aY(A.i9(null)))
s($,"po","lQ",()=>A.aY(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"pr","lT",()=>A.aY(A.i9(void 0)))
s($,"ps","lU",()=>A.aY(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"pq","lS",()=>A.aY(A.kT(null)))
s($,"pp","lR",()=>A.aY(function(){try{null.$method$}catch(r){return r.message}}()))
s($,"pu","lW",()=>A.aY(A.kT(void 0)))
s($,"pt","lV",()=>A.aY(function(){try{(void 0).$method$}catch(r){return r.message}}()))
s($,"pw","k6",()=>A.n4())
s($,"p9","jl",()=>t.ck.a($.jw()))
s($,"pR","lX",()=>A.ji(B.a8))
s($,"pM","k8",()=>A.nF(A.k_(self)))
s($,"px","k7",()=>A.lE("_$dart_dartObject"))
s($,"pN","k9",()=>function DartObject(a){this.o=a})
s($,"pk","lM",()=>A.jz(1,1))
s($,"pQ","ka",()=>new A.dS(1.5707963267948966,1,0.1,100))
s($,"pG","jm",()=>A.mW(0,0,1024,1024))
s($,"q4","ke",()=>A.mK(-3,-2,6))
s($,"q3","lZ",()=>A.jM(A.kU(0.343,-0.072,-0.936)))
s($,"q5","m_",()=>A.jM(A.kU(0.021,0.961,0.274)))
s($,"pU","jp",()=>A.X("bQ").a(A.op().querySelector("#real-t-demo-hbao")))
s($,"pL","ds",()=>{var r,q=A.jz(null,null)
A.jH()
r=t.z
return new A.eN(q,new A.cH(A.jH()),A.hX(r),A.hX(r))})
s($,"pP","jo",()=>new A.dR(A.hy(20,0,!0,t.i)))
s($,"pT","kb",()=>new A.ht(A.q([],A.X("z<al<@>>")),A.hx(A.X("c5"),A.X("ex<aR>"))))
s($,"pV","kc",()=>new A.e5(A.q([],A.X("z<al<@>>")),A.hx(A.X("b_"),A.X("ex<ad>")),A.jH()))
s($,"pI","fS",()=>new A.h3(A.kC(),A.kC(),A.i6(),A.i6()))
s($,"pK","dr",()=>new A.hT(new A.ai(0,0,0),A.bG()))
s($,"pJ","cd",()=>new A.fV(A.kW(),A.kW(),A.bG(),A.bG()))
s($,"pW","du",()=>new A.ih())
s($,"pH","jn",()=>new A.h2(A.mB(0),A.mA(0)))
s($,"pO","dt",()=>new A.hd())
s($,"q0","jt",()=>new A.hc())
s($,"pZ","jr",()=>new A.h_())
s($,"pX","jq",()=>{var r=A.eq("uSampler"),q=A.jG("uPvwlTransform")
return new A.i3(A.ie(),new A.bX(),r,q)})
s($,"q2","jv",()=>new A.ig(new A.cP(A.q([A.mb("aPosition",0,3,12,0)],t.U)),new A.bX(),new A.hE("uPvwlTransform")))
s($,"q1","ju",()=>{var r=A.jG("uPvwlTransform"),q=A.kX("uViewBound"),p=A.eq("uDepthDataSampler"),o=A.eq("uSamplingRotationSampler")
return new A.hV(A.ie(),new A.bX(),r,new A.ic("uData"),q,p,o,new A.dS(0,0,0,0))})
s($,"q_","js",()=>{var r=A.jG("uPvwlTransform"),q=A.kX("uViewBound"),p=A.eq("uDepthDataSampler"),o=A.eq("uOcclusionSampler")
return new A.hU(A.ie(),new A.bX(),r,q,p,o)})
s($,"pY","kd",()=>new A.cN(A.q([1,0,0,0,1,0,0,0,1],t.n)))
s($,"pS","lY",()=>new A.cN(A.q([2,0,0,0,2,0,-1,-1,1],t.n)))})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({WebGL:J.bT,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,webkitFileSystemDirectoryEntry:J.a,FileSystemDirectoryEntry:J.a,DirectoryReader:J.a,WebKitDirectoryReader:J.a,webkitFileSystemDirectoryReader:J.a,FileSystemDirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,webkitFileSystemEntry:J.a,FileSystemEntry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,webkitFileSystemFileEntry:J.a,FileSystemFileEntry:J.a,DOMFileSystem:J.a,WebKitFileSystem:J.a,webkitFileSystem:J.a,FileSystem:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,GeolocationPosition:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,GeolocationPositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL2RenderingContextBase:J.a,ArrayBuffer:A.e6,ArrayBufferView:A.cA,DataView:A.e7,Float32Array:A.cx,Float64Array:A.e8,Int16Array:A.e9,Int32Array:A.ea,Int8Array:A.eb,Uint16Array:A.cB,Uint32Array:A.ec,Uint8ClampedArray:A.cC,CanvasPixelArray:A.cC,Uint8Array:A.ed,HTMLBRElement:A.n,HTMLBaseElement:A.n,HTMLBodyElement:A.n,HTMLButtonElement:A.n,HTMLContentElement:A.n,HTMLDListElement:A.n,HTMLDataElement:A.n,HTMLDataListElement:A.n,HTMLDetailsElement:A.n,HTMLDialogElement:A.n,HTMLEmbedElement:A.n,HTMLFieldSetElement:A.n,HTMLHRElement:A.n,HTMLHeadElement:A.n,HTMLHeadingElement:A.n,HTMLHtmlElement:A.n,HTMLIFrameElement:A.n,HTMLInputElement:A.n,HTMLLIElement:A.n,HTMLLabelElement:A.n,HTMLLegendElement:A.n,HTMLLinkElement:A.n,HTMLMapElement:A.n,HTMLMenuElement:A.n,HTMLMetaElement:A.n,HTMLMeterElement:A.n,HTMLModElement:A.n,HTMLOListElement:A.n,HTMLObjectElement:A.n,HTMLOptGroupElement:A.n,HTMLOptionElement:A.n,HTMLOutputElement:A.n,HTMLParagraphElement:A.n,HTMLParamElement:A.n,HTMLPictureElement:A.n,HTMLPreElement:A.n,HTMLProgressElement:A.n,HTMLQuoteElement:A.n,HTMLScriptElement:A.n,HTMLShadowElement:A.n,HTMLSlotElement:A.n,HTMLSourceElement:A.n,HTMLSpanElement:A.n,HTMLStyleElement:A.n,HTMLTableCaptionElement:A.n,HTMLTableCellElement:A.n,HTMLTableDataCellElement:A.n,HTMLTableHeaderCellElement:A.n,HTMLTableColElement:A.n,HTMLTableElement:A.n,HTMLTableRowElement:A.n,HTMLTableSectionElement:A.n,HTMLTemplateElement:A.n,HTMLTextAreaElement:A.n,HTMLTimeElement:A.n,HTMLTitleElement:A.n,HTMLTrackElement:A.n,HTMLUListElement:A.n,HTMLUnknownElement:A.n,HTMLDirectoryElement:A.n,HTMLFontElement:A.n,HTMLFrameElement:A.n,HTMLFrameSetElement:A.n,HTMLMarqueeElement:A.n,HTMLElement:A.n,AccessibleNodeList:A.fW,HTMLAnchorElement:A.dx,HTMLAreaElement:A.dy,BeforeUnloadEvent:A.bp,Blob:A.bq,HTMLCanvasElement:A.br,CDATASection:A.az,CharacterData:A.az,Comment:A.az,ProcessingInstruction:A.az,Text:A.az,CSSPerspective:A.h4,CSSCharsetRule:A.A,CSSConditionRule:A.A,CSSFontFaceRule:A.A,CSSGroupingRule:A.A,CSSImportRule:A.A,CSSKeyframeRule:A.A,MozCSSKeyframeRule:A.A,WebKitCSSKeyframeRule:A.A,CSSKeyframesRule:A.A,MozCSSKeyframesRule:A.A,WebKitCSSKeyframesRule:A.A,CSSMediaRule:A.A,CSSNamespaceRule:A.A,CSSPageRule:A.A,CSSRule:A.A,CSSStyleRule:A.A,CSSSupportsRule:A.A,CSSViewportRule:A.A,CSSStyleDeclaration:A.cj,MSStyleCSSProperties:A.cj,CSS2Properties:A.cj,CSSImageValue:A.ap,CSSKeywordValue:A.ap,CSSNumericValue:A.ap,CSSPositionValue:A.ap,CSSResourceValue:A.ap,CSSUnitValue:A.ap,CSSURLImageValue:A.ap,CSSStyleValue:A.ap,CSSMatrixComponent:A.aL,CSSRotation:A.aL,CSSScale:A.aL,CSSSkew:A.aL,CSSTranslation:A.aL,CSSTransformComponent:A.aL,CSSTransformValue:A.h6,CSSUnparsedValue:A.h7,DataTransferItemList:A.h8,DeviceMotionEvent:A.aM,DeviceOrientationEvent:A.aN,HTMLDivElement:A.bQ,Document:A.aO,HTMLDocument:A.aO,XMLDocument:A.aO,DOMException:A.ha,ClientRectList:A.cl,DOMRectList:A.cl,DOMRectReadOnly:A.cm,DOMStringList:A.dK,DOMTokenList:A.hb,MathMLElement:A.h,SVGAElement:A.h,SVGAnimateElement:A.h,SVGAnimateMotionElement:A.h,SVGAnimateTransformElement:A.h,SVGAnimationElement:A.h,SVGCircleElement:A.h,SVGClipPathElement:A.h,SVGDefsElement:A.h,SVGDescElement:A.h,SVGDiscardElement:A.h,SVGEllipseElement:A.h,SVGFEBlendElement:A.h,SVGFEColorMatrixElement:A.h,SVGFEComponentTransferElement:A.h,SVGFECompositeElement:A.h,SVGFEConvolveMatrixElement:A.h,SVGFEDiffuseLightingElement:A.h,SVGFEDisplacementMapElement:A.h,SVGFEDistantLightElement:A.h,SVGFEFloodElement:A.h,SVGFEFuncAElement:A.h,SVGFEFuncBElement:A.h,SVGFEFuncGElement:A.h,SVGFEFuncRElement:A.h,SVGFEGaussianBlurElement:A.h,SVGFEImageElement:A.h,SVGFEMergeElement:A.h,SVGFEMergeNodeElement:A.h,SVGFEMorphologyElement:A.h,SVGFEOffsetElement:A.h,SVGFEPointLightElement:A.h,SVGFESpecularLightingElement:A.h,SVGFESpotLightElement:A.h,SVGFETileElement:A.h,SVGFETurbulenceElement:A.h,SVGFilterElement:A.h,SVGForeignObjectElement:A.h,SVGGElement:A.h,SVGGeometryElement:A.h,SVGGraphicsElement:A.h,SVGImageElement:A.h,SVGLineElement:A.h,SVGLinearGradientElement:A.h,SVGMarkerElement:A.h,SVGMaskElement:A.h,SVGMetadataElement:A.h,SVGPathElement:A.h,SVGPatternElement:A.h,SVGPolygonElement:A.h,SVGPolylineElement:A.h,SVGRadialGradientElement:A.h,SVGRectElement:A.h,SVGScriptElement:A.h,SVGSetElement:A.h,SVGStopElement:A.h,SVGStyleElement:A.h,SVGElement:A.h,SVGSVGElement:A.h,SVGSwitchElement:A.h,SVGSymbolElement:A.h,SVGTSpanElement:A.h,SVGTextContentElement:A.h,SVGTextElement:A.h,SVGTextPathElement:A.h,SVGTextPositioningElement:A.h,SVGTitleElement:A.h,SVGUseElement:A.h,SVGViewElement:A.h,SVGGradientElement:A.h,SVGComponentTransferFunctionElement:A.h,SVGFEDropShadowElement:A.h,SVGMPathElement:A.h,Element:A.h,AbortPaymentEvent:A.j,AnimationEvent:A.j,AnimationPlaybackEvent:A.j,ApplicationCacheErrorEvent:A.j,BackgroundFetchClickEvent:A.j,BackgroundFetchEvent:A.j,BackgroundFetchFailEvent:A.j,BackgroundFetchedEvent:A.j,BeforeInstallPromptEvent:A.j,BlobEvent:A.j,CanMakePaymentEvent:A.j,ClipboardEvent:A.j,CloseEvent:A.j,CustomEvent:A.j,ErrorEvent:A.j,ExtendableEvent:A.j,ExtendableMessageEvent:A.j,FetchEvent:A.j,FontFaceSetLoadEvent:A.j,ForeignFetchEvent:A.j,GamepadEvent:A.j,HashChangeEvent:A.j,InstallEvent:A.j,MediaEncryptedEvent:A.j,MediaKeyMessageEvent:A.j,MediaQueryListEvent:A.j,MediaStreamEvent:A.j,MediaStreamTrackEvent:A.j,MessageEvent:A.j,MIDIConnectionEvent:A.j,MIDIMessageEvent:A.j,MutationEvent:A.j,NotificationEvent:A.j,PageTransitionEvent:A.j,PaymentRequestEvent:A.j,PaymentRequestUpdateEvent:A.j,PopStateEvent:A.j,PresentationConnectionAvailableEvent:A.j,PresentationConnectionCloseEvent:A.j,PromiseRejectionEvent:A.j,PushEvent:A.j,RTCDataChannelEvent:A.j,RTCDTMFToneChangeEvent:A.j,RTCPeerConnectionIceEvent:A.j,RTCTrackEvent:A.j,SecurityPolicyViolationEvent:A.j,SensorErrorEvent:A.j,SpeechRecognitionError:A.j,SpeechRecognitionEvent:A.j,SpeechSynthesisEvent:A.j,StorageEvent:A.j,SyncEvent:A.j,TrackEvent:A.j,TransitionEvent:A.j,WebKitTransitionEvent:A.j,VRDeviceEvent:A.j,VRDisplayEvent:A.j,VRSessionEvent:A.j,MojoInterfaceRequestEvent:A.j,USBConnectionEvent:A.j,IDBVersionChangeEvent:A.j,AudioProcessingEvent:A.j,OfflineAudioCompletionEvent:A.j,Event:A.j,InputEvent:A.j,SubmitEvent:A.j,AbsoluteOrientationSensor:A.c,Accelerometer:A.c,AccessibleNode:A.c,AmbientLightSensor:A.c,Animation:A.c,ApplicationCache:A.c,DOMApplicationCache:A.c,OfflineResourceList:A.c,BackgroundFetchRegistration:A.c,BatteryManager:A.c,BroadcastChannel:A.c,CanvasCaptureMediaStreamTrack:A.c,EventSource:A.c,FileReader:A.c,Gyroscope:A.c,LinearAccelerationSensor:A.c,Magnetometer:A.c,MediaDevices:A.c,MediaKeySession:A.c,MediaQueryList:A.c,MediaRecorder:A.c,MediaSource:A.c,MediaStream:A.c,MediaStreamTrack:A.c,MessagePort:A.c,MIDIAccess:A.c,MIDIInput:A.c,MIDIOutput:A.c,MIDIPort:A.c,NetworkInformation:A.c,Notification:A.c,OffscreenCanvas:A.c,OrientationSensor:A.c,PaymentRequest:A.c,Performance:A.c,PermissionStatus:A.c,PresentationAvailability:A.c,PresentationConnection:A.c,PresentationConnectionList:A.c,PresentationRequest:A.c,RelativeOrientationSensor:A.c,RemotePlayback:A.c,RTCDataChannel:A.c,DataChannel:A.c,RTCDTMFSender:A.c,RTCPeerConnection:A.c,webkitRTCPeerConnection:A.c,mozRTCPeerConnection:A.c,ScreenOrientation:A.c,Sensor:A.c,ServiceWorker:A.c,ServiceWorkerContainer:A.c,ServiceWorkerRegistration:A.c,SharedWorker:A.c,SpeechRecognition:A.c,webkitSpeechRecognition:A.c,SpeechSynthesis:A.c,SpeechSynthesisUtterance:A.c,VR:A.c,VRDevice:A.c,VRDisplay:A.c,VRSession:A.c,VisualViewport:A.c,WebSocket:A.c,Worker:A.c,WorkerPerformance:A.c,BluetoothDevice:A.c,BluetoothRemoteGATTCharacteristic:A.c,Clipboard:A.c,MojoInterfaceInterceptor:A.c,USB:A.c,IDBDatabase:A.c,IDBOpenDBRequest:A.c,IDBVersionChangeRequest:A.c,IDBRequest:A.c,IDBTransaction:A.c,AnalyserNode:A.c,RealtimeAnalyserNode:A.c,AudioBufferSourceNode:A.c,AudioDestinationNode:A.c,AudioNode:A.c,AudioScheduledSourceNode:A.c,AudioWorkletNode:A.c,BiquadFilterNode:A.c,ChannelMergerNode:A.c,AudioChannelMerger:A.c,ChannelSplitterNode:A.c,AudioChannelSplitter:A.c,ConstantSourceNode:A.c,ConvolverNode:A.c,DelayNode:A.c,DynamicsCompressorNode:A.c,GainNode:A.c,AudioGainNode:A.c,IIRFilterNode:A.c,MediaElementAudioSourceNode:A.c,MediaStreamAudioDestinationNode:A.c,MediaStreamAudioSourceNode:A.c,OscillatorNode:A.c,Oscillator:A.c,PannerNode:A.c,AudioPannerNode:A.c,webkitAudioPannerNode:A.c,ScriptProcessorNode:A.c,JavaScriptAudioNode:A.c,StereoPannerNode:A.c,WaveShaperNode:A.c,EventTarget:A.c,File:A.Z,FileList:A.dM,FileWriter:A.dN,FontFace:A.bR,FontFaceSet:A.bS,HTMLFormElement:A.dO,Gamepad:A.a4,History:A.hk,HTMLCollection:A.bu,HTMLFormControlsCollection:A.bu,HTMLOptionsCollection:A.bu,XMLHttpRequest:A.ar,XMLHttpRequestUpload:A.bv,XMLHttpRequestEventTarget:A.bv,ImageData:A.cp,HTMLImageElement:A.dT,IntersectionObserver:A.bw,IntersectionObserverEntry:A.ho,KeyboardEvent:A.aS,Location:A.hz,HTMLAudioElement:A.bF,HTMLMediaElement:A.bF,MediaList:A.hF,MIDIInputMap:A.e2,MIDIOutputMap:A.e3,MimeType:A.a5,MimeTypeArray:A.e4,PointerEvent:A.a_,MouseEvent:A.a_,DragEvent:A.a_,DocumentFragment:A.r,ShadowRoot:A.r,Attr:A.r,DocumentType:A.r,Node:A.r,NodeList:A.cD,RadioNodeList:A.cD,Plugin:A.a6,PluginArray:A.ej,ProgressEvent:A.au,ResourceProgressEvent:A.au,RTCStatsReport:A.eo,HTMLSelectElement:A.er,SourceBuffer:A.a1,SourceBufferList:A.et,SpeechGrammar:A.a7,SpeechGrammarList:A.eu,SpeechRecognitionResult:A.a8,Storage:A.ew,CSSStyleSheet:A.U,StyleSheet:A.U,TextTrack:A.a2,TextTrackCue:A.R,VTTCue:A.R,TextTrackCueList:A.eA,TextTrackList:A.eB,TimeRanges:A.i4,Touch:A.a9,TouchList:A.eD,TrackDefaultList:A.i5,CompositionEvent:A.aD,FocusEvent:A.aD,TextEvent:A.aD,TouchEvent:A.aD,UIEvent:A.aD,URL:A.ib,HTMLVideoElement:A.eL,VideoTrackList:A.eM,WheelEvent:A.bf,Window:A.bg,DOMWindow:A.bg,DedicatedWorkerGlobalScope:A.aE,ServiceWorkerGlobalScope:A.aE,SharedWorkerGlobalScope:A.aE,WorkerGlobalScope:A.aE,CSSRuleList:A.eS,ClientRect:A.cV,DOMRect:A.cV,GamepadList:A.f4,NamedNodeMap:A.d3,MozNamedAttrMap:A.d3,SpeechRecognitionResultList:A.fp,StyleSheetList:A.fu,IDBKeyRange:A.cu,SVGLength:A.af,SVGLengthList:A.e_,SVGNumber:A.ah,SVGNumberList:A.ef,SVGPointList:A.hL,SVGStringList:A.ey,SVGTransform:A.am,SVGTransformList:A.eE,AudioBuffer:A.fY,AudioParamMap:A.dA,AudioTrackList:A.dB,AudioContext:A.b8,webkitAudioContext:A.b8,BaseAudioContext:A.b8,OfflineAudioContext:A.eg,WebGLBuffer:A.dC,WebGLContextEvent:A.aK,WebGLFramebuffer:A.dQ,WebGLProgram:A.ek,WebGLRenderbuffer:A.en,WebGLRenderingContext:A.cJ,WebGL2RenderingContext:A.bY,WebGLShader:A.es,WebGLTexture:A.eC,WebGLUniformLocation:A.eG})
hunkHelpers.setOrUpdateLeafTags({WebGL:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,webkitFileSystemDirectoryEntry:true,FileSystemDirectoryEntry:true,DirectoryReader:true,WebKitDirectoryReader:true,webkitFileSystemDirectoryReader:true,FileSystemDirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,webkitFileSystemEntry:true,FileSystemEntry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,webkitFileSystemFileEntry:true,FileSystemFileEntry:true,DOMFileSystem:true,WebKitFileSystem:true,webkitFileSystem:true,FileSystem:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,GeolocationPosition:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,GeolocationPositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL2RenderingContextBase:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,BeforeUnloadEvent:true,Blob:false,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,HTMLDivElement:true,Document:true,HTMLDocument:true,XMLDocument:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,MathMLElement:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,Event:false,InputEvent:false,SubmitEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,EventSource:true,FileReader:true,Gyroscope:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerRegistration:true,SharedWorker:true,SpeechRecognition:true,webkitSpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,FontFace:true,FontFaceSet:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,XMLHttpRequest:true,XMLHttpRequestUpload:true,XMLHttpRequestEventTarget:false,ImageData:true,HTMLImageElement:true,IntersectionObserver:true,IntersectionObserverEntry:true,KeyboardEvent:true,Location:true,HTMLAudioElement:true,HTMLMediaElement:false,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,DocumentFragment:true,ShadowRoot:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,ProgressEvent:true,ResourceProgressEvent:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,TouchEvent:true,UIEvent:false,URL:true,HTMLVideoElement:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,DedicatedWorkerGlobalScope:true,ServiceWorkerGlobalScope:true,SharedWorkerGlobalScope:true,WorkerGlobalScope:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,IDBKeyRange:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLContextEvent:true,WebGLFramebuffer:true,WebGLProgram:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true})
A.bW.$nativeSuperclassTag="ArrayBufferView"
A.d4.$nativeSuperclassTag="ArrayBufferView"
A.d5.$nativeSuperclassTag="ArrayBufferView"
A.cy.$nativeSuperclassTag="ArrayBufferView"
A.d6.$nativeSuperclassTag="ArrayBufferView"
A.d7.$nativeSuperclassTag="ArrayBufferView"
A.cz.$nativeSuperclassTag="ArrayBufferView"
A.d9.$nativeSuperclassTag="EventTarget"
A.da.$nativeSuperclassTag="EventTarget"
A.dc.$nativeSuperclassTag="EventTarget"
A.dd.$nativeSuperclassTag="EventTarget"})()
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
var s=A.oO
if(typeof dartMainRunner==="function")dartMainRunner(s,[])
else s([])})})()