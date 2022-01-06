class ArticlePage{
    

    searchArticle(wSearch){
        /*search = wSearch
        cy.get('#search').type(search)*/

        cy.readFile('cypress/fixtures/Donnes.json').then(data => { 
            for (const datas of data.rechercheDatas) {
                cy.get('#search').type(datas.search)
                cy.get('#search').type('{enter}')
            }
        })
    }

    isSearchPage(){
        cy.url().should('contain.text', search)
    }
}

export default ArticlePage