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

    ClassPool.set(constructor.key, new (constructor as InstanceType<any>)());
  };
}

export function Inject(target: Object, key: string) {
  const type: Constructor = Reflect.getMetadata("design:type", target, key);

  if (!ClassPool.has(type.key)) {
    ClassPool.set(type.key, new (type as InstanceType<any>)())
  }

  target[key] = ClassPool.get(type.key);
}
