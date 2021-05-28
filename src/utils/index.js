export function throttle(fn, delay) {
    let last;
    let timer;
    let interval = interval || 200;
    return function () {
        let th = this;
        let args = arguments;
        let now = +new Date();
        if (last && now - last < interval) {
            clearTimeout(timer);
            timer = setTimeout(function () {
                last = now;
                fn.apply(th, args);
            }, interval);
        } else {
            last = now;
            fn.apply(th, args);
        }
    }
}
