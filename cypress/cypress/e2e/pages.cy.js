import { faker } from '@faker-js/faker'
let page_object_json = require('../fixtures/page-object-pages.json');
const { put_data_on_element,
  validate_should_on_element,
  get_data_apriori_random,
  validate_page_status,
  visit_url, click_on_element_and_focus,
  click_on_element_if,
  click_on_element,
  get_object_if } = require("../given-when-then/page");


describe('create page draft', () => {
  beforeEach(() => {
    cy.login();
  });

  it('create page succesfull', () => {

    //given
    visit_url(page_object_json.url.editor_page);

    //when

    const execution_apriori = get_data_apriori_random();

    execution_apriori.then((object_apriori) => {

      console.log(object_apriori);
      put_data_on_element(page_object_json.classes.title_class, object_apriori.page_title);
      put_data_on_element(page_object_json.classes.content_class, object_apriori.content_title);

      visit_url(page_object_json.url.page);
      cy.wait(1000);

      //then
      validate_should_on_element(page_object_json.classes.content_list, 'contain', object_apriori.page_title);
      cy.wait(2000)

    });


 }), 
 it('create page faker without content', () => {
    //given
    visit_url(page_object_json.url.editor_page);

    //when
    const title = faker.lorem.sentence();

    put_data_on_element(page_object_json.classes.title_class, title);
    click_on_element_and_focus(page_object_json.classes.content_class);

    click_on_element(page_object_json.classes.publish_menu);
    click_on_element(page_object_json.classes.publish_button);

    visit_url(page_object_json.url.page_published);
    cy.wait(1000);
    //Then
    validate_should_on_element(page_object_json.classes.content_list, 'contain', title);
    cy.wait(3000)
  }),
  it('create page with settings', () => {
    //given
    visit_url(page_object_json.url.editor_page);

    //When
    const execution_apriori = get_data_apriori_random();

    execution_apriori.then((object_apriori) => {

      put_data_on_element(page_object_json.classes.title_class, object_apriori.page_title);
      put_data_on_element(page_object_json.classes.content_class, object_apriori.content_title);

      click_on_element_and_focus(page_object_json.classes.page_settings);

      put_data_on_element(page_object_json.classes.page_settings_slug, object_apriori.slug_title);
      put_data_on_element(page_object_json.classes.page_setting_custom_excerpt, object_apriori.slug_content);

      click_on_element_and_focus(page_object_json.classes.button_close);

      click_on_element_and_focus(page_object_json.classes.content_class);

      click_on_element(page_object_json.classes.publish_menu);
      click_on_element(page_object_json.classes.publish_button);

      visit_url(page_object_json.url.page_published);
      cy.wait(1400)

      //Then
      validate_should_on_element(page_object_json.classes.content_list, 'contain', object_apriori.page_title);

      cy.wait(3000)


    });
  }),
  it('create page oversize title without message alert', () => {
      //Given
      visit_url(page_object_json.url.editor_page);

      let title = faker.lorem.sentence(50);

      //When
      put_data_on_element(page_object_json.classes.title_class, title);
      put_data_on_element(page_object_json.classes.content_class, faker.lorem.paragraph());

      click_on_element_and_focus(page_object_json.classes.page_settings);

      put_data_on_element(page_object_json.classes.page_settings_slug, faker.lorem.sentence());
      put_data_on_element(page_object_json.classes.page_setting_custom_excerpt, faker.lorem.sentence());

      click_on_element_and_focus(page_object_json.classes.button_close);

      visit_url(page_object_json.url.page);
      cy.wait(500);

      get_object_if(page_object_json.classes.modal_content, 'be.visible').then(() => {
        click_on_element_if('button', 'Leave');
      });

      //Then
      validate_should_on_element(page_object_json.classes.content_list, 'not.contain', title);
      cy.wait(3000)
    }),
    it('create page oversize title with message alert', () => {
      //Given
      visit_url(page_object_json.url.editor_page);

      let title = faker.lorem.sentence();

      //When
      put_data_on_element(page_object_json.classes.title_class, title);
      put_data_on_element(page_object_json.classes.content_class, faker.lorem.paragraph());

      cy.wait(1000);

      title = faker.lorem.sentence(50);
      put_data_on_element(page_object_json.classes.title_class, title);

      click_on_element(page_object_json.classes.publish_menu);
      click_on_element(page_object_json.classes.publish_button);

      visit_url(page_object_json.url.page);
      cy.wait(1000);

      get_object_if(page_object_json.classes.modal_content, 'be.visible').then(() => {
        click_on_element_if('button', 'Leave');
      });
      //Then
      validate_should_on_element(page_object_json.classes.content_list, 'not.contain', title);
      cy.wait(3000)
    }),
    it('create page oversize except setting with message alert', () => {
      //Given
      visit_url(page_object_json.url.editor_page);

      let title = faker.lorem.sentence();

      //When
      put_data_on_element(page_object_json.classes.title_class, title);
      put_data_on_element(page_object_json.classes.content_class, faker.lorem.paragraph());
      cy.wait(1000);


      click_on_element_and_focus(page_object_json.classes.page_settings);
      put_data_on_element(page_object_json.classes.page_settings_slug, faker.lorem.sentence());
      put_data_on_element(page_object_json.classes.page_setting_custom_excerpt, faker.lorem.paragraph(20));

      click_on_element_and_focus(page_object_json.classes.button_close);

      click_on_element(page_object_json.classes.publish_menu);
      click_on_element(page_object_json.classes.publish_button);

      visit_url(page_object_json.url.page_published);

      cy.wait(500);

      get_object_if(page_object_json.classes.modal_content, 'be.visible').then(() => {
        click_on_element_if('button', 'Leave');
      });

      cy.wait(1000);

      //Then
      validate_should_on_element(page_object_json.classes.content_list, 'not.contain', title);


      cy.wait(3000)
    }),
    it('create page with metadata settings', () => {
      //Given
      visit_url(page_object_json.url.editor_page);

      let title = faker.lorem.sentence();


      const execution_apriori = get_data_apriori_random();

      execution_apriori.then((object_apriori) => {
        put_data_on_element(page_object_json.classes.title_class, object_apriori.page_title);
        put_data_on_element(page_object_json.classes.content_class, object_apriori.content_title);
        cy.wait(1000);


        click_on_element_and_focus(page_object_json.classes.page_settings);
        put_data_on_element(page_object_json.classes.page_settings_slug, object_apriori.slug_title);
        put_data_on_element(page_object_json.classes.page_setting_custom_excerpt, object_apriori.slug_content);

        get_object_if(page_object_json.classes.nav_list, 'be.visible').then(() => {
          click_on_element_if('button', 'Meta data');
        });

        put_data_on_element(page_object_json.classes.page_setting_meta_title, object_apriori.meta_title);
        put_data_on_element(page_object_json.classes.page_setting_meta_description, object_apriori.meta_content);
        put_data_on_element(page_object_json.classes.page_setting_canonicalUrl, object_apriori.url_canonical);

        click_on_element(page_object_json.classes.button_back);
        click_on_element_and_focus(page_object_json.classes.button_close);

        click_on_element(page_object_json.classes.publish_menu);
        click_on_element(page_object_json.classes.publish_button);

        visit_url(page_object_json.url.page_published);
        cy.wait(500)
        //Then
        validate_should_on_element(page_object_json.classes.content_list, 'contain', object_apriori.page_title);
        cy.wait(3000)
      });
    }),
    it('create page with metadata settings invalid url', () => {
      //Given
      visit_url(page_object_json.url.editor_page);


      let title = faker.lorem.sentence();

      put_data_on_element(page_object_json.classes.title_class, title);
      put_data_on_element(page_object_json.classes.content_class, faker.lorem.paragraph());
      cy.wait(1000);

      click_on_element_and_focus(page_object_json.classes.page_settings);
      put_data_on_element(page_object_json.classes.page_settings_slug, faker.lorem.sentence());
      put_data_on_element(page_object_json.classes.page_setting_custom_excerpt, faker.lorem.sentence());

      get_object_if(page_object_json.classes.nav_list, 'be.visible').then(() => {
        click_on_element_if('button', 'Meta data');
      });

      put_data_on_element(page_object_json.classes.page_setting_meta_title, faker.lorem.word());
      put_data_on_element(page_object_json.classes.page_setting_meta_description, faker.lorem.sentence());
      put_data_on_element(page_object_json.classes.page_setting_canonicalUrl, faker.lorem.word());


      click_on_element(page_object_json.classes.button_back);
      click_on_element_and_focus(page_object_json.classes.button_close);

      click_on_element(page_object_json.classes.publish_menu);
      click_on_element(page_object_json.classes.publish_button);


      visit_url(page_object_json.url.page_published);

      get_object_if(page_object_json.classes.modal_content, 'be.visible').then(() => {
        click_on_element_if('button', 'Leave');
      });
      cy.wait(1000);

      //Then
      validate_should_on_element(page_object_json.classes.content_list, 'not.contain', title);
      cy.wait(3000)
    }),
    it('create page with metadata settings oversize meta title', () => {
      //Given
      visit_url(page_object_json.url.editor_page);

      let title = faker.lorem.sentence();

      //When
      put_data_on_element(page_object_json.classes.title_class, title);
      put_data_on_element(page_object_json.classes.content_class, faker.lorem.paragraph());
      cy.wait(1000);

      click_on_element_and_focus(page_object_json.classes.page_settings);
      put_data_on_element(page_object_json.classes.page_settings_slug, faker.lorem.sentence());
      put_data_on_element(page_object_json.classes.page_setting_custom_excerpt, faker.lorem.sentence());

      get_object_if(page_object_json.classes.nav_list, 'be.visible').then(() => {
        click_on_element_if('button', 'Meta data');
      });


      put_data_on_element(page_object_json.classes.page_setting_meta_title, faker.lorem.sentence(50));
      put_data_on_element(page_object_json.classes.page_setting_meta_description, faker.lorem.sentence());
      put_data_on_element(page_object_json.classes.page_setting_canonicalUrl, faker.internet.url());


      click_on_element(page_object_json.classes.button_back);
      click_on_element_and_focus(page_object_json.classes.button_close);

      click_on_element(page_object_json.classes.publish_menu);
      click_on_element(page_object_json.classes.publish_button);

      visit_url(page_object_json.url.page_published);


      get_object_if(page_object_json.classes.modal_content, 'be.visible').then(() => {
        click_on_element_if('button', 'Leave');
      });
      cy.wait(1000);

      //Then
      validate_should_on_element(page_object_json.classes.content_list, 'not.contain', title);
      cy.wait(3000)
    }),
    it('create page with metadata oversize meta description', () => {
      //Given
      visit_url(page_object_json.url.editor_page);

      let title = faker.lorem.sentence();

      //When
      put_data_on_element(page_object_json.classes.title_class, title);
      put_data_on_element(page_object_json.classes.content_class, faker.lorem.paragraph());
      cy.wait(1000);


      click_on_element_and_focus(page_object_json.classes.page_settings);
      put_data_on_element(page_object_json.classes.page_settings_slug, faker.lorem.sentence());
      put_data_on_element(page_object_json.classes.page_setting_custom_excerpt, faker.lorem.sentence());

      get_object_if(page_object_json.classes.nav_list, 'be.visible').then(() => {
        click_on_element_if('button', 'Meta data');
      });

      put_data_on_element(page_object_json.classes.page_setting_meta_title, faker.lorem.word());
      put_data_on_element(page_object_json.classes.page_setting_meta_description, faker.lorem.paragraph(20));
      put_data_on_element(page_object_json.classes.page_setting_canonicalUrl, faker.internet.url());

      click_on_element(page_object_json.classes.button_back);
      click_on_element_and_focus(page_object_json.classes.button_close);

      click_on_element(page_object_json.classes.publish_menu);
      click_on_element(page_object_json.classes.publish_button);

      visit_url(page_object_json.url.page_published);

      get_object_if(page_object_json.classes.modal_content, 'be.visible').then(() => {
        click_on_element_if('button', 'Leave');
      });
      cy.wait(1000);

      //Then
      validate_should_on_element(page_object_json.classes.content_list, 'not.contain', title);

      cy.wait(3000)
    }),
    it('create page with twitter succesfull', () => {
      //Given
      visit_url(page_object_json.url.editor_page);

      const execution_apriori = get_data_apriori_random();

      execution_apriori.then((object_apriori) => {
        //When
        put_data_on_element(page_object_json.classes.title_class, object_apriori.page_title);
        put_data_on_element(page_object_json.classes.content_class, object_apriori.content_title);
        cy.wait(1000);

        click_on_element_and_focus(page_object_json.classes.page_settings);
        put_data_on_element(page_object_json.classes.page_settings_slug, object_apriori.slug_title);
        put_data_on_element(page_object_json.classes.page_setting_custom_excerpt, object_apriori.slug_content);

        get_object_if(page_object_json.classes.nav_list, 'be.visible').then(() => {
          click_on_element_if('button', 'Twitter card');
        });

        put_data_on_element(page_object_json.classes.page_setting_twitter_title, object_apriori.twitter_title);
        put_data_on_element(page_object_json.classes.page_setting_twitter_description, object_apriori.twitter_content);

        click_on_element(page_object_json.classes.button_back);
        click_on_element_and_focus(page_object_json.classes.button_close);

        click_on_element(page_object_json.classes.publish_menu);
        click_on_element(page_object_json.classes.publish_button);


        visit_url(page_object_json.url.page_published);
        cy.wait(1000)

        //Then
        validate_should_on_element(page_object_json.classes.content_list, 'contain', object_apriori.page_title);
        cy.wait(3000)

      });

    }),
    it('create page with twitter oversize title', () => {
      //Given
      visit_url(page_object_json.url.editor_page);

      let title = faker.lorem.sentence();

      //When
      put_data_on_element(page_object_json.classes.title_class, title);
      put_data_on_element(page_object_json.classes.content_class, faker.lorem.paragraph());
      cy.wait(1000);

      click_on_element_and_focus(page_object_json.classes.page_settings);
      put_data_on_element(page_object_json.classes.page_settings_slug, faker.lorem.sentence());
      put_data_on_element(page_object_json.classes.page_setting_custom_excerpt, faker.lorem.sentence());

      get_object_if(page_object_json.classes.nav_list, 'be.visible').then(() => {
        click_on_element_if('button', 'Twitter card');
      });

      put_data_on_element(page_object_json.classes.page_setting_twitter_title, faker.lorem.sentence(50));
      put_data_on_element(page_object_json.classes.page_setting_twitter_description, faker.lorem.paragraph());


      click_on_element(page_object_json.classes.button_back);
      click_on_element_and_focus(page_object_json.classes.button_close);

      click_on_element(page_object_json.classes.publish_menu);
      click_on_element(page_object_json.classes.publish_button);


      visit_url(page_object_json.url.page_published);

      get_object_if(page_object_json.classes.modal_content, 'be.visible').then(() => {
        click_on_element_if('button', 'Leave');
      });
      cy.wait(1000);

      //Then
      validate_should_on_element(page_object_json.classes.content_list, 'not.contain', title);

      cy.wait(3000)
    }),
    it('create page with twitter oversize description', () => {
      //Given
      visit_url(page_object_json.url.editor_page);

      let title = faker.lorem.sentence();


      //When
      put_data_on_element(page_object_json.classes.title_class, title);
      put_data_on_element(page_object_json.classes.content_class, faker.lorem.paragraph());
      cy.wait(1000);

      click_on_element_and_focus(page_object_json.classes.page_settings);
      put_data_on_element(page_object_json.classes.page_settings_slug, faker.lorem.sentence());
      put_data_on_element(page_object_json.classes.page_setting_custom_excerpt, faker.lorem.sentence());

      get_object_if(page_object_json.classes.nav_list, 'be.visible').then(() => {
        click_on_element_if('button', 'Twitter card');
      });


      put_data_on_element(page_object_json.classes.page_setting_twitter_title, faker.lorem.sentence());
      put_data_on_element(page_object_json.classes.page_setting_twitter_description, faker.lorem.paragraph(50));

      click_on_element(page_object_json.classes.button_back);
      click_on_element_and_focus(page_object_json.classes.button_close);

      click_on_element(page_object_json.classes.publish_menu);
      click_on_element(page_object_json.classes.publish_button);


      visit_url(page_object_json.url.page_published);

      get_object_if(page_object_json.classes.modal_content, 'be.visible').then(() => {
        click_on_element_if('button', 'Leave');
      });
      cy.wait(1000);

      //Then
      validate_should_on_element(page_object_json.classes.content_list, 'not.contain', title);

      cy.wait(3000)

    }),
    it('create page with facebook succesfull', () => {
      //Given
      visit_url(page_object_json.url.editor_page);



      const execution_apriori = get_data_apriori_random();

      execution_apriori.then((object_apriori) => {

        //When
        put_data_on_element(page_object_json.classes.title_class, object_apriori.page_title);
        put_data_on_element(page_object_json.classes.content_class, object_apriori.content_title);
        cy.wait(1000);

        click_on_element_and_focus(page_object_json.classes.page_settings);
        put_data_on_element(page_object_json.classes.page_settings_slug, object_apriori.slug_title);
        put_data_on_element(page_object_json.classes.page_setting_custom_excerpt, object_apriori.slug_content);

        get_object_if(page_object_json.classes.nav_list, 'be.visible').then(() => {
          click_on_element_if('button', 'Facebook card');
        });

        put_data_on_element(page_object_json.classes.page_setting_og_title, object_apriori.facebook_title);
        put_data_on_element(page_object_json.classes.page_setting_og_description, object_apriori.facebook_content);

        click_on_element(page_object_json.classes.button_back);
        click_on_element_and_focus(page_object_json.classes.button_close);

        click_on_element(page_object_json.classes.publish_menu);
        click_on_element(page_object_json.classes.publish_button);

        visit_url(page_object_json.url.page_published);

        cy.wait(1000)

        //Then
        validate_should_on_element(page_object_json.classes.content_list, 'contain', object_apriori.page_title);
        cy.wait(3000)
      });
    }),
   it('create page with facebook oversize description', () => {
      //Given
      visit_url(page_object_json.url.editor_page);

      let title = faker.lorem.sentence();

      //When
      put_data_on_element(page_object_json.classes.title_class, title);
      put_data_on_element(page_object_json.classes.content_class, faker.lorem.paragraph());
      cy.wait(1000);

      click_on_element_and_focus(page_object_json.classes.page_settings);
      put_data_on_element(page_object_json.classes.page_settings_slug, faker.lorem.sentence());
      put_data_on_element(page_object_json.classes.page_setting_custom_excerpt, faker.lorem.sentence());

      get_object_if(page_object_json.classes.nav_list, 'be.visible').then(() => {
        click_on_element_if('button', 'Facebook card');
      });

      put_data_on_element(page_object_json.classes.page_setting_og_title, faker.lorem.sentence());
      put_data_on_element(page_object_json.classes.page_setting_og_description, faker.lorem.paragraph(50));

      click_on_element(page_object_json.classes.button_back);
      click_on_element_and_focus(page_object_json.classes.button_close);

      click_on_element(page_object_json.classes.publish_menu);
      click_on_element(page_object_json.classes.publish_button);

      visit_url(page_object_json.url.page_published);

      get_object_if(page_object_json.classes.modal_content, 'be.visible').then(() => {
        click_on_element_if('button', 'Leave');
      });
      cy.wait(1000)

      //Then
      validate_should_on_element(page_object_json.classes.content_list, 'not.contain', title);

      cy.wait(3000)
    }),
    it('create page with code injection succesfull', () => {
      visit_url(page_object_json.url.editor_page);

      const execution_apriori = get_data_apriori_random();

      execution_apriori.then((object_apriori) => {

        //When
        put_data_on_element(page_object_json.classes.title_class, object_apriori.page_title);
        put_data_on_element(page_object_json.classes.content_class, object_apriori.content_title);
        cy.wait(1000);


        click_on_element_and_focus(page_object_json.classes.page_settings);
        put_data_on_element(page_object_json.classes.page_settings_slug, object_apriori.slug_title);
        put_data_on_element(page_object_json.classes.page_setting_custom_excerpt, object_apriori.slug_content);

        get_object_if(page_object_json.classes.nav_list, 'be.visible').then(() => {
          click_on_element_if('button', 'Code injection');
        });

        cy.get(page_object_json.classes['codeMirror-scroll'], { multiple: true }).each(($codeInjection) => {
          cy.wrap($codeInjection).type(object_apriori.code_injection);
        });


        click_on_element(page_object_json.classes.button_back);
        click_on_element_and_focus(page_object_json.classes.button_close);

        click_on_element(page_object_json.classes.publish_menu);
        click_on_element(page_object_json.classes.publish_button);

        visit_url(page_object_json.url.page);


        cy.wait(1000);

        //Then
        validate_should_on_element(page_object_json.classes.content_list, 'contain', object_apriori.page_title);
        cy.wait(3000)
      });
    }),
    it('create page with facebook oversize title', () => {
      //Given
      visit_url(page_object_json.url.editor_page);

      let title = faker.lorem.sentence();

      //When
      put_data_on_element(page_object_json.classes.title_class, title);
      put_data_on_element(page_object_json.classes.content_class, faker.lorem.paragraph());
      cy.wait(1000);

      click_on_element_and_focus(page_object_json.classes.page_settings);
      put_data_on_element(page_object_json.classes.page_settings_slug, faker.lorem.sentence());
      put_data_on_element(page_object_json.classes.page_setting_custom_excerpt, faker.lorem.sentence());

      get_object_if(page_object_json.classes.nav_list, 'be.visible').then(() => {
        click_on_element_if('button', 'Facebook card');
      });

      put_data_on_element(page_object_json.classes.page_setting_og_title, faker.lorem.sentence(50));
      put_data_on_element(page_object_json.classes.page_setting_og_description, faker.lorem.paragraph());

      click_on_element(page_object_json.classes.button_back);
      click_on_element_and_focus(page_object_json.classes.button_close);

      click_on_element(page_object_json.classes.publish_menu);
      click_on_element(page_object_json.classes.publish_button);

      visit_url(page_object_json.url.page);

      get_object_if(page_object_json.classes.modal_content, 'be.visible').then(() => {
        click_on_element_if('button', 'Leave');
      });
      cy.wait(1000)

      //Then
      validate_should_on_element(page_object_json.classes.content_list, 'not.contain', title);

      cy.wait(3000)
    })
})
