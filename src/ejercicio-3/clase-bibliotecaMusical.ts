/**
 * Imports de **Prompt** y de las clases **Disco** y **Artista**.
 */
import * as Prompt from 'prompt-sync';
import { Artista } from "./clase-artista";
import { Disco } from "./clase-disco";

/**
 * Clase **BibliotecaMusical** que contiene diferentes atributos que describen un serie de artistas:
 * 
 * - Artistas: *_artistas*
 * 
 * Todos ellos tienen sus respectivos getters y setters.
 * 
 * Y a su vez contiene los métodos:
 * 
 * - *getNumeroCanciones*
 * - *getDuracionDisco*
 * - *getNumeroReproducciones*
 * - *buscar*
 * - *print*
 */
export class BibliotecaMusical {
  private _artistas: Artista[];

  /**
   * Constructor de la clase **BibliotecaMusical**.
   * @param artistas Lista de artistas.
   */
  constructor(artistas: Artista[]) {
    this._artistas = artistas;
  }

  /**
   * Getter del atributo privado **_artistas**.
   */
  get artistas() {
    return this._artistas;
  }

  /**
   * Setter del atributo privado **_artistas**.
   */  
  set artistas(artistas) {
    this._artistas = artistas;
  }

  /**
   * Método que extrae el número de canciones de un disco insertado.
   * @param disco Disco del que analizar el número de canciones.
   * @returns Número de canciones de **disco**.
   */
  getNumeroCanciones(disco: Disco) {
    let numero_canciones = 0;
    for (let i = 0; i < disco.canciones.length; i++) {
      numero_canciones += 1;
    }
    return numero_canciones;
  }

  /**
   * Método que extrae la duración de un disco insertado.
   * @param disco Disco del que extraer la duración.
   * @returns Duración de **disco**.
   */
  getDuracionDisco(disco: Disco) {
    let duracion_disco = 0;
    for (let i = 0; i < disco.canciones.length; i++) {
      const cancion_a_analizar = disco.canciones[i];
      duracion_disco += cancion_a_analizar.duracion;
    }
    return duracion_disco;
  }

  /**
   * Método que obtiene el número de reproducciones de un disco insertado.
   * @param disco Disco del que extraer el número de reproducciones.
   * @returns Número de reproducciones de **disco**.
   */
  getNumeroReproducciones(disco: Disco) {
    let numero_reproducciones = 0;
    for (let i = 0; i < disco.canciones.length; i++) {
      const cancion_a_analizar = disco.canciones[i];
      numero_reproducciones += cancion_a_analizar.numero_reproducciones;
    }
    return numero_reproducciones;
  }

