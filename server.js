var express = require('express');
var documentClient = require("documentdb").DocumentClient;
var url = require('url');
var app = express();
//var port = process.env.PORT || 8080;

end="https://handmein.documents.azure.com:443/";
key="lXsnyjCtOCNT6tAtwDzTRn7sd4O7hpbTuCDh4psFb9ffGOFSBUGqI2w92N1p11caJOb7V8Be1VCNsMStJlrkFg==";
db={
    "id": "hackprinceton"
};
var config = {}

config.endpoint = end;
config.primaryKey = key;
config.database = db;
config.collection = {
    "id": "orders"
};

app.get('/updateOrder', function(req, res) {
  var latt = req.param('order');
  var k=req.param('token');
  var r;
  var obj=JSON.parse(latt);
  console.log(obj.order);
  if(k="goutham"){
	r=latt;
	var client = new documentClient(config.endpoint, { "masterKey": config.primaryKey });
	var HttpStatusCodes = { NOTFOUND: 404 };
	var databaseUrl = `dbs/${config.database.id}`;
	var collectionUrl = `${databaseUrl}/colls/${config.collection.id}`;	
	
	function getFamilyDocument(document) {
    let documentUrl = `${collectionUrl}/docs/${document.id}`;
    console.log(`Getting document:\n${document.id}\n`);

    return new Promise((resolve, reject) => {
        client.readDocument(documentUrl, { partitionKey: document.district }, (err, result) => {
            if (err) {
                if (err.code == HttpStatusCodes.NOTFOUND) {
                    client.createDocument(collectionUrl, document, (err, created) => {
                        if (err) reject(err)
                        else resolve(created);
                    });
                } else {
                    reject(err);
                }
            } else {
                resolve(result);
            }
        });
    });
}; 
getFamilyDocument(obj.order)
.then(() => { exit(`Completed successfully`); })
.catch((error) => { exit(`Completed with error ${JSON.stringify(error)}`) });
  }
  else{
	r={"error":"access denied due to invalid token"}
	}
  res.setHeader('Content-Type', 'application/json');
  res.send(r);
});


//for testing //url:  http://localhost:8080/updateOrder?order={"order":{"id":"1","orderid":"1","item":"food","quantity":"1","isRegistered":false}}&token="goutham"


////////////////////////////////////////////// REST service to add Receivers

var config1={}

config1.endpoint=end;
config1.primaryKey=key;

config1.database = db;

config1.collection = {
    "id": "receivers"
};


app.get('/addReceiver', function(req, res) {
  var org = req.param('organization');
  var phone = req.param('phone');
  var add = req.param('address');
  var k=req.param('token');
  var r,d;
  if(k="goutham"){
	d={"id":phone,"phone":phone,"organization":org,"address":add,"isRegistered":false}
	var client = new documentClient(config.endpoint, { "masterKey": config.primaryKey });
	var HttpStatusCodes = { NOTFOUND: 404 };
	var databaseUrl = `dbs/${config1.database.id}`;
	var collectionUrl = `${databaseUrl}/colls/${config1.collection.id}`;	
	
	function getFamilyDocument(document) {
    let documentUrl = `${collectionUrl}/docs/${document.id}`;
    console.log(`Getting document:\n${document.id}\n`);

    return new Promise((resolve, reject) => {
        client.readDocument(documentUrl, { partitionKey: document.district }, (err, result) => {
            if (err) {
                if (err.code == HttpStatusCodes.NOTFOUND) {
                    client.createDocument(collectionUrl, document, (err, created) => {
                        if (err) reject(err)
                        else resolve(created);
                    });
                } else {
                    reject(err);
                }
            } else {
                resolve(result);
            }
        });
    });
}; 
getFamilyDocument(d)
.then(() => { exit(`Completed successfully`); })
.catch((error) => { exit(`Completed with error ${JSON.stringify(error)}`) });
  }
  else{
	r={"error":"access denied due to invalid token"}
	}
  res.setHeader('Content-Type', 'application/json');
  res.send(r);
});

////////to test

// url:    http://localhost:8080/addReceiver?phone=83838383838&organization=goutham&address=Mercer Street Friends Food Bank&token=goutham


var config2={}

config2.endpoint=end;
config2.primaryKey=key;

config2.database = db;

config2.collection = {
    "id": "volunteers"
};


app.get('/userlocation', function(req, res) {
  var latt = req.param('lat');
  var lon = req.param('lon');
  var user_phone=req.param('phone');
  var k=req.param('token');
  var r,d;
  if(k="goutham"){
    d={"id":user_phone,"phone":user_phone,"lat":latt,"long":lon,"isRegistered":false}
	var client = new documentClient(config.endpoint, { "masterKey": config.primaryKey });
	var HttpStatusCodes = { NOTFOUND: 404 };
	var databaseUrl = `dbs/${config2.database.id}`;
	var collectionUrl = `${databaseUrl}/colls/${config2.collection.id}`;	
	
	function getFamilyDocument(document) {
    let documentUrl = `${collectionUrl}/docs/${document.id}`;
    console.log(`Getting document:\n${document.id}\n`);

    return new Promise((resolve, reject) => {
        client.readDocument(documentUrl, { partitionKey: document.district }, (err, result) => {
            if (err) {
                if (err.code == HttpStatusCodes.NOTFOUND) {
                    client.createDocument(collectionUrl, document, (err, created) => {
                        if (err) reject(err)
                        else resolve(created);
                    });
                } else {
                    reject(err);
                }
            } else {
                resolve(result);
            }
        });
    });
}; 
getFamilyDocument(d)
.then(() => { exit(`Completed successfully`); })
.catch((error) => { exit(`Completed with error ${JSON.stringify(error)}`) });
  }
  else{
	r={"error":"access denied due to invalid token"}
	}
  res.setHeader('Content-Type', 'application/json');
  res.send(r);
});

//url:  http://localhost:8080/userlocation?latt=70.00&lon=60.00&phone=83838383838&token="goutham"


//////   

var server = app.listen(8081, function () {

  var host = "72.36.65.69"
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})


