/**
 * Import de la clase abstracta genérica **SearchableCollection**.
 */
import { SearchableCollection } from "./modification-searchablecollection";

/**
 * Subclase **NumericSearchableCollection** de la clase **SearchableCollection** que contiene el método *search*.
 * @method search -> Retorna un array con las posiciones en las que se encuentran coincidencias con el número *term* pasado por parámetro en la colección.
 */
export class NumericSearchableCollection extends SearchableCollection<number> {
  constructor(private _numberCollection: number[]) {
    super(_numberCollection);
  }

  /**
   * Método que retorna un array con las posiciones en las que se encuentran coincidencias con el número *term* pasado por parámetro en la colección.
   * @param term -> Número a buscar en la colección.
   * @returns Array con las posiciones de las coincidencias encontradas.
   */
  search(term: number): number[] {
    const numberCoincidences: number[] = [];
    for (let i = 0; i < this._numberCollection.length; i++) {
      if (this._numberCollection[i] === term) {
        numberCoincidences.push(i);
      }
    }
    return numberCoincidences;
  }
}