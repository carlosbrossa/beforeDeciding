$( document ).ready(function() {
  console.log("ok");
  var product = getParameterByName('product');
  getProduct(product);
});


function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}


$( "#target" ).submit(function( event ) {
   event.preventDefault();	

    // clean div welcome
    $( "#welcomeDiv" ).remove();

    var search = $("#busca").val();

    getProduct(search);

})


function getProduct(product){

  $( "#welcomeDiv" ).remove();

  $.ajax({
      url: "/product/" + product + "?",
      data:{'numItems':15,'start':100},
      dataType: "jsonp",
      crossDomain: true,
      type: "GET",
      async: false, 
      success: function(data){
        getReviewsProduct(data);
      },
  });
}


function getReviewsProduct(data){

    //body reference 
    var body = document.getElementsByTagName("bodyIndex");

    // create elements <table> and a <tbody>
    var tbl  = document.getElementById("tblReviews");
    var tblBody = document.getElementById("tblReviewsBody");
    var tblHeading = document.getElementById("tblReviewsHeading");

    // clean and reset table
    tblHeading.innerHTML = "";
    tbl.innerHTML = "";
    tblBody.innerHTML = "";
    var rowHeding = document.createElement("tr");
    var titles = ['product','description','source','total reviews'];

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

      // set url img
      var cellImgProduct = document.createElement("td"); 
      cellImgProductPath = document.createElement('img');
      cellImgProductPath.setAttribute("id", "imgProduct_" + i);
      cellImgProductPath.setAttribute("src", data[i].thumbnailImage);
      cellImgProduct.appendChild(cellImgProductPath);
      row.appendChild(cellImgProduct);

      // set description review
      var cellDescReview = document.createElement("td"); 
      cellDescReviewLink = document.createElement('a');
      cellDescReviewLink.setAttribute('href',data[i].productUrl);
      cellDescReviewLink.setAttribute("target", "_blank");
      cellDescReviewLink.setAttribute("id", "descReview_" + i);
      cellDescReviewLink.innerHTML = "<a href=http://localhost:5600/resultreviews.html?review=" + data[i].itemId + ">" +  data[i].name + "</a>";
      cellDescReview.appendChild(cellDescReviewLink);
      row.appendChild(cellDescReview);


      // set source review
      var cellSourceReview = document.createElement("td"); 
      cellImgSourceReview = document.createElement('img');
      cellImgSourceReview.setAttribute("id", "imgSourceReview_" + i);
      cellImgSourceReview.setAttribute("src", "img/walmart.png");
      cellSourceReview.appendChild(cellImgSourceReview);
      row.appendChild(cellSourceReview);


      // set total de reviews
      var cellTotalReviews = document.createElement("td"); 
      var cellTextTotalReviews = document.createElement("p");
      cellTextTotalReviews.innerHTML = ("5");
      cellTotalReviews.appendChild(cellTextTotalReviews);
      row.appendChild(cellTotalReviews);


      //row added to end of table body
      tblBody.appendChild(row);

    }

    // append the <tbody> inside the <table>
    tbl.appendChild(tblBody);
    
    // put <table> in the <body>
    body.appendChild(tbl);

}







