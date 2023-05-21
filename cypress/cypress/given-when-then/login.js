import {faker} from "@faker-js/faker";
import login_a_priori from "../fixtures/data-pool-apriori/login.json";

const functions = require("../scripts/functions");
const page_object = require("../fixtures/page-object.json");
const given_visit_url = (data) => {
    cy.visit(functions.buildUrl(data.port, data.url));
    cy.wait(500);
}

const when_fill_input_email = (data) => {
    let input = faker.random.alphaNumeric(data.quantity);
    cy.get(data.input_username).type(functions.buildEmail(input, page_object.email_domain));
}

const when_fill_input_password = (data) => {
    let index = functions.getRandomInt(0, login_a_priori.length);
    cy.get(data.input_password).type(login_a_priori[index].password);
};

const when_button_sign_in_click = (data) => {
    cy.get(data.button_sign_in).click();
}

const then_validate_class_error_button_sign_in = (data) => {
    cy.get(data.button_sign_in).should('have.class',page_object.login.class_error_button_sign_in);
}

const then_validate_div_has_not_error_class_because_characters_length_greather_that_limit_input_username = () => {
    cy.get(page_object.login.form_login_error_div_class).should('not.have.class', page_object.login.class_error_div_username);
}

const then_validate_div_has_error_class_because_characters_length_greather_that_limit_input_username = () => {
    cy.get(page_object.login.form_login_error_div_class).should('have.class', page_object.login.class_error_div_username);
}

export {
    given_visit_url,
    when_fill_input_email,
    when_fill_input_password,
    when_button_sign_in_click,
    then_validate_class_error_button_sign_in,
    then_validate_div_has_error_class_because_characters_length_greather_that_limit_input_username,
    then_validate_div_has_not_error_class_because_characters_length_greather_that_limit_input_username
}