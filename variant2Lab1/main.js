
const {me, users} = require('./var');
const {sorter} = require('./task2');
const {theBig} = require('./task3');
const {mixer} = require('./task4');
const {calendar} = require('./task5');
const {sortClass} = require('./task6');




// Task 1

let mas = "Я студентка третього курсу";
let newMas = mas.split(' ');


console.log(newMas);

// Task 2

sorter(me);

// Task 3

theBig(26, 39);

// Task 4

mixer([6, -13, -13, 8, 11, 0, -3, -11, -2, 65, 32, 69, 17, 34, 96, -14]);

// Task 5

calendar(8, 2019);

// Task 6

console.log(sortClass(users));

// Task 7

class Port {
    constructor(number, name, pier) {
        this.number = number;
        this.name = name;
        this.pier = pier;
    }
}

class Ship {
    constructor(number, name, pier) {
        this.number = number;
        this.name = name;
        this.pier = pier;
    }

    info() {
        console.log(this)
    }
}

class pier {

    constructor(number, shipNumber, timeArrival, timeDeparture) {
        this.number = number;
        this.shipNumber = shipNumber;
        this.timeArrival = timeArrival;
        this.timeDeparture = timeDeparture;
    }
}



let newShip = new Port(Math.round(Math.random()*44), "NewPort", undefined);

let piers = [
    new pier(1, 999, new Date(2020, 2, 30), undefined),
        new pier(2, 777, new Date(2019, 12, 30), new Date(2020, 3, 17)),
        new pier(3, 666, new Date(2019, 8, 3), new Date(2019, 10, 28)),
        new pier(4, 228, new Date(2019, 4, 18), new Date(2019, 8, 14)),
        new pier(5, 69, new Date(2018, 6, 11), new Date(2019, 3, 3))];

let ships = [new Ship(228, "Путейн", 2), new Ship(666, "DeViL", 4),
    new Ship(420, "Cannabis", undefined), new Ship(69, "love", 1),
    new Ship(999, "Infinity", 3), new Ship(777, "Маріна", 5),
    new Ship(555, "FiveFiveFive", 3), new Ship(444, "FourFourFour", 3)];

let ports = [new Port(1, 'Port1', 5), new Port(2, 'Port2', 4),
    new Port(3, 'Port3', 3), new Port(4, 'Port4', 2),
    new Port(5, 'Port5', 1),new Port(6, 'Титан', undefined)];

//додавання нового порту
console.log('\nдодавання ноового порту\n');

console.log(ports);

let addNewShip = (newShip) =>{
    ports.push(newShip);
};

addNewShip(newShip);

console.log(ports);

// Редагування порту в колекції

console.log('Редагування порту в колекції')

let editPort = (port, newName, newpier) =>{
    port.name = newName;
    port.pier = newpier;
};

console.log(ports[0]);
editPort(ports[0], 'Habib', 6);
console.log(ports[0]);

//видалення першого порту
console.log('\nвидалення першого порту\n');
console.log(ports);
let delatePort = (ports) =>{
    ports.shift();
};
delatePort(ports);
console.log(ports);

//знаходження конкретного порту
console.log('\nзнаходження конкретного порту\n');

let findPortClass = (port) =>{
    let ovePort;

    ports.forEach((value,index) => {

        if (value.name === port.name &&
            value.number === port.number &&
            value.pier === port.pier) ovePort = value ;
    });

    console.log(`Наш порт: ${ovePort.name} з номером ${ovePort.number}`)
};
let somePort = new Port(6, 'Титан', undefined);
findPortClass(somePort);

console.log('\nдодавання нового корабля\n');
 let someNewShip = new Ship(Math.round(Math.random()*999), "NewPlayer", undefined);
console.log(ships);
let addNewShiper = (ship) =>{
    ships.push(ship)
};

addNewShiper(someNewShip);
console.log(ships);

//видалення рандомного корабля
console.log('\nвидалення рандомного корабля\n');
console.log(ships);

let someNewShopForDell = new Ship(420, "Cannabis", undefined);
let delateShip = (ship) =>{
    ships.forEach((value,index, array) => {
        if(ship.number === value.number &&
        ship.name === value.name &&
        ship.pier === value.pier) array.splice(index, 1)
    })
};

delateShip(someNewShopForDell);



console.log(ships);

//знаходження конкретного корабля
console.log('\nзнаходження конкретного корабля\n');
let forFind = new Ship(999, "Infinity", 3);

let findShipClass = (ship) =>{
    let oveShip;

    ships.forEach((value,index) => {

        if (value.name === ship.name &&
            value.number === ship.number &&
            value.pier === ship.pier) oveShip = value ;
    });

    console.log(`Наш корабель: ${oveShip.name} з номером ${oveShip.number}`)
};

findShipClass(forFind);

// Редагування корабля в колекції
console.log('Редагування корабля в колекції');
let editShip = (ship, newName, pier) =>{
    ship.name = newName;
    ship.pier = pier;
};

console.log(ships[0]);
editShip(ships[0],'Makar',3);
console.log(ships[0]);


//Додавання пристані до порту
console.log('\nДодавання пристані до порту\n');


let addPier = (port, pier) =>{
    if(port.pier !== undefined) console.log(`Порт номер ${port.number} вже має пристань!`)
    else {
        port.pier = pier.number;
        console.log(`Порт номер ${port.number} тепер пристань ${pier.number}!`)
    }
}



console.log(ports);

addPier(ports[4],piers[3]);

console.log(ports);

//Видалення пристані із порту
console.log('\nВидалення пристані із порту\n');

let deletePier = (port) =>{
    if(port.pier === undefined) console.log(`Порт з номер ${port.number} ітак не має пристані!`);
    else {
        port.pier = undefined;
        console.log(`Порт з номер ${port.number} тепер не має пристані!`)
    }
};

console.log(ports);

deletePier(ports[5]);

console.log(ports);

//Прибуття/Відбуття корабля від пристані
console.log('\nПрибуття/Відбуття корабля від пристані\n');

let timeShip = (ship, pier) =>{
    let timeArrival = pier.timeArrival;
    let timeDeparture = pier.timeDeparture;

    if(ship.pier === pier.number && timeDeparture !== undefined) console.log(`Корабель ${ship.name}
     прибув на пристань номер ${pier.number} о ${timeDeparture}, а відбув o ${timeArrival}`);
    else if(ship.pier === pier.number && timeArrival === undefined) console.log(`Корабель ${ship.name}
     прибув на пристань номер ${pier.number} о ${timeDeparture}, але ще не відбув`);
    else if(ship.pier !== pier.number) console.log(`Корабель ${ship.name}
     не прибував на пристань номер ${pier.number}`);


};



timeShip(ships[0], piers[1]);

//Пошук усіх кораблів на пристані
console.log('\nПошук усіх кораблів на пристані\n');

let findAllShips = (ships, pier) =>{

    let allShips = ships.filter(value => {
        return value.pier === pier.number;
    });

    if (allShips.length === 0) console.log('Кораблів на пристані немає!');
    else console.log(allShips);

};

findAllShips(ships, piers[4]);