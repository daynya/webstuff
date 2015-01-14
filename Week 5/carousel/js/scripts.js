var images = ['', '', '', '', '', '', '', ''];

//var images = ['food1.jpg', 'food2.jpg', 'food3.jpg', 'food4.jpg', 'food5.jpg', 'food6.jpg', 'food7.jpg', 'food8.jpg'];

var ratings = [];
var i = 0;


//create a function that runs on document ready which uses forEach() to populate the images Array with at least 8 filenames.  

$(document).ready(function(){
	images.forEach(function(value, index) {
		var number = index + 1;
		images[index] = 'animal' + number + '.jpg';
	});
});


function moveForward(){
	
	//check if this is the last picture
	//if last, calculate average
	//if not last, increase index and update image

	if (i == images.length - 1) {
		calculateRating();
	} else {
		i++;
		changeImage();
	}
}
console.log('moveForward');
	
	
function moveBackward(){

	//check if this is the first image
	//if not, decrease index and move backward

	if (i == 0) {

	} else {
		i--;
		changeImage();
	}
}
console.log('moveBackward');


function changeImage(){

	//change <img> src to value of image array's current index

	$('#image-to-vote-on').attr('src', 'images/animals/'+images[i]);

}
console.log('changeImage');

function calculateRating(){
	
	//sum all values in ratings array and divide by length of ratings array
	//update page with the average rating

	var avg = 0;

	ratings.forEach(function(value, index){
		avg += parseInt(value);
	});

	avg = avg / ratings.length;
	$('#container').children('div').first().html('Your Average Squeezability Rating is ' + avg);
}
console.log('calculate');

$(document).ready(function(){

	//Listen for select to change.

	$('#your-vote').change(function(){
		ratings[i] = $('#your-vote').val();
		moveForward();
	});


	//Grab value and store in current index of ratings array.
	//Move ahead.

	//Listen for Skip button to click, then move ahead.

	//Listen for Back button to click, then move back.

	$('.btn').last().click(function(){
		moveForward();
	});

	$('.btn').first().click(function(){
		moveBackward();
	});

});
