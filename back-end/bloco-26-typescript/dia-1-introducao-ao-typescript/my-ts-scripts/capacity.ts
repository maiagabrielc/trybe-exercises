import { makeError } from './length'

const liquidUnits = ["kl", "hl", "dal", "l", "dl", "cl", "ml"];

function convertLiquid(value: number, forUnity: string, toUnity: string): number {

  if (!liquidUnits.includes(forUnity)) makeError(forUnity);
  if (!liquidUnits.includes(toUnity)) makeError(toUnity);

  const forIndex = liquidUnits.indexOf(forUnity);
  const toIndex = liquidUnits.indexOf(toUnity);
  const exponent = (toIndex - forIndex);

  return value * Math.pow(10, exponent);
}