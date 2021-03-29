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
	{pageTitle: 'SBI Bank Transactions'
  });
});

app.get('/initiateTrans',(req,res) =>{
	res.render('initiateTrans',
  {pageTitle: 'Initiate',
   accountholderName: 'Kriti Kishore',
   bankName: 'SBI', 
   accountNumber: '386538658658',
   totalAmount: '25000',
   ifscCode: 'WRWERG54264'
  });
});

app.get('/confirmTrans',(req,res) =>{
	res.render('confirmTrans',
	{pageTitle: 'Confirm',
	accountholderName: 'Kriti Kishore',
	bankName: 'SBI', 
	accountNumber: '386538658658',
	totalAmount: '25000',
	ifscCode: 'WRWERG54264'});
});

app.get('/updateTrans',(req,res) =>{
	res.render('updateTrans',
	{pageTitle: 'Update',
	accountholderName: 'Kriti Kishore',
	bankName: 'SBI', 
	accountNumber: '386538658658',
	totalAmount: '30000',
	ifscCode: 'WRWERG54264'});
});

app.get('/cancelTrans',(req,res) =>{
	res.render('cancelTrans',
	{pageTitle: 'Cancel',
	accountholderName: 'Kriti Kishore',
	bankName: 'SBI', 
	accountNumber: '386538658658',
	totalAmount: '25000',
	ifscCode: 'WRWERG54264'});
});

app.listen(PORT, () => {
	console.log(`Server is up on port ${PORT}`);
  });
  

