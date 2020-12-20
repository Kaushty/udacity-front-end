import { validateURL } from '../src/client/js/validURL';

describe('Validate URL', () => {
    it('passing a valid URL to check if the URL passed is valid', () => {

        const input = 'https://timesofindia.indiatimes.com/videos/international/us-terminates-relationship-with-who-president-trump/videoshow/76101808.cms'
        expect(validateURL(input)).toEqual(true);
    });
});

describe('Validate URL', () => {
    it('Passing an invalid URL to check if the URL passed is valid', () => {

        const input = '.bbc.co.uk/news/business-52319576'
        expect(validateURL(input)).toEqual(false);
    });
  });