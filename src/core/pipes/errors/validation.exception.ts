import { ValidationError } from "class-validator";

export class ValidationException extends Error {
  public readonly fields: Record<string, string[]>;
  constructor(errors: ValidationError[]) {
    super('Invalid data');
    this.fields = errors.reduce((acc, i) => {
      acc[i.property] = Object.entries(i.constraints ?? {}).map(([_, value]) => value);
      return acc;
    }, {} as Record<string, string[]>);
  }
}
