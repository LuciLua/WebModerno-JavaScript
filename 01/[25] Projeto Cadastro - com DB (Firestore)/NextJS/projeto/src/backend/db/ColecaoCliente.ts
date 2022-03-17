import firebase from "firebase";
import Cliente from "../../core/Cliente";
import ClienteRepositorio from "../../core/ClienteRepositorio";

export default class ColecaoCliente implements ClienteRepositorio {
  #conversor = {
    // converte uma classe pra algo que vai ser persistido no firestore
    toFirestore(cliente: Cliente) {
      return {
        nome: cliente.nome,
        idade: cliente.idade,
      };
    },
    // e recebe algo do firestore e converte para a minha classe
    fromFirestore(
      snapshot: firebase.firestore.QueryDocumentSnapshot,
      options: firebase.firestore.SnapshotOptions
    ) {
      const dados = snapshot.data(options);
      return new Cliente(dados.nome, dados.idade, snapshot.id);
    },
  };

  async salvar(cliente: Cliente): Promise<Cliente> {
    // se o cliente.id estiver setado, vou alterar
    if (cliente?.id) {
      await this.colecao().doc(cliente.id).set(cliente);
      return cliente;
      // Já se o id nao estiver setado, bai adicionar na colecao
    } else {
      const docRef = await this.colecao().add(cliente);
      const doc = await docRef.get();
      // e vai retornar o objeto ja com o id setado pelo firebase
      return doc.data();
    }
  }

  async excluir(cliente: Cliente): Promise<void> {
    return this.colecao().doc(cliente.id).delete();
  }

  async obterTodos(): Promise<Cliente[]> {
    const query = await this.colecao().get()
    return query.docs.map(doc => doc.data()) ?? [] // entrega os proprios clientes
    // caso n retorne nada, retorne um array vazio
}

  private colecao() {
    return firebase
      .firestore()
      .collection("clientes")
      .withConverter(this.#conversor);
  }
}
