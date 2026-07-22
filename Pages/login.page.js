class LoginPage{
    constructor(page){
        this.usernametextfield= page.getByPlaceholder("Username")
        this.userpasswordtextfield= page.getByPlaceholder("Password")
        this.loginButton= page.getByRole("button",{name:'Login'})
    }
    async enterUsername(username){
        await this.usernametextfield.fill(username)
    }
    async enterPassword(password){
        await this.userpasswordtextfield.fill(password)
    }
    async clickLogin(){
        await this.loginButton.click()
    }

    async loginProcess(username,password){
        await this.enterUsername(username)
        await this.enterPassword(password)
        await this.clickLogin()
    }
}
export default LoginPage