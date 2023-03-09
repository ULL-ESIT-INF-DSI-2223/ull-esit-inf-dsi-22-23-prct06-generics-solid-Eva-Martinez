/**
 * Import de la clase abstracta genérica **SearchableCollection**.
 */
import { SearchableCollection } from "./modification-searchablecollection";

/**
 * Subclase **StringSearchableCollection** de la clase **SearchableCollection** que contiene el método *search*.
 * @method search -> Retorna un array con las cadenas en las que se encuentran coincidencias con la cadena *term* pasada por parámetro en la colección.
 */
export class StringSearchableCollection extends SearchableCollection<string> {
  constructor(private _stringCollection: string[]) {
    super(_stringCollection);
  }

  /**
   * Método que retorna un array con las cadenas en las que se encuentran coincidencias con la cadena *term* pasada por parámetro en la colección.
   * @param term -> Cadena a buscar en la colección.
   * @returns Array con las coincidencias encontradas.
   */
  search(term: string): string[] {
    const stringCoincidences: string[] = [];
    for (let i = 0; i < this._stringCollection.length; i++) {
      if (this._stringCollection[i] === term) {
        stringCoincidences.push(term)
      }
    }
    return stringCoincidences;
  }
}