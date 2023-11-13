import EmpresaJob from '@/core/job/EmpresaJob';
import ClienteJob from '@/core/job/ClienteJob';

const empresas = new EmpresaJob('select *  from tund_unidade', 'Empresa');
const clientes = new ClienteJob('select *  from vedi_cliente', 'Cliente');

const tasks = [empresas, clientes];

tasks.forEach((job) => job.run());
