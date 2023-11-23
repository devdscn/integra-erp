import { MongoClient } from 'mongodb';

export default class MongoDatabase {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async insertMany(collection: string, data: any) {
    const uri = process.env.MONGO_CONNECT_STRING as string;
    const client = new MongoClient(uri);

    await client.connect();

    try {
      //carrega coleção recebidade por argumento

      const connect = client.db();

      const db = connect.collection(collection);

      //apaga coleção recebida por argumento
      if ((await db.countDocuments()) > 0) {
        await db.drop();
      }
      const options = { ordered: true };

      const result = await db.insertMany(data, options);
      console.log(`${collection} : ${result.insertedCount} `);
      await client.close();
    } catch (error) {
      console.log(`error mongo: ${error}`);
    }
  }
}

/*import { MongoClient } from 'mongodb';

export default class MongoDatabase {
  private static database: MongoDatabase;

  private static connection() {
    const mongoClient = new MongoClient(
      process.env.MONGO_CONNECT_STRING as string,
    );
    const connect = mongoClient.db();
    return connect;
  }

  static getDatabase() {
    if (MongoDatabase.database) {
      //     console.log('Mongo: instancia já existe');
      return MongoDatabase;
    }
   // console.log('Mongo: criando nova instancia.');
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
      //this.count = result.insertedCount;
      console.log(`${collection} : ${result.insertedCount} `);
    } catch (error) {
      console.log(`error mongo: ${error}`);
    }
  }
}
*/
