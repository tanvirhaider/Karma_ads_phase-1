

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
   // var wave6 = new Sprite({id:"wave6",position:"absolute",container:adContainer.obj,width: 607,height: 90,x:0,y:0,image: "images/wave.png"});

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

    var header1 = new Sprite({
        id:"header1",
        position:"absolute",
        container:adContainer.obj,
        width: 214,
        height: 26,
        x:20,
        y:16,
        image: "images/header.png",
        mask: {x:0,y:0,width:400,height:15}
    });

    var header2 = new Sprite({
        id:"header2",
        position:"absolute",
        container:adContainer.obj,
        width: 214,
        height: 26,
        x:20,
        y:16,
        image: "images/header.png",
        mask: {x:0,y:15,width:400,height:45}
    });

    var cta = new Sprite({
        id:"cta",
        position:"absolute",
        container:adContainer.obj,
        width: 264/2,
        height: 16/2,
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
        adTimeLine.fromTo("#willow-ad-stage",0.5,{alpha:0},{alpha:1},"+=0.10");
        adTimeLine.fromTo([header1.obj],1,{alpha:0},{alpha:1},"+=1");
        adTimeLine.fromTo([header2.obj],1,{alpha:0},{alpha:1},"+=0.5");
        adTimeLine.fromTo([cta.obj],1,{alpha:0},{alpha:1},"+=0.5");
        adTimeLine.fromTo([wave1.obj],9,{scale:0.8,alpha:1,x:-170,y:-80},{delay:1,scale:1,alpha:0,x:0,y:"+=50"},"-=4");
        adTimeLine.fromTo([wave2.obj],9,{scale:0.9,alpha:1,x:-150,y:-85},{scale:1,alpha:0,x:0,y:"+=30"},"-=4");
        adTimeLine.fromTo([wave3.obj],9,{scale:0.7,alpha:1,x:-150,y:-85},{scale:1,alpha:0,x:0,y:"+=100"},"-=4");
        adTimeLine.fromTo([wave4.obj],9,{scale:1,alpha:1,x:-120,y:-85},{scale:1,alpha:0,x:0,y:"+=50"},"-=4");
        adTimeLine.fromTo([wave5.obj],9,{scale:0.7,alpha:1,x:-160,y:-85},{scale:1,alpha:0,x:0,y:"+=80"},"-=4");
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
