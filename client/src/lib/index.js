
const install = function (Vue, connection) {
  // 判断connection
  if (!connection) { throw new Error('[vue-websocket] cannot locate connection') }

  // 创建websocket实例并挂载到全局属性
  const webSocket = new WebSocket(connection)
  Vue.prototype.$webSocket = webSocket

  // 全局混入组件选项
  const addListeners = function () {
    this.$webSocket.onmessage = (e) => {
      const msg = JSON.parse(e.data)
      const action = msg.action

      const conf = this.$options['webSocket']
      if ( conf && conf[action]) {
        conf[action](msg.data)
      }
    }
  }

  const removeListeners = function () {
    if (this.$options['webSocket']) {
      let conf =  this.$options['webSocket']
      if (conf.onmessage) {
        this.$webSocket.onmessage = null
      }
    }    
  }

  Vue.mixin({
    beforeCreate: addListeners,
    beforeDestroy: removeListeners
  })  
};

export default install;
