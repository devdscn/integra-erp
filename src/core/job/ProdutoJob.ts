/* eslint-disable @typescript-eslint/no-explicit-any */
import 'dotenv/config';
import produto from '@/core/produto';
import { CronJob } from 'cron';

export default class ProdutoJob {
  query: string;
  collection: string;
  constructor(query: string, collection: any) {
    this.query = query;
    this.collection = collection;
  }

  run = () => {
    try {
      const job = new CronJob(process.env.CRON_JOB as string, async () => {
        await produto(this.query);
      });
      job.start();
      console.log(`Start Job ${this.collection}: ${job.running}`);
    } catch (error) {
      console.log(`Error Job: ${error}`);
    }
  };
}
