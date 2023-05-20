import {faker} from '@faker-js/faker'

describe('create post draft', () => {
  beforeEach(() => {
    cy.login();
  });
  before(() => {
    cy.obtenerDatosPostMockaroo();
  });

/*  it('create post faker', () => {
    cy.visit('http://localhost:3002/ghost/#/editor/post')

    const title = faker.lorem.sentence();
    cy.get('.ember-text-area').scrollIntoView().focus().type(title);
    cy.get('.koenig-editor__editor').click().focus().type(faker.lorem.paragraph());
    cy.get('.gh-editor-back-button').click();

    cy.get('.content-list').should('contain', title);

    cy.wait(2000)
  }),*/
  /*it('create post faker without content', () => {
    cy.visit('http://localhost:3002/ghost/#/editor/post')

    const title = faker.lorem.sentence();
    cy.get('.ember-text-area').scrollIntoView().focus().type(title);
    cy.get('.koenig-editor__editor').click().focus();
    cy.get('.gh-publishmenu').click();
    cy.get('.gh-publishmenu-button').click();

    cy.get('.epm-modal').should('be.visible').then(() => {
      cy.contains('button', 'Publish').click();
    })

    cy.wait(1000)

    cy.get('.gh-editor-back-button').click();
    cy.contains('li', 'Published').click();

    cy.get('.content-list').should('contain', title);

    cy.wait(3000)
  })*/
   it('create post with settings', () => {
    cy.visit('http://localhost:3002/ghost/#/editor/post')

    const title = faker.lorem.sentence();
    cy.get('.ember-text-area').scrollIntoView().focus().type(title);
    cy.get('.koenig-editor__editor').click().focus().type(faker.lorem.paragraph());

    cy.get('.settings-menu-toggle').click().focus();

    cy.get('.koenig-editor__editor').click().focus().type(faker.lorem.sentence());
    cy.get('.post-setting-custom-excerpt').click().focus().type(faker.lorem.sentence());

    cy.get('.settings-menu-toggle').click().focus();

    cy.get('.koenig-editor__editor').click().focus();
    cy.get('.gh-publishmenu').click();
    cy.get('.gh-publishmenu-button').click();

    cy.get('.epm-modal').should('be.visible').then(() => {
      cy.contains('button', 'Publish').click();
    })

    cy.wait(1000)

    cy.get('.gh-editor-back-button').click();
    cy.contains('li', 'Published').click();

    cy.get('.content-list').should('contain', title);

    cy.wait(3000)
  })

  it('create post mokaroo', () => {

    cy.obtenerDatosPostMockaroo().then((monkarooData) => {
      const title = monkarooData.title;
      cy.get('.ember-text-area').scrollIntoView().focus().type(title)
      cy.get('.koenig-editor__editor').click().focus().type(monkarooData.paragraph)
      cy.get('.gh-editor-back-button').click()
  
      cy.get('.content-list').should('contain', title);
    });
    cy.wait(1000)
  })
})
