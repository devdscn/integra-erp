import { MongoClient } from 'mongodb';

export default class MongoDatabase {
  private static database: MongoDatabase;
  private static count: number;

  private static connection() {
    const mongoClient = new MongoClient(
      process.env.MONGO_CONNECT_STRING as string,
    );
    const connect = mongoClient.db();
    return connect;
  }

  static getDatabase() {
    if (MongoDatabase.database) {
      console.log('instancia já existe');
      return MongoDatabase;
    }
    console.log('Criando instancia');
    MongoDatabase.database = new MongoDatabase();
    return MongoDatabase;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static async insertMany(collection: string, data: any) {
    try {
      const connection = this.getDatabase().connection();
      //carrega coleção recebidade por argumento
      const db = connection.collection(collection);
      //apaga coleção recebida por argumento
      if ((await db.countDocuments()) > 0) {
        await db.drop();
      }
      const options = { ordered: true };
      const result = await db.insertMany(data, options);
      
      //contagem dos documentos inseridos
      this.count = result.insertedCount;
    } catch (error) {
      console.log(`error mongo: ${error}`);
    }
  }

  static insertedCount() {
    return this.count;
  }
}
