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

  getAlbumById(albumId: string) {
    return this.database.object('albums/'+ albumId)
  }

  updateAlbum(localUpdatedAlbum) {
    var albumEntryInFirebase = this.getAlbumById(localUpdatedAlbum.$key);
    albumEntryInFirebase.update({
      title: localUpdatedAlbum.title,
      artist: localUpdatedAlbum.artist,
      description: localUpdatedAlbum.description
    }); //update is an AngularFire's built in method
  }

}
