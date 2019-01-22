import { AngularFirestoreCollection } from '@angular/fire/firestore';
import { Music } from 'src/domain/music';

export interface MusicServiceInterface {
    getAllMusic(filterByName: string, orderBy: string): AngularFirestoreCollection<Music>;
    filterMusic(music: Music[], cancion: string): Music[];
}
