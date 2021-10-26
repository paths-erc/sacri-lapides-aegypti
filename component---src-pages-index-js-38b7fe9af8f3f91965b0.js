"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[678],{2484:function(e,t,r){r(7294);var a=r(3587),n=r(3218),i=a.ZP.section.withConfig({displayName:"Title__Wrapper",componentId:"sc-1hhr2bx-0"})(['.section-title{font-family:"Open Sans",sans-serif;font-size:2rem;font-weight:bolder;text-transform:capitalize;padding-bottom:2%;color:#777777;text-decoration:underline;text-decoration-color:rgb(130,36,51,0.6);text-decoration-thickness:0.1em;}.section-title.right{text-align:right;}.section-title.left{text-align:left;}']);t.Z=function(e){var t=e.title,r="right"===e.align?"right":"left";return(0,n.tZ)(i,null,(0,n.tZ)("div",{className:"section-title "+r},(0,n.tZ)("h1",null,t)))}},242:function(e,t,r){r.r(t),r.d(t,{default:function(){return ze}});var a=r(7294),n=r(3587),i=r(6187),o=r(994),c=r(7408),s=r(7036),l=r(5444),d=r(4942),f=r(885),p=r(5987),u=r(5655);var g=function(e,t){var r=(0,a.useRef)(!0);(0,a.useEffect)((function(){if(!r.current)return e();r.current=!1}),t)},b=r(9424);function m(e){var t,r,n=(t=e,(r=(0,a.useRef)(t)).current=t,r);(0,a.useEffect)((function(){return function(){return n.current()}}),[])}var h=Math.pow(2,31)-1;function y(e,t,r){var a=r-Date.now();e.current=a<=h?setTimeout(t,a):setTimeout((function(){return y(e,t,r)}),h)}function v(){var e=function(){var e=(0,a.useRef)(!0),t=(0,a.useRef)((function(){return e.current}));return(0,a.useEffect)((function(){return function(){e.current=!1}}),[]),t.current}(),t=(0,a.useRef)();return m((function(){return clearTimeout(t.current)})),(0,a.useMemo)((function(){var r=function(){return clearTimeout(t.current)};return{set:function(a,n){void 0===n&&(n=0),e()&&(r(),n<=h?t.current=setTimeout(a,n):y(t,a,Date.now()+n))},clear:r}}),[])}var w=r(1590),Z=r(5900),x=r.n(Z),O=r(5513),j=r(8870),P=(0,j.Z)("carousel-caption"),k=r(9541),S=r(5893),N=["as","bsPrefix","className"];function C(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function E(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?C(Object(r),!0).forEach((function(t){(0,d.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):C(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var z=a.forwardRef((function(e,t){var r=e.as,a=void 0===r?"div":r,n=e.bsPrefix,i=e.className,o=(0,p.Z)(e,N),c=x()(i,(0,k.vE)(n,"carousel-item"));return(0,S.jsx)(a,E(E({ref:t},o),{},{className:c}))}));z.displayName="CarouselItem";var D=z;function I(e,t){var r=0;return a.Children.map(e,(function(e){return a.isValidElement(e)?t(e,r++):e}))}var T=r(1831),M=r(9059),R=r(558),_=["as","bsPrefix","slide","fade","controls","indicators","indicatorLabels","activeIndex","onSelect","onSlide","onSlid","interval","keyboard","onKeyDown","pause","onMouseOver","onMouseOut","wrap","touch","onTouchStart","onTouchMove","onTouchEnd","prevIcon","prevLabel","nextIcon","nextLabel","variant","className","children"];function A(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function L(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?A(Object(r),!0).forEach((function(t){(0,d.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):A(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Y={slide:!0,fade:!1,controls:!0,indicators:!0,indicatorLabels:[],defaultActiveIndex:0,interval:5e3,keyboard:!0,pause:"hover",wrap:!0,touch:!0,prevIcon:(0,S.jsx)("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:"Previous",nextIcon:(0,S.jsx)("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:"Next"};var F=a.forwardRef((function(e,t){var r=(0,O.Ch)(e,{activeIndex:"onSelect"}),n=r.as,i=void 0===n?"div":n,o=r.bsPrefix,c=r.slide,s=r.fade,l=r.controls,d=r.indicators,m=r.indicatorLabels,h=r.activeIndex,y=r.onSelect,Z=r.onSlide,j=r.onSlid,P=r.interval,N=r.keyboard,C=r.onKeyDown,E=r.pause,z=r.onMouseOver,D=r.onMouseOut,A=r.wrap,Y=r.touch,F=r.onTouchStart,B=r.onTouchMove,W=r.onTouchEnd,V=r.prevIcon,H=r.prevLabel,U=r.nextIcon,J=r.nextLabel,K=r.variant,G=r.className,X=r.children,q=(0,p.Z)(r,_),Q=(0,k.vE)(o,"carousel"),$=(0,k.SC)(),ee=(0,a.useRef)(null),te=(0,a.useState)("next"),re=(0,f.Z)(te,2),ae=re[0],ne=re[1],ie=(0,a.useState)(!1),oe=(0,f.Z)(ie,2),ce=oe[0],se=oe[1],le=(0,a.useState)(!1),de=(0,f.Z)(le,2),fe=de[0],pe=de[1],ue=(0,a.useState)(h||0),ge=(0,f.Z)(ue,2),be=ge[0],me=ge[1];fe||h===be||(ee.current?ne(ee.current):ne((h||0)>be?"next":"prev"),c&&pe(!0),me(h||0)),(0,a.useEffect)((function(){ee.current&&(ee.current=null)}));var he,ye=0;!function(e,t){var r=0;a.Children.forEach(e,(function(e){a.isValidElement(e)&&t(e,r++)}))}(X,(function(e,t){++ye,t===h&&(he=e.props.interval)}));var ve=(0,b.Z)(he),we=(0,a.useCallback)((function(e){if(!fe){var t=be-1;if(t<0){if(!A)return;t=ye-1}ee.current="prev",null==y||y(t,e)}}),[fe,be,y,A,ye]),Ze=(0,u.Z)((function(e){if(!fe){var t=be+1;if(t>=ye){if(!A)return;t=0}ee.current="next",null==y||y(t,e)}})),xe=(0,a.useRef)();(0,a.useImperativeHandle)(t,(function(){return{element:xe.current,prev:we,next:Ze}}));var Oe=(0,u.Z)((function(){!document.hidden&&function(e){if(!(e&&e.style&&e.parentNode&&e.parentNode.style))return!1;var t=getComputedStyle(e);return"none"!==t.display&&"hidden"!==t.visibility&&"none"!==getComputedStyle(e.parentNode).display}(xe.current)&&($?we():Ze())})),je="next"===ae?"start":"end";g((function(){c||(null==Z||Z(be,je),null==j||j(be,je))}),[be]);var Pe="".concat(Q,"-item-").concat(ae),ke="".concat(Q,"-item-").concat(je),Se=(0,a.useCallback)((function(e){(0,M.Z)(e),null==Z||Z(be,je)}),[Z,be,je]),Ne=(0,a.useCallback)((function(){pe(!1),null==j||j(be,je)}),[j,be,je]),Ce=(0,a.useCallback)((function(e){if(N&&!/input|textarea/i.test(e.target.tagName))switch(e.key){case"ArrowLeft":return e.preventDefault(),void($?Ze(e):we(e));case"ArrowRight":return e.preventDefault(),void($?we(e):Ze(e))}null==C||C(e)}),[N,C,we,Ze,$]),Ee=(0,a.useCallback)((function(e){"hover"===E&&se(!0),null==z||z(e)}),[E,z]),ze=(0,a.useCallback)((function(e){se(!1),null==D||D(e)}),[D]),De=(0,a.useRef)(0),Ie=(0,a.useRef)(0),Te=v(),Me=(0,a.useCallback)((function(e){De.current=e.touches[0].clientX,Ie.current=0,"hover"===E&&se(!0),null==F||F(e)}),[E,F]),Re=(0,a.useCallback)((function(e){e.touches&&e.touches.length>1?Ie.current=0:Ie.current=e.touches[0].clientX-De.current,null==B||B(e)}),[B]),_e=(0,a.useCallback)((function(e){if(Y){var t=Ie.current;Math.abs(t)>40&&(t>0?we(e):Ze(e))}"hover"===E&&Te.set((function(){se(!1)}),P||void 0),null==W||W(e)}),[Y,E,we,Ze,Te,P,W]),Ae=null!=P&&!ce&&!fe,Le=(0,a.useRef)();(0,a.useEffect)((function(){var e,t;if(Ae){var r=$?we:Ze;return Le.current=window.setInterval(document.visibilityState?Oe:r,null!=(e=null!=(t=ve.current)?t:P)?e:void 0),function(){null!==Le.current&&clearInterval(Le.current)}}}),[Ae,we,Ze,ve,P,Oe,$]);var Ye=(0,a.useMemo)((function(){return d&&Array.from({length:ye},(function(e,t){return function(e){null==y||y(t,e)}}))}),[d,ye,y]);return(0,S.jsxs)(i,L(L({ref:xe},q),{},{onKeyDown:Ce,onMouseOver:Ee,onMouseOut:ze,onTouchStart:Me,onTouchMove:Re,onTouchEnd:_e,className:x()(G,Q,c&&"slide",s&&"".concat(Q,"-fade"),K&&"".concat(Q,"-").concat(K)),children:[d&&(0,S.jsx)("div",{className:"".concat(Q,"-indicators"),children:I(X,(function(e,t){return(0,S.jsx)("button",{type:"button","data-bs-target":"","aria-label":null!=m&&m.length?m[t]:"Slide ".concat(t+1),className:t===be?"active":void 0,onClick:Ye?Ye[t]:void 0,"aria-current":t===be},t)}))}),(0,S.jsx)("div",{className:"".concat(Q,"-inner"),children:I(X,(function(e,t){var r=t===be;return c?(0,S.jsx)(R.Z,{in:r,onEnter:r?Se:void 0,onEntered:r?Ne:void 0,addEndListener:T.Z,children:function(t,n){return a.cloneElement(e,L(L({},n),{},{className:x()(e.props.className,r&&"entered"!==t&&Pe,("entered"===t||"exiting"===t)&&"active",("entering"===t||"exiting"===t)&&ke)}))}}):a.cloneElement(e,{className:x()(e.props.className,r&&"active")})}))}),l&&(0,S.jsxs)(S.Fragment,{children:[(A||0!==h)&&(0,S.jsxs)(w.Z,{className:"".concat(Q,"-control-prev"),onClick:we,children:[V,H&&(0,S.jsx)("span",{className:"visually-hidden",children:H})]}),(A||h!==ye-1)&&(0,S.jsxs)(w.Z,{className:"".concat(Q,"-control-next"),onClick:Ze,children:[U,J&&(0,S.jsx)("span",{className:"visually-hidden",children:J})]})]})]}))}));F.displayName="Carousel",F.defaultProps=Y;var B=Object.assign(F,{Caption:P,Item:D}),W=r(4369),V=r.p+"static/home-slider-2-3c138cd72a82d57cb470d39f204d26a6.jpg",H=r.p+"static/sla-animal-d05abad75a323bab3b649fa7d69b5fe0.svg",U=r(3218),J=n.ZP.section.withConfig({displayName:"Slider__Wrapper",componentId:"sc-ze2tkk-0"})(['.carousel-caption{top:50%;transform:translateY(-50%);bottom:initial;}.carousel-indicators{margin-bottom:10%;visibility:hidden;}.carousel-item{-webkit-transform-style:preserve-3d;-moz-transform-style:preserve-3d;transform-style:preserve-3d;}h3{font-family:"Open Sans",sans-serif;font-weight:200;display:swap;font-size:300%;}img{filter:brightness(75%);}img .d-block{background-position:center top !important;background-size:cover;background-repeat:no-repeat;height:calc(100vh);min-height:1000px;position:relative;}.logo{height:300px;width:500px;margin:auto;filter:invert(1);}p{font-family:"Open Sans",sans-serif;font-weight:200;display:swap;}.slider-wrap{position:relative;background-color:#f8f9fa;}.slider-wrap:after{content:"";width:100%;height:240px;background:#fff;z-index:1;bottom:-240px;left:0;position:absolute;-webkit-transform:skewY(-6deg);-ms-transform:skewY(-6deg);transform:skewY(-6deg);-webkit-transform-origin:top left;-ms-transform-origin:top left;transform-origin:top left;background-color:#f8f9fa;}']),K=function(){return(0,U.tZ)(J,null,(0,U.tZ)("div",{className:"slider-wrap"},(0,U.tZ)("section",null,(0,U.tZ)(B,null,(0,U.tZ)(B.Item,{interval:9e3},(0,U.tZ)("img",{className:"d-block w-100",src:(0,l.withPrefix)(""+W.Z),alt:"First slide"}),(0,U.tZ)(B.Caption,null,(0,U.tZ)("img",{className:"logo",src:(0,l.withPrefix)(""+H),alt:"sacri-lapides"}),(0,U.tZ)("h3",null,"Sacri Lapides Aegypti"),(0,U.tZ)("p",null,"A FARE MIUR Project hosted at Sapienza University of Rome"),(0,U.tZ)("div",{"data-sal":"slide-up","data-sal-delay":"300","data-sal-easing":"ease"}))),(0,U.tZ)(B.Item,{interval:9e3},(0,U.tZ)("img",{className:"d-block w-100",src:(0,l.withPrefix)(""+V),alt:"Second slide"}),(0,U.tZ)(B.Caption,null,(0,U.tZ)("img",{className:"logo",src:(0,l.withPrefix)(""+H),alt:"sacri-lapides"}),(0,U.tZ)("h3",null,"Sacri Lapides Aegypti"),(0,U.tZ)("p",null,"A FARE MIUR Project hosted at Sapienza University of Rome")))))))},G=r(2359),X=r(2484),q=n.ZP.section.withConfig({displayName:"About__Wrapper",componentId:"sc-18ftiu9-0"})(['section{padding:0;position:relative;z-index:2;}p{font-family:"Montserrat",sans-serif;font-weight:200;font-size:1rem;line-height:1.7rem;display:swap;text-align:right;color:#777777;padding-top:3rem;}.col{margin-bottom:3rem;}.about-img{max-width:400px;text-align:center;margin-left:auto;margin-right:auto;margin-top:4rem;}.bottom-slant-gray{position:relative;padding-top:1.5%;padding-bottom:1%;background-color:#f8f9fa;}.bottom-slant-gray:after{content:"";width:100%;height:260px;background:#fff;z-index:-1;bottom:-200px;background-color:#f8f9fa;left:0;position:absolute;-webkit-transform:skewY(-6deg);-ms-transform:skewY(-6deg);transform:skewY(-6deg);-webkit-transform-origin:top left;-ms-transform-origin:top left;transform-origin:top left;}']),Q=function(){return(0,U.tZ)(q,null,(0,U.tZ)("section",{className:"section bottom-slant-gray"},(0,U.tZ)(i.Z,null,(0,U.tZ)(o.Z,{xs:1,md:2},(0,U.tZ)(c.Z,null,(0,U.tZ)(G.S,{src:"../../static/images/logos/sla.svg",width:500,objectFit:"scale-down",__imageData:r(5190)})),(0,U.tZ)(c.Z,null,(0,U.tZ)(X.Z,{title:"About",align:"right"}),(0,U.tZ)("p",null,"The ",(0,U.tZ)("em",null,"Sacri lapides Aegypti")," project aims to study and document the processes of transformation of sacred spaces for worship, identity and memory from Pharaonic and Ptolemaic-Roman Egypt to Christian Egypt through topographical-functional analysis and the creation of a general catalogue, in digital form, of the temple structures transformed into Christian places used for the production and preservation of books, as well as their cultic function.",(0,U.tZ)("em",null,"Sacri lapides Aegypti")," is therefore the conceptual premise and the archaeological investigation of the ERC project PAThs, whose aim is to define a geography of Coptic manuscript production through the creation of a digital atlas, searchable thematically and chronologically."))))))};function $(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function ee(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?$(Object(r),!0).forEach((function(t){(0,d.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):$(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var te=function(e){return a.forwardRef((function(t,r){return(0,S.jsx)("div",ee(ee({},t),{},{ref:r,className:x()(t.className,e)}))}))},re=["bsPrefix","className","variant","as"];function ae(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}var ne=a.forwardRef((function(e,t){var r=e.bsPrefix,a=e.className,n=e.variant,i=e.as,o=void 0===i?"img":i,c=(0,p.Z)(e,re),s=(0,k.vE)(r,"card-img");return(0,S.jsx)(o,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ae(Object(r),!0).forEach((function(t){(0,d.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ae(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({ref:t,className:x()(n?"".concat(s,"-").concat(n):s,a)},c))}));ne.displayName="CardImg";var ie=ne,oe=r(8893),ce=["bsPrefix","className","as"];function se(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function le(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?se(Object(r),!0).forEach((function(t){(0,d.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):se(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var de=a.forwardRef((function(e,t){var r=e.bsPrefix,n=e.className,i=e.as,o=void 0===i?"div":i,c=(0,p.Z)(e,ce),s=(0,k.vE)(r,"card-header"),l=(0,a.useMemo)((function(){return{cardHeaderBsPrefix:s}}),[s]);return(0,S.jsx)(oe.Z.Provider,{value:l,children:(0,S.jsx)(o,le(le({ref:t},c),{},{className:x()(n,s)}))})}));de.displayName="CardHeader";var fe=de,pe=["bsPrefix","className","bg","text","border","body","children","as"];function ue(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function ge(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ue(Object(r),!0).forEach((function(t){(0,d.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ue(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var be=te("h5"),me=te("h6"),he=(0,j.Z)("card-body"),ye=(0,j.Z)("card-title",{Component:be}),ve=(0,j.Z)("card-subtitle",{Component:me}),we=(0,j.Z)("card-link",{Component:"a"}),Ze=(0,j.Z)("card-text",{Component:"p"}),xe=(0,j.Z)("card-footer"),Oe=(0,j.Z)("card-img-overlay"),je=a.forwardRef((function(e,t){var r=e.bsPrefix,a=e.className,n=e.bg,i=e.text,o=e.border,c=e.body,s=e.children,l=e.as,d=void 0===l?"div":l,f=(0,p.Z)(e,pe),u=(0,k.vE)(r,"card");return(0,S.jsx)(d,ge(ge({ref:t},f),{},{className:x()(a,u,n&&"bg-".concat(n),i&&"text-".concat(i),o&&"border-".concat(o)),children:c?(0,S.jsx)(he,{children:s}):s}))}));je.displayName="Card",je.defaultProps={body:!1};var Pe=Object.assign(je,{Img:ie,Title:ye,Subtitle:ve,Body:he,Link:we,Text:Ze,Header:fe,Footer:xe,ImgOverlay:Oe}),ke=r(6594),Se=n.ZP.section.withConfig({displayName:"Methods__Wrapper",componentId:"sc-xufcmz-0"})(['a{color:rgb(130,36,51);font-weight:bolder;font-size:0.8rem;line-height:1rem;text-transform:uppercase;display:swap;text-decoration:none;}a:hover{color:rgb(130,36,51);font-weight:bolder;font-size:0.8rem;line-height:1rem;text-transform:uppercase;display:swap;text-decoration:none;}button{font-family:"Montserrat",sans-serif;font-weight:200;font-size:1rem;line-height:1.7rem;display:swap;text-align:right;color:#777777;text-align:left;margin:3% 0 3% 0;background:rgb(130,36,51,0.2);border-color:rgb(130,36,51,0.3);}button:hover{background:none;border-color:transparent;}.section{position:relative;z-index:2;}.methods:after{content:"";width:100%;height:260px;background:#fff;z-index:-1;bottom:-200px;background-color:#fff;left:0;position:absolute;-webkit-transform:skewY(-6deg);-ms-transform:skewY(-6deg);transform:skewY(-6deg);-webkit-transform-origin:top left;-ms-transform-origin:top left;transform-origin:top left;}.card{border:none;padding-top:10%;}.card-body{font-family:"Montserrat",sans-serif;font-weight:200;font-size:1rem;line-height:1.7rem;display:swap;text-align:right;color:#777777;}.card-title{font-family:"Montserrat",sans-serif;font-size:1.3rem;line-height:1.7rem;display:swap;text-align:right;color:#777777;font-weight:bolder;text-transform:uppercase;}.container{padding-top:240px;padding-bottom:240px;}']),Ne=function(){return(0,U.tZ)(Se,null,(0,U.tZ)("section",{className:"section methods"},(0,U.tZ)(i.Z,null,(0,U.tZ)(X.Z,{title:"Methodology"}),(0,U.tZ)(o.Z,{xs:1,md:3},(0,U.tZ)(c.Z,null,(0,U.tZ)(Pe,null,(0,U.tZ)(G.S,{src:"../../../static/images/other/1-card.jpg",width:500,objectFit:"scale-down",__imageData:r(8772)}),(0,U.tZ)(Pe.Body,null,(0,U.tZ)(Pe.Title,null,"First Step"),(0,U.tZ)(ke.Z,{variant:"primary"},(0,U.tZ)("a",{href:"https://docs.paths-erc.eu/data/"},"PAThs data repository")),(0,U.tZ)(Pe.Text,null,"Collection and georeferencing on GIS platform of many historical cartographical sources of Egypt and stle-level topographical surveys of the main temples, churches, basilicas and other religious complexes.")))),(0,U.tZ)(c.Z,null,(0,U.tZ)(Pe,null,(0,U.tZ)(G.S,{src:"../../../static/images/other/2-card.jpg",width:500,objectFit:"scale-down",__imageData:r(1175)}),(0,U.tZ)(Pe.Body,null,(0,U.tZ)(Pe.Title,null,"Second Step"),(0,U.tZ)(ke.Z,{variant:"primary"},(0,U.tZ)("a",{href:"https://docs.paths-erc.eu/data/svp"},"SVP protocol specifications")),(0,U.tZ)(Pe.Text,null,"Vectorization of geo-referenced plants on GIS platform using a protocol (SPV) developed by PAThs team members.")))),(0,U.tZ)(c.Z,null,(0,U.tZ)(Pe,null,(0,U.tZ)(G.S,{src:"../../../static/images/other/3-card.jpg",width:500,objectFit:"scale-down",__imageData:r(8246)}),(0,U.tZ)(Pe.Body,null,(0,U.tZ)(Pe.Title,null,"Third Step"),(0,U.tZ)(ke.Z,{variant:"primary"},(0,U.tZ)("a",{href:"https://docs.paths-erc.eu/data/demo/"},"Live demo")),(0,U.tZ)(Pe.Text,null,"Chronological phases, reconstruction hypothesis, etc., can be easily encoded with the help of minimal and higly intuitive vocabularies and visualised on the Web."))))))))},Ce=n.ZP.section.withConfig({displayName:"Places__Wrapper",componentId:"sc-9jolxa-0"})(['a{color:rgb(130,36,51);font-weight:bolder;font-size:0.8rem;line-height:1rem;text-transform:uppercase;display:swap;text-decoration:none;}a:hover{color:rgb(130,36,51);font-weight:bolder;font-size:0.8rem;line-height:1rem;text-transform:uppercase;display:swap;text-decoration:none;}.go-to{text-align:center;margin:3% 0 3% 0;background:rgb(130,36,51,0.2) !important;border-color:rgb(130,36,51,0.3) !important;}.go-to:hover{background:none;border-color:transparent;}section{padding:2em 5;position:relative;z-index:2;}.card{border:none;}.card-body{font-family:"Montserrat",sans-serif;font-weight:200;font-size:1rem;line-height:1.7rem;display:swap;text-align:right;color:#777777;}.card-title{font-weight:bolder;text-transform:uppercase;font-size:1.5rem;}.container{padding-bottom:5%;}.sites-img{border-top-left-radius:var(--radius);border-top-right-radius:var(--radius);height:19rem;z-index:1;}.sites-img::after{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background:linear-gradient(to bottom right,var(--clr-primary-5),#222);opacity:0.85;transition:var(--transition);}.typology{font-family:"Montserrat",sans-serif;font-weight:200;font-size:1rem;line-height:1.7rem;display:swap;text-align:right;color:#777777;font-style:italic;}']),Ee=function(e){return(0,U.tZ)(Ce,null,(0,U.tZ)(i.Z,null,(0,U.tZ)(Pe,null,(0,U.tZ)(Pe.Img,{variant:"top",src:(0,l.withPrefix)("/images/"+e.img)}),(0,U.tZ)(Pe.Body,null,(0,U.tZ)(Pe.Title,null,e.title),(0,U.tZ)("p",{className:"typology"},e.typology),(0,U.tZ)(Pe.Text,null,e.excerpt)),(0,U.tZ)(ke.Z,{className:"go-to",variant:"primary",href:(0,l.withPrefix)(e.readMore)},"Read More..."))))},ze=function(e){var t=e.data;return(0,U.tZ)(s.Z,null,(0,U.tZ)(K,null),(0,U.tZ)(Q,null),(0,U.tZ)(Ne,null),(0,U.tZ)(De,null,(0,U.tZ)("section",{className:"section bottom-slant-gray"},(0,U.tZ)(i.Z,null,(0,U.tZ)(X.Z,{title:"Archaeological sites",align:"right"}),(0,U.tZ)(o.Z,{xs:1,md:2},t.allMarkdownRemark.nodes.map((function(e,t){return(0,U.tZ)(c.Z,{key:t},(0,U.tZ)(Ee,{img:e.frontmatter.img,title:e.frontmatter.title,typology:e.frontmatter.typology,excerpt:e.excerpt,readMore:e.fields.slug}))})))))))},De=n.ZP.section.withConfig({displayName:"pages__Wrapper",componentId:"sc-1695hmt-0"})(['section{position:relative;z-index:2;}.bottom-slant-gray{position:relative;padding-bottom:10%;background-color:#f8f9fa;}.bottom-slant-gray:before{content:"";width:100%;height:240px;background:#f8f9fa;z-index:-1;top:0px;background-color:#f8f9fa;left:0;position:absolute;-webkit-transform:skewY(-6deg);-ms-transform:skewY(-6deg);transform:skewY(-6deg);-webkit-transform-origin:top left;-ms-transform-origin:top left;transform-origin:top left;}.row{padding-top:30px;}'])},7036:function(e,t,r){var a=r(7294),n=r(4582),i=r(4790),o=r(1925),c=r(3218);t.Z=function(e){var t=e.children;return(0,c.tZ)(a.Fragment,null,(0,c.tZ)(i.Z,null),t,(0,c.tZ)(n.Z,null),(0,c.tZ)(o.Z,{showBelow:250}))}},8246:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#484838","images":{"fallback":{"src":"/sacri-lapides-aegypti/static/650254283eaebbf553f6ad342d2fc2b2/f5d3f/3-card.jpg","srcSet":"/sacri-lapides-aegypti/static/650254283eaebbf553f6ad342d2fc2b2/513b3/3-card.jpg 125w,\\n/sacri-lapides-aegypti/static/650254283eaebbf553f6ad342d2fc2b2/01fd9/3-card.jpg 250w,\\n/sacri-lapides-aegypti/static/650254283eaebbf553f6ad342d2fc2b2/f5d3f/3-card.jpg 500w,\\n/sacri-lapides-aegypti/static/650254283eaebbf553f6ad342d2fc2b2/b8189/3-card.jpg 1000w","sizes":"(min-width: 500px) 500px, 100vw"},"sources":[{"srcSet":"/sacri-lapides-aegypti/static/650254283eaebbf553f6ad342d2fc2b2/f52b8/3-card.webp 125w,\\n/sacri-lapides-aegypti/static/650254283eaebbf553f6ad342d2fc2b2/0317c/3-card.webp 250w,\\n/sacri-lapides-aegypti/static/650254283eaebbf553f6ad342d2fc2b2/3faf6/3-card.webp 500w,\\n/sacri-lapides-aegypti/static/650254283eaebbf553f6ad342d2fc2b2/d1e22/3-card.webp 1000w","type":"image/webp","sizes":"(min-width: 500px) 500px, 100vw"}]},"width":500,"height":429}')},8772:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#e8e8c8","images":{"fallback":{"src":"/sacri-lapides-aegypti/static/56928f89073068c69e2dbe31173dce59/f5d3f/1-card.jpg","srcSet":"/sacri-lapides-aegypti/static/56928f89073068c69e2dbe31173dce59/513b3/1-card.jpg 125w,\\n/sacri-lapides-aegypti/static/56928f89073068c69e2dbe31173dce59/01fd9/1-card.jpg 250w,\\n/sacri-lapides-aegypti/static/56928f89073068c69e2dbe31173dce59/f5d3f/1-card.jpg 500w,\\n/sacri-lapides-aegypti/static/56928f89073068c69e2dbe31173dce59/b8189/1-card.jpg 1000w","sizes":"(min-width: 500px) 500px, 100vw"},"sources":[{"srcSet":"/sacri-lapides-aegypti/static/56928f89073068c69e2dbe31173dce59/f52b8/1-card.webp 125w,\\n/sacri-lapides-aegypti/static/56928f89073068c69e2dbe31173dce59/0317c/1-card.webp 250w,\\n/sacri-lapides-aegypti/static/56928f89073068c69e2dbe31173dce59/3faf6/1-card.webp 500w,\\n/sacri-lapides-aegypti/static/56928f89073068c69e2dbe31173dce59/d1e22/1-card.webp 1000w","type":"image/webp","sizes":"(min-width: 500px) 500px, 100vw"}]},"width":500,"height":429}')},1175:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#b89878","images":{"fallback":{"src":"/sacri-lapides-aegypti/static/4532b3d382f360bf6a8cff00afe8d0b3/f5d3f/2-card.jpg","srcSet":"/sacri-lapides-aegypti/static/4532b3d382f360bf6a8cff00afe8d0b3/513b3/2-card.jpg 125w,\\n/sacri-lapides-aegypti/static/4532b3d382f360bf6a8cff00afe8d0b3/01fd9/2-card.jpg 250w,\\n/sacri-lapides-aegypti/static/4532b3d382f360bf6a8cff00afe8d0b3/f5d3f/2-card.jpg 500w,\\n/sacri-lapides-aegypti/static/4532b3d382f360bf6a8cff00afe8d0b3/b8189/2-card.jpg 1000w","sizes":"(min-width: 500px) 500px, 100vw"},"sources":[{"srcSet":"/sacri-lapides-aegypti/static/4532b3d382f360bf6a8cff00afe8d0b3/f52b8/2-card.webp 125w,\\n/sacri-lapides-aegypti/static/4532b3d382f360bf6a8cff00afe8d0b3/0317c/2-card.webp 250w,\\n/sacri-lapides-aegypti/static/4532b3d382f360bf6a8cff00afe8d0b3/3faf6/2-card.webp 500w,\\n/sacri-lapides-aegypti/static/4532b3d382f360bf6a8cff00afe8d0b3/d1e22/2-card.webp 1000w","type":"image/webp","sizes":"(min-width: 500px) 500px, 100vw"}]},"width":500,"height":429}')}}]);
//# sourceMappingURL=component---src-pages-index-js-38b7fe9af8f3f91965b0.js.map