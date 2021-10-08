import {
  addnewContact,
  getContacts,
  getContactWithID,
  updateContact,
  deleteContact,
} from '../controllers/crmController';

const routes = (app) => {
  app
    .route('/contact')
    .get((req, res, next) => {
      // middleware
      console.log(`Request from: ${req.originalUrl}`);
      console.log(`Request type: ${req.method}`);
      next();
    }, getContacts)
    // Post endpoint
    .post(addnewContact);

  app
    .route('/contact/:contactID')
    // get specific contact

    .get(getContactWithID)

    // Updating specific contact
    .put(updateContact)
    // deleting specific contact
    .delete(deleteContact);
};

export default routes;
