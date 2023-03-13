/**
 * Import de la clase **Cancion**.
 */
import { Cancion } from "./clase-cancion";

/**
 * Clase **Single** que contiene diferentes atributos que describen un single:
 * 
 * - Nombre: *_nombre*
 * - Año de publicación: *_año_publicacion*
 * - Canciones: *_canciones*
 * 
 * Todos ellos tienen sus respectivos getters y setters.
 */
export class Single {
  private _nombre: string;
  private _año_publicacion: number;
  private _canciones: Cancion[];

  /**
   * Constructor de la clase **Single**.
   * @param nombre Nombre del single.
   * @param año_publicacion Año de publicación.
   * @param canciones Versiones del single.
   */
  constructor(nombre: string, año_publicacion: number, canciones: Cancion[]) {
    this._nombre = nombre;
    this._año_publicacion = año_publicacion;
    this._canciones = canciones;
  }

  /**
   * Getter del atributo privado **_nombre**.
   */
  get nombre() {
    return this._nombre;
  }

  /**
   * Setter del atributo privado **_nombre**.
   */
  set nombre(nombre) {
    this._nombre = nombre;
  }
  
  /**
   * Getter del atributo privado **_año_publicacion**.
   */  
  get año_publicacion() {
    return this._año_publicacion;
  }

  /**
   * Setter del atributo privado **_año_publicacion**.
   */
  set año_publicacion(año_publicacion) {
    this._año_publicacion = año_publicacion;
  }

  /**
   * Getter del atributo privado **_canciones**.
   */
  get canciones() {
    return this._canciones;
  }

  /**
   * Setter del atributo privado **_canciones**.
   */
  set canciones(canciones) {
    this._canciones = canciones;
  }
}