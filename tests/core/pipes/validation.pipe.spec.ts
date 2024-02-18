import { IsString } from "class-validator";
import { ValidationException } from "src/core/pipes/errors/validation.exception";
import { TransformPipe } from "src/core/pipes/transform.pipe";
import { ValidationPipe } from "src/core/pipes/validation.pipe";

class TestType {
  @IsString()
  public myProp: string;

  constructor(myProp: string) {
    this.myProp = myProp;
  }
}

describe('# ValidationPipe', () => {
  let validator: ValidationPipe<TestType>;

  beforeEach(() => {
    const transformer = new TransformPipe(TestType);
    validator = new ValidationPipe(transformer);
  });

  it('should validate all props', (done) => {
    validator.apply({ name: 1 })
      .then(() => done('fail'))
      .catch((e) => {
        expect(e).toBeInstanceOf(ValidationException);
        expect((e as ValidationException).fields.myProp).toHaveLength(1);
        done();
      });
  });
});
