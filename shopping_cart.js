// exporting module
console.log('exporting moudle');
let cart=[]
export let callcart=function(item,ingredients)
{
    cart.push({item,ingredients})
    console.log(`so the item added to cart are ${item} and ${ingredients    }`);
}
let anush=29
let daniel=20
export{anush,daniel}
export default function(item,ingredients)
{
    cart.push({item,ingredients})
    console.log(`so the item added to cart are ${item} and ${ingredients    }`);
}