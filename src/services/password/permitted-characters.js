async function permittedCHAR(){
    let permitted = []
    if(process.env.UPPERCASE == "true")
        permitted.push(... "ABCDEFGHIJKLMNOPQRSTUVWXYZ")
    if(process.env.LOWERCASE == "true")
        permitted.push(... "abcdefghijklmnopqrstuvwxyz")
    if(process.env.NUMBERS == "true")
        permitted.push(... "1234567890")
    if(process.env.SPECIAL_CHAR == "true")
        permitted.push(... "!@#$%^&*()")

    return permitted
}

export default permittedCHAR