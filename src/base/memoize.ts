//简易版本的meoize函数
const memoize =  (f: (x: number) => number) => {
    const caches: Map<number, number> = new Map();
    return function(x: number) {
        if (caches.has(x)) {
            console.log(`from cache`);
            return caches.get(x);
        }else {
            const res = f(x);
            console.log(`from f`);
            caches.set(x, res);
            return res;
        }
    }
}

const add = (x: number) => x * x;
const memoizeAdd = memoize(add);

console.log(memoizeAdd(3));
console.log(memoizeAdd(3));
console.log(memoizeAdd(3));
console.log(memoizeAdd(5));

export {}