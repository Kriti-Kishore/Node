const path=require('path');
var express=require('express');
const hbs = require('hbs');
const PORT = process.env.PORT || 3000;

var app = express();
const path1 = path.join(__dirname, "/template/views");
hbs.registerPartials(__dirname + '/template/partials');
app.set('view engine', 'hbs');
app.set("views", path1);

app.get('/',(req,res) =>{
	res.render('index',
	{pageTitle: 'Home',
	 websiteName: 'One-Click Shopping'
  });
});

app.get('/aboutPage',(req,res) =>{
	res.render('aboutPage',
  {pageTitle: 'About',
   websiteName: 'One-Click Shoppping', 
   tagline: 'An exciting place for the whole family to shop.',
  });
});

app.get('/contactPage',(req,res) =>{
	res.render('contactPage',
	{pageTitle: 'Contact',
	websiteName: 'One-Click Shopping',
	email: 'abc@gmail.com', 
	contactNumber: '1234567890',
	});
});

app.get('/cartPage',(req,res) =>{
	res.render('cartPage',
	{pageTitle: 'Your Cart',
	websiteName: 'One-Click Shopping',
	listItems: 'List of items available in your cart'
    });
});

app.listen(PORT, () => {
	console.log(`Server is up on port ${PORT}`);
  });
  

