const TagPage = require('../pages/TagPage');
const LoginPage = require('../pages/LoginPages');
const puppeteer = require('puppeteer');

const Escenario5 = async () => {
    const browser = await puppeteer.launch();
    const escenario = "Escenario5";
    const page = await browser.newPage();
    const promises = [];
    promises.push(page.waitForNavigation());
    const tag = new TagPage(page, escenario);
    const login = new LoginPage(page, escenario);
    await login.abrirPagina();
    await login.ingresarCredenciales();
    await login.tomarImagen("1.autenticacion");
    await login.autenticar();
    await tag.abrirPagina();
    await tag.tomarImagen("2.tags");
    await tag.nuevoTag();
    await tag.tomarImagen("3.crear_tag");
    await tag.llenarFormulario();
    await tag.tomarImagen("4.llenar_tag");
    await tag.guardarTag();
    await tag.abrirPagina();
    await tag.tomarImagen("5.tags_confirmacin");

}

const Escenario6 = async () => {
    const browser = await puppeteer.launch();
    const escenario = "Escenario6";
    const page = await browser.newPage();
    const promises = [];
    promises.push(page.waitForNavigation());
    const tag = new TagPage(page, escenario);
    const login = new LoginPage(page, escenario);
    await login.abrirPagina();
    await login.ingresarCredenciales();
    await login.tomarImagen("1.autenticacion");
    await login.autenticar();
    await tag.abrirPagina();
    await tag.tomarImagen("2.tags");
    await tag.nuevoTag();
    await tag.tomarImagen("3.crear_tag");
    const tagname = await tag.llenarFormulario();
    await tag.tomarImagen("4.llenar_tag");
    await tag.guardarTag();
    await tag.tomarImagen("5.tags_confirmacion");
    console.log(tagname)
    await tag.abrirPaginaTag(tagname);
    await tag.tomarImagen("6.tag");
    await tag.eliminarTag();
    await tag.tomarImagen("7.confirmacion_eliminacion");
    await tag.confirmarEliminarTag();
    await tag.tomarImagen("8.eliminado");
};

module.exports = { Escenario5, Escenario6 };