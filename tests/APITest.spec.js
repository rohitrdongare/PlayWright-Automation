const {test,expect,request} =require("@playwright/test");

test('Get Users',async({request})=>{
    
const response=await request.get("https://reqres.in/api/users?page=2")
console.log(await response.json());
expect(response.status()).toBe(200);
})

test('Create Users',async({request})=>{

})

test('Update Users',async({request})=>{

})

test('Delete Users',async({request})=>{

})
