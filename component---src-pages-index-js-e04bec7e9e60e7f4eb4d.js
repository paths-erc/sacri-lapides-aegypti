"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[678],{8497:function(t,e,r){var n=r(7294),o=r(296),a=r(4998),i=r(1925),s=r(3218);e.Z=function(t){var e=t.children;return(0,s.tZ)(n.Fragment,null,(0,s.tZ)(a.Z,null),e,(0,s.tZ)(o.Z,null),(0,s.tZ)(i.Z,{showBelow:250}))}},173:function(t,e,r){r(7294);var n=r(3587),o=r(3218),a=n.ZP.section.withConfig({displayName:"TitleL__Wrapper",componentId:"sc-xnqu2p-0"})(['.section-title{font-family:"Open Sans",sans-serif;font-size:3rem;font-weight:bolder;display:swap;text-transform:capitalize;text-align:left;padding-bottom:2%;color:#777777;text-decoration:underline;text-decoration-color:rgb(130,36,51,0.6);text-decoration-thickness:0.1em;}']);e.Z=function(t){var e=t.title;return(0,o.tZ)(a,null,(0,o.tZ)("div",{className:"section-title"},(0,o.tZ)("h1",null,e||"default title")))}},9979:function(t,e,r){r(7294);var n=r(3587),o=r(3218),a=n.ZP.section.withConfig({displayName:"TitleR__Wrapper",componentId:"sc-n2ptdy-0"})(['.section-title{font-family:"Open Sans",sans-serif;font-size:3rem;font-weight:bolder;display:swap;text-transform:capitalize;text-align:right;color:#777777;text-decoration:underline;text-decoration-color:rgb(130,36,51,0.6);text-decoration-thickness:0.1em;}']);e.Z=function(t){var e=t.title;return(0,o.tZ)(a,null,(0,o.tZ)("div",{className:"section-title"},(0,o.tZ)("h1",null,e||"default title")))}},6069:function(t,e,r){r.r(e),r.d(e,{default:function(){return Dt}});var n=r(7294),o=r(6187),a=r(994),i=r(7408),s=r(3587),c=r(8497),l=r(4942),u=r(885),f=r(5987),d=r(5655);var p=function(t,e){var r=(0,n.useRef)(!0);(0,n.useEffect)((function(){if(!r.current)return t();r.current=!1}),e)},m=r(9424);function g(t){var e,r,o=(e=t,(r=(0,n.useRef)(e)).current=e,r);(0,n.useEffect)((function(){return function(){return o.current()}}),[])}var b=Math.pow(2,31)-1;function h(t,e,r){var n=r-Date.now();t.current=n<=b?setTimeout(e,n):setTimeout((function(){return h(t,e,r)}),b)}function v(){var t=function(){var t=(0,n.useRef)(!0),e=(0,n.useRef)((function(){return t.current}));return(0,n.useEffect)((function(){return function(){t.current=!1}}),[]),e.current}(),e=(0,n.useRef)();return g((function(){return clearTimeout(e.current)})),(0,n.useMemo)((function(){var r=function(){return clearTimeout(e.current)};return{set:function(n,o){void 0===o&&(o=0),t()&&(r(),o<=b?e.current=setTimeout(n,o):h(e,n,Date.now()+o))},clear:r}}),[])}var y=r(1590),Z=r(5900),w=r.n(Z),x=r(5513),O=r(8870),j=(0,O.Z)("carousel-caption"),P=r(9541),k=r(5893),N=["as","bsPrefix","className"];function S(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function C(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?S(Object(r),!0).forEach((function(e){(0,l.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):S(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var E=n.forwardRef((function(t,e){var r=t.as,n=void 0===r?"div":r,o=t.bsPrefix,a=t.className,i=(0,f.Z)(t,N),s=w()(a,(0,P.vE)(o,"carousel-item"));return(0,k.jsx)(n,C(C({ref:e},i),{},{className:s}))}));E.displayName="CarouselItem";var I=E;function z(t,e){var r=0;return n.Children.map(t,(function(t){return n.isValidElement(t)?e(t,r++):t}))}var D=r(1831),T=r(9059),R=r(558),M=["as","bsPrefix","slide","fade","controls","indicators","indicatorLabels","activeIndex","onSelect","onSlide","onSlid","interval","keyboard","onKeyDown","pause","onMouseOver","onMouseOut","wrap","touch","onTouchStart","onTouchMove","onTouchEnd","prevIcon","prevLabel","nextIcon","nextLabel","variant","className","children"];function L(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function A(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?L(Object(r),!0).forEach((function(e){(0,l.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):L(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var _={slide:!0,fade:!1,controls:!0,indicators:!0,indicatorLabels:[],defaultActiveIndex:0,interval:5e3,keyboard:!0,pause:"hover",wrap:!0,touch:!0,prevIcon:(0,k.jsx)("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:"Previous",nextIcon:(0,k.jsx)("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:"Next"};var Y=n.forwardRef((function(t,e){var r=(0,x.Ch)(t,{activeIndex:"onSelect"}),o=r.as,a=void 0===o?"div":o,i=r.bsPrefix,s=r.slide,c=r.fade,l=r.controls,g=r.indicators,b=r.indicatorLabels,h=r.activeIndex,Z=r.onSelect,O=r.onSlide,j=r.onSlid,N=r.interval,S=r.keyboard,C=r.onKeyDown,E=r.pause,I=r.onMouseOver,L=r.onMouseOut,_=r.wrap,Y=r.touch,B=r.onTouchStart,F=r.onTouchMove,W=r.onTouchEnd,H=r.prevIcon,U=r.prevLabel,V=r.nextIcon,G=r.nextLabel,K=r.variant,X=r.className,q=r.children,J=(0,f.Z)(r,M),Q=(0,P.vE)(i,"carousel"),$=(0,P.SC)(),tt=(0,n.useRef)(null),et=(0,n.useState)("next"),rt=(0,u.Z)(et,2),nt=rt[0],ot=rt[1],at=(0,n.useState)(!1),it=(0,u.Z)(at,2),st=it[0],ct=it[1],lt=(0,n.useState)(!1),ut=(0,u.Z)(lt,2),ft=ut[0],dt=ut[1],pt=(0,n.useState)(h||0),mt=(0,u.Z)(pt,2),gt=mt[0],bt=mt[1];ft||h===gt||(tt.current?ot(tt.current):ot((h||0)>gt?"next":"prev"),s&&dt(!0),bt(h||0)),(0,n.useEffect)((function(){tt.current&&(tt.current=null)}));var ht,vt=0;!function(t,e){var r=0;n.Children.forEach(t,(function(t){n.isValidElement(t)&&e(t,r++)}))}(q,(function(t,e){++vt,e===h&&(ht=t.props.interval)}));var yt=(0,m.Z)(ht),Zt=(0,n.useCallback)((function(t){if(!ft){var e=gt-1;if(e<0){if(!_)return;e=vt-1}tt.current="prev",null==Z||Z(e,t)}}),[ft,gt,Z,_,vt]),wt=(0,d.Z)((function(t){if(!ft){var e=gt+1;if(e>=vt){if(!_)return;e=0}tt.current="next",null==Z||Z(e,t)}})),xt=(0,n.useRef)();(0,n.useImperativeHandle)(e,(function(){return{element:xt.current,prev:Zt,next:wt}}));var Ot=(0,d.Z)((function(){!document.hidden&&function(t){if(!(t&&t.style&&t.parentNode&&t.parentNode.style))return!1;var e=getComputedStyle(t);return"none"!==e.display&&"hidden"!==e.visibility&&"none"!==getComputedStyle(t.parentNode).display}(xt.current)&&($?Zt():wt())})),jt="next"===nt?"start":"end";p((function(){s||(null==O||O(gt,jt),null==j||j(gt,jt))}),[gt]);var Pt="".concat(Q,"-item-").concat(nt),kt="".concat(Q,"-item-").concat(jt),Nt=(0,n.useCallback)((function(t){(0,T.Z)(t),null==O||O(gt,jt)}),[O,gt,jt]),St=(0,n.useCallback)((function(){dt(!1),null==j||j(gt,jt)}),[j,gt,jt]),Ct=(0,n.useCallback)((function(t){if(S&&!/input|textarea/i.test(t.target.tagName))switch(t.key){case"ArrowLeft":return t.preventDefault(),void($?wt(t):Zt(t));case"ArrowRight":return t.preventDefault(),void($?Zt(t):wt(t))}null==C||C(t)}),[S,C,Zt,wt,$]),Et=(0,n.useCallback)((function(t){"hover"===E&&ct(!0),null==I||I(t)}),[E,I]),It=(0,n.useCallback)((function(t){ct(!1),null==L||L(t)}),[L]),zt=(0,n.useRef)(0),Dt=(0,n.useRef)(0),Tt=v(),Rt=(0,n.useCallback)((function(t){zt.current=t.touches[0].clientX,Dt.current=0,"hover"===E&&ct(!0),null==B||B(t)}),[E,B]),Mt=(0,n.useCallback)((function(t){t.touches&&t.touches.length>1?Dt.current=0:Dt.current=t.touches[0].clientX-zt.current,null==F||F(t)}),[F]),Lt=(0,n.useCallback)((function(t){if(Y){var e=Dt.current;Math.abs(e)>40&&(e>0?Zt(t):wt(t))}"hover"===E&&Tt.set((function(){ct(!1)}),N||void 0),null==W||W(t)}),[Y,E,Zt,wt,Tt,N,W]),At=null!=N&&!st&&!ft,_t=(0,n.useRef)();(0,n.useEffect)((function(){var t,e;if(At){var r=$?Zt:wt;return _t.current=window.setInterval(document.visibilityState?Ot:r,null!=(t=null!=(e=yt.current)?e:N)?t:void 0),function(){null!==_t.current&&clearInterval(_t.current)}}}),[At,Zt,wt,yt,N,Ot,$]);var Yt=(0,n.useMemo)((function(){return g&&Array.from({length:vt},(function(t,e){return function(t){null==Z||Z(e,t)}}))}),[g,vt,Z]);return(0,k.jsxs)(a,A(A({ref:xt},J),{},{onKeyDown:Ct,onMouseOver:Et,onMouseOut:It,onTouchStart:Rt,onTouchMove:Mt,onTouchEnd:Lt,className:w()(X,Q,s&&"slide",c&&"".concat(Q,"-fade"),K&&"".concat(Q,"-").concat(K)),children:[g&&(0,k.jsx)("div",{className:"".concat(Q,"-indicators"),children:z(q,(function(t,e){return(0,k.jsx)("button",{type:"button","data-bs-target":"","aria-label":null!=b&&b.length?b[e]:"Slide ".concat(e+1),className:e===gt?"active":void 0,onClick:Yt?Yt[e]:void 0,"aria-current":e===gt},e)}))}),(0,k.jsx)("div",{className:"".concat(Q,"-inner"),children:z(q,(function(t,e){var r=e===gt;return s?(0,k.jsx)(R.Z,{in:r,onEnter:r?Nt:void 0,onEntered:r?St:void 0,addEndListener:D.Z,children:function(e,o){return n.cloneElement(t,A(A({},o),{},{className:w()(t.props.className,r&&"entered"!==e&&Pt,("entered"===e||"exiting"===e)&&"active",("entering"===e||"exiting"===e)&&kt)}))}}):n.cloneElement(t,{className:w()(t.props.className,r&&"active")})}))}),l&&(0,k.jsxs)(k.Fragment,{children:[(_||0!==h)&&(0,k.jsxs)(y.Z,{className:"".concat(Q,"-control-prev"),onClick:Zt,children:[H,U&&(0,k.jsx)("span",{className:"visually-hidden",children:U})]}),(_||h!==vt-1)&&(0,k.jsxs)(y.Z,{className:"".concat(Q,"-control-next"),onClick:wt,children:[V,G&&(0,k.jsx)("span",{className:"visually-hidden",children:G})]})]})]}))}));Y.displayName="Carousel",Y.defaultProps=_;var B=Object.assign(Y,{Caption:j,Item:I}),F=r(5016),W=r.p+"static/home-slider-2-3c138cd72a82d57cb470d39f204d26a6.jpg",H=r(3218),U=s.ZP.section.withConfig({displayName:"Slider__Wrapper",componentId:"sc-17elcez-0"})(['.carousel-caption{top:50%;transform:translateY(-50%);bottom:initial;}.carousel-indicators{margin-bottom:10%;visibility:hidden;}.carousel-item{-webkit-transform-style:preserve-3d;-moz-transform-style:preserve-3d;transform-style:preserve-3d;}h3{font-family:"Open Sans",sans-serif;font-weight:200;display:swap;font-size:300%;}img{filter:brightness(75%);}img .d-block{background-position:center top !important;background-size:cover;background-repeat:no-repeat;height:calc(100vh);min-height:1000px;position:relative;}p{font-family:"Open Sans",sans-serif;font-weight:200;display:swap;}.slider-wrap{position:relative;background-color:#f8f9fa;}.slider-wrap:after{content:"";width:100%;height:240px;background:#fff;z-index:1;bottom:-240px;left:0;position:absolute;-webkit-transform:skewY(-6deg);-ms-transform:skewY(-6deg);transform:skewY(-6deg);-webkit-transform-origin:top left;-ms-transform-origin:top left;transform-origin:top left;background-color:#f8f9fa;}']),V=function(){return(0,H.tZ)(U,null,(0,H.tZ)("div",{className:"slider-wrap"},(0,H.tZ)("section",null,(0,H.tZ)(B,null,(0,H.tZ)(B.Item,{interval:9e3},(0,H.tZ)("img",{className:"d-block w-100",src:F.Z,alt:"First slide"}),(0,H.tZ)(B.Caption,null,(0,H.tZ)("h3",null,"Sacri Lapides Aegypti"),(0,H.tZ)("p",null,"A FARE MIUR Project hosted at Sapienza University of Rome"),(0,H.tZ)("div",{"data-sal":"slide-up","data-sal-delay":"300","data-sal-easing":"ease"}))),(0,H.tZ)(B.Item,{interval:9e3},(0,H.tZ)("img",{className:"d-block w-100",src:W,alt:"Second slide"}),(0,H.tZ)(B.Caption,null,(0,H.tZ)("h3",null,"Sacri Lapides Aegypti"),(0,H.tZ)("p",null,"A FARE MIUR Project hosted at Sapienza University of Rome")))))))},G=r(9979),K=r(2009),X=s.ZP.section.withConfig({displayName:"About__Wrapper",componentId:"sc-1nlm47h-0"})(['section{padding:0;position:relative;z-index:2;}p{font-family:"Montserrat",sans-serif;font-weight:200;font-size:1.2rem;line-height:1.7rem;display:swap;text-align:right;color:#777777;padding-top:3rem;}.col{margin-bottom:3rem;}.about-img{text-align:center;}.bottom-slant-gray{position:relative;padding-top:1.5%;padding-bottom:1%;background-color:#f8f9fa;}.bottom-slant-gray:after{content:"";width:100%;height:260px;background:#fff;z-index:-1;bottom:-200px;background-color:#f8f9fa;left:0;position:absolute;-webkit-transform:skewY(-6deg);-ms-transform:skewY(-6deg);transform:skewY(-6deg);-webkit-transform-origin:top left;-ms-transform-origin:top left;transform-origin:top left;}']),q=function(){return(0,H.tZ)(X,null,(0,H.tZ)("section",{className:"section bottom-slant-gray"},(0,H.tZ)(o.Z,null,(0,H.tZ)(a.Z,{xs:1,md:2},(0,H.tZ)(i.Z,null,(0,H.tZ)("img",{className:"about-img",src:K.Z,alt:"Sacri Lapides Aegypti Logo"})),(0,H.tZ)(i.Z,null,(0,H.tZ)(G.Z,{title:"about"}),(0,H.tZ)("p",null,"The ",(0,H.tZ)("em",null,"Sacri lapides Aegypti")," project aims to study and document the processes of transformation of sacred spaces for worship, identity and memory from Pharaonic and Ptolemaic-Roman Egypt to Christian Egypt through topographical-functional analysis and the creation of a general catalogue, in digital form, of the temple structures transformed into Christian places used for the production and preservation of books, as well as their cultic function.",(0,H.tZ)("em",null,"Sacri lapides Aegypti")," is therefore the conceptual premise and the archaeological investigation of the ERC project PAThs, whose aim is to define a geography of Coptic manuscript production through the creation of a digital atlas, searchable thematically and chronologically."))))))};function J(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function Q(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?J(Object(r),!0).forEach((function(e){(0,l.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):J(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var $=function(t){return n.forwardRef((function(e,r){return(0,k.jsx)("div",Q(Q({},e),{},{ref:r,className:w()(e.className,t)}))}))},tt=["bsPrefix","className","variant","as"];function et(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}var rt=n.forwardRef((function(t,e){var r=t.bsPrefix,n=t.className,o=t.variant,a=t.as,i=void 0===a?"img":a,s=(0,f.Z)(t,tt),c=(0,P.vE)(r,"card-img");return(0,k.jsx)(i,function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?et(Object(r),!0).forEach((function(e){(0,l.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):et(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({ref:e,className:w()(o?"".concat(c,"-").concat(o):c,n)},s))}));rt.displayName="CardImg";var nt=rt,ot=r(8893),at=["bsPrefix","className","as"];function it(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function st(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?it(Object(r),!0).forEach((function(e){(0,l.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):it(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var ct=n.forwardRef((function(t,e){var r=t.bsPrefix,o=t.className,a=t.as,i=void 0===a?"div":a,s=(0,f.Z)(t,at),c=(0,P.vE)(r,"card-header"),l=(0,n.useMemo)((function(){return{cardHeaderBsPrefix:c}}),[c]);return(0,k.jsx)(ot.Z.Provider,{value:l,children:(0,k.jsx)(i,st(st({ref:e},s),{},{className:w()(o,c)}))})}));ct.displayName="CardHeader";var lt=ct,ut=["bsPrefix","className","bg","text","border","body","children","as"];function ft(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function dt(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?ft(Object(r),!0).forEach((function(e){(0,l.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):ft(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var pt=$("h5"),mt=$("h6"),gt=(0,O.Z)("card-body"),bt=(0,O.Z)("card-title",{Component:pt}),ht=(0,O.Z)("card-subtitle",{Component:mt}),vt=(0,O.Z)("card-link",{Component:"a"}),yt=(0,O.Z)("card-text",{Component:"p"}),Zt=(0,O.Z)("card-footer"),wt=(0,O.Z)("card-img-overlay"),xt=n.forwardRef((function(t,e){var r=t.bsPrefix,n=t.className,o=t.bg,a=t.text,i=t.border,s=t.body,c=t.children,l=t.as,u=void 0===l?"div":l,d=(0,f.Z)(t,ut),p=(0,P.vE)(r,"card");return(0,k.jsx)(u,dt(dt({ref:e},d),{},{className:w()(n,p,o&&"bg-".concat(o),a&&"text-".concat(a),i&&"border-".concat(i)),children:s?(0,k.jsx)(gt,{children:c}):c}))}));xt.displayName="Card",xt.defaultProps={body:!1};var Ot=Object.assign(xt,{Img:nt,Title:bt,Subtitle:ht,Body:gt,Link:vt,Text:yt,Header:lt,Footer:Zt,ImgOverlay:wt}),jt=r(6594),Pt=r(173),kt=r.p+"static/1-card-d38df0736c042cf935a442835c899fee.jpg",Nt=r.p+"static/2-card-61be264690a19986f39ca6afde6cb5ab.jpg",St=r.p+"static/3-card-0515d490e6afa3256946442ce3b24e2f.jpg",Ct=s.ZP.section.withConfig({displayName:"Methods__Wrapper",componentId:"sc-1np2zjs-0"})(['a{color:rgb(130,36,51);font-weight:bolder;font-size:0.8rem;line-height:1rem;text-transform:uppercase;display:swap;text-decoration:none;}a:hover{color:rgb(130,36,51);font-weight:bolder;font-size:0.8rem;line-height:1rem;text-transform:uppercase;display:swap;text-decoration:none;}button{font-family:"Montserrat",sans-serif;font-weight:200;font-size:1.2rem;line-height:1.7rem;display:swap;text-align:right;color:#777777;text-align:left;margin:3% 0 3% 0;background:rgb(130,36,51,0.2);border-color:rgb(130,36,51,0.3);}button:hover{background:none;border-color:transparent;}.section{position:relative;z-index:2;}.methods:after{content:"";width:100%;height:260px;background:#fff;z-index:-1;bottom:-200px;background-color:#fff;left:0;position:absolute;-webkit-transform:skewY(-6deg);-ms-transform:skewY(-6deg);transform:skewY(-6deg);-webkit-transform-origin:top left;-ms-transform-origin:top left;transform-origin:top left;}.card{border:none;padding-top:10%;}.card-body{font-family:"Montserrat",sans-serif;font-weight:200;font-size:1.2rem;line-height:1.7rem;display:swap;text-align:right;color:#777777;}.card-title{font-family:"Montserrat",sans-serif;font-size:1.8rem;line-height:1.7rem;display:swap;text-align:right;color:#777777;font-weight:bolder;text-transform:uppercase;}.container{padding-top:240px;padding-bottom:240px;}']),Et=function(){return(0,H.tZ)(Ct,null,(0,H.tZ)("section",{className:"section methods"},(0,H.tZ)(o.Z,null,(0,H.tZ)(Pt.Z,{title:"methodology"}),(0,H.tZ)(a.Z,{xs:1,md:3},(0,H.tZ)(i.Z,null,(0,H.tZ)(Ot,null,(0,H.tZ)(Ot.Img,{variant:"top",fluid:!0,src:kt}),(0,H.tZ)(Ot.Body,null,(0,H.tZ)(Ot.Title,null,"First Step"),(0,H.tZ)(jt.Z,{variant:"primary"},(0,H.tZ)("a",{href:"https://docs.paths-erc.eu/data/"},"go to paths repository")),(0,H.tZ)(Ot.Text,null,"Collection and georeferencing on GIS platform of most of the historical cartography of Egypt and plans of the main temple/church/basilica complexes")))),(0,H.tZ)(i.Z,null,(0,H.tZ)(Ot,null,(0,H.tZ)(Ot.Img,{variant:"top",src:Nt}),(0,H.tZ)(Ot.Body,null,(0,H.tZ)(Ot.Title,null,"Second Step"),(0,H.tZ)(jt.Z,{variant:"primary"},(0,H.tZ)("a",{href:"https://docs.paths-erc.eu/data/svp"},"go to spv protocol")),(0,H.tZ)(Ot.Text,null,"Vectorization of geo-referenced plants on GIS platform using a protocol (SPV) developed by PAThs team members")))),(0,H.tZ)(i.Z,null,(0,H.tZ)(Ot,null,(0,H.tZ)(Ot.Img,{variant:"top",src:St}),(0,H.tZ)(Ot.Body,null,(0,H.tZ)(Ot.Title,null,"Third Step"),(0,H.tZ)(jt.Z,{variant:"primary"},(0,H.tZ)("a",{href:"https://docs.paths-erc.eu/data/demo/#./paths.places.101-Tebtynis/BGQ6JNX2-47"},"go to live demo")),(0,H.tZ)(Ot.Text,null,"Chronological phases, reconstruction hypothesis, etc., can be easily endoded with a help of minimal and higly intuitive vocabularies"))))))))},It=s.ZP.section.withConfig({displayName:"OurSites__Wrapper",componentId:"sc-jvndl1-0"})(['a{color:rgb(130,36,51);font-weight:bolder;font-size:0.8rem;line-height:1rem;text-transform:uppercase;display:swap;text-decoration:none;}a:hover{color:rgb(130,36,51);font-weight:bolder;font-size:0.8rem;line-height:1rem;text-transform:uppercase;display:swap;text-decoration:none;}.go-to{text-align:center;margin:3% 0 3% 0;background:rgb(130,36,51,0.2) !important;border-color:rgb(130,36,51,0.3) !important;}.go-to:hover{background:none;border-color:transparent;}section{padding:2em 5;position:relative;z-index:2;}.card{border:none;}.card-body{font-family:"Montserrat",sans-serif;font-weight:200;font-size:1.2rem;line-height:1.7rem;display:swap;text-align:right;color:#777777;}.card-title{font-weight:bolder;text-transform:uppercase;font-size:1.5rem;}.container{padding-bottom:5%;}.sites-img{border-top-left-radius:var(--radius);border-top-right-radius:var(--radius);height:19rem;z-index:1;}.sites-img::after{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background:linear-gradient(to bottom right,var(--clr-primary-5),#222);opacity:0.85;transition:var(--transition);}.typology{font-family:"Montserrat",sans-serif;font-weight:200;font-size:1.2rem;line-height:1.7rem;display:swap;text-align:right;color:#777777;font-style:italic;}']),zt=function(t){return(0,H.tZ)(It,null,(0,H.tZ)(o.Z,null,(0,H.tZ)(Ot,null,(0,H.tZ)(Ot.Img,{variant:"top",fluid:!0,src:t.img}),(0,H.tZ)(Ot.Body,null,(0,H.tZ)(Ot.Title,null,t.title),(0,H.tZ)("p",{className:"typology"},t.typology),(0,H.tZ)(Ot.Text,null,t.excerpt)),(0,H.tZ)(jt.Z,{className:"go-to",variant:"primary",href:t.readMore},"Read More..."))))},Dt=function(t){var e=t.data;return(0,H.tZ)(c.Z,null,(0,H.tZ)(V,null),(0,H.tZ)(q,null),(0,H.tZ)(Et,null),(0,H.tZ)(Tt,null,(0,H.tZ)("section",{className:"section bottom-slant-gray"},(0,H.tZ)(o.Z,null,(0,H.tZ)(G.Z,{title:"our sites"}),(0,H.tZ)(a.Z,{xs:1,md:2},e.allMarkdownRemark.nodes.map((function(t){return(0,H.tZ)(i.Z,null,(0,H.tZ)(zt,{img:t.frontmatter.img,title:t.frontmatter.title,typology:t.frontmatter.typology,excerpt:t.excerpt,readMore:t.fields.slug}))})))))))},Tt=s.ZP.section.withConfig({displayName:"pages__Wrapper",componentId:"sc-1695hmt-0"})(['section{position:relative;z-index:2;}.bottom-slant-gray{position:relative;padding-bottom:10%;background-color:#f8f9fa;}.bottom-slant-gray:before{content:"";width:100%;height:240px;background:#f8f9fa;z-index:-1;top:0px;background-color:#f8f9fa;left:0;position:absolute;-webkit-transform:skewY(-6deg);-ms-transform:skewY(-6deg);transform:skewY(-6deg);-webkit-transform-origin:top left;-ms-transform-origin:top left;transform-origin:top left;}.row{padding-top:30px;}'])}}]);
//# sourceMappingURL=component---src-pages-index-js-e04bec7e9e60e7f4eb4d.js.map