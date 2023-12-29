const {test}=require('@playwright/test');

test('Playwright Special Locators',async ({page})=>{

    await page.goto("https://rahulshettyacademy.com/angularpractice/");
    await page.getByLabel("Check me out if you Love IceCreams!").click();
    await page.getByLabel("Employed").check()
    await page.getByLabel("Gender").selectOption("Female");

    await page.getByPlaceholder("Password").fill("abc123");
    await page.getByRole('button',{name:'Submit'}).click();
    await page.getByText("Success! The Form has been submitted successfully!.").isVisible();
    await page.getByRole('link',{name:'Shop'}).click()

    await page.locator("app-card").filter({hasText:'Nokia Edge'}).getByRole('button').click(); // if only one button, then no need to provide name/text of that button

    await page.locator(".nav-link").nth(2).click()


    await page.pause()
});