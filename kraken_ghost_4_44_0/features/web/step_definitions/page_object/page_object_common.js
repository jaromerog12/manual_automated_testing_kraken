const DOMCommonsElements = {
    login: {
        userInput: "input[name='identification']",
        pwdInput: "input[name='password']",
        signInBtn: "button.login.gh-btn.gh-btn-login.gh-btn-block.gh-btn-icon.js-login-button.ember-view",
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
            author: 3
        }
    },
    sidebar: {
        pages: 'body > div.gh-app > div > nav.gh-nav > div > section > div.gh-nav-top > ul.gh-nav-list.gh-nav-manage > li:nth-child(####) > a',
        type: {
            manage: 1,
            settings: 2
        },
        order: {
            posts: 1,
            pages: 2,
            tags: 3
        }
    },
    options: {
        item_title: 'li.gh-list-row.gh-posts-list-item > a:nth-child(1) > h3',
        item_status: '.gh-nav-body > div > ul:nth-child(2) > li:nth-child(2) > div > div > ul > li:nth-child(3)',
        back_list_items: 'a.ember-view.gh-editor-back-button',
        list_items_status: 'body > div.gh-app.ember-view > div > main > section > section > ol > li:nth-child(2) > a.ember-view.permalink.gh-list-data.gh-post-list-status > div > span',
        list_items: '.gh-canvas > section > ol > .gh-list-row.gh-posts-list-item > a:nth-child(1)',
        item_settings : "button.settings-menu-toggle.gh-btn.gh-btn-editor.gh-btn-icon.icon-only.gh-btn-action-icon",
        item_excerpt_input: '#custom-excerpt',
        close_item_settings: 'div.settings-menu-pane-in.settings-menu.settings-menu-pane > div.settings-menu-header > button',
        item_delete_btn: 'button.gh-btn.gh-btn-hover-red.gh-btn-icon.settings-menu-delete-button',
        new_item_btn: 'a.ember-view.gh-btn.gh-btn-primary',
        items: '.gh-canvas > section > ol > .gh-list-row.gh-posts-list-item',
        filters: 'div.gh-contentfilter.view-actions-bottom-row > div.gh-contentfilter-menu:nth-child(##filters##)',
        filter_option: 'body > div > div > ul > li:nth-child(####)',
        filter_all_options: 'body > div > div > ul > li',
    },
    home: {
        title: 'h1.site-title'
    }
};
module.exports = DOMCommonsElements;