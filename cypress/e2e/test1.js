beforeEach(() => {
    cy.clearAllCookies();
    cy.clearAllLocalStorage();
    cy.clearAllSessionStorage();
    cy.log('Cache and cookies cleared');
    cy.reload()
  });


///<reference types="cypress"/>

describe('login', () => {
  it('login standard_user', () => {
    cy.visit("https://www.saucedemo.com/")
    cy.get('[data-test="username"]').type("standard_user")
    cy.get('[data-test="password"]').type("secret_sauce")
    cy.get('[data-test="login-button"]').click()
  })
    it('add all items to cart', () => {
        cy.visit("https://www.saucedemo.com/")
        cy.get('[data-test="username"]').type("standard_user")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('[data-test="login-button"]').click()
    let expextedItem = 6 ;
    
    for(let i = 0 ; i< 6 ;i++){
        let myArray = cy.get('div#inventory_container').find('.btn').eq(i).click()
    


    }

    
  });  

  
    
  });

