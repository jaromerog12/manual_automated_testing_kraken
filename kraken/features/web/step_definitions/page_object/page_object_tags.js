const DOMTags = {
    input_name: '#tag-name',
    input_slug: '#tag-slug',
    input_description: '#tag-description',
    button_save: 'body > div.gh-app.ember-view > div > main > section > form > header > section > button',
    slug_in_list_tags: 'body > div.gh-app.ember-view > div > main > section > section > ol > li:nth-child(4) > a.ember-view.gh-list-data.middarkgrey.f8.gh-tag-list-slug.gh-list-cellwidth-10 > span',
    nth_tag: 'body > div.gh-app.ember-view > div > main > section > section > ol > li.gh-tags-list-item.ember-view:nth-child(####)',
    tags: 'body > div.gh-app.ember-view > div > main > section > section > ol > li',
    button_delete: 'body > div.gh-app.ember-view > div > main > section > button'
};
module.exports = DOMTags;