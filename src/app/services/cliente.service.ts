import { Injectable } from '@angular/core';
import { observable, Observable, Subscriber } from 'rxjs';
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor() { }

  public getCliente(id: string) : Observable<Cliente> {
    return new Observable<Cliente>(subscriber => {
      let c = new Cliente();
      c.id = id;
      c.nome = "Nome do cliente para teste";
      c.cpf = "783.228.260-60";
      c.cep = "01001000";
      c.endereco = "Praça da Sé";
      subscriber.next(c);
    });
  }

  public getClientes() : Observable<Cliente[]> {
    return new Observable<Cliente[]>(subscriber => {
      let lc = new Array<Cliente>();
      let n = 1;

      let c = new Cliente();
      c.id = n.toString();
      c.nome = "Nome do cliente para teste 1";
      c.cpf = "783.228.260-60";
      c.cep = "01001000";
      c.endereco = "Praça da Sé";
      lc.push(c);

      c = new Cliente();
      n++;
      c.id = n.toString();
      c.nome = "Nome do cliente para teste 2";
      c.cpf = "783.228.260-60";
      c.cep = "01001000";
      c.endereco = "Praça da Sé";
      lc.push(c);

      subscriber.next(lc);
    });
  }


}
