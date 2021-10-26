"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[678],{2484:function(e,t,r){r(7294);var a=r(3587),n=r(3218),i=a.ZP.section.withConfig({displayName:"Title__Wrapper",componentId:"sc-1hhr2bx-0"})(['.section-title{font-family:"Open Sans",sans-serif;font-size:2rem;font-weight:bolder;text-transform:uppercase;padding-bottom:2%;color:#822433;text-decoration:underline;text-decoration-color:rgb(0,103,120);text-decoration-thickness:0.1em;}.section-title.right{text-align:right;}.section-title.left{text-align:left;}']);t.Z=function(e){var t=e.title,r="right"===e.align?"right":"left";return(0,n.tZ)(i,null,(0,n.tZ)("div",{className:"section-title "+r},(0,n.tZ)("h2",null,t)))}},4132:function(e,t,r){r.r(t),r.d(t,{default:function(){return Ne}});var a=r(7294),n=r(3587),i=r(6187),o=r(994),s=r(7408),c=r(7036),l=r(2359),d=r(4942),f=r(885),p=r(5987),u=r(5655);var b=function(e,t){var r=(0,a.useRef)(!0);(0,a.useEffect)((function(){if(!r.current)return e();r.current=!1}),t)},g=r(9424);function m(e){var t,r,n=(t=e,(r=(0,a.useRef)(t)).current=t,r);(0,a.useEffect)((function(){return function(){return n.current()}}),[])}var h=Math.pow(2,31)-1;function y(e,t,r){var a=r-Date.now();e.current=a<=h?setTimeout(t,a):setTimeout((function(){return y(e,t,r)}),h)}function w(){var e=function(){var e=(0,a.useRef)(!0),t=(0,a.useRef)((function(){return e.current}));return(0,a.useEffect)((function(){return function(){e.current=!1}}),[]),t.current}(),t=(0,a.useRef)();return m((function(){return clearTimeout(t.current)})),(0,a.useMemo)((function(){var r=function(){return clearTimeout(t.current)};return{set:function(a,n){void 0===n&&(n=0),e()&&(r(),n<=h?t.current=setTimeout(a,n):y(t,a,Date.now()+n))},clear:r}}),[])}var v=r(1590),x=r(5900),Z=r.n(x),j=r(5513),O=r(8870),k=(0,O.Z)("carousel-caption"),P=r(9541),S=r(5893),N=["as","bsPrefix","className"];function C(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function z(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?C(Object(r),!0).forEach((function(t){(0,d.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):C(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var E=a.forwardRef((function(e,t){var r=e.as,a=void 0===r?"div":r,n=e.bsPrefix,i=e.className,o=(0,p.Z)(e,N),s=Z()(i,(0,P.vE)(n,"carousel-item"));return(0,S.jsx)(a,z(z({ref:t},o),{},{className:s}))}));E.displayName="CarouselItem";var D=E;function I(e,t){var r=0;return a.Children.map(e,(function(e){return a.isValidElement(e)?t(e,r++):e}))}var T=r(1831),M=r(9059),R=r(558),_=["as","bsPrefix","slide","fade","controls","indicators","indicatorLabels","activeIndex","onSelect","onSlide","onSlid","interval","keyboard","onKeyDown","pause","onMouseOver","onMouseOut","wrap","touch","onTouchStart","onTouchMove","onTouchEnd","prevIcon","prevLabel","nextIcon","nextLabel","variant","className","children"];function L(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function A(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?L(Object(r),!0).forEach((function(t){(0,d.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):L(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Y={slide:!0,fade:!1,controls:!0,indicators:!0,indicatorLabels:[],defaultActiveIndex:0,interval:5e3,keyboard:!0,pause:"hover",wrap:!0,touch:!0,prevIcon:(0,S.jsx)("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:"Previous",nextIcon:(0,S.jsx)("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:"Next"};var F=a.forwardRef((function(e,t){var r=(0,j.Ch)(e,{activeIndex:"onSelect"}),n=r.as,i=void 0===n?"div":n,o=r.bsPrefix,s=r.slide,c=r.fade,l=r.controls,d=r.indicators,m=r.indicatorLabels,h=r.activeIndex,y=r.onSelect,x=r.onSlide,O=r.onSlid,k=r.interval,N=r.keyboard,C=r.onKeyDown,z=r.pause,E=r.onMouseOver,D=r.onMouseOut,L=r.wrap,Y=r.touch,F=r.onTouchStart,B=r.onTouchMove,W=r.onTouchEnd,J=r.prevIcon,V=r.prevLabel,H=r.nextIcon,U=r.nextLabel,K=r.variant,G=r.className,X=r.children,q=(0,p.Z)(r,_),Q=(0,P.vE)(o,"carousel"),$=(0,P.SC)(),ee=(0,a.useRef)(null),te=(0,a.useState)("next"),re=(0,f.Z)(te,2),ae=re[0],ne=re[1],ie=(0,a.useState)(!1),oe=(0,f.Z)(ie,2),se=oe[0],ce=oe[1],le=(0,a.useState)(!1),de=(0,f.Z)(le,2),fe=de[0],pe=de[1],ue=(0,a.useState)(h||0),be=(0,f.Z)(ue,2),ge=be[0],me=be[1];fe||h===ge||(ee.current?ne(ee.current):ne((h||0)>ge?"next":"prev"),s&&pe(!0),me(h||0)),(0,a.useEffect)((function(){ee.current&&(ee.current=null)}));var he,ye=0;!function(e,t){var r=0;a.Children.forEach(e,(function(e){a.isValidElement(e)&&t(e,r++)}))}(X,(function(e,t){++ye,t===h&&(he=e.props.interval)}));var we=(0,g.Z)(he),ve=(0,a.useCallback)((function(e){if(!fe){var t=ge-1;if(t<0){if(!L)return;t=ye-1}ee.current="prev",null==y||y(t,e)}}),[fe,ge,y,L,ye]),xe=(0,u.Z)((function(e){if(!fe){var t=ge+1;if(t>=ye){if(!L)return;t=0}ee.current="next",null==y||y(t,e)}})),Ze=(0,a.useRef)();(0,a.useImperativeHandle)(t,(function(){return{element:Ze.current,prev:ve,next:xe}}));var je=(0,u.Z)((function(){!document.hidden&&function(e){if(!(e&&e.style&&e.parentNode&&e.parentNode.style))return!1;var t=getComputedStyle(e);return"none"!==t.display&&"hidden"!==t.visibility&&"none"!==getComputedStyle(e.parentNode).display}(Ze.current)&&($?ve():xe())})),Oe="next"===ae?"start":"end";b((function(){s||(null==x||x(ge,Oe),null==O||O(ge,Oe))}),[ge]);var ke="".concat(Q,"-item-").concat(ae),Pe="".concat(Q,"-item-").concat(Oe),Se=(0,a.useCallback)((function(e){(0,M.Z)(e),null==x||x(ge,Oe)}),[x,ge,Oe]),Ne=(0,a.useCallback)((function(){pe(!1),null==O||O(ge,Oe)}),[O,ge,Oe]),Ce=(0,a.useCallback)((function(e){if(N&&!/input|textarea/i.test(e.target.tagName))switch(e.key){case"ArrowLeft":return e.preventDefault(),void($?xe(e):ve(e));case"ArrowRight":return e.preventDefault(),void($?ve(e):xe(e))}null==C||C(e)}),[N,C,ve,xe,$]),ze=(0,a.useCallback)((function(e){"hover"===z&&ce(!0),null==E||E(e)}),[z,E]),Ee=(0,a.useCallback)((function(e){ce(!1),null==D||D(e)}),[D]),De=(0,a.useRef)(0),Ie=(0,a.useRef)(0),Te=w(),Me=(0,a.useCallback)((function(e){De.current=e.touches[0].clientX,Ie.current=0,"hover"===z&&ce(!0),null==F||F(e)}),[z,F]),Re=(0,a.useCallback)((function(e){e.touches&&e.touches.length>1?Ie.current=0:Ie.current=e.touches[0].clientX-De.current,null==B||B(e)}),[B]),_e=(0,a.useCallback)((function(e){if(Y){var t=Ie.current;Math.abs(t)>40&&(t>0?ve(e):xe(e))}"hover"===z&&Te.set((function(){ce(!1)}),k||void 0),null==W||W(e)}),[Y,z,ve,xe,Te,k,W]),Le=null!=k&&!se&&!fe,Ae=(0,a.useRef)();(0,a.useEffect)((function(){var e,t;if(Le){var r=$?ve:xe;return Ae.current=window.setInterval(document.visibilityState?je:r,null!=(e=null!=(t=we.current)?t:k)?e:void 0),function(){null!==Ae.current&&clearInterval(Ae.current)}}}),[Le,ve,xe,we,k,je,$]);var Ye=(0,a.useMemo)((function(){return d&&Array.from({length:ye},(function(e,t){return function(e){null==y||y(t,e)}}))}),[d,ye,y]);return(0,S.jsxs)(i,A(A({ref:Ze},q),{},{onKeyDown:Ce,onMouseOver:ze,onMouseOut:Ee,onTouchStart:Me,onTouchMove:Re,onTouchEnd:_e,className:Z()(G,Q,s&&"slide",c&&"".concat(Q,"-fade"),K&&"".concat(Q,"-").concat(K)),children:[d&&(0,S.jsx)("div",{className:"".concat(Q,"-indicators"),children:I(X,(function(e,t){return(0,S.jsx)("button",{type:"button","data-bs-target":"","aria-label":null!=m&&m.length?m[t]:"Slide ".concat(t+1),className:t===ge?"active":void 0,onClick:Ye?Ye[t]:void 0,"aria-current":t===ge},t)}))}),(0,S.jsx)("div",{className:"".concat(Q,"-inner"),children:I(X,(function(e,t){var r=t===ge;return s?(0,S.jsx)(R.Z,{in:r,onEnter:r?Se:void 0,onEntered:r?Ne:void 0,addEndListener:T.Z,children:function(t,n){return a.cloneElement(e,A(A({},n),{},{className:Z()(e.props.className,r&&"entered"!==t&&ke,("entered"===t||"exiting"===t)&&"active",("entering"===t||"exiting"===t)&&Pe)}))}}):a.cloneElement(e,{className:Z()(e.props.className,r&&"active")})}))}),l&&(0,S.jsxs)(S.Fragment,{children:[(L||0!==h)&&(0,S.jsxs)(v.Z,{className:"".concat(Q,"-control-prev"),onClick:ve,children:[J,V&&(0,S.jsx)("span",{className:"visually-hidden",children:V})]}),(L||h!==ye-1)&&(0,S.jsxs)(v.Z,{className:"".concat(Q,"-control-next"),onClick:xe,children:[H,U&&(0,S.jsx)("span",{className:"visually-hidden",children:U})]})]})]}))}));F.displayName="Carousel",F.defaultProps=Y;var B=Object.assign(F,{Caption:k,Item:D}),W=r.p+"static/sla-animal-d05abad75a323bab3b649fa7d69b5fe0.svg",J=r(3218),V=n.ZP.section.withConfig({displayName:"Slider__Wrapper",componentId:"sc-ze2tkk-0"})(['.carousel-caption{top:50%;transform:translateY(-50%);bottom:initial;}.carousel-indicators{margin-bottom:10%;visibility:hidden;}.carousel-item{-webkit-transform-style:preserve-3d;-moz-transform-style:preserve-3d;transform-style:preserve-3d;}h3{font-family:"Open Sans",sans-serif;font-weight:200;display:swap;font-size:300%;}img{filter:brightness(75%);}img .d-block{background-position:center top !important;background-size:cover;background-repeat:no-repeat;height:calc(100vh);min-height:1000px;position:relative;}.logo{height:300px;width:500px;margin:auto;filter:invert(1);}p{font-family:"Open Sans",sans-serif;font-weight:200;display:swap;}.slider-wrap{position:relative;background-color:#f8f9fa;}.slider-wrap:after{content:"";width:100%;height:240px;background:#fff;z-index:1;bottom:-240px;left:0;position:absolute;-webkit-transform:skewY(-6deg);-ms-transform:skewY(-6deg);transform:skewY(-6deg);-webkit-transform-origin:top left;-ms-transform-origin:top left;transform-origin:top left;background-color:#f8f9fa;}']),H=function(){return(0,J.tZ)(V,null,(0,J.tZ)("div",{className:"slider-wrap"},(0,J.tZ)("section",null,(0,J.tZ)(B,null,(0,J.tZ)(B.Item,{interval:9e3},(0,J.tZ)(l.S,{src:"../../../static/images/other/home-slider-1.jpg",objectFit:"contain",__imageData:r(6165)}),(0,J.tZ)(B.Caption,null,(0,J.tZ)("img",{className:"logo",src:W,alt:"sacri-lapides"}),(0,J.tZ)("h3",null,"Sacri Lapides Aegypti"),(0,J.tZ)("p",null,"A FARE MIUR Project hosted at Sapienza University of Rome"),(0,J.tZ)("div",{"data-sal":"slide-up","data-sal-delay":"300","data-sal-easing":"ease"}))),(0,J.tZ)(B.Item,{interval:9e3},(0,J.tZ)(l.S,{src:"../../../static/images/other/home-slider-2.jpg",objectFit:"scale-down",__imageData:r(4387)}),(0,J.tZ)(B.Caption,null,(0,J.tZ)("img",{className:"logo",src:W,alt:"sacri-lapides"}),(0,J.tZ)("h3",null,"Sacri Lapides Aegypti"),(0,J.tZ)("p",null,"A FARE MIUR Project hosted at Sapienza University of Rome")))))))},U=r(2484),K=n.ZP.section.withConfig({displayName:"About__Wrapper",componentId:"sc-18ftiu9-0"})(['section{padding:0;position:relative;z-index:2;}p{font-family:"Montserrat",sans-serif;font-weight:200;font-size:1rem;line-height:1.7rem;display:swap;text-align:right;color:#777777;padding-top:3rem;}.col{margin-bottom:3rem;}.about-img{max-width:400px;text-align:center;margin-left:auto;margin-right:auto;margin-top:4rem;}.bottom-slant-gray{position:relative;padding-top:1.5%;padding-bottom:1%;background-color:#f8f9fa;}.bottom-slant-gray:after{content:"";width:100%;height:260px;background:#fff;z-index:-1;bottom:-200px;background-color:#f8f9fa;left:0;position:absolute;-webkit-transform:skewY(-6deg);-ms-transform:skewY(-6deg);transform:skewY(-6deg);-webkit-transform-origin:top left;-ms-transform-origin:top left;transform-origin:top left;}']),G=function(){return(0,J.tZ)(K,null,(0,J.tZ)("section",{className:"section bottom-slant-gray"},(0,J.tZ)(i.Z,null,(0,J.tZ)(o.Z,{xs:1,md:2},(0,J.tZ)(s.Z,null,(0,J.tZ)(l.S,{src:"../../static/images/logos/sla.svg",width:500,objectFit:"scale-down",__imageData:r(5190)})),(0,J.tZ)(s.Z,null,(0,J.tZ)(U.Z,{title:"About",align:"right"}),(0,J.tZ)("p",null,"The ",(0,J.tZ)("em",null,"Sacri lapides Aegypti")," project aims to study and document the processes of transformation of sacred spaces for worship, identity and memory from Pharaonic and Ptolemaic-Roman Egypt to Christian Egypt through topographical-functional analysis and the creation of a general catalogue, in digital form, of the temple structures transformed into Christian places used for the production and preservation of books, as well as their cultic function.",(0,J.tZ)("em",null,"Sacri lapides Aegypti")," is therefore the conceptual premise and the archaeological investigation of the ERC project PAThs, whose aim is to define a geography of Coptic manuscript production through the creation of a digital atlas, searchable thematically and chronologically."))))))},X=r(5444);function q(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function Q(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?q(Object(r),!0).forEach((function(t){(0,d.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):q(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var $=function(e){return a.forwardRef((function(t,r){return(0,S.jsx)("div",Q(Q({},t),{},{ref:r,className:Z()(t.className,e)}))}))},ee=["bsPrefix","className","variant","as"];function te(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}var re=a.forwardRef((function(e,t){var r=e.bsPrefix,a=e.className,n=e.variant,i=e.as,o=void 0===i?"img":i,s=(0,p.Z)(e,ee),c=(0,P.vE)(r,"card-img");return(0,S.jsx)(o,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?te(Object(r),!0).forEach((function(t){(0,d.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):te(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({ref:t,className:Z()(n?"".concat(c,"-").concat(n):c,a)},s))}));re.displayName="CardImg";var ae=re,ne=r(8893),ie=["bsPrefix","className","as"];function oe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function se(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?oe(Object(r),!0).forEach((function(t){(0,d.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):oe(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var ce=a.forwardRef((function(e,t){var r=e.bsPrefix,n=e.className,i=e.as,o=void 0===i?"div":i,s=(0,p.Z)(e,ie),c=(0,P.vE)(r,"card-header"),l=(0,a.useMemo)((function(){return{cardHeaderBsPrefix:c}}),[c]);return(0,S.jsx)(ne.Z.Provider,{value:l,children:(0,S.jsx)(o,se(se({ref:t},s),{},{className:Z()(n,c)}))})}));ce.displayName="CardHeader";var le=ce,de=["bsPrefix","className","bg","text","border","body","children","as"];function fe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function pe(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?fe(Object(r),!0).forEach((function(t){(0,d.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):fe(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var ue=$("h5"),be=$("h6"),ge=(0,O.Z)("card-body"),me=(0,O.Z)("card-title",{Component:ue}),he=(0,O.Z)("card-subtitle",{Component:be}),ye=(0,O.Z)("card-link",{Component:"a"}),we=(0,O.Z)("card-text",{Component:"p"}),ve=(0,O.Z)("card-footer"),xe=(0,O.Z)("card-img-overlay"),Ze=a.forwardRef((function(e,t){var r=e.bsPrefix,a=e.className,n=e.bg,i=e.text,o=e.border,s=e.body,c=e.children,l=e.as,d=void 0===l?"div":l,f=(0,p.Z)(e,de),u=(0,P.vE)(r,"card");return(0,S.jsx)(d,pe(pe({ref:t},f),{},{className:Z()(a,u,n&&"bg-".concat(n),i&&"text-".concat(i),o&&"border-".concat(o)),children:s?(0,S.jsx)(ge,{children:c}):c}))}));Ze.displayName="Card",Ze.defaultProps={body:!1};var je=Object.assign(Ze,{Img:ae,Title:me,Subtitle:he,Body:ge,Link:ye,Text:we,Header:le,Footer:ve,ImgOverlay:xe}),Oe=n.ZP.section.withConfig({displayName:"Methods__Wrapper",componentId:"sc-xufcmz-0"})(['a{color:rgb(130,36,51);font-weight:bolder;font-size:0.8rem;line-height:1rem;text-transform:uppercase;display:swap;text-decoration:none;}a:hover{color:rgb(130,36,51);font-weight:bolder;font-size:0.8rem;line-height:1rem;text-transform:uppercase;display:swap;text-decoration:none;letter-spacing:0.1rem;}.section{position:relative;z-index:2;}.methods:after{content:"";width:100%;height:260px;background:#fff;z-index:-1;bottom:-200px;background-color:#fff;left:0;position:absolute;-webkit-transform:skewY(-6deg);-ms-transform:skewY(-6deg);transform:skewY(-6deg);-webkit-transform-origin:top left;-ms-transform-origin:top left;transform-origin:top left;}.card{border:none;padding-top:10%;}.card-body{font-family:"Montserrat",sans-serif;font-weight:200;font-size:1rem;line-height:1.7rem;display:swap;text-align:right;color:#777777;}.card-title{font-family:"Montserrat",sans-serif;font-size:1.3rem;line-height:1.7rem;display:swap;text-align:right;color:#777777;font-weight:bolder;text-transform:uppercase;color:rgb(0,103,120);}.container{padding-top:240px;padding-bottom:240px;}']),ke=function(){return(0,J.tZ)(Oe,null,(0,J.tZ)("section",{className:"section methods"},(0,J.tZ)(i.Z,null,(0,J.tZ)(U.Z,{title:"Methodology"}),(0,J.tZ)(o.Z,{xs:1,md:3},(0,J.tZ)(s.Z,null,(0,J.tZ)(je,null,(0,J.tZ)(l.S,{src:"../../../static/images/other/1-card.jpg",width:500,objectFit:"scale-down",__imageData:r(8772)}),(0,J.tZ)(je.Body,null,(0,J.tZ)(je.Title,null,"First Step"),(0,J.tZ)(X.Link,{to:"https://docs.paths-erc.eu/data/"},"PAThs data repository"),(0,J.tZ)(je.Text,null,"Collection and georeferencing on GIS platform of many historical cartographical sources of Egypt and stle-level topographical surveys of the main temples, churches, basilicas and other religious complexes.")))),(0,J.tZ)(s.Z,null,(0,J.tZ)(je,null,(0,J.tZ)(l.S,{src:"../../../static/images/other/2-card.jpg",width:500,objectFit:"scale-down",__imageData:r(1175)}),(0,J.tZ)(je.Body,null,(0,J.tZ)(je.Title,null,"Second Step"),(0,J.tZ)(X.Link,{to:"https://docs.paths-erc.eu/data/svp"},"SVP protocol specifications"),(0,J.tZ)(je.Text,null,"Vectorization of geo-referenced plants on GIS platform using a protocol (SPV) developed by PAThs team members.")))),(0,J.tZ)(s.Z,null,(0,J.tZ)(je,null,(0,J.tZ)(l.S,{src:"../../../static/images/other/3-card.jpg",width:500,objectFit:"scale-down",__imageData:r(8246)}),(0,J.tZ)(je.Body,null,(0,J.tZ)(je.Title,null,"Third Step"),(0,J.tZ)(X.Link,{to:"https://docs.paths-erc.eu/data/demo/"},"Live demo"),(0,J.tZ)(je.Text,null,"Chronological phases, reconstruction hypothesis, etc., can be easily encoded with the help of minimal and higly intuitive vocabularies and visualised on the Web."))))))))},Pe=n.ZP.section.withConfig({displayName:"Places__Wrapper",componentId:"sc-9jolxa-0"})(['a{color:rgb(130,36,51);font-weight:bolder;font-size:0.8rem;line-height:1rem;text-transform:uppercase;display:swap;text-decoration:none;}a:hover{color:rgb(130,36,51);font-weight:bolder;font-size:0.8rem;line-height:1rem;text-transform:uppercase;display:swap;text-decoration:none;letter-spacing:0.1rem;}.go-to{font-size:1rem;text-align:center;margin:3% 0 3% 0;padding-bottom:2rem;padding-left:1rem;text-align:left;}.go-to:hover{font-size:1rem;letter-spacing:0.1rem;background:none;border-color:transparent;}section{padding:2em 5;position:relative;z-index:2;}.card{border:none;}.card-body{font-family:"Montserrat",sans-serif;font-weight:200;font-size:1rem;line-height:1.7rem;display:swap;text-align:left;color:#777777;}.card-title{font-weight:bolder;text-transform:uppercase;font-size:1.5rem;color:rgb(0,103,120);}.container{padding-bottom:5%;}.sites-img{border-top-left-radius:var(--radius);border-top-right-radius:var(--radius);height:19rem;z-index:1;}.sites-img::after{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background:linear-gradient(to bottom right,var(--clr-primary-5),#222);opacity:0.85;transition:var(--transition);}.typology{font-family:"Montserrat",sans-serif;font-weight:200;font-size:1rem;line-height:1.7rem;display:swap;text-align:left;color:#777777;font-style:italic;}']),Se=function(e){return(0,J.tZ)(Pe,null,(0,J.tZ)(i.Z,null,(0,J.tZ)(je,null,(0,J.tZ)(X.Link,{to:(0,X.withPrefix)(""+e.path)},(0,J.tZ)(je.Img,{variant:"top",src:(0,X.withPrefix)("/images/"+e.img)})),(0,J.tZ)(je.Body,null,(0,J.tZ)(je.Title,null,e.title),(0,J.tZ)("p",{className:"typology"},e.typology),(0,J.tZ)(je.Text,null,e.excerpt)),(0,J.tZ)(X.Link,{className:"go-to",to:(0,X.withPrefix)(e.readMore)},"Read More..."))))},Ne=function(e){var t=e.data;return(0,J.tZ)(c.Z,null,(0,J.tZ)(H,null),(0,J.tZ)(G,null),(0,J.tZ)(ke,null),(0,J.tZ)(Ce,null,(0,J.tZ)("section",{className:"section bottom-slant-gray"},(0,J.tZ)(i.Z,null,(0,J.tZ)(U.Z,{title:"Archaeological sites",align:"right"}),(0,J.tZ)(o.Z,{xs:1,md:2},t.allMarkdownRemark.nodes.map((function(e,t){return(0,J.tZ)(s.Z,{key:t},(0,J.tZ)(Se,{img:e.frontmatter.img,title:e.frontmatter.title,path:e.frontmatter.path,typology:e.frontmatter.typology,excerpt:e.excerpt,readMore:e.fields.slug}))})))))))},Ce=n.ZP.section.withConfig({displayName:"pages__Wrapper",componentId:"sc-1695hmt-0"})(['section{position:relative;z-index:2;}.bottom-slant-gray{position:relative;padding-bottom:10%;background-color:#f8f9fa;}.bottom-slant-gray:before{content:"";width:100%;height:240px;background:#f8f9fa;z-index:-1;top:0px;background-color:#f8f9fa;left:0;position:absolute;-webkit-transform:skewY(-6deg);-ms-transform:skewY(-6deg);transform:skewY(-6deg);-webkit-transform-origin:top left;-ms-transform-origin:top left;transform-origin:top left;}.row{padding-top:30px;}'])},7036:function(e,t,r){var a=r(7294),n=r(2910),i=r(2193),o=r(1925),s=r(3218);t.Z=function(e){var t=e.children;return(0,s.tZ)(a.Fragment,null,(0,s.tZ)(i.Z,null),t,(0,s.tZ)(n.Z,null),(0,s.tZ)(o.Z,{showBelow:250}))}},4387:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8d8","images":{"fallback":{"src":"/sacri-lapides-aegypti/static/778bf0d435ebaaedd37705ec8ef93a62/c730d/home-slider-2.jpg","srcSet":"/sacri-lapides-aegypti/static/778bf0d435ebaaedd37705ec8ef93a62/e83fb/home-slider-2.jpg 1462w,\\n/sacri-lapides-aegypti/static/778bf0d435ebaaedd37705ec8ef93a62/08786/home-slider-2.jpg 2923w,\\n/sacri-lapides-aegypti/static/778bf0d435ebaaedd37705ec8ef93a62/c730d/home-slider-2.jpg 5846w","sizes":"(min-width: 5846px) 5846px, 100vw"},"sources":[{"srcSet":"/sacri-lapides-aegypti/static/778bf0d435ebaaedd37705ec8ef93a62/a1e3e/home-slider-2.webp 1462w,\\n/sacri-lapides-aegypti/static/778bf0d435ebaaedd37705ec8ef93a62/92a68/home-slider-2.webp 2923w,\\n/sacri-lapides-aegypti/static/778bf0d435ebaaedd37705ec8ef93a62/fb47c/home-slider-2.webp 5846w","type":"image/webp","sizes":"(min-width: 5846px) 5846px, 100vw"}]},"width":5846,"height":4001.9999999999995}')},6165:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#e8e8e8","images":{"fallback":{"src":"/sacri-lapides-aegypti/static/ab5bb55ce59c6a6d6a722a0b2f944bf9/c730d/home-slider-1.jpg","srcSet":"/sacri-lapides-aegypti/static/ab5bb55ce59c6a6d6a722a0b2f944bf9/e83fb/home-slider-1.jpg 1462w,\\n/sacri-lapides-aegypti/static/ab5bb55ce59c6a6d6a722a0b2f944bf9/08786/home-slider-1.jpg 2923w,\\n/sacri-lapides-aegypti/static/ab5bb55ce59c6a6d6a722a0b2f944bf9/c730d/home-slider-1.jpg 5846w","sizes":"(min-width: 5846px) 5846px, 100vw"},"sources":[{"srcSet":"/sacri-lapides-aegypti/static/ab5bb55ce59c6a6d6a722a0b2f944bf9/a1e3e/home-slider-1.webp 1462w,\\n/sacri-lapides-aegypti/static/ab5bb55ce59c6a6d6a722a0b2f944bf9/92a68/home-slider-1.webp 2923w,\\n/sacri-lapides-aegypti/static/ab5bb55ce59c6a6d6a722a0b2f944bf9/fb47c/home-slider-1.webp 5846w","type":"image/webp","sizes":"(min-width: 5846px) 5846px, 100vw"}]},"width":5846,"height":4001.9999999999995}')},8246:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#484838","images":{"fallback":{"src":"/sacri-lapides-aegypti/static/650254283eaebbf553f6ad342d2fc2b2/f5d3f/3-card.jpg","srcSet":"/sacri-lapides-aegypti/static/650254283eaebbf553f6ad342d2fc2b2/513b3/3-card.jpg 125w,\\n/sacri-lapides-aegypti/static/650254283eaebbf553f6ad342d2fc2b2/01fd9/3-card.jpg 250w,\\n/sacri-lapides-aegypti/static/650254283eaebbf553f6ad342d2fc2b2/f5d3f/3-card.jpg 500w,\\n/sacri-lapides-aegypti/static/650254283eaebbf553f6ad342d2fc2b2/b8189/3-card.jpg 1000w","sizes":"(min-width: 500px) 500px, 100vw"},"sources":[{"srcSet":"/sacri-lapides-aegypti/static/650254283eaebbf553f6ad342d2fc2b2/f52b8/3-card.webp 125w,\\n/sacri-lapides-aegypti/static/650254283eaebbf553f6ad342d2fc2b2/0317c/3-card.webp 250w,\\n/sacri-lapides-aegypti/static/650254283eaebbf553f6ad342d2fc2b2/3faf6/3-card.webp 500w,\\n/sacri-lapides-aegypti/static/650254283eaebbf553f6ad342d2fc2b2/d1e22/3-card.webp 1000w","type":"image/webp","sizes":"(min-width: 500px) 500px, 100vw"}]},"width":500,"height":429}')},8772:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#e8e8c8","images":{"fallback":{"src":"/sacri-lapides-aegypti/static/56928f89073068c69e2dbe31173dce59/f5d3f/1-card.jpg","srcSet":"/sacri-lapides-aegypti/static/56928f89073068c69e2dbe31173dce59/513b3/1-card.jpg 125w,\\n/sacri-lapides-aegypti/static/56928f89073068c69e2dbe31173dce59/01fd9/1-card.jpg 250w,\\n/sacri-lapides-aegypti/static/56928f89073068c69e2dbe31173dce59/f5d3f/1-card.jpg 500w,\\n/sacri-lapides-aegypti/static/56928f89073068c69e2dbe31173dce59/b8189/1-card.jpg 1000w","sizes":"(min-width: 500px) 500px, 100vw"},"sources":[{"srcSet":"/sacri-lapides-aegypti/static/56928f89073068c69e2dbe31173dce59/f52b8/1-card.webp 125w,\\n/sacri-lapides-aegypti/static/56928f89073068c69e2dbe31173dce59/0317c/1-card.webp 250w,\\n/sacri-lapides-aegypti/static/56928f89073068c69e2dbe31173dce59/3faf6/1-card.webp 500w,\\n/sacri-lapides-aegypti/static/56928f89073068c69e2dbe31173dce59/d1e22/1-card.webp 1000w","type":"image/webp","sizes":"(min-width: 500px) 500px, 100vw"}]},"width":500,"height":429}')},1175:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#b89878","images":{"fallback":{"src":"/sacri-lapides-aegypti/static/4532b3d382f360bf6a8cff00afe8d0b3/f5d3f/2-card.jpg","srcSet":"/sacri-lapides-aegypti/static/4532b3d382f360bf6a8cff00afe8d0b3/513b3/2-card.jpg 125w,\\n/sacri-lapides-aegypti/static/4532b3d382f360bf6a8cff00afe8d0b3/01fd9/2-card.jpg 250w,\\n/sacri-lapides-aegypti/static/4532b3d382f360bf6a8cff00afe8d0b3/f5d3f/2-card.jpg 500w,\\n/sacri-lapides-aegypti/static/4532b3d382f360bf6a8cff00afe8d0b3/b8189/2-card.jpg 1000w","sizes":"(min-width: 500px) 500px, 100vw"},"sources":[{"srcSet":"/sacri-lapides-aegypti/static/4532b3d382f360bf6a8cff00afe8d0b3/f52b8/2-card.webp 125w,\\n/sacri-lapides-aegypti/static/4532b3d382f360bf6a8cff00afe8d0b3/0317c/2-card.webp 250w,\\n/sacri-lapides-aegypti/static/4532b3d382f360bf6a8cff00afe8d0b3/3faf6/2-card.webp 500w,\\n/sacri-lapides-aegypti/static/4532b3d382f360bf6a8cff00afe8d0b3/d1e22/2-card.webp 1000w","type":"image/webp","sizes":"(min-width: 500px) 500px, 100vw"}]},"width":500,"height":429}')}}]);
//# sourceMappingURL=component---src-pages-index-js-c2546c21d06165410212.js.map