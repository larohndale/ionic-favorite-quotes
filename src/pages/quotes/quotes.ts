import {Component, OnInit} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {Quote} from "../../data/quote.interface";
import {QuotesService} from "../../services/quotes.service";

@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit {
  quoteGroup: {category: string, quotes: Quote[], icon: string};
  date = new Date();

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    public alertCtrl: AlertController,
    private quoteService: QuotesService) {}

  ngOnInit(): void {
    this.quoteGroup = this.navParams.data;
  }

  onAddToFavorite(selectedQuote: Quote) {
    const alert = this.alertCtrl.create({
      title: 'Add Quote',
      subTitle: 'Are you sure?',
      message: 'Are you sure want to add the quote?',
      buttons: [
        {
          text: 'Yes, go ahead',
          handler: () => {
            this.quoteService.addQuoteToFav(selectedQuote);
          },
        },
        {
          text: 'No, I changed my mind!',
          role: 'Cancel',
          handler: () => {
            console.log('Cancelled!');
          }
        }
      ]
    });
    alert.present();
  }

  onRemoveFromFav(quote: Quote) {
    this.quoteService.removeQuoteFromFav(quote);
  }

  isFavorite(quote: Quote) {
  return this.quoteService.isQuoteFavorite(quote);
  }

  // ionViewDidLoad() {
  //   this.quoteGroup = this.navParams.data;
  // Add elvis (?) in template to use this approach
  // }

}
