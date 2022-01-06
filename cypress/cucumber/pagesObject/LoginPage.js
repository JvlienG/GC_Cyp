class LoginPage{
    goTo(){
        cy.visit('/connexion.html')
    }

    isLoginPage(){
        /*const url = cy.url().then(currentUrl => {
                        const getUrl = currentUrl
                        return getUrl
                
                    })
        if(url == "https://www.gamecash.fr/connexion.html"){
            cy.log(url)
            cy.log('URL CORRECT')
            return true
        }
        cy.log('URL INCORRECT')
        return false*/

        cy.get('#login').should('be.visible')
    }

    login(usr,pwd){
        /*const username = usr
        const password = pwd*/

        cy.get('#login').clear()
        cy.get('#password').clear()

        /*cy.get('#login').type(username)
        cy.get('#password').type(password)*/
        cy.readFile('cypress/fixtures/Donnes.json').then(data => {
            for (const datas of data.connexionDatas) { 
                cy.get('#login').type(datas.login)
                cy.get('#password').type(datas.password)
            }
        })

        cy.get(':nth-child(1) > .blockPart > .form-horizontal > fieldset > .text-center > .col-xs-12 > .buttonDefault').click()
    }
}

export default LoginPage