const DOMPost = {
    body: '.koenig-editor__editor-wrapper > div > p',
    display_publish_menu: 'section > header > section > div > div',
    draft_status_posts: '.gh-nav-body > div > ul:nth-child(2) > li:nth-child(2) > div > div > ul > li:nth-child(1)',
    posts: '.gh-canvas > section > ol > .gh-list-row:nth-child(####)',
    post_confirm_delete: '.modal-content > .modal-footer > button:nth-child(2)',
    new_post: '.gh-nav-body > div > ul:nth-child(2) > li:nth-child(2) > a:nth-child(2)',
    open_all_posts: 'section > div > ul:nth-child(2) > li:nth-child(2) > a:nth-child(1)',
    filter_by_author: 'section > header > section > div > div:nth-child(1) > div:nth-child(2)',
    button_confirm_publish: "button.gh-btn.gh-btn-black.gh-btn-icon.ember-view",
    publish: 'footer > button:nth-child(2)',
    set_publish_now: '.gh-publishmenu-radio-button:nth-child(1)',
    title: 'textarea'
};
module.exports = DOMPost;