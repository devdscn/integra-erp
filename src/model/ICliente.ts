export type idCliente = {
  idEmpresa: number;
  idCliente: number;
};

export interface Cliente {
  _id: idCliente;
  razaSocial: string;
  fantasia: string;
  endereco: string;
  bairro: string;
  cep: string;
  cidade: string;
  uf: string;
  fone?: string;
  rota: string;
  credito: number | 0;
  vendedor: number;
  status: number;
  meioPagamento: string;
  documento?: string;
  inscEstadual?: string;
  contato: string;
}

/*
UNIDADE_NEGOCIOS
CODIGO
NOME
ENDERECO
BAIRRO
CEP
CIDADE
ESTADO
TELEFONE
ROTA
SEQUENCIA
SALDO_CREDITO
VENDEDOR_PADRAO
VENDEDOR_SECUNDARIO
STATUS
FORMA_PAGAMENTO
INSCRICAO_ESTADUAL
OBSERVACAO
FANTASIA
MOVIMENTACAO
CGC_CNPJ
CLASSIFICAC?O_FISCAL
CONTATO
IE_ATIVA

*/
