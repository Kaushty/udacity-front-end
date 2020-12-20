import { handleSubmit } from '../src/client/js/clickHandler'

describe('Click Handler function',() => {
    it('Passing an click event', () =>{
        // const inputURL = 'https://timesofindia.indiatimes.com/videos/international/us-terminates-relationship-with-who-president-trump/videoshow/76101808.cms'
        const event = new Event('click')

        expect(handleSubmit(event)).toEqual(false)
    })
})