// T221
// ----- Wartosc bezwzgledna sposob 1 -----
function wartosc_bezwzgledna_1(x){
    if(x>0){
        return x;
    }
    else {
        return x*(-1);
    }
}
// ----- Wartosc bezwzgledna sposob 2 -----
function wartosc_bezwzgledna_2(x){
    let wynik = (x>0)?x:-x;
    return wynik;
}
// ------------

function zwieksz(x){
    x = x+1;
    document.write(x + "<br>");
}

var arg = 15;

zwieksz(arg);

document.write(wartosc_bezwzgledna_1(arg) + "<br>")
document.write(wartosc_bezwzgledna_2(arg))