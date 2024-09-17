import Koa from "koa";
import router from './src/router';
ipmort {vaild} from './src/middleware/vaild.js';

//1. server即为文档中的application对象
const server = new Koa();


//一· 验证用户是否合法
server.use(vaild)

//二·处理业务逻辑
server.use(router.routes())
//响应时会给头部增加一个allowedMethods字段
.use(router.allowedMethods());


server.listen(8080, "0.0.0.0", () => {
  console.log("Server is listening on http://127.0.0.1:8080");
});
