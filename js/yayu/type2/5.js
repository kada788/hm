let specialObj = {

    valueOf: function () {
        console.log('Called valueOf');
        return 123;
    },
    toString: function () {
        console.log('Called toString');
        return '456';
    }
}
console.log(Number(specialObj));


let objectWithoutPrimitiveValueOf = {
    valueOf: function () {
        console.log('Called valueOf');
        return this;
    },
    toString: function () {
        console.log('Called toString.....');
        return '789';
    }
}
console.log(Number(objectWithoutPrimitiveValueOf));//NaN


let problemObj = {
    valueOf: function () {
        console.log('Called valueOf');
        return this;
    },
    toString: function () {
        console.log('Called toString.....');
        return this;
    }
}
try {
    console.log(Number(problemObj));
}
catch (e) {
    console.log(e);
}