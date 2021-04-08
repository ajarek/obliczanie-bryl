class Ostroslup {
    constructor(wysokosc,bokA,bokB) {
        this.wysokosc=wysokosc
        this.bokA=bokA
        this.bokB=bokB
        
    }
    obj() {
        if(this.wysokosc<0||this.bokA<0||this.bokB<0){alerty.innerHTML='podaj wartość >0' }
        else{
           alerty.innerHTML=""
        return 1/3* this.wysokosc*this.bokA*this.bokB
        }
    }
    pol() {
        return this.bokB*Math.sqrt(this.wysokosc*this.wysokosc+1/4*this.bokA*this.bokA) + this.bokA*Math.sqrt(this.wysokosc*this.wysokosc+1/4*this.bokB*this.bokB)  +this.bokA*this.bokB
    }
}

submit.addEventListener('click', (e) => {
 e.preventDefault()
    const ostroslup = new Ostroslup(Number(document.querySelector('#wysokosc').value),Number(document.querySelector('#bokA').value),Number(document.querySelector('#bokB').value))
    objetosc.innerHTML = `Objętość: V=${ostroslup.obj().toFixed(2)}`
    pole.innerHTML = `Pole: Pc=${ostroslup.pol().toFixed(2)}`
})