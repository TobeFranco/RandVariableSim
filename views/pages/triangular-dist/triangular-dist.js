let Vue = require('vue/dist/vue')

let page = new Vue({
  el: "#page",
  data: {
    min: 1,
    max: 3,
    mode: 2,
    n: 5,
    errors: []
  },
  methods: {
    getRandVar: function () {
      let rj = Math.random()
      let ri = Math.random()
      let lim = (this.mode - this.min) / (this.max - this.min)
      let x = 0
      console.log(this.n)
      if (rj <= lim) {
        x = this.min + (this.mode - this.min) * Math.sqrt(ri)
      } else {
        x = this.max - (this.max - this.mode) * Math.sqrt(1 - ri)
      }
      return x
    }
  },
  computed: {
    checkErrors: function (){
      this.errors = []
      if(this.min > this.max){
        this.errors.push("El valor minimo es mayor que el máximo.")
      }
      if(this.min == this.max){
        this.errors.push("Los valores minimo y máximo no pueden ser iguales.")
      }
      if(this.mode < this.min || this.mode > this.max){
        this.errors.push("El valor de la moda debe estar dentro de los valores máximo y minimo.")
      }
      console.log(this.errors.length)
      return this.errors.length
    }
  }
})
