"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[143],{786:(e,n,t)=>{t.r(n),t.d(n,{init:()=>c});var i=t(9784),o=(t(2956),t(8053)),s=t(8185),a=t(3765);const r=[{path:"/",page:"main"},{path:"/sandbox(/)(*)",page:"sandbox",disabled:!0},{path:"*",page:"main"}].filter((e=>!e.disabled));var l=t(6436);t(6451),t(7966);async function c(){(0,s.Z)()||(this.preloader=await(new l.Z).setup({options:{appendTo:document.body}}),await this.preloader.show()),i.F.on(i.F.NAVIGATE,(e=>{(0,a.Z)().state.route.page=e.match.page,(0,a.Z)().state.route.pathname=e.pathname,(0,a.Z)().state.route.params=e.params})),i.F.init(r);const e=await Promise.all([t.e(752),t.e(813),t.e(204)]).then(t.bind(t,2835));await(new e.default).setup({options:{appendTo:document.body,preloader:this.preloader,whilePreloading:d}})}function d(){return[p].reduce((async(e,n)=>(await e,n())),Promise.resolve)}async function p(){await(0,o.Z)(100)}},7124:(e,n,t)=>{t.d(n,{Z:()=>P});var i=t(5782),o=t(8159),s=t(1485),a=t(2657),r=t(298),l=t(1892),c=t.n(l),d=t(5760),p=t.n(d),u=t(8311),h=t.n(u),m=t(8192),g=t.n(m),b=t(8060),f=t.n(b),w=t(4865),$=t.n(w),x=t(1097),A={};A.styleTagTransform=$(),A.setAttributes=g(),A.insert=h().bind(null,"head"),A.domAPI=p(),A.insertStyleElement=f();c()(x.Z,A);x.Z&&x.Z.locals&&x.Z.locals;var v,C=t(9667),y=t(3765),k=t(4054),z=t(4737),B=t(5549);const S=({options:e,props:n})=>i.dy` <div class="colorMask"></div> `;const P=(0,o.c1)(s.Z)(v=class extends o.wA{constructor(...e){super(...e),this.options={template:S},this.props={active:!1,render:!1,viewport:()=>(0,y.Z)().state.viewport,aspect:e=>e.viewport.width/e.viewport.height,minSize:0,mainColor:"white",useMask:!0,keepBaseItem:!0,extraPlanes:1,baseItemPadding:28},this.renderPlane=(e,n)=>{const{ctx:t}=this,{aspect:i,minSize:o,viewport:s,useMask:a,keepBaseItem:r,baseItemPadding:l}=this.props,{width:c,height:d}=this.props.viewport,p=(this.planes.length,0===n);let u=(0,k.Z)(e.pr,c,o),h=u/i;if(p&&r){const n=this.tweens.outScale*(r?1:0),t=(s.width-l)*n,i=(s.height-l)*n;u=(0,k.Z)(e.pr,c,t),h=(0,k.Z)(e.pr,d,i)}const m=-.5*u,g=-.5*h;e.mask&&a?t.globalCompositeOperation="destination-out":t.globalCompositeOperation="source-over",t.fillStyle=e.color,t.fillRect(m,g,u,h)}}async onSetup(){window.mask=this,this.tweens={outScale:1},this.setupCanvas(),this.treasures=z.Z.map((e=>({pr:0,...e}))),this.mask={pr:0,color:this.props.mainColor,mask:!0},this.planes=[this.mask,...this.treasures],this.planesInv=this.planes.slice().reverse()}setupCanvas(){this.ctx=(0,a.Z)(),this.canvas=this.ctx.canvas,this.el.appendChild(this.canvas)}show({data:e={color:B.DM.RED},duration:n=1.2,stagger:t=.25,delay:i=0}={}){return new Promise((o=>{this.props.active=!0;const s=this.treasures.find((n=>n.color===e.color)),a=this.treasures.filter((n=>n.color!==e.color));const r=a.sort((()=>.5-Math.random())).slice(0,this.props.extraPlanes);s?r.push(s):r.push({...e,pr:0}),this.planes=[this.mask,...r],this.planesInv=this.planes.slice().reverse(),this.tweens.outScale=1,C.ZP.killTweensOf([this.planes,this.tweens]),C.ZP.fromTo(this.planes,{pr:0},{pr:1,duration:n,delay:i,stagger:t,ease:"power3.inOut",onStart:()=>this.props.render=!0,onComplete:()=>{this.props.render=!1,o()}})}))}hide({duration:e=.5,delay:n=0}={}){C.ZP.to(this.tweens,{outScale:0,duration:e,delay:n,ease:"power2.inOut",onStart:()=>this.props.render=!0,onComplete:()=>{this.props.render=!1,this.props.active=!1}})}onActive(){this.whileRender()}offActive(){this.clear()}clear(){const{ctx:e,canvas:n}=this;e.clearRect(0,0,n.width,n.height)}whileRender(){this.render()}render(){const{ctx:e,canvas:n}=this,{width:t,height:i}=this.props.viewport;this.clear(),e.translate(.5*t,.5*i),this.planesInv.forEach(this.renderPlane),e.translate(-.5*t,-.5*i)}setViewport({width:e,height:n}){(0,r.Z)(this.ctx,e,n),this.props.active&&this.render()}})||v},6436:(e,n,t)=>{t.d(n,{Z:()=>E});var i=t(5782),o=t(9667),s=t(8159),a=t(1485),r=t(1892),l=t.n(r),c=t(5760),d=t.n(c),p=t(8311),u=t.n(p),h=t(8192),m=t.n(h),g=t(8060),b=t.n(g),f=t(4865),w=t.n(f),$=t(3811),x={};x.styleTagTransform=w(),x.setAttributes=m(),x.insert=u().bind(null,"head"),x.domAPI=d(),x.insertStyleElement=b();l()($.Z,x);$.Z&&$.Z.locals&&$.Z.locals;var A,v=t(5549),C=t(7124),y=t(7966),k=t(8257),z=t(5833),B=t(4054),S=t(4893),P=t(3907),Z=t(3765),T=t(4655),G=t(7292),_=t(8053);const I=({props:e})=>i.dy`
    <div class="preloader ${(0,i.$o)({visible:e.visible})}">
        <p data-ui="pr" class="preloader__pr  textTitle1"></p>
        <div data-ui="soundBlock" class="preloader__soundBlock">
            ${(0,G.Z)("headphones","preloader__soundIcon")}
            <p data-ui="soundCopy" class="preloader__soundCopy">
                ${y.Z.get("global-start-sound-prompt-1")}&nbsp;<b>${y.Z.get("global-start-sound-prompt-2")}</b>
            </p>
        </div>
    </div>
