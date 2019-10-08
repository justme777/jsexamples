() => {
    console.log("Start")
    setTimeout(() => console.log("Tick"), 500);
    console.log("End");
}

//Promise
{
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
{
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