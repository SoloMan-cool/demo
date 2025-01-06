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

let elQalinlik = document.querySelector('.savat__text4')

let elSelect = document.querySelector('.dough__btn')
let elBox = document.querySelector('.dough__box')
let elQalin = document.querySelector('.qalin')
let elOrtacha = document.querySelector('.ortancha')
let elYupqa = document.querySelector('.yupqa')
let elText = document.querySelector('.dough__text')
let elDough = document.querySelector('.dough')

elSelect.addEventListener('click', function(){
    elBox.classList.toggle('none')
    elQalin.classList.toggle('none')
    elOrtacha.classList.toggle('none')
    elYupqa.classList.toggle('none')
})

elQalin.addEventListener('click', function(){
    elDough.classList.add('none')
    elQalinlik.textContent('Hamirni qalinligi: Qalin')
})

elOrtacha.addEventListener('click', function(){
    elDough.classList.add('none')
    elQalinlik.textContent('Hamirni qalinligi: Ortancha')
})

elYupqa.addEventListener('click', function(){
    elDough.classList.add('none')
    elQalinlik.textContent('Hamirni qalinligi: Yupqa')
})