const express = require ('express');
const router = express.Router();
const db = require('../../knexfile');
const knex = require('knex')
router.get('/', function(req,res) {
    db.on(knex.raw('*')).from('poop').then((data) => {
        console.log(`Executed a query:${knex.raw('*')} `)
        res.send(data)
        console.log(data)
    });
});

router.post('/', (req,res) => {
    db.insert(req.body).returning('*').into('poop').then((data) =>{
        res.send(data)
    });
});

router.patch('/:id', (req,res) => {
    db('poop').where({id: req.params.id}).update(req.body).returning('*').then((data) =>{
        res.send(data);
        res.send(' you ballin boi')
    });
});

router.put('/:id', (req,res) => {
    db('poop').where({id: req.params.id}).update({
        title: req.body.title || null,
        email: req.body.email || null
    }).returning('*').then((data) =>{
        res.send(data);
    });
});

router.delete('/:id',(req,res) => {
    db('poop').where({id: req.params.id}).del().then((data) => {
        res.json({ success:true })
    });
});

 router.get('/:id', (req,res) => {
     db(knex.raw('poop')).where({ id: req.params.id }).select().then((data) => {
         res.send(data)
     });
 });

module.exports = router;