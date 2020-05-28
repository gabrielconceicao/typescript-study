System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function logExecutionTime() {
        return function (target, propertyKey, descriptor) {
            const originalMethod = descriptor.value;
            descriptor.value = function (...args) {
                const t1 = performance.now();
                const methodReturn = originalMethod.apply(this, args);
                const t2 = performance.now();
                console.log(`O método ${propertyKey} demorou ${t2 - t1} ms`);
                return methodReturn;
            };
        };
    }
    exports_1("logExecutionTime", logExecutionTime);
    return {
        setters: [],
        execute: function () {
        }
    };
});
