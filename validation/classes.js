const validText = require('./valid-text');
const Validator = require('validator');
const languages = require('languages');

const INTERESTS = [
  'Yoga',
  'Meditation',
  'Mindfulness',
  'Martial Art',
  'CrossFit',
  'Running',
  'HIIT',
  'Bootcamp',
  'Personal Development',
  'Nutrition'
]

const langscodes = languages.getAllLanguageCode();
const LANGUAGES = langscodes.map((langcode, i) => languages.getLanguageInfo(langcode).nativeName);

const validateClassInput = data => {
  let errors = {};

  let { name, description, tags } = data;

  name = validText(name) ? name : '';
  description = validText(description) ? description : '';
  // tags = tags.length ? tags : '';
  // languages = languages.length ? languages : '';

  // add error messages to errors object to pass to frontend
  if (Validator.isEmpty(name)) {
    errors.name = 'Name field is required.';
  }
  if (Validator.isEmpty(description)) {
    errors.description = 'Description field is required.';
  }
  // if (Validator.isEmpty(tags)) {
  //   errors.tags = 'Minimum One Tag.';
  // } 
  // else {
  if (!tags.length) {
    errors.tags = 'Must have minimum one tag.';
  } else {
    for (const tag of tags) {
      if (!Validator.isIn(tag, INTERESTS)) {
        errors.tags = 'Consists invalid tags.';
        break;
      }
    }
  }
  // }
  // if (Validator.isEmpty(languages)) {
  //   errors.langauges = 'Minimum One Language.';
  // } 
  // else {
  if (!data.languages.length) {
    errors.languages = 'Must provide minimum one language.'
  } else {
    for (const lang of data.languages) {
      if (!Validator.isIn(lang, LANGUAGES)) {
        errors.languages = 'Consists invalid languages.'
        break;
      }
    }
  }
  // }

  // return error object with messages if any
  // return boolean to classes routes to check if data was valid
  return {
    errors,
    isValid: Object.keys(errors).length === 0
  }
}


module.exports = {
  validateClassInput,
  INTERESTS,
  LANGUAGES
};