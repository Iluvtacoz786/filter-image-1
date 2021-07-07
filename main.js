var noseX=""
var noseY=""
function preload(){}
function setup(){
    canvas=createCanvas(500,400)
    canvas.center()
    video=createCapture(VIDEO)
    video.hide()
    console.log(ml5.version);
    posenet=ml5.poseNet(video, modelLoaded)
    posenet.on("pose",gotPose)
}
function draw(){
    image(video,0,0,500)
}
function modelLoaded(){
    console.log("model is loaded");
}
function gotPose(result){
    if (result.length>0){
        console.log(result)
        noseX=result[0].pose.nose.x
        console.log(noseX)
        noseY=result[0].pose.nose.y
        console.log(noseY)
    }
}

