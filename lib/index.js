import SafeStringBuilder from "./builders/safeStringBuilder.js";

async function log(...strings){
    let whatToLog = []
    let whatToLogString = ""

    strings.forEach((string) => {
        let stringString = JSON.stringify(string, null, "\t")
        if(typeof string === "string") stringString = stringString.substring(1, stringString.length-1)

        const safeString = new SafeStringBuilder(...stringString)
        whatToLog.push(safeString)
    })

    for(const string of whatToLog){
        const stringDecoded = await string.getString()
        whatToLogString += `${stringDecoded} `
    }

    process.stdout.write(whatToLogString + "\n")
}

export default log