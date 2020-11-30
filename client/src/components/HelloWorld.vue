<template>
  <div class="hello">
    <!-- <button @click="onConnect">开启连接</button> -->
    <button @click="onSend">发送消息</button>
    <!-- <button @click="onClose">关闭连接</button> -->
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data () {
    return {
    }
  },
  webSocket: {
    // 正在抓取数据事件推送
    fetchUserProfile (data) {
      console.log(data)
    },

    // 抓取完成事件推送
    finishFetchUserProfile (data) {
      console.log(data)
    }
  },
  methods: {
    onSend () {
      this.$webSocket.send('这是一条测试消息');
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
