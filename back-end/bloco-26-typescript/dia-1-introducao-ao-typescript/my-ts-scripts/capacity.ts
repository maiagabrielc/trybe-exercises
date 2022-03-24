import utils from "./utils";

const liquidUnits = ["kl", "hl", "dal", "l", "dl", "cl", "ml"];

function convertLiquid(value: number, forUnity: string, toUnity: string): number {

  return utils.convert(liquidUnits, value, forUnity, toUnity);;

}