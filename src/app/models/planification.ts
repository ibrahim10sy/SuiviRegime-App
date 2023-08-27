import { Repas } from "./repas";

export class Planification {
    constructor(
        public id: number,
        public nom: string,
        public description: string,
        public repas: Repas[],
        public jour: string
     ) { }
}
