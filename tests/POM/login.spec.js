import {test} from "@playwright/test"
import LoginPage from "../../Pages/login.page"
import LoginData from "../../testData/loginData.json"

 test('Optimized login feature', async ({page}) => { 
    let loginpage= new LoginPage(page)

    let url=LoginData.url
    let un=LoginData.username
    let pwd=LoginData.password

    await page.goto(url)

   //Approach1: Call POM methods separately
   await loginpage.enterUsername(un)
   await loginpage.enterPassword(pwd)
   await loginpage.clickLogin()
   await page.waitForTimeout(2000)

   //Approach2: Combine and call POM methods
   await loginpage.loginProcess(un,pwd)
      
})