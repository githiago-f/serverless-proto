import { TransformPipe } from "../../../src/core/pipes/transform.pipe";

class TestType {
  public readonly name: string;
  constructor(name: string) {
    this.name = name;
  }

  defaultMethod() {
    return 'is defined';
  }
}

describe('# TransformPipe', () => {
  let transformer: TransformPipe<TestType>;
  beforeEach(() => {
    transformer = new TransformPipe(TestType);
  });

  it('should transform plain into instance', async () => {
    const testTypeInstance = await transformer.apply({ name: 'teste' });
    expect(testTypeInstance).toBeInstanceOf(TestType);
  });
});
