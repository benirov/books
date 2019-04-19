import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-modal-category',
  templateUrl: 'modal-category.html',
})
export class ModalCategoryPage implements OnInit {

  constructor(public modalController: ModalController,public navParams: NavParams, public viewController: ViewController) 
  {
    this.closeModalCategory;
   }

  ngOnInit() {
    console.table(this.navParams);
    
  }

  

  closeModalCategory() {
    
    this.viewController.dismiss();
  }
}