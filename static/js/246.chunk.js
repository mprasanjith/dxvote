(this.webpackJsonpdxvote=this.webpackJsonpdxvote||[]).push([[246],{"1p9r":function(e,n){!function(e){function n(e,n){return"___"+e.toUpperCase()+n+"___"}Object.defineProperties(e.languages["markup-templating"]={},{buildPlaceholders:{value:function(t,a,o,r){if(t.language===a){var c=t.tokenStack=[];t.code=t.code.replace(o,(function(e){if("function"==typeof r&&!r(e))return e;for(var o,i=c.length;-1!==t.code.indexOf(o=n(a,i));)++i;return c[i]=e,o})),t.grammar=e.languages.markup}}},tokenizePlaceholders:{value:function(t,a){if(t.language===a&&t.tokenStack){t.grammar=e.languages[a];var o=0,r=Object.keys(t.tokenStack);!function c(i){for(var u=0;u<i.length&&!(o>=r.length);u++){var p=i[u];if("string"==typeof p||p.content&&"string"==typeof p.content){var s=r[o],g=t.tokenStack[s],l="string"==typeof p?p:p.content,f=n(a,s),k=l.indexOf(f);if(-1<k){++o;var h=l.substring(0,k),d=new e.Token(a,e.tokenize(g,t.grammar),"language-"+a,g),v=l.substring(k+f.length),m=[];h&&m.push.apply(m,c([h])),m.push(d),v&&m.push.apply(m,c([v])),"string"==typeof p?i.splice.apply(i,[u,1].concat(m)):p.content=m}}else p.content&&c(p.content)}return i}(t.tokens)}}}})}(Prism)}}]);
//# sourceMappingURL=246.chunk.js.map