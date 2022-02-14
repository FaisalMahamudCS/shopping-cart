
// function quantity(quantityId){
// document.getElementById(quantityId);
// var quantity= document.getElementById(quantityId).value;
// var quantityIncrement= parseInt(quantity)


// //var quantityIncrement= parseInt(quantity)
// return quantityIncrement;
// }
// function quantityId(quantity){
//     return document.getElementById(quantity);
// }
// function productId(productId){
//     return document.getElementById(productId);
// }

// function price(product){
//     var price=document.getElementById(product).innerHTML;
//     var totalPrice=parseInt(price);
//     return totalPrice;
// }
// //
// var price=price('product-1');
// var quantityIncrement=quantity('quantity')
// var quantityid1=quantityId('quantity')
// var product1=product1()
// function increment(incrementID){
// document.getElementById(incrementID).addEventListener('click',function(){
//    //var quantityIncrement=0;

  
// quantityIncrement++;
// quantityid1.value=quantityIncrement;

// var totalPrice=price * quantityIncrement;
// document.getElementById('product-1').innerHTML=totalPrice;

// // console.log(quantityIncrement)
// // alert(quantityIncrement)
// })

// }
// var quantityDecrement=document.getElementById('quantity').value;
// console.log(quantityDecrement);

// function decrement(decrementId){
// document.getElementById(decrementId).addEventListener('click',function(){
    
// var quantityDecrement=document.getElementById('quantity').value;
// quantityDecrement--;
// document.getElementById('quantity').value=quantityDecrement;
// var totalPrice=price * quantityDecrement;
// document.getElementById('product-1').innerHTML=totalPrice;

  
// })
// }

function increment(quantityID,productID,price,isIncreasing){
    
   var baseQuantity= document.getElementById(quantityID);
    var quantity= document.getElementById(quantityID).value;
    var quantityIncrement= parseInt(quantity)
    var products=document.getElementById(productID)
    // var totalprice1=document.getElementById(productID).innerHTML;
    // var price=parseInt(totalprice1);
  //  console.log(price)
var newQuantity;
console.log(isIncreasing)
    if(isIncreasing==true){
 newQuantity=   quantityIncrement +1;
console.log(newQuantity) 
}
 else{
     newQuantity=quantityIncrement-1;
 }
console.log(newQuantity)
//quantityIncrement++;
baseQuantity.value=newQuantity;
console.log(price)
var totalPrice=price * newQuantity;
products.innerHTML=totalPrice;
}
function updateCaseNumber(isIncreasing){
    const caseInput=document.getElementById('')
}

// function increment(quantityID,productID){
    
//     var baseQuantity= document.getElementById(quantityID);
//      var quantity= document.getElementById(quantityID).value;
//      var quantityIncrement= parseInt(quantity)
//      var products=document.getElementById(productID)
//      var totalprice1=document.getElementById(productID).innerHTML;
//      var price=parseInt(totalprice1);
  
 
//  quantityIncrement++;
//  baseQuantity.value=quantityIncrement;
 
//  var totalPrice=price * quantityIncrement;
//  //console.log(totalPrice)
//  products.innerHTML=totalPrice;
//  }

 

function decrement(quantityID,productID){
    
    var baseQuantity= document.getElementById(quantityID);
     var quantity= document.getElementById(quantityID).value;
     var quantityDecrement= parseInt(quantity)
     console.log(quantityDecrement)
     var products=document.getElementById(productID)
     var totalprice1=document.getElementById(productID).innerHTML;
     var price=parseInt(totalprice1);
     console.log(price)
  
 
 quantityDecrement--;
 baseQuantity.value=quantityDecrement;
 
 var totalPrice=price * quantityDecrement;
 console.log(totalPrice)
 products.innerHTML=totalPrice;
 }


 function total(){

    var subtotal=document.getElementById('subtotal');
    var totalprice=document.getElementById('total');
    var tax=document.getElementById('tax');
    
    var sub=subtotal.innerText;
    console.log(sub)
    var iphone=document.getElementById('product-1');
    var caseing=document.getElementById('iphone-price')
      var total=parseInt(iphone.innerText)+parseInt(caseing.innerText);
  console.log(total)

var tax1=total/10;
var totalPrice=total+total/10;
console.log(totalPrice)
subtotal.innerHTML=total;
tax.innerHTML=tax1;
totalprice.innerHTML=totalPrice;
  }



document.getElementById('decrement').addEventListener('click',function(){

increment('quantity','product-1',1219,false)
total()
});


document.getElementById('decrement-1').addEventListener('click',function(){
    increment('quantity-1','iphone-price',121,false)
    total()
    });
    
    





    document.getElementById('increment').addEventListener('click',function(){
        console.log('clicj')
increment('quantity','product-1',1219,true)
total()
        });
        

document.getElementById('increment-case').addEventListener('click',function(){
   increment('quantity-1','iphone-price',121,true)
   total()
    });
    



