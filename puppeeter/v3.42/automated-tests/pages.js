const LoginPage = require('../pages/LoginPages');
const PagesPage = require('../pages/PagesPage');
const puppeteer = require('puppeteer');

const Escenario7 = async () => {
    const browser = await puppeteer.launch();
    const escenario = "Escenario7";
    const page = await browser.newPage();
    const promises = [];
    promises.push(page.waitForNavigation());
    const pageObj = new PagesPage(page, escenario);
    const login = new LoginPage(page, escenario);
    await login.abrirPagina();
    await login.ingresarCredenciales();
    await login.tomarImagen("1.autenticacion");
    await login.autenticar();
    await pageObj.abrirPagina();
    await pageObj.tomarImagen("2.paginas");
    await pageObj.nuevoPage();
    const pagePath = await pageObj.llenarFormulario();
    await pageObj.tomarImagen("3.pagina_creada");
    await pageObj.publicarPage();
    await pageObj.tomarImagen("4.confirmacion_publicacion");
    await pageObj.continuarPublicacion();
    await pageObj.tomarImagen("5.continuar_publicacion");
    await pageObj.abrirPagina();
    await pageObj.tomarImagen("6.verificar");
    await pageObj.abrirPaginaNombre(pagePath[1]);
    await pageObj.tomarImagen("7.pagina_publicada");
}

const Escenario8 = async () => {
    const browser = await puppeteer.launch();
    const escenario = "Escenario8";
    const page = await browser.newPage();
    const promises = [];
    promises.push(page.waitForNavigation());
    const pageObj = new PagesPage(page, escenario);
    const login = new LoginPage(page, escenario);
    await login.abrirPagina();
    await login.ingresarCredenciales();
    await login.tomarImagen("1.autenticacion");
    await login.autenticar();
    await pageObj.abrirPagina();
    await pageObj.tomarImagen("2.paginas");
    await pageObj.nuevoPage();
    const pagePath = await pageObj.llenarFormulario();
    await pageObj.tomarImagen("3.pagina_creada");
    await pageObj.publicarPage();
    await pageObj.tomarImagen("4.confirmacion_publicacion");
    await pageObj.continuarPublicacion();
    await pageObj.tomarImagen("5.continuar_publicacion");
    await pageObj.abrirPagina();
    await pageObj.tomarImagen("6.verificar");
    await pageObj.abrirPaginaNombre(pagePath[1]);
    await pageObj.tomarImagen("7.pagina_publicada");
    await pageObj.abrirURLPagina(pagePath[0]);
    await pageObj.llenarFormulario();
    await pageObj.tomarImagen("8.pagina_editada");

    await pageObj.publicarPage();
    await pageObj.continuarPublicacion();
    await pageObj.tomarImagen("9.confirmacion_publicacion");
    await pageObj.abrirPagina();
    await pageObj.tomarImagen("10.verificar");
    await pageObj.abrirPaginaNombre(pagePath[1]);
    await pageObj.tomarImagen("11.pagina_publicada");
}

const Escenario9 = async () => {
    const browser = await puppeteer.launch();
    const escenario = "Escenario9";
    const page = await browser.newPage();
    const promises = [];
    promises.push(page.waitForNavigation());
    const pageObj = new PagesPage(page, escenario);
    const login = new LoginPage(page, escenario);
    await login.abrirPagina();
    await login.ingresarCredenciales();
    await login.tomarImagen("1.autenticacion");
    await login.autenticar();
    await pageObj.abrirPagina();
    await pageObj.tomarImagen("2.paginas");
    await pageObj.nuevoPage();
    let pagePath = await pageObj.llenarFormulario();
    await pageObj.tomarImagen("3.pagina_creada");
    await pageObj.publicarPage();
    await pageObj.tomarImagen("4.confirmacion_publicacion");
    await pageObj.continuarPublicacion();
    await pageObj.tomarImagen("5.continuar_publicacion");
    await pageObj.abrirPagina();
    await pageObj.tomarImagen("6.verificar");
    await pageObj.abrirPaginaNombre(pagePath[1]);
    await pageObj.tomarImagen("7.pagina_publicada");
    await pageObj.abrirURLPagina(pagePath[0]);
    await pageObj.abrirSideMenu();
    await pageObj.tomarImagen("8.pagina");
    await pageObj.eliminarPage();
    await pageObj.tomarImagen("9.confirmar_eliminar");
    await pageObj.confirmarEliminarPage();
    await pageObj.tomarImagen("10.paginaEliminada");

    await pageObj.abrirPagina();
    await pageObj.tomarImagen("11.verificar");
    await pageObj.abrirPaginaNombre(pagePath[1]);
    await pageObj.tomarImagen("12.pagina_eliminada");
}

const Escenario10 = async () => {
    const browser = await puppeteer.launch();
    const escenario = "Escenario10";
    const page = await browser.newPage();
    const promises = [];
    promises.push(page.waitForNavigation());
    const pageObj = new PagesPage(page, escenario);
    const login = new LoginPage(page, escenario);
    await login.abrirPagina();
    await login.ingresarCredenciales();
    await login.tomarImagen("1.autenticacion");
    await login.autenticar();
    await pageObj.abrirPagina();
    await pageObj.tomarImagen("2.paginas");
    await pageObj.abrirFiltroEstado();
    await pageObj.tomarImagen("3.filtro");
    await pageObj.seleccionarFiltroEstado();
    await pageObj.tomarImagen("4.filtrado");
}

module.exports = {Escenario7, Escenario8, Escenario9, Escenario10}