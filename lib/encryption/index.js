import crypto from "crypto"

function encrypt(text, algo){
    const hash = crypto.createHash(algo || "md5").update(text).digest("hex")
    return hash
}

function decrypt(){
    throw new Error("no")
}

export {
    encrypt,
    decrypt
}