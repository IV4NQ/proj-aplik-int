BtnAktDrut = document.querySelector('#BtnAktDrut')
BtnAktLinka = document.querySelector('#BtnAktLinka')
BtnAktWtyki = document.querySelector('#BtnAktWtyki')
BtnAktModuly = document.querySelector('#BtnAktModuly')

BtnZamDrut = document.querySelector('#BtnZamDrut')
BtnZamLinka = document.querySelector('#BtnZamLinka')
BtnZamWtyki = document.querySelector('#BtnZamWtyki')
BtnZamModuly = document.querySelector('#BtnZamModuly')



function sprawdz(){
    iloscDrut = document.getElementById(iloscDrut).value
    iloscLinka = document.getElementById(iloscLinka).value
    iloscWtyki = document.getElementById(iloscWtyki).value
    iloscModuly = document.getElementById(iloscModuly).value

    if (iloscDrut == 0){
        iloscDrut.style.backgroundColor = "red"
    } else if(iloscDrut > 0 && iloscDrut <= 5){
        iloscDrut.style.backgroundColor = "yellow"
    } else {
        iloscDrut.style.backgroundColor = "Honeydew"
    }

    if (iloscLinka == 0){
        iloscLinka.style.backgroundColor = "red"
    } else if(iloscLinka > 0 && iloscLinka <= 5){
        iloscLinka.style.backgroundColor = "yellow"
    } else {
        iloscLinka.style.backgroundColor = "Honeydew"
    }

    if (iloscWtyki == 0){
        iloscWtyki.style.backgroundColor = "red"
    } else if(iloscWtyki > 0 && iloscWtyki <= 5){
        iloscWtyki.style.backgroundColor = "yellow"
    } else {
        iloscWtyki.style.backgroundColor = "Honeydew"
    }

    if (iloscModuly == 0){
        iloscModuly.style.backgroundColor = "red"
    } else if(iloscModuly > 0 && iloscModuly <= 5){
        iloscModuly.style.backgroundColor = "yellow"
    } else {
        iloscModuly.style.backgroundColor = "Honeydew"
    }
}
sprawdz()
