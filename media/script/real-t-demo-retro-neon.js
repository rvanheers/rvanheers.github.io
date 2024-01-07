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
a[c]=function(){a[c]=function(){A.n6(b)}
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
if(a[b]!==s)A.n7(b)
a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s)convertToFastObject(a[s])}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.iU(b)
return new s(c,this)}:function(){if(s===null)s=A.iU(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.iU(a).prototype
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
iZ(a,b,c,d){return{i:a,p:b,e:c,x:d}},
ic(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.iW==null){A.mW()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw A.c(A.jF("Return interceptor for "+A.o(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.hO
if(o==null)o=$.hO=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=A.n2(a)
if(p!=null)return p
if(typeof a=="function")return B.B
s=Object.getPrototypeOf(a)
if(s==null)return B.r
if(s===Object.prototype)return B.r
if(typeof q=="function"){o=$.hO
if(o==null)o=$.hO=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:B.i,enumerable:false,writable:true,configurable:true})
return B.i}return B.i},
la(a,b){if(a<0||a>4294967295)throw A.c(A.dV(a,0,4294967295,"length",null))
return J.jl(A.r(new Array(a),b.h("H<0>")),b)},
jk(a,b){if(a<0)throw A.c(A.aB("Length must be a non-negative integer: "+a,null))
return A.r(new Array(a),b.h("H<0>"))},
jl(a,b){a.fixed$length=Array
return a},
ay(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.c1.prototype
return J.dz.prototype}if(typeof a=="string")return J.br.prototype
if(a==null)return J.c2.prototype
if(typeof a=="boolean")return J.dx.prototype
if(Array.isArray(a))return J.H.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ao.prototype
if(typeof a=="symbol")return J.bt.prototype
if(typeof a=="bigint")return J.bs.prototype
return a}if(a instanceof A.v)return a
return J.ic(a)},
ib(a){if(typeof a=="string")return J.br.prototype
if(a==null)return a
if(Array.isArray(a))return J.H.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ao.prototype
if(typeof a=="symbol")return J.bt.prototype
if(typeof a=="bigint")return J.bs.prototype
return a}if(a instanceof A.v)return a
return J.ic(a)},
fh(a){if(a==null)return a
if(Array.isArray(a))return J.H.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ao.prototype
if(typeof a=="symbol")return J.bt.prototype
if(typeof a=="bigint")return J.bs.prototype
return a}if(a instanceof A.v)return a
return J.ic(a)},
d4(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.ao.prototype
if(typeof a=="symbol")return J.bt.prototype
if(typeof a=="bigint")return J.bs.prototype
return a}if(a instanceof A.v)return a
return J.ic(a)},
im(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.ay(a).J(a,b)},
kJ(a,b){if(typeof b==="number")if(Array.isArray(a)||typeof a=="string"||A.mZ(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.ib(a).l(a,b)},
kK(a,b,c,d){return J.d4(a).cU(a,b,c,d)},
kL(a,b,c,d){return J.d4(a).d1(a,b,c,d)},
kM(a,b){return J.fh(a).t(a,b)},
io(a,b){return J.fh(a).v(a,b)},
kN(a){return J.fh(a).gu(a)},
ip(a){return J.ay(a).gp(a)},
kO(a){return J.d4(a).gdg(a)},
bM(a){return J.fh(a).gK(a)},
fj(a){return J.ib(a).gi(a)},
kP(a){return J.ay(a).gD(a)},
j4(a,b,c){return J.fh(a).ap(a,b,c)},
kQ(a,b){return J.ay(a).bO(a,b)},
d6(a){return J.ay(a).j(a)},
bq:function bq(){},
dx:function dx(){},
c2:function c2(){},
a:function a(){},
b1:function b1(){},
dS:function dS(){},
cr:function cr(){},
ao:function ao(){},
bs:function bs(){},
bt:function bt(){},
H:function H(a){this.$ti=a},
fK:function fK(a){this.$ti=a},
bN:function bN(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
c3:function c3(){},
c1:function c1(){},
dz:function dz(){},
br:function br(){}},A={iz:function iz(){},
cp(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
jB(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
lu(a,b,c){return A.jB(A.cp(A.cp(c,a),b))},
fg(a,b,c){return a},
iY(a){var s,r
for(s=$.V.length,r=0;r<s;++r)if(a===$.V[r])return!0
return!1},
le(a,b,c,d){if(t.bl.b(a))return new A.bX(a,b,c.h("@<0>").q(d).h("bX<1,2>"))
return new A.b4(a,b,c.h("@<0>").q(d).h("b4<1,2>"))},
ji(){return new A.b9("No element")},
c6:function c6(a){this.a=a},
ij:function ij(){},
hc:function hc(){},
k:function k(){},
aq:function aq(){},
b3:function b3(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
b4:function b4(a,b,c){this.a=a
this.b=b
this.$ti=c},
bX:function bX(a,b,c){this.a=a
this.b=b
this.$ti=c},
c9:function c9(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
ar:function ar(a,b,c){this.a=a
this.b=b
this.$ti=c},
M:function M(){},
bB:function bB(a){this.a=a},
ks(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
mZ(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.da.b(a)},
o(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.d6(a)
return s},
ci(a){var s,r=$.jt
if(r==null)r=$.jt=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
lp(a,b){var s,r,q,p,o,n=null,m=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(m==null)return n
if(3>=m.length)return A.d(m,3)
s=m[3]
if(b<2||b>36)throw A.c(A.dV(b,2,36,"radix",n))
if(b===10&&s!=null)return parseInt(a,10)
if(b<10||s==null){r=b<=10?47+b:86+b
q=m[1]
for(p=q.length,o=0;o<p;++o)if((q.charCodeAt(o)|32)>r)return n}return parseInt(a,b)},
h2(a){return A.lg(a)},
lg(a){var s,r,q,p
if(a instanceof A.v)return A.Q(A.af(a),null)
s=J.ay(a)
if(s===B.A||s===B.C||t.cr.b(a)){r=B.k(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.Q(A.af(a),null)},
lq(a){if(typeof a=="number"||A.d0(a))return J.d6(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.aD)return a.j(0)
return"Instance of '"+A.h2(a)+"'"},
b7(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
lo(a){var s=A.b7(a).getFullYear()+0
return s},
lm(a){var s=A.b7(a).getMonth()+1
return s},
li(a){var s=A.b7(a).getDate()+0
return s},
lj(a){var s=A.b7(a).getHours()+0
return s},
ll(a){var s=A.b7(a).getMinutes()+0
return s},
ln(a){var s=A.b7(a).getSeconds()+0
return s},
lk(a){var s=A.b7(a).getMilliseconds()+0
return s},
aG(a,b,c){var s,r,q={}
q.a=0
s=[]
r=[]
q.a=b.length
B.a.X(s,b)
q.b=""
if(c!=null&&c.a!==0)c.v(0,new A.h1(q,r,s))
return J.kQ(a,new A.dy(B.E,0,s,r,0))},
lh(a,b,c){var s,r,q
if(Array.isArray(b))s=c==null||c.a===0
else s=!1
if(s){r=b.length
if(r===0){if(!!a.$0)return a.$0()}else if(r===1){if(!!a.$1)return a.$1(b[0])}else if(r===2){if(!!a.$2)return a.$2(b[0],b[1])}else if(r===3){if(!!a.$3)return a.$3(b[0],b[1],b[2])}else if(r===4){if(!!a.$4)return a.$4(b[0],b[1],b[2],b[3])}else if(r===5)if(!!a.$5)return a.$5(b[0],b[1],b[2],b[3],b[4])
q=a[""+"$"+r]
if(q!=null)return q.apply(a,b)}return A.lf(a,b,c)},
lf(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g=Array.isArray(b)?b:A.fN(b,t.z),f=g.length,e=a.$R
if(f<e)return A.aG(a,g,c)
s=a.$D
r=s==null
q=!r?s():null
p=J.ay(a)
o=p.$C
if(typeof o=="string")o=p[o]
if(r){if(c!=null&&c.a!==0)return A.aG(a,g,c)
if(f===e)return o.apply(a,g)
return A.aG(a,g,c)}if(Array.isArray(q)){if(c!=null&&c.a!==0)return A.aG(a,g,c)
n=e+q.length
if(f>n)return A.aG(a,g,null)
if(f<n){m=q.slice(f-e)
if(g===b)g=A.fN(g,t.z)
B.a.X(g,m)}return o.apply(a,g)}else{if(f>e)return A.aG(a,g,c)
if(g===b)g=A.fN(g,t.z)
l=Object.keys(q)
if(c==null)for(r=l.length,k=0;k<l.length;l.length===r||(0,A.aR)(l),++k){j=q[A.a5(l[k])]
if(B.m===j)return A.aG(a,g,c)
B.a.n(g,j)}else{for(r=l.length,i=0,k=0;k<l.length;l.length===r||(0,A.aR)(l),++k){h=A.a5(l[k])
if(c.ae(0,h)){++i
B.a.n(g,c.l(0,h))}else{j=q[h]
if(B.m===j)return A.aG(a,g,c)
B.a.n(g,j)}}if(i!==c.a)return A.aG(a,g,c)}return o.apply(a,g)}},
mU(a){throw A.c(A.kh(a))},
d(a,b){if(a==null)J.fj(a)
throw A.c(A.iV(a,b))},
iV(a,b){var s,r="index"
if(!A.i2(b))return new A.am(!0,b,r,null)
s=A.a4(J.fj(a))
if(b<0||b>=s)return A.I(b,s,a,r)
return A.jv(b,r)},
kh(a){return new A.am(!0,a,null,null)},
c(a){return A.kn(new Error(),a)},
kn(a,b){var s
if(b==null)b=new A.as()
a.dartException=b
s=A.n8
if("defineProperty" in Object){Object.defineProperty(a,"message",{get:s})
a.name=""}else a.toString=s
return a},
n8(){return J.d6(this.dartException)},
aA(a){throw A.c(a)},
kr(a,b){throw A.kn(b,a)},
aR(a){throw A.c(A.ai(a))},
at(a){var s,r,q,p,o,n
a=A.n5(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.r([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.hm(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
hn(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
jE(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
iA(a,b){var s=b==null,r=s?null:b.method
return new A.dA(a,r,s?null:b.receiver)},
aS(a){var s
if(a==null)return new A.fZ(a)
if(a instanceof A.bY){s=a.a
return A.aQ(a,s==null?t.K.a(s):s)}if(typeof a!=="object")return a
if("dartException" in a)return A.aQ(a,a.dartException)
return A.mH(a)},
aQ(a,b){if(t.R.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
mH(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.e.aT(r,16)&8191)===10)switch(q){case 438:return A.aQ(a,A.iA(A.o(s)+" (Error "+q+")",null))
case 445:case 5007:A.o(s)
return A.aQ(a,new A.ch())}}if(a instanceof TypeError){p=$.kw()
o=$.kx()
n=$.ky()
m=$.kz()
l=$.kC()
k=$.kD()
j=$.kB()
$.kA()
i=$.kF()
h=$.kE()
g=p.M(s)
if(g!=null)return A.aQ(a,A.iA(A.a5(s),g))
else{g=o.M(s)
if(g!=null){g.method="call"
return A.aQ(a,A.iA(A.a5(s),g))}else if(n.M(s)!=null||m.M(s)!=null||l.M(s)!=null||k.M(s)!=null||j.M(s)!=null||m.M(s)!=null||i.M(s)!=null||h.M(s)!=null){A.a5(s)
return A.aQ(a,new A.ch())}}return A.aQ(a,new A.ed(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.cn()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.aQ(a,new A.am(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.cn()
return a},
aP(a){var s
if(a instanceof A.bY)return a.b
if(a==null)return new A.cS(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.cS(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
ik(a){if(a==null)return J.ip(a)
if(typeof a=="object")return A.ci(a)
return J.ip(a)},
mR(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.k(0,a[s],a[r])}return b},
mj(a,b,c,d,e,f){t.Z.a(a)
switch(A.a4(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.c(A.dm("Unsupported number of arguments for wrapped closure"))},
bg(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=A.mO(a,b)
a.$identity=s
return s},
mO(a,b){var s
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
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.mj)},
kZ(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.e2().constructor.prototype):Object.create(new A.bk(null,null).constructor.prototype)
s.$initialize=s.constructor
if(h)r=function static_tear_off(){this.$initialize()}
else r=function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.jb(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.kV(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.jb(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
kV(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.c("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.kS)}throw A.c("Error in functionType of tearoff")},
kW(a,b,c,d){var s=A.ja
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
jb(a,b,c,d){var s,r
if(c)return A.kY(a,b,d)
s=b.length
r=A.kW(s,d,a,b)
return r},
kX(a,b,c,d){var s=A.ja,r=A.kT
switch(b?-1:a){case 0:throw A.c(new A.dY("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
kY(a,b,c){var s,r
if($.j8==null)$.j8=A.j7("interceptor")
if($.j9==null)$.j9=A.j7("receiver")
s=b.length
r=A.kX(s,c,a,b)
return r},
iU(a){return A.kZ(a)},
kS(a,b){return A.hW(v.typeUniverse,A.af(a.a),b)},
ja(a){return a.a},
kT(a){return a.b},
j7(a){var s,r,q,p=new A.bk("receiver","interceptor"),o=J.jl(Object.getOwnPropertyNames(p),t.X)
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw A.c(A.aB("Field name "+a+" not found.",null))},
n6(a){throw A.c(new A.en(a))},
kl(a){return v.getIsolateTag(a)},
nY(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
n2(a){var s,r,q,p,o,n=A.a5($.km.$1(a)),m=$.ia[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.ih[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.m2($.kg.$2(a,n))
if(q!=null){m=$.ia[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.ih[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.ii(s)
$.ia[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.ih[n]=s
return s}if(p==="-"){o=A.ii(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.kp(a,s)
if(p==="*")throw A.c(A.jF(n))
if(v.leafTags[n]===true){o=A.ii(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.kp(a,s)},
kp(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.iZ(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
ii(a){return J.iZ(a,!1,null,!!a.$it)},
n4(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.ii(s)
else return J.iZ(s,c,null,null)},
mW(){if(!0===$.iW)return
$.iW=!0
A.mX()},
mX(){var s,r,q,p,o,n,m,l
$.ia=Object.create(null)
$.ih=Object.create(null)
A.mV()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.kq.$1(o)
if(n!=null){m=A.n4(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
mV(){var s,r,q,p,o,n,m=B.t()
m=A.bL(B.u,A.bL(B.v,A.bL(B.l,A.bL(B.l,A.bL(B.w,A.bL(B.x,A.bL(B.y(B.k),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.km=new A.id(p)
$.kg=new A.ie(o)
$.kq=new A.ig(n)},
bL(a,b){return a(b)||b},
mP(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
n5(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
bQ:function bQ(a,b){this.a=a
this.$ti=b},
bP:function bP(){},
bR:function bR(a,b,c){this.a=a
this.b=b
this.$ti=c},
cI:function cI(a,b){this.a=a
this.$ti=b},
cJ:function cJ(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
dy:function dy(a,b,c,d,e){var _=this
_.a=a
_.c=b
_.d=c
_.e=d
_.f=e},
h1:function h1(a,b,c){this.a=a
this.b=b
this.c=c},
hm:function hm(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
ch:function ch(){},
dA:function dA(a,b,c){this.a=a
this.b=b
this.c=c},
ed:function ed(a){this.a=a},
fZ:function fZ(a){this.a=a},
bY:function bY(a,b){this.a=a
this.b=b},
cS:function cS(a){this.a=a
this.b=null},
aD:function aD(){},
dh:function dh(){},
di:function di(){},
e5:function e5(){},
e2:function e2(){},
bk:function bk(a,b){this.a=a
this.b=b},
en:function en(a){this.a=a},
dY:function dY(a){this.a=a},
hQ:function hQ(){},
S:function S(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fM:function fM(a,b){this.a=a
this.b=b
this.c=null},
b2:function b2(a,b){this.a=a
this.$ti=b},
c7:function c7(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
id:function id(a){this.a=a},
ie:function ie(a){this.a=a},
ig:function ig(a){this.a=a},
k_(a){return a},
aw(a){return a},
be(a,b,c){if(a>>>0!==a||a>=c)throw A.c(A.iV(b,a))},
dH:function dH(){},
cd:function cd(){},
dI:function dI(){},
bx:function bx(){},
cb:function cb(){},
cc:function cc(){},
ca:function ca(){},
dJ:function dJ(){},
dK:function dK(){},
dL:function dL(){},
dM:function dM(){},
ce:function ce(){},
dN:function dN(){},
cf:function cf(){},
dO:function dO(){},
cL:function cL(){},
cM:function cM(){},
cN:function cN(){},
cO:function cO(){},
jw(a,b){var s=b.c
return s==null?b.c=A.iK(a,b.y,!0):s},
iE(a,b){var s=b.c
return s==null?b.c=A.cX(a,"a8",[b.y]):s},
lt(a){var s=a.d
if(s!=null)return s
return a.d=new Map()},
jx(a){var s=a.x
if(s===6||s===7||s===8)return A.jx(a.y)
return s===12||s===13},
ls(a){return a.at},
bi(a){return A.f3(v.typeUniverse,a,!1)},
aN(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.x
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.y
r=A.aN(a,s,a0,a1)
if(r===s)return b
return A.jW(a,r,!0)
case 7:s=b.y
r=A.aN(a,s,a0,a1)
if(r===s)return b
return A.iK(a,r,!0)
case 8:s=b.y
r=A.aN(a,s,a0,a1)
if(r===s)return b
return A.jV(a,r,!0)
case 9:q=b.z
p=A.d3(a,q,a0,a1)
if(p===q)return b
return A.cX(a,b.y,p)
case 10:o=b.y
n=A.aN(a,o,a0,a1)
m=b.z
l=A.d3(a,m,a0,a1)
if(n===o&&l===m)return b
return A.iI(a,n,l)
case 12:k=b.y
j=A.aN(a,k,a0,a1)
i=b.z
h=A.mE(a,i,a0,a1)
if(j===k&&h===i)return b
return A.jU(a,j,h)
case 13:g=b.z
a1+=g.length
f=A.d3(a,g,a0,a1)
o=b.y
n=A.aN(a,o,a0,a1)
if(f===g&&n===o)return b
return A.iJ(a,n,f,!0)
case 14:e=b.y
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw A.c(A.db("Attempted to substitute unexpected RTI kind "+c))}},
d3(a,b,c,d){var s,r,q,p,o=b.length,n=A.hX(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.aN(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
mF(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.hX(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.aN(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
mE(a,b,c,d){var s,r=b.a,q=A.d3(a,r,c,d),p=b.b,o=A.d3(a,p,c,d),n=b.c,m=A.mF(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.ew()
s.a=q
s.b=o
s.c=m
return s},
r(a,b){a[v.arrayRti]=b
return a},
kj(a){var s,r=a.$S
if(r!=null){if(typeof r=="number")return A.mT(r)
s=a.$S()
return s}return null},
mY(a,b){var s
if(A.jx(b))if(a instanceof A.aD){s=A.kj(a)
if(s!=null)return s}return A.af(a)},
af(a){if(a instanceof A.v)return A.C(a)
if(Array.isArray(a))return A.av(a)
return A.iQ(J.ay(a))},
av(a){var s=a[v.arrayRti],r=t.b
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
C(a){var s=a.$ti
return s!=null?s:A.iQ(a)},
iQ(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.mi(a,s)},
mi(a,b){var s=a instanceof A.aD?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.lZ(v.typeUniverse,s.name)
b.$ccache=r
return r},
mT(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.f3(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
mS(a){return A.bh(A.C(a))},
mD(a){var s=a instanceof A.aD?A.kj(a):null
if(s!=null)return s
if(t.bW.b(a))return J.kP(a).a
if(Array.isArray(a))return A.av(a)
return A.af(a)},
bh(a){var s=a.w
return s==null?a.w=A.k3(a):s},
k3(a){var s,r,q=a.at,p=q.replace(/\*/g,"")
if(p===q)return a.w=new A.hV(a)
s=A.f3(v.typeUniverse,p,!0)
r=s.w
return r==null?s.w=A.k3(s):r},
ag(a){return A.bh(A.f3(v.typeUniverse,a,!1))},
mh(a){var s,r,q,p,o,n,m=this
if(m===t.K)return A.ax(m,a,A.mo)
if(!A.az(m))if(!(m===t._))s=!1
else s=!0
else s=!0
if(s)return A.ax(m,a,A.ms)
s=m.x
if(s===7)return A.ax(m,a,A.mf)
if(s===1)return A.ax(m,a,A.k9)
r=s===6?m.y:m
q=r.x
if(q===8)return A.ax(m,a,A.mk)
if(r===t.S)p=A.i2
else if(r===t.i||r===t.H)p=A.mn
else if(r===t.N)p=A.mq
else p=r===t.y?A.d0:null
if(p!=null)return A.ax(m,a,p)
if(q===9){o=r.y
if(r.z.every(A.n0)){m.r="$i"+o
if(o==="l")return A.ax(m,a,A.mm)
return A.ax(m,a,A.mr)}}else if(q===11){n=A.mP(r.y,r.z)
return A.ax(m,a,n==null?A.k9:n)}return A.ax(m,a,A.md)},
ax(a,b,c){a.b=c
return a.b(b)},
mg(a){var s,r=this,q=A.mc
if(!A.az(r))if(!(r===t._))s=!1
else s=!0
else s=!0
if(s)q=A.m3
else if(r===t.K)q=A.m1
else{s=A.d5(r)
if(s)q=A.me}r.a=q
return r.a(a)},
fe(a){var s,r=a.x
if(!A.az(a))if(!(a===t._))if(!(a===t.G))if(r!==7)if(!(r===6&&A.fe(a.y)))s=r===8&&A.fe(a.y)||a===t.P||a===t.T
else s=!0
else s=!0
else s=!0
else s=!0
else s=!0
return s},
md(a){var s=this
if(a==null)return A.fe(s)
return A.n_(v.typeUniverse,A.mY(a,s),s)},
mf(a){if(a==null)return!0
return this.y.b(a)},
mr(a){var s,r=this
if(a==null)return A.fe(r)
s=r.r
if(a instanceof A.v)return!!a[s]
return!!J.ay(a)[s]},
mm(a){var s,r=this
if(a==null)return A.fe(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.r
if(a instanceof A.v)return!!a[s]
return!!J.ay(a)[s]},
mc(a){var s,r=this
if(a==null){s=A.d5(r)
if(s)return a}else if(r.b(a))return a
A.k4(a,r)},
me(a){var s=this
if(a==null)return a
else if(s.b(a))return a
A.k4(a,s)},
k4(a,b){throw A.c(A.lO(A.jK(a,A.Q(b,null))))},
jK(a,b){return A.bp(a)+": type '"+A.Q(A.mD(a),null)+"' is not a subtype of type '"+b+"'"},
lO(a){return new A.cV("TypeError: "+a)},
O(a,b){return new A.cV("TypeError: "+A.jK(a,b))},
mk(a){var s=this,r=s.x===6?s.y:s
return r.y.b(a)||A.iE(v.typeUniverse,r).b(a)},
mo(a){return a!=null},
m1(a){if(a!=null)return a
throw A.c(A.O(a,"Object"))},
ms(a){return!0},
m3(a){return a},
k9(a){return!1},
d0(a){return!0===a||!1===a},
iL(a){if(!0===a)return!0
if(!1===a)return!1
throw A.c(A.O(a,"bool"))},
nN(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.c(A.O(a,"bool"))},
nM(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.c(A.O(a,"bool?"))},
iM(a){if(typeof a=="number")return a
throw A.c(A.O(a,"double"))},
nP(a){if(typeof a=="number")return a
if(a==null)return a
throw A.c(A.O(a,"double"))},
nO(a){if(typeof a=="number")return a
if(a==null)return a
throw A.c(A.O(a,"double?"))},
i2(a){return typeof a=="number"&&Math.floor(a)===a},
a4(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.c(A.O(a,"int"))},
nR(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.c(A.O(a,"int"))},
nQ(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.c(A.O(a,"int?"))},
mn(a){return typeof a=="number"},
jZ(a){if(typeof a=="number")return a
throw A.c(A.O(a,"num"))},
nS(a){if(typeof a=="number")return a
if(a==null)return a
throw A.c(A.O(a,"num"))},
m0(a){if(typeof a=="number")return a
if(a==null)return a
throw A.c(A.O(a,"num?"))},
mq(a){return typeof a=="string"},
a5(a){if(typeof a=="string")return a
throw A.c(A.O(a,"String"))},
nT(a){if(typeof a=="string")return a
if(a==null)return a
throw A.c(A.O(a,"String"))},
m2(a){if(typeof a=="string")return a
if(a==null)return a
throw A.c(A.O(a,"String?"))},
kc(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.Q(a[q],b)
return s},
my(a,b){var s,r,q,p,o,n,m=a.y,l=a.z
if(""===m)return"("+A.kc(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.Q(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
k5(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=", "
if(a6!=null){s=a6.length
if(a5==null){a5=A.r([],t.s)
r=null}else r=a5.length
q=a5.length
for(p=s;p>0;--p)B.a.n(a5,"T"+(q+p))
for(o=t.X,n=t._,m="<",l="",p=0;p<s;++p,l=a3){k=a5.length
j=k-1-p
if(!(j>=0))return A.d(a5,j)
m=B.h.af(m+l,a5[j])
i=a6[p]
h=i.x
if(!(h===2||h===3||h===4||h===5||i===o))if(!(i===n))k=!1
else k=!0
else k=!0
if(!k)m+=" extends "+A.Q(i,a5)}m+=">"}else{m=""
r=null}o=a4.y
g=a4.z
f=g.a
e=f.length
d=g.b
c=d.length
b=g.c
a=b.length
a0=A.Q(o,a5)
for(a1="",a2="",p=0;p<e;++p,a2=a3)a1+=a2+A.Q(f[p],a5)
if(c>0){a1+=a2+"["
for(a2="",p=0;p<c;++p,a2=a3)a1+=a2+A.Q(d[p],a5)
a1+="]"}if(a>0){a1+=a2+"{"
for(a2="",p=0;p<a;p+=3,a2=a3){a1+=a2
if(b[p+1])a1+="required "
a1+=A.Q(b[p+2],a5)+" "+b[p]}a1+="}"}if(r!=null){a5.toString
a5.length=r}return m+"("+a1+") => "+a0},
Q(a,b){var s,r,q,p,o,n,m,l=a.x
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=A.Q(a.y,b)
return s}if(l===7){r=a.y
s=A.Q(r,b)
q=r.x
return(q===12||q===13?"("+s+")":s)+"?"}if(l===8)return"FutureOr<"+A.Q(a.y,b)+">"
if(l===9){p=A.mG(a.y)
o=a.z
return o.length>0?p+("<"+A.kc(o,b)+">"):p}if(l===11)return A.my(a,b)
if(l===12)return A.k5(a,b,null)
if(l===13)return A.k5(a.y,b,a.z)
if(l===14){n=a.y
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.d(b,n)
return b[n]}return"?"},
mG(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
m_(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
lZ(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.f3(a,b,!1)
else if(typeof m=="number"){s=m
r=A.cY(a,5,"#")
q=A.hX(s)
for(p=0;p<s;++p)q[p]=r
o=A.cX(a,b,q)
n[b]=o
return o}else return m},
lX(a,b){return A.jX(a.tR,b)},
lW(a,b){return A.jX(a.eT,b)},
f3(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.jR(A.jP(a,null,b,c))
r.set(b,s)
return s},
hW(a,b,c){var s,r,q=b.Q
if(q==null)q=b.Q=new Map()
s=q.get(c)
if(s!=null)return s
r=A.jR(A.jP(a,b,c,!0))
q.set(c,r)
return r},
lY(a,b,c){var s,r,q,p=b.as
if(p==null)p=b.as=new Map()
s=c.at
r=p.get(s)
if(r!=null)return r
q=A.iI(a,b,c.x===10?c.z:[c])
p.set(s,q)
return q},
au(a,b){b.a=A.mg
b.b=A.mh
return b},
cY(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.a0(null,null)
s.x=b
s.at=c
r=A.au(a,s)
a.eC.set(c,r)
return r},
jW(a,b,c){var s,r=b.at+"*",q=a.eC.get(r)
if(q!=null)return q
s=A.lT(a,b,r,c)
a.eC.set(r,s)
return s},
lT(a,b,c,d){var s,r,q
if(d){s=b.x
if(!A.az(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new A.a0(null,null)
q.x=6
q.y=b
q.at=c
return A.au(a,q)},
iK(a,b,c){var s,r=b.at+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.lS(a,b,r,c)
a.eC.set(r,s)
return s},
lS(a,b,c,d){var s,r,q,p
if(d){s=b.x
if(!A.az(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&A.d5(b.y)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.G)return t.P
else if(s===6){q=b.y
if(q.x===8&&A.d5(q.y))return q
else return A.jw(a,b)}}p=new A.a0(null,null)
p.x=7
p.y=b
p.at=c
return A.au(a,p)},
jV(a,b,c){var s,r=b.at+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.lQ(a,b,r,c)
a.eC.set(r,s)
return s},
lQ(a,b,c,d){var s,r,q
if(d){s=b.x
if(!A.az(b))if(!(b===t._))r=!1
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return A.cX(a,"a8",[b])
else if(b===t.P||b===t.T)return t.bc}q=new A.a0(null,null)
q.x=8
q.y=b
q.at=c
return A.au(a,q)},
lU(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.a0(null,null)
s.x=14
s.y=b
s.at=q
r=A.au(a,s)
a.eC.set(q,r)
return r},
cW(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].at
return s},
lP(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].at}return s},
cX(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.cW(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.a0(null,null)
r.x=9
r.y=b
r.z=c
if(c.length>0)r.c=c[0]
r.at=p
q=A.au(a,r)
a.eC.set(p,q)
return q},
iI(a,b,c){var s,r,q,p,o,n
if(b.x===10){s=b.y
r=b.z.concat(c)}else{r=c
s=b}q=s.at+(";<"+A.cW(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.a0(null,null)
o.x=10
o.y=s
o.z=r
o.at=q
n=A.au(a,o)
a.eC.set(q,n)
return n},
lV(a,b,c){var s,r,q="+"+(b+"("+A.cW(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.a0(null,null)
s.x=11
s.y=b
s.z=c
s.at=q
r=A.au(a,s)
a.eC.set(q,r)
return r},
jU(a,b,c){var s,r,q,p,o,n=b.at,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.cW(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.cW(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.lP(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.a0(null,null)
p.x=12
p.y=b
p.z=c
p.at=r
o=A.au(a,p)
a.eC.set(r,o)
return o},
iJ(a,b,c,d){var s,r=b.at+("<"+A.cW(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.lR(a,b,c,r,d)
a.eC.set(r,s)
return s},
lR(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.hX(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.x===1){r[p]=o;++q}}if(q>0){n=A.aN(a,b,r,0)
m=A.d3(a,c,r,0)
return A.iJ(a,n,m,c!==m)}}l=new A.a0(null,null)
l.x=13
l.y=b
l.z=c
l.at=d
return A.au(a,l)},
jP(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
jR(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.lI(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.jQ(a,r,l,k,!1)
else if(q===46)r=A.jQ(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.aM(a.u,a.e,k.pop()))
break
case 94:k.push(A.lU(a.u,k.pop()))
break
case 35:k.push(A.cY(a.u,5,"#"))
break
case 64:k.push(A.cY(a.u,2,"@"))
break
case 126:k.push(A.cY(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.lK(a,k)
break
case 38:A.lJ(a,k)
break
case 42:p=a.u
k.push(A.jW(p,A.aM(p,a.e,k.pop()),a.n))
break
case 63:p=a.u
k.push(A.iK(p,A.aM(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.jV(p,A.aM(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.lH(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.jS(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.lM(a.u,a.e,o)
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
return A.aM(a.u,a.e,m)},
lI(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
jQ(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.x===10)o=o.y
n=A.m_(s,o.y)[p]
if(n==null)A.aA('No "'+p+'" in "'+A.ls(o)+'"')
d.push(A.hW(s,o,n))}else d.push(p)
return m},
lK(a,b){var s,r=a.u,q=A.jO(a,b),p=b.pop()
if(typeof p=="string")b.push(A.cX(r,p,q))
else{s=A.aM(r,a.e,p)
switch(s.x){case 12:b.push(A.iJ(r,s,q,a.n))
break
default:b.push(A.iI(r,s,q))
break}}},
lH(a,b){var s,r,q,p,o,n=null,m=a.u,l=b.pop()
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
s=r}q=A.jO(a,b)
l=b.pop()
switch(l){case-3:l=b.pop()
if(s==null)s=m.sEA
if(r==null)r=m.sEA
p=A.aM(m,a.e,l)
o=new A.ew()
o.a=q
o.b=s
o.c=r
b.push(A.jU(m,p,o))
return
case-4:b.push(A.lV(m,b.pop(),q))
return
default:throw A.c(A.db("Unexpected state under `()`: "+A.o(l)))}},
lJ(a,b){var s=b.pop()
if(0===s){b.push(A.cY(a.u,1,"0&"))
return}if(1===s){b.push(A.cY(a.u,4,"1&"))
return}throw A.c(A.db("Unexpected extended operation "+A.o(s)))},
jO(a,b){var s=b.splice(a.p)
A.jS(a.u,a.e,s)
a.p=b.pop()
return s},
aM(a,b,c){if(typeof c=="string")return A.cX(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.lL(a,b,c)}else return c},
jS(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.aM(a,b,c[s])},
lM(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.aM(a,b,c[s])},
lL(a,b,c){var s,r,q=b.x
if(q===10){if(c===0)return b.y
s=b.z
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.y
q=b.x}else if(c===0)return b
if(q!==9)throw A.c(A.db("Indexed base must be an interface type"))
s=b.z
if(c<=s.length)return s[c-1]
throw A.c(A.db("Bad index "+c+" for "+b.j(0)))},
n_(a,b,c){var s,r=A.lt(b),q=r.get(c)
if(q!=null)return q
s=A.G(a,b,null,c,null)
r.set(c,s)
return s},
G(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(!A.az(d))if(!(d===t._))s=!1
else s=!0
else s=!0
if(s)return!0
r=b.x
if(r===4)return!0
if(A.az(b))return!1
if(b.x!==1)s=!1
else s=!0
if(s)return!0
q=r===14
if(q)if(A.G(a,c[b.y],c,d,e))return!0
p=d.x
s=b===t.P||b===t.T
if(s){if(p===8)return A.G(a,b,c,d.y,e)
return d===t.P||d===t.T||p===7||p===6}if(d===t.K){if(r===8)return A.G(a,b.y,c,d,e)
if(r===6)return A.G(a,b.y,c,d,e)
return r!==7}if(r===6)return A.G(a,b.y,c,d,e)
if(p===6){s=A.jw(a,d)
return A.G(a,b,c,s,e)}if(r===8){if(!A.G(a,b.y,c,d,e))return!1
return A.G(a,A.iE(a,b),c,d,e)}if(r===7){s=A.G(a,t.P,c,d,e)
return s&&A.G(a,b.y,c,d,e)}if(p===8){if(A.G(a,b,c,d.y,e))return!0
return A.G(a,b,c,A.iE(a,d),e)}if(p===7){s=A.G(a,b,c,t.P,e)
return s||A.G(a,b,c,d.y,e)}if(q)return!1
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
if(!A.G(a,j,c,i,e)||!A.G(a,i,e,j,c))return!1}return A.k8(a,b.y,c,d.y,e)}if(p===12){if(b===t.g)return!0
if(s)return!1
return A.k8(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return A.ml(a,b,c,d,e)}if(o&&p===11)return A.mp(a,b,c,d,e)
return!1},
k8(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!A.G(a3,a4.y,a5,a6.y,a7))return!1
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
if(!A.G(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.G(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.G(a3,k[h],a7,g,a5))return!1}f=s.c
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
if(!A.G(a3,e[a+2],a7,g,a5))return!1
break}}for(;b<d;){if(f[b+1])return!1
b+=3}return!0},
ml(a,b,c,d,e){var s,r,q,p,o,n,m,l=b.y,k=d.y
for(;l!==k;){s=a.tR[l]
if(s==null)return!1
if(typeof s=="string"){l=s
continue}r=s[k]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.hW(a,b,r[o])
return A.jY(a,p,null,c,d.z,e)}n=b.z
m=d.z
return A.jY(a,n,null,c,m,e)},
jY(a,b,c,d,e,f){var s,r,q,p=b.length
for(s=0;s<p;++s){r=b[s]
q=e[s]
if(!A.G(a,r,d,q,f))return!1}return!0},
mp(a,b,c,d,e){var s,r=b.z,q=d.z,p=r.length
if(p!==q.length)return!1
if(b.y!==d.y)return!1
for(s=0;s<p;++s)if(!A.G(a,r[s],c,q[s],e))return!1
return!0},
d5(a){var s,r=a.x
if(!(a===t.P||a===t.T))if(!A.az(a))if(r!==7)if(!(r===6&&A.d5(a.y)))s=r===8&&A.d5(a.y)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
n0(a){var s
if(!A.az(a))if(!(a===t._))s=!1
else s=!0
else s=!0
return s},
az(a){var s=a.x
return s===2||s===3||s===4||s===5||a===t.X},
jX(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
hX(a){return a>0?new Array(a):v.typeUniverse.sEA},
a0:function a0(a,b){var _=this
_.a=a
_.b=b
_.w=_.r=_.e=_.d=_.c=null
_.x=0
_.at=_.as=_.Q=_.z=_.y=null},
ew:function ew(){this.c=this.b=this.a=null},
hV:function hV(a){this.a=a},
et:function et(){},
cV:function cV(a){this.a=a},
lz(){var s,r,q={}
if(self.scheduleImmediate!=null)return A.mJ()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(A.bg(new A.hx(q),1)).observe(s,{childList:true})
return new A.hw(q,s,r)}else if(self.setImmediate!=null)return A.mK()
return A.mL()},
lA(a){self.scheduleImmediate(A.bg(new A.hy(t.M.a(a)),0))},
lB(a){self.setImmediate(A.bg(new A.hz(t.M.a(a)),0))},
lC(a){t.M.a(a)
A.lN(0,a)},
lN(a,b){var s=new A.hT()
s.cC(a,b)
return s},
mu(a){return new A.ei(new A.F($.A,a.h("F<0>")),a.h("ei<0>"))},
m6(a,b){a.$2(0,null)
b.b=!0
return b.a},
nU(a,b){A.m7(a,b)},
m5(a,b){var s,r,q=b.$ti
q.h("1/?").a(a)
s=a==null?q.c.a(a):a
if(!b.b)b.a.aG(s)
else{r=b.a
if(q.h("a8<1>").b(s))r.bl(s)
else r.aH(s)}},
m4(a,b){var s=A.aS(a),r=A.aP(a),q=b.b,p=b.a
if(q)p.a_(s,r)
else p.cH(s,r)},
m7(a,b){var s,r,q=new A.hY(b),p=new A.hZ(b)
if(a instanceof A.F)a.bC(q,p,t.z)
else{s=t.z
if(a instanceof A.F)a.b2(q,p,s)
else{r=new A.F($.A,t.c)
r.a=8
r.c=a
r.bC(q,p,s)}}},
mI(a){var s=function(b,c){return function(d,e){while(true)try{b(d,e)
break}catch(r){e=r
d=c}}}(a,1)
return $.A.b0(new A.i4(s),t.p,t.S,t.z)},
fl(a,b){var s=A.fg(a,"error",t.K)
return new A.bO(s,b==null?A.kR(a):b)},
kR(a){var s
if(t.R.b(a)){s=a.gav()
if(s!=null)return s}return B.z},
jL(a,b){var s,r,q
for(s=t.c;r=a.a,(r&4)!==0;)a=s.a(a.c)
if((r&24)!==0){q=b.am()
b.ak(a)
A.bG(b,q)}else{q=t.F.a(b.c)
b.bB(a)
a.aR(q)}},
lF(a,b){var s,r,q,p={},o=p.a=a
for(s=t.c;r=o.a,(r&4)!==0;o=a){a=s.a(o.c)
p.a=a}if((r&24)===0){q=t.F.a(b.c)
b.bB(o)
p.a.aR(q)
return}if((r&16)===0&&b.c==null){b.ak(o)
return}b.a^=2
A.bf(null,null,b.b,t.M.a(new A.hF(p,b)))},
bG(a,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c={},b=c.a=a
for(s=t.t,r=t.F,q=t.bz;!0;){p={}
o=b.a
n=(o&16)===0
m=!n
if(a0==null){if(m&&(o&1)===0){l=s.a(b.c)
A.ff(l.a,l.b)}return}p.a=a0
k=a0.a
for(b=a0;k!=null;b=k,k=j){b.a=null
A.bG(c.a,b)
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
A.ff(i.a,i.b)
return}f=$.A
if(f!==g)$.A=g
else f=null
b=b.c
if((b&15)===8)new A.hM(p,c,m).$0()
else if(n){if((b&1)!==0)new A.hL(p,i).$0()}else if((b&2)!==0)new A.hK(c,p).$0()
if(f!=null)$.A=f
b=p.c
if(b instanceof A.F){o=p.a.$ti
o=o.h("a8<2>").b(b)||!o.z[1].b(b)}else o=!1
if(o){q.a(b)
e=p.a.b
if((b.a&24)!==0){d=r.a(e.c)
e.c=null
a0=e.an(d)
e.a=b.a&30|e.a&1
e.c=b.c
c.a=b
continue}else A.jL(b,e)
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
mz(a,b){var s
if(t.C.b(a))return b.b0(a,t.z,t.K,t.l)
s=t.v
if(s.b(a))return s.a(a)
throw A.c(A.j5(a,"onError",u.c))},
mv(){var s,r
for(s=$.bK;s!=null;s=$.bK){$.d2=null
r=s.b
$.bK=r
if(r==null)$.d1=null
s.a.$0()}},
mC(){$.iR=!0
try{A.mv()}finally{$.d2=null
$.iR=!1
if($.bK!=null)$.j1().$1(A.ki())}},
ke(a){var s=new A.ej(a),r=$.d1
if(r==null){$.bK=$.d1=s
if(!$.iR)$.j1().$1(A.ki())}else $.d1=r.b=s},
mB(a){var s,r,q,p=$.bK
if(p==null){A.ke(a)
$.d2=$.d1
return}s=new A.ej(a)
r=$.d2
if(r==null){s.b=p
$.bK=$.d2=s}else{q=r.b
s.b=q
$.d2=r.b=s
if(q==null)$.d1=s}},
j_(a){var s,r=null,q=$.A
if(B.d===q){A.bf(r,r,B.d,a)
return}s=!1
if(s){A.bf(r,r,q,t.M.a(a))
return}A.bf(r,r,q,t.M.a(q.bE(a)))},
nv(a,b){A.fg(a,"stream",t.K)
return new A.eS(b.h("eS<0>"))},
jz(a){return new A.cu(null,null,a.h("cu<0>"))},
kd(a){return},
lD(a,b){if(b==null)b=A.mN()
if(t.k.b(b))return a.b0(b,t.z,t.K,t.l)
if(t.bo.b(b))return t.v.a(b)
throw A.c(A.aB("handleError callback must take either an Object (the error), or both an Object (the error) and a StackTrace.",null))},
mx(a,b){A.ff(a,b)},
mw(){},
ff(a,b){A.mB(new A.i3(a,b))},
ka(a,b,c,d,e){var s,r=$.A
if(r===c)return d.$0()
$.A=c
s=r
try{r=d.$0()
return r}finally{$.A=s}},
kb(a,b,c,d,e,f,g){var s,r=$.A
if(r===c)return d.$1(e)
$.A=c
s=r
try{r=d.$1(e)
return r}finally{$.A=s}},
mA(a,b,c,d,e,f,g,h,i){var s,r=$.A
if(r===c)return d.$2(e,f)
$.A=c
s=r
try{r=d.$2(e,f)
return r}finally{$.A=s}},
bf(a,b,c,d){t.M.a(d)
if(B.d!==c)d=c.bE(d)
A.ke(d)},
hx:function hx(a){this.a=a},
hw:function hw(a,b,c){this.a=a
this.b=b
this.c=c},
hy:function hy(a){this.a=a},
hz:function hz(a){this.a=a},
hT:function hT(){},
hU:function hU(a,b){this.a=a
this.b=b},
ei:function ei(a,b){this.a=a
this.b=!1
this.$ti=b},
hY:function hY(a){this.a=a},
hZ:function hZ(a){this.a=a},
i4:function i4(a){this.a=a},
bO:function bO(a,b){this.a=a
this.b=b},
aK:function aK(a,b){this.a=a
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
cv:function cv(){},
cu:function cu(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.e=_.d=null
_.$ti=c},
bd:function bd(a,b,c,d,e){var _=this
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
hC:function hC(a,b){this.a=a
this.b=b},
hJ:function hJ(a,b){this.a=a
this.b=b},
hG:function hG(a){this.a=a},
hH:function hH(a){this.a=a},
hI:function hI(a,b,c){this.a=a
this.b=b
this.c=c},
hF:function hF(a,b){this.a=a
this.b=b},
hE:function hE(a,b){this.a=a
this.b=b},
hD:function hD(a,b,c){this.a=a
this.b=b
this.c=c},
hM:function hM(a,b,c){this.a=a
this.b=b
this.c=c},
hN:function hN(a){this.a=a},
hL:function hL(a,b){this.a=a
this.b=b},
hK:function hK(a,b){this.a=a
this.b=b},
ej:function ej(a){this.a=a
this.b=null},
aH:function aH(){},
hg:function hg(a,b){this.a=a
this.b=b},
hh:function hh(a,b){this.a=a
this.b=b},
cw:function cw(){},
cx:function cx(){},
bE:function bE(){},
bI:function bI(){},
cz:function cz(){},
cy:function cy(a,b){this.b=a
this.a=null
this.$ti=b},
cP:function cP(a){var _=this
_.a=0
_.c=_.b=null
_.$ti=a},
hP:function hP(a,b){this.a=a
this.b=b},
bF:function bF(a,b){var _=this
_.a=1
_.b=a
_.c=null
_.$ti=b},
eS:function eS(a){this.$ti=a},
d_:function d_(){},
i3:function i3(a,b){this.a=a
this.b=b},
eM:function eM(){},
hR:function hR(a,b){this.a=a
this.b=b},
hS:function hS(a,b,c){this.a=a
this.b=b
this.c=c},
jM(a,b){var s=a[b]
return s===a?null:s},
jN(a,b,c){if(c==null)a[b]=a
else a[b]=c},
lG(){var s=Object.create(null)
A.jN(s,"<non-identifier-key>",s)
delete s["<non-identifier-key>"]
return s},
iB(a,b,c){return b.h("@<0>").q(c).h("jm<1,2>").a(A.mR(a,new A.S(b.h("@<0>").q(c).h("S<1,2>"))))},
lc(a,b){return new A.S(a.h("@<0>").q(b).h("S<1,2>"))},
fP(a){var s,r={}
if(A.iY(a))return"{...}"
s=new A.co("")
try{B.a.n($.V,a)
s.a+="{"
r.a=!0
J.io(a,new A.fQ(r,s))
s.a+="}"}finally{if(0>=$.V.length)return A.d($.V,-1)
$.V.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
cE:function cE(){},
cH:function cH(a){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=a},
cF:function cF(a,b){this.a=a
this.$ti=b},
cG:function cG(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
e:function e(){},
w:function w(){},
fQ:function fQ(a,b){this.a=a
this.b=b},
cZ:function cZ(){},
bu:function bu(){},
cs:function cs(){},
bJ:function bJ(){},
jd(a,b){return A.lh(a,b,null)},
iX(a,b){var s=A.lp(a,b)
if(s!=null)return s
throw A.c(new A.fA(a))},
l2(a,b){a=A.c(a)
if(a==null)a=t.K.a(a)
a.stack=b.j(0)
throw a
throw A.c("unreachable")},
iC(a,b,c,d){var s,r=c?J.jk(a,d):J.la(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
Y(a,b){var s,r=A.r([],b.h("H<0>"))
for(s=J.bM(a);s.A();)B.a.n(r,b.a(s.gB(s)))
return r},
fN(a,b){var s=A.ld(a,b)
return s},
ld(a,b){var s,r
if(Array.isArray(a))return A.r(a.slice(0),b.h("H<0>"))
s=A.r([],b.h("H<0>"))
for(r=J.bM(a);r.A();)B.a.n(s,r.gB(r))
return s},
jA(a,b,c){var s=J.bM(b)
if(!s.A())return a
if(c.length===0){do a+=A.o(s.gB(s))
while(s.A())}else{a+=A.o(s.gB(s))
for(;s.A();)a=a+c+A.o(s.gB(s))}return a},
jo(a,b){return new A.dP(a,b.gdi(),b.gdk(),b.gdj())},
l0(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
l1(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
dk(a){if(a>=10)return""+a
return"0"+a},
bp(a){if(typeof a=="number"||A.d0(a)||a==null)return J.d6(a)
if(typeof a=="string")return JSON.stringify(a)
return A.lq(a)},
l3(a,b){A.fg(a,"error",t.K)
A.fg(b,"stackTrace",t.l)
A.l2(a,b)},
db(a){return new A.da(a)},
aB(a,b){return new A.am(!1,null,b,a)},
j5(a,b,c){return new A.am(!0,a,b,c)},
jv(a,b){return new A.ck(null,null,!0,a,b,"Value not in range")},
dV(a,b,c,d,e){return new A.ck(b,c,!0,a,d,"Invalid value")},
lr(a,b,c){if(0>a||a>c)throw A.c(A.dV(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.c(A.dV(b,a,c,"end",null))
return b}return c},
I(a,b,c,d){return new A.dw(b,!0,a,d,"Index out of range")},
bc(a){return new A.ee(a)},
jF(a){return new A.ec(a)},
L(a){return new A.b9(a)},
ai(a){return new A.dj(a)},
dm(a){return new A.hB(a)},
l9(a,b,c){var s,r
if(A.iY(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.r([],t.s)
B.a.n($.V,a)
try{A.mt(a,s)}finally{if(0>=$.V.length)return A.d($.V,-1)
$.V.pop()}r=A.jA(b,t.V.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
jj(a,b,c){var s,r
if(A.iY(a))return b+"..."+c
s=new A.co(b)
B.a.n($.V,a)
try{r=s
r.a=A.jA(r.a,a,", ")}finally{if(0>=$.V.length)return A.d($.V,-1)
$.V.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
mt(a,b){var s,r,q,p,o,n,m,l=a.gK(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.A())return
s=A.o(l.gB(l))
B.a.n(b,s)
k+=s.length+2;++j}if(!l.A()){if(j<=5)return
if(0>=b.length)return A.d(b,-1)
r=b.pop()
if(0>=b.length)return A.d(b,-1)
q=b.pop()}else{p=l.gB(l);++j
if(!l.A()){if(j<=4){B.a.n(b,A.o(p))
return}r=A.o(p)
if(0>=b.length)return A.d(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gB(l);++j
for(;l.A();p=o,o=n){n=l.gB(l);++j
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
jp(a,b,c,d){var s=B.c.gp(a)
b=B.c.gp(b)
c=B.c.gp(c)
d=B.c.gp(d)
d=A.jB(A.cp(A.cp(A.cp(A.cp($.kI(),s),b),c),d))
return d},
fY:function fY(a,b){this.a=a
this.b=b},
bT:function bT(a,b){this.a=a
this.b=b},
B:function B(){},
da:function da(a){this.a=a},
as:function as(){},
am:function am(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ck:function ck(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
dw:function dw(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
dP:function dP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ee:function ee(a){this.a=a},
ec:function ec(a){this.a=a},
b9:function b9(a){this.a=a},
dj:function dj(a){this.a=a},
cn:function cn(){},
hB:function hB(a){this.a=a},
fA:function fA(a){this.a=a},
h:function h(){},
K:function K(){},
v:function v(){},
eV:function eV(){},
co:function co(a){this.a=a},
mQ(){var s=document
s.toString
return s},
ir(a,b){var s=document.createElement("canvas")
s.toString
if(b!=null)B.f.sU(s,b)
if(a!=null)B.f.sS(s,a)
return s},
lE(a,b){if(b.parentNode===a){a.removeChild(b).toString
return!0}return!1},
it(a,b){var s,r,q,p,o=a===b
if(!o){s=b.tagName
s.toString
r=s==="HTML"}else r=!0
if(a==null||o){if(r)return new A.by(0,0,t.w)
throw A.c(A.aB("Specified element is not a transitive offset parent of this element.",null))}q=A.it(a.offsetParent,b)
s=a.offsetLeft
s.toString
s=B.c.Z(s)
p=a.offsetTop
p.toString
return new A.by(q.a+s,q.b+B.c.Z(p),t.w)},
l8(a){var s=new IntersectionObserver(A.bg(a,2))
s.toString
return s},
cD(a,b,c,d,e){var s=A.kf(new A.hA(c),t.A)
if(s!=null&&!0)J.kL(a,b,s,!1)
return new A.cC(a,b,s,!1,e.h("cC<0>"))},
kf(a,b){var s=$.A
if(s===B.d)return a
return s.d2(a,b)},
m:function m(){},
fk:function fk(){},
d7:function d7(){},
d9:function d9(){},
aU:function aU(){},
aV:function aV(){},
aW:function aW(){},
ah:function ah(){},
fr:function fr(){},
z:function z(){},
bS:function bS(){},
fs:function fs(){},
a7:function a7(){},
an:function an(){},
ft:function ft(){},
fu:function fu(){},
fv:function fv(){},
aX:function aX(){},
bn:function bn(){},
fw:function fw(){},
bV:function bV(){},
bW:function bW(){},
dl:function dl(){},
fx:function fx(){},
i:function i(){},
f:function f(){},
b:function b(){},
R:function R(){},
dn:function dn(){},
dp:function dp(){},
dq:function dq(){},
W:function W(){},
fH:function fH(){},
aZ:function aZ(){},
c0:function c0(){},
dv:function dv(){},
b_:function b_(){},
fJ:function fJ(){},
fO:function fO(){},
b6:function b6(){},
fT:function fT(){},
dE:function dE(){},
fU:function fU(a){this.a=a},
dF:function dF(){},
fV:function fV(a){this.a=a},
Z:function Z(){},
dG:function dG(){},
p:function p(){},
cg:function cg(){},
a_:function a_(){},
dT:function dT(){},
dX:function dX(){},
h8:function h8(a){this.a=a},
dZ:function dZ(){},
T:function T(){},
e0:function e0(){},
a1:function a1(){},
e1:function e1(){},
a2:function a2(){},
e3:function e3(){},
hf:function hf(a){this.a=a},
P:function P(){},
U:function U(){},
N:function N(){},
e6:function e6(){},
e7:function e7(){},
hk:function hk(){},
a3:function a3(){},
e9:function e9(){},
hl:function hl(){},
hq:function hq(){},
ef:function ef(){},
eg:function eg(){},
aJ:function aJ(){},
al:function al(){},
el:function el(){},
cA:function cA(){},
ex:function ex(){},
cK:function cK(){},
eQ:function eQ(){},
eW:function eW(){},
iu:function iu(a,b){this.a=a
this.$ti=b},
cB:function cB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
es:function es(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
cC:function cC(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
hA:function hA(a){this.a=a},
n:function n(){},
bZ:function bZ(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
em:function em(){},
eo:function eo(){},
ep:function ep(){},
eq:function eq(){},
er:function er(){},
eu:function eu(){},
ev:function ev(){},
ey:function ey(){},
ez:function ez(){},
eC:function eC(){},
eD:function eD(){},
eE:function eE(){},
eF:function eF(){},
eG:function eG(){},
eH:function eH(){},
eK:function eK(){},
eL:function eL(){},
eN:function eN(){},
cQ:function cQ(){},
cR:function cR(){},
eO:function eO(){},
eP:function eP(){},
eR:function eR(){},
eX:function eX(){},
eY:function eY(){},
cT:function cT(){},
cU:function cU(){},
f_:function f_(){},
f0:function f0(){},
f4:function f4(){},
f5:function f5(){},
f6:function f6(){},
f7:function f7(){},
f8:function f8(){},
f9:function f9(){},
fa:function fa(){},
fb:function fb(){},
fc:function fc(){},
fd:function fd(){},
k1(a){var s,r,q,p
if(a==null)return a
if(typeof a=="string"||typeof a=="number"||A.d0(a))return a
s=Object.getPrototypeOf(a)
r=s===Object.prototype
r.toString
if(!r){r=s===null
r.toString}else r=!0
if(r)return A.aO(a)
r=Array.isArray(a)
r.toString
if(r){q=[]
p=0
while(!0){r=a.length
r.toString
if(!(p<r))break
q.push(A.k1(a[p]));++p}return q}return a},
aO(a){var s,r,q,p,o,n
if(a==null)return null
s=A.lc(t.N,t.z)
r=Object.getOwnPropertyNames(a)
for(q=r.length,p=0;p<r.length;r.length===q||(0,A.aR)(r),++p){o=r[p]
n=o
n.toString
s.k(0,n,A.k1(a[o]))}return s},
k0(a){var s
if(a==null)return a
if(typeof a=="string"||typeof a=="number"||A.d0(a))return a
if(t.f.b(a))return A.kk(a)
if(t.j.b(a)){s=[]
J.io(a,new A.i_(s))
a=s}return a},
kk(a){var s={}
J.io(a,new A.i9(s))
return s},
i_:function i_(a){this.a=a},
i9:function i9(a){this.a=a},
c5:function c5(){},
m8(a,b,c,d){var s,r,q
A.iL(b)
t.j.a(d)
if(b){s=[c]
B.a.X(s,d)
d=s}r=t.z
q=A.Y(J.j4(d,A.n1(),r),r)
return A.iN(A.jd(t.Z.a(a),q))},
lb(a){return new A.fL(new A.cH(t.aR)).$1(a)},
ma(a){return a},
iO(a,b,c){var s
try{if(Object.isExtensible(a)&&!Object.prototype.hasOwnProperty.call(a,b)){Object.defineProperty(a,b,{value:c})
return!0}}catch(s){}return!1},
k7(a,b){if(Object.prototype.hasOwnProperty.call(a,b))return a[b]
return null},
iN(a){if(a==null||typeof a=="string"||typeof a=="number"||A.d0(a))return a
if(a instanceof A.ap)return a.a
if(A.ko(a))return a
if(t.Q.b(a))return a
if(a instanceof A.bT)return A.b7(a)
if(t.Z.b(a))return A.k6(a,"$dart_jsFunction",new A.i0())
return A.k6(a,"_$dart_jsObject",new A.i1($.j3()))},
k6(a,b,c){var s=A.k7(a,b)
if(s==null){s=c.$1(a)
A.iO(a,b,s)}return s},
k2(a){var s,r
if(a==null||typeof a=="string"||typeof a=="number"||typeof a=="boolean")return a
else if(a instanceof Object&&A.ko(a))return a
else if(a instanceof Object&&t.Q.b(a))return a
else if(a instanceof Date){s=A.a4(a.getTime())
if(Math.abs(s)<=864e13)r=!1
else r=!0
if(r)A.aA(A.aB("DateTime is outside valid range: "+s,null))
A.fg(!1,"isUtc",t.y)
return new A.bT(s,!1)}else if(a.constructor===$.j3())return a.o
else return A.iS(a)},
iS(a){if(typeof a=="function")return A.iP(a,$.fi(),new A.i5())
if(a instanceof Array)return A.iP(a,$.j2(),new A.i6())
return A.iP(a,$.j2(),new A.i7())},
iP(a,b,c){var s=A.k7(a,b)
if(s==null||!(a instanceof Object)){s=c.$1(a)
A.iO(a,b,s)}return s},
fL:function fL(a){this.a=a},
i0:function i0(){},
i1:function i1(a){this.a=a},
i5:function i5(){},
i6:function i6(){},
i7:function i7(){},
ap:function ap(a){this.a=a},
c4:function c4(a){this.a=a},
b0:function b0(a,b){this.a=a
this.$ti=b},
bH:function bH(){},
by:function by(a,b,c){this.a=a
this.b=b
this.$ti=c},
a9:function a9(){},
dB:function dB(){},
aa:function aa(){},
dQ:function dQ(){},
h0:function h0(){},
e4:function e4(){},
ad:function ad(){},
ea:function ea(){},
eA:function eA(){},
eB:function eB(){},
eI:function eI(){},
eJ:function eJ(){},
eT:function eT(){},
eU:function eU(){},
f1:function f1(){},
f2:function f2(){},
fm:function fm(){},
dc:function dc(){},
fn:function fn(a){this.a=a},
dd:function dd(){},
aC:function aC(){},
dR:function dR(){},
ek:function ek(){},
df:function df(){},
bm:function bm(){},
ds:function ds(){},
dU:function dU(){},
dW:function dW(){},
cl:function cl(){},
bA:function bA(){},
e_:function e_(){},
e8:function e8(){},
eb:function eb(){},
dt:function dt(a){var _=this
_.a=a
_.f=_.e=_.d=_.c=_.b=0
_.x=_.w=_.r=null},
fB:function fB(){},
fp:function fp(){},
he:function he(a,b,c,d,e,f,g,h,i){var _=this
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
jc(a){return new A.bl(A.iX(B.h.aw(a,1,3),16)/256,A.iX(B.h.aw(a,3,5),16)/256,A.iX(B.h.aw(a,5,7),16)/256,1)},
bl:function bl(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
b5(){return new A.bw(A.r([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t.n))},
jq(a,b){return new A.ab(a,b)},
jr(){return new A.ab(0,0)},
iD(a,b,c){return new A.aF(a,b,c)},
js(){return new A.aF(0,0,0)},
ju(a,b,c){var s,r,q=new A.h4(),p=a*0.5,o=b*0.5,n=c*0.5,m=Math.cos(p),l=Math.sin(p),k=Math.cos(o),j=Math.sin(o),i=Math.cos(n),h=Math.sin(n),g=i*j,f=h*k
q.a=g*m+f*l
s=i*k
r=h*j
q.b=s*l-r*m
q.c=f*m-g*l
q.d=s*m+r*l
return q},
bb(){return new A.ba(A.r([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t.n))},
jD(a){return new A.ba(A.r([a,0,0,0,0,a,0,0,0,0,a,0,0,0,0,1],t.n))},
jC(a){var s,r,q,p,o,n,m,l,k=a.a,j=k.length
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
return new A.ba(A.r([s,r,q,0,p,o,n,0,m,l,k[8],0,0,0,0,1],t.n))},
jG(a,b,c){return new A.bD(a,b,c)},
jH(){return new A.bD(0,0,0)},
fC:function fC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bv:function bv(a){this.a=a},
bw:function bw(a){this.a=a},
ab:function ab(a,b){this.a=a
this.b=b},
aF:function aF(a,b,c){this.a=a
this.b=b
this.c=c},
cj:function cj(a){this.b=a},
h4:function h4(){var _=this
_.d=_.c=_.b=_.a=0},
cq:function cq(a){this.a=a},
ba:function ba(a){this.a=a},
ct:function ct(a,b){this.a=a
this.b=b},
bD:function bD(a,b,c){this.a=a
this.b=b
this.c=c},
h_:function h_(){},
iq(){return new A.de(1,0)},
j6(){return new A.de(770,771)},
is(){return new A.fq(1)},
l_(){return new A.aE(1029)},
iw(a){return new A.fz(a)},
hs(a){return new A.hr(a)},
jn(a){return new A.fR(a)},
dD(a){return new A.fS(a)},
ha(a){return new A.h9(a)},
jI(){return new A.aI(A.r([new A.a6(0,3,12,0)],t.U))},
iG(){return new A.aI(A.r([new A.a6(0,2,8,0)],t.U))},
ly(){var s,r,q,p=$.iH
if(p==null)try{p=A.ir(null,null)
s=A.iB(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],t.N,t.z)
r=B.f.au(p,"webgl",s)
if(r==null)r=B.f.au(p,"experimental-webgl",s)
t.c4.a(r)
$.iH=!0
p=!0}catch(q){$.iH=!1
p=!1}p.toString
return p},
lx(a,b){var s,r,q,p,o,n,m=b.getSupportedExtensions()
if(m==null)return
s=A.r([],t.s)
for(r=a.f,q=r.length,p=J.ib(m),o=0;o<r.length;r.length===q||(0,A.aR)(r),++o){n=r[o]
if(!p.bH(m,n))B.a.n(s,n)}if(s.length!==0)throw A.c(A.dm("Invalid webgl extensions\n"+A.o(s)))},
a6:function a6(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
de:function de(a,b){this.a=a
this.b=b},
fq:function fq(a){this.f=a},
aE:function aE(a){this.a=a},
fI:function fI(a,b,c){this.a=a
this.b=b
this.c=c},
hu:function hu(a){this.b=a},
fo:function fo(){},
fy:function fy(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
bU:function bU(){},
dr:function dr(){},
bj:function bj(){var _=this
_.b=_.a=0
_.f=_.e=_.d=_.c=null},
dC:function dC(){},
bz:function bz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null},
b8:function b8(a,b){var _=this
_.a=a
_.b=b
_.f=_.e=_.d=_.c=null},
hj:function hj(){this.f=this.e=this.d=null},
hp:function hp(){},
fz:function fz(a){this.a=a
this.c=this.b=null},
hr:function hr(a){this.a=a
this.c=this.b=null},
fR:function fR(a){this.a=a
this.c=this.b=null},
fS:function fS(a){this.a=a
this.c=this.b=null},
h9:function h9(a){this.a=a
this.c=this.b=null},
aI:function aI(a){this.a=a},
h7:function h7(a,b,c){this.b=a
this.c=b
this.f=c},
hv:function hv(){this.a=null},
fW:function fW(a,b,c,d,e,f){var _=this
_.c=a
_.d=b
_.e=c
_.f=d
_.r=e
_.a=f},
eZ:function eZ(){},
hi:function hi(a,b,c){this.f=a
this.c=b
this.a=c},
ht:function ht(a,b,c,d,e){var _=this
_.c=a
_.d=b
_.e=c
_.f=d
_.a=e},
eh:function eh(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=!1
_.f=null},
d8:function d8(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
aT:function aT(){},
bo:function bo(){},
fD:function fD(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=0},
jg(){return new A.du(A.Y(A.r([new A.a6(0,3,20,0),new A.a6(1,2,20,12)],t.U),t.J))},
fE(a,b,c,d){var s,r=new A.ab(0.5*(c.a+d.a),0.5*(c.b+d.b))
if(a>0){s=a-1
A.fE(s,r,b,c)
A.fE(s,r,d,b)
return}s=r.O(0,b)
s=new A.ct(s.a,s.b)
s.W()
A.ix(b,s)
s=r.O(0,c)
s=new A.ct(s.a,s.b)
s.W()
A.ix(c,s)
s=r.O(0,d)
s=new A.ct(s.a,s.b)
s.W()
A.ix(d,s)},
ix(a,b){var s,r,q,p,o,n,m,l,k=$.ku(),j=a.a,i=$.jf,h=j*i,g=a.b
i=g*i
s=B.c.bK(h)
r=s+1
q=B.c.bK(i)
p=q+1
o=h-s
n=k.aj(s,q,h,i)
m=n+(k.aj(r,q,h,i)-n)*o
n=k.aj(s,p,h,i)
l=Math.max((m+(n+(k.aj(r,p,h,i)-n)*o-m)*(i-q))*$.je,0)
B.a.n($.iy,$.fF)
i=t.n
B.a.X($.fG,A.r([j,l,g],i))
g=b.a
g===$&&A.x()
j=b.b
j===$&&A.x()
B.a.X($.fG,A.r([g,j],i))
$.fF=$.fF+1},
du:function du(a){this.a=a},
c_:function c_(){},
c8:function c8(){},
fX:function fX(a,b,c,d,e){var _=this
_.c=a
_.d=b
_.e=c
_.f=d
_.a=e},
h3:function h3(a,b){this.a=a
this.b=b
this.c=0},
h5:function h5(a,b,c){this.a=a
this.b=b
this.c=c},
h6:function h6(a,b,c,d){var _=this
_.c=a
_.d=b
_.e=c
_.a=d},
hb:function hb(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0){var _=this
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
hd:function hd(a,b,c,d,e,f,g,h,i,j){var _=this
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
cm:function cm(){},
ko(a){return t.e.b(a)||t.A.b(a)||t.cF.b(a)||t.cW.b(a)||t.a1.b(a)||t.cg.b(a)||t.bj.b(a)},
n7(a){A.kr(new A.c6("Field '"+a+"' has been assigned during initialization."),new Error())},
x(){A.kr(new A.c6("Field '' has not been initialized."),new Error())},
mb(a){var s,r=a.$dart_jsFunction
if(r!=null)return r
s=function(b,c){return function(){return b(c,Array.prototype.slice.apply(arguments))}}(A.m9,a)
s[$.fi()]=a
a.$dart_jsFunction=s
return s},
m9(a,b){t.j.a(b)
return A.jd(t.Z.a(a),b)},
iT(a,b){if(typeof a=="function")return a
else return b.a(A.mb(a))},
n3(){var s,r,q,p="webglcontextlost",o=$.kH(),n=$.kG(),m=t.Z
o.k(0,"OnScreenOrientation",A.iT(n.gc9(),m))
o.k(0,"OnReport",A.iT(n.gc7(),m))
o.k(0,"Kill",A.iT(n.gc6(),m))
m=n.b
if(!A.ly())A.aA(A.dm("WebGL is not available"))
o=m.a
s=o.style
s.position="absolute"
s.width="100%"
s.height="100%"
s.top="0"
s.left="0"
s=A.l8(m.gcm())
m.f=s
s.observe(o)
s=n.c
r=window
r.toString
s.x=B.j.bP(r,s.gbi())
r=t.d8
s.sbz(r.a(n.gcs()))
s.sbA(r.a(n.gcu()))
r=n.a
r.children.toString
r.appendChild(o).toString
r=n.d
s=window
s.toString
B.a.n(r,A.cD(s,"beforeunload",t.bF.a(n.gcf()),!1,t.d))
s=window
s.toString
B.a.n(r,A.cD(s,"resize",t.cx.a(n.gcq()),!1,t.A))
s=window
s.toString
B.a.n(r,A.cD(s,"deviceorientation",t.cu.a(n.gci()),!1,t.bK))
s=t.cI
q=s.h("~(1)?")
s=s.c
B.a.n(r,A.cD(o,p,q.a(n.gcw()),!1,s))
B.a.n(r,A.cD(o,p,q.a(n.gcA()),!1,s))
s=m.c
B.a.n(r,new A.aK(s,A.C(s).h("aK<1>")).bN(n.gck()))
m=m.d
B.a.n(r,new A.aK(m,A.C(m).h("aK<1>")).bN(n.gco()))
n.ai()
n.a5(new A.c8())}},B={}
var w=[A,J,B]
var $={}
A.iz.prototype={}
J.bq.prototype={
J(a,b){return a===b},
gp(a){return A.ci(a)},
j(a){return"Instance of '"+A.h2(a)+"'"},
bO(a,b){throw A.c(A.jo(a,t.B.a(b)))},
gD(a){return A.bh(A.iQ(this))}}
J.dx.prototype={
j(a){return String(a)},
gp(a){return a?519018:218159},
gD(a){return A.bh(t.y)},
$iy:1,
$ii8:1}
J.c2.prototype={
J(a,b){return null==b},
j(a){return"null"},
gp(a){return 0},
$iy:1,
$iK:1}
J.a.prototype={}
J.b1.prototype={
gp(a){return 0},
j(a){return String(a)}}
J.dS.prototype={}
J.cr.prototype={}
J.ao.prototype={
j(a){var s=a[$.fi()]
if(s==null)return this.c_(a)
return"JavaScript function for "+J.d6(s)},
$iaY:1}
J.bs.prototype={
gp(a){return 0},
j(a){return String(a)}}
J.bt.prototype={
gp(a){return 0},
j(a){return String(a)}}
J.H.prototype={
n(a,b){A.av(a).c.a(b)
if(!!a.fixed$length)A.aA(A.bc("add"))
a.push(b)},
X(a,b){var s
A.av(a).h("h<1>").a(b)
if(!!a.fixed$length)A.aA(A.bc("addAll"))
if(Array.isArray(b)){this.cD(a,b)
return}for(s=J.bM(b);s.A();)a.push(s.gB(s))},
cD(a,b){var s,r
t.b.a(b)
s=b.length
if(s===0)return
if(a===b)throw A.c(A.ai(a))
for(r=0;r<s;++r)a.push(b[r])},
aW(a){if(!!a.fixed$length)A.aA(A.bc("clear"))
a.length=0},
v(a,b){var s,r
A.av(a).h("~(1)").a(b)
s=a.length
for(r=0;r<s;++r){b.$1(a[r])
if(a.length!==s)throw A.c(A.ai(a))}},
ap(a,b,c){var s=A.av(a)
return new A.ar(a,s.q(c).h("1(2)").a(b),s.h("@<1>").q(c).h("ar<1,2>"))},
d8(a,b,c,d){var s,r,q
d.a(b)
A.av(a).q(d).h("1(1,2)").a(c)
s=a.length
for(r=b,q=0;q<s;++q){r=c.$2(r,a[q])
if(a.length!==s)throw A.c(A.ai(a))}return r},
t(a,b){if(!(b<a.length))return A.d(a,b)
return a[b]},
gu(a){if(a.length>0)return a[0]
throw A.c(A.ji())},
bH(a,b){var s
for(s=0;s<a.length;++s)if(J.im(a[s],b))return!0
return!1},
j(a){return A.jj(a,"[","]")},
gK(a){return new J.bN(a,a.length,A.av(a).h("bN<1>"))},
gp(a){return A.ci(a)},
gi(a){return a.length},
k(a,b,c){var s
A.av(a).c.a(c)
if(!!a.immutable$list)A.aA(A.bc("indexed set"))
s=a.length
if(b>=s)throw A.c(A.iV(a,b))
a[b]=c},
af(a,b){var s=A.av(a)
s.h("l<1>").a(b)
s=A.fN(a,s.c)
this.X(s,b)
return s},
$ik:1,
$ih:1,
$il:1}
J.fK.prototype={}
J.bN.prototype={
gB(a){var s=this.d
return s==null?this.$ti.c.a(s):s},
A(){var s,r=this,q=r.a,p=q.length
if(r.b!==p){q=A.aR(q)
throw A.c(q)}s=r.c
if(s>=p){r.sbq(null)
return!1}r.sbq(q[s]);++r.c
return!0},
sbq(a){this.d=this.$ti.h("1?").a(a)},
$iX:1}
J.c3.prototype={
aX(a,b){var s
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=B.e.gaZ(b)
if(this.gaZ(a)===s)return 0
if(this.gaZ(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gaZ(a){return a===0?1/a<0:a<0},
bK(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw A.c(A.bc(""+a+".floor()"))},
Z(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.c(A.bc(""+a+".round()"))},
d3(a,b,c){if(B.e.aX(b,c)>0)throw A.c(A.kh(b))
if(this.aX(a,b)<0)return b
if(this.aX(a,c)>0)return c
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
b3(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
aT(a,b){var s
if(a>0)s=this.cY(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
cY(a,b){return b>31?0:a>>>b},
gD(a){return A.bh(t.H)},
$iu:1,
$iD:1}
J.c1.prototype={
gD(a){return A.bh(t.S)},
$iy:1,
$ij:1}
J.dz.prototype={
gD(a){return A.bh(t.i)},
$iy:1}
J.br.prototype={
af(a,b){return a+b},
aw(a,b,c){return a.substring(b,A.lr(b,c,a.length))},
j(a){return a},
gp(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gD(a){return A.bh(t.N)},
gi(a){return a.length},
$iy:1,
$iq:1}
A.c6.prototype={
j(a){return"LateInitializationError: "+this.a}}
A.ij.prototype={
$0(){var s=new A.F($.A,t.D)
s.aG(null)
return s},
$S:9}
A.hc.prototype={}
A.k.prototype={}
A.aq.prototype={
gK(a){var s=this
return new A.b3(s,s.gi(s),s.$ti.h("b3<aq.E>"))},
ap(a,b,c){var s=this.$ti
return new A.ar(this,s.q(c).h("1(aq.E)").a(b),s.h("@<aq.E>").q(c).h("ar<1,2>"))}}
A.b3.prototype={
gB(a){var s=this.d
return s==null?this.$ti.c.a(s):s},
A(){var s,r=this,q=r.a,p=J.ib(q),o=p.gi(q)
if(r.b!==o)throw A.c(A.ai(q))
s=r.c
if(s>=o){r.saa(null)
return!1}r.saa(p.t(q,s));++r.c
return!0},
saa(a){this.d=this.$ti.h("1?").a(a)},
$iX:1}
A.b4.prototype={
gK(a){var s=this.a,r=A.C(this)
return new A.c9(s.gK(s),this.b,r.h("@<1>").q(r.z[1]).h("c9<1,2>"))},
gi(a){var s=this.a
return s.gi(s)}}
A.bX.prototype={$ik:1}
A.c9.prototype={
A(){var s=this,r=s.b
if(r.A()){s.saa(s.c.$1(r.gB(r)))
return!0}s.saa(null)
return!1},
gB(a){var s=this.a
return s==null?this.$ti.z[1].a(s):s},
saa(a){this.a=this.$ti.h("2?").a(a)},
$iX:1}
A.ar.prototype={
gi(a){return J.fj(this.a)},
t(a,b){return this.b.$1(J.kM(this.a,b))}}
A.M.prototype={}
A.bB.prototype={
gp(a){var s=this._hashCode
if(s!=null)return s
s=664597*B.h.gp(this.a)&536870911
this._hashCode=s
return s},
j(a){return'Symbol("'+this.a+'")'},
J(a,b){if(b==null)return!1
return b instanceof A.bB&&this.a===b.a},
$ibC:1}
A.bQ.prototype={}
A.bP.prototype={
j(a){return A.fP(this)},
$iJ:1}
A.bR.prototype={
gi(a){return this.b.length},
gbw(){var s=this.$keys
if(s==null){s=Object.keys(this.a)
this.$keys=s}return s},
ae(a,b){if(typeof b!="string")return!1
if("__proto__"===b)return!1
return this.a.hasOwnProperty(b)},
l(a,b){if(!this.ae(0,b))return null
return this.b[this.a[b]]},
v(a,b){var s,r,q,p
this.$ti.h("~(1,2)").a(b)
s=this.gbw()
r=this.b
for(q=s.length,p=0;p<q;++p)b.$2(s[p],r[p])},
gL(a){return new A.cI(this.gbw(),this.$ti.h("cI<1>"))}}
A.cI.prototype={
gi(a){return this.a.length},
gK(a){var s=this.a
return new A.cJ(s,s.length,this.$ti.h("cJ<1>"))}}
A.cJ.prototype={
gB(a){var s=this.d
return s==null?this.$ti.c.a(s):s},
A(){var s=this,r=s.c
if(r>=s.b){s.sab(null)
return!1}s.sab(s.a[r]);++s.c
return!0},
sab(a){this.d=this.$ti.h("1?").a(a)},
$iX:1}
A.dy.prototype={
gdi(){var s=this.a
return s},
gdk(){var s,r,q,p,o=this
if(o.c===1)return B.n
s=o.d
r=s.length-o.e.length-o.f
if(r===0)return B.n
q=[]
for(p=0;p<r;++p){if(!(p<s.length))return A.d(s,p)
q.push(s[p])}q.fixed$length=Array
q.immutable$list=Array
return q},
gdj(){var s,r,q,p,o,n,m,l,k=this
if(k.c!==0)return B.o
s=k.e
r=s.length
q=k.d
p=q.length-r-k.f
if(r===0)return B.o
o=new A.S(t.bV)
for(n=0;n<r;++n){if(!(n<s.length))return A.d(s,n)
m=s[n]
l=p+n
if(!(l>=0&&l<q.length))return A.d(q,l)
o.k(0,new A.bB(m),q[l])}return new A.bQ(o,t.cf)},
$ijh:1}
A.h1.prototype={
$2(a,b){var s
A.a5(a)
s=this.a
s.b=s.b+"$"+a
B.a.n(this.b,a)
B.a.n(this.c,b);++s.a},
$S:2}
A.hm.prototype={
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
A.ch.prototype={
j(a){return"Null check operator used on a null value"}}
A.dA.prototype={
j(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.ed.prototype={
j(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.fZ.prototype={
j(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.bY.prototype={}
A.cS.prototype={
j(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$iac:1}
A.aD.prototype={
j(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.ks(r==null?"unknown":r)+"'"},
$iaY:1,
gdq(){return this},
$C:"$1",
$R:1,
$D:null}
A.dh.prototype={$C:"$0",$R:0}
A.di.prototype={$C:"$2",$R:2}
A.e5.prototype={}
A.e2.prototype={
j(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.ks(s)+"'"}}
A.bk.prototype={
J(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.bk))return!1
return this.$_target===b.$_target&&this.a===b.a},
gp(a){return(A.ik(this.a)^A.ci(this.$_target))>>>0},
j(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.h2(this.a)+"'")}}
A.en.prototype={
j(a){return"Reading static variable '"+this.a+"' during its initialization"}}
A.dY.prototype={
j(a){return"RuntimeError: "+this.a}}
A.hQ.prototype={}
A.S.prototype={
gi(a){return this.a},
gL(a){return new A.b2(this,A.C(this).h("b2<1>"))},
ae(a,b){var s=this.b
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
return q}else return this.de(b)},
de(a){var s,r,q=this.d
if(q==null)return null
s=q[this.bL(a)]
r=this.bM(s,a)
if(r<0)return null
return s[r].b},
k(a,b,c){var s,r,q,p,o,n,m=this,l=A.C(m)
l.c.a(b)
l.z[1].a(c)
if(typeof b=="string"){s=m.b
m.bk(s==null?m.b=m.aL():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=m.c
m.bk(r==null?m.c=m.aL():r,b,c)}else{q=m.d
if(q==null)q=m.d=m.aL()
p=m.bL(b)
o=q[p]
if(o==null)q[p]=[m.aM(b,c)]
else{n=m.bM(o,b)
if(n>=0)o[n].b=c
else o.push(m.aM(b,c))}}},
v(a,b){var s,r,q=this
A.C(q).h("~(1,2)").a(b)
s=q.e
r=q.r
for(;s!=null;){b.$2(s.a,s.b)
if(r!==q.r)throw A.c(A.ai(q))
s=s.c}},
bk(a,b,c){var s,r=A.C(this)
r.c.a(b)
r.z[1].a(c)
s=a[b]
if(s==null)a[b]=this.aM(b,c)
else s.b=c},
aM(a,b){var s=this,r=A.C(s),q=new A.fM(r.c.a(a),r.z[1].a(b))
if(s.e==null)s.e=s.f=q
else s.f=s.f.c=q;++s.a
s.r=s.r+1&1073741823
return q},
bL(a){return J.ip(a)&1073741823},
bM(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.im(a[r].a,b))return r
return-1},
j(a){return A.fP(this)},
aL(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
$ijm:1}
A.fM.prototype={}
A.b2.prototype={
gi(a){return this.a.a},
gK(a){var s=this.a,r=new A.c7(s,s.r,this.$ti.h("c7<1>"))
r.c=s.e
return r}}
A.c7.prototype={
gB(a){return this.d},
A(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.c(A.ai(q))
s=r.c
if(s==null){r.sab(null)
return!1}else{r.sab(s.a)
r.c=s.c
return!0}},
sab(a){this.d=this.$ti.h("1?").a(a)},
$iX:1}
A.id.prototype={
$1(a){return this.a(a)},
$S:3}
A.ie.prototype={
$2(a,b){return this.a(a,b)},
$S:10}
A.ig.prototype={
$1(a){return this.a(A.a5(a))},
$S:11}
A.dH.prototype={
gD(a){return B.F},
$iy:1}
A.cd.prototype={$iE:1}
A.dI.prototype={
gD(a){return B.G},
$iy:1}
A.bx.prototype={
gi(a){return a.length},
$it:1}
A.cb.prototype={
l(a,b){A.be(b,a,a.length)
return a[b]},
$ik:1,
$ih:1,
$il:1}
A.cc.prototype={$ik:1,$ih:1,$il:1}
A.ca.prototype={
gD(a){return B.H},
$iy:1,
$iiv:1}
A.dJ.prototype={
gD(a){return B.I},
$iy:1}
A.dK.prototype={
gD(a){return B.J},
l(a,b){A.be(b,a,a.length)
return a[b]},
$iy:1}
A.dL.prototype={
gD(a){return B.K},
l(a,b){A.be(b,a,a.length)
return a[b]},
$iy:1}
A.dM.prototype={
gD(a){return B.L},
l(a,b){A.be(b,a,a.length)
return a[b]},
$iy:1}
A.ce.prototype={
gD(a){return B.N},
l(a,b){A.be(b,a,a.length)
return a[b]},
$iy:1,
$iiF:1}
A.dN.prototype={
gD(a){return B.O},
l(a,b){A.be(b,a,a.length)
return a[b]},
$iy:1}
A.cf.prototype={
gD(a){return B.P},
gi(a){return a.length},
l(a,b){A.be(b,a,a.length)
return a[b]},
$iy:1}
A.dO.prototype={
gD(a){return B.Q},
gi(a){return a.length},
l(a,b){A.be(b,a,a.length)
return a[b]},
$iy:1,
$iho:1}
A.cL.prototype={}
A.cM.prototype={}
A.cN.prototype={}
A.cO.prototype={}
A.a0.prototype={
h(a){return A.hW(v.typeUniverse,this,a)},
q(a){return A.lY(v.typeUniverse,this,a)}}
A.ew.prototype={}
A.hV.prototype={
j(a){return A.Q(this.a,null)}}
A.et.prototype={
j(a){return this.a}}
A.cV.prototype={$ias:1}
A.hx.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:5}
A.hw.prototype={
$1(a){var s,r
this.a.a=t.M.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:12}
A.hy.prototype={
$0(){this.a.$0()},
$S:6}
A.hz.prototype={
$0(){this.a.$0()},
$S:6}
A.hT.prototype={
cC(a,b){if(self.setTimeout!=null)self.setTimeout(A.bg(new A.hU(this,b),0),a)
else throw A.c(A.bc("`setTimeout()` not found."))}}
A.hU.prototype={
$0(){this.b.$0()},
$S:0}
A.ei.prototype={}
A.hY.prototype={
$1(a){return this.a.$2(0,a)},
$S:1}
A.hZ.prototype={
$2(a,b){this.a.$2(1,new A.bY(a,t.l.a(b)))},
$S:13}
A.i4.prototype={
$2(a,b){this.a(A.a4(a),b)},
$S:14}
A.bO.prototype={
j(a){return A.o(this.a)},
$iB:1,
gav(){return this.b}}
A.aK.prototype={}
A.ae.prototype={
aO(){},
aP(){},
sac(a){this.ch=this.$ti.h("ae<1>?").a(a)},
sal(a){this.CW=this.$ti.h("ae<1>?").a(a)}}
A.cv.prototype={
gcP(){return this.c<4},
cV(a){var s,r
A.C(this).h("ae<1>").a(a)
s=a.CW
r=a.ch
if(s==null)this.sbs(r)
else s.sac(r)
if(r==null)this.sbx(s)
else r.sal(s)
a.sal(a)
a.sac(a)},
cZ(a,b,c,d){var s,r,q,p,o,n=this,m=A.C(n)
m.h("~(1)?").a(a)
t.Y.a(c)
if((n.c&4)!==0){m=new A.bF($.A,m.h("bF<1>"))
A.j_(m.gcR())
if(c!=null)m.saN(t.M.a(c))
return m}s=$.A
r=d?1:0
t.h.q(m.c).h("1(2)").a(a)
A.lD(s,b)
q=c==null?A.mM():c
t.M.a(q)
m=m.h("ae<1>")
p=new A.ae(n,a,s,r,m)
p.sal(p)
p.sac(p)
m.a(p)
p.ay=n.c&1
o=n.e
n.sbx(p)
p.sac(null)
p.sal(o)
if(o==null)n.sbs(p)
else o.sac(p)
if(n.d==n.e)A.kd(n.a)
return p},
cT(a){var s=this,r=A.C(s)
a=r.h("ae<1>").a(r.h("ak<1>").a(a))
if(a.ch===a)return null
r=a.ay
if((r&2)!==0)a.ay=r|4
else{s.cV(a)
if((s.c&2)===0&&s.d==null)s.cJ()}return null},
cE(){if((this.c&4)!==0)return new A.b9("Cannot add new events after calling close")
return new A.b9("Cannot add new events while doing an addStream")},
n(a,b){var s=this
A.C(s).c.a(b)
if(!s.gcP())throw A.c(s.cE())
s.aS(b)},
cJ(){if((this.c&4)!==0)if(null.gdr())null.aG(null)
A.kd(this.b)},
sbs(a){this.d=A.C(this).h("ae<1>?").a(a)},
sbx(a){this.e=A.C(this).h("ae<1>?").a(a)},
$ijy:1,
$ijT:1,
$iaL:1}
A.cu.prototype={
aS(a){var s,r=this.$ti
r.c.a(a)
for(s=this.d,r=r.h("cy<1>");s!=null;s=s.ch)s.cG(new A.cy(a,r))}}
A.bd.prototype={
dh(a){if((this.c&15)!==6)return!0
return this.b.b.b1(t.m.a(this.d),a.a,t.y,t.K)},
dd(a){var s,r=this,q=r.e,p=null,o=t.z,n=t.K,m=a.a,l=r.b.b
if(t.C.b(q))p=l.dl(q,m,a.b,o,n,t.l)
else p=l.b1(t.v.a(q),m,o,n)
try{o=r.$ti.h("2/").a(p)
return o}catch(s){if(t.b7.b(A.aS(s))){if((r.c&1)!==0)throw A.c(A.aB("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.c(A.aB("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.F.prototype={
bB(a){this.a=this.a&1|4
this.c=a},
b2(a,b,c){var s,r,q,p=this.$ti
p.q(c).h("1/(2)").a(a)
s=$.A
if(s===B.d){if(b!=null&&!t.C.b(b)&&!t.v.b(b))throw A.c(A.j5(b,"onError",u.c))}else{c.h("@<0/>").q(p.c).h("1(2)").a(a)
if(b!=null)b=A.mz(b,s)}r=new A.F(s,c.h("F<0>"))
q=b==null?1:3
this.aF(new A.bd(r,q,a,b,p.h("@<1>").q(c).h("bd<1,2>")))
return r},
dn(a,b){return this.b2(a,null,b)},
bC(a,b,c){var s,r=this.$ti
r.q(c).h("1/(2)").a(a)
s=new A.F($.A,c.h("F<0>"))
this.aF(new A.bd(s,19,a,b,r.h("@<1>").q(c).h("bd<1,2>")))
return s},
cX(a){this.a=this.a&1|16
this.c=a},
ak(a){this.a=a.a&30|this.a&1
this.c=a.c},
aF(a){var s,r=this,q=r.a
if(q<=3){a.a=t.F.a(r.c)
r.c=a}else{if((q&4)!==0){s=t.c.a(r.c)
if((s.a&24)===0){s.aF(a)
return}r.ak(s)}A.bf(null,null,r.b,t.M.a(new A.hC(r,a)))}},
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
return}m.ak(n)}l.a=m.an(a)
A.bf(null,null,m.b,t.M.a(new A.hJ(l,m)))}},
am(){var s=t.F.a(this.c)
this.c=null
return this.an(s)},
an(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
cK(a){var s,r,q,p=this
p.a^=2
try{a.b2(new A.hG(p),new A.hH(p),t.P)}catch(q){s=A.aS(q)
r=A.aP(q)
A.j_(new A.hI(p,s,r))}},
aH(a){var s,r=this
r.$ti.c.a(a)
s=r.am()
r.a=8
r.c=a
A.bG(r,s)},
a_(a,b){var s
t.K.a(a)
t.l.a(b)
s=this.am()
this.cX(A.fl(a,b))
A.bG(this,s)},
aG(a){var s=this.$ti
s.h("1/").a(a)
if(s.h("a8<1>").b(a)){this.bl(a)
return}this.cI(a)},
cI(a){var s=this
s.$ti.c.a(a)
s.a^=2
A.bf(null,null,s.b,t.M.a(new A.hE(s,a)))},
bl(a){var s=this.$ti
s.h("a8<1>").a(a)
if(s.b(a)){A.lF(a,this)
return}this.cK(a)},
cH(a,b){this.a^=2
A.bf(null,null,this.b,t.M.a(new A.hD(this,a,b)))},
$ia8:1}
A.hC.prototype={
$0(){A.bG(this.a,this.b)},
$S:0}
A.hJ.prototype={
$0(){A.bG(this.b,this.a.a)},
$S:0}
A.hG.prototype={
$1(a){var s,r,q,p=this.a
p.a^=2
try{p.aH(p.$ti.c.a(a))}catch(q){s=A.aS(q)
r=A.aP(q)
p.a_(s,r)}},
$S:5}
A.hH.prototype={
$2(a,b){this.a.a_(t.K.a(a),t.l.a(b))},
$S:15}
A.hI.prototype={
$0(){this.a.a_(this.b,this.c)},
$S:0}
A.hF.prototype={
$0(){A.jL(this.a.a,this.b)},
$S:0}
A.hE.prototype={
$0(){this.a.aH(this.b)},
$S:0}
A.hD.prototype={
$0(){this.a.a_(this.b,this.c)},
$S:0}
A.hM.prototype={
$0(){var s,r,q,p,o,n,m=this,l=null
try{q=m.a.a
l=q.b.b.bQ(t.O.a(q.d),t.z)}catch(p){s=A.aS(p)
r=A.aP(p)
q=m.c&&t.t.a(m.b.a.c).a===s
o=m.a
if(q)o.c=t.t.a(m.b.a.c)
else o.c=A.fl(s,r)
o.b=!0
return}if(l instanceof A.F&&(l.a&24)!==0){if((l.a&16)!==0){q=m.a
q.c=t.t.a(l.c)
q.b=!0}return}if(l instanceof A.F){n=m.b.a
q=m.a
q.c=l.dn(new A.hN(n),t.z)
q.b=!1}},
$S:0}
A.hN.prototype={
$1(a){return this.a},
$S:16}
A.hL.prototype={
$0(){var s,r,q,p,o,n,m,l
try{q=this.a
p=q.a
o=p.$ti
n=o.c
m=n.a(this.b)
q.c=p.b.b.b1(o.h("2/(1)").a(p.d),m,o.h("2/"),n)}catch(l){s=A.aS(l)
r=A.aP(l)
q=this.a
q.c=A.fl(s,r)
q.b=!0}},
$S:0}
A.hK.prototype={
$0(){var s,r,q,p,o,n,m=this
try{s=t.t.a(m.a.a.c)
p=m.b
if(p.a.dh(s)&&p.a.e!=null){p.c=p.a.dd(s)
p.b=!1}}catch(o){r=A.aS(o)
q=A.aP(o)
p=t.t.a(m.a.a.c)
n=m.b
if(p.a===r)n.c=p
else n.c=A.fl(r,q)
n.b=!0}},
$S:0}
A.ej.prototype={}
A.aH.prototype={
gi(a){var s={},r=new A.F($.A,t.aQ)
s.a=0
this.b_(new A.hg(s,this),!0,new A.hh(s,r),r.gcM())
return r}}
A.hg.prototype={
$1(a){A.C(this.b).c.a(a);++this.a.a},
$S(){return A.C(this.b).h("~(1)")}}
A.hh.prototype={
$0(){var s=this.b,r=s.$ti,q=r.h("1/").a(this.a.a),p=s.am()
r.c.a(q)
s.a=8
s.c=q
A.bG(s,p)},
$S:0}
A.cw.prototype={
gp(a){return(A.ci(this.a)^892482866)>>>0},
J(a,b){if(b==null)return!1
if(this===b)return!0
return b instanceof A.aK&&b.a===this.a}}
A.cx.prototype={
by(){return this.w.cT(this)},
aO(){A.C(this.w).h("ak<1>").a(this)},
aP(){A.C(this.w).h("ak<1>").a(this)}}
A.bE.prototype={
aU(a){var s,r=this,q=r.e&=4294967279
if((q&8)===0){q=r.e=q|8
if((q&64)!==0){s=r.r
if(s.a===1)s.a=3}if((q&32)===0)r.saQ(null)
r.f=r.by()}q=$.j0()
return q},
aO(){},
aP(){},
by(){return null},
cG(a){var s,r,q=this,p=q.r
if(p==null){p=new A.cP(A.C(q).h("cP<1>"))
q.saQ(p)}s=p.c
if(s==null)p.b=p.c=a
else p.c=s.a=a
r=q.e
if((r&64)===0){r|=64
q.e=r
if(r<128)p.b4(q)}},
aS(a){var s,r=this,q=A.C(r).c
q.a(a)
s=r.e
r.e=s|32
r.d.bS(r.a,a,q)
r.e&=4294967263
r.cL((s&4)!==0)},
cL(a){var s,r,q=this,p=q.e
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
p=q.e&=4294967263}if((p&64)!==0&&p<128)q.r.b4(q)},
saQ(a){this.r=A.C(this).h("cP<1>?").a(a)},
$iak:1,
$iaL:1}
A.bI.prototype={
b_(a,b,c,d){var s=this.$ti
s.h("~(1)?").a(a)
t.Y.a(c)
return this.a.cZ(s.h("~(1)?").a(a),d,c,b===!0)},
bN(a){return this.b_(a,null,null,null)}}
A.cz.prototype={}
A.cy.prototype={}
A.cP.prototype={
b4(a){var s,r=this
r.$ti.h("aL<1>").a(a)
s=r.a
if(s===1)return
if(s>=1){r.a=1
return}A.j_(new A.hP(r,a))
r.a=1}}
A.hP.prototype={
$0(){var s,r,q,p=this.a,o=p.a
p.a=0
if(o===3)return
s=p.$ti.h("aL<1>").a(this.b)
r=p.b
q=r.a
p.b=q
if(q==null)p.c=null
A.C(r).h("aL<1>").a(s).aS(r.b)},
$S:0}
A.bF.prototype={
aU(a){this.a=-1
this.saN(null)
return $.j0()},
cS(){var s,r,q,p=this,o=p.a-1
if(o===0){p.a=-1
s=p.c
if(s!=null){r=s
q=!0}else{r=null
q=!1}if(q){p.saN(null)
p.b.bR(r)}}else p.a=o},
saN(a){this.c=t.Y.a(a)},
$iak:1}
A.eS.prototype={}
A.d_.prototype={$ijJ:1}
A.i3.prototype={
$0(){A.l3(this.a,this.b)},
$S:0}
A.eM.prototype={
bR(a){var s,r,q
t.M.a(a)
try{if(B.d===$.A){a.$0()
return}A.ka(null,null,this,a,t.p)}catch(q){s=A.aS(q)
r=A.aP(q)
A.ff(t.K.a(s),t.l.a(r))}},
bS(a,b,c){var s,r,q
c.h("~(0)").a(a)
c.a(b)
try{if(B.d===$.A){a.$1(b)
return}A.kb(null,null,this,a,b,t.p,c)}catch(q){s=A.aS(q)
r=A.aP(q)
A.ff(t.K.a(s),t.l.a(r))}},
bE(a){return new A.hR(this,t.M.a(a))},
d2(a,b){return new A.hS(this,b.h("~(0)").a(a),b)},
bQ(a,b){b.h("0()").a(a)
if($.A===B.d)return a.$0()
return A.ka(null,null,this,a,b)},
b1(a,b,c,d){c.h("@<0>").q(d).h("1(2)").a(a)
d.a(b)
if($.A===B.d)return a.$1(b)
return A.kb(null,null,this,a,b,c,d)},
dl(a,b,c,d,e,f){d.h("@<0>").q(e).q(f).h("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.A===B.d)return a.$2(b,c)
return A.mA(null,null,this,a,b,c,d,e,f)},
b0(a,b,c,d){return b.h("@<0>").q(c).q(d).h("1(2,3)").a(a)}}
A.hR.prototype={
$0(){return this.a.bR(this.b)},
$S:0}
A.hS.prototype={
$1(a){var s=this.c
return this.a.bS(this.b,s.a(a),s)},
$S(){return this.c.h("~(0)")}}
A.cE.prototype={
gi(a){return this.a},
gL(a){return new A.cF(this,this.$ti.h("cF<1>"))},
ae(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
return s==null?!1:s[b]!=null}else if(typeof b=="number"&&(b&1073741823)===b){r=this.c
return r==null?!1:r[b]!=null}else return this.cN(b)},
cN(a){var s=this.d
if(s==null)return!1
return this.aK(this.bt(s,a),a)>=0},
l(a,b){var s,r,q
if(typeof b=="string"&&b!=="__proto__"){s=this.b
r=s==null?null:A.jM(s,b)
return r}else if(typeof b=="number"&&(b&1073741823)===b){q=this.c
r=q==null?null:A.jM(q,b)
return r}else return this.cO(0,b)},
cO(a,b){var s,r,q=this.d
if(q==null)return null
s=this.bt(q,b)
r=this.aK(s,b)
return r<0?null:s[r+1]},
k(a,b,c){var s,r,q,p,o=this,n=o.$ti
n.c.a(b)
n.z[1].a(c)
s=o.d
if(s==null)s=o.d=A.lG()
r=A.ik(b)&1073741823
q=s[r]
if(q==null){A.jN(s,r,[b,c]);++o.a
o.e=null}else{p=o.aK(q,b)
if(p>=0)q[p+1]=c
else{q.push(b,c);++o.a
o.e=null}}},
v(a,b){var s,r,q,p,o,n,m=this,l=m.$ti
l.h("~(1,2)").a(b)
s=m.bo()
for(r=s.length,q=l.c,l=l.z[1],p=0;p<r;++p){o=s[p]
q.a(o)
n=m.l(0,o)
b.$2(o,n==null?l.a(n):n)
if(s!==m.e)throw A.c(A.ai(m))}},
bo(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.e
if(h!=null)return h
h=A.iC(i.a,null,!1,t.z)
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
bt(a,b){return a[A.ik(b)&1073741823]}}
A.cH.prototype={
aK(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=0;r<s;r+=2){q=a[r]
if(q==null?b==null:q===b)return r}return-1}}
A.cF.prototype={
gi(a){return this.a.a},
gK(a){var s=this.a
return new A.cG(s,s.bo(),this.$ti.h("cG<1>"))}}
A.cG.prototype={
gB(a){var s=this.d
return s==null?this.$ti.c.a(s):s},
A(){var s=this,r=s.b,q=s.c,p=s.a
if(r!==p.e)throw A.c(A.ai(p))
else if(q>=r.length){s.sbn(null)
return!1}else{s.sbn(r[q])
s.c=q+1
return!0}},
sbn(a){this.d=this.$ti.h("1?").a(a)},
$iX:1}
A.e.prototype={
gK(a){return new A.b3(a,this.gi(a),A.af(a).h("b3<e.E>"))},
t(a,b){return this.l(a,b)},
v(a,b){var s,r
A.af(a).h("~(e.E)").a(b)
s=this.gi(a)
for(r=0;r<s;++r){b.$1(this.l(a,r))
if(s!==this.gi(a))throw A.c(A.ai(a))}},
gdf(a){return this.gi(a)===0},
gu(a){if(this.gi(a)===0)throw A.c(A.ji())
return this.l(a,0)},
bH(a,b){var s,r=this.gi(a)
for(s=0;s<r;++s){if(J.im(this.l(a,s),b))return!0
if(r!==this.gi(a))throw A.c(A.ai(a))}return!1},
ap(a,b,c){var s=A.af(a)
return new A.ar(a,s.q(c).h("1(e.E)").a(b),s.h("@<e.E>").q(c).h("ar<1,2>"))},
aq(a){var s,r,q,p,o=this
if(o.gdf(a)){s=J.jk(0,A.af(a).h("e.E"))
return s}r=o.l(a,0)
q=A.iC(o.gi(a),r,!0,A.af(a).h("e.E"))
for(p=1;p<o.gi(a);++p)B.a.k(q,p,o.l(a,p))
return q},
j(a){return A.jj(a,"[","]")}}
A.w.prototype={
v(a,b){var s,r,q,p=A.af(a)
p.h("~(w.K,w.V)").a(b)
for(s=J.bM(this.gL(a)),p=p.h("w.V");s.A();){r=s.gB(s)
q=this.l(a,r)
b.$2(r,q==null?p.a(q):q)}},
gi(a){return J.fj(this.gL(a))},
j(a){return A.fP(a)},
$iJ:1}
A.fQ.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=r.a+=A.o(a)
r.a=s+": "
r.a+=A.o(b)},
$S:17}
A.cZ.prototype={}
A.bu.prototype={
l(a,b){return this.a.l(0,b)},
v(a,b){this.a.v(0,this.$ti.h("~(1,2)").a(b))},
gi(a){return this.a.a},
gL(a){var s=this.a
return new A.b2(s,s.$ti.h("b2<1>"))},
j(a){return A.fP(this.a)},
$iJ:1}
A.cs.prototype={}
A.bJ.prototype={}
A.fY.prototype={
$2(a,b){var s,r,q
t.cm.a(a)
s=this.b
r=this.a
q=s.a+=r.a
q+=a.a
s.a=q
s.a=q+": "
s.a+=A.bp(b)
r.a=", "},
$S:18}
A.bT.prototype={
J(a,b){if(b==null)return!1
return b instanceof A.bT&&this.a===b.a&&!0},
gp(a){var s=this.a
return(s^B.e.aT(s,30))&1073741823},
j(a){var s=this,r=A.l0(A.lo(s)),q=A.dk(A.lm(s)),p=A.dk(A.li(s)),o=A.dk(A.lj(s)),n=A.dk(A.ll(s)),m=A.dk(A.ln(s)),l=A.l1(A.lk(s))
return r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l}}
A.B.prototype={
gav(){return A.aP(this.$thrownJsError)}}
A.da.prototype={
j(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.bp(s)
return"Assertion failed"}}
A.as.prototype={}
A.am.prototype={
gaJ(){return"Invalid argument"+(!this.a?"(s)":"")},
gaI(){return""},
j(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+A.o(p),n=s.gaJ()+q+o
if(!s.a)return n
return n+s.gaI()+": "+A.bp(s.gaY())},
gaY(){return this.b}}
A.ck.prototype={
gaY(){return A.m0(this.b)},
gaJ(){return"RangeError"},
gaI(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.o(q):""
else if(q==null)s=": Not greater than or equal to "+A.o(r)
else if(q>r)s=": Not in inclusive range "+A.o(r)+".."+A.o(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.o(r)
return s}}
A.dw.prototype={
gaY(){return A.a4(this.b)},
gaJ(){return"RangeError"},
gaI(){if(A.a4(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gi(a){return this.f}}
A.dP.prototype={
j(a){var s,r,q,p,o,n,m,l,k=this,j={},i=new A.co("")
j.a=""
s=k.c
for(r=s.length,q=0,p="",o="";q<r;++q,o=", "){n=s[q]
i.a=p+o
p=i.a+=A.bp(n)
j.a=", "}k.d.v(0,new A.fY(j,i))
m=A.bp(k.a)
l=i.j(0)
return"NoSuchMethodError: method not found: '"+k.b.a+"'\nReceiver: "+m+"\nArguments: ["+l+"]"}}
A.ee.prototype={
j(a){return"Unsupported operation: "+this.a}}
A.ec.prototype={
j(a){return"UnimplementedError: "+this.a}}
A.b9.prototype={
j(a){return"Bad state: "+this.a}}
A.dj.prototype={
j(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.bp(s)+"."}}
A.cn.prototype={
j(a){return"Stack Overflow"},
gav(){return null},
$iB:1}
A.hB.prototype={
j(a){return"Exception: "+this.a}}
A.fA.prototype={
j(a){var s=this.a,r=""!==s?"FormatException: "+s:"FormatException"
return r}}
A.h.prototype={
ap(a,b,c){var s=A.C(this)
return A.le(this,s.q(c).h("1(h.E)").a(b),s.h("h.E"),c)},
gi(a){var s,r=this.gK(this)
for(s=0;r.A();)++s
return s},
j(a){return A.l9(this,"(",")")}}
A.K.prototype={
gp(a){return A.v.prototype.gp.call(this,this)},
j(a){return"null"}}
A.v.prototype={$iv:1,
J(a,b){return this===b},
gp(a){return A.ci(this)},
j(a){return"Instance of '"+A.h2(this)+"'"},
bO(a,b){throw A.c(A.jo(this,t.B.a(b)))},
gD(a){return A.mS(this)},
toString(){return this.j(this)}}
A.eV.prototype={
j(a){return""},
$iac:1}
A.co.prototype={
gi(a){return this.a.length},
j(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
A.m.prototype={}
A.fk.prototype={
gi(a){return a.length}}
A.d7.prototype={
j(a){var s=String(a)
s.toString
return s}}
A.d9.prototype={
j(a){var s=String(a)
s.toString
return s}}
A.aU.prototype={$iaU:1}
A.aV.prototype={$iaV:1}
A.aW.prototype={
sS(a,b){a.height=b},
sU(a,b){a.width=b},
au(a,b,c){var s=a.getContext(b,A.kk(c))
return s},
$iaW:1,
$idg:1}
A.ah.prototype={
gi(a){return a.length}}
A.fr.prototype={
gi(a){return a.length}}
A.z.prototype={$iz:1}
A.bS.prototype={
gi(a){var s=a.length
s.toString
return s}}
A.fs.prototype={}
A.a7.prototype={}
A.an.prototype={}
A.ft.prototype={
gi(a){return a.length}}
A.fu.prototype={
gi(a){return a.length}}
A.fv.prototype={
gi(a){return a.length}}
A.aX.prototype={$iaX:1}
A.bn.prototype={$ibn:1}
A.fw.prototype={
j(a){var s=String(a)
s.toString
return s}}
A.bV.prototype={
gi(a){var s=a.length
s.toString
return s},
l(a,b){var s=a.length,r=b>>>0!==b||b>=s
r.toString
if(r)throw A.c(A.I(b,s,a,null))
s=a[b]
s.toString
return s},
gu(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.c(A.L("No elements"))},
t(a,b){if(!(b<a.length))return A.d(a,b)
return a[b]},
$ik:1,
$it:1,
$ih:1,
$il:1}
A.bW.prototype={
j(a){var s,r=a.left
r.toString
s=a.top
s.toString
return"Rectangle ("+A.o(r)+", "+A.o(s)+") "+A.o(this.gU(a))+" x "+A.o(this.gS(a))},
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
if(s===r){s=J.d4(b)
s=this.gU(a)===s.gU(b)&&this.gS(a)===s.gS(b)}else s=!1}else s=!1}else s=!1
return s},
gp(a){var s,r=a.left
r.toString
s=a.top
s.toString
return A.jp(r,s,this.gU(a),this.gS(a))},
gbu(a){return a.height},
gS(a){var s=this.gbu(a)
s.toString
return s},
gbD(a){return a.width},
gU(a){var s=this.gbD(a)
s.toString
return s},
$iaj:1}
A.dl.prototype={
gi(a){var s=a.length
s.toString
return s},
l(a,b){var s=a.length,r=b>>>0!==b||b>=s
r.toString
if(r)throw A.c(A.I(b,s,a,null))
s=a[b]
s.toString
return s},
gu(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.c(A.L("No elements"))},
t(a,b){if(!(b<a.length))return A.d(a,b)
return a[b]},
$ik:1,
$it:1,
$ih:1,
$il:1}
A.fx.prototype={
gi(a){var s=a.length
s.toString
return s}}
A.i.prototype={
j(a){var s=a.localName
s.toString
return s},
$ii:1}
A.f.prototype={$if:1}
A.b.prototype={
d1(a,b,c,d){t.o.a(c)
if(c!=null)this.cF(a,b,c,!1)},
cF(a,b,c,d){return a.addEventListener(b,A.bg(t.o.a(c),1),!1)},
cU(a,b,c,d){return a.removeEventListener(b,A.bg(t.o.a(c),1),!1)},
$ib:1}
A.R.prototype={$iR:1}
A.dn.prototype={
gi(a){var s=a.length
s.toString
return s},
l(a,b){var s=a.length,r=b>>>0!==b||b>=s
r.toString
if(r)throw A.c(A.I(b,s,a,null))
s=a[b]
s.toString
return s},
gu(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.c(A.L("No elements"))},
t(a,b){if(!(b<a.length))return A.d(a,b)
return a[b]},
$ik:1,
$it:1,
$ih:1,
$il:1}
A.dp.prototype={
gi(a){return a.length}}
A.dq.prototype={
gi(a){return a.length}}
A.W.prototype={$iW:1}
A.fH.prototype={
gi(a){var s=a.length
s.toString
return s}}
A.aZ.prototype={
gi(a){var s=a.length
s.toString
return s},
l(a,b){var s=a.length,r=b>>>0!==b||b>=s
r.toString
if(r)throw A.c(A.I(b,s,a,null))
s=a[b]
s.toString
return s},
gu(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.c(A.L("No elements"))},
t(a,b){if(!(b<a.length))return A.d(a,b)
return a[b]},
$ik:1,
$it:1,
$ih:1,
$il:1}
A.c0.prototype={$ic0:1}
A.dv.prototype={$idg:1}
A.b_.prototype={$ib_:1}
A.fJ.prototype={
gdg(a){return a.isIntersecting}}
A.fO.prototype={
j(a){var s=String(a)
s.toString
return s}}
A.b6.prototype={}
A.fT.prototype={
gi(a){return a.length}}
A.dE.prototype={
l(a,b){return A.aO(a.get(A.a5(b)))},
v(a,b){var s,r,q
t.u.a(b)
s=a.entries()
for(;!0;){r=s.next()
q=r.done
q.toString
if(q)return
q=r.value[0]
q.toString
b.$2(q,A.aO(r.value[1]))}},
gL(a){var s=A.r([],t.s)
this.v(a,new A.fU(s))
return s},
gi(a){var s=a.size
s.toString
return s},
$iJ:1}
A.fU.prototype={
$2(a,b){return B.a.n(this.a,a)},
$S:2}
A.dF.prototype={
l(a,b){return A.aO(a.get(A.a5(b)))},
v(a,b){var s,r,q
t.u.a(b)
s=a.entries()
for(;!0;){r=s.next()
q=r.done
q.toString
if(q)return
q=r.value[0]
q.toString
b.$2(q,A.aO(r.value[1]))}},
gL(a){var s=A.r([],t.s)
this.v(a,new A.fV(s))
return s},
gi(a){var s=a.size
s.toString
return s},
$iJ:1}
A.fV.prototype={
$2(a,b){return B.a.n(this.a,a)},
$S:2}
A.Z.prototype={$iZ:1}
A.dG.prototype={
gi(a){var s=a.length
s.toString
return s},
l(a,b){var s=a.length,r=b>>>0!==b||b>=s
r.toString
if(r)throw A.c(A.I(b,s,a,null))
s=a[b]
s.toString
return s},
gu(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.c(A.L("No elements"))},
t(a,b){if(!(b<a.length))return A.d(a,b)
return a[b]},
$ik:1,
$it:1,
$ih:1,
$il:1}
A.p.prototype={
j(a){var s=a.nodeValue
return s==null?this.bX(a):s},
$ip:1}
A.cg.prototype={
gi(a){var s=a.length
s.toString
return s},
l(a,b){var s=a.length,r=b>>>0!==b||b>=s
r.toString
if(r)throw A.c(A.I(b,s,a,null))
s=a[b]
s.toString
return s},
gu(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.c(A.L("No elements"))},
t(a,b){if(!(b<a.length))return A.d(a,b)
return a[b]},
$ik:1,
$it:1,
$ih:1,
$il:1}
A.a_.prototype={
gi(a){return a.length},
$ia_:1}
A.dT.prototype={
gi(a){var s=a.length
s.toString
return s},
l(a,b){var s=a.length,r=b>>>0!==b||b>=s
r.toString
if(r)throw A.c(A.I(b,s,a,null))
s=a[b]
s.toString
return s},
gu(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.c(A.L("No elements"))},
t(a,b){if(!(b<a.length))return A.d(a,b)
return a[b]},
$ik:1,
$it:1,
$ih:1,
$il:1}
A.dX.prototype={
l(a,b){return A.aO(a.get(A.a5(b)))},
v(a,b){var s,r,q
t.u.a(b)
s=a.entries()
for(;!0;){r=s.next()
q=r.done
q.toString
if(q)return
q=r.value[0]
q.toString
b.$2(q,A.aO(r.value[1]))}},
gL(a){var s=A.r([],t.s)
this.v(a,new A.h8(s))
return s},
gi(a){var s=a.size
s.toString
return s},
$iJ:1}
A.h8.prototype={
$2(a,b){return B.a.n(this.a,a)},
$S:2}
A.dZ.prototype={
gi(a){return a.length}}
A.T.prototype={$iT:1}
A.e0.prototype={
gi(a){var s=a.length
s.toString
return s},
l(a,b){var s=a.length,r=b>>>0!==b||b>=s
r.toString
if(r)throw A.c(A.I(b,s,a,null))
s=a[b]
s.toString
return s},
gu(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.c(A.L("No elements"))},
t(a,b){if(!(b<a.length))return A.d(a,b)
return a[b]},
$ik:1,
$it:1,
$ih:1,
$il:1}
A.a1.prototype={$ia1:1}
A.e1.prototype={
gi(a){var s=a.length
s.toString
return s},
l(a,b){var s=a.length,r=b>>>0!==b||b>=s
r.toString
if(r)throw A.c(A.I(b,s,a,null))
s=a[b]
s.toString
return s},
gu(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.c(A.L("No elements"))},
t(a,b){if(!(b<a.length))return A.d(a,b)
return a[b]},
$ik:1,
$it:1,
$ih:1,
$il:1}
A.a2.prototype={
gi(a){return a.length},
$ia2:1}
A.e3.prototype={
l(a,b){return a.getItem(A.a5(b))},
v(a,b){var s,r,q
t.aa.a(b)
for(s=0;!0;++s){r=a.key(s)
if(r==null)return
q=a.getItem(r)
q.toString
b.$2(r,q)}},
gL(a){var s=A.r([],t.s)
this.v(a,new A.hf(s))
return s},
gi(a){var s=a.length
s.toString
return s},
$iJ:1}
A.hf.prototype={
$2(a,b){return B.a.n(this.a,a)},
$S:19}
A.P.prototype={$iP:1}
A.U.prototype={$iU:1}
A.N.prototype={$iN:1}
A.e6.prototype={
gi(a){var s=a.length
s.toString
return s},
l(a,b){var s=a.length,r=b>>>0!==b||b>=s
r.toString
if(r)throw A.c(A.I(b,s,a,null))
s=a[b]
s.toString
return s},
gu(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.c(A.L("No elements"))},
t(a,b){if(!(b<a.length))return A.d(a,b)
return a[b]},
$ik:1,
$it:1,
$ih:1,
$il:1}
A.e7.prototype={
gi(a){var s=a.length
s.toString
return s},
l(a,b){var s=a.length,r=b>>>0!==b||b>=s
r.toString
if(r)throw A.c(A.I(b,s,a,null))
s=a[b]
s.toString
return s},
gu(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.c(A.L("No elements"))},
t(a,b){if(!(b<a.length))return A.d(a,b)
return a[b]},
$ik:1,
$it:1,
$ih:1,
$il:1}
A.hk.prototype={
gi(a){var s=a.length
s.toString
return s}}
A.a3.prototype={$ia3:1}
A.e9.prototype={
gi(a){var s=a.length
s.toString
return s},
l(a,b){var s=a.length,r=b>>>0!==b||b>=s
r.toString
if(r)throw A.c(A.I(b,s,a,null))
s=a[b]
s.toString
return s},
gu(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.c(A.L("No elements"))},
t(a,b){if(!(b<a.length))return A.d(a,b)
return a[b]},
$ik:1,
$it:1,
$ih:1,
$il:1}
A.hl.prototype={
gi(a){return a.length}}
A.hq.prototype={
j(a){var s=String(a)
s.toString
return s}}
A.ef.prototype={$idg:1}
A.eg.prototype={
gi(a){return a.length}}
A.aJ.prototype={
bP(a,b){var s
t.I.a(b)
this.br(a)
s=A.kf(b,t.H)
s.toString
return this.cW(a,s)},
cW(a,b){var s=a.requestAnimationFrame(A.bg(t.I.a(b),1))
s.toString
return s},
br(a){var s=!!(a.requestAnimationFrame&&a.cancelAnimationFrame)
s.toString
if(s)return;(function(b){var r=["ms","moz","webkit","o"]
for(var q=0;q<r.length&&!b.requestAnimationFrame;++q){b.requestAnimationFrame=b[r[q]+"RequestAnimationFrame"]
b.cancelAnimationFrame=b[r[q]+"CancelAnimationFrame"]||b[r[q]+"CancelRequestAnimationFrame"]}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
$iaJ:1}
A.al.prototype={$ial:1}
A.el.prototype={
gi(a){var s=a.length
s.toString
return s},
l(a,b){var s=a.length,r=b>>>0!==b||b>=s
r.toString
if(r)throw A.c(A.I(b,s,a,null))
s=a[b]
s.toString
return s},
gu(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.c(A.L("No elements"))},
t(a,b){if(!(b<a.length))return A.d(a,b)
return a[b]},
$ik:1,
$it:1,
$ih:1,
$il:1}
A.cA.prototype={
j(a){var s,r,q,p=a.left
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
r=J.d4(b)
if(s===r.gU(b)){s=a.height
s.toString
r=s===r.gS(b)
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
return A.jp(p,s,r,q)},
gbu(a){return a.height},
gS(a){var s=a.height
s.toString
return s},
gbD(a){return a.width},
gU(a){var s=a.width
s.toString
return s}}
A.ex.prototype={
gi(a){var s=a.length
s.toString
return s},
l(a,b){var s=a.length,r=b>>>0!==b||b>=s
r.toString
if(r)throw A.c(A.I(b,s,a,null))
return a[b]},
gu(a){if(a.length>0)return a[0]
throw A.c(A.L("No elements"))},
t(a,b){if(!(b<a.length))return A.d(a,b)
return a[b]},
$ik:1,
$it:1,
$ih:1,
$il:1}
A.cK.prototype={
gi(a){var s=a.length
s.toString
return s},
l(a,b){var s=a.length,r=b>>>0!==b||b>=s
r.toString
if(r)throw A.c(A.I(b,s,a,null))
s=a[b]
s.toString
return s},
gu(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.c(A.L("No elements"))},
t(a,b){if(!(b<a.length))return A.d(a,b)
return a[b]},
$ik:1,
$it:1,
$ih:1,
$il:1}
A.eQ.prototype={
gi(a){var s=a.length
s.toString
return s},
l(a,b){var s=a.length,r=b>>>0!==b||b>=s
r.toString
if(r)throw A.c(A.I(b,s,a,null))
s=a[b]
s.toString
return s},
gu(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.c(A.L("No elements"))},
t(a,b){if(!(b<a.length))return A.d(a,b)
return a[b]},
$ik:1,
$it:1,
$ih:1,
$il:1}
A.eW.prototype={
gi(a){var s=a.length
s.toString
return s},
l(a,b){var s=a.length,r=b>>>0!==b||b>=s
r.toString
if(r)throw A.c(A.I(b,s,a,null))
s=a[b]
s.toString
return s},
gu(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.c(A.L("No elements"))},
t(a,b){if(!(b<a.length))return A.d(a,b)
return a[b]},
$ik:1,
$it:1,
$ih:1,
$il:1}
A.iu.prototype={}
A.cB.prototype={
b_(a,b,c,d){var s=A.C(this)
s.h("~(1)?").a(a)
t.Y.a(c)
return A.cD(this.a,this.b,a,!1,s.c)}}
A.es.prototype={}
A.cC.prototype={
aU(a){var s,r=this,q=r.b
if(q==null)return $.il()
s=r.d
if(s!=null)J.kK(q,r.c,t.o.a(s),!1)
r.b=null
r.scQ(null)
return $.il()},
scQ(a){this.d=t.o.a(a)},
$iak:1}
A.hA.prototype={
$1(a){return this.a.$1(t.A.a(a))},
$S:20}
A.n.prototype={
gK(a){return new A.bZ(a,this.gi(a),A.af(a).h("bZ<n.E>"))}}
A.bZ.prototype={
A(){var s=this,r=s.c+1,q=s.b
if(r<q){s.sbv(J.kJ(s.a,r))
s.c=r
return!0}s.sbv(null)
s.c=q
return!1},
gB(a){var s=this.d
return s==null?this.$ti.c.a(s):s},
sbv(a){this.d=this.$ti.h("1?").a(a)},
$iX:1}
A.em.prototype={}
A.eo.prototype={}
A.ep.prototype={}
A.eq.prototype={}
A.er.prototype={}
A.eu.prototype={}
A.ev.prototype={}
A.ey.prototype={}
A.ez.prototype={}
A.eC.prototype={}
A.eD.prototype={}
A.eE.prototype={}
A.eF.prototype={}
A.eG.prototype={}
A.eH.prototype={}
A.eK.prototype={}
A.eL.prototype={}
A.eN.prototype={}
A.cQ.prototype={}
A.cR.prototype={}
A.eO.prototype={}
A.eP.prototype={}
A.eR.prototype={}
A.eX.prototype={}
A.eY.prototype={}
A.cT.prototype={}
A.cU.prototype={}
A.f_.prototype={}
A.f0.prototype={}
A.f4.prototype={}
A.f5.prototype={}
A.f6.prototype={}
A.f7.prototype={}
A.f8.prototype={}
A.f9.prototype={}
A.fa.prototype={}
A.fb.prototype={}
A.fc.prototype={}
A.fd.prototype={}
A.i_.prototype={
$1(a){this.a.push(A.k0(a))},
$S:1}
A.i9.prototype={
$2(a,b){this.a[a]=A.k0(b)},
$S:21}
A.c5.prototype={$ic5:1}
A.fL.prototype={
$1(a){var s,r,q,p,o=this.a
if(o.ae(0,a))return o.l(0,a)
if(t.f.b(a)){s={}
o.k(0,a,s)
for(o=J.d4(a),r=J.bM(o.gL(a));r.A();){q=r.gB(r)
s[q]=this.$1(o.l(a,q))}return s}else if(t.V.b(a)){p=[]
o.k(0,a,p)
B.a.X(p,J.j4(a,this,t.z))
return p}else return A.iN(a)},
$S:22}
A.i0.prototype={
$1(a){var s
t.Z.a(a)
s=function(b,c,d){return function(){return b(c,d,this,Array.prototype.slice.apply(arguments))}}(A.m8,a,!1)
A.iO(s,$.fi(),a)
return s},
$S:3}
A.i1.prototype={
$1(a){return new this.a(a)},
$S:3}
A.i5.prototype={
$1(a){return new A.c4(a==null?t.K.a(a):a)},
$S:23}
A.i6.prototype={
$1(a){var s=a==null?t.K.a(a):a
return new A.b0(s,t.a2)},
$S:24}
A.i7.prototype={
$1(a){return new A.ap(a==null?t.K.a(a):a)},
$S:25}
A.ap.prototype={
l(a,b){return A.k2(this.a[b])},
k(a,b,c){if(typeof b!="string"&&typeof b!="number")throw A.c(A.aB("property is not a String or num",null))
this.a[b]=A.iN(c)},
J(a,b){if(b==null)return!1
return b instanceof A.ap&&this.a===b.a},
j(a){var s,r
try{s=String(this.a)
return s}catch(r){s=this.c0(0)
return s}},
gp(a){return 0}}
A.c4.prototype={}
A.b0.prototype={
bm(a){var s=this,r=a<0||a>=s.gi(s)
if(r)throw A.c(A.dV(a,0,s.gi(s),null,null))},
l(a,b){this.bm(b)
return this.$ti.c.a(this.bY(0,b))},
k(a,b,c){if(A.i2(b))this.bm(b)
this.c1(0,b,c)},
gi(a){var s=this.a.length
if(typeof s==="number"&&s>>>0===s)return s
throw A.c(A.L("Bad JsArray length"))},
$ik:1,
$ih:1,
$il:1}
A.bH.prototype={
k(a,b,c){return this.bZ(0,b,c)}}
A.by.prototype={
j(a){return"Point("+this.a+", "+this.b+")"},
J(a,b){if(b==null)return!1
return b instanceof A.by&&this.a===b.a&&this.b===b.b},
gp(a){return A.lu(B.e.gp(this.a),B.e.gp(this.b),0)}}
A.a9.prototype={$ia9:1}
A.dB.prototype={
gi(a){var s=a.length
s.toString
return s},
l(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw A.c(A.I(b,this.gi(a),a,null))
s=a.getItem(b)
s.toString
return s},
gu(a){var s=a.length
s.toString
if(s>0){s=a[0]
s.toString
return s}throw A.c(A.L("No elements"))},
t(a,b){return this.l(a,b)},
$ik:1,
$ih:1,
$il:1}
A.aa.prototype={$iaa:1}
A.dQ.prototype={
gi(a){var s=a.length
s.toString
return s},
l(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw A.c(A.I(b,this.gi(a),a,null))
s=a.getItem(b)
s.toString
return s},
gu(a){var s=a.length
s.toString
if(s>0){s=a[0]
s.toString
return s}throw A.c(A.L("No elements"))},
t(a,b){return this.l(a,b)},
$ik:1,
$ih:1,
$il:1}
A.h0.prototype={
gi(a){return a.length}}
A.e4.prototype={
gi(a){var s=a.length
s.toString
return s},
l(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw A.c(A.I(b,this.gi(a),a,null))
s=a.getItem(b)
s.toString
return s},
gu(a){var s=a.length
s.toString
if(s>0){s=a[0]
s.toString
return s}throw A.c(A.L("No elements"))},
t(a,b){return this.l(a,b)},
$ik:1,
$ih:1,
$il:1}
A.ad.prototype={$iad:1}
A.ea.prototype={
gi(a){var s=a.length
s.toString
return s},
l(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw A.c(A.I(b,this.gi(a),a,null))
s=a.getItem(b)
s.toString
return s},
gu(a){var s=a.length
s.toString
if(s>0){s=a[0]
s.toString
return s}throw A.c(A.L("No elements"))},
t(a,b){return this.l(a,b)},
$ik:1,
$ih:1,
$il:1}
A.eA.prototype={}
A.eB.prototype={}
A.eI.prototype={}
A.eJ.prototype={}
A.eT.prototype={}
A.eU.prototype={}
A.f1.prototype={}
A.f2.prototype={}
A.fm.prototype={
gi(a){return a.length}}
A.dc.prototype={
l(a,b){return A.aO(a.get(A.a5(b)))},
v(a,b){var s,r,q
t.u.a(b)
s=a.entries()
for(;!0;){r=s.next()
q=r.done
q.toString
if(q)return
q=r.value[0]
q.toString
b.$2(q,A.aO(r.value[1]))}},
gL(a){var s=A.r([],t.s)
this.v(a,new A.fn(s))
return s},
gi(a){var s=a.size
s.toString
return s},
$iJ:1}
A.fn.prototype={
$2(a,b){return B.a.n(this.a,a)},
$S:2}
A.dd.prototype={
gi(a){return a.length}}
A.aC.prototype={}
A.dR.prototype={
gi(a){return a.length}}
A.ek.prototype={}
A.df.prototype={$idf:1}
A.bm.prototype={$ibm:1}
A.ds.prototype={$ids:1}
A.dU.prototype={$idU:1}
A.dW.prototype={$idW:1}
A.cl.prototype={$icl:1}
A.bA.prototype={
ao(a,b,c){return a.bindBuffer(b,c)},
H(a,b,c){return a.bindFramebuffer(b,c)},
bF(a,b,c){return a.bindRenderbuffer(b,c)},
bG(a,b,c){return a.bindTexture(b,c)},
bI(a,b){return a.deleteBuffer(b)},
d4(a,b){return a.deleteFramebuffer(b)},
d5(a,b){return a.deleteProgram(b)},
d6(a,b){return a.deleteRenderbuffer(b)},
bJ(a,b){return a.deleteShader(b)},
d7(a,b){return a.deleteTexture(b)},
da(a,b,c,d,e){return a.framebufferRenderbuffer(b,c,d,e)},
dc(a,b,c,d,e,f){return a.framebufferTexture2D(b,c,d,e,f)},
bT(a,b,c,d,e,f,g,h,i,j){var s=i==null
if(!s&&h!=null&&A.i2(g)){this.d_(a,b,c,d,e,f,g,h,i,j)
return}if(t.E.b(g)&&h==null&&s&&j==null){this.d0(a,b,c,d,e,f,g)
return}throw A.c(A.aB("Incorrect number or type of arguments",null))},
dm(a,b,c,d,e,f,g){return this.bT(a,b,c,d,e,f,g,null,null,null)},
d_(a,b,c,d,e,f,g,h,i,j){return a.texImage2D(b,c,d,e,f,g,h,i,j)},
d0(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
a0(a,b,c){return a.uniform1f(b,c)},
ar(a,b,c){return a.uniform1i(b,c)},
N(a,b,c){return a.uniform4fv(b,c)},
bU(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
F(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
a1(a,b){return a.useProgram(b)},
$ibA:1}
A.e_.prototype={$ie_:1}
A.e8.prototype={$ie8:1}
A.eb.prototype={$ieb:1}
A.dt.prototype={
gd9(){var s=B.a.d8(this.a,0,new A.fB(),t.H)
if(typeof s!=="number")return A.mU(s)
return B.c.Z(20/s)},
ce(a){var s,r,q=this
A.jZ(a)
s=q.f=(a-q.b)*0.001
q.b=a
r=q.c+=s
q.d+=s
q.e+=s
if(r>=0.03333333333333333){s=B.c.b3(r,0.03333333333333333)
q.c=s
r=q.r
if(r!=null)r.$1(0.03333333333333333+s)}s=q.d
if(s>=0.016666666666666666){s=B.c.b3(s,0.016666666666666666)
q.d=s
r=q.w
if(r!=null)r.$1(0.016666666666666666+s)
s=q.a
if(!!s.fixed$length)A.aA(A.bc("removeAt"))
r=s.length
if(0>=r)A.aA(A.jv(0,null))
s.splice(0,1)[0]
B.a.n(s,q.e)
q.e=0}s=window
s.toString
q.x=B.j.bP(s,q.gbi())},
sbz(a){this.r=t.W.a(a)},
sbA(a){this.w=t.W.a(a)}}
A.fB.prototype={
$2(a,b){return A.jZ(a)+A.iM(b)},
$S:27}
A.fp.prototype={
bg(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=d.f,b=d.d,a=d.e.b6(b)
a.W()
s=b.b6(a)
r=a.a
r===$&&A.x()
q=a.b
q===$&&A.x()
p=a.c
p===$&&A.x()
o=s.a
o===$&&A.x()
n=s.b
n===$&&A.x()
m=s.c
m===$&&A.x()
l=b.a
l===$&&A.x()
k=b.b
k===$&&A.x()
b=b.c
b===$&&A.x()
j=t.n
b=A.r([r,q,p,o,n,m,l,k,b],j)
i=new A.bv(b)
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
i.sE(0,A.r([l,m,n,o,p,q,r,h,b[8]],j))
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
q.sE(0,A.r([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],j))
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
q.aE(new A.aF(-(p*b+o*h+n*c),-(m*b+l*h+k*c),-(g*b+f*h+r*c)))
d.a.sE(0,A.Y(d.b.m(0,q).a,t.i))}}
A.he.prototype={}
A.bl.prototype={
gT(){var s=this
return A.r([s.a,s.b,s.c,s.d],t.n)}}
A.fC.prototype={}
A.bv.prototype={
j(a){var s,r,q,p,o,n,m,l,k=this,j=k.a
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
sE(a,b){this.a=t.r.a(b)}}
A.bw.prototype={
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
return new A.bw(A.r([s*b+r*a2+q*a6+p*b0,o*b+n*a2+m*a6+l*b0,k*b+j*a2+i*a6+h*b0,g*b+f*a2+e*a6+d*b0,s*a+r*a3+q*a7+p*b1,o*a+n*a3+m*a7+l*b1,k*a+j*a3+i*a7+h*b1,g*a+f*a3+e*a7+d*b1,s*a0+r*a4+q*a8+p*b2,o*a0+n*a4+m*a8+l*b2,k*a0+j*a4+i*a8+h*b2,g*a0+f*a4+e*a8+d*b2,s*a1+r*a5+q*a9+p*b3,o*a1+n*a5+m*a9+l*b3,k*a1+j*a5+i*a9+h*b3,g*a1+f*a5+e*a9+d*b3],t.n))},
j(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=d.a
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
sE(a,b){this.a=t.r.a(b)}}
A.ab.prototype={
O(a,b){return new A.ab(this.a-b.a,this.b-b.b)},
j(a){return"["+A.o(this.a)+", "+A.o(this.b)+"]"}}
A.aF.prototype={
O(a,b){return new A.aF(this.a-b.a,this.b-b.b,this.c-b.c)},
az(a){this.a=a.a
this.b=a.b
this.c=a.c},
j(a){return"["+A.o(this.a)+", "+A.o(this.b)+", "+A.o(this.c)+"]"}}
A.cj.prototype={}
A.h4.prototype={
b5(){var s=this,r=A.r([1,0,0,0,1,0,0,0,1],t.n),q=s.a,p=s.b,o=s.c,n=s.d,m=2/(q*q+p*p+o*o+n*n),l=q*m,k=p*m,j=o*m,i=n*l,h=n*k,g=n*j,f=q*l,e=q*k,d=q*j,c=p*k,b=p*j,a=o*j
B.a.k(r,0,1-(c+a))
B.a.k(r,1,e+g)
B.a.k(r,2,d-h)
B.a.k(r,3,e-g)
B.a.k(r,4,1-(f+a))
B.a.k(r,5,b+i)
B.a.k(r,6,d+h)
B.a.k(r,7,b-i)
B.a.k(r,8,1-(f+c))
return new A.bv(r)}}
A.cq.prototype={}
A.ba.prototype={
aE(a){B.a.k(this.a,12,a.a)
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
return new A.ba(A.r([s*f+r*b+q*a2,o*f+n*b+m*a2,k*f+j*b+i*a2,0,s*e+r*a+q*a3,o*e+n*a+m*a3,k*e+j*a+i*a3,0,s*d+r*a0+q*a4,o*d+n*a0+m*a4,k*d+j*a0+i*a4,0,s*c+r*a1+q*a5+p,o*c+n*a1+m*a5+l,k*c+j*a1+i*a5+h,1],t.n))}}
A.ct.prototype={
W(){var s,r,q=this,p=q.a
p===$&&A.x()
s=q.b
s===$&&A.x()
r=Math.sqrt(p*p+s*s)
q.a=q.a/r
q.b=q.b/r},
j(a){var s,r=this.a
r===$&&A.x()
s=this.b
s===$&&A.x()
return"["+A.o(r)+", "+A.o(s)+"]"}}
A.bD.prototype={
m(a,b){var s,r,q=this.a
q===$&&A.x()
s=this.b
s===$&&A.x()
r=this.c
r===$&&A.x()
return new A.bD(q*b,s*b,r*b)},
W(){var s,r,q,p=this,o=p.a
o===$&&A.x()
s=p.b
s===$&&A.x()
r=p.c
r===$&&A.x()
q=Math.sqrt(o*o+s*s+r*r)
p.a=p.a/q
p.b=p.b/q
p.c=p.c/q},
b6(a){var s,r,q,p,o,n=this.b
n===$&&A.x()
s=a.c
s===$&&A.x()
r=this.c
r===$&&A.x()
q=a.b
q===$&&A.x()
p=a.a
p===$&&A.x()
o=this.a
o===$&&A.x()
return new A.bD(n*s-r*q,r*p-o*s,o*q-n*p)},
aA(a){this.a=a.a
this.b=a.b
this.c=a.c},
j(a){var s,r,q=this.a
q===$&&A.x()
s=this.b
s===$&&A.x()
r=this.c
r===$&&A.x()
return"["+A.o(q)+", "+A.o(s)+", "+A.o(r)+"]"}}
A.h_.prototype={
aj(a,b,c,d){var s=a*3284157443,r=((b^(s<<16|B.e.aT(s,16)))>>>0)*1911520717,q=((s^(r<<16|r>>>16))>>>0)*2048419325*1462918077595532e-24
return(c-a)*Math.cos(q)+(d-b)*Math.sin(q)}}
A.a6.prototype={}
A.de.prototype={}
A.fq.prototype={}
A.aE.prototype={}
A.fI.prototype={}
A.hu.prototype={}
A.fo.prototype={}
A.fy.prototype={
ah(a){var s=this.a,r=s.byteLength
this.a=new Uint16Array(A.aw(B.a.af(B.q.aq(s),B.q.aq(a))))
return new A.fI(a.length,r,5123)},
ag(a){var s=this.b,r=s.byteLength
this.b=new Float32Array(A.aw(B.a.af(B.p.aq(s),B.p.aq(a))))
return new A.hu(r)}}
A.bU.prototype={}
A.dr.prototype={
cd(a,b,c){var s,r,q=this,p=36161
q.c=a
s=a.a.createFramebuffer()
s.toString
q.d=s
if(c){r=q.c.a
s=r.createRenderbuffer()
s.toString
q.e=s
B.b.H(r,36160,q.d)
B.b.bF(r,p,q.e)
s=b.b
r.renderbufferStorage(p,33189,A.a4(s.a),A.a4(s.b))
B.b.da(r,36160,36096,p,q.e)
B.b.bF(r,p,null)
B.b.H(r,36160,null)}s=b.b
q.a=A.a4(s.a)
q.b=A.a4(s.b)},
V(){var s=this,r=s.f,q=r.d.a
q.toString
B.b.d7(q,r.f)
s.f=r.d=r.f=null
r=s.e
if(r!=null){q=s.c.a
q.toString
B.b.d6(q,r)
s.e=null}r=s.c.a
r.toString
B.b.d4(r,s.d)
s.c=null}}
A.bj.prototype={
aC(a,b,c,d,e){var s,r,q,p,o,n,m=this
m.bW(a,c,e)
s=m.c.a
s.toString
B.b.H(s,36160,m.d)
s=new A.hj()
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
B.b.bT(n,3553,0,6408,r,q,0,6408,5121,p)
s.bj(33071,d)
s.cb()
m.f=s
p=m.c.a
p.toString
s=s.f
s.toString
B.b.dc(p,36160,36064,3553,s,0)
s=m.c.a
s.toString
B.b.H(s,36160,null)},
b7(a,b,c,d){return this.aC(a,b,c,9729,d)},
c5(a,b,c){return this.aC(a,b,c,9729,!1)}}
A.dC.prototype={
aB(a){var s,r,q,p=this.a
p.c=a
p.e=p.bh(35633,p.a)
p.f=p.bh(35632,p.b)
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
if(p.c.a.getProgramParameter(s,35714)==null){r=p.gbp().getProgramInfoLog(s)
r.toString
A.aA(A.dm("Invalide program\n          "+r+"\n        "))}p.d=s},
V(){var s=this.a,r=s.c.a
r.toString
B.b.d5(r,s.d)
r=s.c.a
r.toString
B.b.bJ(r,s.e)
r=s.c.a
r.toString
B.b.bJ(r,s.f)
s.c=null}}
A.bz.prototype={
R(){var s,r,q,p,o,n,m,l=this
for(s=l.c.a,r=s.length,q=l.b.b,p=0;p<s.length;s.length===r||(0,A.aR)(s),++p){o=s[p]
n=l.e.a
n.toString
m=o.b
n.vertexAttribPointer(m,o.c,5126,!1,o.d,q+o.e)
l.e.a.enableVertexAttribArray(m)}},
P(){var s,r,q,p,o
for(s=this.c.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.aR)(s),++q){p=s[q]
o=this.e.a
o.toString
o.disableVertexAttribArray(p.b)}},
G(){var s=this.a
this.e.a.drawElements(this.d,s.a,s.c,s.b)}}
A.b8.prototype={
gbp(){var s=this.c.a
s.toString
return s},
bh(a,b){var s,r=this,q=r.c.a.createShader(a)
q.toString
r.c.a.shaderSource(q,b)
r.c.a.compileShader(q)
s=r.c.a.getShaderParameter(q,35713)
s.toString
if(!A.iL(s)){q=r.gbp().getShaderInfoLog(q)
q.toString
throw A.c(A.dm("Invalide shader\n          type:"+a+" "+q+"\n        "))}return q}}
A.hj.prototype={
a4(a){var s
this.e=a
s=this.d.a
s.activeTexture(33984+a)
B.b.bG(s,3553,this.f)},
a9(a){var s,r,q,p=this
if(a){s=$.kv()
r=p.d.a
r.toString
q=p.e
q.toString
r.activeTexture(33984+q)
p.d.a.pixelStorei(37440,1)
q=p.d.a
q.toString
B.b.dm(q,3553,0,6408,6408,5121,s)
p.d.a.pixelStorei(37440,0)
p.bj(33071,9729)}else{s=p.d.a
s.toString
r=p.e
r.toString
s.activeTexture(33984+r)}s=p.d.a
s.toString
B.b.bG(s,3553,null)
p.e=null},
cb(){return this.a9(!1)},
bj(a,b){var s=this,r=3553
s.d.a.texParameteri(r,10240,b)
s.d.a.texParameteri(r,10241,b)
s.d.a.texParameteri(r,10242,a)
s.d.a.texParameteri(r,10243,a)}}
A.hp.prototype={
C(a,b){var s,r
this.b=a
s=a.a
s.toString
r=b.d
r.toString
r=s.getUniformLocation(r,this.a)
r.toString
this.c=r}}
A.fz.prototype={}
A.hr.prototype={}
A.fR.prototype={}
A.fS.prototype={}
A.h9.prototype={}
A.aI.prototype={}
A.h7.prototype={}
A.hv.prototype={
saV(a,b){this.a.clearColor(0,0,0,0)
this.a.clearDepth(b.f)
this.a.clear(16640)},
sad(a){var s=this
s.a.enable(3042)
s.a.blendFunc(a.a,a.b)
s.a.blendEquation(32774)
s.a.blendColor(0,0,0,0)},
sI(a){if(a==null){this.a.disable(2884)
return}this.a.enable(2884)
this.a.cullFace(a.a)},
sY(a){if(a==null){this.a.disable(2929)
return}this.a.enable(2929)
this.a.depthFunc(515)},
sbV(a,b){var s,r=this.a
r.toString
s=b.b
r.viewport(0,0,A.a4(s.a),A.a4(s.b))},
c4(a,b){var s,r,q,p=this,o=t.z
o=t.aM.a(B.f.au(a,"webgl2",A.iB(["alpha",!1,"antialias",!0,"depth",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],o,o)))
p.a=o
A.lx(b,o)
for(o=b.f,s=o.length,r=0;r<o.length;o.length===s||(0,A.aR)(o),++r){q=o[r]
p.a.getExtension(q)}p.a.frontFace(2305)
p.a.pixelStorei(37441,0)}}
A.fW.prototype={}
A.eZ.prototype={
aB(a){this.a3(a)
this.c.C(a,this.a)},
V(){this.a2()
var s=this.c
s.b=s.c=null}}
A.hi.prototype={}
A.ht.prototype={}
A.eh.prototype={
cn(a,b){var s,r
t.j.a(a)
t.x.a(b)
s=J.kN(a)
r=A.iL(J.kO(s))
this.e=r
if(r)this.c.n(0,s)
else this.d.n(0,s)}}
A.d8.prototype={
b8(){var s,r,q,p,o=this
o.cc()
s=o.b
r=s.a
s.f.unobserve(r)
s.f.disconnect()
s=o.c
q=window
q.toString
p=s.x
p.toString
B.j.br(q)
q.cancelAnimationFrame(p)
s.sbz(null)
s.sbA(null)
s=o.a
s.children.toString
A.lE(s,r)
o.x.aD(o)
o.x=new A.bo()},
ai(){var s,r=this.b,q=r.a,p=document,o=p.documentElement
o.toString
B.e.Z(A.it(q,o).a)
p=p.documentElement
p.toString
B.e.Z(A.it(q,p).b)
p=q.clientWidth
p.toString
o=window.devicePixelRatio
o.toString
o=B.c.Z(p*o)
p=q.clientHeight
p.toString
s=window.devicePixelRatio
s.toString
s=B.c.Z(p*s)
r.b=new A.cj(new A.ab(o,s))
B.f.sU(q,o)
B.f.sS(q,A.a4(r.b.b.b))
r.f.takeRecords().toString
this.x.bc(this)},
a5(a){var s=this
s.x.aD(s)
s.x=a
a.a6(s)},
cc(){var s,r,q
for(s=this.d,r=s.length,q=0;q<s.length;s.length===r||(0,A.aR)(s),++q)s[q].aU(0)
B.a.aW(s)},
cg(a){return this.b8()},
cr(a){return this.ai()},
cj(a){return this.ai()},
cz(a){return this.x.a7(this)},
cB(a){return this.x.a8(this)},
cl(a){return this.x.ba(this)},
cp(a){return this.x.bb(this)},
ct(a){},
cv(a){var s=this
s.x.be(s,a)
s.x.b9(s,a)},
ca(a,b){A.iM(a)
A.iM(b)
this.x.bd(this,a,b)},
c8(){var s,r,q=this.x
if(q instanceof A.bo)s=-1
else s=q instanceof A.c8?1:0
r=A.iB(["status",s,"fps",this.c.gd9(),"size","??"],t.N,t.K)
return A.iS(A.lb(r))}}
A.aT.prototype={
a6(a){},
aD(a){},
be(a,b){},
bc(a){},
ba(a){},
bb(a){},
a8(a){},
a7(a){},
b9(a,b){},
bd(a,b,c){}}
A.bo.prototype={}
A.fD.prototype={}
A.du.prototype={}
A.c_.prototype={
a6(a){a.r.a8(a)
a.ai()},
aD(a){a.r.a7(a)},
be(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=a.r,e=a.w,d=f.ay,c=t.i
f.ch.sE(0,A.Y(d.a,c))
s=f.Q
r=s.r
q=s.f
r.aA(s.x.O(0,q))
p=s.w
r=r.m(0,s.y).m(0,b)
o=r.a
o===$&&A.x()
p.a=o
n=r.b
n===$&&A.x()
p.b=n
r=r.c
r===$&&A.x()
p.c=r
q.a+=o
q.b+=n
q.c+=r
r=s.d
r.aA(q.O(0,e.d))
r.W()
s.bg()
s=s.a
d.sE(0,A.Y(f.ax.m(0,s).a,c))
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
if(typeof q!=="number")return q.O()
B.a.k(r,14,q-l)
q=d.d.a
d=d.b.a
if(14>=d.length)return A.d(d,14)
d=d[14]
if(typeof d!=="number")return d.O()
B.a.k(q,14,d-l)
d=f.cy
q=d.a
d.b.sE(0,A.Y(q.a,c))
r=d.c+1.5707963267948966*b
d.c=r
h=A.jC(A.ju(r,0.7853981633974483,0.7853981633974483).b5())
g=A.jD(50)
g.aE(e.at)
q.sE(0,A.Y(g.m(0,h).a,c))
f=f.cx
f.b.sE(0,A.Y(s.m(0,f.c).a,c))},
bc(a){a.r.bf(a.b.b)},
bb(a){a.a5(new A.cm())},
a8(a){a.r.a8(a)},
a7(a){a.r.a7(a)},
b9(a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=null,a2=36160,a3=a7.r,a4=a3.a,a5=a7.w,a6=a5.b
a4.sbV(0,a6)
s=a3.c
r=s.c.a
r.toString
B.b.H(r,a2,s.d)
a4.saV(0,A.is())
a4.sY(new A.bU())
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
B.b.F(j,m.c,!1,k)
k=r.d
j=k.b.a
j.toString
B.b.a0(j,k.c,1.44)
j=a5.Q
i=r.e
h=l.a(j.gT())
g=i.b.a
g.toString
B.b.N(g,i.c,h)
h=a5.as
r=r.f
g=l.a(h.gT())
f=r.b.a
f.toString
B.b.N(f,r.c,g)
a4.sI(n.f)
g=a3.fr
g.R()
g.G()
g=l.a(o.m(0,n.b).a)
f=m.b.a
f.toString
B.b.F(f,m.c,!1,g)
a4.sI(n.e)
g=a3.fr
g.G()
g.P()
g=a3.cy
f=g.a
o=l.a(o.m(0,f).a)
e=m.b.a
e.toString
B.b.F(e,m.c,!1,o)
o=k.b.a
o.toString
B.b.a0(o,k.c,1.04)
o=a5.CW
e=l.a(o.gT())
d=i.b.a
d.toString
B.b.N(d,i.c,e)
e=a5.cx
d=l.a(e.gT())
c=r.b.a
c.toString
B.b.N(c,r.c,d)
a4.sY(a1)
a4.sad(A.j6())
a4.sI(a1)
d=a3.dx
d.R()
d.G()
d.P()
a4.a.flush()
a4.sad(A.iq())
a4.sI(new A.aE(1029))
d=s.c.a
d.toString
B.b.H(d,a2,a1)
d=a3.d
c=d.c.a
c.toString
B.b.H(c,a2,d.d)
a4.saV(0,A.is())
a4.sY(new A.bU())
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
B.b.F(a0,a.c,!1,p)
s=s.f.e
s.toString
p=c.e
a=p.b.a
a.toString
B.b.ar(a,p.c,s)
c=c.d
a5=l.a(a5.cy.gT())
s=c.b.a
s.toString
B.b.N(s,c.c,a5)
a5=a3.dy
a5.R()
a5.G()
a5.P()
a5=q.c.a
a5.toString
B.b.a1(a5,q.d)
q=l.a(b.m(0,n.a).a)
a5=m.b.a
a5.toString
B.b.F(a5,m.c,!1,q)
q=k.b.a
q.toString
B.b.a0(q,k.c,1.44)
j=l.a(j.gT())
q=i.b.a
q.toString
B.b.N(q,i.c,j)
h=l.a(h.gT())
j=r.b.a
j.toString
B.b.N(j,r.c,h)
a4.sI(n.e)
h=a3.fr
h.R()
h.G()
h=l.a(b.m(0,n.b).a)
j=m.b.a
j.toString
B.b.F(j,m.c,!1,h)
a4.sI(n.f)
h=a3.fr
h.G()
h.P()
h=l.a(b.m(0,f).a)
j=m.b.a
j.toString
B.b.F(j,m.c,!1,h)
h=k.b.a
h.toString
B.b.a0(h,k.c,1.04)
o=l.a(o.gT())
k=i.b.a
k.toString
B.b.N(k,i.c,o)
e=l.a(e.gT())
o=r.b.a
o.toString
B.b.N(o,r.c,e)
a4.sY(a1)
a4.sad(A.j6())
a4.sI(a1)
e=a3.dx
e.R()
e.G()
e.P()
a4.a.flush()
a4.sad(A.iq())
a4.sI(new A.aE(1029))
e=d.c.a
e.toString
B.b.H(e,a2,a1)
e=a3.f
r=e.c.a
r.toString
B.b.H(r,a2,e.d)
a4.saV(0,A.is())
a4.sY(new A.bU())
r=a3.y
o=r.a
i=o.c.a
i.toString
B.b.a1(i,o.d)
o=r.c
i=l.a(b.m(0,n.a).a)
k=o.b.a
k.toString
B.b.F(k,o.c,!1,i)
i=a3.ay
k=r.d
h=l.a(i.m(0,n.a).a)
m=k.b.a
m.toString
B.b.F(m,k.c,!1,h)
h=a3.ch
m=r.e
j=l.a(h.m(0,n.c).a)
q=m.b.a
q.toString
B.b.F(q,m.c,!1,j)
r=r.f
j=r.b.a
j.toString
B.b.a0(j,r.c,1/(2.8*(a8+0.00001)))
a4.sI(n.e)
r=a3.fr
r.R()
r.G()
r=l.a(b.m(0,n.b).a)
j=o.b.a
j.toString
B.b.F(j,o.c,!1,r)
r=l.a(i.m(0,n.b).a)
j=k.b.a
j.toString
B.b.F(j,k.c,!1,r)
r=l.a(h.m(0,n.d).a)
j=m.b.a
j.toString
B.b.F(j,m.c,!1,r)
a4.sI(n.f)
n=a3.fr
n.G()
n.P()
a4.sI(new A.aE(1029))
b=l.a(b.m(0,f).a)
n=o.b.a
n.toString
B.b.F(n,o.c,!1,b)
f=l.a(i.m(0,f).a)
i=k.b.a
i.toString
B.b.F(i,k.c,!1,f)
g=l.a(h.m(0,g.b).a)
h=m.b.a
h.toString
B.b.F(h,m.c,!1,g)
g=a3.dx
g.R()
g.G()
g.P()
a4.a.flush()
a4.sY(a1)
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
B.b.bU(k,h.c,!1,f)
d=d.f.e
d.toString
f=m.d
h=f.b.a
h.toString
B.b.ar(h,f.c,d)
e=e.f.e
e.toString
d=m.e
f=d.b.a
f.toString
B.b.ar(f,d.c,e)
e=m.f
a6=a6.b
d=a6.a
a6=a6.b
a6=l.a(A.r([d,a6,1/d,1/a6],t.d7))
d=e.b.a
d.toString
B.b.N(d,e.c,a6)
m=m.r
a6=m.b.a
a6.toString
B.b.a0(a6,m.c,0.7)
m=a3.db
m.R()
m.G()
m.P()
a4.a.flush()
m=g.c.a
m.toString
B.b.H(m,a2,a1)
a4.sbV(0,a7.b.b)
m=a3.r
a6=m.a
e=a6.c.a
e.toString
B.b.a1(e,a6.d)
a6=m.f
l=l.a(a3.as.a)
e=a6.b.a
e.toString
B.b.bU(e,a6.c,!1,l)
g=g.f.e
g.toString
m=m.c
l=m.b.a
l.toString
B.b.ar(l,m.c,g)
a3=a3.db
a3.R()
a3.G()
a3.P()
a4.a.flush()},
bd(a,b,c){var s=a.w.c,r=s.a,q=s.b,p=new A.aF(r,q,s.c)
p.a=r+b*24
p.b=q+c*10
q=a.r.Q
q.x.az(p)
q.y=1-B.c.d3(0.6,0,1)}}
A.c8.prototype={
a6(a){var s=0,r=A.mu(t.z),q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
var $async$a6=A.mI(function(b,a0){if(b===1)return A.m4(a0,r)
while(true)switch(s){case 0:e=a.r
d=a.w
c=a.b
e.bf(c.b)
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
q.a.sE(0,A.Y(n.m(0,q.c).a,m))
n=d.c
p=q.f
p.az(n)
q.x.az(n)
n=q.r
n.a=n.b=n.c=0
n=q.d
n.aA(p.O(0,d.d))
n.W()
q.bg()
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
j=A.b5()
q=t.n
j.sE(0,A.r([1,0,0,0,0,1,0,0,0,0,-1,0,0,0,0,1],q))
p.b.sE(0,A.Y(j.m(0,p.a).a,m))
p.c.sE(0,A.Y(p.a.a,m))
p.d.sE(0,A.Y(p.b.a,m))
p=e.cx
p.c.sE(0,A.r([1,0,0,0,0,-1,0,0,0,0,1,0,0,0,0,1],q))
p=p.a
p.sE(0,A.Y(A.jD(400).m(0,A.jC(A.ju(0,-1.5707963267948966,0).b5())).a,m))
p.aE(new A.aF(20,1,0))
p=e.b
m=t.a
e.db=new A.bz(p.ah(new Uint16Array(A.aw(A.r([0,1,3,2],m)))),p.ag(new Float32Array(A.aw(A.r([0,1,0,0,1,0,1,1],q)))),A.iG(),5)
k=t.U
e.dx=new A.bz(p.ah(new Uint16Array(A.aw(A.r([0,1,3,3,1,2,4,5,7,7,5,6,8,9,11,11,9,10,12,13,15,15,13,14,16,17,19,19,17,18,20,21,23,23,21,22],m)))),p.ag(new Float32Array(A.aw(A.r([-1,1,1,-1,1,-1,-1,1,-1,-1,1,-1,1,1,-1,1,1,1,1,1,1,1,1,-1,1,1,-1,1,-1,-1,1,-1,-1,1,-1,1,1,-1,1,1,1,1,-1,-1,1,1,-1,-1,-1,-1,-1,-1,-1,1,-1,-1,1,-1,1,1,-1,1,-1,-1,1,-1,-1,-1,-1,-1,-1,-1,1,1,-1,-1,1,1,1,1,-1,1,1,-1,1,1,1,1,-1,-1,1,1,-1,1,-1,-1,1,-1,1,1,-1,-1,-1,-1,1,1,-1,-1,-1,-1,1,-1,1,1,-1,-1,-1,1,1,1],q)))),new A.aI(A.r([new A.a6(0,3,20,0),new A.a6(1,2,20,12)],k)),4)
e.dy=new A.bz(p.ah(new Uint16Array(A.aw(A.r([0,1,3,2],m)))),p.ag(new Float32Array(A.aw(A.r([-1,1,-1,-1,1,-1,1,1],q)))),new A.aI(A.r([new A.a6(0,2,8,0)],k)),5)
$.je=0.3
$.jf=3.3
i=new A.ab(1,-1)
h=new A.ab(-1,1)
A.fE(12,new A.ab(-1,-1),h,i)
A.fE(12,new A.ab(1,1),i,h)
g=new Uint16Array(A.aw($.iy))
f=new Float32Array(A.aw($.fG))
B.a.aW($.iy)
B.a.aW($.fG)
$.fF=0
e.fr=new A.bz(p.ah(g),p.ag(f),A.jg(),4)
if(c.e)a.a5(new A.c_())
else a.a5(new A.cm())
return A.m5(null,r)}})
return A.m6($async$a6,r)}}
A.fX.prototype={}
A.h3.prototype={}
A.h5.prototype={}
A.h6.prototype={}
A.hb.prototype={
bf(a){var s=a.b,r=s.b/s.a
s=this.as
B.a.k(s.a,0,2*r)
B.a.k(s.a,4,2)
B.a.k(s.a,6,-r)
B.a.k(s.a,7,-1)},
a8(a){var s,r,q,p,o,n,m=this,l=m.a,k=A.r([],t.s)
l.c4(a.b.a,new A.h7(!0,!0,k))
l.sad(A.iq())
l.sI(new A.aE(1029))
l.sY(null)
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
B.b.ao(s,34963,k.d)
s=k.c.a
s.toString
B.b.ao(s,34962,k.e)
k.c.a.bufferData(34963,k.a,35044)
k.c.a.bufferData(34962,k.b,35044)
r=a.w.b
k=m.d
k.b7(l,0,r,!0)
s=m.c
s.b7(l,0,r,!0)
q=m.e
q.c5(l,0,r)
p=m.f
p.aC(l,0,r,9728,!0)
o=m.r
o.c3(l)
o.f.C(l,o.a)
o=m.w
o.a3(l)
n=o.a
o.c.C(l,n)
o.d.C(l,n)
o.e.C(l,n)
o.f.C(l,n)
n=m.x
n.a3(l)
o=n.a
n.c.C(l,o)
n.d.C(l,o)
n.e.C(l,o)
o=m.y
o.a3(l)
n=o.a
o.c.C(l,n)
o.d.C(l,n)
o.e.C(l,n)
o.f.C(l,n)
n=m.z
n.a3(l)
o=n.a
n.c.C(l,o)
n.d.C(l,o)
n.e.C(l,o)
n.f.C(l,o)
n.r.C(l,o)
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
p.c2()
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
s.V()
m.V()
r.V()
q.V()
q=n.b
r=q.c.a
r.toString
B.b.ao(r,34963,null)
r=q.c.a
r.toString
B.b.ao(r,34962,null)
r=q.c.a
r.toString
B.b.bI(r,q.d)
r=q.c.a
r.toString
B.b.bI(r,q.e)
q.c=null
n.a.a=null}}
A.hd.prototype={}
A.cm.prototype={
ba(a){a.a5(new A.c_())}};(function aliases(){var s=J.bq.prototype
s.bX=s.j
s=J.b1.prototype
s.c_=s.j
s=A.v.prototype
s.c0=s.j
s=A.ap.prototype
s.bY=s.l
s.bZ=s.k
s=A.bH.prototype
s.c1=s.k
s=A.dr.prototype
s.bW=s.cd
s=A.dC.prototype
s.a3=s.aB
s.a2=s.V
s=A.eZ.prototype
s.c3=s.aB
s.c2=s.V})();(function installTearOffs(){var s=hunkHelpers._static_1,r=hunkHelpers._static_0,q=hunkHelpers._static_2,p=hunkHelpers._instance_2u,o=hunkHelpers._instance_0u,n=hunkHelpers._instance_1u
s(A,"mJ","lA",4)
s(A,"mK","lB",4)
s(A,"mL","lC",4)
r(A,"ki","mC",0)
q(A,"mN","mx",7)
r(A,"mM","mw",0)
p(A.F.prototype,"gcM","a_",7)
o(A.bF.prototype,"gcR","cS",0)
s(A,"n1","k2",31)
n(A.dt.prototype,"gbi","ce",26)
p(A.eh.prototype,"gcm","cn",28)
var m
o(m=A.d8.prototype,"gc6","b8",0)
n(m,"gcf","cg",1)
n(m,"gcq","cr",1)
n(m,"gci","cj",1)
n(m,"gcw","cz",1)
n(m,"gcA","cB",1)
n(m,"gck","cl",1)
n(m,"gco","cp",1)
n(m,"gcs","ct",8)
n(m,"gcu","cv",8)
p(m,"gc9","ca",29)
o(m,"gc7","c8",30)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.mixinHard,q=hunkHelpers.inherit,p=hunkHelpers.inheritMany
q(A.v,null)
p(A.v,[A.iz,J.bq,J.bN,A.B,A.aD,A.hc,A.h,A.b3,A.c9,A.M,A.bB,A.bu,A.bP,A.cJ,A.dy,A.hm,A.fZ,A.bY,A.cS,A.hQ,A.w,A.fM,A.c7,A.a0,A.ew,A.hV,A.hT,A.ei,A.bO,A.aH,A.bE,A.cv,A.bd,A.F,A.ej,A.cz,A.cP,A.bF,A.eS,A.d_,A.cG,A.e,A.cZ,A.bT,A.cn,A.hB,A.fA,A.K,A.eV,A.co,A.fs,A.iu,A.cC,A.n,A.bZ,A.ap,A.by,A.dt,A.fp,A.bl,A.fC,A.bv,A.bw,A.ab,A.aF,A.cj,A.h4,A.ct,A.bD,A.h_,A.a6,A.de,A.fq,A.aE,A.fI,A.hu,A.fo,A.bU,A.dr,A.dC,A.bz,A.b8,A.hj,A.hp,A.aI,A.h7,A.hv,A.eh,A.d8,A.aT,A.fD,A.h3,A.h5,A.hb,A.hd])
p(J.bq,[J.dx,J.c2,J.a,J.bs,J.bt,J.c3,J.br])
p(J.a,[J.b1,J.H,A.dH,A.cd,A.b,A.fk,A.f,A.aV,A.an,A.z,A.em,A.a7,A.fv,A.fw,A.eo,A.bW,A.eq,A.fx,A.eu,A.W,A.fH,A.ey,A.c0,A.b_,A.fJ,A.fO,A.fT,A.eC,A.eD,A.Z,A.eE,A.eG,A.a_,A.eK,A.eN,A.a1,A.eO,A.a2,A.eR,A.P,A.eX,A.hk,A.a3,A.f_,A.hl,A.hq,A.f4,A.f6,A.f8,A.fa,A.fc,A.c5,A.a9,A.eA,A.aa,A.eI,A.h0,A.eT,A.ad,A.f1,A.fm,A.ek,A.df,A.ds,A.dU,A.dW,A.cl,A.bA,A.e_,A.e8,A.eb])
p(J.b1,[J.dS,J.cr,J.ao])
q(J.fK,J.H)
p(J.c3,[J.c1,J.dz])
p(A.B,[A.c6,A.as,A.dA,A.ed,A.en,A.dY,A.et,A.da,A.am,A.dP,A.ee,A.ec,A.b9,A.dj])
p(A.aD,[A.dh,A.di,A.e5,A.id,A.ig,A.hx,A.hw,A.hY,A.hG,A.hN,A.hg,A.hS,A.hA,A.i_,A.fL,A.i0,A.i1,A.i5,A.i6,A.i7])
p(A.dh,[A.ij,A.hy,A.hz,A.hU,A.hC,A.hJ,A.hI,A.hF,A.hE,A.hD,A.hM,A.hL,A.hK,A.hh,A.hP,A.i3,A.hR])
p(A.h,[A.k,A.b4,A.cI])
p(A.k,[A.aq,A.b2,A.cF])
q(A.bX,A.b4)
q(A.ar,A.aq)
q(A.bJ,A.bu)
q(A.cs,A.bJ)
q(A.bQ,A.cs)
q(A.bR,A.bP)
p(A.di,[A.h1,A.ie,A.hZ,A.i4,A.hH,A.fQ,A.fY,A.fU,A.fV,A.h8,A.hf,A.i9,A.fn,A.fB])
q(A.ch,A.as)
p(A.e5,[A.e2,A.bk])
p(A.w,[A.S,A.cE])
p(A.cd,[A.dI,A.bx])
p(A.bx,[A.cL,A.cN])
q(A.cM,A.cL)
q(A.cb,A.cM)
q(A.cO,A.cN)
q(A.cc,A.cO)
p(A.cb,[A.ca,A.dJ])
p(A.cc,[A.dK,A.dL,A.dM,A.ce,A.dN,A.cf,A.dO])
q(A.cV,A.et)
p(A.aH,[A.bI,A.cB])
q(A.cw,A.bI)
q(A.aK,A.cw)
q(A.cx,A.bE)
q(A.ae,A.cx)
q(A.cu,A.cv)
q(A.cy,A.cz)
q(A.eM,A.d_)
q(A.cH,A.cE)
p(A.am,[A.ck,A.dw])
p(A.b,[A.p,A.dp,A.T,A.cQ,A.U,A.N,A.cT,A.eg,A.aJ,A.al,A.dd,A.aC])
p(A.p,[A.i,A.ah])
q(A.m,A.i)
p(A.m,[A.d7,A.d9,A.aW,A.bn,A.dq,A.dv,A.b6,A.dZ])
p(A.f,[A.aU,A.aX,A.bm])
q(A.fr,A.an)
q(A.bS,A.em)
p(A.a7,[A.ft,A.fu])
q(A.ep,A.eo)
q(A.bV,A.ep)
q(A.er,A.eq)
q(A.dl,A.er)
q(A.R,A.aV)
q(A.ev,A.eu)
q(A.dn,A.ev)
q(A.ez,A.ey)
q(A.aZ,A.ez)
q(A.dE,A.eC)
q(A.dF,A.eD)
q(A.eF,A.eE)
q(A.dG,A.eF)
q(A.eH,A.eG)
q(A.cg,A.eH)
q(A.eL,A.eK)
q(A.dT,A.eL)
q(A.dX,A.eN)
q(A.cR,A.cQ)
q(A.e0,A.cR)
q(A.eP,A.eO)
q(A.e1,A.eP)
q(A.e3,A.eR)
q(A.eY,A.eX)
q(A.e6,A.eY)
q(A.cU,A.cT)
q(A.e7,A.cU)
q(A.f0,A.f_)
q(A.e9,A.f0)
q(A.ef,A.b6)
q(A.f5,A.f4)
q(A.el,A.f5)
q(A.cA,A.bW)
q(A.f7,A.f6)
q(A.ex,A.f7)
q(A.f9,A.f8)
q(A.cK,A.f9)
q(A.fb,A.fa)
q(A.eQ,A.fb)
q(A.fd,A.fc)
q(A.eW,A.fd)
q(A.es,A.cB)
p(A.ap,[A.c4,A.bH])
q(A.b0,A.bH)
q(A.eB,A.eA)
q(A.dB,A.eB)
q(A.eJ,A.eI)
q(A.dQ,A.eJ)
q(A.eU,A.eT)
q(A.e4,A.eU)
q(A.f2,A.f1)
q(A.ea,A.f2)
q(A.dc,A.ek)
q(A.dR,A.aC)
q(A.he,A.fp)
q(A.cq,A.bv)
q(A.ba,A.bw)
q(A.fy,A.fo)
q(A.bj,A.dr)
p(A.hp,[A.fz,A.hr,A.fR,A.fS,A.h9])
p(A.dC,[A.fW,A.eZ,A.ht,A.fX,A.h6])
q(A.hi,A.eZ)
p(A.aT,[A.bo,A.c_,A.c8,A.cm])
q(A.du,A.aI)
s(A.cL,A.e)
s(A.cM,A.M)
s(A.cN,A.e)
s(A.cO,A.M)
s(A.bJ,A.cZ)
s(A.em,A.fs)
s(A.eo,A.e)
s(A.ep,A.n)
s(A.eq,A.e)
s(A.er,A.n)
s(A.eu,A.e)
s(A.ev,A.n)
s(A.ey,A.e)
s(A.ez,A.n)
s(A.eC,A.w)
s(A.eD,A.w)
s(A.eE,A.e)
s(A.eF,A.n)
s(A.eG,A.e)
s(A.eH,A.n)
s(A.eK,A.e)
s(A.eL,A.n)
s(A.eN,A.w)
s(A.cQ,A.e)
s(A.cR,A.n)
s(A.eO,A.e)
s(A.eP,A.n)
s(A.eR,A.w)
s(A.eX,A.e)
s(A.eY,A.n)
s(A.cT,A.e)
s(A.cU,A.n)
s(A.f_,A.e)
s(A.f0,A.n)
s(A.f4,A.e)
s(A.f5,A.n)
s(A.f6,A.e)
s(A.f7,A.n)
s(A.f8,A.e)
s(A.f9,A.n)
s(A.fa,A.e)
s(A.fb,A.n)
s(A.fc,A.e)
s(A.fd,A.n)
r(A.bH,A.e)
s(A.eA,A.e)
s(A.eB,A.n)
s(A.eI,A.e)
s(A.eJ,A.n)
s(A.eT,A.e)
s(A.eU,A.n)
s(A.f1,A.e)
s(A.f2,A.n)
s(A.ek,A.w)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{j:"int",u:"double",D:"num",q:"String",i8:"bool",K:"Null",l:"List"},mangledNames:{},types:["~()","~(@)","~(q,@)","@(@)","~(~())","K(@)","K()","~(v,ac)","~(u)","a8<K>()","@(@,q)","@(q)","K(~())","K(@,ac)","~(j,@)","K(v,ac)","F<@>(@)","~(v?,v?)","~(bC,@)","~(q,q)","~(f)","~(@,@)","@(v?)","c4(@)","b0<@>(@)","ap(@)","~(D)","u(D,u)","~(l<@>,b_)","~(u,u)","@()","v?(@)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti")}
A.lX(v.typeUniverse,JSON.parse('{"dS":"b1","cr":"b1","ao":"b1","n9":"f","nm":"f","nc":"aC","na":"b","ns":"b","nu":"b","nr":"i","ne":"m","np":"p","nl":"p","nI":"N","nk":"al","ng":"ah","nw":"ah","nq":"aZ","nh":"z","ni":"P","nd":"b6","dx":{"i8":[],"y":[]},"c2":{"K":[],"y":[]},"H":{"l":["1"],"k":["1"],"h":["1"]},"fK":{"H":["1"],"l":["1"],"k":["1"],"h":["1"]},"bN":{"X":["1"]},"c3":{"u":[],"D":[]},"c1":{"u":[],"j":[],"D":[],"y":[]},"dz":{"u":[],"D":[],"y":[]},"br":{"q":[],"y":[]},"c6":{"B":[]},"k":{"h":["1"]},"aq":{"k":["1"],"h":["1"]},"b3":{"X":["1"]},"b4":{"h":["2"],"h.E":"2"},"bX":{"b4":["1","2"],"k":["2"],"h":["2"],"h.E":"2"},"c9":{"X":["2"]},"ar":{"aq":["2"],"k":["2"],"h":["2"],"aq.E":"2","h.E":"2"},"bB":{"bC":[]},"bQ":{"cs":["1","2"],"bJ":["1","2"],"bu":["1","2"],"cZ":["1","2"],"J":["1","2"]},"bP":{"J":["1","2"]},"bR":{"bP":["1","2"],"J":["1","2"]},"cI":{"h":["1"],"h.E":"1"},"cJ":{"X":["1"]},"dy":{"jh":[]},"ch":{"as":[],"B":[]},"dA":{"B":[]},"ed":{"B":[]},"cS":{"ac":[]},"aD":{"aY":[]},"dh":{"aY":[]},"di":{"aY":[]},"e5":{"aY":[]},"e2":{"aY":[]},"bk":{"aY":[]},"en":{"B":[]},"dY":{"B":[]},"S":{"w":["1","2"],"jm":["1","2"],"J":["1","2"],"w.K":"1","w.V":"2"},"b2":{"k":["1"],"h":["1"],"h.E":"1"},"c7":{"X":["1"]},"dH":{"y":[]},"cd":{"E":[]},"dI":{"E":[],"y":[]},"bx":{"t":["1"],"E":[]},"cb":{"e":["u"],"l":["u"],"t":["u"],"k":["u"],"E":[],"h":["u"],"M":["u"]},"cc":{"e":["j"],"l":["j"],"t":["j"],"k":["j"],"E":[],"h":["j"],"M":["j"]},"ca":{"e":["u"],"iv":[],"l":["u"],"t":["u"],"k":["u"],"E":[],"h":["u"],"M":["u"],"y":[],"e.E":"u"},"dJ":{"e":["u"],"l":["u"],"t":["u"],"k":["u"],"E":[],"h":["u"],"M":["u"],"y":[],"e.E":"u"},"dK":{"e":["j"],"l":["j"],"t":["j"],"k":["j"],"E":[],"h":["j"],"M":["j"],"y":[],"e.E":"j"},"dL":{"e":["j"],"l":["j"],"t":["j"],"k":["j"],"E":[],"h":["j"],"M":["j"],"y":[],"e.E":"j"},"dM":{"e":["j"],"l":["j"],"t":["j"],"k":["j"],"E":[],"h":["j"],"M":["j"],"y":[],"e.E":"j"},"ce":{"e":["j"],"iF":[],"l":["j"],"t":["j"],"k":["j"],"E":[],"h":["j"],"M":["j"],"y":[],"e.E":"j"},"dN":{"e":["j"],"l":["j"],"t":["j"],"k":["j"],"E":[],"h":["j"],"M":["j"],"y":[],"e.E":"j"},"cf":{"e":["j"],"l":["j"],"t":["j"],"k":["j"],"E":[],"h":["j"],"M":["j"],"y":[],"e.E":"j"},"dO":{"e":["j"],"ho":[],"l":["j"],"t":["j"],"k":["j"],"E":[],"h":["j"],"M":["j"],"y":[],"e.E":"j"},"et":{"B":[]},"cV":{"as":[],"B":[]},"F":{"a8":["1"]},"bO":{"B":[]},"aK":{"cw":["1"],"bI":["1"],"aH":["1"]},"ae":{"cx":["1"],"bE":["1"],"ak":["1"],"aL":["1"]},"cv":{"jy":["1"],"jT":["1"],"aL":["1"]},"cu":{"cv":["1"],"jy":["1"],"jT":["1"],"aL":["1"]},"cw":{"bI":["1"],"aH":["1"]},"cx":{"bE":["1"],"ak":["1"],"aL":["1"]},"bE":{"ak":["1"],"aL":["1"]},"bI":{"aH":["1"]},"cy":{"cz":["1"]},"bF":{"ak":["1"]},"d_":{"jJ":[]},"eM":{"d_":[],"jJ":[]},"cE":{"w":["1","2"],"J":["1","2"]},"cH":{"cE":["1","2"],"w":["1","2"],"J":["1","2"],"w.K":"1","w.V":"2"},"cF":{"k":["1"],"h":["1"],"h.E":"1"},"cG":{"X":["1"]},"w":{"J":["1","2"]},"bu":{"J":["1","2"]},"cs":{"bJ":["1","2"],"bu":["1","2"],"cZ":["1","2"],"J":["1","2"]},"u":{"D":[]},"j":{"D":[]},"l":{"k":["1"],"h":["1"]},"da":{"B":[]},"as":{"B":[]},"am":{"B":[]},"ck":{"B":[]},"dw":{"B":[]},"dP":{"B":[]},"ee":{"B":[]},"ec":{"B":[]},"b9":{"B":[]},"dj":{"B":[]},"cn":{"B":[]},"eV":{"ac":[]},"aU":{"f":[]},"aX":{"f":[]},"R":{"aV":[]},"p":{"b":[]},"T":{"b":[]},"U":{"b":[]},"N":{"b":[]},"m":{"i":[],"p":[],"b":[]},"d7":{"i":[],"p":[],"b":[]},"d9":{"i":[],"p":[],"b":[]},"aW":{"i":[],"p":[],"b":[],"dg":[]},"ah":{"p":[],"b":[]},"bn":{"i":[],"p":[],"b":[]},"bV":{"e":["aj<D>"],"n":["aj<D>"],"l":["aj<D>"],"t":["aj<D>"],"k":["aj<D>"],"h":["aj<D>"],"n.E":"aj<D>","e.E":"aj<D>"},"bW":{"aj":["D"]},"dl":{"e":["q"],"n":["q"],"l":["q"],"t":["q"],"k":["q"],"h":["q"],"n.E":"q","e.E":"q"},"i":{"p":[],"b":[]},"dn":{"e":["R"],"n":["R"],"l":["R"],"t":["R"],"k":["R"],"h":["R"],"n.E":"R","e.E":"R"},"dp":{"b":[]},"dq":{"i":[],"p":[],"b":[]},"aZ":{"e":["p"],"n":["p"],"l":["p"],"t":["p"],"k":["p"],"h":["p"],"n.E":"p","e.E":"p"},"dv":{"i":[],"p":[],"b":[],"dg":[]},"b6":{"i":[],"p":[],"b":[]},"dE":{"w":["q","@"],"J":["q","@"],"w.K":"q","w.V":"@"},"dF":{"w":["q","@"],"J":["q","@"],"w.K":"q","w.V":"@"},"dG":{"e":["Z"],"n":["Z"],"l":["Z"],"t":["Z"],"k":["Z"],"h":["Z"],"n.E":"Z","e.E":"Z"},"cg":{"e":["p"],"n":["p"],"l":["p"],"t":["p"],"k":["p"],"h":["p"],"n.E":"p","e.E":"p"},"dT":{"e":["a_"],"n":["a_"],"l":["a_"],"t":["a_"],"k":["a_"],"h":["a_"],"n.E":"a_","e.E":"a_"},"dX":{"w":["q","@"],"J":["q","@"],"w.K":"q","w.V":"@"},"dZ":{"i":[],"p":[],"b":[]},"e0":{"e":["T"],"n":["T"],"l":["T"],"b":[],"t":["T"],"k":["T"],"h":["T"],"n.E":"T","e.E":"T"},"e1":{"e":["a1"],"n":["a1"],"l":["a1"],"t":["a1"],"k":["a1"],"h":["a1"],"n.E":"a1","e.E":"a1"},"e3":{"w":["q","q"],"J":["q","q"],"w.K":"q","w.V":"q"},"e6":{"e":["N"],"n":["N"],"l":["N"],"t":["N"],"k":["N"],"h":["N"],"n.E":"N","e.E":"N"},"e7":{"e":["U"],"n":["U"],"l":["U"],"b":[],"t":["U"],"k":["U"],"h":["U"],"n.E":"U","e.E":"U"},"e9":{"e":["a3"],"n":["a3"],"l":["a3"],"t":["a3"],"k":["a3"],"h":["a3"],"n.E":"a3","e.E":"a3"},"ef":{"i":[],"p":[],"b":[],"dg":[]},"eg":{"b":[]},"aJ":{"b":[]},"al":{"b":[]},"el":{"e":["z"],"n":["z"],"l":["z"],"t":["z"],"k":["z"],"h":["z"],"n.E":"z","e.E":"z"},"cA":{"aj":["D"]},"ex":{"e":["W?"],"n":["W?"],"l":["W?"],"t":["W?"],"k":["W?"],"h":["W?"],"n.E":"W?","e.E":"W?"},"cK":{"e":["p"],"n":["p"],"l":["p"],"t":["p"],"k":["p"],"h":["p"],"n.E":"p","e.E":"p"},"eQ":{"e":["a2"],"n":["a2"],"l":["a2"],"t":["a2"],"k":["a2"],"h":["a2"],"n.E":"a2","e.E":"a2"},"eW":{"e":["P"],"n":["P"],"l":["P"],"t":["P"],"k":["P"],"h":["P"],"n.E":"P","e.E":"P"},"cB":{"aH":["1"]},"es":{"cB":["1"],"aH":["1"]},"cC":{"ak":["1"]},"bZ":{"X":["1"]},"b0":{"e":["1"],"l":["1"],"k":["1"],"h":["1"],"e.E":"1"},"dB":{"e":["a9"],"n":["a9"],"l":["a9"],"k":["a9"],"h":["a9"],"n.E":"a9","e.E":"a9"},"dQ":{"e":["aa"],"n":["aa"],"l":["aa"],"k":["aa"],"h":["aa"],"n.E":"aa","e.E":"aa"},"e4":{"e":["q"],"n":["q"],"l":["q"],"k":["q"],"h":["q"],"n.E":"q","e.E":"q"},"ea":{"e":["ad"],"n":["ad"],"l":["ad"],"k":["ad"],"h":["ad"],"n.E":"ad","e.E":"ad"},"dc":{"w":["q","@"],"J":["q","@"],"w.K":"q","w.V":"@"},"dd":{"b":[]},"aC":{"b":[]},"dR":{"b":[]},"bm":{"f":[]},"cq":{"bv":[]},"ba":{"bw":[]},"bo":{"aT":[]},"du":{"aI":[]},"c_":{"aT":[]},"c8":{"aT":[]},"cm":{"aT":[]},"kU":{"E":[]},"l7":{"l":["j"],"k":["j"],"h":["j"],"E":[]},"ho":{"l":["j"],"k":["j"],"h":["j"],"E":[]},"lw":{"l":["j"],"k":["j"],"h":["j"],"E":[]},"l5":{"l":["j"],"k":["j"],"h":["j"],"E":[]},"iF":{"l":["j"],"k":["j"],"h":["j"],"E":[]},"l6":{"l":["j"],"k":["j"],"h":["j"],"E":[]},"lv":{"l":["j"],"k":["j"],"h":["j"],"E":[]},"iv":{"l":["u"],"k":["u"],"h":["u"],"E":[]},"l4":{"l":["u"],"k":["u"],"h":["u"],"E":[]}}'))
A.lW(v.typeUniverse,JSON.parse('{"k":1,"bx":1,"cz":1,"bH":1}'))
var u={c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type"}
var t=(function rtii(){var s=A.bi
return{h:s("@<~>"),t:s("bO"),J:s("a6"),d:s("aU"),e:s("aV"),E:s("aW"),cf:s("bQ<bC,@>"),bK:s("aX"),bl:s("k<@>"),R:s("B"),A:s("f"),Z:s("aY"),bz:s("a8<@>"),cW:s("c0"),x:s("b_"),B:s("jh"),V:s("h<@>"),U:s("H<a6>"),s:s("H<q>"),n:s("H<u>"),b:s("H<@>"),a:s("H<j>"),d7:s("H<D>"),T:s("c2"),g:s("ao"),da:s("t<@>"),a2:s("b0<@>"),bV:s("S<bC,@>"),cF:s("c5"),r:s("l<u>"),j:s("l<@>"),d3:s("l<D>"),f:s("J<@,@>"),a1:s("p"),P:s("K"),K:s("v"),w:s("by<D>"),L:s("nt"),q:s("aj<D>"),aM:s("bA"),l:s("ac"),N:s("q"),cm:s("bC"),bW:s("y"),b7:s("as"),Q:s("E"),cr:s("cr"),cg:s("aJ"),bj:s("al"),cI:s("es<bm>"),D:s("F<K>"),c:s("F<@>"),aQ:s("F<j>"),aR:s("cH<@,@>"),y:s("i8"),m:s("i8(v)"),i:s("u"),z:s("@"),O:s("@()"),v:s("@(v)"),C:s("@(v,ac)"),S:s("j"),G:s("0&*"),_:s("v*"),bc:s("a8<K>?"),X:s("v?"),c4:s("cl?"),F:s("bd<@,@>?"),o:s("@(f)?"),Y:s("~()?"),bF:s("~(aU)?"),cu:s("~(aX)?"),cx:s("~(f)?"),W:s("~(u)?"),H:s("D"),p:s("~"),M:s("~()"),bo:s("~(v)"),k:s("~(v,ac)"),aa:s("~(q,q)"),u:s("~(q,@)"),d8:s("~(u)"),I:s("~(D)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.f=A.aW.prototype
B.A=J.bq.prototype
B.a=J.H.prototype
B.e=J.c1.prototype
B.c=J.c3.prototype
B.h=J.br.prototype
B.B=J.ao.prototype
B.C=J.a.prototype
B.p=A.ca.prototype
B.q=A.ce.prototype
B.r=J.dS.prototype
B.b=A.bA.prototype
B.i=J.cr.prototype
B.j=A.aJ.prototype
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

B.R=new A.hc()
B.m=new A.hQ()
B.d=new A.eM()
B.z=new A.eV()
B.n=A.r(s([]),t.b)
B.D={}
B.o=new A.bR(B.D,[],A.bi("bR<bC,@>"))
B.E=new A.bB("call")
B.F=A.ag("nf")
B.G=A.ag("kU")
B.H=A.ag("iv")
B.I=A.ag("l4")
B.J=A.ag("l5")
B.K=A.ag("l6")
B.L=A.ag("l7")
B.M=A.ag("v")
B.N=A.ag("iF")
B.O=A.ag("lv")
B.P=A.ag("lw")
B.Q=A.ag("ho")})();(function staticFields(){$.hO=null
$.V=A.r([],A.bi("H<v>"))
$.jt=null
$.j9=null
$.j8=null
$.km=null
$.kg=null
$.kq=null
$.ia=null
$.ih=null
$.iW=null
$.bK=null
$.d1=null
$.d2=null
$.iR=!1
$.A=B.d
$.iH=null
$.iy=A.r([],t.a)
$.fG=A.r([],t.n)
$.fF=0
$.je=0
$.jf=0})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal
s($,"nj","fi",()=>A.kl("_$dart_dartClosure"))
s($,"nZ","il",()=>B.d.bQ(new A.ij(),A.bi("a8<K>")))
s($,"ny","kw",()=>A.at(A.hn({
toString:function(){return"$receiver$"}})))
s($,"nz","kx",()=>A.at(A.hn({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"nA","ky",()=>A.at(A.hn(null)))
s($,"nB","kz",()=>A.at(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"nE","kC",()=>A.at(A.hn(void 0)))
s($,"nF","kD",()=>A.at(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"nD","kB",()=>A.at(A.jE(null)))
s($,"nC","kA",()=>A.at(function(){try{null.$method$}catch(r){return r.message}}()))
s($,"nH","kF",()=>A.at(A.jE(void 0)))
s($,"nG","kE",()=>A.at(function(){try{(void 0).$method$}catch(r){return r.message}}()))
s($,"nJ","j1",()=>A.lz())
s($,"nn","j0",()=>t.D.a($.il()))
s($,"nX","kI",()=>A.ik(B.M))
s($,"nV","kH",()=>A.ma(A.iS(self)))
s($,"nK","j2",()=>A.kl("_$dart_dartObject"))
s($,"nW","j3",()=>function DartObject(a){this.o=a})
s($,"nx","kv",()=>A.ir(1,1))
s($,"nb","kt",()=>{var r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2="uPvwlTransform",d3=A.bi("bn").a(A.mQ().querySelector("#real-t-demo-retro-neon")),d4=A.ir(null,null)
A.jr()
r=A.jr()
q=t.z
p=A.jz(q)
q=A.jz(q)
o=A.iC(20,0,!0,t.i)
n=A.r([],A.bi("H<ak<@>>"))
m=new Uint16Array(A.k_(0))
l=new Float32Array(A.k_(0))
k=A.jn(d2)
A.iG()
j=A.ha("uSampler")
i=A.dD(d2)
h=A.iw("uNeonThickness")
g=A.hs("uNeonColor")
f=A.hs("uColor")
A.jg()
e=A.dD(d2)
d=A.hs("uColor")
c=A.ha("uReflectSampler")
A.jI()
b=A.dD(d2)
a=A.dD("uTpvwlTransform")
a0=A.dD("uPreviousTpvwlTransform")
a1=A.iw("uViewScale")
A.jI()
a2=A.jn(d2)
a3=A.ha("uColorSampler")
a4=A.ha("uVelocitySampler")
a5=A.hs("uViewBound")
a6=A.iw("uStep")
A.iG()
a7=A.jH()
a8=A.jH()
a9=A.js()
b0=A.b5()
b1=A.b5()
b2=A.bb()
b3=A.jG(0,0,1)
b4=A.jG(0,1,0)
b5=A.js()
b6=t.n
b7=A.r([1,0,0,0,1,0,0,0,1],b6)
b6=A.r([2,0,0,0,2,0,-1,-1,1],b6)
b8=A.b5()
b9=A.b5()
c0=A.b5()
c1=A.bb()
c2=A.bb()
c3=A.bb()
c4=A.bb()
c5=A.l_()
c6=A.bb()
c7=A.b5()
c8=A.b5()
c9=A.bb()
d0=A.bb()
A.jq(0,0)
d1=A.jq(1024,1024)
return new A.d8(d3,new A.eh(d4,new A.cj(r),p,q),new A.dt(o),n,new A.S(A.bi("S<q,ho>")),new A.S(A.bi("S<@,@>")),new A.hb(new A.hv(),new A.fy(m,l),new A.bj(),new A.bj(),new A.bj(),new A.bj(),new A.hi(k,j,new A.b8("    precision highp float;\n    \n    attribute vec2 aPositionMapping;\n\n    uniform mat3 uPvwlTransform;\n\n    varying vec2 vMapping;\n\n    void main(void)\n    {\n      vMapping = aPositionMapping;\n\n      vec3 position = uPvwlTransform * vec3(aPositionMapping, 1.0);\n      gl_Position = vec4(position.xy, 0.0, 1.0);\n    }\n  ","    precision highp float;\n\n    uniform sampler2D uSampler;\n\n    varying vec2 vMapping;\n\n    void main(void)\n    {\n      gl_FragColor = texture2D(uSampler, vMapping);\n    }\n  ")),new A.fX(i,h,g,f,new A.b8("    precision highp float;\n    \n    attribute vec3 aPosition;\n    attribute vec2 aTangent;\n\n    uniform mat4 uPvwlTransform;\n\n    varying vec2 vMapping;\n    varying float vHeight;\n\n    void main(void)\n    {\n      vMapping = -aTangent;\n      vHeight = aPosition.y;\n      gl_Position = uPvwlTransform * vec4(aPosition, 1.0);\n    }\n  ","    precision highp float;\n\n    uniform float uNeonThickness;\n    uniform vec4 uNeonColor;\n    uniform vec4 uColor;\n\n    varying vec2 vMapping;\n    varying float vHeight;\n\n    void main(void)\n    {\n      float x = abs(vMapping.x) * uNeonThickness;\n      float y = abs(vMapping.y) * uNeonThickness;\nfloat f = max(x, y);\nif (f < 1.0) f = 0.0;\n//f = max(f, 1.0);\n//f = clamp(f, 0.0, f);\n      gl_FragColor = mix(uColor, uNeonColor, f);\n    }\n  ")),new A.h6(e,d,c,new A.b8("    precision highp float;\n    \n    attribute vec2 aPosition;\n\n    uniform mat4 uPvwlTransform;\n    varying vec4 vScreenPosition;\n\n    void main(void)\n    {\n      vScreenPosition = uPvwlTransform * vec4(aPosition, 0.0, 1.0);\n      gl_Position = vScreenPosition;\n    }\n  ","    precision highp float;\n\n    uniform vec4 uColor;\n    uniform sampler2D uReflectSampler;\n\n    varying vec4 vScreenPosition;\n\n    void main(void)\n    {\n      vec2 screenMapping = (vScreenPosition.xy / vScreenPosition.w);\n      screenMapping = screenMapping * 0.5 + 0.5;\n      vec4 reflect = texture2D(uReflectSampler, screenMapping);\n\n      gl_FragColor = mix(reflect, uColor, 0.1);\n    }\n  ")),new A.ht(b,a,a0,a1,new A.b8("#version 300 es\n    precision highp float;\n    in vec3 aPosition;\n    out vec4 vViewportPosition;\n    out vec4 vViewportPreviousPosition;\n\n    uniform mat4 uPvwlTransform;\n    uniform mat4 uTpvwlTransform;\n    uniform mat4 uPreviousTpvwlTransform;\n\n    void main()\n    {\n      vec4 position = vec4(aPosition, 1.0);\n      vViewportPosition = uTpvwlTransform * position;\n      vViewportPreviousPosition = uPreviousTpvwlTransform * position;\n\n      gl_Position = uPvwlTransform * position;\n    }\n  ","#version 300 es\n    precision highp float;\n    in vec4 vViewportPosition;\n    in vec4 vViewportPreviousPosition;\n    out vec4 outColor;\n\n    uniform float uViewScale;\n\n    void main()\n    {\n      vec2 velocity = (vViewportPosition.xy / vViewportPosition.w)\n        - (vViewportPreviousPosition.xy / vViewportPreviousPosition.w);\n      velocity *= uViewScale;\n      velocity /= max(length(velocity), 1.0);\n      velocity = velocity * 0.5 + 0.5;\n\n      outColor = vec4(velocity, 0, 0);\n    }\n  ")),new A.fW(a2,a3,a4,a5,a6,new A.b8("#version 300 es\n    precision highp float;\n\n    in vec2 aPositionMapping;\n    out vec2 vMapping;\n\n    uniform mat3 uPvwlTransform;\n\n    void main()\n    {\n      vMapping = aPositionMapping;\n\n      vec3 position = uPvwlTransform * vec3(aPositionMapping, 1.0);\n      gl_Position = vec4(position.xy, 0.0, 1.0);\n    }\n  ","#version 300 es\n    precision highp float;\n\n    in vec2 vMapping;\n    out vec4 outColor;\n\n    uniform sampler2D uColorSampler;\n    uniform sampler2D uVelocitySampler;\n    uniform vec4 uViewBound;\n    uniform float uStep;\n\n    void main()\n    {\n      vec4 color = texture(uColorSampler, vMapping);\n      vec2 velocity = texture(uVelocitySampler, vMapping).xy;\n      velocity = velocity * 2.0 - 1.0;\n      velocity *= uViewBound.zw;\n      \n      for (int i = 1; i <= 4; i ++)\n      {\n          float distance = float(i) * uStep;\n          color += texture(uColorSampler, vMapping + velocity * distance);\n          color += texture(uColorSampler, vMapping - velocity * distance);\n      }\n\n      outColor = color * 0.1111111111111111;\n    }\n  ")),new A.he(a7,a8,a9,b0,b1,b2,b3,b4,b5),new A.cq(b7),new A.cq(b6),b8,b9,c0,new A.fD(c1,c2,c3,c4,c5,new A.aE(1028)),new A.h5(c6,c7,c8),new A.h3(c9,d0)),new A.hd(new A.fC(1.5707963267948966,1,0.1,600),new A.cj(d1),A.iD(0,100,400),A.iD(0,40,0),new A.bl(0,1,1,1),new A.bl(0,0,0,1),A.iD(0,120,0),A.jc("#FF317A"),new A.bl(0,0,0,0),A.jc("#31DDFF")),new A.bo())})
s($,"no","ku",()=>new A.h_())
s($,"nL","kG",()=>$.kt())})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({WebGL:J.bq,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,webkitFileSystemDirectoryEntry:J.a,FileSystemDirectoryEntry:J.a,DirectoryReader:J.a,WebKitDirectoryReader:J.a,webkitFileSystemDirectoryReader:J.a,FileSystemDirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,webkitFileSystemEntry:J.a,FileSystemEntry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,webkitFileSystemFileEntry:J.a,FileSystemFileEntry:J.a,DOMFileSystem:J.a,WebKitFileSystem:J.a,webkitFileSystem:J.a,FileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,GeolocationPosition:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,GeolocationPositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL2RenderingContextBase:J.a,ArrayBuffer:A.dH,ArrayBufferView:A.cd,DataView:A.dI,Float32Array:A.ca,Float64Array:A.dJ,Int16Array:A.dK,Int32Array:A.dL,Int8Array:A.dM,Uint16Array:A.ce,Uint32Array:A.dN,Uint8ClampedArray:A.cf,CanvasPixelArray:A.cf,Uint8Array:A.dO,HTMLBRElement:A.m,HTMLBaseElement:A.m,HTMLBodyElement:A.m,HTMLButtonElement:A.m,HTMLContentElement:A.m,HTMLDListElement:A.m,HTMLDataElement:A.m,HTMLDataListElement:A.m,HTMLDetailsElement:A.m,HTMLDialogElement:A.m,HTMLEmbedElement:A.m,HTMLFieldSetElement:A.m,HTMLHRElement:A.m,HTMLHeadElement:A.m,HTMLHeadingElement:A.m,HTMLHtmlElement:A.m,HTMLIFrameElement:A.m,HTMLInputElement:A.m,HTMLLIElement:A.m,HTMLLabelElement:A.m,HTMLLegendElement:A.m,HTMLLinkElement:A.m,HTMLMapElement:A.m,HTMLMenuElement:A.m,HTMLMetaElement:A.m,HTMLMeterElement:A.m,HTMLModElement:A.m,HTMLOListElement:A.m,HTMLObjectElement:A.m,HTMLOptGroupElement:A.m,HTMLOptionElement:A.m,HTMLOutputElement:A.m,HTMLParagraphElement:A.m,HTMLParamElement:A.m,HTMLPictureElement:A.m,HTMLPreElement:A.m,HTMLProgressElement:A.m,HTMLQuoteElement:A.m,HTMLScriptElement:A.m,HTMLShadowElement:A.m,HTMLSlotElement:A.m,HTMLSourceElement:A.m,HTMLSpanElement:A.m,HTMLStyleElement:A.m,HTMLTableCaptionElement:A.m,HTMLTableCellElement:A.m,HTMLTableDataCellElement:A.m,HTMLTableHeaderCellElement:A.m,HTMLTableColElement:A.m,HTMLTableElement:A.m,HTMLTableRowElement:A.m,HTMLTableSectionElement:A.m,HTMLTemplateElement:A.m,HTMLTextAreaElement:A.m,HTMLTimeElement:A.m,HTMLTitleElement:A.m,HTMLTrackElement:A.m,HTMLUListElement:A.m,HTMLUnknownElement:A.m,HTMLDirectoryElement:A.m,HTMLFontElement:A.m,HTMLFrameElement:A.m,HTMLFrameSetElement:A.m,HTMLMarqueeElement:A.m,HTMLElement:A.m,AccessibleNodeList:A.fk,HTMLAnchorElement:A.d7,HTMLAreaElement:A.d9,BeforeUnloadEvent:A.aU,Blob:A.aV,HTMLCanvasElement:A.aW,CDATASection:A.ah,CharacterData:A.ah,Comment:A.ah,ProcessingInstruction:A.ah,Text:A.ah,CSSPerspective:A.fr,CSSCharsetRule:A.z,CSSConditionRule:A.z,CSSFontFaceRule:A.z,CSSGroupingRule:A.z,CSSImportRule:A.z,CSSKeyframeRule:A.z,MozCSSKeyframeRule:A.z,WebKitCSSKeyframeRule:A.z,CSSKeyframesRule:A.z,MozCSSKeyframesRule:A.z,WebKitCSSKeyframesRule:A.z,CSSMediaRule:A.z,CSSNamespaceRule:A.z,CSSPageRule:A.z,CSSRule:A.z,CSSStyleRule:A.z,CSSSupportsRule:A.z,CSSViewportRule:A.z,CSSStyleDeclaration:A.bS,MSStyleCSSProperties:A.bS,CSS2Properties:A.bS,CSSImageValue:A.a7,CSSKeywordValue:A.a7,CSSNumericValue:A.a7,CSSPositionValue:A.a7,CSSResourceValue:A.a7,CSSUnitValue:A.a7,CSSURLImageValue:A.a7,CSSStyleValue:A.a7,CSSMatrixComponent:A.an,CSSRotation:A.an,CSSScale:A.an,CSSSkew:A.an,CSSTranslation:A.an,CSSTransformComponent:A.an,CSSTransformValue:A.ft,CSSUnparsedValue:A.fu,DataTransferItemList:A.fv,DeviceOrientationEvent:A.aX,HTMLDivElement:A.bn,DOMException:A.fw,ClientRectList:A.bV,DOMRectList:A.bV,DOMRectReadOnly:A.bW,DOMStringList:A.dl,DOMTokenList:A.fx,MathMLElement:A.i,SVGAElement:A.i,SVGAnimateElement:A.i,SVGAnimateMotionElement:A.i,SVGAnimateTransformElement:A.i,SVGAnimationElement:A.i,SVGCircleElement:A.i,SVGClipPathElement:A.i,SVGDefsElement:A.i,SVGDescElement:A.i,SVGDiscardElement:A.i,SVGEllipseElement:A.i,SVGFEBlendElement:A.i,SVGFEColorMatrixElement:A.i,SVGFEComponentTransferElement:A.i,SVGFECompositeElement:A.i,SVGFEConvolveMatrixElement:A.i,SVGFEDiffuseLightingElement:A.i,SVGFEDisplacementMapElement:A.i,SVGFEDistantLightElement:A.i,SVGFEFloodElement:A.i,SVGFEFuncAElement:A.i,SVGFEFuncBElement:A.i,SVGFEFuncGElement:A.i,SVGFEFuncRElement:A.i,SVGFEGaussianBlurElement:A.i,SVGFEImageElement:A.i,SVGFEMergeElement:A.i,SVGFEMergeNodeElement:A.i,SVGFEMorphologyElement:A.i,SVGFEOffsetElement:A.i,SVGFEPointLightElement:A.i,SVGFESpecularLightingElement:A.i,SVGFESpotLightElement:A.i,SVGFETileElement:A.i,SVGFETurbulenceElement:A.i,SVGFilterElement:A.i,SVGForeignObjectElement:A.i,SVGGElement:A.i,SVGGeometryElement:A.i,SVGGraphicsElement:A.i,SVGImageElement:A.i,SVGLineElement:A.i,SVGLinearGradientElement:A.i,SVGMarkerElement:A.i,SVGMaskElement:A.i,SVGMetadataElement:A.i,SVGPathElement:A.i,SVGPatternElement:A.i,SVGPolygonElement:A.i,SVGPolylineElement:A.i,SVGRadialGradientElement:A.i,SVGRectElement:A.i,SVGScriptElement:A.i,SVGSetElement:A.i,SVGStopElement:A.i,SVGStyleElement:A.i,SVGElement:A.i,SVGSVGElement:A.i,SVGSwitchElement:A.i,SVGSymbolElement:A.i,SVGTSpanElement:A.i,SVGTextContentElement:A.i,SVGTextElement:A.i,SVGTextPathElement:A.i,SVGTextPositioningElement:A.i,SVGTitleElement:A.i,SVGUseElement:A.i,SVGViewElement:A.i,SVGGradientElement:A.i,SVGComponentTransferFunctionElement:A.i,SVGFEDropShadowElement:A.i,SVGMPathElement:A.i,Element:A.i,AbortPaymentEvent:A.f,AnimationEvent:A.f,AnimationPlaybackEvent:A.f,ApplicationCacheErrorEvent:A.f,BackgroundFetchClickEvent:A.f,BackgroundFetchEvent:A.f,BackgroundFetchFailEvent:A.f,BackgroundFetchedEvent:A.f,BeforeInstallPromptEvent:A.f,BlobEvent:A.f,CanMakePaymentEvent:A.f,ClipboardEvent:A.f,CloseEvent:A.f,CompositionEvent:A.f,CustomEvent:A.f,DeviceMotionEvent:A.f,ErrorEvent:A.f,ExtendableEvent:A.f,ExtendableMessageEvent:A.f,FetchEvent:A.f,FocusEvent:A.f,FontFaceSetLoadEvent:A.f,ForeignFetchEvent:A.f,GamepadEvent:A.f,HashChangeEvent:A.f,InstallEvent:A.f,KeyboardEvent:A.f,MediaEncryptedEvent:A.f,MediaKeyMessageEvent:A.f,MediaQueryListEvent:A.f,MediaStreamEvent:A.f,MediaStreamTrackEvent:A.f,MessageEvent:A.f,MIDIConnectionEvent:A.f,MIDIMessageEvent:A.f,MouseEvent:A.f,DragEvent:A.f,MutationEvent:A.f,NotificationEvent:A.f,PageTransitionEvent:A.f,PaymentRequestEvent:A.f,PaymentRequestUpdateEvent:A.f,PointerEvent:A.f,PopStateEvent:A.f,PresentationConnectionAvailableEvent:A.f,PresentationConnectionCloseEvent:A.f,ProgressEvent:A.f,PromiseRejectionEvent:A.f,PushEvent:A.f,RTCDataChannelEvent:A.f,RTCDTMFToneChangeEvent:A.f,RTCPeerConnectionIceEvent:A.f,RTCTrackEvent:A.f,SecurityPolicyViolationEvent:A.f,SensorErrorEvent:A.f,SpeechRecognitionError:A.f,SpeechRecognitionEvent:A.f,SpeechSynthesisEvent:A.f,StorageEvent:A.f,SyncEvent:A.f,TextEvent:A.f,TouchEvent:A.f,TrackEvent:A.f,TransitionEvent:A.f,WebKitTransitionEvent:A.f,UIEvent:A.f,VRDeviceEvent:A.f,VRDisplayEvent:A.f,VRSessionEvent:A.f,WheelEvent:A.f,MojoInterfaceRequestEvent:A.f,ResourceProgressEvent:A.f,USBConnectionEvent:A.f,IDBVersionChangeEvent:A.f,AudioProcessingEvent:A.f,OfflineAudioCompletionEvent:A.f,Event:A.f,InputEvent:A.f,SubmitEvent:A.f,AbsoluteOrientationSensor:A.b,Accelerometer:A.b,AccessibleNode:A.b,AmbientLightSensor:A.b,Animation:A.b,ApplicationCache:A.b,DOMApplicationCache:A.b,OfflineResourceList:A.b,BackgroundFetchRegistration:A.b,BatteryManager:A.b,BroadcastChannel:A.b,CanvasCaptureMediaStreamTrack:A.b,EventSource:A.b,FileReader:A.b,FontFaceSet:A.b,Gyroscope:A.b,XMLHttpRequest:A.b,XMLHttpRequestEventTarget:A.b,XMLHttpRequestUpload:A.b,LinearAccelerationSensor:A.b,Magnetometer:A.b,MediaDevices:A.b,MediaKeySession:A.b,MediaQueryList:A.b,MediaRecorder:A.b,MediaSource:A.b,MediaStream:A.b,MediaStreamTrack:A.b,MessagePort:A.b,MIDIAccess:A.b,MIDIInput:A.b,MIDIOutput:A.b,MIDIPort:A.b,NetworkInformation:A.b,Notification:A.b,OffscreenCanvas:A.b,OrientationSensor:A.b,PaymentRequest:A.b,Performance:A.b,PermissionStatus:A.b,PresentationAvailability:A.b,PresentationConnection:A.b,PresentationConnectionList:A.b,PresentationRequest:A.b,RelativeOrientationSensor:A.b,RemotePlayback:A.b,RTCDataChannel:A.b,DataChannel:A.b,RTCDTMFSender:A.b,RTCPeerConnection:A.b,webkitRTCPeerConnection:A.b,mozRTCPeerConnection:A.b,ScreenOrientation:A.b,Sensor:A.b,ServiceWorker:A.b,ServiceWorkerContainer:A.b,ServiceWorkerRegistration:A.b,SharedWorker:A.b,SpeechRecognition:A.b,webkitSpeechRecognition:A.b,SpeechSynthesis:A.b,SpeechSynthesisUtterance:A.b,VR:A.b,VRDevice:A.b,VRDisplay:A.b,VRSession:A.b,VisualViewport:A.b,WebSocket:A.b,Worker:A.b,WorkerPerformance:A.b,BluetoothDevice:A.b,BluetoothRemoteGATTCharacteristic:A.b,Clipboard:A.b,MojoInterfaceInterceptor:A.b,USB:A.b,IDBDatabase:A.b,IDBOpenDBRequest:A.b,IDBVersionChangeRequest:A.b,IDBRequest:A.b,IDBTransaction:A.b,AnalyserNode:A.b,RealtimeAnalyserNode:A.b,AudioBufferSourceNode:A.b,AudioDestinationNode:A.b,AudioNode:A.b,AudioScheduledSourceNode:A.b,AudioWorkletNode:A.b,BiquadFilterNode:A.b,ChannelMergerNode:A.b,AudioChannelMerger:A.b,ChannelSplitterNode:A.b,AudioChannelSplitter:A.b,ConstantSourceNode:A.b,ConvolverNode:A.b,DelayNode:A.b,DynamicsCompressorNode:A.b,GainNode:A.b,AudioGainNode:A.b,IIRFilterNode:A.b,MediaElementAudioSourceNode:A.b,MediaStreamAudioDestinationNode:A.b,MediaStreamAudioSourceNode:A.b,OscillatorNode:A.b,Oscillator:A.b,PannerNode:A.b,AudioPannerNode:A.b,webkitAudioPannerNode:A.b,ScriptProcessorNode:A.b,JavaScriptAudioNode:A.b,StereoPannerNode:A.b,WaveShaperNode:A.b,EventTarget:A.b,File:A.R,FileList:A.dn,FileWriter:A.dp,HTMLFormElement:A.dq,Gamepad:A.W,History:A.fH,HTMLCollection:A.aZ,HTMLFormControlsCollection:A.aZ,HTMLOptionsCollection:A.aZ,ImageData:A.c0,HTMLImageElement:A.dv,IntersectionObserver:A.b_,IntersectionObserverEntry:A.fJ,Location:A.fO,HTMLAudioElement:A.b6,HTMLMediaElement:A.b6,MediaList:A.fT,MIDIInputMap:A.dE,MIDIOutputMap:A.dF,MimeType:A.Z,MimeTypeArray:A.dG,Document:A.p,DocumentFragment:A.p,HTMLDocument:A.p,ShadowRoot:A.p,XMLDocument:A.p,Attr:A.p,DocumentType:A.p,Node:A.p,NodeList:A.cg,RadioNodeList:A.cg,Plugin:A.a_,PluginArray:A.dT,RTCStatsReport:A.dX,HTMLSelectElement:A.dZ,SourceBuffer:A.T,SourceBufferList:A.e0,SpeechGrammar:A.a1,SpeechGrammarList:A.e1,SpeechRecognitionResult:A.a2,Storage:A.e3,CSSStyleSheet:A.P,StyleSheet:A.P,TextTrack:A.U,TextTrackCue:A.N,VTTCue:A.N,TextTrackCueList:A.e6,TextTrackList:A.e7,TimeRanges:A.hk,Touch:A.a3,TouchList:A.e9,TrackDefaultList:A.hl,URL:A.hq,HTMLVideoElement:A.ef,VideoTrackList:A.eg,Window:A.aJ,DOMWindow:A.aJ,DedicatedWorkerGlobalScope:A.al,ServiceWorkerGlobalScope:A.al,SharedWorkerGlobalScope:A.al,WorkerGlobalScope:A.al,CSSRuleList:A.el,ClientRect:A.cA,DOMRect:A.cA,GamepadList:A.ex,NamedNodeMap:A.cK,MozNamedAttrMap:A.cK,SpeechRecognitionResultList:A.eQ,StyleSheetList:A.eW,IDBKeyRange:A.c5,SVGLength:A.a9,SVGLengthList:A.dB,SVGNumber:A.aa,SVGNumberList:A.dQ,SVGPointList:A.h0,SVGStringList:A.e4,SVGTransform:A.ad,SVGTransformList:A.ea,AudioBuffer:A.fm,AudioParamMap:A.dc,AudioTrackList:A.dd,AudioContext:A.aC,webkitAudioContext:A.aC,BaseAudioContext:A.aC,OfflineAudioContext:A.dR,WebGLBuffer:A.df,WebGLContextEvent:A.bm,WebGLFramebuffer:A.ds,WebGLProgram:A.dU,WebGLRenderbuffer:A.dW,WebGLRenderingContext:A.cl,WebGL2RenderingContext:A.bA,WebGLShader:A.e_,WebGLTexture:A.e8,WebGLUniformLocation:A.eb})
hunkHelpers.setOrUpdateLeafTags({WebGL:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,webkitFileSystemDirectoryEntry:true,FileSystemDirectoryEntry:true,DirectoryReader:true,WebKitDirectoryReader:true,webkitFileSystemDirectoryReader:true,FileSystemDirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,webkitFileSystemEntry:true,FileSystemEntry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,webkitFileSystemFileEntry:true,FileSystemFileEntry:true,DOMFileSystem:true,WebKitFileSystem:true,webkitFileSystem:true,FileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,GeolocationPosition:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,GeolocationPositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL2RenderingContextBase:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,BeforeUnloadEvent:true,Blob:false,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,DeviceOrientationEvent:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,MathMLElement:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CompositionEvent:true,CustomEvent:true,DeviceMotionEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FocusEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,KeyboardEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MouseEvent:true,DragEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PointerEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TextEvent:true,TouchEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,UIEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,WheelEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,Event:false,InputEvent:false,SubmitEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerRegistration:true,SharedWorker:true,SpeechRecognition:true,webkitSpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,IntersectionObserver:true,IntersectionObserverEntry:true,Location:true,HTMLAudioElement:true,HTMLMediaElement:false,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchList:true,TrackDefaultList:true,URL:true,HTMLVideoElement:true,VideoTrackList:true,Window:true,DOMWindow:true,DedicatedWorkerGlobalScope:true,ServiceWorkerGlobalScope:true,SharedWorkerGlobalScope:true,WorkerGlobalScope:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,IDBKeyRange:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLContextEvent:true,WebGLFramebuffer:true,WebGLProgram:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true})
A.bx.$nativeSuperclassTag="ArrayBufferView"
A.cL.$nativeSuperclassTag="ArrayBufferView"
A.cM.$nativeSuperclassTag="ArrayBufferView"
A.cb.$nativeSuperclassTag="ArrayBufferView"
A.cN.$nativeSuperclassTag="ArrayBufferView"
A.cO.$nativeSuperclassTag="ArrayBufferView"
A.cc.$nativeSuperclassTag="ArrayBufferView"
A.cQ.$nativeSuperclassTag="EventTarget"
A.cR.$nativeSuperclassTag="EventTarget"
A.cT.$nativeSuperclassTag="EventTarget"
A.cU.$nativeSuperclassTag="EventTarget"})()
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
var s=A.n3
if(typeof dartMainRunner==="function")dartMainRunner(s,[])
else s([])})})()