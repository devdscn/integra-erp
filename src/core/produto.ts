/* eslint-disable @typescript-eslint/no-explicit-any */
import oracle from '@/database/OracleDatabase';
import { Produto } from '@/model/IProduto';
import MongoDatabase from '@/database/MongoDatabase';

export default function run(query: string) {
  try {
    dataMongo(query);
  } catch (error) {
    console.log(error);
  }
}

const dataOracale = async (query: string) => {
  const data = await oracle.executeQuery(query);
  return data;
};

const mongo = new MongoDatabase();

const dataMongo = async (query: string) => {
  const data = await dataOracale(query);
  const erpProdutos = data.rows;
  const produtos = Array<Produto>();

  erpProdutos?.forEach((item: any) => {
    const produto: Produto = {
      idEmpresa: item.UNIDADE_NEGOCIOS as number,
      idProduto: item.CODIGO_PRIMARIO as number,
      idSecundario: item.CODIGO_SECUNDARIO as number,
      nome: item.DESCRICAO as string,
      pesada: item.PESO as string,
      fornecedor: item.FORNECEDOR as number,
      grupo: item.GRUPO as string,
      linha: item.LINHA_DE_VENDA as string,
      unidadeFisica: item.UNIDADE_FISICA as string,
      unidadeVenda: item.FRACAO as number,
      estoque: item.ESTOQUE as number,
      unidadeCaixa: item.CAIXA_FECHADA as number,
      multiploVenda: item.MULTIPLO_DE_VENDA as number,
      preco: item.PRECO_VENDA as number,
      desconto: item.DESC_MAXIMOS as number,
      acrescimo: item.ACRESC_MAXIMO as number,
      ativo: item.ATIVO_VENDA as string,
      idFamilia: item.CODFAMILIA as string,
      nomeFamilia: item.DESFAMILIA as string,
      referencia: item.REFERENCIA as string,
    };
    produtos.push(produto);
  });

  await mongo.insertMany('Produtos', produtos);
};
