import * as testingLibrary from '@testing-library/react'
import * as idQueries from './queries/id';
import * as classQueries from './queries/class';

module.exports = {
  ...testingLibrary,
  ...classQueries,
  ...idQueries,
}