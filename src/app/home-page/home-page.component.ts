import { HttpService } from './../core/http/http.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private httpService: HttpService,
    private router: Router
    ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      country: [null, Validators.required],
      subject: [null, Validators.required]
    });
  }

  onSubmit() {
    if(this.form.valid) {
      this.httpService.submitContact(this.form.value).subscribe(
        success => this.router.navigate(['/submit']),
        error => console.log(error),
        //() => console.log('request completo')
      )
      console.log('foi')
    } else {
      this.checkError();
      console.log('abrir modal')
    }
  }

  checkError() {
    Object.keys(this.form.controls).forEach(field => {
      const control = this.form.get(field);
      control.markAsTouched();
    })
  }

}
