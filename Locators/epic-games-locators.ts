import { by, element, ElementFinder, $ } from 'protractor';
import { ClickableElement, TextField } from './locators';

export class SearchField implements TextField {
  name = '[Search field]';
  locator: ElementFinder = $('[placeholder="Поиск"]');
}

export class SearchList implements ClickableElement {
  name = `[Search list]`;
  locator: ElementFinder = $('[data-component="SearchResultsDropdownLayoutTooltip"]');
}

export class Message implements ClickableElement {
  name = `[message with ${this.text}]`;
  locator: ElementFinder = element(by.cssContainingText('[data-component="Message"]', this.text));

  constructor(private text: string) {}
}

export class AddToWishListButton implements ClickableElement {
  name = `[Add To Wish List Button]`;
  locator: ElementFinder = element(by.xpath(`//span[contains(@data-component, "WishlistCTALabel")]/../../button`));
}

export class SearchListItem implements ClickableElement {
  name = `[Search list]`;
  locator: ElementFinder = $('li[data-component="SearchResultsDropdownListItem"] a[href="/store/ru/p/red-dead-redemption-2"]');
}

export class ContinueButton implements ClickableElement {
  name = `[Continue] button`;
  locator: ElementFinder = element(by.cssContainingText('button', 'Продолжить'));
}

export class AppleIdButton implements ClickableElement {
  name = `[Apple ID] button`;
  locator: ElementFinder = $('#login-with-apple');
}