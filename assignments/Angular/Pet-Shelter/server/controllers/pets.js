const Pet = require('mongoose').model('Pet');

module.exports = {
  index(request, response) {
    Pet.find({})
      .then(pets => response.json(pets))
      .catch(console.log);
  },
  show(request, response) {
    Pet.findById(request.params.pet_id)
      .then(pet => response.json(pet))
      .catch(console.log);
  },
  update(request, response) {
    Pet.findByIdAndUpdate(request.params.pet_id, request.body, { new: true })
      .then(pet => response.json(pet))
      .catch(console.log);
  },
  create(request, response) {
    Pet.create(request.body)
      .then(pet => response.json(pet))
      .catch(error => {
        response
          .status(500)
          .json(
            Object.keys(erorr.errors).map(key => error.errors[key].message)
          );
      });
  },
  destroy(request, response) {
    Pet.findByIdAndRemove(request.params.pet_id)
      .then(pet => response.json(pet))
      .catch(console.log);
  },
};
