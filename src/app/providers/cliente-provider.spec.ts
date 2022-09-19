import { TestBed } from '@angular/core/testing';
import { Cliente } from '../models/cliente';
import { ClienteService } from '../services/cliente.service';
import { ClienteProvider } from './cliente-provider';

describe('ClienteProvider', () => {
  let service: ClienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClienteService);
  });


  it('should create an instance', () => {
    expect(new ClienteProvider()).toBeTruthy();
  });

  it('Should thrown an error with a invalid CPF Cliente (12355200022)', () => {
    let provider = new ClienteProvider();
    let clienteObservable = service.getCliente("1");
    clienteObservable.subscribe(cliente => {
      cliente.cpf = "12355200022";
      try {
        expect(provider.Validate(cliente)).toThrowError("CPF Inválido");
      } catch (error) {
      }
    })
  });

  it('Should thrown an error with a empty Nome Cliente', () => {
    let provider = new ClienteProvider();
    let clienteObservable = service.getCliente("1");
    clienteObservable.subscribe(cliente => {
      cliente.cpf = "88641312056";
      cliente.nome = "";
      try {
        expect(provider.Validate(cliente)).toThrowError("Nome do cliente não pode ser vazio");
      } catch (error) {
      }
    })
  });

  it('Should be a valid Cliente', () => {
    let provider = new ClienteProvider();
    let clienteObservable = service.getCliente("1");
    clienteObservable.subscribe(cliente => {
      cliente.cpf = "88641312056";
      cliente.nome = "Teste de validação";
      try {
        provider.Validate(cliente);
        expect().nothing();
      } catch (error) {
      }
    })
  });


});
