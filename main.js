function preload(){
    
}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}

function draw(){
    image(video, 0, 0, 640, 480);
      
      fill(255, 0, 0);
      stroke(0, 0, 255);
      circle(50, 50, 75);

      fill(255, 0, 0);
      stroke(0, 0, 255);
      circle(600, 50, 75);

      fill(255, 0, 0);
      stroke(0, 0, 255);
      circle(50,430, 75);

      fill(255, 0, 0);
      stroke(0, 0, 255);
      circle(600, 430, 75);

      fill(0, 255, 0);
      stroke(0, 0, 255);
      rect(90, 40, 472, 20);

      fill(0, 255, 0);
      stroke(0, 0, 255);
      rect(40, 80, 20, 320)

      fill(0, 255, 0);
      stroke(0, 0, 255);
      rect(90, 420, 472, 20);

      fill(0, 255, 0);
      stroke(0, 0, 255);
      rect(590, 80, 20, 320)
}

function take_snapshot(){
    save('Vivaan.png');
}



