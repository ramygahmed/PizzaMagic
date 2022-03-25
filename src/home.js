export function makeHome(){
    let container = document.getElementById('container')
    const newEleme = Object.assign(
        document.createElement('main'),{
            innerHTML:'<div class="homeLogo"></div><div class="homeMain">MAGIC IN EVERY SLICE!</div><div class="homeMainBtns"><p>Menu</p><p>Contact Us</p><p>Locations</p><p>Our Story</p></div>'
        }
    )
    newEleme.classList.add('home')
    container.appendChild(newEleme)
}