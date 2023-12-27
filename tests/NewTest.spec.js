const {test}=require('@playwright/test');

test.only('New test',async ({page})=>{


   await page.goto("https://rahulshettyacademy.com/loginpagePractise/") ;
   await page.locator("#username").fill("rahulshettyacademy");
   await page.locator("#password").fill("learning");
   await page.locator("#signInBtn").click();
   
   await page.pause();
})