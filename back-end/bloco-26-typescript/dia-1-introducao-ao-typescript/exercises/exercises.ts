export function greeter(name: string) {
  return `Olá ${name}!`;
}

export function personAge(name: string, age: number) {
  return `${name} tem ${age} anos!`;
}

export function add(x: number, y: number): number {
  return x + y;
}

export function sumArray(numbers: number[]): number {
  return numbers.reduce(add, 0);
}

export function triangle(base: number, height: number): number {
  return (base * height) / 2;
}

export function square(side: number): number {
  return side ** 2;
}

export function rectangle(base: number, height: number): number {
  return base * height;
}

export function diamond(sideA: number, sideB: number) {
  return (sideA * sideB) / 2;
}

export function trapezio(basemaior: number, baseMenor: number, altura: number) {
  return ((basemaior + baseMenor) * altura) / 2;
}

export function areaCirculo(raio: number) {
  const PI = 3.14;
  return PI * (raio ** 2);
}