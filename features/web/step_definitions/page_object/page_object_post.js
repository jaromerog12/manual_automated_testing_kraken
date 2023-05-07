const DOMPost = {
    back_list_posts: 'section > header > div > div:nth-child(1) > a',
    body: '.koenig-editor__editor-wrapper > div > p',
    display_publish_menu: 'section > header > section > div > div',
    draft_status_posts: '.gh-nav-body > div > ul:nth-child(2) > li:nth-child(2) > div > div > ul > li:nth-child(1)',
    posts: '.gh-canvas > section > ol > .gh-list-row:nth-child(####)',
    post_confirm_delete: '.modal-content > .modal-footer > button:nth-child(2)',
    posts_delete: '.gh-btn.gh-btn-hover-red.gh-btn-icon.settings-menu-delete-button',
    list_posts: '.gh-canvas > section > ol > .gh-list-row',
    list_posts_title: '.gh-canvas > section > ol > li > a:nth-child(2) > h3',
    list_posts_status: '.gh-canvas > section > ol > li > a:nth-child(5) > div > span',
    post_settings : 'section > header > section > button',
    new_post: '.gh-nav-body > div > ul:nth-child(2) > li:nth-child(2) > a:nth-child(2)',
    open_all_posts: 'section > div > ul:nth-child(2) > li:nth-child(2) > a:nth-child(1)',
    filter_by_author: 'section > header > section > div > div:nth-child(1) > div:nth-child(2)',
    filters: 'section > header > section > div > div:nth-child(##filters##) > div:nth-child(1)',
    filter_option: 'body > div > div > ul > li:nth-child(####)',
    filter_all_options: 'body > div > div > ul > li',
    published_status_posts: '.gh-nav-body > div > ul:nth-child(2) > li:nth-child(2) > div > div > ul > li:nth-child(3)',
    publish: 'footer > button:nth-child(2)',
    set_publish_now: '.gh-publishmenu-radio-button:nth-child(1)',
    title: 'textarea'
};
module.exports = DOMPost;