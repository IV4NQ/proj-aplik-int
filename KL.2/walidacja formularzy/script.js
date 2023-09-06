const NazUzytWypisz = document.querySelector('#NazUzytWypisz')
const emailWypisz = document.querySelector('#emailWypisz')
const HasloWypisz = document.querySelector('#HasloWypisz')
const NazUzytWprowadz = document.querySelector('#NazUzytWprowadz')
const emailWprowadz = document.querySelector('#emailWprowadz')
const HasloWprowadz = document.querySelector('#HasloWprowadz')
const Haslo2Wprowadz = document.querySelector('#Haslo2Wprowadz')
const blad = document.querySelector('#blad')
const btn = document.querySelector('button');

btn.addEventListener('click', function () {
    let nazwa = NazUzytWprowadz.value
    let email = emailWprowadz.value
    let haslo1 = HasloWprowadz.value
    let haslo2 = Haslo2Wprowadz.value


    const emailRegex = /^[A-Za-z0-9._%+-]+@zspglogow\.pl$/
    const HasloRegex =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/

    if (nazwa !== "") {
        if(emailRegex.test(email)){
            if(haslo1 !== ""){
                if(HasloRegex.test(haslo1)){
                    if(haslo1===haslo2){
                        NazUzytWypisz.innerHTML = `Nazwa użytkownika: ${nazwa}`
                        emailWypisz.innerHTML = `E-mail: ${email}`
                        HasloWypisz.innerHTML = `Hasło: ${haslo1}`
                    } else {
                        blad.innerHTML = `Hasła nie są takie same`
                    }
                } else {
                    blad.innerHTML = `Haslo nie spełnia oczekiwań`
                }
            } else {
                blad.innerHTML = `Hasło nie może być puste`
            }
        } else {
            blad.innerHTML = `E-mail jest niepoprawny`
        }
    } else {
        blad.innerHTML = `Nie wprowadzono nazwy uzytkownika`
    }
})

