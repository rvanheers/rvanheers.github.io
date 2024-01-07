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
a[c]=function(){a[c]=function(){A.mW(b)}
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
if(a[b]!==s)A.mX(b)
a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s)convertToFastObject(a[s])}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.iG(b)
return new s(c,this)}:function(){if(s===null)s=A.iG(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.iG(a).prototype
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
iL(a,b,c,d){return{i:a,p:b,e:c,x:d}},
i4(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.iI==null){A.mJ()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw A.c(A.js("Return interceptor for "+A.n(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.hF
if(o==null)o=$.hF=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=A.mQ(a)
if(p!=null)return p
if(typeof a=="function")return B.B
s=Object.getPrototypeOf(a)
if(s==null)return B.r
if(s===Object.prototype)return B.r
if(typeof q=="function"){o=$.hF
if(o==null)o=$.hF=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:B.i,enumerable:false,writable:true,configurable:true})
return B.i}return B.i},
l0(a,b){if(a<0||a>4294967295)throw A.c(A.dL(a,0,4294967295,"length",null))
return J.j6(A.q(new Array(a),b.h("G<0>")),b)},
j5(a,b){if(a<0)throw A.c(A.aw("Length must be a non-negative integer: "+a,null))
return A.q(new Array(a),b.h("G<0>"))},
j6(a,b){a.fixed$length=Array
return a},
at(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.bV.prototype
return J.dn.prototype}if(typeof a=="string")return J.bm.prototype
if(a==null)return J.bW.prototype
if(typeof a=="boolean")return J.dl.prototype
if(Array.isArray(a))return J.G.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ak.prototype
if(typeof a=="symbol")return J.bo.prototype
if(typeof a=="bigint")return J.bn.prototype
return a}if(a instanceof A.u)return a
return J.i4(a)},
i3(a){if(typeof a=="string")return J.bm.prototype
if(a==null)return a
if(Array.isArray(a))return J.G.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ak.prototype
if(typeof a=="symbol")return J.bo.prototype
if(typeof a=="bigint")return J.bn.prototype
return a}if(a instanceof A.u)return a
return J.i4(a)},
f7(a){if(a==null)return a
if(Array.isArray(a))return J.G.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ak.prototype
if(typeof a=="symbol")return J.bo.prototype
if(typeof a=="bigint")return J.bn.prototype
return a}if(a instanceof A.u)return a
return J.i4(a)},
f8(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.ak.prototype
if(typeof a=="symbol")return J.bo.prototype
if(typeof a=="bigint")return J.bn.prototype
return a}if(a instanceof A.u)return a
return J.i4(a)},
ic(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.at(a).J(a,b)},
kw(a,b){if(typeof b==="number")if(Array.isArray(a)||typeof a=="string"||A.mM(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.i3(a).l(a,b)},
kx(a,b,c,d){return J.f8(a).cH(a,b,c,d)},
ky(a,b,c,d){return J.f8(a).cP(a,b,c,d)},
kz(a,b){return J.f7(a).q(a,b)},
id(a,b){return J.f7(a).v(a,b)},
kA(a){return J.f7(a).gt(a)},
ie(a){return J.at(a).gp(a)},
kB(a){return J.f8(a).gd3(a)},
cT(a){return J.f7(a).gW(a)},
fa(a){return J.i3(a).gi(a)},
kC(a){return J.at(a).gB(a)},
kD(a,b,c){return J.f7(a).bG(a,b,c)},
kE(a,b){return J.at(a).bH(a,b)},
cU(a){return J.at(a).j(a)},
bl:function bl(){},
dl:function dl(){},
bW:function bW(){},
a:function a(){},
aY:function aY(){},
dI:function dI(){},
cj:function cj(){},
ak:function ak(){},
bn:function bn(){},
bo:function bo(){},
G:function G(a){this.$ti=a},
fC:function fC(a){this.$ti=a},
cY:function cY(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bX:function bX(){},
bV:function bV(){},
dn:function dn(){},
bm:function bm(){}},A={iq:function iq(){},
ch(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
jo(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
li(a,b,c){return A.jo(A.ch(A.ch(c,a),b))},
f6(a,b,c){return a},
iK(a){var s,r
for(s=$.R.length,r=0;r<s;++r)if(a===$.R[r])return!0
return!1},
j3(){return new A.b4("No element")},
c_:function c_(a){this.a=a},
ia:function ia(){},
h3:function h3(){},
bR:function bR(){},
aZ:function aZ(){},
bp:function bp(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
b_:function b_(a,b,c){this.a=a
this.b=b
this.$ti=c},
L:function L(){},
bx:function bx(a){this.a=a},
kg(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
mM(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.da.b(a)},
n(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.cU(a)
return s},
ca(a){var s,r=$.jg
if(r==null)r=$.jg=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
ld(a,b){var s,r,q,p,o,n=null,m=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(m==null)return n
if(3>=m.length)return A.d(m,3)
s=m[3]
if(b<2||b>36)throw A.c(A.dL(b,2,36,"radix",n))
if(b===10&&s!=null)return parseInt(a,10)
if(b<10||s==null){r=b<=10?47+b:86+b
q=m[1]
for(p=q.length,o=0;o<p;++o)if((q.charCodeAt(o)|32)>r)return n}return parseInt(a,b)},
fU(a){return A.l4(a)},
l4(a){var s,r,q,p
if(a instanceof A.u)return A.O(A.aa(a),null)
s=J.at(a)
if(s===B.A||s===B.C||t.cr.b(a)){r=B.k(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.O(A.aa(a),null)},
le(a){if(typeof a=="number"||A.cN(a))return J.cU(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.ay)return a.j(0)
return"Instance of '"+A.fU(a)+"'"},
b2(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
lc(a){var s=A.b2(a).getFullYear()+0
return s},
la(a){var s=A.b2(a).getMonth()+1
return s},
l6(a){var s=A.b2(a).getDate()+0
return s},
l7(a){var s=A.b2(a).getHours()+0
return s},
l9(a){var s=A.b2(a).getMinutes()+0
return s},
lb(a){var s=A.b2(a).getSeconds()+0
return s},
l8(a){var s=A.b2(a).getMilliseconds()+0
return s},
aC(a,b,c){var s,r,q={}
q.a=0
s=[]
r=[]
q.a=b.length
B.a.a_(s,b)
q.b=""
if(c!=null&&c.a!==0)c.v(0,new A.fT(q,r,s))
return J.kE(a,new A.dm(B.E,0,s,r,0))},
l5(a,b,c){var s,r,q
if(Array.isArray(b))s=c==null||c.a===0
else s=!1
if(s){r=b.length
if(r===0){if(!!a.$0)return a.$0()}else if(r===1){if(!!a.$1)return a.$1(b[0])}else if(r===2){if(!!a.$2)return a.$2(b[0],b[1])}else if(r===3){if(!!a.$3)return a.$3(b[0],b[1],b[2])}else if(r===4){if(!!a.$4)return a.$4(b[0],b[1],b[2],b[3])}else if(r===5)if(!!a.$5)return a.$5(b[0],b[1],b[2],b[3],b[4])
q=a[""+"$"+r]
if(q!=null)return q.apply(a,b)}return A.l3(a,b,c)},
l3(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g=Array.isArray(b)?b:A.fE(b,t.z),f=g.length,e=a.$R
if(f<e)return A.aC(a,g,c)
s=a.$D
r=s==null
q=!r?s():null
p=J.at(a)
o=p.$C
if(typeof o=="string")o=p[o]
if(r){if(c!=null&&c.a!==0)return A.aC(a,g,c)
if(f===e)return o.apply(a,g)
return A.aC(a,g,c)}if(Array.isArray(q)){if(c!=null&&c.a!==0)return A.aC(a,g,c)
n=e+q.length
if(f>n)return A.aC(a,g,null)
if(f<n){m=q.slice(f-e)
if(g===b)g=A.fE(g,t.z)
B.a.a_(g,m)}return o.apply(a,g)}else{if(f>e)return A.aC(a,g,c)
if(g===b)g=A.fE(g,t.z)
l=Object.keys(q)
if(c==null)for(r=l.length,k=0;k<l.length;l.length===r||(0,A.aN)(l),++k){j=q[A.Y(l[k])]
if(B.m===j)return A.aC(a,g,c)
B.a.n(g,j)}else{for(r=l.length,i=0,k=0;k<l.length;l.length===r||(0,A.aN)(l),++k){h=A.Y(l[k])
if(c.cS(0,h)){++i
B.a.n(g,c.l(0,h))}else{j=q[h]
if(B.m===j)return A.aC(a,g,c)
B.a.n(g,j)}}if(i!==c.a)return A.aC(a,g,c)}return o.apply(a,g)}},
mH(a){throw A.c(A.k4(a))},
d(a,b){if(a==null)J.fa(a)
throw A.c(A.iH(a,b))},
iH(a,b){var s,r="index"
if(!A.hU(b))return new A.ai(!0,b,r,null)
s=A.X(J.fa(a))
if(b<0||b>=s)return A.H(b,s,a,r)
return A.ji(b,r)},
k4(a){return new A.ai(!0,a,null,null)},
c(a){return A.ka(new Error(),a)},
ka(a,b){var s
if(b==null)b=new A.an()
a.dartException=b
s=A.mY
if("defineProperty" in Object){Object.defineProperty(a,"message",{get:s})
a.name=""}else a.toString=s
return a},
mY(){return J.cU(this.dartException)},
av(a){throw A.c(a)},
kf(a,b){throw A.ka(b,a)},
aN(a){throw A.c(A.az(a))},
ao(a){var s,r,q,p,o,n
a=A.mV(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.q([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.hd(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
he(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
jr(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
ir(a,b){var s=b==null,r=s?null:b.method
return new A.dp(a,r,s?null:b.receiver)},
aO(a){var s
if(a==null)return new A.fQ(a)
if(a instanceof A.bS){s=a.a
return A.aM(a,s==null?t.K.a(s):s)}if(typeof a!=="object")return a
if("dartException" in a)return A.aM(a,a.dartException)
return A.mu(a)},
aM(a,b){if(t.R.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
mu(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.e.aO(r,16)&8191)===10)switch(q){case 438:return A.aM(a,A.ir(A.n(s)+" (Error "+q+")",null))
case 445:case 5007:A.n(s)
return A.aM(a,new A.c9())}}if(a instanceof TypeError){p=$.kk()
o=$.kl()
n=$.km()
m=$.kn()
l=$.kq()
k=$.kr()
j=$.kp()
$.ko()
i=$.kt()
h=$.ks()
g=p.K(s)
if(g!=null)return A.aM(a,A.ir(A.Y(s),g))
else{g=o.K(s)
if(g!=null){g.method="call"
return A.aM(a,A.ir(A.Y(s),g))}else if(n.K(s)!=null||m.K(s)!=null||l.K(s)!=null||k.K(s)!=null||j.K(s)!=null||m.K(s)!=null||i.K(s)!=null||h.K(s)!=null){A.Y(s)
return A.aM(a,new A.c9())}}return A.aM(a,new A.e3(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.cf()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.aM(a,new A.ai(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.cf()
return a},
aL(a){var s
if(a instanceof A.bS)return a.b
if(a==null)return new A.cE(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.cE(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
kc(a){if(a==null)return J.ie(a)
if(typeof a=="object")return A.ca(a)
return J.ie(a)},
mE(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.k(0,a[s],a[r])}return b},
m6(a,b,c,d,e,f){t.Z.a(a)
switch(A.X(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.c(A.da("Unsupported number of arguments for wrapped closure"))},
bb(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=A.mB(a,b)
a.$identity=s
return s},
mB(a,b){var s
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
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.m6)},
kO(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.dT().constructor.prototype):Object.create(new A.bf(null,null).constructor.prototype)
s.$initialize=s.constructor
if(h)r=function static_tear_off(){this.$initialize()}
else r=function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.iX(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.kK(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.iX(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
kK(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.c("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.kH)}throw A.c("Error in functionType of tearoff")},
kL(a,b,c,d){var s=A.iW
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
iX(a,b,c,d){var s,r
if(c)return A.kN(a,b,d)
s=b.length
r=A.kL(s,d,a,b)
return r},
kM(a,b,c,d){var s=A.iW,r=A.kI
switch(b?-1:a){case 0:throw A.c(new A.dO("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
kN(a,b,c){var s,r
if($.iU==null)$.iU=A.iT("interceptor")
if($.iV==null)$.iV=A.iT("receiver")
s=b.length
r=A.kM(s,c,a,b)
return r},
iG(a){return A.kO(a)},
kH(a,b){return A.hN(v.typeUniverse,A.aa(a.a),b)},
iW(a){return a.a},
kI(a){return a.b},
iT(a){var s,r,q,p=new A.bf("receiver","interceptor"),o=J.j6(Object.getOwnPropertyNames(p),t.X)
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw A.c(A.aw("Field name "+a+" not found.",null))},
mW(a){throw A.c(new A.ed(a))},
k8(a){return v.getIsolateTag(a)},
nN(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
mQ(a){var s,r,q,p,o,n=A.Y($.k9.$1(a)),m=$.i2[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.i8[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.lR($.k3.$2(a,n))
if(q!=null){m=$.i2[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.i8[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.i9(s)
$.i2[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.i8[n]=s
return s}if(p==="-"){o=A.i9(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.kd(a,s)
if(p==="*")throw A.c(A.js(n))
if(v.leafTags[n]===true){o=A.i9(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.kd(a,s)},
kd(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.iL(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
i9(a){return J.iL(a,!1,null,!!a.$ir)},
mU(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.i9(s)
else return J.iL(s,c,null,null)},
mJ(){if(!0===$.iI)return
$.iI=!0
A.mK()},
mK(){var s,r,q,p,o,n,m,l
$.i2=Object.create(null)
$.i8=Object.create(null)
A.mI()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.ke.$1(o)
if(n!=null){m=A.mU(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
mI(){var s,r,q,p,o,n,m=B.t()
m=A.bH(B.u,A.bH(B.v,A.bH(B.l,A.bH(B.l,A.bH(B.w,A.bH(B.x,A.bH(B.y(B.k),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.k9=new A.i5(p)
$.k3=new A.i6(o)
$.ke=new A.i7(n)},
bH(a,b){return a(b)||b},
mC(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
mV(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
bK:function bK(a,b){this.a=a
this.$ti=b},
bJ:function bJ(){},
bL:function bL(a,b,c){this.a=a
this.b=b
this.$ti=c},
dm:function dm(a,b,c,d,e){var _=this
_.a=a
_.c=b
_.d=c
_.e=d
_.f=e},
fT:function fT(a,b,c){this.a=a
this.b=b
this.c=c},
hd:function hd(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
c9:function c9(){},
dp:function dp(a,b,c){this.a=a
this.b=b
this.c=c},
e3:function e3(a){this.a=a},
fQ:function fQ(a){this.a=a},
bS:function bS(a,b){this.a=a
this.b=b},
cE:function cE(a){this.a=a
this.b=null},
ay:function ay(){},
d5:function d5(){},
d6:function d6(){},
dW:function dW(){},
dT:function dT(){},
bf:function bf(a,b){this.a=a
this.b=b},
ed:function ed(a){this.a=a},
dO:function dO(a){this.a=a},
hH:function hH(){},
P:function P(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fD:function fD(a,b){this.a=a
this.b=b
this.c=null},
c0:function c0(a,b){this.a=a
this.$ti=b},
dr:function dr(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
i5:function i5(a){this.a=a},
i6:function i6(a){this.a=a},
i7:function i7(a){this.a=a},
jL(a){return a},
ar(a){return a},
b9(a,b,c){if(a>>>0!==a||a>=c)throw A.c(A.iH(b,a))},
dx:function dx(){},
c5:function c5(){},
dy:function dy(){},
bt:function bt(){},
c3:function c3(){},
c4:function c4(){},
c2:function c2(){},
dz:function dz(){},
dA:function dA(){},
dB:function dB(){},
dC:function dC(){},
c6:function c6(){},
dD:function dD(){},
c7:function c7(){},
dE:function dE(){},
cx:function cx(){},
cy:function cy(){},
cz:function cz(){},
cA:function cA(){},
jj(a,b){var s=b.c
return s==null?b.c=A.iz(a,b.y,!0):s},
it(a,b){var s=b.c
return s==null?b.c=A.cJ(a,"a0",[b.y]):s},
lh(a){var s=a.d
if(s!=null)return s
return a.d=new Map()},
jk(a){var s=a.x
if(s===6||s===7||s===8)return A.jk(a.y)
return s===12||s===13},
lg(a){return a.at},
bd(a){return A.eU(v.typeUniverse,a,!1)},
aJ(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.x
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.y
r=A.aJ(a,s,a0,a1)
if(r===s)return b
return A.jH(a,r,!0)
case 7:s=b.y
r=A.aJ(a,s,a0,a1)
if(r===s)return b
return A.iz(a,r,!0)
case 8:s=b.y
r=A.aJ(a,s,a0,a1)
if(r===s)return b
return A.jG(a,r,!0)
case 9:q=b.z
p=A.cQ(a,q,a0,a1)
if(p===q)return b
return A.cJ(a,b.y,p)
case 10:o=b.y
n=A.aJ(a,o,a0,a1)
m=b.z
l=A.cQ(a,m,a0,a1)
if(n===o&&l===m)return b
return A.ix(a,n,l)
case 12:k=b.y
j=A.aJ(a,k,a0,a1)
i=b.z
h=A.mr(a,i,a0,a1)
if(j===k&&h===i)return b
return A.jF(a,j,h)
case 13:g=b.z
a1+=g.length
f=A.cQ(a,g,a0,a1)
o=b.y
n=A.aJ(a,o,a0,a1)
if(f===g&&n===o)return b
return A.iy(a,n,f,!0)
case 14:e=b.y
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw A.c(A.d_("Attempted to substitute unexpected RTI kind "+c))}},
cQ(a,b,c,d){var s,r,q,p,o=b.length,n=A.hO(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.aJ(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
ms(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.hO(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.aJ(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
mr(a,b,c,d){var s,r=b.a,q=A.cQ(a,r,c,d),p=b.b,o=A.cQ(a,p,c,d),n=b.c,m=A.ms(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.em()
s.a=q
s.b=o
s.c=m
return s},
q(a,b){a[v.arrayRti]=b
return a},
k6(a){var s,r=a.$S
if(r!=null){if(typeof r=="number")return A.mG(r)
s=a.$S()
return s}return null},
mL(a,b){var s
if(A.jk(b))if(a instanceof A.ay){s=A.k6(a)
if(s!=null)return s}return A.aa(a)},
aa(a){if(a instanceof A.u)return A.E(a)
if(Array.isArray(a))return A.aq(a)
return A.iE(J.at(a))},
aq(a){var s=a[v.arrayRti],r=t.b
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
E(a){var s=a.$ti
return s!=null?s:A.iE(a)},
iE(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.m5(a,s)},
m5(a,b){var s=a instanceof A.ay?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.lN(v.typeUniverse,s.name)
b.$ccache=r
return r},
mG(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.eU(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
mF(a){return A.bc(A.E(a))},
mq(a){var s=a instanceof A.ay?A.k6(a):null
if(s!=null)return s
if(t.bW.b(a))return J.kC(a).a
if(Array.isArray(a))return A.aq(a)
return A.aa(a)},
bc(a){var s=a.w
return s==null?a.w=A.jQ(a):s},
jQ(a){var s,r,q=a.at,p=q.replace(/\*/g,"")
if(p===q)return a.w=new A.hM(a)
s=A.eU(v.typeUniverse,p,!0)
r=s.w
return r==null?s.w=A.jQ(s):r},
ab(a){return A.bc(A.eU(v.typeUniverse,a,!1))},
m4(a){var s,r,q,p,o,n,m=this
if(m===t.K)return A.as(m,a,A.mb)
if(!A.au(m))if(!(m===t._))s=!1
else s=!0
else s=!0
if(s)return A.as(m,a,A.mf)
s=m.x
if(s===7)return A.as(m,a,A.m2)
if(s===1)return A.as(m,a,A.jW)
r=s===6?m.y:m
q=r.x
if(q===8)return A.as(m,a,A.m7)
if(r===t.S)p=A.hU
else if(r===t.i||r===t.H)p=A.ma
else if(r===t.N)p=A.md
else p=r===t.y?A.cN:null
if(p!=null)return A.as(m,a,p)
if(q===9){o=r.y
if(r.z.every(A.mO)){m.r="$i"+o
if(o==="j")return A.as(m,a,A.m9)
return A.as(m,a,A.me)}}else if(q===11){n=A.mC(r.y,r.z)
return A.as(m,a,n==null?A.jW:n)}return A.as(m,a,A.m0)},
as(a,b,c){a.b=c
return a.b(b)},
m3(a){var s,r=this,q=A.m_
if(!A.au(r))if(!(r===t._))s=!1
else s=!0
else s=!0
if(s)q=A.lS
else if(r===t.K)q=A.lQ
else{s=A.cR(r)
if(s)q=A.m1}r.a=q
return r.a(a)},
f4(a){var s,r=a.x
if(!A.au(a))if(!(a===t._))if(!(a===t.G))if(r!==7)if(!(r===6&&A.f4(a.y)))s=r===8&&A.f4(a.y)||a===t.P||a===t.T
else s=!0
else s=!0
else s=!0
else s=!0
else s=!0
return s},
m0(a){var s=this
if(a==null)return A.f4(s)
return A.mN(v.typeUniverse,A.mL(a,s),s)},
m2(a){if(a==null)return!0
return this.y.b(a)},
me(a){var s,r=this
if(a==null)return A.f4(r)
s=r.r
if(a instanceof A.u)return!!a[s]
return!!J.at(a)[s]},
m9(a){var s,r=this
if(a==null)return A.f4(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.r
if(a instanceof A.u)return!!a[s]
return!!J.at(a)[s]},
m_(a){var s,r=this
if(a==null){s=A.cR(r)
if(s)return a}else if(r.b(a))return a
A.jR(a,r)},
m1(a){var s=this
if(a==null)return a
else if(s.b(a))return a
A.jR(a,s)},
jR(a,b){throw A.c(A.lC(A.jx(a,A.O(b,null))))},
jx(a,b){return A.bk(a)+": type '"+A.O(A.mq(a),null)+"' is not a subtype of type '"+b+"'"},
lC(a){return new A.cH("TypeError: "+a)},
M(a,b){return new A.cH("TypeError: "+A.jx(a,b))},
m7(a){var s=this,r=s.x===6?s.y:s
return r.y.b(a)||A.it(v.typeUniverse,r).b(a)},
mb(a){return a!=null},
lQ(a){if(a!=null)return a
throw A.c(A.M(a,"Object"))},
mf(a){return!0},
lS(a){return a},
jW(a){return!1},
cN(a){return!0===a||!1===a},
iA(a){if(!0===a)return!0
if(!1===a)return!1
throw A.c(A.M(a,"bool"))},
nC(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.c(A.M(a,"bool"))},
nB(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.c(A.M(a,"bool?"))},
iB(a){if(typeof a=="number")return a
throw A.c(A.M(a,"double"))},
nE(a){if(typeof a=="number")return a
if(a==null)return a
throw A.c(A.M(a,"double"))},
nD(a){if(typeof a=="number")return a
if(a==null)return a
throw A.c(A.M(a,"double?"))},
hU(a){return typeof a=="number"&&Math.floor(a)===a},
X(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.c(A.M(a,"int"))},
nG(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.c(A.M(a,"int"))},
nF(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.c(A.M(a,"int?"))},
ma(a){return typeof a=="number"},
jK(a){if(typeof a=="number")return a
throw A.c(A.M(a,"num"))},
nH(a){if(typeof a=="number")return a
if(a==null)return a
throw A.c(A.M(a,"num"))},
lP(a){if(typeof a=="number")return a
if(a==null)return a
throw A.c(A.M(a,"num?"))},
md(a){return typeof a=="string"},
Y(a){if(typeof a=="string")return a
throw A.c(A.M(a,"String"))},
nI(a){if(typeof a=="string")return a
if(a==null)return a
throw A.c(A.M(a,"String"))},
lR(a){if(typeof a=="string")return a
if(a==null)return a
throw A.c(A.M(a,"String?"))},
jZ(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.O(a[q],b)
return s},
ml(a,b){var s,r,q,p,o,n,m=a.y,l=a.z
if(""===m)return"("+A.jZ(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.O(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
jS(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=", "
if(a6!=null){s=a6.length
if(a5==null){a5=A.q([],t.s)
r=null}else r=a5.length
q=a5.length
for(p=s;p>0;--p)B.a.n(a5,"T"+(q+p))
for(o=t.X,n=t._,m="<",l="",p=0;p<s;++p,l=a3){k=a5.length
j=k-1-p
if(!(j>=0))return A.d(a5,j)
m=B.h.ac(m+l,a5[j])
i=a6[p]
h=i.x
if(!(h===2||h===3||h===4||h===5||i===o))if(!(i===n))k=!1
else k=!0
else k=!0
if(!k)m+=" extends "+A.O(i,a5)}m+=">"}else{m=""
r=null}o=a4.y
g=a4.z
f=g.a
e=f.length
d=g.b
c=d.length
b=g.c
a=b.length
a0=A.O(o,a5)
for(a1="",a2="",p=0;p<e;++p,a2=a3)a1+=a2+A.O(f[p],a5)
if(c>0){a1+=a2+"["
for(a2="",p=0;p<c;++p,a2=a3)a1+=a2+A.O(d[p],a5)
a1+="]"}if(a>0){a1+=a2+"{"
for(a2="",p=0;p<a;p+=3,a2=a3){a1+=a2
if(b[p+1])a1+="required "
a1+=A.O(b[p+2],a5)+" "+b[p]}a1+="}"}if(r!=null){a5.toString
a5.length=r}return m+"("+a1+") => "+a0},
O(a,b){var s,r,q,p,o,n,m,l=a.x
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=A.O(a.y,b)
return s}if(l===7){r=a.y
s=A.O(r,b)
q=r.x
return(q===12||q===13?"("+s+")":s)+"?"}if(l===8)return"FutureOr<"+A.O(a.y,b)+">"
if(l===9){p=A.mt(a.y)
o=a.z
return o.length>0?p+("<"+A.jZ(o,b)+">"):p}if(l===11)return A.ml(a,b)
if(l===12)return A.jS(a,b,null)
if(l===13)return A.jS(a.y,b,a.z)
if(l===14){n=a.y
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.d(b,n)
return b[n]}return"?"},
mt(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
lO(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
lN(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.eU(a,b,!1)
else if(typeof m=="number"){s=m
r=A.cK(a,5,"#")
q=A.hO(s)
for(p=0;p<s;++p)q[p]=r
o=A.cJ(a,b,q)
n[b]=o
return o}else return m},
lL(a,b){return A.jI(a.tR,b)},
lK(a,b){return A.jI(a.eT,b)},
eU(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.jC(A.jA(a,null,b,c))
r.set(b,s)
return s},
hN(a,b,c){var s,r,q=b.Q
if(q==null)q=b.Q=new Map()
s=q.get(c)
if(s!=null)return s
r=A.jC(A.jA(a,b,c,!0))
q.set(c,r)
return r},
lM(a,b,c){var s,r,q,p=b.as
if(p==null)p=b.as=new Map()
s=c.at
r=p.get(s)
if(r!=null)return r
q=A.ix(a,b,c.x===10?c.z:[c])
p.set(s,q)
return q},
ap(a,b){b.a=A.m3
b.b=A.m4
return b},
cK(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.U(null,null)
s.x=b
s.at=c
r=A.ap(a,s)
a.eC.set(c,r)
return r},
jH(a,b,c){var s,r=b.at+"*",q=a.eC.get(r)
if(q!=null)return q
s=A.lH(a,b,r,c)
a.eC.set(r,s)
return s},
lH(a,b,c,d){var s,r,q
if(d){s=b.x
if(!A.au(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new A.U(null,null)
q.x=6
q.y=b
q.at=c
return A.ap(a,q)},
iz(a,b,c){var s,r=b.at+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.lG(a,b,r,c)
a.eC.set(r,s)
return s},
lG(a,b,c,d){var s,r,q,p
if(d){s=b.x
if(!A.au(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&A.cR(b.y)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.G)return t.P
else if(s===6){q=b.y
if(q.x===8&&A.cR(q.y))return q
else return A.jj(a,b)}}p=new A.U(null,null)
p.x=7
p.y=b
p.at=c
return A.ap(a,p)},
jG(a,b,c){var s,r=b.at+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.lE(a,b,r,c)
a.eC.set(r,s)
return s},
lE(a,b,c,d){var s,r,q
if(d){s=b.x
if(!A.au(b))if(!(b===t._))r=!1
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return A.cJ(a,"a0",[b])
else if(b===t.P||b===t.T)return t.bc}q=new A.U(null,null)
q.x=8
q.y=b
q.at=c
return A.ap(a,q)},
lI(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.U(null,null)
s.x=14
s.y=b
s.at=q
r=A.ap(a,s)
a.eC.set(q,r)
return r},
cI(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].at
return s},
lD(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].at}return s},
cJ(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.cI(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.U(null,null)
r.x=9
r.y=b
r.z=c
if(c.length>0)r.c=c[0]
r.at=p
q=A.ap(a,r)
a.eC.set(p,q)
return q},
ix(a,b,c){var s,r,q,p,o,n
if(b.x===10){s=b.y
r=b.z.concat(c)}else{r=c
s=b}q=s.at+(";<"+A.cI(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.U(null,null)
o.x=10
o.y=s
o.z=r
o.at=q
n=A.ap(a,o)
a.eC.set(q,n)
return n},
lJ(a,b,c){var s,r,q="+"+(b+"("+A.cI(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.U(null,null)
s.x=11
s.y=b
s.z=c
s.at=q
r=A.ap(a,s)
a.eC.set(q,r)
return r},
jF(a,b,c){var s,r,q,p,o,n=b.at,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.cI(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.cI(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.lD(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.U(null,null)
p.x=12
p.y=b
p.z=c
p.at=r
o=A.ap(a,p)
a.eC.set(r,o)
return o},
iy(a,b,c,d){var s,r=b.at+("<"+A.cI(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.lF(a,b,c,r,d)
a.eC.set(r,s)
return s},
lF(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.hO(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.x===1){r[p]=o;++q}}if(q>0){n=A.aJ(a,b,r,0)
m=A.cQ(a,c,r,0)
return A.iy(a,n,m,c!==m)}}l=new A.U(null,null)
l.x=13
l.y=b
l.z=c
l.at=d
return A.ap(a,l)},
jA(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
jC(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.lw(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.jB(a,r,l,k,!1)
else if(q===46)r=A.jB(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.aI(a.u,a.e,k.pop()))
break
case 94:k.push(A.lI(a.u,k.pop()))
break
case 35:k.push(A.cK(a.u,5,"#"))
break
case 64:k.push(A.cK(a.u,2,"@"))
break
case 126:k.push(A.cK(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.ly(a,k)
break
case 38:A.lx(a,k)
break
case 42:p=a.u
k.push(A.jH(p,A.aI(p,a.e,k.pop()),a.n))
break
case 63:p=a.u
k.push(A.iz(p,A.aI(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.jG(p,A.aI(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.lv(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.jD(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.lA(a.u,a.e,o)
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
return A.aI(a.u,a.e,m)},
lw(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
jB(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.x===10)o=o.y
n=A.lO(s,o.y)[p]
if(n==null)A.av('No "'+p+'" in "'+A.lg(o)+'"')
d.push(A.hN(s,o,n))}else d.push(p)
return m},
ly(a,b){var s,r=a.u,q=A.jz(a,b),p=b.pop()
if(typeof p=="string")b.push(A.cJ(r,p,q))
else{s=A.aI(r,a.e,p)
switch(s.x){case 12:b.push(A.iy(r,s,q,a.n))
break
default:b.push(A.ix(r,s,q))
break}}},
lv(a,b){var s,r,q,p,o,n=null,m=a.u,l=b.pop()
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
s=r}q=A.jz(a,b)
l=b.pop()
switch(l){case-3:l=b.pop()
if(s==null)s=m.sEA
if(r==null)r=m.sEA
p=A.aI(m,a.e,l)
o=new A.em()
o.a=q
o.b=s
o.c=r
b.push(A.jF(m,p,o))
return
case-4:b.push(A.lJ(m,b.pop(),q))
return
default:throw A.c(A.d_("Unexpected state under `()`: "+A.n(l)))}},
lx(a,b){var s=b.pop()
if(0===s){b.push(A.cK(a.u,1,"0&"))
return}if(1===s){b.push(A.cK(a.u,4,"1&"))
return}throw A.c(A.d_("Unexpected extended operation "+A.n(s)))},
jz(a,b){var s=b.splice(a.p)
A.jD(a.u,a.e,s)
a.p=b.pop()
return s},
aI(a,b,c){if(typeof c=="string")return A.cJ(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.lz(a,b,c)}else return c},
jD(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.aI(a,b,c[s])},
lA(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.aI(a,b,c[s])},
lz(a,b,c){var s,r,q=b.x
if(q===10){if(c===0)return b.y
s=b.z
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.y
q=b.x}else if(c===0)return b
if(q!==9)throw A.c(A.d_("Indexed base must be an interface type"))
s=b.z
if(c<=s.length)return s[c-1]
throw A.c(A.d_("Bad index "+c+" for "+b.j(0)))},
mN(a,b,c){var s,r=A.lh(b),q=r.get(c)
if(q!=null)return q
s=A.F(a,b,null,c,null)
r.set(c,s)
return s},
F(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(!A.au(d))if(!(d===t._))s=!1
else s=!0
else s=!0
if(s)return!0
r=b.x
if(r===4)return!0
if(A.au(b))return!1
if(b.x!==1)s=!1
else s=!0
if(s)return!0
q=r===14
if(q)if(A.F(a,c[b.y],c,d,e))return!0
p=d.x
s=b===t.P||b===t.T
if(s){if(p===8)return A.F(a,b,c,d.y,e)
return d===t.P||d===t.T||p===7||p===6}if(d===t.K){if(r===8)return A.F(a,b.y,c,d,e)
if(r===6)return A.F(a,b.y,c,d,e)
return r!==7}if(r===6)return A.F(a,b.y,c,d,e)
if(p===6){s=A.jj(a,d)
return A.F(a,b,c,s,e)}if(r===8){if(!A.F(a,b.y,c,d,e))return!1
return A.F(a,A.it(a,b),c,d,e)}if(r===7){s=A.F(a,t.P,c,d,e)
return s&&A.F(a,b.y,c,d,e)}if(p===8){if(A.F(a,b,c,d.y,e))return!0
return A.F(a,b,c,A.it(a,d),e)}if(p===7){s=A.F(a,b,c,t.P,e)
return s||A.F(a,b,c,d.y,e)}if(q)return!1
s=r!==12
if((!s||r===13)&&d===t.Z)return!0
o=r===11
if(o&&d===t.L)return!0
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
if(!A.F(a,j,c,i,e)||!A.F(a,i,e,j,c))return!1}return A.jV(a,b.y,c,d.y,e)}if(p===12){if(b===t.g)return!0
if(s)return!1
return A.jV(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return A.m8(a,b,c,d,e)}if(o&&p===11)return A.mc(a,b,c,d,e)
return!1},
jV(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!A.F(a3,a4.y,a5,a6.y,a7))return!1
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
if(!A.F(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.F(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.F(a3,k[h],a7,g,a5))return!1}f=s.c
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
if(!A.F(a3,e[a+2],a7,g,a5))return!1
break}}for(;b<d;){if(f[b+1])return!1
b+=3}return!0},
m8(a,b,c,d,e){var s,r,q,p,o,n,m,l=b.y,k=d.y
for(;l!==k;){s=a.tR[l]
if(s==null)return!1
if(typeof s=="string"){l=s
continue}r=s[k]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.hN(a,b,r[o])
return A.jJ(a,p,null,c,d.z,e)}n=b.z
m=d.z
return A.jJ(a,n,null,c,m,e)},
jJ(a,b,c,d,e,f){var s,r,q,p=b.length
for(s=0;s<p;++s){r=b[s]
q=e[s]
if(!A.F(a,r,d,q,f))return!1}return!0},
mc(a,b,c,d,e){var s,r=b.z,q=d.z,p=r.length
if(p!==q.length)return!1
if(b.y!==d.y)return!1
for(s=0;s<p;++s)if(!A.F(a,r[s],c,q[s],e))return!1
return!0},
cR(a){var s,r=a.x
if(!(a===t.P||a===t.T))if(!A.au(a))if(r!==7)if(!(r===6&&A.cR(a.y)))s=r===8&&A.cR(a.y)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
mO(a){var s
if(!A.au(a))if(!(a===t._))s=!1
else s=!0
else s=!0
return s},
au(a){var s=a.x
return s===2||s===3||s===4||s===5||a===t.X},
jI(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
hO(a){return a>0?new Array(a):v.typeUniverse.sEA},
U:function U(a,b){var _=this
_.a=a
_.b=b
_.w=_.r=_.e=_.d=_.c=null
_.x=0
_.at=_.as=_.Q=_.z=_.y=null},
em:function em(){this.c=this.b=this.a=null},
hM:function hM(a){this.a=a},
ej:function ej(){},
cH:function cH(a){this.a=a},
lo(){var s,r,q={}
if(self.scheduleImmediate!=null)return A.mw()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(A.bb(new A.ho(q),1)).observe(s,{childList:true})
return new A.hn(q,s,r)}else if(self.setImmediate!=null)return A.mx()
return A.my()},
lp(a){self.scheduleImmediate(A.bb(new A.hp(t.M.a(a)),0))},
lq(a){self.setImmediate(A.bb(new A.hq(t.M.a(a)),0))},
lr(a){t.M.a(a)
A.lB(0,a)},
lB(a,b){var s=new A.hK()
s.cp(a,b)
return s},
mh(a){return new A.e8(new A.D($.z,a.h("D<0>")),a.h("e8<0>"))},
lV(a,b){a.$2(0,null)
b.b=!0
return b.a},
nJ(a,b){A.lW(a,b)},
lU(a,b){var s,r,q=b.$ti
q.h("1/?").a(a)
s=a==null?q.c.a(a):a
if(!b.b)b.a.aC(s)
else{r=b.a
if(q.h("a0<1>").b(s))r.bh(s)
else r.aD(s)}},
lT(a,b){var s=A.aO(a),r=A.aL(a),q=b.b,p=b.a
if(q)p.Z(s,r)
else p.cu(s,r)},
lW(a,b){var s,r,q=new A.hP(b),p=new A.hQ(b)
if(a instanceof A.D)a.bu(q,p,t.z)
else{s=t.z
if(a instanceof A.D)a.aY(q,p,s)
else{r=new A.D($.z,t.c)
r.a=8
r.c=a
r.bu(q,p,s)}}},
mv(a){var s=function(b,c){return function(d,e){while(true)try{b(d,e)
break}catch(r){e=r
d=c}}}(a,1)
return $.z.aW(new A.hW(s),t.p,t.S,t.z)},
fc(a,b){var s=A.f6(a,"error",t.K)
return new A.bI(s,b==null?A.kF(a):b)},
kF(a){var s
if(t.R.b(a)){s=a.gap()
if(s!=null)return s}return B.z},
jy(a,b){var s,r,q
for(s=t.c;r=a.a,(r&4)!==0;)a=s.a(a.c)
if((r&24)!==0){q=b.aj()
b.ah(a)
A.bC(b,q)}else{q=t.F.a(b.c)
b.bt(a)
a.aM(q)}},
lu(a,b){var s,r,q,p={},o=p.a=a
for(s=t.c;r=o.a,(r&4)!==0;o=a){a=s.a(o.c)
p.a=a}if((r&24)===0){q=t.F.a(b.c)
b.bt(o)
p.a.aM(q)
return}if((r&16)===0&&b.c==null){b.ah(o)
return}b.a^=2
A.ba(null,null,b.b,t.M.a(new A.hw(p,b)))},
bC(a,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c={},b=c.a=a
for(s=t.t,r=t.F,q=t.bz;!0;){p={}
o=b.a
n=(o&16)===0
m=!n
if(a0==null){if(m&&(o&1)===0){l=s.a(b.c)
A.f5(l.a,l.b)}return}p.a=a0
k=a0.a
for(b=a0;k!=null;b=k,k=j){b.a=null
A.bC(c.a,b)
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
A.f5(i.a,i.b)
return}f=$.z
if(f!==g)$.z=g
else f=null
b=b.c
if((b&15)===8)new A.hD(p,c,m).$0()
else if(n){if((b&1)!==0)new A.hC(p,i).$0()}else if((b&2)!==0)new A.hB(c,p).$0()
if(f!=null)$.z=f
b=p.c
if(b instanceof A.D){o=p.a.$ti
o=o.h("a0<2>").b(b)||!o.z[1].b(b)}else o=!1
if(o){q.a(b)
e=p.a.b
if((b.a&24)!==0){d=r.a(e.c)
e.c=null
a0=e.ak(d)
e.a=b.a&30|e.a&1
e.c=b.c
c.a=b
continue}else A.jy(b,e)
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
mm(a,b){var s
if(t.C.b(a))return b.aW(a,t.z,t.K,t.l)
s=t.v
if(s.b(a))return s.a(a)
throw A.c(A.iR(a,"onError",u.c))},
mi(){var s,r
for(s=$.bG;s!=null;s=$.bG){$.cP=null
r=s.b
$.bG=r
if(r==null)$.cO=null
s.a.$0()}},
mp(){$.iF=!0
try{A.mi()}finally{$.cP=null
$.iF=!1
if($.bG!=null)$.iO().$1(A.k5())}},
k0(a){var s=new A.e9(a),r=$.cO
if(r==null){$.bG=$.cO=s
if(!$.iF)$.iO().$1(A.k5())}else $.cO=r.b=s},
mo(a){var s,r,q,p=$.bG
if(p==null){A.k0(a)
$.cP=$.cO
return}s=new A.e9(a)
r=$.cP
if(r==null){s.b=p
$.bG=$.cP=s}else{q=r.b
s.b=q
$.cP=r.b=s
if(q==null)$.cO=s}},
iM(a){var s,r=null,q=$.z
if(B.d===q){A.ba(r,r,B.d,a)
return}s=!1
if(s){A.ba(r,r,q,t.M.a(a))
return}A.ba(r,r,q,t.M.a(q.bw(a)))},
nk(a,b){A.f6(a,"stream",t.K)
return new A.eI(b.h("eI<0>"))},
jm(a){return new A.cm(null,null,a.h("cm<0>"))},
k_(a){return},
ls(a,b){if(b==null)b=A.mA()
if(t.k.b(b))return a.aW(b,t.z,t.K,t.l)
if(t.bo.b(b))return t.v.a(b)
throw A.c(A.aw("handleError callback must take either an Object (the error), or both an Object (the error) and a StackTrace.",null))},
mk(a,b){A.f5(a,b)},
mj(){},
f5(a,b){A.mo(new A.hV(a,b))},
jX(a,b,c,d,e){var s,r=$.z
if(r===c)return d.$0()
$.z=c
s=r
try{r=d.$0()
return r}finally{$.z=s}},
jY(a,b,c,d,e,f,g){var s,r=$.z
if(r===c)return d.$1(e)
$.z=c
s=r
try{r=d.$1(e)
return r}finally{$.z=s}},
mn(a,b,c,d,e,f,g,h,i){var s,r=$.z
if(r===c)return d.$2(e,f)
$.z=c
s=r
try{r=d.$2(e,f)
return r}finally{$.z=s}},
ba(a,b,c,d){t.M.a(d)
if(B.d!==c)d=c.bw(d)
A.k0(d)},
ho:function ho(a){this.a=a},
hn:function hn(a,b,c){this.a=a
this.b=b
this.c=c},
hp:function hp(a){this.a=a},
hq:function hq(a){this.a=a},
hK:function hK(){},
hL:function hL(a,b){this.a=a
this.b=b},
e8:function e8(a,b){this.a=a
this.b=!1
this.$ti=b},
hP:function hP(a){this.a=a},
hQ:function hQ(a){this.a=a},
hW:function hW(a){this.a=a},
bI:function bI(a,b){this.a=a
this.b=b},
aG:function aG(a,b){this.a=a
this.$ti=b},
a9:function a9(a,b,c,d,e){var _=this
_.ay=0
_.CW=_.ch=null
_.w=a
_.a=b
_.d=c
_.e=d
_.r=_.f=null
_.$ti=e},
cn:function cn(){},
cm:function cm(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.e=_.d=null
_.$ti=c},
b8:function b8(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
D:function D(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
ht:function ht(a,b){this.a=a
this.b=b},
hA:function hA(a,b){this.a=a
this.b=b},
hx:function hx(a){this.a=a},
hy:function hy(a){this.a=a},
hz:function hz(a,b,c){this.a=a
this.b=b
this.c=c},
hw:function hw(a,b){this.a=a
this.b=b},
hv:function hv(a,b){this.a=a
this.b=b},
hu:function hu(a,b,c){this.a=a
this.b=b
this.c=c},
hD:function hD(a,b,c){this.a=a
this.b=b
this.c=c},
hE:function hE(a){this.a=a},
hC:function hC(a,b){this.a=a
this.b=b},
hB:function hB(a,b){this.a=a
this.b=b},
e9:function e9(a){this.a=a
this.b=null},
aD:function aD(){},
h7:function h7(a,b){this.a=a
this.b=b},
h8:function h8(a,b){this.a=a
this.b=b},
co:function co(){},
cp:function cp(){},
bA:function bA(){},
bE:function bE(){},
cr:function cr(){},
cq:function cq(a,b){this.b=a
this.a=null
this.$ti=b},
cB:function cB(a){var _=this
_.a=0
_.c=_.b=null
_.$ti=a},
hG:function hG(a,b){this.a=a
this.b=b},
bB:function bB(a,b){var _=this
_.a=1
_.b=a
_.c=null
_.$ti=b},
eI:function eI(a){this.$ti=a},
cM:function cM(){},
hV:function hV(a,b){this.a=a
this.b=b},
eC:function eC(){},
hI:function hI(a,b){this.a=a
this.b=b},
hJ:function hJ(a,b,c){this.a=a
this.b=b
this.c=c},
j8(a,b,c){return b.h("@<0>").u(c).h("j7<1,2>").a(A.mE(a,new A.P(b.h("@<0>").u(c).h("P<1,2>"))))},
l1(a,b){return new A.P(a.h("@<0>").u(b).h("P<1,2>"))},
fG(a){var s,r={}
if(A.iK(a))return"{...}"
s=new A.cg("")
try{B.a.n($.R,a)
s.a+="{"
r.a=!0
J.id(a,new A.fH(r,s))
s.a+="}"}finally{if(0>=$.R.length)return A.d($.R,-1)
$.R.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
e:function e(){},
x:function x(){},
fH:function fH(a,b){this.a=a
this.b=b},
cL:function cL(){},
bq:function bq(){},
ck:function ck(){},
bF:function bF(){},
iZ(a,b){return A.l5(a,b,null)},
iJ(a,b){var s=A.ld(a,b)
if(s!=null)return s
throw A.c(new A.fs(a))},
kT(a,b){a=A.c(a)
if(a==null)a=t.K.a(a)
a.stack=b.j(0)
throw a
throw A.c("unreachable")},
j9(a,b,c,d){var s,r=c?J.j5(a,d):J.l0(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
T(a,b){var s,r=A.q([],b.h("G<0>"))
for(s=J.cT(a);s.E();)B.a.n(r,b.a(s.gF(s)))
return r},
fE(a,b){var s=A.l2(a,b)
return s},
l2(a,b){var s,r
if(Array.isArray(a))return A.q(a.slice(0),b.h("G<0>"))
s=A.q([],b.h("G<0>"))
for(r=J.cT(a);r.E();)B.a.n(s,r.gF(r))
return s},
jn(a,b,c){var s=J.cT(b)
if(!s.E())return a
if(c.length===0){do a+=A.n(s.gF(s))
while(s.E())}else{a+=A.n(s.gF(s))
for(;s.E();)a=a+c+A.n(s.gF(s))}return a},
jb(a,b){return new A.dF(a,b.gd5(),b.gd7(),b.gd6())},
kR(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
kS(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
d8(a){if(a>=10)return""+a
return"0"+a},
bk(a){if(typeof a=="number"||A.cN(a)||a==null)return J.cU(a)
if(typeof a=="string")return JSON.stringify(a)
return A.le(a)},
kU(a,b){A.f6(a,"error",t.K)
A.f6(b,"stackTrace",t.l)
A.kT(a,b)},
d_(a){return new A.cZ(a)},
aw(a,b){return new A.ai(!1,null,b,a)},
iR(a,b,c){return new A.ai(!0,a,b,c)},
ji(a,b){return new A.cc(null,null,!0,a,b,"Value not in range")},
dL(a,b,c,d,e){return new A.cc(b,c,!0,a,d,"Invalid value")},
lf(a,b,c){if(0>a||a>c)throw A.c(A.dL(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.c(A.dL(b,a,c,"end",null))
return b}return c},
H(a,b,c,d){return new A.dk(b,!0,a,d,"Index out of range")},
b7(a){return new A.e4(a)},
js(a){return new A.e2(a)},
J(a){return new A.b4(a)},
az(a){return new A.d7(a)},
da(a){return new A.hs(a)},
l_(a,b,c){var s,r
if(A.iK(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.q([],t.s)
B.a.n($.R,a)
try{A.mg(a,s)}finally{if(0>=$.R.length)return A.d($.R,-1)
$.R.pop()}r=A.jn(b,t.bi.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
j4(a,b,c){var s,r
if(A.iK(a))return b+"..."+c
s=new A.cg(b)
B.a.n($.R,a)
try{r=s
r.a=A.jn(r.a,a,", ")}finally{if(0>=$.R.length)return A.d($.R,-1)
$.R.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
mg(a,b){var s,r,q,p,o,n,m,l=a.gW(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.E())return
s=A.n(l.gF(l))
B.a.n(b,s)
k+=s.length+2;++j}if(!l.E()){if(j<=5)return
if(0>=b.length)return A.d(b,-1)
r=b.pop()
if(0>=b.length)return A.d(b,-1)
q=b.pop()}else{p=l.gF(l);++j
if(!l.E()){if(j<=4){B.a.n(b,A.n(p))
return}r=A.n(p)
if(0>=b.length)return A.d(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gF(l);++j
for(;l.E();p=o,o=n){n=l.gF(l);++j
if(j>100){while(!0){if(!(k>75&&j>3))break
if(0>=b.length)return A.d(b,-1)
k-=b.pop().length+2;--j}B.a.n(b,"...")
return}}q=A.n(p)
r=A.n(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
while(!0){if(!(k>80&&b.length>3))break
if(0>=b.length)return A.d(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)B.a.n(b,m)
B.a.n(b,q)
B.a.n(b,r)},
jc(a,b,c,d){var s=B.c.gp(a)
b=B.c.gp(b)
c=B.c.gp(c)
d=B.c.gp(d)
d=A.jo(A.ch(A.ch(A.ch(A.ch($.kv(),s),b),c),d))
return d},
fP:function fP(a,b){this.a=a
this.b=b},
bN:function bN(a,b){this.a=a
this.b=b},
A:function A(){},
cZ:function cZ(a){this.a=a},
an:function an(){},
ai:function ai(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cc:function cc(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
dk:function dk(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
dF:function dF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
e4:function e4(a){this.a=a},
e2:function e2(a){this.a=a},
b4:function b4(a){this.a=a},
d7:function d7(a){this.a=a},
cf:function cf(){},
hs:function hs(a){this.a=a},
fs:function fs(a){this.a=a},
i:function i(){},
I:function I(){},
u:function u(){},
eL:function eL(){},
cg:function cg(a){this.a=a},
mD(){var s=document
s.toString
return s},
ih(a,b){var s=document.createElement("canvas")
s.toString
if(b!=null)B.f.sS(s,b)
if(a!=null)B.f.sP(s,a)
return s},
lt(a,b){if(b.parentNode===a){a.removeChild(b).toString
return!0}return!1},
ij(a,b){var s,r,q,p,o=a===b
if(!o){s=b.tagName
s.toString
r=s==="HTML"}else r=!0
if(a==null||o){if(r)return new A.bu(0,0,t.w)
throw A.c(A.aw("Specified element is not a transitive offset parent of this element.",null))}q=A.ij(a.offsetParent,b)
s=a.offsetLeft
s.toString
s=B.c.Y(s)
p=a.offsetTop
p.toString
return new A.bu(q.a+s,q.b+B.c.Y(p),t.w)},
kZ(a){var s=new IntersectionObserver(A.bb(a,2))
s.toString
return s},
cv(a,b,c,d,e){var s=A.k2(new A.hr(c),t.A)
if(s!=null&&!0)J.ky(a,b,s,!1)
return new A.cu(a,b,s,!1,e.h("cu<0>"))},
k2(a,b){var s=$.z
if(s===B.d)return a
return s.cQ(a,b)},
k:function k(){},
fb:function fb(){},
cV:function cV(){},
cX:function cX(){},
aQ:function aQ(){},
aR:function aR(){},
aS:function aS(){},
ac:function ac(){},
fj:function fj(){},
y:function y(){},
bM:function bM(){},
fk:function fk(){},
a_:function a_(){},
aj:function aj(){},
fl:function fl(){},
fm:function fm(){},
fn:function fn(){},
aT:function aT(){},
bi:function bi(){},
fo:function fo(){},
bP:function bP(){},
bQ:function bQ(){},
d9:function d9(){},
fp:function fp(){},
h:function h(){},
f:function f(){},
b:function b(){},
S:function S(){},
db:function db(){},
dc:function dc(){},
de:function de(){},
a1:function a1(){},
fz:function fz(){},
aV:function aV(){},
bU:function bU(){},
dj:function dj(){},
aW:function aW(){},
fB:function fB(){},
fF:function fF(){},
b1:function b1(){},
fK:function fK(){},
du:function du(){},
fL:function fL(a){this.a=a},
dv:function dv(){},
fM:function fM(a){this.a=a},
a2:function a2(){},
dw:function dw(){},
o:function o(){},
c8:function c8(){},
a3:function a3(){},
dJ:function dJ(){},
dN:function dN(){},
h_:function h_(a){this.a=a},
dP:function dP(){},
V:function V(){},
dR:function dR(){},
a5:function a5(){},
dS:function dS(){},
a6:function a6(){},
dU:function dU(){},
h6:function h6(a){this.a=a},
Q:function Q(){},
W:function W(){},
N:function N(){},
dX:function dX(){},
dY:function dY(){},
hb:function hb(){},
a8:function a8(){},
e_:function e_(){},
hc:function hc(){},
hh:function hh(){},
e5:function e5(){},
e6:function e6(){},
aF:function aF(){},
ah:function ah(){},
eb:function eb(){},
cs:function cs(){},
en:function en(){},
cw:function cw(){},
eG:function eG(){},
eM:function eM(){},
ik:function ik(a,b){this.a=a
this.$ti=b},
ct:function ct(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
ei:function ei(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
cu:function cu(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
hr:function hr(a){this.a=a},
m:function m(){},
dd:function dd(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
ec:function ec(){},
ee:function ee(){},
ef:function ef(){},
eg:function eg(){},
eh:function eh(){},
ek:function ek(){},
el:function el(){},
eo:function eo(){},
ep:function ep(){},
es:function es(){},
et:function et(){},
eu:function eu(){},
ev:function ev(){},
ew:function ew(){},
ex:function ex(){},
eA:function eA(){},
eB:function eB(){},
eD:function eD(){},
cC:function cC(){},
cD:function cD(){},
eE:function eE(){},
eF:function eF(){},
eH:function eH(){},
eN:function eN(){},
eO:function eO(){},
cF:function cF(){},
cG:function cG(){},
eQ:function eQ(){},
eR:function eR(){},
eV:function eV(){},
eW:function eW(){},
eX:function eX(){},
eY:function eY(){},
eZ:function eZ(){},
f_:function f_(){},
f0:function f0(){},
f1:function f1(){},
f2:function f2(){},
f3:function f3(){},
jN(a){var s,r,q,p
if(a==null)return a
if(typeof a=="string"||typeof a=="number"||A.cN(a))return a
s=Object.getPrototypeOf(a)
r=s===Object.prototype
r.toString
if(!r){r=s===null
r.toString}else r=!0
if(r)return A.aK(a)
r=Array.isArray(a)
r.toString
if(r){q=[]
p=0
while(!0){r=a.length
r.toString
if(!(p<r))break
q.push(A.jN(a[p]));++p}return q}return a},
aK(a){var s,r,q,p,o,n
if(a==null)return null
s=A.l1(t.N,t.z)
r=Object.getOwnPropertyNames(a)
for(q=r.length,p=0;p<r.length;r.length===q||(0,A.aN)(r),++p){o=r[p]
n=o
n.toString
s.k(0,n,A.jN(a[o]))}return s},
jM(a){var s
if(a==null)return a
if(typeof a=="string"||typeof a=="number"||A.cN(a))return a
if(t.bC.b(a))return A.k7(a)
if(t.j.b(a)){s=[]
J.id(a,new A.hR(s))
a=s}return a},
k7(a){var s={}
J.id(a,new A.i1(s))
return s},
hR:function hR(a){this.a=a},
i1:function i1(a){this.a=a},
bZ:function bZ(){},
lX(a,b,c,d){var s,r,q
A.iA(b)
t.j.a(d)
if(b){s=[c]
B.a.a_(s,d)
d=s}r=t.z
q=A.T(J.kD(d,A.mP(),r),r)
return A.jP(A.iZ(t.Z.a(a),q))},
iC(a,b,c){var s
try{if(Object.isExtensible(a)&&!Object.prototype.hasOwnProperty.call(a,b)){Object.defineProperty(a,b,{value:c})
return!0}}catch(s){}return!1},
jU(a,b){if(Object.prototype.hasOwnProperty.call(a,b))return a[b]
return null},
jP(a){if(a==null||typeof a=="string"||typeof a=="number"||A.cN(a))return a
if(a instanceof A.al)return a.a
if(A.kb(a))return a
if(t.Q.b(a))return a
if(a instanceof A.bN)return A.b2(a)
if(t.Z.b(a))return A.jT(a,"$dart_jsFunction",new A.hS())
return A.jT(a,"_$dart_jsObject",new A.hT($.iQ()))},
jT(a,b,c){var s=A.jU(a,b)
if(s==null){s=c.$1(a)
A.iC(a,b,s)}return s},
jO(a){var s,r
if(a==null||typeof a=="string"||typeof a=="number"||typeof a=="boolean")return a
else if(a instanceof Object&&A.kb(a))return a
else if(a instanceof Object&&t.Q.b(a))return a
else if(a instanceof Date){s=A.X(a.getTime())
if(Math.abs(s)<=864e13)r=!1
else r=!0
if(r)A.av(A.aw("DateTime is outside valid range: "+s,null))
A.f6(!1,"isUtc",t.y)
return new A.bN(s,!1)}else if(a.constructor===$.iQ())return a.o
else return A.k1(a)},
k1(a){if(typeof a=="function")return A.iD(a,$.f9(),new A.hX())
if(a instanceof Array)return A.iD(a,$.iP(),new A.hY())
return A.iD(a,$.iP(),new A.hZ())},
iD(a,b,c){var s=A.jU(a,b)
if(s==null||!(a instanceof Object)){s=c.$1(a)
A.iC(a,b,s)}return s},
hS:function hS(){},
hT:function hT(a){this.a=a},
hX:function hX(){},
hY:function hY(){},
hZ:function hZ(){},
al:function al(a){this.a=a},
bY:function bY(a){this.a=a},
aX:function aX(a,b){this.a=a
this.$ti=b},
bD:function bD(){},
bu:function bu(a,b,c){this.a=a
this.b=b
this.$ti=c},
ad:function ad(){},
dq:function dq(){},
ae:function ae(){},
dG:function dG(){},
fS:function fS(){},
dV:function dV(){},
ag:function ag(){},
e0:function e0(){},
eq:function eq(){},
er:function er(){},
ey:function ey(){},
ez:function ez(){},
eJ:function eJ(){},
eK:function eK(){},
eS:function eS(){},
eT:function eT(){},
fd:function fd(){},
d0:function d0(){},
fe:function fe(a){this.a=a},
d1:function d1(){},
ax:function ax(){},
dH:function dH(){},
ea:function ea(){},
d3:function d3(){},
bh:function bh(){},
dg:function dg(){},
dK:function dK(){},
dM:function dM(){},
cd:function cd(){},
bw:function bw(){},
dQ:function dQ(){},
dZ:function dZ(){},
e1:function e1(){},
dh:function dh(a){var _=this
_.a=a
_.f=_.e=_.d=_.c=_.b=0
_.x=_.w=_.r=null},
ft:function ft(){},
fh:function fh(){},
h5:function h5(a,b,c,d,e,f,g,h,i){var _=this
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
iY(a){return new A.bg(A.iJ(B.h.aq(a,1,3),16)/256,A.iJ(B.h.aq(a,3,5),16)/256,A.iJ(B.h.aq(a,5,7),16)/256,1)},
bg:function bg(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
b0(){return new A.bs(A.q([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t.n))},
jd(a,b){return new A.a4(a,b)},
je(){return new A.a4(0,0)},
is(a,b,c){return new A.aB(a,b,c)},
jf(){return new A.aB(0,0,0)},
jh(a,b,c){var s,r,q=new A.fW(),p=a*0.5,o=b*0.5,n=c*0.5,m=Math.cos(p),l=Math.sin(p),k=Math.cos(o),j=Math.sin(o),i=Math.cos(n),h=Math.sin(n),g=i*j,f=h*k
q.a=g*m+f*l
s=i*k
r=h*j
q.b=s*l-r*m
q.c=f*m-g*l
q.d=s*m+r*l
return q},
b6(){return new A.b5(A.q([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t.n))},
jq(a){return new A.b5(A.q([a,0,0,0,0,a,0,0,0,0,a,0,0,0,0,1],t.n))},
jp(a){var s,r,q,p,o,n,m,l,k=a.a,j=k.length
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
return new A.b5(A.q([s,r,q,0,p,o,n,0,m,l,k[8],0,0,0,0,1],t.n))},
jt(a,b,c){return new A.bz(a,b,c)},
ju(){return new A.bz(0,0,0)},
fu:function fu(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
br:function br(a){this.a=a},
bs:function bs(a){this.a=a},
a4:function a4(a,b){this.a=a
this.b=b},
aB:function aB(a,b,c){this.a=a
this.b=b
this.c=c},
cb:function cb(a){this.b=a},
fW:function fW(){var _=this
_.d=_.c=_.b=_.a=0},
ci:function ci(a){this.a=a},
b5:function b5(a){this.a=a},
cl:function cl(a,b){this.a=a
this.b=b},
bz:function bz(a,b,c){this.a=a
this.b=b
this.c=c},
fR:function fR(){},
ig(){return new A.d2(1,0)},
iS(){return new A.d2(770,771)},
ii(){return new A.fi(1)},
kQ(){return new A.aA(1029)},
im(a){return new A.fr(a)},
hj(a){return new A.hi(a)},
ja(a){return new A.fI(a)},
dt(a){return new A.fJ(a)},
h1(a){return new A.h0(a)},
jv(){return new A.aE(A.q([new A.Z(0,3,12,0)],t.U))},
iv(){return new A.aE(A.q([new A.Z(0,2,8,0)],t.U))},
ln(){var s,r,q,p=$.iw
if(p==null)try{p=A.ih(null,null)
s=A.j8(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],t.N,t.z)
r=B.f.ao(p,"webgl",s)
if(r==null)r=B.f.ao(p,"experimental-webgl",s)
t.c4.a(r)
$.iw=!0
p=!0}catch(q){$.iw=!1
p=!1}p.toString
return p},
lm(a,b){var s,r,q,p,o,n,m=b.getSupportedExtensions()
if(m==null)return
s=A.q([],t.s)
for(r=a.f,q=r.length,p=J.i3(m),o=0;o<r.length;r.length===q||(0,A.aN)(r),++o){n=r[o]
if(!p.bz(m,n))B.a.n(s,n)}if(s.length!==0)throw A.c(A.da("Invalid webgl extensions\n"+A.n(s)))},
Z:function Z(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
d2:function d2(a,b){this.a=a
this.b=b},
fi:function fi(a){this.f=a},
aA:function aA(a){this.a=a},
fA:function fA(a,b,c){this.a=a
this.b=b
this.c=c},
hl:function hl(a){this.b=a},
fg:function fg(){},
fq:function fq(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
bO:function bO(){},
df:function df(){},
be:function be(){var _=this
_.b=_.a=0
_.f=_.e=_.d=_.c=null},
ds:function ds(){},
bv:function bv(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null},
b3:function b3(a,b){var _=this
_.a=a
_.b=b
_.f=_.e=_.d=_.c=null},
ha:function ha(){this.f=this.e=this.d=null},
hg:function hg(){},
fr:function fr(a){this.a=a
this.c=this.b=null},
hi:function hi(a){this.a=a
this.c=this.b=null},
fI:function fI(a){this.a=a
this.c=this.b=null},
fJ:function fJ(a){this.a=a
this.c=this.b=null},
h0:function h0(a){this.a=a
this.c=this.b=null},
aE:function aE(a){this.a=a},
fZ:function fZ(a,b,c){this.b=a
this.c=b
this.f=c},
hm:function hm(){this.a=null},
fN:function fN(a,b,c,d,e,f){var _=this
_.c=a
_.d=b
_.e=c
_.f=d
_.r=e
_.a=f},
eP:function eP(){},
h9:function h9(a,b,c){this.f=a
this.c=b
this.a=c},
hk:function hk(a,b,c,d,e){var _=this
_.c=a
_.d=b
_.e=c
_.f=d
_.a=e},
e7:function e7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=!1
_.f=null},
cW:function cW(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
aP:function aP(){},
bj:function bj(){},
fv:function fv(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=0},
j1(){return new A.di(A.T(A.q([new A.Z(0,3,20,0),new A.Z(1,2,20,12)],t.U),t.J))},
fw(a,b,c,d){var s,r=new A.a4(0.5*(c.a+d.a),0.5*(c.b+d.b))
if(a>0){s=a-1
A.fw(s,r,b,c)
A.fw(s,r,d,b)
return}s=r.M(0,b)
s=new A.cl(s.a,s.b)
s.U()
A.io(b,s)
s=r.M(0,c)
s=new A.cl(s.a,s.b)
s.U()
A.io(c,s)
s=r.M(0,d)
s=new A.cl(s.a,s.b)
s.U()
A.io(d,s)},
io(a,b){var s,r,q,p,o,n,m,l,k=$.ki(),j=a.a,i=$.j0,h=j*i,g=a.b
i=g*i
s=B.c.bC(h)
r=s+1
q=B.c.bC(i)
p=q+1
o=h-s
n=k.ag(s,q,h,i)
m=n+(k.ag(r,q,h,i)-n)*o
n=k.ag(s,p,h,i)
l=Math.max((m+(n+(k.ag(r,p,h,i)-n)*o-m)*(i-q))*$.j_,0)
B.a.n($.ip,$.fx)
i=t.n
B.a.a_($.fy,A.q([j,l,g],i))
g=b.a
g===$&&A.v()
j=b.b
j===$&&A.v()
B.a.a_($.fy,A.q([g,j],i))
$.fx=$.fx+1},
di:function di(a){this.a=a},
bT:function bT(){},
c1:function c1(){},
kG(){var s=$.ku(),r=t.Z
s.k(0,"TargetPositionSetting",A.i_(A.mT(),r))
s.k(0,"ComputeStatus",A.i_(A.mS(),r))
s.k(0,"GetFPS",A.i_(new A.ff(),r))
s.k(0,"Kill",A.i_($.cS().gc_(),r))},
lj(a,b){var s,r,q,p,o
A.iB(a)
A.iB(b)
s=$.cS()
r=s.w.c
q=r.a
p=r.b
o=new A.aB(q,p,r.c)
o.a=q+a*24
o.b=p+b*10
s=s.r.Q
s.x.ar(o)
s.y=1-B.c.cR(0.6,0,1)},
kP(){var s=$.cS().x
if(s instanceof A.bj)return-1
if(s instanceof A.c1)return 1
return 0},
mR(){var s,r,q,p,o,n,m="webglcontextlost"
A.kG()
s=$.cS()
r=s.b
if(!A.ln())A.av(A.da("WebGL is not available"))
q=r.a
p=q.style
p.position="absolute"
p.width="100%"
p.height="100%"
p.top="0"
p.left="0"
p=A.kZ(r.gca())
r.f=p
p.observe(q)
p=s.c
o=window
o.toString
p.x=B.j.bI(o,p.gbc())
o=t.d8
p.sbr(o.a(s.gcg()))
p.sbs(o.a(s.gcj()))
o=s.a
o.children.toString
o.appendChild(q).toString
o=s.d
p=window
p.toString
B.a.n(o,A.cv(p,"beforeunload",t.bF.a(s.gc4()),!1,t.d))
p=window
p.toString
B.a.n(o,A.cv(p,"resize",t.cx.a(s.gce()),!1,t.A))
p=window
p.toString
B.a.n(o,A.cv(p,"deviceorientation",t.cu.a(s.gc6()),!1,t.bK))
p=t.cI
n=p.h("~(1)?")
p=p.c
B.a.n(o,A.cv(q,m,n.a(s.gcl()),!1,p))
B.a.n(o,A.cv(q,m,n.a(s.gcn()),!1,p))
p=r.c
B.a.n(o,new A.aG(p,A.E(p).h("aG<1>")).bF(s.gc8()))
r=r.d
B.a.n(o,new A.aG(r,A.E(r).h("aG<1>")).bF(s.gcc()))
s.af()
s.a5(new A.c1())},
ff:function ff(){},
fO:function fO(a,b,c,d,e){var _=this
_.c=a
_.d=b
_.e=c
_.f=d
_.a=e},
fV:function fV(a,b){this.a=a
this.b=b
this.c=0},
fX:function fX(a,b,c){this.a=a
this.b=b
this.c=c},
fY:function fY(a,b,c,d){var _=this
_.c=a
_.d=b
_.e=c
_.a=d},
h2:function h2(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0){var _=this
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
_.fr=_.dy=_.dx=_.db=null},
h4:function h4(a,b,c,d,e,f,g,h,i,j){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.Q=e
_.as=f
_.at=g
_.CW=h
_.cx=i
_.cy=j},
ce:function ce(){},
kb(a){return t.V.b(a)||t.A.b(a)||t.cF.b(a)||t.I.b(a)||t.a1.b(a)||t.cg.b(a)||t.bj.b(a)},
mX(a){A.kf(new A.c_("Field '"+a+"' has been assigned during initialization."),new Error())},
v(){A.kf(new A.c_("Field '' has not been initialized."),new Error())},
lZ(a){var s,r=a.$dart_jsFunction
if(r!=null)return r
s=function(b,c){return function(){return b(c,Array.prototype.slice.apply(arguments))}}(A.lY,a)
s[$.f9()]=a
a.$dart_jsFunction=s
return s},
lY(a,b){t.j.a(b)
return A.iZ(t.Z.a(a),b)},
i_(a,b){if(typeof a=="function")return a
else return b.a(A.lZ(a))}},B={}
var w=[A,J,B]
var $={}
A.iq.prototype={}
J.bl.prototype={
J(a,b){return a===b},
gp(a){return A.ca(a)},
j(a){return"Instance of '"+A.fU(a)+"'"},
bH(a,b){throw A.c(A.jb(a,t.B.a(b)))},
gB(a){return A.bc(A.iE(this))}}
J.dl.prototype={
j(a){return String(a)},
gp(a){return a?519018:218159},
gB(a){return A.bc(t.y)},
$iw:1,
$ii0:1}
J.bW.prototype={
J(a,b){return null==b},
j(a){return"null"},
gp(a){return 0},
$iw:1,
$iI:1}
J.a.prototype={}
J.aY.prototype={
gp(a){return 0},
j(a){return String(a)}}
J.dI.prototype={}
J.cj.prototype={}
J.ak.prototype={
j(a){var s=a[$.f9()]
if(s==null)return this.bT(a)
return"JavaScript function for "+J.cU(s)},
$iaU:1}
J.bn.prototype={
gp(a){return 0},
j(a){return String(a)}}
J.bo.prototype={
gp(a){return 0},
j(a){return String(a)}}
J.G.prototype={
n(a,b){A.aq(a).c.a(b)
if(!!a.fixed$length)A.av(A.b7("add"))
a.push(b)},
a_(a,b){var s
A.aq(a).h("i<1>").a(b)
if(!!a.fixed$length)A.av(A.b7("addAll"))
if(Array.isArray(b)){this.cq(a,b)
return}for(s=J.cT(b);s.E();)a.push(s.gF(s))},
cq(a,b){var s,r
t.b.a(b)
s=b.length
if(s===0)return
if(a===b)throw A.c(A.az(a))
for(r=0;r<s;++r)a.push(b[r])},
aR(a){if(!!a.fixed$length)A.av(A.b7("clear"))
a.length=0},
v(a,b){var s,r
A.aq(a).h("~(1)").a(b)
s=a.length
for(r=0;r<s;++r){b.$1(a[r])
if(a.length!==s)throw A.c(A.az(a))}},
bG(a,b,c){var s=A.aq(a)
return new A.b_(a,s.u(c).h("1(2)").a(b),s.h("@<1>").u(c).h("b_<1,2>"))},
cX(a,b,c,d){var s,r,q
d.a(b)
A.aq(a).u(d).h("1(1,2)").a(c)
s=a.length
for(r=b,q=0;q<s;++q){r=c.$2(r,a[q])
if(a.length!==s)throw A.c(A.az(a))}return r},
q(a,b){if(!(b<a.length))return A.d(a,b)
return a[b]},
gt(a){if(a.length>0)return a[0]
throw A.c(A.j3())},
bz(a,b){var s
for(s=0;s<a.length;++s)if(J.ic(a[s],b))return!0
return!1},
j(a){return A.j4(a,"[","]")},
gW(a){return new J.cY(a,a.length,A.aq(a).h("cY<1>"))},
gp(a){return A.ca(a)},
gi(a){return a.length},
k(a,b,c){var s
A.aq(a).c.a(c)
if(!!a.immutable$list)A.av(A.b7("indexed set"))
s=a.length
if(b>=s)throw A.c(A.iH(a,b))
a[b]=c},
ac(a,b){var s=A.aq(a)
s.h("j<1>").a(b)
s=A.fE(a,s.c)
this.a_(s,b)
return s},
$ii:1,
$ij:1}
J.fC.prototype={}
J.cY.prototype={
gF(a){var s=this.d
return s==null?this.$ti.c.a(s):s},
E(){var s,r=this,q=r.a,p=q.length
if(r.b!==p){q=A.aN(q)
throw A.c(q)}s=r.c
if(s>=p){r.sbk(null)
return!1}r.sbk(q[s]);++r.c
return!0},
sbk(a){this.d=this.$ti.h("1?").a(a)}}
J.bX.prototype={
aS(a,b){var s
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=B.e.gaU(b)
if(this.gaU(a)===s)return 0
if(this.gaU(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gaU(a){return a===0?1/a<0:a<0},
bC(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw A.c(A.b7(""+a+".floor()"))},
Y(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.c(A.b7(""+a+".round()"))},
cR(a,b,c){if(B.e.aS(b,c)>0)throw A.c(A.k4(b))
if(this.aS(a,b)<0)return b
if(this.aS(a,c)>0)return c
return a},
j(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gp(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
aZ(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
aO(a,b){var s
if(a>0)s=this.cL(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
cL(a,b){return b>31?0:a>>>b},
gB(a){return A.bc(t.H)},
$it:1,
$iC:1}
J.bV.prototype={
gB(a){return A.bc(t.S)},
$iw:1,
$il:1}
J.dn.prototype={
gB(a){return A.bc(t.i)},
$iw:1}
J.bm.prototype={
ac(a,b){return a+b},
aq(a,b,c){return a.substring(b,A.lf(b,c,a.length))},
j(a){return a},
gp(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gB(a){return A.bc(t.N)},
gi(a){return a.length},
$iw:1,
$ip:1}
A.c_.prototype={
j(a){return"LateInitializationError: "+this.a}}
A.ia.prototype={
$0(){var s=new A.D($.z,t.D)
s.aC(null)
return s},
$S:10}
A.h3.prototype={}
A.bR.prototype={}
A.aZ.prototype={
gW(a){var s=this
return new A.bp(s,s.gi(s),s.$ti.h("bp<aZ.E>"))}}
A.bp.prototype={
gF(a){var s=this.d
return s==null?this.$ti.c.a(s):s},
E(){var s,r=this,q=r.a,p=J.i3(q),o=p.gi(q)
if(r.b!==o)throw A.c(A.az(q))
s=r.c
if(s>=o){r.sbe(null)
return!1}r.sbe(p.q(q,s));++r.c
return!0},
sbe(a){this.d=this.$ti.h("1?").a(a)}}
A.b_.prototype={
gi(a){return J.fa(this.a)},
q(a,b){return this.b.$1(J.kz(this.a,b))}}
A.L.prototype={}
A.bx.prototype={
gp(a){var s=this._hashCode
if(s!=null)return s
s=664597*B.h.gp(this.a)&536870911
this._hashCode=s
return s},
j(a){return'Symbol("'+this.a+'")'},
J(a,b){if(b==null)return!1
return b instanceof A.bx&&this.a===b.a},
$iby:1}
A.bK.prototype={}
A.bJ.prototype={
j(a){return A.fG(this)},
$iK:1}
A.bL.prototype={
gi(a){return this.b.length},
v(a,b){var s,r,q,p,o=this
o.$ti.h("~(1,2)").a(b)
s=o.$keys
if(s==null){s=Object.keys(o.a)
o.$keys=s}s=s
r=o.b
for(q=s.length,p=0;p<q;++p)b.$2(s[p],r[p])}}
A.dm.prototype={
gd5(){var s=this.a
return s},
gd7(){var s,r,q,p,o=this
if(o.c===1)return B.n
s=o.d
r=s.length-o.e.length-o.f
if(r===0)return B.n
q=[]
for(p=0;p<r;++p){if(!(p<s.length))return A.d(s,p)
q.push(s[p])}q.fixed$length=Array
q.immutable$list=Array
return q},
gd6(){var s,r,q,p,o,n,m,l,k=this
if(k.c!==0)return B.o
s=k.e
r=s.length
q=k.d
p=q.length-r-k.f
if(r===0)return B.o
o=new A.P(t.bV)
for(n=0;n<r;++n){if(!(n<s.length))return A.d(s,n)
m=s[n]
l=p+n
if(!(l>=0&&l<q.length))return A.d(q,l)
o.k(0,new A.bx(m),q[l])}return new A.bK(o,t.e)},
$ij2:1}
A.fT.prototype={
$2(a,b){var s
A.Y(a)
s=this.a
s.b=s.b+"$"+a
B.a.n(this.b,a)
B.a.n(this.c,b);++s.a},
$S:2}
A.hd.prototype={
K(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
A.c9.prototype={
j(a){return"Null check operator used on a null value"}}
A.dp.prototype={
j(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.e3.prototype={
j(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.fQ.prototype={
j(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.bS.prototype={}
A.cE.prototype={
j(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$ia7:1}
A.ay.prototype={
j(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.kg(r==null?"unknown":r)+"'"},
$iaU:1,
gdc(){return this},
$C:"$1",
$R:1,
$D:null}
A.d5.prototype={$C:"$0",$R:0}
A.d6.prototype={$C:"$2",$R:2}
A.dW.prototype={}
A.dT.prototype={
j(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.kg(s)+"'"}}
A.bf.prototype={
J(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.bf))return!1
return this.$_target===b.$_target&&this.a===b.a},
gp(a){return(A.kc(this.a)^A.ca(this.$_target))>>>0},
j(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.fU(this.a)+"'")}}
A.ed.prototype={
j(a){return"Reading static variable '"+this.a+"' during its initialization"}}
A.dO.prototype={
j(a){return"RuntimeError: "+this.a}}
A.hH.prototype={}
A.P.prototype={
gi(a){return this.a},
gX(a){return new A.c0(this,A.E(this).h("c0<1>"))},
cS(a,b){var s=this.b
if(s==null)return!1
return s[b]!=null},
l(a,b){var s,r,q,p,o=null
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
s=q[this.bD(a)]
r=this.bE(s,a)
if(r<0)return null
return s[r].b},
k(a,b,c){var s,r,q,p,o,n,m=this,l=A.E(m)
l.c.a(b)
l.z[1].a(c)
if(typeof b=="string"){s=m.b
m.bg(s==null?m.b=m.aG():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=m.c
m.bg(r==null?m.c=m.aG():r,b,c)}else{q=m.d
if(q==null)q=m.d=m.aG()
p=m.bD(b)
o=q[p]
if(o==null)q[p]=[m.aH(b,c)]
else{n=m.bE(o,b)
if(n>=0)o[n].b=c
else o.push(m.aH(b,c))}}},
v(a,b){var s,r,q=this
A.E(q).h("~(1,2)").a(b)
s=q.e
r=q.r
for(;s!=null;){b.$2(s.a,s.b)
if(r!==q.r)throw A.c(A.az(q))
s=s.c}},
bg(a,b,c){var s,r=A.E(this)
r.c.a(b)
r.z[1].a(c)
s=a[b]
if(s==null)a[b]=this.aH(b,c)
else s.b=c},
aH(a,b){var s=this,r=A.E(s),q=new A.fD(r.c.a(a),r.z[1].a(b))
if(s.e==null)s.e=s.f=q
else s.f=s.f.c=q;++s.a
s.r=s.r+1&1073741823
return q},
bD(a){return J.ie(a)&1073741823},
bE(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.ic(a[r].a,b))return r
return-1},
j(a){return A.fG(this)},
aG(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
$ij7:1}
A.fD.prototype={}
A.c0.prototype={
gi(a){return this.a.a},
gW(a){var s=this.a,r=new A.dr(s,s.r,this.$ti.h("dr<1>"))
r.c=s.e
return r}}
A.dr.prototype={
gF(a){return this.d},
E(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.c(A.az(q))
s=r.c
if(s==null){r.sbf(null)
return!1}else{r.sbf(s.a)
r.c=s.c
return!0}},
sbf(a){this.d=this.$ti.h("1?").a(a)}}
A.i5.prototype={
$1(a){return this.a(a)},
$S:3}
A.i6.prototype={
$2(a,b){return this.a(a,b)},
$S:11}
A.i7.prototype={
$1(a){return this.a(A.Y(a))},
$S:12}
A.dx.prototype={
gB(a){return B.F},
$iw:1}
A.c5.prototype={$iB:1}
A.dy.prototype={
gB(a){return B.G},
$iw:1}
A.bt.prototype={
gi(a){return a.length},
$ir:1}
A.c3.prototype={
l(a,b){A.b9(b,a,a.length)
return a[b]},
$ii:1,
$ij:1}
A.c4.prototype={$ii:1,$ij:1}
A.c2.prototype={
gB(a){return B.H},
$iw:1,
$iil:1}
A.dz.prototype={
gB(a){return B.I},
$iw:1}
A.dA.prototype={
gB(a){return B.J},
l(a,b){A.b9(b,a,a.length)
return a[b]},
$iw:1}
A.dB.prototype={
gB(a){return B.K},
l(a,b){A.b9(b,a,a.length)
return a[b]},
$iw:1}
A.dC.prototype={
gB(a){return B.L},
l(a,b){A.b9(b,a,a.length)
return a[b]},
$iw:1}
A.c6.prototype={
gB(a){return B.N},
l(a,b){A.b9(b,a,a.length)
return a[b]},
$iw:1,
$iiu:1}
A.dD.prototype={
gB(a){return B.O},
l(a,b){A.b9(b,a,a.length)
return a[b]},
$iw:1}
A.c7.prototype={
gB(a){return B.P},
gi(a){return a.length},
l(a,b){A.b9(b,a,a.length)
return a[b]},
$iw:1}
A.dE.prototype={
gB(a){return B.Q},
gi(a){return a.length},
l(a,b){A.b9(b,a,a.length)
return a[b]},
$iw:1,
$ihf:1}
A.cx.prototype={}
A.cy.prototype={}
A.cz.prototype={}
A.cA.prototype={}
A.U.prototype={
h(a){return A.hN(v.typeUniverse,this,a)},
u(a){return A.lM(v.typeUniverse,this,a)}}
A.em.prototype={}
A.hM.prototype={
j(a){return A.O(this.a,null)}}
A.ej.prototype={
j(a){return this.a}}
A.cH.prototype={$ian:1}
A.ho.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:5}
A.hn.prototype={
$1(a){var s,r
this.a.a=t.M.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:13}
A.hp.prototype={
$0(){this.a.$0()},
$S:6}
A.hq.prototype={
$0(){this.a.$0()},
$S:6}
A.hK.prototype={
cp(a,b){if(self.setTimeout!=null)self.setTimeout(A.bb(new A.hL(this,b),0),a)
else throw A.c(A.b7("`setTimeout()` not found."))}}
A.hL.prototype={
$0(){this.b.$0()},
$S:0}
A.e8.prototype={}
A.hP.prototype={
$1(a){return this.a.$2(0,a)},
$S:1}
A.hQ.prototype={
$2(a,b){this.a.$2(1,new A.bS(a,t.l.a(b)))},
$S:14}
A.hW.prototype={
$2(a,b){this.a(A.X(a),b)},
$S:15}
A.bI.prototype={
j(a){return A.n(this.a)},
$iA:1,
gap(){return this.b}}
A.aG.prototype={}
A.a9.prototype={
aJ(){},
aK(){},
saa(a){this.ch=this.$ti.h("a9<1>?").a(a)},
sai(a){this.CW=this.$ti.h("a9<1>?").a(a)}}
A.cn.prototype={
gcC(){return this.c<4},
cI(a){var s,r
A.E(this).h("a9<1>").a(a)
s=a.CW
r=a.ch
if(s==null)this.sbm(r)
else s.saa(r)
if(r==null)this.sbp(s)
else r.sai(s)
a.sai(a)
a.saa(a)},
cM(a,b,c,d){var s,r,q,p,o,n=this,m=A.E(n)
m.h("~(1)?").a(a)
t.Y.a(c)
if((n.c&4)!==0){m=new A.bB($.z,m.h("bB<1>"))
A.iM(m.gcE())
if(c!=null)m.saI(t.M.a(c))
return m}s=$.z
r=d?1:0
t.h.u(m.c).h("1(2)").a(a)
A.ls(s,b)
q=c==null?A.mz():c
t.M.a(q)
m=m.h("a9<1>")
p=new A.a9(n,a,s,r,m)
p.sai(p)
p.saa(p)
m.a(p)
p.ay=n.c&1
o=n.e
n.sbp(p)
p.saa(null)
p.sai(o)
if(o==null)n.sbm(p)
else o.saa(p)
if(n.d==n.e)A.k_(n.a)
return p},
cG(a){var s=this,r=A.E(s)
a=r.h("a9<1>").a(r.h("af<1>").a(a))
if(a.ch===a)return null
r=a.ay
if((r&2)!==0)a.ay=r|4
else{s.cI(a)
if((s.c&2)===0&&s.d==null)s.cw()}return null},
cr(){if((this.c&4)!==0)return new A.b4("Cannot add new events after calling close")
return new A.b4("Cannot add new events while doing an addStream")},
n(a,b){var s=this
A.E(s).c.a(b)
if(!s.gcC())throw A.c(s.cr())
s.aN(b)},
cw(){if((this.c&4)!==0)if(null.gdd())null.aC(null)
A.k_(this.b)},
sbm(a){this.d=A.E(this).h("a9<1>?").a(a)},
sbp(a){this.e=A.E(this).h("a9<1>?").a(a)},
$ijl:1,
$ijE:1,
$iaH:1}
A.cm.prototype={
aN(a){var s,r=this.$ti
r.c.a(a)
for(s=this.d,r=r.h("cq<1>");s!=null;s=s.ch)s.ct(new A.cq(a,r))}}
A.b8.prototype={
d4(a){if((this.c&15)!==6)return!0
return this.b.b.aX(t.m.a(this.d),a.a,t.y,t.K)},
d0(a){var s,r=this,q=r.e,p=null,o=t.z,n=t.K,m=a.a,l=r.b.b
if(t.C.b(q))p=l.d8(q,m,a.b,o,n,t.l)
else p=l.aX(t.v.a(q),m,o,n)
try{o=r.$ti.h("2/").a(p)
return o}catch(s){if(t.b7.b(A.aO(s))){if((r.c&1)!==0)throw A.c(A.aw("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.c(A.aw("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.D.prototype={
bt(a){this.a=this.a&1|4
this.c=a},
aY(a,b,c){var s,r,q,p=this.$ti
p.u(c).h("1/(2)").a(a)
s=$.z
if(s===B.d){if(b!=null&&!t.C.b(b)&&!t.v.b(b))throw A.c(A.iR(b,"onError",u.c))}else{c.h("@<0/>").u(p.c).h("1(2)").a(a)
if(b!=null)b=A.mm(b,s)}r=new A.D(s,c.h("D<0>"))
q=b==null?1:3
this.aB(new A.b8(r,q,a,b,p.h("@<1>").u(c).h("b8<1,2>")))
return r},
da(a,b){return this.aY(a,null,b)},
bu(a,b,c){var s,r=this.$ti
r.u(c).h("1/(2)").a(a)
s=new A.D($.z,c.h("D<0>"))
this.aB(new A.b8(s,19,a,b,r.h("@<1>").u(c).h("b8<1,2>")))
return s},
cK(a){this.a=this.a&1|16
this.c=a},
ah(a){this.a=a.a&30|this.a&1
this.c=a.c},
aB(a){var s,r=this,q=r.a
if(q<=3){a.a=t.F.a(r.c)
r.c=a}else{if((q&4)!==0){s=t.c.a(r.c)
if((s.a&24)===0){s.aB(a)
return}r.ah(s)}A.ba(null,null,r.b,t.M.a(new A.ht(r,a)))}},
aM(a){var s,r,q,p,o,n,m=this,l={}
l.a=a
if(a==null)return
s=m.a
if(s<=3){r=t.F.a(m.c)
m.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){n=t.c.a(m.c)
if((n.a&24)===0){n.aM(a)
return}m.ah(n)}l.a=m.ak(a)
A.ba(null,null,m.b,t.M.a(new A.hA(l,m)))}},
aj(){var s=t.F.a(this.c)
this.c=null
return this.ak(s)},
ak(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
cz(a){var s,r,q,p=this
p.a^=2
try{a.aY(new A.hx(p),new A.hy(p),t.P)}catch(q){s=A.aO(q)
r=A.aL(q)
A.iM(new A.hz(p,s,r))}},
aD(a){var s,r=this
r.$ti.c.a(a)
s=r.aj()
r.a=8
r.c=a
A.bC(r,s)},
Z(a,b){var s
t.K.a(a)
t.l.a(b)
s=this.aj()
this.cK(A.fc(a,b))
A.bC(this,s)},
aC(a){var s=this.$ti
s.h("1/").a(a)
if(s.h("a0<1>").b(a)){this.bh(a)
return}this.cv(a)},
cv(a){var s=this
s.$ti.c.a(a)
s.a^=2
A.ba(null,null,s.b,t.M.a(new A.hv(s,a)))},
bh(a){var s=this.$ti
s.h("a0<1>").a(a)
if(s.b(a)){A.lu(a,this)
return}this.cz(a)},
cu(a,b){this.a^=2
A.ba(null,null,this.b,t.M.a(new A.hu(this,a,b)))},
$ia0:1}
A.ht.prototype={
$0(){A.bC(this.a,this.b)},
$S:0}
A.hA.prototype={
$0(){A.bC(this.b,this.a.a)},
$S:0}
A.hx.prototype={
$1(a){var s,r,q,p=this.a
p.a^=2
try{p.aD(p.$ti.c.a(a))}catch(q){s=A.aO(q)
r=A.aL(q)
p.Z(s,r)}},
$S:5}
A.hy.prototype={
$2(a,b){this.a.Z(t.K.a(a),t.l.a(b))},
$S:16}
A.hz.prototype={
$0(){this.a.Z(this.b,this.c)},
$S:0}
A.hw.prototype={
$0(){A.jy(this.a.a,this.b)},
$S:0}
A.hv.prototype={
$0(){this.a.aD(this.b)},
$S:0}
A.hu.prototype={
$0(){this.a.Z(this.b,this.c)},
$S:0}
A.hD.prototype={
$0(){var s,r,q,p,o,n,m=this,l=null
try{q=m.a.a
l=q.b.b.bJ(t.O.a(q.d),t.z)}catch(p){s=A.aO(p)
r=A.aL(p)
q=m.c&&t.t.a(m.b.a.c).a===s
o=m.a
if(q)o.c=t.t.a(m.b.a.c)
else o.c=A.fc(s,r)
o.b=!0
return}if(l instanceof A.D&&(l.a&24)!==0){if((l.a&16)!==0){q=m.a
q.c=t.t.a(l.c)
q.b=!0}return}if(l instanceof A.D){n=m.b.a
q=m.a
q.c=l.da(new A.hE(n),t.z)
q.b=!1}},
$S:0}
A.hE.prototype={
$1(a){return this.a},
$S:17}
A.hC.prototype={
$0(){var s,r,q,p,o,n,m,l
try{q=this.a
p=q.a
o=p.$ti
n=o.c
m=n.a(this.b)
q.c=p.b.b.aX(o.h("2/(1)").a(p.d),m,o.h("2/"),n)}catch(l){s=A.aO(l)
r=A.aL(l)
q=this.a
q.c=A.fc(s,r)
q.b=!0}},
$S:0}
A.hB.prototype={
$0(){var s,r,q,p,o,n,m=this
try{s=t.t.a(m.a.a.c)
p=m.b
if(p.a.d4(s)&&p.a.e!=null){p.c=p.a.d0(s)
p.b=!1}}catch(o){r=A.aO(o)
q=A.aL(o)
p=t.t.a(m.a.a.c)
n=m.b
if(p.a===r)n.c=p
else n.c=A.fc(r,q)
n.b=!0}},
$S:0}
A.e9.prototype={}
A.aD.prototype={
gi(a){var s={},r=new A.D($.z,t.aQ)
s.a=0
this.aV(new A.h7(s,this),!0,new A.h8(s,r),r.gcB())
return r}}
A.h7.prototype={
$1(a){A.E(this.b).c.a(a);++this.a.a},
$S(){return A.E(this.b).h("~(1)")}}
A.h8.prototype={
$0(){var s=this.b,r=s.$ti,q=r.h("1/").a(this.a.a),p=s.aj()
r.c.a(q)
s.a=8
s.c=q
A.bC(s,p)},
$S:0}
A.co.prototype={
gp(a){return(A.ca(this.a)^892482866)>>>0},
J(a,b){if(b==null)return!1
if(this===b)return!0
return b instanceof A.aG&&b.a===this.a}}
A.cp.prototype={
bq(){return this.w.cG(this)},
aJ(){A.E(this.w).h("af<1>").a(this)},
aK(){A.E(this.w).h("af<1>").a(this)}}
A.bA.prototype={
aP(a){var s,r=this,q=r.e&=4294967279
if((q&8)===0){q=r.e=q|8
if((q&64)!==0){s=r.r
if(s.a===1)s.a=3}if((q&32)===0)r.saL(null)
r.f=r.bq()}q=$.iN()
return q},
aJ(){},
aK(){},
bq(){return null},
ct(a){var s,r,q=this,p=q.r
if(p==null){p=new A.cB(A.E(q).h("cB<1>"))
q.saL(p)}s=p.c
if(s==null)p.b=p.c=a
else p.c=s.a=a
r=q.e
if((r&64)===0){r|=64
q.e=r
if(r<128)p.b_(q)}},
aN(a){var s,r=this,q=A.E(r).c
q.a(a)
s=r.e
r.e=s|32
r.d.bL(r.a,a,q)
r.e&=4294967263
r.cA((s&4)!==0)},
cA(a){var s,r,q=this,p=q.e
if((p&64)!==0&&q.r.c==null){p=q.e=p&4294967231
if((p&4)!==0)if(p<128){s=q.r
s=s==null?null:s.c==null
s=s!==!1}else s=!1
else s=!1
if(s){p&=4294967291
q.e=p}}for(;!0;a=r){if((p&8)!==0){q.saL(null)
return}r=(p&4)!==0
if(a===r)break
q.e=p^32
if(r)q.aJ()
else q.aK()
p=q.e&=4294967263}if((p&64)!==0&&p<128)q.r.b_(q)},
saL(a){this.r=A.E(this).h("cB<1>?").a(a)},
$iaf:1,
$iaH:1}
A.bE.prototype={
aV(a,b,c,d){var s=this.$ti
s.h("~(1)?").a(a)
t.Y.a(c)
return this.a.cM(s.h("~(1)?").a(a),d,c,b===!0)},
bF(a){return this.aV(a,null,null,null)}}
A.cr.prototype={}
A.cq.prototype={}
A.cB.prototype={
b_(a){var s,r=this
r.$ti.h("aH<1>").a(a)
s=r.a
if(s===1)return
if(s>=1){r.a=1
return}A.iM(new A.hG(r,a))
r.a=1}}
A.hG.prototype={
$0(){var s,r,q,p=this.a,o=p.a
p.a=0
if(o===3)return
s=p.$ti.h("aH<1>").a(this.b)
r=p.b
q=r.a
p.b=q
if(q==null)p.c=null
A.E(r).h("aH<1>").a(s).aN(r.b)},
$S:0}
A.bB.prototype={
aP(a){this.a=-1
this.saI(null)
return $.iN()},
cF(){var s,r,q,p=this,o=p.a-1
if(o===0){p.a=-1
s=p.c
if(s!=null){r=s
q=!0}else{r=null
q=!1}if(q){p.saI(null)
p.b.bK(r)}}else p.a=o},
saI(a){this.c=t.Y.a(a)},
$iaf:1}
A.eI.prototype={}
A.cM.prototype={$ijw:1}
A.hV.prototype={
$0(){A.kU(this.a,this.b)},
$S:0}
A.eC.prototype={
bK(a){var s,r,q
t.M.a(a)
try{if(B.d===$.z){a.$0()
return}A.jX(null,null,this,a,t.p)}catch(q){s=A.aO(q)
r=A.aL(q)
A.f5(t.K.a(s),t.l.a(r))}},
bL(a,b,c){var s,r,q
c.h("~(0)").a(a)
c.a(b)
try{if(B.d===$.z){a.$1(b)
return}A.jY(null,null,this,a,b,t.p,c)}catch(q){s=A.aO(q)
r=A.aL(q)
A.f5(t.K.a(s),t.l.a(r))}},
bw(a){return new A.hI(this,t.M.a(a))},
cQ(a,b){return new A.hJ(this,b.h("~(0)").a(a),b)},
bJ(a,b){b.h("0()").a(a)
if($.z===B.d)return a.$0()
return A.jX(null,null,this,a,b)},
aX(a,b,c,d){c.h("@<0>").u(d).h("1(2)").a(a)
d.a(b)
if($.z===B.d)return a.$1(b)
return A.jY(null,null,this,a,b,c,d)},
d8(a,b,c,d,e,f){d.h("@<0>").u(e).u(f).h("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.z===B.d)return a.$2(b,c)
return A.mn(null,null,this,a,b,c,d,e,f)},
aW(a,b,c,d){return b.h("@<0>").u(c).u(d).h("1(2,3)").a(a)}}
A.hI.prototype={
$0(){return this.a.bK(this.b)},
$S:0}
A.hJ.prototype={
$1(a){var s=this.c
return this.a.bL(this.b,s.a(a),s)},
$S(){return this.c.h("~(0)")}}
A.e.prototype={
gW(a){return new A.bp(a,this.gi(a),A.aa(a).h("bp<e.E>"))},
q(a,b){return this.l(a,b)},
v(a,b){var s,r
A.aa(a).h("~(e.E)").a(b)
s=this.gi(a)
for(r=0;r<s;++r){b.$1(this.l(a,r))
if(s!==this.gi(a))throw A.c(A.az(a))}},
gd2(a){return this.gi(a)===0},
gt(a){if(this.gi(a)===0)throw A.c(A.j3())
return this.l(a,0)},
bz(a,b){var s,r=this.gi(a)
for(s=0;s<r;++s){if(J.ic(this.l(a,s),b))return!0
if(r!==this.gi(a))throw A.c(A.az(a))}return!1},
bG(a,b,c){var s=A.aa(a)
return new A.b_(a,s.u(c).h("1(e.E)").a(b),s.h("@<e.E>").u(c).h("b_<1,2>"))},
am(a){var s,r,q,p,o=this
if(o.gd2(a)){s=J.j5(0,A.aa(a).h("e.E"))
return s}r=o.l(a,0)
q=A.j9(o.gi(a),r,!0,A.aa(a).h("e.E"))
for(p=1;p<o.gi(a);++p)B.a.k(q,p,o.l(a,p))
return q},
j(a){return A.j4(a,"[","]")}}
A.x.prototype={
v(a,b){var s,r,q,p=A.aa(a)
p.h("~(x.K,x.V)").a(b)
for(s=J.cT(this.gX(a)),p=p.h("x.V");s.E();){r=s.gF(s)
q=this.l(a,r)
b.$2(r,q==null?p.a(q):q)}},
gi(a){return J.fa(this.gX(a))},
j(a){return A.fG(a)},
$iK:1}
A.fH.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=r.a+=A.n(a)
r.a=s+": "
r.a+=A.n(b)},
$S:18}
A.cL.prototype={}
A.bq.prototype={
v(a,b){this.a.v(0,this.$ti.h("~(1,2)").a(b))},
gi(a){return this.a.a},
j(a){return A.fG(this.a)},
$iK:1}
A.ck.prototype={}
A.bF.prototype={}
A.fP.prototype={
$2(a,b){var s,r,q
t.cm.a(a)
s=this.b
r=this.a
q=s.a+=r.a
q+=a.a
s.a=q
s.a=q+": "
s.a+=A.bk(b)
r.a=", "},
$S:19}
A.bN.prototype={
J(a,b){if(b==null)return!1
return b instanceof A.bN&&this.a===b.a&&!0},
gp(a){var s=this.a
return(s^B.e.aO(s,30))&1073741823},
j(a){var s=this,r=A.kR(A.lc(s)),q=A.d8(A.la(s)),p=A.d8(A.l6(s)),o=A.d8(A.l7(s)),n=A.d8(A.l9(s)),m=A.d8(A.lb(s)),l=A.kS(A.l8(s))
return r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l}}
A.A.prototype={
gap(){return A.aL(this.$thrownJsError)}}
A.cZ.prototype={
j(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.bk(s)
return"Assertion failed"}}
A.an.prototype={}
A.ai.prototype={
gaF(){return"Invalid argument"+(!this.a?"(s)":"")},
gaE(){return""},
j(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+A.n(p),n=s.gaF()+q+o
if(!s.a)return n
return n+s.gaE()+": "+A.bk(s.gaT())},
gaT(){return this.b}}
A.cc.prototype={
gaT(){return A.lP(this.b)},
gaF(){return"RangeError"},
gaE(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.n(q):""
else if(q==null)s=": Not greater than or equal to "+A.n(r)
else if(q>r)s=": Not in inclusive range "+A.n(r)+".."+A.n(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.n(r)
return s}}
A.dk.prototype={
gaT(){return A.X(this.b)},
gaF(){return"RangeError"},
gaE(){if(A.X(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gi(a){return this.f}}
A.dF.prototype={
j(a){var s,r,q,p,o,n,m,l,k=this,j={},i=new A.cg("")
j.a=""
s=k.c
for(r=s.length,q=0,p="",o="";q<r;++q,o=", "){n=s[q]
i.a=p+o
p=i.a+=A.bk(n)
j.a=", "}k.d.v(0,new A.fP(j,i))
m=A.bk(k.a)
l=i.j(0)
return"NoSuchMethodError: method not found: '"+k.b.a+"'\nReceiver: "+m+"\nArguments: ["+l+"]"}}
A.e4.prototype={
j(a){return"Unsupported operation: "+this.a}}
A.e2.prototype={
j(a){return"UnimplementedError: "+this.a}}
A.b4.prototype={
j(a){return"Bad state: "+this.a}}
A.d7.prototype={
j(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.bk(s)+"."}}
A.cf.prototype={
j(a){return"Stack Overflow"},
gap(){return null},
$iA:1}
A.hs.prototype={
j(a){return"Exception: "+this.a}}
A.fs.prototype={
j(a){var s=this.a,r=""!==s?"FormatException: "+s:"FormatException"
return r}}
A.i.prototype={
gi(a){var s,r=this.gW(this)
for(s=0;r.E();)++s
return s},
j(a){return A.l_(this,"(",")")}}
A.I.prototype={
gp(a){return A.u.prototype.gp.call(this,this)},
j(a){return"null"}}
A.u.prototype={$iu:1,
J(a,b){return this===b},
gp(a){return A.ca(this)},
j(a){return"Instance of '"+A.fU(this)+"'"},
bH(a,b){throw A.c(A.jb(this,t.B.a(b)))},
gB(a){return A.mF(this)},
toString(){return this.j(this)}}
A.eL.prototype={
j(a){return""},
$ia7:1}
A.cg.prototype={
gi(a){return this.a.length},
j(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
A.k.prototype={}
A.fb.prototype={
gi(a){return a.length}}
A.cV.prototype={
j(a){var s=String(a)
s.toString
return s}}
A.cX.prototype={
j(a){var s=String(a)
s.toString
return s}}
A.aQ.prototype={$iaQ:1}
A.aR.prototype={$iaR:1}
A.aS.prototype={
sP(a,b){a.height=b},
sS(a,b){a.width=b},
ao(a,b,c){var s=a.getContext(b,A.k7(c))
return s},
$iaS:1,
$id4:1}
A.ac.prototype={
gi(a){return a.length}}
A.fj.prototype={
gi(a){return a.length}}
A.y.prototype={$iy:1}
A.bM.prototype={
gi(a){var s=a.length
s.toString
return s}}
A.fk.prototype={}
A.a_.prototype={}
A.aj.prototype={}
A.fl.prototype={
gi(a){return a.length}}
A.fm.prototype={
gi(a){return a.length}}
A.fn.prototype={
gi(a){return a.length}}
A.aT.prototype={$iaT:1}
A.bi.prototype={$ibi:1}
A.fo.prototype={
j(a){var s=String(a)
s.toString
return s}}
A.bP.prototype={
gi(a){var s=a.length
s.toString
return s},
l(a,b){var s=a.length,r=b>>>0!==b||b>=s
r.toString
if(r)throw A.c(A.H(b,s,a,null))
s=a[b]
s.toString
return s},
gt(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.c(A.J("No elements"))},
q(a,b){if(!(b<a.length))return A.d(a,b)
return a[b]},
$ir:1,
$ii:1,
$ij:1}
A.bQ.prototype={
j(a){var s,r=a.left
r.toString
s=a.top
s.toString
return"Rectangle ("+A.n(r)+", "+A.n(s)+") "+A.n(this.gS(a))+" x "+A.n(this.gP(a))},
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
if(s===r){s=J.f8(b)
s=this.gS(a)===s.gS(b)&&this.gP(a)===s.gP(b)}else s=!1}else s=!1}else s=!1
return s},
gp(a){var s,r=a.left
r.toString
s=a.top
s.toString
return A.jc(r,s,this.gS(a),this.gP(a))},
gbn(a){return a.height},
gP(a){var s=this.gbn(a)
s.toString
return s},
gbv(a){return a.width},
gS(a){var s=this.gbv(a)
s.toString
return s},
$iam:1}
A.d9.prototype={
gi(a){var s=a.length
s.toString
return s},
l(a,b){var s=a.length,r=b>>>0!==b||b>=s
r.toString
if(r)throw A.c(A.H(b,s,a,null))
s=a[b]
s.toString
return s},
gt(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.c(A.J("No elements"))},
q(a,b){if(!(b<a.length))return A.d(a,b)
return a[b]},
$ir:1,
$ii:1,
$ij:1}
A.fp.prototype={
gi(a){var s=a.length
s.toString
return s}}
A.h.prototype={
j(a){var s=a.localName
s.toString
return s},
$ih:1}
A.f.prototype={$if:1}
A.b.prototype={
cP(a,b,c,d){t.o.a(c)
if(c!=null)this.cs(a,b,c,!1)},
cs(a,b,c,d){return a.addEventListener(b,A.bb(t.o.a(c),1),!1)},
cH(a,b,c,d){return a.removeEventListener(b,A.bb(t.o.a(c),1),!1)},
$ib:1}
A.S.prototype={$iS:1}
A.db.prototype={
gi(a){var s=a.length
s.toString
return s},
l(a,b){var s=a.length,r=b>>>0!==b||b>=s
r.toString
if(r)throw A.c(A.H(b,s,a,null))
s=a[b]
s.toString
return s},
gt(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.c(A.J("No elements"))},
q(a,b){if(!(b<a.length))return A.d(a,b)
return a[b]},
$ir:1,
$ii:1,
$ij:1}
A.dc.prototype={
gi(a){return a.length}}
A.de.prototype={
gi(a){return a.length}}
A.a1.prototype={$ia1:1}
A.fz.prototype={
gi(a){var s=a.length
s.toString
return s}}
A.aV.prototype={
gi(a){var s=a.length
s.toString
return s},
l(a,b){var s=a.length,r=b>>>0!==b||b>=s
r.toString
if(r)throw A.c(A.H(b,s,a,null))
s=a[b]
s.toString
return s},
gt(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.c(A.J("No elements"))},
q(a,b){if(!(b<a.length))return A.d(a,b)
return a[b]},
$ir:1,
$ii:1,
$ij:1}
A.bU.prototype={$ibU:1}
A.dj.prototype={$id4:1}
A.aW.prototype={$iaW:1}
A.fB.prototype={
gd3(a){return a.isIntersecting}}
A.fF.prototype={
j(a){var s=String(a)
s.toString
return s}}
A.b1.prototype={}
A.fK.prototype={
gi(a){return a.length}}
A.du.prototype={
l(a,b){return A.aK(a.get(A.Y(b)))},
v(a,b){var s,r,q
t.u.a(b)
s=a.entries()
for(;!0;){r=s.next()
q=r.done
q.toString
if(q)return
q=r.value[0]
q.toString
b.$2(q,A.aK(r.value[1]))}},
gX(a){var s=A.q([],t.s)
this.v(a,new A.fL(s))
return s},
gi(a){var s=a.size
s.toString
return s},
$iK:1}
A.fL.prototype={
$2(a,b){return B.a.n(this.a,a)},
$S:2}
A.dv.prototype={
l(a,b){return A.aK(a.get(A.Y(b)))},
v(a,b){var s,r,q
t.u.a(b)
s=a.entries()
for(;!0;){r=s.next()
q=r.done
q.toString
if(q)return
q=r.value[0]
q.toString
b.$2(q,A.aK(r.value[1]))}},
gX(a){var s=A.q([],t.s)
this.v(a,new A.fM(s))
return s},
gi(a){var s=a.size
s.toString
return s},
$iK:1}
A.fM.prototype={
$2(a,b){return B.a.n(this.a,a)},
$S:2}
A.a2.prototype={$ia2:1}
A.dw.prototype={
gi(a){var s=a.length
s.toString
return s},
l(a,b){var s=a.length,r=b>>>0!==b||b>=s
r.toString
if(r)throw A.c(A.H(b,s,a,null))
s=a[b]
s.toString
return s},
gt(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.c(A.J("No elements"))},
q(a,b){if(!(b<a.length))return A.d(a,b)
return a[b]},
$ir:1,
$ii:1,
$ij:1}
A.o.prototype={
j(a){var s=a.nodeValue
return s==null?this.bQ(a):s},
$io:1}
A.c8.prototype={
gi(a){var s=a.length
s.toString
return s},
l(a,b){var s=a.length,r=b>>>0!==b||b>=s
r.toString
if(r)throw A.c(A.H(b,s,a,null))
s=a[b]
s.toString
return s},
gt(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.c(A.J("No elements"))},
q(a,b){if(!(b<a.length))return A.d(a,b)
return a[b]},
$ir:1,
$ii:1,
$ij:1}
A.a3.prototype={
gi(a){return a.length},
$ia3:1}
A.dJ.prototype={
gi(a){var s=a.length
s.toString
return s},
l(a,b){var s=a.length,r=b>>>0!==b||b>=s
r.toString
if(r)throw A.c(A.H(b,s,a,null))
s=a[b]
s.toString
return s},
gt(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.c(A.J("No elements"))},
q(a,b){if(!(b<a.length))return A.d(a,b)
return a[b]},
$ir:1,
$ii:1,
$ij:1}
A.dN.prototype={
l(a,b){return A.aK(a.get(A.Y(b)))},
v(a,b){var s,r,q
t.u.a(b)
s=a.entries()
for(;!0;){r=s.next()
q=r.done
q.toString
if(q)return
q=r.value[0]
q.toString
b.$2(q,A.aK(r.value[1]))}},
gX(a){var s=A.q([],t.s)
this.v(a,new A.h_(s))
return s},
gi(a){var s=a.size
s.toString
return s},
$iK:1}
A.h_.prototype={
$2(a,b){return B.a.n(this.a,a)},
$S:2}
A.dP.prototype={
gi(a){return a.length}}
A.V.prototype={$iV:1}
A.dR.prototype={
gi(a){var s=a.length
s.toString
return s},
l(a,b){var s=a.length,r=b>>>0!==b||b>=s
r.toString
if(r)throw A.c(A.H(b,s,a,null))
s=a[b]
s.toString
return s},
gt(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.c(A.J("No elements"))},
q(a,b){if(!(b<a.length))return A.d(a,b)
return a[b]},
$ir:1,
$ii:1,
$ij:1}
A.a5.prototype={$ia5:1}
A.dS.prototype={
gi(a){var s=a.length
s.toString
return s},
l(a,b){var s=a.length,r=b>>>0!==b||b>=s
r.toString
if(r)throw A.c(A.H(b,s,a,null))
s=a[b]
s.toString
return s},
gt(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.c(A.J("No elements"))},
q(a,b){if(!(b<a.length))return A.d(a,b)
return a[b]},
$ir:1,
$ii:1,
$ij:1}
A.a6.prototype={
gi(a){return a.length},
$ia6:1}
A.dU.prototype={
l(a,b){return a.getItem(A.Y(b))},
v(a,b){var s,r,q
t.aa.a(b)
for(s=0;!0;++s){r=a.key(s)
if(r==null)return
q=a.getItem(r)
q.toString
b.$2(r,q)}},
gX(a){var s=A.q([],t.s)
this.v(a,new A.h6(s))
return s},
gi(a){var s=a.length
s.toString
return s},
$iK:1}
A.h6.prototype={
$2(a,b){return B.a.n(this.a,a)},
$S:20}
A.Q.prototype={$iQ:1}
A.W.prototype={$iW:1}
A.N.prototype={$iN:1}
A.dX.prototype={
gi(a){var s=a.length
s.toString
return s},
l(a,b){var s=a.length,r=b>>>0!==b||b>=s
r.toString
if(r)throw A.c(A.H(b,s,a,null))
s=a[b]
s.toString
return s},
gt(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.c(A.J("No elements"))},
q(a,b){if(!(b<a.length))return A.d(a,b)
return a[b]},
$ir:1,
$ii:1,
$ij:1}
A.dY.prototype={
gi(a){var s=a.length
s.toString
return s},
l(a,b){var s=a.length,r=b>>>0!==b||b>=s
r.toString
if(r)throw A.c(A.H(b,s,a,null))
s=a[b]
s.toString
return s},
gt(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.c(A.J("No elements"))},
q(a,b){if(!(b<a.length))return A.d(a,b)
return a[b]},
$ir:1,
$ii:1,
$ij:1}
A.hb.prototype={
gi(a){var s=a.length
s.toString
return s}}
A.a8.prototype={$ia8:1}
A.e_.prototype={
gi(a){var s=a.length
s.toString
return s},
l(a,b){var s=a.length,r=b>>>0!==b||b>=s
r.toString
if(r)throw A.c(A.H(b,s,a,null))
s=a[b]
s.toString
return s},
gt(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.c(A.J("No elements"))},
q(a,b){if(!(b<a.length))return A.d(a,b)
return a[b]},
$ir:1,
$ii:1,
$ij:1}
A.hc.prototype={
gi(a){return a.length}}
A.hh.prototype={
j(a){var s=String(a)
s.toString
return s}}
A.e5.prototype={$id4:1}
A.e6.prototype={
gi(a){return a.length}}
A.aF.prototype={
bI(a,b){var s
t.f.a(b)
this.bl(a)
s=A.k2(b,t.H)
s.toString
return this.cJ(a,s)},
cJ(a,b){var s=a.requestAnimationFrame(A.bb(t.f.a(b),1))
s.toString
return s},
bl(a){var s=!!(a.requestAnimationFrame&&a.cancelAnimationFrame)
s.toString
if(s)return;(function(b){var r=["ms","moz","webkit","o"]
for(var q=0;q<r.length&&!b.requestAnimationFrame;++q){b.requestAnimationFrame=b[r[q]+"RequestAnimationFrame"]
b.cancelAnimationFrame=b[r[q]+"CancelAnimationFrame"]||b[r[q]+"CancelRequestAnimationFrame"]}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
$iaF:1}
A.ah.prototype={$iah:1}
A.eb.prototype={
gi(a){var s=a.length
s.toString
return s},
l(a,b){var s=a.length,r=b>>>0!==b||b>=s
r.toString
if(r)throw A.c(A.H(b,s,a,null))
s=a[b]
s.toString
return s},
gt(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.c(A.J("No elements"))},
q(a,b){if(!(b<a.length))return A.d(a,b)
return a[b]},
$ir:1,
$ii:1,
$ij:1}
A.cs.prototype={
j(a){var s,r,q,p=a.left
p.toString
s=a.top
s.toString
r=a.width
r.toString
q=a.height
q.toString
return"Rectangle ("+A.n(p)+", "+A.n(s)+") "+A.n(r)+" x "+A.n(q)},
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
r=J.f8(b)
if(s===r.gS(b)){s=a.height
s.toString
r=s===r.gP(b)
s=r}else s=!1}else s=!1}else s=!1}else s=!1
return s},
gp(a){var s,r,q,p=a.left
p.toString
s=a.top
s.toString
r=a.width
r.toString
q=a.height
q.toString
return A.jc(p,s,r,q)},
gbn(a){return a.height},
gP(a){var s=a.height
s.toString
return s},
gbv(a){return a.width},
gS(a){var s=a.width
s.toString
return s}}
A.en.prototype={
gi(a){var s=a.length
s.toString
return s},
l(a,b){var s=a.length,r=b>>>0!==b||b>=s
r.toString
if(r)throw A.c(A.H(b,s,a,null))
return a[b]},
gt(a){if(a.length>0)return a[0]
throw A.c(A.J("No elements"))},
q(a,b){if(!(b<a.length))return A.d(a,b)
return a[b]},
$ir:1,
$ii:1,
$ij:1}
A.cw.prototype={
gi(a){var s=a.length
s.toString
return s},
l(a,b){var s=a.length,r=b>>>0!==b||b>=s
r.toString
if(r)throw A.c(A.H(b,s,a,null))
s=a[b]
s.toString
return s},
gt(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.c(A.J("No elements"))},
q(a,b){if(!(b<a.length))return A.d(a,b)
return a[b]},
$ir:1,
$ii:1,
$ij:1}
A.eG.prototype={
gi(a){var s=a.length
s.toString
return s},
l(a,b){var s=a.length,r=b>>>0!==b||b>=s
r.toString
if(r)throw A.c(A.H(b,s,a,null))
s=a[b]
s.toString
return s},
gt(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.c(A.J("No elements"))},
q(a,b){if(!(b<a.length))return A.d(a,b)
return a[b]},
$ir:1,
$ii:1,
$ij:1}
A.eM.prototype={
gi(a){var s=a.length
s.toString
return s},
l(a,b){var s=a.length,r=b>>>0!==b||b>=s
r.toString
if(r)throw A.c(A.H(b,s,a,null))
s=a[b]
s.toString
return s},
gt(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.c(A.J("No elements"))},
q(a,b){if(!(b<a.length))return A.d(a,b)
return a[b]},
$ir:1,
$ii:1,
$ij:1}
A.ik.prototype={}
A.ct.prototype={
aV(a,b,c,d){var s=A.E(this)
s.h("~(1)?").a(a)
t.Y.a(c)
return A.cv(this.a,this.b,a,!1,s.c)}}
A.ei.prototype={}
A.cu.prototype={
aP(a){var s,r=this,q=r.b
if(q==null)return $.ib()
s=r.d
if(s!=null)J.kx(q,r.c,t.o.a(s),!1)
r.b=null
r.scD(null)
return $.ib()},
scD(a){this.d=t.o.a(a)},
$iaf:1}
A.hr.prototype={
$1(a){return this.a.$1(t.A.a(a))},
$S:21}
A.m.prototype={
gW(a){return new A.dd(a,this.gi(a),A.aa(a).h("dd<m.E>"))}}
A.dd.prototype={
E(){var s=this,r=s.c+1,q=s.b
if(r<q){s.sbo(J.kw(s.a,r))
s.c=r
return!0}s.sbo(null)
s.c=q
return!1},
gF(a){var s=this.d
return s==null?this.$ti.c.a(s):s},
sbo(a){this.d=this.$ti.h("1?").a(a)}}
A.ec.prototype={}
A.ee.prototype={}
A.ef.prototype={}
A.eg.prototype={}
A.eh.prototype={}
A.ek.prototype={}
A.el.prototype={}
A.eo.prototype={}
A.ep.prototype={}
A.es.prototype={}
A.et.prototype={}
A.eu.prototype={}
A.ev.prototype={}
A.ew.prototype={}
A.ex.prototype={}
A.eA.prototype={}
A.eB.prototype={}
A.eD.prototype={}
A.cC.prototype={}
A.cD.prototype={}
A.eE.prototype={}
A.eF.prototype={}
A.eH.prototype={}
A.eN.prototype={}
A.eO.prototype={}
A.cF.prototype={}
A.cG.prototype={}
A.eQ.prototype={}
A.eR.prototype={}
A.eV.prototype={}
A.eW.prototype={}
A.eX.prototype={}
A.eY.prototype={}
A.eZ.prototype={}
A.f_.prototype={}
A.f0.prototype={}
A.f1.prototype={}
A.f2.prototype={}
A.f3.prototype={}
A.hR.prototype={
$1(a){this.a.push(A.jM(a))},
$S:1}
A.i1.prototype={
$2(a,b){this.a[a]=A.jM(b)},
$S:22}
A.bZ.prototype={$ibZ:1}
A.hS.prototype={
$1(a){var s
t.Z.a(a)
s=function(b,c,d){return function(){return b(c,d,this,Array.prototype.slice.apply(arguments))}}(A.lX,a,!1)
A.iC(s,$.f9(),a)
return s},
$S:3}
A.hT.prototype={
$1(a){return new this.a(a)},
$S:3}
A.hX.prototype={
$1(a){return new A.bY(a==null?t.K.a(a):a)},
$S:23}
A.hY.prototype={
$1(a){var s=a==null?t.K.a(a):a
return new A.aX(s,t.a2)},
$S:24}
A.hZ.prototype={
$1(a){return new A.al(a==null?t.K.a(a):a)},
$S:25}
A.al.prototype={
l(a,b){return A.jO(this.a[b])},
k(a,b,c){if(typeof b!="string"&&typeof b!="number")throw A.c(A.aw("property is not a String or num",null))
this.a[b]=A.jP(c)},
J(a,b){if(b==null)return!1
return b instanceof A.al&&this.a===b.a},
j(a){var s,r
try{s=String(this.a)
return s}catch(r){s=this.bU(0)
return s}},
gp(a){return 0}}
A.bY.prototype={}
A.aX.prototype={
bi(a){var s=this,r=a<0||a>=s.gi(s)
if(r)throw A.c(A.dL(a,0,s.gi(s),null,null))},
l(a,b){this.bi(b)
return this.$ti.c.a(this.bR(0,b))},
k(a,b,c){if(A.hU(b))this.bi(b)
this.bV(0,b,c)},
gi(a){var s=this.a.length
if(typeof s==="number"&&s>>>0===s)return s
throw A.c(A.J("Bad JsArray length"))},
$ii:1,
$ij:1}
A.bD.prototype={
k(a,b,c){return this.bS(0,b,c)}}
A.bu.prototype={
j(a){return"Point("+this.a+", "+this.b+")"},
J(a,b){if(b==null)return!1
return b instanceof A.bu&&this.a===b.a&&this.b===b.b},
gp(a){return A.li(B.e.gp(this.a),B.e.gp(this.b),0)}}
A.ad.prototype={$iad:1}
A.dq.prototype={
gi(a){var s=a.length
s.toString
return s},
l(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw A.c(A.H(b,this.gi(a),a,null))
s=a.getItem(b)
s.toString
return s},
gt(a){var s=a.length
s.toString
if(s>0){s=a[0]
s.toString
return s}throw A.c(A.J("No elements"))},
q(a,b){return this.l(a,b)},
$ii:1,
$ij:1}
A.ae.prototype={$iae:1}
A.dG.prototype={
gi(a){var s=a.length
s.toString
return s},
l(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw A.c(A.H(b,this.gi(a),a,null))
s=a.getItem(b)
s.toString
return s},
gt(a){var s=a.length
s.toString
if(s>0){s=a[0]
s.toString
return s}throw A.c(A.J("No elements"))},
q(a,b){return this.l(a,b)},
$ii:1,
$ij:1}
A.fS.prototype={
gi(a){return a.length}}
A.dV.prototype={
gi(a){var s=a.length
s.toString
return s},
l(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw A.c(A.H(b,this.gi(a),a,null))
s=a.getItem(b)
s.toString
return s},
gt(a){var s=a.length
s.toString
if(s>0){s=a[0]
s.toString
return s}throw A.c(A.J("No elements"))},
q(a,b){return this.l(a,b)},
$ii:1,
$ij:1}
A.ag.prototype={$iag:1}
A.e0.prototype={
gi(a){var s=a.length
s.toString
return s},
l(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw A.c(A.H(b,this.gi(a),a,null))
s=a.getItem(b)
s.toString
return s},
gt(a){var s=a.length
s.toString
if(s>0){s=a[0]
s.toString
return s}throw A.c(A.J("No elements"))},
q(a,b){return this.l(a,b)},
$ii:1,
$ij:1}
A.eq.prototype={}
A.er.prototype={}
A.ey.prototype={}
A.ez.prototype={}
A.eJ.prototype={}
A.eK.prototype={}
A.eS.prototype={}
A.eT.prototype={}
A.fd.prototype={
gi(a){return a.length}}
A.d0.prototype={
l(a,b){return A.aK(a.get(A.Y(b)))},
v(a,b){var s,r,q
t.u.a(b)
s=a.entries()
for(;!0;){r=s.next()
q=r.done
q.toString
if(q)return
q=r.value[0]
q.toString
b.$2(q,A.aK(r.value[1]))}},
gX(a){var s=A.q([],t.s)
this.v(a,new A.fe(s))
return s},
gi(a){var s=a.size
s.toString
return s},
$iK:1}
A.fe.prototype={
$2(a,b){return B.a.n(this.a,a)},
$S:2}
A.d1.prototype={
gi(a){return a.length}}
A.ax.prototype={}
A.dH.prototype={
gi(a){return a.length}}
A.ea.prototype={}
A.d3.prototype={$id3:1}
A.bh.prototype={$ibh:1}
A.dg.prototype={$idg:1}
A.dK.prototype={$idK:1}
A.dM.prototype={$idM:1}
A.cd.prototype={$icd:1}
A.bw.prototype={
al(a,b,c){return a.bindBuffer(b,c)},
H(a,b,c){return a.bindFramebuffer(b,c)},
bx(a,b,c){return a.bindRenderbuffer(b,c)},
by(a,b,c){return a.bindTexture(b,c)},
bA(a,b){return a.deleteBuffer(b)},
cT(a,b){return a.deleteFramebuffer(b)},
cU(a,b){return a.deleteProgram(b)},
cV(a,b){return a.deleteRenderbuffer(b)},
bB(a,b){return a.deleteShader(b)},
cW(a,b){return a.deleteTexture(b)},
cZ(a,b,c,d,e){return a.framebufferRenderbuffer(b,c,d,e)},
d_(a,b,c,d,e,f){return a.framebufferTexture2D(b,c,d,e,f)},
bM(a,b,c,d,e,f,g,h,i,j){var s=i==null
if(!s&&h!=null&&A.hU(g)){this.cN(a,b,c,d,e,f,g,h,i,j)
return}if(t.E.b(g)&&h==null&&s&&j==null){this.cO(a,b,c,d,e,f,g)
return}throw A.c(A.aw("Incorrect number or type of arguments",null))},
d9(a,b,c,d,e,f,g){return this.bM(a,b,c,d,e,f,g,null,null,null)},
cN(a,b,c,d,e,f,g,h,i,j){return a.texImage2D(b,c,d,e,f,g,h,i,j)},
cO(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
a0(a,b,c){return a.uniform1f(b,c)},
an(a,b,c){return a.uniform1i(b,c)},
L(a,b,c){return a.uniform4fv(b,c)},
bN(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
D(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
a1(a,b){return a.useProgram(b)},
$ibw:1}
A.dQ.prototype={$idQ:1}
A.dZ.prototype={$idZ:1}
A.e1.prototype={$ie1:1}
A.dh.prototype={
gcY(){var s=B.a.cX(this.a,0,new A.ft(),t.H)
if(typeof s!=="number")return A.mH(s)
return B.c.Y(20/s)},
c3(a){var s,r,q=this
A.jK(a)
s=q.f=(a-q.b)*0.001
q.b=a
r=q.c+=s
q.d+=s
q.e+=s
if(r>=0.03333333333333333){s=B.c.aZ(r,0.03333333333333333)
q.c=s
r=q.r
if(r!=null)r.$1(0.03333333333333333+s)}s=q.d
if(s>=0.016666666666666666){s=B.c.aZ(s,0.016666666666666666)
q.d=s
r=q.w
if(r!=null)r.$1(0.016666666666666666+s)
s=q.a
if(!!s.fixed$length)A.av(A.b7("removeAt"))
r=s.length
if(0>=r)A.av(A.ji(0,null))
s.splice(0,1)[0]
B.a.n(s,q.e)
q.e=0}s=window
s.toString
q.x=B.j.bI(s,q.gbc())},
sbr(a){this.r=t.W.a(a)},
sbs(a){this.w=t.W.a(a)}}
A.ft.prototype={
$2(a,b){return A.jK(a)+A.iB(b)},
$S:27}
A.fh.prototype={
ba(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=d.f,b=d.d,a=d.e.b1(b)
a.U()
s=b.b1(a)
r=a.a
r===$&&A.v()
q=a.b
q===$&&A.v()
p=a.c
p===$&&A.v()
o=s.a
o===$&&A.v()
n=s.b
n===$&&A.v()
m=s.c
m===$&&A.v()
l=b.a
l===$&&A.v()
k=b.b
k===$&&A.v()
b=b.c
b===$&&A.v()
j=t.n
b=A.q([r,q,p,o,n,m,l,k,b],j)
i=new A.br(b)
k=b.length
if(0>=k)return A.d(b,0)
l=b[0]
if(3>=k)return A.d(b,3)
m=b[3]
if(6>=k)return A.d(b,6)
n=b[6]
o=b[1]
p=b[4]
if(7>=k)return A.d(b,7)
q=b[7]
r=b[2]
h=b[5]
if(8>=k)return A.d(b,8)
i.sC(0,A.q([l,m,n,o,p,q,r,h,b[8]],j))
b=c.a
h=c.b
c=c.c
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
q=d.c
q.sC(0,A.q([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],j))
e=i.a
j=q.a
if(0>=e.length)return A.d(e,0)
B.a.k(j,0,e[0])
j=q.a
if(1>=e.length)return A.d(e,1)
B.a.k(j,1,e[1])
j=q.a
if(2>=e.length)return A.d(e,2)
B.a.k(j,2,e[2])
j=q.a
if(3>=e.length)return A.d(e,3)
B.a.k(j,4,e[3])
j=q.a
if(4>=e.length)return A.d(e,4)
B.a.k(j,5,e[4])
j=q.a
if(5>=e.length)return A.d(e,5)
B.a.k(j,6,e[5])
j=q.a
if(6>=e.length)return A.d(e,6)
B.a.k(j,8,e[6])
j=q.a
if(7>=e.length)return A.d(e,7)
B.a.k(j,9,e[7])
j=q.a
if(8>=e.length)return A.d(e,8)
B.a.k(j,10,e[8])
q.aA(new A.aB(-(p*b+o*h+n*c),-(m*b+l*h+k*c),-(g*b+f*h+r*c)))
d.a.sC(0,A.T(d.b.m(0,q).a,t.i))}}
A.h5.prototype={}
A.bg.prototype={
gR(){var s=this
return A.q([s.a,s.b,s.c,s.d],t.n)}}
A.fu.prototype={}
A.br.prototype={
j(a){var s,r,q,p,o,n,m,l,k=this,j=k.a
if(0>=j.length)return A.d(j,0)
j=A.n(j[0])
s=k.a
if(1>=s.length)return A.d(s,1)
s=A.n(s[1])
r=k.a
if(2>=r.length)return A.d(r,2)
r=A.n(r[2])
q=k.a
if(3>=q.length)return A.d(q,3)
q=A.n(q[3])
p=k.a
if(4>=p.length)return A.d(p,4)
p=A.n(p[4])
o=k.a
if(5>=o.length)return A.d(o,5)
o=A.n(o[5])
n=k.a
if(6>=n.length)return A.d(n,6)
n=A.n(n[6])
m=k.a
if(7>=m.length)return A.d(m,7)
m=A.n(m[7])
l=k.a
if(8>=l.length)return A.d(l,8)
return"      ["+j+", "+s+", "+r+"]\n      ["+q+", "+p+", "+o+"]\n      ["+n+", "+m+", "+A.n(l[8])+"]\n    "},
sC(a,b){this.a=t.r.a(b)}}
A.bs.prototype={
m(b6,b7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this.a,b5=b4.length
if(0>=b5)return A.d(b4,0)
s=b4[0]
if(4>=b5)return A.d(b4,4)
r=b4[4]
if(8>=b5)return A.d(b4,8)
q=b4[8]
if(12>=b5)return A.d(b4,12)
p=b4[12]
o=b4[1]
n=b4[5]
m=b4[9]
if(13>=b5)return A.d(b4,13)
l=b4[13]
k=b4[2]
j=b4[6]
i=b4[10]
if(14>=b5)return A.d(b4,14)
h=b4[14]
g=b4[3]
f=b4[7]
e=b4[11]
if(15>=b5)return A.d(b4,15)
d=b4[15]
c=b7.a
b4=c.length
if(0>=b4)return A.d(c,0)
b=c[0]
if(4>=b4)return A.d(c,4)
a=c[4]
if(8>=b4)return A.d(c,8)
a0=c[8]
if(12>=b4)return A.d(c,12)
a1=c[12]
a2=c[1]
a3=c[5]
a4=c[9]
if(13>=b4)return A.d(c,13)
a5=c[13]
a6=c[2]
a7=c[6]
a8=c[10]
if(14>=b4)return A.d(c,14)
a9=c[14]
b0=c[3]
b1=c[7]
b2=c[11]
if(15>=b4)return A.d(c,15)
b3=c[15]
return new A.bs(A.q([s*b+r*a2+q*a6+p*b0,o*b+n*a2+m*a6+l*b0,k*b+j*a2+i*a6+h*b0,g*b+f*a2+e*a6+d*b0,s*a+r*a3+q*a7+p*b1,o*a+n*a3+m*a7+l*b1,k*a+j*a3+i*a7+h*b1,g*a+f*a3+e*a7+d*b1,s*a0+r*a4+q*a8+p*b2,o*a0+n*a4+m*a8+l*b2,k*a0+j*a4+i*a8+h*b2,g*a0+f*a4+e*a8+d*b2,s*a1+r*a5+q*a9+p*b3,o*a1+n*a5+m*a9+l*b3,k*a1+j*a5+i*a9+h*b3,g*a1+f*a5+e*a9+d*b3],t.n))},
j(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=d.a
if(0>=c.length)return A.d(c,0)
c=A.n(c[0])
s=d.a
if(1>=s.length)return A.d(s,1)
s=A.n(s[1])
r=d.a
if(2>=r.length)return A.d(r,2)
r=A.n(r[2])
q=d.a
if(3>=q.length)return A.d(q,3)
q=A.n(q[3])
p=d.a
if(4>=p.length)return A.d(p,4)
p=A.n(p[4])
o=d.a
if(5>=o.length)return A.d(o,5)
o=A.n(o[5])
n=d.a
if(6>=n.length)return A.d(n,6)
n=A.n(n[6])
m=d.a
if(7>=m.length)return A.d(m,7)
m=A.n(m[7])
l=d.a
if(8>=l.length)return A.d(l,8)
l=A.n(l[8])
k=d.a
if(9>=k.length)return A.d(k,9)
k=A.n(k[9])
j=d.a
if(10>=j.length)return A.d(j,10)
j=A.n(j[10])
i=d.a
if(11>=i.length)return A.d(i,11)
i=A.n(i[11])
h=d.a
if(12>=h.length)return A.d(h,12)
h=A.n(h[12])
g=d.a
if(13>=g.length)return A.d(g,13)
g=A.n(g[13])
f=d.a
if(14>=f.length)return A.d(f,14)
f=A.n(f[14])
e=d.a
if(15>=e.length)return A.d(e,15)
return"      ["+c+", "+s+", "+r+", "+q+"]\n      ["+p+", "+o+", "+n+", "+m+"]\n      ["+l+", "+k+", "+j+", "+i+"]\n      ["+h+", "+g+", "+f+", "+A.n(e[15])+"]\n    "},
sC(a,b){this.a=t.r.a(b)}}
A.a4.prototype={
M(a,b){return new A.a4(this.a-b.a,this.b-b.b)},
j(a){return"["+A.n(this.a)+", "+A.n(this.b)+"]"}}
A.aB.prototype={
M(a,b){return new A.aB(this.a-b.a,this.b-b.b,this.c-b.c)},
ar(a){this.a=a.a
this.b=a.b
this.c=a.c},
j(a){return"["+A.n(this.a)+", "+A.n(this.b)+", "+A.n(this.c)+"]"}}
A.cb.prototype={}
A.fW.prototype={
b0(){var s=this,r=A.q([1,0,0,0,1,0,0,0,1],t.n),q=s.a,p=s.b,o=s.c,n=s.d,m=2/(q*q+p*p+o*o+n*n),l=q*m,k=p*m,j=o*m,i=n*l,h=n*k,g=n*j,f=q*l,e=q*k,d=q*j,c=p*k,b=p*j,a=o*j
B.a.k(r,0,1-(c+a))
B.a.k(r,1,e+g)
B.a.k(r,2,d-h)
B.a.k(r,3,e-g)
B.a.k(r,4,1-(f+a))
B.a.k(r,5,b+i)
B.a.k(r,6,d+h)
B.a.k(r,7,b-i)
B.a.k(r,8,1-(f+c))
return new A.br(r)}}
A.ci.prototype={}
A.b5.prototype={
aA(a){B.a.k(this.a,12,a.a)
B.a.k(this.a,13,a.b)
B.a.k(this.a,14,a.c)},
m(a8,a9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6=this.a,a7=a6.length
if(0>=a7)return A.d(a6,0)
s=a6[0]
if(4>=a7)return A.d(a6,4)
r=a6[4]
if(8>=a7)return A.d(a6,8)
q=a6[8]
if(12>=a7)return A.d(a6,12)
p=a6[12]
o=a6[1]
n=a6[5]
m=a6[9]
if(13>=a7)return A.d(a6,13)
l=a6[13]
k=a6[2]
j=a6[6]
i=a6[10]
if(14>=a7)return A.d(a6,14)
h=a6[14]
g=a9.a
a6=g.length
if(0>=a6)return A.d(g,0)
f=g[0]
if(4>=a6)return A.d(g,4)
e=g[4]
if(8>=a6)return A.d(g,8)
d=g[8]
if(12>=a6)return A.d(g,12)
c=g[12]
b=g[1]
a=g[5]
a0=g[9]
if(13>=a6)return A.d(g,13)
a1=g[13]
a2=g[2]
a3=g[6]
a4=g[10]
if(14>=a6)return A.d(g,14)
a5=g[14]
return new A.b5(A.q([s*f+r*b+q*a2,o*f+n*b+m*a2,k*f+j*b+i*a2,0,s*e+r*a+q*a3,o*e+n*a+m*a3,k*e+j*a+i*a3,0,s*d+r*a0+q*a4,o*d+n*a0+m*a4,k*d+j*a0+i*a4,0,s*c+r*a1+q*a5+p,o*c+n*a1+m*a5+l,k*c+j*a1+i*a5+h,1],t.n))}}
A.cl.prototype={
U(){var s,r,q=this,p=q.a
p===$&&A.v()
s=q.b
s===$&&A.v()
r=Math.sqrt(p*p+s*s)
q.a=q.a/r
q.b=q.b/r},
j(a){var s,r=this.a
r===$&&A.v()
s=this.b
s===$&&A.v()
return"["+A.n(r)+", "+A.n(s)+"]"}}
A.bz.prototype={
m(a,b){var s,r,q=this.a
q===$&&A.v()
s=this.b
s===$&&A.v()
r=this.c
r===$&&A.v()
return new A.bz(q*b,s*b,r*b)},
U(){var s,r,q,p=this,o=p.a
o===$&&A.v()
s=p.b
s===$&&A.v()
r=p.c
r===$&&A.v()
q=Math.sqrt(o*o+s*s+r*r)
p.a=p.a/q
p.b=p.b/q
p.c=p.c/q},
b1(a){var s,r,q,p,o,n=this.b
n===$&&A.v()
s=a.c
s===$&&A.v()
r=this.c
r===$&&A.v()
q=a.b
q===$&&A.v()
p=a.a
p===$&&A.v()
o=this.a
o===$&&A.v()
return new A.bz(n*s-r*q,r*p-o*s,o*q-n*p)},
au(a){this.a=a.a
this.b=a.b
this.c=a.c},
j(a){var s,r,q=this.a
q===$&&A.v()
s=this.b
s===$&&A.v()
r=this.c
r===$&&A.v()
return"["+A.n(q)+", "+A.n(s)+", "+A.n(r)+"]"}}
A.fR.prototype={
ag(a,b,c,d){var s=a*3284157443,r=((b^(s<<16|B.e.aO(s,16)))>>>0)*1911520717,q=((s^(r<<16|r>>>16))>>>0)*2048419325*1462918077595532e-24
return(c-a)*Math.cos(q)+(d-b)*Math.sin(q)}}
A.Z.prototype={}
A.d2.prototype={}
A.fi.prototype={}
A.aA.prototype={}
A.fA.prototype={}
A.hl.prototype={}
A.fg.prototype={}
A.fq.prototype={
ae(a){var s=this.a,r=s.byteLength
this.a=new Uint16Array(A.ar(B.a.ac(B.q.am(s),B.q.am(a))))
return new A.fA(a.length,r,5123)},
ad(a){var s=this.b,r=s.byteLength
this.b=new Float32Array(A.ar(B.a.ac(B.p.am(s),B.p.am(a))))
return new A.hl(r)}}
A.bO.prototype={}
A.df.prototype={
c2(a,b,c){var s,r,q=this,p=36161
q.c=a
s=a.a.createFramebuffer()
s.toString
q.d=s
if(c){r=q.c.a
s=r.createRenderbuffer()
s.toString
q.e=s
B.b.H(r,36160,q.d)
B.b.bx(r,p,q.e)
s=b.b
r.renderbufferStorage(p,33189,A.X(s.a),A.X(s.b))
B.b.cZ(r,36160,36096,p,q.e)
B.b.bx(r,p,null)
B.b.H(r,36160,null)}s=b.b
q.a=A.X(s.a)
q.b=A.X(s.b)},
T(){var s=this,r=s.f,q=r.d.a
q.toString
B.b.cW(q,r.f)
s.f=r.d=r.f=null
r=s.e
if(r!=null){q=s.c.a
q.toString
B.b.cV(q,r)
s.e=null}r=s.c.a
r.toString
B.b.cT(r,s.d)
s.c=null}}
A.be.prototype={
aw(a,b,c,d,e){var s,r,q,p,o,n,m=this
m.bP(a,c,e)
s=m.c.a
s.toString
B.b.H(s,36160,m.d)
s=new A.ha()
s.d=a
r=a.a.createTexture()
r.toString
s.f=r
s.a4(b)
r=m.a
q=m.b
p=new Uint8Array(r*q*4)
o=s.d.a
o.toString
n=s.e
n.toString
o.activeTexture(33984+n)
n=s.d.a
n.toString
B.b.bM(n,3553,0,6408,r,q,0,6408,5121,p)
s.bd(33071,d)
s.c0()
m.f=s
p=m.c.a
p.toString
s=s.f
s.toString
B.b.d_(p,36160,36064,3553,s,0)
s=m.c.a
s.toString
B.b.H(s,36160,null)},
b2(a,b,c,d){return this.aw(a,b,c,9729,d)},
bZ(a,b,c){return this.aw(a,b,c,9729,!1)}}
A.ds.prototype={
av(a){var s,r,q,p=this.a
p.c=a
p.e=p.bb(35633,p.a)
p.f=p.bb(35632,p.b)
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
if(p.c.a.getProgramParameter(s,35714)==null){r=p.gbj().getProgramInfoLog(s)
r.toString
A.av(A.da("Invalide program\n          "+r+"\n        "))}p.d=s},
T(){var s=this.a,r=s.c.a
r.toString
B.b.cU(r,s.d)
r=s.c.a
r.toString
B.b.bB(r,s.e)
r=s.c.a
r.toString
B.b.bB(r,s.f)
s.c=null}}
A.bv.prototype={
O(){var s,r,q,p,o,n,m,l=this
for(s=l.c.a,r=s.length,q=l.b.b,p=0;p<s.length;s.length===r||(0,A.aN)(s),++p){o=s[p]
n=l.e.a
n.toString
m=o.b
n.vertexAttribPointer(m,o.c,5126,!1,o.d,q+o.e)
l.e.a.enableVertexAttribArray(m)}},
N(){var s,r,q,p,o
for(s=this.c.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.aN)(s),++q){p=s[q]
o=this.e.a
o.toString
o.disableVertexAttribArray(p.b)}},
G(){var s=this.a
this.e.a.drawElements(this.d,s.a,s.c,s.b)}}
A.b3.prototype={
gbj(){var s=this.c.a
s.toString
return s},
bb(a,b){var s,r=this,q=r.c.a.createShader(a)
q.toString
r.c.a.shaderSource(q,b)
r.c.a.compileShader(q)
s=r.c.a.getShaderParameter(q,35713)
s.toString
if(!A.iA(s)){q=r.gbj().getShaderInfoLog(q)
q.toString
throw A.c(A.da("Invalide shader\n          type:"+a+" "+q+"\n        "))}return q}}
A.ha.prototype={
a4(a){var s
this.e=a
s=this.d.a
s.activeTexture(33984+a)
B.b.by(s,3553,this.f)},
a9(a){var s,r,q,p=this
if(a){s=$.kj()
r=p.d.a
r.toString
q=p.e
q.toString
r.activeTexture(33984+q)
p.d.a.pixelStorei(37440,1)
q=p.d.a
q.toString
B.b.d9(q,3553,0,6408,6408,5121,s)
p.d.a.pixelStorei(37440,0)
p.bd(33071,9729)}else{s=p.d.a
s.toString
r=p.e
r.toString
s.activeTexture(33984+r)}s=p.d.a
s.toString
B.b.by(s,3553,null)
p.e=null},
c0(){return this.a9(!1)},
bd(a,b){var s=this,r=3553
s.d.a.texParameteri(r,10240,b)
s.d.a.texParameteri(r,10241,b)
s.d.a.texParameteri(r,10242,a)
s.d.a.texParameteri(r,10243,a)}}
A.hg.prototype={
A(a,b){var s,r
this.b=a
s=a.a
s.toString
r=b.d
r.toString
r=s.getUniformLocation(r,this.a)
r.toString
this.c=r}}
A.fr.prototype={}
A.hi.prototype={}
A.fI.prototype={}
A.fJ.prototype={}
A.h0.prototype={}
A.aE.prototype={}
A.fZ.prototype={}
A.hm.prototype={
saQ(a,b){this.a.clearColor(0,0,0,0)
this.a.clearDepth(b.f)
this.a.clear(16640)},
sab(a){var s=this
s.a.enable(3042)
s.a.blendFunc(a.a,a.b)
s.a.blendEquation(32774)
s.a.blendColor(0,0,0,0)},
sI(a){if(a==null){this.a.disable(2884)
return}this.a.enable(2884)
this.a.cullFace(a.a)},
sV(a){if(a==null){this.a.disable(2929)
return}this.a.enable(2929)
this.a.depthFunc(515)},
sbO(a,b){var s,r=this.a
r.toString
s=b.b
r.viewport(0,0,A.X(s.a),A.X(s.b))},
bY(a,b){var s,r,q,p=this,o=t.z
o=t.aM.a(B.f.ao(a,"webgl2",A.j8(["alpha",!1,"antialias",!0,"depth",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],o,o)))
p.a=o
A.lm(b,o)
for(o=b.f,s=o.length,r=0;r<o.length;o.length===s||(0,A.aN)(o),++r){q=o[r]
p.a.getExtension(q)}p.a.frontFace(2305)
p.a.pixelStorei(37441,0)}}
A.fN.prototype={}
A.eP.prototype={
av(a){this.a3(a)
this.c.A(a,this.a)},
T(){this.a2()
var s=this.c
s.b=s.c=null}}
A.h9.prototype={}
A.hk.prototype={}
A.e7.prototype={
cb(a,b){var s,r
t.j.a(a)
t.x.a(b)
s=J.kA(a)
r=A.iA(J.kB(s))
this.e=r
if(r)this.c.n(0,s)
else this.d.n(0,s)}}
A.cW.prototype={
b3(){var s,r,q,p,o=this
o.c1()
s=o.b
r=s.a
s.f.unobserve(r)
s.f.disconnect()
s=o.c
q=window
q.toString
p=s.x
p.toString
B.j.bl(q)
q.cancelAnimationFrame(p)
s.sbr(null)
s.sbs(null)
s=o.a
s.children.toString
A.lt(s,r)
o.x.az(o)
o.x=new A.bj()},
af(){var s,r=this.b,q=r.a,p=document,o=p.documentElement
o.toString
B.e.Y(A.ij(q,o).a)
p=p.documentElement
p.toString
B.e.Y(A.ij(q,p).b)
p=q.clientWidth
p.toString
o=window.devicePixelRatio
o.toString
o=B.c.Y(p*o)
p=q.clientHeight
p.toString
s=window.devicePixelRatio
s.toString
s=B.c.Y(p*s)
r.b=new A.cb(new A.a4(o,s))
B.f.sS(q,o)
B.f.sP(q,A.X(r.b.b.b))
r.f.takeRecords().toString
this.x.b7(this)},
a5(a){var s=this
s.x.az(s)
s.x=a
a.a6(s)},
c1(){var s,r,q
for(s=this.d,r=s.length,q=0;q<s.length;s.length===r||(0,A.aN)(s),++q)s[q].aP(0)
B.a.aR(s)},
c5(a){return this.b3()},
cf(a){return this.af()},
c7(a){return this.af()},
cm(a){return this.x.a7(this)},
co(a){return this.x.a8(this)},
c9(a){return this.x.b5(this)},
cd(a){return this.x.b6(this)},
ci(a){},
ck(a){var s=this
s.x.b8(s,a)
s.x.b4(s,a)}}
A.aP.prototype={
a6(a){},
az(a){},
b8(a,b){},
b7(a){},
b5(a){},
b6(a){},
a8(a){},
a7(a){},
b4(a,b){}}
A.bj.prototype={}
A.fv.prototype={}
A.di.prototype={}
A.bT.prototype={
a6(a){a.r.a8(a)
a.af()},
az(a){a.r.a7(a)},
b8(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=a.r,e=a.w,d=f.ay,c=t.i
f.ch.sC(0,A.T(d.a,c))
s=f.Q
r=s.r
q=s.f
r.au(s.x.M(0,q))
p=s.w
r=r.m(0,s.y).m(0,b)
o=r.a
o===$&&A.v()
p.a=o
n=r.b
n===$&&A.v()
p.b=n
r=r.c
r===$&&A.v()
p.c=r
q.a+=o
q.b+=n
q.c+=r
r=s.d
r.au(q.M(0,e.d))
r.U()
s.ba()
s=s.a
d.sC(0,A.T(f.ax.m(0,s).a,c))
d=f.CW
m=0.1*b
l=m*800
r=d.r+=m
if(r>=1){r=d.r=r-1
k=d.a
d.a=d.b
d.b=k
j=d.e
d.e=d.f
d.f=j}i=r*800
B.a.k(d.a.a,14,i)
B.a.k(d.b.a,14,i-800)
r=d.c.a
q=d.a.a
if(14>=q.length)return A.d(q,14)
q=q[14]
if(typeof q!=="number")return q.M()
B.a.k(r,14,q-l)
q=d.d.a
d=d.b.a
if(14>=d.length)return A.d(d,14)
d=d[14]
if(typeof d!=="number")return d.M()
B.a.k(q,14,d-l)
d=f.cy
q=d.a
d.b.sC(0,A.T(q.a,c))
r=d.c+1.5707963267948966*b
d.c=r
h=A.jp(A.jh(r,0.7853981633974483,0.7853981633974483).b0())
g=A.jq(50)
g.aA(e.at)
q.sC(0,A.T(g.m(0,h).a,c))
f=f.cx
f.b.sC(0,A.T(s.m(0,f.c).a,c))},
b7(a){a.r.b9(a.b.b)},
b6(a){a.a5(new A.ce())},
a8(a){a.r.a8(a)},
a7(a){a.r.a7(a)},
b4(a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=null,a2=36160,a3=a7.r,a4=a3.a,a5=a7.w,a6=a5.b
a4.sbO(0,a6)
s=a3.c
r=s.c.a
r.toString
B.b.H(r,a2,s.d)
a4.saQ(0,A.ii())
a4.sV(new A.bO())
r=a3.w
q=r.a
p=q.c.a
p.toString
B.b.a1(p,q.d)
p=a3.cx
o=p.b
n=a3.CW
m=r.c
l=t.d3
k=l.a(o.m(0,n.a).a)
j=m.b.a
j.toString
B.b.D(j,m.c,!1,k)
k=r.d
j=k.b.a
j.toString
B.b.a0(j,k.c,1.44)
j=a5.Q
i=r.e
h=l.a(j.gR())
g=i.b.a
g.toString
B.b.L(g,i.c,h)
h=a5.as
r=r.f
g=l.a(h.gR())
f=r.b.a
f.toString
B.b.L(f,r.c,g)
a4.sI(n.f)
g=a3.fr
g.O()
g.G()
g=l.a(o.m(0,n.b).a)
f=m.b.a
f.toString
B.b.D(f,m.c,!1,g)
a4.sI(n.e)
g=a3.fr
g.G()
g.N()
g=a3.cy
f=g.a
o=l.a(o.m(0,f).a)
e=m.b.a
e.toString
B.b.D(e,m.c,!1,o)
o=k.b.a
o.toString
B.b.a0(o,k.c,1.04)
o=a5.CW
e=l.a(o.gR())
d=i.b.a
d.toString
B.b.L(d,i.c,e)
e=a5.cx
d=l.a(e.gR())
c=r.b.a
c.toString
B.b.L(c,r.c,d)
a4.sV(a1)
a4.sab(A.iS())
a4.sI(a1)
d=a3.dx
d.O()
d.G()
d.N()
a4.a.flush()
a4.sab(A.ig())
a4.sI(new A.aA(1029))
d=s.c.a
d.toString
B.b.H(d,a2,a1)
d=a3.d
c=d.c.a
c.toString
B.b.H(c,a2,d.d)
a4.saQ(0,A.ii())
a4.sV(new A.bO())
c=a3.x
b=c.a
a=b.c.a
a.toString
B.b.a1(a,b.d)
b=a3.Q.a
a=c.c
p=l.a(b.m(0,p.a).a)
a0=a.b.a
a0.toString
B.b.D(a0,a.c,!1,p)
s=s.f.e
s.toString
p=c.e
a=p.b.a
a.toString
B.b.an(a,p.c,s)
c=c.d
a5=l.a(a5.cy.gR())
s=c.b.a
s.toString
B.b.L(s,c.c,a5)
a5=a3.dy
a5.O()
a5.G()
a5.N()
a5=q.c.a
a5.toString
B.b.a1(a5,q.d)
q=l.a(b.m(0,n.a).a)
a5=m.b.a
a5.toString
B.b.D(a5,m.c,!1,q)
q=k.b.a
q.toString
B.b.a0(q,k.c,1.44)
j=l.a(j.gR())
q=i.b.a
q.toString
B.b.L(q,i.c,j)
h=l.a(h.gR())
j=r.b.a
j.toString
B.b.L(j,r.c,h)
a4.sI(n.e)
h=a3.fr
h.O()
h.G()
h=l.a(b.m(0,n.b).a)
j=m.b.a
j.toString
B.b.D(j,m.c,!1,h)
a4.sI(n.f)
h=a3.fr
h.G()
h.N()
h=l.a(b.m(0,f).a)
j=m.b.a
j.toString
B.b.D(j,m.c,!1,h)
h=k.b.a
h.toString
B.b.a0(h,k.c,1.04)
o=l.a(o.gR())
k=i.b.a
k.toString
B.b.L(k,i.c,o)
e=l.a(e.gR())
o=r.b.a
o.toString
B.b.L(o,r.c,e)
a4.sV(a1)
a4.sab(A.iS())
a4.sI(a1)
e=a3.dx
e.O()
e.G()
e.N()
a4.a.flush()
a4.sab(A.ig())
a4.sI(new A.aA(1029))
e=d.c.a
e.toString
B.b.H(e,a2,a1)
e=a3.f
r=e.c.a
r.toString
B.b.H(r,a2,e.d)
a4.saQ(0,A.ii())
a4.sV(new A.bO())
r=a3.y
o=r.a
i=o.c.a
i.toString
B.b.a1(i,o.d)
o=r.c
i=l.a(b.m(0,n.a).a)
k=o.b.a
k.toString
B.b.D(k,o.c,!1,i)
i=a3.ay
k=r.d
h=l.a(i.m(0,n.a).a)
m=k.b.a
m.toString
B.b.D(m,k.c,!1,h)
h=a3.ch
m=r.e
j=l.a(h.m(0,n.c).a)
q=m.b.a
q.toString
B.b.D(q,m.c,!1,j)
r=r.f
j=r.b.a
j.toString
B.b.a0(j,r.c,1/(2.8*(a8+0.00001)))
a4.sI(n.e)
r=a3.fr
r.O()
r.G()
r=l.a(b.m(0,n.b).a)
j=o.b.a
j.toString
B.b.D(j,o.c,!1,r)
r=l.a(i.m(0,n.b).a)
j=k.b.a
j.toString
B.b.D(j,k.c,!1,r)
r=l.a(h.m(0,n.d).a)
j=m.b.a
j.toString
B.b.D(j,m.c,!1,r)
a4.sI(n.f)
n=a3.fr
n.G()
n.N()
a4.sI(new A.aA(1029))
b=l.a(b.m(0,f).a)
n=o.b.a
n.toString
B.b.D(n,o.c,!1,b)
f=l.a(i.m(0,f).a)
i=k.b.a
i.toString
B.b.D(i,k.c,!1,f)
g=l.a(h.m(0,g.b).a)
h=m.b.a
h.toString
B.b.D(h,m.c,!1,g)
g=a3.dx
g.O()
g.G()
g.N()
a4.a.flush()
a4.sV(a1)
g=e.c.a
g.toString
B.b.H(g,a2,a1)
g=a3.e
m=g.c.a
m.toString
B.b.H(m,a2,g.d)
m=a3.z
h=m.a
f=h.c.a
f.toString
B.b.a1(f,h.d)
h=m.c
f=l.a(a3.at.a)
k=h.b.a
k.toString
B.b.bN(k,h.c,!1,f)
d=d.f.e
d.toString
f=m.d
h=f.b.a
h.toString
B.b.an(h,f.c,d)
e=e.f.e
e.toString
d=m.e
f=d.b.a
f.toString
B.b.an(f,d.c,e)
e=m.f
a6=a6.b
d=a6.a
a6=a6.b
a6=l.a(A.q([d,a6,1/d,1/a6],t.d7))
d=e.b.a
d.toString
B.b.L(d,e.c,a6)
m=m.r
a6=m.b.a
a6.toString
B.b.a0(a6,m.c,0.7)
m=a3.db
m.O()
m.G()
m.N()
a4.a.flush()
m=g.c.a
m.toString
B.b.H(m,a2,a1)
a4.sbO(0,a7.b.b)
m=a3.r
a6=m.a
e=a6.c.a
e.toString
B.b.a1(e,a6.d)
a6=m.f
l=l.a(a3.as.a)
e=a6.b.a
e.toString
B.b.bN(e,a6.c,!1,l)
g=g.f.e
g.toString
m=m.c
l=m.b.a
l.toString
B.b.an(l,m.c,g)
a3=a3.db
a3.O()
a3.G()
a3.N()
a4.a.flush()}}
A.c1.prototype={
a6(a){var s=0,r=A.mh(t.z),q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
var $async$a6=A.mv(function(b,a0){if(b===1)return A.lT(a0,r)
while(true)switch(s){case 0:e=a.r
d=a.w
c=a.b
e.b9(c.b)
q=e.Q
p=d.a
o=1/Math.tan(p.a*0.5)
n=p.d
m=p.c
l=n/(n-m)
n=q.b
B.a.k(n.a,0,o/p.b)
B.a.k(n.a,1,0)
B.a.k(n.a,2,0)
B.a.k(n.a,3,0)
B.a.k(n.a,4,0)
B.a.k(n.a,5,o)
B.a.k(n.a,6,0)
B.a.k(n.a,7,0)
B.a.k(n.a,8,0)
B.a.k(n.a,9,0)
B.a.k(n.a,10,-l)
B.a.k(n.a,11,-1)
B.a.k(n.a,12,0)
B.a.k(n.a,13,0)
B.a.k(n.a,14,-m*l)
B.a.k(n.a,15,0)
m=t.i
q.a.sC(0,A.T(n.m(0,q.c).a,m))
n=d.c
p=q.f
p.ar(n)
q.x.ar(n)
n=q.r
n.a=n.b=n.c=0
n=q.d
n.au(p.M(0,d.d))
n.U()
q.ba()
q=e.ax
n=q.a
p=d.b.b
k=p.a*0.5
B.a.k(n,12,k)
B.a.k(n,0,k)
q=q.a
p=p.b*0.5
B.a.k(q,13,p)
B.a.k(q,5,p)
p=e.CW
q=p.a.a
B.a.k(q,10,400)
B.a.k(q,5,400)
B.a.k(q,0,400)
B.a.k(p.a.a,12,20)
j=A.b0()
q=t.n
j.sC(0,A.q([1,0,0,0,0,1,0,0,0,0,-1,0,0,0,0,1],q))
p.b.sC(0,A.T(j.m(0,p.a).a,m))
p.c.sC(0,A.T(p.a.a,m))
p.d.sC(0,A.T(p.b.a,m))
p=e.cx
p.c.sC(0,A.q([1,0,0,0,0,-1,0,0,0,0,1,0,0,0,0,1],q))
p=p.a
p.sC(0,A.T(A.jq(400).m(0,A.jp(A.jh(0,-1.5707963267948966,0).b0())).a,m))
p.aA(new A.aB(20,1,0))
p=e.b
m=t.a
e.db=new A.bv(p.ae(new Uint16Array(A.ar(A.q([0,1,3,2],m)))),p.ad(new Float32Array(A.ar(A.q([0,1,0,0,1,0,1,1],q)))),A.iv(),5)
k=t.U
e.dx=new A.bv(p.ae(new Uint16Array(A.ar(A.q([0,1,3,3,1,2,4,5,7,7,5,6,8,9,11,11,9,10,12,13,15,15,13,14,16,17,19,19,17,18,20,21,23,23,21,22],m)))),p.ad(new Float32Array(A.ar(A.q([-1,1,1,-1,1,-1,-1,1,-1,-1,1,-1,1,1,-1,1,1,1,1,1,1,1,1,-1,1,1,-1,1,-1,-1,1,-1,-1,1,-1,1,1,-1,1,1,1,1,-1,-1,1,1,-1,-1,-1,-1,-1,-1,-1,1,-1,-1,1,-1,1,1,-1,1,-1,-1,1,-1,-1,-1,-1,-1,-1,-1,1,1,-1,-1,1,1,1,1,-1,1,1,-1,1,1,1,1,-1,-1,1,1,-1,1,-1,-1,1,-1,1,1,-1,-1,-1,-1,1,1,-1,-1,-1,-1,1,-1,1,1,-1,-1,-1,1,1,1],q)))),new A.aE(A.q([new A.Z(0,3,20,0),new A.Z(1,2,20,12)],k)),4)
e.dy=new A.bv(p.ae(new Uint16Array(A.ar(A.q([0,1,3,2],m)))),p.ad(new Float32Array(A.ar(A.q([-1,1,-1,-1,1,-1,1,1],q)))),new A.aE(A.q([new A.Z(0,2,8,0)],k)),5)
$.j_=0.3
$.j0=3.3
i=new A.a4(1,-1)
h=new A.a4(-1,1)
A.fw(12,new A.a4(-1,-1),h,i)
A.fw(12,new A.a4(1,1),i,h)
g=new Uint16Array(A.ar($.ip))
f=new Float32Array(A.ar($.fy))
B.a.aR($.ip)
B.a.aR($.fy)
$.fx=0
e.fr=new A.bv(p.ae(g),p.ad(f),A.j1(),4)
if(c.e)a.a5(new A.bT())
else a.a5(new A.ce())
return A.lU(null,r)}})
return A.lV($async$a6,r)}}
A.ff.prototype={
$0(){return $.cS().c.gcY()},
$S:9}
A.fO.prototype={}
A.fV.prototype={}
A.fX.prototype={}
A.fY.prototype={}
A.h2.prototype={
b9(a){var s=a.b,r=s.b/s.a
s=this.as
B.a.k(s.a,0,2*r)
B.a.k(s.a,4,2)
B.a.k(s.a,6,-r)
B.a.k(s.a,7,-1)},
a8(a){var s,r,q,p,o,n,m=this,l=m.a,k=A.q([],t.s)
l.bY(a.b.a,new A.fZ(!0,!0,k))
l.sab(A.ig())
l.sI(new A.aA(1029))
l.sV(null)
k=m.b
k.c=l
s=l.a.createBuffer()
s.toString
k.d=s
s=l.a.createBuffer()
s.toString
k.e=s
s=k.c.a
s.toString
B.b.al(s,34963,k.d)
s=k.c.a
s.toString
B.b.al(s,34962,k.e)
k.c.a.bufferData(34963,k.a,35044)
k.c.a.bufferData(34962,k.b,35044)
r=a.w.b
k=m.d
k.b2(l,0,r,!0)
s=m.c
s.b2(l,0,r,!0)
q=m.e
q.bZ(l,0,r)
p=m.f
p.aw(l,0,r,9728,!0)
o=m.r
o.bX(l)
o.f.A(l,o.a)
o=m.w
o.a3(l)
n=o.a
o.c.A(l,n)
o.d.A(l,n)
o.e.A(l,n)
o.f.A(l,n)
n=m.x
n.a3(l)
o=n.a
n.c.A(l,o)
n.d.A(l,o)
n.e.A(l,o)
o=m.y
o.a3(l)
n=o.a
o.c.A(l,n)
o.d.A(l,n)
o.e.A(l,n)
o.f.A(l,n)
n=m.z
n.a3(l)
o=n.a
n.c.A(l,o)
n.d.A(l,o)
n.e.A(l,o)
n.f.A(l,o)
n.r.A(l,o)
m.db.e=l
m.dx.e=l
m.dy.e=l
m.fr.e=l
k.f.a4(0)
s.f.a4(1)
q.f.a4(2)
p.f.a4(3)},
a7(a){var s,r,q,p,o,n=this,m=n.d
m.f.a9(!0)
s=n.c
s.f.a9(!0)
r=n.e
r.f.a9(!0)
q=n.f
q.f.a9(!0)
n.db.e=null
n.dx.e=null
n.dy.e=null
n.fr.e=null
p=n.r
p.bW()
p=p.f
p.b=p.c=null
p=n.w
p.a2()
o=p.c
o.b=o.c=null
o=p.d
o.b=o.c=null
o=p.e
o.b=o.c=null
p=p.f
p.b=p.c=null
p=n.x
p.a2()
o=p.c
o.b=o.c=null
o=p.d
o.b=o.c=null
p=p.e
p.b=p.c=null
p=n.y
p.a2()
o=p.c
o.b=o.c=null
o=p.d
o.b=o.c=null
o=p.e
o.b=o.c=null
p=p.f
p.b=p.c=null
p=n.z
p.a2()
o=p.c
o.b=o.c=null
o=p.d
o.b=o.c=null
o=p.e
o.b=o.c=null
o=p.f
o.b=o.c=null
p=p.r
p.b=p.c=null
s.T()
m.T()
r.T()
q.T()
q=n.b
r=q.c.a
r.toString
B.b.al(r,34963,null)
r=q.c.a
r.toString
B.b.al(r,34962,null)
r=q.c.a
r.toString
B.b.bA(r,q.d)
r=q.c.a
r.toString
B.b.bA(r,q.e)
q.c=null
n.a.a=null}}
A.h4.prototype={}
A.ce.prototype={
b5(a){a.a5(new A.bT())}};(function aliases(){var s=J.bl.prototype
s.bQ=s.j
s=J.aY.prototype
s.bT=s.j
s=A.u.prototype
s.bU=s.j
s=A.al.prototype
s.bR=s.l
s.bS=s.k
s=A.bD.prototype
s.bV=s.k
s=A.df.prototype
s.bP=s.c2
s=A.ds.prototype
s.a3=s.av
s.a2=s.T
s=A.eP.prototype
s.bX=s.av
s.bW=s.T})();(function installTearOffs(){var s=hunkHelpers._static_1,r=hunkHelpers._static_0,q=hunkHelpers._static_2,p=hunkHelpers._instance_2u,o=hunkHelpers._instance_0u,n=hunkHelpers._instance_1u
s(A,"mw","lp",4)
s(A,"mx","lq",4)
s(A,"my","lr",4)
r(A,"k5","mp",0)
q(A,"mA","mk",7)
r(A,"mz","mj",0)
p(A.D.prototype,"gcB","Z",7)
o(A.bB.prototype,"gcE","cF",0)
s(A,"mP","jO",29)
n(A.dh.prototype,"gbc","c3",26)
p(A.e7.prototype,"gca","cb",28)
var m
o(m=A.cW.prototype,"gc_","b3",0)
n(m,"gc4","c5",1)
n(m,"gce","cf",1)
n(m,"gc6","c7",1)
n(m,"gcl","cm",1)
n(m,"gcn","co",1)
n(m,"gc8","c9",1)
n(m,"gcc","cd",1)
n(m,"gcg","ci",8)
n(m,"gcj","ck",8)
q(A,"mT","lj",30)
r(A,"mS","kP",9)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.mixinHard,q=hunkHelpers.inherit,p=hunkHelpers.inheritMany
q(A.u,null)
p(A.u,[A.iq,J.bl,J.cY,A.A,A.ay,A.h3,A.i,A.bp,A.L,A.bx,A.bq,A.bJ,A.dm,A.hd,A.fQ,A.bS,A.cE,A.hH,A.x,A.fD,A.dr,A.U,A.em,A.hM,A.hK,A.e8,A.bI,A.aD,A.bA,A.cn,A.b8,A.D,A.e9,A.cr,A.cB,A.bB,A.eI,A.cM,A.e,A.cL,A.bN,A.cf,A.hs,A.fs,A.I,A.eL,A.cg,A.fk,A.ik,A.cu,A.m,A.dd,A.al,A.bu,A.dh,A.fh,A.bg,A.fu,A.br,A.bs,A.a4,A.aB,A.cb,A.fW,A.cl,A.bz,A.fR,A.Z,A.d2,A.fi,A.aA,A.fA,A.hl,A.fg,A.bO,A.df,A.ds,A.bv,A.b3,A.ha,A.hg,A.aE,A.fZ,A.hm,A.e7,A.cW,A.aP,A.fv,A.fV,A.fX,A.h2,A.h4])
p(J.bl,[J.dl,J.bW,J.a,J.bn,J.bo,J.bX,J.bm])
p(J.a,[J.aY,J.G,A.dx,A.c5,A.b,A.fb,A.f,A.aR,A.aj,A.y,A.ec,A.a_,A.fn,A.fo,A.ee,A.bQ,A.eg,A.fp,A.ek,A.a1,A.fz,A.eo,A.bU,A.aW,A.fB,A.fF,A.fK,A.es,A.et,A.a2,A.eu,A.ew,A.a3,A.eA,A.eD,A.a5,A.eE,A.a6,A.eH,A.Q,A.eN,A.hb,A.a8,A.eQ,A.hc,A.hh,A.eV,A.eX,A.eZ,A.f0,A.f2,A.bZ,A.ad,A.eq,A.ae,A.ey,A.fS,A.eJ,A.ag,A.eS,A.fd,A.ea,A.d3,A.dg,A.dK,A.dM,A.cd,A.bw,A.dQ,A.dZ,A.e1])
p(J.aY,[J.dI,J.cj,J.ak])
q(J.fC,J.G)
p(J.bX,[J.bV,J.dn])
p(A.A,[A.c_,A.an,A.dp,A.e3,A.ed,A.dO,A.ej,A.cZ,A.ai,A.dF,A.e4,A.e2,A.b4,A.d7])
p(A.ay,[A.d5,A.d6,A.dW,A.i5,A.i7,A.ho,A.hn,A.hP,A.hx,A.hE,A.h7,A.hJ,A.hr,A.hR,A.hS,A.hT,A.hX,A.hY,A.hZ])
p(A.d5,[A.ia,A.hp,A.hq,A.hL,A.ht,A.hA,A.hz,A.hw,A.hv,A.hu,A.hD,A.hC,A.hB,A.h8,A.hG,A.hV,A.hI,A.ff])
q(A.bR,A.i)
p(A.bR,[A.aZ,A.c0])
q(A.b_,A.aZ)
q(A.bF,A.bq)
q(A.ck,A.bF)
q(A.bK,A.ck)
q(A.bL,A.bJ)
p(A.d6,[A.fT,A.i6,A.hQ,A.hW,A.hy,A.fH,A.fP,A.fL,A.fM,A.h_,A.h6,A.i1,A.fe,A.ft])
q(A.c9,A.an)
p(A.dW,[A.dT,A.bf])
q(A.P,A.x)
p(A.c5,[A.dy,A.bt])
p(A.bt,[A.cx,A.cz])
q(A.cy,A.cx)
q(A.c3,A.cy)
q(A.cA,A.cz)
q(A.c4,A.cA)
p(A.c3,[A.c2,A.dz])
p(A.c4,[A.dA,A.dB,A.dC,A.c6,A.dD,A.c7,A.dE])
q(A.cH,A.ej)
p(A.aD,[A.bE,A.ct])
q(A.co,A.bE)
q(A.aG,A.co)
q(A.cp,A.bA)
q(A.a9,A.cp)
q(A.cm,A.cn)
q(A.cq,A.cr)
q(A.eC,A.cM)
p(A.ai,[A.cc,A.dk])
p(A.b,[A.o,A.dc,A.V,A.cC,A.W,A.N,A.cF,A.e6,A.aF,A.ah,A.d1,A.ax])
p(A.o,[A.h,A.ac])
q(A.k,A.h)
p(A.k,[A.cV,A.cX,A.aS,A.bi,A.de,A.dj,A.b1,A.dP])
p(A.f,[A.aQ,A.aT,A.bh])
q(A.fj,A.aj)
q(A.bM,A.ec)
p(A.a_,[A.fl,A.fm])
q(A.ef,A.ee)
q(A.bP,A.ef)
q(A.eh,A.eg)
q(A.d9,A.eh)
q(A.S,A.aR)
q(A.el,A.ek)
q(A.db,A.el)
q(A.ep,A.eo)
q(A.aV,A.ep)
q(A.du,A.es)
q(A.dv,A.et)
q(A.ev,A.eu)
q(A.dw,A.ev)
q(A.ex,A.ew)
q(A.c8,A.ex)
q(A.eB,A.eA)
q(A.dJ,A.eB)
q(A.dN,A.eD)
q(A.cD,A.cC)
q(A.dR,A.cD)
q(A.eF,A.eE)
q(A.dS,A.eF)
q(A.dU,A.eH)
q(A.eO,A.eN)
q(A.dX,A.eO)
q(A.cG,A.cF)
q(A.dY,A.cG)
q(A.eR,A.eQ)
q(A.e_,A.eR)
q(A.e5,A.b1)
q(A.eW,A.eV)
q(A.eb,A.eW)
q(A.cs,A.bQ)
q(A.eY,A.eX)
q(A.en,A.eY)
q(A.f_,A.eZ)
q(A.cw,A.f_)
q(A.f1,A.f0)
q(A.eG,A.f1)
q(A.f3,A.f2)
q(A.eM,A.f3)
q(A.ei,A.ct)
p(A.al,[A.bY,A.bD])
q(A.aX,A.bD)
q(A.er,A.eq)
q(A.dq,A.er)
q(A.ez,A.ey)
q(A.dG,A.ez)
q(A.eK,A.eJ)
q(A.dV,A.eK)
q(A.eT,A.eS)
q(A.e0,A.eT)
q(A.d0,A.ea)
q(A.dH,A.ax)
q(A.h5,A.fh)
q(A.ci,A.br)
q(A.b5,A.bs)
q(A.fq,A.fg)
q(A.be,A.df)
p(A.hg,[A.fr,A.hi,A.fI,A.fJ,A.h0])
p(A.ds,[A.fN,A.eP,A.hk,A.fO,A.fY])
q(A.h9,A.eP)
p(A.aP,[A.bj,A.bT,A.c1,A.ce])
q(A.di,A.aE)
s(A.cx,A.e)
s(A.cy,A.L)
s(A.cz,A.e)
s(A.cA,A.L)
s(A.bF,A.cL)
s(A.ec,A.fk)
s(A.ee,A.e)
s(A.ef,A.m)
s(A.eg,A.e)
s(A.eh,A.m)
s(A.ek,A.e)
s(A.el,A.m)
s(A.eo,A.e)
s(A.ep,A.m)
s(A.es,A.x)
s(A.et,A.x)
s(A.eu,A.e)
s(A.ev,A.m)
s(A.ew,A.e)
s(A.ex,A.m)
s(A.eA,A.e)
s(A.eB,A.m)
s(A.eD,A.x)
s(A.cC,A.e)
s(A.cD,A.m)
s(A.eE,A.e)
s(A.eF,A.m)
s(A.eH,A.x)
s(A.eN,A.e)
s(A.eO,A.m)
s(A.cF,A.e)
s(A.cG,A.m)
s(A.eQ,A.e)
s(A.eR,A.m)
s(A.eV,A.e)
s(A.eW,A.m)
s(A.eX,A.e)
s(A.eY,A.m)
s(A.eZ,A.e)
s(A.f_,A.m)
s(A.f0,A.e)
s(A.f1,A.m)
s(A.f2,A.e)
s(A.f3,A.m)
r(A.bD,A.e)
s(A.eq,A.e)
s(A.er,A.m)
s(A.ey,A.e)
s(A.ez,A.m)
s(A.eJ,A.e)
s(A.eK,A.m)
s(A.eS,A.e)
s(A.eT,A.m)
s(A.ea,A.x)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{l:"int",t:"double",C:"num",p:"String",i0:"bool",I:"Null",j:"List"},mangledNames:{},types:["~()","~(@)","~(p,@)","@(@)","~(~())","I(@)","I()","~(u,a7)","~(t)","l()","a0<I>()","@(@,p)","@(p)","I(~())","I(@,a7)","~(l,@)","I(u,a7)","D<@>(@)","~(u?,u?)","~(by,@)","~(p,p)","~(f)","~(@,@)","bY(@)","aX<@>(@)","al(@)","~(C)","t(C,t)","~(j<@>,aW)","u?(@)","~(t,t)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti")}
A.lL(v.typeUniverse,JSON.parse('{"dI":"aY","cj":"aY","ak":"aY","mZ":"f","nb":"f","n1":"ax","n_":"b","nh":"b","nj":"b","ng":"h","n3":"k","ne":"o","na":"o","nx":"N","n9":"ah","n5":"ac","nl":"ac","nf":"aV","n6":"y","n7":"Q","n2":"b1","dl":{"i0":[],"w":[]},"bW":{"I":[],"w":[]},"G":{"j":["1"],"i":["1"]},"fC":{"G":["1"],"j":["1"],"i":["1"]},"bX":{"t":[],"C":[]},"bV":{"t":[],"l":[],"C":[],"w":[]},"dn":{"t":[],"C":[],"w":[]},"bm":{"p":[],"w":[]},"c_":{"A":[]},"bR":{"i":["1"]},"aZ":{"i":["1"]},"b_":{"aZ":["2"],"i":["2"],"aZ.E":"2"},"bx":{"by":[]},"bK":{"ck":["1","2"],"bF":["1","2"],"bq":["1","2"],"cL":["1","2"],"K":["1","2"]},"bJ":{"K":["1","2"]},"bL":{"bJ":["1","2"],"K":["1","2"]},"dm":{"j2":[]},"c9":{"an":[],"A":[]},"dp":{"A":[]},"e3":{"A":[]},"cE":{"a7":[]},"ay":{"aU":[]},"d5":{"aU":[]},"d6":{"aU":[]},"dW":{"aU":[]},"dT":{"aU":[]},"bf":{"aU":[]},"ed":{"A":[]},"dO":{"A":[]},"P":{"x":["1","2"],"j7":["1","2"],"K":["1","2"],"x.K":"1","x.V":"2"},"c0":{"i":["1"]},"dx":{"w":[]},"c5":{"B":[]},"dy":{"B":[],"w":[]},"bt":{"r":["1"],"B":[]},"c3":{"e":["t"],"j":["t"],"r":["t"],"B":[],"i":["t"],"L":["t"]},"c4":{"e":["l"],"j":["l"],"r":["l"],"B":[],"i":["l"],"L":["l"]},"c2":{"e":["t"],"il":[],"j":["t"],"r":["t"],"B":[],"i":["t"],"L":["t"],"w":[],"e.E":"t"},"dz":{"e":["t"],"j":["t"],"r":["t"],"B":[],"i":["t"],"L":["t"],"w":[],"e.E":"t"},"dA":{"e":["l"],"j":["l"],"r":["l"],"B":[],"i":["l"],"L":["l"],"w":[],"e.E":"l"},"dB":{"e":["l"],"j":["l"],"r":["l"],"B":[],"i":["l"],"L":["l"],"w":[],"e.E":"l"},"dC":{"e":["l"],"j":["l"],"r":["l"],"B":[],"i":["l"],"L":["l"],"w":[],"e.E":"l"},"c6":{"e":["l"],"iu":[],"j":["l"],"r":["l"],"B":[],"i":["l"],"L":["l"],"w":[],"e.E":"l"},"dD":{"e":["l"],"j":["l"],"r":["l"],"B":[],"i":["l"],"L":["l"],"w":[],"e.E":"l"},"c7":{"e":["l"],"j":["l"],"r":["l"],"B":[],"i":["l"],"L":["l"],"w":[],"e.E":"l"},"dE":{"e":["l"],"hf":[],"j":["l"],"r":["l"],"B":[],"i":["l"],"L":["l"],"w":[],"e.E":"l"},"ej":{"A":[]},"cH":{"an":[],"A":[]},"D":{"a0":["1"]},"bI":{"A":[]},"aG":{"co":["1"],"bE":["1"],"aD":["1"]},"a9":{"cp":["1"],"bA":["1"],"af":["1"],"aH":["1"]},"cn":{"jl":["1"],"jE":["1"],"aH":["1"]},"cm":{"cn":["1"],"jl":["1"],"jE":["1"],"aH":["1"]},"co":{"bE":["1"],"aD":["1"]},"cp":{"bA":["1"],"af":["1"],"aH":["1"]},"bA":{"af":["1"],"aH":["1"]},"bE":{"aD":["1"]},"cq":{"cr":["1"]},"bB":{"af":["1"]},"cM":{"jw":[]},"eC":{"cM":[],"jw":[]},"x":{"K":["1","2"]},"bq":{"K":["1","2"]},"ck":{"bF":["1","2"],"bq":["1","2"],"cL":["1","2"],"K":["1","2"]},"t":{"C":[]},"l":{"C":[]},"j":{"i":["1"]},"cZ":{"A":[]},"an":{"A":[]},"ai":{"A":[]},"cc":{"A":[]},"dk":{"A":[]},"dF":{"A":[]},"e4":{"A":[]},"e2":{"A":[]},"b4":{"A":[]},"d7":{"A":[]},"cf":{"A":[]},"eL":{"a7":[]},"aQ":{"f":[]},"aT":{"f":[]},"S":{"aR":[]},"o":{"b":[]},"V":{"b":[]},"W":{"b":[]},"N":{"b":[]},"k":{"h":[],"o":[],"b":[]},"cV":{"h":[],"o":[],"b":[]},"cX":{"h":[],"o":[],"b":[]},"aS":{"h":[],"o":[],"b":[],"d4":[]},"ac":{"o":[],"b":[]},"bi":{"h":[],"o":[],"b":[]},"bP":{"e":["am<C>"],"m":["am<C>"],"j":["am<C>"],"r":["am<C>"],"i":["am<C>"],"m.E":"am<C>","e.E":"am<C>"},"bQ":{"am":["C"]},"d9":{"e":["p"],"m":["p"],"j":["p"],"r":["p"],"i":["p"],"m.E":"p","e.E":"p"},"h":{"o":[],"b":[]},"db":{"e":["S"],"m":["S"],"j":["S"],"r":["S"],"i":["S"],"m.E":"S","e.E":"S"},"dc":{"b":[]},"de":{"h":[],"o":[],"b":[]},"aV":{"e":["o"],"m":["o"],"j":["o"],"r":["o"],"i":["o"],"m.E":"o","e.E":"o"},"dj":{"h":[],"o":[],"b":[],"d4":[]},"b1":{"h":[],"o":[],"b":[]},"du":{"x":["p","@"],"K":["p","@"],"x.K":"p","x.V":"@"},"dv":{"x":["p","@"],"K":["p","@"],"x.K":"p","x.V":"@"},"dw":{"e":["a2"],"m":["a2"],"j":["a2"],"r":["a2"],"i":["a2"],"m.E":"a2","e.E":"a2"},"c8":{"e":["o"],"m":["o"],"j":["o"],"r":["o"],"i":["o"],"m.E":"o","e.E":"o"},"dJ":{"e":["a3"],"m":["a3"],"j":["a3"],"r":["a3"],"i":["a3"],"m.E":"a3","e.E":"a3"},"dN":{"x":["p","@"],"K":["p","@"],"x.K":"p","x.V":"@"},"dP":{"h":[],"o":[],"b":[]},"dR":{"e":["V"],"m":["V"],"j":["V"],"b":[],"r":["V"],"i":["V"],"m.E":"V","e.E":"V"},"dS":{"e":["a5"],"m":["a5"],"j":["a5"],"r":["a5"],"i":["a5"],"m.E":"a5","e.E":"a5"},"dU":{"x":["p","p"],"K":["p","p"],"x.K":"p","x.V":"p"},"dX":{"e":["N"],"m":["N"],"j":["N"],"r":["N"],"i":["N"],"m.E":"N","e.E":"N"},"dY":{"e":["W"],"m":["W"],"j":["W"],"b":[],"r":["W"],"i":["W"],"m.E":"W","e.E":"W"},"e_":{"e":["a8"],"m":["a8"],"j":["a8"],"r":["a8"],"i":["a8"],"m.E":"a8","e.E":"a8"},"e5":{"h":[],"o":[],"b":[],"d4":[]},"e6":{"b":[]},"aF":{"b":[]},"ah":{"b":[]},"eb":{"e":["y"],"m":["y"],"j":["y"],"r":["y"],"i":["y"],"m.E":"y","e.E":"y"},"cs":{"am":["C"]},"en":{"e":["a1?"],"m":["a1?"],"j":["a1?"],"r":["a1?"],"i":["a1?"],"m.E":"a1?","e.E":"a1?"},"cw":{"e":["o"],"m":["o"],"j":["o"],"r":["o"],"i":["o"],"m.E":"o","e.E":"o"},"eG":{"e":["a6"],"m":["a6"],"j":["a6"],"r":["a6"],"i":["a6"],"m.E":"a6","e.E":"a6"},"eM":{"e":["Q"],"m":["Q"],"j":["Q"],"r":["Q"],"i":["Q"],"m.E":"Q","e.E":"Q"},"ct":{"aD":["1"]},"ei":{"ct":["1"],"aD":["1"]},"cu":{"af":["1"]},"aX":{"e":["1"],"j":["1"],"i":["1"],"e.E":"1"},"dq":{"e":["ad"],"m":["ad"],"j":["ad"],"i":["ad"],"m.E":"ad","e.E":"ad"},"dG":{"e":["ae"],"m":["ae"],"j":["ae"],"i":["ae"],"m.E":"ae","e.E":"ae"},"dV":{"e":["p"],"m":["p"],"j":["p"],"i":["p"],"m.E":"p","e.E":"p"},"e0":{"e":["ag"],"m":["ag"],"j":["ag"],"i":["ag"],"m.E":"ag","e.E":"ag"},"d0":{"x":["p","@"],"K":["p","@"],"x.K":"p","x.V":"@"},"d1":{"b":[]},"ax":{"b":[]},"dH":{"b":[]},"bh":{"f":[]},"ci":{"br":[]},"b5":{"bs":[]},"bj":{"aP":[]},"di":{"aE":[]},"bT":{"aP":[]},"c1":{"aP":[]},"ce":{"aP":[]},"kJ":{"B":[]},"kY":{"j":["l"],"i":["l"],"B":[]},"hf":{"j":["l"],"i":["l"],"B":[]},"ll":{"j":["l"],"i":["l"],"B":[]},"kW":{"j":["l"],"i":["l"],"B":[]},"iu":{"j":["l"],"i":["l"],"B":[]},"kX":{"j":["l"],"i":["l"],"B":[]},"lk":{"j":["l"],"i":["l"],"B":[]},"il":{"j":["t"],"i":["t"],"B":[]},"kV":{"j":["t"],"i":["t"],"B":[]}}'))
A.lK(v.typeUniverse,JSON.parse('{"bR":1,"bt":1,"cr":1,"bD":1}'))
var u={c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type"}
var t=(function rtii(){var s=A.bd
return{h:s("@<~>"),t:s("bI"),J:s("Z"),d:s("aQ"),V:s("aR"),E:s("aS"),e:s("bK<by,@>"),bK:s("aT"),R:s("A"),A:s("f"),Z:s("aU"),bz:s("a0<@>"),I:s("bU"),x:s("aW"),B:s("j2"),bi:s("i<@>"),U:s("G<Z>"),s:s("G<p>"),n:s("G<t>"),b:s("G<@>"),a:s("G<l>"),d7:s("G<C>"),T:s("bW"),g:s("ak"),da:s("r<@>"),a2:s("aX<@>"),bV:s("P<by,@>"),cF:s("bZ"),r:s("j<t>"),j:s("j<@>"),d3:s("j<C>"),bC:s("K<@,@>"),a1:s("o"),P:s("I"),K:s("u"),w:s("bu<C>"),L:s("ni"),q:s("am<C>"),aM:s("bw"),l:s("a7"),N:s("p"),cm:s("by"),bW:s("w"),b7:s("an"),Q:s("B"),cr:s("cj"),cg:s("aF"),bj:s("ah"),cI:s("ei<bh>"),D:s("D<I>"),c:s("D<@>"),aQ:s("D<l>"),y:s("i0"),m:s("i0(u)"),i:s("t"),z:s("@"),O:s("@()"),v:s("@(u)"),C:s("@(u,a7)"),S:s("l"),G:s("0&*"),_:s("u*"),bc:s("a0<I>?"),X:s("u?"),c4:s("cd?"),F:s("b8<@,@>?"),o:s("@(f)?"),Y:s("~()?"),bF:s("~(aQ)?"),cu:s("~(aT)?"),cx:s("~(f)?"),W:s("~(t)?"),H:s("C"),p:s("~"),M:s("~()"),bo:s("~(u)"),k:s("~(u,a7)"),aa:s("~(p,p)"),u:s("~(p,@)"),d8:s("~(t)"),f:s("~(C)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.f=A.aS.prototype
B.A=J.bl.prototype
B.a=J.G.prototype
B.e=J.bV.prototype
B.c=J.bX.prototype
B.h=J.bm.prototype
B.B=J.ak.prototype
B.C=J.a.prototype
B.p=A.c2.prototype
B.q=A.c6.prototype
B.r=J.dI.prototype
B.b=A.bw.prototype
B.i=J.cj.prototype
B.j=A.aF.prototype
B.k=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.t=function() {
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
B.y=function(getTagFallback) {
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
B.u=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.v=function(hooks) {
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
B.x=function(hooks) {
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
B.w=function(hooks) {
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

B.R=new A.h3()
B.m=new A.hH()
B.d=new A.eC()
B.z=new A.eL()
B.n=A.q(s([]),t.b)
B.D={}
B.o=new A.bL(B.D,[],A.bd("bL<by,@>"))
B.E=new A.bx("call")
B.F=A.ab("n4")
B.G=A.ab("kJ")
B.H=A.ab("il")
B.I=A.ab("kV")
B.J=A.ab("kW")
B.K=A.ab("kX")
B.L=A.ab("kY")
B.M=A.ab("u")
B.N=A.ab("iu")
B.O=A.ab("lk")
B.P=A.ab("ll")
B.Q=A.ab("hf")})();(function staticFields(){$.hF=null
$.R=A.q([],A.bd("G<u>"))
$.jg=null
$.iV=null
$.iU=null
$.k9=null
$.k3=null
$.ke=null
$.i2=null
$.i8=null
$.iI=null
$.bG=null
$.cO=null
$.cP=null
$.iF=!1
$.z=B.d
$.iw=null
$.ip=A.q([],t.a)
$.fy=A.q([],t.n)
$.fx=0
$.j_=0
$.j0=0})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal
s($,"n8","f9",()=>A.k8("_$dart_dartClosure"))
s($,"nO","ib",()=>B.d.bJ(new A.ia(),A.bd("a0<I>")))
s($,"nn","kk",()=>A.ao(A.he({
toString:function(){return"$receiver$"}})))
s($,"no","kl",()=>A.ao(A.he({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"np","km",()=>A.ao(A.he(null)))
s($,"nq","kn",()=>A.ao(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"nt","kq",()=>A.ao(A.he(void 0)))
s($,"nu","kr",()=>A.ao(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"ns","kp",()=>A.ao(A.jr(null)))
s($,"nr","ko",()=>A.ao(function(){try{null.$method$}catch(r){return r.message}}()))
s($,"nw","kt",()=>A.ao(A.jr(void 0)))
s($,"nv","ks",()=>A.ao(function(){try{(void 0).$method$}catch(r){return r.message}}()))
s($,"ny","iO",()=>A.lo())
s($,"nc","iN",()=>t.D.a($.ib()))
s($,"nM","kv",()=>A.kc(B.M))
s($,"nK","ku",()=>A.k1(self))
s($,"nz","iP",()=>A.k8("_$dart_dartObject"))
s($,"nL","iQ",()=>function DartObject(a){this.o=a})
s($,"nm","kj",()=>A.ih(1,1))
s($,"n0","kh",()=>{var r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2="uPvwlTransform",d3=A.bd("bi").a(A.mD().querySelector("#real-t-demo-retro-neon")),d4=A.ih(null,null)
A.je()
r=A.je()
q=t.z
p=A.jm(q)
q=A.jm(q)
o=A.j9(20,0,!0,t.i)
n=A.q([],A.bd("G<af<@>>"))
m=new Uint16Array(A.jL(0))
l=new Float32Array(A.jL(0))
k=A.ja(d2)
A.iv()
j=A.h1("uSampler")
i=A.dt(d2)
h=A.im("uNeonThickness")
g=A.hj("uNeonColor")
f=A.hj("uColor")
A.j1()
e=A.dt(d2)
d=A.hj("uColor")
c=A.h1("uReflectSampler")
A.jv()
b=A.dt(d2)
a=A.dt("uTpvwlTransform")
a0=A.dt("uPreviousTpvwlTransform")
a1=A.im("uViewScale")
A.jv()
a2=A.ja(d2)
a3=A.h1("uColorSampler")
a4=A.h1("uVelocitySampler")
a5=A.hj("uViewBound")
a6=A.im("uStep")
A.iv()
a7=A.ju()
a8=A.ju()
a9=A.jf()
b0=A.b0()
b1=A.b0()
b2=A.b6()
b3=A.jt(0,0,1)
b4=A.jt(0,1,0)
b5=A.jf()
b6=t.n
b7=A.q([1,0,0,0,1,0,0,0,1],b6)
b6=A.q([2,0,0,0,2,0,-1,-1,1],b6)
b8=A.b0()
b9=A.b0()
c0=A.b0()
c1=A.b6()
c2=A.b6()
c3=A.b6()
c4=A.b6()
c5=A.kQ()
c6=A.b6()
c7=A.b0()
c8=A.b0()
c9=A.b6()
d0=A.b6()
A.jd(0,0)
d1=A.jd(1024,1024)
return new A.cW(d3,new A.e7(d4,new A.cb(r),p,q),new A.dh(o),n,new A.P(A.bd("P<p,hf>")),new A.P(A.bd("P<@,@>")),new A.h2(new A.hm(),new A.fq(m,l),new A.be(),new A.be(),new A.be(),new A.be(),new A.h9(k,j,new A.b3("    precision highp float;\n    \n    attribute vec2 aPositionMapping;\n\n    uniform mat3 uPvwlTransform;\n\n    varying vec2 vMapping;\n\n    void main(void)\n    {\n      vMapping = aPositionMapping;\n\n      vec3 position = uPvwlTransform * vec3(aPositionMapping, 1.0);\n      gl_Position = vec4(position.xy, 0.0, 1.0);\n    }\n  ","    precision highp float;\n\n    uniform sampler2D uSampler;\n\n    varying vec2 vMapping;\n\n    void main(void)\n    {\n      gl_FragColor = texture2D(uSampler, vMapping);\n    }\n  ")),new A.fO(i,h,g,f,new A.b3("    precision highp float;\n    \n    attribute vec3 aPosition;\n    attribute vec2 aTangent;\n\n    uniform mat4 uPvwlTransform;\n\n    varying vec2 vMapping;\n    varying float vHeight;\n\n    void main(void)\n    {\n      vMapping = -aTangent;\n      vHeight = aPosition.y;\n      gl_Position = uPvwlTransform * vec4(aPosition, 1.0);\n    }\n  ","    precision highp float;\n\n    uniform float uNeonThickness;\n    uniform vec4 uNeonColor;\n    uniform vec4 uColor;\n\n    varying vec2 vMapping;\n    varying float vHeight;\n\n    void main(void)\n    {\n      float x = abs(vMapping.x) * uNeonThickness;\n      float y = abs(vMapping.y) * uNeonThickness;\nfloat f = max(x, y);\nif (f < 1.0) f = 0.0;\n//f = max(f, 1.0);\n//f = clamp(f, 0.0, f);\n      gl_FragColor = mix(uColor, uNeonColor, f);\n    }\n  ")),new A.fY(e,d,c,new A.b3("    precision highp float;\n    \n    attribute vec2 aPosition;\n\n    uniform mat4 uPvwlTransform;\n    varying vec4 vScreenPosition;\n\n    void main(void)\n    {\n      vScreenPosition = uPvwlTransform * vec4(aPosition, 0.0, 1.0);\n      gl_Position = vScreenPosition;\n    }\n  ","    precision highp float;\n\n    uniform vec4 uColor;\n    uniform sampler2D uReflectSampler;\n\n    varying vec4 vScreenPosition;\n\n    void main(void)\n    {\n      vec2 screenMapping = (vScreenPosition.xy / vScreenPosition.w);\n      screenMapping = screenMapping * 0.5 + 0.5;\n      vec4 reflect = texture2D(uReflectSampler, screenMapping);\n\n      gl_FragColor = mix(reflect, uColor, 0.1);\n    }\n  ")),new A.hk(b,a,a0,a1,new A.b3("#version 300 es\n    precision highp float;\n    in vec3 aPosition;\n    out vec4 vViewportPosition;\n    out vec4 vViewportPreviousPosition;\n\n    uniform mat4 uPvwlTransform;\n    uniform mat4 uTpvwlTransform;\n    uniform mat4 uPreviousTpvwlTransform;\n\n    void main()\n    {\n      vec4 position = vec4(aPosition, 1.0);\n      vViewportPosition = uTpvwlTransform * position;\n      vViewportPreviousPosition = uPreviousTpvwlTransform * position;\n\n      gl_Position = uPvwlTransform * position;\n    }\n  ","#version 300 es\n    precision highp float;\n    in vec4 vViewportPosition;\n    in vec4 vViewportPreviousPosition;\n    out vec4 outColor;\n\n    uniform float uViewScale;\n\n    void main()\n    {\n      vec2 velocity = (vViewportPosition.xy / vViewportPosition.w)\n        - (vViewportPreviousPosition.xy / vViewportPreviousPosition.w);\n      velocity *= uViewScale;\n      velocity /= max(length(velocity), 1.0);\n      velocity = velocity * 0.5 + 0.5;\n\n      outColor = vec4(velocity, 0, 0);\n    }\n  ")),new A.fN(a2,a3,a4,a5,a6,new A.b3("#version 300 es\n    precision highp float;\n\n    in vec2 aPositionMapping;\n    out vec2 vMapping;\n\n    uniform mat3 uPvwlTransform;\n\n    void main()\n    {\n      vMapping = aPositionMapping;\n\n      vec3 position = uPvwlTransform * vec3(aPositionMapping, 1.0);\n      gl_Position = vec4(position.xy, 0.0, 1.0);\n    }\n  ","#version 300 es\n    precision highp float;\n\n    in vec2 vMapping;\n    out vec4 outColor;\n\n    uniform sampler2D uColorSampler;\n    uniform sampler2D uVelocitySampler;\n    uniform vec4 uViewBound;\n    uniform float uStep;\n\n    void main()\n    {\n      vec4 color = texture(uColorSampler, vMapping);\n      vec2 velocity = texture(uVelocitySampler, vMapping).xy;\n      velocity = velocity * 2.0 - 1.0;\n      velocity *= uViewBound.zw;\n      \n      for (int i = 1; i <= 4; i ++)\n      {\n          float distance = float(i) * uStep;\n          color += texture(uColorSampler, vMapping + velocity * distance);\n          color += texture(uColorSampler, vMapping - velocity * distance);\n      }\n\n      outColor = color * 0.1111111111111111;\n    }\n  ")),new A.h5(a7,a8,a9,b0,b1,b2,b3,b4,b5),new A.ci(b7),new A.ci(b6),b8,b9,c0,new A.fv(c1,c2,c3,c4,c5,new A.aA(1028)),new A.fX(c6,c7,c8),new A.fV(c9,d0)),new A.h4(new A.fu(1.5707963267948966,1,0.1,600),new A.cb(d1),A.is(0,100,400),A.is(0,40,0),new A.bg(0,1,1,1),new A.bg(0,0,0,1),A.is(0,120,0),A.iY("#FF317A"),new A.bg(0,0,0,0),A.iY("#31DDFF")),new A.bj())})
s($,"nd","ki",()=>new A.fR())
s($,"nA","cS",()=>$.kh())})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({WebGL:J.bl,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,webkitFileSystemDirectoryEntry:J.a,FileSystemDirectoryEntry:J.a,DirectoryReader:J.a,WebKitDirectoryReader:J.a,webkitFileSystemDirectoryReader:J.a,FileSystemDirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,webkitFileSystemEntry:J.a,FileSystemEntry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,webkitFileSystemFileEntry:J.a,FileSystemFileEntry:J.a,DOMFileSystem:J.a,WebKitFileSystem:J.a,webkitFileSystem:J.a,FileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,GeolocationPosition:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,GeolocationPositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL2RenderingContextBase:J.a,ArrayBuffer:A.dx,ArrayBufferView:A.c5,DataView:A.dy,Float32Array:A.c2,Float64Array:A.dz,Int16Array:A.dA,Int32Array:A.dB,Int8Array:A.dC,Uint16Array:A.c6,Uint32Array:A.dD,Uint8ClampedArray:A.c7,CanvasPixelArray:A.c7,Uint8Array:A.dE,HTMLBRElement:A.k,HTMLBaseElement:A.k,HTMLBodyElement:A.k,HTMLButtonElement:A.k,HTMLContentElement:A.k,HTMLDListElement:A.k,HTMLDataElement:A.k,HTMLDataListElement:A.k,HTMLDetailsElement:A.k,HTMLDialogElement:A.k,HTMLEmbedElement:A.k,HTMLFieldSetElement:A.k,HTMLHRElement:A.k,HTMLHeadElement:A.k,HTMLHeadingElement:A.k,HTMLHtmlElement:A.k,HTMLIFrameElement:A.k,HTMLInputElement:A.k,HTMLLIElement:A.k,HTMLLabelElement:A.k,HTMLLegendElement:A.k,HTMLLinkElement:A.k,HTMLMapElement:A.k,HTMLMenuElement:A.k,HTMLMetaElement:A.k,HTMLMeterElement:A.k,HTMLModElement:A.k,HTMLOListElement:A.k,HTMLObjectElement:A.k,HTMLOptGroupElement:A.k,HTMLOptionElement:A.k,HTMLOutputElement:A.k,HTMLParagraphElement:A.k,HTMLParamElement:A.k,HTMLPictureElement:A.k,HTMLPreElement:A.k,HTMLProgressElement:A.k,HTMLQuoteElement:A.k,HTMLScriptElement:A.k,HTMLShadowElement:A.k,HTMLSlotElement:A.k,HTMLSourceElement:A.k,HTMLSpanElement:A.k,HTMLStyleElement:A.k,HTMLTableCaptionElement:A.k,HTMLTableCellElement:A.k,HTMLTableDataCellElement:A.k,HTMLTableHeaderCellElement:A.k,HTMLTableColElement:A.k,HTMLTableElement:A.k,HTMLTableRowElement:A.k,HTMLTableSectionElement:A.k,HTMLTemplateElement:A.k,HTMLTextAreaElement:A.k,HTMLTimeElement:A.k,HTMLTitleElement:A.k,HTMLTrackElement:A.k,HTMLUListElement:A.k,HTMLUnknownElement:A.k,HTMLDirectoryElement:A.k,HTMLFontElement:A.k,HTMLFrameElement:A.k,HTMLFrameSetElement:A.k,HTMLMarqueeElement:A.k,HTMLElement:A.k,AccessibleNodeList:A.fb,HTMLAnchorElement:A.cV,HTMLAreaElement:A.cX,BeforeUnloadEvent:A.aQ,Blob:A.aR,HTMLCanvasElement:A.aS,CDATASection:A.ac,CharacterData:A.ac,Comment:A.ac,ProcessingInstruction:A.ac,Text:A.ac,CSSPerspective:A.fj,CSSCharsetRule:A.y,CSSConditionRule:A.y,CSSFontFaceRule:A.y,CSSGroupingRule:A.y,CSSImportRule:A.y,CSSKeyframeRule:A.y,MozCSSKeyframeRule:A.y,WebKitCSSKeyframeRule:A.y,CSSKeyframesRule:A.y,MozCSSKeyframesRule:A.y,WebKitCSSKeyframesRule:A.y,CSSMediaRule:A.y,CSSNamespaceRule:A.y,CSSPageRule:A.y,CSSRule:A.y,CSSStyleRule:A.y,CSSSupportsRule:A.y,CSSViewportRule:A.y,CSSStyleDeclaration:A.bM,MSStyleCSSProperties:A.bM,CSS2Properties:A.bM,CSSImageValue:A.a_,CSSKeywordValue:A.a_,CSSNumericValue:A.a_,CSSPositionValue:A.a_,CSSResourceValue:A.a_,CSSUnitValue:A.a_,CSSURLImageValue:A.a_,CSSStyleValue:A.a_,CSSMatrixComponent:A.aj,CSSRotation:A.aj,CSSScale:A.aj,CSSSkew:A.aj,CSSTranslation:A.aj,CSSTransformComponent:A.aj,CSSTransformValue:A.fl,CSSUnparsedValue:A.fm,DataTransferItemList:A.fn,DeviceOrientationEvent:A.aT,HTMLDivElement:A.bi,DOMException:A.fo,ClientRectList:A.bP,DOMRectList:A.bP,DOMRectReadOnly:A.bQ,DOMStringList:A.d9,DOMTokenList:A.fp,MathMLElement:A.h,SVGAElement:A.h,SVGAnimateElement:A.h,SVGAnimateMotionElement:A.h,SVGAnimateTransformElement:A.h,SVGAnimationElement:A.h,SVGCircleElement:A.h,SVGClipPathElement:A.h,SVGDefsElement:A.h,SVGDescElement:A.h,SVGDiscardElement:A.h,SVGEllipseElement:A.h,SVGFEBlendElement:A.h,SVGFEColorMatrixElement:A.h,SVGFEComponentTransferElement:A.h,SVGFECompositeElement:A.h,SVGFEConvolveMatrixElement:A.h,SVGFEDiffuseLightingElement:A.h,SVGFEDisplacementMapElement:A.h,SVGFEDistantLightElement:A.h,SVGFEFloodElement:A.h,SVGFEFuncAElement:A.h,SVGFEFuncBElement:A.h,SVGFEFuncGElement:A.h,SVGFEFuncRElement:A.h,SVGFEGaussianBlurElement:A.h,SVGFEImageElement:A.h,SVGFEMergeElement:A.h,SVGFEMergeNodeElement:A.h,SVGFEMorphologyElement:A.h,SVGFEOffsetElement:A.h,SVGFEPointLightElement:A.h,SVGFESpecularLightingElement:A.h,SVGFESpotLightElement:A.h,SVGFETileElement:A.h,SVGFETurbulenceElement:A.h,SVGFilterElement:A.h,SVGForeignObjectElement:A.h,SVGGElement:A.h,SVGGeometryElement:A.h,SVGGraphicsElement:A.h,SVGImageElement:A.h,SVGLineElement:A.h,SVGLinearGradientElement:A.h,SVGMarkerElement:A.h,SVGMaskElement:A.h,SVGMetadataElement:A.h,SVGPathElement:A.h,SVGPatternElement:A.h,SVGPolygonElement:A.h,SVGPolylineElement:A.h,SVGRadialGradientElement:A.h,SVGRectElement:A.h,SVGScriptElement:A.h,SVGSetElement:A.h,SVGStopElement:A.h,SVGStyleElement:A.h,SVGElement:A.h,SVGSVGElement:A.h,SVGSwitchElement:A.h,SVGSymbolElement:A.h,SVGTSpanElement:A.h,SVGTextContentElement:A.h,SVGTextElement:A.h,SVGTextPathElement:A.h,SVGTextPositioningElement:A.h,SVGTitleElement:A.h,SVGUseElement:A.h,SVGViewElement:A.h,SVGGradientElement:A.h,SVGComponentTransferFunctionElement:A.h,SVGFEDropShadowElement:A.h,SVGMPathElement:A.h,Element:A.h,AbortPaymentEvent:A.f,AnimationEvent:A.f,AnimationPlaybackEvent:A.f,ApplicationCacheErrorEvent:A.f,BackgroundFetchClickEvent:A.f,BackgroundFetchEvent:A.f,BackgroundFetchFailEvent:A.f,BackgroundFetchedEvent:A.f,BeforeInstallPromptEvent:A.f,BlobEvent:A.f,CanMakePaymentEvent:A.f,ClipboardEvent:A.f,CloseEvent:A.f,CompositionEvent:A.f,CustomEvent:A.f,DeviceMotionEvent:A.f,ErrorEvent:A.f,ExtendableEvent:A.f,ExtendableMessageEvent:A.f,FetchEvent:A.f,FocusEvent:A.f,FontFaceSetLoadEvent:A.f,ForeignFetchEvent:A.f,GamepadEvent:A.f,HashChangeEvent:A.f,InstallEvent:A.f,KeyboardEvent:A.f,MediaEncryptedEvent:A.f,MediaKeyMessageEvent:A.f,MediaQueryListEvent:A.f,MediaStreamEvent:A.f,MediaStreamTrackEvent:A.f,MessageEvent:A.f,MIDIConnectionEvent:A.f,MIDIMessageEvent:A.f,MouseEvent:A.f,DragEvent:A.f,MutationEvent:A.f,NotificationEvent:A.f,PageTransitionEvent:A.f,PaymentRequestEvent:A.f,PaymentRequestUpdateEvent:A.f,PointerEvent:A.f,PopStateEvent:A.f,PresentationConnectionAvailableEvent:A.f,PresentationConnectionCloseEvent:A.f,ProgressEvent:A.f,PromiseRejectionEvent:A.f,PushEvent:A.f,RTCDataChannelEvent:A.f,RTCDTMFToneChangeEvent:A.f,RTCPeerConnectionIceEvent:A.f,RTCTrackEvent:A.f,SecurityPolicyViolationEvent:A.f,SensorErrorEvent:A.f,SpeechRecognitionError:A.f,SpeechRecognitionEvent:A.f,SpeechSynthesisEvent:A.f,StorageEvent:A.f,SyncEvent:A.f,TextEvent:A.f,TouchEvent:A.f,TrackEvent:A.f,TransitionEvent:A.f,WebKitTransitionEvent:A.f,UIEvent:A.f,VRDeviceEvent:A.f,VRDisplayEvent:A.f,VRSessionEvent:A.f,WheelEvent:A.f,MojoInterfaceRequestEvent:A.f,ResourceProgressEvent:A.f,USBConnectionEvent:A.f,IDBVersionChangeEvent:A.f,AudioProcessingEvent:A.f,OfflineAudioCompletionEvent:A.f,Event:A.f,InputEvent:A.f,SubmitEvent:A.f,AbsoluteOrientationSensor:A.b,Accelerometer:A.b,AccessibleNode:A.b,AmbientLightSensor:A.b,Animation:A.b,ApplicationCache:A.b,DOMApplicationCache:A.b,OfflineResourceList:A.b,BackgroundFetchRegistration:A.b,BatteryManager:A.b,BroadcastChannel:A.b,CanvasCaptureMediaStreamTrack:A.b,EventSource:A.b,FileReader:A.b,FontFaceSet:A.b,Gyroscope:A.b,XMLHttpRequest:A.b,XMLHttpRequestEventTarget:A.b,XMLHttpRequestUpload:A.b,LinearAccelerationSensor:A.b,Magnetometer:A.b,MediaDevices:A.b,MediaKeySession:A.b,MediaQueryList:A.b,MediaRecorder:A.b,MediaSource:A.b,MediaStream:A.b,MediaStreamTrack:A.b,MessagePort:A.b,MIDIAccess:A.b,MIDIInput:A.b,MIDIOutput:A.b,MIDIPort:A.b,NetworkInformation:A.b,Notification:A.b,OffscreenCanvas:A.b,OrientationSensor:A.b,PaymentRequest:A.b,Performance:A.b,PermissionStatus:A.b,PresentationAvailability:A.b,PresentationConnection:A.b,PresentationConnectionList:A.b,PresentationRequest:A.b,RelativeOrientationSensor:A.b,RemotePlayback:A.b,RTCDataChannel:A.b,DataChannel:A.b,RTCDTMFSender:A.b,RTCPeerConnection:A.b,webkitRTCPeerConnection:A.b,mozRTCPeerConnection:A.b,ScreenOrientation:A.b,Sensor:A.b,ServiceWorker:A.b,ServiceWorkerContainer:A.b,ServiceWorkerRegistration:A.b,SharedWorker:A.b,SpeechRecognition:A.b,webkitSpeechRecognition:A.b,SpeechSynthesis:A.b,SpeechSynthesisUtterance:A.b,VR:A.b,VRDevice:A.b,VRDisplay:A.b,VRSession:A.b,VisualViewport:A.b,WebSocket:A.b,Worker:A.b,WorkerPerformance:A.b,BluetoothDevice:A.b,BluetoothRemoteGATTCharacteristic:A.b,Clipboard:A.b,MojoInterfaceInterceptor:A.b,USB:A.b,IDBDatabase:A.b,IDBOpenDBRequest:A.b,IDBVersionChangeRequest:A.b,IDBRequest:A.b,IDBTransaction:A.b,AnalyserNode:A.b,RealtimeAnalyserNode:A.b,AudioBufferSourceNode:A.b,AudioDestinationNode:A.b,AudioNode:A.b,AudioScheduledSourceNode:A.b,AudioWorkletNode:A.b,BiquadFilterNode:A.b,ChannelMergerNode:A.b,AudioChannelMerger:A.b,ChannelSplitterNode:A.b,AudioChannelSplitter:A.b,ConstantSourceNode:A.b,ConvolverNode:A.b,DelayNode:A.b,DynamicsCompressorNode:A.b,GainNode:A.b,AudioGainNode:A.b,IIRFilterNode:A.b,MediaElementAudioSourceNode:A.b,MediaStreamAudioDestinationNode:A.b,MediaStreamAudioSourceNode:A.b,OscillatorNode:A.b,Oscillator:A.b,PannerNode:A.b,AudioPannerNode:A.b,webkitAudioPannerNode:A.b,ScriptProcessorNode:A.b,JavaScriptAudioNode:A.b,StereoPannerNode:A.b,WaveShaperNode:A.b,EventTarget:A.b,File:A.S,FileList:A.db,FileWriter:A.dc,HTMLFormElement:A.de,Gamepad:A.a1,History:A.fz,HTMLCollection:A.aV,HTMLFormControlsCollection:A.aV,HTMLOptionsCollection:A.aV,ImageData:A.bU,HTMLImageElement:A.dj,IntersectionObserver:A.aW,IntersectionObserverEntry:A.fB,Location:A.fF,HTMLAudioElement:A.b1,HTMLMediaElement:A.b1,MediaList:A.fK,MIDIInputMap:A.du,MIDIOutputMap:A.dv,MimeType:A.a2,MimeTypeArray:A.dw,Document:A.o,DocumentFragment:A.o,HTMLDocument:A.o,ShadowRoot:A.o,XMLDocument:A.o,Attr:A.o,DocumentType:A.o,Node:A.o,NodeList:A.c8,RadioNodeList:A.c8,Plugin:A.a3,PluginArray:A.dJ,RTCStatsReport:A.dN,HTMLSelectElement:A.dP,SourceBuffer:A.V,SourceBufferList:A.dR,SpeechGrammar:A.a5,SpeechGrammarList:A.dS,SpeechRecognitionResult:A.a6,Storage:A.dU,CSSStyleSheet:A.Q,StyleSheet:A.Q,TextTrack:A.W,TextTrackCue:A.N,VTTCue:A.N,TextTrackCueList:A.dX,TextTrackList:A.dY,TimeRanges:A.hb,Touch:A.a8,TouchList:A.e_,TrackDefaultList:A.hc,URL:A.hh,HTMLVideoElement:A.e5,VideoTrackList:A.e6,Window:A.aF,DOMWindow:A.aF,DedicatedWorkerGlobalScope:A.ah,ServiceWorkerGlobalScope:A.ah,SharedWorkerGlobalScope:A.ah,WorkerGlobalScope:A.ah,CSSRuleList:A.eb,ClientRect:A.cs,DOMRect:A.cs,GamepadList:A.en,NamedNodeMap:A.cw,MozNamedAttrMap:A.cw,SpeechRecognitionResultList:A.eG,StyleSheetList:A.eM,IDBKeyRange:A.bZ,SVGLength:A.ad,SVGLengthList:A.dq,SVGNumber:A.ae,SVGNumberList:A.dG,SVGPointList:A.fS,SVGStringList:A.dV,SVGTransform:A.ag,SVGTransformList:A.e0,AudioBuffer:A.fd,AudioParamMap:A.d0,AudioTrackList:A.d1,AudioContext:A.ax,webkitAudioContext:A.ax,BaseAudioContext:A.ax,OfflineAudioContext:A.dH,WebGLBuffer:A.d3,WebGLContextEvent:A.bh,WebGLFramebuffer:A.dg,WebGLProgram:A.dK,WebGLRenderbuffer:A.dM,WebGLRenderingContext:A.cd,WebGL2RenderingContext:A.bw,WebGLShader:A.dQ,WebGLTexture:A.dZ,WebGLUniformLocation:A.e1})
hunkHelpers.setOrUpdateLeafTags({WebGL:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,webkitFileSystemDirectoryEntry:true,FileSystemDirectoryEntry:true,DirectoryReader:true,WebKitDirectoryReader:true,webkitFileSystemDirectoryReader:true,FileSystemDirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,webkitFileSystemEntry:true,FileSystemEntry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,webkitFileSystemFileEntry:true,FileSystemFileEntry:true,DOMFileSystem:true,WebKitFileSystem:true,webkitFileSystem:true,FileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,GeolocationPosition:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,GeolocationPositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL2RenderingContextBase:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,BeforeUnloadEvent:true,Blob:false,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,DeviceOrientationEvent:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,MathMLElement:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CompositionEvent:true,CustomEvent:true,DeviceMotionEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FocusEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,KeyboardEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MouseEvent:true,DragEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PointerEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TextEvent:true,TouchEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,UIEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,WheelEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,Event:false,InputEvent:false,SubmitEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerRegistration:true,SharedWorker:true,SpeechRecognition:true,webkitSpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,IntersectionObserver:true,IntersectionObserverEntry:true,Location:true,HTMLAudioElement:true,HTMLMediaElement:false,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchList:true,TrackDefaultList:true,URL:true,HTMLVideoElement:true,VideoTrackList:true,Window:true,DOMWindow:true,DedicatedWorkerGlobalScope:true,ServiceWorkerGlobalScope:true,SharedWorkerGlobalScope:true,WorkerGlobalScope:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,IDBKeyRange:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLContextEvent:true,WebGLFramebuffer:true,WebGLProgram:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true})
A.bt.$nativeSuperclassTag="ArrayBufferView"
A.cx.$nativeSuperclassTag="ArrayBufferView"
A.cy.$nativeSuperclassTag="ArrayBufferView"
A.c3.$nativeSuperclassTag="ArrayBufferView"
A.cz.$nativeSuperclassTag="ArrayBufferView"
A.cA.$nativeSuperclassTag="ArrayBufferView"
A.c4.$nativeSuperclassTag="ArrayBufferView"
A.cC.$nativeSuperclassTag="EventTarget"
A.cD.$nativeSuperclassTag="EventTarget"
A.cF.$nativeSuperclassTag="EventTarget"
A.cG.$nativeSuperclassTag="EventTarget"})()
Function.prototype.$1=function(a){return this(a)}
Function.prototype.$0=function(){return this()}
Function.prototype.$2=function(a,b){return this(a,b)}
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
var s=A.mR
if(typeof dartMainRunner==="function")dartMainRunner(s,[])
else s([])})})()