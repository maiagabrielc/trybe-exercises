import utils from "./utils";
const massUnits = ["kg", "hg", "dag", "g", "dg", "cg", "mg"];

function convertMass(value: number, forUnity: string, toUnity: string): number {

  return utils.convert(massUnits, value, forUnity, toUnity);;

}