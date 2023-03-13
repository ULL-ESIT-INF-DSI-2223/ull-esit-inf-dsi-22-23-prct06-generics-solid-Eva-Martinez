/* eslint-disable no-case-declarations */
/**
 * Imports de las clases **BasicStreamableCollection** y **Documentales**.
 */
import { BasicStreamableCollection } from "./basicstreamablecollection";
import { Documentales } from "./documentales";

/**
 * Clase **DocumentalesCollection** que implementa la clase **BasicStreamableCollection**.
 */
export class DocumentalesCollection extends BasicStreamableCollection<Documentales> {
  private _documentales: Documentales[];

  /**
   * Constructor de la clase **DocumentalesCollection**.
   * @param documentales Conjunto de Documentales.
   */
  constructor(documentales: Documentales[]) {
    super(documentales);
  }

  /**
   * Getter del atributo privado **_documentales**.
   */
  get documentales() {
    console.log(this._documentales)

    return this._documentales;
  }

  /**
   * Setter del atributo privado **_documentales**.
   */
  set documentales(documentales: Documentales[]) {
    this._documentales = documentales;
  }

  /**
   * Método que realiza una búsqueda según especifique el usuario.
   */
  search() {
    const resultados: Documentales[] = [];
    const tipo_busqueda = prompt("¿Por qué criterio desea buscar el documental? Título (T), Año (A) o Género (G): ");
    switch (tipo_busqueda) {
      case "T":
        const titulo = prompt("¿Cuál es el título del documental que desea buscar? ");
        for (let i = 0; i < this.documentales.length; i++) {
          const documental = this.documentales[i];
          if (documental.title === titulo) {
            resultados.push(documental);
          }
        }
        break;
      case "A":
        const año = prompt("¿Cuál es el año de lanzamiento del documental que desea buscar? ");
        for (let i = 0; i < this.documentales.length; i++) {
          const documental = this.documentales[i];
          if (documental.year === Number(año)) {
            resultados.push(documental);
          }
        }
        break;
      case "G":
        const genero = prompt("¿Cuál es el género del documental que desea buscar? ");
        for (let i = 0; i < this.documentales.length; i++) {
          const documental = this.documentales[i];
          if (documental.gender === genero) {
            resultados.push(documental);
          }
        }
        break;
      default:
        console.log(undefined);
        break;
    }
    console.log(resultados);
  }
}