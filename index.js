const yargs = require('yargs');
const { hideBin } = require("yargs/helpers");

const { listContacts, getContactById, removeContact, addContact } = require('./contacts');

const invokeAction = async ({action, id, name, email, phone}) => {
    switch(action) {
        case 'list':
            const allContacts = await listContacts();
            console.table(allContacts);
            break;
        
        case 'get':
            const oneContact = await getContactById(id);
            console.log(oneContact);
            break;

        case 'add':
            const newContact = await addContact({name, email, phone});
            console.log(newContact);
            break;
          
        case 'remove':
            const removedContact = await removeContact(id);
            console.log(removedContact);
            break;
          
        default:
            console.warn('\x1B[31m Unknown action type!');
    }
};

const arr = hideBin(process.argv);
const { argv } = yargs(arr);
invokeAction(argv);