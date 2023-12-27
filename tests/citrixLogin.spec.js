const {test}=require('@playwright/test');

test.only('3M Citrix log in',async ({page})=>{

    await page.goto("https://3mcitrix.mmm.com/logon/LogonPoint/tmindex.html");
    // await page.waitForLoadState('networkidle')
    await page.locator("#loginBtn").click();
    await page.locator("#login").fill("mmm\ad0j1zz");
    await page.locator("#passwd").fill(""); //enetr passowrd
    await page.locator("#loginBtn").click();
    await page.waitForLoadState('networkidle');

    await page.pause()
})