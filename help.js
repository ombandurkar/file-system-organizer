function helpFn()
{
    // console.log(`
    // List of all commands:
    //         node main.js tree "directoryPath"
    //         node main.js organize "directoryPath"
    //         node main.js help
    //         `);

    console.log(`
    List of all commands:
            omb tree "directoryPath"
            omb organize "directoryPath"
            omb help
            `);
}

module.exports = {
    helpKey: helpFn
}