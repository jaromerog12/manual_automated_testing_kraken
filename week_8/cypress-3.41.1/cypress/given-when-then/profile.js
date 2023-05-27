
const visit_url = (url) => {
    cy.visit(url);
    cy.wait(500);
}

const click_on_element_and_focus = (selector) => {
    cy.get(selector).click().focus();
    cy.wait(500);
}

const click_on_element = (selector) => {
    cy.get(selector).click();
    cy.wait(500);
}

const put_data_on_element = (selector, data) => {
    cy.get(selector).clear();
    cy.get(selector).type(data,  {force: true});
    cy.wait(500);
}

const validate_exist_on_element = (selector) => {
    cy.get(selector).should('exist');
}

const validate_not_exist_on_element = (selector) => {
    cy.get(selector).should('not.exist');
}


export {
    visit_url,
    click_on_element_and_focus,
    click_on_element,
    put_data_on_element,
    validate_exist_on_element,
    validate_not_exist_on_element
}