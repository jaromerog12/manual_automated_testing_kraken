const DOMSettings = {
    design: {
        input_new_item_navbar: '#settings-navigation > div.gh-blognav-item.ember-view > div > span.gh-blognav-label.ember-view > input',
        input_new_item_navbar_url: '#settings-navigation > div.gh-blognav-item.ember-view > div > span.gh-blognav-url ember-view > input',
        button_save_navbar: 'body > div.gh-app.ember-view > div > main > section > header > section > button',
        items_navbar: "body > div > header > div > div > nav > div.site-nav-left-wrapper > div > div > ul > li > a",
        input_new_second_nav: '#secondary-navigation > div:nth-child(2) > div > span:nth-child(1) > input',
        items_second_navbar: "body > div > header > div > div > nav > div.site-nav-right > ul > li > a",
        input_new_item_navbar_nth: '#settings-navigation > div.sortable-objects.ember-view > div:nth-child(####) > div > div > span.gh-blognav-label.ember-view > input',
        button_delete_navbar: "#settings-navigation > div.sortable-objects.ember-view > div:nth-child(####) > div > button",
        list_items_navbar_admin: "#settings-navigation > div.sortable-objects.ember-view > div",
        input_new_item_second_navbar_nth: "#secondary-navigation > div.sortable-objects.ember-view > div:nth-child(####) > div > div > span.gh-blognav-label.ember-view > input",
        list_items_second_navbar_admin: "#secondary-navigation > div.sortable-objects.ember-view > div",
        button_delete_item_second_nav: '#secondary-navigation > div.sortable-objects.ember-view > div:nth-child(####) > div > button'

    },
    general: {
        expand: 'body > div.gh-app.ember-view > div > main > section > div > section > div.flex.flex-column.br3.shadow-1.bg-grouped-table.pa5.mt2 > div.gh-#### > div.gh-setting-action > button',
        input_title: "body > div.gh-app.ember-view > div > main > section > div > section > div.flex.flex-column.br3.shadow-1.bg-grouped-table.pa5.mt2 > div.gh-setting-first > div.gh-setting-content > div.liquid-container.ember-view > div > div > div:nth-child(1) > input",
        button_save_general_option: "body > div.gh-app.ember-view > div > main > section > div > header > section > button",
        expand_site_meta: "body > div.gh-app.ember-view > div > main > section > div > section > div:nth-child(6) > div.gh-####.flex-column > div.flex.flex-row.justify-between.w-100 > div.gh-setting-action > button",
        input_title_metadata: "#metaTitle",
        input_description_metadata: "#metaDescription",
        validate_metadata_title: "div.seo-preview > div.seo-preview-title",
        validate_metadata_description: "div.seo-preview > div.seo-preview-description",
        input_title_twitter: "#twitterTitle",
        input_description_twitter: "#twitterDescription",
        validate_title_twitter: "div.gh-twitter-preview-content > div.gh-twitter-preview-title",
        validate_description_twitter: "div.gh-twitter-preview-content > div.gh-twitter-preview-description",
        input_title_facebook: "#ogTitle",
        input_description_facebook: "#ogDescription",
        validate_title_facebook: "div.gh-og-preview-content > div.gh-og-preview-title",
        validate_description_facebook: "div.gh-og-preview-content > div.gh-og-preview-description",
    }
};
module.exports = DOMSettings;