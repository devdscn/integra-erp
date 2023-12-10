/* eslint-disable @typescript-eslint/no-explicit-any */
import oracle from '@/database/OracleDatabase';
import MongoDatabase from '@/database/MongoDatabase';
import { Cliente } from '@/model/ICliente';

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
  const erpClientes = data.rows;
  const clientes = Array<Cliente>();

  erpClientes?.forEach((item: any) => {
    const cliente: Cliente = {
      idEmpresa: item.UNIDADE_NEGOCIOS as number,
      idCliente: item.CODIGO as number,
      razaSocial: item.NOME as string,
      fantasia: item.FANTASIA as string,
      endereco: item.ENDERECO as string,
      bairro: item.BAIRRO as string,
      cep: item.CEP as string,
      cidade: item.CIDADE as string,
      uf: item.ESTADO as string,
      fone: item.TELEFONE as string,
      rota: item.ROTA as string,
      credito: item.SALDO_CREDITO as number | 0,
      idVendedor: item.VENDEDOR_PADRAO as number,
      status: item.STATUS as number,
      meioPagamento: item.FORMA_PAGAMENTO as string,
      documento: item.CGC_CNPJ as string,
      inscEstadual: item.INSCRICAO_ESTADUAL as string,
      contato: item.CONTATO as string,
    };

    clientes.push(cliente);
  });

  await mongo.insertMany('Clientes', clientes);
};
