const Vue = require('vue/dist/vue');
const { ipcRenderer } = require('electron');

let page = new Vue({
  el: "#page",
  methods: {
    openPage(page, event){
      ipcRenderer.send('open-page', page)
    }
  }
})