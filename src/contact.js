export function makeContact(){
    let container = document.getElementById('container')
    const newEleme = Object.assign(
        document.createElement('main'),{
            innerHTML:'<form action="#" method="post" class="form">'+
            '<input type="text" name="name" id="nameInput" placeholder="Name">'+
            '<input type="email" name="email" id="emailInput" placeholder="Email">'+
            '<textarea name="message" id="messageInput" cols="30" rows="10" placeholder="Message"></textarea>'+
        '</form>'+
        '<div class="callUs">Or Call Us On 0151 51 99 331</div>'
        }
    )
    newEleme.classList.add('contactUs')
    container.appendChild(newEleme)
}