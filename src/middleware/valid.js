async function valid(/* 2.ctx即为文档中context对象 */ ctx, next) {
    //3.ctx.request 即为文档中的request对象
    //4.ctx.response即为文档中的response对象
    if (true) {
      await next();
    } else {
      ctx.body = "失败";
    }
  };

  export{
    valid
  }