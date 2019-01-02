import {Quote} from "../data/quote.interface";

export class QuotesService {
    public favoriteQuotes: Quote[] = [];

    addQuoteToFav(quote: Quote) {
      this.favoriteQuotes.push(quote);
      console.log(this.favoriteQuotes);
    }

    removeQuoteFromFav(quote: Quote) {
      // @ts-ignore
      const position = this.favoriteQuotes.findIndex((quoteEl: Quote) => {
        return quoteEl.id = quote.id;
      });
      this.favoriteQuotes.splice(position, 1);
    }

    getFavoriteQuotes() {
      return this.favoriteQuotes.slice();
    }

    isQuoteFavorite(quote: Quote) {
      return this.favoriteQuotes.find((quoteEl: Quote) => {
        return quoteEl.id === quote.id;
      });
    }
}
