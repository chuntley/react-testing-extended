import {queryAllByAttribute, buildQueries} from '@testing-library/react'

 const getIdAttribute = 'id'

 const queryAllById = (...args) => queryAllByAttribute(getIdAttribute, ...args)

 const getMultipleError = (c, id) =>
  `Found multiple elements by: [${getIdAttribute}="${id}"]`
const getMissingError = (c, id) =>
  `Unable to find an element by: [${getIdAttribute}="${id}"]`

 const [queryById, getAllById, getById, findAllById, findById] = buildQueries(
  queryAllById,
  getMultipleError,
  getMissingError,
)

 export {queryById, queryAllById, getById, getAllById, findAllById, findById}
 