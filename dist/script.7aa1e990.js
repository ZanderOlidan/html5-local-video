parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Mhix":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;class e{constructor(e){this.resource=e}blobToBuffer(){return new Promise((e,t)=>{const r=new FileReader;r.addEventListener("loadend",t=>{const r=t.target.result;e(new Uint8Array(r))}),r.addEventListener("error",()=>t("Error while reading the Blob object")),r.readAsArrayBuffer(this.resource)})}static blobToString(e,t,r){const o=new FileReader;o.addEventListener("loadend",e=>{const r=e.target.result;t(r)}),o.addEventListener("error",()=>r()),o.readAsText(e)}static toVTT(e){return e.replace(/\{\\([ibu])\}/g,"</$1>").replace(/\{\\([ibu])1\}/g,"<$1>").replace(/\{([ibu])\}/g,"<$1>").replace(/\{\/([ibu])\}/g,"</$1>").replace(/(\d\d:\d\d:\d\d),(\d\d\d)/g,"$1.$2").concat("\r\n\r\n")}static toTypedArray(e){const t=[];return e.split("").forEach(e=>{t.push(parseInt(e.charCodeAt(),16))}),Uint8Array.from(t)}getURL(){return new Promise((t,r)=>this.resource instanceof Blob?FileReader?TextDecoder?e.blobToString(this.resource,r=>{const o="WEBVTT FILE\r\n\r\n".concat(e.toVTT(r)),n=new Blob([o],{type:"text/vtt"});return this.objectURL=URL.createObjectURL(n),t(this.objectURL)},()=>{this.blobToBuffer().then(r=>{const o=new TextDecoder("utf-8").decode(r),n="WEBVTT FILE\r\n\r\n".concat(e.toVTT(o)),c=new Blob([n],{type:"text/vtt"});return this.objectURL=URL.createObjectURL(c),t(this.objectURL)})}):r("No TextDecoder constructor found"):r("No FileReader constructor found"):r("Expecting resource to be a Blob but something else found."))}release(){URL.createObjectURL(this.objectURL)}}window.WebVTTConverter=e;var t=e;exports.default=t;
},{}],"mpVp":[function(require,module,exports) {
"use strict";var e=t(require("srt-webvtt"));function t(e){return e&&e.__esModule?e:{default:e}}!function(){new Plyr("#player",{captions:{active:!0}});var t=window.URL||window.webkitURL,n=document.getElementById("video-upload"),i=document.getElementById("subtitle-upload"),d=document.getElementById("sub");n.addEventListener("change",function(e){var n=this.files[0],i=document.querySelector("video"),d=t.createObjectURL(n);i.src=d},!1),i.addEventListener("change",function(t){new e.default(this.files[0]).getURL().then(function(e){d.src=e})},!1)}();
},{"srt-webvtt":"Mhix"}]},{},["mpVp"], null)
//# sourceMappingURL=/script.7aa1e990.js.map