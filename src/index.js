import './style.css'
import { makeHome } from './home'
import {makeMenu} from './menu'
import {makeContact} from './contact'
import {makeLocation} from './location'
import {makeStory} from './story'
import {makeAccount} from './account'
let container = document.getElementById('container');
    const newEleme = Object.assign(
        document.createElement('nav'),{
            innerHTML:'<div class="gradientBlack"></div><div class="logo"></div> <div class="navDropDown"></div><div class="navDropDownMenu"><div class="ndd ndd-menu">Menu</div><div class="ndd ndd-contactUs">Contact Us</div><div class="ndd ndd-locations">Locations</div><div class="ndd ndd-ourStory">Our Story</div><div class="ndd ndd-account">Account</div></div><div class="Menu nav-item">Menu</div><div class="contactUs nav-item">Contact Us</div><div class="locations nav-item">Locations</div><div class="ourStory nav-item">Our Story</div><div class="account">Account</div>'
        }
    )
    container.appendChild(newEleme)
makeHome();
let menu = document.getElementsByClassName('Menu')[0]
let logo = document.getElementsByClassName('logo')[0]
let contactUs = document.getElementsByClassName('contactUs')[0]
let location = document.getElementsByClassName('locations')[0]
let story = document.getElementsByClassName('ourStory')[0]
let account = document.getElementsByClassName('account')[0]
logo.addEventListener('click',e=>{
    clearContainer()
    makeHome();
})
location.addEventListener('click',e=>{
    clearContainer()
    makeLocation();
})
story.addEventListener('click',e=>{
    clearContainer()
    makeStory();
})
menu.addEventListener('click',e=>{
    clearContainer();
    makeMenu()
})
contactUs.addEventListener('click',e=>{
    clearContainer()
    makeContact();
})
account.addEventListener('click',e=>{
    clearContainer()
    makeAccount();
})

function clearContainer(){
    let main = document.getElementsByTagName('main')[0];
    container.removeChild(main)
}


