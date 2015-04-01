module.exports = function(app) {

	var aws = require("aws-lib");

	var accessKeyId = "AKIAJ6GQV735FMV4FNYA";
	var secretAccessKey = "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";
	var associateTag = "beforedecidin-20";

	var prodAdv = aws.createProdAdvClient(accessKeyId, secretAccessKey, associateTag);

	var Amazon = {

		search : function(req, res){
			prodAdv.call("ItemSearch", {SearchIndex: "Books", Keywords: "Javascript"}, function(err, result) {
			res.status(200);
			res.send(JSON.stringify(jokeFind));
			//console.log(JSON.stringify(result));
			})
		}
	}	

	return 
};	