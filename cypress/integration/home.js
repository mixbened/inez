describe('Main', () => {
  
    it('Renders Correctly', () => {
        cy.visit('/');
        cy.get('[data-cy=search]').should('be.visible');
        cy.get('[data-cy=cart]').should('be.visible');
    });

    it('Looks for Products', () => {
        cy.get('input').type("milch")
        cy.wait(100)
        cy.get('[data-cy=winner]').should('be.visible');
      });

      it('Adds Product to Cart', () => {
        cy.get('[data-cy=add]').click()
        cy.wait(100)
        cy.get('[data-cy=cart]').click()
        cy.get('[data-cy=cartItem]').should('exist')
      });
  });