import { DateTime } from "luxon";
import { IocContract } from "@ioc:Adonis/Core/Application";
import { column } from "@adonisjs/lucid/build/src/Orm/Decorators";

export async function createUserModel(container: IocContract): Promise<any> {
  const { BaseModel } = container.use("Adonis/Lucid/Orm");

  class User extends BaseModel {
    public static table = "users";

    @column({ isPrimary: true })
    public id: number;

    @column.dateTime({ autoCreate: true })
    public createdAt: DateTime;

    @column.dateTime({ autoCreate: true, autoUpdate: true })
    public updatedAt: DateTime;
  }

  return User;
}
