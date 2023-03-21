"use strict";(self["webpackChunkthree_model_viewer"]=self["webpackChunkthree_model_viewer"]||[]).push([[38],{6038:function(e,t,i){i.r(t),i.d(t,{PCDLoader:function(){return s}});var n=i(216);class s extends n.aNw{constructor(e){super(e),this.littleEndian=!0}load(e,t,i,s){const l=this,r=new n.hH6(l.manager);r.setPath(l.path),r.setResponseType("arraybuffer"),r.setRequestHeader(l.requestHeader),r.setWithCredentials(l.withCredentials),r.load(e,(function(i){try{t(l.parse(i))}catch(n){s?s(n):console.error(n),l.manager.itemError(e)}}),i,s)}parse(e){function t(e,t){const i=e.length,n=new Uint8Array(t);let s,l,r,o=0,a=0;do{if(s=e[o++],s<32){if(s++,a+s>t)throw new Error("Output buffer is not large enough");if(o+s>i)throw new Error("Invalid compressed data");do{n[a++]=e[o++]}while(--s)}else{if(l=s>>5,r=a-((31&s)<<8)-1,o>=i)throw new Error("Invalid compressed data");if(7===l&&(l+=e[o++],o>=i))throw new Error("Invalid compressed data");if(r-=e[o++],a+l+2>t)throw new Error("Output buffer is not large enough");if(r<0)throw new Error("Invalid compressed data");if(r>=a)throw new Error("Invalid compressed data");do{n[a++]=n[r++]}while(2+--l)}}while(o<i);return n}function i(e){const t={},i=e.search(/[\r\n]DATA\s(\S*)\s/i),n=/[\r\n]DATA\s(\S*)\s/i.exec(e.slice(i-1));if(t.data=n[1],t.headerLen=n[0].length+i,t.str=e.slice(0,t.headerLen),t.str=t.str.replace(/#.*/gi,""),t.version=/VERSION (.*)/i.exec(t.str),t.fields=/FIELDS (.*)/i.exec(t.str),t.size=/SIZE (.*)/i.exec(t.str),t.type=/TYPE (.*)/i.exec(t.str),t.count=/COUNT (.*)/i.exec(t.str),t.width=/WIDTH (.*)/i.exec(t.str),t.height=/HEIGHT (.*)/i.exec(t.str),t.viewpoint=/VIEWPOINT (.*)/i.exec(t.str),t.points=/POINTS (.*)/i.exec(t.str),null!==t.version&&(t.version=parseFloat(t.version[1])),t.fields=null!==t.fields?t.fields[1].split(" "):[],null!==t.type&&(t.type=t.type[1].split(" ")),null!==t.width&&(t.width=parseInt(t.width[1])),null!==t.height&&(t.height=parseInt(t.height[1])),null!==t.viewpoint&&(t.viewpoint=t.viewpoint[1]),null!==t.points&&(t.points=parseInt(t.points[1],10)),null===t.points&&(t.points=t.width*t.height),null!==t.size&&(t.size=t.size[1].split(" ").map((function(e){return parseInt(e,10)}))),null!==t.count)t.count=t.count[1].split(" ").map((function(e){return parseInt(e,10)}));else{t.count=[];for(let e=0,i=t.fields.length;e<i;e++)t.count.push(1)}t.offset={};let s=0;for(let l=0,r=t.fields.length;l<r;l++)"ascii"===t.data?t.offset[t.fields[l]]=l:(t.offset[t.fields[l]]=s,s+=t.size[l]*t.count[l]);return t.rowSize=s,t}const s=n.Zp0.decodeText(new Uint8Array(e)),l=i(s),r=[],o=[],a=[],d=[],h=[];if("ascii"===l.data){const e=l.offset,t=s.slice(l.headerLen),i=t.split("\n");for(let n=0,s=i.length;n<s;n++){if(""===i[n])continue;const t=i[n].split(" ");if(void 0!==e.x&&(r.push(parseFloat(t[e.x])),r.push(parseFloat(t[e.y])),r.push(parseFloat(t[e.z]))),void 0!==e.rgb){const i=l.fields.findIndex((e=>"rgb"===e)),n=l.type[i],s=parseFloat(t[e.rgb]);let r=s;if("F"===n){const e=new Float32Array(1);e[0]=s,r=new Int32Array(e.buffer)[0]}const o=r>>16&255,d=r>>8&255,h=r>>0&255;a.push(o/255,d/255,h/255)}void 0!==e.normal_x&&(o.push(parseFloat(t[e.normal_x])),o.push(parseFloat(t[e.normal_y])),o.push(parseFloat(t[e.normal_z]))),void 0!==e.intensity&&d.push(parseFloat(t[e.intensity])),void 0!==e.label&&h.push(parseInt(t[e.label]))}}if("binary_compressed"===l.data){const i=new Uint32Array(e.slice(l.headerLen,l.headerLen+8)),n=i[0],s=i[1],p=t(new Uint8Array(e,l.headerLen+8,n),s),u=new DataView(p.buffer),f=l.offset;for(let e=0;e<l.points;e++){if(void 0!==f.x){const t=l.fields.indexOf("x"),i=l.fields.indexOf("y"),n=l.fields.indexOf("z");r.push(u.getFloat32(l.points*f.x+l.size[t]*e,this.littleEndian)),r.push(u.getFloat32(l.points*f.y+l.size[i]*e,this.littleEndian)),r.push(u.getFloat32(l.points*f.z+l.size[n]*e,this.littleEndian))}if(void 0!==f.rgb){const t=l.fields.indexOf("rgb");a.push(u.getUint8(l.points*f.rgb+l.size[t]*e+2)/255),a.push(u.getUint8(l.points*f.rgb+l.size[t]*e+1)/255),a.push(u.getUint8(l.points*f.rgb+l.size[t]*e+0)/255)}if(void 0!==f.normal_x){const t=l.fields.indexOf("normal_x"),i=l.fields.indexOf("normal_y"),n=l.fields.indexOf("normal_z");o.push(u.getFloat32(l.points*f.normal_x+l.size[t]*e,this.littleEndian)),o.push(u.getFloat32(l.points*f.normal_y+l.size[i]*e,this.littleEndian)),o.push(u.getFloat32(l.points*f.normal_z+l.size[n]*e,this.littleEndian))}if(void 0!==f.intensity){const t=l.fields.indexOf("intensity");d.push(u.getFloat32(l.points*f.intensity+l.size[t]*e,this.littleEndian))}if(void 0!==f.label){const t=l.fields.indexOf("label");h.push(u.getInt32(l.points*f.label+l.size[t]*e,this.littleEndian))}}}if("binary"===l.data){const t=new DataView(e,l.headerLen),i=l.offset;for(let e=0,n=0;e<l.points;e++,n+=l.rowSize)void 0!==i.x&&(r.push(t.getFloat32(n+i.x,this.littleEndian)),r.push(t.getFloat32(n+i.y,this.littleEndian)),r.push(t.getFloat32(n+i.z,this.littleEndian))),void 0!==i.rgb&&(a.push(t.getUint8(n+i.rgb+2)/255),a.push(t.getUint8(n+i.rgb+1)/255),a.push(t.getUint8(n+i.rgb+0)/255)),void 0!==i.normal_x&&(o.push(t.getFloat32(n+i.normal_x,this.littleEndian)),o.push(t.getFloat32(n+i.normal_y,this.littleEndian)),o.push(t.getFloat32(n+i.normal_z,this.littleEndian))),void 0!==i.intensity&&d.push(t.getFloat32(n+i.intensity,this.littleEndian)),void 0!==i.label&&h.push(t.getInt32(n+i.label,this.littleEndian))}const p=new n.u9r;r.length>0&&p.setAttribute("position",new n.a$l(r,3)),o.length>0&&p.setAttribute("normal",new n.a$l(o,3)),a.length>0&&p.setAttribute("color",new n.a$l(a,3)),d.length>0&&p.setAttribute("intensity",new n.a$l(d,1)),h.length>0&&p.setAttribute("label",new n.j87(h,1)),p.computeBoundingSphere();const u=new n.UY4({size:.005});return a.length>0&&(u.vertexColors=!0),new n.woe(p,u)}}}}]);