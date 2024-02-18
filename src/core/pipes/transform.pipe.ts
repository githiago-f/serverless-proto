import { ClassConstructor, plainToInstance } from "class-transformer";
import { IPipe } from "../interfaces/pipe";

export class TransformPipe<T> implements IPipe<any, T> {
  constructor(private _phisicalType: ClassConstructor<T>) {}

  async apply(input: any): Promise<T> {
    return plainToInstance(this._phisicalType, input);
  }
}
