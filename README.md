# How to Run    
    1. Export database
    2. Open dir server-react
    3. Run server, type PORT=5500 node bin/www
    4. Back to root dir, then type npm-start
    5. Done. 

# Config database
goto server-react/bin/db.js then edit with yours
<pre>
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'database001'
    });
</pre>