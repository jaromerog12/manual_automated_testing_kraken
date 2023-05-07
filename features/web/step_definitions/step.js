const {faker} = require('@faker-js/faker');
const { Given, When, Then, After} = require('@cucumber/cucumber');
const DOMCommonsElements = require('./page_object/page_object_common');
const DOMElementsPost  = require('./page_object/page_object_post');
const urls = require('./url/page_url');
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
    let founded  = await items_founded(posts, data.title_post);
    chai.assert.isTrue(founded.length > 0);
});
Then(/^I want validate new item with published status$/, async function () {
    let items = await this.driver.$$(DOMCommonsElements.options.item_title);
    let founded  = await items_founded(items, data.title_post);
    chai.assert.isTrue(founded.length > 0);
});

Then(/^I want navigate to draft status post$/, async function () {
    let element = await this.driver.$(DOMElementsPost.draft_status_posts);
    await element.click();
    chai.assert(this.driver.getUrl, urls.posts.published);
});
Then(/^I want validate new post with draft status$/, async function () {
    let posts = await this.driver.$$(DOMCommonsElements.options.item_title);
    let founded  = await items_founded(posts, data.title_post);
    chai.assert.isTrue(founded.length > 0);
});
When(/^I open all posts$/, async function () {
    let element = await this.driver.$(DOMElementsPost.open_all_posts);
    return element.click();
});
When(/^I open (.*) filter$/, async function (type_filter) {
    let position_filter = DOMCommonsElements.filter_posts.order_filters[type_filter];
    let element = await this.driver.$(DOMElementsPost.filters.replace('##filters##', position_filter));
    return element.click();
});
When(/^I select filter (.*) option$/, async function (filter_status) {
    let position_status_in_menu = DOMCommonsElements.filter_posts.order_menu_status[filter_status];
    let element = await this.driver.$(DOMElementsPost.filter_option.replace('####', position_status_in_menu));
    return element.click();
});
When(/^I want filter by (.*) items$/, async function (status) {
    let all_posts = await this.driver.$$(DOMCommonsElements.options.list_items_status);
    data.status_filter  = await items_founded(all_posts, status);
});
Then(/^I want validate that filter only contain (.*) status$/, function (status) {
    let data_status = data.status_filter.filter((s) => status.trim().toLowerCase() !== s.trim().toLowerCase())
    chai.assert.equal(data_status.length, 0);
});
When(/^I want choose filter by random author$/, async function () {
    let all_posts = await this.driver.$$(DOMElementsPost.filter_all_options);
    let position_author_in_menu = Math.floor(Math.random() * all_posts.length) + 1;
    let element = await this.driver.$(DOMElementsPost.filter_option.replace('####', '' + position_author_in_menu));
    data.author_selected = await element.getText();
    return element.click();
});
Then(/^I want validate posts lists only contain author selected in author filter$/, async function () {
    let posts = await this.driver.$$(DOMCommonsElements.options.item_title);
    let founded  = await items_founded(posts, data.author_selected);
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
When(/^I want press delete posts button$/, async function () {
    let button = await this.driver.$(DOMCommonsElements.options.item_delete_btn);
    return button.click();
});
When(/^I want press confirm delete posts button$/, async function () {
    let button = await this.driver.$(DOMElementsPost.post_confirm_delete);
    return button.click();
});
Then(/^I want validate lists items, after delete$/, async function () {
    let all_items = await this.driver.$$(DOMCommonsElements.options.list_items);
    let ids = await Promise.all( all_items.map(async(a) => (await a.getAttribute('href')).split('/')[3]));
    let founded = items_founded(ids, data.id_item_selected);
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
const items_founded = async (posts, strToCompare) => {
    let data = posts;
    try{
        data = await Promise.all( posts.map(async(post) => await post.getText()));
    }catch (e){}
    return data.filter(  (item) =>  strToCompare.trim().toLowerCase() ===  item.trim().toLowerCase());
}
