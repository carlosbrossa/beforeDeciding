$( "#target" ).submit(function( event ) {
   event.preventDefault();  

   // clean div welcome
   //$( "#welcomeDiv" ).remove();

   var search = $("#busca").val();

   window.location.replace("http://localhost:5600/searchreviews.html?product=" + search);

})





