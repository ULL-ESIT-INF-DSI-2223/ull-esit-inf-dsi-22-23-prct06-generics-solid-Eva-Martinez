/**
 * Clase ElementList que implementa métodos similares a **Array.prototype**.
 */
export class ElementList<T> {
  private _list: T[];

  /**
   * Constructor de la clase **ElementList<T>**.
   * @param list Lista a declarar.
   */
  constructor (list: T[]) {
    this._list = list;
  }

  /**
   * Getter del atributo privado *_list*.
   */
  get list() {
    return this._list;
  }

  /**
   * Setter del atributo privado *_list*.
   */
  set list(list: T[]) {
    this._list = list;
  }

  /**
   * Método que retorna un elemento de la lista según *index*.
   * @param index Índice en la lista del elemento a retornar.
   * @returns Elemento de la lista en el índice *index*.
   */
  getElement(index: number) {
    return this._list[index];
  }

  /**
   * Método que retorna la longitud de la lista.
   * @returns Longitud de la lista.
   */
  length() {
    let counter = 0;
    let condition = true;
    while (condition) {
      if (this._list[counter] != undefined) {
        counter += 1;
      } else {
        condition = false;
      }
    }
    return counter;
  }

  /**
   * Método que retorna la lista resultante de la unión de dos listas.
   * @param firstList Primera lista a unir.
   * @param secondList Segunda lista a unir.
   * @returns Lista resultante de la unión de *firstList* y *secondList*
   */
  append(firstList: T[], secondList: T[]) {
    let lastElement = 0;
    const newList: T[] = [];
    const firstListElement = new ElementList(firstList);
    const secondListElement = new ElementList(secondList);
    for (let i = 0; i < firstListElement.length(); i++) {
      newList[lastElement] = firstListElement.getElement(i);
      lastElement += 1;
    }
    for (let i = 0; i < secondListElement.length(); i++) {
      newList[lastElement] = secondListElement.getElement(i);
      lastElement += 1;
    }
    this._list = newList;
    return this._list;
  }

  /**
   * Método que concatena un número de listas variable.
   * @param args Listas a concatenar.
   * @returns Lista resultante de la concatenación de las listas *args*.
   */
  concatenate(...args: T[][]) {
    const numberArguments = args.length;
    // eslint-disable-next-line prefer-rest-params
    const newList = new ElementList(args[0]);
    for (let i = 1; i < numberArguments; i++) {
      const argument = args[i];
      newList.append(newList._list, argument);
    }
    this._list = newList._list;
    return this._list;
  }

  /**
   * Método que retorna la lista invocante invertida.
   * @returns Lista invocante invertida.
   */
  reverse() {
    const newList: T[] = [];
    let counter = 0;
    for (let i = this.length() - 1; i >= 0; i--) {
      newList[counter] = this.getElement(i);
      counter += 1;
    }
    this._list = newList;
    return this._list;
  }
 
  /**
   * Método que filtra una lista según el predicado lógico insertado. 
   * @param list Lista a analizar.
   * @param callback Perdicado lógico a utilizar.
   * @returns Lista con los elementos aceptados por el predicado lógico *callback* de la lista *list*.
   */
  filter(list: T[], callback: (logicalPredicate: T) => boolean) {
    const newList: T[] = [];
    const listElement = new ElementList(list);
    let position = 0;
    for (let i = 0; i < listElement.length(); i++) {
      if (callback(listElement.getElement(i))) {
        newList[position] = listElement.getElement(i);
        position += 1;
      }
    }
    this._list = newList;
    return this._list;
  }

  /**
   * Método que opera sobre todos los elementos de la lista según la función instanciada.
   * @param list Lista a operar.
   * @param callback Función a utilizar.
   * @returns Lista con los elementos de *list* operados por la función *callback*.
   */
  map(list: T[], callback: (functionInserted: T) => T) {
    const newList: T[] = [];
    const listElement = new ElementList(list);
    let position = 0;
    for (let i = 0; i < listElement.length(); i++) {
      const resultOfFunction = callback(listElement.getElement(i));
      newList[position] = resultOfFunction;
      position += 1;
    }
    this._list = newList;
    return this._list;
  }

  /**
   * Método que opera desde una posición específica de una lista en adelante según una función.
   * @param list Lista a operar.
   * @param callback Función a utilizar.
   * @param initialAcumulator Posición inicial sobre la que operar.
   * @returns Lista *list* operada por la función *callback* desde una posición específica *initialAcumulator* en adelante.
   */
  reduce(list: T[], callback: (functionInserted: T) => T, initialAcumulator: number) {
    const newList: T[] = [];
    const listElement = new ElementList(list);
    let position = 0;
    for (let i = 0; i < initialAcumulator; i++) {
      newList[position] = listElement.getElement(i);
      position += 1;
    }
    for (let i = initialAcumulator; i < listElement.length(); i++) {
      const resultOfFunction = callback(listElement.getElement(i));
      newList[position] = resultOfFunction;
      position += 1;
    }
    this._list = newList;
    return this._list;
  }

  /**
   * Método que llama una función sobre cada uno de los elementos de una lista.
   * @param list Lista a operar.
   * @param callback Función a utilizar.
   * @returns Lista *list* operada según la función *callback*.
   */
  forEach(list: T[], callback: (functionInserted: T) => T) {
    const newList: T[] = [];
    const listElement = new ElementList(list);
    let position = 0;
    for (let i = 0; i < listElement.length(); i++) {
      const resultOfFunction = callback(listElement.getElement(i));
      newList[position] = resultOfFunction;
      position += 1;
    }
    this._list = newList;
    return this._list;
  }
}