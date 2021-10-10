import { ApplicationContract } from '@ioc:Adonis/Core/Application'

/**
 * Provider to register lucid soft deletes
 */
export default class MyProvider {
  public static needsApplication = true
  constructor(protected app: ApplicationContract) {}

  public register(): void {
    const val = this.app.container.use('Adonis/Core/Validator')
    this.app.container.bind('Module/MyController', async () => {
      const { default: MyController } = await import('../src/Controllers/MyController')
      return new MyController(val, this.app.container)
    })
  }

  public async boot() {
    this.app.container.withBindings(['Adonis/Core/Route'], async (Route) => {
      const { registerRoutes } = await import('../src/Routes')
      await registerRoutes(Route)
    })
  }
}
