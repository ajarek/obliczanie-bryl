class Stozek {
    constructor(promien, wysokosc, tworzaca) {
        this.promien = promien
        this.wysokosc = wysokosc
        this.tworzaca = tworzaca
    }
    obj() {
        if (Math.pow(this.promien, 2) + Math.pow(this.wysokosc, 2) != Math.pow(this.tworzaca, 2) )
        {alerty.innerHTML = 'to nie jest stożek '}
        else if( this.promien < 0 || this.wysokosc < 0 || this.tworzaca < 0) {
            alerty.innerHTML = 'podaj wartość >0'
        }
         else {
            alerty.innerHTML = ""
            return 1 / 3 * Pi * Math.pow(this.promien, 2) * this.wysokosc
        }
    }
    pol() {
        if (Math.pow(this.promien, 2) + Math.pow(this.wysokosc, 2) != Math.pow(this.tworzaca, 2) )
        {alerty.innerHTML = 'to nie jest stożek '}
        else if( this.promien < 0 || this.wysokosc < 0 || this.tworzaca < 0) {
            alerty.innerHTML = 'podaj wartość >0'
        }
         else {
            alerty.innerHTML = ""
            return Pi * this.promien * (this.promien + this.tworzaca)
         }
    }
}

submit.addEventListener('click', (e) => {
    e.preventDefault()
    const stozek = new Stozek(Number(document.querySelector('#promien').value), Number(document.querySelector('#wysokosc').value), Number(document.querySelector('#tworzaca').value))
    objetosc.innerHTML = `Objętość: V=${stozek.obj()}`
    pole.innerHTML = `Pole: Pc=${stozek.pol()}`
})