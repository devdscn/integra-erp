export interface PlanoPagamento {
  _id: number;
  idEmpresa: number;
  nome: string;
  parcelas: number;
  desconto: number;
  acrescimo: number;
  meioPgamento: string[];
}
