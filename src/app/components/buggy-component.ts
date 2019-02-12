import {SomeClass} from '../../../declarations/package';
import {Component} from '@angular/core';

@Component({
  selector: 'buggy-component',
  template: '<div>test</div>'
})
export class BuggyComponent {
  constructor(private prop : SomeClass) {}
}
