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
a[c]=function(){a[c]=function(){A.pm(b)}
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
if(a[b]!==s)A.po(b)
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
h1(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.kk==null){A.p4()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw A.b(A.k3("Return interceptor for "+A.m(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.iY
if(o==null)o=$.iY=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=A.pb(a)
if(p!=null)return p
if(typeof a=="function")return B.U
s=Object.getPrototypeOf(a)
if(s==null)return B.v
if(s===Object.prototype)return B.v
if(typeof q=="function"){o=$.iY
if(o==null)o=$.iY=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:B.i,enumerable:false,writable:true,configurable:true})
return B.i}return B.i},
n2(a,b){if(a<0||a>4294967295)throw A.b(A.l5(a,0,4294967295,"length",null))
return J.kU(A.q(new Array(a),b.h("z<0>")),b)},
kT(a,b){if(a<0)throw A.b(A.aT("Length must be a non-negative integer: "+a,null))
return A.q(new Array(a),b.h("z<0>"))},
kU(a,b){a.fixed$length=Array
return a},
b8(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cz.prototype
return J.e8.prototype}if(typeof a=="string")return J.bd.prototype
if(a==null)return J.cA.prototype
if(typeof a=="boolean")return J.e6.prototype
if(Array.isArray(a))return J.z.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aH.prototype
if(typeof a=="symbol")return J.bD.prototype
if(typeof a=="bigint")return J.bC.prototype
return a}if(a instanceof A.v)return a
return J.h1(a)},
oZ(a){if(typeof a=="number")return J.bB.prototype
if(typeof a=="string")return J.bd.prototype
if(a==null)return a
if(Array.isArray(a))return J.z.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aH.prototype
if(typeof a=="symbol")return J.bD.prototype
if(typeof a=="bigint")return J.bC.prototype
return a}if(a instanceof A.v)return a
return J.h1(a)},
aE(a){if(typeof a=="string")return J.bd.prototype
if(a==null)return a
if(Array.isArray(a))return J.z.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aH.prototype
if(typeof a=="symbol")return J.bD.prototype
if(typeof a=="bigint")return J.bC.prototype
return a}if(a instanceof A.v)return a
return J.h1(a)},
ci(a){if(a==null)return a
if(Array.isArray(a))return J.z.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aH.prototype
if(typeof a=="symbol")return J.bD.prototype
if(typeof a=="bigint")return J.bC.prototype
return a}if(a instanceof A.v)return a
return J.h1(a)},
p_(a){if(typeof a=="number")return J.bB.prototype
if(typeof a=="string")return J.bd.prototype
if(a==null)return a
if(!(a instanceof A.v))return J.bL.prototype
return a},
cj(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aH.prototype
if(typeof a=="symbol")return J.bD.prototype
if(typeof a=="bigint")return J.bC.prototype
return a}if(a instanceof A.v)return a
return J.h1(a)},
p0(a){if(a==null)return a
if(!(a instanceof A.v))return J.bL.prototype
return a},
mu(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.oZ(a).t(a,b)},
h6(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.b8(a).J(a,b)},
kw(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.p_(a).n(a,b)},
af(a,b){if(typeof b==="number")if(Array.isArray(a)||typeof a=="string"||A.p7(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aE(a).i(a,b)},
mv(a,b,c){return J.ci(a).l(a,b,c)},
mw(a,b,c,d){return J.cj(a).cG(a,b,c,d)},
mx(a,b,c,d){return J.cj(a).cS(a,b,c,d)},
my(a){return J.cj(a).cT(a)},
mz(a,b){return J.ci(a).p(a,b)},
h7(a,b){return J.ci(a).q(a,b)},
mA(a){return J.p0(a).gdu(a)},
mB(a){return J.ci(a).gB(a)},
jM(a){return J.b8(a).gv(a)},
mC(a){return J.cj(a).gde(a)},
aR(a){return J.ci(a).gH(a)},
dE(a){return J.aE(a).gk(a)},
mD(a){return J.b8(a).gE(a)},
kx(a,b,c){return J.ci(a).aq(a,b,c)},
mE(a,b){return J.b8(a).bO(a,b)},
dF(a){return J.b8(a).m(a)},
bY:function bY(){},
e6:function e6(){},
cA:function cA(){},
a:function a(){},
bF:function bF(){},
ev:function ev(){},
bL:function bL(){},
aH:function aH(){},
bC:function bC(){},
bD:function bD(){},
z:function z(a){this.$ti=a},
hD:function hD(a){this.$ti=a},
br:function br(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bB:function bB(){},
cz:function cz(){},
e8:function e8(){},
bd:function bd(){}},A={jW:function jW(){},
cX(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
ld(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
nt(a,b,c){return A.ld(A.cX(A.cX(c,a),b))},
dy(a,b,c){return a},
kl(a){var s,r
for(s=$.ae.length,r=0;r<s;++r)if(a===$.ae[r])return!0
return!1},
kX(a,b,c,d){if(t.gw.b(a))return new A.cv(a,b,c.h("@<0>").u(d).h("cv<1,2>"))
return new A.bH(a,b,c.h("@<0>").u(d).h("bH<1,2>"))},
kR(){return new A.bK("No element")},
cE:function cE(a){this.a=a},
jw:function jw(){},
i6:function i6(){},
k:function k(){},
aj:function aj(){},
bG:function bG(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bH:function bH(a,b,c){this.a=a
this.b=b
this.$ti=c},
cv:function cv(a,b,c){this.a=a
this.b=b
this.$ti=c},
aw:function aw(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
b2:function b2(a,b,c){this.a=a
this.b=b
this.$ti=c},
V:function V(){},
c5:function c5(a){this.a=a},
m9(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
p7(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.aU.b(a)},
m(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.dF(a)
return s},
cQ(a){var s,r=$.l3
if(r==null)r=$.l3=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
i1(a){return A.nb(a)},
nb(a){var s,r,q,p
if(a instanceof A.v)return A.a5(A.ar(a),null)
s=J.b8(a)
if(s===B.T||s===B.V||t.ak.b(a)){r=B.m(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.a5(A.ar(a),null)},
nk(a){if(typeof a=="number"||A.cf(a))return J.dF(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.bc)return a.m(0)
return"Instance of '"+A.i1(a)+"'"},
a1(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
nj(a){return a.b?A.a1(a).getUTCFullYear()+0:A.a1(a).getFullYear()+0},
nh(a){return a.b?A.a1(a).getUTCMonth()+1:A.a1(a).getMonth()+1},
nd(a){return a.b?A.a1(a).getUTCDate()+0:A.a1(a).getDate()+0},
ne(a){return a.b?A.a1(a).getUTCHours()+0:A.a1(a).getHours()+0},
ng(a){return a.b?A.a1(a).getUTCMinutes()+0:A.a1(a).getMinutes()+0},
ni(a){return a.b?A.a1(a).getUTCSeconds()+0:A.a1(a).getSeconds()+0},
nf(a){return a.b?A.a1(a).getUTCMilliseconds()+0:A.a1(a).getMilliseconds()+0},
bg(a,b,c){var s,r,q={}
q.a=0
s=[]
r=[]
q.a=b.length
B.a.P(s,b)
q.b=""
if(c!=null&&c.a!==0)c.q(0,new A.i0(q,r,s))
return J.mE(a,new A.e7(B.a6,0,s,r,0))},
nc(a,b,c){var s,r,q
if(Array.isArray(b))s=c==null||c.a===0
else s=!1
if(s){r=b.length
if(r===0){if(!!a.$0)return a.$0()}else if(r===1){if(!!a.$1)return a.$1(b[0])}else if(r===2){if(!!a.$2)return a.$2(b[0],b[1])}else if(r===3){if(!!a.$3)return a.$3(b[0],b[1],b[2])}else if(r===4){if(!!a.$4)return a.$4(b[0],b[1],b[2],b[3])}else if(r===5)if(!!a.$5)return a.$5(b[0],b[1],b[2],b[3],b[4])
q=a[""+"$"+r]
if(q!=null)return q.apply(a,b)}return A.na(a,b,c)},
na(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g=Array.isArray(b)?b:A.ed(b,t.z),f=g.length,e=a.$R
if(f<e)return A.bg(a,g,c)
s=a.$D
r=s==null
q=!r?s():null
p=J.b8(a)
o=p.$C
if(typeof o=="string")o=p[o]
if(r){if(c!=null&&c.a!==0)return A.bg(a,g,c)
if(f===e)return o.apply(a,g)
return A.bg(a,g,c)}if(Array.isArray(q)){if(c!=null&&c.a!==0)return A.bg(a,g,c)
n=e+q.length
if(f>n)return A.bg(a,g,null)
if(f<n){m=q.slice(f-e)
if(g===b)g=A.ed(g,t.z)
B.a.P(g,m)}return o.apply(a,g)}else{if(f>e)return A.bg(a,g,c)
if(g===b)g=A.ed(g,t.z)
l=Object.keys(q)
if(c==null)for(r=l.length,k=0;k<l.length;l.length===r||(0,A.T)(l),++k){j=q[A.I(l[k])]
if(B.o===j)return A.bg(a,g,c)
B.a.j(g,j)}else{for(r=l.length,i=0,k=0;k<l.length;l.length===r||(0,A.T)(l),++k){h=A.I(l[k])
if(c.a6(0,h)){++i
B.a.j(g,c.i(0,h))}else{j=q[h]
if(B.o===j)return A.bg(a,g,c)
B.a.j(g,j)}}if(i!==c.a)return A.bg(a,g,c)}return o.apply(a,g)}},
aq(a){throw A.b(A.lZ(a))},
c(a,b){if(a==null)J.dE(a)
throw A.b(A.h0(a,b))},
h0(a,b){var s,r="index"
if(!A.fY(b))return new A.aS(!0,b,r,null)
s=A.t(J.dE(a))
if(b<0||b>=s)return A.R(b,s,a,r)
return A.l6(b,r)},
lZ(a){return new A.aS(!0,a,null,null)},
b(a){return A.m4(new Error(),a)},
m4(a,b){var s
if(b==null)b=new A.b3()
a.dartException=b
s=A.pp
if("defineProperty" in Object){Object.defineProperty(a,"message",{get:s})
a.name=""}else a.toString=s
return a},
pp(){return J.dF(this.dartException)},
bq(a){throw A.b(a)},
pn(a,b){throw A.m4(b,a)},
T(a){throw A.b(A.Z(a))},
b4(a){var s,r,q,p,o,n
a=A.pl(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.q([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.io(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
ip(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
lh(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
jX(a,b){var s=b==null,r=s?null:b.method
return new A.e9(a,r,s?null:b.receiver)},
aQ(a){if(a==null)return new A.hY(a)
if(typeof a!=="object")return a
if("dartException" in a)return A.bS(a,a.dartException)
return A.oL(a)},
bS(a,b){if(t.e.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
oL(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.f.by(r,16)&8191)===10)switch(q){case 438:return A.bS(a,A.jX(A.m(s)+" (Error "+q+")",null))
case 445:case 5007:A.m(s)
return A.bS(a,new A.cP())}}if(a instanceof TypeError){p=$.mb()
o=$.mc()
n=$.md()
m=$.me()
l=$.mh()
k=$.mi()
j=$.mg()
$.mf()
i=$.mk()
h=$.mj()
g=p.M(s)
if(g!=null)return A.bS(a,A.jX(A.I(s),g))
else{g=o.M(s)
if(g!=null){g.method="call"
return A.bS(a,A.jX(A.I(s),g))}else if(n.M(s)!=null||m.M(s)!=null||l.M(s)!=null||k.M(s)!=null||j.M(s)!=null||m.M(s)!=null||i.M(s)!=null||h.M(s)!=null){A.I(s)
return A.bS(a,new A.cP())}}return A.bS(a,new A.eU(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.cU()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.bS(a,new A.aS(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.cU()
return a},
b9(a){var s
if(a==null)return new A.dk(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.dk(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
jx(a){if(a==null)return J.jM(a)
if(typeof a=="object")return A.cQ(a)
return J.jM(a)},
oY(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.l(0,a[s],a[r])}return b},
oi(a,b,c,d,e,f){t.Z.a(a)
switch(A.t(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.b(A.dW("Unsupported number of arguments for wrapped closure"))},
aP(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=A.oV(a,b)
a.$identity=s
return s},
oV(a,b){var s
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
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.oi)},
mM(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.eI().constructor.prototype):Object.create(new A.bU(null,null).constructor.prototype)
s.$initialize=s.constructor
if(h)r=function static_tear_off(){this.$initialize()}
else r=function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.kE(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.mI(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.kE(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
mI(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.b("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.mF)}throw A.b("Error in functionType of tearoff")},
mJ(a,b,c,d){var s=A.kD
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
kE(a,b,c,d){var s,r
if(c)return A.mL(a,b,d)
s=b.length
r=A.mJ(s,d,a,b)
return r},
mK(a,b,c,d){var s=A.kD,r=A.mG
switch(b?-1:a){case 0:throw A.b(new A.eC("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
mL(a,b,c){var s,r
if($.kB==null)$.kB=A.kA("interceptor")
if($.kC==null)$.kC=A.kA("receiver")
s=b.length
r=A.mK(s,c,a,b)
return r},
kj(a){return A.mM(a)},
mF(a,b){return A.j5(v.typeUniverse,A.ar(a.a),b)},
kD(a){return a.a},
mG(a){return a.b},
kA(a){var s,r,q,p=new A.bU("receiver","interceptor"),o=J.kU(Object.getOwnPropertyNames(p),t.X)
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw A.b(A.aT("Field name "+a+" not found.",null))},
oU(a){if(a==null)A.oN("boolean expression must not be null")
return a},
oN(a){throw A.b(new A.f0(a))},
pm(a){throw A.b(new A.f5(a))},
m2(a){return v.getIsolateTag(a)},
qC(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
pb(a){var s,r,q,p,o,n=A.I($.m3.$1(a)),m=$.jk[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.jo[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.o1($.lY.$2(a,n))
if(q!=null){m=$.jk[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.jo[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.jv(s)
$.jk[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.jo[n]=s
return s}if(p==="-"){o=A.jv(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.m7(a,s)
if(p==="*")throw A.b(A.k3(n))
if(v.leafTags[n]===true){o=A.jv(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.m7(a,s)},
m7(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.km(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
jv(a){return J.km(a,!1,null,!!a.$iu)},
pd(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.jv(s)
else return J.km(s,c,null,null)},
p4(){if(!0===$.kk)return
$.kk=!0
A.p5()},
p5(){var s,r,q,p,o,n,m,l
$.jk=Object.create(null)
$.jo=Object.create(null)
A.p3()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.m8.$1(o)
if(n!=null){m=A.pd(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
p3(){var s,r,q,p,o,n,m=B.H()
m=A.ch(B.I,A.ch(B.J,A.ch(B.n,A.ch(B.n,A.ch(B.K,A.ch(B.L,A.ch(B.M(B.m),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.m3=new A.jl(p)
$.lY=new A.jm(o)
$.m8=new A.jn(n)},
ch(a,b){return a(b)||b},
oW(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
pl(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
cp:function cp(a,b){this.a=a
this.$ti=b},
co:function co(){},
cq:function cq(a,b,c){this.a=a
this.b=b
this.$ti=c},
da:function da(a,b){this.a=a
this.$ti=b},
db:function db(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
e7:function e7(a,b,c,d,e){var _=this
_.a=a
_.c=b
_.d=c
_.e=d
_.f=e},
i0:function i0(a,b,c){this.a=a
this.b=b
this.c=c},
io:function io(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
cP:function cP(){},
e9:function e9(a,b,c){this.a=a
this.b=b
this.c=c},
eU:function eU(a){this.a=a},
hY:function hY(a){this.a=a},
dk:function dk(a){this.a=a
this.b=null},
bc:function bc(){},
dN:function dN(){},
dO:function dO(){},
eL:function eL(){},
eI:function eI(){},
bU:function bU(a,b){this.a=a
this.b=b},
f5:function f5(a){this.a=a},
eC:function eC(a){this.a=a},
f0:function f0(a){this.a=a},
j_:function j_(){},
b_:function b_(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
hE:function hE(a){this.a=a},
hK:function hK(a,b){this.a=a
this.b=b
this.c=null},
av:function av(a,b){this.a=a
this.$ti=b},
cF:function cF(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
jl:function jl(a){this.a=a},
jm:function jm(a){this.a=a},
jn:function jn(a){this.a=a},
po(a){A.pn(new A.cE("Field '"+a+"' has been assigned during initialization."),new Error())},
lp(a){var s=new A.iG(a)
return s.b=s},
iG:function iG(a){this.a=a
this.b=null},
lH(a){return a},
j9(a,b,c){},
bP(a){return a},
n5(a,b,c){A.j9(a,b,c)
return c==null?new Uint8Array(a,b):new Uint8Array(a,b,c)},
b6(a,b,c){if(a>>>0!==a||a>=c)throw A.b(A.h0(b,a))},
ej:function ej(){},
cL:function cL(){},
ek:function ek(){},
c0:function c0(){},
cJ:function cJ(){},
cK:function cK(){},
cI:function cI(){},
el:function el(){},
em:function em(){},
en:function en(){},
eo:function eo(){},
cM:function cM(){},
ep:function ep(){},
cN:function cN(){},
eq:function eq(){},
dd:function dd(){},
de:function de(){},
df:function df(){},
dg:function dg(){},
l8(a,b){var s=b.c
return s==null?b.c=A.k9(a,b.y,!0):s},
k_(a,b){var s=b.c
return s==null?b.c=A.dq(a,"at",[b.y]):s},
ns(a){var s=a.d
if(s!=null)return s
return a.d=new Map()},
l9(a){var s=a.x
if(s===6||s===7||s===8)return A.l9(a.y)
return s===12||s===13},
nr(a){return a.at},
S(a){return A.fN(v.typeUniverse,a,!1)},
bo(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.x
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.y
r=A.bo(a,s,a0,a1)
if(r===s)return b
return A.lC(a,r,!0)
case 7:s=b.y
r=A.bo(a,s,a0,a1)
if(r===s)return b
return A.k9(a,r,!0)
case 8:s=b.y
r=A.bo(a,s,a0,a1)
if(r===s)return b
return A.lB(a,r,!0)
case 9:q=b.z
p=A.dx(a,q,a0,a1)
if(p===q)return b
return A.dq(a,b.y,p)
case 10:o=b.y
n=A.bo(a,o,a0,a1)
m=b.z
l=A.dx(a,m,a0,a1)
if(n===o&&l===m)return b
return A.k7(a,n,l)
case 12:k=b.y
j=A.bo(a,k,a0,a1)
i=b.z
h=A.oH(a,i,a0,a1)
if(j===k&&h===i)return b
return A.lA(a,j,h)
case 13:g=b.z
a1+=g.length
f=A.dx(a,g,a0,a1)
o=b.y
n=A.bo(a,o,a0,a1)
if(f===g&&n===o)return b
return A.k8(a,n,f,!0)
case 14:e=b.y
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw A.b(A.dI("Attempted to substitute unexpected RTI kind "+c))}},
dx(a,b,c,d){var s,r,q,p,o=b.length,n=A.j6(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.bo(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
oI(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.j6(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.bo(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
oH(a,b,c,d){var s,r=b.a,q=A.dx(a,r,c,d),p=b.b,o=A.dx(a,p,c,d),n=b.c,m=A.oI(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.ff()
s.a=q
s.b=o
s.c=m
return s},
q(a,b){a[v.arrayRti]=b
return a},
m0(a){var s,r=a.$S
if(r!=null){if(typeof r=="number")return A.p2(r)
s=a.$S()
return s}return null},
p6(a,b){var s
if(A.l9(b))if(a instanceof A.bc){s=A.m0(a)
if(s!=null)return s}return A.ar(a)},
ar(a){if(a instanceof A.v)return A.x(a)
if(Array.isArray(a))return A.aO(a)
return A.ke(J.b8(a))},
aO(a){var s=a[v.arrayRti],r=t.b
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
x(a){var s=a.$ti
return s!=null?s:A.ke(a)},
ke(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.oh(a,s)},
oh(a,b){var s=a instanceof A.bc?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.nY(v.typeUniverse,s.name)
b.$ccache=r
return r},
p2(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.fN(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
p1(a){return A.bR(A.x(a))},
oG(a){var s=a instanceof A.bc?A.m0(a):null
if(s!=null)return s
if(t.dm.b(a))return J.mD(a).a
if(Array.isArray(a))return A.aO(a)
return A.ar(a)},
bR(a){var s=a.w
return s==null?a.w=A.lL(a):s},
lL(a){var s,r,q=a.at,p=q.replace(/\*/g,"")
if(p===q)return a.w=new A.j4(a)
s=A.fN(v.typeUniverse,p,!0)
r=s.w
return r==null?s.w=A.lL(s):r},
aF(a){return A.bR(A.fN(v.typeUniverse,a,!1))},
og(a){var s,r,q,p,o,n,m=this
if(m===t.K)return A.b7(m,a,A.on)
if(!A.ba(m))if(!(m===t._))s=!1
else s=!0
else s=!0
if(s)return A.b7(m,a,A.or)
s=m.x
if(s===7)return A.b7(m,a,A.oe)
if(s===1)return A.b7(m,a,A.lR)
r=s===6?m.y:m
q=r.x
if(q===8)return A.b7(m,a,A.oj)
if(r===t.S)p=A.fY
else if(r===t.i||r===t.H)p=A.om
else if(r===t.N)p=A.op
else p=r===t.y?A.cf:null
if(p!=null)return A.b7(m,a,p)
if(q===9){o=r.y
if(r.z.every(A.p9)){m.r="$i"+o
if(o==="l")return A.b7(m,a,A.ol)
return A.b7(m,a,A.oq)}}else if(q===11){n=A.oW(r.y,r.z)
return A.b7(m,a,n==null?A.lR:n)}return A.b7(m,a,A.oc)},
b7(a,b,c){a.b=c
return a.b(b)},
of(a){var s,r=this,q=A.ob
if(!A.ba(r))if(!(r===t._))s=!1
else s=!0
else s=!0
if(s)q=A.o2
else if(r===t.K)q=A.o0
else{s=A.dz(r)
if(s)q=A.od}r.a=q
return r.a(a)},
fZ(a){var s,r=a.x
if(!A.ba(a))if(!(a===t._))if(!(a===t.aw))if(r!==7)if(!(r===6&&A.fZ(a.y)))s=r===8&&A.fZ(a.y)||a===t.P||a===t.T
else s=!0
else s=!0
else s=!0
else s=!0
else s=!0
return s},
oc(a){var s=this
if(a==null)return A.fZ(s)
return A.p8(v.typeUniverse,A.p6(a,s),s)},
oe(a){if(a==null)return!0
return this.y.b(a)},
oq(a){var s,r=this
if(a==null)return A.fZ(r)
s=r.r
if(a instanceof A.v)return!!a[s]
return!!J.b8(a)[s]},
ol(a){var s,r=this
if(a==null)return A.fZ(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.r
if(a instanceof A.v)return!!a[s]
return!!J.b8(a)[s]},
ob(a){var s,r=this
if(a==null){s=A.dz(r)
if(s)return a}else if(r.b(a))return a
A.lM(a,r)},
od(a){var s=this
if(a==null)return a
else if(s.b(a))return a
A.lM(a,s)},
lM(a,b){throw A.b(A.nN(A.lq(a,A.a5(b,null))))},
lq(a,b){return A.bv(a)+": type '"+A.a5(A.oG(a),null)+"' is not a subtype of type '"+b+"'"},
nN(a){return new A.dn("TypeError: "+a)},
Y(a,b){return new A.dn("TypeError: "+A.lq(a,b))},
oj(a){var s=this,r=s.x===6?s.y:s
return r.y.b(a)||A.k_(v.typeUniverse,r).b(a)},
on(a){return a!=null},
o0(a){if(a!=null)return a
throw A.b(A.Y(a,"Object"))},
or(a){return!0},
o2(a){return a},
lR(a){return!1},
cf(a){return!0===a||!1===a},
ka(a){if(!0===a)return!0
if(!1===a)return!1
throw A.b(A.Y(a,"bool"))},
q4(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.b(A.Y(a,"bool"))},
q3(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.b(A.Y(a,"bool?"))},
du(a){if(typeof a=="number")return a
throw A.b(A.Y(a,"double"))},
q6(a){if(typeof a=="number")return a
if(a==null)return a
throw A.b(A.Y(a,"double"))},
q5(a){if(typeof a=="number")return a
if(a==null)return a
throw A.b(A.Y(a,"double?"))},
fY(a){return typeof a=="number"&&Math.floor(a)===a},
t(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.b(A.Y(a,"int"))},
q7(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.b(A.Y(a,"int"))},
lF(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.b(A.Y(a,"int?"))},
om(a){return typeof a=="number"},
lG(a){if(typeof a=="number")return a
throw A.b(A.Y(a,"num"))},
q8(a){if(typeof a=="number")return a
if(a==null)return a
throw A.b(A.Y(a,"num"))},
o_(a){if(typeof a=="number")return a
if(a==null)return a
throw A.b(A.Y(a,"num?"))},
op(a){return typeof a=="string"},
I(a){if(typeof a=="string")return a
throw A.b(A.Y(a,"String"))},
q9(a){if(typeof a=="string")return a
if(a==null)return a
throw A.b(A.Y(a,"String"))},
o1(a){if(typeof a=="string")return a
if(a==null)return a
throw A.b(A.Y(a,"String?"))},
lU(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.a5(a[q],b)
return s},
oz(a,b){var s,r,q,p,o,n,m=a.y,l=a.z
if(""===m)return"("+A.lU(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.a5(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
lN(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=", "
if(a6!=null){s=a6.length
if(a5==null){a5=A.q([],t.s)
r=null}else r=a5.length
q=a5.length
for(p=s;p>0;--p)B.a.j(a5,"T"+(q+p))
for(o=t.X,n=t._,m="<",l="",p=0;p<s;++p,l=a3){k=a5.length
j=k-1-p
if(!(j>=0))return A.c(a5,j)
m=B.p.t(m+l,a5[j])
i=a6[p]
h=i.x
if(!(h===2||h===3||h===4||h===5||i===o))if(!(i===n))k=!1
else k=!0
else k=!0
if(!k)m+=" extends "+A.a5(i,a5)}m+=">"}else{m=""
r=null}o=a4.y
g=a4.z
f=g.a
e=f.length
d=g.b
c=d.length
b=g.c
a=b.length
a0=A.a5(o,a5)
for(a1="",a2="",p=0;p<e;++p,a2=a3)a1+=a2+A.a5(f[p],a5)
if(c>0){a1+=a2+"["
for(a2="",p=0;p<c;++p,a2=a3)a1+=a2+A.a5(d[p],a5)
a1+="]"}if(a>0){a1+=a2+"{"
for(a2="",p=0;p<a;p+=3,a2=a3){a1+=a2
if(b[p+1])a1+="required "
a1+=A.a5(b[p+2],a5)+" "+b[p]}a1+="}"}if(r!=null){a5.toString
a5.length=r}return m+"("+a1+") => "+a0},
a5(a,b){var s,r,q,p,o,n,m,l=a.x
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=A.a5(a.y,b)
return s}if(l===7){r=a.y
s=A.a5(r,b)
q=r.x
return(q===12||q===13?"("+s+")":s)+"?"}if(l===8)return"FutureOr<"+A.a5(a.y,b)+">"
if(l===9){p=A.oK(a.y)
o=a.z
return o.length>0?p+("<"+A.lU(o,b)+">"):p}if(l===11)return A.oz(a,b)
if(l===12)return A.lN(a,b,null)
if(l===13)return A.lN(a.y,b,a.z)
if(l===14){n=a.y
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.c(b,n)
return b[n]}return"?"},
oK(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
nZ(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
nY(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.fN(a,b,!1)
else if(typeof m=="number"){s=m
r=A.dr(a,5,"#")
q=A.j6(s)
for(p=0;p<s;++p)q[p]=r
o=A.dq(a,b,q)
n[b]=o
return o}else return m},
nW(a,b){return A.lD(a.tR,b)},
nV(a,b){return A.lD(a.eT,b)},
fN(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.lx(A.lv(a,null,b,c))
r.set(b,s)
return s},
j5(a,b,c){var s,r,q=b.Q
if(q==null)q=b.Q=new Map()
s=q.get(c)
if(s!=null)return s
r=A.lx(A.lv(a,b,c,!0))
q.set(c,r)
return r},
nX(a,b,c){var s,r,q,p=b.as
if(p==null)p=b.as=new Map()
s=c.at
r=p.get(s)
if(r!=null)return r
q=A.k7(a,b,c.x===10?c.z:[c])
p.set(s,q)
return q},
b5(a,b){b.a=A.of
b.b=A.og
return b},
dr(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.am(null,null)
s.x=b
s.at=c
r=A.b5(a,s)
a.eC.set(c,r)
return r},
lC(a,b,c){var s,r=b.at+"*",q=a.eC.get(r)
if(q!=null)return q
s=A.nS(a,b,r,c)
a.eC.set(r,s)
return s},
nS(a,b,c,d){var s,r,q
if(d){s=b.x
if(!A.ba(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new A.am(null,null)
q.x=6
q.y=b
q.at=c
return A.b5(a,q)},
k9(a,b,c){var s,r=b.at+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.nR(a,b,r,c)
a.eC.set(r,s)
return s},
nR(a,b,c,d){var s,r,q,p
if(d){s=b.x
if(!A.ba(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&A.dz(b.y)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.aw)return t.P
else if(s===6){q=b.y
if(q.x===8&&A.dz(q.y))return q
else return A.l8(a,b)}}p=new A.am(null,null)
p.x=7
p.y=b
p.at=c
return A.b5(a,p)},
lB(a,b,c){var s,r=b.at+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.nP(a,b,r,c)
a.eC.set(r,s)
return s},
nP(a,b,c,d){var s,r,q
if(d){s=b.x
if(!A.ba(b))if(!(b===t._))r=!1
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return A.dq(a,"at",[b])
else if(b===t.P||b===t.T)return t.eH}q=new A.am(null,null)
q.x=8
q.y=b
q.at=c
return A.b5(a,q)},
nT(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.am(null,null)
s.x=14
s.y=b
s.at=q
r=A.b5(a,s)
a.eC.set(q,r)
return r},
dp(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].at
return s},
nO(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].at}return s},
dq(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.dp(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.am(null,null)
r.x=9
r.y=b
r.z=c
if(c.length>0)r.c=c[0]
r.at=p
q=A.b5(a,r)
a.eC.set(p,q)
return q},
k7(a,b,c){var s,r,q,p,o,n
if(b.x===10){s=b.y
r=b.z.concat(c)}else{r=c
s=b}q=s.at+(";<"+A.dp(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.am(null,null)
o.x=10
o.y=s
o.z=r
o.at=q
n=A.b5(a,o)
a.eC.set(q,n)
return n},
nU(a,b,c){var s,r,q="+"+(b+"("+A.dp(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.am(null,null)
s.x=11
s.y=b
s.z=c
s.at=q
r=A.b5(a,s)
a.eC.set(q,r)
return r},
lA(a,b,c){var s,r,q,p,o,n=b.at,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.dp(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.dp(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.nO(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.am(null,null)
p.x=12
p.y=b
p.z=c
p.at=r
o=A.b5(a,p)
a.eC.set(r,o)
return o},
k8(a,b,c,d){var s,r=b.at+("<"+A.dp(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.nQ(a,b,c,r,d)
a.eC.set(r,s)
return s},
nQ(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.j6(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.x===1){r[p]=o;++q}}if(q>0){n=A.bo(a,b,r,0)
m=A.dx(a,c,r,0)
return A.k8(a,n,m,c!==m)}}l=new A.am(null,null)
l.x=13
l.y=b
l.z=c
l.at=d
return A.b5(a,l)},
lv(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
lx(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.nH(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.lw(a,r,l,k,!1)
else if(q===46)r=A.lw(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.bn(a.u,a.e,k.pop()))
break
case 94:k.push(A.nT(a.u,k.pop()))
break
case 35:k.push(A.dr(a.u,5,"#"))
break
case 64:k.push(A.dr(a.u,2,"@"))
break
case 126:k.push(A.dr(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.nJ(a,k)
break
case 38:A.nI(a,k)
break
case 42:p=a.u
k.push(A.lC(p,A.bn(p,a.e,k.pop()),a.n))
break
case 63:p=a.u
k.push(A.k9(p,A.bn(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.lB(p,A.bn(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.nG(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.ly(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.nL(a.u,a.e,o)
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
return A.bn(a.u,a.e,m)},
nH(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
lw(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.x===10)o=o.y
n=A.nZ(s,o.y)[p]
if(n==null)A.bq('No "'+p+'" in "'+A.nr(o)+'"')
d.push(A.j5(s,o,n))}else d.push(p)
return m},
nJ(a,b){var s,r=a.u,q=A.lu(a,b),p=b.pop()
if(typeof p=="string")b.push(A.dq(r,p,q))
else{s=A.bn(r,a.e,p)
switch(s.x){case 12:b.push(A.k8(r,s,q,a.n))
break
default:b.push(A.k7(r,s,q))
break}}},
nG(a,b){var s,r,q,p,o,n=null,m=a.u,l=b.pop()
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
s=r}q=A.lu(a,b)
l=b.pop()
switch(l){case-3:l=b.pop()
if(s==null)s=m.sEA
if(r==null)r=m.sEA
p=A.bn(m,a.e,l)
o=new A.ff()
o.a=q
o.b=s
o.c=r
b.push(A.lA(m,p,o))
return
case-4:b.push(A.nU(m,b.pop(),q))
return
default:throw A.b(A.dI("Unexpected state under `()`: "+A.m(l)))}},
nI(a,b){var s=b.pop()
if(0===s){b.push(A.dr(a.u,1,"0&"))
return}if(1===s){b.push(A.dr(a.u,4,"1&"))
return}throw A.b(A.dI("Unexpected extended operation "+A.m(s)))},
lu(a,b){var s=b.splice(a.p)
A.ly(a.u,a.e,s)
a.p=b.pop()
return s},
bn(a,b,c){if(typeof c=="string")return A.dq(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.nK(a,b,c)}else return c},
ly(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.bn(a,b,c[s])},
nL(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.bn(a,b,c[s])},
nK(a,b,c){var s,r,q=b.x
if(q===10){if(c===0)return b.y
s=b.z
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.y
q=b.x}else if(c===0)return b
if(q!==9)throw A.b(A.dI("Indexed base must be an interface type"))
s=b.z
if(c<=s.length)return s[c-1]
throw A.b(A.dI("Bad index "+c+" for "+b.m(0)))},
p8(a,b,c){var s,r=A.ns(b),q=r.get(c)
if(q!=null)return q
s=A.Q(a,b,null,c,null)
r.set(c,s)
return s},
Q(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(!A.ba(d))if(!(d===t._))s=!1
else s=!0
else s=!0
if(s)return!0
r=b.x
if(r===4)return!0
if(A.ba(b))return!1
if(b.x!==1)s=!1
else s=!0
if(s)return!0
q=r===14
if(q)if(A.Q(a,c[b.y],c,d,e))return!0
p=d.x
s=b===t.P||b===t.T
if(s){if(p===8)return A.Q(a,b,c,d.y,e)
return d===t.P||d===t.T||p===7||p===6}if(d===t.K){if(r===8)return A.Q(a,b.y,c,d,e)
if(r===6)return A.Q(a,b.y,c,d,e)
return r!==7}if(r===6)return A.Q(a,b.y,c,d,e)
if(p===6){s=A.l8(a,d)
return A.Q(a,b,c,s,e)}if(r===8){if(!A.Q(a,b.y,c,d,e))return!1
return A.Q(a,A.k_(a,b),c,d,e)}if(r===7){s=A.Q(a,t.P,c,d,e)
return s&&A.Q(a,b.y,c,d,e)}if(p===8){if(A.Q(a,b,c,d.y,e))return!0
return A.Q(a,b,c,A.k_(a,d),e)}if(p===7){s=A.Q(a,b,c,t.P,e)
return s||A.Q(a,b,c,d.y,e)}if(q)return!1
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
if(!A.Q(a,j,c,i,e)||!A.Q(a,i,e,j,c))return!1}return A.lQ(a,b.y,c,d.y,e)}if(p===12){if(b===t.x)return!0
if(s)return!1
return A.lQ(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return A.ok(a,b,c,d,e)}if(o&&p===11)return A.oo(a,b,c,d,e)
return!1},
lQ(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!A.Q(a3,a4.y,a5,a6.y,a7))return!1
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
if(!A.Q(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.Q(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.Q(a3,k[h],a7,g,a5))return!1}f=s.c
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
if(!A.Q(a3,e[a+2],a7,g,a5))return!1
break}}for(;b<d;){if(f[b+1])return!1
b+=3}return!0},
ok(a,b,c,d,e){var s,r,q,p,o,n,m,l=b.y,k=d.y
for(;l!==k;){s=a.tR[l]
if(s==null)return!1
if(typeof s=="string"){l=s
continue}r=s[k]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.j5(a,b,r[o])
return A.lE(a,p,null,c,d.z,e)}n=b.z
m=d.z
return A.lE(a,n,null,c,m,e)},
lE(a,b,c,d,e,f){var s,r,q,p=b.length
for(s=0;s<p;++s){r=b[s]
q=e[s]
if(!A.Q(a,r,d,q,f))return!1}return!0},
oo(a,b,c,d,e){var s,r=b.z,q=d.z,p=r.length
if(p!==q.length)return!1
if(b.y!==d.y)return!1
for(s=0;s<p;++s)if(!A.Q(a,r[s],c,q[s],e))return!1
return!0},
dz(a){var s,r=a.x
if(!(a===t.P||a===t.T))if(!A.ba(a))if(r!==7)if(!(r===6&&A.dz(a.y)))s=r===8&&A.dz(a.y)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
p9(a){var s
if(!A.ba(a))if(!(a===t._))s=!1
else s=!0
else s=!0
return s},
ba(a){var s=a.x
return s===2||s===3||s===4||s===5||a===t.X},
lD(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
j6(a){return a>0?new Array(a):v.typeUniverse.sEA},
am:function am(a,b){var _=this
_.a=a
_.b=b
_.w=_.r=_.e=_.d=_.c=null
_.x=0
_.at=_.as=_.Q=_.z=_.y=null},
ff:function ff(){this.c=this.b=this.a=null},
j4:function j4(a){this.a=a},
fc:function fc(){},
dn:function dn(a){this.a=a},
ny(){var s,r,q={}
if(self.scheduleImmediate!=null)return A.oO()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(A.aP(new A.iC(q),1)).observe(s,{childList:true})
return new A.iB(q,s,r)}else if(self.setImmediate!=null)return A.oP()
return A.oQ()},
nz(a){self.scheduleImmediate(A.aP(new A.iD(t.M.a(a)),0))},
nA(a){self.setImmediate(A.aP(new A.iE(t.M.a(a)),0))},
nB(a){t.M.a(a)
A.nM(0,a)},
nM(a,b){var s=new A.j2()
s.cp(a,b)
return s},
ha(a,b){var s=A.dy(a,"error",t.K)
return new A.cl(s,b==null?A.jN(a):b)},
jN(a){var s
if(t.e.b(a)){s=a.gY()
if(s!=null)return s}return B.R},
mS(a,b){var s,r,q,p,o,n,m,l,k,j,i,h={},g=null,f=!1,e=b.h("J<l<0>>"),d=new A.J($.E,e)
h.a=null
h.b=0
s=A.lp("error")
r=A.lp("stackTrace")
q=new A.hv(h,g,f,d,s,r)
try{for(l=t.P,k=0,j=0;k<2;++k){p=a[k]
o=j
p.aY(new A.hu(h,o,d,g,f,s,r,b),q,l)
j=++h.b}if(j===0){l=d
l.ae(A.q([],b.h("z<0>")))
return l}h.a=A.hL(j,null,!1,b.h("0?"))}catch(i){n=A.aQ(i)
m=A.b9(i)
if(h.b===0||A.oU(f)){l=n
r=m
A.dy(l,"error",t.K)
$.E!==B.d
if(r==null)r=A.jN(l)
e=new A.J($.E,e)
e.be(l,r)
return e}else{s.b=n
r.b=m}}return d},
lr(a,b){var s,r,q
for(s=t.c;r=a.a,(r&4)!==0;)a=s.a(a.c)
if((r&24)!==0){q=b.aj()
b.ad(a)
A.c9(b,q)}else{q=t.F.a(b.c)
b.bx(a)
a.aO(q)}},
nE(a,b){var s,r,q,p={},o=p.a=a
for(s=t.c;r=o.a,(r&4)!==0;o=a){a=s.a(o.c)
p.a=a}if((r&24)===0){q=t.F.a(b.c)
b.bx(o)
p.a.aO(q)
return}if((r&16)===0&&b.c==null){b.ad(o)
return}b.a^=2
A.bQ(null,null,b.b,t.M.a(new A.iO(p,b)))},
c9(a,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c={},b=c.a=a
for(s=t.t,r=t.F,q=t.b9;!0;){p={}
o=b.a
n=(o&16)===0
m=!n
if(a0==null){if(m&&(o&1)===0){l=s.a(b.c)
A.h_(l.a,l.b)}return}p.a=a0
k=a0.a
for(b=a0;k!=null;b=k,k=j){b.a=null
A.c9(c.a,b)
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
A.h_(i.a,i.b)
return}f=$.E
if(f!==g)$.E=g
else f=null
b=b.c
if((b&15)===8)new A.iV(p,c,m).$0()
else if(n){if((b&1)!==0)new A.iU(p,i).$0()}else if((b&2)!==0)new A.iT(c,p).$0()
if(f!=null)$.E=f
b=p.c
if(b instanceof A.J){o=p.a.$ti
o=o.h("at<2>").b(b)||!o.z[1].b(b)}else o=!1
if(o){q.a(b)
e=p.a.b
if((b.a&24)!==0){d=r.a(e.c)
e.c=null
a0=e.ak(d)
e.a=b.a&30|e.a&1
e.c=b.c
c.a=b
continue}else A.lr(b,e)
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
oA(a,b){var s
if(t.C.b(a))return b.bQ(a,t.z,t.K,t.l)
s=t.v
if(s.b(a))return s.a(a)
throw A.b(A.ky(a,"onError",u.c))},
ot(){var s,r
for(s=$.cg;s!=null;s=$.cg){$.dw=null
r=s.b
$.cg=r
if(r==null)$.dv=null
s.a.$0()}},
oF(){$.kf=!0
try{A.ot()}finally{$.dw=null
$.kf=!1
if($.cg!=null)$.ko().$1(A.m_())}},
lW(a){var s=new A.f1(a),r=$.dv
if(r==null){$.cg=$.dv=s
if(!$.kf)$.ko().$1(A.m_())}else $.dv=r.b=s},
oD(a){var s,r,q,p=$.cg
if(p==null){A.lW(a)
$.dw=$.dv
return}s=new A.f1(a)
r=$.dw
if(r==null){s.b=p
$.cg=$.dw=s}else{q=r.b
s.b=q
$.dw=r.b=s
if(q==null)$.dv=s}},
kn(a){var s,r=null,q=$.E
if(B.d===q){A.bQ(r,r,B.d,a)
return}s=!1
if(s){A.bQ(r,r,q,t.M.a(a))
return}A.bQ(r,r,q,t.M.a(q.bC(a)))},
i9(a){return new A.aC(null,null,a.h("aC<0>"))},
lV(a){return},
lo(a,b,c){var s=b==null?A.oR():b
return t.a7.u(c).h("1(2)").a(s)},
nC(a,b){if(b==null)b=A.oT()
if(t.da.b(b))return a.bQ(b,t.z,t.K,t.l)
if(t.d5.b(b))return t.v.a(b)
throw A.b(A.aT("handleError callback must take either an Object (the error), or both an Object (the error) and a StackTrace.",null))},
ou(a){},
ow(a,b){A.h_(a,b)},
ov(){},
oC(a,b,c,d){var s,r,q,p,o,n
try{b.$1(a.$0())}catch(n){s=A.aQ(n)
r=A.b9(n)
t.K.a(s)
t.gO.a(r)
q=null
if(q==null)c.$2(s,r)
else{p=J.mA(q)
o=q.gY()
c.$2(p,o)}}},
o5(a,b,c,d){var s,r,q=a.S(0),p=$.jA()
if(q!==p){s=t.O.a(new A.j8(b,c,d))
p=q.$ti
r=$.E
q.aD(new A.bO(new A.J(r,p),8,s,null,p.h("@<1>").u(p.c).h("bO<1,2>")))}else b.K(c,d)},
o6(a,b){return new A.j7(a,b)},
h_(a,b){A.oD(new A.je(a,b))},
lS(a,b,c,d,e){var s,r=$.E
if(r===c)return d.$0()
$.E=c
s=r
try{r=d.$0()
return r}finally{$.E=s}},
lT(a,b,c,d,e,f,g){var s,r=$.E
if(r===c)return d.$1(e)
$.E=c
s=r
try{r=d.$1(e)
return r}finally{$.E=s}},
oB(a,b,c,d,e,f,g,h,i){var s,r=$.E
if(r===c)return d.$2(e,f)
$.E=c
s=r
try{r=d.$2(e,f)
return r}finally{$.E=s}},
bQ(a,b,c,d){t.M.a(d)
if(B.d!==c)d=c.bC(d)
A.lW(d)},
iC:function iC(a){this.a=a},
iB:function iB(a,b,c){this.a=a
this.b=b
this.c=c},
iD:function iD(a){this.a=a},
iE:function iE(a){this.a=a},
j2:function j2(){},
j3:function j3(a,b){this.a=a
this.b=b},
cl:function cl(a,b){this.a=a
this.b=b},
a4:function a4(a,b){this.a=a
this.$ti=b},
aD:function aD(a,b,c,d,e,f){var _=this
_.ay=0
_.CW=_.ch=null
_.w=a
_.a=b
_.c=c
_.d=d
_.e=e
_.r=_.f=null
_.$ti=f},
cZ:function cZ(){},
aC:function aC(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.r=_.e=_.d=null
_.$ti=c},
hv:function hv(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hu:function hu(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
d_:function d_(){},
bN:function bN(a,b){this.a=a
this.$ti=b},
bO:function bO(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
J:function J(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
iL:function iL(a,b){this.a=a
this.b=b},
iS:function iS(a,b){this.a=a
this.b=b},
iP:function iP(a){this.a=a},
iQ:function iQ(a){this.a=a},
iR:function iR(a,b,c){this.a=a
this.b=b
this.c=c},
iO:function iO(a,b){this.a=a
this.b=b},
iN:function iN(a,b){this.a=a
this.b=b},
iM:function iM(a,b,c){this.a=a
this.b=b
this.c=c},
iV:function iV(a,b,c){this.a=a
this.b=b
this.c=c},
iW:function iW(a){this.a=a},
iU:function iU(a,b){this.a=a
this.b=b},
iT:function iT(a,b){this.a=a
this.b=b},
f1:function f1(a){this.a=a
this.b=null},
bi:function bi(){},
ic:function ic(a){this.a=a},
id:function id(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ia:function ia(a,b){this.a=a
this.b=b},
ib:function ib(){},
ie:function ie(a,b){this.a=a
this.b=b},
ig:function ig(a,b){this.a=a
this.b=b},
d0:function d0(){},
d1:function d1(){},
c7:function c7(){},
iF:function iF(a){this.a=a},
cd:function cd(){},
bl:function bl(){},
d2:function d2(a,b){this.b=a
this.a=null
this.$ti=b},
f6:function f6(){},
dh:function dh(a){var _=this
_.a=0
_.c=_.b=null
_.$ti=a},
iZ:function iZ(a,b){this.a=a
this.b=b},
c8:function c8(a,b){var _=this
_.a=1
_.b=a
_.c=null
_.$ti=b},
j8:function j8(a,b,c){this.a=a
this.b=b
this.c=c},
j7:function j7(a,b){this.a=a
this.b=b},
dt:function dt(){},
je:function je(a,b){this.a=a
this.b=b},
fx:function fx(){},
j0:function j0(a,b){this.a=a
this.b=b},
j1:function j1(a,b,c){this.a=a
this.b=b
this.c=c},
ls(a,b){var s=a[b]
return s===a?null:s},
lt(a,b,c){if(c==null)a[b]=a
else a[b]=c},
nF(){var s=Object.create(null)
A.lt(s,"<non-identifier-key>",s)
delete s["<non-identifier-key>"]
return s},
ec(a,b,c){return b.h("@<0>").u(c).h("kW<1,2>").a(A.oY(a,new A.b_(b.h("@<0>").u(c).h("b_<1,2>"))))},
cG(a,b){return new A.b_(a.h("@<0>").u(b).h("b_<1,2>"))},
hN(a){var s,r={}
if(A.kl(a))return"{...}"
s=new A.cW("")
try{B.a.j($.ae,a)
s.a+="{"
r.a=!0
J.h7(a,new A.hO(r,s))
s.a+="}"}finally{if(0>=$.ae.length)return A.c($.ae,-1)
$.ae.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
d6:function d6(){},
d9:function d9(a){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=a},
d7:function d7(a,b){this.a=a
this.$ti=b},
d8:function d8(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
e:function e(){},
y:function y(){},
hO:function hO(a,b){this.a=a
this.b=b},
ds:function ds(){},
c_:function c_(){},
cY:function cY(){},
ce:function ce(){},
ox(a,b){var s,r,q,p=null
try{p=JSON.parse(a)}catch(r){s=A.aQ(r)
q=String(s)
throw A.b(new A.hr(q))}q=A.jb(p)
return q},
jb(a){var s
if(a==null)return null
if(typeof a!="object")return a
if(Object.getPrototypeOf(a)!==Array.prototype)return new A.fj(a,Object.create(null))
for(s=0;s<a.length;++s)a[s]=A.jb(a[s])
return a},
fj:function fj(a,b){this.a=a
this.b=b
this.c=null},
fk:function fk(a){this.a=a},
dP:function dP(){},
dR:function dR(){},
ea:function ea(){},
hG:function hG(a){this.a=a},
kL(a,b){return A.nc(a,b,null)},
mP(a,b){a=A.b(a)
if(a==null)a=t.K.a(a)
a.stack=b.m(0)
throw a
throw A.b("unreachable")},
kH(a,b){var s
if(Math.abs(a)<=864e13)s=!1
else s=!0
if(s)A.bq(A.aT("DateTime is outside valid range: "+a,null))
A.dy(b,"isUtc",t.y)
return new A.cs(a,b)},
hL(a,b,c,d){var s,r=c?J.kT(a,d):J.n2(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
jY(a,b){var s,r=A.q([],b.h("z<0>"))
for(s=J.aR(a);s.A();)B.a.j(r,b.a(s.gC(s)))
return r},
ed(a,b){var s=A.n4(a,b)
return s},
n4(a,b){var s,r
if(Array.isArray(a))return A.q(a.slice(0),b.h("z<0>"))
s=A.q([],b.h("z<0>"))
for(r=J.aR(a);r.A();)B.a.j(s,r.gC(r))
return s},
lc(a,b,c){var s=J.aR(b)
if(!s.A())return a
if(c.length===0){do a+=A.m(s.gC(s))
while(s.A())}else{a+=A.m(s.gC(s))
for(;s.A();)a=a+c+A.m(s.gC(s))}return a},
l0(a,b){return new A.er(a,b.gdg(),b.gdl(),b.gdh())},
mN(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
mO(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
dS(a){if(a>=10)return""+a
return"0"+a},
bv(a){if(typeof a=="number"||A.cf(a)||a==null)return J.dF(a)
if(typeof a=="string")return JSON.stringify(a)
return A.nk(a)},
mQ(a,b){A.dy(a,"error",t.K)
A.dy(b,"stackTrace",t.l)
A.mP(a,b)},
dI(a){return new A.ck(a)},
aT(a,b){return new A.aS(!1,null,b,a)},
ky(a,b,c){return new A.aS(!0,a,b,c)},
nn(a){var s=null
return new A.c3(s,s,!1,s,s,a)},
l6(a,b){return new A.c3(null,null,!0,a,b,"Value not in range")},
l5(a,b,c,d,e){return new A.c3(b,c,!0,a,d,"Invalid value")},
R(a,b,c,d){return new A.e4(b,!0,a,d,"Index out of range")},
D(a){return new A.eV(a)},
k3(a){return new A.eT(a)},
L(a){return new A.bK(a)},
Z(a){return new A.dQ(a)},
dW(a){return new A.iK(a)},
n1(a,b,c){var s,r
if(A.kl(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.q([],t.s)
B.a.j($.ae,a)
try{A.os(a,s)}finally{if(0>=$.ae.length)return A.c($.ae,-1)
$.ae.pop()}r=A.lc(b,t.k.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
kS(a,b,c){var s,r
if(A.kl(a))return b+"..."+c
s=new A.cW(b)
B.a.j($.ae,a)
try{r=s
r.a=A.lc(r.a,a,", ")}finally{if(0>=$.ae.length)return A.c($.ae,-1)
$.ae.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
os(a,b){var s,r,q,p,o,n,m,l=a.gH(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.A())return
s=A.m(l.gC(l))
B.a.j(b,s)
k+=s.length+2;++j}if(!l.A()){if(j<=5)return
if(0>=b.length)return A.c(b,-1)
r=b.pop()
if(0>=b.length)return A.c(b,-1)
q=b.pop()}else{p=l.gC(l);++j
if(!l.A()){if(j<=4){B.a.j(b,A.m(p))
return}r=A.m(p)
if(0>=b.length)return A.c(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gC(l);++j
for(;l.A();p=o,o=n){n=l.gC(l);++j
if(j>100){while(!0){if(!(k>75&&j>3))break
if(0>=b.length)return A.c(b,-1)
k-=b.pop().length+2;--j}B.a.j(b,"...")
return}}q=A.m(p)
r=A.m(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
while(!0){if(!(k>80&&b.length>3))break
if(0>=b.length)return A.c(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)B.a.j(b,m)
B.a.j(b,q)
B.a.j(b,r)},
l1(a,b,c,d){var s=B.c.gv(a)
b=B.c.gv(b)
c=B.c.gv(c)
d=B.c.gv(d)
d=A.ld(A.cX(A.cX(A.cX(A.cX($.mm(),s),b),c),d))
return d},
hW:function hW(a,b){this.a=a
this.b=b},
cs:function cs(a,b){this.a=a
this.b=b},
iH:function iH(){},
G:function G(){},
ck:function ck(a){this.a=a},
b3:function b3(){},
aS:function aS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
c3:function c3(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
e4:function e4(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
er:function er(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eV:function eV(a){this.a=a},
eT:function eT(a){this.a=a},
bK:function bK(a){this.a=a},
dQ:function dQ(a){this.a=a},
eu:function eu(){},
cU:function cU(){},
iK:function iK(a){this.a=a},
hr:function hr(a){this.a=a},
f:function f(){},
K:function K(){},
v:function v(){},
fF:function fF(){},
cW:function cW(a){this.a=a},
oX(){var s=document
s.toString
return s},
jO(a,b){var s=document.createElement("canvas")
s.toString
if(b!=null)B.e.sO(s,b)
if(a!=null)B.e.sN(s,a)
return s},
nD(a,b){if(b.parentNode===a){a.removeChild(b).toString
return!0}return!1},
kI(a){t.aS.a(a)
return"wheel"},
jQ(a,b){var s,r,q,p,o=a===b
if(!o){s=b.tagName
s.toString
r=s==="HTML"}else r=!0
if(a==null||o){if(r)return new A.bf(0,0,t.J)
throw A.b(A.aT("Specified element is not a transitive offset parent of this element.",null))}q=A.jQ(a.offsetParent,b)
s=a.offsetLeft
s.toString
s=B.c.T(s)
p=a.offsetTop
p.toString
return new A.bf(q.a+s,q.b+B.c.T(p),t.J)},
mW(a){return A.kO(a,null,null,null).aX(new A.hz(),t.N)},
kO(a,b,c,d){var s,r,q=new A.J($.E,t.ao),p=new A.bN(q,t.bj),o=new XMLHttpRequest()
o.toString
B.S.dk(o,"GET",a,!0)
if(c!=null)o.responseType=c
s=t.dB
r=t.gZ
A.X(o,"load",s.a(new A.hA(o,p)),!1,r)
A.X(o,"error",s.a(p.gcW()),!1,r)
o.send()
return q},
n0(a){var s=new IntersectionObserver(A.aP(a,2))
s.toString
return s},
X(a,b,c,d,e){var s=c==null?null:A.ki(new A.iI(c),t.A)
s=new A.d5(a,b,s,!1,e.h("d5<0>"))
s.bz()
return s},
o9(a){var s
if(t.e5.b(a))return a
s=new A.iz([],[])
s.c=!0
return s.b0(a)},
ki(a,b){var s=$.E
if(s===B.d)return a
return s.cV(a,b)},
n:function n(){},
h9:function h9(){},
dG:function dG(){},
dH:function dH(){},
bs:function bs(){},
bt:function bt(){},
bu:function bu(){},
aG:function aG(){},
hj:function hj(){},
B:function B(){},
cr:function cr(){},
hk:function hk(){},
as:function as(){},
aW:function aW(){},
hl:function hl(){},
hm:function hm(){},
hn:function hn(){},
aX:function aX(){},
aY:function aY(){},
bV:function bV(){},
aZ:function aZ(){},
ho:function ho(){},
ct:function ct(){},
cu:function cu(){},
dU:function dU(){},
hp:function hp(){},
i:function i(){},
j:function j(){},
d:function d(){},
a_:function a_(){},
dX:function dX(){},
dY:function dY(){},
bW:function bW(){},
bX:function bX(){},
dZ:function dZ(){},
a8:function a8(){},
hy:function hy(){},
by:function by(){},
au:function au(){},
hz:function hz(){},
hA:function hA(a,b){this.a=a
this.b=b},
bz:function bz(){},
cy:function cy(){},
e3:function e3(){},
bA:function bA(){},
hC:function hC(){},
b1:function b1(){},
hM:function hM(){},
bI:function bI(){},
hS:function hS(){},
ef:function ef(){},
hT:function hT(a){this.a=a},
eg:function eg(){},
hU:function hU(a){this.a=a},
a9:function a9(){},
eh:function eh(){},
a0:function a0(){},
r:function r(){},
cO:function cO(){},
aa:function aa(){},
ew:function ew(){},
az:function az(){},
eB:function eB(){},
i4:function i4(a){this.a=a},
eD:function eD(){},
a2:function a2(){},
eG:function eG(){},
ab:function ab(){},
eH:function eH(){},
ac:function ac(){},
eJ:function eJ(){},
i8:function i8(a){this.a=a},
W:function W(){},
a3:function a3(){},
U:function U(){},
eM:function eM(){},
eN:function eN(){},
ij:function ij(){},
ad:function ad(){},
eP:function eP(){},
ik:function ik(){},
aL:function aL(){},
ir:function ir(){},
eX:function eX(){},
eY:function eY(){},
bj:function bj(){},
bk:function bk(){},
aM:function aM(){},
f3:function f3(){},
d3:function d3(){},
fg:function fg(){},
dc:function dc(){},
fB:function fB(){},
fG:function fG(){},
jR:function jR(a,b){this.a=a
this.$ti=b},
d4:function d4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
fb:function fb(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
d5:function d5(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
iI:function iI(a){this.a=a},
iJ:function iJ(a){this.a=a},
k6:function k6(a){this.$ti=a},
p:function p(){},
cw:function cw(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
f4:function f4(){},
f7:function f7(){},
f8:function f8(){},
f9:function f9(){},
fa:function fa(){},
fd:function fd(){},
fe:function fe(){},
fh:function fh(){},
fi:function fi(){},
fn:function fn(){},
fo:function fo(){},
fp:function fp(){},
fq:function fq(){},
fr:function fr(){},
fs:function fs(){},
fv:function fv(){},
fw:function fw(){},
fy:function fy(){},
di:function di(){},
dj:function dj(){},
fz:function fz(){},
fA:function fA(){},
fC:function fC(){},
fH:function fH(){},
fI:function fI(){},
dl:function dl(){},
dm:function dm(){},
fJ:function fJ(){},
fK:function fK(){},
fO:function fO(){},
fP:function fP(){},
fQ:function fQ(){},
fR:function fR(){},
fS:function fS(){},
fT:function fT(){},
fU:function fU(){},
fV:function fV(){},
fW:function fW(){},
fX:function fX(){},
lJ(a){var s,r,q
if(a==null)return a
if(typeof a=="string"||typeof a=="number"||A.cf(a))return a
if(A.m6(a))return A.bp(a)
s=Array.isArray(a)
s.toString
if(s){r=[]
q=0
while(!0){s=a.length
s.toString
if(!(q<s))break
r.push(A.lJ(a[q]));++q}return r}return a},
bp(a){var s,r,q,p,o,n
if(a==null)return null
s=A.cG(t.N,t.z)
r=Object.getOwnPropertyNames(a)
for(q=r.length,p=0;p<r.length;r.length===q||(0,A.T)(r),++p){o=r[p]
n=o
n.toString
s.l(0,n,A.lJ(a[o]))}return s},
lI(a){var s
if(a==null)return a
if(typeof a=="string"||typeof a=="number"||A.cf(a))return a
if(t.f.b(a))return A.m1(a)
if(t.j.b(a)){s=[]
J.h7(a,new A.ja(s))
a=s}return a},
m1(a){var s={}
J.h7(a,new A.jj(s))
return s},
m6(a){var s=Object.getPrototypeOf(a),r=s===Object.prototype
r.toString
if(!r){r=s===null
r.toString}else r=!0
return r},
iy:function iy(){},
iA:function iA(a,b){this.a=a
this.b=b},
ja:function ja(a){this.a=a},
jj:function jj(a){this.a=a},
iz:function iz(a,b){this.a=a
this.b=b
this.c=!1},
cD:function cD(){},
o3(a,b,c,d){var s,r,q
A.ka(b)
t.j.a(d)
if(b){s=[c]
B.a.P(s,d)
d=s}r=t.z
q=A.jY(J.kx(d,A.pa(),r),r)
return A.kb(A.kL(t.Z.a(a),q))},
n3(a){return new A.hF(new A.d9(t.dx)).$1(a)},
o7(a){return a},
kc(a,b,c){var s
try{if(Object.isExtensible(a)&&!Object.prototype.hasOwnProperty.call(a,b)){Object.defineProperty(a,b,{value:c})
return!0}}catch(s){}return!1},
lP(a,b){if(Object.prototype.hasOwnProperty.call(a,b))return a[b]
return null},
kb(a){if(a==null||typeof a=="string"||typeof a=="number"||A.cf(a))return a
if(a instanceof A.b0)return a.a
if(A.m5(a))return a
if(t.Q.b(a))return a
if(a instanceof A.cs)return A.a1(a)
if(t.Z.b(a))return A.lO(a,"$dart_jsFunction",new A.jc())
return A.lO(a,"_$dart_jsObject",new A.jd($.kr()))},
lO(a,b,c){var s=A.lP(a,b)
if(s==null){s=c.$1(a)
A.kc(a,b,s)}return s},
lK(a){if(a==null||typeof a=="string"||typeof a=="number"||typeof a=="boolean")return a
else if(a instanceof Object&&A.m5(a))return a
else if(a instanceof Object&&t.Q.b(a))return a
else if(a instanceof Date)return A.kH(A.t(a.getTime()),!1)
else if(a.constructor===$.kr())return a.o
else return A.kh(a)},
kh(a){if(typeof a=="function")return A.kd(a,$.h2(),new A.jf())
if(a instanceof Array)return A.kd(a,$.kp(),new A.jg())
return A.kd(a,$.kp(),new A.jh())},
kd(a,b,c){var s=A.lP(a,b)
if(s==null||!(a instanceof Object)){s=c.$1(a)
A.kc(a,b,s)}return s},
hF:function hF(a){this.a=a},
jc:function jc(){},
jd:function jd(a){this.a=a},
jf:function jf(){},
jg:function jg(){},
jh:function jh(){},
b0:function b0(a){this.a=a},
cB:function cB(a){this.a=a},
bE:function bE(a,b){this.a=a
this.$ti=b},
ca:function ca(){},
o8(a){var s,r=a.$dart_jsFunction
if(r!=null)return r
s=function(b,c){return function(){return b(c,Array.prototype.slice.apply(arguments))}}(A.o4,a)
s[$.h2()]=a
a.$dart_jsFunction=s
return s},
o4(a,b){t.j.a(b)
return A.kL(t.Z.a(a),b)},
lX(a,b){if(typeof a=="function")return a
else return b.a(A.o8(a))},
pk(a,b){var s=new A.J($.E,b.h("J<0>")),r=new A.bN(s,b.h("bN<0>"))
a.then(A.aP(new A.jy(r,b),1),A.aP(new A.jz(r),1))
return s},
jy:function jy(a,b){this.a=a
this.b=b},
jz:function jz(a){this.a=a},
hX:function hX(a){this.a=a},
iX:function iX(){},
bf:function bf(a,b,c){this.a=a
this.b=b
this.$ti=c},
ai:function ai(){},
eb:function eb(){},
ak:function ak(){},
es:function es(){},
i_:function i_(){},
eK:function eK(){},
ao:function ao(){},
eQ:function eQ(){},
fl:function fl(){},
fm:function fm(){},
ft:function ft(){},
fu:function fu(){},
fD:function fD(){},
fE:function fE(){},
fL:function fL(){},
fM:function fM(){},
hb:function hb(){},
dJ:function dJ(){},
hc:function hc(a){this.a=a},
dK:function dK(){},
bb:function bb(){},
et:function et(){},
f2:function f2(){},
dL:function dL(){},
aV:function aV(){},
e0:function e0(){},
ex:function ex(){},
eA:function eA(){},
cT:function cT(){},
c4:function c4(){},
eF:function eF(){},
eO:function eO(){},
eS:function eS(){},
h8:function h8(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=0
_.a=null},
im:function im(){},
e1:function e1(a){var _=this
_.a=a
_.f=_.e=_.d=_.c=_.b=0
_.x=_.w=_.r=null},
hs:function hs(){},
cn:function cn(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jZ(a){var s=new A.ax(A.q([0,0,0,0,0,0,0,0,0],t.n))
s.c6(a)
return s},
ee(){return new A.be(A.q([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t.n))},
hZ(){return new A.aI(0,0)},
l2(a,b,c){return new A.ay(a,b,c)},
nl(a,b,c,d){return new A.cR(new A.aI(c,d))},
cS(){return new A.aA(0,0,0,1)},
c2(a,b){var s=b/2,r=Math.sin(s),q=a.a,p=a.b,o=a.c,n=Math.sqrt(q*q+p*p+o*o)
if(n===0)return A.cS()
return new A.aA(q/n*r,p/n*r,o/n*r,Math.cos(s))},
nm(a){var s=new A.aA(0,0,0,0)
s.c7(a)
return s},
l4(a){var s=a.a,r=a.b,q=a.c,p=a.d
return A.ey(a,1/Math.sqrt(s*s+r*r+q*q+p*p))},
ey(a,b){return new A.aA(a.a*b,a.b*b,a.c*b,a.d*b)},
ez(a,b,c){var s,r,q,p=a.a,o=b.a,n=a.b,m=b.b,l=a.c,k=b.c,j=a.d,i=b.d,h=p*o+n*m+l*k+j*i
if(h<0){h=-h
s=A.ey(b,-1)}else s=b
if(h>0.9995)return A.l4(a.t(0,A.ey(new A.aA(o-p,m-n,k-l,i-j),c)))
r=Math.acos(h)
q=Math.sin(r)
p=Math.sin((1-c)*r)
o=Math.sin(c*r)
return A.l4(A.ey(a,p/q).t(0,A.ey(s,o/q)))},
k1(){return new A.aB(A.q([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t.n))},
lg(a){var s,r,q,p,o,n,m,l,k=a.a,j=k.length
if(0>=j)return A.c(k,0)
s=k[0]
if(1>=j)return A.c(k,1)
r=k[1]
if(2>=j)return A.c(k,2)
q=k[2]
if(3>=j)return A.c(k,3)
p=k[3]
if(4>=j)return A.c(k,4)
o=k[4]
if(5>=j)return A.c(k,5)
n=k[5]
if(6>=j)return A.c(k,6)
m=k[6]
if(7>=j)return A.c(k,7)
l=k[7]
if(8>=j)return A.c(k,8)
return new A.aB(A.q([s,r,q,0,p,o,n,0,m,l,k[8],0,0,0,0,1],t.n))},
li(a,b,c){return new A.P(a,b,c)},
lj(){return new A.P(0,0,0)},
it(a){var s=new A.P(0,0,0),r=a.a,q=a.b,p=a.c,o=Math.sqrt(r*r+q*q+p*p)
s.a=a.a/o
s.b=a.b/o
s.c=a.c/o
return s},
is(a,b){var s=a.b,r=b.c,q=a.c,p=b.b,o=b.a,n=a.a
return new A.P(s*r-q*p,q*o-n*r,n*p-s*o)},
ht:function ht(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ax:function ax(a){this.a=a},
hP:function hP(a){this.a=a},
be:function be(a){this.a=a},
aI:function aI(a,b){this.a=a
this.b=b},
ay:function ay(a,b,c){this.a=a
this.b=b
this.c=c},
cR:function cR(a){this.b=a},
aA:function aA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
i2:function i2(a){this.a=a},
il:function il(a){this.a=a},
aB:function aB(a){this.a=a},
P:function P(a,b,c){this.a=a
this.b=b
this.c=c},
hw:function hw(){},
hx:function hx(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
bZ:function bZ(){},
a7:function a7(a){this.a=a},
cC:function cC(a){this.a=a},
dV:function dV(a){this.a=a},
f_:function f_(a){this.a=a},
bh:function bh(a){this.a=a},
cb:function cb(a,b){this.a=a
this.b=b},
hH:function hH(a,b){this.a=a
this.b=b},
hI:function hI(a){this.a=a},
hJ:function hJ(a){this.a=a},
aN:function aN(a,b){this.a=a
this.b=b},
ei:function ei(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=!1},
cc:function cc(a,b){this.a=a
this.b=b},
eE:function eE(a,b){this.a=a
this.b=b
this.c=null},
kz(a,b,c,d,e){return new A.aU(a,b,c,d,e)},
he(){return new A.hd()},
jP(){return new A.hh(0,0,0,1,1)},
kK(a){return new A.hq(a)},
iv(a){return new A.iu(a)},
kY(a){return new A.hQ(a)},
cH(a){return new A.hR(a)},
k0(a){return new A.i5(a)},
lm(){return new A.bM(A.q([new A.aU("aPosition",0,3,12,0)],t.U))},
k4(){return new A.bM(A.q([new A.aU("aPositionMapping",0,2,8,0)],t.U))},
nx(){var s,r,q,p=$.k5
if(p==null)try{p=A.jO(null,null)
s=A.ec(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],t.N,t.z)
r=B.e.av(p,"webgl",s)
if(r==null)r=B.e.av(p,"experimental-webgl",s)
t.eV.a(r)
$.k5=!0
p=!0}catch(q){$.k5=!1
p=!1}p.toString
return p},
nw(a,b){var s,r,q,p,o,n,m=b.getSupportedExtensions()
if(m==null)return
s=A.q([],t.s)
for(r=a.e,q=r.length,p=J.aE(m),o=0;o<r.length;r.length===q||(0,A.T)(r),++o){n=r[o]
if(!p.bI(m,n))B.a.j(s,n)}if(s.length!==0)throw A.b(A.dW("Invalid webgl extensions\n"+A.m(s)))},
kG(){return"    precision highp float;\n    \n    attribute vec3 aPosition;\n\n    uniform mat4 uPvwlTransform;\n\n    void main(void)\n    {\n      gl_Position = uPvwlTransform * vec4(aPosition, 1.0);\n    }\n  "},
kF(){return"    precision highp float;\n\n    uniform vec4 uColor;\n\n    void main(void)\n    {\n      gl_FragColor = uColor;\n    }\n  "},
l_(){return"    #version 300 es\n    precision highp float;\n\n    in vec2 aPositionMapping;\n    out vec2 vMapping;\n\n    uniform mat3 uPvwlTransform;\n\n    void main()\n    {\n      vMapping = aPositionMapping;\n\n      vec3 position = uPvwlTransform * vec3(aPositionMapping, 1.0);\n      gl_Position = vec4(position.xy, 0.0, 1.0);\n    }\n  "},
kZ(a){A.t(a)
return"    #version 300 es\n    precision highp float;\n\n    in vec2 vMapping;\n    out vec4 outColor;\n\n    uniform sampler2D uColorSampler;\n    uniform sampler2D uVelocitySampler;\n    uniform vec4 uViewBound;\n    uniform float uStep;\n\n    void main()\n    {\n      vec4 color = texture(uColorSampler, vMapping);\n      vec2 velocity = texture(uVelocitySampler, vMapping).xy;\n      velocity = (velocity * 2.0) - 1.0;\n      velocity *= uViewBound.zw;\n      \n      for (int i = 1; i <= "+a+"; i ++)\n      {\n          float distance = float(i) * uStep;\n          color += texture(uColorSampler, vMapping + velocity * distance);\n          color += texture(uColorSampler, vMapping - velocity * distance);\n      }\n\n      outColor = color * "+A.m(1/(a*2+1))+";\n      //outColor = vec4(velocity, 0, 1.0);\n    }\n  "},
lb(){return"    precision highp float;\n    \n    attribute vec3 aPosition;\n    attribute vec3 aNormal;\n\n    uniform mat4 uPvTransform;\n    uniform mat4 uWlTransform;\n\n    varying vec4 vWorldPosition;\n    varying vec4 vWorldNormal;\n\n    void main(void)\n    {\n      vWorldPosition = uWlTransform * vec4(aPosition, 1.0);\n      vWorldNormal = normalize(uWlTransform * vec4(aNormal, 0.0));\n      \n      gl_Position = uPvTransform * vWorldPosition;\n    }\n  "},
la(){return"    precision highp float;\n\n        float LambertianFactor(\n      in vec4 polygonNormal,\n      in vec4 lightDirection)\n    {\n      return max(dot(polygonNormal, lightDirection), 0.0);\n    }\n  \n\n    uniform vec4 uLightPosition;\n    uniform vec4 uLightColor;\n\n    varying vec4 vWorldPosition;\n    varying vec4 vWorldNormal;\n\n    void main(void)\n    {\n      vec4 worldLightDirection = normalize(uLightPosition - vWorldPosition);\n      float diffuseFactor = LambertianFactor(vWorldNormal, worldLightDirection);\n      gl_FragColor = uLightColor * diffuseFactor;\n    }\n  "},
lf(){return"    precision highp float;\n    \n    attribute vec2 aPositionMapping;\n\n    uniform mat3 uPvwlTransform;\n\n    varying vec2 vMapping;\n\n    void main(void)\n    {\n      vMapping = aPositionMapping;\n\n      vec3 position = uPvwlTransform * vec3(aPositionMapping, 1.0);\n      gl_Position = vec4(position.xy, 0.0, 1.0);\n    }\n  "},
le(){return"    precision highp float;\n\n    uniform sampler2D uSampler;\n\n    varying vec2 vMapping;\n\n    void main(void)\n    {\n      gl_FragColor = texture2D(uSampler, vMapping);\n    }\n  "},
ll(){return"    #version 300 es\n    precision highp float;\n    in vec3 aPosition;\n    out vec4 vViewportPosition;\n    out vec4 vViewportPreviousPosition;\n\n    uniform mat4 uPvwlTransform;\n    uniform mat4 uTpvwlTransform;\n    uniform mat4 uPreviousTpvwlTransform;\n\n    void main()\n    {\n      vec4 position = vec4(aPosition, 1.0);\n      vViewportPosition = uTpvwlTransform * position;\n      vViewportPreviousPosition = uPreviousTpvwlTransform * position;\n\n      gl_Position = uPvwlTransform * position;\n    }\n  "},
lk(){return"    #version 300 es\n    precision highp float;\n    in vec4 vViewportPosition;\n    in vec4 vViewportPreviousPosition;\n    out vec4 outColor;\n\n    uniform float uViewScale;\n\n    void main()\n    {\n      vec2 velocity = (vViewportPosition.xy / vViewportPosition.w)\n        - (vViewportPreviousPosition.xy / vViewportPreviousPosition.w);\n      velocity *= uViewScale;\n      velocity /= max(length(velocity), 1.0);\n      velocity = velocity * 0.5 + 0.5;\n\n      outColor = vec4(velocity, 0, 0);\n    }\n  "},
mT(a,b,c){var s,r,q,p,o,n,m,l,k,j,i
$.mV=$.mU=!1
B.a.F($.A)
B.a.F($.bx)
B.a.F($.e2)
B.a.F($.jV)
$.jU.F(0)
s=(1+Math.sqrt(5))*0.5
A.ag(-1,s,0)
A.ag(1,s,0)
r=-s
A.ag(-1,r,0)
A.ag(1,r,0)
A.ag(0,-1,s)
A.ag(0,1,s)
A.ag(0,-1,r)
A.ag(0,1,r)
A.ag(s,0,-1)
A.ag(s,0,1)
A.ag(r,0,-1)
A.ag(r,0,1)
B.a.j($.A,new A.H(0,11,5))
B.a.j($.A,new A.H(0,5,1))
B.a.j($.A,new A.H(0,1,7))
B.a.j($.A,new A.H(0,7,10))
B.a.j($.A,new A.H(0,10,11))
B.a.j($.A,new A.H(1,5,9))
B.a.j($.A,new A.H(5,11,4))
B.a.j($.A,new A.H(11,10,2))
B.a.j($.A,new A.H(10,7,6))
B.a.j($.A,new A.H(7,1,8))
B.a.j($.A,new A.H(3,9,4))
B.a.j($.A,new A.H(3,4,2))
B.a.j($.A,new A.H(3,2,6))
B.a.j($.A,new A.H(3,6,8))
B.a.j($.A,new A.H(3,8,9))
B.a.j($.A,new A.H(4,9,5))
B.a.j($.A,new A.H(2,4,11))
B.a.j($.A,new A.H(6,2,10))
B.a.j($.A,new A.H(8,6,7))
B.a.j($.A,new A.H(9,8,1))
for(q=0;q<a;++q){B.a.F($.cx)
for(r=$.A.length,p=0;p<$.A.length;$.A.length===r||(0,A.T)($.A),++p){o=$.A[p]
n=o.a
m=o.b
l=A.jT(n,m)
k=o.c
j=A.jT(m,k)
i=A.jT(k,n)
B.a.j($.cx,new A.H(n,l,i))
B.a.j($.cx,new A.H(m,j,l))
B.a.j($.cx,new A.H(k,i,j))
B.a.j($.cx,new A.H(l,j,i))}B.a.F($.A)
B.a.P($.A,$.cx)}for(r=$.A.length,p=0;p<$.A.length;$.A.length===r||(0,A.T)($.A),++p){o=$.A[p]
B.a.j($.e2,o.a)
B.a.j($.e2,o.b)
B.a.j($.e2,o.c)}$.kM=new Uint16Array(A.bP($.e2))
$.kN=new Float32Array(A.bP($.jV))},
ag(a,b,c){var s,r,q,p,o
B.a.j($.bx,new A.ay(a,b,c))
s=Math.sqrt(a*a+b*b+c*c)
r=a/s
q=b/s
p=c/s
o=Math.atan2(-p,r)
o+=o<0?6.283185307179586:0
Math.acos(q)
A.it(new A.P(-Math.sin(o),0,-Math.cos(o)))
B.a.P($.jV,A.q([r,q,p],t.n))
return $.bx.length-1},
jT(a,b){var s,r,q,p=A.m(Math.min(a,b))+"-"+A.m(Math.max(a,b)),o=$.jU.i(0,p)
if(o!=null)return o
s=$.bx.length
if(!(a>=0&&a<s))return A.c($.bx,a)
r=$.bx[a]
if(!(b>=0&&b<s))return A.c($.bx,b)
q=r.t(0,$.bx[b]).n(0,0.5)
o=A.ag(q.a,q.b,q.c)
$.jU.l(0,p,o)
return o},
hg:function hg(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aU:function aU(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hd:function hd(){},
hh:function hh(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e},
hB:function hB(a,b,c){this.a=a
this.b=b
this.c=c},
eW:function eW(a){this.b=a},
hf:function hf(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
dT:function dT(){},
e_:function e_(){},
cm:function cm(){var _=this
_.b=_.a=0
_.f=_.e=_.d=_.c=null},
c1:function c1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null},
bJ:function bJ(){var _=this
_.d=_.c=_.b=_.a=null},
ii:function ii(){this.f=this.e=this.d=null},
iq:function iq(){},
hq:function hq(a){this.a=a
this.c=this.b=null},
iu:function iu(a){this.a=a
this.c=this.b=null},
hQ:function hQ(a){this.a=a
this.c=this.b=null},
hR:function hR(a){this.a=a
this.c=this.b=null},
i5:function i5(a){this.a=a
this.c=this.b=null},
bM:function bM(a){this.a=a},
i3:function i3(a,b,c){this.b=a
this.c=b
this.e=c},
ix:function ix(){this.a=null},
hi:function hi(a,b,c,d){var _=this
_.c=a
_.d=b
_.e=c
_.f=d},
hV:function hV(a,b,c,d,e,f,g){var _=this
_.c=a
_.d=b
_.e=c
_.f=d
_.r=e
_.w=f
_.x=g
_.y=4},
i7:function i7(a,b,c,d,e,f){var _=this
_.c=a
_.d=b
_.e=c
_.f=d
_.r=e
_.w=f},
ih:function ih(a,b,c,d){var _=this
_.c=a
_.d=b
_.e=c
_.f=d},
iw:function iw(a,b,c,d,e,f){var _=this
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
eZ:function eZ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=!1
_.f=null},
pc(){A.mS(A.q([A.mW("media/gltf/invaders.gltf"),A.kO("media/gltf/invaders.bin",null,"arraybuffer",null)],t.aJ),t.K).aX(new A.ju(),t.P)},
kV(){var s,r,q,p=$.kq()
p.l(0,"Report",null)
p.l(0,"Kill",null)
for(p=$.a6.length,s=0;s<$.a6.length;$.a6.length===p||(0,A.T)($.a6),++s)$.a6[s].S(0)
B.a.F($.a6)
$.kg=-1
A.kJ()
p=$.jF()
p.children.toString
r=$.dB()
q=r.a
A.nD(p,q)
r.f.unobserve(q)
r.f.disconnect()
r=$.jD()
q=window
q.toString
p=r.x
p.toString
B.j.bm(q)
q.cancelAnimationFrame(p)
r.r.a5(0)
r.w.a5(0)
$.ks().G()
$.kt().G()
$.kv().G()},
nq(){var s=A.ec(["status",$.kg,"fps",$.jD().gd7(),"size","288"],t.N,t.K)
return A.kh(A.n3(s))},
l7(){var s,r,q=$.dB(),p=q.a,o=document,n=o.documentElement
n.toString
B.c.T(A.jQ(p,n).a)
o=o.documentElement
o.toString
B.c.T(A.jQ(p,o).b)
o=p.clientWidth
o.toString
n=window.devicePixelRatio
n.toString
n=B.c.T(o*n)
o=p.clientHeight
o.toString
s=window.devicePixelRatio
s.toString
q.b=new A.cR(new A.aI(n,B.c.T(o*s)))
B.e.sO(p,n)
B.e.sN(p,A.t(q.b.b.b))
q.f.takeRecords().toString
q=q.b.b
r=q.b/q.a
q=$.dA().b
p=q.a*0.5
q=q.b*0.5
n=t.n
$.oM=new A.be(A.q([p,0,0,0,0,q,0,0,0,0,1,0,p,q,0,1],n))
$.oE=new A.ax(A.q([2*r,0,0,0,2,0,-r,-1,1],n))},
n6(a){var s,r,q,p
t.cE.a(a)
s=$.jF().getBoundingClientRect()
s.left.toString
s.right.toString
r=s.width
r.toString
s=s.height
s.toString
q=a.a
p=new A.aI(q.a/r-0.5,q.b/s-0.5).n(0,new A.aI(2,2))
$.h4().e=A.c2(new A.P(1,0,0),p.b).n(0,A.c2(new A.P(0,1,0),-p.a))},
n7(a){var s
t.as.a(a)
s=$.h4()
s.f=B.c.bF(0.001,0,1)
s.d=A.ez(A.cS(),a.a,100)},
n8(a){var s,r,q,p
A.du(a)
for(s=$.ap.length,r=0;r<s;++r){q=$.ap[r]
p=q.c-=a
if(p<=0){q.d=!q.d
q.c=1}}},
n9(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
A.du(a)
s=$.h4()
r=1-s.f
s.b=s.b.n(0,r)
s.c=s.c.n(0,r)
s.d=A.ez(A.cS(),s.d,r)
s.e=A.ez(A.cS(),s.e,r)
s.c=s.c.t(0,s.b.n(0,a))
q=s.a
p=q.gW()
o=s.c.n(0,a)
q.sW(p.t(0,new A.ay(o.a,o.b,o.c)))
o=s.e
s.e=A.ez(o,o.n(0,s.d),a)
o=s.a.a
p=o.length
if(0>=p)return A.c(o,0)
q=o[0]
if(1>=p)return A.c(o,1)
n=o[1]
if(2>=p)return A.c(o,2)
m=o[2]
if(4>=p)return A.c(o,4)
l=o[4]
if(5>=p)return A.c(o,5)
k=o[5]
if(6>=p)return A.c(o,6)
j=o[6]
if(8>=p)return A.c(o,8)
i=o[8]
if(9>=p)return A.c(o,9)
h=o[9]
if(10>=p)return A.c(o,10)
p=t.n
g=A.nm(new A.ax(A.q([q,n,m,l,k,j,i,h,o[10]],p)))
o=s.a
o.toString
o.sbT(A.jZ(A.ez(g,g.n(0,s.e),a)))
$.oy=$.jJ()
s=$.h3()
s.aB()
$.oJ=$.mt().n(0,s.a)
A.no()
A.np(a)
s=$.jG()
o=s.c.a
o.toString
B.b.L(o,36160,s.d)
o=$.bT()
o.sam(A.he())
o.sao(null)
h=$.dA()
o.ab(h)
o.aA(A.jP())
i=$.jH()
j=i.d
k=j.a.a
k.toString
B.b.a9(k,j.b)
p=A.q([2,0,0,0,2,0,-1,-1,1],p)
j=$.dC().f.e
j.toString
k=$.dD().f.e
k.toString
q=i.e
n=t.r
n.a(p)
m=q.b.a
m.toString
B.b.bY(m,q.c,!1,p)
q=i.f
p=q.b.a
p.toString
B.b.aZ(p,q.c,j)
q=i.r
p=q.b.a
p.toString
B.b.aZ(p,q.c,k)
q=i.w
h=h.b
p=h.a
h=h.b
h=n.a(A.q([p,h,1/p,1/h],t.a))
p=q.b.a
p.toString
B.b.au(p,q.c,h)
q=i.x
i=i.y
p=q.b.a
p.toString
B.b.bX(p,q.c,30/i)
if(7>=$.F.length)return A.c($.F,7)
q=$.F[7]
q.V()
q.aa()
q.U()
q=s.c.a
q.toString
B.b.L(q,36160,null)
o.a.flush()
o.sam(A.he())
o.sao(null)
o.ab($.dB().b)
q=$.jI()
p=q.d
m=p.a.a
m.toString
B.b.a9(m,p.b)
p=$.mp()
s=s.f.e
s.toString
m=q.e
l=m.b.a
l.toString
B.b.aZ(l,m.c,s)
s=q.f
p=n.a(p.a)
n=s.b.a
n.toString
B.b.bY(n,s.c,!1,p)
if(7>=$.F.length)return A.c($.F,7)
s=$.F[7]
s.V()
s.aa()
s.U()
o.a.flush()},
mX(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=t.n
$.oa=new A.aB(A.q([45,0,0,0,0,45,0,0,0,0,45,0,0,0,0,1],d))
s=[B.w,B.x,B.y]
for(r=0;r<9;){++r
q=r*0.3141592653589793
p=B.c.d4(Math.cos(q-1.5707963267948966)*12)
o=6.283185307179586/p
for(n=0;n<p;++n){m=n*o
l=Math.sin(q)*Math.cos(m)
k=Math.cos(q)
j=Math.sin(q)*Math.sin(m)
i=new A.P(l,k,j)
h=$.mo()
g=h.dj(3)
if(!(g>=0&&g<3))return A.c(s,g)
g=s[g].a
if(!(g<9))return A.c(B.h,g)
g=new A.e5(B.h[g],new A.aB(A.q([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],d)))
j=A.q([1,0,0,0,0,1,0,0,0,0,1,0,l*40,k*40,j*40,1],d)
f=new A.P(0,0,0)
f.cc(A.is(new A.P(0,1,0),i))
e=A.is(i,f)
g.b=new A.aB(j).n(0,new A.aB(A.q([f.a,f.b,f.c,0,e.a,e.b,e.c,0,i.a,i.b,i.c,0,0,0,0,1],d))).n(0,A.lg(A.jZ(A.c2(new A.P(0,0,1),(h.di()*2-1)*3.141592653589793*0.5)))).n(0,A.lg(A.jZ(A.c2(new A.P(1,0,0),0.6283185307179586)))).n(0,new A.aB(A.q([1,0,0,0,0,1,0,0,0,0,1,0,0,-3,0,1],d)))
B.a.j($.ap,g)}}},
kP(){var s,r,q,p,o,n,m=$.bT(),l=$.dB(),k=A.q([],t.s)
m.c5(l.a,new A.i3(!0,!0,k))
l=$.jB()
l.c=m
k=m.a.createBuffer()
k.toString
l.d=k
k=m.a.createBuffer()
k.toString
l.e=k
k=l.c.a
k.toString
B.b.al(k,34963,l.d)
k=l.c.a
k.toString
B.b.al(k,34962,l.e)
l.c.a.bufferData(34963,l.a,35044)
l.c.a.bufferData(34962,l.b,35044)
for(l=$.F.length,s=0;s<l;++s)$.F[s].e=m
l=$.dC()
k=$.dA()
l.aC(m,k,!0)
r=$.dD()
r.aC(m,k,!0)
q=$.jG()
q.D(m,k)
k=$.jI()
p=k.d
o=A.lf()
n=A.le()
A.I(o)
A.I(n)
p.a=m
p.b=p.a1(o,n,k.c)
k.e.D(m,p)
k.f.D(m,p)
p=$.jC()
k=p.d
n=A.kG()
o=A.kF()
A.I(n)
A.I(o)
k.a=m
k.b=k.a1(n,o,p.c)
p.e.D(m,k)
p.f.D(m,k)
k=$.jE()
p=k.d
o=A.lb()
n=A.la()
A.I(o)
A.I(n)
p.a=m
p.b=p.a1(o,n,k.c)
k.r.D(m,p)
k.w.D(m,p)
k.e.D(m,p)
k.f.D(m,p)
p=$.jK()
k=p.d
n=A.ll()
o=A.lk()
A.I(n)
A.I(o)
k.a=m
k.b=k.a1(n,o,p.c)
p.e.D(m,k)
p.f.D(m,k)
p.r.D(m,k)
p.w.D(m,k)
k=$.jH()
k.y=8
p=k.d
o=A.l_()
n=A.kZ(8)
A.I(o)
A.I(n)
p.a=m
p.b=p.a1(o,n,k.c)
k.e.D(m,p)
k.f.D(m,p)
k.r.D(m,p)
k.w.D(m,p)
k.x.D(m,p)
l.f.a_(1)
r=r.f
r.a_(2)
r.b8(9728)
q.f.a_(3)},
kJ(){var s,r,q
for(s=$.F.length,r=0;r<s;++r)$.F[r].e=null
B.a.F($.F)
s=$.jI()
s.d.G()
q=s.e
q.b=q.c=null
s=s.f
s.b=s.c=null
s=$.jC()
s.d.G()
q=s.e
q.b=q.c=null
s=s.f
s.b=s.c=null
s=$.jE()
s.d.G()
q=s.r
q.b=q.c=null
q=s.w
q.b=q.c=null
q=s.e
q.b=q.c=null
s=s.f
s.b=s.c=null
s=$.jK()
s.d.G()
q=s.e
q.b=q.c=null
q=s.f
q.b=q.c=null
q=s.r
q.b=q.c=null
s=s.w
s.b=s.c=null
s=$.jH()
s.d.G()
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
$.dC().G()
$.dD().G()
$.jG().G()
s=$.jB()
q=s.c.a
q.toString
B.b.al(q,34963,null)
q=s.c.a
q.toString
B.b.al(q,34962,null)
q=s.c.a
q.toString
B.b.bJ(q,s.d)
q=s.c.a
q.toString
B.b.bJ(q,s.e)
s.c=null
$.bT().a=null},
no(){var s,r,q,p,o,n,m,l=$.dC(),k=l.c.a
k.toString
B.b.L(k,36160,l.d)
l=$.bT()
l.sam(A.he())
l.sao(new A.dT())
l.ab($.dA())
l.aA(A.jP())
l=$.jC()
k=l.d
s=k.a.a
s.toString
B.b.a9(s,k.b)
k=$.h3()
s=k.a.n(0,$.h5())
r=l.e
q=t.r
p=q.a(new A.cn(0.1,0.1,0.1,1).gbS())
o=r.b.a
o.toString
B.b.au(o,r.c,p)
l=l.f
s=q.a(s.a)
q=l.b.a
q.toString
B.b.X(q,l.c,!1,s)
if(8>=$.F.length)return A.c($.F,8)
l=$.F[8]
l.V()
l.aa()
l.U()
l=$.jE()
s=l.d
r=s.a.a
r.toString
B.b.a9(r,s.b)
k=k.a
l.c9($.mn(),k)
for(k=$.ap.length,n=0;n<$.ap.length;$.ap.length===k||(0,A.T)($.ap),++n){m=$.ap[n]
l.c8(new A.cn(1,1,1,1),m.b)
s=m.a
if(m.d){s=s.a+1
if(!(s<9))return A.c(B.h,s)
s=B.h[s]}s=s.a
if(!(s<$.F.length))return A.c($.F,s)
s=$.F[s]
s.V()
r=s.a
s.e.a.drawElements(s.d,r.a,r.c,r.b)
s.U()}l=$.dC().c.a
l.toString
B.b.L(l,36160,null)
$.bT().a.flush()},
np(a){var s,r,q,p,o,n=$.dD(),m=n.c.a
m.toString
B.b.L(m,36160,n.d)
n=$.bT()
n.sam(A.he())
n.sao(new A.dT())
n.ab($.dA())
n.aA(A.jP())
n=$.jK()
m=n.d
s=m.a.a
s.toString
B.b.a9(s,m.b)
n.ca(a,0.016666666666666666,30,2.4)
m=$.h3()
s=m.a.n(0,$.h5())
r=$.jJ().n(0,$.h5())
n.b5($.ku().n(0,$.h5()),s,r)
if(8>=$.F.length)return A.c($.F,8)
r=$.F[8]
r.V()
r.aa()
r.U()
for(s=$.ap.length,q=0;q<$.ap.length;$.ap.length===s||(0,A.T)($.ap),++q){p=$.ap[q]
r=m.a.n(0,p.b)
o=$.jJ().n(0,p.b)
n.b5($.ku().n(0,p.b),r,o)
r=p.a
if(p.d){r=r.a+1
if(!(r<9))return A.c(B.h,r)
r=B.h[r]}r=r.a
if(!(r<$.F.length))return A.c($.F,r)
r=$.F[r]
r.V()
o=r.a
r.e.a.drawElements(r.d,o.a,o.c,o.b)
r.U()}n=$.dD().c.a
n.toString
B.b.L(n,36160,null)
$.bT().a.flush()},
e5:function e5(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=!1},
ju:function ju(){},
jp:function jp(){},
jq:function jq(){},
jr:function jr(){},
js:function js(){},
jt:function jt(){},
al:function al(a,b){this.a=a
this.b=b},
m5(a){return t.fK.b(a)||t.A.b(a)||t.dz.b(a)||t.gb.b(a)||t.G.b(a)||t.g4.b(a)||t.g2.b(a)}},B={}
var w=[A,J,B]
var $={}
A.jW.prototype={}
J.bY.prototype={
J(a,b){return a===b},
gv(a){return A.cQ(a)},
m(a){return"Instance of '"+A.i1(a)+"'"},
bO(a,b){throw A.b(A.l0(a,t.B.a(b)))},
gE(a){return A.bR(A.ke(this))}}
J.e6.prototype={
m(a){return String(a)},
gv(a){return a?519018:218159},
gE(a){return A.bR(t.y)},
$iC:1,
$iji:1}
J.cA.prototype={
J(a,b){return null==b},
m(a){return"null"},
gv(a){return 0},
$iC:1,
$iK:1}
J.a.prototype={}
J.bF.prototype={
gv(a){return 0},
m(a){return String(a)}}
J.ev.prototype={}
J.bL.prototype={}
J.aH.prototype={
m(a){var s=a[$.h2()]
if(s==null)return this.c2(a)
return"JavaScript function for "+J.dF(s)},
$ibw:1}
J.bC.prototype={
gv(a){return 0},
m(a){return String(a)}}
J.bD.prototype={
gv(a){return 0},
m(a){return String(a)}}
J.z.prototype={
j(a,b){A.aO(a).c.a(b)
if(!!a.fixed$length)A.bq(A.D("add"))
a.push(b)},
P(a,b){var s
A.aO(a).h("f<1>").a(b)
if(!!a.fixed$length)A.bq(A.D("addAll"))
if(Array.isArray(b)){this.cq(a,b)
return}for(s=J.aR(b);s.A();)a.push(s.gC(s))},
cq(a,b){var s,r
t.b.a(b)
s=b.length
if(s===0)return
if(a===b)throw A.b(A.Z(a))
for(r=0;r<s;++r)a.push(b[r])},
F(a){if(!!a.fixed$length)A.bq(A.D("clear"))
a.length=0},
q(a,b){var s,r
A.aO(a).h("~(1)").a(b)
s=a.length
for(r=0;r<s;++r){b.$1(a[r])
if(a.length!==s)throw A.b(A.Z(a))}},
aq(a,b,c){var s=A.aO(a)
return new A.b2(a,s.u(c).h("1(2)").a(b),s.h("@<1>").u(c).h("b2<1,2>"))},
d5(a,b,c,d){var s,r,q
d.a(b)
A.aO(a).u(d).h("1(1,2)").a(c)
s=a.length
for(r=b,q=0;q<s;++q){r=c.$2(r,a[q])
if(a.length!==s)throw A.b(A.Z(a))}return r},
p(a,b){if(!(b<a.length))return A.c(a,b)
return a[b]},
gB(a){if(a.length>0)return a[0]
throw A.b(A.kR())},
bI(a,b){var s
for(s=0;s<a.length;++s)if(J.h6(a[s],b))return!0
return!1},
m(a){return A.kS(a,"[","]")},
gH(a){return new J.br(a,a.length,A.aO(a).h("br<1>"))},
gv(a){return A.cQ(a)},
gk(a){return a.length},
i(a,b){A.t(b)
if(!(b>=0&&b<a.length))throw A.b(A.h0(a,b))
return a[b]},
l(a,b,c){A.aO(a).c.a(c)
if(!!a.immutable$list)A.bq(A.D("indexed set"))
if(!(b>=0&&b<a.length))throw A.b(A.h0(a,b))
a[b]=c},
t(a,b){var s=A.aO(a)
s.h("l<1>").a(b)
s=A.ed(a,s.c)
this.P(s,b)
return s},
$ik:1,
$if:1,
$il:1}
J.hD.prototype={}
J.br.prototype={
gC(a){var s=this.d
return s==null?this.$ti.c.a(s):s},
A(){var s,r=this,q=r.a,p=q.length
if(r.b!==p){q=A.T(q)
throw A.b(q)}s=r.c
if(s>=p){r.sbl(null)
return!1}r.sbl(q[s]);++r.c
return!0},
sbl(a){this.d=this.$ti.h("1?").a(a)},
$iah:1}
J.bB.prototype={
aR(a,b){var s
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=B.f.gaT(b)
if(this.gaT(a)===s)return 0
if(this.gaT(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gaT(a){return a===0?1/a<0:a<0},
d4(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw A.b(A.D(""+a+".floor()"))},
T(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.b(A.D(""+a+".round()"))},
bF(a,b,c){if(B.f.aR(b,c)>0)throw A.b(A.lZ(b))
if(this.aR(a,b)<0)return b
if(this.aR(a,c)>0)return c
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
b1(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
cM(a,b){return(a|0)===a?a/b|0:this.cN(a,b)},
cN(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.b(A.D("Result of truncating division is "+A.m(s)+": "+A.m(a)+" ~/ "+b))},
by(a,b){var s
if(a>0)s=this.cK(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
cK(a,b){return b>31?0:a>>>b},
gE(a){return A.bR(t.H)},
$iw:1,
$iM:1}
J.cz.prototype={
gE(a){return A.bR(t.S)},
$iC:1,
$ih:1}
J.e8.prototype={
gE(a){return A.bR(t.i)},
$iC:1}
J.bd.prototype={
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
gE(a){return A.bR(t.N)},
gk(a){return a.length},
i(a,b){A.t(b)
if(!(b>=0&&b<a.length))throw A.b(A.h0(a,b))
return a[b]},
$iC:1,
$io:1}
A.cE.prototype={
m(a){return"LateInitializationError: "+this.a}}
A.jw.prototype={
$0(){var s=new A.J($.E,t.ck)
s.ac(null)
return s},
$S:15}
A.i6.prototype={}
A.k.prototype={}
A.aj.prototype={
gH(a){var s=this
return new A.bG(s,s.gk(s),A.x(s).h("bG<aj.E>"))},
q(a,b){var s,r,q=this
A.x(q).h("~(aj.E)").a(b)
s=q.gk(q)
for(r=0;r<s;++r){b.$1(q.p(0,r))
if(s!==q.gk(q))throw A.b(A.Z(q))}},
aq(a,b,c){var s=A.x(this)
return new A.b2(this,s.u(c).h("1(aj.E)").a(b),s.h("@<aj.E>").u(c).h("b2<1,2>"))}}
A.bG.prototype={
gC(a){var s=this.d
return s==null?this.$ti.c.a(s):s},
A(){var s,r=this,q=r.a,p=J.aE(q),o=p.gk(q)
if(r.b!==o)throw A.b(A.Z(q))
s=r.c
if(s>=o){r.sa2(null)
return!1}r.sa2(p.p(q,s));++r.c
return!0},
sa2(a){this.d=this.$ti.h("1?").a(a)},
$iah:1}
A.bH.prototype={
gH(a){var s=A.x(this)
return new A.aw(J.aR(this.a),this.b,s.h("@<1>").u(s.z[1]).h("aw<1,2>"))},
gk(a){return J.dE(this.a)}}
A.cv.prototype={$ik:1}
A.aw.prototype={
A(){var s=this,r=s.b
if(r.A()){s.sa2(s.c.$1(r.gC(r)))
return!0}s.sa2(null)
return!1},
gC(a){var s=this.a
return s==null?this.$ti.z[1].a(s):s},
sa2(a){this.a=this.$ti.h("2?").a(a)},
$iah:1}
A.b2.prototype={
gk(a){return J.dE(this.a)},
p(a,b){return this.b.$1(J.mz(this.a,b))}}
A.V.prototype={}
A.c5.prototype={
gv(a){var s=this._hashCode
if(s!=null)return s
s=664597*B.p.gv(this.a)&536870911
this._hashCode=s
return s},
m(a){return'Symbol("'+this.a+'")'},
J(a,b){if(b==null)return!1
return b instanceof A.c5&&this.a===b.a},
$ic6:1}
A.cp.prototype={}
A.co.prototype={
m(a){return A.hN(this)},
$iN:1}
A.cq.prototype={
gk(a){return this.b.length},
gbr(){var s=this.$keys
if(s==null){s=Object.keys(this.a)
this.$keys=s}return s},
a6(a,b){if(typeof b!="string")return!1
if("__proto__"===b)return!1
return this.a.hasOwnProperty(b)},
i(a,b){if(!this.a6(0,b))return null
return this.b[this.a[b]]},
q(a,b){var s,r,q,p
this.$ti.h("~(1,2)").a(b)
s=this.gbr()
r=this.b
for(q=s.length,p=0;p<q;++p)b.$2(s[p],r[p])},
gI(a){return new A.da(this.gbr(),this.$ti.h("da<1>"))}}
A.da.prototype={
gk(a){return this.a.length},
gH(a){var s=this.a
return new A.db(s,s.length,this.$ti.h("db<1>"))}}
A.db.prototype={
gC(a){var s=this.d
return s==null?this.$ti.c.a(s):s},
A(){var s=this,r=s.c
if(r>=s.b){s.sa3(null)
return!1}s.sa3(s.a[r]);++s.c
return!0},
sa3(a){this.d=this.$ti.h("1?").a(a)},
$iah:1}
A.e7.prototype={
gdg(){var s=this.a
return s},
gdl(){var s,r,q,p,o=this
if(o.c===1)return B.q
s=o.d
r=s.length-o.e.length-o.f
if(r===0)return B.q
q=[]
for(p=0;p<r;++p){if(!(p<s.length))return A.c(s,p)
q.push(s[p])}q.fixed$length=Array
q.immutable$list=Array
return q},
gdh(){var s,r,q,p,o,n,m,l,k=this
if(k.c!==0)return B.r
s=k.e
r=s.length
q=k.d
p=q.length-r-k.f
if(r===0)return B.r
o=new A.b_(t.eo)
for(n=0;n<r;++n){if(!(n<s.length))return A.c(s,n)
m=s[n]
l=p+n
if(!(l>=0&&l<q.length))return A.c(q,l)
o.l(0,new A.c5(m),q[l])}return new A.cp(o,t.gF)},
$ikQ:1}
A.i0.prototype={
$2(a,b){var s
A.I(a)
s=this.a
s.b=s.b+"$"+a
B.a.j(this.b,a)
B.a.j(this.c,b);++s.a},
$S:2}
A.io.prototype={
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
A.cP.prototype={
m(a){return"Null check operator used on a null value"}}
A.e9.prototype={
m(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.eU.prototype={
m(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.hY.prototype={
m(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.dk.prototype={
m(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$ian:1}
A.bc.prototype={
m(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.m9(r==null?"unknown":r)+"'"},
$ibw:1,
gds(){return this},
$C:"$1",
$R:1,
$D:null}
A.dN.prototype={$C:"$0",$R:0}
A.dO.prototype={$C:"$2",$R:2}
A.eL.prototype={}
A.eI.prototype={
m(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.m9(s)+"'"}}
A.bU.prototype={
J(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.bU))return!1
return this.$_target===b.$_target&&this.a===b.a},
gv(a){return(A.jx(this.a)^A.cQ(this.$_target))>>>0},
m(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.i1(this.a)+"'")}}
A.f5.prototype={
m(a){return"Reading static variable '"+this.a+"' during its initialization"}}
A.eC.prototype={
m(a){return"RuntimeError: "+this.a}}
A.f0.prototype={
m(a){return"Assertion failed: "+A.bv(this.a)}}
A.j_.prototype={}
A.b_.prototype={
gk(a){return this.a},
gI(a){return new A.av(this,A.x(this).h("av<1>"))},
gb_(a){var s=A.x(this)
return A.kX(new A.av(this,s.h("av<1>")),new A.hE(this),s.c,s.z[1])},
a6(a,b){var s=this.b
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
return q}else return this.dc(b)},
dc(a){var s,r,q=this.d
if(q==null)return null
s=q[this.bM(a)]
r=this.bN(s,a)
if(r<0)return null
return s[r].b},
l(a,b,c){var s,r,q,p,o,n,m=this,l=A.x(m)
l.c.a(b)
l.z[1].a(c)
if(typeof b=="string"){s=m.b
m.bc(s==null?m.b=m.aI():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=m.c
m.bc(r==null?m.c=m.aI():r,b,c)}else{q=m.d
if(q==null)q=m.d=m.aI()
p=m.bM(b)
o=q[p]
if(o==null)q[p]=[m.aJ(b,c)]
else{n=m.bN(o,b)
if(n>=0)o[n].b=c
else o.push(m.aJ(b,c))}}},
F(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.bu()}},
q(a,b){var s,r,q=this
A.x(q).h("~(1,2)").a(b)
s=q.e
r=q.r
for(;s!=null;){b.$2(s.a,s.b)
if(r!==q.r)throw A.b(A.Z(q))
s=s.c}},
bc(a,b,c){var s,r=A.x(this)
r.c.a(b)
r.z[1].a(c)
s=a[b]
if(s==null)a[b]=this.aJ(b,c)
else s.b=c},
bu(){this.r=this.r+1&1073741823},
aJ(a,b){var s=this,r=A.x(s),q=new A.hK(r.c.a(a),r.z[1].a(b))
if(s.e==null)s.e=s.f=q
else s.f=s.f.c=q;++s.a
s.bu()
return q},
bM(a){return J.jM(a)&1073741823},
bN(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.h6(a[r].a,b))return r
return-1},
m(a){return A.hN(this)},
aI(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
$ikW:1}
A.hE.prototype={
$1(a){var s=this.a,r=A.x(s)
s=s.i(0,r.c.a(a))
return s==null?r.z[1].a(s):s},
$S(){return A.x(this.a).h("2(1)")}}
A.hK.prototype={}
A.av.prototype={
gk(a){return this.a.a},
gH(a){var s=this.a,r=new A.cF(s,s.r,this.$ti.h("cF<1>"))
r.c=s.e
return r},
q(a,b){var s,r,q
this.$ti.h("~(1)").a(b)
s=this.a
r=s.e
q=s.r
for(;r!=null;){b.$1(r.a)
if(q!==s.r)throw A.b(A.Z(s))
r=r.c}}}
A.cF.prototype={
gC(a){return this.d},
A(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.b(A.Z(q))
s=r.c
if(s==null){r.sa3(null)
return!1}else{r.sa3(s.a)
r.c=s.c
return!0}},
sa3(a){this.d=this.$ti.h("1?").a(a)},
$iah:1}
A.jl.prototype={
$1(a){return this.a(a)},
$S:7}
A.jm.prototype={
$2(a,b){return this.a(a,b)},
$S:38}
A.jn.prototype={
$1(a){return this.a(A.I(a))},
$S:19}
A.iG.prototype={
ai(){var s=this.b
if(s===this)throw A.b(new A.cE("Local '"+this.a+"' has not been initialized."))
return s}}
A.ej.prototype={
gE(a){return B.a7},
cU(a,b,c){A.j9(a,b,c)
return c==null?new Uint8Array(a,b):new Uint8Array(a,b,c)},
cT(a){return this.cU(a,0,null)},
$iC:1}
A.cL.prototype={$iO:1}
A.ek.prototype={
gE(a){return B.a8},
$iC:1}
A.c0.prototype={
gk(a){return a.length},
$iu:1}
A.cJ.prototype={
i(a,b){A.t(b)
A.b6(b,a,a.length)
return a[b]},
l(a,b,c){A.du(c)
A.b6(b,a,a.length)
a[b]=c},
$ik:1,
$if:1,
$il:1}
A.cK.prototype={
l(a,b,c){A.t(c)
A.b6(b,a,a.length)
a[b]=c},
$ik:1,
$if:1,
$il:1}
A.cI.prototype={
gE(a){return B.a9},
$iC:1,
$ijS:1}
A.el.prototype={
gE(a){return B.aa},
$iC:1}
A.em.prototype={
gE(a){return B.ab},
i(a,b){A.t(b)
A.b6(b,a,a.length)
return a[b]},
$iC:1}
A.en.prototype={
gE(a){return B.ac},
i(a,b){A.t(b)
A.b6(b,a,a.length)
return a[b]},
$iC:1}
A.eo.prototype={
gE(a){return B.ad},
i(a,b){A.t(b)
A.b6(b,a,a.length)
return a[b]},
$iC:1}
A.cM.prototype={
gE(a){return B.af},
i(a,b){A.t(b)
A.b6(b,a,a.length)
return a[b]},
$iC:1,
$ik2:1}
A.ep.prototype={
gE(a){return B.ag},
i(a,b){A.t(b)
A.b6(b,a,a.length)
return a[b]},
$iC:1}
A.cN.prototype={
gE(a){return B.ah},
gk(a){return a.length},
i(a,b){A.t(b)
A.b6(b,a,a.length)
return a[b]},
$iC:1}
A.eq.prototype={
gE(a){return B.ai},
gk(a){return a.length},
i(a,b){A.t(b)
A.b6(b,a,a.length)
return a[b]},
$iC:1,
$ieR:1}
A.dd.prototype={}
A.de.prototype={}
A.df.prototype={}
A.dg.prototype={}
A.am.prototype={
h(a){return A.j5(v.typeUniverse,this,a)},
u(a){return A.nX(v.typeUniverse,this,a)}}
A.ff.prototype={}
A.j4.prototype={
m(a){return A.a5(this.a,null)}}
A.fc.prototype={
m(a){return this.a}}
A.dn.prototype={$ib3:1}
A.iC.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:12}
A.iB.prototype={
$1(a){var s,r
this.a.a=t.M.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:42}
A.iD.prototype={
$0(){this.a.$0()},
$S:8}
A.iE.prototype={
$0(){this.a.$0()},
$S:8}
A.j2.prototype={
cp(a,b){if(self.setTimeout!=null)self.setTimeout(A.aP(new A.j3(this,b),0),a)
else throw A.b(A.D("`setTimeout()` not found."))}}
A.j3.prototype={
$0(){this.b.$0()},
$S:0}
A.cl.prototype={
m(a){return A.m(this.a)},
$iG:1,
gY(){return this.b}}
A.a4.prototype={}
A.aD.prototype={
aL(){},
aM(){},
sa4(a){this.ch=this.$ti.h("aD<1>?").a(a)},
sah(a){this.CW=this.$ti.h("aD<1>?").a(a)}}
A.cZ.prototype={
gbt(){return this.c<4},
cH(a){var s,r
A.x(this).h("aD<1>").a(a)
s=a.CW
r=a.ch
if(s==null)this.sbn(r)
else s.sa4(r)
if(r==null)this.sbs(s)
else r.sah(s)
a.sah(a)
a.sa4(a)},
cL(a,b,c,d){var s,r,q,p,o,n,m=this,l=A.x(m)
l.h("~(1)?").a(a)
t.Y.a(c)
if((m.c&4)!==0){l=new A.c8($.E,l.h("c8<1>"))
A.kn(l.gcC())
if(c!=null)l.saK(t.M.a(c))
return l}s=$.E
r=d?1:0
q=A.lo(s,a,l.c)
A.nC(s,b)
p=c==null?A.oS():c
l=l.h("aD<1>")
o=new A.aD(m,q,t.M.a(p),s,r,l)
o.sah(o)
o.sa4(o)
l.a(o)
o.ay=m.c&1
n=m.e
m.sbs(o)
o.sa4(null)
o.sah(n)
if(n==null)m.sbn(o)
else n.sa4(o)
if(m.d==m.e)A.lV(m.a)
return o},
cF(a){var s=this,r=A.x(s)
a=r.h("aD<1>").a(r.h("aK<1>").a(a))
if(a.ch===a)return null
r=a.ay
if((r&2)!==0)a.ay=r|4
else{s.cH(a)
if((s.c&2)===0&&s.d==null)s.cu()}return null},
bb(){if((this.c&4)!==0)return new A.bK("Cannot add new events after calling close")
return new A.bK("Cannot add new events while doing an addStream")},
j(a,b){var s=this
A.x(s).c.a(b)
if(!s.gbt())throw A.b(s.bb())
s.aP(b)},
a5(a){var s,r,q=this
if((q.c&4)!==0){s=q.r
s.toString
return s}if(!q.gbt())throw A.b(q.bb())
q.c|=4
r=q.r
if(r==null)r=q.r=new A.J($.E,t.cd)
q.aQ()
return r},
cu(){if((this.c&4)!==0){var s=this.r
if((s.a&30)===0)s.ac(null)}A.lV(this.b)},
sbn(a){this.d=A.x(this).h("aD<1>?").a(a)},
sbs(a){this.e=A.x(this).h("aD<1>?").a(a)},
$icV:1,
$ilz:1,
$ibm:1}
A.aC.prototype={
aP(a){var s,r=this.$ti
r.c.a(a)
for(s=this.d,r=r.h("d2<1>");s!=null;s=s.ch)s.bd(new A.d2(a,r))},
aQ(){var s=this.d
if(s!=null)for(;s!=null;s=s.ch)s.bd(B.P)
else this.r.ac(null)}}
A.hv.prototype={
$2(a,b){var s,r,q=this
t.K.a(a)
t.l.a(b)
s=q.a
r=--s.b
if(s.a!=null){s.a=null
if(s.b===0||q.c)q.d.K(a,b)
else{q.e.b=a
q.f.b=b}}else if(r===0&&!q.c)q.d.K(q.e.ai(),q.f.ai())},
$S:4}
A.hu.prototype={
$1(a){var s,r,q=this,p=q.w
p.a(a)
r=q.a;--r.b
s=r.a
if(s!=null){J.mv(s,q.b,a)
if(r.b===0)q.c.ae(A.jY(s,p))}else if(r.b===0&&!q.e)q.c.K(q.f.ai(),q.r.ai())},
$S(){return this.w.h("K(0)")}}
A.d_.prototype={
bH(a,b){var s
A.dy(a,"error",t.K)
s=this.a
if((s.a&30)!==0)throw A.b(A.L("Future already completed"))
b=A.jN(a)
s.be(a,b)},
an(a){return this.bH(a,null)}}
A.bN.prototype={
bG(a,b){var s,r=this.$ti
r.h("1/?").a(b)
s=this.a
if((s.a&30)!==0)throw A.b(A.L("Future already completed"))
s.ac(r.h("1/").a(b))}}
A.bO.prototype={
df(a){if((this.c&15)!==6)return!0
return this.b.b.aW(t.al.a(this.d),a.a,t.y,t.K)},
da(a){var s,r=this,q=r.e,p=null,o=t.z,n=t.K,m=a.a,l=r.b.b
if(t.C.b(q))p=l.dm(q,m,a.b,o,n,t.l)
else p=l.aW(t.v.a(q),m,o,n)
try{o=r.$ti.h("2/").a(p)
return o}catch(s){if(t.eK.b(A.aQ(s))){if((r.c&1)!==0)throw A.b(A.aT("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.b(A.aT("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.J.prototype={
bx(a){this.a=this.a&1|4
this.c=a},
aY(a,b,c){var s,r,q,p=this.$ti
p.u(c).h("1/(2)").a(a)
s=$.E
if(s===B.d){if(b!=null&&!t.C.b(b)&&!t.v.b(b))throw A.b(A.ky(b,"onError",u.c))}else{c.h("@<0/>").u(p.c).h("1(2)").a(a)
if(b!=null)b=A.oA(b,s)}r=new A.J(s,c.h("J<0>"))
q=b==null?1:3
this.aD(new A.bO(r,q,a,b,p.h("@<1>").u(c).h("bO<1,2>")))
return r},
aX(a,b){return this.aY(a,null,b)},
cJ(a){this.a=this.a&1|16
this.c=a},
ad(a){this.a=a.a&30|this.a&1
this.c=a.c},
aD(a){var s,r=this,q=r.a
if(q<=3){a.a=t.F.a(r.c)
r.c=a}else{if((q&4)!==0){s=t.c.a(r.c)
if((s.a&24)===0){s.aD(a)
return}r.ad(s)}A.bQ(null,null,r.b,t.M.a(new A.iL(r,a)))}},
aO(a){var s,r,q,p,o,n,m=this,l={}
l.a=a
if(a==null)return
s=m.a
if(s<=3){r=t.F.a(m.c)
m.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){n=t.c.a(m.c)
if((n.a&24)===0){n.aO(a)
return}m.ad(n)}l.a=m.ak(a)
A.bQ(null,null,m.b,t.M.a(new A.iS(l,m)))}},
aj(){var s=t.F.a(this.c)
this.c=null
return this.ak(s)},
ak(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
cv(a){var s,r,q,p=this
p.a^=2
try{a.aY(new A.iP(p),new A.iQ(p),t.P)}catch(q){s=A.aQ(q)
r=A.b9(q)
A.kn(new A.iR(p,s,r))}},
bi(a){var s,r=this,q=r.$ti
q.h("1/").a(a)
s=r.aj()
q.c.a(a)
r.a=8
r.c=a
A.c9(r,s)},
ae(a){var s,r=this
r.$ti.c.a(a)
s=r.aj()
r.a=8
r.c=a
A.c9(r,s)},
K(a,b){var s
t.K.a(a)
t.l.a(b)
s=this.aj()
this.cJ(A.ha(a,b))
A.c9(this,s)},
ac(a){var s=this.$ti
s.h("1/").a(a)
if(s.h("at<1>").b(a)){this.cw(a)
return}this.ct(a)},
ct(a){var s=this
s.$ti.c.a(a)
s.a^=2
A.bQ(null,null,s.b,t.M.a(new A.iN(s,a)))},
cw(a){var s=this.$ti
s.h("at<1>").a(a)
if(s.b(a)){A.nE(a,this)
return}this.cv(a)},
be(a,b){t.l.a(b)
this.a^=2
A.bQ(null,null,this.b,t.M.a(new A.iM(this,a,b)))},
$iat:1}
A.iL.prototype={
$0(){A.c9(this.a,this.b)},
$S:0}
A.iS.prototype={
$0(){A.c9(this.b,this.a.a)},
$S:0}
A.iP.prototype={
$1(a){var s,r,q,p=this.a
p.a^=2
try{p.ae(p.$ti.c.a(a))}catch(q){s=A.aQ(q)
r=A.b9(q)
p.K(s,r)}},
$S:12}
A.iQ.prototype={
$2(a,b){this.a.K(t.K.a(a),t.l.a(b))},
$S:31}
A.iR.prototype={
$0(){this.a.K(this.b,this.c)},
$S:0}
A.iO.prototype={
$0(){A.lr(this.a.a,this.b)},
$S:0}
A.iN.prototype={
$0(){this.a.ae(this.b)},
$S:0}
A.iM.prototype={
$0(){this.a.K(this.b,this.c)},
$S:0}
A.iV.prototype={
$0(){var s,r,q,p,o,n,m=this,l=null
try{q=m.a.a
l=q.b.b.bU(t.O.a(q.d),t.z)}catch(p){s=A.aQ(p)
r=A.b9(p)
q=m.c&&t.t.a(m.b.a.c).a===s
o=m.a
if(q)o.c=t.t.a(m.b.a.c)
else o.c=A.ha(s,r)
o.b=!0
return}if(l instanceof A.J&&(l.a&24)!==0){if((l.a&16)!==0){q=m.a
q.c=t.t.a(l.c)
q.b=!0}return}if(l instanceof A.J){n=m.b.a
q=m.a
q.c=l.aX(new A.iW(n),t.z)
q.b=!1}},
$S:0}
A.iW.prototype={
$1(a){return this.a},
$S:21}
A.iU.prototype={
$0(){var s,r,q,p,o,n,m,l
try{q=this.a
p=q.a
o=p.$ti
n=o.c
m=n.a(this.b)
q.c=p.b.b.aW(o.h("2/(1)").a(p.d),m,o.h("2/"),n)}catch(l){s=A.aQ(l)
r=A.b9(l)
q=this.a
q.c=A.ha(s,r)
q.b=!0}},
$S:0}
A.iT.prototype={
$0(){var s,r,q,p,o,n,m=this
try{s=t.t.a(m.a.a.c)
p=m.b
if(p.a.df(s)&&p.a.e!=null){p.c=p.a.da(s)
p.b=!1}}catch(o){r=A.aQ(o)
q=A.b9(o)
p=t.t.a(m.a.a.c)
n=m.b
if(p.a===r)n.c=p
else n.c=A.ha(r,q)
n.b=!0}},
$S:0}
A.f1.prototype={}
A.bi.prototype={
q(a,b){var s,r
A.x(this).h("~(1)").a(b)
s=new A.J($.E,t.c)
r=this.ap(null,!0,new A.ic(s),s.gbj())
r.aU(new A.id(this,b,r,s))
return s},
gk(a){var s={},r=new A.J($.E,t.fJ)
s.a=0
this.ap(new A.ie(s,this),!0,new A.ig(s,r),r.gbj())
return r}}
A.ic.prototype={
$0(){this.a.bi(null)},
$S:0}
A.id.prototype={
$1(a){var s=this
A.oC(new A.ia(s.b,A.x(s.a).c.a(a)),new A.ib(),A.o6(s.c,s.d),t.p)},
$S(){return A.x(this.a).h("~(1)")}}
A.ia.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
A.ib.prototype={
$1(a){},
$S:13}
A.ie.prototype={
$1(a){A.x(this.b).c.a(a);++this.a.a},
$S(){return A.x(this.b).h("~(1)")}}
A.ig.prototype={
$0(){this.b.bi(this.a.a)},
$S:0}
A.d0.prototype={
gv(a){return(A.cQ(this.a)^892482866)>>>0},
J(a,b){if(b==null)return!1
if(this===b)return!0
return b instanceof A.a4&&b.a===this.a}}
A.d1.prototype={
bv(){return this.w.cF(this)},
aL(){A.x(this.w).h("aK<1>").a(this)},
aM(){A.x(this.w).h("aK<1>").a(this)}}
A.c7.prototype={
aU(a){var s=A.x(this)
this.scs(A.lo(this.d,s.h("~(1)?").a(a),s.c))},
S(a){var s=this.e&=4294967279
if((s&8)===0)this.bf()
s=$.jA()
return s},
bf(){var s,r=this,q=r.e|=8
if((q&64)!==0){s=r.r
if(s.a===1)s.a=3}if((q&32)===0)r.saN(null)
r.f=r.bv()},
aL(){},
aM(){},
bv(){return null},
bd(a){var s,r,q=this,p=q.r
if(p==null){p=new A.dh(A.x(q).h("dh<1>"))
q.saN(p)}s=p.c
if(s==null)p.b=p.c=a
else{s.sa8(0,a)
p.c=a}r=q.e
if((r&64)===0){r|=64
q.e=r
if(r<128)p.b3(q)}},
aP(a){var s,r=this,q=A.x(r).c
q.a(a)
s=r.e
r.e=s|32
r.d.bV(r.a,a,q)
r.e&=4294967263
r.cz((s&4)!==0)},
aQ(){this.bf()
this.e|=16
new A.iF(this).$0()},
cz(a){var s,r,q=this,p=q.e
if((p&64)!==0&&q.r.c==null){p=q.e=p&4294967231
if((p&4)!==0)if(p<128){s=q.r
s=s==null?null:s.c==null
s=s!==!1}else s=!1
else s=!1
if(s){p&=4294967291
q.e=p}}for(;!0;a=r){if((p&8)!==0){q.saN(null)
return}r=(p&4)!==0
if(a===r)break
q.e=p^32
if(r)q.aL()
else q.aM()
p=q.e&=4294967263}if((p&64)!==0&&p<128)q.r.b3(q)},
scs(a){this.a=A.x(this).h("~(1)").a(a)},
saN(a){this.r=A.x(this).h("dh<1>?").a(a)},
$iaK:1,
$ibm:1}
A.iF.prototype={
$0(){var s=this.a,r=s.e
if((r&16)===0)return
s.e=r|42
s.d.aV(s.c)
s.e&=4294967263},
$S:0}
A.cd.prototype={
ap(a,b,c,d){var s=this.$ti
s.h("~(1)?").a(a)
t.Y.a(c)
return this.a.cL(s.h("~(1)?").a(a),d,c,b===!0)},
a7(a){return this.ap(a,null,null,null)}}
A.bl.prototype={
sa8(a,b){this.a=t.ev.a(b)},
ga8(a){return this.a}}
A.d2.prototype={
bP(a){this.$ti.h("bm<1>").a(a).aP(this.b)}}
A.f6.prototype={
bP(a){a.aQ()},
ga8(a){return null},
sa8(a,b){throw A.b(A.L("No events after a done."))},
$ibl:1}
A.dh.prototype={
b3(a){var s,r=this
r.$ti.h("bm<1>").a(a)
s=r.a
if(s===1)return
if(s>=1){r.a=1
return}A.kn(new A.iZ(r,a))
r.a=1}}
A.iZ.prototype={
$0(){var s,r,q,p=this.a,o=p.a
p.a=0
if(o===3)return
s=p.$ti.h("bm<1>").a(this.b)
r=p.b
q=r.ga8(r)
p.b=q
if(q==null)p.c=null
r.bP(s)},
$S:0}
A.c8.prototype={
aU(a){this.$ti.h("~(1)?").a(a)},
S(a){this.a=-1
this.saK(null)
return $.jA()},
cD(){var s,r,q,p=this,o=p.a-1
if(o===0){p.a=-1
s=p.c
if(s!=null){r=s
q=!0}else{r=null
q=!1}if(q){p.saK(null)
p.b.aV(r)}}else p.a=o},
saK(a){this.c=t.Y.a(a)},
$iaK:1}
A.j8.prototype={
$0(){return this.a.K(this.b,this.c)},
$S:0}
A.j7.prototype={
$2(a,b){A.o5(this.a,this.b,a,t.l.a(b))},
$S:4}
A.dt.prototype={$iln:1}
A.je.prototype={
$0(){A.mQ(this.a,this.b)},
$S:0}
A.fx.prototype={
aV(a){var s,r,q
t.M.a(a)
try{if(B.d===$.E){a.$0()
return}A.lS(null,null,this,a,t.p)}catch(q){s=A.aQ(q)
r=A.b9(q)
A.h_(t.K.a(s),t.l.a(r))}},
bV(a,b,c){var s,r,q
c.h("~(0)").a(a)
c.a(b)
try{if(B.d===$.E){a.$1(b)
return}A.lT(null,null,this,a,b,t.p,c)}catch(q){s=A.aQ(q)
r=A.b9(q)
A.h_(t.K.a(s),t.l.a(r))}},
bC(a){return new A.j0(this,t.M.a(a))},
cV(a,b){return new A.j1(this,b.h("~(0)").a(a),b)},
i(a,b){return null},
bU(a,b){b.h("0()").a(a)
if($.E===B.d)return a.$0()
return A.lS(null,null,this,a,b)},
aW(a,b,c,d){c.h("@<0>").u(d).h("1(2)").a(a)
d.a(b)
if($.E===B.d)return a.$1(b)
return A.lT(null,null,this,a,b,c,d)},
dm(a,b,c,d,e,f){d.h("@<0>").u(e).u(f).h("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.E===B.d)return a.$2(b,c)
return A.oB(null,null,this,a,b,c,d,e,f)},
bQ(a,b,c,d){return b.h("@<0>").u(c).u(d).h("1(2,3)").a(a)}}
A.j0.prototype={
$0(){return this.a.aV(this.b)},
$S:0}
A.j1.prototype={
$1(a){var s=this.c
return this.a.bV(this.b,s.a(a),s)},
$S(){return this.c.h("~(0)")}}
A.d6.prototype={
gk(a){return this.a},
gI(a){return new A.d7(this,this.$ti.h("d7<1>"))},
a6(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
return s==null?!1:s[b]!=null}else if(typeof b=="number"&&(b&1073741823)===b){r=this.c
return r==null?!1:r[b]!=null}else return this.cA(b)},
cA(a){var s=this.d
if(s==null)return!1
return this.aH(this.bo(s,a),a)>=0},
i(a,b){var s,r,q
if(typeof b=="string"&&b!=="__proto__"){s=this.b
r=s==null?null:A.ls(s,b)
return r}else if(typeof b=="number"&&(b&1073741823)===b){q=this.c
r=q==null?null:A.ls(q,b)
return r}else return this.cB(0,b)},
cB(a,b){var s,r,q=this.d
if(q==null)return null
s=this.bo(q,b)
r=this.aH(s,b)
return r<0?null:s[r+1]},
l(a,b,c){var s,r,q,p,o=this,n=o.$ti
n.c.a(b)
n.z[1].a(c)
s=o.d
if(s==null)s=o.d=A.nF()
r=A.jx(b)&1073741823
q=s[r]
if(q==null){A.lt(s,r,[b,c]);++o.a
o.e=null}else{p=o.aH(q,b)
if(p>=0)q[p+1]=c
else{q.push(b,c);++o.a
o.e=null}}},
q(a,b){var s,r,q,p,o,n,m=this,l=m.$ti
l.h("~(1,2)").a(b)
s=m.aE()
for(r=s.length,q=l.c,l=l.z[1],p=0;p<r;++p){o=s[p]
q.a(o)
n=m.i(0,o)
b.$2(o,n==null?l.a(n):n)
if(s!==m.e)throw A.b(A.Z(m))}},
aE(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.e
if(h!=null)return h
h=A.hL(i.a,null,!1,t.z)
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
bo(a,b){return a[A.jx(b)&1073741823]}}
A.d9.prototype={
aH(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=0;r<s;r+=2){q=a[r]
if(q==null?b==null:q===b)return r}return-1}}
A.d7.prototype={
gk(a){return this.a.a},
gH(a){var s=this.a
return new A.d8(s,s.aE(),this.$ti.h("d8<1>"))},
q(a,b){var s,r,q,p
this.$ti.h("~(1)").a(b)
s=this.a
r=s.aE()
for(q=r.length,p=0;p<q;++p){b.$1(r[p])
if(r!==s.e)throw A.b(A.Z(s))}}}
A.d8.prototype={
gC(a){var s=this.d
return s==null?this.$ti.c.a(s):s},
A(){var s=this,r=s.b,q=s.c,p=s.a
if(r!==p.e)throw A.b(A.Z(p))
else if(q>=r.length){s.sbh(null)
return!1}else{s.sbh(r[q])
s.c=q+1
return!0}},
sbh(a){this.d=this.$ti.h("1?").a(a)},
$iah:1}
A.e.prototype={
gH(a){return new A.bG(a,this.gk(a),A.ar(a).h("bG<e.E>"))},
p(a,b){return this.i(a,b)},
q(a,b){var s,r
A.ar(a).h("~(e.E)").a(b)
s=this.gk(a)
for(r=0;r<s;++r){b.$1(this.i(a,r))
if(s!==this.gk(a))throw A.b(A.Z(a))}},
gdd(a){return this.gk(a)===0},
gB(a){if(this.gk(a)===0)throw A.b(A.kR())
return this.i(a,0)},
bI(a,b){var s,r=this.gk(a)
for(s=0;s<r;++s){if(J.h6(this.i(a,s),b))return!0
if(r!==this.gk(a))throw A.b(A.Z(a))}return!1},
aq(a,b,c){var s=A.ar(a)
return new A.b2(a,s.u(c).h("1(e.E)").a(b),s.h("@<e.E>").u(c).h("b2<1,2>"))},
ar(a){var s,r,q,p,o=this
if(o.gdd(a)){s=J.kT(0,A.ar(a).h("e.E"))
return s}r=o.i(a,0)
q=A.hL(o.gk(a),r,!0,A.ar(a).h("e.E"))
for(p=1;p<o.gk(a);++p)B.a.l(q,p,o.i(a,p))
return q},
t(a,b){var s=A.ar(a)
s.h("l<e.E>").a(b)
s=A.ed(a,s.h("e.E"))
B.a.P(s,b)
return s},
m(a){return A.kS(a,"[","]")}}
A.y.prototype={
q(a,b){var s,r,q,p=A.ar(a)
p.h("~(y.K,y.V)").a(b)
for(s=J.aR(this.gI(a)),p=p.h("y.V");s.A();){r=s.gC(s)
q=this.i(a,r)
b.$2(r,q==null?p.a(q):q)}},
gk(a){return J.dE(this.gI(a))},
m(a){return A.hN(a)},
$iN:1}
A.hO.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=r.a+=A.m(a)
r.a=s+": "
r.a+=A.m(b)},
$S:14}
A.ds.prototype={}
A.c_.prototype={
i(a,b){return this.a.i(0,b)},
q(a,b){this.a.q(0,this.$ti.h("~(1,2)").a(b))},
gk(a){return this.a.a},
gI(a){var s=this.a
return new A.av(s,s.$ti.h("av<1>"))},
m(a){return A.hN(this.a)},
$iN:1}
A.cY.prototype={}
A.ce.prototype={}
A.fj.prototype={
i(a,b){var s,r=this.b
if(r==null)return this.c.i(0,b)
else if(typeof b!="string")return null
else{s=r[b]
return typeof s=="undefined"?this.cE(b):s}},
gk(a){return this.b==null?this.c.a:this.af().length},
gI(a){var s
if(this.b==null){s=this.c
return new A.av(s,A.x(s).h("av<1>"))}return new A.fk(this)},
q(a,b){var s,r,q,p,o=this
t.u.a(b)
if(o.b==null)return o.c.q(0,b)
s=o.af()
for(r=0;r<s.length;++r){q=s[r]
p=o.b[q]
if(typeof p=="undefined"){p=A.jb(o.a[q])
o.b[q]=p}b.$2(q,p)
if(s!==o.c)throw A.b(A.Z(o))}},
af(){var s=t.bM.a(this.c)
if(s==null)s=this.c=A.q(Object.keys(this.a),t.s)
return s},
cE(a){var s
if(!Object.prototype.hasOwnProperty.call(this.a,a))return null
s=A.jb(this.a[a])
return this.b[a]=s}}
A.fk.prototype={
gk(a){var s=this.a
return s.gk(s)},
p(a,b){var s=this.a
if(s.b==null)s=s.gI(s).p(0,b)
else{s=s.af()
if(!(b<s.length))return A.c(s,b)
s=s[b]}return s},
gH(a){var s=this.a
if(s.b==null){s=s.gI(s)
s=s.gH(s)}else{s=s.af()
s=new J.br(s,s.length,A.aO(s).h("br<1>"))}return s}}
A.dP.prototype={}
A.dR.prototype={}
A.ea.prototype={
cX(a,b){var s=A.ox(b,this.gcY().a)
return s},
gcY(){return B.W}}
A.hG.prototype={}
A.hW.prototype={
$2(a,b){var s,r,q
t.fo.a(a)
s=this.b
r=this.a
q=s.a+=r.a
q+=a.a
s.a=q
s.a=q+": "
s.a+=A.bv(b)
r.a=", "},
$S:23}
A.cs.prototype={
J(a,b){if(b==null)return!1
return b instanceof A.cs&&this.a===b.a&&this.b===b.b},
gv(a){var s=this.a
return(s^B.f.by(s,30))&1073741823},
m(a){var s=this,r=A.mN(A.nj(s)),q=A.dS(A.nh(s)),p=A.dS(A.nd(s)),o=A.dS(A.ne(s)),n=A.dS(A.ng(s)),m=A.dS(A.ni(s)),l=A.mO(A.nf(s)),k=r+"-"+q
if(s.b)return k+"-"+p+" "+o+":"+n+":"+m+"."+l+"Z"
else return k+"-"+p+" "+o+":"+n+":"+m+"."+l}}
A.iH.prototype={
m(a){return this.ag()}}
A.G.prototype={
gY(){return A.b9(this.$thrownJsError)}}
A.ck.prototype={
m(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.bv(s)
return"Assertion failed"}}
A.b3.prototype={}
A.aS.prototype={
gaG(){return"Invalid argument"+(!this.a?"(s)":"")},
gaF(){return""},
m(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+A.m(p),n=s.gaG()+q+o
if(!s.a)return n
return n+s.gaF()+": "+A.bv(s.gaS())},
gaS(){return this.b}}
A.c3.prototype={
gaS(){return A.o_(this.b)},
gaG(){return"RangeError"},
gaF(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.m(q):""
else if(q==null)s=": Not greater than or equal to "+A.m(r)
else if(q>r)s=": Not in inclusive range "+A.m(r)+".."+A.m(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.m(r)
return s}}
A.e4.prototype={
gaS(){return A.t(this.b)},
gaG(){return"RangeError"},
gaF(){if(A.t(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gk(a){return this.f}}
A.er.prototype={
m(a){var s,r,q,p,o,n,m,l,k=this,j={},i=new A.cW("")
j.a=""
s=k.c
for(r=s.length,q=0,p="",o="";q<r;++q,o=", "){n=s[q]
i.a=p+o
p=i.a+=A.bv(n)
j.a=", "}k.d.q(0,new A.hW(j,i))
m=A.bv(k.a)
l=i.m(0)
return"NoSuchMethodError: method not found: '"+k.b.a+"'\nReceiver: "+m+"\nArguments: ["+l+"]"}}
A.eV.prototype={
m(a){return"Unsupported operation: "+this.a}}
A.eT.prototype={
m(a){return"UnimplementedError: "+this.a}}
A.bK.prototype={
m(a){return"Bad state: "+this.a}}
A.dQ.prototype={
m(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.bv(s)+"."}}
A.eu.prototype={
m(a){return"Out of Memory"},
gY(){return null},
$iG:1}
A.cU.prototype={
m(a){return"Stack Overflow"},
gY(){return null},
$iG:1}
A.iK.prototype={
m(a){return"Exception: "+this.a}}
A.hr.prototype={
m(a){var s=this.a,r=""!==s?"FormatException: "+s:"FormatException"
return r}}
A.f.prototype={
aq(a,b,c){var s=A.x(this)
return A.kX(this,s.u(c).h("1(f.E)").a(b),s.h("f.E"),c)},
q(a,b){var s
A.x(this).h("~(f.E)").a(b)
for(s=this.gH(this);s.A();)b.$1(s.gC(s))},
gk(a){var s,r=this.gH(this)
for(s=0;r.A();)++s
return s},
p(a,b){var s,r=this.gH(this)
for(s=b;r.A();){if(s===0)return r.gC(r);--s}throw A.b(A.R(b,b-s,this,"index"))},
m(a){return A.n1(this,"(",")")}}
A.K.prototype={
gv(a){return A.v.prototype.gv.call(this,this)},
m(a){return"null"}}
A.v.prototype={$iv:1,
J(a,b){return this===b},
gv(a){return A.cQ(this)},
m(a){return"Instance of '"+A.i1(this)+"'"},
bO(a,b){throw A.b(A.l0(this,t.B.a(b)))},
gE(a){return A.p1(this)},
toString(){return this.m(this)}}
A.fF.prototype={
m(a){return""},
$ian:1}
A.cW.prototype={
gk(a){return this.a.length},
m(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
A.n.prototype={}
A.h9.prototype={
gk(a){return a.length}}
A.dG.prototype={
m(a){var s=String(a)
s.toString
return s}}
A.dH.prototype={
m(a){var s=String(a)
s.toString
return s}}
A.bs.prototype={$ibs:1}
A.bt.prototype={$ibt:1}
A.bu.prototype={
sN(a,b){a.height=b},
sO(a,b){a.width=b},
av(a,b,c){var s=a.getContext(b,A.m1(c))
return s},
$ibu:1,
$idM:1}
A.aG.prototype={
gk(a){return a.length}}
A.hj.prototype={
gk(a){return a.length}}
A.B.prototype={$iB:1}
A.cr.prototype={
gk(a){var s=a.length
s.toString
return s}}
A.hk.prototype={}
A.as.prototype={}
A.aW.prototype={}
A.hl.prototype={
gk(a){return a.length}}
A.hm.prototype={
gk(a){return a.length}}
A.hn.prototype={
gk(a){return a.length},
i(a,b){var s=a[A.t(b)]
s.toString
return s}}
A.aX.prototype={$iaX:1}
A.aY.prototype={$iaY:1}
A.bV.prototype={$ibV:1}
A.aZ.prototype={$iaZ:1}
A.ho.prototype={
m(a){var s=String(a)
s.toString
return s}}
A.ct.prototype={
gk(a){var s=a.length
s.toString
return s},
i(a,b){var s,r
A.t(b)
s=a.length
r=b>>>0!==b||b>=s
r.toString
if(r)throw A.b(A.R(b,s,a,null))
s=a[b]
s.toString
return s},
l(a,b,c){t.q.a(c)
throw A.b(A.D("Cannot assign element of immutable List."))},
gB(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.b(A.L("No elements"))},
p(a,b){if(!(b<a.length))return A.c(a,b)
return a[b]},
$ik:1,
$iu:1,
$if:1,
$il:1}
A.cu.prototype={
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
if(s===r){s=J.cj(b)
s=this.gO(a)===s.gO(b)&&this.gN(a)===s.gN(b)}else s=!1}else s=!1}else s=!1
return s},
gv(a){var s,r=a.left
r.toString
s=a.top
s.toString
return A.l1(r,s,this.gO(a),this.gN(a))},
gbp(a){return a.height},
gN(a){var s=this.gbp(a)
s.toString
return s},
gbB(a){return a.width},
gO(a){var s=this.gbB(a)
s.toString
return s},
$iaJ:1}
A.dU.prototype={
gk(a){var s=a.length
s.toString
return s},
i(a,b){var s,r
A.t(b)
s=a.length
r=b>>>0!==b||b>=s
r.toString
if(r)throw A.b(A.R(b,s,a,null))
s=a[b]
s.toString
return s},
l(a,b,c){A.I(c)
throw A.b(A.D("Cannot assign element of immutable List."))},
gB(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.b(A.L("No elements"))},
p(a,b){if(!(b<a.length))return A.c(a,b)
return a[b]},
$ik:1,
$iu:1,
$if:1,
$il:1}
A.hp.prototype={
gk(a){var s=a.length
s.toString
return s}}
A.i.prototype={
m(a){var s=a.localName
s.toString
return s},
$ii:1}
A.j.prototype={$ij:1}
A.d.prototype={
cS(a,b,c,d){t.o.a(c)
if(c!=null)this.cr(a,b,c,!1)},
cr(a,b,c,d){return a.addEventListener(b,A.aP(t.o.a(c),1),!1)},
cG(a,b,c,d){return a.removeEventListener(b,A.aP(t.o.a(c),1),!1)},
$id:1}
A.a_.prototype={$ia_:1}
A.dX.prototype={
gk(a){var s=a.length
s.toString
return s},
i(a,b){var s,r
A.t(b)
s=a.length
r=b>>>0!==b||b>=s
r.toString
if(r)throw A.b(A.R(b,s,a,null))
s=a[b]
s.toString
return s},
l(a,b,c){t.c8.a(c)
throw A.b(A.D("Cannot assign element of immutable List."))},
gB(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.b(A.L("No elements"))},
p(a,b){if(!(b<a.length))return A.c(a,b)
return a[b]},
$ik:1,
$iu:1,
$if:1,
$il:1}
A.dY.prototype={
gk(a){return a.length}}
A.bW.prototype={$ibW:1}
A.bX.prototype={
q(a,b){return a.forEach(A.aP(t.cZ.a(b),3))},
$ibX:1}
A.dZ.prototype={
gk(a){return a.length}}
A.a8.prototype={$ia8:1}
A.hy.prototype={
gk(a){var s=a.length
s.toString
return s}}
A.by.prototype={
gk(a){var s=a.length
s.toString
return s},
i(a,b){var s,r
A.t(b)
s=a.length
r=b>>>0!==b||b>=s
r.toString
if(r)throw A.b(A.R(b,s,a,null))
s=a[b]
s.toString
return s},
l(a,b,c){t.G.a(c)
throw A.b(A.D("Cannot assign element of immutable List."))},
gB(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.b(A.L("No elements"))},
p(a,b){if(!(b<a.length))return A.c(a,b)
return a[b]},
$ik:1,
$iu:1,
$if:1,
$il:1}
A.au.prototype={
dk(a,b,c,d){return a.open(b,c,!0)},
$iau:1}
A.hz.prototype={
$1(a){var s=t.h.a(a).responseText
s.toString
return s},
$S:16}
A.hA.prototype={
$1(a){var s,r,q,p,o
t.gZ.a(a)
s=this.a
r=s.status
r.toString
q=r>=200&&r<300
p=r>307&&r<400
r=q||r===0||r===304||p
o=this.b
if(r)o.bG(0,s)
else o.an(a)},
$S:17}
A.bz.prototype={}
A.cy.prototype={$icy:1}
A.e3.prototype={$idM:1}
A.bA.prototype={$ibA:1}
A.hC.prototype={
gde(a){return a.isIntersecting}}
A.b1.prototype={$ib1:1}
A.hM.prototype={
m(a){var s=String(a)
s.toString
return s}}
A.bI.prototype={}
A.hS.prototype={
gk(a){return a.length}}
A.ef.prototype={
i(a,b){return A.bp(a.get(A.I(b)))},
q(a,b){var s,r,q
t.u.a(b)
s=a.entries()
for(;!0;){r=s.next()
q=r.done
q.toString
if(q)return
q=r.value[0]
q.toString
b.$2(q,A.bp(r.value[1]))}},
gI(a){var s=A.q([],t.s)
this.q(a,new A.hT(s))
return s},
gk(a){var s=a.size
s.toString
return s},
$iN:1}
A.hT.prototype={
$2(a,b){return B.a.j(this.a,a)},
$S:2}
A.eg.prototype={
i(a,b){return A.bp(a.get(A.I(b)))},
q(a,b){var s,r,q
t.u.a(b)
s=a.entries()
for(;!0;){r=s.next()
q=r.done
q.toString
if(q)return
q=r.value[0]
q.toString
b.$2(q,A.bp(r.value[1]))}},
gI(a){var s=A.q([],t.s)
this.q(a,new A.hU(s))
return s},
gk(a){var s=a.size
s.toString
return s},
$iN:1}
A.hU.prototype={
$2(a,b){return B.a.j(this.a,a)},
$S:2}
A.a9.prototype={$ia9:1}
A.eh.prototype={
gk(a){var s=a.length
s.toString
return s},
i(a,b){var s,r
A.t(b)
s=a.length
r=b>>>0!==b||b>=s
r.toString
if(r)throw A.b(A.R(b,s,a,null))
s=a[b]
s.toString
return s},
l(a,b,c){t.cI.a(c)
throw A.b(A.D("Cannot assign element of immutable List."))},
gB(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.b(A.L("No elements"))},
p(a,b){if(!(b<a.length))return A.c(a,b)
return a[b]},
$ik:1,
$iu:1,
$if:1,
$il:1}
A.a0.prototype={$ia0:1}
A.r.prototype={
m(a){var s=a.nodeValue
return s==null?this.c_(a):s},
$ir:1}
A.cO.prototype={
gk(a){var s=a.length
s.toString
return s},
i(a,b){var s,r
A.t(b)
s=a.length
r=b>>>0!==b||b>=s
r.toString
if(r)throw A.b(A.R(b,s,a,null))
s=a[b]
s.toString
return s},
l(a,b,c){t.G.a(c)
throw A.b(A.D("Cannot assign element of immutable List."))},
gB(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.b(A.L("No elements"))},
p(a,b){if(!(b<a.length))return A.c(a,b)
return a[b]},
$ik:1,
$iu:1,
$if:1,
$il:1}
A.aa.prototype={
gk(a){return a.length},
$iaa:1}
A.ew.prototype={
gk(a){var s=a.length
s.toString
return s},
i(a,b){var s,r
A.t(b)
s=a.length
r=b>>>0!==b||b>=s
r.toString
if(r)throw A.b(A.R(b,s,a,null))
s=a[b]
s.toString
return s},
l(a,b,c){t.he.a(c)
throw A.b(A.D("Cannot assign element of immutable List."))},
gB(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.b(A.L("No elements"))},
p(a,b){if(!(b<a.length))return A.c(a,b)
return a[b]},
$ik:1,
$iu:1,
$if:1,
$il:1}
A.az.prototype={$iaz:1}
A.eB.prototype={
i(a,b){return A.bp(a.get(A.I(b)))},
q(a,b){var s,r,q
t.u.a(b)
s=a.entries()
for(;!0;){r=s.next()
q=r.done
q.toString
if(q)return
q=r.value[0]
q.toString
b.$2(q,A.bp(r.value[1]))}},
gI(a){var s=A.q([],t.s)
this.q(a,new A.i4(s))
return s},
gk(a){var s=a.size
s.toString
return s},
$iN:1}
A.i4.prototype={
$2(a,b){return B.a.j(this.a,a)},
$S:2}
A.eD.prototype={
gk(a){return a.length}}
A.a2.prototype={$ia2:1}
A.eG.prototype={
gk(a){var s=a.length
s.toString
return s},
i(a,b){var s,r
A.t(b)
s=a.length
r=b>>>0!==b||b>=s
r.toString
if(r)throw A.b(A.R(b,s,a,null))
s=a[b]
s.toString
return s},
l(a,b,c){t.fY.a(c)
throw A.b(A.D("Cannot assign element of immutable List."))},
gB(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.b(A.L("No elements"))},
p(a,b){if(!(b<a.length))return A.c(a,b)
return a[b]},
$ik:1,
$iu:1,
$if:1,
$il:1}
A.ab.prototype={$iab:1}
A.eH.prototype={
gk(a){var s=a.length
s.toString
return s},
i(a,b){var s,r
A.t(b)
s=a.length
r=b>>>0!==b||b>=s
r.toString
if(r)throw A.b(A.R(b,s,a,null))
s=a[b]
s.toString
return s},
l(a,b,c){t.f7.a(c)
throw A.b(A.D("Cannot assign element of immutable List."))},
gB(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.b(A.L("No elements"))},
p(a,b){if(!(b<a.length))return A.c(a,b)
return a[b]},
$ik:1,
$iu:1,
$if:1,
$il:1}
A.ac.prototype={
gk(a){return a.length},
$iac:1}
A.eJ.prototype={
i(a,b){return a.getItem(A.I(b))},
q(a,b){var s,r,q
t.eA.a(b)
for(s=0;!0;++s){r=a.key(s)
if(r==null)return
q=a.getItem(r)
q.toString
b.$2(r,q)}},
gI(a){var s=A.q([],t.s)
this.q(a,new A.i8(s))
return s},
gk(a){var s=a.length
s.toString
return s},
$iN:1}
A.i8.prototype={
$2(a,b){return B.a.j(this.a,a)},
$S:18}
A.W.prototype={$iW:1}
A.a3.prototype={$ia3:1}
A.U.prototype={$iU:1}
A.eM.prototype={
gk(a){var s=a.length
s.toString
return s},
i(a,b){var s,r
A.t(b)
s=a.length
r=b>>>0!==b||b>=s
r.toString
if(r)throw A.b(A.R(b,s,a,null))
s=a[b]
s.toString
return s},
l(a,b,c){t.c7.a(c)
throw A.b(A.D("Cannot assign element of immutable List."))},
gB(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.b(A.L("No elements"))},
p(a,b){if(!(b<a.length))return A.c(a,b)
return a[b]},
$ik:1,
$iu:1,
$if:1,
$il:1}
A.eN.prototype={
gk(a){var s=a.length
s.toString
return s},
i(a,b){var s,r
A.t(b)
s=a.length
r=b>>>0!==b||b>=s
r.toString
if(r)throw A.b(A.R(b,s,a,null))
s=a[b]
s.toString
return s},
l(a,b,c){t.a0.a(c)
throw A.b(A.D("Cannot assign element of immutable List."))},
gB(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.b(A.L("No elements"))},
p(a,b){if(!(b<a.length))return A.c(a,b)
return a[b]},
$ik:1,
$iu:1,
$if:1,
$il:1}
A.ij.prototype={
gk(a){var s=a.length
s.toString
return s}}
A.ad.prototype={$iad:1}
A.eP.prototype={
gk(a){var s=a.length
s.toString
return s},
i(a,b){var s,r
A.t(b)
s=a.length
r=b>>>0!==b||b>=s
r.toString
if(r)throw A.b(A.R(b,s,a,null))
s=a[b]
s.toString
return s},
l(a,b,c){t.aK.a(c)
throw A.b(A.D("Cannot assign element of immutable List."))},
gB(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.b(A.L("No elements"))},
p(a,b){if(!(b<a.length))return A.c(a,b)
return a[b]},
$ik:1,
$iu:1,
$if:1,
$il:1}
A.ik.prototype={
gk(a){return a.length}}
A.aL.prototype={}
A.ir.prototype={
m(a){var s=String(a)
s.toString
return s}}
A.eX.prototype={$idM:1}
A.eY.prototype={
gk(a){return a.length}}
A.bj.prototype={
gd3(a){var s=a.deltaY
if(s!=null)return s
throw A.b(A.D("deltaY is not supported"))},
gd2(a){var s=a.deltaX
if(s!=null)return s
throw A.b(A.D("deltaX is not supported"))},
$ibj:1}
A.bk.prototype={
bR(a,b){var s
t.c4.a(b)
this.bm(a)
s=A.ki(b,t.H)
s.toString
return this.cI(a,s)},
cI(a,b){var s=a.requestAnimationFrame(A.aP(t.c4.a(b),1))
s.toString
return s},
bm(a){var s=!!(a.requestAnimationFrame&&a.cancelAnimationFrame)
s.toString
if(s)return;(function(b){var r=["ms","moz","webkit","o"]
for(var q=0;q<r.length&&!b.requestAnimationFrame;++q){b.requestAnimationFrame=b[r[q]+"RequestAnimationFrame"]
b.cancelAnimationFrame=b[r[q]+"CancelAnimationFrame"]||b[r[q]+"CancelRequestAnimationFrame"]}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
$ibk:1}
A.aM.prototype={$iaM:1}
A.f3.prototype={
gk(a){var s=a.length
s.toString
return s},
i(a,b){var s,r
A.t(b)
s=a.length
r=b>>>0!==b||b>=s
r.toString
if(r)throw A.b(A.R(b,s,a,null))
s=a[b]
s.toString
return s},
l(a,b,c){t.g5.a(c)
throw A.b(A.D("Cannot assign element of immutable List."))},
gB(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.b(A.L("No elements"))},
p(a,b){if(!(b<a.length))return A.c(a,b)
return a[b]},
$ik:1,
$iu:1,
$if:1,
$il:1}
A.d3.prototype={
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
r=J.cj(b)
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
return A.l1(p,s,r,q)},
gbp(a){return a.height},
gN(a){var s=a.height
s.toString
return s},
gbB(a){return a.width},
gO(a){var s=a.width
s.toString
return s}}
A.fg.prototype={
gk(a){var s=a.length
s.toString
return s},
i(a,b){var s,r
A.t(b)
s=a.length
r=b>>>0!==b||b>=s
r.toString
if(r)throw A.b(A.R(b,s,a,null))
return a[b]},
l(a,b,c){t.g7.a(c)
throw A.b(A.D("Cannot assign element of immutable List."))},
gB(a){if(a.length>0)return a[0]
throw A.b(A.L("No elements"))},
p(a,b){if(!(b<a.length))return A.c(a,b)
return a[b]},
$ik:1,
$iu:1,
$if:1,
$il:1}
A.dc.prototype={
gk(a){var s=a.length
s.toString
return s},
i(a,b){var s,r
A.t(b)
s=a.length
r=b>>>0!==b||b>=s
r.toString
if(r)throw A.b(A.R(b,s,a,null))
s=a[b]
s.toString
return s},
l(a,b,c){t.G.a(c)
throw A.b(A.D("Cannot assign element of immutable List."))},
gB(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.b(A.L("No elements"))},
p(a,b){if(!(b<a.length))return A.c(a,b)
return a[b]},
$ik:1,
$iu:1,
$if:1,
$il:1}
A.fB.prototype={
gk(a){var s=a.length
s.toString
return s},
i(a,b){var s,r
A.t(b)
s=a.length
r=b>>>0!==b||b>=s
r.toString
if(r)throw A.b(A.R(b,s,a,null))
s=a[b]
s.toString
return s},
l(a,b,c){t.gf.a(c)
throw A.b(A.D("Cannot assign element of immutable List."))},
gB(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.b(A.L("No elements"))},
p(a,b){if(!(b<a.length))return A.c(a,b)
return a[b]},
$ik:1,
$iu:1,
$if:1,
$il:1}
A.fG.prototype={
gk(a){var s=a.length
s.toString
return s},
i(a,b){var s,r
A.t(b)
s=a.length
r=b>>>0!==b||b>=s
r.toString
if(r)throw A.b(A.R(b,s,a,null))
s=a[b]
s.toString
return s},
l(a,b,c){t.gn.a(c)
throw A.b(A.D("Cannot assign element of immutable List."))},
gB(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.b(A.L("No elements"))},
p(a,b){if(!(b<a.length))return A.c(a,b)
return a[b]},
$ik:1,
$iu:1,
$if:1,
$il:1}
A.jR.prototype={}
A.d4.prototype={
ap(a,b,c,d){var s=A.x(this)
s.h("~(1)?").a(a)
t.Y.a(c)
return A.X(this.a,this.b,a,!1,s.c)}}
A.fb.prototype={}
A.d5.prototype={
S(a){var s=this
if(s.b==null)return $.jL()
s.bA()
s.b=null
s.sbw(null)
return $.jL()},
aU(a){var s,r=this
r.$ti.h("~(1)?").a(a)
if(r.b==null)throw A.b(A.L("Subscription has been canceled."))
r.bA()
s=A.ki(new A.iJ(a),t.A)
r.sbw(s)
r.bz()},
bz(){var s,r=this.d
if(r!=null&&!0){s=this.b
s.toString
J.mx(s,this.c,r,!1)}},
bA(){var s,r=this.d
if(r!=null){s=this.b
s.toString
J.mw(s,this.c,t.o.a(r),!1)}},
sbw(a){this.d=t.o.a(a)},
$iaK:1}
A.iI.prototype={
$1(a){return this.a.$1(t.A.a(a))},
$S:5}
A.iJ.prototype={
$1(a){return this.a.$1(t.A.a(a))},
$S:5}
A.k6.prototype={}
A.p.prototype={
gH(a){return new A.cw(a,this.gk(a),A.ar(a).h("cw<p.E>"))}}
A.cw.prototype={
A(){var s=this,r=s.c+1,q=s.b
if(r<q){s.sbq(J.af(s.a,r))
s.c=r
return!0}s.sbq(null)
s.c=q
return!1},
gC(a){var s=this.d
return s==null?this.$ti.c.a(s):s},
sbq(a){this.d=this.$ti.h("1?").a(a)},
$iah:1}
A.f4.prototype={}
A.f7.prototype={}
A.f8.prototype={}
A.f9.prototype={}
A.fa.prototype={}
A.fd.prototype={}
A.fe.prototype={}
A.fh.prototype={}
A.fi.prototype={}
A.fn.prototype={}
A.fo.prototype={}
A.fp.prototype={}
A.fq.prototype={}
A.fr.prototype={}
A.fs.prototype={}
A.fv.prototype={}
A.fw.prototype={}
A.fy.prototype={}
A.di.prototype={}
A.dj.prototype={}
A.fz.prototype={}
A.fA.prototype={}
A.fC.prototype={}
A.fH.prototype={}
A.fI.prototype={}
A.dl.prototype={}
A.dm.prototype={}
A.fJ.prototype={}
A.fK.prototype={}
A.fO.prototype={}
A.fP.prototype={}
A.fQ.prototype={}
A.fR.prototype={}
A.fS.prototype={}
A.fT.prototype={}
A.fU.prototype={}
A.fV.prototype={}
A.fW.prototype={}
A.fX.prototype={}
A.iy.prototype={
bL(a){var s,r=this.a,q=r.length
for(s=0;s<q;++s)if(r[s]===a)return s
B.a.j(r,a)
B.a.j(this.b,null)
return q},
b0(a){var s,r,q,p,o,n,m,l,k,j=this
if(a==null)return a
if(A.cf(a))return a
if(typeof a=="number")return a
if(typeof a=="string")return a
s=a instanceof Date
s.toString
if(s){s=a.getTime()
s.toString
return A.kH(s,!0)}s=a instanceof RegExp
s.toString
if(s)throw A.b(A.k3("structured clone of RegExp"))
s=typeof Promise!="undefined"&&a instanceof Promise
s.toString
if(s)return A.pk(a,t.z)
if(A.m6(a)){r=j.bL(a)
s=j.b
if(!(r<s.length))return A.c(s,r)
q=s[r]
if(q!=null)return q
p=t.z
o=A.cG(p,p)
B.a.l(s,r,o)
j.d6(a,new A.iA(j,o))
return o}s=a instanceof Array
s.toString
if(s){s=a
s.toString
r=j.bL(s)
p=j.b
if(!(r<p.length))return A.c(p,r)
q=p[r]
if(q!=null)return q
n=J.aE(s)
m=n.gk(s)
if(j.c){l=new Array(m)
l.toString
q=l}else q=s
B.a.l(p,r,q)
for(p=J.ci(q),k=0;k<m;++k)p.l(q,k,j.b0(n.i(s,k)))
return q}return a}}
A.iA.prototype={
$2(a,b){var s=this.a.b0(b)
this.b.l(0,a,s)
return s},
$S:20}
A.ja.prototype={
$1(a){this.a.push(A.lI(a))},
$S:3}
A.jj.prototype={
$2(a,b){this.a[a]=A.lI(b)},
$S:22}
A.iz.prototype={
d6(a,b){var s,r,q,p
t.b8.a(b)
for(s=Object.keys(a),r=s.length,q=0;q<s.length;s.length===r||(0,A.T)(s),++q){p=s[q]
b.$2(p,a[p])}}}
A.cD.prototype={$icD:1}
A.hF.prototype={
$1(a){var s,r,q,p,o=this.a
if(o.a6(0,a))return o.i(0,a)
if(t.f.b(a)){s={}
o.l(0,a,s)
for(o=J.cj(a),r=J.aR(o.gI(a));r.A();){q=r.gC(r)
s[q]=this.$1(o.i(a,q))}return s}else if(t.k.b(a)){p=[]
o.l(0,a,p)
B.a.P(p,J.kx(a,this,t.z))
return p}else return A.kb(a)},
$S:47}
A.jc.prototype={
$1(a){var s
t.Z.a(a)
s=function(b,c,d){return function(){return b(c,d,this,Array.prototype.slice.apply(arguments))}}(A.o3,a,!1)
A.kc(s,$.h2(),a)
return s},
$S:7}
A.jd.prototype={
$1(a){return new this.a(a)},
$S:7}
A.jf.prototype={
$1(a){return new A.cB(a==null?t.K.a(a):a)},
$S:24}
A.jg.prototype={
$1(a){var s=a==null?t.K.a(a):a
return new A.bE(s,t.am)},
$S:25}
A.jh.prototype={
$1(a){return new A.b0(a==null?t.K.a(a):a)},
$S:26}
A.b0.prototype={
i(a,b){t.K.a(b)
if(typeof b!="string"&&typeof b!="number")throw A.b(A.aT("property is not a String or num",null))
return A.lK(this.a[b])},
l(a,b,c){if(typeof b!="string"&&typeof b!="number")throw A.b(A.aT("property is not a String or num",null))
this.a[b]=A.kb(c)},
J(a,b){if(b==null)return!1
return b instanceof A.b0&&this.a===b.a},
m(a){var s,r
try{s=String(this.a)
return s}catch(r){s=this.c3(0)
return s}},
gv(a){return 0}}
A.cB.prototype={}
A.bE.prototype={
bg(a){var s=this,r=a<0||a>=s.gk(s)
if(r)throw A.b(A.l5(a,0,s.gk(s),null,null))},
i(a,b){t.K.a(b)
if(A.fY(b))this.bg(b)
return this.$ti.c.a(this.c0(0,b))},
l(a,b,c){if(A.fY(b))this.bg(b)
this.c4(0,b,c)},
gk(a){var s=this.a.length
if(typeof s==="number"&&s>>>0===s)return s
throw A.b(A.L("Bad JsArray length"))},
$ik:1,
$if:1,
$il:1}
A.ca.prototype={
l(a,b,c){return this.c1(0,b,c)}}
A.jy.prototype={
$1(a){return this.a.bG(0,this.b.h("0/?").a(a))},
$S:3}
A.jz.prototype={
$1(a){if(a==null)return this.a.an(new A.hX(a===undefined))
return this.a.an(a)},
$S:3}
A.hX.prototype={
m(a){return"Promise was rejected with a value of `"+(this.a?"undefined":"null")+"`."}}
A.iX.prototype={
dj(a){if(a<=0||a>4294967296)throw A.b(A.nn("max must be in range 0 < max \u2264 2^32, was "+a))
return Math.random()*a>>>0},
di(){return Math.random()}}
A.bf.prototype={
m(a){return"Point("+A.m(this.a)+", "+A.m(this.b)+")"},
J(a,b){if(b==null)return!1
return b instanceof A.bf&&this.a===b.a&&this.b===b.b},
gv(a){return A.nt(B.c.gv(this.a),B.c.gv(this.b),0)},
t(a,b){var s,r=this.$ti
r.a(b)
s=r.c
return new A.bf(s.a(B.c.t(this.a,b.gdq(b))),s.a(B.c.t(this.b,b.gdr(b))),r)},
n(a,b){var s=this.$ti,r=s.c
return new A.bf(r.a(this.a*b),r.a(this.b*b),s)}}
A.ai.prototype={$iai:1}
A.eb.prototype={
gk(a){var s=a.length
s.toString
return s},
i(a,b){var s
A.t(b)
s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw A.b(A.R(b,this.gk(a),a,null))
s=a.getItem(b)
s.toString
return s},
l(a,b,c){t.bG.a(c)
throw A.b(A.D("Cannot assign element of immutable List."))},
gB(a){var s=a.length
s.toString
if(s>0){s=a[0]
s.toString
return s}throw A.b(A.L("No elements"))},
p(a,b){return this.i(a,b)},
$ik:1,
$if:1,
$il:1}
A.ak.prototype={$iak:1}
A.es.prototype={
gk(a){var s=a.length
s.toString
return s},
i(a,b){var s
A.t(b)
s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw A.b(A.R(b,this.gk(a),a,null))
s=a.getItem(b)
s.toString
return s},
l(a,b,c){t.eq.a(c)
throw A.b(A.D("Cannot assign element of immutable List."))},
gB(a){var s=a.length
s.toString
if(s>0){s=a[0]
s.toString
return s}throw A.b(A.L("No elements"))},
p(a,b){return this.i(a,b)},
$ik:1,
$if:1,
$il:1}
A.i_.prototype={
gk(a){return a.length}}
A.eK.prototype={
gk(a){var s=a.length
s.toString
return s},
i(a,b){var s
A.t(b)
s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw A.b(A.R(b,this.gk(a),a,null))
s=a.getItem(b)
s.toString
return s},
l(a,b,c){A.I(c)
throw A.b(A.D("Cannot assign element of immutable List."))},
gB(a){var s=a.length
s.toString
if(s>0){s=a[0]
s.toString
return s}throw A.b(A.L("No elements"))},
p(a,b){return this.i(a,b)},
$ik:1,
$if:1,
$il:1}
A.ao.prototype={$iao:1}
A.eQ.prototype={
gk(a){var s=a.length
s.toString
return s},
i(a,b){var s
A.t(b)
s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw A.b(A.R(b,this.gk(a),a,null))
s=a.getItem(b)
s.toString
return s},
l(a,b,c){t.cM.a(c)
throw A.b(A.D("Cannot assign element of immutable List."))},
gB(a){var s=a.length
s.toString
if(s>0){s=a[0]
s.toString
return s}throw A.b(A.L("No elements"))},
p(a,b){return this.i(a,b)},
$ik:1,
$if:1,
$il:1}
A.fl.prototype={}
A.fm.prototype={}
A.ft.prototype={}
A.fu.prototype={}
A.fD.prototype={}
A.fE.prototype={}
A.fL.prototype={}
A.fM.prototype={}
A.hb.prototype={
gk(a){return a.length}}
A.dJ.prototype={
i(a,b){return A.bp(a.get(A.I(b)))},
q(a,b){var s,r,q
t.u.a(b)
s=a.entries()
for(;!0;){r=s.next()
q=r.done
q.toString
if(q)return
q=r.value[0]
q.toString
b.$2(q,A.bp(r.value[1]))}},
gI(a){var s=A.q([],t.s)
this.q(a,new A.hc(s))
return s},
gk(a){var s=a.size
s.toString
return s},
$iN:1}
A.hc.prototype={
$2(a,b){return B.a.j(this.a,a)},
$S:2}
A.dK.prototype={
gk(a){return a.length}}
A.bb.prototype={}
A.et.prototype={
gk(a){return a.length}}
A.f2.prototype={}
A.dL.prototype={$idL:1}
A.aV.prototype={$iaV:1}
A.e0.prototype={$ie0:1}
A.ex.prototype={$iex:1}
A.eA.prototype={$ieA:1}
A.cT.prototype={$icT:1}
A.c4.prototype={
al(a,b,c){return a.bindBuffer(b,c)},
L(a,b,c){return a.bindFramebuffer(b,c)},
bD(a,b,c){return a.bindRenderbuffer(b,c)},
bE(a,b,c){return a.bindTexture(b,c)},
bJ(a,b){return a.deleteBuffer(b)},
cZ(a,b){return a.deleteFramebuffer(b)},
d_(a,b){return a.deleteProgram(b)},
d0(a,b){return a.deleteRenderbuffer(b)},
bK(a,b){return a.deleteShader(b)},
d1(a,b){return a.deleteTexture(b)},
d8(a,b,c,d,e){return a.framebufferRenderbuffer(b,c,d,e)},
d9(a,b,c,d,e,f){return a.framebufferTexture2D(b,c,d,e,f)},
bW(a,b,c,d,e,f,g,h,i,j){var s=i==null
if(!s&&h!=null&&A.fY(g)){this.cO(a,b,c,d,e,f,g,h,i,j)
return}if(t.gA.b(g)&&h==null&&s&&j==null){this.cP(a,b,c,d,e,f,g)
return}throw A.b(A.aT("Incorrect number or type of arguments",null))},
dn(a,b,c,d,e,f,g){return this.bW(a,b,c,d,e,f,g,null,null,null)},
cO(a,b,c,d,e,f,g,h,i,j){return a.texImage2D(b,c,d,e,f,g,h,i,j)},
cP(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
bX(a,b,c){return a.uniform1f(b,c)},
aZ(a,b,c){return a.uniform1i(b,c)},
au(a,b,c){return a.uniform4fv(b,c)},
bY(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
X(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
a9(a,b){return a.useProgram(b)},
$ic4:1}
A.eF.prototype={$ieF:1}
A.eO.prototype={$ieO:1}
A.eS.prototype={$ieS:1}
A.h8.prototype={}
A.im.prototype={}
A.e1.prototype={
gd7(){var s=B.a.d5(this.a,0,new A.hs(),t.H)
if(typeof s!=="number")return A.aq(s)
return B.c.T(20/s)},
cf(a){var s,r,q=this
A.lG(a)
s=q.f=(a-q.b)*0.001
q.b=a
r=q.c+=s
q.d+=s
q.e+=s
if(r>=0.03333333333333333){s=B.c.b1(r,0.03333333333333333)
q.c=s
q.r.j(0,0.03333333333333333+s)}s=q.d
if(s>=0.016666666666666666){s=B.c.b1(s,0.016666666666666666)
q.d=s
q.w.j(0,0.016666666666666666+s)
s=q.a
if(!!s.fixed$length)A.bq(A.D("removeAt"))
r=s.length
if(0>=r)A.bq(A.l6(0,null))
s.splice(0,1)[0]
B.a.j(s,q.e)
q.e=0}s=window
s.toString
q.x=B.j.bR(s,q.gba())},
scQ(a){this.r=t.I.a(a)},
scR(a){this.w=t.I.a(a)}}
A.hs.prototype={
$2(a,b){return A.lG(a)+A.du(b)},
$S:28}
A.cn.prototype={
gbS(){var s=this
return A.q([s.a,s.b,s.c,s.d],t.n)}}
A.ht.prototype={}
A.ax.prototype={
c6(a){var s=a.a,r=s*s,q=a.b,p=q*q,o=a.c,n=o*o,m=s*q,l=s*o,k=q*o,j=a.d,i=j*s,h=j*q,g=j*o,f=new A.hP(this)
f.$3(0,0,1-2*(p+n))
f.$3(0,1,2*(m-g))
f.$3(0,2,2*(l+h))
f.$3(1,0,2*(m+g))
f.$3(1,1,1-2*(r+n))
f.$3(1,2,2*(k-i))
f.$3(2,0,2*(l-h))
f.$3(2,1,2*(k+i))
f.$3(2,2,1-2*(r+p))},
n(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
t.gU.a(a3)
s=this.a
r=s.length
if(0>=r)return A.c(s,0)
q=s[0]
if(3>=r)return A.c(s,3)
p=s[3]
if(6>=r)return A.c(s,6)
o=s[6]
n=s[1]
m=s[4]
if(7>=r)return A.c(s,7)
l=s[7]
k=s[2]
j=s[5]
if(8>=r)return A.c(s,8)
i=s[8]
h=a3.gdt(a3)
g=h.i(0,0)
f=h.i(0,1)
e=h.i(0,2)
d=h.i(0,3)
c=h.i(0,4)
b=h.i(0,5)
a=h.i(0,6)
a0=h.i(0,7)
a1=h.i(0,8)
return new A.ax(A.q([B.c.n(q,g)+B.c.n(p,f)+B.c.n(o,e),B.c.n(n,g)+B.c.n(m,f)+B.c.n(l,e),B.c.n(k,g)+B.c.n(j,f)+B.c.n(i,e),B.c.n(q,d)+B.c.n(p,c)+B.c.n(o,b),B.c.n(n,d)+B.c.n(m,c)+B.c.n(l,b),B.c.n(k,d)+B.c.n(j,c)+B.c.n(i,b),B.c.n(q,a)+B.c.n(p,a0)+B.c.n(o,a1),B.c.n(n,a)+B.c.n(m,a0)+B.c.n(l,a1),B.c.n(k,a)+B.c.n(j,a0)+B.c.n(i,a1)],t.n))},
m(a){var s,r,q,p,o,n,m,l,k=this.a
if(0>=k.length)return A.c(k,0)
s=A.m(k[0])
if(1>=k.length)return A.c(k,1)
r=A.m(k[1])
if(2>=k.length)return A.c(k,2)
q=A.m(k[2])
if(3>=k.length)return A.c(k,3)
p=A.m(k[3])
if(4>=k.length)return A.c(k,4)
o=A.m(k[4])
if(5>=k.length)return A.c(k,5)
n=A.m(k[5])
if(6>=k.length)return A.c(k,6)
m=A.m(k[6])
if(7>=k.length)return A.c(k,7)
l=A.m(k[7])
if(8>=k.length)return A.c(k,8)
return"      ["+s+", "+r+", "+q+"]\n      ["+p+", "+o+", "+n+"]\n      ["+m+", "+l+", "+A.m(k[8])+"]\n    "}}
A.hP.prototype={
$3(a,b,c){B.a.l(this.a.a,b*3+a,c)
return c},
$S:29}
A.be.prototype={
n(b6,b7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
t.w.a(b7)
s=this.a
r=s.length
if(0>=r)return A.c(s,0)
q=s[0]
if(4>=r)return A.c(s,4)
p=s[4]
if(8>=r)return A.c(s,8)
o=s[8]
if(12>=r)return A.c(s,12)
n=s[12]
m=s[1]
l=s[5]
k=s[9]
if(13>=r)return A.c(s,13)
j=s[13]
i=s[2]
h=s[6]
g=s[10]
if(14>=r)return A.c(s,14)
f=s[14]
e=s[3]
d=s[7]
c=s[11]
if(15>=r)return A.c(s,15)
b=s[15]
a=b7.a
s=a.length
if(0>=s)return A.c(a,0)
a0=a[0]
if(4>=s)return A.c(a,4)
a1=a[4]
if(8>=s)return A.c(a,8)
a2=a[8]
if(12>=s)return A.c(a,12)
a3=a[12]
a4=a[1]
a5=a[5]
a6=a[9]
if(13>=s)return A.c(a,13)
a7=a[13]
a8=a[2]
a9=a[6]
b0=a[10]
if(14>=s)return A.c(a,14)
b1=a[14]
b2=a[3]
b3=a[7]
b4=a[11]
if(15>=s)return A.c(a,15)
b5=a[15]
return new A.be(A.q([q*a0+p*a4+o*a8+n*b2,m*a0+l*a4+k*a8+j*b2,i*a0+h*a4+g*a8+f*b2,e*a0+d*a4+c*a8+b*b2,q*a1+p*a5+o*a9+n*b3,m*a1+l*a5+k*a9+j*b3,i*a1+h*a5+g*a9+f*b3,e*a1+d*a5+c*a9+b*b3,q*a2+p*a6+o*b0+n*b4,m*a2+l*a6+k*b0+j*b4,i*a2+h*a6+g*b0+f*b4,e*a2+d*a6+c*b0+b*b4,q*a3+p*a7+o*b1+n*b5,m*a3+l*a7+k*b1+j*b5,i*a3+h*a7+g*b1+f*b5,e*a3+d*a7+c*b1+b*b5],t.n))},
m(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this.a
if(0>=d.length)return A.c(d,0)
s=A.m(d[0])
if(1>=d.length)return A.c(d,1)
r=A.m(d[1])
if(2>=d.length)return A.c(d,2)
q=A.m(d[2])
if(3>=d.length)return A.c(d,3)
p=A.m(d[3])
if(4>=d.length)return A.c(d,4)
o=A.m(d[4])
if(5>=d.length)return A.c(d,5)
n=A.m(d[5])
if(6>=d.length)return A.c(d,6)
m=A.m(d[6])
if(7>=d.length)return A.c(d,7)
l=A.m(d[7])
if(8>=d.length)return A.c(d,8)
k=A.m(d[8])
if(9>=d.length)return A.c(d,9)
j=A.m(d[9])
if(10>=d.length)return A.c(d,10)
i=A.m(d[10])
if(11>=d.length)return A.c(d,11)
h=A.m(d[11])
if(12>=d.length)return A.c(d,12)
g=A.m(d[12])
if(13>=d.length)return A.c(d,13)
f=A.m(d[13])
if(14>=d.length)return A.c(d,14)
e=A.m(d[14])
if(15>=d.length)return A.c(d,15)
return"      ["+s+", "+r+", "+q+", "+p+"]\n      ["+o+", "+n+", "+m+", "+l+"]\n      ["+k+", "+j+", "+i+", "+h+"]\n      ["+g+", "+f+", "+e+", "+A.m(d[15])+"]\n    "}}
A.aI.prototype={
t(a,b){t.E.a(b)
return new A.aI(B.c.t(this.a,b.gdq(b)),B.c.t(this.b,b.gdr(b)))},
n(a,b){t.E.a(b)
return new A.aI(this.a*b.a,this.b*b.b)},
m(a){return"["+A.m(this.a)+", "+A.m(this.b)+"]"}}
A.ay.prototype={
t(a,b){t.eU.a(b)
return new A.ay(this.a+b.a,this.b+b.b,this.c+b.c)},
n(a,b){return new A.ay(this.a*b,this.b*b,this.c*b)},
m(a){return"["+A.m(this.a)+", "+A.m(this.b)+", "+A.m(this.c)+"]"}}
A.cR.prototype={}
A.aA.prototype={
c7(a){var s,r,q,p=this,o=new A.i2(a),n=o.$2(0,0),m=o.$2(1,1),l=o.$2(2,2),k=n+m+l
if(k>0){s=Math.sqrt(k+1)*0.5
p.d=s
r=0.25/s
s=o.$2(2,1)
q=o.$2(1,2)
if(typeof s!=="number")return s.Z()
if(typeof q!=="number")return A.aq(q)
p.a=(s-q)*r
q=o.$2(0,2)
s=o.$2(2,0)
if(typeof q!=="number")return q.Z()
if(typeof s!=="number")return A.aq(s)
p.b=(q-s)*r
s=o.$2(1,0)
q=o.$2(0,1)
if(typeof s!=="number")return s.Z()
if(typeof q!=="number")return A.aq(q)
p.c=(s-q)*r}else if(n>m&&n>l){s=Math.sqrt(n-m-l+1)*0.5
p.a=s
r=0.25/s
s=o.$2(1,0)
q=o.$2(0,1)
if(typeof s!=="number")return s.t()
if(typeof q!=="number")return A.aq(q)
p.b=(s+q)*r
q=o.$2(0,2)
s=o.$2(2,0)
if(typeof q!=="number")return q.t()
if(typeof s!=="number")return A.aq(s)
p.c=(q+s)*r
s=o.$2(2,1)
q=o.$2(1,2)
if(typeof s!=="number")return s.Z()
if(typeof q!=="number")return A.aq(q)
p.d=(s-q)*r}else if(m>l){s=Math.sqrt(m-n-l+1)*0.5
p.b=s
r=0.25/s
s=o.$2(1,0)
q=o.$2(0,1)
if(typeof s!=="number")return s.t()
if(typeof q!=="number")return A.aq(q)
p.a=(s+q)*r
q=o.$2(2,1)
s=o.$2(1,2)
if(typeof q!=="number")return q.t()
if(typeof s!=="number")return A.aq(s)
p.c=(q+s)*r
s=o.$2(0,2)
q=o.$2(2,0)
if(typeof s!=="number")return s.Z()
if(typeof q!=="number")return A.aq(q)
p.d=(s-q)*r}else{s=Math.sqrt(l-n-m+1)*0.5
p.c=s
r=0.25/s
s=o.$2(0,2)
q=o.$2(2,0)
if(typeof s!=="number")return s.t()
if(typeof q!=="number")return A.aq(q)
p.a=(s+q)*r
q=o.$2(2,1)
s=o.$2(1,2)
if(typeof q!=="number")return q.t()
if(typeof s!=="number")return A.aq(s)
p.b=(q+s)*r
s=o.$2(1,0)
q=o.$2(0,1)
if(typeof s!=="number")return s.Z()
if(typeof q!=="number")return A.aq(q)
p.d=(s-q)*r}},
t(a,b){var s=this
t.L.a(b)
return new A.aA(s.a+b.a,s.b+b.b,s.c+b.c,s.d+b.d)},
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
return new A.aA(o*p+n*s+m*r-l*q,o*q+m*s+l*p-n*r,o*r+l*s+n*q-m*p,o*s-n*p-m*q-l*r)},
m(a){var s=this
return"      ["+A.m(s.a)+", "+A.m(s.b)+", "+A.m(s.c)+", "+A.m(s.d)+"]\n    "}}
A.i2.prototype={
$2(a,b){var s=this.a.a,r=b*3+a
if(!(r<s.length))return A.c(s,r)
return s[r]},
$S:30}
A.il.prototype={}
A.aB.prototype={
sbT(a){var s=a.a,r=this.a
if(0>=s.length)return A.c(s,0)
B.a.l(r,0,s[0])
if(1>=s.length)return A.c(s,1)
B.a.l(r,1,s[1])
if(2>=s.length)return A.c(s,2)
B.a.l(r,2,s[2])
if(3>=s.length)return A.c(s,3)
B.a.l(r,4,s[3])
if(4>=s.length)return A.c(s,4)
B.a.l(r,5,s[4])
if(5>=s.length)return A.c(s,5)
B.a.l(r,6,s[5])
if(6>=s.length)return A.c(s,6)
B.a.l(r,8,s[6])
if(7>=s.length)return A.c(s,7)
B.a.l(r,9,s[7])
if(8>=s.length)return A.c(s,8)
B.a.l(r,10,s[8])},
gW(){var s,r,q=this.a,p=q.length
if(12>=p)return A.c(q,12)
s=q[12]
if(13>=p)return A.c(q,13)
r=q[13]
if(14>=p)return A.c(q,14)
return new A.ay(s,r,q[14])},
sW(a){var s=this.a
B.a.l(s,12,a.a)
B.a.l(s,13,a.b)
B.a.l(s,14,a.c)},
n(a8,a9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
t.w.a(a9)
s=this.a
r=s.length
if(0>=r)return A.c(s,0)
q=s[0]
if(4>=r)return A.c(s,4)
p=s[4]
if(8>=r)return A.c(s,8)
o=s[8]
if(12>=r)return A.c(s,12)
n=s[12]
m=s[1]
l=s[5]
k=s[9]
if(13>=r)return A.c(s,13)
j=s[13]
i=s[2]
h=s[6]
g=s[10]
if(14>=r)return A.c(s,14)
f=s[14]
e=a9.a
s=e.length
if(0>=s)return A.c(e,0)
d=e[0]
if(4>=s)return A.c(e,4)
c=e[4]
if(8>=s)return A.c(e,8)
b=e[8]
if(12>=s)return A.c(e,12)
a=e[12]
a0=e[1]
a1=e[5]
a2=e[9]
if(13>=s)return A.c(e,13)
a3=e[13]
a4=e[2]
a5=e[6]
a6=e[10]
if(14>=s)return A.c(e,14)
a7=e[14]
return new A.aB(A.q([q*d+p*a0+o*a4,m*d+l*a0+k*a4,i*d+h*a0+g*a4,0,q*c+p*a1+o*a5,m*c+l*a1+k*a5,i*c+h*a1+g*a5,0,q*b+p*a2+o*a6,m*b+l*a2+k*a6,i*b+h*a2+g*a6,0,q*a+p*a3+o*a7+n,m*a+l*a3+k*a7+j,i*a+h*a3+g*a7+f,1],t.n))}}
A.P.prototype={
cc(a){var s=a.a,r=a.b,q=a.c,p=Math.sqrt(s*s+r*r+q*q)
this.a=a.a/p
this.b=a.b/p
this.c=a.c/p},
t(a,b){t.cW.a(b)
return new A.P(this.a+b.a,this.b+b.b,this.c+b.c)},
n(a,b){return new A.P(this.a*b,this.b*b,this.c*b)},
b2(a){return new A.P(-this.a,-this.b,-this.c)},
m(a){return"["+A.m(this.a)+", "+A.m(this.b)+", "+A.m(this.c)+"]"}}
A.hw.prototype={
R(a,b,c,d,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e="byteOffset"
t.aH.a(a0)
t.g6.a(a1)
s=J.aE(d)
r=J.af(J.af(J.af(s.i(d,"meshes"),a),"primitives"),b)
q=s.i(d,"accessors")
p=s.i(d,"bufferViews")
o=s.i(d,"buffers")
n=A.q([],t.U)
s=J.aE(r)
J.h7(s.i(r,"attributes"),new A.hx(this,a1,q,p,a0,o,c,n))
m=J.af(q,s.i(r,"indices"))
s=J.aE(m)
l=J.af(p,s.i(m,"bufferView"))
k=J.aE(l)
j=k.i(l,e)
i=A.t(j==null?0:j)
k=a0.i(0,J.af(J.af(o,k.i(l,"buffer")),"uri"))
k.toString
j=s.i(m,e)
h=A.t(j==null?0:j)
A.t(s.i(m,"componentType"))
g=J.kw(s.i(m,"count"),2)
s=new Uint8Array(A.bP(A.n5(k.buffer,i+h,A.lF(g)))).buffer
A.j9(s,0,null)
f=B.f.cM(s.byteLength-0,2)
return new A.c1(c.az(new Uint16Array(s,0,f)),new A.eW(0),new A.bM(A.jY(n,t.cQ)),4)},
cd(a){switch(J.af(a,"type")){case"VEC4":return 4
case"VEC3":return 3
case"VEC2":return 2
default:return 1}}}
A.hx.prototype={
$2(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=this,g="byteOffset",f=h.b
if(f.i(0,a)==null)return
f=f.i(0,a)
f.toString
s=J.af(h.c,b)
r=J.aE(s)
q=J.af(h.d,r.i(s,"bufferView"))
p=J.aE(q)
o=p.i(q,g)
p=h.e.i(0,J.af(J.af(h.f,p.i(q,"buffer")),"uri"))
p.toString
n=r.i(s,g)
m=A.t(n==null?0:n)
l=J.h6(r.i(s,"componentType"),5123)?2:4
t.f.a(s)
k=h.a.cd(s)
j=J.kw(r.i(s,"count"),k)
r=p.buffer
p=A.t(J.mu(o,m))
A.lF(j)
A.j9(r,p,j)
i=h.r.aw(new Float32Array(A.bP(new Float32Array(r,p,j))))
B.a.j(h.w,new A.aU(A.I(a),f,k,k*l,i.b))},
$S:39}
A.bZ.prototype={}
A.a7.prototype={}
A.cC.prototype={}
A.dV.prototype={}
A.f_.prototype={}
A.bh.prototype={}
A.cb.prototype={
ag(){return"_KeyAction."+this.b}}
A.hH.prototype={
a0(){var s,r,q,p,o,n,m=this
for(s=t.bl,r=m.b,q=0;q<2;++q){p=B.Y[q]
r.l(0,p,new A.aC(null,null,s))}s=m.a
r=document
r.toString
o=t.eN
n=t.g
B.a.j(s,A.X(r,"keydown",o.a(new A.hI(m)),!1,n))
B.a.j(s,A.X(r,"keyup",o.a(new A.hJ(m)),!1,n))},
G(){var s,r,q,p,o
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.T)(s),++q)s[q].S(0)
B.a.F(s)
for(s=this.b,r=s.gb_(s),p=A.x(r),p=p.h("@<1>").u(p.z[1]),r=new A.aw(J.aR(r.a),r.b,p.h("aw<1,2>")),p=p.z[1];r.A();){o=r.a;(o==null?p.a(o):o).a5(0)}s.F(0)}}
A.hI.prototype={
$1(a){var s
t.g.a(a)
s=this.a.b.i(0,B.A)
s.toString
a.keyCode.toString
s.j(0,new A.bZ())},
$S:10}
A.hJ.prototype={
$1(a){var s
t.g.a(a)
s=this.a.b.i(0,B.B)
s.toString
a.keyCode.toString
s.j(0,new A.bZ())},
$S:10}
A.aN.prototype={
ag(){return"_MouseAction."+this.b}}
A.ei.prototype={
a0(){var s,r,q,p,o,n
for(s=t.er,r=this.b,q=0;q<6;++q){p=B.X[q]
r.l(0,p,new A.aC(null,null,s))}s=this.a
r=document
r.toString
o=t.h2.a(this.gcn())
n=t.V
B.a.j(s,A.X(r,"mousedown",o,!1,n))
B.a.j(s,A.X(r,"mouseup",o,!1,n))
B.a.j(s,A.X(r,"mousemove",o,!1,n))
B.a.j(s,A.X(r,"mouseout",o,!1,n))
B.a.j(s,A.X(r,A.I(A.kI(r)),t.h8.a(o),!1,t.gx))},
G(){var s,r,q,p,o
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.T)(s),++q)s[q].S(0)
B.a.F(s)
for(s=this.b,r=s.gb_(s),p=A.x(r),p=p.h("@<1>").u(p.z[1]),r=new A.aw(J.aR(r.a),r.b,p.h("aw<1,2>")),p=p.z[1];r.A();){o=r.a;(o==null?p.a(o):o).a5(0)}s.F(0)},
co(a){var s,r,q=this
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
switch(r){case"mouseout":q.b.i(0,B.C).j(0,new A.a7(s))
break
case"mousemove":r=q.b
r.i(0,B.k).j(0,new A.a7(s))
if(q.e)r.i(0,B.F).j(0,new A.dV(s))
break
case"mousedown":r=q.b.i(0,B.D)
r.toString
a.button.toString
r.j(0,new A.cC(s))
q.e=!0
r=q.d
r.a=s.a
r.b=s.b
break
case"mouseup":r=q.b.i(0,B.E)
r.toString
a.button.toString
r.j(0,new A.cC(s))
q.e=!1
break
case"wheel":t.gx.a(a)
B.z.gd2(a)
B.z.gd3(a)
q.b.i(0,B.G).j(0,new A.f_(s))
break}}}
A.cc.prototype={
ag(){return"_SensorAction."+this.b}}
A.eE.prototype={
a0(){var s,r,q,p,o=this
for(s=t.ce,r=o.b,q=0;q<2;++q){p=B.Z[q]
r.l(0,p,new A.aC(null,null,s))}s=o.a
r=window
r.toString
B.a.j(s,A.X(r,"devicemotion",t.ax.a(o.gcg()),!1,t.D))
r=window
r.toString
B.a.j(s,A.X(r,"deviceorientation",t.aA.a(o.gcj()),!1,t.W))},
G(){var s,r,q,p,o
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.T)(s),++q)s[q].S(0)
B.a.F(s)
for(s=this.b,r=s.gb_(s),p=A.x(r),p=p.h("@<1>").u(p.z[1]),r=new A.aw(J.aR(r.a),r.b,p.h("aw<1,2>")),p=p.z[1];r.A();){o=r.a;(o==null?p.a(o):o).a5(0)}s.F(0)},
ci(a){var s,r,q,p=t.D.a(a).accelerationIncludingGravity
if(p==null||p.x==null)return
s=A.du(p.x)
r=Math.atan2(s,s)
q=Math.atan2(s,s)
A.c2(new A.P(0,1,0),r)
A.c2(new A.P(1,0,0),q)},
ck(a){var s,r,q
t.W.a(a)
if(a.alpha==null)return
s=A.c2(new A.P(1,0,0),A.du(a.beta)*0.017453292519943295)
r=this.c
if(r==null)r=s
q=s.n(0,new A.aA(-r.a,-r.b,-r.c,r.d))
this.c=s
this.b.i(0,B.l).j(0,new A.bh(q))}}
A.hg.prototype={
aB(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.d,d=e.a,c=d.length
if(8>=c)return A.c(d,8)
s=d[8]
if(9>=c)return A.c(d,9)
r=d[9]
if(10>=c)return A.c(d,10)
q=new A.P(s,r,d[10]).b2(0)
r=d.length
if(0>=r)return A.c(d,0)
s=d[0]
if(1>=r)return A.c(d,1)
c=d[1]
if(2>=r)return A.c(d,2)
p=new A.P(s,c,d[2]).b2(0)
c=d.length
if(4>=c)return A.c(d,4)
s=d[4]
if(5>=c)return A.c(d,5)
r=d[5]
if(6>=c)return A.c(d,6)
d=d[6]
e=e.gW()
c=-e.a
o=-e.b
e=-e.c
d=[p.a,p.b,p.c,s,r,d,q.a,q.b,q.c]
r=d.length
if(0>=r)return A.c(d,0)
s=d[0]
if(3>=r)return A.c(d,3)
n=d[3]
if(6>=r)return A.c(d,6)
m=d[6]
l=d[1]
k=d[4]
if(7>=r)return A.c(d,7)
j=d[7]
i=d[2]
h=d[5]
if(8>=r)return A.c(d,8)
d=A.q([s,n,m,l,k,j,i,h,d[8]],t.n)
h=d.length
if(0>=h)return A.c(d,0)
i=d[0]
if(typeof i!=="number")return i.n()
if(3>=h)return A.c(d,3)
j=d[3]
if(typeof j!=="number")return j.n()
if(6>=h)return A.c(d,6)
k=d[6]
if(typeof k!=="number")return k.n()
l=d[1]
if(typeof l!=="number")return l.n()
m=d[4]
if(typeof m!=="number")return m.n()
if(7>=h)return A.c(d,7)
n=d[7]
if(typeof n!=="number")return n.n()
s=d[2]
if(typeof s!=="number")return s.n()
r=d[5]
if(typeof r!=="number")return r.n()
if(8>=h)return A.c(d,8)
h=d[8]
if(typeof h!=="number")return h.n()
g=f.c
g.sbT(new A.ax(d))
g.sW(new A.ay(i*c+j*o+k*e,l*c+m*o+n*e,s*c+r*o+h*e))
f.a=f.b.n(0,g)}}
A.aU.prototype={}
A.hd.prototype={}
A.hh.prototype={}
A.hB.prototype={}
A.eW.prototype={}
A.hf.prototype={
az(a){var s=this.a,r=s.byteLength
this.a=new Uint16Array(A.bP(B.a.t(B.u.ar(s),B.u.ar(a))))
return new A.hB(a.length,r,5123)},
aw(a){var s=this.b,r=s.byteLength
this.b=new Float32Array(A.bP(B.a.t(B.t.ar(s),B.t.ar(a))))
return new A.eW(r)}}
A.dT.prototype={}
A.e_.prototype={
ce(a,b,c){var s,r,q=this,p=36161
q.c=a
s=a.a.createFramebuffer()
s.toString
q.d=s
if(c){r=q.c.a
s=r.createRenderbuffer()
s.toString
q.e=s
B.b.L(r,36160,q.d)
B.b.bD(r,p,q.e)
s=b.b
r.renderbufferStorage(p,33189,A.t(s.a),A.t(s.b))
B.b.d8(r,36160,36096,p,q.e)
B.b.bD(r,p,null)
B.b.L(r,36160,null)}s=b.b
q.a=A.t(s.a)
q.b=A.t(s.b)},
G(){var s,r=this,q=r.f,p=q.e
if(p!=null){q.a_(p)
p=$.ma()
q.d.a.pixelStorei(37440,1)
s=q.d.a
s.toString
B.b.dn(s,3553,0,6408,6408,5121,p)
q.d.a.pixelStorei(37440,0)
q.b4()}p=q.d.a
p.toString
B.b.d1(p,q.f)
r.f=q.d=q.f=null
q=r.e
if(q!=null){p=r.c.a
p.toString
B.b.d0(p,q)
r.e=null}q=r.c.a
q.toString
B.b.cZ(q,r.d)
r.c=null}}
A.cm.prototype={
aC(a,b,c){var s,r,q,p,o,n=this
n.bZ(a,b,c)
s=n.c.a
s.toString
B.b.L(s,36160,n.d)
s=new A.ii()
s.d=a
r=a.a.createTexture()
r.toString
s.f=r
s.a_(0)
r=n.a
q=n.b
p=new Uint8Array(r*q*4)
o=s.d.a
o.toString
B.b.bW(o,3553,0,6408,r,q,0,6408,5121,p)
s.cb()
s.b4()
n.f=s
p=n.c.a
p.toString
s=s.f
s.toString
B.b.d9(p,36160,36064,3553,s,0)
s=n.c.a
s.toString
B.b.L(s,36160,null)},
D(a,b){return this.aC(a,b,!1)}}
A.c1.prototype={
V(){var s,r,q,p,o,n,m,l=this
for(s=l.c.a,r=s.length,q=l.b.b,p=0;p<s.length;s.length===r||(0,A.T)(s),++p){o=s[p]
n=l.e.a
n.toString
m=o.b
n.vertexAttribPointer(m,o.c,5126,!1,o.d,q+o.e)
l.e.a.enableVertexAttribArray(m)}},
U(){var s,r,q,p,o
for(s=this.c.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.T)(s),++q){p=s[q]
o=this.e.a
o.toString
o.disableVertexAttribArray(p.b)}},
aa(){var s=this.a
this.e.a.drawElements(this.d,s.a,s.c,s.b)}}
A.bJ.prototype={
gbk(){var s=this.a.a
s.toString
return s},
G(){var s=this,r=s.a.a
r.toString
B.b.d_(r,s.b)
r=s.a.a
r.toString
B.b.bK(r,s.c)
r=s.a.a
r.toString
B.b.bK(r,s.d)
s.a=null},
a1(a,b,c){var s,r,q,p,o,n,m=this
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
for(r=c.a,q=r.length,p=0;p<r.length;r.length===q||(0,A.T)(r),++p){o=r[p]
n=m.a.a
n.toString
n.bindAttribLocation(s,o.b,o.a)}m.a.a.linkProgram(s)
if(m.a.a.getProgramParameter(s,35714)==null){s=m.gbk().getProgramInfoLog(s)
s.toString
throw A.b(A.dW("Invalide program\n          "+s+"\n        "))}return s},
b9(a,b){var s,r=this,q=r.a.a.createShader(a)
q.toString
r.a.a.shaderSource(q,b)
r.a.a.compileShader(q)
s=r.a.a.getShaderParameter(q,35713)
s.toString
if(!A.ka(s)){q=r.gbk().getShaderInfoLog(q)
q.toString
throw A.b(A.dW("Invalide shader\n          type:"+a+" "+q+"\n        "))}return q}}
A.ii.prototype={
a_(a){var s
this.e=a
s=this.d.a
s.activeTexture(33984+a)
B.b.bE(s,3553,this.f)},
b4(){var s,r=this.d.a
r.toString
s=this.e
s.toString
r.activeTexture(33984+s)
B.b.bE(r,3553,null)
this.e=null},
b8(a){var s=this,r=3553
s.d.a.texParameteri(r,10240,a)
s.d.a.texParameteri(r,10241,a)
s.d.a.texParameteri(r,10242,33071)
s.d.a.texParameteri(r,10243,33071)},
cb(){return this.b8(9729)}}
A.iq.prototype={
D(a,b){var s,r
this.b=a
s=a.a
s.toString
r=b.b
r.toString
r=s.getUniformLocation(r,this.a)
r.toString
this.c=r}}
A.hq.prototype={}
A.iu.prototype={}
A.hQ.prototype={}
A.hR.prototype={}
A.i5.prototype={}
A.bM.prototype={}
A.i3.prototype={}
A.ix.prototype={
sam(a){var s=this
s.a.enable(3042)
s.a.blendFunc(1,0)
s.a.blendEquation(32774)
s.a.blendColor(0,0,0,0)},
sao(a){if(a==null){this.a.disable(2929)
return}this.a.enable(2929)
this.a.depthFunc(515)},
c5(a,b){var s,r,q,p=this,o=t.z
o=t.cl.a(B.e.av(a,"webgl2",A.ec(["alpha",!1,"antialias",!0,"depth",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],o,o)))
p.a=o
A.nw(b,o)
for(o=b.e,s=o.length,r=0;r<o.length;o.length===s||(0,A.T)(o),++r){q=o[r]
p.a.getExtension(q)}p.a.frontFace(2305)
p.a.pixelStorei(37441,0)},
ab(a){var s,r=this.a
r.toString
s=a.b
r.viewport(0,0,A.t(s.a),A.t(s.b))},
aA(a){this.a.clearColor(a.b,a.c,a.d,a.e)
this.a.clearDepth(a.f)
this.a.clear(16640)}}
A.hi.prototype={}
A.hV.prototype={}
A.i7.prototype={
b6(a,b,c,d){var s,r,q,p=this
if(c!=null){s=p.e
r=t.r.a(c.a)
q=s.b.a
q.toString
B.b.X(q,s.c,!1,r)}if(d!=null){s=p.f
r=t.r.a(d.a)
q=s.b.a
q.toString
B.b.X(q,s.c,!1,r)}if(b!=null){s=p.r
r=t.r.a(A.q([b.a,b.b,b.c,1],t.a))
q=s.b.a
q.toString
B.b.au(q,s.c,r)}if(a!=null){s=p.w
r=t.r.a(a.gbS())
q=s.b.a
q.toString
B.b.au(q,s.c,r)}},
c9(a,b){return this.b6(null,a,b,null)},
c8(a,b){return this.b6(a,null,null,b)}}
A.ih.prototype={}
A.iw.prototype={
b7(a,b,c,d,e,f,g){var s,r,q,p,o,n,m=this
if(e!=null){s=m.e
r=t.r.a(e.a)
q=s.b.a
q.toString
B.b.X(q,s.c,!1,r)}if(g!=null){s=m.f
r=t.r.a(g.a)
q=s.b.a
q.toString
B.b.X(q,s.c,!1,r)}if(d!=null){s=m.r
r=t.r.a(d.a)
q=s.b.a
q.toString
B.b.X(q,s.c,!1,r)}s=f==null
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
B.b.bX(n,o.c,s*r/(q*(p+0.00001)))}},
ca(a,b,c,d){return this.b7(a,b,c,null,null,d,null)},
b5(a,b,c){return this.b7(null,null,null,a,b,null,c)}}
A.H.prototype={}
A.eZ.prototype={
cm(a,b){var s,r
t.j.a(a)
t.dt.a(b)
s=J.mB(a)
r=A.ka(J.mC(s))
this.e=r
if(r)this.c.j(0,s)
else this.d.j(0,s)}}
A.e5.prototype={}
A.ju.prototype={
$1(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a="webglcontextlost"
t.ew.a(a0)
s=$.dB()
if(!A.nx())A.bq(A.dW("WebGL is not available"))
r=s.a
q=r.style
q.position="absolute"
q.width="100%"
q.height="100%"
q.top="0"
q.left="0"
q=A.n0(s.gcl())
s.f=q
q.observe(r)
s.f.takeRecords().toString
q=$.jF()
q.children.toString
q.appendChild(r).toString
q=$.jD()
p=window
p.toString
q.x=B.j.bR(p,q.gba())
p=t.i
q.scQ(A.i9(p))
q.scR(A.i9(p))
$.ks().a0()
p=$.kt()
p.a0()
o=$.kv()
o.a0()
n=J.aE(a0)
m=t.f.a(B.N.cX(0,A.I(n.i(a0,0))))
l=new A.hw()
k=t.N
j=A.ec(["invaders.bin",J.my(A.o9(t.h.a(n.i(a0,1)).response))],k,t.gc)
i=A.ec(["POSITION",0,"NORMAL",1],k,t.S)
k=$.jB()
B.a.j($.F,l.R(0,0,k,m,j,i))
B.a.j($.F,l.R(1,0,k,m,j,i))
B.a.j($.F,l.R(2,0,k,m,j,i))
B.a.j($.F,l.R(3,0,k,m,j,i))
B.a.j($.F,l.R(4,0,k,m,j,i))
B.a.j($.F,l.R(5,0,k,m,j,i))
B.a.j($.F,l.R(6,0,k,m,j,i))
B.a.j($.F,new A.c1(k.az(new Uint16Array(A.bP(A.q([0,1,3,2],t.m)))),k.aw(new Float32Array(A.bP(A.q([0,1,0,0,1,0,1,1],t.n)))),A.k4(),5))
A.mT(3,!1,!1)
m=$.kM
m.toString
h=k.az(m)
m=$.kN
m.toString
B.a.j($.F,new A.c1(h,k.aw(m),new A.bM(A.q([new A.aU("aPositionNormal",0,3,12,0)],t.U)),4))
A.mX()
A.kP()
$.kg=0
m=$.h3()
k=$.ml()
g=1/Math.tan(k.a*0.5)
n=k.d
f=k.c
e=n/(n-f)
n=m.b
d=n.a
B.a.l(d,0,g/k.b)
B.a.l(d,1,0)
B.a.l(d,2,0)
B.a.l(d,3,0)
B.a.l(d,4,0)
B.a.l(d,5,g)
B.a.l(d,6,0)
B.a.l(d,7,0)
B.a.l(d,8,0)
B.a.l(d,9,0)
B.a.l(d,10,-e)
B.a.l(d,11,-1)
B.a.l(d,12,0)
B.a.l(d,13,0)
B.a.l(d,14,-f*e)
B.a.l(d,15,0)
m.a=n.n(0,m.c)
n=m.d
n.sW($.mr())
m.aB()
d=$.mq()
c=A.it(A.is($.ms(),d))
b=A.is(d,c)
f=n.a
B.a.l(f,8,d.a)
B.a.l(f,9,d.b)
B.a.l(f,10,d.c)
B.a.l(f,0,c.a)
B.a.l(f,1,c.b)
B.a.l(f,2,c.c)
B.a.l(f,4,b.a)
B.a.l(f,5,b.b)
B.a.l(f,6,b.c)
m.aB()
m=$.h4()
m.a=n
m.f=B.f.bF(0,0,1)
m=window
m.toString
B.a.j($.a6,A.X(m,"beforeunload",t.gq.a(new A.jp()),!1,t.c9))
m=window
m.toString
B.a.j($.a6,A.X(m,"resize",t.fi.a(new A.jq()),!1,t.A))
m=q.r
m.toString
B.a.j($.a6,new A.a4(m,A.x(m).h("a4<1>")).a7(A.ph()))
q=q.w
q.toString
B.a.j($.a6,new A.a4(q,A.x(q).h("a4<1>")).a7(A.pi()))
p=p.b.i(0,B.k)
p.toString
B.a.j($.a6,new A.a4(p,A.x(p).h("a4<1>")).a7(A.pf()))
o=o.b.i(0,B.l)
o.toString
B.a.j($.a6,new A.a4(o,A.x(o).h("a4<1>")).a7(A.pg()))
o=t.eJ
p=o.h("~(1)?")
o=o.c
B.a.j($.a6,A.X(r,a,p.a(new A.jr()),!1,o))
B.a.j($.a6,A.X(r,a,p.a(new A.js()),!1,o))
s=s.c
B.a.j($.a6,new A.a4(s,A.x(s).h("a4<1>")).a7(new A.jt()))
s=$.kq()
o=t.Z
s.l(0,"Report",A.lX(A.pj(),o))
s.l(0,"Kill",A.lX(A.pe(),o))},
$S:37}
A.jp.prototype={
$1(a){return A.kV()},
$S:5}
A.jq.prototype={
$1(a){return A.l7()},
$S:5}
A.jr.prototype={
$1(a){t.R.a(a)
return A.kJ()},
$S:9}
A.js.prototype={
$1(a){t.R.a(a)
return A.kP()},
$S:9}
A.jt.prototype={
$1(a){return A.l7()},
$S:3}
A.al.prototype={
ag(){return"PrimitiveId."+this.b}};(function aliases(){var s=J.bY.prototype
s.c_=s.m
s=J.bF.prototype
s.c2=s.m
s=A.v.prototype
s.c3=s.m
s=A.b0.prototype
s.c0=s.i
s.c1=s.l
s=A.ca.prototype
s.c4=s.l
s=A.e_.prototype
s.bZ=s.ce})();(function installTearOffs(){var s=hunkHelpers._static_1,r=hunkHelpers._static_0,q=hunkHelpers._static_2,p=hunkHelpers.installInstanceTearOff,o=hunkHelpers._instance_2u,n=hunkHelpers._instance_0u,m=hunkHelpers._instance_1u
s(A,"oO","nz",6)
s(A,"oP","nA",6)
s(A,"oQ","nB",6)
r(A,"m_","oF",0)
s(A,"oR","ou",3)
q(A,"oT","ow",4)
r(A,"oS","ov",0)
p(A.d_.prototype,"gcW",0,1,null,["$2","$1"],["bH","an"],32,0,0)
o(A.J.prototype,"gbj","K",4)
n(A.c8.prototype,"gcC","cD",0)
s(A,"qD","kI",40)
s(A,"pa","lK",41)
m(A.e1.prototype,"gba","cf",27)
m(A.ei.prototype,"gcn","co",33)
var l
m(l=A.eE.prototype,"gcg","ci",34)
m(l,"gcj","ck",35)
r(A,"qG","kG",1)
r(A,"qF","kF",1)
r(A,"qI","l_",1)
s(A,"qH","kZ",43)
r(A,"qK","lb",1)
r(A,"qJ","la",1)
r(A,"qM","lf",1)
r(A,"qL","le",1)
r(A,"qO","ll",1)
r(A,"qN","lk",1)
o(A.eZ.prototype,"gcl","cm",36)
r(A,"pe","kV",0)
r(A,"pj","nq",44)
s(A,"pf","n6",45)
s(A,"pg","n7",46)
s(A,"ph","n8",11)
s(A,"pi","n9",11)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.mixinHard,q=hunkHelpers.inherit,p=hunkHelpers.inheritMany
q(A.v,null)
p(A.v,[A.jW,J.bY,J.br,A.G,A.bc,A.i6,A.f,A.bG,A.aw,A.V,A.c5,A.c_,A.co,A.db,A.e7,A.io,A.hY,A.dk,A.j_,A.y,A.hK,A.cF,A.iG,A.am,A.ff,A.j4,A.j2,A.cl,A.bi,A.c7,A.cZ,A.d_,A.bO,A.J,A.f1,A.bl,A.f6,A.dh,A.c8,A.dt,A.d8,A.e,A.ds,A.dP,A.dR,A.cs,A.iH,A.eu,A.cU,A.iK,A.hr,A.K,A.fF,A.cW,A.hk,A.jR,A.d5,A.k6,A.p,A.cw,A.iy,A.b0,A.hX,A.iX,A.bf,A.im,A.e1,A.cn,A.ht,A.ax,A.be,A.aI,A.ay,A.cR,A.aA,A.P,A.hw,A.bZ,A.a7,A.bh,A.hH,A.ei,A.eE,A.hg,A.aU,A.hd,A.hh,A.hB,A.eW,A.hf,A.dT,A.e_,A.c1,A.bJ,A.ii,A.iq,A.bM,A.i3,A.ix,A.hi,A.hV,A.i7,A.ih,A.iw,A.H,A.eZ,A.e5])
p(J.bY,[J.e6,J.cA,J.a,J.bC,J.bD,J.bB,J.bd])
p(J.a,[J.bF,J.z,A.ej,A.cL,A.d,A.h9,A.j,A.bt,A.aW,A.B,A.f4,A.as,A.hn,A.ho,A.f7,A.cu,A.f9,A.hp,A.fd,A.bW,A.a8,A.hy,A.fh,A.cy,A.bA,A.hC,A.hM,A.hS,A.fn,A.fo,A.a9,A.fp,A.fr,A.aa,A.fv,A.fy,A.ab,A.fz,A.ac,A.fC,A.W,A.fH,A.ij,A.ad,A.fJ,A.ik,A.ir,A.fO,A.fQ,A.fS,A.fU,A.fW,A.cD,A.ai,A.fl,A.ak,A.ft,A.i_,A.fD,A.ao,A.fL,A.hb,A.f2,A.dL,A.e0,A.ex,A.eA,A.cT,A.c4,A.eF,A.eO,A.eS])
p(J.bF,[J.ev,J.bL,J.aH])
q(J.hD,J.z)
p(J.bB,[J.cz,J.e8])
p(A.G,[A.cE,A.b3,A.e9,A.eU,A.f5,A.eC,A.ck,A.fc,A.aS,A.er,A.eV,A.eT,A.bK,A.dQ])
p(A.bc,[A.dN,A.dO,A.eL,A.hE,A.jl,A.jn,A.iC,A.iB,A.hu,A.iP,A.iW,A.id,A.ib,A.ie,A.j1,A.hz,A.hA,A.iI,A.iJ,A.ja,A.hF,A.jc,A.jd,A.jf,A.jg,A.jh,A.jy,A.jz,A.hP,A.hI,A.hJ,A.ju,A.jp,A.jq,A.jr,A.js,A.jt])
p(A.dN,[A.jw,A.iD,A.iE,A.j3,A.iL,A.iS,A.iR,A.iO,A.iN,A.iM,A.iV,A.iU,A.iT,A.ic,A.ia,A.ig,A.iF,A.iZ,A.j8,A.je,A.j0])
p(A.f,[A.k,A.bH,A.da])
p(A.k,[A.aj,A.av,A.d7])
q(A.cv,A.bH)
p(A.aj,[A.b2,A.fk])
q(A.ce,A.c_)
q(A.cY,A.ce)
q(A.cp,A.cY)
q(A.cq,A.co)
p(A.dO,[A.i0,A.jm,A.hv,A.iQ,A.j7,A.hO,A.hW,A.hT,A.hU,A.i4,A.i8,A.iA,A.jj,A.hc,A.hs,A.i2,A.hx])
q(A.cP,A.b3)
p(A.eL,[A.eI,A.bU])
q(A.f0,A.ck)
p(A.y,[A.b_,A.d6,A.fj])
p(A.cL,[A.ek,A.c0])
p(A.c0,[A.dd,A.df])
q(A.de,A.dd)
q(A.cJ,A.de)
q(A.dg,A.df)
q(A.cK,A.dg)
p(A.cJ,[A.cI,A.el])
p(A.cK,[A.em,A.en,A.eo,A.cM,A.ep,A.cN,A.eq])
q(A.dn,A.fc)
p(A.bi,[A.cd,A.d4])
q(A.d0,A.cd)
q(A.a4,A.d0)
q(A.d1,A.c7)
q(A.aD,A.d1)
q(A.aC,A.cZ)
q(A.bN,A.d_)
q(A.d2,A.bl)
q(A.fx,A.dt)
q(A.d9,A.d6)
q(A.ea,A.dP)
q(A.hG,A.dR)
p(A.aS,[A.c3,A.e4])
p(A.d,[A.r,A.dY,A.bX,A.bz,A.a2,A.di,A.a3,A.U,A.dl,A.eY,A.bk,A.aM,A.dK,A.bb])
p(A.r,[A.i,A.aG,A.aZ])
q(A.n,A.i)
p(A.n,[A.dG,A.dH,A.bu,A.bV,A.dZ,A.e3,A.bI,A.eD])
p(A.j,[A.bs,A.aX,A.aY,A.aL,A.az,A.aV])
q(A.hj,A.aW)
q(A.cr,A.f4)
p(A.as,[A.hl,A.hm])
q(A.f8,A.f7)
q(A.ct,A.f8)
q(A.fa,A.f9)
q(A.dU,A.fa)
q(A.a_,A.bt)
q(A.fe,A.fd)
q(A.dX,A.fe)
q(A.fi,A.fh)
q(A.by,A.fi)
q(A.au,A.bz)
p(A.aL,[A.b1,A.a0])
q(A.ef,A.fn)
q(A.eg,A.fo)
q(A.fq,A.fp)
q(A.eh,A.fq)
q(A.fs,A.fr)
q(A.cO,A.fs)
q(A.fw,A.fv)
q(A.ew,A.fw)
q(A.eB,A.fy)
q(A.dj,A.di)
q(A.eG,A.dj)
q(A.fA,A.fz)
q(A.eH,A.fA)
q(A.eJ,A.fC)
q(A.fI,A.fH)
q(A.eM,A.fI)
q(A.dm,A.dl)
q(A.eN,A.dm)
q(A.fK,A.fJ)
q(A.eP,A.fK)
q(A.eX,A.bI)
q(A.bj,A.a0)
q(A.fP,A.fO)
q(A.f3,A.fP)
q(A.d3,A.cu)
q(A.fR,A.fQ)
q(A.fg,A.fR)
q(A.fT,A.fS)
q(A.dc,A.fT)
q(A.fV,A.fU)
q(A.fB,A.fV)
q(A.fX,A.fW)
q(A.fG,A.fX)
q(A.fb,A.d4)
q(A.iz,A.iy)
p(A.b0,[A.cB,A.ca])
q(A.bE,A.ca)
q(A.fm,A.fl)
q(A.eb,A.fm)
q(A.fu,A.ft)
q(A.es,A.fu)
q(A.fE,A.fD)
q(A.eK,A.fE)
q(A.fM,A.fL)
q(A.eQ,A.fM)
q(A.dJ,A.f2)
q(A.et,A.bb)
q(A.h8,A.im)
q(A.il,A.ax)
q(A.aB,A.be)
p(A.a7,[A.cC,A.dV,A.f_])
p(A.iH,[A.cb,A.aN,A.cc,A.al])
q(A.cm,A.e_)
p(A.iq,[A.hq,A.iu,A.hQ,A.hR,A.i5])
s(A.dd,A.e)
s(A.de,A.V)
s(A.df,A.e)
s(A.dg,A.V)
s(A.ce,A.ds)
s(A.f4,A.hk)
s(A.f7,A.e)
s(A.f8,A.p)
s(A.f9,A.e)
s(A.fa,A.p)
s(A.fd,A.e)
s(A.fe,A.p)
s(A.fh,A.e)
s(A.fi,A.p)
s(A.fn,A.y)
s(A.fo,A.y)
s(A.fp,A.e)
s(A.fq,A.p)
s(A.fr,A.e)
s(A.fs,A.p)
s(A.fv,A.e)
s(A.fw,A.p)
s(A.fy,A.y)
s(A.di,A.e)
s(A.dj,A.p)
s(A.fz,A.e)
s(A.fA,A.p)
s(A.fC,A.y)
s(A.fH,A.e)
s(A.fI,A.p)
s(A.dl,A.e)
s(A.dm,A.p)
s(A.fJ,A.e)
s(A.fK,A.p)
s(A.fO,A.e)
s(A.fP,A.p)
s(A.fQ,A.e)
s(A.fR,A.p)
s(A.fS,A.e)
s(A.fT,A.p)
s(A.fU,A.e)
s(A.fV,A.p)
s(A.fW,A.e)
s(A.fX,A.p)
r(A.ca,A.e)
s(A.fl,A.e)
s(A.fm,A.p)
s(A.ft,A.e)
s(A.fu,A.p)
s(A.fD,A.e)
s(A.fE,A.p)
s(A.fL,A.e)
s(A.fM,A.p)
s(A.f2,A.y)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{h:"int",w:"double",M:"num",o:"String",ji:"bool",K:"Null",l:"List"},mangledNames:{},types:["~()","o()","~(o,@)","~(@)","~(v,an)","~(j)","~(~())","@(@)","K()","~(aV)","~(b1)","~(w)","K(@)","K(~)","~(v?,v?)","at<K>()","o(au)","~(az)","~(o,o)","@(o)","@(@,@)","J<@>(@)","~(@,@)","~(c6,@)","cB(@)","bE<@>(@)","b0(@)","~(M)","w(M,w)","w(h,h,w)","w(h,h)","K(v,an)","~(v[an?])","~(a0)","~(aX)","~(aY)","~(l<@>,bA)","K(l<v>)","@(@,o)","K(@,@)","o(d)","v?(@)","K(~())","o(h)","@()","~(a7)","~(bh)","@(v?)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti")}
A.nW(v.typeUniverse,JSON.parse('{"ev":"bF","bL":"bF","aH":"bF","pq":"j","pD":"j","ps":"bb","pr":"d","pJ":"d","pM":"d","pI":"i","q2":"az","pu":"n","pN":"r","pC":"r","pF":"aZ","q_":"U","px":"aL","pB":"aM","pw":"aG","pO":"aG","pK":"a0","pH":"bz","pG":"by","py":"B","pz":"W","pt":"bI","e6":{"ji":[],"C":[]},"cA":{"K":[],"C":[]},"z":{"l":["1"],"k":["1"],"f":["1"]},"hD":{"z":["1"],"l":["1"],"k":["1"],"f":["1"]},"br":{"ah":["1"]},"bB":{"w":[],"M":[]},"cz":{"w":[],"h":[],"M":[],"C":[]},"e8":{"w":[],"M":[],"C":[]},"bd":{"o":[],"C":[]},"cE":{"G":[]},"k":{"f":["1"]},"aj":{"k":["1"],"f":["1"]},"bG":{"ah":["1"]},"bH":{"f":["2"],"f.E":"2"},"cv":{"bH":["1","2"],"k":["2"],"f":["2"],"f.E":"2"},"aw":{"ah":["2"]},"b2":{"aj":["2"],"k":["2"],"f":["2"],"aj.E":"2","f.E":"2"},"c5":{"c6":[]},"cp":{"cY":["1","2"],"ce":["1","2"],"c_":["1","2"],"ds":["1","2"],"N":["1","2"]},"co":{"N":["1","2"]},"cq":{"co":["1","2"],"N":["1","2"]},"da":{"f":["1"],"f.E":"1"},"db":{"ah":["1"]},"e7":{"kQ":[]},"cP":{"b3":[],"G":[]},"e9":{"G":[]},"eU":{"G":[]},"dk":{"an":[]},"bc":{"bw":[]},"dN":{"bw":[]},"dO":{"bw":[]},"eL":{"bw":[]},"eI":{"bw":[]},"bU":{"bw":[]},"f5":{"G":[]},"eC":{"G":[]},"f0":{"G":[]},"b_":{"y":["1","2"],"kW":["1","2"],"N":["1","2"],"y.K":"1","y.V":"2"},"av":{"k":["1"],"f":["1"],"f.E":"1"},"cF":{"ah":["1"]},"ej":{"C":[]},"cL":{"O":[]},"ek":{"O":[],"C":[]},"c0":{"u":["1"],"O":[]},"cJ":{"e":["w"],"l":["w"],"u":["w"],"k":["w"],"O":[],"f":["w"],"V":["w"]},"cK":{"e":["h"],"l":["h"],"u":["h"],"k":["h"],"O":[],"f":["h"],"V":["h"]},"cI":{"e":["w"],"jS":[],"l":["w"],"u":["w"],"k":["w"],"O":[],"f":["w"],"V":["w"],"C":[],"e.E":"w"},"el":{"e":["w"],"l":["w"],"u":["w"],"k":["w"],"O":[],"f":["w"],"V":["w"],"C":[],"e.E":"w"},"em":{"e":["h"],"l":["h"],"u":["h"],"k":["h"],"O":[],"f":["h"],"V":["h"],"C":[],"e.E":"h"},"en":{"e":["h"],"l":["h"],"u":["h"],"k":["h"],"O":[],"f":["h"],"V":["h"],"C":[],"e.E":"h"},"eo":{"e":["h"],"l":["h"],"u":["h"],"k":["h"],"O":[],"f":["h"],"V":["h"],"C":[],"e.E":"h"},"cM":{"e":["h"],"k2":[],"l":["h"],"u":["h"],"k":["h"],"O":[],"f":["h"],"V":["h"],"C":[],"e.E":"h"},"ep":{"e":["h"],"l":["h"],"u":["h"],"k":["h"],"O":[],"f":["h"],"V":["h"],"C":[],"e.E":"h"},"cN":{"e":["h"],"l":["h"],"u":["h"],"k":["h"],"O":[],"f":["h"],"V":["h"],"C":[],"e.E":"h"},"eq":{"e":["h"],"eR":[],"l":["h"],"u":["h"],"k":["h"],"O":[],"f":["h"],"V":["h"],"C":[],"e.E":"h"},"fc":{"G":[]},"dn":{"b3":[],"G":[]},"J":{"at":["1"]},"cl":{"G":[]},"a4":{"d0":["1"],"cd":["1"],"bi":["1"]},"aD":{"d1":["1"],"c7":["1"],"aK":["1"],"bm":["1"]},"cZ":{"cV":["1"],"lz":["1"],"bm":["1"]},"aC":{"cZ":["1"],"cV":["1"],"lz":["1"],"bm":["1"]},"bN":{"d_":["1"]},"d0":{"cd":["1"],"bi":["1"]},"d1":{"c7":["1"],"aK":["1"],"bm":["1"]},"c7":{"aK":["1"],"bm":["1"]},"cd":{"bi":["1"]},"d2":{"bl":["1"]},"f6":{"bl":["@"]},"c8":{"aK":["1"]},"dt":{"ln":[]},"fx":{"dt":[],"ln":[]},"d6":{"y":["1","2"],"N":["1","2"]},"d9":{"d6":["1","2"],"y":["1","2"],"N":["1","2"],"y.K":"1","y.V":"2"},"d7":{"k":["1"],"f":["1"],"f.E":"1"},"d8":{"ah":["1"]},"y":{"N":["1","2"]},"c_":{"N":["1","2"]},"cY":{"ce":["1","2"],"c_":["1","2"],"ds":["1","2"],"N":["1","2"]},"fj":{"y":["o","@"],"N":["o","@"],"y.K":"o","y.V":"@"},"fk":{"aj":["o"],"k":["o"],"f":["o"],"aj.E":"o","f.E":"o"},"ea":{"dP":["v?","o"]},"w":{"M":[]},"h":{"M":[]},"l":{"k":["1"],"f":["1"]},"ck":{"G":[]},"b3":{"G":[]},"aS":{"G":[]},"c3":{"G":[]},"e4":{"G":[]},"er":{"G":[]},"eV":{"G":[]},"eT":{"G":[]},"bK":{"G":[]},"dQ":{"G":[]},"eu":{"G":[]},"cU":{"G":[]},"fF":{"an":[]},"bs":{"j":[]},"aX":{"j":[]},"aY":{"j":[]},"a_":{"bt":[]},"bX":{"d":[]},"au":{"d":[]},"b1":{"j":[]},"a0":{"j":[]},"r":{"d":[]},"az":{"j":[]},"a2":{"d":[]},"a3":{"d":[]},"U":{"d":[]},"bj":{"a0":[],"j":[]},"n":{"i":[],"r":[],"d":[]},"dG":{"i":[],"r":[],"d":[]},"dH":{"i":[],"r":[],"d":[]},"bu":{"i":[],"r":[],"d":[],"dM":[]},"aG":{"r":[],"d":[]},"bV":{"i":[],"r":[],"d":[]},"aZ":{"r":[],"d":[]},"ct":{"e":["aJ<M>"],"p":["aJ<M>"],"l":["aJ<M>"],"u":["aJ<M>"],"k":["aJ<M>"],"f":["aJ<M>"],"p.E":"aJ<M>","e.E":"aJ<M>"},"cu":{"aJ":["M"]},"dU":{"e":["o"],"p":["o"],"l":["o"],"u":["o"],"k":["o"],"f":["o"],"p.E":"o","e.E":"o"},"i":{"r":[],"d":[]},"dX":{"e":["a_"],"p":["a_"],"l":["a_"],"u":["a_"],"k":["a_"],"f":["a_"],"p.E":"a_","e.E":"a_"},"dY":{"d":[]},"dZ":{"i":[],"r":[],"d":[]},"by":{"e":["r"],"p":["r"],"l":["r"],"u":["r"],"k":["r"],"f":["r"],"p.E":"r","e.E":"r"},"bz":{"d":[]},"e3":{"i":[],"r":[],"d":[],"dM":[]},"bI":{"i":[],"r":[],"d":[]},"ef":{"y":["o","@"],"N":["o","@"],"y.K":"o","y.V":"@"},"eg":{"y":["o","@"],"N":["o","@"],"y.K":"o","y.V":"@"},"eh":{"e":["a9"],"p":["a9"],"l":["a9"],"u":["a9"],"k":["a9"],"f":["a9"],"p.E":"a9","e.E":"a9"},"cO":{"e":["r"],"p":["r"],"l":["r"],"u":["r"],"k":["r"],"f":["r"],"p.E":"r","e.E":"r"},"ew":{"e":["aa"],"p":["aa"],"l":["aa"],"u":["aa"],"k":["aa"],"f":["aa"],"p.E":"aa","e.E":"aa"},"eB":{"y":["o","@"],"N":["o","@"],"y.K":"o","y.V":"@"},"eD":{"i":[],"r":[],"d":[]},"eG":{"e":["a2"],"p":["a2"],"l":["a2"],"d":[],"u":["a2"],"k":["a2"],"f":["a2"],"p.E":"a2","e.E":"a2"},"eH":{"e":["ab"],"p":["ab"],"l":["ab"],"u":["ab"],"k":["ab"],"f":["ab"],"p.E":"ab","e.E":"ab"},"eJ":{"y":["o","o"],"N":["o","o"],"y.K":"o","y.V":"o"},"eM":{"e":["U"],"p":["U"],"l":["U"],"u":["U"],"k":["U"],"f":["U"],"p.E":"U","e.E":"U"},"eN":{"e":["a3"],"p":["a3"],"l":["a3"],"d":[],"u":["a3"],"k":["a3"],"f":["a3"],"p.E":"a3","e.E":"a3"},"eP":{"e":["ad"],"p":["ad"],"l":["ad"],"u":["ad"],"k":["ad"],"f":["ad"],"p.E":"ad","e.E":"ad"},"aL":{"j":[]},"eX":{"i":[],"r":[],"d":[],"dM":[]},"eY":{"d":[]},"bk":{"d":[]},"aM":{"d":[]},"f3":{"e":["B"],"p":["B"],"l":["B"],"u":["B"],"k":["B"],"f":["B"],"p.E":"B","e.E":"B"},"d3":{"aJ":["M"]},"fg":{"e":["a8?"],"p":["a8?"],"l":["a8?"],"u":["a8?"],"k":["a8?"],"f":["a8?"],"p.E":"a8?","e.E":"a8?"},"dc":{"e":["r"],"p":["r"],"l":["r"],"u":["r"],"k":["r"],"f":["r"],"p.E":"r","e.E":"r"},"fB":{"e":["ac"],"p":["ac"],"l":["ac"],"u":["ac"],"k":["ac"],"f":["ac"],"p.E":"ac","e.E":"ac"},"fG":{"e":["W"],"p":["W"],"l":["W"],"u":["W"],"k":["W"],"f":["W"],"p.E":"W","e.E":"W"},"d4":{"bi":["1"]},"fb":{"d4":["1"],"bi":["1"]},"d5":{"aK":["1"]},"cw":{"ah":["1"]},"bE":{"e":["1"],"l":["1"],"k":["1"],"f":["1"],"e.E":"1"},"eb":{"e":["ai"],"p":["ai"],"l":["ai"],"k":["ai"],"f":["ai"],"p.E":"ai","e.E":"ai"},"es":{"e":["ak"],"p":["ak"],"l":["ak"],"k":["ak"],"f":["ak"],"p.E":"ak","e.E":"ak"},"eK":{"e":["o"],"p":["o"],"l":["o"],"k":["o"],"f":["o"],"p.E":"o","e.E":"o"},"eQ":{"e":["ao"],"p":["ao"],"l":["ao"],"k":["ao"],"f":["ao"],"p.E":"ao","e.E":"ao"},"dJ":{"y":["o","@"],"N":["o","@"],"y.K":"o","y.V":"@"},"dK":{"d":[]},"bb":{"d":[]},"et":{"d":[]},"aV":{"j":[]},"il":{"ax":[]},"aB":{"be":[]},"cC":{"a7":[]},"dV":{"a7":[]},"f_":{"a7":[]},"mH":{"O":[]},"n_":{"l":["h"],"k":["h"],"f":["h"],"O":[]},"eR":{"l":["h"],"k":["h"],"f":["h"],"O":[]},"nv":{"l":["h"],"k":["h"],"f":["h"],"O":[]},"mY":{"l":["h"],"k":["h"],"f":["h"],"O":[]},"k2":{"l":["h"],"k":["h"],"f":["h"],"O":[]},"mZ":{"l":["h"],"k":["h"],"f":["h"],"O":[]},"nu":{"l":["h"],"k":["h"],"f":["h"],"O":[]},"jS":{"l":["w"],"k":["w"],"f":["w"],"O":[]},"mR":{"l":["w"],"k":["w"],"f":["w"],"O":[]}}'))
A.nV(v.typeUniverse,JSON.parse('{"k":1,"c0":1,"bl":1,"dR":2,"ca":1}'))
var u={c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type"}
var t=(function rtii(){var s=A.S
return{a7:s("@<~>"),t:s("cl"),cQ:s("aU"),c9:s("bs"),fK:s("bt"),gA:s("bu"),gF:s("cp<c6,@>"),R:s("aV"),g5:s("B"),cE:s("a7"),D:s("aX"),W:s("aY"),e5:s("aZ"),gw:s("k<@>"),e:s("G"),A:s("j"),aS:s("d"),c8:s("a_"),Z:s("bw"),b9:s("at<@>"),h:s("au"),gb:s("cy"),dt:s("bA"),B:s("kQ"),k:s("f<@>"),U:s("z<aU>"),aJ:s("z<at<v>>"),d:s("z<aK<@>>"),s:s("z<o>"),n:s("z<w>"),b:s("z<@>"),m:s("z<h>"),a:s("z<M>"),T:s("cA"),x:s("aH"),aU:s("u<@>"),am:s("bE<@>"),eo:s("b_<c6,@>"),dz:s("cD"),g:s("b1"),bG:s("ai"),ew:s("l<v>"),j:s("l<@>"),r:s("l<M>"),aH:s("N<o,eR>"),g6:s("N<o,h>"),f:s("N<@,@>"),gU:s("ax"),w:s("be"),cI:s("a9"),V:s("a0"),G:s("r"),P:s("K"),eq:s("ak"),K:s("v"),he:s("aa"),E:s("aI"),eU:s("ay"),J:s("bf<M>"),gZ:s("az"),L:s("aA"),gT:s("pL"),q:s("aJ<M>"),cl:s("c4"),as:s("bh"),fY:s("a2"),f7:s("ab"),gf:s("ac"),l:s("an"),N:s("o"),gn:s("W"),fo:s("c6"),a0:s("a3"),c7:s("U"),aK:s("ad"),cM:s("ao"),dm:s("C"),eK:s("b3"),Q:s("O"),gc:s("eR"),ak:s("bL"),cW:s("P"),gx:s("bj"),g4:s("bk"),g2:s("aM"),er:s("aC<a7>"),bl:s("aC<bZ>"),ce:s("aC<bh>"),bj:s("bN<au>"),eJ:s("fb<aV>"),ao:s("J<au>"),ck:s("J<K>"),c:s("J<@>"),fJ:s("J<h>"),cd:s("J<~>"),dx:s("d9<@,@>"),y:s("ji"),al:s("ji(v)"),i:s("w"),z:s("@"),O:s("@()"),v:s("@(v)"),C:s("@(v,an)"),b8:s("@(@,@)"),S:s("h"),aw:s("0&*"),_:s("v*"),eH:s("at<K>?"),g7:s("a8?"),bM:s("l<@>?"),X:s("v?"),eV:s("cT?"),gO:s("an?"),I:s("cV<w>?"),ev:s("bl<@>?"),F:s("bO<@,@>?"),o:s("@(j)?"),Y:s("~()?"),gq:s("~(bs)?"),ax:s("~(aX)?"),aA:s("~(aY)?"),fi:s("~(j)?"),eN:s("~(b1)?"),h2:s("~(a0)?"),dB:s("~(az)?"),h8:s("~(bj)?"),H:s("M"),p:s("~"),M:s("~()"),cZ:s("~(bW,bW,bX)"),d5:s("~(v)"),da:s("~(v,an)"),eA:s("~(o,o)"),u:s("~(o,@)"),c4:s("~(M)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.e=A.bu.prototype
B.S=A.au.prototype
B.T=J.bY.prototype
B.a=J.z.prototype
B.f=J.cz.prototype
B.c=J.bB.prototype
B.p=J.bd.prototype
B.U=J.aH.prototype
B.V=J.a.prototype
B.t=A.cI.prototype
B.u=A.cM.prototype
B.v=J.ev.prototype
B.b=A.c4.prototype
B.i=J.bL.prototype
B.z=A.bj.prototype
B.j=A.bk.prototype
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

B.N=new A.ea()
B.O=new A.eu()
B.ak=new A.i6()
B.P=new A.f6()
B.Q=new A.iX()
B.o=new A.j_()
B.d=new A.fx()
B.R=new A.fF()
B.al=new A.cn(0,0,0,1)
B.W=new A.hG(null)
B.w=new A.al(0,"octopus")
B.a0=new A.al(1,"octopusAlt")
B.x=new A.al(2,"crab")
B.a1=new A.al(3,"crabAlt")
B.y=new A.al(4,"medusa")
B.a2=new A.al(5,"medusaAlt")
B.a3=new A.al(6,"boss")
B.a4=new A.al(7,"quad")
B.a5=new A.al(8,"sphere")
B.h=A.q(s([B.w,B.a0,B.x,B.a1,B.y,B.a2,B.a3,B.a4,B.a5]),A.S("z<al>"))
B.C=new A.aN(0,"out")
B.D=new A.aN(1,"down")
B.E=new A.aN(2,"up")
B.k=new A.aN(3,"move")
B.F=new A.aN(4,"drag")
B.G=new A.aN(5,"wheel")
B.X=A.q(s([B.C,B.D,B.E,B.k,B.F,B.G]),A.S("z<aN>"))
B.A=new A.cb(0,"down")
B.B=new A.cb(1,"up")
B.Y=A.q(s([B.A,B.B]),A.S("z<cb>"))
B.aj=new A.cc(0,"motion")
B.l=new A.cc(1,"orientation")
B.Z=A.q(s([B.aj,B.l]),A.S("z<cc>"))
B.q=A.q(s([]),t.b)
B.a_={}
B.r=new A.cq(B.a_,[],A.S("cq<c6,@>"))
B.a6=new A.c5("call")
B.a7=A.aF("pv")
B.a8=A.aF("mH")
B.a9=A.aF("jS")
B.aa=A.aF("mR")
B.ab=A.aF("mY")
B.ac=A.aF("mZ")
B.ad=A.aF("n_")
B.ae=A.aF("v")
B.af=A.aF("k2")
B.ag=A.aF("nu")
B.ah=A.aF("nv")
B.ai=A.aF("eR")})();(function staticFields(){$.iY=null
$.ae=A.q([],A.S("z<v>"))
$.l3=null
$.kC=null
$.kB=null
$.m3=null
$.lY=null
$.m8=null
$.jk=null
$.jo=null
$.kk=null
$.cg=null
$.dv=null
$.dw=null
$.kf=!1
$.E=B.d
$.k5=null
$.A=A.q([],A.S("z<H>"))
$.cx=A.q([],A.S("z<H>"))
$.bx=A.q([],A.S("z<ay>"))
$.e2=A.q([],t.m)
$.jV=A.q([],t.n)
$.jU=A.cG(t.N,t.S)
$.mU=!1
$.mV=!1
$.kM=null
$.kN=null
$.a6=A.q([],t.d)
$.F=A.q([],A.S("z<c1>"))
$.ap=A.q([],A.S("z<e5>"))
$.kg=-1})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"pA","h2",()=>A.m2("_$dart_dartClosure"))
s($,"qE","jL",()=>B.d.bU(new A.jw(),A.S("at<K>")))
s($,"pQ","mb",()=>A.b4(A.ip({
toString:function(){return"$receiver$"}})))
s($,"pR","mc",()=>A.b4(A.ip({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"pS","md",()=>A.b4(A.ip(null)))
s($,"pT","me",()=>A.b4(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"pW","mh",()=>A.b4(A.ip(void 0)))
s($,"pX","mi",()=>A.b4(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"pV","mg",()=>A.b4(A.lh(null)))
s($,"pU","mf",()=>A.b4(function(){try{null.$method$}catch(q){return q.message}}()))
s($,"pZ","mk",()=>A.b4(A.lh(void 0)))
s($,"pY","mj",()=>A.b4(function(){try{(void 0).$method$}catch(q){return q.message}}()))
s($,"q0","ko",()=>A.ny())
s($,"pE","jA",()=>t.ck.a($.jL()))
s($,"qk","mm",()=>A.jx(B.ae))
s($,"qf","kq",()=>A.o7(A.kh(self)))
s($,"q1","kp",()=>A.m2("_$dart_dartObject"))
s($,"qg","kr",()=>function DartObject(a){this.o=a})
s($,"pP","ma",()=>A.jO(1,1))
s($,"qj","ml",()=>new A.ht(1.0471975511965976,1,0.1,100))
s($,"qa","dA",()=>A.nl(0,0,1024,1024))
s($,"qA","mr",()=>A.l2(0,0,0))
s($,"qn","mn",()=>A.l2(0,0,0))
s($,"qz","mq",()=>A.it(A.li(0,0,-1)))
s($,"qB","ms",()=>A.it(A.li(0,1,0)))
s($,"qo","jF",()=>A.S("bV").a(A.oX().querySelector("#real-t-demo-motion-blur")))
s($,"qe","dB",()=>{var q,p=A.jO(null,null)
A.hZ()
q=t.z
return new A.eZ(p,new A.cR(A.hZ()),A.i9(q),A.i9(q))})
s($,"qi","jD",()=>new A.e1(A.hL(20,0,!0,t.i)))
s($,"qm","ks",()=>new A.hH(A.q([],t.d),A.cG(A.S("cb"),A.S("cV<bZ>"))))
s($,"qr","kt",()=>new A.ei(A.q([],t.d),A.cG(A.S("aN"),A.S("cV<a7>")),A.hZ(),A.hZ()))
s($,"qw","kv",()=>new A.eE(A.q([],t.d),A.cG(A.S("cc"),A.S("cV<bh>"))))
s($,"qc","h3",()=>new A.hg(A.ee(),A.ee(),A.k1(),A.k1()))
s($,"qd","h4",()=>new A.h8(A.lj(),A.lj(),A.cS(),A.cS()))
s($,"qt","bT",()=>new A.ix())
s($,"qb","jB",()=>new A.hf(new Uint16Array(A.lH(0)),new Float32Array(A.lH(0))))
s($,"qu","dC",()=>new A.cm())
s($,"qx","dD",()=>new A.cm())
s($,"qp","jG",()=>new A.cm())
s($,"qh","jC",()=>{var q=A.iv("uColor"),p=A.cH("uPvwlTransform")
return new A.hi(A.lm(),new A.bJ(),q,p)})
s($,"ql","jE",()=>{var q=A.cH("uPvTransform"),p=A.cH("uWlTransform"),o=A.iv("uLightPosition"),n=A.iv("uLightColor")
return new A.i7(new A.bM(A.q([A.kz("aPosition",0,3,24,0),A.kz("aNormal",1,3,24,12)],t.U)),new A.bJ(),q,p,o,n)})
s($,"qy","jK",()=>{var q=A.cH("uPvwlTransform"),p=A.cH("uTpvwlTransform"),o=A.cH("uPreviousTpvwlTransform"),n=A.kK("uViewScale")
return new A.iw(A.lm(),new A.bJ(),q,p,o,n)})
s($,"qq","jH",()=>{var q=A.kY("uPvwlTransform"),p=A.k0("uColorSampler"),o=A.k0("uVelocitySampler"),n=A.iv("uViewBound"),m=A.kK("uStep")
return new A.hV(A.k4(),new A.bJ(),q,p,o,n,m)})
s($,"qv","jI",()=>{var q=A.k0("uSampler"),p=A.kY("uPvwlTransform")
return new A.ih(A.k4(),new A.bJ(),q,p)})
r($,"oE","mp",()=>new A.ax(A.q([1,0,0,0,1,0,0,0,1],t.n)))
r($,"oM","mt",()=>A.ee())
r($,"oJ","jJ",()=>A.ee())
r($,"oy","ku",()=>A.ee())
r($,"oa","h5",()=>A.k1())
s($,"qs","mo",()=>B.Q)})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({WebGL:J.bY,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,webkitFileSystemDirectoryEntry:J.a,FileSystemDirectoryEntry:J.a,DirectoryReader:J.a,WebKitDirectoryReader:J.a,webkitFileSystemDirectoryReader:J.a,FileSystemDirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,webkitFileSystemEntry:J.a,FileSystemEntry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,webkitFileSystemFileEntry:J.a,FileSystemFileEntry:J.a,DOMFileSystem:J.a,WebKitFileSystem:J.a,webkitFileSystem:J.a,FileSystem:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,GeolocationPosition:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,GeolocationPositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL2RenderingContextBase:J.a,ArrayBuffer:A.ej,ArrayBufferView:A.cL,DataView:A.ek,Float32Array:A.cI,Float64Array:A.el,Int16Array:A.em,Int32Array:A.en,Int8Array:A.eo,Uint16Array:A.cM,Uint32Array:A.ep,Uint8ClampedArray:A.cN,CanvasPixelArray:A.cN,Uint8Array:A.eq,HTMLBRElement:A.n,HTMLBaseElement:A.n,HTMLBodyElement:A.n,HTMLButtonElement:A.n,HTMLContentElement:A.n,HTMLDListElement:A.n,HTMLDataElement:A.n,HTMLDataListElement:A.n,HTMLDetailsElement:A.n,HTMLDialogElement:A.n,HTMLEmbedElement:A.n,HTMLFieldSetElement:A.n,HTMLHRElement:A.n,HTMLHeadElement:A.n,HTMLHeadingElement:A.n,HTMLHtmlElement:A.n,HTMLIFrameElement:A.n,HTMLInputElement:A.n,HTMLLIElement:A.n,HTMLLabelElement:A.n,HTMLLegendElement:A.n,HTMLLinkElement:A.n,HTMLMapElement:A.n,HTMLMenuElement:A.n,HTMLMetaElement:A.n,HTMLMeterElement:A.n,HTMLModElement:A.n,HTMLOListElement:A.n,HTMLObjectElement:A.n,HTMLOptGroupElement:A.n,HTMLOptionElement:A.n,HTMLOutputElement:A.n,HTMLParagraphElement:A.n,HTMLParamElement:A.n,HTMLPictureElement:A.n,HTMLPreElement:A.n,HTMLProgressElement:A.n,HTMLQuoteElement:A.n,HTMLScriptElement:A.n,HTMLShadowElement:A.n,HTMLSlotElement:A.n,HTMLSourceElement:A.n,HTMLSpanElement:A.n,HTMLStyleElement:A.n,HTMLTableCaptionElement:A.n,HTMLTableCellElement:A.n,HTMLTableDataCellElement:A.n,HTMLTableHeaderCellElement:A.n,HTMLTableColElement:A.n,HTMLTableElement:A.n,HTMLTableRowElement:A.n,HTMLTableSectionElement:A.n,HTMLTemplateElement:A.n,HTMLTextAreaElement:A.n,HTMLTimeElement:A.n,HTMLTitleElement:A.n,HTMLTrackElement:A.n,HTMLUListElement:A.n,HTMLUnknownElement:A.n,HTMLDirectoryElement:A.n,HTMLFontElement:A.n,HTMLFrameElement:A.n,HTMLFrameSetElement:A.n,HTMLMarqueeElement:A.n,HTMLElement:A.n,AccessibleNodeList:A.h9,HTMLAnchorElement:A.dG,HTMLAreaElement:A.dH,BeforeUnloadEvent:A.bs,Blob:A.bt,HTMLCanvasElement:A.bu,CDATASection:A.aG,CharacterData:A.aG,Comment:A.aG,ProcessingInstruction:A.aG,Text:A.aG,CSSPerspective:A.hj,CSSCharsetRule:A.B,CSSConditionRule:A.B,CSSFontFaceRule:A.B,CSSGroupingRule:A.B,CSSImportRule:A.B,CSSKeyframeRule:A.B,MozCSSKeyframeRule:A.B,WebKitCSSKeyframeRule:A.B,CSSKeyframesRule:A.B,MozCSSKeyframesRule:A.B,WebKitCSSKeyframesRule:A.B,CSSMediaRule:A.B,CSSNamespaceRule:A.B,CSSPageRule:A.B,CSSRule:A.B,CSSStyleRule:A.B,CSSSupportsRule:A.B,CSSViewportRule:A.B,CSSStyleDeclaration:A.cr,MSStyleCSSProperties:A.cr,CSS2Properties:A.cr,CSSImageValue:A.as,CSSKeywordValue:A.as,CSSNumericValue:A.as,CSSPositionValue:A.as,CSSResourceValue:A.as,CSSUnitValue:A.as,CSSURLImageValue:A.as,CSSStyleValue:A.as,CSSMatrixComponent:A.aW,CSSRotation:A.aW,CSSScale:A.aW,CSSSkew:A.aW,CSSTranslation:A.aW,CSSTransformComponent:A.aW,CSSTransformValue:A.hl,CSSUnparsedValue:A.hm,DataTransferItemList:A.hn,DeviceMotionEvent:A.aX,DeviceOrientationEvent:A.aY,HTMLDivElement:A.bV,Document:A.aZ,HTMLDocument:A.aZ,XMLDocument:A.aZ,DOMException:A.ho,ClientRectList:A.ct,DOMRectList:A.ct,DOMRectReadOnly:A.cu,DOMStringList:A.dU,DOMTokenList:A.hp,MathMLElement:A.i,SVGAElement:A.i,SVGAnimateElement:A.i,SVGAnimateMotionElement:A.i,SVGAnimateTransformElement:A.i,SVGAnimationElement:A.i,SVGCircleElement:A.i,SVGClipPathElement:A.i,SVGDefsElement:A.i,SVGDescElement:A.i,SVGDiscardElement:A.i,SVGEllipseElement:A.i,SVGFEBlendElement:A.i,SVGFEColorMatrixElement:A.i,SVGFEComponentTransferElement:A.i,SVGFECompositeElement:A.i,SVGFEConvolveMatrixElement:A.i,SVGFEDiffuseLightingElement:A.i,SVGFEDisplacementMapElement:A.i,SVGFEDistantLightElement:A.i,SVGFEFloodElement:A.i,SVGFEFuncAElement:A.i,SVGFEFuncBElement:A.i,SVGFEFuncGElement:A.i,SVGFEFuncRElement:A.i,SVGFEGaussianBlurElement:A.i,SVGFEImageElement:A.i,SVGFEMergeElement:A.i,SVGFEMergeNodeElement:A.i,SVGFEMorphologyElement:A.i,SVGFEOffsetElement:A.i,SVGFEPointLightElement:A.i,SVGFESpecularLightingElement:A.i,SVGFESpotLightElement:A.i,SVGFETileElement:A.i,SVGFETurbulenceElement:A.i,SVGFilterElement:A.i,SVGForeignObjectElement:A.i,SVGGElement:A.i,SVGGeometryElement:A.i,SVGGraphicsElement:A.i,SVGImageElement:A.i,SVGLineElement:A.i,SVGLinearGradientElement:A.i,SVGMarkerElement:A.i,SVGMaskElement:A.i,SVGMetadataElement:A.i,SVGPathElement:A.i,SVGPatternElement:A.i,SVGPolygonElement:A.i,SVGPolylineElement:A.i,SVGRadialGradientElement:A.i,SVGRectElement:A.i,SVGScriptElement:A.i,SVGSetElement:A.i,SVGStopElement:A.i,SVGStyleElement:A.i,SVGElement:A.i,SVGSVGElement:A.i,SVGSwitchElement:A.i,SVGSymbolElement:A.i,SVGTSpanElement:A.i,SVGTextContentElement:A.i,SVGTextElement:A.i,SVGTextPathElement:A.i,SVGTextPositioningElement:A.i,SVGTitleElement:A.i,SVGUseElement:A.i,SVGViewElement:A.i,SVGGradientElement:A.i,SVGComponentTransferFunctionElement:A.i,SVGFEDropShadowElement:A.i,SVGMPathElement:A.i,Element:A.i,AbortPaymentEvent:A.j,AnimationEvent:A.j,AnimationPlaybackEvent:A.j,ApplicationCacheErrorEvent:A.j,BackgroundFetchClickEvent:A.j,BackgroundFetchEvent:A.j,BackgroundFetchFailEvent:A.j,BackgroundFetchedEvent:A.j,BeforeInstallPromptEvent:A.j,BlobEvent:A.j,CanMakePaymentEvent:A.j,ClipboardEvent:A.j,CloseEvent:A.j,CustomEvent:A.j,ErrorEvent:A.j,ExtendableEvent:A.j,ExtendableMessageEvent:A.j,FetchEvent:A.j,FontFaceSetLoadEvent:A.j,ForeignFetchEvent:A.j,GamepadEvent:A.j,HashChangeEvent:A.j,InstallEvent:A.j,MediaEncryptedEvent:A.j,MediaKeyMessageEvent:A.j,MediaQueryListEvent:A.j,MediaStreamEvent:A.j,MediaStreamTrackEvent:A.j,MessageEvent:A.j,MIDIConnectionEvent:A.j,MIDIMessageEvent:A.j,MutationEvent:A.j,NotificationEvent:A.j,PageTransitionEvent:A.j,PaymentRequestEvent:A.j,PaymentRequestUpdateEvent:A.j,PopStateEvent:A.j,PresentationConnectionAvailableEvent:A.j,PresentationConnectionCloseEvent:A.j,PromiseRejectionEvent:A.j,PushEvent:A.j,RTCDataChannelEvent:A.j,RTCDTMFToneChangeEvent:A.j,RTCPeerConnectionIceEvent:A.j,RTCTrackEvent:A.j,SecurityPolicyViolationEvent:A.j,SensorErrorEvent:A.j,SpeechRecognitionError:A.j,SpeechRecognitionEvent:A.j,SpeechSynthesisEvent:A.j,StorageEvent:A.j,SyncEvent:A.j,TrackEvent:A.j,TransitionEvent:A.j,WebKitTransitionEvent:A.j,VRDeviceEvent:A.j,VRDisplayEvent:A.j,VRSessionEvent:A.j,MojoInterfaceRequestEvent:A.j,USBConnectionEvent:A.j,IDBVersionChangeEvent:A.j,AudioProcessingEvent:A.j,OfflineAudioCompletionEvent:A.j,Event:A.j,InputEvent:A.j,SubmitEvent:A.j,AbsoluteOrientationSensor:A.d,Accelerometer:A.d,AccessibleNode:A.d,AmbientLightSensor:A.d,Animation:A.d,ApplicationCache:A.d,DOMApplicationCache:A.d,OfflineResourceList:A.d,BackgroundFetchRegistration:A.d,BatteryManager:A.d,BroadcastChannel:A.d,CanvasCaptureMediaStreamTrack:A.d,EventSource:A.d,FileReader:A.d,Gyroscope:A.d,LinearAccelerationSensor:A.d,Magnetometer:A.d,MediaDevices:A.d,MediaKeySession:A.d,MediaQueryList:A.d,MediaRecorder:A.d,MediaSource:A.d,MediaStream:A.d,MediaStreamTrack:A.d,MessagePort:A.d,MIDIAccess:A.d,MIDIInput:A.d,MIDIOutput:A.d,MIDIPort:A.d,NetworkInformation:A.d,Notification:A.d,OffscreenCanvas:A.d,OrientationSensor:A.d,PaymentRequest:A.d,Performance:A.d,PermissionStatus:A.d,PresentationAvailability:A.d,PresentationConnection:A.d,PresentationConnectionList:A.d,PresentationRequest:A.d,RelativeOrientationSensor:A.d,RemotePlayback:A.d,RTCDataChannel:A.d,DataChannel:A.d,RTCDTMFSender:A.d,RTCPeerConnection:A.d,webkitRTCPeerConnection:A.d,mozRTCPeerConnection:A.d,ScreenOrientation:A.d,Sensor:A.d,ServiceWorker:A.d,ServiceWorkerContainer:A.d,ServiceWorkerRegistration:A.d,SharedWorker:A.d,SpeechRecognition:A.d,webkitSpeechRecognition:A.d,SpeechSynthesis:A.d,SpeechSynthesisUtterance:A.d,VR:A.d,VRDevice:A.d,VRDisplay:A.d,VRSession:A.d,VisualViewport:A.d,WebSocket:A.d,Worker:A.d,WorkerPerformance:A.d,BluetoothDevice:A.d,BluetoothRemoteGATTCharacteristic:A.d,Clipboard:A.d,MojoInterfaceInterceptor:A.d,USB:A.d,IDBDatabase:A.d,IDBOpenDBRequest:A.d,IDBVersionChangeRequest:A.d,IDBRequest:A.d,IDBTransaction:A.d,AnalyserNode:A.d,RealtimeAnalyserNode:A.d,AudioBufferSourceNode:A.d,AudioDestinationNode:A.d,AudioNode:A.d,AudioScheduledSourceNode:A.d,AudioWorkletNode:A.d,BiquadFilterNode:A.d,ChannelMergerNode:A.d,AudioChannelMerger:A.d,ChannelSplitterNode:A.d,AudioChannelSplitter:A.d,ConstantSourceNode:A.d,ConvolverNode:A.d,DelayNode:A.d,DynamicsCompressorNode:A.d,GainNode:A.d,AudioGainNode:A.d,IIRFilterNode:A.d,MediaElementAudioSourceNode:A.d,MediaStreamAudioDestinationNode:A.d,MediaStreamAudioSourceNode:A.d,OscillatorNode:A.d,Oscillator:A.d,PannerNode:A.d,AudioPannerNode:A.d,webkitAudioPannerNode:A.d,ScriptProcessorNode:A.d,JavaScriptAudioNode:A.d,StereoPannerNode:A.d,WaveShaperNode:A.d,EventTarget:A.d,File:A.a_,FileList:A.dX,FileWriter:A.dY,FontFace:A.bW,FontFaceSet:A.bX,HTMLFormElement:A.dZ,Gamepad:A.a8,History:A.hy,HTMLCollection:A.by,HTMLFormControlsCollection:A.by,HTMLOptionsCollection:A.by,XMLHttpRequest:A.au,XMLHttpRequestUpload:A.bz,XMLHttpRequestEventTarget:A.bz,ImageData:A.cy,HTMLImageElement:A.e3,IntersectionObserver:A.bA,IntersectionObserverEntry:A.hC,KeyboardEvent:A.b1,Location:A.hM,HTMLAudioElement:A.bI,HTMLMediaElement:A.bI,MediaList:A.hS,MIDIInputMap:A.ef,MIDIOutputMap:A.eg,MimeType:A.a9,MimeTypeArray:A.eh,PointerEvent:A.a0,MouseEvent:A.a0,DragEvent:A.a0,DocumentFragment:A.r,ShadowRoot:A.r,Attr:A.r,DocumentType:A.r,Node:A.r,NodeList:A.cO,RadioNodeList:A.cO,Plugin:A.aa,PluginArray:A.ew,ProgressEvent:A.az,ResourceProgressEvent:A.az,RTCStatsReport:A.eB,HTMLSelectElement:A.eD,SourceBuffer:A.a2,SourceBufferList:A.eG,SpeechGrammar:A.ab,SpeechGrammarList:A.eH,SpeechRecognitionResult:A.ac,Storage:A.eJ,CSSStyleSheet:A.W,StyleSheet:A.W,TextTrack:A.a3,TextTrackCue:A.U,VTTCue:A.U,TextTrackCueList:A.eM,TextTrackList:A.eN,TimeRanges:A.ij,Touch:A.ad,TouchList:A.eP,TrackDefaultList:A.ik,CompositionEvent:A.aL,FocusEvent:A.aL,TextEvent:A.aL,TouchEvent:A.aL,UIEvent:A.aL,URL:A.ir,HTMLVideoElement:A.eX,VideoTrackList:A.eY,WheelEvent:A.bj,Window:A.bk,DOMWindow:A.bk,DedicatedWorkerGlobalScope:A.aM,ServiceWorkerGlobalScope:A.aM,SharedWorkerGlobalScope:A.aM,WorkerGlobalScope:A.aM,CSSRuleList:A.f3,ClientRect:A.d3,DOMRect:A.d3,GamepadList:A.fg,NamedNodeMap:A.dc,MozNamedAttrMap:A.dc,SpeechRecognitionResultList:A.fB,StyleSheetList:A.fG,IDBKeyRange:A.cD,SVGLength:A.ai,SVGLengthList:A.eb,SVGNumber:A.ak,SVGNumberList:A.es,SVGPointList:A.i_,SVGStringList:A.eK,SVGTransform:A.ao,SVGTransformList:A.eQ,AudioBuffer:A.hb,AudioParamMap:A.dJ,AudioTrackList:A.dK,AudioContext:A.bb,webkitAudioContext:A.bb,BaseAudioContext:A.bb,OfflineAudioContext:A.et,WebGLBuffer:A.dL,WebGLContextEvent:A.aV,WebGLFramebuffer:A.e0,WebGLProgram:A.ex,WebGLRenderbuffer:A.eA,WebGLRenderingContext:A.cT,WebGL2RenderingContext:A.c4,WebGLShader:A.eF,WebGLTexture:A.eO,WebGLUniformLocation:A.eS})
hunkHelpers.setOrUpdateLeafTags({WebGL:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,webkitFileSystemDirectoryEntry:true,FileSystemDirectoryEntry:true,DirectoryReader:true,WebKitDirectoryReader:true,webkitFileSystemDirectoryReader:true,FileSystemDirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,webkitFileSystemEntry:true,FileSystemEntry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,webkitFileSystemFileEntry:true,FileSystemFileEntry:true,DOMFileSystem:true,WebKitFileSystem:true,webkitFileSystem:true,FileSystem:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,GeolocationPosition:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,GeolocationPositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL2RenderingContextBase:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,BeforeUnloadEvent:true,Blob:false,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,HTMLDivElement:true,Document:true,HTMLDocument:true,XMLDocument:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,MathMLElement:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,Event:false,InputEvent:false,SubmitEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,EventSource:true,FileReader:true,Gyroscope:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerRegistration:true,SharedWorker:true,SpeechRecognition:true,webkitSpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,FontFace:true,FontFaceSet:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,XMLHttpRequest:true,XMLHttpRequestUpload:true,XMLHttpRequestEventTarget:false,ImageData:true,HTMLImageElement:true,IntersectionObserver:true,IntersectionObserverEntry:true,KeyboardEvent:true,Location:true,HTMLAudioElement:true,HTMLMediaElement:false,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,DocumentFragment:true,ShadowRoot:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,ProgressEvent:true,ResourceProgressEvent:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,TouchEvent:true,UIEvent:false,URL:true,HTMLVideoElement:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,DedicatedWorkerGlobalScope:true,ServiceWorkerGlobalScope:true,SharedWorkerGlobalScope:true,WorkerGlobalScope:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,IDBKeyRange:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLContextEvent:true,WebGLFramebuffer:true,WebGLProgram:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true})
A.c0.$nativeSuperclassTag="ArrayBufferView"
A.dd.$nativeSuperclassTag="ArrayBufferView"
A.de.$nativeSuperclassTag="ArrayBufferView"
A.cJ.$nativeSuperclassTag="ArrayBufferView"
A.df.$nativeSuperclassTag="ArrayBufferView"
A.dg.$nativeSuperclassTag="ArrayBufferView"
A.cK.$nativeSuperclassTag="ArrayBufferView"
A.di.$nativeSuperclassTag="EventTarget"
A.dj.$nativeSuperclassTag="EventTarget"
A.dl.$nativeSuperclassTag="EventTarget"
A.dm.$nativeSuperclassTag="EventTarget"})()
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
var s=A.pc
if(typeof dartMainRunner==="function")dartMainRunner(s,[])
else s([])})})()