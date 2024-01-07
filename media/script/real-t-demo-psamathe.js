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
a[c]=function(){a[c]=function(){A.nF(b)}
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
if(a[b]!==s)A.nH(b)
a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s)convertToFastObject(a[s])}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.jo(b)
return new s(c,this)}:function(){if(s===null)s=A.jo(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.jo(a).prototype
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
jt(a,b,c,d){return{i:a,p:b,e:c,x:d}},
iL(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.jq==null){A.ns()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw A.d(A.ka("Return interceptor for "+A.o(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.ig
if(o==null)o=$.ig=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=A.nz(a)
if(p!=null)return p
if(typeof a=="function")return B.F
s=Object.getPrototypeOf(a)
if(s==null)return B.t
if(s===Object.prototype)return B.t
if(typeof q=="function"){o=$.ig
if(o==null)o=$.ig=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:B.j,enumerable:false,writable:true,configurable:true})
return B.j}return B.j},
lI(a,b){if(a<0||a>4294967295)throw A.d(A.e3(a,0,4294967295,"length",null))
return J.jR(A.k(new Array(a),b.h("B<0>")),b)},
jQ(a,b){if(a<0)throw A.d(A.aI("Length must be a non-negative integer: "+a,null))
return A.k(new Array(a),b.h("B<0>"))},
jR(a,b){a.fixed$length=Array
return a},
aE(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.c4.prototype
return J.dE.prototype}if(typeof a=="string")return J.bt.prototype
if(a==null)return J.c5.prototype
if(typeof a=="boolean")return J.dC.prototype
if(Array.isArray(a))return J.B.prototype
if(typeof a!="object"){if(typeof a=="function")return J.av.prototype
if(typeof a=="symbol")return J.bv.prototype
if(typeof a=="bigint")return J.bu.prototype
return a}if(a instanceof A.u)return a
return J.iL(a)},
iK(a){if(typeof a=="string")return J.bt.prototype
if(a==null)return a
if(Array.isArray(a))return J.B.prototype
if(typeof a!="object"){if(typeof a=="function")return J.av.prototype
if(typeof a=="symbol")return J.bv.prototype
if(typeof a=="bigint")return J.bu.prototype
return a}if(a instanceof A.u)return a
return J.iL(a)},
fA(a){if(a==null)return a
if(Array.isArray(a))return J.B.prototype
if(typeof a!="object"){if(typeof a=="function")return J.av.prototype
if(typeof a=="symbol")return J.bv.prototype
if(typeof a=="bigint")return J.bu.prototype
return a}if(a instanceof A.u)return a
return J.iL(a)},
fB(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.av.prototype
if(typeof a=="symbol")return J.bv.prototype
if(typeof a=="bigint")return J.bu.prototype
return a}if(a instanceof A.u)return a
return J.iL(a)},
iU(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.aE(a).J(a,b)},
ld(a,b){if(typeof b==="number")if(Array.isArray(a)||typeof a=="string"||A.nv(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.iK(a).m(a,b)},
le(a,b,c,d){return J.fB(a).dg(a,b,c,d)},
lf(a,b,c,d){return J.fB(a).dr(a,b,c,d)},
lg(a,b){return J.fA(a).q(a,b)},
fD(a,b){return J.fA(a).v(a,b)},
lh(a){return J.fA(a).gu(a)},
iV(a){return J.aE(a).gt(a)},
li(a){return J.fB(a).gdL(a)},
d0(a){return J.fA(a).gR(a)},
fE(a){return J.iK(a).gj(a)},
lj(a){return J.aE(a).gC(a)},
lk(a,b,c){return J.fA(a).c0(a,b,c)},
ll(a,b){return J.aE(a).c3(a,b)},
d1(a){return J.aE(a).l(a)},
bs:function bs(){},
dC:function dC(){},
c5:function c5(){},
a:function a(){},
ba:function ba(){},
e0:function e0(){},
cr:function cr(){},
av:function av(){},
bu:function bu(){},
bv:function bv(){},
B:function B(a){this.$ti=a},
h3:function h3(a){this.$ti=a},
bm:function bm(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
c6:function c6(){},
c4:function c4(){},
dE:function dE(){},
bt:function bt(){}},A={j1:function j1(){},
cq(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
k8(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
m1(a,b,c){return A.k8(A.cq(A.cq(c,a),b))},
fz(a,b,c){return a},
js(a){var s,r
for(s=$.U.length,r=0;r<s;++r)if(a===$.U[r])return!0
return!1},
j0(){return new A.bg("No element")},
dG:function dG(a){this.a=a},
iR:function iR(){},
hu:function hu(){},
c_:function c_(){},
ax:function ax(){},
bw:function bw(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bc:function bc(a,b,c){this.a=a
this.b=b
this.$ti=c},
N:function N(){},
bD:function bD(a){this.a=a},
kZ(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
nv(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.da.b(a)},
o(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.d1(a)
return s},
cj(a){var s,r=$.k1
if(r==null)r=$.k1=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
lX(a,b){var s,r,q,p,o,n=null,m=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(m==null)return n
if(3>=m.length)return A.c(m,3)
s=m[3]
if(b<2||b>36)throw A.d(A.e3(b,2,36,"radix",n))
if(b===10&&s!=null)return parseInt(a,10)
if(b<10||s==null){r=b<=10?47+b:86+b
q=m[1]
for(p=q.length,o=0;o<p;++o)if((q.charCodeAt(o)|32)>r)return n}return parseInt(a,b)},
hn(a){return A.lO(a)},
lO(a){var s,r,q,p
if(a instanceof A.u)return A.R(A.af(a),null)
s=J.aE(a)
if(s===B.E||s===B.G||t.cr.b(a)){r=B.l(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.R(A.af(a),null)},
lY(a){if(typeof a=="number"||A.cV(a))return J.d1(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.aK)return a.l(0)
return"Instance of '"+A.hn(a)+"'"},
bf(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
lW(a){var s=A.bf(a).getFullYear()+0
return s},
lU(a){var s=A.bf(a).getMonth()+1
return s},
lQ(a){var s=A.bf(a).getDate()+0
return s},
lR(a){var s=A.bf(a).getHours()+0
return s},
lT(a){var s=A.bf(a).getMinutes()+0
return s},
lV(a){var s=A.bf(a).getSeconds()+0
return s},
lS(a){var s=A.bf(a).getMilliseconds()+0
return s},
aN(a,b,c){var s,r,q={}
q.a=0
s=[]
r=[]
q.a=b.length
B.a.a0(s,b)
q.b=""
if(c!=null&&c.a!==0)c.v(0,new A.hm(q,r,s))
return J.ll(a,new A.dD(B.J,0,s,r,0))},
lP(a,b,c){var s,r,q
if(Array.isArray(b))s=c==null||c.a===0
else s=!1
if(s){r=b.length
if(r===0){if(!!a.$0)return a.$0()}else if(r===1){if(!!a.$1)return a.$1(b[0])}else if(r===2){if(!!a.$2)return a.$2(b[0],b[1])}else if(r===3){if(!!a.$3)return a.$3(b[0],b[1],b[2])}else if(r===4){if(!!a.$4)return a.$4(b[0],b[1],b[2],b[3])}else if(r===5)if(!!a.$5)return a.$5(b[0],b[1],b[2],b[3],b[4])
q=a[""+"$"+r]
if(q!=null)return q.apply(a,b)}return A.lN(a,b,c)},
lN(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g=Array.isArray(b)?b:A.h8(b,t.z),f=g.length,e=a.$R
if(f<e)return A.aN(a,g,c)
s=a.$D
r=s==null
q=!r?s():null
p=J.aE(a)
o=p.$C
if(typeof o=="string")o=p[o]
if(r){if(c!=null&&c.a!==0)return A.aN(a,g,c)
if(f===e)return o.apply(a,g)
return A.aN(a,g,c)}if(Array.isArray(q)){if(c!=null&&c.a!==0)return A.aN(a,g,c)
n=e+q.length
if(f>n)return A.aN(a,g,null)
if(f<n){m=q.slice(f-e)
if(g===b)g=A.h8(g,t.z)
B.a.a0(g,m)}return o.apply(a,g)}else{if(f>e)return A.aN(a,g,c)
if(g===b)g=A.h8(g,t.z)
l=Object.keys(q)
if(c==null)for(r=l.length,k=0;k<l.length;l.length===r||(0,A.M)(l),++k){j=q[A.T(l[k])]
if(B.n===j)return A.aN(a,g,c)
B.a.k(g,j)}else{for(r=l.length,i=0,k=0;k<l.length;l.length===r||(0,A.M)(l),++k){h=A.T(l[k])
if(c.du(0,h)){++i
B.a.k(g,c.m(0,h))}else{j=q[h]
if(B.n===j)return A.aN(a,g,c)
B.a.k(g,j)}}if(i!==c.a)return A.aN(a,g,c)}return o.apply(a,g)}},
nq(a){throw A.d(A.kO(a))},
c(a,b){if(a==null)J.fE(a)
throw A.d(A.jp(a,b))},
jp(a,b){var s,r="index"
if(!A.iA(b))return new A.ar(!0,b,r,null)
s=A.a2(J.fE(a))
if(b<0||b>=s)return A.I(b,s,a,r)
return A.k2(b,r)},
kO(a){return new A.ar(!0,a,null,null)},
d(a){return A.kU(new Error(),a)},
kU(a,b){var s
if(b==null)b=new A.az()
a.dartException=b
s=A.nI
if("defineProperty" in Object){Object.defineProperty(a,"message",{get:s})
a.name=""}else a.toString=s
return a},
nI(){return J.d1(this.dartException)},
aH(a){throw A.d(a)},
nG(a,b){throw A.kU(b,a)},
M(a){throw A.d(A.as(a))},
aA(a){var s,r,q,p,o,n
a=A.nE(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.k([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.hN(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
hO(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
k9(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
j2(a,b){var s=b==null,r=s?null:b.method
return new A.dF(a,r,s?null:b.receiver)},
aq(a){var s
if(a==null)return new A.hi(a)
if(a instanceof A.c0){s=a.a
return A.aY(a,s==null?t.K.a(s):s)}if(typeof a!=="object")return a
if("dartException" in a)return A.aY(a,a.dartException)
return A.nd(a)},
aY(a,b){if(t.V.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
nd(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.e.bN(r,16)&8191)===10)switch(q){case 438:return A.aY(a,A.j2(A.o(s)+" (Error "+q+")",null))
case 445:case 5007:A.o(s)
return A.aY(a,new A.ch())}}if(a instanceof TypeError){p=$.l1()
o=$.l2()
n=$.l3()
m=$.l4()
l=$.l7()
k=$.l8()
j=$.l6()
$.l5()
i=$.la()
h=$.l9()
g=p.T(s)
if(g!=null)return A.aY(a,A.j2(A.T(s),g))
else{g=o.T(s)
if(g!=null){g.method="call"
return A.aY(a,A.j2(A.T(s),g))}else if(n.T(s)!=null||m.T(s)!=null||l.T(s)!=null||k.T(s)!=null||j.T(s)!=null||m.T(s)!=null||i.T(s)!=null||h.T(s)!=null){A.T(s)
return A.aY(a,new A.ch())}}return A.aY(a,new A.er(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.co()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.aY(a,new A.ar(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.co()
return a},
aF(a){var s
if(a instanceof A.c0)return a.b
if(a==null)return new A.cL(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.cL(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
kW(a){if(a==null)return J.iV(a)
if(typeof a=="object")return A.cj(a)
return J.iV(a)},
nn(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.i(0,a[s],a[r])}return b},
mP(a,b,c,d,e,f){t.Z.a(a)
switch(A.a2(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.d(A.dq("Unsupported number of arguments for wrapped closure"))},
bk(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=A.nk(a,b)
a.$identity=s
return s},
nk(a,b){var s
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
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.mP)},
lu(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.ed().constructor.prototype):Object.create(new A.bn(null,null).constructor.prototype)
s.$initialize=s.constructor
if(h)r=function static_tear_off(){this.$initialize()}
else r=function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.jF(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.lq(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.jF(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
lq(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.d("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.ln)}throw A.d("Error in functionType of tearoff")},
lr(a,b,c,d){var s=A.jE
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
jF(a,b,c,d){var s,r
if(c)return A.lt(a,b,d)
s=b.length
r=A.lr(s,d,a,b)
return r},
ls(a,b,c,d){var s=A.jE,r=A.lo
switch(b?-1:a){case 0:throw A.d(new A.e6("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
lt(a,b,c){var s,r
if($.jC==null)$.jC=A.jB("interceptor")
if($.jD==null)$.jD=A.jB("receiver")
s=b.length
r=A.ls(s,c,a,b)
return r},
jo(a){return A.lu(a)},
ln(a,b){return A.ip(v.typeUniverse,A.af(a.a),b)},
jE(a){return a.a},
lo(a){return a.b},
jB(a){var s,r,q,p=new A.bn("receiver","interceptor"),o=J.jR(Object.getOwnPropertyNames(p),t.X)
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw A.d(A.aI("Field name "+a+" not found.",null))},
nF(a){throw A.d(new A.eE(a))},
kS(a){return v.getIsolateTag(a)},
ow(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
nz(a){var s,r,q,p,o,n=A.T($.kT.$1(a)),m=$.iJ[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.iP[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.mB($.kN.$2(a,n))
if(q!=null){m=$.iJ[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.iP[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.iQ(s)
$.iJ[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.iP[n]=s
return s}if(p==="-"){o=A.iQ(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.kX(a,s)
if(p==="*")throw A.d(A.ka(n))
if(v.leafTags[n]===true){o=A.iQ(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.kX(a,s)},
kX(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.jt(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
iQ(a){return J.jt(a,!1,null,!!a.$ir)},
nD(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.iQ(s)
else return J.jt(s,c,null,null)},
ns(){if(!0===$.jq)return
$.jq=!0
A.nt()},
nt(){var s,r,q,p,o,n,m,l
$.iJ=Object.create(null)
$.iP=Object.create(null)
A.nr()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.kY.$1(o)
if(n!=null){m=A.nD(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
nr(){var s,r,q,p,o,n,m=B.u()
m=A.bP(B.v,A.bP(B.w,A.bP(B.m,A.bP(B.m,A.bP(B.x,A.bP(B.y,A.bP(B.z(B.l),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.kT=new A.iM(p)
$.kN=new A.iN(o)
$.kY=new A.iO(n)},
bP(a,b){return a(b)||b},
nl(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
nE(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
bT:function bT(a,b){this.a=a
this.$ti=b},
bS:function bS(){},
bU:function bU(a,b,c){this.a=a
this.b=b
this.$ti=c},
dD:function dD(a,b,c,d,e){var _=this
_.a=a
_.c=b
_.d=c
_.e=d
_.f=e},
hm:function hm(a,b,c){this.a=a
this.b=b
this.c=c},
hN:function hN(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
ch:function ch(){},
dF:function dF(a,b,c){this.a=a
this.b=b
this.c=c},
er:function er(a){this.a=a},
hi:function hi(a){this.a=a},
c0:function c0(a,b){this.a=a
this.b=b},
cL:function cL(a){this.a=a
this.b=null},
aK:function aK(){},
df:function df(){},
dg:function dg(){},
eg:function eg(){},
ed:function ed(){},
bn:function bn(a,b){this.a=a
this.b=b},
eE:function eE(a){this.a=a},
e6:function e6(a){this.a=a},
ii:function ii(){},
a6:function a6(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
h6:function h6(a,b){this.a=a
this.b=b
this.c=null},
bb:function bb(a,b){this.a=a
this.$ti=b},
dI:function dI(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
iM:function iM(a){this.a=a},
iN:function iN(a){this.a=a},
iO:function iO(a){this.a=a},
kv(a){return a},
cU(a){return a},
bi(a,b,c){if(a>>>0!==a||a>=c)throw A.d(A.jp(b,a))},
dP:function dP(){},
cd:function cd(){},
dQ:function dQ(){},
bz:function bz(){},
cb:function cb(){},
cc:function cc(){},
ca:function ca(){},
dR:function dR(){},
dS:function dS(){},
dT:function dT(){},
dU:function dU(){},
ce:function ce(){},
dV:function dV(){},
cf:function cf(){},
dW:function dW(){},
cE:function cE(){},
cF:function cF(){},
cG:function cG(){},
cH:function cH(){},
k3(a,b){var s=b.c
return s==null?b.c=A.jc(a,b.y,!0):s},
j4(a,b){var s=b.c
return s==null?b.c=A.cQ(a,"W",[b.y]):s},
m0(a){var s=a.d
if(s!=null)return s
return a.d=new Map()},
k4(a){var s=a.x
if(s===6||s===7||s===8)return A.k4(a.y)
return s===12||s===13},
m_(a){return a.at},
a3(a){return A.fm(v.typeUniverse,a,!1)},
aW(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.x
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.y
r=A.aW(a,s,a0,a1)
if(r===s)return b
return A.kr(a,r,!0)
case 7:s=b.y
r=A.aW(a,s,a0,a1)
if(r===s)return b
return A.jc(a,r,!0)
case 8:s=b.y
r=A.aW(a,s,a0,a1)
if(r===s)return b
return A.kq(a,r,!0)
case 9:q=b.z
p=A.cY(a,q,a0,a1)
if(p===q)return b
return A.cQ(a,b.y,p)
case 10:o=b.y
n=A.aW(a,o,a0,a1)
m=b.z
l=A.cY(a,m,a0,a1)
if(n===o&&l===m)return b
return A.ja(a,n,l)
case 12:k=b.y
j=A.aW(a,k,a0,a1)
i=b.z
h=A.na(a,i,a0,a1)
if(j===k&&h===i)return b
return A.kp(a,j,h)
case 13:g=b.z
a1+=g.length
f=A.cY(a,g,a0,a1)
o=b.y
n=A.aW(a,o,a0,a1)
if(f===g&&n===o)return b
return A.jb(a,n,f,!0)
case 14:e=b.y
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw A.d(A.d6("Attempted to substitute unexpected RTI kind "+c))}},
cY(a,b,c,d){var s,r,q,p,o=b.length,n=A.iq(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.aW(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
nb(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.iq(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.aW(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
na(a,b,c,d){var s,r=b.a,q=A.cY(a,r,c,d),p=b.b,o=A.cY(a,p,c,d),n=b.c,m=A.nb(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.eM()
s.a=q
s.b=o
s.c=m
return s},
k(a,b){a[v.arrayRti]=b
return a},
kQ(a){var s,r=a.$S
if(r!=null){if(typeof r=="number")return A.np(r)
s=a.$S()
return s}return null},
nu(a,b){var s
if(A.k4(b))if(a instanceof A.aK){s=A.kQ(a)
if(s!=null)return s}return A.af(a)},
af(a){if(a instanceof A.u)return A.y(a)
if(Array.isArray(a))return A.ap(a)
return A.jj(J.aE(a))},
ap(a){var s=a[v.arrayRti],r=t.b
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
y(a){var s=a.$ti
return s!=null?s:A.jj(a)},
jj(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.mO(a,s)},
mO(a,b){var s=a instanceof A.aK?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.mx(v.typeUniverse,s.name)
b.$ccache=r
return r},
np(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.fm(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
no(a){return A.bl(A.y(a))},
n9(a){var s=a instanceof A.aK?A.kQ(a):null
if(s!=null)return s
if(t.bW.b(a))return J.lj(a).a
if(Array.isArray(a))return A.ap(a)
return A.af(a)},
bl(a){var s=a.w
return s==null?a.w=A.kA(a):s},
kA(a){var s,r,q=a.at,p=q.replace(/\*/g,"")
if(p===q)return a.w=new A.io(a)
s=A.fm(v.typeUniverse,p,!0)
r=s.w
return r==null?s.w=A.kA(s):r},
ag(a){return A.bl(A.fm(v.typeUniverse,a,!1))},
mN(a){var s,r,q,p,o,n,m=this
if(m===t.K)return A.aD(m,a,A.mU)
if(!A.aG(m))if(!(m===t._))s=!1
else s=!0
else s=!0
if(s)return A.aD(m,a,A.mY)
s=m.x
if(s===7)return A.aD(m,a,A.mL)
if(s===1)return A.aD(m,a,A.kG)
r=s===6?m.y:m
q=r.x
if(q===8)return A.aD(m,a,A.mQ)
if(r===t.S)p=A.iA
else if(r===t.i||r===t.H)p=A.mT
else if(r===t.N)p=A.mW
else p=r===t.y?A.cV:null
if(p!=null)return A.aD(m,a,p)
if(q===9){o=r.y
if(r.z.every(A.nx)){m.r="$i"+o
if(o==="j")return A.aD(m,a,A.mS)
return A.aD(m,a,A.mX)}}else if(q===11){n=A.nl(r.y,r.z)
return A.aD(m,a,n==null?A.kG:n)}return A.aD(m,a,A.mJ)},
aD(a,b,c){a.b=c
return a.b(b)},
mM(a){var s,r=this,q=A.mI
if(!A.aG(r))if(!(r===t._))s=!1
else s=!0
else s=!0
if(s)q=A.mC
else if(r===t.K)q=A.mA
else{s=A.cZ(r)
if(s)q=A.mK}r.a=q
return r.a(a)},
fx(a){var s,r=a.x
if(!A.aG(a))if(!(a===t._))if(!(a===t.G))if(r!==7)if(!(r===6&&A.fx(a.y)))s=r===8&&A.fx(a.y)||a===t.P||a===t.T
else s=!0
else s=!0
else s=!0
else s=!0
else s=!0
return s},
mJ(a){var s=this
if(a==null)return A.fx(s)
return A.nw(v.typeUniverse,A.nu(a,s),s)},
mL(a){if(a==null)return!0
return this.y.b(a)},
mX(a){var s,r=this
if(a==null)return A.fx(r)
s=r.r
if(a instanceof A.u)return!!a[s]
return!!J.aE(a)[s]},
mS(a){var s,r=this
if(a==null)return A.fx(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.r
if(a instanceof A.u)return!!a[s]
return!!J.aE(a)[s]},
mI(a){var s,r=this
if(a==null){s=A.cZ(r)
if(s)return a}else if(r.b(a))return a
A.kB(a,r)},
mK(a){var s=this
if(a==null)return a
else if(s.b(a))return a
A.kB(a,s)},
kB(a,b){throw A.d(A.mm(A.ki(a,A.R(b,null))))},
ki(a,b){return A.br(a)+": type '"+A.R(A.n9(a),null)+"' is not a subtype of type '"+b+"'"},
mm(a){return new A.cO("TypeError: "+a)},
O(a,b){return new A.cO("TypeError: "+A.ki(a,b))},
mQ(a){var s=this,r=s.x===6?s.y:s
return r.y.b(a)||A.j4(v.typeUniverse,r).b(a)},
mU(a){return a!=null},
mA(a){if(a!=null)return a
throw A.d(A.O(a,"Object"))},
mY(a){return!0},
mC(a){return a},
kG(a){return!1},
cV(a){return!0===a||!1===a},
jd(a){if(!0===a)return!0
if(!1===a)return!1
throw A.d(A.O(a,"bool"))},
om(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.d(A.O(a,"bool"))},
ol(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.d(A.O(a,"bool?"))},
ir(a){if(typeof a=="number")return a
throw A.d(A.O(a,"double"))},
oo(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.O(a,"double"))},
on(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.O(a,"double?"))},
iA(a){return typeof a=="number"&&Math.floor(a)===a},
a2(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.d(A.O(a,"int"))},
oq(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.d(A.O(a,"int"))},
op(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.d(A.O(a,"int?"))},
mT(a){return typeof a=="number"},
ku(a){if(typeof a=="number")return a
throw A.d(A.O(a,"num"))},
or(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.O(a,"num"))},
mz(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.O(a,"num?"))},
mW(a){return typeof a=="string"},
T(a){if(typeof a=="string")return a
throw A.d(A.O(a,"String"))},
os(a){if(typeof a=="string")return a
if(a==null)return a
throw A.d(A.O(a,"String"))},
mB(a){if(typeof a=="string")return a
if(a==null)return a
throw A.d(A.O(a,"String?"))},
kJ(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.R(a[q],b)
return s},
n4(a,b){var s,r,q,p,o,n,m=a.y,l=a.z
if(""===m)return"("+A.kJ(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.R(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
kC(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=", "
if(a6!=null){s=a6.length
if(a5==null){a5=A.k([],t.s)
r=null}else r=a5.length
q=a5.length
for(p=s;p>0;--p)B.a.k(a5,"T"+(q+p))
for(o=t.X,n=t._,m="<",l="",p=0;p<s;++p,l=a3){k=a5.length
j=k-1-p
if(!(j>=0))return A.c(a5,j)
m=B.h.ag(m+l,a5[j])
i=a6[p]
h=i.x
if(!(h===2||h===3||h===4||h===5||i===o))if(!(i===n))k=!1
else k=!0
else k=!0
if(!k)m+=" extends "+A.R(i,a5)}m+=">"}else{m=""
r=null}o=a4.y
g=a4.z
f=g.a
e=f.length
d=g.b
c=d.length
b=g.c
a=b.length
a0=A.R(o,a5)
for(a1="",a2="",p=0;p<e;++p,a2=a3)a1+=a2+A.R(f[p],a5)
if(c>0){a1+=a2+"["
for(a2="",p=0;p<c;++p,a2=a3)a1+=a2+A.R(d[p],a5)
a1+="]"}if(a>0){a1+=a2+"{"
for(a2="",p=0;p<a;p+=3,a2=a3){a1+=a2
if(b[p+1])a1+="required "
a1+=A.R(b[p+2],a5)+" "+b[p]}a1+="}"}if(r!=null){a5.toString
a5.length=r}return m+"("+a1+") => "+a0},
R(a,b){var s,r,q,p,o,n,m,l=a.x
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=A.R(a.y,b)
return s}if(l===7){r=a.y
s=A.R(r,b)
q=r.x
return(q===12||q===13?"("+s+")":s)+"?"}if(l===8)return"FutureOr<"+A.R(a.y,b)+">"
if(l===9){p=A.nc(a.y)
o=a.z
return o.length>0?p+("<"+A.kJ(o,b)+">"):p}if(l===11)return A.n4(a,b)
if(l===12)return A.kC(a,b,null)
if(l===13)return A.kC(a.y,b,a.z)
if(l===14){n=a.y
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.c(b,n)
return b[n]}return"?"},
nc(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
my(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
mx(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.fm(a,b,!1)
else if(typeof m=="number"){s=m
r=A.cR(a,5,"#")
q=A.iq(s)
for(p=0;p<s;++p)q[p]=r
o=A.cQ(a,b,q)
n[b]=o
return o}else return m},
mv(a,b){return A.ks(a.tR,b)},
mu(a,b){return A.ks(a.eT,b)},
fm(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.km(A.kk(a,null,b,c))
r.set(b,s)
return s},
ip(a,b,c){var s,r,q=b.Q
if(q==null)q=b.Q=new Map()
s=q.get(c)
if(s!=null)return s
r=A.km(A.kk(a,b,c,!0))
q.set(c,r)
return r},
mw(a,b,c){var s,r,q,p=b.as
if(p==null)p=b.as=new Map()
s=c.at
r=p.get(s)
if(r!=null)return r
q=A.ja(a,b,c.x===10?c.z:[c])
p.set(s,q)
return q},
aC(a,b){b.a=A.mM
b.b=A.mN
return b},
cR(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.a_(null,null)
s.x=b
s.at=c
r=A.aC(a,s)
a.eC.set(c,r)
return r},
kr(a,b,c){var s,r=b.at+"*",q=a.eC.get(r)
if(q!=null)return q
s=A.mr(a,b,r,c)
a.eC.set(r,s)
return s},
mr(a,b,c,d){var s,r,q
if(d){s=b.x
if(!A.aG(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new A.a_(null,null)
q.x=6
q.y=b
q.at=c
return A.aC(a,q)},
jc(a,b,c){var s,r=b.at+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.mq(a,b,r,c)
a.eC.set(r,s)
return s},
mq(a,b,c,d){var s,r,q,p
if(d){s=b.x
if(!A.aG(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&A.cZ(b.y)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.G)return t.P
else if(s===6){q=b.y
if(q.x===8&&A.cZ(q.y))return q
else return A.k3(a,b)}}p=new A.a_(null,null)
p.x=7
p.y=b
p.at=c
return A.aC(a,p)},
kq(a,b,c){var s,r=b.at+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.mo(a,b,r,c)
a.eC.set(r,s)
return s},
mo(a,b,c,d){var s,r,q
if(d){s=b.x
if(!A.aG(b))if(!(b===t._))r=!1
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return A.cQ(a,"W",[b])
else if(b===t.P||b===t.T)return t.bc}q=new A.a_(null,null)
q.x=8
q.y=b
q.at=c
return A.aC(a,q)},
ms(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.a_(null,null)
s.x=14
s.y=b
s.at=q
r=A.aC(a,s)
a.eC.set(q,r)
return r},
cP(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].at
return s},
mn(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].at}return s},
cQ(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.cP(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.a_(null,null)
r.x=9
r.y=b
r.z=c
if(c.length>0)r.c=c[0]
r.at=p
q=A.aC(a,r)
a.eC.set(p,q)
return q},
ja(a,b,c){var s,r,q,p,o,n
if(b.x===10){s=b.y
r=b.z.concat(c)}else{r=c
s=b}q=s.at+(";<"+A.cP(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.a_(null,null)
o.x=10
o.y=s
o.z=r
o.at=q
n=A.aC(a,o)
a.eC.set(q,n)
return n},
mt(a,b,c){var s,r,q="+"+(b+"("+A.cP(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.a_(null,null)
s.x=11
s.y=b
s.z=c
s.at=q
r=A.aC(a,s)
a.eC.set(q,r)
return r},
kp(a,b,c){var s,r,q,p,o,n=b.at,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.cP(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.cP(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.mn(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.a_(null,null)
p.x=12
p.y=b
p.z=c
p.at=r
o=A.aC(a,p)
a.eC.set(r,o)
return o},
jb(a,b,c,d){var s,r=b.at+("<"+A.cP(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.mp(a,b,c,r,d)
a.eC.set(r,s)
return s},
mp(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.iq(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.x===1){r[p]=o;++q}}if(q>0){n=A.aW(a,b,r,0)
m=A.cY(a,c,r,0)
return A.jb(a,n,m,c!==m)}}l=new A.a_(null,null)
l.x=13
l.y=b
l.z=c
l.at=d
return A.aC(a,l)},
kk(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
km(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.mg(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.kl(a,r,l,k,!1)
else if(q===46)r=A.kl(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.aV(a.u,a.e,k.pop()))
break
case 94:k.push(A.ms(a.u,k.pop()))
break
case 35:k.push(A.cR(a.u,5,"#"))
break
case 64:k.push(A.cR(a.u,2,"@"))
break
case 126:k.push(A.cR(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.mi(a,k)
break
case 38:A.mh(a,k)
break
case 42:p=a.u
k.push(A.kr(p,A.aV(p,a.e,k.pop()),a.n))
break
case 63:p=a.u
k.push(A.jc(p,A.aV(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.kq(p,A.aV(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.mf(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.kn(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.mk(a.u,a.e,o)
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
return A.aV(a.u,a.e,m)},
mg(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
kl(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.x===10)o=o.y
n=A.my(s,o.y)[p]
if(n==null)A.aH('No "'+p+'" in "'+A.m_(o)+'"')
d.push(A.ip(s,o,n))}else d.push(p)
return m},
mi(a,b){var s,r=a.u,q=A.kj(a,b),p=b.pop()
if(typeof p=="string")b.push(A.cQ(r,p,q))
else{s=A.aV(r,a.e,p)
switch(s.x){case 12:b.push(A.jb(r,s,q,a.n))
break
default:b.push(A.ja(r,s,q))
break}}},
mf(a,b){var s,r,q,p,o,n=null,m=a.u,l=b.pop()
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
s=r}q=A.kj(a,b)
l=b.pop()
switch(l){case-3:l=b.pop()
if(s==null)s=m.sEA
if(r==null)r=m.sEA
p=A.aV(m,a.e,l)
o=new A.eM()
o.a=q
o.b=s
o.c=r
b.push(A.kp(m,p,o))
return
case-4:b.push(A.mt(m,b.pop(),q))
return
default:throw A.d(A.d6("Unexpected state under `()`: "+A.o(l)))}},
mh(a,b){var s=b.pop()
if(0===s){b.push(A.cR(a.u,1,"0&"))
return}if(1===s){b.push(A.cR(a.u,4,"1&"))
return}throw A.d(A.d6("Unexpected extended operation "+A.o(s)))},
kj(a,b){var s=b.splice(a.p)
A.kn(a.u,a.e,s)
a.p=b.pop()
return s},
aV(a,b,c){if(typeof c=="string")return A.cQ(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.mj(a,b,c)}else return c},
kn(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.aV(a,b,c[s])},
mk(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.aV(a,b,c[s])},
mj(a,b,c){var s,r,q=b.x
if(q===10){if(c===0)return b.y
s=b.z
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.y
q=b.x}else if(c===0)return b
if(q!==9)throw A.d(A.d6("Indexed base must be an interface type"))
s=b.z
if(c<=s.length)return s[c-1]
throw A.d(A.d6("Bad index "+c+" for "+b.l(0)))},
nw(a,b,c){var s,r=A.m0(b),q=r.get(c)
if(q!=null)return q
s=A.H(a,b,null,c,null)
r.set(c,s)
return s},
H(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(!A.aG(d))if(!(d===t._))s=!1
else s=!0
else s=!0
if(s)return!0
r=b.x
if(r===4)return!0
if(A.aG(b))return!1
if(b.x!==1)s=!1
else s=!0
if(s)return!0
q=r===14
if(q)if(A.H(a,c[b.y],c,d,e))return!0
p=d.x
s=b===t.P||b===t.T
if(s){if(p===8)return A.H(a,b,c,d.y,e)
return d===t.P||d===t.T||p===7||p===6}if(d===t.K){if(r===8)return A.H(a,b.y,c,d,e)
if(r===6)return A.H(a,b.y,c,d,e)
return r!==7}if(r===6)return A.H(a,b.y,c,d,e)
if(p===6){s=A.k3(a,d)
return A.H(a,b,c,s,e)}if(r===8){if(!A.H(a,b.y,c,d,e))return!1
return A.H(a,A.j4(a,b),c,d,e)}if(r===7){s=A.H(a,t.P,c,d,e)
return s&&A.H(a,b.y,c,d,e)}if(p===8){if(A.H(a,b,c,d.y,e))return!0
return A.H(a,b,c,A.j4(a,d),e)}if(p===7){s=A.H(a,b,c,t.P,e)
return s||A.H(a,b,c,d.y,e)}if(q)return!1
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
if(!A.H(a,j,c,i,e)||!A.H(a,i,e,j,c))return!1}return A.kF(a,b.y,c,d.y,e)}if(p===12){if(b===t.g)return!0
if(s)return!1
return A.kF(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return A.mR(a,b,c,d,e)}if(o&&p===11)return A.mV(a,b,c,d,e)
return!1},
kF(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!A.H(a3,a4.y,a5,a6.y,a7))return!1
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
if(!A.H(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.H(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.H(a3,k[h],a7,g,a5))return!1}f=s.c
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
if(!A.H(a3,e[a+2],a7,g,a5))return!1
break}}for(;b<d;){if(f[b+1])return!1
b+=3}return!0},
mR(a,b,c,d,e){var s,r,q,p,o,n,m,l=b.y,k=d.y
for(;l!==k;){s=a.tR[l]
if(s==null)return!1
if(typeof s=="string"){l=s
continue}r=s[k]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.ip(a,b,r[o])
return A.kt(a,p,null,c,d.z,e)}n=b.z
m=d.z
return A.kt(a,n,null,c,m,e)},
kt(a,b,c,d,e,f){var s,r,q,p=b.length
for(s=0;s<p;++s){r=b[s]
q=e[s]
if(!A.H(a,r,d,q,f))return!1}return!0},
mV(a,b,c,d,e){var s,r=b.z,q=d.z,p=r.length
if(p!==q.length)return!1
if(b.y!==d.y)return!1
for(s=0;s<p;++s)if(!A.H(a,r[s],c,q[s],e))return!1
return!0},
cZ(a){var s,r=a.x
if(!(a===t.P||a===t.T))if(!A.aG(a))if(r!==7)if(!(r===6&&A.cZ(a.y)))s=r===8&&A.cZ(a.y)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
nx(a){var s
if(!A.aG(a))if(!(a===t._))s=!1
else s=!0
else s=!0
return s},
aG(a){var s=a.x
return s===2||s===3||s===4||s===5||a===t.X},
ks(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
iq(a){return a>0?new Array(a):v.typeUniverse.sEA},
a_:function a_(a,b){var _=this
_.a=a
_.b=b
_.w=_.r=_.e=_.d=_.c=null
_.x=0
_.at=_.as=_.Q=_.z=_.y=null},
eM:function eM(){this.c=this.b=this.a=null},
io:function io(a){this.a=a},
eJ:function eJ(){},
cO:function cO(a){this.a=a},
m8(){var s,r,q={}
if(self.scheduleImmediate!=null)return A.ne()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(A.bk(new A.hX(q),1)).observe(s,{childList:true})
return new A.hW(q,s,r)}else if(self.setImmediate!=null)return A.nf()
return A.ng()},
m9(a){self.scheduleImmediate(A.bk(new A.hY(t.M.a(a)),0))},
ma(a){self.setImmediate(A.bk(new A.hZ(t.M.a(a)),0))},
mb(a){t.M.a(a)
A.ml(0,a)},
ml(a,b){var s=new A.il()
s.cY(a,b)
return s},
jl(a){return new A.ey(new A.D($.A,a.h("D<0>")),a.h("ey<0>"))},
jg(a,b){a.$2(0,null)
b.b=!0
return b.a},
is(a,b){A.mD(a,b)},
jf(a,b){var s,r,q=b.$ti
q.h("1/?").a(a)
s=a==null?q.c.a(a):a
if(!b.b)b.a.aI(s)
else{r=b.a
if(q.h("W<1>").b(s))r.bx(s)
else r.aK(s)}},
je(a,b){var s=A.aq(a),r=A.aF(a),q=b.b,p=b.a
if(q)p.a5(s,r)
else p.d2(s,r)},
mD(a,b){var s,r,q=new A.it(b),p=new A.iu(b)
if(a instanceof A.D)a.bO(q,p,t.z)
else{s=t.z
if(a instanceof A.D)a.b1(q,p,s)
else{r=new A.D($.A,t.c)
r.a=8
r.c=a
r.bO(q,p,s)}}},
jm(a){var s=function(b,c){return function(d,e){while(true)try{b(d,e)
break}catch(r){e=r
d=c}}}(a,1)
return $.A.b_(new A.iC(s),t.p,t.S,t.z)},
fG(a,b){var s=A.fz(a,"error",t.K)
return new A.bQ(s,b==null?A.jA(a):b)},
jA(a){var s
if(t.V.b(a)){s=a.gaA()
if(s!=null)return s}return B.C},
jJ(a,b){var s=a==null?b.a(a):a,r=new A.D($.A,b.h("D<0>"))
r.aI(s)
return r},
j9(a,b){var s,r,q
for(s=t.c;r=a.a,(r&4)!==0;)a=s.a(a.c)
if((r&24)!==0){q=b.ap()
b.am(a)
A.bK(b,q)}else{q=t.F.a(b.c)
b.bM(a)
a.aT(q)}},
me(a,b){var s,r,q,p={},o=p.a=a
for(s=t.c;r=o.a,(r&4)!==0;o=a){a=s.a(o.c)
p.a=a}if((r&24)===0){q=t.F.a(b.c)
b.bM(o)
p.a.aT(q)
return}if((r&16)===0&&b.c==null){b.am(o)
return}b.a^=2
A.bj(null,null,b.b,t.M.a(new A.i5(p,b)))},
bK(a,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c={},b=c.a=a
for(s=t.t,r=t.F,q=t.bz;!0;){p={}
o=b.a
n=(o&16)===0
m=!n
if(a0==null){if(m&&(o&1)===0){l=s.a(b.c)
A.fy(l.a,l.b)}return}p.a=a0
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
A.fy(i.a,i.b)
return}f=$.A
if(f!==g)$.A=g
else f=null
b=b.c
if((b&15)===8)new A.ic(p,c,m).$0()
else if(n){if((b&1)!==0)new A.ib(p,i).$0()}else if((b&2)!==0)new A.ia(c,p).$0()
if(f!=null)$.A=f
b=p.c
if(b instanceof A.D){o=p.a.$ti
o=o.h("W<2>").b(b)||!o.z[1].b(b)}else o=!1
if(o){q.a(b)
e=p.a.b
if((b.a&24)!==0){d=r.a(e.c)
e.c=null
a0=e.aq(d)
e.a=b.a&30|e.a&1
e.c=b.c
c.a=b
continue}else A.j9(b,e)
return}}e=p.a.b
d=r.a(e.c)
e.c=null
a0=e.aq(d)
b=p.b
o=p.c
if(!b){e.$ti.c.a(o)
e.a=8
e.c=o}else{s.a(o)
e.a=e.a&1|16
e.c=o}c.a=e
b=e}},
n5(a,b){var s
if(t.C.b(a))return b.b_(a,t.z,t.K,t.l)
s=t.v
if(s.b(a))return s.a(a)
throw A.d(A.jz(a,"onError",u.c))},
n_(){var s,r
for(s=$.bO;s!=null;s=$.bO){$.cX=null
r=s.b
$.bO=r
if(r==null)$.cW=null
s.a.$0()}},
n8(){$.jk=!0
try{A.n_()}finally{$.cX=null
$.jk=!1
if($.bO!=null)$.jw().$1(A.kP())}},
kL(a){var s=new A.ez(a),r=$.cW
if(r==null){$.bO=$.cW=s
if(!$.jk)$.jw().$1(A.kP())}else $.cW=r.b=s},
n7(a){var s,r,q,p=$.bO
if(p==null){A.kL(a)
$.cX=$.cW
return}s=new A.ez(a)
r=$.cX
if(r==null){s.b=p
$.bO=$.cX=s}else{q=r.b
s.b=q
$.cX=r.b=s
if(q==null)$.cW=s}},
ju(a){var s,r=null,q=$.A
if(B.d===q){A.bj(r,r,B.d,a)
return}s=!1
if(s){A.bj(r,r,q,t.M.a(a))
return}A.bj(r,r,q,t.M.a(q.bS(a)))},
o4(a,b){A.fz(a,"stream",t.K)
return new A.f9(b.h("f9<0>"))},
k6(a){return new A.ct(null,null,a.h("ct<0>"))},
kK(a){return},
kh(a,b,c){var s=b==null?A.nh():b
return t.h.A(c).h("1(2)").a(s)},
mc(a,b){if(b==null)b=A.nj()
if(t.k.b(b))return a.b_(b,t.z,t.K,t.l)
if(t.bo.b(b))return t.v.a(b)
throw A.d(A.aI("handleError callback must take either an Object (the error), or both an Object (the error) and a StackTrace.",null))},
n0(a){},
n2(a,b){A.fy(a,b)},
n1(){},
mG(a,b,c){var s,r,q=a.au(0),p=$.iS()
if(q!==p){s=t.O.a(new A.iv(b,c))
p=q.$ti
r=$.A
q.al(new A.aB(new A.D(r,p),8,s,null,p.h("@<1>").A(p.c).h("aB<1,2>")))}else b.aJ(c)},
fy(a,b){A.n7(new A.iB(a,b))},
kH(a,b,c,d,e){var s,r=$.A
if(r===c)return d.$0()
$.A=c
s=r
try{r=d.$0()
return r}finally{$.A=s}},
kI(a,b,c,d,e,f,g){var s,r=$.A
if(r===c)return d.$1(e)
$.A=c
s=r
try{r=d.$1(e)
return r}finally{$.A=s}},
n6(a,b,c,d,e,f,g,h,i){var s,r=$.A
if(r===c)return d.$2(e,f)
$.A=c
s=r
try{r=d.$2(e,f)
return r}finally{$.A=s}},
bj(a,b,c,d){t.M.a(d)
if(B.d!==c)d=c.bS(d)
A.kL(d)},
hX:function hX(a){this.a=a},
hW:function hW(a,b,c){this.a=a
this.b=b
this.c=c},
hY:function hY(a){this.a=a},
hZ:function hZ(a){this.a=a},
il:function il(){},
im:function im(a,b){this.a=a
this.b=b},
ey:function ey(a,b){this.a=a
this.b=!1
this.$ti=b},
it:function it(a){this.a=a},
iu:function iu(a){this.a=a},
iC:function iC(a){this.a=a},
bQ:function bQ(a,b){this.a=a
this.b=b},
aT:function aT(a,b){this.a=a
this.$ti=b},
ae:function ae(a,b,c,d,e){var _=this
_.ay=0
_.CW=_.ch=null
_.w=a
_.a=b
_.d=c
_.e=d
_.r=_.f=null
_.$ti=e},
cu:function cu(){},
ct:function ct(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.e=_.d=null
_.$ti=c},
aB:function aB(a,b,c,d,e){var _=this
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
i2:function i2(a,b){this.a=a
this.b=b},
i9:function i9(a,b){this.a=a
this.b=b},
i6:function i6(a){this.a=a},
i7:function i7(a){this.a=a},
i8:function i8(a,b,c){this.a=a
this.b=b
this.c=c},
i5:function i5(a,b){this.a=a
this.b=b},
i4:function i4(a,b){this.a=a
this.b=b},
i3:function i3(a,b,c){this.a=a
this.b=b
this.c=c},
ic:function ic(a,b,c){this.a=a
this.b=b
this.c=c},
id:function id(a){this.a=a},
ib:function ib(a,b){this.a=a
this.b=b},
ia:function ia(a,b){this.a=a
this.b=b},
ez:function ez(a){this.a=a
this.b=null},
aP:function aP(){},
hE:function hE(a,b){this.a=a
this.b=b},
hF:function hF(a,b){this.a=a
this.b=b},
hC:function hC(a){this.a=a},
hD:function hD(a,b,c){this.a=a
this.b=b
this.c=c},
cv:function cv(){},
cw:function cw(){},
bH:function bH(){},
bM:function bM(){},
cy:function cy(){},
cx:function cx(a,b){this.b=a
this.a=null
this.$ti=b},
cI:function cI(a){var _=this
_.a=0
_.c=_.b=null
_.$ti=a},
ih:function ih(a,b){this.a=a
this.b=b},
bI:function bI(a,b){var _=this
_.a=1
_.b=a
_.c=null
_.$ti=b},
f9:function f9(a){this.$ti=a},
iv:function iv(a,b){this.a=a
this.b=b},
cT:function cT(){},
iB:function iB(a,b){this.a=a
this.b=b},
f3:function f3(){},
ij:function ij(a,b){this.a=a
this.b=b},
ik:function ik(a,b,c){this.a=a
this.b=b
this.c=c},
lJ(a,b){return new A.a6(a.h("@<0>").A(b).h("a6<1,2>"))},
jU(a,b,c){return b.h("@<0>").A(c).h("jS<1,2>").a(A.nn(a,new A.a6(b.h("@<0>").A(c).h("a6<1,2>"))))},
jT(a,b){return new A.a6(a.h("@<0>").A(b).h("a6<1,2>"))},
lK(a,b,c){var s=A.lJ(b,c)
J.fD(a,new A.h7(s,b,c))
return s},
ha(a){var s,r={}
if(A.js(a))return"{...}"
s=new A.cp("")
try{B.a.k($.U,a)
s.a+="{"
r.a=!0
J.fD(a,new A.hb(r,s))
s.a+="}"}finally{if(0>=$.U.length)return A.c($.U,-1)
$.U.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
h7:function h7(a,b,c){this.a=a
this.b=b
this.c=c},
e:function e(){},
v:function v(){},
hb:function hb(a,b){this.a=a
this.b=b},
cS:function cS(){},
bx:function bx(){},
cs:function cs(){},
bN:function bN(){},
n3(a,b){var s,r,q,p=null
try{p=JSON.parse(a)}catch(r){s=A.aq(r)
q=A.jH(String(s))
throw A.d(q)}q=A.ix(p)
return q},
ix(a){var s
if(a==null)return null
if(typeof a!="object")return a
if(Object.getPrototypeOf(a)!==Array.prototype)return new A.eQ(a,Object.create(null))
for(s=0;s<a.length;++s)a[s]=A.ix(a[s])
return a},
eQ:function eQ(a,b){this.a=a
this.b=b
this.c=null},
eR:function eR(a){this.a=a},
di:function di(){},
dk:function dk(){},
h4:function h4(){},
h5:function h5(a){this.a=a},
jI(a,b){return A.lP(a,b,null)},
jr(a,b){var s=A.lX(a,b)
if(s!=null)return s
throw A.d(A.jH(a))},
lz(a,b){a=A.d(a)
if(a==null)a=t.K.a(a)
a.stack=b.l(0)
throw a
throw A.d("unreachable")},
jV(a,b,c,d){var s,r=c?J.jQ(a,d):J.lI(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
Y(a,b){var s,r=A.k([],b.h("B<0>"))
for(s=J.d0(a);s.E();)B.a.k(r,b.a(s.gF(s)))
return r},
h8(a,b){var s=A.lL(a,b)
return s},
lL(a,b){var s,r
if(Array.isArray(a))return A.k(a.slice(0),b.h("B<0>"))
s=A.k([],b.h("B<0>"))
for(r=J.d0(a);r.E();)B.a.k(s,r.gF(r))
return s},
k7(a,b,c){var s=J.d0(b)
if(!s.E())return a
if(c.length===0){do a+=A.o(s.gF(s))
while(s.E())}else{a+=A.o(s.gF(s))
for(;s.E();)a=a+c+A.o(s.gF(s))}return a},
jX(a,b){return new A.dX(a,b.gdN(),b.gdP(),b.gdO())},
lx(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
ly(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
dm(a){if(a>=10)return""+a
return"0"+a},
br(a){if(typeof a=="number"||A.cV(a)||a==null)return J.d1(a)
if(typeof a=="string")return JSON.stringify(a)
return A.lY(a)},
lA(a,b){A.fz(a,"error",t.K)
A.fz(b,"stackTrace",t.l)
A.lz(a,b)},
d6(a){return new A.d5(a)},
aI(a,b){return new A.ar(!1,null,b,a)},
jz(a,b,c){return new A.ar(!0,a,b,c)},
k2(a,b){return new A.cl(null,null,!0,a,b,"Value not in range")},
e3(a,b,c,d,e){return new A.cl(b,c,!0,a,d,"Invalid value")},
lZ(a,b,c){if(0>a||a>c)throw A.d(A.e3(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.d(A.e3(b,a,c,"end",null))
return b}return c},
I(a,b,c,d){return new A.dB(b,!0,a,d,"Index out of range")},
bF(a){return new A.es(a)},
ka(a){return new A.eq(a)},
J(a){return new A.bg(a)},
as(a){return new A.dj(a)},
dq(a){return new A.i1(a)},
jH(a){return new A.fY(a)},
lH(a,b,c){var s,r
if(A.js(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.k([],t.s)
B.a.k($.U,a)
try{A.mZ(a,s)}finally{if(0>=$.U.length)return A.c($.U,-1)
$.U.pop()}r=A.k7(b,t.bi.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
jP(a,b,c){var s,r
if(A.js(a))return b+"..."+c
s=new A.cp(b)
B.a.k($.U,a)
try{r=s
r.a=A.k7(r.a,a,", ")}finally{if(0>=$.U.length)return A.c($.U,-1)
$.U.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
mZ(a,b){var s,r,q,p,o,n,m,l=a.gR(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.E())return
s=A.o(l.gF(l))
B.a.k(b,s)
k+=s.length+2;++j}if(!l.E()){if(j<=5)return
if(0>=b.length)return A.c(b,-1)
r=b.pop()
if(0>=b.length)return A.c(b,-1)
q=b.pop()}else{p=l.gF(l);++j
if(!l.E()){if(j<=4){B.a.k(b,A.o(p))
return}r=A.o(p)
if(0>=b.length)return A.c(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gF(l);++j
for(;l.E();p=o,o=n){n=l.gF(l);++j
if(j>100){while(!0){if(!(k>75&&j>3))break
if(0>=b.length)return A.c(b,-1)
k-=b.pop().length+2;--j}B.a.k(b,"...")
return}}q=A.o(p)
r=A.o(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
while(!0){if(!(k>80&&b.length>3))break
if(0>=b.length)return A.c(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)B.a.k(b,m)
B.a.k(b,q)
B.a.k(b,r)},
jY(a,b,c,d){var s=B.c.gt(a)
b=B.c.gt(b)
c=B.c.gt(c)
d=B.c.gt(d)
d=A.k8(A.cq(A.cq(A.cq(A.cq($.lc(),s),b),c),d))
return d},
hh:function hh(a,b){this.a=a
this.b=b},
bX:function bX(a,b){this.a=a
this.b=b},
E:function E(){},
d5:function d5(a){this.a=a},
az:function az(){},
ar:function ar(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cl:function cl(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
dB:function dB(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
dX:function dX(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
es:function es(a){this.a=a},
eq:function eq(a){this.a=a},
bg:function bg(a){this.a=a},
dj:function dj(a){this.a=a},
co:function co(){},
i1:function i1(a){this.a=a},
fY:function fY(a){this.a=a},
i:function i(){},
K:function K(){},
u:function u(){},
fc:function fc(){},
cp:function cp(a){this.a=a},
nm(){var s=document
s.toString
return s},
fM(a,b){var s=document.createElement("canvas")
s.toString
if(b!=null)B.f.sY(s,b)
if(a!=null)B.f.sX(s,a)
return s},
md(a,b){if(b.parentNode===a){a.removeChild(b).toString
return!0}return!1},
iW(a,b){var s,r,q,p,o=a===b
if(!o){s=b.tagName
s.toString
r=s==="HTML"}else r=!0
if(a==null||o){if(r)return new A.bA(0,0,t.x)
throw A.d(A.aI("Specified element is not a transitive offset parent of this element.",null))}q=A.iW(a.offsetParent,b)
s=a.offsetLeft
s.toString
s=B.c.U(s)
p=a.offsetTop
p.toString
return new A.bA(q.a+s,q.b+B.c.U(p),t.x)},
lG(a){var s=new IntersectionObserver(A.bk(a,2))
s.toString
return s},
cC(a,b,c,d,e){var s=c==null?null:A.jn(new A.i_(c),t.A)
s=new A.cB(a,b,s,!1,e.h("cB<0>"))
s.bP()
return s},
jn(a,b){var s=$.A
if(s===B.d)return a
return s.ds(a,b)},
l:function l(){},
fF:function fF(){},
d2:function d2(){},
d4:function d4(){},
b_:function b_(){},
b1:function b1(){},
b2:function b2(){},
dc:function dc(){},
ai:function ai(){},
fP:function fP(){},
z:function z(){},
bV:function bV(){},
fQ:function fQ(){},
a4:function a4(){},
at:function at(){},
fR:function fR(){},
fS:function fS(){},
fT:function fT(){},
b4:function b4(){},
bp:function bp(){},
fU:function fU(){},
bY:function bY(){},
bZ:function bZ(){},
dp:function dp(){},
fV:function fV(){},
h:function h(){},
f:function f(){},
b:function b(){},
V:function V(){},
dr:function dr(){},
ds:function ds(){},
dv:function dv(){},
a5:function a5(){},
h0:function h0(){},
b7:function b7(){},
c3:function c3(){},
aL:function aL(){},
b8:function b8(){},
h2:function h2(){},
h9:function h9(){},
be:function be(){},
he:function he(){},
dM:function dM(){},
hf:function hf(a){this.a=a},
dN:function dN(){},
hg:function hg(a){this.a=a},
a7:function a7(){},
dO:function dO(){},
q:function q(){},
cg:function cg(){},
a8:function a8(){},
e1:function e1(){},
e5:function e5(){},
hq:function hq(a){this.a=a},
e8:function e8(){},
a0:function a0(){},
eb:function eb(){},
aa:function aa(){},
ec:function ec(){},
ab:function ab(){},
ee:function ee(){},
hB:function hB(a){this.a=a},
S:function S(){},
a1:function a1(){},
P:function P(){},
eh:function eh(){},
ei:function ei(){},
hJ:function hJ(){},
ad:function ad(){},
em:function em(){},
hK:function hK(){},
hQ:function hQ(){},
eu:function eu(){},
ev:function ev(){},
aS:function aS(){},
ao:function ao(){},
eC:function eC(){},
cz:function cz(){},
eN:function eN(){},
cD:function cD(){},
f7:function f7(){},
fd:function fd(){},
iX:function iX(a,b){this.a=a
this.$ti=b},
cA:function cA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
bJ:function bJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
cB:function cB(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
i_:function i_(a){this.a=a},
i0:function i0(a){this.a=a},
n:function n(){},
dt:function dt(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
eD:function eD(){},
eF:function eF(){},
eG:function eG(){},
eH:function eH(){},
eI:function eI(){},
eK:function eK(){},
eL:function eL(){},
eO:function eO(){},
eP:function eP(){},
eU:function eU(){},
eV:function eV(){},
eW:function eW(){},
eX:function eX(){},
eY:function eY(){},
eZ:function eZ(){},
f1:function f1(){},
f2:function f2(){},
f4:function f4(){},
cJ:function cJ(){},
cK:function cK(){},
f5:function f5(){},
f6:function f6(){},
f8:function f8(){},
fe:function fe(){},
ff:function ff(){},
cM:function cM(){},
cN:function cN(){},
fi:function fi(){},
fj:function fj(){},
fn:function fn(){},
fo:function fo(){},
fp:function fp(){},
fq:function fq(){},
fr:function fr(){},
fs:function fs(){},
ft:function ft(){},
fu:function fu(){},
fv:function fv(){},
fw:function fw(){},
kx(a){var s,r,q,p
if(a==null)return a
if(typeof a=="string"||typeof a=="number"||A.cV(a))return a
s=Object.getPrototypeOf(a)
r=s===Object.prototype
r.toString
if(!r){r=s===null
r.toString}else r=!0
if(r)return A.aX(a)
r=Array.isArray(a)
r.toString
if(r){q=[]
p=0
while(!0){r=a.length
r.toString
if(!(p<r))break
q.push(A.kx(a[p]));++p}return q}return a},
aX(a){var s,r,q,p,o,n
if(a==null)return null
s=A.jT(t.N,t.z)
r=Object.getOwnPropertyNames(a)
for(q=r.length,p=0;p<r.length;r.length===q||(0,A.M)(r),++p){o=r[p]
n=o
n.toString
s.i(0,n,A.kx(a[o]))}return s},
kw(a){var s
if(a==null)return a
if(typeof a=="string"||typeof a=="number"||A.cV(a))return a
if(t.f.b(a))return A.kR(a)
if(t.j.b(a)){s=[]
J.fD(a,new A.iw(s))
a=s}return a},
kR(a){var s={}
J.fD(a,new A.iI(s))
return s},
iw:function iw(a){this.a=a},
iI:function iI(a){this.a=a},
c8:function c8(){},
mE(a,b,c,d){var s,r,q
A.jd(b)
t.j.a(d)
if(b){s=[c]
B.a.a0(s,d)
d=s}r=t.z
q=A.Y(J.lk(d,A.ny(),r),r)
return A.kz(A.jI(t.Z.a(a),q))},
jh(a,b,c){var s
try{if(Object.isExtensible(a)&&!Object.prototype.hasOwnProperty.call(a,b)){Object.defineProperty(a,b,{value:c})
return!0}}catch(s){}return!1},
kE(a,b){if(Object.prototype.hasOwnProperty.call(a,b))return a[b]
return null},
kz(a){if(a==null||typeof a=="string"||typeof a=="number"||A.cV(a))return a
if(a instanceof A.aw)return a.a
if(A.kV(a))return a
if(t.Q.b(a))return a
if(a instanceof A.bX)return A.bf(a)
if(t.Z.b(a))return A.kD(a,"$dart_jsFunction",new A.iy())
return A.kD(a,"_$dart_jsObject",new A.iz($.jy()))},
kD(a,b,c){var s=A.kE(a,b)
if(s==null){s=c.$1(a)
A.jh(a,b,s)}return s},
ky(a){var s,r
if(a==null||typeof a=="string"||typeof a=="number"||typeof a=="boolean")return a
else if(a instanceof Object&&A.kV(a))return a
else if(a instanceof Object&&t.Q.b(a))return a
else if(a instanceof Date){s=A.a2(a.getTime())
if(Math.abs(s)<=864e13)r=!1
else r=!0
if(r)A.aH(A.aI("DateTime is outside valid range: "+s,null))
A.fz(!1,"isUtc",t.y)
return new A.bX(s,!1)}else if(a.constructor===$.jy())return a.o
else return A.kM(a)},
kM(a){if(typeof a=="function")return A.ji(a,$.fC(),new A.iD())
if(a instanceof Array)return A.ji(a,$.jx(),new A.iE())
return A.ji(a,$.jx(),new A.iF())},
ji(a,b,c){var s=A.kE(a,b)
if(s==null||!(a instanceof Object)){s=c.$1(a)
A.jh(a,b,s)}return s},
iy:function iy(){},
iz:function iz(a){this.a=a},
iD:function iD(){},
iE:function iE(){},
iF:function iF(){},
aw:function aw(a){this.a=a},
c7:function c7(a){this.a=a},
b9:function b9(a,b){this.a=a
this.$ti=b},
bL:function bL(){},
ie:function ie(){},
bA:function bA(a,b,c){this.a=a
this.b=b
this.$ti=c},
aj:function aj(){},
dH:function dH(){},
ak:function ak(){},
dY:function dY(){},
hl:function hl(){},
ef:function ef(){},
am:function am(){},
eo:function eo(){},
eS:function eS(){},
eT:function eT(){},
f_:function f_(){},
f0:function f0(){},
fa:function fa(){},
fb:function fb(){},
fk:function fk(){},
fl:function fl(){},
fH:function fH(){},
d7:function d7(){},
fI:function fI(a){this.a=a},
d8:function d8(){},
aJ:function aJ(){},
dZ:function dZ(){},
eA:function eA(){},
da:function da(){},
bo:function bo(){},
dx:function dx(){},
e2:function e2(){},
e4:function e4(){},
cm:function cm(){},
bC:function bC(){},
e9:function e9(){},
ej:function ej(){},
ep:function ep(){},
dy:function dy(a){var _=this
_.a=a
_.f=_.e=_.d=_.c=_.b=0
_.x=_.w=_.r=null},
fZ:function fZ(){},
fL:function fL(){},
hx:function hx(a,b,c,d,e,f,g,h,i){var _=this
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
lv(){return new A.b3(0,1,0,1)},
jG(){return new A.b3(1,0,0,1)},
b3:function b3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fX:function fX(){},
lM(){return new A.bd(A.k([1,0,0,0,1,0,0,0,1],t.n))},
jW(){return new A.by(A.k([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t.n))},
jZ(a,b){return new A.bB(a,b)},
k_(){return new A.bB(0,0)},
k0(a,b,c){return new A.Z(a,b,c)},
hk(){return new A.Z(0,0,0)},
j3(a,b,c){var s,r,q=new A.ho(),p=a*0.5,o=b*0.5,n=c*0.5,m=Math.cos(p),l=Math.sin(p),k=Math.cos(o),j=Math.sin(o),i=Math.cos(n),h=Math.sin(n),g=i*j,f=h*k
q.a=g*m+f*l
s=i*k
r=h*j
q.b=s*l-r*m
q.c=f*m-g*l
q.d=s*m+r*l
return q},
hL(){return new A.Q(A.k([1,0,0,0,1,0,0,0,1],t.n))},
aR(){return new A.aQ(A.k([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t.n))},
en(a){return new A.aQ(A.k([a,0,0,0,0,a,0,0,0,0,a,0,0,0,0,1],t.n))},
hM(a){return new A.aQ(A.k([1,0,0,0,0,1,0,0,0,0,1,0,a.a,a.b,a.c,1],t.n))},
hS(a,b,c){return new A.an(a,b,c)},
kd(){return new A.an(0,0,0)},
kc(a,b,c){var s=new A.an(a,b,c)
s.a7()
return s},
h_:function h_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bd:function bd(a){this.a=a},
by:function by(a){this.a=a},
e_:function e_(){},
bB:function bB(a,b){this.a=a
this.b=b},
Z:function Z(a,b,c){this.a=a
this.b=b
this.c=c},
ck:function ck(a){this.b=a},
ho:function ho(){var _=this
_.d=_.c=_.b=_.a=0},
Q:function Q(a){this.a=a},
aQ:function aQ(a){this.a=a},
an:function an(a,b,c){this.a=a
this.b=b
this.c=c},
ea:function ea(){var _=this
_.e=_.c=_.b=_.a=0
_.f=1},
d9(){return new A.b0(770,1,0,0,0,0)},
de(){return new A.dd(16384,1)},
j5(){return new A.el()},
kb(a){return new A.hR(a)},
bh(a){return new A.hU(a)},
dL(a){return new A.hc(a)},
aM(a){return new A.hd(a)},
aO(a){return new A.hr(a)},
et(){return new A.bG(A.k([new A.ah(0,2,8,0)],t.U))},
ke(){return new A.bG(A.k([new A.ah(0,3,12,0)],t.U))},
j7(a){var s=a*4
return new A.bG(A.k([new A.ah(0,3,s,0),new A.ah(1,2,s,12)],t.U))},
kf(){return new A.bG(A.k([new A.ah(0,3,32,0),new A.ah(1,2,32,12),new A.ah(2,3,32,20)],t.U))},
m7(){var s,r,q,p=$.j8
if(p==null)try{p=A.fM(null,null)
s=A.jU(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],t.N,t.z)
r=B.f.az(p,"webgl",s)
if(r==null)r=B.f.az(p,"experimental-webgl",s)
t.c4.a(r)
$.j8=!0
p=!0}catch(q){$.j8=!1
p=!1}p.toString
return p},
m6(a,b){var s,r,q,p,o,n,m=b.getSupportedExtensions()
if(m==null)return
s=A.k([],t.s)
for(r=a.f,q=r.length,p=J.iK(m),o=0;o<r.length;r.length===q||(0,A.M)(r),++o){n=r[o]
if(!p.bV(m,n))B.a.k(s,n)}if(s.length!==0)throw A.d(A.dq("Invalid webgl extensions\n"+A.o(s)))},
lC(a,b,c){var s,r,q,p,o,n,m,l,k,j,i
$.jL=$.jK=!0
B.a.W($.w)
B.a.W($.b6)
B.a.W($.dz)
B.a.W($.dA)
$.j_.W(0)
s=(1+Math.sqrt(5))*0.5
A.X(-1,s,0)
A.X(1,s,0)
r=-s
A.X(-1,r,0)
A.X(1,r,0)
A.X(0,-1,s)
A.X(0,1,s)
A.X(0,-1,r)
A.X(0,1,r)
A.X(s,0,-1)
A.X(s,0,1)
A.X(r,0,-1)
A.X(r,0,1)
B.a.k($.w,new A.C(0,11,5))
B.a.k($.w,new A.C(0,5,1))
B.a.k($.w,new A.C(0,1,7))
B.a.k($.w,new A.C(0,7,10))
B.a.k($.w,new A.C(0,10,11))
B.a.k($.w,new A.C(1,5,9))
B.a.k($.w,new A.C(5,11,4))
B.a.k($.w,new A.C(11,10,2))
B.a.k($.w,new A.C(10,7,6))
B.a.k($.w,new A.C(7,1,8))
B.a.k($.w,new A.C(3,9,4))
B.a.k($.w,new A.C(3,4,2))
B.a.k($.w,new A.C(3,2,6))
B.a.k($.w,new A.C(3,6,8))
B.a.k($.w,new A.C(3,8,9))
B.a.k($.w,new A.C(4,9,5))
B.a.k($.w,new A.C(2,4,11))
B.a.k($.w,new A.C(6,2,10))
B.a.k($.w,new A.C(8,6,7))
B.a.k($.w,new A.C(9,8,1))
for(q=0;q<a;++q){B.a.W($.c1)
for(r=$.w.length,p=0;p<$.w.length;$.w.length===r||(0,A.M)($.w),++p){o=$.w[p]
n=o.a
m=o.b
l=A.iZ(n,m)
k=o.c
j=A.iZ(m,k)
i=A.iZ(k,n)
B.a.k($.c1,new A.C(n,l,i))
B.a.k($.c1,new A.C(m,j,l))
B.a.k($.c1,new A.C(k,i,j))
B.a.k($.c1,new A.C(l,j,i))}B.a.W($.w)
B.a.a0($.w,$.c1)}for(r=$.w.length,p=0;p<$.w.length;$.w.length===r||(0,A.M)($.w),++p){o=$.w[p]
B.a.k($.dz,o.a)
B.a.k($.dz,o.b)
B.a.k($.dz,o.c)}$.jM=new Uint16Array(A.cU($.dz))
$.jN=new Float32Array(A.cU($.dA))},
X(a,b,c){var s,r,q,p,o
B.a.k($.b6,new A.Z(a,b,c))
s=A.kc(a,b,c)
r=Math.atan2(-s.c,s.a)
r+=r<0?6.283185307179586:0
q=Math.acos(s.b)
p=A.kc(-Math.sin(r),0,-Math.cos(r))
o=t.n
B.a.a0($.dA,A.k([s.a,s.b,s.c],o))
if($.jK)B.a.a0($.dA,A.k([r/6.283185307179586,q/3.141592653589793],o))
if($.jL)B.a.a0($.dA,A.k([p.a,p.b,p.c],o))
return $.b6.length-1},
iZ(a,b){var s,r,q=A.o(Math.min(a,b))+"-"+A.o(Math.max(a,b)),p=$.j_.m(0,q)
if(p!=null)return p
s=$.b6.length
if(!(a>=0&&a<s))return A.c($.b6,a)
r=$.b6[a]
if(!(b>=0&&b<s))return A.c($.b6,b)
s=$.b6[b]
p=A.X((r.a+s.a)*0.5,(r.b+s.b)*0.5,(r.c+s.c)*0.5)
$.j_.i(0,q,p)
return p},
ah:function ah(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
b0:function b0(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.d=c
_.e=d
_.f=e
_.r=f},
dd:function dd(a,b){this.a=a
this.f=b},
au:function au(a){this.a=a},
h1:function h1(a,b,c){this.a=a
this.b=b
this.c=c},
hV:function hV(a){this.b=a},
fK:function fK(){},
fW:function fW(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
dn:function dn(){},
dw:function dw(){},
bR:function bR(){var _=this
_.b=_.a=0
_.f=_.e=_.d=_.c=null},
dJ:function dJ(a,b,c){this.a=a
this.c=b
this.d=c},
dK:function dK(){},
ci:function ci(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null},
a9:function a9(a,b){var _=this
_.a=a
_.b=b
_.f=_.e=_.d=_.c=null},
el:function el(){this.f=this.e=this.d=null},
hP:function hP(){},
hR:function hR(a){this.a=a
this.c=this.b=null},
hT:function hT(a){this.a=a
this.c=this.b=null},
hU:function hU(a){this.a=a
this.c=this.b=null},
hc:function hc(a){this.a=a
this.c=this.b=null},
hd:function hd(a){this.a=a
this.c=this.b=null},
hr:function hr(a){this.a=a
this.c=this.b=null},
bG:function bG(a){this.a=a},
hp:function hp(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.f=d},
ex:function ex(){},
eB:function eB(){},
fO:function fO(a,b,c,d){var _=this
_.r=a
_.c=b
_.d=c
_.a=d},
hy:function hy(a,b,c,d,e){var _=this
_.c=a
_.d=b
_.e=c
_.f=d
_.a=e},
hz:function hz(a,b,c,d,e,f,g,h,i){var _=this
_.c=a
_.d=b
_.e=c
_.f=d
_.r=e
_.w=f
_.x=g
_.y=h
_.a=i},
hA:function hA(a,b,c,d){var _=this
_.c=a
_.d=b
_.e=c
_.a=d},
fg:function fg(){},
hI:function hI(a,b,c,d){var _=this
_.r=a
_.c=b
_.d=c
_.a=d},
fh:function fh(){},
ek:function ek(a,b,c){this.f=a
this.c=b
this.a=c},
C:function C(a,b,c){this.a=a
this.b=b
this.c=c},
ew:function ew(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=!1
_.f=null},
d3:function d3(a,b,c,d,e,f,g,h,i,j){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j},
aZ:function aZ(){},
bq:function bq(){},
c2:function c2(){},
c9:function c9(){},
lm(){var s=$.lb(),r=t.Z
s.i(0,"TargetPositionSetting",A.iG(A.nC(),r))
s.i(0,"ComputeStatus",A.iG(A.nB(),r))
s.i(0,"GetFPS",A.iG(new A.fJ(),r))
s.i(0,"Kill",A.iG($.d_().gcs(),r))},
m2(a,b){var s,r,q,p,o
A.ir(a)
A.ir(b)
s=$.d_()
r=s.x.d
q=r.a
p=r.b
o=new A.Z(q,p,r.c)
o.a=q+a*0.5
o.b=p+(b*0.5+0.2)
s=s.e.a
s.x.ai(o)
s.y=1-B.c.dt(0.6,0,1)},
lw(){var s=$.d_().y
if(s instanceof A.bq)return-1
if(s instanceof A.c9)return 1
return 0},
nA(){var s,r,q,p,o,n,m="webglcontextlost"
A.lm()
s=$.d_()
r=s.b
if(!A.m7())A.aH(A.dq("WebGL is not available"))
q=r.a
p=q.style
p.position="absolute"
p.width="100%"
p.height="100%"
p.top="0"
p.left="0"
p=A.lG(r.gcH())
r.f=p
p.observe(q)
p=s.c
o=window
o.toString
p.x=B.k.c4(o,p.gbr())
o=t.d8
p.sbK(o.a(s.gcN()))
p.sbL(o.a(s.gcP()))
o=s.a
o.children.toString
o.appendChild(q).toString
o=s.d
p=window
p.toString
B.a.k(o,A.cC(p,"beforeunload",t.bF.a(s.gcB()),!1,t.D))
p=window
p.toString
B.a.k(o,A.cC(p,"resize",t.cx.a(s.gcL()),!1,t.A))
p=window
p.toString
B.a.k(o,A.cC(p,"deviceorientation",t.cu.a(s.gcD()),!1,t.bK))
p=t.cI
n=p.h("~(1)?")
p=p.c
B.a.k(o,A.cC(q,m,n.a(s.gcR()),!1,p))
B.a.k(o,A.cC(q,m,n.a(s.gcT()),!1,p))
p=r.c
B.a.k(o,new A.aT(p,A.y(p).h("aT<1>")).c_(s.gcF()))
r=r.d
B.a.k(o,new A.aT(r,A.y(r).h("aT<1>")).c_(s.gcJ()))
s.ak()
s.aa(new A.c9())},
fJ:function fJ(){},
bW(a,b,c,d,e){var s=t.n,r=a*b
return new A.dl(new A.Q(A.k([1,0,0,0,1,0,0,0,1],s)),new A.Q(A.k([1,0,0,0,1,0,0,0,1],s)),new A.Q(A.k([r,0,0,0,a,0,0-0.5*r,0-0.5*a,1],s)),new A.b3(1,0,0,c),d,e,b)},
fN(a,b,c){var s=t.n
return new A.dh(new A.Q(A.k([1,0,0,0,1,0,0,0,1],s)),new A.Q(A.k([1,0,0,0,1,0,0,0,1],s)),new A.Q(A.k([1,0,0,0,1,0,0,0,1],s)),new A.bB(b,c),new A.b3(0,0,1,1),a+1)},
hj:function hj(a,b,c){this.a=a
this.b=b
this.c=c},
dl:function dl(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0
_.f=e
_.r=f
_.w=g},
dh:function dh(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
du:function du(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.r=f},
hs:function hs(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
e7:function e7(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.w=g
_.x=h
_.y=i
_.z=j
_.Q=k
_.as=l
_.at=m
_.ax=n
_.ay=o
_.ch=p
_.CW=q
_.cx=r
_.cy=s
_.a=_.dy=_.dx=_.db=null},
ht:function ht(a,b,c,d,e){var _=this
_.c=a
_.d=b
_.e=c
_.f=d
_.a=e},
hv:function hv(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
_.a=a
_.c=b
_.d=c
_.e=d
_.r=e
_.y=f
_.z=g
_.Q=h
_.as=i
_.at=j
_.dx=k
_.fx=l
_.fy=m},
hw:function hw(a,b,c,d,e,f){var _=this
_.c=a
_.d=b
_.e=c
_.f=d
_.r=e
_.a=f},
cn:function cn(){},
hG:function hG(a){var _=this
_.a=a
_.b=!1
_.e=_.d=_.c=null},
hH:function hH(a){this.a=a},
kV(a){return t.J.b(a)||t.A.b(a)||t.cF.b(a)||t.cW.b(a)||t.a1.b(a)||t.cg.b(a)||t.bj.b(a)},
nH(a){A.nG(new A.dG("Field '"+a+"' has been assigned during initialization."),new Error())},
mH(a){var s,r=a.$dart_jsFunction
if(r!=null)return r
s=function(b,c){return function(){return b(c,Array.prototype.slice.apply(arguments))}}(A.mF,a)
s[$.fC()]=a
a.$dart_jsFunction=s
return s},
mF(a,b){t.j.a(b)
return A.jI(t.Z.a(a),b)},
iG(a,b){if(typeof a=="function")return a
else return b.a(A.mH(a))}},B={}
var w=[A,J,B]
var $={}
A.j1.prototype={}
J.bs.prototype={
J(a,b){return a===b},
gt(a){return A.cj(a)},
l(a){return"Instance of '"+A.hn(a)+"'"},
c3(a,b){throw A.d(A.jX(a,t.B.a(b)))},
gC(a){return A.bl(A.jj(this))}}
J.dC.prototype={
l(a){return String(a)},
gt(a){return a?519018:218159},
gC(a){return A.bl(t.y)},
$ix:1,
$iiH:1}
J.c5.prototype={
J(a,b){return null==b},
l(a){return"null"},
gt(a){return 0},
$ix:1,
$iK:1}
J.a.prototype={}
J.ba.prototype={
gt(a){return 0},
l(a){return String(a)}}
J.e0.prototype={}
J.cr.prototype={}
J.av.prototype={
l(a){var s=a[$.fC()]
if(s==null)return this.cj(a)
return"JavaScript function for "+J.d1(s)},
$ib5:1}
J.bu.prototype={
gt(a){return 0},
l(a){return String(a)}}
J.bv.prototype={
gt(a){return 0},
l(a){return String(a)}}
J.B.prototype={
k(a,b){A.ap(a).c.a(b)
if(!!a.fixed$length)A.aH(A.bF("add"))
a.push(b)},
a0(a,b){var s
A.ap(a).h("i<1>").a(b)
if(!!a.fixed$length)A.aH(A.bF("addAll"))
if(Array.isArray(b)){this.cZ(a,b)
return}for(s=J.d0(b);s.E();)a.push(s.gF(s))},
cZ(a,b){var s,r
t.b.a(b)
s=b.length
if(s===0)return
if(a===b)throw A.d(A.as(a))
for(r=0;r<s;++r)a.push(b[r])},
W(a){if(!!a.fixed$length)A.aH(A.bF("clear"))
a.length=0},
v(a,b){var s,r
A.ap(a).h("~(1)").a(b)
s=a.length
for(r=0;r<s;++r){b.$1(a[r])
if(a.length!==s)throw A.d(A.as(a))}},
c0(a,b,c){var s=A.ap(a)
return new A.bc(a,s.A(c).h("1(2)").a(b),s.h("@<1>").A(c).h("bc<1,2>"))},
dD(a,b,c,d){var s,r,q
d.a(b)
A.ap(a).A(d).h("1(1,2)").a(c)
s=a.length
for(r=b,q=0;q<s;++q){r=c.$2(r,a[q])
if(a.length!==s)throw A.d(A.as(a))}return r},
q(a,b){if(!(b<a.length))return A.c(a,b)
return a[b]},
gu(a){if(a.length>0)return a[0]
throw A.d(A.j0())},
bV(a,b){var s
for(s=0;s<a.length;++s)if(J.iU(a[s],b))return!0
return!1},
l(a){return A.jP(a,"[","]")},
gR(a){return new J.bm(a,a.length,A.ap(a).h("bm<1>"))},
gt(a){return A.cj(a)},
gj(a){return a.length},
i(a,b,c){var s
A.ap(a).c.a(c)
if(!!a.immutable$list)A.aH(A.bF("indexed set"))
s=a.length
if(b>=s)throw A.d(A.jp(a,b))
a[b]=c},
ag(a,b){var s=A.ap(a)
s.h("j<1>").a(b)
s=A.h8(a,s.c)
this.a0(s,b)
return s},
$ii:1,
$ij:1}
J.h3.prototype={}
J.bm.prototype={
gF(a){var s=this.d
return s==null?this.$ti.c.a(s):s},
E(){var s,r=this,q=r.a,p=q.length
if(r.b!==p){q=A.M(q)
throw A.d(q)}s=r.c
if(s>=p){r.sbB(null)
return!1}r.sbB(q[s]);++r.c
return!0},
sbB(a){this.d=this.$ti.h("1?").a(a)}}
J.c6.prototype={
aV(a,b){var s
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=B.e.gaY(b)
if(this.gaY(a)===s)return 0
if(this.gaY(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gaY(a){return a===0?1/a<0:a<0},
U(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.d(A.bF(""+a+".round()"))},
dt(a,b,c){if(B.e.aV(b,c)>0)throw A.d(A.kO(b))
if(this.aV(a,b)<0)return b
if(this.aV(a,c)>0)return c
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
b2(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
bN(a,b){var s
if(a>0)s=this.dk(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
dk(a,b){return b>31?0:a>>>b},
gC(a){return A.bl(t.H)},
$it:1,
$iG:1}
J.c4.prototype={
gC(a){return A.bl(t.S)},
$ix:1,
$im:1}
J.dE.prototype={
gC(a){return A.bl(t.i)},
$ix:1}
J.bt.prototype={
ag(a,b){return a+b},
aB(a,b,c){return a.substring(b,A.lZ(b,c,a.length))},
l(a){return a},
gt(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gC(a){return A.bl(t.N)},
gj(a){return a.length},
$ix:1,
$ip:1}
A.dG.prototype={
l(a){return"LateInitializationError: "+this.a}}
A.iR.prototype={
$0(){return A.jJ(null,t.P)},
$S:12}
A.hu.prototype={}
A.c_.prototype={}
A.ax.prototype={
gR(a){var s=this
return new A.bw(s,s.gj(s),A.y(s).h("bw<ax.E>"))}}
A.bw.prototype={
gF(a){var s=this.d
return s==null?this.$ti.c.a(s):s},
E(){var s,r=this,q=r.a,p=J.iK(q),o=p.gj(q)
if(r.b!==o)throw A.d(A.as(q))
s=r.c
if(s>=o){r.sbt(null)
return!1}r.sbt(p.q(q,s));++r.c
return!0},
sbt(a){this.d=this.$ti.h("1?").a(a)}}
A.bc.prototype={
gj(a){return J.fE(this.a)},
q(a,b){return this.b.$1(J.lg(this.a,b))}}
A.N.prototype={}
A.bD.prototype={
gt(a){var s=this._hashCode
if(s!=null)return s
s=664597*B.h.gt(this.a)&536870911
this._hashCode=s
return s},
l(a){return'Symbol("'+this.a+'")'},
J(a,b){if(b==null)return!1
return b instanceof A.bD&&this.a===b.a},
$ibE:1}
A.bT.prototype={}
A.bS.prototype={
l(a){return A.ha(this)},
$iL:1}
A.bU.prototype={
gj(a){return this.b.length},
gd6(){var s=this.$keys
if(s==null){s=Object.keys(this.a)
this.$keys=s}return s},
v(a,b){var s,r,q,p
this.$ti.h("~(1,2)").a(b)
s=this.gd6()
r=this.b
for(q=s.length,p=0;p<q;++p)b.$2(s[p],r[p])}}
A.dD.prototype={
gdN(){var s=this.a
return s},
gdP(){var s,r,q,p,o=this
if(o.c===1)return B.o
s=o.d
r=s.length-o.e.length-o.f
if(r===0)return B.o
q=[]
for(p=0;p<r;++p){if(!(p<s.length))return A.c(s,p)
q.push(s[p])}q.fixed$length=Array
q.immutable$list=Array
return q},
gdO(){var s,r,q,p,o,n,m,l,k=this
if(k.c!==0)return B.p
s=k.e
r=s.length
q=k.d
p=q.length-r-k.f
if(r===0)return B.p
o=new A.a6(t.bV)
for(n=0;n<r;++n){if(!(n<s.length))return A.c(s,n)
m=s[n]
l=p+n
if(!(l>=0&&l<q.length))return A.c(q,l)
o.i(0,new A.bD(m),q[l])}return new A.bT(o,t.cf)},
$ijO:1}
A.hm.prototype={
$2(a,b){var s
A.T(a)
s=this.a
s.b=s.b+"$"+a
B.a.k(this.b,a)
B.a.k(this.c,b);++s.a},
$S:2}
A.hN.prototype={
T(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
A.ch.prototype={
l(a){return"Null check operator used on a null value"}}
A.dF.prototype={
l(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.er.prototype={
l(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.hi.prototype={
l(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.c0.prototype={}
A.cL.prototype={
l(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$iac:1}
A.aK.prototype={
l(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.kZ(r==null?"unknown":r)+"'"},
$ib5:1,
gdV(){return this},
$C:"$1",
$R:1,
$D:null}
A.df.prototype={$C:"$0",$R:0}
A.dg.prototype={$C:"$2",$R:2}
A.eg.prototype={}
A.ed.prototype={
l(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.kZ(s)+"'"}}
A.bn.prototype={
J(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.bn))return!1
return this.$_target===b.$_target&&this.a===b.a},
gt(a){return(A.kW(this.a)^A.cj(this.$_target))>>>0},
l(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.hn(this.a)+"'")}}
A.eE.prototype={
l(a){return"Reading static variable '"+this.a+"' during its initialization"}}
A.e6.prototype={
l(a){return"RuntimeError: "+this.a}}
A.ii.prototype={}
A.a6.prototype={
gj(a){return this.a},
gS(a){return new A.bb(this,A.y(this).h("bb<1>"))},
du(a,b){var s=this.b
if(s==null)return!1
return s[b]!=null},
m(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.dI(b)},
dI(a){var s,r,q=this.d
if(q==null)return null
s=q[this.bY(a)]
r=this.bZ(s,a)
if(r<0)return null
return s[r].b},
i(a,b,c){var s,r,q=this,p=A.y(q)
p.c.a(b)
p.z[1].a(c)
if(typeof b=="string"){s=q.b
q.bv(s==null?q.b=q.aN():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=q.c
q.bv(r==null?q.c=q.aN():r,b,c)}else q.dJ(b,c)},
dJ(a,b){var s,r,q,p,o=this,n=A.y(o)
n.c.a(a)
n.z[1].a(b)
s=o.d
if(s==null)s=o.d=o.aN()
r=o.bY(a)
q=s[r]
if(q==null)s[r]=[o.aO(a,b)]
else{p=o.bZ(q,a)
if(p>=0)q[p].b=b
else q.push(o.aO(a,b))}},
W(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.bI()}},
v(a,b){var s,r,q=this
A.y(q).h("~(1,2)").a(b)
s=q.e
r=q.r
for(;s!=null;){b.$2(s.a,s.b)
if(r!==q.r)throw A.d(A.as(q))
s=s.c}},
bv(a,b,c){var s,r=A.y(this)
r.c.a(b)
r.z[1].a(c)
s=a[b]
if(s==null)a[b]=this.aO(b,c)
else s.b=c},
bI(){this.r=this.r+1&1073741823},
aO(a,b){var s=this,r=A.y(s),q=new A.h6(r.c.a(a),r.z[1].a(b))
if(s.e==null)s.e=s.f=q
else s.f=s.f.c=q;++s.a
s.bI()
return q},
bY(a){return J.iV(a)&1073741823},
bZ(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.iU(a[r].a,b))return r
return-1},
l(a){return A.ha(this)},
aN(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
$ijS:1}
A.h6.prototype={}
A.bb.prototype={
gj(a){return this.a.a},
gR(a){var s=this.a,r=new A.dI(s,s.r,this.$ti.h("dI<1>"))
r.c=s.e
return r}}
A.dI.prototype={
gF(a){return this.d},
E(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.d(A.as(q))
s=r.c
if(s==null){r.sbu(null)
return!1}else{r.sbu(s.a)
r.c=s.c
return!0}},
sbu(a){this.d=this.$ti.h("1?").a(a)}}
A.iM.prototype={
$1(a){return this.a(a)},
$S:3}
A.iN.prototype={
$2(a,b){return this.a(a,b)},
$S:13}
A.iO.prototype={
$1(a){return this.a(A.T(a))},
$S:14}
A.dP.prototype={
gC(a){return B.K},
$ix:1}
A.cd.prototype={$iF:1}
A.dQ.prototype={
gC(a){return B.L},
$ix:1}
A.bz.prototype={
gj(a){return a.length},
$ir:1}
A.cb.prototype={
m(a,b){A.bi(b,a,a.length)
return a[b]},
$ii:1,
$ij:1}
A.cc.prototype={$ii:1,$ij:1}
A.ca.prototype={
gC(a){return B.M},
$ix:1,
$iiY:1}
A.dR.prototype={
gC(a){return B.N},
$ix:1}
A.dS.prototype={
gC(a){return B.O},
m(a,b){A.bi(b,a,a.length)
return a[b]},
$ix:1}
A.dT.prototype={
gC(a){return B.P},
m(a,b){A.bi(b,a,a.length)
return a[b]},
$ix:1}
A.dU.prototype={
gC(a){return B.Q},
m(a,b){A.bi(b,a,a.length)
return a[b]},
$ix:1}
A.ce.prototype={
gC(a){return B.S},
m(a,b){A.bi(b,a,a.length)
return a[b]},
$ix:1,
$ij6:1}
A.dV.prototype={
gC(a){return B.T},
m(a,b){A.bi(b,a,a.length)
return a[b]},
$ix:1}
A.cf.prototype={
gC(a){return B.U},
gj(a){return a.length},
m(a,b){A.bi(b,a,a.length)
return a[b]},
$ix:1}
A.dW.prototype={
gC(a){return B.V},
gj(a){return a.length},
m(a,b){A.bi(b,a,a.length)
return a[b]},
$ix:1}
A.cE.prototype={}
A.cF.prototype={}
A.cG.prototype={}
A.cH.prototype={}
A.a_.prototype={
h(a){return A.ip(v.typeUniverse,this,a)},
A(a){return A.mw(v.typeUniverse,this,a)}}
A.eM.prototype={}
A.io.prototype={
l(a){return A.R(this.a,null)}}
A.eJ.prototype={
l(a){return this.a}}
A.cO.prototype={$iaz:1}
A.hX.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:5}
A.hW.prototype={
$1(a){var s,r
this.a.a=t.M.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:15}
A.hY.prototype={
$0(){this.a.$0()},
$S:6}
A.hZ.prototype={
$0(){this.a.$0()},
$S:6}
A.il.prototype={
cY(a,b){if(self.setTimeout!=null)self.setTimeout(A.bk(new A.im(this,b),0),a)
else throw A.d(A.bF("`setTimeout()` not found."))}}
A.im.prototype={
$0(){this.b.$0()},
$S:0}
A.ey.prototype={}
A.it.prototype={
$1(a){return this.a.$2(0,a)},
$S:1}
A.iu.prototype={
$2(a,b){this.a.$2(1,new A.c0(a,t.l.a(b)))},
$S:16}
A.iC.prototype={
$2(a,b){this.a(A.a2(a),b)},
$S:17}
A.bQ.prototype={
l(a){return A.o(this.a)},
$iE:1,
gaA(){return this.b}}
A.aT.prototype={}
A.ae.prototype={
aQ(){},
aR(){},
saf(a){this.ch=this.$ti.h("ae<1>?").a(a)},
sao(a){this.CW=this.$ti.h("ae<1>?").a(a)}}
A.cu.prototype={
gd7(){return this.c<4},
dh(a){var s,r
A.y(this).h("ae<1>").a(a)
s=a.CW
r=a.ch
if(s==null)this.sbD(r)
else s.saf(r)
if(r==null)this.sbH(s)
else r.sao(s)
a.sao(a)
a.saf(a)},
dl(a,b,c,d){var s,r,q,p,o,n,m=this,l=A.y(m)
l.h("~(1)?").a(a)
t.Y.a(c)
if((m.c&4)!==0){l=new A.bI($.A,l.h("bI<1>"))
A.ju(l.gd9())
if(c!=null)l.saP(t.M.a(c))
return l}s=$.A
r=d?1:0
q=A.kh(s,a,l.c)
A.mc(s,b)
p=c==null?A.ni():c
t.M.a(p)
l=l.h("ae<1>")
o=new A.ae(m,q,s,r,l)
o.sao(o)
o.saf(o)
l.a(o)
o.ay=m.c&1
n=m.e
m.sbH(o)
o.saf(null)
o.sao(n)
if(n==null)m.sbD(o)
else n.saf(o)
if(m.d==m.e)A.kK(m.a)
return o},
df(a){var s=this,r=A.y(s)
a=r.h("ae<1>").a(r.h("al<1>").a(a))
if(a.ch===a)return null
r=a.ay
if((r&2)!==0)a.ay=r|4
else{s.dh(a)
if((s.c&2)===0&&s.d==null)s.d4()}return null},
d_(){if((this.c&4)!==0)return new A.bg("Cannot add new events after calling close")
return new A.bg("Cannot add new events while doing an addStream")},
k(a,b){var s=this
A.y(s).c.a(b)
if(!s.gd7())throw A.d(s.d_())
s.aU(b)},
d4(){if((this.c&4)!==0)if(null.gdW())null.aI(null)
A.kK(this.b)},
sbD(a){this.d=A.y(this).h("ae<1>?").a(a)},
sbH(a){this.e=A.y(this).h("ae<1>?").a(a)},
$ik5:1,
$iko:1,
$iaU:1}
A.ct.prototype={
aU(a){var s,r=this.$ti
r.c.a(a)
for(s=this.d,r=r.h("cx<1>");s!=null;s=s.ch)s.d1(new A.cx(a,r))}}
A.aB.prototype={
dM(a){if((this.c&15)!==6)return!0
return this.b.b.b0(t.m.a(this.d),a.a,t.y,t.K)},
dH(a){var s,r=this,q=r.e,p=null,o=t.z,n=t.K,m=a.a,l=r.b.b
if(t.C.b(q))p=l.dR(q,m,a.b,o,n,t.l)
else p=l.b0(t.v.a(q),m,o,n)
try{o=r.$ti.h("2/").a(p)
return o}catch(s){if(t.b7.b(A.aq(s))){if((r.c&1)!==0)throw A.d(A.aI("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.d(A.aI("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.D.prototype={
bM(a){this.a=this.a&1|4
this.c=a},
b1(a,b,c){var s,r,q,p=this.$ti
p.A(c).h("1/(2)").a(a)
s=$.A
if(s===B.d){if(b!=null&&!t.C.b(b)&&!t.v.b(b))throw A.d(A.jz(b,"onError",u.c))}else{c.h("@<0/>").A(p.c).h("1(2)").a(a)
if(b!=null)b=A.n5(b,s)}r=new A.D(s,c.h("D<0>"))
q=b==null?1:3
this.al(new A.aB(r,q,a,b,p.h("@<1>").A(c).h("aB<1,2>")))
return r},
dT(a,b){return this.b1(a,null,b)},
bO(a,b,c){var s,r=this.$ti
r.A(c).h("1/(2)").a(a)
s=new A.D($.A,c.h("D<0>"))
this.al(new A.aB(s,19,a,b,r.h("@<1>").A(c).h("aB<1,2>")))
return s},
dj(a){this.a=this.a&1|16
this.c=a},
am(a){this.a=a.a&30|this.a&1
this.c=a.c},
al(a){var s,r=this,q=r.a
if(q<=3){a.a=t.F.a(r.c)
r.c=a}else{if((q&4)!==0){s=t.c.a(r.c)
if((s.a&24)===0){s.al(a)
return}r.am(s)}A.bj(null,null,r.b,t.M.a(new A.i2(r,a)))}},
aT(a){var s,r,q,p,o,n,m=this,l={}
l.a=a
if(a==null)return
s=m.a
if(s<=3){r=t.F.a(m.c)
m.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){n=t.c.a(m.c)
if((n.a&24)===0){n.aT(a)
return}m.am(n)}l.a=m.aq(a)
A.bj(null,null,m.b,t.M.a(new A.i9(l,m)))}},
ap(){var s=t.F.a(this.c)
this.c=null
return this.aq(s)},
aq(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
bw(a){var s,r,q,p=this
p.a^=2
try{a.b1(new A.i6(p),new A.i7(p),t.P)}catch(q){s=A.aq(q)
r=A.aF(q)
A.ju(new A.i8(p,s,r))}},
aJ(a){var s,r=this,q=r.$ti
q.h("1/").a(a)
if(q.h("W<1>").b(a))if(q.b(a))A.j9(a,r)
else r.bw(a)
else{s=r.ap()
q.c.a(a)
r.a=8
r.c=a
A.bK(r,s)}},
aK(a){var s,r=this
r.$ti.c.a(a)
s=r.ap()
r.a=8
r.c=a
A.bK(r,s)},
a5(a,b){var s
t.K.a(a)
t.l.a(b)
s=this.ap()
this.dj(A.fG(a,b))
A.bK(this,s)},
aI(a){var s=this.$ti
s.h("1/").a(a)
if(s.h("W<1>").b(a)){this.bx(a)
return}this.d3(a)},
d3(a){var s=this
s.$ti.c.a(a)
s.a^=2
A.bj(null,null,s.b,t.M.a(new A.i4(s,a)))},
bx(a){var s=this.$ti
s.h("W<1>").a(a)
if(s.b(a)){A.me(a,this)
return}this.bw(a)},
d2(a,b){this.a^=2
A.bj(null,null,this.b,t.M.a(new A.i3(this,a,b)))},
$iW:1}
A.i2.prototype={
$0(){A.bK(this.a,this.b)},
$S:0}
A.i9.prototype={
$0(){A.bK(this.b,this.a.a)},
$S:0}
A.i6.prototype={
$1(a){var s,r,q,p=this.a
p.a^=2
try{p.aK(p.$ti.c.a(a))}catch(q){s=A.aq(q)
r=A.aF(q)
p.a5(s,r)}},
$S:5}
A.i7.prototype={
$2(a,b){this.a.a5(t.K.a(a),t.l.a(b))},
$S:18}
A.i8.prototype={
$0(){this.a.a5(this.b,this.c)},
$S:0}
A.i5.prototype={
$0(){A.j9(this.a.a,this.b)},
$S:0}
A.i4.prototype={
$0(){this.a.aK(this.b)},
$S:0}
A.i3.prototype={
$0(){this.a.a5(this.b,this.c)},
$S:0}
A.ic.prototype={
$0(){var s,r,q,p,o,n,m=this,l=null
try{q=m.a.a
l=q.b.b.c6(t.O.a(q.d),t.z)}catch(p){s=A.aq(p)
r=A.aF(p)
q=m.c&&t.t.a(m.b.a.c).a===s
o=m.a
if(q)o.c=t.t.a(m.b.a.c)
else o.c=A.fG(s,r)
o.b=!0
return}if(l instanceof A.D&&(l.a&24)!==0){if((l.a&16)!==0){q=m.a
q.c=t.t.a(l.c)
q.b=!0}return}if(l instanceof A.D){n=m.b.a
q=m.a
q.c=l.dT(new A.id(n),t.z)
q.b=!1}},
$S:0}
A.id.prototype={
$1(a){return this.a},
$S:19}
A.ib.prototype={
$0(){var s,r,q,p,o,n,m,l
try{q=this.a
p=q.a
o=p.$ti
n=o.c
m=n.a(this.b)
q.c=p.b.b.b0(o.h("2/(1)").a(p.d),m,o.h("2/"),n)}catch(l){s=A.aq(l)
r=A.aF(l)
q=this.a
q.c=A.fG(s,r)
q.b=!0}},
$S:0}
A.ia.prototype={
$0(){var s,r,q,p,o,n,m=this
try{s=t.t.a(m.a.a.c)
p=m.b
if(p.a.dM(s)&&p.a.e!=null){p.c=p.a.dH(s)
p.b=!1}}catch(o){r=A.aq(o)
q=A.aF(o)
p=t.t.a(m.a.a.c)
n=m.b
if(p.a===r)n.c=p
else n.c=A.fG(r,q)
n.b=!0}},
$S:0}
A.ez.prototype={}
A.aP.prototype={
gj(a){var s={},r=new A.D($.A,t.aQ)
s.a=0
this.av(new A.hE(s,this),!0,new A.hF(s,r),r.gbz())
return r},
gu(a){var s=new A.D($.A,A.y(this).h("D<1>")),r=this.av(null,!0,new A.hC(s),s.gbz())
r.aZ(new A.hD(this,r,s))
return s}}
A.hE.prototype={
$1(a){A.y(this.b).c.a(a);++this.a.a},
$S(){return A.y(this.b).h("~(1)")}}
A.hF.prototype={
$0(){this.b.aJ(this.a.a)},
$S:0}
A.hC.prototype={
$0(){var s,r,q,p,o
try{q=A.j0()
throw A.d(q)}catch(p){s=A.aq(p)
r=A.aF(p)
q=s
o=r
if(o==null)o=A.jA(q)
this.a.a5(q,o)}},
$S:0}
A.hD.prototype={
$1(a){A.mG(this.b,this.c,A.y(this.a).c.a(a))},
$S(){return A.y(this.a).h("~(1)")}}
A.cv.prototype={
gt(a){return(A.cj(this.a)^892482866)>>>0},
J(a,b){if(b==null)return!1
if(this===b)return!0
return b instanceof A.aT&&b.a===this.a}}
A.cw.prototype={
bJ(){return this.w.df(this)},
aQ(){A.y(this.w).h("al<1>").a(this)},
aR(){A.y(this.w).h("al<1>").a(this)}}
A.bH.prototype={
aZ(a){var s=A.y(this)
this.sd8(A.kh(this.d,s.h("~(1)?").a(a),s.c))},
au(a){var s,r=this,q=r.e&=4294967279
if((q&8)===0){q=r.e=q|8
if((q&64)!==0){s=r.r
if(s.a===1)s.a=3}if((q&32)===0)r.saS(null)
r.f=r.bJ()}q=$.iS()
return q},
aQ(){},
aR(){},
bJ(){return null},
d1(a){var s,r,q=this,p=q.r
if(p==null){p=new A.cI(A.y(q).h("cI<1>"))
q.saS(p)}s=p.c
if(s==null)p.b=p.c=a
else p.c=s.a=a
r=q.e
if((r&64)===0){r|=64
q.e=r
if(r<128)p.b3(q)}},
aU(a){var s,r=this,q=A.y(r).c
q.a(a)
s=r.e
r.e=s|32
r.d.c8(r.a,a,q)
r.e&=4294967263
r.d5((s&4)!==0)},
d5(a){var s,r,q=this,p=q.e
if((p&64)!==0&&q.r.c==null){p=q.e=p&4294967231
if((p&4)!==0)if(p<128){s=q.r
s=s==null?null:s.c==null
s=s!==!1}else s=!1
else s=!1
if(s){p&=4294967291
q.e=p}}for(;!0;a=r){if((p&8)!==0){q.saS(null)
return}r=(p&4)!==0
if(a===r)break
q.e=p^32
if(r)q.aQ()
else q.aR()
p=q.e&=4294967263}if((p&64)!==0&&p<128)q.r.b3(q)},
sd8(a){this.a=A.y(this).h("~(1)").a(a)},
saS(a){this.r=A.y(this).h("cI<1>?").a(a)},
$ial:1,
$iaU:1}
A.bM.prototype={
av(a,b,c,d){var s=this.$ti
s.h("~(1)?").a(a)
t.Y.a(c)
return this.a.dl(s.h("~(1)?").a(a),d,c,b===!0)},
c_(a){return this.av(a,null,null,null)}}
A.cy.prototype={}
A.cx.prototype={}
A.cI.prototype={
b3(a){var s,r=this
r.$ti.h("aU<1>").a(a)
s=r.a
if(s===1)return
if(s>=1){r.a=1
return}A.ju(new A.ih(r,a))
r.a=1}}
A.ih.prototype={
$0(){var s,r,q,p=this.a,o=p.a
p.a=0
if(o===3)return
s=p.$ti.h("aU<1>").a(this.b)
r=p.b
q=r.a
p.b=q
if(q==null)p.c=null
A.y(r).h("aU<1>").a(s).aU(r.b)},
$S:0}
A.bI.prototype={
aZ(a){this.$ti.h("~(1)?").a(a)},
au(a){this.a=-1
this.saP(null)
return $.iS()},
da(){var s,r,q,p=this,o=p.a-1
if(o===0){p.a=-1
s=p.c
if(s!=null){r=s
q=!0}else{r=null
q=!1}if(q){p.saP(null)
p.b.c7(r)}}else p.a=o},
saP(a){this.c=t.Y.a(a)},
$ial:1}
A.f9.prototype={}
A.iv.prototype={
$0(){return this.a.aJ(this.b)},
$S:0}
A.cT.prototype={$ikg:1}
A.iB.prototype={
$0(){A.lA(this.a,this.b)},
$S:0}
A.f3.prototype={
c7(a){var s,r,q
t.M.a(a)
try{if(B.d===$.A){a.$0()
return}A.kH(null,null,this,a,t.p)}catch(q){s=A.aq(q)
r=A.aF(q)
A.fy(t.K.a(s),t.l.a(r))}},
c8(a,b,c){var s,r,q
c.h("~(0)").a(a)
c.a(b)
try{if(B.d===$.A){a.$1(b)
return}A.kI(null,null,this,a,b,t.p,c)}catch(q){s=A.aq(q)
r=A.aF(q)
A.fy(t.K.a(s),t.l.a(r))}},
bS(a){return new A.ij(this,t.M.a(a))},
ds(a,b){return new A.ik(this,b.h("~(0)").a(a),b)},
c6(a,b){b.h("0()").a(a)
if($.A===B.d)return a.$0()
return A.kH(null,null,this,a,b)},
b0(a,b,c,d){c.h("@<0>").A(d).h("1(2)").a(a)
d.a(b)
if($.A===B.d)return a.$1(b)
return A.kI(null,null,this,a,b,c,d)},
dR(a,b,c,d,e,f){d.h("@<0>").A(e).A(f).h("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.A===B.d)return a.$2(b,c)
return A.n6(null,null,this,a,b,c,d,e,f)},
b_(a,b,c,d){return b.h("@<0>").A(c).A(d).h("1(2,3)").a(a)}}
A.ij.prototype={
$0(){return this.a.c7(this.b)},
$S:0}
A.ik.prototype={
$1(a){var s=this.c
return this.a.c8(this.b,s.a(a),s)},
$S(){return this.c.h("~(0)")}}
A.h7.prototype={
$2(a,b){this.a.i(0,this.b.a(a),this.c.a(b))},
$S:8}
A.e.prototype={
gR(a){return new A.bw(a,this.gj(a),A.af(a).h("bw<e.E>"))},
q(a,b){return this.m(a,b)},
v(a,b){var s,r
A.af(a).h("~(e.E)").a(b)
s=this.gj(a)
for(r=0;r<s;++r){b.$1(this.m(a,r))
if(s!==this.gj(a))throw A.d(A.as(a))}},
gdK(a){return this.gj(a)===0},
gu(a){if(this.gj(a)===0)throw A.d(A.j0())
return this.m(a,0)},
bV(a,b){var s,r=this.gj(a)
for(s=0;s<r;++s){if(J.iU(this.m(a,s),b))return!0
if(r!==this.gj(a))throw A.d(A.as(a))}return!1},
c0(a,b,c){var s=A.af(a)
return new A.bc(a,s.A(c).h("1(e.E)").a(b),s.h("@<e.E>").A(c).h("bc<1,2>"))},
aw(a){var s,r,q,p,o=this
if(o.gdK(a)){s=J.jQ(0,A.af(a).h("e.E"))
return s}r=o.m(a,0)
q=A.jV(o.gj(a),r,!0,A.af(a).h("e.E"))
for(p=1;p<o.gj(a);++p)B.a.i(q,p,o.m(a,p))
return q},
l(a){return A.jP(a,"[","]")}}
A.v.prototype={
v(a,b){var s,r,q,p=A.af(a)
p.h("~(v.K,v.V)").a(b)
for(s=J.d0(this.gS(a)),p=p.h("v.V");s.E();){r=s.gF(s)
q=this.m(a,r)
b.$2(r,q==null?p.a(q):q)}},
gj(a){return J.fE(this.gS(a))},
l(a){return A.ha(a)},
$iL:1}
A.hb.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=r.a+=A.o(a)
r.a=s+": "
r.a+=A.o(b)},
$S:20}
A.cS.prototype={}
A.bx.prototype={
v(a,b){this.a.v(0,this.$ti.h("~(1,2)").a(b))},
gj(a){return this.a.a},
l(a){return A.ha(this.a)},
$iL:1}
A.cs.prototype={}
A.bN.prototype={}
A.eQ.prototype={
m(a,b){var s,r=this.b
if(r==null)return this.c.m(0,b)
else if(typeof b!="string")return null
else{s=r[b]
return typeof s=="undefined"?this.de(b):s}},
gj(a){return this.b==null?this.c.a:this.an().length},
gS(a){var s
if(this.b==null){s=this.c
return new A.bb(s,A.y(s).h("bb<1>"))}return new A.eR(this)},
v(a,b){var s,r,q,p,o=this
t.u.a(b)
if(o.b==null)return o.c.v(0,b)
s=o.an()
for(r=0;r<s.length;++r){q=s[r]
p=o.b[q]
if(typeof p=="undefined"){p=A.ix(o.a[q])
o.b[q]=p}b.$2(q,p)
if(s!==o.c)throw A.d(A.as(o))}},
an(){var s=t.aL.a(this.c)
if(s==null)s=this.c=A.k(Object.keys(this.a),t.s)
return s},
de(a){var s
if(!Object.prototype.hasOwnProperty.call(this.a,a))return null
s=A.ix(this.a[a])
return this.b[a]=s}}
A.eR.prototype={
gj(a){var s=this.a
return s.gj(s)},
q(a,b){var s=this.a
if(s.b==null)s=s.gS(s).q(0,b)
else{s=s.an()
if(!(b<s.length))return A.c(s,b)
s=s[b]}return s},
gR(a){var s=this.a
if(s.b==null){s=s.gS(s)
s=s.gR(s)}else{s=s.an()
s=new J.bm(s,s.length,A.ap(s).h("bm<1>"))}return s}}
A.di.prototype={}
A.dk.prototype={}
A.h4.prototype={
dv(a,b,c){var s=A.n3(b,this.gdw().a)
return s},
gdw(){return B.H}}
A.h5.prototype={}
A.hh.prototype={
$2(a,b){var s,r,q
t.cm.a(a)
s=this.b
r=this.a
q=s.a+=r.a
q+=a.a
s.a=q
s.a=q+": "
s.a+=A.br(b)
r.a=", "},
$S:21}
A.bX.prototype={
J(a,b){if(b==null)return!1
return b instanceof A.bX&&this.a===b.a&&!0},
gt(a){var s=this.a
return(s^B.e.bN(s,30))&1073741823},
l(a){var s=this,r=A.lx(A.lW(s)),q=A.dm(A.lU(s)),p=A.dm(A.lQ(s)),o=A.dm(A.lR(s)),n=A.dm(A.lT(s)),m=A.dm(A.lV(s)),l=A.ly(A.lS(s))
return r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l}}
A.E.prototype={
gaA(){return A.aF(this.$thrownJsError)}}
A.d5.prototype={
l(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.br(s)
return"Assertion failed"}}
A.az.prototype={}
A.ar.prototype={
gaM(){return"Invalid argument"+(!this.a?"(s)":"")},
gaL(){return""},
l(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+A.o(p),n=s.gaM()+q+o
if(!s.a)return n
return n+s.gaL()+": "+A.br(s.gaX())},
gaX(){return this.b}}
A.cl.prototype={
gaX(){return A.mz(this.b)},
gaM(){return"RangeError"},
gaL(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.o(q):""
else if(q==null)s=": Not greater than or equal to "+A.o(r)
else if(q>r)s=": Not in inclusive range "+A.o(r)+".."+A.o(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.o(r)
return s}}
A.dB.prototype={
gaX(){return A.a2(this.b)},
gaM(){return"RangeError"},
gaL(){if(A.a2(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gj(a){return this.f}}
A.dX.prototype={
l(a){var s,r,q,p,o,n,m,l,k=this,j={},i=new A.cp("")
j.a=""
s=k.c
for(r=s.length,q=0,p="",o="";q<r;++q,o=", "){n=s[q]
i.a=p+o
p=i.a+=A.br(n)
j.a=", "}k.d.v(0,new A.hh(j,i))
m=A.br(k.a)
l=i.l(0)
return"NoSuchMethodError: method not found: '"+k.b.a+"'\nReceiver: "+m+"\nArguments: ["+l+"]"}}
A.es.prototype={
l(a){return"Unsupported operation: "+this.a}}
A.eq.prototype={
l(a){return"UnimplementedError: "+this.a}}
A.bg.prototype={
l(a){return"Bad state: "+this.a}}
A.dj.prototype={
l(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.br(s)+"."}}
A.co.prototype={
l(a){return"Stack Overflow"},
gaA(){return null},
$iE:1}
A.i1.prototype={
l(a){return"Exception: "+this.a}}
A.fY.prototype={
l(a){var s=this.a,r=""!==s?"FormatException: "+s:"FormatException"
return r}}
A.i.prototype={
gj(a){var s,r=this.gR(this)
for(s=0;r.E();)++s
return s},
q(a,b){var s,r=this.gR(this)
for(s=b;r.E();){if(s===0)return r.gF(r);--s}throw A.d(A.I(b,b-s,this,"index"))},
l(a){return A.lH(this,"(",")")}}
A.K.prototype={
gt(a){return A.u.prototype.gt.call(this,this)},
l(a){return"null"}}
A.u.prototype={$iu:1,
J(a,b){return this===b},
gt(a){return A.cj(this)},
l(a){return"Instance of '"+A.hn(this)+"'"},
c3(a,b){throw A.d(A.jX(this,t.B.a(b)))},
gC(a){return A.no(this)},
toString(){return this.l(this)}}
A.fc.prototype={
l(a){return""},
$iac:1}
A.cp.prototype={
gj(a){return this.a.length},
l(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
A.l.prototype={}
A.fF.prototype={
gj(a){return a.length}}
A.d2.prototype={
l(a){var s=String(a)
s.toString
return s}}
A.d4.prototype={
l(a){var s=String(a)
s.toString
return s}}
A.b_.prototype={$ib_:1}
A.b1.prototype={$ib1:1}
A.b2.prototype={
sX(a,b){a.height=b},
sY(a,b){a.width=b},
az(a,b,c){var s=a.getContext(b,A.kR(c))
return s},
$ib2:1,
$idb:1}
A.dc.prototype={
saW(a,b){a.fillStyle=b}}
A.ai.prototype={
gj(a){return a.length}}
A.fP.prototype={
gj(a){return a.length}}
A.z.prototype={$iz:1}
A.bV.prototype={
gj(a){var s=a.length
s.toString
return s}}
A.fQ.prototype={}
A.a4.prototype={}
A.at.prototype={}
A.fR.prototype={
gj(a){return a.length}}
A.fS.prototype={
gj(a){return a.length}}
A.fT.prototype={
gj(a){return a.length}}
A.b4.prototype={$ib4:1}
A.bp.prototype={$ibp:1}
A.fU.prototype={
l(a){var s=String(a)
s.toString
return s}}
A.bY.prototype={
gj(a){var s=a.length
s.toString
return s},
m(a,b){var s=a.length,r=b>>>0!==b||b>=s
r.toString
if(r)throw A.d(A.I(b,s,a,null))
s=a[b]
s.toString
return s},
gu(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.d(A.J("No elements"))},
q(a,b){if(!(b<a.length))return A.c(a,b)
return a[b]},
$ir:1,
$ii:1,
$ij:1}
A.bZ.prototype={
l(a){var s,r=a.left
r.toString
s=a.top
s.toString
return"Rectangle ("+A.o(r)+", "+A.o(s)+") "+A.o(this.gY(a))+" x "+A.o(this.gX(a))},
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
if(s===r){s=J.fB(b)
s=this.gY(a)===s.gY(b)&&this.gX(a)===s.gX(b)}else s=!1}else s=!1}else s=!1
return s},
gt(a){var s,r=a.left
r.toString
s=a.top
s.toString
return A.jY(r,s,this.gY(a),this.gX(a))},
gbE(a){return a.height},
gX(a){var s=this.gbE(a)
s.toString
return s},
gbR(a){return a.width},
gY(a){var s=this.gbR(a)
s.toString
return s},
$iay:1}
A.dp.prototype={
gj(a){var s=a.length
s.toString
return s},
m(a,b){var s=a.length,r=b>>>0!==b||b>=s
r.toString
if(r)throw A.d(A.I(b,s,a,null))
s=a[b]
s.toString
return s},
gu(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.d(A.J("No elements"))},
q(a,b){if(!(b<a.length))return A.c(a,b)
return a[b]},
$ir:1,
$ii:1,
$ij:1}
A.fV.prototype={
gj(a){var s=a.length
s.toString
return s}}
A.h.prototype={
l(a){var s=a.localName
s.toString
return s},
$ih:1}
A.f.prototype={$if:1}
A.b.prototype={
dr(a,b,c,d){t.o.a(c)
if(c!=null)this.d0(a,b,c,!1)},
d0(a,b,c,d){return a.addEventListener(b,A.bk(t.o.a(c),1),!1)},
dg(a,b,c,d){return a.removeEventListener(b,A.bk(t.o.a(c),1),!1)},
$ib:1}
A.V.prototype={$iV:1}
A.dr.prototype={
gj(a){var s=a.length
s.toString
return s},
m(a,b){var s=a.length,r=b>>>0!==b||b>=s
r.toString
if(r)throw A.d(A.I(b,s,a,null))
s=a[b]
s.toString
return s},
gu(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.d(A.J("No elements"))},
q(a,b){if(!(b<a.length))return A.c(a,b)
return a[b]},
$ir:1,
$ii:1,
$ij:1}
A.ds.prototype={
gj(a){return a.length}}
A.dv.prototype={
gj(a){return a.length}}
A.a5.prototype={$ia5:1}
A.h0.prototype={
gj(a){var s=a.length
s.toString
return s}}
A.b7.prototype={
gj(a){var s=a.length
s.toString
return s},
m(a,b){var s=a.length,r=b>>>0!==b||b>=s
r.toString
if(r)throw A.d(A.I(b,s,a,null))
s=a[b]
s.toString
return s},
gu(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.d(A.J("No elements"))},
q(a,b){if(!(b<a.length))return A.c(a,b)
return a[b]},
$ir:1,
$ii:1,
$ij:1}
A.c3.prototype={$ic3:1}
A.aL.prototype={
scd(a,b){a.src=b},
$iaL:1,
$idb:1}
A.b8.prototype={$ib8:1}
A.h2.prototype={
gdL(a){return a.isIntersecting}}
A.h9.prototype={
l(a){var s=String(a)
s.toString
return s}}
A.be.prototype={}
A.he.prototype={
gj(a){return a.length}}
A.dM.prototype={
m(a,b){return A.aX(a.get(A.T(b)))},
v(a,b){var s,r,q
t.u.a(b)
s=a.entries()
for(;!0;){r=s.next()
q=r.done
q.toString
if(q)return
q=r.value[0]
q.toString
b.$2(q,A.aX(r.value[1]))}},
gS(a){var s=A.k([],t.s)
this.v(a,new A.hf(s))
return s},
gj(a){var s=a.size
s.toString
return s},
$iL:1}
A.hf.prototype={
$2(a,b){return B.a.k(this.a,a)},
$S:2}
A.dN.prototype={
m(a,b){return A.aX(a.get(A.T(b)))},
v(a,b){var s,r,q
t.u.a(b)
s=a.entries()
for(;!0;){r=s.next()
q=r.done
q.toString
if(q)return
q=r.value[0]
q.toString
b.$2(q,A.aX(r.value[1]))}},
gS(a){var s=A.k([],t.s)
this.v(a,new A.hg(s))
return s},
gj(a){var s=a.size
s.toString
return s},
$iL:1}
A.hg.prototype={
$2(a,b){return B.a.k(this.a,a)},
$S:2}
A.a7.prototype={$ia7:1}
A.dO.prototype={
gj(a){var s=a.length
s.toString
return s},
m(a,b){var s=a.length,r=b>>>0!==b||b>=s
r.toString
if(r)throw A.d(A.I(b,s,a,null))
s=a[b]
s.toString
return s},
gu(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.d(A.J("No elements"))},
q(a,b){if(!(b<a.length))return A.c(a,b)
return a[b]},
$ir:1,
$ii:1,
$ij:1}
A.q.prototype={
l(a){var s=a.nodeValue
return s==null?this.cf(a):s},
$iq:1}
A.cg.prototype={
gj(a){var s=a.length
s.toString
return s},
m(a,b){var s=a.length,r=b>>>0!==b||b>=s
r.toString
if(r)throw A.d(A.I(b,s,a,null))
s=a[b]
s.toString
return s},
gu(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.d(A.J("No elements"))},
q(a,b){if(!(b<a.length))return A.c(a,b)
return a[b]},
$ir:1,
$ii:1,
$ij:1}
A.a8.prototype={
gj(a){return a.length},
$ia8:1}
A.e1.prototype={
gj(a){var s=a.length
s.toString
return s},
m(a,b){var s=a.length,r=b>>>0!==b||b>=s
r.toString
if(r)throw A.d(A.I(b,s,a,null))
s=a[b]
s.toString
return s},
gu(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.d(A.J("No elements"))},
q(a,b){if(!(b<a.length))return A.c(a,b)
return a[b]},
$ir:1,
$ii:1,
$ij:1}
A.e5.prototype={
m(a,b){return A.aX(a.get(A.T(b)))},
v(a,b){var s,r,q
t.u.a(b)
s=a.entries()
for(;!0;){r=s.next()
q=r.done
q.toString
if(q)return
q=r.value[0]
q.toString
b.$2(q,A.aX(r.value[1]))}},
gS(a){var s=A.k([],t.s)
this.v(a,new A.hq(s))
return s},
gj(a){var s=a.size
s.toString
return s},
$iL:1}
A.hq.prototype={
$2(a,b){return B.a.k(this.a,a)},
$S:2}
A.e8.prototype={
gj(a){return a.length}}
A.a0.prototype={$ia0:1}
A.eb.prototype={
gj(a){var s=a.length
s.toString
return s},
m(a,b){var s=a.length,r=b>>>0!==b||b>=s
r.toString
if(r)throw A.d(A.I(b,s,a,null))
s=a[b]
s.toString
return s},
gu(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.d(A.J("No elements"))},
q(a,b){if(!(b<a.length))return A.c(a,b)
return a[b]},
$ir:1,
$ii:1,
$ij:1}
A.aa.prototype={$iaa:1}
A.ec.prototype={
gj(a){var s=a.length
s.toString
return s},
m(a,b){var s=a.length,r=b>>>0!==b||b>=s
r.toString
if(r)throw A.d(A.I(b,s,a,null))
s=a[b]
s.toString
return s},
gu(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.d(A.J("No elements"))},
q(a,b){if(!(b<a.length))return A.c(a,b)
return a[b]},
$ir:1,
$ii:1,
$ij:1}
A.ab.prototype={
gj(a){return a.length},
$iab:1}
A.ee.prototype={
m(a,b){return a.getItem(A.T(b))},
v(a,b){var s,r,q
t.aa.a(b)
for(s=0;!0;++s){r=a.key(s)
if(r==null)return
q=a.getItem(r)
q.toString
b.$2(r,q)}},
gS(a){var s=A.k([],t.s)
this.v(a,new A.hB(s))
return s},
gj(a){var s=a.length
s.toString
return s},
$iL:1}
A.hB.prototype={
$2(a,b){return B.a.k(this.a,a)},
$S:22}
A.S.prototype={$iS:1}
A.a1.prototype={$ia1:1}
A.P.prototype={$iP:1}
A.eh.prototype={
gj(a){var s=a.length
s.toString
return s},
m(a,b){var s=a.length,r=b>>>0!==b||b>=s
r.toString
if(r)throw A.d(A.I(b,s,a,null))
s=a[b]
s.toString
return s},
gu(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.d(A.J("No elements"))},
q(a,b){if(!(b<a.length))return A.c(a,b)
return a[b]},
$ir:1,
$ii:1,
$ij:1}
A.ei.prototype={
gj(a){var s=a.length
s.toString
return s},
m(a,b){var s=a.length,r=b>>>0!==b||b>=s
r.toString
if(r)throw A.d(A.I(b,s,a,null))
s=a[b]
s.toString
return s},
gu(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.d(A.J("No elements"))},
q(a,b){if(!(b<a.length))return A.c(a,b)
return a[b]},
$ir:1,
$ii:1,
$ij:1}
A.hJ.prototype={
gj(a){var s=a.length
s.toString
return s}}
A.ad.prototype={$iad:1}
A.em.prototype={
gj(a){var s=a.length
s.toString
return s},
m(a,b){var s=a.length,r=b>>>0!==b||b>=s
r.toString
if(r)throw A.d(A.I(b,s,a,null))
s=a[b]
s.toString
return s},
gu(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.d(A.J("No elements"))},
q(a,b){if(!(b<a.length))return A.c(a,b)
return a[b]},
$ir:1,
$ii:1,
$ij:1}
A.hK.prototype={
gj(a){return a.length}}
A.hQ.prototype={
l(a){var s=String(a)
s.toString
return s}}
A.eu.prototype={$idb:1}
A.ev.prototype={
gj(a){return a.length}}
A.aS.prototype={
c4(a,b){var s
t.I.a(b)
this.bC(a)
s=A.jn(b,t.H)
s.toString
return this.di(a,s)},
di(a,b){var s=a.requestAnimationFrame(A.bk(t.I.a(b),1))
s.toString
return s},
bC(a){var s=!!(a.requestAnimationFrame&&a.cancelAnimationFrame)
s.toString
if(s)return;(function(b){var r=["ms","moz","webkit","o"]
for(var q=0;q<r.length&&!b.requestAnimationFrame;++q){b.requestAnimationFrame=b[r[q]+"RequestAnimationFrame"]
b.cancelAnimationFrame=b[r[q]+"CancelAnimationFrame"]||b[r[q]+"CancelRequestAnimationFrame"]}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
$iaS:1}
A.ao.prototype={$iao:1}
A.eC.prototype={
gj(a){var s=a.length
s.toString
return s},
m(a,b){var s=a.length,r=b>>>0!==b||b>=s
r.toString
if(r)throw A.d(A.I(b,s,a,null))
s=a[b]
s.toString
return s},
gu(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.d(A.J("No elements"))},
q(a,b){if(!(b<a.length))return A.c(a,b)
return a[b]},
$ir:1,
$ii:1,
$ij:1}
A.cz.prototype={
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
r=J.fB(b)
if(s===r.gY(b)){s=a.height
s.toString
r=s===r.gX(b)
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
return A.jY(p,s,r,q)},
gbE(a){return a.height},
gX(a){var s=a.height
s.toString
return s},
gbR(a){return a.width},
gY(a){var s=a.width
s.toString
return s}}
A.eN.prototype={
gj(a){var s=a.length
s.toString
return s},
m(a,b){var s=a.length,r=b>>>0!==b||b>=s
r.toString
if(r)throw A.d(A.I(b,s,a,null))
return a[b]},
gu(a){if(a.length>0)return a[0]
throw A.d(A.J("No elements"))},
q(a,b){if(!(b<a.length))return A.c(a,b)
return a[b]},
$ir:1,
$ii:1,
$ij:1}
A.cD.prototype={
gj(a){var s=a.length
s.toString
return s},
m(a,b){var s=a.length,r=b>>>0!==b||b>=s
r.toString
if(r)throw A.d(A.I(b,s,a,null))
s=a[b]
s.toString
return s},
gu(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.d(A.J("No elements"))},
q(a,b){if(!(b<a.length))return A.c(a,b)
return a[b]},
$ir:1,
$ii:1,
$ij:1}
A.f7.prototype={
gj(a){var s=a.length
s.toString
return s},
m(a,b){var s=a.length,r=b>>>0!==b||b>=s
r.toString
if(r)throw A.d(A.I(b,s,a,null))
s=a[b]
s.toString
return s},
gu(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.d(A.J("No elements"))},
q(a,b){if(!(b<a.length))return A.c(a,b)
return a[b]},
$ir:1,
$ii:1,
$ij:1}
A.fd.prototype={
gj(a){var s=a.length
s.toString
return s},
m(a,b){var s=a.length,r=b>>>0!==b||b>=s
r.toString
if(r)throw A.d(A.I(b,s,a,null))
s=a[b]
s.toString
return s},
gu(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.d(A.J("No elements"))},
q(a,b){if(!(b<a.length))return A.c(a,b)
return a[b]},
$ir:1,
$ii:1,
$ij:1}
A.iX.prototype={}
A.cA.prototype={
av(a,b,c,d){var s=A.y(this)
s.h("~(1)?").a(a)
t.Y.a(c)
return A.cC(this.a,this.b,a,!1,s.c)}}
A.bJ.prototype={}
A.cB.prototype={
au(a){var s=this
if(s.b==null)return $.iT()
s.bQ()
s.b=null
s.sbG(null)
return $.iT()},
aZ(a){var s,r=this
r.$ti.h("~(1)?").a(a)
if(r.b==null)throw A.d(A.J("Subscription has been canceled."))
r.bQ()
s=A.jn(new A.i0(a),t.A)
r.sbG(s)
r.bP()},
bP(){var s,r=this.d
if(r!=null&&!0){s=this.b
s.toString
J.lf(s,this.c,r,!1)}},
bQ(){var s,r=this.d
if(r!=null){s=this.b
s.toString
J.le(s,this.c,t.o.a(r),!1)}},
sbG(a){this.d=t.o.a(a)},
$ial:1}
A.i_.prototype={
$1(a){return this.a.$1(t.A.a(a))},
$S:9}
A.i0.prototype={
$1(a){return this.a.$1(t.A.a(a))},
$S:9}
A.n.prototype={
gR(a){return new A.dt(a,this.gj(a),A.af(a).h("dt<n.E>"))}}
A.dt.prototype={
E(){var s=this,r=s.c+1,q=s.b
if(r<q){s.sbF(J.ld(s.a,r))
s.c=r
return!0}s.sbF(null)
s.c=q
return!1},
gF(a){var s=this.d
return s==null?this.$ti.c.a(s):s},
sbF(a){this.d=this.$ti.h("1?").a(a)}}
A.eD.prototype={}
A.eF.prototype={}
A.eG.prototype={}
A.eH.prototype={}
A.eI.prototype={}
A.eK.prototype={}
A.eL.prototype={}
A.eO.prototype={}
A.eP.prototype={}
A.eU.prototype={}
A.eV.prototype={}
A.eW.prototype={}
A.eX.prototype={}
A.eY.prototype={}
A.eZ.prototype={}
A.f1.prototype={}
A.f2.prototype={}
A.f4.prototype={}
A.cJ.prototype={}
A.cK.prototype={}
A.f5.prototype={}
A.f6.prototype={}
A.f8.prototype={}
A.fe.prototype={}
A.ff.prototype={}
A.cM.prototype={}
A.cN.prototype={}
A.fi.prototype={}
A.fj.prototype={}
A.fn.prototype={}
A.fo.prototype={}
A.fp.prototype={}
A.fq.prototype={}
A.fr.prototype={}
A.fs.prototype={}
A.ft.prototype={}
A.fu.prototype={}
A.fv.prototype={}
A.fw.prototype={}
A.iw.prototype={
$1(a){this.a.push(A.kw(a))},
$S:1}
A.iI.prototype={
$2(a,b){this.a[a]=A.kw(b)},
$S:8}
A.c8.prototype={$ic8:1}
A.iy.prototype={
$1(a){var s
t.Z.a(a)
s=function(b,c,d){return function(){return b(c,d,this,Array.prototype.slice.apply(arguments))}}(A.mE,a,!1)
A.jh(s,$.fC(),a)
return s},
$S:3}
A.iz.prototype={
$1(a){return new this.a(a)},
$S:3}
A.iD.prototype={
$1(a){return new A.c7(a==null?t.K.a(a):a)},
$S:23}
A.iE.prototype={
$1(a){var s=a==null?t.K.a(a):a
return new A.b9(s,t.a2)},
$S:24}
A.iF.prototype={
$1(a){return new A.aw(a==null?t.K.a(a):a)},
$S:25}
A.aw.prototype={
m(a,b){return A.ky(this.a[b])},
i(a,b,c){if(typeof b!="string"&&typeof b!="number")throw A.d(A.aI("property is not a String or num",null))
this.a[b]=A.kz(c)},
J(a,b){if(b==null)return!1
return b instanceof A.aw&&this.a===b.a},
l(a){var s,r
try{s=String(this.a)
return s}catch(r){s=this.ck(0)
return s}},
gt(a){return 0}}
A.c7.prototype={}
A.b9.prototype={
by(a){var s=this,r=a<0||a>=s.gj(s)
if(r)throw A.d(A.e3(a,0,s.gj(s),null,null))},
m(a,b){this.by(b)
return this.$ti.c.a(this.cg(0,b))},
i(a,b,c){if(A.iA(b))this.by(b)
this.cn(0,b,c)},
gj(a){var s=this.a.length
if(typeof s==="number"&&s>>>0===s)return s
throw A.d(A.J("Bad JsArray length"))},
$ii:1,
$ij:1}
A.bL.prototype={
i(a,b,c){return this.ci(0,b,c)}}
A.ie.prototype={
c2(){return Math.random()}}
A.bA.prototype={
l(a){return"Point("+this.a+", "+this.b+")"},
J(a,b){if(b==null)return!1
return b instanceof A.bA&&this.a===b.a&&this.b===b.b},
gt(a){return A.m1(B.e.gt(this.a),B.e.gt(this.b),0)}}
A.aj.prototype={$iaj:1}
A.dH.prototype={
gj(a){var s=a.length
s.toString
return s},
m(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw A.d(A.I(b,this.gj(a),a,null))
s=a.getItem(b)
s.toString
return s},
gu(a){var s=a.length
s.toString
if(s>0){s=a[0]
s.toString
return s}throw A.d(A.J("No elements"))},
q(a,b){return this.m(a,b)},
$ii:1,
$ij:1}
A.ak.prototype={$iak:1}
A.dY.prototype={
gj(a){var s=a.length
s.toString
return s},
m(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw A.d(A.I(b,this.gj(a),a,null))
s=a.getItem(b)
s.toString
return s},
gu(a){var s=a.length
s.toString
if(s>0){s=a[0]
s.toString
return s}throw A.d(A.J("No elements"))},
q(a,b){return this.m(a,b)},
$ii:1,
$ij:1}
A.hl.prototype={
gj(a){return a.length}}
A.ef.prototype={
gj(a){var s=a.length
s.toString
return s},
m(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw A.d(A.I(b,this.gj(a),a,null))
s=a.getItem(b)
s.toString
return s},
gu(a){var s=a.length
s.toString
if(s>0){s=a[0]
s.toString
return s}throw A.d(A.J("No elements"))},
q(a,b){return this.m(a,b)},
$ii:1,
$ij:1}
A.am.prototype={$iam:1}
A.eo.prototype={
gj(a){var s=a.length
s.toString
return s},
m(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw A.d(A.I(b,this.gj(a),a,null))
s=a.getItem(b)
s.toString
return s},
gu(a){var s=a.length
s.toString
if(s>0){s=a[0]
s.toString
return s}throw A.d(A.J("No elements"))},
q(a,b){return this.m(a,b)},
$ii:1,
$ij:1}
A.eS.prototype={}
A.eT.prototype={}
A.f_.prototype={}
A.f0.prototype={}
A.fa.prototype={}
A.fb.prototype={}
A.fk.prototype={}
A.fl.prototype={}
A.fH.prototype={
gj(a){return a.length}}
A.d7.prototype={
m(a,b){return A.aX(a.get(A.T(b)))},
v(a,b){var s,r,q
t.u.a(b)
s=a.entries()
for(;!0;){r=s.next()
q=r.done
q.toString
if(q)return
q=r.value[0]
q.toString
b.$2(q,A.aX(r.value[1]))}},
gS(a){var s=A.k([],t.s)
this.v(a,new A.fI(s))
return s},
gj(a){var s=a.size
s.toString
return s},
$iL:1}
A.fI.prototype={
$2(a,b){return B.a.k(this.a,a)},
$S:2}
A.d8.prototype={
gj(a){return a.length}}
A.aJ.prototype={}
A.dZ.prototype={
gj(a){return a.length}}
A.eA.prototype={}
A.da.prototype={$ida:1}
A.bo.prototype={$ibo:1}
A.dx.prototype={$idx:1}
A.e2.prototype={$ie2:1}
A.e4.prototype={$ie4:1}
A.cm.prototype={$icm:1}
A.bC.prototype={
ar(a,b,c){return a.bindBuffer(b,c)},
B(a,b,c){return a.bindFramebuffer(b,c)},
bT(a,b,c){return a.bindRenderbuffer(b,c)},
bU(a,b,c){return a.bindTexture(b,c)},
bW(a,b){return a.deleteBuffer(b)},
dz(a,b){return a.deleteFramebuffer(b)},
dA(a,b){return a.deleteProgram(b)},
dB(a,b){return a.deleteRenderbuffer(b)},
bX(a,b){return a.deleteShader(b)},
dC(a,b){return a.deleteTexture(b)},
dF(a,b,c,d,e){return a.framebufferRenderbuffer(b,c,d,e)},
dG(a,b,c,d,e,f){return a.framebufferTexture2D(b,c,d,e,f)},
c9(a,b,c,d,e,f,g,h,i,j){var s=i==null
if(!s&&h!=null&&A.iA(g)){this.dm(a,b,c,d,e,f,g,h,i,j)
return}if(t.R.b(g)&&h==null&&s&&j==null){this.dn(a,b,c,d,e,f,g)
return}if(t.e.b(g)&&h==null&&s&&j==null){this.dq(a,b,c,d,e,f,g)
return}throw A.d(A.aI("Incorrect number or type of arguments",null))},
dS(a,b,c,d,e,f,g){return this.c9(a,b,c,d,e,f,g,null,null,null)},
dm(a,b,c,d,e,f,g,h,i,j){return a.texImage2D(b,c,d,e,f,g,h,i,j)},
dn(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
dq(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
H(a,b,c){return a.uniform1i(b,c)},
cb(a,b,c){return a.uniform2fv(b,c)},
dU(a,b,c){return a.uniform3fv(b,c)},
K(a,b,c){return a.uniform4fv(b,c)},
a2(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
L(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
I(a,b){return a.useProgram(b)},
$ibC:1}
A.e9.prototype={$ie9:1}
A.ej.prototype={$iej:1}
A.ep.prototype={$iep:1}
A.dy.prototype={
gdE(){var s=B.a.dD(this.a,0,new A.fZ(),t.H)
if(typeof s!=="number")return A.nq(s)
return B.c.U(20/s)},
cA(a){var s,r,q=this
A.ku(a)
s=q.f=(a-q.b)*0.001
q.b=a
r=q.c+=s
q.d+=s
q.e+=s
if(r>=0.03333333333333333){s=B.c.b2(r,0.03333333333333333)
q.c=s
r=q.r
if(r!=null)r.$1(0.03333333333333333+s)}s=q.d
if(s>=0.016666666666666666){s=B.c.b2(s,0.016666666666666666)
q.d=s
r=q.w
if(r!=null)r.$1(0.016666666666666666+s)
s=q.a
if(!!s.fixed$length)A.aH(A.bF("removeAt"))
r=s.length
if(0>=r)A.aH(A.k2(0,null))
s.splice(0,1)[0]
B.a.k(s,q.e)
q.e=0}s=window
s.toString
q.x=B.k.c4(s,q.gbr())},
sbK(a){this.r=t.W.a(a)},
sbL(a){this.w=t.W.a(a)}}
A.fZ.prototype={
$2(a,b){return A.ku(a)+A.ir(b)},
$S:27}
A.fL.prototype={
bp(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=d.f,b=d.d,a=d.e.aj(b)
a.a7()
s=b.aj(a)
r=t.n
b=A.k([a.a,a.b,a.c,s.a,s.b,s.c,b.a,b.b,b.c],r)
q=new A.bd(b)
p=b.length
if(0>=p)return A.c(b,0)
o=b[0]
if(3>=p)return A.c(b,3)
n=b[3]
if(6>=p)return A.c(b,6)
m=b[6]
l=b[1]
k=b[4]
if(7>=p)return A.c(b,7)
j=b[7]
i=b[2]
h=b[5]
if(8>=p)return A.c(b,8)
q.sG(0,A.k([o,n,m,l,k,j,i,h,b[8]],r))
r=c.a
b=c.b
c=c.c
h=q.a
i=h.length
if(0>=i)return A.c(h,0)
j=h[0]
if(typeof j!=="number")return j.n()
if(3>=i)return A.c(h,3)
k=h[3]
if(typeof k!=="number")return k.n()
if(6>=i)return A.c(h,6)
l=h[6]
if(typeof l!=="number")return l.n()
m=h[1]
if(typeof m!=="number")return m.n()
n=h[4]
if(typeof n!=="number")return n.n()
if(7>=i)return A.c(h,7)
o=h[7]
if(typeof o!=="number")return o.n()
p=h[2]
if(typeof p!=="number")return p.n()
g=h[5]
if(typeof g!=="number")return g.n()
if(8>=i)return A.c(h,8)
h=h[8]
if(typeof h!=="number")return h.n()
i=d.c
i.bg()
f=q.a
e=i.a
if(0>=f.length)return A.c(f,0)
B.a.i(e,0,f[0])
e=i.a
if(1>=f.length)return A.c(f,1)
B.a.i(e,1,f[1])
e=i.a
if(2>=f.length)return A.c(f,2)
B.a.i(e,2,f[2])
e=i.a
if(3>=f.length)return A.c(f,3)
B.a.i(e,4,f[3])
e=i.a
if(4>=f.length)return A.c(f,4)
B.a.i(e,5,f[4])
e=i.a
if(5>=f.length)return A.c(f,5)
B.a.i(e,6,f[5])
e=i.a
if(6>=f.length)return A.c(f,6)
B.a.i(e,8,f[6])
e=i.a
if(7>=f.length)return A.c(f,7)
B.a.i(e,9,f[7])
e=i.a
if(8>=f.length)return A.c(f,8)
B.a.i(e,10,f[8])
i.bi(new A.Z(-(j*r+k*b+l*c),-(m*r+n*b+o*c),-(p*r+g*b+h*c)))
d.a.sG(0,A.Y(d.b.n(0,i).a,t.i))}}
A.hx.prototype={}
A.b3.prototype={
gdQ(){var s=this
return A.k([s.a,s.b,s.c,s.d],t.n)}}
A.fX.prototype={
ac(a){var s=0,r=A.jl(t.R),q,p,o
var $async$ac=A.jm(function(b,c){if(b===1)return A.je(c,r)
while(true)switch(s){case 0:o=document.createElement("img")
o.toString
B.D.scd(o,a)
p=new A.bJ(o,"load",!1,t.bt)
s=3
return A.is(p.gu(p),$async$ac)
case 3:q=A.jJ(o,t.R)
s=1
break
case 1:return A.jf(q,r)}})
return A.jg($async$ac,r)}}
A.h_.prototype={}
A.bd.prototype={
n(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this.a,a1=a0.length
if(0>=a1)return A.c(a0,0)
s=a0[0]
if(3>=a1)return A.c(a0,3)
r=a0[3]
if(6>=a1)return A.c(a0,6)
q=a0[6]
p=a0[1]
o=a0[4]
if(7>=a1)return A.c(a0,7)
n=a0[7]
m=a0[2]
l=a0[5]
if(8>=a1)return A.c(a0,8)
k=a0[8]
j=a3.a
a0=j.length
if(0>=a0)return A.c(j,0)
i=j[0]
if(1>=a0)return A.c(j,1)
h=j[1]
if(2>=a0)return A.c(j,2)
g=j[2]
if(3>=a0)return A.c(j,3)
f=j[3]
if(4>=a0)return A.c(j,4)
e=j[4]
if(5>=a0)return A.c(j,5)
d=j[5]
if(6>=a0)return A.c(j,6)
c=j[6]
if(7>=a0)return A.c(j,7)
b=j[7]
if(8>=a0)return A.c(j,8)
a=j[8]
return new A.bd(A.k([s*i+r*h+q*g,p*i+o*h+n*g,m*i+l*h+k*g,s*f+r*e+q*d,p*f+o*e+n*d,m*f+l*e+k*d,s*c+r*b+q*a,p*c+o*b+n*a,m*c+l*b+k*a],t.n))},
l(a){var s,r,q,p,o,n,m,l,k=this,j=k.a
if(0>=j.length)return A.c(j,0)
j=A.o(j[0])
s=k.a
if(1>=s.length)return A.c(s,1)
s=A.o(s[1])
r=k.a
if(2>=r.length)return A.c(r,2)
r=A.o(r[2])
q=k.a
if(3>=q.length)return A.c(q,3)
q=A.o(q[3])
p=k.a
if(4>=p.length)return A.c(p,4)
p=A.o(p[4])
o=k.a
if(5>=o.length)return A.c(o,5)
o=A.o(o[5])
n=k.a
if(6>=n.length)return A.c(n,6)
n=A.o(n[6])
m=k.a
if(7>=m.length)return A.c(m,7)
m=A.o(m[7])
l=k.a
if(8>=l.length)return A.c(l,8)
return"      ["+j+", "+s+", "+r+"]\n      ["+q+", "+p+", "+o+"]\n      ["+n+", "+m+", "+A.o(l[8])+"]\n    "},
sG(a,b){this.a=t.w.a(b)}}
A.by.prototype={
bg(){this.sG(0,A.k([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t.n))},
n(b6,b7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this.a,b5=b4.length
if(0>=b5)return A.c(b4,0)
s=b4[0]
if(4>=b5)return A.c(b4,4)
r=b4[4]
if(8>=b5)return A.c(b4,8)
q=b4[8]
if(12>=b5)return A.c(b4,12)
p=b4[12]
o=b4[1]
n=b4[5]
m=b4[9]
if(13>=b5)return A.c(b4,13)
l=b4[13]
k=b4[2]
j=b4[6]
i=b4[10]
if(14>=b5)return A.c(b4,14)
h=b4[14]
g=b4[3]
f=b4[7]
e=b4[11]
if(15>=b5)return A.c(b4,15)
d=b4[15]
c=b7.a
b4=c.length
if(0>=b4)return A.c(c,0)
b=c[0]
if(4>=b4)return A.c(c,4)
a=c[4]
if(8>=b4)return A.c(c,8)
a0=c[8]
if(12>=b4)return A.c(c,12)
a1=c[12]
a2=c[1]
a3=c[5]
a4=c[9]
if(13>=b4)return A.c(c,13)
a5=c[13]
a6=c[2]
a7=c[6]
a8=c[10]
if(14>=b4)return A.c(c,14)
a9=c[14]
b0=c[3]
b1=c[7]
b2=c[11]
if(15>=b4)return A.c(c,15)
b3=c[15]
return new A.by(A.k([s*b+r*a2+q*a6+p*b0,o*b+n*a2+m*a6+l*b0,k*b+j*a2+i*a6+h*b0,g*b+f*a2+e*a6+d*b0,s*a+r*a3+q*a7+p*b1,o*a+n*a3+m*a7+l*b1,k*a+j*a3+i*a7+h*b1,g*a+f*a3+e*a7+d*b1,s*a0+r*a4+q*a8+p*b2,o*a0+n*a4+m*a8+l*b2,k*a0+j*a4+i*a8+h*b2,g*a0+f*a4+e*a8+d*b2,s*a1+r*a5+q*a9+p*b3,o*a1+n*a5+m*a9+l*b3,k*a1+j*a5+i*a9+h*b3,g*a1+f*a5+e*a9+d*b3],t.n))},
l(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=d.a
if(0>=c.length)return A.c(c,0)
c=A.o(c[0])
s=d.a
if(1>=s.length)return A.c(s,1)
s=A.o(s[1])
r=d.a
if(2>=r.length)return A.c(r,2)
r=A.o(r[2])
q=d.a
if(3>=q.length)return A.c(q,3)
q=A.o(q[3])
p=d.a
if(4>=p.length)return A.c(p,4)
p=A.o(p[4])
o=d.a
if(5>=o.length)return A.c(o,5)
o=A.o(o[5])
n=d.a
if(6>=n.length)return A.c(n,6)
n=A.o(n[6])
m=d.a
if(7>=m.length)return A.c(m,7)
m=A.o(m[7])
l=d.a
if(8>=l.length)return A.c(l,8)
l=A.o(l[8])
k=d.a
if(9>=k.length)return A.c(k,9)
k=A.o(k[9])
j=d.a
if(10>=j.length)return A.c(j,10)
j=A.o(j[10])
i=d.a
if(11>=i.length)return A.c(i,11)
i=A.o(i[11])
h=d.a
if(12>=h.length)return A.c(h,12)
h=A.o(h[12])
g=d.a
if(13>=g.length)return A.c(g,13)
g=A.o(g[13])
f=d.a
if(14>=f.length)return A.c(f,14)
f=A.o(f[14])
e=d.a
if(15>=e.length)return A.c(e,15)
return"      ["+c+", "+s+", "+r+", "+q+"]\n      ["+p+", "+o+", "+n+", "+m+"]\n      ["+l+", "+k+", "+j+", "+i+"]\n      ["+h+", "+g+", "+f+", "+A.o(e[15])+"]\n    "},
sG(a,b){this.a=t.w.a(b)}}
A.e_.prototype={}
A.bB.prototype={
l(a){return"["+A.o(this.a)+", "+A.o(this.b)+"]"}}
A.Z.prototype={
ah(a,b){return new A.Z(this.a-b.a,this.b-b.b,this.c-b.c)},
aC(a){var s=this
s.a=s.a+a.a
s.b=s.b+a.b
s.c=s.c+a.c},
ai(a){this.a=a.a
this.b=a.b
this.c=a.c},
l(a){return"["+A.o(this.a)+", "+A.o(this.b)+", "+A.o(this.c)+"]"}}
A.ck.prototype={}
A.ho.prototype={
c5(a){var s=this,r=s.d,q=s.c,p=-q,o=s.b,n=-o,m=s.a,l=-m,k=a.a,j=a.c,i=a.b,h=r*k+l*0+n*j-p*i,g=r*i+n*0+p*k-l*j,f=r*j+p*0+l*i-n*k,e=r*0-l*k-n*i-p*j
return new A.an(e*m+h*r+g*q-f*o,e*o+g*r+f*m-h*q,e*q+f*r+h*o-g*m)}}
A.Q.prototype={
bh(a,b,c){var s=this
B.a.i(s.a,0,a)
B.a.i(s.a,4,b)
B.a.i(s.a,6,0-0.5*a)
B.a.i(s.a,7,0-0.5*b)},
aF(a){var s=this,r=Math.cos(a),q=Math.sin(a)
B.a.i(s.a,0,r)
B.a.i(s.a,1,q)
B.a.i(s.a,3,-q)
B.a.i(s.a,4,r)}}
A.aQ.prototype={
gca(){var s,r,q=this.a,p=q.length
if(12>=p)return A.c(q,12)
s=q[12]
if(13>=p)return A.c(q,13)
r=q[13]
if(14>=p)return A.c(q,14)
return new A.Z(s,r,q[14])},
bi(a){B.a.i(this.a,12,a.a)
B.a.i(this.a,13,a.b)
B.a.i(this.a,14,a.c)},
n(a8,a9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6=this.a,a7=a6.length
if(0>=a7)return A.c(a6,0)
s=a6[0]
if(4>=a7)return A.c(a6,4)
r=a6[4]
if(8>=a7)return A.c(a6,8)
q=a6[8]
if(12>=a7)return A.c(a6,12)
p=a6[12]
o=a6[1]
n=a6[5]
m=a6[9]
if(13>=a7)return A.c(a6,13)
l=a6[13]
k=a6[2]
j=a6[6]
i=a6[10]
if(14>=a7)return A.c(a6,14)
h=a6[14]
g=a9.a
a6=g.length
if(0>=a6)return A.c(g,0)
f=g[0]
if(4>=a6)return A.c(g,4)
e=g[4]
if(8>=a6)return A.c(g,8)
d=g[8]
if(12>=a6)return A.c(g,12)
c=g[12]
b=g[1]
a=g[5]
a0=g[9]
if(13>=a6)return A.c(g,13)
a1=g[13]
a2=g[2]
a3=g[6]
a4=g[10]
if(14>=a6)return A.c(g,14)
a5=g[14]
return new A.aQ(A.k([s*f+r*b+q*a2,o*f+n*b+m*a2,k*f+j*b+i*a2,0,s*e+r*a+q*a3,o*e+n*a+m*a3,k*e+j*a+i*a3,0,s*d+r*a0+q*a4,o*d+n*a0+m*a4,k*d+j*a0+i*a4,0,s*c+r*a1+q*a5+p,o*c+n*a1+m*a5+l,k*c+j*a1+i*a5+h,1],t.n))}}
A.an.prototype={
n(a,b){return new A.an(this.a*b,this.b*b,this.c*b)},
a7(){var s=this,r=s.a,q=s.b,p=s.c,o=Math.sqrt(r*r+q*q+p*p)
s.a/=o
s.b/=o
s.c/=o},
aj(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new A.an(s*r-q*p,q*o-n*r,n*p-s*o)},
aD(a){this.a=a.a
this.b=a.b
this.c=a.c},
l(a){return"["+A.o(this.a)+", "+A.o(this.b)+", "+A.o(this.c)+"]"}}
A.ea.prototype={}
A.ah.prototype={}
A.b0.prototype={}
A.dd.prototype={}
A.au.prototype={}
A.h1.prototype={}
A.hV.prototype={}
A.fK.prototype={}
A.fW.prototype={
b6(a){var s=this.a,r=s.byteLength
this.a=new Uint16Array(A.cU(B.a.ag(B.r.aw(s),B.r.aw(a))))
return new A.h1(a.length,r,5123)},
b5(a){var s=this.b,r=s.byteLength
this.b=new Float32Array(A.cU(B.a.ag(B.q.aw(s),B.q.aw(a))))
return new A.hV(r)}}
A.dn.prototype={}
A.dw.prototype={
cz(a,b,c){var s,r,q=this,p=36161
q.c=a
s=a.a.createFramebuffer()
s.toString
q.d=s
if(c){r=q.c.a
s=r.createRenderbuffer()
s.toString
q.e=s
B.b.B(r,36160,q.d)
B.b.bT(r,p,q.e)
s=b.b
r.renderbufferStorage(p,33189,A.a2(s.a),A.a2(s.b))
B.b.dF(r,36160,36096,p,q.e)
B.b.bT(r,p,null)
B.b.B(r,36160,null)}s=b.b
q.a=A.a2(s.a)
q.b=A.a2(s.b)},
D(){var s,r,q=this
q.f.D()
q.f=null
s=q.e
if(s!=null){r=q.c.a
r.toString
B.b.dB(r,s)
q.e=null}s=q.c.a
s.toString
B.b.dz(s,q.d)
q.c=null}}
A.bR.prototype={
b8(a,b,c,d){var s,r,q,p,o,n,m=this
m.ce(a,c,d)
s=m.c.a
s.toString
B.b.B(s,36160,m.d)
s=new A.el()
s.d=a
r=a.a.createTexture()
r.toString
s.f=r
s.a3(b)
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
B.b.c9(n,3553,0,6408,r,q,0,6408,5121,p)
s.bs(33071,9729)
s.cu()
m.f=s
p=m.c.a
p.toString
s=s.f
s.toString
B.b.dG(p,36160,36064,3553,s,0)
s=m.c.a
s.toString
B.b.B(s,36160,null)},
b7(a,b,c){return this.b8(a,b,c,!1)}}
A.dJ.prototype={}
A.dK.prototype={
P(a){var s,r,q,p=this.a
p.c=a
p.e=p.bq(35633,p.a)
p.f=p.bq(35632,p.b)
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
if(p.c.a.getProgramParameter(s,35714)==null){r=p.gbA().getProgramInfoLog(s)
r.toString
A.aH(A.dq("Invalide program\n          "+r+"\n        "))}p.d=s},
D(){var s=this.a,r=s.c.a
r.toString
B.b.dA(r,s.d)
r=s.c.a
r.toString
B.b.bX(r,s.e)
r=s.c.a
r.toString
B.b.bX(r,s.f)
s.c=null}}
A.ci.prototype={
O(){var s,r,q,p,o,n,m=this
for(s=m.c.a,r=s.length,q=m.b.b,p=0;p<s.length;s.length===r||(0,A.M)(s),++p){o=s[p]
n=o.b
m.e.a.vertexAttribPointer(n,o.c,5126,!1,o.d,q+o.e)
m.e.a.enableVertexAttribArray(n)}},
M(){var s,r,q,p
for(s=this.c.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.M)(s),++q){p=s[q]
this.e.a.disableVertexAttribArray(p.b)}},
N(){var s=this.a
this.e.a.drawElements(this.d,s.a,s.c,s.b)}}
A.a9.prototype={
gbA(){var s=this.c.a
s.toString
return s},
bq(a,b){var s,r=this,q=r.c.a.createShader(a)
q.toString
r.c.a.shaderSource(q,b)
r.c.a.compileShader(q)
s=r.c.a.getShaderParameter(q,35713)
s.toString
if(!A.jd(s)){q=r.gbA().getShaderInfoLog(q)
q.toString
throw A.d(A.dq("Invalide shader\n          type:"+a+" "+q+"\n        "))}return q}}
A.el.prototype={
D(){var s=this,r=s.d.a
r.toString
B.b.dC(r,s.f)
s.d=s.f=null},
a3(a){var s
this.e=a
s=this.d.a
s.activeTexture(33984+a)
B.b.bU(s,3553,this.f)},
a4(a){var s,r,q=this
if(a)q.aG($.l0())
else{s=q.d.a
s.toString
r=q.e
r.toString
s.activeTexture(33984+r)}s=q.d.a
s.toString
B.b.bU(s,3553,null)
q.e=null},
cu(){return this.a4(!1)},
bj(a,b){var s,r=this,q=r.d.a
q.toString
s=r.e
s.toString
q.activeTexture(33984+s)
r.d.a.pixelStorei(37440,1)
s=r.d.a
s.toString
B.b.dS(s,3553,0,6408,6408,5121,a)
r.d.a.pixelStorei(37440,0)
r.bs(33071,b)},
aG(a){return this.bj(a,9729)},
bs(a,b){var s=this,r=3553
s.d.a.texParameteri(r,10240,b)
s.d.a.texParameteri(r,10241,b)
s.d.a.texParameteri(r,10242,a)
s.d.a.texParameteri(r,10243,a)}}
A.hP.prototype={
p(a,b){var s,r
this.b=a
s=a.a
s.toString
r=b.d
r.toString
r=s.getUniformLocation(r,this.a)
r.toString
this.c=r}}
A.hR.prototype={}
A.hT.prototype={}
A.hU.prototype={}
A.hc.prototype={}
A.hd.prototype={}
A.hr.prototype={}
A.bG.prototype={}
A.hp.prototype={}
A.ex.prototype={
sa9(a,b){this.a.clearColor(0,0,0,1)
this.a.clearDepth(b.f)
this.a.clear(b.a)},
sc1(a,b){this.a.colorMask(b.a,!0,b.c,b.d)
this.a.depthMask(!0)},
sV(a){var s=this
s.a.enable(3042)
s.a.blendFunc(a.a,a.b)
s.a.blendEquation(32774)
s.a.blendColor(a.d,a.e,a.f,a.r)},
sa1(a){if(a==null){this.a.disable(2884)
return}this.a.enable(2884)
this.a.cullFace(a.a)},
sa6(a){if(a==null){this.a.disable(2929)
return}this.a.enable(2929)
this.a.depthFunc(515)},
scc(a,b){var s,r=this.a
r.toString
s=b.b
r.viewport(0,0,A.a2(s.a),A.a2(s.b))},
cr(a,b){var s,r,q,p=this,o=t.z
o=t.aM.a(B.f.az(a,"webgl2",A.jU(["alpha",!1,"antialias",!0,"depth",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],o,o)))
p.a=o
A.m6(b,o)
for(o=b.f,s=o.length,r=0;r<o.length;o.length===s||(0,A.M)(o),++r){q=o[r]
p.a.getExtension(q)}p.a.frontFace(2305)
p.a.pixelStorei(37441,0)}}
A.eB.prototype={
P(a){var s,r=this
r.a_(a)
s=r.a
r.c.p(a,s)
r.d.p(a,s)},
D(){this.Z()
var s=this.c
s.b=s.c=null
s=this.d
s.b=s.c=null}}
A.fO.prototype={}
A.hy.prototype={}
A.hz.prototype={}
A.hA.prototype={}
A.fg.prototype={
P(a){var s,r=this
r.a_(a)
s=r.a
r.c.p(a,s)
r.d.p(a,s)},
D(){this.Z()
var s=this.c
s.b=s.c=null
s=this.d
s.b=s.c=null}}
A.hI.prototype={}
A.fh.prototype={
P(a){this.a_(a)
this.c.p(a,this.a)},
D(){this.Z()
var s=this.c
s.b=s.c=null}}
A.ek.prototype={
P(a){this.cq(a)
this.f.p(a,this.a)}}
A.C.prototype={}
A.ew.prototype={
cI(a,b){var s,r
t.j.a(a)
t.a0.a(b)
s=J.lh(a)
r=A.jd(J.li(s))
this.e=r
if(r)this.c.k(0,s)
else this.d.k(0,s)}}
A.d3.prototype={
b9(){var s,r,q,p,o=this
o.cw()
s=o.b
r=s.a
s.f.unobserve(r)
s.f.disconnect()
s=o.c
q=window
q.toString
p=s.x
p.toString
B.k.bC(q)
q.cancelAnimationFrame(p)
s.sbK(null)
s.sbL(null)
s=o.a
s.children.toString
A.md(s,r)
o.y.aE(o)
o.y=new A.bq()},
ak(){var s,r=this.b,q=r.a,p=document,o=p.documentElement
o.toString
B.e.U(A.iW(q,o).a)
p=p.documentElement
p.toString
B.e.U(A.iW(q,p).b)
p=q.clientWidth
p.toString
o=window.devicePixelRatio
o.toString
o=B.c.U(p*o)
p=q.clientHeight
p.toString
s=window.devicePixelRatio
s.toString
s=B.c.U(p*s)
r.b=new A.ck(new A.bB(o,s))
B.f.sY(q,o)
B.f.sX(q,A.a2(r.b.b.b))
r.f.takeRecords().toString
this.y.bd(this)},
aa(a){var s=this
s.y.aE(s)
s.y=a
a.a8(s)},
cw(){var s,r,q
for(s=this.d,r=s.length,q=0;q<s.length;s.length===r||(0,A.M)(s),++q)s[q].au(0)
B.a.W(s)},
cC(a){return this.b9()},
cM(a){return this.ak()},
cE(a){return this.ak()},
cS(a){return this.y.ad(this)},
cU(a){return this.y.ae(this)},
cG(a){return this.y.bb(this)},
cK(a){return this.y.bc(this)},
cO(a){this.y.be(this,a)},
cQ(a){var s=this
s.y.bf(s,a)
s.y.ba(s)}}
A.aZ.prototype={
a8(a){},
aE(a){},
be(a,b){},
bf(a,b){},
bd(a){},
bb(a){},
bc(a){},
ae(a){},
ad(a){},
ba(a){}}
A.bq.prototype={}
A.c2.prototype={
a8(a){a.f.ae(a)
a.ak()},
aE(a){a.f.ad(a)},
bf(a,b){var s,r,q,p,o,n
a.r.ct(b)
s=a.e
r=s.a
q=a.x
p=r.r
o=r.f
p.aD(r.x.ah(0,o))
n=r.w
p=p.n(0,r.y).n(0,b)
n.a=p.a
n.b=p.b
n.c=p.c
o.aC(n)
p=r.d
p.aD(o.ah(0,q.e))
p.a7()
r.bp()
s.bm(q)
s.bn()},
bd(a){a.f.bo(a.b.b)},
bc(a){a.aa(new A.cn())},
ae(a){a.f.ae(a)},
ad(a){a.f.ad(a)},
ba(a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=null,a0=36160,a1=a3.f,a2=a3.x
a1.scc(0,a2.a)
a1.cX(a3)
s=a3.e
r=a1.f
q=r.c.a
q.toString
B.b.B(q,a0,r.d)
a1.sa1(new A.au(1028))
a1.sa9(0,new A.dd(16640,1))
q=a1.as
p=q.a
o=p.c.a
o.toString
B.b.I(o,p.d)
p=s.a
o=p.a
n=q.r
m=t.r
l=m.a(o.n(0,s.b).a)
k=n.b.a
k.toString
B.b.L(k,n.c,!1,l)
l=a1.r
n=l.f.e
n.toString
k=q.c
j=k.b.a
j.toString
B.b.H(j,k.c,n)
q=q.d
n=m.a(a2.dx.a)
k=q.b.a
k.toString
B.b.a2(k,q.c,!1,n)
n=a1.dx
n.O()
n.N()
n.M()
n=r.c.a
n.toString
B.b.B(n,a0,a)
a1.a.flush()
n=r.c.a
n.toString
B.b.B(n,a0,r.d)
a1.sa6(a)
a1.sa1(new A.au(1029))
a1.sV(A.d9())
a1.sc1(0,new A.dJ(!1,!1,!1))
n=a1.cy
q=n.a
k=q.c.a
k.toString
B.b.I(k,q.d)
k=n.c
j=m.a(o.a)
i=k.b.a
i.toString
B.b.L(i,k.c,!1,j)
j=s.e
i=n.d
h=m.a(j.a)
g=i.b.a
g.toString
B.b.L(g,i.c,!1,h)
p=p.f
n.bl(p)
n.bk(a2.fx)
h=a1.dx
h.O()
h.N()
a1.sa1(new A.au(1028))
a1.sV(new A.b0(0,770,0,0,0,0))
h=a1.CW
g=h.a
f=g.c.a
f.toString
B.b.I(f,g.d)
g=h.c
f=m.a(o.a)
e=g.b.a
e.toString
B.b.L(e,g.c,!1,f)
f=h.d
g=m.a(j.a)
e=f.b.a
e.toString
B.b.L(e,f.c,!1,g)
g=s.w
f=g.gca()
e=h.e
d=t.a
f=m.a(A.k([f.a,f.b,f.c,1],d))
c=e.b.a
c.toString
B.b.K(c,e.c,f)
h=h.f
f=m.a(A.k([1,1,1,1],d))
e=h.b.a
e.toString
B.b.K(e,h.c,f)
f=a1.dx
f.N()
f.M()
a1.sc1(0,new A.dJ(!0,!0,!0))
f=r.c.a
f.toString
B.b.B(f,a0,a)
a1.a.flush()
a1.cW(a3)
f=r.c.a
f.toString
B.b.B(f,a0,r.d)
f=A.jG()
a1.sV(new A.b0(32769,0,f.a,f.b,f.c,f.d))
f=a1.Q
h=f.a
e=h.c.a
e.toString
B.b.I(e,h.d)
h=s.c
e=f.f
c=m.a(o.n(0,h).a)
b=e.b.a
b.toString
B.b.L(b,e.c,!1,c)
c=a1.x.e
c.toString
f=f.c
e=f.b.a
e.toString
B.b.H(e,f.c,c)
c=a1.dx
c.O()
c.N()
c.M()
a1.sa6(new A.dn())
c=A.jG()
a1.sV(new A.b0(32769,770,c.a,c.b,c.c,c.d))
c=a1.cx
f=c.a
e=f.c.a
e.toString
B.b.I(e,f.d)
f=c.c
e=m.a(o.a)
b=f.b.a
b.toString
B.b.L(b,f.c,!1,e)
e=c.d
h=m.a(h.a)
f=e.b.a
f.toString
B.b.L(f,e.c,!1,h)
h=a1.w.f.e
h.toString
e=c.e
f=e.b.a
f.toString
B.b.H(f,e.c,h)
h=c.f
e=m.a(a2.at.a)
f=h.b.a
f.toString
B.b.a2(f,h.c,!1,e)
e=c.r
h=m.a(A.k([p.a,p.b,p.c,1],d))
f=e.b.a
f.toString
B.b.K(f,e.c,h)
h=s.x
e=c.w
h=m.a(A.k([h.a,h.b,h.c,1],d))
f=e.b.a
f.toString
B.b.K(f,e.c,h)
h=c.x
e=m.a(A.k([1.4,0.54,1.05],d))
f=h.b.a
f.toString
B.b.dU(f,h.c,e)
e=l.f.e
e.toString
c=c.y
h=c.b.a
h.toString
B.b.H(h,c.c,e)
e=a1.dy
e.O()
e.N()
e.M()
a1.sV(new A.b0(0,771,0,0,0,0))
e=q.c.a
e.toString
B.b.I(e,q.d)
q=m.a(o.a)
e=k.b.a
e.toString
B.b.L(e,k.c,!1,q)
j=m.a(j.a)
q=i.b.a
q.toString
B.b.L(q,i.c,!1,j)
n.bl(p)
n.bk(a2.fy)
a2=a1.dx
a2.O()
a2.N()
a2.M()
a2=r.c.a
a2.toString
B.b.B(a2,a0,a)
a1.a.flush()
a1.cV(a3)
a2=r.c.a
a2.toString
B.b.B(a2,a0,r.d)
a1.sa6(new A.dn())
a2=a1.at
n=a2.a
p=n.c.a
p.toString
B.b.I(p,n.d)
n=a2.f
g=m.a(o.n(0,g).a)
o=n.b.a
o.toString
B.b.L(o,n.c,!1,g)
l=l.f.e
l.toString
a2=a2.c
g=a2.b.a
g.toString
B.b.H(g,a2.c,l)
l=a1.db
l.O()
l.N()
l.M()
l=r.c.a
l.toString
B.b.B(l,a0,a)
a1.a.flush()
a1.scc(0,a3.b.b)
a1.sa6(a)
a1.sa1(new A.au(1029))
a1.sV(A.d9())
a1.sa9(0,A.de())
l=a1.ay
a2=l.a
g=a2.c.a
g.toString
B.b.I(g,a2.d)
a2=l.c
g=m.a(a1.b.a)
n=a2.b.a
n.toString
B.b.a2(n,a2.c,!1,g)
r=r.f.e
r.toString
g=l.d
a2=g.b.a
a2.toString
B.b.H(a2,g.c,r)
r=a1.z.e
r.toString
g=l.e
a2=g.b.a
a2.toString
B.b.H(a2,g.c,r)
l=l.f
d=m.a(A.k([1.4,0,0,0],d))
m=l.b.a
m.toString
B.b.K(m,l.c,d)
d=a1.db
d.O()
d.N()
d.M()
a1.a.flush()}}
A.c9.prototype={
a8(a){var s=0,r=A.jl(t.z)
var $async$a8=A.jm(function(b,c){if(b===1)return A.je(c,r)
while(true)switch(s){case 0:s=2
return A.is(a.w.ab(a.x),$async$a8)
case 2:return A.jf(null,r)}})
return A.jg($async$a8,r)},
be(a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
if(a1.w.b)return
s=a1.r
r=s.a
B.a.k(r,A.bW(300,-1,1,0.3141592653589793,-0.06283185307179587))
B.a.k(r,A.bW(500,-1,0.6,1.2566370614359172,-0.031415926535897934))
B.a.k(r,A.bW(600,-1,0.4,0.6283185307179586,-0.015707963267948967))
B.a.k(r,A.bW(300,1,1,0.9424777960769379,0.06283185307179587))
B.a.k(r,A.bW(500,1,0.6,1.5707963267948966,0.031415926535897934))
B.a.k(r,A.bW(600,1,0.4,0,0.015707963267948967))
r=s.b
B.a.k(r,A.fN(0,100,-200))
B.a.k(r,A.fN(0.5,100,-200))
B.a.k(r,A.fN(0,100,200))
B.a.k(r,A.fN(0.5,100,200))
s.cv()
s=a1.e
r=s.a
q=a1.x
p=q.c
o=1/Math.tan(p.a*0.5)
n=p.c
m=p.d
l=n/(n-m)
n=r.b
B.a.i(n.a,0,o/p.b)
B.a.i(n.a,1,0)
B.a.i(n.a,2,0)
B.a.i(n.a,3,0)
B.a.i(n.a,4,0)
B.a.i(n.a,5,o)
B.a.i(n.a,6,0)
B.a.i(n.a,7,0)
B.a.i(n.a,8,0)
B.a.i(n.a,9,0)
B.a.i(n.a,10,l)
B.a.i(n.a,11,-1)
B.a.i(n.a,12,0)
B.a.i(n.a,13,0)
B.a.i(n.a,14,m*l)
B.a.i(n.a,15,0)
m=t.i
r.a.sG(0,A.Y(n.n(0,r.c).a,m))
n=q.d
p=r.f
p.ai(n)
r.x.ai(n)
k=r.r
k.a=k.b=k.c=0
k=r.d
k.aD(p.ah(0,q.e))
k.a7()
r.bp()
j=A.en(6)
s.b.sG(0,A.Y(A.hM(n).n(0,j).a,m))
n=q.Q.a
r=n.length
if(0>=r)return A.c(n,0)
k=n[0]
if(1>=r)return A.c(n,1)
p=n[1]
if(2>=r)return A.c(n,2)
i=n[2]
if(3>=r)return A.c(n,3)
h=n[3]
if(4>=r)return A.c(n,4)
g=n[4]
if(5>=r)return A.c(n,5)
f=n[5]
if(6>=r)return A.c(n,6)
e=n[6]
if(7>=r)return A.c(n,7)
d=n[7]
if(8>=r)return A.c(n,8)
r=t.n
s.c.sG(0,A.Y(new A.aQ(A.k([k,p,i,0,h,g,f,0,e,d,n[8],0,0,0,0,1],r)).n(0,A.en(1.5)).a,m))
j=A.en(1.52)
n=q.as
s.d.sG(0,A.Y(A.hM(n).n(0,j).a,m))
d=s.x
d.ai(n)
d.aC(q.z.c5(q.y))
j=A.en(1.6)
s.e.sG(0,A.Y(A.hM(n).n(0,j).a,m))
c=A.j3(5.97,0,0.38)
b=new A.Z(n.a,n.b,n.c)
b.aC(c.c5(q.r))
n=s.r
n.bg()
n.bi(b)
s.bm(q)
s.bn()
s=a1.f
q=q.a.b
s.d.sG(0,A.Y(A.k([2/q.a,0,0,0,2/q.b,0,0,0,1],r),m))
m=s.e
s.db=new A.ci(m.b6(new Uint16Array(A.cU(A.k([0,1,3,2],t.d)))),m.b5(new Float32Array(A.cU(A.k([0,1,0,0,1,0,1,1],r)))),A.et(),5)
A.lC(4,!0,!0)
r=$.jM
r.toString
a=m.b6(r)
r=$.jN
r.toString
a0=m.b5(r)
s.dy=new A.ci(a,a0,A.kf(),4)
s.dx=new A.ci(a,a0,A.j7(8),4)
if(a1.b.e)a1.aa(new A.c2())
else a1.aa(new A.cn())}}
A.fJ.prototype={
$0(){return $.d_().c.gdE()},
$S:11}
A.hj.prototype={
cv(){var s,r,q,p
for(s=this.c,r=t.n,q=0;q<12;++q){p=0.08333333333333333*q
B.a.k(s,new A.du(new A.Q(A.k([1,0,0,0,1,0,0,0,1],r)),new A.Q(A.k([1,0,0,0,1,0,0,0,1],r)),new A.Q(A.k([1,0,0,0,1,0,0,0,1],r)),new A.b3(0,1,0,1),p,p*2*3.141592653589793))}},
ct(a){var s,r,q,p,o,n,m,l,k,j,i
for(s=this.a,r=s.length,q=t.i,p=0;p<s.length;s.length===r||(0,A.M)(s),++p){o=s[p]
n=o.e+=a
m=o.b
m.aF(o.f+o.r*n)
B.a.i(m.a,6,200*o.w)
o.a.sG(0,A.Y(m.n(0,o.c).a,q))}for(s=this.b,r=s.length,n=a*0.05,p=0;p<s.length;s.length===r||(0,A.M)(s),++p){l=s[p]
m=l.f+=n
if(m>=1){l.f=m-1
m=l.b
m.aF(0+(-0.6283185307179586+1.2566370614359172*$.jv().c2()))
k=l.d
B.a.i(m.a,6,k.a)
B.a.i(m.a,7,k.b)}j=800+200*l.f
m=l.c
m.bh(j,j,new A.e_())
l.e.d=0.5-0.5*Math.cos(l.f*2*3.141592653589793)
l.a.sG(0,A.Y(l.b.n(0,m).a,q))}for(s=this.c,r=s.length,n=a*0.2,p=0;p<s.length;s.length===r||(0,A.M)(s),++p){i=s[p]
m=i.e+=n
if(m>=1){i.e=m-1
i.b.aF(i.r+(-0.6283185307179586+1.2566370614359172*$.jv().c2()))}j=100+1700*i.e
m=i.c
m.bh(j,j,new A.e_())
i.d.d=1+-1*i.e
i.a.sG(0,A.Y(i.b.n(0,m).a,q))}}}
A.dl.prototype={}
A.dh.prototype={}
A.du.prototype={}
A.hs.prototype={
bm(a){var s,r,q,p,o=this.a.f.ah(0,this.r.gca()),n=new A.an(o.a,o.b,o.c)
n.a7()
s=A.hM(new A.Z(-0.5,-0.5,0))
r=A.aR()
q=new A.an(0,1,0).aj(n)
q.a7()
p=n.aj(q)
B.a.i(r.a,0,q.a)
B.a.i(r.a,1,q.b)
B.a.i(r.a,2,q.c)
B.a.i(r.a,4,p.a)
B.a.i(r.a,5,p.b)
B.a.i(r.a,6,p.c)
B.a.i(r.a,8,n.a)
B.a.i(r.a,9,n.b)
B.a.i(r.a,10,n.c)
this.f.sG(0,A.Y(A.en(1).n(0,r).n(0,s).a,t.i))},
bn(){this.w.sG(0,A.Y(this.r.n(0,this.f).a,t.i))}}
A.e7.prototype={
ae(a){var s,r,q,p,o,n,m,l=this,k=a.b,j=A.k([],t.s)
l.cr(k.a,new A.hp(!1,!0,!0,j))
j=l.e
j.c=l
s=l.a.createBuffer()
s.toString
j.d=s
s=l.a.createBuffer()
s.toString
j.e=s
s=j.c.a
s.toString
B.b.ar(s,34963,j.d)
s=j.c.a
s.toString
B.b.ar(s,34962,j.e)
j.c.a.bufferData(34963,j.a,35044)
j.c.a.bufferData(34962,j.b,35044)
j=l.f
s=a.x.a
j.b8(l,0,s,!0)
r=l.r
r.b7(l,0,s)
q=l.w
q.b7(l,0,s)
s=l.x
s.d=l
p=l.a.createTexture()
p.toString
s.f=p
p=l.y
p.d=l
o=l.a.createTexture()
o.toString
p.f=o
o=l.z
o.d=l
n=l.a.createTexture()
n.toString
o.f=n
l.db.e=l
l.dx.e=l
l.dy.e=l
l.at.P(l)
l.Q.P(l)
n=l.as
n.cp(l)
n.r.p(l,n.a)
n=l.ax
n.cm(l)
n.r.p(l,n.a)
n=l.ch
n.a_(l)
m=n.a
n.c.p(l,m)
n.d.p(l,m)
n.e.p(l,m)
m=l.ay
m.a_(l)
n=m.a
m.c.p(l,n)
m.d.p(l,n)
m.e.p(l,n)
m.f.p(l,n)
n=l.CW
n.a_(l)
m=n.a
n.e.p(l,m)
n.f.p(l,m)
n.c.p(l,m)
n.d.p(l,m)
m=l.cx
m.a_(l)
n=m.a
m.e.p(l,n)
m.y.p(l,n)
m.f.p(l,n)
m.r.p(l,n)
m.w.p(l,n)
m.x.p(l,n)
m.c.p(l,n)
m.d.p(l,n)
n=l.cy
n.a_(l)
m=n.a
n.c.p(l,m)
n.d.p(l,m)
n.e.p(l,m)
n.f.p(l,m)
n.r.p(l,m)
j.f.a3(0)
r.f.a3(1)
q.f.a3(2)
s.a3(3)
q=a.w
r=q.d
r.toString
s.aG(r)
p.a3(4)
r=q.c
r.toString
p.aG(r)
o.a3(5)
q=q.e
q.toString
o.bj(q,9728)
l.bo(k.b)},
bo(a){var s=a.b,r=s.b/s.a
s=this.b
B.a.i(s.a,0,2*r)
B.a.i(s.a,4,2)
B.a.i(s.a,6,-r)
B.a.i(s.a,7,-1)},
ad(a){var s,r,q,p,o,n,m,l=this,k=l.f
k.f.a4(!0)
s=l.r
s.f.a4(!0)
r=l.w
r.f.a4(!0)
q=l.x
q.a4(!0)
p=l.y
p.a4(!0)
o=l.z
o.a4(!0)
n=l.at
n.b4()
n=n.f
n.b=n.c=null
n=l.Q
n.b4()
n=n.f
n.b=n.c=null
n=l.as
n.co()
n=n.r
n.b=n.c=null
n=l.ax
n.cl()
n=n.r
n.b=n.c=null
n=l.ch
n.Z()
m=n.c
m.b=m.c=null
m=n.d
m.b=m.c=null
n=n.e
n.b=n.c=null
n=l.ay
n.Z()
m=n.c
m.b=m.c=null
m=n.d
m.b=m.c=null
m=n.e
m.b=m.c=null
n=n.f
n.b=n.c=null
n=l.CW
n.Z()
m=n.e
m.b=m.c=null
m=n.f
m.b=m.c=null
m=n.c
m.b=m.c=null
n=n.d
n.b=n.c=null
n=l.cx
n.Z()
m=n.e
m.b=m.c=null
m=n.y
m.b=m.c=null
m=n.f
m.b=m.c=null
m=n.r
m.b=m.c=null
m=n.w
m.b=m.c=null
m=n.x
m.b=m.c=null
m=n.c
m.b=m.c=null
n=n.d
n.b=n.c=null
n=l.cy
n.Z()
m=n.c
m.b=m.c=null
m=n.d
m.b=m.c=null
m=n.e
m.b=m.c=null
m=n.f
m.b=m.c=null
n=n.r
n.b=n.c=null
l.db.e=null
l.dx.e=null
l.dy.e=null
q.D()
p.D()
o.D()
k.D()
s.D()
r.D()
r=l.e
s=r.c.a
s.toString
B.b.ar(s,34963,null)
s=r.c.a
s.toString
B.b.ar(s,34962,null)
s=r.c.a
s.toString
B.b.bW(s,r.d)
s=r.c.a
s.toString
B.b.bW(s,r.e)
l.a=r.c=null},
cX(a){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.r,f=g.c.a
f.toString
B.b.B(f,36160,g.d)
h.sa6(null)
h.sa1(new A.au(1029))
h.sV(A.d9())
h.sa9(0,A.de())
f=h.ax
s=f.a
r=s.c.a
r.toString
B.b.I(r,s.d)
s=f.r
r=t.r
q=r.a(h.c.a)
p=s.b.a
p.toString
B.b.a2(p,s.c,!1,q)
q=h.x.e
q.toString
p=f.c
o=p.b.a
o.toString
B.b.H(o,p.c,q)
f=f.d
q=r.a(A.lv().gdQ())
o=f.b.a
o.toString
B.b.K(o,f.c,q)
q=h.db
q.O()
q.N()
q=h.y.e
q.toString
o=p.b.a
o.toString
B.b.H(o,p.c,q)
for(q=a.r.b,p=q.length,o=h.d,n=t.n,m=0;m<q.length;q.length===p||(0,A.M)(q),++m){l=q[m]
k=r.a(o.n(0,l.a).a)
j=s.b.a
j.toString
B.b.a2(j,s.c,!1,k)
k=l.e
k=r.a(A.k([k.a,k.b,k.c,k.d],n))
j=f.b.a
j.toString
B.b.K(j,f.c,k)
k=h.db
j=k.e.a
j.toString
i=k.d
k=k.a
j.drawElements(i,k.a,k.c,k.b)}h.db.M()
g=g.c.a
g.toString
B.b.B(g,36160,null)
h.a.flush()},
cW(a){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=36160,e=h.r,d=e.c.a
d.toString
B.b.B(d,f,e.d)
h.sa6(g)
h.sa1(g)
h.sV(A.d9())
h.sa9(0,A.de())
d=h.ax
s=d.a
r=s.c.a
r.toString
B.b.I(r,s.d)
s=h.y.e
s.toString
r=d.c
q=r.b.a
q.toString
B.b.H(q,r.c,s)
h.db.O()
for(s=a.r.a,r=s.length,q=h.d,p=d.r,o=t.r,d=d.d,n=t.n,m=0;m<s.length;s.length===r||(0,A.M)(s),++m){l=s[m]
k=o.a(q.n(0,l.a).a)
j=p.b.a
j.toString
B.b.a2(j,p.c,!1,k)
k=l.d
k=o.a(A.k([k.a,k.b,k.c,k.d],n))
j=d.b.a
j.toString
B.b.K(j,d.c,k)
k=h.db
j=k.e.a
j.toString
i=k.d
k=k.a
j.drawElements(i,k.a,k.c,k.b)}d=e.c.a
d.toString
B.b.B(d,f,g)
h.a.flush()
d=h.w
s=d.c.a
s.toString
B.b.B(s,f,d.d)
h.sa1(new A.au(1029))
h.sa9(0,A.de())
s=h.ch
r=s.a
q=r.c.a
q.toString
B.b.I(q,r.d)
r=s.c
q=o.a(h.c.a)
p=r.b.a
p.toString
B.b.a2(p,r.c,!1,q)
e=e.f.e
e.toString
q=s.d
r=q.b.a
r.toString
B.b.H(r,q.c,e)
s=s.e
o=o.a(A.k([0.00027,0.27],t.a))
e=s.b.a
e.toString
B.b.cb(e,s.c,o)
o=h.db
o.N()
o.M()
d=d.c.a
d.toString
B.b.B(d,f,g)
h.a.flush()},
cV(a){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.r,f=g.c.a
f.toString
B.b.B(f,36160,g.d)
h.sa6(null)
h.sa1(new A.au(1029))
h.sV(A.d9())
h.sa9(0,A.de())
f=h.ax
s=f.a
r=s.c.a
r.toString
B.b.I(r,s.d)
s=h.y.e
s.toString
r=f.c
q=r.b.a
q.toString
B.b.H(q,r.c,s)
h.db.O()
for(s=a.r.c,r=s.length,q=h.d,p=f.r,o=t.r,f=f.d,n=t.n,m=0;m<s.length;s.length===r||(0,A.M)(s),++m){l=s[m]
k=o.a(q.n(0,l.a).a)
j=p.b.a
j.toString
B.b.a2(j,p.c,!1,k)
k=l.d
k=o.a(A.k([k.a,k.b,k.c,k.d],n))
j=f.b.a
j.toString
B.b.K(j,f.c,k)
k=h.db
j=k.e.a
j.toString
i=k.d
k=k.a
j.drawElements(i,k.a,k.c,k.b)}h.db.M()
g=g.c.a
g.toString
B.b.B(g,36160,null)
h.a.flush()}}
A.ht.prototype={}
A.hv.prototype={}
A.hw.prototype={
bl(a){var s=this.e,r=t.r.a(A.k([a.a,a.b,a.c,1],t.a)),q=s.b.a
q.toString
B.b.K(q,s.c,r)},
bk(a){var s=this.f,r=t.a,q=t.r,p=q.a(A.k([a.a,a.b,a.c,0],r)),o=s.b.a
o.toString
B.b.K(o,s.c,p)
p=this.r
r=q.a(A.k([a.e,a.f],r))
q=p.b.a
q.toString
B.b.cb(q,p.c,r)}}
A.cn.prototype={
bb(a){a.aa(new A.c2())}}
A.hG.prototype={
ab(a){var s=0,r=A.jl(t.z),q=this,p
var $async$ab=A.jm(function(b,c){if(b===1)return A.je(c,r)
while(true)switch(s){case 0:q.b=!0
p=q.a
s=2
return A.is(p.ac("media/texture/scene000a.png"),$async$ab)
case 2:q.sdd(c)
s=3
return A.is(p.ac("media/texture/scene000b.png"),$async$ab)
case 3:q.sdc(c)
p=A.fM(3,256)
q.e=p
p=p.getContext("2d")
p.toString
B.i.saW(p,q.aH('{"#000000":0,"#221F4D":0.06,"#AB262C":0.4,"#D16A33":0.6,"#FEFB9A":0.99,"#FFFFFF":1.0}'))
p.fillRect(0,0,256,1)
B.i.saW(p,q.aH('{"#000000":0,"#F1F524":0.49,"#FFFFFF":1.0}'))
p.fillRect(0,1,256,1)
B.i.saW(p,q.aH('{"#000000":0,"#660543":0.17,"#B04A4A":0.36,"#FFCA38":0.67}'))
p.fillRect(0,2,256,1)
q.b=!1
return A.jf(null,r)}})
return A.jg($async$ab,r)},
aH(a){var s=A.lK(t.f.a(B.A.dv(0,a,null)),t.N,t.i),r=this.e.getContext("2d").createLinearGradient(0,0,256,1)
r.toString
s.v(0,new A.hH(r))
return r},
sdd(a){this.c=t.E.a(a)},
sdc(a){this.d=t.E.a(a)}}
A.hH.prototype={
$2(a,b){var s,r,q
A.T(a)
A.ir(b)
s=A.jr(B.h.aB(a,1,3),16)
r=A.jr(B.h.aB(a,3,5),16)
q=A.jr(B.h.aB(a,5,7),16)
return this.a.addColorStop(b,"rgba("+B.c.U(s/256*256)+", "+B.c.U(r/256*256)+", "+B.c.U(q/256*256)+", 1)")},
$S:29};(function aliases(){var s=J.bs.prototype
s.cf=s.l
s=J.ba.prototype
s.cj=s.l
s=A.u.prototype
s.ck=s.l
s=A.aw.prototype
s.cg=s.m
s.ci=s.i
s=A.bL.prototype
s.cn=s.i
s=A.dw.prototype
s.ce=s.cz
s=A.dK.prototype
s.a_=s.P
s.Z=s.D
s=A.eB.prototype
s.cm=s.P
s.cl=s.D
s=A.fg.prototype
s.cp=s.P
s.co=s.D
s=A.fh.prototype
s.cq=s.P
s.b4=s.D})();(function installTearOffs(){var s=hunkHelpers._static_1,r=hunkHelpers._static_0,q=hunkHelpers._static_2,p=hunkHelpers._instance_2u,o=hunkHelpers._instance_0u,n=hunkHelpers._instance_1u
s(A,"ne","m9",4)
s(A,"nf","ma",4)
s(A,"ng","mb",4)
r(A,"kP","n8",0)
s(A,"nh","n0",1)
q(A,"nj","n2",7)
r(A,"ni","n1",0)
p(A.D.prototype,"gbz","a5",7)
o(A.bI.prototype,"gd9","da",0)
s(A,"ny","ky",30)
n(A.dy.prototype,"gbr","cA",26)
p(A.ew.prototype,"gcH","cI",28)
var m
o(m=A.d3.prototype,"gcs","b9",0)
n(m,"gcB","cC",1)
n(m,"gcL","cM",1)
n(m,"gcD","cE",1)
n(m,"gcR","cS",1)
n(m,"gcT","cU",1)
n(m,"gcF","cG",1)
n(m,"gcJ","cK",1)
n(m,"gcN","cO",10)
n(m,"gcP","cQ",10)
q(A,"nC","m2",31)
r(A,"nB","lw",11)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.mixinHard,q=hunkHelpers.inherit,p=hunkHelpers.inheritMany
q(A.u,null)
p(A.u,[A.j1,J.bs,J.bm,A.E,A.aK,A.hu,A.i,A.bw,A.N,A.bD,A.bx,A.bS,A.dD,A.hN,A.hi,A.c0,A.cL,A.ii,A.v,A.h6,A.dI,A.a_,A.eM,A.io,A.il,A.ey,A.bQ,A.aP,A.bH,A.cu,A.aB,A.D,A.ez,A.cy,A.cI,A.bI,A.f9,A.cT,A.e,A.cS,A.di,A.dk,A.bX,A.co,A.i1,A.fY,A.K,A.fc,A.cp,A.fQ,A.iX,A.cB,A.n,A.dt,A.aw,A.ie,A.bA,A.dy,A.fL,A.b3,A.fX,A.h_,A.bd,A.by,A.e_,A.bB,A.Z,A.ck,A.ho,A.an,A.ea,A.ah,A.b0,A.dd,A.au,A.h1,A.hV,A.fK,A.dn,A.dw,A.dJ,A.dK,A.ci,A.a9,A.el,A.hP,A.bG,A.hp,A.ex,A.C,A.ew,A.d3,A.aZ,A.hj,A.dl,A.dh,A.du,A.hs,A.hv,A.hG])
p(J.bs,[J.dC,J.c5,J.a,J.bu,J.bv,J.c6,J.bt])
p(J.a,[J.ba,J.B,A.dP,A.cd,A.b,A.fF,A.f,A.b1,A.dc,A.at,A.z,A.eD,A.a4,A.fT,A.fU,A.eF,A.bZ,A.eH,A.fV,A.eK,A.a5,A.h0,A.eO,A.c3,A.b8,A.h2,A.h9,A.he,A.eU,A.eV,A.a7,A.eW,A.eY,A.a8,A.f1,A.f4,A.aa,A.f5,A.ab,A.f8,A.S,A.fe,A.hJ,A.ad,A.fi,A.hK,A.hQ,A.fn,A.fp,A.fr,A.ft,A.fv,A.c8,A.aj,A.eS,A.ak,A.f_,A.hl,A.fa,A.am,A.fk,A.fH,A.eA,A.da,A.dx,A.e2,A.e4,A.cm,A.bC,A.e9,A.ej,A.ep])
p(J.ba,[J.e0,J.cr,J.av])
q(J.h3,J.B)
p(J.c6,[J.c4,J.dE])
p(A.E,[A.dG,A.az,A.dF,A.er,A.eE,A.e6,A.eJ,A.d5,A.ar,A.dX,A.es,A.eq,A.bg,A.dj])
p(A.aK,[A.df,A.dg,A.eg,A.iM,A.iO,A.hX,A.hW,A.it,A.i6,A.id,A.hE,A.hD,A.ik,A.i_,A.i0,A.iw,A.iy,A.iz,A.iD,A.iE,A.iF])
p(A.df,[A.iR,A.hY,A.hZ,A.im,A.i2,A.i9,A.i8,A.i5,A.i4,A.i3,A.ic,A.ib,A.ia,A.hF,A.hC,A.ih,A.iv,A.iB,A.ij,A.fJ])
q(A.c_,A.i)
p(A.c_,[A.ax,A.bb])
p(A.ax,[A.bc,A.eR])
q(A.bN,A.bx)
q(A.cs,A.bN)
q(A.bT,A.cs)
q(A.bU,A.bS)
p(A.dg,[A.hm,A.iN,A.iu,A.iC,A.i7,A.h7,A.hb,A.hh,A.hf,A.hg,A.hq,A.hB,A.iI,A.fI,A.fZ,A.hH])
q(A.ch,A.az)
p(A.eg,[A.ed,A.bn])
p(A.v,[A.a6,A.eQ])
p(A.cd,[A.dQ,A.bz])
p(A.bz,[A.cE,A.cG])
q(A.cF,A.cE)
q(A.cb,A.cF)
q(A.cH,A.cG)
q(A.cc,A.cH)
p(A.cb,[A.ca,A.dR])
p(A.cc,[A.dS,A.dT,A.dU,A.ce,A.dV,A.cf,A.dW])
q(A.cO,A.eJ)
p(A.aP,[A.bM,A.cA])
q(A.cv,A.bM)
q(A.aT,A.cv)
q(A.cw,A.bH)
q(A.ae,A.cw)
q(A.ct,A.cu)
q(A.cx,A.cy)
q(A.f3,A.cT)
q(A.h4,A.di)
q(A.h5,A.dk)
p(A.ar,[A.cl,A.dB])
p(A.b,[A.q,A.ds,A.a0,A.cJ,A.a1,A.P,A.cM,A.ev,A.aS,A.ao,A.d8,A.aJ])
p(A.q,[A.h,A.ai])
q(A.l,A.h)
p(A.l,[A.d2,A.d4,A.b2,A.bp,A.dv,A.aL,A.be,A.e8])
p(A.f,[A.b_,A.b4,A.bo])
q(A.fP,A.at)
q(A.bV,A.eD)
p(A.a4,[A.fR,A.fS])
q(A.eG,A.eF)
q(A.bY,A.eG)
q(A.eI,A.eH)
q(A.dp,A.eI)
q(A.V,A.b1)
q(A.eL,A.eK)
q(A.dr,A.eL)
q(A.eP,A.eO)
q(A.b7,A.eP)
q(A.dM,A.eU)
q(A.dN,A.eV)
q(A.eX,A.eW)
q(A.dO,A.eX)
q(A.eZ,A.eY)
q(A.cg,A.eZ)
q(A.f2,A.f1)
q(A.e1,A.f2)
q(A.e5,A.f4)
q(A.cK,A.cJ)
q(A.eb,A.cK)
q(A.f6,A.f5)
q(A.ec,A.f6)
q(A.ee,A.f8)
q(A.ff,A.fe)
q(A.eh,A.ff)
q(A.cN,A.cM)
q(A.ei,A.cN)
q(A.fj,A.fi)
q(A.em,A.fj)
q(A.eu,A.be)
q(A.fo,A.fn)
q(A.eC,A.fo)
q(A.cz,A.bZ)
q(A.fq,A.fp)
q(A.eN,A.fq)
q(A.fs,A.fr)
q(A.cD,A.fs)
q(A.fu,A.ft)
q(A.f7,A.fu)
q(A.fw,A.fv)
q(A.fd,A.fw)
q(A.bJ,A.cA)
p(A.aw,[A.c7,A.bL])
q(A.b9,A.bL)
q(A.eT,A.eS)
q(A.dH,A.eT)
q(A.f0,A.f_)
q(A.dY,A.f0)
q(A.fb,A.fa)
q(A.ef,A.fb)
q(A.fl,A.fk)
q(A.eo,A.fl)
q(A.d7,A.eA)
q(A.dZ,A.aJ)
q(A.hx,A.fL)
q(A.Q,A.bd)
q(A.aQ,A.by)
q(A.fW,A.fK)
q(A.bR,A.dw)
p(A.hP,[A.hR,A.hT,A.hU,A.hc,A.hd,A.hr])
p(A.dK,[A.eB,A.hy,A.hz,A.hA,A.fg,A.fh,A.ht,A.hw])
q(A.fO,A.eB)
q(A.hI,A.fg)
q(A.ek,A.fh)
p(A.aZ,[A.bq,A.c2,A.c9,A.cn])
q(A.e7,A.ex)
s(A.cE,A.e)
s(A.cF,A.N)
s(A.cG,A.e)
s(A.cH,A.N)
s(A.bN,A.cS)
s(A.eD,A.fQ)
s(A.eF,A.e)
s(A.eG,A.n)
s(A.eH,A.e)
s(A.eI,A.n)
s(A.eK,A.e)
s(A.eL,A.n)
s(A.eO,A.e)
s(A.eP,A.n)
s(A.eU,A.v)
s(A.eV,A.v)
s(A.eW,A.e)
s(A.eX,A.n)
s(A.eY,A.e)
s(A.eZ,A.n)
s(A.f1,A.e)
s(A.f2,A.n)
s(A.f4,A.v)
s(A.cJ,A.e)
s(A.cK,A.n)
s(A.f5,A.e)
s(A.f6,A.n)
s(A.f8,A.v)
s(A.fe,A.e)
s(A.ff,A.n)
s(A.cM,A.e)
s(A.cN,A.n)
s(A.fi,A.e)
s(A.fj,A.n)
s(A.fn,A.e)
s(A.fo,A.n)
s(A.fp,A.e)
s(A.fq,A.n)
s(A.fr,A.e)
s(A.fs,A.n)
s(A.ft,A.e)
s(A.fu,A.n)
s(A.fv,A.e)
s(A.fw,A.n)
r(A.bL,A.e)
s(A.eS,A.e)
s(A.eT,A.n)
s(A.f_,A.e)
s(A.f0,A.n)
s(A.fa,A.e)
s(A.fb,A.n)
s(A.fk,A.e)
s(A.fl,A.n)
s(A.eA,A.v)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{m:"int",t:"double",G:"num",p:"String",iH:"bool",K:"Null",j:"List"},mangledNames:{},types:["~()","~(@)","~(p,@)","@(@)","~(~())","K(@)","K()","~(u,ac)","~(@,@)","~(f)","~(t)","m()","W<K>()","@(@,p)","@(p)","K(~())","K(@,ac)","~(m,@)","K(u,ac)","D<@>(@)","~(u?,u?)","~(bE,@)","~(p,p)","c7(@)","b9<@>(@)","aw(@)","~(G)","t(G,t)","~(j<@>,b8)","~(p,t)","u?(@)","~(t,t)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti")}
A.mv(v.typeUniverse,JSON.parse('{"e0":"ba","cr":"ba","av":"ba","nJ":"f","nW":"f","nM":"aJ","nK":"b","o1":"b","o3":"b","o0":"h","nO":"l","nY":"q","nV":"q","oh":"P","nU":"ao","nQ":"ai","o5":"ai","nZ":"b7","nR":"z","nS":"S","nN":"be","dC":{"iH":[],"x":[]},"c5":{"K":[],"x":[]},"B":{"j":["1"],"i":["1"]},"h3":{"B":["1"],"j":["1"],"i":["1"]},"c6":{"t":[],"G":[]},"c4":{"t":[],"m":[],"G":[],"x":[]},"dE":{"t":[],"G":[],"x":[]},"bt":{"p":[],"x":[]},"dG":{"E":[]},"c_":{"i":["1"]},"ax":{"i":["1"]},"bc":{"ax":["2"],"i":["2"],"ax.E":"2"},"bD":{"bE":[]},"bT":{"cs":["1","2"],"bN":["1","2"],"bx":["1","2"],"cS":["1","2"],"L":["1","2"]},"bS":{"L":["1","2"]},"bU":{"bS":["1","2"],"L":["1","2"]},"dD":{"jO":[]},"ch":{"az":[],"E":[]},"dF":{"E":[]},"er":{"E":[]},"cL":{"ac":[]},"aK":{"b5":[]},"df":{"b5":[]},"dg":{"b5":[]},"eg":{"b5":[]},"ed":{"b5":[]},"bn":{"b5":[]},"eE":{"E":[]},"e6":{"E":[]},"a6":{"v":["1","2"],"jS":["1","2"],"L":["1","2"],"v.K":"1","v.V":"2"},"bb":{"i":["1"]},"dP":{"x":[]},"cd":{"F":[]},"dQ":{"F":[],"x":[]},"bz":{"r":["1"],"F":[]},"cb":{"e":["t"],"j":["t"],"r":["t"],"F":[],"i":["t"],"N":["t"]},"cc":{"e":["m"],"j":["m"],"r":["m"],"F":[],"i":["m"],"N":["m"]},"ca":{"e":["t"],"iY":[],"j":["t"],"r":["t"],"F":[],"i":["t"],"N":["t"],"x":[],"e.E":"t"},"dR":{"e":["t"],"j":["t"],"r":["t"],"F":[],"i":["t"],"N":["t"],"x":[],"e.E":"t"},"dS":{"e":["m"],"j":["m"],"r":["m"],"F":[],"i":["m"],"N":["m"],"x":[],"e.E":"m"},"dT":{"e":["m"],"j":["m"],"r":["m"],"F":[],"i":["m"],"N":["m"],"x":[],"e.E":"m"},"dU":{"e":["m"],"j":["m"],"r":["m"],"F":[],"i":["m"],"N":["m"],"x":[],"e.E":"m"},"ce":{"e":["m"],"j6":[],"j":["m"],"r":["m"],"F":[],"i":["m"],"N":["m"],"x":[],"e.E":"m"},"dV":{"e":["m"],"j":["m"],"r":["m"],"F":[],"i":["m"],"N":["m"],"x":[],"e.E":"m"},"cf":{"e":["m"],"j":["m"],"r":["m"],"F":[],"i":["m"],"N":["m"],"x":[],"e.E":"m"},"dW":{"e":["m"],"j":["m"],"r":["m"],"F":[],"i":["m"],"N":["m"],"x":[],"e.E":"m"},"eJ":{"E":[]},"cO":{"az":[],"E":[]},"D":{"W":["1"]},"bQ":{"E":[]},"aT":{"cv":["1"],"bM":["1"],"aP":["1"]},"ae":{"cw":["1"],"bH":["1"],"al":["1"],"aU":["1"]},"cu":{"k5":["1"],"ko":["1"],"aU":["1"]},"ct":{"cu":["1"],"k5":["1"],"ko":["1"],"aU":["1"]},"cv":{"bM":["1"],"aP":["1"]},"cw":{"bH":["1"],"al":["1"],"aU":["1"]},"bH":{"al":["1"],"aU":["1"]},"bM":{"aP":["1"]},"cx":{"cy":["1"]},"bI":{"al":["1"]},"cT":{"kg":[]},"f3":{"cT":[],"kg":[]},"v":{"L":["1","2"]},"bx":{"L":["1","2"]},"cs":{"bN":["1","2"],"bx":["1","2"],"cS":["1","2"],"L":["1","2"]},"eQ":{"v":["p","@"],"L":["p","@"],"v.K":"p","v.V":"@"},"eR":{"ax":["p"],"i":["p"],"ax.E":"p"},"t":{"G":[]},"m":{"G":[]},"j":{"i":["1"]},"d5":{"E":[]},"az":{"E":[]},"ar":{"E":[]},"cl":{"E":[]},"dB":{"E":[]},"dX":{"E":[]},"es":{"E":[]},"eq":{"E":[]},"bg":{"E":[]},"dj":{"E":[]},"co":{"E":[]},"fc":{"ac":[]},"b_":{"f":[]},"b4":{"f":[]},"V":{"b1":[]},"aL":{"h":[],"q":[],"b":[],"db":[]},"q":{"b":[]},"a0":{"b":[]},"a1":{"b":[]},"P":{"b":[]},"l":{"h":[],"q":[],"b":[]},"d2":{"h":[],"q":[],"b":[]},"d4":{"h":[],"q":[],"b":[]},"b2":{"h":[],"q":[],"b":[],"db":[]},"ai":{"q":[],"b":[]},"bp":{"h":[],"q":[],"b":[]},"bY":{"e":["ay<G>"],"n":["ay<G>"],"j":["ay<G>"],"r":["ay<G>"],"i":["ay<G>"],"n.E":"ay<G>","e.E":"ay<G>"},"bZ":{"ay":["G"]},"dp":{"e":["p"],"n":["p"],"j":["p"],"r":["p"],"i":["p"],"n.E":"p","e.E":"p"},"h":{"q":[],"b":[]},"dr":{"e":["V"],"n":["V"],"j":["V"],"r":["V"],"i":["V"],"n.E":"V","e.E":"V"},"ds":{"b":[]},"dv":{"h":[],"q":[],"b":[]},"b7":{"e":["q"],"n":["q"],"j":["q"],"r":["q"],"i":["q"],"n.E":"q","e.E":"q"},"be":{"h":[],"q":[],"b":[]},"dM":{"v":["p","@"],"L":["p","@"],"v.K":"p","v.V":"@"},"dN":{"v":["p","@"],"L":["p","@"],"v.K":"p","v.V":"@"},"dO":{"e":["a7"],"n":["a7"],"j":["a7"],"r":["a7"],"i":["a7"],"n.E":"a7","e.E":"a7"},"cg":{"e":["q"],"n":["q"],"j":["q"],"r":["q"],"i":["q"],"n.E":"q","e.E":"q"},"e1":{"e":["a8"],"n":["a8"],"j":["a8"],"r":["a8"],"i":["a8"],"n.E":"a8","e.E":"a8"},"e5":{"v":["p","@"],"L":["p","@"],"v.K":"p","v.V":"@"},"e8":{"h":[],"q":[],"b":[]},"eb":{"e":["a0"],"n":["a0"],"j":["a0"],"b":[],"r":["a0"],"i":["a0"],"n.E":"a0","e.E":"a0"},"ec":{"e":["aa"],"n":["aa"],"j":["aa"],"r":["aa"],"i":["aa"],"n.E":"aa","e.E":"aa"},"ee":{"v":["p","p"],"L":["p","p"],"v.K":"p","v.V":"p"},"eh":{"e":["P"],"n":["P"],"j":["P"],"r":["P"],"i":["P"],"n.E":"P","e.E":"P"},"ei":{"e":["a1"],"n":["a1"],"j":["a1"],"b":[],"r":["a1"],"i":["a1"],"n.E":"a1","e.E":"a1"},"em":{"e":["ad"],"n":["ad"],"j":["ad"],"r":["ad"],"i":["ad"],"n.E":"ad","e.E":"ad"},"eu":{"h":[],"q":[],"b":[],"db":[]},"ev":{"b":[]},"aS":{"b":[]},"ao":{"b":[]},"eC":{"e":["z"],"n":["z"],"j":["z"],"r":["z"],"i":["z"],"n.E":"z","e.E":"z"},"cz":{"ay":["G"]},"eN":{"e":["a5?"],"n":["a5?"],"j":["a5?"],"r":["a5?"],"i":["a5?"],"n.E":"a5?","e.E":"a5?"},"cD":{"e":["q"],"n":["q"],"j":["q"],"r":["q"],"i":["q"],"n.E":"q","e.E":"q"},"f7":{"e":["ab"],"n":["ab"],"j":["ab"],"r":["ab"],"i":["ab"],"n.E":"ab","e.E":"ab"},"fd":{"e":["S"],"n":["S"],"j":["S"],"r":["S"],"i":["S"],"n.E":"S","e.E":"S"},"cA":{"aP":["1"]},"bJ":{"cA":["1"],"aP":["1"]},"cB":{"al":["1"]},"b9":{"e":["1"],"j":["1"],"i":["1"],"e.E":"1"},"dH":{"e":["aj"],"n":["aj"],"j":["aj"],"i":["aj"],"n.E":"aj","e.E":"aj"},"dY":{"e":["ak"],"n":["ak"],"j":["ak"],"i":["ak"],"n.E":"ak","e.E":"ak"},"ef":{"e":["p"],"n":["p"],"j":["p"],"i":["p"],"n.E":"p","e.E":"p"},"eo":{"e":["am"],"n":["am"],"j":["am"],"i":["am"],"n.E":"am","e.E":"am"},"d7":{"v":["p","@"],"L":["p","@"],"v.K":"p","v.V":"@"},"d8":{"b":[]},"aJ":{"b":[]},"dZ":{"b":[]},"bo":{"f":[]},"Q":{"bd":[]},"aQ":{"by":[]},"bq":{"aZ":[]},"c2":{"aZ":[]},"c9":{"aZ":[]},"e7":{"ex":[]},"cn":{"aZ":[]},"lp":{"F":[]},"lF":{"j":["m"],"i":["m"],"F":[]},"m5":{"j":["m"],"i":["m"],"F":[]},"m4":{"j":["m"],"i":["m"],"F":[]},"lD":{"j":["m"],"i":["m"],"F":[]},"j6":{"j":["m"],"i":["m"],"F":[]},"lE":{"j":["m"],"i":["m"],"F":[]},"m3":{"j":["m"],"i":["m"],"F":[]},"iY":{"j":["t"],"i":["t"],"F":[]},"lB":{"j":["t"],"i":["t"],"F":[]}}'))
A.mu(v.typeUniverse,JSON.parse('{"c_":1,"bz":1,"cy":1,"di":2,"dk":2,"bL":1}'))
var u={c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type"}
var t=(function rtii(){var s=A.a3
return{h:s("@<~>"),t:s("bQ"),D:s("b_"),J:s("b1"),e:s("b2"),cf:s("bT<bE,@>"),bK:s("b4"),V:s("E"),A:s("f"),Z:s("b5"),bz:s("W<@>"),cW:s("c3"),R:s("aL"),a0:s("b8"),B:s("jO"),bi:s("i<@>"),U:s("B<ah>"),s:s("B<p>"),n:s("B<t>"),b:s("B<@>"),d:s("B<m>"),a:s("B<G>"),T:s("c5"),g:s("av"),da:s("r<@>"),a2:s("b9<@>"),bV:s("a6<bE,@>"),cF:s("c8"),w:s("j<t>"),j:s("j<@>"),r:s("j<G>"),f:s("L<@,@>"),a1:s("q"),P:s("K"),K:s("u"),x:s("bA<G>"),L:s("o2"),q:s("ay<G>"),aM:s("bC"),l:s("ac"),N:s("p"),cm:s("bE"),bW:s("x"),b7:s("az"),Q:s("F"),cr:s("cr"),cg:s("aS"),bj:s("ao"),cI:s("bJ<bo>"),bt:s("bJ<f>"),c:s("D<@>"),aQ:s("D<m>"),y:s("iH"),m:s("iH(u)"),i:s("t"),z:s("@"),O:s("@()"),v:s("@(u)"),C:s("@(u,ac)"),S:s("m"),G:s("0&*"),_:s("u*"),bc:s("W<K>?"),E:s("aL?"),aL:s("j<@>?"),X:s("u?"),c4:s("cm?"),F:s("aB<@,@>?"),o:s("@(f)?"),Y:s("~()?"),bF:s("~(b_)?"),cu:s("~(b4)?"),cx:s("~(f)?"),W:s("~(t)?"),H:s("G"),p:s("~"),M:s("~()"),bo:s("~(u)"),k:s("~(u,ac)"),aa:s("~(p,p)"),u:s("~(p,@)"),d8:s("~(t)"),I:s("~(G)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.f=A.b2.prototype
B.i=A.dc.prototype
B.D=A.aL.prototype
B.E=J.bs.prototype
B.a=J.B.prototype
B.e=J.c4.prototype
B.c=J.c6.prototype
B.h=J.bt.prototype
B.F=J.av.prototype
B.G=J.a.prototype
B.q=A.ca.prototype
B.r=A.ce.prototype
B.t=J.e0.prototype
B.b=A.bC.prototype
B.j=J.cr.prototype
B.k=A.aS.prototype
B.l=function getTagFallback(o) {
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
B.m=function(hooks) { return hooks; }

B.A=new A.h4()
B.W=new A.hu()
B.B=new A.ie()
B.n=new A.ii()
B.d=new A.f3()
B.C=new A.fc()
B.H=new A.h5(null)
B.o=A.k(s([]),t.b)
B.I={}
B.p=new A.bU(B.I,[],A.a3("bU<bE,@>"))
B.J=new A.bD("call")
B.K=A.ag("nP")
B.L=A.ag("lp")
B.M=A.ag("iY")
B.N=A.ag("lB")
B.O=A.ag("lD")
B.P=A.ag("lE")
B.Q=A.ag("lF")
B.R=A.ag("u")
B.S=A.ag("j6")
B.T=A.ag("m3")
B.U=A.ag("m4")
B.V=A.ag("m5")})();(function staticFields(){$.ig=null
$.U=A.k([],A.a3("B<u>"))
$.k1=null
$.jD=null
$.jC=null
$.kT=null
$.kN=null
$.kY=null
$.iJ=null
$.iP=null
$.jq=null
$.bO=null
$.cW=null
$.cX=null
$.jk=!1
$.A=B.d
$.j8=null
$.w=A.k([],A.a3("B<C>"))
$.c1=A.k([],A.a3("B<C>"))
$.b6=A.k([],A.a3("B<Z>"))
$.dz=A.k([],t.d)
$.dA=A.k([],t.n)
$.j_=A.jT(t.N,t.S)
$.jK=!1
$.jL=!1
$.jM=null
$.jN=null})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal
s($,"nT","fC",()=>A.kS("_$dart_dartClosure"))
s($,"ox","iT",()=>B.d.c6(new A.iR(),A.a3("W<K>")))
s($,"o7","l1",()=>A.aA(A.hO({
toString:function(){return"$receiver$"}})))
s($,"o8","l2",()=>A.aA(A.hO({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"o9","l3",()=>A.aA(A.hO(null)))
s($,"oa","l4",()=>A.aA(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"od","l7",()=>A.aA(A.hO(void 0)))
s($,"oe","l8",()=>A.aA(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"oc","l6",()=>A.aA(A.k9(null)))
s($,"ob","l5",()=>A.aA(function(){try{null.$method$}catch(r){return r.message}}()))
s($,"og","la",()=>A.aA(A.k9(void 0)))
s($,"of","l9",()=>A.aA(function(){try{(void 0).$method$}catch(r){return r.message}}()))
s($,"oi","jw",()=>A.m8())
s($,"nX","iS",()=>A.a3("D<K>").a($.iT()))
s($,"ov","lc",()=>A.kW(B.R))
s($,"ot","lb",()=>A.kM(self))
s($,"oj","jx",()=>A.kS("_$dart_dartObject"))
s($,"ou","jy",()=>function DartObject(a){this.o=a})
s($,"o_","jv",()=>B.B)
s($,"o6","l0",()=>A.fM(1,1))
s($,"nL","l_",()=>{var r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4,e5,e6,e7,e8,e9,f0,f1,f2,f3,f4,f5,f6,f7,f8,f9,g0,g1,g2,g3,g4,g5,g6,g7,g8,g9,h0,h1,h2,h3,h4,h5,h6,h7,h8="uPvwlTransform",h9="    precision mediump float;\n\n    uniform sampler2D uSampler;\n\n    varying vec2 vMapping;\n\n    void main(void)\n    {\n      gl_FragColor = texture2D(uSampler, vMapping);\n    }\n  ",i0="uSampler",i1="uMappingTransform",i2="    precision mediump float;\n    \n    attribute vec2 aPositionMapping;\n\n    uniform mat3 uPvwlTransform;\n\n    varying vec2 vMapping;\n\n    void main(void)\n    {\n      vMapping = aPositionMapping;\n\n      vec3 position = uPvwlTransform * vec3(aPositionMapping, 1.0);\n      gl_Position = vec4(position.xy, 0.0, 1.0);\n    }\n  ",i3="uPvTransform",i4="uWlTransform",i5="uLightPosition",i6="    precision mediump float;\n    \n    attribute vec3 aPositionNormal;\n\n    uniform mat4 uPvTransform;\n    uniform mat4 uWlTransform;\n\n    varying vec4 vWorldPosition;\n    varying vec4 vWorldNormal;\n\n    void main(void)\n    {\n      vWorldPosition = uWlTransform * vec4(aPositionNormal, 1.0);\n      vWorldNormal = normalize(uWlTransform * vec4(aPositionNormal, 0.0));\n      \n      gl_Position = uPvTransform * vWorldPosition;\n    }\n  ",i7="uViewPosition",i8=A.a3("bp").a(A.nm().querySelector("#real-t-demo-psamathe")),i9=A.fM(null,null)
A.k_()
r=A.k_()
q=t.z
p=A.k6(q)
q=A.k6(q)
o=A.jV(20,0,!0,t.i)
n=A.k([],A.a3("B<al<@>>"))
m=A.kd()
l=A.kd()
k=A.hk()
j=A.jW()
i=A.jW()
h=A.aR()
g=A.hS(0,0,1)
f=A.hS(0,1,0)
e=A.hk()
d=A.aR()
c=A.aR()
b=A.aR()
a=A.aR()
a0=A.aR()
a1=A.aR()
a2=A.aR()
a3=A.hk()
a4=A.hL()
a5=A.k([2,0,0,0,2,0,-1,-1,1],t.n)
a6=A.hL()
a7=new Uint16Array(A.kv(0))
a8=new Float32Array(A.kv(0))
a9=A.j5()
b0=A.j5()
b1=A.j5()
b2=A.aM(h8)
A.j7(5)
b3=A.aO(i0)
b4=A.aM(h8)
A.j7(5)
b5=A.aO(i0)
b6=A.dL(i1)
b7=A.aM(h8)
A.et()
b8=A.aO(i0)
b9=A.dL(h8)
A.et()
c0=A.aO(i0)
c1=A.bh("uColor")
c2=A.dL(h8)
c3=A.aO(i0)
c4=A.aO("uGradientSampler")
c5=A.bh("uData")
A.et()
c6=A.dL(h8)
c7=A.aO(i0)
c8=A.kb("uData")
A.et()
c9=A.aM(i3)
d0=A.aM(i4)
d1=A.bh(i5)
d2=A.bh("uLightColor")
A.ke()
d3=A.aM(i3)
d4=A.aM(i4)
d5=A.aO("uNormalMapSampler")
d6=A.dL(i1)
d7=A.bh(i7)
d8=A.bh(i5)
d9=A.aO("uShininessMapSampler")
A.kf()
e0=A.aM(i3)
e1=A.aM(i4)
e2=A.bh(i7)
e3=A.bh("uSinusoidData")
e4=A.kb("uLimitData")
A.ke()
e5=A.k([],A.a3("B<dl>"))
e6=A.k([],A.a3("B<dh>"))
e7=A.k([],A.a3("B<du>"))
A.jZ(0,0)
e8=A.jZ(1024,1024)
e9=A.k0(2,0,3)
f0=A.k0(0,0,1)
f1=A.hS(-2.2,0,0)
f2=A.hS(-3,0,0)
f3=A.j3(5.09,0,0.63)
f4=A.j3(1.6650441064025905,0,-0.15707963267948966)
f5=A.lM()
f6=f4.a
f7=f4.b
f8=f4.c
f9=f4.d
g0=2/(f6*f6+f7*f7+f8*f8+f9*f9)
g1=f6*g0
g2=f7*g0
g3=f8*g0
g4=f9*g1
g5=f9*g2
g6=f9*g3
g7=f6*g1
g8=f6*g2
g9=f6*g3
h0=f7*g2
h1=f7*g3
h2=f8*g3
h3=f5.a
B.a.i(h3,0,1-(h0+h2))
B.a.i(h3,1,g8+g6)
B.a.i(h3,2,g9-g5)
B.a.i(h3,3,g8-g6)
B.a.i(h3,4,1-(g7+h2))
B.a.i(h3,5,h1+g4)
B.a.i(h3,6,g9+g5)
B.a.i(h3,7,h1-g4)
B.a.i(h3,8,1-(g7+h0))
f4=A.hk()
h4=A.hL()
B.a.i(h4.a,0,4)
B.a.i(h4.a,4,2)
B.a.i(h4.a,6,-1.5)
B.a.i(h4.a,7,-0.5)
h5=A.hL()
B.a.i(h5.a,0,3)
B.a.i(h5.a,4,1.5)
B.a.i(h5.a,6,-0.6)
B.a.i(h5.a,7,-0.35)
h6=new A.ea()
h6.a=0.72
h6.b=7
h6.c=0.793
h7=new A.ea()
h7.a=1
h7.b=173
h7.c=0.172
h7.e=0.321
h7.f=0.364
return new A.d3(i8,new A.ew(i9,new A.ck(r),p,q),new A.dy(o),n,new A.hs(new A.hx(m,l,k,j,i,h,g,f,e),d,c,b,a,a0,a1,a2,a3),new A.e7(a4,new A.Q(a5),a6,new A.fW(a7,a8),new A.bR(),new A.bR(),new A.bR(),a9,b0,b1,new A.ek(b2,b3,new A.a9("    precision mediump float;\n    \n    attribute vec3 aPosition;\n    attribute vec2 aMapping;\n\n    uniform mat4 uPvwlTransform;\n\n    varying vec2 vMapping;\n\n    void main(void)\n    {\n      vMapping = aMapping;\n\n      gl_Position = uPvwlTransform * vec4(aPosition, 1.0);\n    }\n  ",h9)),new A.hI(b4,b5,b6,new A.a9("    precision mediump float;\n    \n    attribute vec3 aPosition;\n    attribute vec2 aMapping;\n\n    uniform mat4 uPvwlTransform;\n    uniform mat3 uMappingTransform;\n\n    varying vec2 vMapping;\n\n    void main(void)\n    {\n      vMapping = vec2(uMappingTransform * vec3(aMapping, 1.0));\n      gl_Position = uPvwlTransform * vec4(aPosition, 1.0);\n    }\n  ",h9)),new A.ek(b7,b8,new A.a9("    precision mediump float;\n    \n    attribute vec2 aPositionMapping;\n\n    uniform mat4 uPvwlTransform;\n\n    varying vec2 vMapping;\n\n    void main(void)\n    {\n      vMapping = aPositionMapping;\n\n      gl_Position = uPvwlTransform * vec4(aPositionMapping, 0.0, 1.0);\n    }\n  ",h9)),new A.fO(b9,c0,c1,new A.a9(i2,"    precision mediump float;\n\n    uniform sampler2D uSampler;\n    uniform vec4 uColor;\n\n    varying vec2 vMapping;\n\n    void main(void)\n    {\n      gl_FragColor = texture2D(uSampler, vMapping) * uColor;\n    }\n  ")),new A.ht(c2,c3,c4,c5,new A.a9(i2,"    precision mediump float;\n\n    uniform sampler2D uSampler;\n    uniform sampler2D uGradientSampler;\n    uniform vec4 uData;\n\n    varying vec2 vMapping;\n\n    void main(void)\n    {\n      vec4 levels = texture2D(uSampler, vMapping);\n      vec4 redGradientMap = texture2D(uGradientSampler, vec2(levels.x, 1.0));\n      vec4 greenGradientMap = texture2D(uGradientSampler, vec2(levels.y, 0.5));\n      vec4 blueGradientMap = texture2D(uGradientSampler, vec2(levels.z, 0.0));\n\n      vec3 gamma = vec3(uData.x);\n      vec3 color = redGradientMap.xyz + greenGradientMap.xyz + blueGradientMap.xyz;\n      gl_FragColor = vec4(pow(color, gamma), 1.0);\n    }\n  ")),new A.hA(c6,c7,c8,new A.a9(i2,"    precision mediump float;\n\n    uniform sampler2D uSampler;\n    uniform vec2 uData;\n\n    varying vec2 vMapping;\n\n    void main(void)\n    {\n      float step = uData.x;\n      float strength = uData.y;\n\n      float lt = texture2D(uSampler, vMapping + vec2(-step,step)).x;\n      float t = texture2D(uSampler, vMapping + vec2(0,step)).x;\n      float rt = texture2D(uSampler, vMapping + vec2(step,step)).x;\n      float l = texture2D(uSampler, vMapping + vec2(-step,0)).x;\n      float r = texture2D(uSampler, vMapping + vec2(step,0)).x;\n      float lb = texture2D(uSampler, vMapping + vec2(-step,-step)).x;\n      float b = texture2D(uSampler, vMapping + vec2(0,-step)).x;\n      float rb = texture2D(uSampler, vMapping + vec2(step,-step)).x;\n\n      vec3 rawNormal = normalize(vec3(\n        lt + l + l + lb - rt - r - r - rb,\n        lt + t + t + rt - lb - b - b - rb,\n        strength));\n\n      gl_FragColor = vec4((rawNormal + 1.0) * 0.5, 1.0);\n    }\n  ")),new A.hy(c9,d0,d1,d2,new A.a9(i6,"    precision mediump float;\n\n        float LambertianFactor(\n      in vec4 polygonNormal,\n      in vec4 lightDirection)\n    {\n      return max(dot(polygonNormal, lightDirection), 0.0);\n    }\n  \n\n    uniform vec4 uLightPosition;\n    uniform vec4 uLightColor;\n\n    varying vec4 vWorldPosition;\n    varying vec4 vWorldNormal;\n\n    void main(void)\n    {\n      vec4 worldLightDirection = normalize(uLightPosition - vWorldPosition);\n      float diffuseFactor = LambertianFactor(vWorldNormal, worldLightDirection);\n      gl_FragColor = uLightColor * diffuseFactor;\n    }\n  ")),new A.hz(d3,d4,d5,d6,d7,d8,new A.hT("uLightData"),d9,new A.a9("    precision mediump float;\n\n    attribute vec3 aPositionNormal;\n    attribute vec2 aMapping;\n    attribute vec3 aTangent;\n\n    uniform mat4 uPvTransform;\n    uniform mat4 uWlTransform;\n    uniform mat3 uMappingTransform;\n\n    varying vec4 vWorldPosition;\n    varying vec4 vWorldNormal;\n    varying vec4 vWorldTangent;\n    varying vec2 vMapping;\n\n    void main(void)\n    {\n      vWorldPosition = uWlTransform * vec4(aPositionNormal, 1.0);\n      vWorldNormal = normalize(uWlTransform * vec4(aPositionNormal, 0.0));\n      vWorldTangent = normalize(uWlTransform * vec4(aTangent, 0.0));\n      vMapping = vec2(uMappingTransform * vec3(aMapping, 1.0));\n\n      gl_Position = uPvTransform * vWorldPosition;\n    }\n  ","    precision mediump float;\n\n        mat4 CreateTranspose(in mat4 original)\n    {\n      vec4 i0 = original[0];\n      vec4 i1 = original[1];\n      vec4 i2 = original[2];\n      vec4 i3 = original[3];\n\n      return mat4(\n          vec4(i0.x, i1.x, i2.x, i3.x),\n          vec4(i0.y, i1.y, i2.y, i3.y),\n          vec4(i0.z, i1.z, i2.z, i3.z),\n          vec4(i0.w, i1.w, i2.w, i3.w));\n    }\n  \n        mat4 CreateTangentTransform(\n        in vec4 worldNormal,\n        in vec4 worldTangent)\n    {\n      return CreateTranspose(mat4(\n          worldTangent,\n          normalize(cross(worldNormal.xyz, worldTangent.xyz)), 0.0,\n          worldNormal,\n          0.0, 0.0, 0.0, 1.0));\n    }\n  \n        float LambertianFactor(\n      in float diffuseFactor,\n      in vec4 texelNormal,\n      in vec4 lightDirection)\n    {\n      return diffuseFactor * max(dot(texelNormal, lightDirection), 0.0);\n    }\n  \n        float PhongFactor(\n        in vec4 texelNormal,\n        in vec4 viewDirection,\n        in vec4 lightDirection,\n        in float shininessFactor,\n        in float shininess,\n        in float specularFactor)\n    {\n      vec4 reflection = reflect(-lightDirection, texelNormal);\n      return specularFactor * pow(max(dot(reflection, viewDirection),0.0), shininess) * shininessFactor;\n    }\n  \n\n    uniform sampler2D uNormalMapSampler;\n    uniform sampler2D uShininessMapSampler;\n    uniform vec4 uViewPosition;\n    uniform vec4 uLightPosition;\n    uniform vec4 uDiffuseColor;\n    uniform vec4 uSpecularColor;\n    uniform vec3 uLightData;\n\n    varying vec4 vWorldPosition;\n    varying vec4 vWorldNormal;\n    varying vec4 vWorldTangent;\n    varying vec2 vMapping;\n\n    void main(void)\n    {\n      vec4 worldViewDirection = normalize(uViewPosition - vWorldPosition);\n      vec4 worldLightDirection = normalize(uLightPosition - vWorldPosition);\n      mat4 tangentTransform = CreateTangentTransform(vWorldNormal, vWorldTangent);\n      vec4 tangentViewDirection = tangentTransform * worldViewDirection;\n      vec4 tangentLightDirection = tangentTransform * worldLightDirection;\n      \n      float shininessFactor = texture2D(uShininessMapSampler, vMapping).x;\n      vec4 rawTexelNormal = texture2D(uNormalMapSampler, vMapping);\n      vec4 texelNormal = vec4((rawTexelNormal.xyz * 2.0) - 1.0, 0.0);\n\n      float diffuseFactor = LambertianFactor(\n          uLightData.y,\n          texelNormal,\n          tangentLightDirection);\n\n      float specularFactor = PhongFactor(\n          texelNormal,\n          tangentViewDirection,\n          tangentLightDirection,\n          shininessFactor,\n          uLightData.x,\n          uLightData.z);\n\n      gl_FragColor = vec4(diffuseFactor + specularFactor);\n    }\n  ")),new A.hw(e0,e1,e2,e3,e4,new A.a9(i6,"    precision mediump float;\n\n    uniform vec4 uViewPosition;\n    uniform vec4 uSinusoidData;\n    uniform vec2 uLimitData;\n\n    varying vec4 vWorldPosition;\n    varying vec4 vWorldNormal;\n\n    void main(void)\n    {\n      vec4 worldViewDirection = normalize(uViewPosition - vWorldPosition);\n\n      float facingFactor = dot(worldViewDirection, vWorldNormal);\n\n      if (facingFactor < uLimitData.x || facingFactor > uLimitData.y ) discard;\n\n      float sinusoidFactor = uSinusoidData.x * sin((uSinusoidData.z + facingFactor) * uSinusoidData.y ) + uSinusoidData.w;\n\n      gl_FragColor = vec4(sinusoidFactor);\n    }\n  "))),new A.hj(e5,e6,e7),new A.hG(new A.fX()),new A.hv(new A.ck(e8),new A.h_(1.5079644737231006,1,0.1,100),e9,f0,f1,f2,f3,f5,f4,h4,h5,h6,h7),new A.bq())})
s($,"ok","d_",()=>$.l_())})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({WebGL:J.bs,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,webkitFileSystemDirectoryEntry:J.a,FileSystemDirectoryEntry:J.a,DirectoryReader:J.a,WebKitDirectoryReader:J.a,webkitFileSystemDirectoryReader:J.a,FileSystemDirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,webkitFileSystemEntry:J.a,FileSystemEntry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,webkitFileSystemFileEntry:J.a,FileSystemFileEntry:J.a,DOMFileSystem:J.a,WebKitFileSystem:J.a,webkitFileSystem:J.a,FileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,GeolocationPosition:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,GeolocationPositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL2RenderingContextBase:J.a,ArrayBuffer:A.dP,ArrayBufferView:A.cd,DataView:A.dQ,Float32Array:A.ca,Float64Array:A.dR,Int16Array:A.dS,Int32Array:A.dT,Int8Array:A.dU,Uint16Array:A.ce,Uint32Array:A.dV,Uint8ClampedArray:A.cf,CanvasPixelArray:A.cf,Uint8Array:A.dW,HTMLBRElement:A.l,HTMLBaseElement:A.l,HTMLBodyElement:A.l,HTMLButtonElement:A.l,HTMLContentElement:A.l,HTMLDListElement:A.l,HTMLDataElement:A.l,HTMLDataListElement:A.l,HTMLDetailsElement:A.l,HTMLDialogElement:A.l,HTMLEmbedElement:A.l,HTMLFieldSetElement:A.l,HTMLHRElement:A.l,HTMLHeadElement:A.l,HTMLHeadingElement:A.l,HTMLHtmlElement:A.l,HTMLIFrameElement:A.l,HTMLInputElement:A.l,HTMLLIElement:A.l,HTMLLabelElement:A.l,HTMLLegendElement:A.l,HTMLLinkElement:A.l,HTMLMapElement:A.l,HTMLMenuElement:A.l,HTMLMetaElement:A.l,HTMLMeterElement:A.l,HTMLModElement:A.l,HTMLOListElement:A.l,HTMLObjectElement:A.l,HTMLOptGroupElement:A.l,HTMLOptionElement:A.l,HTMLOutputElement:A.l,HTMLParagraphElement:A.l,HTMLParamElement:A.l,HTMLPictureElement:A.l,HTMLPreElement:A.l,HTMLProgressElement:A.l,HTMLQuoteElement:A.l,HTMLScriptElement:A.l,HTMLShadowElement:A.l,HTMLSlotElement:A.l,HTMLSourceElement:A.l,HTMLSpanElement:A.l,HTMLStyleElement:A.l,HTMLTableCaptionElement:A.l,HTMLTableCellElement:A.l,HTMLTableDataCellElement:A.l,HTMLTableHeaderCellElement:A.l,HTMLTableColElement:A.l,HTMLTableElement:A.l,HTMLTableRowElement:A.l,HTMLTableSectionElement:A.l,HTMLTemplateElement:A.l,HTMLTextAreaElement:A.l,HTMLTimeElement:A.l,HTMLTitleElement:A.l,HTMLTrackElement:A.l,HTMLUListElement:A.l,HTMLUnknownElement:A.l,HTMLDirectoryElement:A.l,HTMLFontElement:A.l,HTMLFrameElement:A.l,HTMLFrameSetElement:A.l,HTMLMarqueeElement:A.l,HTMLElement:A.l,AccessibleNodeList:A.fF,HTMLAnchorElement:A.d2,HTMLAreaElement:A.d4,BeforeUnloadEvent:A.b_,Blob:A.b1,HTMLCanvasElement:A.b2,CanvasRenderingContext2D:A.dc,CDATASection:A.ai,CharacterData:A.ai,Comment:A.ai,ProcessingInstruction:A.ai,Text:A.ai,CSSPerspective:A.fP,CSSCharsetRule:A.z,CSSConditionRule:A.z,CSSFontFaceRule:A.z,CSSGroupingRule:A.z,CSSImportRule:A.z,CSSKeyframeRule:A.z,MozCSSKeyframeRule:A.z,WebKitCSSKeyframeRule:A.z,CSSKeyframesRule:A.z,MozCSSKeyframesRule:A.z,WebKitCSSKeyframesRule:A.z,CSSMediaRule:A.z,CSSNamespaceRule:A.z,CSSPageRule:A.z,CSSRule:A.z,CSSStyleRule:A.z,CSSSupportsRule:A.z,CSSViewportRule:A.z,CSSStyleDeclaration:A.bV,MSStyleCSSProperties:A.bV,CSS2Properties:A.bV,CSSImageValue:A.a4,CSSKeywordValue:A.a4,CSSNumericValue:A.a4,CSSPositionValue:A.a4,CSSResourceValue:A.a4,CSSUnitValue:A.a4,CSSURLImageValue:A.a4,CSSStyleValue:A.a4,CSSMatrixComponent:A.at,CSSRotation:A.at,CSSScale:A.at,CSSSkew:A.at,CSSTranslation:A.at,CSSTransformComponent:A.at,CSSTransformValue:A.fR,CSSUnparsedValue:A.fS,DataTransferItemList:A.fT,DeviceOrientationEvent:A.b4,HTMLDivElement:A.bp,DOMException:A.fU,ClientRectList:A.bY,DOMRectList:A.bY,DOMRectReadOnly:A.bZ,DOMStringList:A.dp,DOMTokenList:A.fV,MathMLElement:A.h,SVGAElement:A.h,SVGAnimateElement:A.h,SVGAnimateMotionElement:A.h,SVGAnimateTransformElement:A.h,SVGAnimationElement:A.h,SVGCircleElement:A.h,SVGClipPathElement:A.h,SVGDefsElement:A.h,SVGDescElement:A.h,SVGDiscardElement:A.h,SVGEllipseElement:A.h,SVGFEBlendElement:A.h,SVGFEColorMatrixElement:A.h,SVGFEComponentTransferElement:A.h,SVGFECompositeElement:A.h,SVGFEConvolveMatrixElement:A.h,SVGFEDiffuseLightingElement:A.h,SVGFEDisplacementMapElement:A.h,SVGFEDistantLightElement:A.h,SVGFEFloodElement:A.h,SVGFEFuncAElement:A.h,SVGFEFuncBElement:A.h,SVGFEFuncGElement:A.h,SVGFEFuncRElement:A.h,SVGFEGaussianBlurElement:A.h,SVGFEImageElement:A.h,SVGFEMergeElement:A.h,SVGFEMergeNodeElement:A.h,SVGFEMorphologyElement:A.h,SVGFEOffsetElement:A.h,SVGFEPointLightElement:A.h,SVGFESpecularLightingElement:A.h,SVGFESpotLightElement:A.h,SVGFETileElement:A.h,SVGFETurbulenceElement:A.h,SVGFilterElement:A.h,SVGForeignObjectElement:A.h,SVGGElement:A.h,SVGGeometryElement:A.h,SVGGraphicsElement:A.h,SVGImageElement:A.h,SVGLineElement:A.h,SVGLinearGradientElement:A.h,SVGMarkerElement:A.h,SVGMaskElement:A.h,SVGMetadataElement:A.h,SVGPathElement:A.h,SVGPatternElement:A.h,SVGPolygonElement:A.h,SVGPolylineElement:A.h,SVGRadialGradientElement:A.h,SVGRectElement:A.h,SVGScriptElement:A.h,SVGSetElement:A.h,SVGStopElement:A.h,SVGStyleElement:A.h,SVGElement:A.h,SVGSVGElement:A.h,SVGSwitchElement:A.h,SVGSymbolElement:A.h,SVGTSpanElement:A.h,SVGTextContentElement:A.h,SVGTextElement:A.h,SVGTextPathElement:A.h,SVGTextPositioningElement:A.h,SVGTitleElement:A.h,SVGUseElement:A.h,SVGViewElement:A.h,SVGGradientElement:A.h,SVGComponentTransferFunctionElement:A.h,SVGFEDropShadowElement:A.h,SVGMPathElement:A.h,Element:A.h,AbortPaymentEvent:A.f,AnimationEvent:A.f,AnimationPlaybackEvent:A.f,ApplicationCacheErrorEvent:A.f,BackgroundFetchClickEvent:A.f,BackgroundFetchEvent:A.f,BackgroundFetchFailEvent:A.f,BackgroundFetchedEvent:A.f,BeforeInstallPromptEvent:A.f,BlobEvent:A.f,CanMakePaymentEvent:A.f,ClipboardEvent:A.f,CloseEvent:A.f,CompositionEvent:A.f,CustomEvent:A.f,DeviceMotionEvent:A.f,ErrorEvent:A.f,ExtendableEvent:A.f,ExtendableMessageEvent:A.f,FetchEvent:A.f,FocusEvent:A.f,FontFaceSetLoadEvent:A.f,ForeignFetchEvent:A.f,GamepadEvent:A.f,HashChangeEvent:A.f,InstallEvent:A.f,KeyboardEvent:A.f,MediaEncryptedEvent:A.f,MediaKeyMessageEvent:A.f,MediaQueryListEvent:A.f,MediaStreamEvent:A.f,MediaStreamTrackEvent:A.f,MessageEvent:A.f,MIDIConnectionEvent:A.f,MIDIMessageEvent:A.f,MouseEvent:A.f,DragEvent:A.f,MutationEvent:A.f,NotificationEvent:A.f,PageTransitionEvent:A.f,PaymentRequestEvent:A.f,PaymentRequestUpdateEvent:A.f,PointerEvent:A.f,PopStateEvent:A.f,PresentationConnectionAvailableEvent:A.f,PresentationConnectionCloseEvent:A.f,ProgressEvent:A.f,PromiseRejectionEvent:A.f,PushEvent:A.f,RTCDataChannelEvent:A.f,RTCDTMFToneChangeEvent:A.f,RTCPeerConnectionIceEvent:A.f,RTCTrackEvent:A.f,SecurityPolicyViolationEvent:A.f,SensorErrorEvent:A.f,SpeechRecognitionError:A.f,SpeechRecognitionEvent:A.f,SpeechSynthesisEvent:A.f,StorageEvent:A.f,SyncEvent:A.f,TextEvent:A.f,TouchEvent:A.f,TrackEvent:A.f,TransitionEvent:A.f,WebKitTransitionEvent:A.f,UIEvent:A.f,VRDeviceEvent:A.f,VRDisplayEvent:A.f,VRSessionEvent:A.f,WheelEvent:A.f,MojoInterfaceRequestEvent:A.f,ResourceProgressEvent:A.f,USBConnectionEvent:A.f,IDBVersionChangeEvent:A.f,AudioProcessingEvent:A.f,OfflineAudioCompletionEvent:A.f,Event:A.f,InputEvent:A.f,SubmitEvent:A.f,AbsoluteOrientationSensor:A.b,Accelerometer:A.b,AccessibleNode:A.b,AmbientLightSensor:A.b,Animation:A.b,ApplicationCache:A.b,DOMApplicationCache:A.b,OfflineResourceList:A.b,BackgroundFetchRegistration:A.b,BatteryManager:A.b,BroadcastChannel:A.b,CanvasCaptureMediaStreamTrack:A.b,EventSource:A.b,FileReader:A.b,FontFaceSet:A.b,Gyroscope:A.b,XMLHttpRequest:A.b,XMLHttpRequestEventTarget:A.b,XMLHttpRequestUpload:A.b,LinearAccelerationSensor:A.b,Magnetometer:A.b,MediaDevices:A.b,MediaKeySession:A.b,MediaQueryList:A.b,MediaRecorder:A.b,MediaSource:A.b,MediaStream:A.b,MediaStreamTrack:A.b,MessagePort:A.b,MIDIAccess:A.b,MIDIInput:A.b,MIDIOutput:A.b,MIDIPort:A.b,NetworkInformation:A.b,Notification:A.b,OffscreenCanvas:A.b,OrientationSensor:A.b,PaymentRequest:A.b,Performance:A.b,PermissionStatus:A.b,PresentationAvailability:A.b,PresentationConnection:A.b,PresentationConnectionList:A.b,PresentationRequest:A.b,RelativeOrientationSensor:A.b,RemotePlayback:A.b,RTCDataChannel:A.b,DataChannel:A.b,RTCDTMFSender:A.b,RTCPeerConnection:A.b,webkitRTCPeerConnection:A.b,mozRTCPeerConnection:A.b,ScreenOrientation:A.b,Sensor:A.b,ServiceWorker:A.b,ServiceWorkerContainer:A.b,ServiceWorkerRegistration:A.b,SharedWorker:A.b,SpeechRecognition:A.b,webkitSpeechRecognition:A.b,SpeechSynthesis:A.b,SpeechSynthesisUtterance:A.b,VR:A.b,VRDevice:A.b,VRDisplay:A.b,VRSession:A.b,VisualViewport:A.b,WebSocket:A.b,Worker:A.b,WorkerPerformance:A.b,BluetoothDevice:A.b,BluetoothRemoteGATTCharacteristic:A.b,Clipboard:A.b,MojoInterfaceInterceptor:A.b,USB:A.b,IDBDatabase:A.b,IDBOpenDBRequest:A.b,IDBVersionChangeRequest:A.b,IDBRequest:A.b,IDBTransaction:A.b,AnalyserNode:A.b,RealtimeAnalyserNode:A.b,AudioBufferSourceNode:A.b,AudioDestinationNode:A.b,AudioNode:A.b,AudioScheduledSourceNode:A.b,AudioWorkletNode:A.b,BiquadFilterNode:A.b,ChannelMergerNode:A.b,AudioChannelMerger:A.b,ChannelSplitterNode:A.b,AudioChannelSplitter:A.b,ConstantSourceNode:A.b,ConvolverNode:A.b,DelayNode:A.b,DynamicsCompressorNode:A.b,GainNode:A.b,AudioGainNode:A.b,IIRFilterNode:A.b,MediaElementAudioSourceNode:A.b,MediaStreamAudioDestinationNode:A.b,MediaStreamAudioSourceNode:A.b,OscillatorNode:A.b,Oscillator:A.b,PannerNode:A.b,AudioPannerNode:A.b,webkitAudioPannerNode:A.b,ScriptProcessorNode:A.b,JavaScriptAudioNode:A.b,StereoPannerNode:A.b,WaveShaperNode:A.b,EventTarget:A.b,File:A.V,FileList:A.dr,FileWriter:A.ds,HTMLFormElement:A.dv,Gamepad:A.a5,History:A.h0,HTMLCollection:A.b7,HTMLFormControlsCollection:A.b7,HTMLOptionsCollection:A.b7,ImageData:A.c3,HTMLImageElement:A.aL,IntersectionObserver:A.b8,IntersectionObserverEntry:A.h2,Location:A.h9,HTMLAudioElement:A.be,HTMLMediaElement:A.be,MediaList:A.he,MIDIInputMap:A.dM,MIDIOutputMap:A.dN,MimeType:A.a7,MimeTypeArray:A.dO,Document:A.q,DocumentFragment:A.q,HTMLDocument:A.q,ShadowRoot:A.q,XMLDocument:A.q,Attr:A.q,DocumentType:A.q,Node:A.q,NodeList:A.cg,RadioNodeList:A.cg,Plugin:A.a8,PluginArray:A.e1,RTCStatsReport:A.e5,HTMLSelectElement:A.e8,SourceBuffer:A.a0,SourceBufferList:A.eb,SpeechGrammar:A.aa,SpeechGrammarList:A.ec,SpeechRecognitionResult:A.ab,Storage:A.ee,CSSStyleSheet:A.S,StyleSheet:A.S,TextTrack:A.a1,TextTrackCue:A.P,VTTCue:A.P,TextTrackCueList:A.eh,TextTrackList:A.ei,TimeRanges:A.hJ,Touch:A.ad,TouchList:A.em,TrackDefaultList:A.hK,URL:A.hQ,HTMLVideoElement:A.eu,VideoTrackList:A.ev,Window:A.aS,DOMWindow:A.aS,DedicatedWorkerGlobalScope:A.ao,ServiceWorkerGlobalScope:A.ao,SharedWorkerGlobalScope:A.ao,WorkerGlobalScope:A.ao,CSSRuleList:A.eC,ClientRect:A.cz,DOMRect:A.cz,GamepadList:A.eN,NamedNodeMap:A.cD,MozNamedAttrMap:A.cD,SpeechRecognitionResultList:A.f7,StyleSheetList:A.fd,IDBKeyRange:A.c8,SVGLength:A.aj,SVGLengthList:A.dH,SVGNumber:A.ak,SVGNumberList:A.dY,SVGPointList:A.hl,SVGStringList:A.ef,SVGTransform:A.am,SVGTransformList:A.eo,AudioBuffer:A.fH,AudioParamMap:A.d7,AudioTrackList:A.d8,AudioContext:A.aJ,webkitAudioContext:A.aJ,BaseAudioContext:A.aJ,OfflineAudioContext:A.dZ,WebGLBuffer:A.da,WebGLContextEvent:A.bo,WebGLFramebuffer:A.dx,WebGLProgram:A.e2,WebGLRenderbuffer:A.e4,WebGLRenderingContext:A.cm,WebGL2RenderingContext:A.bC,WebGLShader:A.e9,WebGLTexture:A.ej,WebGLUniformLocation:A.ep})
hunkHelpers.setOrUpdateLeafTags({WebGL:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,webkitFileSystemDirectoryEntry:true,FileSystemDirectoryEntry:true,DirectoryReader:true,WebKitDirectoryReader:true,webkitFileSystemDirectoryReader:true,FileSystemDirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,webkitFileSystemEntry:true,FileSystemEntry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,webkitFileSystemFileEntry:true,FileSystemFileEntry:true,DOMFileSystem:true,WebKitFileSystem:true,webkitFileSystem:true,FileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,GeolocationPosition:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,GeolocationPositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL2RenderingContextBase:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,BeforeUnloadEvent:true,Blob:false,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,DeviceOrientationEvent:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,MathMLElement:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CompositionEvent:true,CustomEvent:true,DeviceMotionEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FocusEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,KeyboardEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MouseEvent:true,DragEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PointerEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TextEvent:true,TouchEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,UIEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,WheelEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,Event:false,InputEvent:false,SubmitEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerRegistration:true,SharedWorker:true,SpeechRecognition:true,webkitSpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,IntersectionObserver:true,IntersectionObserverEntry:true,Location:true,HTMLAudioElement:true,HTMLMediaElement:false,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchList:true,TrackDefaultList:true,URL:true,HTMLVideoElement:true,VideoTrackList:true,Window:true,DOMWindow:true,DedicatedWorkerGlobalScope:true,ServiceWorkerGlobalScope:true,SharedWorkerGlobalScope:true,WorkerGlobalScope:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,IDBKeyRange:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLContextEvent:true,WebGLFramebuffer:true,WebGLProgram:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true})
A.bz.$nativeSuperclassTag="ArrayBufferView"
A.cE.$nativeSuperclassTag="ArrayBufferView"
A.cF.$nativeSuperclassTag="ArrayBufferView"
A.cb.$nativeSuperclassTag="ArrayBufferView"
A.cG.$nativeSuperclassTag="ArrayBufferView"
A.cH.$nativeSuperclassTag="ArrayBufferView"
A.cc.$nativeSuperclassTag="ArrayBufferView"
A.cJ.$nativeSuperclassTag="EventTarget"
A.cK.$nativeSuperclassTag="EventTarget"
A.cM.$nativeSuperclassTag="EventTarget"
A.cN.$nativeSuperclassTag="EventTarget"})()
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
var s=A.nA
if(typeof dartMainRunner==="function")dartMainRunner(s,[])
else s([])})})()