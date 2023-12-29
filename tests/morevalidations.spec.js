const {test, expect}=require('@playwright/test')

test.only('popup validations',async ({page})=>{
await page.goto("https://rahulshettyacademy.com/AutomationPractice/")

// await page.goto("https://www.google.com")
// await page.goBack();
// await page.goForward();

await expect(await page.locator("#displayed-text")).toBeVisible(); //check is it visivle or not
await page.pause();
await page.locator("#hide-textbox").click();
await expect(await page.locator("#displayed-text")).toBeHidden();   

//handling javabased Popup
await page.locator("#confirmbtn").click();
await page.on('dialog',dialog=>dialog.accept());

//hover method
await page.locator("#mousehover").hover();
// await page.locator("div a").nth(2).click(0);

//handeling frames
const framePage=await page.frameLocator("#courses-iframe");
await framePage.locator("li a[href*='lifetime-access']:visible").click();

//fetching number

console.log(await framePage.locator(".text h2").textContent())


})