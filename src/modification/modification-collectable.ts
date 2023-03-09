/**
 * Interfaz genérica **Collectable** que contiene los siguientes métodos:
 * @method addItem -> Añade un item.
 * @method getItem -> Retorna un item.
 * @method removeItem -> Elimina un item.
 * @method getNumberOfItems -> Retorna el número de items.
 */
export interface Collectable<T> {
  addItem(item: T): T[];
  getItem(indexOfItem: number): T | undefined;
  removeItem(indexOfItem: number): T[];
  getNumberOfItems(): number;
}