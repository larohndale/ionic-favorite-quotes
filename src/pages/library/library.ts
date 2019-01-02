import {Component, OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import quotes from "../../data/quotes";
import {Quote} from "../../data/quote.interface";
import {QuotesPage} from "../quotes/quotes";

@IonicPage()
@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage implements OnInit{
  quoteCollection: {category: string, quotes: Quote[], icon: string}[];
  quotesPage = QuotesPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit(): void {
    this.quoteCollection = quotes;
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LibraryPage');
  }

}
