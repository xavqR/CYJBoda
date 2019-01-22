import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Music } from 'src/domain/music';
import { MusicServiceInterface } from './music.service-interface';

@Injectable({
  providedIn: 'root'
})
export class MusicService implements MusicServiceInterface {

  constructor(private angularFirestore: AngularFirestore) { }

  public getAllMusic(): AngularFirestoreCollection<Music>  {
    return this.angularFirestore.collection<Music>('musica', ref => {
              return ref.orderBy('cancion', 'desc');
    });
  }

  public filterMusic(music: Music[], filter: string): Music[] {
      let filteredMusic = [];

      if (filter) {
          filteredMusic = music.filter((musicReg: Music) => {
            const search = filter.toLocaleLowerCase();
            const values = Object.values(musicReg);
            let flag = false;
            values.forEach((val) => {
              if (typeof val === 'string' && val.toLocaleLowerCase().indexOf(search) > -1) {
                  flag = true;
                  return;
              }
            });
            if (flag) {
              return musicReg;
            }
          });
      } else {
        filteredMusic = music;
      }

      return filteredMusic;
  }

}
