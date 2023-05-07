
const tag = require('./automated-tests/tag');
const general = require('./automated-tests/general');
const pages = require('./automated-tests/pages');
const design = require('./automated-tests/design');

(async () => {
    await general.Escenario1();
    await general.Escenario2();
    await tag.Escenario3();
    await tag.Escenario4();
    await pages.Escenario5();
    await pages.Escenario6();
    await pages.Escenario7();
    await pages.Escenario8();
    await pages.Escenario9();
    await pages.Escenario9();
    await design.Escenario10();
    await design.Escenario11();
    await design.Escenario12();
    await design.Escenario13();
    return;
}
)();