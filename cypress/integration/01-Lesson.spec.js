/// <reference types="cypress"/>

// GET Method
it.skip('Covid-19 API tests : General Stats', () => {
    cy.request('https://corona-virus-stats.herokuapp.com/api/v1/cases/general-stats')
        .then(response => {
            expect(response.body).to.have.property('status')
            expect(response.body).to.have.property('data')
            expect(response.body.data).to.have.property('total_cases')
        })
})

// POST Method
it.skip('ReqRes API Create User test', () => {
    cy.request({
        url: 'https://reqres.in/api/users',
        method: 'POST',
        body: {
            "name": "Mohammed Ali",
            "job": "QA"
        }
    })
        .its('body.name')
        .should('eql', 'Mohammed Ali')
})

// FIXTURES 1st Method - 1/2
it.skip('Login with user from Data Source', () => {
    cy.fixture('userData').then( user => {
        cy.get('#usernameField').type(user.username)
        cy.get('#passwordField').type(user.password)
    })
})

// FIXTURES 1st Method - 2/2
describe.skip('Authentication tests', () => {
    beforeEach(() => {
        cy.fixture('userData').as('userProfile')
    })
    it('Login with user from Data Source', () => {
        cy.get('@userProfile').then( user => {
            cy.get('#usernameField').type(user.username).should('have.class','ng-valid')
            cy.get('#passwordField').type(user.password).should('have.class','ng-valid')
        })
    })
})

// FIXTURES 2nd Method
describe.skip('Authentication tests', () => {
    let user = require('../fixtures/userData')
    it('Login with user from Data Source', () => {
        cy.get('#usernameField').type(user.username).should('have.class', 'ng-valid')
        cy.get('#passwordField').type(user.password).should('have.class', 'ng-valid')
    })
})

// CYPRESS COMMANDS
it.skip('Stats for USA query, page 1 and 1 as limit', () => {
    cy.countriesCoronaSearch('USA', 1, 1).then(response => {
        cy.log(JSON.stringify(response))
        expect(response.body.data.rows).lengthOf(1)
        expect(response.body.data.rows[0].country).eql('USA')
    })
})

it.skip('Stats for Au query, page 2 and 6 as limit ', () => {
    cy.countriesCoronaSearch('A', 2, 6).then(response => {
        cy.log(JSON.stringify(response))
        expect(response.body.data.rows).lengthOf(6)
    })
})