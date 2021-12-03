
let counter=0;
 let x_sec, x_min, x_heu;
 let y_sec, y_min, y_heu;
let col = 	(47, 52, 64);

function setup() {
  createCanvas(500, 500);

  background(16,16,45);
  textAlign(CENTER);
  fill(	255);
  textSize(height / 8);
  textFont("TW Cen mt");
 
  
}

function draw() {
  
  if (isAMPM(hour())==true){
   }
     
  
 // background(50, 52, 67);
   translate(width/2, height/2); 
  let s = second();
  let ms = minute();
  let hr = hour();
 
console.log(hr + " " + ms + " " + s);
//  let txthr = ('0' + hour()).substr(-2);
//   let txtmn = ('0' + minute()).substr(-2);
//   let txtsc = ('0' + second()).substr(-2);

//   text(txthr + ':' + txtmn + ':' + txtsc +  isAMPM(hour()) , 0, height / 28);

push();
  
   for (var i = 0; i<60; i++) {
    strokeWeight(16);
    if (i==s) {
   
         stroke(255,255,186);
    }
     
    else {
  
      stroke(255);
    }
     x_sec = sin(PI+i*(-TWO_PI/60))*200;
     y_sec = cos(PI+i*(-TWO_PI/60))*200;
       point(x_sec, y_sec);
  
    
   }
  pop();

push();

  for (var i = 0; i<60; i++) {

    strokeWeight(10);
    if (i%30==ms|| i==ms) {
     
        stroke(0);
       
    } 

  
    else {
      // stroke(0);
     stroke(144, 238, 144);
      
    }
    x_min = sin(PI+i*(-TWO_PI/30))*130;
    y_min= cos(PI+i*(-TWO_PI/30))*130;
    rect(x_min, y_min,8,8);
  
  }

  
 pop();

  


 push();
  for (var i = 0; i<24; i++) {
    strokeWeight(20);
    if (i == hr || i%12==hr) {
    
        stroke(255);
     
    } 
    
    else if(i==12){
       
    stroke(135,206,235);
 
    }

    else{
   stroke(173, 216, 230,150);
      
    }
    x_heu = sin(PI+i*(-TWO_PI/12))*50;
    y_heu = cos(PI+i*(-TWO_PI/12))*50;
    point(x_heu, y_heu);
  }


    

pop();
    }

   // text(hr + ':' + ms + ':' + s, 0,height / 28);
 


function isAMPM (hrs) {
let tod;
if (hrs < 12 ) {  //its AM
 tod = "AM";
  background	(255, 255, 224);
} 
 else { //otherwise PM
 tod = "PM";
background(50, 52, 67);
  
 }
return tod;
  
}






