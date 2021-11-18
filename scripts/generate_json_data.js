const fs = require('fs'); // file system module to perform file operations
const { RunesData, Gems, CubeRecipes, Runewords, UniqueItems, ObjectTypes, Sets, BaseItems, BaseItemObjectTypes, ActOneAreas, ActTwoAreas, ActThreeAreas, ActFourAreas, ActFiveAreas } = require('./db_generation/data.js');

async function getProjectRootPath () {
    const { dirname } = require ( 'path' );
    const { constants, promises: { access } } = require ( 'fs' );

    for ( let path of module.paths ) {
        try {
            let prospectivePkgJsonDir = dirname ( path );
            await access ( path, constants.F_OK );
            return prospectivePkgJsonDir;
        } catch ( e ) {}
    }
    
}

(async () => { 
    const rootPath = await getProjectRootPath(); 
    const JSON_OBJECTS_TO_DUMP = [
      { name: "Runes", filename: "runes", json: RunesData }, 
      { name: "Gems", filename: "game_gems",json: Gems }, 
      { name: "Cube Recipes", filename: "cube_recipes", json: CubeRecipes }, 
      { name: "Runewords", filename: "runewords", json: Runewords }, 
      { name: "Unique Items", filename: "unique_items", json: UniqueItems }, 
      { name: "Object Types", filename: "object_types", json: ObjectTypes }, 
      { name: "Base Object Types", filename: "base_object_types", json: BaseItemObjectTypes }, 
      { name: "Set Items", filename: "set_items", json: Sets },
      { name: "Base Items", filename: "base_items", json: BaseItems },
      { name: "Act I Areas", filename: "act1", json: ActOneAreas },
      { name: "Act II Areas", filename: "act2", json: ActTwoAreas },
      { name: "Act III Areas", filename: "act3", json: ActThreeAreas },
      { name: "Act IV Areas", filename: "act4", json: ActFourAreas },
      { name: "Act V Areas", filename: "act5", json: ActFiveAreas },
    ]
    
    console.log(rootPath)

    JSON_OBJECTS_TO_DUMP.forEach( ({name, filename, json}) => {
        console.log(`Dumping ${name}`);
        fs.writeFile(`${rootPath}/src/data/json/${filename}.json`, JSON.stringify(json), 'utf8', function (err) {
            if (err) {
                console.log(`An error occured while dumping ${name} to JSON.`);
                return console.log(err);
            }     
            console.log(`${name} have been dumped into a JSON file.`);
        });
    })
    
})();