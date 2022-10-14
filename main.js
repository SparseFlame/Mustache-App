
noseX = 0;
noseY = 0;


function preload(){
    clown_nose = loadImage("https://i.postimg.cc/Y9RTp5Z2/moustache-PNG38.png");
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function draw(){
    image(video, 0, 0, 300, 300);
    image(clown_nose, noseX - 15, noseY, 30, 30)
}

function take_snapshot(){
    save("FilteredImage.png");
}

function modelLoaded(){
    console.log("Nothing u need to know :D");
}

function gotPoses(results){
    if (results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("Nose X = " + results[0].pose.nose.x);
        console.log("Nose Y = " + results[0].pose.nose.y);
    }
}
