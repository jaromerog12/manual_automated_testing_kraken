const GeneralPage = require('../pages/GeneralPage');
const LoginPage = require('../pages/LoginPages');
const puppeteer = require('puppeteer');

const Escenario1 = async () => {
    ///Given
    const browser = await puppeteer.launch();
    const escenario = "Escenario1";
    const page = await browser.newPage();
    const promises = [];
    promises.push(page.waitForNavigation());
    const login = new LoginPage(page, escenario);
    const general = new GeneralPage(page, escenario)

    ///When
    await login.abrirPagina();
    await login.ingresarCredenciales();
    await login.tomarImagen("1.autenticacion");
    await login.autenticar();
    await general.abrirPagina();
    await general.abrirDesplegableTitulo();
    await general.tomarImagen("2.configuracion");
    await general.modificarTituloDescripcion();
    await general.tomarImagen("3.descripcion_modificada");
    await general.guardar();
    await general.abrirPagina();
    await general.abrirDesplegableTitulo();

    ///Then
    await general.tomarImagen("4.confirmacion");
    return;
}

const Escenario2 = async () => {
    ///Given
    const browser = await puppeteer.launch();
    const escenario = "Escenario2";
    const page = await browser.newPage();
    const promises = [];
    promises.push(page.waitForNavigation());
    const login = new LoginPage(page, escenario);
    const general = new GeneralPage(page, escenario);

    ///When
    await login.abrirPagina();
    await login.ingresarCredenciales();
    await login.tomarImagen("1.autenticacion");
    await login.autenticar();
    await general.abrirPagina();
    await general.abrirDesplegableMeta();
    await general.tomarImagen("2.configuracion");
    await general.modificarMeta();
    await general.tomarImagen("3.descripcion_modificada");
    await general.guardar();
    await general.abrirPagina();
    await general.abrirDesplegableMeta();

    ///Then
    await general.tomarImagen("4.confirmacion");
    return;
}

const Escenario14 = async () => {
    ///Given
    const browser = await puppeteer.launch();
    const escenario = "Escenario14";
    const page = await browser.newPage();
    const promises = [];
    promises.push(page.waitForNavigation());
    const login = new LoginPage(page, escenario);
    const general = new GeneralPage(page, escenario);

    ///When
    await login.abrirPagina();
    await login.ingresarCredenciales();
    await login.tomarImagen("1.autenticacion");
    await login.autenticar();
    await general.abrirPagina();
    await general.abrirDesplegableTwitter();
    await general.tomarImagen("2.configuracion");
    await general.modificarTwitter();
    await general.tomarImagen("3.descripcion_modificada");
    await general.guardar();
    await general.abrirPagina();
    await general.abrirDesplegableTwitter();

    ///Then
    await general.tomarImagen("4.confirmacion");
    return;
}

const Escenario15 = async () => {
    ///Given
    const browser = await puppeteer.launch();
    const escenario = "Escenario15";
    const page = await browser.newPage();
    const promises = [];
    promises.push(page.waitForNavigation());
    const login = new LoginPage(page, escenario);
    const general = new GeneralPage(page, escenario);

    ///When
    await login.abrirPagina();
    await login.ingresarCredenciales();
    await login.tomarImagen("1.autenticacion");
    await login.autenticar();
    await general.abrirPagina();
    await general.abrirDesplegableFacebook();
    await general.tomarImagen("2.configuracion");
    await general.modificarFacebook();
    await general.tomarImagen("3.descripcion_modificada");
    await general.guardar();
    await general.abrirPagina();
    await general.abrirDesplegableFacebook();

    ///Then
    await general.tomarImagen("4.confirmacion");
    return;
}

module.exports = { Escenario1, Escenario2, Escenario14, Escenario15 };
