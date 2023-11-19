/* eslint-disable @typescript-eslint/no-explicit-any */
import 'dotenv/config';
import planoPagamento from '@/core/planoPagamento';
import { CronJob } from 'cron';

export default class PlanoPagamentoJob {
  query: string;
  collection: string;
  constructor(query: string, collection: any) {
    this.query = query;
    this.collection = collection;
  }

  run = () => {
    try {
      const job = new CronJob(process.env.CRON_JOB as string, async () => {
        await planoPagamento(this.query);
      });
      job.start();
      console.log(`Start Job ${this.collection}: ${job.running}`);
    } catch (error) {
      console.log(`Error Job: ${error}`);
    }
  };
}
