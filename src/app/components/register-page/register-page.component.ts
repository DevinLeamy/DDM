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
    else if (registerForm.invalid) {
      this.errorMessage = "Enter missing data"
      return
    }
    const username = registerForm.value.username
    const email = String(registerForm.value.email).toLowerCase()
    const password = registerForm.value.password
    const reEnteredPassword = registerForm.value.reEnteredPassword
    if (password !== reEnteredPassword) {
      this.errorMessage = "Passwords do not match"
      return
    }
    if (!this.isValidEmail(email)) {
      this.errorMessage = "Email is invalid"
      return 
    } 
    if (!this.passwordIsSafe(password)) {
      this.errorMessage = "Insecure password"
      alert("Password must contain:\n-One capital letter\n-One lowercase letter\n-One special character\n-One number\n-At least 8 characters")
      return
    }
    this.registering = true
    this.authService.register(username, email, password)
      .then( (resolve: string) => {
        this.errorMessage = resolve
        this.registering = false
      })
  }
  //Checks if password is safe
  passwordIsSafe(password: string) {
    // const regex = /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8,}$/
    // return regex.test(password)
    return true
  }

  //Checks if email syntax is correct
  isValidEmail(email: string) {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return regex.test(email);
  }
}
