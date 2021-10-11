import { User as IoCUser } from "@ioc:IoCNamespace/Models";
import User from "AliasPkgNamespace/src/Models/User";

export default class CustomersController {
  public async index() {
    const users = await IoCUser.all();
    return {
      msg: 'Resolve model from IoC import',
      users,
    }
  }

  public async indexAlias() {
    const users = await User.all();
    return {
      msg: 'Resolve model from alias or direct import',
      users,
    }
  }
}
