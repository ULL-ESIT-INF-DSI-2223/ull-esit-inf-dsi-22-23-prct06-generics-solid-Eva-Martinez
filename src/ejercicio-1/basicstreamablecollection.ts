/**
 * Import de la clase genérica **Streamable**.
 */
import { Streamable } from "./streamable";

/**
 * Clase genérica **BasicStreamableCollection** que implementa la interfaz genérica **Streamable** con sus métodos abstractos.
 */
export abstract class BasicStreamableCollection<T> implements Streamable<T> {
  private _collection: T[];

  /**
   * Constructor de la clase abstracta genérica **BasicStreamableCollection**.
   * @param collection Lista de tipo T.
   */
  constructor(collection: T[]) {
    this._collection = collection;
  }

  /**
   * Getter del atributo privado **_collection**.
   */
  get collection() {
    return this._collection;
  }

  /**
   * Setter del atributo privado **_collection**
   */
  set collection(collection: T[]) {
    this._collection = collection;
  }

  /**
   * Método abstracto *search*.
   */
  abstract search(): void;
}