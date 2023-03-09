import 'chai';
import { expect } from 'chai';
import { StringSearchableCollection } from '../src/modification/modification-stringsearchablecollection';

const coleccionCadenas = new StringSearchableCollection(["Hola", "Tres", "Cuatro", "Adios", "Adios"]);

describe('StringSearchableCollection class tests', () => {
  it('coleccionCadenas.addItem("Adios") return ["Hola", "Tres", "Cuatro", "Adios", "Adios", "Adios"]', () => {
    expect(coleccionCadenas.addItem("Adios")).to.be.eql(["Hola", "Tres", "Cuatro", "Adios", "Adios", "Adios"]);
  });

  it('coleccionCadenas.removeItem(1) return ["Tres"]', () => {
    expect(coleccionCadenas.removeItem(1)).to.be.eql(["Tres"]);
  });

  it('coleccionCadenas.getItem(0) return "Hola"', () => {
    expect(coleccionCadenas.getItem(0)).to.be.eql("Hola");
  });

  it('coleccionCadenas.getItem(10) return undefined', () => {
    expect(coleccionCadenas.getItem(10)).to.be.eql(undefined);
  });

  it('coleccionCadenas.getNumberOfItems() return 5', () => {
    expect(coleccionCadenas.getNumberOfItems()).to.be.eql(5);
  });

  it('coleccionCadenas.search("Adios") return ["Adios", "Adios", "Adios"]', () => {
    expect(coleccionCadenas.search("Adios")).to.be.eql(["Adios", "Adios", "Adios"]);
  });

  it('coleccionCadenas.search("Tres") return []', () => {
    expect(coleccionCadenas.search("Tres")).to.be.eql([]);
  });
});