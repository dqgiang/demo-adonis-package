import { IocContract } from "@ioc:Adonis/Core/Application";
import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { createUserModel } from "../Models/User";

export default class MyController {
  public get container(): IocContract {
    return this._container;
  }

  public get validator(): any {
    return this._validator;
  }

  public constructor(
    private _validator: any,
    private _container: IocContract
  ) {
  }

  public async hello() {
    return "Hello from external package";
  }

  public async index() {
    const User = await createUserModel(this._container);
    return await User.all();
  }

  public async show(ctx: HttpContextContract) {
    const id = ctx.request.param("id");
    const User = await createUserModel(this._container);
    return await User.findOrFail(id);
  }
}
