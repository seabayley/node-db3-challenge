const { body, param, validationResult } = require('express-validator')

const errorMessages = {
    invalidString: "Must be a valid object with type of String",
    emptyString: "Must not be an empty String",
    missingField: "Field is required.",
    missingId: "An ID must be supplied.",
    maxChar: (num) => `Character limit exceeded. Maximum is ${num}`
}

const schemeValidationRules = () => {
  return [
    body('scheme_name')
      .exists().withMessage(errorMessages.missingField)
      .isString().withMessage(errorMessages.invalidString)
      .notEmpty().withMessage(errorMessages.emptyString)
      .isLength({ max: 128 }).withMessage(errorMessages.maxChar(128))
  ]
}

const schemeUpdateValidationRules = () => {
    return [
        body('scheme_name')
          .exists().withMessage(errorMessages.missingField)
          .isString().withMessage(errorMessages.invalidString)
          .notEmpty().withMessage(errorMessages.emptyString)
          .isLength({max: 128}).withMessage(errorMessages.maxChar(128)),

        param('id').exists().withMessage(errorMessages.missingId)
    ]
}

const stepValidationRules = () => {
    return [
        body('step_number')
          .exists().withMessage(errorMessages.missingField),

        body('instructions')
          .exists().withMessage(errorMessages.missingField)
          .notEmpty().withMessage(errorMessages.emptyString)
          .isString().withMessage(errorMessages.invalidString),

        param('id').exists().withMessage(errorMessages.missingId)
    ]
}

const validate = (req, res, next) => {
  const errors = validationResult(req)
  if (errors.isEmpty()) {
    return next()
  }
  const extractedErrors = []
  errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }))

  return res.status(422).json({
    errors: extractedErrors,
  })
}

module.exports = {
  schemeValidationRules,
  schemeUpdateValidationRules,
  stepValidationRules,
  validate,
}
