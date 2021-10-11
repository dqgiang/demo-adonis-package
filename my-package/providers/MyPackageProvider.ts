import { ApplicationContract } from '@ioc:Adonis/Core/Application'

/**
 * Provider to register lucid soft deletes
 */
export default class MyProvider {
  public static needsApplication = true
  constructor(protected app: ApplicationContract) {}

  public async register() {
    const { default: User } = await import('../src/Models/User')

    this.app.container.bind('IoCNamespace/Models', () => {
      return { User }
    })
  }

  public async boot() {
    await import('../src/start/routes')
  }
}
