$( document ).ready(function() {
  var review = getParameterByName('review');
  var producturl = getParameterByName('producturl');
  getReviews(review,producturl);


  $('#btn_havent_decided').click(function(){
    parent.history.back(); 
    return false;                
  });

  $('#btn_decided').click(function(){
    window.open(producturl + "&country=US", '_blank');
    return false;                
  });



});

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}


$( "#target" ).submit(function( event ) {
   event.preventDefault();	

   var search = $("#busca").val();

  getReviews(search);

})


function getReviews(review,producturl){

  $.ajax({
      url: "http://localhost:5600/review/" + review, 
      //data:{'numItems':15,'start':100},
      dataType: "jsonp",
      crossDomain: true,
      type: "GET",
      async: false, 
      success: function(data){
        console.log(data);
        document.getElementById("titleProduct").innerHTML = data[0].name;
        //document.getElementById("descProduct").innerHTML = data[0].shortDescription;
        //document.getElementById("imgProduct").src = data[0].thumbnailImage;
        //var itemId = data.items[0].itemId;
        setReviewsTable(data,producturl);
      },
  });
}






function setReviewsTable(data,producturl){

    //body reference 
    var body = document.getElementsByTagName("bodyIndex")[0];

    // create elements <table> and a <tbody>
    var tbl  = document.getElementById("tblReviews");
    var tblBody = document.getElementById("tblReviewsBody");
    var tblHeading = document.getElementById("tblReviewsHeading");


      // clean and reset table
      tblHeading.innerHTML = "";
      tbl.innerHTML = "";
      tblBody.innerHTML = "";
      var rowHeding = document.createElement("tr");
      var titles = ['author','review','rating'];

      // cells creation ( heading )
      for (k = 0; k < titles.length; k ++) {

          var cellHead = document.createElement("td"); 
          var cellTextHead = document.createTextNode(titles[k]); 
          cellHead.appendChild(cellTextHead);
          rowHeding.appendChild(cellHead);

          tblHeading.appendChild(rowHeding);
          tbl.appendChild(tblHeading);
      }


       // cells creation
      for (i = 0; i < data.length ; i++) {

        // create new line
        var row = document.createElement("tr");

        // set author review
        var cellReviewer = document.createElement("td"); 
        var cellTextReviewer = document.createTextNode(data[i].reviewer); 
        cellReviewer.appendChild(cellTextReviewer);
        row.appendChild(cellReviewer);

        // set review
        var cellReview = document.createElement("td"); 
        var cellTextReview = document.createTextNode(data[i].reviewText); 
        cellReview.appendChild(cellTextReview);
        row.appendChild(cellReview);

        // set review
        var cellRating = document.createElement("td"); 
        var cellTextRating = document.createTextNode(data[i].overallRating.rating); 
        cellRating.appendChild(cellTextRating);
        row.appendChild(cellRating);

        // set link
        // var cellProductUrl = document.createElement("td"); 

        // cellProductLink = document.createElement('a');
        // cellProductLink.setAttribute('href',data.productUrl);
        // cellProductLink.setAttribute("target", "_self");
        // cellProductLink.setAttribute("id", "teste" + i);
        // cellProductLink.innerHTML = "<a href=" + producturl + ">I've decided</a>";
        // cellProductUrl.appendChild(cellProductLink);
   
        // row.appendChild(cellProductUrl);

        //row added to end of table body
        tblBody.appendChild(row);

      }

      // append the <tbody> inside the <table>
      tbl.appendChild(tblBody);
      // put <table> in the <body>
      body.appendChild(tbl);

}



