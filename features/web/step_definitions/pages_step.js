const { Given, When, Then, After} = require('@cucumber/cucumber');
const {faker} = require('@faker-js/faker');
const DOMCommonsElements = require('./page_object/page_object_common');
//const DOMElementsPost  = require('./page_object/page_object_post');
const urls = require('./url/page_url');
const chai = require('chai');
const DOMElementsPage = require("./page_object/page_object_pages");

When(/^I select page option in sidebar (.*)$/, async function (sidebar_option) {
    let element = await this.driver.$(DOMCommonsElements.sidebar.pages.replace('####', DOMCommonsElements.sidebar.order[sidebar_option]));
    return element.click();
});

When(/^I want press new page button$/, async function () {
    let element = await this.driver.$(DOMElementsPage.new_page_btn);
    return element.click();
});