/**
 * Interfaz genérica **Searchable** que contiene el método *search*.
 * @method search -> Busca un item.
 */
export interface Searchable<T> {
  search(term: T): T[];
}