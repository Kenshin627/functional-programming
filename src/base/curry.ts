//curry

const curry =(fn: (...args: any[]) => any) => {
    let func = (...args1: unknown[]) => {
        if (args1.length < fn.length) {
            return (...args2: unknown[]) => {
                return func(...args1.concat(...args2));
            }
        }else { 
            return fn(...args1);
        }
    }
    return func;
}

const add = (num1: number, num2: number, num3: number): number => num1 + num2 + num3;
const curryAdd = curry(add);
console.log(curryAdd(1,2,3));
console.log(curryAdd(1,2)(3));
console.log(curryAdd(1)(2)(3));
export { curry }