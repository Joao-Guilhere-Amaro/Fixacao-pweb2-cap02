import http from 'node:http';

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    if (req.method === "GET" && req.url === "/inicio") {
        res.writeHead(200, { 'content-type': 'text/plain' });
        res.end('Bem-vindo ao servidor');
        return;
    }
    if(req.method === "GET" && req.url === "/info"){
        res.writeHead(200, {'content-type': 'text/html'});
        res.end('<h1>Informações</h1>');
        return;
    }
    if(req.method === "GET" && req.url.startsWith('/usuario/')){
        let partes = req.url.split('/');
        let nome = partes[2];
        res.writeHead(200, {'content-type': 'text/plain'});
        res.end(`Olá, ${nome}!`);
        return;
    }
    if(req.method === "POST" && req.url === "/mensagem"){
        let corpo = '';
        req.on('data', (chunk) => {
            corpo += chunk;
        });
        req.on('end', () =>{
            res.writeHead(200, {'content-type': 'text/plain'});
            res.end(corpo);
        });
        return;
    }
    if(req.method === "PUT" && req.url.startsWith('/produtos/')){
        let parte = req.url.split('/');
        let id = parte[2];
        res.writeHead(200, {'content-type': 'text/plain'});
        res.end(`Produto ${id} atualizado`);
        return; 
    }
    if(req.method === "DELETE" && req.url.startsWith('/produtos/')){
        let parte = req.url.split('/');
        let id = parte[2];
        res.writeHead(204);
        res.end();
        return; 
    }
    if(req.method === "PATCH" && req.url === "/perfil"){
        res.writeHead(200, {'content-type': 'text/plain'});
        res.end('Perfil atualizado');
        return; 
    }
    if(req.method === "HEAD" && req.url === "/health"){
        res.writeHead(200, {'X-Health': 'online'});
        res.end();
        return; 
    }
    if(req.method === "GET" && req.url === "/cliente"){
        let cliente = req.headers['user-agent'] || '';
        if(cliente.toLowerCase().includes('firefox')){
            res.writeHead(200, {'content-type': 'text/plain'});
            res.end('Você está usando Firefox');
        }else if(cliente.toLowerCase().includes('safari')){
            res.writeHead(200, {'content-type': 'text/plain'});
            res.end('Você está usando Safari');
        }else{
            res.writeHead(200, {'content-type': 'text/plain'});
            res.end('Navegador desconhecido');
        }
        return; 
    }
    if(req.method === "GET" && req.url === "/admin"){
        let codigo = req.headers['x-codigo'];
        if(codigo === "9999"){
            res.writeHead(200, {'content-type': 'text/plain'});
            res.end('Acesso administrativo permitido');
        } else{
            res.writeHead(403, {'content-type': 'text/plain'});
            res.end('Acesso negado');
        }
        
        return; 
    }
    res.writeHead(404, {'content-type': 'text/plain'})
    res.end('Rota não encontrada');
});

server.listen(PORT, () => console.log(`Servidor em http://localhost:${PORT}`));
  