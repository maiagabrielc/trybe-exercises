// criamos um array de strings com as unidades de medida
// o tipo inferido pelo TypeScript será "string[]", essa é a sintaxe para tipar um array
const units = ["km", "hm", "dam", "m", "dm", "cm", "mm"];

export function makeError(unity: string) {
  throw new Error(`A unidade ${unity} não é uma unidade válida.`)
}

function convertLength(value: number, forUnity: string, toUnity: string): number {

  if (!units.includes(forUnity)) makeError(forUnity); // se a unidade base não for válida lançamos um erro
  if (!units.includes(toUnity)) makeError(toUnity); // se a unidade para a conversão não for válida lançamos um erro

  const forIndex = units.indexOf(forUnity); // pegamos o index da unidade base no array
  const toIndex = units.indexOf(toUnity); // pegamos o index da unidade para a conversão
  const exponent = (toIndex - forIndex); // calculamos o expoente a partir da diferença dos index

  return value * Math.pow(10, exponent);
}