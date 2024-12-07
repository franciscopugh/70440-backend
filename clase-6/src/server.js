import http from 'http'

const PORT = 8080
    //req = request res = response
const server = http.createServer((req, res) => {
    res.end('Hola desde mi primer servidor!')
})

server.listen(PORT, 'localhost', () => {
    console.log(`Server on port ${PORT}`);
})

//node --watch rutaArchivo puedo hacer que el servidor se reinicie ante los cambios