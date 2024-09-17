import KoaRouter from "koa-router";

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

  export default router