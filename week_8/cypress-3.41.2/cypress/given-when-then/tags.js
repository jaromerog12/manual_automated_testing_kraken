import {faker} from "@faker-js/faker";
import tags_a_priori from "../fixtures/data-pool-apriori/data_apriori_tags.json";

const functions = require("../scripts/functions");
const page_object = require("../fixtures/page-object.json");
let titleTag = '';
const given_visit_url = (data) => {
    cy.visit(functions.buildUrl(data.port, data.url));
    cy.wait(1000);
}

const when_fill_input_name_or_title = (data) => {
    let input = faker.random.alphaNumeric(data.quantity);
    titleTag = input;
    cy.get(data.input).type(input);
}

const when_fill_description = (data) => {
    console.log(data);
    let input = faker.random.alphaNumeric(data.quantity);
    cy.get(data.input).type(input);
    cy.wait(500);
}

const when_press_click_save_button = (button_save) => {
    cy.get(button_save).click();
}

const then_validate_tag_exist_in_list = () => {
    cy.get(page_object.tags.h3_name_tag_in_list).should('contain', titleTag);
}

const then_validate_error_word_count_color = (type, span_word_count) => {
    if (type === 'BASIC_SETTINGS') {
        cy.get(page_object.tags.span_color_count.replace(':nth-child(####)','')).should('have.css', 'color')
            .and("eq", 'rgb(226, 84, 64)');
    } else {
        cy.get(span_word_count).should('have.css', 'color')
            .and("eq", 'rgb(226, 84, 64)');
    }
}

const when_fill_canonical_correct_url = () => {
    let index = functions.getRandomInt(0, tags_a_priori.length);
    cy.get(page_object.tags.input_canonical_url).type(tags_a_priori[index].canonical_url);
}

const when_fill_canonical_incorrect_url = () => {
    cy.get(page_object.tags.input_canonical_url).type(faker.random.word());
}

const then_validate_title_updated = (title) => {
    //cy.get(page_object.tags.div_validate_title_metadata).should('contain', titleTag);
    cy.get(title).should('contain', titleTag);
}
const when_expand_section = (index) => {
    cy.get(page_object.tags.button_expand.replace('####', index)).click();
}

const then_validate_success_url = () => {
    cy.get(page_object.tags.p_validate_canonical_url).should('not.contain', 'The url should be a valid url');
}

const then_validate_fail_url = () => {
    cy.get(page_object.tags.p_validate_canonical_url).should('contain', 'The url should be a valid url');
}

export {
    given_visit_url,
    when_fill_input_name_or_title,
    when_fill_description,
    when_press_click_save_button,
    then_validate_tag_exist_in_list,
    then_validate_error_word_count_color,
    when_expand_section,
    then_validate_title_updated,
    when_fill_canonical_correct_url,
    then_validate_success_url,
    when_fill_canonical_incorrect_url,
    then_validate_fail_url
}