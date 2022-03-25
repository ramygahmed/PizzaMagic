export function makeStory(){
    let container = document.getElementById('container')
    const newEleme = Object.assign(
        document.createElement('main'),{
            innerHTML:'<div class="s01">A MAGICIAN NEVER REVEALS HIS SECRETS BUT FOR YOU, OUR ADORABLE CUSTOMER, WE ARE HAPPY TO MAKE AN EXCEPTION. LET\'5 GO!</div>'+
            '<div class="s02">OUR MAGIC STARTS WITH YOU! WE RESEARCH WHAT YOU LOVE THE BEST ABOUT PIZZA AND WE INCLUDE IT In OURS. PLAIN AND SImPLE.</div>'+
           ' <div class="s03">ONCE WE HAVE ENOUGH INFORMATION OUR MAGICANS IN THE KITCHEN START COOKING + A SPRINKLE OF LOVE AND CARE HERE AND THERE.</div>'+
            '<div class="s04">TO FINALISE OUR TRICK, WE\'LL DELIVER THE FOOD WITH LIGHTNING SPEED. WE\'LL NO DOUBT SUPRISE YOU EVERYTIME</div>'
        }
    )
    newEleme.classList.add('OurStory')
    container.appendChild(newEleme)
}