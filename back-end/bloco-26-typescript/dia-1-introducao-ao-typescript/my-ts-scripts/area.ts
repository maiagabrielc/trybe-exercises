import utils from "./utils";

const areaUnits = ["km²", "hm²", "dam²", "m²", "dm²", "cm²", "mm²"];

export function convertArea(value: number, forUnity: string, toUnity: string): number {

  return utils.convert(areaUnits, value, forUnity, toUnity);;

}