import {
  Component,
  OnInit,
  EventEmitter,
  Input,
  Output,
  Renderer2,
} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  @Input() error: string | null;
  @Output() submitEM = new EventEmitter();

  form: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(
    private authService: AuthService, 
    private renderer: Renderer2,
    private router: Router) {}

  ngOnInit() {
    this.renderer.selectRootElement('#username').focus();
  }

  submit() {
    if (this.form.valid) {
      this.authService
        .login(this.form.value.username, this.form.value.password)
        .subscribe(
          () => {
            this.error = '';
            this.navegateToPage();
          },
          (err) => {
            const e: string = err.error.message.toString();
            this.error = e.startsWith('.') ? 'Credenciales Incorrectas' : e;
          }
        );
    }
  }

  private navegateToPage() {
    this.router.navigate(['/home'])
  }
}
