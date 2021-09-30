video = "";
objects = [];
  function setup() {
    canvas = createCanvas(480, 380);
    canvas.center();
    video.hide();
  }
function draw(){
    image(video, 0, 0, 480, 380);
    if(status != ""){
        objectDetector.detect(video, gotResults);
        for(i=0; i<objects.length; i++){
            document.getElementById("status").innerHTML = "Status: Object Detected!";
            document.getElementById("numberOfObjects").innerHTML = "Number of Objects Detected Are:" + objects.length;
            fill('#001330');
            percent = floor(objects[i].confidence*100);
            text(objects[i].label + " " + percent + "%", objects[1].x + 15, objects[i].y + 15);
            noFill();
            stroke('#001330');
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}
function gotResults(error,results){
    if(error){
        console.log(error);
    }
    console.log(results);
    objects = results;
}
function start(){
    objectDetected = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "status: detecting objects"; 
}
function modelLoaded(){
    console.log("model loaded!");
    status = true;
}