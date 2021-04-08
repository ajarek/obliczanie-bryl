class Walec {
    constructor(promien, wysokosc) {
        this.promien = promien
        this.wysokosc = wysokosc
    }
    obj() {
        if(this.promien<0||this.wysokosc<0){alerty.innerHTML='podaj wartość >0' }
        else{
            alerty.innerHTML=""
        return 2 * Pi * this.promien * this.wysokosc
        }
    }
    pol() {
        return 2 * Pi * this.promien * (this.promien + this.wysokosc)
    }
}

submit.addEventListener('click', (e) => {
 e.preventDefault()
    const walec = new Walec(Number(document.querySelector('#promien').value), Number(document.querySelector('#wysokosc').value))
    objetosc.innerHTML = `Objętość: V=${walec.obj().toFixed(2)}`
    pole.innerHTML = `Pole: Pc=${walec.pol().toFixed(2)}`
})