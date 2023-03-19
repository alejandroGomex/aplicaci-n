const express = require('express');
const router_person = express.Router();
const user_schema = require('../models/user_schema');

/* POST: http://localhost:5000/api/v1/user/person */
router_person.post('/person', (req, res) => {
  const person = user_schema(req.body);
  person
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

/* GET: http://localhost:5000/api/v1/user */
router_person.get('/', (req, res) => {
  user_schema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

/* GET{:id}: http://localhost:5000/api/v1/user/userId */
router_person.get('/:userId', (req, res) => {
  const { userId } = req.params;
  user_schema
    .findById(userId)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

/* PUT{:id}: http://localhost:5000/api/v1/user/userId */
router_person.put('/:userId', (req, res) => {
  const { userId } = req.params;
  const { name, lastname, dni, address = { city, code_zip, geo } } = req.body;
  user_schema
    .updateOne({ _id: userId }, { $set: { name, lastname, dni, address } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

/* DELETE{:id}: http://localhost:5000/api/v1/user/userId */
router_person.delete('/:userId', (req, res) => {
  const { userId } = req.params;
  user_schema
    .remove({ _id: userId })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
module.exports = router_person;
