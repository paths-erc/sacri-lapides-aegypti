"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[678],{2484:function(e,t,a){a(7294);var i=a(3587),r=a(3218),n=i.ZP.section.withConfig({displayName:"Title__Wrapper",componentId:"sc-1hhr2bx-0"})(['.section-title{font-family:"Open Sans",sans-serif;font-size:1rem;font-weight:bolder;text-transform:capitalize;padding-bottom:2%;color:#822433;}.section-title.right{text-align:right;}.section-title.left{text-align:left;}']);t.Z=function(e){var t=e.title,a="right"===e.align?"right":"left";return(0,r.tZ)(n,null,(0,r.tZ)("div",{className:"section-title "+a},(0,r.tZ)("h2",null,t)))}},4132:function(e,t,a){a.r(t),a.d(t,{default:function(){return Ce}});var i=a(7294),r=a(3587),n=a(6187),o=a(994),s=a(7408),c=a(7036),l=a(5414),d=a(2359),p=a(4942),f=a(885),u=a(5987),b=a(5655);var g=function(e,t){var a=(0,i.useRef)(!0);(0,i.useEffect)((function(){if(!a.current)return e();a.current=!1}),t)},m=a(9424);function h(e){var t,a,r=(t=e,(a=(0,i.useRef)(t)).current=t,a);(0,i.useEffect)((function(){return function(){return r.current()}}),[])}var y=Math.pow(2,31)-1;function w(e,t,a){var i=a-Date.now();e.current=i<=y?setTimeout(t,i):setTimeout((function(){return w(e,t,a)}),y)}function v(){var e=function(){var e=(0,i.useRef)(!0),t=(0,i.useRef)((function(){return e.current}));return(0,i.useEffect)((function(){return function(){e.current=!1}}),[]),t.current}(),t=(0,i.useRef)();return h((function(){return clearTimeout(t.current)})),(0,i.useMemo)((function(){var a=function(){return clearTimeout(t.current)};return{set:function(i,r){void 0===r&&(r=0),e()&&(a(),r<=y?t.current=setTimeout(i,r):w(t,i,Date.now()+r))},clear:a}}),[])}var Z=a(1590),x=a(5900),j=a.n(x),O=a(5513),k=a(8870),P=(0,k.Z)("carousel-caption"),S=a(9541),N=a(5893),C=["as","bsPrefix","className"];function z(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function E(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?z(Object(a),!0).forEach((function(t){(0,p.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):z(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var T=i.forwardRef((function(e,t){var a=e.as,i=void 0===a?"div":a,r=e.bsPrefix,n=e.className,o=(0,u.Z)(e,C),s=j()(n,(0,S.vE)(r,"carousel-item"));return(0,N.jsx)(i,E(E({ref:t},o),{},{className:s}))}));T.displayName="CarouselItem";var D=T;function A(e,t){var a=0;return i.Children.map(e,(function(e){return i.isValidElement(e)?t(e,a++):e}))}var I=a(1831),R=a(9059),M=a(558),_=["as","bsPrefix","slide","fade","controls","indicators","indicatorLabels","activeIndex","onSelect","onSlide","onSlid","interval","keyboard","onKeyDown","pause","onMouseOver","onMouseOut","wrap","touch","onTouchStart","onTouchMove","onTouchEnd","prevIcon","prevLabel","nextIcon","nextLabel","variant","className","children"];function L(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function F(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?L(Object(a),!0).forEach((function(t){(0,p.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):L(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var Y={slide:!0,fade:!1,controls:!0,indicators:!0,indicatorLabels:[],defaultActiveIndex:0,interval:5e3,keyboard:!0,pause:"hover",wrap:!0,touch:!0,prevIcon:(0,N.jsx)("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:"Previous",nextIcon:(0,N.jsx)("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:"Next"};var B=i.forwardRef((function(e,t){var a=(0,O.Ch)(e,{activeIndex:"onSelect"}),r=a.as,n=void 0===r?"div":r,o=a.bsPrefix,s=a.slide,c=a.fade,l=a.controls,d=a.indicators,p=a.indicatorLabels,h=a.activeIndex,y=a.onSelect,w=a.onSlide,x=a.onSlid,k=a.interval,P=a.keyboard,C=a.onKeyDown,z=a.pause,E=a.onMouseOver,T=a.onMouseOut,D=a.wrap,L=a.touch,Y=a.onTouchStart,B=a.onTouchMove,J=a.onTouchEnd,W=a.prevIcon,H=a.prevLabel,V=a.nextIcon,G=a.nextLabel,U=a.variant,q=a.className,K=a.children,X=(0,u.Z)(a,_),Q=(0,S.vE)(o,"carousel"),$=(0,S.SC)(),ee=(0,i.useRef)(null),te=(0,i.useState)("next"),ae=(0,f.Z)(te,2),ie=ae[0],re=ae[1],ne=(0,i.useState)(!1),oe=(0,f.Z)(ne,2),se=oe[0],ce=oe[1],le=(0,i.useState)(!1),de=(0,f.Z)(le,2),pe=de[0],fe=de[1],ue=(0,i.useState)(h||0),be=(0,f.Z)(ue,2),ge=be[0],me=be[1];pe||h===ge||(ee.current?re(ee.current):re((h||0)>ge?"next":"prev"),s&&fe(!0),me(h||0)),(0,i.useEffect)((function(){ee.current&&(ee.current=null)}));var he,ye=0;!function(e,t){var a=0;i.Children.forEach(e,(function(e){i.isValidElement(e)&&t(e,a++)}))}(K,(function(e,t){++ye,t===h&&(he=e.props.interval)}));var we=(0,m.Z)(he),ve=(0,i.useCallback)((function(e){if(!pe){var t=ge-1;if(t<0){if(!D)return;t=ye-1}ee.current="prev",null==y||y(t,e)}}),[pe,ge,y,D,ye]),Ze=(0,b.Z)((function(e){if(!pe){var t=ge+1;if(t>=ye){if(!D)return;t=0}ee.current="next",null==y||y(t,e)}})),xe=(0,i.useRef)();(0,i.useImperativeHandle)(t,(function(){return{element:xe.current,prev:ve,next:Ze}}));var je=(0,b.Z)((function(){!document.hidden&&function(e){if(!(e&&e.style&&e.parentNode&&e.parentNode.style))return!1;var t=getComputedStyle(e);return"none"!==t.display&&"hidden"!==t.visibility&&"none"!==getComputedStyle(e.parentNode).display}(xe.current)&&($?ve():Ze())})),Oe="next"===ie?"start":"end";g((function(){s||(null==w||w(ge,Oe),null==x||x(ge,Oe))}),[ge]);var ke="".concat(Q,"-item-").concat(ie),Pe="".concat(Q,"-item-").concat(Oe),Se=(0,i.useCallback)((function(e){(0,R.Z)(e),null==w||w(ge,Oe)}),[w,ge,Oe]),Ne=(0,i.useCallback)((function(){fe(!1),null==x||x(ge,Oe)}),[x,ge,Oe]),Ce=(0,i.useCallback)((function(e){if(P&&!/input|textarea/i.test(e.target.tagName))switch(e.key){case"ArrowLeft":return e.preventDefault(),void($?Ze(e):ve(e));case"ArrowRight":return e.preventDefault(),void($?ve(e):Ze(e))}null==C||C(e)}),[P,C,ve,Ze,$]),ze=(0,i.useCallback)((function(e){"hover"===z&&ce(!0),null==E||E(e)}),[z,E]),Ee=(0,i.useCallback)((function(e){ce(!1),null==T||T(e)}),[T]),Te=(0,i.useRef)(0),De=(0,i.useRef)(0),Ae=v(),Ie=(0,i.useCallback)((function(e){Te.current=e.touches[0].clientX,De.current=0,"hover"===z&&ce(!0),null==Y||Y(e)}),[z,Y]),Re=(0,i.useCallback)((function(e){e.touches&&e.touches.length>1?De.current=0:De.current=e.touches[0].clientX-Te.current,null==B||B(e)}),[B]),Me=(0,i.useCallback)((function(e){if(L){var t=De.current;Math.abs(t)>40&&(t>0?ve(e):Ze(e))}"hover"===z&&Ae.set((function(){ce(!1)}),k||void 0),null==J||J(e)}),[L,z,ve,Ze,Ae,k,J]),_e=null!=k&&!se&&!pe,Le=(0,i.useRef)();(0,i.useEffect)((function(){var e,t;if(_e){var a=$?ve:Ze;return Le.current=window.setInterval(document.visibilityState?je:a,null!=(e=null!=(t=we.current)?t:k)?e:void 0),function(){null!==Le.current&&clearInterval(Le.current)}}}),[_e,ve,Ze,we,k,je,$]);var Fe=(0,i.useMemo)((function(){return d&&Array.from({length:ye},(function(e,t){return function(e){null==y||y(t,e)}}))}),[d,ye,y]);return(0,N.jsxs)(n,F(F({ref:xe},X),{},{onKeyDown:Ce,onMouseOver:ze,onMouseOut:Ee,onTouchStart:Ie,onTouchMove:Re,onTouchEnd:Me,className:j()(q,Q,s&&"slide",c&&"".concat(Q,"-fade"),U&&"".concat(Q,"-").concat(U)),children:[d&&(0,N.jsx)("div",{className:"".concat(Q,"-indicators"),children:A(K,(function(e,t){return(0,N.jsx)("button",{type:"button","data-bs-target":"","aria-label":null!=p&&p.length?p[t]:"Slide ".concat(t+1),className:t===ge?"active":void 0,onClick:Fe?Fe[t]:void 0,"aria-current":t===ge},t)}))}),(0,N.jsx)("div",{className:"".concat(Q,"-inner"),children:A(K,(function(e,t){var a=t===ge;return s?(0,N.jsx)(M.Z,{in:a,onEnter:a?Se:void 0,onEntered:a?Ne:void 0,addEndListener:I.Z,children:function(t,r){return i.cloneElement(e,F(F({},r),{},{className:j()(e.props.className,a&&"entered"!==t&&ke,("entered"===t||"exiting"===t)&&"active",("entering"===t||"exiting"===t)&&Pe)}))}}):i.cloneElement(e,{className:j()(e.props.className,a&&"active")})}))}),l&&(0,N.jsxs)(N.Fragment,{children:[(D||0!==h)&&(0,N.jsxs)(Z.Z,{className:"".concat(Q,"-control-prev"),onClick:ve,children:[W,H&&(0,N.jsx)("span",{className:"visually-hidden",children:H})]}),(D||h!==ye-1)&&(0,N.jsxs)(Z.Z,{className:"".concat(Q,"-control-next"),onClick:Ze,children:[V,G&&(0,N.jsx)("span",{className:"visually-hidden",children:G})]})]})]}))}));B.displayName="Carousel",B.defaultProps=Y;var J=Object.assign(B,{Caption:P,Item:D}),W=a.p+"static/sla-animal-d05abad75a323bab3b649fa7d69b5fe0.svg",H=(a(8823),a(1011),a(3218)),V=r.ZP.section.withConfig({displayName:"Slider__Wrapper",componentId:"sc-ze2tkk-0"})(['a{font-family:"Open Sans",sans-serif;font-weight:200;display:swap;text-decoration:none;color:white !important;font-size:0.7rem;@media (min-width:576px){font-size:1rem;}}a:hover{font-family:"Open Sans",sans-serif;font-weight:200;display:swap;text-decoration:underline;color:white !important;font-size:0.7rem;@media (min-width:576px){font-size:1rem;}}h3{font-family:"Open Sans",sans-serif;font-weight:200;display:swap;font-size:1.5rem;@media (min-width:576px){font-size:3rem;}margin-bottom:0.3;}h5{font-family:"Open Sans",sans-serif;font-weight:200;display:swap;font-size:0.6rem;@media (min-width:576px){font-size:1rem;}margin-bottom:0.5rem;}img{filter:brightness(75%);}img .d-block{background-position:center top !important;background-size:cover;background-repeat:no-repeat;height:calc(100vh);min-height:1000px;position:relative;}p{font-family:"Open Sans",sans-serif;font-weight:200;display:swap;font-size:0.5rem;margin-bottom:0;@media (min-width:576px){font-size:0.8rem;}}.carousel-caption{transform:translateY(-50%);bottom:initial;top:50%;@media (min-width:576px){top:40%;}}.carousel-indicators{margin-bottom:10%;visibility:hidden;}.carousel-item{-webkit-transform-style:preserve-3d;-moz-transform-style:preserve-3d;transform-style:preserve-3d;}.logo{max-width:500px;width:50%;margin:auto;filter:invert(1);}.logo-2{max-width:300px;width:50%;margin:auto;background:rgba(255,255,255,0.6);border-bottom-left-radius:50px 50px;}.logo-3{max-width:100px;width:40%;margin:auto;background:rgba(255,255,255,0.6);}.slider-wrap{position:relative;background-color:#f8f9fa;}.slider-wrap:after{content:"";width:100%;height:240px;background:#fff;z-index:1;bottom:-240px;left:0;position:absolute;-webkit-transform:skewY(-6deg);-ms-transform:skewY(-6deg);transform:skewY(-6deg);-webkit-transform-origin:top left;-ms-transform-origin:top left;transform-origin:top left;background-color:#f8f9fa;}']),G=function(){return(0,H.tZ)(V,null,(0,H.tZ)(l.q,null,(0,H.tZ)("title",null,"Sacri lapides Aegypti"),(0,H.tZ)("meta",{name:"description",content:"The Sacri lapides Aegypti project aims to study and document the processes of transformation of sacred spaces for worship, identity and memory from Pharaonic and Ptolemaic-Roman Egypt to Christian Egypt"}),(0,H.tZ)("meta",{name:"keywords",content:"egypt, egyptology, archaeology, late antique egypt, egyptian topography"}),(0,H.tZ)("meta",{name:"robots",description:"index"})),(0,H.tZ)("div",{className:"slider-wrap"},(0,H.tZ)("section",null,(0,H.tZ)(J,null,(0,H.tZ)(J.Item,{interval:9e3},(0,H.tZ)(d.S,{src:"../../../static/images/other/home-slider-1.jpg",objectFit:"contain",__imageData:a(6165)}),(0,H.tZ)(J.Caption,null,(0,H.tZ)("img",{className:"logo d-none d-md-inline-block",src:W,alt:"sacri-lapides"}),(0,H.tZ)("h3",null,"Sacri lapides Aegypti"),(0,H.tZ)("h5",null,"From the scribes of temples to the copyists of scriptoria. The transformation of spaces of cult, identity and memory from pharaonic and Graeco-Roman Egypt to Christian Egypt"),(0,H.tZ)("p",null,"A FARE MIUR Project hosted at Sapienza University of Rome"),(0,H.tZ)("a",{href:"https://saras.uniroma1.it/"},(0,H.tZ)("p",null,"Dept. of History, Anthropology, Religions, Arts and Perfoming Arts")),(0,H.tZ)("div",{"data-sal":"slide-up","data-sal-delay":"300","data-sal-easing":"ease"}))),(0,H.tZ)(J.Item,{interval:9e3},(0,H.tZ)(d.S,{src:"../../../static/images/other/home-slider-2.jpg",objectFit:"scale-down",__imageData:a(4387)}),(0,H.tZ)(J.Caption,null,(0,H.tZ)("img",{className:"logo d-none d-md-inline-block",src:W,alt:"sacri-lapides"}),(0,H.tZ)("h3",null,"Sacri lapides Aegypti"),(0,H.tZ)("h5",null,"From the scribes of temples to the copyists of scriptoria. The transformation of spaces of cult, identity and memory from pharaonic and Graeco-Roman Egypt to Christian Egypt"),(0,H.tZ)("p",null,"A FARE MIUR Project hosted at Sapienza University of Rome"),(0,H.tZ)("a",{href:"https://saras.uniroma1.it/"},(0,H.tZ)("p",null,"Dept. of History, Anthropology, Religions, Arts and Perfoming Arts"))))))))},U=a(2484),q=r.ZP.section.withConfig({displayName:"About__Wrapper",componentId:"sc-18ftiu9-0"})(['section{padding:0;position:relative;z-index:2;}p{font-family:"Montserrat",sans-serif;font-weight:200;font-size:0.9rem;line-height:1.5rem;display:swap;text-align:left;color:#777777;}.col{margin-bottom:3rem;}.about{padding-bottom:3rem;}.bottom-slant-gray{position:relative;padding-top:1.5%;padding-bottom:1%;background-color:#f8f9fa;}.bottom-slant-gray:after{content:"";width:100%;height:260px;background:#fff;z-index:-1;bottom:-200px;background-color:#f8f9fa;left:0;position:absolute;-webkit-transform:skewY(-6deg);-ms-transform:skewY(-6deg);transform:skewY(-6deg);-webkit-transform-origin:top left;-ms-transform-origin:top left;transform-origin:top left;}.image{padding-top:5rem;}']),K=function(){return(0,H.tZ)(q,null,(0,H.tZ)("section",{className:"section bottom-slant-gray"},(0,H.tZ)(n.Z,null,(0,H.tZ)(o.Z,{xs:1,md:2},(0,H.tZ)(s.Z,null,(0,H.tZ)(d.S,{src:"../../../static/images/logos/sla.svg",width:800,objectFit:"scale-down",title:"Sacri lapides Aegypti",alt:"Sacri lapides Aegypti",__imageData:a(8681)})),(0,H.tZ)(s.Z,null,(0,H.tZ)(U.Z,{title:"About",align:"left"}),(0,H.tZ)("p",{className:"about"},"The “",(0,H.tZ)("em",null,"Sacri lapides Aegypti")," ” project aims to study and document the processes of transformation of sacred spaces for worship, identity and memory from Pharaonic and Ptolemaic-Roman Egypt to Christian Egypt through topographical-functional analysis and the creation of a general catalogue, in digital form, of the temple structures transformed into Christian places used for the production and preservation of books, as well as their cultic function.",(0,H.tZ)("br",null)," “",(0,H.tZ)("em",null,"Sacri lapides Aegypti")," ","” is therefore the conceptual premise and the archaeological deepening of the ERC project “PAThs”, whose aim is to define a geography of Coptic manuscript production through the creation of a digital atlas, searchable thematically and chronologically."))),(0,H.tZ)(o.Z,{xs:1,md:2},(0,H.tZ)(s.Z,{className:"image"},(0,H.tZ)(d.S,{src:"../../../static/images/other/paths-atlas.png",width:800,objectFit:"scale-down",title:"PAThs",alt:"PAThs",__imageData:a(7687)})),(0,H.tZ)(s.Z,null,(0,H.tZ)(U.Z,{title:"Objective",align:"left"}),(0,H.tZ)("p",null,"As already stated, “",(0,H.tZ)("em",null,"Sacri lapides"),"” project sinks its roots in the experience and scientific results of the ERC project “PAThs”, which aims to provide a geography of Coptic literary production through the realization of a chronologically and thematically searchable digital atlas,that allows an effective representation of the places where Coptic manuscripts were found, produced, copied, transferred, used and stored, as well as of the relationships between the places themselves and the actors and the institutions involved. Concurrently, it aims to define the connections among the different"," ",(0,H.tZ)("em",null,"scriptoria")," and to analyse the distribution of the bibliological typologies. “",(0,H.tZ)("em",null,"Sacri lapides"),"”, on the other hand, is aimed at complementing the outcomes of “PAThs”, shedding light on the background, on the material preconditions, as well as on the transitional contexts, through the creation of a hitherto unattempted topography of Pharaonic shrines, chapels as well as graves whence the aforesaid manuscripts were recovered, since they were converted into basilicas, churches and monasteries housing ",(0,H.tZ)("em",null,"scriptoria")," ","and libraries. If the archaeological côté is already in part represented in the ERC project “PAThs”, it is not so fully examined in a structural and widely diachronic perspective as by “",(0,H.tZ)("em",null,"Sacri lapides"),"”. “",(0,H.tZ)("em",null,"Sacri lapides"),"” means to weld the history of the Coptic literary production to the Pharaonic and Ptolemaic-Roman past, lending practical substance to the understanding of the spread of new Christian cultural centres, which, similarly to the Pharaonic ones, are never severed from their places of worship. In the light of such awareness – the intimate connection between place of worship and place of production and storage of the culture – we mean to create a fully original research tool, which will serve Egyptologists as well as archaeologists and Late Antique scholars, namely an exhaustive digital catalogue of selection of the heathen shrines converted into Christian religious and cultural centers."))))))},X=a(5444);function Q(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function $(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Q(Object(a),!0).forEach((function(t){(0,p.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Q(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var ee=function(e){return i.forwardRef((function(t,a){return(0,N.jsx)("div",$($({},t),{},{ref:a,className:j()(t.className,e)}))}))},te=["bsPrefix","className","variant","as"];function ae(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}var ie=i.forwardRef((function(e,t){var a=e.bsPrefix,i=e.className,r=e.variant,n=e.as,o=void 0===n?"img":n,s=(0,u.Z)(e,te),c=(0,S.vE)(a,"card-img");return(0,N.jsx)(o,function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ae(Object(a),!0).forEach((function(t){(0,p.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ae(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({ref:t,className:j()(r?"".concat(c,"-").concat(r):c,i)},s))}));ie.displayName="CardImg";var re=ie,ne=a(8893),oe=["bsPrefix","className","as"];function se(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function ce(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?se(Object(a),!0).forEach((function(t){(0,p.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):se(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var le=i.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,n=e.as,o=void 0===n?"div":n,s=(0,u.Z)(e,oe),c=(0,S.vE)(a,"card-header"),l=(0,i.useMemo)((function(){return{cardHeaderBsPrefix:c}}),[c]);return(0,N.jsx)(ne.Z.Provider,{value:l,children:(0,N.jsx)(o,ce(ce({ref:t},s),{},{className:j()(r,c)}))})}));le.displayName="CardHeader";var de=le,pe=["bsPrefix","className","bg","text","border","body","children","as"];function fe(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function ue(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?fe(Object(a),!0).forEach((function(t){(0,p.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):fe(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var be=ee("h5"),ge=ee("h6"),me=(0,k.Z)("card-body"),he=(0,k.Z)("card-title",{Component:be}),ye=(0,k.Z)("card-subtitle",{Component:ge}),we=(0,k.Z)("card-link",{Component:"a"}),ve=(0,k.Z)("card-text",{Component:"p"}),Ze=(0,k.Z)("card-footer"),xe=(0,k.Z)("card-img-overlay"),je=i.forwardRef((function(e,t){var a=e.bsPrefix,i=e.className,r=e.bg,n=e.text,o=e.border,s=e.body,c=e.children,l=e.as,d=void 0===l?"div":l,p=(0,u.Z)(e,pe),f=(0,S.vE)(a,"card");return(0,N.jsx)(d,ue(ue({ref:t},p),{},{className:j()(i,f,r&&"bg-".concat(r),n&&"text-".concat(n),o&&"border-".concat(o)),children:s?(0,N.jsx)(me,{children:c}):c}))}));je.displayName="Card",je.defaultProps={body:!1};var Oe=Object.assign(je,{Img:re,Title:he,Subtitle:ye,Body:me,Link:we,Text:ve,Header:de,Footer:Ze,ImgOverlay:xe}),ke=r.ZP.section.withConfig({displayName:"Methods__Wrapper",componentId:"sc-xufcmz-0"})(['a{color:rgb(130,36,51);font-weight:bolder;font-size:0.8rem;line-height:1rem;display:swap;text-decoration:none;}a:hover{color:rgb(130,36,51);font-weight:600;font-size:0.8rem;line-height:1rem;display:swap;text-decoration:none;}.section{position:relative;z-index:2;}.methods:after{content:"";width:100%;height:260px;background:#fff;z-index:-1;bottom:-200px;background-color:#fff;left:0;position:absolute;-webkit-transform:skewY(-6deg);-ms-transform:skewY(-6deg);transform:skewY(-6deg);-webkit-transform-origin:top left;-ms-transform-origin:top left;transform-origin:top left;}.card{border:none;padding-top:10%;}.card-body{font-family:"Montserrat",sans-serif;font-weight:200;font-size:0.9rem;line-height:1.5rem;display:swap;text-align:right;color:#777777;}.card-title{font-family:"Montserrat",sans-serif;font-size:1.3rem;line-height:1.7rem;display:swap;text-align:right;color:#777777;font-weight:bolder;text-transform:uppercase;color:rgb(0,103,120);}.container{padding-top:240px;padding-bottom:240px;}']),Pe=function(){return(0,H.tZ)(ke,null,(0,H.tZ)("section",{className:"section methods"},(0,H.tZ)(n.Z,null,(0,H.tZ)(U.Z,{title:"Methodology"}),(0,H.tZ)(o.Z,{xs:1,md:3},(0,H.tZ)(s.Z,null,(0,H.tZ)(Oe,null,(0,H.tZ)(X.Link,{to:"https://docs.paths-erc.eu/data/"},(0,H.tZ)(d.S,{src:"../../../static/images/other/1-card.jpg",width:500,objectFit:"scale-down",__imageData:a(8772)})),(0,H.tZ)(Oe.Body,null,(0,H.tZ)(Oe.Title,null,"First Step"),(0,H.tZ)(X.Link,{to:"https://docs.paths-erc.eu/data/"},"“PAThs” DATA REPOSITORY"),(0,H.tZ)(Oe.Text,null,"Collection and georeferencing on GIS platform of several and diverse historical historical cartographical sources of Egypt and site-level topographical surveys of the main temples, churches, basilicas and other religious complexes.")))),(0,H.tZ)(s.Z,null,(0,H.tZ)(Oe,null,(0,H.tZ)(X.Link,{to:"https://docs.paths-erc.eu/data/svp"},(0,H.tZ)(d.S,{src:"../../../static/images/other/2-card.jpg",width:500,objectFit:"scale-down",__imageData:a(1175)})),(0,H.tZ)(Oe.Body,null,(0,H.tZ)(Oe.Title,null,"Second Step"),(0,H.tZ)(X.Link,{to:"https://docs.paths-erc.eu/data/svp"},"SVP PROTOCOL SPECIFICATIONS"),(0,H.tZ)(Oe.Text,null,"Vectorization of geo-referenced plants on GIS platform using a protocol (SPV) developed by “PAThs” team members.")))),(0,H.tZ)(s.Z,null,(0,H.tZ)(Oe,null,(0,H.tZ)(X.Link,{to:"https://docs.paths-erc.eu/data/demo/"},(0,H.tZ)(d.S,{src:"../../../static/images/other/3-card.jpg",width:500,objectFit:"scale-down",__imageData:a(8246)})),(0,H.tZ)(Oe.Body,null,(0,H.tZ)(Oe.Title,null,"Third Step"),(0,H.tZ)(X.Link,{to:"https://docs.paths-erc.eu/data/demo/"},"LIVE DEMO"),(0,H.tZ)(Oe.Text,null,"Proposal of chronological phases, reconstruction hypothesis, etc., which can be easily encoded with the help of minimal and highly intuitive vocabularies and visualised on the Web."))))))))},Se=r.ZP.section.withConfig({displayName:"Places__Wrapper",componentId:"sc-9jolxa-0"})(['a{color:rgb(130,36,51);font-size:0.9rem;line-height:1rem;display:swap;text-decoration:none;}a:hover{color:rgb(130,36,51);font-weight:500;font-size:0.9rem;line-height:1rem;display:swap;text-decoration:none;}section{padding:2em 5;position:relative;z-index:2;}.card{border:none;}.card-animation:hover{opacity:0.8;background-color:rgb(130,36,51,0.05);}.card-body{font-family:"Montserrat",sans-serif;font-weight:200;font-size:0.8rem;line-height:1.4rem;display:swap;text-align:left;color:#777777;}.card-title{font-weight:bolder;text-transform:uppercase;font-size:1.5rem;color:rgb(0,103,120);}.container{padding-bottom:5%;}.go-to{font-size:0.9rem;text-align:center;margin:1% 0 3% 0;padding-bottom:1rem;padding-left:1rem;text-align:left;}.go-to:hover{font-size:1rem;letter-spacing:0.1rem;background:none;border-color:transparent;}.typology{font-family:"Montserrat",sans-serif;font-weight:200;font-size:0.9rem;line-height:1.5rem;display:swap;text-align:left;color:#777777;font-style:italic;}']),Ne=function(e){return(0,H.tZ)(Se,null,(0,H.tZ)(n.Z,null,(0,H.tZ)(Oe,{className:"card-animation"},(0,H.tZ)(X.Link,{to:e.readMore,title:e.title,alt:e.title},(0,H.tZ)(Oe.Img,{variant:"top",src:(0,X.withPrefix)("/images/"+e.img)})),(0,H.tZ)(Oe.Body,null,(0,H.tZ)(Oe.Title,null,e.title),(0,H.tZ)("p",{className:"typology"},e.typology),(0,H.tZ)(Oe.Text,null,e.excerpt)),(0,H.tZ)(X.Link,{className:"go-to",to:e.readMore},"Read More..."))))},Ce=function(e){var t=e.data;return(0,H.tZ)(c.Z,null,(0,H.tZ)(G,null),(0,H.tZ)(K,null),(0,H.tZ)(Pe,null),(0,H.tZ)(ze,null,(0,H.tZ)("section",{className:"section bottom-slant-gray"},(0,H.tZ)(n.Z,null,(0,H.tZ)(U.Z,{title:"Archaeological sites",align:"right"}),(0,H.tZ)(n.Z,null,(0,H.tZ)("p",{className:"places-intro"},"The archaeological sites analysed and described by “",(0,H.tZ)("em",null,"Sacri lapides")," ” have been selected on the basis of rigorous criteria, such as the reliability of literary and documentary sources and of scientific archaeological reports. Particular attention has been dedicated to collecting maps and images of the relevant monuments, in order to “map” topographical, functional and religious changes.")),(0,H.tZ)(o.Z,{xs:1,md:3},t.allMarkdownRemark.nodes.map((function(e,t){return(0,H.tZ)(s.Z,{key:t},(0,H.tZ)(Ne,{img:e.frontmatter.img,title:e.frontmatter.title,path:e.frontmatter.path,typology:e.frontmatter.typology,excerpt:e.excerpt,readMore:e.fields.slug}))})))))))},ze=r.ZP.section.withConfig({displayName:"pages__Wrapper",componentId:"sc-1695hmt-0"})(['section{position:relative;z-index:2;}.bottom-slant-gray{position:relative;padding-bottom:10%;background-color:#f8f9fa;}.bottom-slant-gray:before{content:"";width:100%;height:240px;background:#f8f9fa;z-index:-1;top:0px;background-color:#f8f9fa;left:0;position:absolute;-webkit-transform:skewY(-6deg);-ms-transform:skewY(-6deg);transform:skewY(-6deg);-webkit-transform-origin:top left;-ms-transform-origin:top left;transform-origin:top left;}.places-intro{font-family:"Montserrat",sans-serif;font-weight:300;font-size:0.9rem;line-height:1.5rem;display:swap;text-align:right;color:#777777;}.row{padding-top:30px;}'])},7036:function(e,t,a){var i=a(7294),r=a(2910),n=a(2193),o=a(1925),s=a(3218);t.Z=function(e){var t=e.children;return(0,s.tZ)(i.Fragment,null,(0,s.tZ)(n.Z,null),t,(0,s.tZ)(r.Z,null),(0,s.tZ)(o.Z,{showBelow:250}))}},4387:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8e8c8","images":{"fallback":{"src":"/sacri-lapides-aegypti/static/b42d6ab03a1ec3a715197e6eefc2a747/a8a6b/home-slider-2.jpg","srcSet":"/sacri-lapides-aegypti/static/b42d6ab03a1ec3a715197e6eefc2a747/3de35/home-slider-2.jpg 1463w,\\n/sacri-lapides-aegypti/static/b42d6ab03a1ec3a715197e6eefc2a747/a807c/home-slider-2.jpg 2927w,\\n/sacri-lapides-aegypti/static/b42d6ab03a1ec3a715197e6eefc2a747/a8a6b/home-slider-2.jpg 5853w","sizes":"(min-width: 5853px) 5853px, 100vw"},"sources":[{"srcSet":"/sacri-lapides-aegypti/static/b42d6ab03a1ec3a715197e6eefc2a747/75111/home-slider-2.webp 1463w,\\n/sacri-lapides-aegypti/static/b42d6ab03a1ec3a715197e6eefc2a747/f62ea/home-slider-2.webp 2927w,\\n/sacri-lapides-aegypti/static/b42d6ab03a1ec3a715197e6eefc2a747/c228f/home-slider-2.webp 5853w","type":"image/webp","sizes":"(min-width: 5853px) 5853px, 100vw"}]},"width":5853,"height":4002}')},6165:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#e8e8e8","images":{"fallback":{"src":"/sacri-lapides-aegypti/static/ab5bb55ce59c6a6d6a722a0b2f944bf9/c730d/home-slider-1.jpg","srcSet":"/sacri-lapides-aegypti/static/ab5bb55ce59c6a6d6a722a0b2f944bf9/e83fb/home-slider-1.jpg 1462w,\\n/sacri-lapides-aegypti/static/ab5bb55ce59c6a6d6a722a0b2f944bf9/08786/home-slider-1.jpg 2923w,\\n/sacri-lapides-aegypti/static/ab5bb55ce59c6a6d6a722a0b2f944bf9/c730d/home-slider-1.jpg 5846w","sizes":"(min-width: 5846px) 5846px, 100vw"},"sources":[{"srcSet":"/sacri-lapides-aegypti/static/ab5bb55ce59c6a6d6a722a0b2f944bf9/a1e3e/home-slider-1.webp 1462w,\\n/sacri-lapides-aegypti/static/ab5bb55ce59c6a6d6a722a0b2f944bf9/92a68/home-slider-1.webp 2923w,\\n/sacri-lapides-aegypti/static/ab5bb55ce59c6a6d6a722a0b2f944bf9/fb47c/home-slider-1.webp 5846w","type":"image/webp","sizes":"(min-width: 5846px) 5846px, 100vw"}]},"width":5846,"height":4001.9999999999995}')},8246:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#484838","images":{"fallback":{"src":"/sacri-lapides-aegypti/static/650254283eaebbf553f6ad342d2fc2b2/f5d3f/3-card.jpg","srcSet":"/sacri-lapides-aegypti/static/650254283eaebbf553f6ad342d2fc2b2/513b3/3-card.jpg 125w,\\n/sacri-lapides-aegypti/static/650254283eaebbf553f6ad342d2fc2b2/01fd9/3-card.jpg 250w,\\n/sacri-lapides-aegypti/static/650254283eaebbf553f6ad342d2fc2b2/f5d3f/3-card.jpg 500w,\\n/sacri-lapides-aegypti/static/650254283eaebbf553f6ad342d2fc2b2/b8189/3-card.jpg 1000w","sizes":"(min-width: 500px) 500px, 100vw"},"sources":[{"srcSet":"/sacri-lapides-aegypti/static/650254283eaebbf553f6ad342d2fc2b2/f52b8/3-card.webp 125w,\\n/sacri-lapides-aegypti/static/650254283eaebbf553f6ad342d2fc2b2/0317c/3-card.webp 250w,\\n/sacri-lapides-aegypti/static/650254283eaebbf553f6ad342d2fc2b2/3faf6/3-card.webp 500w,\\n/sacri-lapides-aegypti/static/650254283eaebbf553f6ad342d2fc2b2/d1e22/3-card.webp 1000w","type":"image/webp","sizes":"(min-width: 500px) 500px, 100vw"}]},"width":500,"height":429}')},8772:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#e8e8c8","images":{"fallback":{"src":"/sacri-lapides-aegypti/static/56928f89073068c69e2dbe31173dce59/f5d3f/1-card.jpg","srcSet":"/sacri-lapides-aegypti/static/56928f89073068c69e2dbe31173dce59/513b3/1-card.jpg 125w,\\n/sacri-lapides-aegypti/static/56928f89073068c69e2dbe31173dce59/01fd9/1-card.jpg 250w,\\n/sacri-lapides-aegypti/static/56928f89073068c69e2dbe31173dce59/f5d3f/1-card.jpg 500w,\\n/sacri-lapides-aegypti/static/56928f89073068c69e2dbe31173dce59/b8189/1-card.jpg 1000w","sizes":"(min-width: 500px) 500px, 100vw"},"sources":[{"srcSet":"/sacri-lapides-aegypti/static/56928f89073068c69e2dbe31173dce59/f52b8/1-card.webp 125w,\\n/sacri-lapides-aegypti/static/56928f89073068c69e2dbe31173dce59/0317c/1-card.webp 250w,\\n/sacri-lapides-aegypti/static/56928f89073068c69e2dbe31173dce59/3faf6/1-card.webp 500w,\\n/sacri-lapides-aegypti/static/56928f89073068c69e2dbe31173dce59/d1e22/1-card.webp 1000w","type":"image/webp","sizes":"(min-width: 500px) 500px, 100vw"}]},"width":500,"height":429}')},1175:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#b89878","images":{"fallback":{"src":"/sacri-lapides-aegypti/static/4532b3d382f360bf6a8cff00afe8d0b3/f5d3f/2-card.jpg","srcSet":"/sacri-lapides-aegypti/static/4532b3d382f360bf6a8cff00afe8d0b3/513b3/2-card.jpg 125w,\\n/sacri-lapides-aegypti/static/4532b3d382f360bf6a8cff00afe8d0b3/01fd9/2-card.jpg 250w,\\n/sacri-lapides-aegypti/static/4532b3d382f360bf6a8cff00afe8d0b3/f5d3f/2-card.jpg 500w,\\n/sacri-lapides-aegypti/static/4532b3d382f360bf6a8cff00afe8d0b3/b8189/2-card.jpg 1000w","sizes":"(min-width: 500px) 500px, 100vw"},"sources":[{"srcSet":"/sacri-lapides-aegypti/static/4532b3d382f360bf6a8cff00afe8d0b3/f52b8/2-card.webp 125w,\\n/sacri-lapides-aegypti/static/4532b3d382f360bf6a8cff00afe8d0b3/0317c/2-card.webp 250w,\\n/sacri-lapides-aegypti/static/4532b3d382f360bf6a8cff00afe8d0b3/3faf6/2-card.webp 500w,\\n/sacri-lapides-aegypti/static/4532b3d382f360bf6a8cff00afe8d0b3/d1e22/2-card.webp 1000w","type":"image/webp","sizes":"(min-width: 500px) 500px, 100vw"}]},"width":500,"height":429}')},8681:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/sacri-lapides-aegypti/static/c71e1c5d1dd31ca38ad1334bac7cce9d/fdb6d/sla.svg","srcSet":"/sacri-lapides-aegypti/static/c71e1c5d1dd31ca38ad1334bac7cce9d/62ab2/sla.svg 76w,\\n/sacri-lapides-aegypti/static/c71e1c5d1dd31ca38ad1334bac7cce9d/25ab8/sla.svg 153w,\\n/sacri-lapides-aegypti/static/c71e1c5d1dd31ca38ad1334bac7cce9d/fdb6d/sla.svg 305w","sizes":"(min-width: 305px) 305px, 100vw"},"sources":[{"srcSet":"/sacri-lapides-aegypti/static/c71e1c5d1dd31ca38ad1334bac7cce9d/88d08/sla.webp 76w,\\n/sacri-lapides-aegypti/static/c71e1c5d1dd31ca38ad1334bac7cce9d/9c992/sla.webp 153w,\\n/sacri-lapides-aegypti/static/c71e1c5d1dd31ca38ad1334bac7cce9d/38902/sla.webp 305w","type":"image/webp","sizes":"(min-width: 305px) 305px, 100vw"}]},"width":800,"height":516.7213114754098}')},7687:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#d8c8a8","images":{"fallback":{"src":"/sacri-lapides-aegypti/static/36f12fdb4fc87ef1fa96d97b04b91182/7be50/paths-atlas.png","srcSet":"/sacri-lapides-aegypti/static/36f12fdb4fc87ef1fa96d97b04b91182/bf087/paths-atlas.png 200w,\\n/sacri-lapides-aegypti/static/36f12fdb4fc87ef1fa96d97b04b91182/870f7/paths-atlas.png 400w,\\n/sacri-lapides-aegypti/static/36f12fdb4fc87ef1fa96d97b04b91182/7be50/paths-atlas.png 800w,\\n/sacri-lapides-aegypti/static/36f12fdb4fc87ef1fa96d97b04b91182/d4595/paths-atlas.png 1600w","sizes":"(min-width: 800px) 800px, 100vw"},"sources":[{"srcSet":"/sacri-lapides-aegypti/static/36f12fdb4fc87ef1fa96d97b04b91182/4c802/paths-atlas.webp 200w,\\n/sacri-lapides-aegypti/static/36f12fdb4fc87ef1fa96d97b04b91182/39f25/paths-atlas.webp 400w,\\n/sacri-lapides-aegypti/static/36f12fdb4fc87ef1fa96d97b04b91182/359a4/paths-atlas.webp 800w,\\n/sacri-lapides-aegypti/static/36f12fdb4fc87ef1fa96d97b04b91182/57f91/paths-atlas.webp 1600w","type":"image/webp","sizes":"(min-width: 800px) 800px, 100vw"}]},"width":800,"height":631}')}}]);
//# sourceMappingURL=component---src-pages-index-js-fda8d68ef8614374b845.js.map