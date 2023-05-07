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
When('I write post', async function () {
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
When('I click publish post', async function () {
    let element = await this.driver.$(DOMElementsPost.publish);
    return element.click();
});
When(/^click back list posts$/, async function () {
    let element = await this.driver.$(DOMElementsPost.back_list_posts);
    return element.click();
});
Then(/^I want validate post url$/, async function () {
    chai.assert(this.driver.getUrl, urls.posts.all);
});
Then(/^I should show post in list$/, async  function () {
    let posts = await this.driver.$$(DOMElementsPost.list_posts_title);
    let founded  = await postsFounded(posts, data.title_post);
    chai.assert.isTrue(founded.length > 0);
});
Then(/^I want navigate to published status post$/, async function () {
    let element = await this.driver.$(DOMElementsPost.published_status_posts);
    await element.click();
    chai.assert(this.driver.getUrl, urls.posts.published);
});
Then(/^I want validate new post with published status$/, async function () {
    let posts = await this.driver.$$(DOMElementsPost.list_posts_title);
    let founded  = await postsFounded(posts, data.title_post);
    chai.assert.isTrue(founded.length > 0);
});

Then(/^I want navigate to draft status post$/, async function () {
    let element = await this.driver.$(DOMElementsPost.draft_status_posts);
    await element.click();
    chai.assert(this.driver.getUrl, urls.posts.published);
});
Then(/^I want validate new post with draft status$/, async function () {
    let posts = await this.driver.$$(DOMElementsPost.list_posts_title);
    let founded  = await postsFounded(posts, data.title_post);
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
When(/^I want filter by (.*) posts$/, async function (status) {
    let all_posts = await this.driver.$$(DOMElementsPost.list_posts_status);
    data.status_filter  = await postsFounded(all_posts, status);
});
Then(/^I want validate that filter only contain (.*) status$/, function (status) {
    let data_status = data.status_filter.filter((s) => status.trim().toLowerCase() !== s.trim().toLowerCase())
    chai.assert.equal(data_status.length, 0);
    chai.assert.isTrue(data.status_filter.length > 0);
});
When(/^I want choose filter by random author$/, async function () {
    let all_posts = await this.driver.$$(DOMElementsPost.filter_all_options);
    let position_author_in_menu = Math.floor(Math.random() * all_posts.length) + 1;
    let element = await this.driver.$(DOMElementsPost.filter_option.replace('####', '' + position_author_in_menu));
    data.author_selected = await element.getText();
    return element.click();
});
Then(/^I want validate posts lists only contain author selected in author filter$/, async function () {
    let posts = await this.driver.$$(DOMElementsPost.list_posts_title);
    let founded  = await postsFounded(posts, data.author_selected);
    let authors = founded.filter((s) => data.author_selected.trim().toLowerCase() !== s.trim().toLowerCase())
    chai.assert.equal(authors.length, 0);
});
When(/^I want choose random posts$/, async function () {
    let all_posts = await this.driver.$$(DOMElementsPost.list_posts);
    data.posts_quantity = all_posts.length;
    let position_post_to_delete = Math.floor(Math.random() * all_posts.length) + 1;
    let posts = await this.driver.$(DOMElementsPost.posts.replace('####','' + position_post_to_delete));
    return posts.click();
});
When(/^I want open posts settings$/, async function () {
    let button = await this.driver.$(DOMElementsPost.post_settings);
    return button.click();
});
When(/^I want press delete posts button$/, async function () {
    let button = await this.driver.$(DOMElementsPost.posts_delete);
    return button.click();
});
When(/^I want press confirm delete posts button$/, async function () {
    let button = await this.driver.$(DOMElementsPost.post_confirm_delete);
    return button.click();
});
Then(/^I want validate lists posts, post delete$/, async function () {
    let all_posts = await this.driver.$$(DOMElementsPost.list_posts);
    chai.assert.equal(all_posts.length, data.posts_quantity - 1);
});
const postsFounded = async (posts, strToCompare) => {
    let data = await Promise.all( posts.map(async(post) => await post.getText()));
    return data.filter(  (item) =>  strToCompare.trim().toLowerCase() ===  item.trim().toLowerCase());
}
