import { TestBed } from '@angular/core/testing';
import { SharedProvider } from './shared-provider';

describe('SharedProvider', () => {
  it('should create an instance', () => {
    expect(new SharedProvider()).toBeTruthy();
  });

  it('Should detect an invalid CPF (12355200022)', () => {
    const shared = new SharedProvider();
    expect(shared.isCPFValid("12355200022")).toBeFalsy();
  });

  it('Should detect a valid CPF (00822919001)', () => {
    const shared = new SharedProvider();
    expect(shared.isCPFValid("00822919001")).toBeTruthy();
  });

});
