/* eslint-disable @typescript-eslint/no-explicit-any */
import oracle from '@/database/OracleDatabase';
import MongoDatabase from '@/database/MongoDatabase';
import { PlanoPagamento } from '@/model/IPlanoPagamento';

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
  const erpPlano = data.rows;
  const planos = Array<PlanoPagamento>();

  erpPlano?.forEach((item: any) => {
    const tipo = item.TPED_TIPOS_PGTO_PERMITIDOS as string;

    const planoPagamento: PlanoPagamento = {
      _id: item.TPED_CONDICAO_VENDA_PK as number,
      idEmpresa: item.TPED_UNIDADE_FK as number,
      nome: item.TPED_NOME as string,
      parcelas: item.TPED_QTDE_PARCELAS as number,
      desconto: item.TPED_DESCONTO_GERAL as number,
      acrescimo: item.TPED_ACRESCIMO_GERAL as number,
      meioPgamento: tipo.split(/\s*, \s*/) as string[],
    };
    planos.push(planoPagamento);
  });

  await mongo.insertMany('planosPagamento', planos);
};
