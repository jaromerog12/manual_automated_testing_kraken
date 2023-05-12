const playwright = require('playwright');
const compareImages = require("resemblejs/compareImages")
const config = require("./config.json");
const fs = require('fs');

const { viewportHeight, viewportWidth, browsers, options } = config;

async function executeTest(){
    

    let datetime = new Date().toISOString().replace(/:/g,".");
    let casesArray = new Array();
    let resultInfo = {}

    if (!fs.existsSync(`./results/${datetime}`)){
        fs.mkdirSync(`./results/${datetime}`, { recursive: true });
    }

    casesArray = await readJson();
    console.log('casesArray'+casesArray);
    for(caseName of casesArray){
        const data = await compareImages(
            fs.readFileSync(`./results/${datetime}/before-${caseName}.png`),
            fs.readFileSync(`./results/${datetime}/after-${caseName}.png`),
            options
        );

        resultInfo[caseName] = {
            isSameDimensions: data.isSameDimensions,
            dimensionDifference: data.dimensionDifference,
            rawMisMatchPercentage: data.rawMisMatchPercentage,
            misMatchPercentage: data.misMatchPercentage,
            diffBounds: data.diffBounds,
            analysisTime: data.analysisTime
        }
        fs.writeFileSync(`./results/${datetime}/compare-${caseName}.png`, data.getBuffer());
    }
    
    fs.writeFileSync(`./results/${datetime}/report.html`, createReport(datetime, resultInfo, casesArray));
    fs.copyFileSync('./index.css', `./results/${datetime}/index.css`);

    console.log('------------------------------------------------------------------------------------')
    console.log("Execution finished. Check the report under the results folder")
    return resultInfo;  
  }
(async ()=>console.log(await executeTest()))();

async function readJson(){

    let casesArray = new Array();

    fs.readFileSync("./jsonfiles/report.json", "utf8", (err, data) => {
        if (err) {
          console.error(err);
          return;
        }

        const json = JSON.parse(data);
        json.map((obj) => {
            obj.elements.map((element) => {
                element.steps.map((step) => {
                    console.log(step.name);
                    let nameCase = undefined;
                    if(step.name !== undefined){
                        nameCase = step.name.replace(/[^\w\s]/gi, '');
                        casesArray.push(nameCase);
                    }
                    
                    if(step.embeddings !== undefined)
                    step.embeddings.map((embedding) => {
                        const imageBuffer = Buffer.from(embedding.data, 'base64');
                        fs.writeFile(`./results/${datetime}/before-${nameCase}.png`, imageBuffer, function(err) {
                            if (err) throw err;
                            console.log('Image saved before successfully');
                        });

                        fs.writeFile(`./results/${datetime}/after-${nameCase}.png`, imageBuffer, function(err) {
                            if (err) throw err;
                            console.log('Image saved after successfully');
                        });
                    });                    
                });
            })
        })

    
    });

    return casesArray;
}

function browser(caseName, info){
    return `<div class=" browser" id="test0">
    <div class=" btitle">
function browser(caseName, info){
        <h2>Caso: ${caseName}</h2>
        <p>Data: ${JSON.stringify(info)}</p>
    </div>
    <div class="imgline">
      <div class="imgcontainer">
        <span class="imgname">Reference</span>
        <img class="img2" src="before-${caseName}.png" id="refImage" label="Reference">
      </div>
      <div class="imgcontainer">
        <span class="imgname">Test</span>
        <img class="img2" src="after-${caseName}.png" id="testImage" label="Test">
      </div>
    </div>
    <div class="imgline">
      <div class="imgcontainer">
        <span class="imgname">Diff</span>
        <img class="imgfull" src="./compare-${caseName}.png" id="diffImage" label="Diff">
      </div>
    </div>
  </div>`
}

function createReport(datetime, resInfo, casesName){
    return `
    <html>
        <head>
            <title> VRT Report </title>
            <link href="index.css" type="text/css" rel="stylesheet">
        </head>
        <body>
            <h1>Report for 
                 <a href="${config.url}"> ${config.url}</a>
            </h1>
            <p>Executed: ${datetime}</p>
            <div id="visualizer">
                ${casesName.map(caseName=>browser(caseName, resInfo[caseName]))}
            </div>
        </body>
    </html>`
}