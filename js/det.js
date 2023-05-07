
let queryString=window.location.search;
let urlparams=new URLSearchParams(queryString);

urlIdParameter=urlparams.get('id');
console.log(urlIdParameter);
const homeProducts=[
  {
       title:"Winter shirts",
       image:'./images/1.jpg',
       price:20,
       description:"An apple mobile which is nothing like apple, An apple mobile which is nothing like apple",
       Availability:4,
       Brand: "H $ M ",
       des1:" thick nick",
       des2:"Relaxed fit",
       des3:"Crew ",
       des4:"Made in china",
  },
  {
       title:"shirts",
       image:'./images/2.jpg',
       price:15,
       description:"Organic Cotton, Fair Trade quality",
       Availability:7,
       Brand: "H  ",
       des1:" half nick",
       des2:"Winter and summer",
       des3:"all colors ",
       des4:"Made in American",
  },

   {
       title:"winter shirt",
       image:'./images/3.jpeg',
       price:22,
       description:"Organic Cotton, Fair Trade quality",
       Availability:10,
       Brand: " M ",
       des1:" thick nick",
       des2:"only winter",
       des3:"nick ",
       des4:"Made in German",
  },
{
       title:"Suits",
       image:'./images/4.jpg',
       price:25,
       description:"common ",
       Availability:5,
       Brand: "H ",
       des1:" all color",
       des2:"summer and winter",
       des3:"formal ",
       des4:"Made in Egypt",
  },
  {
       title:"Orange dress",
       image:'./images/14.jpg',
       price:30,
       description:"An apple mobile which is nothing like apple, An apple mobile which is nothing like apple",
       Availability:4,
       Brand: "M ",
       des1:" cajoal",
       des2:"winter and summer",
       des3:"all colors ",
       des4:"Made in china",
  },
  {
       title:"Shirt",
       image:'./images/13.jpg',
       price:25,
       description:"Organic Cotton, Fair Trade quality",
       Availability:7,
       Brand: "H $ M ",
       des1:" half nick",
       des2:"Winter and summer",
       des3:"all colors ",
       des4:"Made in American",

  },
  {
       title:"dresses",
       image:'./images/12.jpg',
       price:35,
       description:"Organic Cotton, Fair Trade quality",
       Availability:10,
       Brand: "H  ",
       des1:" cajoal",
       des2:"winter and summer",
       des3:"all colors ",
       des4:"Made in china",
  },
 {
       title:"purple dress",
       image:'./images/11.jpg',
       price:30,
       description:"Organic Cotton, Fair Trade quality",
       Availability:5,
       Brand: " M ",
       des1:" only pruple color",
       des2:"only summer",
       des3:"ladies ",
       des4:"Made in German",
  },
  {
       title:"White winter",
       image:'./images/17.jpg',
       price:30,
       description:"An apple mobile which is nothing like apple, An apple mobile which is nothing like apple",
       Availability:4,
       Brand: "H $ M ",
       des1:" half nick",
       des2:"Winter and summer",
       des3:"all colors ",
       des4:"Made in American",
  },
  {
       title:"Shirt",
       image:'./images/18.jpg',
       price:25,
       description:"Organic Cotton, Fair Trade quality",
       Availability:7,
       Brand: " M ",
       des1:" half nick",
       des2:"Winter and summer",
       des3:"all colors ",
       des4:"Made in American",

  },

  {
       title:"white dress",
       image:'./images/19.jpg',
       price:35,
       description:"Organic Cotton, Fair Trade quality",
       Availability:10,
       Brand: "H $ M ",
       des1:" cajoal",
       des2:"winter and summer",
       des3:"all colors ",
       des4:"Made in Egypt",
  },
  {
       title:"Jackets",
       image:'./images/20.jpg',
       price:30,
       description:"Organic Cotton, Fair Trade quality",
       Availability:5,
       Brand: "H",
       des1:" cajoal and formal",
       des2:"only winter",
       des3:"all colors ",
       des4:"Made in china",
  }
]
let productImage = document.getElementById("im");  
let productTitle=document.getElementById("title");
let productPrice=document.getElementById("price");
let productAvailability=document.getElementById("Availability");
let productBrand = document.getElementById("Brand");
let productDes1 = document.getElementById("des1");  
let productDes2 = document.getElementById("des2");
let productDes3 = document.getElementById("des3");
let productDes4 = document.getElementById("des4");      



console.log(productImage);



productImage.src=homeProducts[urlIdParameter].image;
 productTitle.textContent=homeProducts[urlIdParameter].title;
 productPrice.textContent=`${homeProducts[urlIdParameter].price}$`;
 productAvailability.textContent=` Avalibilty: ${homeProducts[urlIdParameter].price}`;
productBrand.textContent=` Brand: ${homeProducts[urlIdParameter].Brand}`;
productDes1.textContent=homeProducts[urlIdParameter].des1;
productDes2.textContent=homeProducts[urlIdParameter].des2;
productDes3.textContent=homeProducts[urlIdParameter].des3;
productDes4.textContent=homeProducts[urlIdParameter].des4;

     
 
let btns=document.querySelectorAll("btn");
btns.forEach((item)=>{
  item.addEventListener ('mouseover',()=>{

  })  
})
document.getElementById("xs").addEventListener("click", xsProductClick);
document.getElementById("s").addEventListener("click", sProductClick);
document.getElementById("m").addEventListener("click", mProductClick);
document.getElementById("l").addEventListener("click", lProductClick);

function xsProductClick(){
     productImage.src="./images/2.jpg";
}
function sProductClick(){
     productImage.src="./images/9.jpg";

}
function mProductClick(){
     productImage.src="./images/10.jpeg";

}
function lProductClick(){
     productImage.src="./images/5.jpg";

}
// to show added to card with click in button add
  function showDiv() {
     div = document.getElementById('add');
     div.style.display = "block";
     setTimeout (function hidden (){
          div = document.getElementById('add');
          div.style.display = "none";
     },1000)
 }