import 'chai';
import { expect } from 'chai';
import { ElementList } from "../src/ejercicio-2/elementList"

const primeraListaNumerica = new ElementList([25, 30, 80, 25, 25, 40, 70, -80, -5]);
const segundaListaNumerica = new ElementList([14, 28, -75]);
const terceraListaNumerica = new ElementList([19]);

describe('ElementList class tests', () => {
  it('primeraListaNumerica.list return [25, 30, 80, 25, 25, 40, 70, -80, -5]', () => {
    expect(primeraListaNumerica.list).to.be.eql([25, 30, 80, 25, 25, 40, 70, -80, -5]);
  });

  it('primeraListaNumerica.list return [25, 30, 80, 25, 25, 40, 70, -80, -5]', () => {
    primeraListaNumerica.list = [-13, 40, 50, 76];
    expect(primeraListaNumerica.list).to.be.eql([-13, 40, 50, 76]);
  });

  it('primeraListaNumerica.getElement(3) return 76', () => {
    expect(primeraListaNumerica.getElement(3)).to.be.eql(76);
  });

  it('primeraListaNumerica.length() return 4', () => {
    expect(primeraListaNumerica.length()).to.be.eql(4);
  });

  it('primeraListaNumerica.append(primeraListaNumerica.list, segundaListaNumerica.list) return [-13, 40, 50, 76, 14, 28, -75]', () => {
    expect(primeraListaNumerica.append(primeraListaNumerica.list, segundaListaNumerica.list)).to.be.eql([-13, 40, 50, 76, 14, 28, -75]);
  });  

  it('primeraListaNumerica.concatenate(primeraListaNumerica.list, segundaListaNumerica.list, terceraListaNumerica.list) return [-13, 40, 50, 76, 14, 28, -75, 14, 28, -75, 19]', () => {
    expect(primeraListaNumerica.concatenate(primeraListaNumerica.list, segundaListaNumerica.list, terceraListaNumerica.list)).to.be.eql([-13, 40, 50, 76, 14, 28, -75, 14, 28, -75, 19]);
  });  

  it('primeraListaNumerica.reverse() return [-13, 40, 50, 76, 14, 28, -75, 14, 28, -75, 19]', () => {
    expect(primeraListaNumerica.reverse()).to.be.eql([19, -75, 28, 14, -75, 28, 14, 76, 50, 40, -13]);
  }); 

  it('primeraListaNumerica.filter(primeraListaNumerica.list, (item) => item >= 40) return [76, 50, 40]', () => {
    expect(primeraListaNumerica.filter(primeraListaNumerica.list, (item) => item >= 40)).to.be.eql([76, 50, 40]);
  }); 

  it('primeraListaNumerica.map(primeraListaNumerica.list, (item) => item * 10) return [760, 500, 400]', () => {
    expect(primeraListaNumerica.map(primeraListaNumerica.list, (item) => item * 10)).to.be.eql([760, 500, 400]);
  }); 

  it('primeraListaNumerica.reduce(primeraListaNumerica.list, (item) => item + 22, 1) return [760, 522, 422]', () => {
    expect(primeraListaNumerica.reduce(primeraListaNumerica.list, (item) => item + 22, 1)).to.be.eql([760, 522, 422]);
  }); 

  it('primeraListaNumerica.forEach(primeraListaNumerica.list, (item) => item / 5) return [152, 104.4, 84.4]', () => {
    expect(primeraListaNumerica.forEach(primeraListaNumerica.list, (item) => item / 5)).to.be.eql([152, 104.4, 84.4]);
  }); 
});