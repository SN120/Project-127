var song1 = "";
var song2 = "";

function setup() {
    canvas = createCanvas(450, 337.5);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}
function draw() {
    image(video, 0, 0, 450, 337.5);
}
function preload() {
    // song1 = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
}
function start() {
    song2.play();
}