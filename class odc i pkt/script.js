class Punkt{
    nazwa = "PKT SRODKA"
    x = 12
    y = 4

    info = function(){
        console.log(`Nazwa punktu to: ${this.nazwa}. <br> Jego współrzędne to: x = ${this.x} oraz y = ${this.y}`)
    }

    odcinek = function(){

}

}

let punkt = new Punkt;
punkt.info()

