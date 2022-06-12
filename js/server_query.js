const express = require('express')

const app = express()

//监听客户端的get、post请求，并向客户端响应具体的内容

// app.get('/user',(req,res)=> {
//     //调用express提供的res.send()方法，向客户端响应一个json对象
//     res.send({name: 'MGShawn',age: '19',gander: '男'})
// })

// app.post('/user',(req,res) =>{
//     //调用express提供的res.send方法，向客户端响应一个文本字符串
//     res.send('请求成功')
// })

const cors = require('cors')

app.use(cors())


app.get('/',(req,res)=>{

//通过res.query可以获取到客户端发送过来的查询参数
//默认情况下req.query是一个空对象
    console.log(req.query)
    res.send('ok')

})
//启动web服务器
app.listen(80,()=>{
    console.log('express server running at http://127.0.0.1')
})