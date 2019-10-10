() => {
    console.log("Start")
    setTimeout(() => console.log("Tick"), 500);
    console.log("End");
}

//Promise
() => {
    let fifteen = Promise.resolve(15);
    fifteen.then(value => console.log(`Got ${value}`));
}

//Callback based function 
() => {
    function applyForVisa(documents, resolve, reject) {
        console.log('Обработка заявления...');
        setTimeout(function () {
            Math.random() > .5 ? resolve({}) : reject('В визе отказано!');
        }, 2000);
    }

    function bookHotel() {

    }

    function buyTickets() {

    }

    applyForVisa({}, function (visa) {
        console.info('Виза получена.');
        bookHotel(visa, function (reservation) {

        }, function (error) {
            console.error(error);
        });
    }, function (reason) {
        console.error(reason);
    })
}

//Promise based function 
() => {
    function applyForVisa(documents) {
        console.log('Обработка заявления...');
        let promise = new Promise(function (resolve, reject) {
            setTimeout(function () {
                Math.random() > .5 ? resolve({}) : reject('В визе отказано!');
            }, 2000);
        });
        return promise;
    }

    function bookHotel(visa) {
        console.log(visa);
        console.log('Отель зарезервирована');
        return new Promise(function (resolve, reject) {
            resolve({});
        });
    }

    function buyTickets(booking) {
        console.log('booking', booking);
        console.info('Билеты куплены');
        return new Promise(function (resolve, reject) {
            reject('Нет билетов');
        })
    }

    applyForVisa({})
        .then(visa => {
            console.info('Виза получена.');
            return visa;
        })
        .then(bookHotel)
        .then(buyTickets)
        .catch(reason => console.error(reason))
        .then(() => console.log('Я еще тут'));
}

//async, await
() => {
    async function getUser() {
        return { id: 1 }
    }

    function getUser2() {
        //return Promise.resolve({ id: 1 });
        return new Promise(function (resolve, reject) {
            resolve({ id: 1 });
        });
    }

    function getUser3(id) {
        return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(response => response.json());
    }

    async function getUser4(id) {
        let response = await fetch(`https://jsonplaceholder.typicode.comm/users/${id}`);
        let data = await response.json();
        return data;
    }

    async function main() {
        try {
            let user = await getUser4(1);
            console.log(user);
        } catch (error) {
            console.error(error);
        }

    }

    main();
}

{
    function makeRangeIterator(start = 0, end = Infinity, step = 1) {
        let nextIndex = start;
        let iterationCount = 0;

        const rangeIterator = {
            next: function () {
                let result;
                if (nextIndex < end) {
                    result = { value: nextIndex, done: false }
                    nextIndex += step;
                    iterationCount++;
                    return result;
                }
                return { value: iterationCount,  done: true }
            }
        };
        return rangeIterator;
    }

    let it = makeRangeIterator(1, 10, 2);

    let result = it.next();
    while (!result.done) {
        console.log(result);
        result = it.next();
    }

    function* makeRangeIterator2(start = 0, end = 100, step = 1) {
        for (let i = start; i < end; i += step) {
            yield i;
        }
    }

    console.log('Iterated over sequence of size ', result);
}

//yield 
() => {
    function* foo(x) {
        while (true) {
            x = x * 2;
            yield x;
        }
    }

    var g = foo(2);
    g.next(); // -> 4
    g.next(); // -> 8
    g.next(); // -> 16
}