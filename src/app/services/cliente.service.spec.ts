import { TestBed } from '@angular/core/testing';

import { ClienteService } from './cliente.service';

describe('ClienteService', () => {
  let service: ClienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClienteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a Cliente instance', () => {
    let c = service.getCliente("1").subscribe(cliente => {
      expect(cliente.nome).toEqual("Nome do cliente para teste");
    });
    c.unsubscribe();
  });

  it('should return a Cliente List instance', () => {
    let c = service.getClientes().subscribe(cliente => {
      expect(cliente.length).toEqual(2);
    });
    c.unsubscribe();
  });

});
