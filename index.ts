// Variables
const nombre: string = 'Alberto';
let hp: string | number = 77;
hp = 'Hello';
// console.log(hp);

interface Personaje {
  nombre: String;
  hp: Number;
  habilidades: String[];
  puebloNatal?: String;
}

const personaje: Personaje = {
  nombre: 'Alberto',
  hp: 100,
  habilidades: ['bash', 'counter', 'healing'],
};

personaje.puebloNatal = 'Los Pijiguaos';

// console.table(personaje);

// Funciones en TypeScript
function sumar(a: number, b: number): number {
  return a + b;
}

const resultado = sumar(5, 10);
console.log(resultado);

const sumarFlecha = (a: number, b: number): number => {
  return a + b;
};

const result = sumarFlecha(20, 20);
console.log(result);

function multiplicar(numero: number, otroNumero?, base: number = 2) {
  return numero * base;
}

const res = multiplicar(5, 10);
console.log(res);

// Funciones con objetos como argumentos
interface PersonajeFFVII {
  nombre: string;
  HP: number;
  ShowHP: () => void;
}

function cure(personaje: PersonajeFFVII, cureHP: number) {
  personaje.HP += cureHP;
}

const nuevoPersonaje: PersonajeFFVII = {
  nombre: 'Cloud',
  HP: 1500,
  ShowHP() {
    console.log(`${this.nombre} tiene ${this.HP} de vida`);
  },
};

cure(nuevoPersonaje, 50);
nuevoPersonaje.ShowHP();

// Tarea objetos e interfaces
interface FinalFantasyCharacter {
  name: string;
  age: number;
  direction: Direction;
  showDirection: () => string;
}

interface Direction {
  city: string;
  planet: string;
}

const finalFantasyCharacter: FinalFantasyCharacter = {
  name: 'Cloud Strife',
  age: 21,
  direction: {
    city: 'Midgar',
    planet: 'Gaia',
  },
  showDirection() {
    return (
      this.name + ', ' + this.direction.city + ', ' + this.direction.planet
    );
  },
};

console.log(finalFantasyCharacter.showDirection());

// Desestructuracion
interface Player {
  volume: number;
  second: number;
  song: string;
  details: Details;
}

interface Details {
  author: string;
  year: number;
}

const player: Player = {
  volume: 90,
  second: 35,
  song: 'Mess',
  details: {
    author: 'Alberto',
    year: 1996,
  },
};

const { volume, second, song, details } = player;

console.log('El volumen actual es: ', volume);
console.log('El segundo actual es: ', second);
console.log('La cancion es: ', song);
console.log('El autor es: ', details.author);
console.log('Es del año: ', details.year);

// Desestructuracion de Arreglos
const finalFantasy: string[] = [
  'Cloud Strife',
  'Barrett Wallace',
  'Tifa Lockhart',
];

const [p1, p2, p3] = finalFantasy;
console.log('Personaje 1: ', p1);
console.log('Personaje 2: ', p2);
console.log('Personaje 3: ', p3);

// Desestructuracion de argumentos
interface Product {
  desc: string;
  price: number;
}

const cellphone: Product = {
  desc: 'Samsung S10',
  price: 400,
};

const tablet: Product = {
  desc: 'iPad Air',
  price: 900,
};

const calculateTaxes = (products: Product[]) => {
  let total = 0;
  products.forEach(({ price }) => {
    total += price;
  });
  return [total, total * 0.15];
};

const activities = [cellphone, tablet];

const [total, taxes] = calculateTaxes(activities);
console.log('Total: ', total);
console.log('Impuestos: ', taxes);

// Import and Export on TypeScript
// It's the same as into JavaScript

// Clases TypeScript
class NormalPerson {
  constructor(public name: string, public direction: string) {}
}

class Heroe extends NormalPerson {
  constructor(
    public power: string,
    public age: number,
    public superHeroName: string
  ) {
    super('Tony Stark', 'New York');
  }
}

const ironMan = new Heroe('Intelligence', 44, 'Iron Man');
console.log(ironMan);

// Genéricos TypeScript
