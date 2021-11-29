import { browser} from 'protractor';

export async function openPage(url: string): Promise<any> {
  await browser.waitForAngularEnabled(false);
  await browser.get(url);
}

