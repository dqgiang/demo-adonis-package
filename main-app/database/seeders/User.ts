import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import User from "AliasPkgNamespace/src/Models/User";

export default class UserSeeder extends BaseSeeder {
  public async run() {
    await User.create({});
  }
}
