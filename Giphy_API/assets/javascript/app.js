
var giphyArray=[""];

$(document).ready(function() {
  
    //On click and Input Mechanic to push input value into the array and runs the Function that Generates the Buttons
    $("#heart").on("click", function(event) {
        event.preventDefault(); // event.preventDefault() prevents the form from trying to submit itself.
        var addGiphy=$("#buttonAdd").val().trim(); //Takes value of input box
        if (addGiphy==="") {
            $("#buttonAdd").val('');
        }
        else {
            giphyArray.push(addGiphy);
        }
        $("#buttonAdd").val('');//clears and resets input box.
        console.log(Array);
        renderButtons();
    });

    //To Clear everything
    $("#brokenHeart").on("click",function(){
        $("#buttonList").empty();
        $("#giphy-holder").empty();
        giphyArray=[];
    });

    //Use Enter insead of clicking
    $("#buttonAdd").keypress(function(e){
        if(e.which===13) {
            event.preventDefault(); // event.preventDefault() prevents the form from trying to submit itself.
            var addGiphy=$("#buttonAdd").val().trim(); //Takes value of input box
            if (addGiphy==="") {
                $("#buttonAdd").val('');
            }
            else {
                giphyArray.push(addGiphy);
            }
            $("#buttonAdd").val('');//clears and resets input box.
            console.log(Array);
            renderButtons();
        }
    })

    //Function to Render the Buttons that is prompted by clicking the heart icon.
    function renderButtons() {

        // Deleting the movies prior to adding new movies
        // (this is necessary otherwise you will have repeat buttons)
        $("#buttonList").empty();

        // Looping through the array of movies
        for (var i = 0; i < giphyArray.length; i++) {

          // Then dynamicaly generating buttons for each waifu in the array
          var x = $("<button>");
          x.addClass("giphy-btn btn btn-outline-black waves-effect btn-sm");
          
          x.css(
              {"margin": "20px"});

          x.attr("data-name",giphyArray[i]);
         
          x.text(giphyArray[i]);

          $("#buttonList").append(x);
        }
      }

    //On click event for when the button is Clicked.

    $("body").on("click", ".giphy-btn", function() {
        $("#giphy-holder").empty();
        console.log("X");
        var giphy = $(this).attr("data-name");
        giphy=giphy.trim().replace(/ /g,"+"); //Replaces all Spaces in Search Term with a Plus
        var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=RYS3ScQM5lfbbQXNmDxDY2I1sigcMBmp&q=+"+giphy+ "&limit=25&offset=5&rating=PG-13&lang=en";
        console.log(queryURL);

        // Creating an AJAX call for the specific movie button being clicked
        $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function(response) {

          console.log(response);
        
        for (var i=0;i<response.data.length;i++) {
          var staticGif=response.data[i].images.fixed_width_still.url;
          var animatedGif=response.data[i].images.fixed_width.url;
          //Conditionals to make every other gif animated or static.
          if ((i%2)>0) {
            var imageDiv=$("<img>").attr({
                "src": staticGif,
                "data-still": staticGif,
                "data-animate": animatedGif,
                "data-state" : "still"
            });}
          else {
            var imageDiv=$("<img>").attr({
                "src": animatedGif,
                "data-still": staticGif,
                "data-animate": animatedGif,
                "data-state" : "animate"
            });}
          imageDiv.addClass("gif");
          $("#giphy-holder").append(imageDiv);
        }
        
        });
    });

    // Click on the GIF itself to change from an animated state or paused state.

    $(document).on("click", ".gif", function() {
        // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
        var state = $(this).attr("data-state");
        console.log(state);
        // If the clicked image's state is still, update its src attribute to what its data-animate value is.
        // Then, set the image's data-state to animate
        // Else set src to the data-still value
        if (state === "still") {
          $(this).attr("src", $(this).attr("data-animate"));
          $(this).attr("data-state", "animate");
        } else {
          $(this).attr("src", $(this).attr("data-still"));
          $(this).attr("data-state", "still");
        }
      });

    renderButtons(); //This is outside to initialize the initial buttons.

});
