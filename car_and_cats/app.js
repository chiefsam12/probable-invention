// get the http module:
var http = require('http');
// fs module allows us to read and write content for reponses!!
var fs = require('fs');
// creating a server using http module:
 var server = http.createServer(function(request,response){
     console.log('client request URL:',request.url);
    //  this is how we do routing:
    if(request.url === '/'){
        fs.readFile('./views/index.html', 'utf8', function(errors, contents){
            response.writeHead(200, {'Content-Type':'text/html'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === '/cars'){
        fs.readFile('./views/cars.html', 'utf8', function(errors, contents){
            response.writeHead(200,{'Content-Type': 'text/html'});
            response.write(contents);
            response.end()
        });

  
    }
    else if(request.url === '/cats'){
        fs.readFile('./views/cats.html', 'utf8', function(errors, contents){
            response.writeHead(200,{'Content-Type': 'text/html'});
            response.write(contents);
            response.end()
        });

  
    }
    else if(request.url === '/stylesheets/style.css'){
        fs.readFile('./stylesheets/style.css', 'utf8', function(errors, contents){
            response.writeHead(200,{'Content-type': 'text/css'});
            response.write(contents);
            response.end();
        });    
    
    }
    else if (request.url === '/images/cars_1.jpg'){
        fs.readFile('./images/cars_1.jpg', function(errors,contents){
            response.writeHead(200,{'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        });

    } 
    else if (request.url === '/images/cars_2.jpg'){
        fs.readFile('./images/cars_2.jpg', function(errors,contents){
            response.writeHead(200,{'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === '/images/cars_3.jpg'){
        fs.readFile('./images/cars_3.jpg', function(errors,contents){
            response.writeHead(200,{'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url ==='/images/cats_1.jpg'){
        fs.readFile('./images/cats_1.jpg', function(errors,contents){
            response.writeHead(200,{'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === '/images/cats_2.jpg'){
        fs.readFile('./images/cats_2.jpg', function(errors,contents){
            response.writeHead(200,{'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === '/images/cats_3.jpg'){
        fs.readFile('./images/cats_3.jpg', function(errors,contents){
            response.writeHead(200,{'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        });
    }
     

});

//  tell your server which port run on
server.listen(7077);
// print to terminal window
console.log("Running in localhost at port 7077");