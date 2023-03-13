import 'mocha';
import { expect } from 'chai';
import { Documentales } from "../src/ejercicio-1/documentales";
import { DocumentalesCollection } from '../src/ejercicio-1/documentalescollection';
import { Peliculas } from "../src/ejercicio-1/peliculas";
import { PeliculasCollection } from '../src/ejercicio-1/peliculascollection';
import { Series } from "../src/ejercicio-1/series";
import { SeriesCollection } from '../src/ejercicio-1/seriescollection';

/**
 * Declaraciones de constantes de las diferentes clases.
 */
const leones = new Documentales("Leones", 2018, 180, "Savanah");
const tigres = new Documentales("Tigres", 2016, 240, "Jungla");

const barco = new Series("El Barco", 2013, 3870, "Emocionante");
const calamar = new Series("El Juego del Calamar", 2021, 540, "De suspense");

const contratiempo = new Peliculas("Contratiempo", 2016, 106, "De suspense");
const tormenta = new Peliculas("Durante la Tormenta", 2018, 128, "De suspense");

describe('Documentales class tests', () => {
  // Getters
  it('leones.title returns "Leones"', () => {
    expect(leones.title).to.be.eql("Leones");
  });

  it('tigres.year returns 2016', () => {
    expect(tigres.year).to.be.eql(2016);
  });

  it('leones.duration returns 180', () => {
    expect(leones.duration).to.be.eql(180);
  });

  it('tigres.gender returns "Jungla"', () => {
    expect(tigres.gender).to.be.eql("Jungla");
  });

  // Setters
  it('leones.title returns "Leones2"', () => {
    leones.title = "Leones2";
    expect(leones.title).to.be.eql("Leones2");
  });

  it('tigres.year returns 2017', () => {
    tigres.year = 2017;
    expect(tigres.year).to.be.eql(2017);
  });

  it('leones.duration returns 183', () => {
    leones.duration = 183;
    expect(leones.duration).to.be.eql(183);
  });

  it('tigres.gender returns "Salvaje"', () => {
    tigres.gender = "Salvaje";
    expect(tigres.gender).to.be.eql("Salvaje");
  });
});

describe('Series class tests', () => {
  // Getters
  it('barco.title returns "El Barco"', () => {
    expect(barco.title).to.be.eql("El Barco");
  });

  it('calamar.year returns 2021', () => {
    expect(calamar.year).to.be.eql(2021);
  });

  it('barco.duration returns 3870', () => {
    expect(barco.duration).to.be.eql(3870);
  });

  it('calamar.gender returns "De suspense"', () => {
    expect(calamar.gender).to.be.eql("De suspense");
  });

  // Setters
  it('barco.title returns "Barco"', () => {
      barco.title = "Barco";
    expect(barco.title).to.be.eql("Barco");
  });

  it('calamar.year returns 2022', () => {
      calamar.year = 2022;
    expect(calamar.year).to.be.eql(2022);
  });

  it('barco.duration returns 3900', () => {
      barco.duration = 3900;
    expect(barco.duration).to.be.eql(3900);
  });

  it('calamar.gender returns "Muertes"', () => {
      calamar.gender = "Muertes";
    expect(calamar.gender).to.be.eql("Muertes");
  });
});

describe('Peliculas class tests', () => {
  // Getters
  it('contratiempo.title returns "Contratiempo"', () => {
    expect(contratiempo.title).to.be.eql("Contratiempo");
  });

  it('tormenta.year returns 2018', () => {
    expect(tormenta.year).to.be.eql(2018);
  });

  it('contratiempo.duration returns 106', () => {
    expect(contratiempo.duration).to.be.eql(106);
  });

  it('tormenta.gender returns "De suspense"', () => {
    expect(tormenta.gender).to.be.eql("De suspense");
  });

  // Setters
  it('contratiempo.title returns "Contra"', () => {
      contratiempo.title = "Contra";
    expect(contratiempo.title).to.be.eql("Contra");
  });

  it('tormenta.year returns 2019', () => {
      tormenta.year = 2019;
    expect(tormenta.year).to.be.eql(2019);
  });

  it('contratiempo.duration returns 110', () => {
      contratiempo.duration = 110;
    expect(contratiempo.duration).to.be.eql(110);
  });

  it('tormenta.gender returns "Desaparicion"', () => {
      tormenta.gender = "Desaparicion";
    expect(tormenta.gender).to.be.eql("Desaparicion");
  });
});