const LoginPage = require('../pages/LoginPages');
const DesignPage = require('../pages/DesignPage');
const puppeteer = require('puppeteer');
const PagesPage = require('../pages/PagesPage');

const Escenario10 = async () => {
    const browser = await puppeteer.launch();
    const escenario = "Escenario10";
    const page = await browser.newPage();
    const promises = [];
    promises.push(page.waitForNavigation());
    const login = new LoginPage(page, escenario);
    const design = new DesignPage(page, escenario)
    const pageObj = new PagesPage(page, escenario);
    await login.abrirPagina();
    await login.ingresarCredenciales();
    await login.tomarImagen("1.autenticacion");
    await login.autenticar();

    await pageObj.abrirPagina();
    await pageObj.nuevoPage();
    const pagePath = await pageObj.llenarFormulario();
    await pageObj.publicarPage();
    await pageObj.continuarPublicacion();
    await pageObj.publicarAhoraPage();

    await design.abrirPagina()
    await design.tomarImagen("2.nav_bars");

    await design.agregarNombreMenu(pagePath[1])
    await design.tomarImagen("3.agregar_navs");

    await design.guardarCambios();
    await design.abrirPrincipal();

    await design.tomarImagen("4.principal");

    return;
}

const Escenario11 = async () => {
    const browser = await puppeteer.launch();
    const escenario = "Escenario11";
    const page = await browser.newPage();
    const promises = [];
    promises.push(page.waitForNavigation());
    const login = new LoginPage(page, escenario);
    const design = new DesignPage(page, escenario)
    const pageObj = new PagesPage(page, escenario);
    await login.abrirPagina();
    await login.ingresarCredenciales();
    await login.tomarImagen("1.autenticacion");
    await login.autenticar();

    await pageObj.abrirPagina();
    await pageObj.nuevoPage();
    const pagePath = await pageObj.llenarFormulario();
    await pageObj.publicarPage();
    await pageObj.continuarPublicacion();
    await pageObj.publicarAhoraPage();

    await design.abrirPagina()
    await design.tomarImagen("2.nav_bars");

    await design.agregarNombreMenuSecundario(pagePath[1])
    await design.tomarImagen("3.agregar_navs");

    await design.guardarCambios();
    await design.abrirPrincipal();

    await design.tomarImagen("4.principal");

    return;
}

const Escenario12 = async () => {
    const browser = await puppeteer.launch();
    const escenario = "Escenario12";
    const page = await browser.newPage();
    const promises = [];
    promises.push(page.waitForNavigation());
    const login = new LoginPage(page, escenario);
    const design = new DesignPage(page, escenario)
    const pageObj = new PagesPage(page, escenario);
    await login.abrirPagina();
    await login.ingresarCredenciales();
    await login.tomarImagen("1.autenticacion");
    await login.autenticar();

    await pageObj.abrirPagina();
    await pageObj.nuevoPage();
    const pagePath = await pageObj.llenarFormulario();
    await pageObj.publicarPage();
    await pageObj.continuarPublicacion();
    await pageObj.publicarAhoraPage();

    await design.abrirPagina()
    await design.tomarImagen("2.nav_bars");

    await design.eliminarMenu()
    await design.tomarImagen("3.eliminar_navs");

    await design.guardarCambios();
    await design.abrirPrincipal();

    await design.tomarImagen("4.principal");

    return;
}

const Escenario13 = async () => {
    const browser = await puppeteer.launch();
    const escenario = "Escenario13";
    const page = await browser.newPage();
    const promises = [];
    promises.push(page.waitForNavigation());
    const login = new LoginPage(page, escenario);
    const design = new DesignPage(page, escenario)
    const pageObj = new PagesPage(page, escenario);
    await login.abrirPagina();
    await login.ingresarCredenciales();
    await login.tomarImagen("1.autenticacion");
    await login.autenticar();

    await pageObj.abrirPagina();
    await pageObj.nuevoPage();
    const pagePath = await pageObj.llenarFormulario();
    await pageObj.publicarPage();
    await pageObj.continuarPublicacion();
    await pageObj.publicarAhoraPage();

    await design.abrirPagina()
    await design.tomarImagen("2.nav_bars");

    await design.eliminarSecundarioMenu()
    await design.tomarImagen("3.eliminar_navs");

    await design.guardarCambios();
    await design.abrirPrincipal();

    await design.tomarImagen("4.principal");

    return;
}

module.exports = {Escenario10, Escenario11, Escenario12, Escenario13}