import { Component } from '@angular/core';
import { LoginComponent } from '../components/login.component';

@Component({
  selector: 'app-login-container',
  standalone: true,
  imports: [LoginComponent],
  templateUrl: './login-container.component.html',
  styleUrl: './login-container.component.scss'
})
export class LoginContainerComponent {

}
