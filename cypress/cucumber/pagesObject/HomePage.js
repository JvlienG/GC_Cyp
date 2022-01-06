import { reject, resolve } from "bluebird"

class HomePage { 


    isVisible(){
        new Promise((resolve, reject) => {
            cy.get('.content').should('be.visible').then( state => {
                                                        resolve(state)
                                                    }).catch(() => reject(false))
        })
    }

    goTo(){
        cy.visit('/')
    }

    returnTo(){
        logo = cy.get('.dl_header_menu_v2__logo__img')
        logo.click()
    }

    isHomePage(){
        if(cy.url().contains('translator')){
            return true
        }
        return false
    }

    isWelcomeDisplayed(){
        /*if(this.isVisible().then()){
            cy.log("Element Visible")
            return true
        }
        cy.log("Element not Visible")
        return false*/
        /*const test = "non valide"
        cy.get('.content').then($welcome => {
            if($welcome.is(':visible')){
                test = "validé"
            }else{
                return false
            }
        })

        cy.log(test)*/
        cy.get('.content').should('be.visible')
    }


}

export default HomePage