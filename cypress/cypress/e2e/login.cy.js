let page_object = require('../fixtures/page-object.json');
const { given_visit_url,
    when_fill_input_email,
    when_fill_input_password,
    when_button_sign_in_click,
    then_validate_class_error_button_sign_in,
    then_validate_div_has_error_class_because_characters_length_greather_that_limit_input_username,
    then_validate_div_has_not_error_class_because_characters_length_greather_that_limit_input_username} = require("../given-when-then/login");
describe('login functionalities', () => {
    it('login fail username and password incorrect - username character length = 75', () => {
        let data_visit_page = {
            port: page_object.port,
            url: page_object.urls.login
        }
        given_visit_url(data_visit_page);

        let data_username= {
            input_username: page_object.login.input_username,
            quantity: 75
        }
        when_fill_input_email(data_username);

        let data_password= {
            input_password: page_object.login.input_password
        }
        when_fill_input_password(data_password);

        //And press signIn button
        let data_button_sign_in= {
            button_sign_in: page_object.login.button_sign_in
        }
        when_button_sign_in_click(data_button_sign_in);
       then_validate_class_error_button_sign_in(data_button_sign_in);
        then_validate_div_has_not_error_class_because_characters_length_greather_that_limit_input_username();
    });


    it('login fail username and password incorrect - username character length = 76', () => {
        //Given
        let data_visit_page = {
            port: page_object.port,
            url: page_object.urls.login
        }
        given_visit_url(data_visit_page);

        let data_username= {
            input_username: page_object.login.input_username,
            quantity: 76
        }
        when_fill_input_email(data_username);

        let data_password= {
            input_password: page_object.login.input_password
        }
        when_fill_input_password(data_password);

        let data_button_sign_in= {
            button_sign_in: page_object.login.button_sign_in
        }
        when_button_sign_in_click(data_button_sign_in);
        then_validate_class_error_button_sign_in(data_button_sign_in);
    });

    it('login fail username and password incorrect - username character length = 77', () => {
        let data_visit_page = {
            port: page_object.port,
            url: page_object.urls.login
        }
        given_visit_url(data_visit_page);

        let data_username= {
            input_username: page_object.login.input_username,
            quantity: 77
        }
        when_fill_input_email(data_username);

        let data_password= {
            input_password: page_object.login.input_password
        }
        when_fill_input_password(data_password);

        let data_button_sign_in= {
            button_sign_in: page_object.login.button_sign_in
        }
        when_button_sign_in_click(data_button_sign_in);
        then_validate_class_error_button_sign_in(data_button_sign_in);
        then_validate_div_has_error_class_because_characters_length_greather_that_limit_input_username()
    });
});