const visit_url = (url) => {
    cy.visit(url);
}

const click_on_element = (selector) => {
    cy.get(selector).click();
}

const clear_element = (selector) => {
    cy.get(selector).clear({force: true});
}

const click_on_element_if = (component, selector) => {
    cy.contains(component, selector).click();
}

const put_data_on_element_force = (selector,data) => {
    cy.get(selector).type(data, {force: true});
}

const validate_contain_element = (selector,condition) => {
    cy.contains(selector, condition);
}

const get_data_apriori_pseudo_random = () => {
    return new Promise((resolve) => {
        cy.fixture('data-pool-pseudoaleatorio/data_apriori_staff.json').then((data) => {
            resolve(data);
         });
    });
}

export {
    visit_url,
    click_on_element,
    click_on_element_if,
    clear_element,
    put_data_on_element_force,
    validate_contain_element,
    get_data_apriori_pseudo_random
}