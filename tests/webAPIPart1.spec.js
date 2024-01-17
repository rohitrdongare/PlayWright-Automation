const {test,expect, request}=require('@playwright/test');
const loginPayload ={userEmail: "rohitdongare1999@gmail.com", userPassword: "Playwright@1234"} //json data as js object
let token;



test.beforeAll(async()=>{
const apiContext=await request.newContext();
const loginResponse=await apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
{
    data:{userEmail: "rohitdongare1999@gmail.com", userPassword: "Playwright@1234"}
})

expect(loginResponse.ok()).toBeTruthy()//to make sure it did not failed

const loginResponseJson=await loginResponse.json();

const token =await loginResponseJson.token;//to get token from json(object) (object.token)
console.log(token)
});



test.beforeEach(()=>{

})

test.only('Client App Login',async ({page})=>{
   
//providing value of token to browser
    page.addInitScript(value =>{
    window.localStorage.setItem('token',value);
    },token)
    
    const email="";
    const productName="ZARA COAT 3";
    await page.goto("https://rahulshettyacademy.com/client/")
    const products=page.locator(".card-body");

    // await page.goto("https://rahulshettyacademy.com/client/");
    // await page.locator("#userEmail").fill("rohitdongare1999@gmail.com");
    // await page.locator("#userPassword").fill("Playwright@1234");
    // await page.locator("#login").click();
    // await page.waitForLoadState('networkidle')

    

    const titles=await page.locator(".card-body b").allTextContents();
    console.log(titles);
    const count =await products.count();


    for(let i=0;i<count;++i)
    {
        if( await products.nth(i).locator("b").textContent() === productName)
        {
              await products.nth(i).locator("text= Add To Cart").click() ;
              break;
        }

    };

    await page.locator("[routerlink*='cart']").click();
    await page.locator("div li").last().waitFor(); //it will wait products to load , auto wait not works for isVisible()
    const bool=await page.locator("h3:has-text('ZARA COAT 3')").isVisible();
    expect(bool).toBeTruthy()

    await page.locator("text='Checkout'").click();
    await page.locator("div input").nth(1).fill("066");
    await page.locator("div input").nth(2).fill("Rohit Dongare");
    await page.locator("div input").nth(3).fill("Rohit");
    await page.locator("div input").nth(4).fill("rohitdongare1999@gmail.com");
    await page.locator("[placeholder*='Country']").pressSequentially("ind")

    const dropdown = page.locator(".ta-results");
    await dropdown.waitFor();
    const optionsCount=await dropdown.locator("button").count();

    for (let i=0;i<optionsCount;++i)
    {
        const text=await dropdown.locator("button").nth(i).textContent();
        if(text===' India')
        {
            await dropdown.locator("button").nth(i).click()
            break;
        }
    }
    await expect(page.locator("div label")).toHaveText(email);
    await page.locator(".action__submit ").click();

    await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");    
    const orderId=await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
    console.log(orderId);
    await page.locator("[routerlink*=myorders]").first().click();
    await page.locator("table").waitFor();
    const rows=await page.locator("tbody tr");

    for(let i=0; i<await rows.count(); ++i)
    {
        const rowOrderId=await rows.nth(i).locator("th").textContent();
        if(orderId.includes(rowOrderId))
        {
            await rows.nth(i).locator("button").first().click();
            break;
        }
    }

    const orderDetails=await page.locator(".col-text").textContent();
    await expect(orderId.includes(orderDetails)).toBeTruthy();

    












})