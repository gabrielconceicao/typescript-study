import { Print } from '../models/print';


export function print(...objects: Print[]){
    objects.forEach(object => object.printLog());
}