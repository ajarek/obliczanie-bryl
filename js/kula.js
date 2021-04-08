class Kula {
    constructor(promien) {
        this.promien = promien
        
    }
    obj() {
        if(this.promien<0){alerty.innerHTML='podaj wartość >0' }
        else{
        return 4/3 * Pi * this.promien * this.promien+this.promien
        }
    }
    pol() {
        alerty.innerHTML=""
        return 4 * Pi * this.promien * this.promien
    }
}

submit.addEventListener('click', (e) => {
 e.preventDefault()
    const kula = new Kula(Number(document.querySelector('#promien').value))
    objetosc.innerHTML = `Objętość: V=${kula.obj().toFixed(2)}`
    pole.innerHTML = `Pole: Pc=${kula.pol().toFixed(2)}`
})