export interface IPipe<T, R> {
  apply(input: T): Promise<R>
}
