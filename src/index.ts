import 'dotenv/config';
import express from 'express';
import oracle from '@/database/OracleDatabase';
import mongo from '@/database/MongoDatabase';

class App {
  app = express();
  port: number;

  constructor() {
    this.banco();
    this.port = 3000;
    this.listner();
  }

  async banco() {
    const empresa = await oracle.executeQuery('select *  from tund_unidade');
    mongo.insertMany('empresas', empresa.rows);
    
    const cliente = await oracle.executeQuery('select *  from VEDI_CLIENTE');
    mongo.insertMany('clientes', cliente.rows);
    
  }
  listner() {
    this.app.listen(this.port, () => {
      console.log(`escutando na porta ${this.port}`);
    });
  }
}

export default new App().app;
