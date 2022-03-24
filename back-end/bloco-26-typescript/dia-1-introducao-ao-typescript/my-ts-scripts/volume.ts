import utils from "./utils";

const volumeUnits = ["km³", "hm³", "dam³", "m³", "dm³", "cm³", "mm³"];

function convertVolume(value: number, forUnity: string, toUnity: string): number {

  return utils.convert(volumeUnits, value, forUnity, toUnity);;

}