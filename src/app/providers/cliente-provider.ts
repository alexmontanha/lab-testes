import { Cliente } from "../models/cliente";
import { SharedProvider } from "./shared-provider";

export class ClienteProvider {
  sharedProvider = new SharedProvider();

  public Validate(cliente: Cliente) {
    if (cliente.nome = "") {
      throw new Error("Nome do cliente não pode ser vazio");
    }

    if (!this.sharedProvider.isCPFValid(cliente.cpf)) {
      throw new Error("CPF Inválido");
    }
  }


}
