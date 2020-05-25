import { Component } from "@angular/core"
import { NgForm } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication'

@Component({
  selector: "app-register-page",
  templateUrl: "register-page.component.html",
  styleUrls: ["register-page.component.css"]
})
export class RegisterPageComponent {

  constructor(private authService: AuthenticationService) {}

  register(registerForm: NgForm) {
    if (!registerForm.invalid) {
      const username = registerForm.value.username
      const email = registerForm.value.email
      const password = registerForm.value.password
      const reEnteredPassword = registerForm.value.reEnteredPassword
      if (password != reEnteredPassword) registerForm.resetForm()
      else this.authService.register(username, email, password)
    }
  }

  //Not used
  passwordsMatch(registerForm : NgForm) {
    const password = registerForm.value.password
    const reEnteredPassword = registerForm.value.reEnteredPassword
    console.log(password == reEnteredPassword)
    return password == reEnteredPassword
  }
}
