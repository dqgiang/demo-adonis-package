import { RouterContract } from "@ioc:Adonis/Core/Route";

export function registerRoutes(route: RouterContract) {
  route.get("/hi", "MyController.hello").namespace("Module").prefix("my-package");
  route.get("/", "MyController.index").namespace("Module").prefix("my-package");
  route.get("/:id", "MyController.show").namespace("Module").prefix("my-package");
}
