const { put_data_on_element,
    visit_url, 
    click_on_element_and_focus,
    validate_exist_on_element, 
    click_on_element,
    validate_not_exist_on_element } = require("../given-when-then/profile");
let page_object_json = require('../fixtures/page-object-profile.json');
import { faker } from '@faker-js/faker'

describe('update-profile', () => {
    beforeEach(() => {
        cy.login();
      });

      it('oversize name', () => {
        ///given 
        visit_url(page_object_json.url.dashboard);
        click_on_element(page_object_json.selectores["profile-icon"]);
        click_on_element(page_object_json.selectores["you-profile"]);
        console.log(page_object_json.selectores);

        //when
        put_data_on_element(page_object_json.selectores["user-name-input"], faker.lorem.sentence(100));

        ///Then

        click_on_element_and_focus(page_object_json.selectores['save-button']);
        validate_exist_on_element(page_object_json.selectores['error-selector']);
      });

      it('correct size name', () => {
        ///given 
        visit_url(page_object_json.url.dashboard);
        click_on_element(page_object_json.selectores["profile-icon"]);
        click_on_element(page_object_json.selectores["you-profile"]);
        console.log(page_object_json.selectores);

        //when
        put_data_on_element(page_object_json.selectores["user-name-input"], faker.lorem.sentence(3));

        ///Then

        click_on_element_and_focus(page_object_json.selectores['save-button']);
        validate_not_exist_on_element(page_object_json.selectores['error-selector']);
      });


      it('invalid email format', () => {
        ///given 
        visit_url(page_object_json.url.dashboard);
        click_on_element(page_object_json.selectores["profile-icon"]);
        click_on_element(page_object_json.selectores["you-profile"]);

        //when
        put_data_on_element(page_object_json.selectores["email-input"], faker.lorem.sentence(10));

        ///Then

        click_on_element_and_focus(page_object_json.selectores['save-button']);
        validate_exist_on_element(page_object_json.selectores['error-selector-email']);
      });
      
      it('invalid web format', () => {
        ///given 
        visit_url(page_object_json.url.dashboard);
        click_on_element(page_object_json.selectores["profile-icon"]);
        click_on_element(page_object_json.selectores["you-profile"]);

        //when
        put_data_on_element(page_object_json.selectores["user-website-input"], faker.lorem.sentence(10));

        ///Then

        click_on_element_and_focus(page_object_json.selectores['save-button']);
        validate_exist_on_element(page_object_json.selectores['error-user-web-site']);
      });

      it('valid web format', () => {
        ///given 
        visit_url(page_object_json.url.dashboard);
        click_on_element(page_object_json.selectores["profile-icon"]);
        click_on_element(page_object_json.selectores["you-profile"]);

        //when
        put_data_on_element(page_object_json.selectores["user-website-input"], faker.internet.web());

        ///Then

        click_on_element_and_focus(page_object_json.selectores['save-button']);
        validate_exist_on_element(page_object_json.selectores['error-user-web-site']);
      });

      it('invalid location format', () => {
        ///given 
        visit_url(page_object_json.url.dashboard);
        click_on_element(page_object_json.selectores["profile-icon"]);
        click_on_element(page_object_json.selectores["you-profile"]);

        //when
        put_data_on_element(page_object_json.selectores["location-input"], faker.lorem.sentence(100));

        ///Then

        click_on_element_and_focus(page_object_json.selectores['save-button']);
        validate_exist_on_element(page_object_json.selectores['error-input-location'], "be.visible");
      });

      it('valid location format', () => {
        //given 
        visit_url(page_object_json.url.dashboard);
        click_on_element(page_object_json.selectores["profile-icon"]);
        click_on_element(page_object_json.selectores["you-profile"]);

        //when
        put_data_on_element(page_object_json.selectores["location-input"], faker.lorem.word(2));

        //Then

        click_on_element_and_focus(page_object_json.selectores['save-button']);
        validate_not_exist_on_element(page_object_json.selectores['error-input-location']);
      });

      it('invalid bio format', () => {
        ///given 
        visit_url(page_object_json.url.dashboard);
        click_on_element(page_object_json.selectores["profile-icon"]);
        click_on_element(page_object_json.selectores["you-profile"]);

        //when
        put_data_on_element(page_object_json.selectores["bio-input"], faker.lorem.sentence(201));

        ///Then

        click_on_element_and_focus(page_object_json.selectores['save-button']);
        validate_exist_on_element(page_object_json.selectores['error-bio'], "be.visible");
      });

      it('valid bio format', () => {
        ///given 
        visit_url(page_object_json.url.dashboard);
        click_on_element(page_object_json.selectores["profile-icon"]);
        click_on_element(page_object_json.selectores["you-profile"]);

        //when
        put_data_on_element(page_object_json.selectores["bio-input"], faker.lorem.sentence(199));

        ///Then

        click_on_element_and_focus(page_object_json.selectores['save-button']);
        validate_exist_on_element(page_object_json.selectores['error-bio'], "be.visible");
      });      
});