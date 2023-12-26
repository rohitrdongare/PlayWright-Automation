const {test,expect}=require('@playwright/test')

test('first Browser context Plywright test', async ({browser})=>{

    const context=await browser.newContext();
    const page=await context.newPage();
    const cardTitles=page.locator(".card-body a");

    const userName=page.locator("#username");
    const password=page.locator("[type='password']")
    const signInBtn= page.locator("#signInBtn");

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    console.log(await page.title());

    await page.locator("#username").fill("learning"); //wrong username
    await page.locator("[type='password']").fill("learning");
    await page.locator("#signInBtn").click();  

    console.log(await page.locator("[style*=block]").textContent());

    // await expect(page.locator("[style*=block]")).toContainText('Incorrect'); //fails 
    await expect(page.locator("[style*=block]")).toContainText('Incorrect'); //passed

    await userName.fill(""); //wiping old data
    await userName.fill("rahulshettyacademy");
    await signInBtn.click();  //passed test

    // await page.locator(".card-body a").textContent(); //fails and takes all products

    // console.log(await page.locator(".card-body a").first().textContent());
    // console.log(await page.locator(".card-body a").last().textContent());
    // console.log(await page.locator(".card-body a").nth(2).textContent());

    //grab all product text

    // console.log(await cardTitles.allTextContents()); //[] empty list

    console.log(await page.locator(".card-body a").first().textContent());
    console.log(await cardTitles.allTextContents());

});

test.only('UI Controls', async({page})=>{
await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
const userName=page.locator("#username")
const signInBtn=page.locator("#signInBtn");
const dropdown=page.locator("select.form-control");
const documentLink=page.locator("[href='https://rahulshettyacademy.com/documents-request']");
await dropdown.selectOption("consult");  //consult is the value from inspect


await page.locator(".radiotextsty").last().click();
await page.locator("#okayBtn").click();

console.log(await page.locator(".radiotextsty").last().isChecked())
await expect(page.locator(".radiotextsty").last()).toBeChecked();

await page.locator("#terms").click();
console.log(page.locator("#terms").isChecked())

await page.locator("#terms").uncheck();
expect( await page.locator("#terms").isChecked()).toBeFalsy(); //test will because it is already unchecked 
// expect( await page.locator("#terms").isChecked()).toBeTruthy(); // test will fail because it is failed i cant truthy

// how to know Link is blinkking or not , for that check attribute value

await expect(documentLink).toHaveAttribute("class", "blinkingText"); //pass






// await page.pause();










// await page.pause();






})
