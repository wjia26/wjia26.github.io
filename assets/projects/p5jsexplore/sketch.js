function setup() {
    const canvas = createCanvas(600, 600);
    canvas.parent('sketch-holder')
    noLoop();
    // canvas.parent('sketch-holder');
  }
  
  function mousePressed() {
    x += 1;
    redraw();
  }
  
  function draw() {
    background(220);
    var side_length=50
    var offset_x=25
    var offset_y=25
    choices_boolean=[true,false];
    var random_bezel= new Array(null,null,null,null);  
    for (i=0;i<4;i++) {
      if (random(choices_boolean)==true) {
        random_bezel[i]=10   
      } else {
        random_bezel[i]=0    
      }  
    }
    
    for (w=0;w<11;w++) {
      // console.log(w)
        for (j=0;j<11;j++) {
          // console.log(i,j)
          draw_square_pattern(x=offset_x+side_length*w,y=offset_y+side_length*j,
                          side_length=side_length,inner_side_length=31,bezel_arr=random_bezel);
        };
    };
  }
  
  function draw_square_pattern(x,y,side_length,inner_side_length,bezel_arr) {
  
    push()
    diff_size=side_length-inner_side_length;
    
  
    
    square(x, y, side_length, bezel_arr[0],bezel_arr[1],bezel_arr[2],bezel_arr[3]);
    fill(51);
    var choices=[1,2,3]
    //random for inner_x_offset
    if (random(choices)==1) {
      inner_x_offset=0     
    } else if (random(choices)==2) {
      inner_x_offset=diff_size/2
    } else {
      inner_x_offset=diff_size    
    }
    
    //random for inner_y_offset 
    if (random(choices)==1) {
      inner_y_offset=0     
    } else if (random(choices)==2) {
      inner_y_offset=diff_size/2
    } else {
      inner_y_offset=diff_size    
    }
    square(x+inner_x_offset, y+inner_y_offset, inner_side_length, bezel_arr[0],bezel_arr[1],bezel_arr[2],bezel_arr[3]);
    
    pop()
      
    
  }