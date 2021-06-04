Webcam.set ({
    height: 300,
    width: 300,
    image_format: 'png',
    png_quality: 90,

    constraints : {
        facingMode: "environment"
    }
});

camera = document.getElementById("camera");

Webcam.attach(camera);

function take_snapshot(data_uri){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = "<img id='captured_img' src='"+data_uri+"'>";
    })
}

console.log("ml5 version : " + ml5.version);

classifier = ml5.imageClassifier("MobileNet",model_loaded);

function model_loaded (){
    console.log("The model is loaded!")
}

function check() {
    img = document.getElementById("captured_img");
    classifier.classify(img, getResult);
}

function getResult (error, results) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(results);
        document.getElementById("object_name_result").innerHTML= results[0].label;
    }
}