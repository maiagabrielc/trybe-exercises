import utils from "./utils";

const lengthUnits = ["km", "hm", "dam", "m", "dm", "cm", "mm"];

export function convertLength(value: number, forUnity: string, toUnity: string): number {

  return utils.convert(lengthUnits, value, forUnity, toUnity);;
}