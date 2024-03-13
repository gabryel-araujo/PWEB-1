class Disciplina {
  constructor(codigo, nome) {
    this._codigo = codigo;
    this._nome = nome;
    this._alunos = [];
  }

  get codigo() {
    return this._codigo;
  }

  get nome() {
    return this._nome;
  }

  get alunos() {
    return this._alunos;
  }

  set nome(novoNome) {
    this._nome = novoNome;
  }

  inserirAluno(aluno) {
    this._alunos.push(aluno);
  }
}
