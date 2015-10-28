import {Component, bootstrap} from 'angular2/angular2';
import {MainView} from './app/main';
import {ModalLayer} from './app/components/modal-layer';

@Component({
    selector: 'my-app',
    template: `
            <modal-layer></modal-layer>
            <main-view [addr1]="'246 Jupiter Street'"></main-view>
            `,
    directives: [MainView, ModalLayer]
})
class AppComponent {
    constructor() {
        
    }
}
bootstrap(AppComponent);