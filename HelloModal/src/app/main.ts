import {Component, View, Injectable} from 'angular2/angular2';
import {FORM_DIRECTIVES, FormBuilder, ControlGroup} from 'angular2/angular2';
import {ModalComponent} from './components/modal';

@Component({
    selector: 'main-view',
    template: `
        <h1>Main View</h1>
        <button (click)="modal.open()">OPEN MODAL</button>
        <modal #modal>
            <form [ng-form-model]="myForm" (submit)="onSubmit(myForm.value)">
                <div class="form-group">
                    <label for="addressLine1Input">Address Line 1:</label>
                    <input type="text" class="form-control" id="addressLine1Input" placeholder="Enter Address line 1" [ng-form-control]="myForm.controls['addr1']">
                </div>
                <button type="submit" class="btn btn-default">Submit</button>
            </form>
        </modal>
  `,
    directives: [ModalComponent, FORM_DIRECTIVES]
})
export class MainView {
    myForm: ControlGroup;

    constructor() {
        var fb = new FormBuilder();
        this.myForm = fb.group({
            'addr1': ['123 Mercury Street']
        });
    }
    onSubmit(value) {
        console.log('You submited value: ', value);
    }

    
}
