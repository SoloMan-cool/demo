let elRecipe = document.querySelector('.recipe')
let elBtn1 = document.querySelector('.mushroom')
let elBtn2 = document.querySelector('.pepperoni')
let elBtn3 = document.querySelector('.neapolitan')
let elBtn4 = document.querySelector('.greek')
let elBtn = document.querySelector('.margarita')

elBtn.addEventListener('click', function(){
    elRecipe.classList.remove('none')
})

elBtn1.addEventListener('click', function(){
    elRecipe.classList.remove('none')
})

elBtn2.addEventListener('click', function(){
    elRecipe.classList.remove('none')
})

elBtn3.addEventListener('click', function(){
    elRecipe.classList.remove('none')
})

elBtn4.addEventListener('click', function(){
    elRecipe.classList.remove('none')
})

let elBtn5 = elRecipe.querySelector('.recipe__btn')

elBtn5.addEventListener('click', function(){
    elRecipe.classList.add('none')
})