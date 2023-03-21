"use strict";(self["webpackChunkthree_model_viewer"]=self["webpackChunkthree_model_viewer"]||[]).push([[349],{349:function(e,t,n){n.r(t),n.d(t,{PLYLoader:function(){return o}});var s=n(216);const r=new s.Ilk;class o extends s.aNw{constructor(e){super(e),this.propertyNameMapping={},this.customPropertyMapping={}}load(e,t,n,r){const o=this,a=new s.hH6(this.manager);a.setPath(this.path),a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,(function(n){try{t(o.parse(n))}catch(s){r?r(s):console.error(s),o.manager.itemError(e)}}),n,r)}setPropertyNameMapping(e){this.propertyNameMapping=e}setCustomPropertyNameMapping(e){this.customPropertyMapping=e}parse(e){function t(e){const t=/^ply([\s\S]*)end_header(\r\n|\r|\n)/;let n="",s=0;const r=t.exec(e);null!==r&&(n=r[1],s=new Blob([r[0]]).size);const o={comments:[],elements:[],headerLength:s,objInfo:""},a=n.split(/\r\n|\r|\n/);let c;function i(e,t){const n={type:e[0]};return"list"===n.type?(n.name=e[3],n.countType=e[1],n.itemType=e[2]):n.name=e[1],n.name in t&&(n.name=t[n.name]),n}for(let u=0;u<a.length;u++){let e=a[u];if(e=e.trim(),""===e)continue;const t=e.split(/\s+/),n=t.shift();switch(e=t.join(" "),n){case"format":o.format=t[0],o.version=t[1];break;case"comment":o.comments.push(e);break;case"element":void 0!==c&&o.elements.push(c),c={},c.name=t[0],c.count=parseInt(t[1]),c.properties=[];break;case"property":c.properties.push(i(t,m.propertyNameMapping));break;case"obj_info":o.objInfo=e;break;default:console.log("unhandled",n,t)}}return void 0!==c&&o.elements.push(c),o}function n(e,t){switch(t){case"char":case"uchar":case"short":case"ushort":case"int":case"uint":case"int8":case"uint8":case"int16":case"uint16":case"int32":case"uint32":return parseInt(e);case"float":case"double":case"float32":case"float64":return parseFloat(e)}}function o(e,t){const s=t.split(/\s+/),r={};for(let o=0;o<e.length;o++)if("list"===e[o].type){const t=[],a=n(s.shift(),e[o].countType);for(let r=0;r<a;r++)t.push(n(s.shift(),e[o].itemType));r[e[o].name]=t}else r[e[o].name]=n(s.shift(),e[o].type);return r}function a(){const e={indices:[],vertices:[],normals:[],uvs:[],faceVertexUvs:[],colors:[]};for(const t of Object.keys(m.customPropertyMapping))e[t]=[];return e}function c(e,t){const n=a();let s;const r=/end_header\s([\s\S]*)$/;let c="";null!==(s=r.exec(e))&&(c=s[1]);const l=c.split(/\r\n|\r|\n/);let p=0,f=0;for(let a=0;a<l.length;a++){let e=l[a];if(e=e.trim(),""===e)continue;f>=t.elements[p].count&&(p++,f=0);const s=o(t.elements[p].properties,e);u(n,t.elements[p].name,s),f++}return i(n)}function i(e){let t=new s.u9r;e.indices.length>0&&t.setIndex(e.indices),t.setAttribute("position",new s.a$l(e.vertices,3)),e.normals.length>0&&t.setAttribute("normal",new s.a$l(e.normals,3)),e.uvs.length>0&&t.setAttribute("uv",new s.a$l(e.uvs,2)),e.colors.length>0&&t.setAttribute("color",new s.a$l(e.colors,3)),e.faceVertexUvs.length>0&&(t=t.toNonIndexed(),t.setAttribute("uv",new s.a$l(e.faceVertexUvs,2)));for(const n of Object.keys(m.customPropertyMapping))e[n].length>0&&t.setAttribute(n,new s.a$l(e[n],m.customPropertyMapping[n].length));return t.computeBoundingSphere(),t}function u(e,t,n){function s(e){for(let t=0,s=e.length;t<s;t++){const s=e[t];if(s in n)return s}return null}const o=s(["x","px","posx"])||"x",a=s(["y","py","posy"])||"y",c=s(["z","pz","posz"])||"z",i=s(["nx","normalx"]),u=s(["ny","normaly"]),l=s(["nz","normalz"]),p=s(["s","u","texture_u","tx"]),f=s(["t","v","texture_v","ty"]),h=s(["red","diffuse_red","r","diffuse_r"]),d=s(["green","diffuse_green","g","diffuse_g"]),g=s(["blue","diffuse_blue","b","diffuse_b"]);if("vertex"===t){e.vertices.push(n[o],n[a],n[c]),null!==i&&null!==u&&null!==l&&e.normals.push(n[i],n[u],n[l]),null!==p&&null!==f&&e.uvs.push(n[p],n[f]),null!==h&&null!==d&&null!==g&&(r.setRGB(n[h]/255,n[d]/255,n[g]/255).convertSRGBToLinear(),e.colors.push(r.r,r.g,r.b));for(const t of Object.keys(m.customPropertyMapping))for(const s of m.customPropertyMapping[t])e[t].push(n[s])}else if("face"===t){const t=n.vertex_indices||n.vertex_index,s=n.texcoord;3===t.length?(e.indices.push(t[0],t[1],t[2]),s&&6===s.length&&(e.faceVertexUvs.push(s[0],s[1]),e.faceVertexUvs.push(s[2],s[3]),e.faceVertexUvs.push(s[4],s[5]))):4===t.length&&(e.indices.push(t[0],t[1],t[3]),e.indices.push(t[1],t[2],t[3]))}}function l(e,t,n,s){switch(n){case"int8":case"char":return[e.getInt8(t),1];case"uint8":case"uchar":return[e.getUint8(t),1];case"int16":case"short":return[e.getInt16(t,s),2];case"uint16":case"ushort":return[e.getUint16(t,s),2];case"int32":case"int":return[e.getInt32(t,s),4];case"uint32":case"uint":return[e.getUint32(t,s),4];case"float32":case"float":return[e.getFloat32(t,s),4];case"float64":case"double":return[e.getFloat64(t,s),8]}}function p(e,t,n,s){const r={};let o,a=0;for(let c=0;c<n.length;c++)if("list"===n[c].type){const i=[];o=l(e,t+a,n[c].countType,s);const u=o[0];a+=o[1];for(let r=0;r<u;r++)o=l(e,t+a,n[c].itemType,s),i.push(o[0]),a+=o[1];r[n[c].name]=i}else o=l(e,t+a,n[c].type,s),r[n[c].name]=o[0],a+=o[1];return[r,a]}function f(e,t){const n=a(),s="binary_little_endian"===t.format,r=new DataView(e,t.headerLength);let o,c=0;for(let a=0;a<t.elements.length;a++)for(let e=0;e<t.elements[a].count;e++){o=p(r,c,t.elements[a].properties,s),c+=o[1];const e=o[0];u(n,t.elements[a].name,e)}return i(n)}let h;const m=this;if(e instanceof ArrayBuffer){const n=s.Zp0.decodeText(new Uint8Array(e)),r=t(n);h="ascii"===r.format?c(n,r):f(e,r)}else h=c(e,t(e));return h}}}}]);