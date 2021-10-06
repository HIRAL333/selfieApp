var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start(){
 document.getElementById("textbox").innerHTML = "";
 recognition.start();
}

recognition.onresult = function(e){
    console.log(e);
    var content = e.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = content;
    console.log(content);
    if(content == "take my selfie"){
        console.log("taking selfie");
        speak();
    }
}

function speak(){
    console.log("Speak function is called!!!");
    var synth = window.speechSynthesis;
    speak_data = "Taking your selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);

    Webcam.attach(camera);
    setTimeout(function(){
        console.log("SetTimeout called!!");
        take_snapshot();
        Save();
    }, 5000);
}

camera = document.getElementById("camera");
Webcam.set({
    width:360,
    height:250,
    image_format:'jpeg',
    jpeg_quality:90
});

function take_snapshot(){
    Webcam.snap(function(data_url){
    document.getElementById("result").innerHTML = '<img id="selfie_img" src="'+data_url+'"/>'
    });
}

function Save(){
    console.log("Save called!!!");
    link= document.getElementById("link");
    image= document.getElementById("selfie_img").src;
    link.href = image;
    link.click();
}