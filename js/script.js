window.addEventListener('DOMContentLoaded', () => {
   

    let products = document.querySelectorAll('.product'),
    buttons=document.querySelectorAll('button'),
    openBtn=document.querySelector('.open');

    let  cart=document.createElement('div'),
    field=document.createElement('div'),
    heading =document.createElement('h2'),
    closeBtn=document.createElement('button');
   
function createCart(){
   

    cart.classList.add('cart')
    field.classList.add('cart-field')
    closeBtn.classList.add('close')
    heading.textContent="В нашей корзине"
    closeBtn.textContent="закрыть"

    document.body.prepend(cart)
    cart.appendChild(heading)
    cart.appendChild(field)
    cart.appendChild(closeBtn)


}

createCart()

openBtn.addEventListener('click',()=>{

cart.style.display='block'


});
closeBtn.addEventListener('click',function(){
    cart.style.display='none'
})


buttons.forEach((btn,i)=>{
    btn.addEventListener('click',()=>{
        let cloneItem = products[i].cloneNode(true),
        removeButton=cloneItem.querySelector('button').remove();
        
        field.appendChild(cloneItem)
        products[i].remove()


      
        
    })
})




});


  


















