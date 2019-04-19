import { Component } from '@angular/core';
import { NavController, ModalController} from 'ionic-angular';
import { FTP } from '@ionic-native/ftp/ngx';
import * as books  from '../../assets/data/data.js';
import { ModalFilterPage } from '../modal-filter/modal-filter';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    books: Observable<any>;
    listBooks: any[] = [];
  

  constructor(public navCtrl: NavController, private ftp: FTP, public modalController: ModalController, public httpClient: HttpClient) {
    this.search;
    this.books = this.httpClient.get('http://localhost:8080/api/books/0/10');
    this.books
    .subscribe(data => {  
      
      this.listBooks = data['book'];
      console.log(this.listBooks);
    })
    
    
  }

  search(event:any)
  {
    console.log("value", event.value);
  }

  public presentModalFilter(){ var modalPage = this.modalController.create(ModalFilterPage); modalPage.present(); }

  // async presentModalFilter() 
  // {
  //   const modal = await this.modalController.create({
  //     Component: ModalFilterPage
  //   });

  //   modal.present();
  // }
}
