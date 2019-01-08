import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from '../home/welcome.component';
import { ContactComponent } from '../contact/contact.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: 'home', component: WelcomeComponent },
            { path: 'contact', component: ContactComponent },
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: '**', redirectTo: 'home', pathMatch: 'full' }
        ]),
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
