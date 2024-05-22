import{a as Oe,b as re,_ as J,e as bt,$ as $t}from"./index-DxDs9eJJ.js";import{r as h,q as Et,$ as Ot}from"./index-DS6qm14V.js";import{$ as xe,b as Pt}from"./index-BFn4IUUH.js";import{$ as we,a as Fe}from"./index-MDj1YPAE.js";function At(e,t=globalThis?.document){const n=we(e);h.useEffect(()=>{const o=i=>{i.key==="Escape"&&n(i)};return t.addEventListener("keydown",o),()=>t.removeEventListener("keydown",o)},[n,t])}const be="dismissableLayer.update",Ct="dismissableLayer.pointerDownOutside",Rt="dismissableLayer.focusOutside";let Me;const Dt=h.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),qn=h.forwardRef((e,t)=>{var n;const{disableOutsidePointerEvents:o=!1,onEscapeKeyDown:i,onPointerDownOutside:r,onFocusOutside:s,onInteractOutside:a,onDismiss:c,...l}=e,u=h.useContext(Dt),[f,m]=h.useState(null),d=(n=f?.ownerDocument)!==null&&n!==void 0?n:globalThis?.document,[,p]=h.useState({}),v=Oe(t,E=>m(E)),g=Array.from(u.layers),[w]=[...u.layersWithOutsidePointerEventsDisabled].slice(-1),b=g.indexOf(w),x=f?g.indexOf(f):-1,y=u.layersWithOutsidePointerEventsDisabled.size>0,$=x>=b,O=St(E=>{const S=E.target,L=[...u.branches].some(T=>T.contains(S));!$||L||(r?.(E),a?.(E),E.defaultPrevented||c?.())},d),A=Tt(E=>{const S=E.target;[...u.branches].some(T=>T.contains(S))||(s?.(E),a?.(E),E.defaultPrevented||c?.())},d);return At(E=>{x===u.layers.size-1&&(i?.(E),!E.defaultPrevented&&c&&(E.preventDefault(),c()))},d),h.useEffect(()=>{if(f)return o&&(u.layersWithOutsidePointerEventsDisabled.size===0&&(Me=d.body.style.pointerEvents,d.body.style.pointerEvents="none"),u.layersWithOutsidePointerEventsDisabled.add(f)),u.layers.add(f),We(),()=>{o&&u.layersWithOutsidePointerEventsDisabled.size===1&&(d.body.style.pointerEvents=Me)}},[f,d,o,u]),h.useEffect(()=>()=>{f&&(u.layers.delete(f),u.layersWithOutsidePointerEventsDisabled.delete(f),We())},[f,u]),h.useEffect(()=>{const E=()=>p({});return document.addEventListener(be,E),()=>document.removeEventListener(be,E)},[]),h.createElement(re.div,J({},l,{ref:v,style:{pointerEvents:y?$?"auto":"none":void 0,...e.style},onFocusCapture:xe(e.onFocusCapture,A.onFocusCapture),onBlurCapture:xe(e.onBlurCapture,A.onBlurCapture),onPointerDownCapture:xe(e.onPointerDownCapture,O.onPointerDownCapture)}))});function St(e,t=globalThis?.document){const n=we(e),o=h.useRef(!1),i=h.useRef(()=>{});return h.useEffect(()=>{const r=a=>{if(a.target&&!o.current){let l=function(){Ue(Ct,n,c,{discrete:!0})};const c={originalEvent:a};a.pointerType==="touch"?(t.removeEventListener("click",i.current),i.current=l,t.addEventListener("click",i.current,{once:!0})):l()}else t.removeEventListener("click",i.current);o.current=!1},s=window.setTimeout(()=>{t.addEventListener("pointerdown",r)},0);return()=>{window.clearTimeout(s),t.removeEventListener("pointerdown",r),t.removeEventListener("click",i.current)}},[t,n]),{onPointerDownCapture:()=>o.current=!0}}function Tt(e,t=globalThis?.document){const n=we(e),o=h.useRef(!1);return h.useEffect(()=>{const i=r=>{r.target&&!o.current&&Ue(Rt,n,{originalEvent:r},{discrete:!1})};return t.addEventListener("focusin",i),()=>t.removeEventListener("focusin",i)},[t,n]),{onFocusCapture:()=>o.current=!0,onBlurCapture:()=>o.current=!1}}function We(){const e=new CustomEvent(be);document.dispatchEvent(e)}function Ue(e,t,n,{discrete:o}){const i=n.originalEvent.target,r=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&i.addEventListener(e,t,{once:!0}),o?bt(i,r):i.dispatchEvent(r)}const Lt=["top","right","bottom","left"],B=Math.min,k=Math.max,pe=Math.round,de=Math.floor,j=e=>({x:e,y:e}),_t={left:"right",right:"left",bottom:"top",top:"bottom"},kt={start:"end",end:"start"};function $e(e,t,n){return k(e,B(t,n))}function z(e,t){return typeof e=="function"?e(t):e}function V(e){return e.split("-")[0]}function Q(e){return e.split("-")[1]}function Pe(e){return e==="x"?"y":"x"}function Ae(e){return e==="y"?"height":"width"}function ee(e){return["top","bottom"].includes(V(e))?"y":"x"}function Ce(e){return Pe(ee(e))}function Ft(e,t,n){n===void 0&&(n=!1);const o=Q(e),i=Ce(e),r=Ae(i);let s=i==="x"?o===(n?"end":"start")?"right":"left":o==="start"?"bottom":"top";return t.reference[r]>t.floating[r]&&(s=me(s)),[s,me(s)]}function Mt(e){const t=me(e);return[Ee(e),t,Ee(t)]}function Ee(e){return e.replace(/start|end/g,t=>kt[t])}function Wt(e,t,n){const o=["left","right"],i=["right","left"],r=["top","bottom"],s=["bottom","top"];switch(e){case"top":case"bottom":return n?t?i:o:t?o:i;case"left":case"right":return t?r:s;default:return[]}}function Bt(e,t,n,o){const i=Q(e);let r=Wt(V(e),n==="start",o);return i&&(r=r.map(s=>s+"-"+i),t&&(r=r.concat(r.map(Ee)))),r}function me(e){return e.replace(/left|right|bottom|top/g,t=>_t[t])}function Ht(e){return{top:0,right:0,bottom:0,left:0,...e}}function Ke(e){return typeof e!="number"?Ht(e):{top:e,right:e,bottom:e,left:e}}function he(e){const{x:t,y:n,width:o,height:i}=e;return{width:o,height:i,top:n,left:t,right:t+o,bottom:n+i,x:t,y:n}}function Be(e,t,n){let{reference:o,floating:i}=e;const r=ee(t),s=Ce(t),a=Ae(s),c=V(t),l=r==="y",u=o.x+o.width/2-i.width/2,f=o.y+o.height/2-i.height/2,m=o[a]/2-i[a]/2;let d;switch(c){case"top":d={x:u,y:o.y-i.height};break;case"bottom":d={x:u,y:o.y+o.height};break;case"right":d={x:o.x+o.width,y:f};break;case"left":d={x:o.x-i.width,y:f};break;default:d={x:o.x,y:o.y}}switch(Q(t)){case"start":d[s]-=m*(n&&l?-1:1);break;case"end":d[s]+=m*(n&&l?-1:1);break}return d}const Nt=async(e,t,n)=>{const{placement:o="bottom",strategy:i="absolute",middleware:r=[],platform:s}=n,a=r.filter(Boolean),c=await(s.isRTL==null?void 0:s.isRTL(t));let l=await s.getElementRects({reference:e,floating:t,strategy:i}),{x:u,y:f}=Be(l,o,c),m=o,d={},p=0;for(let v=0;v<a.length;v++){const{name:g,fn:w}=a[v],{x:b,y:x,data:y,reset:$}=await w({x:u,y:f,initialPlacement:o,placement:m,strategy:i,middlewareData:d,rects:l,platform:s,elements:{reference:e,floating:t}});u=b??u,f=x??f,d={...d,[g]:{...d[g],...y}},$&&p<=50&&(p++,typeof $=="object"&&($.placement&&(m=$.placement),$.rects&&(l=$.rects===!0?await s.getElementRects({reference:e,floating:t,strategy:i}):$.rects),{x:u,y:f}=Be(l,m,c)),v=-1)}return{x:u,y:f,placement:m,strategy:i,middlewareData:d}};async function oe(e,t){var n;t===void 0&&(t={});const{x:o,y:i,platform:r,rects:s,elements:a,strategy:c}=e,{boundary:l="clippingAncestors",rootBoundary:u="viewport",elementContext:f="floating",altBoundary:m=!1,padding:d=0}=z(t,e),p=Ke(d),g=a[m?f==="floating"?"reference":"floating":f],w=he(await r.getClippingRect({element:(n=await(r.isElement==null?void 0:r.isElement(g)))==null||n?g:g.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(a.floating)),boundary:l,rootBoundary:u,strategy:c})),b=f==="floating"?{x:o,y:i,width:s.floating.width,height:s.floating.height}:s.reference,x=await(r.getOffsetParent==null?void 0:r.getOffsetParent(a.floating)),y=await(r.isElement==null?void 0:r.isElement(x))?await(r.getScale==null?void 0:r.getScale(x))||{x:1,y:1}:{x:1,y:1},$=he(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:b,offsetParent:x,strategy:c}):b);return{top:(w.top-$.top+p.top)/y.y,bottom:($.bottom-w.bottom+p.bottom)/y.y,left:(w.left-$.left+p.left)/y.x,right:($.right-w.right+p.right)/y.x}}const It=e=>({name:"arrow",options:e,async fn(t){const{x:n,y:o,placement:i,rects:r,platform:s,elements:a,middlewareData:c}=t,{element:l,padding:u=0}=z(e,t)||{};if(l==null)return{};const f=Ke(u),m={x:n,y:o},d=Ce(i),p=Ae(d),v=await s.getDimensions(l),g=d==="y",w=g?"top":"left",b=g?"bottom":"right",x=g?"clientHeight":"clientWidth",y=r.reference[p]+r.reference[d]-m[d]-r.floating[p],$=m[d]-r.reference[d],O=await(s.getOffsetParent==null?void 0:s.getOffsetParent(l));let A=O?O[x]:0;(!A||!await(s.isElement==null?void 0:s.isElement(O)))&&(A=a.floating[x]||r.floating[p]);const E=y/2-$/2,S=A/2-v[p]/2-1,L=B(f[w],S),T=B(f[b],S),R=L,M=A-v[p]-T,C=A/2-v[p]/2+E,D=$e(R,C,M),_=!c.arrow&&Q(i)!=null&&C!==D&&r.reference[p]/2-(C<R?L:T)-v[p]/2<0,P=_?C<R?C-R:C-M:0;return{[d]:m[d]+P,data:{[d]:D,centerOffset:C-D-P,..._&&{alignmentOffset:P}},reset:_}}}),zt=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var n,o;const{placement:i,middlewareData:r,rects:s,initialPlacement:a,platform:c,elements:l}=t,{mainAxis:u=!0,crossAxis:f=!0,fallbackPlacements:m,fallbackStrategy:d="bestFit",fallbackAxisSideDirection:p="none",flipAlignment:v=!0,...g}=z(e,t);if((n=r.arrow)!=null&&n.alignmentOffset)return{};const w=V(i),b=V(a)===a,x=await(c.isRTL==null?void 0:c.isRTL(l.floating)),y=m||(b||!v?[me(a)]:Mt(a));!m&&p!=="none"&&y.push(...Bt(a,v,p,x));const $=[a,...y],O=await oe(t,g),A=[];let E=((o=r.flip)==null?void 0:o.overflows)||[];if(u&&A.push(O[w]),f){const R=Ft(i,s,x);A.push(O[R[0]],O[R[1]])}if(E=[...E,{placement:i,overflows:A}],!A.every(R=>R<=0)){var S,L;const R=(((S=r.flip)==null?void 0:S.index)||0)+1,M=$[R];if(M)return{data:{index:R,overflows:E},reset:{placement:M}};let C=(L=E.filter(D=>D.overflows[0]<=0).sort((D,_)=>D.overflows[1]-_.overflows[1])[0])==null?void 0:L.placement;if(!C)switch(d){case"bestFit":{var T;const D=(T=E.map(_=>[_.placement,_.overflows.filter(P=>P>0).reduce((P,Y)=>P+Y,0)]).sort((_,P)=>_[1]-P[1])[0])==null?void 0:T[0];D&&(C=D);break}case"initialPlacement":C=a;break}if(i!==C)return{reset:{placement:C}}}return{}}}};function He(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function Ne(e){return Lt.some(t=>e[t]>=0)}const Vt=function(e){return e===void 0&&(e={}),{name:"hide",options:e,async fn(t){const{rects:n}=t,{strategy:o="referenceHidden",...i}=z(e,t);switch(o){case"referenceHidden":{const r=await oe(t,{...i,elementContext:"reference"}),s=He(r,n.reference);return{data:{referenceHiddenOffsets:s,referenceHidden:Ne(s)}}}case"escaped":{const r=await oe(t,{...i,altBoundary:!0}),s=He(r,n.floating);return{data:{escapedOffsets:s,escaped:Ne(s)}}}default:return{}}}}};async function Xt(e,t){const{placement:n,platform:o,elements:i}=e,r=await(o.isRTL==null?void 0:o.isRTL(i.floating)),s=V(n),a=Q(n),c=ee(n)==="y",l=["left","top"].includes(s)?-1:1,u=r&&c?-1:1,f=z(t,e);let{mainAxis:m,crossAxis:d,alignmentAxis:p}=typeof f=="number"?{mainAxis:f,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...f};return a&&typeof p=="number"&&(d=a==="end"?p*-1:p),c?{x:d*u,y:m*l}:{x:m*l,y:d*u}}const Yt=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var n,o;const{x:i,y:r,placement:s,middlewareData:a}=t,c=await Xt(t,e);return s===((n=a.offset)==null?void 0:n.placement)&&(o=a.arrow)!=null&&o.alignmentOffset?{}:{x:i+c.x,y:r+c.y,data:{...c,placement:s}}}}},jt=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:n,y:o,placement:i}=t,{mainAxis:r=!0,crossAxis:s=!1,limiter:a={fn:g=>{let{x:w,y:b}=g;return{x:w,y:b}}},...c}=z(e,t),l={x:n,y:o},u=await oe(t,c),f=ee(V(i)),m=Pe(f);let d=l[m],p=l[f];if(r){const g=m==="y"?"top":"left",w=m==="y"?"bottom":"right",b=d+u[g],x=d-u[w];d=$e(b,d,x)}if(s){const g=f==="y"?"top":"left",w=f==="y"?"bottom":"right",b=p+u[g],x=p-u[w];p=$e(b,p,x)}const v=a.fn({...t,[m]:d,[f]:p});return{...v,data:{x:v.x-n,y:v.y-o}}}}},Ut=function(e){return e===void 0&&(e={}),{options:e,fn(t){const{x:n,y:o,placement:i,rects:r,middlewareData:s}=t,{offset:a=0,mainAxis:c=!0,crossAxis:l=!0}=z(e,t),u={x:n,y:o},f=ee(i),m=Pe(f);let d=u[m],p=u[f];const v=z(a,t),g=typeof v=="number"?{mainAxis:v,crossAxis:0}:{mainAxis:0,crossAxis:0,...v};if(c){const x=m==="y"?"height":"width",y=r.reference[m]-r.floating[x]+g.mainAxis,$=r.reference[m]+r.reference[x]-g.mainAxis;d<y?d=y:d>$&&(d=$)}if(l){var w,b;const x=m==="y"?"width":"height",y=["top","left"].includes(V(i)),$=r.reference[f]-r.floating[x]+(y&&((w=s.offset)==null?void 0:w[f])||0)+(y?0:g.crossAxis),O=r.reference[f]+r.reference[x]+(y?0:((b=s.offset)==null?void 0:b[f])||0)-(y?g.crossAxis:0);p<$?p=$:p>O&&(p=O)}return{[m]:d,[f]:p}}}},Kt=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){const{placement:n,rects:o,platform:i,elements:r}=t,{apply:s=()=>{},...a}=z(e,t),c=await oe(t,a),l=V(n),u=Q(n),f=ee(n)==="y",{width:m,height:d}=o.floating;let p,v;l==="top"||l==="bottom"?(p=l,v=u===(await(i.isRTL==null?void 0:i.isRTL(r.floating))?"start":"end")?"left":"right"):(v=l,p=u==="end"?"top":"bottom");const g=d-c.top-c.bottom,w=m-c.left-c.right,b=B(d-c[p],g),x=B(m-c[v],w),y=!t.middlewareData.shift;let $=b,O=x;if(f?O=u||y?B(x,w):w:$=u||y?B(b,g):g,y&&!u){const E=k(c.left,0),S=k(c.right,0),L=k(c.top,0),T=k(c.bottom,0);f?O=m-2*(E!==0||S!==0?E+S:k(c.left,c.right)):$=d-2*(L!==0||T!==0?L+T:k(c.top,c.bottom))}await s({...t,availableWidth:O,availableHeight:$});const A=await i.getDimensions(r.floating);return m!==A.width||d!==A.height?{reset:{rects:!0}}:{}}}};function te(e){return qe(e)?(e.nodeName||"").toLowerCase():"#document"}function F(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function X(e){var t;return(t=(qe(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function qe(e){return e instanceof Node||e instanceof F(e).Node}function H(e){return e instanceof Element||e instanceof F(e).Element}function N(e){return e instanceof HTMLElement||e instanceof F(e).HTMLElement}function Ie(e){return typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof F(e).ShadowRoot}function se(e){const{overflow:t,overflowX:n,overflowY:o,display:i}=W(e);return/auto|scroll|overlay|hidden|clip/.test(t+o+n)&&!["inline","contents"].includes(i)}function qt(e){return["table","td","th"].includes(te(e))}function Re(e){const t=De(),n=W(e);return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!t&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!t&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(o=>(n.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(n.contain||"").includes(o))}function Zt(e){let t=U(e);for(;N(t)&&!G(t);){if(Re(t))return t;t=U(t)}return null}function De(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function G(e){return["html","body","#document"].includes(te(e))}function W(e){return F(e).getComputedStyle(e)}function ve(e){return H(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function U(e){if(te(e)==="html")return e;const t=e.assignedSlot||e.parentNode||Ie(e)&&e.host||X(e);return Ie(t)?t.host:t}function Ze(e){const t=U(e);return G(t)?e.ownerDocument?e.ownerDocument.body:e.body:N(t)&&se(t)?t:Ze(t)}function ie(e,t,n){var o;t===void 0&&(t=[]),n===void 0&&(n=!0);const i=Ze(e),r=i===((o=e.ownerDocument)==null?void 0:o.body),s=F(i);return r?t.concat(s,s.visualViewport||[],se(i)?i:[],s.frameElement&&n?ie(s.frameElement):[]):t.concat(i,ie(i,[],n))}function Ge(e){const t=W(e);let n=parseFloat(t.width)||0,o=parseFloat(t.height)||0;const i=N(e),r=i?e.offsetWidth:n,s=i?e.offsetHeight:o,a=pe(n)!==r||pe(o)!==s;return a&&(n=r,o=s),{width:n,height:o,$:a}}function Se(e){return H(e)?e:e.contextElement}function Z(e){const t=Se(e);if(!N(t))return j(1);const n=t.getBoundingClientRect(),{width:o,height:i,$:r}=Ge(t);let s=(r?pe(n.width):n.width)/o,a=(r?pe(n.height):n.height)/i;return(!s||!Number.isFinite(s))&&(s=1),(!a||!Number.isFinite(a))&&(a=1),{x:s,y:a}}const Gt=j(0);function Je(e){const t=F(e);return!De()||!t.visualViewport?Gt:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Jt(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==F(e)?!1:t}function K(e,t,n,o){t===void 0&&(t=!1),n===void 0&&(n=!1);const i=e.getBoundingClientRect(),r=Se(e);let s=j(1);t&&(o?H(o)&&(s=Z(o)):s=Z(e));const a=Jt(r,n,o)?Je(r):j(0);let c=(i.left+a.x)/s.x,l=(i.top+a.y)/s.y,u=i.width/s.x,f=i.height/s.y;if(r){const m=F(r),d=o&&H(o)?F(o):o;let p=m,v=p.frameElement;for(;v&&o&&d!==p;){const g=Z(v),w=v.getBoundingClientRect(),b=W(v),x=w.left+(v.clientLeft+parseFloat(b.paddingLeft))*g.x,y=w.top+(v.clientTop+parseFloat(b.paddingTop))*g.y;c*=g.x,l*=g.y,u*=g.x,f*=g.y,c+=x,l+=y,p=F(v),v=p.frameElement}}return he({width:u,height:f,x:c,y:l})}const Qt=[":popover-open",":modal"];function Te(e){return Qt.some(t=>{try{return e.matches(t)}catch{return!1}})}function en(e){let{elements:t,rect:n,offsetParent:o,strategy:i}=e;const r=i==="fixed",s=X(o),a=t?Te(t.floating):!1;if(o===s||a&&r)return n;let c={scrollLeft:0,scrollTop:0},l=j(1);const u=j(0),f=N(o);if((f||!f&&!r)&&((te(o)!=="body"||se(s))&&(c=ve(o)),N(o))){const m=K(o);l=Z(o),u.x=m.x+o.clientLeft,u.y=m.y+o.clientTop}return{width:n.width*l.x,height:n.height*l.y,x:n.x*l.x-c.scrollLeft*l.x+u.x,y:n.y*l.y-c.scrollTop*l.y+u.y}}function tn(e){return Array.from(e.getClientRects())}function Qe(e){return K(X(e)).left+ve(e).scrollLeft}function nn(e){const t=X(e),n=ve(e),o=e.ownerDocument.body,i=k(t.scrollWidth,t.clientWidth,o.scrollWidth,o.clientWidth),r=k(t.scrollHeight,t.clientHeight,o.scrollHeight,o.clientHeight);let s=-n.scrollLeft+Qe(e);const a=-n.scrollTop;return W(o).direction==="rtl"&&(s+=k(t.clientWidth,o.clientWidth)-i),{width:i,height:r,x:s,y:a}}function on(e,t){const n=F(e),o=X(e),i=n.visualViewport;let r=o.clientWidth,s=o.clientHeight,a=0,c=0;if(i){r=i.width,s=i.height;const l=De();(!l||l&&t==="fixed")&&(a=i.offsetLeft,c=i.offsetTop)}return{width:r,height:s,x:a,y:c}}function rn(e,t){const n=K(e,!0,t==="fixed"),o=n.top+e.clientTop,i=n.left+e.clientLeft,r=N(e)?Z(e):j(1),s=e.clientWidth*r.x,a=e.clientHeight*r.y,c=i*r.x,l=o*r.y;return{width:s,height:a,x:c,y:l}}function ze(e,t,n){let o;if(t==="viewport")o=on(e,n);else if(t==="document")o=nn(X(e));else if(H(t))o=rn(t,n);else{const i=Je(e);o={...t,x:t.x-i.x,y:t.y-i.y}}return he(o)}function et(e,t){const n=U(e);return n===t||!H(n)||G(n)?!1:W(n).position==="fixed"||et(n,t)}function sn(e,t){const n=t.get(e);if(n)return n;let o=ie(e,[],!1).filter(a=>H(a)&&te(a)!=="body"),i=null;const r=W(e).position==="fixed";let s=r?U(e):e;for(;H(s)&&!G(s);){const a=W(s),c=Re(s);!c&&a.position==="fixed"&&(i=null),(r?!c&&!i:!c&&a.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||se(s)&&!c&&et(e,s))?o=o.filter(u=>u!==s):i=a,s=U(s)}return t.set(e,o),o}function cn(e){let{element:t,boundary:n,rootBoundary:o,strategy:i}=e;const s=[...n==="clippingAncestors"?Te(t)?[]:sn(t,this._c):[].concat(n),o],a=s[0],c=s.reduce((l,u)=>{const f=ze(t,u,i);return l.top=k(f.top,l.top),l.right=B(f.right,l.right),l.bottom=B(f.bottom,l.bottom),l.left=k(f.left,l.left),l},ze(t,a,i));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}function an(e){const{width:t,height:n}=Ge(e);return{width:t,height:n}}function ln(e,t,n){const o=N(t),i=X(t),r=n==="fixed",s=K(e,!0,r,t);let a={scrollLeft:0,scrollTop:0};const c=j(0);if(o||!o&&!r)if((te(t)!=="body"||se(i))&&(a=ve(t)),o){const f=K(t,!0,r,t);c.x=f.x+t.clientLeft,c.y=f.y+t.clientTop}else i&&(c.x=Qe(i));const l=s.left+a.scrollLeft-c.x,u=s.top+a.scrollTop-c.y;return{x:l,y:u,width:s.width,height:s.height}}function ye(e){return W(e).position==="static"}function Ve(e,t){return!N(e)||W(e).position==="fixed"?null:t?t(e):e.offsetParent}function tt(e,t){const n=F(e);if(Te(e))return n;if(!N(e)){let i=U(e);for(;i&&!G(i);){if(H(i)&&!ye(i))return i;i=U(i)}return n}let o=Ve(e,t);for(;o&&qt(o)&&ye(o);)o=Ve(o,t);return o&&G(o)&&ye(o)&&!Re(o)?n:o||Zt(e)||n}const fn=async function(e){const t=this.getOffsetParent||tt,n=this.getDimensions,o=await n(e.floating);return{reference:ln(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function dn(e){return W(e).direction==="rtl"}const un={convertOffsetParentRelativeRectToViewportRelativeRect:en,getDocumentElement:X,getClippingRect:cn,getOffsetParent:tt,getElementRects:fn,getClientRects:tn,getDimensions:an,getScale:Z,isElement:H,isRTL:dn};function pn(e,t){let n=null,o;const i=X(e);function r(){var a;clearTimeout(o),(a=n)==null||a.disconnect(),n=null}function s(a,c){a===void 0&&(a=!1),c===void 0&&(c=1),r();const{left:l,top:u,width:f,height:m}=e.getBoundingClientRect();if(a||t(),!f||!m)return;const d=de(u),p=de(i.clientWidth-(l+f)),v=de(i.clientHeight-(u+m)),g=de(l),b={rootMargin:-d+"px "+-p+"px "+-v+"px "+-g+"px",threshold:k(0,B(1,c))||1};let x=!0;function y($){const O=$[0].intersectionRatio;if(O!==c){if(!x)return s();O?s(!1,O):o=setTimeout(()=>{s(!1,1e-7)},1e3)}x=!1}try{n=new IntersectionObserver(y,{...b,root:i.ownerDocument})}catch{n=new IntersectionObserver(y,b)}n.observe(e)}return s(!0),r}function mn(e,t,n,o){o===void 0&&(o={});const{ancestorScroll:i=!0,ancestorResize:r=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:c=!1}=o,l=Se(e),u=i||r?[...l?ie(l):[],...ie(t)]:[];u.forEach(w=>{i&&w.addEventListener("scroll",n,{passive:!0}),r&&w.addEventListener("resize",n)});const f=l&&a?pn(l,n):null;let m=-1,d=null;s&&(d=new ResizeObserver(w=>{let[b]=w;b&&b.target===l&&d&&(d.unobserve(t),cancelAnimationFrame(m),m=requestAnimationFrame(()=>{var x;(x=d)==null||x.observe(t)})),n()}),l&&!c&&d.observe(l),d.observe(t));let p,v=c?K(e):null;c&&g();function g(){const w=K(e);v&&(w.x!==v.x||w.y!==v.y||w.width!==v.width||w.height!==v.height)&&n(),v=w,p=requestAnimationFrame(g)}return n(),()=>{var w;u.forEach(b=>{i&&b.removeEventListener("scroll",n),r&&b.removeEventListener("resize",n)}),f?.(),(w=d)==null||w.disconnect(),d=null,c&&cancelAnimationFrame(p)}}const hn=Yt,gn=jt,wn=zt,vn=Kt,xn=Vt,Xe=It,yn=Ut,bn=(e,t,n)=>{const o=new Map,i={platform:un,...n},r={...i.platform,_c:o};return Nt(e,t,{...i,platform:r})};var ue=typeof document<"u"?h.useLayoutEffect:h.useEffect;function ge(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e=="function"&&e.toString()===t.toString())return!0;let n,o,i;if(e&&t&&typeof e=="object"){if(Array.isArray(e)){if(n=e.length,n!==t.length)return!1;for(o=n;o--!==0;)if(!ge(e[o],t[o]))return!1;return!0}if(i=Object.keys(e),n=i.length,n!==Object.keys(t).length)return!1;for(o=n;o--!==0;)if(!{}.hasOwnProperty.call(t,i[o]))return!1;for(o=n;o--!==0;){const r=i[o];if(!(r==="_owner"&&e.$$typeof)&&!ge(e[r],t[r]))return!1}return!0}return e!==e&&t!==t}function nt(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function Ye(e,t){const n=nt(e);return Math.round(t*n)/n}function je(e){const t=h.useRef(e);return ue(()=>{t.current=e}),t}function $n(e){e===void 0&&(e={});const{placement:t="bottom",strategy:n="absolute",middleware:o=[],platform:i,elements:{reference:r,floating:s}={},transform:a=!0,whileElementsMounted:c,open:l}=e,[u,f]=h.useState({x:0,y:0,strategy:n,placement:t,middlewareData:{},isPositioned:!1}),[m,d]=h.useState(o);ge(m,o)||d(o);const[p,v]=h.useState(null),[g,w]=h.useState(null),b=h.useCallback(P=>{P!==O.current&&(O.current=P,v(P))},[]),x=h.useCallback(P=>{P!==A.current&&(A.current=P,w(P))},[]),y=r||p,$=s||g,O=h.useRef(null),A=h.useRef(null),E=h.useRef(u),S=c!=null,L=je(c),T=je(i),R=h.useCallback(()=>{if(!O.current||!A.current)return;const P={placement:t,strategy:n,middleware:m};T.current&&(P.platform=T.current),bn(O.current,A.current,P).then(Y=>{const I={...Y,isPositioned:!0};M.current&&!ge(E.current,I)&&(E.current=I,Et.flushSync(()=>{f(I)}))})},[m,t,n,T]);ue(()=>{l===!1&&E.current.isPositioned&&(E.current.isPositioned=!1,f(P=>({...P,isPositioned:!1})))},[l]);const M=h.useRef(!1);ue(()=>(M.current=!0,()=>{M.current=!1}),[]),ue(()=>{if(y&&(O.current=y),$&&(A.current=$),y&&$){if(L.current)return L.current(y,$,R);R()}},[y,$,R,L,S]);const C=h.useMemo(()=>({reference:O,floating:A,setReference:b,setFloating:x}),[b,x]),D=h.useMemo(()=>({reference:y,floating:$}),[y,$]),_=h.useMemo(()=>{const P={position:n,left:0,top:0};if(!D.floating)return P;const Y=Ye(D.floating,u.x),I=Ye(D.floating,u.y);return a?{...P,transform:"translate("+Y+"px, "+I+"px)",...nt(D.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:Y,top:I}},[n,a,D.floating,u.x,u.y]);return h.useMemo(()=>({...u,update:R,refs:C,elements:D,floatingStyles:_}),[u,R,C,D,_])}const En=e=>{function t(n){return{}.hasOwnProperty.call(n,"current")}return{name:"arrow",options:e,fn(n){const{element:o,padding:i}=typeof e=="function"?e(n):e;return o&&t(o)?o.current!=null?Xe({element:o.current,padding:i}).fn(n):{}:o?Xe({element:o,padding:i}).fn(n):{}}}},On=(e,t)=>({...hn(e),options:[e,t]}),Pn=(e,t)=>({...gn(e),options:[e,t]}),An=(e,t)=>({...yn(e),options:[e,t]}),Cn=(e,t)=>({...wn(e),options:[e,t]}),Rn=(e,t)=>({...vn(e),options:[e,t]}),Dn=(e,t)=>({...xn(e),options:[e,t]}),Sn=(e,t)=>({...En(e),options:[e,t]}),Tn=h.forwardRef((e,t)=>{const{children:n,width:o=10,height:i=5,...r}=e;return h.createElement(re.svg,J({},r,{ref:t,width:o,height:i,viewBox:"0 0 30 10",preserveAspectRatio:"none"}),e.asChild?n:h.createElement("polygon",{points:"0,0 30,0 15,10"}))}),Ln=Tn,ot="Popper",[it,Zn]=$t(ot),[_n,rt]=it(ot),kn=e=>{const{__scopePopper:t,children:n}=e,[o,i]=h.useState(null);return h.createElement(_n,{scope:t,anchor:o,onAnchorChange:i},n)},Fn="PopperAnchor",Mn=h.forwardRef((e,t)=>{const{__scopePopper:n,virtualRef:o,...i}=e,r=rt(Fn,n),s=h.useRef(null),a=Oe(t,s);return h.useEffect(()=>{r.onAnchorChange(o?.current||s.current)}),o?null:h.createElement(re.div,J({},i,{ref:a}))}),st="PopperContent",[Wn,Bn]=it(st),Hn=h.forwardRef((e,t)=>{var n,o,i,r,s,a,c,l;const{__scopePopper:u,side:f="bottom",sideOffset:m=0,align:d="center",alignOffset:p=0,arrowPadding:v=0,avoidCollisions:g=!0,collisionBoundary:w=[],collisionPadding:b=0,sticky:x="partial",hideWhenDetached:y=!1,updatePositionStrategy:$="optimized",onPlaced:O,...A}=e,E=rt(st,u),[S,L]=h.useState(null),T=Oe(t,ne=>L(ne)),[R,M]=h.useState(null),C=Pt(R),D=(n=C?.width)!==null&&n!==void 0?n:0,_=(o=C?.height)!==null&&o!==void 0?o:0,P=f+(d!=="center"?"-"+d:""),Y=typeof b=="number"?b:{top:0,right:0,bottom:0,left:0,...b},I=Array.isArray(w)?w:[w],at=I.length>0,ce={padding:Y,boundary:I.filter(Vn),altBoundary:at},{refs:lt,floatingStyles:Le,placement:ft,isPositioned:ae,middlewareData:q}=$n({strategy:"fixed",placement:P,whileElementsMounted:(...ne)=>mn(...ne,{animationFrame:$==="always"}),elements:{reference:E.anchor},middleware:[On({mainAxis:m+_,alignmentAxis:p}),g&&Pn({mainAxis:!0,crossAxis:!1,limiter:x==="partial"?An():void 0,...ce}),g&&Cn({...ce}),Rn({...ce,apply:({elements:ne,rects:ke,availableWidth:wt,availableHeight:vt})=>{const{width:xt,height:yt}=ke.reference,fe=ne.floating.style;fe.setProperty("--radix-popper-available-width",`${wt}px`),fe.setProperty("--radix-popper-available-height",`${vt}px`),fe.setProperty("--radix-popper-anchor-width",`${xt}px`),fe.setProperty("--radix-popper-anchor-height",`${yt}px`)}}),R&&Sn({element:R,padding:v}),Xn({arrowWidth:D,arrowHeight:_}),y&&Dn({strategy:"referenceHidden",...ce})]}),[_e,dt]=ct(ft),le=we(O);Fe(()=>{ae&&le?.()},[ae,le]);const ut=(i=q.arrow)===null||i===void 0?void 0:i.x,pt=(r=q.arrow)===null||r===void 0?void 0:r.y,mt=((s=q.arrow)===null||s===void 0?void 0:s.centerOffset)!==0,[ht,gt]=h.useState();return Fe(()=>{S&&gt(window.getComputedStyle(S).zIndex)},[S]),h.createElement("div",{ref:lt.setFloating,"data-radix-popper-content-wrapper":"",style:{...Le,transform:ae?Le.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:ht,"--radix-popper-transform-origin":[(a=q.transformOrigin)===null||a===void 0?void 0:a.x,(c=q.transformOrigin)===null||c===void 0?void 0:c.y].join(" ")},dir:e.dir},h.createElement(Wn,{scope:u,placedSide:_e,onArrowChange:M,arrowX:ut,arrowY:pt,shouldHideArrow:mt},h.createElement(re.div,J({"data-side":_e,"data-align":dt},A,{ref:T,style:{...A.style,animation:ae?void 0:"none",opacity:(l=q.hide)!==null&&l!==void 0&&l.referenceHidden?0:void 0}}))))}),Nn="PopperArrow",In={top:"bottom",right:"left",bottom:"top",left:"right"},zn=h.forwardRef(function(t,n){const{__scopePopper:o,...i}=t,r=Bn(Nn,o),s=In[r.placedSide];return h.createElement("span",{ref:r.onArrowChange,style:{position:"absolute",left:r.arrowX,top:r.arrowY,[s]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[r.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[r.placedSide],visibility:r.shouldHideArrow?"hidden":void 0}},h.createElement(Ln,J({},i,{ref:n,style:{...i.style,display:"block"}})))});function Vn(e){return e!==null}const Xn=e=>({name:"transformOrigin",options:e,fn(t){var n,o,i,r,s;const{placement:a,rects:c,middlewareData:l}=t,f=((n=l.arrow)===null||n===void 0?void 0:n.centerOffset)!==0,m=f?0:e.arrowWidth,d=f?0:e.arrowHeight,[p,v]=ct(a),g={start:"0%",center:"50%",end:"100%"}[v],w=((o=(i=l.arrow)===null||i===void 0?void 0:i.x)!==null&&o!==void 0?o:0)+m/2,b=((r=(s=l.arrow)===null||s===void 0?void 0:s.y)!==null&&r!==void 0?r:0)+d/2;let x="",y="";return p==="bottom"?(x=f?g:`${w}px`,y=`${-d}px`):p==="top"?(x=f?g:`${w}px`,y=`${c.floating.height+d}px`):p==="right"?(x=`${-d}px`,y=f?g:`${b}px`):p==="left"&&(x=`${c.floating.width+d}px`,y=f?g:`${b}px`),{data:{x,y}}}});function ct(e){const[t,n="center"]=e.split("-");return[t,n]}const Gn=kn,Jn=Mn,Qn=Hn,eo=zn,to=h.forwardRef((e,t)=>{var n;const{container:o=globalThis==null||(n=globalThis.document)===null||n===void 0?void 0:n.body,...i}=e;return o?Ot.createPortal(h.createElement(re.div,J({},i,{ref:t})),o):null});export{Zn as $,Gn as a,Jn as b,to as c,qn as d,Qn as e,eo as f};
