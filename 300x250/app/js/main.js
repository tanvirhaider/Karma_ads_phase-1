

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
        height: 105,
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
        height: 105,
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
        height: 105,
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
        y:105,
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
        y:105,
        image: "images/water.jpg"
    });

    var wave1 = new Sprite({id:"wave1",position:"absolute",container:adContainer.obj,width: 275,height: 67,x:0,y:310,image: "images/wave.png"});
    var wave2 = new Sprite({id:"wave2",position:"absolute",container:adContainer.obj,width: 275,height: 67,x:0,y:310,image: "images/wave.png"});
    var wave3 = new Sprite({id:"wave3",position:"absolute",container:adContainer.obj,width: 275,height: 67,x:0,y:310,image: "images/wave.png"});
    var wave4 = new Sprite({id:"wave4",position:"absolute",container:adContainer.obj,width: 275,height: 67,x:0,y:310,image: "images/wave.png"});
    var wave5 = new Sprite({id:"wave5",position:"absolute",container:adContainer.obj,width: 275,height: 67,x:0,y:310,image: "images/wave.png"});
    var wave6 = new Sprite({id:"wave6",position:"absolute",container:adContainer.obj,width: 275,height: 67,x:0,y:310,image: "images/wave.png"});

    var carImageContainer = new Sprite({
        id:"carImageContainer",
        position:"absolute",
        container:adContainer.obj,
        width: 300,
        height: 250,
        x:0,
        y:0,
        image: "images/carmasked.png"
    });

    var header1 = new Sprite({
        id:"header1",
        position:"absolute",
        container:adContainer.obj,
        width: 240,
        height: 28,
        x:20,
        y:30,
        image: "images/header.png",
        mask: {x:0,y:0,width:300,height:14}
    });


    var header2 = new Sprite({
        id:"header2",
        position:"absolute",
        container:adContainer.obj,
        width: 240,
        height: 28,
        x:20,
        y:30,
        image: "images/header.png",
        mask: {x:0,y:13,width:200,height:200}
    });

    var cta = new Sprite({
        id:"cta",
        position:"absolute",
        container:adContainer.obj,
        width: 264/2,
        height: 16/2,
        x:20,
        y:78,
        image: "images/cta.png"
    });

    var logo = new Sprite({
        id:"logo",
        position:"absolute",
        container:adContainer.obj,
        width: 144,
        height: 28,
        x:14,
        y:212,
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
    adTimeLine.fromTo([wave1.obj],8,{scale:0.8,alpha:1,x:-140,y:105},{scale:1,alpha:0,x:0,y:"+=50"},"-=15");
    adTimeLine.fromTo([wave2.obj],8,{scale:0,alpha:1,x:-160,y:85},{scale:1,alpha:0,x:0,y:"+=30"},"-=10");
    adTimeLine.fromTo([wave3.obj],8,{scale:0,alpha:1,x:-160,y:105},{scale:1.5,alpha:0,x:0,y:"+=70"},"-=5");
    adTimeLine.fromTo([wave4.obj],8,{scale:0,alpha:1,x:-160,y:-75},{scale:1,alpha:0,x:0,y:"+=30"},"-=5");
    adTimeLine.fromTo([wave5.obj],8,{scale:0,alpha:1,x:-160,y:95},{scale:1,alpha:0,x:0,y:"+=50"},"-=5");
    adTimeLine.fromTo([wave6.obj],8,{scale:0,alpha:1,x:-140,y:85},{scale:1,alpha:0,x:0,y:"+=30"},"-=5");
    
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
