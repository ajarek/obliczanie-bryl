class Prostopadloscian {
    constructor(a, b, c) {
        this.a = a
        this.b = b
        this.c = c
    }
    obj() {
        if (this.a < 0 || this.b < 0 || this.c < 0) {
            alerty.innerHTML = 'podaj wartość >0'
        } else {
            alerty.innerHTML = ""
            return this.a * this.b * this.c
        }
    }
    pol() {
        return 2 * (this.a * this.b + this.a * this.c + this.b * this.c)
    }
}

submit.addEventListener('click', (e) => {
    e.preventDefault()
    const prostopadloscian = new Prostopadloscian(Number(document.querySelector('#a').value), Number(document.querySelector('#b').value), Number(document.querySelector('#c').value))
    objetosc.innerHTML = `Objętość: V=${prostopadloscian.obj().toFixed(2)}`
    pole.innerHTML = `Pole: Pc=${prostopadloscian.pol().toFixed(2)}`
})