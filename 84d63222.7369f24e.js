(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{159:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return l}));var r=n(1),o=n(10),a=(n(0),n(175)),i={id:"clojure",title:"Clojure"},c={id:"development-infrastructure/continuous-integration/clojure",title:"Clojure",description:"[**Clojure**](https://clojure.org/) is a dialect of the Lisp programming language that runs on the Java virtual machine, Common Language Runtime, and JavaScript engines; the Foundation hosts [some Clojure projects](https://finos.github.com/) that can be browsed as examples.",source:"@site/../docs/development-infrastructure/continuous-integration/clojure.md",permalink:"/open-developer-platform/docs/development-infrastructure/continuous-integration/clojure",editUrl:"https://github.com/finos/open-developer-platform/edit/master/website/../docs/development-infrastructure/continuous-integration/clojure.md",sidebar:"mainSidebar",previous:{title:"Continuous Integration",permalink:"/open-developer-platform/docs/development-infrastructure/continuous-integration/intro"},next:{title:"C#",permalink:"/open-developer-platform/docs/development-infrastructure/continuous-integration/csharp"}},u=[{value:"Badges",id:"badges",children:[]},{value:"Continuous Integration",id:"continuous-integration",children:[]}],p={rightToc:u};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://clojure.org/"}),Object(a.b)("strong",{parentName:"a"},"Clojure"))," is a dialect of the Lisp programming language that runs on the Java virtual machine, Common Language Runtime, and JavaScript engines; the Foundation hosts ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://finos.github.com/"}),"some Clojure projects")," that can be browsed as examples."),Object(a.b)("p",null,"Clojure code can be built and distributed using different build tools, but ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"http://leiningen.org/"}),"Leiningen")," is the only most commonly used at FINOS.  The deployable unit for Leiningen projects is a JAR file and matching POM, which means that Clojure projects can be deployed to any Maven repository."),Object(a.b)("p",null,"Wherever appropriate, the Foundation recommends following the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"java"}),"deployment rules for Java")," (artifact naming and versioning, in particular)."),Object(a.b)("h2",{id:"badges"},"Badges"),Object(a.b)("p",null,"Badges can be added at the top of the project's root-level ",Object(a.b)("inlineCode",{parentName:"p"},"README.md")," file, using the following Markdown syntax:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"[![Clojars Project](https://img.shields.io/clojars/v/<group id>/<artifact id>.svg)](https://clojars.org/<group id>/<artifact id>)\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"[![Maven Central](https://img.shields.io/maven-central/v/<group id>/<artifact id>.svg?maxAge=2592000)](http://search.maven.org/#artifactdetails%7C<group id>%7C<artifact id>%7C2%7Cpom)\n")),Object(a.b)("h2",{id:"continuous-integration"},"Continuous Integration"),Object(a.b)("p",null,"Check ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.travis-ci.com/user/languages/clojure/"}),"Travis CI support for Clojure")," in order to run build, test and deployment processes periodically or on commit.  A (",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/symphonyoss/clj-symphony/blob/master/.travis.yml"}),".travis.yml"),") is available in the Symphony program's clj-symphony project."))}l.isMDXComponent=!0},175:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},s=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),s=l(n),m=r,b=s["".concat(i,".").concat(m)]||s[m]||d[m]||a;return n?o.a.createElement(b,c({ref:t},p,{components:n})):o.a.createElement(b,c({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);