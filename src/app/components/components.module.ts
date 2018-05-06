import { NgModule } from '@angular/core';
import { SigninComponent } from './signin/signin.component';
import { RegisterComponent } from './register/register.component';
@NgModule({
	declarations: [SigninComponent,
    RegisterComponent],
	imports: [],
	exports: [SigninComponent,
    RegisterComponent]
})
export class ComponentsModule {}
