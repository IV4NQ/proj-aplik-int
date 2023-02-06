const masa = document.querySelector('#masa')
const wzrost = document.querySelector('#wzrost')
const btn  = document.querySelector('button');
const wynik = document.querySelector('#wynik');

btn.addEventListener('click', function() {
    let m = parseInt(masa.value)
    let h = parseInt(wzrost.value)


    function BMI (m, h){
        let mToCm = h/100
        let wynik = 0;
        mToCm = mToCm * mToCm
        wynik = m/mToCm
        let wyn= wynik.toFixed(2)
        return wyn;
    }
    if(BMI(m,h)<16){
        wynik.innerHTML = `twoje bmi wynosi ~${BMI(m,h)} - wygłodzenie`
    }
    else if (BMI(m,h)>=16 && BMI(m,h)<=16.99){
        wynik.innerHTML = `twoje bmi wynosi ~${BMI(m,h)} - wychudzenie`
    }
    else if (BMI(m,h)>=17 && BMI(m,h)<=18.49){
        wynik.innerHTML = `twoje bmi wynosi ~${BMI(m,h)} - Niedowaga`
    }
    else if (BMI(m,h)>=18.50 && BMI(m,h)<=24.99){
        wynik.innerHTML = `twoje bmi wynosi ~${BMI(m,h)} - Optimum`
    }
    else if (BMI(m,h)>=25 && BMI(m,h)<=29.99){
        wynik.innerHTML = `twoje bmi wynosi ~${BMI(m,h)} - Nadwaga`
    }
    else if (BMI(m,h)>=30 && BMI(m,h)<=34.99) {
        wynik.innerHTML = `twoje bmi wynosi ~${BMI(m, h)} - Otyłość Ist`
    }
    else if (BMI(m,h)>=35 && BMI(m,h)<=39.99) {
        wynik.innerHTML = `twoje bmi wynosi ~${BMI(m, h)} - Otyłość IIst`
    }
    else if (BMI(m,h)>=40){
        wynik.innerHTML = `twoje bmi wynosi ~${BMI(m, h)} - Otyłość IIIst`
    }
})