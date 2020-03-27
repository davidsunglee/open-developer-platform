(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{154:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return l}));var r=n(1),o=n(10),a=(n(0),n(175)),c=n(177),i={id:"csharp",title:"C#"},s={id:"development-infrastructure/continuous-integration/csharp",title:"C#",description:"import useBaseUrl from '@docusaurus/useBaseUrl';",source:"@site/../docs/development-infrastructure/continuous-integration/csharp.mdx",permalink:"/open-developer-platform/docs/development-infrastructure/continuous-integration/csharp",editUrl:"https://github.com/finos/open-developer-platform/edit/master/website/../docs/development-infrastructure/continuous-integration/csharp.mdx",sidebar:"mainSidebar",previous:{title:"Clojure",permalink:"/open-developer-platform/docs/development-infrastructure/continuous-integration/clojure"},next:{title:"Java",permalink:"/open-developer-platform/docs/development-infrastructure/continuous-integration/java"}},u=[{value:"Build",id:"build",children:[]},{value:"Release on NuGet",id:"release-on-nuget",children:[]}],p={rightToc:u};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://msdn.microsoft.com/en-us/library/z1zx9t92.aspx"}),Object(a.b)("strong",{parentName:"a"},"C#"))," is an object-oriented language that runs on the .NET Framework; feel free to browse the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://finos.github.com/"}),"Foundation hosted projects written in C#"),"."),Object(a.b)("h2",{id:"build"},"Build"),Object(a.b)("p",null,"The easiest way to locally build a C# project is to ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://msdn.microsoft.com/en-us/library/5tdasz7h.aspx"}),"use Visual Studio"),", although it's also possible to use the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://msdn.microsoft.com/en-us/library/dd393574.aspx"}),"MSBuild")," command-line tool; you can find more info on ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://msdn.microsoft.com/en-us/library/cyz1h6zd.aspx"}),"Microsoft Developer Network"),"."),Object(a.b)("p",null,"There is an open source, cross-platform alternative to the .NET Framework implementation called ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"http://www.mono-project.com/"}),"Mono"),", based on the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"http://www.mono-project.com/docs/about-mono/languages/ecma/"}),"ECMA")," standards for C# and the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"http://www.mono-project.com/docs/advanced/runtime/"}),"Common Language Runtime"),", however not all .NET applications can run on this platform, therefore it's safer to run all builds on a Windows environment that is configured with the .NET Framework installed."),Object(a.b)("h2",{id:"release-on-nuget"},"Release on NuGet"),Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"http://nuget.org/"}),"NuGet")," is the package manager for the Microsoft development platform including .NET. The ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.nuget.org/ndocs/guides/install-nuget"}),"NuGet client tools")," provide the ability to produce and consume packages. The NuGet Gallery is the central package repository used by all package authors and consumers."),Object(a.b)("p",null,"To release a project on NuGet, it is currently required to run the build process from a .NET (Windows) environment, as there are some known issues for NuGet to run with Mono on Linux and OSX; please refer to ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/NuGet/Home/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+mono"}),"Mono issues")," on GitHub for more info."),Object(a.b)("p",null,"From command-line, you can invoke the following command:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"nuget pack project.csproj -IncludeReferencedProjects -Prop Configuration=Release\n")),Object(a.b)("p",null,"A badge can be added at the top of the project's root-level README.md file, using the following Markdown syntax:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"[![NuGet Packages Status](https://img.shields.io/nuget/v/<package name>.svg?maxAge=2592000)](https://www.nuget.org/packages/<package name>/)\n")),Object(a.b)("p",null,"You can also run this process continuously on each commit and publish pre-releases by ",Object(a.b)("a",{href:"intro#myget"},"integrating with MyGet"),"."),Object(a.b)("img",{alt:"openshift-console",src:Object(c.a)("img/vendors/openshift-console.png")}))}l.isMDXComponent=!0},175:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),p=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},l=function(e){var t=p(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=p(n),m=r,d=l["".concat(c,".").concat(m)]||l[m]||b[m]||a;return n?o.a.createElement(d,i({ref:t},u,{components:n})):o.a.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var u=2;u<a;u++)c[u]=n[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},176:function(e,t,n){"use strict";var r=n(0),o=n(56);t.a=function(){return Object(r.useContext)(o.a)}},177:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));n(178);var r=n(176);function o(e){var t=(Object(r.a)().siteConfig||{}).baseUrl,n=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}},178:function(e,t,n){"use strict";var r=n(8),o=n(20),a=n(179),c="".startsWith;r(r.P+r.F*n(180)("startsWith"),"String",{startsWith:function(e){var t=a(this,e,"startsWith"),n=o(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),r=String(e);return c?c.call(t,r,n):t.slice(n,n+r.length)===r}})},179:function(e,t,n){var r=n(76),o=n(28);e.exports=function(e,t,n){if(r(t))throw TypeError("String#"+n+" doesn't accept regex!");return String(o(e))}},180:function(e,t,n){var r=n(2)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[r]=!1,!"/./"[e](t)}catch(o){}}return!0}}}]);