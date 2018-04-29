

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

   
   

    var water = new Sprite({
        id:"water",
        position:"absolute",
        class: "waterStyle",
        container:adContainer.obj,
        width: 598,
        height: 90,
        x:0,
        y:0,
        image: "images/water.jpg"
    });



    var wave1 = new Sprite({id:"wave1",position:"absolute",container:adContainer.obj,width: 607,height: 90,x:0,y:0,image: "images/wave.png"});
    var wave2 = new Sprite({id:"wave2",position:"absolute",container:adContainer.obj,width: 607,height: 90,x:0,y:0,image: "images/wave.png"});
    var wave3 = new Sprite({id:"wave3",position:"absolute",container:adContainer.obj,width: 607,height: 90,x:0,y:0,image: "images/wave.png"});
    var wave4 = new Sprite({id:"wave4",position:"absolute",container:adContainer.obj,width: 607,height: 90,x:0,y:0,image: "images/wave.png"});
    var wave5 = new Sprite({id:"wave5",position:"absolute",container:adContainer.obj,width: 607,height: 90,x:0,y:0,image: "images/wave.png"});
    var wave6 = new Sprite({id:"wave6",position:"absolute",container:adContainer.obj,width: 607,height: 90,x:0,y:0,image: "images/wave.png"});

    var carImageContainer = new Sprite({
        id:"carImageContainer",
        position:"absolute",
        container:adContainer.obj,
        width: 611,
        height: 90,
        x:0,
        y:0,
        image: "images/carmasked.png"
    });

    var header = new Sprite({
        id:"header",
        position:"absolute",
        container:adContainer.obj,
        width: 214,
        height: 26,
        x:20,
        y:16,
        image: "images/header.png"
    });

    var cta = new Sprite({
        id:"cta",
        position:"absolute",
        container:adContainer.obj,
        width: 136,
        height: 23,
        x:20,
        y:55,
        image: "images/cta.png"
    });

    var logo = new Sprite({
        id:"logo",
        position:"absolute",
        container:adContainer.obj,
        width: 85,
        height: 53,
        x:628,
        y:17,
        image: "images/logo.png"
    });


    function animation () {

    var adTimeLine = new TimelineMax({repeat:0, repeatDelay:3 });
   // adTimeLine.add(function () {defaultSettings();});
    adTimeLine.fromTo("#willow-ad-stage",0.5,{alpha:0},{alpha:1},"+=0.10");
   // adTimeLine.fromTo([header.obj],1,{alpha:0},{alpha:1},"+=1");
   // adTimeLine.fromTo([cta.obj],1,{alpha:0},{alpha:1},"+=1");
    
    adTimeLine.fromTo([wave1.obj],6,{scale:0.8,alpha:1,x:-100,y:-60},{scale:1,alpha:0,x:0,y:"+=50"},"-=0");
    adTimeLine.fromTo([wave2.obj],5,{scale:0.4,alpha:1,x:-100,y:-75},{scale:1,alpha:0,x:0,y:"+=80"},"-=2");
    adTimeLine.fromTo([wave3.obj],5,{scale:0.7,alpha:1,x:-100,y:-75},{scale:1,alpha:0,x:0,y:"+=100"},"-=2");
    adTimeLine.fromTo([wave4.obj],5,{scale:0.3,alpha:1,x:-100,y:-75},{scale:1,alpha:0,x:0,y:"+=50"},"-=2");
    adTimeLine.fromTo([wave5.obj],5,{scale:0.6,alpha:1,x:-100,y:-75},{scale:1,alpha:0,x:0,y:"+=80"},"-=2");
    adTimeLine.fromTo([wave6.obj],5,{scale:0.8,alpha:1,x:-100,y:-75},{scale:1,alpha:0,x:0,y:"+=90"},"-=2");
    // adTimeLine.fromTo([wave2.obj],6,{scale:0,alpha:1,x:0,y:0},{scale:1,alpha:0,x:0,y:"+=30"},"-=11");
    // adTimeLine.fromTo([wave3.obj],6,{scale:0,alpha:1,x:0,y:0},{scale:1.5,alpha:0,x:0,y:"+=70"},"-=7");
    // adTimeLine.fromTo([wave4.obj],6,{scale:0,alpha:1,x:0,y:0},{scale:1,alpha:0,x:0,y:"+=30"},"-=4");
    // adTimeLine.fromTo([wave5.obj],6,{scale:0,alpha:1,x:0,y:0},{scale:1,alpha:0,x:0,y:"+=50"},"-=1");
    // adTimeLine.fromTo([wave6.obj],6,{scale:0,alpha:1,x:0,y:0},{scale:1,alpha:0,x:0,y:"+=30"},"-=1");
    
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
