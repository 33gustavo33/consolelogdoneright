import SafeCharBuilder from "./safeCharBuilder.js";

class SafeStringBuilder {
    /** @private */
    chars = []

    constructor(...chars){
        chars.forEach((c)=>{this.addChar(c)})
    }

    addChar(char){
        const safeChar = new SafeCharBuilder(char)
        this.chars.push(safeChar)
        return safeChar
    }

    addChars(...chars){
        chars.forEach(this.addChar)
    }

    async getString(){
        let result = '';

        for(const char of this.chars){
            const decodedChar = await char.getChar()
            result += decodedChar
        }
 
        return result;
    }
}

export default SafeStringBuilder