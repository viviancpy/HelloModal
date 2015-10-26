import {Component, bootstrap, provide} from 'angular2/angular2';
import {MainView} from './app/main';

let config = {
    modalTitle: 'This is a modal'
};

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
bootstrap(AppComponent, [provide('env.config', { useValue: config })]);