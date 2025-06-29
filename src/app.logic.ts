import fs from "fs";
import { yarg } from "./config/plugins/yargs.plugin";


let outputMessage = '';
const base = yarg.b;
const limite = yarg.l;
const name= yarg.n;
const headerMessage = `
====================
    TABLA DEL ${base}
==================== 
`;

    for (let index = 0; index <= limite; index++) {
        outputMessage += `${base} X ${index} = ${base * index} \n`;
    }


    if(yarg.s){
        outputMessage = headerMessage + outputMessage;

        console.log(outputMessage);

    }


        const outputPath = `outputs`;

        fs.mkdirSync(outputPath, { recursive: true });

        fs.writeFileSync(`${outputPath}/${name}-${base}-txt`, outputMessage)
        console.log('File created!');
  

