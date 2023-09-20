import d from"./Library/SharpRead.js";import c from"./Option/Index.js";import{minify as l}from"csso";import y,{Bytes as h,Merge as p,Default as S}from"files-pipe";import{minify as w}from"html-minifier-terser";import u from"sharp";import{optimize as g}from"svgo";import{minify as B}from"terser";var T=(i={})=>{for(const a in i)Object.prototype.hasOwnProperty.call(i,a)&&i[a]===!0&&(i[a]=c[a]);const t=p(c,i),s=new Set;if(typeof t.Path<"u"&&(t.Path instanceof Array||t.Path instanceof Set))for(const a of t.Path)s.add(a);return{name:"astro-compress",hooks:{"astro:build:done":async({dir:a})=>{s.size||s.add(a);for(const[n,o]of Object.entries(t))if(o)for(const m of s)await(await(await(await new y(t.Cache,t.Logger).In(m)).By(typeof t.Map=="object"?t.Map[n]:"")).Not(t.Exclude)).Pipe(p(t.Action,p(t.Action,{Wrote:async(r,e)=>{switch(n){case"CSS":return l(e.Buffer.toString(),o).css;case"HTML":return await w(e.Buffer.toString(),o);case"JavaScript":{const{code:f}=await B(e.Buffer.toString(),o);return f||e.Buffer}case"Image":return d(o,e);case"SVG":{const{data:f}=g(e.Buffer.toString(),o);return typeof f<"u"?f:e.Buffer}default:return e.Buffer}},Read:async r=>{switch(n){case"Image":{const{format:e}=await u(r.Input).metadata();return u(r.Input,{failOn:"none",sequentialRead:!0,unlimited:!0,animated:e==="webp"||e==="gif"})}default:return await S.Action.Read(r)}},Fulfilled:async r=>r.Files>0?`Successfully compressed a total of ${r.Files} ${n} ${r.Files===1?"file":"files"} for ${await h(r.Info.Total)}.`:!1})))}}}};export{T as default};
