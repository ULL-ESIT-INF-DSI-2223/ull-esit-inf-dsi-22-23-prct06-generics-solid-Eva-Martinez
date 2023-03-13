/**
 * Interfaz genérica **Streamable** con los siguientes métodos:
 * @method search Buscar un elemento en concreto.
 * @method addMyList Añadir elemento a mi lista.
 */
export interface Streamable<T> {
  search(): void;
}