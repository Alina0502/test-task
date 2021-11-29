import { PageActions } from '../helpers/page-actions';
import {
  SearchField ,
  SearchList ,
  ContinueButton ,
  AppleIdButton ,
  SearchListItem ,
  Message , AddToWishListButton ,
} from '../locators/epic-games-locators';


export class EpicGamesPage extends PageActions {

  async fillSearchField(text: string): Promise<void> {
    await this.fillElementWithText(new SearchField() , text);
  }
  
  async clearSearchField(): Promise<void> {
    await this.fillElementWithText(new SearchField() , '');
    await this.click(new SearchField());
  }

  async waitUntilSearchListIsVisible(): Promise<void> {
    await this.waitElementVisibility(new SearchList());
  }

  async waitUntilListItemIsNotPresent(): Promise<void> {
    await this.waitElementIsNotPresent(new SearchListItem());
  }

  async waitMessage(text: string): Promise<void> {
    await this.waitElementVisibility(new Message(text));
  }
  
  async waitMessageIsNotVisible(text: string): Promise<void> {
    await this.waitElementIsNotPresent(new Message(text));
  }

  async clickGameItem(): Promise<void> {
    await this.click(new SearchListItem());
  }

  async clickContinueButton(): Promise<void> {
    await this.click(new ContinueButton());
  }
  
  async clickAddToWishListButton(): Promise<void> {
    await this.click(new AddToWishListButton());
  }
  
  async waitUntilAppleIdIsVisible(): Promise<void> {
    await this.waitElementVisibility(new AppleIdButton());
  }

}