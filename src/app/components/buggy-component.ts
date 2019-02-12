import {SomeClass} from '../../../declarations/package';
import {Component, Inject, InjectionToken} from '@angular/core';

const token = new InjectionToken('SomeClass');

@Component({
  selector: 'buggy-component',
  template: '<div>test</div>'
})
export class BuggyComponent {
  constructor(@Inject(token) private prop : SomeClass) {}
}
