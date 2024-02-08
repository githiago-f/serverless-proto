// import { ValidationPipe } from "./core/pipes/validation.pipe";

// class ClassDto {
// }

// @Lambda()
// @UsePipe(new ValidationPipe())
// class AController {
//   @Get()
//   public async aGetMethod(@Params() prams: Record<string, string | undefined>) {
//   }

//   @Post()
//   public async aPostMethod(@Body() body: ClassDto) {
//   }

//   @SQS({ timeout: 300, retry: {} })
//   public async sqsMethod(@Records() records: any) {
//   }
// }

// class AProvider {}

// class ModuleCompiler {
//   static compile(config: any) {}
// }

// const main = ModuleCompiler.compile({
//   providers: [AProvider],
//   controller: AController
// }).build({ globalTransform: true });
