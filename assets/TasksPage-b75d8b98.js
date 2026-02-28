import{c as W,g as re,r as J,j as m}from"./index-6b6cc400.js";var V={exports:{}};(function(w){var O=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var a=function(c){var p=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,b=0,x={},i={manual:c.Prism&&c.Prism.manual,disableWorkerMessageHandler:c.Prism&&c.Prism.disableWorkerMessageHandler,util:{encode:function t(e){return e instanceof v?new v(e.type,t(e.content),e.alias):Array.isArray(e)?e.map(t):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(t){return Object.prototype.toString.call(t).slice(8,-1)},objId:function(t){return t.__id||Object.defineProperty(t,"__id",{value:++b}),t.__id},clone:function t(e,r){r=r||{};var n,s;switch(i.util.type(e)){case"Object":if(s=i.util.objId(e),r[s])return r[s];n={},r[s]=n;for(var l in e)e.hasOwnProperty(l)&&(n[l]=t(e[l],r));return n;case"Array":return s=i.util.objId(e),r[s]?r[s]:(n=[],r[s]=n,e.forEach(function(u,o){n[o]=t(u,r)}),n);default:return e}},getLanguage:function(t){for(;t;){var e=p.exec(t.className);if(e)return e[1].toLowerCase();t=t.parentElement}return"none"},setLanguage:function(t,e){t.className=t.className.replace(RegExp(p,"gi"),""),t.classList.add("language-"+e)},currentScript:function(){if(typeof document>"u")return null;if(document.currentScript&&document.currentScript.tagName==="SCRIPT"&&1<2)return document.currentScript;try{throw new Error}catch(n){var t=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(n.stack)||[])[1];if(t){var e=document.getElementsByTagName("script");for(var r in e)if(e[r].src==t)return e[r]}return null}},isActive:function(t,e,r){for(var n="no-"+e;t;){var s=t.classList;if(s.contains(e))return!0;if(s.contains(n))return!1;t=t.parentElement}return!!r}},languages:{plain:x,plaintext:x,text:x,txt:x,extend:function(t,e){var r=i.util.clone(i.languages[t]);for(var n in e)r[n]=e[n];return r},insertBefore:function(t,e,r,n){n=n||i.languages;var s=n[t],l={};for(var u in s)if(s.hasOwnProperty(u)){if(u==e)for(var o in r)r.hasOwnProperty(o)&&(l[o]=r[o]);r.hasOwnProperty(u)||(l[u]=s[u])}var d=n[t];return n[t]=l,i.languages.DFS(i.languages,function(F,$){$===d&&F!=t&&(this[F]=l)}),l},DFS:function t(e,r,n,s){s=s||{};var l=i.util.objId;for(var u in e)if(e.hasOwnProperty(u)){r.call(e,u,e[u],n||u);var o=e[u],d=i.util.type(o);d==="Object"&&!s[l(o)]?(s[l(o)]=!0,t(o,r,null,s)):d==="Array"&&!s[l(o)]&&(s[l(o)]=!0,t(o,r,u,s))}}},plugins:{},highlightAll:function(t,e){i.highlightAllUnder(document,t,e)},highlightAllUnder:function(t,e,r){var n={callback:r,container:t,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};i.hooks.run("before-highlightall",n),n.elements=Array.prototype.slice.apply(n.container.querySelectorAll(n.selector)),i.hooks.run("before-all-elements-highlight",n);for(var s=0,l;l=n.elements[s++];)i.highlightElement(l,e===!0,n.callback)},highlightElement:function(t,e,r){var n=i.util.getLanguage(t),s=i.languages[n];i.util.setLanguage(t,n);var l=t.parentElement;l&&l.nodeName.toLowerCase()==="pre"&&i.util.setLanguage(l,n);var u=t.textContent,o={element:t,language:n,grammar:s,code:u};function d($){o.highlightedCode=$,i.hooks.run("before-insert",o),o.element.innerHTML=o.highlightedCode,i.hooks.run("after-highlight",o),i.hooks.run("complete",o),r&&r.call(o.element)}if(i.hooks.run("before-sanity-check",o),l=o.element.parentElement,l&&l.nodeName.toLowerCase()==="pre"&&!l.hasAttribute("tabindex")&&l.setAttribute("tabindex","0"),!o.code){i.hooks.run("complete",o),r&&r.call(o.element);return}if(i.hooks.run("before-highlight",o),!o.grammar){d(i.util.encode(o.code));return}if(e&&c.Worker){var F=new Worker(i.filename);F.onmessage=function($){d($.data)},F.postMessage(JSON.stringify({language:o.language,code:o.code,immediateClose:!0}))}else d(i.highlight(o.code,o.grammar,o.language))},highlight:function(t,e,r){var n={code:t,grammar:e,language:r};if(i.hooks.run("before-tokenize",n),!n.grammar)throw new Error('The language "'+n.language+'" has no grammar.');return n.tokens=i.tokenize(n.code,n.grammar),i.hooks.run("after-tokenize",n),v.stringify(i.util.encode(n.tokens),n.language)},tokenize:function(t,e){var r=e.rest;if(r){for(var n in r)e[n]=r[n];delete e.rest}var s=new E;return C(s,s.head,t),S(t,s,e,s.head,0),R(s)},hooks:{all:{},add:function(t,e){var r=i.hooks.all;r[t]=r[t]||[],r[t].push(e)},run:function(t,e){var r=i.hooks.all[t];if(!(!r||!r.length))for(var n=0,s;s=r[n++];)s(e)}},Token:v};c.Prism=i;function v(t,e,r,n){this.type=t,this.content=e,this.alias=r,this.length=(n||"").length|0}v.stringify=function t(e,r){if(typeof e=="string")return e;if(Array.isArray(e)){var n="";return e.forEach(function(d){n+=t(d,r)}),n}var s={type:e.type,content:t(e.content,r),tag:"span",classes:["token",e.type],attributes:{},language:r},l=e.alias;l&&(Array.isArray(l)?Array.prototype.push.apply(s.classes,l):s.classes.push(l)),i.hooks.run("wrap",s);var u="";for(var o in s.attributes)u+=" "+o+'="'+(s.attributes[o]||"").replace(/"/g,"&quot;")+'"';return"<"+s.tag+' class="'+s.classes.join(" ")+'"'+u+">"+s.content+"</"+s.tag+">"};function j(t,e,r,n){t.lastIndex=e;var s=t.exec(r);if(s&&n&&s[1]){var l=s[1].length;s.index+=l,s[0]=s[0].slice(l)}return s}function S(t,e,r,n,s,l){for(var u in r)if(!(!r.hasOwnProperty(u)||!r[u])){var o=r[u];o=Array.isArray(o)?o:[o];for(var d=0;d<o.length;++d){if(l&&l.cause==u+","+d)return;var F=o[d],$=F.inside,G=!!F.lookbehind,H=!!F.greedy,K=F.alias;if(H&&!F.pattern.global){var Q=F.pattern.toString().match(/[imsuy]*$/)[0];F.pattern=RegExp(F.pattern.source,Q+"g")}for(var U=F.pattern||F,y=n.next,k=s;y!==e.tail&&!(l&&k>=l.reach);k+=y.value.length,y=y.next){var T=y.value;if(e.length>t.length)return;if(!(T instanceof v)){var q=1,A;if(H){if(A=j(U,k,t,G),!A||A.index>=t.length)break;var M=A.index,ee=A.index+A[0].length,_=k;for(_+=y.value.length;M>=_;)y=y.next,_+=y.value.length;if(_-=y.value.length,k=_,y.value instanceof v)continue;for(var z=y;z!==e.tail&&(_<ee||typeof z.value=="string");z=z.next)q++,_+=z.value.length;q--,T=t.slice(k,_),A.index-=k}else if(A=j(U,0,T,G),!A)continue;var M=A.index,I=A[0],D=T.slice(0,M),Y=T.slice(M+I.length),N=k+T.length;l&&N>l.reach&&(l.reach=N);var L=y.prev;D&&(L=C(e,L,D),k+=D.length),Z(e,L,q);var te=new v(u,$?i.tokenize(I,$):I,K,I);if(y=C(e,L,te),Y&&C(e,y,Y),q>1){var B={cause:u+","+d,reach:N};S(t,e,r,y.prev,k,B),l&&B.reach>l.reach&&(l.reach=B.reach)}}}}}}function E(){var t={value:null,prev:null,next:null},e={value:null,prev:t,next:null};t.next=e,this.head=t,this.tail=e,this.length=0}function C(t,e,r){var n=e.next,s={value:r,prev:e,next:n};return e.next=s,n.prev=s,t.length++,s}function Z(t,e,r){for(var n=e.next,s=0;s<r&&n!==t.tail;s++)n=n.next;e.next=n,n.prev=e,t.length-=s}function R(t){for(var e=[],r=t.head.next;r!==t.tail;)e.push(r.value),r=r.next;return e}if(!c.document)return c.addEventListener&&(i.disableWorkerMessageHandler||c.addEventListener("message",function(t){var e=JSON.parse(t.data),r=e.language,n=e.code,s=e.immediateClose;c.postMessage(i.highlight(n,i.languages[r],r)),s&&c.close()},!1)),i;var f=i.util.currentScript();f&&(i.filename=f.src,f.hasAttribute("data-manual")&&(i.manual=!0));function g(){i.manual||i.highlightAll()}if(!i.manual){var h=document.readyState;h==="loading"||h==="interactive"&&f&&f.defer?document.addEventListener("DOMContentLoaded",g):window.requestAnimationFrame?window.requestAnimationFrame(g):window.setTimeout(g,16)}return i}(O);w.exports&&(w.exports=a),typeof W<"u"&&(W.Prism=a),a.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},a.languages.markup.tag.inside["attr-value"].inside.entity=a.languages.markup.entity,a.languages.markup.doctype.inside["internal-subset"].inside=a.languages.markup,a.hooks.add("wrap",function(c){c.type==="entity"&&(c.attributes.title=c.content.replace(/&amp;/,"&"))}),Object.defineProperty(a.languages.markup.tag,"addInlined",{value:function(p,b){var x={};x["language-"+b]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:a.languages[b]},x.cdata=/^<!\[CDATA\[|\]\]>$/i;var i={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:x}};i["language-"+b]={pattern:/[\s\S]+/,inside:a.languages[b]};var v={};v[p]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return p}),"i"),lookbehind:!0,greedy:!0,inside:i},a.languages.insertBefore("markup","cdata",v)}}),Object.defineProperty(a.languages.markup.tag,"addAttribute",{value:function(c,p){a.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+c+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[p,"language-"+p],inside:a.languages[p]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),a.languages.html=a.languages.markup,a.languages.mathml=a.languages.markup,a.languages.svg=a.languages.markup,a.languages.xml=a.languages.extend("markup",{}),a.languages.ssml=a.languages.xml,a.languages.atom=a.languages.xml,a.languages.rss=a.languages.xml,function(c){var p=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;c.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+p.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+p.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+p.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+p.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:p,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},c.languages.css.atrule.inside.rest=c.languages.css;var b=c.languages.markup;b&&(b.tag.addInlined("style","css"),b.tag.addAttribute("style","css"))}(a),a.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},a.languages.javascript=a.languages.extend("clike",{"class-name":[a.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),a.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,a.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:a.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:a.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:a.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:a.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:a.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),a.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:a.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),a.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),a.languages.markup&&(a.languages.markup.tag.addInlined("script","javascript"),a.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),a.languages.js=a.languages.javascript,function(){if(typeof a>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var c="Loading…",p=function(f,g){return"✖ Error "+f+" while fetching file: "+g},b="✖ Error: File does not exist or is empty",x={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},i="data-src-status",v="loading",j="loaded",S="failed",E="pre[data-src]:not(["+i+'="'+j+'"]):not(['+i+'="'+v+'"])';function C(f,g,h){var t=new XMLHttpRequest;t.open("GET",f,!0),t.onreadystatechange=function(){t.readyState==4&&(t.status<400&&t.responseText?g(t.responseText):t.status>=400?h(p(t.status,t.statusText)):h(b))},t.send(null)}function Z(f){var g=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(f||"");if(g){var h=Number(g[1]),t=g[2],e=g[3];return t?e?[h,Number(e)]:[h,void 0]:[h,h]}}a.hooks.add("before-highlightall",function(f){f.selector+=", "+E}),a.hooks.add("before-sanity-check",function(f){var g=f.element;if(g.matches(E)){f.code="",g.setAttribute(i,v);var h=g.appendChild(document.createElement("CODE"));h.textContent=c;var t=g.getAttribute("data-src"),e=f.language;if(e==="none"){var r=(/\.(\w+)$/.exec(t)||[,"none"])[1];e=x[r]||r}a.util.setLanguage(h,e),a.util.setLanguage(g,e);var n=a.plugins.autoloader;n&&n.loadLanguages(e),C(t,function(s){g.setAttribute(i,j);var l=Z(g.getAttribute("data-range"));if(l){var u=s.split(/\r\n?|\n/g),o=l[0],d=l[1]==null?u.length:l[1];o<0&&(o+=u.length),o=Math.max(0,Math.min(o-1,u.length)),d<0&&(d+=u.length),d=Math.max(0,Math.min(d,u.length)),s=u.slice(o,d).join(`
`),g.hasAttribute("data-start")||g.setAttribute("data-start",String(o+1))}h.textContent=s,a.highlightElement(h)},function(s){g.setAttribute(i,S),h.textContent=s})}}),a.plugins.fileHighlight={highlight:function(g){for(var h=(g||document).querySelectorAll(E),t=0,e;e=h[t++];)a.highlightElement(e)}};var R=!1;a.fileHighlight=function(){R||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),R=!0),a.plugins.fileHighlight.highlight.apply(this,arguments)}}()})(V);var ne=V.exports;const se=re(ne);Prism.languages.javascript=Prism.languages.extend("clike",{"class-name":[Prism.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/});Prism.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:Prism.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:Prism.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/});Prism.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}});Prism.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}});Prism.languages.markup&&(Prism.languages.markup.tag.addInlined("script","javascript"),Prism.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript"));Prism.languages.js=Prism.languages.javascript;const ae="_pre_1ojyo_1",ie={pre:ae},X=({code:w,language:O="javascript"})=>{const a=J.useRef(null);return J.useEffect(()=>{a.current&&se.highlightElement(a.current)},[w]),m.jsx("pre",{className:ie.pre,children:m.jsx("code",{ref:a,className:`language-${O}`,children:w})})},oe="_code_13xmf_1",le={code:oe},ue=({children:w})=>m.jsx("span",{className:le.code,children:w}),ce="_block_1qm98_1",ge="_title_1qm98_9",de="_number_1qm98_13",pe="_link_1qm98_19",me="_requirements_1qm98_34",fe="_summary_1qm98_40",he="_description_1qm98_44",P={block:ce,title:ge,number:de,link:pe,requirements:me,summary:fe,description:he},ve=({task:w})=>{const{id:O,title:a,link:c,requirements:p,description:b,inlineCode:x,starterCode:i,solution:v,language:j="javascript"}=w;return m.jsxs("section",{className:P.block,children:[m.jsxs("h3",{className:P.title,children:[m.jsx("span",{className:P.number,children:O})," ",a,c&&m.jsx("a",{href:c,target:"_blank",rel:"noreferrer",className:P.link,children:"▶ Відео YouTube"})]}),p&&m.jsx("ul",{className:P.requirements,children:p.map((S,E)=>m.jsx("li",{children:S},`${S}-${E}`))}),x&&m.jsx("p",{className:P.inline,children:m.jsx(ue,{children:x})}),i&&m.jsx(X,{code:i,language:j}),v&&m.jsxs("details",{className:P.solution,children:[m.jsx("summary",{className:P.summary,children:"Показати рішення"}),m.jsx(X,{code:v,language:j}),b&&m.jsx("p",{className:P.description,children:b})]})]})},Fe=[{id:1,link:"https://www.youtube.com/watch?v=OZPOO79Y4jk&t=4503s",title:"Проміс. Реалізуй функцію 'resolve' [ 55:20 ]",requirements:["На вхід функції передається масив промісів, а на виході вона повертає новий проміс.","Новий проміс працює за такими правилами:","1) Якщо в масиві є хоча б один успішний проміс — повернути результат цього промісу.","2) Якщо всі проміси завершуються з reject — повернути reject з масивом усіх помилок."],inlineCode:"Вихід: Кейс 1 — Promise => 5 ; Кейс 2 — Promise => Error(errors) ;",starterCode:`function resolve(promises) {}
[Promise.resolve(1), Promise.resolve(2)];
[Promise.reject(3), Promise.resolve(4)];
[Promise.reject(5), Promise.reject(6)];`,solution:`function resolve(promises) {
  return new Promise((resolve, reject) => {
    const errors = [];
    let rejectedCount = 0;

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then(result => {
          resolve(result); // перший успішний — готово
        })
        .catch(error => {
          errors[index] = error;
          rejectedCount++;

          if (rejectedCount === promises.length) {
            reject(errors); // всі впали
          }
        });
    });
  });
}
resolve([Promise.resolve(1), Promise.resolve(2)]).then(console.log); // 1
resolve([Promise.reject(3), Promise.resolve(4)]).then(console.log); // 4
resolve([Promise.reject(5), Promise.reject(6)]).catch(console.log); // [5, 6]`,description:`Відразу викликає resolve при першому успішному промісі, навіть якщо інші
     проміси можуть виконатися пізніше. Це стандартна поведінка промісів, але треба пам’ятати.
    Масив errors зберігає помилки по індексу, що добре для порядку, але не обов’язково потрібно,
    можна просто робити errors.push(error).`},{id:2,link:"https://www.youtube.com/watch?v=OZPOO79Y4jk&t=4503s",title:"Проміс. Реалізуй функцію 'resolve': Варіант 2 ",requirements:["Сучасний і компактний варіант цієї функції через async/await.","Він робить те ж саме, але код читати легше:"],solution:`async function resolve(promises) {
  if (promises.length === 0) {
    return Promise.reject([]); // порожній масив
  }
  const results = await Promise.allSettled(promises);

  // шукаємо перший успішний проміс
  const fulfilled = results.find(r => r.status === 'fulfilled');
  if (fulfilled) {
    return fulfilled.value;
    }
    
  // якщо всі проміси відхилилися
  const errors = results
    .filter(r => r.status === 'rejected')
    .map(r => r.reason);

  // return Promise.reject(errors);
  throw errors;
  // throw results.filter(r => r.status === 'rejected').map(r => r.reason);
}
resolve([Promise.resolve(1), Promise.resolve(2)]).then(console.log); // 1
resolve([Promise.reject(3), Promise.resolve(4)]).then(console.log); // 4
resolve([Promise.reject(5), Promise.reject(6)]).catch(console.log); // [5, 6]`},{id:3,link:"https://www.youtube.com/watch?v=OZPOO79Y4jk&t=4503s",title:"Проміс. Реалізуй функцію 'resolve': Варіант 3 ",requirements:["Функція приймає масив значень або Promise.,","Функція повинна повертати новий Promise.","📌 Логіка роботи:","✅ Якщо хоча б один проміс виконався успішно,","функція повинна: завершитися зі статусом resolve","повернути масив усіх успішних результатів.","❌ Якщо всі проміси завершилися з помилкою,","функція повинна: завершитися зі статусом reject","повернути масив усіх помилок (з урахуванням їхніх індексів)."],starterCode:` customPromiseResolver([Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)])
// → resolves with [1, 2, 3]

 customPromiseResolver([Promise.reject(4), Promise.resolve(5), Promise.resolve(6)])
// → resolves with [5, 6]

r customPromiseResolver([Promise.reject(7), Promise.reject(8), Promise.reject(9)])
// → rejects with [7, 8, 9]`,solution:`
  function customPromiseResolver(promises) {
  const errors = [];
  let rejectedCount = 0;
  const fulfilledValues = [];
  let settledCount = 0;

  return new Promise((resolve, reject) => {
    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then(result => {
          fulfilledValues.push(result);
        })
        .catch(error => {
          errors[index] = error;
          rejectedCount++;
          if (rejectedCount === promises.length) {
            reject(errors);
          }
        })
        .finally(() => {
          settledCount += 1;
          if (settledCount === promises.length) {
            resolve(fulfilledValues);
          }
        });
    });
  });
}
customPromiseResolver([
  Promise.resolve(1),
  Promise.resolve(2),
  Promise.resolve(3),
]).then(console.log);
// [1, 2, 3]
customPromiseResolver([
  Promise.reject(4),
  Promise.resolve(5),
  Promise.resolve(6),
]).then(console.log);
// [5, 6]
customPromiseResolver([
  Promise.reject(7),
  Promise.reject(8),
  Promise.reject(9),
]).catch(console.log);
// [7, 8, 9]`,description:""},{id:4,link:"https://www.youtube.com/watch?v=OZPOO79Y4jk&t=4503s",title:"Групування. Дано масив цілих натуральних чисел [ 1:07:00 ]",requirements:["Потрібно згрупувати між собою числа ,","які можна отримати шляхом перестановки їхніх цифр.","Тобто всі числа в числі одиникові просто переставлені по різному."],starterCode:`function digitPermutation(arr) {
  // your code here
}
console.clear();
console.log('start test');
console.log(
  digitPermutation([1230, 199, 2301, 1230, 110001, 3021, 101010, 991, 9]);
  // Очікувано: [[9],[199,991],[1230,2301,1230,3021],[110001,101010]]
);
console.log(digitPermutation([11], [22])); // [[11],[22]]
console.log(digitPermutation([11, 11, 11])); // [[11,11,11]]
console.log(digitPermutation([111111111112], [122222222222])); //[[1222222222],[111111111112]]
console.log('end test');`,solution:`function digitPermutation(arr) {
  const map = new Map();

  arr.forEach(num => {
    // Перетворюємо число на рядок, сортуємо цифри та отримуємо ключ
    const key = String(num).split('').sort().join('');
    if (!map.has(key)) {
      map.set(key, []);
    }
    map.get(key).push(num);
  });

  // Збираємо результат: лише групи з більше ніж одного числа
  const result = [];
  for (const group of map.values()) {
    if (group.length > 1) {
      result.push(group);
    }
  }

  return result;
}

