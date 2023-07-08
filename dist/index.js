import{minify as c}from"html-minifier-terser";import p from"files-pipe/dist/lib/deepmerge.js";import d from"files-pipe/dist/options/index.js";import n from"./options/index.js";import l from"./lib/format-bytes.js";import h from"./lib/sharp-read.js";import{minify as y}from"terser";import{optimize as w}from"svgo";import{minify as b}from"csso";import{files as S}from"files-pipe";import m from"sharp";var R=(o={})=>{for(const r in o)Object.prototype.hasOwnProperty.call(o,r)&&o[r]===!0&&(o[r]=n[r]);const e=p(n,o),s=new Set;if(typeof e.path<"u"&&(e.path instanceof Array||e.path instanceof Set))for(const r of e.path)s.add(r);return{name:"astro-compress",hooks:{"astro:build:done":async({dir:r})=>{s.size||s.add(r);for(const[f,i]of Object.entries(e))if(i)for(const u of s)await(await(await(await new S(e.logger).in(u)).by(typeof e.map=="object"?e.map[f]:"")).not(e.exclude)).pipe(p(e.pipe,{wrote:async t=>{switch(f){case"css":return b(t.buffer.toString(),i).css;case"html":return await c(t.buffer.toString(),i);case"js":{const{code:a}=await y(t.buffer.toString(),i);return a||t.buffer}case"img":return h(i,t);case"svg":{const{data:a}=w(t.buffer.toString(),i);return typeof a<"u"?a:t.buffer}default:return t.buffer}},read:async t=>{switch(f){case"img":{const{format:a}=await m(t.inputPath).metadata();return m(t.inputPath,{failOn:"none",sequentialRead:!0,unlimited:!0,animated:a==="webp"||a==="gif"})}default:return await d.pipe.read(t)}},fulfilled:async t=>t.files>0?`Successfully compressed a total of ${t.files} ${f.toUpperCase()} ${t.files===1?"file":"files"} for ${await l(t.info.total)}.`:!1}))}}}};export{R as default};
