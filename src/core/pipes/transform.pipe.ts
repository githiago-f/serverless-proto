import { ClassConstructor, plainToInstance } from "class-transformer";
import { IPipe } from "../interfaces/pipe";

export class TransformPipe<T> implements IPipe<Object, T> {
  constructor(private _phisicalType: ClassConstructor<T>) {}

  async apply(input: Object): Promise<T> {
    return plainToInstance(this._phisicalType, input);
  }
}
