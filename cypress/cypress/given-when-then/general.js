import {faker} from "@faker-js/faker";
import tags_a_priori from "../fixtures/data-pool-apriori/tags.json";
import {create} from "axios";

const functions = require("../scripts/functions");
const page_object = require("../fixtures/page-object.json");
let titleTag = '';

const given_visit_url = (data) => {
    cy.visit(functions.buildUrl(data.port, data.url));
    cy.wait(1000);
}

const when_expand_section = (section, type) => {
    cy.get(page_object.general.button_expand.replace('####', section).replace('###', type)).click();
}

const when_expand_section_social_account = () => {
    cy.get(page_object.general.button_expand_social_accounts).click();
}

const when_fill_input_name_or_title = (data) => {
    let input = faker.random.alphaNumeric(data.quantity);
    titleTag = input;
    cy.get(data.input).clear().type(input, {force: true});
}

const when_full_url_with_correct_format = (data) => {
    let input = faker.random.words(3);
    cy.get(data.input).type(' dcw ew ejew jwejwe cjwe cjwec', );
}

const when_lost_focus_to = (data) => {
    cy.get(data.input).clock();
}

const when_fill_description = (data) => {
    console.log(data);
    let input = faker.random.alphaNumeric(data.quantity);
    cy.get(data.input).clear().type(input, {force: true});
    cy.wait(500);
}

const when_press_click_save_button = () => {
    cy.get(page_object.general.button_save).click();
}

const then_validate_title_updated = (title) => {
    cy.get(title).should('contain', titleTag.substring(0,20));
}

const then_validate_error_word_count_color = (type, span_word_count) => {
    cy.get(span_word_count).should('have.css', 'color')
        .and("eq", 'rgb(226, 84, 64)');

}

const then_validate_success_url = () => {
    cy.get(page_object.general.span_error_response).should('not.contain','The URL must be in a format like');
}

export {
    when_expand_section,
    given_visit_url,
    when_fill_input_name_or_title,
    when_fill_description,
    when_press_click_save_button,
    then_validate_title_updated,
    then_validate_error_word_count_color,
    when_expand_section_social_account,
    when_full_url_with_correct_format,
    when_lost_focus_to,
    then_validate_success_url
}