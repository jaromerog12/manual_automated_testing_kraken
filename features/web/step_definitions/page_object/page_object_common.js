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
        pages: 'nav > section > div.gh-nav-top > ul.gh-nav-list.gh-nav-manage > li:nth-child(3) > a'
    }
};
module.exports = DOMCommonsElements;