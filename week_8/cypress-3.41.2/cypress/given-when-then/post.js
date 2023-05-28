const visit_url = (url) => {
    cy.visit(url);
}

const put_data_on_element = (selector,data) => {
    cy.get(selector).click().focus().type(data);
}

const validate_should_on_element = (selector,condition,data) => {
    cy.get(selector).should(condition, data);
}

const click_on_element_and_focus = (selector) => {
    cy.get(selector).click().focus();
}

const click_on_element = (selector) => {
    cy.get(selector).click();
}

const click_on_element_if = (component, selector) => {
    cy.contains(component, selector).click();
}

const get_object_if = (selector, condition) => {
    return cy.get(selector).should(condition);
}

const get_data_apriori_random = () => {
    return new Promise((resolve) => {
        cy.fixture('data-pool-apriori/data_apriori_post.json').then((data) => {
            const numeroAleatorio = Math.floor(Math.random() * data.length);
            resolve(data[numeroAleatorio]);
         });
    });
}


export {
    visit_url,
    put_data_on_element,
    validate_should_on_element,
    click_on_element_and_focus,
    click_on_element,
    click_on_element_if,
    get_object_if,
    get_data_apriori_random
}