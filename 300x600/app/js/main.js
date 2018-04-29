

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

   
    var carImageContainer = new Sprite({
        id:"carImageContainer",
        position:"absolute",
        container:adContainer.obj,
        width: 300,
        height: 339,
        x:0,
        y:600 - 339,
        image: "images/red-car.jpg"
    });



    var skyOverCar = new Sprite({
        id:"skyOverCar",
        position:"absolute",
        class: "skyovercarStyle",
        container:adContainer.obj,
        width: 300,
        height: 100,
        x:34,
        y:276,
        image: "images/sky4.png"
    });

    var carMaskHolder = new Sprite({
        id:"carMaskHolder",
        position:"absolute",
        container:adContainer.obj
    });

    var mask1 = document.getElementById("Shape_masks");
    console.log(mask1);
    carMaskHolder.obj.appendChild(mask1);

   skyOverCar.obj.style.clipPath = "url(#yoMTV)";
   skyOverCar.obj.style.webkitClipPath = "url(#yoMTV)";



    var skyHolder = new Sprite({
        id:"skyHolder",
        position:"absolute",
        container:adContainer.obj,
        width: 300,
        height: 600 - 339,
        x:0,
        y:0
    });

    skyHolder.obj.style.overflow = "hidden";

    var sky = new Sprite({
        id:"sky",
        position:"absolute",
        container:skyHolder.obj,
        width: 720,
        height: 267,
        x:-350,
        y:0,
        image: "images/sky.jpg"
    });

   // sky.obj.style.opacity = "0";


   

    var sky2 = new Sprite({
        id:"sky2",
        position:"absolute",
        container:skyHolder.obj,
        width: 720,
        height: 267,
        x:-350,
        y:0,
        image: "images/sky.jpg"
    });



    var sky3 = new Sprite({
        id:"sky3",
        position:"absolute",
        container:skyHolder.obj,
        width: 720,
        height: 267,
        x:-350,
        y:0,
        image: "images/sky.jpg"
    });
   

    var sky4 = new Sprite({
        id:"sky4",
        position:"absolute",
        container:skyHolder.obj,
        width: 720,
        height: 267,
        x:-350,
        y:0,
        image: "images/sky.jpg"
    });

    var sky5 = new Sprite({
        id:"sky5",
        position:"absolute",
        container:skyHolder.obj,
        width: 720,
        height: 267,
        x:-350,
        y:0,
        image: "images/sky.jpg"
    });

    var sky6 = new Sprite({
        id:"sky6",
        position:"absolute",
        container:skyHolder.obj,
        width: 720,
        height: 267,
        x:-350,
        y:0,
        image: "images/sky.jpg"
    });

    var sky7 = new Sprite({
        id:"sky7",
        position:"absolute",
        container:skyHolder.obj,
        width: 720,
        height: 267,
        x:-350,
        y:0,
        image: "images/sky.jpg"
    });



    var karmalogo = new Sprite({
        id:"karmalogo",
        position:"absolute",
        container:adContainer.obj,
        width: 409/ 2.5,
        height: 255/ 2.5,
        x:72,
        y:70,
        image: "images/karmalogo.png"
    });

    var cp1 = new Sprite({
        id:"cp1",
        class: "copyStyle",
        position:"absolute",
        container:adContainer.obj,
        width: 300,
        height: 200,
        x:0,
        y:450,
        image: "images/copy1.svg"
    });

    var cp2 = new Sprite({
        id:"cp2",
        position:"absolute",
        class: "copyStyle",
        container:adContainer.obj,
        width: 210,
        height: 200,
        x:46,
        y:423,
        image: "images/copy2.svg"
    });

    var cp3 = new Sprite({
        id:"cp3",
        position:"absolute",
        class: "copyStyle",
        container:adContainer.obj,
        width: 180,
        height: 200,
        x:63,
        y:423,
        image: "images/copy3.svg"
    });

    var cp4 = new Sprite({
        id:"cp4",
        position:"absolute",
        class: "copyStyle",
        container:adContainer.obj,
        width: 180,
        height: 200,
        x:63,
        y:423,
        image: "images/copy4.svg"
    });

    var driveBtn = new Sprite({
        id:"driveBtn",
        position:"absolute",
        class: "copyStyle",
        container:adContainer.obj,
        width: 180,
        height: 200,
        x:63,
        y:423,
        image: "images/drive_btn.svg"
    });
   





    function defaultSettings () {
        console.log("default setting");
        TweenMax.set([cp1.obj,cp2.obj,cp3.obj,cp4.obj,driveBtn.obj],{alpha:0});
        TweenMax.set([sky.obj],{transformOrigin:"50% 100%",scale:1});
        TweenMax.set([sky2.obj,sky3.obj,sky4.obj,sky5.obj,sky6.obj,sky7.obj],{alpha:0,transformOrigin:"50% 100%",scale:1});
    }


    function animation () {

    var copyStartTime = -15;

    var adTimeLine = new TimelineMax({repeat:0, repeatDelay:3 });
    adTimeLine.add(function () {defaultSettings();});
    adTimeLine.fromTo("#willow-ad-stage",0.5,{alpha:0},{alpha:1},"+=0.10");


    // adTimeLine.to([sky.obj],18,{scale:2, ease: Power0.easeIn});
    // adTimeLine.to([sky.obj],5,{alpha:0},"-=5");
    // adTimeLine.to([sky2.obj],3,{alpha:1},"-=5");
    // adTimeLine.to([sky2.obj],18,{scale:2, ease: Power0.easeIn},"-=6");
    // adTimeLine.to([sky3.obj],5,{alpha:1},"-=3");


    adTimeLine.to([sky.obj],10,{scale:2, ease: Power0.easeIn});
    adTimeLine.to([sky.obj],5,{alpha:0},"-=5");
    adTimeLine.to([sky2.obj],3,{alpha:1},"-=5");
    adTimeLine.to([sky2.obj],10,{scale:2, ease: Power0.easeIn},"-=6");
    adTimeLine.to([sky3.obj],3,{alpha:1},"-=5");
    adTimeLine.to([sky3.obj],10,{scale:2, ease: Power0.easeIn},"-=6");
    adTimeLine.to([sky4.obj],3,{alpha:1},"-=5");
    adTimeLine.to([sky4.obj],10,{scale:2, ease: Power0.easeIn},"-=6");
    adTimeLine.to([sky5.obj],3,{alpha:1},"-=5");
    adTimeLine.to([sky5.obj],10,{scale:2, ease: Power0.easeIn},"-=6");
    adTimeLine.to([sky6.obj],3,{alpha:1},"-=5");
    adTimeLine.to([sky6.obj],10,{scale:2, ease: Power0.easeIn},"-=6");
    adTimeLine.to([sky7.obj],6,{alpha:1},"-=6");



    adTimeLine.fromTo(skyOverCar.obj,30,{backgroundPosition: "100% 50%"},{backgroundPosition: "0% 0%"},"-=30");



    adTimeLine.to([cp1.obj],1,{alpha:1},"-=28");
    adTimeLine.to([cp1.obj],1,{alpha:0},"-=25");

    adTimeLine.to([cp2.obj],1,{alpha:1},"-=24");
    adTimeLine.to([cp2.obj],1,{alpha:0},"-=21");

     adTimeLine.to([cp3.obj],1,{alpha:1},"-=20");
     adTimeLine.to([cp3.obj],1,{alpha:0},"-=17");

     adTimeLine.to([cp4.obj],1,{alpha:1},"-=16");
     adTimeLine.to([cp4.obj],1,{alpha:0},"-=13");

     adTimeLine.to([driveBtn.obj],1,{alpha:1},"-=12");

     
    
    

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
