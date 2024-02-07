import { validate } from "class-validator";
import { IPipe } from "../interfaces/pipe";
import { ValidationException } from "./errors/validation.exception";

export class ValidationPipe<T extends Object> implements IPipe<T, T> {
  async apply(input: T): Promise<T> {
    const errors = await validate(input);
    if(errors.length > 0) {
      throw new ValidationException(errors);
    }
    return input;
  }
}
