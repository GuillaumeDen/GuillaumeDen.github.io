(function(e){function t(t){for(var c,o,i=t[0],u=t[1],l=t[2],f=0,b=[];f<i.length;f++)o=i[f],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&b.push(r[o][0]),r[o]=0;for(c in u)Object.prototype.hasOwnProperty.call(u,c)&&(e[c]=u[c]);s&&s(t);while(b.length)b.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],c=!0,i=1;i<n.length;i++){var u=n[i];0!==r[u]&&(c=!1)}c&&(a.splice(t--,1),e=o(o.s=n[0]))}return e}var c={},r={app:0},a=[];function o(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=c,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)o.d(n,c,function(t){return e[t]}.bind(null,c));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var s=u;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1022:function(e,t,n){},3068:function(e,t,n){},3204:function(e,t,n){"use strict";n("c2b7")},"4ad8":function(e,t,n){"use strict";n("c2dc")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23");function r(e,t,n,r,a,o){var i=Object(c["k"])("hex-input"),u=Object(c["k"])("bottom");return Object(c["g"])(),Object(c["c"])(c["a"],null,[Object(c["f"])(i),Object(c["f"])(u)],64)}n("b64b");var a=Object(c["p"])("data-v-e7a6ab38");Object(c["i"])("data-v-e7a6ab38");var o={class:"input_outer"},i=Object(c["f"])("img",{class:"santa_logo",src:"secret_santa.svg"},null,-1),u={key:0},l=Object(c["f"])("h3",null,"Secret Santa generator",-1),s=Object(c["f"])("p",null,"Add particitants, generate and share links",-1),f={class:"input_background"},b=Object(c["f"])("i",{class:"fas fa-2x fa-plus-circle"},null,-1),d={key:1},p=Object(c["f"])("h3",null,"Merry christmas 🎄 !",-1),O={class:"inner_text"},j=Object(c["e"])("HoHoho, "),v={class:"name"},h=Object(c["e"])(" !"),g=Object(c["e"])("You are the secret santa of "),m={class:"name"},y=Object(c["f"])("p",null,"I'm sure you'll find a great gift.",-1);Object(c["h"])();var k=a((function(e,t,n,r,a,k){var _=Object(c["k"])("hex-list");return Object(c["g"])(),Object(c["c"])("div",o,[Object(c["f"])("div",null,[i,k.linkHash?(Object(c["g"])(),Object(c["c"])("div",d,[p,Object(c["f"])("div",O,[Object(c["f"])("h3",null,[j,Object(c["f"])("span",v,Object(c["l"])(k.linkHash.donor),1),h]),Object(c["f"])("h2",null,[g,Object(c["f"])("span",m,Object(c["l"])(k.linkHash.receiver),1)]),y])])):(Object(c["g"])(),Object(c["c"])("div",u,[l,s,Object(c["f"])("div",f,[Object(c["f"])("a",{onClick:t[1]||(t[1]=function(){return k.onClickAdd.apply(k,arguments)}),class:"input_add"},[b]),Object.keys(a.names).length>2?(Object(c["g"])(),Object(c["c"])("div",{key:0,onClick:t[2]||(t[2]=function(){return k.onGenerate.apply(k,arguments)}),class:"input_generate"},"Create")):Object(c["d"])("",!0),Object(c["n"])(Object(c["f"])("input",{placeholder:"Add a participant...","onUpdate:modelValue":t[3]||(t[3]=function(e){return a.content=e}),onKeyup:t[4]||(t[4]=Object(c["o"])((function(){return k.onClickAdd.apply(k,arguments)}),["enter"])),onFocus:t[5]||(t[5]=function(){return k.onFocus.apply(k,arguments)}),class:[{input_focus:a.dataProvided},"input"],autocomplete:"off",autofocus:"off",type:"text"},null,34),[[c["m"],a.content]]),Object(c["f"])(_,{done:a.isGenerated,names:a.names},null,8,["done","names"])])]))])])})),_=(n("4fad"),n("ac1f"),n("5319"),n("1276"),n("3835")),x=Object(c["p"])("data-v-8f72fb06");Object(c["i"])("data-v-8f72fb06");var C={class:"text"},w=Object(c["f"])("i",{class:"fas fa-trash"},null,-1),S={key:1},H=Object(c["f"])("i",{class:"fas fa-link"},null,-1);Object(c["h"])();var P=x((function(e,t,n,r,a,o){return Object(c["g"])(),Object(c["c"])("ul",null,[(Object(c["g"])(!0),Object(c["c"])(c["a"],null,Object(c["j"])(n.names,(function(e,t){return Object(c["g"])(),Object(c["c"])("li",{key:t},[Object(c["f"])("div",C,Object(c["l"])(e.donor),1),n.done?(Object(c["g"])(),Object(c["c"])("span",S,[e.copied?(Object(c["g"])(),Object(c["c"])("a",{key:1,onClick:function(e){return o.onLink(t)}}," copied! ",8,["onClick"])):(Object(c["g"])(),Object(c["c"])("a",{key:0,onClick:function(e){return o.onLink(t)}},[H],8,["onClick"]))])):(Object(c["g"])(),Object(c["c"])("a",{key:0,onClick:function(e){return o.onDelete(t)}},[w],8,["onClick"]))])})),128))])}));function M(e){return btoa(unescape(encodeURIComponent(JSON.stringify(e)))).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}var I={name:"HexList",props:{names:Array,done:Boolean},data:function(){return{}},methods:{onDelete:function(e){delete this.names[e]},onLink:function(e){var t=this.names[e],n=location.href+"#"+M(t);navigator.clipboard.writeText(n).then((function(){t.copied=!0})).catch((function(e){console.log(e)}))}}};n("bbeb");I.render=P,I.__scopeId="data-v-8f72fb06";var A=I,G=0;function L(e){if("string"!==typeof e)return null;var t=e.replace(/-/g,"+").replace(/_/g,"/");return JSON.parse(decodeURIComponent(escape(atob(t))))}var R={name:"HexInput",computed:{linkHash:function(){var e=location.hash.replace(/^#/,"").split("#")[0];if(!e)return null;try{return L(e)}catch(t){return console.error(t),null}}},data:function(){return{dataProvided:!1,content:"",names:{},isGenerated:!1}},methods:{onFocus:function(){this.dataProvided=!0},onGenerate:function(){for(var e=Object.assign({},this.names),t=0,n=Object.entries(this.names);t<n.length;t++){var c=Object(_["a"])(n[t],2),r=c[0],a=c[1],o=Object.assign({},e);delete o[r];var i=this.getRandomKey(o);a["receiver"]=o[i].donor,delete e[i]}this.isGenerated=!0},onClickAdd:function(){this.names[G++]={donor:this.content,receiver:void 0},this.content="",this.isGenerated=!1;for(var e=0,t=Object.entries(this.names);e<t.length;e++){var n=Object(_["a"])(t[e],2),c=n[1];delete c["copied"]}},getRandomKey:function(e){var t=Object.keys(e);return t[t.length*Math.random()<<0]}},components:{HexList:A}};n("4ad8");R.render=k,R.__scopeId="data-v-e7a6ab38";var J=R,K=Object(c["p"])("data-v-213a8a52");Object(c["i"])("data-v-213a8a52");var F={class:"content"},T=Object(c["e"])("Create your own ");Object(c["h"])();var U=K((function(e,t,n,r,a,o){var i=Object(c["k"])("made-with");return Object(c["g"])(),Object(c["c"])("div",F,[Object(c["f"])("footer",null,[Object(c["f"])(i,{author:"Kévin Leprêtre",link:"https://github.com/guillaumeden"}),Object(c["f"])("p",null,[T,Object(c["f"])("a",{onClick:t[1]||(t[1]=function(){return o.onReload.apply(o,arguments)})},"here")])])])})),B=(n("9911"),n("ae0d")),D=n.n(B),N=Object(c["e"])("Made with "),V=Object(c["f"])("img",{class:"love",alt:"love",src:D.a},null,-1),W=Object(c["e"])(" by ");function Y(e,t,n,r,a,o){return Object(c["g"])(),Object(c["c"])("p",null,[N,V,W,Object(c["f"])("a",{href:n.link,class:"author"},Object(c["l"])(n.author),9,["href"])])}var $={props:{author:String,link:String}};n("63f9");$.render=Y;var q=$,z={components:{MadeWith:q},methods:{onReload:function(){document.location="https://guillaumeden.github.io/"}}};n("7569");z.render=U,z.__scopeId="data-v-213a8a52";var E=z,Q={name:"App",components:{HexInput:J,Bottom:E}};n("64be"),n("3204");Q.render=r;var X=Q,Z=Object(c["b"])(X);Z.directive("visible",{beforeMount:function(e,t){e.style.visibility=t.value?"visible":"hidden"}}),Z.mount("#app")},"63f9":function(e,t,n){"use strict";n("c62d")},"64be":function(e,t,n){"use strict";n("3068")},7569:function(e,t,n){"use strict";n("c481")},ae0d:function(e,t,n){e.exports=n.p+"img/pixel-heart.96e1f1c8.png"},bbeb:function(e,t,n){"use strict";n("1022")},c2b7:function(e,t,n){},c2dc:function(e,t,n){},c481:function(e,t,n){},c62d:function(e,t,n){}});
//# sourceMappingURL=app.b8ff5272.js.map