const {test,request,expect}=require('@playwright/test');
const loginPayload={userEmail: "rohitdongare1999@gmail.com", userPassword: "Playwright@1234"}

test.beforeAll(async()=>
{
    const apiContext=await request.newContext(); 
    const loginResponse=await apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
{
    data:loginPayload
})
expect(loginResponse.ok()).toBeTruthy();
const loginResponseJson=loginResponse.json();
const token=loginResponseJson.token;
console.log(token);


}); 


test.beforeEach(()=>{})

test('WEB API',async({page})=>{

})
