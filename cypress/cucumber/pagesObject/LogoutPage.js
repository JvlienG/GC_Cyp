class LogoutPage{

    logout(){
        cy.get('.disconnection').click()
    }

}

export default LogoutPage