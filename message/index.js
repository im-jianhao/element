import Vue from 'vue'
import Component from './message.vue'

function getInstance() {
  const vm = new Vue({
    render: h => h(Component)
  }).$mount()
  document.body.appendChild(vm.$el)
  return vm.$children[0]
}
let intance
// 单例模式，防止多次挂载
function singletonIntance() {
  return intance || (intance = getInstance())
}

const Message = {
  info(options) {
    singletonIntance().add(options)
  }
}

export { Message }

// 防止用户多次use
let _Vue
export default {
  install(Vue) {
    if (!_Vue) {
      _Vue = Vue
      Vue.prototype.$message = Message
    }
  }
}
