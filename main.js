var express = require('express')
var bodyParser = require('body-parser')
var tar = require('tar')

var app = express()
app.use(bodyParser.json({limit: 'lmb'}));
// app.use(bodyParser.urlencoded({
// 	extended: true
// }));

app.post('/data',function(req,res){
	tar.c(
		{
			file: 'test.tar',	// the tar file name
			C: './public_data'	// change the working space before taring files
								// to avoid include the parent folder in tar file
		},
		req.body.ids			// file name list
	).then(function(){
		console.log('tar file successfully create');
		res.download('./test.tar');
	});
	
})

app.listen(3000,function(){
	console.log('Server is on 3000 port.')
})