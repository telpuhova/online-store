import { Injectable } from '@angular/core';
import { Album } from './album.model';
import { ALBUMS } from './mock-album';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Injectable()
export class AlbumService {
  albums: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
  this.albums = database.list('albums');
} // makes firebase application instance available for our service to use as soon as the service is instantiated.

  getAlbums() {
    return this.albums;
  }

  addAlbum(newAlbum: Album) {
    this.albums.push(newAlbum);
  }

  getAlbumById(albumId: number) {
    // for (var i = 0; i<= ALBUMS.length - 1; i++) {
    //   if (ALBUMS[i].id === albumId) {
    //     return ALBUMS[i];
    //   }
    // }
  }

}
