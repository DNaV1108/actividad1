import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit{

  userForm: FormGroup;

  constructor (private cookieService: CookieService,private formBuilder: FormBuilder) {}

  public onSubmit() {
    // obtiene los valores del formulario
    const formValues = this.userForm.value;

    // guarda los datos en cookies
    this.cookieService.set('formValues', JSON.stringify(formValues));

    alert("Datos enviados");
  }

  ngOnInit() {
    // crea el formulario con los campos correspondientes
    this.userForm= this.formBuilder.group({
      correo: '',
      asunto: '',
      mensaje: ''
    })

    // obtiene los datos de las cookies y pone los valores si los datos existen en las cookies
    const formValues = JSON.parse(this.cookieService.get('formValues'));
    if (formValues) {
      this.userForm.setValue(formValues);
    }
  }

}
