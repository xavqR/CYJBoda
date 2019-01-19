import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from '../home/welcome.component';
import { ContactComponent } from '../contact/contact.component';
import { InformacionComponent } from '../informacion/informacion.component';
import { ConfirmarAsistenciaComponent } from '../confirmar/confirmar-asistencia.component';
import { ComollegarComponent } from '../comollegar/comollegar.component';
import { MusicaComponent } from '../musica/musica.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: 'home', component: WelcomeComponent },
            { path: 'informacion', component: InformacionComponent },
            { path: 'comollegar', component: ComollegarComponent },
            { path: 'confirmar', component: ConfirmarAsistenciaComponent },
            { path: 'musica', component: MusicaComponent },
            { path: 'contact', component: ContactComponent },
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: '**', redirectTo: 'home', pathMatch: 'full' }
        ]),
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