// Приклади
console.clear();
console.log('start test');
console.log(digitPermutation([1230, 199, 2301, 1230, 110001, 3021, 101010, 991, 9]));
// Очікувано: [[1230, 2301, 1230], [199, 991], [110001, 101010], [9]]
console.log(digitPermutation([11, 22])); // [[11],[22]]
console.log(digitPermutation([11, 11, 11]));// [[11, 11, 11]]
console.log(digitPermutation([111111111112, 1222222222])); // [[111111111112], [1222222222]]
console.log('end test');
`,description:`Для кожного числа створюється ключ із відсортованих цифр.
Map зберігає всі числа з однаковим ключем в масиві.
Всі масиви (групи) повертаються як результат.
✅ Таким чином, навіть одиничні числа (що не мають перестановок) потрапляють
у групу по одному.`},{id:5,link:"",title:"Групування. Дано масив цілих натуральних чисел ",requirements:["Версія функції, де повертаються тільки групи з більше ніж одного числа –","тобто справжні перестановки цифр."],starterCode:`console.log(digitPermutation([1230, 199, 2301, 1230, 110001, 3021, 101010, 991, 9]));
// Очікувано: [[1230, 2301, 1230], [199, 991], [110001, 101010]]
console.log(digitPermutation([11, 22])); // []
console.log(digitPermutation([11, 11, 11])); // [[11, 11, 11]]
console.log(digitPermutation([111111111112, 1222222222])); // []`,solution:`function digitPermutation(arr) {
  const map = new Map();

  arr.forEach(num => {
    const key = String(num).split('').sort().join('');
    if (!map.has(key)) { // Якщо такого ключа ще немає — створити його
      map.set(key, []); // створює новий запис у Map: ключ: key  - значення: порожній масив
    }
    map.get(key).push(num); // Кладемо число num у відповідну групу
  });

  // Повертаємо тільки групи, де більше одного числа
  const result = Array.from(map.values()).filter(group => group.length > 1);
  return result;
}

