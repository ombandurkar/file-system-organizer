#!/usr/bin/env node

const { dir, log } = require("console");
let fs = require("fs");
const { type } = require("os");
let path = require("path");

let helpObj = require("./commands/help");
let organizeObj = require("./commands/organize");
let treeObj = require("./commands/tree");


let inputArr = process.argv.slice(2);  //To take input from command line...array ko slice karke de dega from 2nd index and onwards, 0th index- node, 1st index - file, user input 2nd index se start hota hai
// console.log(inputArr);

//node main.js tree "directoryPath"
//node main.js organize "directoryPath"
//node main.js help

//The above commands we will be running on terminal and inputArr, 0th index --> command, 1st index (if any) --> directory path


/******************************************************************************************** */

let fileTypes = {
    media : ["mp3" , "mp4" , "mkv", "png", "jpeg"],
    archives: ['zip', 'rar', '7z', 'tar', 'gz', 'ar', 'iso', 'xz'],
    documents: ['docx', 'doc', 'pdf','pptx', 'xlsx', 'xls', 'txt', 'odt', 'ods', 'odp', 'odg', 'ps'],
    app: ['exe', 'dmg', 'pkg', 'deb']
}

/******************************************************************************************** */


let command = inputArr[0];

switch (command)
{

    case "tree":
        // treeFn(inputArr[1]);
        treeObj.treeKey(inputArr[1]);
        break;

    case "organize":
        // organizeFn(inputArr[1]);
        organizeObj.organizeKey(inputArr[1]);
        break;

    case "help":
        // helpFn();
        helpObj.helpKey();
        break;

    default:
        console.log(`❌Wrong command, please enter correct command💻`);
        break;
}

/********************************************************************************************************** */

// //TREE implemented
// function treeFn(dirPath)
// {
//     // console.log(`Tree command implemented for `,dirPath);

//     if(dirPath == undefined)
//     {
//         // console.log(`kindly enter the path`);
//         treeHelper(process.cwd() , "")
//         return;
//     }
    
//     let doesExist = fs.existsSync(dirPath);
    
//     if(doesExist)
//     {
//         treeHelper(dirPath , "");  //--> empty string "" for indentation purpose
//     }
//     else{
//         console.log(`❌No such folder found! Kindly enter the correct path`);
//         return;
//     }
// }

// function treeHelper(dirPath , indent)  //--> empty string "" for indentation purpose
// {
//     //is file ya folder, --> agr file ho to directly print kara do, and agr folder ho to usme aur andr jao and check for the contents
//     let isFile = fs.lstatSync(dirPath).isFile();

//     if(isFile == true)
//     {
//         let thisFileName = path.basename(dirPath);
//         console.log(indent + "├─" + thisFileName);
//     }
//     else
//     {
//         let thisDirName = path.basename(dirPath);
//         console.log(indent + "└─" + thisDirName);
//         let dirChildren = fs.readdirSync(dirPath);

//         for(let i = 0; i < dirChildren.length; i++)
//         {
//             let childPath = path.join(dirPath , dirChildren[i]);
//             treeHelper(childPath, indent + "\t");
//         }
//     }
// }

// /********************************************************************************************************** */


// //ORGANIZE implemented
// function organizeFn(dirPath)
// {
//     // console.log(`Organize command implemented for `,dirPath);
//     //1.input -> directory patth given hoga
    
//     let destPath;

//     if(dirPath == undefined)
//     {
//         // console.log(`kindly enter the path`);
//         destPath = process.cwd();
//         return;
//     }
    
//     let doesExist = fs.existsSync(dirPath);
    
//     if(doesExist)
//     {
//         //2. mujhe uske andr jaakar, ek "organized files" naam ki directory create karni padegi
//         destPath = path.join(dirPath , "organized_files");
//         if(fs.existsSync(destPath) == false)  //means agr apna folder pehele se exist karta hoga to kuch mat kar, aur exist nahi karta hoga to naya bana de
//         {
//             fs.mkdirSync(destPath);
//         }
        
        
//     }
//     else{
//         console.log(`❌No such folder found! Kindly enter the correct path`);
//         return;
//     }

//     organizeHelper(dirPath , destPath);

// }

// function organizeHelper(src , dest)
// {
//     //3. identify categories of all the files present in that input director
//     let childName = fs.readdirSync(src);
//     // console.log(childName);
    
//     for(let i = 0; i < childName.length; i++)
//     {
//         let childAddress = path.join(src , childName[i]);
        
//         let isFile = fs.lstatSync(childAddress).isFile();
        
//         if(isFile)
//         {
//             // console.log(childName[i]);
//             let category = getCategory(childName[i]);
//             // console.log(childName[i] , `belongs to -->`, category );

//             //4. copy/cut files to that organized directory based on the category
//             sendFiles(childAddress ,dest, category);
//         }
//     }
    
// }

// function getCategory(name)
// {
//     let ext = path.extname(name);
//     ext = ext.slice(1);
//     // console.log(ext);

//     for(let type in fileTypes)  //type --> media, archieve, document, app
//     {
//         let currentTypeArray = fileTypes[type];

//         for(let i = 0; i < currentTypeArray.length; i++)
//         {
//             if(ext == currentTypeArray[i])
//             {
//                 return type;
//             }
//         }
//     }
//     return "others";
// }

// function sendFiles(childAddress ,dest, category)
// {
//     let categoryPath = path.join(dest, category);

//     if(fs.existsSync(categoryPath) == false)  //agr "oragnized_files" waale folder me, apna `type` of folder nahi pada hai yo create one
//     {
//         fs.mkdirSync(categoryPath);
//     }

//     let fileName = path.basename(childAddress);
//     let destFilePath = path.join(categoryPath , fileName);
//     fs.copyFileSync(childAddress , destFilePath);
//     fs.unlinkSync(childAddress);
//     console.log(fileName , `copied to -->` , category);
// }


// /********************************************************************************************************** */

// //HELP implemented
// function helpFn()
// {
//     // console.log(`
//     // List of all commands:
//     //         node main.js tree "directoryPath"
//     //         node main.js organize "directoryPath"
//     //         node main.js help
//     //         `);

//     console.log(`
//     List of all commands:
//             omb tree "directoryPath"
//             omb organize "directoryPath"
//             omb help
//             `);
// }