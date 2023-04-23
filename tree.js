let fs = require("fs");
let path = require("path");

function treeFn(dirPath)
{
    // console.log(`Tree command implemented for `,dirPath);

    if(dirPath == undefined)
    {
        // console.log(`kindly enter the path`);
        treeHelper(process.cwd() , "")
        return;
    }
    
    let doesExist = fs.existsSync(dirPath);
    
    if(doesExist)
    {
        treeHelper(dirPath , "");  //--> empty string "" for indentation purpose
    }
    else{
        console.log(`❌No such folder found! Kindly enter the correct path`);
        return;
    }
}

function treeHelper(dirPath , indent)  //--> empty string "" for indentation purpose
{
    //is file ya folder, --> agr file ho to directly print kara do, and agr folder ho to usme aur andr jao and check for the contents
    let isFile = fs.lstatSync(dirPath).isFile();

    if(isFile == true)
    {
        let thisFileName = path.basename(dirPath);
        console.log(indent + "├─" + thisFileName);
    }
    else
    {
        let thisDirName = path.basename(dirPath);
        console.log(indent + "└─" + thisDirName);
        let dirChildren = fs.readdirSync(dirPath);

        for(let i = 0; i < dirChildren.length; i++)
        {
            let childPath = path.join(dirPath , dirChildren[i]);
            treeHelper(childPath, indent + "\t");
        }
    }
}

module.exports = {
    treeKey: treeFn
}