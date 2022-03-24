import { makeError } from './length'

const volumeUnits = ["km³", "hm³", "dam³", "m³", "dm³", "cm³", "mm³"];

function convertVolume(value: number, forUnity: string, toUnity: string): number {

  if (!volumeUnits.includes(forUnity)) makeError(forUnity);
  if (!volumeUnits.includes(toUnity)) makeError(toUnity);

  const forIndex = volumeUnits.indexOf(forUnity);
  const toIndex = volumeUnits.indexOf(toUnity);
  const exponent = (toIndex - forIndex);

  return value * Math.pow(10, exponent);
}