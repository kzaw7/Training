
//Rest Parameters

function foo(...args) {
    console.log(...args)
}

foo(1);
foo(1, 2);
foo(1, 2, 3);
foo(1, 2, 3, 4, 5, 6, 7);

//rest parameter

function something (a, ...args){
    console.log(a);
    console.log(...args);
}

something("A", 1, 2, 3, 4, 5, 6);

