class DisciplinaRepositorio {
  constructor() {
    this.disciplinas = [];
  }

  inserir(disciplina) {
    this.disciplinas.push(disciplina);
  }

  remover(codigo) {
    const indexDisciplina = this.disciplinas.findIndex(
      (disciplina) => disciplina.codigo === codigo
    );

    if (indexDisciplina > -1) {
      this.disciplinas.splice(indexDisciplina, 1);
    }
  }

  listar() {
    return this.disciplinas;
  }
}
