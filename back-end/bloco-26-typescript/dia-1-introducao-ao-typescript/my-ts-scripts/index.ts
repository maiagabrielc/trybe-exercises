import { convertArea } from './area';
import { convertLiquid } from './capacity';
import { convertLength } from './length'
import { convertMass } from './mass';
import { convertVolume } from './volume';

console.log(`Convertendo 1 km para cm: ${convertLength(1, 'km', 'cm')}`);

console.log(`Convertendo 25 hm² para m²: ${convertArea(25, 'hm²', 'm²')}`);

console.log(`Convertendo 30 dm³ para m³: ${convertVolume(30, 'dm³', 'm³')}`);

console.log(`Convertendo 100 l para cm: ${convertLiquid(100, 'l', 'kl')}`);

console.log(`Convertendo 13 mg para dag: ${convertMass(13, 'mg', 'dag')}`);
