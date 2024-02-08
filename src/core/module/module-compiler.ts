import { ModuleBuilder } from "./module-builder";

export type CompileConfig = {};

export class ModuleCompiler {
  compile(config: CompileConfig): ModuleBuilder {
    return new ModuleBuilder();
  }
}
