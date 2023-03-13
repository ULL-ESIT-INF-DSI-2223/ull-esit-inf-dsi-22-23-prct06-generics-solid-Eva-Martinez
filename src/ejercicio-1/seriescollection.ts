/* eslint-disable no-case-declarations */
/**
 * Imports de las clases **BasicStreamableCollection** y **Series**.
 */
import { BasicStreamableCollection } from "./basicstreamablecollection";
import { Series } from "./series";

/**
 * Clase **SeriesCollection** que implementa la clase **BasicStreamableCollection**.
 */
export class SeriesCollection extends BasicStreamableCollection<Series> {
  private _series: Series[];

  /**
   * Constructor de la clase **SeriesCollection**.
   * @param series Conjunto de Series.
   */
  constructor(series: Series[]) {
    super(series);
  }

  /**
   * Getter del atributo privado **_series**.
   */
  get series() {
    console.log(this._series)
    return this._series;
  }

  /**
   * Setter del atributo privado **_series**.
   */
  set series(series: Series[]) {
    this._series = series;
  }

  /**
   * Método que realiza una búsqueda según especifique el usuario.
   */
  search() {
    const resultados: Series[] = [];
    const tipo_busqueda = prompt("¿Por qué criterio desea buscar la serie? Título (T), Año (A) o Género (G): ");
    switch (tipo_busqueda) {
      case "T":
        const titulo = prompt("¿Cuál es el título de la serie que desea buscar? ");
        for (let i = 0; i < this.series.length; i++) {
          const serie = this.series[i];
          if (serie.title === titulo) {
            resultados.push(serie);
          }
        }
        break;
      case "A":
        const año = prompt("¿Cuál es el año de lanzamiento de la serie que desea buscar? ");
        for (let i = 0; i < this.series.length; i++) {
          const serie = this.series[i];
          if (serie.year === Number(año)) {
            resultados.push(serie);
          }
        }
        break;
      case "G":
        const genero = prompt("¿Cuál es el género de la serie que desea buscar? ");
        for (let i = 0; i < this.series.length; i++) {
          const serie = this.series[i];
          if (serie.gender === genero) {
            resultados.push(serie);
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