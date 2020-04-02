const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const port = process.env.PORT || 8000; //falsy value
const app = express();

app.use(bodyParser.urlencoded({ extended: true}));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.use(express.static("static"));
app.use(express.static("stylesheets"));

app.get('/cats', function(request, response){
    response.render('cats');
});

class Cat{
	constructor(name, age, sleepspots, id){
		this.name = name;
		this.age = age;
        this.spots = sleepspots;
        this.id = id;
	}
}

app.get('/cat1', function(request, response){
    var sleepspots1 = ['Under bed', 'On bed', 'On Couch'];
    const cat = new Cat('Steve & Kitten 1', 9, sleepspots1, 'cat1')
    response.render('details', {cat});
});

app.get('/cat2', function(request, response){
    var sleepspots2 = ['Keyboard', 'Computer Desk', 'Cat Bed'];
    const cat = new Cat('Steve & Kitten 2', 5, sleepspots2, 'cat2')
    response.render('details', {cat});
});

app.get('/cat3', function(request, response){
    var sleepspots3 = ['Window Sill', 'Between Legs', 'Floor'];
    const cat = new Cat('Steve & Kitten 3', 13, sleepspots3, 'cat3')
    response.render('details', {cat});
});

app.listen(port, () => console.log(`Express server listening on port ${port}`));