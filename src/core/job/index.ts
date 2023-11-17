import EmpresaJob from '@/core/job/EmpresaJob';
import ClienteJob from '@/core/job/ClienteJob';
import ProdutoJob from '@/core/job/ProdutoJob';

const empresas = new EmpresaJob('select *  from tund_unidade', 'Empresa');
const clientes = new ClienteJob('select *  from vedi_cliente', 'Cliente');
const produtos = new ProdutoJob('select *  from vedi_mercadoria', 'Produto');

const tasks = [empresas, clientes, produtos];

tasks.forEach((job) => job.run());
