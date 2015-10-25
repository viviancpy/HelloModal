import {Component, bootstrap} from 'angular2/angular2';
import {MainView} from './app/main';
@Component({
    selector: 'my-app',
    template: `
            <main-view></main-view>
            `,
    directives: [MainView]
})
class AppComponent {
    constructor() {
    }
}
bootstrap(AppComponent);