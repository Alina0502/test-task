import {browser , ExpectedConditions , ProtractorBrowser} from 'protractor';
import {ClickableElement , LocatorData , TextField} from '../Locators/locators';

export class PageActions {
  private currentBrowser: ProtractorBrowser;
  private defaultTimeout = 30000;

  constructor(userBrowser?: ProtractorBrowser) {
    if (!userBrowser) {
      this.currentBrowser = browser;
    } else {
      this.currentBrowser = userBrowser;
    }
  }


  protected async waitElementIsPresent(element: LocatorData , timeout: number = this.defaultTimeout): Promise<any> {
    return this.currentBrowser.wait(ExpectedConditions.presenceOf(element.locator) , timeout , `Element ${element.name} is not presented`);
  }

  protected async waitElementIsNotPresent(element: LocatorData , timeout: number = this.defaultTimeout): Promise<void> {
    await this.currentBrowser.wait(ExpectedConditions.stalenessOf(element.locator) , timeout , `Element ${element.name} still presented`);
  }

  protected async waitElementVisibility(element: LocatorData , timeout: number = this.defaultTimeout): Promise<void> {
    await this.currentBrowser.wait(ExpectedConditions.visibilityOf(element.locator) , timeout , `The ${element.name} is not visible.`);
  }


  protected async waitElementIsClickable(element: LocatorData , timeout: number = this.defaultTimeout): Promise<void> {
    await this.currentBrowser.wait(ExpectedConditions.elementToBeClickable(element.locator) , timeout , `The ${element.name} is not clickable`);
  }


  protected async click(element: ClickableElement , timeout?: number): Promise<void> {
    await this.waitElementIsPresent(element , timeout);
    await this.waitElementVisibility(element , timeout);
    await this.waitElementIsClickable(element , timeout);

    await element.locator.click();
  }


  protected async fillElementWithText(element: TextField , textToBeTyped: string , print?: boolean): Promise<void> {
    try {
      if (print) {
        console.log(textToBeTyped);
      }
      await this.waitElementVisibility(element);
      await element.locator.clear();
      await element.locator.sendKeys(textToBeTyped);
    } catch (error) {
      throw new Error(`Cannot type text ${textToBeTyped} to the ${element.name}.\n${error}`);
    }
  }
}
