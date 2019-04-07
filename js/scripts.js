// Business Logic for AddressBook
function AddressBook() {
  this.contacts = [],
  this.currentId = 0
}

AddressBook.prototype.addContact = function(contact) {
  contact.id = this.assignId(); // gives contact an Id
  this.contacts.push(contact); // adds,contact to contacts array in AddressBook
,

AddressBook.prototype.assignId = function(contact) {
  this.currentId++;
  return this.currentId;
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
