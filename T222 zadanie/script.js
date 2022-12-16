function potega(x,y){
    let wynik =1;
    for(let i=1; i<=x; i++){
        wynik = x**y;
    }
    return wynik;
}
let x=2;
let y=3;
let out = potega(x,y)
document.write(`${x}<sup>${y}</sup> = ${out}`)