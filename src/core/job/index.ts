import EmpresaJob from '@/core/job/EmpresaJob';
import ClienteJob from '@/core/job/ClienteJob';
import ProdutoJob from '@/core/job/ProdutoJob';
import PlanoPagamentoJob from '@/core/job/PlanoPagamentoJob';

const empresas = new EmpresaJob('select *  from tund_unidade', 'Empresa');
const clientes = new ClienteJob('select *  from vedi_cliente', 'Cliente');
const produtos = new ProdutoJob('select *  from vedi_mercadoria', 'Produto');
const planosPagamento = new PlanoPagamentoJob(
  'select *  from tped_condicao_venda',
  'PlanoPagamento',
);

const tasks = [empresas, clientes, produtos, planosPagamento];

tasks.forEach((job) => job.run());
