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
