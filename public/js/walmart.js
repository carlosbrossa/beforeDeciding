$( "#target" ).submit(function( event ) {
   event.preventDefault();	

   // clean div welcome
   $( "#welcomeDiv" ).remove();

   //https://beforedeciding.herokuapp.com/review/iphone
   $.ajax({
   		url: "https://api.walmartlabs.com/v1/search",
   		data: { 
      query: $("#busca").val(), apiKey: "j3sp77bmf7ywymrdx78dq6bj" },
      dataType: "jsonp",
      crossDomain: true,
      type: "GET",
      async: false, 
      success: function(data){
        document.getElementById("titleProduct").innerHTML = data.query;
        document.getElementById("descProduct").innerHTML = data.items[0].name;
        document.getElementById("imgProduct").src = data.items[0].thumbnailImage;
        var itemId = data.items[0].itemId;
          getReviewsProduct(itemId);
        },
	});
})


function getReviewsProduct(itemId){
    console.log(itemId);

    //body reference 
    var body = document.getElementsByTagName("bodyIndex")[0];

    // create elements <table> and a <tbody>
    var tbl  = document.getElementById("tblReviews");
    var tblBody = document.getElementById("tblReviewsBody");
    var tblHeading = document.getElementById("tblReviewsHeading");


    $.getJSON('https://jsonp.nodejitsu.com/?url=https://api.walmartlabs.com/v1/reviews/' + itemId  +'?apiKey=j3sp77bmf7ywymrdx78dq6bj&format=json', function(data){  

      // clean and reset table
      tblHeading.innerHTML = "";
      tbl.innerHTML = "";
      tblBody.innerHTML = "";
      var rowHeding = document.createElement("tr");
      var titles = ['author','review','rating'];

      // cells creation ( heading )
      for (k = 0; k < 3; k ++) {

          var cellHead = document.createElement("td"); 
          var cellTextHead = document.createTextNode(titles[k]); 
          cellHead.appendChild(cellTextHead);
          rowHeding.appendChild(cellHead);

          tblHeading.appendChild(rowHeding);
          tbl.appendChild(tblHeading);
      }


       // cells creation
      for (i = 0; i < data.reviews.length ; i++) {

        // create new line
        var row = document.createElement("tr");

        // set author review
        var cellReviewer = document.createElement("td"); 
        var cellTextReviewer = document.createTextNode(data.reviews[i].reviewer); 
        cellReviewer.appendChild(cellTextReviewer);
        row.appendChild(cellReviewer);

        // set review
        var cellReview = document.createElement("td"); 
        var cellTextReview = document.createTextNode(data.reviews[i].reviewText); 
        cellReview.appendChild(cellTextReview);
        row.appendChild(cellReview);

        // set review
        var cellRating = document.createElement("td"); 
        var cellTextRating = document.createTextNode(data.reviews[i].overallRating.rating); 
        cellRating.appendChild(cellTextRating);
        row.appendChild(cellRating);


        //row added to end of table body
        tblBody.appendChild(row);

      }

      // append the <tbody> inside the <table>
      tbl.appendChild(tblBody);
      // put <table> in the <body>
      body.appendChild(tbl);

    });
}



