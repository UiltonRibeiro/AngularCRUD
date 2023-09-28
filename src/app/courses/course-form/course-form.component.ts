import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { CoursesService } from './../services/courses.service';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent {

  form: FormGroup;

  constructor(private formBuilder:FormBuilder,
    private service: CoursesService,
    private snackBar: MatSnackBar,
    private location: Location){
    this.form = this.formBuilder.group({
      name: [null],
      categoria: [null]
    });
  }

  onSubmit(){
    this.service.save(this.form.value)
    .subscribe(result => this.onSuccess(), error => this.onError());
  }

  onCancel(){
    this.location.back();
  }

  private onSuccess(){
    this.snackBar.open('Sucesso ao Salvar','',{duration: 3000});
    this.location.back();
  }

  private onError(){
    this.snackBar.open('Erro ao salvar Curso','',{duration: 3000});
  }

}
