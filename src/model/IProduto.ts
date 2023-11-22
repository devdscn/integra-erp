export interface Produto {
  idEmpresa: number;
  idProduto: number;
  idSecundario: number;
  nome: string;
  pesada: string;
  fornecedor: number;
  grupo: string;
  linha: string;
  unidadeFisica: string;
  unidadeVenda: number;
  estoque: number;
  unidadeCaixa: number;
  multiploVenda: number;
  preco: number;
  desconto: number;
  acrescimo: number;
  ativo: string;
  idFamilia: string;
  nomeFamilia: string;
  referencia: string;
}

/*
UNIDADE_NEGOCIOS
CODIGO_PRIMARIO
CODIGO_SECUNDARIO
DESCRICAO
PESO
FORNECEDOR
GRUPO
LINHA_DE_VENDA
UNIDADE_FISICA
FRACAO
ESTOQUE
CAIXA_FECHADA
MULTIPLO_DE_VENDA
PRECO_VENDA
ULTIMA_ENTRADA
DESC_MAXIMOS
ACRESC_MAXIMO
ACRES_VAR_PRC
OK
ATIVO_VENDA
VENDA_PALM
DESFAMILIA
CODFAMILIA
REFERENCIA
*/
