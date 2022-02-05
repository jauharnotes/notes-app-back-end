/* eslint-disable linebreak-style */

const {
  addNoteHandler,
  getAllNotesHandler,
  getNoteByidHandler,
  editNoteByIdHandler,
  deleteNoteByidHandler,
} = require('./handler');

// eslint-disable-next-line linebreak-style
const routes = [
  {
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler,
  },
  {
    method: 'GET',
    path: '/notes',
    handler: getAllNotesHandler,
  },
  {
    method: 'GET',
    path: '/notes/{id}',
    handler: getNoteByidHandler,
  },
  {
    method: 'PUT',
    path: '/notes/{id}',
    handler: editNoteByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/notes/{id}',
    handler: deleteNoteByidHandler,
  },
];

module.exports = routes;
