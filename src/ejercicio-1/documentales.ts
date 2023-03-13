/**
 * Clase **Documentales** que contiene atributos privados que describen un documental.
 */
export class Documentales{
  private _title: string;
  private _year: number;
  private _duration: number;
  private _gender: string;

  /**
   * Constructor de la clase **Documentales**.
   * @param title Título.
   * @param year Año.
   * @param duration Duración.
   * @param gender Género.
   */
  constructor(title: string, year: number, duration: number, gender: string) {
    this._title = title;
    this._year = year;
    this._duration = duration;
    this._gender = gender;
  }

  /**
   * Getter del atributo privado **_title**.
   */
  get title() {
    return this._title;
  }

  /**
   * Setter del atributo privado **_title**.
   */
  set title(title: string) {
    this._title = title;
  }

  /**
   * Getter del atributo privado **_year**.
   */
  get year() {
    return this._year;
  }

  /**
   * Setter del atributo privado **_year**.
   */
  set year(year: number) {
    this._year = year;
  }

  /**
   * Getter del atributo privado **_duration**.
   */
  get duration() {
    return this._duration;
  }

  /**
   * Setter del atributo privado **_duration**.
   */
  set duration(duration: number) {
    this._duration = duration;
  }

  /**
   * Getter del atributo privado **_gender**.
   */
  get gender() {
    return this._gender;
  }

  /**
   * Setter del atributo privado **_gender**.
   */
  set gender(gender: string) {
    this._gender = gender;
  }
}