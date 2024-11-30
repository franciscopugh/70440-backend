/*import crypto from 'crypto'

const algoritmo = 'aes-256-ctr'
const clave_secreta = 'codercodercodercodercodercoderco' //clave de 32 caracteres
const iv = 'codercodercoderc' //Vector de inicializacion de 16 caracteres

console.log(crypto.randomBytes(10).toString('hex')); //Id unicos


const encrypt = (password) => {
    const cipher = crypto.createCipheriv(algoritmo, clave_secreta, iv) //Generar una contraseña utilizando el iv, algoritmo y contraseña
    const encryptPass = Buffer.concat([cipher.update(password), cipher.final()])
                                        //.update = Actualizo el cipher con la contraseña enviada
                                        //.final = Retorno el resultado de dicha encriptacion
    const passE = encryptPass.toString('hex')
    console.log(passE);
    return passE
    
}

const decrypt = (encryptedPassword) => {
    const decipher = crypto.createDecipheriv(algoritmo, clave_secreta, iv)
                                                                //Pass de string a buffer
    const decryptedPass = Buffer.concat([decipher.update(Buffer.from(encryptedPassword, 'hex')), decipher.final()])

    return decryptedPass
}

let password = 'Coder'

let passwordE = encrypt(password)

console.log(decrypt(passwordE));
*/

import moment from "moment";

console.log(moment());
