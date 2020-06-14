export const randomize = (size) => {
    return Math.floor(Math.random(size))
}

export const memoize = fn => {
    const cache = new Map();
    const cached = function (val) {
        return cache.has(val) ? cache.get(val) : cache.set(val, fn.call(this, val)) && cache.get(val);
    };
    cached.cache = cache;
    return cached;
};