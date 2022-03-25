export function makeAccount(){
    let container = document.getElementById('container')
    const newEleme = Object.assign(
        document.createElement('main'),{
            innerHTML:'<div class="profilePic"></div>'+
            '<div class="accountDetails">'+
                '<h4>Name: <span class="nameAccount">John Smith</span></h4>'+
                '<h4>Email: <span class="emailAccount">johnsmith@example.com</span></h4>'+
                '<h4>Mobile: <span class="mobileAccount">072837283728</span></h4>'+
                '<h4>Address: <span class="nameAccount">4 Heminsworth Example Road</span></h4>'+
            '</div>'
        }
    )
    newEleme.classList.add('accountPage')
    container.appendChild(newEleme)}