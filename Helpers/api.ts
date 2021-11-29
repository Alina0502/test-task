const request = require('request').defaults({ jar: true });

type ImageData = {
  hdurl: string;
  explanation: string;
}

export class api{
async getImageNasa(date: string, hd: string): Promise<ImageData> 
{
  return new Promise((resolve, reject) => {
    request.get(
      {
        url: `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}&hd=${hd}`,
        headers: {
          // eslint-disable-next-line @typescript-eslint/naming-convention
          'Content-type': 'application/json',
        },
      },
      (error:any, response:any, body:any) => {
        const info = JSON.parse(body);
        if (!error && response.statusCode === 200) {
          resolve({ hdurl: info.hdurl, explanation: info.explanation });
        } else {
          console.log(info);
          reject({ error: error, status: response.statusCode });
        }
      },
    );
  });
}

async writeToPastebin(api_dev_key: string, api_paste_code: string): Promise<object> {
  return new Promise((resolve , reject) => {
    request.post({
      url: `https://pastebin.com/api/api_post.php` , formData: {api_dev_key , api_paste_code , api_option: 'paste'} ,
    } , (error:any , response:any , body:any) => {
      if (!error && response.statusCode === 200) {
        resolve({body});
      } else {
        reject({error: error});
      }
    } ,);
  });
}}