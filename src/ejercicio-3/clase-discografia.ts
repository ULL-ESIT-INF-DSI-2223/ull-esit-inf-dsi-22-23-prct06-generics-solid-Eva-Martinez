/**
 * Imports de las clases **Disco** y **Single**.
 */
import { Disco } from "./clase-disco";
import { Single } from "./clase-single";

/**
 * Clase genérica **Discografia** que contiene el conjunto de discos, singles o discos y singles.
 */
export class Discografia<T extends Disco | Single> {
  private _discoOSingle: T[];

  /**
   * Constructor de la clase **discografia**.
   * @param discoOSingle Discos  Singles a igualar.
   */
  constructor(discoOSingle: T[]) {
    this._discoOSingle = discoOSingle;
  }
  /**
   * Getter del atributo privado *_discografia*.
   */
  get discoOSingle() {
    return this._discoOSingle;
  }
  /**
   * Setter del atributo privado *_discografia*.
   */
  set discoOSingle(discoOSingle: T[]) {
    this._discoOSingle = discoOSingle;
  }
}