var speech=window.webkitSpeechRecognition;
var recognition = new speech();
function start() {
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}
recognition.onresult = function(event){
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = content;
    if (content == "Take my selfie."){
    speak();
    }
 }
 function speak(){
    var synth = window.speechSynthesis;
    speak_data = "Taking your selfie in five seconds";
    var utter = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utter);
    Webcam.attach(camera);
    setTimeout(function(){
      img_id = "selfie1";
      take_snapshot();
      speak_data="Taking your next selfie in 5 more seconds";
      var utterThis = new SpeechSynthesisUtterance(speak_data);
      synth.speak(utterThis);
      save();
    }, 5000);
    setTimeout(function(){
      img_id = "selfie2";
      take_snapshot();
      speak_data="Taking your final selfie in 5 more seconds";
      var utterThis = new SpeechSynthesisUtterance(speak_data);
      synth.speak(utterThis);
      save();
    }, 10000);
    setTimeout(function(){
      img_id = "selfie3";
      take_snapshot();
      save();
    }, 15000);
 }
 Webcam.set({
    width: 360,
    height: 250,
    image_format:'png',
    png_quality: 90
 });
 camera = document.getElementById("camera");

 function take_snapshot()
 {
  console.log(img_id);
  Webcam.snap(function(data_uri){
    if(img_id=="selfie1"){
    document.getElementById("result").innerHTML = "<img id = 'selfie_image' src = '" + data_uri + "'>"
    }
    if (img_id=="selfie2"){
    document.getElementById("result2").innerHTML = "<img id = 'selfie_image' src = '" + data_uri + "'>"  
    }
    if (img_id=="selfie3"){
      document.getElementById("result3").innerHTML = "<img id = 'selfie_image' src = '" + data_uri + "'>"  
      }
  });
 }

 function save() {
  link = document.getElementById("link");
  image = document.getElementById("selfie_image").src;
  console.log(image);
  link.href = image;
  link.click();
 }

