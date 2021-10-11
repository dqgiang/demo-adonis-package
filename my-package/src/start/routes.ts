import Route from "@ioc:Adonis/Core/Route";

Route.group(() => {
  Route.get("/", "PackageController.hello");
  Route.get("/users", "PackageController.index");
  Route.get("/users/:id", "PackageController.show");
})
  .namespace("AliasPkgNamespace/src/Controllers")
  .prefix("my-package");
