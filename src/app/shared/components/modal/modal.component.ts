import {
    Component,
    Output,
    EventEmitter,
    ElementRef,
    ChangeDetectorRef,
} from '@angular/core';

const KEY_ESC = 27;

@Component({
    selector: 'ce-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
    @Output()
    onClose = new EventEmitter<undefined>();

    isOpen = false;
    element: HTMLElement;
    private closeOnEscapeKeyHandler: (event: KeyboardEvent) => void;

    constructor(
        private elementRef: ElementRef,
        private changeDetectorRef: ChangeDetectorRef
    ) {
        this.element = this.elementRef.nativeElement;
    }

    open(): void {
        this.isOpen = true;
        document.addEventListener(
            'keydown',
            (this.closeOnEscapeKeyHandler = this.closeOnEscapeKey.bind(this)),
            true
        );
    }

    close(): void {
        this.isOpen = false;
        document.removeEventListener(
            'keydown',
            this.closeOnEscapeKeyHandler,
            true
        );
        this.onClose.emit(undefined);
    }

    closeOnBackdropClick(event: MouseEvent): void {
        const backdropElement = this.element.querySelector(
            '.ce-modal__backdrop'
        );
        if (<Element>event.target === backdropElement) {
            event.preventDefault();
            event.stopPropagation();
            this.close();
        }
    }

    private closeOnEscapeKey(event: KeyboardEvent): void {
        if (event.keyCode === KEY_ESC) {
            event.preventDefault();
            event.stopPropagation();
            this.close();
            this.changeDetectorRef.detectChanges();
        }
    }
}
