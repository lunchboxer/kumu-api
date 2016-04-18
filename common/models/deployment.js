module.exports = function(Deployment) {
  Deployment.validatesInclusionOf('id', {in: [1], message: "Deployment can only have one configuration."});
  Deployment.validatesLengthOf('shortName', {max: 15, message: {min: 'Short name cannot be more than 15 characters.'}});
};
