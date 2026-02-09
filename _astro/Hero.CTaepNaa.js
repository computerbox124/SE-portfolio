import{r as d}from"./index.DiEladB3.js";var x={exports:{}},c={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m;function w(){if(m)return c;m=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(n,s,a){var l=null;if(a!==void 0&&(l=""+a),s.key!==void 0&&(l=""+s.key),"key"in s){a={};for(var o in s)o!=="key"&&(a[o]=s[o])}else a=s;return s=a.ref,{$$typeof:r,type:n,key:l,ref:s!==void 0?s:null,props:a}}return c.Fragment=t,c.jsx=i,c.jsxs=i,c}var u;function k(){return u||(u=1,x.exports=w()),x.exports}var e=k();const h={name:"Huseyn Hajiyev",tagline:"The best way to predict the future is to create it"},b=[{title:"WIPO Gold Medal",description:"World Intellectual Property Organization award for educational technology innovation",icon:"award"},{title:"ICPC 2020-2021 Azerbaijani Regional round champion",description:"Azerbaijani Champion in ICPC Quarter Finals",icon:"trophy"},{title:"IOI 2019",description:"International Olympiad in Informatics participant",icon:"globe"},{title:"EJOI 2017",description:"European Olympiad in Informatics participant",icon:"globe"},{title:"Gold Medalist of Azerbaijani Republican Olympiad in Informatics",description:"Azerbaijani Republican CS Olympiad Gold Medalist",icon:"medal"}];/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=(...r)=>r.filter((t,i,n)=>!!t&&t.trim()!==""&&n.indexOf(t)===i).join(" ").trim();/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,i,n)=>n?n.toUpperCase():i.toLowerCase());/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=r=>{const t=C(r);return t.charAt(0).toUpperCase()+t.slice(1)};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var R={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=r=>{for(const t in r)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=d.forwardRef(({color:r="currentColor",size:t=24,strokeWidth:i=2,absoluteStrokeWidth:n,className:s="",children:a,iconNode:l,...o},g)=>d.createElement("svg",{ref:g,...R,width:t,height:t,stroke:r,strokeWidth:n?Number(i)*24/Number(t):i,className:f("lucide",s),...!a&&!A(o)&&{"aria-hidden":"true"},...o},[...l.map(([j,v])=>d.createElement(j,v)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=(r,t)=>{const i=d.forwardRef(({className:n,...s},a)=>d.createElement(E,{ref:a,iconNode:t,className:f(`lucide-${N(y(r))}`,`lucide-${r}`,n),...s}));return i.displayName=y(r),i};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],M=p("award",_);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I=[["path",{d:"m16 18 6-6-6-6",key:"eg8j8"}],["path",{d:"m8 6-6 6 6 6",key:"ppft3o"}]],z=p("code",I);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],L=p("globe",P);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O=[["path",{d:"M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15",key:"143lza"}],["path",{d:"M11 12 5.12 2.2",key:"qhuxz6"}],["path",{d:"m13 12 5.88-9.8",key:"hbye0f"}],["path",{d:"M8 7h8",key:"i86dvs"}],["circle",{cx:"12",cy:"17",r:"5",key:"qbz8iq"}],["path",{d:"M12 18v-2h-.5",key:"fawc4q"}]],$=p("medal",O),q={globe:e.jsx(L,{size:20}),trophy:e.jsx(M,{size:20}),medal:e.jsx(z,{size:20}),award:e.jsx($,{size:20})};function G(){return e.jsx("section",{className:"min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16",children:e.jsxs("div",{className:"max-w-4xl mx-auto text-center",children:[e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"space-y-6",children:[e.jsx("div",{className:"flex justify-center",children:e.jsx("img",{src:"/images/profile.jpg",alt:"Profile",className:"w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover border-4 border-gray-100 shadow-lg"})}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-gray-500 text-lg tracking-wide",children:"Software Engineer"}),e.jsx("h1",{className:"text-5xl sm:text-6xl lg:text-7xl font-light text-gray-900 tracking-tight",children:h.name}),e.jsx("p",{className:"text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed",children:h.tagline})]})]}),e.jsx("div",{className:"flex flex-wrap justify-center gap-4 pt-4",children:b.map((r,t)=>e.jsxs("div",{className:"flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full text-gray-700",children:[e.jsx("span",{className:"text-gray-400",children:q[r.icon]}),e.jsx("span",{className:"text-sm font-medium",children:r.title})]},t))}),e.jsxs("div",{className:"flex justify-center gap-4 pt-8",children:[e.jsx("a",{href:"#projects",className:"px-8 py-3 bg-gray-900 text-white rounded-full text-sm font-medium hover:bg-gray-800 transition-colors",children:"View Projects"}),e.jsx("a",{href:"#contact",className:"px-8 py-3 border border-gray-300 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors",children:"Get in Touch"})]})]}),e.jsx("div",{className:"absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce",children:e.jsx("svg",{className:"w-6 h-6 text-gray-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M19 14l-7 7m0 0l-7-7m7 7V3"})})})]})})}export{G as default};
