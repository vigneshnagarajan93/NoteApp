import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NoteApp';
  rootName = 'Jeremy';

  onNameChanged(newName) {
     this.rootName = newName;
  }
}
