// Business Logic for AddressBook
function AddressBook() {
  this.contacts = [],
  this.currentId = 0
}

AddressBook.prototype.addContact = function(contact) {
  contact.id = this.assignId(); // gives contact an Id
  this.contacts.push(contact); // adds,contact to contacts array in AddressBook
}

AddressBook.prototype.assignId = function(contact) {
  this.currentId++;
  return this.currentId;
}

AddressBook.prototype.findContact = function(id) {
  for (var i = 0; i < this.contacts.length; i++) {
    if (this.contacts[i].id === id) {
      return this.contacts[i];
    }
  };
  return false;
}

AddresssBook.prototype.deleteContact = function(id) {
  for (var i = o; i < this.contacts.length; i++) {
    if (this.contacts[i].id === id) {
      delete this.contacts[i];
      return true;
    }
  };
  return false;
}

// Business Logic for Contacts
function Contact(firstName, lastName, phoneNumber) {
  this.firstName = firstName,
  this.lastName = lastName,
  this.phoneNumber = phoneNumber;
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}
