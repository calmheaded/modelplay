"use strict";(self["webpackChunkthree_model_viewer"]=self["webpackChunkthree_model_viewer"]||[]).push([[383],{6383:function(e,r,t){t.r(r),t.d(r,{KMZLoader:function(){return a}});var n=t(216),o=t(2974),s=t(6925);class a extends n.aNw{constructor(e){super(e)}load(e,r,t,o){const s=this,a=new n.hH6(s.manager);a.setPath(s.path),a.setResponseType("arraybuffer"),a.setRequestHeader(s.requestHeader),a.setWithCredentials(s.withCredentials),a.load(e,(function(t){try{r(s.parse(t))}catch(n){o?o(n):console.error(n),s.manager.itemError(e)}}),t,o)}parse(e){function r(e){for(const r in a)if(r.slice(-e.length)===e)return a[r]}const t=new n.lLk;t.setURLModifier((function(e){const t=r(e);if(t){console.log("Loading",e);const r=new Blob([t.buffer],{type:"application/octet-stream"});return URL.createObjectURL(r)}return e}));const a=s.GZ(new Uint8Array(e));if(a["doc.kml"]){const e=(new DOMParser).parseFromString(s.T8(a["doc.kml"]),"application/xml"),r=e.querySelector("Placemark Model Link href");if(r){const e=new o.ColladaLoader(t);return e.parse(s.T8(a[r.textContent]))}}else{console.warn("KMZLoader: Missing doc.kml file.");for(const e in a){const r=e.split(".").pop().toLowerCase();if("dae"===r){const r=new o.ColladaLoader(t);return r.parse(s.T8(a[e]))}}}return console.error("KMZLoader: Couldn't find .dae file."),{scene:new n.ZAu}}}}}]);