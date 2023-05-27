let page_object = require('../fixtures/page-object.json');
const {given_visit_url,
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
    then_validate_fail_url} = require("../given-when-then/tags");

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
            tag_twitter_title: {
              input: page_object.tags.input_twitter_title,
              quantity: 0
            },
            tag_twitter_description: {
                input:page_object.tags.input_twitter_description,
                quantity: 0
            },
            tag_facebook_title: {
                input: page_object.tags.input_facebook_title,
                quantity: 0
            },
            tag_facebook_description: {
                input: page_object.tags.input_facebook_description,
                quantity: 0
            },
            button_save: page_object.tags.button_save
        };

    });

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
        let data_visit_page = {
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
        then_validate_error_word_count_color('BASIC_SETTINGS');
    });

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
        then_validate_title_updated(page_object.tags.div_validate_title_metadata);
    });

    it('should update metadata success - title input = 70 characters ',   ()  => {
        let data_visit_page = {
            port: page_object.port,
            url: page_object.urls.new_tag
        }
        given_visit_url(data_visit_page);
        when_expand_section(page_object.tags.position_button_expand.metadata);
        console.log(page_object.tags.position_button_expand.metadata);
        info.tag_metadata.quantity = 70;
        when_fill_input_name_or_title(info.tag_metadata);
        info.tag_metadata_description.quantity = 100;
        when_fill_description(info.tag_metadata_description);
        when_press_click_save_button(info.button_save);
        then_validate_title_updated(page_object.tags.div_validate_title_metadata);
    });

    it('should update metadata fail - title input = 71 characters ',   ()  => {
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

    it('should update metadata success - description input = 155 characters ',   ()  => {
        let data_visit_page = {
            port: page_object.port,
            url: page_object.urls.new_tag
        }
        given_visit_url(data_visit_page);
        when_expand_section(page_object.tags.position_button_expand.metadata);
        console.log(page_object.tags.position_button_expand.metadata);
        info.tag_metadata.quantity = 70;
        when_fill_input_name_or_title(info.tag_metadata);
        info.tag_metadata_description.quantity = 155;
        when_fill_description(info.tag_metadata_description);
        when_press_click_save_button(info.button_save);
        then_validate_title_updated(page_object.tags.div_validate_title_metadata);
    });

    it('should update metadata success - description input = 156 characters ',   ()  => {
        let data_visit_page = {
            port: page_object.port,
            url: page_object.urls.new_tag
        }
        given_visit_url(data_visit_page);
        when_expand_section(page_object.tags.position_button_expand.metadata);
        console.log(page_object.tags.position_button_expand.metadata);
        info.tag_name.quantity = 70;
        when_fill_input_name_or_title(info.tag_metadata);
        info.tag_metadata_description.quantity = 156;
        when_fill_description(info.tag_metadata_description);
        when_press_click_save_button(info.button_save);
        then_validate_title_updated(page_object.tags.div_validate_title_metadata);
    });

    it('should update metadata fail - description input = 157 characters ',   ()  => {
        let data_visit_page = {
            port: page_object.port,
            url: page_object.urls.new_tag
        }
        given_visit_url(data_visit_page);
        when_expand_section(page_object.tags.position_button_expand.metadata);
        console.log(page_object.tags.position_button_expand.metadata);
        info.tag_metadata.quantity = 70;
        when_fill_input_name_or_title(info.tag_metadata);
        info.tag_metadata_description.quantity = 157;
        when_fill_description(info.tag_metadata_description);
        then_validate_error_word_count_color('METADATA', page_object.tags.span_word_count_metadata_description);
    });

    it('should update metadata success - canonical url with correct format  ',   ()  => {
        let data_visit_page = {
            port: page_object.port,
            url: page_object.urls.new_tag
        }
        given_visit_url(data_visit_page);
        when_expand_section(page_object.tags.position_button_expand.metadata);
        console.log(page_object.tags.position_button_expand.metadata);
        info.tag_metadata.quantity = 70;
        when_fill_input_name_or_title(info.tag_metadata);
        info.tag_metadata_description.quantity = 155;
        when_fill_description(info.tag_metadata_description);
        when_fill_canonical_correct_url();
        when_press_click_save_button(info.button_save);
        then_validate_success_url();
    });

    it('should update metadata fail - canonical url with incorrect format  ',   ()  => {
        let data_visit_page = {
            port: page_object.port,
            url: page_object.urls.new_tag
        }
        given_visit_url(data_visit_page);
        when_expand_section(page_object.tags.position_button_expand.metadata);
        console.log(page_object.tags.position_button_expand.metadata);
        info.tag_metadata.quantity = 70;
        when_fill_input_name_or_title(info.tag_metadata);
        info.tag_metadata_description.quantity = 155;
        when_fill_description(info.tag_metadata_description);
        when_fill_canonical_incorrect_url();
        when_press_click_save_button(info.button_save);
        then_validate_fail_url();
    });

    it('should update twitter success - title input = 69 characters ',   ()  => {
        let data_visit_page = {
            port: page_object.port,
            url: page_object.urls.new_tag
        }
        given_visit_url(data_visit_page);
        when_expand_section(page_object.tags.position_button_expand.twitter);
        info.tag_twitter_title.quantity = 69;
        when_fill_input_name_or_title(info.tag_twitter_title);
        info.tag_twitter_description.quantity = 100;
        when_fill_description(info.tag_twitter_description);
        when_press_click_save_button(info.button_save);
        then_validate_title_updated(page_object.tags.div_validate_twitter_title);
    });

    it('should update twitter success - title input = 70 characters ',   ()  => {
        let data_visit_page = {
            port: page_object.port,
            url: page_object.urls.new_tag
        }
        given_visit_url(data_visit_page);
        when_expand_section(page_object.tags.position_button_expand.twitter);
        info.tag_twitter_title.quantity = 70;
        when_fill_input_name_or_title(info.tag_twitter_title);
        info.tag_twitter_description.quantity = 100;
        when_fill_description(info.tag_twitter_description);
        when_press_click_save_button(info.button_save);
        then_validate_title_updated(page_object.tags.div_validate_twitter_title);
    });

    it('should update twitter fail - title input = 71 characters ',   ()  => {
        let data_visit_page = {
            port: page_object.port,
            url: page_object.urls.new_tag
        }
        given_visit_url(data_visit_page);
        when_expand_section(page_object.tags.position_button_expand.twitter);
        info.tag_twitter_title.quantity = 71;
        when_fill_input_name_or_title(info.tag_twitter_title);
        info.tag_twitter_description.quantity = 100;
        when_fill_description(info.tag_twitter_description);
        then_validate_error_word_count_color('METADATA', page_object.tags.span_word_count_twitter_title);
    });


    it('should update twitter success - description input = 155 characters ',   ()  => {
        let data_visit_page = {
            port: page_object.port,
            url: page_object.urls.new_tag
        }
        given_visit_url(data_visit_page);
        when_expand_section(page_object.tags.position_button_expand.twitter);
        info.tag_twitter_title.quantity = 70;
        when_fill_input_name_or_title(info.tag_twitter_title);
        info.tag_twitter_description.quantity = 155;
        when_fill_description(info.tag_twitter_description);
        when_press_click_save_button(info.button_save);
        then_validate_title_updated(page_object.tags.div_validate_twitter_title);
    });

    it('should update twitter success - description input = 156 characters ',   ()  => {
        let data_visit_page = {
            port: page_object.port,
            url: page_object.urls.new_tag
        }
        given_visit_url(data_visit_page);
        when_expand_section(page_object.tags.position_button_expand.twitter);
        info.tag_twitter_title.quantity = 70;
        when_fill_input_name_or_title(info.tag_twitter_title);
        info.tag_twitter_description.quantity = 156;
        when_fill_description(info.tag_twitter_description);
        when_press_click_save_button(info.button_save);
        then_validate_title_updated(page_object.tags.div_validate_twitter_title);
    });

    it('should update twitter fail - description input = 157 characters ',   ()  => {
        let data_visit_page = {
            port: page_object.port,
            url: page_object.urls.new_tag
        }
        given_visit_url(data_visit_page);
        when_expand_section(page_object.tags.position_button_expand.twitter);
        info.tag_twitter_title.quantity = 70;
        when_fill_input_name_or_title(info.tag_twitter_title);
        info.tag_twitter_description.quantity = 157;
        when_fill_description(info.tag_twitter_description);
        then_validate_error_word_count_color('TWITTER', page_object.tags.span_word_count_twitter_description);
    });

    it('should update facebook success - title input = 69 characters ',   ()  => {
        let data_visit_page = {
            port: page_object.port,
            url: page_object.urls.new_tag
        }
        given_visit_url(data_visit_page);
        when_expand_section(page_object.tags.position_button_expand.facebook);
        info.tag_facebook_title.quantity = 69;
        when_fill_input_name_or_title(info.tag_facebook_title);
        info.tag_facebook_description.quantity = 100;
        when_fill_description(info.tag_facebook_description);
        when_press_click_save_button(info.button_save);
        then_validate_title_updated(page_object.tags.div_validate_facebook_title);
    });

    it('should update facebook success - title input = 70 characters ',   ()  => {
        let data_visit_page = {
            port: page_object.port,
            url: page_object.urls.new_tag
        }
        given_visit_url(data_visit_page);
        when_expand_section(page_object.tags.position_button_expand.facebook);
        info.tag_facebook_title.quantity = 70;
        when_fill_input_name_or_title(info.tag_facebook_title);
        info.tag_facebook_description.quantity = 100;
        when_fill_description(info.tag_facebook_description);
        when_press_click_save_button(info.button_save);
        then_validate_title_updated(page_object.tags.div_validate_facebook_title);
    });

    it('should update facebook fail - title input = 71 characters ',   ()  => {
        let data_visit_page = {
            port: page_object.port,
            url: page_object.urls.new_tag
        }
        given_visit_url(data_visit_page);
        when_expand_section(page_object.tags.position_button_expand.facebook);
        info.tag_facebook_title.quantity = 71;
        when_fill_input_name_or_title(info.tag_facebook_title);
        info.tag_facebook_description.quantity = 100;
        when_fill_description(info.tag_facebook_description);
        then_validate_error_word_count_color('METADATA', page_object.tags.span_word_count_facebook_title);
    });

    it('should update facebook success - description input = 155 characters ',   ()  => {
        let data_visit_page = {
            port: page_object.port,
            url: page_object.urls.new_tag
        }
        given_visit_url(data_visit_page);
        when_expand_section(page_object.tags.position_button_expand.facebook);
        info.tag_facebook_title.quantity = 70;
        when_fill_input_name_or_title(info.tag_facebook_title);
        info.tag_facebook_description.quantity = 155;
        when_fill_description(info.tag_facebook_description);
        when_press_click_save_button(info.button_save);
        then_validate_title_updated(page_object.tags.div_validate_facebook_title);
    });

    it('should update facebook success - description input = 156 characters ',   ()  => {
        let data_visit_page = {
            port: page_object.port,
            url: page_object.urls.new_tag
        }
        given_visit_url(data_visit_page);
        when_expand_section(page_object.tags.position_button_expand.facebook);
        info.tag_facebook_title.quantity = 70;
        when_fill_input_name_or_title(info.tag_facebook_title);
        info.tag_facebook_description.quantity = 156;
        when_fill_description(info.tag_facebook_description);
        when_press_click_save_button(info.button_save);
        then_validate_title_updated(page_object.tags.div_validate_facebook_title);
    });

    it('should update facebook fail - description input = 157 characters ',   ()  => {
        let data_visit_page = {
            port: page_object.port,
            url: page_object.urls.new_tag
        }
        given_visit_url(data_visit_page);
        when_expand_section(page_object.tags.position_button_expand.facebook);
        info.tag_facebook_title.quantity = 70;
        when_fill_input_name_or_title(info.tag_facebook_title);
        info.tag_facebook_description.quantity = 157;
        when_fill_description(info.tag_facebook_description);
        then_validate_error_word_count_color('FACEBOOK', page_object.tags.span_word_count_facebook_description);
    });
});
