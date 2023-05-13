const DOMSettings = {
    design: {
        input_new_item_navbar: '#settings-navigation > div.gh-blognav-item.ember-view > div > span.gh-blognav-label.ember-view > input',
        input_new_item_navbar_url: '#settings-navigation > div.gh-blognav-item.ember-view > div > span.gh-blognav-url ember-view > input',
        button_save_navbar: 'button.gh-btn.gh-btn-primary.gh-btn-icon.ember-view',
        items_navbar: "body > div > header > nav > div.gh-head-menu > ul > li > a",
        input_new_second_nav: '#secondary-navigation > div:nth-child(2) > div > span:nth-child(1) > input',
        items_second_navbar: "footer > div > nav > ul > li > a",
        input_new_item_navbar_nth: '#settings-navigation > div.sortable-objects.ember-view > div:nth-child(####) > div > div > span.gh-blognav-label.ember-view > input',
        button_delete_navbar: "#settings-navigation > div.sortable-objects.ember-view > div:nth-child(####) > div > button",
        list_items_navbar_admin: "#settings-navigation > div.sortable-objects.ember-view > div",
        input_new_item_second_navbar_nth: "#secondary-navigation > div.sortable-objects.ember-view > div:nth-child(####) > div > div > span.gh-blognav-label.ember-view > input",
        list_items_second_navbar_admin: "#secondary-navigation > div.sortable-objects.ember-view > div",
        button_delete_item_second_nav: '#secondary-navigation > div.sortable-objects.ember-view > div:nth-child(####) > div > button'

    },
    general: {
        expand: 'body > div.gh-app > div > main > section > div:nth-child(2) > section > div.gh-expandable-block:nth-child(1) > div:nth-child(1) > button',
        input_title: "body > div.gh-app > div > main > section > div:nth-child(2) > section > div.gh-expandable-block:nth-child(1) > div:nth-child(2) > div > div > div > div > input",
        button_save_general_option: "body > div.gh-app > div > main > section > div > header > section > button",
        expand_site_meta: "body > div.gh-app > div > main > section > div:nth-child(3) > section > div:nth-child(####) > div > button",
        input_title_metadata: "#metaTitle",
        input_description_metadata: "#metaDescription",
        validate_metadata_title: "div.gh-seo-preview-title",
        validate_metadata_description: "div.gh-seo-preview-desc",
        input_title_twitter: "#twitterTitle",
        input_description_twitter: "#twitterDescription",
        validate_title_twitter: "div.gh-social-twitter-preview-title",
        validate_description_twitter: "div.gh-social-twitter-preview-desc",
        input_title_facebook: "#ogTitle",
        input_description_facebook: "#ogDescription",
        validate_title_facebook: "div.gh-social-og-preview-title",
        validate_description_facebook: "div.gh-social-og-preview-desc",
    }
};
module.exports = DOMSettings;