import {
    Component,
    Input,
    ChangeDetectionStrategy,
    Output,
    EventEmitter,
} from '@angular/core';
import {Candidate} from '../../types/candidate';
import {UserAction} from '../../coffee-list.constants';

@Component({
    selector: 'ce-coffee-candidate',
    templateUrl: './coffee-candidate.component.html',
    styleUrls: ['./coffee-candidate.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoffeeCandidateComponent {
    @Input()
    candidate: Candidate;
    @Output()
    onUserAction = new EventEmitter<UserAction>();

    UserAction = UserAction;
}
