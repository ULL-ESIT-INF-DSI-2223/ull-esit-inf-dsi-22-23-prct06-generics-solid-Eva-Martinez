import 'mocha';
import { expect } from 'chai';
import { BibliotecaMusical } from '../src/ejercicio-3/clase-bibliotecaMusical';
import { Artista } from '../src/ejercicio-3/clase-artista';
import { Disco } from '../src/ejercicio-3/clase-disco';
import { Single } from '../src/ejercicio-3/clase-single';
import { Cancion } from '../src/ejercicio-3/clase-cancion';
import { Discografia } from '../src/ejercicio-3/clase-discografia';

/**
 * Declaraciones de constantes de las diferentes clases.
 */
const amanecer = new Cancion("Amanecer", 100, "Pop", true, 10000);
const lunaNueva = new Cancion("Luna Nueva", 150, "Clasica", false, 15000);
const moon = new Cancion("Moon", 200, "Rock", false, 20000);
const dawn = new Cancion("Dawn", 250, "Rap", true, 25000);

const disco1 = new Disco("disco1", 2010, [amanecer, lunaNueva]);
const disco2 = new Disco("disco2", 2015, [moon]);
const disco3 = new Disco("disco3", 2020, [dawn]);

const single = new Single("single", 2023, [amanecer, dawn])

const discografia1 = new Discografia<Disco>([disco1, disco2]);
const discografia2 = new Discografia<Disco|Single>([disco3, single]);

const eva = new Artista("Eva", 7000, discografia1);
const adrian = new Artista("Adrian", 10000, discografia2);

const bibliotecaMusical = new BibliotecaMusical([eva, adrian]);

describe('Cancion class tests', () => {
  // Getters
  it('amanecer.nombre_cancion returns "Amanecer"', () => {
    expect(amanecer.nombre_cancion).to.be.eql("Amanecer");
  });

  it('lunaNueva.duracion returns 150', () => {
    expect(lunaNueva.duracion).to.be.eql(150);
  });

  it('moon.genero returns "Rock"', () => {
    expect(moon.genero).to.be.eql("Rock");
  });

  it('dawn.single returns true', () => {
    expect(dawn.single).to.be.eql(true);
  });

  it('lunaNueva.numero_reproducciones returns 15000', () => {
    expect(lunaNueva.numero_reproducciones).to.be.eql(15000);
  });

  // Setters
  it('amanecer.nombre_cancion returns "Cambio Amanecer"', () => {
    amanecer.nombre_cancion = "Cambio Amanecer";
    expect(amanecer.nombre_cancion).to.be.eql("Cambio Amanecer");
  });

  it('lunaNueva.duracion returns 0', () => {
    lunaNueva.duracion = 0;
    expect(lunaNueva.duracion).to.be.eql(0);
  });

  it('moon.genero returns "Ninguno"', () => {
    moon.genero = "Ninguno";
    expect(moon.genero).to.be.eql("Ninguno");
  });

  it('dawn.single returns false', () => {
    dawn.single = false;
    expect(dawn.single).to.be.eql(false);
  });

  it('lunaNueva.numero_reproducciones returns 5000', () => {
    lunaNueva.numero_reproducciones = 5000;
    expect(lunaNueva.numero_reproducciones).to.be.eql(5000);
  });
});

describe('Disco class tests', () => {
  // Getters
  it('disco1.nombre returns "disco1"', () => {
    expect(disco1.nombre).to.be.eql("disco1");
  });

  it('disco2.año_publicacion returns 2015', () => {
    expect(disco2.año_publicacion).to.be.eql(2015);
  });

  it('disco3.canciones returns [dawn]', () => {
    expect(disco3.canciones).to.be.eql([dawn]);
  });

  // Setters
  it('disco1.nombre returns "Sol"', () => {
    disco1.nombre = "Sol";
    expect(disco1.nombre).to.be.eql("Sol");
  });

  it('disco2.año_publicacion returns 2020', () => {
    disco2.año_publicacion = 2020;
    expect(disco2.año_publicacion).to.be.eql(2020);
  });

  it('disco3.canciones returns [dawn, moon]', () => {
    disco3.canciones = [dawn, moon];
    expect(disco3.canciones).to.be.eql([dawn, moon]);
  });
});

describe('Single class tests', () => {
  // Getters
  it('single.nombre returns "single"', () => {
    expect(single.nombre).to.be.eql("single");
  });

  it('single.año_publicacion returns 2023', () => {
    expect(single.año_publicacion).to.be.eql(2023);
  });

  it('single.canciones returns [amanecer, dawn]', () => {
    expect(single.canciones).to.be.eql([amanecer, dawn]);
  });

  // Setters
  it('single.nombre returns "Sol"', () => {
    single.nombre = "single1";
    expect(single.nombre).to.be.eql("single1");
  });

  it('single.año_publicacion returns 2020', () => {
    single.año_publicacion = 2020;
    expect(single.año_publicacion).to.be.eql(2020);
  });

  it('single.canciones returns [dawn]', () => {
    single.canciones = [dawn];
    expect(single.canciones).to.be.eql([dawn]);
  });
});

describe('Artista class tests', () => {
  // Getters
  it('eva.nombre_artista returns "Eva"', () => {
    expect(eva.nombre_artista).to.be.eql("Eva");
  });

  it('adrian.numero_oyentes_mensuales returns 10000', () => {
    expect(adrian.numero_oyentes_mensuales).to.be.eql(10000);
  });

  it('eva.discografia.discoOSingle returns [disco1, disco2]', () => {
    expect(eva.discografia.discoOSingle).to.be.eql([disco1, disco2]);
  });

  // Setters
  it('eva.nombre_artista returns "Ave"', () => {
    eva.nombre_artista = "Ave";
    expect(eva.nombre_artista).to.be.eql("Ave");
  });

  it('adrian.numero_oyentes_mensuales returns 200000', () => {
    adrian.numero_oyentes_mensuales = 200000;
    expect(adrian.numero_oyentes_mensuales).to.be.eql(200000);
  });

  it('eva.discografia.discoOSingle returns []', () => {
    eva.discografia.discoOSingle = [];
    expect(eva.discografia.discoOSingle).to.be.eql([]);
  });
});

describe('BibliotecaMusical class tests', () => {
  // Getters
  it('bibliotecaMusical.artistas returns [eva, adrian]', () => {
    expect(bibliotecaMusical.artistas).to.be.eql([eva, adrian]);
  });

  // Setters
  it('bibliotecaMusical.artistas returns [adrian]', () => {
    bibliotecaMusical.artistas = [adrian];
    expect(bibliotecaMusical.artistas).to.be.eql([adrian]);
  });

  // Métodos
  it('bibliotecaMusical.getNumeroCanciones(disco1) return 2', () => {
    expect(bibliotecaMusical.getNumeroCanciones(disco1)).to.be.eql(2);
  });

  it('bibliotecaMusical.getDuracionDisco(disco2) return 200', () => {
    expect(bibliotecaMusical.getDuracionDisco(disco2)).to.be.eql(200);
  });

  it('bibliotecaMusical.getNumeroReproducciones(disco2) return 20000', () => {
    expect(bibliotecaMusical.getNumeroReproducciones(disco2)).to.be.eql(20000);
  });
});