import Mongo from 'mongodb';
// import moment from 'moment';

export type Product = {
  _id: Mongo.ObjectId;
  genre: string;
  name: string;
  maker: string;
};

export type Device = {
  _id: Mongo.ObjectId;
  productId: string;
  serialNumber: string;
  accessories: string;
  remarks: string;
  status: string;
  code: string | null;
};

export class DB {
  private db!: Mongo.Db;

  private dbUri: string;
  private dbName: string;

  /**
   * Database settings.
   * @param dbUri database connection query. e.g. mongodb://localhost:27017
   * @param dbName database name.
   */
  constructor(dbUri: string, dbName: string) {
    this.dbUri = dbUri;
    this.dbName = dbName;
  }

  async start(): Promise<void> {
    await Mongo.MongoClient.connect(this.dbUri, {
      useUnifiedTopology: true,
    })
      .then((mongo) => {
        this.db = mongo.db(this.dbName);
        return;
      })
      .catch((err) => {
        throw err;
      });
  }

  async addProduct(o: {
    genre: string;
    name: string;
    maker: string;
  }): Promise<Mongo.ObjectId> {
    const result = await this.db
      .collection('products')
      .insertOne(o)
      .catch((err) => {
        throw err;
      });
    return result.insertedId;
  }

  async addDevice(o: {
    productId: string;
    serialNumber: string;
    accessories: string;
    remarks: string;
  }): Promise<{ id: Mongo.ObjectId; count: number }> {
    const result = await this.db
      .collection<Device>('devices')
      .insertOne({ ...o, status: 'ready', code: null })
      .catch((err) => {
        throw err;
      });
    return { id: result.insertedId, count: result.insertedCount };
  }

  fetchDeviceCode(id: string, code: string): void {
    this.db
      .collection<Device>('devices')
      .updateOne({ _id: new Mongo.ObjectId(id) }, { $set: { code } })
      .catch((err) => {
        throw err;
      });
  }

  async findProducts(o: { genre?: string }): Promise<Product[]> {
    const products = this.db.collection<Product>('products').find(o);
    return products.toArray();
  }

  async findDevicesByProductId(id: Mongo.ObjectId): Promise<Device[]> {
    // console.log(id);
    const devices = await this.db
      .collection<Device>('devices')
      .find({ productId: id.toHexString() })
      .toArray();
    return devices;
  }

  async countDevices(): Promise<number> {
    const devices = await this.db.collection('devices').find({}).toArray();
    return devices.length;
  }
}
