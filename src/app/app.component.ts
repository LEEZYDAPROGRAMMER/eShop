import { Component } from '@angular/core';

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
   tempPrice: any=0;
  items=[{itemName:"NMD",picUrl:"https://m.media-amazon.com/images/I/71JxsngqQOL._AC_UL320_.jpg",desc:"Addidas NMD sneaker",price:2500},{itemName:"YEEZY",picUrl:"https://m.media-amazon.com/images/I/71-IPjT029L._AC_UL320_.jpg",desc:"Adidas YEEZY sneaker",price:4000},{itemName:"Jordans",picUrl:"https://m.media-amazon.com/images/I/71PM3pW+mmL._AC_UL320_.jpg",desc:"Nike Jordan sneaker",price:3000}];
  
  addToCart(item)
  {
    
    let index= this.items.indexOf(item);
   
  this.cartItems.push({itemName:this.items[index].itemName,picUrl:this.items[index].picUrl,desc:this.items[index].desc,price:this.items[index].price/*,qty:0*/});
    this.numCart+=1;
 
 /*
    // qty  
    this.cartItems[index].qty++
    */
    //total
    this.tempPrice=this.cartItems[index].price;
    this.totalPrice +=this.tempPrice; 
    
  }
  delete(cartI)
  {
    let index= this.items.indexOf(cartI);
    this.cartItems.splice(index,1);
   this.numCart-=1;
   //total
   this.tempPrice=cartI.price;
   this.totalPrice -= this.tempPrice;
 /*   // qty
     this.cartItems[index].qty--;
     */
    
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
