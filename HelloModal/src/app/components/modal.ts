import {Component, View, NgIf} from 'angular2/angular2';

@Component({
    selector: 'modal',
    template: `
    <div class="modalPopup" *ng-if="isOpen">
      <button class="right" (click)="close()">&times;</button>
      <ng-content></ng-content>
    </div>
    <div class="overlay" *ng-if="isOpen" (click)="close()"></div>
  `,
    styles: [`
        .modalPopup {
          background-color: #A9D5EF;
          padding: 10px;
          width: 50%;
          height: 300px;
          left: 25%;
          position: relative;
          z-index: 1000;
        }

        .overlay {
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          position: fixed;
          background: rgba(0, 0, 0, 0.5);
          z-index: 1;
        }
    `],
    directives: [NgIf]
})
export class ModalComponent {
    constructor() {

    }
    modalTitle: string;
    isOpen: boolean = false;

    open() {
        this.isOpen = true;
    }

    close() {
        this.isOpen = false;
    }
}