const { expect } = require('@wdio/globals')
const LoginPage = require ('../pages/login.page')
describe('Demo tests', () => {
    it('Login test', async () => {

        browser.url('https://the-internet.herokuapp.com/login')
        await LoginPage.login('tomsmith','SuperSecretPassword!')
        await LoginPage.checkMessage('logged into a secure area!')

        /*await $('#username').setValue('tomsmith')
        await $('#password').setValue('SuperSecretPassword!')
        await $('button[type="submit"]').click()
        const dialog = await $('#flash')
        await expect(dialog).toHaveText(expect.stringContaining(' logged into a secure area!'))*/
    })
    
})