`;const E=(0,s.c1)(a.Z)(A=class extends s.wA{constructor(...e){super(...e),this.props={visible:!1,open:!1,progress:0,finalProgress:0},this.options={template:I},this.updateGltfProgress=()=>{const e=(0,k.Z)(.2,.3),n=(0,z.Z)(this.tweens.gltfPr+e,0,1),t=(0,k.Z)(.5,1);o.ZP.killTweensOf(this.tweens),o.ZP.to(this.tweens,{gltfPr:n,duration:t,ease:"none",onUpdate:this.updateProgress,onComplete:()=>{const e=(0,k.Z)(0,.5);this.tweens.gltfPr<1&&o.ZP.delayedCall(e,this.updateGltfProgress)}})},this.updateProgress=()=>{const e=(0,B.Z)(this.tweens.gltfPr,0,34)+(0,S.Z)(this.props.progress,0,100,0,66,!0);this.ui.pr.innerText=`${parseInt(e)}%`}}async onSetup(){this.tweens={gltfPr:0},this.colorMask=await(new C.Z).setup({options:{appendTo:this.el},props:{active:()=>this.props.active||this.props.visible,useMask:!1,mainColor:v.DM.RED,keepBaseItem:!1,extraPlanes:2}})}setProgress(e){this.updateProgress()}show(){return new Promise((e=>{this.props.visible=!0,this.props.open=!0,this.updateGltfProgress(),(0,T.Kq)("/loading","Loading"),e()}))}async prompt(){return new Promise((async e=>{(0,Z.Z)().state.disableInteraction=!0,o.ZP.to(this.ui.pr,{duration:.5,alpha:0,y:"-50%",ease:"power2.in"}),o.ZP.fromTo(this.ui.soundBlock.children,{y:"1rem"},{alpha:1,y:0,duration:.8,ease:"power2.out",stagger:.08,delay:.5}),this.el.style.cursor="pointer",this.el.addEventListener("click",(async n=>{e(),await this.close()}),{once:!0}),await(0,_.Z)(4e3),e(),this.props.open&&await this.close()}))}async hide(){return new Promise((async e=>{e()}))}async close(){return new Promise((async e=>{this.props.open=!1,(0,Z.Z)().state.disableInteraction=!1,o.ZP.to(this.ui.soundBlock.children,{alpha:0,duration:.4,ease:"power2.in",stagger:.08}),P.Z.play("loaderSound"),await this.colorMask.show({duration:1,stagger:.13,delay:.1}),this.props.visible=!1,e()}))}onDestroy(){}})||A},7292:(e,n,t)=>{t.d(n,{Z:()=>o});var i=t(5782);const o=(e,n="",t="")=>(0,i.Au)(`<svg data-ui="${t||e}" class="${n}"><use xlink:href="#${e}"></use></svg>\n`)},4737:(e,n,t)=>{t.d(n,{Z:()=>a});var i=t(6376),o=t(5549);const s=i.tq?"540-304":window.innerWidth>=1280?"1920-1080":"960-540",a=[{id:"treasure_makeup",color:o.DM.PURPLE,titleId:"game-treasure-06",voPrefix:"vo-treasure-02",videoSrc:`/static/videos/palette/${s}/palette`,imgSrc:"/static/images/treasure/palette.png",downloadSrc:"https://static.adobexbowie75.com/Adobe-X-Bowie-Treasure-Red-Toned-Makeup.zip"},{id:"treasure_bangels",color:o.DM.PINK,titleId:"game-treasure-04",voPrefix:"vo-treasure-03",videoSrc:`/static/videos/bangels/${s}/bangels`,imgSrc:"/static/images/treasure/bangels.png",downloadSrc:"https://static.adobexbowie75.com/Adobe-X-Bowie-Treasure-Bangles.zip"},{id:"treasure_boots",color:o.DM.GREY,titleId:"game-treasure-07",voPrefix:"vo-treasure-04",videoSrc:`/static/videos/boots/${s}/boots`,imgSrc:"/static/images/treasure/boots.png",downloadSrc:"https://static.adobexbowie75.com/Adobe-X-Bowie-Treasure-Platform-Boots.zip"},{id:"treasure_tie",color:o.DM.BLUE,titleId:"game-treasure-01",voPrefix:"vo-treasure-05",videoSrc:`/static/videos/tie/${s}/tie`,imgSrc:"/static/images/treasure/tie.png",downloadSrc:"https://static.adobexbowie75.com/Adobe-X-Bowie-Treasure-Silk-Tie.zip"},{id:"treasure_amulet",color:o.DM.LIGHT_GREY,inverseColor:!0,titleId:"game-treasure-08",voPrefix:"vo-treasure-06",videoSrc:`/static/videos/amulet/${s}/amulet`,imgSrc:"/static/images/treasure/amulet.png",downloadSrc:"https://static.adobexbowie75.com/Adobe-X-Bowie-Treasure-Ziggy-Amulet.zip"},{id:"treasure_earrings",color:o.DM.ORANGE,titleId:"game-treasure-09",voPrefix:"vo-treasure-07",videoSrc:`/static/videos/earing/${s}/earing`,imgSrc:"/static/images/treasure/earing.png",downloadSrc:"https://static.adobexbowie75.com/Adobe-X-Bowie-Treasure-Earrings.zip"},{id:"treasure_bracelets",color:o.DM.LIGHT_BLUE,titleId:"game-treasure-10",voPrefix:"vo-treasure-08",videoSrc:`/static/videos/bracelets/${s}/bracelets`,imgSrc:"/static/images/treasure/bracelets.png",downloadSrc:"https://static.adobexbowie75.com/Adobe-X-Bowie-Treasure-Silver-Bracelets.zip"},{id:"treasure_guitar",color:o.DM.GREEN,titleId:"game-treasure-03",voPrefix:"vo-treasure-09",videoSrc:`/static/videos/guitar/${s}/guitar`,imgSrc:"/static/images/treasure/guitar.png",downloadSrc:"https://static.adobexbowie75.com/Adobe-X-Bowie-Treasure-12-String-Acoustic-Guitar.zip"},{id:"treasure_hands",color:o.DM.LIGHT_GREEN,inverseColor:!0,titleId:"game-treasure-02",voPrefix:"vo-treasure-10",videoSrc:`/static/videos/bra/${s}/bra`,imgSrc:"/static/images/treasure/hands.png",downloadSrc:"https://static.adobexbowie75.com/Adobe-X-Bowie-Treasure-Gold-Mannequin-Hands.zip"}]},4655:(e,n,t)=>{t.d(n,{Kq:()=>a,L9:()=>s,r_:()=>r});var i=t(6603);const o=[],s=(e="general",n,t="",s=null)=>{n&&(i.Z.initialized.gtm?i.Z.trackEvent(e,n,t,s):o.push({type:"event",options:{category:e,action:n,label:t,value:s}}))},a=(e="",n="")=>{i.Z.initialized.gtm?i.Z.trackPage(e,n):o.push({type:"page",options:{pageLocation:e,pageTitle:n}})},r=()=>{o.forEach((e=>{switch(e.type){case"page":const{pageLocation:n,pageTitle:t}=e.options;i.Z.trackPage(n,t);break;case"event":const{category:o,action:s,label:a,value:r}=e.options;i.Z.trackEvent(o,s,a,r)}}))}},3907:(e,n,t)=>{t.d(n,{Z:()=>u});var i,o=t(9667),s=t(1431),a=t(6451),r=t(1853),l=t(5300),c=t(301);function d(e,n,t,i,o){var s={};return Object.keys(i).forEach((function(e){s[e]=i[e]})),s.enumerable=!!s.enumerable,s.configurable=!!s.configurable,("value"in s||s.initializer)&&(s.writable=!0),s=t.slice().reverse().reduce((function(t,i){return i(e,n,t)||t}),s),o&&void 0!==s.initializer&&(s.value=s.initializer?s.initializer.call(o):void 0,s.initializer=void 0),void 0===s.initializer&&(Object.defineProperty(e,n,s),s=null),s}const p=e=>((e=(0,c.HD)(e)?l.ZP.getAsset("core",e):e)||console.warn("Audio not found or preloaded yet"),e);const u=new(d((i=class{constructor(){this.id=0,this.gainNode=r.Z.context.createGain(),this.gainNode.gain.value=0,this.sounds=[],this.gainPool=[],this.panPool=[],this.currentAudio=0,this.clonesPool=[],this.ambientNode=r.Z.context.createGain(),this.ambientNode.connect(this.gainNode),this.maxPositionalSoundsPerFrame=1,a.Z.withAudio&&this.gainNode.connect(r.Z.master)}getGain(){for(let e=0;e<this.gainPool.length;e++){const n=this.gainPool[e];if(!n.inUse)return n.inUse=!0,n}const e={object:r.Z.context.createGain(),inUse:!0};return this.gainPool.push(e),e}play(e,{loop:n=!1,volume:t=1,fade:i=!1,duration:s=1,clone:a=!1,emitter:r=null,playbackRate:l=null,onComplete:c=(()=>{}),startTime:d=0,parentNode:u=null}={}){let h;if(this.id++,h=p(e),!h)return;if(a){const n=this.clonesPool.find((n=>n.asset===e&&0===n.audio.currentTime));n?h=n.audio:(h=h.clone(),this.clonesPool.push({id:Date.now(),asset:e,audio:h}))}h.loop=n,h.volume=t,h.onEnded=this.onAudioComplete,h.onComplete=c;const m=h.play(l);return h.obj=m.obj,u=u||this.gainNode,m.success&&(h.id=this.id,h.node.disconnect(),r?(h.emitter=r,h.gain=this.getGain(),h.gainPower=1,h.node.connect(h.gain.object),h.gain.object.connect(u),this.sounds.push(h)):h.node.connect(u),i&&(o.ZP.killTweensOf(h),o.ZP.from(h,{duration:s,volume:0}))),h}onAudioComplete(e){e.onComplete&&e.onComplete(),this.cleanupAfterAudio(e)}cleanupAfterAudio(e){e.gain&&(e.gain.object.disconnect(),e.gain.inUse=!1);for(let n=0;n<this.sounds.length;n++)this.sounds[n].id==e.id&&this.sounds.splice(n,1)}pause(e,{fade:n=!1,duration:t=.5}={}){const i=p(e);i&&(n?(o.ZP.killTweensOf(i),o.ZP.to(i,{duration:t,volume:0,onComplete:()=>{i.pause()}})):i.pause())}setVolume(e,n,t=!0,i=.5){const s=p(e);s&&(t?(o.ZP.killTweensOf(s),o.ZP.to(s,{duration:i,volume:n})):s.volume=n)}setGlobalVolume(e,n=.75){o.ZP.killTweensOf(this.gainNode.gain),o.ZP.to(this.gainNode.gain,{duration:n,value:e})}setAmbientVolume(e,n=.75){o.ZP.killTweensOf(this.ambientNode.gain),o.ZP.to(this.ambientNode.gain,{duration:n,value:e})}fadeIn(){o.ZP.killTweensOf(this.gainNode.gain),o.ZP.to(this.gainNode.gain,{duration:2,value:1})}fadeOut(){o.ZP.killTweensOf(this.gainNode.gain),o.ZP.to(this.gainNode.gain,{duration:.75,value:0})}}).prototype,"getGain",[s.Nj],Object.getOwnPropertyDescriptor(i.prototype,"getGain"),i.prototype),d(i.prototype,"play",[s.Nj],Object.getOwnPropertyDescriptor(i.prototype,"play"),i.prototype),d(i.prototype,"onAudioComplete",[s.Nj],Object.getOwnPropertyDescriptor(i.prototype,"onAudioComplete"),i.prototype),i)},1097:(e,n,t)=>{t.d(n,{Z:()=>r});var i=t(559),o=t.n(i),s=t(3476),a=t.n(s)()(o());a.push([e.id,".colorMask{top:0;left:0;width:100%;height:100%;position:absolute}.colorMask canvas{top:0;left:0;width:100%;height:100%;position:absolute}\n","",{version:3,sources:["webpack://./component/color-mask/index.scss","webpack://./style/mixins/utils.scss"],names:[],mappings:"AAGA,WCGI,KAAM,CACN,MAAO,CACP,UAAW,CACX,WAAY,CACZ,iBAL2B,CDF/B,kBCGI,KAAM,CACN,MAAO,CACP,UAAW,CACX,WAAY,CACZ,iBAL2B",sourcesContent:["$CDN:\"/\";\n@import 'style/shared';\n\n.colorMask {\n    @include fill;\n    \n    canvas {\n        @include fill;  \n    }\n}\n","// -----------------------------------\n// Layout\n// -----------------------------------\n\n// Fills to the bounds of the container element\n@mixin fill($position: absolute) {\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    position: $position;\n}\n\n// Fills to the bounds of the container element, including an offset (grow or shrink the bounds)\n@mixin fillContainer($offset: 0, $position: absolute) {\n    inset: $offset;\n    position: $position;\n}\n\n// Sets the elements position to either top-left|top-right|bottom-left|bottom-right\n@mixin position($ruleA: top, $ruleB: left, $position: absolute) {\n    #{$ruleA}: 0;\n    #{$ruleB}: 0;\n\n    position: $position;\n}\n\n// USAGE -------\n// @mixin aspectRatio( $aspect-16x9 );\n\n@mixin aspectRatio($ratio) {\n    &::before {\n        content: '';\n        display: block;\n        padding-top: ($ratio * 100%);\n    }\n}\n\n// USAGE -------\n// @mixin centerAlign(100px, 100px);\n\n// Center aligns the element within its container, given a width & height\n@mixin centerAlign($width: 0, $height: 0) {\n    top: 50%;\n    left: 50%;\n    position: absolute;\n    margin-top: -$height/2;\n    margin-left: -$width/2;\n}\n\n// Center aligns the element within its container, regardless of width & height\n@mixin centerAlignTransform() {\n    top: 50%;\n    left: 50%;\n    position: absolute;\n    transform: translate(-50%, -50%);\n}\n\n// Centers the children within the element. $direction variable can be row|column\n@mixin flexCenter($direction: column) {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: $direction;\n}\n\n// Old school technique to vertically center content\n@mixin addVerticalCentering() {\n    &::before {\n        content: '';\n        display: inline-block;\n        vertical-align: middle;\n        width: 0;\n        height: 100%;\n    }\n}\n\n// Full width element which centers when viewport width > $max-width\n@mixin constrainWidth($max-width: $app-width) {\n    margin: auto;\n    position: relative;\n\n    width: 100%;\n    max-width: $max-width;\n}\n\n// Full width element which centers when viewport width > $max-width, plus fills height\n@mixin constrainWidthFillHeight {\n    @include constrainWidth();\n\n    height: 100%;\n}\n\n@mixin imgFillContainer($align: top-left) {\n    @if $align = top-left {\n        top: 0;\n        left: 0;\n    } @else if $align = center {\n        top: 50%;\n        left: 50%;\n        transform: translate(-50%, -50%);\n    }\n\n    max-width: 100%;\n    max-height: 100%;\n    min-width: 100%;\n    min-height: 100%;\n    position: absolute;\n}\n\n// Creates a circle element with $size width and height\n@mixin circle($size) {\n    width: $size;\n    height: $size;\n    border-radius: 50%;\n}\n\n// Creates a square element with $size width and height\n@mixin square($size) {\n    width: $size;\n    height: $size;\n}\n\n// Images\n// -----------------------------------\n\n// Background image fully covers element\n@mixin fillCenteredBg($url: '', $position: center) {\n    background-size: cover;\n    background-image: url($url);\n    background-position: $position;\n    background-repeat: no-repeat;\n}\n\n// Background image sits contained inside the element (letterbox effect)\n@mixin containCenteredBg($url: '', $position: center) {\n    background-size: contain;\n    background-image: url($url);\n    background-position: $position;\n    background-repeat: no-repeat;\n}\n\n// Other\n// -----------------------------------// Units\n// -----------------------------------\n\n// Proportianal font scaling  based of $baseWidth, base font size is 10px when viewport width === $baseWidth\n@mixin baseFontSizeVW($baseWidth: 1920) {\n    $base-font-size: 10;\n\n    font-size: $base-font-size / $baseWidth * 100 + 0vw;\n}\n\n// Use letter spacing value from Photoshop\n// @mixin letterSpacing( 100 );\n@mixin letterSpacing($spacing: 0) {\n    letter-spacing: $spacing / 1000 * 1em;\n    // text-indent: $spacing / 1000 * 1em;\n}\n\n@mixin svgStroke($width: 2, $color: currentColor) {\n    stroke: $color;\n    stroke-width: $width;\n    // stroke-linecap: round;\n    // stroke-linejoin: round;\n}\n\n// USAGE -------\n// @mixin sudo(before, {\n//      width: 100px;\n//      height: 100px;\n// });\n\n// Creates a sudo element, $type can be before|after\n@mixin sudo($type: before) {\n    &:#{$type} {\n        content: '';\n        @content;\n    }\n}\n\n// Selector for desktop/devices with mouse\n@mixin pointerDevice {\n    @media (pointer: fine) {\n        @content;\n    }\n\n    .desktop.ie &,\n    .desktop.firefox & {\n        @content;\n    }\n}\n\n// Selector for touch devices\n@mixin touchDevice {\n    @media (any-pointer: coarse) {\n        @content;\n    }\n}\n\n// Aligns hover action between touch and pointer devices\n@mixin hover {\n    @include pointerDevice {\n        &:hover {\n            @content;\n        }\n    }\n    @include touchDevice {\n        &:active,\n        &.android-active {\n            @content;\n        }\n    }\n}\n\n// USAGE -------\n// @mixin pxToRem( font-size, 24px );\n\n// Converts a css $property from px to rem\n@mixin pxToRem($property: 'margin-bottom', $value: 0) {\n    $pxValue: unit($value, px);\n    $remValue: unit($value / 10, rem);\n    #{$property}: $pxValue;\n    #{$property}: $remValue;\n}\n\n// Sets cursor to grabbing\n@mixin grabbingCursor() {\n    cursor: grab;\n    cursor: -webkit-grab;\n    &:active {\n        cursor: grabbing;\n        cursor: -webkit-grabbing;\n    }\n}\n"],sourceRoot:""}]);const r=a},3811:(e,n,t)=>{t.d(n,{Z:()=>r});var i=t(559),o=t.n(i),s=t(3476),a=t.n(s)()(o());a.push([e.id,'.preloader{top:0;left:0;width:100%;height:100%;position:fixed;display:none;color:black;overflow:hidden;z-index:1000}.preloader.visible{display:block}.preloader__pr{z-index:1;left:var(--sideMargin);bottom:var(--sideMargin);position:absolute}.preloader__soundBlock{top:50%;left:50%;position:absolute;transform:translate(-50%, -50%);display:flex;align-items:center;justify-content:center;flex-direction:column;z-index:1}@media only screen and (max-width: 768px){.preloader__soundBlock{width:100%}}.preloader__soundBlock>*{opacity:0}.preloader__soundIcon{width:5.2rem;height:4.7rem;margin-bottom:3rem}.preloader__soundCopy{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:"Adobe Clean",system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",sans-serif;font-weight:400;text-align:center}@media only screen and (max-width: 768px){.preloader__soundCopy{padding:0 4rem}}\n',"",{version:3,sources:["webpack://./component/preloader/index.scss","webpack://./style/mixins/utils.scss","webpack://./style/base/variables.scss","webpack://./style/mixins/fonts.scss"],names:[],mappings:"AAGA,WCGI,KAAM,CACN,MAAO,CACP,UAAW,CACX,WAAY,CACZ,cDNmB,CAEnB,YAAa,CAEb,WAAY,CAEZ,eAAgB,CAEhB,YEUa,CFnBjB,mBAYQ,aAAc,CACjB,eAGG,SAAU,CACV,sBAAuB,CACvB,wBAAyB,CACzB,iBAAkB,CACrB,uBC6BD,OAAQ,CACR,QAAS,CACT,iBAAkB,CAClB,+BAAgC,CAKhC,YAAa,CACb,kBAAmB,CACnB,sBAAuB,CACvB,qBAJgC,CD9B5B,SAAU,CAEb,0CAND,uBAGsB,UAAW,CAGhC,CANA,yBAKS,SAAU,CAAI,sBAIpB,YAAa,CACb,aAAc,CACd,kBAAmB,CACtB,sBGjCD,iCAAkC,CAClC,kCAAmC,CAYnC,gOAL0C,CAM1C,eAAgB,CHuBZ,iBAAkB,CAErB,0CAJD,sBAGsB,cAAe,CACpC",sourcesContent:["$CDN:\"/\";\n@import 'style/shared';\n\n.preloader {\n    @include fill(fixed);\n\n    display: none;\n\n    color: black;\n\n    overflow: hidden;\n\n    z-index: $z-index-preloader;\n\n    &.visible {\n        display: block;\n    }\n\n    &__pr {\n        z-index: 1;\n        left: var(--sideMargin);\n        bottom: var(--sideMargin);\n        position: absolute;\n    }\n\n    &__soundBlock {\n        @include centerAlignTransform;\n        @include flexCenter;\n        @include mobile { width: 100%; }\n        z-index: 1;\n        > * { opacity: 0; }\n    }\n\n    &__soundIcon {\n        width: 5.2rem;\n        height: 4.7rem;\n        margin-bottom: 3rem;\n    }\n\n    &__soundCopy {\n        @include fontAdobeRegular;\n        text-align: center;\n        @include mobile { padding: 0 4rem; }\n    }\n}\n","// -----------------------------------\n// Layout\n// -----------------------------------\n\n// Fills to the bounds of the container element\n@mixin fill($position: absolute) {\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    position: $position;\n}\n\n// Fills to the bounds of the container element, including an offset (grow or shrink the bounds)\n@mixin fillContainer($offset: 0, $position: absolute) {\n    inset: $offset;\n    position: $position;\n}\n\n// Sets the elements position to either top-left|top-right|bottom-left|bottom-right\n@mixin position($ruleA: top, $ruleB: left, $position: absolute) {\n    #{$ruleA}: 0;\n    #{$ruleB}: 0;\n\n    position: $position;\n}\n\n// USAGE -------\n// @mixin aspectRatio( $aspect-16x9 );\n\n@mixin aspectRatio($ratio) {\n    &::before {\n        content: '';\n        display: block;\n        padding-top: ($ratio * 100%);\n    }\n}\n\n// USAGE -------\n// @mixin centerAlign(100px, 100px);\n\n// Center aligns the element within its container, given a width & height\n@mixin centerAlign($width: 0, $height: 0) {\n    top: 50%;\n    left: 50%;\n    position: absolute;\n    margin-top: -$height/2;\n    margin-left: -$width/2;\n}\n\n// Center aligns the element within its container, regardless of width & height\n@mixin centerAlignTransform() {\n    top: 50%;\n    left: 50%;\n    position: absolute;\n    transform: translate(-50%, -50%);\n}\n\n// Centers the children within the element. $direction variable can be row|column\n@mixin flexCenter($direction: column) {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: $direction;\n}\n\n// Old school technique to vertically center content\n@mixin addVerticalCentering() {\n    &::before {\n        content: '';\n        display: inline-block;\n        vertical-align: middle;\n        width: 0;\n        height: 100%;\n    }\n}\n\n// Full width element which centers when viewport width > $max-width\n@mixin constrainWidth($max-width: $app-width) {\n    margin: auto;\n    position: relative;\n\n    width: 100%;\n    max-width: $max-width;\n}\n\n// Full width element which centers when viewport width > $max-width, plus fills height\n@mixin constrainWidthFillHeight {\n    @include constrainWidth();\n\n    height: 100%;\n}\n\n@mixin imgFillContainer($align: top-left) {\n    @if $align = top-left {\n        top: 0;\n        left: 0;\n    } @else if $align = center {\n        top: 50%;\n        left: 50%;\n        transform: translate(-50%, -50%);\n    }\n\n    max-width: 100%;\n    max-height: 100%;\n    min-width: 100%;\n    min-height: 100%;\n    position: absolute;\n}\n\n// Creates a circle element with $size width and height\n@mixin circle($size) {\n    width: $size;\n    height: $size;\n    border-radius: 50%;\n}\n\n// Creates a square element with $size width and height\n@mixin square($size) {\n    width: $size;\n    height: $size;\n}\n\n// Images\n// -----------------------------------\n\n// Background image fully covers element\n@mixin fillCenteredBg($url: '', $position: center) {\n    background-size: cover;\n    background-image: url($url);\n    background-position: $position;\n    background-repeat: no-repeat;\n}\n\n// Background image sits contained inside the element (letterbox effect)\n@mixin containCenteredBg($url: '', $position: center) {\n    background-size: contain;\n    background-image: url($url);\n    background-position: $position;\n    background-repeat: no-repeat;\n}\n\n// Other\n// -----------------------------------// Units\n// -----------------------------------\n\n// Proportianal font scaling  based of $baseWidth, base font size is 10px when viewport width === $baseWidth\n@mixin baseFontSizeVW($baseWidth: 1920) {\n    $base-font-size: 10;\n\n    font-size: $base-font-size / $baseWidth * 100 + 0vw;\n}\n\n// Use letter spacing value from Photoshop\n// @mixin letterSpacing( 100 );\n@mixin letterSpacing($spacing: 0) {\n    letter-spacing: $spacing / 1000 * 1em;\n    // text-indent: $spacing / 1000 * 1em;\n}\n\n@mixin svgStroke($width: 2, $color: currentColor) {\n    stroke: $color;\n    stroke-width: $width;\n    // stroke-linecap: round;\n    // stroke-linejoin: round;\n}\n\n// USAGE -------\n// @mixin sudo(before, {\n//      width: 100px;\n//      height: 100px;\n// });\n\n// Creates a sudo element, $type can be before|after\n@mixin sudo($type: before) {\n    &:#{$type} {\n        content: '';\n        @content;\n    }\n}\n\n// Selector for desktop/devices with mouse\n@mixin pointerDevice {\n    @media (pointer: fine) {\n        @content;\n    }\n\n    .desktop.ie &,\n    .desktop.firefox & {\n        @content;\n    }\n}\n\n// Selector for touch devices\n@mixin touchDevice {\n    @media (any-pointer: coarse) {\n        @content;\n    }\n}\n\n// Aligns hover action between touch and pointer devices\n@mixin hover {\n    @include pointerDevice {\n        &:hover {\n            @content;\n        }\n    }\n    @include touchDevice {\n        &:active,\n        &.android-active {\n            @content;\n        }\n    }\n}\n\n// USAGE -------\n// @mixin pxToRem( font-size, 24px );\n\n// Converts a css $property from px to rem\n@mixin pxToRem($property: 'margin-bottom', $value: 0) {\n    $pxValue: unit($value, px);\n    $remValue: unit($value / 10, rem);\n    #{$property}: $pxValue;\n    #{$property}: $remValue;\n}\n\n// Sets cursor to grabbing\n@mixin grabbingCursor() {\n    cursor: grab;\n    cursor: -webkit-grab;\n    &:active {\n        cursor: grabbing;\n        cursor: -webkit-grabbing;\n    }\n}\n","// Aspect ratio\n// ------\n$aspect-1x1: 1;\n$aspect-2x3: 3/2;\n$aspect-3x2: 2/3;\n$aspect-3x4: 4/3;\n$aspect-4x3: 3/4;\n$aspect-16x9: 9/16;\n$aspect-9x16: 16/9;\n\n// Z-index\n// -------\n$z-index-0: 0;\n$z-index-1: 100;\n$z-index-2: 200;\n$z-index-3: 300;\n$z-index-4: 400;\n$z-index-5: 500;\n$z-index-6: 600;\n$z-index-7: 700;\n$z-index-8: 800;\n$z-index-9: 900;\n$z-index-10: 1000;\n\n// Easings\n// -------\n// Linear\n$ease-linear: cubic-bezier(0.25, 0.25, 0.75, 0.75);\n// Sine\n$ease-in-sine: cubic-bezier(0.47, 0, 0.745, 0.715);\n$ease-out-sine: cubic-bezier(0.39, 0.575, 0.565, 1);\n$ease-in-out-sine: cubic-bezier(0.445, 0.05, 0.55, 0.95);\n// Quad\n$ease-in-quad: cubic-bezier(0.55, 0.085, 0.68, 0.53);\n$ease-out-quad: cubic-bezier(0.25, 0.46, 0.45, 0.94);\n$ease-in-out-quad: cubic-bezier(0.455, 0.03, 0.515, 0.955);\n// Cubic\n$ease-in-cubic: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n$ease-out-cubic: cubic-bezier(0.215, 0.61, 0.355, 1);\n$ease-in-out-cubic: cubic-bezier(0.645, 0.045, 0.355, 1);\n// Quart\n$ease-in-quart: cubic-bezier(0.895, 0.03, 0.685, 0.22);\n$ease-out-quart: cubic-bezier(0.165, 0.84, 0.44, 1);\n$ease-in-out-quart: cubic-bezier(0.77, 0, 0.175, 1);\n// Quint\n$ease-in-quint: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n$ease-out-quint: cubic-bezier(0.23, 1, 0.32, 1);\n$ease-in-out-quint: cubic-bezier(0.86, 0, 0.07, 1);\n// Expo\n$ease-in-expo: cubic-bezier(0.95, 0.05, 0.795, 0.035);\n$ease-out-expo: cubic-bezier(0.19, 1, 0.22, 1);\n$ease-in-out-expo: cubic-bezier(1, 0, 0, 1);\n// Circ\n$ease-in-circ: cubic-bezier(0.6, 0.04, 0.98, 0.335);\n$ease-out-circ: cubic-bezier(0.075, 0.82, 0.165, 1);\n$ease-in-out-circ: cubic-bezier(0.785, 0.135, 0.15, 0.86);\n// Back\n$ease-in-back: cubic-bezier(0.6, -0.28, 0.735, 0.045);\n$ease-out-back: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n$ease-in-out-back: cubic-bezier(0.68, -0.55, 0.265, 1.55);\n","// Font configuration\n// ------------------\n\n@mixin fontSmoothing() {\n    -moz-osx-font-smoothing: grayscale;\n    -webkit-font-smoothing: antialiased;\n}\n\n// Font faces\n// ----------\n\n$fallbackFont: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans',\n    'Droid Sans', 'Helvetica Neue', sans-serif;\n\n@mixin fontAdobeRegular() {\n    @include fontSmoothing;\n\n    font-family: 'Adobe Clean', $fallbackFont;\n    font-weight: 400;\n}\n\n@mixin fontAdobeBold() {\n    @include fontSmoothing;\n\n    font-family: 'Adobe Clean', $fallbackFont;\n    font-weight: 600;\n}\n\n// @mixin fontAdobeBoldCondensed() {\n//     @include fontSmoothing;\n\n//     font-family: 'Adobe Clean Semi Condensed', $fallbackFont;\n//     font-weight: 400;\n// }\n\n\n@mixin fontBold() {\n    @include fontSmoothing;\n\n    font-family: 'Greed', $fallbackFont;\n    font-weight: 500;\n}\n\n// @mixin fontHeavy() {\n//     @include fontSmoothing;\n\n//     font-family: 'Greed', $fallbackFont;\n//     font-weight: 700;\n// }\n\n@mixin fontBody {\n    font-size: 1.6rem;\n\n    // letter-spacing: 0.015em;\n\n    @include fontAdobeBold;\n}\n\n@mixin fontTitle1 {\n    font-size: 15.5rem;\n    line-height: 0.77;\n    margin-left: -0.04em;\n    letter-spacing: -0.035em;\n    text-transform: uppercase;\n\n    @include fontBold;\n\n    @include mobile {\n        font-size: 5.5rem;\n    }\n}\n\n@mixin fontTitle2 {\n    font-size: 1.6rem;\n    text-transform: uppercase;\n    \n    // font-size: 1.6rem;\n    // margin-left: -0.04em;\n    // letter-spacing: -0.01em;\n\n    @include fontAdobeBold;\n\n    @include mobile {\n        font-size: 1.6rem;\n    }\n}\n"],sourceRoot:""}]);const r=a}}]);
//# sourceMappingURL=app.84b1435183d7d39e5607.js.map