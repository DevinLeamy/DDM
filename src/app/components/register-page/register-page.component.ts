import { Component } from "@angular/core"
import { NgForm } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication'

@Component({
  selector: "app-register-page",
  templateUrl: "register-page.component.html",
  styleUrls: ["register-page.component.css"]
})
export class RegisterPageComponent {
  errorMessage: string
  registering: boolean = false;
  constructor(private authService: AuthenticationService) {}

  register(registerForm: NgForm) {
    if (this.registering) return 
    if (!registerForm.invalid) {
      const username = registerForm.value.username
      const email = registerForm.value.email
      const password = registerForm.value.password
      const reEnteredPassword = registerForm.value.reEnteredPassword
      if (password != reEnteredPassword) {
        this.errorMessage = "Passwords do not match"
      } else {
        this.registering = true
        this.authService.register(username, email, password)
          .then( (resolve: string) => {
            this.errorMessage = resolve
            this.registering = false
          })
      }
    } else {
      this.errorMessage = "Enter missing data"
    }
  }

  passwordsMatch(registerForm : NgForm) {
    const password = registerForm.value.password
    const reEnteredPassword = registerForm.value.reEnteredPassword
    console.log(password == reEnteredPassword)
    return password == reEnteredPassword
  }
}
