export type idVendedor = {
  idEmpresa: number;
  idVendedor: number;
};

export interface Vendedor {
  _id: idVendedor;
  nome: string;
  fone: string;
  metaVenda: number;
}
