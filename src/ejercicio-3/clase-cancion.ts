/**
 * Clase **Cancion** que contiene diferentes atributos que describen la canción:
 * 
 * - Nombre de la canción: *_nombre_cancion*
 * - Duración: *_duracion*
 * - Género: *_genero*
 * - Single: *_single*
 * - Numero de reproducciones: *_numero_reproducciones*
 * 
 * Todos ellos tienen sus respectivos getters y setters.
 */
export class Cancion {
  private _nombre_cancion: string;
  private _duracion: number;
  private _genero: string;
  private _single: boolean;
  private _numero_reproducciones: number;

  /**
   * Constructor de la clase **Cancion**.
   * @param nombre_cancion Nombre de la canción.
   * @param duracion Duración de la canción.
   * @param genero Género de la canción.
   * @param single Opción de si es single o no.
   * @param numero_reproducciones Número de reproducciones de la canción.
   */
  constructor(nombre_cancion: string, duracion: number, genero: string, single: boolean, numero_reproducciones: number) {
    this._nombre_cancion = nombre_cancion;
    this._duracion = duracion;
    this._genero = genero;
    this._single = single;
    this._numero_reproducciones = numero_reproducciones;
  }

  /**
   * Getter del atributo privado **_nombre_cancion**.
   */
  get nombre_cancion() {
    return this._nombre_cancion;
  }

  /**
   * Setter del atributo privado **_nombre_cancion**.
   */
  set nombre_cancion(nombre_cancion) {
    this._nombre_cancion = nombre_cancion; 
  }

  /**
   * Getter del atributo privado **_duracion**.
   */
  get duracion() {
    return this._duracion;
  }

  /**
   * Setter del atributo privado **_duracion**.
   */
  set duracion(duracion) {
    this._duracion = duracion;
  }

  /**
   * Getter del atributo privado **_genero**.
   */
  get genero() {
    return this._genero;
  }

  /**
   * Setter del atributo privado **_genero**.
   */
  set genero(genero) {
    this._genero = genero;
  }

  /**
   * Getter del atributo privado **_single**.
   */
  get single() {
    return this._single;
  }

  /**
   * Setter del atributo privado **_single**.
   */
  set single(single) {
    this._single = single;
  }

  /**
   * Getter del atributo privado **_numero_reproducciones**.
   */
  get numero_reproducciones() {
    return this._numero_reproducciones;
  }

  /**
   * Setter del atributo privado **_numero_reproducciones**.
   */
  set numero_reproducciones(numero_reproducciones) {
    this._numero_reproducciones = numero_reproducciones;
  }
}
  