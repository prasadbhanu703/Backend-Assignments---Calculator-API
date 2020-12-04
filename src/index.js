const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
    // your code goes here
app.get("/", (req, res) => {
    res.send("Hello world!");
})

app.post("/add", (req, res) => {
    console.log(req.body);
    const num1 = req.body.num1;
    const num2 = req.body.num2;

    if (isNaN(parseFloat(num1)) || isNaN(parseFloat(num2))) {
        res.send({
            status: "error",
            message: "Invalid data types"
        });
        return;
    }
    const sum = parseFloat(num1) + parseFloat(num2);

    if (parseFloat(num1) > 100000 || parseFloat(num2) > 100000 || sum > 100000) {
        res.send({
            status: "error",
            message: "Overflow"
        });
        return;
    }
    if (parseFloat(num1) < -100000 || parseFloat(num2) < -100000 || sum < -100000) {
        res.send({
            status: "error",
            message: "Underflow"
        })
        return;
    }


    res.send({
        status: "success",
        message: "The sum of given numbers",
        result: sum
    })
})

app.post("/sub", (req, res) => {
    console.log(req.body);
    const num1 = req.body.num1;
    const num2 = req.body.num2;


    if (isNaN(parseFloat(num1)) || isNaN(parseFloat(num2))) {
        res.send({
            status: "error",
            message: "Invalid data types"
        });
        return;
    }
    const difference = parseFloat(num1) - parseFloat(num2);

    if (parseFloat(num1) > 100000 || parseFloat(num2) > 100000 || difference > 100000) {
        res.send({
            status: "error",
            message: "Overflow"
        });
        return;
    }
    if (parseFloat(num1) < -100000 || parseFloat(num2) < -100000 || difference < -100000) {
        res.send({
            status: "error",
            message: "Underflow"
        })
        return;
    }


    res.send({
        status: "success",
        message: "The differene of given numbers",
        result: difference
    })
})

app.post("/multiply", (req, res) => {
    console.log(req.body);
    const num1 = req.body.num1;
    const num2 = req.body.num2;

    if (isNaN(parseFloat(num1)) || isNaN(parseFloat(num2))) {
        res.send({
            status: "error",
            message: "Invalid data types"
        });
        return;
    }
    const multiplication = parseFloat(num1) * parseFloat(num2);

    if (parseFloat(num1) > 100000 || parseFloat(num2) > 100000 || multiplication > 100000) {
        res.send({
            status: "error",
            message: "Overflow"
        });
        return;
    }

    if (parseFloat(num1) < -100000 || parseFloat(num2) < -100000 || multiplication < -100000) {
        res.send({
            status: "error",
            message: "Underflow"
        });
        return;
    }

    res.send({
        status: "success",
        message: "The product of given numbers",
        result: multiplication
    });
});

app.post("/divide", (req, res) => {
    console.log(req.body);
    const num1 = req.body.num1;
    const num2 = req.body.num2;
    if (isNaN(parseFloat(num1)) || isNaN(parseFloat(num2))) {
        res.send({
            status: "error",
            message: "Invalid data types"
        });
        return;
    }
    if (parseFloat(num1) > 100000 || parseFloat(num2) > 100000) {
        res.send({
            status: "error",
            message: "Overflow"
        });
        return;
    }
    if (parseFloat(num1) < -100000 || parseFloat(num2) < -100000) {
        res.send({
            status: "error",
            message: "Underflow"
        })
        return
    }
    if (parseFloat(num2) === 0) {
        res.send({
            status: "error",
            message: "Cannot divide by zero"
        })
        return;
    };

    const divide = parseFloat(num1) / parseFloat(num2);
    res.send({
        status: "success",
        message: "The division of given numbers",
        result: divide
    });
})



app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;