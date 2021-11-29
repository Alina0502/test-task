import { EpicGamesPage } from '../PageObject/epic-games-page.po';
import {  openPage } from '../Helpers/browser';

describe('Actions with service: ', () => {
  const epicGamesPage: EpicGamesPage = new EpicGamesPage();
  const url = 'https://www.epicgames.com';
  const searchText = 'red';
  const textMessage = 'Игра содержит материалы, предназначенные для людей старше';
  

  it('Epic games test spec', async () => {
    await openPage(url);
    await epicGamesPage.fillSearchField(searchText);
    await epicGamesPage.waitUntilSearchListIsVisible();
    await epicGamesPage.clearSearchField();
    await epicGamesPage.waitUntilListItemIsNotPresent();
    await epicGamesPage.fillSearchField(searchText);
    await epicGamesPage.clickGameItem();
    await epicGamesPage.waitUntilListItemIsNotPresent();
    await epicGamesPage.waitMessage(textMessage);
    await epicGamesPage.clickContinueButton();
    await epicGamesPage.waitMessageIsNotVisible(textMessage);
    await epicGamesPage.clickAddToWishListButton();
    await epicGamesPage.waitUntilAppleIdIsVisible

  });
});