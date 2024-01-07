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
a[c]=function(){a[c]=function(){A.oU(b)}
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
if(a[b]!==s)A.oW(b)
a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s)convertToFastObject(a[s])}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.k4(b)
return new s(c,this)}:function(){if(s===null)s=A.k4(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.k4(a).prototype
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
k7(a,b,c,d){return{i:a,p:b,e:c,x:d}},
fU(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.k5==null){A.oI()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw A.b(A.jP("Return interceptor for "+A.m(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.iL
if(o==null)o=$.iL=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=A.oP(a)
if(p!=null)return p
if(typeof a=="function")return B.Y
s=Object.getPrototypeOf(a)
if(s==null)return B.B
if(s===Object.prototype)return B.B
if(typeof q=="function"){o=$.iL
if(o==null)o=$.iL=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:B.l,enumerable:false,writable:true,configurable:true})
return B.l}return B.l},
mB(a,b){if(a<0||a>4294967295)throw A.b(A.kK(a,0,4294967295,"length",null))
return J.kA(A.q(new Array(a),b.h("z<0>")),b)},
kz(a,b){if(a<0)throw A.b(A.aM("Length must be a non-negative integer: "+a,null))
return A.q(new Array(a),b.h("z<0>"))},
kA(a,b){a.fixed$length=Array
return a},
b3(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cq.prototype
return J.e0.prototype}if(typeof a=="string")return J.b9.prototype
if(a==null)return J.cr.prototype
if(typeof a=="boolean")return J.dZ.prototype
if(Array.isArray(a))return J.z.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aA.prototype
if(typeof a=="symbol")return J.bx.prototype
if(typeof a=="bigint")return J.bw.prototype
return a}if(a instanceof A.v)return a
return J.fU(a)},
ou(a){if(typeof a=="number")return J.bv.prototype
if(typeof a=="string")return J.b9.prototype
if(a==null)return a
if(Array.isArray(a))return J.z.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aA.prototype
if(typeof a=="symbol")return J.bx.prototype
if(typeof a=="bigint")return J.bw.prototype
return a}if(a instanceof A.v)return a
return J.fU(a)},
ax(a){if(typeof a=="string")return J.b9.prototype
if(a==null)return a
if(Array.isArray(a))return J.z.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aA.prototype
if(typeof a=="symbol")return J.bx.prototype
if(typeof a=="bigint")return J.bw.prototype
return a}if(a instanceof A.v)return a
return J.fU(a)},
cb(a){if(a==null)return a
if(Array.isArray(a))return J.z.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aA.prototype
if(typeof a=="symbol")return J.bx.prototype
if(typeof a=="bigint")return J.bw.prototype
return a}if(a instanceof A.v)return a
return J.fU(a)},
ov(a){if(typeof a=="number")return J.bv.prototype
if(typeof a=="string")return J.b9.prototype
if(a==null)return a
if(!(a instanceof A.v))return J.bH.prototype
return a},
cc(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aA.prototype
if(typeof a=="symbol")return J.bx.prototype
if(typeof a=="bigint")return J.bw.prototype
return a}if(a instanceof A.v)return a
return J.fU(a)},
ow(a){if(a==null)return a
if(!(a instanceof A.v))return J.bH.prototype
return a},
m4(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.ou(a).p(a,b)},
fX(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.b3(a).L(a,b)},
ki(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.ov(a).j(a,b)},
af(a,b){if(typeof b==="number")if(Array.isArray(a)||typeof a=="string"||A.oL(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.ax(a).i(a,b)},
m5(a,b,c){return J.cb(a).l(a,b,c)},
m6(a,b,c,d){return J.cc(a).cD(a,b,c,d)},
m7(a,b,c,d){return J.cc(a).cP(a,b,c,d)},
m8(a){return J.cc(a).cQ(a)},
m9(a,b){return J.cb(a).q(a,b)},
fY(a,b){return J.cb(a).t(a,b)},
ma(a){return J.ow(a).gdn(a)},
mb(a){return J.cb(a).gA(a)},
jC(a){return J.b3(a).gv(a)},
mc(a){return J.cc(a).gd9(a)},
aK(a){return J.cb(a).gH(a)},
dz(a){return J.ax(a).gk(a)},
md(a){return J.b3(a).gD(a)},
kj(a,b,c){return J.cb(a).av(a,b,c)},
me(a,b){return J.b3(a).bS(a,b)},
dA(a){return J.b3(a).n(a)},
bU:function bU(){},
dZ:function dZ(){},
cr:function cr(){},
a:function a(){},
bz:function bz(){},
eo:function eo(){},
bH:function bH(){},
aA:function aA(){},
bw:function bw(){},
bx:function bx(){},
z:function z(a){this.$ti=a},
ht:function ht(a){this.$ti=a},
bl:function bl(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bv:function bv(){},
cq:function cq(){},
e0:function e0(){},
b9:function b9(){}},A={jI:function jI(){},
cP(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
kU(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
n3(a,b,c){return A.kU(A.cP(A.cP(c,a),b))},
dt(a,b,c){return a},
k6(a){var s,r
for(s=$.ae.length,r=0;r<s;++r)if(a===$.ae[r])return!0
return!1},
kD(a,b,c,d){if(t.gw.b(a))return new A.cm(a,b,c.h("@<0>").u(d).h("cm<1,2>"))
return new A.bB(a,b,c.h("@<0>").u(d).h("bB<1,2>"))},
kx(){return new A.bG("No element")},
cv:function cv(a){this.a=a},
jl:function jl(){},
hV:function hV(){},
k:function k(){},
ai:function ai(){},
bA:function bA(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bB:function bB(a,b,c){this.a=a
this.b=b
this.$ti=c},
cm:function cm(a,b,c){this.a=a
this.b=b
this.$ti=c},
at:function at(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
aU:function aU(a,b,c){this.a=a
this.b=b
this.$ti=c},
W:function W(){},
bZ:function bZ(a){this.a=a},
lP(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
oL(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.aU.b(a)},
m(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.dA(a)
return s},
cH(a){var s,r=$.kI
if(r==null)r=$.kI=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
hQ(a){return A.mP(a)},
mP(a){var s,r,q,p
if(a instanceof A.v)return A.a5(A.ao(a),null)
s=J.b3(a)
if(s===B.X||s===B.Z||t.ak.b(a)){r=B.r(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.a5(A.ao(a),null)},
mY(a){if(typeof a=="number"||A.c8(a))return J.dA(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.b8)return a.n(0)
return"Instance of '"+A.hQ(a)+"'"},
a2(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
mX(a){return a.b?A.a2(a).getUTCFullYear()+0:A.a2(a).getFullYear()+0},
mV(a){return a.b?A.a2(a).getUTCMonth()+1:A.a2(a).getMonth()+1},
mR(a){return a.b?A.a2(a).getUTCDate()+0:A.a2(a).getDate()+0},
mS(a){return a.b?A.a2(a).getUTCHours()+0:A.a2(a).getHours()+0},
mU(a){return a.b?A.a2(a).getUTCMinutes()+0:A.a2(a).getMinutes()+0},
mW(a){return a.b?A.a2(a).getUTCSeconds()+0:A.a2(a).getSeconds()+0},
mT(a){return a.b?A.a2(a).getUTCMilliseconds()+0:A.a2(a).getMilliseconds()+0},
bb(a,b,c){var s,r,q={}
q.a=0
s=[]
r=[]
q.a=b.length
B.a.V(s,b)
q.b=""
if(c!=null&&c.a!==0)c.t(0,new A.hP(q,r,s))
return J.me(a,new A.e_(B.a7,0,s,r,0))},
mQ(a,b,c){var s,r,q
if(Array.isArray(b))s=c==null||c.a===0
else s=!1
if(s){r=b.length
if(r===0){if(!!a.$0)return a.$0()}else if(r===1){if(!!a.$1)return a.$1(b[0])}else if(r===2){if(!!a.$2)return a.$2(b[0],b[1])}else if(r===3){if(!!a.$3)return a.$3(b[0],b[1],b[2])}else if(r===4){if(!!a.$4)return a.$4(b[0],b[1],b[2],b[3])}else if(r===5)if(!!a.$5)return a.$5(b[0],b[1],b[2],b[3],b[4])
q=a[""+"$"+r]
if(q!=null)return q.apply(a,b)}return A.mO(a,b,c)},
mO(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g=Array.isArray(b)?b:A.e6(b,t.z),f=g.length,e=a.$R
if(f<e)return A.bb(a,g,c)
s=a.$D
r=s==null
q=!r?s():null
p=J.b3(a)
o=p.$C
if(typeof o=="string")o=p[o]
if(r){if(c!=null&&c.a!==0)return A.bb(a,g,c)
if(f===e)return o.apply(a,g)
return A.bb(a,g,c)}if(Array.isArray(q)){if(c!=null&&c.a!==0)return A.bb(a,g,c)
n=e+q.length
if(f>n)return A.bb(a,g,null)
if(f<n){m=q.slice(f-e)
if(g===b)g=A.e6(g,t.z)
B.a.V(g,m)}return o.apply(a,g)}else{if(f>e)return A.bb(a,g,c)
if(g===b)g=A.e6(g,t.z)
l=Object.keys(q)
if(c==null)for(r=l.length,k=0;k<l.length;l.length===r||(0,A.a6)(l),++k){j=q[A.H(l[k])]
if(B.u===j)return A.bb(a,g,c)
B.a.m(g,j)}else{for(r=l.length,i=0,k=0;k<l.length;l.length===r||(0,A.a6)(l),++k){h=A.H(l[k])
if(c.a6(0,h)){++i
B.a.m(g,c.i(0,h))}else{j=q[h]
if(B.u===j)return A.bb(a,g,c)
B.a.m(g,j)}}if(i!==c.a)return A.bb(a,g,c)}return o.apply(a,g)}},
an(a){throw A.b(A.lE(a))},
d(a,b){if(a==null)J.dz(a)
throw A.b(A.fT(a,b))},
fT(a,b){var s,r="index"
if(!A.fQ(b))return new A.aL(!0,b,r,null)
s=A.t(J.dz(a))
if(b<0||b>=s)return A.O(b,s,a,r)
return A.kL(b,r)},
lE(a){return new A.aL(!0,a,null,null)},
b(a){return A.lK(new Error(),a)},
lK(a,b){var s
if(b==null)b=new A.aY()
a.dartException=b
s=A.oX
if("defineProperty" in Object){Object.defineProperty(a,"message",{get:s})
a.name=""}else a.toString=s
return a},
oX(){return J.dA(this.dartException)},
bk(a){throw A.b(a)},
oV(a,b){throw A.lK(b,a)},
a6(a){throw A.b(A.Z(a))},
aZ(a){var s,r,q,p,o,n
a=A.oT(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.q([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.ib(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
ic(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
kX(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
jJ(a,b){var s=b==null,r=s?null:b.method
return new A.e1(a,r,s?null:b.receiver)},
aJ(a){if(a==null)return new A.hN(a)
if(typeof a!=="object")return a
if("dartException" in a)return A.bO(a,a.dartException)
return A.oh(a)},
bO(a,b){if(t.a.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
oh(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.f.bD(r,16)&8191)===10)switch(q){case 438:return A.bO(a,A.jJ(A.m(s)+" (Error "+q+")",null))
case 445:case 5007:A.m(s)
return A.bO(a,new A.cE())}}if(a instanceof TypeError){p=$.lR()
o=$.lS()
n=$.lT()
m=$.lU()
l=$.lX()
k=$.lY()
j=$.lW()
$.lV()
i=$.m_()
h=$.lZ()
g=p.N(s)
if(g!=null)return A.bO(a,A.jJ(A.H(s),g))
else{g=o.N(s)
if(g!=null){g.method="call"
return A.bO(a,A.jJ(A.H(s),g))}else if(n.N(s)!=null||m.N(s)!=null||l.N(s)!=null||k.N(s)!=null||j.N(s)!=null||m.N(s)!=null||i.N(s)!=null||h.N(s)!=null){A.H(s)
return A.bO(a,new A.cE())}}return A.bO(a,new A.eM(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.cM()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.bO(a,new A.aL(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.cM()
return a},
b4(a){var s
if(a==null)return new A.df(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.df(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
jm(a){if(a==null)return J.jC(a)
if(typeof a=="object")return A.cH(a)
return J.jC(a)},
ot(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.l(0,a[s],a[r])}return b},
nS(a,b,c,d,e,f){t.Z.a(a)
switch(A.t(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.b(A.dP("Unsupported number of arguments for wrapped closure"))},
aI(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=A.oq(a,b)
a.$identity=s
return s},
oq(a,b){var s
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
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.nS)},
mn(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.eB().constructor.prototype):Object.create(new A.bP(null,null).constructor.prototype)
s.$initialize=s.constructor
if(h)r=function static_tear_off(){this.$initialize()}
else r=function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.kp(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.mj(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.kp(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
mj(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.b("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.mg)}throw A.b("Error in functionType of tearoff")},
mk(a,b,c,d){var s=A.ko
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
kp(a,b,c,d){var s,r
if(c)return A.mm(a,b,d)
s=b.length
r=A.mk(s,d,a,b)
return r},
ml(a,b,c,d){var s=A.ko,r=A.mh
switch(b?-1:a){case 0:throw A.b(new A.ev("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
mm(a,b,c){var s,r
if($.km==null)$.km=A.kl("interceptor")
if($.kn==null)$.kn=A.kl("receiver")
s=b.length
r=A.ml(s,c,a,b)
return r},
k4(a){return A.mn(a)},
mg(a,b){return A.iT(v.typeUniverse,A.ao(a.a),b)},
ko(a){return a.a},
mh(a){return a.b},
kl(a){var s,r,q,p=new A.bP("receiver","interceptor"),o=J.kA(Object.getOwnPropertyNames(p),t.X)
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw A.b(A.aM("Field name "+a+" not found.",null))},
op(a){if(a==null)A.oi("boolean expression must not be null")
return a},
oi(a){throw A.b(new A.eT(a))},
oU(a){throw A.b(new A.eY(a))},
lI(a){return v.getIsolateTag(a)},
q9(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
oP(a){var s,r,q,p,o,n=A.H($.lJ.$1(a)),m=$.j9[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.jd[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.nC($.lD.$2(a,n))
if(q!=null){m=$.j9[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.jd[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.jk(s)
$.j9[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.jd[n]=s
return s}if(p==="-"){o=A.jk(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.lN(a,s)
if(p==="*")throw A.b(A.jP(n))
if(v.leafTags[n]===true){o=A.jk(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.lN(a,s)},
lN(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.k7(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
jk(a){return J.k7(a,!1,null,!!a.$iu)},
oR(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.jk(s)
else return J.k7(s,c,null,null)},
oI(){if(!0===$.k5)return
$.k5=!0
A.oJ()},
oJ(){var s,r,q,p,o,n,m,l
$.j9=Object.create(null)
$.jd=Object.create(null)
A.oH()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.lO.$1(o)
if(n!=null){m=A.oR(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
oH(){var s,r,q,p,o,n,m=B.M()
m=A.ca(B.N,A.ca(B.O,A.ca(B.t,A.ca(B.t,A.ca(B.P,A.ca(B.Q,A.ca(B.R(B.r),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.lJ=new A.ja(p)
$.lD=new A.jb(o)
$.lO=new A.jc(n)},
ca(a,b){return a(b)||b},
or(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
oT(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
cg:function cg(a,b){this.a=a
this.$ti=b},
cf:function cf(){},
ch:function ch(a,b,c){this.a=a
this.b=b
this.$ti=c},
d5:function d5(a,b){this.a=a
this.$ti=b},
d6:function d6(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
e_:function e_(a,b,c,d,e){var _=this
_.a=a
_.c=b
_.d=c
_.e=d
_.f=e},
hP:function hP(a,b,c){this.a=a
this.b=b
this.c=c},
ib:function ib(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
cE:function cE(){},
e1:function e1(a,b,c){this.a=a
this.b=b
this.c=c},
eM:function eM(a){this.a=a},
hN:function hN(a){this.a=a},
df:function df(a){this.a=a
this.b=null},
b8:function b8(){},
dI:function dI(){},
dJ:function dJ(){},
eE:function eE(){},
eB:function eB(){},
bP:function bP(a,b){this.a=a
this.b=b},
eY:function eY(a){this.a=a},
ev:function ev(a){this.a=a},
eT:function eT(a){this.a=a},
iN:function iN(){},
aQ:function aQ(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
hu:function hu(a){this.a=a},
hA:function hA(a,b){this.a=a
this.b=b
this.c=null},
as:function as(a,b){this.a=a
this.$ti=b},
cw:function cw(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
ja:function ja(a){this.a=a},
jb:function jb(a){this.a=a},
jc:function jc(a){this.a=a},
oW(a){A.oV(new A.cv("Field '"+a+"' has been assigned during initialization."),new Error())},
l5(a){var s=new A.iu(a)
return s.b=s},
iu:function iu(a){this.a=a
this.b=null},
iY(a,b,c){},
dp(a){return a},
mE(a){return new Float32Array(a)},
mF(a){return new Uint16Array(a)},
mG(a,b,c){A.iY(a,b,c)
return c==null?new Uint8Array(a,b):new Uint8Array(a,b,c)},
b1(a,b,c){if(a>>>0!==a||a>=c)throw A.b(A.fT(b,a))},
eb:function eb(){},
cA:function cA(){},
ec:function ec(){},
bW:function bW(){},
cy:function cy(){},
cz:function cz(){},
cx:function cx(){},
ed:function ed(){},
ee:function ee(){},
ef:function ef(){},
eg:function eg(){},
cB:function cB(){},
eh:function eh(){},
cC:function cC(){},
ei:function ei(){},
d8:function d8(){},
d9:function d9(){},
da:function da(){},
db:function db(){},
kN(a,b){var s=b.c
return s==null?b.c=A.jV(a,b.y,!0):s},
jN(a,b){var s=b.c
return s==null?b.c=A.dk(a,"aq",[b.y]):s},
n2(a){var s=a.d
if(s!=null)return s
return a.d=new Map()},
kO(a){var s=a.x
if(s===6||s===7||s===8)return A.kO(a.y)
return s===12||s===13},
n1(a){return a.at},
R(a){return A.fF(v.typeUniverse,a,!1)},
bi(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.x
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.y
r=A.bi(a,s,a0,a1)
if(r===s)return b
return A.li(a,r,!0)
case 7:s=b.y
r=A.bi(a,s,a0,a1)
if(r===s)return b
return A.jV(a,r,!0)
case 8:s=b.y
r=A.bi(a,s,a0,a1)
if(r===s)return b
return A.lh(a,r,!0)
case 9:q=b.z
p=A.ds(a,q,a0,a1)
if(p===q)return b
return A.dk(a,b.y,p)
case 10:o=b.y
n=A.bi(a,o,a0,a1)
m=b.z
l=A.ds(a,m,a0,a1)
if(n===o&&l===m)return b
return A.jT(a,n,l)
case 12:k=b.y
j=A.bi(a,k,a0,a1)
i=b.z
h=A.oe(a,i,a0,a1)
if(j===k&&h===i)return b
return A.lg(a,j,h)
case 13:g=b.z
a1+=g.length
f=A.ds(a,g,a0,a1)
o=b.y
n=A.bi(a,o,a0,a1)
if(f===g&&n===o)return b
return A.jU(a,n,f,!0)
case 14:e=b.y
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw A.b(A.dD("Attempted to substitute unexpected RTI kind "+c))}},
ds(a,b,c,d){var s,r,q,p,o=b.length,n=A.iU(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.bi(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
of(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.iU(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.bi(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
oe(a,b,c,d){var s,r=b.a,q=A.ds(a,r,c,d),p=b.b,o=A.ds(a,p,c,d),n=b.c,m=A.of(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.f7()
s.a=q
s.b=o
s.c=m
return s},
q(a,b){a[v.arrayRti]=b
return a},
lG(a){var s,r=a.$S
if(r!=null){if(typeof r=="number")return A.oy(r)
s=a.$S()
return s}return null},
oK(a,b){var s
if(A.kO(b))if(a instanceof A.b8){s=A.lG(a)
if(s!=null)return s}return A.ao(a)},
ao(a){if(a instanceof A.v)return A.w(a)
if(Array.isArray(a))return A.aH(a)
return A.k_(J.b3(a))},
aH(a){var s=a[v.arrayRti],r=t.b
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
w(a){var s=a.$ti
return s!=null?s:A.k_(a)},
k_(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.nR(a,s)},
nR(a,b){var s=a instanceof A.b8?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.ny(v.typeUniverse,s.name)
b.$ccache=r
return r},
oy(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.fF(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
ox(a){return A.bN(A.w(a))},
od(a){var s=a instanceof A.b8?A.lG(a):null
if(s!=null)return s
if(t.dm.b(a))return J.md(a).a
if(Array.isArray(a))return A.aH(a)
return A.ao(a)},
bN(a){var s=a.w
return s==null?a.w=A.lq(a):s},
lq(a){var s,r,q=a.at,p=q.replace(/\*/g,"")
if(p===q)return a.w=new A.iS(a)
s=A.fF(v.typeUniverse,p,!0)
r=s.w
return r==null?s.w=A.lq(s):r},
ay(a){return A.bN(A.fF(v.typeUniverse,a,!1))},
nQ(a){var s,r,q,p,o,n,m=this
if(m===t.K)return A.b2(m,a,A.nX)
if(!A.b5(m))if(!(m===t._))s=!1
else s=!0
else s=!0
if(s)return A.b2(m,a,A.o0)
s=m.x
if(s===7)return A.b2(m,a,A.nO)
if(s===1)return A.b2(m,a,A.lw)
r=s===6?m.y:m
q=r.x
if(q===8)return A.b2(m,a,A.nT)
if(r===t.S)p=A.fQ
else if(r===t.i||r===t.H)p=A.nW
else if(r===t.N)p=A.nZ
else p=r===t.y?A.c8:null
if(p!=null)return A.b2(m,a,p)
if(q===9){o=r.y
if(r.z.every(A.oN)){m.r="$i"+o
if(o==="l")return A.b2(m,a,A.nV)
return A.b2(m,a,A.o_)}}else if(q===11){n=A.or(r.y,r.z)
return A.b2(m,a,n==null?A.lw:n)}return A.b2(m,a,A.nM)},
b2(a,b,c){a.b=c
return a.b(b)},
nP(a){var s,r=this,q=A.nL
if(!A.b5(r))if(!(r===t._))s=!1
else s=!0
else s=!0
if(s)q=A.nD
else if(r===t.K)q=A.nB
else{s=A.du(r)
if(s)q=A.nN}r.a=q
return r.a(a)},
fR(a){var s,r=a.x
if(!A.b5(a))if(!(a===t._))if(!(a===t.aw))if(r!==7)if(!(r===6&&A.fR(a.y)))s=r===8&&A.fR(a.y)||a===t.P||a===t.T
else s=!0
else s=!0
else s=!0
else s=!0
else s=!0
return s},
nM(a){var s=this
if(a==null)return A.fR(s)
return A.oM(v.typeUniverse,A.oK(a,s),s)},
nO(a){if(a==null)return!0
return this.y.b(a)},
o_(a){var s,r=this
if(a==null)return A.fR(r)
s=r.r
if(a instanceof A.v)return!!a[s]
return!!J.b3(a)[s]},
nV(a){var s,r=this
if(a==null)return A.fR(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.r
if(a instanceof A.v)return!!a[s]
return!!J.b3(a)[s]},
nL(a){var s,r=this
if(a==null){s=A.du(r)
if(s)return a}else if(r.b(a))return a
A.lr(a,r)},
nN(a){var s=this
if(a==null)return a
else if(s.b(a))return a
A.lr(a,s)},
lr(a,b){throw A.b(A.nn(A.l6(a,A.a5(b,null))))},
l6(a,b){return A.bq(a)+": type '"+A.a5(A.od(a),null)+"' is not a subtype of type '"+b+"'"},
nn(a){return new A.di("TypeError: "+a)},
Y(a,b){return new A.di("TypeError: "+A.l6(a,b))},
nT(a){var s=this,r=s.x===6?s.y:s
return r.y.b(a)||A.jN(v.typeUniverse,r).b(a)},
nX(a){return a!=null},
nB(a){if(a!=null)return a
throw A.b(A.Y(a,"Object"))},
o0(a){return!0},
nD(a){return a},
lw(a){return!1},
c8(a){return!0===a||!1===a},
jW(a){if(!0===a)return!0
if(!1===a)return!1
throw A.b(A.Y(a,"bool"))},
pC(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.b(A.Y(a,"bool"))},
pB(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.b(A.Y(a,"bool?"))},
iV(a){if(typeof a=="number")return a
throw A.b(A.Y(a,"double"))},
pE(a){if(typeof a=="number")return a
if(a==null)return a
throw A.b(A.Y(a,"double"))},
pD(a){if(typeof a=="number")return a
if(a==null)return a
throw A.b(A.Y(a,"double?"))},
fQ(a){return typeof a=="number"&&Math.floor(a)===a},
t(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.b(A.Y(a,"int"))},
pF(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.b(A.Y(a,"int"))},
ll(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.b(A.Y(a,"int?"))},
nW(a){return typeof a=="number"},
lm(a){if(typeof a=="number")return a
throw A.b(A.Y(a,"num"))},
pG(a){if(typeof a=="number")return a
if(a==null)return a
throw A.b(A.Y(a,"num"))},
nA(a){if(typeof a=="number")return a
if(a==null)return a
throw A.b(A.Y(a,"num?"))},
nZ(a){return typeof a=="string"},
H(a){if(typeof a=="string")return a
throw A.b(A.Y(a,"String"))},
pH(a){if(typeof a=="string")return a
if(a==null)return a
throw A.b(A.Y(a,"String"))},
nC(a){if(typeof a=="string")return a
if(a==null)return a
throw A.b(A.Y(a,"String?"))},
lz(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.a5(a[q],b)
return s},
o7(a,b){var s,r,q,p,o,n,m=a.y,l=a.z
if(""===m)return"("+A.lz(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.a5(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
ls(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=", "
if(a6!=null){s=a6.length
if(a5==null){a5=A.q([],t.s)
r=null}else r=a5.length
q=a5.length
for(p=s;p>0;--p)B.a.m(a5,"T"+(q+p))
for(o=t.X,n=t._,m="<",l="",p=0;p<s;++p,l=a3){k=a5.length
j=k-1-p
if(!(j>=0))return A.d(a5,j)
m=B.v.p(m+l,a5[j])
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
if(l===9){p=A.og(a.y)
o=a.z
return o.length>0?p+("<"+A.lz(o,b)+">"):p}if(l===11)return A.o7(a,b)
if(l===12)return A.ls(a,b,null)
if(l===13)return A.ls(a.y,b,a.z)
if(l===14){n=a.y
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.d(b,n)
return b[n]}return"?"},
og(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
nz(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
ny(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.fF(a,b,!1)
else if(typeof m=="number"){s=m
r=A.dl(a,5,"#")
q=A.iU(s)
for(p=0;p<s;++p)q[p]=r
o=A.dk(a,b,q)
n[b]=o
return o}else return m},
nw(a,b){return A.lj(a.tR,b)},
nv(a,b){return A.lj(a.eT,b)},
fF(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.ld(A.lb(a,null,b,c))
r.set(b,s)
return s},
iT(a,b,c){var s,r,q=b.Q
if(q==null)q=b.Q=new Map()
s=q.get(c)
if(s!=null)return s
r=A.ld(A.lb(a,b,c,!0))
q.set(c,r)
return r},
nx(a,b,c){var s,r,q,p=b.as
if(p==null)p=b.as=new Map()
s=c.at
r=p.get(s)
if(r!=null)return r
q=A.jT(a,b,c.x===10?c.z:[c])
p.set(s,q)
return q},
b0(a,b){b.a=A.nP
b.b=A.nQ
return b},
dl(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.ak(null,null)
s.x=b
s.at=c
r=A.b0(a,s)
a.eC.set(c,r)
return r},
li(a,b,c){var s,r=b.at+"*",q=a.eC.get(r)
if(q!=null)return q
s=A.ns(a,b,r,c)
a.eC.set(r,s)
return s},
ns(a,b,c,d){var s,r,q
if(d){s=b.x
if(!A.b5(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new A.ak(null,null)
q.x=6
q.y=b
q.at=c
return A.b0(a,q)},
jV(a,b,c){var s,r=b.at+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.nr(a,b,r,c)
a.eC.set(r,s)
return s},
nr(a,b,c,d){var s,r,q,p
if(d){s=b.x
if(!A.b5(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&A.du(b.y)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.aw)return t.P
else if(s===6){q=b.y
if(q.x===8&&A.du(q.y))return q
else return A.kN(a,b)}}p=new A.ak(null,null)
p.x=7
p.y=b
p.at=c
return A.b0(a,p)},
lh(a,b,c){var s,r=b.at+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.np(a,b,r,c)
a.eC.set(r,s)
return s},
np(a,b,c,d){var s,r,q
if(d){s=b.x
if(!A.b5(b))if(!(b===t._))r=!1
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return A.dk(a,"aq",[b])
else if(b===t.P||b===t.T)return t.eH}q=new A.ak(null,null)
q.x=8
q.y=b
q.at=c
return A.b0(a,q)},
nt(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.ak(null,null)
s.x=14
s.y=b
s.at=q
r=A.b0(a,s)
a.eC.set(q,r)
return r},
dj(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].at
return s},
no(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].at}return s},
dk(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.dj(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.ak(null,null)
r.x=9
r.y=b
r.z=c
if(c.length>0)r.c=c[0]
r.at=p
q=A.b0(a,r)
a.eC.set(p,q)
return q},
jT(a,b,c){var s,r,q,p,o,n
if(b.x===10){s=b.y
r=b.z.concat(c)}else{r=c
s=b}q=s.at+(";<"+A.dj(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.ak(null,null)
o.x=10
o.y=s
o.z=r
o.at=q
n=A.b0(a,o)
a.eC.set(q,n)
return n},
nu(a,b,c){var s,r,q="+"+(b+"("+A.dj(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.ak(null,null)
s.x=11
s.y=b
s.z=c
s.at=q
r=A.b0(a,s)
a.eC.set(q,r)
return r},
lg(a,b,c){var s,r,q,p,o,n=b.at,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.dj(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.dj(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.no(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.ak(null,null)
p.x=12
p.y=b
p.z=c
p.at=r
o=A.b0(a,p)
a.eC.set(r,o)
return o},
jU(a,b,c,d){var s,r=b.at+("<"+A.dj(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.nq(a,b,c,r,d)
a.eC.set(r,s)
return s},
nq(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.iU(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.x===1){r[p]=o;++q}}if(q>0){n=A.bi(a,b,r,0)
m=A.ds(a,c,r,0)
return A.jU(a,n,m,c!==m)}}l=new A.ak(null,null)
l.x=13
l.y=b
l.z=c
l.at=d
return A.b0(a,l)},
lb(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
ld(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.nh(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.lc(a,r,l,k,!1)
else if(q===46)r=A.lc(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.bh(a.u,a.e,k.pop()))
break
case 94:k.push(A.nt(a.u,k.pop()))
break
case 35:k.push(A.dl(a.u,5,"#"))
break
case 64:k.push(A.dl(a.u,2,"@"))
break
case 126:k.push(A.dl(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.nj(a,k)
break
case 38:A.ni(a,k)
break
case 42:p=a.u
k.push(A.li(p,A.bh(p,a.e,k.pop()),a.n))
break
case 63:p=a.u
k.push(A.jV(p,A.bh(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.lh(p,A.bh(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.ng(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.le(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.nl(a.u,a.e,o)
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
return A.bh(a.u,a.e,m)},
nh(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
lc(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.x===10)o=o.y
n=A.nz(s,o.y)[p]
if(n==null)A.bk('No "'+p+'" in "'+A.n1(o)+'"')
d.push(A.iT(s,o,n))}else d.push(p)
return m},
nj(a,b){var s,r=a.u,q=A.la(a,b),p=b.pop()
if(typeof p=="string")b.push(A.dk(r,p,q))
else{s=A.bh(r,a.e,p)
switch(s.x){case 12:b.push(A.jU(r,s,q,a.n))
break
default:b.push(A.jT(r,s,q))
break}}},
ng(a,b){var s,r,q,p,o,n=null,m=a.u,l=b.pop()
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
s=r}q=A.la(a,b)
l=b.pop()
switch(l){case-3:l=b.pop()
if(s==null)s=m.sEA
if(r==null)r=m.sEA
p=A.bh(m,a.e,l)
o=new A.f7()
o.a=q
o.b=s
o.c=r
b.push(A.lg(m,p,o))
return
case-4:b.push(A.nu(m,b.pop(),q))
return
default:throw A.b(A.dD("Unexpected state under `()`: "+A.m(l)))}},
ni(a,b){var s=b.pop()
if(0===s){b.push(A.dl(a.u,1,"0&"))
return}if(1===s){b.push(A.dl(a.u,4,"1&"))
return}throw A.b(A.dD("Unexpected extended operation "+A.m(s)))},
la(a,b){var s=b.splice(a.p)
A.le(a.u,a.e,s)
a.p=b.pop()
return s},
bh(a,b,c){if(typeof c=="string")return A.dk(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.nk(a,b,c)}else return c},
le(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.bh(a,b,c[s])},
nl(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.bh(a,b,c[s])},
nk(a,b,c){var s,r,q=b.x
if(q===10){if(c===0)return b.y
s=b.z
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.y
q=b.x}else if(c===0)return b
if(q!==9)throw A.b(A.dD("Indexed base must be an interface type"))
s=b.z
if(c<=s.length)return s[c-1]
throw A.b(A.dD("Bad index "+c+" for "+b.n(0)))},
oM(a,b,c){var s,r=A.n2(b),q=r.get(c)
if(q!=null)return q
s=A.N(a,b,null,c,null)
r.set(c,s)
return s},
N(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(!A.b5(d))if(!(d===t._))s=!1
else s=!0
else s=!0
if(s)return!0
r=b.x
if(r===4)return!0
if(A.b5(b))return!1
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
if(p===6){s=A.kN(a,d)
return A.N(a,b,c,s,e)}if(r===8){if(!A.N(a,b.y,c,d,e))return!1
return A.N(a,A.jN(a,b),c,d,e)}if(r===7){s=A.N(a,t.P,c,d,e)
return s&&A.N(a,b.y,c,d,e)}if(p===8){if(A.N(a,b,c,d.y,e))return!0
return A.N(a,b,c,A.jN(a,d),e)}if(p===7){s=A.N(a,b,c,t.P,e)
return s||A.N(a,b,c,d.y,e)}if(q)return!1
s=r!==12
if((!s||r===13)&&d===t.Z)return!0
o=r===11
if(o&&d===t.gT)return!0
if(p===13){if(b===t.h)return!0
if(r!==13)return!1
n=b.z
m=d.z
l=n.length
if(l!==m.length)return!1
c=c==null?n:n.concat(c)
e=e==null?m:m.concat(e)
for(k=0;k<l;++k){j=n[k]
i=m[k]
if(!A.N(a,j,c,i,e)||!A.N(a,i,e,j,c))return!1}return A.lv(a,b.y,c,d.y,e)}if(p===12){if(b===t.h)return!0
if(s)return!1
return A.lv(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return A.nU(a,b,c,d,e)}if(o&&p===11)return A.nY(a,b,c,d,e)
return!1},
lv(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
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
nU(a,b,c,d,e){var s,r,q,p,o,n,m,l=b.y,k=d.y
for(;l!==k;){s=a.tR[l]
if(s==null)return!1
if(typeof s=="string"){l=s
continue}r=s[k]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.iT(a,b,r[o])
return A.lk(a,p,null,c,d.z,e)}n=b.z
m=d.z
return A.lk(a,n,null,c,m,e)},
lk(a,b,c,d,e,f){var s,r,q,p=b.length
for(s=0;s<p;++s){r=b[s]
q=e[s]
if(!A.N(a,r,d,q,f))return!1}return!0},
nY(a,b,c,d,e){var s,r=b.z,q=d.z,p=r.length
if(p!==q.length)return!1
if(b.y!==d.y)return!1
for(s=0;s<p;++s)if(!A.N(a,r[s],c,q[s],e))return!1
return!0},
du(a){var s,r=a.x
if(!(a===t.P||a===t.T))if(!A.b5(a))if(r!==7)if(!(r===6&&A.du(a.y)))s=r===8&&A.du(a.y)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
oN(a){var s
if(!A.b5(a))if(!(a===t._))s=!1
else s=!0
else s=!0
return s},
b5(a){var s=a.x
return s===2||s===3||s===4||s===5||a===t.X},
lj(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
iU(a){return a>0?new Array(a):v.typeUniverse.sEA},
ak:function ak(a,b){var _=this
_.a=a
_.b=b
_.w=_.r=_.e=_.d=_.c=null
_.x=0
_.at=_.as=_.Q=_.z=_.y=null},
f7:function f7(){this.c=this.b=this.a=null},
iS:function iS(a){this.a=a},
f4:function f4(){},
di:function di(a){this.a=a},
n8(){var s,r,q={}
if(self.scheduleImmediate!=null)return A.oj()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(A.aI(new A.iq(q),1)).observe(s,{childList:true})
return new A.ip(q,s,r)}else if(self.setImmediate!=null)return A.ok()
return A.ol()},
n9(a){self.scheduleImmediate(A.aI(new A.ir(t.M.a(a)),0))},
na(a){self.setImmediate(A.aI(new A.is(t.M.a(a)),0))},
nb(a){t.M.a(a)
A.nm(0,a)},
nm(a,b){var s=new A.iQ()
s.cm(a,b)
return s},
h0(a,b){var s=A.dt(a,"error",t.K)
return new A.ce(s,b==null?A.jD(a):b)},
jD(a){var s
if(t.a.b(a)){s=a.ga_()
if(s!=null)return s}return B.V},
mt(a,b){var s,r,q,p,o,n,m,l,k,j,i,h={},g=null,f=!1,e=b.h("F<l<0>>"),d=new A.F($.C,e)
h.a=null
h.b=0
s=A.l5("error")
r=A.l5("stackTrace")
q=new A.hl(h,g,f,d,s,r)
try{for(l=t.P,k=0,j=0;k<2;++k){p=a[k]
o=j
p.b4(new A.hk(h,o,d,g,f,s,r,b),q,l)
j=++h.b}if(j===0){l=d
l.ah(A.q([],b.h("z<0>")))
return l}h.a=A.hB(j,null,!1,b.h("0?"))}catch(i){n=A.aJ(i)
m=A.b4(i)
if(h.b===0||A.op(f)){l=n
r=m
A.dt(l,"error",t.K)
$.C!==B.d
if(r==null)r=A.jD(l)
e=new A.F($.C,e)
e.bj(l,r)
return e}else{s.b=n
r.b=m}}return d},
l7(a,b){var s,r,q
for(s=t.c;r=a.a,(r&4)!==0;)a=s.a(a.c)
if((r&24)!==0){q=b.am()
b.ag(a)
A.c3(b,q)}else{q=t.F.a(b.c)
b.bC(a)
a.aR(q)}},
ne(a,b){var s,r,q,p={},o=p.a=a
for(s=t.c;r=o.a,(r&4)!==0;o=a){a=s.a(o.c)
p.a=a}if((r&24)===0){q=t.F.a(b.c)
b.bC(o)
p.a.aR(q)
return}if((r&16)===0&&b.c==null){b.ag(o)
return}b.a^=2
A.bM(null,null,b.b,t.M.a(new A.iC(p,b)))},
c3(a,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c={},b=c.a=a
for(s=t.t,r=t.F,q=t.b9;!0;){p={}
o=b.a
n=(o&16)===0
m=!n
if(a0==null){if(m&&(o&1)===0){l=s.a(b.c)
A.fS(l.a,l.b)}return}p.a=a0
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
A.fS(i.a,i.b)
return}f=$.C
if(f!==g)$.C=g
else f=null
b=b.c
if((b&15)===8)new A.iJ(p,c,m).$0()
else if(n){if((b&1)!==0)new A.iI(p,i).$0()}else if((b&2)!==0)new A.iH(c,p).$0()
if(f!=null)$.C=f
b=p.c
if(b instanceof A.F){o=p.a.$ti
o=o.h("aq<2>").b(b)||!o.z[1].b(b)}else o=!1
if(o){q.a(b)
e=p.a.b
if((b.a&24)!==0){d=r.a(e.c)
e.c=null
a0=e.an(d)
e.a=b.a&30|e.a&1
e.c=b.c
c.a=b
continue}else A.l7(b,e)
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
o8(a,b){var s
if(t.C.b(a))return b.bV(a,t.z,t.K,t.l)
s=t.v
if(s.b(a))return s.a(a)
throw A.b(A.kk(a,"onError",u.c))},
o2(){var s,r
for(s=$.c9;s!=null;s=$.c9){$.dr=null
r=s.b
$.c9=r
if(r==null)$.dq=null
s.a.$0()}},
oc(){$.k0=!0
try{A.o2()}finally{$.dr=null
$.k0=!1
if($.c9!=null)$.k9().$1(A.lF())}},
lB(a){var s=new A.eU(a),r=$.dq
if(r==null){$.c9=$.dq=s
if(!$.k0)$.k9().$1(A.lF())}else $.dq=r.b=s},
ob(a){var s,r,q,p=$.c9
if(p==null){A.lB(a)
$.dr=$.dq
return}s=new A.eU(a)
r=$.dr
if(r==null){s.b=p
$.c9=$.dr=s}else{q=r.b
s.b=q
$.dr=r.b=s
if(q==null)$.dq=s}},
k8(a){var s,r=null,q=$.C
if(B.d===q){A.bM(r,r,B.d,a)
return}s=!1
if(s){A.bM(r,r,q,t.M.a(a))
return}A.bM(r,r,q,t.M.a(q.bH(a)))},
i_(a){return new A.aF(null,null,a.h("aF<0>"))},
lA(a){return},
l4(a,b,c){var s=b==null?A.om():b
return t.a7.u(c).h("1(2)").a(s)},
nc(a,b){if(b==null)b=A.oo()
if(t.da.b(b))return a.bV(b,t.z,t.K,t.l)
if(t.d5.b(b))return t.v.a(b)
throw A.b(A.aM("handleError callback must take either an Object (the error), or both an Object (the error) and a StackTrace.",null))},
o3(a){},
o5(a,b){A.fS(a,b)},
o4(){},
oa(a,b,c,d){var s,r,q,p,o,n
try{b.$1(a.$0())}catch(n){s=A.aJ(n)
r=A.b4(n)
t.K.a(s)
t.gO.a(r)
q=null
if(q==null)c.$2(s,r)
else{p=J.ma(q)
o=q.ga_()
c.$2(p,o)}}},
nG(a,b,c,d){var s,r,q=a.W(0),p=$.jp()
if(q!==p){s=t.O.a(new A.iX(b,c,d))
p=q.$ti
r=$.C
q.aG(new A.bJ(new A.F(r,p),8,s,null,p.h("@<1>").u(p.c).h("bJ<1,2>")))}else b.M(c,d)},
nH(a,b){return new A.iW(a,b)},
fS(a,b){A.ob(new A.j3(a,b))},
lx(a,b,c,d,e){var s,r=$.C
if(r===c)return d.$0()
$.C=c
s=r
try{r=d.$0()
return r}finally{$.C=s}},
ly(a,b,c,d,e,f,g){var s,r=$.C
if(r===c)return d.$1(e)
$.C=c
s=r
try{r=d.$1(e)
return r}finally{$.C=s}},
o9(a,b,c,d,e,f,g,h,i){var s,r=$.C
if(r===c)return d.$2(e,f)
$.C=c
s=r
try{r=d.$2(e,f)
return r}finally{$.C=s}},
bM(a,b,c,d){t.M.a(d)
if(B.d!==c)d=c.bH(d)
A.lB(d)},
iq:function iq(a){this.a=a},
ip:function ip(a,b,c){this.a=a
this.b=b
this.c=c},
ir:function ir(a){this.a=a},
is:function is(a){this.a=a},
iQ:function iQ(){},
iR:function iR(a,b){this.a=a
this.b=b},
ce:function ce(a,b){this.a=a
this.b=b},
Q:function Q(a,b){this.a=a
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
cU:function cU(){},
aF:function aF(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.r=_.e=_.d=null
_.$ti=c},
hl:function hl(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hk:function hk(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
cV:function cV(){},
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
iz:function iz(a,b){this.a=a
this.b=b},
iG:function iG(a,b){this.a=a
this.b=b},
iD:function iD(a){this.a=a},
iE:function iE(a){this.a=a},
iF:function iF(a,b,c){this.a=a
this.b=b
this.c=c},
iC:function iC(a,b){this.a=a
this.b=b},
iB:function iB(a,b){this.a=a
this.b=b},
iA:function iA(a,b,c){this.a=a
this.b=b
this.c=c},
iJ:function iJ(a,b,c){this.a=a
this.b=b
this.c=c},
iK:function iK(a){this.a=a},
iI:function iI(a,b){this.a=a
this.b=b},
iH:function iH(a,b){this.a=a
this.b=b},
eU:function eU(a){this.a=a
this.b=null},
bc:function bc(){},
i2:function i2(a){this.a=a},
i3:function i3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
i0:function i0(a,b){this.a=a
this.b=b},
i1:function i1(){},
i4:function i4(a,b){this.a=a
this.b=b},
i5:function i5(a,b){this.a=a
this.b=b},
cW:function cW(){},
cX:function cX(){},
c1:function c1(){},
it:function it(a){this.a=a},
c6:function c6(){},
bf:function bf(){},
cY:function cY(a,b){this.b=a
this.a=null
this.$ti=b},
eZ:function eZ(){},
dc:function dc(a){var _=this
_.a=0
_.c=_.b=null
_.$ti=a},
iM:function iM(a,b){this.a=a
this.b=b},
c2:function c2(a,b){var _=this
_.a=1
_.b=a
_.c=null
_.$ti=b},
iX:function iX(a,b,c){this.a=a
this.b=b
this.c=c},
iW:function iW(a,b){this.a=a
this.b=b},
dn:function dn(){},
j3:function j3(a,b){this.a=a
this.b=b},
fp:function fp(){},
iO:function iO(a,b){this.a=a
this.b=b},
iP:function iP(a,b,c){this.a=a
this.b=b
this.c=c},
l8(a,b){var s=a[b]
return s===a?null:s},
l9(a,b,c){if(c==null)a[b]=a
else a[b]=c},
nf(){var s=Object.create(null)
A.l9(s,"<non-identifier-key>",s)
delete s["<non-identifier-key>"]
return s},
e5(a,b,c){return b.h("@<0>").u(c).h("kC<1,2>").a(A.ot(a,new A.aQ(b.h("@<0>").u(c).h("aQ<1,2>"))))},
e4(a,b){return new A.aQ(a.h("@<0>").u(b).h("aQ<1,2>"))},
hD(a){var s,r={}
if(A.k6(a))return"{...}"
s=new A.cO("")
try{B.a.m($.ae,a)
s.a+="{"
r.a=!0
J.fY(a,new A.hE(r,s))
s.a+="}"}finally{if(0>=$.ae.length)return A.d($.ae,-1)
$.ae.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
d1:function d1(){},
d4:function d4(a){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=a},
d2:function d2(a,b){this.a=a
this.$ti=b},
d3:function d3(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
e:function e(){},
y:function y(){},
hE:function hE(a,b){this.a=a
this.b=b},
dm:function dm(){},
bV:function bV(){},
cS:function cS(){},
c7:function c7(){},
o6(a,b){var s,r,q,p=null
try{p=JSON.parse(a)}catch(r){s=A.aJ(r)
q=String(s)
throw A.b(new A.hi(q))}q=A.j_(p)
return q},
j_(a){var s
if(a==null)return null
if(typeof a!="object")return a
if(Object.getPrototypeOf(a)!==Array.prototype)return new A.fb(a,Object.create(null))
for(s=0;s<a.length;++s)a[s]=A.j_(a[s])
return a},
fb:function fb(a,b){this.a=a
this.b=b
this.c=null},
fc:function fc(a){this.a=a},
dK:function dK(){},
dM:function dM(){},
e2:function e2(){},
hw:function hw(a){this.a=a},
kt(a,b){return A.mQ(a,b,null)},
mq(a,b){a=A.b(a)
if(a==null)a=t.K.a(a)
a.stack=b.n(0)
throw a
throw A.b("unreachable")},
kq(a,b){var s
if(Math.abs(a)<=864e13)s=!1
else s=!0
if(s)A.bk(A.aM("DateTime is outside valid range: "+a,null))
A.dt(b,"isUtc",t.y)
return new A.cj(a,b)},
hB(a,b,c,d){var s,r=c?J.kz(a,d):J.mB(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
jK(a,b){var s,r=A.q([],b.h("z<0>"))
for(s=J.aK(a);s.B();)B.a.m(r,b.a(s.gC(s)))
return r},
e6(a,b){var s=A.mD(a,b)
return s},
mD(a,b){var s,r
if(Array.isArray(a))return A.q(a.slice(0),b.h("z<0>"))
s=A.q([],b.h("z<0>"))
for(r=J.aK(a);r.B();)B.a.m(s,r.gC(r))
return s},
kT(a,b,c){var s=J.aK(b)
if(!s.B())return a
if(c.length===0){do a+=A.m(s.gC(s))
while(s.B())}else{a+=A.m(s.gC(s))
for(;s.B();)a=a+c+A.m(s.gC(s))}return a},
kG(a,b){return new A.ej(a,b.gdc(),b.gdf(),b.gdd())},
mo(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
mp(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
dN(a){if(a>=10)return""+a
return"0"+a},
bq(a){if(typeof a=="number"||A.c8(a)||a==null)return J.dA(a)
if(typeof a=="string")return JSON.stringify(a)
return A.mY(a)},
mr(a,b){A.dt(a,"error",t.K)
A.dt(b,"stackTrace",t.l)
A.mq(a,b)},
dD(a){return new A.cd(a)},
aM(a,b){return new A.aL(!1,null,b,a)},
kk(a,b,c){return new A.aL(!0,a,b,c)},
kL(a,b){return new A.cK(null,null,!0,a,b,"Value not in range")},
kK(a,b,c,d,e){return new A.cK(b,c,!0,a,d,"Invalid value")},
O(a,b,c,d){return new A.dY(b,!0,a,d,"Index out of range")},
D(a){return new A.eN(a)},
jP(a){return new A.eL(a)},
I(a){return new A.bG(a)},
Z(a){return new A.dL(a)},
dP(a){return new A.iy(a)},
mA(a,b,c){var s,r
if(A.k6(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.q([],t.s)
B.a.m($.ae,a)
try{A.o1(a,s)}finally{if(0>=$.ae.length)return A.d($.ae,-1)
$.ae.pop()}r=A.kT(b,t.e.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
ky(a,b,c){var s,r
if(A.k6(a))return b+"..."+c
s=new A.cO(b)
B.a.m($.ae,a)
try{r=s
r.a=A.kT(r.a,a,", ")}finally{if(0>=$.ae.length)return A.d($.ae,-1)
$.ae.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
o1(a,b){var s,r,q,p,o,n,m,l=a.gH(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.B())return
s=A.m(l.gC(l))
B.a.m(b,s)
k+=s.length+2;++j}if(!l.B()){if(j<=5)return
if(0>=b.length)return A.d(b,-1)
r=b.pop()
if(0>=b.length)return A.d(b,-1)
q=b.pop()}else{p=l.gC(l);++j
if(!l.B()){if(j<=4){B.a.m(b,A.m(p))
return}r=A.m(p)
if(0>=b.length)return A.d(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gC(l);++j
for(;l.B();p=o,o=n){n=l.gC(l);++j
if(j>100){while(!0){if(!(k>75&&j>3))break
if(0>=b.length)return A.d(b,-1)
k-=b.pop().length+2;--j}B.a.m(b,"...")
return}}q=A.m(p)
r=A.m(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
while(!0){if(!(k>80&&b.length>3))break
if(0>=b.length)return A.d(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)B.a.m(b,m)
B.a.m(b,q)
B.a.m(b,r)},
kH(a,b,c,d){var s=B.b.gv(a)
b=B.b.gv(b)
c=B.b.gv(c)
d=B.b.gv(d)
d=A.kU(A.cP(A.cP(A.cP(A.cP($.m0(),s),b),c),d))
return d},
hL:function hL(a,b){this.a=a
this.b=b},
cj:function cj(a,b){this.a=a
this.b=b},
iv:function iv(){},
E:function E(){},
cd:function cd(a){this.a=a},
aY:function aY(){},
aL:function aL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cK:function cK(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
dY:function dY(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
ej:function ej(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eN:function eN(a){this.a=a},
eL:function eL(a){this.a=a},
bG:function bG(a){this.a=a},
dL:function dL(a){this.a=a},
en:function en(){},
cM:function cM(){},
iy:function iy(a){this.a=a},
hi:function hi(a){this.a=a},
f:function f(){},
G:function G(){},
v:function v(){},
fx:function fx(){},
cO:function cO(a){this.a=a},
os(){var s=document
s.toString
return s},
jE(a,b){var s=document.createElement("canvas")
s.toString
if(b!=null)B.e.sS(s,b)
if(a!=null)B.e.sP(s,a)
return s},
nd(a,b){if(b.parentNode===a){a.removeChild(b).toString
return!0}return!1},
kr(a){t.aS.a(a)
return"wheel"},
jF(a,b){var s,r,q,p,o=a===b
if(!o){s=b.tagName
s.toString
r=s==="HTML"}else r=!0
if(a==null||o){if(r)return new A.ba(0,0,t.E)
throw A.b(A.aM("Specified element is not a transitive offset parent of this element.",null))}q=A.jF(a.offsetParent,b)
s=a.offsetLeft
s.toString
s=B.b.F(s)
p=a.offsetTop
p.toString
return new A.ba(q.a+s,q.b+B.b.F(p),t.E)},
mu(a){return A.ku(a,null,null,null).b3(new A.hp(),t.N)},
ku(a,b,c,d){var s,r,q=new A.F($.C,t.ao),p=new A.bI(q,t.bj),o=new XMLHttpRequest()
o.toString
B.W.de(o,"GET",a,!0)
if(c!=null)o.responseType=c
s=t.dB
r=t.J
A.U(o,"load",s.a(new A.hq(o,p)),!1,r)
A.U(o,"error",s.a(p.gcT()),!1,r)
o.send()
return q},
mz(a){var s=new IntersectionObserver(A.aI(a,2))
s.toString
return s},
U(a,b,c,d,e){var s=c==null?null:A.k3(new A.iw(c),t.A)
s=new A.d0(a,b,s,!1,e.h("d0<0>"))
s.bE()
return s},
nK(a){var s
if(t.e5.b(a))return a
s=new A.im([],[])
s.c=!0
return s.b8(a)},
k3(a,b){var s=$.C
if(s===B.d)return a
return s.cS(a,b)},
n:function n(){},
h_:function h_(){},
dB:function dB(){},
dC:function dC(){},
bn:function bn(){},
bo:function bo(){},
bp:function bp(){},
az:function az(){},
h8:function h8(){},
A:function A(){},
ci:function ci(){},
h9:function h9(){},
ap:function ap(){},
aO:function aO(){},
ha:function ha(){},
hb:function hb(){},
hc:function hc(){},
bQ:function bQ(){},
aP:function aP(){},
he:function he(){},
ck:function ck(){},
cl:function cl(){},
dO:function dO(){},
hf:function hf(){},
h:function h(){},
j:function j(){},
c:function c(){},
a_:function a_(){},
dQ:function dQ(){},
dR:function dR(){},
bS:function bS(){},
bT:function bT(){},
dS:function dS(){},
a7:function a7(){},
ho:function ho(){},
bs:function bs(){},
ar:function ar(){},
hp:function hp(){},
hq:function hq(a,b){this.a=a
this.b=b},
bt:function bt(){},
co:function co(){},
dX:function dX(){},
bu:function bu(){},
hs:function hs(){},
aT:function aT(){},
hC:function hC(){},
bD:function bD(){},
hI:function hI(){},
e7:function e7(){},
hJ:function hJ(a){this.a=a},
e8:function e8(){},
hK:function hK(a){this.a=a},
a8:function a8(){},
e9:function e9(){},
a0:function a0(){},
r:function r(){},
cD:function cD(){},
a9:function a9(){},
ep:function ep(){},
av:function av(){},
eu:function eu(){},
hT:function hT(a){this.a=a},
ex:function ex(){},
a3:function a3(){},
ez:function ez(){},
ab:function ab(){},
eA:function eA(){},
ac:function ac(){},
eC:function eC(){},
hZ:function hZ(a){this.a=a},
X:function X(){},
a4:function a4(){},
T:function T(){},
eF:function eF(){},
eG:function eG(){},
i7:function i7(){},
ad:function ad(){},
aW:function aW(){},
cQ:function cQ(){},
i8:function i8(){},
b_:function b_(){},
ie:function ie(){},
eP:function eP(){},
eQ:function eQ(){},
bd:function bd(){},
be:function be(){},
aE:function aE(){},
eW:function eW(){},
cZ:function cZ(){},
f8:function f8(){},
d7:function d7(){},
ft:function ft(){},
fy:function fy(){},
jG:function jG(a,b){this.a=a
this.$ti=b},
d_:function d_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
f3:function f3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
d0:function d0(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
iw:function iw(a){this.a=a},
ix:function ix(a){this.a=a},
jS:function jS(a){this.$ti=a},
o:function o(){},
cn:function cn(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
eX:function eX(){},
f_:function f_(){},
f0:function f0(){},
f1:function f1(){},
f2:function f2(){},
f5:function f5(){},
f6:function f6(){},
f9:function f9(){},
fa:function fa(){},
ff:function ff(){},
fg:function fg(){},
fh:function fh(){},
fi:function fi(){},
fj:function fj(){},
fk:function fk(){},
fn:function fn(){},
fo:function fo(){},
fq:function fq(){},
dd:function dd(){},
de:function de(){},
fr:function fr(){},
fs:function fs(){},
fu:function fu(){},
fz:function fz(){},
fA:function fA(){},
dg:function dg(){},
dh:function dh(){},
fB:function fB(){},
fC:function fC(){},
fG:function fG(){},
fH:function fH(){},
fI:function fI(){},
fJ:function fJ(){},
fK:function fK(){},
fL:function fL(){},
fM:function fM(){},
fN:function fN(){},
fO:function fO(){},
fP:function fP(){},
lo(a){var s,r,q
if(a==null)return a
if(typeof a=="string"||typeof a=="number"||A.c8(a))return a
if(A.lM(a))return A.bj(a)
s=Array.isArray(a)
s.toString
if(s){r=[]
q=0
while(!0){s=a.length
s.toString
if(!(q<s))break
r.push(A.lo(a[q]));++q}return r}return a},
bj(a){var s,r,q,p,o,n
if(a==null)return null
s=A.e4(t.N,t.z)
r=Object.getOwnPropertyNames(a)
for(q=r.length,p=0;p<r.length;r.length===q||(0,A.a6)(r),++p){o=r[p]
n=o
n.toString
s.l(0,n,A.lo(a[o]))}return s},
ln(a){var s
if(a==null)return a
if(typeof a=="string"||typeof a=="number"||A.c8(a))return a
if(t.f.b(a))return A.lH(a)
if(t.j.b(a)){s=[]
J.fY(a,new A.iZ(s))
a=s}return a},
lH(a){var s={}
J.fY(a,new A.j8(s))
return s},
lM(a){var s=Object.getPrototypeOf(a),r=s===Object.prototype
r.toString
if(!r){r=s===null
r.toString}else r=!0
return r},
il:function il(){},
io:function io(a,b){this.a=a
this.b=b},
iZ:function iZ(a){this.a=a},
j8:function j8(a){this.a=a},
im:function im(a,b){this.a=a
this.b=b
this.c=!1},
cu:function cu(){},
nE(a,b,c,d){var s,r,q
A.jW(b)
t.j.a(d)
if(b){s=[c]
B.a.V(s,d)
d=s}r=t.z
q=A.jK(J.kj(d,A.oO(),r),r)
return A.jX(A.kt(t.Z.a(a),q))},
mC(a){return new A.hv(new A.d4(t.dx)).$1(a)},
nI(a){return a},
jY(a,b,c){var s
try{if(Object.isExtensible(a)&&!Object.prototype.hasOwnProperty.call(a,b)){Object.defineProperty(a,b,{value:c})
return!0}}catch(s){}return!1},
lu(a,b){if(Object.prototype.hasOwnProperty.call(a,b))return a[b]
return null},
jX(a){if(a==null||typeof a=="string"||typeof a=="number"||A.c8(a))return a
if(a instanceof A.aR)return a.a
if(A.lL(a))return a
if(t.Q.b(a))return a
if(a instanceof A.cj)return A.a2(a)
if(t.Z.b(a))return A.lt(a,"$dart_jsFunction",new A.j0())
return A.lt(a,"_$dart_jsObject",new A.j1($.kc()))},
lt(a,b,c){var s=A.lu(a,b)
if(s==null){s=c.$1(a)
A.jY(a,b,s)}return s},
lp(a){if(a==null||typeof a=="string"||typeof a=="number"||typeof a=="boolean")return a
else if(a instanceof Object&&A.lL(a))return a
else if(a instanceof Object&&t.Q.b(a))return a
else if(a instanceof Date)return A.kq(A.t(a.getTime()),!1)
else if(a.constructor===$.kc())return a.o
else return A.k2(a)},
k2(a){if(typeof a=="function")return A.jZ(a,$.fV(),new A.j4())
if(a instanceof Array)return A.jZ(a,$.ka(),new A.j5())
return A.jZ(a,$.ka(),new A.j6())},
jZ(a,b,c){var s=A.lu(a,b)
if(s==null||!(a instanceof Object)){s=c.$1(a)
A.jY(a,b,s)}return s},
hv:function hv(a){this.a=a},
j0:function j0(){},
j1:function j1(a){this.a=a},
j4:function j4(){},
j5:function j5(){},
j6:function j6(){},
aR:function aR(a){this.a=a},
cs:function cs(a){this.a=a},
by:function by(a,b){this.a=a
this.$ti=b},
c4:function c4(){},
nJ(a){var s,r=a.$dart_jsFunction
if(r!=null)return r
s=function(b,c){return function(){return b(c,Array.prototype.slice.apply(arguments))}}(A.nF,a)
s[$.fV()]=a
a.$dart_jsFunction=s
return s},
nF(a,b){t.j.a(b)
return A.kt(t.Z.a(a),b)},
lC(a,b){if(typeof a=="function")return a
else return b.a(A.nJ(a))},
oS(a,b){var s=new A.F($.C,b.h("F<0>")),r=new A.bI(s,b.h("bI<0>"))
a.then(A.aI(new A.jn(r,b),1),A.aI(new A.jo(r),1))
return s},
jn:function jn(a,b){this.a=a
this.b=b},
jo:function jo(a){this.a=a},
hM:function hM(a){this.a=a},
ba:function ba(a,b,c){this.a=a
this.b=b
this.$ti=c},
ah:function ah(){},
e3:function e3(){},
aj:function aj(){},
ek:function ek(){},
hO:function hO(){},
eD:function eD(){},
am:function am(){},
eI:function eI(){},
fd:function fd(){},
fe:function fe(){},
fl:function fl(){},
fm:function fm(){},
fv:function fv(){},
fw:function fw(){},
fD:function fD(){},
fE:function fE(){},
h1:function h1(){},
dE:function dE(){},
h2:function h2(a){this.a=a},
dF:function dF(){},
b7:function b7(){},
el:function el(){},
eV:function eV(){},
dG:function dG(){},
aN:function aN(){},
dU:function dU(){},
eq:function eq(){},
et:function et(){},
cL:function cL(){},
bY:function bY(){},
ey:function ey(){},
eH:function eH(){},
eK:function eK(){},
fZ:function fZ(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=0
_.a=null},
hW:function hW(a,b){var _=this
_.b=a
_.c=b
_.d=1
_.a=null},
ia:function ia(){},
dV:function dV(a){var _=this
_.a=a
_.f=_.e=_.d=_.c=_.b=0
_.x=_.w=_.r=null},
hj:function hj(){},
kE(a){var s=new A.aV(A.q([0,0,0,0,0,0,0,0,0],t.n))
s.c7(a)
return s},
kF(){return new A.bC(A.q([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t.n))},
cF(){return new A.a1(0,0)},
mN(a,b,c){return new A.aa(a,b,c)},
mZ(a,b,c,d){return new A.cI(new A.a1(c,d))},
bF(){return new A.aB(0,0,0,1)},
cJ(a,b){var s=b/2,r=Math.sin(s),q=a.a,p=a.b,o=a.c,n=Math.sqrt(q*q+p*p+o*o)
if(n===0)return A.bF()
return new A.aB(q/n*r,p/n*r,o/n*r,Math.cos(s))},
jM(a){var s=new A.aB(0,0,0,0)
s.c8(a)
return s},
kJ(a){var s=a.a,r=a.b,q=a.c,p=a.d
return A.er(a,1/Math.sqrt(s*s+r*r+q*q+p*p))},
er(a,b){return new A.aB(a.a*b,a.b*b,a.c*b,a.d*b)},
es(a,b,c){var s,r,q,p=a.a,o=b.a,n=a.b,m=b.b,l=a.c,k=b.c,j=a.d,i=b.d,h=p*o+n*m+l*k+j*i
if(h<0){h=-h
s=A.er(b,-1)}else s=b
if(h>0.9995)return A.kJ(a.p(0,A.er(new A.aB(o-p,m-n,k-l,i-j),c)))
r=Math.acos(h)
q=Math.sin(r)
p=Math.sin((1-c)*r)
o=Math.sin(c*r)
return A.kJ(A.er(a,p/q).p(0,A.er(s,o/q)))},
i9(){return new A.aX(A.q([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t.n))},
kY(a,b,c){return new A.P(a,b,c)},
l_(){return new A.P(0,0,0)},
jQ(a){var s=new A.P(0,0,0),r=a.a,q=a.b,p=a.c,o=Math.sqrt(r*r+q*q+p*p)
s.a=a.a/o
s.b=a.b/o
s.c=a.c/o
return s},
kZ(a,b){var s=a.b,r=b.c,q=a.c,p=b.b,o=b.a,n=a.a
return new A.P(s*r-q*p,q*o-n*r,n*p-s*o)},
dW:function dW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aV:function aV(a){this.a=a},
hF:function hF(a){this.a=a},
bC:function bC(a){this.a=a},
a1:function a1(a,b){this.a=a
this.b=b},
aa:function aa(a,b,c){this.a=a
this.b=b
this.c=c},
cI:function cI(a){this.b=a},
aB:function aB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hR:function hR(a){this.a=a},
cR:function cR(a){this.a=a},
aX:function aX(a){this.a=a},
P:function P(a,b,c){this.a=a
this.b=b
this.c=c},
hm:function hm(){},
hn:function hn(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
aS:function aS(a){this.a=a},
S:function S(a){this.a=a},
ct:function ct(a){this.a=a},
bR:function bR(a,b){this.b=a
this.a=b},
eS:function eS(a){this.a=a},
c5:function c5(a,b){this.a=a
this.b=b},
hx:function hx(a,b){this.a=a
this.b=b},
hy:function hy(a){this.a=a},
hz:function hz(a){this.a=a},
aG:function aG(a,b){this.a=a
this.b=b},
ea:function ea(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=!1},
bK:function bK(a,b){this.a=a
this.b=b},
em:function em(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null},
mf(a,b,c,d,e){return new A.bm(a,b,c,d,e)},
h5(){return new A.h4()},
l0(a){return new A.ih(a)},
jL(a){return new A.hG(a)},
ew(a){return new A.hU(a)},
ii(){return new A.cT(A.q([new A.bm("aPositionMapping",0,2,8,0)],t.U))},
n7(){var s,r,q,p=$.jR
if(p==null)try{p=A.jE(null,null)
s=A.e5(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],t.N,t.z)
r=B.e.aA(p,"webgl",s)
if(r==null)r=B.e.aA(p,"experimental-webgl",s)
t.eV.a(r)
$.jR=!0
p=!0}catch(q){$.jR=!1
p=!1}p.toString
return p},
n6(a,b){var s,r,q,p,o,n,m=b.getSupportedExtensions()
if(m==null)return
s=A.q([],t.s)
for(r=a.e,q=r.length,p=J.ax(m),o=0;o<r.length;r.length===q||(0,A.a6)(r),++o){n=r[o]
if(!p.aV(m,n))B.a.m(s,n)}if(s.length!==0)throw A.b(A.dP("Invalid webgl extensions\n"+A.m(s)))},
kQ(){return u.b},
kP(){return"    #version 300 es\n    precision highp float;\n\n    const float kDepthDelta = 0.0078125;\n\n    in vec2 vMapping;\n    out vec4 outColor;\n\n    uniform vec4 uViewBound;\n    uniform sampler2D uDepthDataSampler;\n    uniform sampler2D uOcclusionSampler;\n\n    void main()\n    {\n      vec4 depthData = texture(uDepthDataSampler, vMapping);\n      float range = (max(abs(depthData.x), abs(depthData.y)) + kDepthDelta) * 1.5;\n\n      vec2 occl = vec2(0.0, 1.0);\n      vec3 blur = vec3(0.0);\n      \n      for (int j = 0; j < 2; j++)\n      {\n        float y = float(j * 2) - 0.5;\n        for (int i = 0; i < 2; i++)\n        {\n          float x = float(i * 2) - 0.5;\n\n          vec2 sampling = vMapping + vec2(x, y) * uViewBound.zw;\n\n          occl.x = texture(uOcclusionSampler, sampling).x;\n          blur.z += occl.x;\n\n          float depth = texture(uDepthDataSampler, sampling).z;\n          if (abs(depth - depthData.z) < range) blur.xy += occl;\n        }\n      }\n\n      float occlusion = (blur.y > 0.0) ? blur.x / blur.y : blur.z * 0.25;\n      outColor = vec4(occlusion);\n    }\n  "},
kS(){return u.b},
kR(){return"    #version 300 es\n    precision highp float;\n\n\t  const float kTangentTau = 0.03125;\n    const float dx[4] = float[4](0.1, 0.0, -0.3, 0.0);\n    const float dy[4] = float[4](0.0, 0.2, 0.0, -0.4);\n\n    in vec2 vMapping;\n    out vec4 outColor;\n\n    uniform vec2 uData;\n    uniform vec4 uViewBound;\n    uniform sampler2D uDepthDataSampler;\n    uniform sampler2D uSamplingRotationSampler;\n\n    void main()\n    {\n      float vectorScale = uData.x;\n      float intensity = uData.y;\n\n      vec4 depthData = texture(uDepthDataSampler, vMapping);\n\n      float scale = vectorScale * depthData.z;\n      vec3 normal = normalize(vec3(depthData.xy, -scale));\n      scale = 1.0 / scale;\n\n      vec2 rot = texture(uSamplingRotationSampler, vMapping * uViewBound.xy * 0.25).xy;\n      float occlusion = 0.0;\n      float weight = 0.0;\n  \n      for (int i = 0; i < 4; i++)\n      {\n        vec3 v;\n        v.x = rot.x * dx[i] - rot.y * dy[i];\n        v.y = rot.y * dx[i] + rot.x * dy[i];\n\n        vec2 sampling = vMapping + ( v.xy * scale * uViewBound.zw);\n        v.z = texture(uDepthDataSampler, sampling).z - depthData.z;\n\n        float d = dot(normal, v);\n        float w = clamp(1.0 - d * 0.5, 0.0, 1.0);\n        float c = clamp(d * inversesqrt(dot(v, v)) - kTangentTau, 0.0, 1.0);\n\n        occlusion += w - w * sqrt(1.0 - c * c);\n        weight += w;\n      }\n\n      outColor = vec4(1.0 - occlusion * intensity / max(weight, 0.0001), 0, 0, 0);\n    }\n  "},
kW(){return"    precision highp float;\n    \n    attribute vec2 aPositionMapping;\n\n    uniform mat3 uPvwlTransform;\n\n    varying vec2 vMapping;\n\n    void main(void)\n    {\n      vMapping = aPositionMapping;\n\n      vec3 position = uPvwlTransform * vec3(aPositionMapping, 1.0);\n      gl_Position = vec4(position.xy, 0.0, 1.0);\n    }\n  "},
kV(){return"    precision highp float;\n\n    uniform sampler2D uSampler;\n\n    varying vec2 vMapping;\n\n    void main(void)\n    {\n      gl_FragColor = texture2D(uSampler, vMapping);\n    }\n  "},
l2(){return"    #version 300 es\n    precision highp float;\n\n    in vec3 aPosition;\n    out float vViewDepth;\n\n    uniform mat4 uPvwlTransform;\n\n    void main()\n    {\n      gl_Position = uPvwlTransform * vec4(aPosition, 1.0);\n      vViewDepth = gl_Position.w;\n    }\n  "},
l1(){return"    #version 300 es\n    precision highp float;\n    in float vViewDepth;\n    out vec4 outColor;\n\n    void main()\n    {\n      outColor = vec4(dFdx(vViewDepth), dFdy(vViewDepth), vViewDepth, 0);\n    }\n  "},
h7:function h7(a,b,c,d){var _=this
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
h4:function h4(){},
hr:function hr(a,b,c){this.a=a
this.b=b
this.c=c},
eO:function eO(a){this.b=a},
h6:function h6(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
hd:function hd(){},
dT:function dT(){},
h3:function h3(){var _=this
_.b=_.a=0
_.f=_.e=_.d=_.c=null},
hh:function hh(){var _=this
_.b=_.a=0
_.f=_.e=_.d=_.c=null},
hg:function hg(){var _=this
_.b=_.a=0
_.f=_.e=_.d=_.c=null},
cG:function cG(a,b,c,d){var _=this
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
id:function id(){},
ig:function ig(a){this.a=a
this.c=this.b=null},
ih:function ih(a){this.a=a
this.c=this.b=null},
hG:function hG(a){this.a=a
this.c=this.b=null},
hH:function hH(a){this.a=a
this.c=this.b=null},
hU:function hU(a){this.a=a
this.c=this.b=null},
cT:function cT(a){this.a=a},
hS:function hS(a,b,c){this.b=a
this.c=b
this.e=c},
ik:function ik(){this.a=null},
hX:function hX(a,b,c,d,e,f){var _=this
_.c=a
_.d=b
_.e=c
_.f=d
_.r=e
_.w=f},
hY:function hY(a,b,c,d,e,f,g,h){var _=this
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
i6:function i6(a,b,c,d){var _=this
_.c=a
_.d=b
_.e=c
_.f=d},
ij:function ij(a,b,c){this.c=a
this.d=b
this.e=c},
eR:function eR(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=!1
_.f=null},
oQ(){A.mt(A.q([A.mu("media/gltf/invaders.gltf"),A.ku("media/gltf/invaders.bin",null,"arraybuffer",null)],t.aJ),t.K).b3(new A.jj(),t.P)},
kB(){var s,r,q,p=$.kb()
p.l(0,"Report",null)
p.l(0,"Kill",null)
for(p=$.V.length,s=0;s<$.V.length;$.V.length===p||(0,A.a6)($.V),++s)$.V[s].W(0)
B.a.O($.V)
$.k1=-1
A.ks()
p=$.jt()
p.children.toString
r=$.dw()
q=r.a
A.nd(p,q)
r.f.unobserve(q)
r.f.disconnect()
r=$.js()
q=window
q.toString
p=r.x
p.toString
B.m.br(q)
q.cancelAnimationFrame(p)
r.r.a5(0)
r.w.a5(0)
$.ke().E()
$.kf().E()
$.kh().E()},
n0(){var s=A.e5(["status",$.k1,"fps",$.js().gd4(),"size","288"],t.N,t.K)
return A.k2(A.mC(s))},
kM(){var s,r,q=$.dw(),p=q.a,o=document,n=o.documentElement
n.toString
B.b.F(A.jF(p,n).a)
o=o.documentElement
o.toString
B.b.F(A.jF(p,o).b)
o=p.clientWidth
o.toString
n=window.devicePixelRatio
n.toString
n=B.b.F(o*n)
o=p.clientHeight
o.toString
s=window.devicePixelRatio
s.toString
q.b=new A.cI(new A.a1(n,B.b.F(o*s)))
B.e.sS(p,n)
B.e.sP(p,A.t(q.b.b.b))
q.f.takeRecords().toString
q=q.b.b
r=q.b/q.a
q=$.kg().a
B.a.l(q,0,2*r)
B.a.l(q,4,2)
B.a.l(q,6,-r)
B.a.l(q,7,-1)},
mI(a){var s,r,q
t.m.a(a)
s=$.jt().getBoundingClientRect()
s.left.toString
s.right.toString
r=s.width
r.toString
s=s.height
s.toString
q=a.a.b9(0,new A.a1(r,s)).T(0,new A.a1(0.5,0.5)).j(0,new A.a1(2,2))
$.dv().b=$.jA().p(0,new A.aa(q.a,-q.b,0))},
mH(a){var s
a=t.fJ.a(t.m.a(a))
s=a.a.T(0,a.b).b9(0,new A.a1(200,200))
$.dv().b=$.jA().p(0,new A.aa(s.a,-s.b,0))},
mJ(a){var s,r
t.k.a(a)
$.dv().d=0
s=$.fW()
s.f=B.b.bK(0.1,0,1)
switch(a.a){case 96:r=$.b6().d
s.b=r.gaW(r).Z(0)
break
case 97:r=$.b6().d
s.b=r.gb0(r)
break
case 98:r=$.b6().d
s.b=r.gaW(r)
break
case 99:r=$.b6().d
s.b=r.gb0(r).Z(0)
break
case 107:s.b=$.b6().d.gb6().Z(0)
break
case 109:s.b=$.b6().d.gb6()
break
case 100:s.d=A.cJ(new A.P(0,1,0),3.141592653589793)
break
case 102:s.d=A.cJ(new A.P(0,1,0),-3.141592653589793)
break
case 101:s.d=A.cJ(new A.P(1,0,0),3.141592653589793)
break
case 104:s.d=A.cJ(new A.P(1,0,0),-3.141592653589793)
break
case 103:s.d=A.cJ(new A.P(0,0,1),3.141592653589793)
break
case 105:s.d=A.cJ(new A.P(0,0,1),-3.141592653589793)
break}},
mK(a){var s
t.k.a(a)
s=$.fW()
s.c=new A.P(0,0,0)
s.b=new A.P(0,0,0)
s.e=A.bF()
s.d=A.bF()},
mL(a){var s,r,q,p
A.iV(a)
for(s=$.j2.length,r=0;r<s;++r){q=$.j2[r]
p=q.c-=a
if(p<=0){q.d=!q.d
q.c=1}}},
mM(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=null,a0=36160
A.iV(a1)
s=$.dv()
r=s.b
q=s.a.gR()
p=s.a
p.sR(p.gR().p(0,new A.aa(r.a-q.a,r.b-q.b,r.c-q.c).j(0,s.d).j(0,a1)))
o=A.es(A.jM(s.a.gY()),s.c,s.d*a1)
s=s.a
s.toString
s.sY(A.kE(o))
s=$.fW()
n=1-s.f
s.b=s.b.j(0,n)
s.c=s.c.j(0,n)
s.d=A.es(A.bF(),s.d,n)
s.e=A.es(A.bF(),s.e,n)
s.c=s.c.p(0,s.b.j(0,a1))
q=s.a
r=q.gR()
p=s.c.j(0,a1)
q.sR(r.p(0,new A.aa(p.a,p.b,p.c)))
p=s.e
s.e=A.es(p,p.j(0,s.d),a1)
m=A.jM(s.a.gY())
p=s.a
p.toString
p.sY(A.kE(A.es(m,m.j(0,s.e),a1)))
$.b6().aC()
A.n_()
s=$.jx()
p=s.c.a
p.toString
B.c.G(p,a0,s.d)
p=s.f
r=p.e
r.toString
p.J(r)
p.ab(9728)
p=$.dy()
p.sap(A.h5())
p.sar(a)
r=$.jq()
p.ad(r)
q=$.jy()
l=q.d
k=l.a.a
k.toString
B.c.az(k,l.b)
l=$.m1()
k=$.dx()
j=k.f.e
j.toString
i=$.kd()
h=r.b
g=h.a
f=q.e
e=t.x
l=e.a(l.a)
d=f.b.a
d.toString
B.c.b5(d,f.c,!1,l)
f=q.r
d=h.a
c=h.b
b=t.cA
c=e.a(A.q([d,c,1/d,1/c],b))
d=f.b.a
d.toString
B.c.c_(d,f.c,c)
f=q.w
d=f.b.a
d.toString
B.c.a8(d,f.c,j)
q.z=i
q.Q=g
q.as=4
j=q.f
i=e.a(A.q([2*i.b/(g*(1/Math.tan(i.a*0.5))),q.as],b))
g=j.b.a
g.toString
B.c.di(g,j.c,i)
j=q.x
q=q.y.e
q.toString
i=j.b.a
i.toString
B.c.a8(i,j.c,q)
if(7>=$.M.length)return A.d($.M,7)
q=$.M[7]
q.aa()
q.aD()
q.a9()
q=s.c.a
q.toString
B.c.G(q,a0,a)
p.a.flush()
q=k.f
j=q.e
j.toString
q.J(j)
q.ab(9729)
q=s.f
j=q.e
j.toString
q.J(j)
q.ab(9729)
q=$.jv()
j=q.c.a
j.toString
B.c.G(j,a0,q.d)
p.sap(A.h5())
p.sar(a)
p.ad(r)
r=$.jw()
j=r.d
i=j.a.a
i.toString
B.c.az(i,j.b)
k=k.f.e
k.toString
s=s.f.e
s.toString
j=r.e
i=j.b.a
i.toString
B.c.b5(i,j.c,!1,l)
l=r.f
j=h.a
h=h.b
b=e.a(A.q([j,h,1/j,1/h],b))
h=l.b.a
h.toString
B.c.c_(h,l.c,b)
l=r.r
j=l.b.a
j.toString
B.c.a8(j,l.c,k)
r=r.w
l=r.b.a
l.toString
B.c.a8(l,r.c,s)
if(7>=$.M.length)return A.d($.M,7)
s=$.M[7]
s.aa()
s.aD()
s.a9()
s=q.c.a
s.toString
B.c.G(s,a0,a)
p.a.flush()
p.sap(A.h5())
p.sar(a)
p.ad($.dw().b)
s=$.ju()
r=s.d
l=r.a.a
l.toString
B.c.az(l,r.b)
r=$.kg()
q=q.f.e
q.toString
l=s.e
k=l.b.a
k.toString
B.c.a8(k,l.c,q)
s=s.f
r=e.a(r.a)
e=s.b.a
e.toString
B.c.b5(e,s.c,!1,r)
if(7>=$.M.length)return A.d($.M,7)
s=$.M[7]
s.aa()
s.aD()
s.a9()
p.a.flush()},
mv(){var s,r,q,p,o=new A.bE(B.D,A.i9()),n=t.n
o.b=new A.aX(A.q([20,0,0,0,0,20,0,0,0,0,1,0,-10,-10,0,1],n))
B.a.m($.bL,o)
o=new A.bE(B.C,A.i9())
o.b=new A.aX(A.q([0.18,0,0,0,0,0.18,0,0,0,0,0.18,0,0,1.5,0,1],n))
B.a.m($.bL,o)
s=[B.h,B.h,B.i,B.i,B.j,B.j]
for(r=0;r<6;++r)for(o=-r*1.5,q=-2;q<=2;++q){p=new A.cp(s[r],new A.aX(A.q([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],n)))
p.b=new A.aX(A.q([0.1,0,0,0,0,0.1,0,0,0,0,0.1,0,q*1.5,o,0,1],n))
B.a.m($.j2,p)}B.a.V($.bL,$.j2)},
kv(){var s,r,q,p,o,n,m,l=36160,k=$.dy(),j=$.dw(),i=A.q([],t.s)
B.a.m(i,"EXT_color_buffer_float")
k.c6(j.a,new A.hS(!0,!0,i))
j=$.jr()
j.c=k
i=k.a.createBuffer()
i.toString
j.d=i
i=k.a.createBuffer()
i.toString
j.e=i
i=j.c.a
i.toString
B.c.ao(i,34963,j.d)
i=j.c.a
i.toString
B.c.ao(i,34962,j.e)
j.c.a.bufferData(34963,j.a,35044)
j.c.a.bufferData(34962,j.b,35044)
for(j=$.M.length,s=0;s<j;++s)$.M[s].e=k
j=$.dx()
i=$.jq()
j.aB(k,i,!0)
r=j.c.a
r.toString
B.c.G(r,l,j.d)
r=new A.c0(34842,6408,5131)
r.d=k
q=k.a.createTexture()
q.toString
r.f=q
r.J(0)
q=j.a
p=j.b
r.ac(new Uint16Array(q*p*4),q,p)
r.aE()
r.a1()
j.f=r
q=j.c.a
q.toString
r=r.f
r.toString
B.c.aX(q,l,36064,3553,r,0)
r=j.c.a
r.toString
B.c.G(r,l,null)
r=$.jx()
r.aB(k,i,!1)
q=r.c.a
q.toString
B.c.G(q,l,r.d)
q=new A.c0(33325,6403,5131)
q.d=k
p=k.a.createTexture()
p.toString
q.f=p
q.J(0)
p=r.a
o=r.b
q.ac(new Uint16Array(p*o),p,o)
q.aE()
q.a1()
r.f=q
p=r.c.a
p.toString
q=q.f
q.toString
B.c.aX(p,l,36064,3553,q,0)
q=r.c.a
q.toString
B.c.G(q,l,null)
q=$.jv()
q.aB(k,i,!1)
i=q.c.a
i.toString
B.c.G(i,l,q.d)
i=new A.c0(6408,6408,5121)
i.d=k
p=k.a.createTexture()
p.toString
i.f=p
i.J(0)
p=q.a
o=q.b
i.ac(new Uint8Array(p*o*4),p,o)
i.aE()
i.a1()
q.f=i
p=q.c.a
p.toString
i=i.f
i.toString
B.c.aX(p,l,36064,3553,i,0)
i=q.c.a
i.toString
B.c.G(i,l,null)
i=$.ju()
p=i.d
o=A.kW()
n=A.kV()
A.H(o)
A.H(n)
p.a=k
p.b=p.ae(o,n,i.c)
i.e.K(k,p)
i.f.K(k,p)
p=$.jz()
i=p.d
n=A.l2()
o=A.l1()
A.H(n)
A.H(o)
i.a=k
i.b=i.ae(n,o,p.c)
p.e.K(k,i)
i=$.jy()
p=i.d
o=A.kS()
n=A.kR()
A.H(o)
A.H(n)
p.a=k
p.b=p.ae(o,n,i.c)
i.e.K(k,p)
i.f.K(k,p)
i.r.K(k,p)
i.w.K(k,p)
i.x.K(k,p)
i.y=i.ca(k)
p=$.jw()
n=p.d
o=A.kQ()
m=A.kP()
A.H(o)
A.H(m)
n.a=k
n.b=n.ae(o,m,p.c)
p.e.K(k,n)
p.f.K(k,n)
p.r.K(k,n)
p.w.K(k,n)
j.f.J(1)
r.f.J(2)
q.f.J(3)
i.y.J(4)},
ks(){var s,r,q
for(s=$.M.length,r=0;r<s;++r)$.M[r].e=null
B.a.O($.M)
s=$.ju()
s.d.E()
q=s.e
q.b=q.c=null
s=s.f
s.b=s.c=null
s=$.jz()
s.d.E()
s=s.e
s.b=s.c=null
s=$.jy()
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
s=$.jw()
s.d.E()
q=s.e
q.b=q.c=null
q=s.f
q.b=q.c=null
q=s.r
q.b=q.c=null
s=s.w
s.b=s.c=null
$.dx().E()
$.jx().E()
$.jv().E()
s=$.jr()
q=s.c.a
q.toString
B.c.ao(q,34963,null)
q=s.c.a
q.toString
B.c.ao(q,34962,null)
q=s.c.a
q.toString
B.c.bN(q,s.d)
q=s.c.a
q.toString
B.c.bN(q,s.e)
s.c=null
$.dy().a=null},
n_(){var s,r,q,p,o,n=$.dx(),m=n.c.a
m.toString
B.c.G(m,36160,n.d)
n=n.f
m=n.e
m.toString
n.J(m)
n.ab(9728)
n=$.dy()
n.sap(A.h5())
n.sar(new A.hd())
n.ad($.jq())
n.a.clearColor(0,0,0,1)
n.a.clearDepth(1)
n.a.clear(16640)
n=$.jz()
m=n.d
s=m.a.a
s.toString
B.c.az(s,m.b)
for(m=$.bL.length,s=t.x,n=n.e,r=0;r<$.bL.length;$.bL.length===m||(0,A.a6)($.bL),++r){q=$.bL[r]
p=s.a($.b6().a.j(0,q.b).a)
o=n.b.a
o.toString
B.c.dj(o,n.c,!1,p)
p=q.gbU().a
if(!(p<$.M.length))return A.d($.M,p)
p=$.M[p]
p.aa()
o=p.a
p.e.a.drawElements(p.d,o.a,o.c,o.b)
p.a9()}n=$.dx().c.a
n.toString
B.c.G(n,36160,null)
$.dy().a.flush()},
bE:function bE(a,b){this.a=a
this.b=b},
cp:function cp(a,b){var _=this
_.c=0
_.d=!1
_.a=a
_.b=b},
jj:function jj(){},
je:function je(){},
jf:function jf(){},
jg:function jg(){},
jh:function jh(){},
ji:function ji(){},
au:function au(a,b){this.a=a
this.b=b},
lL(a){return t.fK.b(a)||t.A.b(a)||t.dz.b(a)||t.gb.b(a)||t.G.b(a)||t.g4.b(a)||t.g2.b(a)}},B={}
var w=[A,J,B]
var $={}
A.jI.prototype={}
J.bU.prototype={
L(a,b){return a===b},
gv(a){return A.cH(a)},
n(a){return"Instance of '"+A.hQ(a)+"'"},
bS(a,b){throw A.b(A.kG(a,t.B.a(b)))},
gD(a){return A.bN(A.k_(this))}}
J.dZ.prototype={
n(a){return String(a)},
gv(a){return a?519018:218159},
gD(a){return A.bN(t.y)},
$iB:1,
$ij7:1}
J.cr.prototype={
L(a,b){return null==b},
n(a){return"null"},
gv(a){return 0},
$iB:1,
$iG:1}
J.a.prototype={}
J.bz.prototype={
gv(a){return 0},
n(a){return String(a)}}
J.eo.prototype={}
J.bH.prototype={}
J.aA.prototype={
n(a){var s=a[$.fV()]
if(s==null)return this.c3(a)
return"JavaScript function for "+J.dA(s)},
$ibr:1}
J.bw.prototype={
gv(a){return 0},
n(a){return String(a)}}
J.bx.prototype={
gv(a){return 0},
n(a){return String(a)}}
J.z.prototype={
m(a,b){A.aH(a).c.a(b)
if(!!a.fixed$length)A.bk(A.D("add"))
a.push(b)},
V(a,b){var s
A.aH(a).h("f<1>").a(b)
if(!!a.fixed$length)A.bk(A.D("addAll"))
if(Array.isArray(b)){this.cn(a,b)
return}for(s=J.aK(b);s.B();)a.push(s.gC(s))},
cn(a,b){var s,r
t.b.a(b)
s=b.length
if(s===0)return
if(a===b)throw A.b(A.Z(a))
for(r=0;r<s;++r)a.push(b[r])},
O(a){if(!!a.fixed$length)A.bk(A.D("clear"))
a.length=0},
t(a,b){var s,r
A.aH(a).h("~(1)").a(b)
s=a.length
for(r=0;r<s;++r){b.$1(a[r])
if(a.length!==s)throw A.b(A.Z(a))}},
av(a,b,c){var s=A.aH(a)
return new A.aU(a,s.u(c).h("1(2)").a(b),s.h("@<1>").u(c).h("aU<1,2>"))},
d2(a,b,c,d){var s,r,q
d.a(b)
A.aH(a).u(d).h("1(1,2)").a(c)
s=a.length
for(r=b,q=0;q<s;++q){r=c.$2(r,a[q])
if(a.length!==s)throw A.b(A.Z(a))}return r},
q(a,b){if(!(b<a.length))return A.d(a,b)
return a[b]},
gA(a){if(a.length>0)return a[0]
throw A.b(A.kx())},
aV(a,b){var s
for(s=0;s<a.length;++s)if(J.fX(a[s],b))return!0
return!1},
n(a){return A.ky(a,"[","]")},
gH(a){return new J.bl(a,a.length,A.aH(a).h("bl<1>"))},
gv(a){return A.cH(a)},
gk(a){return a.length},
i(a,b){A.t(b)
if(!(b>=0&&b<a.length))throw A.b(A.fT(a,b))
return a[b]},
l(a,b,c){A.aH(a).c.a(c)
if(!!a.immutable$list)A.bk(A.D("indexed set"))
if(!(b>=0&&b<a.length))throw A.b(A.fT(a,b))
a[b]=c},
p(a,b){var s=A.aH(a)
s.h("l<1>").a(b)
s=A.e6(a,s.c)
this.V(s,b)
return s},
$ik:1,
$if:1,
$il:1}
J.ht.prototype={}
J.bl.prototype={
gC(a){var s=this.d
return s==null?this.$ti.c.a(s):s},
B(){var s,r=this,q=r.a,p=q.length
if(r.b!==p){q=A.a6(q)
throw A.b(q)}s=r.c
if(s>=p){r.sbq(null)
return!1}r.sbq(q[s]);++r.c
return!0},
sbq(a){this.d=this.$ti.h("1?").a(a)},
$iag:1}
J.bv.prototype={
aU(a,b){var s
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=B.f.gaZ(b)
if(this.gaZ(a)===s)return 0
if(this.gaZ(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gaZ(a){return a===0?1/a<0:a<0},
F(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.b(A.D(""+a+".round()"))},
bK(a,b,c){if(B.f.aU(b,c)>0)throw A.b(A.lE(b))
if(this.aU(a,b)<0)return b
if(this.aU(a,c)>0)return c
return a},
n(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gv(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
p(a,b){return a+b},
j(a,b){return a*b},
ba(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
cJ(a,b){return(a|0)===a?a/b|0:this.cK(a,b)},
cK(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.b(A.D("Result of truncating division is "+A.m(s)+": "+A.m(a)+" ~/ "+b))},
bD(a,b){var s
if(a>0)s=this.cH(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
cH(a,b){return b>31?0:a>>>b},
gD(a){return A.bN(t.H)},
$ix:1,
$iJ:1}
J.cq.prototype={
gD(a){return A.bN(t.S)},
$iB:1,
$ii:1}
J.e0.prototype={
gD(a){return A.bN(t.i)},
$iB:1}
J.b9.prototype={
p(a,b){A.H(b)
return a+b},
j(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.b(B.T)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
n(a){return a},
gv(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gD(a){return A.bN(t.N)},
gk(a){return a.length},
i(a,b){A.t(b)
if(!(b>=0&&b<a.length))throw A.b(A.fT(a,b))
return a[b]},
$iB:1,
$ip:1}
A.cv.prototype={
n(a){return"LateInitializationError: "+this.a}}
A.jl.prototype={
$0(){var s=new A.F($.C,t.ck)
s.af(null)
return s},
$S:44}
A.hV.prototype={}
A.k.prototype={}
A.ai.prototype={
gH(a){var s=this
return new A.bA(s,s.gk(s),A.w(s).h("bA<ai.E>"))},
t(a,b){var s,r,q=this
A.w(q).h("~(ai.E)").a(b)
s=q.gk(q)
for(r=0;r<s;++r){b.$1(q.q(0,r))
if(s!==q.gk(q))throw A.b(A.Z(q))}},
av(a,b,c){var s=A.w(this)
return new A.aU(this,s.u(c).h("1(ai.E)").a(b),s.h("@<ai.E>").u(c).h("aU<1,2>"))}}
A.bA.prototype={
gC(a){var s=this.d
return s==null?this.$ti.c.a(s):s},
B(){var s,r=this,q=r.a,p=J.ax(q),o=p.gk(q)
if(r.b!==o)throw A.b(A.Z(q))
s=r.c
if(s>=o){r.sa2(null)
return!1}r.sa2(p.q(q,s));++r.c
return!0},
sa2(a){this.d=this.$ti.h("1?").a(a)},
$iag:1}
A.bB.prototype={
gH(a){var s=A.w(this)
return new A.at(J.aK(this.a),this.b,s.h("@<1>").u(s.z[1]).h("at<1,2>"))},
gk(a){return J.dz(this.a)}}
A.cm.prototype={$ik:1}
A.at.prototype={
B(){var s=this,r=s.b
if(r.B()){s.sa2(s.c.$1(r.gC(r)))
return!0}s.sa2(null)
return!1},
gC(a){var s=this.a
return s==null?this.$ti.z[1].a(s):s},
sa2(a){this.a=this.$ti.h("2?").a(a)},
$iag:1}
A.aU.prototype={
gk(a){return J.dz(this.a)},
q(a,b){return this.b.$1(J.m9(this.a,b))}}
A.W.prototype={}
A.bZ.prototype={
gv(a){var s=this._hashCode
if(s!=null)return s
s=664597*B.v.gv(this.a)&536870911
this._hashCode=s
return s},
n(a){return'Symbol("'+this.a+'")'},
L(a,b){if(b==null)return!1
return b instanceof A.bZ&&this.a===b.a},
$ic_:1}
A.cg.prototype={}
A.cf.prototype={
n(a){return A.hD(this)},
$iK:1}
A.ch.prototype={
gk(a){return this.b.length},
gbw(){var s=this.$keys
if(s==null){s=Object.keys(this.a)
this.$keys=s}return s},
a6(a,b){if(typeof b!="string")return!1
if("__proto__"===b)return!1
return this.a.hasOwnProperty(b)},
i(a,b){if(!this.a6(0,b))return null
return this.b[this.a[b]]},
t(a,b){var s,r,q,p
this.$ti.h("~(1,2)").a(b)
s=this.gbw()
r=this.b
for(q=s.length,p=0;p<q;++p)b.$2(s[p],r[p])},
gI(a){return new A.d5(this.gbw(),this.$ti.h("d5<1>"))}}
A.d5.prototype={
gk(a){return this.a.length},
gH(a){var s=this.a
return new A.d6(s,s.length,this.$ti.h("d6<1>"))}}
A.d6.prototype={
gC(a){var s=this.d
return s==null?this.$ti.c.a(s):s},
B(){var s=this,r=s.c
if(r>=s.b){s.sa3(null)
return!1}s.sa3(s.a[r]);++s.c
return!0},
sa3(a){this.d=this.$ti.h("1?").a(a)},
$iag:1}
A.e_.prototype={
gdc(){var s=this.a
return s},
gdf(){var s,r,q,p,o=this
if(o.c===1)return B.x
s=o.d
r=s.length-o.e.length-o.f
if(r===0)return B.x
q=[]
for(p=0;p<r;++p){if(!(p<s.length))return A.d(s,p)
q.push(s[p])}q.fixed$length=Array
q.immutable$list=Array
return q},
gdd(){var s,r,q,p,o,n,m,l,k=this
if(k.c!==0)return B.y
s=k.e
r=s.length
q=k.d
p=q.length-r-k.f
if(r===0)return B.y
o=new A.aQ(t.eo)
for(n=0;n<r;++n){if(!(n<s.length))return A.d(s,n)
m=s[n]
l=p+n
if(!(l>=0&&l<q.length))return A.d(q,l)
o.l(0,new A.bZ(m),q[l])}return new A.cg(o,t.gF)},
$ikw:1}
A.hP.prototype={
$2(a,b){var s
A.H(a)
s=this.a
s.b=s.b+"$"+a
B.a.m(this.b,a)
B.a.m(this.c,b);++s.a},
$S:2}
A.ib.prototype={
N(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
n(a){return"Null check operator used on a null value"}}
A.e1.prototype={
n(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.eM.prototype={
n(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.hN.prototype={
n(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.df.prototype={
n(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$ial:1}
A.b8.prototype={
n(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.lP(r==null?"unknown":r)+"'"},
$ibr:1,
gdm(){return this},
$C:"$1",
$R:1,
$D:null}
A.dI.prototype={$C:"$0",$R:0}
A.dJ.prototype={$C:"$2",$R:2}
A.eE.prototype={}
A.eB.prototype={
n(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.lP(s)+"'"}}
A.bP.prototype={
L(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.bP))return!1
return this.$_target===b.$_target&&this.a===b.a},
gv(a){return(A.jm(this.a)^A.cH(this.$_target))>>>0},
n(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.hQ(this.a)+"'")}}
A.eY.prototype={
n(a){return"Reading static variable '"+this.a+"' during its initialization"}}
A.ev.prototype={
n(a){return"RuntimeError: "+this.a}}
A.eT.prototype={
n(a){return"Assertion failed: "+A.bq(this.a)}}
A.iN.prototype={}
A.aQ.prototype={
gk(a){return this.a},
gI(a){return new A.as(this,A.w(this).h("as<1>"))},
gb7(a){var s=A.w(this)
return A.kD(new A.as(this,s.h("as<1>")),new A.hu(this),s.c,s.z[1])},
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
return q}else return this.d7(b)},
d7(a){var s,r,q=this.d
if(q==null)return null
s=q[this.bQ(a)]
r=this.bR(s,a)
if(r<0)return null
return s[r].b},
l(a,b,c){var s,r,q,p,o,n,m=this,l=A.w(m)
l.c.a(b)
l.z[1].a(c)
if(typeof b=="string"){s=m.b
m.bh(s==null?m.b=m.aL():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=m.c
m.bh(r==null?m.c=m.aL():r,b,c)}else{q=m.d
if(q==null)q=m.d=m.aL()
p=m.bQ(b)
o=q[p]
if(o==null)q[p]=[m.aM(b,c)]
else{n=m.bR(o,b)
if(n>=0)o[n].b=c
else o.push(m.aM(b,c))}}},
O(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.bz()}},
t(a,b){var s,r,q=this
A.w(q).h("~(1,2)").a(b)
s=q.e
r=q.r
for(;s!=null;){b.$2(s.a,s.b)
if(r!==q.r)throw A.b(A.Z(q))
s=s.c}},
bh(a,b,c){var s,r=A.w(this)
r.c.a(b)
r.z[1].a(c)
s=a[b]
if(s==null)a[b]=this.aM(b,c)
else s.b=c},
bz(){this.r=this.r+1&1073741823},
aM(a,b){var s=this,r=A.w(s),q=new A.hA(r.c.a(a),r.z[1].a(b))
if(s.e==null)s.e=s.f=q
else s.f=s.f.c=q;++s.a
s.bz()
return q},
bQ(a){return J.jC(a)&1073741823},
bR(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.fX(a[r].a,b))return r
return-1},
n(a){return A.hD(this)},
aL(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
$ikC:1}
A.hu.prototype={
$1(a){var s=this.a,r=A.w(s)
s=s.i(0,r.c.a(a))
return s==null?r.z[1].a(s):s},
$S(){return A.w(this.a).h("2(1)")}}
A.hA.prototype={}
A.as.prototype={
gk(a){return this.a.a},
gH(a){var s=this.a,r=new A.cw(s,s.r,this.$ti.h("cw<1>"))
r.c=s.e
return r},
t(a,b){var s,r,q
this.$ti.h("~(1)").a(b)
s=this.a
r=s.e
q=s.r
for(;r!=null;){b.$1(r.a)
if(q!==s.r)throw A.b(A.Z(s))
r=r.c}}}
A.cw.prototype={
gC(a){return this.d},
B(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.b(A.Z(q))
s=r.c
if(s==null){r.sa3(null)
return!1}else{r.sa3(s.a)
r.c=s.c
return!0}},
sa3(a){this.d=this.$ti.h("1?").a(a)},
$iag:1}
A.ja.prototype={
$1(a){return this.a(a)},
$S:6}
A.jb.prototype={
$2(a,b){return this.a(a,b)},
$S:21}
A.jc.prototype={
$1(a){return this.a(A.H(a))},
$S:41}
A.iu.prototype={
al(){var s=this.b
if(s===this)throw A.b(new A.cv("Local '"+this.a+"' has not been initialized."))
return s}}
A.eb.prototype={
gD(a){return B.a8},
cR(a,b,c){A.iY(a,b,c)
return c==null?new Uint8Array(a,b):new Uint8Array(a,b,c)},
cQ(a){return this.cR(a,0,null)},
$iB:1}
A.cA.prototype={$iL:1}
A.ec.prototype={
gD(a){return B.a9},
$iB:1}
A.bW.prototype={
gk(a){return a.length},
$iu:1}
A.cy.prototype={
i(a,b){A.t(b)
A.b1(b,a,a.length)
return a[b]},
l(a,b,c){A.iV(c)
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
gD(a){return B.aa},
$iB:1,
$ijH:1}
A.ed.prototype={
gD(a){return B.ab},
$iB:1}
A.ee.prototype={
gD(a){return B.ac},
i(a,b){A.t(b)
A.b1(b,a,a.length)
return a[b]},
$iB:1}
A.ef.prototype={
gD(a){return B.ad},
i(a,b){A.t(b)
A.b1(b,a,a.length)
return a[b]},
$iB:1}
A.eg.prototype={
gD(a){return B.ae},
i(a,b){A.t(b)
A.b1(b,a,a.length)
return a[b]},
$iB:1}
A.cB.prototype={
gD(a){return B.ag},
i(a,b){A.t(b)
A.b1(b,a,a.length)
return a[b]},
$iB:1,
$ijO:1}
A.eh.prototype={
gD(a){return B.ah},
i(a,b){A.t(b)
A.b1(b,a,a.length)
return a[b]},
$iB:1}
A.cC.prototype={
gD(a){return B.ai},
gk(a){return a.length},
i(a,b){A.t(b)
A.b1(b,a,a.length)
return a[b]},
$iB:1}
A.ei.prototype={
gD(a){return B.aj},
gk(a){return a.length},
i(a,b){A.t(b)
A.b1(b,a,a.length)
return a[b]},
$iB:1,
$ieJ:1}
A.d8.prototype={}
A.d9.prototype={}
A.da.prototype={}
A.db.prototype={}
A.ak.prototype={
h(a){return A.iT(v.typeUniverse,this,a)},
u(a){return A.nx(v.typeUniverse,this,a)}}
A.f7.prototype={}
A.iS.prototype={
n(a){return A.a5(this.a,null)}}
A.f4.prototype={
n(a){return this.a}}
A.di.prototype={$iaY:1}
A.iq.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:11}
A.ip.prototype={
$1(a){var s,r
this.a.a=t.M.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:19}
A.ir.prototype={
$0(){this.a.$0()},
$S:8}
A.is.prototype={
$0(){this.a.$0()},
$S:8}
A.iQ.prototype={
cm(a,b){if(self.setTimeout!=null)self.setTimeout(A.aI(new A.iR(this,b),0),a)
else throw A.b(A.D("`setTimeout()` not found."))}}
A.iR.prototype={
$0(){this.b.$0()},
$S:0}
A.ce.prototype={
n(a){return A.m(this.a)},
$iE:1,
ga_(){return this.b}}
A.Q.prototype={}
A.aw.prototype={
aO(){},
aP(){},
sa4(a){this.ch=this.$ti.h("aw<1>?").a(a)},
sak(a){this.CW=this.$ti.h("aw<1>?").a(a)}}
A.cU.prototype={
gby(){return this.c<4},
cE(a){var s,r
A.w(this).h("aw<1>").a(a)
s=a.CW
r=a.ch
if(s==null)this.sbs(r)
else s.sa4(r)
if(r==null)this.sbx(s)
else r.sak(s)
a.sak(a)
a.sa4(a)},
cI(a,b,c,d){var s,r,q,p,o,n,m=this,l=A.w(m)
l.h("~(1)?").a(a)
t.Y.a(c)
if((m.c&4)!==0){l=new A.c2($.C,l.h("c2<1>"))
A.k8(l.gcz())
if(c!=null)l.saN(t.M.a(c))
return l}s=$.C
r=d?1:0
q=A.l4(s,a,l.c)
A.nc(s,b)
p=c==null?A.on():c
l=l.h("aw<1>")
o=new A.aw(m,q,t.M.a(p),s,r,l)
o.sak(o)
o.sa4(o)
l.a(o)
o.ay=m.c&1
n=m.e
m.sbx(o)
o.sa4(null)
o.sak(n)
if(n==null)m.sbs(o)
else n.sa4(o)
if(m.d==m.e)A.lA(m.a)
return o},
cC(a){var s=this,r=A.w(s)
a=r.h("aw<1>").a(r.h("aD<1>").a(a))
if(a.ch===a)return null
r=a.ay
if((r&2)!==0)a.ay=r|4
else{s.cE(a)
if((s.c&2)===0&&s.d==null)s.cr()}return null},
bg(){if((this.c&4)!==0)return new A.bG("Cannot add new events after calling close")
return new A.bG("Cannot add new events while doing an addStream")},
m(a,b){var s=this
A.w(s).c.a(b)
if(!s.gby())throw A.b(s.bg())
s.aS(b)},
a5(a){var s,r,q=this
if((q.c&4)!==0){s=q.r
s.toString
return s}if(!q.gby())throw A.b(q.bg())
q.c|=4
r=q.r
if(r==null)r=q.r=new A.F($.C,t.cd)
q.aT()
return r},
cr(){if((this.c&4)!==0){var s=this.r
if((s.a&30)===0)s.af(null)}A.lA(this.b)},
sbs(a){this.d=A.w(this).h("aw<1>?").a(a)},
sbx(a){this.e=A.w(this).h("aw<1>?").a(a)},
$icN:1,
$ilf:1,
$ibg:1}
A.aF.prototype={
aS(a){var s,r=this.$ti
r.c.a(a)
for(s=this.d,r=r.h("cY<1>");s!=null;s=s.ch)s.bi(new A.cY(a,r))},
aT(){var s=this.d
if(s!=null)for(;s!=null;s=s.ch)s.bi(B.U)
else this.r.af(null)}}
A.hl.prototype={
$2(a,b){var s,r,q=this
t.K.a(a)
t.l.a(b)
s=q.a
r=--s.b
if(s.a!=null){s.a=null
if(s.b===0||q.c)q.d.M(a,b)
else{q.e.b=a
q.f.b=b}}else if(r===0&&!q.c)q.d.M(q.e.al(),q.f.al())},
$S:4}
A.hk.prototype={
$1(a){var s,r,q=this,p=q.w
p.a(a)
r=q.a;--r.b
s=r.a
if(s!=null){J.m5(s,q.b,a)
if(r.b===0)q.c.ah(A.jK(s,p))}else if(r.b===0&&!q.e)q.c.M(q.f.al(),q.r.al())},
$S(){return this.w.h("G(0)")}}
A.cV.prototype={
bM(a,b){var s
A.dt(a,"error",t.K)
s=this.a
if((s.a&30)!==0)throw A.b(A.I("Future already completed"))
b=A.jD(a)
s.bj(a,b)},
aq(a){return this.bM(a,null)}}
A.bI.prototype={
bL(a,b){var s,r=this.$ti
r.h("1/?").a(b)
s=this.a
if((s.a&30)!==0)throw A.b(A.I("Future already completed"))
s.af(r.h("1/").a(b))}}
A.bJ.prototype={
da(a){if((this.c&15)!==6)return!0
return this.b.b.b2(t.al.a(this.d),a.a,t.y,t.K)},
d6(a){var s,r=this,q=r.e,p=null,o=t.z,n=t.K,m=a.a,l=r.b.b
if(t.C.b(q))p=l.dg(q,m,a.b,o,n,t.l)
else p=l.b2(t.v.a(q),m,o,n)
try{o=r.$ti.h("2/").a(p)
return o}catch(s){if(t.eK.b(A.aJ(s))){if((r.c&1)!==0)throw A.b(A.aM("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.b(A.aM("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.F.prototype={
bC(a){this.a=this.a&1|4
this.c=a},
b4(a,b,c){var s,r,q,p=this.$ti
p.u(c).h("1/(2)").a(a)
s=$.C
if(s===B.d){if(b!=null&&!t.C.b(b)&&!t.v.b(b))throw A.b(A.kk(b,"onError",u.c))}else{c.h("@<0/>").u(p.c).h("1(2)").a(a)
if(b!=null)b=A.o8(b,s)}r=new A.F(s,c.h("F<0>"))
q=b==null?1:3
this.aG(new A.bJ(r,q,a,b,p.h("@<1>").u(c).h("bJ<1,2>")))
return r},
b3(a,b){return this.b4(a,null,b)},
cG(a){this.a=this.a&1|16
this.c=a},
ag(a){this.a=a.a&30|this.a&1
this.c=a.c},
aG(a){var s,r=this,q=r.a
if(q<=3){a.a=t.F.a(r.c)
r.c=a}else{if((q&4)!==0){s=t.c.a(r.c)
if((s.a&24)===0){s.aG(a)
return}r.ag(s)}A.bM(null,null,r.b,t.M.a(new A.iz(r,a)))}},
aR(a){var s,r,q,p,o,n,m=this,l={}
l.a=a
if(a==null)return
s=m.a
if(s<=3){r=t.F.a(m.c)
m.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){n=t.c.a(m.c)
if((n.a&24)===0){n.aR(a)
return}m.ag(n)}l.a=m.an(a)
A.bM(null,null,m.b,t.M.a(new A.iG(l,m)))}},
am(){var s=t.F.a(this.c)
this.c=null
return this.an(s)},
an(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
cs(a){var s,r,q,p=this
p.a^=2
try{a.b4(new A.iD(p),new A.iE(p),t.P)}catch(q){s=A.aJ(q)
r=A.b4(q)
A.k8(new A.iF(p,s,r))}},
bn(a){var s,r=this,q=r.$ti
q.h("1/").a(a)
s=r.am()
q.c.a(a)
r.a=8
r.c=a
A.c3(r,s)},
ah(a){var s,r=this
r.$ti.c.a(a)
s=r.am()
r.a=8
r.c=a
A.c3(r,s)},
M(a,b){var s
t.K.a(a)
t.l.a(b)
s=this.am()
this.cG(A.h0(a,b))
A.c3(this,s)},
af(a){var s=this.$ti
s.h("1/").a(a)
if(s.h("aq<1>").b(a)){this.ct(a)
return}this.cq(a)},
cq(a){var s=this
s.$ti.c.a(a)
s.a^=2
A.bM(null,null,s.b,t.M.a(new A.iB(s,a)))},
ct(a){var s=this.$ti
s.h("aq<1>").a(a)
if(s.b(a)){A.ne(a,this)
return}this.cs(a)},
bj(a,b){t.l.a(b)
this.a^=2
A.bM(null,null,this.b,t.M.a(new A.iA(this,a,b)))},
$iaq:1}
A.iz.prototype={
$0(){A.c3(this.a,this.b)},
$S:0}
A.iG.prototype={
$0(){A.c3(this.b,this.a.a)},
$S:0}
A.iD.prototype={
$1(a){var s,r,q,p=this.a
p.a^=2
try{p.ah(p.$ti.c.a(a))}catch(q){s=A.aJ(q)
r=A.b4(q)
p.M(s,r)}},
$S:11}
A.iE.prototype={
$2(a,b){this.a.M(t.K.a(a),t.l.a(b))},
$S:20}
A.iF.prototype={
$0(){this.a.M(this.b,this.c)},
$S:0}
A.iC.prototype={
$0(){A.l7(this.a.a,this.b)},
$S:0}
A.iB.prototype={
$0(){this.a.ah(this.b)},
$S:0}
A.iA.prototype={
$0(){this.a.M(this.b,this.c)},
$S:0}
A.iJ.prototype={
$0(){var s,r,q,p,o,n,m=this,l=null
try{q=m.a.a
l=q.b.b.bX(t.O.a(q.d),t.z)}catch(p){s=A.aJ(p)
r=A.b4(p)
q=m.c&&t.t.a(m.b.a.c).a===s
o=m.a
if(q)o.c=t.t.a(m.b.a.c)
else o.c=A.h0(s,r)
o.b=!0
return}if(l instanceof A.F&&(l.a&24)!==0){if((l.a&16)!==0){q=m.a
q.c=t.t.a(l.c)
q.b=!0}return}if(l instanceof A.F){n=m.b.a
q=m.a
q.c=l.b3(new A.iK(n),t.z)
q.b=!1}},
$S:0}
A.iK.prototype={
$1(a){return this.a},
$S:29}
A.iI.prototype={
$0(){var s,r,q,p,o,n,m,l
try{q=this.a
p=q.a
o=p.$ti
n=o.c
m=n.a(this.b)
q.c=p.b.b.b2(o.h("2/(1)").a(p.d),m,o.h("2/"),n)}catch(l){s=A.aJ(l)
r=A.b4(l)
q=this.a
q.c=A.h0(s,r)
q.b=!0}},
$S:0}
A.iH.prototype={
$0(){var s,r,q,p,o,n,m=this
try{s=t.t.a(m.a.a.c)
p=m.b
if(p.a.da(s)&&p.a.e!=null){p.c=p.a.d6(s)
p.b=!1}}catch(o){r=A.aJ(o)
q=A.b4(o)
p=t.t.a(m.a.a.c)
n=m.b
if(p.a===r)n.c=p
else n.c=A.h0(r,q)
n.b=!0}},
$S:0}
A.eU.prototype={}
A.bc.prototype={
t(a,b){var s,r
A.w(this).h("~(1)").a(b)
s=new A.F($.C,t.c)
r=this.au(null,!0,new A.i2(s),s.gbo())
r.b_(new A.i3(this,b,r,s))
return s},
gk(a){var s={},r=new A.F($.C,t.gQ)
s.a=0
this.au(new A.i4(s,this),!0,new A.i5(s,r),r.gbo())
return r}}
A.i2.prototype={
$0(){this.a.bn(null)},
$S:0}
A.i3.prototype={
$1(a){var s=this
A.oa(new A.i0(s.b,A.w(s.a).c.a(a)),new A.i1(),A.nH(s.c,s.d),t.p)},
$S(){return A.w(this.a).h("~(1)")}}
A.i0.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
A.i1.prototype={
$1(a){},
$S:32}
A.i4.prototype={
$1(a){A.w(this.b).c.a(a);++this.a.a},
$S(){return A.w(this.b).h("~(1)")}}
A.i5.prototype={
$0(){this.b.bn(this.a.a)},
$S:0}
A.cW.prototype={
gv(a){return(A.cH(this.a)^892482866)>>>0},
L(a,b){if(b==null)return!1
if(this===b)return!0
return b instanceof A.Q&&b.a===this.a}}
A.cX.prototype={
bA(){return this.w.cC(this)},
aO(){A.w(this.w).h("aD<1>").a(this)},
aP(){A.w(this.w).h("aD<1>").a(this)}}
A.c1.prototype={
b_(a){var s=A.w(this)
this.scp(A.l4(this.d,s.h("~(1)?").a(a),s.c))},
W(a){var s=this.e&=4294967279
if((s&8)===0)this.bk()
s=$.jp()
return s},
bk(){var s,r=this,q=r.e|=8
if((q&64)!==0){s=r.r
if(s.a===1)s.a=3}if((q&32)===0)r.saQ(null)
r.f=r.bA()},
aO(){},
aP(){},
bA(){return null},
bi(a){var s,r,q=this,p=q.r
if(p==null){p=new A.dc(A.w(q).h("dc<1>"))
q.saQ(p)}s=p.c
if(s==null)p.b=p.c=a
else{s.sa7(0,a)
p.c=a}r=q.e
if((r&64)===0){r|=64
q.e=r
if(r<128)p.bb(q)}},
aS(a){var s,r=this,q=A.w(r).c
q.a(a)
s=r.e
r.e=s|32
r.d.bY(r.a,a,q)
r.e&=4294967263
r.cu((s&4)!==0)},
aT(){this.bk()
this.e|=16
new A.it(this).$0()},
cu(a){var s,r,q=this,p=q.e
if((p&64)!==0&&q.r.c==null){p=q.e=p&4294967231
if((p&4)!==0)if(p<128){s=q.r
s=s==null?null:s.c==null
s=s!==!1}else s=!1
else s=!1
if(s){p&=4294967291
q.e=p}}for(;!0;a=r){if((p&8)!==0){q.saQ(null)
return}r=(p&4)!==0
if(a===r)break
q.e=p^32
if(r)q.aO()
else q.aP()
p=q.e&=4294967263}if((p&64)!==0&&p<128)q.r.bb(q)},
scp(a){this.a=A.w(this).h("~(1)").a(a)},
saQ(a){this.r=A.w(this).h("dc<1>?").a(a)},
$iaD:1,
$ibg:1}
A.it.prototype={
$0(){var s=this.a,r=s.e
if((r&16)===0)return
s.e=r|42
s.d.b1(s.c)
s.e&=4294967263},
$S:0}
A.c6.prototype={
au(a,b,c,d){var s=this.$ti
s.h("~(1)?").a(a)
t.Y.a(c)
return this.a.cI(s.h("~(1)?").a(a),d,c,b===!0)},
X(a){return this.au(a,null,null,null)}}
A.bf.prototype={
sa7(a,b){this.a=t.ev.a(b)},
ga7(a){return this.a}}
A.cY.prototype={
bT(a){this.$ti.h("bg<1>").a(a).aS(this.b)}}
A.eZ.prototype={
bT(a){a.aT()},
ga7(a){return null},
sa7(a,b){throw A.b(A.I("No events after a done."))},
$ibf:1}
A.dc.prototype={
bb(a){var s,r=this
r.$ti.h("bg<1>").a(a)
s=r.a
if(s===1)return
if(s>=1){r.a=1
return}A.k8(new A.iM(r,a))
r.a=1}}
A.iM.prototype={
$0(){var s,r,q,p=this.a,o=p.a
p.a=0
if(o===3)return
s=p.$ti.h("bg<1>").a(this.b)
r=p.b
q=r.ga7(r)
p.b=q
if(q==null)p.c=null
r.bT(s)},
$S:0}
A.c2.prototype={
b_(a){this.$ti.h("~(1)?").a(a)},
W(a){this.a=-1
this.saN(null)
return $.jp()},
cA(){var s,r,q,p=this,o=p.a-1
if(o===0){p.a=-1
s=p.c
if(s!=null){r=s
q=!0}else{r=null
q=!1}if(q){p.saN(null)
p.b.b1(r)}}else p.a=o},
saN(a){this.c=t.Y.a(a)},
$iaD:1}
A.iX.prototype={
$0(){return this.a.M(this.b,this.c)},
$S:0}
A.iW.prototype={
$2(a,b){A.nG(this.a,this.b,a,t.l.a(b))},
$S:4}
A.dn.prototype={$il3:1}
A.j3.prototype={
$0(){A.mr(this.a,this.b)},
$S:0}
A.fp.prototype={
b1(a){var s,r,q
t.M.a(a)
try{if(B.d===$.C){a.$0()
return}A.lx(null,null,this,a,t.p)}catch(q){s=A.aJ(q)
r=A.b4(q)
A.fS(t.K.a(s),t.l.a(r))}},
bY(a,b,c){var s,r,q
c.h("~(0)").a(a)
c.a(b)
try{if(B.d===$.C){a.$1(b)
return}A.ly(null,null,this,a,b,t.p,c)}catch(q){s=A.aJ(q)
r=A.b4(q)
A.fS(t.K.a(s),t.l.a(r))}},
bH(a){return new A.iO(this,t.M.a(a))},
cS(a,b){return new A.iP(this,b.h("~(0)").a(a),b)},
i(a,b){return null},
bX(a,b){b.h("0()").a(a)
if($.C===B.d)return a.$0()
return A.lx(null,null,this,a,b)},
b2(a,b,c,d){c.h("@<0>").u(d).h("1(2)").a(a)
d.a(b)
if($.C===B.d)return a.$1(b)
return A.ly(null,null,this,a,b,c,d)},
dg(a,b,c,d,e,f){d.h("@<0>").u(e).u(f).h("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.C===B.d)return a.$2(b,c)
return A.o9(null,null,this,a,b,c,d,e,f)},
bV(a,b,c,d){return b.h("@<0>").u(c).u(d).h("1(2,3)").a(a)}}
A.iO.prototype={
$0(){return this.a.b1(this.b)},
$S:0}
A.iP.prototype={
$1(a){var s=this.c
return this.a.bY(this.b,s.a(a),s)},
$S(){return this.c.h("~(0)")}}
A.d1.prototype={
gk(a){return this.a},
gI(a){return new A.d2(this,this.$ti.h("d2<1>"))},
a6(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
return s==null?!1:s[b]!=null}else if(typeof b=="number"&&(b&1073741823)===b){r=this.c
return r==null?!1:r[b]!=null}else return this.cv(b)},
cv(a){var s=this.d
if(s==null)return!1
return this.aK(this.bt(s,a),a)>=0},
i(a,b){var s,r,q
if(typeof b=="string"&&b!=="__proto__"){s=this.b
r=s==null?null:A.l8(s,b)
return r}else if(typeof b=="number"&&(b&1073741823)===b){q=this.c
r=q==null?null:A.l8(q,b)
return r}else return this.cw(0,b)},
cw(a,b){var s,r,q=this.d
if(q==null)return null
s=this.bt(q,b)
r=this.aK(s,b)
return r<0?null:s[r+1]},
l(a,b,c){var s,r,q,p,o=this,n=o.$ti
n.c.a(b)
n.z[1].a(c)
s=o.d
if(s==null)s=o.d=A.nf()
r=A.jm(b)&1073741823
q=s[r]
if(q==null){A.l9(s,r,[b,c]);++o.a
o.e=null}else{p=o.aK(q,b)
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
if(s!==m.e)throw A.b(A.Z(m))}},
aH(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.e
if(h!=null)return h
h=A.hB(i.a,null,!1,t.z)
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
bt(a,b){return a[A.jm(b)&1073741823]}}
A.d4.prototype={
aK(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=0;r<s;r+=2){q=a[r]
if(q==null?b==null:q===b)return r}return-1}}
A.d2.prototype={
gk(a){return this.a.a},
gH(a){var s=this.a
return new A.d3(s,s.aH(),this.$ti.h("d3<1>"))},
t(a,b){var s,r,q,p
this.$ti.h("~(1)").a(b)
s=this.a
r=s.aH()
for(q=r.length,p=0;p<q;++p){b.$1(r[p])
if(r!==s.e)throw A.b(A.Z(s))}}}
A.d3.prototype={
gC(a){var s=this.d
return s==null?this.$ti.c.a(s):s},
B(){var s=this,r=s.b,q=s.c,p=s.a
if(r!==p.e)throw A.b(A.Z(p))
else if(q>=r.length){s.sbm(null)
return!1}else{s.sbm(r[q])
s.c=q+1
return!0}},
sbm(a){this.d=this.$ti.h("1?").a(a)},
$iag:1}
A.e.prototype={
gH(a){return new A.bA(a,this.gk(a),A.ao(a).h("bA<e.E>"))},
q(a,b){return this.i(a,b)},
t(a,b){var s,r
A.ao(a).h("~(e.E)").a(b)
s=this.gk(a)
for(r=0;r<s;++r){b.$1(this.i(a,r))
if(s!==this.gk(a))throw A.b(A.Z(a))}},
gd8(a){return this.gk(a)===0},
gA(a){if(this.gk(a)===0)throw A.b(A.kx())
return this.i(a,0)},
aV(a,b){var s,r=this.gk(a)
for(s=0;s<r;++s){if(J.fX(this.i(a,s),b))return!0
if(r!==this.gk(a))throw A.b(A.Z(a))}return!1},
av(a,b,c){var s=A.ao(a)
return new A.aU(a,s.u(c).h("1(e.E)").a(b),s.h("@<e.E>").u(c).h("aU<1,2>"))},
aw(a){var s,r,q,p,o=this
if(o.gd8(a)){s=J.kz(0,A.ao(a).h("e.E"))
return s}r=o.i(a,0)
q=A.hB(o.gk(a),r,!0,A.ao(a).h("e.E"))
for(p=1;p<o.gk(a);++p)B.a.l(q,p,o.i(a,p))
return q},
p(a,b){var s=A.ao(a)
s.h("l<e.E>").a(b)
s=A.e6(a,s.h("e.E"))
B.a.V(s,b)
return s},
n(a){return A.ky(a,"[","]")}}
A.y.prototype={
t(a,b){var s,r,q,p=A.ao(a)
p.h("~(y.K,y.V)").a(b)
for(s=J.aK(this.gI(a)),p=p.h("y.V");s.B();){r=s.gC(s)
q=this.i(a,r)
b.$2(r,q==null?p.a(q):q)}},
gk(a){return J.dz(this.gI(a))},
n(a){return A.hD(a)},
$iK:1}
A.hE.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=r.a+=A.m(a)
r.a=s+": "
r.a+=A.m(b)},
$S:34}
A.dm.prototype={}
A.bV.prototype={
i(a,b){return this.a.i(0,b)},
t(a,b){this.a.t(0,this.$ti.h("~(1,2)").a(b))},
gk(a){return this.a.a},
gI(a){var s=this.a
return new A.as(s,s.$ti.h("as<1>"))},
n(a){return A.hD(this.a)},
$iK:1}
A.cS.prototype={}
A.c7.prototype={}
A.fb.prototype={
i(a,b){var s,r=this.b
if(r==null)return this.c.i(0,b)
else if(typeof b!="string")return null
else{s=r[b]
return typeof s=="undefined"?this.cB(b):s}},
gk(a){return this.b==null?this.c.a:this.ai().length},
gI(a){var s
if(this.b==null){s=this.c
return new A.as(s,A.w(s).h("as<1>"))}return new A.fc(this)},
t(a,b){var s,r,q,p,o=this
t.u.a(b)
if(o.b==null)return o.c.t(0,b)
s=o.ai()
for(r=0;r<s.length;++r){q=s[r]
p=o.b[q]
if(typeof p=="undefined"){p=A.j_(o.a[q])
o.b[q]=p}b.$2(q,p)
if(s!==o.c)throw A.b(A.Z(o))}},
ai(){var s=t.bM.a(this.c)
if(s==null)s=this.c=A.q(Object.keys(this.a),t.s)
return s},
cB(a){var s
if(!Object.prototype.hasOwnProperty.call(this.a,a))return null
s=A.j_(this.a[a])
return this.b[a]=s}}
A.fc.prototype={
gk(a){var s=this.a
return s.gk(s)},
q(a,b){var s=this.a
if(s.b==null)s=s.gI(s).q(0,b)
else{s=s.ai()
if(!(b<s.length))return A.d(s,b)
s=s[b]}return s},
gH(a){var s=this.a
if(s.b==null){s=s.gI(s)
s=s.gH(s)}else{s=s.ai()
s=new J.bl(s,s.length,A.aH(s).h("bl<1>"))}return s}}
A.dK.prototype={}
A.dM.prototype={}
A.e2.prototype={
cV(a,b){var s=A.o6(b,this.gcW().a)
return s},
gcW(){return B.a_}}
A.hw.prototype={}
A.hL.prototype={
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
$S:22}
A.cj.prototype={
L(a,b){if(b==null)return!1
return b instanceof A.cj&&this.a===b.a&&this.b===b.b},
gv(a){var s=this.a
return(s^B.f.bD(s,30))&1073741823},
n(a){var s=this,r=A.mo(A.mX(s)),q=A.dN(A.mV(s)),p=A.dN(A.mR(s)),o=A.dN(A.mS(s)),n=A.dN(A.mU(s)),m=A.dN(A.mW(s)),l=A.mp(A.mT(s)),k=r+"-"+q
if(s.b)return k+"-"+p+" "+o+":"+n+":"+m+"."+l+"Z"
else return k+"-"+p+" "+o+":"+n+":"+m+"."+l}}
A.iv.prototype={
n(a){return this.aj()}}
A.E.prototype={
ga_(){return A.b4(this.$thrownJsError)}}
A.cd.prototype={
n(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.bq(s)
return"Assertion failed"}}
A.aY.prototype={}
A.aL.prototype={
gaJ(){return"Invalid argument"+(!this.a?"(s)":"")},
gaI(){return""},
n(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+A.m(p),n=s.gaJ()+q+o
if(!s.a)return n
return n+s.gaI()+": "+A.bq(s.gaY())},
gaY(){return this.b}}
A.cK.prototype={
gaY(){return A.nA(this.b)},
gaJ(){return"RangeError"},
gaI(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.m(q):""
else if(q==null)s=": Not greater than or equal to "+A.m(r)
else if(q>r)s=": Not in inclusive range "+A.m(r)+".."+A.m(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.m(r)
return s}}
A.dY.prototype={
gaY(){return A.t(this.b)},
gaJ(){return"RangeError"},
gaI(){if(A.t(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gk(a){return this.f}}
A.ej.prototype={
n(a){var s,r,q,p,o,n,m,l,k=this,j={},i=new A.cO("")
j.a=""
s=k.c
for(r=s.length,q=0,p="",o="";q<r;++q,o=", "){n=s[q]
i.a=p+o
p=i.a+=A.bq(n)
j.a=", "}k.d.t(0,new A.hL(j,i))
m=A.bq(k.a)
l=i.n(0)
return"NoSuchMethodError: method not found: '"+k.b.a+"'\nReceiver: "+m+"\nArguments: ["+l+"]"}}
A.eN.prototype={
n(a){return"Unsupported operation: "+this.a}}
A.eL.prototype={
n(a){return"UnimplementedError: "+this.a}}
A.bG.prototype={
n(a){return"Bad state: "+this.a}}
A.dL.prototype={
n(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.bq(s)+"."}}
A.en.prototype={
n(a){return"Out of Memory"},
ga_(){return null},
$iE:1}
A.cM.prototype={
n(a){return"Stack Overflow"},
ga_(){return null},
$iE:1}
A.iy.prototype={
n(a){return"Exception: "+this.a}}
A.hi.prototype={
n(a){var s=this.a,r=""!==s?"FormatException: "+s:"FormatException"
return r}}
A.f.prototype={
av(a,b,c){var s=A.w(this)
return A.kD(this,s.u(c).h("1(f.E)").a(b),s.h("f.E"),c)},
t(a,b){var s
A.w(this).h("~(f.E)").a(b)
for(s=this.gH(this);s.B();)b.$1(s.gC(s))},
gk(a){var s,r=this.gH(this)
for(s=0;r.B();)++s
return s},
q(a,b){var s,r=this.gH(this)
for(s=b;r.B();){if(s===0)return r.gC(r);--s}throw A.b(A.O(b,b-s,this,"index"))},
n(a){return A.mA(this,"(",")")}}
A.G.prototype={
gv(a){return A.v.prototype.gv.call(this,this)},
n(a){return"null"}}
A.v.prototype={$iv:1,
L(a,b){return this===b},
gv(a){return A.cH(this)},
n(a){return"Instance of '"+A.hQ(this)+"'"},
bS(a,b){throw A.b(A.kG(this,t.B.a(b)))},
gD(a){return A.ox(this)},
toString(){return this.n(this)}}
A.fx.prototype={
n(a){return""},
$ial:1}
A.cO.prototype={
gk(a){return this.a.length},
n(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
A.n.prototype={}
A.h_.prototype={
gk(a){return a.length}}
A.dB.prototype={
n(a){var s=String(a)
s.toString
return s}}
A.dC.prototype={
n(a){var s=String(a)
s.toString
return s}}
A.bn.prototype={$ibn:1}
A.bo.prototype={$ibo:1}
A.bp.prototype={
sP(a,b){a.height=b},
sS(a,b){a.width=b},
aA(a,b,c){var s=a.getContext(b,A.lH(c))
return s},
$ibp:1,
$idH:1}
A.az.prototype={
gk(a){return a.length}}
A.h8.prototype={
gk(a){return a.length}}
A.A.prototype={$iA:1}
A.ci.prototype={
gk(a){var s=a.length
s.toString
return s}}
A.h9.prototype={}
A.ap.prototype={}
A.aO.prototype={}
A.ha.prototype={
gk(a){return a.length}}
A.hb.prototype={
gk(a){return a.length}}
A.hc.prototype={
gk(a){return a.length},
i(a,b){var s=a[A.t(b)]
s.toString
return s}}
A.bQ.prototype={$ibQ:1}
A.aP.prototype={$iaP:1}
A.he.prototype={
n(a){var s=String(a)
s.toString
return s}}
A.ck.prototype={
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
q(a,b){if(!(b<a.length))return A.d(a,b)
return a[b]},
$ik:1,
$iu:1,
$if:1,
$il:1}
A.cl.prototype={
n(a){var s,r=a.left
r.toString
s=a.top
s.toString
return"Rectangle ("+A.m(r)+", "+A.m(s)+") "+A.m(this.gS(a))+" x "+A.m(this.gP(a))},
L(a,b){var s,r
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
s=this.gS(a)===s.gS(b)&&this.gP(a)===s.gP(b)}else s=!1}else s=!1}else s=!1
return s},
gv(a){var s,r=a.left
r.toString
s=a.top
s.toString
return A.kH(r,s,this.gS(a),this.gP(a))},
gbu(a){return a.height},
gP(a){var s=this.gbu(a)
s.toString
return s},
gbG(a){return a.width},
gS(a){var s=this.gbG(a)
s.toString
return s},
$iaC:1}
A.dO.prototype={
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
q(a,b){if(!(b<a.length))return A.d(a,b)
return a[b]},
$ik:1,
$iu:1,
$if:1,
$il:1}
A.hf.prototype={
gk(a){var s=a.length
s.toString
return s}}
A.h.prototype={
n(a){var s=a.localName
s.toString
return s},
$ih:1}
A.j.prototype={$ij:1}
A.c.prototype={
cP(a,b,c,d){t.o.a(c)
if(c!=null)this.co(a,b,c,!1)},
co(a,b,c,d){return a.addEventListener(b,A.aI(t.o.a(c),1),!1)},
cD(a,b,c,d){return a.removeEventListener(b,A.aI(t.o.a(c),1),!1)},
$ic:1}
A.a_.prototype={$ia_:1}
A.dQ.prototype={
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
q(a,b){if(!(b<a.length))return A.d(a,b)
return a[b]},
$ik:1,
$iu:1,
$if:1,
$il:1}
A.dR.prototype={
gk(a){return a.length}}
A.bS.prototype={$ibS:1}
A.bT.prototype={
t(a,b){return a.forEach(A.aI(t.cZ.a(b),3))},
$ibT:1}
A.dS.prototype={
gk(a){return a.length}}
A.a7.prototype={$ia7:1}
A.ho.prototype={
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
q(a,b){if(!(b<a.length))return A.d(a,b)
return a[b]},
$ik:1,
$iu:1,
$if:1,
$il:1}
A.ar.prototype={
de(a,b,c,d){return a.open(b,c,!0)},
$iar:1}
A.hp.prototype={
$1(a){var s=t.r.a(a).responseText
s.toString
return s},
$S:43}
A.hq.prototype={
$1(a){var s,r,q,p,o
t.J.a(a)
s=this.a
r=s.status
r.toString
q=r>=200&&r<300
p=r>307&&r<400
r=q||r===0||r===304||p
o=this.b
if(r)o.bL(0,s)
else o.aq(a)},
$S:17}
A.bt.prototype={}
A.co.prototype={$ico:1}
A.dX.prototype={$idH:1}
A.bu.prototype={$ibu:1}
A.hs.prototype={
gd9(a){return a.isIntersecting}}
A.aT.prototype={$iaT:1}
A.hC.prototype={
n(a){var s=String(a)
s.toString
return s}}
A.bD.prototype={}
A.hI.prototype={
gk(a){return a.length}}
A.e7.prototype={
i(a,b){return A.bj(a.get(A.H(b)))},
t(a,b){var s,r,q
t.u.a(b)
s=a.entries()
for(;!0;){r=s.next()
q=r.done
q.toString
if(q)return
q=r.value[0]
q.toString
b.$2(q,A.bj(r.value[1]))}},
gI(a){var s=A.q([],t.s)
this.t(a,new A.hJ(s))
return s},
gk(a){var s=a.size
s.toString
return s},
$iK:1}
A.hJ.prototype={
$2(a,b){return B.a.m(this.a,a)},
$S:2}
A.e8.prototype={
i(a,b){return A.bj(a.get(A.H(b)))},
t(a,b){var s,r,q
t.u.a(b)
s=a.entries()
for(;!0;){r=s.next()
q=r.done
q.toString
if(q)return
q=r.value[0]
q.toString
b.$2(q,A.bj(r.value[1]))}},
gI(a){var s=A.q([],t.s)
this.t(a,new A.hK(s))
return s},
gk(a){var s=a.size
s.toString
return s},
$iK:1}
A.hK.prototype={
$2(a,b){return B.a.m(this.a,a)},
$S:2}
A.a8.prototype={$ia8:1}
A.e9.prototype={
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
q(a,b){if(!(b<a.length))return A.d(a,b)
return a[b]},
$ik:1,
$iu:1,
$if:1,
$il:1}
A.a0.prototype={$ia0:1}
A.r.prototype={
n(a){var s=a.nodeValue
return s==null?this.c0(a):s},
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
q(a,b){if(!(b<a.length))return A.d(a,b)
return a[b]},
$ik:1,
$iu:1,
$if:1,
$il:1}
A.a9.prototype={
gk(a){return a.length},
$ia9:1}
A.ep.prototype={
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
q(a,b){if(!(b<a.length))return A.d(a,b)
return a[b]},
$ik:1,
$iu:1,
$if:1,
$il:1}
A.av.prototype={$iav:1}
A.eu.prototype={
i(a,b){return A.bj(a.get(A.H(b)))},
t(a,b){var s,r,q
t.u.a(b)
s=a.entries()
for(;!0;){r=s.next()
q=r.done
q.toString
if(q)return
q=r.value[0]
q.toString
b.$2(q,A.bj(r.value[1]))}},
gI(a){var s=A.q([],t.s)
this.t(a,new A.hT(s))
return s},
gk(a){var s=a.size
s.toString
return s},
$iK:1}
A.hT.prototype={
$2(a,b){return B.a.m(this.a,a)},
$S:2}
A.ex.prototype={
gk(a){return a.length}}
A.a3.prototype={$ia3:1}
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
l(a,b,c){t.fY.a(c)
throw A.b(A.D("Cannot assign element of immutable List."))},
gA(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.b(A.I("No elements"))},
q(a,b){if(!(b<a.length))return A.d(a,b)
return a[b]},
$ik:1,
$iu:1,
$if:1,
$il:1}
A.ab.prototype={$iab:1}
A.eA.prototype={
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
q(a,b){if(!(b<a.length))return A.d(a,b)
return a[b]},
$ik:1,
$iu:1,
$if:1,
$il:1}
A.ac.prototype={
gk(a){return a.length},
$iac:1}
A.eC.prototype={
i(a,b){return a.getItem(A.H(b))},
t(a,b){var s,r,q
t.eA.a(b)
for(s=0;!0;++s){r=a.key(s)
if(r==null)return
q=a.getItem(r)
q.toString
b.$2(r,q)}},
gI(a){var s=A.q([],t.s)
this.t(a,new A.hZ(s))
return s},
gk(a){var s=a.length
s.toString
return s},
$iK:1}
A.hZ.prototype={
$2(a,b){return B.a.m(this.a,a)},
$S:18}
A.X.prototype={$iX:1}
A.a4.prototype={$ia4:1}
A.T.prototype={$iT:1}
A.eF.prototype={
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
q(a,b){if(!(b<a.length))return A.d(a,b)
return a[b]},
$ik:1,
$iu:1,
$if:1,
$il:1}
A.eG.prototype={
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
q(a,b){if(!(b<a.length))return A.d(a,b)
return a[b]},
$ik:1,
$iu:1,
$if:1,
$il:1}
A.i7.prototype={
gk(a){var s=a.length
s.toString
return s}}
A.ad.prototype={$iad:1}
A.aW.prototype={$iaW:1}
A.cQ.prototype={
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
q(a,b){if(!(b<a.length))return A.d(a,b)
return a[b]},
$ik:1,
$iu:1,
$if:1,
$il:1}
A.i8.prototype={
gk(a){return a.length}}
A.b_.prototype={}
A.ie.prototype={
n(a){var s=String(a)
s.toString
return s}}
A.eP.prototype={$idH:1}
A.eQ.prototype={
gk(a){return a.length}}
A.bd.prototype={
gd1(a){var s=a.deltaY
if(s!=null)return s
throw A.b(A.D("deltaY is not supported"))},
gd0(a){var s=a.deltaX
if(s!=null)return s
throw A.b(A.D("deltaX is not supported"))},
$ibd:1}
A.be.prototype={
bW(a,b){var s
t.c4.a(b)
this.br(a)
s=A.k3(b,t.H)
s.toString
return this.cF(a,s)},
cF(a,b){var s=a.requestAnimationFrame(A.aI(t.c4.a(b),1))
s.toString
return s},
br(a){var s=!!(a.requestAnimationFrame&&a.cancelAnimationFrame)
s.toString
if(s)return;(function(b){var r=["ms","moz","webkit","o"]
for(var q=0;q<r.length&&!b.requestAnimationFrame;++q){b.requestAnimationFrame=b[r[q]+"RequestAnimationFrame"]
b.cancelAnimationFrame=b[r[q]+"CancelAnimationFrame"]||b[r[q]+"CancelRequestAnimationFrame"]}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
$ibe:1}
A.aE.prototype={$iaE:1}
A.eW.prototype={
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
q(a,b){if(!(b<a.length))return A.d(a,b)
return a[b]},
$ik:1,
$iu:1,
$if:1,
$il:1}
A.cZ.prototype={
n(a){var s,r,q,p=a.left
p.toString
s=a.top
s.toString
r=a.width
r.toString
q=a.height
q.toString
return"Rectangle ("+A.m(p)+", "+A.m(s)+") "+A.m(r)+" x "+A.m(q)},
L(a,b){var s,r
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
if(s===r.gS(b)){s=a.height
s.toString
r=s===r.gP(b)
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
return A.kH(p,s,r,q)},
gbu(a){return a.height},
gP(a){var s=a.height
s.toString
return s},
gbG(a){return a.width},
gS(a){var s=a.width
s.toString
return s}}
A.f8.prototype={
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
q(a,b){if(!(b<a.length))return A.d(a,b)
return a[b]},
$ik:1,
$iu:1,
$if:1,
$il:1}
A.d7.prototype={
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
q(a,b){if(!(b<a.length))return A.d(a,b)
return a[b]},
$ik:1,
$iu:1,
$if:1,
$il:1}
A.ft.prototype={
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
q(a,b){if(!(b<a.length))return A.d(a,b)
return a[b]},
$ik:1,
$iu:1,
$if:1,
$il:1}
A.fy.prototype={
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
q(a,b){if(!(b<a.length))return A.d(a,b)
return a[b]},
$ik:1,
$iu:1,
$if:1,
$il:1}
A.jG.prototype={}
A.d_.prototype={
au(a,b,c,d){var s=A.w(this)
s.h("~(1)?").a(a)
t.Y.a(c)
return A.U(this.a,this.b,a,!1,s.c)}}
A.f3.prototype={}
A.d0.prototype={
W(a){var s=this
if(s.b==null)return $.jB()
s.bF()
s.b=null
s.sbB(null)
return $.jB()},
b_(a){var s,r=this
r.$ti.h("~(1)?").a(a)
if(r.b==null)throw A.b(A.I("Subscription has been canceled."))
r.bF()
s=A.k3(new A.ix(a),t.A)
r.sbB(s)
r.bE()},
bE(){var s,r=this.d
if(r!=null&&!0){s=this.b
s.toString
J.m7(s,this.c,r,!1)}},
bF(){var s,r=this.d
if(r!=null){s=this.b
s.toString
J.m6(s,this.c,t.o.a(r),!1)}},
sbB(a){this.d=t.o.a(a)},
$iaD:1}
A.iw.prototype={
$1(a){return this.a.$1(t.A.a(a))},
$S:5}
A.ix.prototype={
$1(a){return this.a.$1(t.A.a(a))},
$S:5}
A.jS.prototype={}
A.o.prototype={
gH(a){return new A.cn(a,this.gk(a),A.ao(a).h("cn<o.E>"))}}
A.cn.prototype={
B(){var s=this,r=s.c+1,q=s.b
if(r<q){s.sbv(J.af(s.a,r))
s.c=r
return!0}s.sbv(null)
s.c=q
return!1},
gC(a){var s=this.d
return s==null?this.$ti.c.a(s):s},
sbv(a){this.d=this.$ti.h("1?").a(a)},
$iag:1}
A.eX.prototype={}
A.f_.prototype={}
A.f0.prototype={}
A.f1.prototype={}
A.f2.prototype={}
A.f5.prototype={}
A.f6.prototype={}
A.f9.prototype={}
A.fa.prototype={}
A.ff.prototype={}
A.fg.prototype={}
A.fh.prototype={}
A.fi.prototype={}
A.fj.prototype={}
A.fk.prototype={}
A.fn.prototype={}
A.fo.prototype={}
A.fq.prototype={}
A.dd.prototype={}
A.de.prototype={}
A.fr.prototype={}
A.fs.prototype={}
A.fu.prototype={}
A.fz.prototype={}
A.fA.prototype={}
A.dg.prototype={}
A.dh.prototype={}
A.fB.prototype={}
A.fC.prototype={}
A.fG.prototype={}
A.fH.prototype={}
A.fI.prototype={}
A.fJ.prototype={}
A.fK.prototype={}
A.fL.prototype={}
A.fM.prototype={}
A.fN.prototype={}
A.fO.prototype={}
A.fP.prototype={}
A.il.prototype={
bP(a){var s,r=this.a,q=r.length
for(s=0;s<q;++s)if(r[s]===a)return s
B.a.m(r,a)
B.a.m(this.b,null)
return q},
b8(a){var s,r,q,p,o,n,m,l,k,j=this
if(a==null)return a
if(A.c8(a))return a
if(typeof a=="number")return a
if(typeof a=="string")return a
s=a instanceof Date
s.toString
if(s){s=a.getTime()
s.toString
return A.kq(s,!0)}s=a instanceof RegExp
s.toString
if(s)throw A.b(A.jP("structured clone of RegExp"))
s=typeof Promise!="undefined"&&a instanceof Promise
s.toString
if(s)return A.oS(a,t.z)
if(A.lM(a)){r=j.bP(a)
s=j.b
if(!(r<s.length))return A.d(s,r)
q=s[r]
if(q!=null)return q
p=t.z
o=A.e4(p,p)
B.a.l(s,r,o)
j.d3(a,new A.io(j,o))
return o}s=a instanceof Array
s.toString
if(s){s=a
s.toString
r=j.bP(s)
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
for(p=J.cb(q),k=0;k<m;++k)p.l(q,k,j.b8(n.i(s,k)))
return q}return a}}
A.io.prototype={
$2(a,b){var s=this.a.b8(b)
this.b.l(0,a,s)
return s},
$S:16}
A.iZ.prototype={
$1(a){this.a.push(A.ln(a))},
$S:3}
A.j8.prototype={
$2(a,b){this.a[a]=A.ln(b)},
$S:45}
A.im.prototype={
d3(a,b){var s,r,q,p
t.b8.a(b)
for(s=Object.keys(a),r=s.length,q=0;q<s.length;s.length===r||(0,A.a6)(s),++q){p=s[q]
b.$2(p,a[p])}}}
A.cu.prototype={$icu:1}
A.hv.prototype={
$1(a){var s,r,q,p,o=this.a
if(o.a6(0,a))return o.i(0,a)
if(t.f.b(a)){s={}
o.l(0,a,s)
for(o=J.cc(a),r=J.aK(o.gI(a));r.B();){q=r.gC(r)
s[q]=this.$1(o.i(a,q))}return s}else if(t.e.b(a)){p=[]
o.l(0,a,p)
B.a.V(p,J.kj(a,this,t.z))
return p}else return A.jX(a)},
$S:23}
A.j0.prototype={
$1(a){var s
t.Z.a(a)
s=function(b,c,d){return function(){return b(c,d,this,Array.prototype.slice.apply(arguments))}}(A.nE,a,!1)
A.jY(s,$.fV(),a)
return s},
$S:6}
A.j1.prototype={
$1(a){return new this.a(a)},
$S:6}
A.j4.prototype={
$1(a){return new A.cs(a==null?t.K.a(a):a)},
$S:24}
A.j5.prototype={
$1(a){var s=a==null?t.K.a(a):a
return new A.by(s,t.am)},
$S:25}
A.j6.prototype={
$1(a){return new A.aR(a==null?t.K.a(a):a)},
$S:26}
A.aR.prototype={
i(a,b){t.K.a(b)
if(typeof b!="string"&&typeof b!="number")throw A.b(A.aM("property is not a String or num",null))
return A.lp(this.a[b])},
l(a,b,c){if(typeof b!="string"&&typeof b!="number")throw A.b(A.aM("property is not a String or num",null))
this.a[b]=A.jX(c)},
L(a,b){if(b==null)return!1
return b instanceof A.aR&&this.a===b.a},
n(a){var s,r
try{s=String(this.a)
return s}catch(r){s=this.c4(0)
return s}},
gv(a){return 0}}
A.cs.prototype={}
A.by.prototype={
bl(a){var s=this,r=a<0||a>=s.gk(s)
if(r)throw A.b(A.kK(a,0,s.gk(s),null,null))},
i(a,b){t.K.a(b)
if(A.fQ(b))this.bl(b)
return this.$ti.c.a(this.c1(0,b))},
l(a,b,c){if(A.fQ(b))this.bl(b)
this.c5(0,b,c)},
gk(a){var s=this.a.length
if(typeof s==="number"&&s>>>0===s)return s
throw A.b(A.I("Bad JsArray length"))},
$ik:1,
$if:1,
$il:1}
A.c4.prototype={
l(a,b,c){return this.c2(0,b,c)}}
A.jn.prototype={
$1(a){return this.a.bL(0,this.b.h("0/?").a(a))},
$S:3}
A.jo.prototype={
$1(a){if(a==null)return this.a.aq(new A.hM(a===undefined))
return this.a.aq(a)},
$S:3}
A.hM.prototype={
n(a){return"Promise was rejected with a value of `"+(this.a?"undefined":"null")+"`."}}
A.ba.prototype={
n(a){return"Point("+A.m(this.a)+", "+A.m(this.b)+")"},
L(a,b){if(b==null)return!1
return b instanceof A.ba&&this.a===b.a&&this.b===b.b},
gv(a){return A.n3(B.b.gv(this.a),B.b.gv(this.b),0)},
p(a,b){var s,r=this.$ti
r.a(b)
s=r.c
return new A.ba(s.a(B.b.p(this.a,b.gdk(b))),s.a(B.b.p(this.b,b.gdl(b))),r)},
j(a,b){var s=this.$ti,r=s.c
return new A.ba(r.a(this.a*b),r.a(this.b*b),s)}}
A.ah.prototype={$iah:1}
A.e3.prototype={
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
q(a,b){return this.i(a,b)},
$ik:1,
$if:1,
$il:1}
A.aj.prototype={$iaj:1}
A.ek.prototype={
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
l(a,b,c){t.eq.a(c)
throw A.b(A.D("Cannot assign element of immutable List."))},
gA(a){var s=a.length
s.toString
if(s>0){s=a[0]
s.toString
return s}throw A.b(A.I("No elements"))},
q(a,b){return this.i(a,b)},
$ik:1,
$if:1,
$il:1}
A.hO.prototype={
gk(a){return a.length}}
A.eD.prototype={
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
q(a,b){return this.i(a,b)},
$ik:1,
$if:1,
$il:1}
A.am.prototype={$iam:1}
A.eI.prototype={
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
q(a,b){return this.i(a,b)},
$ik:1,
$if:1,
$il:1}
A.fd.prototype={}
A.fe.prototype={}
A.fl.prototype={}
A.fm.prototype={}
A.fv.prototype={}
A.fw.prototype={}
A.fD.prototype={}
A.fE.prototype={}
A.h1.prototype={
gk(a){return a.length}}
A.dE.prototype={
i(a,b){return A.bj(a.get(A.H(b)))},
t(a,b){var s,r,q
t.u.a(b)
s=a.entries()
for(;!0;){r=s.next()
q=r.done
q.toString
if(q)return
q=r.value[0]
q.toString
b.$2(q,A.bj(r.value[1]))}},
gI(a){var s=A.q([],t.s)
this.t(a,new A.h2(s))
return s},
gk(a){var s=a.size
s.toString
return s},
$iK:1}
A.h2.prototype={
$2(a,b){return B.a.m(this.a,a)},
$S:2}
A.dF.prototype={
gk(a){return a.length}}
A.b7.prototype={}
A.el.prototype={
gk(a){return a.length}}
A.eV.prototype={}
A.dG.prototype={$idG:1}
A.aN.prototype={$iaN:1}
A.dU.prototype={$idU:1}
A.eq.prototype={$ieq:1}
A.et.prototype={$iet:1}
A.cL.prototype={$icL:1}
A.bY.prototype={
ao(a,b,c){return a.bindBuffer(b,c)},
G(a,b,c){return a.bindFramebuffer(b,c)},
bI(a,b,c){return a.bindRenderbuffer(b,c)},
bJ(a,b,c){return a.bindTexture(b,c)},
bN(a,b){return a.deleteBuffer(b)},
cX(a,b){return a.deleteFramebuffer(b)},
cY(a,b){return a.deleteProgram(b)},
cZ(a,b){return a.deleteRenderbuffer(b)},
bO(a,b){return a.deleteShader(b)},
d_(a,b){return a.deleteTexture(b)},
d5(a,b,c,d,e){return a.framebufferRenderbuffer(b,c,d,e)},
aX(a,b,c,d,e,f){return a.framebufferTexture2D(b,c,d,e,f)},
bZ(a,b,c,d,e,f,g,h,i,j){var s=i==null
if(!s&&h!=null&&A.fQ(g)){this.cL(a,b,c,d,e,f,g,h,i,j)
return}if(t.gA.b(g)&&h==null&&s&&j==null){this.cM(a,b,c,d,e,f,g)
return}throw A.b(A.aM("Incorrect number or type of arguments",null))},
dh(a,b,c,d,e,f,g){return this.bZ(a,b,c,d,e,f,g,null,null,null)},
cL(a,b,c,d,e,f,g,h,i,j){return a.texImage2D(b,c,d,e,f,g,h,i,j)},
cM(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
a8(a,b,c){return a.uniform1i(b,c)},
di(a,b,c){return a.uniform2fv(b,c)},
c_(a,b,c){return a.uniform4fv(b,c)},
b5(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
dj(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
az(a,b){return a.useProgram(b)},
$ibY:1}
A.ey.prototype={$iey:1}
A.eH.prototype={$ieH:1}
A.eK.prototype={$ieK:1}
A.fZ.prototype={}
A.hW.prototype={}
A.ia.prototype={}
A.dV.prototype={
gd4(){var s=B.a.d2(this.a,0,new A.hj(),t.H)
if(typeof s!=="number")return A.an(s)
return B.b.F(20/s)},
cc(a){var s,r,q=this
A.lm(a)
s=q.f=(a-q.b)*0.001
q.b=a
r=q.c+=s
q.d+=s
q.e+=s
if(r>=0.03333333333333333){s=B.b.ba(r,0.03333333333333333)
q.c=s
q.r.m(0,0.03333333333333333+s)}s=q.d
if(s>=0.016666666666666666){s=B.b.ba(s,0.016666666666666666)
q.d=s
q.w.m(0,0.016666666666666666+s)
s=q.a
if(!!s.fixed$length)A.bk(A.D("removeAt"))
r=s.length
if(0>=r)A.bk(A.kL(0,null))
s.splice(0,1)[0]
B.a.m(s,q.e)
q.e=0}s=window
s.toString
q.x=B.m.bW(s,q.gbf())},
scN(a){this.r=t.I.a(a)},
scO(a){this.w=t.I.a(a)}}
A.hj.prototype={
$2(a,b){return A.lm(a)+A.iV(b)},
$S:28}
A.dW.prototype={}
A.aV.prototype={
c7(a){var s=a.a,r=s*s,q=a.b,p=q*q,o=a.c,n=o*o,m=s*q,l=s*o,k=q*o,j=a.d,i=j*s,h=j*q,g=j*o,f=new A.hF(this)
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
h=a3.gcU(a3)
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
n(a){var s,r,q,p,o,n,m,l,k=this.a
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
A.hF.prototype={
$3(a,b,c){B.a.l(this.a.a,b*3+a,c)
return c},
$S:38}
A.bC.prototype={
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
return new A.bC(A.q([q*a0+p*a4+o*a8+n*b2,m*a0+l*a4+k*a8+j*b2,i*a0+h*a4+g*a8+f*b2,e*a0+d*a4+c*a8+b*b2,q*a1+p*a5+o*a9+n*b3,m*a1+l*a5+k*a9+j*b3,i*a1+h*a5+g*a9+f*b3,e*a1+d*a5+c*a9+b*b3,q*a2+p*a6+o*b0+n*b4,m*a2+l*a6+k*b0+j*b4,i*a2+h*a6+g*b0+f*b4,e*a2+d*a6+c*b0+b*b4,q*a3+p*a7+o*b1+n*b5,m*a3+l*a7+k*b1+j*b5,i*a3+h*a7+g*b1+f*b5,e*a3+d*a7+c*b1+b*b5],t.n))},
n(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this.a
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
A.a1.prototype={
p(a,b){t.D.a(b)
return new A.a1(B.b.p(this.a,b.gdk(b)),B.b.p(this.b,b.gdl(b)))},
T(a,b){return new A.a1(this.a-b.a,this.b-b.b)},
j(a,b){t.D.a(b)
return new A.a1(this.a*b.a,this.b*b.b)},
b9(a,b){return new A.a1(this.a/b.a,this.b/b.b)},
n(a){return"["+A.m(this.a)+", "+A.m(this.b)+"]"}}
A.aa.prototype={
p(a,b){t.eU.a(b)
return new A.aa(this.a+b.a,this.b+b.b,this.c+b.c)},
j(a,b){return new A.aa(this.a*b,this.b*b,this.c*b)},
n(a){return"["+A.m(this.a)+", "+A.m(this.b)+", "+A.m(this.c)+"]"}}
A.cI.prototype={}
A.aB.prototype={
c8(a){var s,r,q,p=this,o=new A.hR(a),n=o.$2(0,0),m=o.$2(1,1),l=o.$2(2,2),k=n+m+l
if(k>0){s=Math.sqrt(k+1)*0.5
p.d=s
r=0.25/s
s=o.$2(2,1)
q=o.$2(1,2)
if(typeof s!=="number")return s.T()
if(typeof q!=="number")return A.an(q)
p.a=(s-q)*r
q=o.$2(0,2)
s=o.$2(2,0)
if(typeof q!=="number")return q.T()
if(typeof s!=="number")return A.an(s)
p.b=(q-s)*r
s=o.$2(1,0)
q=o.$2(0,1)
if(typeof s!=="number")return s.T()
if(typeof q!=="number")return A.an(q)
p.c=(s-q)*r}else if(n>m&&n>l){s=Math.sqrt(n-m-l+1)*0.5
p.a=s
r=0.25/s
s=o.$2(1,0)
q=o.$2(0,1)
if(typeof s!=="number")return s.p()
if(typeof q!=="number")return A.an(q)
p.b=(s+q)*r
q=o.$2(0,2)
s=o.$2(2,0)
if(typeof q!=="number")return q.p()
if(typeof s!=="number")return A.an(s)
p.c=(q+s)*r
s=o.$2(2,1)
q=o.$2(1,2)
if(typeof s!=="number")return s.T()
if(typeof q!=="number")return A.an(q)
p.d=(s-q)*r}else if(m>l){s=Math.sqrt(m-n-l+1)*0.5
p.b=s
r=0.25/s
s=o.$2(1,0)
q=o.$2(0,1)
if(typeof s!=="number")return s.p()
if(typeof q!=="number")return A.an(q)
p.a=(s+q)*r
q=o.$2(2,1)
s=o.$2(1,2)
if(typeof q!=="number")return q.p()
if(typeof s!=="number")return A.an(s)
p.c=(q+s)*r
s=o.$2(0,2)
q=o.$2(2,0)
if(typeof s!=="number")return s.T()
if(typeof q!=="number")return A.an(q)
p.d=(s-q)*r}else{s=Math.sqrt(l-n-m+1)*0.5
p.c=s
r=0.25/s
s=o.$2(0,2)
q=o.$2(2,0)
if(typeof s!=="number")return s.p()
if(typeof q!=="number")return A.an(q)
p.a=(s+q)*r
q=o.$2(2,1)
s=o.$2(1,2)
if(typeof q!=="number")return q.p()
if(typeof s!=="number")return A.an(s)
p.b=(q+s)*r
s=o.$2(1,0)
q=o.$2(0,1)
if(typeof s!=="number")return s.T()
if(typeof q!=="number")return A.an(q)
p.d=(s-q)*r}},
p(a,b){var s=this
t.L.a(b)
return new A.aB(s.a+b.a,s.b+b.b,s.c+b.c,s.d+b.d)},
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
return new A.aB(o*p+n*s+m*r-l*q,o*q+m*s+l*p-n*r,o*r+l*s+n*q-m*p,o*s-n*p-m*q-l*r)},
n(a){var s=this
return"      ["+A.m(s.a)+", "+A.m(s.b)+", "+A.m(s.c)+", "+A.m(s.d)+"]\n    "}}
A.hR.prototype={
$2(a,b){var s=this.a.a,r=b*3+a
if(!(r<s.length))return A.d(s,r)
return s[r]},
$S:30}
A.cR.prototype={}
A.aX.prototype={
gY(){var s,r,q,p,o,n,m,l,k=this.a,j=k.length
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
sY(a){var s=a.a,r=this.a
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
gb0(a){var s,r,q=this.a,p=q.length
if(0>=p)return A.d(q,0)
s=q[0]
if(1>=p)return A.d(q,1)
r=q[1]
if(2>=p)return A.d(q,2)
return new A.P(s,r,q[2])},
gb6(){var s,r,q=this.a,p=q.length
if(4>=p)return A.d(q,4)
s=q[4]
if(5>=p)return A.d(q,5)
r=q[5]
if(6>=p)return A.d(q,6)
return new A.P(s,r,q[6])},
gaW(a){var s,r,q=this.a,p=q.length
if(8>=p)return A.d(q,8)
s=q[8]
if(9>=p)return A.d(q,9)
r=q[9]
if(10>=p)return A.d(q,10)
return new A.P(s,r,q[10])},
gR(){var s,r,q=this.a,p=q.length
if(12>=p)return A.d(q,12)
s=q[12]
if(13>=p)return A.d(q,13)
r=q[13]
if(14>=p)return A.d(q,14)
return new A.aa(s,r,q[14])},
sR(a){var s=this.a
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
e=a9.gcU(a9)
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
return new A.aX(A.q([B.b.j(q,d)+B.b.j(p,a0)+B.b.j(o,a4),B.b.j(m,d)+B.b.j(l,a0)+B.b.j(k,a4),B.b.j(i,d)+B.b.j(h,a0)+B.b.j(g,a4),0,B.b.j(q,c)+B.b.j(p,a1)+B.b.j(o,a5),B.b.j(m,c)+B.b.j(l,a1)+B.b.j(k,a5),B.b.j(i,c)+B.b.j(h,a1)+B.b.j(g,a5),0,B.b.j(q,b)+B.b.j(p,a2)+B.b.j(o,a6),B.b.j(m,b)+B.b.j(l,a2)+B.b.j(k,a6),B.b.j(i,b)+B.b.j(h,a2)+B.b.j(g,a6),0,B.b.j(q,a)+B.b.j(p,a3)+B.b.j(o,a7)+n,B.b.j(m,a)+B.b.j(l,a3)+B.b.j(k,a7)+j,B.b.j(i,a)+B.b.j(h,a3)+B.b.j(g,a7)+f,1],t.n))}}
A.P.prototype={
p(a,b){t.cW.a(b)
return new A.P(this.a+b.a,this.b+b.b,this.c+b.c)},
j(a,b){return new A.P(this.a*b,this.b*b,this.c*b)},
Z(a){return new A.P(-this.a,-this.b,-this.c)},
n(a){return"["+A.m(this.a)+", "+A.m(this.b)+", "+A.m(this.c)+"]"}}
A.hm.prototype={
U(a,b,c,d,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e="byteOffset"
t.aH.a(a0)
t.g6.a(a1)
s=J.ax(d)
r=J.af(J.af(J.af(s.i(d,"meshes"),a),"primitives"),b)
q=s.i(d,"accessors")
p=s.i(d,"bufferViews")
o=s.i(d,"buffers")
n=A.q([],t.U)
s=J.ax(r)
J.fY(s.i(r,"attributes"),new A.hn(this,a1,q,p,a0,o,c,n))
m=J.af(q,s.i(r,"indices"))
s=J.ax(m)
l=J.af(p,s.i(m,"bufferView"))
k=J.ax(l)
j=k.i(l,e)
i=A.t(j==null?0:j)
k=a0.i(0,J.af(J.af(o,k.i(l,"buffer")),"uri"))
k.toString
j=s.i(m,e)
h=A.t(j==null?0:j)
A.t(s.i(m,"componentType"))
g=J.ki(s.i(m,"count"),2)
s=new Uint8Array(A.dp(A.mG(k.buffer,i+h,A.ll(g)))).buffer
A.iY(s,0,null)
f=B.f.cJ(s.byteLength-0,2)
return new A.cG(c.bd(new Uint16Array(s,0,f)),new A.eO(0),new A.cT(A.jK(n,t.cQ)),4)},
c9(a){switch(J.af(a,"type")){case"VEC4":return 4
case"VEC3":return 3
case"VEC2":return 2
default:return 1}}}
A.hn.prototype={
$2(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=this,g="byteOffset",f=h.b
if(f.i(0,a)==null)return
f=f.i(0,a)
f.toString
s=J.af(h.c,b)
r=J.ax(s)
q=J.af(h.d,r.i(s,"bufferView"))
p=J.ax(q)
o=p.i(q,g)
p=h.e.i(0,J.af(J.af(h.f,p.i(q,"buffer")),"uri"))
p.toString
n=r.i(s,g)
m=A.t(n==null?0:n)
l=J.fX(r.i(s,"componentType"),5123)?2:4
t.f.a(s)
k=h.a.c9(s)
j=J.ki(r.i(s,"count"),k)
r=p.buffer
p=A.t(J.m4(o,m))
A.ll(j)
A.iY(r,p,j)
i=h.r.bc(new Float32Array(A.dp(new Float32Array(r,p,j))))
B.a.m(h.w,new A.bm(A.H(a),f,k,k*l,i.b))},
$S:31}
A.aS.prototype={}
A.S.prototype={}
A.ct.prototype={}
A.bR.prototype={}
A.eS.prototype={}
A.c5.prototype={
aj(){return"_KeyAction."+this.b}}
A.hx.prototype={
a0(){var s,r,q,p,o,n,m=this
for(s=t.bl,r=m.b,q=0;q<2;++q){p=B.a1[q]
r.l(0,p,new A.aF(null,null,s))}s=m.a
r=document
r.toString
o=t.eN
n=t.g
B.a.m(s,A.U(r,"keydown",o.a(new A.hy(m)),!1,n))
B.a.m(s,A.U(r,"keyup",o.a(new A.hz(m)),!1,n))},
E(){var s,r,q,p,o
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.a6)(s),++q)s[q].W(0)
B.a.O(s)
for(s=this.b,r=s.gb7(s),p=A.w(r),p=p.h("@<1>").u(p.z[1]),r=new A.at(J.aK(r.a),r.b,p.h("at<1,2>")),p=p.z[1];r.B();){o=r.a;(o==null?p.a(o):o).a5(0)}s.O(0)}}
A.hy.prototype={
$1(a){var s,r
t.g.a(a)
s=this.a.b.i(0,B.n)
s.toString
r=a.keyCode
r.toString
s.m(0,new A.aS(r))},
$S:10}
A.hz.prototype={
$1(a){var s,r
t.g.a(a)
s=this.a.b.i(0,B.o)
s.toString
r=a.keyCode
r.toString
s.m(0,new A.aS(r))},
$S:10}
A.aG.prototype={
aj(){return"_MouseAction."+this.b}}
A.ea.prototype={
a0(){var s,r,q,p,o,n
for(s=t.er,r=this.b,q=0;q<6;++q){p=B.a0[q]
r.l(0,p,new A.aF(null,null,s))}s=this.a
r=document
r.toString
o=t.h2.a(this.gcf())
n=t.V
B.a.m(s,A.U(r,"mousedown",o,!1,n))
B.a.m(s,A.U(r,"mouseup",o,!1,n))
B.a.m(s,A.U(r,"mousemove",o,!1,n))
B.a.m(s,A.U(r,"mouseout",o,!1,n))
B.a.m(s,A.U(r,A.H(A.kr(r)),t.h8.a(o),!1,t.gx))},
E(){var s,r,q,p,o
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.a6)(s),++q)s[q].W(0)
B.a.O(s)
for(s=this.b,r=s.gb7(s),p=A.w(r),p=p.h("@<1>").u(p.z[1]),r=new A.at(J.aK(r.a),r.b,p.h("at<1,2>")),p=p.z[1];r.B();){o=r.a;(o==null?p.a(o):o).a5(0)}s.O(0)},
cg(a){var s,r,q=this
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
switch(r){case"mouseout":q.b.i(0,B.F).m(0,new A.S(s))
break
case"mousemove":r=q.b
r.i(0,B.p).m(0,new A.S(s))
if(q.e)r.i(0,B.I).m(0,new A.bR(q.d,s))
break
case"mousedown":r=q.b.i(0,B.G)
r.toString
a.button.toString
r.m(0,new A.ct(s))
q.e=!0
r=q.d
r.a=s.a
r.b=s.b
break
case"mouseup":r=q.b.i(0,B.H)
r.toString
a.button.toString
r.m(0,new A.ct(s))
q.e=!1
break
case"wheel":t.gx.a(a)
B.E.gd0(a)
B.E.gd1(a)
q.b.i(0,B.J).m(0,new A.eS(s))
break}}}
A.bK.prototype={
aj(){return"_OneTouchAction."+this.b}}
A.em.prototype={
a0(){var s,r,q,p,o,n,m,l=this
for(s=t.er,r=l.b,q=0;q<3;++q){p=B.a2[q]
r.l(0,p,new A.aF(null,null,s))}s=l.a
r=document
r.toString
o=t.fj
n=o.a(l.gck())
m=t.R
B.a.m(s,A.U(r,"touchstart",n,!1,m))
B.a.m(s,A.U(r,"touchend",n,!1,m))
B.a.m(s,A.U(r,"touchmove",o.a(l.gci()),!1,m))},
E(){var s,r,q,p,o
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.a6)(s),++q)s[q].W(0)
B.a.O(s)
for(s=this.b,r=s.gb7(s),p=A.w(r),p=p.h("@<1>").u(p.z[1]),r=new A.at(J.aK(r.a),r.b,p.h("at<1,2>")),p=p.z[1];r.B();){o=r.a;(o==null?p.a(o):o).a5(0)}s.O(0)
this.e=null},
cl(a){var s,r,q,p,o,n,m=this
t.R.a(a)
s=m.e
r=s!=null
if(r){q=m.c
p=s.clientX
p.toString
p=B.b.F(p)
o=s.clientY
o.toString
B.b.F(o)
q.a=p
p=s.clientX
p.toString
B.b.F(p)
p=s.clientY
p.toString
q.b=B.b.F(p)}q=a.touches
n=q!=null&&q.length>0
if(r)if(n){q.toString
s=!B.k.aV(q,s)}else s=!0
else s=!1
if(s){m.b.i(0,B.L).m(0,new A.S(m.c))
m.e=null}if(m.e==null&&n){s=m.d
r=m.c
s.a=r.a
s.b=r.b
s=a.touches
s.toString
m.e=B.k.gA(s)
m.b.i(0,B.K).m(0,new A.S(r))}},
cj(a){var s,r,q,p,o=this
t.R.a(a)
if(o.e==null)return
s=a.touches
s.toString
r=B.k.gA(s)
s=o.c
q=r.clientX
q.toString
q=B.b.F(q)
p=r.clientY
p.toString
B.b.F(p)
s.a=q
q=r.clientX
q.toString
B.b.F(q)
q=r.clientY
q.toString
s.b=B.b.F(q)
o.b.i(0,B.q).m(0,new A.bR(o.d,s))}}
A.h7.prototype={
aC(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.d,d=e.gaW(e).Z(0),c=e.gb0(e).Z(0),b=e.gb6()
e=e.gR()
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
g.sY(new A.aV(q))
g.sR(new A.aa(i*s+j*r+k*e,l*s+m*r+n*e,o*s+p*r+h*e))
f.a=f.b.j(0,g)}}
A.bm.prototype={}
A.h4.prototype={}
A.hr.prototype={}
A.eO.prototype={}
A.h6.prototype={
bd(a){var s=this.a,r=s.byteLength
this.a=new Uint16Array(A.dp(B.a.p(B.A.aw(s),B.A.aw(a))))
return new A.hr(a.length,r,5123)},
bc(a){var s=this.b,r=s.byteLength
this.b=new Float32Array(A.dp(B.a.p(B.z.aw(s),B.z.aw(a))))
return new A.eO(r)}}
A.hd.prototype={}
A.dT.prototype={
cb(a,b,c){var s,r,q=this,p=36161
q.c=a
s=a.a.createFramebuffer()
s.toString
q.d=s
if(c){r=q.c.a
s=r.createRenderbuffer()
s.toString
q.e=s
B.c.G(r,36160,q.d)
B.c.bI(r,p,q.e)
s=b.b
r.renderbufferStorage(p,33189,A.t(s.a),A.t(s.b))
B.c.d5(r,36160,36096,p,q.e)
B.c.bI(r,p,null)
B.c.G(r,36160,null)}s=b.b
q.a=A.t(s.a)
q.b=A.t(s.b)},
E(){var s,r,q=this
q.f.E()
q.f=null
s=q.e
if(s!=null){r=q.c.a
r.toString
B.c.cZ(r,s)
q.e=null}s=q.c.a
s.toString
B.c.cX(s,q.d)
q.c=null}}
A.h3.prototype={}
A.hh.prototype={}
A.hg.prototype={}
A.cG.prototype={
aa(){var s,r,q,p,o,n,m,l=this
for(s=l.c.a,r=s.length,q=l.b.b,p=0;p<s.length;s.length===r||(0,A.a6)(s),++p){o=s[p]
n=l.e.a
n.toString
m=o.b
n.vertexAttribPointer(m,o.c,5126,!1,o.d,q+o.e)
l.e.a.enableVertexAttribArray(m)}},
a9(){var s,r,q,p,o
for(s=this.c.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.a6)(s),++q){p=s[q]
o=this.e.a
o.toString
o.disableVertexAttribArray(p.b)}},
aD(){var s=this.a
this.e.a.drawElements(this.d,s.a,s.c,s.b)}}
A.bX.prototype={
gbp(){var s=this.a.a
s.toString
return s},
E(){var s=this,r=s.a.a
r.toString
B.c.cY(r,s.b)
r=s.a.a
r.toString
B.c.bO(r,s.c)
r=s.a.a
r.toString
B.c.bO(r,s.d)
s.a=null},
ae(a,b,c){var s,r,q,p,o,n,m=this
m.c=m.be(35633,a)
m.d=m.be(35632,b)
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
for(r=c.a,q=r.length,p=0;p<r.length;r.length===q||(0,A.a6)(r),++p){o=r[p]
n=m.a.a
n.toString
n.bindAttribLocation(s,o.b,o.a)}m.a.a.linkProgram(s)
if(m.a.a.getProgramParameter(s,35714)==null){s=m.gbp().getProgramInfoLog(s)
s.toString
throw A.b(A.dP("Invalide program\n          "+s+"\n        "))}return s},
be(a,b){var s,r=this,q=r.a.a.createShader(a)
q.toString
r.a.a.shaderSource(q,b)
r.a.a.compileShader(q)
s=r.a.a.getShaderParameter(q,35713)
s.toString
if(!A.jW(s)){q=r.gbp().getShaderInfoLog(q)
q.toString
throw A.b(A.dP("Invalide shader\n          type:"+a+" "+q+"\n        "))}return q}}
A.c0.prototype={
E(){var s,r=this,q=r.e
if(q!=null){r.J(q)
q=$.lQ()
r.d.a.pixelStorei(37440,1)
s=r.d.a
s.toString
B.c.dh(s,3553,0,r.a,r.b,r.c,q)
r.d.a.pixelStorei(37440,0)
r.a1()}q=r.d.a
q.toString
B.c.d_(q,r.f)
r.d=r.f=null},
J(a){var s
this.e=a
s=this.d.a
s.activeTexture(33984+a)
B.c.bJ(s,3553,this.f)},
a1(){var s,r=this.d.a
r.toString
s=this.e
s.toString
r.activeTexture(33984+s)
B.c.bJ(r,3553,null)
this.e=null},
ac(a,b,c){var s=this,r=s.d.a
r.toString
B.c.bZ(r,3553,0,s.a,b,c,0,s.b,s.c,a)},
aF(a,b){var s=this,r=3553
s.d.a.texParameteri(r,10240,a)
s.d.a.texParameteri(r,10241,a)
s.d.a.texParameteri(r,10242,b)
s.d.a.texParameteri(r,10243,b)},
ab(a){return this.aF(a,33071)},
aE(){return this.aF(9729,33071)}}
A.id.prototype={
K(a,b){var s,r
this.b=a
s=a.a
s.toString
r=b.b
r.toString
r=s.getUniformLocation(r,this.a)
r.toString
this.c=r}}
A.ig.prototype={}
A.ih.prototype={}
A.hG.prototype={}
A.hH.prototype={}
A.hU.prototype={}
A.cT.prototype={}
A.hS.prototype={}
A.ik.prototype={
sap(a){var s=this
s.a.enable(3042)
s.a.blendFunc(1,0)
s.a.blendEquation(32774)
s.a.blendColor(0,0,0,0)},
sar(a){if(a==null){this.a.disable(2929)
return}this.a.enable(2929)
this.a.depthFunc(515)},
c6(a,b){var s,r,q,p=this,o=t.z
o=t.cl.a(B.e.aA(a,"webgl2",A.e5(["alpha",!1,"antialias",!0,"depth",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],o,o)))
p.a=o
A.n6(b,o)
for(o=b.e,s=o.length,r=0;r<o.length;o.length===s||(0,A.a6)(o),++r){q=o[r]
p.a.getExtension(q)}p.a.frontFace(2305)
p.a.pixelStorei(37441,0)},
ad(a){var s,r=this.a
r.toString
s=a.b
r.viewport(0,0,A.t(s.a),A.t(s.b))}}
A.hX.prototype={}
A.hY.prototype={
ca(a){var s,r,q,p,o=new Float32Array(32)
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
q.J(0)
q.ac(o,4,4)
q.aF(9728,10497)
q.a1()
return q}}
A.i6.prototype={}
A.ij.prototype={}
A.eR.prototype={
ce(a,b){var s,r
t.j.a(a)
t.dt.a(b)
s=J.mb(a)
r=A.jW(J.mc(s))
this.e=r
if(r)this.c.m(0,s)
else this.d.m(0,s)}}
A.bE.prototype={
gbU(){return this.a}}
A.cp.prototype={
gbU(){var s=this.a
if(this.d){s=s.a+1
if(!(s<8))return A.d(B.w,s)
s=B.w[s]}return s}}
A.jj.prototype={
$1(a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a="webglcontextlost"
t.ew.a(a0)
s=$.dw()
if(!A.n7())A.bk(A.dP("WebGL is not available"))
r=s.a
q=r.style
q.position="absolute"
q.width="100%"
q.height="100%"
q.top="0"
q.left="0"
q=A.mz(s.gcd())
s.f=q
q.observe(r)
s.f.takeRecords().toString
q=$.jt()
q.children.toString
q.appendChild(r).toString
q=$.js()
p=window
p.toString
q.x=B.m.bW(p,q.gbf())
p=t.i
q.scN(A.i_(p))
q.scO(A.i_(p))
p=$.ke()
p.a0()
o=$.kf()
o.a0()
n=$.kh()
n.a0()
m=J.ax(a0)
l=t.f.a(B.S.cV(0,A.H(m.i(a0,0))))
k=new A.hm()
j=t.N
i=A.e5(["invaders.bin",J.m8(A.nK(t.r.a(m.i(a0,1)).response))],j,t.gc)
h=A.e5(["POSITION",0],j,t.S)
j=$.jr()
B.a.m($.M,k.U(0,0,j,l,i,h))
B.a.m($.M,k.U(1,0,j,l,i,h))
B.a.m($.M,k.U(2,0,j,l,i,h))
B.a.m($.M,k.U(3,0,j,l,i,h))
B.a.m($.M,k.U(4,0,j,l,i,h))
B.a.m($.M,k.U(5,0,j,l,i,h))
B.a.m($.M,k.U(6,0,j,l,i,h))
B.a.m($.M,new A.cG(j.bd(new Uint16Array(A.dp(A.q([0,1,3,2],t.dC)))),j.bc(new Float32Array(A.dp(A.q([0,1,0,0,1,0,1,1],t.n)))),A.ii(),5))
A.mv()
A.kv()
$.k1=0
j=$.b6()
l=$.kd()
g=1/Math.tan(l.a*0.5)
m=l.d
f=l.c
e=m/(m-f)
m=j.b
d=m.a
B.a.l(d,0,g/l.b)
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
j.a=m.j(0,j.c)
m=$.jA()
d=j.d
d.sR(m)
j.aC()
f=$.m2()
c=A.jQ(A.kZ($.m3(),f))
b=A.kZ(f,c)
l=d.a
B.a.l(l,8,f.a)
B.a.l(l,9,f.b)
B.a.l(l,10,f.c)
B.a.l(l,0,c.a)
B.a.l(l,1,c.b)
B.a.l(l,2,c.c)
B.a.l(l,4,b.a)
B.a.l(l,5,b.b)
B.a.l(l,6,b.c)
j.aC()
j=$.dv()
j.a=d
j.d=1
j.b=m
j.c=A.jM(d.gY())
j=$.fW()
j.a=d
j.f=B.f.bK(1,0,1)
j=window
j.toString
B.a.m($.V,A.U(j,"beforeunload",t.gq.a(new A.je()),!1,t.c9))
j=window
j.toString
B.a.m($.V,A.U(j,"resize",t.fi.a(new A.jf()),!1,t.A))
j=q.r
j.toString
B.a.m($.V,new A.Q(j,A.w(j).h("Q<1>")).X(A.oE()))
q=q.w
q.toString
B.a.m($.V,new A.Q(q,A.w(q).h("Q<1>")).X(A.oF()))
o=o.b.i(0,B.p)
o.toString
B.a.m($.V,new A.Q(o,A.w(o).h("Q<1>")).X(A.oB()))
n=n.b.i(0,B.q)
n.toString
B.a.m($.V,new A.Q(n,A.w(n).h("Q<1>")).X(A.oA()))
p=p.b
n=p.i(0,B.n)
n.toString
B.a.m($.V,new A.Q(n,A.w(n).h("Q<1>")).X(A.oC()))
p=p.i(0,B.o)
p.toString
B.a.m($.V,new A.Q(p,A.w(p).h("Q<1>")).X(A.oD()))
p=t.eJ
n=p.h("~(1)?")
p=p.c
B.a.m($.V,A.U(r,a,n.a(new A.jg()),!1,p))
B.a.m($.V,A.U(r,a,n.a(new A.jh()),!1,p))
s=s.c
B.a.m($.V,new A.Q(s,A.w(s).h("Q<1>")).X(new A.ji()))
s=$.kb()
p=t.Z
s.l(0,"Report",A.lC(A.oG(),p))
s.l(0,"Kill",A.lC(A.oz(),p))},
$S:36}
A.je.prototype={
$1(a){return A.kB()},
$S:5}
A.jf.prototype={
$1(a){return A.kM()},
$S:5}
A.jg.prototype={
$1(a){t.W.a(a)
return A.ks()},
$S:15}
A.jh.prototype={
$1(a){t.W.a(a)
return A.kv()},
$S:15}
A.ji.prototype={
$1(a){return A.kM()},
$S:3}
A.au.prototype={
aj(){return"PrimitiveId."+this.b}};(function aliases(){var s=J.bU.prototype
s.c0=s.n
s=J.bz.prototype
s.c3=s.n
s=A.v.prototype
s.c4=s.n
s=A.aR.prototype
s.c1=s.i
s.c2=s.l
s=A.c4.prototype
s.c5=s.l
s=A.dT.prototype
s.aB=s.cb})();(function installTearOffs(){var s=hunkHelpers._static_1,r=hunkHelpers._static_0,q=hunkHelpers._static_2,p=hunkHelpers.installInstanceTearOff,o=hunkHelpers._instance_2u,n=hunkHelpers._instance_0u,m=hunkHelpers._instance_1u
s(A,"oj","n9",7)
s(A,"ok","na",7)
s(A,"ol","nb",7)
r(A,"lF","oc",0)
s(A,"om","o3",3)
q(A,"oo","o5",4)
r(A,"on","o4",0)
p(A.cV.prototype,"gcT",0,1,null,["$2","$1"],["bM","aq"],37,0,0)
o(A.F.prototype,"gbo","M",4)
n(A.c2.prototype,"gcz","cA",0)
s(A,"qa","kr",39)
s(A,"oO","lp",40)
m(A.dV.prototype,"gbf","cc",27)
m(A.ea.prototype,"gcf","cg",33)
var l
m(l=A.em.prototype,"gck","cl",14)
m(l,"gci","cj",14)
r(A,"qd","kQ",1)
r(A,"qc","kP",1)
r(A,"qf","kS",1)
r(A,"qe","kR",1)
r(A,"qh","kW",1)
r(A,"qg","kV",1)
r(A,"qj","l2",1)
r(A,"qi","l1",1)
o(A.eR.prototype,"gcd","ce",35)
r(A,"oz","kB",0)
r(A,"oG","n0",42)
s(A,"oB","mI",9)
s(A,"oA","mH",9)
s(A,"oC","mJ",13)
s(A,"oD","mK",13)
s(A,"oE","mL",12)
s(A,"oF","mM",12)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.mixinHard,q=hunkHelpers.inherit,p=hunkHelpers.inheritMany
q(A.v,null)
p(A.v,[A.jI,J.bU,J.bl,A.E,A.b8,A.hV,A.f,A.bA,A.at,A.W,A.bZ,A.bV,A.cf,A.d6,A.e_,A.ib,A.hN,A.df,A.iN,A.y,A.hA,A.cw,A.iu,A.ak,A.f7,A.iS,A.iQ,A.ce,A.bc,A.c1,A.cU,A.cV,A.bJ,A.F,A.eU,A.bf,A.eZ,A.dc,A.c2,A.dn,A.d3,A.e,A.dm,A.dK,A.dM,A.cj,A.iv,A.en,A.cM,A.iy,A.hi,A.G,A.fx,A.cO,A.h9,A.jG,A.d0,A.jS,A.o,A.cn,A.il,A.aR,A.hM,A.ba,A.ia,A.dV,A.dW,A.aV,A.bC,A.a1,A.aa,A.cI,A.aB,A.P,A.hm,A.aS,A.S,A.hx,A.ea,A.em,A.h7,A.bm,A.h4,A.hr,A.eO,A.h6,A.hd,A.dT,A.cG,A.bX,A.c0,A.id,A.cT,A.hS,A.ik,A.hX,A.hY,A.i6,A.ij,A.eR,A.bE])
p(J.bU,[J.dZ,J.cr,J.a,J.bw,J.bx,J.bv,J.b9])
p(J.a,[J.bz,J.z,A.eb,A.cA,A.c,A.h_,A.j,A.bo,A.aO,A.A,A.eX,A.ap,A.hc,A.he,A.f_,A.cl,A.f1,A.hf,A.f5,A.bS,A.a7,A.ho,A.f9,A.co,A.bu,A.hs,A.hC,A.hI,A.ff,A.fg,A.a8,A.fh,A.fj,A.a9,A.fn,A.fq,A.ab,A.fr,A.ac,A.fu,A.X,A.fz,A.i7,A.ad,A.fB,A.i8,A.ie,A.fG,A.fI,A.fK,A.fM,A.fO,A.cu,A.ah,A.fd,A.aj,A.fl,A.hO,A.fv,A.am,A.fD,A.h1,A.eV,A.dG,A.dU,A.eq,A.et,A.cL,A.bY,A.ey,A.eH,A.eK])
p(J.bz,[J.eo,J.bH,J.aA])
q(J.ht,J.z)
p(J.bv,[J.cq,J.e0])
p(A.E,[A.cv,A.aY,A.e1,A.eM,A.eY,A.ev,A.cd,A.f4,A.aL,A.ej,A.eN,A.eL,A.bG,A.dL])
p(A.b8,[A.dI,A.dJ,A.eE,A.hu,A.ja,A.jc,A.iq,A.ip,A.hk,A.iD,A.iK,A.i3,A.i1,A.i4,A.iP,A.hp,A.hq,A.iw,A.ix,A.iZ,A.hv,A.j0,A.j1,A.j4,A.j5,A.j6,A.jn,A.jo,A.hF,A.hy,A.hz,A.jj,A.je,A.jf,A.jg,A.jh,A.ji])
p(A.dI,[A.jl,A.ir,A.is,A.iR,A.iz,A.iG,A.iF,A.iC,A.iB,A.iA,A.iJ,A.iI,A.iH,A.i2,A.i0,A.i5,A.it,A.iM,A.iX,A.j3,A.iO])
p(A.f,[A.k,A.bB,A.d5])
p(A.k,[A.ai,A.as,A.d2])
q(A.cm,A.bB)
p(A.ai,[A.aU,A.fc])
q(A.c7,A.bV)
q(A.cS,A.c7)
q(A.cg,A.cS)
q(A.ch,A.cf)
p(A.dJ,[A.hP,A.jb,A.hl,A.iE,A.iW,A.hE,A.hL,A.hJ,A.hK,A.hT,A.hZ,A.io,A.j8,A.h2,A.hj,A.hR,A.hn])
q(A.cE,A.aY)
p(A.eE,[A.eB,A.bP])
q(A.eT,A.cd)
p(A.y,[A.aQ,A.d1,A.fb])
p(A.cA,[A.ec,A.bW])
p(A.bW,[A.d8,A.da])
q(A.d9,A.d8)
q(A.cy,A.d9)
q(A.db,A.da)
q(A.cz,A.db)
p(A.cy,[A.cx,A.ed])
p(A.cz,[A.ee,A.ef,A.eg,A.cB,A.eh,A.cC,A.ei])
q(A.di,A.f4)
p(A.bc,[A.c6,A.d_])
q(A.cW,A.c6)
q(A.Q,A.cW)
q(A.cX,A.c1)
q(A.aw,A.cX)
q(A.aF,A.cU)
q(A.bI,A.cV)
q(A.cY,A.bf)
q(A.fp,A.dn)
q(A.d4,A.d1)
q(A.e2,A.dK)
q(A.hw,A.dM)
p(A.aL,[A.cK,A.dY])
p(A.c,[A.r,A.dR,A.bT,A.bt,A.a3,A.dd,A.a4,A.T,A.dg,A.eQ,A.be,A.aE,A.dF,A.b7])
p(A.r,[A.h,A.az,A.aP])
q(A.n,A.h)
p(A.n,[A.dB,A.dC,A.bp,A.bQ,A.dS,A.dX,A.bD,A.ex])
p(A.j,[A.bn,A.b_,A.av,A.aN])
q(A.h8,A.aO)
q(A.ci,A.eX)
p(A.ap,[A.ha,A.hb])
q(A.f0,A.f_)
q(A.ck,A.f0)
q(A.f2,A.f1)
q(A.dO,A.f2)
q(A.a_,A.bo)
q(A.f6,A.f5)
q(A.dQ,A.f6)
q(A.fa,A.f9)
q(A.bs,A.fa)
q(A.ar,A.bt)
p(A.b_,[A.aT,A.a0,A.aW])
q(A.e7,A.ff)
q(A.e8,A.fg)
q(A.fi,A.fh)
q(A.e9,A.fi)
q(A.fk,A.fj)
q(A.cD,A.fk)
q(A.fo,A.fn)
q(A.ep,A.fo)
q(A.eu,A.fq)
q(A.de,A.dd)
q(A.ez,A.de)
q(A.fs,A.fr)
q(A.eA,A.fs)
q(A.eC,A.fu)
q(A.fA,A.fz)
q(A.eF,A.fA)
q(A.dh,A.dg)
q(A.eG,A.dh)
q(A.fC,A.fB)
q(A.cQ,A.fC)
q(A.eP,A.bD)
q(A.bd,A.a0)
q(A.fH,A.fG)
q(A.eW,A.fH)
q(A.cZ,A.cl)
q(A.fJ,A.fI)
q(A.f8,A.fJ)
q(A.fL,A.fK)
q(A.d7,A.fL)
q(A.fN,A.fM)
q(A.ft,A.fN)
q(A.fP,A.fO)
q(A.fy,A.fP)
q(A.f3,A.d_)
q(A.im,A.il)
p(A.aR,[A.cs,A.c4])
q(A.by,A.c4)
q(A.fe,A.fd)
q(A.e3,A.fe)
q(A.fm,A.fl)
q(A.ek,A.fm)
q(A.fw,A.fv)
q(A.eD,A.fw)
q(A.fE,A.fD)
q(A.eI,A.fE)
q(A.dE,A.eV)
q(A.el,A.b7)
p(A.ia,[A.fZ,A.hW])
q(A.cR,A.aV)
q(A.aX,A.bC)
p(A.S,[A.ct,A.bR,A.eS])
p(A.iv,[A.c5,A.aG,A.bK,A.au])
p(A.dT,[A.h3,A.hh,A.hg])
p(A.id,[A.ig,A.ih,A.hG,A.hH,A.hU])
q(A.cp,A.bE)
s(A.d8,A.e)
s(A.d9,A.W)
s(A.da,A.e)
s(A.db,A.W)
s(A.c7,A.dm)
s(A.eX,A.h9)
s(A.f_,A.e)
s(A.f0,A.o)
s(A.f1,A.e)
s(A.f2,A.o)
s(A.f5,A.e)
s(A.f6,A.o)
s(A.f9,A.e)
s(A.fa,A.o)
s(A.ff,A.y)
s(A.fg,A.y)
s(A.fh,A.e)
s(A.fi,A.o)
s(A.fj,A.e)
s(A.fk,A.o)
s(A.fn,A.e)
s(A.fo,A.o)
s(A.fq,A.y)
s(A.dd,A.e)
s(A.de,A.o)
s(A.fr,A.e)
s(A.fs,A.o)
s(A.fu,A.y)
s(A.fz,A.e)
s(A.fA,A.o)
s(A.dg,A.e)
s(A.dh,A.o)
s(A.fB,A.e)
s(A.fC,A.o)
s(A.fG,A.e)
s(A.fH,A.o)
s(A.fI,A.e)
s(A.fJ,A.o)
s(A.fK,A.e)
s(A.fL,A.o)
s(A.fM,A.e)
s(A.fN,A.o)
s(A.fO,A.e)
s(A.fP,A.o)
r(A.c4,A.e)
s(A.fd,A.e)
s(A.fe,A.o)
s(A.fl,A.e)
s(A.fm,A.o)
s(A.fv,A.e)
s(A.fw,A.o)
s(A.fD,A.e)
s(A.fE,A.o)
s(A.eV,A.y)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{i:"int",x:"double",J:"num",p:"String",j7:"bool",G:"Null",l:"List"},mangledNames:{},types:["~()","p()","~(p,@)","~(@)","~(v,al)","~(j)","@(@)","~(~())","G()","~(S)","~(aT)","G(@)","~(x)","~(aS)","~(aW)","~(aN)","@(@,@)","~(av)","~(p,p)","G(~())","G(v,al)","@(@,p)","~(c_,@)","@(v?)","cs(@)","by<@>(@)","aR(@)","~(J)","x(J,x)","F<@>(@)","x(i,i)","G(@,@)","G(~)","~(a0)","~(v?,v?)","~(l<@>,bu)","G(l<v>)","~(v[al?])","x(i,i,x)","p(c)","v?(@)","@(p)","@()","p(ar)","aq<G>()","~(@,@)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti")}
A.nw(v.typeUniverse,JSON.parse('{"eo":"bz","bH":"bz","aA":"bz","oY":"j","pa":"j","p_":"b7","oZ":"c","pg":"c","pj":"c","pf":"h","pA":"av","p1":"n","pk":"r","p9":"r","pc":"aP","px":"T","p4":"b_","p8":"aE","p3":"az","pl":"az","ph":"a0","pe":"bt","pd":"bs","p5":"A","p6":"X","p0":"bD","dZ":{"j7":[],"B":[]},"cr":{"G":[],"B":[]},"z":{"l":["1"],"k":["1"],"f":["1"]},"ht":{"z":["1"],"l":["1"],"k":["1"],"f":["1"]},"bl":{"ag":["1"]},"bv":{"x":[],"J":[]},"cq":{"x":[],"i":[],"J":[],"B":[]},"e0":{"x":[],"J":[],"B":[]},"b9":{"p":[],"B":[]},"cv":{"E":[]},"k":{"f":["1"]},"ai":{"k":["1"],"f":["1"]},"bA":{"ag":["1"]},"bB":{"f":["2"],"f.E":"2"},"cm":{"bB":["1","2"],"k":["2"],"f":["2"],"f.E":"2"},"at":{"ag":["2"]},"aU":{"ai":["2"],"k":["2"],"f":["2"],"ai.E":"2","f.E":"2"},"bZ":{"c_":[]},"cg":{"cS":["1","2"],"c7":["1","2"],"bV":["1","2"],"dm":["1","2"],"K":["1","2"]},"cf":{"K":["1","2"]},"ch":{"cf":["1","2"],"K":["1","2"]},"d5":{"f":["1"],"f.E":"1"},"d6":{"ag":["1"]},"e_":{"kw":[]},"cE":{"aY":[],"E":[]},"e1":{"E":[]},"eM":{"E":[]},"df":{"al":[]},"b8":{"br":[]},"dI":{"br":[]},"dJ":{"br":[]},"eE":{"br":[]},"eB":{"br":[]},"bP":{"br":[]},"eY":{"E":[]},"ev":{"E":[]},"eT":{"E":[]},"aQ":{"y":["1","2"],"kC":["1","2"],"K":["1","2"],"y.K":"1","y.V":"2"},"as":{"k":["1"],"f":["1"],"f.E":"1"},"cw":{"ag":["1"]},"eb":{"B":[]},"cA":{"L":[]},"ec":{"L":[],"B":[]},"bW":{"u":["1"],"L":[]},"cy":{"e":["x"],"l":["x"],"u":["x"],"k":["x"],"L":[],"f":["x"],"W":["x"]},"cz":{"e":["i"],"l":["i"],"u":["i"],"k":["i"],"L":[],"f":["i"],"W":["i"]},"cx":{"e":["x"],"jH":[],"l":["x"],"u":["x"],"k":["x"],"L":[],"f":["x"],"W":["x"],"B":[],"e.E":"x"},"ed":{"e":["x"],"l":["x"],"u":["x"],"k":["x"],"L":[],"f":["x"],"W":["x"],"B":[],"e.E":"x"},"ee":{"e":["i"],"l":["i"],"u":["i"],"k":["i"],"L":[],"f":["i"],"W":["i"],"B":[],"e.E":"i"},"ef":{"e":["i"],"l":["i"],"u":["i"],"k":["i"],"L":[],"f":["i"],"W":["i"],"B":[],"e.E":"i"},"eg":{"e":["i"],"l":["i"],"u":["i"],"k":["i"],"L":[],"f":["i"],"W":["i"],"B":[],"e.E":"i"},"cB":{"e":["i"],"jO":[],"l":["i"],"u":["i"],"k":["i"],"L":[],"f":["i"],"W":["i"],"B":[],"e.E":"i"},"eh":{"e":["i"],"l":["i"],"u":["i"],"k":["i"],"L":[],"f":["i"],"W":["i"],"B":[],"e.E":"i"},"cC":{"e":["i"],"l":["i"],"u":["i"],"k":["i"],"L":[],"f":["i"],"W":["i"],"B":[],"e.E":"i"},"ei":{"e":["i"],"eJ":[],"l":["i"],"u":["i"],"k":["i"],"L":[],"f":["i"],"W":["i"],"B":[],"e.E":"i"},"f4":{"E":[]},"di":{"aY":[],"E":[]},"F":{"aq":["1"]},"ce":{"E":[]},"Q":{"cW":["1"],"c6":["1"],"bc":["1"]},"aw":{"cX":["1"],"c1":["1"],"aD":["1"],"bg":["1"]},"cU":{"cN":["1"],"lf":["1"],"bg":["1"]},"aF":{"cU":["1"],"cN":["1"],"lf":["1"],"bg":["1"]},"bI":{"cV":["1"]},"cW":{"c6":["1"],"bc":["1"]},"cX":{"c1":["1"],"aD":["1"],"bg":["1"]},"c1":{"aD":["1"],"bg":["1"]},"c6":{"bc":["1"]},"cY":{"bf":["1"]},"eZ":{"bf":["@"]},"c2":{"aD":["1"]},"dn":{"l3":[]},"fp":{"dn":[],"l3":[]},"d1":{"y":["1","2"],"K":["1","2"]},"d4":{"d1":["1","2"],"y":["1","2"],"K":["1","2"],"y.K":"1","y.V":"2"},"d2":{"k":["1"],"f":["1"],"f.E":"1"},"d3":{"ag":["1"]},"y":{"K":["1","2"]},"bV":{"K":["1","2"]},"cS":{"c7":["1","2"],"bV":["1","2"],"dm":["1","2"],"K":["1","2"]},"fb":{"y":["p","@"],"K":["p","@"],"y.K":"p","y.V":"@"},"fc":{"ai":["p"],"k":["p"],"f":["p"],"ai.E":"p","f.E":"p"},"e2":{"dK":["v?","p"]},"x":{"J":[]},"i":{"J":[]},"l":{"k":["1"],"f":["1"]},"cd":{"E":[]},"aY":{"E":[]},"aL":{"E":[]},"cK":{"E":[]},"dY":{"E":[]},"ej":{"E":[]},"eN":{"E":[]},"eL":{"E":[]},"bG":{"E":[]},"dL":{"E":[]},"en":{"E":[]},"cM":{"E":[]},"fx":{"al":[]},"bn":{"j":[]},"a_":{"bo":[]},"bT":{"c":[]},"ar":{"c":[]},"aT":{"j":[]},"a0":{"j":[]},"r":{"c":[]},"av":{"j":[]},"a3":{"c":[]},"a4":{"c":[]},"T":{"c":[]},"aW":{"j":[]},"bd":{"a0":[],"j":[]},"n":{"h":[],"r":[],"c":[]},"dB":{"h":[],"r":[],"c":[]},"dC":{"h":[],"r":[],"c":[]},"bp":{"h":[],"r":[],"c":[],"dH":[]},"az":{"r":[],"c":[]},"bQ":{"h":[],"r":[],"c":[]},"aP":{"r":[],"c":[]},"ck":{"e":["aC<J>"],"o":["aC<J>"],"l":["aC<J>"],"u":["aC<J>"],"k":["aC<J>"],"f":["aC<J>"],"o.E":"aC<J>","e.E":"aC<J>"},"cl":{"aC":["J"]},"dO":{"e":["p"],"o":["p"],"l":["p"],"u":["p"],"k":["p"],"f":["p"],"o.E":"p","e.E":"p"},"h":{"r":[],"c":[]},"dQ":{"e":["a_"],"o":["a_"],"l":["a_"],"u":["a_"],"k":["a_"],"f":["a_"],"o.E":"a_","e.E":"a_"},"dR":{"c":[]},"dS":{"h":[],"r":[],"c":[]},"bs":{"e":["r"],"o":["r"],"l":["r"],"u":["r"],"k":["r"],"f":["r"],"o.E":"r","e.E":"r"},"bt":{"c":[]},"dX":{"h":[],"r":[],"c":[],"dH":[]},"bD":{"h":[],"r":[],"c":[]},"e7":{"y":["p","@"],"K":["p","@"],"y.K":"p","y.V":"@"},"e8":{"y":["p","@"],"K":["p","@"],"y.K":"p","y.V":"@"},"e9":{"e":["a8"],"o":["a8"],"l":["a8"],"u":["a8"],"k":["a8"],"f":["a8"],"o.E":"a8","e.E":"a8"},"cD":{"e":["r"],"o":["r"],"l":["r"],"u":["r"],"k":["r"],"f":["r"],"o.E":"r","e.E":"r"},"ep":{"e":["a9"],"o":["a9"],"l":["a9"],"u":["a9"],"k":["a9"],"f":["a9"],"o.E":"a9","e.E":"a9"},"eu":{"y":["p","@"],"K":["p","@"],"y.K":"p","y.V":"@"},"ex":{"h":[],"r":[],"c":[]},"ez":{"e":["a3"],"o":["a3"],"l":["a3"],"c":[],"u":["a3"],"k":["a3"],"f":["a3"],"o.E":"a3","e.E":"a3"},"eA":{"e":["ab"],"o":["ab"],"l":["ab"],"u":["ab"],"k":["ab"],"f":["ab"],"o.E":"ab","e.E":"ab"},"eC":{"y":["p","p"],"K":["p","p"],"y.K":"p","y.V":"p"},"eF":{"e":["T"],"o":["T"],"l":["T"],"u":["T"],"k":["T"],"f":["T"],"o.E":"T","e.E":"T"},"eG":{"e":["a4"],"o":["a4"],"l":["a4"],"c":[],"u":["a4"],"k":["a4"],"f":["a4"],"o.E":"a4","e.E":"a4"},"cQ":{"e":["ad"],"o":["ad"],"l":["ad"],"u":["ad"],"k":["ad"],"f":["ad"],"o.E":"ad","e.E":"ad"},"b_":{"j":[]},"eP":{"h":[],"r":[],"c":[],"dH":[]},"eQ":{"c":[]},"be":{"c":[]},"aE":{"c":[]},"eW":{"e":["A"],"o":["A"],"l":["A"],"u":["A"],"k":["A"],"f":["A"],"o.E":"A","e.E":"A"},"cZ":{"aC":["J"]},"f8":{"e":["a7?"],"o":["a7?"],"l":["a7?"],"u":["a7?"],"k":["a7?"],"f":["a7?"],"o.E":"a7?","e.E":"a7?"},"d7":{"e":["r"],"o":["r"],"l":["r"],"u":["r"],"k":["r"],"f":["r"],"o.E":"r","e.E":"r"},"ft":{"e":["ac"],"o":["ac"],"l":["ac"],"u":["ac"],"k":["ac"],"f":["ac"],"o.E":"ac","e.E":"ac"},"fy":{"e":["X"],"o":["X"],"l":["X"],"u":["X"],"k":["X"],"f":["X"],"o.E":"X","e.E":"X"},"d_":{"bc":["1"]},"f3":{"d_":["1"],"bc":["1"]},"d0":{"aD":["1"]},"cn":{"ag":["1"]},"by":{"e":["1"],"l":["1"],"k":["1"],"f":["1"],"e.E":"1"},"e3":{"e":["ah"],"o":["ah"],"l":["ah"],"k":["ah"],"f":["ah"],"o.E":"ah","e.E":"ah"},"ek":{"e":["aj"],"o":["aj"],"l":["aj"],"k":["aj"],"f":["aj"],"o.E":"aj","e.E":"aj"},"eD":{"e":["p"],"o":["p"],"l":["p"],"k":["p"],"f":["p"],"o.E":"p","e.E":"p"},"eI":{"e":["am"],"o":["am"],"l":["am"],"k":["am"],"f":["am"],"o.E":"am","e.E":"am"},"dE":{"y":["p","@"],"K":["p","@"],"y.K":"p","y.V":"@"},"dF":{"c":[]},"b7":{"c":[]},"el":{"c":[]},"aN":{"j":[]},"cR":{"aV":[]},"aX":{"bC":[]},"ct":{"S":[]},"bR":{"S":[]},"eS":{"S":[]},"cp":{"bE":[]},"mi":{"L":[]},"my":{"l":["i"],"k":["i"],"f":["i"],"L":[]},"eJ":{"l":["i"],"k":["i"],"f":["i"],"L":[]},"n5":{"l":["i"],"k":["i"],"f":["i"],"L":[]},"mw":{"l":["i"],"k":["i"],"f":["i"],"L":[]},"jO":{"l":["i"],"k":["i"],"f":["i"],"L":[]},"mx":{"l":["i"],"k":["i"],"f":["i"],"L":[]},"n4":{"l":["i"],"k":["i"],"f":["i"],"L":[]},"jH":{"l":["x"],"k":["x"],"f":["x"],"L":[]},"ms":{"l":["x"],"k":["x"],"f":["x"],"L":[]}}'))
A.nv(v.typeUniverse,JSON.parse('{"k":1,"bW":1,"bf":1,"dM":2,"c4":1}'))
var u={b:"    #version 300 es\n    precision highp float;\n\n    in vec2 aPositionMapping;\n    out vec2 vMapping;\n\n    uniform mat3 uPvwlTransform;\n\n    void main()\n    {\n      vMapping = aPositionMapping;\n\n      vec3 position = uPvwlTransform * vec3(aPositionMapping, 1.0);\n      gl_Position = vec4(position.xy, 0.0, 1.0);\n    }\n  ",c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type"}
var t=(function rtii(){var s=A.R
return{a7:s("@<~>"),t:s("ce"),cQ:s("bm"),c9:s("bn"),fK:s("bo"),gA:s("bp"),gF:s("cg<c_,@>"),W:s("aN"),g5:s("A"),m:s("S"),e5:s("aP"),fJ:s("bR"),gw:s("k<@>"),a:s("E"),A:s("j"),aS:s("c"),c8:s("a_"),Z:s("br"),b9:s("aq<@>"),r:s("ar"),gb:s("co"),dt:s("bu"),B:s("kw"),e:s("f<@>"),U:s("z<bm>"),aJ:s("z<aq<v>>"),d:s("z<aD<@>>"),s:s("z<p>"),n:s("z<x>"),b:s("z<@>"),dC:s("z<i>"),cA:s("z<J>"),T:s("cr"),h:s("aA"),aU:s("u<@>"),am:s("by<@>"),eo:s("aQ<c_,@>"),k:s("aS"),dz:s("cu"),g:s("aT"),bG:s("ah"),ew:s("l<v>"),j:s("l<@>"),x:s("l<J>"),aH:s("K<p,eJ>"),g6:s("K<p,i>"),f:s("K<@,@>"),gU:s("aV"),w:s("bC"),cI:s("a8"),V:s("a0"),G:s("r"),P:s("G"),eq:s("aj"),K:s("v"),he:s("a9"),D:s("a1"),eU:s("aa"),E:s("ba<J>"),J:s("av"),L:s("aB"),gT:s("pi"),q:s("aC<J>"),cl:s("bY"),fY:s("a3"),f7:s("ab"),gf:s("ac"),l:s("al"),N:s("p"),gn:s("X"),fo:s("c_"),a0:s("a4"),c7:s("T"),aK:s("ad"),R:s("aW"),cM:s("am"),dm:s("B"),eK:s("aY"),Q:s("L"),gc:s("eJ"),ak:s("bH"),cW:s("P"),gx:s("bd"),g4:s("be"),g2:s("aE"),er:s("aF<S>"),bl:s("aF<aS>"),bj:s("bI<ar>"),eJ:s("f3<aN>"),ao:s("F<ar>"),ck:s("F<G>"),c:s("F<@>"),gQ:s("F<i>"),cd:s("F<~>"),dx:s("d4<@,@>"),y:s("j7"),al:s("j7(v)"),i:s("x"),z:s("@"),O:s("@()"),v:s("@(v)"),C:s("@(v,al)"),b8:s("@(@,@)"),S:s("i"),aw:s("0&*"),_:s("v*"),eH:s("aq<G>?"),g7:s("a7?"),bM:s("l<@>?"),X:s("v?"),eV:s("cL?"),gO:s("al?"),I:s("cN<x>?"),ev:s("bf<@>?"),F:s("bJ<@,@>?"),o:s("@(j)?"),Y:s("~()?"),gq:s("~(bn)?"),fi:s("~(j)?"),eN:s("~(aT)?"),h2:s("~(a0)?"),dB:s("~(av)?"),fj:s("~(aW)?"),h8:s("~(bd)?"),H:s("J"),p:s("~"),M:s("~()"),cZ:s("~(bS,bS,bT)"),d5:s("~(v)"),da:s("~(v,al)"),eA:s("~(p,p)"),u:s("~(p,@)"),c4:s("~(J)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.e=A.bp.prototype
B.W=A.ar.prototype
B.X=J.bU.prototype
B.a=J.z.prototype
B.f=J.cq.prototype
B.b=J.bv.prototype
B.v=J.b9.prototype
B.Y=J.aA.prototype
B.Z=J.a.prototype
B.z=A.cx.prototype
B.A=A.cB.prototype
B.B=J.eo.prototype
B.c=A.bY.prototype
B.k=A.cQ.prototype
B.l=J.bH.prototype
B.E=A.bd.prototype
B.m=A.be.prototype
B.r=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.M=function() {
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
B.R=function(getTagFallback) {
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
B.N=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.O=function(hooks) {
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
B.Q=function(hooks) {
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
B.P=function(hooks) {
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
B.t=function(hooks) { return hooks; }

B.S=new A.e2()
B.T=new A.en()
B.ak=new A.hV()
B.U=new A.eZ()
B.u=new A.iN()
B.d=new A.fp()
B.V=new A.fx()
B.a_=new A.hw(null)
B.h=new A.au(0,"octopus")
B.a4=new A.au(1,"octopusAlt")
B.i=new A.au(2,"crab")
B.a5=new A.au(3,"crabAlt")
B.j=new A.au(4,"medusa")
B.a6=new A.au(5,"medusaAlt")
B.C=new A.au(6,"boss")
B.D=new A.au(7,"quad")
B.w=A.q(s([B.h,B.a4,B.i,B.a5,B.j,B.a6,B.C,B.D]),A.R("z<au>"))
B.F=new A.aG(0,"out")
B.G=new A.aG(1,"down")
B.H=new A.aG(2,"up")
B.p=new A.aG(3,"move")
B.I=new A.aG(4,"drag")
B.J=new A.aG(5,"wheel")
B.a0=A.q(s([B.F,B.G,B.H,B.p,B.I,B.J]),A.R("z<aG>"))
B.n=new A.c5(0,"down")
B.o=new A.c5(1,"up")
B.a1=A.q(s([B.n,B.o]),A.R("z<c5>"))
B.x=A.q(s([]),t.b)
B.K=new A.bK(0,"down")
B.L=new A.bK(1,"up")
B.q=new A.bK(2,"drag")
B.a2=A.q(s([B.K,B.L,B.q]),A.R("z<bK>"))
B.a3={}
B.y=new A.ch(B.a3,[],A.R("ch<c_,@>"))
B.a7=new A.bZ("call")
B.a8=A.ay("p2")
B.a9=A.ay("mi")
B.aa=A.ay("jH")
B.ab=A.ay("ms")
B.ac=A.ay("mw")
B.ad=A.ay("mx")
B.ae=A.ay("my")
B.af=A.ay("v")
B.ag=A.ay("jO")
B.ah=A.ay("n4")
B.ai=A.ay("n5")
B.aj=A.ay("eJ")})();(function staticFields(){$.iL=null
$.ae=A.q([],A.R("z<v>"))
$.kI=null
$.kn=null
$.km=null
$.lJ=null
$.lD=null
$.lO=null
$.j9=null
$.jd=null
$.k5=null
$.c9=null
$.dq=null
$.dr=null
$.k0=!1
$.C=B.d
$.jR=null
$.V=A.q([],t.d)
$.M=A.q([],A.R("z<cG>"))
$.j2=A.q([],A.R("z<cp>"))
$.bL=A.q([],A.R("z<bE>"))
$.k1=-1})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal
s($,"p7","fV",()=>A.lI("_$dart_dartClosure"))
s($,"qb","jB",()=>B.d.bX(new A.jl(),A.R("aq<G>")))
s($,"pn","lR",()=>A.aZ(A.ic({
toString:function(){return"$receiver$"}})))
s($,"po","lS",()=>A.aZ(A.ic({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"pp","lT",()=>A.aZ(A.ic(null)))
s($,"pq","lU",()=>A.aZ(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"pt","lX",()=>A.aZ(A.ic(void 0)))
s($,"pu","lY",()=>A.aZ(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"ps","lW",()=>A.aZ(A.kX(null)))
s($,"pr","lV",()=>A.aZ(function(){try{null.$method$}catch(r){return r.message}}()))
s($,"pw","m_",()=>A.aZ(A.kX(void 0)))
s($,"pv","lZ",()=>A.aZ(function(){try{(void 0).$method$}catch(r){return r.message}}()))
s($,"py","k9",()=>A.n8())
s($,"pb","jp",()=>t.ck.a($.jB()))
s($,"pT","m0",()=>A.jm(B.af))
s($,"pO","kb",()=>A.nI(A.k2(self)))
s($,"pz","ka",()=>A.lI("_$dart_dartObject"))
s($,"pP","kc",()=>function DartObject(a){this.o=a})
s($,"pm","lQ",()=>A.jE(1,1))
s($,"pS","kd",()=>new A.dW(1.5707963267948966,1,0.1,100))
s($,"pI","jq",()=>A.mZ(0,0,1024,1024))
s($,"q7","jA",()=>A.mN(-3,-2,6))
s($,"q6","m2",()=>A.jQ(A.kY(0.343,-0.072,-0.936)))
s($,"q8","m3",()=>A.jQ(A.kY(0.021,0.961,0.274)))
s($,"pW","jt",()=>A.R("bQ").a(A.os().querySelector("#real-t-demo-hbao")))
s($,"pN","dw",()=>{var r,q=A.jE(null,null)
A.cF()
r=t.z
return new A.eR(q,new A.cI(A.cF()),A.i_(r),A.i_(r))})
s($,"pR","js",()=>new A.dV(A.hB(20,0,!0,t.i)))
s($,"pV","ke",()=>new A.hx(A.q([],t.d),A.e4(A.R("c5"),A.R("cN<aS>"))))
s($,"pX","kf",()=>new A.ea(A.q([],t.d),A.e4(A.R("aG"),A.R("cN<S>")),A.cF(),A.cF()))
s($,"q4","kh",()=>new A.em(A.q([],t.d),A.e4(A.R("bK"),A.R("cN<S>")),A.cF(),A.cF()))
s($,"pK","b6",()=>new A.h7(A.kF(),A.kF(),A.i9(),A.i9()))
s($,"pM","dv",()=>new A.hW(new A.aa(0,0,0),A.bF()))
s($,"pL","fW",()=>new A.fZ(A.l_(),A.l_(),A.bF(),A.bF()))
s($,"pY","dy",()=>new A.ik())
s($,"pJ","jr",()=>new A.h6(A.mF(0),A.mE(0)))
s($,"pQ","dx",()=>new A.hh())
s($,"q2","jx",()=>new A.hg())
s($,"q0","jv",()=>new A.h3())
s($,"pZ","ju",()=>{var r=A.ew("uSampler"),q=A.jL("uPvwlTransform")
return new A.i6(A.ii(),new A.bX(),r,q)})
s($,"q5","jz",()=>new A.ij(new A.cT(A.q([A.mf("aPosition",0,3,12,0)],t.U)),new A.bX(),new A.hH("uPvwlTransform")))
s($,"q3","jy",()=>{var r=A.jL("uPvwlTransform"),q=A.l0("uViewBound"),p=A.ew("uDepthDataSampler"),o=A.ew("uSamplingRotationSampler")
return new A.hY(A.ii(),new A.bX(),r,new A.ig("uData"),q,p,o,new A.dW(0,0,0,0))})
s($,"q1","jw",()=>{var r=A.jL("uPvwlTransform"),q=A.l0("uViewBound"),p=A.ew("uDepthDataSampler"),o=A.ew("uOcclusionSampler")
return new A.hX(A.ii(),new A.bX(),r,q,p,o)})
s($,"q_","kg",()=>new A.cR(A.q([1,0,0,0,1,0,0,0,1],t.n)))
s($,"pU","m1",()=>new A.cR(A.q([2,0,0,0,2,0,-1,-1,1],t.n)))})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({WebGL:J.bU,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,webkitFileSystemDirectoryEntry:J.a,FileSystemDirectoryEntry:J.a,DirectoryReader:J.a,WebKitDirectoryReader:J.a,webkitFileSystemDirectoryReader:J.a,FileSystemDirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,webkitFileSystemEntry:J.a,FileSystemEntry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,webkitFileSystemFileEntry:J.a,FileSystemFileEntry:J.a,DOMFileSystem:J.a,WebKitFileSystem:J.a,webkitFileSystem:J.a,FileSystem:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,GeolocationPosition:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,GeolocationPositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL2RenderingContextBase:J.a,ArrayBuffer:A.eb,ArrayBufferView:A.cA,DataView:A.ec,Float32Array:A.cx,Float64Array:A.ed,Int16Array:A.ee,Int32Array:A.ef,Int8Array:A.eg,Uint16Array:A.cB,Uint32Array:A.eh,Uint8ClampedArray:A.cC,CanvasPixelArray:A.cC,Uint8Array:A.ei,HTMLBRElement:A.n,HTMLBaseElement:A.n,HTMLBodyElement:A.n,HTMLButtonElement:A.n,HTMLContentElement:A.n,HTMLDListElement:A.n,HTMLDataElement:A.n,HTMLDataListElement:A.n,HTMLDetailsElement:A.n,HTMLDialogElement:A.n,HTMLEmbedElement:A.n,HTMLFieldSetElement:A.n,HTMLHRElement:A.n,HTMLHeadElement:A.n,HTMLHeadingElement:A.n,HTMLHtmlElement:A.n,HTMLIFrameElement:A.n,HTMLInputElement:A.n,HTMLLIElement:A.n,HTMLLabelElement:A.n,HTMLLegendElement:A.n,HTMLLinkElement:A.n,HTMLMapElement:A.n,HTMLMenuElement:A.n,HTMLMetaElement:A.n,HTMLMeterElement:A.n,HTMLModElement:A.n,HTMLOListElement:A.n,HTMLObjectElement:A.n,HTMLOptGroupElement:A.n,HTMLOptionElement:A.n,HTMLOutputElement:A.n,HTMLParagraphElement:A.n,HTMLParamElement:A.n,HTMLPictureElement:A.n,HTMLPreElement:A.n,HTMLProgressElement:A.n,HTMLQuoteElement:A.n,HTMLScriptElement:A.n,HTMLShadowElement:A.n,HTMLSlotElement:A.n,HTMLSourceElement:A.n,HTMLSpanElement:A.n,HTMLStyleElement:A.n,HTMLTableCaptionElement:A.n,HTMLTableCellElement:A.n,HTMLTableDataCellElement:A.n,HTMLTableHeaderCellElement:A.n,HTMLTableColElement:A.n,HTMLTableElement:A.n,HTMLTableRowElement:A.n,HTMLTableSectionElement:A.n,HTMLTemplateElement:A.n,HTMLTextAreaElement:A.n,HTMLTimeElement:A.n,HTMLTitleElement:A.n,HTMLTrackElement:A.n,HTMLUListElement:A.n,HTMLUnknownElement:A.n,HTMLDirectoryElement:A.n,HTMLFontElement:A.n,HTMLFrameElement:A.n,HTMLFrameSetElement:A.n,HTMLMarqueeElement:A.n,HTMLElement:A.n,AccessibleNodeList:A.h_,HTMLAnchorElement:A.dB,HTMLAreaElement:A.dC,BeforeUnloadEvent:A.bn,Blob:A.bo,HTMLCanvasElement:A.bp,CDATASection:A.az,CharacterData:A.az,Comment:A.az,ProcessingInstruction:A.az,Text:A.az,CSSPerspective:A.h8,CSSCharsetRule:A.A,CSSConditionRule:A.A,CSSFontFaceRule:A.A,CSSGroupingRule:A.A,CSSImportRule:A.A,CSSKeyframeRule:A.A,MozCSSKeyframeRule:A.A,WebKitCSSKeyframeRule:A.A,CSSKeyframesRule:A.A,MozCSSKeyframesRule:A.A,WebKitCSSKeyframesRule:A.A,CSSMediaRule:A.A,CSSNamespaceRule:A.A,CSSPageRule:A.A,CSSRule:A.A,CSSStyleRule:A.A,CSSSupportsRule:A.A,CSSViewportRule:A.A,CSSStyleDeclaration:A.ci,MSStyleCSSProperties:A.ci,CSS2Properties:A.ci,CSSImageValue:A.ap,CSSKeywordValue:A.ap,CSSNumericValue:A.ap,CSSPositionValue:A.ap,CSSResourceValue:A.ap,CSSUnitValue:A.ap,CSSURLImageValue:A.ap,CSSStyleValue:A.ap,CSSMatrixComponent:A.aO,CSSRotation:A.aO,CSSScale:A.aO,CSSSkew:A.aO,CSSTranslation:A.aO,CSSTransformComponent:A.aO,CSSTransformValue:A.ha,CSSUnparsedValue:A.hb,DataTransferItemList:A.hc,HTMLDivElement:A.bQ,Document:A.aP,HTMLDocument:A.aP,XMLDocument:A.aP,DOMException:A.he,ClientRectList:A.ck,DOMRectList:A.ck,DOMRectReadOnly:A.cl,DOMStringList:A.dO,DOMTokenList:A.hf,MathMLElement:A.h,SVGAElement:A.h,SVGAnimateElement:A.h,SVGAnimateMotionElement:A.h,SVGAnimateTransformElement:A.h,SVGAnimationElement:A.h,SVGCircleElement:A.h,SVGClipPathElement:A.h,SVGDefsElement:A.h,SVGDescElement:A.h,SVGDiscardElement:A.h,SVGEllipseElement:A.h,SVGFEBlendElement:A.h,SVGFEColorMatrixElement:A.h,SVGFEComponentTransferElement:A.h,SVGFECompositeElement:A.h,SVGFEConvolveMatrixElement:A.h,SVGFEDiffuseLightingElement:A.h,SVGFEDisplacementMapElement:A.h,SVGFEDistantLightElement:A.h,SVGFEFloodElement:A.h,SVGFEFuncAElement:A.h,SVGFEFuncBElement:A.h,SVGFEFuncGElement:A.h,SVGFEFuncRElement:A.h,SVGFEGaussianBlurElement:A.h,SVGFEImageElement:A.h,SVGFEMergeElement:A.h,SVGFEMergeNodeElement:A.h,SVGFEMorphologyElement:A.h,SVGFEOffsetElement:A.h,SVGFEPointLightElement:A.h,SVGFESpecularLightingElement:A.h,SVGFESpotLightElement:A.h,SVGFETileElement:A.h,SVGFETurbulenceElement:A.h,SVGFilterElement:A.h,SVGForeignObjectElement:A.h,SVGGElement:A.h,SVGGeometryElement:A.h,SVGGraphicsElement:A.h,SVGImageElement:A.h,SVGLineElement:A.h,SVGLinearGradientElement:A.h,SVGMarkerElement:A.h,SVGMaskElement:A.h,SVGMetadataElement:A.h,SVGPathElement:A.h,SVGPatternElement:A.h,SVGPolygonElement:A.h,SVGPolylineElement:A.h,SVGRadialGradientElement:A.h,SVGRectElement:A.h,SVGScriptElement:A.h,SVGSetElement:A.h,SVGStopElement:A.h,SVGStyleElement:A.h,SVGElement:A.h,SVGSVGElement:A.h,SVGSwitchElement:A.h,SVGSymbolElement:A.h,SVGTSpanElement:A.h,SVGTextContentElement:A.h,SVGTextElement:A.h,SVGTextPathElement:A.h,SVGTextPositioningElement:A.h,SVGTitleElement:A.h,SVGUseElement:A.h,SVGViewElement:A.h,SVGGradientElement:A.h,SVGComponentTransferFunctionElement:A.h,SVGFEDropShadowElement:A.h,SVGMPathElement:A.h,Element:A.h,AbortPaymentEvent:A.j,AnimationEvent:A.j,AnimationPlaybackEvent:A.j,ApplicationCacheErrorEvent:A.j,BackgroundFetchClickEvent:A.j,BackgroundFetchEvent:A.j,BackgroundFetchFailEvent:A.j,BackgroundFetchedEvent:A.j,BeforeInstallPromptEvent:A.j,BlobEvent:A.j,CanMakePaymentEvent:A.j,ClipboardEvent:A.j,CloseEvent:A.j,CustomEvent:A.j,DeviceMotionEvent:A.j,DeviceOrientationEvent:A.j,ErrorEvent:A.j,ExtendableEvent:A.j,ExtendableMessageEvent:A.j,FetchEvent:A.j,FontFaceSetLoadEvent:A.j,ForeignFetchEvent:A.j,GamepadEvent:A.j,HashChangeEvent:A.j,InstallEvent:A.j,MediaEncryptedEvent:A.j,MediaKeyMessageEvent:A.j,MediaQueryListEvent:A.j,MediaStreamEvent:A.j,MediaStreamTrackEvent:A.j,MessageEvent:A.j,MIDIConnectionEvent:A.j,MIDIMessageEvent:A.j,MutationEvent:A.j,NotificationEvent:A.j,PageTransitionEvent:A.j,PaymentRequestEvent:A.j,PaymentRequestUpdateEvent:A.j,PopStateEvent:A.j,PresentationConnectionAvailableEvent:A.j,PresentationConnectionCloseEvent:A.j,PromiseRejectionEvent:A.j,PushEvent:A.j,RTCDataChannelEvent:A.j,RTCDTMFToneChangeEvent:A.j,RTCPeerConnectionIceEvent:A.j,RTCTrackEvent:A.j,SecurityPolicyViolationEvent:A.j,SensorErrorEvent:A.j,SpeechRecognitionError:A.j,SpeechRecognitionEvent:A.j,SpeechSynthesisEvent:A.j,StorageEvent:A.j,SyncEvent:A.j,TrackEvent:A.j,TransitionEvent:A.j,WebKitTransitionEvent:A.j,VRDeviceEvent:A.j,VRDisplayEvent:A.j,VRSessionEvent:A.j,MojoInterfaceRequestEvent:A.j,USBConnectionEvent:A.j,IDBVersionChangeEvent:A.j,AudioProcessingEvent:A.j,OfflineAudioCompletionEvent:A.j,Event:A.j,InputEvent:A.j,SubmitEvent:A.j,AbsoluteOrientationSensor:A.c,Accelerometer:A.c,AccessibleNode:A.c,AmbientLightSensor:A.c,Animation:A.c,ApplicationCache:A.c,DOMApplicationCache:A.c,OfflineResourceList:A.c,BackgroundFetchRegistration:A.c,BatteryManager:A.c,BroadcastChannel:A.c,CanvasCaptureMediaStreamTrack:A.c,EventSource:A.c,FileReader:A.c,Gyroscope:A.c,LinearAccelerationSensor:A.c,Magnetometer:A.c,MediaDevices:A.c,MediaKeySession:A.c,MediaQueryList:A.c,MediaRecorder:A.c,MediaSource:A.c,MediaStream:A.c,MediaStreamTrack:A.c,MessagePort:A.c,MIDIAccess:A.c,MIDIInput:A.c,MIDIOutput:A.c,MIDIPort:A.c,NetworkInformation:A.c,Notification:A.c,OffscreenCanvas:A.c,OrientationSensor:A.c,PaymentRequest:A.c,Performance:A.c,PermissionStatus:A.c,PresentationAvailability:A.c,PresentationConnection:A.c,PresentationConnectionList:A.c,PresentationRequest:A.c,RelativeOrientationSensor:A.c,RemotePlayback:A.c,RTCDataChannel:A.c,DataChannel:A.c,RTCDTMFSender:A.c,RTCPeerConnection:A.c,webkitRTCPeerConnection:A.c,mozRTCPeerConnection:A.c,ScreenOrientation:A.c,Sensor:A.c,ServiceWorker:A.c,ServiceWorkerContainer:A.c,ServiceWorkerRegistration:A.c,SharedWorker:A.c,SpeechRecognition:A.c,webkitSpeechRecognition:A.c,SpeechSynthesis:A.c,SpeechSynthesisUtterance:A.c,VR:A.c,VRDevice:A.c,VRDisplay:A.c,VRSession:A.c,VisualViewport:A.c,WebSocket:A.c,Worker:A.c,WorkerPerformance:A.c,BluetoothDevice:A.c,BluetoothRemoteGATTCharacteristic:A.c,Clipboard:A.c,MojoInterfaceInterceptor:A.c,USB:A.c,IDBDatabase:A.c,IDBOpenDBRequest:A.c,IDBVersionChangeRequest:A.c,IDBRequest:A.c,IDBTransaction:A.c,AnalyserNode:A.c,RealtimeAnalyserNode:A.c,AudioBufferSourceNode:A.c,AudioDestinationNode:A.c,AudioNode:A.c,AudioScheduledSourceNode:A.c,AudioWorkletNode:A.c,BiquadFilterNode:A.c,ChannelMergerNode:A.c,AudioChannelMerger:A.c,ChannelSplitterNode:A.c,AudioChannelSplitter:A.c,ConstantSourceNode:A.c,ConvolverNode:A.c,DelayNode:A.c,DynamicsCompressorNode:A.c,GainNode:A.c,AudioGainNode:A.c,IIRFilterNode:A.c,MediaElementAudioSourceNode:A.c,MediaStreamAudioDestinationNode:A.c,MediaStreamAudioSourceNode:A.c,OscillatorNode:A.c,Oscillator:A.c,PannerNode:A.c,AudioPannerNode:A.c,webkitAudioPannerNode:A.c,ScriptProcessorNode:A.c,JavaScriptAudioNode:A.c,StereoPannerNode:A.c,WaveShaperNode:A.c,EventTarget:A.c,File:A.a_,FileList:A.dQ,FileWriter:A.dR,FontFace:A.bS,FontFaceSet:A.bT,HTMLFormElement:A.dS,Gamepad:A.a7,History:A.ho,HTMLCollection:A.bs,HTMLFormControlsCollection:A.bs,HTMLOptionsCollection:A.bs,XMLHttpRequest:A.ar,XMLHttpRequestUpload:A.bt,XMLHttpRequestEventTarget:A.bt,ImageData:A.co,HTMLImageElement:A.dX,IntersectionObserver:A.bu,IntersectionObserverEntry:A.hs,KeyboardEvent:A.aT,Location:A.hC,HTMLAudioElement:A.bD,HTMLMediaElement:A.bD,MediaList:A.hI,MIDIInputMap:A.e7,MIDIOutputMap:A.e8,MimeType:A.a8,MimeTypeArray:A.e9,PointerEvent:A.a0,MouseEvent:A.a0,DragEvent:A.a0,DocumentFragment:A.r,ShadowRoot:A.r,Attr:A.r,DocumentType:A.r,Node:A.r,NodeList:A.cD,RadioNodeList:A.cD,Plugin:A.a9,PluginArray:A.ep,ProgressEvent:A.av,ResourceProgressEvent:A.av,RTCStatsReport:A.eu,HTMLSelectElement:A.ex,SourceBuffer:A.a3,SourceBufferList:A.ez,SpeechGrammar:A.ab,SpeechGrammarList:A.eA,SpeechRecognitionResult:A.ac,Storage:A.eC,CSSStyleSheet:A.X,StyleSheet:A.X,TextTrack:A.a4,TextTrackCue:A.T,VTTCue:A.T,TextTrackCueList:A.eF,TextTrackList:A.eG,TimeRanges:A.i7,Touch:A.ad,TouchEvent:A.aW,TouchList:A.cQ,TrackDefaultList:A.i8,CompositionEvent:A.b_,FocusEvent:A.b_,TextEvent:A.b_,UIEvent:A.b_,URL:A.ie,HTMLVideoElement:A.eP,VideoTrackList:A.eQ,WheelEvent:A.bd,Window:A.be,DOMWindow:A.be,DedicatedWorkerGlobalScope:A.aE,ServiceWorkerGlobalScope:A.aE,SharedWorkerGlobalScope:A.aE,WorkerGlobalScope:A.aE,CSSRuleList:A.eW,ClientRect:A.cZ,DOMRect:A.cZ,GamepadList:A.f8,NamedNodeMap:A.d7,MozNamedAttrMap:A.d7,SpeechRecognitionResultList:A.ft,StyleSheetList:A.fy,IDBKeyRange:A.cu,SVGLength:A.ah,SVGLengthList:A.e3,SVGNumber:A.aj,SVGNumberList:A.ek,SVGPointList:A.hO,SVGStringList:A.eD,SVGTransform:A.am,SVGTransformList:A.eI,AudioBuffer:A.h1,AudioParamMap:A.dE,AudioTrackList:A.dF,AudioContext:A.b7,webkitAudioContext:A.b7,BaseAudioContext:A.b7,OfflineAudioContext:A.el,WebGLBuffer:A.dG,WebGLContextEvent:A.aN,WebGLFramebuffer:A.dU,WebGLProgram:A.eq,WebGLRenderbuffer:A.et,WebGLRenderingContext:A.cL,WebGL2RenderingContext:A.bY,WebGLShader:A.ey,WebGLTexture:A.eH,WebGLUniformLocation:A.eK})
hunkHelpers.setOrUpdateLeafTags({WebGL:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,webkitFileSystemDirectoryEntry:true,FileSystemDirectoryEntry:true,DirectoryReader:true,WebKitDirectoryReader:true,webkitFileSystemDirectoryReader:true,FileSystemDirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,webkitFileSystemEntry:true,FileSystemEntry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,webkitFileSystemFileEntry:true,FileSystemFileEntry:true,DOMFileSystem:true,WebKitFileSystem:true,webkitFileSystem:true,FileSystem:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,GeolocationPosition:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,GeolocationPositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL2RenderingContextBase:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,BeforeUnloadEvent:true,Blob:false,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,Document:true,HTMLDocument:true,XMLDocument:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,MathMLElement:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,Event:false,InputEvent:false,SubmitEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,EventSource:true,FileReader:true,Gyroscope:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerRegistration:true,SharedWorker:true,SpeechRecognition:true,webkitSpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,FontFace:true,FontFaceSet:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,XMLHttpRequest:true,XMLHttpRequestUpload:true,XMLHttpRequestEventTarget:false,ImageData:true,HTMLImageElement:true,IntersectionObserver:true,IntersectionObserverEntry:true,KeyboardEvent:true,Location:true,HTMLAudioElement:true,HTMLMediaElement:false,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,DocumentFragment:true,ShadowRoot:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,ProgressEvent:true,ResourceProgressEvent:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,HTMLVideoElement:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,DedicatedWorkerGlobalScope:true,ServiceWorkerGlobalScope:true,SharedWorkerGlobalScope:true,WorkerGlobalScope:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,IDBKeyRange:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLContextEvent:true,WebGLFramebuffer:true,WebGLProgram:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true})
A.bW.$nativeSuperclassTag="ArrayBufferView"
A.d8.$nativeSuperclassTag="ArrayBufferView"
A.d9.$nativeSuperclassTag="ArrayBufferView"
A.cy.$nativeSuperclassTag="ArrayBufferView"
A.da.$nativeSuperclassTag="ArrayBufferView"
A.db.$nativeSuperclassTag="ArrayBufferView"
A.cz.$nativeSuperclassTag="ArrayBufferView"
A.dd.$nativeSuperclassTag="EventTarget"
A.de.$nativeSuperclassTag="EventTarget"
A.dg.$nativeSuperclassTag="EventTarget"
A.dh.$nativeSuperclassTag="EventTarget"})()
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
var s=A.oQ
if(typeof dartMainRunner==="function")dartMainRunner(s,[])
else s([])})})()