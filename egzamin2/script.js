Indigo = document.querySelector('#Indigo')
SteelBlue = document.querySelector('#SteelBlue')
Olive = document.querySelector('#Olive')
prawy = document.querySelector('#prawy')
KolorCzcionki = document.querySelector('#KolorCzcionki')

Indigo.addEventListener('click', function (){
    prawy.style.backgroundColor="Indigo"
})
SteelBlue.addEventListener('click', function (){
    prawy.style.backgroundColor="SteelBlue"
})
Olive.addEventListener('click', function (){
    prawy.style.backgroundColor="Olive"
})

KolorCzcionki.addEventListener('select', function(){
    if(KolorCzcionki===White){
        prawy.style.color = "white"
    } else if (KolorCzcionki===Tan){
        prawy.style.color="Tan"
    }
})
