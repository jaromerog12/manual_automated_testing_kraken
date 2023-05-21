import {faker} from '@faker-js/faker'
let page_object_json = require('../fixtures/page-object-staff.json');
const {  visit_url,
    click_on_element,
    click_on_element_if,
    clear_element,
    validate_contain_element,
    get_data_apriori_pseudo_random,
    put_data_on_element_force} = require("../given-when-then/staff");

describe('edit staff draft', () => {
  before(() => {
    cy.generarDataPoolPseudoAleatorio('data_apriori_staff.json','staff.json','5dc68f00');
  });
  beforeEach(() => {
    cy.login();
  });
 it('edit staff owner full name', () => {

    //Given
    visit_url(page_object_json.url.staff);

    //When
    click_on_element(page_object_json.classes.owner);

    clear_element(page_object_json.id.user_name);

    const execution_pseudo = get_data_apriori_pseudo_random();

    execution_pseudo.then((object_pseudo) => {
      put_data_on_element_force(page_object_json.id.user_name, `${object_pseudo.first_name} ${object_pseudo.last_name}`);
      click_on_element_if('button', 'Save');   
  
      validate_contain_element('button', 'Saved');
      cy.wait(2000)
    });

    
  }),
  it('edit staff owner full name oversized', () => {
    //Given
    visit_url(page_object_json.url.staff);

    //When
    click_on_element(page_object_json.classes.owner);

    clear_element(page_object_json.id.user_name);
    put_data_on_element_force(page_object_json.id.user_name, `${faker.lorem.sentence(50)}`);
    click_on_element_if('button', 'Save');  

    //Then
    validate_contain_element('button', 'Retry');
    cy.wait(2000)
  }),
  it('edit staff owner full slug', () => {
     //Given
     visit_url(page_object_json.url.staff);

    //When
    click_on_element(page_object_json.classes.owner);

    const execution_pseudo = get_data_apriori_pseudo_random();

    execution_pseudo.then((object_pseudo) => {
      clear_element(page_object_json.id.user_slug);
      put_data_on_element_force(page_object_json.id.user_slug, `${object_pseudo.user_slug}`);
      click_on_element_if('button', 'Save'); 
    
      //Then
      validate_contain_element('button', 'Saved');
      cy.wait(2000)
     });
  }),
  it('edit staff owner email invalid', () => {
    //Given
    visit_url(page_object_json.url.staff);

    //When
    click_on_element(page_object_json.classes.owner);


    clear_element(page_object_json.id.user_email);
    put_data_on_element_force(page_object_json.id.user_email, `${faker.lorem.word()}`);
    click_on_element_if('button', 'Save'); 
 
    //Then
    validate_contain_element('button', 'Retry');
    cy.wait(2000)
  }),
  it('edit staff owner location', () => {
    //Given
    visit_url(page_object_json.url.staff);

    //When
    click_on_element(page_object_json.classes.owner);

    const execution_pseudo = get_data_apriori_pseudo_random();

    execution_pseudo.then((object_pseudo) => {
      clear_element(page_object_json.id.user_location);
      put_data_on_element_force(page_object_json.id.user_location, `${object_pseudo.location}`);
      click_on_element_if('button', 'Save');   

      //Then
      validate_contain_element('button', 'Saved');
      cy.wait(2000)
    });
  }),
  it('edit staff owner location overzised', () => {
    //Given
    visit_url(page_object_json.url.staff);

    //When
    click_on_element(page_object_json.classes.owner);

    
    clear_element(page_object_json.id.user_location);
    put_data_on_element_force(page_object_json.id.user_location, `${faker.lorem.sentence(50)}`);
    click_on_element_if('button', 'Save');  
   
    //Then
    validate_contain_element('button', 'Retry');
    cy.wait(2000)
  })
  it('edit staff owner webside succesfull', () => {
    //Given
    visit_url(page_object_json.url.staff);

    //When
    click_on_element(page_object_json.classes.owner);

    const execution_pseudo = get_data_apriori_pseudo_random();

    execution_pseudo.then((object_pseudo) => {
      clear_element(page_object_json.id.user_website);
      put_data_on_element_force(page_object_json.id.user_website, `${object_pseudo.webside}`);
      click_on_element_if('button', 'Save');  
  
      //Then
      validate_contain_element('button', 'Saved');
      cy.wait(2000)
    });

 
  }),
  it('edit staff owner webside invalid', () => {
    //Given
    visit_url(page_object_json.url.staff);

    //When
    click_on_element(page_object_json.classes.owner);

    clear_element(page_object_json.id.user_website);
    put_data_on_element_force(page_object_json.id.user_website, `${faker.lorem.word()}`);
    click_on_element_if('button', 'Save');  

    //Then
    validate_contain_element('button', 'Retry');
    cy.wait(2000)
  }),
  it('edit staff owner facebook succesfull', () => {
     //Given
    visit_url(page_object_json.url.staff);

     //When
     click_on_element(page_object_json.classes.owner);

     const execution_pseudo = get_data_apriori_pseudo_random();

     execution_pseudo.then((object_pseudo) => {
      clear_element(page_object_json.id.user_facebook);
      put_data_on_element_force(page_object_json.id.user_facebook, `${object_pseudo.facebook_name}`);
      click_on_element_if('button', 'Save');    

      //Then
      validate_contain_element('button', 'Saved');
      cy.wait(2000)
     });    
  }),
  it('edit staff owner facebook invalid', () => {
     //Given
    visit_url(page_object_json.url.staff);

     //When
     click_on_element(page_object_json.classes.owner);

    const random = faker.lorem.sentence();

    const specialCharacters = '!@#$%^&*()';
    const specialText = random.replace(/[a-zA-Z0-9]/g, () => {
         return specialCharacters.charAt(Math.floor(Math.random() * specialCharacters.length));
    });

    clear_element(page_object_json.id.user_facebook);
    put_data_on_element_force(page_object_json.id.user_facebook, `${specialText} ${specialText} ${specialText}`);
    click_on_element_if('button', 'Save');  

    //Then
    validate_contain_element('button', 'Retry');
    cy.wait(2000)
  }),
  it('edit staff owner twitter succesfull', () => {
      //Given
      visit_url(page_object_json.url.staff);

      //When
      click_on_element(page_object_json.classes.owner);

      const execution_pseudo = get_data_apriori_pseudo_random();

     execution_pseudo.then((object_pseudo) => {
      clear_element(page_object_json.id.user_twitter);
      put_data_on_element_force(page_object_json.id.user_twitter, `${object_pseudo.twitter_name}`);
      click_on_element_if('button', 'Save');  
  
      validate_contain_element('button', 'Saved');
      cy.wait(2000)
     });
  }),
  it('edit staff owner bio succesfull', () => {
    //Given
    visit_url(page_object_json.url.staff);

    //When
    click_on_element(page_object_json.classes.owner);
    

    const execution_pseudo = get_data_apriori_pseudo_random();

    execution_pseudo.then((object_pseudo) => {
      clear_element(page_object_json.id.user_bio);
      put_data_on_element_force(page_object_json.id.user_bio, `${object_pseudo.bio}`);
      click_on_element_if('button', 'Save');  
  
      //Then
      validate_contain_element('button', 'Saved');
      cy.wait(2000)
    });
  }),
  it('edit Bio owner webside oversized', () => {
    //Given
    visit_url(page_object_json.url.staff);

     //When
     click_on_element(page_object_json.classes.owner);
  
     clear_element(page_object_json.id.user_bio);
     put_data_on_element_force(page_object_json.id.user_bio, `${faker.lorem.paragraph(13)}`);
     click_on_element_if('button', 'Save');     

    //Then
    validate_contain_element('button', 'Retry');
    cy.wait(2000)
  }),
  it('edit staff owner twitter invalid', () => {
    //Given
    visit_url(page_object_json.url.staff);
    
     //When
     click_on_element(page_object_json.classes.owner);

    const random = faker.lorem.sentence();

    const specialCharacters = '!@#$%^&/\"*()';
    const specialText = random.replace(/[a-zA-Z0-9]/g, () => {
         return specialCharacters.charAt(Math.floor(Math.random() * specialCharacters.length));
    });

    clear_element(page_object_json.id.user_twitter);
    put_data_on_element_force(page_object_json.id.user_twitter, `${specialText} ${specialText}    ${specialText}`);
    click_on_element_if('button', 'Save');    

    //Then
    validate_contain_element('button', 'Saved');
    cy.wait(2000)
  })

});