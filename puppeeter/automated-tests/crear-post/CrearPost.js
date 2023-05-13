const puppeteer = require('puppeteer');
const Base = require('./Base');
const Escenarios = require('./Escenarios.json')

const crearPostEscenario1 = async () =>{
  const browser = await puppeteer.launch({
    headless:false,
    defaultViewport: null,
    args: ['--start-maximized'] 
  });

  const page = await browser.newPage();
  const promises = [];
  promises.push(page.waitForNavigation());
  await page.goto('http://localhost:2368/ghost/#/posts');
  await Promise.all(promises);

  const base = new Base(page);    
  await base.open('http://localhost:2368/ghost/#/signin')
  await base.login('ca.zuleta@uniandes.edu.co', 'Iloveyou god')

  await base.newPost()

  await base.writeTitlePost(Escenarios.escenario1.title)

  await browser.close()
}

const crearPostEscenario2 = async () =>{
  const browser = await puppeteer.launch({
    headless:false,
    defaultViewport: null,
    args: ['--start-maximized'] 
  });

  const page = await browser.newPage();
  const promises = [];
  promises.push(page.waitForNavigation());
  await page.goto('http://localhost:2368/ghost/#/posts');
  await Promise.all(promises);

  const base = new Base(page);    
  await base.open('http://localhost:2368/ghost/#/signin')
  await base.login('ca.zuleta@uniandes.edu.co', 'Iloveyou god')

  await base.newPost()

  await base.writeTitlePost(Escenarios.escenario2.title)
  await base.writeTextPost(Escenarios.escenario2.text)

  await browser.close()
}

module.exports = [crearPostEscenario1, crearPostEscenario2];

