
//using eval
() => {
    const x = 1;
    function evalAndReturnX(code) {
        eval(code);
        return x;
    }

    console.log(evalAndReturnX("var x=55;"));
    console.log(x);

    let plusOne = Function("n", "return n + 1;");
    console.log(plusOne(4));
}

//using require.js
() => {
    require(['mypackage'], () => {
        f1();
        f2();
    });
}

//using require, but it is not working because of ecma script's version
() => {
    const { days, months } = require("date-names");

    exports.formatDate = function (date, format) {
        return format.replace(/YYYY|M(MMM)?|Do?|dddd/g, tag => {
            if (tag == "YYYY") return date.getFullYear();
            if (tag == "M") return date.getMonth();
            if (tag == "MMMM") return months[date.getMonth()];
            if (tag == "D") return date.getDate();
            if (tag == "Do") return ordinal(date.getDate());
            if (tag == "DDDD") return days[date.getDay()];
        });
    };

    const { formatDate } = require('./format-date');
    console.log(formatDate(new Date(2017, 9, 13), "dddd the Do"));

    require.cache = Object.create(null);

    function require(name) {
        if (!(name in require.cache)) {
            let code = readFile(name);
            let module = { exports: {} };
            require.cache[name] = module;
            let wrapper = Function("require, exports, module", code);
            wrapper(require, module.exports, module);
        }
        return require.cache[name].exports;
    }
}

//using import, export
{
    //import ordinal from 'ordinal';
    //import {days, months} from "date-names";

}