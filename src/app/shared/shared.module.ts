import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { AppMaterialModule } from './app-material/app-material.module';
import { CategoryPipe } from './pipes/category.pipe';



@NgModule({
  declarations: [
    SharedComponent,
    ErrorDialogComponent,
    CategoryPipe
  ],
  imports: [
    CommonModule,
    AppMaterialModule
  ],
  exports: [ErrorDialogComponent]
})
export class SharedModule { }
