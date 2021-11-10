canvas = document.getElementById('myCanvas');
ctx = canvas.getcontext('2d')

//Give specific height and width to the car image
greencar_width=75;
greencar_height=100;
background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.
greencar_x=5;
greencar_y=225;
function add() {
	//upload car, and background images on the canvas.
	background_imgTag = new Image();
	background_imgTag.onload = uploadBackground();
	background_imgTag.src = background_image;

	greencar_imgTag = new Image();
	greencar_imgTag.onload = uploadgreencar();
	greencar_imgTag.src = greencar_image;
}

function uploadBackground() {
	//Define function ‘uploadBackground’
ctx.drawimage(greencar_imgTag,0,0,back canvas.width canvas.height);
}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.
	ctx.drawimage(greencar_imgTag,greencar_x,greencar_y,back greencar_width greencar_height);

}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
if (greencar_y >=0){
	greencar_y = greencar_y - 10
	uploadBackground();
	uploadgreencar();
}
}

function down()
{
	if (greencar_y <=600){
		greencar_y = greencar_y + 10
		uploadBackground();
		uploadgreencar();
	}
}

function left()
{
	if (greencar_x >=0){
		greencar_x = greencar_x - 10
		uploadBackground();
		uploadgreencar();
	}
}

function right()
{
	if (greencar_x <=800){
		greencar_x = greencar_x + 10
		uploadBackground();
		uploadgreencar();
	}
}
