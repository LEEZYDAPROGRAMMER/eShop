import { Component } from '@angular/core';
import { IfStmt } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title ='Eshop';
  cartItems=[];
  numCart:number=0;
 totalPrice: any=0;
 qty: number=0; 

   
  items=[{itemName:"NMD",picUrl:"https://m.media-amazon.com/images/I/71JxsngqQOL._AC_UL320_.jpg",desc:"Addidas NMD sneaker",price:2500},{itemName:"YEEZY",picUrl:"https://m.media-amazon.com/images/I/71-IPjT029L._AC_UL320_.jpg",desc:"Adidas YEEZY sneaker",price:4000},{itemName:"Jordans",picUrl:"https://m.media-amazon.com/images/I/71PM3pW+mmL._AC_UL320_.jpg",desc:"Nike Jordan sneaker",price:3000}];
  
  addToCart(item)
  {
    
    let index= this.items.indexOf(item);

 
    
    // if(this.cartItems.length == 0)
    // {
      
    //   this.cartItems.push({itemName:this.items[index].itemName,picUrl:this.items[index].picUrl,desc:this.items[index].desc,price:this.items[index].price,qty:this.qty+1})
    //   this.doesNot = true;
    // }
    // else{
      
   
    
    
      var product= this.cartItems.find(x =>x.itemName===item.itemName);

      if(product)
        {
         
          this.cartItems[index].qty =  this.cartItems[index].qty + 1
         
        }
     else
        {
          
          this.cartItems.push({itemName:this.items[index].itemName,picUrl:this.items[index].picUrl,desc:this.items[index].desc,price:this.items[index].price,qty:this.qty+1})
         
        }


    

 //   }
   
    //total
    
    this.totalPrice +=item.price; 
    
  }
  delete(cartI)
  {
    let index= this.cartItems.indexOf(cartI);
    this.cartItems.splice(index,1);
   this.numCart-=1;
   //total
  
   this.totalPrice=this.totalPrice-(cartI.price*cartI.qty);
   
  // qty
   cartI.qty--;
     
  }
 checkout(cartI)
  {
    let index= this.items.indexOf(cartI);
   this.numCart= this.cartItems.length;
    this.cartItems.splice(0,this.numCart);
    this.numCart=null;
    this.totalPrice=null;
  }
 
}
