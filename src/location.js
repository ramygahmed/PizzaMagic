export function makeLocation(){
    let container = document.getElementById('container')
    const newEleme = Object.assign(
        document.createElement('main'),{
            innerHTML:'<div class="location">'+
            '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d152510.76901133815!2d-3.2322555835938087!3d53.32569770000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487ad820fc8f56e9%3A0xfd2f49bf539f3501!2sPizza%20Magic!5e0!3m2!1sen!2suk!4v1647768854493!5m2!1sen!2suk" width="100%" height="250" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'+
           '</div><div class="locText">Pizza Magic, Wirral</div>'
        }
    )
    newEleme.classList.add('location')
    container.appendChild(newEleme)
}