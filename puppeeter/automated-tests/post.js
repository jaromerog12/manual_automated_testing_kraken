const LoginPage = require('../pages/LoginPages');
const PostPage = require('../pages/PostPage');
const puppeteer = require('puppeteer');

const Escenario16 = async () => {
    const browser = await puppeteer.launch();
    const escenario = "Escenario16";
    const page = await browser.newPage();
    const promises = [];
    promises.push(page.waitForNavigation());
    const postObj = new PostPage(page, escenario);
    const login = new LoginPage(page, escenario);
    await login.abrirPagina();
    await login.ingresarCredenciales();
    await login.tomarImagen("1.autenticacion");
    await login.autenticar();
    await postObj.abrirPagina();
    await postObj.tomarImagen("2.paginas");
    await postObj.nuevoPost();
    const pagePath = await postObj.llenarFormulario();
    await postObj.tomarImagen("3.pagina_creada");
    await postObj.publicarPost();
    await postObj.tomarImagen("4.confirmacion_publicacion");
    await postObj.continuarPublicacion();
    await postObj.tomarImagen("5.continuar_publicacion");
    await postObj.publicarAhoraPost();
    await postObj.tomarImagen("6.publicacion");
    await postObj.abrirPagina();
    await postObj.tomarImagen("7.verificar");
    await postObj.abrirPaginaNombre(pagePath[1]);
    await postObj.tomarImagen("8.pagina_publicada");
}

const Escenario17 = async () => {
    const browser = await puppeteer.launch();
    const escenario = "Escenario17";
    const page = await browser.newPage();
    const promises = [];
    promises.push(page.waitForNavigation());
    const postObj = new PostPage(page, escenario);
    const login = new LoginPage(page, escenario);
    await login.abrirPagina();
    await login.ingresarCredenciales();
    await login.tomarImagen("1.autenticacion");
    await login.autenticar();
    await postObj.abrirPagina();
    await postObj.tomarImagen("2.post");
    await postObj.nuevoPost();
    let postPath = await postObj.llenarFormulario();
    await postObj.tomarImagen("3.post_creada");
    await postObj.publicarPost();
    await postObj.tomarImagen("4.confirmacion_publicacion");
    await postObj.continuarPublicacion();
    await postObj.tomarImagen("5.continuar_publicacion");
    await postObj.publicarAhoraPost();
    await postObj.tomarImagen("6.publicacion");
    await postObj.abrirPagina();
    await postObj.tomarImagen("7.verificar");
    await postObj.abrirPaginaNombre(postPath[1]);
    await postObj.tomarImagen("8.post_publicada");
    await postObj.abrirURLPagina(postPath[0]);
    await postObj.llenarFormulario();
    await postObj.tomarImagen("9.post_editada");

    await postObj.updatePublicarPost();
    await postObj.tomarImagen("10.confirmacion_publicacion");
    await postObj.abrirPagina();
    await postObj.tomarImagen("11.verificar");
    await postObj.abrirPaginaNombre(postPath[1]);
    await postObj.tomarImagen("12.post_publicada");
}

const Escenario18 = async () => {
    const browser = await puppeteer.launch();
    const escenario = "Escenario18";
    const page = await browser.newPage();
    const promises = [];
    promises.push(page.waitForNavigation());
    const postObj = new PostPage(page, escenario);
    const login = new LoginPage(page, escenario);
    await login.abrirPagina();
    await login.ingresarCredenciales();
    await login.tomarImagen("1.autenticacion");
    await login.autenticar();
    await postObj.abrirPagina();
    await postObj.tomarImagen("2.post");
    await postObj.nuevoPost();
    let postPath = await postObj.llenarFormulario();
    await postObj.tomarImagen("3.post_creada");
    await postObj.publicarPost();
    await postObj.tomarImagen("4.confirmacion_publicacion");
    await postObj.continuarPublicacion();
    await postObj.tomarImagen("5.continuar_publicacion");
    await postObj.publicarAhoraPost();
    await postObj.tomarImagen("6.publicacion");
    await postObj.abrirPagina();
    await postObj.tomarImagen("7.verificar");
    await postObj.abrirPaginaNombre(postPath[1]);
    await postObj.tomarImagen("8.post_publicada");
    await postObj.abrirURLPagina(postPath[0]);
    await postObj.abrirSideMenu();
    await postObj.tomarImagen("9.post");
    await postObj.eliminarPost();
    await postObj.tomarImagen("10.confirmar_eliminar");
    await postObj.confirmarEliminarPost();
    await postObj.tomarImagen("11.postEliminada");

    await postObj.abrirPagina();
    await postObj.tomarImagen("12.verificar");
    await postObj.abrirPaginaNombre(postPath[1]);
    await postObj.tomarImagen("13.pagina_eliminada");
}

const Escenario19 = async () => {
    const browser = await puppeteer.launch();
    const escenario = "Escenario19";
    const page = await browser.newPage();
    const promises = [];
    promises.push(page.waitForNavigation());
    const postObj = new PostPage(page, escenario);
    const login = new LoginPage(page, escenario);
    await login.abrirPagina();
    await login.ingresarCredenciales();
    await login.tomarImagen("1.autenticacion");
    await login.autenticar();
    await postObj.abrirPagina();
    await postObj.tomarImagen("2.paginas");
    await postObj.nuevoPost();
    const pagePath = await postObj.llenarFormulario();
    await postObj.tomarImagen("3.pagina_creada");
    await postObj.abrirPagina();
    await postObj.tomarImagen("4.verificar");
}

const Escenario20 = async () => {
    const browser = await puppeteer.launch();
    const escenario = "Escenario20";
    const page = await browser.newPage();
    const promises = [];
    promises.push(page.waitForNavigation());
    const postObj = new PostPage(page, escenario);
    const login = new LoginPage(page, escenario);
    await login.abrirPagina();
    await login.ingresarCredenciales();
    await login.tomarImagen("1.autenticacion");
    await login.autenticar();
    await postObj.abrirPagina();
    await postObj.abrirFiltroEstado();
    await postObj.tomarImagen("3.filtro");
    await postObj.seleccionarFiltroEstado();
    await postObj.tomarImagen("4.filtrado");
}


module.exports = {Escenario16, Escenario17, Escenario18, Escenario19, Escenario20} 