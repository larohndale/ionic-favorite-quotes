import {Component} from "@angular/core";
import {FavoritesPage} from "../favorites/favorites";
import {LibraryPage} from "../library/library";

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  favoritesPage = FavoritesPage;
  libraryPage = LibraryPage;
}
