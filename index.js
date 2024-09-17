import Koa from "koa";
import KoaRouter from "koa-router";

//1. server即为文档中的application对象
const server = new Koa();
const router = new KoaRouter();
//注册路由表
router.get("/", (ctx) => {
  ctx.body = "hello world";
});

//字段是post/get，前端请求就要用post/get方法来发送
//如果方法用错，会报405（方法不允许）
router.post("/login", (ctx) => {
    ctx.body = "login";
  });


//一· 验证用户是否合法
server.use(async (/* 2.ctx即为文档中context对象 */ ctx, next) => {
  //3.ctx.request 即为文档中的request对象
  //4.ctx.response即为文档中的response对象
  console.log(1);
  if (true) {
    await next();
  } else {
    ctx.body = "失败";
  }
  console.log(11);
});

//二·处理业务逻辑
server.use(router.routes())
//响应时会给头部增加一个allowedMethods字段
.use(router.allowedMethods());


server.listen(8080, "0.0.0.0", () => {
  console.log("Server is listening on http://127.0.0.1:8080");
});