  /**
   * Método que realiza una búsqueda según desee el usuario.
   */
  buscar() {
    console.log("¿Que desea buscar? -> Artista (A), Disco (D), Single (S), Cancion (C)");
    const impresion = [];
    const prompt = Prompt();
    const opcion = prompt("Inserte su opción de búsqueda: ");
    if (opcion == "A") {
      const artista = prompt("Inserte el nombre del artista que desee buscar: ");
      for (let i = 0; i < this.artistas.length; i++) {
        const artista_a_comparar = this.artistas[i].nombre_artista;
        if (artista == artista_a_comparar) {
          const discografias_a_imprimir = [];
          for (let disco_single_iterador = 0; disco_single_iterador < this.artistas[i].discografia.discoOSingle.length; disco_single_iterador++) {
            discografias_a_imprimir.push(this.artistas[i].discografia.discoOSingle[disco_single_iterador].nombre);
          }
          impresion.push([artista_a_comparar, this.artistas[i].numero_oyentes_mensuales, discografias_a_imprimir]);
        }
      }
    } else if (opcion == "D") {
      const disco = prompt("Inserte el nombre del disco que desee buscar: ");
      for (let i = 0; i < this.artistas.length; i++) {
        const discografia_a_comparar = this.artistas[i].discografia;
        for (let j = 0; j < discografia_a_comparar.discoOSingle.length; j++) {
          const nombre_disco_a_comparar = discografia_a_comparar.discoOSingle[j].nombre;
          if (disco == nombre_disco_a_comparar) {
            const canciones_a_imprimir = [];
            for (let canciones_iterador = 0; canciones_iterador < discografia_a_comparar.discoOSingle[j].canciones.length; canciones_iterador++) {
              canciones_a_imprimir.push(this.artistas[i].discografia.discoOSingle[j].canciones[canciones_iterador].nombre_cancion);
            }
            impresion.push([nombre_disco_a_comparar, discografia_a_comparar.discoOSingle[j].año_publicacion, canciones_a_imprimir]);
          }
        }
      }
    } else if (opcion == "S") {
      const single = prompt("Inserte el nombre del single que desee buscar: ");
      for (let i = 0; i < this.artistas.length; i++) {
        const discografia_a_comparar = this.artistas[i].discografia;
        for (let j = 0; j < discografia_a_comparar.discoOSingle.length; j++) {
          const nombre_disco_a_comparar = discografia_a_comparar.discoOSingle[j].nombre;
          if (single == nombre_disco_a_comparar) {
            const canciones_a_imprimir = [];
            for (let canciones_iterador = 0; canciones_iterador < discografia_a_comparar.discoOSingle[j].canciones.length; canciones_iterador++) {
              canciones_a_imprimir.push(this.artistas[i].discografia.discoOSingle[j].canciones[canciones_iterador].nombre_cancion);
            }
            impresion.push([nombre_disco_a_comparar, discografia_a_comparar.discoOSingle[j].año_publicacion, canciones_a_imprimir]);
          }
        }
      }
    } else if (opcion == "C") {
      const cancion = prompt("Inserte el nombre del cancion que desee buscar: ");
      for (let i = 0; i < this.artistas.length; i++) {
        const discografia_a_comparar = this.artistas[i].discografia;
        for (let j = 0; j < discografia_a_comparar.discoOSingle.length; j++) {
          const canciones_a_comparar = discografia_a_comparar.discoOSingle[j].canciones;
          for (let k = 0; k < canciones_a_comparar.length; k++) {
            const nombre_cancion_a_comparar = canciones_a_comparar[k].nombre_cancion;
            if (cancion == nombre_cancion_a_comparar) {
              impresion.push([nombre_cancion_a_comparar, canciones_a_comparar[k].duracion, canciones_a_comparar[k].genero, canciones_a_comparar[k].single, canciones_a_comparar[k].numero_reproducciones]);
            }
          }
        }
      }
    } else {
      const error_msg = "Error! Opción incorrecta";
      console.log(error_msg);
    }
    console.table(impresion);
  }

  /**
   * Método que imprime el objeto **bibliotecaMusical**.
   */
  print() {
    const cadenas_imprimir_artista = [];
    const cadenas_imprimir_discografia = [];
    const cadenas_imprimir_cancion = [];
    console.log(1);
    for (let i = 0; i < this.artistas.length; i++) {
      const artista_imprimir = this.artistas[i];
      const discografias_a_imprimir = [];
      for (let disco_single_iterador = 0; disco_single_iterador < artista_imprimir.discografia.discoOSingle.length; disco_single_iterador++) {
        discografias_a_imprimir.push(artista_imprimir.discografia.discoOSingle[disco_single_iterador].nombre);
      }
      cadenas_imprimir_artista.push([artista_imprimir.nombre_artista, artista_imprimir.numero_oyentes_mensuales, discografias_a_imprimir])
      for (let j = 0; j < artista_imprimir.discografia.discoOSingle.length; j++) {
        const discografia_imprimir = artista_imprimir.discografia.discoOSingle[j];
        const canciones_a_imprimir = [];
        for (let cancion_iterador = 0; cancion_iterador < discografia_imprimir.canciones.length; cancion_iterador++) {
          canciones_a_imprimir.push(discografia_imprimir.canciones[cancion_iterador].nombre_cancion);
        }
        cadenas_imprimir_discografia.push([discografia_imprimir.nombre, discografia_imprimir.año_publicacion, canciones_a_imprimir]);
        for (let k = 0; k < discografia_imprimir.canciones.length; k++) {
          const cancion_imprimir = discografia_imprimir.canciones[k];
          cadenas_imprimir_cancion.push([cancion_imprimir.nombre_cancion, cancion_imprimir.duracion, cancion_imprimir.genero, cancion_imprimir.single, cancion_imprimir.numero_reproducciones])
        }
      }
    }
    console.log("Artistas: ");
    console.table(cadenas_imprimir_artista);
    console.log("Discografias: ");
    console.table(cadenas_imprimir_discografia);
    console.log("Canciones: ");
    console.table(cadenas_imprimir_cancion);
  }
}
