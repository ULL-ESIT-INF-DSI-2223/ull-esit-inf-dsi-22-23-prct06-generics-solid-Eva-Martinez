import 'chai';
import { expect } from 'chai';
import { NumericSearchableCollection } from '../src/modification/modification-numericsearchablecollection';

const coleccionNumerica = new NumericSearchableCollection([25, 30, 80, 25, 25, 40, 70, -80, -5]);

describe('NumericSearchableCollection class tests', () => {
  it('coleccionNumerica.addItem(3) return [25, 30, 80, 25, 25, 40, 70, -80, -5, 3]', () => {
    expect(coleccionNumerica.addItem(3)).to.be.eql([25, 30, 80, 25, 25, 40, 70, -80, -5, 3]);
  });

  it('coleccionNumerica.removeItem(9) return [3]', () => {
    expect(coleccionNumerica.removeItem(9)).to.be.eql([3]);
  });

  it('coleccionNumerica.getItem(0) return 25', () => {
    expect(coleccionNumerica.getItem(0)).to.be.eql(25);
  });

  it('coleccionNumerica.getItem(10) return undefined', () => {
    expect(coleccionNumerica.getItem(10)).to.be.eql(undefined);
  });

  it('coleccionNumerica.getNumberOfItems() return 9', () => {
    expect(coleccionNumerica.getNumberOfItems()).to.be.eql(9);
  });

  it('coleccioNumerica.search(25) return [0, 3, 4]', () => {
    expect(coleccionNumerica.search(25)).to.be.eql([0, 3, 4]);
  });

  it('coleccionNumerica.search(3) return []', () => {
    expect(coleccionNumerica.search(3)).to.be.eql([]);
  });
});