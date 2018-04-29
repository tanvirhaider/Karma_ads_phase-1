

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
        height: 98,
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
        height: 98,
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
        height: 98,
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
        y:98,
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
        y:98,
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

    var header = new Sprite({
        id:"header",
        position:"absolute",
        container:adContainer.obj,
        width: 240,
        height: 28,
        x:20,
        y:20,
        image: "images/header.png"
    });

    var cta = new Sprite({
        id:"cta",
        position:"absolute",
        container:adContainer.obj,
        width: 137,
        height: 23,
        x:20,
        y:60,
        image: "images/cta.png"
    });

    var logo = new Sprite({
        id:"logo",
        position:"absolute",
        container:adContainer.obj,
        width: 125,
        height: 27,
        x:14,
        y:212,
        image: "images/logo-horizontal.png"
    });




    // function defaultSettings () {
    //     console.log("default setting");
    //     TweenMax.set([cp1.obj,cp2.obj,cp3.obj,cp4.obj,driveBtn.obj],{alpha:0});
    //     TweenMax.set([sky.obj],{transformOrigin:"50% 100%",scale:1});
    //     TweenMax.set([sky2.obj,sky3.obj,sky4.obj,sky5.obj,sky6.obj,sky7.obj],{alpha:0,transformOrigin:"50% 100%",scale:1});
    // }


    function animation () {

    var adTimeLine = new TimelineMax({repeat:0, repeatDelay:3 });
   // adTimeLine.add(function () {defaultSettings();});
    adTimeLine.fromTo("#willow-ad-stage",0.5,{alpha:0},{alpha:1},"+=0.10");
    adTimeLine.fromTo([header.obj],1,{alpha:0},{alpha:1},"+=1");
    adTimeLine.fromTo([cta.obj],1,{alpha:0},{alpha:1},"+=1");
    adTimeLine.fromTo([logo.obj],1,{alpha:0},{alpha:1},"+=1");
    adTimeLine.fromTo([water.obj],15,{x:-100},{x:0,ease: Power0.easeIn},"-=6");
    
    adTimeLine.fromTo([sky2.obj],15,{x:-300},{x:0,ease: Power0.easeIn},"-=15");
    adTimeLine.fromTo([wave1.obj],6,{scale:0.8,alpha:1,x:-140,y:105},{scale:1,alpha:0,x:0,y:"+=50"},"-=15");
    adTimeLine.fromTo([wave2.obj],6,{scale:0,alpha:1,x:-140,y:85},{scale:1,alpha:0,x:0,y:"+=30"},"-=11");
    adTimeLine.fromTo([wave3.obj],6,{scale:0,alpha:1,x:-140,y:105},{scale:1.5,alpha:0,x:0,y:"+=70"},"-=7");
    adTimeLine.fromTo([wave4.obj],6,{scale:0,alpha:1,x:-140,y:-75},{scale:1,alpha:0,x:0,y:"+=30"},"-=4");
    adTimeLine.fromTo([wave5.obj],6,{scale:0,alpha:1,x:-140,y:95},{scale:1,alpha:0,x:0,y:"+=50"},"-=1");
    adTimeLine.fromTo([wave6.obj],6,{scale:0,alpha:1,x:-140,y:85},{scale:1,alpha:0,x:0,y:"+=30"},"-=1");
    
    adTimeLine.fromTo([sky3.obj],1,{alpha:0},{alpha:1},"-=21");
    adTimeLine.fromTo([sky2.obj],1,{alpha:1},{alpha:0},"-=21");
    adTimeLine.fromTo([sky3.obj],15,{x:-300},{x:0,ease: Power0.easeIn},"-=21");
    adTimeLine.fromTo([water2.obj],2,{alpha:0},{alpha:1},"-=22");
    adTimeLine.fromTo([water2.obj],15,{x:-100},{x:0,ease: Power0.easeIn},"-=23");
    //adTimeLine.fromTo([wave2.obj],5,{alpha:1,x:-80,y:330},{alpha:0,x:0,y:"350"},"-=10");
    // adTimeLine.to([sky2.obj],3,{alpha:1},"-=5");
    // adTimeLine.to([sky2.obj],10,{scale:2, ease: Power0.easeIn},"-=6");
    // adTimeLine.to([sky3.obj],3,{alpha:1},"-=5");
    // adTimeLine.to([sky3.obj],10,{scale:2, ease: Power0.easeIn},"-=6");
    // adTimeLine.to([sky4.obj],3,{alpha:1},"-=5");
    // adTimeLine.to([sky4.obj],10,{scale:2, ease: Power0.easeIn},"-=6");
    // adTimeLine.to([sky5.obj],3,{alpha:1},"-=5");
    // adTimeLine.to([sky5.obj],10,{scale:2, ease: Power0.easeIn},"-=6");
    // adTimeLine.to([sky6.obj],3,{alpha:1},"-=5");
    // adTimeLine.to([sky6.obj],10,{scale:2, ease: Power0.easeIn},"-=6");
    // adTimeLine.to([sky7.obj],6,{alpha:1},"-=6");



    // adTimeLine.fromTo(skyOverCar.obj,30,{backgroundPosition: "100% 50%"},{backgroundPosition: "0% 0%"},"-=30");



    // adTimeLine.to([cp1.obj],1,{alpha:1},"-=28");
    // adTimeLine.to([cp1.obj],1,{alpha:0},"-=25");

    // adTimeLine.to([cp2.obj],1,{alpha:1},"-=24");
    // adTimeLine.to([cp2.obj],1,{alpha:0},"-=21");

    //  adTimeLine.to([cp3.obj],1,{alpha:1},"-=20");
    //  adTimeLine.to([cp3.obj],1,{alpha:0},"-=17");

    //  adTimeLine.to([cp4.obj],1,{alpha:1},"-=16");
    //  adTimeLine.to([cp4.obj],1,{alpha:0},"-=13");

    //  adTimeLine.to([driveBtn.obj],1,{alpha:1},"-=12");

     
    
    

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
