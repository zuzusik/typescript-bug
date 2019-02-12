import {SomeClass} from '../../../declarations/package';
import {Component} from '@angular/core';

@Component({
  selector: 'buggy-component-workaround',
  template: '<div>test</div>'
})
export class BuggyComponentWorkaround {
  private prop : SomeClass;

  constructor(prop) {
    this.prop = prop;
  }
}
