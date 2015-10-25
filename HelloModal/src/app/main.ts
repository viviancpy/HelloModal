import {Component, View} from 'angular2/angular2';
import {Modal} from './components/modal';

@Component({
    selector: 'main-view',
    template: `
        <h1>Main View</h1>
       <button (click)="modal.open()">OPEN MODAL</button>
            <modal #modal>
              <p>This is content inside the modal.</p>
              <button (click)="modal.close()">Custom close</button>
            </modal>
  `,
    directives: [Modal]
})
export class MainView {
    constructor() {
    }

}