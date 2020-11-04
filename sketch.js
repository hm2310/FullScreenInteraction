let xspeed = 2.8; 
let yspeed = 2.2;
let xdirection = 1; 
let ydirection = 1;
let cSize = 50;
var randomIndex;
var index = 0;
let slider;



let buttonChangeword;
let buttonChangebackground;

var redx = 50;
var greenx = 200;
var bluex = 255;

var words = ["algorithm", "analog", "application", "array", "binary","browser","captcha","command","compress","configure","cyberspace","dashboard","dynamic","digital","delete","database","enter","firewall","flash","frame","graphics","hacker","html","integer","iteration","joystick","JAVA","keyboard","logic","multimedia","operator","programmer","Python","reboot","script","security","thread","upload","utility","URL","virtual","workstation","wiki","wireless","web","website","zip"];

function setup() {
  createCanvas(windowWidth, windowHeight);
 
  slider = createSlider(0, 255, 100);
  buttonChangeword = createButton('Change the Word');
  buttonChangebackground = createButton('Change the Background');
  buttonChangeword.mousePressed(changeword);
  buttonChangebackground.mousePressed(changeback);
  repositionButtons();
    
  xpos = width / 2;
  ypos = height / 2;

}
function changeword(){
 randomIndex = random(0, words.length);
 index = int(randomIndex);  
}
function changeback(){
      redx = random(250);
      greenx = random(250);
      bluex = random(250);
}

function draw() {
  background(redx,greenx,bluex);
  xpos += xdirection;
  ypos += ydirection;
  
  xpos = constrain(xpos, 0+cSize/2, width-cSize/2);
  ypos = constrain(ypos, 0+cSize/2, height-cSize/2);
  if (xpos > width - 150 || xpos < 60) {
    xdirection *= -1;
  }
  if (ypos > height - 40 || ypos < 40) {
    ydirection *= -1;
  }


  
  textSize(36);
  fill(slider.value());
  textAlign(CENTER);
  text(words[index], xpos, ypos);

  slider.position(windowWidth/2-70 , windowHeight/2-100);
    
}


function repositionButtons() {
  buttonChangeword.position(width/2-60, height/2-200);
  buttonChangebackground.position(width/2-83, height/2);
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
    repositionButtons();
}

