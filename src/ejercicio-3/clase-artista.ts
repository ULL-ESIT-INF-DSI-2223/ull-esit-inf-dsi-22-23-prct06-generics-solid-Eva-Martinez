/**
 * Import de las clases **Disco**, **Single** y **Discografia**.
 */
import { Disco } from "./clase-disco";
import { Single } from "./clase-single";
import { Discografia } from "./clase-discografia";

/**
 * Clase **Artista** que contiene diferentes atributos que describen un artista:
 * 
 * - Nombre del artista: *_nombre_artista*
 * - Número de oyentes mensuales: *_numero_oyentes_mensuales*
 * - Discografía: *_discografia*
 * 
 * Todos ellos tienen sus respectivos getters y setters.
 */
export class Artista {
  private _nombre_artista: string;
  private _numero_oyentes_mensuales: number;
  public _discografia: Discografia<Disco|Single>;
  
  /**
   * Constructor de la clase **Artista**.
   * @param nombre_artista Nombre del artista.
   * @param numero_oyentes_mensuales Número de oyentes mensuales del artista.
   * @param discografia Discografía del artista.
   */
  constructor(nombre_artista: string, numero_oyentes_mensuales: number, discografia: Discografia<Disco|Single>) {
    this._nombre_artista = nombre_artista;
    this._numero_oyentes_mensuales = numero_oyentes_mensuales;
    this._discografia = discografia;
  }

  /**
   * Getter del atributo privado **_nombre_artista**.
   */
  get nombre_artista() {
    return this._nombre_artista;
  }

  /**
   * Setter del atributo privado **_nombre_artista**.
   */
  set nombre_artista(nombre_artista) {
    this._nombre_artista = nombre_artista;
  }

  /**
   * Getter del atributo privado **_numero_oyentes_mensuales**.
   */
  get numero_oyentes_mensuales() {
    return this._numero_oyentes_mensuales;
  }

  /**
   * Setter del atributo privado **_numero_oyentes_mensuales**.
   */
  set numero_oyentes_mensuales(numero_oyentes_mensuales) {
    this._numero_oyentes_mensuales = numero_oyentes_mensuales;
  }

  /**
   * Getter del atributo privado **_discografia**.
   */
  get discografia() {
    return this._discografia;
  }

  /**
   * Setter del atributo privado **_discografia**.
   */
  set discografia(discografia) {
    this._discografia = discografia;
  }
}
  