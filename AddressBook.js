class Contact {
  constructor(firstName, lastName, address, city, state, zip, phoneNumber, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
    this.city = city;
    this.state = state;
    this.zip = zip;
    this.phoneNumber = phoneNumber;
    this.email = email;
  }
}

// Define an address book object with an array to hold contacts.
class AddressBook {
  constructor() {
    this.contacts = [];
  }

  addContact(contact) {
    this.contacts.push(contact);
  }

 
}

// Create a new address book.
let myAddressBook = new AddressBook();

// Add some contacts to the address book.
myAddressBook.addContact(new Contact("Anjali", "Rawke", "Bhagwant Nagar", "Nanded", "Maharashtra", "431605", "7058162286", "anjalirawke@gmail.com"));
myAddressBook.addContact(new Contact("Apeksha", "Patil", "Anand Nagar", "Nanded", "Maharashtra", "431605", "9011100740", "apekshapatil@gmail.com"));

console.log(myAddressBook);

