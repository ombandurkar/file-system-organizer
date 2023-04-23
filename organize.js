let fs = require("fs");
let path = require("path");

function organizeFn(dirPath)
{
    // console.log(`Organize command implemented for `,dirPath);
    //1.input -> directory patth given hoga
    
    let destPath;

    if(dirPath == undefined)
    {
        // console.log(`kindly enter the path`);
        destPath = process.cwd();
        return;
    }
    
    let doesExist = fs.existsSync(dirPath);
    
    if(doesExist)
    {
        //2. mujhe uske andr jaakar, ek "organized files" naam ki directory create karni padegi
        destPath = path.join(dirPath , "organized_files");
        if(fs.existsSync(destPath) == false)  //means agr apna folder pehele se exist karta hoga to kuch mat kar, aur exist nahi karta hoga to naya bana de
        {
            fs.mkdirSync(destPath);
        }
        
        
    }
    else{
        console.log(`❌No such folder found! Kindly enter the correct path`);
        return;
    }

    organizeHelper(dirPath , destPath);

}

function organizeHelper(src , dest)
{
    //3. identify categories of all the files present in that input director
    let childName = fs.readdirSync(src);
    // console.log(childName);
    
    for(let i = 0; i < childName.length; i++)
    {
        let childAddress = path.join(src , childName[i]);
        
        let isFile = fs.lstatSync(childAddress).isFile();
        
        if(isFile)
        {
            // console.log(childName[i]);
            let category = getCategory(childName[i]);
            // console.log(childName[i] , `belongs to -->`, category );

            //4. copy/cut files to that organized directory based on the category
            sendFiles(childAddress ,dest, category);
        }
    }
    
}

function getCategory(name)
{
    let ext = path.extname(name);
    ext = ext.slice(1);
    // console.log(ext);

    for(let type in fileTypes)  //type --> media, archieve, document, app
    {
        let currentTypeArray = fileTypes[type];

        for(let i = 0; i < currentTypeArray.length; i++)
        {
            if(ext == currentTypeArray[i])
            {
                return type;
            }
        }
    }
    return "others";
}

function sendFiles(childAddress ,dest, category)
{
    let categoryPath = path.join(dest, category);

    if(fs.existsSync(categoryPath) == false)  //agr "oragnized_files" waale folder me, apna `type` of folder nahi pada hai yo create one
    {
        fs.mkdirSync(categoryPath);
    }

    let fileName = path.basename(childAddress);
    let destFilePath = path.join(categoryPath , fileName);
    fs.copyFileSync(childAddress , destFilePath);
    fs.unlinkSync(childAddress);
    console.log(fileName , `copied to -->` , category);
}

module.exports = {
    organizeKey: organizeFn
}