// Тести
console.clear();
console.log('start test');
console.log(digitPermutation([1230, 199, 2301, 1230, 110001, 3021, 101010, 991, 9]));
// Очікувано: [[1230, 2301, 1230], [199, 991], [110001, 101010]]
console.log(digitPermutation([11, 22])); // []
console.log(digitPermutation([11, 11, 11])); // [[11, 11, 11]]
console.log(digitPermutation([111111111112, 1222222222])); // []
console.log('end test');

`,description:`Тепер одиничні числа та унікальні перестановки не включаються,
     а залишаються лише справжні групи. map — це Map, структура даних для зберігання пар
ключ → значення`},{id:6,link:"",title:"Групування. Дано масив цілих натуральних чисел ",requirements:["Варіант з об’єктом {}","Тобто всі числа в числі одиникові просто переставлені по різному."],starterCode:`function digitPermutation(arr) {
     // your code here  }
    console.log(digitPermutation([1230, 199, 2301, 1230, 110001, 3021, 101010, 991, 9]);
    // Очікувано: [[9],[199,991],[1230,2301,1230,3021],[110001,101010]]);
    console.log(digitPermutation([11], [22])); // [[11],[22]]
    console.log(digitPermutation([11, 11, 11])); // [[11,11,11]]
    console.log(digitPermutation([111111111112], [122222222222])); //[[1222222222],[111111111112]]`,solution:`function digitPermutation(arr) {
  const obj = {};

  for (const num of arr) {
    const key = String(num).split('').sort().join('');

    if (!obj[key]) {
      obj[key] = [];
    }

    obj[key].push(num);
  }

  return Object.values(obj);
}

console.log(digitPermutation([1230, 199, 2301, 1230, 110001, 3021, 101010, 991, 9]));
// Очікувано: [[1230, 2301, 1230], [199, 991], [110001, 101010], [9]]
console.log(digitPermutation([11, 22])); // [[11],[22]]
console.log(digitPermutation([11, 11, 11]));// [[11, 11, 11]]
console.log(digitPermutation([111111111112, 1222222222])); // [[111111111112], [1222222222]]
`,description:`Важлива відмінність Map vs Object
  Map: Будь-які ключі- has()	- Кращий для великих даних  ///              
	 Object:  Ключі → рядки - if (!obj[key]) - Простий і швидкий. Чому я бачу:
   (4) [Array(3), Array(2), Array(2), Array(1)] замість [[1230, 2301, 1230], [199, 991], [110001, 101010], [9]]
   Це одне й те саме. DevTools просто згортає вкладені масиви, щоб не захаращувати консоль.
   Примусово вивести «як у прикладі».  Варіант 1 — через JSON.stringify:
   console.log(JSON.stringify(digitPermutation([
  1230, 199, 2301, 1230, 110001, 3021, 101010, 991, 9
])));`}],ye="_title_f5mrh_1",be={title:ye},we=()=>m.jsxs("main",{style:{padding:"4px"},children:[m.jsx("h2",{className:be.title,children:"Задачі JS"}),Fe.map(w=>m.jsx(ve,{task:w},w.id))]});export{we as default};
