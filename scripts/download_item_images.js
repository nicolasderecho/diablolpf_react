const { exec } = require("child_process");
const UniqueItems = require('./db_generation/data.js').UniqueItems;
const Sets = require('./db_generation/data.js').Sets;

function downloadItemImage(item) {
    const imageCodeName = item.originalName.toLowerCase().trim().replace(/\s/g, "_").replaceAll("'", "")
    console.log(`Downloading image for item ${item.name} => ${imageCodeName}`)
    const splittedUrl = item.image.split(".")
    const extension = splittedUrl[splittedUrl.length -1].toLowerCase(); 
    exec(`wget --output-document=./tmp/${imageCodeName}.${extension} ${item.image}`, (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`Downloaded ${item.name} => ${item.imageCodeName}: ${stdout}`);
    });
}


//UNCOMMENT THIS TO DOWNLOAD UNIQUE ITEM IMAGES FROM D2MANTIX

//UniqueItems.forEach(downloadItemImage)

//UNCOMMENT THIS TO DOWNLOAD SET ITEM IMAGES FROM D2MANTIX

Sets.forEach(diabloSet => {
  diabloSet.items.forEach(downloadItemImage)
})



//exec(`ls tmp/`, (error, stdout, stderr) => {
    // const images= stdout.split("\n").map(a => a.split(".")[0])
    // const excluded = UniqueItems.filter(item => !images.includes(item.imageCodeName))
    // console.log(excluded)
    //console.log(stdout.split("\n"))
// })
