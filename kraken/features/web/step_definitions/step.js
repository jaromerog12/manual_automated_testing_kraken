const {faker} = require('@faker-js/faker');
const { Given, When, Then, After} = require('@cucumber/cucumber');
const DOMCommonsElements = require('./page_object/page_object_common');
const DOMElementsPost  = require('./page_object/page_object_post');
const DOMElementsTags = require('./page_object/page_object_tags');
const chai = require('chai');

let data = {}

When(`I enter email {kraken-string}`, async function (email) {
    let element = await this.driver.$(DOMCommonsElements.login.userInput);
    return element.setValue(email);
});

When(`I enter password {kraken-string}`, async function (password) {
    let element = await this.driver.$(DOMCommonsElements.login.pwdInput);
    return element.setValue(password);
});

When("I click signIn", async function () {
    let element = await this.driver.$(DOMCommonsElements.login.signInBtn);
    return element.click();
});

When('I open new post', async function () {
    let element = await this.driver.$(DOMElementsPost.new_post);
    return element.click();
});
When('I write title', async function () {
    let element = await this.driver.$(DOMElementsPost.title);
    data.title_post = faker.random.words(5);
    return element.setValue(data.title_post);
});
When('I write body', async function () {
    let element = await this.driver.$(DOMElementsPost.body);
    await element.click();
    return element.setValue(faker.random.words(50));
});
When('I click display publish menu', async function () {
    let element = await this.driver.$(DOMElementsPost.display_publish_menu);
    return element.click();
});
When('I select set it live now', async function () {
    let element = await this.driver.$(DOMElementsPost.set_publish_now);
    return element.click();
});
When('I click publish item', async function () {
    let element = await this.driver.$(DOMElementsPost.publish);
    return element.click();
});
When(/^click back list items$/, async function () {
    let element = await this.driver.$(DOMCommonsElements.options.back_list_items);
    return element.click();
});
Then(`I want validate {kraken-string} url`, async function (feature) {
    chai.assert(this.driver.getUrl, feature);
});
Then(/^I should show item in list$/, async  function () {
    let posts = await this.driver.$$(DOMCommonsElements.options.item_title);
    let founded  = await equals_items_founded(posts, data.title_post);
    chai.assert.isTrue(founded.length > 0);
});
Then(/^I want validate new item with (.*) status$/, async function (status) {
    let items = await this.driver.$$(DOMCommonsElements.options.item_status);
    let founded  = await contains_items_founded(items, status);
    chai.assert.isTrue(founded.length === items.length);
});
Then(/^I want validate new post with draft status$/, async function () {
    let posts = await this.driver.$$(DOMCommonsElements.options.item_title);
    let founded  = await equals_items_founded(posts, data.title_post);
    chai.assert.isTrue(founded.length > 0);
});
/*
When(/^I open all posts$/, async function () {
    let element = await this.driver.$(DOMElementsPost.open_all_posts);
    return element.click();
});

 */
