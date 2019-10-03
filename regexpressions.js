console.log(/abc/.test("acb"));

{
    console.log('digits: ')
    console.log(/[0123456789]/.test("in 2`019"));
    console.log(/[0-9]/.test("in 1992"));
}

{
    console.log('test datetimes:');
    let dateTime = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/;
    console.log(dateTime.test("01-30-2003 15:20"));
    console.log(dateTime.test("30-jan-2003 15:20"));
}

{
    console.log("test invert:");
    let notBinary = /[^01]/;
    console.log(notBinary.test("1100100010111112100110"));
    console.log(notBinary.test("110010001000110"));
}

{
    console.log('Repeating parts of a pattern');
    console.log(/'\d+'/.test("'123'"));
    console.log(/'\d+'/.test("''"));
    console.log(/'\d*'/.test("'123'"));
    console.log(/'\d*'/.test("''"));
}

{
    console.log('? optional');
    let neighbor = /neighbou?r/;
    console.log(neighbor.test('neighbour'));
    console.log(neighbor.test('neighbor'));
}

{
    console.log('{} precise number of times:');
    let dt = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/;
    console.log(dt.test("1-30-2003 8:01"));
}

{
    console.log('Grouping subexpressions:');
    let cartoonCrying = /boo+(hoo+)+/i;
    console.log(cartoonCrying.test("Boohoooohoooohooo"));
}

{
    console.log('matches:');
    let match = /\d+/.exec("one two 100");
    console.log(match);
    console.log(match.index);
    console.log("one 55 two 100".match(/\d+/));
}

