import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import User from "../Models/User";

export default class MyController {
  public async hello() {
    return `
    <body>
    <p>Hello from package</p>
    <ul>
    <li><a href="/my-package/users">Go to /my-package/users</a></li>
    <li><a href="/my-package/users/1">Go to /my-package/users/1</a></li>
    </ul>
    </body>
    `;
  }

  public async index() {
    return await User.all();
  }

  public async show(ctx: HttpContextContract) {
    const id = ctx.request.param("id");
    return await User.findOrFail(id);
  }

  public invokeByApp() {
    return "Package Controller handled route declared in main app";
  }
}
