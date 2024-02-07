import { IPipe } from "src/core/interfaces/pipe";

export function Pipe(pipe: IPipe<any, any>): MethodDecorator {
  return (target, propertyKey, descriptor) => {};
}
