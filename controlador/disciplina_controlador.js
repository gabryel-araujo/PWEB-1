class DisciplinaControlador {
  constructor() {
    this.servico = new DisciplinaService();
  }

  inserir() {
    const disciplinaElemento = document.querySelector("#disciplina");
    const codigoElemento = document.querySelector("#codigo");

    const disciplinaInserida = this.servico.inserir(
      Number(codigoElemento.value),
      disciplinaElemento.value
    );

    const listaDisciplinasElemento =
      document.querySelector("#listaDisciplinas");
    if (disciplinaInserida) {
      this.inserirDisciplinaNoHtml(
        disciplinaInserida,
        listaDisciplinasElemento
      );
    }
  }

  inserirDisciplinaNoHtml(disciplina, elementoDestino) {
    const disciplinaElemento = document.createElement("li");
    disciplinaElemento.textContent = `Disciplina: ${disciplina.nome} - Código: ${disciplina.codigo}`;
    elementoDestino.appendChild(disciplinaElemento);
  }
}
