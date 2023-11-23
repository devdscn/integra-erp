/* eslint-disable @typescript-eslint/no-explicit-any */
import oracle from '@/database/OracleDatabase';
import MongoDatabase from '@/database/MongoDatabase';
import { Empresa } from '@/model/IEmpresa';

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
  const erpEmpresas = data.rows;
  const empresas = Array<Empresa>();

  erpEmpresas?.forEach((item: any) => {
    const empresa: Empresa = {
      _id: item.TUND_UNIDADE_PK as number,
      razaSocial: item.TUND_RAZAO_SOCIAL as string,
      fantasia: item.TUND_FANTASIA as string,
      documento: item.TUND_CNPJ as string,
      inscEstadual: item.TUND_INSCRICAO_ESTADUAL as string,
    };

    empresas.push(empresa);
  });

  await mongo.insertMany('empresas', empresas);
};
