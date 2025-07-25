import fs from 'fs'
export interface SaveFileUseCases {
    execute: (Options: Options) => boolean;
}

export interface Options {
    fileContent: string
    destination?: string;
    fileName?: string;
}

export class SaveFile implements SaveFileUseCases {

    constructor(
        //repository StorageRepository 
    ) { }

    execute({
        fileContent,
        destination = 'outputs',
        fileName = `table`,
    }: Options): boolean {

        try {
            fs.mkdirSync(destination, { recursive: true });

            fs.writeFileSync(`${destination}/${fileName}.txt`, fileContent)
         
            return true
        } catch (error) {
            console.error(error);
            return false;
        }


    };

}