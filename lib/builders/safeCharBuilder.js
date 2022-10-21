import { encrypt } from "../encryption/index.js";
const chars = Array.from(Array(20000).keys()).map(charCode => String.fromCharCode(charCode));

class SafeCharBuilder {
    #char;
    #algo;

    constructor(char, algo){
        if(char) {
            this.setChar(char)
        }
        if(algo) {
            this.#algo = algo
        }
    }

    setChar(char){
        if(typeof char !== "string") throw new TypeError("[SafeCharBuilder] Char needs to be a 'string'");
        if(char.length !== 1) throw new Error("[SafeCharBuilder] Char needs to be 1 character long");
        this.#char = encrypt(char, this.#algo);
        return this
    }

    async getChar(){
        let result = '';

        for(const char of chars){
            const charEncrypted = encrypt(char, this.#algo);
            if(this.#char === charEncrypted){
                result = char;
                break;
            }
        }
 
        return result;
    }
}

export default SafeCharBuilder