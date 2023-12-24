const {test}=require('@playwright/test');

test.only('client app ',async ({page})=>{
await  page.goto("https://rahulshettyacademy.com/client/");
//  await page.locator(".forgot-password-link").click();
//  await page.locator("#firstName").fill("Rohit");
//  await page.locator("#lastName").fill("Dongare");
 await page.locator("#userEmail").fill("rohitdongare1999@gmail.com");
 await page.locator("#userPassword").fill("Playwright@1234");
 await page.locator('#login').click();

 console.log(await page.locator(".card-body b").nth(1))
//  console.log(await page.locator(".card-body b").allTextContents())


 
 
});