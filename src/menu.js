export function makeMenu(){
    let container = document.getElementById('container')
    const newEleme = Object.assign(
        document.createElement('main'),{
            innerHTML:'<div class="menuMain">We don\'t like complicating things, make your pizza the way you like it best!</div>' +
            '<div class="makePizza">' +
                '<div class="menuPizza">'+
                   ' <h3>Choose your Pizza</h3>'+
                '</div>'+
                '<div class="menuBase">'+
                    '<h3>Choose your Base</h3>'+
                '</div>'+
                '<div class="menuToppings">'+
                    '<h3>Choose your Toppings</h3>'+
                '</div>'+
                '<div class="menuPrice">£0</div> ' +  
            '</div>'
        }
    )
    newEleme.classList.add('menu')
    container.appendChild(newEleme)
    let cost = document.getElementsByClassName('menuPrice')[0]
    const pizza=document.getElementsByClassName("menuPizza")[0];
    pizza.addEventListener('click',e=>{
        pizza.innerHTML='<div class="menuPizza-sizes">'+
                        '<h4>Size</h4>'+
                        '<p cost="13">10"</p>'+
                        '<p cost="15">12"</p>'+
                        '<p cost="16">14"</p>'+
                       ' <p cost="20">20"</p>'+
                    '</div>'+
                    '<div class="menuPizza-type">'+
                        '<h4>Type</h4>'+
                        '<p cost = "0">Thin</p>'+
                        '<p cost = "1">Pan</p>'+
                    '</div>'+
                    '<div class="menuPizza-crust">'+
                        '<h4>Crust</h4>'+
                        '<p cost="2.30">Stuffed Crust</p>'+
                        '<p cost="0">Normal</p>'+
                    '</div>';
            
    })
    
    const base=document.getElementsByClassName("menuBase")[0];
    base.addEventListener('click',e=>{
        base.innerHTML='<p>Tomato Sauce</p>'+
        '<p cost = "3">BBQ Sauce</p>'+
        '<p cost = "4">Garlic Sauce</p>'+
        '<p cost = "2">Nutella</p>';
        
    })
    const toppings=document.getElementsByClassName("menuToppings")[0];
    toppings.addEventListener('click',e=>{
        toppings.innerHTML=
        '<p cost = "0.70">Ham</p>'+
        ' <p cost = "0.70">Pineapple</p>'+
         '<p cost = "0.70">Salami</p>'+
         '<p cost = "0.70">Jalapeno</p>'+
         '<p cost = "0.70">Onion</p>'+
         '<p cost = "0.70">Chilli</p>'+
         '<p cost = "0.70">Mushroom</p>'+
         '<p cost = "0.70">Beef</p>'+
         '<p cost = "0.70">Sausage</p>'
        ;
    })
   
   
}