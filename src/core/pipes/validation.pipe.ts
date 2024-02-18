import { validate } from "class-validator";
import { IPipe } from "../interfaces/pipe";
import { ValidationException } from "./errors/validation.exception";

export class ValidationPipe<T extends Object> implements IPipe<T, T> {
  constructor(private transformer: IPipe<any, T>) {}

  async apply(input: any): Promise<T> {
    const data = await this.transformer.apply(input);
    const errors = await validate(data);
    if(errors.length > 0) {
      throw new ValidationException(errors);
    }
    return data;
  }
}
