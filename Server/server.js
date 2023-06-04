const express = require('express');
const mysql = require('mysql');
const body_parser = require('body-parser');
const cors = require('cors');
const myConnection = require('express-myconnection');

dbOptions = {
    host: '85.10.205.173',
    user: 'quangsang',
    password: 'sang2002',
    port: 3306,
    database: 'db_app'
};

const app = express();
app.use(body_parser.json());
app.use(cors())

app.use(myConnection(mysql, dbOptions, 'request'));
app.use(express.urlencoded({extended: false}))

const port = 3000;

app.listen(port, ()=>{
    console.log("Server Đang chạy http://" +  ":" + port);
});

// user
app.get('/api/user', (req, res)=>{
    const data = req.getConnection((err, connection)=>{
        if(err) res.send(err);

        connection.query("select * from User" , (err , rows)=>{
            if(err) res.send(err);

            res.send(rows);
        });
    })
})

// ALL
app.get('/api/product', (req, res)=>{
    const data = req.getConnection((err, connection)=>{
        if(err) res.send(err);

        connection.query("select * from SanPham" , (err , rows)=>{
            if(err) res.send(err);

            res.send(rows);
        });
    })
})


// iphone
app.get('/api/iphone', (req, res)=>{
    const data = req.getConnection((err, connection)=>{
        if(err) res.send(err);

        connection.query("select * from SanPham where id_loaisp = 1" , (err , rows)=>{
            if(err) res.send(err);

            res.send(rows);
        });
    })
})

// samsung
app.get('/api/samsung', (req, res)=>{
    const data = req.getConnection((err, connection)=>{
        if(err) res.send(err);

        connection.query("select * from SanPham where id_loaisp = 2" , (err , rows)=>{
            if(err) res.send(err);

            res.send(rows);
        });
    })
})

// oppo
app.get('/api/oppo', (req, res)=>{
    const data = req.getConnection((err, connection)=>{
        if(err) res.send(err);

        connection.query("select * from SanPham where id_loaisp = 3" , (err , rows)=>{
            if(err) res.send(err);

            res.send(rows);
        });
    })
})

// Tai nghe
app.get('/api/tainghe', (req, res)=>{
    const data = req.getConnection((err, connection)=>{
        if(err) res.send(err);

        connection.query("select * from SanPham where id_loaisp = 4" , (err , rows)=>{
            if(err) res.send(err);

            res.send(rows);
        });
    })
})


app.get('/api/banphim', (req, res)=>{
    const data = req.getConnection((err, connection)=>{
        if(err) res.send(err);

        connection.query("select * from SanPham where id_loaisp = 5" , (err , rows)=>{
            if(err) res.send(err);

            res.send(rows);
        });
    })
})

app.get('/api/smartwatch', (req, res)=>{
    const data = req.getConnection((err, connection)=>{
        if(err) res.send(err);

        connection.query("select * from SanPham where id_loaisp = 6" , (err , rows)=>{
            if(err) res.send(err);

            res.send(rows);
        });
    })
})


// ----POST---

app.post('/api/user', (req, res)=>{
    console.log(req.body)
    const data = {
        email: req.body.email,
        matkhau:req.body.matkhau
    }

    req.getConnection((err, connection)=>{
        if(err) res.send(err);

        connection.query("insert into User set ?", data , (err , rows)=>{
            if(err) res.send(err);

            res.send({
                status: 'Thêm thành công',
                id: 'null',
                email: req.body.email,
                matkhau: req.body.matkhau
            });
        });
    })
})