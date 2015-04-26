$( "#target" ).submit(function( event ) {
   event.preventDefault();  

   // clean div welcome
   //$( "#welcomeDiv" ).remove();

   var search = $("#busca").val();

   window.location.replace("http://localhost:5600/searchreviews.html?product=" + search);

   //https://beforedeciding.herokuapp.com/review/iphone
   //http://localhost:5600/review/"
   //$.ajax({
   //   url: "http://localhost:5600/index",
      //data: { 
      //query: $("#busca").val(), apiKey: "j3sp77bmf7ywymrdx78dq6bj" },
      //dataType: "jsonp",
      //crossDomain: true,
   //   type: "GET",
      //async: false, 
      //success: function(data){
      //  document.getElementById("titleProduct").innerHTML = data[0].name;
      //  document.getElementById("descProduct").innerHTML = data[0].shortDescription;
      //  document.getElementById("imgProduct").src = data[0].thumbnailImage;
        //var itemId = data.items[0].itemId;
      //    getReviewsProduct(data);
      
     // },
  //});
})



//$( document ).ready(function() {
  
  //window.location.replace("http://localhost:5600/index");

  //$.ajax({
  //  url: "http://localhost:5600/index",
      //url: "http://localhost:5600/review/38456902" + search,
      //data: { 
      //query: $("#busca").val(), apiKey: "j3sp77bmf7ywymrdx78dq6bj" },
      //dataType: "jsonp",
      //crossDomain: true,
  //    type: "GET",
      //async: false, 
      //success: function(data){
      //  document.getElementById("titleProduct").innerHTML = data[0].name;
      //  document.getElementById("descProduct").innerHTML = data[0].shortDescription;
      //  document.getElementById("imgProduct").src = data[0].thumbnailImage;
        //var itemId = data.items[0].itemId;
      //    getReviewsProduct(data);
      
      //},
  //  });


//});


//$( "#target" ).submit(function( event ) {
//   event.preventDefault();	
//   console.log("ok");

   // clean div welcome
   //$( "#welcomeDiv" ).remove();

   //var search = $("#busca").val();

   //https://beforedeciding.herokuapp.com/review/iphone
   //http://localhost:5600/review/"
   //$.ajax({
   //   url: "http://localhost:5600/index",
   		//url: "http://localhost:5600/review/38456902" + search,
   		//data: { 
      //query: $("#busca").val(), apiKey: "j3sp77bmf7ywymrdx78dq6bj" },
      //dataType: "jsonp",
      //crossDomain: true,
   //   type: "POST",
      //async: false, 
      //success: function(data){
      //  document.getElementById("titleProduct").innerHTML = data[0].name;
      //  document.getElementById("descProduct").innerHTML = data[0].shortDescription;
      //  document.getElementById("imgProduct").src = data[0].thumbnailImage;
        //var itemId = data.items[0].itemId;
      //    getReviewsProduct(data);
      
      //},
//	});
//})


// function getReviewsProduct(data){

//     //body reference 
//     var body = document.getElementsByTagName("bodyIndex")[0];

//     // create elements <table> and a <tbody>
//     var tbl  = document.getElementById("tblReviews");
//     var tblBody = document.getElementById("tblReviewsBody");
//     var tblHeading = document.getElementById("tblReviewsHeading");


//     //$.getJSON('https://jsonp.nodejitsu.com/?url=https://api.walmartlabs.com/v1/reviews/' + itemId  +'?apiKey=j3sp77bmf7ywymrdx78dq6bj&format=json', function(data){  

//       // clean and reset table
//       tblHeading.innerHTML = "";
//       tbl.innerHTML = "";
//       tblBody.innerHTML = "";
//       var rowHeding = document.createElement("tr");
//       var titles = ['author','review','rating',"offer"];

//       // cells creation ( heading )
//       for (k = 0; k < titles.length; k ++) {

//           var cellHead = document.createElement("td"); 
//           var cellTextHead = document.createTextNode(titles[k]); 
//           cellHead.appendChild(cellTextHead);
//           rowHeding.appendChild(cellHead);

//           tblHeading.appendChild(rowHeding);
//           tbl.appendChild(tblHeading);
//       }


//        // cells creation
//       for (i = 0; i < data.length ; i++) {

//         // create new line
//         var row = document.createElement("tr");

//         // set author review
//         var cellReviewer = document.createElement("td"); 
//         var cellTextReviewer = document.createTextNode(data[i].reviewer); 
//         cellReviewer.appendChild(cellTextReviewer);
//         row.appendChild(cellReviewer);

//         // set review
//         var cellReview = document.createElement("td"); 
//         var cellTextReview = document.createTextNode(data[i].reviewText); 
//         cellReview.appendChild(cellTextReview);
//         row.appendChild(cellReview);

//         // set review
//         var cellRating = document.createElement("td"); 
//         var cellTextRating = document.createTextNode(data[i].overallRating.rating); 
//         cellRating.appendChild(cellTextRating);
//         row.appendChild(cellRating);

//         // set link
//         var cellProductUrl = document.createElement("td"); 

//         cellProductLink = document.createElement('a');
//         //cellProductLink.setAttribute('href',data.productUrl);
//         cellProductLink.setAttribute("target", "_self");
//         cellProductLink.setAttribute("id", "teste" + i);
//         cellProductLink.innerHTML = "<a href=" + data[i].productUrl + ">I've decided</a>";
//         cellProductUrl.appendChild(cellProductLink);
   
//         row.appendChild(cellProductUrl);

//         //row added to end of table body
//         tblBody.appendChild(row);

//       }

//       // append the <tbody> inside the <table>
//       tbl.appendChild(tblBody);
//       // put <table> in the <body>
//       body.appendChild(tbl);
     
//     //});
// }



