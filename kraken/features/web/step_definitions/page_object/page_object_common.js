const DOMCommonsElements = {
    login: {
        userInput: "#ember8",
        pwdInput: "#ember10",
        signInBtn: "#ember12",
    },
    profile: {
        display_menu: 'section > div:nth-child(2) > div',
        sign_out: 'body > div > div > ul > li:nth-child(9)'
    },
    filter_posts: {
        order_menu_status: {
            draft: 2,
            published: 3
        },
        order_filters: {
            status: 1,
            author: 2
        }
    },
    sidebar: {
        pages: 'body > div.gh-app.ember-view > div > nav.gh-nav.ember-view > section > div.gh-nav-top > ul.gh-nav-list.gh-nav-manage > li:nth-child(####) > a',
        type: {
            manage: 1,
            settings: 2
        },
        order: {
            posts: 2,
            pages: 3,
            tags: 4
        }
    },
    options: {
        item_title: '.gh-canvas > section > ol > li > a:nth-child(2) > h3',
        item_status: '.gh-nav-body > div > ul:nth-child(2) > li:nth-child(2) > div > div > ul > li:nth-child(3)',
        back_list_items: 'section > header > div > div:nth-child(1) > a',
        list_items_status: 'body > div.gh-app.ember-view > div > main > section > section > ol > li:nth-child(2) > a.ember-view.permalink.gh-list-data.gh-post-list-status > div > span',
        list_items: '.gh-canvas > section > ol > .gh-list-row.gh-posts-list-item > a:nth-child(1)',
        item_settings : "button.post-settings",
        item_excerpt_input: 'div.settings-menu-pane-in.settings-menu.settings-menu-pane > div.settings-menu-content > form > div:nth-child(4) > textarea',
        close_item_settings: 'div.settings-menu-pane-in.settings-menu.settings-menu-pane > div.settings-menu-header > button',
        item_delete_btn: 'div.settings-menu-pane-in.settings-menu.settings-menu-pane > div.settings-menu-content > form > button',
        new_item_btn: 'div.gh-app.ember-view > div > main > section > header > section > a',
        items: '.gh-canvas > section > ol > .gh-list-row.gh-posts-list-item',
        filters: 'section > header > section > div > div:nth-child(##filters##) > div:nth-child(1)',
        filter_option: 'body > div > div > ul > li:nth-child(####)',
        filter_all_options: 'body > div > div > ul > li',
    },
    home: {
        title: 'body > div > header > div > div > div > h1'
    }
};
module.exports = DOMCommonsElements;