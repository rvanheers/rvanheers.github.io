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
a[c]=function(){a[c]=function(){A.nR(b)}
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
if(a[b]!==s)A.nS(b)
a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s)convertToFastObject(a[s])}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.jD(b)
return new s(c,this)}:function(){if(s===null)s=A.jD(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.jD(a).prototype
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
jI(a,b,c,d){return{i:a,p:b,e:c,x:d}},
iU(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.jF==null){A.nG()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw A.d(A.ko("Return interceptor for "+A.p(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.ir
if(o==null)o=$.ir=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=A.nN(a)
if(p!=null)return p
if(typeof a=="function")return B.F
s=Object.getPrototypeOf(a)
if(s==null)return B.t
if(s===Object.prototype)return B.t
if(typeof q=="function"){o=$.ir
if(o==null)o=$.ir=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:B.j,enumerable:false,writable:true,configurable:true})
return B.j}return B.j},
lT(a,b){if(a<0||a>4294967295)throw A.d(A.ee(a,0,4294967295,"length",null))
return J.k6(A.m(new Array(a),b.h("D<0>")),b)},
k5(a,b){if(a<0)throw A.d(A.aN("Length must be a non-negative integer: "+a,null))
return A.m(new Array(a),b.h("D<0>"))},
k6(a,b){a.fixed$length=Array
return a},
aJ(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.ca.prototype
return J.dR.prototype}if(typeof a=="string")return J.by.prototype
if(a==null)return J.cb.prototype
if(typeof a=="boolean")return J.dP.prototype
if(Array.isArray(a))return J.D.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aA.prototype
if(typeof a=="symbol")return J.bA.prototype
if(typeof a=="bigint")return J.bz.prototype
return a}if(a instanceof A.x)return a
return J.iU(a)},
iT(a){if(typeof a=="string")return J.by.prototype
if(a==null)return a
if(Array.isArray(a))return J.D.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aA.prototype
if(typeof a=="symbol")return J.bA.prototype
if(typeof a=="bigint")return J.bz.prototype
return a}if(a instanceof A.x)return a
return J.iU(a)},
fL(a){if(a==null)return a
if(Array.isArray(a))return J.D.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aA.prototype
if(typeof a=="symbol")return J.bA.prototype
if(typeof a=="bigint")return J.bz.prototype
return a}if(a instanceof A.x)return a
return J.iU(a)},
dd(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aA.prototype
if(typeof a=="symbol")return J.bA.prototype
if(typeof a=="bigint")return J.bz.prototype
return a}if(a instanceof A.x)return a
return J.iU(a)},
j3(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.aJ(a).L(a,b)},
lr(a,b){if(typeof b==="number")if(Array.isArray(a)||typeof a=="string"||A.nJ(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.iT(a).m(a,b)},
ls(a,b,c,d){return J.dd(a).du(a,b,c,d)},
lt(a,b,c,d){return J.dd(a).dF(a,b,c,d)},
lu(a,b){return J.fL(a).q(a,b)},
fN(a,b){return J.fL(a).A(a,b)},
lv(a){return J.fL(a).gv(a)},
j4(a){return J.aJ(a).gu(a)},
lw(a){return J.dd(a).gdW(a)},
bU(a){return J.fL(a).gH(a)},
fO(a){return J.iT(a).gi(a)},
lx(a){return J.aJ(a).gE(a)},
jO(a,b,c){return J.fL(a).aB(a,b,c)},
ly(a,b){return J.aJ(a).ca(a,b)},
df(a){return J.aJ(a).l(a)},
bx:function bx(){},
dP:function dP(){},
cb:function cb(){},
a:function a(){},
bg:function bg(){},
eb:function eb(){},
cA:function cA(){},
aA:function aA(){},
bz:function bz(){},
bA:function bA(){},
D:function D(a){this.$ti=a},
hc:function hc(a){this.$ti=a},
b4:function b4(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
cc:function cc(){},
ca:function ca(){},
dR:function dR(){},
by:function by(){}},A={jb:function jb(){},
cz(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
km(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
me(a,b,c){return A.km(A.cz(A.cz(c,a),b))},
fK(a,b,c){return a},
jH(a){var s,r
for(s=$.Z.length,r=0;r<s;++r)if(a===$.Z[r])return!0
return!1},
lY(a,b,c,d){if(t.bl.b(a))return new A.c4(a,b,c.h("@<0>").t(d).h("c4<1,2>"))
return new A.bi(a,b,c.h("@<0>").t(d).h("bi<1,2>"))},
ja(){return new A.bm("No element")},
cf:function cf(a){this.a=a},
j_:function j_(){},
hE:function hE(){},
j:function j(){},
ah:function ah(){},
bh:function bh(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bi:function bi(a,b,c){this.a=a
this.b=b
this.$ti=c},
c4:function c4(a,b,c){this.a=a
this.b=b
this.$ti=c},
ci:function ci(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
aD:function aD(a,b,c){this.a=a
this.b=b
this.$ti=c},
P:function P(){},
bH:function bH(a){this.a=a},
lb(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
nJ(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.da.b(a)},
p(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.df(a)
return s},
cs(a){var s,r=$.kf
if(r==null)r=$.kf=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
m9(a,b){var s,r,q,p,o,n=null,m=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(m==null)return n
if(3>=m.length)return A.c(m,3)
s=m[3]
if(b<2||b>36)throw A.d(A.ee(b,2,36,"radix",n))
if(b===10&&s!=null)return parseInt(a,10)
if(b<10||s==null){r=b<=10?47+b:86+b
q=m[1]
for(p=q.length,o=0;o<p;++o)if((q.charCodeAt(o)|32)>r)return n}return parseInt(a,b)},
hx(a){return A.m0(a)},
m0(a){var s,r,q,p
if(a instanceof A.x)return A.U(A.ao(a),null)
s=J.aJ(a)
if(s===B.E||s===B.G||t.cr.b(a)){r=B.l(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.U(A.ao(a),null)},
ma(a){if(typeof a=="number"||A.d9(a))return J.df(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.aP)return a.l(0)
return"Instance of '"+A.hx(a)+"'"},
bl(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
m8(a){var s=A.bl(a).getFullYear()+0
return s},
m6(a){var s=A.bl(a).getMonth()+1
return s},
m2(a){var s=A.bl(a).getDate()+0
return s},
m3(a){var s=A.bl(a).getHours()+0
return s},
m5(a){var s=A.bl(a).getMinutes()+0
return s},
m7(a){var s=A.bl(a).getSeconds()+0
return s},
m4(a){var s=A.bl(a).getMilliseconds()+0
return s},
aS(a,b,c){var s,r,q={}
q.a=0
s=[]
r=[]
q.a=b.length
B.a.V(s,b)
q.b=""
if(c!=null&&c.a!==0)c.A(0,new A.hw(q,r,s))
return J.ly(a,new A.dQ(B.J,0,s,r,0))},
m1(a,b,c){var s,r,q
if(Array.isArray(b))s=c==null||c.a===0
else s=!1
if(s){r=b.length
if(r===0){if(!!a.$0)return a.$0()}else if(r===1){if(!!a.$1)return a.$1(b[0])}else if(r===2){if(!!a.$2)return a.$2(b[0],b[1])}else if(r===3){if(!!a.$3)return a.$3(b[0],b[1],b[2])}else if(r===4){if(!!a.$4)return a.$4(b[0],b[1],b[2],b[3])}else if(r===5)if(!!a.$5)return a.$5(b[0],b[1],b[2],b[3],b[4])
q=a[""+"$"+r]
if(q!=null)return q.apply(a,b)}return A.m_(a,b,c)},
m_(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g=Array.isArray(b)?b:A.hi(b,t.z),f=g.length,e=a.$R
if(f<e)return A.aS(a,g,c)
s=a.$D
r=s==null
q=!r?s():null
p=J.aJ(a)
o=p.$C
if(typeof o=="string")o=p[o]
if(r){if(c!=null&&c.a!==0)return A.aS(a,g,c)
if(f===e)return o.apply(a,g)
return A.aS(a,g,c)}if(Array.isArray(q)){if(c!=null&&c.a!==0)return A.aS(a,g,c)
n=e+q.length
if(f>n)return A.aS(a,g,null)
if(f<n){m=q.slice(f-e)
if(g===b)g=A.hi(g,t.z)
B.a.V(g,m)}return o.apply(a,g)}else{if(f>e)return A.aS(a,g,c)
if(g===b)g=A.hi(g,t.z)
l=Object.keys(q)
if(c==null)for(r=l.length,k=0;k<l.length;l.length===r||(0,A.O)(l),++k){j=q[A.Y(l[k])]
if(B.n===j)return A.aS(a,g,c)
B.a.k(g,j)}else{for(r=l.length,i=0,k=0;k<l.length;l.length===r||(0,A.O)(l),++k){h=A.Y(l[k])
if(c.ai(0,h)){++i
B.a.k(g,c.m(0,h))}else{j=q[h]
if(B.n===j)return A.aS(a,g,c)
B.a.k(g,j)}}if(i!==c.a)return A.aS(a,g,c)}return o.apply(a,g)}},
nE(a){throw A.d(A.l0(a))},
c(a,b){if(a==null)J.fO(a)
throw A.d(A.jE(a,b))},
jE(a,b){var s,r="index"
if(!A.iK(b))return new A.ax(!0,b,r,null)
s=A.ab(J.fO(a))
if(b<0||b>=s)return A.K(b,s,a,r)
return A.kg(b,r)},
l0(a){return new A.ax(!0,a,null,null)},
d(a){return A.l6(new Error(),a)},
l6(a,b){var s
if(b==null)b=new A.aE()
a.dartException=b
s=A.nT
if("defineProperty" in Object){Object.defineProperty(a,"message",{get:s})
a.name=""}else a.toString=s
return a},
nT(){return J.df(this.dartException)},
aM(a){throw A.d(a)},
la(a,b){throw A.l6(b,a)},
O(a){throw A.d(A.ad(a))},
aF(a){var s,r,q,p,o,n
a=A.nQ(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.m([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.hX(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
hY(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
kn(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
jc(a,b){var s=b==null,r=s?null:b.method
return new A.dS(a,r,s?null:b.receiver)},
aw(a){var s
if(a==null)return new A.hs(a)
if(a instanceof A.c5){s=a.a
return A.b2(a,s==null?t.K.a(s):s)}if(typeof a!=="object")return a
if("dartException" in a)return A.b2(a,a.dartException)
return A.nr(a)},
b2(a,b){if(t.V.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
nr(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.e.bV(r,16)&8191)===10)switch(q){case 438:return A.b2(a,A.jc(A.p(s)+" (Error "+q+")",null))
case 445:case 5007:A.p(s)
return A.b2(a,new A.cq())}}if(a instanceof TypeError){p=$.le()
o=$.lf()
n=$.lg()
m=$.lh()
l=$.lk()
k=$.ll()
j=$.lj()
$.li()
i=$.ln()
h=$.lm()
g=p.T(s)
if(g!=null)return A.b2(a,A.jc(A.Y(s),g))
else{g=o.T(s)
if(g!=null){g.method="call"
return A.b2(a,A.jc(A.Y(s),g))}else if(n.T(s)!=null||m.T(s)!=null||l.T(s)!=null||k.T(s)!=null||j.T(s)!=null||m.T(s)!=null||i.T(s)!=null||h.T(s)!=null){A.Y(s)
return A.b2(a,new A.cq())}}return A.b2(a,new A.eC(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.cx()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.b2(a,new A.ax(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.cx()
return a},
aK(a){var s
if(a instanceof A.c5)return a.b
if(a==null)return new A.d_(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.d_(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
j0(a){if(a==null)return J.j4(a)
if(typeof a=="object")return A.cs(a)
return J.j4(a)},
nB(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.j(0,a[s],a[r])}return b},
n2(a,b,c,d,e,f){t.Z.a(a)
switch(A.ab(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.d(A.dE("Unsupported number of arguments for wrapped closure"))},
bq(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=A.ny(a,b)
a.$identity=s
return s},
ny(a,b){var s
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
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.n2)},
lG(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.eo().constructor.prototype):Object.create(new A.bs(null,null).constructor.prototype)
s.$initialize=s.constructor
if(h)r=function static_tear_off(){this.$initialize()}
else r=function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.jV(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.lC(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.jV(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
lC(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.d("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.lz)}throw A.d("Error in functionType of tearoff")},
lD(a,b,c,d){var s=A.jU
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
jV(a,b,c,d){var s,r
if(c)return A.lF(a,b,d)
s=b.length
r=A.lD(s,d,a,b)
return r},
lE(a,b,c,d){var s=A.jU,r=A.lA
switch(b?-1:a){case 0:throw A.d(new A.eh("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
lF(a,b,c){var s,r
if($.jS==null)$.jS=A.jR("interceptor")
if($.jT==null)$.jT=A.jR("receiver")
s=b.length
r=A.lE(s,c,a,b)
return r},
jD(a){return A.lG(a)},
lz(a,b){return A.iz(v.typeUniverse,A.ao(a.a),b)},
jU(a){return a.a},
lA(a){return a.b},
jR(a){var s,r,q,p=new A.bs("receiver","interceptor"),o=J.k6(Object.getOwnPropertyNames(p),t.X)
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw A.d(A.aN("Field name "+a+" not found.",null))},
nR(a){throw A.d(new A.eP(a))},
l4(a){return v.getIsolateTag(a)},
oH(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
nN(a){var s,r,q,p,o,n=A.Y($.l5.$1(a)),m=$.iS[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.iY[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.mO($.l_.$2(a,n))
if(q!=null){m=$.iS[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.iY[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.iZ(s)
$.iS[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.iY[n]=s
return s}if(p==="-"){o=A.iZ(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.l8(a,s)
if(p==="*")throw A.d(A.ko(n))
if(v.leafTags[n]===true){o=A.iZ(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.l8(a,s)},
l8(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.jI(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
iZ(a){return J.jI(a,!1,null,!!a.$it)},
nP(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.iZ(s)
else return J.jI(s,c,null,null)},
nG(){if(!0===$.jF)return
$.jF=!0
A.nH()},
nH(){var s,r,q,p,o,n,m,l
$.iS=Object.create(null)
$.iY=Object.create(null)
A.nF()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.l9.$1(o)
if(n!=null){m=A.nP(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
nF(){var s,r,q,p,o,n,m=B.u()
m=A.bT(B.v,A.bT(B.w,A.bT(B.m,A.bT(B.m,A.bT(B.x,A.bT(B.y,A.bT(B.z(B.l),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.l5=new A.iV(p)
$.l_=new A.iW(o)
$.l9=new A.iX(n)},
bT(a,b){return a(b)||b},
nz(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
nQ(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
bY:function bY(a,b){this.a=a
this.$ti=b},
bX:function bX(){},
bZ:function bZ(a,b,c){this.a=a
this.b=b
this.$ti=c},
cQ:function cQ(a,b){this.a=a
this.$ti=b},
cR:function cR(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
dQ:function dQ(a,b,c,d,e){var _=this
_.a=a
_.c=b
_.d=c
_.e=d
_.f=e},
hw:function hw(a,b,c){this.a=a
this.b=b
this.c=c},
hX:function hX(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
cq:function cq(){},
dS:function dS(a,b,c){this.a=a
this.b=b
this.c=c},
eC:function eC(a){this.a=a},
hs:function hs(a){this.a=a},
c5:function c5(a,b){this.a=a
this.b=b},
d_:function d_(a){this.a=a
this.b=null},
aP:function aP(){},
du:function du(){},
dv:function dv(){},
er:function er(){},
eo:function eo(){},
bs:function bs(a,b){this.a=a
this.b=b},
eP:function eP(a){this.a=a},
eh:function eh(a){this.a=a},
it:function it(){},
af:function af(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
hg:function hg(a,b){this.a=a
this.b=b
this.c=null},
aC:function aC(a,b){this.a=a
this.$ti=b},
cg:function cg(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
iV:function iV(a){this.a=a},
iW:function iW(a){this.a=a},
iX:function iX(a){this.a=a},
kK(a){return a},
d8(a){return a},
bo(a,b,c){if(a>>>0!==a||a>=c)throw A.d(A.jE(b,a))},
e_:function e_(){},
cm:function cm(){},
e0:function e0(){},
bD:function bD(){},
ck:function ck(){},
cl:function cl(){},
cj:function cj(){},
e1:function e1(){},
e2:function e2(){},
e3:function e3(){},
e4:function e4(){},
cn:function cn(){},
e5:function e5(){},
co:function co(){},
e6:function e6(){},
cT:function cT(){},
cU:function cU(){},
cV:function cV(){},
cW:function cW(){},
kh(a,b){var s=b.c
return s==null?b.c=A.jo(a,b.y,!0):s},
jg(a,b){var s=b.c
return s==null?b.c=A.d4(a,"a_",[b.y]):s},
md(a){var s=a.d
if(s!=null)return s
return a.d=new Map()},
ki(a){var s=a.x
if(s===6||s===7||s===8)return A.ki(a.y)
return s===12||s===13},
mc(a){return a.at},
ac(a){return A.fx(v.typeUniverse,a,!1)},
b0(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.x
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.y
r=A.b0(a,s,a0,a1)
if(r===s)return b
return A.kG(a,r,!0)
case 7:s=b.y
r=A.b0(a,s,a0,a1)
if(r===s)return b
return A.jo(a,r,!0)
case 8:s=b.y
r=A.b0(a,s,a0,a1)
if(r===s)return b
return A.kF(a,r,!0)
case 9:q=b.z
p=A.dc(a,q,a0,a1)
if(p===q)return b
return A.d4(a,b.y,p)
case 10:o=b.y
n=A.b0(a,o,a0,a1)
m=b.z
l=A.dc(a,m,a0,a1)
if(n===o&&l===m)return b
return A.jm(a,n,l)
case 12:k=b.y
j=A.b0(a,k,a0,a1)
i=b.z
h=A.no(a,i,a0,a1)
if(j===k&&h===i)return b
return A.kE(a,j,h)
case 13:g=b.z
a1+=g.length
f=A.dc(a,g,a0,a1)
o=b.y
n=A.b0(a,o,a0,a1)
if(f===g&&n===o)return b
return A.jn(a,n,f,!0)
case 14:e=b.y
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw A.d(A.dk("Attempted to substitute unexpected RTI kind "+c))}},
dc(a,b,c,d){var s,r,q,p,o=b.length,n=A.iA(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.b0(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
np(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.iA(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.b0(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
no(a,b,c,d){var s,r=b.a,q=A.dc(a,r,c,d),p=b.b,o=A.dc(a,p,c,d),n=b.c,m=A.np(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.eX()
s.a=q
s.b=o
s.c=m
return s},
m(a,b){a[v.arrayRti]=b
return a},
l2(a){var s,r=a.$S
if(r!=null){if(typeof r=="number")return A.nD(r)
s=a.$S()
return s}return null},
nI(a,b){var s
if(A.ki(b))if(a instanceof A.aP){s=A.l2(a)
if(s!=null)return s}return A.ao(a)},
ao(a){if(a instanceof A.x)return A.y(a)
if(Array.isArray(a))return A.av(a)
return A.jw(J.aJ(a))},
av(a){var s=a[v.arrayRti],r=t.b
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
y(a){var s=a.$ti
return s!=null?s:A.jw(a)},
jw(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.n1(a,s)},
n1(a,b){var s=a instanceof A.aP?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.mK(v.typeUniverse,s.name)
b.$ccache=r
return r},
nD(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.fx(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
nC(a){return A.br(A.y(a))},
nn(a){var s=a instanceof A.aP?A.l2(a):null
if(s!=null)return s
if(t.bW.b(a))return J.lx(a).a
if(Array.isArray(a))return A.av(a)
return A.ao(a)},
br(a){var s=a.w
return s==null?a.w=A.kO(a):s},
kO(a){var s,r,q=a.at,p=q.replace(/\*/g,"")
if(p===q)return a.w=new A.iy(a)
s=A.fx(v.typeUniverse,p,!0)
r=s.w
return r==null?s.w=A.kO(s):r},
ap(a){return A.br(A.fx(v.typeUniverse,a,!1))},
n0(a){var s,r,q,p,o,n,m=this
if(m===t.K)return A.aI(m,a,A.n7)
if(!A.aL(m))if(!(m===t._))s=!1
else s=!0
else s=!0
if(s)return A.aI(m,a,A.nb)
s=m.x
if(s===7)return A.aI(m,a,A.mZ)
if(s===1)return A.aI(m,a,A.kU)
r=s===6?m.y:m
q=r.x
if(q===8)return A.aI(m,a,A.n3)
if(r===t.S)p=A.iK
else if(r===t.i||r===t.H)p=A.n6
else if(r===t.N)p=A.n9
else p=r===t.y?A.d9:null
if(p!=null)return A.aI(m,a,p)
if(q===9){o=r.y
if(r.z.every(A.nL)){m.r="$i"+o
if(o==="l")return A.aI(m,a,A.n5)
return A.aI(m,a,A.na)}}else if(q===11){n=A.nz(r.y,r.z)
return A.aI(m,a,n==null?A.kU:n)}return A.aI(m,a,A.mX)},
aI(a,b,c){a.b=c
return a.b(b)},
n_(a){var s,r=this,q=A.mW
if(!A.aL(r))if(!(r===t._))s=!1
else s=!0
else s=!0
if(s)q=A.mP
else if(r===t.K)q=A.mN
else{s=A.de(r)
if(s)q=A.mY}r.a=q
return r.a(a)},
fI(a){var s,r=a.x
if(!A.aL(a))if(!(a===t._))if(!(a===t.G))if(r!==7)if(!(r===6&&A.fI(a.y)))s=r===8&&A.fI(a.y)||a===t.P||a===t.T
else s=!0
else s=!0
else s=!0
else s=!0
else s=!0
return s},
mX(a){var s=this
if(a==null)return A.fI(s)
return A.nK(v.typeUniverse,A.nI(a,s),s)},
mZ(a){if(a==null)return!0
return this.y.b(a)},
na(a){var s,r=this
if(a==null)return A.fI(r)
s=r.r
if(a instanceof A.x)return!!a[s]
return!!J.aJ(a)[s]},
n5(a){var s,r=this
if(a==null)return A.fI(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.r
if(a instanceof A.x)return!!a[s]
return!!J.aJ(a)[s]},
mW(a){var s,r=this
if(a==null){s=A.de(r)
if(s)return a}else if(r.b(a))return a
A.kP(a,r)},
mY(a){var s=this
if(a==null)return a
else if(s.b(a))return a
A.kP(a,s)},
kP(a,b){throw A.d(A.mz(A.kv(a,A.U(b,null))))},
kv(a,b){return A.bw(a)+": type '"+A.U(A.nn(a),null)+"' is not a subtype of type '"+b+"'"},
mz(a){return new A.d2("TypeError: "+a)},
R(a,b){return new A.d2("TypeError: "+A.kv(a,b))},
n3(a){var s=this,r=s.x===6?s.y:s
return r.y.b(a)||A.jg(v.typeUniverse,r).b(a)},
n7(a){return a!=null},
mN(a){if(a!=null)return a
throw A.d(A.R(a,"Object"))},
nb(a){return!0},
mP(a){return a},
kU(a){return!1},
d9(a){return!0===a||!1===a},
jp(a){if(!0===a)return!0
if(!1===a)return!1
throw A.d(A.R(a,"bool"))},
ox(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.d(A.R(a,"bool"))},
ow(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.d(A.R(a,"bool?"))},
iB(a){if(typeof a=="number")return a
throw A.d(A.R(a,"double"))},
oz(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.R(a,"double"))},
oy(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.R(a,"double?"))},
iK(a){return typeof a=="number"&&Math.floor(a)===a},
ab(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.d(A.R(a,"int"))},
oB(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.d(A.R(a,"int"))},
oA(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.d(A.R(a,"int?"))},
n6(a){return typeof a=="number"},
kJ(a){if(typeof a=="number")return a
throw A.d(A.R(a,"num"))},
oC(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.R(a,"num"))},
mM(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.R(a,"num?"))},
n9(a){return typeof a=="string"},
Y(a){if(typeof a=="string")return a
throw A.d(A.R(a,"String"))},
oD(a){if(typeof a=="string")return a
if(a==null)return a
throw A.d(A.R(a,"String"))},
mO(a){if(typeof a=="string")return a
if(a==null)return a
throw A.d(A.R(a,"String?"))},
kX(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.U(a[q],b)
return s},
ni(a,b){var s,r,q,p,o,n,m=a.y,l=a.z
if(""===m)return"("+A.kX(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.U(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
kQ(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=", "
if(a6!=null){s=a6.length
if(a5==null){a5=A.m([],t.s)
r=null}else r=a5.length
q=a5.length
for(p=s;p>0;--p)B.a.k(a5,"T"+(q+p))
for(o=t.X,n=t._,m="<",l="",p=0;p<s;++p,l=a3){k=a5.length
j=k-1-p
if(!(j>=0))return A.c(a5,j)
m=B.h.aj(m+l,a5[j])
i=a6[p]
h=i.x
if(!(h===2||h===3||h===4||h===5||i===o))if(!(i===n))k=!1
else k=!0
else k=!0
if(!k)m+=" extends "+A.U(i,a5)}m+=">"}else{m=""
r=null}o=a4.y
g=a4.z
f=g.a
e=f.length
d=g.b
c=d.length
b=g.c
a=b.length
a0=A.U(o,a5)
for(a1="",a2="",p=0;p<e;++p,a2=a3)a1+=a2+A.U(f[p],a5)
if(c>0){a1+=a2+"["
for(a2="",p=0;p<c;++p,a2=a3)a1+=a2+A.U(d[p],a5)
a1+="]"}if(a>0){a1+=a2+"{"
for(a2="",p=0;p<a;p+=3,a2=a3){a1+=a2
if(b[p+1])a1+="required "
a1+=A.U(b[p+2],a5)+" "+b[p]}a1+="}"}if(r!=null){a5.toString
a5.length=r}return m+"("+a1+") => "+a0},
U(a,b){var s,r,q,p,o,n,m,l=a.x
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=A.U(a.y,b)
return s}if(l===7){r=a.y
s=A.U(r,b)
q=r.x
return(q===12||q===13?"("+s+")":s)+"?"}if(l===8)return"FutureOr<"+A.U(a.y,b)+">"
if(l===9){p=A.nq(a.y)
o=a.z
return o.length>0?p+("<"+A.kX(o,b)+">"):p}if(l===11)return A.ni(a,b)
if(l===12)return A.kQ(a,b,null)
if(l===13)return A.kQ(a.y,b,a.z)
if(l===14){n=a.y
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.c(b,n)
return b[n]}return"?"},
nq(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
mL(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
mK(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.fx(a,b,!1)
else if(typeof m=="number"){s=m
r=A.d5(a,5,"#")
q=A.iA(s)
for(p=0;p<s;++p)q[p]=r
o=A.d4(a,b,q)
n[b]=o
return o}else return m},
mI(a,b){return A.kH(a.tR,b)},
mH(a,b){return A.kH(a.eT,b)},
fx(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.kB(A.kz(a,null,b,c))
r.set(b,s)
return s},
iz(a,b,c){var s,r,q=b.Q
if(q==null)q=b.Q=new Map()
s=q.get(c)
if(s!=null)return s
r=A.kB(A.kz(a,b,c,!0))
q.set(c,r)
return r},
mJ(a,b,c){var s,r,q,p=b.as
if(p==null)p=b.as=new Map()
s=c.at
r=p.get(s)
if(r!=null)return r
q=A.jm(a,b,c.x===10?c.z:[c])
p.set(s,q)
return q},
aH(a,b){b.a=A.n_
b.b=A.n0
return b},
d5(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.a7(null,null)
s.x=b
s.at=c
r=A.aH(a,s)
a.eC.set(c,r)
return r},
kG(a,b,c){var s,r=b.at+"*",q=a.eC.get(r)
if(q!=null)return q
s=A.mE(a,b,r,c)
a.eC.set(r,s)
return s},
mE(a,b,c,d){var s,r,q
if(d){s=b.x
if(!A.aL(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new A.a7(null,null)
q.x=6
q.y=b
q.at=c
return A.aH(a,q)},
jo(a,b,c){var s,r=b.at+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.mD(a,b,r,c)
a.eC.set(r,s)
return s},
mD(a,b,c,d){var s,r,q,p
if(d){s=b.x
if(!A.aL(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&A.de(b.y)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.G)return t.P
else if(s===6){q=b.y
if(q.x===8&&A.de(q.y))return q
else return A.kh(a,b)}}p=new A.a7(null,null)
p.x=7
p.y=b
p.at=c
return A.aH(a,p)},
kF(a,b,c){var s,r=b.at+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.mB(a,b,r,c)
a.eC.set(r,s)
return s},
mB(a,b,c,d){var s,r,q
if(d){s=b.x
if(!A.aL(b))if(!(b===t._))r=!1
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return A.d4(a,"a_",[b])
else if(b===t.P||b===t.T)return t.bc}q=new A.a7(null,null)
q.x=8
q.y=b
q.at=c
return A.aH(a,q)},
mF(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.a7(null,null)
s.x=14
s.y=b
s.at=q
r=A.aH(a,s)
a.eC.set(q,r)
return r},
d3(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].at
return s},
mA(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].at}return s},
d4(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.d3(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.a7(null,null)
r.x=9
r.y=b
r.z=c
if(c.length>0)r.c=c[0]
r.at=p
q=A.aH(a,r)
a.eC.set(p,q)
return q},
jm(a,b,c){var s,r,q,p,o,n
if(b.x===10){s=b.y
r=b.z.concat(c)}else{r=c
s=b}q=s.at+(";<"+A.d3(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.a7(null,null)
o.x=10
o.y=s
o.z=r
o.at=q
n=A.aH(a,o)
a.eC.set(q,n)
return n},
mG(a,b,c){var s,r,q="+"+(b+"("+A.d3(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.a7(null,null)
s.x=11
s.y=b
s.z=c
s.at=q
r=A.aH(a,s)
a.eC.set(q,r)
return r},
kE(a,b,c){var s,r,q,p,o,n=b.at,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.d3(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.d3(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.mA(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.a7(null,null)
p.x=12
p.y=b
p.z=c
p.at=r
o=A.aH(a,p)
a.eC.set(r,o)
return o},
jn(a,b,c,d){var s,r=b.at+("<"+A.d3(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.mC(a,b,c,r,d)
a.eC.set(r,s)
return s},
mC(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.iA(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.x===1){r[p]=o;++q}}if(q>0){n=A.b0(a,b,r,0)
m=A.dc(a,c,r,0)
return A.jn(a,n,m,c!==m)}}l=new A.a7(null,null)
l.x=13
l.y=b
l.z=c
l.at=d
return A.aH(a,l)},
kz(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
kB(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.mt(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.kA(a,r,l,k,!1)
else if(q===46)r=A.kA(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.b_(a.u,a.e,k.pop()))
break
case 94:k.push(A.mF(a.u,k.pop()))
break
case 35:k.push(A.d5(a.u,5,"#"))
break
case 64:k.push(A.d5(a.u,2,"@"))
break
case 126:k.push(A.d5(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.mv(a,k)
break
case 38:A.mu(a,k)
break
case 42:p=a.u
k.push(A.kG(p,A.b_(p,a.e,k.pop()),a.n))
break
case 63:p=a.u
k.push(A.jo(p,A.b_(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.kF(p,A.b_(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.ms(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.kC(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.mx(a.u,a.e,o)
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
mt(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
kA(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.x===10)o=o.y
n=A.mL(s,o.y)[p]
if(n==null)A.aM('No "'+p+'" in "'+A.mc(o)+'"')
d.push(A.iz(s,o,n))}else d.push(p)
return m},
mv(a,b){var s,r=a.u,q=A.ky(a,b),p=b.pop()
if(typeof p=="string")b.push(A.d4(r,p,q))
else{s=A.b_(r,a.e,p)
switch(s.x){case 12:b.push(A.jn(r,s,q,a.n))
break
default:b.push(A.jm(r,s,q))
break}}},
ms(a,b){var s,r,q,p,o,n=null,m=a.u,l=b.pop()
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
s=r}q=A.ky(a,b)
l=b.pop()
switch(l){case-3:l=b.pop()
if(s==null)s=m.sEA
if(r==null)r=m.sEA
p=A.b_(m,a.e,l)
o=new A.eX()
o.a=q
o.b=s
o.c=r
b.push(A.kE(m,p,o))
return
case-4:b.push(A.mG(m,b.pop(),q))
return
default:throw A.d(A.dk("Unexpected state under `()`: "+A.p(l)))}},
mu(a,b){var s=b.pop()
if(0===s){b.push(A.d5(a.u,1,"0&"))
return}if(1===s){b.push(A.d5(a.u,4,"1&"))
return}throw A.d(A.dk("Unexpected extended operation "+A.p(s)))},
ky(a,b){var s=b.splice(a.p)
A.kC(a.u,a.e,s)
a.p=b.pop()
return s},
b_(a,b,c){if(typeof c=="string")return A.d4(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.mw(a,b,c)}else return c},
kC(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.b_(a,b,c[s])},
mx(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.b_(a,b,c[s])},
mw(a,b,c){var s,r,q=b.x
if(q===10){if(c===0)return b.y
s=b.z
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.y
q=b.x}else if(c===0)return b
if(q!==9)throw A.d(A.dk("Indexed base must be an interface type"))
s=b.z
if(c<=s.length)return s[c-1]
throw A.d(A.dk("Bad index "+c+" for "+b.l(0)))},
nK(a,b,c){var s,r=A.md(b),q=r.get(c)
if(q!=null)return q
s=A.J(a,b,null,c,null)
r.set(c,s)
return s},
J(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(!A.aL(d))if(!(d===t._))s=!1
else s=!0
else s=!0
if(s)return!0
r=b.x
if(r===4)return!0
if(A.aL(b))return!1
if(b.x!==1)s=!1
else s=!0
if(s)return!0
q=r===14
if(q)if(A.J(a,c[b.y],c,d,e))return!0
p=d.x
s=b===t.P||b===t.T
if(s){if(p===8)return A.J(a,b,c,d.y,e)
return d===t.P||d===t.T||p===7||p===6}if(d===t.K){if(r===8)return A.J(a,b.y,c,d,e)
if(r===6)return A.J(a,b.y,c,d,e)
return r!==7}if(r===6)return A.J(a,b.y,c,d,e)
if(p===6){s=A.kh(a,d)
return A.J(a,b,c,s,e)}if(r===8){if(!A.J(a,b.y,c,d,e))return!1
return A.J(a,A.jg(a,b),c,d,e)}if(r===7){s=A.J(a,t.P,c,d,e)
return s&&A.J(a,b.y,c,d,e)}if(p===8){if(A.J(a,b,c,d.y,e))return!0
return A.J(a,b,c,A.jg(a,d),e)}if(p===7){s=A.J(a,b,c,t.P,e)
return s||A.J(a,b,c,d.y,e)}if(q)return!1
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
if(!A.J(a,j,c,i,e)||!A.J(a,i,e,j,c))return!1}return A.kT(a,b.y,c,d.y,e)}if(p===12){if(b===t.g)return!0
if(s)return!1
return A.kT(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return A.n4(a,b,c,d,e)}if(o&&p===11)return A.n8(a,b,c,d,e)
return!1},
kT(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!A.J(a3,a4.y,a5,a6.y,a7))return!1
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
if(!A.J(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.J(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.J(a3,k[h],a7,g,a5))return!1}f=s.c
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
if(!A.J(a3,e[a+2],a7,g,a5))return!1
break}}for(;b<d;){if(f[b+1])return!1
b+=3}return!0},
n4(a,b,c,d,e){var s,r,q,p,o,n,m,l=b.y,k=d.y
for(;l!==k;){s=a.tR[l]
if(s==null)return!1
if(typeof s=="string"){l=s
continue}r=s[k]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.iz(a,b,r[o])
return A.kI(a,p,null,c,d.z,e)}n=b.z
m=d.z
return A.kI(a,n,null,c,m,e)},
kI(a,b,c,d,e,f){var s,r,q,p=b.length
for(s=0;s<p;++s){r=b[s]
q=e[s]
if(!A.J(a,r,d,q,f))return!1}return!0},
n8(a,b,c,d,e){var s,r=b.z,q=d.z,p=r.length
if(p!==q.length)return!1
if(b.y!==d.y)return!1
for(s=0;s<p;++s)if(!A.J(a,r[s],c,q[s],e))return!1
return!0},
de(a){var s,r=a.x
if(!(a===t.P||a===t.T))if(!A.aL(a))if(r!==7)if(!(r===6&&A.de(a.y)))s=r===8&&A.de(a.y)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
nL(a){var s
if(!A.aL(a))if(!(a===t._))s=!1
else s=!0
else s=!0
return s},
aL(a){var s=a.x
return s===2||s===3||s===4||s===5||a===t.X},
kH(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
iA(a){return a>0?new Array(a):v.typeUniverse.sEA},
a7:function a7(a,b){var _=this
_.a=a
_.b=b
_.w=_.r=_.e=_.d=_.c=null
_.x=0
_.at=_.as=_.Q=_.z=_.y=null},
eX:function eX(){this.c=this.b=this.a=null},
iy:function iy(a){this.a=a},
eU:function eU(){},
d2:function d2(a){this.a=a},
mk(){var s,r,q={}
if(self.scheduleImmediate!=null)return A.ns()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(A.bq(new A.i6(q),1)).observe(s,{childList:true})
return new A.i5(q,s,r)}else if(self.setImmediate!=null)return A.nt()
return A.nu()},
ml(a){self.scheduleImmediate(A.bq(new A.i7(t.M.a(a)),0))},
mm(a){self.setImmediate(A.bq(new A.i8(t.M.a(a)),0))},
mn(a){t.M.a(a)
A.my(0,a)},
my(a,b){var s=new A.iw()
s.d8(a,b)
return s},
jy(a){return new A.eJ(new A.F($.C,a.h("F<0>")),a.h("eJ<0>"))},
js(a,b){a.$2(0,null)
b.b=!0
return b.a},
iC(a,b){A.mQ(a,b)},
jr(a,b){var s,r,q=b.$ti
q.h("1/?").a(a)
s=a==null?q.c.a(a):a
if(!b.b)b.a.aM(s)
else{r=b.a
if(q.h("a_<1>").b(s))r.bB(s)
else r.aO(s)}},
jq(a,b){var s=A.aw(a),r=A.aK(a),q=b.b,p=b.a
if(q)p.a6(s,r)
else p.de(s,r)},
mQ(a,b){var s,r,q=new A.iD(b),p=new A.iE(b)
if(a instanceof A.F)a.bW(q,p,t.z)
else{s=t.z
if(a instanceof A.F)a.b6(q,p,s)
else{r=new A.F($.C,t.c)
r.a=8
r.c=a
r.bW(q,p,s)}}},
jz(a){var s=function(b,c){return function(d,e){while(true)try{b(d,e)
break}catch(r){e=r
d=c}}}(a,1)
return $.C.b4(new A.iM(s),t.p,t.S,t.z)},
fQ(a,b){var s=A.fK(a,"error",t.K)
return new A.bV(s,b==null?A.jQ(a):b)},
jQ(a){var s
if(t.V.b(a)){s=a.gaE()
if(s!=null)return s}return B.C},
jZ(a,b){var s=a==null?b.a(a):a,r=new A.F($.C,b.h("F<0>"))
r.aM(s)
return r},
jl(a,b){var s,r,q
for(s=t.c;r=a.a,(r&4)!==0;)a=s.a(a.c)
if((r&24)!==0){q=b.au()
b.ap(a)
A.bO(b,q)}else{q=t.F.a(b.c)
b.bU(a)
a.aY(q)}},
mq(a,b){var s,r,q,p={},o=p.a=a
for(s=t.c;r=o.a,(r&4)!==0;o=a){a=s.a(o.c)
p.a=a}if((r&24)===0){q=t.F.a(b.c)
b.bU(o)
p.a.aY(q)
return}if((r&16)===0&&b.c==null){b.ap(o)
return}b.a^=2
A.bp(null,null,b.b,t.M.a(new A.ig(p,b)))},
bO(a,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c={},b=c.a=a
for(s=t.t,r=t.F,q=t.bz;!0;){p={}
o=b.a
n=(o&16)===0
m=!n
if(a0==null){if(m&&(o&1)===0){l=s.a(b.c)
A.fJ(l.a,l.b)}return}p.a=a0
k=a0.a
for(b=a0;k!=null;b=k,k=j){b.a=null
A.bO(c.a,b)
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
A.fJ(i.a,i.b)
return}f=$.C
if(f!==g)$.C=g
else f=null
b=b.c
if((b&15)===8)new A.io(p,c,m).$0()
else if(n){if((b&1)!==0)new A.im(p,i).$0()}else if((b&2)!==0)new A.il(c,p).$0()
if(f!=null)$.C=f
b=p.c
if(b instanceof A.F){o=p.a.$ti
o=o.h("a_<2>").b(b)||!o.z[1].b(b)}else o=!1
if(o){q.a(b)
e=p.a.b
if((b.a&24)!==0){d=r.a(e.c)
e.c=null
a0=e.av(d)
e.a=b.a&30|e.a&1
e.c=b.c
c.a=b
continue}else A.jl(b,e)
return}}e=p.a.b
d=r.a(e.c)
e.c=null
a0=e.av(d)
b=p.b
o=p.c
if(!b){e.$ti.c.a(o)
e.a=8
e.c=o}else{s.a(o)
e.a=e.a&1|16
e.c=o}c.a=e
b=e}},
nj(a,b){var s
if(t.C.b(a))return b.b4(a,t.z,t.K,t.l)
s=t.v
if(s.b(a))return s.a(a)
throw A.d(A.jP(a,"onError",u.c))},
nd(){var s,r
for(s=$.bS;s!=null;s=$.bS){$.db=null
r=s.b
$.bS=r
if(r==null)$.da=null
s.a.$0()}},
nm(){$.jx=!0
try{A.nd()}finally{$.db=null
$.jx=!1
if($.bS!=null)$.jL().$1(A.l1())}},
kZ(a){var s=new A.eK(a),r=$.da
if(r==null){$.bS=$.da=s
if(!$.jx)$.jL().$1(A.l1())}else $.da=r.b=s},
nl(a){var s,r,q,p=$.bS
if(p==null){A.kZ(a)
$.db=$.da
return}s=new A.eK(a)
r=$.db
if(r==null){s.b=p
$.bS=$.db=s}else{q=r.b
s.b=q
$.db=r.b=s
if(q==null)$.da=s}},
jJ(a){var s,r=null,q=$.C
if(B.d===q){A.bp(r,r,B.d,a)
return}s=!1
if(s){A.bp(r,r,q,t.M.a(a))
return}A.bp(r,r,q,t.M.a(q.c_(a)))},
of(a,b){A.fK(a,"stream",t.K)
return new A.fk(b.h("fk<0>"))},
kk(a){return new A.cC(null,null,a.h("cC<0>"))},
kY(a){return},
ku(a,b,c){var s=b==null?A.nv():b
return t.h.t(c).h("1(2)").a(s)},
mo(a,b){if(b==null)b=A.nx()
if(t.k.b(b))return a.b4(b,t.z,t.K,t.l)
if(t.bo.b(b))return t.v.a(b)
throw A.d(A.aN("handleError callback must take either an Object (the error), or both an Object (the error) and a StackTrace.",null))},
ne(a){},
ng(a,b){A.fJ(a,b)},
nf(){},
mT(a,b,c){var s,r,q=a.az(0),p=$.j1()
if(q!==p){s=t.O.a(new A.iF(b,c))
p=q.$ti
r=$.C
q.ao(new A.aG(new A.F(r,p),8,s,null,p.h("@<1>").t(p.c).h("aG<1,2>")))}else b.aN(c)},
fJ(a,b){A.nl(new A.iL(a,b))},
kV(a,b,c,d,e){var s,r=$.C
if(r===c)return d.$0()
$.C=c
s=r
try{r=d.$0()
return r}finally{$.C=s}},
kW(a,b,c,d,e,f,g){var s,r=$.C
if(r===c)return d.$1(e)
$.C=c
s=r
try{r=d.$1(e)
return r}finally{$.C=s}},
nk(a,b,c,d,e,f,g,h,i){var s,r=$.C
if(r===c)return d.$2(e,f)
$.C=c
s=r
try{r=d.$2(e,f)
return r}finally{$.C=s}},
bp(a,b,c,d){t.M.a(d)
if(B.d!==c)d=c.c_(d)
A.kZ(d)},
i6:function i6(a){this.a=a},
i5:function i5(a,b,c){this.a=a
this.b=b
this.c=c},
i7:function i7(a){this.a=a},
i8:function i8(a){this.a=a},
iw:function iw(){},
ix:function ix(a,b){this.a=a
this.b=b},
eJ:function eJ(a,b){this.a=a
this.b=!1
this.$ti=b},
iD:function iD(a){this.a=a},
iE:function iE(a){this.a=a},
iM:function iM(a){this.a=a},
bV:function bV(a,b){this.a=a
this.b=b},
aY:function aY(a,b){this.a=a
this.$ti=b},
an:function an(a,b,c,d,e){var _=this
_.ay=0
_.CW=_.ch=null
_.w=a
_.a=b
_.d=c
_.e=d
_.r=_.f=null
_.$ti=e},
cD:function cD(){},
cC:function cC(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.e=_.d=null
_.$ti=c},
aG:function aG(a,b,c,d,e){var _=this
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
ic:function ic(a,b){this.a=a
this.b=b},
ik:function ik(a,b){this.a=a
this.b=b},
ih:function ih(a){this.a=a},
ii:function ii(a){this.a=a},
ij:function ij(a,b,c){this.a=a
this.b=b
this.c=c},
ig:function ig(a,b){this.a=a
this.b=b},
ie:function ie(a,b){this.a=a
this.b=b},
id:function id(a,b,c){this.a=a
this.b=b
this.c=c},
io:function io(a,b,c){this.a=a
this.b=b
this.c=c},
ip:function ip(a){this.a=a},
im:function im(a,b){this.a=a
this.b=b},
il:function il(a,b){this.a=a
this.b=b},
eK:function eK(a){this.a=a
this.b=null},
aU:function aU(){},
hO:function hO(a,b){this.a=a
this.b=b},
hP:function hP(a,b){this.a=a
this.b=b},
hM:function hM(a){this.a=a},
hN:function hN(a,b,c){this.a=a
this.b=b
this.c=c},
cE:function cE(){},
cF:function cF(){},
bL:function bL(){},
bQ:function bQ(){},
cH:function cH(){},
cG:function cG(a,b){this.b=a
this.a=null
this.$ti=b},
cX:function cX(a){var _=this
_.a=0
_.c=_.b=null
_.$ti=a},
is:function is(a,b){this.a=a
this.b=b},
bM:function bM(a,b){var _=this
_.a=1
_.b=a
_.c=null
_.$ti=b},
fk:function fk(a){this.$ti=a},
iF:function iF(a,b){this.a=a
this.b=b},
d7:function d7(){},
iL:function iL(a,b){this.a=a
this.b=b},
fe:function fe(){},
iu:function iu(a,b){this.a=a
this.b=b},
iv:function iv(a,b,c){this.a=a
this.b=b
this.c=c},
kw(a,b){var s=a[b]
return s===a?null:s},
kx(a,b,c){if(c==null)a[b]=a
else a[b]=c},
mr(){var s=Object.create(null)
A.kx(s,"<non-identifier-key>",s)
delete s["<non-identifier-key>"]
return s},
lV(a,b){return new A.af(a.h("@<0>").t(b).h("af<1,2>"))},
jd(a,b,c){return b.h("@<0>").t(c).h("k7<1,2>").a(A.nB(a,new A.af(b.h("@<0>").t(c).h("af<1,2>"))))},
k8(a,b){return new A.af(a.h("@<0>").t(b).h("af<1,2>"))},
lW(a,b,c){var s=A.lV(b,c)
J.fN(a,new A.hh(s,b,c))
return s},
hk(a){var s,r={}
if(A.jH(a))return"{...}"
s=new A.cy("")
try{B.a.k($.Z,a)
s.a+="{"
r.a=!0
J.fN(a,new A.hl(r,s))
s.a+="}"}finally{if(0>=$.Z.length)return A.c($.Z,-1)
$.Z.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
cM:function cM(){},
cP:function cP(a){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=a},
cN:function cN(a,b){this.a=a
this.$ti=b},
cO:function cO(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
hh:function hh(a,b,c){this.a=a
this.b=b
this.c=c},
e:function e(){},
w:function w(){},
hl:function hl(a,b){this.a=a
this.b=b},
d6:function d6(){},
bB:function bB(){},
cB:function cB(){},
bR:function bR(){},
nh(a,b){var s,r,q,p=null
try{p=JSON.parse(a)}catch(r){s=A.aw(r)
q=A.jX(String(s))
throw A.d(q)}q=A.iH(p)
return q},
iH(a){var s
if(a==null)return null
if(typeof a!="object")return a
if(Object.getPrototypeOf(a)!==Array.prototype)return new A.f0(a,Object.create(null))
for(s=0;s<a.length;++s)a[s]=A.iH(a[s])
return a},
f0:function f0(a,b){this.a=a
this.b=b
this.c=null},
f1:function f1(a){this.a=a},
dx:function dx(){},
dz:function dz(){},
he:function he(){},
hf:function hf(a){this.a=a},
jY(a,b){return A.m1(a,b,null)},
jG(a,b){var s=A.m9(a,b)
if(s!=null)return s
throw A.d(A.jX(a))},
lK(a,b){a=A.d(a)
if(a==null)a=t.K.a(a)
a.stack=b.l(0)
throw a
throw A.d("unreachable")},
je(a,b,c,d){var s,r=c?J.k5(a,d):J.lT(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
a3(a,b){var s,r=A.m([],b.h("D<0>"))
for(s=J.bU(a);s.B();)B.a.k(r,b.a(s.gD(s)))
return r},
hi(a,b){var s=A.lX(a,b)
return s},
lX(a,b){var s,r
if(Array.isArray(a))return A.m(a.slice(0),b.h("D<0>"))
s=A.m([],b.h("D<0>"))
for(r=J.bU(a);r.B();)B.a.k(s,r.gD(r))
return s},
kl(a,b,c){var s=J.bU(b)
if(!s.B())return a
if(c.length===0){do a+=A.p(s.gD(s))
while(s.B())}else{a+=A.p(s.gD(s))
for(;s.B();)a=a+c+A.p(s.gD(s))}return a},
ka(a,b){return new A.e7(a,b.gdY(),b.ge_(),b.gdZ())},
lI(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
lJ(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
dB(a){if(a>=10)return""+a
return"0"+a},
bw(a){if(typeof a=="number"||A.d9(a)||a==null)return J.df(a)
if(typeof a=="string")return JSON.stringify(a)
return A.ma(a)},
lL(a,b){A.fK(a,"error",t.K)
A.fK(b,"stackTrace",t.l)
A.lK(a,b)},
dk(a){return new A.dj(a)},
aN(a,b){return new A.ax(!1,null,b,a)},
jP(a,b,c){return new A.ax(!0,a,b,c)},
kg(a,b){return new A.cu(null,null,!0,a,b,"Value not in range")},
ee(a,b,c,d,e){return new A.cu(b,c,!0,a,d,"Invalid value")},
mb(a,b,c){if(0>a||a>c)throw A.d(A.ee(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.d(A.ee(b,a,c,"end",null))
return b}return c},
K(a,b,c,d){return new A.dO(b,!0,a,d,"Index out of range")},
bJ(a){return new A.eD(a)},
ko(a){return new A.eB(a)},
M(a){return new A.bm(a)},
ad(a){return new A.dy(a)},
dE(a){return new A.ib(a)},
jX(a){return new A.h6(a)},
lS(a,b,c){var s,r
if(A.jH(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.m([],t.s)
B.a.k($.Z,a)
try{A.nc(a,s)}finally{if(0>=$.Z.length)return A.c($.Z,-1)
$.Z.pop()}r=A.kl(b,t.d.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
k4(a,b,c){var s,r
if(A.jH(a))return b+"..."+c
s=new A.cy(b)
B.a.k($.Z,a)
try{r=s
r.a=A.kl(r.a,a,", ")}finally{if(0>=$.Z.length)return A.c($.Z,-1)
$.Z.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
nc(a,b){var s,r,q,p,o,n,m,l=a.gH(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.B())return
s=A.p(l.gD(l))
B.a.k(b,s)
k+=s.length+2;++j}if(!l.B()){if(j<=5)return
if(0>=b.length)return A.c(b,-1)
r=b.pop()
if(0>=b.length)return A.c(b,-1)
q=b.pop()}else{p=l.gD(l);++j
if(!l.B()){if(j<=4){B.a.k(b,A.p(p))
return}r=A.p(p)
if(0>=b.length)return A.c(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gD(l);++j
for(;l.B();p=o,o=n){n=l.gD(l);++j
if(j>100){while(!0){if(!(k>75&&j>3))break
if(0>=b.length)return A.c(b,-1)
k-=b.pop().length+2;--j}B.a.k(b,"...")
return}}q=A.p(p)
r=A.p(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
while(!0){if(!(k>80&&b.length>3))break
if(0>=b.length)return A.c(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)B.a.k(b,m)
B.a.k(b,q)
B.a.k(b,r)},
kb(a,b,c,d){var s=B.c.gu(a)
b=B.c.gu(b)
c=B.c.gu(c)
d=B.c.gu(d)
d=A.km(A.cz(A.cz(A.cz(A.cz($.lq(),s),b),c),d))
return d},
hr:function hr(a,b){this.a=a
this.b=b},
c1:function c1(a,b){this.a=a
this.b=b},
G:function G(){},
dj:function dj(a){this.a=a},
aE:function aE(){},
ax:function ax(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cu:function cu(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
dO:function dO(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
e7:function e7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eD:function eD(a){this.a=a},
eB:function eB(a){this.a=a},
bm:function bm(a){this.a=a},
dy:function dy(a){this.a=a},
cx:function cx(){},
ib:function ib(a){this.a=a},
h6:function h6(a){this.a=a},
h:function h(){},
N:function N(){},
x:function x(){},
fn:function fn(){},
cy:function cy(a){this.a=a},
nA(){var s=document
s.toString
return s},
fV(a,b){var s=document.createElement("canvas")
s.toString
if(b!=null)B.f.sZ(s,b)
if(a!=null)B.f.sY(s,a)
return s},
mp(a,b){if(b.parentNode===a){a.removeChild(b).toString
return!0}return!1},
j5(a,b){var s,r,q,p,o=a===b
if(!o){s=b.tagName
s.toString
r=s==="HTML"}else r=!0
if(a==null||o){if(r)return new A.bE(0,0,t.x)
throw A.d(A.aN("Specified element is not a transitive offset parent of this element.",null))}q=A.j5(a.offsetParent,b)
s=a.offsetLeft
s.toString
s=B.c.U(s)
p=a.offsetTop
p.toString
return new A.bE(q.a+s,q.b+B.c.U(p),t.x)},
lR(a){var s=new IntersectionObserver(A.bq(a,2))
s.toString
return s},
cL(a,b,c,d,e){var s=c==null?null:A.jB(new A.i9(c),t.A)
s=new A.cK(a,b,s,!1,e.h("cK<0>"))
s.bX()
return s},
jB(a,b){var s=$.C
if(s===B.d)return a
return s.dG(a,b)},
n:function n(){},
fP:function fP(){},
dg:function dg(){},
di:function di(){},
b5:function b5(){},
b7:function b7(){},
b8:function b8(){},
dr:function dr(){},
ar:function ar(){},
fY:function fY(){},
B:function B(){},
c_:function c_(){},
fZ:function fZ(){},
ae:function ae(){},
ay:function ay(){},
h_:function h_(){},
h0:function h0(){},
h1:function h1(){},
ba:function ba(){},
bu:function bu(){},
h2:function h2(){},
c2:function c2(){},
c3:function c3(){},
dD:function dD(){},
h3:function h3(){},
i:function i(){},
f:function f(){},
b:function b(){},
V:function V(){},
dF:function dF(){},
dG:function dG(){},
dI:function dI(){},
a0:function a0(){},
h9:function h9(){},
bd:function bd(){},
c9:function c9(){},
aQ:function aQ(){},
be:function be(){},
hb:function hb(){},
hj:function hj(){},
bk:function bk(){},
ho:function ho(){},
dX:function dX(){},
hp:function hp(a){this.a=a},
dY:function dY(){},
hq:function hq(a){this.a=a},
a4:function a4(){},
dZ:function dZ(){},
r:function r(){},
cp:function cp(){},
a5:function a5(){},
ec:function ec(){},
eg:function eg(){},
hA:function hA(a){this.a=a},
ej:function ej(){},
W:function W(){},
em:function em(){},
a8:function a8(){},
en:function en(){},
a9:function a9(){},
ep:function ep(){},
hL:function hL(a){this.a=a},
S:function S(){},
X:function X(){},
Q:function Q(){},
es:function es(){},
et:function et(){},
hT:function hT(){},
aa:function aa(){},
ex:function ex(){},
hU:function hU(){},
i_:function i_(){},
eF:function eF(){},
eG:function eG(){},
aX:function aX(){},
au:function au(){},
eN:function eN(){},
cI:function cI(){},
eY:function eY(){},
cS:function cS(){},
fi:function fi(){},
fo:function fo(){},
j6:function j6(a,b){this.a=a
this.$ti=b},
cJ:function cJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
bN:function bN(a,b,c,d){var _=this
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
i9:function i9(a){this.a=a},
ia:function ia(a){this.a=a},
o:function o(){},
c6:function c6(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
eO:function eO(){},
eQ:function eQ(){},
eR:function eR(){},
eS:function eS(){},
eT:function eT(){},
eV:function eV(){},
eW:function eW(){},
eZ:function eZ(){},
f_:function f_(){},
f4:function f4(){},
f5:function f5(){},
f6:function f6(){},
f7:function f7(){},
f8:function f8(){},
f9:function f9(){},
fc:function fc(){},
fd:function fd(){},
ff:function ff(){},
cY:function cY(){},
cZ:function cZ(){},
fg:function fg(){},
fh:function fh(){},
fj:function fj(){},
fp:function fp(){},
fq:function fq(){},
d0:function d0(){},
d1:function d1(){},
ft:function ft(){},
fu:function fu(){},
fy:function fy(){},
fz:function fz(){},
fA:function fA(){},
fB:function fB(){},
fC:function fC(){},
fD:function fD(){},
fE:function fE(){},
fF:function fF(){},
fG:function fG(){},
fH:function fH(){},
kM(a){var s,r,q,p
if(a==null)return a
if(typeof a=="string"||typeof a=="number"||A.d9(a))return a
s=Object.getPrototypeOf(a)
r=s===Object.prototype
r.toString
if(!r){r=s===null
r.toString}else r=!0
if(r)return A.b1(a)
r=Array.isArray(a)
r.toString
if(r){q=[]
p=0
while(!0){r=a.length
r.toString
if(!(p<r))break
q.push(A.kM(a[p]));++p}return q}return a},
b1(a){var s,r,q,p,o,n
if(a==null)return null
s=A.k8(t.N,t.z)
r=Object.getOwnPropertyNames(a)
for(q=r.length,p=0;p<r.length;r.length===q||(0,A.O)(r),++p){o=r[p]
n=o
n.toString
s.j(0,n,A.kM(a[o]))}return s},
kL(a){var s
if(a==null)return a
if(typeof a=="string"||typeof a=="number"||A.d9(a))return a
if(t.f.b(a))return A.l3(a)
if(t.j.b(a)){s=[]
J.fN(a,new A.iG(s))
a=s}return a},
l3(a){var s={}
J.fN(a,new A.iR(s))
return s},
iG:function iG(a){this.a=a},
iR:function iR(a){this.a=a},
ce:function ce(){},
mR(a,b,c,d){var s,r,q
A.jp(b)
t.j.a(d)
if(b){s=[c]
B.a.V(s,d)
d=s}r=t.z
q=A.a3(J.jO(d,A.nM(),r),r)
return A.jt(A.jY(t.Z.a(a),q))},
lU(a){return new A.hd(new A.cP(t.aR)).$1(a)},
mU(a){return a},
ju(a,b,c){var s
try{if(Object.isExtensible(a)&&!Object.prototype.hasOwnProperty.call(a,b)){Object.defineProperty(a,b,{value:c})
return!0}}catch(s){}return!1},
kS(a,b){if(Object.prototype.hasOwnProperty.call(a,b))return a[b]
return null},
jt(a){if(a==null||typeof a=="string"||typeof a=="number"||A.d9(a))return a
if(a instanceof A.aB)return a.a
if(A.l7(a))return a
if(t.Q.b(a))return a
if(a instanceof A.c1)return A.bl(a)
if(t.Z.b(a))return A.kR(a,"$dart_jsFunction",new A.iI())
return A.kR(a,"_$dart_jsObject",new A.iJ($.jN()))},
kR(a,b,c){var s=A.kS(a,b)
if(s==null){s=c.$1(a)
A.ju(a,b,s)}return s},
kN(a){var s,r
if(a==null||typeof a=="string"||typeof a=="number"||typeof a=="boolean")return a
else if(a instanceof Object&&A.l7(a))return a
else if(a instanceof Object&&t.Q.b(a))return a
else if(a instanceof Date){s=A.ab(a.getTime())
if(Math.abs(s)<=864e13)r=!1
else r=!0
if(r)A.aM(A.aN("DateTime is outside valid range: "+s,null))
A.fK(!1,"isUtc",t.y)
return new A.c1(s,!1)}else if(a.constructor===$.jN())return a.o
else return A.jA(a)},
jA(a){if(typeof a=="function")return A.jv(a,$.fM(),new A.iN())
if(a instanceof Array)return A.jv(a,$.jM(),new A.iO())
return A.jv(a,$.jM(),new A.iP())},
jv(a,b,c){var s=A.kS(a,b)
if(s==null||!(a instanceof Object)){s=c.$1(a)
A.ju(a,b,s)}return s},
hd:function hd(a){this.a=a},
iI:function iI(){},
iJ:function iJ(a){this.a=a},
iN:function iN(){},
iO:function iO(){},
iP:function iP(){},
aB:function aB(a){this.a=a},
cd:function cd(a){this.a=a},
bf:function bf(a,b){this.a=a
this.$ti=b},
bP:function bP(){},
iq:function iq(){},
bE:function bE(a,b,c){this.a=a
this.b=b
this.$ti=c},
ag:function ag(){},
dT:function dT(){},
ai:function ai(){},
e8:function e8(){},
hv:function hv(){},
eq:function eq(){},
al:function al(){},
ez:function ez(){},
f2:function f2(){},
f3:function f3(){},
fa:function fa(){},
fb:function fb(){},
fl:function fl(){},
fm:function fm(){},
fv:function fv(){},
fw:function fw(){},
fR:function fR(){},
dl:function dl(){},
fS:function fS(a){this.a=a},
dm:function dm(){},
aO:function aO(){},
e9:function e9(){},
eL:function eL(){},
dp:function dp(){},
bt:function bt(){},
dK:function dK(){},
ed:function ed(){},
ef:function ef(){},
cv:function cv(){},
bG:function bG(){},
ek:function ek(){},
eu:function eu(){},
eA:function eA(){},
dL:function dL(a){var _=this
_.a=a
_.f=_.e=_.d=_.c=_.b=0
_.x=_.w=_.r=null},
h7:function h7(){},
fU:function fU(){},
hH:function hH(a,b,c,d,e,f,g,h,i){var _=this
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
lH(){return new A.b9(0,1,0,1)},
jW(){return new A.b9(1,0,0,1)},
b9:function b9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
h5:function h5(){},
lZ(){return new A.bj(A.m([1,0,0,0,1,0,0,0,1],t.n))},
k9(){return new A.bC(A.m([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t.n))},
kc(a,b){return new A.bF(a,b)},
kd(){return new A.bF(0,0)},
ke(a,b,c){return new A.a6(a,b,c)},
hu(){return new A.a6(0,0,0)},
jf(a,b,c){var s,r,q=new A.hy(),p=a*0.5,o=b*0.5,n=c*0.5,m=Math.cos(p),l=Math.sin(p),k=Math.cos(o),j=Math.sin(o),i=Math.cos(n),h=Math.sin(n),g=i*j,f=h*k
q.a=g*m+f*l
s=i*k
r=h*j
q.b=s*l-r*m
q.c=f*m-g*l
q.d=s*m+r*l
return q},
hV(){return new A.T(A.m([1,0,0,0,1,0,0,0,1],t.n))},
aW(){return new A.aV(A.m([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t.n))},
ey(a){return new A.aV(A.m([a,0,0,0,0,a,0,0,0,0,a,0,0,0,0,1],t.n))},
hW(a){return new A.aV(A.m([1,0,0,0,0,1,0,0,0,0,1,0,a.a,a.b,a.c,1],t.n))},
i1(a,b,c){return new A.am(a,b,c)},
kq(){return new A.am(0,0,0)},
h8:function h8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bj:function bj(a){this.a=a},
bC:function bC(a){this.a=a},
ea:function ea(){},
bF:function bF(a,b){this.a=a
this.b=b},
a6:function a6(a,b,c){this.a=a
this.b=b
this.c=c},
ct:function ct(a){this.b=a},
hy:function hy(){var _=this
_.d=_.c=_.b=_.a=0},
T:function T(a){this.a=a},
aV:function aV(a){this.a=a},
am:function am(a,b,c){this.a=a
this.b=b
this.c=c},
el:function el(){var _=this
_.e=_.c=_.b=_.a=0
_.f=1},
dn(){return new A.b6(770,1,0,0,0,0)},
dt(){return new A.ds(16384,1)},
jh(){return new A.ew()},
kp(a){return new A.i0(a)},
bn(a){return new A.i3(a)},
dW(a){return new A.hm(a)},
aR(a){return new A.hn(a)},
aT(a){return new A.hB(a)},
eE(){return new A.bK(A.m([new A.aq(0,2,8,0)],t.U))},
kr(){return new A.bK(A.m([new A.aq(0,3,12,0)],t.U))},
jj(a){var s=a*4
return new A.bK(A.m([new A.aq(0,3,s,0),new A.aq(1,2,s,12)],t.U))},
ks(){return new A.bK(A.m([new A.aq(0,3,32,0),new A.aq(1,2,32,12),new A.aq(2,3,32,20)],t.U))},
mj(){var s,r,q,p=$.jk
if(p==null)try{p=A.fV(null,null)
s=A.jd(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],t.N,t.z)
r=B.f.aD(p,"webgl",s)
if(r==null)r=B.f.aD(p,"experimental-webgl",s)
t.c4.a(r)
$.jk=!0
p=!0}catch(q){$.jk=!1
p=!1}p.toString
return p},
mi(a,b){var s,r,q,p,o,n,m=b.getSupportedExtensions()
if(m==null)return
s=A.m([],t.s)
for(r=a.f,q=r.length,p=J.iT(m),o=0;o<r.length;r.length===q||(0,A.O)(r),++o){n=r[o]
if(!p.c2(m,n))B.a.k(s,n)}if(s.length!==0)throw A.d(A.dE("Invalid webgl extensions\n"+A.p(s)))},
lN(a,b,c){var s,r,q,p,o,n,m,l,k,j,i
$.k0=$.k_=!0
B.a.X($.z)
B.a.X($.bc)
B.a.X($.dM)
B.a.X($.dN)
$.j9.X(0)
s=(1+Math.sqrt(5))*0.5
A.a1(-1,s,0)
A.a1(1,s,0)
r=-s
A.a1(-1,r,0)
A.a1(1,r,0)
A.a1(0,-1,s)
A.a1(0,1,s)
A.a1(0,-1,r)
A.a1(0,1,r)
A.a1(s,0,-1)
A.a1(s,0,1)
A.a1(r,0,-1)
A.a1(r,0,1)
B.a.k($.z,new A.E(0,11,5))
B.a.k($.z,new A.E(0,5,1))
B.a.k($.z,new A.E(0,1,7))
B.a.k($.z,new A.E(0,7,10))
B.a.k($.z,new A.E(0,10,11))
B.a.k($.z,new A.E(1,5,9))
B.a.k($.z,new A.E(5,11,4))
B.a.k($.z,new A.E(11,10,2))
B.a.k($.z,new A.E(10,7,6))
B.a.k($.z,new A.E(7,1,8))
B.a.k($.z,new A.E(3,9,4))
B.a.k($.z,new A.E(3,4,2))
B.a.k($.z,new A.E(3,2,6))
B.a.k($.z,new A.E(3,6,8))
B.a.k($.z,new A.E(3,8,9))
B.a.k($.z,new A.E(4,9,5))
B.a.k($.z,new A.E(2,4,11))
B.a.k($.z,new A.E(6,2,10))
B.a.k($.z,new A.E(8,6,7))
B.a.k($.z,new A.E(9,8,1))
for(q=0;q<a;++q){B.a.X($.c7)
for(r=$.z.length,p=0;p<$.z.length;$.z.length===r||(0,A.O)($.z),++p){o=$.z[p]
n=o.a
m=o.b
l=A.j8(n,m)
k=o.c
j=A.j8(m,k)
i=A.j8(k,n)
B.a.k($.c7,new A.E(n,l,i))
B.a.k($.c7,new A.E(m,j,l))
B.a.k($.c7,new A.E(k,i,j))
B.a.k($.c7,new A.E(l,j,i))}B.a.X($.z)
B.a.V($.z,$.c7)}for(r=$.z.length,p=0;p<$.z.length;$.z.length===r||(0,A.O)($.z),++p){o=$.z[p]
B.a.k($.dM,o.a)
B.a.k($.dM,o.b)
B.a.k($.dM,o.c)}$.k1=new Uint16Array(A.d8($.dM))
$.k2=new Float32Array(A.d8($.dN))},
a1(a,b,c){var s,r,q,p,o,n,m,l,k=new A.a6(a,b,c)
B.a.k($.bc,k)
s=new A.am(k.a,k.b,k.c)
s.a4()
r=s.c
r===$&&A.v()
q=s.a
q===$&&A.v()
p=Math.atan2(-r,q)
p+=p<0?6.283185307179586:0
r=s.b
r===$&&A.v()
o=Math.acos(r)
n=new A.am(-Math.sin(p),0,-Math.cos(p))
n.a4()
r=t.n
B.a.V($.dN,A.m([s.a,s.b,s.c],r))
if($.k_)B.a.V($.dN,A.m([p/6.283185307179586,o/3.141592653589793],r))
if($.k0){q=n.a
q===$&&A.v()
m=n.b
m===$&&A.v()
l=n.c
l===$&&A.v()
B.a.V($.dN,A.m([q,m,l],r))}return $.bc.length-1},
j8(a,b){var s,r,q=A.p(Math.min(a,b))+"-"+A.p(Math.max(a,b)),p=$.j9.m(0,q)
if(p!=null)return p
s=$.bc.length
if(!(a>=0&&a<s))return A.c($.bc,a)
r=$.bc[a]
if(!(b>=0&&b<s))return A.c($.bc,b)
s=$.bc[b]
p=A.a1((r.a+s.a)*0.5,(r.b+s.b)*0.5,(r.c+s.c)*0.5)
$.j9.j(0,q,p)
return p},
aq:function aq(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
b6:function b6(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.d=c
_.e=d
_.f=e
_.r=f},
ds:function ds(a,b){this.a=a
this.f=b},
az:function az(a){this.a=a},
ha:function ha(a,b,c){this.a=a
this.b=b
this.c=c},
i4:function i4(a){this.b=a},
fT:function fT(){},
h4:function h4(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
dC:function dC(){},
dJ:function dJ(){},
bW:function bW(){var _=this
_.b=_.a=0
_.f=_.e=_.d=_.c=null},
dU:function dU(a,b,c){this.a=a
this.c=b
this.d=c},
dV:function dV(){},
cr:function cr(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null},
aj:function aj(a,b){var _=this
_.a=a
_.b=b
_.f=_.e=_.d=_.c=null},
ew:function ew(){this.f=this.e=this.d=null},
hZ:function hZ(){},
i0:function i0(a){this.a=a
this.c=this.b=null},
i2:function i2(a){this.a=a
this.c=this.b=null},
i3:function i3(a){this.a=a
this.c=this.b=null},
hm:function hm(a){this.a=a
this.c=this.b=null},
hn:function hn(a){this.a=a
this.c=this.b=null},
hB:function hB(a){this.a=a
this.c=this.b=null},
bK:function bK(a){this.a=a},
hz:function hz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.f=d},
eI:function eI(){},
eM:function eM(){},
fX:function fX(a,b,c,d){var _=this
_.r=a
_.c=b
_.d=c
_.a=d},
hI:function hI(a,b,c,d,e){var _=this
_.c=a
_.d=b
_.e=c
_.f=d
_.a=e},
hJ:function hJ(a,b,c,d,e,f,g,h,i){var _=this
_.c=a
_.d=b
_.e=c
_.f=d
_.r=e
_.w=f
_.x=g
_.y=h
_.a=i},
hK:function hK(a,b,c,d){var _=this
_.c=a
_.d=b
_.e=c
_.a=d},
fr:function fr(){},
hS:function hS(a,b,c,d){var _=this
_.r=a
_.c=b
_.d=c
_.a=d},
fs:function fs(){},
ev:function ev(a,b,c){this.f=a
this.c=b
this.a=c},
E:function E(a,b,c){this.a=a
this.b=b
this.c=c},
eH:function eH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=!1
_.f=null},
dh:function dh(a,b,c,d,e,f,g,h,i,j){var _=this
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
b3:function b3(){},
bv:function bv(){},
c8:function c8(){},
ch:function ch(){},
c0(a,b,c,d,e){var s=t.n,r=a*b
return new A.dA(new A.T(A.m([1,0,0,0,1,0,0,0,1],s)),new A.T(A.m([1,0,0,0,1,0,0,0,1],s)),new A.T(A.m([r,0,0,0,a,0,0-0.5*r,0-0.5*a,1],s)),new A.b9(1,0,0,c),d,e,b)},
fW(a,b,c){var s=t.n
return new A.dw(new A.T(A.m([1,0,0,0,1,0,0,0,1],s)),new A.T(A.m([1,0,0,0,1,0,0,0,1],s)),new A.T(A.m([1,0,0,0,1,0,0,0,1],s)),new A.bF(b,c),new A.b9(0,0,1,1),a+1)},
ht:function ht(a,b,c){this.a=a
this.b=b
this.c=c},
dA:function dA(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0
_.f=e
_.r=f
_.w=g},
dw:function dw(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
dH:function dH(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.r=f},
hC:function hC(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
ei:function ei(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){var _=this
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
hD:function hD(a,b,c,d,e){var _=this
_.c=a
_.d=b
_.e=c
_.f=d
_.a=e},
hF:function hF(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
hG:function hG(a,b,c,d,e,f){var _=this
_.c=a
_.d=b
_.e=c
_.f=d
_.r=e
_.a=f},
cw:function cw(){},
hQ:function hQ(a){var _=this
_.a=a
_.b=!1
_.e=_.d=_.c=null},
hR:function hR(a){this.a=a},
l7(a){return t.J.b(a)||t.A.b(a)||t.cF.b(a)||t.cW.b(a)||t.a1.b(a)||t.cg.b(a)||t.bj.b(a)},
nS(a){A.la(new A.cf("Field '"+a+"' has been assigned during initialization."),new Error())},
v(){A.la(new A.cf("Field '' has not been initialized."),new Error())},
mV(a){var s,r=a.$dart_jsFunction
if(r!=null)return r
s=function(b,c){return function(){return b(c,Array.prototype.slice.apply(arguments))}}(A.mS,a)
s[$.fM()]=a
a.$dart_jsFunction=s
return s},
mS(a,b){t.j.a(b)
return A.jY(t.Z.a(a),b)},
jC(a,b){if(typeof a=="function")return a
else return b.a(A.mV(a))},
nO(){var s,r,q,p="webglcontextlost",o=$.lp(),n=$.lo(),m=t.Z
o.j(0,"OnScreenOrientation",A.jC(n.gcE(),m))
o.j(0,"OnReport",A.jC(n.gcC(),m))
o.j(0,"Kill",A.jC(n.gcB(),m))
m=n.b
if(!A.mj())A.aM(A.dE("WebGL is not available"))
o=m.a
s=o.style
s.position="absolute"
s.width="100%"
s.height="100%"
s.top="0"
s.left="0"
s=A.lR(m.gcS())
m.f=s
s.observe(o)
s=n.c
r=window
r.toString
s.x=B.k.cb(r,s.gbx())
r=t.d8
s.sbS(r.a(n.gcY()))
s.sbT(r.a(n.gd_()))
r=n.a
r.children.toString
r.appendChild(o).toString
r=n.d
s=window
s.toString
B.a.k(r,A.cL(s,"beforeunload",t.bF.a(n.gcM()),!1,t.D))
s=window
s.toString
B.a.k(r,A.cL(s,"resize",t.cx.a(n.gcW()),!1,t.A))
s=window
s.toString
B.a.k(r,A.cL(s,"deviceorientation",t.cu.a(n.gcO()),!1,t.bK))
s=t.cI
q=s.h("~(1)?")
s=s.c
B.a.k(r,A.cL(o,p,q.a(n.gd1()),!1,s))
B.a.k(r,A.cL(o,p,q.a(n.gd3()),!1,s))
s=m.c
B.a.k(r,new A.aY(s,A.y(s).h("aY<1>")).c7(n.gcQ()))
m=m.d
B.a.k(r,new A.aY(m,A.y(m).h("aY<1>")).c7(n.gcU()))
n.an()
n.aa(new A.ch())}},B={}
var w=[A,J,B]
var $={}
A.jb.prototype={}
J.bx.prototype={
L(a,b){return a===b},
gu(a){return A.cs(a)},
l(a){return"Instance of '"+A.hx(a)+"'"},
ca(a,b){throw A.d(A.ka(a,t.B.a(b)))},
gE(a){return A.br(A.jw(this))}}
J.dP.prototype={
l(a){return String(a)},
gu(a){return a?519018:218159},
gE(a){return A.br(t.y)},
$iA:1,
$iiQ:1}
J.cb.prototype={
L(a,b){return null==b},
l(a){return"null"},
gu(a){return 0},
$iA:1,
$iN:1}
J.a.prototype={}
J.bg.prototype={
gu(a){return 0},
l(a){return String(a)}}
J.eb.prototype={}
J.cA.prototype={}
J.aA.prototype={
l(a){var s=a[$.fM()]
if(s==null)return this.cq(a)
return"JavaScript function for "+J.df(s)},
$ibb:1}
J.bz.prototype={
gu(a){return 0},
l(a){return String(a)}}
J.bA.prototype={
gu(a){return 0},
l(a){return String(a)}}
J.D.prototype={
k(a,b){A.av(a).c.a(b)
if(!!a.fixed$length)A.aM(A.bJ("add"))
a.push(b)},
V(a,b){var s
A.av(a).h("h<1>").a(b)
if(!!a.fixed$length)A.aM(A.bJ("addAll"))
if(Array.isArray(b)){this.d9(a,b)
return}for(s=J.bU(b);s.B();)a.push(s.gD(s))},
d9(a,b){var s,r
t.b.a(b)
s=b.length
if(s===0)return
if(a===b)throw A.d(A.ad(a))
for(r=0;r<s;++r)a.push(b[r])},
X(a){if(!!a.fixed$length)A.aM(A.bJ("clear"))
a.length=0},
A(a,b){var s,r
A.av(a).h("~(1)").a(b)
s=a.length
for(r=0;r<s;++r){b.$1(a[r])
if(a.length!==s)throw A.d(A.ad(a))}},
aB(a,b,c){var s=A.av(a)
return new A.aD(a,s.t(c).h("1(2)").a(b),s.h("@<1>").t(c).h("aD<1,2>"))},
dO(a,b,c,d){var s,r,q
d.a(b)
A.av(a).t(d).h("1(1,2)").a(c)
s=a.length
for(r=b,q=0;q<s;++q){r=c.$2(r,a[q])
if(a.length!==s)throw A.d(A.ad(a))}return r},
q(a,b){if(!(b<a.length))return A.c(a,b)
return a[b]},
gv(a){if(a.length>0)return a[0]
throw A.d(A.ja())},
c2(a,b){var s
for(s=0;s<a.length;++s)if(J.j3(a[s],b))return!0
return!1},
l(a){return A.k4(a,"[","]")},
gH(a){return new J.b4(a,a.length,A.av(a).h("b4<1>"))},
gu(a){return A.cs(a)},
gi(a){return a.length},
j(a,b,c){var s
A.av(a).c.a(c)
if(!!a.immutable$list)A.aM(A.bJ("indexed set"))
s=a.length
if(b>=s)throw A.d(A.jE(a,b))
a[b]=c},
aj(a,b){var s=A.av(a)
s.h("l<1>").a(b)
s=A.hi(a,s.c)
this.V(s,b)
return s},
$ij:1,
$ih:1,
$il:1}
J.hc.prototype={}
J.b4.prototype={
gD(a){var s=this.d
return s==null?this.$ti.c.a(s):s},
B(){var s,r=this,q=r.a,p=q.length
if(r.b!==p){q=A.O(q)
throw A.d(q)}s=r.c
if(s>=p){r.sbH(null)
return!1}r.sbH(q[s]);++r.c
return!0},
sbH(a){this.d=this.$ti.h("1?").a(a)},
$ia2:1}
J.cc.prototype={
b_(a,b){var s
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=B.e.gb2(b)
if(this.gb2(a)===s)return 0
if(this.gb2(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gb2(a){return a===0?1/a<0:a<0},
U(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.d(A.bJ(""+a+".round()"))},
dH(a,b,c){if(B.e.b_(b,c)>0)throw A.d(A.l0(b))
if(this.b_(a,b)<0)return b
if(this.b_(a,c)>0)return c
return a},
l(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gu(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
b7(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
bV(a,b){var s
if(a>0)s=this.dA(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
dA(a,b){return b>31?0:a>>>b},
gE(a){return A.br(t.H)},
$iu:1,
$iH:1}
J.ca.prototype={
gE(a){return A.br(t.S)},
$iA:1,
$ik:1}
J.dR.prototype={
gE(a){return A.br(t.i)},
$iA:1}
J.by.prototype={
aj(a,b){return a+b},
aF(a,b,c){return a.substring(b,A.mb(b,c,a.length))},
l(a){return a},
gu(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gE(a){return A.br(t.N)},
gi(a){return a.length},
$iA:1,
$iq:1}
A.cf.prototype={
l(a){return"LateInitializationError: "+this.a}}
A.j_.prototype={
$0(){return A.jZ(null,t.P)},
$S:11}
A.hE.prototype={}
A.j.prototype={}
A.ah.prototype={
gH(a){var s=this
return new A.bh(s,s.gi(s),A.y(s).h("bh<ah.E>"))},
aB(a,b,c){var s=A.y(this)
return new A.aD(this,s.t(c).h("1(ah.E)").a(b),s.h("@<ah.E>").t(c).h("aD<1,2>"))}}
A.bh.prototype={
gD(a){var s=this.d
return s==null?this.$ti.c.a(s):s},
B(){var s,r=this,q=r.a,p=J.iT(q),o=p.gi(q)
if(r.b!==o)throw A.d(A.ad(q))
s=r.c
if(s>=o){r.saf(null)
return!1}r.saf(p.q(q,s));++r.c
return!0},
saf(a){this.d=this.$ti.h("1?").a(a)},
$ia2:1}
A.bi.prototype={
gH(a){var s=this.a,r=A.y(this)
return new A.ci(s.gH(s),this.b,r.h("@<1>").t(r.z[1]).h("ci<1,2>"))},
gi(a){var s=this.a
return s.gi(s)}}
A.c4.prototype={$ij:1}
A.ci.prototype={
B(){var s=this,r=s.b
if(r.B()){s.saf(s.c.$1(r.gD(r)))
return!0}s.saf(null)
return!1},
gD(a){var s=this.a
return s==null?this.$ti.z[1].a(s):s},
saf(a){this.a=this.$ti.h("2?").a(a)},
$ia2:1}
A.aD.prototype={
gi(a){return J.fO(this.a)},
q(a,b){return this.b.$1(J.lu(this.a,b))}}
A.P.prototype={}
A.bH.prototype={
gu(a){var s=this._hashCode
if(s!=null)return s
s=664597*B.h.gu(this.a)&536870911
this._hashCode=s
return s},
l(a){return'Symbol("'+this.a+'")'},
L(a,b){if(b==null)return!1
return b instanceof A.bH&&this.a===b.a},
$ibI:1}
A.bY.prototype={}
A.bX.prototype={
l(a){return A.hk(this)},
$iL:1}
A.bZ.prototype={
gi(a){return this.b.length},
gbO(){var s=this.$keys
if(s==null){s=Object.keys(this.a)
this.$keys=s}return s},
ai(a,b){if(typeof b!="string")return!1
if("__proto__"===b)return!1
return this.a.hasOwnProperty(b)},
m(a,b){if(!this.ai(0,b))return null
return this.b[this.a[b]]},
A(a,b){var s,r,q,p
this.$ti.h("~(1,2)").a(b)
s=this.gbO()
r=this.b
for(q=s.length,p=0;p<q;++p)b.$2(s[p],r[p])},
gI(a){return new A.cQ(this.gbO(),this.$ti.h("cQ<1>"))}}
A.cQ.prototype={
gi(a){return this.a.length},
gH(a){var s=this.a
return new A.cR(s,s.length,this.$ti.h("cR<1>"))}}
A.cR.prototype={
gD(a){var s=this.d
return s==null?this.$ti.c.a(s):s},
B(){var s=this,r=s.c
if(r>=s.b){s.sag(null)
return!1}s.sag(s.a[r]);++s.c
return!0},
sag(a){this.d=this.$ti.h("1?").a(a)},
$ia2:1}
A.dQ.prototype={
gdY(){var s=this.a
return s},
ge_(){var s,r,q,p,o=this
if(o.c===1)return B.o
s=o.d
r=s.length-o.e.length-o.f
if(r===0)return B.o
q=[]
for(p=0;p<r;++p){if(!(p<s.length))return A.c(s,p)
q.push(s[p])}q.fixed$length=Array
q.immutable$list=Array
return q},
gdZ(){var s,r,q,p,o,n,m,l,k=this
if(k.c!==0)return B.p
s=k.e
r=s.length
q=k.d
p=q.length-r-k.f
if(r===0)return B.p
o=new A.af(t.bV)
for(n=0;n<r;++n){if(!(n<s.length))return A.c(s,n)
m=s[n]
l=p+n
if(!(l>=0&&l<q.length))return A.c(q,l)
o.j(0,new A.bH(m),q[l])}return new A.bY(o,t.cf)},
$ik3:1}
A.hw.prototype={
$2(a,b){var s
A.Y(a)
s=this.a
s.b=s.b+"$"+a
B.a.k(this.b,a)
B.a.k(this.c,b);++s.a},
$S:2}
A.hX.prototype={
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
A.cq.prototype={
l(a){return"Null check operator used on a null value"}}
A.dS.prototype={
l(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.eC.prototype={
l(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.hs.prototype={
l(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.c5.prototype={}
A.d_.prototype={
l(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$iak:1}
A.aP.prototype={
l(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.lb(r==null?"unknown":r)+"'"},
$ibb:1,
ge5(){return this},
$C:"$1",
$R:1,
$D:null}
A.du.prototype={$C:"$0",$R:0}
A.dv.prototype={$C:"$2",$R:2}
A.er.prototype={}
A.eo.prototype={
l(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.lb(s)+"'"}}
A.bs.prototype={
L(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.bs))return!1
return this.$_target===b.$_target&&this.a===b.a},
gu(a){return(A.j0(this.a)^A.cs(this.$_target))>>>0},
l(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.hx(this.a)+"'")}}
A.eP.prototype={
l(a){return"Reading static variable '"+this.a+"' during its initialization"}}
A.eh.prototype={
l(a){return"RuntimeError: "+this.a}}
A.it.prototype={}
A.af.prototype={
gi(a){return this.a},
gI(a){return new A.aC(this,A.y(this).h("aC<1>"))},
ai(a,b){var s=this.b
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
return q}else return this.dT(b)},
dT(a){var s,r,q=this.d
if(q==null)return null
s=q[this.c5(a)]
r=this.c6(s,a)
if(r<0)return null
return s[r].b},
j(a,b,c){var s,r,q=this,p=A.y(q)
p.c.a(b)
p.z[1].a(c)
if(typeof b=="string"){s=q.b
q.bz(s==null?q.b=q.aS():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=q.c
q.bz(r==null?q.c=q.aS():r,b,c)}else q.dU(b,c)},
dU(a,b){var s,r,q,p,o=this,n=A.y(o)
n.c.a(a)
n.z[1].a(b)
s=o.d
if(s==null)s=o.d=o.aS()
r=o.c5(a)
q=s[r]
if(q==null)s[r]=[o.aT(a,b)]
else{p=o.c6(q,a)
if(p>=0)q[p].b=b
else q.push(o.aT(a,b))}},
X(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.bQ()}},
A(a,b){var s,r,q=this
A.y(q).h("~(1,2)").a(b)
s=q.e
r=q.r
for(;s!=null;){b.$2(s.a,s.b)
if(r!==q.r)throw A.d(A.ad(q))
s=s.c}},
bz(a,b,c){var s,r=A.y(this)
r.c.a(b)
r.z[1].a(c)
s=a[b]
if(s==null)a[b]=this.aT(b,c)
else s.b=c},
bQ(){this.r=this.r+1&1073741823},
aT(a,b){var s=this,r=A.y(s),q=new A.hg(r.c.a(a),r.z[1].a(b))
if(s.e==null)s.e=s.f=q
else s.f=s.f.c=q;++s.a
s.bQ()
return q},
c5(a){return J.j4(a)&1073741823},
c6(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.j3(a[r].a,b))return r
return-1},
l(a){return A.hk(this)},
aS(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
$ik7:1}
A.hg.prototype={}
A.aC.prototype={
gi(a){return this.a.a},
gH(a){var s=this.a,r=new A.cg(s,s.r,this.$ti.h("cg<1>"))
r.c=s.e
return r}}
A.cg.prototype={
gD(a){return this.d},
B(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.d(A.ad(q))
s=r.c
if(s==null){r.sag(null)
return!1}else{r.sag(s.a)
r.c=s.c
return!0}},
sag(a){this.d=this.$ti.h("1?").a(a)},
$ia2:1}
A.iV.prototype={
$1(a){return this.a(a)},
$S:3}
A.iW.prototype={
$2(a,b){return this.a(a,b)},
$S:12}
A.iX.prototype={
$1(a){return this.a(A.Y(a))},
$S:13}
A.e_.prototype={
gE(a){return B.K},
$iA:1}
A.cm.prototype={$iI:1}
A.e0.prototype={
gE(a){return B.L},
$iA:1}
A.bD.prototype={
gi(a){return a.length},
$it:1}
A.ck.prototype={
m(a,b){A.bo(b,a,a.length)
return a[b]},
$ij:1,
$ih:1,
$il:1}
A.cl.prototype={$ij:1,$ih:1,$il:1}
A.cj.prototype={
gE(a){return B.M},
$iA:1,
$ij7:1}
A.e1.prototype={
gE(a){return B.N},
$iA:1}
A.e2.prototype={
gE(a){return B.O},
m(a,b){A.bo(b,a,a.length)
return a[b]},
$iA:1}
A.e3.prototype={
gE(a){return B.P},
m(a,b){A.bo(b,a,a.length)
return a[b]},
$iA:1}
A.e4.prototype={
gE(a){return B.Q},
m(a,b){A.bo(b,a,a.length)
return a[b]},
$iA:1}
A.cn.prototype={
gE(a){return B.S},
m(a,b){A.bo(b,a,a.length)
return a[b]},
$iA:1,
$iji:1}
A.e5.prototype={
gE(a){return B.T},
m(a,b){A.bo(b,a,a.length)
return a[b]},
$iA:1}
A.co.prototype={
gE(a){return B.U},
gi(a){return a.length},
m(a,b){A.bo(b,a,a.length)
return a[b]},
$iA:1}
A.e6.prototype={
gE(a){return B.V},
gi(a){return a.length},
m(a,b){A.bo(b,a,a.length)
return a[b]},
$iA:1}
A.cT.prototype={}
A.cU.prototype={}
A.cV.prototype={}
A.cW.prototype={}
A.a7.prototype={
h(a){return A.iz(v.typeUniverse,this,a)},
t(a){return A.mJ(v.typeUniverse,this,a)}}
A.eX.prototype={}
A.iy.prototype={
l(a){return A.U(this.a,null)}}
A.eU.prototype={
l(a){return this.a}}
A.d2.prototype={$iaE:1}
A.i6.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:5}
A.i5.prototype={
$1(a){var s,r
this.a.a=t.M.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:14}
A.i7.prototype={
$0(){this.a.$0()},
$S:6}
A.i8.prototype={
$0(){this.a.$0()},
$S:6}
A.iw.prototype={
d8(a,b){if(self.setTimeout!=null)self.setTimeout(A.bq(new A.ix(this,b),0),a)
else throw A.d(A.bJ("`setTimeout()` not found."))}}
A.ix.prototype={
$0(){this.b.$0()},
$S:0}
A.eJ.prototype={}
A.iD.prototype={
$1(a){return this.a.$2(0,a)},
$S:1}
A.iE.prototype={
$2(a,b){this.a.$2(1,new A.c5(a,t.l.a(b)))},
$S:15}
A.iM.prototype={
$2(a,b){this.a(A.ab(a),b)},
$S:16}
A.bV.prototype={
l(a){return A.p(this.a)},
$iG:1,
gaE(){return this.b}}
A.aY.prototype={}
A.an.prototype={
aV(){},
aW(){},
sah(a){this.ch=this.$ti.h("an<1>?").a(a)},
sar(a){this.CW=this.$ti.h("an<1>?").a(a)}}
A.cD.prototype={
gdk(){return this.c<4},
dv(a){var s,r
A.y(this).h("an<1>").a(a)
s=a.CW
r=a.ch
if(s==null)this.sbJ(r)
else s.sah(r)
if(r==null)this.sbP(s)
else r.sar(s)
a.sar(a)
a.sah(a)},
dB(a,b,c,d){var s,r,q,p,o,n,m=this,l=A.y(m)
l.h("~(1)?").a(a)
t.Y.a(c)
if((m.c&4)!==0){l=new A.bM($.C,l.h("bM<1>"))
A.jJ(l.gdm())
if(c!=null)l.saU(t.M.a(c))
return l}s=$.C
r=d?1:0
q=A.ku(s,a,l.c)
A.mo(s,b)
p=c==null?A.nw():c
t.M.a(p)
l=l.h("an<1>")
o=new A.an(m,q,s,r,l)
o.sar(o)
o.sah(o)
l.a(o)
o.ay=m.c&1
n=m.e
m.sbP(o)
o.sah(null)
o.sar(n)
if(n==null)m.sbJ(o)
else n.sah(o)
if(m.d==m.e)A.kY(m.a)
return o},
dt(a){var s=this,r=A.y(s)
a=r.h("an<1>").a(r.h("at<1>").a(a))
if(a.ch===a)return null
r=a.ay
if((r&2)!==0)a.ay=r|4
else{s.dv(a)
if((s.c&2)===0&&s.d==null)s.dg()}return null},
da(){if((this.c&4)!==0)return new A.bm("Cannot add new events after calling close")
return new A.bm("Cannot add new events while doing an addStream")},
k(a,b){var s=this
A.y(s).c.a(b)
if(!s.gdk())throw A.d(s.da())
s.aZ(b)},
dg(){if((this.c&4)!==0)if(null.ge6())null.aM(null)
A.kY(this.b)},
sbJ(a){this.d=A.y(this).h("an<1>?").a(a)},
sbP(a){this.e=A.y(this).h("an<1>?").a(a)},
$ikj:1,
$ikD:1,
$iaZ:1}
A.cC.prototype={
aZ(a){var s,r=this.$ti
r.c.a(a)
for(s=this.d,r=r.h("cG<1>");s!=null;s=s.ch)s.dd(new A.cG(a,r))}}
A.aG.prototype={
dX(a){if((this.c&15)!==6)return!0
return this.b.b.b5(t.m.a(this.d),a.a,t.y,t.K)},
dS(a){var s,r=this,q=r.e,p=null,o=t.z,n=t.K,m=a.a,l=r.b.b
if(t.C.b(q))p=l.e1(q,m,a.b,o,n,t.l)
else p=l.b5(t.v.a(q),m,o,n)
try{o=r.$ti.h("2/").a(p)
return o}catch(s){if(t.b7.b(A.aw(s))){if((r.c&1)!==0)throw A.d(A.aN("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.d(A.aN("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.F.prototype={
bU(a){this.a=this.a&1|4
this.c=a},
b6(a,b,c){var s,r,q,p=this.$ti
p.t(c).h("1/(2)").a(a)
s=$.C
if(s===B.d){if(b!=null&&!t.C.b(b)&&!t.v.b(b))throw A.d(A.jP(b,"onError",u.c))}else{c.h("@<0/>").t(p.c).h("1(2)").a(a)
if(b!=null)b=A.nj(b,s)}r=new A.F(s,c.h("F<0>"))
q=b==null?1:3
this.ao(new A.aG(r,q,a,b,p.h("@<1>").t(c).h("aG<1,2>")))
return r},
e3(a,b){return this.b6(a,null,b)},
bW(a,b,c){var s,r=this.$ti
r.t(c).h("1/(2)").a(a)
s=new A.F($.C,c.h("F<0>"))
this.ao(new A.aG(s,19,a,b,r.h("@<1>").t(c).h("aG<1,2>")))
return s},
dz(a){this.a=this.a&1|16
this.c=a},
ap(a){this.a=a.a&30|this.a&1
this.c=a.c},
ao(a){var s,r=this,q=r.a
if(q<=3){a.a=t.F.a(r.c)
r.c=a}else{if((q&4)!==0){s=t.c.a(r.c)
if((s.a&24)===0){s.ao(a)
return}r.ap(s)}A.bp(null,null,r.b,t.M.a(new A.ic(r,a)))}},
aY(a){var s,r,q,p,o,n,m=this,l={}
l.a=a
if(a==null)return
s=m.a
if(s<=3){r=t.F.a(m.c)
m.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){n=t.c.a(m.c)
if((n.a&24)===0){n.aY(a)
return}m.ap(n)}l.a=m.av(a)
A.bp(null,null,m.b,t.M.a(new A.ik(l,m)))}},
au(){var s=t.F.a(this.c)
this.c=null
return this.av(s)},
av(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
bA(a){var s,r,q,p=this
p.a^=2
try{a.b6(new A.ih(p),new A.ii(p),t.P)}catch(q){s=A.aw(q)
r=A.aK(q)
A.jJ(new A.ij(p,s,r))}},
aN(a){var s,r=this,q=r.$ti
q.h("1/").a(a)
if(q.h("a_<1>").b(a))if(q.b(a))A.jl(a,r)
else r.bA(a)
else{s=r.au()
q.c.a(a)
r.a=8
r.c=a
A.bO(r,s)}},
aO(a){var s,r=this
r.$ti.c.a(a)
s=r.au()
r.a=8
r.c=a
A.bO(r,s)},
a6(a,b){var s
t.K.a(a)
t.l.a(b)
s=this.au()
this.dz(A.fQ(a,b))
A.bO(this,s)},
aM(a){var s=this.$ti
s.h("1/").a(a)
if(s.h("a_<1>").b(a)){this.bB(a)
return}this.df(a)},
df(a){var s=this
s.$ti.c.a(a)
s.a^=2
A.bp(null,null,s.b,t.M.a(new A.ie(s,a)))},
bB(a){var s=this.$ti
s.h("a_<1>").a(a)
if(s.b(a)){A.mq(a,this)
return}this.bA(a)},
de(a,b){this.a^=2
A.bp(null,null,this.b,t.M.a(new A.id(this,a,b)))},
$ia_:1}
A.ic.prototype={
$0(){A.bO(this.a,this.b)},
$S:0}
A.ik.prototype={
$0(){A.bO(this.b,this.a.a)},
$S:0}
A.ih.prototype={
$1(a){var s,r,q,p=this.a
p.a^=2
try{p.aO(p.$ti.c.a(a))}catch(q){s=A.aw(q)
r=A.aK(q)
p.a6(s,r)}},
$S:5}
A.ii.prototype={
$2(a,b){this.a.a6(t.K.a(a),t.l.a(b))},
$S:17}
A.ij.prototype={
$0(){this.a.a6(this.b,this.c)},
$S:0}
A.ig.prototype={
$0(){A.jl(this.a.a,this.b)},
$S:0}
A.ie.prototype={
$0(){this.a.aO(this.b)},
$S:0}
A.id.prototype={
$0(){this.a.a6(this.b,this.c)},
$S:0}
A.io.prototype={
$0(){var s,r,q,p,o,n,m=this,l=null
try{q=m.a.a
l=q.b.b.cd(t.O.a(q.d),t.z)}catch(p){s=A.aw(p)
r=A.aK(p)
q=m.c&&t.t.a(m.b.a.c).a===s
o=m.a
if(q)o.c=t.t.a(m.b.a.c)
else o.c=A.fQ(s,r)
o.b=!0
return}if(l instanceof A.F&&(l.a&24)!==0){if((l.a&16)!==0){q=m.a
q.c=t.t.a(l.c)
q.b=!0}return}if(l instanceof A.F){n=m.b.a
q=m.a
q.c=l.e3(new A.ip(n),t.z)
q.b=!1}},
$S:0}
A.ip.prototype={
$1(a){return this.a},
$S:18}
A.im.prototype={
$0(){var s,r,q,p,o,n,m,l
try{q=this.a
p=q.a
o=p.$ti
n=o.c
m=n.a(this.b)
q.c=p.b.b.b5(o.h("2/(1)").a(p.d),m,o.h("2/"),n)}catch(l){s=A.aw(l)
r=A.aK(l)
q=this.a
q.c=A.fQ(s,r)
q.b=!0}},
$S:0}
A.il.prototype={
$0(){var s,r,q,p,o,n,m=this
try{s=t.t.a(m.a.a.c)
p=m.b
if(p.a.dX(s)&&p.a.e!=null){p.c=p.a.dS(s)
p.b=!1}}catch(o){r=A.aw(o)
q=A.aK(o)
p=t.t.a(m.a.a.c)
n=m.b
if(p.a===r)n.c=p
else n.c=A.fQ(r,q)
n.b=!0}},
$S:0}
A.eK.prototype={}
A.aU.prototype={
gi(a){var s={},r=new A.F($.C,t.aQ)
s.a=0
this.aA(new A.hO(s,this),!0,new A.hP(s,r),r.gbF())
return r},
gv(a){var s=new A.F($.C,A.y(this).h("F<1>")),r=this.aA(null,!0,new A.hM(s),s.gbF())
r.b3(new A.hN(this,r,s))
return s}}
A.hO.prototype={
$1(a){A.y(this.b).c.a(a);++this.a.a},
$S(){return A.y(this.b).h("~(1)")}}
A.hP.prototype={
$0(){this.b.aN(this.a.a)},
$S:0}
A.hM.prototype={
$0(){var s,r,q,p,o
try{q=A.ja()
throw A.d(q)}catch(p){s=A.aw(p)
r=A.aK(p)
q=s
o=r
if(o==null)o=A.jQ(q)
this.a.a6(q,o)}},
$S:0}
A.hN.prototype={
$1(a){A.mT(this.b,this.c,A.y(this.a).c.a(a))},
$S(){return A.y(this.a).h("~(1)")}}
A.cE.prototype={
gu(a){return(A.cs(this.a)^892482866)>>>0},
L(a,b){if(b==null)return!1
if(this===b)return!0
return b instanceof A.aY&&b.a===this.a}}
A.cF.prototype={
bR(){return this.w.dt(this)},
aV(){A.y(this.w).h("at<1>").a(this)},
aW(){A.y(this.w).h("at<1>").a(this)}}
A.bL.prototype={
b3(a){var s=A.y(this)
this.sdl(A.ku(this.d,s.h("~(1)?").a(a),s.c))},
az(a){var s,r=this,q=r.e&=4294967279
if((q&8)===0){q=r.e=q|8
if((q&64)!==0){s=r.r
if(s.a===1)s.a=3}if((q&32)===0)r.saX(null)
r.f=r.bR()}q=$.j1()
return q},
aV(){},
aW(){},
bR(){return null},
dd(a){var s,r,q=this,p=q.r
if(p==null){p=new A.cX(A.y(q).h("cX<1>"))
q.saX(p)}s=p.c
if(s==null)p.b=p.c=a
else p.c=s.a=a
r=q.e
if((r&64)===0){r|=64
q.e=r
if(r<128)p.b8(q)}},
aZ(a){var s,r=this,q=A.y(r).c
q.a(a)
s=r.e
r.e=s|32
r.d.cf(r.a,a,q)
r.e&=4294967263
r.dh((s&4)!==0)},
dh(a){var s,r,q=this,p=q.e
if((p&64)!==0&&q.r.c==null){p=q.e=p&4294967231
if((p&4)!==0)if(p<128){s=q.r
s=s==null?null:s.c==null
s=s!==!1}else s=!1
else s=!1
if(s){p&=4294967291
q.e=p}}for(;!0;a=r){if((p&8)!==0){q.saX(null)
return}r=(p&4)!==0
if(a===r)break
q.e=p^32
if(r)q.aV()
else q.aW()
p=q.e&=4294967263}if((p&64)!==0&&p<128)q.r.b8(q)},
sdl(a){this.a=A.y(this).h("~(1)").a(a)},
saX(a){this.r=A.y(this).h("cX<1>?").a(a)},
$iat:1,
$iaZ:1}
A.bQ.prototype={
aA(a,b,c,d){var s=this.$ti
s.h("~(1)?").a(a)
t.Y.a(c)
return this.a.dB(s.h("~(1)?").a(a),d,c,b===!0)},
c7(a){return this.aA(a,null,null,null)}}
A.cH.prototype={}
A.cG.prototype={}
A.cX.prototype={
b8(a){var s,r=this
r.$ti.h("aZ<1>").a(a)
s=r.a
if(s===1)return
if(s>=1){r.a=1
return}A.jJ(new A.is(r,a))
r.a=1}}
A.is.prototype={
$0(){var s,r,q,p=this.a,o=p.a
p.a=0
if(o===3)return
s=p.$ti.h("aZ<1>").a(this.b)
r=p.b
q=r.a
p.b=q
if(q==null)p.c=null
A.y(r).h("aZ<1>").a(s).aZ(r.b)},
$S:0}
A.bM.prototype={
b3(a){this.$ti.h("~(1)?").a(a)},
az(a){this.a=-1
this.saU(null)
return $.j1()},
dn(){var s,r,q,p=this,o=p.a-1
if(o===0){p.a=-1
s=p.c
if(s!=null){r=s
q=!0}else{r=null
q=!1}if(q){p.saU(null)
p.b.ce(r)}}else p.a=o},
saU(a){this.c=t.Y.a(a)},
$iat:1}
A.fk.prototype={}
A.iF.prototype={
$0(){return this.a.aN(this.b)},
$S:0}
A.d7.prototype={$ikt:1}
A.iL.prototype={
$0(){A.lL(this.a,this.b)},
$S:0}
A.fe.prototype={
ce(a){var s,r,q
t.M.a(a)
try{if(B.d===$.C){a.$0()
return}A.kV(null,null,this,a,t.p)}catch(q){s=A.aw(q)
r=A.aK(q)
A.fJ(t.K.a(s),t.l.a(r))}},
cf(a,b,c){var s,r,q
c.h("~(0)").a(a)
c.a(b)
try{if(B.d===$.C){a.$1(b)
return}A.kW(null,null,this,a,b,t.p,c)}catch(q){s=A.aw(q)
r=A.aK(q)
A.fJ(t.K.a(s),t.l.a(r))}},
c_(a){return new A.iu(this,t.M.a(a))},
dG(a,b){return new A.iv(this,b.h("~(0)").a(a),b)},
cd(a,b){b.h("0()").a(a)
if($.C===B.d)return a.$0()
return A.kV(null,null,this,a,b)},
b5(a,b,c,d){c.h("@<0>").t(d).h("1(2)").a(a)
d.a(b)
if($.C===B.d)return a.$1(b)
return A.kW(null,null,this,a,b,c,d)},
e1(a,b,c,d,e,f){d.h("@<0>").t(e).t(f).h("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.C===B.d)return a.$2(b,c)
return A.nk(null,null,this,a,b,c,d,e,f)},
b4(a,b,c,d){return b.h("@<0>").t(c).t(d).h("1(2,3)").a(a)}}
A.iu.prototype={
$0(){return this.a.ce(this.b)},
$S:0}
A.iv.prototype={
$1(a){var s=this.c
return this.a.cf(this.b,s.a(a),s)},
$S(){return this.c.h("~(0)")}}
A.cM.prototype={
gi(a){return this.a},
gI(a){return new A.cN(this,this.$ti.h("cN<1>"))},
ai(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
return s==null?!1:s[b]!=null}else if(typeof b=="number"&&(b&1073741823)===b){r=this.c
return r==null?!1:r[b]!=null}else return this.di(b)},
di(a){var s=this.d
if(s==null)return!1
return this.aR(this.bK(s,a),a)>=0},
m(a,b){var s,r,q
if(typeof b=="string"&&b!=="__proto__"){s=this.b
r=s==null?null:A.kw(s,b)
return r}else if(typeof b=="number"&&(b&1073741823)===b){q=this.c
r=q==null?null:A.kw(q,b)
return r}else return this.dj(0,b)},
dj(a,b){var s,r,q=this.d
if(q==null)return null
s=this.bK(q,b)
r=this.aR(s,b)
return r<0?null:s[r+1]},
j(a,b,c){var s,r,q,p,o=this,n=o.$ti
n.c.a(b)
n.z[1].a(c)
s=o.d
if(s==null)s=o.d=A.mr()
r=A.j0(b)&1073741823
q=s[r]
if(q==null){A.kx(s,r,[b,c]);++o.a
o.e=null}else{p=o.aR(q,b)
if(p>=0)q[p+1]=c
else{q.push(b,c);++o.a
o.e=null}}},
A(a,b){var s,r,q,p,o,n,m=this,l=m.$ti
l.h("~(1,2)").a(b)
s=m.bD()
for(r=s.length,q=l.c,l=l.z[1],p=0;p<r;++p){o=s[p]
q.a(o)
n=m.m(0,o)
b.$2(o,n==null?l.a(n):n)
if(s!==m.e)throw A.d(A.ad(m))}},
bD(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.e
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
bK(a,b){return a[A.j0(b)&1073741823]}}
A.cP.prototype={
aR(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=0;r<s;r+=2){q=a[r]
if(q==null?b==null:q===b)return r}return-1}}
A.cN.prototype={
gi(a){return this.a.a},
gH(a){var s=this.a
return new A.cO(s,s.bD(),this.$ti.h("cO<1>"))}}
A.cO.prototype={
gD(a){var s=this.d
return s==null?this.$ti.c.a(s):s},
B(){var s=this,r=s.b,q=s.c,p=s.a
if(r!==p.e)throw A.d(A.ad(p))
else if(q>=r.length){s.sbE(null)
return!1}else{s.sbE(r[q])
s.c=q+1
return!0}},
sbE(a){this.d=this.$ti.h("1?").a(a)},
$ia2:1}
A.hh.prototype={
$2(a,b){this.a.j(0,this.b.a(a),this.c.a(b))},
$S:8}
A.e.prototype={
gH(a){return new A.bh(a,this.gi(a),A.ao(a).h("bh<e.E>"))},
q(a,b){return this.m(a,b)},
A(a,b){var s,r
A.ao(a).h("~(e.E)").a(b)
s=this.gi(a)
for(r=0;r<s;++r){b.$1(this.m(a,r))
if(s!==this.gi(a))throw A.d(A.ad(a))}},
gdV(a){return this.gi(a)===0},
gv(a){if(this.gi(a)===0)throw A.d(A.ja())
return this.m(a,0)},
c2(a,b){var s,r=this.gi(a)
for(s=0;s<r;++s){if(J.j3(this.m(a,s),b))return!0
if(r!==this.gi(a))throw A.d(A.ad(a))}return!1},
aB(a,b,c){var s=A.ao(a)
return new A.aD(a,s.t(c).h("1(e.E)").a(b),s.h("@<e.E>").t(c).h("aD<1,2>"))},
aC(a){var s,r,q,p,o=this
if(o.gdV(a)){s=J.k5(0,A.ao(a).h("e.E"))
return s}r=o.m(a,0)
q=A.je(o.gi(a),r,!0,A.ao(a).h("e.E"))
for(p=1;p<o.gi(a);++p)B.a.j(q,p,o.m(a,p))
return q},
l(a){return A.k4(a,"[","]")}}
A.w.prototype={
A(a,b){var s,r,q,p=A.ao(a)
p.h("~(w.K,w.V)").a(b)
for(s=J.bU(this.gI(a)),p=p.h("w.V");s.B();){r=s.gD(s)
q=this.m(a,r)
b.$2(r,q==null?p.a(q):q)}},
gi(a){return J.fO(this.gI(a))},
l(a){return A.hk(a)},
$iL:1}
A.hl.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=r.a+=A.p(a)
r.a=s+": "
r.a+=A.p(b)},
$S:19}
A.d6.prototype={}
A.bB.prototype={
m(a,b){return this.a.m(0,b)},
A(a,b){this.a.A(0,this.$ti.h("~(1,2)").a(b))},
gi(a){return this.a.a},
gI(a){var s=this.a
return new A.aC(s,s.$ti.h("aC<1>"))},
l(a){return A.hk(this.a)},
$iL:1}
A.cB.prototype={}
A.bR.prototype={}
A.f0.prototype={
m(a,b){var s,r=this.b
if(r==null)return this.c.m(0,b)
else if(typeof b!="string")return null
else{s=r[b]
return typeof s=="undefined"?this.ds(b):s}},
gi(a){return this.b==null?this.c.a:this.aq().length},
gI(a){var s
if(this.b==null){s=this.c
return new A.aC(s,A.y(s).h("aC<1>"))}return new A.f1(this)},
A(a,b){var s,r,q,p,o=this
t.u.a(b)
if(o.b==null)return o.c.A(0,b)
s=o.aq()
for(r=0;r<s.length;++r){q=s[r]
p=o.b[q]
if(typeof p=="undefined"){p=A.iH(o.a[q])
o.b[q]=p}b.$2(q,p)
if(s!==o.c)throw A.d(A.ad(o))}},
aq(){var s=t.aL.a(this.c)
if(s==null)s=this.c=A.m(Object.keys(this.a),t.s)
return s},
ds(a){var s
if(!Object.prototype.hasOwnProperty.call(this.a,a))return null
s=A.iH(this.a[a])
return this.b[a]=s}}
A.f1.prototype={
gi(a){var s=this.a
return s.gi(s)},
q(a,b){var s=this.a
if(s.b==null)s=s.gI(s).q(0,b)
else{s=s.aq()
if(!(b<s.length))return A.c(s,b)
s=s[b]}return s},
gH(a){var s=this.a
if(s.b==null){s=s.gI(s)
s=s.gH(s)}else{s=s.aq()
s=new J.b4(s,s.length,A.av(s).h("b4<1>"))}return s}}
A.dx.prototype={}
A.dz.prototype={}
A.he.prototype={
dI(a,b,c){var s=A.nh(b,this.gdJ().a)
return s},
gdJ(){return B.H}}
A.hf.prototype={}
A.hr.prototype={
$2(a,b){var s,r,q
t.cm.a(a)
s=this.b
r=this.a
q=s.a+=r.a
q+=a.a
s.a=q
s.a=q+": "
s.a+=A.bw(b)
r.a=", "},
$S:20}
A.c1.prototype={
L(a,b){if(b==null)return!1
return b instanceof A.c1&&this.a===b.a&&!0},
gu(a){var s=this.a
return(s^B.e.bV(s,30))&1073741823},
l(a){var s=this,r=A.lI(A.m8(s)),q=A.dB(A.m6(s)),p=A.dB(A.m2(s)),o=A.dB(A.m3(s)),n=A.dB(A.m5(s)),m=A.dB(A.m7(s)),l=A.lJ(A.m4(s))
return r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l}}
A.G.prototype={
gaE(){return A.aK(this.$thrownJsError)}}
A.dj.prototype={
l(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.bw(s)
return"Assertion failed"}}
A.aE.prototype={}
A.ax.prototype={
gaQ(){return"Invalid argument"+(!this.a?"(s)":"")},
gaP(){return""},
l(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+A.p(p),n=s.gaQ()+q+o
if(!s.a)return n
return n+s.gaP()+": "+A.bw(s.gb1())},
gb1(){return this.b}}
A.cu.prototype={
gb1(){return A.mM(this.b)},
gaQ(){return"RangeError"},
gaP(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.p(q):""
else if(q==null)s=": Not greater than or equal to "+A.p(r)
else if(q>r)s=": Not in inclusive range "+A.p(r)+".."+A.p(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.p(r)
return s}}
A.dO.prototype={
gb1(){return A.ab(this.b)},
gaQ(){return"RangeError"},
gaP(){if(A.ab(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gi(a){return this.f}}
A.e7.prototype={
l(a){var s,r,q,p,o,n,m,l,k=this,j={},i=new A.cy("")
j.a=""
s=k.c
for(r=s.length,q=0,p="",o="";q<r;++q,o=", "){n=s[q]
i.a=p+o
p=i.a+=A.bw(n)
j.a=", "}k.d.A(0,new A.hr(j,i))
m=A.bw(k.a)
l=i.l(0)
return"NoSuchMethodError: method not found: '"+k.b.a+"'\nReceiver: "+m+"\nArguments: ["+l+"]"}}
A.eD.prototype={
l(a){return"Unsupported operation: "+this.a}}
A.eB.prototype={
l(a){return"UnimplementedError: "+this.a}}
A.bm.prototype={
l(a){return"Bad state: "+this.a}}
A.dy.prototype={
l(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.bw(s)+"."}}
A.cx.prototype={
l(a){return"Stack Overflow"},
gaE(){return null},
$iG:1}
A.ib.prototype={
l(a){return"Exception: "+this.a}}
A.h6.prototype={
l(a){var s=this.a,r=""!==s?"FormatException: "+s:"FormatException"
return r}}
A.h.prototype={
aB(a,b,c){var s=A.y(this)
return A.lY(this,s.t(c).h("1(h.E)").a(b),s.h("h.E"),c)},
gi(a){var s,r=this.gH(this)
for(s=0;r.B();)++s
return s},
q(a,b){var s,r=this.gH(this)
for(s=b;r.B();){if(s===0)return r.gD(r);--s}throw A.d(A.K(b,b-s,this,"index"))},
l(a){return A.lS(this,"(",")")}}
A.N.prototype={
gu(a){return A.x.prototype.gu.call(this,this)},
l(a){return"null"}}
A.x.prototype={$ix:1,
L(a,b){return this===b},
gu(a){return A.cs(this)},
l(a){return"Instance of '"+A.hx(this)+"'"},
ca(a,b){throw A.d(A.ka(this,t.B.a(b)))},
gE(a){return A.nC(this)},
toString(){return this.l(this)}}
A.fn.prototype={
l(a){return""},
$iak:1}
A.cy.prototype={
gi(a){return this.a.length},
l(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
A.n.prototype={}
A.fP.prototype={
gi(a){return a.length}}
A.dg.prototype={
l(a){var s=String(a)
s.toString
return s}}
A.di.prototype={
l(a){var s=String(a)
s.toString
return s}}
A.b5.prototype={$ib5:1}
A.b7.prototype={$ib7:1}
A.b8.prototype={
sY(a,b){a.height=b},
sZ(a,b){a.width=b},
aD(a,b,c){var s=a.getContext(b,A.l3(c))
return s},
$ib8:1,
$idq:1}
A.dr.prototype={
sb0(a,b){a.fillStyle=b}}
A.ar.prototype={
gi(a){return a.length}}
A.fY.prototype={
gi(a){return a.length}}
A.B.prototype={$iB:1}
A.c_.prototype={
gi(a){var s=a.length
s.toString
return s}}
A.fZ.prototype={}
A.ae.prototype={}
A.ay.prototype={}
A.h_.prototype={
gi(a){return a.length}}
A.h0.prototype={
gi(a){return a.length}}
A.h1.prototype={
gi(a){return a.length}}
A.ba.prototype={$iba:1}
A.bu.prototype={$ibu:1}
A.h2.prototype={
l(a){var s=String(a)
s.toString
return s}}
A.c2.prototype={
gi(a){var s=a.length
s.toString
return s},
m(a,b){var s=a.length,r=b>>>0!==b||b>=s
r.toString
if(r)throw A.d(A.K(b,s,a,null))
s=a[b]
s.toString
return s},
gv(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.d(A.M("No elements"))},
q(a,b){if(!(b<a.length))return A.c(a,b)
return a[b]},
$ij:1,
$it:1,
$ih:1,
$il:1}
A.c3.prototype={
l(a){var s,r=a.left
r.toString
s=a.top
s.toString
return"Rectangle ("+A.p(r)+", "+A.p(s)+") "+A.p(this.gZ(a))+" x "+A.p(this.gY(a))},
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
if(s===r){s=J.dd(b)
s=this.gZ(a)===s.gZ(b)&&this.gY(a)===s.gY(b)}else s=!1}else s=!1}else s=!1
return s},
gu(a){var s,r=a.left
r.toString
s=a.top
s.toString
return A.kb(r,s,this.gZ(a),this.gY(a))},
gbL(a){return a.height},
gY(a){var s=this.gbL(a)
s.toString
return s},
gbZ(a){return a.width},
gZ(a){var s=this.gbZ(a)
s.toString
return s},
$ias:1}
A.dD.prototype={
gi(a){var s=a.length
s.toString
return s},
m(a,b){var s=a.length,r=b>>>0!==b||b>=s
r.toString
if(r)throw A.d(A.K(b,s,a,null))
s=a[b]
s.toString
return s},
gv(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.d(A.M("No elements"))},
q(a,b){if(!(b<a.length))return A.c(a,b)
return a[b]},
$ij:1,
$it:1,
$ih:1,
$il:1}
A.h3.prototype={
gi(a){var s=a.length
s.toString
return s}}
A.i.prototype={
l(a){var s=a.localName
s.toString
return s},
$ii:1}
A.f.prototype={$if:1}
A.b.prototype={
dF(a,b,c,d){t.o.a(c)
if(c!=null)this.dc(a,b,c,!1)},
dc(a,b,c,d){return a.addEventListener(b,A.bq(t.o.a(c),1),!1)},
du(a,b,c,d){return a.removeEventListener(b,A.bq(t.o.a(c),1),!1)},
$ib:1}
A.V.prototype={$iV:1}
A.dF.prototype={
gi(a){var s=a.length
s.toString
return s},
m(a,b){var s=a.length,r=b>>>0!==b||b>=s
r.toString
if(r)throw A.d(A.K(b,s,a,null))
s=a[b]
s.toString
return s},
gv(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.d(A.M("No elements"))},
q(a,b){if(!(b<a.length))return A.c(a,b)
return a[b]},
$ij:1,
$it:1,
$ih:1,
$il:1}
A.dG.prototype={
gi(a){return a.length}}
A.dI.prototype={
gi(a){return a.length}}
A.a0.prototype={$ia0:1}
A.h9.prototype={
gi(a){var s=a.length
s.toString
return s}}
A.bd.prototype={
gi(a){var s=a.length
s.toString
return s},
m(a,b){var s=a.length,r=b>>>0!==b||b>=s
r.toString
if(r)throw A.d(A.K(b,s,a,null))
s=a[b]
s.toString
return s},
gv(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.d(A.M("No elements"))},
q(a,b){if(!(b<a.length))return A.c(a,b)
return a[b]},
$ij:1,
$it:1,
$ih:1,
$il:1}
A.c9.prototype={$ic9:1}
A.aQ.prototype={
scl(a,b){a.src=b},
$iaQ:1,
$idq:1}
A.be.prototype={$ibe:1}
A.hb.prototype={
gdW(a){return a.isIntersecting}}
A.hj.prototype={
l(a){var s=String(a)
s.toString
return s}}
A.bk.prototype={}
A.ho.prototype={
gi(a){return a.length}}
A.dX.prototype={
m(a,b){return A.b1(a.get(A.Y(b)))},
A(a,b){var s,r,q
t.u.a(b)
s=a.entries()
for(;!0;){r=s.next()
q=r.done
q.toString
if(q)return
q=r.value[0]
q.toString
b.$2(q,A.b1(r.value[1]))}},
gI(a){var s=A.m([],t.s)
this.A(a,new A.hp(s))
return s},
gi(a){var s=a.size
s.toString
return s},
$iL:1}
A.hp.prototype={
$2(a,b){return B.a.k(this.a,a)},
$S:2}
A.dY.prototype={
m(a,b){return A.b1(a.get(A.Y(b)))},
A(a,b){var s,r,q
t.u.a(b)
s=a.entries()
for(;!0;){r=s.next()
q=r.done
q.toString
if(q)return
q=r.value[0]
q.toString
b.$2(q,A.b1(r.value[1]))}},
gI(a){var s=A.m([],t.s)
this.A(a,new A.hq(s))
return s},
gi(a){var s=a.size
s.toString
return s},
$iL:1}
A.hq.prototype={
$2(a,b){return B.a.k(this.a,a)},
$S:2}
A.a4.prototype={$ia4:1}
A.dZ.prototype={
gi(a){var s=a.length
s.toString
return s},
m(a,b){var s=a.length,r=b>>>0!==b||b>=s
r.toString
if(r)throw A.d(A.K(b,s,a,null))
s=a[b]
s.toString
return s},
gv(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.d(A.M("No elements"))},
q(a,b){if(!(b<a.length))return A.c(a,b)
return a[b]},
$ij:1,
$it:1,
$ih:1,
$il:1}
A.r.prototype={
l(a){var s=a.nodeValue
return s==null?this.cn(a):s},
$ir:1}
A.cp.prototype={
gi(a){var s=a.length
s.toString
return s},
m(a,b){var s=a.length,r=b>>>0!==b||b>=s
r.toString
if(r)throw A.d(A.K(b,s,a,null))
s=a[b]
s.toString
return s},
gv(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.d(A.M("No elements"))},
q(a,b){if(!(b<a.length))return A.c(a,b)
return a[b]},
$ij:1,
$it:1,
$ih:1,
$il:1}
A.a5.prototype={
gi(a){return a.length},
$ia5:1}
A.ec.prototype={
gi(a){var s=a.length
s.toString
return s},
m(a,b){var s=a.length,r=b>>>0!==b||b>=s
r.toString
if(r)throw A.d(A.K(b,s,a,null))
s=a[b]
s.toString
return s},
gv(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.d(A.M("No elements"))},
q(a,b){if(!(b<a.length))return A.c(a,b)
return a[b]},
$ij:1,
$it:1,
$ih:1,
$il:1}
A.eg.prototype={
m(a,b){return A.b1(a.get(A.Y(b)))},
A(a,b){var s,r,q
t.u.a(b)
s=a.entries()
for(;!0;){r=s.next()
q=r.done
q.toString
if(q)return
q=r.value[0]
q.toString
b.$2(q,A.b1(r.value[1]))}},
gI(a){var s=A.m([],t.s)
this.A(a,new A.hA(s))
return s},
gi(a){var s=a.size
s.toString
return s},
$iL:1}
A.hA.prototype={
$2(a,b){return B.a.k(this.a,a)},
$S:2}
A.ej.prototype={
gi(a){return a.length}}
A.W.prototype={$iW:1}
A.em.prototype={
gi(a){var s=a.length
s.toString
return s},
m(a,b){var s=a.length,r=b>>>0!==b||b>=s
r.toString
if(r)throw A.d(A.K(b,s,a,null))
s=a[b]
s.toString
return s},
gv(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.d(A.M("No elements"))},
q(a,b){if(!(b<a.length))return A.c(a,b)
return a[b]},
$ij:1,
$it:1,
$ih:1,
$il:1}
A.a8.prototype={$ia8:1}
A.en.prototype={
gi(a){var s=a.length
s.toString
return s},
m(a,b){var s=a.length,r=b>>>0!==b||b>=s
r.toString
if(r)throw A.d(A.K(b,s,a,null))
s=a[b]
s.toString
return s},
gv(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.d(A.M("No elements"))},
q(a,b){if(!(b<a.length))return A.c(a,b)
return a[b]},
$ij:1,
$it:1,
$ih:1,
$il:1}
A.a9.prototype={
gi(a){return a.length},
$ia9:1}
A.ep.prototype={
m(a,b){return a.getItem(A.Y(b))},
A(a,b){var s,r,q
t.aa.a(b)
for(s=0;!0;++s){r=a.key(s)
if(r==null)return
q=a.getItem(r)
q.toString
b.$2(r,q)}},
gI(a){var s=A.m([],t.s)
this.A(a,new A.hL(s))
return s},
gi(a){var s=a.length
s.toString
return s},
$iL:1}
A.hL.prototype={
$2(a,b){return B.a.k(this.a,a)},
$S:21}
A.S.prototype={$iS:1}
A.X.prototype={$iX:1}
A.Q.prototype={$iQ:1}
A.es.prototype={
gi(a){var s=a.length
s.toString
return s},
m(a,b){var s=a.length,r=b>>>0!==b||b>=s
r.toString
if(r)throw A.d(A.K(b,s,a,null))
s=a[b]
s.toString
return s},
gv(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.d(A.M("No elements"))},
q(a,b){if(!(b<a.length))return A.c(a,b)
return a[b]},
$ij:1,
$it:1,
$ih:1,
$il:1}
A.et.prototype={
gi(a){var s=a.length
s.toString
return s},
m(a,b){var s=a.length,r=b>>>0!==b||b>=s
r.toString
if(r)throw A.d(A.K(b,s,a,null))
s=a[b]
s.toString
return s},
gv(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.d(A.M("No elements"))},
q(a,b){if(!(b<a.length))return A.c(a,b)
return a[b]},
$ij:1,
$it:1,
$ih:1,
$il:1}
A.hT.prototype={
gi(a){var s=a.length
s.toString
return s}}
A.aa.prototype={$iaa:1}
A.ex.prototype={
gi(a){var s=a.length
s.toString
return s},
m(a,b){var s=a.length,r=b>>>0!==b||b>=s
r.toString
if(r)throw A.d(A.K(b,s,a,null))
s=a[b]
s.toString
return s},
gv(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.d(A.M("No elements"))},
q(a,b){if(!(b<a.length))return A.c(a,b)
return a[b]},
$ij:1,
$it:1,
$ih:1,
$il:1}
A.hU.prototype={
gi(a){return a.length}}
A.i_.prototype={
l(a){var s=String(a)
s.toString
return s}}
A.eF.prototype={$idq:1}
A.eG.prototype={
gi(a){return a.length}}
A.aX.prototype={
cb(a,b){var s
t.I.a(b)
this.bI(a)
s=A.jB(b,t.H)
s.toString
return this.dw(a,s)},
dw(a,b){var s=a.requestAnimationFrame(A.bq(t.I.a(b),1))
s.toString
return s},
bI(a){var s=!!(a.requestAnimationFrame&&a.cancelAnimationFrame)
s.toString
if(s)return;(function(b){var r=["ms","moz","webkit","o"]
for(var q=0;q<r.length&&!b.requestAnimationFrame;++q){b.requestAnimationFrame=b[r[q]+"RequestAnimationFrame"]
b.cancelAnimationFrame=b[r[q]+"CancelAnimationFrame"]||b[r[q]+"CancelRequestAnimationFrame"]}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
$iaX:1}
A.au.prototype={$iau:1}
A.eN.prototype={
gi(a){var s=a.length
s.toString
return s},
m(a,b){var s=a.length,r=b>>>0!==b||b>=s
r.toString
if(r)throw A.d(A.K(b,s,a,null))
s=a[b]
s.toString
return s},
gv(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.d(A.M("No elements"))},
q(a,b){if(!(b<a.length))return A.c(a,b)
return a[b]},
$ij:1,
$it:1,
$ih:1,
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
return"Rectangle ("+A.p(p)+", "+A.p(s)+") "+A.p(r)+" x "+A.p(q)},
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
r=J.dd(b)
if(s===r.gZ(b)){s=a.height
s.toString
r=s===r.gY(b)
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
return A.kb(p,s,r,q)},
gbL(a){return a.height},
gY(a){var s=a.height
s.toString
return s},
gbZ(a){return a.width},
gZ(a){var s=a.width
s.toString
return s}}
A.eY.prototype={
gi(a){var s=a.length
s.toString
return s},
m(a,b){var s=a.length,r=b>>>0!==b||b>=s
r.toString
if(r)throw A.d(A.K(b,s,a,null))
return a[b]},
gv(a){if(a.length>0)return a[0]
throw A.d(A.M("No elements"))},
q(a,b){if(!(b<a.length))return A.c(a,b)
return a[b]},
$ij:1,
$it:1,
$ih:1,
$il:1}
A.cS.prototype={
gi(a){var s=a.length
s.toString
return s},
m(a,b){var s=a.length,r=b>>>0!==b||b>=s
r.toString
if(r)throw A.d(A.K(b,s,a,null))
s=a[b]
s.toString
return s},
gv(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.d(A.M("No elements"))},
q(a,b){if(!(b<a.length))return A.c(a,b)
return a[b]},
$ij:1,
$it:1,
$ih:1,
$il:1}
A.fi.prototype={
gi(a){var s=a.length
s.toString
return s},
m(a,b){var s=a.length,r=b>>>0!==b||b>=s
r.toString
if(r)throw A.d(A.K(b,s,a,null))
s=a[b]
s.toString
return s},
gv(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.d(A.M("No elements"))},
q(a,b){if(!(b<a.length))return A.c(a,b)
return a[b]},
$ij:1,
$it:1,
$ih:1,
$il:1}
A.fo.prototype={
gi(a){var s=a.length
s.toString
return s},
m(a,b){var s=a.length,r=b>>>0!==b||b>=s
r.toString
if(r)throw A.d(A.K(b,s,a,null))
s=a[b]
s.toString
return s},
gv(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.d(A.M("No elements"))},
q(a,b){if(!(b<a.length))return A.c(a,b)
return a[b]},
$ij:1,
$it:1,
$ih:1,
$il:1}
A.j6.prototype={}
A.cJ.prototype={
aA(a,b,c,d){var s=A.y(this)
s.h("~(1)?").a(a)
t.Y.a(c)
return A.cL(this.a,this.b,a,!1,s.c)}}
A.bN.prototype={}
A.cK.prototype={
az(a){var s=this
if(s.b==null)return $.j2()
s.bY()
s.b=null
s.sbN(null)
return $.j2()},
b3(a){var s,r=this
r.$ti.h("~(1)?").a(a)
if(r.b==null)throw A.d(A.M("Subscription has been canceled."))
r.bY()
s=A.jB(new A.ia(a),t.A)
r.sbN(s)
r.bX()},
bX(){var s,r=this.d
if(r!=null&&!0){s=this.b
s.toString
J.lt(s,this.c,r,!1)}},
bY(){var s,r=this.d
if(r!=null){s=this.b
s.toString
J.ls(s,this.c,t.o.a(r),!1)}},
sbN(a){this.d=t.o.a(a)},
$iat:1}
A.i9.prototype={
$1(a){return this.a.$1(t.A.a(a))},
$S:9}
A.ia.prototype={
$1(a){return this.a.$1(t.A.a(a))},
$S:9}
A.o.prototype={
gH(a){return new A.c6(a,this.gi(a),A.ao(a).h("c6<o.E>"))}}
A.c6.prototype={
B(){var s=this,r=s.c+1,q=s.b
if(r<q){s.sbM(J.lr(s.a,r))
s.c=r
return!0}s.sbM(null)
s.c=q
return!1},
gD(a){var s=this.d
return s==null?this.$ti.c.a(s):s},
sbM(a){this.d=this.$ti.h("1?").a(a)},
$ia2:1}
A.eO.prototype={}
A.eQ.prototype={}
A.eR.prototype={}
A.eS.prototype={}
A.eT.prototype={}
A.eV.prototype={}
A.eW.prototype={}
A.eZ.prototype={}
A.f_.prototype={}
A.f4.prototype={}
A.f5.prototype={}
A.f6.prototype={}
A.f7.prototype={}
A.f8.prototype={}
A.f9.prototype={}
A.fc.prototype={}
A.fd.prototype={}
A.ff.prototype={}
A.cY.prototype={}
A.cZ.prototype={}
A.fg.prototype={}
A.fh.prototype={}
A.fj.prototype={}
A.fp.prototype={}
A.fq.prototype={}
A.d0.prototype={}
A.d1.prototype={}
A.ft.prototype={}
A.fu.prototype={}
A.fy.prototype={}
A.fz.prototype={}
A.fA.prototype={}
A.fB.prototype={}
A.fC.prototype={}
A.fD.prototype={}
A.fE.prototype={}
A.fF.prototype={}
A.fG.prototype={}
A.fH.prototype={}
A.iG.prototype={
$1(a){this.a.push(A.kL(a))},
$S:1}
A.iR.prototype={
$2(a,b){this.a[a]=A.kL(b)},
$S:8}
A.ce.prototype={$ice:1}
A.hd.prototype={
$1(a){var s,r,q,p,o=this.a
if(o.ai(0,a))return o.m(0,a)
if(t.f.b(a)){s={}
o.j(0,a,s)
for(o=J.dd(a),r=J.bU(o.gI(a));r.B();){q=r.gD(r)
s[q]=this.$1(o.m(a,q))}return s}else if(t.d.b(a)){p=[]
o.j(0,a,p)
B.a.V(p,J.jO(a,this,t.z))
return p}else return A.jt(a)},
$S:22}
A.iI.prototype={
$1(a){var s
t.Z.a(a)
s=function(b,c,d){return function(){return b(c,d,this,Array.prototype.slice.apply(arguments))}}(A.mR,a,!1)
A.ju(s,$.fM(),a)
return s},
$S:3}
A.iJ.prototype={
$1(a){return new this.a(a)},
$S:3}
A.iN.prototype={
$1(a){return new A.cd(a==null?t.K.a(a):a)},
$S:23}
A.iO.prototype={
$1(a){var s=a==null?t.K.a(a):a
return new A.bf(s,t.a2)},
$S:24}
A.iP.prototype={
$1(a){return new A.aB(a==null?t.K.a(a):a)},
$S:25}
A.aB.prototype={
m(a,b){return A.kN(this.a[b])},
j(a,b,c){if(typeof b!="string"&&typeof b!="number")throw A.d(A.aN("property is not a String or num",null))
this.a[b]=A.jt(c)},
L(a,b){if(b==null)return!1
return b instanceof A.aB&&this.a===b.a},
l(a){var s,r
try{s=String(this.a)
return s}catch(r){s=this.cr(0)
return s}},
gu(a){return 0}}
A.cd.prototype={}
A.bf.prototype={
bC(a){var s=this,r=a<0||a>=s.gi(s)
if(r)throw A.d(A.ee(a,0,s.gi(s),null,null))},
m(a,b){this.bC(b)
return this.$ti.c.a(this.co(0,b))},
j(a,b,c){if(A.iK(b))this.bC(b)
this.cu(0,b,c)},
gi(a){var s=this.a.length
if(typeof s==="number"&&s>>>0===s)return s
throw A.d(A.M("Bad JsArray length"))},
$ij:1,
$ih:1,
$il:1}
A.bP.prototype={
j(a,b,c){return this.cp(0,b,c)}}
A.iq.prototype={
c9(){return Math.random()}}
A.bE.prototype={
l(a){return"Point("+this.a+", "+this.b+")"},
L(a,b){if(b==null)return!1
return b instanceof A.bE&&this.a===b.a&&this.b===b.b},
gu(a){return A.me(B.e.gu(this.a),B.e.gu(this.b),0)}}
A.ag.prototype={$iag:1}
A.dT.prototype={
gi(a){var s=a.length
s.toString
return s},
m(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw A.d(A.K(b,this.gi(a),a,null))
s=a.getItem(b)
s.toString
return s},
gv(a){var s=a.length
s.toString
if(s>0){s=a[0]
s.toString
return s}throw A.d(A.M("No elements"))},
q(a,b){return this.m(a,b)},
$ij:1,
$ih:1,
$il:1}
A.ai.prototype={$iai:1}
A.e8.prototype={
gi(a){var s=a.length
s.toString
return s},
m(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw A.d(A.K(b,this.gi(a),a,null))
s=a.getItem(b)
s.toString
return s},
gv(a){var s=a.length
s.toString
if(s>0){s=a[0]
s.toString
return s}throw A.d(A.M("No elements"))},
q(a,b){return this.m(a,b)},
$ij:1,
$ih:1,
$il:1}
A.hv.prototype={
gi(a){return a.length}}
A.eq.prototype={
gi(a){var s=a.length
s.toString
return s},
m(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw A.d(A.K(b,this.gi(a),a,null))
s=a.getItem(b)
s.toString
return s},
gv(a){var s=a.length
s.toString
if(s>0){s=a[0]
s.toString
return s}throw A.d(A.M("No elements"))},
q(a,b){return this.m(a,b)},
$ij:1,
$ih:1,
$il:1}
A.al.prototype={$ial:1}
A.ez.prototype={
gi(a){var s=a.length
s.toString
return s},
m(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw A.d(A.K(b,this.gi(a),a,null))
s=a.getItem(b)
s.toString
return s},
gv(a){var s=a.length
s.toString
if(s>0){s=a[0]
s.toString
return s}throw A.d(A.M("No elements"))},
q(a,b){return this.m(a,b)},
$ij:1,
$ih:1,
$il:1}
A.f2.prototype={}
A.f3.prototype={}
A.fa.prototype={}
A.fb.prototype={}
A.fl.prototype={}
A.fm.prototype={}
A.fv.prototype={}
A.fw.prototype={}
A.fR.prototype={
gi(a){return a.length}}
A.dl.prototype={
m(a,b){return A.b1(a.get(A.Y(b)))},
A(a,b){var s,r,q
t.u.a(b)
s=a.entries()
for(;!0;){r=s.next()
q=r.done
q.toString
if(q)return
q=r.value[0]
q.toString
b.$2(q,A.b1(r.value[1]))}},
gI(a){var s=A.m([],t.s)
this.A(a,new A.fS(s))
return s},
gi(a){var s=a.size
s.toString
return s},
$iL:1}
A.fS.prototype={
$2(a,b){return B.a.k(this.a,a)},
$S:2}
A.dm.prototype={
gi(a){return a.length}}
A.aO.prototype={}
A.e9.prototype={
gi(a){return a.length}}
A.eL.prototype={}
A.dp.prototype={$idp:1}
A.bt.prototype={$ibt:1}
A.dK.prototype={$idK:1}
A.ed.prototype={$ied:1}
A.ef.prototype={$ief:1}
A.cv.prototype={$icv:1}
A.bG.prototype={
aw(a,b,c){return a.bindBuffer(b,c)},
C(a,b,c){return a.bindFramebuffer(b,c)},
c0(a,b,c){return a.bindRenderbuffer(b,c)},
c1(a,b,c){return a.bindTexture(b,c)},
c3(a,b){return a.deleteBuffer(b)},
dK(a,b){return a.deleteFramebuffer(b)},
dL(a,b){return a.deleteProgram(b)},
dM(a,b){return a.deleteRenderbuffer(b)},
c4(a,b){return a.deleteShader(b)},
dN(a,b){return a.deleteTexture(b)},
dQ(a,b,c,d,e){return a.framebufferRenderbuffer(b,c,d,e)},
dR(a,b,c,d,e,f){return a.framebufferTexture2D(b,c,d,e,f)},
cg(a,b,c,d,e,f,g,h,i,j){var s=i==null
if(!s&&h!=null&&A.iK(g)){this.dC(a,b,c,d,e,f,g,h,i,j)
return}if(t.R.b(g)&&h==null&&s&&j==null){this.dD(a,b,c,d,e,f,g)
return}if(t.cl.b(g)&&h==null&&s&&j==null){this.dE(a,b,c,d,e,f,g)
return}throw A.d(A.aN("Incorrect number or type of arguments",null))},
e2(a,b,c,d,e,f,g){return this.cg(a,b,c,d,e,f,g,null,null,null)},
dC(a,b,c,d,e,f,g,h,i,j){return a.texImage2D(b,c,d,e,f,g,h,i,j)},
dD(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
dE(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
J(a,b,c){return a.uniform1i(b,c)},
cj(a,b,c){return a.uniform2fv(b,c)},
e4(a,b,c){return a.uniform3fv(b,c)},
M(a,b,c){return a.uniform4fv(b,c)},
a2(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
N(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
K(a,b){return a.useProgram(b)},
$ibG:1}
A.ek.prototype={$iek:1}
A.eu.prototype={$ieu:1}
A.eA.prototype={$ieA:1}
A.dL.prototype={
gdP(){var s=B.a.dO(this.a,0,new A.h7(),t.H)
if(typeof s!=="number")return A.nE(s)
return B.c.U(20/s)},
cL(a){var s,r,q=this
A.kJ(a)
s=q.f=(a-q.b)*0.001
q.b=a
r=q.c+=s
q.d+=s
q.e+=s
if(r>=0.03333333333333333){s=B.c.b7(r,0.03333333333333333)
q.c=s
r=q.r
if(r!=null)r.$1(0.03333333333333333+s)}s=q.d
if(s>=0.016666666666666666){s=B.c.b7(s,0.016666666666666666)
q.d=s
r=q.w
if(r!=null)r.$1(0.016666666666666666+s)
s=q.a
if(!!s.fixed$length)A.aM(A.bJ("removeAt"))
r=s.length
if(0>=r)A.aM(A.kg(0,null))
s.splice(0,1)[0]
B.a.k(s,q.e)
q.e=0}s=window
s.toString
q.x=B.k.cb(s,q.gbx())},
sbS(a){this.r=t.W.a(a)},
sbT(a){this.w=t.W.a(a)}}
A.h7.prototype={
$2(a,b){return A.kJ(a)+A.iB(b)},
$S:27}
A.fU.prototype={
bv(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=d.f,b=d.d,a=d.e.am(b)
a.a4()
s=b.am(a)
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
b=A.m([r,q,p,o,n,m,l,k,b],j)
i=new A.bj(b)
k=b.length
if(0>=k)return A.c(b,0)
l=b[0]
if(3>=k)return A.c(b,3)
m=b[3]
if(6>=k)return A.c(b,6)
n=b[6]
o=b[1]
p=b[4]
if(7>=k)return A.c(b,7)
q=b[7]
r=b[2]
h=b[5]
if(8>=k)return A.c(b,8)
i.sG(0,A.m([l,m,n,o,p,q,r,h,b[8]],j))
j=c.a
b=c.b
c=c.c
h=i.a
r=h.length
if(0>=r)return A.c(h,0)
q=h[0]
if(typeof q!=="number")return q.n()
if(3>=r)return A.c(h,3)
p=h[3]
if(typeof p!=="number")return p.n()
if(6>=r)return A.c(h,6)
o=h[6]
if(typeof o!=="number")return o.n()
n=h[1]
if(typeof n!=="number")return n.n()
m=h[4]
if(typeof m!=="number")return m.n()
if(7>=r)return A.c(h,7)
l=h[7]
if(typeof l!=="number")return l.n()
k=h[2]
if(typeof k!=="number")return k.n()
g=h[5]
if(typeof g!=="number")return g.n()
if(8>=r)return A.c(h,8)
h=h[8]
if(typeof h!=="number")return h.n()
r=d.c
r.bm()
f=i.a
e=r.a
if(0>=f.length)return A.c(f,0)
B.a.j(e,0,f[0])
e=r.a
if(1>=f.length)return A.c(f,1)
B.a.j(e,1,f[1])
e=r.a
if(2>=f.length)return A.c(f,2)
B.a.j(e,2,f[2])
e=r.a
if(3>=f.length)return A.c(f,3)
B.a.j(e,4,f[3])
e=r.a
if(4>=f.length)return A.c(f,4)
B.a.j(e,5,f[4])
e=r.a
if(5>=f.length)return A.c(f,5)
B.a.j(e,6,f[5])
e=r.a
if(6>=f.length)return A.c(f,6)
B.a.j(e,8,f[6])
e=r.a
if(7>=f.length)return A.c(f,7)
B.a.j(e,9,f[7])
e=r.a
if(8>=f.length)return A.c(f,8)
B.a.j(e,10,f[8])
r.bo(new A.a6(-(q*j+p*b+o*c),-(n*j+m*b+l*c),-(k*j+g*b+h*c)))
d.a.sG(0,A.a3(d.b.n(0,r).a,t.i))}}
A.hH.prototype={}
A.b9.prototype={
ge0(){var s=this
return A.m([s.a,s.b,s.c,s.d],t.n)}}
A.h5.prototype={
ac(a){var s=0,r=A.jy(t.R),q,p,o
var $async$ac=A.jz(function(b,c){if(b===1)return A.jq(c,r)
while(true)switch(s){case 0:o=document.createElement("img")
o.toString
B.D.scl(o,a)
p=new A.bN(o,"load",!1,t.bt)
s=3
return A.iC(p.gv(p),$async$ac)
case 3:q=A.jZ(o,t.R)
s=1
break
case 1:return A.jr(q,r)}})
return A.js($async$ac,r)}}
A.h8.prototype={}
A.bj.prototype={
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
return new A.bj(A.m([s*i+r*h+q*g,p*i+o*h+n*g,m*i+l*h+k*g,s*f+r*e+q*d,p*f+o*e+n*d,m*f+l*e+k*d,s*c+r*b+q*a,p*c+o*b+n*a,m*c+l*b+k*a],t.n))},
l(a){var s,r,q,p,o,n,m,l,k=this,j=k.a
if(0>=j.length)return A.c(j,0)
j=A.p(j[0])
s=k.a
if(1>=s.length)return A.c(s,1)
s=A.p(s[1])
r=k.a
if(2>=r.length)return A.c(r,2)
r=A.p(r[2])
q=k.a
if(3>=q.length)return A.c(q,3)
q=A.p(q[3])
p=k.a
if(4>=p.length)return A.c(p,4)
p=A.p(p[4])
o=k.a
if(5>=o.length)return A.c(o,5)
o=A.p(o[5])
n=k.a
if(6>=n.length)return A.c(n,6)
n=A.p(n[6])
m=k.a
if(7>=m.length)return A.c(m,7)
m=A.p(m[7])
l=k.a
if(8>=l.length)return A.c(l,8)
return"      ["+j+", "+s+", "+r+"]\n      ["+q+", "+p+", "+o+"]\n      ["+n+", "+m+", "+A.p(l[8])+"]\n    "},
sG(a,b){this.a=t.w.a(b)}}
A.bC.prototype={
bm(){this.sG(0,A.m([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t.n))},
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
return new A.bC(A.m([s*b+r*a2+q*a6+p*b0,o*b+n*a2+m*a6+l*b0,k*b+j*a2+i*a6+h*b0,g*b+f*a2+e*a6+d*b0,s*a+r*a3+q*a7+p*b1,o*a+n*a3+m*a7+l*b1,k*a+j*a3+i*a7+h*b1,g*a+f*a3+e*a7+d*b1,s*a0+r*a4+q*a8+p*b2,o*a0+n*a4+m*a8+l*b2,k*a0+j*a4+i*a8+h*b2,g*a0+f*a4+e*a8+d*b2,s*a1+r*a5+q*a9+p*b3,o*a1+n*a5+m*a9+l*b3,k*a1+j*a5+i*a9+h*b3,g*a1+f*a5+e*a9+d*b3],t.n))},
l(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=d.a
if(0>=c.length)return A.c(c,0)
c=A.p(c[0])
s=d.a
if(1>=s.length)return A.c(s,1)
s=A.p(s[1])
r=d.a
if(2>=r.length)return A.c(r,2)
r=A.p(r[2])
q=d.a
if(3>=q.length)return A.c(q,3)
q=A.p(q[3])
p=d.a
if(4>=p.length)return A.c(p,4)
p=A.p(p[4])
o=d.a
if(5>=o.length)return A.c(o,5)
o=A.p(o[5])
n=d.a
if(6>=n.length)return A.c(n,6)
n=A.p(n[6])
m=d.a
if(7>=m.length)return A.c(m,7)
m=A.p(m[7])
l=d.a
if(8>=l.length)return A.c(l,8)
l=A.p(l[8])
k=d.a
if(9>=k.length)return A.c(k,9)
k=A.p(k[9])
j=d.a
if(10>=j.length)return A.c(j,10)
j=A.p(j[10])
i=d.a
if(11>=i.length)return A.c(i,11)
i=A.p(i[11])
h=d.a
if(12>=h.length)return A.c(h,12)
h=A.p(h[12])
g=d.a
if(13>=g.length)return A.c(g,13)
g=A.p(g[13])
f=d.a
if(14>=f.length)return A.c(f,14)
f=A.p(f[14])
e=d.a
if(15>=e.length)return A.c(e,15)
return"      ["+c+", "+s+", "+r+", "+q+"]\n      ["+p+", "+o+", "+n+", "+m+"]\n      ["+l+", "+k+", "+j+", "+i+"]\n      ["+h+", "+g+", "+f+", "+A.p(e[15])+"]\n    "},
sG(a,b){this.a=t.w.a(b)}}
A.ea.prototype={}
A.bF.prototype={
l(a){return"["+A.p(this.a)+", "+A.p(this.b)+"]"}}
A.a6.prototype={
ak(a,b){return new A.a6(this.a-b.a,this.b-b.b,this.c-b.c)},
aG(a){var s=this,r=s.a,q=a.a
q===$&&A.v()
s.a=r+q
q=s.b
r=a.b
r===$&&A.v()
s.b=q+r
r=s.c
q=a.c
q===$&&A.v()
s.c=r+q},
al(a){this.a=a.a
this.b=a.b
this.c=a.c},
l(a){return"["+A.p(this.a)+", "+A.p(this.b)+", "+A.p(this.c)+"]"}}
A.ct.prototype={}
A.hy.prototype={
cc(a){var s,r,q,p,o,n,m=this,l=m.d,k=m.c,j=-k,i=m.b,h=-i,g=m.a,f=-g,e=a.a
e===$&&A.v()
s=a.c
s===$&&A.v()
r=a.b
r===$&&A.v()
q=l*e+f*0+h*s-j*r
p=l*r+h*0+j*e-f*s
o=l*s+j*0+f*r-h*e
n=l*0-f*e-h*r-j*s
return new A.am(n*g+q*l+p*k-o*i,n*i+p*l+o*g-q*k,n*k+o*l+q*i-p*g)}}
A.T.prototype={
bn(a,b,c){var s=this
B.a.j(s.a,0,a)
B.a.j(s.a,4,b)
B.a.j(s.a,6,0-0.5*a)
B.a.j(s.a,7,0-0.5*b)},
aJ(a){var s=this,r=Math.cos(a),q=Math.sin(a)
B.a.j(s.a,0,r)
B.a.j(s.a,1,q)
B.a.j(s.a,3,-q)
B.a.j(s.a,4,r)}}
A.aV.prototype={
gci(){var s,r,q=this.a,p=q.length
if(12>=p)return A.c(q,12)
s=q[12]
if(13>=p)return A.c(q,13)
r=q[13]
if(14>=p)return A.c(q,14)
return new A.a6(s,r,q[14])},
bo(a){B.a.j(this.a,12,a.a)
B.a.j(this.a,13,a.b)
B.a.j(this.a,14,a.c)},
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
return new A.aV(A.m([s*f+r*b+q*a2,o*f+n*b+m*a2,k*f+j*b+i*a2,0,s*e+r*a+q*a3,o*e+n*a+m*a3,k*e+j*a+i*a3,0,s*d+r*a0+q*a4,o*d+n*a0+m*a4,k*d+j*a0+i*a4,0,s*c+r*a1+q*a5+p,o*c+n*a1+m*a5+l,k*c+j*a1+i*a5+h,1],t.n))}}
A.am.prototype={
n(a,b){var s,r,q=this.a
q===$&&A.v()
s=this.b
s===$&&A.v()
r=this.c
r===$&&A.v()
return new A.am(q*b,s*b,r*b)},
a4(){var s,r,q,p=this,o=p.a
o===$&&A.v()
s=p.b
s===$&&A.v()
r=p.c
r===$&&A.v()
q=Math.sqrt(o*o+s*s+r*r)
p.a=p.a/q
p.b=p.b/q
p.c=p.c/q},
am(a){var s,r,q,p,o,n=this.b
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
return new A.am(n*s-r*q,r*p-o*s,o*q-n*p)},
aH(a){this.a=a.a
this.b=a.b
this.c=a.c},
l(a){var s,r,q=this.a
q===$&&A.v()
s=this.b
s===$&&A.v()
r=this.c
r===$&&A.v()
return"["+A.p(q)+", "+A.p(s)+", "+A.p(r)+"]"}}
A.el.prototype={}
A.aq.prototype={}
A.b6.prototype={}
A.ds.prototype={}
A.az.prototype={}
A.ha.prototype={}
A.i4.prototype={}
A.fT.prototype={}
A.h4.prototype={
bb(a){var s=this.a,r=s.byteLength
this.a=new Uint16Array(A.d8(B.a.aj(B.r.aC(s),B.r.aC(a))))
return new A.ha(a.length,r,5123)},
ba(a){var s=this.b,r=s.byteLength
this.b=new Float32Array(A.d8(B.a.aj(B.q.aC(s),B.q.aC(a))))
return new A.i4(r)}}
A.dC.prototype={}
A.dJ.prototype={
cK(a,b,c){var s,r,q=this,p=36161
q.c=a
s=a.a.createFramebuffer()
s.toString
q.d=s
if(c){r=q.c.a
s=r.createRenderbuffer()
s.toString
q.e=s
B.b.C(r,36160,q.d)
B.b.c0(r,p,q.e)
s=b.b
r.renderbufferStorage(p,33189,A.ab(s.a),A.ab(s.b))
B.b.dQ(r,36160,36096,p,q.e)
B.b.c0(r,p,null)
B.b.C(r,36160,null)}s=b.b
q.a=A.ab(s.a)
q.b=A.ab(s.b)},
F(){var s,r,q=this
q.f.F()
q.f=null
s=q.e
if(s!=null){r=q.c.a
r.toString
B.b.dM(r,s)
q.e=null}s=q.c.a
s.toString
B.b.dK(s,q.d)
q.c=null}}
A.bW.prototype={
bd(a,b,c,d){var s,r,q,p,o,n,m=this
m.cm(a,c,d)
s=m.c.a
s.toString
B.b.C(s,36160,m.d)
s=new A.ew()
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
B.b.cg(n,3553,0,6408,r,q,0,6408,5121,p)
s.by(33071,9729)
s.cH()
m.f=s
p=m.c.a
p.toString
s=s.f
s.toString
B.b.dR(p,36160,36064,3553,s,0)
s=m.c.a
s.toString
B.b.C(s,36160,null)},
bc(a,b,c){return this.bd(a,b,c,!1)}}
A.dU.prototype={}
A.dV.prototype={
S(a){var s,r,q,p=this.a
p.c=a
p.e=p.bw(35633,p.a)
p.f=p.bw(35632,p.b)
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
if(p.c.a.getProgramParameter(s,35714)==null){r=p.gbG().getProgramInfoLog(s)
r.toString
A.aM(A.dE("Invalide program\n          "+r+"\n        "))}p.d=s},
F(){var s=this.a,r=s.c.a
r.toString
B.b.dL(r,s.d)
r=s.c.a
r.toString
B.b.c4(r,s.e)
r=s.c.a
r.toString
B.b.c4(r,s.f)
s.c=null}}
A.cr.prototype={
R(){var s,r,q,p,o,n,m=this
for(s=m.c.a,r=s.length,q=m.b.b,p=0;p<s.length;s.length===r||(0,A.O)(s),++p){o=s[p]
n=o.b
m.e.a.vertexAttribPointer(n,o.c,5126,!1,o.d,q+o.e)
m.e.a.enableVertexAttribArray(n)}},
O(){var s,r,q,p
for(s=this.c.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.O)(s),++q){p=s[q]
this.e.a.disableVertexAttribArray(p.b)}},
P(){var s=this.a
this.e.a.drawElements(this.d,s.a,s.c,s.b)}}
A.aj.prototype={
gbG(){var s=this.c.a
s.toString
return s},
bw(a,b){var s,r=this,q=r.c.a.createShader(a)
q.toString
r.c.a.shaderSource(q,b)
r.c.a.compileShader(q)
s=r.c.a.getShaderParameter(q,35713)
s.toString
if(!A.jp(s)){q=r.gbG().getShaderInfoLog(q)
q.toString
throw A.d(A.dE("Invalide shader\n          type:"+a+" "+q+"\n        "))}return q}}
A.ew.prototype={
F(){var s=this,r=s.d.a
r.toString
B.b.dN(r,s.f)
s.d=s.f=null},
a3(a){var s
this.e=a
s=this.d.a
s.activeTexture(33984+a)
B.b.c1(s,3553,this.f)},
a5(a){var s,r,q=this
if(a)q.aK($.ld())
else{s=q.d.a
s.toString
r=q.e
r.toString
s.activeTexture(33984+r)}s=q.d.a
s.toString
B.b.c1(s,3553,null)
q.e=null},
cH(){return this.a5(!1)},
bp(a,b){var s,r=this,q=r.d.a
q.toString
s=r.e
s.toString
q.activeTexture(33984+s)
r.d.a.pixelStorei(37440,1)
s=r.d.a
s.toString
B.b.e2(s,3553,0,6408,6408,5121,a)
r.d.a.pixelStorei(37440,0)
r.by(33071,b)},
aK(a){return this.bp(a,9729)},
by(a,b){var s=this,r=3553
s.d.a.texParameteri(r,10240,b)
s.d.a.texParameteri(r,10241,b)
s.d.a.texParameteri(r,10242,a)
s.d.a.texParameteri(r,10243,a)}}
A.hZ.prototype={
p(a,b){var s,r
this.b=a
s=a.a
s.toString
r=b.d
r.toString
r=s.getUniformLocation(r,this.a)
r.toString
this.c=r}}
A.i0.prototype={}
A.i2.prototype={}
A.i3.prototype={}
A.hm.prototype={}
A.hn.prototype={}
A.hB.prototype={}
A.bK.prototype={}
A.hz.prototype={}
A.eI.prototype={
sa9(a,b){this.a.clearColor(0,0,0,1)
this.a.clearDepth(b.f)
this.a.clear(b.a)},
sc8(a,b){this.a.colorMask(b.a,!0,b.c,b.d)
this.a.depthMask(!0)},
sW(a){var s=this
s.a.enable(3042)
s.a.blendFunc(a.a,a.b)
s.a.blendEquation(32774)
s.a.blendColor(a.d,a.e,a.f,a.r)},
sa1(a){if(a==null){this.a.disable(2884)
return}this.a.enable(2884)
this.a.cullFace(a.a)},
sa7(a){if(a==null){this.a.disable(2929)
return}this.a.enable(2929)
this.a.depthFunc(515)},
sck(a,b){var s,r=this.a
r.toString
s=b.b
r.viewport(0,0,A.ab(s.a),A.ab(s.b))},
cA(a,b){var s,r,q,p=this,o=t.z
o=t.aM.a(B.f.aD(a,"webgl2",A.jd(["alpha",!1,"antialias",!0,"depth",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],o,o)))
p.a=o
A.mi(b,o)
for(o=b.f,s=o.length,r=0;r<o.length;o.length===s||(0,A.O)(o),++r){q=o[r]
p.a.getExtension(q)}p.a.frontFace(2305)
p.a.pixelStorei(37441,0)}}
A.eM.prototype={
S(a){var s,r=this
r.a0(a)
s=r.a
r.c.p(a,s)
r.d.p(a,s)},
F(){this.a_()
var s=this.c
s.b=s.c=null
s=this.d
s.b=s.c=null}}
A.fX.prototype={}
A.hI.prototype={}
A.hJ.prototype={}
A.hK.prototype={}
A.fr.prototype={
S(a){var s,r=this
r.a0(a)
s=r.a
r.c.p(a,s)
r.d.p(a,s)},
F(){this.a_()
var s=this.c
s.b=s.c=null
s=this.d
s.b=s.c=null}}
A.hS.prototype={}
A.fs.prototype={
S(a){this.a0(a)
this.c.p(a,this.a)},
F(){this.a_()
var s=this.c
s.b=s.c=null}}
A.ev.prototype={
S(a){this.cz(a)
this.f.p(a,this.a)}}
A.E.prototype={}
A.eH.prototype={
cT(a,b){var s,r
t.j.a(a)
t.a0.a(b)
s=J.lv(a)
r=A.jp(J.lw(s))
this.e=r
if(r)this.c.k(0,s)
else this.d.k(0,s)}}
A.dh.prototype={
be(){var s,r,q,p,o=this
o.cJ()
s=o.b
r=s.a
s.f.unobserve(r)
s.f.disconnect()
s=o.c
q=window
q.toString
p=s.x
p.toString
B.k.bI(q)
q.cancelAnimationFrame(p)
s.sbS(null)
s.sbT(null)
s=o.a
s.children.toString
A.mp(s,r)
o.y.aI(o)
o.y=new A.bv()},
an(){var s,r=this.b,q=r.a,p=document,o=p.documentElement
o.toString
B.e.U(A.j5(q,o).a)
p=p.documentElement
p.toString
B.e.U(A.j5(q,p).b)
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
r.b=new A.ct(new A.bF(o,s))
B.f.sZ(q,o)
B.f.sY(q,A.ab(r.b.b.b))
r.f.takeRecords().toString
this.y.bi(this)},
aa(a){var s=this
s.y.aI(s)
s.y=a
a.a8(s)},
cJ(){var s,r,q
for(s=this.d,r=s.length,q=0;q<s.length;s.length===r||(0,A.O)(s),++q)s[q].az(0)
B.a.X(s)},
cN(a){return this.be()},
cX(a){return this.an()},
cP(a){return this.an()},
d2(a){return this.y.ad(this)},
d4(a){return this.y.ae(this)},
cR(a){return this.y.bg(this)},
cV(a){return this.y.bh(this)},
cZ(a){this.y.bk(this,a)},
d0(a){var s=this
s.y.bl(s,a)
s.y.bf(s)},
cF(a,b){A.iB(a)
A.iB(b)
this.y.bj(this,a,b)},
cD(){var s,r,q=this.y
if(q instanceof A.bv)s=-1
else s=q instanceof A.ch?1:0
r=A.jd(["status",s,"fps",this.c.gdP(),"size","??"],t.N,t.K)
return A.jA(A.lU(r))}}
A.b3.prototype={
a8(a){},
aI(a){},
bk(a,b){},
bl(a,b){},
bi(a){},
bg(a){},
bh(a){},
ae(a){},
ad(a){},
bf(a){},
bj(a,b,c){}}
A.bv.prototype={}
A.c8.prototype={
a8(a){a.f.ae(a)
a.an()},
aI(a){a.f.ad(a)},
bl(a,b){var s,r,q,p,o,n,m
a.r.cG(b)
s=a.e
r=s.a
q=a.x
p=r.r
o=r.f
p.aH(r.x.ak(0,o))
n=r.w
p=p.n(0,r.y).n(0,b)
m=p.a
m===$&&A.v()
n.a=m
m=p.b
m===$&&A.v()
n.b=m
p=p.c
p===$&&A.v()
n.c=p
o.aG(n)
p=r.d
p.aH(o.ak(0,q.e))
p.a4()
r.bv()
s.bs(q)
s.bt()},
bi(a){a.f.bu(a.b.b)},
bh(a){a.aa(new A.cw())},
ae(a){a.f.ae(a)},
ad(a){a.f.ad(a)},
bf(a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=null,a0=36160,a1=a3.f,a2=a3.x
a1.sck(0,a2.a)
a1.d7(a3)
s=a3.e
r=a1.f
q=r.c.a
q.toString
B.b.C(q,a0,r.d)
a1.sa1(new A.az(1028))
a1.sa9(0,new A.ds(16640,1))
q=a1.as
p=q.a
o=p.c.a
o.toString
B.b.K(o,p.d)
p=s.a
o=p.a
n=q.r
m=t.r
l=m.a(o.n(0,s.b).a)
k=n.b.a
k.toString
B.b.N(k,n.c,!1,l)
l=a1.r
n=l.f.e
n.toString
k=q.c
j=k.b.a
j.toString
B.b.J(j,k.c,n)
q=q.d
n=m.a(a2.dx.a)
k=q.b.a
k.toString
B.b.a2(k,q.c,!1,n)
n=a1.dx
n.R()
n.P()
n.O()
n=r.c.a
n.toString
B.b.C(n,a0,a)
a1.a.flush()
n=r.c.a
n.toString
B.b.C(n,a0,r.d)
a1.sa7(a)
a1.sa1(new A.az(1029))
a1.sW(A.dn())
a1.sc8(0,new A.dU(!1,!1,!1))
n=a1.cy
q=n.a
k=q.c.a
k.toString
B.b.K(k,q.d)
k=n.c
j=m.a(o.a)
i=k.b.a
i.toString
B.b.N(i,k.c,!1,j)
j=s.e
i=n.d
h=m.a(j.a)
g=i.b.a
g.toString
B.b.N(g,i.c,!1,h)
p=p.f
n.br(p)
n.bq(a2.fx)
h=a1.dx
h.R()
h.P()
a1.sa1(new A.az(1028))
a1.sW(new A.b6(0,770,0,0,0,0))
h=a1.CW
g=h.a
f=g.c.a
f.toString
B.b.K(f,g.d)
g=h.c
f=m.a(o.a)
e=g.b.a
e.toString
B.b.N(e,g.c,!1,f)
f=h.d
g=m.a(j.a)
e=f.b.a
e.toString
B.b.N(e,f.c,!1,g)
g=s.w
f=g.gci()
e=h.e
d=t.a
f=m.a(A.m([f.a,f.b,f.c,1],d))
c=e.b.a
c.toString
B.b.M(c,e.c,f)
h=h.f
f=m.a(A.m([1,1,1,1],d))
e=h.b.a
e.toString
B.b.M(e,h.c,f)
f=a1.dx
f.P()
f.O()
a1.sc8(0,new A.dU(!0,!0,!0))
f=r.c.a
f.toString
B.b.C(f,a0,a)
a1.a.flush()
a1.d6(a3)
f=r.c.a
f.toString
B.b.C(f,a0,r.d)
f=A.jW()
a1.sW(new A.b6(32769,0,f.a,f.b,f.c,f.d))
f=a1.Q
h=f.a
e=h.c.a
e.toString
B.b.K(e,h.d)
h=s.c
e=f.f
c=m.a(o.n(0,h).a)
b=e.b.a
b.toString
B.b.N(b,e.c,!1,c)
c=a1.x.e
c.toString
f=f.c
e=f.b.a
e.toString
B.b.J(e,f.c,c)
c=a1.dx
c.R()
c.P()
c.O()
a1.sa7(new A.dC())
c=A.jW()
a1.sW(new A.b6(32769,770,c.a,c.b,c.c,c.d))
c=a1.cx
f=c.a
e=f.c.a
e.toString
B.b.K(e,f.d)
f=c.c
e=m.a(o.a)
b=f.b.a
b.toString
B.b.N(b,f.c,!1,e)
e=c.d
h=m.a(h.a)
f=e.b.a
f.toString
B.b.N(f,e.c,!1,h)
h=a1.w.f.e
h.toString
e=c.e
f=e.b.a
f.toString
B.b.J(f,e.c,h)
h=c.f
e=m.a(a2.at.a)
f=h.b.a
f.toString
B.b.a2(f,h.c,!1,e)
e=c.r
h=m.a(A.m([p.a,p.b,p.c,1],d))
f=e.b.a
f.toString
B.b.M(f,e.c,h)
h=s.x
e=c.w
h=m.a(A.m([h.a,h.b,h.c,1],d))
f=e.b.a
f.toString
B.b.M(f,e.c,h)
h=c.x
e=m.a(A.m([1.4,0.54,1.05],d))
f=h.b.a
f.toString
B.b.e4(f,h.c,e)
e=l.f.e
e.toString
c=c.y
h=c.b.a
h.toString
B.b.J(h,c.c,e)
e=a1.dy
e.R()
e.P()
e.O()
a1.sW(new A.b6(0,771,0,0,0,0))
e=q.c.a
e.toString
B.b.K(e,q.d)
q=m.a(o.a)
e=k.b.a
e.toString
B.b.N(e,k.c,!1,q)
j=m.a(j.a)
q=i.b.a
q.toString
B.b.N(q,i.c,!1,j)
n.br(p)
n.bq(a2.fy)
a2=a1.dx
a2.R()
a2.P()
a2.O()
a2=r.c.a
a2.toString
B.b.C(a2,a0,a)
a1.a.flush()
a1.d5(a3)
a2=r.c.a
a2.toString
B.b.C(a2,a0,r.d)
a1.sa7(new A.dC())
a2=a1.at
n=a2.a
p=n.c.a
p.toString
B.b.K(p,n.d)
n=a2.f
g=m.a(o.n(0,g).a)
o=n.b.a
o.toString
B.b.N(o,n.c,!1,g)
l=l.f.e
l.toString
a2=a2.c
g=a2.b.a
g.toString
B.b.J(g,a2.c,l)
l=a1.db
l.R()
l.P()
l.O()
l=r.c.a
l.toString
B.b.C(l,a0,a)
a1.a.flush()
a1.sck(0,a3.b.b)
a1.sa7(a)
a1.sa1(new A.az(1029))
a1.sW(A.dn())
a1.sa9(0,A.dt())
l=a1.ay
a2=l.a
g=a2.c.a
g.toString
B.b.K(g,a2.d)
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
B.b.J(a2,g.c,r)
r=a1.z.e
r.toString
g=l.e
a2=g.b.a
a2.toString
B.b.J(a2,g.c,r)
l=l.f
d=m.a(A.m([1.4,0,0,0],d))
m=l.b.a
m.toString
B.b.M(m,l.c,d)
d=a1.db
d.R()
d.P()
d.O()
a1.a.flush()},
bj(a,b,c){var s=a.x.d,r=s.a,q=s.b,p=new A.a6(r,q,s.c)
p.a=r+b*0.5
p.b=q+(c*0.5+0.2)
q=a.e.a
q.x.al(p)
q.y=1-B.c.dH(0.6,0,1)}}
A.ch.prototype={
a8(a){var s=0,r=A.jy(t.z)
var $async$a8=A.jz(function(b,c){if(b===1)return A.jq(c,r)
while(true)switch(s){case 0:s=2
return A.iC(a.w.ab(a.x),$async$a8)
case 2:return A.jr(null,r)}})
return A.js($async$a8,r)},
bk(a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
if(a1.w.b)return
s=a1.r
r=s.a
B.a.k(r,A.c0(300,-1,1,0.3141592653589793,-0.06283185307179587))
B.a.k(r,A.c0(500,-1,0.6,1.2566370614359172,-0.031415926535897934))
B.a.k(r,A.c0(600,-1,0.4,0.6283185307179586,-0.015707963267948967))
B.a.k(r,A.c0(300,1,1,0.9424777960769379,0.06283185307179587))
B.a.k(r,A.c0(500,1,0.6,1.5707963267948966,0.031415926535897934))
B.a.k(r,A.c0(600,1,0.4,0,0.015707963267948967))
r=s.b
B.a.k(r,A.fW(0,100,-200))
B.a.k(r,A.fW(0.5,100,-200))
B.a.k(r,A.fW(0,100,200))
B.a.k(r,A.fW(0.5,100,200))
s.cI()
s=a1.e
r=s.a
q=a1.x
p=q.c
o=1/Math.tan(p.a*0.5)
n=p.d
m=p.c
l=n/(n-m)
n=r.b
B.a.j(n.a,0,o/p.b)
B.a.j(n.a,1,0)
B.a.j(n.a,2,0)
B.a.j(n.a,3,0)
B.a.j(n.a,4,0)
B.a.j(n.a,5,o)
B.a.j(n.a,6,0)
B.a.j(n.a,7,0)
B.a.j(n.a,8,0)
B.a.j(n.a,9,0)
B.a.j(n.a,10,-l)
B.a.j(n.a,11,-1)
B.a.j(n.a,12,0)
B.a.j(n.a,13,0)
B.a.j(n.a,14,-m*l)
B.a.j(n.a,15,0)
m=t.i
r.a.sG(0,A.a3(n.n(0,r.c).a,m))
n=q.d
p=r.f
p.al(n)
r.x.al(n)
k=r.r
k.a=k.b=k.c=0
k=r.d
k.aH(p.ak(0,q.e))
k.a4()
r.bv()
j=A.ey(6)
s.b.sG(0,A.a3(A.hW(n).n(0,j).a,m))
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
s.c.sG(0,A.a3(new A.aV(A.m([k,p,i,0,h,g,f,0,e,d,n[8],0,0,0,0,1],r)).n(0,A.ey(1.5)).a,m))
j=A.ey(1.52)
n=q.as
s.d.sG(0,A.a3(A.hW(n).n(0,j).a,m))
d=s.x
d.al(n)
d.aG(q.z.cc(q.y))
j=A.ey(1.6)
s.e.sG(0,A.a3(A.hW(n).n(0,j).a,m))
c=A.jf(5.97,0,0.38)
b=new A.a6(n.a,n.b,n.c)
b.aG(c.cc(q.r))
n=s.r
n.bm()
n.bo(b)
s.bs(q)
s.bt()
s=a1.f
q=q.a.b
s.d.sG(0,A.a3(A.m([2/q.a,0,0,0,2/q.b,0,0,0,1],r),m))
m=s.e
s.db=new A.cr(m.bb(new Uint16Array(A.d8(A.m([0,1,3,2],t.e)))),m.ba(new Float32Array(A.d8(A.m([0,1,0,0,1,0,1,1],r)))),A.eE(),5)
A.lN(4,!0,!0)
r=$.k1
r.toString
a=m.bb(r)
r=$.k2
r.toString
a0=m.ba(r)
s.dy=new A.cr(a,a0,A.ks(),4)
s.dx=new A.cr(a,a0,A.jj(8),4)
if(a1.b.e)a1.aa(new A.c8())
else a1.aa(new A.cw())}}
A.ht.prototype={
cI(){var s,r,q,p
for(s=this.c,r=t.n,q=0;q<12;++q){p=0.08333333333333333*q
B.a.k(s,new A.dH(new A.T(A.m([1,0,0,0,1,0,0,0,1],r)),new A.T(A.m([1,0,0,0,1,0,0,0,1],r)),new A.T(A.m([1,0,0,0,1,0,0,0,1],r)),new A.b9(0,1,0,1),p,p*2*3.141592653589793))}},
cG(a){var s,r,q,p,o,n,m,l,k,j,i
for(s=this.a,r=s.length,q=t.i,p=0;p<s.length;s.length===r||(0,A.O)(s),++p){o=s[p]
n=o.e+=a
m=o.b
m.aJ(o.f+o.r*n)
B.a.j(m.a,6,200*o.w)
o.a.sG(0,A.a3(m.n(0,o.c).a,q))}for(s=this.b,r=s.length,n=a*0.05,p=0;p<s.length;s.length===r||(0,A.O)(s),++p){l=s[p]
m=l.f+=n
if(m>=1){l.f=m-1
m=l.b
m.aJ(0+(-0.6283185307179586+1.2566370614359172*$.jK().c9()))
k=l.d
B.a.j(m.a,6,k.a)
B.a.j(m.a,7,k.b)}j=800+200*l.f
m=l.c
m.bn(j,j,new A.ea())
l.e.d=0.5-0.5*Math.cos(l.f*2*3.141592653589793)
l.a.sG(0,A.a3(l.b.n(0,m).a,q))}for(s=this.c,r=s.length,n=a*0.2,p=0;p<s.length;s.length===r||(0,A.O)(s),++p){i=s[p]
m=i.e+=n
if(m>=1){i.e=m-1
i.b.aJ(i.r+(-0.6283185307179586+1.2566370614359172*$.jK().c9()))}j=100+1700*i.e
m=i.c
m.bn(j,j,new A.ea())
i.d.d=1+-1*i.e
i.a.sG(0,A.a3(i.b.n(0,m).a,q))}}}
A.dA.prototype={}
A.dw.prototype={}
A.dH.prototype={}
A.hC.prototype={
bs(a){var s,r,q,p,o,n=this.a.f.ak(0,this.r.gci()),m=new A.am(n.a,n.b,n.c)
m.a4()
s=A.hW(new A.a6(-0.5,-0.5,0))
r=A.aW()
q=new A.am(0,1,0).am(m)
q.a4()
p=m.am(q)
n=r.a
o=q.a
o===$&&A.v()
B.a.j(n,0,o)
o=r.a
n=q.b
n===$&&A.v()
B.a.j(o,1,n)
n=r.a
o=q.c
o===$&&A.v()
B.a.j(n,2,o)
o=r.a
n=p.a
n===$&&A.v()
B.a.j(o,4,n)
n=r.a
o=p.b
o===$&&A.v()
B.a.j(n,5,o)
o=r.a
n=p.c
n===$&&A.v()
B.a.j(o,6,n)
n=r.a
o=m.a
o===$&&A.v()
B.a.j(n,8,o)
o=r.a
n=m.b
n===$&&A.v()
B.a.j(o,9,n)
n=r.a
o=m.c
o===$&&A.v()
B.a.j(n,10,o)
this.f.sG(0,A.a3(A.ey(1).n(0,r).n(0,s).a,t.i))},
bt(){this.w.sG(0,A.a3(this.r.n(0,this.f).a,t.i))}}
A.ei.prototype={
ae(a){var s,r,q,p,o,n,m,l=this,k=a.b,j=A.m([],t.s)
l.cA(k.a,new A.hz(!1,!0,!0,j))
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
B.b.aw(s,34963,j.d)
s=j.c.a
s.toString
B.b.aw(s,34962,j.e)
j.c.a.bufferData(34963,j.a,35044)
j.c.a.bufferData(34962,j.b,35044)
j=l.f
s=a.x.a
j.bd(l,0,s,!0)
r=l.r
r.bc(l,0,s)
q=l.w
q.bc(l,0,s)
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
l.at.S(l)
l.Q.S(l)
n=l.as
n.cw(l)
n.r.p(l,n.a)
n=l.ax
n.ct(l)
n.r.p(l,n.a)
n=l.ch
n.a0(l)
m=n.a
n.c.p(l,m)
n.d.p(l,m)
n.e.p(l,m)
m=l.ay
m.a0(l)
n=m.a
m.c.p(l,n)
m.d.p(l,n)
m.e.p(l,n)
m.f.p(l,n)
n=l.CW
n.a0(l)
m=n.a
n.e.p(l,m)
n.f.p(l,m)
n.c.p(l,m)
n.d.p(l,m)
m=l.cx
m.a0(l)
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
n.a0(l)
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
s.aK(r)
p.a3(4)
r=q.c
r.toString
p.aK(r)
o.a3(5)
q=q.e
q.toString
o.bp(q,9728)
l.bu(k.b)},
bu(a){var s=a.b,r=s.b/s.a
s=this.b
B.a.j(s.a,0,2*r)
B.a.j(s.a,4,2)
B.a.j(s.a,6,-r)
B.a.j(s.a,7,-1)},
ad(a){var s,r,q,p,o,n,m,l=this,k=l.f
k.f.a5(!0)
s=l.r
s.f.a5(!0)
r=l.w
r.f.a5(!0)
q=l.x
q.a5(!0)
p=l.y
p.a5(!0)
o=l.z
o.a5(!0)
n=l.at
n.b9()
n=n.f
n.b=n.c=null
n=l.Q
n.b9()
n=n.f
n.b=n.c=null
n=l.as
n.cv()
n=n.r
n.b=n.c=null
n=l.ax
n.cs()
n=n.r
n.b=n.c=null
n=l.ch
n.a_()
m=n.c
m.b=m.c=null
m=n.d
m.b=m.c=null
n=n.e
n.b=n.c=null
n=l.ay
n.a_()
m=n.c
m.b=m.c=null
m=n.d
m.b=m.c=null
m=n.e
m.b=m.c=null
n=n.f
n.b=n.c=null
n=l.CW
n.a_()
m=n.e
m.b=m.c=null
m=n.f
m.b=m.c=null
m=n.c
m.b=m.c=null
n=n.d
n.b=n.c=null
n=l.cx
n.a_()
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
n.a_()
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
q.F()
p.F()
o.F()
k.F()
s.F()
r.F()
r=l.e
s=r.c.a
s.toString
B.b.aw(s,34963,null)
s=r.c.a
s.toString
B.b.aw(s,34962,null)
s=r.c.a
s.toString
B.b.c3(s,r.d)
s=r.c.a
s.toString
B.b.c3(s,r.e)
l.a=r.c=null},
d7(a){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.r,f=g.c.a
f.toString
B.b.C(f,36160,g.d)
h.sa7(null)
h.sa1(new A.az(1029))
h.sW(A.dn())
h.sa9(0,A.dt())
f=h.ax
s=f.a
r=s.c.a
r.toString
B.b.K(r,s.d)
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
B.b.J(o,p.c,q)
f=f.d
q=r.a(A.lH().ge0())
o=f.b.a
o.toString
B.b.M(o,f.c,q)
q=h.db
q.R()
q.P()
q=h.y.e
q.toString
o=p.b.a
o.toString
B.b.J(o,p.c,q)
for(q=a.r.b,p=q.length,o=h.d,n=t.n,m=0;m<q.length;q.length===p||(0,A.O)(q),++m){l=q[m]
k=r.a(o.n(0,l.a).a)
j=s.b.a
j.toString
B.b.a2(j,s.c,!1,k)
k=l.e
k=r.a(A.m([k.a,k.b,k.c,k.d],n))
j=f.b.a
j.toString
B.b.M(j,f.c,k)
k=h.db
j=k.e.a
j.toString
i=k.d
k=k.a
j.drawElements(i,k.a,k.c,k.b)}h.db.O()
g=g.c.a
g.toString
B.b.C(g,36160,null)
h.a.flush()},
d6(a){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=36160,e=h.r,d=e.c.a
d.toString
B.b.C(d,f,e.d)
h.sa7(g)
h.sa1(g)
h.sW(A.dn())
h.sa9(0,A.dt())
d=h.ax
s=d.a
r=s.c.a
r.toString
B.b.K(r,s.d)
s=h.y.e
s.toString
r=d.c
q=r.b.a
q.toString
B.b.J(q,r.c,s)
h.db.R()
for(s=a.r.a,r=s.length,q=h.d,p=d.r,o=t.r,d=d.d,n=t.n,m=0;m<s.length;s.length===r||(0,A.O)(s),++m){l=s[m]
k=o.a(q.n(0,l.a).a)
j=p.b.a
j.toString
B.b.a2(j,p.c,!1,k)
k=l.d
k=o.a(A.m([k.a,k.b,k.c,k.d],n))
j=d.b.a
j.toString
B.b.M(j,d.c,k)
k=h.db
j=k.e.a
j.toString
i=k.d
k=k.a
j.drawElements(i,k.a,k.c,k.b)}d=e.c.a
d.toString
B.b.C(d,f,g)
h.a.flush()
d=h.w
s=d.c.a
s.toString
B.b.C(s,f,d.d)
h.sa1(new A.az(1029))
h.sa9(0,A.dt())
s=h.ch
r=s.a
q=r.c.a
q.toString
B.b.K(q,r.d)
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
B.b.J(r,q.c,e)
s=s.e
o=o.a(A.m([0.00027,0.27],t.a))
e=s.b.a
e.toString
B.b.cj(e,s.c,o)
o=h.db
o.P()
o.O()
d=d.c.a
d.toString
B.b.C(d,f,g)
h.a.flush()},
d5(a){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.r,f=g.c.a
f.toString
B.b.C(f,36160,g.d)
h.sa7(null)
h.sa1(new A.az(1029))
h.sW(A.dn())
h.sa9(0,A.dt())
f=h.ax
s=f.a
r=s.c.a
r.toString
B.b.K(r,s.d)
s=h.y.e
s.toString
r=f.c
q=r.b.a
q.toString
B.b.J(q,r.c,s)
h.db.R()
for(s=a.r.c,r=s.length,q=h.d,p=f.r,o=t.r,f=f.d,n=t.n,m=0;m<s.length;s.length===r||(0,A.O)(s),++m){l=s[m]
k=o.a(q.n(0,l.a).a)
j=p.b.a
j.toString
B.b.a2(j,p.c,!1,k)
k=l.d
k=o.a(A.m([k.a,k.b,k.c,k.d],n))
j=f.b.a
j.toString
B.b.M(j,f.c,k)
k=h.db
j=k.e.a
j.toString
i=k.d
k=k.a
j.drawElements(i,k.a,k.c,k.b)}h.db.O()
g=g.c.a
g.toString
B.b.C(g,36160,null)
h.a.flush()}}
A.hD.prototype={}
A.hF.prototype={}
A.hG.prototype={
br(a){var s=this.e,r=t.r.a(A.m([a.a,a.b,a.c,1],t.a)),q=s.b.a
q.toString
B.b.M(q,s.c,r)},
bq(a){var s=this.f,r=t.a,q=t.r,p=q.a(A.m([a.a,a.b,a.c,0],r)),o=s.b.a
o.toString
B.b.M(o,s.c,p)
p=this.r
r=q.a(A.m([a.e,a.f],r))
q=p.b.a
q.toString
B.b.cj(q,p.c,r)}}
A.cw.prototype={
bg(a){a.aa(new A.c8())}}
A.hQ.prototype={
ab(a){var s=0,r=A.jy(t.z),q=this,p
var $async$ab=A.jz(function(b,c){if(b===1)return A.jq(c,r)
while(true)switch(s){case 0:q.b=!0
p=q.a
s=2
return A.iC(p.ac("media/texture/scene000a.png"),$async$ab)
case 2:q.sdr(c)
s=3
return A.iC(p.ac("media/texture/scene000b.png"),$async$ab)
case 3:q.sdq(c)
p=A.fV(3,256)
q.e=p
p=p.getContext("2d")
p.toString
B.i.sb0(p,q.aL('{"#000000":0,"#221F4D":0.06,"#AB262C":0.4,"#D16A33":0.6,"#FEFB9A":0.99,"#FFFFFF":1.0}'))
p.fillRect(0,0,256,1)
B.i.sb0(p,q.aL('{"#000000":0,"#F1F524":0.49,"#FFFFFF":1.0}'))
p.fillRect(0,1,256,1)
B.i.sb0(p,q.aL('{"#000000":0,"#660543":0.17,"#B04A4A":0.36,"#FFCA38":0.67}'))
p.fillRect(0,2,256,1)
q.b=!1
return A.jr(null,r)}})
return A.js($async$ab,r)},
aL(a){var s=A.lW(t.f.a(B.A.dI(0,a,null)),t.N,t.i),r=this.e.getContext("2d").createLinearGradient(0,0,256,1)
r.toString
s.A(0,new A.hR(r))
return r},
sdr(a){this.c=t.E.a(a)},
sdq(a){this.d=t.E.a(a)}}
A.hR.prototype={
$2(a,b){var s,r,q
A.Y(a)
A.iB(b)
s=A.jG(B.h.aF(a,1,3),16)
r=A.jG(B.h.aF(a,3,5),16)
q=A.jG(B.h.aF(a,5,7),16)
return this.a.addColorStop(b,"rgba("+B.c.U(s/256*256)+", "+B.c.U(r/256*256)+", "+B.c.U(q/256*256)+", 1)")},
$S:31};(function aliases(){var s=J.bx.prototype
s.cn=s.l
s=J.bg.prototype
s.cq=s.l
s=A.x.prototype
s.cr=s.l
s=A.aB.prototype
s.co=s.m
s.cp=s.j
s=A.bP.prototype
s.cu=s.j
s=A.dJ.prototype
s.cm=s.cK
s=A.dV.prototype
s.a0=s.S
s.a_=s.F
s=A.eM.prototype
s.ct=s.S
s.cs=s.F
s=A.fr.prototype
s.cw=s.S
s.cv=s.F
s=A.fs.prototype
s.cz=s.S
s.b9=s.F})();(function installTearOffs(){var s=hunkHelpers._static_1,r=hunkHelpers._static_0,q=hunkHelpers._static_2,p=hunkHelpers._instance_2u,o=hunkHelpers._instance_0u,n=hunkHelpers._instance_1u
s(A,"ns","ml",4)
s(A,"nt","mm",4)
s(A,"nu","mn",4)
r(A,"l1","nm",0)
s(A,"nv","ne",1)
q(A,"nx","ng",7)
r(A,"nw","nf",0)
p(A.F.prototype,"gbF","a6",7)
o(A.bM.prototype,"gdm","dn",0)
s(A,"nM","kN",32)
n(A.dL.prototype,"gbx","cL",26)
p(A.eH.prototype,"gcS","cT",28)
var m
o(m=A.dh.prototype,"gcB","be",0)
n(m,"gcM","cN",1)
n(m,"gcW","cX",1)
n(m,"gcO","cP",1)
n(m,"gd1","d2",1)
n(m,"gd3","d4",1)
n(m,"gcQ","cR",1)
n(m,"gcU","cV",1)
n(m,"gcY","cZ",10)
n(m,"gd_","d0",10)
p(m,"gcE","cF",29)
o(m,"gcC","cD",30)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.mixinHard,q=hunkHelpers.inherit,p=hunkHelpers.inheritMany
q(A.x,null)
p(A.x,[A.jb,J.bx,J.b4,A.G,A.aP,A.hE,A.h,A.bh,A.ci,A.P,A.bH,A.bB,A.bX,A.cR,A.dQ,A.hX,A.hs,A.c5,A.d_,A.it,A.w,A.hg,A.cg,A.a7,A.eX,A.iy,A.iw,A.eJ,A.bV,A.aU,A.bL,A.cD,A.aG,A.F,A.eK,A.cH,A.cX,A.bM,A.fk,A.d7,A.cO,A.e,A.d6,A.dx,A.dz,A.c1,A.cx,A.ib,A.h6,A.N,A.fn,A.cy,A.fZ,A.j6,A.cK,A.o,A.c6,A.aB,A.iq,A.bE,A.dL,A.fU,A.b9,A.h5,A.h8,A.bj,A.bC,A.ea,A.bF,A.a6,A.ct,A.hy,A.am,A.el,A.aq,A.b6,A.ds,A.az,A.ha,A.i4,A.fT,A.dC,A.dJ,A.dU,A.dV,A.cr,A.aj,A.ew,A.hZ,A.bK,A.hz,A.eI,A.E,A.eH,A.dh,A.b3,A.ht,A.dA,A.dw,A.dH,A.hC,A.hF,A.hQ])
p(J.bx,[J.dP,J.cb,J.a,J.bz,J.bA,J.cc,J.by])
p(J.a,[J.bg,J.D,A.e_,A.cm,A.b,A.fP,A.f,A.b7,A.dr,A.ay,A.B,A.eO,A.ae,A.h1,A.h2,A.eQ,A.c3,A.eS,A.h3,A.eV,A.a0,A.h9,A.eZ,A.c9,A.be,A.hb,A.hj,A.ho,A.f4,A.f5,A.a4,A.f6,A.f8,A.a5,A.fc,A.ff,A.a8,A.fg,A.a9,A.fj,A.S,A.fp,A.hT,A.aa,A.ft,A.hU,A.i_,A.fy,A.fA,A.fC,A.fE,A.fG,A.ce,A.ag,A.f2,A.ai,A.fa,A.hv,A.fl,A.al,A.fv,A.fR,A.eL,A.dp,A.dK,A.ed,A.ef,A.cv,A.bG,A.ek,A.eu,A.eA])
p(J.bg,[J.eb,J.cA,J.aA])
q(J.hc,J.D)
p(J.cc,[J.ca,J.dR])
p(A.G,[A.cf,A.aE,A.dS,A.eC,A.eP,A.eh,A.eU,A.dj,A.ax,A.e7,A.eD,A.eB,A.bm,A.dy])
p(A.aP,[A.du,A.dv,A.er,A.iV,A.iX,A.i6,A.i5,A.iD,A.ih,A.ip,A.hO,A.hN,A.iv,A.i9,A.ia,A.iG,A.hd,A.iI,A.iJ,A.iN,A.iO,A.iP])
p(A.du,[A.j_,A.i7,A.i8,A.ix,A.ic,A.ik,A.ij,A.ig,A.ie,A.id,A.io,A.im,A.il,A.hP,A.hM,A.is,A.iF,A.iL,A.iu])
p(A.h,[A.j,A.bi,A.cQ])
p(A.j,[A.ah,A.aC,A.cN])
q(A.c4,A.bi)
p(A.ah,[A.aD,A.f1])
q(A.bR,A.bB)
q(A.cB,A.bR)
q(A.bY,A.cB)
q(A.bZ,A.bX)
p(A.dv,[A.hw,A.iW,A.iE,A.iM,A.ii,A.hh,A.hl,A.hr,A.hp,A.hq,A.hA,A.hL,A.iR,A.fS,A.h7,A.hR])
q(A.cq,A.aE)
p(A.er,[A.eo,A.bs])
p(A.w,[A.af,A.cM,A.f0])
p(A.cm,[A.e0,A.bD])
p(A.bD,[A.cT,A.cV])
q(A.cU,A.cT)
q(A.ck,A.cU)
q(A.cW,A.cV)
q(A.cl,A.cW)
p(A.ck,[A.cj,A.e1])
p(A.cl,[A.e2,A.e3,A.e4,A.cn,A.e5,A.co,A.e6])
q(A.d2,A.eU)
p(A.aU,[A.bQ,A.cJ])
q(A.cE,A.bQ)
q(A.aY,A.cE)
q(A.cF,A.bL)
q(A.an,A.cF)
q(A.cC,A.cD)
q(A.cG,A.cH)
q(A.fe,A.d7)
q(A.cP,A.cM)
q(A.he,A.dx)
q(A.hf,A.dz)
p(A.ax,[A.cu,A.dO])
p(A.b,[A.r,A.dG,A.W,A.cY,A.X,A.Q,A.d0,A.eG,A.aX,A.au,A.dm,A.aO])
p(A.r,[A.i,A.ar])
q(A.n,A.i)
p(A.n,[A.dg,A.di,A.b8,A.bu,A.dI,A.aQ,A.bk,A.ej])
p(A.f,[A.b5,A.ba,A.bt])
q(A.fY,A.ay)
q(A.c_,A.eO)
p(A.ae,[A.h_,A.h0])
q(A.eR,A.eQ)
q(A.c2,A.eR)
q(A.eT,A.eS)
q(A.dD,A.eT)
q(A.V,A.b7)
q(A.eW,A.eV)
q(A.dF,A.eW)
q(A.f_,A.eZ)
q(A.bd,A.f_)
q(A.dX,A.f4)
q(A.dY,A.f5)
q(A.f7,A.f6)
q(A.dZ,A.f7)
q(A.f9,A.f8)
q(A.cp,A.f9)
q(A.fd,A.fc)
q(A.ec,A.fd)
q(A.eg,A.ff)
q(A.cZ,A.cY)
q(A.em,A.cZ)
q(A.fh,A.fg)
q(A.en,A.fh)
q(A.ep,A.fj)
q(A.fq,A.fp)
q(A.es,A.fq)
q(A.d1,A.d0)
q(A.et,A.d1)
q(A.fu,A.ft)
q(A.ex,A.fu)
q(A.eF,A.bk)
q(A.fz,A.fy)
q(A.eN,A.fz)
q(A.cI,A.c3)
q(A.fB,A.fA)
q(A.eY,A.fB)
q(A.fD,A.fC)
q(A.cS,A.fD)
q(A.fF,A.fE)
q(A.fi,A.fF)
q(A.fH,A.fG)
q(A.fo,A.fH)
q(A.bN,A.cJ)
p(A.aB,[A.cd,A.bP])
q(A.bf,A.bP)
q(A.f3,A.f2)
q(A.dT,A.f3)
q(A.fb,A.fa)
q(A.e8,A.fb)
q(A.fm,A.fl)
q(A.eq,A.fm)
q(A.fw,A.fv)
q(A.ez,A.fw)
q(A.dl,A.eL)
q(A.e9,A.aO)
q(A.hH,A.fU)
q(A.T,A.bj)
q(A.aV,A.bC)
q(A.h4,A.fT)
q(A.bW,A.dJ)
p(A.hZ,[A.i0,A.i2,A.i3,A.hm,A.hn,A.hB])
p(A.dV,[A.eM,A.hI,A.hJ,A.hK,A.fr,A.fs,A.hD,A.hG])
q(A.fX,A.eM)
q(A.hS,A.fr)
q(A.ev,A.fs)
p(A.b3,[A.bv,A.c8,A.ch,A.cw])
q(A.ei,A.eI)
s(A.cT,A.e)
s(A.cU,A.P)
s(A.cV,A.e)
s(A.cW,A.P)
s(A.bR,A.d6)
s(A.eO,A.fZ)
s(A.eQ,A.e)
s(A.eR,A.o)
s(A.eS,A.e)
s(A.eT,A.o)
s(A.eV,A.e)
s(A.eW,A.o)
s(A.eZ,A.e)
s(A.f_,A.o)
s(A.f4,A.w)
s(A.f5,A.w)
s(A.f6,A.e)
s(A.f7,A.o)
s(A.f8,A.e)
s(A.f9,A.o)
s(A.fc,A.e)
s(A.fd,A.o)
s(A.ff,A.w)
s(A.cY,A.e)
s(A.cZ,A.o)
s(A.fg,A.e)
s(A.fh,A.o)
s(A.fj,A.w)
s(A.fp,A.e)
s(A.fq,A.o)
s(A.d0,A.e)
s(A.d1,A.o)
s(A.ft,A.e)
s(A.fu,A.o)
s(A.fy,A.e)
s(A.fz,A.o)
s(A.fA,A.e)
s(A.fB,A.o)
s(A.fC,A.e)
s(A.fD,A.o)
s(A.fE,A.e)
s(A.fF,A.o)
s(A.fG,A.e)
s(A.fH,A.o)
r(A.bP,A.e)
s(A.f2,A.e)
s(A.f3,A.o)
s(A.fa,A.e)
s(A.fb,A.o)
s(A.fl,A.e)
s(A.fm,A.o)
s(A.fv,A.e)
s(A.fw,A.o)
s(A.eL,A.w)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{k:"int",u:"double",H:"num",q:"String",iQ:"bool",N:"Null",l:"List"},mangledNames:{},types:["~()","~(@)","~(q,@)","@(@)","~(~())","N(@)","N()","~(x,ak)","~(@,@)","~(f)","~(u)","a_<N>()","@(@,q)","@(q)","N(~())","N(@,ak)","~(k,@)","N(x,ak)","F<@>(@)","~(x?,x?)","~(bI,@)","~(q,q)","@(x?)","cd(@)","bf<@>(@)","aB(@)","~(H)","u(H,u)","~(l<@>,be)","~(u,u)","@()","~(q,u)","x?(@)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti")}
A.mI(v.typeUniverse,JSON.parse('{"eb":"bg","cA":"bg","aA":"bg","nU":"f","o6":"f","nX":"aO","nV":"b","oc":"b","oe":"b","ob":"i","nZ":"n","o8":"r","o5":"r","os":"Q","o4":"au","o0":"ar","og":"ar","o9":"bd","o1":"B","o2":"S","nY":"bk","dP":{"iQ":[],"A":[]},"cb":{"N":[],"A":[]},"D":{"l":["1"],"j":["1"],"h":["1"]},"hc":{"D":["1"],"l":["1"],"j":["1"],"h":["1"]},"b4":{"a2":["1"]},"cc":{"u":[],"H":[]},"ca":{"u":[],"k":[],"H":[],"A":[]},"dR":{"u":[],"H":[],"A":[]},"by":{"q":[],"A":[]},"cf":{"G":[]},"j":{"h":["1"]},"ah":{"j":["1"],"h":["1"]},"bh":{"a2":["1"]},"bi":{"h":["2"],"h.E":"2"},"c4":{"bi":["1","2"],"j":["2"],"h":["2"],"h.E":"2"},"ci":{"a2":["2"]},"aD":{"ah":["2"],"j":["2"],"h":["2"],"ah.E":"2","h.E":"2"},"bH":{"bI":[]},"bY":{"cB":["1","2"],"bR":["1","2"],"bB":["1","2"],"d6":["1","2"],"L":["1","2"]},"bX":{"L":["1","2"]},"bZ":{"bX":["1","2"],"L":["1","2"]},"cQ":{"h":["1"],"h.E":"1"},"cR":{"a2":["1"]},"dQ":{"k3":[]},"cq":{"aE":[],"G":[]},"dS":{"G":[]},"eC":{"G":[]},"d_":{"ak":[]},"aP":{"bb":[]},"du":{"bb":[]},"dv":{"bb":[]},"er":{"bb":[]},"eo":{"bb":[]},"bs":{"bb":[]},"eP":{"G":[]},"eh":{"G":[]},"af":{"w":["1","2"],"k7":["1","2"],"L":["1","2"],"w.K":"1","w.V":"2"},"aC":{"j":["1"],"h":["1"],"h.E":"1"},"cg":{"a2":["1"]},"e_":{"A":[]},"cm":{"I":[]},"e0":{"I":[],"A":[]},"bD":{"t":["1"],"I":[]},"ck":{"e":["u"],"l":["u"],"t":["u"],"j":["u"],"I":[],"h":["u"],"P":["u"]},"cl":{"e":["k"],"l":["k"],"t":["k"],"j":["k"],"I":[],"h":["k"],"P":["k"]},"cj":{"e":["u"],"j7":[],"l":["u"],"t":["u"],"j":["u"],"I":[],"h":["u"],"P":["u"],"A":[],"e.E":"u"},"e1":{"e":["u"],"l":["u"],"t":["u"],"j":["u"],"I":[],"h":["u"],"P":["u"],"A":[],"e.E":"u"},"e2":{"e":["k"],"l":["k"],"t":["k"],"j":["k"],"I":[],"h":["k"],"P":["k"],"A":[],"e.E":"k"},"e3":{"e":["k"],"l":["k"],"t":["k"],"j":["k"],"I":[],"h":["k"],"P":["k"],"A":[],"e.E":"k"},"e4":{"e":["k"],"l":["k"],"t":["k"],"j":["k"],"I":[],"h":["k"],"P":["k"],"A":[],"e.E":"k"},"cn":{"e":["k"],"ji":[],"l":["k"],"t":["k"],"j":["k"],"I":[],"h":["k"],"P":["k"],"A":[],"e.E":"k"},"e5":{"e":["k"],"l":["k"],"t":["k"],"j":["k"],"I":[],"h":["k"],"P":["k"],"A":[],"e.E":"k"},"co":{"e":["k"],"l":["k"],"t":["k"],"j":["k"],"I":[],"h":["k"],"P":["k"],"A":[],"e.E":"k"},"e6":{"e":["k"],"l":["k"],"t":["k"],"j":["k"],"I":[],"h":["k"],"P":["k"],"A":[],"e.E":"k"},"eU":{"G":[]},"d2":{"aE":[],"G":[]},"F":{"a_":["1"]},"bV":{"G":[]},"aY":{"cE":["1"],"bQ":["1"],"aU":["1"]},"an":{"cF":["1"],"bL":["1"],"at":["1"],"aZ":["1"]},"cD":{"kj":["1"],"kD":["1"],"aZ":["1"]},"cC":{"cD":["1"],"kj":["1"],"kD":["1"],"aZ":["1"]},"cE":{"bQ":["1"],"aU":["1"]},"cF":{"bL":["1"],"at":["1"],"aZ":["1"]},"bL":{"at":["1"],"aZ":["1"]},"bQ":{"aU":["1"]},"cG":{"cH":["1"]},"bM":{"at":["1"]},"d7":{"kt":[]},"fe":{"d7":[],"kt":[]},"cM":{"w":["1","2"],"L":["1","2"]},"cP":{"cM":["1","2"],"w":["1","2"],"L":["1","2"],"w.K":"1","w.V":"2"},"cN":{"j":["1"],"h":["1"],"h.E":"1"},"cO":{"a2":["1"]},"w":{"L":["1","2"]},"bB":{"L":["1","2"]},"cB":{"bR":["1","2"],"bB":["1","2"],"d6":["1","2"],"L":["1","2"]},"f0":{"w":["q","@"],"L":["q","@"],"w.K":"q","w.V":"@"},"f1":{"ah":["q"],"j":["q"],"h":["q"],"ah.E":"q","h.E":"q"},"u":{"H":[]},"k":{"H":[]},"l":{"j":["1"],"h":["1"]},"dj":{"G":[]},"aE":{"G":[]},"ax":{"G":[]},"cu":{"G":[]},"dO":{"G":[]},"e7":{"G":[]},"eD":{"G":[]},"eB":{"G":[]},"bm":{"G":[]},"dy":{"G":[]},"cx":{"G":[]},"fn":{"ak":[]},"b5":{"f":[]},"ba":{"f":[]},"V":{"b7":[]},"aQ":{"i":[],"r":[],"b":[],"dq":[]},"r":{"b":[]},"W":{"b":[]},"X":{"b":[]},"Q":{"b":[]},"n":{"i":[],"r":[],"b":[]},"dg":{"i":[],"r":[],"b":[]},"di":{"i":[],"r":[],"b":[]},"b8":{"i":[],"r":[],"b":[],"dq":[]},"ar":{"r":[],"b":[]},"bu":{"i":[],"r":[],"b":[]},"c2":{"e":["as<H>"],"o":["as<H>"],"l":["as<H>"],"t":["as<H>"],"j":["as<H>"],"h":["as<H>"],"o.E":"as<H>","e.E":"as<H>"},"c3":{"as":["H"]},"dD":{"e":["q"],"o":["q"],"l":["q"],"t":["q"],"j":["q"],"h":["q"],"o.E":"q","e.E":"q"},"i":{"r":[],"b":[]},"dF":{"e":["V"],"o":["V"],"l":["V"],"t":["V"],"j":["V"],"h":["V"],"o.E":"V","e.E":"V"},"dG":{"b":[]},"dI":{"i":[],"r":[],"b":[]},"bd":{"e":["r"],"o":["r"],"l":["r"],"t":["r"],"j":["r"],"h":["r"],"o.E":"r","e.E":"r"},"bk":{"i":[],"r":[],"b":[]},"dX":{"w":["q","@"],"L":["q","@"],"w.K":"q","w.V":"@"},"dY":{"w":["q","@"],"L":["q","@"],"w.K":"q","w.V":"@"},"dZ":{"e":["a4"],"o":["a4"],"l":["a4"],"t":["a4"],"j":["a4"],"h":["a4"],"o.E":"a4","e.E":"a4"},"cp":{"e":["r"],"o":["r"],"l":["r"],"t":["r"],"j":["r"],"h":["r"],"o.E":"r","e.E":"r"},"ec":{"e":["a5"],"o":["a5"],"l":["a5"],"t":["a5"],"j":["a5"],"h":["a5"],"o.E":"a5","e.E":"a5"},"eg":{"w":["q","@"],"L":["q","@"],"w.K":"q","w.V":"@"},"ej":{"i":[],"r":[],"b":[]},"em":{"e":["W"],"o":["W"],"l":["W"],"b":[],"t":["W"],"j":["W"],"h":["W"],"o.E":"W","e.E":"W"},"en":{"e":["a8"],"o":["a8"],"l":["a8"],"t":["a8"],"j":["a8"],"h":["a8"],"o.E":"a8","e.E":"a8"},"ep":{"w":["q","q"],"L":["q","q"],"w.K":"q","w.V":"q"},"es":{"e":["Q"],"o":["Q"],"l":["Q"],"t":["Q"],"j":["Q"],"h":["Q"],"o.E":"Q","e.E":"Q"},"et":{"e":["X"],"o":["X"],"l":["X"],"b":[],"t":["X"],"j":["X"],"h":["X"],"o.E":"X","e.E":"X"},"ex":{"e":["aa"],"o":["aa"],"l":["aa"],"t":["aa"],"j":["aa"],"h":["aa"],"o.E":"aa","e.E":"aa"},"eF":{"i":[],"r":[],"b":[],"dq":[]},"eG":{"b":[]},"aX":{"b":[]},"au":{"b":[]},"eN":{"e":["B"],"o":["B"],"l":["B"],"t":["B"],"j":["B"],"h":["B"],"o.E":"B","e.E":"B"},"cI":{"as":["H"]},"eY":{"e":["a0?"],"o":["a0?"],"l":["a0?"],"t":["a0?"],"j":["a0?"],"h":["a0?"],"o.E":"a0?","e.E":"a0?"},"cS":{"e":["r"],"o":["r"],"l":["r"],"t":["r"],"j":["r"],"h":["r"],"o.E":"r","e.E":"r"},"fi":{"e":["a9"],"o":["a9"],"l":["a9"],"t":["a9"],"j":["a9"],"h":["a9"],"o.E":"a9","e.E":"a9"},"fo":{"e":["S"],"o":["S"],"l":["S"],"t":["S"],"j":["S"],"h":["S"],"o.E":"S","e.E":"S"},"cJ":{"aU":["1"]},"bN":{"cJ":["1"],"aU":["1"]},"cK":{"at":["1"]},"c6":{"a2":["1"]},"bf":{"e":["1"],"l":["1"],"j":["1"],"h":["1"],"e.E":"1"},"dT":{"e":["ag"],"o":["ag"],"l":["ag"],"j":["ag"],"h":["ag"],"o.E":"ag","e.E":"ag"},"e8":{"e":["ai"],"o":["ai"],"l":["ai"],"j":["ai"],"h":["ai"],"o.E":"ai","e.E":"ai"},"eq":{"e":["q"],"o":["q"],"l":["q"],"j":["q"],"h":["q"],"o.E":"q","e.E":"q"},"ez":{"e":["al"],"o":["al"],"l":["al"],"j":["al"],"h":["al"],"o.E":"al","e.E":"al"},"dl":{"w":["q","@"],"L":["q","@"],"w.K":"q","w.V":"@"},"dm":{"b":[]},"aO":{"b":[]},"e9":{"b":[]},"bt":{"f":[]},"T":{"bj":[]},"aV":{"bC":[]},"bv":{"b3":[]},"c8":{"b3":[]},"ch":{"b3":[]},"ei":{"eI":[]},"cw":{"b3":[]},"lB":{"I":[]},"lQ":{"l":["k"],"j":["k"],"h":["k"],"I":[]},"mh":{"l":["k"],"j":["k"],"h":["k"],"I":[]},"mg":{"l":["k"],"j":["k"],"h":["k"],"I":[]},"lO":{"l":["k"],"j":["k"],"h":["k"],"I":[]},"ji":{"l":["k"],"j":["k"],"h":["k"],"I":[]},"lP":{"l":["k"],"j":["k"],"h":["k"],"I":[]},"mf":{"l":["k"],"j":["k"],"h":["k"],"I":[]},"j7":{"l":["u"],"j":["u"],"h":["u"],"I":[]},"lM":{"l":["u"],"j":["u"],"h":["u"],"I":[]}}'))
A.mH(v.typeUniverse,JSON.parse('{"j":1,"bD":1,"cH":1,"dx":2,"dz":2,"bP":1}'))
var u={c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type"}
var t=(function rtii(){var s=A.ac
return{h:s("@<~>"),t:s("bV"),D:s("b5"),J:s("b7"),cl:s("b8"),cf:s("bY<bI,@>"),bK:s("ba"),bl:s("j<@>"),V:s("G"),A:s("f"),Z:s("bb"),bz:s("a_<@>"),cW:s("c9"),R:s("aQ"),a0:s("be"),B:s("k3"),d:s("h<@>"),U:s("D<aq>"),s:s("D<q>"),n:s("D<u>"),b:s("D<@>"),e:s("D<k>"),a:s("D<H>"),T:s("cb"),g:s("aA"),da:s("t<@>"),a2:s("bf<@>"),bV:s("af<bI,@>"),cF:s("ce"),w:s("l<u>"),j:s("l<@>"),r:s("l<H>"),f:s("L<@,@>"),a1:s("r"),P:s("N"),K:s("x"),x:s("bE<H>"),L:s("od"),q:s("as<H>"),aM:s("bG"),l:s("ak"),N:s("q"),cm:s("bI"),bW:s("A"),b7:s("aE"),Q:s("I"),cr:s("cA"),cg:s("aX"),bj:s("au"),cI:s("bN<bt>"),bt:s("bN<f>"),c:s("F<@>"),aQ:s("F<k>"),aR:s("cP<@,@>"),y:s("iQ"),m:s("iQ(x)"),i:s("u"),z:s("@"),O:s("@()"),v:s("@(x)"),C:s("@(x,ak)"),S:s("k"),G:s("0&*"),_:s("x*"),bc:s("a_<N>?"),E:s("aQ?"),aL:s("l<@>?"),X:s("x?"),c4:s("cv?"),F:s("aG<@,@>?"),o:s("@(f)?"),Y:s("~()?"),bF:s("~(b5)?"),cu:s("~(ba)?"),cx:s("~(f)?"),W:s("~(u)?"),H:s("H"),p:s("~"),M:s("~()"),bo:s("~(x)"),k:s("~(x,ak)"),aa:s("~(q,q)"),u:s("~(q,@)"),d8:s("~(u)"),I:s("~(H)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.f=A.b8.prototype
B.i=A.dr.prototype
B.D=A.aQ.prototype
B.E=J.bx.prototype
B.a=J.D.prototype
B.e=J.ca.prototype
B.c=J.cc.prototype
B.h=J.by.prototype
B.F=J.aA.prototype
B.G=J.a.prototype
B.q=A.cj.prototype
B.r=A.cn.prototype
B.t=J.eb.prototype
B.b=A.bG.prototype
B.j=J.cA.prototype
B.k=A.aX.prototype
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

B.A=new A.he()
B.W=new A.hE()
B.B=new A.iq()
B.n=new A.it()
B.d=new A.fe()
B.C=new A.fn()
B.H=new A.hf(null)
B.o=A.m(s([]),t.b)
B.I={}
B.p=new A.bZ(B.I,[],A.ac("bZ<bI,@>"))
B.J=new A.bH("call")
B.K=A.ap("o_")
B.L=A.ap("lB")
B.M=A.ap("j7")
B.N=A.ap("lM")
B.O=A.ap("lO")
B.P=A.ap("lP")
B.Q=A.ap("lQ")
B.R=A.ap("x")
B.S=A.ap("ji")
B.T=A.ap("mf")
B.U=A.ap("mg")
B.V=A.ap("mh")})();(function staticFields(){$.ir=null
$.Z=A.m([],A.ac("D<x>"))
$.kf=null
$.jT=null
$.jS=null
$.l5=null
$.l_=null
$.l9=null
$.iS=null
$.iY=null
$.jF=null
$.bS=null
$.da=null
$.db=null
$.jx=!1
$.C=B.d
$.jk=null
$.z=A.m([],A.ac("D<E>"))
$.c7=A.m([],A.ac("D<E>"))
$.bc=A.m([],A.ac("D<a6>"))
$.dM=A.m([],t.e)
$.dN=A.m([],t.n)
$.j9=A.k8(t.N,t.S)
$.k_=!1
$.k0=!1
$.k1=null
$.k2=null})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal
s($,"o3","fM",()=>A.l4("_$dart_dartClosure"))
s($,"oI","j2",()=>B.d.cd(new A.j_(),A.ac("a_<N>")))
s($,"oi","le",()=>A.aF(A.hY({
toString:function(){return"$receiver$"}})))
s($,"oj","lf",()=>A.aF(A.hY({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"ok","lg",()=>A.aF(A.hY(null)))
s($,"ol","lh",()=>A.aF(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"oo","lk",()=>A.aF(A.hY(void 0)))
s($,"op","ll",()=>A.aF(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"on","lj",()=>A.aF(A.kn(null)))
s($,"om","li",()=>A.aF(function(){try{null.$method$}catch(r){return r.message}}()))
s($,"or","ln",()=>A.aF(A.kn(void 0)))
s($,"oq","lm",()=>A.aF(function(){try{(void 0).$method$}catch(r){return r.message}}()))
s($,"ot","jL",()=>A.mk())
s($,"o7","j1",()=>A.ac("F<N>").a($.j2()))
s($,"oG","lq",()=>A.j0(B.R))
s($,"oE","lp",()=>A.mU(A.jA(self)))
s($,"ou","jM",()=>A.l4("_$dart_dartObject"))
s($,"oF","jN",()=>function DartObject(a){this.o=a})
s($,"oa","jK",()=>B.B)
s($,"oh","ld",()=>A.fV(1,1))
s($,"nW","lc",()=>{var r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4,e5,e6,e7,e8,e9,f0,f1,f2,f3,f4,f5,f6,f7,f8,f9,g0,g1,g2,g3,g4,g5,g6,g7,g8,g9,h0,h1,h2,h3,h4,h5,h6,h7,h8="uPvwlTransform",h9="    precision highp float;\n\n    uniform sampler2D uSampler;\n\n    varying vec2 vMapping;\n\n    void main(void)\n    {\n      gl_FragColor = texture2D(uSampler, vMapping);\n    }\n  ",i0="uSampler",i1="uMappingTransform",i2="    precision highp float;\n    \n    attribute vec2 aPositionMapping;\n\n    uniform mat3 uPvwlTransform;\n\n    varying vec2 vMapping;\n\n    void main(void)\n    {\n      vMapping = aPositionMapping;\n\n      vec3 position = uPvwlTransform * vec3(aPositionMapping, 1.0);\n      gl_Position = vec4(position.xy, 0.0, 1.0);\n    }\n  ",i3="uPvTransform",i4="uWlTransform",i5="uLightPosition",i6="uViewPosition",i7=A.ac("bu").a(A.nA().querySelector("#real-t-demo-psamathe")),i8=A.fV(null,null)
A.kd()
r=A.kd()
q=t.z
p=A.kk(q)
q=A.kk(q)
o=A.je(20,0,!0,t.i)
n=A.m([],A.ac("D<at<@>>"))
m=A.kq()
l=A.kq()
k=A.hu()
j=A.k9()
i=A.k9()
h=A.aW()
g=A.i1(0,0,1)
f=A.i1(0,1,0)
e=A.hu()
d=A.aW()
c=A.aW()
b=A.aW()
a=A.aW()
a0=A.aW()
a1=A.aW()
a2=A.aW()
a3=A.hu()
a4=A.hV()
a5=A.m([2,0,0,0,2,0,-1,-1,1],t.n)
a6=A.hV()
a7=new Uint16Array(A.kK(0))
a8=new Float32Array(A.kK(0))
a9=A.jh()
b0=A.jh()
b1=A.jh()
b2=A.aR(h8)
A.jj(5)
b3=A.aT(i0)
b4=A.aR(h8)
A.jj(5)
b5=A.aT(i0)
b6=A.dW(i1)
b7=A.aR(h8)
A.eE()
b8=A.aT(i0)
b9=A.dW(h8)
A.eE()
c0=A.aT(i0)
c1=A.bn("uColor")
c2=A.dW(h8)
c3=A.aT(i0)
c4=A.aT("uGradientSampler")
c5=A.bn("uData")
A.eE()
c6=A.dW(h8)
c7=A.aT(i0)
c8=A.kp("uData")
A.eE()
c9=A.aR(i3)
d0=A.aR(i4)
d1=A.bn(i5)
d2=A.bn("uLightColor")
A.kr()
d3=A.aR(i3)
d4=A.aR(i4)
d5=A.aT("uNormalMapSampler")
d6=A.dW(i1)
d7=A.bn(i6)
d8=A.bn(i5)
d9=A.aT("uShininessMapSampler")
A.ks()
e0=A.aR(i3)
e1=A.aR(i4)
e2=A.bn(i6)
e3=A.bn("uSinusoidData")
e4=A.kp("uLimitData")
A.kr()
e5=A.m([],A.ac("D<dA>"))
e6=A.m([],A.ac("D<dw>"))
e7=A.m([],A.ac("D<dH>"))
A.kc(0,0)
e8=A.kc(1024,1024)
e9=A.ke(2,0,3)
f0=A.ke(0,0,1)
f1=A.i1(-2.2,0,0)
f2=A.i1(-3,0,0)
f3=A.jf(5.09,0,0.63)
f4=A.jf(1.6650441064025905,0,-0.15707963267948966)
f5=A.lZ()
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
B.a.j(h3,0,1-(h0+h2))
B.a.j(h3,1,g8+g6)
B.a.j(h3,2,g9-g5)
B.a.j(h3,3,g8-g6)
B.a.j(h3,4,1-(g7+h2))
B.a.j(h3,5,h1+g4)
B.a.j(h3,6,g9+g5)
B.a.j(h3,7,h1-g4)
B.a.j(h3,8,1-(g7+h0))
f4=A.hu()
h4=A.hV()
B.a.j(h4.a,0,4)
B.a.j(h4.a,4,2)
B.a.j(h4.a,6,-1.5)
B.a.j(h4.a,7,-0.5)
h5=A.hV()
B.a.j(h5.a,0,3)
B.a.j(h5.a,4,1.5)
B.a.j(h5.a,6,-0.6)
B.a.j(h5.a,7,-0.35)
h6=new A.el()
h6.a=0.72
h6.b=7
h6.c=0.793
h7=new A.el()
h7.a=1
h7.b=173
h7.c=0.172
h7.e=0.321
h7.f=0.364
return new A.dh(i7,new A.eH(i8,new A.ct(r),p,q),new A.dL(o),n,new A.hC(new A.hH(m,l,k,j,i,h,g,f,e),d,c,b,a,a0,a1,a2,a3),new A.ei(a4,new A.T(a5),a6,new A.h4(a7,a8),new A.bW(),new A.bW(),new A.bW(),a9,b0,b1,new A.ev(b2,b3,new A.aj("    precision highp float;\n    \n    attribute vec3 aPosition;\n    attribute vec2 aMapping;\n\n    uniform mat4 uPvwlTransform;\n\n    varying vec2 vMapping;\n\n    void main(void)\n    {\n      vMapping = aMapping;\n\n      gl_Position = uPvwlTransform * vec4(aPosition, 1.0);\n    }\n  ",h9)),new A.hS(b4,b5,b6,new A.aj("    precision highp float;\n    \n    attribute vec3 aPosition;\n    attribute vec2 aMapping;\n\n    uniform mat4 uPvwlTransform;\n    uniform mat3 uMappingTransform;\n\n    varying vec2 vMapping;\n\n    void main(void)\n    {\n      vMapping = vec2(uMappingTransform * vec3(aMapping, 1.0));\n      gl_Position = uPvwlTransform * vec4(aPosition, 1.0);\n    }\n  ",h9)),new A.ev(b7,b8,new A.aj("    precision highp float;\n    \n    attribute vec2 aPositionMapping;\n\n    uniform mat4 uPvwlTransform;\n\n    varying vec2 vMapping;\n\n    void main(void)\n    {\n      vMapping = aPositionMapping;\n\n      gl_Position = uPvwlTransform * vec4(aPositionMapping, 0.0, 1.0);\n    }\n  ",h9)),new A.fX(b9,c0,c1,new A.aj(i2,"    precision highp float;\n\n    uniform sampler2D uSampler;\n    uniform vec4 uColor;\n\n    varying vec2 vMapping;\n\n    void main(void)\n    {\n      gl_FragColor = texture2D(uSampler, vMapping) * uColor;\n    }\n  ")),new A.hD(c2,c3,c4,c5,new A.aj("    precision mediump float;\n    \n    attribute vec2 aPositionMapping;\n\n    uniform mat3 uPvwlTransform;\n\n    varying vec2 vMapping;\n\n    void main(void)\n    {\n      vMapping = aPositionMapping;\n\n      vec3 position = uPvwlTransform * vec3(aPositionMapping, 1.0);\n      gl_Position = vec4(position.xy, 0.0, 1.0);\n    }\n  ","    precision mediump float;\n\n    uniform sampler2D uSampler;\n    uniform sampler2D uGradientSampler;\n    uniform vec4 uData;\n\n    varying vec2 vMapping;\n\n    void main(void)\n    {\n      vec4 levels = texture2D(uSampler, vMapping);\n      vec4 redGradientMap = texture2D(uGradientSampler, vec2(levels.x, 1.0));\n      vec4 greenGradientMap = texture2D(uGradientSampler, vec2(levels.y, 0.5));\n      vec4 blueGradientMap = texture2D(uGradientSampler, vec2(levels.z, 0.0));\n\n      vec3 gamma = vec3(uData.x);\n      vec3 color = redGradientMap.xyz + greenGradientMap.xyz + blueGradientMap.xyz;\n      gl_FragColor = vec4(pow(color, gamma), 1.0);\n    }\n  ")),new A.hK(c6,c7,c8,new A.aj(i2,"    precision highp float;\n\n    uniform sampler2D uSampler;\n    uniform vec2 uData;\n\n    varying vec2 vMapping;\n\n    void main(void)\n    {\n      float step = uData.x;\n      float strength = uData.y;\n\n      float lt = texture2D(uSampler, vMapping + vec2(-step,step)).x;\n      float t = texture2D(uSampler, vMapping + vec2(0,step)).x;\n      float rt = texture2D(uSampler, vMapping + vec2(step,step)).x;\n      float l = texture2D(uSampler, vMapping + vec2(-step,0)).x;\n      float r = texture2D(uSampler, vMapping + vec2(step,0)).x;\n      float lb = texture2D(uSampler, vMapping + vec2(-step,-step)).x;\n      float b = texture2D(uSampler, vMapping + vec2(0,-step)).x;\n      float rb = texture2D(uSampler, vMapping + vec2(step,-step)).x;\n\n      vec3 rawNormal = normalize(vec3(\n        lt + l + l + lb - rt - r - r - rb,\n        lt + t + t + rt - lb - b - b - rb,\n        strength));\n\n      gl_FragColor = vec4((rawNormal + 1.0) * 0.5, 1.0);\n    }\n  ")),new A.hI(c9,d0,d1,d2,new A.aj("    precision highp float;\n    \n    attribute vec3 aPositionNormal;\n\n    uniform mat4 uPvTransform;\n    uniform mat4 uWlTransform;\n\n    varying vec4 vWorldPosition;\n    varying vec4 vWorldNormal;\n\n    void main(void)\n    {\n      vWorldPosition = uWlTransform * vec4(aPositionNormal, 1.0);\n      vWorldNormal = normalize(uWlTransform * vec4(aPositionNormal, 0.0));\n      \n      gl_Position = uPvTransform * vWorldPosition;\n    }\n  ","    precision highp float;\n\n        float LambertianFactor(\n      in vec4 polygonNormal,\n      in vec4 lightDirection)\n    {\n      return max(dot(polygonNormal, lightDirection), 0.0);\n    }\n  \n\n    uniform vec4 uLightPosition;\n    uniform vec4 uLightColor;\n\n    varying vec4 vWorldPosition;\n    varying vec4 vWorldNormal;\n\n    void main(void)\n    {\n      vec4 worldLightDirection = normalize(uLightPosition - vWorldPosition);\n      float diffuseFactor = LambertianFactor(vWorldNormal, worldLightDirection);\n      gl_FragColor = uLightColor * diffuseFactor;\n    }\n  ")),new A.hJ(d3,d4,d5,d6,d7,d8,new A.i2("uLightData"),d9,new A.aj("    precision highp float;\n\n    attribute vec3 aPositionNormal;\n    attribute vec2 aMapping;\n    attribute vec3 aTangent;\n\n    uniform mat4 uPvTransform;\n    uniform mat4 uWlTransform;\n    uniform mat3 uMappingTransform;\n\n    varying vec4 vWorldPosition;\n    varying vec4 vWorldNormal;\n    varying vec4 vWorldTangent;\n    varying vec2 vMapping;\n\n    void main(void)\n    {\n      vWorldPosition = uWlTransform * vec4(aPositionNormal, 1.0);\n      vWorldNormal = normalize(uWlTransform * vec4(aPositionNormal, 0.0));\n      vWorldTangent = normalize(uWlTransform * vec4(aTangent, 0.0));\n      vMapping = vec2(uMappingTransform * vec3(aMapping, 1.0));\n\n      gl_Position = uPvTransform * vWorldPosition;\n    }\n  ","    precision highp float;\n\n        mat4 CreateTranspose(in mat4 original)\n    {\n      vec4 i0 = original[0];\n      vec4 i1 = original[1];\n      vec4 i2 = original[2];\n      vec4 i3 = original[3];\n\n      return mat4(\n          vec4(i0.x, i1.x, i2.x, i3.x),\n          vec4(i0.y, i1.y, i2.y, i3.y),\n          vec4(i0.z, i1.z, i2.z, i3.z),\n          vec4(i0.w, i1.w, i2.w, i3.w));\n    }\n  \n        mat4 CreateTangentTransform(\n        in vec4 worldNormal,\n        in vec4 worldTangent)\n    {\n      return CreateTranspose(mat4(\n          worldTangent,\n          normalize(cross(worldNormal.xyz, worldTangent.xyz)), 0.0,\n          worldNormal,\n          0.0, 0.0, 0.0, 1.0));\n    }\n  \n        float LambertianFactor(\n      in float diffuseFactor,\n      in vec4 texelNormal,\n      in vec4 lightDirection)\n    {\n      return diffuseFactor * max(dot(texelNormal, lightDirection), 0.0);\n    }\n  \n        float PhongFactor(\n        in vec4 texelNormal,\n        in vec4 viewDirection,\n        in vec4 lightDirection,\n        in float shininessFactor,\n        in float shininess,\n        in float specularFactor)\n    {\n      vec4 reflection = reflect(-lightDirection, texelNormal);\n      return specularFactor * pow(max(dot(reflection, viewDirection),0.0), shininess) * shininessFactor;\n    }\n  \n\n    uniform sampler2D uNormalMapSampler;\n    uniform sampler2D uShininessMapSampler;\n    uniform vec4 uViewPosition;\n    uniform vec4 uLightPosition;\n    uniform vec4 uDiffuseColor;\n    uniform vec4 uSpecularColor;\n    uniform vec3 uLightData;\n\n    varying vec4 vWorldPosition;\n    varying vec4 vWorldNormal;\n    varying vec4 vWorldTangent;\n    varying vec2 vMapping;\n\n    void main(void)\n    {\n      vec4 worldViewDirection = normalize(uViewPosition - vWorldPosition);\n      vec4 worldLightDirection = normalize(uLightPosition - vWorldPosition);\n      mat4 tangentTransform = CreateTangentTransform(vWorldNormal, vWorldTangent);\n      vec4 tangentViewDirection = tangentTransform * worldViewDirection;\n      vec4 tangentLightDirection = tangentTransform * worldLightDirection;\n      \n      float shininessFactor = texture2D(uShininessMapSampler, vMapping).x;\n      vec4 rawTexelNormal = texture2D(uNormalMapSampler, vMapping);\n      vec4 texelNormal = vec4((rawTexelNormal.xyz * 2.0) - 1.0, 0.0);\n\n      float diffuseFactor = LambertianFactor(\n          uLightData.y,\n          texelNormal,\n          tangentLightDirection);\n\n      float specularFactor = PhongFactor(\n          texelNormal,\n          tangentViewDirection,\n          tangentLightDirection,\n          shininessFactor,\n          uLightData.x,\n          uLightData.z);\n\n      gl_FragColor = vec4(diffuseFactor + specularFactor);\n    }\n  ")),new A.hG(e0,e1,e2,e3,e4,new A.aj("    precision mediump float;\n    \n    attribute vec3 aPositionNormal;\n\n    uniform mat4 uPvTransform;\n    uniform mat4 uWlTransform;\n\n    varying vec4 vWorldPosition;\n    varying vec4 vWorldNormal;\n\n    void main(void)\n    {\n      vWorldPosition = uWlTransform * vec4(aPositionNormal, 1.0);\n      vWorldNormal = normalize(uWlTransform * vec4(aPositionNormal, 0.0));\n      \n      gl_Position = uPvTransform * vWorldPosition;\n    }\n  ","    precision mediump float;\n\n    uniform vec4 uViewPosition;\n    uniform vec4 uSinusoidData;\n    uniform vec2 uLimitData;\n\n    varying vec4 vWorldPosition;\n    varying vec4 vWorldNormal;\n\n    void main(void)\n    {\n      vec4 worldViewDirection = normalize(uViewPosition - vWorldPosition);\n\n      float facingFactor = dot(worldViewDirection, vWorldNormal);\n\n      if (facingFactor < uLimitData.x || facingFactor > uLimitData.y ) discard;\n\n      float sinusoidFactor = uSinusoidData.x * sin((uSinusoidData.z + facingFactor) * uSinusoidData.y ) + uSinusoidData.w;\n\n      gl_FragColor = vec4(sinusoidFactor);\n    }\n  "))),new A.ht(e5,e6,e7),new A.hQ(new A.h5()),new A.hF(new A.ct(e8),new A.h8(1.5079644737231006,1,0.1,100),e9,f0,f1,f2,f3,f5,f4,h4,h5,h6,h7),new A.bv())})
s($,"ov","lo",()=>$.lc())})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({WebGL:J.bx,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,webkitFileSystemDirectoryEntry:J.a,FileSystemDirectoryEntry:J.a,DirectoryReader:J.a,WebKitDirectoryReader:J.a,webkitFileSystemDirectoryReader:J.a,FileSystemDirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,webkitFileSystemEntry:J.a,FileSystemEntry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,webkitFileSystemFileEntry:J.a,FileSystemFileEntry:J.a,DOMFileSystem:J.a,WebKitFileSystem:J.a,webkitFileSystem:J.a,FileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,GeolocationPosition:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,GeolocationPositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL2RenderingContextBase:J.a,ArrayBuffer:A.e_,ArrayBufferView:A.cm,DataView:A.e0,Float32Array:A.cj,Float64Array:A.e1,Int16Array:A.e2,Int32Array:A.e3,Int8Array:A.e4,Uint16Array:A.cn,Uint32Array:A.e5,Uint8ClampedArray:A.co,CanvasPixelArray:A.co,Uint8Array:A.e6,HTMLBRElement:A.n,HTMLBaseElement:A.n,HTMLBodyElement:A.n,HTMLButtonElement:A.n,HTMLContentElement:A.n,HTMLDListElement:A.n,HTMLDataElement:A.n,HTMLDataListElement:A.n,HTMLDetailsElement:A.n,HTMLDialogElement:A.n,HTMLEmbedElement:A.n,HTMLFieldSetElement:A.n,HTMLHRElement:A.n,HTMLHeadElement:A.n,HTMLHeadingElement:A.n,HTMLHtmlElement:A.n,HTMLIFrameElement:A.n,HTMLInputElement:A.n,HTMLLIElement:A.n,HTMLLabelElement:A.n,HTMLLegendElement:A.n,HTMLLinkElement:A.n,HTMLMapElement:A.n,HTMLMenuElement:A.n,HTMLMetaElement:A.n,HTMLMeterElement:A.n,HTMLModElement:A.n,HTMLOListElement:A.n,HTMLObjectElement:A.n,HTMLOptGroupElement:A.n,HTMLOptionElement:A.n,HTMLOutputElement:A.n,HTMLParagraphElement:A.n,HTMLParamElement:A.n,HTMLPictureElement:A.n,HTMLPreElement:A.n,HTMLProgressElement:A.n,HTMLQuoteElement:A.n,HTMLScriptElement:A.n,HTMLShadowElement:A.n,HTMLSlotElement:A.n,HTMLSourceElement:A.n,HTMLSpanElement:A.n,HTMLStyleElement:A.n,HTMLTableCaptionElement:A.n,HTMLTableCellElement:A.n,HTMLTableDataCellElement:A.n,HTMLTableHeaderCellElement:A.n,HTMLTableColElement:A.n,HTMLTableElement:A.n,HTMLTableRowElement:A.n,HTMLTableSectionElement:A.n,HTMLTemplateElement:A.n,HTMLTextAreaElement:A.n,HTMLTimeElement:A.n,HTMLTitleElement:A.n,HTMLTrackElement:A.n,HTMLUListElement:A.n,HTMLUnknownElement:A.n,HTMLDirectoryElement:A.n,HTMLFontElement:A.n,HTMLFrameElement:A.n,HTMLFrameSetElement:A.n,HTMLMarqueeElement:A.n,HTMLElement:A.n,AccessibleNodeList:A.fP,HTMLAnchorElement:A.dg,HTMLAreaElement:A.di,BeforeUnloadEvent:A.b5,Blob:A.b7,HTMLCanvasElement:A.b8,CanvasRenderingContext2D:A.dr,CDATASection:A.ar,CharacterData:A.ar,Comment:A.ar,ProcessingInstruction:A.ar,Text:A.ar,CSSPerspective:A.fY,CSSCharsetRule:A.B,CSSConditionRule:A.B,CSSFontFaceRule:A.B,CSSGroupingRule:A.B,CSSImportRule:A.B,CSSKeyframeRule:A.B,MozCSSKeyframeRule:A.B,WebKitCSSKeyframeRule:A.B,CSSKeyframesRule:A.B,MozCSSKeyframesRule:A.B,WebKitCSSKeyframesRule:A.B,CSSMediaRule:A.B,CSSNamespaceRule:A.B,CSSPageRule:A.B,CSSRule:A.B,CSSStyleRule:A.B,CSSSupportsRule:A.B,CSSViewportRule:A.B,CSSStyleDeclaration:A.c_,MSStyleCSSProperties:A.c_,CSS2Properties:A.c_,CSSImageValue:A.ae,CSSKeywordValue:A.ae,CSSNumericValue:A.ae,CSSPositionValue:A.ae,CSSResourceValue:A.ae,CSSUnitValue:A.ae,CSSURLImageValue:A.ae,CSSStyleValue:A.ae,CSSMatrixComponent:A.ay,CSSRotation:A.ay,CSSScale:A.ay,CSSSkew:A.ay,CSSTranslation:A.ay,CSSTransformComponent:A.ay,CSSTransformValue:A.h_,CSSUnparsedValue:A.h0,DataTransferItemList:A.h1,DeviceOrientationEvent:A.ba,HTMLDivElement:A.bu,DOMException:A.h2,ClientRectList:A.c2,DOMRectList:A.c2,DOMRectReadOnly:A.c3,DOMStringList:A.dD,DOMTokenList:A.h3,MathMLElement:A.i,SVGAElement:A.i,SVGAnimateElement:A.i,SVGAnimateMotionElement:A.i,SVGAnimateTransformElement:A.i,SVGAnimationElement:A.i,SVGCircleElement:A.i,SVGClipPathElement:A.i,SVGDefsElement:A.i,SVGDescElement:A.i,SVGDiscardElement:A.i,SVGEllipseElement:A.i,SVGFEBlendElement:A.i,SVGFEColorMatrixElement:A.i,SVGFEComponentTransferElement:A.i,SVGFECompositeElement:A.i,SVGFEConvolveMatrixElement:A.i,SVGFEDiffuseLightingElement:A.i,SVGFEDisplacementMapElement:A.i,SVGFEDistantLightElement:A.i,SVGFEFloodElement:A.i,SVGFEFuncAElement:A.i,SVGFEFuncBElement:A.i,SVGFEFuncGElement:A.i,SVGFEFuncRElement:A.i,SVGFEGaussianBlurElement:A.i,SVGFEImageElement:A.i,SVGFEMergeElement:A.i,SVGFEMergeNodeElement:A.i,SVGFEMorphologyElement:A.i,SVGFEOffsetElement:A.i,SVGFEPointLightElement:A.i,SVGFESpecularLightingElement:A.i,SVGFESpotLightElement:A.i,SVGFETileElement:A.i,SVGFETurbulenceElement:A.i,SVGFilterElement:A.i,SVGForeignObjectElement:A.i,SVGGElement:A.i,SVGGeometryElement:A.i,SVGGraphicsElement:A.i,SVGImageElement:A.i,SVGLineElement:A.i,SVGLinearGradientElement:A.i,SVGMarkerElement:A.i,SVGMaskElement:A.i,SVGMetadataElement:A.i,SVGPathElement:A.i,SVGPatternElement:A.i,SVGPolygonElement:A.i,SVGPolylineElement:A.i,SVGRadialGradientElement:A.i,SVGRectElement:A.i,SVGScriptElement:A.i,SVGSetElement:A.i,SVGStopElement:A.i,SVGStyleElement:A.i,SVGElement:A.i,SVGSVGElement:A.i,SVGSwitchElement:A.i,SVGSymbolElement:A.i,SVGTSpanElement:A.i,SVGTextContentElement:A.i,SVGTextElement:A.i,SVGTextPathElement:A.i,SVGTextPositioningElement:A.i,SVGTitleElement:A.i,SVGUseElement:A.i,SVGViewElement:A.i,SVGGradientElement:A.i,SVGComponentTransferFunctionElement:A.i,SVGFEDropShadowElement:A.i,SVGMPathElement:A.i,Element:A.i,AbortPaymentEvent:A.f,AnimationEvent:A.f,AnimationPlaybackEvent:A.f,ApplicationCacheErrorEvent:A.f,BackgroundFetchClickEvent:A.f,BackgroundFetchEvent:A.f,BackgroundFetchFailEvent:A.f,BackgroundFetchedEvent:A.f,BeforeInstallPromptEvent:A.f,BlobEvent:A.f,CanMakePaymentEvent:A.f,ClipboardEvent:A.f,CloseEvent:A.f,CompositionEvent:A.f,CustomEvent:A.f,DeviceMotionEvent:A.f,ErrorEvent:A.f,ExtendableEvent:A.f,ExtendableMessageEvent:A.f,FetchEvent:A.f,FocusEvent:A.f,FontFaceSetLoadEvent:A.f,ForeignFetchEvent:A.f,GamepadEvent:A.f,HashChangeEvent:A.f,InstallEvent:A.f,KeyboardEvent:A.f,MediaEncryptedEvent:A.f,MediaKeyMessageEvent:A.f,MediaQueryListEvent:A.f,MediaStreamEvent:A.f,MediaStreamTrackEvent:A.f,MessageEvent:A.f,MIDIConnectionEvent:A.f,MIDIMessageEvent:A.f,MouseEvent:A.f,DragEvent:A.f,MutationEvent:A.f,NotificationEvent:A.f,PageTransitionEvent:A.f,PaymentRequestEvent:A.f,PaymentRequestUpdateEvent:A.f,PointerEvent:A.f,PopStateEvent:A.f,PresentationConnectionAvailableEvent:A.f,PresentationConnectionCloseEvent:A.f,ProgressEvent:A.f,PromiseRejectionEvent:A.f,PushEvent:A.f,RTCDataChannelEvent:A.f,RTCDTMFToneChangeEvent:A.f,RTCPeerConnectionIceEvent:A.f,RTCTrackEvent:A.f,SecurityPolicyViolationEvent:A.f,SensorErrorEvent:A.f,SpeechRecognitionError:A.f,SpeechRecognitionEvent:A.f,SpeechSynthesisEvent:A.f,StorageEvent:A.f,SyncEvent:A.f,TextEvent:A.f,TouchEvent:A.f,TrackEvent:A.f,TransitionEvent:A.f,WebKitTransitionEvent:A.f,UIEvent:A.f,VRDeviceEvent:A.f,VRDisplayEvent:A.f,VRSessionEvent:A.f,WheelEvent:A.f,MojoInterfaceRequestEvent:A.f,ResourceProgressEvent:A.f,USBConnectionEvent:A.f,IDBVersionChangeEvent:A.f,AudioProcessingEvent:A.f,OfflineAudioCompletionEvent:A.f,Event:A.f,InputEvent:A.f,SubmitEvent:A.f,AbsoluteOrientationSensor:A.b,Accelerometer:A.b,AccessibleNode:A.b,AmbientLightSensor:A.b,Animation:A.b,ApplicationCache:A.b,DOMApplicationCache:A.b,OfflineResourceList:A.b,BackgroundFetchRegistration:A.b,BatteryManager:A.b,BroadcastChannel:A.b,CanvasCaptureMediaStreamTrack:A.b,EventSource:A.b,FileReader:A.b,FontFaceSet:A.b,Gyroscope:A.b,XMLHttpRequest:A.b,XMLHttpRequestEventTarget:A.b,XMLHttpRequestUpload:A.b,LinearAccelerationSensor:A.b,Magnetometer:A.b,MediaDevices:A.b,MediaKeySession:A.b,MediaQueryList:A.b,MediaRecorder:A.b,MediaSource:A.b,MediaStream:A.b,MediaStreamTrack:A.b,MessagePort:A.b,MIDIAccess:A.b,MIDIInput:A.b,MIDIOutput:A.b,MIDIPort:A.b,NetworkInformation:A.b,Notification:A.b,OffscreenCanvas:A.b,OrientationSensor:A.b,PaymentRequest:A.b,Performance:A.b,PermissionStatus:A.b,PresentationAvailability:A.b,PresentationConnection:A.b,PresentationConnectionList:A.b,PresentationRequest:A.b,RelativeOrientationSensor:A.b,RemotePlayback:A.b,RTCDataChannel:A.b,DataChannel:A.b,RTCDTMFSender:A.b,RTCPeerConnection:A.b,webkitRTCPeerConnection:A.b,mozRTCPeerConnection:A.b,ScreenOrientation:A.b,Sensor:A.b,ServiceWorker:A.b,ServiceWorkerContainer:A.b,ServiceWorkerRegistration:A.b,SharedWorker:A.b,SpeechRecognition:A.b,webkitSpeechRecognition:A.b,SpeechSynthesis:A.b,SpeechSynthesisUtterance:A.b,VR:A.b,VRDevice:A.b,VRDisplay:A.b,VRSession:A.b,VisualViewport:A.b,WebSocket:A.b,Worker:A.b,WorkerPerformance:A.b,BluetoothDevice:A.b,BluetoothRemoteGATTCharacteristic:A.b,Clipboard:A.b,MojoInterfaceInterceptor:A.b,USB:A.b,IDBDatabase:A.b,IDBOpenDBRequest:A.b,IDBVersionChangeRequest:A.b,IDBRequest:A.b,IDBTransaction:A.b,AnalyserNode:A.b,RealtimeAnalyserNode:A.b,AudioBufferSourceNode:A.b,AudioDestinationNode:A.b,AudioNode:A.b,AudioScheduledSourceNode:A.b,AudioWorkletNode:A.b,BiquadFilterNode:A.b,ChannelMergerNode:A.b,AudioChannelMerger:A.b,ChannelSplitterNode:A.b,AudioChannelSplitter:A.b,ConstantSourceNode:A.b,ConvolverNode:A.b,DelayNode:A.b,DynamicsCompressorNode:A.b,GainNode:A.b,AudioGainNode:A.b,IIRFilterNode:A.b,MediaElementAudioSourceNode:A.b,MediaStreamAudioDestinationNode:A.b,MediaStreamAudioSourceNode:A.b,OscillatorNode:A.b,Oscillator:A.b,PannerNode:A.b,AudioPannerNode:A.b,webkitAudioPannerNode:A.b,ScriptProcessorNode:A.b,JavaScriptAudioNode:A.b,StereoPannerNode:A.b,WaveShaperNode:A.b,EventTarget:A.b,File:A.V,FileList:A.dF,FileWriter:A.dG,HTMLFormElement:A.dI,Gamepad:A.a0,History:A.h9,HTMLCollection:A.bd,HTMLFormControlsCollection:A.bd,HTMLOptionsCollection:A.bd,ImageData:A.c9,HTMLImageElement:A.aQ,IntersectionObserver:A.be,IntersectionObserverEntry:A.hb,Location:A.hj,HTMLAudioElement:A.bk,HTMLMediaElement:A.bk,MediaList:A.ho,MIDIInputMap:A.dX,MIDIOutputMap:A.dY,MimeType:A.a4,MimeTypeArray:A.dZ,Document:A.r,DocumentFragment:A.r,HTMLDocument:A.r,ShadowRoot:A.r,XMLDocument:A.r,Attr:A.r,DocumentType:A.r,Node:A.r,NodeList:A.cp,RadioNodeList:A.cp,Plugin:A.a5,PluginArray:A.ec,RTCStatsReport:A.eg,HTMLSelectElement:A.ej,SourceBuffer:A.W,SourceBufferList:A.em,SpeechGrammar:A.a8,SpeechGrammarList:A.en,SpeechRecognitionResult:A.a9,Storage:A.ep,CSSStyleSheet:A.S,StyleSheet:A.S,TextTrack:A.X,TextTrackCue:A.Q,VTTCue:A.Q,TextTrackCueList:A.es,TextTrackList:A.et,TimeRanges:A.hT,Touch:A.aa,TouchList:A.ex,TrackDefaultList:A.hU,URL:A.i_,HTMLVideoElement:A.eF,VideoTrackList:A.eG,Window:A.aX,DOMWindow:A.aX,DedicatedWorkerGlobalScope:A.au,ServiceWorkerGlobalScope:A.au,SharedWorkerGlobalScope:A.au,WorkerGlobalScope:A.au,CSSRuleList:A.eN,ClientRect:A.cI,DOMRect:A.cI,GamepadList:A.eY,NamedNodeMap:A.cS,MozNamedAttrMap:A.cS,SpeechRecognitionResultList:A.fi,StyleSheetList:A.fo,IDBKeyRange:A.ce,SVGLength:A.ag,SVGLengthList:A.dT,SVGNumber:A.ai,SVGNumberList:A.e8,SVGPointList:A.hv,SVGStringList:A.eq,SVGTransform:A.al,SVGTransformList:A.ez,AudioBuffer:A.fR,AudioParamMap:A.dl,AudioTrackList:A.dm,AudioContext:A.aO,webkitAudioContext:A.aO,BaseAudioContext:A.aO,OfflineAudioContext:A.e9,WebGLBuffer:A.dp,WebGLContextEvent:A.bt,WebGLFramebuffer:A.dK,WebGLProgram:A.ed,WebGLRenderbuffer:A.ef,WebGLRenderingContext:A.cv,WebGL2RenderingContext:A.bG,WebGLShader:A.ek,WebGLTexture:A.eu,WebGLUniformLocation:A.eA})
hunkHelpers.setOrUpdateLeafTags({WebGL:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,webkitFileSystemDirectoryEntry:true,FileSystemDirectoryEntry:true,DirectoryReader:true,WebKitDirectoryReader:true,webkitFileSystemDirectoryReader:true,FileSystemDirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,webkitFileSystemEntry:true,FileSystemEntry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,webkitFileSystemFileEntry:true,FileSystemFileEntry:true,DOMFileSystem:true,WebKitFileSystem:true,webkitFileSystem:true,FileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,GeolocationPosition:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,GeolocationPositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL2RenderingContextBase:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,BeforeUnloadEvent:true,Blob:false,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,DeviceOrientationEvent:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,MathMLElement:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CompositionEvent:true,CustomEvent:true,DeviceMotionEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FocusEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,KeyboardEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MouseEvent:true,DragEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PointerEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TextEvent:true,TouchEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,UIEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,WheelEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,Event:false,InputEvent:false,SubmitEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerRegistration:true,SharedWorker:true,SpeechRecognition:true,webkitSpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,IntersectionObserver:true,IntersectionObserverEntry:true,Location:true,HTMLAudioElement:true,HTMLMediaElement:false,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchList:true,TrackDefaultList:true,URL:true,HTMLVideoElement:true,VideoTrackList:true,Window:true,DOMWindow:true,DedicatedWorkerGlobalScope:true,ServiceWorkerGlobalScope:true,SharedWorkerGlobalScope:true,WorkerGlobalScope:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,IDBKeyRange:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLContextEvent:true,WebGLFramebuffer:true,WebGLProgram:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true})
A.bD.$nativeSuperclassTag="ArrayBufferView"
A.cT.$nativeSuperclassTag="ArrayBufferView"
A.cU.$nativeSuperclassTag="ArrayBufferView"
A.ck.$nativeSuperclassTag="ArrayBufferView"
A.cV.$nativeSuperclassTag="ArrayBufferView"
A.cW.$nativeSuperclassTag="ArrayBufferView"
A.cl.$nativeSuperclassTag="ArrayBufferView"
A.cY.$nativeSuperclassTag="EventTarget"
A.cZ.$nativeSuperclassTag="EventTarget"
A.d0.$nativeSuperclassTag="EventTarget"
A.d1.$nativeSuperclassTag="EventTarget"})()
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
var s=A.nO
if(typeof dartMainRunner==="function")dartMainRunner(s,[])
else s([])})})()