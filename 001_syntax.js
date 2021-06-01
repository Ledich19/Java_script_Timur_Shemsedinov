'use strict'

//1
const INTERVAL = 500;
let counter = 0;
const MAX_VALUE = 10;
let timet = 0;
const event = () => {
    if (counter === MAX_VALUE) {
        console.log('the end');
        clearInterval(timer);
        return;
    }
    console.dir({
        counter,
        date: new Date()
    });
    counter++
}
console.log('begin');
timer = setInterval(event, INTERVAL);

//2
const MAX_VALUE = 10;
console.log('begin');
for (let i = 0; i < MAX_VALUE; i++) {
    console.dir({
        i,
        date: new Date()
    });
}
console.log('the end');
//3
const add = (a, b) => a + b;
console.log('5 + 2 =' + add(5, 2));
console.log('5 + 2 =' + add(5.1, 2.3));
/*   \' экрантрует кавычку */
console.log('\'5\' + \'2\' =' + add('5', '2'));
console.log('5 + (-2) =' + add(5, -2));
//4
const welcom = person => {
    console.log(`Ave, ${person.name}`)
}
const persons = [{
        name: 'Marcus Aurelius'
    },
    {
        name: 'Mao Zedong'
    },
    {
        name: 'Rene Descartes'
    },
]
for (const person of persons) welcom(person);
//5
const welcom = person => {
    console.log(`Ave, ${person.name}`)
}
const persons = {
    marcus: {
        name: 'Marcus Aurelius'
    },
    mao: {
        name: 'Mao Zedong'
    },
    rene: {
        name: 'Rene Descartes'
    },
}
for (const name in persons) {
    const person = persons[name];
    welcom(person);
};
//6
let SULUTATION = 'Ave';
const colors = [
    'black', 'red', 'green', 'yellow', 'blue', 'magenta', 'cayan', 'white'
];
// \x1b добавляет символ 3 цвет букв если 4 цвет фона
//эскейп последовательность 0m все сбрасывает
const colorer = (s, color) => `\x1b[3${color}m${s}\x1b[0m`;
const colorize = name => {
    let res = '';
    const letters = name.split('');
    let color = 1;
    for (const letter of letters) {
        res += colorer(letter, color++);
        if (color > colors.length) color = 1;
    }
    return res
}
const greetings = name => (
    name.includes('Augustus') ?
    `${SULUTATION}, ${colorize(name)}!` :
    `hello, ${name}`
);
const fullName = 'Marcus Aurelius Antonius Augustus'
console.log(greetings(fullName));
const shortName = 'Marcus Aurelius'
console.log(greetings(shortName));

//7
//круглые скобки указывают на то что ето значение обект
const adder = (initial = 0) => ({
    value: initial,
    steps: [initial],
    add(value) {
        this.steps.push(value);
        this.value += value;
        return this; //возвращает обект
    }
}); {
    const {
        value,
        steps
    } = adder(5).add(-8).add(11);
    console.log(value);
    const [a, b, c] = steps;
    console.log(a, b, c);
}
const Adder = class {
    constructor(initial = 0) {
        this.steps = [initial];
        this.value = initial;
    }
    add(value) {
        this.steps.push(value);
        this.value += value;
        return this; //возвращает обект
    }
}; {
    const {
        value,
        steps
    } = new Adder(5).add(-8).add(11);
    console.log(value);
    const [a, b, c] = steps;
    console.log(a, b, c);
}

//8
const Point = class {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
};
const serializible = Category => class extends Category {
    toString() {
        return `[${this.x}, ${this.y}]`;
    }
};
const movable = Category => class extends Category {
    move(x, y) {
        this.x += x;
        this.y += y;
    }
}

const PointEx = serializible(movable(Point));
const point1 = new PointEx(10, 20);
point1.move(5, -2);
console.log(point1.toString());
const {
    x,
    y
} = point1;
console.log(x, y);

//9
const Ϫ = (α, β, γ) => (α, β, γ);
const Ꜩ = (α, γ) => Ϫ(α, 10, γ);
console.log(Ꜩ(2, 3));
const змея = '🐍';
console.log(змея);

