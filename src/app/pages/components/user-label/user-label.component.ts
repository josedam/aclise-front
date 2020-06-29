import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-user-label',
  templateUrl: './user-label.component.html',
  styleUrls: ['./user-label.component.scss']
})
export class UserLabelComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

}
