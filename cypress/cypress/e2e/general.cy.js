const page_object = require("../fixtures/page-object.json");
const {
    given_visit_url,
    when_expand_section,
    when_fill_input_name_or_title,
    when_fill_description,
    when_press_click_save_button,
    then_validate_title_updated,
    then_validate_error_word_count_color,
    when_expand_section_social_account,
    when_full_url_with_correct_format,
    when_lost_focus_to,
    then_validate_success_url
} = require("../given-when-then/general");
describe('login functionalities', () => {
    let info = {};
    beforeEach(() => {
        cy.login();
    });

    before(() => {
        info = {
            tag_metadata: {
                input: page_object.general.meta_title,
                quantity: 0
            },
            tag_metadata_description: {
                input: page_object.general.input_description_metadata,
                quantity: 0
            },
            tag_twitter_url: {
                input: page_object.general.social_media.input_twitter,
                quantity: 0
            },
            tag_facebook_url: {
                input: page_object.general.social_media.input_facebook,
                quantity: 0
            }
        };
    });

    it('should update general metadata success - title input = 69 characters',   ()  => {
        let data_visit_page = {
            port: page_object.port,
            url: page_object.urls.general
        }
        given_visit_url(data_visit_page);
        when_expand_section(page_object.general.panel_expand.site_meta_settings, page_object.general.site_meta_settings.metadata);
        info.tag_metadata.quantity = 69;
        when_fill_input_name_or_title(info.tag_metadata);
        info.tag_metadata_description.quantity = 100;
        when_fill_description(info.tag_metadata_description);
        when_press_click_save_button();
        then_validate_title_updated(page_object.general.div_validate_title_metadata);
    });

    it('should update general metadata success - title input = 70 characters ',   ()  => {
        let data_visit_page = {
            port: page_object.port,
            url: page_object.urls.general
        }
        given_visit_url(data_visit_page);
        when_expand_section(page_object.general.panel_expand.site_meta_settings, page_object.general.site_meta_settings.metadata);
        info.tag_metadata.quantity = 70;
        when_fill_input_name_or_title(info.tag_metadata);
        info.tag_metadata_description.quantity = 100;
        when_fill_description(info.tag_metadata_description);
        when_press_click_save_button();
        then_validate_title_updated(page_object.general.div_validate_title_metadata);
    });

    it('should update general metadata fail - title input = 71 characters ',   ()  => {
        let data_visit_page = {
            port: page_object.port,
            url: page_object.urls.general
        }
        given_visit_url(data_visit_page);
        when_expand_section(page_object.general.panel_expand.site_meta_settings, page_object.general.site_meta_settings.metadata);
        info.tag_metadata.quantity = 71;
        when_fill_input_name_or_title(info.tag_metadata);
        info.tag_metadata_description.quantity = 100;
        when_fill_description(info.tag_metadata_description);
        then_validate_error_word_count_color('METADATA', page_object.general.span_word_count_metadata_title);
    });


    it('should update metadata success - description input = 155 characters ',   ()  => {
        let data_visit_page = {
            port: page_object.port,
            url: page_object.urls.general
        }
        given_visit_url(data_visit_page);
        when_expand_section(page_object.general.panel_expand.site_meta_settings, page_object.general.site_meta_settings.metadata);
        info.tag_metadata.quantity = 70;
        when_fill_input_name_or_title(info.tag_metadata);
        info.tag_metadata_description.quantity = 155;
        when_fill_description(info.tag_metadata_description);
        when_press_click_save_button(info.button_save);
        then_validate_title_updated(page_object.general.div_validate_title_metadata);
    });

    it('should update metadata success - description input = 156 characters ',   ()  => {
        let data_visit_page = {
            port: page_object.port,
            url: page_object.urls.general
        }
        given_visit_url(data_visit_page);
        when_expand_section(page_object.general.panel_expand.site_meta_settings, page_object.general.site_meta_settings.metadata);
        info.tag_metadata.quantity = 70;
        when_fill_input_name_or_title(info.tag_metadata);
        info.tag_metadata_description.quantity = 156;
        when_fill_description(info.tag_metadata_description);
        when_press_click_save_button(info.button_save);
        then_validate_title_updated(page_object.general.div_validate_title_metadata);
    });

    it('should update metadata fail - description input = 157 characters ',   ()  => {
        let data_visit_page = {
            port: page_object.port,
            url: page_object.urls.general
        }
        given_visit_url(data_visit_page);
        when_expand_section(page_object.general.panel_expand.site_meta_settings, page_object.general.site_meta_settings.metadata);
        info.tag_metadata.quantity = 70;
        when_fill_input_name_or_title(info.tag_metadata);
        info.tag_metadata_description.quantity = 157;
        when_fill_description(info.tag_metadata_description);
        then_validate_error_word_count_color('METADATA', page_object.general.span_word_count_metadata_description);
    });

    it('should update general url success - facebook page url with correct format  ',   ()  => {
        let data_visit_page = {
            port: page_object.port,
            url: page_object.urls.general
        }
        given_visit_url(data_visit_page);
        when_expand_section_social_account();
        when_full_url_with_correct_format(info.tag_facebook_url);
        when_lost_focus_to(info.tag_twitter_url)
        then_validate_success_url();
    });

    it('should update general url success - twitter page url with correct format  ',   ()  => {
        let data_visit_page = {
            port: page_object.port,
            url: page_object.urls.general
        }
        given_visit_url(data_visit_page);
        when_expand_section_social_account();
        when_full_url_with_correct_format(info.tag_twitter_url);
        when_lost_focus_to(info.tag_facebook_url)
        then_validate_success_url();
    });
});