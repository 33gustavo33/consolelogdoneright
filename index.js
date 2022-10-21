import log from "./lib/index.js";

function polyfill(){
    console.log = log
    console.warn = log
    console.error = log
    console.info = log
}

export default log
export {
    log,
    polyfill
}