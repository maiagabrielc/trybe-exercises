import { makeError } from './length'
const massUnits = ["kg", "hg", "dag", "g", "dg", "cg", "mg"];

function convertMass(value: number, forUnity: string, toUnity: string): number {

  if (!massUnits.includes(forUnity)) makeError(forUnity);
  if (!massUnits.includes(toUnity)) makeError(toUnity);

  const forIndex = massUnits.indexOf(forUnity);
  const toIndex = massUnits.indexOf(toUnity);
  const exponent = (toIndex - forIndex);

  return value * Math.pow(10, exponent);
}