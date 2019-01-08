import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from '../home/welcome.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: 'home', component: WelcomeComponent },
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: '**', redirectTo: 'home', pathMatch: 'full' }
        ]),
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
