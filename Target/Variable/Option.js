import{blue as f,green as l}from"kleur/colors";var d=(await import("typescript-esbuild/Target/Function/Merge.js")).default((await import("files-pipe/Target/Variable/Option.js")).default,{CSS:{csso:(await import("./CSS/csso.js")).default,lightningcss:(await import("./CSS/lightningcss.js")).default},HTML:{"html-minifier-terser":(await import("./HTML/html-minifier-terser.js")).default},JavaScript:{terser:(await import("./JavaScript/terser.js")).default},Image:{sharp:(await import("./Image/sharp.js")).default},SVG:{svgo:(await import("./SVG/svgo.js")).default},Map:(await import("./Map.js")).default,Parser:(await import("./Parser.js")).default,Action:{Failed:async({Input:t})=>{const e=t.lastIndexOf("/");return`${o("Error:")} Cannot compress file ${a(t.slice(0,e+1))}${o(t.slice(e+1))}`},Passed:async({Before:t,Buffer:e})=>t>Buffer.byteLength(e.toString()),Accomplished:async({Input:t,Before:e,After:s})=>{const i=e-s,r=t.lastIndexOf("/");return console.log("\u251C\u2500 "),`${a(`(-${await(await import("files-pipe/Target/Function/Bytes.js")).default(i)})`)}	${l(`${(i/e*100).toFixed(2)}%`)} reduction in ${a(t.slice(0,r+1))}${f(t.slice(r+1))}`},Changed:async t=>Object.defineProperty(t.Info,"Total",{value:(t.Info.Total?t.Info.Total:0)+(t.On.Before-t.On.After),configurable:!0,writable:!0})&&t}});const{gray:a,red:o}=await import("kleur");export{d as default};
