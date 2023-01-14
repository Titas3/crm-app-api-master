
const customers= [
    {
        "name":"Infosys",
        "website":"www.infosys.com",
        "ceo":"Uknown",
        "employees":"200000",
        "year":"1995",
        "turnover":"100000000"
    },
    {
        "name":"TCS",
        "website":"www.tcs.com",
        "ceo":"Uknown",
        "employees":"300000",
        "year":"1995",
        "turnover":"200000000"
    }
];

module.exports.get = (req, res)=>{
    res.status(200).send(customers);
}

module.exports.add = (req, res)=>{
    const customer = req.body;
    console.log(customer);
    customers.push(customer);
    console.log(customers)
    res.status(200).send(customers);
}
module.exports.update = (req, res)=>{
    const customer = req.body;
    let foundCustomerIndex = customer.findIndex(c=> c.name==customer.name);
    customer[foundCustomerIndex]=customer;
    console.log(customer);
    res.status(200).send(customers);
}