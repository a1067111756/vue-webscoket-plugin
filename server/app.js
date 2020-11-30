const ws = require("nodejs-websocket")

const server = ws.createServer(function (conn) {
    // 启动
    console.log('有一个websocket连接!')

    // 接收消息
    conn.on("text", function (str) {
        console.log("Recevie: ", str)
        // 5s后发送返回消息
        const data = {
          action: 'fetchUserProfile',
          data: '正在抓取数据'  
        }
        const data1 = {
            action: 'fetchUserProfile',
            data: '抓取数据完成'  
        }        
        setTimeout(() => { conn.sendText(JSON.stringify(data)) }, 1000);
        setTimeout(() => { conn.sendText(JSON.stringify(data)) }, 2000);
        setTimeout(() => { conn.sendText(JSON.stringify(data)) }, 3000);
        setTimeout(() => { conn.sendText(JSON.stringify(data)) }, 4000);
        setTimeout(() => { conn.sendText(JSON.stringify(data1)) }, 5000);
    })

    // 断开
    conn.on("close", function (code, reason) {
        console.log("有一个websocket断开!")
    })  
    
    conn.on("error", function (code, reason) {
        console.log("异常关闭")
    })    
})

console.log('开启websocket服务!')
server.listen(8090)