import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams, ViewController } from 'ionic-angular';
import { ModalCategoryPage } from '../modal-category/modal-category';

@Component({
  selector: 'page-modal-filter',
  templateUrl: 'modal-filter.html'
})
export class ModalFilterPage implements OnInit {

  constructor(
    public modalController: ModalController,
    public navParams: NavParams,
    public viewController: ViewController
  ) {this.closeModalFilter }

  ngOnInit() {
    console.table(this.navParams);
    console.log("angular");
    
  }

  closeModalFilter() {
    
    this.viewController.dismiss();
  }

  public listCategory(){ var modalPage = this.modalController.create(ModalCategoryPage); modalPage.present(); }
}