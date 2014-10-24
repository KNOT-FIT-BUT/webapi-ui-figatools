(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        root.templatizer = factory();
    }
}(this, function () {
    var jade=function(){function r(r){return null!=r&&""!==r}function n(e){return Array.isArray(e)?e.map(n).filter(r).join(" "):e}var e={};return e.merge=function t(n,e){if(1===arguments.length){for(var a=n[0],s=1;s<n.length;s++)a=t(a,n[s]);return a}var i=n["class"],l=e["class"];(i||l)&&(i=i||[],l=l||[],Array.isArray(i)||(i=[i]),Array.isArray(l)||(l=[l]),n["class"]=i.concat(l).filter(r));for(var o in e)"class"!=o&&(n[o]=e[o]);return n},e.joinClasses=n,e.cls=function(r,t){for(var a=[],s=0;s<r.length;s++)a.push(t&&t[s]?e.escape(n([r[s]])):n(r[s]));var i=n(a);return i.length?' class="'+i+'"':""},e.attr=function(r,n,t,a){return"boolean"==typeof n||null==n?n?" "+(a?r:r+'="'+r+'"'):"":0==r.indexOf("data")&&"string"!=typeof n?" "+r+"='"+JSON.stringify(n).replace(/'/g,"&apos;")+"'":t?" "+r+'="'+e.escape(n)+'"':" "+r+'="'+n+'"'},e.attrs=function(r,t){var a=[],s=Object.keys(r);if(s.length)for(var i=0;i<s.length;++i){var l=s[i],o=r[l];"class"==l?(o=n(o))&&a.push(" "+l+'="'+o+'"'):a.push(e.attr(l,o,!1,t))}return a.join("")},e.escape=function(r){var n=String(r).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");return n===""+r?r:n},e.rethrow=function a(r,n,e,t){if(!(r instanceof Error))throw r;if(!("undefined"==typeof window&&n||t))throw r.message+=" on line "+e,r;try{t=t||require("fs").readFileSync(n,"utf8")}catch(s){a(r,null,e)}var i=3,l=t.split("\n"),o=Math.max(e-i,0),c=Math.min(l.length,e+i),i=l.slice(o,c).map(function(r,n){var t=n+o+1;return(t==e?"  > ":"    ")+t+"| "+r}).join("\n");throw r.path=n,r.message=(n||"Jade")+":"+e+"\n"+i+"\n\n"+r.message,r},e}();

    var templatizer = {};
    templatizer["blocks"] = {};
    templatizer["pages"] = {};

    // blocks\entityInfo.jade compiled template
    templatizer["blocks"]["entityInfo"] = function tmpl_blocks_entityInfo() {
        return '<div id="rightTop">  <div id="entityInfoHeader" class="ui inverted teal menu"><div class="title item"><i class="info icon"> </i>Textual Entity Information</div><div class="icon menu right"><a class="item"><i class="browser icon"></i></a><a class="item active"><i class="list layout icon"></i></a><a class="item"><i class="dashboard icon"></i></a></div></div><div id="entityInfoContent"></div></div>';
    };

    // blocks\input.jade compiled template
    templatizer["blocks"]["input"] = function tmpl_blocks_input(locals) {
        var buf = [];
        var jade_mixins = {};
        var jade_interp;
        return buf.join("");
    };

    // blocks\resultList.jade compiled template
    templatizer["blocks"]["resultList"] = function tmpl_blocks_resultList(locals) {
        var buf = [];
        var jade_mixins = {};
        var jade_interp;
        return buf.join("");
    };

    // body.jade compiled template
    templatizer["body"] = function tmpl_body() {
        return '<body id="feed" role="page-container"></body>';
    };

    // head.jade compiled template
    templatizer["head"] = function tmpl_head() {
        return '<meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0"/><meta name="apple-mobile-web-app-capable" content="yes"/>';
    };

    // pages\autocomplete.jade compiled template
    templatizer["pages"]["autocomplete"] = function tmpl_pages_autocomplete() {
        return '<div class="ui celled grid"><div class="seven wide middle column"><div id="stacionary"><div class="ui form"><div class="field"><label>User Input:</label><div class="ui fluid icon input"><input type="text" id="inputBox"/><i class="search icon"></i></div></div><div class="field"><label>Automata:</label><div id="fsaForm" class="ui dropdown selection fluid"><input type="hidden" name="fsaAutomat"/><div class="default text">.......</div><i class="dropdown icon"></i><div id="fsaList" class="menu"></div></div></div></div><div class="ui divider"></div></div><div id="sugestion" class="ui divided inbox selection list active tab"></div></div><div class="nine wide middle column"><h2 class="ui header">Knowledge Base Entry:</h2><div id="kbEntry"></div></div></div>';
    };

    // pages\spellcheck.jade compiled template
    templatizer["pages"]["spellcheck"] = function tmpl_pages_spellcheck() {
        return '<div class="ui"><h1>This is spellcheck.</h1></div>';
    };

    return templatizer;
}));