When(/^I open (.*) filter$/, async function (type_filter) {
    let position_filter = DOMCommonsElements.filter_posts.order_filters[type_filter];
    let element = await this.driver.$(DOMCommonsElements.options.filters.replace('##filters##', position_filter));
    return element.click();
});
When(/^I select filter (.*) option$/, async function (filter_status) {
    let position_status_in_menu = DOMCommonsElements.filter_posts.order_menu_status[filter_status];
    let element = await this.driver.$(DOMCommonsElements.options.filter_option.replace('####', position_status_in_menu));
    return element.click();
});
When(/^I want filter by (.*) items$/, async function (status) {
    let all_posts = await this.driver.$$(DOMCommonsElements.options.list_items_status);
    data.status_filter  = await equals_items_founded(all_posts, status);
});
Then(/^I want validate that filter only contain (.*) status$/, function (status) {
    let data_status = data.status_filter.filter((s) => status.trim().toLowerCase() !== s.trim().toLowerCase())
    chai.assert.equal(data_status.length, 0);
});
When(/^I want choose filter by random author$/, async function () {
    let all_posts = await this.driver.$$(DOMCommonsElements.options.filter_all_options);
    let position_author_in_menu = Math.floor(Math.random() * all_posts.length) + 1;
    let element = await this.driver.$(DOMCommonsElements.options.filter_option.replace('####', '' + position_author_in_menu));
    data.author_selected = await element.getText();
    return element.click();
});
Then(/^I want validate posts lists only contain author selected in author filter$/, async function () {
    let posts = await this.driver.$$(DOMCommonsElements.options.item_title);
    let founded  = await equals_items_founded(posts, data.author_selected);
    let authors = founded.filter((s) => data.author_selected.trim().toLowerCase() !== s.trim().toLowerCase())
    chai.assert.equal(authors.length, 0);
});
When(/^I want choose random item$/, async function () {
    let all_items = await this.driver.$$(DOMCommonsElements.options.list_items);
    data.items_quantity = all_items.length;
    let position_item_to_delete = Math.floor(Math.random() * all_items.length) + 1;
    let posts = await this.driver.$(DOMElementsPost.posts.replace('####','' + position_item_to_delete));
    return posts.click();
});
When(/^I want open item settings$/, async function () {
    let button = await this.driver.$(DOMCommonsElements.options.item_settings);
    data.id_item_selected = this.driver.getUrl.name.split('/').pop();
    return button.click();
});
When(/^I want press delete item button$/, async function () {
    let button = await this.driver.$(DOMCommonsElements.options.item_delete_btn);
    return button.click();
});
When(/^I want press confirm delete item button$/, async function () {
    let button = await this.driver.$(DOMElementsPost.post_confirm_delete);
    return button.click();
});
Then(/^I want validate lists items, after delete$/, async function () {
    let all_items = await this.driver.$$(DOMCommonsElements.options.list_items);
    let ids = await Promise.all( all_items.map(async(a) => (await a.getAttribute('href')).split('/')[3]));
    let founded = equals_items_founded(ids, data.id_item_selected);
    chai.assert.equal((await founded).length, 0);
});
When(/^I want to write in excerpt input$/, async function () {
    let input = await this.driver.$(DOMCommonsElements.options.item_excerpt_input);
    await input.click();
    data.excerpt_input = faker.random.words(5);
    return input.setValue(data.excerpt_input);
});
When(/^I want close item settings$/, async function () {
    let input = await this.driver.$(DOMCommonsElements.options.close_item_settings);
    return input.click();
});
Then(/^should excerpt has been modified$/, async function () {
    let input = await this.driver.$(DOMCommonsElements.options.item_excerpt_input);
    let actualValue = await input.getValue()
    chai.assert.equal(actualValue, data.excerpt_input);
});
When(/^I select page option in sidebar (.*)$/, async function (sidebar_option) {
    let element = await this.driver.$(DOMCommonsElements.sidebar.pages.replace('####', DOMCommonsElements.sidebar.order[sidebar_option]));
    return element.click();
});
When(/^I want press new item button$/, async function () {
    let element = await this.driver.$(DOMCommonsElements.options.new_item_btn);
    return element.click();
});
When(/^I want fill fields$/, async function () {
    let tag_input_name = await this.driver.$(DOMElementsTags.input_name);
    data.tag_name = faker.random.words(3);
    await tag_input_name.setValue(data.tag_name);
    let tag_input_slug = await this.driver.$(DOMElementsTags.input_slug);
    data.tag_slug = faker.internet.domainSuffix();
    await tag_input_slug.setValue(data.tag_slug);
    let tag_input_description = await this.driver.$(DOMElementsTags.input_description);
    data.tag_description = faker.random.words(10);
    await tag_input_description.setValue(data.tag_description);
});
When(/^I want to press save button$/, async function () {
    let tag_save_button = await this.driver.$(DOMElementsTags.button_save);
    await tag_save_button.click();
});
Then(/^I want validate tags in list$/, async  function () {
    let posts = await this.driver.$$(DOMElementsTags.slug_in_list_tags);
    let founded  = await equals_items_founded(posts, data.tag_name);
    chai.assert.isTrue(founded.length > 0);
});
When(/^I want choose random item tags$/, async function () {
    let all_items = await this.driver.$$(DOMElementsTags.tags);
    let position_item_to_select = Math.floor(Math.random() * all_items.length) + 1;
    let tag = await this.driver.$(DOMElementsTags.nth_tag.replace('####','' + position_item_to_select));
    return tag.click();
});
When(/^I want to press delete button$/, async function () {
    let delete_button = await this.driver.$(DOMElementsTags.button_delete);
    let slug =  await this.driver.$(DOMElementsTags.input_slug);
    data.tag_slug = await slug.getValue();
    return delete_button.click();
});
Then(/^I validate that tag not exist in list$/, async function () {
    let all_slugs = await this.driver.$$(DOMElementsTags.slug_in_list_tags);
    let founded = equals_items_founded(all_slugs, data.tag_slug);
    chai.assert.equal((await founded).length, 0);
});
const equals_items_founded = async (posts, strToCompare) => {
    let data = posts;
    try{
        data = await Promise.all( posts.map(async(post) => await post.getText()));
    }catch (e){}
    return data.filter(  (item) =>  strToCompare.trim().toLowerCase() ===  item.trim().toLowerCase());
}


const contains_items_founded = async (posts, strToCompare) => {
    let data = posts;
    try{
        data = await Promise.all( posts.map(async(post) => await post.getText()));
    }catch (e){}
    return data.filter(  (item) =>  item.trim().toLowerCase().includes(strToCompare.trim().toLowerCase()));
}