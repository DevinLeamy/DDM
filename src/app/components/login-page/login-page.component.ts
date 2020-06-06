import { Component, ViewEncapsulation } from '@angular/core'
import { AuthenticationService } from '../../services/authentication'
import { NgForm } from '@angular/forms'

@Component({
  selector: "app-login-page",
  templateUrl: "login-page.component.html",
  styleUrls: ["login-page.component.css"],
  encapsulation: ViewEncapsulation.None
})
export class LoginPageComponent {
  constructor(private authService : AuthenticationService) {}

  login(loginForm: NgForm) {
    if (loginForm.invalid) loginForm.resetForm()
    else {
      const email = loginForm.value.email
      const password = loginForm.value.password
      this.authService.login(email, password)
    }
  }
}
