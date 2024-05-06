import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReativeFormsComponent } from './reative-forms/reative-forms.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReativeFormsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Reactive-Form-With-Validation';
}
