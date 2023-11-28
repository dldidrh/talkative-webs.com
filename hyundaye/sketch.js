let stars = [];
let fileNumber = 0;
let img;


function preload(){
  mouse = loadImage('mouse.png')
}


function setup() {
  let cnv = createCanvas(1070, 750);
  cnv.id('mycanvas');
  noCursor();

  // 비디오 캡처 초기화
  capture = createCapture(VIDEO);
  capture.size(1070, 750);
  capture.hide();
}
  
function draw() {
  background(220);

  // 카메라가 켜져 있는지 확인
  if (isCameraOn) {
    // 비디오 피드 그리기
    imageMode(CORNER);
    image(capture, 0, 0, 1070, 750);
  } else {
    // 카메라가 꺼져 있을 때 검은 화면 그리기
    fill(0);
    rect(0, 0, width, height);
  }

  // 다른 요소 그리기 (별, 마우스 등)
  for (let i = 0; i < stars.length; i++) {
    stars[i].update();

    imageMode(CENTER);
    image(mouse, mouseX, mouseY, 40, 40);
  }
}


  

  function captureScreen() {
    fileNumber = fileNumber + 1;
    let mycanvas = document.getElementById('mycanvas');
    const data = mycanvas.toDataURL('image/png');
    const prev = document.createElement('a');
    prev.href = data;
    prev.download = 'BLINK_'+fileNumber+'.png';
    prev.click();


    // 뒷배경 이미지 바뀌는 태그
    const images = document.querySelectorAll('.firstline img');
    if (images.length>1) {
      for (let i=images.length-1; i>0; i--) {
        images[i].src = images[i-1].src;
      }
      images[0].src = data;
    }
/*
    images.forEach((image, index) => {
        if (index === fileNumber - 1) {
            image.src = data;
        }
    });
*/
    showImageInfo(`BLINK_${fileNumber}.png`);

    
}

  function mouseDragged() {
    let star = new StarSS(mouseX, mouseY, random(1, 10));
    stars.push(star);
  }

  function mouseClicked() {
    let star = new StarSS(mouseX, mouseY, random(1, 10));
    stars.push(star);
  }

  function clearStars() {
    stars = [];
  }

  class StarSS {
    constructor (x, y, size) {
        this.x = x;
        this.y = y;
        this.thickness = size;
        this.initialSize = size; 
        this.sinValue = random(0.01, 0.03);
        this.lineHeight = createVector(random(-0, 30), random(-100, 100));
        this.strokeColor = color(random(0, 255), 255, random(0, 255));
        
    }
    update() {
        this.thickness = this.initialSize + 4 * this.initialSize * sin(millis() * this.sinValue);
        push();
        translate(this.x, this.y);
        stroke(this.strokeColor);
        strokeWeight(this.thickness);
        for (let i=0; i<4; i++) {
            rotate(2*PI/8);
            line(this.lineHeight.x, 0, -this.lineHeight.x, 0);
        }
        pop();
    }

    

  

    
  }

  