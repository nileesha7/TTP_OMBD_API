
$(document).ready(function(){
  $("#sb-search").keyup(function(e){
    e.preventDefault();
    var formData = {
      't': $('input[name=q]').val(),
    };
    $.ajax({
      type: "GET",
      url: 'http://www.omdbapi.com/?',
      data: formData,

      success: function (response) {
        var pictureURL = response.Poster;

         $('#h2_sug').html("Suggestions:");
  	     $('#title-sug').html("<b>"+response.Title+"</b>");
         $('#year-sug').html(response.Year);
         $('#actors-sug').html(response.Actors);
         $('#award-sug').html(response.Award);
         $('#director-sug').html(response.Director);
         $("#genre-sug").html(response.Genre+"<br/>");
         $("#rated-sug").html(response.Rated+"<br/>");
      }
    });
  });
});

$(document).ready(function(){
  $("#sb-search").on("submit",function(e){
    e.preventDefault();
    var formData = {
      't': $('input[name=q]').val(),
    };
    $.ajax({
      type: "GET",
      url: 'http://www.omdbapi.com/?',
      data: formData,
      success: function (response) {
		    console.log(response);
		    var pictureURL = response.Poster;
        //Put the title in <h2>
		    $("#h2_result").html(response.Title);
        $("#plot").html(response.Plot+"<br/><br/>");
        $("#year").html("<b>Year:</b> "+response.Year+"<br/>");
        $("#actors").html("<b>Actors:</b> "+response.Actors+"<br/>");
        $("#awards").html("<b>Awards:</b> "+response.Awards+"<br/>");
        $("#director").html("<b>Director:</b> "+response.Director+"<br/>");
        $("#genre").html("<b>Genre:</b> "+response.Genre+"<br/>");
        $("#rated").html("<b>Rated:</b> "+response.Rated+"<br/>");
        
		    /*$('#img').prepend($('<img>',{src:pictureURL*/
       document.getElementById('img').innerHTML="<img src= "+pictureURL+">";                                                                                                                                                                                                                                                                                                                           
	  }
    });
  });
});