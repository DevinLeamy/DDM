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
  errorMessage: string
  loggingIn: boolean = false
  constructor(private authService : AuthenticationService) {}

  login(loginForm: NgForm) {
    if (this.loggingIn) return
    if (loginForm.invalid) this.errorMessage = "Enter missing data"
    else {
      this.loggingIn = true
      const email = loginForm.value.email
      const password = loginForm.value.password
      this.authService.login(email, password)
        .then( (resolve: string) => {
          this.errorMessage = resolve
          loginForm.resetForm()
          this.loggingIn = false
        })
    }
  }
}