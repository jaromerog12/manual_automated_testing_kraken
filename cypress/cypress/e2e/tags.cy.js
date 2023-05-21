let page_object = require('../fixtures/page-object.json');
const {given_visit_url,
    when_fill_input_name_or_title,
    when_fill_description,
    when_press_click_save_button,
    then_validate_tag_exist_in_list,
    then_validate_error_word_count_color,
    when_expand_section,
    then_validate_title_updated} = require("../given-when-then/tags");

describe('login functionalities', () => {
    let info = {};
    beforeEach(() => {
        cy.login();
    });

    before (() => {
        info = {
            tag_name: {
                input: page_object.tags.input_tag_name,
                quantity: 0
            },
            tag_description: {
                input: page_object.tags.input_tag_description,
                quantity: 0
            },
            tag_metadata: {
                input: page_object.tags.meta_title,
                quantity: 0
            },
            tag_metadata_description: {
                input: page_object.tags.input_description_metadata,
                quantity: 0
            },
            button_save: page_object.tags.button_save
        };

    });
/*
    it('should create tag success - description input = 499 characters ',   ()  => {
        let data_visit_page = {
            port: page_object.port,
            url: page_object.urls.tags
        }
        given_visit_url(data_visit_page);
        data_visit_page = {
            port: page_object.port,
            url: page_object.urls.new_tag
        }
        given_visit_url(data_visit_page);
        info.tag_name.quantity = 20;
        when_fill_input_name_or_title(info.tag_name);
        info.tag_description.quantity = 499;
        when_fill_description(info.tag_description);
        when_press_click_save_button(info.button_save);
        cy.wait(500);
        data_visit_page = {
            port: page_object.port,
            url: page_object.urls.tags
        }
        given_visit_url(data_visit_page);
        then_validate_tag_exist_in_list();
    });

    it('should create tag success - description input = 500 characters ',   ()  => {
        data_visit_page = {
            port: page_object.port,
            url: page_object.urls.new_tag
        }
        given_visit_url(data_visit_page);
        info.tag_name.quantity = 20;
        when_fill_input_name_or_title(info.tag_name);
        info.tag_description.quantity = 500;
        when_fill_description(info.tag_description);
        when_press_click_save_button(info.button_save);
        cy.wait(500);
        data_visit_page = {
            port: page_object.port,
            url: page_object.urls.tags
        }
        given_visit_url(data_visit_page);
        then_validate_tag_exist_in_list();
    });

    it('should create tag fail - description input = 501 characters ',   ()  => {
        let data_visit_page = {
            port: page_object.port,
            url: page_object.urls.tags
        }
        given_visit_url(data_visit_page);
        data_visit_page = {
            port: page_object.port,
            url: page_object.urls.new_tag
        }
        given_visit_url(data_visit_page);
        info.tag_name.quantity = 20;
        when_fill_input_name_or_title(info.tag_name);
        info.tag_description.quantity = 501;
        when_fill_description(info.tag_description);
        validate_error_word_count_color('BASIC_SETTINGS');
    });
*/
    it('should update metadata success - title input = 69 characters ',   ()  => {
        let data_visit_page = {
            port: page_object.port,
            url: page_object.urls.new_tag
        }
        given_visit_url(data_visit_page);
        when_expand_section(page_object.tags.position_button_expand.metadata);
        console.log(page_object.tags.position_button_expand.metadata);
        info.tag_metadata.quantity = 69;
        when_fill_input_name_or_title(info.tag_metadata);
        info.tag_metadata_description.quantity = 100;
        when_fill_description(info.tag_metadata_description);
        when_press_click_save_button(info.button_save);
        then_validate_title_updated();
    });

    it('should update metadata success - description input = 70 characters ',   ()  => {
        let data_visit_page = {
            port: page_object.port,
            url: page_object.urls.new_tag
        }
        given_visit_url(data_visit_page);
        when_expand_section(page_object.tags.position_button_expand.metadata);
        console.log(page_object.tags.position_button_expand.metadata);
        info.tag_name.quantity = 70;
        when_fill_input_name_or_title(info.tag_metadata);
        info.tag_metadata_description.quantity = 100;
        when_fill_description(info.tag_metadata_description);
        when_press_click_save_button(info.button_save);
        then_validate_title_updated();
    });

    it('should update metadata success - description input = 71 characters ',   ()  => {
        let data_visit_page = {
            port: page_object.port,
            url: page_object.urls.new_tag
        }
        given_visit_url(data_visit_page);
        when_expand_section(page_object.tags.position_button_expand.metadata);
        console.log(page_object.tags.position_button_expand.metadata);
        info.tag_metadata.quantity = 71;
        when_fill_input_name_or_title(info.tag_metadata);
        info.tag_metadata_description.quantity = 100;
        when_fill_description(info.tag_metadata_description);
        then_validate_error_word_count_color('METADATA', page_object.tags.span_word_count_metadata_title);
    });
});
