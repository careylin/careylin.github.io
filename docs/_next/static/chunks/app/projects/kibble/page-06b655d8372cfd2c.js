(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[429],{1270:(e,t,n)=>{Promise.resolve().then(n.bind(n,5939))},8672:(e,t,n)=>{"use strict";n.d(t,{ThemeProvider:()=>i,w:()=>s});var r=n(5155),a=n(2115);let o=(0,a.createContext)(void 0);function i(e){let{children:t}=e,[n,i]=(0,a.useState)("light");return(0,a.useEffect)(()=>{document.body.setAttribute("data-theme",n)},[n]),(0,r.jsx)(o.Provider,{value:{theme:n,handleChange:e=>i(e.target.checked?"dark":"light")},children:t})}function s(){let e=(0,a.useContext)(o);if(void 0===e)throw Error("useThemeContext must be used within a ThemeProvider");return e}},6078:(e,t,n)=>{"use strict";n.d(t,{l:()=>s});var r=n(5155),a=n(8672),o=n(8334),i=n.n(o);let s=()=>{let{theme:e,handleChange:t}=(0,a.w)();return(0,r.jsxs)("div",{className:i().containerSwitch,children:[(0,r.jsx)("input",{type:"checkbox",className:i().modeToggle,id:"modeToggle",onChange:t,checked:"dark"===e}),(0,r.jsx)("label",{className:i().labelToggle,htmlFor:"modeToggle"})]})}},8787:(e,t,n)=>{"use strict";n.d(t,{A:()=>m});var r=n(5155),a=n(2115),o=n(3036),i=n.n(o),s=n(6078);let l=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),c=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((e,t,n)=>!!e&&""!==e.trim()&&n.indexOf(e)===t).join(" ").trim()};var _={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let d=(0,a.forwardRef)((e,t)=>{let{color:n="currentColor",size:r=24,strokeWidth:o=2,absoluteStrokeWidth:i,className:s="",children:l,iconNode:d,...p}=e;return(0,a.createElement)("svg",{ref:t,..._,width:r,height:r,stroke:n,strokeWidth:i?24*Number(o)/Number(r):o,className:c("lucide",s),...p},[...d.map(e=>{let[t,n]=e;return(0,a.createElement)(t,n)}),...Array.isArray(l)?l:[l]])}),p=((e,t)=>{let n=(0,a.forwardRef)((n,r)=>{let{className:o,...i}=n;return(0,a.createElement)(d,{ref:r,iconNode:t,className:c("lucide-".concat(l(e)),o),...i})});return n.displayName="".concat(e),n})("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);var u=n(9469),g=n.n(u);let h=(0,a.forwardRef)((e,t)=>{let{icon:n,variant:a="default",size:o="md",className:i,...s}=e;return(0,r.jsx)("button",{ref:t,className:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter(Boolean).join(" ")}(g().iconButton,g()[a],g()[o],i),...s,children:(0,r.jsx)(n,{className:g().icon})})});function m(e){let{children:t}=e;return(0,r.jsxs)("div",{className:i().grid,children:[(0,r.jsx)(s.l,{}),(0,r.jsx)("div",{className:i().title,children:(0,r.jsx)(h,{icon:p,variant:"default",size:"md",onClick:()=>window.history.back()})}),(0,r.jsx)("div",{className:i().content,children:t}),(0,r.jsx)("span",{className:i().topSpacer}),(0,r.jsx)("div",{className:i().startCarpet}),(0,r.jsx)("div",{className:i().endCarpet}),(0,r.jsx)("span",{className:i().endSpacer})]})}h.displayName="IconButton"},5939:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>l});var r=n(5155);n(2115);var a=n(8787),o=n(1030);function i(e){let t={h1:"h1",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{children:"Kibble Design System"}),"\n",(0,r.jsx)(t.p,{children:"Rover's first comprehensive design system, unifying the pet-care platform's visual language."}),"\n",(0,r.jsx)(t.p,{children:"Kibble established a foundation for consistent, accessible, and scalable design across Rover's digital products."}),"\n",(0,r.jsx)(t.p,{children:"Key achievements:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Created core component library"}),"\n",(0,r.jsx)(t.li,{children:"Established design tokens and guidelines"}),"\n",(0,r.jsx)(t.li,{children:"Implemented accessibility standards"}),"\n",(0,r.jsx)(t.li,{children:"Built documentation portal"}),"\n",(0,r.jsx)(t.li,{children:"Reduced design debt by 60%"}),"\n"]})]})}function s(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}function l(){return(0,r.jsx)(a.A,{children:(0,r.jsx)(s,{})})}},9469:e=>{e.exports={iconButton:"IconButton_iconButton__1XD2h",default:"IconButton_default__pns9A",ghost:"IconButton_ghost__FdGSD",sm:"IconButton_sm__LUpJk",icon:"IconButton_icon__oYsXI",md:"IconButton_md__O7fHB",lg:"IconButton_lg__zohkT"}},8334:e=>{e.exports={app:"page_app__uoD_J",grid:"page_grid__f5Kdy",primary:"page_primary__V8M9Y",secondary:"page_secondary__lm_PT",projectRow:"page_projectRow__cMstk",h400:"page_h400__w0eVi",h300:"page_h300__cTgUK",title:"page_title__3jonF",links:"page_links__qE4Ea",linkList:"page_linkList__37FSu",companies:"page_companies__0DbcJ",companiesList:"page_companiesList__nEmC7","slide-up":"page_slide-up__d3QSs",location:"page_location__LXEDd",conditions:"page_conditions__Vfnxi",rotate:"page_rotate__durgN",slide:"page_slide__vIZHX",topSpacer:"page_topSpacer__Rne97",endSpacer:"page_endSpacer__hFaXB",startCarpet:"page_startCarpet__cWYqA",endCarpet:"page_endCarpet__knlZe",date:"page_date__i6_IY",containerSwitch:"page_containerSwitch__hHCuk",modeToggle:"page_modeToggle__0hwe2",labelToggle:"page_labelToggle__Smv2g"}},3036:e=>{e.exports={container:"ProjectTemplate_container___QnW9",grid:"ProjectTemplate_grid__racta",title:"ProjectTemplate_title__aE_Gx",content:"ProjectTemplate_content__9XnNv",startCarpet:"ProjectTemplate_startCarpet__jIbBH",endCarpet:"ProjectTemplate_endCarpet__b8jki",topSpacer:"ProjectTemplate_topSpacer__YEJeo",endSpacer:"ProjectTemplate_endSpacer__itFC_"}},1030:(e,t,n)=>{"use strict";n.d(t,{R:()=>o});var r=n(2115);let a=r.createContext({});function o(e){let t=r.useContext(a);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}}},e=>{var t=t=>e(e.s=t);e.O(0,[839,441,517,358],()=>t(1270)),_N_E=e.O()}]);