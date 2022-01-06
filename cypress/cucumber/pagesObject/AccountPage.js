class AccountPage{

    goTo(){
        cy.get('#menuTop > .nav > :nth-child(2) > :nth-child(1)').click()
    }

    isAccountPage(){
        cy.get('.blockAccountPreview > h2').should('be.visible')
    }

    /*--------------------------------------*/

    getEmail(email){
        /*cy.get('#client_email').type(email)*/
        cy.readFile('cypress/fixtures/Donnes.json').then(data => {
            for (const datas of data.creationDatas) { 
                cy.get('#client_email').type(datas.email)
            }
        })
    }

    getPassword(pwd){
        /*cy.get('#client_password').type(pwd)*/
        cy.readFile('cypress/fixtures/Donnes.json').then(data => {
            for (const datas of data.creationDatas) { 
                cy.get('#client_password').type(datas.password)
            }
        })
    }

    getCheckPassword(cPwd){
        /*cy.get('#client_checkpassword').type(cPwd)*/
        cy.readFile('cypress/fixtures/Donnes.json').then(data => {
            for (const datas of data.creationDatas) { 
                cy.get('#client_checkpassword').type(datas.password)
            }
        })
    }

    getNickname(nkName){
       /* cy.get('#client_nickname').type(nkName)*/
       cy.readFile('cypress/fixtures/Donnes.json').then(data => {
        for (const datas of data.creationDatas) { 
            cy.get('#client_nickname').type(datas.nickname)
        }
    })
    }

    getGender(sx){
        /*if(sx == "femme"){
            cy.get('#client_civility').select(1)
        }else if (sx == "homme"){
            cy.get('#client_civility').select(2)
        }*/

        cy.readFile('cypress/fixtures/Donnes.json').then(data => {
            for (const datas of data.creationDatas) { 
                if(datas.genre == 'f')
                    cy.get('#client_civility').select(1)
                else if (datas.genre =='h')
                    cy.get('#client_civility').select(2)

            }
        })
    }

    getLastName(lastName){
        /*cy.get('#client_name').type(lastName)*/

        cy.readFile('cypress/fixtures/Donnes.json').then(data => {
            for (const datas of data.creationDatas) { 
                cy.get('#client_name').type(datas.nom)
            }
        })
    }

    getFirstName(firstName){
        /*cy.get('#client_firstname').type(firstName)*/
        cy.readFile('cypress/fixtures/Donnes.json').then(data => {
            for (const datas of data.creationDatas) { 
                cy.get('#client_firstname').type(datas.prenom)
            }
        })
    }

    getCellPhone(cell){
        /*cy.get('#client_gsm').type(cell)*/

        cy.readFile('cypress/fixtures/Donnes.json').then(data => {
            for (const datas of data.creationDatas) { 
                cy.get('#client_gsm').type(datas.portable)
            }
        })
    }

    getDateOfBirth(birthday){
        /*cy.get('#client_birthdate').type(birthday)*/
        cy.get('#client_birthdate').clear()
        cy.readFile('cypress/fixtures/Donnes.json').then(data => {
            for (const datas of data.creationDatas) { 
                cy.get('#client_birthdate').type(datas.birthDate)
            }
        })
    }

    getAddress(address){
        /*cy.get('#client_address').type(address)*/

        cy.readFile('cypress/fixtures/Donnes.json').then(data => {
            for (const datas of data.creationDatas) { 
                cy.get('#client_address').type(datas.adresse)
            }
        })
    }

    getZipCode(zCode){
        /*cy.get('#client_zip').type(zCode)*/

        cy.readFile('cypress/fixtures/Donnes.json').then(data => {
            for (const datas of data.creationDatas) { 
                cy.get('#client_zip').type(datas.zipCode)
            }
        })
    }

    getCity(city){
        /*cy.get('#client_city').type(city)*/
        cy.readFile('cypress/fixtures/Donnes.json').then(data => {
            for (const datas of data.creationDatas) { 
                cy.get('#client_city').type(datas.city)
            }
        })
    }

    /*--------------------------------------*/

    createAccount(){
        const email = "test130@yopmail.com"
        const password = "Cacahuette9102"
        const cPassword = "Cacahuette9102"
        const nickname = "azertyuiopmlkjhgfdsqwxcvbn"
        const gender = "homme"
        const lastName = "Guiral"
        const firstName = "Julien"
        const cellPhone = "0607080910"
        const dateOfBirth = "09/09/1998"
        const address = "4 avenue laurent Cely"
        const zipCode = "92600"
        const city = "Asnieres sur seine"

        this.getEmail(email)

        cy.get(':nth-child(2) > .blockPart > .form-horizontal > fieldset > .text-center > .col-xs-12 > .buttonDefault').click()

        this.getPassword(password)
        this.getCheckPassword(cPassword)
        this.getNickname(nickname)
        this.getGender(gender)
        this.getLastName(lastName)
        this.getFirstName(firstName)
        this.getCellPhone(cellPhone)
        this.getDateOfBirth(dateOfBirth)
        this.getAddress(address)
        this.getZipCode(zipCode)
        this.getCity(city)

        cy.get('#cgv').click()

        cy.get('.buttonDefault').click()     

    }

    createdAccount(){}

    

}

export default AccountPage