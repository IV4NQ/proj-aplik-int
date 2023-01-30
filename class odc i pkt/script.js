class Punkt {
    constructor(id, x, y)
    {
        this.id = id;
        this.x = x;
        this.y = y;
    }

    info()
    {
        document.write(`Punkt "${this.id}" ma współrzędne x: ${this.x}, oraz y: ${this.y}. <br>`);
    }
}

class Odcinek {
    constructor(pkt1, pkt2) {
        this.pkt1 = pkt1;
        this.pkt2 = pkt2;
    }
    dlugosc()
    {
        return Math.sqrt((this.pkt2.x - this.pkt1.x) ** 2 + (this.pkt2.y - this.pkt1.y) ** 2);
    }
    info() {
        document.write(`Odcinek pomiędzy punktami "${this.pkt1.id}" i "${this.pkt2.id}" ma długość ${this.dlugosc().toFixed(2)}.<br>`);
    }
}

const pktA = new Punkt("A", 2, 3);
const PktB = new Punkt("B", 4, 5);
const odcinekAB = new Odcinek(pktA, PktB);
pktA.info();
PktB.info();
odcinekAB.info();