import { Component, OnInit } from '@angular/core';
import {  AngularFirestoreCollection } from '@angular/fire/firestore';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Music } from 'src/domain/music';
import { MusicService } from '../services/music.service';

@Component({
  selector: 'app-musica',
  templateUrl: './musica.component.html',
  styleUrls: ['./musica.component.scss']
})

export class MusicaComponent implements OnInit {

  form: FormGroup;
  submitted: Boolean = false;
  public music: Music[] = [];
  public filteredMusic: Music[];
  public musicCollection: AngularFirestoreCollection<Music>;

  private _filter: string;
  public get filter(): string {
      return this._filter;
  }
  public set filter(value: string) {
      this._filter = value;
      this.filteredMusic = this.musicService.filterMusic(this.music, this._filter);
  }

  constructor(private formBuilder: FormBuilder, private musicService: MusicService) { }

  public ngOnInit(): void  {
    this.createForm();
     this.musicCollection = this.musicService.getAllMusic();
     this.musicCollection.valueChanges().subscribe( music => {
      this.music = music as Music[];
      this.filteredMusic = this.music;
     });
  }

  private createForm(): void  {
    this.form = this.formBuilder.group({
      artista: ['', Validators.required],
      cancion: ['', Validators.required]
    });
  }

  public onSubmit(): void  {
    this.submitted = true;

    if (!this.form.invalid) {
      const {artista, cancion} = this.form.value;
      this.musicCollection.add({ artista: artista, cancion: cancion });
      this.form.reset();
      this.submitted = false;
    }
  }
}
