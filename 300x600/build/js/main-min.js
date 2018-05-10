function generateAhref(e){var t=document.createElement("div"),i;if(e.id&&t.setAttribute("id",e.id),e.position?t.style.position=e.position:t.style.position="absolute",e.target)var o=document.getElementById(e.target);i=e.container?document.getElementById(e.container):o.parentElement;var a=document.createElement("a");e.link&&a.setAttribute("href",e.link.content),e.link.target?a.setAttribute("target",e.link.target):a.setAttribute("target","_blank"),e.link.function&&(a.onclick=e.link.function),a.appendChild(o),t.appendChild(a),i.appendChild(t)}function Stage(e){var t=document.createElement("div");if(e.id?t.setAttribute("id",e.id):t.setAttribute("id","stage"),e.width?(t.width=e.width,t.style.width=e.width+"px"):(t.width="100%",t.style.width="100%"),e.height?(t.height=e.height,t.style.height=e.height+"px"):(t.height="100%",t.style.height="100%"),e.position?t.style.position=e.position:t.style.position="relative",t.style.margin="0px",t.style.padding="0px",t.style.clip="rect(0px,"+(e.width+2)+"px,"+(e.height+2)+"px, 0px )",t.style.overflow="hidden",t.style.scrolling="no",e.backgroundColor&&(t.style.background=e.backgroundColor,t.style.backgroundSize=e.width+"px "+e.height+"px",t.style.backgroundRepeat="no-repeat"),e.border){e.id||(e.id="stage");var i=document.createElement("div");i.setAttribute("id",e.id+"-Border"),i.style.width=e.width+"px",i.style.height=e.height+"px",i.style.position="absolute",i.style.margin="0px",i.style.zIndex=999999,i.style.border=e.border.thickness+"px solid "+e.border.color,i.style.boxSizing="border-box",i.style.pointerEvents="none",t.appendChild(i)}return t.addChild=function(e){t.appendChild(e),childIndex++,e.style.zIndex=childIndex},e.container?e.container.appendChild(t):document.body.appendChild(t),t}function Sprite(e){var t=document.createElement("div");this.obj=t,e.id?t.setAttribute("id",e.id):t.setAttribute("id","");var i,o,a;if(e.class&&(t.className+=e.class),e.position?t.style.position=e.position:t.style.position="absolute",e.display&&(t.style.display=e.display),e.width?(t.width=e.width,t.style.width=e.width+"px"):this.width=0,e.height?(t.height=e.height,t.style.height=e.height+"px"):this.height=0,e.image&&(i=e.width+"px",o=e.height+"px",a=t.style,a.width=i,a.height=o,a.backgroundImage="url("+e.image+")",a.backgroundRepeat="no-repeat",e.cover||(a.backgroundSize=i+" "+o)),e.button){var n=document.createElement("button");e.button.text&&(n.innerHTML=e.button.text),t.appendChild(n)}if(e.text){var r=document.createTextNode(e.text.content);t.style.color=e.text.color,t.style.fontSize=e.text.size,t.style.fontFamily=e.text.fontFamily,e.text.maxWidth&&(t.style.maxWidth=e.text.width),e.text.lineHeight&&(t.style.lineHeight=e.text.lineHeight),e.text.fontWeight&&(t.style.fontWeight=e.text.fontWeight),t.appendChild(r)}if(e.color&&(i=e.width+"px",o=e.height+"px",a=t.style,a.width=i,a.height=o,a.backgroundColor=e.color),e.gradient&&(a=this.obj.style,a.width=e.gradient.width+"px",a.height=e.gradient.height+"px",a.background="-webkit-linear-gradient("+e.gradient.direction+","+e.gradient.color1+", "+e.gradient.color2+")",a.background="-o-linear-gradient("+e.gradient.direction+","+e.gradient.color1+", "+e.gradient.color2+")",a.background="-moz-linear-gradient("+e.gradient.direction+","+e.gradient.color1+", "+e.gradient.color2+")",a.background="linear-gradient("+e.gradient.direction+","+e.gradient.color1+", "+e.gradient.color2+")"),e.container&&e.container.appendChild(t),e.border){var d=document.createElement("div");d.setAttribute("id",e.id+"-Border"),d.style.width=e.width+"px",d.style.height=e.height+"px",d.style.position="absolute",d.style.margin="0px",d.style.zIndex=999999,d.style.border=e.border.thickness+"px solid "+e.border.color,d.style.boxSizing="border-box",d.style.pointerEvents="none",e.border.radius&&(d.style.borderRadius=e.border.radius),t.appendChild(d)}e.click&&(t=this.obj,t.addEventListener("click",e.click.function,!1),t.style.cursor="pointer"),e.over&&(t=this.obj,t.addEventListener("mouseover",e.over.function,!1),t.style.cursor="pointer"),e.out&&(t=this.obj,t.addEventListener("mouseout",e.out.function,!1),t.style.cursor="pointer"),e.mousemove&&(t=this.obj,t.addEventListener("mousemove",e.mousemove.function,!1));var s=0,l=0;e.x&&(s=e.x),e.y&&(l=e.y),e.z&&(a=t.style,a.zIndex=e.z),t.style.transform="translate("+s+"px,"+l+"px)",e.mask&&(t.style.clip="rect("+e.mask.y+"px,"+(e.mask.x+e.mask.width)+"px,"+(e.mask.y+e.mask.height)+"px,"+e.mask.x+"px)")}function init(){function e(e){Enabler.exit("click-through-url")}function t(){var e=new TimelineMax({repeat:0,repeatDelay:3});e.fromTo("#willow-ad-stage",.5,{alpha:0},{alpha:1},"+=0.10"),e.fromTo([y.obj],1,{alpha:0},{alpha:1},"+=1"),e.fromTo([b.obj],1,{alpha:0},{alpha:1},"+=0.5"),e.fromTo([w.obj],1,{alpha:0},{alpha:1},"+=0.5"),e.fromTo([x.obj],1,{alpha:0},{alpha:1},"+=0.5"),e.fromTo([d.obj],15,{x:-100},{x:0,ease:Power0.easeIn},"-=6"),e.fromTo([n.obj],15,{x:-300},{x:0,ease:Power0.easeIn},"-=15"),e.fromTo([l.obj],8,{scale:.8,alpha:1,x:-140,y:320},{scale:1,alpha:0,x:0,y:"350"},"-=15"),e.fromTo([h.obj],8,{scale:0,alpha:1,x:-140,y:270},{scale:1,alpha:0,x:0,y:"330"},"-=11"),e.fromTo([g.obj],8,{scale:0,alpha:1,x:-140,y:290},{scale:1.5,alpha:0,x:0,y:"370"},"-=7"),e.fromTo([p.obj],8,{scale:0,alpha:1,x:-140,y:280},{scale:1,alpha:0,x:0,y:"330"},"-=4"),e.fromTo([c.obj],8,{scale:0,alpha:1,x:-140,y:300},{scale:1,alpha:0,x:0,y:"350"},"-=1"),e.fromTo([r.obj],1,{alpha:0},{alpha:1},"-=21"),e.fromTo([n.obj],1,{alpha:1},{alpha:0},"-=21"),e.fromTo([r.obj],15,{x:-300},{x:0,ease:Power0.easeIn},"-=21"),e.fromTo([s.obj],2,{alpha:0},{alpha:1},"-=22"),e.fromTo([s.obj],15,{x:-100},{x:0,ease:Power0.easeIn},"-=23")}var i,o;i=new Stage({id:"willow-ad-stage",width:adWidth,height:adHeight,position:"relative",backgroundColor:"#ffffff",border:{color:"#ccc",thickness:1}}),TweenMax.set("#willow-ad-stage",{alpha:0}),"DCS"==adServer?o=new Sprite({id:"adContainer",position:"absolute",click:{function:e},container:i,width:adWidth,height:adHeight}):(o=new Sprite({id:"adContainer",position:"absolute",container:i,width:adWidth,height:adHeight}),generateAhref({link:{content:"javascript:window.open(window.clickTag)"},target:"adContainer",id:"adContainerAtag"}));for(var a=new Sprite({id:"sky",position:"absolute",class:"skyStyle",container:o.obj,width:300,height:310,x:0,y:0,image:"images/sky-0.jpg"}),n=new Sprite({id:"sky2",position:"absolute",class:"skyStyle",container:o.obj,width:690,height:280,x:0,y:0,image:"images/sky-seethrough.png"}),r=new Sprite({id:"sky3",position:"absolute",class:"skyStyle",container:o.obj,width:690,height:280,x:0,y:0,image:"images/sky-seethrough.png"}),d=new Sprite({id:"water",position:"absolute",class:"waterStyle",container:o.obj,width:500,height:120,x:0,y:280,image:"images/water.jpg"}),s=new Sprite({id:"water2",position:"absolute",class:"waterStyle",container:o.obj,width:500,height:120,x:0,y:280,image:"images/water.jpg"}),l=new Sprite({id:"wave1",position:"absolute",container:o.obj,width:275,height:67,x:0,y:310,image:"images/wave.png"}),h=new Sprite({id:"wave2",position:"absolute",container:o.obj,width:275,height:67,x:0,y:310,image:"images/wave.png"}),g=new Sprite({id:"wave3",position:"absolute",container:o.obj,width:275,height:67,x:0,y:310,image:"images/wave.png"}),p=new Sprite({id:"wave4",position:"absolute",container:o.obj,width:275,height:67,x:0,y:310,image:"images/wave.png"}),c=new Sprite({id:"wave5",position:"absolute",container:o.obj,width:275,height:67,x:0,y:310,image:"images/wave.png"}),m=new Sprite({id:"carImageContainer",position:"absolute",container:o.obj,width:300,height:600,x:0,y:0,image:"images/carmasked.png"}),y=new Sprite({id:"header1",position:"absolute",container:o.obj,width:257,height:40,x:20,y:100,image:"images/header.png",mask:{x:0,y:0,width:300,height:24}}),b=new Sprite({id:"header2",position:"absolute",container:o.obj,width:257,height:40,x:20,y:100,image:"images/header.png",mask:{x:0,y:15,width:300,height:50}}),w=new Sprite({id:"cta",position:"absolute",container:o.obj,width:162,height:9,x:20,y:170,image:"images/cta.png"}),x=new Sprite({id:"logo",position:"absolute",container:o.obj,width:232,height:45,x:33,y:500,image:"images/logo.png"}),u=0;u<preload.length;u++)!function(e,t){var i=new Image;i.onload=function(){t.resolve()},i.src=e}(preload[u],promises[u]=$.Deferred());$.when.apply($,promises).done(function(){t()})}var preload=["images/carmasked.png","images/cta.png","images/header.png","images/wave.png"],adWidth=300,adHeight=600,adServer="DCM",childIndex=0,promises=[];init();