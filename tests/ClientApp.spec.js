const {test}=require('@playwright/test');

test('client app ',async ({page})=>{
await  page.goto("https://rahulshettyacademy.com/client/");
//  await page.locator(".forgot-password-link").click();
//  await page.locator("#firstName").fill("Rohit");
//  await page.locator("#lastName").fill("Dongare");
 await page.locator("#userEmail").fill("rohitdongare1999@gmail.com");
 await page.locator("#userPassword").fill("Playwright@1234");
 await page.locator('#login').click();

//  console.log(await page.locator(".card-body b").nth(1).textContent())
//  console.log(await page.locator(".card-body b").allTextContents())   //we can extract all after extracting one 

// await page.waitForLoadState('networkidle')  //works , by using this we can access all elements (sometimes flaky and doesnt works)
// console.log(await page.locator(".card-body b").allTextContents())  


console.log(await page.locator(".card-body b").last().waitFor()); // not working

});

