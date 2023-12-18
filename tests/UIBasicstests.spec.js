const {test}=require('@playwright/test')

test.only('first playwright test with browser ficture', async({browser,page})=>{
const context= await browser.newContext();
await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
});

test('Page playwright test', async({page})=>{
// const context=browser.newContext();
await page.goto("https://google.com")
});

