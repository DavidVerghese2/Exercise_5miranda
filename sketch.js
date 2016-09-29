

function setup() {
  createCanvas(700,900);
  background(205,164,158);
 scale(.90, .90);

  scale(.20, .30);
  translate(30, mouseY/1000);
 
}
  
  
function draw(){
   scale(.90, .90);
 head(90, mouseX, mouseY/50, 200, 200);
  scale(.20, .30);
  translate(30, 100);
 head(30, 50, mouseY/50, 10, 24); 
  
}
  
function head(x,c,a, b, d){
  if 
  (keyIsPressed)    
  
  { 
  fill(a, b,d);}
  
  fill(255, b, d);
  ellipse(370+x,550+x,300,350); //body 1
  

    fill(a,255,d);
  ellipse(260+x,350,320,260); // head 1
  
      
  
    
  fill(255, 255, 255-x);
  arc(100+x,350,80,80,1.5,4.8,CHORD);  // ears1
  arc(420+x,325,80,80,-1.9,1.4,CHORD);
  
  fill(255,255,255);
  ellipse(200+x,330,80,80); // whites of the eye 1
  ellipse(320+x,340,80,80); 
  
   strokeWeight(4);
  line(200+x,70,220+x,20); // antennas 1
  line(300+x,90, 340+x,25);
  
    fill(255,200,200); // bottom part of antenna
  rect(180+x,75,50,150);
  rect(280+x,95,50,125);
  
  
    noFill();
  strokeWeight(3);
  arc(260+x,410,80, 20+x, 80+x,PI); // smile 

  
    fill(a, b, 255);
  triangle(290+x,820,380+x,830,340+x,900);
  triangle(440+x,820,510+x,770,490+x,880); //legs 
    fill(197,31,31);
 
  quad(220+x,550,190+x,600,210+x, 650,240+x,600);
  quad(420+x,510,390+x,550,410+x,610,440+x,560);  //arms 
    
  
  ellipse(180+x+a,310+a,25,25); // pupils
  ellipse(340+x+a,340+a,25,25); 
  
  
  } 





