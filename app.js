var http = require('http')
const { parse } = require('querystring');

var server = http.createServer(function (req, res) {
    if(req.method === 'POST')
    {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString(); // convert Buffer to string
        });
        req.on('end', () => {
            console.log(parse(body));
            res.end('ok');
        });
    } else {
        res.end(
            `<!doctype html>
                <html>
                    <body>
                        <form id = "learn" method="POST" action = "/">
                            <input type="text" name ="Name" placeholder="Name">
                            <input type="text" name ="Gender" placeholder="Gender">
                            <input type="text" name ="Phone" placeholder="Phone">
                            <input type="text" name ="Address" placeholder="Address">
                            <input type="text" name ="Email" placeholder="Email">
                            <input type="submit" value = "Submit" /> 
                        </form>
                    </body> 
                </html>`
        );
    }
})

server.listen(3000, '127.0.0.1');
console.log('Listening to server port');