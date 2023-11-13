import oracledb from 'oracledb';

export default class OracleDatabase {
  private static database: OracleDatabase;

  private static async connection() {
    const oracle = oracledb;
    oracle.outFormat = oracledb.OUT_FORMAT_OBJECT;
    oracle.initOracleClient();

    const connection = await oracle.getConnection({
      user: process.env.ORACLE_USERNAME,
      password: process.env.ORACLE_PASSWORD,
      connectString: process.env.ORACLE_CONNECT_STRING,
    });

   //console.log(`conexao: ${connection.isHealthy()}`);
    return connection;
  }

  static getDatabase() {
    if (OracleDatabase.database) {
      console.log('Oracle: instancia já existe.');
      return OracleDatabase;
    }

    console.log('Oracle: criando nova instancia.');
    OracleDatabase.database = new OracleDatabase();
    return OracleDatabase;
  }

  static async executeQuery(query: string) {
    const connection = await this.getDatabase().connection();
    const result = await connection.execute(query);
    await connection.close();
    // if (result) console.log(result.rows);

    return result;
  }
}
