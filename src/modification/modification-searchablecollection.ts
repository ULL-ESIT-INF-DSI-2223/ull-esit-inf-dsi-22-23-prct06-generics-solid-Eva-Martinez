/**
 * Imports de las interfaces genéricas **Collectable** y **Searchable**.
 */
import { Collectable } from "./modification-collectable";
import { Searchable } from "./modification-searchable";

/**
 * Clase abstracta genérica **SearchableCollection** que implementa las interfaces genéricas **Collectable** y **Searchable** con sus respectivos métodos:
 * @private _items -> Array de los elementos genéricos.
 * @method addItem -> Añade un item.
 * @method getItem -> Retorna un item.
 * @method removeItem -> Elimina un item.
 * @method getNumberOfItems -> Retorna el número de items.
 * @method search -> Busca un item.
 */
export abstract class SearchableCollection<T> implements Collectable<T>, Searchable<T> {
  constructor(private _items: T[]) {
  }

  /**
   * Método que añade un item al atributo *_items*.
   * @param item -> Item a añadir.
   */
  addItem(item: T): T[] {
    this._items.push(item);
    return this._items;
  }

  /**
   * Método retorna un item del atributo *_items* según la posición en el mismo *indexOfItem*.
   * @param indexOfItem -> Índice del item en el array.
   * @returns -> Item obtenido según su índice.
   */
  getItem(indexOfItem: number): T | undefined {
    if (indexOfItem >= 0 && indexOfItem < this._items.length) {
      return this._items[indexOfItem];
    } else {
      return undefined;
    }
  }

  /**
   * Método que elimina del atributo *_items* un item según su posición *indexOfItem*.
   * @param indexOfItem -> Índice del item en el array.
   */
  removeItem(indexOfItem: number): T[] {
    return this._items.splice(indexOfItem, 1);
  }

  /**
   * Método que retorna el número de items en el atributo *_items*.
   * @returns -> Número de items en el array.
   */
  getNumberOfItems() {
    return this._items.length;
  }

  // Método de la interfaz genérica Searchable
  abstract search(term: T): T[]
}