/* eslint-disable @typescript-eslint/no-explicit-any */
import MongoDatabase from '@/database/MongoDatabase';
import oracle from '@/database/OracleDatabase';
import { Vendedor } from '@/model/IVendedor';

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
  const erpVendedor = data.rows;
  const vendedores = Array<Vendedor>();

  erpVendedor?.forEach((item: any) => {
    const fone = item.FONE as string;

    const vendedor: Vendedor = {
      idEmpresa: item.UNIDADE,
      idVendedor: item.CODIGO,
      nome: item.NOME,
      fone: fone.replace('  ', '').replace(' ', ''),
      metaVenda: item.META_VENDA_MENSAL,
    };
    vendedores.push(vendedor);
  });

  await mongo.insertMany('vendedores', vendedores);
};
