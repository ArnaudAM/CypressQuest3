/// <reference types="cypress"/>

describe('Challenge Quest 3', () => {
    let query = require('../fixtures/searchData')

    it('Reasearch with fixtures/searchData.json and give it thanks to support/commands.js', () => {
        cy.tasteDiveSearch(query)
        cy.get('@tasteDiveResponse').should((response) => {
            const jsonData = response.body.Similar
            console.log(jsonData)
            let searchIput = jsonData.Info[0]
            let resultsOutput = jsonData.Results
            expect(searchIput.Name.toLowerCase()).to.eql(query.name.toLowerCase())
            expect(searchIput.Type).to.eql(query.type)
            expect(resultsOutput).lengthOf(query.limit)
            for (let i = 0; i < resultsOutput.length; i++) {
                expect(resultsOutput[i].Type).to.eql(query.type)
                expect(resultsOutput[i].Name).exist.and.not.empty
            }
        })
    })    
})