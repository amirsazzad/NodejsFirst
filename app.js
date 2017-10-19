var express = require('express')
var app = express()
var bodyParser = require('body-parser');
var mongojs = require('mongojs');
var db = mongojs('mongodb://sohan:sohan@ds125555.mlab.com:25555/testdbssd',['datacollection'])
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// app.use(function (req, res) {
//  res.setHeader('Content-Type', 'text/plain')
//  res.write('you posted:\n')
//  res.end(JSON.stringify(req.body, null, 2))
// })

app.get('/bfc', function (req,res) {
    res.send('Fried Chicken Khabo')

}
)
app.get('/showdata', function (req,res) {
   db.datacollection.find(function(err,docs){
  //var data = JSON.parse(docs);
  res.send(docs)
   })
})


app.post('/data', function(req,res){
    //var data = req.body;
    db.datacollection.save(req.body);
    //res.send(docs)
    //console.log(data);
    console.log("We are Here to post");
    res.json(req.body);
})


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})