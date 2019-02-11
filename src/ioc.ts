import "reflect-metadata";
import { Constructor } from "./types";

let ClassPool = new Map<Symbol, Constructor>();

export function Injectable() {
  return (constructor: Constructor) => {
    let params = Reflect.getMetadata(
      "design:paramtypes",
      constructor
    ) as Function[];

    if (params) {
      params.forEach(param => {
        if (param === constructor) {
          throw new Error("Cannot dependent yourself");
        }
      });
    }

    constructor.key = Symbol(constructor.name);

    ClassPool.set(constructor.key, constructor);
  };
}

export function Inject(target: Object, key: string) {
  var type: Constructor = Reflect.getMetadata("design:type", target, key);

  if (!ClassPool.has(type.key)) {
    throw new Error("Please register for the service first.");
  }

  target[key] = new (ClassPool.get(type.key) as typeof Function)();
}
