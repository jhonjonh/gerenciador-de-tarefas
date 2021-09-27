export class Tarefa {
  constructor(
    /*usando ? apos a propriedade indica que não é obrigatoria na construcao do objeto*/
    public id?: number,
    public nome?: string,
    public concluida?: boolean
  ) {}
}
