img="";
Status="";
objects = [];

function preload(){
    img = loadImage('dog_cat.jpg');
    }

function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
    Od=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status : Detecting Object" ;
}

function draw() {
    image(img,0,0,640,420);

    if(Status !="")
{
    for (i = 0; i < objects.length; i++) {
        document.getElementById("status").innerHTML="Status : Object Detected";
   
        fill("#64adf5");
        percent = floor(objects[i].confidence * 100);
        text(objects[i].label + " " + percent + "%" + objects[i].x,objects[i].y );
        noFill();
        stroke("#64adf5");
        rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
    }
}
//#ffde0a
    
}

function modelLoaded() {
    console.log("Model Loaded!")
    Status = true;
    Od.detect(img.gotResult);
}

function gotResult(error,result) {

    if (error){
        console.error(error);
    }

     
        console.log(result);
        objects = result;
    
}
