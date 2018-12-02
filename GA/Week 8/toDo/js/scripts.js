function setRemoveListener(){

	$('a.remove').click(function(e){
		e.preventDefault();
		$(this).parent().remove();
	});
}

function setEditListener(){

	$('a.edit').click(function(e){

		e.preventDefault();

		var editField ='<input id="edit-field" type="text"/><a class="save" href="#">Save</a>';
		var oldValue = $(this).prev().text();

		$(this).parent().hide().before(editField);
		$('#edit-field').val(oldValue);
		setSaveListener();
	});
}

function setSaveListener(){

	$('a.save').click(function(e){
		e.preventDefault();
		var newValue = $('#edit-field').val();
		$(this).next().children('span').html(newValue).parent().show();
		$('#edit-field').remove();
		$(this).remove();
	});
}

function setCompleteListener(){
	
	$('#list li span').last().click(function(e){
		e.preventDefault();
		$(this).toggleClass('complete');
	});
}

$(document).ready(function(){

	$('#add').click(function(e){

		e.preventDefault();
		var newTodo = $(this).prev().val();
		$('#list').append('<li><span>'+newTodo+'</span><a class="edit" href="#">Edit</a><a class="remove" href="#">Remove</a></li>');
		//call update total here 
		$(this).prev().val(''); //Empty input field
		setRemoveListener();
		setEditListener();
		setCompleteListener();
	});

	$('#clear-list').click(function(e){
		e.preventDefault();
		$('#list li').remove();
	});

	$('#clear-completed').click(function(e){
		e.preventDefault();
		$('.complete').parent().remove();
	});

});