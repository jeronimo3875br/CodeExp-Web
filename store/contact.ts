import { Module, VuexModule, Mutation } from 'vuex-module-decorators';

@Module({
  name: 'contact',
  stateFactory: true,
  namespaced: true
})
export default class Contact extends VuexModule {
  public hasLogin = false;

  get hasLoginStatus(): boolean {
    return this.hasLogin;
  }

  @Mutation
  public changeLoginStatus(): void {
    this.hasLogin = !this.hasLogin;
  }
}
