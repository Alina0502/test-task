import { ElementFinder, ProtractorBrowser } from 'protractor';

export interface LocatorData {
  name: string;
  locator: ElementFinder;
  browser?: ProtractorBrowser;
}

export interface ClickableElement extends LocatorData {}

export interface TextField extends LocatorData {}

