$( "#target" ).submit(function( event ) {
   event.preventDefault();  

   // clean div welcome
   //$( "#welcomeDiv" ).remove();

   var search = $("#busca").val();

   window.location.replace("/searchreviews.html?product=" + search);

})





