import{r as c,j as s,s as h,y as r}from"./index-PCb06teX.js";import{H as n,C as l}from"./index-DUaNUOXA.js";import{N as i,D as j,S as e,A as o}from"./index-CJk_xHEX.js";import{S as a}from"./index-CMfMABEs.js";import"./index-C7tW4IM6.js";import"./index-j6-noHbc.js";import"./index-CH7zi03T.js";import"./index-bm2cS04b.js";const d=[{prop:"defaultChecked",desc:"whether default is checked",type:"boolean",required:!1,default:"-"},{prop:"checked",desc:"whether checked",type:"boolean",required:!1,default:!1},{prop:"size",desc:"switch size",type:"tag: tiny | small| medium | large",required:!1,default:"medium"},{prop:"checkedThumb",desc:"checked thumb",type:"React.ReactNode",required:!1,default:"-"},{prop:"unCheckedThumb",desc:"unchecked thumb",type:"React.ReactNode",required:!1,default:"-"},{prop:"className",type:"string",required:!1,default:"-"},{prop:"style",type:"React.CssProperties",required:!1,default:"-"},{prop:"onCheckedChange",desc:"switch change callback",type:"(checked: boolean) => void",required:!1,default:"-"}],m=`<pre class="hljs"><code><span class="hljs-keyword">import</span> { useState } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;react&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">Switch</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/Switch&#x27;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">Demo</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">const</span> [checked, setChecked] = <span class="hljs-title function_">useState</span>(<span class="hljs-literal">false</span>);
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Switch</span> <span class="hljs-attr">checked</span>=<span class="hljs-string">{checked}</span> <span class="hljs-attr">onCheckedChange</span>=<span class="hljs-string">{setChecked}</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  )
}
</code></pre>
`,u=`<pre class="hljs"><code><span class="hljs-keyword">import</span> <span class="hljs-title class_">Switch</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/Switch&#x27;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">Demo</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;[&amp;_button:not(:first-child)]:ml-2&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Switch</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;tiny&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Switch</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;small&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Switch</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;medium&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Switch</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;large&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  )
}
</code></pre>
`,g=`<pre class="hljs"><code><span class="hljs-keyword">import</span> <span class="hljs-title class_">Switch</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/Switch&#x27;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">Demo</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;[&amp;_button:not(:first-child)]:ml-2&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Switch</span> <span class="hljs-attr">disabled</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Switch</span> <span class="hljs-attr">checked</span> <span class="hljs-attr">disabled</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  )
}
</code></pre>
`,f=`<pre class="hljs"><code><span class="hljs-keyword">import</span> <span class="hljs-title class_">Switch</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;your path/Switch&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">RiCheckLine</span>, <span class="hljs-title class_">RiCloseLine</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@remixicon/react&#x27;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">Demo</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">Switch</span>
      <span class="hljs-attr">checkedThumb</span>=<span class="hljs-string">{</span>
        &lt;<span class="hljs-attr">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;w-full h-full flex justify-center items-center&quot;</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">RiCheckLine</span> <span class="hljs-attr">size</span>=<span class="hljs-string">{12}</span> /&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        }
        unCheckedThumb={
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;w-full h-full flex justify-center items-center&quot;</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">RiCloseLine</span> <span class="hljs-attr">size</span>=<span class="hljs-string">{12}</span> /&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        }
    /&gt;</span>
  )
}
</code></pre>
`;function C(){const[t,p]=c.useState(!1);return s.jsxs("div",{children:[s.jsx(i,{title:"Switch",sourceName:"Switch"}),s.jsx(j,{children:"A component allows to toggle status"}),s.jsxs(e,{className:"mb-4",children:[s.jsx(n,{as:"h4",className:"mb-2",children:"basic"}),s.jsxs("p",{className:"mb-1",children:["switch: ",t?"on":"off"]}),s.jsx(a,{checked:t,onCheckedChange:p}),s.jsx(l,{content:m})]}),s.jsxs(e,{className:"mb-4",children:[s.jsx(n,{as:"h4",className:"mb-2",children:"size"}),s.jsxs("div",{className:"[&_button:not(:first-child)]:ml-2",children:[s.jsx(a,{size:"tiny"}),s.jsx(a,{size:"small"}),s.jsx(a,{size:"medium"}),s.jsx(a,{size:"large"})]}),s.jsx(l,{content:u})]}),s.jsxs(e,{className:"mb-4",children:[s.jsx(n,{as:"h4",className:"mb-2",children:"disabled"}),s.jsxs("div",{className:"[&_button:not(:first-child)]:ml-2",children:[s.jsx(a,{disabled:!0}),s.jsx(a,{checked:!0,disabled:!0})]}),s.jsx(l,{content:g})]}),s.jsxs(e,{className:"mb-4",children:[s.jsx(n,{as:"h4",className:"mb-2",children:"custom thumb inner"}),s.jsx(a,{checkedThumb:s.jsx("div",{className:"w-full h-full flex justify-center items-center",children:s.jsx(h,{size:12})}),unCheckedThumb:s.jsx("div",{className:"w-full h-full flex justify-center items-center",children:s.jsx(r,{size:12})})}),s.jsx(l,{content:f})]}),s.jsx(n,{as:"h2",className:"mb-2",children:"API"}),s.jsx(o,{rows:d})]})}export{C as default};