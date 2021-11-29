import {api} from "../Helpers/api";
  
describe('Actions with service: ', () => {
  const Api: api = new api();
  const date='2020-01-01';
  const api_dev_key = 'EUDVrMrK70FVAkTI9grTL47k0eVTrKVs'

  it('Nasa api test spec', async () => {
    const image = await Api.getImageNasa(date, 'true');
    console.log(image);
    const link = await Api.writeToPastebin(api_dev_key, image['explanation']);
    console.log(link);
  });
});