import Koa from 'koa'

//1. server即为文档中的application对象
const server = new Koa()


//一· 验证用户是否合法
server.use((/* 2.ctx即为文档中context对象 */ctx,next)=>{
    //3.ctx.request 即为文档中的request对象
    //4.ctx.response即为文档中的response对象
    console.log(1)
    next()
    console.log(11)
})

//二·处理业务逻辑
server.use((ctx,next)=>{
    console.log(2)
    next()
    console.log(22)
})

server.use((ctx,next)=>{
    console.log(3)
    next()
    console.log(33)
})

server.use((ctx,next)=>{
    console.log(4)
    next()
    console.log(44)
})

server.listen(8080,'0.0.0.0',()=>{
    console.log("Server is listening on http://127.0.0.1:8080")
})
