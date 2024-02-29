const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/submit', (req, res) => {
    const employee_name = req.body.employee_name;
    const employee_id = req.body.employee_id;
    const basicpay = parseFloat(req.body.basicpay);
    const hra = parseFloat(req.body.hra);
    const da = parseFloat(req.body.da);
    const pf = parseFloat(req.body.pf);

    // Calculate gross pay
    const grosspay = basicpay + hra + da + pf;

    // Calculate net pay
    const netpay = grosspay - pf;

    // Prepare response
    const responseText = `
        Employee Details:
        Name: ${employee_name}
        ID: ${employee_id}
        Basic Pay: ${basicpay}
        HRA: ${hra}
        DA: ${da}
        PF: ${pf}
        Gross Pay: ${grosspay}
        Net Pay: ${netpay}
    `;

    res.send(responseText);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
