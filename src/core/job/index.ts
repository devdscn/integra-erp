import EmpresaJob from '@/core/job/EmpresaJob';
import ClienteJob from '@/core/job/ClienteJob';
import ProdutoJob from '@/core/job/ProdutoJob';
import PlanoPagamentoJob from '@/core/job/PlanoPagamentoJob';
import VendedorJob from '@/core/job/VendedorJob';

const empresas = new EmpresaJob('select *  from tund_unidade', 'Empresa');
const clientes = new ClienteJob('select *  from vedi_cliente', 'Cliente');
const produtos = new ProdutoJob('select *  from vedi_mercadoria', 'Produto');
const planosPagamento = new PlanoPagamentoJob(
  'select *  from tped_condicao_venda',
  'PlanoPagamento',
);
const vendedores = new VendedorJob('select * from vedi_vendedor', 'Vendedor');

const tasks = [empresas, clientes, produtos, planosPagamento, vendedores];

tasks.forEach((job) => job.run());
