let l;var E=(...[c={}])=>{Object.entries(c).forEach(([a,r])=>Object.defineProperty(c,a,{value:r===!0?u[a]:c[a]}));const{Path:f,Cache:p,Logger:S,Map:d,Exclude:j,Action:g,CSS:b,HTML:I,Image:n,JavaScript:A,SVG:P,Parser:h}=s(u,c),m=new Set;return typeof f<"u"&&(Array.isArray(f)||f instanceof Set)&&f.forEach(a=>m.add(a)),typeof h=="object"&&Object.entries(h).forEach(([a,r])=>Object.defineProperty(h,a,{value:Array.isArray(r)?r:[r]})),{name:"astro-compress",hooks:{"astro:config:done":async({config:{outDir:{pathname:a}}})=>{l=(await import("path")).parse(a).dir.replace(/\\/g,"/"),l.startsWith("/")&&(l=l.substring(1))},"astro:build:done":async({dir:a})=>{if(typeof d=="object"){m.size===0&&m.add(a),typeof p=="object"&&p.Search===x&&(p.Search=a);for(const[r,i]of Object.entries({CSS:b,HTML:I,Image:n,JavaScript:A,SVG:P}))if(!(!(i&&d[r])||typeof i!="object")){y=s(g,s(g,{Wrote:async({Buffer:t,Input:o})=>{switch(r){case"CSS":{let e=t.toString();return i.lightningcss&&(e=(await import("lightningcss")).transform(s({code:(await import("buffer")).Buffer.from(e),filename:o},i.lightningcss)).code.toString()),i.csso&&(e=(await import("csso")).minify(e,i.csso).css),e}case"HTML":return await(await import("html-minifier-terser")).minify(t.toString(),i["html-minifier-terser"]);case"JavaScript":return(await(await import("terser")).minify(t.toString(),i.terser)).code??t;case"Image":try{return t instanceof(await import("sharp")).default?await(await import("./Image/Writesharp.js")).default(i.sharp,{Buffer:t,Input:o}):t}catch(e){return console.log(e),t}case"SVG":return(await import("svgo")).optimize(t.toString(),i.svgo).data??t;default:return t}},Fulfilled:async({File:t,Info:{Total:o}})=>t>0?`${(await import("kleur/colors")).green(`\u2713\u2001Successfully compressed a total of ${t} ${r} ${t===1?"file":"files"} for ${(await import("@playform/pipe/Target/Function/Bytes.js")).default(o)}.`)}`:!1})),r==="Image"&&(y=s(y,{Read:async({Input:t,Buffer:o})=>{try{(await import("sharp")).default.cache(!1);const{format:e}=await(await import("sharp")).default(t).metadata(),w={animated:e==="webp"||e==="gif"};return(await import("sharp")).default(t,typeof n=="object"&&typeof n.sharp=="object"&&typeof n.sharp.sharp=="object"?s(w,n.sharp?.sharp):w)}catch(e){return console.log(e),o}}}));for(const t of m)await(await(await(await new(await import("@playform/pipe")).default(p,S).In(t)).By(d[r]??"**/*")).Not(j)).Pipe(y)}}}}}};const{default:u}=await import("../Variable/Option.js"),{default:{Cache:{Search:x}}}=await import("@playform/pipe/Target/Variable/Option.js"),{default:s}=await import("./Merge.js");let y;export{u as Default,s as Merge,x as Search,l as System,y as _Action,E as default};
