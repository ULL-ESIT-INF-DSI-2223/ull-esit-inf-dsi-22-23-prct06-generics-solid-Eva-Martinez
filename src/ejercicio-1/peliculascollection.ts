/* eslint-disable no-case-declarations */
/**
 * Imports de las clases **BasicStreamableCollection** y **Peliculas**.
 */
import { BasicStreamableCollection } from "./basicstreamablecollection";
import { Peliculas } from "./peliculas";

/**
 * Clase **PeliculasCollection** que implementa la clase **BasicStreamableCollection**.
 */
export class PeliculasCollection extends BasicStreamableCollection<Peliculas> {
  private _peliculas: Peliculas[];

  /**
   * Constructor de la clase **PeliculasCollection**.
   * @param peliculas Conjunto de Peliculas.
   */
  constructor(peliculas: Peliculas[]) {
    super(peliculas);
  }

  /**
   * Getter del atributo privado **_peliculas**.
   */
  get peliculas() {
    console.log(this._peliculas)
    return this._peliculas;
  }

  /**
   * Setter del atributo privado **_peliculas**.
   */
  set peliculas(peliculas: Peliculas[]) {
    this._peliculas = peliculas;
  }

  /**
   * Método que realiza una búsqueda según especifique el usuario.
   */
  search() {
    const resultados: Peliculas[] = [];
    const tipo_busqueda = prompt("¿Por qué criterio desea buscar la película? Título (T), Año (A) o Género (G): ");
    switch (tipo_busqueda) {
      case "T":
        const titulo = prompt("¿Cuál es el título de la película que desea buscar? ");
        for (let i = 0; i < this.peliculas.length; i++) {
          const pelicula = this.peliculas[i];
          if (pelicula.title === titulo) {
            resultados.push(pelicula);
          }
        }
        break;
      case "A":
        const año = prompt("¿Cuál es el año de lanzamiento de la película que desea buscar? ");
        for (let i = 0; i < this.peliculas.length; i++) {
          const pelicula = this.peliculas[i];
          if (pelicula.year === Number(año)) {
            resultados.push(pelicula);
          }
        }
        break;
      case "G":
        const genero = prompt("¿Cuál es el género de la película que desea buscar? ");
        for (let i = 0; i < this.peliculas.length; i++) {
          const pelicula = this.peliculas[i];
          if (pelicula.gender === genero) {
            resultados.push(pelicula);
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