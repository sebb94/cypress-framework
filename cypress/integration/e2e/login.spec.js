import {
    url,
    login_password,
    login_username
} from "../../../config"
import Navbar from '../../page-objects/components/Navbar'
import LoginPage from "../../page-objects/pages/LoginPage"

describe('Login Failed Test', () => {
    before(() => {
        cy.visit(url)
        Navbar.clickSignIn()
    });

    it('Should login with invalid credentials', () => {
        LoginPage.login('invalid_username','invalid_password')
    });

    it('Should display error message', () => {
        LoginPage.displayErrorMessage()
    });
});

describe('Login Success Test', () => {
    before(() => {
        cy.visit(url)
        Navbar.clickSignIn()
    });

    it('Should login into application', () => {
        LoginPage.login(login_username,login_password)
    });

    it('should logout from application', () => {
        Navbar.logout()
        Navbar.displaySignInButton()
    });
});