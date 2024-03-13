class DisciplinaService {
  constructor() {
    this.repositorio = new DisciplinaRepositorio();
    this.alunoService = new AlunoService();
  }

  inserir(codigo, nome) {
    const disciplinaPesquisada = this.pesquisarPorCodigo(codigo);
    if (disciplinaPesquisada.length > 0) {
      throw new Error("Disciplina já cadastrada!");
    }

    const novaDisciplina = new Disciplina(codigo, nome);
    this.repositorio.inserir(novaDisciplina);
    return novaDisciplina;
  }

  pesquisarPorCodigo(codigo) {
    return this.repositorio
      .listar()
      .filter((disciplina) => disciplina.codigo === codigo);
  }

  remover(codigo) {
    this.repositorio.remover(codigo);
  }

  inserirAlunoNaDisciplina(matricula, codigo) {
    const alunoPesquisado = this.alunoService.pesquisarPorMatricula(matricula);
    if (alunoPesquisado.length === 0) {
      throw new Error("Aluno não encontrado");
    }
    const disciplinaPesquisada =
      this.DisciplinaService.pesquisarPorCodigo(codigo);
    if (disciplinaPesquisada.length === 0) {
      throw new Error("Disciplina não encontrada");
    }

    disciplinaPesquisada[0].inserirAluno(alunoPesquisado[0]);
  }
}
