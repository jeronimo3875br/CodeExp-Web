import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators';

@Module({
  namespaced: true,
  name: 'user'
})
class User extends VuexModule {
  public title: string = 'Olá';

  @Mutation
  public setTitle(title: string): void {
    this.title = title;
  }
}

export default User
