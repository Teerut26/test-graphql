import { FieldMiddleware, MiddlewareContext, NextFn } from '@nestjs/graphql';

const loggerMiddleware: FieldMiddleware = async (
  ctx: MiddlewareContext,
  next: NextFn,
) => {
  const value = await next();
  console.log(ctx.context.req.headers);
  throw new Error('Error from middleware');
  return value;
};

export default loggerMiddleware