

// @codekit-prepend "settings.js"
// @codekit-prepend "generator.js"


/*------------------------*/
/*-----> VARIABLES  <-----*/
/*------------------------*/



var promises = [];


function init () {
  // starting of the  canvas of the ad unit ------------------

  var stage, adContainer;

  stage = new Stage(
  {
      id:"willow-ad-stage",
      width: adWidth,
      height:adHeight,
      position:"relative",
      backgroundColor:'#ffffff',
      border: {color: "#ccc",thickness: 1}
  });

  TweenMax.set("#willow-ad-stage",{alpha:0});

  if (adServer == "DCS") {
    adContainer = new Sprite({id:"adContainer",position:"absolute",click: {function: adClick},container:stage,width:adWidth,height:adHeight});
    function adClick (event) {Enabler.exit('click-through-url');}
  }
  else {
    adContainer = new Sprite({id:"adContainer",position:"absolute",container:stage,width:adWidth,height:adHeight});
    generateAhref ({link: {content: "javascript:window.open(window.clickTag)"},target:"adContainer",id: "adContainerAtag"});
  }

   
    var sky = new Sprite({
        id:"sky",
        position:"absolute",
        class: "skyStyle",
        container:adContainer.obj,
        width: 300,
        height: 310,
        x:0,
        y:0,
        image: "images/sky-0.jpg"
    });


    var sky2 = new Sprite({
        id:"sky2",
        position:"absolute",
        class: "skyStyle",
        container:adContainer.obj,
        width: 690,
        height: 280,
        x:0,
        y:0,
        image: "images/sky-seethrough.png"
    });

    var sky3 = new Sprite({
        id:"sky3",
        position:"absolute",
        class: "skyStyle",
        container:adContainer.obj,
        width: 690,
        height: 280,
        x:0,
        y:0,
        image: "images/sky-seethrough.png"
    });


    var water = new Sprite({
        id:"water",
        position:"absolute",
        class: "waterStyle",
        container:adContainer.obj,
        width: 500,
        height: 120,
        x:0,
        y:280,
        image: "images/water.jpg"
    });

    var water2 = new Sprite({
        id:"water2",
        position:"absolute",
        class: "waterStyle",
        container:adContainer.obj,
        width: 500,
        height: 120,
        x:0,
        y:280,
        image: "images/water.jpg"
    });

    var wave1 = new Sprite({id:"wave1",position:"absolute",container:adContainer.obj,width: 275,height: 67,x:0,y:310,image: "images/wave.png"});
    var wave2 = new Sprite({id:"wave2",position:"absolute",container:adContainer.obj,width: 275,height: 67,x:0,y:310,image: "images/wave.png"});
    var wave3 = new Sprite({id:"wave3",position:"absolute",container:adContainer.obj,width: 275,height: 67,x:0,y:310,image: "images/wave.png"});
    var wave4 = new Sprite({id:"wave4",position:"absolute",container:adContainer.obj,width: 275,height: 67,x:0,y:310,image: "images/wave.png"});
    var wave5 = new Sprite({id:"wave5",position:"absolute",container:adContainer.obj,width: 275,height: 67,x:0,y:310,image: "images/wave.png"});
    //var wave6 = new Sprite({id:"wave6",position:"absolute",container:adContainer.obj,width: 275,height: 67,x:0,y:310,image: "images/wave.png"});


    var carImageContainer = new Sprite({
        id:"carImageContainer",
        position:"absolute",
        container:adContainer.obj,
        width: 300,
        height: 600,
        x:0,
        y:0,
        image: "images/carmasked.png"
    });

    var header1 = new Sprite({
        id:"header1",
        position:"absolute",
        container:adContainer.obj,
        width: 257,
        height: 40,
        x:20,
        y:100,
        image: "images/header.png",
        mask: {x:0,y:0,width:300,height:24}
    });

    var header2 = new Sprite({
        id:"header2",
        position:"absolute",
        container:adContainer.obj,
        width: 257,
        height: 40,
        x:20,
        y:100,
        image: "images/header.png",
        mask: {x:0,y:15,width:300,height:50}
    });

    var cta = new Sprite({
        id:"cta",
        position:"absolute",
        container:adContainer.obj,
        width: 162,
        height: 9,
        x:20,
        y:170,
        image: "images/cta.png"
    });

    var logo = new Sprite({
        id:"logo",
        position:"absolute",
        container:adContainer.obj,
        width: 232,
        height: 45,
        x:33,
        y:500,
        image: "images/logo.png"
    });


    function animation () {
        var adTimeLine = new TimelineMax({repeat:0, repeatDelay:3 });
        adTimeLine.fromTo("#willow-ad-stage",0.5,{alpha:0},{alpha:1},"+=0.10");
        adTimeLine.fromTo([header1.obj],1,{alpha:0},{alpha:1},"+=1");
        adTimeLine.fromTo([header2.obj],1,{alpha:0},{alpha:1},"+=0.5");
        adTimeLine.fromTo([cta.obj],1,{alpha:0},{alpha:1},"+=0.5");
        adTimeLine.fromTo([logo.obj],1,{alpha:0},{alpha:1},"+=0.5");
        adTimeLine.fromTo([water.obj],15,{x:-100},{x:0,ease: Power0.easeIn},"-=6");
        
        adTimeLine.fromTo([sky2.obj],15,{x:-300},{x:0,ease: Power0.easeIn},"-=15");
        adTimeLine.fromTo([wave1.obj],8,{scale:0.8,alpha:1,x:-140,y:320},{scale:1,alpha:0,x:0,y:"350"},"-=15");
        adTimeLine.fromTo([wave2.obj],8,{scale:0,alpha:1,x:-140,y:270},{scale:1,alpha:0,x:0,y:"330"},"-=11");
        adTimeLine.fromTo([wave3.obj],8,{scale:0,alpha:1,x:-140,y:290},{scale:1.5,alpha:0,x:0,y:"370"},"-=7");
        adTimeLine.fromTo([wave4.obj],8,{scale:0,alpha:1,x:-140,y:280},{scale:1,alpha:0,x:0,y:"330"},"-=4");
        adTimeLine.fromTo([wave5.obj],8,{scale:0,alpha:1,x:-140,y:300},{scale:1,alpha:0,x:0,y:"350"},"-=1");
        
        adTimeLine.fromTo([sky3.obj],1,{alpha:0},{alpha:1},"-=21");
        adTimeLine.fromTo([sky2.obj],1,{alpha:1},{alpha:0},"-=21");
        adTimeLine.fromTo([sky3.obj],15,{x:-300},{x:0,ease: Power0.easeIn},"-=21");
        adTimeLine.fromTo([water2.obj],2,{alpha:0},{alpha:1},"-=22");
        adTimeLine.fromTo([water2.obj],15,{x:-100},{x:0,ease: Power0.easeIn},"-=23");
    }


    for (var i = 0; i < preload.length; i++) {
      (function(url, promise) {
          var img = new Image();
          img.onload = function() {
            promise.resolve();
          };
          img.src = url;
      })(preload[i], promises[i] = $.Deferred());
    }
    $.when.apply($, promises).done(function() {

    animation ();
    });
}

init ();
