const { exec } = require("child_process");
const UniqueItems = require('./data.js').UniqueItems;

console.log(UniqueItems.length)

//UNCOMMENT THIS TO DOWNLOAD IMAGES FROM D2MANTIX

// UniqueItems.forEach(item => {
//     console.log(`Downloading image for item ${item.name} => ${item.imageCodeName}`)
//     const splittedUrl = item.image.split(".")
//     const extension = splittedUrl[splittedUrl.length -1].toLowerCase(); 
//     exec(`wget --output-document=./tmp/${item.imageCodeName}.${extension} ${item.image}`, (error, stdout, stderr) => {
//         if (error) {
//             console.log(`error: ${error.message}`);
//             return;
//         }
//         if (stderr) {
//             console.log(`stderr: ${stderr}`);
//             return;
//         }
//         console.log(`Downloaded ${item.name} => ${item.imageCodeName}: ${stdout}`);
//     });

// })


//exec(`ls tmp/`, (error, stdout, stderr) => {
    // const images= stdout.split("\n").map(a => a.split(".")[0])
    // const excluded = UniqueItems.filter(item => !images.includes(item.imageCodeName))
    // console.log(excluded)
    //console.log(stdout.split("\n"))
// })
