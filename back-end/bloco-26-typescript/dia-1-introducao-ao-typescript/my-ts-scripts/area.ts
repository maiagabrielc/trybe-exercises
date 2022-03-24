import { makeError } from './length'

const areaUnits = ["km²", "hm²", "dam²", "m²", "dm²", "cm²", "mm²"];

function convertArea(value: number, forUnity: string, toUnity: string): number {

  if (!areaUnits.includes(forUnity)) makeError(forUnity);
  if (!areaUnits.includes(toUnity)) makeError(toUnity);

  const forIndex = areaUnits.indexOf(forUnity);
  const toIndex = areaUnits.indexOf(toUnity);
  const exponent = (toIndex - forIndex);

  return value * Math.pow(10, exponent);
}