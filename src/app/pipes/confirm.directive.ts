import { Directive, Input, HostListener, EventEmitter, Output } from '@angular/core';

@Directive({
    selector: '[confirm]'
})
export class ConfirmDirective {
    @Output() confirm = new EventEmitter<any>(); 
    @Input() confirmMessage: string = 'Are you sure ...?';

    @HostListener('click')
    onClick() {
        const confirmed = window.confirm(this.confirmMessage);

        if(confirmed && this.confirm) {
            this.confirm.emit()
        }
    }
}
